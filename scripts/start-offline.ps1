param([int]$Port = 5175, [switch]$NoBrowser)
$ErrorActionPreference = 'Stop'
$root = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$rootPrefix = $root.TrimEnd('\') + '\'
$listener = $null
for ($attempt = 0; $attempt -lt 20; $attempt++) {
    try {
        $candidate = if ($Port -eq 0) { 0 } else { $Port + $attempt }
        $listener = New-Object Net.Sockets.TcpListener([Net.IPAddress]::Loopback, $candidate)
        $listener.Start(128)
        break
    } catch {
        if ($listener) { $listener.Stop(); $listener = $null }
    }
}
if (-not $listener) { throw 'No available local port. Close the previous launcher and try again.' }
$actualPort = ([Net.IPEndPoint]$listener.LocalEndpoint).Port
$url = "http://127.0.0.1:$actualPort/"
Write-Host "Birthday House: $url"
Write-Host 'Keep this window open while visiting. Close it to stop the local server.'
$types = @{ '.html'='text/html; charset=utf-8'; '.js'='text/javascript; charset=utf-8'; '.css'='text/css; charset=utf-8'; '.json'='application/json; charset=utf-8'; '.png'='image/png'; '.jpg'='image/jpeg'; '.jpeg'='image/jpeg'; '.webp'='image/webp'; '.avif'='image/avif'; '.svg'='image/svg+xml'; '.txt'='text/plain; charset=utf-8'; '.md'='text/plain; charset=utf-8'; '.woff2'='font/woff2'; '.ttf'='font/ttf'; '.mp3'='audio/mpeg'; '.m4a'='audio/mp4' }
if (-not $NoBrowser) { Start-Process $url }
try {
    while ($true) {
        $client = $listener.AcceptTcpClient()
        $client.ReceiveTimeout = 2000
        $client.SendTimeout = 10000
        try {
            $stream = $client.GetStream()
            $reader = New-Object IO.StreamReader($stream, [Text.Encoding]::ASCII, $false, 1024, $true)
            $requestLine = $reader.ReadLine()
            if (-not $requestLine) { continue }
            $parts = $requestLine.Split(' ')
            if ($parts.Length -lt 2) { continue }
            $method = $parts[0]
            for ($i = 0; $i -lt 100; $i++) { if ([string]::IsNullOrEmpty($reader.ReadLine())) { break } }
            $status = '200 OK'; $type = 'text/plain; charset=utf-8'; $bytes = [byte[]]@()
            if ($method -ne 'GET' -and $method -ne 'HEAD') {
                $status = '405 Method Not Allowed'; $bytes = [Text.Encoding]::UTF8.GetBytes('GET and HEAD only.')
            } else {
                try {
                    $pathname = [Uri]::UnescapeDataString(($parts[1].Split('?')[0])).Replace('/', '\')
                    if ($pathname -eq '\') { $pathname = '\index.html' }
                    $target = [IO.Path]::GetFullPath((Join-Path $root $pathname.TrimStart('\')))
                    if (-not $target.StartsWith($rootPrefix, [StringComparison]::OrdinalIgnoreCase)) {
                        $status = '403 Forbidden'; $bytes = [Text.Encoding]::UTF8.GetBytes('Forbidden.')
                    } elseif (-not [IO.File]::Exists($target)) {
                        $status = '404 Not Found'; $bytes = [Text.Encoding]::UTF8.GetBytes('File not found.')
                    } else {
                        $bytes = [IO.File]::ReadAllBytes($target)
                        $extension = [IO.Path]::GetExtension($target).ToLowerInvariant()
                        $type = if ($types.ContainsKey($extension)) { $types[$extension] } else { 'application/octet-stream' }
                    }
                } catch { $status = '400 Bad Request'; $bytes = [Text.Encoding]::UTF8.GetBytes('Invalid path.') }
            }
            $header = "HTTP/1.1 $status`r`nContent-Type: $type`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`nCache-Control: no-cache`r`nX-Content-Type-Options: nosniff`r`n`r`n"
            $headerBytes = [Text.Encoding]::ASCII.GetBytes($header)
            $stream.Write($headerBytes, 0, $headerBytes.Length)
            if ($method -ne 'HEAD' -and $bytes.Length) { $stream.Write($bytes, 0, $bytes.Length) }
            $stream.Flush()
        } catch { Write-Verbose $_.Exception.Message }
        finally { $client.Close() }
    }
} finally { $listener.Stop() }
