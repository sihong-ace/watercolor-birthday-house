// A shared rural view, painted with translucent washes for each time of day.
export function paintWindowLandscape(ctx,state,mode){
  const w=1024,h=512,night=mode==='night',blue=mode==='blue',wet=mode==='rain',cloudy=wet||mode==='overcast',warm=mode==='sunset';
  const hex=c=>'#'+c.getHexString();
  ctx.clearRect(0,0,w,h);
  const sky=ctx.createLinearGradient(0,0,0,h);sky.addColorStop(0,hex(state.sky[0]));sky.addColorStop(.57,hex(state.sky[1]));sky.addColorStop(1,hex(state.hills[1]));ctx.fillStyle=sky;ctx.fillRect(0,0,w,h);
  const ellipse=(x,y,rx,ry,color)=>{ctx.fillStyle=color;ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fill();};
  if(night||blue){for(let i=0;i<48;i++){const x=31+(i*193)%968,y=20+(i*47)%175;ellipse(x,y,i%7===0?1.5:.8,i%7===0?1.5:.8,night?'#fff2cba8':'#eef0d35a');}ellipse(760,86,23,23,night?'#ffefc7':'#e8e9d691');ellipse(770,79,22,22,hex(state.sky[0]));}
  else if(!cloudy){const x=warm?745:188,y=warm?217:98;const glow=ctx.createRadialGradient(x,y,0,x,y,155);glow.addColorStop(0,warm?'#ffebb9ac':'#fffbe189');glow.addColorStop(1,'#fff2ca00');ctx.fillStyle=glow;ctx.fillRect(x-155,y-155,310,310);ellipse(x,y,warm?25:20,warm?25:20,'#fff2c7b8');}
  // Soft overlapping cloud washes rather than hard, repeated bands.
  for(let i=0;i<7;i++){const x=80+i*157,y=cloudy?80+i%3*25:64+i%3*38;ellipse(x,y,95+i%3*22,cloudy?26:12,night?'#879aae12':wet?'#506b7821':cloudy?'#f6f2e144':'#fff8e33b');ellipse(x+35,y-9,67,18,night?'#879aae0d':'#f7f1df24');}
  const ridges=[[[0,298],[90,253],[174,267],[247,202],[320,241],[403,214],[487,265],[573,230],[681,259],[789,207],[883,246],[960,215],[1024,250]],[[0,339],[112,294],[223,313],[337,270],[448,302],[553,265],[672,302],[780,282],[890,313],[1024,267]],[[0,369],[100,347],[213,359],[321,320],[427,342],[535,319],[648,353],[760,322],[879,350],[1024,316]]];
  ridges.forEach((points,i)=>{ctx.fillStyle=hex(state.hills[i]);ctx.beginPath();ctx.moveTo(0,h);ctx.lineTo(...points[0]);for(let j=1;j<points.length;j++){const a=points[j-1],b=points[j];ctx.quadraticCurveTo(a[0],a[1],(a[0]+b[0])/2,(a[1]+b[1])/2);}ctx.lineTo(1024,points.at(-1)[1]);ctx.lineTo(w,h);ctx.fill();});
  // Mist sits between the hills and the terraced fields.
  const mist=ctx.createLinearGradient(0,270,0,400);mist.addColorStop(0,'#efe7d400');mist.addColorStop(.46,wet?'#bacdd14b':night?'#9aaeb414':'#efe7d437');mist.addColorStop(1,'#efe7d400');ctx.fillStyle=mist;ctx.fillRect(0,270,w,130);
  const fieldColors=night?['#425c56','#4d655b','#3a544d']:blue?['#789481','#8a9f86','#647f73']:warm?['#b6ad69','#c2b572','#929d66']:wet?['#829e83','#93a58a','#6e8f79']:['#aeb97c','#bcc391','#8ca570'];
  for(let i=0;i<6;i++){ctx.fillStyle=fieldColors[i%3];ctx.beginPath();ctx.moveTo(0,382+i*24);ctx.bezierCurveTo(235,342+i*26,544,412+i*13,1024,345+i*31);ctx.lineTo(1024,392+i*31);ctx.bezierCurveTo(570,459+i*10,220,387+i*26,0,405+i*24);ctx.fill();ctx.strokeStyle=night?'#c8d8a519':'#ede7b64b';ctx.lineWidth=1.2;ctx.stroke();}
  // A winding stream catches the same light as the sky.
  ctx.fillStyle=night?'#809dab':blue?'#acc3ca':warm?'#e6c9a0':wet?'#acbfc1':'#c9d7cd';ctx.beginPath();ctx.moveTo(572,341);ctx.bezierCurveTo(442,366,678,396,556,434);ctx.bezierCurveTo(487,457,457,480,466,512);ctx.lineTo(574,512);ctx.bezierCurveTo(542,475,620,460,638,434);ctx.bezierCurveTo(700,390,490,362,583,341);ctx.fill();ctx.strokeStyle=night?'#c4dae14a':'#f7eddc8c';ctx.lineWidth=1.4;for(let i=0;i<10;i++){ctx.beginPath();ctx.moveTo(535+i%3*18,404+i*10);ctx.lineTo(558+i%3*18,404+i*10);ctx.stroke();}
  const tree=(x,y,size)=>{ctx.strokeStyle=night?'#3c4844':'#6f7358';ctx.lineWidth=size*.07;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-2,y-size*.8);ctx.stroke();for(let i=0;i<13;i++){const a=i*2.4,r=(i%4)/4*size*.28;ellipse(x+Math.cos(a)*r,y-size*.65+Math.sin(a)*r,size*(.14+i%3*.025),size*.15,night?'#354f49b0':blue?'#516f66a0':warm?'#718357ad':wet?'#527c67a3':'#648759a0');}};
  for(let i=0;i<17;i++)tree(42+i*59+(i%3)*8,350+(i%4)*7,23+(i%5)*5);
  // Small village roofs, warm windows at dusk, and a low footbridge.
  for(let i=0;i<5;i++){const x=704+i*32,y=334+i%2*12;ctx.fillStyle=night?'#7d8176':warm?'#e7d4b0':'#d9dac5';ctx.fillRect(x,y,28,22);ctx.fillStyle=night?'#46525a':'#7c8175';ctx.beginPath();ctx.moveTo(x-4,y);ctx.lineTo(x+13,y-12);ctx.lineTo(x+32,y);ctx.fill();ctx.fillStyle=night||blue?'#f2cb88':'#8b9d95';ctx.fillRect(x+7,y+7,5,6);ctx.fillRect(x+18,y+7,5,6);}
  ctx.strokeStyle=night?'#788c85':'#9b9d7a';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(549,375);ctx.quadraticCurveTo(583,364,614,378);ctx.stroke();ctx.lineWidth=1.6;for(let i=0;i<6;i++){ctx.beginPath();ctx.moveTo(552+i*12,372);ctx.lineTo(552+i*12,362+i*.5);ctx.stroke();}
  tree(51,509,140);tree(986,508,154);tree(935,486,100);
  // A fixed grain pattern avoids flickering while colors transition.
  ctx.save();for(let i=0;i<2200;i++){const x=(i*173.71)%w,y=(i*97.37)%h;ctx.fillStyle=i%2?'#fff6dc0b':'#394d4209';ctx.fillRect(x,y,1+i%3,1+i%2);}ctx.restore();
  if(wet){const veil=ctx.createLinearGradient(0,0,0,h);veil.addColorStop(0,'#819ba52b');veil.addColorStop(1,'#b0c4c50a');ctx.fillStyle=veil;ctx.fillRect(0,0,w,h);}
}
