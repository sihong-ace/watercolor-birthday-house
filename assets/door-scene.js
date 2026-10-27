var BirthdayDoor=(()=>{var Vl=Object.defineProperty;var If=Object.getOwnPropertyDescriptor;var Lf=Object.getOwnPropertyNames;var Df=Object.prototype.hasOwnProperty;var Nf=(i,e)=>{for(var t in e)Vl(i,t,{get:e[t],enumerable:!0})},Uf=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Lf(e))!Df.call(i,s)&&s!==t&&Vl(i,s,{get:()=>e[s],enumerable:!(n=If(e,s))||n.enumerable});return i};var Ff=i=>Uf(Vl({},"__esModule",{value:!0}),i);var xy={};Nf(xy,{mountDoorScene:()=>_y,mountInteriorScene:()=>Ef,mountReferencePreview:()=>Mf});var ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Su=0,Lc=1,Tu=2;var Qr=1,wu=2,ri=3,xi=0,hn=1,xt=2,oi=0,ss=1,In=2,Dc=3,Nc=4,Au=5;var Ni=100,Ru=101,Cu=102,Pu=103,Iu=104,Lu=200,Du=201,Nu=202,Uu=203,jo=204,Qo=205,Fu=206,Ou=207,Bu=208,Hu=209,zu=210,ku=211,Vu=212,Gu=213,Wu=214,ea=0,ta=1,na=2,rs=3,ia=4,sa=5,ra=6,oa=7,Uc=0,Xu=1,qu=2,Xn=0,Fc=1,Oc=2,Bc=3,Ei=4,Hc=5,zc=6,kc=7;var Vc=300,Gi=301,us=302,Oa=303,Ba=304,eo=306,wn=1e3,sn=1001,Hs=1002,qt=1003,Yu=1004;var to=1005;var Jt=1006,Ha=1007;var Wi=1008;var dn=1009,Gc=1010,Wc=1011,ir=1012,za=1013,qn=1014,Ln=1015,ai=1016,ka=1017,Va=1018,sr=1020,Xc=35902,qc=35899,Yc=1021,Zc=1022,Dn=1023,Qn=1026,Xi=1027,Ga=1028,Wa=1029,qi=1030,Xa=1031;var qa=1033,no=33776,io=33777,so=33778,ro=33779,Ya=35840,Za=35841,$a=35842,Ja=35843,Ka=36196,ja=37492,Qa=37496,el=37488,tl=37489,oo=37490,nl=37491,il=37808,sl=37809,rl=37810,ol=37811,al=37812,ll=37813,cl=37814,hl=37815,ul=37816,dl=37817,fl=37818,pl=37819,ml=37820,gl=37821,_l=36492,xl=36494,yl=36495,vl=36283,bl=36284,ao=36285,El=36286;var Sr=2300,aa=2301,Jo=2302,_c=2303,xc=2400,yc=2401,vc=2402;var Zu=3200;var Ml=0,$u=1,Mi="",$e="srgb",Tr="srgb-linear",wr="linear",mt="srgb";var ns=7680;var bc=519,Ju=512,Ku=513,ju=514,Sl=515,Qu=516,ed=517,Tl=518,td=519,la=35044;var $c="300 es",kn=2e3,zs=2001;function Of(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nd(){let i=ks("canvas");return i.style.display="block",i}var Bh={},Vs=null;function Ar(...i){let e="THREE."+i.shift();Vs?Vs("log",e,...i):console.log(e,...i)}function id(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Je(...i){i=id(i);let e="THREE."+i.shift();if(Vs)Vs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=id(i);let e="THREE."+i.shift();if(Vs)Vs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function is(...i){let e=i.join(" ");e in Bh||(Bh[e]=!0,Je(...i))}function sd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var rd={[ea]:ta,[na]:ra,[ia]:oa,[rs]:sa,[ta]:ea,[ra]:na,[oa]:ia,[sa]:rs},Vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hh=1234567,Os=Math.PI/180,os=180/Math.PI;function jn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function Jc(i,e){return(i%e+e)%e}function Hf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function zf(i,e,t){return i!==e?(t-i)/(e-i):0}function br(i,e,t){return(1-t)*i+t*e}function kf(i,e,t,n){return br(i,e,1-Math.exp(-t*n))}function Vf(i,e=1){return e-Math.abs(Jc(i,e*2)-e)}function Gf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Wf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Xf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function qf(i,e){return i+Math.random()*(e-i)}function Yf(i){return i*(.5-Math.random())}function Zf(i){i!==void 0&&(Hh=i);let e=Hh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $f(i){return i*Os}function Jf(i){return i*os}function Kf(i){return(i&i-1)===0&&i!==0}function jf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ep(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),d=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),u=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*d,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*d,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*d,a*c);break;case"XZX":i.set(a*d,l*m,l*u,a*c);break;case"YXY":i.set(l*u,a*d,l*m,a*c);break;case"ZYZ":i.set(l*m,l*u,a*d,a*c);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var at={DEG2RAD:Os,RAD2DEG:os,generateUUID:jn,clamp:st,euclideanModulo:Jc,mapLinear:Hf,inverseLerp:zf,lerp:br,damp:kf,pingpong:Vf,smoothstep:Gf,smootherstep:Wf,randInt:Xf,randFloat:qf,randFloatSpread:Yf,seededRandom:Zf,degToRad:$f,radToDeg:Jf,isPowerOfTwo:Kf,ceilPowerOfTwo:jf,floorPowerOfTwo:Qf,setQuaternionFromProperEuler:ep,normalize:_t,denormalize:zn},J=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ln=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],f=n[s+3],h=r[o+0],u=r[o+1],m=r[o+2],b=r[o+3];if(f!==b||l!==h||c!==u||d!==m){let g=l*h+c*u+d*m+f*b;g<0&&(h=-h,u=-u,m=-m,b=-b,g=-g);let p=1-a;if(g<.9995){let y=Math.acos(g),v=Math.sin(y);p=Math.sin(p*y)/v,a=Math.sin(a*y)/v,l=l*p+h*a,c=c*p+u*a,d=d*p+m*a,f=f*p+b*a}else{l=l*p+h*a,c=c*p+u*a,d=d*p+m*a,f=f*p+b*a;let y=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=y,c*=y,d*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],f=r[o],h=r[o+1],u=r[o+2],m=r[o+3];return e[t]=a*m+d*f+l*u-c*h,e[t+1]=l*m+d*h+c*f-a*u,e[t+2]=c*m+d*u+a*h-l*f,e[t+3]=d*m-a*f-l*h-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),f=a(r/2),h=l(n/2),u=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=h*d*f+c*u*m,this._y=c*u*f-h*d*m,this._z=c*d*m+h*u*f,this._w=c*d*f-h*u*m;break;case"YXZ":this._x=h*d*f+c*u*m,this._y=c*u*f-h*d*m,this._z=c*d*m-h*u*f,this._w=c*d*f+h*u*m;break;case"ZXY":this._x=h*d*f-c*u*m,this._y=c*u*f+h*d*m,this._z=c*d*m+h*u*f,this._w=c*d*f-h*u*m;break;case"ZYX":this._x=h*d*f-c*u*m,this._y=c*u*f+h*d*m,this._z=c*d*m-h*u*f,this._w=c*d*f+h*u*m;break;case"YZX":this._x=h*d*f+c*u*m,this._y=c*u*f+h*d*m,this._z=c*d*m-h*u*f,this._w=c*d*f-h*u*m;break;case"XZY":this._x=h*d*f-c*u*m,this._y=c*u*f-h*d*m,this._z=c*d*m+h*u*f,this._w=c*d*f+h*u*m;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],f=t[10],h=n+a+f;if(h>0){let u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(d-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(d-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+d)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),d=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*d,this.y=n+l*d+a*c-r*f,this.z=s+l*f+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gl.copy(this).projectOnVector(e),this.sub(Gl)}reflect(e){return this.sub(Gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gl=new P,zh=new ln,tt=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],f=n[7],h=n[2],u=n[5],m=n[8],b=s[0],g=s[3],p=s[6],y=s[1],v=s[4],_=s[7],M=s[2],S=s[5],w=s[8];return r[0]=o*b+a*y+l*M,r[3]=o*g+a*v+l*S,r[6]=o*p+a*_+l*w,r[1]=c*b+d*y+f*M,r[4]=c*g+d*v+f*S,r[7]=c*p+d*_+f*w,r[2]=h*b+u*y+m*M,r[5]=h*g+u*v+m*S,r[8]=h*p+u*_+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*r,u=c*r-o*l,m=t*f+n*h+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=f*b,e[1]=(s*c-d*n)*b,e[2]=(a*n-s*o)*b,e[3]=h*b,e[4]=(d*t-s*l)*b,e[5]=(s*r-a*t)*b,e[6]=u*b,e[7]=(n*l-c*t)*b,e[8]=(o*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wl.makeScale(e,t)),this}rotate(e){return is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wl.makeRotation(-e)),this}translate(e,t){return is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wl=new tt,kh=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tp(){let i={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Tr]:{primaries:e,whitePoint:n,transfer:wr,toXYZ:kh,fromXYZ:Vh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:kh,fromXYZ:Vh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}var lt=tp();function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ys,ca=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=ks("canvas")),ys.width=e.width,ys.height=e.height;let s=ys.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ys}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ks("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},np=0,Gs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xl(s[o].image)):r.push(Xl(s[o]))}else r=Xl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Xl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ca.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var ip=0,ql=new P,rn=class i extends Vn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=sn,s=sn,r=Jt,o=Wi,a=Dn,l=dn,c=i.DEFAULT_ANISOTROPY,d=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=jn(),this.name="",this.source=new Gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ql).x}get height(){return this.source.getSize(ql).y}get depth(){return this.source.getSize(ql).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wn:e.x=e.x-Math.floor(e.x);break;case sn:e.x=e.x<0?0:1;break;case Hs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wn:e.y=e.y-Math.floor(e.y);break;case sn:e.y=e.y<0?0:1;break;case Hs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Vc;rn.DEFAULT_ANISOTROPY=1;var Pt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],u=l[5],m=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(u+1)/2,M=(p+1)/2,S=(d+h)/4,w=(f+b)/4,E=(m+g)/4;return v>_&&v>M?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=w/n):_>M?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=E/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=w/r,s=E/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(f-b)*(f-b)+(h-d)*(h-d));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(f-b)/y,this.z=(h-d)/y,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ha=class extends Vn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new rn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gs(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends ha{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Rr=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ua=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ht=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,l,c,d,f,h,u,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,d,f,h,u,m,b,g)}set(e,t,n,s,r,o,a,l,c,d,f,h,u,m,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=f,p[14]=h,p[3]=u,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=o*d,u=o*f,m=a*d,b=a*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=u+m*c,t[5]=h-b*c,t[9]=-a*l,t[2]=b-h*c,t[6]=m+u*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*d,u=l*f,m=c*d,b=c*f;t[0]=h+b*a,t[4]=m*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=u*a-m,t[6]=b+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*d,u=l*f,m=c*d,b=c*f;t[0]=h-b*a,t[4]=-o*f,t[8]=m+u*a,t[1]=u+m*a,t[5]=o*d,t[9]=b-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*d,u=o*f,m=a*d,b=a*f;t[0]=l*d,t[4]=m*c-u,t[8]=h*c+b,t[1]=l*f,t[5]=b*c+h,t[9]=u*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,u=o*c,m=a*l,b=a*c;t[0]=l*d,t[4]=b-h*f,t[8]=m*f+u,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=u*f+m,t[10]=h-b*f}else if(e.order==="XZY"){let h=o*l,u=o*c,m=a*l,b=a*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=h*f+b,t[5]=o*d,t[9]=u*f-m,t[2]=m*f-u,t[6]=a*d,t[10]=b*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sp,e,rp)}lookAt(e,t,n){let s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ri.crossVectors(n,mn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ri.crossVectors(n,mn)),Ri.normalize(),_o.crossVectors(mn,Ri),s[0]=Ri.x,s[4]=_o.x,s[8]=mn.x,s[1]=Ri.y,s[5]=_o.y,s[9]=mn.y,s[2]=Ri.z,s[6]=_o.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],f=n[5],h=n[9],u=n[13],m=n[2],b=n[6],g=n[10],p=n[14],y=n[3],v=n[7],_=n[11],M=n[15],S=s[0],w=s[4],E=s[8],A=s[12],R=s[1],N=s[5],D=s[9],B=s[13],O=s[2],H=s[6],G=s[10],V=s[14],K=s[3],Q=s[7],he=s[11],Z=s[15];return r[0]=o*S+a*R+l*O+c*K,r[4]=o*w+a*N+l*H+c*Q,r[8]=o*E+a*D+l*G+c*he,r[12]=o*A+a*B+l*V+c*Z,r[1]=d*S+f*R+h*O+u*K,r[5]=d*w+f*N+h*H+u*Q,r[9]=d*E+f*D+h*G+u*he,r[13]=d*A+f*B+h*V+u*Z,r[2]=m*S+b*R+g*O+p*K,r[6]=m*w+b*N+g*H+p*Q,r[10]=m*E+b*D+g*G+p*he,r[14]=m*A+b*B+g*V+p*Z,r[3]=y*S+v*R+_*O+M*K,r[7]=y*w+v*N+_*H+M*Q,r[11]=y*E+v*D+_*G+M*he,r[15]=y*A+v*B+_*V+M*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],u=e[14],m=e[3],b=e[7],g=e[11],p=e[15],y=l*u-c*h,v=a*u-c*f,_=a*h-l*f,M=o*u-c*d,S=o*h-l*d,w=o*f-a*d;return t*(b*y-g*v+p*_)-n*(m*y-g*M+p*S)+s*(m*v-b*M+p*w)-r*(m*_-b*S+g*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],d=e[10];return t*(o*d-a*c)-n*(r*d-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],u=e[11],m=e[12],b=e[13],g=e[14],p=e[15],y=t*a-n*o,v=t*l-s*o,_=t*c-r*o,M=n*l-s*a,S=n*c-r*a,w=s*c-r*l,E=d*b-f*m,A=d*g-h*m,R=d*p-u*m,N=f*g-h*b,D=f*p-u*b,B=h*p-u*g,O=y*B-v*D+_*N+M*R-S*A+w*E;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/O;return e[0]=(a*B-l*D+c*N)*H,e[1]=(s*D-n*B-r*N)*H,e[2]=(b*w-g*S+p*M)*H,e[3]=(h*S-f*w-u*M)*H,e[4]=(l*R-o*B-c*A)*H,e[5]=(t*B-s*R+r*A)*H,e[6]=(g*_-m*w-p*v)*H,e[7]=(d*w-h*_+u*v)*H,e[8]=(o*D-a*R+c*E)*H,e[9]=(n*R-t*D-r*E)*H,e[10]=(m*S-b*_+p*y)*H,e[11]=(f*_-d*S-u*y)*H,e[12]=(a*A-o*N-l*E)*H,e[13]=(t*N-n*A+s*E)*H,e[14]=(b*v-m*M-g*y)*H,e[15]=(d*M-f*v+h*y)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,f=a+a,h=r*c,u=r*d,m=r*f,b=o*d,g=o*f,p=a*f,y=l*c,v=l*d,_=l*f,M=n.x,S=n.y,w=n.z;return s[0]=(1-(b+p))*M,s[1]=(u+_)*M,s[2]=(m-v)*M,s[3]=0,s[4]=(u-_)*S,s[5]=(1-(h+p))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(m+v)*w,s[9]=(g-y)*w,s[10]=(1-(h+b))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=vs.set(s[0],s[1],s[2]).length(),a=vs.set(s[4],s[5],s[6]).length(),l=vs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),On.copy(this);let c=1/o,d=1/a,f=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=d,On.elements[5]*=d,On.elements[6]*=d,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,t.setFromRotationMatrix(On),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=kn,l=!1){let c=this.elements,d=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),u=(n+s)/(n-s),m,b;if(l)m=r/(o-r),b=o*r/(o-r);else if(a===kn)m=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(a===zs)m=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=kn,l=!1){let c=this.elements,d=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),u=-(n+s)/(n-s),m,b;if(l)m=1/(o-r),b=o/(o-r);else if(a===kn)m=-2/(o-r),b=-(o+r)/(o-r);else if(a===zs)m=-1/(o-r),b=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},vs=new P,On=new ht,sp=new P(0,0,0),rp=new P(1,1,1),Ri=new P,_o=new P,mn=new P,Gh=new ht,Wh=new ln,An=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],f=s[2],h=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Ws=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},op=0,Xh=new P,bs=new ln,di=new ht,xo=new P,hr=new P,ap=new P,lp=new ln,qh=new P(1,0,0),Yh=new P(0,1,0),Zh=new P(0,0,1),$h={type:"added"},cp={type:"removed"},Es={type:"childadded",child:null},Yl={type:"childremoved",child:null},Bt=class i extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new An,n=new ln,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new tt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(qh,e)}rotateY(e){return this.rotateOnAxis(Yh,e)}rotateZ(e){return this.rotateOnAxis(Zh,e)}translateOnAxis(e,t){return Xh.copy(e).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qh,e)}translateY(e){return this.translateOnAxis(Yh,e)}translateZ(e){return this.translateOnAxis(Zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xo.copy(e):xo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(hr,xo,this.up):di.lookAt(xo,hr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(di),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($h),Es.child=e,this.dispatchEvent(Es),Es.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cp),Yl.child=e,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($h),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,lp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),u=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Bt.DEFAULT_UP=new P(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ue=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},hp={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),u=.02,m=.005;c.inputState.pinching&&h>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Zl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=Jc(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Zl(o,r,e+1/3),this.g=Zl(o,r,e),this.b=Zl(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=$e){function n(r){r!==void 0&&parseFloat(r)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$e){let n=od[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$e){return lt.workingToColorSpace(nn.copy(this),e),Math.round(st(nn.r*255,0,255))*65536+Math.round(st(nn.g*255,0,255))*256+Math.round(st(nn.b*255,0,255))}getHexString(e=$e){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(nn.copy(this),t);let n=nn.r,s=nn.g,r=nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=$e){lt.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,s=nn.b;return e!==$e?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(yo);let n=br(Ci.h,yo.h,t),s=br(Ci.s,yo.s,t),r=br(Ci.l,yo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new je;je.NAMES=od;var yi=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new P,fi=new P,$l=new P,pi=new P,Ms=new P,Ss=new P,Jh=new P,Jl=new P,Kl=new P,jl=new P,Ql=new Pt,ec=new Pt,tc=new Pt,Jn=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bn.subVectors(e,t),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bn.subVectors(s,t),fi.subVectors(n,t),$l.subVectors(e,t);let o=Bn.dot(Bn),a=Bn.dot(fi),l=Bn.dot($l),c=fi.dot(fi),d=fi.dot($l),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,u=(c*l-a*d)*h,m=(o*d-a*l)*h;return r.set(1-u-m,m,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ql.setScalar(0),ec.setScalar(0),tc.setScalar(0),Ql.fromBufferAttribute(e,t),ec.fromBufferAttribute(e,n),tc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ql,r.x),o.addScaledVector(ec,r.y),o.addScaledVector(tc,r.z),o}static isFrontFacing(e,t,n,s){return Bn.subVectors(n,t),fi.subVectors(e,t),Bn.cross(fi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Bn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ms.subVectors(s,n),Ss.subVectors(r,n),Jl.subVectors(e,n);let l=Ms.dot(Jl),c=Ss.dot(Jl);if(l<=0&&c<=0)return t.copy(n);Kl.subVectors(e,s);let d=Ms.dot(Kl),f=Ss.dot(Kl);if(d>=0&&f<=d)return t.copy(s);let h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Ms,o);jl.subVectors(e,r);let u=Ms.dot(jl),m=Ss.dot(jl);if(m>=0&&u<=m)return t.copy(r);let b=u*c-l*m;if(b<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Ss,a);let g=d*m-u*f;if(g<=0&&f-d>=0&&u-m>=0)return Jh.subVectors(r,s),a=(f-d)/(f-d+(u-m)),t.copy(s).addScaledVector(Jh,a);let p=1/(g+b+h);return o=b*p,a=h*p,t.copy(n).addScaledVector(Ms,o).addScaledVector(Ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ei=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),bo.subVectors(this.max,ur),Ts.subVectors(e.a,ur),ws.subVectors(e.b,ur),As.subVectors(e.c,ur),Pi.subVectors(ws,Ts),Ii.subVectors(As,ws),ji.subVectors(Ts,As);let t=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-ji.z,ji.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,ji.z,0,-ji.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-ji.y,ji.x,0];return!nc(t,Ts,ws,As,bo)||(t=[1,0,0,0,1,0,0,0,1],!nc(t,Ts,ws,As,bo))?!1:(Eo.crossVectors(Pi,Ii),t=[Eo.x,Eo.y,Eo.z],nc(t,Ts,ws,As,bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mi=[new P,new P,new P,new P,new P,new P,new P,new P],Hn=new P,vo=new ei,Ts=new P,ws=new P,As=new P,Pi=new P,Ii=new P,ji=new P,ur=new P,bo=new P,Eo=new P,Qi=new P;function nc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qi.fromArray(i,r);let a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),d=n.dot(Qi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var kt=new P,Mo=new J,up=0,$t=class extends Vn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:up++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=la,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==la&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Cr=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Pr=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}},dp=new ei,dr=new P,ic=new P,ti=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):dp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);let t=dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(ic)),this.expandByPoint(dr.copy(e.center).sub(ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fp=0,Sn=new ht,sc=new Bt,Rs=new P,gn=new ei,fr=new ei,Xt=new P,ut=class i extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Of(e)?Pr:Cr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return sc.lookAt(e),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(gn.min,fr.min),gn.expandByPoint(Xt),Xt.addVectors(gn.max,fr.max),gn.expandByPoint(Xt)):(gn.expandByPoint(fr.min),gn.expandByPoint(fr.max))}gn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Xt.fromBufferAttribute(a,c),l&&(Rs.fromBufferAttribute(e,c),Xt.add(Rs)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new $t(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let E=0;E<n.count;E++)a[E]=new P,l[E]=new P;let c=new P,d=new P,f=new P,h=new J,u=new J,m=new J,b=new P,g=new P;function p(E,A,R){c.fromBufferAttribute(n,E),d.fromBufferAttribute(n,A),f.fromBufferAttribute(n,R),h.fromBufferAttribute(r,E),u.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),d.sub(c),f.sub(c),u.sub(h),m.sub(h);let N=1/(u.x*m.y-m.x*u.y);isFinite(N)&&(b.copy(d).multiplyScalar(m.y).addScaledVector(f,-u.y).multiplyScalar(N),g.copy(f).multiplyScalar(u.x).addScaledVector(d,-m.x).multiplyScalar(N),a[E].add(b),a[A].add(b),a[R].add(b),l[E].add(g),l[A].add(g),l[R].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let E=0,A=y.length;E<A;++E){let R=y[E],N=R.start,D=R.count;for(let B=N,O=N+D;B<O;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let v=new P,_=new P,M=new P,S=new P;function w(E){M.fromBufferAttribute(s,E),S.copy(M);let A=a[E];v.copy(A),v.sub(M.multiplyScalar(M.dot(A))).normalize(),_.crossVectors(S,A);let N=_.dot(l[E])<0?-1:1;o.setXYZW(E,v.x,v.y,v.z,N)}for(let E=0,A=y.length;E<A;++E){let R=y[E],N=R.start,D=R.count;for(let B=N,O=N+D;B<O;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,d=new P,f=new P;if(e)for(let h=0,u=e.count;h<u;h+=3){let m=e.getX(h+0),b=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,g),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),a.add(d),l.add(d),c.add(d),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,u=t.count;h<u;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d),u=0,m=0;for(let b=0,g=l.length;b<g;b++){a.isInterleavedBufferAttribute?u=l[b]*a.data.stride+a.offset:u=l[b]*d;for(let p=0;p<d;p++)h[m++]=c[u++]}return new $t(h,d,f)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,f=c.length;d<f;d++){let h=c[d],u=e(h,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){let u=c[f];d.push(u.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],f=r[c];for(let h=0,u=f.length;h<u;h++)d.push(f[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ir=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=la,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},an=new P,qs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pp=0,Rn=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=ss,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Qo,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Qo&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new J().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ni=class extends Rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cs,pr=new P,Ps=new P,Is=new P,Ls=new J,mr=new J,ad=new ht,So=new P,gr=new P,To=new P,Kh=new J,rc=new J,jh=new J,ii=class extends Bt{constructor(e=new ni){if(super(),this.isSprite=!0,this.type="Sprite",Cs===void 0){Cs=new ut;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ir(t,5);Cs.setIndex([0,1,2,0,2,3]),Cs.setAttribute("position",new qs(n,3,0,!1)),Cs.setAttribute("uv",new qs(n,2,3,!1))}this.geometry=Cs,this.material=e,this.center=new J(.5,.5),this.count=1}raycast(e,t){e.camera===null&&et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),ad.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Is.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;wo(So.set(-.5,-.5,0),Is,o,Ps,s,r),wo(gr.set(.5,-.5,0),Is,o,Ps,s,r),wo(To.set(.5,.5,0),Is,o,Ps,s,r),Kh.set(0,0),rc.set(1,0),jh.set(1,1);let a=e.ray.intersectTriangle(So,gr,To,!1,pr);if(a===null&&(wo(gr.set(-.5,.5,0),Is,o,Ps,s,r),rc.set(0,1),a=e.ray.intersectTriangle(So,To,gr,!1,pr),a===null))return;let l=e.ray.origin.distanceTo(pr);l<e.near||l>e.far||t.push({distance:l,point:pr.clone(),uv:Jn.getInterpolation(pr,So,gr,To,Kh,rc,jh,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function wo(i,e,t,n,s,r){Ls.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(mr.x=r*Ls.x-s*Ls.y,mr.y=s*Ls.x+r*Ls.y):mr.copy(Ls),i.copy(e),i.x+=mr.x,i.y+=mr.y,i.applyMatrix4(ad)}var gi=new P,oc=new P,Ao=new P,Li=new P,ac=new P,Ro=new P,lc=new P,vi=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){oc.copy(e).add(t).multiplyScalar(.5),Ao.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(oc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ao),a=Li.dot(this.direction),l=-Li.dot(Ao),c=Li.lengthSq(),d=Math.abs(1-o*o),f,h,u,m;if(d>0)if(f=o*l-a,h=o*a-l,m=r*d,f>=0)if(h>=-m)if(h<=m){let b=1/d;f*=b,h*=b,u=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),u=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),u=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-r,-l),r),u=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),u=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(oc).addScaledVector(Ao,h),u}intersectSphere(e,t){gi.subVectors(e.center,this.origin);let n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,s,r){ac.subVectors(t,e),Ro.subVectors(n,e),lc.crossVectors(ac,Ro);let o=this.direction.dot(lc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);let l=a*this.direction.dot(Ro.crossVectors(Li,Ro));if(l<0)return null;let c=a*this.direction.dot(ac.cross(Li));if(c<0||l+c>o)return null;let d=-a*Li.dot(lc);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Qh=new ht,es=new vi,Co=new ti,eu=new P,Po=new P,Io=new P,Lo=new P,cc=new P,Do=new P,tu=new P,No=new P,Xe=class extends Bt{constructor(e=new ut,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Do.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],f=r[l];d!==0&&(cc.fromBufferAttribute(f,e),o?Do.addScaledVector(cc,d):Do.addScaledVector(cc.sub(t),d))}t.add(Do)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(Co.containsPoint(es.origin)===!1&&(es.intersectSphere(Co,eu)===null||es.origin.distanceToSquared(eu)>(e.far-e.near)**2))&&(Qh.copy(r).invert(),es.copy(e.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,b=h.length;m<b;m++){let g=h[m],p=o[g.materialIndex],y=Math.max(g.start,u.start),v=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let _=y,M=v;_<M;_+=3){let S=a.getX(_),w=a.getX(_+1),E=a.getX(_+2);s=Uo(this,p,e,n,c,d,f,S,w,E),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,u.start),b=Math.min(a.count,u.start+u.count);for(let g=m,p=b;g<p;g+=3){let y=a.getX(g),v=a.getX(g+1),_=a.getX(g+2);s=Uo(this,o,e,n,c,d,f,y,v,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,b=h.length;m<b;m++){let g=h[m],p=o[g.materialIndex],y=Math.max(g.start,u.start),v=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let _=y,M=v;_<M;_+=3){let S=_,w=_+1,E=_+2;s=Uo(this,p,e,n,c,d,f,S,w,E),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,u.start),b=Math.min(l.count,u.start+u.count);for(let g=m,p=b;g<p;g+=3){let y=g,v=g+1,_=g+2;s=Uo(this,o,e,n,c,d,f,y,v,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function mp(i,e,t,n,s,r,o,a){let l;if(e.side===hn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===xi,a),l===null)return null;No.copy(a),No.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(No);return c<t.near||c>t.far?null:{distance:c,point:No.clone(),object:i}}function Uo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Po),i.getVertexPosition(l,Io),i.getVertexPosition(c,Lo);let d=mp(i,e,t,n,Po,Io,Lo,tu);if(d){let f=new P;Jn.getBarycoord(tu,Po,Io,Lo,f),s&&(d.uv=Jn.getInterpolatedAttribute(s,a,l,c,f,new J)),r&&(d.uv1=Jn.getInterpolatedAttribute(r,a,l,c,f,new J)),o&&(d.normal=Jn.getInterpolatedAttribute(o,a,l,c,f,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new P,materialIndex:0};Jn.getNormal(Po,Io,Lo,h.normal),d.face=h,d.barycoord=f}return d}var Lr=class extends rn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=qt,d=qt,f,h){super(null,o,a,l,c,d,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ys=class extends $t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ds=new ht,nu=new ht,Fo=[],iu=new ei,gp=new ht,_r=new Xe,xr=new ti,Zs=class extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ys(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),iu.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(iu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),xr.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),e.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),nu.multiplyMatrices(n,Ds),_r.matrixWorld=nu,_r.raycast(e,Fo);for(let o=0,a=Fo.length;o<a;o++){let l=Fo[o];l.instanceId=r,l.object=this,t.push(l)}Fo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lr(new Float32Array(s*this.count),s,this.count,Ga,Ln));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hc=new P,_p=new P,xp=new tt,Tn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=hc.subVectors(n,t).cross(_p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(hc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xp.getNormalMatrix(e),s=this.coplanarPoint(hc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new ti,yp=new J(.5,.5),Oo=new P,$s=class{constructor(e=new Tn,t=new Tn,n=new Tn,s=new Tn,r=new Tn,o=new Tn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],f=r[5],h=r[6],u=r[7],m=r[8],b=r[9],g=r[10],p=r[11],y=r[12],v=r[13],_=r[14],M=r[15];if(s[0].setComponents(c-o,u-d,p-m,M-y).normalize(),s[1].setComponents(c+o,u+d,p+m,M+y).normalize(),s[2].setComponents(c+a,u+f,p+b,M+v).normalize(),s[3].setComponents(c-a,u-f,p-b,M-v).normalize(),n)s[4].setComponents(l,h,g,_).normalize(),s[5].setComponents(c-l,u-h,p-g,M-_).normalize();else if(s[4].setComponents(c-l,u-h,p-g,M-_).normalize(),t===kn)s[5].setComponents(c+l,u+h,p+g,M+_).normalize();else if(t===zs)s[5].setComponents(l,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);let t=yp.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Oo.x=s.normal.x>0?e.max.x:e.min.x,Oo.y=s.normal.y>0?e.max.y:e.min.y,Oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ui=class extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},da=new P,fa=new P,su=new ht,yr=new vi,Bo=new ti,uc=new P,ru=new P,pa=class extends Bt{constructor(e=new ut,t=new Ui){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)da.fromBufferAttribute(t,s-1),fa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=da.distanceTo(fa);e.setAttribute("lineDistance",new Qe(n,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,e.ray.intersectsSphere(Bo)===!1)return;su.copy(s).invert(),yr.copy(e.ray).applyMatrix4(su);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let u=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let b=u,g=m-1;b<g;b+=c){let p=d.getX(b),y=d.getX(b+1),v=Ho(this,e,yr,l,p,y,b);v&&t.push(v)}if(this.isLineLoop){let b=d.getX(m-1),g=d.getX(u),p=Ho(this,e,yr,l,b,g,m-1);p&&t.push(p)}}else{let u=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let b=u,g=m-1;b<g;b+=c){let p=Ho(this,e,yr,l,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=Ho(this,e,yr,l,m-1,u,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ho(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(da.fromBufferAttribute(a,s),fa.fromBufferAttribute(a,r),t.distanceSqToSegment(da,fa,uc,ru)>n)return;uc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(uc);if(!(c<e.near||c>e.far))return{distance:c,point:ru.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var ou=new P,au=new P,as=class extends pa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ou.fromBufferAttribute(t,s),au.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ou.distanceTo(au);e.setAttribute("lineDistance",new Qe(n,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Js=class extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lu=new ht,Ec=new vi,zo=new ti,ko=new P,Dr=class extends Bt{constructor(e=new ut,t=new Js){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(s),zo.radius+=r,e.ray.intersectsSphere(zo)===!1)return;lu.copy(s).invert(),Ec.copy(e.ray).applyMatrix4(lu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let m=h,b=u;m<b;m++){let g=c.getX(m);ko.fromBufferAttribute(f,g),cu(ko,g,l,s,e,t,this)}}else{let h=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let m=h,b=u;m<b;m++)ko.fromBufferAttribute(f,m),cu(ko,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function cu(i,e,t,n,s,r,o){let a=Ec.distanceSqToPoint(i);if(a<t){let l=new P;Ec.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Nr=class extends rn{constructor(e=[],t=Gi,n,s,r,o,a,l,c,d){super(e,t,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ct=class extends rn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bi=class extends rn{constructor(e,t,n=qn,s,r,o,a=qt,l=qt,c,d=Qn,f=1){if(d!==Qn&&d!==Xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ma=class extends bi{constructor(e,t=qn,n=Gi,s,r,o=qt,a=qt,l,c=Qn){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ur=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ht=class i extends ut{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],f=[],h=0,u=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function m(b,g,p,y,v,_,M,S,w,E,A){let R=_/w,N=M/E,D=_/2,B=M/2,O=S/2,H=w+1,G=E+1,V=0,K=0,Q=new P;for(let he=0;he<G;he++){let Z=he*N-B;for(let ge=0;ge<H;ge++){let we=ge*R-D;Q[b]=we*y,Q[g]=Z*v,Q[p]=O,c.push(Q.x,Q.y,Q.z),Q[b]=0,Q[g]=0,Q[p]=S>0?1:-1,d.push(Q.x,Q.y,Q.z),f.push(ge/w),f.push(1-he/E),V+=1}}for(let he=0;he<E;he++)for(let Z=0;Z<w;Z++){let ge=h+Z+H*he,we=h+Z+H*(he+1),Ve=h+(Z+1)+H*(he+1),De=h+(Z+1)+H*he;l.push(ge,we,De),l.push(we,Ve,De),K+=6}a.addGroup(u,K,A),u+=K,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Fr=class i extends ut{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],d=t/2,f=Math.PI/2*e,h=t,u=2*f+h,m=n*2+r,b=s+1,g=new P,p=new P;for(let y=0;y<=m;y++){let v=0,_=0,M=0,S=0;if(y<=n){let A=y/n,R=A*Math.PI/2;_=-d-e*Math.cos(R),M=e*Math.sin(R),S=-e*Math.cos(R),v=A*f}else if(y<=n+r){let A=(y-n)/r;_=-d+A*t,M=e,S=0,v=f+A*h}else{let A=(y-n-r)/n,R=A*Math.PI/2;_=d+e*Math.sin(R),M=e*Math.cos(R),S=e*Math.sin(R),v=f+h+A*f}let w=Math.max(0,Math.min(1,v/u)),E=0;y===0?E=.5/s:y===m&&(E=-.5/s);for(let A=0;A<=s;A++){let R=A/s,N=R*Math.PI*2,D=Math.sin(N),B=Math.cos(N);p.x=-M*B,p.y=_,p.z=M*D,a.push(p.x,p.y,p.z),g.set(-M*B,S,M*D),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+E,w)}if(y>0){let A=(y-1)*b;for(let R=0;R<s;R++){let N=A+R,D=A+R+1,B=y*b+R,O=y*b+R+1;o.push(N,D,B),o.push(D,O,B)}}}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Gn=class i extends ut{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,d=new J;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){let u=n+f/t*s;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(a,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},nt=class i extends ut{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],f=[],h=[],u=[],m=0,b=[],g=n/2,p=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new Qe(f,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function y(){let _=new P,M=new P,S=0,w=(t-e)/n;for(let E=0;E<=r;E++){let A=[],R=E/r,N=R*(t-e)+e;for(let D=0;D<=s;D++){let B=D/s,O=B*l+a,H=Math.sin(O),G=Math.cos(O);M.x=N*H,M.y=-R*n+g,M.z=N*G,f.push(M.x,M.y,M.z),_.set(H,w,G).normalize(),h.push(_.x,_.y,_.z),u.push(B,1-R),A.push(m++)}b.push(A)}for(let E=0;E<s;E++)for(let A=0;A<r;A++){let R=b[A][E],N=b[A+1][E],D=b[A+1][E+1],B=b[A][E+1];(e>0||A!==0)&&(d.push(R,N,B),S+=3),(t>0||A!==r-1)&&(d.push(N,D,B),S+=3)}c.addGroup(p,S,0),p+=S}function v(_){let M=m,S=new J,w=new P,E=0,A=_===!0?e:t,R=_===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,g*R,0),h.push(0,R,0),u.push(.5,.5),m++;let N=m;for(let D=0;D<=s;D++){let O=D/s*l+a,H=Math.cos(O),G=Math.sin(O);w.x=A*G,w.y=g*R,w.z=A*H,f.push(w.x,w.y,w.z),h.push(0,R,0),S.x=H*.5+.5,S.y=G*.5*R+.5,u.push(S.x,S.y),m++}for(let D=0;D<s;D++){let B=M+D,O=N+D;_===!0?d.push(O,O+1,B):d.push(O+1,O,B),E+=3}c.addGroup(p,E,_===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Or=class i extends nt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ga=class i extends ut{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),d(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new P,_=new P,M=new P;for(let S=0;S<t.length;S+=3)u(t[S+0],v),u(t[S+1],_),u(t[S+2],M),l(v,_,M,y)}function l(y,v,_,M){let S=M+1,w=[];for(let E=0;E<=S;E++){w[E]=[];let A=y.clone().lerp(_,E/S),R=v.clone().lerp(_,E/S),N=S-E;for(let D=0;D<=N;D++)D===0&&E===S?w[E][D]=A:w[E][D]=A.clone().lerp(R,D/N)}for(let E=0;E<S;E++)for(let A=0;A<2*(S-E)-1;A++){let R=Math.floor(A/2);A%2===0?(h(w[E][R+1]),h(w[E+1][R]),h(w[E][R])):(h(w[E][R+1]),h(w[E+1][R+1]),h(w[E+1][R]))}}function c(y){let v=new P;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(y),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function d(){let y=new P;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let _=g(y)/2/Math.PI+.5,M=p(y)/Math.PI+.5;o.push(_,1-M)}m(),f()}function f(){for(let y=0;y<o.length;y+=6){let v=o[y+0],_=o[y+2],M=o[y+4],S=Math.max(v,_,M),w=Math.min(v,_,M);S>.9&&w<.1&&(v<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),M<.2&&(o[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function u(y,v){let _=y*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function m(){let y=new P,v=new P,_=new P,M=new P,S=new J,w=new J,E=new J;for(let A=0,R=0;A<r.length;A+=9,R+=6){y.set(r[A+0],r[A+1],r[A+2]),v.set(r[A+3],r[A+4],r[A+5]),_.set(r[A+6],r[A+7],r[A+8]),S.set(o[R+0],o[R+1]),w.set(o[R+2],o[R+3]),E.set(o[R+4],o[R+5]),M.copy(y).add(v).add(_).divideScalar(3);let N=g(M);b(S,R+0,y,N),b(w,R+2,v,N),b(E,R+4,_,N)}}function b(y,v,_,M){M<0&&y.x===1&&(o[v]=y.x-1),_.x===0&&_.z===0&&(o[v]=M/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Vo=new P,Go=new P,dc=new P,Wo=new Jn,Br=class extends ut{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Os*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],f=new Array(3),h={},u=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:b,b:g,c:p}=Wo;if(b.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Wo.getNormal(dc),f[0]=`${Math.round(b.x*s)},${Math.round(b.y*s)},${Math.round(b.z*s)}`,f[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let y=0;y<3;y++){let v=(y+1)%3,_=f[y],M=f[v],S=Wo[d[y]],w=Wo[d[v]],E=`${_}_${M}`,A=`${M}_${_}`;A in h&&h[A]?(dc.dot(h[A].normal)<=r&&(u.push(S.x,S.y,S.z),u.push(w.x,w.y,w.z)),h[A]=null):E in h||(h[E]={index0:c[y],index1:c[v],normal:dc.clone()})}}for(let m in h)if(h[m]){let{index0:b,index1:g}=h[m];Vo.fromBufferAttribute(a,b),Go.fromBufferAttribute(a,g),u.push(Vo.x,Vo.y,Vo.z),u.push(Go.x,Go.y,Go.z)}this.setAttribute("position",new Qe(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let d=n[s],h=n[s+1]-d,u=(o-d)/h;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new J:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],o=[],a=new P,l=new ht;for(let u=0;u<=e;u++){let m=u/e;s[u]=this.getTangentAt(m,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(st(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,m))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(st(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],u*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ks=class extends xn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new J){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,u=c-this.aY;l=h*d-u*f+this.aX,c=h*f+u*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},_a=class extends Ks{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Kc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,f){let h=(o-r)/c-(a-r)/(c+d)+(a-o)/d,u=(a-o)/d-(l-o)/(d+f)+(l-a)/f;h*=d,u*=d,s(o,a,h,u)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var hu=new P,uu=new P,fc=new Kc,pc=new Kc,mc=new Kc,pt=class extends xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=s[(a-1)%r]:(uu.subVectors(s[0],s[1]).add(s[0]),c=uu);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(hu.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=hu),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),u),b=Math.pow(f.distanceToSquared(h),u),g=Math.pow(h.distanceToSquared(d),u);b<1e-4&&(b=1),m<1e-4&&(m=b),g<1e-4&&(g=b),fc.initNonuniformCatmullRom(c.x,f.x,h.x,d.x,m,b,g),pc.initNonuniformCatmullRom(c.y,f.y,h.y,d.y,m,b,g),mc.initNonuniformCatmullRom(c.z,f.z,h.z,d.z,m,b,g)}else this.curveType==="catmullrom"&&(fc.initCatmullRom(c.x,f.x,h.x,d.x,this.tension),pc.initCatmullRom(c.y,f.y,h.y,d.y,this.tension),mc.initCatmullRom(c.z,f.z,h.z,d.z,this.tension));return n.set(fc.calc(l),pc.calc(l),mc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function du(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function vp(i,e){let t=1-i;return t*t*e}function bp(i,e){return 2*(1-i)*i*e}function Ep(i,e){return i*i*e}function Er(i,e,t,n){return vp(i,e)+bp(i,t)+Ep(i,n)}function Mp(i,e){let t=1-i;return t*t*t*e}function Sp(i,e){let t=1-i;return 3*t*t*i*e}function Tp(i,e){return 3*(1-i)*i*i*e}function wp(i,e){return i*i*i*e}function Mr(i,e,t,n,s){return Mp(i,e)+Sp(i,t)+Tp(i,n)+wp(i,s)}var Hr=class extends xn{constructor(e=new J,t=new J,n=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new J){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mr(e,s.x,r.x,o.x,a.x),Mr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xa=class extends xn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mr(e,s.x,r.x,o.x,a.x),Mr(e,s.y,r.y,o.y,a.y),Mr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zr=class extends xn{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends xn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kr=class extends xn{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Er(e,s.x,r.x,o.x),Er(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vr=class extends xn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Er(e,s.x,r.x,o.x),Er(e,s.y,r.y,o.y),Er(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gr=class extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],d=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(du(a,l.x,c.x,d.x,f.x),du(a,l.y,c.y,d.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new J().fromArray(s))}return this}},va=Object.freeze({__proto__:null,ArcCurve:_a,CatmullRomCurve3:pt,CubicBezierCurve:Hr,CubicBezierCurve3:xa,EllipseCurve:Ks,LineCurve:zr,LineCurve3:ya,QuadraticBezierCurve:kr,QuadraticBezierCurve3:Vr,SplineCurve:Gr}),ba=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new va[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new va[s.type]().fromJSON(s))}return this}},Cn=class extends ba{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new zr(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new kr(this.currentPoint.clone(),new J(e,t),new J(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Hr(this.currentPoint.clone(),new J(e,t),new J(n,s),new J(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Gr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Ks(e,t,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},zt=class extends Cn{constructor(e){super(e),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Cn().fromJSON(s))}return this}};function Ap(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ld(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Lp(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let d=a,f=l;for(let h=t;h<s;h+=t){let u=i[h],m=i[h+1];u<a&&(a=u),m<l&&(l=m),u>d&&(d=u),m>f&&(f=m)}c=Math.max(d-a,f-l),c=c!==0?32767/c:0}return Wr(r,o,t,a,l,c,0),o}function ld(i,e,t,n,s){let r;if(s===Gp(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=fu(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=fu(o/n|0,i[o],i[o+1],r);return r&&js(r,r.next)&&(qr(r),r=r.next),r}function ls(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(js(t,t.next)||It(t.prev,t,t.next)===0)){if(qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Op(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Cp(i,n,s,r):Rp(i)){e.push(l.i,i.i,c.i),qr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Pp(ls(i),e),Wr(i,e,t,n,s,r,2)):o===2&&Ip(i,e,t,n,s,r):Wr(ls(i),e,t,n,s,r,1);break}}}function Rp(i){let e=i.prev,t=i,n=i.next;if(It(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,d=Math.min(s,r,o),f=Math.min(a,l,c),h=Math.max(s,r,o),u=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=d&&m.x<=h&&m.y>=f&&m.y<=u&&vr(s,a,r,l,o,c,m.x,m.y)&&It(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Cp(i,e,t,n){let s=i.prev,r=i,o=i.next;if(It(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,d=s.y,f=r.y,h=o.y,u=Math.min(a,l,c),m=Math.min(d,f,h),b=Math.max(a,l,c),g=Math.max(d,f,h),p=Mc(u,m,e,t,n),y=Mc(b,g,e,t,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=p&&_&&_.z<=y;){if(v.x>=u&&v.x<=b&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&vr(a,d,l,f,c,h,v.x,v.y)&&It(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=u&&_.x<=b&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&vr(a,d,l,f,c,h,_.x,_.y)&&It(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=u&&v.x<=b&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&vr(a,d,l,f,c,h,v.x,v.y)&&It(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=u&&_.x<=b&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&vr(a,d,l,f,c,h,_.x,_.y)&&It(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Pp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!js(n,s)&&hd(n,t,t.next,s)&&Xr(n,s)&&Xr(s,n)&&(e.push(n.i,t.i,s.i),qr(t),qr(t.next),t=i=s),t=t.next}while(t!==i);return ls(t)}function Ip(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zp(o,a)){let l=ud(o,a);o=ls(o,o.next),l=ls(l,l.next),Wr(o,e,t,n,s,r,0),Wr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Lp(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=ld(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Hp(c))}s.sort(Dp);for(let r=0;r<s.length;r++)t=Np(s[r],t);return t}function Dp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Np(i,e){let t=Up(i,e);if(!t)return e;let n=ud(t,i);return ls(n,n.next),ls(t,t.next)}function Up(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(js(i,t))return t;do{if(js(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,d=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&cd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);Xr(t,i)&&(f<d||f===d&&(t.x>o.x||t.x===o.x&&Fp(o,t)))&&(o=t,d=f)}t=t.next}while(t!==a);return o}function Fp(i,e){return It(i.prev,i,e.prev)<0&&It(e.next,i,i.next)<0}function Op(i,e,t,n){let s=i;do s.z===0&&(s.z=Mc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Bp(s)}function Bp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Mc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Hp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function cd(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function vr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&cd(i,e,t,n,s,r,o,a)}function zp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!kp(i,e)&&(Xr(i,e)&&Xr(e,i)&&Vp(i,e)&&(It(i.prev,i,e.prev)||It(i,e.prev,e))||js(i,e)&&It(i.prev,i,i.next)>0&&It(e.prev,e,e.next)>0)}function It(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function js(i,e){return i.x===e.x&&i.y===e.y}function hd(i,e,t,n){let s=qo(It(i,e,t)),r=qo(It(i,e,n)),o=qo(It(t,n,i)),a=qo(It(t,n,e));return!!(s!==r&&o!==a||s===0&&Xo(i,t,e)||r===0&&Xo(i,n,e)||o===0&&Xo(t,i,n)||a===0&&Xo(t,e,n))}function Xo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function qo(i){return i>0?1:i<0?-1:0}function kp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&hd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Xr(i,e){return It(i.prev,i,i.next)<0?It(i,e,i.next)>=0&&It(i,i.prev,e)>=0:It(i,e,i.prev)<0||It(i,i.next,e)<0}function Vp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ud(i,e){let t=Sc(i.i,i.x,i.y),n=Sc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function fu(i,e,t,n){let s=Sc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gp(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Tc=class{static triangulate(e,t,n=2){return Ap(e,t,n)}},Kn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];pu(e),mu(n,e);let o=e.length;t.forEach(pu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,mu(n,t[l]);let a=Tc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function pu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function mu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var un=class i extends ut{constructor(e=new zt([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Qe(s,3)),this.setAttribute("uv",new Qe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:u-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Wp,v,_=!1,M,S,w,E;if(p){v=p.getSpacedPoints(d),_=!0,h=!1;let ce=p.isCatmullRomCurve3?p.closed:!1;M=p.computeFrenetFrames(d,ce),S=new P,w=new P,E=new P}h||(g=0,u=0,m=0,b=0);let A=a.extractPoints(c),R=A.shape,N=A.holes;if(!Kn.isClockWise(R)){R=R.reverse();for(let ce=0,de=N.length;ce<de;ce++){let fe=N[ce];Kn.isClockWise(fe)&&(N[ce]=fe.reverse())}}function B(ce){let fe=10000000000000001e-36,xe=ce[0];for(let me=1;me<=ce.length;me++){let pe=me%ce.length,ye=ce[pe],Te=ye.x-xe.x,Ae=ye.y-xe.y,C=Te*Te+Ae*Ae,F=Math.max(Math.abs(ye.x),Math.abs(ye.y),Math.abs(xe.x),Math.abs(xe.y)),Y=fe*F*F;if(C<=Y){ce.splice(pe,1),me--;continue}xe=ye}}B(R),N.forEach(B);let O=N.length,H=R;for(let ce=0;ce<O;ce++){let de=N[ce];R=R.concat(de)}function G(ce,de,fe){return de||et("ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(de,fe)}let V=R.length;function K(ce,de,fe){let xe,me,pe,ye=ce.x-de.x,Te=ce.y-de.y,Ae=fe.x-ce.x,C=fe.y-ce.y,F=ye*ye+Te*Te,Y=ye*C-Te*Ae;if(Math.abs(Y)>Number.EPSILON){let T=Math.sqrt(F),x=Math.sqrt(Ae*Ae+C*C),I=de.x-Te/T,U=de.y+ye/T,z=fe.x-C/x,j=fe.y+Ae/x,se=((z-I)*C-(j-U)*Ae)/(ye*C-Te*Ae);xe=I+ye*se-ce.x,me=U+Te*se-ce.y;let q=xe*xe+me*me;if(q<=2)return new J(xe,me);pe=Math.sqrt(q/2)}else{let T=!1;ye>Number.EPSILON?Ae>Number.EPSILON&&(T=!0):ye<-Number.EPSILON?Ae<-Number.EPSILON&&(T=!0):Math.sign(Te)===Math.sign(C)&&(T=!0),T?(xe=-Te,me=ye,pe=Math.sqrt(F)):(xe=ye,me=Te,pe=Math.sqrt(F/2))}return new J(xe/pe,me/pe)}let Q=[];for(let ce=0,de=H.length,fe=de-1,xe=ce+1;ce<de;ce++,fe++,xe++)fe===de&&(fe=0),xe===de&&(xe=0),Q[ce]=K(H[ce],H[fe],H[xe]);let he=[],Z,ge=Q.concat();for(let ce=0,de=O;ce<de;ce++){let fe=N[ce];Z=[];for(let xe=0,me=fe.length,pe=me-1,ye=xe+1;xe<me;xe++,pe++,ye++)pe===me&&(pe=0),ye===me&&(ye=0),Z[xe]=K(fe[xe],fe[pe],fe[ye]);he.push(Z),ge=ge.concat(Z)}let we;if(g===0)we=Kn.triangulateShape(H,N);else{let ce=[],de=[];for(let fe=0;fe<g;fe++){let xe=fe/g,me=u*Math.cos(xe*Math.PI/2),pe=m*Math.sin(xe*Math.PI/2)+b;for(let ye=0,Te=H.length;ye<Te;ye++){let Ae=G(H[ye],Q[ye],pe);_e(Ae.x,Ae.y,-me),xe===0&&ce.push(Ae)}for(let ye=0,Te=O;ye<Te;ye++){let Ae=N[ye];Z=he[ye];let C=[];for(let F=0,Y=Ae.length;F<Y;F++){let T=G(Ae[F],Z[F],pe);_e(T.x,T.y,-me),xe===0&&C.push(T)}xe===0&&de.push(C)}}we=Kn.triangulateShape(ce,de)}let Ve=we.length,De=m+b;for(let ce=0;ce<V;ce++){let de=h?G(R[ce],ge[ce],De):R[ce];_?(w.copy(M.normals[0]).multiplyScalar(de.x),S.copy(M.binormals[0]).multiplyScalar(de.y),E.copy(v[0]).add(w).add(S),_e(E.x,E.y,E.z)):_e(de.x,de.y,0)}for(let ce=1;ce<=d;ce++)for(let de=0;de<V;de++){let fe=h?G(R[de],ge[de],De):R[de];_?(w.copy(M.normals[ce]).multiplyScalar(fe.x),S.copy(M.binormals[ce]).multiplyScalar(fe.y),E.copy(v[ce]).add(w).add(S),_e(E.x,E.y,E.z)):_e(fe.x,fe.y,f/d*ce)}for(let ce=g-1;ce>=0;ce--){let de=ce/g,fe=u*Math.cos(de*Math.PI/2),xe=m*Math.sin(de*Math.PI/2)+b;for(let me=0,pe=H.length;me<pe;me++){let ye=G(H[me],Q[me],xe);_e(ye.x,ye.y,f+fe)}for(let me=0,pe=N.length;me<pe;me++){let ye=N[me];Z=he[me];for(let Te=0,Ae=ye.length;Te<Ae;Te++){let C=G(ye[Te],Z[Te],xe);_?_e(C.x,C.y+v[d-1].y,v[d-1].x+fe):_e(C.x,C.y,f+fe)}}}$(),le();function $(){let ce=s.length/3;if(h){let de=0,fe=V*de;for(let xe=0;xe<Ve;xe++){let me=we[xe];Me(me[2]+fe,me[1]+fe,me[0]+fe)}de=d+g*2,fe=V*de;for(let xe=0;xe<Ve;xe++){let me=we[xe];Me(me[0]+fe,me[1]+fe,me[2]+fe)}}else{for(let de=0;de<Ve;de++){let fe=we[de];Me(fe[2],fe[1],fe[0])}for(let de=0;de<Ve;de++){let fe=we[de];Me(fe[0]+V*d,fe[1]+V*d,fe[2]+V*d)}}n.addGroup(ce,s.length/3-ce,0)}function le(){let ce=s.length/3,de=0;oe(H,de),de+=H.length;for(let fe=0,xe=N.length;fe<xe;fe++){let me=N[fe];oe(me,de),de+=me.length}n.addGroup(ce,s.length/3-ce,1)}function oe(ce,de){let fe=ce.length;for(;--fe>=0;){let xe=fe,me=fe-1;me<0&&(me=ce.length-1);for(let pe=0,ye=d+g*2;pe<ye;pe++){let Te=V*pe,Ae=V*(pe+1),C=de+xe+Te,F=de+me+Te,Y=de+me+Ae,T=de+xe+Ae;ee(C,F,Y,T)}}}function _e(ce,de,fe){l.push(ce),l.push(de),l.push(fe)}function Me(ce,de,fe){Se(ce),Se(de),Se(fe);let xe=s.length/3,me=y.generateTopUV(n,s,xe-3,xe-2,xe-1);ve(me[0]),ve(me[1]),ve(me[2])}function ee(ce,de,fe,xe){Se(ce),Se(de),Se(xe),Se(de),Se(fe),Se(xe);let me=s.length/3,pe=y.generateSideWallUV(n,s,me-6,me-3,me-2,me-1);ve(pe[0]),ve(pe[1]),ve(pe[3]),ve(pe[1]),ve(pe[2]),ve(pe[3])}function Se(ce){s.push(l[ce*3+0]),s.push(l[ce*3+1]),s.push(l[ce*3+2])}function ve(ce){r.push(ce.x),r.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Xp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new va[s.type]().fromJSON(s)),new i(n,e.options)}},Wp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],d=e[s*3+1];return[new J(r,o),new J(a,l),new J(c,d)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],f=e[n*3+2],h=e[s*3],u=e[s*3+1],m=e[s*3+2],b=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new J(o,1-l),new J(c,1-f),new J(h,1-m),new J(b,1-p)]:[new J(a,1-l),new J(d,1-f),new J(u,1-m),new J(g,1-p)]}};function Xp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var cs=class i extends ga{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Yt=class i extends ut{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=st(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],d=1/t,f=new P,h=new J,u=new P,m=new P,b=new P,g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,u.x=p*1,u.y=-g,u.z=p*0,b.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:l.push(b.x,b.y,b.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,u.x=p*1,u.y=-g,u.z=p*0,m.copy(u),u.x+=b.x,u.y+=b.y,u.z+=b.z,u.normalize(),l.push(u.x,u.y,u.z),b.copy(m)}for(let y=0;y<=t;y++){let v=n+y*d*s,_=Math.sin(v),M=Math.cos(v);for(let S=0;S<=e.length-1;S++){f.x=e[S].x*_,f.y=e[S].y,f.z=e[S].x*M,o.push(f.x,f.y,f.z),h.x=y/t,h.y=S/(e.length-1),a.push(h.x,h.y);let w=l[3*S+0]*_,E=l[3*S+1],A=l[3*S+0]*M;c.push(w,E,A)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){let _=v+y*e.length,M=_,S=_+e.length,w=_+e.length+1,E=_+1;r.push(M,S,E),r.push(w,E,S)}this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("uv",new Qe(a,2)),this.setAttribute("normal",new Qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var gt=class i extends ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,f=e/a,h=t/l,u=[],m=[],b=[],g=[];for(let p=0;p<d;p++){let y=p*h-o;for(let v=0;v<c;v++){let _=v*f-r;m.push(_,-y,0),b.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let v=y+c*p,_=y+c*(p+1),M=y+1+c*(p+1),S=y+1+c*p;u.push(v,_,S),u.push(_,M,S)}this.setIndex(u),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(b,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var hs=class i extends ut{constructor(e=new zt([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(a,l,d),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(r,3)),this.setAttribute("uv",new Qe(o,2));function c(d){let f=s.length/3,h=d.extractPoints(t),u=h.shape,m=h.holes;Kn.isClockWise(u)===!1&&(u=u.reverse());for(let g=0,p=m.length;g<p;g++){let y=m[g];Kn.isClockWise(y)===!0&&(m[g]=y.reverse())}let b=Kn.triangulateShape(u,m);for(let g=0,p=m.length;g<p;g++){let y=m[g];u=u.concat(y)}for(let g=0,p=u.length;g<p;g++){let y=u[g];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,p=b.length;g<p;g++){let y=b[g],v=y[0]+f,_=y[1]+f,M=y[2]+f;n.push(v,_,M),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return qp(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function qp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Rt=class i extends ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,d=[],f=new P,h=new P,u=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){let y=[],v=p/n,_=o+v*a,M=e*Math.cos(_),S=Math.sqrt(e*e-M*M),w=0;p===0&&o===0?w=.5/t:p===n&&l===Math.PI&&(w=-.5/t);for(let E=0;E<=t;E++){let A=E/t,R=s+A*r;f.x=-S*Math.cos(R),f.y=M,f.z=S*Math.sin(R),m.push(f.x,f.y,f.z),h.copy(f).normalize(),b.push(h.x,h.y,h.z),g.push(A+w,1-v),y.push(c++)}d.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let v=d[p][y+1],_=d[p][y],M=d[p+1][y],S=d[p+1][y+1];(p!==0||o>0)&&u.push(v,_,S),(p!==n-1||l<Math.PI)&&u.push(_,M,S)}this.setIndex(u),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(b,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ct=class i extends ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],d=[],f=[],h=new P,u=new P,m=new P;for(let b=0;b<=n;b++){let g=o+b/n*a;for(let p=0;p<=s;p++){let y=p/s*r;u.x=(e+t*Math.cos(g))*Math.cos(y),u.y=(e+t*Math.cos(g))*Math.sin(y),u.z=t*Math.sin(g),c.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),m.subVectors(u,h).normalize(),d.push(m.x,m.y,m.z),f.push(p/s),f.push(b/n)}}for(let b=1;b<=n;b++)for(let g=1;g<=s;g++){let p=(s+1)*b+g-1,y=(s+1)*(b-1)+g-1,v=(s+1)*(b-1)+g,_=(s+1)*b+g;l.push(p,y,_),l.push(y,v,_)}this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var bt=class i extends ut{constructor(e=new Vr(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new J,d=new P,f=[],h=[],u=[],m=[];b(),this.setIndex(m),this.setAttribute("position",new Qe(f,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function b(){for(let v=0;v<t;v++)g(v);g(r===!1?t:0),y(),p()}function g(v){d=e.getPointAt(v/t,d);let _=o.normals[v],M=o.binormals[v];for(let S=0;S<=s;S++){let w=S/s*Math.PI*2,E=Math.sin(w),A=-Math.cos(w);l.x=A*_.x+E*M.x,l.y=A*_.y+E*M.y,l.z=A*_.z+E*M.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+n*l.x,a.y=d.y+n*l.y,a.z=d.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let _=1;_<=s;_++){let M=(s+1)*(v-1)+(_-1),S=(s+1)*v+(_-1),w=(s+1)*v+_,E=(s+1)*(v-1)+_;m.push(M,S,E),m.push(S,w,E)}}function y(){for(let v=0;v<=t;v++)for(let _=0;_<=s;_++)c.x=v/t,c.y=_/s,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new va[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Yr=class extends Rn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new je(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function ds(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(gu(s))s.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(gu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=ds(i[t]);for(let s in n)e[s]=n[s]}return e}function gu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Yp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var dd={clone:ds,merge:on},Zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zp,this.fragmentShader=$p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=Yp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new je().setHex(s.value);break;case"v2":this.uniforms[n].value=new J().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ea=class extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Fe=class extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fi=class extends Fe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ma=class extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sa=class extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Yo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var Oi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ta=class extends Oi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xc,endingEnd:xc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yc:r=e,a=2*t-n;break;case vc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yc:o=e,l=2*n-t;break;case vc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,u=this._weightNext,m=(n-t)/(s-t),b=m*m,g=b*m,p=-h*g+2*h*b-h*m,y=(1+h)*g+(-1.5-2*h)*b+(-.5+h)*m+1,v=(-1-u)*g+(1.5+u)*b+.5*m,_=u*g-u*b;for(let M=0;M!==a;++M)r[M]=p*o[d+M]+y*o[c+M]+v*o[l+M]+_*o[f+M];return r}},wa=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(s-t),f=1-d;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*d;return r}},Aa=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ra=class extends Oi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this.inTangents,f=this.outTangents;if(!d||!f){let m=(n-t)/(s-t),b=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*b+o[l+g]*m;return r}let h=a*2,u=e-1;for(let m=0;m!==a;++m){let b=o[c+m],g=o[l+m],p=u*h+m*2,y=f[p],v=f[p+1],_=e*h+m*2,M=d[_],S=d[_+1],w=(n-t)/(s-t),E,A,R,N,D;for(let B=0;B<8;B++){E=w*w,A=E*w,R=1-w,N=R*R,D=N*R;let H=D*t+3*N*w*y+3*R*E*M+A*s-n;if(Math.abs(H)<1e-10)break;let G=3*N*(y-t)+6*R*w*(M-y)+3*E*(s-M);if(Math.abs(G)<1e-10)break;w=w-H/G,w=Math.max(0,Math.min(1,w))}r[m]=D*b+3*N*w*v+3*R*E*S+A*g}return r}},yn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yo(t,this.TimeBufferType),this.values=Yo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yo(e.times,Array),values:Yo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ra(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Sr:t=this.InterpolantFactoryMethodDiscrete;break;case aa:t=this.InterpolantFactoryMethodLinear;break;case Jo:t=this.InterpolantFactoryMethodSmooth;break;case _c:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return Jo;case this.InterpolantFactoryMethodBezier:return _c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){et("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){et("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Bf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){et("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,h=f-n,u=f+n;for(let m=0;m!==n;++m){let b=t[f+m];if(b!==t[h+m]||b!==t[u+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let u=0;u!==n;++u)t[h+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=aa;var Bi=class extends yn{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Sr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};Ca.prototype.ValueTypeName="color";var Pa=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};Pa.prototype.ValueTypeName="number";var Ia=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let d=c+a;c!==d;c+=4)ln.slerpFlat(r,0,o,c-a,o,c,l);return r}},Zr=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ia(this.times,this.values,this.getValueSize(),e)}};Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends yn{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Sr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};La.prototype.ValueTypeName="vector";var Ko={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(_u(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!_u(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function _u(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Da=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){let f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=c.length;f<h;f+=2){let u=c[f],m=c[f+1];if(u.global&&(u.lastIndex=0),u.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fd=new Da,Qs=class{constructor(e){this.manager=e!==void 0?e:fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Qs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ns=new WeakMap,Na=class extends Qs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ko.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=Ns.get(o);f===void 0&&(f=[],Ns.set(o,f)),f.push({onLoad:t,onError:s})}return o}let a=ks("img");function l(){d(),t&&t(this);let f=Ns.get(this)||[];for(let h=0;h<f.length;h++){let u=f[h];u.onLoad&&u.onLoad(this)}Ns.delete(this),r.manager.itemEnd(e)}function c(f){d(),s&&s(f),Ko.remove(`image:${e}`);let h=Ns.get(this)||[];for(let u=0;u<h.length;u++){let m=h[u];m.onError&&m.onError(f)}Ns.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ko.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Wn=class extends Qs{constructor(e){super(e)}load(e,t,n,s){let r=new rn,o=new Na(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},zi=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},si=class extends zi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},gc=new ht,xu=new P,yu=new P,$r=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(xu),yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yu),t.updateMatrixWorld(),gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===zs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zo=new P,$o=new ln,$n=new P,Jr=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zo,$o,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,$o,$n.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Zo,$o,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,$o,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Di=new P,vu=new J,bu=new J,Nt=class extends Jr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return os*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,vu,bu),t.subVectors(bu,vu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Os*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wc=class extends $r{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=os*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Kr=class extends zi{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ac=class extends $r{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0}},Zt=class extends zi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ac}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},er=class extends Jr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rc=class extends $r{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pn=class extends zi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Rc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},tr=class extends zi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Us=-90,Fs=1,Ua=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nt(Us,Fs,e,t);s.layers=this.layers,this.add(s);let r=new Nt(Us,Fs,e,t);r.layers=this.layers,this.add(r);let o=new Nt(Us,Fs,e,t);o.layers=this.layers,this.add(o);let a=new Nt(Us,Fs,e,t);a.layers=this.layers,this.add(a);let l=new Nt(Us,Fs,e,t);l.layers=this.layers,this.add(l);let c=new Nt(Us,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,h,u),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Fa=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Qc="\\[\\]\\.:\\/",Jp=new RegExp("["+Qc+"]","g"),eh="[^"+Qc+"]",Kp="[^"+Qc.replace("\\.","")+"]",jp=/((?:WC+[\/:])*)/.source.replace("WC",eh),Qp=/(WCOD+)?/.source.replace("WCOD",Kp),em=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),tm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),nm=new RegExp("^"+jp+Qp+em+tm+"$"),im=["material","materials","bones","map"],Cc=class{constructor(e,t,n){let s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jp,"")}static parseTrackName(e){let t=nm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);im.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;et("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Cc;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vy=new Float32Array(1);var Eu=new ht,vn=class{constructor(e,t,n=0,s=1/0){this.ray=new vi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Eu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eu),this}intersectObject(e,t=!0,n=[]){return Pc(e,this,n,t),n.sort(Mu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Pc(e[s],this,n,t);return n.sort(Mu),n}};function Mu(i,e){return i.distance-e.distance}function Pc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Pc(r[o],e,t,!0)}}var nr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=st(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(st(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ic=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var jr=class extends Vn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Je("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function th(i,e,t,n){let s=sm(n);switch(t){case Yc:return i*e;case Ga:return i*e/s.components*s.byteLength;case Wa:return i*e/s.components*s.byteLength;case qi:return i*e*2/s.components*s.byteLength;case Xa:return i*e*2/s.components*s.byteLength;case Zc:return i*e*3/s.components*s.byteLength;case Dn:return i*e*4/s.components*s.byteLength;case qa:return i*e*4/s.components*s.byteLength;case no:case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case so:case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Za:case Ja:return Math.max(i,16)*Math.max(e,8)/4;case Ya:case $a:return Math.max(i,8)*Math.max(e,8)/2;case Ka:case ja:case el:case tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qa:case oo:case nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case rl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case hl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case pl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ml:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case gl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _l:case xl:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vl:case bl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ao:case El:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sm(i){switch(i){case dn:case Gc:return{byteLength:1,components:1};case ir:case Wc:case ai:return{byteLength:2,components:1};case ka:case Va:return{byteLength:2,components:4};case qn:case za:case Ln:return{byteLength:4,components:1};case Xc:case qc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Fd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function cm(i){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let d=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,d);else{f.sort((u,m)=>u.start-m.start);let h=0;for(let u=1;u<f.length;u++){let m=f[h],b=f[u];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++h,f[h]=b)}f.length=h+1;for(let u=0,m=f.length;u<m;u++){let b=f[u];i.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,um=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Em=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Dm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Um=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zm="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$m=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,n0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,i0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,l0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,c0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,f0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,v0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,A0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,C0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,N0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Z0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,J0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,j0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ig=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ug=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_g=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ig=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ug=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:hm,alphahash_pars_fragment:um,alphamap_fragment:dm,alphamap_pars_fragment:fm,alphatest_fragment:pm,alphatest_pars_fragment:mm,aomap_fragment:gm,aomap_pars_fragment:_m,batching_pars_vertex:xm,batching_vertex:ym,begin_vertex:vm,beginnormal_vertex:bm,bsdfs:Em,iridescence_fragment:Mm,bumpmap_pars_fragment:Sm,clipping_planes_fragment:Tm,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Am,clipping_planes_vertex:Rm,color_fragment:Cm,color_pars_fragment:Pm,color_pars_vertex:Im,color_vertex:Lm,common:Dm,cube_uv_reflection_fragment:Nm,defaultnormal_vertex:Um,displacementmap_pars_vertex:Fm,displacementmap_vertex:Om,emissivemap_fragment:Bm,emissivemap_pars_fragment:Hm,colorspace_fragment:zm,colorspace_pars_fragment:km,envmap_fragment:Vm,envmap_common_pars_fragment:Gm,envmap_pars_fragment:Wm,envmap_pars_vertex:Xm,envmap_physical_pars_fragment:n0,envmap_vertex:qm,fog_vertex:Ym,fog_pars_vertex:Zm,fog_fragment:$m,fog_pars_fragment:Jm,gradientmap_pars_fragment:Km,lightmap_pars_fragment:jm,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:e0,lights_pars_begin:t0,lights_toon_fragment:i0,lights_toon_pars_fragment:s0,lights_phong_fragment:r0,lights_phong_pars_fragment:o0,lights_physical_fragment:a0,lights_physical_pars_fragment:l0,lights_fragment_begin:c0,lights_fragment_maps:h0,lights_fragment_end:u0,lightprobes_pars_fragment:d0,logdepthbuf_fragment:f0,logdepthbuf_pars_fragment:p0,logdepthbuf_pars_vertex:m0,logdepthbuf_vertex:g0,map_fragment:_0,map_pars_fragment:x0,map_particle_fragment:y0,map_particle_pars_fragment:v0,metalnessmap_fragment:b0,metalnessmap_pars_fragment:E0,morphinstance_vertex:M0,morphcolor_vertex:S0,morphnormal_vertex:T0,morphtarget_pars_vertex:w0,morphtarget_vertex:A0,normal_fragment_begin:R0,normal_fragment_maps:C0,normal_pars_fragment:P0,normal_pars_vertex:I0,normal_vertex:L0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:N0,clearcoat_normal_fragment_maps:U0,clearcoat_pars_fragment:F0,iridescence_pars_fragment:O0,opaque_fragment:B0,packing:H0,premultiplied_alpha_fragment:z0,project_vertex:k0,dithering_fragment:V0,dithering_pars_fragment:G0,roughnessmap_fragment:W0,roughnessmap_pars_fragment:X0,shadowmap_pars_fragment:q0,shadowmap_pars_vertex:Y0,shadowmap_vertex:Z0,shadowmask_pars_fragment:$0,skinbase_vertex:J0,skinning_pars_vertex:K0,skinning_vertex:j0,skinnormal_vertex:Q0,specularmap_fragment:eg,specularmap_pars_fragment:tg,tonemapping_fragment:ng,tonemapping_pars_fragment:ig,transmission_fragment:sg,transmission_pars_fragment:rg,uv_pars_fragment:og,uv_pars_vertex:ag,uv_vertex:lg,worldpos_vertex:cg,background_vert:hg,background_frag:ug,backgroundCube_vert:dg,backgroundCube_frag:fg,cube_vert:pg,cube_frag:mg,depth_vert:gg,depth_frag:_g,distance_vert:xg,distance_frag:yg,equirect_vert:vg,equirect_frag:bg,linedashed_vert:Eg,linedashed_frag:Mg,meshbasic_vert:Sg,meshbasic_frag:Tg,meshlambert_vert:wg,meshlambert_frag:Ag,meshmatcap_vert:Rg,meshmatcap_frag:Cg,meshnormal_vert:Pg,meshnormal_frag:Ig,meshphong_vert:Lg,meshphong_frag:Dg,meshphysical_vert:Ng,meshphysical_frag:Ug,meshtoon_vert:Fg,meshtoon_frag:Og,points_vert:Bg,points_frag:Hg,shadow_vert:zg,shadow_frag:kg,sprite_vert:Vg,sprite_frag:Gg},Le={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ci={basic:{uniforms:on([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:on([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:on([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:on([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:on([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new je(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:on([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:on([Le.points,Le.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:on([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:on([Le.common,Le.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:on([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:on([Le.sprite,Le.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:on([Le.common,Le.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:on([Le.lights,Le.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ci.physical={uniforms:on([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var wl={r:0,b:0,g:0},Wg=new ht,Od=new tt;Od.set(-1,0,0,0,1,0,0,0,1);function Xg(i,e,t,n,s,r){let o=new je(0),a=s===!0?0:1,l,c,d=null,f=0,h=null;function u(y){let v=y.isScene===!0?y.background:null;if(v&&v.isTexture){let _=y.backgroundBlurriness>0;v=e.get(v,_)}return v}function m(y){let v=!1,_=u(y);_===null?g(o,a):_&&_.isColor&&(g(_,1),v=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(y,v){let _=u(v);_&&(_.isCubeTexture||_.mapping===eo)?(c===void 0&&(c=new Xe(new Ht(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:ds(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(v.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Od),c.material.toneMapped=lt.getTransfer(_.colorSpace)!==mt,(d!==_||f!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Xe(new gt(2,2),new cn({name:"BackgroundMaterial",uniforms:ds(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=lt.getTransfer(_.colorSpace)!==mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,v){y.getRGB(wl,jc(i)),t.buffers.color.setClear(wl.r,wl.g,wl.b,v,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),a=v,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:b,dispose:p}}function qg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(N,D,B,O,H){let G=!1,V=f(N,O,B,D);r!==V&&(r=V,c(r.object)),G=u(N,O,B,H),G&&m(N,O,B,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(N,D,B,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function d(N){return i.deleteVertexArray(N)}function f(N,D,B,O){let H=O.wireframe===!0,G=n[D.id];G===void 0&&(G={},n[D.id]=G);let V=N.isInstancedMesh===!0?N.id:0,K=G[V];K===void 0&&(K={},G[V]=K);let Q=K[B.id];Q===void 0&&(Q={},K[B.id]=Q);let he=Q[H];return he===void 0&&(he=h(l()),Q[H]=he),he}function h(N){let D=[],B=[],O=[];for(let H=0;H<t;H++)D[H]=0,B[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:O,object:N,attributes:{},index:null}}function u(N,D,B,O){let H=r.attributes,G=D.attributes,V=0,K=B.getAttributes();for(let Q in K)if(K[Q].location>=0){let Z=H[Q],ge=G[Q];if(ge===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(ge=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(ge=N.instanceColor)),Z===void 0||Z.attribute!==ge||ge&&Z.data!==ge.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function m(N,D,B,O){let H={},G=D.attributes,V=0,K=B.getAttributes();for(let Q in K)if(K[Q].location>=0){let Z=G[Q];Z===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor));let ge={};ge.attribute=Z,Z&&Z.data&&(ge.data=Z.data),H[Q]=ge,V++}r.attributes=H,r.attributesNum=V,r.index=O}function b(){let N=r.newAttributes;for(let D=0,B=N.length;D<B;D++)N[D]=0}function g(N){p(N,0)}function p(N,D){let B=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;B[N]=1,O[N]===0&&(i.enableVertexAttribArray(N),O[N]=1),H[N]!==D&&(i.vertexAttribDivisor(N,D),H[N]=D)}function y(){let N=r.newAttributes,D=r.enabledAttributes;for(let B=0,O=D.length;B<O;B++)D[B]!==N[B]&&(i.disableVertexAttribArray(B),D[B]=0)}function v(N,D,B,O,H,G,V){V===!0?i.vertexAttribIPointer(N,D,B,H,G):i.vertexAttribPointer(N,D,B,O,H,G)}function _(N,D,B,O){b();let H=O.attributes,G=B.getAttributes(),V=D.defaultAttributeValues;for(let K in G){let Q=G[K];if(Q.location>=0){let he=H[K];if(he===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),he!==void 0){let Z=he.normalized,ge=he.itemSize,we=e.get(he);if(we===void 0)continue;let Ve=we.buffer,De=we.type,$=we.bytesPerElement,le=De===i.INT||De===i.UNSIGNED_INT||he.gpuType===za;if(he.isInterleavedBufferAttribute){let oe=he.data,_e=oe.stride,Me=he.offset;if(oe.isInstancedInterleavedBuffer){for(let ee=0;ee<Q.locationSize;ee++)p(Q.location+ee,oe.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ee=0;ee<Q.locationSize;ee++)g(Q.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ee=0;ee<Q.locationSize;ee++)v(Q.location+ee,ge/Q.locationSize,De,Z,_e*$,(Me+ge/Q.locationSize*ee)*$,le)}else{if(he.isInstancedBufferAttribute){for(let oe=0;oe<Q.locationSize;oe++)p(Q.location+oe,he.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let oe=0;oe<Q.locationSize;oe++)g(Q.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let oe=0;oe<Q.locationSize;oe++)v(Q.location+oe,ge/Q.locationSize,De,Z,ge*$,ge/Q.locationSize*oe*$,le)}}else if(V!==void 0){let Z=V[K];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(Q.location,Z);break;case 3:i.vertexAttrib3fv(Q.location,Z);break;case 4:i.vertexAttrib4fv(Q.location,Z);break;default:i.vertexAttrib1fv(Q.location,Z)}}}}y()}function M(){A();for(let N in n){let D=n[N];for(let B in D){let O=D[B];for(let H in O){let G=O[H];for(let V in G)d(G[V].object),delete G[V];delete O[H]}}delete n[N]}}function S(N){if(n[N.id]===void 0)return;let D=n[N.id];for(let B in D){let O=D[B];for(let H in O){let G=O[H];for(let V in G)d(G[V].object),delete G[V];delete O[H]}}delete n[N.id]}function w(N){for(let D in n){let B=n[D];for(let O in B){let H=B[O];if(H[N.id]===void 0)continue;let G=H[N.id];for(let V in G)d(G[V].object),delete G[V];delete H[N.id]}}}function E(N){for(let D in n){let B=n[D],O=N.isInstancedMesh===!0?N.id:0,H=B[O];if(H!==void 0){for(let G in H){let V=H[G];for(let K in V)d(V[K].object),delete V[K];delete H[G]}delete B[O],Object.keys(B).length===0&&delete n[D]}}}function A(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:E,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:g,disableUnusedAttributes:y}}function Yg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function a(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let h=0;for(let u=0;u<d;u++)h+=c[u];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Zg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Dn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let E=w===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==dn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ln&&!E)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Je("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,maxSamples:M,samples:S}}function $g(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Tn,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let u=f.length!==0||h||n!==0||s;return s=h,n=f.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,u){let m=f.clippingPlanes,b=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?d(null):c();else{let y=r?0:n,v=y*4,_=p.clippingState||null;l.value=_,_=d(m,h,v,u);for(let M=0;M!==v;++M)_[M]=t[M];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,h,u,m){let b=f!==null?f.length:0,g=null;if(b!==0){if(g=l.value,m!==!0||g===null){let p=u+b*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,_=u;v!==b;++v,_+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var Yi=4,pd=[.125,.215,.35,.446,.526,.582],fs=20,Jg=256,lo=new er,md=new je,nh=null,ih=0,sh=0,rh=!1,Kg=new P,Rl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Kg}=r;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nh,ih,sh),this._renderer.xr.enabled=rh,e.scissorTest=!1,rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:ai,format:Dn,colorSpace:Tr,depthBuffer:!1},s=gd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jg(r)),this._blurMaterial=e_(r,e,t),this._ggxMaterial=Qg(r,e,t)}return s}_compileMaterial(e){let t=new Xe(new ut,e);this._renderer.compile(t,lo)}_sceneToCubeUV(e,t,n,s,r){let l=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(md),f.toneMapping=Xn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xe(new Ht,new Lt({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,p=!1,y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(md),p=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[v],r.y,r.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[v]));let M=this._cubeSize;rr(s,_*M,v>2?M:0,M,M),f.setRenderTarget(s),p&&f.render(b,l),f.render(e,l)}f.toneMapping=u,f.autoClear=h,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Gi||e.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_d());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,lo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),h=0+c*1.25,u=f*h,{_lodMax:m}=this,b=this._sizeLods[n],g=3*b*(n>m-Yi?n-m+Yi:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=m-t,rr(r,g,p,3*b,2*b),s.setRenderTarget(r),s.render(a,lo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,rr(e,g,p,3*b,2*b),s.setRenderTarget(e),s.render(a,lo)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");let d=3,f=this._lodMeshes[s];f.material=c;let h=c.uniforms,u=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*fs-1),b=r/m,g=isFinite(r)?1+Math.floor(d*b):fs;g>fs&&Je(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fs}`);let p=[],y=0;for(let w=0;w<fs;++w){let E=w/b,A=Math.exp(-E*E/2);p.push(A),w===0?y+=A:w<g&&(y+=2*A)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:v}=this;h.dTheta.value=m,h.mipInt.value=v-n;let _=this._sizeLods[s],M=3*_*(s>v-Yi?s-v+Yi:0),S=4*(this._cubeSize-_);rr(t,M,S,3*_,2*_),l.setRenderTarget(t),l.render(f,lo)}};function jg(i){let e=[],t=[],n=[],s=i,r=i-Yi+1+pd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Yi?l=pd[o-i+Yi-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],u=6,m=6,b=3,g=2,p=1,y=new Float32Array(b*m*u),v=new Float32Array(g*m*u),_=new Float32Array(p*m*u);for(let S=0;S<u;S++){let w=S%3*2/3-1,E=S>2?0:-1,A=[w,E,0,w+2/3,E,0,w+2/3,E+1,0,w,E,0,w+2/3,E+1,0,w,E+1,0];y.set(A,b*m*S),v.set(h,g*m*S);let R=[S,S,S,S,S,S];_.set(R,p*m*S)}let M=new ut;M.setAttribute("position",new $t(y,b)),M.setAttribute("uv",new $t(v,g)),M.setAttribute("faceIndex",new $t(_,p)),n.push(new Xe(M,null)),s>Yi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function gd(i,e,t){let n=new _n(i,e,t);return n.texture.mapping=eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Qg(i,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function e_(i,e,t){let n=new Float32Array(fs),s=new P(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function _d(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function xd(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Cl=class extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Nr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ht(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:oi});r.uniforms.tEquirect.value=t;let o=new Xe(s,r),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=Jt),new Ua(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function t_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,u=!1){return h==null?null:u?o(h):r(h)}function r(h){if(h&&h.isTexture){let u=h.mapping;if(u===Oa||u===Ba)if(e.has(h)){let m=e.get(h).texture;return a(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let b=new Cl(m.height);return b.fromEquirectangularTexture(i,h),e.set(h,b),h.addEventListener("dispose",c),a(b.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let u=h.mapping,m=u===Oa||u===Ba,b=u===Gi||u===us;if(m||b){let g=t.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Rl(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let y=h.image;return m&&y&&y.height>0||b&&y&&l(y)?(n===null&&(n=new Rl(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",d),g.texture):null}}}return h}function a(h,u){return u===Oa?h.mapping=Gi:u===Ba&&(h.mapping=us),h}function l(h){let u=0,m=6;for(let b=0;b<m;b++)h[b]!==void 0&&u++;return u===m}function c(h){let u=h.target;u.removeEventListener("dispose",c);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function d(h){let u=h.target;u.removeEventListener("dispose",d);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function n_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&is("WebGLRenderer: "+n+" extension not supported."),s}}}function i_(i,e,t,n){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];let u=r.get(h);u&&(e.remove(u),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let u in h)e.update(h[u],i.ARRAY_BUFFER)}function c(f){let h=[],u=f.index,m=f.attributes.position,b=0;if(m===void 0)return;if(u!==null){let y=u.array;b=u.version;for(let v=0,_=y.length;v<_;v+=3){let M=y[v+0],S=y[v+1],w=y[v+2];h.push(M,S,S,w,w,M)}}else{let y=m.array;b=m.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let M=v+0,S=v+1,w=v+2;h.push(M,S,S,w,w,M)}}let g=new(m.count>=65535?Pr:Cr)(h,1);g.version=b;let p=r.get(f);p&&e.remove(p),r.set(f,g)}function d(f){let h=r.get(f);if(h){let u=f.index;u!==null&&h.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function s_(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*o),t.update(h,n,1)}function c(f,h,u){u!==0&&(i.drawElementsInstanced(n,h,r,f*o,u),t.update(h,n,u))}function d(f,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,u);let b=0;for(let g=0;g<u;g++)b+=h[g];t.update(b,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function r_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:et("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function o_(i,e,t){let n=new WeakMap,s=new Pt;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==f){let A=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let u=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;u===!0&&(v=1),m===!0&&(v=2),b===!0&&(v=3);let _=a.attributes.position.count*v,M=1;_>e.maxTextureSize&&(M=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*M*4*f),w=new Rr(S,_,M,f);w.type=Ln,w.needsUpdate=!0;let E=v*4;for(let R=0;R<f;R++){let N=g[R],D=p[R],B=y[R],O=_*M*4*R;for(let H=0;H<N.count;H++){let G=H*E;u===!0&&(s.fromBufferAttribute(N,H),S[O+G+0]=s.x,S[O+G+1]=s.y,S[O+G+2]=s.z,S[O+G+3]=0),m===!0&&(s.fromBufferAttribute(D,H),S[O+G+4]=s.x,S[O+G+5]=s.y,S[O+G+6]=s.z,S[O+G+7]=0),b===!0&&(s.fromBufferAttribute(B,H),S[O+G+8]=s.x,S[O+G+9]=s.y,S[O+G+10]=s.z,S[O+G+11]=B.itemSize===4?s.w:1)}}h={count:f,texture:w,size:new J(_,M)},n.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let u=0;for(let b=0;b<c.length;b++)u+=c[b];let m=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function a_(i,e,t,n,s){let r=new WeakMap;function o(c){let d=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==d&&(u.update(),r.set(u,d))}return h}function a(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var l_={[Fc]:"LINEAR_TONE_MAPPING",[Oc]:"REINHARD_TONE_MAPPING",[Bc]:"CINEON_TONE_MAPPING",[Ei]:"ACES_FILMIC_TONE_MAPPING",[zc]:"AGX_TONE_MAPPING",[kc]:"NEUTRAL_TONE_MAPPING",[Hc]:"CUSTOM_TONE_MAPPING"};function c_(i,e,t,n,s,r){let o=new _n(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new bi(e,t):void 0}),a=new _n(e,t,{type:ai,depthBuffer:!1,stencilBuffer:!1}),l=new ut;l.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let c=new Ea({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Xe(l,c),f=new er(-1,1,1,-1,0,1),h=null,u=null,m=!1,b,g=null,p=[],y=!1;this.setSize=function(v,_){o.setSize(v,_),a.setSize(v,_);for(let M=0;M<p.length;M++){let S=p[M];S.setSize&&S.setSize(v,_)}},this.setEffects=function(v){p=v,y=p.length>0&&p[0].isRenderPass===!0;let _=o.width,M=o.height;for(let S=0;S<p.length;S++){let w=p[S];w.setSize&&w.setSize(_,M)}},this.begin=function(v,_){if(m||v.toneMapping===Xn&&p.length===0)return!1;if(g=_,_!==null){let M=_.width,S=_.height;(o.width!==M||o.height!==S)&&this.setSize(M,S)}return y===!1&&v.setRenderTarget(o),b=v.toneMapping,v.toneMapping=Xn,!0},this.hasRenderPass=function(){return y},this.end=function(v,_){v.toneMapping=b,m=!0;let M=o,S=a;for(let w=0;w<p.length;w++){let E=p[w];if(E.enabled!==!1&&(E.render(v,S,M,_),E.needsSwap!==!1)){let A=M;M=S,S=A}}if(h!==v.outputColorSpace||u!==v.toneMapping){h=v.outputColorSpace,u=v.toneMapping,c.defines={},lt.getTransfer(h)===mt&&(c.defines.SRGB_TRANSFER="");let w=l_[u];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(g),v.render(d,f),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}var Bd=new rn,lh=new bi(1,1),Hd=new Rr,zd=new ua,kd=new Nr,yd=[],vd=[],bd=new Float32Array(16),Ed=new Float32Array(9),Md=new Float32Array(4);function ar(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=yd[s];if(r===void 0&&(r=new Float32Array(s),yd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Il(i,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function h_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function p_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Md.set(n),i.uniformMatrix2fv(this.addr,!1,Md),Gt(t,n)}}function m_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Ed.set(n),i.uniformMatrix3fv(this.addr,!1,Ed),Gt(t,n)}}function g_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;bd.set(n),i.uniformMatrix4fv(this.addr,!1,bd),Gt(t,n)}}function __(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function x_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function v_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function b_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function T_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lh.compareFunction=t.isReversedDepthBuffer()?Tl:Sl,r=lh):r=Bd,t.setTexture2D(e||r,s)}function w_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zd,s)}function A_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kd,s)}function R_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hd,s)}function C_(i){switch(i){case 5126:return h_;case 35664:return u_;case 35665:return d_;case 35666:return f_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return __;case 35667:case 35671:return x_;case 35668:case 35672:return y_;case 35669:case 35673:return v_;case 5125:return b_;case 36294:return E_;case 36295:return M_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return R_}}function P_(i,e){i.uniform1fv(this.addr,e)}function I_(i,e){let t=ar(e,this.size,2);i.uniform2fv(this.addr,t)}function L_(i,e){let t=ar(e,this.size,3);i.uniform3fv(this.addr,t)}function D_(i,e){let t=ar(e,this.size,4);i.uniform4fv(this.addr,t)}function N_(i,e){let t=ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function U_(i,e){let t=ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function F_(i,e){let t=ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function O_(i,e){i.uniform1iv(this.addr,e)}function B_(i,e){i.uniform2iv(this.addr,e)}function H_(i,e){i.uniform3iv(this.addr,e)}function z_(i,e){i.uniform4iv(this.addr,e)}function k_(i,e){i.uniform1uiv(this.addr,e)}function V_(i,e){i.uniform2uiv(this.addr,e)}function G_(i,e){i.uniform3uiv(this.addr,e)}function W_(i,e){i.uniform4uiv(this.addr,e)}function X_(i,e,t){let n=this.cache,s=e.length,r=Il(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=lh:o=Bd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function q_(i,e,t){let n=this.cache,s=e.length,r=Il(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zd,r[o])}function Y_(i,e,t){let n=this.cache,s=e.length,r=Il(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||kd,r[o])}function Z_(i,e,t){let n=this.cache,s=e.length,r=Il(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hd,r[o])}function $_(i){switch(i){case 5126:return P_;case 35664:return I_;case 35665:return L_;case 35666:return D_;case 35674:return N_;case 35675:return U_;case 35676:return F_;case 5124:case 35670:return O_;case 35667:case 35671:return B_;case 35668:case 35672:return H_;case 35669:case 35673:return z_;case 5125:return k_;case 36294:return V_;case 36295:return G_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return Z_}}var ch=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=C_(t.type)}},hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$_(t.type)}},uh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},oh=/(\w+)(\])?(\[|\.)?/g;function Sd(i,e){i.seq.push(e),i.map[e.id]=e}function J_(i,e,t){let n=i.name,s=n.length;for(oh.lastIndex=0;;){let r=oh.exec(n),o=oh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Sd(t,c===void 0?new ch(a,i,e):new hh(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new uh(a),Sd(t,f)),t=f}}}var or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);J_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Td(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var K_=37297,j_=0;function Q_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var wd=new tt;function ex(i){lt._getMatrix(wd,lt.workingColorSpace,i);let e=`mat3( ${wd.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case wr:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ad(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Q_(i.getShaderSource(e),a)}else return r}function tx(i,e){let t=ex(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var nx={[Fc]:"Linear",[Oc]:"Reinhard",[Bc]:"Cineon",[Ei]:"ACESFilmic",[zc]:"AgX",[kc]:"Neutral",[Hc]:"Custom"};function ix(i,e){let t=nx[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Al=new P;function sx(){lt.getLuminanceCoefficients(Al);let i=Al.x.toFixed(4),e=Al.y.toFixed(4),t=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function ox(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ax(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ho(i){return i!==""}function Rd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(i){return i.replace(lx,hx)}var cx=new Map;function hx(i,e){let t=rt[e];if(t===void 0){let n=cx.get(e);if(n!==void 0)t=rt[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return dh(t)}var ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pd(i){return i.replace(ux,dx)}function dx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Id(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var fx={[Qr]:"SHADOWMAP_TYPE_PCF",[ri]:"SHADOWMAP_TYPE_VSM"};function px(i){return fx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mx={[Gi]:"ENVMAP_TYPE_CUBE",[us]:"ENVMAP_TYPE_CUBE",[eo]:"ENVMAP_TYPE_CUBE_UV"};function gx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":mx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var _x={[us]:"ENVMAP_MODE_REFRACTION"};function xx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":_x[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var yx={[Uc]:"ENVMAP_BLENDING_MULTIPLY",[Xu]:"ENVMAP_BLENDING_MIX",[qu]:"ENVMAP_BLENDING_ADD"};function vx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":yx[i.combine]||"ENVMAP_BLENDING_NONE"}function bx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ex(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=px(t),c=gx(t),d=xx(t),f=vx(t),h=bx(t),u=rx(t),m=ox(r),b=s.createProgram(),g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ho).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ho).join(`
`),p.length>0&&(p+=`
`)):(g=[Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),p=[Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Xn?ix("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,tx("linearToOutputTexel",t.outputColorSpace),sx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ho).join(`
`)),o=dh(o),o=Rd(o,t),o=Cd(o,t),a=dh(a),a=Rd(a,t),a=Cd(a,t),o=Pd(o),a=Pd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+g+o,_=y+p+a,M=Td(s,s.VERTEX_SHADER,v),S=Td(s,s.FRAGMENT_SHADER,_);s.attachShader(b,M),s.attachShader(b,S),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function w(N){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(b)||"",B=s.getShaderInfoLog(M)||"",O=s.getShaderInfoLog(S)||"",H=D.trim(),G=B.trim(),V=O.trim(),K=!0,Q=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,M,S);else{let he=Ad(s,M,"vertex"),Z=Ad(s,S,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+he+`
`+Z)}else H!==""?Je("WebGLProgram: Program Info Log:",H):(G===""||V==="")&&(Q=!1);Q&&(N.diagnostics={runnable:K,programLog:H,vertexShader:{log:G,prefix:g},fragmentShader:{log:V,prefix:p}})}s.deleteShader(M),s.deleteShader(S),E=new or(s,b),A=ax(s,b)}let E;this.getUniforms=function(){return E===void 0&&w(this),E};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(b,K_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j_++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=S,this}var Mx=0,fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ph(e),t.set(e,n)),n}},ph=class{constructor(e){this.id=Mx++,this.code=e,this.usedTimes=0}};function Sx(i){return i===qi||i===oo||i===ao}function Tx(i,e,t,n,s,r){let o=new Ws,a=new fh,l=new Set,c=[],d=new Map,f=n.logarithmicDepthBuffer,h=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(E){return l.add(E),E===0?"uv":`uv${E}`}function b(E,A,R,N,D,B){let O=N.fog,H=D.geometry,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,V=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,K=e.get(E.envMap||G,V),Q=K&&K.mapping===eo?K.image.height:null,he=u[E.type];E.precision!==null&&(h=n.getMaxPrecision(E.precision),h!==E.precision&&Je("WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));let Z=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ge=Z!==void 0?Z.length:0,we=0;H.morphAttributes.position!==void 0&&(we=1),H.morphAttributes.normal!==void 0&&(we=2),H.morphAttributes.color!==void 0&&(we=3);let Ve,De,$,le;if(he){let He=ci[he];Ve=He.vertexShader,De=He.fragmentShader}else{Ve=E.vertexShader,De=E.fragmentShader;let He=a.getVertexShaderStage(E),yt=a.getFragmentShaderStage(E);a.update(E,He,yt),$=He.id,le=yt.id}let oe=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Me=D.isInstancedMesh===!0,ee=D.isBatchedMesh===!0,Se=!!E.map,ve=!!E.matcap,ce=!!K,de=!!E.aoMap,fe=!!E.lightMap,xe=!!E.bumpMap&&E.wireframe===!1,me=!!E.normalMap,pe=!!E.displacementMap,ye=!!E.emissiveMap,Te=!!E.metalnessMap,Ae=!!E.roughnessMap,C=E.anisotropy>0,F=E.clearcoat>0,Y=E.dispersion>0,T=E.iridescence>0,x=E.sheen>0,I=E.transmission>0,U=C&&!!E.anisotropyMap,z=F&&!!E.clearcoatMap,j=F&&!!E.clearcoatNormalMap,se=F&&!!E.clearcoatRoughnessMap,q=T&&!!E.iridescenceMap,ie=T&&!!E.iridescenceThicknessMap,Ee=x&&!!E.sheenColorMap,Ie=x&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,Re=!!E.specularColorMap,Ge=!!E.specularIntensityMap,Ze=I&&!!E.transmissionMap,Ke=I&&!!E.thicknessMap,W=!!E.gradientMap,Ce=!!E.alphaMap,k=E.alphaTest>0,ae=!!E.alphaHash,be=!!E.extensions,ue=Xn;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ue=i.toneMapping);let Be={shaderID:he,shaderType:E.type,shaderName:E.name,vertexShader:Ve,fragmentShader:De,defines:E.defines,customVertexShaderID:$,customFragmentShaderID:le,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:ee,batchingColor:ee&&D._colorsTexture!==null,instancing:Me,instancingColor:Me&&D.instanceColor!==null,instancingMorph:Me&&D.morphTexture!==null,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Se,matcap:ve,envMap:ce,envMapMode:ce&&K.mapping,envMapCubeUVHeight:Q,aoMap:de,lightMap:fe,bumpMap:xe,normalMap:me,displacementMap:pe,emissiveMap:ye,normalMapObjectSpace:me&&E.normalMapType===$u,normalMapTangentSpace:me&&E.normalMapType===Ml,packedNormalMap:me&&E.normalMapType===Ml&&Sx(E.normalMap.format),metalnessMap:Te,roughnessMap:Ae,anisotropy:C,anisotropyMap:U,clearcoat:F,clearcoatMap:z,clearcoatNormalMap:j,clearcoatRoughnessMap:se,dispersion:Y,iridescence:T,iridescenceMap:q,iridescenceThicknessMap:ie,sheen:x,sheenColorMap:Ee,sheenRoughnessMap:Ie,specularMap:Pe,specularColorMap:Re,specularIntensityMap:Ge,transmission:I,transmissionMap:Ze,thicknessMap:Ke,gradientMap:W,opaque:E.transparent===!1&&E.blending===ss&&E.alphaToCoverage===!1,alphaMap:Ce,alphaTest:k,alphaHash:ae,combine:E.combine,mapUv:Se&&m(E.map.channel),aoMapUv:de&&m(E.aoMap.channel),lightMapUv:fe&&m(E.lightMap.channel),bumpMapUv:xe&&m(E.bumpMap.channel),normalMapUv:me&&m(E.normalMap.channel),displacementMapUv:pe&&m(E.displacementMap.channel),emissiveMapUv:ye&&m(E.emissiveMap.channel),metalnessMapUv:Te&&m(E.metalnessMap.channel),roughnessMapUv:Ae&&m(E.roughnessMap.channel),anisotropyMapUv:U&&m(E.anisotropyMap.channel),clearcoatMapUv:z&&m(E.clearcoatMap.channel),clearcoatNormalMapUv:j&&m(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&m(E.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&m(E.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&m(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(E.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&m(E.sheenRoughnessMap.channel),specularMapUv:Pe&&m(E.specularMap.channel),specularColorMapUv:Re&&m(E.specularColorMap.channel),specularIntensityMapUv:Ge&&m(E.specularIntensityMap.channel),transmissionMapUv:Ze&&m(E.transmissionMap.channel),thicknessMapUv:Ke&&m(E.thicknessMap.channel),alphaMapUv:Ce&&m(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(me||C),vertexNormals:!!H.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(Se||Ce),fog:!!O,useFog:E.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||H.attributes.normal===void 0&&me===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:we,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:Se&&E.map.isVideoTexture===!0&&lt.getTransfer(E.map.colorSpace)===mt,decodeVideoTextureEmissive:ye&&E.emissiveMap.isVideoTexture===!0&&lt.getTransfer(E.emissiveMap.colorSpace)===mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===xt,flipSided:E.side===hn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:be&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&E.extensions.multiDraw===!0||ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function g(E){let A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(let R in E.defines)A.push(R),A.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(p(A,E),y(A,E),A.push(i.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function p(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function y(E,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),E.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),E.push(o.mask)}function v(E){let A=u[E.type],R;if(A){let N=ci[A];R=dd.clone(N.uniforms)}else R=E.uniforms;return R}function _(E,A){let R=d.get(A);return R!==void 0?++R.usedTimes:(R=new Ex(i,A,E,s),c.push(R),d.set(A,R)),R}function M(E){if(--E.usedTimes===0){let A=c.indexOf(E);c[A]=c[c.length-1],c.pop(),d.delete(E.cacheKey),E.destroy()}}function S(E){a.remove(E)}function w(){a.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:v,acquireProgram:_,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:w}}function wx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ax(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ld(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function a(h,u,m,b,g,p){let y=i[e];return y===void 0?(y={id:h.id,object:h,geometry:u,material:m,materialVariant:o(h),groupOrder:b,renderOrder:h.renderOrder,z:g,group:p},i[e]=y):(y.id=h.id,y.object=h,y.geometry=u,y.material=m,y.materialVariant=o(h),y.groupOrder=b,y.renderOrder=h.renderOrder,y.z=g,y.group=p),e++,y}function l(h,u,m,b,g,p){let y=a(h,u,m,b,g,p);m.transmission>0?n.push(y):m.transparent===!0?s.push(y):t.push(y)}function c(h,u,m,b,g,p){let y=a(h,u,m,b,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):t.unshift(y)}function d(h,u,m){t.length>1&&t.sort(h||Ax),n.length>1&&n.sort(u||Ld),s.length>1&&s.sort(u||Ld),m&&(t.reverse(),n.reverse(),s.reverse())}function f(){for(let h=e,u=i.length;h<u;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:d}}function Rx(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Dd,i.set(n,[o])):s>=r.length?(o=new Dd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new je};break;case"SpotLight":t={position:new P,direction:new P,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Px(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ix=0;function Lx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Dx(i){let e=new Cx,t=Px(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new ht,o=new ht;function a(c){let d=0,f=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let u=0,m=0,b=0,g=0,p=0,y=0,v=0,_=0,M=0,S=0,w=0;c.sort(Lx);for(let A=0,R=c.length;A<R;A++){let N=c[A],D=N.color,B=N.intensity,O=N.distance,H=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===qi?H=N.shadow.map.texture:H=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)d+=D.r*B,f+=D.g*B,h+=D.b*B;else if(N.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(N.sh.coefficients[G],B);w++}else if(N.isDirectionalLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let V=N.shadow,K=t.get(N);K.shadowIntensity=V.intensity,K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,n.directionalShadow[u]=K,n.directionalShadowMap[u]=H,n.directionalShadowMatrix[u]=N.shadow.matrix,y++}n.directional[u]=G,u++}else if(N.isSpotLight){let G=e.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(D).multiplyScalar(B),G.distance=O,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,n.spot[b]=G;let V=N.shadow;if(N.map&&(n.spotLightMap[M]=N.map,M++,V.updateMatrices(N),N.castShadow&&S++),n.spotLightMatrix[b]=V.matrix,N.castShadow){let K=t.get(N);K.shadowIntensity=V.intensity,K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,n.spotShadow[b]=K,n.spotShadowMap[b]=H,_++}b++}else if(N.isRectAreaLight){let G=e.get(N);G.color.copy(D).multiplyScalar(B),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),n.rectArea[g]=G,g++}else if(N.isPointLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),G.distance=N.distance,G.decay=N.decay,N.castShadow){let V=N.shadow,K=t.get(N);K.shadowIntensity=V.intensity,K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,K.shadowCameraNear=V.camera.near,K.shadowCameraFar=V.camera.far,n.pointShadow[m]=K,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=N.shadow.matrix,v++}n.point[m]=G,m++}else if(N.isHemisphereLight){let G=e.get(N);G.skyColor.copy(N.color).multiplyScalar(B),G.groundColor.copy(N.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;let E=n.hash;(E.directionalLength!==u||E.pointLength!==m||E.spotLength!==b||E.rectAreaLength!==g||E.hemiLength!==p||E.numDirectionalShadows!==y||E.numPointShadows!==v||E.numSpotShadows!==_||E.numSpotMaps!==M||E.numLightProbes!==w)&&(n.directional.length=u,n.spot.length=b,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+M-S,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,E.directionalLength=u,E.pointLength=m,E.spotLength=b,E.rectAreaLength=g,E.hemiLength=p,E.numDirectionalShadows=y,E.numPointShadows=v,E.numSpotShadows=_,E.numSpotMaps=M,E.numLightProbes=w,n.version=Ix++)}function l(c,d){let f=0,h=0,u=0,m=0,b=0,g=d.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let v=c[p];if(v.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(v.isSpotLight){let _=n.spot[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(v.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let _=n.point[h];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){let _=n.hemi[b];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),b++}}}return{setup:a,setupView:l,state:n}}function Nd(i){let e=new Dx(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function d(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Nx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Nd(i),e.set(s,[a])):r>=o.length?(a=new Nd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ox=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Bx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Ud=new ht,co=new P,ah=new P;function Hx(i,e,t){let n=new $s,s=new J,r=new J,o=new Pt,a=new Ma,l=new Sa,c={},d=t.maxTextureSize,f={[xi]:hn,[hn]:xi,[xt]:xt},h=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Ux,fragmentShader:Fx}),u=h.clone();u.defines.HORIZONTAL_PASS=1;let m=new ut;m.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Xe(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qr;let p=this.type;this.render=function(S,w,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===wu&&(Je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qr);let A=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),D=i.state;D.setBlending(oi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=p!==this.type;B&&w.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(H=>H.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,H=S.length;O<H;O++){let G=S[O],V=G.shadow;if(V===void 0){Je("WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let K=V.getFrameExtents();s.multiply(K),r.copy(V.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/K.x),s.x=r.x*K.x,V.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/K.y),s.y=r.y*K.y,V.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Q,V.map===null||B===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ri){if(G.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new _n(s.x,s.y,{format:qi,type:ai,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),V.map.texture.name=G.name+".shadowMap",V.map.depthTexture=new bi(s.x,s.y,Ln),V.map.depthTexture.name=G.name+".shadowMapDepth",V.map.depthTexture.format=Qn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=qt,V.map.depthTexture.magFilter=qt}else G.isPointLight?(V.map=new Cl(s.x),V.map.depthTexture=new ma(s.x,qn)):(V.map=new _n(s.x,s.y),V.map.depthTexture=new bi(s.x,s.y,qn)),V.map.depthTexture.name=G.name+".shadowMap",V.map.depthTexture.format=Qn,this.type===Qr?(V.map.depthTexture.compareFunction=Q?Tl:Sl,V.map.depthTexture.minFilter=Jt,V.map.depthTexture.magFilter=Jt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=qt,V.map.depthTexture.magFilter=qt);V.camera.updateProjectionMatrix()}let he=V.map.isWebGLCubeRenderTarget?6:1;for(let Z=0;Z<he;Z++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(V.map),i.clear());let ge=V.getViewport(Z);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),D.viewport(o)}if(G.isPointLight){let ge=V.camera,we=V.matrix,Ve=G.distance||ge.far;Ve!==ge.far&&(ge.far=Ve,ge.updateProjectionMatrix()),co.setFromMatrixPosition(G.matrixWorld),ge.position.copy(co),ah.copy(ge.position),ah.add(Ox[Z]),ge.up.copy(Bx[Z]),ge.lookAt(ah),ge.updateMatrixWorld(),we.makeTranslation(-co.x,-co.y,-co.z),Ud.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Ud,ge.coordinateSystem,ge.reversedDepth)}else V.updateMatrices(G);n=V.getFrustum(),_(w,E,V.camera,G,this.type)}V.isPointLightShadow!==!0&&this.type===ri&&y(V,E),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(A,R,N)};function y(S,w){let E=e.update(b);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,u.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new _n(s.x,s.y,{format:qi,type:ai})),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,E,h,b,null),u.uniforms.shadow_pass.value=S.mapPass.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,E,u,b,null)}function v(S,w,E,A){let R=null,N=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)R=N;else if(R=E.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let D=R.uuid,B=w.uuid,O=c[D];O===void 0&&(O={},c[D]=O);let H=O[B];H===void 0&&(H=R.clone(),O[B]=H,w.addEventListener("dispose",M)),R=H}if(R.visible=w.visible,R.wireframe=w.wireframe,A===ri?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:f[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=i.properties.get(R);D.light=E}return R}function _(S,w,E,A,R){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===ri)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);let B=e.update(S),O=S.material;if(Array.isArray(O)){let H=B.groups;for(let G=0,V=H.length;G<V;G++){let K=H[G],Q=O[K.materialIndex];if(Q&&Q.visible){let he=v(S,Q,A,R);S.onBeforeShadow(i,S,w,E,B,he,K),i.renderBufferDirect(E,null,B,he,S,K),S.onAfterShadow(i,S,w,E,B,he,K)}}}else if(O.visible){let H=v(S,O,A,R);S.onBeforeShadow(i,S,w,E,B,H,null),i.renderBufferDirect(E,null,B,H,S,null),S.onAfterShadow(i,S,w,E,B,H,null)}}let D=S.children;for(let B=0,O=D.length;B<O;B++)_(D[B],w,E,A,R)}function M(S){S.target.removeEventListener("dispose",M);for(let E in c){let A=c[E],R=S.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function zx(i,e){function t(){let W=!1,Ce=new Pt,k=null,ae=new Pt(0,0,0,0);return{setMask:function(be){k!==be&&!W&&(i.colorMask(be,be,be,be),k=be)},setLocked:function(be){W=be},setClear:function(be,ue,Be,He,yt){yt===!0&&(be*=He,ue*=He,Be*=He),Ce.set(be,ue,Be,He),ae.equals(Ce)===!1&&(i.clearColor(be,ue,Be,He),ae.copy(Ce))},reset:function(){W=!1,k=null,ae.set(-1,0,0,0)}}}function n(){let W=!1,Ce=!1,k=null,ae=null,be=null;return{setReversed:function(ue){if(Ce!==ue){let Be=e.get("EXT_clip_control");ue?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Ce=ue;let He=be;be=null,this.setClear(He)}},getReversed:function(){return Ce},setTest:function(ue){ue?oe(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ue){k!==ue&&!W&&(i.depthMask(ue),k=ue)},setFunc:function(ue){if(Ce&&(ue=rd[ue]),ae!==ue){switch(ue){case ea:i.depthFunc(i.NEVER);break;case ta:i.depthFunc(i.ALWAYS);break;case na:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case ia:i.depthFunc(i.EQUAL);break;case sa:i.depthFunc(i.GEQUAL);break;case ra:i.depthFunc(i.GREATER);break;case oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=ue}},setLocked:function(ue){W=ue},setClear:function(ue){be!==ue&&(be=ue,Ce&&(ue=1-ue),i.clearDepth(ue))},reset:function(){W=!1,k=null,ae=null,be=null,Ce=!1}}}function s(){let W=!1,Ce=null,k=null,ae=null,be=null,ue=null,Be=null,He=null,yt=null;return{setTest:function(ft){W||(ft?oe(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(ft){Ce!==ft&&!W&&(i.stencilMask(ft),Ce=ft)},setFunc:function(ft,bn,En){(k!==ft||ae!==bn||be!==En)&&(i.stencilFunc(ft,bn,En),k=ft,ae=bn,be=En)},setOp:function(ft,bn,En){(ue!==ft||Be!==bn||He!==En)&&(i.stencilOp(ft,bn,En),ue=ft,Be=bn,He=En)},setLocked:function(ft){W=ft},setClear:function(ft){yt!==ft&&(i.clearStencil(ft),yt=ft)},reset:function(){W=!1,Ce=null,k=null,ae=null,be=null,ue=null,Be=null,He=null,yt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,d={},f={},h={},u=new WeakMap,m=[],b=null,g=!1,p=null,y=null,v=null,_=null,M=null,S=null,w=null,E=new je(0,0,0),A=0,R=!1,N=null,D=null,B=null,O=null,H=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,K=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=K>=2);let he=null,Z={},ge=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),Ve=new Pt().fromArray(ge),De=new Pt().fromArray(we);function $(W,Ce,k,ae){let be=new Uint8Array(4),ue=i.createTexture();i.bindTexture(W,ue),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<k;Be++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ce,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(Ce+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return ue}let le={};le[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(rs),xe(!1),me(Lc),oe(i.CULL_FACE),de(oi);function oe(W){d[W]!==!0&&(i.enable(W),d[W]=!0)}function _e(W){d[W]!==!1&&(i.disable(W),d[W]=!1)}function Me(W,Ce){return h[W]!==Ce?(i.bindFramebuffer(W,Ce),h[W]=Ce,W===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ce),W===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ce),!0):!1}function ee(W,Ce){let k=m,ae=!1;if(W){k=u.get(Ce),k===void 0&&(k=[],u.set(Ce,k));let be=W.textures;if(k.length!==be.length||k[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Be=be.length;ue<Be;ue++)k[ue]=i.COLOR_ATTACHMENT0+ue;k.length=be.length,ae=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,ae=!0);ae&&i.drawBuffers(k)}function Se(W){return b!==W?(i.useProgram(W),b=W,!0):!1}let ve={[Ni]:i.FUNC_ADD,[Ru]:i.FUNC_SUBTRACT,[Cu]:i.FUNC_REVERSE_SUBTRACT};ve[Pu]=i.MIN,ve[Iu]=i.MAX;let ce={[Lu]:i.ZERO,[Du]:i.ONE,[Nu]:i.SRC_COLOR,[jo]:i.SRC_ALPHA,[zu]:i.SRC_ALPHA_SATURATE,[Bu]:i.DST_COLOR,[Fu]:i.DST_ALPHA,[Uu]:i.ONE_MINUS_SRC_COLOR,[Qo]:i.ONE_MINUS_SRC_ALPHA,[Hu]:i.ONE_MINUS_DST_COLOR,[Ou]:i.ONE_MINUS_DST_ALPHA,[ku]:i.CONSTANT_COLOR,[Vu]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[Wu]:i.ONE_MINUS_CONSTANT_ALPHA};function de(W,Ce,k,ae,be,ue,Be,He,yt,ft){if(W===oi){g===!0&&(_e(i.BLEND),g=!1);return}if(g===!1&&(oe(i.BLEND),g=!0),W!==Au){if(W!==p||ft!==R){if((y!==Ni||M!==Ni)&&(i.blendEquation(i.FUNC_ADD),y=Ni,M=Ni),ft)switch(W){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case In:i.blendFunc(i.ONE,i.ONE);break;case Dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",W);break}else switch(W){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case In:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dc:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",W);break}v=null,_=null,S=null,w=null,E.set(0,0,0),A=0,p=W,R=ft}return}be=be||Ce,ue=ue||k,Be=Be||ae,(Ce!==y||be!==M)&&(i.blendEquationSeparate(ve[Ce],ve[be]),y=Ce,M=be),(k!==v||ae!==_||ue!==S||Be!==w)&&(i.blendFuncSeparate(ce[k],ce[ae],ce[ue],ce[Be]),v=k,_=ae,S=ue,w=Be),(He.equals(E)===!1||yt!==A)&&(i.blendColor(He.r,He.g,He.b,yt),E.copy(He),A=yt),p=W,R=!1}function fe(W,Ce){W.side===xt?_e(i.CULL_FACE):oe(i.CULL_FACE);let k=W.side===hn;Ce&&(k=!k),xe(k),W.blending===ss&&W.transparent===!1?de(oi):de(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let ae=W.stencilWrite;a.setTest(ae),ae&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ye(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(W){N!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),N=W)}function me(W){W!==Su?(oe(i.CULL_FACE),W!==D&&(W===Lc?i.cullFace(i.BACK):W===Tu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),D=W}function pe(W){W!==B&&(V&&i.lineWidth(W),B=W)}function ye(W,Ce,k){W?(oe(i.POLYGON_OFFSET_FILL),(O!==Ce||H!==k)&&(O=Ce,H=k,o.getReversed()&&(Ce=-Ce),i.polygonOffset(Ce,k))):_e(i.POLYGON_OFFSET_FILL)}function Te(W){W?oe(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function Ae(W){W===void 0&&(W=i.TEXTURE0+G-1),he!==W&&(i.activeTexture(W),he=W)}function C(W,Ce,k){k===void 0&&(he===null?k=i.TEXTURE0+G-1:k=he);let ae=Z[k];ae===void 0&&(ae={type:void 0,texture:void 0},Z[k]=ae),(ae.type!==W||ae.texture!==Ce)&&(he!==k&&(i.activeTexture(k),he=k),i.bindTexture(W,Ce||le[W]),ae.type=W,ae.texture=Ce)}function F(){let W=Z[he];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Y(){try{i.compressedTexImage2D(...arguments)}catch(W){et("WebGLState:",W)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(W){et("WebGLState:",W)}}function x(){try{i.texSubImage2D(...arguments)}catch(W){et("WebGLState:",W)}}function I(){try{i.texSubImage3D(...arguments)}catch(W){et("WebGLState:",W)}}function U(){try{i.compressedTexSubImage2D(...arguments)}catch(W){et("WebGLState:",W)}}function z(){try{i.compressedTexSubImage3D(...arguments)}catch(W){et("WebGLState:",W)}}function j(){try{i.texStorage2D(...arguments)}catch(W){et("WebGLState:",W)}}function se(){try{i.texStorage3D(...arguments)}catch(W){et("WebGLState:",W)}}function q(){try{i.texImage2D(...arguments)}catch(W){et("WebGLState:",W)}}function ie(){try{i.texImage3D(...arguments)}catch(W){et("WebGLState:",W)}}function Ee(W){return f[W]!==void 0?f[W]:i.getParameter(W)}function Ie(W,Ce){f[W]!==Ce&&(i.pixelStorei(W,Ce),f[W]=Ce)}function Pe(W){Ve.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Ve.copy(W))}function Re(W){De.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),De.copy(W))}function Ge(W,Ce){let k=c.get(Ce);k===void 0&&(k=new WeakMap,c.set(Ce,k));let ae=k.get(W);ae===void 0&&(ae=i.getUniformBlockIndex(Ce,W.name),k.set(W,ae))}function Ze(W,Ce){let ae=c.get(Ce).get(W);l.get(Ce)!==ae&&(i.uniformBlockBinding(Ce,ae,W.__bindingPointIndex),l.set(Ce,ae))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},he=null,Z={},h={},u=new WeakMap,m=[],b=null,g=!1,p=null,y=null,v=null,_=null,M=null,S=null,w=null,E=new je(0,0,0),A=0,R=!1,N=null,D=null,B=null,O=null,H=null,Ve.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:_e,bindFramebuffer:Me,drawBuffers:ee,useProgram:Se,setBlending:de,setMaterial:fe,setFlipSided:xe,setCullFace:me,setLineWidth:pe,setPolygonOffset:ye,setScissorTest:Te,activeTexture:Ae,bindTexture:C,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:T,texImage2D:q,texImage3D:ie,pixelStorei:Ie,getParameter:Ee,updateUBOMapping:Ge,uniformBlockBinding:Ze,texStorage2D:j,texStorage3D:se,texSubImage2D:x,texSubImage3D:I,compressedTexSubImage2D:U,compressedTexSubImage3D:z,scissor:Pe,viewport:Re,reset:Ke}}function kx(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,d=new WeakMap,f=new Set,h,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,x){return m?new OffscreenCanvas(T,x):ks("canvas")}function g(T,x,I){let U=1,z=Y(T);if((z.width>I||z.height>I)&&(U=I/Math.max(z.width,z.height)),U<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let j=Math.floor(U*z.width),se=Math.floor(U*z.height);h===void 0&&(h=b(j,se));let q=x?b(j,se):h;return q.width=j,q.height=se,q.getContext("2d").drawImage(T,0,0,j,se),Je("WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+j+"x"+se+")."),q}else return"data"in T&&Je("WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),T;return T}function p(T){return T.generateMipmaps}function y(T){i.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(T,x,I,U,z,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se;U&&(se=e.get("EXT_texture_norm16"),se||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=x;if(x===i.RED&&(I===i.FLOAT&&(q=i.R32F),I===i.HALF_FLOAT&&(q=i.R16F),I===i.UNSIGNED_BYTE&&(q=i.R8),I===i.UNSIGNED_SHORT&&se&&(q=se.R16_EXT),I===i.SHORT&&se&&(q=se.R16_SNORM_EXT)),x===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.R8UI),I===i.UNSIGNED_SHORT&&(q=i.R16UI),I===i.UNSIGNED_INT&&(q=i.R32UI),I===i.BYTE&&(q=i.R8I),I===i.SHORT&&(q=i.R16I),I===i.INT&&(q=i.R32I)),x===i.RG&&(I===i.FLOAT&&(q=i.RG32F),I===i.HALF_FLOAT&&(q=i.RG16F),I===i.UNSIGNED_BYTE&&(q=i.RG8),I===i.UNSIGNED_SHORT&&se&&(q=se.RG16_EXT),I===i.SHORT&&se&&(q=se.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RG8UI),I===i.UNSIGNED_SHORT&&(q=i.RG16UI),I===i.UNSIGNED_INT&&(q=i.RG32UI),I===i.BYTE&&(q=i.RG8I),I===i.SHORT&&(q=i.RG16I),I===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RGB8UI),I===i.UNSIGNED_SHORT&&(q=i.RGB16UI),I===i.UNSIGNED_INT&&(q=i.RGB32UI),I===i.BYTE&&(q=i.RGB8I),I===i.SHORT&&(q=i.RGB16I),I===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),I===i.UNSIGNED_INT&&(q=i.RGBA32UI),I===i.BYTE&&(q=i.RGBA8I),I===i.SHORT&&(q=i.RGBA16I),I===i.INT&&(q=i.RGBA32I)),x===i.RGB&&(I===i.UNSIGNED_SHORT&&se&&(q=se.RGB16_EXT),I===i.SHORT&&se&&(q=se.RGB16_SNORM_EXT),I===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),x===i.RGBA){let ie=j?wr:lt.getTransfer(z);I===i.FLOAT&&(q=i.RGBA32F),I===i.HALF_FLOAT&&(q=i.RGBA16F),I===i.UNSIGNED_BYTE&&(q=ie===mt?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT&&se&&(q=se.RGBA16_EXT),I===i.SHORT&&se&&(q=se.RGBA16_SNORM_EXT),I===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(T,x){let I;return T?x===null||x===qn||x===sr?I=i.DEPTH24_STENCIL8:x===Ln?I=i.DEPTH32F_STENCIL8:x===ir&&(I=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===qn||x===sr?I=i.DEPTH_COMPONENT24:x===Ln?I=i.DEPTH_COMPONENT32F:x===ir&&(I=i.DEPTH_COMPONENT16),I}function S(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==qt&&T.minFilter!==Jt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function w(T){let x=T.target;x.removeEventListener("dispose",w),A(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&f.delete(x)}function E(T){let x=T.target;x.removeEventListener("dispose",E),N(x)}function A(T){let x=n.get(T);if(x.__webglInit===void 0)return;let I=T.source,U=u.get(I);if(U){let z=U[x.__cacheKey];z.usedTimes--,z.usedTimes===0&&R(T),Object.keys(U).length===0&&u.delete(I)}n.remove(T)}function R(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let I=T.source,U=u.get(I);delete U[x.__cacheKey],o.memory.textures--}function N(T){let x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(x.__webglFramebuffer[U]))for(let z=0;z<x.__webglFramebuffer[U].length;z++)i.deleteFramebuffer(x.__webglFramebuffer[U][z]);else i.deleteFramebuffer(x.__webglFramebuffer[U]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[U])}else{if(Array.isArray(x.__webglFramebuffer))for(let U=0;U<x.__webglFramebuffer.length;U++)i.deleteFramebuffer(x.__webglFramebuffer[U]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let U=0;U<x.__webglColorRenderbuffer.length;U++)x.__webglColorRenderbuffer[U]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[U]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let I=T.textures;for(let U=0,z=I.length;U<z;U++){let j=n.get(I[U]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(I[U])}n.remove(T)}let D=0;function B(){D=0}function O(){return D}function H(T){D=T}function G(){let T=D;return T>=s.maxTextures&&Je("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function V(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function K(T,x){let I=n.get(T);if(T.isVideoTexture&&C(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){let U=T.image;if(U===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(I,T,x);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+x)}function Q(T,x){let I=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){_e(I,T,x);return}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+x)}function he(T,x){let I=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){_e(I,T,x);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+x)}function Z(T,x){let I=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&I.__version!==T.version){Me(I,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+x)}let ge={[wn]:i.REPEAT,[sn]:i.CLAMP_TO_EDGE,[Hs]:i.MIRRORED_REPEAT},we={[qt]:i.NEAREST,[Yu]:i.NEAREST_MIPMAP_NEAREST,[to]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[Ha]:i.LINEAR_MIPMAP_NEAREST,[Wi]:i.LINEAR_MIPMAP_LINEAR},Ve={[Ju]:i.NEVER,[td]:i.ALWAYS,[Ku]:i.LESS,[Sl]:i.LEQUAL,[ju]:i.EQUAL,[Tl]:i.GEQUAL,[Qu]:i.GREATER,[ed]:i.NOTEQUAL};function De(T,x){if(x.type===Ln&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Jt||x.magFilter===Ha||x.magFilter===to||x.magFilter===Wi||x.minFilter===Jt||x.minFilter===Ha||x.minFilter===to||x.minFilter===Wi)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ge[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ge[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ge[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,we[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,we[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qt||x.minFilter!==to&&x.minFilter!==Wi||x.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function $(T,x){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",w));let U=x.source,z=u.get(U);z===void 0&&(z={},u.set(U,z));let j=V(x);if(j!==T.__cacheKey){z[j]===void 0&&(z[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),z[j].usedTimes++;let se=z[T.__cacheKey];se!==void 0&&(z[T.__cacheKey].usedTimes--,se.usedTimes===0&&R(x)),T.__cacheKey=j,T.__webglTexture=z[j].texture}return I}function le(T,x,I){return Math.floor(Math.floor(T/I)/x)}function oe(T,x,I,U){let j=T.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,I,U,x.data);else{j.sort((Ie,Pe)=>Ie.start-Pe.start);let se=0;for(let Ie=1;Ie<j.length;Ie++){let Pe=j[se],Re=j[Ie],Ge=Pe.start+Pe.count,Ze=le(Re.start,x.width,4),Ke=le(Pe.start,x.width,4);Re.start<=Ge+1&&Ze===Ke&&le(Re.start+Re.count-1,x.width,4)===Ze?Pe.count=Math.max(Pe.count,Re.start+Re.count-Pe.start):(++se,j[se]=Re)}j.length=se+1;let q=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),Ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ie=0,Pe=j.length;Ie<Pe;Ie++){let Re=j[Ie],Ge=Math.floor(Re.start/4),Ze=Math.ceil(Re.count/4),Ke=Ge%x.width,W=Math.floor(Ge/x.width),Ce=Ze,k=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,Ke,W,Ce,k,I,U,x.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function _e(T,x,I){let U=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(U=i.TEXTURE_3D);let z=$(T,x),j=x.source;t.bindTexture(U,T.__webglTexture,i.TEXTURE0+I);let se=n.get(j);if(j.version!==se.__version||z===!0){if(t.activeTexture(i.TEXTURE0+I),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let k=lt.getPrimaries(lt.workingColorSpace),ae=x.colorSpace===Mi?null:lt.getPrimaries(x.colorSpace),be=x.colorSpace===Mi||k===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let ie=g(x.image,!1,s.maxTextureSize);ie=F(x,ie);let Ee=r.convert(x.format,x.colorSpace),Ie=r.convert(x.type),Pe=_(x.internalFormat,Ee,Ie,x.normalized,x.colorSpace,x.isVideoTexture);De(U,x);let Re,Ge=x.mipmaps,Ze=x.isVideoTexture!==!0,Ke=se.__version===void 0||z===!0,W=j.dataReady,Ce=S(x,ie);if(x.isDepthTexture)Pe=M(x.format===Xi,x.type),Ke&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,Pe,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ie.width,ie.height,0,Ee,Ie,null));else if(x.isDataTexture)if(Ge.length>0){Ze&&Ke&&t.texStorage2D(i.TEXTURE_2D,Ce,Pe,Ge[0].width,Ge[0].height);for(let k=0,ae=Ge.length;k<ae;k++)Re=Ge[k],Ze?W&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,Re.width,Re.height,Ee,Ie,Re.data):t.texImage2D(i.TEXTURE_2D,k,Pe,Re.width,Re.height,0,Ee,Ie,Re.data);x.generateMipmaps=!1}else Ze?(Ke&&t.texStorage2D(i.TEXTURE_2D,Ce,Pe,ie.width,ie.height),W&&oe(x,ie,Ee,Ie)):t.texImage2D(i.TEXTURE_2D,0,Pe,ie.width,ie.height,0,Ee,Ie,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ze&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Pe,Ge[0].width,Ge[0].height,ie.depth);for(let k=0,ae=Ge.length;k<ae;k++)if(Re=Ge[k],x.format!==Dn)if(Ee!==null)if(Ze){if(W)if(x.layerUpdates.size>0){let be=th(Re.width,Re.height,x.format,x.type);for(let ue of x.layerUpdates){let Be=Re.data.subarray(ue*be/Re.data.BYTES_PER_ELEMENT,(ue+1)*be/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,ue,Re.width,Re.height,1,Ee,Be)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,Re.width,Re.height,ie.depth,Ee,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Pe,Re.width,Re.height,ie.depth,0,Re.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,Re.width,Re.height,ie.depth,Ee,Ie,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,Pe,Re.width,Re.height,ie.depth,0,Ee,Ie,Re.data)}else{Ze&&Ke&&t.texStorage2D(i.TEXTURE_2D,Ce,Pe,Ge[0].width,Ge[0].height);for(let k=0,ae=Ge.length;k<ae;k++)Re=Ge[k],x.format!==Dn?Ee!==null?Ze?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,Re.width,Re.height,Ee,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,k,Pe,Re.width,Re.height,0,Re.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?W&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,Re.width,Re.height,Ee,Ie,Re.data):t.texImage2D(i.TEXTURE_2D,k,Pe,Re.width,Re.height,0,Ee,Ie,Re.data)}else if(x.isDataArrayTexture)if(Ze){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Pe,ie.width,ie.height,ie.depth),W)if(x.layerUpdates.size>0){let k=th(ie.width,ie.height,x.format,x.type);for(let ae of x.layerUpdates){let be=ie.data.subarray(ae*k/ie.data.BYTES_PER_ELEMENT,(ae+1)*k/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,ie.width,ie.height,1,Ee,Ie,be)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ee,Ie,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ie.width,ie.height,ie.depth,0,Ee,Ie,ie.data);else if(x.isData3DTexture)Ze?(Ke&&t.texStorage3D(i.TEXTURE_3D,Ce,Pe,ie.width,ie.height,ie.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ee,Ie,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ie.width,ie.height,ie.depth,0,Ee,Ie,ie.data);else if(x.isFramebufferTexture){if(Ke)if(Ze)t.texStorage2D(i.TEXTURE_2D,Ce,Pe,ie.width,ie.height);else{let k=ie.width,ae=ie.height;for(let be=0;be<Ce;be++)t.texImage2D(i.TEXTURE_2D,be,Pe,k,ae,0,Ee,Ie,null),k>>=1,ae>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let k=i.canvas;if(k.hasAttribute("layoutsubtree")||k.setAttribute("layoutsubtree","true"),ie.parentNode!==k){k.appendChild(ie),f.add(x),k.onpaint=ae=>{let be=ae.changedElements;for(let ue of f)be.includes(ue.image)&&(ue.needsUpdate=!0)},k.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let be=i.RGBA,ue=i.RGBA,Be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,be,ue,Be,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(Ze&&Ke){let k=Y(Ge[0]);t.texStorage2D(i.TEXTURE_2D,Ce,Pe,k.width,k.height)}for(let k=0,ae=Ge.length;k<ae;k++)Re=Ge[k],Ze?W&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,Ee,Ie,Re):t.texImage2D(i.TEXTURE_2D,k,Pe,Ee,Ie,Re);x.generateMipmaps=!1}else if(Ze){if(Ke){let k=Y(ie);t.texStorage2D(i.TEXTURE_2D,Ce,Pe,k.width,k.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Ie,ie)}else t.texImage2D(i.TEXTURE_2D,0,Pe,Ee,Ie,ie);p(x)&&y(U),se.__version=j.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Me(T,x,I){if(x.image.length!==6)return;let U=$(T,x),z=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+I);let j=n.get(z);if(z.version!==j.__version||U===!0){t.activeTexture(i.TEXTURE0+I);let se=lt.getPrimaries(lt.workingColorSpace),q=x.colorSpace===Mi?null:lt.getPrimaries(x.colorSpace),ie=x.colorSpace===Mi||se===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Ee=x.isCompressedTexture||x.image[0].isCompressedTexture,Ie=x.image[0]&&x.image[0].isDataTexture,Pe=[];for(let ue=0;ue<6;ue++)!Ee&&!Ie?Pe[ue]=g(x.image[ue],!0,s.maxCubemapSize):Pe[ue]=Ie?x.image[ue].image:x.image[ue],Pe[ue]=F(x,Pe[ue]);let Re=Pe[0],Ge=r.convert(x.format,x.colorSpace),Ze=r.convert(x.type),Ke=_(x.internalFormat,Ge,Ze,x.normalized,x.colorSpace),W=x.isVideoTexture!==!0,Ce=j.__version===void 0||U===!0,k=z.dataReady,ae=S(x,Re);De(i.TEXTURE_CUBE_MAP,x);let be;if(Ee){W&&Ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Ke,Re.width,Re.height);for(let ue=0;ue<6;ue++){be=Pe[ue].mipmaps;for(let Be=0;Be<be.length;Be++){let He=be[Be];x.format!==Dn?Ge!==null?W?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,0,0,He.width,He.height,Ge,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,Ke,He.width,He.height,0,He.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,0,0,He.width,He.height,Ge,Ze,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,Ke,He.width,He.height,0,Ge,Ze,He.data)}}}else{if(be=x.mipmaps,W&&Ce){be.length>0&&ae++;let ue=Y(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Ke,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Ie){W?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Pe[ue].width,Pe[ue].height,Ge,Ze,Pe[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ke,Pe[ue].width,Pe[ue].height,0,Ge,Ze,Pe[ue].data);for(let Be=0;Be<be.length;Be++){let yt=be[Be].image[ue].image;W?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,0,0,yt.width,yt.height,Ge,Ze,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,Ke,yt.width,yt.height,0,Ge,Ze,yt.data)}}else{W?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ge,Ze,Pe[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ke,Ge,Ze,Pe[ue]);for(let Be=0;Be<be.length;Be++){let He=be[Be];W?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,0,0,Ge,Ze,He.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,Ke,Ge,Ze,He.image[ue])}}}p(x)&&y(i.TEXTURE_CUBE_MAP),j.__version=z.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ee(T,x,I,U,z,j){let se=r.convert(I.format,I.colorSpace),q=r.convert(I.type),ie=_(I.internalFormat,se,q,I.normalized,I.colorSpace),Ee=n.get(x),Ie=n.get(I);if(Ie.__renderTarget=x,!Ee.__hasExternalTextures){let Pe=Math.max(1,x.width>>j),Re=Math.max(1,x.height>>j);z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?t.texImage3D(z,j,ie,Pe,Re,x.depth,0,se,q,null):t.texImage2D(z,j,ie,Pe,Re,0,se,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ae(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,z,Ie.__webglTexture,0,Te(x)):(z===i.TEXTURE_2D||z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,z,Ie.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(T,x,I){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let U=x.depthTexture,z=U&&U.isDepthTexture?U.type:null,j=M(x.stencilBuffer,z),se=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(x),j,x.width,x.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(x),j,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,j,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,T)}else{let U=x.textures;for(let z=0;z<U.length;z++){let j=U[z],se=r.convert(j.format,j.colorSpace),q=r.convert(j.type),ie=_(j.internalFormat,se,q,j.normalized,j.colorSpace);Ae(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(x),ie,x.width,x.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(x),ie,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ie,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(T,x,I){let U=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let z=n.get(x.depthTexture);if(z.__renderTarget=x,(!z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),U){if(z.__webglInit===void 0&&(z.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),z.__webglTexture===void 0){z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),De(i.TEXTURE_CUBE_MAP,x.depthTexture);let Ee=r.convert(x.depthTexture.format),Ie=r.convert(x.depthTexture.type),Pe;x.depthTexture.format===Qn?Pe=i.DEPTH_COMPONENT24:x.depthTexture.format===Xi&&(Pe=i.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Pe,x.width,x.height,0,Ee,Ie,null)}}else K(x.depthTexture,0);let j=z.__webglTexture,se=Te(x),q=U?i.TEXTURE_CUBE_MAP_POSITIVE_X+I:i.TEXTURE_2D,ie=x.depthTexture.format===Xi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Qn)Ae(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,q,j,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,ie,q,j,0);else if(x.depthTexture.format===Xi)Ae(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,q,j,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,ie,q,j,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(T){let x=n.get(T),I=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let U=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),U){let z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,U.removeEventListener("dispose",z)};U.addEventListener("dispose",z),x.__depthDisposeCallback=z}x.__boundDepthTexture=U}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(I)for(let U=0;U<6;U++)ve(x.__webglFramebuffer[U],T,U);else{let U=T.texture.mipmaps;U&&U.length>0?ve(x.__webglFramebuffer[0],T,0):ve(x.__webglFramebuffer,T,0)}else if(I){x.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[U]),x.__webglDepthbuffer[U]===void 0)x.__webglDepthbuffer[U]=i.createRenderbuffer(),Se(x.__webglDepthbuffer[U],T,!1);else{let z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[U];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,j)}}else{let U=T.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Se(x.__webglDepthbuffer,T,!1);else{let z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(T,x,I){let U=n.get(T);x!==void 0&&ee(U.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&ce(T)}function fe(T){let x=T.texture,I=n.get(T),U=n.get(x);T.addEventListener("dispose",E);let z=T.textures,j=T.isWebGLCubeRenderTarget===!0,se=z.length>1;if(se||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=x.version,o.memory.textures++),j){I.__webglFramebuffer=[];for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[q]=[];for(let ie=0;ie<x.mipmaps.length;ie++)I.__webglFramebuffer[q][ie]=i.createFramebuffer()}else I.__webglFramebuffer[q]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let q=0;q<x.mipmaps.length;q++)I.__webglFramebuffer[q]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(se)for(let q=0,ie=z.length;q<ie;q++){let Ee=n.get(z[q]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Ae(T)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let q=0;q<z.length;q++){let ie=z[q];I.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[q]);let Ee=r.convert(ie.format,ie.colorSpace),Ie=r.convert(ie.type),Pe=_(ie.internalFormat,Ee,Ie,ie.normalized,ie.colorSpace,T.isXRRenderTarget===!0),Re=Te(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Pe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,I.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),De(i.TEXTURE_CUBE_MAP,x);for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0)for(let ie=0;ie<x.mipmaps.length;ie++)ee(I.__webglFramebuffer[q][ie],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie);else ee(I.__webglFramebuffer[q],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(x)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let q=0,ie=z.length;q<ie;q++){let Ee=z[q],Ie=n.get(Ee),Pe=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Pe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Ie.__webglTexture),De(Pe,Ee),ee(I.__webglFramebuffer,T,Ee,i.COLOR_ATTACHMENT0+q,Pe,0),p(Ee)&&y(Pe)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(q=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,U.__webglTexture),De(q,x),x.mipmaps&&x.mipmaps.length>0)for(let ie=0;ie<x.mipmaps.length;ie++)ee(I.__webglFramebuffer[ie],T,x,i.COLOR_ATTACHMENT0,q,ie);else ee(I.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,q,0);p(x)&&y(q),t.unbindTexture()}T.depthBuffer&&ce(T)}function xe(T){let x=T.textures;for(let I=0,U=x.length;I<U;I++){let z=x[I];if(p(z)){let j=v(T),se=n.get(z).__webglTexture;t.bindTexture(j,se),y(j),t.unbindTexture()}}}let me=[],pe=[];function ye(T){if(T.samples>0){if(Ae(T)===!1){let x=T.textures,I=T.width,U=T.height,z=i.COLOR_BUFFER_BIT,j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(T),q=x.length>1;if(q)for(let Ee=0;Ee<x.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let ie=T.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(z|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]);let Ie=n.get(x[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ie,0)}i.blitFramebuffer(0,0,I,U,0,0,I,U,z,i.NEAREST),l===!0&&(me.length=0,pe.length=0,me.push(i.COLOR_ATTACHMENT0+Ee),T.depthBuffer&&T.resolveDepthBuffer===!1&&(me.push(j),pe.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let Ee=0;Ee<x.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]);let Ie=n.get(x[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Te(T){return Math.min(s.maxSamples,T.samples)}function Ae(T){let x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function C(T){let x=o.render.frame;d.get(T)!==x&&(d.set(T,x),T.update())}function F(T,x){let I=T.colorSpace,U=T.format,z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==Tr&&I!==Mi&&(lt.getTransfer(I)===mt?(U!==Dn||z!==dn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",I)),x}function Y(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.getTextureUnits=O,this.setTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=Q,this.setTexture3D=he,this.setTextureCube=Z,this.rebindTextures=de,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Vx(i,e){function t(n,s=Mi){let r,o=lt.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gc)return i.BYTE;if(n===Wc)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===za)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===ai)return i.HALF_FLOAT;if(n===Yc)return i.ALPHA;if(n===Zc)return i.RGB;if(n===Dn)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===Ga)return i.RED;if(n===Wa)return i.RED_INTEGER;if(n===qi)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===qa)return i.RGBA_INTEGER;if(n===no||n===io||n===so||n===ro)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===Za||n===$a||n===Ja)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ka||n===ja||n===Qa||n===el||n===tl||n===oo||n===nl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ka||n===ja)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===el)return r.COMPRESSED_R11_EAC;if(n===tl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===oo)return r.COMPRESSED_RG11_EAC;if(n===nl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===il)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ol)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===al)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ll)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ul)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ml)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_l||n===xl||n===yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_l)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vl||n===bl||n===ao||n===El)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===El)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ur(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new cn({vertexShader:Gx,fragmentShader:Wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gh=class extends Vn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,u=null,m=null,b=typeof XRWebGLBinding<"u",g=new mh,p={},y=t.getContextAttributes(),v=null,_=null,M=[],S=[],w=new J,E=null,A=new Nt;A.viewport=new Pt;let R=new Nt;R.viewport=new Pt;let N=[A,R],D=new Fa,B=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let le=M[$];return le===void 0&&(le=new Xs,M[$]=le),le.getTargetRaySpace()},this.getControllerGrip=function($){let le=M[$];return le===void 0&&(le=new Xs,M[$]=le),le.getGripSpace()},this.getHand=function($){let le=M[$];return le===void 0&&(le=new Xs,M[$]=le),le.getHandSpace()};function H($){let le=S.indexOf($.inputSource);if(le===-1)return;let oe=M[le];oe!==void 0&&(oe.update($.inputSource,$.frame,c||o),oe.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",V);for(let $=0;$<M.length;$++){let le=S[$];le!==null&&(S[$]=null,M[$].disconnect(le))}B=null,O=null,g.reset();for(let $ in p)delete p[$];e.setRenderTarget(v),u=null,h=null,f=null,s=null,_=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",G),s.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(w),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,_e=null,Me=null;y.depth&&(Me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=y.stencil?Xi:Qn,_e=y.stencil?sr:qn);let ee={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(ee),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new _n(h.textureWidth,h.textureHeight,{format:Dn,type:dn,depthTexture:new bi(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),_=new _n(u.framebufferWidth,u.framebufferHeight,{format:Dn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V($){for(let le=0;le<$.removed.length;le++){let oe=$.removed[le],_e=S.indexOf(oe);_e>=0&&(S[_e]=null,M[_e].disconnect(oe))}for(let le=0;le<$.added.length;le++){let oe=$.added[le],_e=S.indexOf(oe);if(_e===-1){for(let ee=0;ee<M.length;ee++)if(ee>=S.length){S.push(oe),_e=ee;break}else if(S[ee]===null){S[ee]=oe,_e=ee;break}if(_e===-1)break}let Me=M[_e];Me&&Me.connect(oe)}}let K=new P,Q=new P;function he($,le,oe){K.setFromMatrixPosition(le.matrixWorld),Q.setFromMatrixPosition(oe.matrixWorld);let _e=K.distanceTo(Q),Me=le.projectionMatrix.elements,ee=oe.projectionMatrix.elements,Se=Me[14]/(Me[10]-1),ve=Me[14]/(Me[10]+1),ce=(Me[9]+1)/Me[5],de=(Me[9]-1)/Me[5],fe=(Me[8]-1)/Me[0],xe=(ee[8]+1)/ee[0],me=Se*fe,pe=Se*xe,ye=_e/(-fe+xe),Te=ye*-fe;if(le.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Te),$.translateZ(ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Me[10]===-1)$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let Ae=Se+ye,C=ve+ye,F=me-Te,Y=pe+(_e-Te),T=ce*ve/C*Ae,x=de*ve/C*Ae;$.projectionMatrix.makePerspective(F,Y,T,x,Ae,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Z($,le){le===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(le.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let le=$.near,oe=$.far;g.texture!==null&&(g.depthNear>0&&(le=g.depthNear),g.depthFar>0&&(oe=g.depthFar)),D.near=R.near=A.near=le,D.far=R.far=A.far=oe,(B!==D.near||O!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),B=D.near,O=D.far),D.layers.mask=$.layers.mask|6,A.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;let _e=$.parent,Me=D.cameras;Z(D,_e);for(let ee=0;ee<Me.length;ee++)Z(Me[ee],_e);Me.length===2?he(D,A,R):D.projectionMatrix.copy(A.projectionMatrix),ge($,D,_e)};function ge($,le,oe){oe===null?$.matrix.copy(le.matrixWorld):($.matrix.copy(oe.matrixWorld),$.matrix.invert(),$.matrix.multiply(le.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=os*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&u===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function($){return p[$]};let we=null;function Ve($,le){if(d=le.getViewerPose(c||o),m=le,d!==null){let oe=d.views;u!==null&&(e.setRenderTargetFramebuffer(_,u.framebuffer),e.setRenderTarget(_));let _e=!1;oe.length!==D.cameras.length&&(D.cameras.length=0,_e=!0);for(let ve=0;ve<oe.length;ve++){let ce=oe[ve],de=null;if(u!==null)de=u.getViewport(ce);else{let xe=f.getViewSubImage(h,ce);de=xe.viewport,ve===0&&(e.setRenderTargetTextures(_,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(_))}let fe=N[ve];fe===void 0&&(fe=new Nt,fe.layers.enable(ve),fe.viewport=new Pt,N[ve]=fe),fe.matrix.fromArray(ce.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ce.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(de.x,de.y,de.width,de.height),ve===0&&(D.matrix.copy(fe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),_e===!0&&D.cameras.push(fe)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){f=n.getBinding();let ve=f.getDepthInformation(oe[0]);ve&&ve.isValid&&ve.texture&&g.init(ve,s.renderState)}if(Me&&Me.includes("camera-access")&&b){e.state.unbindTexture(),f=n.getBinding();for(let ve=0;ve<oe.length;ve++){let ce=oe[ve].camera;if(ce){let de=p[ce];de||(de=new Ur,p[ce]=de);let fe=f.getCameraImage(ce);de.sourceTexture=fe}}}}for(let oe=0;oe<M.length;oe++){let _e=S[oe],Me=M[oe];_e!==null&&Me!==void 0&&Me.update(_e,le,c||o)}we&&we($,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),m=null}let De=new Fd;De.setAnimationLoop(Ve),this.setAnimationLoop=function($){we=$},this.dispose=function(){}}},Xx=new ht,Vd=new tt;Vd.set(-1,0,0,0,1,0,0,0,1);function qx(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,jc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,v,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),d(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&u(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===hn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===hn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p),v=y.envMap,_=y.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(_)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Vd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yx(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let S=M.program;n.uniformBlockBinding(_,S)}function c(_,M){let S=s[_.id];S===void 0&&(g(_),S=d(_),s[_.id]=S,_.addEventListener("dispose",y));let w=M.program;n.updateUBOMapping(_,w);let E=e.render.frame;r[_.id]!==E&&(h(_),r[_.id]=E)}function d(_){let M=f();_.__bindingPointIndex=M;let S=i.createBuffer(),w=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let M=s[_.id],S=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,A=S.length;E<A;E++){let R=S[E];if(Array.isArray(R))for(let N=0,D=R.length;N<D;N++)u(R[N],E,N,w);else u(R,E,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(_,M,S,w){if(b(_,M,S,w)===!0){let E=_.__offset,A=_.value;if(Array.isArray(A)){let R=0;for(let N=0;N<A.length;N++){let D=A[N],B=p(D);m(D,_.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,_.__data)}}function m(_,M,S){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,S)}function b(_,M,S,w){let E=_.value,A=M+"_"+S;if(w[A]===void 0)return typeof E=="number"||typeof E=="boolean"?w[A]=E:ArrayBuffer.isView(E)?w[A]=E.slice():w[A]=E.clone(),!0;{let R=w[A];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return w[A]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(R.equals(E)===!1)return R.copy(E),!0}}return!1}function g(_){let M=_.uniforms,S=0,w=16;for(let A=0,R=M.length;A<R;A++){let N=Array.isArray(M[A])?M[A]:[M[A]];for(let D=0,B=N.length;D<B;D++){let O=N[D],H=Array.isArray(O.value)?O.value:[O.value];for(let G=0,V=H.length;G<V;G++){let K=H[G],Q=p(K),he=S%w,Z=he%Q.boundary,ge=he+Z;S+=Z,ge!==0&&w-ge<Q.storage&&(S+=w-ge),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=Q.storage}}}let E=S%w;return E>0&&(S+=w-E),_.__size=S,_.__cache={},this}function p(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",_),M}function y(_){let M=_.target;M.removeEventListener("dispose",y);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function v(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:v}}var Zx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;function $x(){return li===null&&(li=new Lr(Zx,16,16,qi,ai),li.name="DFG_LUT",li.minFilter=Jt,li.magFilter=Jt,li.wrapS=sn,li.wrapT=sn,li.generateMipmaps=!1,li.needsUpdate=!0),li}var Zi=class{constructor(e={}){let{canvas:t=nd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:u=dn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let b=u,g=new Set([qa,Xa,Wa]),p=new Set([dn,qn,ir,sr,ka,Va]),y=new Uint32Array(4),v=new Int32Array(4),_=new P,M=null,S=null,w=[],E=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,D=null,B=null,O=null,H=null;this._outputColorSpace=$e;let G=0,V=0,K=null,Q=-1,he=null,Z=new Pt,ge=new Pt,we=null,Ve=new je(0),De=0,$=t.width,le=t.height,oe=1,_e=null,Me=null,ee=new Pt(0,0,$,le),Se=new Pt(0,0,$,le),ve=!1,ce=new $s,de=!1,fe=!1,xe=new ht,me=new P,pe=new Pt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Ae(){return K===null?oe:1}let C=n;function F(L,X){return t.getContext(L,X)}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",bn,!1),C===null){let X="webgl2";if(C=F(X,L),C===null)throw F(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(L){throw et("WebGLRenderer: "+L.message),L}let Y,T,x,I,U,z,j,se,q,ie,Ee,Ie,Pe,Re,Ge,Ze,Ke,W,Ce,k,ae,be,ue;function Be(){Y=new n_(C),Y.init(),ae=new Vx(C,Y),T=new Zg(C,Y,e,ae),x=new zx(C,Y),T.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),B=C.createFramebuffer(),O=C.createFramebuffer(),H=C.createFramebuffer(),I=new r_(C),U=new wx,z=new kx(C,Y,x,U,T,ae,I),j=new t_(R),se=new cm(C),be=new qg(C,se),q=new i_(C,se,I,be),ie=new a_(C,q,se,be,I),W=new o_(C,T,z),Ge=new $g(U),Ee=new Tx(R,j,Y,T,be,Ge),Ie=new qx(R,U),Pe=new Rx,Re=new Nx(Y),Ke=new Xg(R,j,x,ie,m,l),Ze=new Hx(R,ie,T),ue=new Yx(C,I,T,x),Ce=new Yg(C,Y,I),k=new s_(C,Y,I),I.programs=Ee.programs,R.capabilities=T,R.extensions=Y,R.properties=U,R.renderLists=Pe,R.shadowMap=Ze,R.state=x,R.info=I}Be(),b!==dn&&(A=new c_(b,t.width,t.height,a,s,r));let He=new gh(R,C);this.xr=He,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let L=Y.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Y.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(L){L!==void 0&&(oe=L,this.setSize($,le,!1))},this.getSize=function(L){return L.set($,le)},this.setSize=function(L,X,re=!0){if(He.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}$=L,le=X,t.width=Math.floor(L*oe),t.height=Math.floor(X*oe),re===!0&&(t.style.width=L+"px",t.style.height=X+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,L,X)},this.getDrawingBufferSize=function(L){return L.set($*oe,le*oe).floor()},this.setDrawingBufferSize=function(L,X,re){$=L,le=X,oe=re,t.width=Math.floor(L*re),t.height=Math.floor(X*re),this.setViewport(0,0,L,X)},this.setEffects=function(L){if(b===dn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let X=0;X<L.length;X++)if(L[X].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(Z)},this.getViewport=function(L){return L.copy(ee)},this.setViewport=function(L,X,re,te){L.isVector4?ee.set(L.x,L.y,L.z,L.w):ee.set(L,X,re,te),x.viewport(Z.copy(ee).multiplyScalar(oe).round())},this.getScissor=function(L){return L.copy(Se)},this.setScissor=function(L,X,re,te){L.isVector4?Se.set(L.x,L.y,L.z,L.w):Se.set(L,X,re,te),x.scissor(ge.copy(Se).multiplyScalar(oe).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(L){x.setScissorTest(ve=L)},this.setOpaqueSort=function(L){_e=L},this.setTransparentSort=function(L){Me=L},this.getClearColor=function(L){return L.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(L=!0,X=!0,re=!0){let te=0;if(L){let ne=!1;if(K!==null){let Oe=K.texture.format;ne=g.has(Oe)}if(ne){let Oe=K.texture.type,ke=p.has(Oe),Ne=Ke.getClearColor(),We=Ke.getClearAlpha(),qe=Ne.r,it=Ne.g,ot=Ne.b;ke?(y[0]=qe,y[1]=it,y[2]=ot,y[3]=We,C.clearBufferuiv(C.COLOR,0,y)):(v[0]=qe,v[1]=it,v[2]=ot,v[3]=We,C.clearBufferiv(C.COLOR,0,v))}else te|=C.COLOR_BUFFER_BIT}X&&(te|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(te|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&C.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),D=L},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",bn,!1),Ke.dispose(),Pe.dispose(),Re.dispose(),U.dispose(),j.dispose(),ie.dispose(),be.dispose(),ue.dispose(),Ee.dispose(),He.dispose(),He.removeEventListener("sessionstart",Ph),He.removeEventListener("sessionend",Ih),Ki.stop()};function yt(L){L.preventDefault(),Ar("WebGLRenderer: Context Lost."),N=!0}function ft(){Ar("WebGLRenderer: Context Restored."),N=!1;let L=I.autoReset,X=Ze.enabled,re=Ze.autoUpdate,te=Ze.needsUpdate,ne=Ze.type;Be(),I.autoReset=L,Ze.enabled=X,Ze.autoUpdate=re,Ze.needsUpdate=te,Ze.type=ne}function bn(L){et("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function En(L){let X=L.target;X.removeEventListener("dispose",En),Sf(X)}function Sf(L){Tf(L),U.remove(L)}function Tf(L){let X=U.get(L).programs;X!==void 0&&(X.forEach(function(re){Ee.releaseProgram(re)}),L.isShaderMaterial&&Ee.releaseShaderCache(L))}this.renderBufferDirect=function(L,X,re,te,ne,Oe){X===null&&(X=ye);let ke=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Ne=Rf(L,X,re,te,ne);x.setMaterial(te,ke);let We=re.index,qe=1;if(te.wireframe===!0){if(We=q.getWireframeAttribute(re),We===void 0)return;qe=2}let it=re.drawRange,ot=re.attributes.position,Ye=it.start*qe,vt=(it.start+it.count)*qe;Oe!==null&&(Ye=Math.max(Ye,Oe.start*qe),vt=Math.min(vt,(Oe.start+Oe.count)*qe)),We!==null?(Ye=Math.max(Ye,0),vt=Math.min(vt,We.count)):ot!=null&&(Ye=Math.max(Ye,0),vt=Math.min(vt,ot.count));let Ft=vt-Ye;if(Ft<0||Ft===1/0)return;be.setup(ne,te,Ne,re,We);let Dt,Mt=Ce;if(We!==null&&(Dt=se.get(We),Mt=k,Mt.setIndex(Dt)),ne.isMesh)te.wireframe===!0?(x.setLineWidth(te.wireframeLinewidth*Ae()),Mt.setMode(C.LINES)):Mt.setMode(C.TRIANGLES);else if(ne.isLine){let en=te.linewidth;en===void 0&&(en=1),x.setLineWidth(en*Ae()),ne.isLineSegments?Mt.setMode(C.LINES):ne.isLineLoop?Mt.setMode(C.LINE_LOOP):Mt.setMode(C.LINE_STRIP)}else ne.isPoints?Mt.setMode(C.POINTS):ne.isSprite&&Mt.setMode(C.TRIANGLES);if(ne.isBatchedMesh)if(Y.get("WEBGL_multi_draw"))Mt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let en=ne._multiDrawStarts,ze=ne._multiDrawCounts,pn=ne._multiDrawCount,dt=We?se.get(We).bytesPerElement:1,Mn=U.get(te).currentProgram.getUniforms();for(let Zn=0;Zn<pn;Zn++)Mn.setValue(C,"_gl_DrawID",Zn),Mt.render(en[Zn]/dt,ze[Zn])}else if(ne.isInstancedMesh)Mt.renderInstances(Ye,Ft,ne.count);else if(re.isInstancedBufferGeometry){let en=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ze=Math.min(re.instanceCount,en);Mt.renderInstances(Ye,Ft,ze)}else Mt.render(Ye,Ft)};function Ch(L,X,re){L.transparent===!0&&L.side===xt&&L.forceSinglePass===!1?(L.side=hn,L.needsUpdate=!0,go(L,X,re),L.side=xi,L.needsUpdate=!0,go(L,X,re),L.side=xt):go(L,X,re)}this.compile=function(L,X,re=null){re===null&&(re=L),S=Re.get(re),S.init(X),E.push(S),re.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(S.pushLight(ne),ne.castShadow&&S.pushShadow(ne))}),L!==re&&L.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(S.pushLight(ne),ne.castShadow&&S.pushShadow(ne))}),S.setupLights();let te=new Set;return L.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let Oe=ne.material;if(Oe)if(Array.isArray(Oe))for(let ke=0;ke<Oe.length;ke++){let Ne=Oe[ke];Ch(Ne,re,ne),te.add(Ne)}else Ch(Oe,re,ne),te.add(Oe)}),S=E.pop(),te},this.compileAsync=function(L,X,re=null){let te=this.compile(L,X,re);return new Promise(ne=>{function Oe(){if(te.forEach(function(ke){U.get(ke).currentProgram.isReady()&&te.delete(ke)}),te.size===0){ne(L);return}setTimeout(Oe,10)}Y.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let zl=null;function wf(L){zl&&zl(L)}function Ph(){Ki.stop()}function Ih(){Ki.start()}let Ki=new Fd;Ki.setAnimationLoop(wf),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(L){zl=L,He.setAnimationLoop(L),L===null?Ki.stop():Ki.start()},He.addEventListener("sessionstart",Ph),He.addEventListener("sessionend",Ih),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(L,X);let re=He.enabled===!0&&He.isPresenting===!0,te=A!==null&&(K===null||re)&&A.begin(R,K);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(X),X=He.getCamera()),L.isScene===!0&&L.onBeforeRender(R,L,X,K),S=Re.get(L,E.length),S.init(X),S.state.textureUnits=z.getTextureUnits(),E.push(S),xe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ce.setFromProjectionMatrix(xe,kn,X.reversedDepth),fe=this.localClippingEnabled,de=Ge.init(this.clippingPlanes,fe),M=Pe.get(L,w.length),M.init(),w.push(M),He.enabled===!0&&He.isPresenting===!0){let ke=R.xr.getDepthSensingMesh();ke!==null&&kl(ke,X,-1/0,R.sortObjects)}kl(L,X,0,R.sortObjects),M.finish(),R.sortObjects===!0&&M.sort(_e,Me,X.reversedDepth),Te=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,Te&&Ke.addToRenderList(M,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),de===!0&&Ge.beginShadows();let ne=S.state.shadowsArray;if(Ze.render(ne,L,X),de===!0&&Ge.endShadows(),(te&&A.hasRenderPass())===!1){let ke=M.opaque,Ne=M.transmissive;if(S.setupLights(),X.isArrayCamera){let We=X.cameras;if(Ne.length>0)for(let qe=0,it=We.length;qe<it;qe++){let ot=We[qe];Dh(ke,Ne,L,ot)}Te&&Ke.render(L);for(let qe=0,it=We.length;qe<it;qe++){let ot=We[qe];Lh(M,L,ot,ot.viewport)}}else Ne.length>0&&Dh(ke,Ne,L,X),Te&&Ke.render(L),Lh(M,L,X)}K!==null&&V===0&&(z.updateMultisampleRenderTarget(K),z.updateRenderTargetMipmap(K)),te&&A.end(R),L.isScene===!0&&L.onAfterRender(R,L,X),be.resetDefaultState(),Q=-1,he=null,E.pop(),E.length>0?(S=E[E.length-1],z.setTextureUnits(S.state.textureUnits),de===!0&&Ge.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,D!==null&&D.renderEnd()};function kl(L,X,re,te){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)re=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLightProbeGrid)S.pushLightProbeGrid(L);else if(L.isLight)S.pushLight(L),L.castShadow&&S.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ce.intersectsSprite(L)){te&&pe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(xe);let ke=ie.update(L),Ne=L.material;Ne.visible&&M.push(L,ke,Ne,re,pe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||ce.intersectsObject(L))){let ke=ie.update(L),Ne=L.material;if(te&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),pe.copy(L.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),pe.copy(ke.boundingSphere.center)),pe.applyMatrix4(L.matrixWorld).applyMatrix4(xe)),Array.isArray(Ne)){let We=ke.groups;for(let qe=0,it=We.length;qe<it;qe++){let ot=We[qe],Ye=Ne[ot.materialIndex];Ye&&Ye.visible&&M.push(L,ke,Ye,re,pe.z,ot)}}else Ne.visible&&M.push(L,ke,Ne,re,pe.z,null)}}let Oe=L.children;for(let ke=0,Ne=Oe.length;ke<Ne;ke++)kl(Oe[ke],X,re,te)}function Lh(L,X,re,te){let{opaque:ne,transmissive:Oe,transparent:ke}=L;S.setupLightsView(re),de===!0&&Ge.setGlobalState(R.clippingPlanes,re),te&&x.viewport(Z.copy(te)),ne.length>0&&mo(ne,X,re),Oe.length>0&&mo(Oe,X,re),ke.length>0&&mo(ke,X,re),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Dh(L,X,re,te){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[te.id]===void 0){let Ye=Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[te.id]=new _n(1,1,{generateMipmaps:!0,type:Ye?ai:dn,minFilter:Wi,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Oe=S.state.transmissionRenderTarget[te.id],ke=te.viewport||Z;Oe.setSize(ke.z*R.transmissionResolutionScale,ke.w*R.transmissionResolutionScale);let Ne=R.getRenderTarget(),We=R.getActiveCubeFace(),qe=R.getActiveMipmapLevel();R.setRenderTarget(Oe),R.getClearColor(Ve),De=R.getClearAlpha(),De<1&&R.setClearColor(16777215,.5),R.clear(),Te&&Ke.render(re);let it=R.toneMapping;R.toneMapping=Xn;let ot=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),S.setupLightsView(te),de===!0&&Ge.setGlobalState(R.clippingPlanes,te),mo(L,re,te),z.updateMultisampleRenderTarget(Oe),z.updateRenderTargetMipmap(Oe),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let vt=0,Ft=X.length;vt<Ft;vt++){let Dt=X[vt],{object:Mt,geometry:en,material:ze,group:pn}=Dt;if(ze.side===xt&&Mt.layers.test(te.layers)){let dt=ze.side;ze.side=hn,ze.needsUpdate=!0,Nh(Mt,re,te,en,ze,pn),ze.side=dt,ze.needsUpdate=!0,Ye=!0}}Ye===!0&&(z.updateMultisampleRenderTarget(Oe),z.updateRenderTargetMipmap(Oe))}R.setRenderTarget(Ne,We,qe),R.setClearColor(Ve,De),ot!==void 0&&(te.viewport=ot),R.toneMapping=it}function mo(L,X,re){let te=X.isScene===!0?X.overrideMaterial:null;for(let ne=0,Oe=L.length;ne<Oe;ne++){let ke=L[ne],{object:Ne,geometry:We,group:qe}=ke,it=ke.material;it.allowOverride===!0&&te!==null&&(it=te),Ne.layers.test(re.layers)&&Nh(Ne,X,re,We,it,qe)}}function Nh(L,X,re,te,ne,Oe){L.onBeforeRender(R,X,re,te,ne,Oe),L.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ne.onBeforeRender(R,X,re,te,L,Oe),ne.transparent===!0&&ne.side===xt&&ne.forceSinglePass===!1?(ne.side=hn,ne.needsUpdate=!0,R.renderBufferDirect(re,X,te,ne,L,Oe),ne.side=xi,ne.needsUpdate=!0,R.renderBufferDirect(re,X,te,ne,L,Oe),ne.side=xt):R.renderBufferDirect(re,X,te,ne,L,Oe),L.onAfterRender(R,X,re,te,ne,Oe)}function go(L,X,re){X.isScene!==!0&&(X=ye);let te=U.get(L),ne=S.state.lights,Oe=S.state.shadowsArray,ke=ne.state.version,Ne=Ee.getParameters(L,ne.state,Oe,X,re,S.state.lightProbeGridArray),We=Ee.getProgramCacheKey(Ne),qe=te.programs;te.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?X.environment:null,te.fog=X.fog;let it=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;te.envMap=j.get(L.envMap||te.environment,it),te.envMapRotation=te.environment!==null&&L.envMap===null?X.environmentRotation:L.envMapRotation,qe===void 0&&(L.addEventListener("dispose",En),qe=new Map,te.programs=qe);let ot=qe.get(We);if(ot!==void 0){if(te.currentProgram===ot&&te.lightsStateVersion===ke)return Fh(L,Ne),ot}else Ne.uniforms=Ee.getUniforms(L),D!==null&&L.isNodeMaterial&&D.build(L,re,Ne),L.onBeforeCompile(Ne,R),ot=Ee.acquireProgram(Ne,We),qe.set(We,ot),te.uniforms=Ne.uniforms;let Ye=te.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ye.clippingPlanes=Ge.uniform),Fh(L,Ne),te.needsLights=Pf(L),te.lightsStateVersion=ke,te.needsLights&&(Ye.ambientLightColor.value=ne.state.ambient,Ye.lightProbe.value=ne.state.probe,Ye.directionalLights.value=ne.state.directional,Ye.directionalLightShadows.value=ne.state.directionalShadow,Ye.spotLights.value=ne.state.spot,Ye.spotLightShadows.value=ne.state.spotShadow,Ye.rectAreaLights.value=ne.state.rectArea,Ye.ltc_1.value=ne.state.rectAreaLTC1,Ye.ltc_2.value=ne.state.rectAreaLTC2,Ye.pointLights.value=ne.state.point,Ye.pointLightShadows.value=ne.state.pointShadow,Ye.hemisphereLights.value=ne.state.hemi,Ye.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ne.state.spotLightMatrix,Ye.spotLightMap.value=ne.state.spotLightMap,Ye.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=S.state.lightProbeGridArray.length>0,te.currentProgram=ot,te.uniformsList=null,ot}function Uh(L){if(L.uniformsList===null){let X=L.currentProgram.getUniforms();L.uniformsList=or.seqWithValue(X.seq,L.uniforms)}return L.uniformsList}function Fh(L,X){let re=U.get(L);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function Af(L,X){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;_.setFromMatrixPosition(X.matrixWorld);for(let re=0,te=L.length;re<te;re++){let ne=L[re];if(ne.texture!==null&&ne.boundingBox.containsPoint(_))return ne}return null}function Rf(L,X,re,te,ne){X.isScene!==!0&&(X=ye),z.resetTextureUnits();let Oe=X.fog,ke=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?X.environment:null,Ne=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:lt.workingColorSpace,We=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,qe=j.get(te.envMap||ke,We),it=te.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ot=!!re.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ye=!!re.morphAttributes.position,vt=!!re.morphAttributes.normal,Ft=!!re.morphAttributes.color,Dt=Xn;te.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Dt=R.toneMapping);let Mt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,en=Mt!==void 0?Mt.length:0,ze=U.get(te),pn=S.state.lights;if(de===!0&&(fe===!0||L!==he)){let wt=L===he&&te.id===Q;Ge.setState(te,L,wt)}let dt=!1;te.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==pn.state.version||ze.outputColorSpace!==Ne||ne.isBatchedMesh&&ze.batching===!1||!ne.isBatchedMesh&&ze.batching===!0||ne.isBatchedMesh&&ze.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&ze.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&ze.instancing===!1||!ne.isInstancedMesh&&ze.instancing===!0||ne.isSkinnedMesh&&ze.skinning===!1||!ne.isSkinnedMesh&&ze.skinning===!0||ne.isInstancedMesh&&ze.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&ze.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&ze.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&ze.instancingMorph===!1&&ne.morphTexture!==null||ze.envMap!==qe||te.fog===!0&&ze.fog!==Oe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ge.numPlanes||ze.numIntersection!==Ge.numIntersection)||ze.vertexAlphas!==it||ze.vertexTangents!==ot||ze.morphTargets!==Ye||ze.morphNormals!==vt||ze.morphColors!==Ft||ze.toneMapping!==Dt||ze.morphTargetsCount!==en||!!ze.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,ze.__version=te.version);let Mn=ze.currentProgram;dt===!0&&(Mn=go(te,X,ne),D&&te.isNodeMaterial&&D.onUpdateProgram(te,Mn,ze));let Zn=!1,Ti=!1,_s=!1,St=Mn.getUniforms(),Ot=ze.uniforms;if(x.useProgram(Mn.program)&&(Zn=!0,Ti=!0,_s=!0),te.id!==Q&&(Q=te.id,Ti=!0),ze.needsLights){let wt=Af(S.state.lightProbeGridArray,ne);ze.lightProbeGrid!==wt&&(ze.lightProbeGrid=wt,Ti=!0)}if(Zn||he!==L){x.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),St.setValue(C,"projectionMatrix",L.projectionMatrix),St.setValue(C,"viewMatrix",L.matrixWorldInverse);let Ai=St.map.cameraPosition;Ai!==void 0&&Ai.setValue(C,me.setFromMatrixPosition(L.matrixWorld)),T.logarithmicDepthBuffer&&St.setValue(C,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&St.setValue(C,"isOrthographic",L.isOrthographicCamera===!0),he!==L&&(he=L,Ti=!0,_s=!0)}if(ze.needsLights&&(pn.state.directionalShadowMap.length>0&&St.setValue(C,"directionalShadowMap",pn.state.directionalShadowMap,z),pn.state.spotShadowMap.length>0&&St.setValue(C,"spotShadowMap",pn.state.spotShadowMap,z),pn.state.pointShadowMap.length>0&&St.setValue(C,"pointShadowMap",pn.state.pointShadowMap,z)),ne.isSkinnedMesh){St.setOptional(C,ne,"bindMatrix"),St.setOptional(C,ne,"bindMatrixInverse");let wt=ne.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),St.setValue(C,"boneTexture",wt.boneTexture,z))}ne.isBatchedMesh&&(St.setOptional(C,ne,"batchingTexture"),St.setValue(C,"batchingTexture",ne._matricesTexture,z),St.setOptional(C,ne,"batchingIdTexture"),St.setValue(C,"batchingIdTexture",ne._indirectTexture,z),St.setOptional(C,ne,"batchingColorTexture"),ne._colorsTexture!==null&&St.setValue(C,"batchingColorTexture",ne._colorsTexture,z));let wi=re.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&W.update(ne,re,Mn),(Ti||ze.receiveShadow!==ne.receiveShadow)&&(ze.receiveShadow=ne.receiveShadow,St.setValue(C,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&X.environment!==null&&(Ot.envMapIntensity.value=X.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=$x()),Ti){if(St.setValue(C,"toneMappingExposure",R.toneMappingExposure),ze.needsLights&&Cf(Ot,_s),Oe&&te.fog===!0&&Ie.refreshFogUniforms(Ot,Oe),Ie.refreshMaterialUniforms(Ot,te,oe,le,S.state.transmissionRenderTarget[L.id]),ze.needsLights&&ze.lightProbeGrid){let wt=ze.lightProbeGrid;Ot.probesSH.value=wt.texture,Ot.probesMin.value.copy(wt.boundingBox.min),Ot.probesMax.value.copy(wt.boundingBox.max),Ot.probesResolution.value.copy(wt.resolution)}or.upload(C,Uh(ze),Ot,z)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(or.upload(C,Uh(ze),Ot,z),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&St.setValue(C,"center",ne.center),St.setValue(C,"modelViewMatrix",ne.modelViewMatrix),St.setValue(C,"normalMatrix",ne.normalMatrix),St.setValue(C,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){let wt=te.uniformsGroups;for(let Ai=0,xs=wt.length;Ai<xs;Ai++){let Oh=wt[Ai];ue.update(Oh,Mn),ue.bind(Oh,Mn)}}return Mn}function Cf(L,X){L.ambientLightColor.needsUpdate=X,L.lightProbe.needsUpdate=X,L.directionalLights.needsUpdate=X,L.directionalLightShadows.needsUpdate=X,L.pointLights.needsUpdate=X,L.pointLightShadows.needsUpdate=X,L.spotLights.needsUpdate=X,L.spotLightShadows.needsUpdate=X,L.rectAreaLights.needsUpdate=X,L.hemisphereLights.needsUpdate=X}function Pf(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(L,X,re){let te=U.get(L);te.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),U.get(L.texture).__webglTexture=X,U.get(L.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:re,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,X){let re=U.get(L);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(L,X=0,re=0){K=L,G=X,V=re;let te=null,ne=!1,Oe=!1;if(L){let Ne=U.get(L);if(Ne.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(C.FRAMEBUFFER,Ne.__webglFramebuffer),Z.copy(L.viewport),ge.copy(L.scissor),we=L.scissorTest,x.viewport(Z),x.scissor(ge),x.setScissorTest(we),Q=-1;return}else if(Ne.__webglFramebuffer===void 0)z.setupRenderTarget(L);else if(Ne.__hasExternalTextures)z.rebindTextures(L,U.get(L.texture).__webglTexture,U.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let it=L.depthTexture;if(Ne.__boundDepthTexture!==it){if(it!==null&&U.has(it)&&(L.width!==it.image.width||L.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(L)}}let We=L.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Oe=!0);let qe=U.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(qe[X])?te=qe[X][re]:te=qe[X],ne=!0):L.samples>0&&z.useMultisampledRTT(L)===!1?te=U.get(L).__webglMultisampledFramebuffer:Array.isArray(qe)?te=qe[re]:te=qe,Z.copy(L.viewport),ge.copy(L.scissor),we=L.scissorTest}else Z.copy(ee).multiplyScalar(oe).floor(),ge.copy(Se).multiplyScalar(oe).floor(),we=ve;if(re!==0&&(te=B),x.bindFramebuffer(C.FRAMEBUFFER,te)&&x.drawBuffers(L,te),x.viewport(Z),x.scissor(ge),x.setScissorTest(we),ne){let Ne=U.get(L.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,re)}else if(Oe){let Ne=X;for(let We=0;We<L.textures.length;We++){let qe=U.get(L.textures[We]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+We,qe.__webglTexture,re,Ne)}}else if(L!==null&&re!==0){let Ne=U.get(L.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ne.__webglTexture,re)}Q=-1},this.readRenderTargetPixels=function(L,X,re,te,ne,Oe,ke,Ne=0){if(!(L&&L.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=U.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We){x.bindFramebuffer(C.FRAMEBUFFER,We);try{let qe=L.textures[Ne],it=qe.format,ot=qe.type;if(L.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ne),!T.textureFormatReadable(it)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(ot)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=L.width-te&&re>=0&&re<=L.height-ne&&C.readPixels(X,re,te,ne,ae.convert(it),ae.convert(ot),Oe)}finally{let qe=K!==null?U.get(K).__webglFramebuffer:null;x.bindFramebuffer(C.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(L,X,re,te,ne,Oe,ke,Ne=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=U.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We)if(X>=0&&X<=L.width-te&&re>=0&&re<=L.height-ne){x.bindFramebuffer(C.FRAMEBUFFER,We);let qe=L.textures[Ne],it=qe.format,ot=qe.type;if(L.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ne),!T.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ye),C.bufferData(C.PIXEL_PACK_BUFFER,Oe.byteLength,C.STREAM_READ),C.readPixels(X,re,te,ne,ae.convert(it),ae.convert(ot),0);let vt=K!==null?U.get(K).__webglFramebuffer:null;x.bindFramebuffer(C.FRAMEBUFFER,vt);let Ft=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await sd(C,Ft,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ye),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Oe),C.deleteBuffer(Ye),C.deleteSync(Ft),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,X=null,re=0){let te=Math.pow(2,-re),ne=Math.floor(L.image.width*te),Oe=Math.floor(L.image.height*te),ke=X!==null?X.x:0,Ne=X!==null?X.y:0;z.setTexture2D(L,0),C.copyTexSubImage2D(C.TEXTURE_2D,re,0,0,ke,Ne,ne,Oe),x.unbindTexture()},this.copyTextureToTexture=function(L,X,re=null,te=null,ne=0,Oe=0){let ke,Ne,We,qe,it,ot,Ye,vt,Ft,Dt=L.isCompressedTexture?L.mipmaps[Oe]:L.image;if(re!==null)ke=re.max.x-re.min.x,Ne=re.max.y-re.min.y,We=re.isBox3?re.max.z-re.min.z:1,qe=re.min.x,it=re.min.y,ot=re.isBox3?re.min.z:0;else{let Ot=Math.pow(2,-ne);ke=Math.floor(Dt.width*Ot),Ne=Math.floor(Dt.height*Ot),L.isDataArrayTexture?We=Dt.depth:L.isData3DTexture?We=Math.floor(Dt.depth*Ot):We=1,qe=0,it=0,ot=0}te!==null?(Ye=te.x,vt=te.y,Ft=te.z):(Ye=0,vt=0,Ft=0);let Mt=ae.convert(X.format),en=ae.convert(X.type),ze;X.isData3DTexture?(z.setTexture3D(X,0),ze=C.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(z.setTexture2DArray(X,0),ze=C.TEXTURE_2D_ARRAY):(z.setTexture2D(X,0),ze=C.TEXTURE_2D),x.activeTexture(C.TEXTURE0),x.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,X.flipY),x.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),x.pixelStorei(C.UNPACK_ALIGNMENT,X.unpackAlignment);let pn=x.getParameter(C.UNPACK_ROW_LENGTH),dt=x.getParameter(C.UNPACK_IMAGE_HEIGHT),Mn=x.getParameter(C.UNPACK_SKIP_PIXELS),Zn=x.getParameter(C.UNPACK_SKIP_ROWS),Ti=x.getParameter(C.UNPACK_SKIP_IMAGES);x.pixelStorei(C.UNPACK_ROW_LENGTH,Dt.width),x.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Dt.height),x.pixelStorei(C.UNPACK_SKIP_PIXELS,qe),x.pixelStorei(C.UNPACK_SKIP_ROWS,it),x.pixelStorei(C.UNPACK_SKIP_IMAGES,ot);let _s=L.isDataArrayTexture||L.isData3DTexture,St=X.isDataArrayTexture||X.isData3DTexture;if(L.isDepthTexture){let Ot=U.get(L),wi=U.get(X),wt=U.get(Ot.__renderTarget),Ai=U.get(wi.__renderTarget);x.bindFramebuffer(C.READ_FRAMEBUFFER,wt.__webglFramebuffer),x.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let xs=0;xs<We;xs++)_s&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,U.get(L).__webglTexture,ne,ot+xs),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,U.get(X).__webglTexture,Oe,Ft+xs)),C.blitFramebuffer(qe,it,ke,Ne,Ye,vt,ke,Ne,C.DEPTH_BUFFER_BIT,C.NEAREST);x.bindFramebuffer(C.READ_FRAMEBUFFER,null),x.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(ne!==0||L.isRenderTargetTexture||U.has(L)){let Ot=U.get(L),wi=U.get(X);x.bindFramebuffer(C.READ_FRAMEBUFFER,O),x.bindFramebuffer(C.DRAW_FRAMEBUFFER,H);for(let wt=0;wt<We;wt++)_s?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ot.__webglTexture,ne,ot+wt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ot.__webglTexture,ne),St?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,wi.__webglTexture,Oe,Ft+wt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,wi.__webglTexture,Oe),ne!==0?C.blitFramebuffer(qe,it,ke,Ne,Ye,vt,ke,Ne,C.COLOR_BUFFER_BIT,C.NEAREST):St?C.copyTexSubImage3D(ze,Oe,Ye,vt,Ft+wt,qe,it,ke,Ne):C.copyTexSubImage2D(ze,Oe,Ye,vt,qe,it,ke,Ne);x.bindFramebuffer(C.READ_FRAMEBUFFER,null),x.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else St?L.isDataTexture||L.isData3DTexture?C.texSubImage3D(ze,Oe,Ye,vt,Ft,ke,Ne,We,Mt,en,Dt.data):X.isCompressedArrayTexture?C.compressedTexSubImage3D(ze,Oe,Ye,vt,Ft,ke,Ne,We,Mt,Dt.data):C.texSubImage3D(ze,Oe,Ye,vt,Ft,ke,Ne,We,Mt,en,Dt):L.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Oe,Ye,vt,ke,Ne,Mt,en,Dt.data):L.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Oe,Ye,vt,Dt.width,Dt.height,Mt,Dt.data):C.texSubImage2D(C.TEXTURE_2D,Oe,Ye,vt,ke,Ne,Mt,en,Dt);x.pixelStorei(C.UNPACK_ROW_LENGTH,pn),x.pixelStorei(C.UNPACK_IMAGE_HEIGHT,dt),x.pixelStorei(C.UNPACK_SKIP_PIXELS,Mn),x.pixelStorei(C.UNPACK_SKIP_ROWS,Zn),x.pixelStorei(C.UNPACK_SKIP_IMAGES,Ti),Oe===0&&X.generateMipmaps&&C.generateMipmap(ze),x.unbindTexture()},this.initRenderTarget=function(L){U.get(L).__webglFramebuffer===void 0&&z.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?z.setTextureCube(L,0):L.isData3DTexture?z.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?z.setTexture2DArray(L,0):z.setTexture2D(L,0),x.unbindTexture()},this.resetState=function(){G=0,V=0,K=null,x.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var Gd={type:"change"},xh={type:"start"},Xd={type:"end"},Ll=new vi,Wd=new Tn,Jx=Math.cos(70*at.DEG2RAD),Wt=new P,fn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_h=1e-6,$i=class extends jr{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new ln,this._lastTargetPosition=new P,this._quat=new ln().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nr,this._sphericalDelta=new nr,this._scale=1,this._panOffset=new P,this._rotateStart=new J,this._rotateEnd=new J,this._rotateDelta=new J,this._panStart=new J,this._panEnd=new J,this._panDelta=new J,this._dollyStart=new J,this._dollyEnd=new J,this._dollyDelta=new J,this._dollyDirection=new P,this._mouse=new J,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jx.bind(this),this._onPointerDown=Kx.bind(this),this._onPointerUp=Qx.bind(this),this._onContextMenu=oy.bind(this),this._onMouseWheel=ny.bind(this),this._onKeyDown=iy.bind(this),this._onTouchStart=sy.bind(this),this._onTouchMove=ry.bind(this),this._onMouseDown=ey.bind(this),this._onMouseMove=ty.bind(this),this._interceptControlDown=ay.bind(this),this._interceptControlUp=ly.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gd),this.update(),this.state=Et.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Wt.copy(t).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=fn:n>Math.PI&&(n-=fn),s<-Math.PI?s+=fn:s>Math.PI&&(s-=fn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Wt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ll.origin.copy(this.object.position),Ll.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ll.direction))<Jx?this.object.lookAt(this.target):(Wd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ll.intersectPlane(Wd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_h||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_h||this._lastTargetPosition.distanceToSquared(this.target)>_h?(this.dispatchEvent(Gd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fn/60*this.autoRotateSpeed*e:fn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wt.setFromMatrixColumn(t,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,t){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(t,1):(Wt.setFromMatrixColumn(t,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Wt.copy(s).sub(this.target);let r=Wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new J,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Kx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function jx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Qx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xd),this.state=Et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ey(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Et.DOLLY;break;case ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Et.ROTATE}break;case ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(xh)}function ty(i){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ny(i){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(i.preventDefault(),this.dispatchEvent(xh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Xd))}function iy(i){this.enabled!==!1&&this._handleKeyDown(i)}function sy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Et.TOUCH_ROTATE;break;case Vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case Vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Et.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(xh)}function ry(i){switch(this._trackPointer(i),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Et.NONE}}function oy(i){this.enabled!==!1&&i.preventDefault()}function ay(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ly(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var uo=new P;function Nn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;uo.copy(e),uo[n]=0,uo.normalize();let c=.5*o/(o+a),d=1-uo.angleTo(i)/l;return Math.sign(uo[t])===1?d*c:a/(o+a)+c+c*(1-d)}var Ut=class i extends Ht{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,d=new P(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,u=this.attributes.uv.array,m=f.length/6,b=new P,g=.5/o;for(let p=0,y=0;p<f.length;p+=3,y+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[p+0]=d.x*Math.sign(l.x)+c.x*r,f[p+1]=d.y*Math.sign(l.y)+c.y*r,f[p+2]=d.z*Math.sign(l.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/m)){case 0:b.set(1,0,0),u[y+0]=Nn(b,c,"z","y",r,n),u[y+1]=1-Nn(b,c,"y","z",r,t);break;case 1:b.set(-1,0,0),u[y+0]=1-Nn(b,c,"z","y",r,n),u[y+1]=1-Nn(b,c,"y","z",r,t);break;case 2:b.set(0,1,0),u[y+0]=1-Nn(b,c,"x","z",r,e),u[y+1]=Nn(b,c,"z","x",r,n);break;case 3:b.set(0,-1,0),u[y+0]=1-Nn(b,c,"x","z",r,e),u[y+1]=1-Nn(b,c,"z","x",r,n);break;case 4:b.set(0,0,1),u[y+0]=1-Nn(b,c,"x","y",r,e),u[y+1]=1-Nn(b,c,"y","x",r,t);break;case 5:b.set(0,0,-1),u[y+0]=Nn(b,c,"x","y",r,e),u[y+1]=1-Nn(b,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var yh=20261005;function Kt(){return yh=Math.imul(yh,1664525)+1013904223>>>0,yh/4294967296}function Nl(i,e=512,t=512){let n=document.createElement("canvas");n.width=e,n.height=t;let s=n.getContext("2d");i(s,e,t);let r=new ct(n);return r.colorSpace=$e,r.anisotropy=4,r}function Ul(i,e,t,n){i.fillStyle=n,i.fillRect(0,0,e,t);for(let s=0;s<180;s++){let r=Kt()*e,o=Kt()*t,a=6+Kt()*65,l=i.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,Kt()>.45?"rgba(255,249,232,.10)":"rgba(96,78,57,.075)"),l.addColorStop(1,"rgba(255,249,232,0)"),i.fillStyle=l,i.fillRect(r-a,o-a,a*2,a*2)}for(let s=0;s<9e3;s++)i.fillStyle=Kt()>.5?"rgba(255,251,240,.12)":"rgba(70,59,44,.04)",i.fillRect(Kt()*e,Kt()*t,1,1)}function Fl(i,e={}){return new Fe({map:i,roughness:1,metalness:0,...e})}function bh(i,e){return i.map.wrapS=i.map.wrapT=wn,i.userData.worldSpan=e,i}function ps(i,e){let t=Fl(Nl((n,s,r)=>Ul(n,s,r,i)));return e?bh(t,e):t}function Dl(i,e=!1,t=!1,n=1.5){return bh(Fl(Nl((s,r,o)=>{Ul(s,r,o,i);let a=e?8:6,l=r/a;for(let c=0;c<a;c++)for(let d=0;d<a;d++){let f=d*l,h=c*l;if(s.strokeStyle="rgba(236,223,203,.48)",s.lineWidth=1.1,s.strokeRect(f+.8,h+.8,l-1.6,l-1.6),s.fillStyle=`rgba(255,245,218,${Kt()*.09})`,s.fillRect(f+2,h+2,l-4,l-4),e){let u=f+l/2,m=h+l/2;s.fillStyle="#eee5d6";for(let[b,g]of[[-6,0],[6,0],[0,-6],[0,6]])s.beginPath(),s.ellipse(u+b,m+g,4,5,b?Math.PI/2:0,0,Math.PI*2),s.fill();s.fillStyle="#575650",s.fillRect(u-3,m-3,6,6);for(let b of[-21,21])for(let g of[-21,21])s.fillStyle="rgba(238,230,212,.7)",s.beginPath(),s.arc(u+b,m+g,1.8,0,Math.PI*2),s.fill()}t&&(s.strokeStyle="rgba(56,91,76,.32)",s.beginPath(),s.moveTo(f+l/2,h+5),s.lineTo(f+l-5,h+l/2),s.lineTo(f+l/2,h+l-5),s.lineTo(f+5,h+l/2),s.closePath(),s.stroke())}})),n)}function vh(i){return Fl(Nl((e,t,n)=>{Ul(e,t,n,i);for(let s=0;s<100;s++){let r=Kt()*t;e.strokeStyle=s%3?"rgba(58,37,23,.17)":"rgba(249,224,185,.18)",e.lineWidth=.5+Kt()*2,e.beginPath(),e.moveTo(r,0),e.bezierCurveTo(r-10,n*.3,r+10,n*.7,r+Kt()*6,n),e.stroke()}for(let s=0;s<5;s++){let r=Kt()*t,o=Kt()*n;for(let a=1;a<7;a++)e.strokeStyle=`rgba(77,49,30,${.11-a*.01})`,e.beginPath(),e.ellipse(r,o,a*2.3,a*10,.08,0,Math.PI*2),e.stroke()}}))}function cy(){return bh(Fl(Nl((i,e,t)=>{Ul(i,e,t,"#bcb6a7");for(let n=0;n<120;n++){let s=Kt()*e,r=Kt()*t,o=5+Kt()*28;i.fillStyle=["#e6dfcd","#969b91","#d6c9b2","#ac9e8c"][n%4],i.globalAlpha=.66,i.beginPath();for(let a=0;a<6;a++){let l=a/6*Math.PI*2,c=o*(.5+Kt()*.5);i.lineTo(s+Math.cos(l)*c,r+Math.sin(l)*c)}i.closePath(),i.fill()}i.globalAlpha=1})),.85)}function Ol(){return{floral:Dl("#ba9c8f",!0,!1,1.2),skirt:Dl("#946e5c",!1,!1,1.5),floor:Dl("#c8ad9e",!1,!1,2.4),green:Dl("#88a895",!1,!0,.9),concrete:ps("#c9c0ae",1.4),stone:cy(),wood:vh("#9d7857"),darkWood:vh("#76573f"),panel:vh("#a88661"),frame:ps("#c1bcac"),metal:ps("#7e847a"),pipe:ps("#b39755"),glass:ps("#718780"),shadow:ps("#53615a"),cream:ps("#e1d7c4")}}function qd(){let i=(e,t,n,s)=>{let r=document.createElement("canvas");r.width=s?256:768,r.height=s?1536:256;let o=r.getContext("2d");o.fillStyle="#a94332",o.fillRect(0,0,r.width,r.height),o.strokeStyle="#c5a364",o.lineWidth=10,o.strokeRect(15,15,r.width-30,r.height-30),o.fillStyle="#e8d5a0",o.textAlign="center",o.textBaseline="middle",o.font="110px SimSun,serif",s?[...e].forEach((l,c)=>o.fillText(l,128,(c+.5)*1536/e.length)):o.fillText(e,384,128);let a=new ct(r);return a.colorSpace=$e,new Xe(new gt(t,n),new Fe({map:a,roughness:1,side:xt}))};return{left:i("\u6625\u98CE\u9001\u6696\u5165\u5C0F\u9662",.245,1.89,!0),right:i("\u559C\u4E50\u5E38\u4F34\u6EE1\u4EBA\u95F4",.245,1.89,!0),lintel:i("\u5E73\u5B89\u559C\u4E50",.6,.215,!1)}}function Yd(){let i=new Ue;i.name="\u8001\u5BB6\u95E8\u5ECA";let e=Ol(),t=new Ui({color:"#615346",transparent:!0,opacity:.23});function n(u,m,b,g,p=i,y=!1){let v=y?new Ut(...m,2,Math.min(.012,Math.min(...m)*.17)):new Ht(...m);if(g.userData.worldSpan){let M=v.attributes.position,S=v.attributes.normal,w=v.attributes.uv,E=g.userData.worldSpan;for(let A=0;A<M.count;A++){let R=M.getX(A)+b[0],N=M.getY(A)+b[1],D=M.getZ(A)+b[2],B=Math.abs(S.getX(A)),O=Math.abs(S.getY(A));w.setXY(A,(B>.5?D:R)/E,(O>.5?D:N)/E)}w.needsUpdate=!0}let _=new Xe(v,g);if(_.name=u,_.position.set(...b),_.castShadow=!0,_.receiveShadow=!0,p.add(_),y){let M=new as(new Br(v,40),t);_.add(M)}return _}function s(u,m,b,g,p,y=i){let v=new P(...m),_=new P(...b),M=new Xe(new nt(g,g,v.distanceTo(_),8),p);return M.name=u,M.position.copy(v).add(_).multiplyScalar(.5),M.quaternion.setFromUnitVectors(new P(0,1,0),_.sub(v).normalize()),M.castShadow=!0,y.add(M),M}n("\u95E8\u5ECA\u77F3\u57FA",[4.96,.3,2.57],[0,.15,.255],e.stone,i,!0),n("\u7C89\u8272\u5730\u7816",[4.73,.035,2.44],[0,.318,.235],e.floor),n("\u4E0B\u5C42\u53F0\u9636",[4.82,.1,.55],[0,.05,1.79],e.stone,i,!0),n("\u4E0A\u5C42\u53F0\u9636",[4.82,.1,.35],[0,.15,1.62],e.stone,i,!0),n("\u53F0\u9636\u8FB9\u7F18",[4.82,.012,.035],[0,.205,1.78],e.cream),n("\u95E8\u69DB\u77F3\u6761",[1.25,.045,.26],[0,.365,-.68],e.stone,i,!0);for(let[u,m]of[[1.48,.302],[1.71,.204],[2.05,.103]])n("\u53F0\u9636\u78E8\u635F\u6D45\u8FB9",[4.76,.015,.025],[0,m,u],e.concrete);let r=-.92;for(let[u,m,b]of[["\u5DE6\u8FB9\u5899",.38,-2.21],["\u5DE6\u95E8\u67F1",.42,-.79],["\u53F3\u95E8\u67F1",.42,.79],["\u53F3\u8FB9\u5899",.38,2.21]])n(u,[m,2.56,.15],[b,1.61,r],e.floral,i,!0);n("\u95E8\u7A97\u4E0A\u65B9\u82B1\u7816",[4.8,.37,.15],[0,2.7,r],e.floral,i,!0);for(let u of[-1.5,1.5])n("\u7A97\u4E0B\u82B1\u7816",[1.02,.64,.15],[u,.81,r],e.floral),n("\u7A97\u4E0B\u5899\u88D9",[1.02,.16,.17],[u,.4,r+.01],e.skirt);for(let[u,m]of[[.38,-2.21],[.42,-.79],[.42,.79],[.38,2.21]])n("\u67F1\u811A\u5899\u88D9",[u,.16,.17],[m,.4,r+.01],e.skirt);n("\u5DE6\u4FA7\u95E8\u5ECA\u5899",[.16,2.56,1.88],[-2.4,1.61,-.04],e.floral,i,!0),n("\u5DE6\u4FA7\u5899\u88D9",[.175,.18,1.88],[-2.395,.42,-.04],e.skirt);let o=new Ue;o.name="\u7535\u7BB1\u53F3\u4E0B\u65B9\u5355\u6247\u6728\u95E8",o.position.set(-2.303,.33,-.18),o.rotation.y=Math.PI/2,i.add(o),n("\u4FA7\u95E8\u6D1E\u9634\u5F71",[.69,1.98,.025],[0,.99,0],e.darkWood,o),n("\u4FA7\u95E8\u6728\u95E8\u6247",[.6,1.89,.055],[0,.945,.021],e.wood,o,!0);for(let u of[-.34,.34])n("\u4FA7\u95E8\u6728\u6846",[.06,2.02,.08],[u,1.01,.028],e.darkWood,o,!0);n("\u4FA7\u95E8\u4E0A\u6846",[.74,.07,.08],[0,2,.028],e.darkWood,o,!0);for(let[u,m]of[[.37,.49],[1.25,.98]])n("\u4FA7\u95E8\u9762\u677F\u51F9\u69FD",[.47,m+.055,.018],[0,u,.055],e.darkWood,o),n("\u4FA7\u95E8\u6728\u9762\u677F",[.42,m,.018],[0,u,.068],e.panel,o,!0);s("\u4FA7\u95E8\u628A\u624B",[.22,.89,.102],[.22,1.03,.102],.012,e.metal,o),n("\u4FA7\u95E8\u95E8\u69DB",[.77,.035,.19],[0,.02,.04],e.stone,o,!0),n("\u53F3\u4FA7\u95E8\u5ECA\u5899",[.16,2.56,1.88],[2.4,1.61,-.04],e.skirt,i,!0),n("\u7EFF\u8272\u8D34\u7816\u67F1",[.28,2.54,.29],[2.39,1.6,.87],e.green,i,!0),n("\u7EFF\u67F1\u767D\u8272\u5DE6\u8FB9\u6761",[.035,2.54,.035],[2.235,1.6,1.035],e.cream),n("\u7EFF\u67F1\u767D\u8272\u53F3\u8FB9\u6761",[.035,2.54,.035],[2.53,1.6,1.035],e.cream);for(let u of[-2.4,2.4])n("\u524D\u65B9\u67F1\u811A",[.33,.3,.37],[u,.15,1],e.stone,i,!0);n("\u6DF7\u51DD\u571F\u95E8\u5ECA\u9876\u68DA",[5.12,.16,2.2],[0,2.98,.03],e.concrete,i,!0),n("\u9876\u68DA\u524D\u6CBF",[5.12,.2,.1],[0,2.97,1.11],e.concrete,i,!0);let a=[];for(let[u,m]of[-1.5,1.5].entries()){let b=new Ue;b.name=u?"\u53F3\u7A97":"\u5DE6\u4FA7\u63A8\u62C9\u7A97",i.add(b),n("\u7A97\u6D1E\u6DF1\u8272\u886C\u5E95",[1.1,1.44,.03],[m,1.825,-.86],e.shadow,b),n("\u5916\u7A97\u6C34\u6CE5\u7A97\u53F0",[1.24,.065,.21],[m,1.075,-.66],e.concrete,b,!0);for(let g of[-1,1]){let p=new Ue;p.name=`\u7A97\u6247${g}`,p.position.set(m+g*.255,1.825,-.795),b.add(p),n("\u7070\u84DD\u73BB\u7483",[.475,1.32,.018],[0,0,g*.018],e.glass,p);for(let _ of[-.245,.245])n("\u63A8\u62C9\u7A97\u7AD6\u6846",[.022,1.35,.032],[_,0,.028],e.frame,p);for(let _ of[-.665,.665,.03])n("\u63A8\u62C9\u7A97\u6A2A\u6846",[.49,.025,.032],[0,_,.028],e.frame,p);let y=new Lt({color:"#ced8cc",transparent:!0,opacity:.16,depthWrite:!1}),v=n("\u73BB\u7483\u6C34\u5F69\u53CD\u5149",[.026,1.12,.005],[-.12,.04,.039],y,p);v.rotation.z=-.035}for(let g of[-.55,.55])n("\u5916\u7A97\u7AD6\u6846",[.06,1.47,.09],[m+g,1.825,-.71],e.frame,b,!0);for(let g of[1.1,2.55])n("\u5916\u7A97\u6A2A\u6846",[1.16,.06,.09],[m,g,-.71],e.frame,b,!0);for(let g of[-.76,-.72])n("\u63A8\u62C9\u7A97\u4E0B\u8F68",[1.08,.012,.016],[m,1.145,g],e.darkWood,b);for(let g=0;g<8;g++){let p=m-.45+g*.129;s("\u91D1\u5C5E\u7A97\u680F",[p,1.13,-.635],[p,2.52,-.635],.011,e.metal,b)}for(let g of[1.16,1.65,2.14,2.49])s("\u6A2A\u5411\u7A97\u680F",[m-.52,g,-.635],[m+.52,g,-.635],.014,e.metal,b);a.push(b)}let l=[];for(let u of[-1,1]){let m=new Ue;m.name=u<0?"\u5DE6\u95E8\u6247\uFF08\u5173\u95ED\uFF09":"\u53F3\u95E8\u6247\uFF08\u5173\u95ED\uFF09",m.position.set(u*.535,.33,-.78),i.add(m);let b=-u*.265;n("\u6728\u95E8\u4E3B\u4F53",[.53,1.93,.065],[b,.965,0],e.wood,m,!0);for(let p of[.36,1.25]){let y=p<.5?.48:.96;n("\u9762\u677F\u51F9\u69FD\u9634\u5F71",[.425,y+.055,.015],[b,p,.039],e.darkWood,m),n("\u6728\u95E8\u5185\u5D4C\u9762\u677F",[.365,y-.025,.018],[b,p,.052],e.panel,m,!0);for(let v of[-.18,.18])n("\u9762\u677F\u5185\u5C42\u96D5\u7EBF",[.011,y,.018],[b+v,p,.059],e.wood,m);for(let v of[-.201,.201])n("\u9762\u677F\u7AD6\u7EBF",[.018,y+.04,.025],[b+v,p,.062],e.darkWood,m);for(let v of[-y/2-.013,y/2+.013])n("\u9762\u677F\u6A2A\u7EBF",[.42,.018,.025],[b,p+v,.062],e.darkWood,m)}let g=b-u*.17;for(let p of[.25,1.65])n("\u6728\u95E8\u94F0\u94FE",[.02,.1,.02],[0,p,.055],e.metal,m);n("\u95E8\u628A\u624B\u5E95\u7247",[.025,.21,.025],[g,.91,.085],e.metal,m),s("\u95E8\u628A\u624B",[g,.845,.12],[g,.99,.12],.012,e.metal,m),l.push(m)}for(let u of[-.585,.585])n("\u6728\u95E8\u6846",[.065,2.22,.11],[u,1.43,-.77],e.darkWood,i,!0);n("\u95E8\u6846\u6A2A\u6881",[1.23,.07,.12],[0,2.28,-.76],e.darkWood,i,!0),n("\u95E8\u6963\u73BB\u7483",[1.1,.2,.025],[0,2.42,-.78],e.glass);for(let u of[-.18,.18])n("\u95E8\u6963\u5206\u683C",[.025,.22,.065],[u,2.42,-.74],e.wood);n("\u95E8\u6963\u9876\u6846",[1.23,.06,.11],[0,2.55,-.76],e.darkWood);let c=qd();for(let[u,m]of[[-.785,c.left],[.785,c.right]])m.name="\u892A\u8272\u6625\u8054",m.position.set(u,1.37,-.817),i.add(m);n("\u95E8\u4E0A\u88C5\u9970\u753B\u6846",[.65,.26,.05],[0,2.73,-.78],e.darkWood,i,!0),c.lintel.name="\u53C2\u8003\u56FE\u95E8\u4E0A\u88C5\u9970",c.lintel.position.set(0,2.73,-.738),i.add(c.lintel);let d=new Fe({color:"#f4f4ed",roughness:.3,emissive:"#fff8eb",emissiveIntensity:0}),f=new Xe(new Rt(.055,20,12),d);f.name="\u95E8\u53E3\u706F\u6CE1",f.position.set(0,2.57,-.63),i.add(f),n("\u767D\u8272\u706F\u5EA7",[.075,.04,.06],[0,2.64,-.655],e.cream);let h=new Ue;return h.position.set(-2.245,2.365,.7),h.rotation.y=Math.PI/2,i.add(h),n("\u65E7\u7535\u8868\u7BB1",[.23,.33,.15],[0,0,0],e.pipe,h,!0),s("\u7535\u8868\u7AD6\u7EBF",[-2.285,.45,.7],[-2.285,2.2,.7],.012,e.pipe),s("\u7535\u8868\u4E0A\u65B9\u5BFC\u7EBF",[-2.285,2.53,.7],[-2.285,2.75,.7],.012,e.pipe),s("\u6A90\u4E0B\u5BFC\u7EBF",[-2.285,2.75,.7],[-2.285,2.75,.86],.012,e.pipe),{group:i,windows:a,leaves:l,bulb:f}}function Zd(){let i=new Ue,e=new Fe({color:"#c7ccd0",metalness:.65,roughness:.3}),t=new Fe({color:"#858e94",metalness:.5,roughness:.55}),n=new zt;n.moveTo(-.03,-.023),n.lineTo(.028,-.023),n.quadraticCurveTo(.034,-.023,.034,-.017),n.lineTo(.034,.02),n.quadraticCurveTo(.034,.027,.027,.027),n.lineTo(-.027,.027),n.quadraticCurveTo(-.034,.027,-.034,.02),n.lineTo(-.034,-.017),n.quadraticCurveTo(-.034,-.023,-.03,-.023);let s=new Cn;s.moveTo(-.008,.003),s.lineTo(-.008,.02),s.lineTo(.014,.02),s.lineTo(.014,.003),s.closePath(),n.holes.push(s),i.add(new Xe(new un(n,{depth:.005,bevelEnabled:!0,bevelSize:.0015,bevelThickness:.001,bevelSegments:2,steps:1}),e));let r=new zt;r.moveTo(-.012,-.017),r.lineTo(.012,-.017),r.lineTo(.012,-.087),r.quadraticCurveTo(.012,-.093,.007,-.093),r.lineTo(-.007,-.093),r.quadraticCurveTo(-.012,-.093,-.012,-.087),r.closePath(),i.add(new Xe(new un(r,{depth:.005,bevelEnabled:!0,bevelSize:.001,bevelThickness:8e-4,bevelSegments:2,steps:1}),e));for(let o of[-.008,.006]){let a=new Xe(new Ht(.002,.06,7e-4),t);a.position.set(o,-.054,.0056),i.add(a)}for(let o of[-.036,-.047,-.06,-.073,-.085]){let a=new Xe(new Rt(.0022,8,6),t);a.scale.z=.2,a.position.set(-.001,o,.0055),i.add(a)}return i}function $d({host:i,camera:e,controls:t,model:n,status:s}){let r=new P(-.995,1.19,-.64),o=Zd();o.name="\u7A97\u7F1D\u91CC\u7684\u94F6\u8272\u94A5\u5319",o.position.set(-1.01,1.26,-.69),o.rotation.z=-.15,o.visible=!1,n.group.add(o);let a=document.createElement("button");a.className="window-hit-target",a.type="button",a.setAttribute("aria-label","\u67E5\u770B\u5DE6\u7A97\u53F3\u4E0B\u89D2"),a.title="\u770B\u770B\u7A97\u7F1D",i.appendChild(a);let l=document.createElement("button");l.className="key-hit-target",l.type="button",l.setAttribute("aria-label","\u62FE\u53D6\u7A97\u7F1D\u4E2D\u7684\u94A5\u5319"),l.title="\u62FF\u8D77\u94A5\u5319",l.hidden=!0,i.appendChild(l);let c=document.createElement("button");c.className="window-back",c.type="button",c.textContent="\u8FD4\u56DE\u5168\u666F",c.hidden=!0,i.parentElement.appendChild(c);let d=document.createElement("div");d.className="key-inventory",d.setAttribute("role","status"),d.hidden=!0,d.textContent="\u94A5\u5319\u5DF2\u62FF\u5230",i.parentElement.appendChild(d);let f=n.windows[0].children.find(D=>D.name==="\u7A97\u62471"),h=f.position.x,u=matchMedia("(prefers-reduced-motion: reduce)"),m="overview",b=!1,g=null,p=null,y=!1,v={minDistance:t.minDistance,maxDistance:t.maxDistance,minAzimuthAngle:t.minAzimuthAngle,maxAzimuthAngle:t.maxAzimuthAngle,minPolarAngle:t.minPolarAngle,maxPolarAngle:t.maxPolarAngle},_=new P;function M(D,B,O){g={start:performance.now(),from:e.position.clone(),targetFrom:t.target.clone(),to:D,targetTo:B,direction:O,fromSash:f.position.x},t.enabled=!1,t.minDistance=.1,t.maxDistance=30,t.minAzimuthAngle=-1/0,t.maxAzimuthAngle=1/0,t.minPolarAngle=0,t.maxPolarAngle=Math.PI,a.hidden=!0,l.hidden=!0,c.disabled=!0}function S(){m!=="overview"||g||(p={position:e.position.clone(),target:t.target.clone()},m="focusing",s.textContent="",c.hidden=!1,i.parentElement.classList.add("is-window-focus"),M(new P(-.98,1.46,.6),new P(-1.04,1.24,-.7),"in"))}function w(){g||m==="overview"||(m="returning",s.textContent="",M(p.position,p.target,"out"))}function E(){m!=="focused"||b||g||(b=!0,o.visible=!1,l.hidden=!0,d.hidden=!1,s.textContent="\u94A5\u5319\u5DF2\u62FF\u5230\uFF1A\u8FD4\u56DE\u5168\u666F\uFF0C\u518D\u70B9\u51FB\u5927\u95E8\u3002",i.dispatchEvent(new CustomEvent("birthday:key-acquired",{bubbles:!0})))}let A=D=>{D.key==="Escape"&&w()};a.addEventListener("click",S),l.addEventListener("click",E),c.addEventListener("click",w),addEventListener("keydown",A);function R(D,B,O,H){_.copy(B).project(e),D.style.left=`${(_.x+1)*O/2}px`,D.style.top=`${(1-_.y)*H/2}px`}function N(D,B,O){if(y)return!1;let H=!!g;if(g){let G=u.matches?1400:D-g.start,V=at.clamp(G/900,0,1),K=V*V*(3-2*V);e.position.lerpVectors(g.from,g.to,K),t.target.lerpVectors(g.targetFrom,g.targetTo,K),e.lookAt(t.target);let Q=at.clamp((G-600)/600,0,1),he=Q*Q*(3-2*Q),Z=g.direction==="in"||b?h-.18:h;if(f.position.x=at.lerp(g.fromSash,Z,he),o.visible=!b&&g.direction==="in"&&Q>.7,G>=1400){let ge=g.direction==="in";g=null,t.enabled=!0,t.enableRotate=!ge,ge?(m="focused",t.minDistance=.9,t.maxDistance=2.2,o.visible=!b,l.hidden=b,s.textContent=b?"\u94A5\u5319\u5DF2\u7ECF\u62FF\u5230\u4E86\u3002":"\u70B9\u51FB\u5DE6\u7A97\u7F1D\u4E2D\u7684\u94F6\u8272\u94A5\u5319\u3002"):(m="overview",Object.assign(t,v),o.visible=!1,c.hidden=!0,a.hidden=!1,i.parentElement.classList.remove("is-window-focus")),t.update(),c.disabled=!1}}return R(a,r,B,O),R(l,o.position,B,O),H}return{update:N,returnToRoom:w,get focused(){return m!=="overview"},dispose(){y=!0,a.remove(),l.remove(),c.remove(),d.remove(),removeEventListener("keydown",A)}}}function Jd({host:i,scene:e,camera:t,controls:n,model:s,journey:r,status:o}){let a=new Xe(new gt(1.08,1.97),new Lt({color:"#ffffff",toneMapped:!1,side:xt}));a.position.set(0,1.315,-.925),a.visible=!1,e.add(a);let l=document.createElement("div");l.className="scene-transition-glow",l.setAttribute("aria-hidden","true"),document.body.appendChild(l);let c=document.createElement("button");c.type="button",c.className="door-hit-target",c.setAttribute("aria-label","\u6253\u5F00\u6B63\u9762\u7684\u53CC\u6247\u6728\u95E8"),c.title="\u6253\u5F00\u5BB6\u95E8",i.appendChild(c);let d=!1,f=!1,h=null,u=new P(0,1.25,-.7),m=new P,b=matchMedia("(prefers-reduced-motion: reduce)"),g=()=>{d=!0,c.title="\u7528\u94A5\u5319\u6253\u5F00\u5BB6\u95E8"};i.addEventListener("birthday:key-acquired",g);function p(){if(!(h||f||r.focused)){if(!d){o.textContent="\u5148\u53BB\u8001\u5730\u65B9\u627E\u627E\u94A5\u5319\u3002";return}h={start:performance.now(),from:t.position.clone(),targetFrom:n.target.clone()},n.enabled=!1,n.minDistance=.1,n.maxDistance=30,n.minAzimuthAngle=-1/0,n.maxAzimuthAngle=1/0,n.minPolarAngle=0,n.maxPolarAngle=Math.PI,c.hidden=!0,a.visible=!0,i.parentElement.classList.add("is-door-opening"),o.textContent=""}}c.addEventListener("click",p);function y(v,_,M){if(!h)return c.hidden=f||r.focused,m.copy(u).project(t),c.style.left=`${(m.x+1)*_/2}px`,c.style.top=`${(1-m.y)*M/2}px`,!1;let S=b.matches?2400:v-h.start,w=at.clamp(S/1e3,0,1),E=w*w*(3-2*w);t.position.lerpVectors(h.from,new P(0,1.65,2.6),E),n.target.lerpVectors(h.targetFrom,new P(0,1.35,-1.9),E),t.lookAt(n.target);let A=at.clamp((S-450)/1300,0,1),R=A*A*(3-2*A);return s.leaves[0].rotation.y=R*1.48,s.leaves[1].rotation.y=-R*1.48,l.style.opacity=String(at.clamp((S-1150)/1e3,0,1)),S>=2400&&(f=!0,h=null,l.style.opacity="1",i.dispatchEvent(new CustomEvent("birthday:door-opened",{bubbles:!0}))),!0}return{update:y,get locked(){return!!h||f},dispose(){c.remove(),i.removeEventListener("birthday:key-acquired",g),f||l.remove()}}}function Kd(){let i=new Ue;i.name="\u591C\u665A\u95E8\u5916\u7684\u8C47\u8C46\u6536\u83B7",i.visible=!1,i.position.set(0,.336,-2.55);let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d");t.fillStyle="#93714a",t.fillRect(0,0,256,256);for(let _=0;_<16;_++)for(let M=0;M<16;M++){let S=M*16,w=_*16;t.fillStyle=(_+M)%2?"#ba996a":"#a18050",t.fillRect(S+1,w+1,14,14),t.fillStyle="#d1b38380",t.fillRect(S+2,w+2,(_+M)%2?3:12,(_+M)%2?12:3),t.fillStyle="#624c303b",t.fillRect(S,w+14,16,2)}let n=new ct(e);n.colorSpace=$e,n.wrapS=n.wrapT=wn,n.repeat.set(5,2);let s=new Fe({map:n,color:"#d4b786",roughness:.96}),r=new Fe({color:"#b89867",roughness:.9}),o=new Fe({color:"#685039",roughness:.95}),a=(_,M,S,w=i)=>{let E=new Xe(M,S);return E.name=_,E.castShadow=!0,E.receiveShadow=!0,w.add(E),E},l=new Ue;l.name="\u88C5\u6EE1\u8C47\u8C46\u7684\u7F16\u7EC7\u80CC\u7BD3",l.position.set(1.52,.012,2.29),i.add(l);let c=[new J(.235,0),new J(.25,.06),new J(.29,.35),new J(.355,.7),new J(.349,.724),new J(.335,.713),new J(.273,.34),new J(.232,.03)];a("\u4EA4\u9519\u7AF9\u7F16\u7BD3\u8EAB",new Yt(c,64),s,l);for(let _=0;_<19;_++){let M=.025+_*.038,S=.246+M*.152,w=a("\u8FDE\u7EED\u6A2A\u5411\u7AF9\u7BFE",new Ct(S,.0045,4,64),r,l);w.rotation.x=Math.PI/2,w.position.y=M}for(let _=0;_<28;_++){let M=_*Math.PI*2/28,S=[0,.18,.39,.58,.72].map(w=>new P(Math.cos(M)*(.248+w*.15),w,Math.sin(M)*(.248+w*.15)));a("\u7AD6\u5411\u7AF9\u7BFE\u538B\u8FB9",new bt(new pt(S),12,.0045,4,!1),r,l)}for(let _ of[.706,.723]){let M=a("\u53CC\u5C42\u5377\u8FB9\u7BD3\u53E3",new Ct(.35,.009,8,64),r,l);M.rotation.x=Math.PI/2,M.position.y=_}for(let _ of[-.14,.14]){let M=new pt([new P(_,.63,.27),new P(_,.4,.37),new P(_,.06,.33),new P(_,-.008,.21)]);a("\u65E7\u80CC\u7BD3\u6DF1\u8272\u80A9\u5E26",new bt(M,24,.014,6,!1),o,l)}let d=["#83a04c","#9eb45b","#6f9149","#afbd6c"].map(_=>new Fe({color:_,roughness:.8})),f=new bt(new pt([new P(0,0,0),new P(.022,.21,.014),new P(-.018,.42,.025),new P(.036,.62,0),new P(.055,.72,-.018)]),24,.006,5,!1),h=new ht,u=new P,m=new ln,b=new P,g=new An;for(let _=0;_<4;_++){let M=new Zs(f,d[_],27);M.name="\u7BD3\u5185\u9971\u6EE1\u7684\u957F\u8C47\u8C46",M.castShadow=!0,M.receiveShadow=!0;for(let S=0;S<27;S++){let w=S*4+_,E=w*2.399,A=.27*Math.sqrt(w%29/29);u.set(Math.cos(E)*A,.45+w%6*.018,Math.sin(E)*A),g.set(.4+Math.sin(w)*.6,E,.35+Math.cos(w)*.55),m.setFromEuler(g),b.set(1,.6+w%5*.08,1),h.compose(u,m,b),M.setMatrixAt(S,h)}l.add(M)}for(let _=0;_<3;_++){let M=new Ue;M.name="\u624E\u597D\u7684\u6574\u675F\u8C47\u8C46",M.position.set(1.1+_*.24,.035,2.81-_*.08),M.rotation.y=.24-_*.15,i.add(M);let S=new Zs(f,d[_],24);S.castShadow=!0,S.receiveShadow=!0;for(let w=0;w<24;w++){let E=w*2.399,A=.075*Math.sqrt(w/24);u.set(Math.cos(E)*A,Math.sin(E)*A+.065,w%4*.016),m.setFromEuler(new An(Math.PI/2,0,(w%3-1)*.025)),b.set(1,.84+w%5*.04,1),h.compose(u,m,b),S.setMatrixAt(w,h)}M.add(S);for(let w of[.2,.46])a("\u6346\u8C46\u7684\u7EC6\u7AF9\u7BFE",new Ct(.085,.005,5,24),r,M).position.set(0,.063,w)}let p=new Fe({color:"#826442",roughness:.88}),y=new Fe({color:"#a98c62",roughness:.9});for(let[_,M,S]of[[.96,2.94,-.22],[2.04,2.66,.18]]){let w=new Ue;w.name="\u95E8\u5916\u65E7\u6728\u677F\u51F3",w.position.set(_,.006,M),w.rotation.y=S,i.add(w);let E=a("\u5706\u6DA6\u6728\u51F3\u9762",new Ut(.48,.055,.26,3,.025),y,w);E.position.y=.29;for(let R of[-.17,.17])for(let N of[-.08,.08]){let D=a("\u5916\u6487\u6728\u51F3\u811A",new Ut(.037,.28,.037,2,.005),p,w);D.position.set(R,.14,N),D.rotation.z=-Math.sign(R)*.1}let A=a("\u6728\u51F3\u6A2A\u6491",new Ut(.36,.026,.026,2,.005),p,w);A.position.y=.12}let v=new Zt("#eed9ad",0,2.5,2);return v.position.set(1.6,1.1,2.75),i.add(v),{root:i,update(_){i.visible=_>.005,v.intensity=_*.55}}}function Un(i,{color:e="#ffffff",roughness:t=.85,repeat:n=[1,1],mirrored:s=!1,worldSpan:r,woodGrain:o=!1,folder:a="samples-v1"}={}){let l=new Fe({color:e,roughness:t}),c=new Wn().load(new URL(`assets/textures/${a}/${i}`,document.baseURI).href,void 0,void 0,()=>{l.map===c&&(l.map=null,l.needsUpdate=!0),c.dispose()});return c.colorSpace=$e,c.wrapS=c.wrapT=s?Hs:wn,c.repeat.set(...n),c.anisotropy=8,l.map=c,r&&(l.userData.worldSpan=r),o&&(l.userData.woodGrain=!0),l}function jd(){let i=Ol(),e=831,t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296);function n(a){let l=document.createElement("canvas");l.width=l.height=512,a(l.getContext("2d"),512);let c=new ct(l);return c.colorSpace=$e,c.anisotropy=8,c}let s=(a,l=.7)=>Un("01-aged-wood.png",{color:a,roughness:l,mirrored:!0,woodGrain:!0}),r=(a,l)=>{i[a].map?.dispose(),i[a].dispose(),i[a]=l};r("wood",s("#d4c5b4")),r("darkWood",s("#8c7763")),r("panel",s("#ede5d8")),i.oldWood=s("#c5bfad",.9),r("floor",Un("05-pale-terracotta-tiles.png",{worldSpan:1.6,roughness:.94})),r("cream",new Fe({color:"#e8e8df",roughness:.6,metalness:.12})),r("pipe",new Fe({color:"#b69b64",roughness:.42,metalness:.65})),r("concrete",new Fe({color:"#d6cec0",roughness:.95})),i.wall=Un("04-ivory-plaster.png",{worldSpan:1.8,mirrored:!0,roughness:1}),i.wallLower=i.wall.clone(),i.wallLower.color.set("#c5ccb8"),i.wallLower.userData.worldSpan=1.8,i.view=new Lt({map:n((a,l)=>{let c=a.createLinearGradient(0,0,0,l);c.addColorStop(0,"#d9e7e1"),c.addColorStop(.55,"#eeeade"),c.addColorStop(1,"#abb798"),a.fillStyle=c,a.fillRect(0,0,l,l);for(let d=0;d<3;d++){a.fillStyle=["#bdcbb7","#a7bba4","#91a889"][d],a.beginPath(),a.moveTo(0,l);for(let f=0;f<=l;f+=8)a.lineTo(f,275+d*55+Math.sin(f/(75-d*13)+d)*22);a.lineTo(l,l),a.fill()}for(let d=0;d<1500;d++)a.fillStyle="rgba(242,236,208,.12)",a.fillRect(t()*l,t()*l,2,2)}),color:"#e6ece6"});let o=new Set(["wood","darkWood","panel","oldWood","cream","pipe","concrete","metal","frame","floor","wall","wallLower","view"]);for(let a of Object.keys(i))o.has(a)||(i[a].map?.dispose(),i[a].dispose(),delete i[a]);return i}function Eh(i,e,t,n,s,r=zt){let o=new r;return o.moveTo(i+s,e),o.lineTo(i+t-s,e),o.quadraticCurveTo(i+t,e,i+t,e+s),o.lineTo(i+t,e+n-s),o.quadraticCurveTo(i+t,e+n,i+t-s,e+n),o.lineTo(i+s,e+n),o.quadraticCurveTo(i,e+n,i,e+n-s),o.lineTo(i,e+s),o.quadraticCurveTo(i,e,i+s,e),o}function lr(i,e,t,n,s=[0,0,0]){let r=new Xe(t,n);return r.name=e,r.position.set(...s),r.castShadow=r.receiveShadow=!0,i.add(r),r}function Si(i,e,t,n,s,r=.02){let o=new Ut(...t,4,Math.min(r,Math.min(...t)*.4));if(s.userData.worldSpan){let a=o.attributes.position,l=o.attributes.normal,c=o.attributes.uv,d=s.userData.worldSpan;for(let f=0;f<a.count;f++){let h=a.getX(f)+n[0],u=a.getY(f)+n[1],m=a.getZ(f)+n[2];c.setXY(f,(Math.abs(l.getX(f))>.5?m:h)/d,(Math.abs(l.getY(f))>.5?m:u)/d)}}return lr(i,e,o,s,n)}function Mh(i,e=.025){return new un(i,{depth:e,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelSegments:3,curveSegments:20})}function Qd(){let i=new Ue;i.name="\u534A\u63A8\u5165\u767D\u684C\u7684\u7D2B\u8272\u6728\u6846\u6C99\u53D1",i.position.set(-1.68,0,1.08),i.rotation.y=Math.PI/2;let e=new Fe({color:"#b6976b",roughness:.7}),t=Un("02-lavender-fabric.png",{color:"#d2bedb",roughness:1,worldSpan:.45,mirrored:!0}),n=new Fe({color:"#796987",roughness:1});Si(i,"\u6C99\u53D1\u6728\u5E95\u5EA7",[1.64,.09,.6],[0,.345,0],e),Si(i,"\u7D2B\u8272\u957F\u5750\u57AB",[1.51,.13,.57],[0,.445,-.015],t,.045);let s=Si(i,"\u7D2B\u8272\u5E03\u827A\u9760\u80CC",[1.52,.51,.12],[0,.745,.255],t,.045);s.rotation.x=-.08;for(let r of[-.71,.71])for(let o of[-.235,.235]){let a=Si(i,"\u5916\u6487\u6D45\u6728\u6C99\u53D1\u817F",[.065,.36,.065],[r,.18,o],e);a.rotation.z=-Math.sign(r)*.09}for(let r of[-.8,.8]){Si(i,"\u6C99\u53D1\u5E73\u6728\u6276\u624B",[.09,.055,.68],[r,.59,.005],e),Si(i,"\u6276\u624B\u524D\u652F\u67F1",[.055,.24,.055],[r,.47,-.24],e);let o=Si(i,"\u6276\u624B\u659C\u6491",[.045,.3,.045],[r,.46,.12],e);o.rotation.x=-.35}for(let r of[-.38,.38]){let o=Si(i,"\u7D2B\u8272\u5C0F\u9760\u6795",[.4,.34,.095],[r,.685,.163],t,.043);o.rotation.x=-.16,o.rotation.z=r*.1}return Si(i,"\u5750\u57AB\u524D\u6CBF\u7F1D\u7EBF",[1.43,.008,.008],[0,.424,-.301],n,.002),i}function Sh(i,e,t){let n=new Ue;n.name=t==="\u9752\u8272"?"\u9752\u8272\u6CE8\u5851\u6276\u624B\u6905":"\u84DD\u8272\u6CE8\u5851\u6276\u624B\u6905",n.position.set(i,0,e),n.rotation.y=.4;let s=new Fe({color:t==="\u9752\u8272"?"#5d968a":"#648da8",roughness:.34}),r=new zt;r.moveTo(-.205,.46),r.bezierCurveTo(-.215,.64,-.247,.73,-.245,.87),r.quadraticCurveTo(-.24,1.025,-.135,1.025),r.lineTo(.135,1.025),r.quadraticCurveTo(.24,1.025,.245,.87),r.bezierCurveTo(.247,.73,.215,.64,.205,.46),r.closePath();for(let f of[0,1,2])for(let h of[-1.5,-.5,.5,1.5])r.holes.push(Eh(h*.071-.01,.625+f*.103,.02,.075,.01,Cn));let o=Mh(r,.028),a=o.attributes.position;for(let f=0;f<a.count;f++)a.setZ(f,a.getZ(f)+.185+(a.getY(f)-.46)*.15+a.getX(f)**2*.35);o.computeVertexNormals(),lr(n,"\u5F27\u9762\u5706\u89D2\u9760\u80CC\u4E0E\u5341\u4E8C\u4E2A\u7AD6\u5411\u5B54",o,s);let l=Eh(-.24,-.245,.48,.48,.045);for(let f of[-.12,-.02,.08])for(let h of[-.135,-.045,.045,.135])l.holes.push(Eh(h-.013,f,.026,.052,.011,Cn));let c=lr(n,"\u5E26\u771F\u5B9E\u6392\u6C34\u5B54\u7684\u5706\u89D2\u5750\u9762",Mh(l,.038),s,[0,.495,0]);c.rotation.x=Math.PI/2;for(let f of[-1,1]){let h=new zt;h.moveTo(-.245,.43),h.lineTo(-.245,.61),h.quadraticCurveTo(-.24,.66,-.17,.67),h.bezierCurveTo(-.02,.67,.12,.69,.205,.77),h.lineTo(.23,.46),h.quadraticCurveTo(0,.41,-.245,.43);let u=new Cn;u.absellipse(-.012,.56,.149,.065,0,Math.PI*2,!0),h.holes.push(u);let m=new Cn;m.absellipse(-.207,.506,.014,.047,0,Math.PI*2,!0),h.holes.push(m);let b=lr(n,"\u6276\u624B\u4FA7\u9762\u5927\u9542\u7A7A\u4E0E\u524D\u7AEF\u5C0F\u5B54",Mh(h,.028),s,[f*.242+.014,0,0]);b.rotation.y=-Math.PI/2}for(let f of[-.193,.193])for(let h of[-.178,.178]){let u=new Ht(.065,.445,.065,1,4,1),m=u.attributes.position;for(let b=0;b<m.count;b++){let g=m.getY(b),p=(.2225-g)/.445;m.setX(b,m.getX(b)*(1-.18*p)+Math.sign(f)*.035*p),m.setZ(b,m.getZ(b)*(1-.18*p)+Math.sign(h)*.035*p)}u.computeVertexNormals(),lr(n,"\u5411\u5916\u5F20\u5F00\u7684\u6CE8\u5851\u6905\u817F",u,s,[f,.238,h])}let d=new Fe({color:t==="\u9752\u8272"?"#558b80":"#5b819a",roughness:.38});for(let f of[.935,.959,.983]){let h=[];for(let u=0;u<=12;u++){let m=-.066+u*.011;h.push(new P(m,f-Math.sin(u/12*Math.PI)*.008,.177+(f-.46)*.15+m*m*.35))}lr(n,"\u9760\u80CC\u9876\u90E8\u6D45\u6D6E\u96D5",new bt(new pt(h),12,.0035,6,!1),d)}return n}function ui(i,e,t,n,s){let r=new Xe(t,n);return r.name=e,r.position.set(...s),r.castShadow=r.receiveShadow=!0,i.add(r),r}function hi(i,e,t,n,s,r=.012){return ui(i,e,new Ut(...t,4,Math.min(r,Math.min(...t)*.4)),s,n)}function Ji(i,e,t,n,s){return ui(i,e,new Rt(t,16,12),s,n)}function ms(i,e,t,n,s,r){return ui(i,e,new nt(t,t,n,48),r,s)}var Fn=(i,e=.75)=>new Fe({color:i,roughness:e});function Th(i){let e=document.createElement("canvas");e.width=e.height=512,i(e.getContext("2d"));let t=new ct(e);return t.colorSpace=$e,t.anisotropy=8,new Fe({map:t,roughness:.7})}function Bl(){let i=new Ue;i.name="\u7535\u89C6\u67DC\u8F6C\u89D2\u7684\u8001\u5F0F\u5EA7\u673A",i.position.set(-1.99,.698,-.55),i.rotation.y=-Math.PI/2;let e=Fn("#303738",.55),t=Fn("#242b2c",.48),n=Fn("#414949",.6),s=Fn("#bc8054",.6);hi(i,"\u9ED1\u8272\u7535\u8BDD\u4E0B\u58F3",[.31,.04,.36],[0,.02,0],e,.018);let r=new Ue;r.rotation.x=-Math.PI/2+.18,r.position.set(0,.06,-.01),i.add(r),hi(r,"\u5706\u89D2\u659C\u9762\u673A\u8EAB",[.31,.36,.038],[0,0,0],e,.019);let o=hi(r,"\u5DE6\u4FA7\u957F\u542C\u7B52",[.08,.335,.057],[-.108,.001,.039],e,.025);for(let h of[-.126,.126])hi(r,"\u542C\u7B52\u5706\u6DA6\u4E24\u7AEF",[.083,.072,.062],[-.108,h,.048],e,.025);hi(r,"\u6DB2\u6676\u5C4F\u5916\u6846",[.163,.071,.014],[.055,.113,.027],n,.007),hi(r,"\u7EFF\u8272\u6DB2\u6676\u663E\u793A\u5C4F",[.139,.047,.007],[.055,.113,.038],Fn("#82946d",.75),.003);let a=Th(h=>{h.fillStyle="#82946d",h.fillRect(0,0,512,512),h.fillStyle="rgba(61,74,50,.34)",h.font="90px monospace",h.textAlign="center",h.fillText("10:08",256,325)});ui(r,"\u6DB2\u6676\u5C4F\u6DE1\u8272\u6570\u5B57",new gt(.132,.039),a,[.055,.113,.043]).castShadow=!1;let l=ms(r,"\u5706\u5F62\u65B9\u5411\u952E",.027,.007,[.055,.047,.031],t);l.rotation.x=Math.PI/2;let c=Th(h=>{h.fillStyle="#242b2c",h.fillRect(0,0,512,512),h.fillStyle="#b6bfb9",h.font="110px sans-serif",h.textAlign="center",h.textBaseline="middle",h.fillText("OK",256,256);for(let u=0;u<4;u++)h.save(),h.translate(256,256),h.rotate(u*Math.PI/2),h.beginPath(),h.moveTo(-26,-165),h.lineTo(26,-165),h.lineTo(0,-202),h.fill(),h.restore()});ui(r,"\u65B9\u5411\u952E\u56FE\u6807",new Gn(.025,32),c,[.055,.047,.036]).castShadow=!1;for(let h of[.002,.11])hi(r,"\u5C4F\u5E55\u4E0B\u529F\u80FD\u952E",[.03,.012,.009],[h,.047,.026],t,.004);let d=Th(h=>{h.fillStyle="#242b2c",h.fillRect(0,0,512,512),h.fillStyle="#d6dcd6",h.font="68px sans-serif",h.textAlign="center",h.textBaseline="middle";let u=["1","2","3","4","5","6","7","8","9","*","0","#"];for(let m=0;m<4;m++)for(let b=0;b<3;b++)h.fillText(u[m*3+b],(b+.5)*512/3,(m+.5)*128)});for(let h=0;h<4;h++)for(let u=0;u<3;u++){let m=-.006+u*.045,b=-.006-h*.038,g=hi(r,"\u9ED1\u8272\u692D\u5706\u6570\u5B57\u6309\u952E",[.036,.026,.012],[m,b,.028],t,.01),p=new gt(.025,.02),y=p.attributes.uv;for(let _=0;_<y.count;_++)y.setXY(_,(y.getX(_)+u)/3,(y.getY(_)+3-h)/4);g.userData.digit=["1","2","3","4","5","6","7","8","9","*","0","#"][h*3+u];let v=ui(r,"\u6309\u952E\u6570\u5B57",p,d,[m,b,.035]);v.castShadow=!1,v.userData.digit=g.userData.digit}for(let h of[-.01,-.045,-.08,-.115])hi(r,"\u4FA7\u8FB9\u8BB0\u5FC6\u529F\u80FD\u952E",[.014,.019,.009],[.132,h,.026],t,.006);hi(r,"\u6A59\u8272\u514D\u63D0\u6309\u94AE",[.041,.025,.01],[.123,-.148,.028],s,.009);let f=[];for(let h=0;h<=128;h++){let u=h/128;f.push(new P(-.166+Math.sin(u*Math.PI*24)*.008,.037-u*.02,-.135+u*.245))}return ui(i,"\u5377\u66F2\u9ED1\u8272\u7535\u8BDD\u7EBF",new bt(new pt(f),128,.0028,5,!1),e,[0,0,0]),i}function Hl(){let i=new Ue;i.name="\u53CC\u5C42\u5976\u6CB9\u8349\u8393\u751F\u65E5\u86CB\u7CD5",i.position.set(1.49,.958,-1.35);let e=Fn("#eee8d9",.87),t=Fn("#fbf3e1",.88),n=Fn("#b6473d",.75),s=Fn("#63816a",.8),r=Fn("#d9bc8d");ms(i,"\u86CB\u7CD5\u767D\u74F7\u76D8",.3,.022,[0,-.011,0],e);for(let[d,f,h]of[[.25,0,.2],[.18,.2,.17]]){ms(i,"\u767D\u5976\u6CB9\u86CB\u7CD5\u5C42",d,h,[0,f+h/2,0],e),ms(i,"\u67D4\u548C\u5976\u6CB9\u9876\u9762",d+.003,.012,[0,f+h,0],t);for(let u=0;u<42;u++){let m=u/42*Math.PI*2;Ji(i,"\u9876\u90E8\u6CE2\u6D6A\u5976\u6CB9",.012,[Math.cos(m)*(d-.006),f+h+.008,Math.sin(m)*(d-.006)],t).scale.set(.85,1.45,.85),Ji(i,"\u5E95\u7F18\u5976\u6CB9\u88F1\u82B1",.01,[Math.cos(m)*d,f+.014,Math.sin(m)*d],t)}for(let u=0;u<6;u++){let m=[];for(let p=0;p<=18;p++){let y=p/18,v=(u+y)/6*Math.PI*2;m.push(new P(Math.cos(v)*(d+.004),f+.087-Math.sin(y*Math.PI)*.046,Math.sin(v)*(d+.004)))}ui(i,"\u7EA2\u8272\u5F27\u5F62\u88F1\u82B1\u5E26",new bt(new pt(m),24,.006,8,!1),n,[0,0,0]);for(let p=0;p<=18;p++){let y=m[p],v=Ji(i,"\u5976\u6CB9\u6247\u5F62\u82B1\u8FB9",.01,[y.x,f+.1-Math.sin(p/18*Math.PI)*.046,y.z],t);v.scale.y=1.8}let b=u/6*Math.PI*2;for(let p of[-.022,.022])Ji(i,"\u4FA7\u9762\u7EA2\u8272\u5C0F\u679C\u9970",.01,[Math.cos(b+p)*(d+.009),f+.13,Math.sin(b+p)*(d+.009)],n);Ji(i,"\u4FA7\u9762\u679C\u9970\u5C0F\u53F6",.012,[Math.cos(b)*(d+.01),f+.149,Math.sin(b)*(d+.01)],s).scale.set(1,.3,.6)}}for(let d=0;d<8;d++){let f=d/8*Math.PI*2,h=Math.cos(f)*.11,u=Math.sin(f)*.11;Ji(i,"\u9876\u90E8\u8349\u8393",.029,[h,.405,u],n).scale.set(.85,1.3,.85);for(let g=0;g<7;g++){let p=g/7*Math.PI*2,y=Ji(i,"\u8349\u8393\u7EC6\u7C7D",.0018,[h+Math.cos(p)*.024,.407,u+Math.sin(p)*.024],r);y.scale.y=1.5}let b=Ji(i,"\u8349\u8393\u7EFF\u53F6\u51A0",.015,[h,.438,u],s);b.scale.y=.22}let o=[],a=["#d6a16f","#8da397","#c89b8c","#87a4b0","#e3c77e","#c58e7c"];for(let d=0;d<6;d++){let f=d/6*Math.PI*2,h=Math.cos(f)*.055,u=Math.sin(f)*.055,m=.11+d%3*.015;ms(i,"\u751F\u65E5\u8721\u70DB",.0065,m,[h,.379+m/2,u],Fn(a[d]));for(let y=0;y<5;y++){let v=ms(i,"\u8721\u70DB\u7EC6\u6761\u7EB9",.0068,.004,[h,.385+y*m/5,u],t)}ms(i,"\u8721\u70DB\u706F\u82AF",.001,.008,[h,.383+m,u],Fn("#665344"));let b=new Ue;b.name="\u71C3\u7740\u7684\u70DB\u7130",b.position.set(h,.389+m,u),i.add(b),o.push(b);let g=[new J(0,0),new J(.005,.006),new J(.008,.016),new J(.004,.031),new J(0,.044)];ui(b,"\u70DB\u7130\u5916\u5C42",new Yt(g,16),new Lt({color:"#ffb858",toneMapped:!1}),[0,0,0]).castShadow=!1;let p=ui(b,"\u70DB\u7130\u4EAE\u82AF",new Yt(g,12),new Lt({color:"#fff5d6",toneMapped:!1}),[0,.001,.003]);p.scale.set(.45,.65,.45),p.castShadow=!1}let l=new Zt("#ffc178",.32,2.4,2);l.position.set(0,.55,0),i.add(l);let c=new Zt("#ffd09a",.09,1.5,2);return c.position.set(0,.32,.55),i.add(c),i.userData.candleOut=!1,i.userData.extinguish=()=>{i.userData.candleOut=!0,o.forEach(d=>d.visible=!1),l.intensity=0,c.intensity=0},i.userData.animate=(d,f)=>{i.userData.candleOut||(o.forEach((h,u)=>{h.rotation.z=f?0:Math.sin(d*3.4+u)*.055,h.scale.y=f?1:1+Math.sin(d*5+u)*.06}),l.intensity=f?.32:.32+Math.sin(d*4)*.025)},i}function ef({deskOffsetX:i=0,cabinetOffsetX:e=0,cabinetOffsetZ:t=0}={}){let n=new Ue;n.name="\u8001\u623F\u95F4\u751F\u6D3B\u7269\u4EF6";let s=(C,F=.8)=>new Fe({color:C,roughness:F}),r=s("#97714d"),o=s("#e9ddbd"),a=s("#f1e8d4"),l=s("#768c60"),c=s("#67734c"),d=s("#b36f57"),f=s("#788f9a"),h=s("#9f8961",.4),u=(C,F,Y,T,x=n)=>{let I=new Xe(F,Y);return I.name=C,I.position.set(...T),I.castShadow=I.receiveShadow=!0,x.add(I),I},m=(C,F,Y,T,x=n)=>u(C,new Ut(...F,2,Math.min(.012,Math.min(...F)*.3)),T,Y,x),b=(C,F,Y,T,x,I=n,U=F)=>u(C,new nt(U,F,Y,24),x,T,I),g=(C,F,Y,T,x=n)=>u(C,new Rt(F,12,8),T,Y,x);function p(C){let F=document.createElement("canvas");F.width=F.height=512,C(F.getContext("2d"));let Y=new ct(F);return Y.colorSpace=$e,Y.anisotropy=8,new Fe({map:Y,roughness:1})}let y=Un("countryside-watercolor.png",{folder:"decor-v1",roughness:1});y.map.wrapS=y.map.wrapT=sn;function v(C,F,Y,T,x,I=y,U=n){let z=new Ue;z.position.set(C,F,Y),U.add(z),m("\u753B\u6846\u5E95\u677F",[T,x,.027],[0,0,0],r,z),m("\u7C73\u767D\u88C5\u88F1\u886C\u7EB8",[T-.025,x-.025,.005],[0,0,.017],a,z),u("\u6DE1\u5F69\u753B\u9762",new gt(T-.08,x-.08),I,[0,0,.02],z);for(let j of[-T/2,T/2])m("\u6728\u753B\u6846\u7AD6\u8FB9",[.03,x+.03,.045],[j,0,.015],r,z);for(let j of[-x/2,x/2])m("\u6728\u753B\u6846\u6A2A\u8FB9",[T,.03,.045],[0,j,.015],r,z);return z}v(-1.07,1.94,-2.073,.94,.57).name="\u5899\u4E0A\u7684\u56DE\u5FC6\u6302\u753B";let _=p(C=>{C.fillStyle="#eee4cb",C.fillRect(0,0,512,512),C.fillStyle="#534f42",C.font="38px serif",C.textAlign="center",C.textBaseline="middle";for(let F=1;F<=12;F++){let Y=F*Math.PI/6-Math.PI/2;C.fillText(String(F),256+Math.cos(Y)*190,256+Math.sin(Y)*190)}C.strokeStyle="#595247",C.lineWidth=9,C.lineCap="round",C.beginPath(),C.moveTo(150,195),C.lineTo(256,256),C.lineTo(330,148),C.stroke(),C.beginPath(),C.arc(256,256,10,0,Math.PI*2),C.fill()}),M=new Ue;M.name="\u6447\u6446\u6302\u949F",M.position.set(-1.99,1.97,-2.02),n.add(M),m("\u6302\u949F\u6728\u673A\u58F3",[.37,.69,.08],[0,-.12,-.028],r,M),m("\u6302\u949F\u4E0B\u90E8\u6DF1\u8272\u7A97\u53E3",[.25,.32,.012],[0,-.28,.019],s("#493c30"),M),u("\u949F\u9762",new Gn(.155,48),_,[0,.085,.02],M).castShadow=!1,u("\u6302\u949F\u5706\u6728\u7EBF\u811A",new Ct(.168,.014,8,48),r,[0,.085,.02],M);let S=new Ue;S.name="\u6302\u949F\u6447\u6446\u949F\u6446",S.position.set(0,-.065,.038),M.add(S),m("\u949F\u6446\u9EC4\u94DC\u6746",[.012,.23,.01],[0,-.115,0],h,S);let w=b("\u949F\u6446\u5706\u76D8",.058,.017,[0,-.24,0],h,S);w.rotation.x=Math.PI/2,M.userData.animate=(C,F)=>{S.rotation.z=F?0:Math.sin(C*2.8)*.14};let E=p(C=>{C.fillStyle="#ede2c9",C.fillRect(0,0,512,512),C.strokeStyle="#75865f",C.lineWidth=8,C.beginPath(),C.moveTo(256,265),C.lineTo(256,80),C.stroke();for(let F=0;F<5;F++)C.fillStyle=F%2?"#a7ac79":"#829366",C.beginPath(),C.ellipse(256+(F%2?40:-40),100+F*30,45,17,F%2?-.4:.4,0,Math.PI*2),C.fill();C.font="22px serif",C.fillStyle="#886f53";for(let F=0;F<4;F++)for(let Y=0;Y<7;Y++)C.fillText(String(F*7+Y+1),65+Y*58,330+F*40)});v(-2.01,1.17,-2.066,.29,.43,E);for(let C of[1.77,2.2]){m("\u5899\u4E0A\u6728\u7F6E\u7269\u67B6",[.95,.05,.23],[.3,C,-1.99],r);for(let F of[-.03,.63])m("\u7F6E\u7269\u67B6\u6258\u67B6",[.045,.12,.15],[F,C-.075,-2.02],r)}function A(C,F,Y,T=n,x=!1){for(let I=0;I<3;I++){let U=new Ue;if(U.position.set(C+(x?I*.07:0),F+(x?.14:I*.047+.025),Y),x||(U.position.x+=i),U.rotation.y=I*.04,T.add(U),x&&(U.name=["\u7530\u91CE\u7B14\u8BB0","\u751F\u6D3B\u968F\u7B14","\u5C0F\u732B\u6545\u4E8B"][I],U.userData.bookTitle=U.name),m("\u65E7\u4E66\u7EB8\u9875",x?[.06,.27,.14]:[.25,.043,.19],[0,0,0],a,U),!x)for(let se of[-.01,0,.01])m("\u65E7\u4E66\u7EB8\u9875\u7EC6\u7EBF",[.237,.001,.002],[0,se,-.096],o,U);let j=[l,d,f][I];if(x){for(let se of[-.033,.033])m("\u4E66\u5C01",[.006,.28,.15],[se,0,0],j,U);m("\u4E66\u810A",[.066,.28,.008],[0,0,.074],j,U)}else for(let se of[-.022,.022])m("\u4E66\u5C01",[.26,.006,.2],[0,se,0],j,U);if(x){let se=document.createElement("canvas");se.width=256,se.height=1024;let q=se.getContext("2d");q.fillStyle=["#768c60","#b36f57","#788f9a"][I],q.fillRect(0,0,256,1024),q.fillStyle="#f4ead5",q.font="bold 78px SimSun,serif",q.textAlign="center",q.textBaseline="middle",[...U.name].forEach((Ee,Ie)=>q.fillText(Ee,128,160+Ie*105)),q.fillRect(38,70,180,4),q.fillRect(38,944,180,4);let ie=new ct(se);ie.colorSpace=$e,u("\u4E66\u810A\u6807\u9898",new gt(.06,.262),new Fe({map:ie,roughness:.9}),[0,0,.079],U)}}}A(.42,1.795,-1.96,n,!0),A(-1.99,.835,.99);let R=p(C=>{C.fillStyle="#eee5d0",C.fillRect(0,0,512,512),C.strokeStyle="#718498",C.lineWidth=4;for(let F=0;F<5;F++){let Y=45+F*104;C.beginPath(),C.moveTo(Y,430),C.bezierCurveTo(Y-45,300,Y+55,170,Y,80),C.stroke();for(let T=0;T<4;T++)C.fillStyle="#8596a3",C.beginPath(),C.ellipse(Y+(T%2?23:-23),130+T*75,22,9,T%2?.6:-.6,0,Math.PI*2),C.fill()}for(let F of[22,490])C.strokeStyle="#708094",C.lineWidth=8,C.beginPath(),C.moveTo(0,F),C.lineTo(512,F),C.stroke()});R.roughness=.45;let N=[s("#819665"),s("#697e59"),s("#a0af7d")];N.forEach(C=>C.side=xt);let D=new zt;D.moveTo(0,0),D.bezierCurveTo(-.046,.02,-.055,.074,0,.125),D.bezierCurveTo(.055,.074,.046,.02,0,0);let B=new hs(D,12),O=B.attributes.position;for(let C=0;C<O.count;C++)O.setZ(C,Math.sin(O.getY(C)/.125*Math.PI)*.013-Math.abs(O.getX(C))*.22);B.computeVertexNormals();function H(C,F,Y,T,x=1){let I=new Ue;I.position.set(...F),I.rotation.set(.45+T%3*.22,Y,-.5+T%4*.3),I.scale.setScalar(x),C.add(I),u("\u5F27\u9762\u690D\u7269\u53F6\u7247",B,N[T%3],[0,0,0],I),u("\u53F6\u7247\u4E2D\u8109",new bt(new pt([new P(0,0,.001),new P(0,.06,.016),new P(0,.119,.003)]),8,.0018,4,!1),c,[0,0,0],I)}function G(C,F,Y,T=1,x=n){let I=new Ue;I.position.set(C,F,Y),I.scale.setScalar(T),x.add(I),u("\u9752\u82B1\u9676\u74F7\u82B1\u76C6",new Yt([new J(.069,0),new J(.086,.014),new J(.112,.07),new J(.114,.135),new J(.107,.17)],32),R,[0,0,0],I);let U=u("\u9676\u74F7\u76C6\u53E3",new Ct(.107,.009,8,32),R,[0,.17,0],I);U.rotation.x=Math.PI/2,b("\u76C6\u53E3\u6CE5\u571F",.098,.014,[0,.163,0],r,I);for(let z=0;z<7;z++){let j=z*2.4,se=.07+z*.006,q=.26+z%3*.06,ie=new P(Math.cos(j)*se,q,Math.sin(j)*se),Ee=new pt([new P(0,.17,0),new P(ie.x*.5,q*.8,ie.z*.5),ie]);u("\u7EFF\u690D\u679D\u5E72",new bt(Ee,6,.005,5,!1),c,[0,0,0],I);for(let Ie=0;Ie<3;Ie++)H(I,[ie.x*(.6+Ie*.2),ie.y-Ie*.048,ie.z*(.6+Ie*.2)],j+Ie*.8,z+Ie,.65+Ie*.1)}return I}G(-2.04+e,.698,-1.84+t,.8),G(.01,2.23,-1.96,.9),G(2.04,.935,-1.77,.9);let V=G(2.13,.025,2.01,.9);V.scale.y=1.8;let K=[];for(let C=0;C<11;C++){let F=[.02+Math.sin(C*.85)*.06,2.22-C*.043,-1.8];K.push(new P(...F)),H(n,F,C*.7,C,.48)}u("\u7F6E\u7269\u67B6\u5782\u85E4\u7EC6\u679D",new bt(new pt(K),28,.003,5,!1),c,[0,0,0]),v(.59,2.35,-1.87,.18,.24),v(1.95,1.075,-1.09,.17,.24),m("\u6728\u7EC4\u7EC7\u76D2",[.19,.12,.14],[.99,.994,-1.61],r);let Q=m("\u7EB8\u5DFE",[.09,.1,.008],[.99,1.09,-1.61],a);Q.rotation.z=.25,m("\u7EB8\u5DFE\u76D2\u9876\u69FD",[.1,.004,.02],[.99,1.056,-1.61],r),n.add(Hl());let he=n.children.length,Z=n.children.length;b("\u53F0\u706F\u5E95\u5EA7",.075,.024,[-1.98,.846,.37],l);let ge=new pt([new P(-1.98,.86,.37),new P(-1.98,1.13,.4),new P(-1.98,1.16,.51)]);u("\u53F0\u706F\u5F2F\u6746",new bt(ge,16,.009,8,!1),h,[0,0,0]),l.side=xt;let we=u("\u7EFF\u8272\u53F0\u706F\u7F69",new nt(.035,.09,.08,32,1,!0),l,[-1.98,1.15,.53]);we.rotation.x=-.55;let Ve=u("\u53F0\u706F\u7C73\u767D\u5185\u886C",new nt(.033,.087,.077,32,1,!0),a,[-1.98,1.149,.53]);Ve.rotation.x=-.55,a.side=xt;let De=g("\u53F0\u706F\u5C0F\u706F\u6CE1",.017,[-1.98,1.12,.546],a);De.castShadow=!1;let $=n.children.slice(Z),le=new P(-1.98,.834,.37);for(let C of $)C.position.sub(le).multiplyScalar(1.4).add(le),C.scale.multiplyScalar(1.4);let oe=u("\u53F0\u706F\u9EC4\u94DC\u5305\u8FB9",new Ct(.125,.004,8,32),h,[-1.98,1.24,.6]);oe.rotation.x=Math.PI/2-.55,b("\u9752\u82B1\u7B14\u7B52",.033,.08,[-1.94,.877,.71],R);for(let C=0;C<4;C++){let F=b("\u94C5\u7B14",.004,.14,[-1.955+C*.009,.927,.71],C%2?r:l);F.rotation.z=(C-1.5)*.08}m("\u6253\u5F00\u7684\u8BB0\u4E8B\u672C",[.26,.012,.17],[-1.95,.843,1.48],a),m("\u8BB0\u4E8B\u672C\u4E2D\u7F1D",[.002,.003,.165],[-1.95,.851,1.48],r);let _e=s("#ada791");for(let C=0;C<5;C++)for(let F of[-.065,.065])m("\u8BB0\u4E8B\u672C\u7EC6\u6A2A\u7EBF",[.095,.001,.001],[-1.95+F,.85,1.43+C*.023],_e);b("\u74F7\u676F",.034,.066,[-1.95,.869,1.76],o),b("\u676F\u5185\u8336\u6C34",.026,.004,[-1.95,.904,1.76],r);let Me=u("\u74F7\u676F\u628A\u624B",new Ct(.023,.006,8,16),o,[-1.906,.87,1.76]);Me.rotation.y=Math.PI/2;for(let C of n.children.slice(he))C.position.x+=i,/笔筒|铅笔/.test(C.name)&&(C.position.z-=.09),/记事本/.test(C.name)&&(C.position.z-=.25),/瓷杯|杯内茶水/.test(C.name)&&(C.position.z-=.94);let ee=Bl();ee.position.x+=e,ee.position.z+=t,n.add(ee);let Se=p(C=>{C.fillStyle="#e3d6ba",C.fillRect(0,0,512,512);for(let F=0;F<512;F+=64)C.fillStyle="rgba(118,143,120,.26)",C.fillRect(F,0,22,512),C.fillRect(0,F,512,22)}),ve=Un("03-vintage-floral-fabric.png",{repeat:[.45,.45],roughness:1}),ce=p(C=>{C.fillStyle="#b87966",C.fillRect(0,0,512,512),C.fillStyle="#e4c9ad";for(let F=30;F<512;F+=95)for(let Y=35;Y<512;Y+=110){for(let T=0;T<5;T++){let x=T/5*Math.PI*2;C.beginPath(),C.ellipse(Y+Math.cos(x)*9,F+Math.sin(x)*9,8,4,x,0,Math.PI*2),C.fill()}C.beginPath(),C.ellipse(Y+20,F+20,10,4,-.5,0,Math.PI*2),C.fill()}});for(let[C,F]of[[-.32,Se],[.42,ve],[1.24,ce]]){let Y=u("\u6728\u957F\u6905\u9760\u6795",new Ut(.14,.37,.4,6,.055),F,[2.09,.795,C]);Y.rotation.z=-.13}m("\u957F\u6905\u642D\u6BEF",[.58,.018,.47],[2.02,.582,1.27],Se),m("\u5782\u4E0B\u7684\u6BEF\u89D2",[.018,.33,.47],[1.735,.415,1.27],Se);for(let C=0;C<18;C++){let F=b("\u642D\u6BEF\u6D41\u82CF",.002,.058,[1.735,.222,1.05+C*.025],a);F.rotation.z=.08*Math.sin(C)}let de=Un("03-vintage-floral-fabric.png",{repeat:[.5,1.8],roughness:1,mirrored:!0});de.side=xt;let fe=b("\u7A97\u5E18\u6728\u6746",.017,2.15,[2.34,2.28,-.3],r);fe.rotation.x=Math.PI/2;for(let C of[-1.395,.795])g("\u6728\u7A97\u5E18\u6746\u7AEF\u5934",.03,[2.34,2.28,C],r);for(let C of[-1.15,.55]){let F=new gt(.29,1.07,24,12),Y=F.attributes.position;for(let x=0;x<Y.count;x++)Y.setZ(x,Math.sin(Y.getX(x)/.29*Math.PI*8)*(.013+.008*(.535-Y.getY(x))/1.07));F.computeVertexNormals();let T=u("\u788E\u82B1\u8936\u76B1\u7A97\u5E18",F,de,[2.392,1.69,C]);T.rotation.y=-Math.PI/2;for(let x of[-.1,0,.1]){let I=u("\u7A97\u5E18\u6302\u73AF",new Ct(.024,.005,6,12),h,[2.34,2.25,C+x]);I.rotation.y=Math.PI/2}}let xe=document.createElement("canvas");xe.width=512,xe.height=256;let me=xe.getContext("2d");me.clearRect(0,0,512,256),me.strokeStyle="#eadfc8",me.lineWidth=2.2;for(let C=0;C<256;C+=32)for(let F=0;F<512;F+=32)me.beginPath(),me.moveTo(F+16,C),me.lineTo(F+32,C+16),me.lineTo(F+16,C+32),me.lineTo(F,C+16),me.closePath(),me.stroke(),me.beginPath(),me.arc(F+16,C+16,7,0,Math.PI*2),me.stroke();let pe=new ct(xe);pe.colorSpace=$e,pe.anisotropy=8;let ye=new Fe({map:pe,transparent:!0,alphaTest:.25,side:xt,roughness:1}),Te=u("\u7535\u89C6\u67DC\u7C73\u767D\u94A9\u82B1\u57AB",new gt(1.78,.47),ye,[-1.3,.697,-1.77]);Te.rotation.x=-Math.PI/2,Te.castShadow=!1;let Ae=u("\u7535\u89C6\u67DC\u5782\u4E0B\u7684\u94A9\u82B1\u8FB9",new gt(1.77,.06),ye,[-1.3,.66,-1.484]);Ae.castShadow=!1;for(let C of[Te,Ae])C.position.x+=e,C.position.z+=t;return n}function tf({sofa:i,scene:e,camera:t,renderer:n,host:s,canInteract:r=()=>!0}){let o=n.domElement,a=new vn,l=new J,c=i.position.x,d=.26,f=!1,h=null,u=null,m=document.querySelector("#scene-status"),b=document.createElement("button");b.className="sofa-hit-target",b.type="button";let g=()=>{let w=f?"\u63A8\u56DE\u6C99\u53D1":"\u62C9\u51FA\u6C99\u53D1";b.setAttribute("aria-label",w),b.setAttribute("aria-pressed",String(f)),b.title=w};g(),s.appendChild(b);let p=()=>{h||!r()||(f=!f,h={start:performance.now(),from:i.position.x,to:c+(f?d:0)},b.disabled=!0)},y=w=>{let E=o.getBoundingClientRect();l.set((w.clientX-E.left)/E.width*2-1,-(w.clientY-E.top)/E.height*2+1),a.setFromCamera(l,t);let R=a.intersectObjects(e.children,!0)[0]?.object;for(;R;){if(R===i)return!0;R=R.parent}return!1},v=w=>{w.button===0&&(u={x:w.clientX,y:w.clientY,id:w.pointerId,onSofa:y(w)})},_=w=>{u&&u.id===w.pointerId&&u.onSofa&&Math.hypot(w.clientX-u.x,w.clientY-u.y)<5&&y(w)&&p(),u=null},M=()=>{u=null};b.addEventListener("click",p),o.addEventListener("pointerdown",v),o.addEventListener("pointerup",_),o.addEventListener("pointercancel",M);let S=new P;return{update(w,E,A){if(h){let R=matchMedia("(prefers-reduced-motion: reduce)").matches?1:Math.min(1,(w-h.start)/750),N=R*R*(3-2*R);i.position.x=h.from+(h.to-h.from)*N,R===1&&(h=null,b.disabled=!1,g(),m&&(m.textContent=f?"\u53C8\u8981\u5F00\u59CB\u5B66\u4E60\u4E86\u5417":"\u6C99\u53D1\u63A8\u56DE\u684C\u4E0B\u4E86\u3002"))}i.updateWorldMatrix(!0,!1),S.set(0,.84,.24),i.localToWorld(S),S.project(t),b.style.left=`${(S.x*.5+.5)*E}px`,b.style.top=`${(-S.y*.5+.5)*A}px`,b.hidden=!r()||S.z>1||S.z<-1},dispose(){b.removeEventListener("click",p),b.remove(),o.removeEventListener("pointerdown",v),o.removeEventListener("pointerup",_),o.removeEventListener("pointercancel",M)}}}function nf({room:i,scene:e,dayLights:t,stage:n}){let s=new Ue;s.name="\u591C\u95F4\u706F\u5177\u4E0E\u706B\u76C6",i.add(s);let r=new Fe({color:"#786652",roughness:.65,metalness:.45}),o=new Fe({color:"#d7dacb",roughness:.8}),a=()=>new Fe({color:"#f1f0dc",roughness:.65,emissive:"#f5f5e9",emissiveIntensity:0}),l=[],c=(pe,ye,Te,Ae,C=s)=>{let F=new Xe(ye,Te);return F.name=pe,F.position.set(...Ae),F.castShadow=F.receiveShadow=!0,C.add(F),F};c("\u6302\u753B\u5C04\u706F\u58C1\u5EA7",new Ut(.09,.045,.065,2,.008),r,[-1.07,2.43,-2.035]);let d=new Ue;d.position.set(-1.07,2.36,-1.85);let f=new P(-1.07,1.94,-2.044),h=d.position.clone().sub(f).normalize();d.quaternion.setFromUnitVectors(new P(0,1,0),h),s.add(d);let u=d.position.clone().addScaledVector(h,.058),m=[new P(-1.07,2.43,-2.002),new P(-1.07,2.435,-1.93),new P(-1.07,2.435,u.z),u];c("\u753B\u706F\u8FDE\u7EED\u5F2F\u66F2\u652F\u81C2",new bt(new pt(m),24,.009,10,!1),r,[0,0,0]),c("\u753B\u706F\u8F6C\u8F74\u8FDE\u63A5\u7403",new Rt(.017,16,12),r,u.toArray());let b=c("\u753B\u706F\u6A2A\u5411\u8F6C\u8F74",new nt(.015,.015,.057,16),r,u.toArray());b.rotation.z=Math.PI/2;for(let pe of[-.031,.031]){let ye=c("\u753B\u706F\u8F6C\u8F74\u87BA\u5E3D",new nt(.008,.008,.006,12),r,[u.x+pe,u.y,u.z]);ye.rotation.z=Math.PI/2}c("\u767D\u8272\u5706\u7B52\u753B\u706F",new nt(.034,.034,.105,24),o,[0,0,0],d);let g=a();l.push(g),c("\u753B\u706F\u53D1\u5149\u9762",new Gn(.027,24),g,[0,-.054,0],d).rotation.x=Math.PI/2;let p=new Kr("#f5f6ef",0,3,.68,.72,2);p.position.copy(d.position).addScaledVector(h,-.061),p.target.position.copy(f),p.castShadow=!0,p.shadow.mapSize.set(512,512),p.shadow.bias=-3e-4,e.add(p,p.target),c("\u7F6E\u7269\u67B6\u5C0F\u706F\u5E95\u5EA7",new nt(.057,.065,.02,24),r,[.08,1.8,-1.94]);let y=a();l.push(y),c("\u7F6E\u7269\u67B6\u4E73\u767D\u5C0F\u706F",new Fr(.039,.055,4,16),y,[.08,1.865,-1.94]);let v=new Zt("#f1f3e7",0,3,2);v.position.set(.08,1.91,-1.82),e.add(v);let _=i.getObjectByName("\u53F0\u706F\u5C0F\u706F\u6CE1");_.material=_.material.clone(),_.material.emissive.set("#f4f6ed"),_.material.emissiveIntensity=0,l.push(_.material);let M=new Zt("#f6f7f0",0,3,2);M.position.set(-2.16,1.25,.62),e.add(M);let S=new Zt("#eff3f2",0,7,2);S.position.set(0,2.46,.1),e.add(S),c("\u7A97\u4E0A\u706F\u7BA1\u767D\u8272\u706F\u67B6",new Ut(.075,.09,1.88,2,.014),o,[2.388,2.39,-.3]);let w=a(),E=c("\u7A97\u4E0A\u4E73\u767D\u957F\u706F\u7BA1",new nt(.025,.025,1.74,32),w,[2.333,2.385,-.3]);E.rotation.x=Math.PI/2,E.castShadow=!1;for(let pe of[-1.19,.59]){let ye=c("\u706F\u7BA1\u4E24\u7AEF\u63A5\u5934",new nt(.029,.029,.055,16),r,[2.333,2.385,pe]);ye.rotation.x=Math.PI/2}let A=[];for(let pe of[-.8,.2]){let ye=new Zt("#f4f1dc",0,3.5,2);ye.position.set(2.15,2.32,pe),e.add(ye),A.push(ye)}let R=new Ue;R.name="\u957F\u6905\u524D\u7684\u706B\u76C6",R.position.set(1.25,.027,.94),s.add(R);let N=new Fe({color:"#9b8566",roughness:1});c("\u706B\u76C6\u9694\u70ED\u5706\u57AB",new nt(.355,.355,.018,48),N,[0,.009,0],R);for(let pe=0;pe<6;pe++){let ye=c("\u5706\u57AB\u7F16\u7EC7\u7EB9",new Ct(.12+pe*.036,.0035,5,48),r,[0,.02,0],R);ye.rotation.x=Math.PI/2}for(let pe=0;pe<3;pe++){let ye=pe*Math.PI*2/3;c("\u706B\u76C6\u77ED\u811A",new nt(.017,.022,.1,12),r,[Math.cos(ye)*.18,.067,Math.sin(ye)*.18],R)}c("\u94DC\u8272\u70AD\u76C6",new Yt([new J(.14,.11),new J(.19,.1),new J(.24,.14),new J(.27,.23),new J(.26,.245),new J(.235,.18),new J(.13,.13)],48),r,[0,0,0],R);let D=c("\u70AD\u76C6\u5377\u8FB9",new Ct(.265,.014,8,48),r,[0,.236,0],R);D.rotation.x=Math.PI/2;let B=[];for(let pe=0;pe<11;pe++){let ye=pe*2.4,Te=pe<3?.07:.16,Ae=new Fe({color:"#3d3832",roughness:.98,emissive:"#ba542c",emissiveIntensity:0});B.push(Ae);let C=c("\u706B\u76C6\u91CC\u7684\u70AD\u5757",new cs(.05,1),Ae,[Math.cos(ye)*Te,.208,Math.sin(ye)*Te],R);C.scale.set(1.1,.75,1),C.rotation.set(pe*.4,pe*.8,pe*.1)}let O=new Ue;O.name="\u706B\u76C6\u8F7B\u7130",O.position.y=.22,R.add(O);let H=new Lt({color:"#e7a252",transparent:!0,opacity:.8,depthWrite:!1});for(let pe=0;pe<5;pe++){let ye=pe*2.4,Te=[new J(0,0),new J(.02,.015),new J(.014,.06),new J(0,.11)];c("\u70AD\u706B\u5C0F\u706B\u82D7",new Yt(Te,12),H,[Math.cos(ye)*.12,0,Math.sin(ye)*.12],O)}let G=new Zt("#efb17a",0,3.5,2);G.position.set(1.25,.36,.94),e.add(G);let V=document.createElement("canvas");V.width=V.height=64;let K=V.getContext("2d"),Q=K.createRadialGradient(32,32,0,32,32,32);Q.addColorStop(0,"#fff8d4"),Q.addColorStop(.22,"#ffc76b"),Q.addColorStop(1,"#ff8a3500"),K.fillStyle=Q,K.fillRect(0,0,64,64);let he=new ct(V);he.colorSpace=$e;let Z=new ut;Z.setAttribute("position",new Qe(new Float32Array(216),3));let ge=new Js({map:he,color:"#ffb657",size:.028,transparent:!0,opacity:0,depthWrite:!1,blending:In,toneMapped:!1}),we=new Dr(Z,ge);we.name="\u706B\u76C6\u4E0A\u5347\u7684\u706B\u661F",we.userData.ignoreInteraction=!0,we.frustumCulled=!1,R.add(we);let Ve=-1/0,De=Un("night-window-watercolor.png",{folder:"decor-v1"});De.map.wrapS=De.map.wrapT=sn;let $=new Lt({map:De.map,transparent:!0,opacity:0,depthWrite:!1});De.dispose();let le=c("\u7A97\u5916\u591C\u666F",new gt(1.9,.98),$,[2.458,1.64,-.3]);le.rotation.y=-Math.PI/2,le.castShadow=!1;let oe=!1,_e=0,Me=null,ee="normal",Se=0,ve=Array(7).fill(1),ce=0,de=document.querySelector("#night-toggle");de.hidden=!1;let fe=()=>{de.textContent=oe?"\u770B\u767D\u5929":"\u770B\u591C\u665A",de.setAttribute("aria-pressed",String(oe)),n.classList.toggle("is-night",oe)};fe();let xe=pe=>{ee="normal",de.disabled=!1,oe=pe,Me={start:performance.now(),from:_e,to:oe?1:0},fe()},me=()=>xe(!oe);return de.addEventListener("click",me),{setNight:xe,setAtmosphereLighting(pe){ce=at.clamp(pe,0,1)},get busy(){return ee!=="normal"},stoke(pe){Ve=pe},prepareBirthday(){xe(!0),ee="candles",ve.fill(0),de.disabled=!0},beginCelebration(pe){oe=!0,_e=1,Me=null,ee="sequence",Se=pe,ve.fill(0),de.disabled=!0,fe()},get celebrating(){return ee==="sequence"},get carouselAmount(){return Math.max(_e,ce*(1-_e))*ve[3]},get night(){return oe},get amount(){return _e},update(pe,ye){if(Me){let I=ye?1:Math.min(1,(pe-Me.start)/1400),U=I*I*(3-2*I);_e=at.lerp(Me.from,Me.to,U),I===1&&(Me=null)}ee==="normal"?ve.fill(1):ee==="candles"?ve.fill(0):(ve=ve.map((I,U)=>{let z=ye?1:at.clamp((pe-Se-1300-U*800)/650,0,1);return z*z*(3-2*z)}),ve[6]===1&&(ee="normal",de.disabled=!1));let Te=ee==="normal"?1:ee==="candles"?.45:ve[6];t.hemi.intensity=at.lerp(1.15,.015+.225*Te,_e),t.sun.intensity=at.lerp(1.85,.002+.053*Te,_e),t.fill.intensity=at.lerp(.55,.005+.115*Te,_e),t.ambient.intensity=at.lerp(.12,.003+.117*Te,_e);let Ae=Math.max(_e,ce*(1-_e));p.intensity=Ae*ve[4]*2.5,v.intensity=Ae*ve[2]*.9,M.intensity=Ae*ve[1]*1,S.intensity=Ae*ve[6]*3,w.emissiveIntensity=Ae*ve[5]*2.5;for(let I of A)I.intensity=Ae*ve[5]*.75;g.emissiveIntensity=Ae*ve[4]*1.7,y.emissiveIntensity=Ae*ve[2]*1.7,_.material.emissiveIntensity=Ae*ve[1]*1.7;let C=pe-Ve,F=at.clamp(C/250,0,1)*at.clamp(1-(C-4e3)/1800,0,1),Y=Math.max(_e*ve[0],F);$.opacity=_e;for(let I of B)I.emissiveIntensity=Y*(1.2+F*.9);O.visible=Y>.01,H.opacity=Math.min(1,Y*.8+F*.2),O.rotation.y=ye?0:Math.sin(pe*.0014)*.04,O.scale.y=(1+F*1.4)*(ye?1:1+Math.sin(pe*.003)*.07),G.intensity=Y*(1+F*.35)*(ye?1:1+Math.sin(pe*.003)*.08),ge.opacity=F,we.visible=F>.001;let T=Z.attributes.position,x=Number.isFinite(C)?C:0;for(let I=0;I<72;I++){let U=ye?I%12/12:((x/1600+I*.071)%1+1)%1,z=I*2.399;T.setXYZ(I,Math.cos(z)*(.04+U*.07),.24+U*.7,Math.sin(z)*(.04+U*.07))}T.needsUpdate=!0},dispose(){de.removeEventListener("click",me),de.hidden=!0,de.disabled=!1}}}function wh(i,e,t){let r=t==="night",o=t==="blue",a=t==="rain",l=a||t==="overcast",c=t==="sunset",d=p=>"#"+p.getHexString();i.clearRect(0,0,1024,512);let f=i.createLinearGradient(0,0,0,512);f.addColorStop(0,d(e.sky[0])),f.addColorStop(.57,d(e.sky[1])),f.addColorStop(1,d(e.hills[1])),i.fillStyle=f,i.fillRect(0,0,1024,512);let h=(p,y,v,_,M)=>{i.fillStyle=M,i.beginPath(),i.ellipse(p,y,v,_,0,0,Math.PI*2),i.fill()};if(r||o){for(let p=0;p<48;p++){let y=31+p*193%968,v=20+p*47%175;h(y,v,p%7===0?1.5:.8,p%7===0?1.5:.8,r?"#fff2cba8":"#eef0d35a")}h(760,86,23,23,r?"#ffefc7":"#e8e9d691"),h(770,79,22,22,d(e.sky[0]))}else if(!l){let p=c?745:188,y=c?217:98,v=i.createRadialGradient(p,y,0,p,y,155);v.addColorStop(0,c?"#ffebb9ac":"#fffbe189"),v.addColorStop(1,"#fff2ca00"),i.fillStyle=v,i.fillRect(p-155,y-155,310,310),h(p,y,c?25:20,c?25:20,"#fff2c7b8")}for(let p=0;p<7;p++){let y=80+p*157,v=l?80+p%3*25:64+p%3*38;h(y,v,95+p%3*22,l?26:12,r?"#879aae12":a?"#506b7821":l?"#f6f2e144":"#fff8e33b"),h(y+35,v-9,67,18,r?"#879aae0d":"#f7f1df24")}[[[0,298],[90,253],[174,267],[247,202],[320,241],[403,214],[487,265],[573,230],[681,259],[789,207],[883,246],[960,215],[1024,250]],[[0,339],[112,294],[223,313],[337,270],[448,302],[553,265],[672,302],[780,282],[890,313],[1024,267]],[[0,369],[100,347],[213,359],[321,320],[427,342],[535,319],[648,353],[760,322],[879,350],[1024,316]]].forEach((p,y)=>{i.fillStyle=d(e.hills[y]),i.beginPath(),i.moveTo(0,512),i.lineTo(...p[0]);for(let v=1;v<p.length;v++){let _=p[v-1],M=p[v];i.quadraticCurveTo(_[0],_[1],(_[0]+M[0])/2,(_[1]+M[1])/2)}i.lineTo(1024,p.at(-1)[1]),i.lineTo(1024,512),i.fill()});let m=i.createLinearGradient(0,270,0,400);m.addColorStop(0,"#efe7d400"),m.addColorStop(.46,a?"#bacdd14b":r?"#9aaeb414":"#efe7d437"),m.addColorStop(1,"#efe7d400"),i.fillStyle=m,i.fillRect(0,270,1024,130);let b=r?["#425c56","#4d655b","#3a544d"]:o?["#789481","#8a9f86","#647f73"]:c?["#b6ad69","#c2b572","#929d66"]:a?["#829e83","#93a58a","#6e8f79"]:["#aeb97c","#bcc391","#8ca570"];for(let p=0;p<6;p++)i.fillStyle=b[p%3],i.beginPath(),i.moveTo(0,382+p*24),i.bezierCurveTo(235,342+p*26,544,412+p*13,1024,345+p*31),i.lineTo(1024,392+p*31),i.bezierCurveTo(570,459+p*10,220,387+p*26,0,405+p*24),i.fill(),i.strokeStyle=r?"#c8d8a519":"#ede7b64b",i.lineWidth=1.2,i.stroke();i.fillStyle=r?"#809dab":o?"#acc3ca":c?"#e6c9a0":a?"#acbfc1":"#c9d7cd",i.beginPath(),i.moveTo(572,341),i.bezierCurveTo(442,366,678,396,556,434),i.bezierCurveTo(487,457,457,480,466,512),i.lineTo(574,512),i.bezierCurveTo(542,475,620,460,638,434),i.bezierCurveTo(700,390,490,362,583,341),i.fill(),i.strokeStyle=r?"#c4dae14a":"#f7eddc8c",i.lineWidth=1.4;for(let p=0;p<10;p++)i.beginPath(),i.moveTo(535+p%3*18,404+p*10),i.lineTo(558+p%3*18,404+p*10),i.stroke();let g=(p,y,v)=>{i.strokeStyle=r?"#3c4844":"#6f7358",i.lineWidth=v*.07,i.beginPath(),i.moveTo(p,y),i.lineTo(p-2,y-v*.8),i.stroke();for(let _=0;_<13;_++){let M=_*2.4,S=_%4/4*v*.28;h(p+Math.cos(M)*S,y-v*.65+Math.sin(M)*S,v*(.14+_%3*.025),v*.15,r?"#354f49b0":o?"#516f66a0":c?"#718357ad":a?"#527c67a3":"#648759a0")}};for(let p=0;p<17;p++)g(42+p*59+p%3*8,350+p%4*7,23+p%5*5);for(let p=0;p<5;p++){let y=704+p*32,v=334+p%2*12;i.fillStyle=r?"#7d8176":c?"#e7d4b0":"#d9dac5",i.fillRect(y,v,28,22),i.fillStyle=r?"#46525a":"#7c8175",i.beginPath(),i.moveTo(y-4,v),i.lineTo(y+13,v-12),i.lineTo(y+32,v),i.fill(),i.fillStyle=r||o?"#f2cb88":"#8b9d95",i.fillRect(y+7,v+7,5,6),i.fillRect(y+18,v+7,5,6)}i.strokeStyle=r?"#788c85":"#9b9d7a",i.lineWidth=4,i.beginPath(),i.moveTo(549,375),i.quadraticCurveTo(583,364,614,378),i.stroke(),i.lineWidth=1.6;for(let p=0;p<6;p++)i.beginPath(),i.moveTo(552+p*12,372),i.lineTo(552+p*12,362+p*.5),i.stroke();g(51,509,140),g(986,508,154),g(935,486,100),i.save();for(let p=0;p<2200;p++){let y=p*173.71%1024,v=p*97.37%512;i.fillStyle=p%2?"#fff6dc0b":"#394d4209",i.fillRect(y,v,1+p%3,1+p%2)}if(i.restore(),a){let p=i.createLinearGradient(0,0,0,512);p.addColorStop(0,"#819ba52b"),p.addColorStop(1,"#b0c4c50a"),i.fillStyle=p,i.fillRect(0,0,1024,512)}}var gs={sunny:{label:"\u6674\u5929",sky:["#d9e7e1","#eeeade"],hills:["#bdcbb7","#a7bba4","#91a889"],colors:["#edf1ed","#fff8ec","#e9efed","#e9ebec"],intensity:[1.15,1.85,.55,.12],sun:[6,6,1],target:[0,0,0],lamps:0,rain:0},blue:{label:"\u84DD\u8C03\u65F6\u523B",sky:["#355b88","#a7baca"],hills:["#647f8b","#526d7d","#425d68"],colors:["#98bce1","#bfd1eb","#89b5d2","#c8d9e8"],intensity:[.55,.12,.32,.12],sun:[6,4,-1],target:[0,0,0],lamps:.62,rain:0},sunset:{label:"\u5915\u9633\u65F6\u523B",sky:["#dd986d","#f3d8a2"],hills:["#b5a780","#9a9b74","#828963"],colors:["#ead0b4","#ffba70","#e9c9ae","#efdac0"],intensity:[.82,1.6,.38,.15],sun:[6,2.7,-.72],target:[0,.8,0],lamps:.12,rain:0},overcast:{label:"\u9634\u5929",sky:["#9eabb1","#d4d8d1"],hills:["#a5b3a7","#8d9f94","#798d80"],colors:["#c7d2d7","#d7dce0","#cbd8da","#e1e5df"],intensity:[.9,.3,.48,.2],sun:[6,6,1],target:[0,0,0],lamps:.08,rain:0},night:{label:"\u591C\u665A",sky:["#182f49","#738893"],hills:["#536f79","#46646b","#35554f"],colors:["#edf1ed","#fff8ec","#e9efed","#e9ebec"],intensity:[1.15,1.85,.55,.12],sun:[6,6,1],target:[0,0,0],lamps:1,rain:0},rain:{label:"\u96E8\u5929",sky:["#758a97","#adb9bb"],hills:["#8eaaa0","#768f86","#5e7c72"],colors:["#a3bac8","#bdcbd1","#b2cbd2","#d1dcdb"],intensity:[.65,.12,.38,.18],sun:[6,6,1],target:[0,0,0],lamps:.35,rain:1}};function sf({room:i,stage:e,dayLights:t,night:n}){let s=i.getObjectByName("\u957F\u6905\u4E0A\u65B9\u7684\u7A97\u666F"),r=s.material,o=r.map,a=r.color.clone(),l=document.createElement("canvas");l.width=1024,l.height=512;let c=l.getContext("2d"),d=new ct(l);d.colorSpace=$e,d.anisotropy=4,r.map=d,r.color.set("#ffffff"),r.needsUpdate=!0;let f=new Ue;f.name="\u7A97\u5916\u5929\u6C14\u6548\u679C",i.add(f);let h=new ut;h.setAttribute("position",new Qe(new Float32Array(576),3));let u=new Ui({color:"#e4eef0",transparent:!0,opacity:0,depthWrite:!1}),m=new as(h,u);m.name="\u4EC5\u5728\u7A97\u5916\u4E0B\u843D\u7684\u96E8\u4E1D",m.userData.ignoreInteraction=!0,m.frustumCulled=!1,f.add(m);let b=document.createElement("div");b.className="atmosphere-control";let g=document.querySelector("#night-toggle");g.hidden=!0;let p={sunny:"M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5",blue:"M19 15a7 7 0 0 1-10-10 7 7 0 1 0 10 10M17 3v4m-2-2h4",sunset:"M3 16h18M5 20h14M7 13a5 5 0 0 1 10 0M12 2v3M4 6l2 2m12 0 2-2",overcast:"M7 18h11a4 4 0 0 0 0-8h-1a6 6 0 0 0-11-2 5 5 0 0 0 1 10",rain:"M6 14h12a4 4 0 0 0 0-8h-1a6 6 0 0 0-11-1 5 5 0 0 0 0 9M8 17l-1 3m6-3-1 3m6-3-1 3",night:"M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10M18 3v4m-2-2h4"},y={sunny:"\u6674\u7A7A \xB7 \u7530\u91CE\u5FAE\u5149",blue:"\u66AE\u8272 \xB7 \u706F\u706B\u521D\u4E0A",sunset:"\u665A\u971E \xB7 \u91D1\u8272\u5C71\u91CE",overcast:"\u8584\u4E91 \xB7 \u67D4\u548C\u5929\u5149",rain:"\u7EC6\u96E8 \xB7 \u5C71\u95F4\u96FE\u6C14",night:"\u6708\u8272 \xB7 \u4E07\u5BB6\u706F\u706B"},v=ee=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${p[ee]}"/></svg>`,_=document.createElement("button");_.type="button",_.className="atmosphere-trigger",_.setAttribute("aria-haspopup","listbox"),_.setAttribute("aria-expanded","false"),_.setAttribute("aria-controls","room-atmosphere-options");let M=document.createElement("div");M.className="atmosphere-panel",M.hidden=!0;let S=document.createElement("p");S.className="atmosphere-panel-title",S.textContent="\u6362\u4E00\u6BB5\u7A97\u5916\u65F6\u5149";let w=document.createElement("div");w.className="atmosphere-options",w.id="room-atmosphere-options",w.setAttribute("role","listbox"),w.setAttribute("aria-label","\u7A97\u5916\u65F6\u5149\u4E0E\u5929\u6C14");let E=new Map;for(let ee of["sunny","blue","sunset","overcast","rain","night"]){let Se=document.createElement("button");Se.type="button",Se.className="atmosphere-option",Se.dataset.mode=ee,Se.setAttribute("role","option"),Se.setAttribute("aria-label",gs[ee].label),Se.innerHTML=v(ee)+`<span><strong>${gs[ee].label}</strong><small>${y[ee]}</small></span><span class="atmosphere-check" aria-hidden="true">\u2713</span>`,Se.addEventListener("click",()=>Me(ee)),E.set(ee,Se),w.append(Se)}M.append(S,w),b.append(_,M),e.append(b);let A=new AbortController,R=(ee,Se,ve)=>ee.addEventListener(Se,ve,{signal:A.signal}),N="sunny",D=(ee,Se=!1)=>{M.hidden=!ee,_.setAttribute("aria-expanded",String(ee)),ee&&Se&&E.get(N).focus()},B=ee=>{N=ee,_.innerHTML=v(ee)+`<span><small>\u7A97\u5916\u65F6\u5149</small><strong>${gs[ee].label}</strong></span><svg class="atmosphere-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 10 4 4 4-4"/></svg>`,_.setAttribute("aria-label",`\u7A97\u5916\u65F6\u5149\uFF1A${gs[ee].label}`);for(let[Se,ve]of E)ve.setAttribute("aria-selected",String(Se===ee)),ve.tabIndex=Se===ee?0:-1};B("sunny"),R(_,"click",()=>D(M.hidden)),R(document,"pointerdown",ee=>{b.contains(ee.target)||D(!1)}),R(b,"focusout",ee=>{b.contains(ee.relatedTarget)||D(!1)}),R(b,"keydown",ee=>{if(ee.key==="Escape")ee.preventDefault(),ee.stopPropagation(),D(!1),_.focus();else if(["ArrowDown","ArrowUp","Home","End"].includes(ee.key)){ee.preventDefault();let Se=[...E.values()];if(M.hidden){D(!0,!0);return}let ve=Se.indexOf(document.activeElement);ve=ee.key==="Home"?0:ee.key==="End"?Se.length-1:(ve+(ee.key==="ArrowUp"?-1:1)+Se.length)%Se.length,Se[ve].focus()}});let O=["hemi","sun","fill","ambient"],H=O.map(ee=>t[ee]),G=gs.sunny,V=G.colors.map(ee=>new je(ee)),K=ee=>({sky:ee.sky.map(Se=>new je(Se)),hills:ee.hills.map(Se=>new je(Se)),colors:ee.colors.map(Se=>new je(Se)),intensity:ee.intensity.slice(),sun:new P(...ee.sun),target:new P(...ee.target),lamps:ee.lamps,rain:ee.rain}),Q=ee=>({sky:ee.sky.map(Se=>Se.clone()),hills:ee.hills.map(Se=>Se.clone()),colors:ee.colors.map(Se=>Se.clone()),intensity:ee.intensity.slice(),sun:ee.sun.clone(),target:ee.target.clone(),lamps:ee.lamps,rain:ee.rain}),he=K(G),Z="sunny",ge=null,we=-1/0,Ve=!1,De=ee=>{wh(c,ee,Z),d.needsUpdate=!0},$=i.getObjectByName("\u7A97\u5916\u591C\u666F").material,le=$.map,oe=document.createElement("canvas");oe.width=1024,oe.height=512,wh(oe.getContext("2d"),K(gs.night),"night");let _e=new ct(oe);_e.colorSpace=$e,_e.anisotropy=4,$.map=_e,$.needsUpdate=!0;function Me(ee){n.busy||(Z=ee,ge={start:performance.now(),from:Q(he),to:K(gs[ee])},n.setNight(ee==="night"),e.dataset.atmosphere=ee,we=-1/0,B(ee),D(!1),_.focus())}return e.dataset.atmosphere=Z,De(he),{get mode(){return n.night?"night":Z},update(ee,Se){if(Ve)return;_.disabled=n.busy,n.busy&&D(!1);let ve=n.night?"night":Z;if(N!==ve&&B(ve),ge){let xe=Se?1:Math.min(1,(ee-ge.start)/1300),me=xe*xe*(3-2*xe),pe=ge.from,ye=ge.to;for(let Te of["sky","hills","colors"])for(let Ae=0;Ae<he[Te].length;Ae++)he[Te][Ae].copy(pe[Te][Ae]).lerp(ye[Te][Ae],me);he.intensity=he.intensity.map((Te,Ae)=>at.lerp(pe.intensity[Ae],ye.intensity[Ae],me)),he.sun.lerpVectors(pe.sun,ye.sun,me),he.target.lerpVectors(pe.target,ye.target,me),he.lamps=at.lerp(pe.lamps,ye.lamps,me),he.rain=at.lerp(pe.rain,ye.rain,me),(ee-we>80||xe===1)&&(De(he),we=ee),xe===1&&(ge=null)}let ce=n.amount,de=1-ce;n.setAtmosphereLighting(he.lamps),H.forEach((xe,me)=>{xe.intensity+=(he.intensity[me]-G.intensity[me])*de,xe.color.copy(he.colors[me]).lerp(V[me],ce)}),t.sun.position.copy(he.sun).lerp(new P(...G.sun),ce),t.sun.target.position.copy(he.target).multiplyScalar(de),t.sun.target.updateMatrixWorld(),m.visible=he.rain>.005,u.opacity=he.rain*(.68-ce*.2);let fe=h.attributes.position;for(let xe=0;xe<96;xe++){let me=Se?xe%17/17:(ee*55e-5+xe*.173)%1,pe=2.1-me*.94,ye=-1.21+xe*37%96/96*1.8;fe.setXYZ(xe*2,2.45,pe,ye),fe.setXYZ(xe*2+1,2.45,Math.min(2.11,pe+.07),ye+.009)}fe.needsUpdate=!0},dispose(){Ve=!0,A.abort(),b.remove(),$.map=le,$.needsUpdate=!0,_e.dispose(),delete e.dataset.atmosphere,r.map=o,r.color.copy(a),r.needsUpdate=!0,d.dispose(),n.setAtmosphereLighting(0)}}}function rf({host:i,scene:e,renderer:t,camera:n,controls:s,cake:r,night:o,onCelebrated:a,canInteract:l=()=>!0}){let c=t.domElement,d=i.closest(".door-scene"),f=document.querySelector("#scene-status"),h=new P(-3.4,5.35,9.4),u=new P(0,1.1,0),m={minDistance:s.minDistance,maxDistance:s.maxDistance,minPolarAngle:s.minPolarAngle,maxPolarAngle:s.maxPolarAngle,minAzimuthAngle:s.minAzimuthAngle,maxAzimuthAngle:s.maxAzimuthAngle},b=new vn,g=new J,p=new P,y="overview",v=null,_=null,M=0,S=document.createElement("div");S.className="birthday-blackout",S.setAttribute("aria-hidden","true"),d.append(S);let w=document.createElement("button");w.type="button",w.className="cake-hit-target",w.setAttribute("aria-label","\u9760\u8FD1\u751F\u65E5\u86CB\u7CD5"),w.title="\u770B\u770B\u86CB\u7CD5",i.appendChild(w);let E=document.createElement("button");E.type="button",E.className="candle-hit-target",E.setAttribute("aria-label","\u5439\u7184\u8721\u70DB"),E.title="\u5439\u7184\u8721\u70DB",E.hidden=!0,i.appendChild(E);let A=()=>{s.enabled=!1,s.minDistance=.1,s.maxDistance=30,s.minPolarAngle=0,s.maxPolarAngle=Math.PI,s.minAzimuthAngle=-1/0,s.maxAzimuthAngle=1/0},R=(Z,ge,we,Ve=!1)=>{A(),v={start:performance.now(),from:n.position.clone(),targetFrom:s.target.clone(),to:Z,target:ge,next:we,celebrate:Ve}},N=()=>{y!=="overview"||!l()||(y="focusing",r.userData.candleOut?o.setNight(!0):o.prepareBirthday(),d.classList.add("is-cake-focus"),f.textContent=r.userData.candleOut?"\u518D\u770B\u770B\u751F\u65E5\u86CB\u7CD5\u3002":"\u518D\u70B9\u4E00\u4E0B\u8721\u70DB\u3002",R(new P(1.49,1.86,.2),new P(1.49,1.24,-1.35),"focused"))},D=()=>{v||y==="overview"||y==="celebrating"||y==="lighting"||(r.userData.candleOut||o.setNight(!0),y="returning",R(h.clone(),u.clone(),"overview"))},B=()=>{y!=="focused"||r.userData.candleOut||(r.userData.extinguish(),M=performance.now(),o.beginCelebration(M),f.textContent="\u70DB\u706B\u7184\u706D\u4E86\uFF0C\u7B49\u5BB6\u91CC\u7684\u706F\u6162\u6162\u4EAE\u8D77\u3002",y="celebrating",R(new P(-2.7,4.1,7.6),new P(0,1.1,0),"lighting",!0))},O=Z=>{let ge=c.getBoundingClientRect();return g.set((Z.clientX-ge.left)/ge.width*2-1,-(Z.clientY-ge.top)/ge.height*2+1),b.setFromCamera(g,n),b.intersectObjects(e.children,!0)[0]?.object},H=Z=>{for(;Z;){if(Z===r)return!0;Z=Z.parent}return!1},G=Z=>{Z.button===0&&(_={id:Z.pointerId,x:Z.clientX,y:Z.clientY,object:O(Z)})},V=Z=>{if(_&&_.id===Z.pointerId&&Math.hypot(Z.clientX-_.x,Z.clientY-_.y)<5){let ge=O(Z);y==="overview"&&H(_.object)&&H(ge)?N():y==="focused"&&H(ge)&&/蜡烛|烛焰/.test(ge.name)&&B()}_=null},K=()=>{_=null},Q=Z=>{Z.key==="Escape"&&y==="focused"&&D()};w.addEventListener("click",N),E.addEventListener("click",B),c.addEventListener("pointerdown",G),c.addEventListener("pointerup",V),c.addEventListener("pointercancel",K),document.addEventListener("keydown",Q);let he=(Z,ge,we,Ve)=>(p.copy(ge),r.localToWorld(p),p.project(n),Z.style.left=`${(p.x*.5+.5)*we}px`,Z.style.top=`${(-p.y*.5+.5)*Ve}px`,p.z>1||p.z<-1);return{get phase(){return y},get locked(){return!!v||y==="lighting"},returnToRoom:D,update(Z,ge,we,Ve){if(v){let De=v.celebrate?1600:950,$=v.celebrate?150:0,le=Ve?1:at.clamp((Z-v.start-$)/De,0,1),oe=le*le*(3-2*le);if(n.position.lerpVectors(v.from,v.to,oe),s.target.lerpVectors(v.targetFrom,v.target,oe),n.lookAt(s.target),le===1){let _e=v;v=null,y=_e.next,s.enabled=y!=="lighting",y==="focused"?(s.enableRotate=!1,s.minDistance=1,s.maxDistance=2.5):y!=="lighting"&&(Object.assign(s,m),s.enableRotate=!0,d.classList.remove("is-cake-focus"),_e.celebrate||(f.textContent=""))}}if(y==="celebrating"||y==="lighting"){let De=Z-M;S.style.opacity=Ve?"0":String(De<350?De/350:De<850?1:Math.max(0,1-(De-850)/850)),y==="lighting"&&!o.celebrating&&(y="overview",Object.assign(s,m),s.enableRotate=!0,n.position.copy(h),s.target.copy(u),s.enabled=!0,s.update(),d.classList.remove("is-cake-focus"),S.style.opacity="0",f.textContent="\u5BB6\u91CC\u7684\u706F\u90FD\u4EAE\u4E86\uFF0C\u770B\u770B\u8FD9\u5F20\u751F\u65E5\u7167\u7247\u3002",a())}return r.updateWorldMatrix(!0,!1),w.hidden=y!=="overview"||!l()||he(w,new P(0,.2,0),ge,we),E.hidden=y!=="focused"||r.userData.candleOut||he(E,new P(0,.5,0),ge,we),E.disabled=!!v,!!v||y==="lighting"},dispose(){S.remove(),w.remove(),E.remove(),c.removeEventListener("pointerdown",G),c.removeEventListener("pointerup",V),c.removeEventListener("pointercancel",K),document.removeEventListener("keydown",Q),d.classList.remove("is-cake-focus")}}}function of(i){let e=document.createElement("dialog");e.className="birthday-letter",e.setAttribute("aria-labelledby","birthday-letter-title");let t=document.createElement("div");t.className="birthday-photo-page";let n=document.createElement("img");n.src=new URL("assets/doodles/birthday.png",document.baseURI).href,n.alt="\u6E29\u99A8\u590D\u53E4\u751F\u65E5\u86CB\u7CD5\u9759\u7269\uFF0C\u71C3\u7740\u7684\u8721\u70DB\u3001\u793C\u7269\u3001\u8D3A\u5361\u4E0E\u8336\u676F";let s=document.createElement("p");s.textContent="\u5F80\u4E0B\u770B\u770B\uFF0C\u4FE1\u5728\u7167\u7247\u4E0B\u9762\u3002",t.append(n,s);let r=document.createElement("h2");r.id="birthday-letter-title",r.textContent="\u5199\u7ED9\u6765\u5230\u5C0F\u5C4B\u7684\u4F60";let o=document.createElement("p");o.className="birthday-letter-content",o.textContent="\u8FD9\u5C01\u4FE1\u8FD8\u5728\u51C6\u5907\u4E2D\u3002";let a=document.createElement("button");a.type="button",a.textContent="\u6536\u597D\u4FE1\uFF0C\u7EE7\u7EED\u770B\u770B",a.addEventListener("click",()=>e.close());let l=document.createElement("article");l.className="birthday-letter-page",l.append(r,o),e.append(a,t,l),document.body.appendChild(e);let c=document.createElement("button");c.type="button",c.className="letter-reopen",c.textContent="\u8BFB\u4FE1",c.hidden=!0,i.appendChild(c);let d=!1,f=new AbortController;fetch(new URL("assets/birthday-letter.json",document.baseURI),{signal:f.signal}).then(u=>{if(!u.ok)throw new Error("Letter unavailable");return u.json()}).then(u=>{d||(typeof u.title=="string"&&u.title.trim()&&(r.textContent=u.title),typeof u.content=="string"&&u.content.trim()&&(o.textContent=u.content))}).catch(()=>{});let h=()=>{d||e.open||(c.hidden=!1,e.showModal(),e.scrollTop=0,a.focus({preventScroll:!0}))};return c.addEventListener("click",h),{show:h,get open(){return e.open},dispose(){d=!0,f.abort(),e.close(),e.remove(),c.removeEventListener("click",h),c.remove()}}}function lf(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ut,c=0;for(let d=0;d<i.length;++d){let f=i[d],h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in f.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(f.morphAttributes[u])}if(e){let u;if(t)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,d),c+=u}}if(t){let d=0,f=[];for(let h=0;h<i.length;++h){let u=i[h].index;for(let m=0;m<u.count;++m)f.push(u.getX(m)+d);d+=i[h].attributes.position.count}l.setIndex(f)}for(let d in r){let f=af(r[d]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,f)}for(let d in o){let f=o[d][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let h=0;h<f;++h){let u=[];for(let b=0;b<o[d].length;++b)u.push(o[d][b][h]);let m=af(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(m)}}}return l}function af(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let d=i[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}let o=new e(r),a=new $t(o,t,n),l=0;for(let c=0;c<i.length;++c){let d=i[c];if(d.isInterleavedBufferAttribute){let f=l/t;for(let h=0,u=d.count;h<u;h++)for(let m=0;m<t;m++){let b=d.getComponent(h,m);a.setComponent(h+f,m,b)}}else o.set(d.array,l);l+=d.count*t}return s!==void 0&&(a.gpuType=s),a}var Qt=(i,e=.04)=>new Fe({color:i,roughness:.54,metalness:e}),cf=Qt("#b58b3b",.64);function uf(i){i.updateWorldMatrix(!0,!0);let e=i.matrixWorld.clone().invert(),t=new Map,n=new Set;i.traverse(s=>{if(!(s instanceof Xe)||Array.isArray(s.material))return;let r=s.geometry.clone();r.deleteAttribute("uv"),r.applyMatrix4(new ht().multiplyMatrices(e,s.matrixWorld));let o=t.get(s.material)??[];o.push(r),t.set(s.material,o),n.add(s.geometry)}),i.clear();for(let[s,r]of t){let o=lf(r,!1);if(!o)throw new Error("Unable to combine carousel ornament geometry");Yn(i,o,s),r.forEach(a=>a.dispose())}n.forEach(s=>s.dispose())}function Yn(i,e,t,n=[0,0,0]){let s=new Xe(e,t);return s.position.set(n[0],n[1],n[2]),s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function jt(i,e,t,n){let s=Yn(i,new Rt(1,24,16),e,t);return s.scale.set(n[0],n[1],n[2]),s}function cr(i,e,t,n){let s=new pt(t.map(r=>new P(...r)));return Yn(i,new bt(s,24,n,8,!1),e)}function hf(i,e,t,n,s){let r=new pt(t.map(h=>new P(...h))),o=24,a=14,l=r.computeFrenetFrames(o,!1),c=[],d=[];for(let h=0;h<=o;h++){let u=h/o,m=r.getPointAt(u),b=u*(n.length-1),g=Math.min(n.length-2,Math.floor(b)),p=b-g,y=at.lerp(n[g],n[g+1],p),v=at.lerp(s[g],s[g+1],p);for(let _=0;_<=a;_++){let M=_/a*Math.PI*2,S=m.clone().addScaledVector(l.normals[h],Math.cos(M)*y).addScaledVector(l.binormals[h],Math.sin(M)*v);if(c.push(S.x,S.y,S.z),h<o&&_<a){let w=h*(a+1)+_,E=w+a+1;d.push(w,w+1,E,E,w+1,E+1)}}}for(let h of[0,o]){let u=r.getPointAt(h/o),m=c.length/3;c.push(u.x,u.y,u.z);for(let b=0;b<a;b++){let g=h*(a+1)+b;h===0?d.push(m,g+1,g):d.push(m,g,g+1)}}let f=new ut;return f.setAttribute("position",new Qe(c,3)),f.setIndex(d),f.computeVertexNormals(),Yn(i,f,e)}function df(i){let e=new Ue;e.name=`solid-carousel-horse-${i+1}`;let t=Qt(["#e5d6b4","#d7c19a","#e9ddd0"][i%3]),n=Qt(["#b78b43","#8a5740","#cfb479"][i%3]),s=Qt(["#496f8a","#a35349","#788453"][i%3]),r=Qt("#d4ad62",.35),o=Qt("#745646"),a=Qt("#25262b");jt(e,t,[0,0,0],[.4,.205,.15]),jt(e,t,[-.235,.015,0],[.19,.215,.155]),jt(e,t,[.24,-.015,0],[.2,.19,.16]),hf(e,t,[[-.23,.06,0],[-.3,.27,0],[-.4,.47,0],[-.46,.49,0]],[.17,.145,.1,.1],[.135,.11,.085,.08]);let l=jt(e,t,[-.485,.475,0],[.155,.13,.09]);l.rotation.z=-.48;let c=jt(e,t,[-.62,.39,0],[.125,.077,.081]);c.rotation.z=-.45;for(let d of[-.06,.06]){let f=jt(e,t,[-.41,.635,d],[.037,.11,.028]);f.rotation.z=-.17;let h=jt(e,Qt("#b78f7f"),[-.425,.65,d],[.019,.06,.029]);h.rotation.z=-.17}for(let d of[-1,1]){jt(e,a,[-.52,.505,d*.081],[.018,.021,.012]),jt(e,r,[-.58,.405,d*.08],[.031,.025,.009]),jt(e,o,[-.68,.386,d*.061],[.016,.01,.008]);let f=d===1?[[-.24,-.11,d*.11],[-.35,-.285,d*.125],[-.48,-.35,d*.12],[-.49,-.44,d*.12]]:[[-.23,-.11,d*.11],[-.3,-.31,d*.12],[-.18,-.4,d*.12],[-.16,-.49,d*.12]],h=d===1?[[.23,-.1,d*.11],[.39,-.26,d*.125],[.3,-.37,d*.13],[.39,-.45,d*.13]]:[[.24,-.1,d*.11],[.38,-.29,d*.12],[.51,-.33,d*.12],[.55,-.42,d*.12]];for(let u of[f,h]){hf(e,t,u,[.073,.057,.037,.032],[.06,.049,.034,.032]);let m=u[3],b=jt(e,o,[m[0]-.01,m[1]-.025,m[2]],[.063,.037,.046]);b.rotation.z=-.16}cr(e,r,[[-.425,.57,d*.084],[-.5,.5,d*.09],[-.56,.36,d*.075]],.009),cr(e,s,[[-.67,.435,d*.07],[-.625,.39,d*.082],[-.59,.35,d*.06]],.012),cr(e,r,[[-.57,.37,d*.09],[-.36,.19,d*.175],[-.04,.19,d*.172]],.006)}jt(e,r,[.01,.07,0],[.235,.163,.174]),jt(e,s,[.01,.083,0],[.215,.155,.182]),jt(e,n,[.03,.207,0],[.15,.045,.105]);for(let d of[-1,1]){jt(e,r,[.02,.085,d*.179],[.036,.037,.012]);for(let h=0;h<5;h++){let u=h*Math.PI*2/5;jt(e,t,[.02+Math.sin(u)*.046,.085+Math.cos(u)*.046,d*.179],[.02,.023,.012])}let f=Yn(e,new Ct(.047,.009,7,20),r,[.1,-.1,d*.17]);f.scale.y=1.3,cr(e,n,[[.1,.13,d*.177],[.1,.01,d*.19],[.1,-.1,d*.17]],.012)}for(let d=0;d<7;d++){let f=.54-d*.047,h=-.35+d*.022;cr(e,n,[[h,f,-.018],[h+.08,f-.015,.012],[h+.09,f-.095,.018]],.032-d*.0015)}for(let d=0;d<5;d++){let f=(d-2)*.025;cr(e,n,[[.35,.06,f],[.53,.08,f],[.61,-.12,f],[.53,-.31,f],[.58,-.35,f]],.027)}return uf(e),e}function ff(i){let e=[Qt("#637747"),Qt("#899653"),Qt("#a1a96d")],t=[Qt("#d99b98"),Qt("#e5cf9d"),Qt("#b47665"),Qt("#d8d9be")],n=Qt("#b78b3f"),s=new Ue;s.name="miniature-garden",i.add(s);let r=new Rt(1,10,7),o=new Rt(1,10,7);for(let a=0;a<9;a++){let l=a*Math.PI*2/9+.2,c=a%3===0?.6:1.18,d=Math.sin(l)*c,f=Math.cos(l)*c;for(let h=0;h<6;h++){let u=l+h*2.4,m=.09+h%3*.045,b=Yn(s,r,e[h%3],[d+Math.sin(u)*.09,.79+m/2,f+Math.cos(u)*.09]);b.scale.set(.028,m,.052),b.rotation.set(Math.cos(u)*.7,u,Math.sin(u)*.7)}for(let h=0;h<3;h++){let u=l+h*2.1,m=d+Math.sin(u)*.1,b=f+Math.cos(u)*.1,g=.9+h%2*.11,p=Yn(s,new nt(.006,.009,g-.75,5),e[0],[m,(g+.75)/2,b]);p.castShadow=!1;let y=new Ue;y.position.set(m,g,b),y.rotation.set(.25*Math.sin(u),u,.22*Math.cos(u)),s.add(y);for(let v=0;v<6;v++){let _=v*Math.PI*2/6,M=Yn(y,o,t[(a+h)%4],[Math.sin(_)*.038,0,Math.cos(_)*.038]);M.scale.set(.032,.016,.047),M.rotation.y=_}jt(y,n,[0,.012,0],[.023,.018,.023])}}uf(s)}function pf(i,e,t,n){let r=Yn(i,new nt(.018,.021,n-.75,12),Qt("#ddc9a1",.24),[e,(n+.75)/2,t]);r.name="connected-carousel-pole";for(let l of[.75+.025,n-.035])Yn(i,new nt(.058,.067,.065,16),cf,[e,l,t]);let o=[];for(let l=0;l<=220;l++){let c=l/220,d=c*Math.PI*2*12;o.push(new P(e+Math.sin(d)*.023,.75+.08+c*(n-.75-.16),t+Math.cos(d)*.023))}let a=new pt(o);Yn(i,new bt(a,220,.004,4,!1),cf)}var hy=16;function mf(i,e){let t=new Ue;t.name="\u65CB\u8F6C\u6728\u9A6C\u76F8\u7247\u706F",t.position.set(-2.13,.837,1.76),t.scale.set(.112,.087,.112);let n=new Set,s=(F,Y=.65)=>new Fe({color:F,roughness:Y,metalness:.03}),r=s("#f2e7c9"),o=s("#b35142"),a=s("#648dae"),l=s("#79914f"),c=s("#d3a846"),d=new Fe({color:"#bc9446",roughness:.34,metalness:.68}),f=[o,a,l,c];function h(F,Y,T=t,x=0,I=0,U=0){let z=new Xe(F,Y);return z.position.set(x,I,U),z.castShadow=!0,z.receiveShadow=!0,T.add(z),z}function u(F,Y,T=.025,x=d){let I=h(new Ct(F,T,8,96),x,t,0,Y);return I.rotation.x=Math.PI/2,I}let m=new Wn,b=!0;function g(F){let Y=m.load(new URL("assets/carousel-lamp/"+F.replace(/^\//,""),document.baseURI).href,T=>{b&&n.forEach(x=>{if(x.source===T.source){x.needsUpdate=!0;let I=x.userData.pendingMaterial;I&&(I.map=x,I.color.set("#ffffff"),I.needsUpdate=!0)}})},void 0,()=>{b&&e("\u6709\u4E00\u5904\u88C5\u9970\u6682\u65F6\u6CA1\u52A0\u8F7D\u51FA\u6765\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5\u3002")});return Y.colorSpace=$e,Y.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy()),n.add(Y),Y}let p=g("/carousel-panels.png"),y=g("/carousel-column.png"),v=g("/carousel-base.png");function _(F,Y=p,T=0,x=1){let I=Y.clone();I.wrapS=wn,I.repeat.set(F,x),I.offset.y=T,n.add(I);let U=new Fe({map:I.image?I:null,color:I.image?"#ffffff":"#eee0bd",roughness:.63,metalness:.035});return I.image||(I.userData.pendingMaterial=U),U}let M=new Fe({color:"#b68a26",roughness:.34,metalness:.72});h(new nt(1.42,1.36,.16,96),a,t,0,.12),h(new nt(1.43,1.43,.38,96),_(2,v,0,.56),t,0,.39),h(new nt(1.5,1.46,.1,96),_(2,v,.56,.44),t,0,.63),h(new nt(1.4,1.46,.07,96),M,t,0,.71),u(1.43,.2,.025),u(1.44,.58,.025),u(1.47,.7,.022);for(let F=0;F<3;F++){let Y=F*Math.PI*2/3;h(new Rt(.13,16,12),a,t,Math.sin(Y)*1.08,.045,Math.cos(Y)*1.08).scale.set(1,.48,1)}[{y:1.17,h:.86,r1:.34,r2:.48},{y:2.1,h:1,r1:.28,r2:.34},{y:3.14,h:1,r1:.32,r2:.28},{y:4.15,h:1,r1:.44,r2:.32}].forEach((F,Y)=>{let T=_(1,y,[0,.23,.48,.23][Y],[.23,.25,.255,.25][Y]);Y===3&&T.color.set("#a9cfff"),h(new nt(F.r1,F.r2,F.h,48),T,t,0,F.y),u(F.r2+.02,F.y-F.h/2,.035,f[Y]),u(F.r1+.025,F.y+F.h/2,.027,d)}),h(new nt(.53,.44,.52,64),_(1,y,.735,.265),t,0,4.91),u(.53,5.17,.033,d),h(new nt(.24,.38,.92,48),r,t,0,5.61),h(new nt(.24,.24,.12,48),d,t,0,6.1);let w=new Fe({color:"#e0bd75",emissive:"#ffae4b",emissiveIntensity:0,roughness:.45}),E=u(.75,5.28,.042,w);E.castShadow=!1;for(let F=0;F<6;F++){let Y=F*Math.PI*2/6,T=new P(0,5.98,0),x=new P(Math.sin(Y)*1.83,5.4,Math.cos(Y)*1.83),I=x.clone().sub(T),U=h(new nt(.012,.012,I.length(),8),d);U.position.copy(T).add(x).multiplyScalar(.5),U.quaternion.setFromUnitVectors(new P(0,1,0),I.normalize())}let A=[new J(.08,6.22),new J(.22,6.1),new J(.55,5.93),new J(1.04,5.68),new J(1.58,5.46),new J(2.13,5.33)],R=[s("#678fae"),s("#eee0bd"),s("#829ab1"),s("#eddfbd")];for(let F=0;F<16;F++){let Y=h(new Yt(A,10,F*Math.PI/8,Math.PI/8+.001),R[F%4]);Y.material.side=xt}let N=new Fe({color:"#fff0ca",emissive:"#ffc276",emissiveIntensity:.15,roughness:.85,side:xt}),D=h(new Yt(A.map(F=>new J(F.x*.985,F.y-.028)),96),N,t);D.castShadow=!1;let B=new nt(2.15,2.15,.62,224,1,!0),O=B.attributes.position;for(let F=0;F<=224;F++){let Y=F/224*14%1;O.setY(F,.31+Math.sin(Y*Math.PI)*.15)}O.needsUpdate=!0,B.computeVertexNormals();let H=_(2,p,.14,.68);H.side=xt,h(B,H,t,0,5.3),u(2.15,4.99,.035,o);for(let F=0;F<14;F++){let Y=F*Math.PI*2/14;h(new Rt(.045,12,8),f[F%4],t,Math.sin(Y)*2.15,5.49,Math.cos(Y)*2.15)}h(new Rt(.13,20,16),o,t,0,6.33),u(.18,6.18,.03,d);function G(){let F=document.createElement("canvas");F.width=F.height=128;let Y=F.getContext("2d"),T=Y.createRadialGradient(64,64,0,64,64,64);T.addColorStop(0,"rgba(255,213,149,.7)"),T.addColorStop(.4,"rgba(255,186,110,.2)"),T.addColorStop(1,"rgba(255,178,105,0)"),Y.fillStyle=T,Y.fillRect(0,0,128,128);let x=new ct(F);return n.add(x),x}let V=G(),K=new ni({map:V,transparent:!0,opacity:0,depthWrite:!1,blending:In}),Q=new ii(K);Q.position.set(0,5.26,0),Q.scale.set(2.5,1.3,1),t.add(Q);let he=new ni({map:V,transparent:!0,opacity:0,depthWrite:!1,blending:In,toneMapped:!1});for(let F=0;F<16;F++){let Y=F*Math.PI*2/16,T=new ii(he);T.position.set(Math.sin(Y)*2.1,5.1,Math.cos(Y)*2.1),T.scale.set(.65,.3,1),t.add(T)}let Z=new cn({transparent:!0,depthWrite:!1,side:xt,blending:In,uniforms:{strength:{value:0},tint:{value:new je("#ffd098")}},vertexShader:`varying vec2 beamUV;varying vec3 viewNormal;varying vec3 viewPosition;
      void main(){beamUV=uv;viewNormal=normalize(normalMatrix*normal);vec4 p=modelViewMatrix*vec4(position,1.0);viewPosition=-p.xyz;gl_Position=projectionMatrix*p;}`,fragmentShader:`uniform float strength;uniform vec3 tint;varying vec2 beamUV;varying vec3 viewNormal;varying vec3 viewPosition;
      void main(){float facing=pow(abs(dot(normalize(viewNormal),normalize(viewPosition))),1.4);
      float ends=smoothstep(0.0,0.26,beamUV.y)*(1.0-smoothstep(0.85,1.0,beamUV.y));
      float taper=mix(0.12,0.75,beamUV.y);gl_FragColor=vec4(tint,strength*ends*taper*facing);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`});for(let F=0;F<3;F++){let Y=F*Math.PI*2/3+.4,T=h(new nt(.18,.88,3.7,48,1,!0),Z,t,Math.sin(Y)*.86,3.3,Math.cos(Y)*.86);T.castShadow=!1,T.receiveShadow=!1,T.renderOrder=2}let ge=[],we=new Ue;we.name="rotating-carousel-assembly",t.add(we),u(.96,5.7,.014,d),u(.96,.765,.012,d);for(let F=0;F<3;F++){let Y=.3+F*Math.PI*2/3,T=Math.sin(Y)*.96,x=Math.cos(Y)*.96,I=df(F);I.position.set(T,1.4,x),I.rotation.y=Y,I.scale.setScalar(1.05),we.add(I),ge.push(I),pf(we,T,x,5.7)}ff(t);let Ve=[],De=[],$=[],le=Array(hy).fill(0),oe=s("#fff9e8"),_e=[];function Me(F,Y){F.fillStyle="#fff9ed",F.fillRect(0,560,512,80),F.fillStyle="#856d5a",F.font="22px sans-serif",F.textAlign="center",F.fillText(String(Y+1).padStart(2,"0")+"   /   dear memory",256,601)}function ee(F,Y){let T=document.createElement("canvas");T.width=512,T.height=640;let x=T.getContext("2d");if(x.fillStyle="#fff9ed",x.fillRect(0,0,512,640),Y){let U=Math.max(440/Y.width,520/Y.height);x.save(),x.beginPath(),x.rect(36,30,440,520),x.clip(),x.drawImage(Y,36+(440-Y.width*U)/2,30+(520-Y.height*U)/2,Y.width*U,Y.height*U),x.restore()}else x.fillStyle="#e7dfd2",x.fillRect(36,30,440,520);Me(x,F);let I=new ct(T);return I.colorSpace=$e,I.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy()),n.add(I),I}function Se(F,Y){h(new nt(.008,.008,Y,6),d,F,0,-Y/2)}function ve(F,Y,T,x=.046){let I=new Fi({color:["#b5cbdf","#e6b5ae","#e5d3a3","#b7caab"][T%4],roughness:.16,metalness:.1,transmission:.25,transparent:!0,opacity:.9});h(new cs(x,1),I,F,0,Y)}let ce=new zt;for(let F=0;F<10;F++){let Y=F*Math.PI/5+Math.PI/2,T=F%2?.045:.1,x=Math.cos(Y)*T,I=Math.sin(Y)*T;F===0?ce.moveTo(x,I):ce.lineTo(x,I)}ce.closePath();let de=new un(ce,{depth:.018,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.006,bevelThickness:.006}),fe=new Fi({color:"#e8d7b4",roughness:.2,metalness:.25,iridescence:1,clearcoat:1,transparent:!0,opacity:.88});for(let F=0;F<12;F++){let Y=F*Math.PI*2/12+.15,T=new Ue;T.position.set(Math.sin(Y)*2.04,5.12,Math.cos(Y)*2.04),T.rotation.y=Y,T.userData.phase=F*1.37,T.userData.sway={x:0,z:0,vx:0,vz:0},we.add(T),Ve.push(T);let x=.8+F%4*.31,I=[1,4,7,10].includes(F),U=x+.87+(I?1.1:0);Se(T,U),ve(T,-.24,F),ve(T,-.52,F+1,.032);for(let z=0;z<(I?2:1);z++){let j=De.length,se=new Ue;se.position.y=-x-.42-z*1.1,se.rotation.z=Math.sin(F*4.1+z)*.07,T.add(se);let q=h(new Ht(.63,.8,.027),oe.clone(),se);q.userData.photo=j,$.push(q),_e.push(q);let ie=h(new gt(.62,.79),new Fe({map:ee(j),roughness:.83,side:xt}),se,0,0,.017);ie.userData.photo=j,De.push(ie),$.push(ie);let Ee=h(new gt(.62,.79),ie.material,se,0,0,-.017);Ee.rotation.y=Math.PI,Ee.userData.photo=j,$.push(Ee),h(new Ht(.048,.14,.07),f[j%4],se,0,.42,.04)}if(F%3===1&&h(de,fe,T,0,-U-.12),ve(T,-U,F+2,.075),ve(T,-U+.18,F+1,.035),F%3===0){let z=h(new Or(.07,.1,16,1,!0),d,T,0,-U-.14);z.rotation.z=Math.PI}}let xe=new Zt("#ffe4b0",0,1.4,2);t.traverse(F=>{(F instanceof ii||F.material===Z)&&(F.userData.ignoreInteraction=!0)}),xe.position.set(-2.13,1.25,1.76);let me=new Ue;me.name="\u6D12\u843D\u7684\u661F\u5149",t.add(me);let pe=V;for(let F=0;F<38;F++){let Y=new ii(new ni({map:pe,color:"#ffedba",transparent:!0,opacity:0,depthWrite:!1,blending:In,toneMapped:!1})),T=F*2.399,x=1.7+F%7*.22;Y.position.set(Math.cos(T)*x,.14+F%6*.49,Math.sin(T)*x),Y.scale.setScalar(.09+F%3*.04),Y.userData.ignoreInteraction=!0,me.add(Y)}let ye=!0,Te=0,Ae=null,C=0;return{root:t,lampLight:xe,faces:De,rotate(F){ye=F},turn(F){Te+=F,we.rotation.y=Te},wind(F){C=F+3200},select(F){_e.forEach((Y,T)=>Y.material.color.set(T===F?"#f5c665":"#fff9e8"))},setPhoto(F,Y){if(!b)return;let T=De[F].material,x=T.map;T.map=ee(F,Y),T.needsUpdate=!0,x&&(n.delete(x),x.dispose())},update(F,Y,T,x){let I=Ae===null?0:Math.min(.05,(F-Ae)/1e3);Ae=F,ye&&!Y&&!x&&(Te+=I*.15),we.rotation.y=Te,Ve.forEach((U,z)=>{U.rotation.z=Y?0:Math.sin(F*.0015+z)*(F<C?.1:.012)}),ge.forEach((U,z)=>{U.position.y=1.4+(Y?0:Math.sin(Te*3+z*2)*.055)}),me.children.forEach((U,z)=>{U.material.opacity=T*(Y?.65:.4+.4*Math.sin(F*.0018+z)**2)}),w.emissiveIntensity=T*2.6,N.emissiveIntensity=.08+T*.7,K.opacity=T*.08,he.opacity=T*.14,Z.uniforms.strength.value=T*.08,xe.intensity=T*.4},dispose(){b=!1,n.forEach(F=>F.dispose()),n.clear()}}}function Ah(i=!1){let e=new Ue;e.name=i?"\u6728\u957F\u6905\u4E0A\u7684\u767D\u732B":"\u706B\u76C6\u524D\u8DB4\u5367\u7684\u72F8\u82B1\u732B";let t=document.createElement("canvas");t.width=1024,t.height=512;let n=t.getContext("2d");if(n.fillStyle=i?"#e9e4d8":"#ac9980",n.fillRect(0,0,1024,512),!i)for(let y=0;y<20;y++){n.strokeStyle=y%3?"#695c4c":"#80715b",n.lineWidth=9+y%4*2,n.beginPath();for(let v=0;v<=16;v++){let _=y*54+Math.sin(v*.65+y)*10,M=v*32;v?n.lineTo(_,M):n.moveTo(_,M)}n.stroke()}for(let y=0;y<6500;y++){let v=y*193%1024,_=(y*67+y%13*17)%512;n.fillStyle=y%2?"#ffffff12":"#463e3310",n.fillRect(v,_,1,4)}let s=new ct(t);s.colorSpace=$e;let r=new Fe({map:s,roughness:1}),o=new Fe({color:i?"#f6f0e4":"#d0c2a9",roughness:1}),a=new Fe({color:"#4f483e",roughness:1}),l=new Fe({color:"#c39790",roughness:1}),c=(y,v,_,M,S)=>{let w=new Xe(_,M);return w.name=v,w.position.set(...S),w.castShadow=w.receiveShadow=!0,y.add(w),w},d=(y,v,_,M,S)=>{let w=c(y,v,new Rt(1,32,24),M,S);return w.scale.set(..._),w},f=(y,v,_,M,S)=>c(y,v,new bt(new pt(_.map(w=>new P(...w))),24,M,6,!1),S,[0,0,0]),h=[],u=-1/0;e.userData.twitch=y=>{u=y};let m=d(e,"\u81EA\u7136\u8DB4\u5367\u7684\u67D4\u8F6F\u732B\u8EAB",[.145,.115,.245],r,[0,.125,-.035]);d(e,"\u732B\u80A9\u80F8\u90E8",[.13,.105,.125],r,[0,.127,.13]);for(let y of[-1,1]){d(e,"\u6298\u8D77\u7684\u540E\u817F",[.089,.066,.105],r,[y*.105,.075,-.19]),d(e,"\u5E76\u62E2\u7684\u524D\u722A",[.048,.032,.09],o,[y*.067,.035,.245]);for(let v=0;v<2;v++)f(e,"\u732B\u722A\u8DBE\u7F1D",[[y*.067-.012+v*.018,.052,.309],[y*.067-.012+v*.018,.051,.282]],.001,i?o:a)}let b=new Ue;b.position.set(0,.174,.19),b.rotation.x=-.13,e.add(b),d(b,"\u732B\u5934\u4E0E\u9762\u988A",[.113,.088,.095],r,[0,0,0]);for(let y of[-1,1]){d(b,"\u5706\u6DA6\u7684\u732B\u8138\u988A",[.053,.049,.045],o,[y*.053,-.02,.061]);let v=new zt;v.moveTo(-.037,0),v.quadraticCurveTo(-.025,.065,0,.079),v.quadraticCurveTo(.033,.04,.037,0),v.closePath();let _=c(b,"\u67D4\u548C\u4E09\u89D2\u732B\u8033",new un(v,{depth:.015,bevelEnabled:!0,bevelThickness:.008,bevelSize:.006,bevelSegments:3,steps:1}),r,[y*.074,.046,-.003]);_.rotation.z=-y*.22;let M=d(b,"\u732B\u8033\u6DE1\u7C89\u5185\u4FA7",[.018,.025,.004],l,[y*.078,.078,.022]);M.rotation.z=-y*.22,h.push({outer:_,inner:M,base:-y*.22,side:y}),f(b,"\u95ED\u7740\u7684\u674F\u4EC1\u732B\u773C",[[y*.03,.016,.083],[y*.047,.006,.091],[y*.066,.014,.08]],.0028,a);for(let S=0;S<3;S++)f(b,"\u8F7B\u7EC6\u732B\u80E1\u987B",[[y*.033,-.021+S*.007,.11],[y*.094,-.011+S*.014,.114],[y*.144,-.014+S*.02,.103]],65e-5,o)}let g=new zt;if(g.moveTo(-.014,0),g.lineTo(.014,0),g.quadraticCurveTo(.009,-.013,0,-.014),g.quadraticCurveTo(-.009,-.013,-.014,0),c(b,"\u732B\u7684\u7C89\u9F3B\u5B50",new hs(g),l,[0,-.02,.115]),f(b,"\u732B\u5634",[[0,-.034,.112],[0,-.041,.109],[-.011,-.044,.105]],.0014,a),f(b,"\u732B\u5634",[[0,-.041,.109],[.011,-.044,.105]],.0014,a),!i)for(let y of[-.041,0,.041])f(b,"\u989D\u5934\u7684M\u5F62\u864E\u6591",[[y,.06,.064],[y*.62,.037,.087],[y,.023,.091]],.005,a);let p=new Ue;return p.name="\u8D34\u7740\u8EAB\u4F53\u8737\u8D77\u7684\u5C3E\u5DF4",e.add(p),f(p,"\u67D4\u8F6F\u7684\u732B\u5C3E",[[-.04,.06,-.245],[-.165,.047,-.295],[-.24,.044,-.19],[-.215,.043,.025],[-.18,.046,.13]],.024,r),{root:e,update(y,v){let _=y*1e3-u;for(let M of h){let S=_/1300,w=!v&&S>=0&&S<1?Math.sin(S*Math.PI*4)*Math.sin(S*Math.PI)*.2:0;M.outer.rotation.z=M.base+w*M.side,M.inner.rotation.z=M.base+w*M.side}m.scale.y=.115*(v?1:1+Math.sin(y*1.6)*.026),b.rotation.z=v?0:Math.sin(y*.45)*.008,p.rotation.y=v?0:Math.sin(y*.7)*.015}}}function gf(){let i=new Ue;i.name="\u751F\u65E5\u684C\u5E03\u7F6E\u4E0E\u70E4\u706B\u72F8\u82B1\u732B";let e=R=>new Fe({color:R,roughness:.85}),t=e("#e9d7b3"),n=e("#7e906f"),s=e("#a45f4e"),r=e("#7e969b"),o=e("#a18b59"),a=e("#eee5d2"),l=(R,N,D,B,O)=>{let H=new Xe(D,B);return H.name=N,H.position.set(...O),H.castShadow=H.receiveShadow=!0,R.add(H),H},c=(R,N,D,B,O)=>l(R,N,new Ut(...D,3,.008),B,O),d=(R,N,D,B,O)=>{let H=l(R,N,new Rt(1,24,16),B,O);return H.scale.set(...D),H},f=(R,N,D,B,O)=>l(R,N,new bt(new pt(D.map(H=>new P(...H))),24,B,6,!1),O,[0,0,0]),h=document.createElement("canvas");h.width=h.height=512;let u=h.getContext("2d");u.fillStyle="#e6d3ac",u.fillRect(0,0,512,512);for(let R=24;R<512;R+=72)for(let N=24;N<512;N+=72){u.strokeStyle="#798469",u.lineWidth=2,u.beginPath(),u.moveTo(N,R+15),u.lineTo(N+8,R-15),u.stroke(),u.fillStyle="#7f906c";for(let D of[-1,1])u.beginPath(),u.ellipse(N+D*7,R,9,3,D*.5,0,Math.PI*2),u.fill();u.fillStyle="#ae7960";for(let D=0;D<5;D++){let B=D*Math.PI*2/5;u.beginPath(),u.ellipse(N+8+Math.cos(B)*5,R-17+Math.sin(B)*5,4,2,B,0,Math.PI*2),u.fill()}}let m=new ct(h);m.colorSpace=$e;let b=new Fe({map:m,roughness:.9}),g=(R,N,D,B)=>{let O=new pt(N.map(Q=>new P(...Q))),H=[],G=[];for(let Q=0;Q<=32;Q++){let he=O.getPoint(Q/32);if(H.push(he.x,he.y,he.z-D/2,he.x,he.y,he.z+D/2),Q<32){let Z=Q*2;G.push(Z,Z+1,Z+2,Z+1,Z+3,Z+2)}}let V=new ut;V.setAttribute("position",new Qe(H,3)),V.setIndex(G),V.computeVertexNormals();let K=B.clone();return K.side=xt,K.roughness=.48,l(R,"\u67D4\u8F6F\u7F0E\u5E26\u8774\u8776\u7ED3",V,K,[0,0,0])};for(let[R,N,D,B]of[[.91,-1.31,.23,s],[1.05,-1.03,.16,n]]){let O=new Ue;O.name="\u751F\u65E5\u793C\u7269\u76D2",O.position.set(R,.938+D/2,N),i.add(O),c(O,"\u590D\u53E4\u788E\u82B1\u793C\u76D2",[D,D,D],b,[0,0,0]),c(O,"\u72EC\u7ACB\u793C\u76D2\u76D6",[D+.012,.027,D+.012],b,[0,D/2-.008,0]),c(O,"\u793C\u76D2\u7F0E\u5E26",[D+.002,.028,D+.003],B,[0,.02,0]),c(O,"\u793C\u76D2\u5341\u5B57\u7F0E\u5E26",[.025,D+.003,D+.003],B,[0,0,0]);for(let H of[-1,1])g(O,[[0,D/2+.021,0],[H*D*.2,D/2+.075,-.01],[H*D*.35,D/2+.039,0],[H*D*.19,D/2+.02,.012],[0,D/2+.025,0]],.025,B);d(O,"\u7F0E\u5E26\u4E2D\u5FC3\u7ED3",[.02,.012,.018],B,[0,D/2+.025,0]),g(O,[[0,D/2+.02,0],[D*.18,D/2+.003,0],[D*.41,D/2+.003,-.014],[D*.51,D/2-.036,-.018]],.028,B)}let p=new Fi({color:"#eee6d5",roughness:.27,clearcoat:.5}),y=new Fe({color:"#b79b60",metalness:.82,roughness:.28});for(let[R,N]of[[1.97,-1.3],[1.74,-.97]]){let D=new Ue;D.name="\u9752\u82B1\u74F7\u789F\u4E0E\u7CBE\u7EC6\u751C\u70B9\u53C9",D.position.set(R,.939,N),i.add(D),l(D,"\u6709\u51F9\u9762\u7684\u74F7\u789F",new Yt([new J(0,.004),new J(.048,.004),new J(.06,.008),new J(.078,.018),new J(.089,.02),new J(.09,.017),new J(.073,.007),new J(.041,0)],48),p,[0,0,0]);for(let G=0;G<15;G++){let V=G*Math.PI*2/15;for(let K=0;K<4;K++){let Q=V+K*Math.PI/2,he=d(D,"\u74F7\u789F\u91C9\u4E0A\u9752\u82B1",[.0032,8e-4,.0016],r,[Math.cos(V)*.076+Math.cos(Q)*.003,.021,Math.sin(V)*.076+Math.sin(Q)*.003]);he.rotation.y=-Q}}let B=new Ue;B.name="\u4E00\u4F53\u9EC4\u94DC\u751C\u70B9\u53C9",B.position.set(.025,.025,.012),B.rotation.y=.45,D.add(B);let O=new zt;O.moveTo(-.005,-.075),O.quadraticCurveTo(-.009,-.087,.005,-.081),O.lineTo(.007,.016),O.quadraticCurveTo(.02,.033,.018,.048),O.lineTo(.018,.075);for(let G=0;G<4;G++){let V=.018-G*.009;O.lineTo(V-.003,.075),O.lineTo(V-.003,.046),G<3&&(O.lineTo(V-.009,.046),O.lineTo(V-.009,.075))}O.lineTo(-.017,.034),O.quadraticCurveTo(-.012,.021,-.006,.016),O.lineTo(-.005,-.075);let H=l(B,"\u56DB\u9F7F\u4E0E\u5706\u6DA6\u53C9\u67C4",new un(O,{depth:.002,bevelEnabled:!0,bevelSize:.001,bevelThickness:.001,bevelSegments:2,steps:1}),y,[0,0,0]);H.rotation.x=-Math.PI/2}for(let[R,N]of[[2.16,-1.35],[2.03,-.99]]){l(i,"\u684C\u4E0A\u9752\u82B1\u8336\u676F",new nt(.046,.036,.068,32),a,[R,.975,N]),l(i,"\u8336\u676F\u91CC\u7684\u8336",new nt(.041,.041,.003,24),e("#69513c"),[R,1.011,N]),l(i,"\u8336\u676F\u628A\u624B",new Ct(.025,.006,8,24),a,[R+.049,.983,N]).rotation.y=Math.PI/2;for(let D=0;D<3;D++)d(i,"\u8336\u676F\u5C0F\u82B1",[.006,.006,.002],r,[R-.018+D*.018,.977,N+.041])}let v=c(i,"\u751F\u65E5\u8D3A\u5361",[.15,.14,.006],t,[1,1.008,-.85]);v.rotation.x=-.15;let _=document.createElement("canvas");_.width=512,_.height=384;let M=_.getContext("2d");M.fillStyle="#eadbbd",M.fillRect(0,0,512,384),M.fillStyle="#925d4b",M.textAlign="center",M.font="italic 64px serif",M.fillText("Happy",256,130),M.fillText("Birthday!",256,205),M.fillStyle="#80916d";for(let R=0;R<6;R++)M.beginPath(),M.ellipse(170+R*30,280,12,5,R*.3,0,Math.PI*2),M.fill();let S=new ct(_);S.colorSpace=$e;let w=l(i,"\u8D3A\u5361\u795D\u798F",new gt(.144,.132),new Fe({map:S,roughness:1}),[1,1.008,-.846]);w.rotation.x=-.15;for(let R=0;R<27;R++){let N=.85+R*47%135/100,D=-1.92+R*31%102/100;if(Math.hypot(N-1.49,D+1.35)<.34)continue;let B=l(i,"\u6563\u843D\u7684\u751F\u65E5\u5F69\u7EB8",new Gn(.009,12),[s,n,o][R%3],[N,.939,D]);B.rotation.x=-Math.PI/2}f(i,"\u751F\u65E5\u684C\u7EA2\u7F0E\u5E26",[[.8,.941,-1.86],[.96,.946,-1.7],[.87,.941,-1.55],[1.05,.944,-1.45]],.01,s);let E=Ah(!1);E.root.position.set(1.24,.031,1.63),E.root.rotation.y=-1.8,i.add(E.root);let A=Ah(!0);return A.root.position.set(1.91,.595,.04),i.add(A.root),{root:i,update(R,N){E.update(R,N),A.update(R+.7,N)}}}function _f(){let i=new Ue;i.name="2026\u5E746\u6708\u751F\u65E5\u6302\u5386",i.position.set(1.5,1.99,-2.055);let e=new Fe({color:"#bb2b25",roughness:.85}),t=new Xe(new Ht(.55,.79,.025),e);t.castShadow=!0,i.add(t);let n=new Xe(new Ct(.021,.004,6,24),new Fe({color:"#b99a56",metalness:.5,roughness:.5}));n.position.set(0,.417,0),i.add(n);let s=!0,o=new Wn().load(new URL("assets/doodles/birthday.png",document.baseURI).href,p=>{if(!s){p.dispose();return}c.material.map=p,c.material.needsUpdate=!0});o.colorSpace=$e;let a=new gt(.525,.4),l=a.attributes.uv,c=new Xe(a,new Fe({roughness:.9}));c.position.set(0,.17,.014),i.add(c);let d=document.createElement("canvas");d.width=1024,d.height=640;let f=d.getContext("2d");f.fillStyle="#fff9eb",f.fillRect(0,0,1024,640),f.fillStyle="#b62726",f.font="bold 68px SimSun, serif",f.textAlign="center",f.fillText("2026\u5E74 6\u6708",512,95);let h=["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u65E5"];f.font="30px sans-serif",h.forEach((p,y)=>{f.fillStyle=y>4?"#b62726":"#817462",f.fillText(p,(y+.5)*1024/7,175)});let u=(new Date(Date.UTC(2026,5,1)).getUTCDay()+6)%7,m={};for(let p=1;p<=30;p++){let y=u+p-1,v=y%7,_=Math.floor(y/7),M=(v+.5)*1024/7,S=240+_*80;f.fillStyle=v>4?"#bd352c":"#423e36",f.font="bold 51px Arial",f.fillText(String(p),M,S+17),(p===8||p===18)&&(f.strokeStyle="#c4342d",f.lineWidth=7,f.beginPath(),f.ellipse(M,S,50,35,-.12,0,Math.PI*2),f.stroke(),m[p]=new P((M/1024-.5)*.525,-.213+.328/2-S/640*.328,.017))}let b=new ct(d);b.colorSpace=$e,b.anisotropy=4;let g=new Xe(new gt(.525,.328),new Fe({map:b,roughness:.95}));g.position.set(0,-.213,.016),i.add(g);for(let p=0;p<17;p++){let y=new Xe(new Ct(.007,.0018,5,10),new Fe({color:"#806347",roughness:.7}));y.position.set(-.24+p*.03,-.035,.022),i.add(y)}return{root:i,page:g,dayPositions:m,dispose(){s=!1,o.dispose()},dayFromUV(p){if(!p)return null;let y=p.x*1024,v=(1-p.y)*640;if(v<200)return null;let _=Math.floor(y/(1024/7)),M=Math.floor((v-200)/80),S=M*7+_-u+1;return S===8||S===18?S:null}}}var uy=["\u561F...\u561F...\u561F...","\u5582\uFF0C\u6B22\u8FCE\u62E8\u901A\u5C0F\u5C4B\u7684\u6F14\u793A\u7535\u8BDD\uFF01","\u4ECA\u5929\u4E5F\u8981\u8BB0\u5F97\u4F11\u606F\u54E6\u3002","\u613F\u6BCF\u4E00\u6B21\u76F8\u805A\uFF0C\u90FD\u6709\u65B0\u7684\u6545\u4E8B\u3002","\u795D\u4F60\u5E73\u5B89\u559C\u4E50\uFF01"],dy=["\u6EF4\u7B54\u6EF4\u7B54....","\u65F6\u95F4\u6162\u4E00\u70B9\u5427\u3002","\u628A\u4ECA\u5929\u7684\u7F8E\u597D\uFF0C\u7559\u5728\u8FD9\u4E00\u523B\u3002"],fy=["\u8FD9\u662F\u6211\u6700\u559C\u6B22\u7684\u5348\u7761\u4F4D\u7F6E\u3002","\u8FB9\u770B\u7535\u89C6\u8FB9\u6253\u778C\u7761~","\u7761\u5F97\u53EF\u9999\u4E86~"],py=["\u547C\u565C...\u547C\u565C...\u8FD9\u91CC\u597D\u6696\u554A","\u4EBA\u600E\u4E48\u8FD8\u6CA1\u6709\u4E0A\u697C\u6765\u770B\u7535\u89C6\uFF1F..."];function xf({room:i,scene:e,host:t,renderer:n,camera:s,controls:r,night:o,canInteract:a}){let l=n.domElement,c=t.closest(".door-scene"),d=new AbortController,f=(x,I,U)=>x.addEventListener(I,U,{signal:d.signal}),h=i.getObjectByName("\u6728\u957F\u6905\u4E0A\u7684\u767D\u732B"),u=i.getObjectByName("\u706B\u76C6\u524D\u8DB4\u5367\u7684\u72F8\u82B1\u732B"),m=i.getObjectByName("\u7535\u89C6\u67DC\u8F6C\u89D2\u7684\u8001\u5F0F\u5EA7\u673A"),b=i.getObjectByName("\u6447\u6446\u6302\u949F"),g=i.getObjectByName("\u5899\u4E0A\u7684\u56DE\u5FC6\u6302\u753B"),p=i.getObjectByName("\u957F\u6905\u524D\u7684\u706B\u76C6"),y=null,v=null,_=null,M=null,S=!1,w="",E=null,A=-1,R=(x,I,U)=>{let z=document.createElement("button");return z.type="button",z.textContent=x,U&&(z.className=U),f(z,"click",I),z},N=[["cat",u,"\u9760\u8FD1\u70E4\u706B\u7684\u5C0F\u72F8\u82B1\u732B"],["white-cat",h,"\u9760\u8FD1\u6728\u957F\u6905\u4E0A\u7684\u767D\u732B"],["phone",m,"\u9760\u8FD1\u590D\u53E4\u5EA7\u673A"],["clock",b,"\u770B\u770B\u5899\u4E0A\u7684\u6302\u949F"],["painting",g,"\u67E5\u770B\u6302\u753B\u91CC\u7684\u6D82\u9E26\u7167\u7247"],["fire",p,"\u8BA9\u706B\u76C6\u70E7\u5F97\u66F4\u65FA"]].map(([x,I,U])=>{let z=R("",()=>pe(x),"keepsake-hit-target");return z.setAttribute("aria-label",U),t.append(z),{id:x,root:I,b:z}}),D=document.createElement("section");D.className="keepsake-subtitles",D.hidden=!0,D.setAttribute("aria-label","\u56DE\u5FC6\u5B57\u5E55");let B=document.createElement("div");B.className="keepsake-caption-log",B.setAttribute("role","log"),B.setAttribute("aria-live","polite");let O=R("\u56DE\u5230\u623F\u95F4",()=>ye());D.append(B,O),c.append(D);let H=document.createElement("section");H.className="phone-dial",H.hidden=!0,H.setAttribute("aria-label","\u6F14\u793A\u7535\u8BDD\u6570\u5B57\u6309\u952E");let G=document.createElement("p");G.textContent="\u4F9D\u6B21\u6309\u4E0B\u6F14\u793A\u53F7\u7801\uFF1A1234567";let V=document.createElement("output");V.setAttribute("aria-label","\u5DF2\u7ECF\u6309\u4E0B\u7684\u53F7\u7801"),V.textContent="\u6F14\u793A\u53F7\u7801\uFF1A1234567";let K=document.createElement("div");K.className="phone-number-grid";for(let x of["1","2","3","4","5","6","7","8","9","0"]){let I=R(x,()=>me(x));I.setAttribute("aria-label",`\u7535\u8BDD\u6570\u5B57 ${x}`),K.append(I)}let Q=R("\u91CD\u65B0\u6309",()=>{w="",V.textContent="\u6F14\u793A\u53F7\u7801\uFF1A1234567",G.textContent="\u4F9D\u6B21\u6309\u4E0B\u6F14\u793A\u53F7\u7801\uFF1A1234567"}),he=R("\u56DE\u5230\u623F\u95F4",()=>ye());H.append(G,V,K,Q,he),c.append(H);let Z=document.createElement("section");Z.className="painting-controls",Z.hidden=!0,Z.setAttribute("aria-label","\u6302\u753B\u7167\u7247\u5207\u6362");let ge=document.createElement("p"),we=document.createElement("span"),Ve=[{src:"assets/doodles/countryside.png",title:"\u7530\u91CE\u6765\u4FE1"},{src:"assets/doodles/picnic.png",title:"\u52A8\u7269\u91CE\u9910"},{src:"assets/doodles/memories.png",title:"\u5348\u540E\u5C0F\u732B"},{src:"assets/doodles/birthday.png",title:"\u751F\u65E5\u6D3E\u5BF9"}],De=0,$=0,le=g.getObjectByName("\u6DE1\u5F69\u753B\u9762"),oe=le.material,_e=document.createElement("canvas");_e.width=1280,_e.height=730;let Me=new ct(_e);Me.colorSpace=$e,Me.anisotropy=4;let ee=new Lt({map:Me,toneMapped:!1}),Se=async()=>{let x=++$,I=Ve[De];ge.textContent=I.title,we.textContent=`${De+1} / ${Ve.length}`;let U=_e.getContext("2d");U.fillStyle="#e9dfca",U.fillRect(0,0,1280,730),Me.needsUpdate=!0,le.material=ee;let z=new Image;z.src=new URL(I.src,document.baseURI).href;try{if(await z.decode(),S||x!==$)return;let j=Math.min(1280/z.width,730/z.height);U.drawImage(z,(1280-z.width*j)/2,(730-z.height*j)/2,z.width*j,z.height*j),Me.needsUpdate=!0}catch{S||(ge.textContent="\u7167\u7247\u672A\u80FD\u52A0\u8F7D\uFF0C\u8BF7\u68C0\u67E5\u672C\u5730\u6587\u4EF6\u3002")}},ve=R("\u4E0B\u4E00\u5F20",()=>{v||(De=(De+1)%Ve.length,Se())}),ce=R("\u56DE\u5230\u623F\u95F4",()=>ye());Z.append(ge,we,ve,ce),c.append(Z);let de=["minDistance","maxDistance","minPolarAngle","maxPolarAngle","minAzimuthAngle","maxAzimuthAngle","enableRotate"],fe=(x,I,U)=>{r.enabled=!1,v={start:performance.now(),from:s.position.clone(),lookFrom:r.target.clone(),position:x,target:I,nextMode:U}},xe=x=>{E={lines:x,start:performance.now()},A=-1,B.replaceChildren(),D.hidden=!1,H.hidden=!0};function me(x){if(!(y!=="phone"||v||E)){if(w+=x,V.textContent=w,!"1234567".startsWith(w)){G.textContent="\u8FD9\u4E2A\u53F7\u7801\u597D\u50CF\u4E0D\u5BF9\uFF0C\u518D\u8BD5\u4E00\u6B21\u5427\u3002",w="",V.textContent="\u6F14\u793A\u53F7\u7801\uFF1A1234567";return}G.textContent="\u4F9D\u6B21\u6309\u4E0B\u6F14\u793A\u53F7\u7801\uFF1A1234567",w==="1234567"&&xe(uy)}}function pe(x){if(!(S||v)){if(x==="fire"){(!y&&a()||y==="cat")&&o.stoke(performance.now());return}if(!(y||!a()))if(_={position:s.position.clone(),target:r.target.clone(),limits:Object.fromEntries(de.map(I=>[I,r[I]]))},y=x,w="",E=null,H.hidden=!0,D.hidden=!0,Z.hidden=!0,r.minDistance=.1,r.maxDistance=30,r.minPolarAngle=0,r.maxPolarAngle=Math.PI,r.minAzimuthAngle=-1/0,r.maxAzimuthAngle=1/0,c.classList.add("is-keepsake-focus"),x==="cat")fe(new P(.25,1.08,3.1),new P(1.24,.24,1.3),"cat");else if(x==="white-cat")fe(new P(.45,1.25,1.55),new P(1.91,.77,.12),"white-cat");else if(x==="painting"){De=0,Se();let I=Math.max(1.75,1.2/(2*Math.tan(at.degToRad(s.fov/2))*s.aspect));fe(new P(-1.07,2,-2.05+I),new P(-1.07,1.94,-2.05),"painting")}else x==="phone"?fe(new P(-2.48,1.45,.04),new P(-2.175,.765,-.605),"phone"):fe(new P(-1.99,2.03,-.55),new P(-1.99,1.87,-2.02),"clock")}}function ye(){!y||v||(E=null,$++,D.hidden=!0,H.hidden=!0,Z.hidden=!0,fe(_.position,_.target,null))}let Te=new vn,Ae=new J,C=new P,F=x=>{for(let I=x;I;I=I.parent)if(!I.visible)return!1;return!0},Y=(x,I)=>{for(let U=x;U;U=U.parent)if(U===I)return!0;return!1},T=x=>{let I=l.getBoundingClientRect();return Ae.set((x.clientX-I.left)/I.width*2-1,-(x.clientY-I.top)/I.height*2+1),Te.setFromCamera(Ae,s),Te.intersectObjects(e.children,!0).find(U=>F(U.object)&&!U.object.userData.ignoreInteraction)?.object};return f(l,"pointerdown",x=>{x.button===0&&(M={id:x.pointerId,x:x.clientX,y:x.clientY,object:T(x)})}),f(l,"pointerup",x=>{if(M&&x.pointerId===M.id&&Math.hypot(x.clientX-M.x,x.clientY-M.y)<5){let I=T(x);if(y==="phone"&&I?.userData.digit&&M.object?.userData.digit===I.userData.digit)me(I.userData.digit);else for(let U of N)if(Y(I,U.root)&&Y(M.object,U.root)){pe(U.id);break}}M=null}),f(l,"pointercancel",()=>{M=null}),f(document,"keydown",x=>{if(x.key==="Escape"){ye();return}y==="phone"&&!v&&!E&&(/^\d$/.test(x.key)?(x.preventDefault(),me(x.key)):x.key==="Backspace"&&(x.preventDefault(),w=w.slice(0,-1),V.textContent=w||"\u6F14\u793A\u53F7\u7801\uFF1A1234567"))}),{get active(){return!!y},get locked(){return!!v},returnToRoom:ye,update(x,I,U,z){if(v){let j=z?1:Math.min(1,(x-v.start)/950),se=j*j*(3-2*j);s.position.lerpVectors(v.from,v.position,se),r.target.lerpVectors(v.lookFrom,v.target,se),s.lookAt(r.target),j===1&&(y=v.nextMode,v=null,r.enabled=!0,y?(r.enableRotate=!1,r.minDistance=y==="phone"?.55:.9,r.maxDistance=y==="phone"?1.3:2.6,y==="cat"?(u.userData.twitch(x),xe(py),O.focus()):y==="white-cat"?(xe(fy),O.focus()):y==="painting"?(Z.hidden=!1,ve.focus()):y==="clock"?(xe(dy),O.focus()):(H.hidden=!1,G.textContent="\u4F9D\u6B21\u6309\u4E0B\u6F14\u793A\u53F7\u7801\uFF1A1234567",V.textContent="\u6F14\u793A\u53F7\u7801\uFF1A1234567",K.querySelector("button").focus())):(le.material=oe,Object.assign(r,_.limits),c.classList.remove("is-keepsake-focus")))}for(let j of N){let se=j.id==="fire"?!y&&a()||y==="cat":!y&&a();j.root.updateWorldMatrix(!0,!1);let q=j.id==="cat"||j.id==="white-cat"?new P(0,.14,0):j.id==="phone"?new P(0,.08,0):j.id==="clock"?new P(0,-.08,0):j.id==="fire"?new P(0,.2,0):new P;C.copy(q),j.root.localToWorld(C),C.project(s),j.b.style.left=`${(C.x*.5+.5)*I}px`,j.b.style.top=`${(-C.y*.5+.5)*U}px`,j.b.hidden=!se||!!v||C.z>1||C.z<-1}if(E){let j=x-E.start,se=0,q=0;for(;se<E.lines.length&&(q=E.lines[se].length*65+2600,!(j<q));se++)j-=q;if(se>=E.lines.length&&(se=E.lines.length-1,j=E.lines[se].length*65,q=1/0),se!==A){A=se;let Re=y==="cat"?[]:E.lines.slice(Math.max(0,se-1),se);B.replaceChildren(...Re.map(Ze=>{let Ke=document.createElement("p");return Ke.className="past-caption",Ke.textContent=Ze,Ke}));let Ge=document.createElement("p");Ge.className="current-caption",B.append(Ge)}let ie=B.querySelector(".current-caption"),Ee=E.lines[se],Ie=z?Ee.length:Math.min(Ee.length,Math.floor(j/65)+1),Pe=Ee.slice(0,Ie);ie.textContent!==Pe&&(ie.textContent=Pe),ie.style.opacity=q-j<500?String(Math.max(0,(q-j)/500)):"1",B.scrollTop=B.scrollHeight}return!!v},dispose(){S=!0,d.abort(),N.forEach(({b:x})=>x.remove()),D.remove(),H.remove(),le.material=oe,$++,Me.dispose(),ee.dispose(),Z.remove(),c.classList.remove("is-keepsake-focus")}}}function yf({host:i,scene:e,renderer:t,camera:n,controls:s,calendar:r,television:o,canInteract:a}){let l=i.closest(".door-scene"),c=t.domElement,d=document.querySelector("#scene-status"),f=new AbortController,h=(T,x,I)=>T.addEventListener(x,I,{signal:f.signal}),u=null,m=null,b=null,g=null,p=!1,y=!0,v=0,_=performance.now(),M=0,S=[{src:"assets/doodles/picnic.png",title:"\u52A8\u7269\u91CE\u9910"}],w=4e3,E=new Map,A=new AbortController,R=o.getObjectByName("\u7535\u89C6\u5C4F\u5E55");R.material.dispose(),R.material=new Lt({color:"#253034",toneMapped:!1});let N=(T,x,I)=>{let U=document.createElement("button");return U.type="button",U.textContent=T,I&&(U.className=I),h(U,"click",x),U},D=N("",()=>ye("tv"),"memory-hit-target");D.setAttribute("aria-label","\u9760\u8FD1\u7535\u89C6\u770B\u7167\u7247"),i.append(D);let B=N("",()=>ye("calendar"),"memory-hit-target");B.setAttribute("aria-label","\u67E5\u770B2026\u5E746\u6708\u751F\u65E5\u6302\u5386"),i.append(B);let O=document.createElement("section");O.className="tv-controls",O.hidden=!0,O.setAttribute("aria-label","\u7535\u89C6\u7167\u7247\u64AD\u653E");let H=document.createElement("p");H.setAttribute("role","status");let G=N("\u4E0A\u4E00\u5F20",()=>C(-1)),V=N("\u81EA\u52A8\u64AD\u653E",()=>{y=!y,V.textContent=y?"\u6682\u505C\u64AD\u653E":"\u81EA\u52A8\u64AD\u653E",V.setAttribute("aria-pressed",String(y)),_=performance.now()});V.setAttribute("aria-pressed","true"),V.textContent="\u6682\u505C\u64AD\u653E";let K=N("\u4E0B\u4E00\u5F20",()=>C(1)),Q=N("\u56DE\u5230\u623F\u95F4",()=>Te());O.append(H,G,V,K,Q),l.append(O);let he=N("\u56DE\u5230\u623F\u95F4",()=>Te(),"calendar-back");he.hidden=!0,l.append(he);let Z=document.createElement("dialog");Z.className="calendar-wish",Z.setAttribute("aria-labelledby","calendar-wish-title");let ge=document.createElement("canvas");ge.className="birthday-fireworks",ge.setAttribute("aria-hidden","true");let we=document.createElement("div");we.className="calendar-wish-card";let Ve=document.createElement("h2");Ve.id="calendar-wish-title";let De=document.createElement("p"),$=N("\u6536\u597D\u795D\u798F",()=>Z.close());we.append(De,Ve,$),Z.append(ge,we),document.body.append(Z);let le=[],oe=0,_e=0,Me=T=>{u!=="calendar"||m||Z.open||(De.textContent=`2026\u5E746\u6708${T}\u65E5`,Ve.textContent=T===8?"\u751F\u65E5\u5FEB\u4E50\uFF01\u613F\u6BCF\u5929\u90FD\u6709\u5C0F\u60CA\u559C\uFF01":"\u751F\u65E5\u5FEB\u4E50\uFF01\u613F\u4E00\u8DEF\u5E73\u5B89\u559C\u4E50\uFF01",le=[],_e=0,oe=performance.now(),Z.showModal(),$.focus())},ee=[8,18].map(T=>{let x=N("",()=>Me(T),"calendar-date-target");return x.setAttribute("aria-label",`6\u6708${T}\u65E5\u751F\u65E5\u795D\u798F`),x.hidden=!0,i.append(x),{day:T,b:x}}),Se=new vn,ve=new J,ce=new P,de=T=>{for(let x=T;x;x=x.parent)if(!x.visible)return!1;return!0},fe=(T,x)=>{for(let I=T;I;I=I.parent)if(I===x)return!0;return!1},xe=T=>{let x=c.getBoundingClientRect();return ve.set((T.clientX-x.left)/x.width*2-1,-(T.clientY-x.top)/x.height*2+1),Se.setFromCamera(ve,n),Se.intersectObjects(e.children,!0).find(I=>de(I.object)&&!I.object.userData.ignoreInteraction)},me=["minDistance","maxDistance","minPolarAngle","maxPolarAngle","minAzimuthAngle","maxAzimuthAngle","enableRotate"],pe=(T,x,I)=>{s.enabled=!1,m={start:performance.now(),from:n.position.clone(),lookFrom:s.target.clone(),position:T,target:x,nextMode:I}};function ye(T){if(u||!a()||p)return;b={position:n.position.clone(),target:s.target.clone(),limits:Object.fromEntries(me.map(j=>[j,s[j]]))},u=T,s.minDistance=.1,s.maxDistance=30,s.minPolarAngle=0,s.maxPolarAngle=Math.PI,s.minAzimuthAngle=-1/0,s.maxAzimuthAngle=1/0;let x=T==="tv"?o:r.root,I=new P(0,T==="tv"?1.1:0,.05);x.updateWorldMatrix(!0,!1),x.localToWorld(I);let U=new P(0,0,1).transformDirection(x.matrixWorld),z=I.clone().addScaledVector(U,T==="tv"?2.2:1.48);z.y+=T==="tv"?.15:.06,pe(z,I,T),l.classList.add("is-memory-focus"),d.textContent=T==="tv"?"\u4E00\u8D77\u770B\u770B\u7535\u89C6\u91CC\u7684\u7167\u7247\u3002":"6\u6708\u7684\u4E24\u4E2A\u751F\u65E5\uFF0C\u90FD\u8BB0\u5728\u8FD9\u91CC\u3002"}function Te(){!u||m||Z.open||(O.hidden=!0,he.hidden=!0,y=!0,V.textContent="\u6682\u505C\u64AD\u653E",V.setAttribute("aria-pressed","true"),_=performance.now(),pe(b.position,b.target,null))}async function Ae(){let T=++M,x=S[v];H.textContent=`${v+1} / ${S.length} \xB7 ${x.title||"\u7167\u7247"}`;try{let I=new URL(x.src,document.baseURI);if(I.origin!==location.origin)throw Error("\u7535\u89C6\u56FE\u7247\u9700\u4F7F\u7528\u968F\u4F5C\u54C1\u9644\u5E26\u7684\u672C\u5730\u6587\u4EF6\u3002");let U=E.get(I.href);if(!U){if(U=await new Wn().loadAsync(I.href),U.colorSpace=$e,p){U.dispose();return}E.set(I.href,U)}if(p||T!==M)return;U.wrapS=U.wrapT=sn;let z=U.image,j=z.width/z.height,se=1.17/.65;U.repeat.set(j>se?se/j:1,j<se?j/se:1),U.offset.set((1-U.repeat.x)/2,(1-U.repeat.y)/2),R.material.color.set("#ffffff"),R.material.map=U,R.material.needsUpdate=!0}catch{!p&&T===M&&(H.textContent="\u8FD9\u5F20\u7167\u7247\u672A\u80FD\u52A0\u8F7D\uFF0C\u8BF7\u68C0\u67E5\u672C\u5730\u56FE\u7247\u914D\u7F6E\u3002")}}function C(T){v=(v+T+S.length)%S.length,_=performance.now(),Ae()}fetch(new URL("assets/tv-slides.json",document.baseURI),{signal:A.signal}).then(T=>{if(!T.ok)throw Error();return T.json()}).then(T=>{if(p)return;let x=(T.images||[]).filter(I=>typeof I.src=="string");x.length&&(S=x),w=Math.max(1500,Number(T.intervalMs)||4e3),v=0,_=performance.now(),Ae()}).catch(()=>{p||Ae()}),h(c,"pointerdown",T=>{T.button===0&&(g={id:T.pointerId,x:T.clientX,y:T.clientY,hit:xe(T)})}),h(c,"pointerup",T=>{if(g&&T.pointerId===g.id&&Math.hypot(T.clientX-g.x,T.clientY-g.y)<5){let x=xe(T);if(x&&g.hit){if(!u&&fe(x.object,o)&&fe(g.hit.object,o))ye("tv");else if(!u&&fe(x.object,r.root)&&fe(g.hit.object,r.root))ye("calendar");else if(u==="calendar"&&x.object===r.page){let I=r.dayFromUV(x.uv);I&&Me(I)}}}g=null}),h(c,"pointercancel",()=>{g=null}),h(document,"keydown",T=>{T.key==="Escape"&&!Z.open&&Te()});let F=(T,x,I,U,z)=>(ce.copy(I),x.localToWorld(ce),ce.project(n),T.style.left=`${(ce.x*.5+.5)*U}px`,T.style.top=`${(-ce.y*.5+.5)*z}px`,Math.abs(ce.x)>1||Math.abs(ce.y)>1||ce.z>1||ce.z<-1),Y=(T,x,I)=>{let U=["#ffd17c","#ed9885","#c7dbc0","#f3d8ae","#c0d9e9"],z=T*(.16+Math.random()*.68),j=x*(.13+Math.random()*.52);for(let se=0;se<65;se++){let q=se/65*Math.PI*2,ie=45+Math.random()*95;le.push({x:z,y:j,vx:Math.cos(q)*ie,vy:Math.sin(q)*ie,color:U[_e%U.length],start:performance.now(),staticX:Math.cos(q)*ie*.65,staticY:Math.sin(q)*ie*.65})}_e++};return{get active(){return!!u},get locked(){return!!m},returnToRoom:Te,update(T,x,I,U){if(m){let z=U?1:Math.min(1,(T-m.start)/950),j=z*z*(3-2*z);n.position.lerpVectors(m.from,m.position,j),s.target.lerpVectors(m.lookFrom,m.target,j),n.lookAt(s.target),z===1&&(u=m.nextMode,m=null,s.enabled=!0,u?(s.enableRotate=!1,s.minDistance=u==="tv"?1.4:.85,s.maxDistance=u==="tv"?3:1.85,O.hidden=u!=="tv",he.hidden=u!=="calendar",u==="tv"?K.focus():ee[0].b.focus()):(Object.assign(s,b.limits),l.classList.remove("is-memory-focus"),d.textContent=""))}D.hidden=!!u||!a()||F(D,o,new P(0,1.1,.05),x,I),B.hidden=!!u||!a()||F(B,r.root,new P,x,I);for(let{day:z,b:j}of ee)j.hidden=u!=="calendar"||!!m||F(j,r.root,r.dayPositions[z],x,I);if(y&&!m&&(u==="tv"||!u&&a())&&T-_>=w&&C(1),Z.open){let z=innerWidth,j=innerHeight;(ge.width!==z||ge.height!==j)&&(ge.width=z,ge.height=j);let se=ge.getContext("2d");se.clearRect(0,0,z,j),T-oe<3500&&_e<(U?2:7)&&T-oe>_e*480&&Y(z,j,U),le=le.filter(q=>T-q.start<2200);for(let q of le){let ie=(T-q.start)/1e3,Ee=q.x+(U?q.staticX:q.vx*ie),Ie=q.y+(U?q.staticY:q.vy*ie+30*ie*ie);se.globalAlpha=Math.max(0,1-ie/2.2),se.fillStyle=q.color,se.shadowColor=q.color,se.shadowBlur=U?0:7,se.beginPath(),se.arc(Ee,Ie,U?2:1.8,0,Math.PI*2),se.fill(),U||(se.strokeStyle=q.color,se.lineWidth=1,se.beginPath(),se.moveTo(Ee,Ie),se.lineTo(Ee-q.vx*.06,Ie-(q.vy+60*ie)*.06),se.stroke())}se.globalAlpha=1,se.shadowBlur=0}return!!m},dispose(){p=!0,M++,f.abort(),A.abort(),E.forEach(T=>T.dispose()),O.remove(),D.remove(),B.remove(),he.remove(),ee.forEach(({b:T})=>T.remove()),Z.close(),Z.remove(),l.classList.remove("is-memory-focus")}}}var my="public-doodle-house-photos-v1";function fo(i){return new Promise((e,t)=>{let n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error("\u8FD9\u5F20\u7167\u7247\u65E0\u6CD5\u8BFB\u53D6\uFF0C\u8BF7\u6362\u4E00\u5F20 JPG\u3001PNG \u6216 WebP\u3002")),n.src=i})}function po(i,e,t={zoom:1,x:0,y:0}){let n=i.getContext("2d"),s=i.width,r=i.height;if(n.clearRect(0,0,s,r),!e)return;let o=Math.max(s/e.width,r/e.height)*t.zoom,a=e.width*o,l=e.height*o;n.drawImage(e,(s-a)/2+t.x*(a-s)/2,(r-l)/2+t.y*(l-r)/2,a,l)}async function Rh(i){if(!/^image\/(jpeg|png|webp|avif)$/.test(i.type)||i.size>50*1024*1024)throw new Error("\u8BF7\u9009\u62E9 50 MB \u4EE5\u5185\u7684 JPG\u3001PNG\u3001WebP \u6216 AVIF \u7167\u7247\u3002");let e=URL.createObjectURL(i);try{let t=await fo(e),n=document.createElement("canvas"),s=Math.min(1,2560/Math.max(t.width,t.height));return n.width=Math.round(t.width*s),n.height=Math.round(t.height*s),n.getContext("2d").drawImage(t,0,0,n.width,n.height),{src:n.toDataURL("image/jpeg",.9),title:i.name.replace(/\.[^.]+$/,""),alt:i.name,crop:{zoom:1,x:0,y:0}}}finally{URL.revokeObjectURL(e)}}async function vf(i,e){let t=null,n=!1,s={},r=Array(16).fill(null),o=Array(16).fill(null);try{t=await new Promise((h,u)=>{let m=indexedDB.open(my,1);m.onupgradeneeded=()=>m.result.createObjectStore("photos"),m.onsuccess=()=>h(m.result),m.onerror=()=>u(m.error),m.onblocked=()=>u(new Error("storage blocked"))}),s=await new Promise((h,u)=>{let m=t.transaction("photos").objectStore("photos").get("overrides");m.onsuccess=()=>h(m.result||{}),m.onerror=()=>u(m.error)})}catch{t?.close(),t=null,e("\u6D4F\u89C8\u5668\u65E0\u6CD5\u4FDD\u5B58\u7167\u7247\uFF1B\u9884\u7F6E\u6302\u7247\u4ECD\u53EF\u67E5\u770B\u3002")}let a=new AbortController;try{let h=await fetch(new URL("assets/carousel-photos.json",document.baseURI),{signal:a.signal});if(!h.ok)throw Error();let u=await h.json();for(let m of u.photos||[])if(Number.isInteger(m.slot)&&m.slot>=0&&m.slot<16&&typeof m.src=="string"){let b=new URL(m.src,document.baseURI);if(b.origin!==location.origin)continue;let g=(p,y,v,_)=>Number.isFinite(p)?Math.max(y,Math.min(v,p)):_;r[m.slot]={src:b.href,title:m.title||`\u7167\u7247 ${m.slot+1}`,alt:m.alt||m.title||"\u9884\u7F6E\u7167\u7247",crop:{zoom:g(m.crop?.zoom,1,3,1),x:g(m.crop?.x,-1,1,0),y:g(m.crop?.y,-1,1,0)}}}}catch{e("\u9884\u7F6E\u7167\u7247\u914D\u7F6E\u672A\u80FD\u52A0\u8F7D\uFF0C\u4ECD\u53EF\u81EA\u884C\u6302\u7167\u7247\u3002")}let l=async h=>{if(!h)return null;let u=await fo(h.src),m=document.createElement("canvas");return m.width=440,m.height=520,po(m,u,h.crop),m},d=r.map((h,u)=>Object.hasOwn(s,u)?s[u]:h);for(let h=0;h<d.length&&!n;h++){let u=d[h];try{let m=await l(u);o[h]=u,i.setPhoto(h,m)}catch{o[h]=null,e(`\u7B2C ${h+1} \u5F20\u6302\u7247\u65E0\u6CD5\u8BFB\u53D6\uFF0C\u8BF7\u68C0\u67E5\u7167\u7247\u8DEF\u5F84\u3002`)}}return{get slots(){return o},commit:async h=>{if(n)throw Error("\u76F8\u7247\u706F\u5DF2\u5173\u95ED");if(!t)throw Error("\u6D4F\u89C8\u5668\u65E0\u6CD5\u4FDD\u5B58\u7167\u7247\uFF0C\u8BF7\u5141\u8BB8\u7F51\u7AD9\u5B58\u50A8\u540E\u91CD\u8BD5\u3002");let u={...s,...h},m=r.map((g,p)=>Object.hasOwn(u,p)?u[p]:g),b=await Promise.all(m.map(l));n||(await new Promise((g,p)=>{let y=t.transaction("photos","readwrite");y.objectStore("photos").put(u,"overrides"),y.oncomplete=g,y.onerror=()=>p(y.error),y.onabort=()=>p(y.error)}),!n&&(s=u,o=m,b.forEach((g,p)=>i.setPhoto(p,g))))},async restore(){if(!t)throw Error("\u6D4F\u89C8\u5668\u65E0\u6CD5\u4FDD\u5B58\u7167\u7247\u3002");let h=await Promise.all(r.map(l));await new Promise((u,m)=>{let b=t.transaction("photos","readwrite");b.objectStore("photos").delete("overrides"),b.oncomplete=u,b.onerror=()=>m(b.error),b.onabort=()=>m(b.error)}),!n&&(s={},o=r.slice(),h.forEach((u,m)=>i.setPhoto(m,u)))},dispose(){n=!0,a.abort(),t?.close()}}}function bf({model:i,host:e,scene:t,renderer:n,camera:s,controls:r,canInteract:o}){let a=e.closest(".door-scene"),l=n.domElement,c=document.querySelector("#scene-status"),d="overview",f=null,h=null,u=null,m=!1,b=!1,g=-1,p=!0,y=null,v=null,_=null,M=null,S=new AbortController,w=S.signal,E=(k,ae,be)=>k.addEventListener(ae,be,{signal:w}),A=0,R=0,N=k=>{c.textContent=k,A=k?performance.now()+5e3:0},D=(k,ae,be)=>{let ue=document.createElement(k);return ae&&(ue.textContent=ae),be&&(ue.className=be),ue},B=(k,ae)=>{let be=D("button",k);return be.type="button",E(be,"click",ae),be},O=B("",()=>Ee());O.className="carousel-hit-target",O.setAttribute("aria-label","\u9760\u8FD1\u767D\u684C\u4E0A\u7684\u76F8\u7247\u706F"),O.title="\u770B\u770B\u76F8\u7247\u706F",e.append(O);let H=D("section",null,"carousel-panel");H.hidden=!0,H.setAttribute("aria-label","\u76F8\u7247\u706F\u64CD\u4F5C");let G=D("h3","\u684C\u4E0A\u7684\u56DE\u5FC6"),V=D("p","\u62D6\u52A8\u6728\u9A6C\u53EF\u4EE5\u65CB\u8F6C\uFF0C\u70B9\u51FB\u7167\u7247\u53EF\u4EE5\u62C9\u8FD1\u67E5\u770B\u3002"),K=D("div",null,"carousel-tools"),Q=D("input");Q.type="file",Q.accept="image/jpeg,image/png,image/webp,image/avif",Q.multiple=!0,Q.hidden=!0;let he=B("\u6279\u91CF\u6302\u7167\u7247",()=>Q.click()),Z=B("\u6682\u505C\u65CB\u8F6C",()=>{d==="photo"&&Re(),p=!p,i.rotate(p),Z.textContent=p?"\u6682\u505C\u65CB\u8F6C":"\u7EE7\u7EED\u65CB\u8F6C",Z.setAttribute("aria-pressed",String(p))});Z.setAttribute("aria-pressed","true");let ge=B("\u8D77\u98CE",()=>i.wind(performance.now())),we=B("\u6062\u590D\u9884\u7F6E\u7167\u7247",()=>j(async()=>{await u.restore(),N("\u5DF2\u6062\u590D\u968F\u5C0F\u5C4B\u9644\u5E26\u7684\u9884\u7F6E\u7167\u7247\u3002")})),Ve=B("\u56DE\u5230\u623F\u95F4",()=>Ie());K.append(he,Z,ge,Ve);let De=D("div",null,"carousel-grid"),$=[];for(let k=0;k<16;k++){let ae=B("",()=>Pe(k));ae.dataset.slot=String(k),$.push(ae),De.append(ae)}let le=D("small");le.append(document.createTextNode("\u76F8\u7247\u706F\u6539\u7F16\u81EA "));let oe=D("a","\u5495\u565C\u86CBDaria \xB7 Carousel Lamp");oe.href="https://github.com/Daria1216/carousel-lamp",oe.target="_blank",oe.rel="noopener",le.append(oe,document.createTextNode("\uFF08\u975E\u5546\u4E1A\u4F7F\u7528\uFF09"));let _e=B("\u6302\u5165 / \u7F16\u8F91\u9009\u4E2D\u7167\u7247",()=>se(g)),Me=B("\u5220\u9664\u9009\u4E2D\u7167\u7247",()=>j(async()=>{await u.commit({[g]:null}),N(`\u76F8\u6846 ${g+1} \u7684\u7167\u7247\u5DF2\u5220\u9664\u3002`)})),ee=B("\u8FD4\u56DE\u6574\u4E2A\u6728\u9A6C",()=>Re()),Se=D("div",null,"carousel-tools");Se.append(_e,Me,ee),H.append(G,V,K,Se,De,we,le,Q),a.append(H);let ve=D("dialog",null,"carousel-editor");ve.setAttribute("aria-labelledby","carousel-editor-title");let ce=D("h2");ce.id="carousel-editor-title";let de=D("canvas");de.width=440,de.height=520,de.setAttribute("role","img"),de.setAttribute("aria-label","\u5F53\u524D\u7167\u7247\u7684\u88C1\u526A\u9884\u89C8");let fe=D("p"),xe=D("div",null,"carousel-crop-controls"),me={};for(let[k,ae,be,ue,Be,He]of[["zoom","\u653E\u5927",1,3,.01,1],["x","\u5DE6\u53F3\u4F4D\u7F6E",-1,1,.01,0],["y","\u4E0A\u4E0B\u4F4D\u7F6E",-1,1,.01,0]]){let yt=D("label",ae),ft=D("input");ft.type="range",Object.assign(ft,{min:be,max:ue,step:Be,value:He}),me[k]=ft,yt.append(ft),xe.append(yt),E(ft,"input",()=>{v&&(v.crop=Object.fromEntries(Object.entries(me).map(([bn,En])=>[bn,Number(En.value)])),po(de,y,v.crop))})}let pe=D("input");pe.type="file",pe.accept=Q.accept,pe.hidden=!0;let ye=B("\u6302\u5165 / \u66F4\u6362\u7167\u7247",()=>pe.click()),Te=B("\u4FDD\u5B58\u88C1\u526A",()=>j(async()=>{v&&(await u.commit({[g]:v}),ve.close(),N("\u7167\u7247\u6302\u597D\u4E86\uFF0C\u91CD\u65B0\u6253\u5F00\u5C0F\u5C4B\u4E5F\u4F1A\u4FDD\u7559\u3002"))})),Ae=B("\u53D6\u4E0B\u7167\u7247",()=>j(async()=>{await u.commit({[g]:null}),ve.close(),N("\u7167\u7247\u5DF2\u53D6\u4E0B\u3002")})),C=D("label","\u4EA4\u6362\u5230 "),F=D("select");for(let k=0;k<16;k++){let ae=D("option",`\u76F8\u6846 ${k+1}`);ae.value=k,F.append(ae)}C.append(F);let Y=B("\u4EA4\u6362\u4F4D\u7F6E",()=>j(async()=>{let k=Number(F.value);k!==g&&(await u.commit({[k]:u.slots[g],[g]:u.slots[k]}),ve.close(),N("\u4E24\u5F20\u6302\u7247\u7684\u4F4D\u7F6E\u5DF2\u4EA4\u6362\u3002"))})),T=B("\u6536\u597D\u7167\u7247",()=>ve.close()),x=D("div",null,"carousel-tools");x.append(ye,Te,Ae,T);let I=D("p",null,"carousel-editor-message");I.setAttribute("role","status"),ve.append(ce,de,fe,xe,x,C,Y,I,pe),document.body.append(ve);let U=()=>{u&&(g>=0&&(V.hidden=!1,R=performance.now()+5e3),g>=0&&(V.textContent=`\u5DF2\u9009\u76F8\u6846 ${g+1} \xB7 ${u.slots[g]?.title||"\u7A7A\u76F8\u6846"}`),$.forEach((k,ae)=>{k.replaceChildren();let be=u.slots[ae];if(be){let ue=D("img");ue.src=be.src,ue.alt=be.alt||be.title||`\u7167\u7247 ${ae+1}`,k.append(ue)}k.append(D("span",`${String(ae+1).padStart(2,"0")} \xB7 ${be?be.title:"\u6302\u7167\u7247"}`)),k.setAttribute("aria-label",`\u76F8\u6846 ${ae+1}\uFF1A${be?be.title:"\u7A7A\u76F8\u6846\uFF0C\u6302\u7167\u7247"}`)}))},z=k=>{m=k;for(let ae of[...H.querySelectorAll("button,input"),...ve.querySelectorAll("button,input,select")])ae.disabled=k;_e.disabled=k||g<0,Me.disabled=k||g<0,Te.disabled=k||!v;for(let ae of Object.values(me))ae.disabled=k||!v},j=async k=>{if(!(m||!u||b)){z(!0),I.textContent="";try{await k(),b||U()}catch(ae){b||(N(ae.message||"\u7167\u7247\u672A\u80FD\u4FDD\u5B58\uFF0C\u8BF7\u91CD\u8BD5\u3002"),I.textContent=ae.message||"\u7167\u7247\u672A\u80FD\u4FDD\u5B58\uFF0C\u8BF7\u91CD\u8BD5\u3002")}finally{b||z(!1)}}};async function se(k){if(!(k<0||k>=16)&&!(m||!u||!["focused","photo"].includes(d)||ve.open||b)){g=k,i.select(k),ce.textContent=`\u76F8\u6846 ${k+1}`,v=u.slots[k]?structuredClone(u.slots[k]):null,y=null,I.textContent="",fe.textContent=v?v.title:"\u8FD9\u4E2A\u76F8\u6846\u8FD8\u7A7A\u7740\uFF0C\u53EF\u4EE5\u6302\u5165\u4E00\u5F20\u7167\u7247\u3002",z(!0);try{if(v&&(y=await fo(v.src)),b)return;for(let[ae,be]of Object.entries(me))be.value=v?.crop?.[ae]??(ae==="zoom"?1:0);po(de,y,v?.crop),ve.showModal(),T.focus()}catch(ae){N(ae.message)}finally{b||z(!1)}}}E(ve,"close",()=>{i.select(-1),v=null,y=null,pe.value="",$[g]?.focus()}),E(ve,"cancel",k=>{m&&k.preventDefault()}),E(pe,"change",()=>j(async()=>{let k=pe.files[0];if(!k)return;let ae=await Rh(k),be=await fo(ae.src);if(!b){v=ae,y=be,fe.textContent=ae.title;for(let[ue,Be]of Object.entries(me))Be.value=ue==="zoom"?1:0;po(de,be,ae.crop),pe.value=""}})),E(Q,"change",()=>j(async()=>{try{let k=Array.from(Q.files),ae=u.slots.flatMap((ue,Be)=>ue?[]:[Be]);if(!k.length)return;if(k.length>ae.length)throw Error(`\u8FD8\u5269 ${ae.length} \u4E2A\u7A7A\u76F8\u6846\uFF0C\u8BF7\u51CF\u5C11\u9009\u62E9\u7684\u7167\u7247\u6570\u91CF\u3002`);let be=await Promise.all(k.map(Rh));await u.commit(Object.fromEntries(be.map((ue,Be)=>[ae[Be],ue]))),N(`\u5DF2\u6302\u597D ${be.length} \u5F20\u7167\u7247\u3002`)}finally{Q.value=""}})),z(!0),vf(i,N).then(k=>{if(b){k.dispose();return}u=k,U(),z(!1)}).catch(()=>{b||N("\u7167\u7247\u6682\u65F6\u65E0\u6CD5\u51C6\u5907\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u8BD5\u3002")});let q=["minDistance","maxDistance","minPolarAngle","maxPolarAngle","minAzimuthAngle","maxAzimuthAngle","enableRotate","enableZoom"],ie=(k,ae,be)=>{f={start:performance.now(),from:s.position.clone(),targetFrom:r.target.clone(),position:k,target:ae,next:be},r.enabled=!1};function Ee(){if(d!=="overview"||!o()||b)return;_={position:s.position.clone(),target:r.target.clone(),limits:Object.fromEntries(q.map(ae=>[ae,r[ae]]))},r.minDistance=.1,r.maxDistance=30,r.minPolarAngle=0,r.maxPolarAngle=Math.PI,r.minAzimuthAngle=-1/0,r.maxAzimuthAngle=1/0,d="focusing",p=!1,i.rotate(!1),Z.textContent="\u7EE7\u7EED\u65CB\u8F6C",Z.setAttribute("aria-pressed","false"),a.classList.add("is-carousel-focus"),N("\u8D70\u8FD1\u684C\u4E0A\u7684\u76F8\u7247\u706F\u3002");let k=e.clientWidth<800;ie(k?new P(-1,1.84,3.55):new P(-1.26,1.58,3.05),new P(-2.13,k?.99:1.12,1.76),"focused")}function Ie(){!["focused","photo"].includes(d)||m||ve.open||(H.hidden=!0,d="returning",ie(_.position,_.target,"overview"))}function Pe(k){if(m||!u||!["focused","photo"].includes(d)||ve.open||f)return;g=k,z(!1),p=!1,i.rotate(!1),Z.textContent="\u7EE7\u7EED\u65CB\u8F6C",Z.setAttribute("aria-pressed","false"),i.select(k);let ae=i.faces[k];ae.updateWorldMatrix(!0,!1);let be=new P;ae.getWorldPosition(be);let ue=new P(0,0,1).transformDirection(ae.matrixWorld),Be=be.clone().addScaledVector(ue,.34);Be.y+=.015,e.clientWidth<800&&(be.y-=.04),V.hidden=!1,R=performance.now()+5e3,V.textContent=`\u5DF2\u9009\u76F8\u6846 ${k+1} \xB7 ${u.slots[k]?.title||"\u7A7A\u76F8\u6846"}`,d="photo-focusing",ie(Be,be,"photo")}function Re(){d!=="photo"||m||ve.open||f||(d="focusing",i.select(-1),ie(M.position.clone(),M.target.clone(),"focused"))}let Ge=new vn,Ze=new J,Ke=new P,W=k=>{let ae=l.getBoundingClientRect();return Ze.set((k.clientX-ae.left)/ae.width*2-1,-(k.clientY-ae.top)/ae.height*2+1),Ge.setFromCamera(Ze,s),Ge.intersectObjects(t.children,!0).find(be=>{if(be.object.userData.ignoreInteraction)return!1;for(let ue=be.object;ue;ue=ue.parent)if(!ue.visible)return!1;return!0})?.object},Ce=k=>{for(;k;){if(k===i.root)return!0;k=k.parent}return!1};return E(l,"pointerdown",k=>{k.button===0&&(h={id:k.pointerId,x:k.clientX,y:k.clientY,object:W(k),lastX:k.clientX,dragged:!1})}),E(l,"pointermove",k=>{!h||h.id!==k.pointerId||d!=="focused"||f||m||ve.open||(Math.hypot(k.clientX-h.x,k.clientY-h.y)>5&&(h.dragged=!0),h.dragged&&(p=!1,i.rotate(!1),Z.textContent="\u7EE7\u7EED\u65CB\u8F6C",Z.setAttribute("aria-pressed","false"),i.turn((k.clientX-h.lastX)*.009),k.preventDefault()),h.lastX=k.clientX)}),E(l,"pointerup",k=>{if(h&&!h.dragged&&h.id===k.pointerId&&Math.hypot(k.clientX-h.x,k.clientY-h.y)<5){let ae=W(k);Ce(h.object)&&Ce(ae)&&(d==="overview"?Ee():["focused","photo"].includes(d)&&Number.isInteger(ae.userData.photo)&&Pe(ae.userData.photo))}h=null}),E(l,"pointercancel",()=>{h=null}),E(document,"keydown",k=>{k.key==="Escape"&&!ve.open&&!k.defaultPrevented&&(d==="photo"?Re():Ie())}),{get active(){return d!=="overview"},get locked(){return!!f},returnToRoom:Ie,update(k,ae,be,ue,Be){if(f){let He=ue?1:Math.min(1,(k-f.start)/950),yt=He*He*(3-2*He);s.position.lerpVectors(f.from,f.position,yt),r.target.lerpVectors(f.targetFrom,f.target,yt),s.lookAt(r.target),He===1&&(d=f.next,f=null,r.enabled=!0,d==="photo"?(r.minDistance=.18,r.maxDistance=.55,r.enableRotate=!1,N("\u7167\u7247\u4ECD\u6302\u5728\u6728\u9A6C\u4E0A\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8FD1\u770B\u3002")):d==="focused"?(M={position:s.position.clone(),target:r.target.clone()},r.minDistance=.85,r.maxDistance=2.2,r.enableRotate=!1,H.hidden=!1,V.hidden=!1,V.textContent="\u62D6\u52A8\u6728\u9A6C\u53EF\u4EE5\u65CB\u8F6C\uFF0C\u70B9\u51FB\u7167\u7247\u53EF\u4EE5\u62C9\u8FD1\u67E5\u770B\u3002",R=k+5e3,N("\u62D6\u52A8\u6728\u9A6C\u53EF\u4EE5\u65CB\u8F6C\uFF0C\u70B9\u51FB\u7167\u7247\u62C9\u8FD1\u67E5\u770B\u3002"),Ve.focus()):(Object.assign(r,_.limits),a.classList.remove("is-carousel-focus"),N(""),O.focus()))}return A&&k>=A&&(c.textContent="",A=0),R&&k>=R&&(V.hidden=!0,R=0),i.update(k,ue,Be,ve.open||m||!!f||d==="photo"),i.root.updateWorldMatrix(!0,!1),Ke.set(0,3.3,0),i.root.localToWorld(Ke),Ke.project(s),O.style.left=`${(Ke.x*.5+.5)*ae}px`,O.style.top=`${(-Ke.y*.5+.5)*be}px`,O.hidden=d!=="overview"||!o()||Ke.z>1||Ke.z<-1,!!f},dispose(){b=!0,S.abort(),u?.dispose(),ve.close(),ve.remove(),H.remove(),O.remove(),a.classList.remove("is-carousel-focus"),i.dispose()}}}function gy(){let i=new Ue;i.name="\u72EC\u7ACB\u7684\u8001\u623F\u95F4";let e=jd(),t=e.wall,n=new Fe({color:"#242d2e",roughness:.35});function s(v,_,M,S,w=i){let E=S===t||S===e.wallLower?new Ht(..._):new Ut(..._,2,Math.min(.016,Math.min(..._)*.15));if(S.userData.worldSpan){let R=E.attributes.position,N=E.attributes.normal,D=E.attributes.uv,B=S.userData.worldSpan;for(let O=0;O<R.count;O++){let H=R.getX(O)+M[0],G=R.getY(O)+M[1],V=R.getZ(O)+M[2];D.setXY(O,(Math.abs(N.getX(O))>.5?V:H)/B,(Math.abs(N.getY(O))>.5?V:G)/B)}}if(S.userData.woodGrain){let R=E.attributes.position,N=E.attributes.normal,D=E.attributes.uv;for(let B=0;B<R.count;B++){let O=R.getX(B),H=R.getY(B),G=R.getZ(B),V=Math.abs(N.getY(B))>.5,K=V?_[2]>_[0]?G:O:Math.abs(N.getX(B))>.5?G:O,Q=V?_[2]>_[0]?O:G:H;D.setXY(B,(_[1]>Math.max(_[0],_[2])*2?H:K)/1.3,Q/.8)}}let A=new Xe(E,S);return A.name=v,A.position.set(...M),A.castShadow=!0,A.receiveShadow=!0,w.add(A),A}function r(v,_,M,S,w,E=i){let A=new Xe(new nt(_,_,M,12),w);return A.name=v,A.position.set(...S),A.castShadow=A.receiveShadow=!0,E.add(A),A}function o(v,_,M,S,w,E,A=i){for(let R of[-w/2,w/2])s(v,[.026,E,.026],[_+R,M,S],e.darkWood,A);for(let R of[-E/2,E/2])s(v,[w,.026,.026],[_,M+R,S],e.darkWood,A)}s("\u623F\u95F4\u5730\u9762\u57FA\u5EA7",[5.1,.16,4.4],[0,-.08,0],e.wood),s("\u6D45\u8272\u65E7\u5730\u7816",[5,.025,4.3],[0,.012,0],e.floor),s("\u540E\u5899",[5.08,2.55,.12],[0,1.275,-2.15],t),s("\u6DE1\u9F20\u5C3E\u8349\u7EFF\u65E7\u5899\u88D9",[4.98,.86,.006],[0,.43,-2.086],e.wallLower),s("\u5899\u88D9\u4E0A\u6CBF\u7EC6\u7EBF",[4.98,.012,.008],[0,.864,-2.08],e.concrete);for(let[v,_]of[[2.95,-.625],[.35,1.975]])s("\u53F3\u4FA7\u6DE1\u7EFF\u5899\u88D9",[.006,.86,v],[2.436,.43,_],e.wallLower),s("\u53F3\u4FA7\u5899\u88D9\u7EC6\u7EBF",[.008,.012,v],[2.43,.864,_],e.concrete);let a=new Ue;a.name="\u5DE6\u4FA7\u5256\u5207\u5899\u5C55\u793A\u7EC4",i.add(a);let l=[e.wallLower.clone(),e.concrete.clone(),e.darkWood.clone()];l.forEach(v=>v.transparent=!0),s("\u5DE6\u4FA7\u5256\u5207\u5899",[.12,.86,4.3],[-2.5,.43,0],l[0],a),s("\u5256\u5207\u5899\u7C73\u767D\u5207\u9762",[.13,.028,4.3],[-2.5,.874,0],l[1],a),s("\u5DE6\u4FA7\u5899\u6728\u8E22\u811A\u7EBF",[.038,.12,4.18],[-2.423,.06,0],l[2],a),a.userData.update=(v,_)=>{let M=at.smoothstep(v,1.35,1.54),S=at.smoothstep(-_,1.1,1.5),w=1-.94*M*S;for(let E of l)E.opacity=w,E.depthWrite=w>.98};let c=[-2.15,-1.25,.65,.85,1.75,2.15],d=[0,1.13,2.02,2.14,2.55];for(let v=0;v<c.length-1;v++)for(let _=0;_<d.length-1;_++){let M=(c[v]+c[v+1])/2,S=(d[_]+d[_+1])/2;M>-1.25&&M<.65&&S>1.13&&S<2.14||M>.85&&M<1.75&&S<2.02||s("\u53F3\u4FA7\u5899\u9762",[.12,d[_+1]-d[_],c[v+1]-c[v]],[2.5,S,M],t)}s("\u540E\u5899\u6728\u8E22\u811A\u7EBF",[4.98,.12,.05],[0,.06,-2.07],e.darkWood),s("\u53F3\u5899\u6728\u8E22\u811A\u7EBF",[.05,.12,2.92],[2.425,.06,-.64],e.darkWood),s("\u6728\u95E8\u65C1\u8E22\u811A\u7EBF",[.05,.12,.35],[2.425,.06,1.95],e.darkWood);let f=new Ue;f.name="\u957F\u6905\u540E\u65B9\u7684\u5355\u6247\u6728\u95E8",i.add(f),s("\u5173\u95ED\u7684\u6728\u95E8",[.065,1.98,.86],[2.48,.99,1.3],e.wood,f);for(let v of[.82,1.78])s("\u6728\u95E8\u7AD6\u95E8\u6846",[.14,2.1,.075],[2.43,1.05,v],e.darkWood,f);s("\u6728\u95E8\u4E0A\u95E8\u6846",[.14,.075,1.03],[2.43,2.07,1.3],e.darkWood,f);for(let[v,_]of[[.48,.65],[1.4,.95]]){s("\u6728\u95E8\u5185\u5D4C\u9762\u677F",[.025,_,.66],[2.437,v,1.3],e.panel,f);for(let M of[.965,1.635])s("\u95E8\u677F\u7AD6\u538B\u6761",[.035,_+.04,.025],[2.413,v,M],e.darkWood,f);for(let M of[v-_/2,v+_/2])s("\u95E8\u677F\u6A2A\u538B\u6761",[.035,.025,.69],[2.413,M,1.3],e.darkWood,f)}s("\u6728\u95E8\u628A\u624B",[.06,.12,.025],[2.39,.98,1.65],e.pipe,f);let h=e.view,u=s("\u957F\u6905\u4E0A\u65B9\u7684\u7A97\u666F",[.025,.98,1.9],[2.48,1.64,-.3],h);u.castShadow=!1;for(let v of[-1.25,.65])s("\u7A97\u6237\u7AD6\u8FB9\u6846",[.15,1.1,.055],[2.405,1.64,v],e.frame);for(let v of[1.1,2.18])s("\u7A97\u6237\u6A2A\u8FB9\u6846",[.15,.055,1.98],[2.405,v,-.3],e.frame);s("\u7A97\u6237\u5206\u683C",[.15,1.04,.04],[2.4,1.64,-.3],e.frame),s("\u7A97\u53F0",[.26,.055,2.1],[2.37,1.09,-.3],e.concrete);for(let v of[-.79,.19])s("\u7A97\u6237\u4E0B\u6CBF\u62C9\u624B",[.025,.04,.16],[2.31,1.19,v],e.metal);let m=new Ue;m.name="L\u5F62\u6728\u7535\u89C6\u67DC",i.add(m),s("\u7535\u89C6\u67DC\u957F\u8FB9",[1.9,.53,.52],[-1.3,.385,-1.77],e.wood,m),s("\u7535\u89C6\u67DC\u53E6\u4E00\u6761\u7B49\u957F\u8FB9",[.52,.53,1.38],[-1.99,.385,-.82],e.wood,m),s("\u7535\u89C6\u67DC\u4FA7\u8FB9\u67DC\u9876",[.57,.045,1.38],[-1.99,.67,-.82],e.darkWood,m);for(let v of[-1.17,-.53]){s("\u4FA7\u8FB9\u67DC\u95E8\u5185\u5D4C\u677F",[.035,.43,.56],[-1.712,.36,v],e.panel,m);for(let _ of[-.28,.28])s("\u4FA7\u67DC\u95E8\u96D5\u6846",[.028,.43,.025],[-1.686,.36,v+_],e.darkWood,m);for(let _ of[.145,.575])s("\u4FA7\u67DC\u95E8\u96D5\u6846",[.028,.025,.56],[-1.686,_,v],e.darkWood,m);s("\u4FA7\u8FB9\u67DC\u95E8\u628A\u624B",[.025,.08,.025],[-1.68,.37,v+.17],e.pipe,m)}for(let v of[-1.97,-.64])s("\u67DC\u95E8\u5185\u5D4C\u677F",[.48,.43,.035],[v,.36,-1.492],e.panel,m),o("\u67DC\u95E8\u96D5\u6846",v,.36,-1.467,.46,.41,m),o("\u67DC\u95E8\u5185\u5C42\u7EBF\u811A",v,.36,-1.463,.39,.34,m),s("\u67DC\u95E8\u628A\u624B",[.025,.08,.025],[v+.15,.37,-1.46],e.pipe,m);s("\u7535\u89C6\u67DC\u5F00\u653E\u683C\u6697\u90E8",[.68,.19,.012],[-1.3,.5,-1.492],e.darkWood,m),s("\u5F00\u653E\u683C\u5E95\u677F",[.7,.026,.07],[-1.3,.405,-1.465],e.wood,m),s("\u4E2D\u95F4\u62BD\u5C49\u9762",[.68,.19,.038],[-1.3,.265,-1.487],e.panel,m),o("\u62BD\u5C49\u7EBF\u811A",-1.3,.265,-1.462,.64,.16,m);for(let v of[-1.48,-1.12]){let _=r("\u62BD\u5C49\u5706\u628A\u624B",.018,.026,[v,.265,-1.441],e.pipe,m);_.rotation.x=Math.PI/2}s("\u67DC\u9876",[1.99,.045,.57],[-1.3,.67,-1.77],e.darkWood,m);for(let v of[.13,.615])s("\u67DC\u4F53\u6B63\u9762\u7EBF\u811A",[1.94,.035,.04],[-1.3,v,-1.492],e.darkWood,m),s("\u67DC\u4F53\u4FA7\u9762\u7EBF\u811A",[.04,.035,1.39],[-1.711,v,-.82],e.darkWood,m);for(let[v,_]of[[-2.15,-1.91],[-.46,-1.91],[-.46,-1.63],[-2.15,-.25],[-1.82,-.25]])s("\u67DC\u5B50\u77ED\u811A",[.11,.12,.11],[v,.06,_],e.darkWood,m),s("\u67DC\u811A\u5E95\u6258",[.13,.035,.13],[v,.025,_],e.wood,m);m.position.set(-.185,0,-.055);let b=new Ue;b.name="\u671D\u5411\u5851\u6599\u6905\u7684\u659C\u7F6E\u7535\u89C6",b.position.set(-1.335,0,-1.765),b.rotation.y=Math.atan2(1.235,2.505),i.add(b),s("\u7535\u89C6\u673A\u8EAB",[1.26,.75,.075],[0,1.09,0],n,b),s("\u7535\u89C6\u5C4F\u5E55",[1.17,.65,.005],[0,1.1,.042],new Fe({color:"#394545",roughness:.25}),b),s("\u7535\u89C6\u4E0B\u6CBF",[1.22,.025,.016],[0,.739,.053],n,b),s("\u7535\u89C6\u6307\u793A\u706F",[.012,.006,.009],[.53,.743,.07],new Lt({color:"#b1c4b8"}),b);for(let v of[-.42,.42]){let _=s("\u7535\u89C6\u652F\u811A",[.16,.028,.085],[v,.716,-.08],n,b);_.rotation.y=v<0?-.3:.3}let g=new Ue;g.name="\u6728\u957F\u6905",i.add(g),s("\u957F\u6905\u5750\u9762",[.62,.12,2.6],[2.04,.51,.58],e.wood,g),s("\u957F\u6905\u9760\u80CC",[.09,.66,2.6],[2.32,.85,.58],e.wood,g);for(let v of[-.38,.26,.9,1.54])s("\u9760\u80CC\u5185\u5D4C\u677F",[.025,.46,.57],[2.258,.88,v],e.panel,g);for(let v of[-.38,.26,.9,1.54]){for(let S of[-.3,.3])s("\u957F\u6905\u9760\u80CC\u5206\u683C\u96D5\u6846",[.035,.52,.035],[2.232,.88,v+S],e.darkWood,g);for(let S of[.62,1.14])s("\u957F\u6905\u9760\u80CC\u6A2A\u96D5\u6846",[.035,.035,.61],[2.232,S,v],e.darkWood,g);let _=[];for(let S=0;S<=48;S++){let w=S/48*Math.PI*2;_.push(new P(2.22,.88+Math.sin(w)*.19,v+Math.cos(w)*.245))}let M=new Xe(new bt(new pt(_),48,.009,6,!1),e.darkWood);M.name="\u692D\u5706\u6728\u96D5\u7EBF",g.add(M)}for(let v of[.15,.36,.57,.78,.99])s("\u957F\u6905\u5750\u9762\u62FC\u677F\u7F1D",[.55,.004,.003],[2.04,.572,v],e.darkWood,g);s("\u957F\u6905\u524D\u6CBF\u88D9\u677F",[.055,.15,2.51],[1.754,.4,.58],e.darkWood,g),s("\u957F\u6905\u4E0B\u6A2A\u6491",[.045,.055,2.45],[1.82,.17,.58],e.darkWood,g),s("\u9760\u80CC\u4E0A\u6CBF\u6728\u7EBF",[.13,.05,2.65],[2.305,1.18,.58],e.darkWood,g);for(let v of[-.665,1.825]){s("\u957F\u6905\u6276\u624B",[.64,.08,.07],[2.05,.83,v],e.darkWood,g);for(let _ of[1.82,2.24])s("\u957F\u6905\u6905\u817F",[.075,.45,.075],[_,.225,v],e.darkWood,g)}function p(v,_,M,S,w,E,A=.8){let R=new Ue;R.name=v,i.add(R),s("\u684C\u9762",[S,.065,w],[_,A,M],E,R);let N=A-.0325,D=v==="\u767D\u8272\u957F\u684C",B=D?.065:.09;for(let O of[-S/2+.065,S/2-.065])for(let H of[-w/2+.065,w/2-.065])s("\u684C\u817F",[B,N,B],[_+O,N/2,M+H],E,R),D||s("\u684C\u817F\u78E8\u635F\u811A\u5957",[.093,.065,.093],[_+O,.033,M+H],e.oldWood,R);if(D)for(let O of[-w/2+.065,w/2-.065])s("\u767D\u684C\u65B9\u7BA1\u5E95\u6A2A\u6491",[S-.065,.065,.065],[_,.048,M+O],E,R);for(let O of[-w/2+.055,w/2-.055])s("\u684C\u9762\u4E0B\u6A2A\u6881",[S-.1,.12,.05],[_,A-.1,M+O],E,R);for(let O of[-S/2+.055,S/2-.055])s("\u684C\u9762\u4E0B\u4FA7\u6881",[.05,.12,w-.1],[_+O,A-.1,M],E,R)}p("\u767D\u8272\u957F\u684C",-2.13,1.08,.62,1.9,e.cream),p("\u65E7\u6728\u684C",1.52,-1.42,1.58,1.2,e.oldWood,.9);for(let v of[1.12,1.52,1.92])s("\u65E7\u6728\u684C\u62FC\u677F\u63A5\u7F1D",[.003,.003,1.17],[v,.934,-1.42],e.darkWood);let y=Qd();return y.position.x-=.18,i.add(y),i.add(Sh(-.45,.7,"\u9752\u8272"),Sh(.25,.78,"\u84DD\u8272")),i.add(ef({deskOffsetX:-.18,cabinetOffsetX:-.185,cabinetOffsetZ:-.055})),i}function Ef(i){let e=new yi,t=new Zi({antialias:!0,alpha:!0,powerPreference:"low-power"});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.outputColorSpace=$e,t.toneMapping=Ei,t.toneMappingExposure=1.12,t.shadowMap.enabled=!0,t.shadowMap.type=ri,t.domElement.setAttribute("role","img"),t.domElement.setAttribute("aria-label","\u72EC\u7ACB\u7684\u8001\u5BB6\u623F\u95F4\uFF0CL\u5F62\u7535\u89C6\u67DC\u3001\u6728\u957F\u6905\u3001\u7D2B\u8272\u6C99\u53D1\u3001\u4E24\u5F20\u684C\u5B50\u548C\u9752\u84DD\u5851\u6599\u6905"),i.appendChild(t.domElement);let n=gy();e.add(n);let s=gf();n.add(s.root);let r=_f();n.add(r.root);let o=new Nt(36,1,.1,50),a=new $i(o,t.domElement);a.enableDamping=!0,a.enablePan=!1,a.minDistance=7,a.maxDistance=13,a.minPolarAngle=.95,a.maxPolarAngle=1.56,a.minAzimuthAngle=-Math.PI/2,a.maxAzimuthAngle=.35;let l=()=>{o.position.set(-3.4,5.35,9.4),a.target.set(0,1.1,0),a.update()};l();let c=new si("#edf1ed","#b4a694",1.15);e.add(c);let d=new Pn("#fff8ec",1.85);d.position.set(6,6,1),d.castShadow=!0,d.shadow.mapSize.set(2048,2048),d.shadow.camera.left=-4,d.shadow.camera.right=4,d.shadow.camera.top=4,d.shadow.camera.bottom=-4,d.shadow.normalBias=.018,d.shadow.radius=5,d.shadow.blurSamples=10,e.add(d);let f=new Pn("#e9efed",.55);f.position.set(-4,3,6),e.add(f);let h=new tr("#e9ebec",.12);e.add(h);let u=i.closest(".door-scene"),m=nf({room:n,scene:e,dayLights:{hemi:c,sun:d,fill:f,ambient:h},stage:u}),b=sf({room:n,stage:u,dayLights:{hemi:c,sun:d,fill:f,ambient:h},night:m}),g=of(u),p=n.getObjectByName("\u53CC\u5C42\u5976\u6CB9\u8349\u8393\u751F\u65E5\u86CB\u7CD5"),y=mf(t,$=>{document.querySelector("#scene-status").textContent=$});n.add(y.root),e.add(y.lampLight);let v,_,M,S=rf({host:i,scene:e,renderer:t,camera:o,controls:a,cake:p,night:m,canInteract:()=>!v?.active&&!_?.active&&!M?.active&&!g.open,onCelebrated:()=>g.show()});v=bf({model:y,host:i,scene:e,renderer:t,camera:o,controls:a,canInteract:()=>S.phase==="overview"&&!_?.active&&!M?.active&&!g.open}),_=yf({host:i,scene:e,renderer:t,camera:o,controls:a,calendar:r,television:n.getObjectByName("\u671D\u5411\u5851\u6599\u6905\u7684\u659C\u7F6E\u7535\u89C6"),canInteract:()=>S.phase==="overview"&&!v.active&&!M?.active&&!g.open}),M=xf({room:n,scene:e,host:i,renderer:t,camera:o,controls:a,night:m,canInteract:()=>S.phase==="overview"&&!v.active&&!_.active&&!g.open});let w=tf({sofa:n.getObjectByName("\u534A\u63A8\u5165\u767D\u684C\u7684\u7D2B\u8272\u6728\u6846\u6C99\u53D1"),scene:e,camera:o,renderer:t,host:i,canInteract:()=>S.phase==="overview"&&!v.active&&!_?.active&&!M?.active&&!g.open}),E=document.querySelector("#reset-view");E.textContent="\u56DE\u5230\u5168\u666F";let A=()=>{v.active?v.returnToRoom():_.active?_.returnToRoom():M.active?M.returnToRoom():S.phase!=="overview"?S.returnToRoom():l()};E.addEventListener("click",A);let R=0,N=0,D,B=!1,O=matchMedia("(prefers-reduced-motion: reduce)"),H=n.getObjectByName("\u53CC\u5C42\u5976\u6CB9\u8349\u8393\u751F\u65E5\u86CB\u7CD5").userData.animate,G=n.getObjectByName("\u5DE6\u4FA7\u5256\u5207\u5899\u5C55\u793A\u7EC4").userData.update,V=()=>{R=i.clientWidth,N=i.clientHeight,!(!R||!N)&&(t.setSize(R,N),o.aspect=R/N,o.fov=R/N<1.25?42:36,o.updateProjectionMatrix())},K=new ResizeObserver(V);K.observe(i),V();let Q=!1,he=null,Z=e.background,ge=[new je("#efe5d4"),new je("#25383d")],we=new Ue;we.name="\u6728\u9A6C\u8FD1\u666F\u67D4\u548C\u8865\u5149",we.add(new tr("#fff4e4",.7),new si("#fff7e9","#c4bbb0",.85)),we.visible=!1,e.add(we);let Ve=()=>{if(v.active!==Q)if(Q=v.active,we.visible=Q,Q){he=new Map(n.children.map($=>[$,$.visible]));for(let $ of n.children)$.visible=$===y.root;u.classList.add("is-carousel-isolated")}else{for(let[$,le]of he)$.visible=le;he=null,u.classList.remove("is-carousel-isolated"),e.background=Z}Q&&(e.background=ge[m.night||b.mode==="blue"?1:0])},De=()=>{if(B||(D=requestAnimationFrame(De),document.hidden||!R||!N))return;let $=performance.now();m.update($,O.matches),b.update($,O.matches);let le=v.update($,R,N,O.matches,m.carouselAmount),oe=_.update($,R,N,O.matches),_e=M.update($,R,N,O.matches),Me=S.update($,R,N,O.matches)||le||oe||_e;Ve(),Me||a.update(),E.disabled=Me,w.update($,R,N),H($/1e3,O.matches),s.update($/1e3,O.matches),n.getObjectByName("\u6447\u6446\u6302\u949F").userData.animate($/1e3,O.matches),G(a.getPolarAngle(),a.getAzimuthalAngle()),t.render(e,o)};return De(),{dispose(){B=!0,cancelAnimationFrame(D),K.disconnect(),w.dispose(),S.dispose(),v.dispose(),_.dispose(),M.dispose(),r.dispose(),u.classList.remove("is-carousel-isolated"),b.dispose(),m.dispose(),g.dispose(),a.dispose(),E.removeEventListener("click",A),E.disabled=!1;let $=new Set,le=new Set,oe=new Set;e.traverse(_e=>{_e.geometry&&$.add(_e.geometry),_e.material&&(le.add(_e.material),_e.material.map&&oe.add(_e.material.map))}),$.forEach(_e=>_e.dispose()),le.forEach(_e=>_e.dispose()),oe.forEach(_e=>_e.dispose()),t.dispose(),t.domElement.remove()}}}function Mf(i,e){let t=new yi,n=e==="phone"?Bl():Hl();n.position.set(0,0,0),n.rotation.y=0,t.add(n);let s=new Zi({antialias:!0,alpha:!0});s.setPixelRatio(Math.min(devicePixelRatio,2)),s.outputColorSpace=$e,s.toneMapping=Ei,s.toneMappingExposure=1.1,s.domElement.setAttribute("role","img"),s.domElement.setAttribute("aria-label",e==="phone"?"\u9ED1\u8272\u6DB2\u6676\u5C4F\u8001\u5F0F\u5EA7\u673A\u8FD1\u666F":"\u53CC\u5C42\u5976\u6CB9\u8349\u8393\u86CB\u7CD5\u4E0E\u4E00\u652F\u71C3\u7740\u7684\u8721\u70DB\u8FD1\u666F"),i.appendChild(s.domElement);let r=new Nt(35,1,.01,10),o=new $i(r,s.domElement);o.enableDamping=!0,o.enablePan=!1,o.minDistance=e==="phone"?.45:.75,o.maxDistance=2,e==="phone"?(r.position.set(.03,.6,.43),o.target.set(0,.06,0)):(r.position.set(.65,.68,1),o.target.set(0,.24,0)),o.update(),t.add(new si("#f2f4ec","#c0b8a7",1.7));let a=new Pn("#fff9ee",2);a.position.set(-2,4,3),t.add(a);let l=new Pn("#e8edf0",.6);l.position.set(3,2,-2),t.add(l);let c=matchMedia("(prefers-reduced-motion: reduce)"),d,f=!1,h=()=>{!i.clientWidth||!i.clientHeight||(s.setSize(i.clientWidth,i.clientHeight),r.aspect=i.clientWidth/i.clientHeight,r.updateProjectionMatrix())},u=new ResizeObserver(h);u.observe(i),h();let m=()=>{f||(d=requestAnimationFrame(m),o.update(),n.userData.animate?.(performance.now()/1e3,c.matches),s.render(t,r))};return m(),{dispose(){f=!0,cancelAnimationFrame(d),u.disconnect(),o.dispose();let b=new Set,g=new Set,p=new Set;t.traverse(y=>{y.geometry&&b.add(y.geometry),y.material&&(g.add(y.material),y.material.map&&p.add(y.material.map))}),b.forEach(y=>y.dispose()),g.forEach(y=>y.dispose()),p.forEach(y=>y.dispose()),s.dispose(),s.domElement.remove()}}}function _y(i){let e=new yi,t=new Zi({antialias:!0,alpha:!0,powerPreference:"low-power"});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.outputColorSpace=$e,t.toneMapping=Ei,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=ri,t.domElement.setAttribute("aria-label","\u53EF\u65CB\u8F6C\u7684\u6C34\u5F69\u8001\u5BB6\u95E8\u5ECA\uFF0C\u53CC\u6247\u6728\u95E8\u5173\u95ED\uFF0C\u4E24\u4FA7\u7A97\u6237\u4E0E\u77F3\u53F0\u9636"),t.domElement.setAttribute("role","img"),i.appendChild(t.domElement);let n=new Nt(34,1,.1,60),s=new $i(n,t.domElement);s.enableDamping=!0,s.dampingFactor=.085,s.enablePan=!1,s.rotateSpeed=.45,s.minAzimuthAngle=-.4,s.maxAzimuthAngle=.43,s.minPolarAngle=1.3,s.maxPolarAngle=1.49,s.minDistance=6.7,s.maxDistance=11.5,s.zoomSpeed=.6;function r(){n.position.set(1.3,3.2,9.4),s.target.set(0,1.47,.02),s.update()}r();let o=new si("#f8f1e4","#b0aa98",1.2);e.add(o);let a=new Pn("#fff3de",1.6);a.position.set(-3,6,7),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),a.shadow.camera.left=-5,a.shadow.camera.right=5,a.shadow.camera.top=5,a.shadow.camera.bottom=-5,a.shadow.normalBias=.03,a.shadow.bias=-3e-4,a.shadow.radius=4,a.shadow.blurSamples=8,e.add(a);let l=new Pn("#e8edef",.45);l.position.set(4,3,2),e.add(l);let c=Yd();e.add(c.group);let d=Kd();e.add(d.root);let f=new Zt("#fff8eb",0,5.5,2);f.position.set(0,2.52,-.43),f.castShadow=!0,f.shadow.mapSize.set(512,512),f.shadow.normalBias=.02,f.shadow.bias=-3e-4,e.add(f);let h=document.createElement("canvas");h.width=h.height=64;let u=h.getContext("2d"),m=u.createRadialGradient(32,32,0,32,32,32);m.addColorStop(0,"rgba(255,250,239,.65)"),m.addColorStop(.25,"rgba(255,248,231,.18)"),m.addColorStop(1,"rgba(255,248,231,0)"),u.fillStyle=m,u.fillRect(0,0,64,64);let b=new ii(new ni({map:new ct(h),transparent:!0,opacity:0,depthWrite:!1,blending:In,toneMapped:!1}));b.position.copy(c.bulb.position),b.position.z+=.035,b.scale.set(.28,.28,1),e.add(b);let g=i.closest(".door-scene"),p=$d({host:i,camera:n,controls:s,model:c,status:document.querySelector("#scene-status")}),y=Jd({host:i,scene:e,camera:n,controls:s,model:c,journey:p,status:document.querySelector("#scene-status")}),v=document.querySelector("#night-toggle"),_=document.createElement("button");_.className="bulb-hit-target",_.type="button",_.setAttribute("aria-label","\u70B9\u51FB\u706F\u6CE1\u5207\u6362\u663C\u591C"),_.setAttribute("aria-pressed","false"),_.title="\u70B9\u51FB\u706F\u6CE1\u5207\u6362\u663C\u591C",i.appendChild(_);let M=!1,S=0,w=performance.now();function E(){M=!M,g.classList.toggle("is-night",M),v.setAttribute("aria-pressed",String(M)),v.textContent=M?"\u56DE\u5230\u767D\u5929":"\u770B\u591C\u665A",_.setAttribute("aria-pressed",String(M))}v.addEventListener("click",E),_.addEventListener("click",E);let A=new P;function R(le){let oe=t.domElement.getBoundingClientRect();c.bulb.getWorldPosition(A),A.project(n);let _e=oe.left+(A.x+1)*oe.width/2,Me=oe.top+(1-A.y)*oe.height/2;return Math.hypot(le.clientX-_e,le.clientY-Me)<22}let N=null,D=le=>{N=[le.clientX,le.clientY]},B=le=>{N&&Math.hypot(le.clientX-N[0],le.clientY-N[1])<6&&R(le)&&E(),N=null},O=le=>{t.domElement.style.cursor=R(le)?"pointer":"grab"},H=()=>{N=null};t.domElement.addEventListener("pointerdown",D),t.domElement.addEventListener("pointerup",B),t.domElement.addEventListener("pointermove",O),t.domElement.addEventListener("pointercancel",H);let G=new Xe(new gt(100,100),new Yr({color:"#6c6b58",opacity:.08}));G.rotation.x=-Math.PI/2,G.position.y=-.007,G.receiveShadow=!0,e.add(G);let V=0,K=0,Q=!1,he;function Z(){V=i.clientWidth,K=i.clientHeight,!(!V||!K)&&(t.setSize(V,K),n.aspect=V/K,n.fov=V/K<1?48:34,n.updateProjectionMatrix())}let ge=new ResizeObserver(Z);ge.observe(i),Z();function we(le=performance.now()){if(Q||(he=requestAnimationFrame(we),document.hidden||i.closest("[hidden]")||!V||!K))return;let oe=Math.min((le-w)/1e3,.1);w=le;let _e=Number(M);S+=Math.sign(_e-S)*Math.min(Math.abs(_e-S),oe/.9),o.intensity=at.lerp(1.2,.2,S),a.intensity=at.lerp(1.6,.08,S),l.intensity=at.lerp(.45,.19,S),f.intensity=S*3.5,f.visible=S>.001,c.bulb.material.emissiveIntensity=S*3,b.material.opacity=S*.4,d.update(S);let Me=p.update(le,V,K),ee=y.update(le,V,K);!Me&&!ee&&!y.locked&&s.update(),t.render(e,n),c.bulb.getWorldPosition(A),A.project(n),_.style.left=`${(A.x+1)*V/2}px`,_.style.top=`${(1-A.y)*K/2}px`}we();let Ve=document.querySelector("#reset-view"),De=()=>{y.locked||(p.focused?p.returnToRoom():r())};Ve.addEventListener("click",De);let $=le=>{le.preventDefault(),document.querySelector("#scene-status").textContent="\u753B\u9762\u6682\u65F6\u4E2D\u65AD\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u8BD5\u3002"};return t.domElement.addEventListener("webglcontextlost",$),{reset:r,dispose(){Q=!0,cancelAnimationFrame(he),ge.disconnect(),s.dispose(),Ve.removeEventListener("click",De),p.dispose(),y.dispose(),v.removeEventListener("click",E),_.removeEventListener("click",E),_.remove(),t.domElement.removeEventListener("pointerdown",D),t.domElement.removeEventListener("pointerup",B),t.domElement.removeEventListener("pointermove",O),t.domElement.removeEventListener("pointercancel",H),t.domElement.removeEventListener("webglcontextlost",$);let le=new Set,oe=new Set,_e=new Set;e.traverse(Me=>{if(Me.geometry&&le.add(Me.geometry),Me.material)for(let ee of Array.isArray(Me.material)?Me.material:[Me.material]){oe.add(ee);for(let Se of Object.values(ee))Se?.isTexture&&_e.add(Se)}}),le.forEach(Me=>Me.dispose()),_e.forEach(Me=>Me.dispose()),oe.forEach(Me=>Me.dispose()),t.dispose(),t.domElement.remove()}}}return Ff(xy);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
