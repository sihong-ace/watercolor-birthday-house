# 水彩涂鸦小屋 · 非商业源码版

一个水彩风格的交互式 3D 小屋：欢迎页稻穗、门廊找钥匙、天气与昼夜、旋转木马照片、生日蛋糕、猫咪、电话字幕、日历烟花、挂画与电视轮播。

**这是非商业源码版。** 旋转木马改编自 [咕噜蛋Daria / Carousel Lamp](https://github.com/Daria1216/carousel-lamp)，保留上游非商业许可及署名。请阅读 [LICENSE.md](LICENSE.md) 和 [第三方说明](THIRD_PARTY_NOTICES.md)。

## 直接打开

Windows：解压整个文件夹，双击 `启动生日小屋.cmd`，保持打开的服务窗口运行。无需安装 Node.js；使用支持 WebGL 的现代浏览器。不能只发送 HTML，也不要直接双击 HTML 以 file:// 方式运行。

其他系统：安装 Node.js 后运行 `npm run dev`，打开终端打印的地址。已附带编译好的 `assets/door-scene.js`，仅体验不需要安装 npm 依赖。也可以用任意静态 HTTP 服务托管整个目录。

## 修改源码

安装 Node.js 后，在项目目录执行：

```sh
npm install
npm run build:scene
npm run dev
```

`src/` 内 3D 代码改动后须重新构建。HTML、CSS、配置 JSON 和图片替换后刷新即可。端口被占用时，可修改 `scripts/serve.mjs` 的端口；Windows 启动器会自动尝试可用端口。

## 目录

```text
index.html                 欢迎页及完整入口
interior-preview.html      直接进入室内
model.html                 门廊入口
reference-details.html     物件近景
main.js / style.css        欢迎页与整体样式
guide.js                   可展开的玩法提示
music.js                   原创合成钟琴
scene-bootstrap.js         场景衔接
src/                       3D 场景和交互源码
assets/doodles/            四幅公开涂鸦及生成记录
assets/carousel-photos.json 16 个预制挂片配置
assets/tv-slides.json       电视轮播配置
assets/birthday-letter.json 示例信件
assets/carousel-lamp/       上游代码、素材与许可
assets/fonts/              离线文楷及许可
assets/textures/           通用场景材质
assets/door-scene.js        已构建场景
scripts/                   构建和本地服务
 docs/                     玩法、定制与脱敏说明
```

公开版使用四幅涂鸦循环填充 16 个挂片；所有示例素材随目录附带，换电脑可直接显示。自己通过网页上传的照片只保存在当前浏览器，不会自动写回源码或随压缩包分享；要预置分享请修改 JSON 配置。

玩法直接显示在左下角，也见 [互动说明](docs/互动说明.md)。演示电话为 `1234567`；日历采用示例日期 2026 年 6 月 8 日与 18 日。

[定制说明](docs/定制说明.md) · [脱敏说明](docs/脱敏说明.md)

本版本保留当前场景布局，包括夜晚右窗前台阶上的背篓。按制作要求没有运行浏览器回归或自动化测试；构建文件已随包提供。
