(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uf="160",Os={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uv=0,cd=1,hv=2,hg=1,fg=2,tr=3,hr=0,Hn=1,fi=2,Nr=0,mo=1,ud=2,hd=3,fd=4,fv=5,us=100,dv=101,pv=102,dd=103,pd=104,mv=200,gv=201,_v=202,vv=203,fh=204,dh=205,xv=206,yv=207,Sv=208,bv=209,Ev=210,Mv=211,Tv=212,wv=213,Av=214,Dv=0,Cv=1,Rv=2,_c=3,Pv=4,Lv=5,Iv=6,Fv=7,dg=0,Nv=1,Ov=2,Or=0,Uv=1,Bv=2,kv=3,pg=4,zv=5,Hv=6,md="attached",Vv="detached",mg=300,Ao=301,Do=302,vc=303,ph=304,Hc=306,Co=1e3,zn=1001,xc=1002,cn=1003,mh=1004,nc=1005,nn=1006,gg=1007,Vr=1008,Ur=1009,Gv=1010,Wv=1011,hf=1012,_g=1013,wr=1014,mi=1015,ar=1016,vg=1017,xg=1018,ps=1020,Xv=1021,di=1023,jv=1024,Yv=1025,ms=1026,Ro=1027,qv=1028,yg=1029,$v=1030,Sg=1031,bg=1033,su=33776,ou=33777,au=33778,lu=33779,gd=35840,_d=35841,vd=35842,xd=35843,Eg=36196,yd=37492,Sd=37496,bd=37808,Ed=37809,Md=37810,Td=37811,wd=37812,Ad=37813,Dd=37814,Cd=37815,Rd=37816,Pd=37817,Ld=37818,Id=37819,Fd=37820,Nd=37821,cu=36492,Od=36494,Ud=36495,Kv=36283,Bd=36284,kd=36285,zd=36286,Ua=2300,Po=2301,uu=2302,Hd=2400,Vd=2401,Gd=2402,Zv=2500,Jv=0,Mg=1,gh=2,Tg=3e3,Br=3001,Qv=3200,wg=3201,Ag=0,ex=1,pi="",Lt="srgb",Zt="srgb-linear",ff="display-p3",Vc="display-p3-linear",yc="linear",Dt="srgb",Sc="rec709",bc="p3",Bs=7680,Wd=519,tx=512,nx=513,ix=514,Dg=515,rx=516,sx=517,ox=518,ax=519,_h=35044,Xd="300 es",vh=1035,lr=2e3,Ec=2001;class Ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jd=1234567;const va=Math.PI/180,Lo=180/Math.PI;function yi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function Kt(s,e,t){return Math.max(e,Math.min(t,s))}function df(s,e){return(s%e+e)%e}function lx(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function cx(s,e,t){return s!==e?(t-s)/(e-s):0}function xa(s,e,t){return(1-t)*s+t*e}function ux(s,e,t,n){return xa(s,e,1-Math.exp(-t*n))}function hx(s,e=1){return e-Math.abs(df(s,e*2)-e)}function fx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function dx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function px(s,e){return s+Math.floor(Math.random()*(e-s+1))}function mx(s,e){return s+Math.random()*(e-s)}function gx(s){return s*(.5-Math.random())}function _x(s){s!==void 0&&(jd=s);let e=jd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vx(s){return s*va}function xx(s){return s*Lo}function xh(s){return(s&s-1)===0&&s!==0}function yx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Mc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sx(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Oi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const pf={DEG2RAD:va,RAD2DEG:Lo,generateUUID:yi,clamp:Kt,euclideanModulo:df,mapLinear:lx,inverseLerp:cx,lerp:xa,damp:ux,pingpong:hx,smoothstep:fx,smootherstep:dx,randInt:px,randFloat:mx,randFloatSpread:gx,seededRandom:_x,degToRad:vx,radToDeg:xx,isPowerOfTwo:xh,ceilPowerOfTwo:yx,floorPowerOfTwo:Mc,setQuaternionFromProperEuler:Sx,normalize:xt,denormalize:Oi};class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,n,i,r,o,a,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],S=i[1],y=i[4],b=i[7],w=i[2],M=i[5],T=i[8];return r[0]=o*_+a*S+l*w,r[3]=o*p+a*y+l*M,r[6]=o*m+a*b+l*T,r[1]=c*_+u*S+h*w,r[4]=c*p+u*y+h*M,r[7]=c*m+u*b+h*T,r[2]=f*_+d*S+g*w,r[5]=f*p+d*y+g*M,r[8]=f*m+d*b+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hu.makeScale(e,t)),this}rotate(e){return this.premultiply(hu.makeRotation(-e)),this}translate(e,t){return this.premultiply(hu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hu=new at;function Cg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ba(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bx(){const s=Ba("canvas");return s.style.display="block",s}const Yd={};function ya(s){s in Yd||(Yd[s]=!0,console.warn(s))}const qd=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$d=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),al={[Zt]:{transfer:yc,primaries:Sc,toReference:s=>s,fromReference:s=>s},[Lt]:{transfer:Dt,primaries:Sc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Vc]:{transfer:yc,primaries:bc,toReference:s=>s.applyMatrix3($d),fromReference:s=>s.applyMatrix3(qd)},[ff]:{transfer:Dt,primaries:bc,toReference:s=>s.convertSRGBToLinear().applyMatrix3($d),fromReference:s=>s.applyMatrix3(qd).convertLinearToSRGB()}},Ex=new Set([Zt,Vc]),dt={enabled:!0,_workingColorSpace:Zt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ex.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=al[e].toReference,i=al[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return al[s].primaries},getTransfer:function(s){return s===pi?yc:al[s].transfer}};function go(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ks;class Rg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ks===void 0&&(ks=Ba("canvas")),ks.width=e.width,ks.height=e.height;const n=ks.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=go(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(go(t[n]/255)*255):t[n]=go(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mx=0;class Pg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=yi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(du(i[o].image)):r.push(du(i[o]))}else r=du(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function du(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tx=0;class hn extends Ls{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=zn,i=zn,r=nn,o=Vr,a=di,l=Ur,c=hn.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=yi(),this.name="",this.source=new Pg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Br?Lt:pi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Co:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Co:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?Br:Tg}set encoding(e){ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Br?Lt:pi}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=mg;hn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,i=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(d+1)/2,w=(m+1)/2,M=(u+f)/4,T=(h+_)/4,E=(g+p)/4;return y>b&&y>w?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=M/n,r=T/n):b>w?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=M/i,r=E/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=T/r,i=E/r),this.set(n,i,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wx extends Ls{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ya("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Br?Lt:pi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new hn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr extends wx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Lg extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ax extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=1-a;const m=l*f+c*d+u*g+h*_,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const w=Math.sqrt(y),M=Math.atan2(w,m*S);p=Math.sin(p*M)/w,a=Math.sin(a*M)/w}const b=a*S;if(l=l*p+f*b,c=c*p+d*b,u=u*p+g*b,h=h*p+_*b,p===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pu.copy(this).projectOnVector(e),this.sub(pu)}reflect(e){return this.sub(pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pu=new H,Kd=new Gi;class pr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ei):Ei.fromBufferAttribute(r,o),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ll.copy(n.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),cl.subVectors(this.max,$o),zs.subVectors(e.a,$o),Hs.subVectors(e.b,$o),Vs.subVectors(e.c,$o),gr.subVectors(Hs,zs),_r.subVectors(Vs,Hs),Jr.subVectors(zs,Vs);let t=[0,-gr.z,gr.y,0,-_r.z,_r.y,0,-Jr.z,Jr.y,gr.z,0,-gr.x,_r.z,0,-_r.x,Jr.z,0,-Jr.x,-gr.y,gr.x,0,-_r.y,_r.x,0,-Jr.y,Jr.x,0];return!mu(t,zs,Hs,Vs,cl)||(t=[1,0,0,0,1,0,0,0,1],!mu(t,zs,Hs,Vs,cl))?!1:(ul.crossVectors(gr,_r),t=[ul.x,ul.y,ul.z],mu(t,zs,Hs,Vs,cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new H,new H,new H,new H,new H,new H,new H,new H],Ei=new H,ll=new pr,zs=new H,Hs=new H,Vs=new H,gr=new H,_r=new H,Jr=new H,$o=new H,cl=new H,ul=new H,Qr=new H;function mu(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Qr.fromArray(s,r);const a=i.x*Math.abs(Qr.x)+i.y*Math.abs(Qr.y)+i.z*Math.abs(Qr.z),l=e.dot(Qr),c=t.dot(Qr),u=n.dot(Qr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Dx=new pr,Ko=new H,gu=new H;class ji{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Dx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const t=Ko.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ko,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(gu)),this.expandByPoint(Ko.copy(e.center).sub(gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new H,_u=new H,hl=new H,vr=new H,vu=new H,fl=new H,xu=new H;class Go{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_u.copy(e).add(t).multiplyScalar(.5),hl.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(_u);const r=e.distanceTo(t)*.5,o=-this.direction.dot(hl),a=vr.dot(this.direction),l=-vr.dot(hl),c=vr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(_u).addScaledVector(hl,f),d}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const n=Ki.dot(this.direction),i=Ki.dot(Ki)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,n,i,r){vu.subVectors(t,e),fl.subVectors(n,e),xu.crossVectors(vu,fl);let o=this.direction.dot(xu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vr.subVectors(this.origin,e);const l=a*this.direction.dot(fl.crossVectors(vr,fl));if(l<0)return null;const c=a*this.direction.dot(vu.cross(vr));if(c<0||l+c>o)return null;const u=-a*vr.dot(xu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,p){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,p)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gs.setFromMatrixColumn(e,0).length(),r=1/Gs.setFromMatrixColumn(e,1).length(),o=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cx,e,Rx)}lookAt(e,t,n){const i=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),xr.crossVectors(n,$n),xr.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),xr.crossVectors(n,$n)),xr.normalize(),dl.crossVectors($n,xr),i[0]=xr.x,i[4]=dl.x,i[8]=$n.x,i[1]=xr.y,i[5]=dl.y,i[9]=$n.y,i[2]=xr.z,i[6]=dl.z,i[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],S=n[3],y=n[7],b=n[11],w=n[15],M=i[0],T=i[4],E=i[8],x=i[12],v=i[1],D=i[5],R=i[9],q=i[13],N=i[2],k=i[6],U=i[10],G=i[14],K=i[3],Z=i[7],I=i[11],se=i[15];return r[0]=o*M+a*v+l*N+c*K,r[4]=o*T+a*D+l*k+c*Z,r[8]=o*E+a*R+l*U+c*I,r[12]=o*x+a*q+l*G+c*se,r[1]=u*M+h*v+f*N+d*K,r[5]=u*T+h*D+f*k+d*Z,r[9]=u*E+h*R+f*U+d*I,r[13]=u*x+h*q+f*G+d*se,r[2]=g*M+_*v+p*N+m*K,r[6]=g*T+_*D+p*k+m*Z,r[10]=g*E+_*R+p*U+m*I,r[14]=g*x+_*q+p*G+m*se,r[3]=S*M+y*v+b*N+w*K,r[7]=S*T+y*D+b*k+w*Z,r[11]=S*E+y*R+b*U+w*I,r[15]=S*x+y*q+b*G+w*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+p*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=h*p*c-_*f*c+_*l*d-a*p*d-h*l*m+a*f*m,y=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,b=u*_*c-g*h*c+g*a*d-o*_*d-u*a*m+o*h*m,w=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,M=t*S+n*y+i*b+r*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=S*T,e[1]=(_*f*r-h*p*r-_*i*d+n*p*d+h*i*m-n*f*m)*T,e[2]=(a*p*r-_*l*r+_*i*c-n*p*c-a*i*m+n*l*m)*T,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*T,e[4]=y*T,e[5]=(u*p*r-g*f*r+g*i*d-t*p*d-u*i*m+t*f*m)*T,e[6]=(g*l*r-o*p*r-g*i*c+t*p*c+o*i*m-t*l*m)*T,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*d+t*l*d)*T,e[8]=b*T,e[9]=(g*h*r-u*_*r-g*n*d+t*_*d+u*n*m-t*h*m)*T,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*m+t*a*m)*T,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*T,e[12]=w*T,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*p+t*h*p)*T,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*T,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,p=o*h,m=a*h,S=l*c,y=l*u,b=l*h,w=n.x,M=n.y,T=n.z;return i[0]=(1-(_+m))*w,i[1]=(d+b)*w,i[2]=(g-y)*w,i[3]=0,i[4]=(d-b)*M,i[5]=(1-(f+m))*M,i[6]=(p+S)*M,i[7]=0,i[8]=(g+y)*T,i[9]=(p-S)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Gs.set(i[0],i[1],i[2]).length();const o=Gs.set(i[4],i[5],i[6]).length(),a=Gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Mi.copy(this);const c=1/r,u=1/o,h=1/a;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=h,Mi.elements[9]*=h,Mi.elements[10]*=h,t.setFromRotationMatrix(Mi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=lr){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(a===lr)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ec)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=lr){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),f=(t+e)*c,d=(n+i)*u;let g,_;if(a===lr)g=(o+r)*h,_=-2*h;else if(a===Ec)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gs=new H,Mi=new rt,Cx=new H(0,0,0),Rx=new H(1,1,1),xr=new H,dl=new H,$n=new H,Zd=new rt,Jd=new Gi;class Gc{constructor(e=0,t=0,n=0,i=Gc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gc.DEFAULT_ORDER="XYZ";class mf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Px=0;const Qd=new H,Ws=new Gi,Zi=new rt,pl=new H,Zo=new H,Lx=new H,Ix=new Gi,ep=new H(1,0,0),tp=new H(0,1,0),np=new H(0,0,1),Fx={type:"added"},Nx={type:"removed"};class Rt extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new H,t=new Gc,n=new Gi,i=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new at}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(ep,e)}rotateY(e){return this.rotateOnAxis(tp,e)}rotateZ(e){return this.rotateOnAxis(np,e)}translateOnAxis(e,t){return Qd.copy(e).applyQuaternion(this.quaternion),this.position.add(Qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ep,e)}translateY(e){return this.translateOnAxis(tp,e)}translateZ(e){return this.translateOnAxis(np,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pl.copy(e):pl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Zo,pl,this.up):Zi.lookAt(pl,Zo,this.up),this.quaternion.setFromRotationMatrix(Zi),i&&(Zi.extractRotation(i.matrixWorld),Ws.setFromRotationMatrix(Zi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Fx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,Lx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,Ix,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Rt.DEFAULT_UP=new H(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new H,Ji=new H,yu=new H,Qi=new H,Xs=new H,js=new H,ip=new H,Su=new H,bu=new H,Eu=new H;let ml=!1;class Di{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ti.subVectors(e,t),i.cross(Ti);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ti.subVectors(i,t),Ji.subVectors(n,t),yu.subVectors(e,t);const o=Ti.dot(Ti),a=Ti.dot(Ji),l=Ti.dot(yu),c=Ji.dot(Ji),u=Ji.dot(yu),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getUV(e,t,n,i,r,o,a,l){return ml===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ml=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qi.x),l.addScaledVector(o,Qi.y),l.addScaledVector(a,Qi.z),l)}static isFrontFacing(e,t,n,i){return Ti.subVectors(n,t),Ji.subVectors(e,t),Ti.cross(Ji).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Ti.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ml===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ml=!0),Di.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Di.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Xs.subVectors(i,n),js.subVectors(r,n),Su.subVectors(e,n);const l=Xs.dot(Su),c=js.dot(Su);if(l<=0&&c<=0)return t.copy(n);bu.subVectors(e,i);const u=Xs.dot(bu),h=js.dot(bu);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Xs,o);Eu.subVectors(e,r);const d=Xs.dot(Eu),g=js.dot(Eu);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(js,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return ip.subVectors(r,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(ip,a);const m=1/(p+_+f);return o=_*m,a=f*m,t.copy(n).addScaledVector(Xs,o).addScaledVector(js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},gl={h:0,s:0,l:0};function Mu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=df(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Mu(o,r,e+1/3),this.g=Mu(o,r,e),this.b=Mu(o,r,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=Ig[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}copyLinearToSRGB(e){return this.r=fu(e.r),this.g=fu(e.g),this.b=fu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return dt.fromWorkingColorSpace(_n.copy(this),e),Math.round(Kt(_n.r*255,0,255))*65536+Math.round(Kt(_n.g*255,0,255))*256+Math.round(Kt(_n.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(_n.copy(this),t);const n=_n.r,i=_n.g,r=_n.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Lt){dt.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,i=_n.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(gl);const n=xa(yr.h,gl.h,t),i=xa(yr.s,gl.s,t),r=xa(yr.l,gl.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new $e;$e.NAMES=Ig;let Ox=0;class Ri extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=mo,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=dh,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=_c,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(n.blending=this.blending),this.side!==hr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fh&&(n.blendSrc=this.blendSrc),this.blendDst!==dh&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_c&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gi extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sr=Ux();function Ux(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Bx(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Kt(s,-65504,65504),sr.floatView[0]=s;const e=sr.uint32View[0],t=e>>23&511;return sr.baseTable[t]+((e&8388607)>>sr.shiftTable[t])}function kx(s){const e=s>>10;return sr.uint32View[0]=sr.mantissaTable[sr.offsetTable[e]+(s&1023)]+sr.exponentTable[e],sr.floatView[0]}const _l={toHalfFloat:Bx,fromHalfFloat:kx},Yt=new H,vl=new xe;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_h,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vl.fromBufferAttribute(this,t),vl.applyMatrix3(e),this.setXY(t,vl.x,vl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}}class Fg extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ng extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vn extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zx=0;const ai=new rt,Tu=new Rt,Ys=new H,Kn=new pr,Jo=new pr,on=new H;class si extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cg(e)?Ng:Fg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return Tu.lookAt(e),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Vn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Jo.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Kn.min,Jo.min),Kn.expandByPoint(on),on.addVectors(Kn.max,Jo.max),Kn.expandByPoint(on)):(Kn.expandByPoint(Jo.min),Kn.expandByPoint(Jo.max))}Kn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&(Ys.fromBufferAttribute(e,c),on.add(Ys)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let v=0;v<a;v++)c[v]=new H,u[v]=new H;const h=new H,f=new H,d=new H,g=new xe,_=new xe,p=new xe,m=new H,S=new H;function y(v,D,R){h.fromArray(i,v*3),f.fromArray(i,D*3),d.fromArray(i,R*3),g.fromArray(o,v*2),_.fromArray(o,D*2),p.fromArray(o,R*2),f.sub(h),d.sub(h),_.sub(g),p.sub(g);const q=1/(_.x*p.y-p.x*_.y);isFinite(q)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(d,-_.y).multiplyScalar(q),S.copy(d).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(q),c[v].add(m),c[D].add(m),c[R].add(m),u[v].add(S),u[D].add(S),u[R].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let v=0,D=b.length;v<D;++v){const R=b[v],q=R.start,N=R.count;for(let k=q,U=q+N;k<U;k+=3)y(n[k+0],n[k+1],n[k+2])}const w=new H,M=new H,T=new H,E=new H;function x(v){T.fromArray(r,v*3),E.copy(T);const D=c[v];w.copy(D),w.sub(T.multiplyScalar(T.dot(D))).normalize(),M.crossVectors(E,D);const q=M.dot(u[v])<0?-1:1;l[v*4]=w.x,l[v*4+1]=w.y,l[v*4+2]=w.z,l[v*4+3]=q}for(let v=0,D=b.length;v<D;++v){const R=b[v],q=R.start,N=R.count;for(let k=q,U=q+N;k<U;k+=3)x(n[k+0]),x(n[k+1]),x(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new Wt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new si,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rp=new rt,es=new Go,xl=new ji,sp=new H,qs=new H,$s=new H,Ks=new H,wu=new H,yl=new H,Sl=new xe,bl=new xe,El=new xe,op=new H,ap=new H,lp=new H,Ml=new H,Tl=new H;class dn extends Rt{constructor(e=new si,t=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){yl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(wu.fromBufferAttribute(h,e),o?yl.addScaledVector(wu,u):yl.addScaledVector(wu.sub(t),u))}t.add(yl)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(xl.containsPoint(es.origin)===!1&&(es.intersectSphere(xl,sp)===null||es.origin.distanceToSquared(sp)>(e.far-e.near)**2))&&(rp.copy(r).invert(),es.copy(e.ray).applyMatrix4(rp),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],S=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let b=S,w=y;b<w;b+=3){const M=a.getX(b),T=a.getX(b+1),E=a.getX(b+2);i=wl(this,m,e,n,c,u,h,M,T,E),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const S=a.getX(p),y=a.getX(p+1),b=a.getX(p+2);i=wl(this,o,e,n,c,u,h,S,y,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],S=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let b=S,w=y;b<w;b+=3){const M=b,T=b+1,E=b+2;i=wl(this,m,e,n,c,u,h,M,T,E),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const S=p,y=p+1,b=p+2;i=wl(this,o,e,n,c,u,h,S,y,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Hx(s,e,t,n,i,r,o,a){let l;if(e.side===Hn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===hr,a),l===null)return null;Tl.copy(a),Tl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Tl);return c<t.near||c>t.far?null:{distance:c,point:Tl.clone(),object:s}}function wl(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,qs),s.getVertexPosition(l,$s),s.getVertexPosition(c,Ks);const u=Hx(s,e,t,n,qs,$s,Ks,Ml);if(u){i&&(Sl.fromBufferAttribute(i,a),bl.fromBufferAttribute(i,l),El.fromBufferAttribute(i,c),u.uv=Di.getInterpolation(Ml,qs,$s,Ks,Sl,bl,El,new xe)),r&&(Sl.fromBufferAttribute(r,a),bl.fromBufferAttribute(r,l),El.fromBufferAttribute(r,c),u.uv1=Di.getInterpolation(Ml,qs,$s,Ks,Sl,bl,El,new xe),u.uv2=u.uv1),o&&(op.fromBufferAttribute(o,a),ap.fromBufferAttribute(o,l),lp.fromBufferAttribute(o,c),u.normal=Di.getInterpolation(Ml,qs,$s,Ks,op,ap,lp,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};Di.getNormal(qs,$s,Ks,h.normal),u.face=h}return u}class Qa extends si{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Vn(c,3)),this.setAttribute("normal",new Vn(u,3)),this.setAttribute("uv",new Vn(h,2));function g(_,p,m,S,y,b,w,M,T,E,x){const v=b/T,D=w/E,R=b/2,q=w/2,N=M/2,k=T+1,U=E+1;let G=0,K=0;const Z=new H;for(let I=0;I<U;I++){const se=I*D-q;for(let le=0;le<k;le++){const Q=le*v-R;Z[_]=Q*S,Z[p]=se*y,Z[m]=N,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[p]=0,Z[m]=M>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(le/T),h.push(1-I/E),G+=1}}for(let I=0;I<E;I++)for(let se=0;se<T;se++){const le=f+se+k*I,Q=f+se+k*(I+1),oe=f+(se+1)+k*(I+1),_e=f+(se+1)+k*I;l.push(le,Q,_e),l.push(Q,oe,_e),K+=6}a.addGroup(d,K,x),d+=K,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Io(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dn(s){const e={};for(let t=0;t<s.length;t++){const n=Io(s[t]);for(const i in n)e[i]=n[i]}return e}function Vx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Og(s){return s.getRenderTarget()===null?s.outputColorSpace:dt.workingColorSpace}const Gx={clone:Io,merge:Dn};var Wx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wr extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wx,this.fragmentShader=Xx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=Vx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ug extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=lr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ln extends Ug{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(va*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zs=-90,Js=1;class jx extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ln(Zs,Js,e,t);i.layers=this.layers,this.add(i);const r=new Ln(Zs,Js,e,t);r.layers=this.layers,this.add(r);const o=new Ln(Zs,Js,e,t);o.layers=this.layers,this.add(o);const a=new Ln(Zs,Js,e,t);a.layers=this.layers,this.add(a);const l=new Ln(Zs,Js,e,t);l.layers=this.layers,this.add(l);const c=new Ln(Zs,Js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===lr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ec)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bg extends hn{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ao,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yx extends Gr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ya("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Br?Lt:pi),this.texture=new Bg(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qa(5,5,5),r=new Wr({name:"CubemapFromEquirect",uniforms:Io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:Nr});r.uniforms.tEquirect.value=t;const o=new dn(i,r),a=t.minFilter;return t.minFilter===Vr&&(t.minFilter=nn),new jx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Au=new H,qx=new H,$x=new at;class Mr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Au.subVectors(n,t).cross(qx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Au),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$x.getNormalMatrix(e),i=this.coplanarPoint(Au).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new ji,Al=new H;class gf{constructor(e=new Mr,t=new Mr,n=new Mr,i=new Mr,r=new Mr,o=new Mr){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=lr){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],S=i[13],y=i[14],b=i[15];if(n[0].setComponents(l-r,f-c,p-d,b-m).normalize(),n[1].setComponents(l+r,f+c,p+d,b+m).normalize(),n[2].setComponents(l+o,f+u,p+g,b+S).normalize(),n[3].setComponents(l-o,f-u,p-g,b-S).normalize(),n[4].setComponents(l-a,f-h,p-_,b-y).normalize(),t===lr)n[5].setComponents(l+a,f+h,p+_,b+y).normalize();else if(t===Ec)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Al.x=i.normal.x>0?e.max.x:e.min.x,Al.y=i.normal.y>0?e.max.y:e.min.y,Al.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kg(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Kx(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=h.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,u,h){const f=u.array,d=u._updateRange,g=u.updateRanges;if(s.bindBuffer(h,c),d.count===-1&&g.length===0&&s.bufferSubData(h,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?s.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):s.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Wo extends si{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const S=m*f-o;for(let y=0;y<c;y++){const b=y*h-r;g.push(b,-S,0),_.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const y=S+c*m,b=S+c*(m+1),w=S+1+c*(m+1),M=S+1+c*m;d.push(y,b,M),d.push(b,w,M)}this.setIndex(d),this.setAttribute("position",new Vn(g,3)),this.setAttribute("normal",new Vn(_,3)),this.setAttribute("uv",new Vn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jx=`#ifdef USE_ALPHAHASH
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
#endif`,Qx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ty=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ny=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iy=`#ifdef USE_AOMAP
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
#endif`,ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,oy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ay=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ly=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uy=`#ifdef USE_IRIDESCENCE
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
#endif`,hy=`#ifdef USE_BUMPMAP
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
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yy=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Sy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,by=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ey=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ty=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ay="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,By=`#ifdef USE_GRADIENTMAP
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
}`,ky=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gy=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Wy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Xy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$y=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Ky=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zy=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Qy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,iS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aS=`#if defined( USE_POINTS_UV )
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
#endif`,lS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xS=`#ifdef USE_NORMALMAP
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
#endif`,yS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ES=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,IS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,FS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,NS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,US=`#ifdef USE_SKINNING
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
#endif`,BS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kS=`#ifdef USE_SKINNING
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
#endif`,zS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GS=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WS=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XS=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$S=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZS=`uniform sampler2D t2D;
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
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`#include <common>
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
}`,ib=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rb=`#define DISTANCE
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
}`,sb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ab=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cb=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ub=`#include <common>
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
}`,hb=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,fb=`#define LAMBERT
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
}`,db=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pb=`#define MATCAP
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
}`,mb=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,gb=`#define NORMAL
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
}`,_b=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vb=`#define PHONG
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
}`,xb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,yb=`#define STANDARD
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
}`,Sb=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,bb=`#define TOON
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
}`,Eb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Mb=`uniform float size;
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
}`,Tb=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,wb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Ab=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Db=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Cb=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,it={alphahash_fragment:Zx,alphahash_pars_fragment:Jx,alphamap_fragment:Qx,alphamap_pars_fragment:ey,alphatest_fragment:ty,alphatest_pars_fragment:ny,aomap_fragment:iy,aomap_pars_fragment:ry,batching_pars_vertex:sy,batching_vertex:oy,begin_vertex:ay,beginnormal_vertex:ly,bsdfs:cy,iridescence_fragment:uy,bumpmap_pars_fragment:hy,clipping_planes_fragment:fy,clipping_planes_pars_fragment:dy,clipping_planes_pars_vertex:py,clipping_planes_vertex:my,color_fragment:gy,color_pars_fragment:_y,color_pars_vertex:vy,color_vertex:xy,common:yy,cube_uv_reflection_fragment:Sy,defaultnormal_vertex:by,displacementmap_pars_vertex:Ey,displacementmap_vertex:My,emissivemap_fragment:Ty,emissivemap_pars_fragment:wy,colorspace_fragment:Ay,colorspace_pars_fragment:Dy,envmap_fragment:Cy,envmap_common_pars_fragment:Ry,envmap_pars_fragment:Py,envmap_pars_vertex:Ly,envmap_physical_pars_fragment:Wy,envmap_vertex:Iy,fog_vertex:Fy,fog_pars_vertex:Ny,fog_fragment:Oy,fog_pars_fragment:Uy,gradientmap_pars_fragment:By,lightmap_fragment:ky,lightmap_pars_fragment:zy,lights_lambert_fragment:Hy,lights_lambert_pars_fragment:Vy,lights_pars_begin:Gy,lights_toon_fragment:Xy,lights_toon_pars_fragment:jy,lights_phong_fragment:Yy,lights_phong_pars_fragment:qy,lights_physical_fragment:$y,lights_physical_pars_fragment:Ky,lights_fragment_begin:Zy,lights_fragment_maps:Jy,lights_fragment_end:Qy,logdepthbuf_fragment:eS,logdepthbuf_pars_fragment:tS,logdepthbuf_pars_vertex:nS,logdepthbuf_vertex:iS,map_fragment:rS,map_pars_fragment:sS,map_particle_fragment:oS,map_particle_pars_fragment:aS,metalnessmap_fragment:lS,metalnessmap_pars_fragment:cS,morphcolor_vertex:uS,morphnormal_vertex:hS,morphtarget_pars_vertex:fS,morphtarget_vertex:dS,normal_fragment_begin:pS,normal_fragment_maps:mS,normal_pars_fragment:gS,normal_pars_vertex:_S,normal_vertex:vS,normalmap_pars_fragment:xS,clearcoat_normal_fragment_begin:yS,clearcoat_normal_fragment_maps:SS,clearcoat_pars_fragment:bS,iridescence_pars_fragment:ES,opaque_fragment:MS,packing:TS,premultiplied_alpha_fragment:wS,project_vertex:AS,dithering_fragment:DS,dithering_pars_fragment:CS,roughnessmap_fragment:RS,roughnessmap_pars_fragment:PS,shadowmap_pars_fragment:LS,shadowmap_pars_vertex:IS,shadowmap_vertex:FS,shadowmask_pars_fragment:NS,skinbase_vertex:OS,skinning_pars_vertex:US,skinning_vertex:BS,skinnormal_vertex:kS,specularmap_fragment:zS,specularmap_pars_fragment:HS,tonemapping_fragment:VS,tonemapping_pars_fragment:GS,transmission_fragment:WS,transmission_pars_fragment:XS,uv_pars_fragment:jS,uv_pars_vertex:YS,uv_vertex:qS,worldpos_vertex:$S,background_vert:KS,background_frag:ZS,backgroundCube_vert:JS,backgroundCube_frag:QS,cube_vert:eb,cube_frag:tb,depth_vert:nb,depth_frag:ib,distanceRGBA_vert:rb,distanceRGBA_frag:sb,equirect_vert:ob,equirect_frag:ab,linedashed_vert:lb,linedashed_frag:cb,meshbasic_vert:ub,meshbasic_frag:hb,meshlambert_vert:fb,meshlambert_frag:db,meshmatcap_vert:pb,meshmatcap_frag:mb,meshnormal_vert:gb,meshnormal_frag:_b,meshphong_vert:vb,meshphong_frag:xb,meshphysical_vert:yb,meshphysical_frag:Sb,meshtoon_vert:bb,meshtoon_frag:Eb,points_vert:Mb,points_frag:Tb,shadow_vert:wb,shadow_frag:Ab,sprite_vert:Db,sprite_frag:Cb},we={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ni={basic:{uniforms:Dn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Dn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new $e(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Dn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Dn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Dn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new $e(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Dn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Dn([we.points,we.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Dn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Dn([we.common,we.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Dn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Dn([we.sprite,we.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Dn([we.common,we.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Dn([we.lights,we.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Ni.physical={uniforms:Dn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Dl={r:0,b:0,g:0};function Rb(s,e,t,n,i,r,o){const a=new $e(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(p,m){let S=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=(m.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),S=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Hc)?(u===void 0&&(u=new dn(new Qa(1,1,1),new Wr({name:"BackgroundCubeMaterial",uniforms:Io(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=dt.getTransfer(y.colorSpace)!==Dt,(h!==y||f!==y.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new dn(new Wo(2,2),new Wr({name:"BackgroundMaterial",uniforms:Io(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=dt.getTransfer(y.colorSpace)!==Dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(Dl,Og(s)),n.buffers.color.setClear(Dl.r,Dl.g,Dl.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Pb(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function h(N,k,U,G,K){let Z=!1;if(o){const I=_(G,U,k);c!==I&&(c=I,d(c.object)),Z=m(N,G,U,K),Z&&S(N,G,U,K)}else{const I=k.wireframe===!0;(c.geometry!==G.id||c.program!==U.id||c.wireframe!==I)&&(c.geometry=G.id,c.program=U.id,c.wireframe=I,Z=!0)}K!==null&&t.update(K,s.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,E(N,k,U,G),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(N){return n.isWebGL2?s.bindVertexArray(N):r.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?s.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function _(N,k,U){const G=U.wireframe===!0;let K=a[N.id];K===void 0&&(K={},a[N.id]=K);let Z=K[k.id];Z===void 0&&(Z={},K[k.id]=Z);let I=Z[G];return I===void 0&&(I=p(f()),Z[G]=I),I}function p(N){const k=[],U=[],G=[];for(let K=0;K<i;K++)k[K]=0,U[K]=0,G[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:U,attributeDivisors:G,object:N,attributes:{},index:null}}function m(N,k,U,G){const K=c.attributes,Z=k.attributes;let I=0;const se=U.getAttributes();for(const le in se)if(se[le].location>=0){const oe=K[le];let _e=Z[le];if(_e===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor)),oe===void 0||oe.attribute!==_e||_e&&oe.data!==_e.data)return!0;I++}return c.attributesNum!==I||c.index!==G}function S(N,k,U,G){const K={},Z=k.attributes;let I=0;const se=U.getAttributes();for(const le in se)if(se[le].location>=0){let oe=Z[le];oe===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor));const _e={};_e.attribute=oe,oe&&oe.data&&(_e.data=oe.data),K[le]=_e,I++}c.attributes=K,c.attributesNum=I,c.index=G}function y(){const N=c.newAttributes;for(let k=0,U=N.length;k<U;k++)N[k]=0}function b(N){w(N,0)}function w(N,k){const U=c.newAttributes,G=c.enabledAttributes,K=c.attributeDivisors;U[N]=1,G[N]===0&&(s.enableVertexAttribArray(N),G[N]=1),K[N]!==k&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,k),K[N]=k)}function M(){const N=c.newAttributes,k=c.enabledAttributes;for(let U=0,G=k.length;U<G;U++)k[U]!==N[U]&&(s.disableVertexAttribArray(U),k[U]=0)}function T(N,k,U,G,K,Z,I){I===!0?s.vertexAttribIPointer(N,k,U,K,Z):s.vertexAttribPointer(N,k,U,G,K,Z)}function E(N,k,U,G){if(n.isWebGL2===!1&&(N.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const K=G.attributes,Z=U.getAttributes(),I=k.defaultAttributeValues;for(const se in Z){const le=Z[se];if(le.location>=0){let Q=K[se];if(Q===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){const oe=Q.normalized,_e=Q.itemSize,Ae=t.get(Q);if(Ae===void 0)continue;const ye=Ae.buffer,re=Ae.type,A=Ae.bytesPerElement,O=n.isWebGL2===!0&&(re===s.INT||re===s.UNSIGNED_INT||Q.gpuType===_g);if(Q.isInterleavedBufferAttribute){const z=Q.data,L=z.stride,X=Q.offset;if(z.isInstancedInterleavedBuffer){for(let W=0;W<le.locationSize;W++)w(le.location+W,z.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let W=0;W<le.locationSize;W++)b(le.location+W);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let W=0;W<le.locationSize;W++)T(le.location+W,_e/le.locationSize,re,oe,L*A,(X+_e/le.locationSize*W)*A,O)}else{if(Q.isInstancedBufferAttribute){for(let z=0;z<le.locationSize;z++)w(le.location+z,Q.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let z=0;z<le.locationSize;z++)b(le.location+z);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let z=0;z<le.locationSize;z++)T(le.location+z,_e/le.locationSize,re,oe,_e*A,_e/le.locationSize*z*A,O)}}else if(I!==void 0){const oe=I[se];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(le.location,oe);break;case 3:s.vertexAttrib3fv(le.location,oe);break;case 4:s.vertexAttrib4fv(le.location,oe);break;default:s.vertexAttrib1fv(le.location,oe)}}}}M()}function x(){R();for(const N in a){const k=a[N];for(const U in k){const G=k[U];for(const K in G)g(G[K].object),delete G[K];delete k[U]}delete a[N]}}function v(N){if(a[N.id]===void 0)return;const k=a[N.id];for(const U in k){const G=k[U];for(const K in G)g(G[K].object),delete G[K];delete k[U]}delete a[N.id]}function D(N){for(const k in a){const U=a[k];if(U[N.id]===void 0)continue;const G=U[N.id];for(const K in G)g(G[K].object),delete G[K];delete U[N.id]}}function R(){q(),u=!0,c!==l&&(c=l,d(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:R,resetDefaultState:q,dispose:x,releaseStatesOfGeometry:v,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:b,disableUnusedAttributes:M}}function Lb(s,e,t,n){const i=n.isWebGL2;let r;function o(u){r=u}function a(u,h){s.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,f){if(f===0)return;let d,g;if(i)d=s,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,u,h,f),t.update(h,r,f)}function c(u,h,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{d.multiDrawArraysWEBGL(r,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ib(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,b=o||e.has("OES_texture_float"),w=y&&b,M=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:w,maxSamples:M}}function Fb(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Mr,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const S=r?0:n,y=S*4;let b=m.clippingState||null;l.value=b,b=u(g,f,y,d);for(let w=0;w!==y;++w)b[w]=t[w];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,b=d;y!==_;++y,b+=4)o.copy(h[y]).applyMatrix4(S,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Nb(s){let e=new WeakMap;function t(o,a){return a===vc?o.mapping=Ao:a===ph&&(o.mapping=Do),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===vc||a===ph)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yx(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Wc extends Ug{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lo=4,cp=[.125,.215,.35,.446,.526,.582],hs=20,Du=new Wc,up=new $e;let Cu=null,Ru=0,Pu=0;const ss=(1+Math.sqrt(5))/2,Qs=1/ss,hp=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,ss,Qs),new H(0,ss,-Qs),new H(Qs,0,ss),new H(-Qs,0,ss),new H(ss,Qs,0),new H(-ss,Qs,0)];class fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Cu=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cu,Ru,Pu),e.scissorTest=!1,Cl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ao||e.mapping===Do?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cu=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ar,format:di,colorSpace:Zt,depthBuffer:!1},i=dp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dp(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ob(r)),this._blurMaterial=Ub(r,e,t)}return i}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,Du)}_sceneToCubeUV(e,t,n,i){const a=new Ln(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(up),u.toneMapping=Or,u.autoClear=!1;const d=new gi({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),g=new dn(new Qa,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(up),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;Cl(i,S*y,m>2?y:0,y,y),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ao||e.mapping===Do;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pp());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Cl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Du)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=hp[(i-1)%hp.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new dn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*hs-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):hs;p>hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hs}`);const m=[];let S=0;for(let T=0;T<hs;++T){const E=T/_,x=Math.exp(-E*E/2);m.push(x),T===0?S+=x:T<p&&(S+=2*x)}for(let T=0;T<m.length;T++)m[T]=m[T]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const b=this._sizeLods[i],w=3*b*(i>y-lo?i-y+lo:0),M=4*(this._cubeSize-b);Cl(t,w,M,3*b,2*b),l.setRenderTarget(t),l.render(h,Du)}}function Ob(s){const e=[],t=[],n=[];let i=s;const r=s-lo+1+cp.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-lo?l=cp[o-s+lo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*d),y=new Float32Array(p*g*d),b=new Float32Array(m*g*d);for(let M=0;M<d;M++){const T=M%3*2/3-1,E=M>2?0:-1,x=[T,E,0,T+2/3,E,0,T+2/3,E+1,0,T,E,0,T+2/3,E+1,0,T,E+1,0];S.set(x,_*g*M),y.set(f,p*g*M);const v=[M,M,M,M,M,M];b.set(v,m*g*M)}const w=new si;w.setAttribute("position",new Wt(S,_)),w.setAttribute("uv",new Wt(y,p)),w.setAttribute("faceIndex",new Wt(b,m)),e.push(w),i>lo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dp(s,e,t){const n=new Gr(s,e,t);return n.texture.mapping=Hc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cl(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ub(s,e,t){const n=new Float32Array(hs),i=new H(0,1,0);return new Wr({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_f(),fragmentShader:`

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
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function pp(){return new Wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_f(),fragmentShader:`

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
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function mp(){return new Wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function _f(){return`

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
	`}function Bb(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===vc||l===ph,u=l===Ao||l===Do;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new fp(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new fp(s));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function kb(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zb(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let y=0,b=S.length;y<b;y+=3){const w=S[y+0],M=S[y+1],T=S[y+2];f.push(w,M,M,T,T,w)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,b=S.length/3-1;y<b;y+=3){const w=y+0,M=y+1,T=y+2;f.push(w,M,M,T,T,w)}}else return;const p=new(Cg(f)?Ng:Fg)(f,1);p.version=_;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Hb(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,g){s.drawElements(r,g,a,d*l),t.update(g,r,1)}function h(d,g,_){if(_===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,d*l,_),t.update(g,r,_)}function f(d,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(d[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,d,0,_);let m=0;for(let S=0;S<_;S++)m+=g[S];t.update(m,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function Vb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Gb(s,e){return s[0]-e[0]}function Wb(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Xb(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new bt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==_){let k=function(){q.dispose(),r.delete(u),u.removeEventListener("dispose",k)};var d=k;p!==void 0&&p.texture.dispose();const y=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let x=0;y===!0&&(x=1),b===!0&&(x=2),w===!0&&(x=3);let v=u.attributes.position.count*x,D=1;v>e.maxTextureSize&&(D=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const R=new Float32Array(v*D*4*_),q=new Lg(R,v,D,_);q.type=mi,q.needsUpdate=!0;const N=x*4;for(let U=0;U<_;U++){const G=M[U],K=T[U],Z=E[U],I=v*D*4*U;for(let se=0;se<G.count;se++){const le=se*N;y===!0&&(o.fromBufferAttribute(G,se),R[I+le+0]=o.x,R[I+le+1]=o.y,R[I+le+2]=o.z,R[I+le+3]=0),b===!0&&(o.fromBufferAttribute(K,se),R[I+le+4]=o.x,R[I+le+5]=o.y,R[I+le+6]=o.z,R[I+le+7]=0),w===!0&&(o.fromBufferAttribute(Z,se),R[I+le+8]=o.x,R[I+le+9]=o.y,R[I+le+10]=o.z,R[I+le+11]=Z.itemSize===4?o.w:1)}}p={count:_,texture:q,size:new xe(v,D)},r.set(u,p),u.addEventListener("dispose",k)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];const S=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",S),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let b=0;b<g;b++)_[b]=[b,0];n[u.id]=_}for(let b=0;b<g;b++){const w=_[b];w[0]=b,w[1]=f[b]}_.sort(Wb);for(let b=0;b<8;b++)b<g&&_[b][1]?(a[b][0]=_[b][0],a[b][1]=_[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Gb);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let S=0;for(let b=0;b<8;b++){const w=a[b],M=w[0],T=w[1];M!==Number.MAX_SAFE_INTEGER&&T?(p&&u.getAttribute("morphTarget"+b)!==p[M]&&u.setAttribute("morphTarget"+b,p[M]),m&&u.getAttribute("morphNormal"+b)!==m[M]&&u.setAttribute("morphNormal"+b,m[M]),i[b]=T,S+=T):(p&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),m&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),i[b]=0)}const y=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function jb(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class zg extends hn{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:ms,u!==ms&&u!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ms&&(n=wr),n===void 0&&u===Ro&&(n=ps),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Hg=new hn,Vg=new zg(1,1);Vg.compareFunction=Dg;const Gg=new Lg,Wg=new Ax,Xg=new Bg,gp=[],_p=[],vp=new Float32Array(16),xp=new Float32Array(9),yp=new Float32Array(4);function Xo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=gp[i];if(r===void 0&&(r=new Float32Array(i),gp[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function rn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function sn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Xc(s,e){let t=_p[e];t===void 0&&(t=new Int32Array(e),_p[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Yb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function qb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2fv(this.addr,e),sn(t,e)}}function $b(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;s.uniform3fv(this.addr,e),sn(t,e)}}function Kb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4fv(this.addr,e),sn(t,e)}}function Zb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;yp.set(n),s.uniformMatrix2fv(this.addr,!1,yp),sn(t,n)}}function Jb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;xp.set(n),s.uniformMatrix3fv(this.addr,!1,xp),sn(t,n)}}function Qb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;vp.set(n),s.uniformMatrix4fv(this.addr,!1,vp),sn(t,n)}}function eE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function tE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2iv(this.addr,e),sn(t,e)}}function nE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3iv(this.addr,e),sn(t,e)}}function iE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4iv(this.addr,e),sn(t,e)}}function rE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2uiv(this.addr,e),sn(t,e)}}function oE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3uiv(this.addr,e),sn(t,e)}}function aE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4uiv(this.addr,e),sn(t,e)}}function lE(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Vg:Hg;t.setTexture2D(e||r,i)}function cE(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wg,i)}function uE(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Xg,i)}function hE(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Gg,i)}function fE(s){switch(s){case 5126:return Yb;case 35664:return qb;case 35665:return $b;case 35666:return Kb;case 35674:return Zb;case 35675:return Jb;case 35676:return Qb;case 5124:case 35670:return eE;case 35667:case 35671:return tE;case 35668:case 35672:return nE;case 35669:case 35673:return iE;case 5125:return rE;case 36294:return sE;case 36295:return oE;case 36296:return aE;case 35678:case 36198:case 36298:case 36306:case 35682:return lE;case 35679:case 36299:case 36307:return cE;case 35680:case 36300:case 36308:case 36293:return uE;case 36289:case 36303:case 36311:case 36292:return hE}}function dE(s,e){s.uniform1fv(this.addr,e)}function pE(s,e){const t=Xo(e,this.size,2);s.uniform2fv(this.addr,t)}function mE(s,e){const t=Xo(e,this.size,3);s.uniform3fv(this.addr,t)}function gE(s,e){const t=Xo(e,this.size,4);s.uniform4fv(this.addr,t)}function _E(s,e){const t=Xo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function vE(s,e){const t=Xo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function xE(s,e){const t=Xo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yE(s,e){s.uniform1iv(this.addr,e)}function SE(s,e){s.uniform2iv(this.addr,e)}function bE(s,e){s.uniform3iv(this.addr,e)}function EE(s,e){s.uniform4iv(this.addr,e)}function ME(s,e){s.uniform1uiv(this.addr,e)}function TE(s,e){s.uniform2uiv(this.addr,e)}function wE(s,e){s.uniform3uiv(this.addr,e)}function AE(s,e){s.uniform4uiv(this.addr,e)}function DE(s,e,t){const n=this.cache,i=e.length,r=Xc(t,i);rn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Hg,r[o])}function CE(s,e,t){const n=this.cache,i=e.length,r=Xc(t,i);rn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Wg,r[o])}function RE(s,e,t){const n=this.cache,i=e.length,r=Xc(t,i);rn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Xg,r[o])}function PE(s,e,t){const n=this.cache,i=e.length,r=Xc(t,i);rn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Gg,r[o])}function LE(s){switch(s){case 5126:return dE;case 35664:return pE;case 35665:return mE;case 35666:return gE;case 35674:return _E;case 35675:return vE;case 35676:return xE;case 5124:case 35670:return yE;case 35667:case 35671:return SE;case 35668:case 35672:return bE;case 35669:case 35673:return EE;case 5125:return ME;case 36294:return TE;case 36295:return wE;case 36296:return AE;case 35678:case 36198:case 36298:case 36306:case 35682:return DE;case 35679:case 36299:case 36307:return CE;case 35680:case 36300:case 36308:case 36293:return RE;case 36289:case 36303:case 36311:case 36292:return PE}}class IE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fE(t.type)}}class FE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LE(t.type)}}class NE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Lu=/(\w+)(\])?(\[|\.)?/g;function Sp(s,e){s.seq.push(e),s.map[e.id]=e}function OE(s,e,t){const n=s.name,i=n.length;for(Lu.lastIndex=0;;){const r=Lu.exec(n),o=Lu.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Sp(t,c===void 0?new IE(a,s,e):new FE(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new NE(a),Sp(t,h)),t=h}}}class ic{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);OE(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function bp(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const UE=37297;let BE=0;function kE(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function zE(s){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(s);let n;switch(e===t?n="":e===bc&&t===Sc?n="LinearDisplayP3ToLinearSRGB":e===Sc&&t===bc&&(n="LinearSRGBToLinearDisplayP3"),s){case Zt:case Vc:return[n,"LinearTransferOETF"];case Lt:case ff:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ep(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+kE(s.getShaderSource(e),o)}else return i}function HE(s,e){const t=zE(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function VE(s,e){let t;switch(e){case Uv:t="Linear";break;case Bv:t="Reinhard";break;case kv:t="OptimizedCineon";break;case pg:t="ACESFilmic";break;case Hv:t="AgX";break;case zv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function GE(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(co).join(`
`)}function WE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(co).join(`
`)}function XE(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jE(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function co(s){return s!==""}function Mp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YE=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(s){return s.replace(YE,$E)}const qE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $E(s,e){let t=it[e];if(t===void 0){const n=qE.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yh(t)}const KE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wp(s){return s.replace(KE,ZE)}function ZE(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ap(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===fg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===tr&&(e="SHADOWMAP_TYPE_VSM"),e}function QE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ao:case Do:e="ENVMAP_TYPE_CUBE";break;case Hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Do:e="ENVMAP_MODE_REFRACTION";break}return e}function tM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dg:e="ENVMAP_BLENDING_MULTIPLY";break;case Nv:e="ENVMAP_BLENDING_MIX";break;case Ov:e="ENVMAP_BLENDING_ADD";break}return e}function nM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function iM(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=JE(t),c=QE(t),u=eM(t),h=tM(t),f=nM(t),d=t.isWebGL2?"":GE(t),g=WE(t),_=XE(r),p=i.createProgram();let m,S,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(co).join(`
`),m.length>0&&(m+=`
`),S=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(co).join(`
`),S.length>0&&(S+=`
`)):(m=[Ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),S=[d,Ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?it.tonemapping_pars_fragment:"",t.toneMapping!==Or?VE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,HE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),o=yh(o),o=Mp(o,t),o=Tp(o,t),a=yh(a),a=Mp(a,t),a=Tp(a,t),o=wp(o),a=wp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const b=y+m+o,w=y+S+a,M=bp(i,i.VERTEX_SHADER,b),T=bp(i,i.FRAGMENT_SHADER,w);i.attachShader(p,M),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function E(R){if(s.debug.checkShaderErrors){const q=i.getProgramInfoLog(p).trim(),N=i.getShaderInfoLog(M).trim(),k=i.getShaderInfoLog(T).trim();let U=!0,G=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,M,T);else{const K=Ep(i,M,"vertex"),Z=Ep(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+K+`
`+Z)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(N===""||k==="")&&(G=!1);G&&(R.diagnostics={runnable:U,programLog:q,vertexShader:{log:N,prefix:m},fragmentShader:{log:k,prefix:S}})}i.deleteShader(M),i.deleteShader(T),x=new ic(i,p),v=jE(i,p)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(p,UE)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BE++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=T,this}let rM=0;class sM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new oM(e),t.set(e,n)),n}}class oM{constructor(e){this.id=rM++,this.code=e,this.usedTimes=0}}function aM(s,e,t,n,i,r,o){const a=new mf,l=new sM,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function p(x,v,D,R,q){const N=R.fog,k=q.geometry,U=x.isMeshStandardMaterial?R.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||U),K=G&&G.mapping===Hc?G.image.height:null,Z=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const I=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,se=I!==void 0?I.length:0;let le=0;k.morphAttributes.position!==void 0&&(le=1),k.morphAttributes.normal!==void 0&&(le=2),k.morphAttributes.color!==void 0&&(le=3);let Q,oe,_e,Ae;if(Z){const Ce=Ni[Z];Q=Ce.vertexShader,oe=Ce.fragmentShader}else Q=x.vertexShader,oe=x.fragmentShader,l.update(x),_e=l.getVertexShaderID(x),Ae=l.getFragmentShaderID(x);const ye=s.getRenderTarget(),re=q.isInstancedMesh===!0,A=q.isBatchedMesh===!0,O=!!x.map,z=!!x.matcap,L=!!G,X=!!x.aoMap,W=!!x.lightMap,ie=!!x.bumpMap,ee=!!x.normalMap,Y=!!x.displacementMap,me=!!x.emissiveMap,P=!!x.metalnessMap,C=!!x.roughnessMap,j=x.anisotropy>0,ae=x.clearcoat>0,ce=x.iridescence>0,ue=x.sheen>0,Te=x.transmission>0,Ee=j&&!!x.anisotropyMap,Se=ae&&!!x.clearcoatMap,Pe=ae&&!!x.clearcoatNormalMap,Ve=ae&&!!x.clearcoatRoughnessMap,he=ce&&!!x.iridescenceMap,nt=ce&&!!x.iridescenceThicknessMap,ke=ue&&!!x.sheenColorMap,qe=ue&&!!x.sheenRoughnessMap,Oe=!!x.specularMap,De=!!x.specularColorMap,B=!!x.specularIntensityMap,ge=Te&&!!x.transmissionMap,Fe=Te&&!!x.thicknessMap,fe=!!x.gradientMap,de=!!x.alphaMap,V=x.alphaTest>0,pe=!!x.alphaHash,be=!!x.extensions,Ge=!!k.attributes.uv1,ze=!!k.attributes.uv2,Ke=!!k.attributes.uv3;let tt=Or;return x.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(tt=s.toneMapping),{isWebGL2:u,shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:Q,fragmentShader:oe,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:Ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:A,instancing:re,instancingColor:re&&q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Zt,map:O,matcap:z,envMap:L,envMapMode:L&&G.mapping,envMapCubeUVHeight:K,aoMap:X,lightMap:W,bumpMap:ie,normalMap:ee,displacementMap:f&&Y,emissiveMap:me,normalMapObjectSpace:ee&&x.normalMapType===ex,normalMapTangentSpace:ee&&x.normalMapType===Ag,metalnessMap:P,roughnessMap:C,anisotropy:j,anisotropyMap:Ee,clearcoat:ae,clearcoatMap:Se,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Ve,iridescence:ce,iridescenceMap:he,iridescenceThicknessMap:nt,sheen:ue,sheenColorMap:ke,sheenRoughnessMap:qe,specularMap:Oe,specularColorMap:De,specularIntensityMap:B,transmission:Te,transmissionMap:ge,thicknessMap:Fe,gradientMap:fe,opaque:x.transparent===!1&&x.blending===mo,alphaMap:de,alphaTest:V,alphaHash:pe,combine:x.combine,mapUv:O&&_(x.map.channel),aoMapUv:X&&_(x.aoMap.channel),lightMapUv:W&&_(x.lightMap.channel),bumpMapUv:ie&&_(x.bumpMap.channel),normalMapUv:ee&&_(x.normalMap.channel),displacementMapUv:Y&&_(x.displacementMap.channel),emissiveMapUv:me&&_(x.emissiveMap.channel),metalnessMapUv:P&&_(x.metalnessMap.channel),roughnessMapUv:C&&_(x.roughnessMap.channel),anisotropyMapUv:Ee&&_(x.anisotropyMap.channel),clearcoatMapUv:Se&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:qe&&_(x.sheenRoughnessMap.channel),specularMapUv:Oe&&_(x.specularMap.channel),specularColorMapUv:De&&_(x.specularColorMap.channel),specularIntensityMapUv:B&&_(x.specularIntensityMap.channel),transmissionMapUv:ge&&_(x.transmissionMap.channel),thicknessMapUv:Fe&&_(x.thicknessMap.channel),alphaMapUv:de&&_(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ee||j),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Ge,vertexUv2s:ze,vertexUv3s:Ke,pointsUvs:q.isPoints===!0&&!!k.attributes.uv&&(O||de),fog:!!N,useFog:x.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:le,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:tt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:O&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===Dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===fi,flipSided:x.side===Hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:be&&x.extensions.derivatives===!0,extensionFragDepth:be&&x.extensions.fragDepth===!0,extensionDrawBuffers:be&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:be&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)v.push(D),v.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(S(v,x),y(v,x),v.push(s.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function S(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function y(x,v){a.disableAll(),v.isWebGL2&&a.enable(0),v.supportsVertexTextures&&a.enable(1),v.instancing&&a.enable(2),v.instancingColor&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),x.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.useLegacyLights&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function b(x){const v=g[x.type];let D;if(v){const R=Ni[v];D=Gx.clone(R.uniforms)}else D=x.uniforms;return D}function w(x,v){let D;for(let R=0,q=c.length;R<q;R++){const N=c[R];if(N.cacheKey===v){D=N,++D.usedTimes;break}}return D===void 0&&(D=new iM(s,v,x,r),c.push(D)),D}function M(x){if(--x.usedTimes===0){const v=c.indexOf(x);c[v]=c[c.length-1],c.pop(),x.destroy()}}function T(x){l.remove(x)}function E(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:b,acquireProgram:w,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:E}}function lM(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function cM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Dp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Cp(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,p){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},s[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||cM),n.length>1&&n.sort(f||Dp),i.length>1&&i.sort(f||Dp)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function uM(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Cp,s.set(n,[o])):i>=r.length?(o=new Cp,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function hM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new $e};break;case"SpotLight":t={position:new H,direction:new H,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t}}}function fM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let dM=0;function pM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mM(s,e){const t=new hM,n=fM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new H);const r=new H,o=new rt,a=new rt;function l(u,h){let f=0,d=0,g=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let _=0,p=0,m=0,S=0,y=0,b=0,w=0,M=0,T=0,E=0,x=0;u.sort(pM);const v=h===!0?Math.PI:1;for(let R=0,q=u.length;R<q;R++){const N=u[R],k=N.color,U=N.intensity,G=N.distance,K=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=k.r*U*v,d+=k.g*U*v,g+=k.b*U*v;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(N.sh.coefficients[Z],U);x++}else if(N.isDirectionalLight){const Z=t.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity*v),N.castShadow){const I=N.shadow,se=n.get(N);se.shadowBias=I.bias,se.shadowNormalBias=I.normalBias,se.shadowRadius=I.radius,se.shadowMapSize=I.mapSize,i.directionalShadow[_]=se,i.directionalShadowMap[_]=K,i.directionalShadowMatrix[_]=N.shadow.matrix,b++}i.directional[_]=Z,_++}else if(N.isSpotLight){const Z=t.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(k).multiplyScalar(U*v),Z.distance=G,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,i.spot[m]=Z;const I=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,I.updateMatrices(N),N.castShadow&&E++),i.spotLightMatrix[m]=I.matrix,N.castShadow){const se=n.get(N);se.shadowBias=I.bias,se.shadowNormalBias=I.normalBias,se.shadowRadius=I.radius,se.shadowMapSize=I.mapSize,i.spotShadow[m]=se,i.spotShadowMap[m]=K,M++}m++}else if(N.isRectAreaLight){const Z=t.get(N);Z.color.copy(k).multiplyScalar(U),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),i.rectArea[S]=Z,S++}else if(N.isPointLight){const Z=t.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity*v),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){const I=N.shadow,se=n.get(N);se.shadowBias=I.bias,se.shadowNormalBias=I.normalBias,se.shadowRadius=I.radius,se.shadowMapSize=I.mapSize,se.shadowCameraNear=I.camera.near,se.shadowCameraFar=I.camera.far,i.pointShadow[p]=se,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=N.shadow.matrix,w++}i.point[p]=Z,p++}else if(N.isHemisphereLight){const Z=t.get(N);Z.skyColor.copy(N.color).multiplyScalar(U*v),Z.groundColor.copy(N.groundColor).multiplyScalar(U*v),i.hemi[y]=Z,y++}}S>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==_||D.pointLength!==p||D.spotLength!==m||D.rectAreaLength!==S||D.hemiLength!==y||D.numDirectionalShadows!==b||D.numPointShadows!==w||D.numSpotShadows!==M||D.numSpotMaps!==T||D.numLightProbes!==x)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=S,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=x,D.directionalLength=_,D.pointLength=p,D.spotLength=m,D.rectAreaLength=S,D.hemiLength=y,D.numDirectionalShadows=b,D.numPointShadows=w,D.numSpotShadows=M,D.numSpotMaps=T,D.numLightProbes=x,i.version=dM++)}function c(u,h){let f=0,d=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const b=u[S];if(b.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),f++}else if(b.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),g++}else if(b.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(m),a.identity(),o.copy(b.matrixWorld),o.premultiply(m),a.extractRotation(o),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function Rp(s,e){const t=new mM(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function gM(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Rp(s,e),t.set(r,[l])):o>=a.length?(l=new Rp(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class jg extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _M extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yM(s,e,t){let n=new gf;const i=new xe,r=new xe,o=new bt,a=new jg({depthPacking:wg}),l=new _M,c={},u=t.maxTextureSize,h={[hr]:Hn,[Hn]:hr,[fi]:fi},f=new Wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:vM,fragmentShader:xM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new si;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hg;let m=this.type;this.render=function(M,T,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const x=s.getRenderTarget(),v=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),R=s.state;R.setBlending(Nr),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const q=m!==tr&&this.type===tr,N=m===tr&&this.type!==tr;for(let k=0,U=M.length;k<U;k++){const G=M[k],K=G.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const Z=K.getFrameExtents();if(i.multiply(Z),r.copy(K.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Z.x),i.x=r.x*Z.x,K.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Z.y),i.y=r.y*Z.y,K.mapSize.y=r.y)),K.map===null||q===!0||N===!0){const se=this.type!==tr?{minFilter:cn,magFilter:cn}:{};K.map!==null&&K.map.dispose(),K.map=new Gr(i.x,i.y,se),K.map.texture.name=G.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const I=K.getViewportCount();for(let se=0;se<I;se++){const le=K.getViewport(se);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),R.viewport(o),K.updateMatrices(G,se),n=K.getFrustum(),b(T,E,K.camera,G,this.type)}K.isPointLightShadow!==!0&&this.type===tr&&S(K,E),K.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(x,v,D)};function S(M,T){const E=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Gr(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(T,null,E,f,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(T,null,E,d,_,null)}function y(M,T,E,x){let v=null;const D=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)v=D;else if(v=E.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const R=v.uuid,q=T.uuid;let N=c[R];N===void 0&&(N={},c[R]=N);let k=N[q];k===void 0&&(k=v.clone(),N[q]=k,T.addEventListener("dispose",w)),v=k}if(v.visible=T.visible,v.wireframe=T.wireframe,x===tr?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:h[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,E.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const R=s.properties.get(v);R.light=E}return v}function b(M,T,E,x,v){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===tr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);const q=e.update(M),N=M.material;if(Array.isArray(N)){const k=q.groups;for(let U=0,G=k.length;U<G;U++){const K=k[U],Z=N[K.materialIndex];if(Z&&Z.visible){const I=y(M,Z,x,v);M.onBeforeShadow(s,M,T,E,q,I,K),s.renderBufferDirect(E,null,q,I,M,K),M.onAfterShadow(s,M,T,E,q,I,K)}}}else if(N.visible){const k=y(M,N,x,v);M.onBeforeShadow(s,M,T,E,q,k,null),s.renderBufferDirect(E,null,q,k,M,null),M.onAfterShadow(s,M,T,E,q,k,null)}}const R=M.children;for(let q=0,N=R.length;q<N;q++)b(R[q],T,E,x,v)}function w(M){M.target.removeEventListener("dispose",w);for(const E in c){const x=c[E],v=M.target.uuid;v in x&&(x[v].dispose(),delete x[v])}}}function SM(s,e,t){const n=t.isWebGL2;function i(){let V=!1;const pe=new bt;let be=null;const Ge=new bt(0,0,0,0);return{setMask:function(ze){be!==ze&&!V&&(s.colorMask(ze,ze,ze,ze),be=ze)},setLocked:function(ze){V=ze},setClear:function(ze,Ke,tt,Le,Ce){Ce===!0&&(ze*=Le,Ke*=Le,tt*=Le),pe.set(ze,Ke,tt,Le),Ge.equals(pe)===!1&&(s.clearColor(ze,Ke,tt,Le),Ge.copy(pe))},reset:function(){V=!1,be=null,Ge.set(-1,0,0,0)}}}function r(){let V=!1,pe=null,be=null,Ge=null;return{setTest:function(ze){ze?A(s.DEPTH_TEST):O(s.DEPTH_TEST)},setMask:function(ze){pe!==ze&&!V&&(s.depthMask(ze),pe=ze)},setFunc:function(ze){if(be!==ze){switch(ze){case Dv:s.depthFunc(s.NEVER);break;case Cv:s.depthFunc(s.ALWAYS);break;case Rv:s.depthFunc(s.LESS);break;case _c:s.depthFunc(s.LEQUAL);break;case Pv:s.depthFunc(s.EQUAL);break;case Lv:s.depthFunc(s.GEQUAL);break;case Iv:s.depthFunc(s.GREATER);break;case Fv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=ze}},setLocked:function(ze){V=ze},setClear:function(ze){Ge!==ze&&(s.clearDepth(ze),Ge=ze)},reset:function(){V=!1,pe=null,be=null,Ge=null}}}function o(){let V=!1,pe=null,be=null,Ge=null,ze=null,Ke=null,tt=null,Le=null,Ce=null;return{setTest:function(Ne){V||(Ne?A(s.STENCIL_TEST):O(s.STENCIL_TEST))},setMask:function(Ne){pe!==Ne&&!V&&(s.stencilMask(Ne),pe=Ne)},setFunc:function(Ne,ve,Xe){(be!==Ne||Ge!==ve||ze!==Xe)&&(s.stencilFunc(Ne,ve,Xe),be=Ne,Ge=ve,ze=Xe)},setOp:function(Ne,ve,Xe){(Ke!==Ne||tt!==ve||Le!==Xe)&&(s.stencilOp(Ne,ve,Xe),Ke=Ne,tt=ve,Le=Xe)},setLocked:function(Ne){V=Ne},setClear:function(Ne){Ce!==Ne&&(s.clearStencil(Ne),Ce=Ne)},reset:function(){V=!1,pe=null,be=null,Ge=null,ze=null,Ke=null,tt=null,Le=null,Ce=null}}}const a=new i,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],p=null,m=!1,S=null,y=null,b=null,w=null,M=null,T=null,E=null,x=new $e(0,0,0),v=0,D=!1,R=null,q=null,N=null,k=null,U=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Z=0;const I=s.getParameter(s.VERSION);I.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(I)[1]),K=Z>=1):I.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),K=Z>=2);let se=null,le={};const Q=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),_e=new bt().fromArray(Q),Ae=new bt().fromArray(oe);function ye(V,pe,be,Ge){const ze=new Uint8Array(4),Ke=s.createTexture();s.bindTexture(V,Ke),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tt=0;tt<be;tt++)n&&(V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY)?s.texImage3D(pe,0,s.RGBA,1,1,Ge,0,s.RGBA,s.UNSIGNED_BYTE,ze):s.texImage2D(pe+tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ze);return Ke}const re={};re[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(re[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),A(s.DEPTH_TEST),l.setFunc(_c),me(!1),P(cd),A(s.CULL_FACE),ee(Nr);function A(V){f[V]!==!0&&(s.enable(V),f[V]=!0)}function O(V){f[V]!==!1&&(s.disable(V),f[V]=!1)}function z(V,pe){return d[V]!==pe?(s.bindFramebuffer(V,pe),d[V]=pe,n&&(V===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=pe),V===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=pe)),!0):!1}function L(V,pe){let be=_,Ge=!1;if(V)if(be=g.get(pe),be===void 0&&(be=[],g.set(pe,be)),V.isWebGLMultipleRenderTargets){const ze=V.texture;if(be.length!==ze.length||be[0]!==s.COLOR_ATTACHMENT0){for(let Ke=0,tt=ze.length;Ke<tt;Ke++)be[Ke]=s.COLOR_ATTACHMENT0+Ke;be.length=ze.length,Ge=!0}}else be[0]!==s.COLOR_ATTACHMENT0&&(be[0]=s.COLOR_ATTACHMENT0,Ge=!0);else be[0]!==s.BACK&&(be[0]=s.BACK,Ge=!0);Ge&&(t.isWebGL2?s.drawBuffers(be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(be))}function X(V){return p!==V?(s.useProgram(V),p=V,!0):!1}const W={[us]:s.FUNC_ADD,[dv]:s.FUNC_SUBTRACT,[pv]:s.FUNC_REVERSE_SUBTRACT};if(n)W[dd]=s.MIN,W[pd]=s.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(W[dd]=V.MIN_EXT,W[pd]=V.MAX_EXT)}const ie={[mv]:s.ZERO,[gv]:s.ONE,[_v]:s.SRC_COLOR,[fh]:s.SRC_ALPHA,[Ev]:s.SRC_ALPHA_SATURATE,[Sv]:s.DST_COLOR,[xv]:s.DST_ALPHA,[vv]:s.ONE_MINUS_SRC_COLOR,[dh]:s.ONE_MINUS_SRC_ALPHA,[bv]:s.ONE_MINUS_DST_COLOR,[yv]:s.ONE_MINUS_DST_ALPHA,[Mv]:s.CONSTANT_COLOR,[Tv]:s.ONE_MINUS_CONSTANT_COLOR,[wv]:s.CONSTANT_ALPHA,[Av]:s.ONE_MINUS_CONSTANT_ALPHA};function ee(V,pe,be,Ge,ze,Ke,tt,Le,Ce,Ne){if(V===Nr){m===!0&&(O(s.BLEND),m=!1);return}if(m===!1&&(A(s.BLEND),m=!0),V!==fv){if(V!==S||Ne!==D){if((y!==us||M!==us)&&(s.blendEquation(s.FUNC_ADD),y=us,M=us),Ne)switch(V){case mo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ud:s.blendFunc(s.ONE,s.ONE);break;case hd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case mo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ud:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case hd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,w=null,T=null,E=null,x.set(0,0,0),v=0,S=V,D=Ne}return}ze=ze||pe,Ke=Ke||be,tt=tt||Ge,(pe!==y||ze!==M)&&(s.blendEquationSeparate(W[pe],W[ze]),y=pe,M=ze),(be!==b||Ge!==w||Ke!==T||tt!==E)&&(s.blendFuncSeparate(ie[be],ie[Ge],ie[Ke],ie[tt]),b=be,w=Ge,T=Ke,E=tt),(Le.equals(x)===!1||Ce!==v)&&(s.blendColor(Le.r,Le.g,Le.b,Ce),x.copy(Le),v=Ce),S=V,D=!1}function Y(V,pe){V.side===fi?O(s.CULL_FACE):A(s.CULL_FACE);let be=V.side===Hn;pe&&(be=!be),me(be),V.blending===mo&&V.transparent===!1?ee(Nr):ee(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),a.setMask(V.colorWrite);const Ge=V.stencilWrite;c.setTest(Ge),Ge&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),j(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?A(s.SAMPLE_ALPHA_TO_COVERAGE):O(s.SAMPLE_ALPHA_TO_COVERAGE)}function me(V){R!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),R=V)}function P(V){V!==uv?(A(s.CULL_FACE),V!==q&&(V===cd?s.cullFace(s.BACK):V===hv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):O(s.CULL_FACE),q=V}function C(V){V!==N&&(K&&s.lineWidth(V),N=V)}function j(V,pe,be){V?(A(s.POLYGON_OFFSET_FILL),(k!==pe||U!==be)&&(s.polygonOffset(pe,be),k=pe,U=be)):O(s.POLYGON_OFFSET_FILL)}function ae(V){V?A(s.SCISSOR_TEST):O(s.SCISSOR_TEST)}function ce(V){V===void 0&&(V=s.TEXTURE0+G-1),se!==V&&(s.activeTexture(V),se=V)}function ue(V,pe,be){be===void 0&&(se===null?be=s.TEXTURE0+G-1:be=se);let Ge=le[be];Ge===void 0&&(Ge={type:void 0,texture:void 0},le[be]=Ge),(Ge.type!==V||Ge.texture!==pe)&&(se!==be&&(s.activeTexture(be),se=be),s.bindTexture(V,pe||re[V]),Ge.type=V,Ge.texture=pe)}function Te(){const V=le[se];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ee(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function nt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function B(V){_e.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),_e.copy(V))}function ge(V){Ae.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Ae.copy(V))}function Fe(V,pe){let be=h.get(pe);be===void 0&&(be=new WeakMap,h.set(pe,be));let Ge=be.get(V);Ge===void 0&&(Ge=s.getUniformBlockIndex(pe,V.name),be.set(V,Ge))}function fe(V,pe){const Ge=h.get(pe).get(V);u.get(pe)!==Ge&&(s.uniformBlockBinding(pe,Ge,V.__bindingPointIndex),u.set(pe,Ge))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},se=null,le={},d={},g=new WeakMap,_=[],p=null,m=!1,S=null,y=null,b=null,w=null,M=null,T=null,E=null,x=new $e(0,0,0),v=0,D=!1,R=null,q=null,N=null,k=null,U=null,_e.set(0,0,s.canvas.width,s.canvas.height),Ae.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:A,disable:O,bindFramebuffer:z,drawBuffers:L,useProgram:X,setBlending:ee,setMaterial:Y,setFlipSided:me,setCullFace:P,setLineWidth:C,setPolygonOffset:j,setScissorTest:ae,activeTexture:ce,bindTexture:ue,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:Se,texImage2D:Oe,texImage3D:De,updateUBOMapping:Fe,uniformBlockBinding:fe,texStorage2D:ke,texStorage3D:qe,texSubImage2D:Pe,texSubImage3D:Ve,compressedTexSubImage2D:he,compressedTexSubImage3D:nt,scissor:B,viewport:ge,reset:de}}function bM(s,e,t,n,i,r,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,C){return d?new OffscreenCanvas(P,C):Ba("canvas")}function _(P,C,j,ae){let ce=1;if((P.width>ae||P.height>ae)&&(ce=ae/Math.max(P.width,P.height)),ce<1||C===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ue=C?Mc:Math.floor,Te=ue(ce*P.width),Ee=ue(ce*P.height);h===void 0&&(h=g(Te,Ee));const Se=j?g(Te,Ee):h;return Se.width=Te,Se.height=Ee,Se.getContext("2d").drawImage(P,0,0,Te,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Te+"x"+Ee+")."),Se}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function p(P){return xh(P.width)&&xh(P.height)}function m(P){return a?!1:P.wrapS!==zn||P.wrapT!==zn||P.minFilter!==cn&&P.minFilter!==nn}function S(P,C){return P.generateMipmaps&&C&&P.minFilter!==cn&&P.minFilter!==nn}function y(P){s.generateMipmap(P)}function b(P,C,j,ae,ce=!1){if(a===!1)return C;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=C;if(C===s.RED&&(j===s.FLOAT&&(ue=s.R32F),j===s.HALF_FLOAT&&(ue=s.R16F),j===s.UNSIGNED_BYTE&&(ue=s.R8)),C===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(ue=s.R8UI),j===s.UNSIGNED_SHORT&&(ue=s.R16UI),j===s.UNSIGNED_INT&&(ue=s.R32UI),j===s.BYTE&&(ue=s.R8I),j===s.SHORT&&(ue=s.R16I),j===s.INT&&(ue=s.R32I)),C===s.RG&&(j===s.FLOAT&&(ue=s.RG32F),j===s.HALF_FLOAT&&(ue=s.RG16F),j===s.UNSIGNED_BYTE&&(ue=s.RG8)),C===s.RGBA){const Te=ce?yc:dt.getTransfer(ae);j===s.FLOAT&&(ue=s.RGBA32F),j===s.HALF_FLOAT&&(ue=s.RGBA16F),j===s.UNSIGNED_BYTE&&(ue=Te===Dt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function w(P,C,j){return S(P,j)===!0||P.isFramebufferTexture&&P.minFilter!==cn&&P.minFilter!==nn?Math.log2(Math.max(C.width,C.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?C.mipmaps.length:1}function M(P){return P===cn||P===mh||P===nc?s.NEAREST:s.LINEAR}function T(P){const C=P.target;C.removeEventListener("dispose",T),x(C),C.isVideoTexture&&u.delete(C)}function E(P){const C=P.target;C.removeEventListener("dispose",E),D(C)}function x(P){const C=n.get(P);if(C.__webglInit===void 0)return;const j=P.source,ae=f.get(j);if(ae){const ce=ae[C.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&v(P),Object.keys(ae).length===0&&f.delete(j)}n.remove(P)}function v(P){const C=n.get(P);s.deleteTexture(C.__webglTexture);const j=P.source,ae=f.get(j);delete ae[C.__cacheKey],o.memory.textures--}function D(P){const C=P.texture,j=n.get(P),ae=n.get(C);if(ae.__webglTexture!==void 0&&(s.deleteTexture(ae.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(j.__webglFramebuffer[ce]))for(let ue=0;ue<j.__webglFramebuffer[ce].length;ue++)s.deleteFramebuffer(j.__webglFramebuffer[ce][ue]);else s.deleteFramebuffer(j.__webglFramebuffer[ce]);j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer[ce])}else{if(Array.isArray(j.__webglFramebuffer))for(let ce=0;ce<j.__webglFramebuffer.length;ce++)s.deleteFramebuffer(j.__webglFramebuffer[ce]);else s.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&s.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ce=0;ce<j.__webglColorRenderbuffer.length;ce++)j.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(j.__webglColorRenderbuffer[ce]);j.__webglDepthRenderbuffer&&s.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ce=0,ue=C.length;ce<ue;ce++){const Te=n.get(C[ce]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),o.memory.textures--),n.remove(C[ce])}n.remove(C),n.remove(P)}let R=0;function q(){R=0}function N(){const P=R;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),R+=1,P}function k(P){const C=[];return C.push(P.wrapS),C.push(P.wrapT),C.push(P.wrapR||0),C.push(P.magFilter),C.push(P.minFilter),C.push(P.anisotropy),C.push(P.internalFormat),C.push(P.format),C.push(P.type),C.push(P.generateMipmaps),C.push(P.premultiplyAlpha),C.push(P.flipY),C.push(P.unpackAlignment),C.push(P.colorSpace),C.join()}function U(P,C){const j=n.get(P);if(P.isVideoTexture&&Y(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const ae=P.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(j,P,C);return}}t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+C)}function G(P,C){const j=n.get(P);if(P.version>0&&j.__version!==P.version){_e(j,P,C);return}t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+C)}function K(P,C){const j=n.get(P);if(P.version>0&&j.__version!==P.version){_e(j,P,C);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+C)}function Z(P,C){const j=n.get(P);if(P.version>0&&j.__version!==P.version){Ae(j,P,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+C)}const I={[Co]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[xc]:s.MIRRORED_REPEAT},se={[cn]:s.NEAREST,[mh]:s.NEAREST_MIPMAP_NEAREST,[nc]:s.NEAREST_MIPMAP_LINEAR,[nn]:s.LINEAR,[gg]:s.LINEAR_MIPMAP_NEAREST,[Vr]:s.LINEAR_MIPMAP_LINEAR},le={[tx]:s.NEVER,[ax]:s.ALWAYS,[nx]:s.LESS,[Dg]:s.LEQUAL,[ix]:s.EQUAL,[ox]:s.GEQUAL,[rx]:s.GREATER,[sx]:s.NOTEQUAL};function Q(P,C,j){if(j?(s.texParameteri(P,s.TEXTURE_WRAP_S,I[C.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,I[C.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,I[C.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,se[C.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,se[C.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(C.wrapS!==zn||C.wrapT!==zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,M(C.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,M(C.minFilter)),C.minFilter!==cn&&C.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,le[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===cn||C.minFilter!==nc&&C.minFilter!==Vr||C.type===mi&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===ar&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(s.texParameterf(P,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function oe(P,C){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,C.addEventListener("dispose",T));const ae=C.source;let ce=f.get(ae);ce===void 0&&(ce={},f.set(ae,ce));const ue=k(C);if(ue!==P.__cacheKey){ce[ue]===void 0&&(ce[ue]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ce[ue].usedTimes++;const Te=ce[P.__cacheKey];Te!==void 0&&(ce[P.__cacheKey].usedTimes--,Te.usedTimes===0&&v(C)),P.__cacheKey=ue,P.__webglTexture=ce[ue].texture}return j}function _e(P,C,j){let ae=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ae=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ae=s.TEXTURE_3D);const ce=oe(P,C),ue=C.source;t.bindTexture(ae,P.__webglTexture,s.TEXTURE0+j);const Te=n.get(ue);if(ue.version!==Te.__version||ce===!0){t.activeTexture(s.TEXTURE0+j);const Ee=dt.getPrimaries(dt.workingColorSpace),Se=C.colorSpace===pi?null:dt.getPrimaries(C.colorSpace),Pe=C.colorSpace===pi||Ee===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ve=m(C)&&p(C.image)===!1;let he=_(C.image,Ve,!1,i.maxTextureSize);he=me(C,he);const nt=p(he)||a,ke=r.convert(C.format,C.colorSpace);let qe=r.convert(C.type),Oe=b(C.internalFormat,ke,qe,C.colorSpace,C.isVideoTexture);Q(ae,C,nt);let De;const B=C.mipmaps,ge=a&&C.isVideoTexture!==!0&&Oe!==Eg,Fe=Te.__version===void 0||ce===!0,fe=w(C,he,nt);if(C.isDepthTexture)Oe=s.DEPTH_COMPONENT,a?C.type===mi?Oe=s.DEPTH_COMPONENT32F:C.type===wr?Oe=s.DEPTH_COMPONENT24:C.type===ps?Oe=s.DEPTH24_STENCIL8:Oe=s.DEPTH_COMPONENT16:C.type===mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===ms&&Oe===s.DEPTH_COMPONENT&&C.type!==hf&&C.type!==wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=wr,qe=r.convert(C.type)),C.format===Ro&&Oe===s.DEPTH_COMPONENT&&(Oe=s.DEPTH_STENCIL,C.type!==ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=ps,qe=r.convert(C.type))),Fe&&(ge?t.texStorage2D(s.TEXTURE_2D,1,Oe,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,Oe,he.width,he.height,0,ke,qe,null));else if(C.isDataTexture)if(B.length>0&&nt){ge&&Fe&&t.texStorage2D(s.TEXTURE_2D,fe,Oe,B[0].width,B[0].height);for(let de=0,V=B.length;de<V;de++)De=B[de],ge?t.texSubImage2D(s.TEXTURE_2D,de,0,0,De.width,De.height,ke,qe,De.data):t.texImage2D(s.TEXTURE_2D,de,Oe,De.width,De.height,0,ke,qe,De.data);C.generateMipmaps=!1}else ge?(Fe&&t.texStorage2D(s.TEXTURE_2D,fe,Oe,he.width,he.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,he.width,he.height,ke,qe,he.data)):t.texImage2D(s.TEXTURE_2D,0,Oe,he.width,he.height,0,ke,qe,he.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ge&&Fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Oe,B[0].width,B[0].height,he.depth);for(let de=0,V=B.length;de<V;de++)De=B[de],C.format!==di?ke!==null?ge?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,De.width,De.height,he.depth,ke,De.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,Oe,De.width,De.height,he.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,De.width,De.height,he.depth,ke,qe,De.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,Oe,De.width,De.height,he.depth,0,ke,qe,De.data)}else{ge&&Fe&&t.texStorage2D(s.TEXTURE_2D,fe,Oe,B[0].width,B[0].height);for(let de=0,V=B.length;de<V;de++)De=B[de],C.format!==di?ke!==null?ge?t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,De.width,De.height,ke,De.data):t.compressedTexImage2D(s.TEXTURE_2D,de,Oe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?t.texSubImage2D(s.TEXTURE_2D,de,0,0,De.width,De.height,ke,qe,De.data):t.texImage2D(s.TEXTURE_2D,de,Oe,De.width,De.height,0,ke,qe,De.data)}else if(C.isDataArrayTexture)ge?(Fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Oe,he.width,he.height,he.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ke,qe,he.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,he.width,he.height,he.depth,0,ke,qe,he.data);else if(C.isData3DTexture)ge?(Fe&&t.texStorage3D(s.TEXTURE_3D,fe,Oe,he.width,he.height,he.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ke,qe,he.data)):t.texImage3D(s.TEXTURE_3D,0,Oe,he.width,he.height,he.depth,0,ke,qe,he.data);else if(C.isFramebufferTexture){if(Fe)if(ge)t.texStorage2D(s.TEXTURE_2D,fe,Oe,he.width,he.height);else{let de=he.width,V=he.height;for(let pe=0;pe<fe;pe++)t.texImage2D(s.TEXTURE_2D,pe,Oe,de,V,0,ke,qe,null),de>>=1,V>>=1}}else if(B.length>0&&nt){ge&&Fe&&t.texStorage2D(s.TEXTURE_2D,fe,Oe,B[0].width,B[0].height);for(let de=0,V=B.length;de<V;de++)De=B[de],ge?t.texSubImage2D(s.TEXTURE_2D,de,0,0,ke,qe,De):t.texImage2D(s.TEXTURE_2D,de,Oe,ke,qe,De);C.generateMipmaps=!1}else ge?(Fe&&t.texStorage2D(s.TEXTURE_2D,fe,Oe,he.width,he.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,qe,he)):t.texImage2D(s.TEXTURE_2D,0,Oe,ke,qe,he);S(C,nt)&&y(ae),Te.__version=ue.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function Ae(P,C,j){if(C.image.length!==6)return;const ae=oe(P,C),ce=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+j);const ue=n.get(ce);if(ce.version!==ue.__version||ae===!0){t.activeTexture(s.TEXTURE0+j);const Te=dt.getPrimaries(dt.workingColorSpace),Ee=C.colorSpace===pi?null:dt.getPrimaries(C.colorSpace),Se=C.colorSpace===pi||Te===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Pe=C.isCompressedTexture||C.image[0].isCompressedTexture,Ve=C.image[0]&&C.image[0].isDataTexture,he=[];for(let de=0;de<6;de++)!Pe&&!Ve?he[de]=_(C.image[de],!1,!0,i.maxCubemapSize):he[de]=Ve?C.image[de].image:C.image[de],he[de]=me(C,he[de]);const nt=he[0],ke=p(nt)||a,qe=r.convert(C.format,C.colorSpace),Oe=r.convert(C.type),De=b(C.internalFormat,qe,Oe,C.colorSpace),B=a&&C.isVideoTexture!==!0,ge=ue.__version===void 0||ae===!0;let Fe=w(C,nt,ke);Q(s.TEXTURE_CUBE_MAP,C,ke);let fe;if(Pe){B&&ge&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,De,nt.width,nt.height);for(let de=0;de<6;de++){fe=he[de].mipmaps;for(let V=0;V<fe.length;V++){const pe=fe[V];C.format!==di?qe!==null?B?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,V,0,0,pe.width,pe.height,qe,pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,V,De,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,V,0,0,pe.width,pe.height,qe,Oe,pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,V,De,pe.width,pe.height,0,qe,Oe,pe.data)}}}else{fe=C.mipmaps,B&&ge&&(fe.length>0&&Fe++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,De,he[0].width,he[0].height));for(let de=0;de<6;de++)if(Ve){B?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,he[de].width,he[de].height,qe,Oe,he[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,De,he[de].width,he[de].height,0,qe,Oe,he[de].data);for(let V=0;V<fe.length;V++){const be=fe[V].image[de].image;B?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,V+1,0,0,be.width,be.height,qe,Oe,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,V+1,De,be.width,be.height,0,qe,Oe,be.data)}}else{B?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,qe,Oe,he[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,De,qe,Oe,he[de]);for(let V=0;V<fe.length;V++){const pe=fe[V];B?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,V+1,0,0,qe,Oe,pe.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,V+1,De,qe,Oe,pe.image[de])}}}S(C,ke)&&y(s.TEXTURE_CUBE_MAP),ue.__version=ce.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function ye(P,C,j,ae,ce,ue){const Te=r.convert(j.format,j.colorSpace),Ee=r.convert(j.type),Se=b(j.internalFormat,Te,Ee,j.colorSpace);if(!n.get(C).__hasExternalTextures){const Ve=Math.max(1,C.width>>ue),he=Math.max(1,C.height>>ue);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?t.texImage3D(ce,ue,Se,Ve,he,C.depth,0,Te,Ee,null):t.texImage2D(ce,ue,Se,Ve,he,0,Te,Ee,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),ee(C)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,ce,n.get(j).__webglTexture,0,ie(C)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ae,ce,n.get(j).__webglTexture,ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(P,C,j){if(s.bindRenderbuffer(s.RENDERBUFFER,P),C.depthBuffer&&!C.stencilBuffer){let ae=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(j||ee(C)){const ce=C.depthTexture;ce&&ce.isDepthTexture&&(ce.type===mi?ae=s.DEPTH_COMPONENT32F:ce.type===wr&&(ae=s.DEPTH_COMPONENT24));const ue=ie(C);ee(C)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,ae,C.width,C.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,ae,C.width,C.height)}else s.renderbufferStorage(s.RENDERBUFFER,ae,C.width,C.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(C.depthBuffer&&C.stencilBuffer){const ae=ie(C);j&&ee(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,s.DEPTH24_STENCIL8,C.width,C.height):ee(C)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,s.DEPTH24_STENCIL8,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const ae=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ce=0;ce<ae.length;ce++){const ue=ae[ce],Te=r.convert(ue.format,ue.colorSpace),Ee=r.convert(ue.type),Se=b(ue.internalFormat,Te,Ee,ue.colorSpace),Pe=ie(C);j&&ee(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Se,C.width,C.height):ee(C)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,Se,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Se,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function A(P,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),U(C.depthTexture,0);const ae=n.get(C.depthTexture).__webglTexture,ce=ie(C);if(C.depthTexture.format===ms)ee(C)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0);else if(C.depthTexture.format===Ro)ee(C)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function O(P){const C=n.get(P),j=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!C.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");A(C.__webglFramebuffer,P)}else if(j){C.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[ae]),C.__webglDepthbuffer[ae]=s.createRenderbuffer(),re(C.__webglDepthbuffer[ae],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=s.createRenderbuffer(),re(C.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function z(P,C,j){const ae=n.get(P);C!==void 0&&ye(ae.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&O(P)}function L(P){const C=P.texture,j=n.get(P),ae=n.get(C);P.addEventListener("dispose",E),P.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture()),ae.__version=C.version,o.memory.textures++);const ce=P.isWebGLCubeRenderTarget===!0,ue=P.isWebGLMultipleRenderTargets===!0,Te=p(P)||a;if(ce){j.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(a&&C.mipmaps&&C.mipmaps.length>0){j.__webglFramebuffer[Ee]=[];for(let Se=0;Se<C.mipmaps.length;Se++)j.__webglFramebuffer[Ee][Se]=s.createFramebuffer()}else j.__webglFramebuffer[Ee]=s.createFramebuffer()}else{if(a&&C.mipmaps&&C.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ee=0;Ee<C.mipmaps.length;Ee++)j.__webglFramebuffer[Ee]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(ue)if(i.drawBuffers){const Ee=P.texture;for(let Se=0,Pe=Ee.length;Se<Pe;Se++){const Ve=n.get(Ee[Se]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&ee(P)===!1){const Ee=ue?C:[C];j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Se=0;Se<Ee.length;Se++){const Pe=Ee[Se];j.__webglColorRenderbuffer[Se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[Se]);const Ve=r.convert(Pe.format,Pe.colorSpace),he=r.convert(Pe.type),nt=b(Pe.internalFormat,Ve,he,Pe.colorSpace,P.isXRRenderTarget===!0),ke=ie(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,nt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,j.__webglColorRenderbuffer[Se])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),re(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),Q(s.TEXTURE_CUBE_MAP,C,Te);for(let Ee=0;Ee<6;Ee++)if(a&&C.mipmaps&&C.mipmaps.length>0)for(let Se=0;Se<C.mipmaps.length;Se++)ye(j.__webglFramebuffer[Ee][Se],P,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Se);else ye(j.__webglFramebuffer[Ee],P,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);S(C,Te)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const Ee=P.texture;for(let Se=0,Pe=Ee.length;Se<Pe;Se++){const Ve=Ee[Se],he=n.get(Ve);t.bindTexture(s.TEXTURE_2D,he.__webglTexture),Q(s.TEXTURE_2D,Ve,Te),ye(j.__webglFramebuffer,P,Ve,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,0),S(Ve,Te)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let Ee=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?Ee=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ee,ae.__webglTexture),Q(Ee,C,Te),a&&C.mipmaps&&C.mipmaps.length>0)for(let Se=0;Se<C.mipmaps.length;Se++)ye(j.__webglFramebuffer[Se],P,C,s.COLOR_ATTACHMENT0,Ee,Se);else ye(j.__webglFramebuffer,P,C,s.COLOR_ATTACHMENT0,Ee,0);S(C,Te)&&y(Ee),t.unbindTexture()}P.depthBuffer&&O(P)}function X(P){const C=p(P)||a,j=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ae=0,ce=j.length;ae<ce;ae++){const ue=j[ae];if(S(ue,C)){const Te=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ee=n.get(ue).__webglTexture;t.bindTexture(Te,Ee),y(Te),t.unbindTexture()}}}function W(P){if(a&&P.samples>0&&ee(P)===!1){const C=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],j=P.width,ae=P.height;let ce=s.COLOR_BUFFER_BIT;const ue=[],Te=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=n.get(P),Se=P.isWebGLMultipleRenderTargets===!0;if(Se)for(let Pe=0;Pe<C.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Pe=0;Pe<C.length;Pe++){ue.push(s.COLOR_ATTACHMENT0+Pe),P.depthBuffer&&ue.push(Te);const Ve=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(Ve===!1&&(P.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),Se&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Pe]),Ve===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Te]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Te])),Se){const he=n.get(C[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,he,0)}s.blitFramebuffer(0,0,j,ae,0,0,j,ae,ce,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Se)for(let Pe=0;Pe<C.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Pe]);const Ve=n.get(C[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,Ve,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function ie(P){return Math.min(i.maxSamples,P.samples)}function ee(P){const C=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Y(P){const C=o.render.frame;u.get(P)!==C&&(u.set(P,C),P.update())}function me(P,C){const j=P.colorSpace,ae=P.format,ce=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===vh||j!==Zt&&j!==pi&&(dt.getTransfer(j)===Dt?a===!1?e.has("EXT_sRGB")===!0&&ae===di?(P.format=vh,P.minFilter=nn,P.generateMipmaps=!1):C=Rg.sRGBToLinear(C):(ae!==di||ce!==Ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),C}this.allocateTextureUnit=N,this.resetTextureUnits=q,this.setTexture2D=U,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=z,this.setupRenderTarget=L,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ee}function EM(s,e,t){const n=t.isWebGL2;function i(r,o=pi){let a;const l=dt.getTransfer(o);if(r===Ur)return s.UNSIGNED_BYTE;if(r===vg)return s.UNSIGNED_SHORT_4_4_4_4;if(r===xg)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Gv)return s.BYTE;if(r===Wv)return s.SHORT;if(r===hf)return s.UNSIGNED_SHORT;if(r===_g)return s.INT;if(r===wr)return s.UNSIGNED_INT;if(r===mi)return s.FLOAT;if(r===ar)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Xv)return s.ALPHA;if(r===di)return s.RGBA;if(r===jv)return s.LUMINANCE;if(r===Yv)return s.LUMINANCE_ALPHA;if(r===ms)return s.DEPTH_COMPONENT;if(r===Ro)return s.DEPTH_STENCIL;if(r===vh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===qv)return s.RED;if(r===yg)return s.RED_INTEGER;if(r===$v)return s.RG;if(r===Sg)return s.RG_INTEGER;if(r===bg)return s.RGBA_INTEGER;if(r===su||r===ou||r===au||r===lu)if(l===Dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===su)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ou)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===au)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===lu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===su)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ou)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===au)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===lu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gd||r===_d||r===vd||r===xd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===gd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_d)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Eg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===yd||r===Sd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===yd)return l===Dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Sd)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bd||r===Ed||r===Md||r===Td||r===wd||r===Ad||r===Dd||r===Cd||r===Rd||r===Pd||r===Ld||r===Id||r===Fd||r===Nd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===bd)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ed)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Md)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Td)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wd)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ad)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Dd)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cd)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rd)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Pd)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ld)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Id)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fd)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nd)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cu||r===Od||r===Ud)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===cu)return l===Dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Od)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ud)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kv||r===Bd||r===kd||r===zd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===cu)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Bd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ps?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class MM extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _i extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TM={type:"move"};class Iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class wM extends Ls{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=t.getContextAttributes();let p=null,m=null;const S=[],y=[],b=new xe;let w=null;const M=new Ln;M.layers.enable(1),M.viewport=new bt;const T=new Ln;T.layers.enable(2),T.viewport=new bt;const E=[M,T],x=new MM;x.layers.enable(1),x.layers.enable(2);let v=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let oe=S[Q];return oe===void 0&&(oe=new Iu,S[Q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Q){let oe=S[Q];return oe===void 0&&(oe=new Iu,S[Q]=oe),oe.getGripSpace()},this.getHand=function(Q){let oe=S[Q];return oe===void 0&&(oe=new Iu,S[Q]=oe),oe.getHandSpace()};function R(Q){const oe=y.indexOf(Q.inputSource);if(oe===-1)return;const _e=S[oe];_e!==void 0&&(_e.update(Q.inputSource,Q.frame,c||o),_e.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){i.removeEventListener("select",R),i.removeEventListener("selectstart",R),i.removeEventListener("selectend",R),i.removeEventListener("squeeze",R),i.removeEventListener("squeezestart",R),i.removeEventListener("squeezeend",R),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",N);for(let Q=0;Q<S.length;Q++){const oe=y[Q];oe!==null&&(y[Q]=null,S[Q].disconnect(oe))}v=null,D=null,e.setRenderTarget(p),d=null,f=null,h=null,i=null,m=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",R),i.addEventListener("selectstart",R),i.addEventListener("selectend",R),i.addEventListener("squeeze",R),i.addEventListener("squeezestart",R),i.addEventListener("squeezeend",R),i.addEventListener("end",q),i.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new Gr(d.framebufferWidth,d.framebufferHeight,{format:di,type:Ur,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let oe=null,_e=null,Ae=null;_.depth&&(Ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=_.stencil?Ro:ms,_e=_.stencil?ps:wr);const ye={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(ye),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),m=new Gr(f.textureWidth,f.textureHeight,{format:di,type:Ur,depthTexture:new zg(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const re=e.properties.get(m);re.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(Q){for(let oe=0;oe<Q.removed.length;oe++){const _e=Q.removed[oe],Ae=y.indexOf(_e);Ae>=0&&(y[Ae]=null,S[Ae].disconnect(_e))}for(let oe=0;oe<Q.added.length;oe++){const _e=Q.added[oe];let Ae=y.indexOf(_e);if(Ae===-1){for(let re=0;re<S.length;re++)if(re>=y.length){y.push(_e),Ae=re;break}else if(y[re]===null){y[re]=_e,Ae=re;break}if(Ae===-1)break}const ye=S[Ae];ye&&ye.connect(_e)}}const k=new H,U=new H;function G(Q,oe,_e){k.setFromMatrixPosition(oe.matrixWorld),U.setFromMatrixPosition(_e.matrixWorld);const Ae=k.distanceTo(U),ye=oe.projectionMatrix.elements,re=_e.projectionMatrix.elements,A=ye[14]/(ye[10]-1),O=ye[14]/(ye[10]+1),z=(ye[9]+1)/ye[5],L=(ye[9]-1)/ye[5],X=(ye[8]-1)/ye[0],W=(re[8]+1)/re[0],ie=A*X,ee=A*W,Y=Ae/(-X+W),me=Y*-X;oe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(me),Q.translateZ(Y),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const P=A+Y,C=O+Y,j=ie-me,ae=ee+(Ae-me),ce=z*O/C*P,ue=L*O/C*P;Q.projectionMatrix.makePerspective(j,ae,ce,ue,P,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function K(Q,oe){oe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(oe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;x.near=T.near=M.near=Q.near,x.far=T.far=M.far=Q.far,(v!==x.near||D!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),v=x.near,D=x.far);const oe=Q.parent,_e=x.cameras;K(x,oe);for(let Ae=0;Ae<_e.length;Ae++)K(_e[Ae],oe);_e.length===2?G(x,M,T):x.projectionMatrix.copy(M.projectionMatrix),Z(Q,x,oe)};function Z(Q,oe,_e){_e===null?Q.matrix.copy(oe.matrixWorld):(Q.matrix.copy(_e.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(oe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Lo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)};let I=null;function se(Q,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let Ae=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,Ae=!0);for(let ye=0;ye<_e.length;ye++){const re=_e[ye];let A=null;if(d!==null)A=d.getViewport(re);else{const z=h.getViewSubImage(f,re);A=z.viewport,ye===0&&(e.setRenderTargetTextures(m,z.colorTexture,f.ignoreDepthValues?void 0:z.depthStencilTexture),e.setRenderTarget(m))}let O=E[ye];O===void 0&&(O=new Ln,O.layers.enable(ye),O.viewport=new bt,E[ye]=O),O.matrix.fromArray(re.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(re.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(A.x,A.y,A.width,A.height),ye===0&&(x.matrix.copy(O.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Ae===!0&&x.cameras.push(O)}}for(let _e=0;_e<S.length;_e++){const Ae=y[_e],ye=S[_e];Ae!==null&&ye!==void 0&&ye.update(Ae,oe,c||o)}I&&I(Q,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}const le=new kg;le.setAnimationLoop(se),this.setAnimationLoop=function(Q){I=Q},this.dispose=function(){}}}function AM(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Og(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,y,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Hn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Hn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const y=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*y,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Hn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function DM(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,y){const b=y.program;n.uniformBlockBinding(S,b)}function c(S,y){let b=i[S.id];b===void 0&&(g(S),b=u(S),i[S.id]=b,S.addEventListener("dispose",p));const w=y.program;n.updateUBOMapping(S,w);const M=e.render.frame;r[S.id]!==M&&(f(S),r[S.id]=M)}function u(S){const y=h();S.__bindingPointIndex=y;const b=s.createBuffer(),w=S.__size,M=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,w,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,b),b}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=i[S.id],b=S.uniforms,w=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let M=0,T=b.length;M<T;M++){const E=Array.isArray(b[M])?b[M]:[b[M]];for(let x=0,v=E.length;x<v;x++){const D=E[x];if(d(D,M,x,w)===!0){const R=D.__offset,q=Array.isArray(D.value)?D.value:[D.value];let N=0;for(let k=0;k<q.length;k++){const U=q[k],G=_(U);typeof U=="number"||typeof U=="boolean"?(D.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,R+N,D.__data)):U.isMatrix3?(D.__data[0]=U.elements[0],D.__data[1]=U.elements[1],D.__data[2]=U.elements[2],D.__data[3]=0,D.__data[4]=U.elements[3],D.__data[5]=U.elements[4],D.__data[6]=U.elements[5],D.__data[7]=0,D.__data[8]=U.elements[6],D.__data[9]=U.elements[7],D.__data[10]=U.elements[8],D.__data[11]=0):(U.toArray(D.__data,N),N+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,R,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,y,b,w){const M=S.value,T=y+"_"+b;if(w[T]===void 0)return typeof M=="number"||typeof M=="boolean"?w[T]=M:w[T]=M.clone(),!0;{const E=w[T];if(typeof M=="number"||typeof M=="boolean"){if(E!==M)return w[T]=M,!0}else if(E.equals(M)===!1)return E.copy(M),!0}return!1}function g(S){const y=S.uniforms;let b=0;const w=16;for(let T=0,E=y.length;T<E;T++){const x=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,D=x.length;v<D;v++){const R=x[v],q=Array.isArray(R.value)?R.value:[R.value];for(let N=0,k=q.length;N<k;N++){const U=q[N],G=_(U),K=b%w;K!==0&&w-K<G.boundary&&(b+=w-K),R.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=b,b+=G.storage}}}const M=b%w;return M>0&&(b+=w-M),S.__size=b,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class Yg{constructor(e={}){const{canvas:t=bx(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this._useLegacyLights=!1,this.toneMapping=Or,this.toneMappingExposure=1;const y=this;let b=!1,w=0,M=0,T=null,E=-1,x=null;const v=new bt,D=new bt;let R=null;const q=new $e(0);let N=0,k=t.width,U=t.height,G=1,K=null,Z=null;const I=new bt(0,0,k,U),se=new bt(0,0,k,U);let le=!1;const Q=new gf;let oe=!1,_e=!1,Ae=null;const ye=new rt,re=new xe,A=new H,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function z(){return T===null?G:1}let L=n;function X(F,$){for(let ne=0;ne<F.length;ne++){const te=F[ne],J=t.getContext(te,$);if(J!==null)return J}return null}try{const F={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uf}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",pe,!1),L===null){const $=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&$.shift(),L=X($,F),L===null)throw X($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let W,ie,ee,Y,me,P,C,j,ae,ce,ue,Te,Ee,Se,Pe,Ve,he,nt,ke,qe,Oe,De,B,ge;function Fe(){W=new kb(L),ie=new Ib(L,W,e),W.init(ie),De=new EM(L,W,ie),ee=new SM(L,W,ie),Y=new Vb(L),me=new lM,P=new bM(L,W,ee,me,ie,De,Y),C=new Nb(y),j=new Bb(y),ae=new Kx(L,ie),B=new Pb(L,W,ae,ie),ce=new zb(L,ae,Y,B),ue=new jb(L,ce,ae,Y),ke=new Xb(L,ie,P),Ve=new Fb(me),Te=new aM(y,C,j,W,ie,B,Ve),Ee=new AM(y,me),Se=new uM,Pe=new gM(W,ie),nt=new Rb(y,C,j,ee,ue,f,l),he=new yM(y,ue,ie),ge=new DM(L,Y,ie,ee),qe=new Lb(L,W,Y,ie),Oe=new Hb(L,W,Y,ie),Y.programs=Te.programs,y.capabilities=ie,y.extensions=W,y.properties=me,y.renderLists=Se,y.shadowMap=he,y.state=ee,y.info=Y}Fe();const fe=new wM(y,L);this.xr=fe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const F=W.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=W.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(F){F!==void 0&&(G=F,this.setSize(k,U,!1))},this.getSize=function(F){return F.set(k,U)},this.setSize=function(F,$,ne=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=F,U=$,t.width=Math.floor(F*G),t.height=Math.floor($*G),ne===!0&&(t.style.width=F+"px",t.style.height=$+"px"),this.setViewport(0,0,F,$)},this.getDrawingBufferSize=function(F){return F.set(k*G,U*G).floor()},this.setDrawingBufferSize=function(F,$,ne){k=F,U=$,G=ne,t.width=Math.floor(F*ne),t.height=Math.floor($*ne),this.setViewport(0,0,F,$)},this.getCurrentViewport=function(F){return F.copy(v)},this.getViewport=function(F){return F.copy(I)},this.setViewport=function(F,$,ne,te){F.isVector4?I.set(F.x,F.y,F.z,F.w):I.set(F,$,ne,te),ee.viewport(v.copy(I).multiplyScalar(G).floor())},this.getScissor=function(F){return F.copy(se)},this.setScissor=function(F,$,ne,te){F.isVector4?se.set(F.x,F.y,F.z,F.w):se.set(F,$,ne,te),ee.scissor(D.copy(se).multiplyScalar(G).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(F){ee.setScissorTest(le=F)},this.setOpaqueSort=function(F){K=F},this.setTransparentSort=function(F){Z=F},this.getClearColor=function(F){return F.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(F=!0,$=!0,ne=!0){let te=0;if(F){let J=!1;if(T!==null){const Me=T.texture.format;J=Me===bg||Me===Sg||Me===yg}if(J){const Me=T.texture.type,Ue=Me===Ur||Me===wr||Me===hf||Me===ps||Me===vg||Me===xg,je=nt.getClearColor(),Be=nt.getClearAlpha(),He=je.r,Ye=je.g,Qe=je.b;Ue?(d[0]=He,d[1]=Ye,d[2]=Qe,d[3]=Be,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=He,g[1]=Ye,g[2]=Qe,g[3]=Be,L.clearBufferiv(L.COLOR,0,g))}else te|=L.COLOR_BUFFER_BIT}$&&(te|=L.DEPTH_BUFFER_BIT),ne&&(te|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Se.dispose(),Pe.dispose(),me.dispose(),C.dispose(),j.dispose(),ue.dispose(),B.dispose(),ge.dispose(),Te.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Ce),fe.removeEventListener("sessionend",Ne),Ae&&(Ae.dispose(),Ae=null),ve.stop()};function de(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const F=Y.autoReset,$=he.enabled,ne=he.autoUpdate,te=he.needsUpdate,J=he.type;Fe(),Y.autoReset=F,he.enabled=$,he.autoUpdate=ne,he.needsUpdate=te,he.type=J}function pe(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function be(F){const $=F.target;$.removeEventListener("dispose",be),Ge($)}function Ge(F){ze(F),me.remove(F)}function ze(F){const $=me.get(F).programs;$!==void 0&&($.forEach(function(ne){Te.releaseProgram(ne)}),F.isShaderMaterial&&Te.releaseShaderCache(F))}this.renderBufferDirect=function(F,$,ne,te,J,Me){$===null&&($=O);const Ue=J.isMesh&&J.matrixWorld.determinant()<0,je=Tt(F,$,ne,te,J);ee.setMaterial(te,Ue);let Be=ne.index,He=1;if(te.wireframe===!0){if(Be=ce.getWireframeAttribute(ne),Be===void 0)return;He=2}const Ye=ne.drawRange,Qe=ne.attributes.position;let Pt=Ye.start*He,Qt=(Ye.start+Ye.count)*He;Me!==null&&(Pt=Math.max(Pt,Me.start*He),Qt=Math.min(Qt,(Me.start+Me.count)*He)),Be!==null?(Pt=Math.max(Pt,0),Qt=Math.min(Qt,Be.count)):Qe!=null&&(Pt=Math.max(Pt,0),Qt=Math.min(Qt,Qe.count));const mt=Qt-Pt;if(mt<0||mt===1/0)return;B.setup(J,te,je,ne,Be);let Mn,vt=qe;if(Be!==null&&(Mn=ae.get(Be),vt=Oe,vt.setIndex(Mn)),J.isMesh)te.wireframe===!0?(ee.setLineWidth(te.wireframeLinewidth*z()),vt.setMode(L.LINES)):vt.setMode(L.TRIANGLES);else if(J.isLine){let et=te.linewidth;et===void 0&&(et=1),ee.setLineWidth(et*z()),J.isLineSegments?vt.setMode(L.LINES):J.isLineLoop?vt.setMode(L.LINE_LOOP):vt.setMode(L.LINE_STRIP)}else J.isPoints?vt.setMode(L.POINTS):J.isSprite&&vt.setMode(L.TRIANGLES);if(J.isBatchedMesh)vt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)vt.renderInstances(Pt,mt,J.count);else if(ne.isInstancedBufferGeometry){const et=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,tu=Math.min(ne.instanceCount,et);vt.renderInstances(Pt,mt,tu)}else vt.render(Pt,mt)};function Ke(F,$,ne){F.transparent===!0&&F.side===fi&&F.forceSinglePass===!1?(F.side=Hn,F.needsUpdate=!0,Mt(F,$,ne),F.side=hr,F.needsUpdate=!0,Mt(F,$,ne),F.side=fi):Mt(F,$,ne)}this.compile=function(F,$,ne=null){ne===null&&(ne=F),p=Pe.get(ne),p.init(),S.push(p),ne.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),F!==ne&&F.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),p.setupLights(y._useLegacyLights);const te=new Set;return F.traverse(function(J){const Me=J.material;if(Me)if(Array.isArray(Me))for(let Ue=0;Ue<Me.length;Ue++){const je=Me[Ue];Ke(je,ne,J),te.add(je)}else Ke(Me,ne,J),te.add(Me)}),S.pop(),p=null,te},this.compileAsync=function(F,$,ne=null){const te=this.compile(F,$,ne);return new Promise(J=>{function Me(){if(te.forEach(function(Ue){me.get(Ue).currentProgram.isReady()&&te.delete(Ue)}),te.size===0){J(F);return}setTimeout(Me,10)}W.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let tt=null;function Le(F){tt&&tt(F)}function Ce(){ve.stop()}function Ne(){ve.start()}const ve=new kg;ve.setAnimationLoop(Le),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(F){tt=F,fe.setAnimationLoop(F),F===null?ve.stop():ve.start()},fe.addEventListener("sessionstart",Ce),fe.addEventListener("sessionend",Ne),this.render=function(F,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera($),$=fe.getCamera()),F.isScene===!0&&F.onBeforeRender(y,F,$,T),p=Pe.get(F,S.length),p.init(),S.push(p),ye.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Q.setFromProjectionMatrix(ye),_e=this.localClippingEnabled,oe=Ve.init(this.clippingPlanes,_e),_=Se.get(F,m.length),_.init(),m.push(_),Xe(F,$,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(K,Z),this.info.render.frame++,oe===!0&&Ve.beginShadows();const ne=p.state.shadowsArray;if(he.render(ne,F,$),oe===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),nt.render(_,F),p.setupLights(y._useLegacyLights),$.isArrayCamera){const te=$.cameras;for(let J=0,Me=te.length;J<Me;J++){const Ue=te[J];We(_,F,Ue,Ue.viewport)}}else We(_,F,$);T!==null&&(P.updateMultisampleRenderTarget(T),P.updateRenderTargetMipmap(T)),F.isScene===!0&&F.onAfterRender(y,F,$),B.resetDefaultState(),E=-1,x=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Xe(F,$,ne,te){if(F.visible===!1)return;if(F.layers.test($.layers)){if(F.isGroup)ne=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update($);else if(F.isLight)p.pushLight(F),F.castShadow&&p.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||Q.intersectsSprite(F)){te&&A.setFromMatrixPosition(F.matrixWorld).applyMatrix4(ye);const Ue=ue.update(F),je=F.material;je.visible&&_.push(F,Ue,je,ne,A.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||Q.intersectsObject(F))){const Ue=ue.update(F),je=F.material;if(te&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),A.copy(F.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),A.copy(Ue.boundingSphere.center)),A.applyMatrix4(F.matrixWorld).applyMatrix4(ye)),Array.isArray(je)){const Be=Ue.groups;for(let He=0,Ye=Be.length;He<Ye;He++){const Qe=Be[He],Pt=je[Qe.materialIndex];Pt&&Pt.visible&&_.push(F,Ue,Pt,ne,A.z,Qe)}}else je.visible&&_.push(F,Ue,je,ne,A.z,null)}}const Me=F.children;for(let Ue=0,je=Me.length;Ue<je;Ue++)Xe(Me[Ue],$,ne,te)}function We(F,$,ne,te){const J=F.opaque,Me=F.transmissive,Ue=F.transparent;p.setupLightsView(ne),oe===!0&&Ve.setGlobalState(y.clippingPlanes,ne),Me.length>0&&Je(J,Me,$,ne),te&&ee.viewport(v.copy(te)),J.length>0&&Nt(J,$,ne),Me.length>0&&Nt(Me,$,ne),Ue.length>0&&Nt(Ue,$,ne),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Je(F,$,ne,te){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;const Me=ie.isWebGL2;Ae===null&&(Ae=new Gr(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")?ar:Ur,minFilter:Vr,samples:Me?4:0})),y.getDrawingBufferSize(re),Me?Ae.setSize(re.x,re.y):Ae.setSize(Mc(re.x),Mc(re.y));const Ue=y.getRenderTarget();y.setRenderTarget(Ae),y.getClearColor(q),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear();const je=y.toneMapping;y.toneMapping=Or,Nt(F,ne,te),P.updateMultisampleRenderTarget(Ae),P.updateRenderTargetMipmap(Ae);let Be=!1;for(let He=0,Ye=$.length;He<Ye;He++){const Qe=$[He],Pt=Qe.object,Qt=Qe.geometry,mt=Qe.material,Mn=Qe.group;if(mt.side===fi&&Pt.layers.test(te.layers)){const vt=mt.side;mt.side=Hn,mt.needsUpdate=!0,st(Pt,ne,te,Qt,mt,Mn),mt.side=vt,mt.needsUpdate=!0,Be=!0}}Be===!0&&(P.updateMultisampleRenderTarget(Ae),P.updateRenderTargetMipmap(Ae)),y.setRenderTarget(Ue),y.setClearColor(q,N),y.toneMapping=je}function Nt(F,$,ne){const te=$.isScene===!0?$.overrideMaterial:null;for(let J=0,Me=F.length;J<Me;J++){const Ue=F[J],je=Ue.object,Be=Ue.geometry,He=te===null?Ue.material:te,Ye=Ue.group;je.layers.test(ne.layers)&&st(je,$,ne,Be,He,Ye)}}function st(F,$,ne,te,J,Me){F.onBeforeRender(y,$,ne,te,J,Me),F.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),J.onBeforeRender(y,$,ne,te,F,Me),J.transparent===!0&&J.side===fi&&J.forceSinglePass===!1?(J.side=Hn,J.needsUpdate=!0,y.renderBufferDirect(ne,$,te,J,F,Me),J.side=hr,J.needsUpdate=!0,y.renderBufferDirect(ne,$,te,J,F,Me),J.side=fi):y.renderBufferDirect(ne,$,te,J,F,Me),F.onAfterRender(y,$,ne,te,J,Me)}function Mt(F,$,ne){$.isScene!==!0&&($=O);const te=me.get(F),J=p.state.lights,Me=p.state.shadowsArray,Ue=J.state.version,je=Te.getParameters(F,J.state,Me,$,ne),Be=Te.getProgramCacheKey(je);let He=te.programs;te.environment=F.isMeshStandardMaterial?$.environment:null,te.fog=$.fog,te.envMap=(F.isMeshStandardMaterial?j:C).get(F.envMap||te.environment),He===void 0&&(F.addEventListener("dispose",be),He=new Map,te.programs=He);let Ye=He.get(Be);if(Ye!==void 0){if(te.currentProgram===Ye&&te.lightsStateVersion===Ue)return At(F,je),Ye}else je.uniforms=Te.getUniforms(F),F.onBuild(ne,je,y),F.onBeforeCompile(je,y),Ye=Te.acquireProgram(je,Be),He.set(Be,Ye),te.uniforms=je.uniforms;const Qe=te.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Qe.clippingPlanes=Ve.uniform),At(F,je),te.needsLights=qn(F),te.lightsStateVersion=Ue,te.needsLights&&(Qe.ambientLightColor.value=J.state.ambient,Qe.lightProbe.value=J.state.probe,Qe.directionalLights.value=J.state.directional,Qe.directionalLightShadows.value=J.state.directionalShadow,Qe.spotLights.value=J.state.spot,Qe.spotLightShadows.value=J.state.spotShadow,Qe.rectAreaLights.value=J.state.rectArea,Qe.ltc_1.value=J.state.rectAreaLTC1,Qe.ltc_2.value=J.state.rectAreaLTC2,Qe.pointLights.value=J.state.point,Qe.pointLightShadows.value=J.state.pointShadow,Qe.hemisphereLights.value=J.state.hemi,Qe.directionalShadowMap.value=J.state.directionalShadowMap,Qe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Qe.spotShadowMap.value=J.state.spotShadowMap,Qe.spotLightMatrix.value=J.state.spotLightMatrix,Qe.spotLightMap.value=J.state.spotLightMap,Qe.pointShadowMap.value=J.state.pointShadowMap,Qe.pointShadowMatrix.value=J.state.pointShadowMatrix),te.currentProgram=Ye,te.uniformsList=null,Ye}function Jt(F){if(F.uniformsList===null){const $=F.currentProgram.getUniforms();F.uniformsList=ic.seqWithValue($.seq,F.uniforms)}return F.uniformsList}function At(F,$){const ne=me.get(F);ne.outputColorSpace=$.outputColorSpace,ne.batching=$.batching,ne.instancing=$.instancing,ne.instancingColor=$.instancingColor,ne.skinning=$.skinning,ne.morphTargets=$.morphTargets,ne.morphNormals=$.morphNormals,ne.morphColors=$.morphColors,ne.morphTargetsCount=$.morphTargetsCount,ne.numClippingPlanes=$.numClippingPlanes,ne.numIntersection=$.numClipIntersection,ne.vertexAlphas=$.vertexAlphas,ne.vertexTangents=$.vertexTangents,ne.toneMapping=$.toneMapping}function Tt(F,$,ne,te,J){$.isScene!==!0&&($=O),P.resetTextureUnits();const Me=$.fog,Ue=te.isMeshStandardMaterial?$.environment:null,je=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Zt,Be=(te.isMeshStandardMaterial?j:C).get(te.envMap||Ue),He=te.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Ye=!!ne.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Qe=!!ne.morphAttributes.position,Pt=!!ne.morphAttributes.normal,Qt=!!ne.morphAttributes.color;let mt=Or;te.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(mt=y.toneMapping);const Mn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,vt=Mn!==void 0?Mn.length:0,et=me.get(te),tu=p.state.lights;if(oe===!0&&(_e===!0||F!==x)){const oi=F===x&&te.id===E;Ve.setState(te,F,oi)}let zt=!1;te.version===et.__version?(et.needsLights&&et.lightsStateVersion!==tu.state.version||et.outputColorSpace!==je||J.isBatchedMesh&&et.batching===!1||!J.isBatchedMesh&&et.batching===!0||J.isInstancedMesh&&et.instancing===!1||!J.isInstancedMesh&&et.instancing===!0||J.isSkinnedMesh&&et.skinning===!1||!J.isSkinnedMesh&&et.skinning===!0||J.isInstancedMesh&&et.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&et.instancingColor===!1&&J.instanceColor!==null||et.envMap!==Be||te.fog===!0&&et.fog!==Me||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ve.numPlanes||et.numIntersection!==Ve.numIntersection)||et.vertexAlphas!==He||et.vertexTangents!==Ye||et.morphTargets!==Qe||et.morphNormals!==Pt||et.morphColors!==Qt||et.toneMapping!==mt||ie.isWebGL2===!0&&et.morphTargetsCount!==vt)&&(zt=!0):(zt=!0,et.__version=te.version);let Kr=et.currentProgram;zt===!0&&(Kr=Mt(te,$,J));let ad=!1,qo=!1,nu=!1;const mn=Kr.getUniforms(),Zr=et.uniforms;if(ee.useProgram(Kr.program)&&(ad=!0,qo=!0,nu=!0),te.id!==E&&(E=te.id,qo=!0),ad||x!==F){mn.setValue(L,"projectionMatrix",F.projectionMatrix),mn.setValue(L,"viewMatrix",F.matrixWorldInverse);const oi=mn.map.cameraPosition;oi!==void 0&&oi.setValue(L,A.setFromMatrixPosition(F.matrixWorld)),ie.logarithmicDepthBuffer&&mn.setValue(L,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&mn.setValue(L,"isOrthographic",F.isOrthographicCamera===!0),x!==F&&(x=F,qo=!0,nu=!0)}if(J.isSkinnedMesh){mn.setOptional(L,J,"bindMatrix"),mn.setOptional(L,J,"bindMatrixInverse");const oi=J.skeleton;oi&&(ie.floatVertexTextures?(oi.boneTexture===null&&oi.computeBoneTexture(),mn.setValue(L,"boneTexture",oi.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(mn.setOptional(L,J,"batchingTexture"),mn.setValue(L,"batchingTexture",J._matricesTexture,P));const iu=ne.morphAttributes;if((iu.position!==void 0||iu.normal!==void 0||iu.color!==void 0&&ie.isWebGL2===!0)&&ke.update(J,ne,Kr),(qo||et.receiveShadow!==J.receiveShadow)&&(et.receiveShadow=J.receiveShadow,mn.setValue(L,"receiveShadow",J.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Zr.envMap.value=Be,Zr.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),qo&&(mn.setValue(L,"toneMappingExposure",y.toneMappingExposure),et.needsLights&&pt(Zr,nu),Me&&te.fog===!0&&Ee.refreshFogUniforms(Zr,Me),Ee.refreshMaterialUniforms(Zr,te,G,U,Ae),ic.upload(L,Jt(et),Zr,P)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ic.upload(L,Jt(et),Zr,P),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&mn.setValue(L,"center",J.center),mn.setValue(L,"modelViewMatrix",J.modelViewMatrix),mn.setValue(L,"normalMatrix",J.normalMatrix),mn.setValue(L,"modelMatrix",J.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const oi=te.uniformsGroups;for(let ru=0,cv=oi.length;ru<cv;ru++)if(ie.isWebGL2){const ld=oi[ru];ge.update(ld,Kr),ge.bind(ld,Kr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kr}function pt(F,$){F.ambientLightColor.needsUpdate=$,F.lightProbe.needsUpdate=$,F.directionalLights.needsUpdate=$,F.directionalLightShadows.needsUpdate=$,F.pointLights.needsUpdate=$,F.pointLightShadows.needsUpdate=$,F.spotLights.needsUpdate=$,F.spotLightShadows.needsUpdate=$,F.rectAreaLights.needsUpdate=$,F.hemisphereLights.needsUpdate=$}function qn(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(F,$,ne){me.get(F.texture).__webglTexture=$,me.get(F.depthTexture).__webglTexture=ne;const te=me.get(F);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=ne===void 0,te.__autoAllocateDepthBuffer||W.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,$){const ne=me.get(F);ne.__webglFramebuffer=$,ne.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(F,$=0,ne=0){T=F,w=$,M=ne;let te=!0,J=null,Me=!1,Ue=!1;if(F){const Be=me.get(F);Be.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(L.FRAMEBUFFER,null),te=!1):Be.__webglFramebuffer===void 0?P.setupRenderTarget(F):Be.__hasExternalTextures&&P.rebindTextures(F,me.get(F.texture).__webglTexture,me.get(F.depthTexture).__webglTexture);const He=F.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ue=!0);const Ye=me.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Ye[$])?J=Ye[$][ne]:J=Ye[$],Me=!0):ie.isWebGL2&&F.samples>0&&P.useMultisampledRTT(F)===!1?J=me.get(F).__webglMultisampledFramebuffer:Array.isArray(Ye)?J=Ye[ne]:J=Ye,v.copy(F.viewport),D.copy(F.scissor),R=F.scissorTest}else v.copy(I).multiplyScalar(G).floor(),D.copy(se).multiplyScalar(G).floor(),R=le;if(ee.bindFramebuffer(L.FRAMEBUFFER,J)&&ie.drawBuffers&&te&&ee.drawBuffers(F,J),ee.viewport(v),ee.scissor(D),ee.setScissorTest(R),Me){const Be=me.get(F.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be.__webglTexture,ne)}else if(Ue){const Be=me.get(F.texture),He=$||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Be.__webglTexture,ne||0,He)}E=-1},this.readRenderTargetPixels=function(F,$,ne,te,J,Me,Ue){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=me.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ue!==void 0&&(je=je[Ue]),je){ee.bindFramebuffer(L.FRAMEBUFFER,je);try{const Be=F.texture,He=Be.format,Ye=Be.type;if(He!==di&&De.convert(He)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=Ye===ar&&(W.has("EXT_color_buffer_half_float")||ie.isWebGL2&&W.has("EXT_color_buffer_float"));if(Ye!==Ur&&De.convert(Ye)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===mi&&(ie.isWebGL2||W.has("OES_texture_float")||W.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=F.width-te&&ne>=0&&ne<=F.height-J&&L.readPixels($,ne,te,J,De.convert(He),De.convert(Ye),Me)}finally{const Be=T!==null?me.get(T).__webglFramebuffer:null;ee.bindFramebuffer(L.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(F,$,ne=0){const te=Math.pow(2,-ne),J=Math.floor($.image.width*te),Me=Math.floor($.image.height*te);P.setTexture2D($,0),L.copyTexSubImage2D(L.TEXTURE_2D,ne,0,0,F.x,F.y,J,Me),ee.unbindTexture()},this.copyTextureToTexture=function(F,$,ne,te=0){const J=$.image.width,Me=$.image.height,Ue=De.convert(ne.format),je=De.convert(ne.type);P.setTexture2D(ne,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,ne.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,ne.unpackAlignment),$.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,te,F.x,F.y,J,Me,Ue,je,$.image.data):$.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,te,F.x,F.y,$.mipmaps[0].width,$.mipmaps[0].height,Ue,$.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,te,F.x,F.y,Ue,je,$.image),te===0&&ne.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(F,$,ne,te,J=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=F.max.x-F.min.x+1,Ue=F.max.y-F.min.y+1,je=F.max.z-F.min.z+1,Be=De.convert(te.format),He=De.convert(te.type);let Ye;if(te.isData3DTexture)P.setTexture3D(te,0),Ye=L.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)P.setTexture2DArray(te,0),Ye=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,te.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,te.unpackAlignment);const Qe=L.getParameter(L.UNPACK_ROW_LENGTH),Pt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Qt=L.getParameter(L.UNPACK_SKIP_PIXELS),mt=L.getParameter(L.UNPACK_SKIP_ROWS),Mn=L.getParameter(L.UNPACK_SKIP_IMAGES),vt=ne.isCompressedTexture?ne.mipmaps[J]:ne.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,vt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,F.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,F.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,F.min.z),ne.isDataTexture||ne.isData3DTexture?L.texSubImage3D(Ye,J,$.x,$.y,$.z,Me,Ue,je,Be,He,vt.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ye,J,$.x,$.y,$.z,Me,Ue,je,Be,vt.data)):L.texSubImage3D(Ye,J,$.x,$.y,$.z,Me,Ue,je,Be,He,vt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Qe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qt),L.pixelStorei(L.UNPACK_SKIP_ROWS,mt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Mn),J===0&&te.generateMipmaps&&L.generateMipmap(Ye),ee.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?P.setTextureCube(F,0):F.isData3DTexture?P.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?P.setTexture2DArray(F,0):P.setTexture2D(F,0),ee.unbindTexture()},this.resetState=function(){w=0,M=0,T=null,ee.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return lr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ff?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===Vc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?Br:Tg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Br?Lt:Zt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class CM extends Yg{}CM.prototype.isWebGL1Renderer=!0;class qg extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class RM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_h,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tn=new H;class vf{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Oi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Pp=new H,Lp=new bt,Ip=new bt,PM=new H,Fp=new rt,Rl=new H,Fu=new ji,Np=new rt,Nu=new Go;class LM extends dn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=md,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Rl),this.boundingBox.expandByPoint(Rl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ji),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Rl),this.boundingSphere.expandByPoint(Rl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fu.copy(this.boundingSphere),Fu.applyMatrix4(i),e.ray.intersectsSphere(Fu)!==!1&&(Np.copy(i).invert(),Nu.copy(e.ray).applyMatrix4(Np),!(this.boundingBox!==null&&Nu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Nu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===md?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Lp.fromBufferAttribute(i.attributes.skinIndex,e),Ip.fromBufferAttribute(i.attributes.skinWeight,e),Pp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Ip.getComponent(r);if(o!==0){const a=Lp.getComponent(r);Fp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(PM.copy(Pp).applyMatrix4(Fp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class $g extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Kg extends hn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=cn,u=cn,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Op=new rt,IM=new rt;class xf{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:IM;Op.multiplyMatrices(a,t[r]),Op.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Kg(t,e,e,di,mi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new $g),this.bones.push(o),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Sh extends Wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const eo=new rt,Up=new rt,Pl=[],Bp=new pr,FM=new rt,Qo=new dn,ea=new ji;class NM extends dn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,FM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,eo),Bp.copy(e.boundingBox).applyMatrix4(eo),this.boundingBox.union(Bp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,eo),ea.copy(e.boundingSphere).applyMatrix4(eo),this.boundingSphere.union(ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Qo.geometry=this.geometry,Qo.material=this.material,Qo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(n),e.ray.intersectsSphere(ea)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,eo),Up.multiplyMatrices(n,eo),Qo.matrixWorld=Up,Qo.raycast(e,Pl);for(let o=0,a=Pl.length;o<a;o++){const l=Pl[o];l.instanceId=r,l.object=this,t.push(l)}Pl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Zg extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kp=new H,zp=new H,Hp=new rt,Ou=new Go,Ll=new ji;class yf extends Rt{constructor(e=new si,t=new Zg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)kp.fromBufferAttribute(t,i-1),zp.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=kp.distanceTo(zp);e.setAttribute("lineDistance",new Vn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ll.copy(n.boundingSphere),Ll.applyMatrix4(i),Ll.radius+=r,e.ray.intersectsSphere(Ll)===!1)return;Hp.copy(i).invert(),Ou.copy(e.ray).applyMatrix4(Hp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new H,u=new H,h=new H,f=new H,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let y=m,b=S-1;y<b;y+=d){const w=g.getX(y),M=g.getX(y+1);if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,M),Ou.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let y=m,b=S-1;y<b;y+=d){if(c.fromBufferAttribute(p,y),u.fromBufferAttribute(p,y+1),Ou.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Vp=new H,Gp=new H;class OM extends yf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Vp.fromBufferAttribute(t,i),Gp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vp.distanceTo(Gp);e.setAttribute("lineDistance",new Vn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class UM extends yf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Jg extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wp=new rt,bh=new Go,Il=new ji,Fl=new H;class BM extends Rt{constructor(e=new si,t=new Jg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Il.copy(n.boundingSphere),Il.applyMatrix4(i),Il.radius+=r,e.ray.intersectsSphere(Il)===!1)return;Wp.copy(i).invert(),bh.copy(e.ray).applyMatrix4(Wp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const p=c.getX(g);Fl.fromBufferAttribute(h,p),Xp(Fl,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Fl.fromBufferAttribute(h,g),Xp(Fl,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xp(s,e,t,n,i,r,o){const a=bh.distanceSqToPoint(s);if(a<t){const l=new H;bh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Yi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new xe:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new H,i=[],r=[],o=[],a=new H,l=new rt;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Kt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Kt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sf extends Yi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new xe,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class kM extends Sf{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function bf(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Nl=new H,Uu=new bf,Bu=new bf,ku=new bf;class zM extends Yi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new H){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Nl.subVectors(i[0],i[1]).add(i[0]),c=Nl);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Nl.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Nl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Uu.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,p),Bu.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,p),ku.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(Uu.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Bu.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ku.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Uu.calc(l),Bu.calc(l),ku.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new H().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jp(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function HM(s,e){const t=1-s;return t*t*e}function VM(s,e){return 2*(1-s)*s*e}function GM(s,e){return s*s*e}function Sa(s,e,t,n){return HM(s,e)+VM(s,t)+GM(s,n)}function WM(s,e){const t=1-s;return t*t*t*e}function XM(s,e){const t=1-s;return 3*t*t*s*e}function jM(s,e){return 3*(1-s)*s*s*e}function YM(s,e){return s*s*s*e}function ba(s,e,t,n,i){return WM(s,e)+XM(s,t)+jM(s,n)+YM(s,i)}class Qg extends Yi{constructor(e=new xe,t=new xe,n=new xe,i=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new xe){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ba(e,i.x,r.x,o.x,a.x),ba(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qM extends Yi{constructor(e=new H,t=new H,n=new H,i=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new H){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ba(e,i.x,r.x,o.x,a.x),ba(e,i.y,r.y,o.y,a.y),ba(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class e_ extends Yi{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $M extends Yi{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class t_ extends Yi{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Sa(e,i.x,r.x,o.x),Sa(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class KM extends Yi{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Sa(e,i.x,r.x,o.x),Sa(e,i.y,r.y,o.y),Sa(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class n_ extends Yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(jp(a,l.x,c.x,u.x,h.x),jp(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new xe().fromArray(i))}return this}}var Eh=Object.freeze({__proto__:null,ArcCurve:kM,CatmullRomCurve3:zM,CubicBezierCurve:Qg,CubicBezierCurve3:qM,EllipseCurve:Sf,LineCurve:e_,LineCurve3:$M,QuadraticBezierCurve:t_,QuadraticBezierCurve3:KM,SplineCurve:n_});class ZM extends Yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Eh[i.type]().fromJSON(i))}return this}}class Mh extends ZM{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new e_(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new t_(this.currentPoint.clone(),new xe(e,t),new xe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Qg(this.currentPoint.clone(),new xe(e,t),new xe(n,i),new xe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new n_(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Sf(e,t,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ef extends si{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Vn(r,3)),this.setAttribute("normal",new Vn(r.slice(),3)),this.setAttribute("uv",new Vn(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new H,b=new H,w=new H;for(let M=0;M<t.length;M+=3)d(t[M+0],y),d(t[M+1],b),d(t[M+2],w),l(y,b,w,S)}function l(S,y,b,w){const M=w+1,T=[];for(let E=0;E<=M;E++){T[E]=[];const x=S.clone().lerp(b,E/M),v=y.clone().lerp(b,E/M),D=M-E;for(let R=0;R<=D;R++)R===0&&E===M?T[E][R]=x:T[E][R]=x.clone().lerp(v,R/D)}for(let E=0;E<M;E++)for(let x=0;x<2*(M-E)-1;x++){const v=Math.floor(x/2);x%2===0?(f(T[E][v+1]),f(T[E+1][v]),f(T[E][v])):(f(T[E][v+1]),f(T[E+1][v+1]),f(T[E+1][v]))}}function c(S){const y=new H;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(S),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function u(){const S=new H;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];const b=p(S)/2/Math.PI+.5,w=m(S)/Math.PI+.5;o.push(b,1-w)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){const y=o[S+0],b=o[S+2],w=o[S+4],M=Math.max(y,b,w),T=Math.min(y,b,w);M>.9&&T<.1&&(y<.2&&(o[S+0]+=1),b<.2&&(o[S+2]+=1),w<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,y){const b=S*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function g(){const S=new H,y=new H,b=new H,w=new H,M=new xe,T=new xe,E=new xe;for(let x=0,v=0;x<r.length;x+=9,v+=6){S.set(r[x+0],r[x+1],r[x+2]),y.set(r[x+3],r[x+4],r[x+5]),b.set(r[x+6],r[x+7],r[x+8]),M.set(o[v+0],o[v+1]),T.set(o[v+2],o[v+3]),E.set(o[v+4],o[v+5]),w.copy(S).add(y).add(b).divideScalar(3);const D=p(w);_(M,v+0,S,D),_(T,v+2,y,D),_(E,v+4,b,D)}}function _(S,y,b,w){w<0&&S.x===1&&(o[y]=S.x-1),b.x===0&&b.z===0&&(o[y]=w/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ef(e.vertices,e.indices,e.radius,e.details)}}class rc extends Mh{constructor(e){super(e),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Mh().fromJSON(i))}return this}}const JM={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=i_(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=iT(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let g=t;g<i;g+=t)h=s[g],f=s[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return ka(r,o,t,a,l,d,0),o}};function i_(s,e,t,n,i){let r,o;if(i===pT(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Yp(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Yp(r,s[r],s[r+1],o);return o&&jc(o,o.next)&&(Ha(o),o=o.next),o}function Es(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(jc(t,t.next)||Bt(t.prev,t,t.next)===0)){if(Ha(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ka(s,e,t,n,i,r,o){if(!s)return;!o&&r&&lT(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?eT(s,n,i,r):QM(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Ha(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=tT(Es(s),e,t),ka(s,e,t,n,i,r,2)):o===2&&nT(s,e,t,n,i,r):ka(Es(s),e,t,n,i,r,1);break}}}function QM(s){const e=s.prev,t=s,n=s.next;if(Bt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&uo(i,a,r,l,o,c,g.x,g.y)&&Bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function eT(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Bt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,m=Th(d,g,e,t,n),S=Th(_,p,e,t,n);let y=s.prevZ,b=s.nextZ;for(;y&&y.z>=m&&b&&b.z<=S;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&uo(a,u,l,h,c,f,y.x,y.y)&&Bt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=d&&b.x<=_&&b.y>=g&&b.y<=p&&b!==i&&b!==o&&uo(a,u,l,h,c,f,b.x,b.y)&&Bt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&uo(a,u,l,h,c,f,y.x,y.y)&&Bt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=S;){if(b.x>=d&&b.x<=_&&b.y>=g&&b.y<=p&&b!==i&&b!==o&&uo(a,u,l,h,c,f,b.x,b.y)&&Bt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function tT(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!jc(i,r)&&r_(i,n,n.next,r)&&za(i,r)&&za(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ha(n),Ha(n.next),n=s=r),n=n.next}while(n!==s);return Es(n)}function nT(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hT(o,a)){let l=s_(o,a);o=Es(o,o.next),l=Es(l,l.next),ka(o,e,t,n,i,r,0),ka(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function iT(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=i_(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(uT(c));for(i.sort(rT),r=0;r<i.length;r++)t=sT(i[r],t);return t}function rT(s,e){return s.x-e.x}function sT(s,e){const t=oT(s,e);if(!t)return e;const n=s_(t,s);return Es(n,n.next),Es(t,t.next)}function oT(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&uo(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),za(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&aT(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function aT(s,e){return Bt(s.prev,s,e.prev)<0&&Bt(e.next,s,s.next)<0}function lT(s,e,t,n){let i=s;do i.z===0&&(i.z=Th(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,cT(i)}function cT(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Th(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function uT(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function uo(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function hT(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!fT(s,e)&&(za(s,e)&&za(e,s)&&dT(s,e)&&(Bt(s.prev,s,e.prev)||Bt(s,e.prev,e))||jc(s,e)&&Bt(s.prev,s,s.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function jc(s,e){return s.x===e.x&&s.y===e.y}function r_(s,e,t,n){const i=Ul(Bt(s,e,t)),r=Ul(Bt(s,e,n)),o=Ul(Bt(t,n,s)),a=Ul(Bt(t,n,e));return!!(i!==r&&o!==a||i===0&&Ol(s,t,e)||r===0&&Ol(s,n,e)||o===0&&Ol(t,s,n)||a===0&&Ol(t,e,n))}function Ol(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ul(s){return s>0?1:s<0?-1:0}function fT(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&r_(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function za(s,e){return Bt(s.prev,s,s.next)<0?Bt(s,e,s.next)>=0&&Bt(s,s.prev,e)>=0:Bt(s,e,s.prev)<0||Bt(s,s.next,e)<0}function dT(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function s_(s,e){const t=new wh(s.i,s.x,s.y),n=new wh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Yp(s,e,t,n){const i=new wh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ha(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function wh(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pT(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class _o{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return _o.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];qp(e),$p(n,e);let o=e.length;t.forEach(qp);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,$p(n,t[l]);const a=JM.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function qp(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function $p(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Mf extends si{constructor(e=new rc([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Vn(i,3)),this.setAttribute("uv",new Vn(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:mT;let y,b=!1,w,M,T,E;m&&(y=m.getSpacedPoints(u),b=!0,f=!1,w=m.computeFrenetFrames(u,!1),M=new H,T=new H,E=new H),f||(p=0,d=0,g=0,_=0);const x=a.extractPoints(c);let v=x.shape;const D=x.holes;if(!_o.isClockWise(v)){v=v.reverse();for(let L=0,X=D.length;L<X;L++){const W=D[L];_o.isClockWise(W)&&(D[L]=W.reverse())}}const q=_o.triangulateShape(v,D),N=v;for(let L=0,X=D.length;L<X;L++){const W=D[L];v=v.concat(W)}function k(L,X,W){return X||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(X,W)}const U=v.length,G=q.length;function K(L,X,W){let ie,ee,Y;const me=L.x-X.x,P=L.y-X.y,C=W.x-L.x,j=W.y-L.y,ae=me*me+P*P,ce=me*j-P*C;if(Math.abs(ce)>Number.EPSILON){const ue=Math.sqrt(ae),Te=Math.sqrt(C*C+j*j),Ee=X.x-P/ue,Se=X.y+me/ue,Pe=W.x-j/Te,Ve=W.y+C/Te,he=((Pe-Ee)*j-(Ve-Se)*C)/(me*j-P*C);ie=Ee+me*he-L.x,ee=Se+P*he-L.y;const nt=ie*ie+ee*ee;if(nt<=2)return new xe(ie,ee);Y=Math.sqrt(nt/2)}else{let ue=!1;me>Number.EPSILON?C>Number.EPSILON&&(ue=!0):me<-Number.EPSILON?C<-Number.EPSILON&&(ue=!0):Math.sign(P)===Math.sign(j)&&(ue=!0),ue?(ie=-P,ee=me,Y=Math.sqrt(ae)):(ie=me,ee=P,Y=Math.sqrt(ae/2))}return new xe(ie/Y,ee/Y)}const Z=[];for(let L=0,X=N.length,W=X-1,ie=L+1;L<X;L++,W++,ie++)W===X&&(W=0),ie===X&&(ie=0),Z[L]=K(N[L],N[W],N[ie]);const I=[];let se,le=Z.concat();for(let L=0,X=D.length;L<X;L++){const W=D[L];se=[];for(let ie=0,ee=W.length,Y=ee-1,me=ie+1;ie<ee;ie++,Y++,me++)Y===ee&&(Y=0),me===ee&&(me=0),se[ie]=K(W[ie],W[Y],W[me]);I.push(se),le=le.concat(se)}for(let L=0;L<p;L++){const X=L/p,W=d*Math.cos(X*Math.PI/2),ie=g*Math.sin(X*Math.PI/2)+_;for(let ee=0,Y=N.length;ee<Y;ee++){const me=k(N[ee],Z[ee],ie);ye(me.x,me.y,-W)}for(let ee=0,Y=D.length;ee<Y;ee++){const me=D[ee];se=I[ee];for(let P=0,C=me.length;P<C;P++){const j=k(me[P],se[P],ie);ye(j.x,j.y,-W)}}}const Q=g+_;for(let L=0;L<U;L++){const X=f?k(v[L],le[L],Q):v[L];b?(T.copy(w.normals[0]).multiplyScalar(X.x),M.copy(w.binormals[0]).multiplyScalar(X.y),E.copy(y[0]).add(T).add(M),ye(E.x,E.y,E.z)):ye(X.x,X.y,0)}for(let L=1;L<=u;L++)for(let X=0;X<U;X++){const W=f?k(v[X],le[X],Q):v[X];b?(T.copy(w.normals[L]).multiplyScalar(W.x),M.copy(w.binormals[L]).multiplyScalar(W.y),E.copy(y[L]).add(T).add(M),ye(E.x,E.y,E.z)):ye(W.x,W.y,h/u*L)}for(let L=p-1;L>=0;L--){const X=L/p,W=d*Math.cos(X*Math.PI/2),ie=g*Math.sin(X*Math.PI/2)+_;for(let ee=0,Y=N.length;ee<Y;ee++){const me=k(N[ee],Z[ee],ie);ye(me.x,me.y,h+W)}for(let ee=0,Y=D.length;ee<Y;ee++){const me=D[ee];se=I[ee];for(let P=0,C=me.length;P<C;P++){const j=k(me[P],se[P],ie);b?ye(j.x,j.y+y[u-1].y,y[u-1].x+W):ye(j.x,j.y,h+W)}}}oe(),_e();function oe(){const L=i.length/3;if(f){let X=0,W=U*X;for(let ie=0;ie<G;ie++){const ee=q[ie];re(ee[2]+W,ee[1]+W,ee[0]+W)}X=u+p*2,W=U*X;for(let ie=0;ie<G;ie++){const ee=q[ie];re(ee[0]+W,ee[1]+W,ee[2]+W)}}else{for(let X=0;X<G;X++){const W=q[X];re(W[2],W[1],W[0])}for(let X=0;X<G;X++){const W=q[X];re(W[0]+U*u,W[1]+U*u,W[2]+U*u)}}n.addGroup(L,i.length/3-L,0)}function _e(){const L=i.length/3;let X=0;Ae(N,X),X+=N.length;for(let W=0,ie=D.length;W<ie;W++){const ee=D[W];Ae(ee,X),X+=ee.length}n.addGroup(L,i.length/3-L,1)}function Ae(L,X){let W=L.length;for(;--W>=0;){const ie=W;let ee=W-1;ee<0&&(ee=L.length-1);for(let Y=0,me=u+p*2;Y<me;Y++){const P=U*Y,C=U*(Y+1),j=X+ie+P,ae=X+ee+P,ce=X+ee+C,ue=X+ie+C;A(j,ae,ce,ue)}}}function ye(L,X,W){l.push(L),l.push(X),l.push(W)}function re(L,X,W){O(L),O(X),O(W);const ie=i.length/3,ee=S.generateTopUV(n,i,ie-3,ie-2,ie-1);z(ee[0]),z(ee[1]),z(ee[2])}function A(L,X,W,ie){O(L),O(X),O(ie),O(X),O(W),O(ie);const ee=i.length/3,Y=S.generateSideWallUV(n,i,ee-6,ee-3,ee-2,ee-1);z(Y[0]),z(Y[1]),z(Y[3]),z(Y[1]),z(Y[2]),z(Y[3])}function O(L){i.push(l[L*3+0]),i.push(l[L*3+1]),i.push(l[L*3+2])}function z(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return gT(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Eh[i.type]().fromJSON(i)),new Mf(n,e.options)}}const mT={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new xe(r,o),new xe(a,l),new xe(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],_=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new xe(o,1-l),new xe(c,1-h),new xe(f,1-g),new xe(_,1-m)]:[new xe(a,1-l),new xe(u,1-h),new xe(d,1-g),new xe(p,1-m)]}};function gT(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Tf extends Ef{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tf(e.radius,e.detail)}}class wf extends Ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ag,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Li extends wf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Bl(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function _T(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function vT(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Kp(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function o_(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class el{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class xT extends el{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hd,endingEnd:Hd}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vd:r=e,a=2*t-n;break;case Gd:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vd:o=e,l=2*n-t;break;case Gd:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,S=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*p+(1.5+d)*_+.5*g,b=d*p-d*_;for(let w=0;w!==a;++w)r[w]=m*o[u+w]+S*o[c+w]+y*o[l+w]+b*o[h+w];return r}}class yT extends el{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class ST extends el{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class qi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bl(t,this.TimeBufferType),this.values=Bl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Bl(e.times,Array),values:Bl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ST(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ua:t=this.InterpolantFactoryMethodDiscrete;break;case Po:t=this.InterpolantFactoryMethodLinear;break;case uu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return Po;case this.InterpolantFactoryMethodSmooth:return uu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&_T(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===uu,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}qi.prototype.TimeBufferType=Float32Array;qi.prototype.ValueBufferType=Float32Array;qi.prototype.DefaultInterpolation=Po;class jo extends qi{}jo.prototype.ValueTypeName="bool";jo.prototype.ValueBufferType=Array;jo.prototype.DefaultInterpolation=Ua;jo.prototype.InterpolantFactoryMethodLinear=void 0;jo.prototype.InterpolantFactoryMethodSmooth=void 0;class a_ extends qi{}a_.prototype.ValueTypeName="color";class Fo extends qi{}Fo.prototype.ValueTypeName="number";class bT extends el{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Gi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ms extends qi{InterpolantFactoryMethodLinear(e){return new bT(this.times,this.values,this.getValueSize(),e)}}Ms.prototype.ValueTypeName="quaternion";Ms.prototype.DefaultInterpolation=Po;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Yo extends qi{}Yo.prototype.ValueTypeName="string";Yo.prototype.ValueBufferType=Array;Yo.prototype.DefaultInterpolation=Ua;Yo.prototype.InterpolantFactoryMethodLinear=void 0;Yo.prototype.InterpolantFactoryMethodSmooth=void 0;class No extends qi{}No.prototype.ValueTypeName="vector";class ET{constructor(e,t=-1,n,i=Zv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(TT(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(qi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=vT(l);l=Kp(l,1,u),c=Kp(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Fo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const p=[],m=[];o_(d,p,m,g),p.length!==0&&_.push(new h(f,p,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const p=[],m=[];for(let S=0;S!==f[g].morphTargets.length;++S){const y=f[g];p.push(y.time),m.push(y.morphTarget===_?1:0)}i.push(new Fo(".morphTargetInfluence["+_+"]",p,m))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(No,d+".position",f,"pos",i),n(Ms,d+".quaternion",f,"rot",i),n(No,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function MT(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fo;case"vector":case"vector2":case"vector3":case"vector4":return No;case"color":return a_;case"quaternion":return Ms;case"bool":case"boolean":return jo;case"string":return Yo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function TT(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=MT(s.type);if(s.times===void 0){const t=[],n=[];o_(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ar={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class wT{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const AT=new wT;class mr{constructor(e){this.manager=e!==void 0?e:AT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}mr.DEFAULT_MATERIAL_NAME="__DEFAULT";const er={};class DT extends Error{constructor(e,t){super(e),this.response=t}}class Oo extends mr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ar.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(er[e]!==void 0){er[e].push({onLoad:t,onProgress:n,onError:i});return}er[e]=[],er[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=er[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let _=0;const p=new ReadableStream({start(m){S();function S(){h.read().then(({done:y,value:b})=>{if(y)m.close();else{_+=b.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let M=0,T=u.length;M<T;M++){const E=u[M];E.onProgress&&E.onProgress(w)}m.enqueue(b),S()}})}}});return new Response(p)}else throw new DT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ar.add(e,c);const u=er[e];delete er[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=er[e];if(u===void 0)throw this.manager.itemError(e),c;delete er[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class CT extends mr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ar.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ba("img");function l(){u(),Ar.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class RT extends mr{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Kg,a=new Oo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:zn,o.wrapT=c.wrapT!==void 0?c.wrapT:zn,o.magFilter=c.magFilter!==void 0?c.magFilter:nn,o.minFilter=c.minFilter!==void 0?c.minFilter:nn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Vr),c.mipmapCount===1&&(o.minFilter=nn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class Af extends mr{constructor(e){super(e)}load(e,t,n,i){const r=new hn,o=new CT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Df extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const zu=new rt,Zp=new H,Jp=new H;class Cf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gf,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zp),Jp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jp),t.updateMatrixWorld(),zu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class PT extends Cf{constructor(){super(new Ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Lo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class LT extends Df{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new PT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Qp=new rt,ta=new H,Hu=new H;class IT extends Cf{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ta.setFromMatrixPosition(e.matrixWorld),n.position.copy(ta),Hu.copy(n.position),Hu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Hu),n.updateMatrixWorld(),i.makeTranslation(-ta.x,-ta.y,-ta.z),Qp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qp)}}class FT extends Df{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new IT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class NT extends Cf{constructor(){super(new Wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class l_ extends Df{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new NT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ea{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class OT extends mr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ar.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ar.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ar.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ar.add(e,l),r.manager.itemStart(e)}}class UT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=em(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=em();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function em(){return(typeof performance>"u"?Date:performance).now()}const Rf="\\[\\]\\.:\\/",BT=new RegExp("["+Rf+"]","g"),Pf="[^"+Rf+"]",kT="[^"+Rf.replace("\\.","")+"]",zT=/((?:WC+[\/:])*)/.source.replace("WC",Pf),HT=/(WCOD+)?/.source.replace("WCOD",kT),VT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pf),GT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pf),WT=new RegExp("^"+zT+HT+VT+GT+"$"),XT=["material","materials","bones","map"];class jT{constructor(e,t,n){const i=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class gt{constructor(e,t,n){this.path=t,this.parsedPath=n||gt.parseTrackName(t),this.node=gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new gt.Composite(e,t,n):new gt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(BT,"")}static parseTrackName(e){const t=WT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);XT.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=gt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}gt.Composite=jT;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class yt{constructor(e){this.value=e}clone(){return new yt(this.value.clone===void 0?this.value:this.value.clone())}}class YT{constructor(e,t,n=0,i=1/0){this.ray=new Go(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new mf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ah(e,this,n,t),n.sort(tm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Ah(e[i],this,n,t);return n.sort(tm),n}}function tm(s,e){return s.distance-e.distance}function Ah(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Ah(i[r],e,t,!0)}}class nm{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class qT{constructor(){this.type="ShapePath",this.color=new $e,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Mh,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const S=[];for(let y=0,b=m.length;y<b;y++){const w=m[y],M=new rc;M.curves=w.curves,S.push(M)}return S}function n(m,S){const y=S.length;let b=!1;for(let w=y-1,M=0;M<y;w=M++){let T=S[w],E=S[M],x=E.x-T.x,v=E.y-T.y;if(Math.abs(v)>Number.EPSILON){if(v<0&&(T=S[M],x=-x,E=S[w],v=-v),m.y<T.y||m.y>E.y)continue;if(m.y===T.y){if(m.x===T.x)return!0}else{const D=v*(m.x-T.x)-x*(m.y-T.y);if(D===0)return!0;if(D<0)continue;b=!b}}else{if(m.y!==T.y)continue;if(E.x<=m.x&&m.x<=T.x||T.x<=m.x&&m.x<=E.x)return!0}}return b}const i=_o.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new rc,l.curves=a.curves,c.push(l),c;let u=!i(r[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],g=0,_;f[g]=void 0,d[g]=[];for(let m=0,S=r.length;m<S;m++)a=r[m],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new rc,p:_},f[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:_[0]});if(!f[0])return t(r);if(f.length>1){let m=!1,S=0;for(let y=0,b=f.length;y<b;y++)h[y]=[];for(let y=0,b=f.length;y<b;y++){const w=d[y];for(let M=0;M<w.length;M++){const T=w[M];let E=!0;for(let x=0;x<f.length;x++)n(T.p,f[x].p)&&(y!==x&&S++,E?(E=!1,h[x].push(T)):m=!0);E&&h[y].push(T)}}S>0&&m===!1&&(d=h)}let p;for(let m=0,S=f.length;m<S;m++){l=f[m].s,c.push(l),p=d[m];for(let y=0,b=p.length;y<b;y++)l.holes.push(p[y].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uf);const im={type:"change"},Vu={type:"start"},rm={type:"end"},kl=new Go,sm=new Mr,$T=Math.cos(70*pf.DEG2RAD);class KT extends Ls{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Os.ROTATE,MIDDLE:Os.DOLLY,RIGHT:Os.PAN},this.touches={ONE:Us.ROTATE,TWO:Us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(B){B.addEventListener("keydown",Pe),this._domElementKeyEvents=B},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(im),n.update(),r=i.NONE},this.update=function(){const B=new H,ge=new Gi().setFromUnitVectors(e.up,new H(0,1,0)),Fe=ge.clone().invert(),fe=new H,de=new Gi,V=new H,pe=2*Math.PI;return function(Ge=null){const ze=n.object.position;B.copy(ze).sub(n.target),B.applyQuaternion(ge),a.setFromVector3(B),n.autoRotate&&r===i.NONE&&R(v(Ge)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ke=n.minAzimuthAngle,tt=n.maxAzimuthAngle;isFinite(Ke)&&isFinite(tt)&&(Ke<-Math.PI?Ke+=pe:Ke>Math.PI&&(Ke-=pe),tt<-Math.PI?tt+=pe:tt>Math.PI&&(tt-=pe),Ke<=tt?a.theta=Math.max(Ke,Math.min(tt,a.theta)):a.theta=a.theta>(Ke+tt)/2?Math.max(Ke,a.theta):Math.min(tt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&M||n.object.isOrthographicCamera?a.radius=I(a.radius):a.radius=I(a.radius*c),B.setFromSpherical(a),B.applyQuaternion(Fe),ze.copy(n.target).add(B),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Le=!1;if(n.zoomToCursor&&M){let Ce=null;if(n.object.isPerspectiveCamera){const Ne=B.length();Ce=I(Ne*c);const ve=Ne-Ce;n.object.position.addScaledVector(b,ve),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ne=new H(w.x,w.y,0);Ne.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Le=!0;const ve=new H(w.x,w.y,0);ve.unproject(n.object),n.object.position.sub(ve).add(Ne),n.object.updateMatrixWorld(),Ce=B.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ce!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ce).add(n.object.position):(kl.origin.copy(n.object.position),kl.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(kl.direction))<$T?e.lookAt(n.target):(sm.setFromNormalAndCoplanarPoint(n.object.up,n.target),kl.intersectPlane(sm,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Le=!0);return c=1,M=!1,Le||fe.distanceToSquared(n.object.position)>o||8*(1-de.dot(n.object.quaternion))>o||V.distanceToSquared(n.target)>0?(n.dispatchEvent(im),fe.copy(n.object.position),de.copy(n.object.quaternion),V.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",nt),n.domElement.removeEventListener("pointerdown",P),n.domElement.removeEventListener("pointercancel",j),n.domElement.removeEventListener("wheel",ue),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",j),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Pe),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new nm,l=new nm;let c=1;const u=new H,h=new xe,f=new xe,d=new xe,g=new xe,_=new xe,p=new xe,m=new xe,S=new xe,y=new xe,b=new H,w=new xe;let M=!1;const T=[],E={};let x=!1;function v(B){return B!==null?2*Math.PI/60*n.autoRotateSpeed*B:2*Math.PI/60/60*n.autoRotateSpeed}function D(B){const ge=Math.abs(B*.01);return Math.pow(.95,n.zoomSpeed*ge)}function R(B){l.theta-=B}function q(B){l.phi-=B}const N=function(){const B=new H;return function(Fe,fe){B.setFromMatrixColumn(fe,0),B.multiplyScalar(-Fe),u.add(B)}}(),k=function(){const B=new H;return function(Fe,fe){n.screenSpacePanning===!0?B.setFromMatrixColumn(fe,1):(B.setFromMatrixColumn(fe,0),B.crossVectors(n.object.up,B)),B.multiplyScalar(Fe),u.add(B)}}(),U=function(){const B=new H;return function(Fe,fe){const de=n.domElement;if(n.object.isPerspectiveCamera){const V=n.object.position;B.copy(V).sub(n.target);let pe=B.length();pe*=Math.tan(n.object.fov/2*Math.PI/180),N(2*Fe*pe/de.clientHeight,n.object.matrix),k(2*fe*pe/de.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(Fe*(n.object.right-n.object.left)/n.object.zoom/de.clientWidth,n.object.matrix),k(fe*(n.object.top-n.object.bottom)/n.object.zoom/de.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(B){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(B){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(B,ge){if(!n.zoomToCursor)return;M=!0;const Fe=n.domElement.getBoundingClientRect(),fe=B-Fe.left,de=ge-Fe.top,V=Fe.width,pe=Fe.height;w.x=fe/V*2-1,w.y=-(de/pe)*2+1,b.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function I(B){return Math.max(n.minDistance,Math.min(n.maxDistance,B))}function se(B){h.set(B.clientX,B.clientY)}function le(B){Z(B.clientX,B.clientX),m.set(B.clientX,B.clientY)}function Q(B){g.set(B.clientX,B.clientY)}function oe(B){f.set(B.clientX,B.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ge=n.domElement;R(2*Math.PI*d.x/ge.clientHeight),q(2*Math.PI*d.y/ge.clientHeight),h.copy(f),n.update()}function _e(B){S.set(B.clientX,B.clientY),y.subVectors(S,m),y.y>0?G(D(y.y)):y.y<0&&K(D(y.y)),m.copy(S),n.update()}function Ae(B){_.set(B.clientX,B.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),U(p.x,p.y),g.copy(_),n.update()}function ye(B){Z(B.clientX,B.clientY),B.deltaY<0?K(D(B.deltaY)):B.deltaY>0&&G(D(B.deltaY)),n.update()}function re(B){let ge=!1;switch(B.code){case n.keys.UP:B.ctrlKey||B.metaKey||B.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),ge=!0;break;case n.keys.BOTTOM:B.ctrlKey||B.metaKey||B.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),ge=!0;break;case n.keys.LEFT:B.ctrlKey||B.metaKey||B.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),ge=!0;break;case n.keys.RIGHT:B.ctrlKey||B.metaKey||B.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),ge=!0;break}ge&&(B.preventDefault(),n.update())}function A(B){if(T.length===1)h.set(B.pageX,B.pageY);else{const ge=De(B),Fe=.5*(B.pageX+ge.x),fe=.5*(B.pageY+ge.y);h.set(Fe,fe)}}function O(B){if(T.length===1)g.set(B.pageX,B.pageY);else{const ge=De(B),Fe=.5*(B.pageX+ge.x),fe=.5*(B.pageY+ge.y);g.set(Fe,fe)}}function z(B){const ge=De(B),Fe=B.pageX-ge.x,fe=B.pageY-ge.y,de=Math.sqrt(Fe*Fe+fe*fe);m.set(0,de)}function L(B){n.enableZoom&&z(B),n.enablePan&&O(B)}function X(B){n.enableZoom&&z(B),n.enableRotate&&A(B)}function W(B){if(T.length==1)f.set(B.pageX,B.pageY);else{const Fe=De(B),fe=.5*(B.pageX+Fe.x),de=.5*(B.pageY+Fe.y);f.set(fe,de)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ge=n.domElement;R(2*Math.PI*d.x/ge.clientHeight),q(2*Math.PI*d.y/ge.clientHeight),h.copy(f)}function ie(B){if(T.length===1)_.set(B.pageX,B.pageY);else{const ge=De(B),Fe=.5*(B.pageX+ge.x),fe=.5*(B.pageY+ge.y);_.set(Fe,fe)}p.subVectors(_,g).multiplyScalar(n.panSpeed),U(p.x,p.y),g.copy(_)}function ee(B){const ge=De(B),Fe=B.pageX-ge.x,fe=B.pageY-ge.y,de=Math.sqrt(Fe*Fe+fe*fe);S.set(0,de),y.set(0,Math.pow(S.y/m.y,n.zoomSpeed)),G(y.y),m.copy(S);const V=(B.pageX+ge.x)*.5,pe=(B.pageY+ge.y)*.5;Z(V,pe)}function Y(B){n.enableZoom&&ee(B),n.enablePan&&ie(B)}function me(B){n.enableZoom&&ee(B),n.enableRotate&&W(B)}function P(B){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(B.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",j)),ke(B),B.pointerType==="touch"?Ve(B):ae(B))}function C(B){n.enabled!==!1&&(B.pointerType==="touch"?he(B):ce(B))}function j(B){qe(B),T.length===0&&(n.domElement.releasePointerCapture(B.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",j)),n.dispatchEvent(rm),r=i.NONE}function ae(B){let ge;switch(B.button){case 0:ge=n.mouseButtons.LEFT;break;case 1:ge=n.mouseButtons.MIDDLE;break;case 2:ge=n.mouseButtons.RIGHT;break;default:ge=-1}switch(ge){case Os.DOLLY:if(n.enableZoom===!1)return;le(B),r=i.DOLLY;break;case Os.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enablePan===!1)return;Q(B),r=i.PAN}else{if(n.enableRotate===!1)return;se(B),r=i.ROTATE}break;case Os.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enableRotate===!1)return;se(B),r=i.ROTATE}else{if(n.enablePan===!1)return;Q(B),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Vu)}function ce(B){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;oe(B);break;case i.DOLLY:if(n.enableZoom===!1)return;_e(B);break;case i.PAN:if(n.enablePan===!1)return;Ae(B);break}}function ue(B){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(B.preventDefault(),n.dispatchEvent(Vu),ye(Te(B)),n.dispatchEvent(rm))}function Te(B){const ge=B.deltaMode,Fe={clientX:B.clientX,clientY:B.clientY,deltaY:B.deltaY};switch(ge){case 1:Fe.deltaY*=16;break;case 2:Fe.deltaY*=100;break}return B.ctrlKey&&!x&&(Fe.deltaY*=10),Fe}function Ee(B){B.key==="Control"&&(x=!0,document.addEventListener("keyup",Se,{passive:!0,capture:!0}))}function Se(B){B.key==="Control"&&(x=!1,document.removeEventListener("keyup",Se,{passive:!0,capture:!0}))}function Pe(B){n.enabled===!1||n.enablePan===!1||re(B)}function Ve(B){switch(Oe(B),T.length){case 1:switch(n.touches.ONE){case Us.ROTATE:if(n.enableRotate===!1)return;A(B),r=i.TOUCH_ROTATE;break;case Us.PAN:if(n.enablePan===!1)return;O(B),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Us.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;L(B),r=i.TOUCH_DOLLY_PAN;break;case Us.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;X(B),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Vu)}function he(B){switch(Oe(B),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;W(B),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ie(B),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Y(B),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(B),n.update();break;default:r=i.NONE}}function nt(B){n.enabled!==!1&&B.preventDefault()}function ke(B){T.push(B.pointerId)}function qe(B){delete E[B.pointerId];for(let ge=0;ge<T.length;ge++)if(T[ge]==B.pointerId){T.splice(ge,1);return}}function Oe(B){let ge=E[B.pointerId];ge===void 0&&(ge=new xe,E[B.pointerId]=ge),ge.set(B.pageX,B.pageY)}function De(B){const ge=B.pointerId===T[0]?T[1]:T[0];return E[ge]}n.domElement.addEventListener("contextmenu",nt),n.domElement.addEventListener("pointerdown",P),n.domElement.addEventListener("pointercancel",j),n.domElement.addEventListener("wheel",ue,{passive:!1}),document.addEventListener("keydown",Ee,{passive:!0,capture:!0}),this.update()}}class ZT extends RT{constructor(e){super(e),this.type=ar}parse(e){const o=function(E,x){switch(E){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(x||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(x||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(x||""))}},u=`
`,h=function(E,x,v){x=x||1024;let R=E.pos,q=-1,N=0,k="",U=String.fromCharCode.apply(null,new Uint16Array(E.subarray(R,R+128)));for(;0>(q=U.indexOf(u))&&N<x&&R<E.byteLength;)k+=U,N+=U.length,R+=128,U+=String.fromCharCode.apply(null,new Uint16Array(E.subarray(R,R+128)));return-1<q?(v!==!1&&(E.pos+=N+q+1),k+U.slice(0,q)):!1},f=function(E){const x=/^#\?(\S+)/,v=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*FORMAT=(\S+)\s*$/,q=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,N={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let k,U;for((E.pos>=E.byteLength||!(k=h(E)))&&o(1,"no header found"),(U=k.match(x))||o(3,"bad initial token"),N.valid|=1,N.programtype=U[1],N.string+=k+`
`;k=h(E),k!==!1;){if(N.string+=k+`
`,k.charAt(0)==="#"){N.comments+=k+`
`;continue}if((U=k.match(v))&&(N.gamma=parseFloat(U[1])),(U=k.match(D))&&(N.exposure=parseFloat(U[1])),(U=k.match(R))&&(N.valid|=2,N.format=U[1]),(U=k.match(q))&&(N.valid|=4,N.height=parseInt(U[1],10),N.width=parseInt(U[2],10)),N.valid&2&&N.valid&4)break}return N.valid&2||o(3,"missing format specifier"),N.valid&4||o(3,"missing image size specifier"),N},d=function(E,x,v){const D=x;if(D<8||D>32767||E[0]!==2||E[1]!==2||E[2]&128)return new Uint8Array(E);D!==(E[2]<<8|E[3])&&o(3,"wrong scanline width");const R=new Uint8Array(4*x*v);R.length||o(4,"unable to allocate buffer space");let q=0,N=0;const k=4*D,U=new Uint8Array(4),G=new Uint8Array(k);let K=v;for(;K>0&&N<E.byteLength;){N+4>E.byteLength&&o(1),U[0]=E[N++],U[1]=E[N++],U[2]=E[N++],U[3]=E[N++],(U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=D)&&o(3,"bad rgbe scanline format");let Z=0,I;for(;Z<k&&N<E.byteLength;){I=E[N++];const le=I>128;if(le&&(I-=128),(I===0||Z+I>k)&&o(3,"bad scanline data"),le){const Q=E[N++];for(let oe=0;oe<I;oe++)G[Z++]=Q}else G.set(E.subarray(N,N+I),Z),Z+=I,N+=I}const se=D;for(let le=0;le<se;le++){let Q=0;R[q]=G[le+Q],Q+=D,R[q+1]=G[le+Q],Q+=D,R[q+2]=G[le+Q],Q+=D,R[q+3]=G[le+Q],q+=4}K--}return R},g=function(E,x,v,D){const R=E[x+3],q=Math.pow(2,R-128)/255;v[D+0]=E[x+0]*q,v[D+1]=E[x+1]*q,v[D+2]=E[x+2]*q,v[D+3]=1},_=function(E,x,v,D){const R=E[x+3],q=Math.pow(2,R-128)/255;v[D+0]=_l.toHalfFloat(Math.min(E[x+0]*q,65504)),v[D+1]=_l.toHalfFloat(Math.min(E[x+1]*q,65504)),v[D+2]=_l.toHalfFloat(Math.min(E[x+2]*q,65504)),v[D+3]=_l.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const m=f(p),S=m.width,y=m.height,b=d(p.subarray(p.pos),S,y);let w,M,T;switch(this.type){case mi:T=b.length/4;const E=new Float32Array(T*4);for(let v=0;v<T;v++)g(b,v*4,E,v*4);w=E,M=mi;break;case ar:T=b.length/4;const x=new Uint16Array(T*4);for(let v=0;v<T;v++)_(b,v*4,x,v*4);w=x,M=ar;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:S,height:y,data:w,header:m.string,gamma:m.gamma,exposure:m.exposure,type:M}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case mi:case ar:o.colorSpace=Zt,o.minFilter=nn,o.magFilter=nn,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}}function JT(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let o=0;const a=Object.keys(s.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let S=0,y=a.length;S<y;S++){const b=a[S],w=s.attributes[b];l[b]=new Wt(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);const M=s.morphAttributes[b];M&&(c[b]=new Wt(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized))}const d=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),p=d*_;for(let S=0;S<r;S++){const y=n?n.getX(S):S;let b="";for(let w=0,M=a.length;w<M;w++){const T=a[w],E=s.getAttribute(T),x=E.itemSize;for(let v=0;v<x;v++)b+=`${~~(E[h[v]](y)*_+p)},`}if(b in t)u.push(t[b]);else{for(let w=0,M=a.length;w<M;w++){const T=a[w],E=s.getAttribute(T),x=s.morphAttributes[T],v=E.itemSize,D=l[T],R=c[T];for(let q=0;q<v;q++){const N=h[q],k=f[q];if(D[k](o,E[N](y)),x)for(let U=0,G=x.length;U<G;U++)R[U][k](o,x[U][N](y))}}t[b]=o,u.push(o),o++}}const m=s.clone();for(const S in s.attributes){const y=l[S];if(m.setAttribute(S,new Wt(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),S in c)for(let b=0;b<c[S].length;b++){const w=c[S][b];m.morphAttributes[S][b]=new Wt(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)}}return m.setIndex(u),m}function om(s,e){if(e===Jv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===gh||e===Mg){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===gh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class QT extends mr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new rw(t)}),this.register(function(t){return new dw(t)}),this.register(function(t){return new pw(t)}),this.register(function(t){return new mw(t)}),this.register(function(t){return new ow(t)}),this.register(function(t){return new aw(t)}),this.register(function(t){return new lw(t)}),this.register(function(t){return new cw(t)}),this.register(function(t){return new iw(t)}),this.register(function(t){return new uw(t)}),this.register(function(t){return new sw(t)}),this.register(function(t){return new fw(t)}),this.register(function(t){return new hw(t)}),this.register(function(t){return new tw(t)}),this.register(function(t){return new gw(t)}),this.register(function(t){return new _w(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ea.extractUrlBase(e);o=Ea.resolveURL(c,this.path)}else o=Ea.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Oo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===c_){try{o[ut.KHR_BINARY_GLTF]=new vw(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Pw(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ut.KHR_MATERIALS_UNLIT:o[h]=new nw;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[h]=new xw(r,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[h]=new yw;break;case ut.KHR_MESH_QUANTIZATION:o[h]=new Sw;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function ew(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class tw{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new $e(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Zt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new l_(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new FT(u),c.distance=h;break;case"spot":c=new LT(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Tr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class nw{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return gi}extendParams(e,t,n){const i=[];e.color=new $e(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(i)}}class iw{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class rw{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(a,a)}return Promise.all(r)}}class sw{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class ow{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Lt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class aw{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class lw{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(a[0],a[1],a[2],Zt),Promise.all(r)}}class cw{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class uw{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(a[0],a[1],a[2],Zt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Lt)),Promise.all(r)}}class hw{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class fw{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class dw{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class pw{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class mw{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class gw{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class _w{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ci.TRIANGLES&&c.mode!==ci.TRIANGLE_STRIP&&c.mode!==ci.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new rt,p=new H,m=new Gi,S=new H(1,1,1),y=new NM(g.geometry,g.material,f);for(let b=0;b<f;b++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,b),l.SCALE&&S.fromBufferAttribute(l.SCALE,b),y.setMatrixAt(b,_.compose(p,m,S));for(const b in l)if(b==="_COLOR_0"){const w=l[b];y.instanceColor=new Sh(w.array,w.itemSize,w.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);Rt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const c_="glTF",na=12,am={JSON:1313821514,BIN:5130562};class vw{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,na),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==c_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-na,r=new DataView(e,na);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===am.JSON){const c=new Uint8Array(e,na+o,a);this.content=n.decode(c)}else if(l===am.BIN){const c=na+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class xw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Dh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Dh[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=vo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}h(d)},a,c,Zt,f)})})}}class yw{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Sw{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}}class u_ extends el{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,p=-2*d+3*f,m=d-f,S=1-p,y=m-f+h;for(let b=0;b!==a;b++){const w=o[_+b+a],M=o[_+b+l]*u,T=o[g+b+a],E=o[g+b]*u;r[b]=S*w+y*M+p*T+m*E}return r}}const bw=new Gi;class Ew extends u_{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return bw.fromArray(r).normalize().toArray(r),r}}const ci={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},vo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lm={9728:cn,9729:nn,9984:mh,9985:gg,9986:nc,9987:Vr},cm={33071:zn,33648:xc,10497:Co},Gu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Dh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Sr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Mw={CUBICSPLINE:void 0,LINEAR:Po,STEP:Ua},Wu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Tw(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new wf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hr})),s.DefaultMaterial}function ns(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Tr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ww(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Aw(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Dw(s){let e;const t=s.extensions&&s.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xu(t.attributes):e=s.indices+":"+Xu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Xu(s.targets[n]);return e}function Xu(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ch(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Cw(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Rw=new rt;class Pw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ew,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Af(this.options.manager):this.textureLoader=new OT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Oo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ns(r,a,i),Tr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Ea.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Gu[i.type],a=vo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Wt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Gu[i.type],c=vo[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(d&&d!==h){const m=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let y=t.cache.get(S);y||(_=new c(a,m*d,i.count*d/u),y=new RM(_,d/u),t.cache.add(S,y)),p=new vf(y,l,f%d/u,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),p=new Wt(_,l,g);if(i.sparse!==void 0){const m=Gu.SCALAR,S=vo[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,w=new S(o[1],y,i.sparse.count*m),M=new c(o[2],b,i.sparse.count*l);a!==null&&(p=new Wt(p.array.slice(),p.itemSize,p.normalized));for(let T=0,E=w.length;T<E;T++){const x=w[T];if(p.setX(x,M[T*l]),l>=2&&p.setY(x,M[T*l+1]),l>=3&&p.setZ(x,M[T*l+2]),l>=4&&p.setW(x,M[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=lm[f.magFilter]||nn,u.minFilter=lm[f.minFilter]||Vr,u.wrapS=cm[f.wrapS]||Co,u.wrapT=cm[f.wrapT]||Co,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const p=new hn(_);p.needsUpdate=!0,f(p)}),t.load(Ea.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||Cw(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ut.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Jg,Ri.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Zg,Ri.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return wf}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){const h=i[ut.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new $e(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Zt),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Lt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=fi);const u=r.alphaMode||Wu.OPAQUE;if(u===Wu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Wu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==gi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new xe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==gi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==gi){const h=r.emissiveFactor;a.emissive=new $e().setRGB(h[0],h[1],h[2],Zt)}return r.emissiveTexture!==void 0&&o!==gi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Tr(h,r),t.associations.set(h,{materials:e}),r.extensions&&ns(i,h,r),h})}createUniqueName(e){const t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return um(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Dw(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=um(new si,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Tw(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],p=o[d];let m;const S=c[d];if(p.mode===ci.TRIANGLES||p.mode===ci.TRIANGLE_STRIP||p.mode===ci.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new LM(_,S):new dn(_,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===ci.TRIANGLE_STRIP?m.geometry=om(m.geometry,Mg):p.mode===ci.TRIANGLE_FAN&&(m.geometry=om(m.geometry,gh));else if(p.mode===ci.LINES)m=new OM(_,S);else if(p.mode===ci.LINE_STRIP)m=new yf(_,S);else if(p.mode===ci.LINE_LOOP)m=new UM(_,S);else if(p.mode===ci.POINTS)m=new BM(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Aw(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Tr(m,r),p.extensions&&ns(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&ns(i,h[0],r),h[0];const f=new _i;r.extensions&&ns(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ln(pf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Wc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Tr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new rt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xf(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],_=d.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let S=0,y=f.length;S<y;S++){const b=f[S],w=d[S],M=g[S],T=_[S],E=p[S];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const x=n._createAnimationTracks(b,w,M,T,E);if(x)for(let v=0;v<x.length;v++)m.push(x[v])}return new ET(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Rw)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new $g:c.length>1?u=new _i:c.length===1?u=c[0]:u=new Rt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Tr(u,r),r.extensions&&ns(n,u,r),r.matrix!==void 0){const h=new rt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new _i;n.name&&(r.name=i.createUniqueName(n.name)),Tr(r,n),n.extensions&&ns(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Ri||f instanceof hn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Sr[r.path]===Sr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Sr[r.path]){case Sr.weights:c=Fo;break;case Sr.rotation:c=Ms;break;case Sr.position:case Sr.scale:c=No;break;default:switch(n.itemSize){case 1:c=Fo;break;case 2:case 3:default:c=No;break}break}const u=i.interpolation!==void 0?Mw[i.interpolation]:Po,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Sr[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ch(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ms?Ew:u_;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Lw(s,e,t){const n=e.attributes,i=new pr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){const u=Ch(vo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new H,l=new H;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=Ch(vo[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ji;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function um(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Dh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return dt.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),Tr(s,e),Lw(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ww(s,e.targets,t):s})}const ju=new WeakMap;class Iw extends mr{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Oo(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Lt).catch(n)}decodeDracoFile(e,t,n,i,r=Zt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(ju.has(e)){const l=ju.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),ju.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new si;e.index&&t.setIndex(new Wt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new Wt(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Lt)return;const n=new $e;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Oo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=Fw.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Fw(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),g=d.attributes.map(_=>_.array.buffer);d.index&&g.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},g)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(g===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const _={index:null,attributes:[]};for(const p in u){const m=self[h[p]];let S,y;if(c.useUniqueIDs)y=u[p],S=a.GetAttributeByUniqueId(f,y);else{if(y=a.GetAttributeId(f,o[u[p]]),y===-1)continue;S=a.GetAttribute(f,y)}const b=i(o,a,f,p,m,S);p==="color"&&(b.vertexColorSpace=c.vertexColorSpace),_.attributes.push(b)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,f)),o.destroy(f),_}function n(o,a,l){const u=l.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,l,c,u,h){const f=h.num_components(),g=l.num_points()*f,_=g*u.BYTES_PER_ELEMENT,p=r(o,u),m=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,h,p,_,m);const S=new u(o.HEAPF32.buffer,m,g).slice();return o._free(m),{name:c,array:S,itemSize:f}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function Yc(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function zl(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var h_={exports:{}};(function(s,e){(function(t){s.exports=t()})(function(){return function t(n,i,r){function o(c,u){if(!i[c]){if(!n[c]){var h=typeof zl=="function"&&zl;if(!u&&h)return h(c,!0);if(a)return a(c,!0);throw new Error("Cannot find module '"+c+"'")}u=i[c]={exports:{}},n[c][0].call(u.exports,function(f){var d=n[c][1][f];return o(d||f)},u,u.exports,t,n,i,r)}return i[c].exports}for(var a=typeof zl=="function"&&zl,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(t,n,i){(function(r,o,a,l,c,u,h,f,d){var g=t("crypto");function _(M,T){T=S(M,T);var E;return(E=T.algorithm!=="passthrough"?g.createHash(T.algorithm):new w).write===void 0&&(E.write=E.update,E.end=E.update),b(T,E).dispatch(M),E.update||E.end(""),E.digest?E.digest(T.encoding==="buffer"?void 0:T.encoding):(M=E.read(),T.encoding!=="buffer"?M.toString(T.encoding):M)}(i=n.exports=_).sha1=function(M){return _(M)},i.keys=function(M){return _(M,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},i.MD5=function(M){return _(M,{algorithm:"md5",encoding:"hex"})},i.keysMD5=function(M){return _(M,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var p=g.getHashes?g.getHashes().slice():["sha1","md5"],m=(p.push("passthrough"),["buffer","hex","binary","base64"]);function S(M,T){var E={};if(E.algorithm=(T=T||{}).algorithm||"sha1",E.encoding=T.encoding||"hex",E.excludeValues=!!T.excludeValues,E.algorithm=E.algorithm.toLowerCase(),E.encoding=E.encoding.toLowerCase(),E.ignoreUnknown=T.ignoreUnknown===!0,E.respectType=T.respectType!==!1,E.respectFunctionNames=T.respectFunctionNames!==!1,E.respectFunctionProperties=T.respectFunctionProperties!==!1,E.unorderedArrays=T.unorderedArrays===!0,E.unorderedSets=T.unorderedSets!==!1,E.unorderedObjects=T.unorderedObjects!==!1,E.replacer=T.replacer||void 0,E.excludeKeys=T.excludeKeys||void 0,M===void 0)throw new Error("Object argument required.");for(var x=0;x<p.length;++x)p[x].toLowerCase()===E.algorithm.toLowerCase()&&(E.algorithm=p[x]);if(p.indexOf(E.algorithm)===-1)throw new Error('Algorithm "'+E.algorithm+'"  not supported. supported values: '+p.join(", "));if(m.indexOf(E.encoding)===-1&&E.algorithm!=="passthrough")throw new Error('Encoding "'+E.encoding+'"  not supported. supported values: '+m.join(", "));return E}function y(M){if(typeof M=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(M))!=null}function b(M,T,E){E=E||[];function x(v){return T.update?T.update(v,"utf8"):T.write(v,"utf8")}return{dispatch:function(v){return this["_"+((v=M.replacer?M.replacer(v):v)===null?"null":typeof v)](v)},_object:function(v){var D,R=Object.prototype.toString.call(v),q=/\[object (.*)\]/i.exec(R);if(q=(q=q?q[1]:"unknown:["+R+"]").toLowerCase(),0<=(R=E.indexOf(v)))return this.dispatch("[CIRCULAR:"+R+"]");if(E.push(v),a!==void 0&&a.isBuffer&&a.isBuffer(v))return x("buffer:"),x(v);if(q==="object"||q==="function"||q==="asyncfunction")return R=Object.keys(v),M.unorderedObjects&&(R=R.sort()),M.respectType===!1||y(v)||R.splice(0,0,"prototype","__proto__","constructor"),M.excludeKeys&&(R=R.filter(function(N){return!M.excludeKeys(N)})),x("object:"+R.length+":"),D=this,R.forEach(function(N){D.dispatch(N),x(":"),M.excludeValues||D.dispatch(v[N]),x(",")});if(!this["_"+q]){if(M.ignoreUnknown)return x("["+q+"]");throw new Error('Unknown object type "'+q+'"')}this["_"+q](v)},_array:function(v,N){N=N!==void 0?N:M.unorderedArrays!==!1;var R=this;if(x("array:"+v.length+":"),!N||v.length<=1)return v.forEach(function(k){return R.dispatch(k)});var q=[],N=v.map(function(k){var U=new w,G=E.slice();return b(M,U,G).dispatch(k),q=q.concat(G.slice(E.length)),U.read().toString()});return E=E.concat(q),N.sort(),this._array(N,!1)},_date:function(v){return x("date:"+v.toJSON())},_symbol:function(v){return x("symbol:"+v.toString())},_error:function(v){return x("error:"+v.toString())},_boolean:function(v){return x("bool:"+v.toString())},_string:function(v){x("string:"+v.length+":"),x(v.toString())},_function:function(v){x("fn:"),y(v)?this.dispatch("[native]"):this.dispatch(v.toString()),M.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(v.name)),M.respectFunctionProperties&&this._object(v)},_number:function(v){return x("number:"+v.toString())},_xml:function(v){return x("xml:"+v.toString())},_null:function(){return x("Null")},_undefined:function(){return x("Undefined")},_regexp:function(v){return x("regex:"+v.toString())},_uint8array:function(v){return x("uint8array:"),this.dispatch(Array.prototype.slice.call(v))},_uint8clampedarray:function(v){return x("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(v))},_int8array:function(v){return x("int8array:"),this.dispatch(Array.prototype.slice.call(v))},_uint16array:function(v){return x("uint16array:"),this.dispatch(Array.prototype.slice.call(v))},_int16array:function(v){return x("int16array:"),this.dispatch(Array.prototype.slice.call(v))},_uint32array:function(v){return x("uint32array:"),this.dispatch(Array.prototype.slice.call(v))},_int32array:function(v){return x("int32array:"),this.dispatch(Array.prototype.slice.call(v))},_float32array:function(v){return x("float32array:"),this.dispatch(Array.prototype.slice.call(v))},_float64array:function(v){return x("float64array:"),this.dispatch(Array.prototype.slice.call(v))},_arraybuffer:function(v){return x("arraybuffer:"),this.dispatch(new Uint8Array(v))},_url:function(v){return x("url:"+v.toString())},_map:function(v){return x("map:"),v=Array.from(v),this._array(v,M.unorderedSets!==!1)},_set:function(v){return x("set:"),v=Array.from(v),this._array(v,M.unorderedSets!==!1)},_file:function(v){return x("file:"),this.dispatch([v.name,v.size,v.type,v.lastModfied])},_blob:function(){if(M.ignoreUnknown)return x("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return x("domwindow")},_bigint:function(v){return x("bigint:"+v.toString())},_process:function(){return x("process")},_timer:function(){return x("timer")},_pipe:function(){return x("pipe")},_tcp:function(){return x("tcp")},_udp:function(){return x("udp")},_tty:function(){return x("tty")},_statwatcher:function(){return x("statwatcher")},_securecontext:function(){return x("securecontext")},_connection:function(){return x("connection")},_zlib:function(){return x("zlib")},_context:function(){return x("context")},_nodescript:function(){return x("nodescript")},_httpparser:function(){return x("httpparser")},_dataview:function(){return x("dataview")},_signal:function(){return x("signal")},_fsevent:function(){return x("fsevent")},_tlswrap:function(){return x("tlswrap")}}}function w(){return{buf:"",write:function(M){this.buf+=M},end:function(M){this.buf+=M},read:function(){return this.buf}}}i.writeToStream=function(M,T,E){return E===void 0&&(E=T,T={}),b(T=S(M,T),E).dispatch(M)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(t,n,i){(function(r,o,a,l,c,u,h,f,d){(function(g){var _=typeof Uint8Array<"u"?Uint8Array:Array,p=43,m=47,S=48,y=97,b=65,w=45,M=95;function T(E){return E=E.charCodeAt(0),E===p||E===w?62:E===m||E===M?63:E<S?-1:E<S+10?E-S+26+26:E<b+26?E-b:E<y+26?E-y+26:void 0}g.toByteArray=function(E){var x,v;if(0<E.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var D=E.length,D=E.charAt(D-2)==="="?2:E.charAt(D-1)==="="?1:0,R=new _(3*E.length/4-D),q=0<D?E.length-4:E.length,N=0;function k(U){R[N++]=U}for(x=0;x<q;x+=4,0)k((16711680&(v=T(E.charAt(x))<<18|T(E.charAt(x+1))<<12|T(E.charAt(x+2))<<6|T(E.charAt(x+3))))>>16),k((65280&v)>>8),k(255&v);return D==2?k(255&(v=T(E.charAt(x))<<2|T(E.charAt(x+1))>>4)):D==1&&(k((v=T(E.charAt(x))<<10|T(E.charAt(x+1))<<4|T(E.charAt(x+2))>>2)>>8&255),k(255&v)),R},g.fromByteArray=function(E){var x,v,D,R,q=E.length%3,N="";function k(U){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(U)}for(x=0,D=E.length-q;x<D;x+=3)v=(E[x]<<16)+(E[x+1]<<8)+E[x+2],N+=k((R=v)>>18&63)+k(R>>12&63)+k(R>>6&63)+k(63&R);switch(q){case 1:N=(N+=k((v=E[E.length-1])>>2))+k(v<<4&63)+"==";break;case 2:N=(N=(N+=k((v=(E[E.length-2]<<8)+E[E.length-1])>>10))+k(v>>4&63))+k(v<<2&63)+"="}return N}})(i===void 0?this.base64js={}:i)}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(t,n,i){(function(r,o,p,l,c,u,h,f,d){var g=t("base64-js"),_=t("ieee754");function p(A,O,z){if(!(this instanceof p))return new p(A,O,z);var L,X,W,ie,ee=typeof A;if(O==="base64"&&ee=="string")for(A=(ie=A).trim?ie.trim():ie.replace(/^\s+|\s+$/g,"");A.length%4!=0;)A+="=";if(ee=="number")L=K(A);else if(ee=="string")L=p.byteLength(A,O);else{if(ee!="object")throw new Error("First argument needs to be a number, array or string.");L=K(A.length)}if(p._useTypedArrays?X=p._augment(new Uint8Array(L)):((X=this).length=L,X._isBuffer=!0),p._useTypedArrays&&typeof A.byteLength=="number")X._set(A);else if(Z(ie=A)||p.isBuffer(ie)||ie&&typeof ie=="object"&&typeof ie.length=="number")for(W=0;W<L;W++)p.isBuffer(A)?X[W]=A.readUInt8(W):X[W]=A[W];else if(ee=="string")X.write(A,0,O);else if(ee=="number"&&!p._useTypedArrays&&!z)for(W=0;W<L;W++)X[W]=0;return X}function m(A,O,z,L){return p._charsWritten=Q(function(X){for(var W=[],ie=0;ie<X.length;ie++)W.push(255&X.charCodeAt(ie));return W}(O),A,z,L)}function S(A,O,z,L){return p._charsWritten=Q(function(X){for(var W,ie,ee=[],Y=0;Y<X.length;Y++)ie=X.charCodeAt(Y),W=ie>>8,ie=ie%256,ee.push(ie),ee.push(W);return ee}(O),A,z,L)}function y(A,O,z){var L="";z=Math.min(A.length,z);for(var X=O;X<z;X++)L+=String.fromCharCode(A[X]);return L}function b(A,O,z,W){W||(re(typeof z=="boolean","missing or invalid endian"),re(O!=null,"missing offset"),re(O+1<A.length,"Trying to read beyond buffer length"));var X,W=A.length;if(!(W<=O))return z?(X=A[O],O+1<W&&(X|=A[O+1]<<8)):(X=A[O]<<8,O+1<W&&(X|=A[O+1])),X}function w(A,O,z,W){W||(re(typeof z=="boolean","missing or invalid endian"),re(O!=null,"missing offset"),re(O+3<A.length,"Trying to read beyond buffer length"));var X,W=A.length;if(!(W<=O))return z?(O+2<W&&(X=A[O+2]<<16),O+1<W&&(X|=A[O+1]<<8),X|=A[O],O+3<W&&(X+=A[O+3]<<24>>>0)):(O+1<W&&(X=A[O+1]<<16),O+2<W&&(X|=A[O+2]<<8),O+3<W&&(X|=A[O+3]),X+=A[O]<<24>>>0),X}function M(A,O,z,L){if(L||(re(typeof z=="boolean","missing or invalid endian"),re(O!=null,"missing offset"),re(O+1<A.length,"Trying to read beyond buffer length")),!(A.length<=O))return L=b(A,O,z,!0),32768&L?-1*(65535-L+1):L}function T(A,O,z,L){if(L||(re(typeof z=="boolean","missing or invalid endian"),re(O!=null,"missing offset"),re(O+3<A.length,"Trying to read beyond buffer length")),!(A.length<=O))return L=w(A,O,z,!0),2147483648&L?-1*(4294967295-L+1):L}function E(A,O,z,L){return L||(re(typeof z=="boolean","missing or invalid endian"),re(O+3<A.length,"Trying to read beyond buffer length")),_.read(A,O,z,23,4)}function x(A,O,z,L){return L||(re(typeof z=="boolean","missing or invalid endian"),re(O+7<A.length,"Trying to read beyond buffer length")),_.read(A,O,z,52,8)}function v(A,O,z,L,X){if(X||(re(O!=null,"missing value"),re(typeof L=="boolean","missing or invalid endian"),re(z!=null,"missing offset"),re(z+1<A.length,"trying to write beyond buffer length"),_e(O,65535)),X=A.length,!(X<=z))for(var W=0,ie=Math.min(X-z,2);W<ie;W++)A[z+W]=(O&255<<8*(L?W:1-W))>>>8*(L?W:1-W)}function D(A,O,z,L,X){if(X||(re(O!=null,"missing value"),re(typeof L=="boolean","missing or invalid endian"),re(z!=null,"missing offset"),re(z+3<A.length,"trying to write beyond buffer length"),_e(O,4294967295)),X=A.length,!(X<=z))for(var W=0,ie=Math.min(X-z,4);W<ie;W++)A[z+W]=O>>>8*(L?W:3-W)&255}function R(A,O,z,L,X){X||(re(O!=null,"missing value"),re(typeof L=="boolean","missing or invalid endian"),re(z!=null,"missing offset"),re(z+1<A.length,"Trying to write beyond buffer length"),Ae(O,32767,-32768)),A.length<=z||v(A,0<=O?O:65535+O+1,z,L,X)}function q(A,O,z,L,X){X||(re(O!=null,"missing value"),re(typeof L=="boolean","missing or invalid endian"),re(z!=null,"missing offset"),re(z+3<A.length,"Trying to write beyond buffer length"),Ae(O,2147483647,-2147483648)),A.length<=z||D(A,0<=O?O:4294967295+O+1,z,L,X)}function N(A,O,z,L,X){X||(re(O!=null,"missing value"),re(typeof L=="boolean","missing or invalid endian"),re(z!=null,"missing offset"),re(z+3<A.length,"Trying to write beyond buffer length"),ye(O,34028234663852886e22,-34028234663852886e22)),A.length<=z||_.write(A,O,z,L,23,4)}function k(A,O,z,L,X){X||(re(O!=null,"missing value"),re(typeof L=="boolean","missing or invalid endian"),re(z!=null,"missing offset"),re(z+7<A.length,"Trying to write beyond buffer length"),ye(O,17976931348623157e292,-17976931348623157e292)),A.length<=z||_.write(A,O,z,L,52,8)}i.Buffer=p,i.SlowBuffer=p,i.INSPECT_MAX_BYTES=50,p.poolSize=8192,p._useTypedArrays=function(){try{var A=new ArrayBuffer(0),O=new Uint8Array(A);return O.foo=function(){return 42},O.foo()===42&&typeof O.subarray=="function"}catch{return!1}}(),p.isEncoding=function(A){switch(String(A).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},p.isBuffer=function(A){return!(A==null||!A._isBuffer)},p.byteLength=function(A,O){var z;switch(A+="",O||"utf8"){case"hex":z=A.length/2;break;case"utf8":case"utf-8":z=se(A).length;break;case"ascii":case"binary":case"raw":z=A.length;break;case"base64":z=le(A).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":z=2*A.length;break;default:throw new Error("Unknown encoding")}return z},p.concat=function(A,O){if(re(Z(A),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),A.length===0)return new p(0);if(A.length===1)return A[0];if(typeof O!="number")for(X=O=0;X<A.length;X++)O+=A[X].length;for(var z=new p(O),L=0,X=0;X<A.length;X++){var W=A[X];W.copy(z,L),L+=W.length}return z},p.prototype.write=function(A,O,z,L){isFinite(O)?isFinite(z)||(L=z,z=void 0):(Y=L,L=O,O=z,z=Y),O=Number(O)||0;var X,W,ie,ee,Y=this.length-O;switch((!z||Y<(z=Number(z)))&&(z=Y),L=String(L||"utf8").toLowerCase()){case"hex":X=function(me,P,C,j){C=Number(C)||0;var ae=me.length-C;(!j||ae<(j=Number(j)))&&(j=ae),re((ae=P.length)%2==0,"Invalid hex string"),ae/2<j&&(j=ae/2);for(var ce=0;ce<j;ce++){var ue=parseInt(P.substr(2*ce,2),16);re(!isNaN(ue),"Invalid hex string"),me[C+ce]=ue}return p._charsWritten=2*ce,ce}(this,A,O,z);break;case"utf8":case"utf-8":W=this,ie=O,ee=z,X=p._charsWritten=Q(se(A),W,ie,ee);break;case"ascii":case"binary":X=m(this,A,O,z);break;case"base64":W=this,ie=O,ee=z,X=p._charsWritten=Q(le(A),W,ie,ee);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":X=S(this,A,O,z);break;default:throw new Error("Unknown encoding")}return X},p.prototype.toString=function(A,O,z){var L,X,W,ie,ee=this;if(A=String(A||"utf8").toLowerCase(),O=Number(O)||0,(z=z!==void 0?Number(z):ee.length)===O)return"";switch(A){case"hex":L=function(Y,me,P){var C=Y.length;(!me||me<0)&&(me=0),(!P||P<0||C<P)&&(P=C);for(var j="",ae=me;ae<P;ae++)j+=I(Y[ae]);return j}(ee,O,z);break;case"utf8":case"utf-8":L=function(Y,me,P){var C="",j="";P=Math.min(Y.length,P);for(var ae=me;ae<P;ae++)Y[ae]<=127?(C+=oe(j)+String.fromCharCode(Y[ae]),j=""):j+="%"+Y[ae].toString(16);return C+oe(j)}(ee,O,z);break;case"ascii":case"binary":L=y(ee,O,z);break;case"base64":X=ee,ie=z,L=(W=O)===0&&ie===X.length?g.fromByteArray(X):g.fromByteArray(X.slice(W,ie));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":L=function(Y,me,P){for(var C=Y.slice(me,P),j="",ae=0;ae<C.length;ae+=2)j+=String.fromCharCode(C[ae]+256*C[ae+1]);return j}(ee,O,z);break;default:throw new Error("Unknown encoding")}return L},p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},p.prototype.copy=function(A,O,z,L){if(O=O||0,(L=L||L===0?L:this.length)!==(z=z||0)&&A.length!==0&&this.length!==0){re(z<=L,"sourceEnd < sourceStart"),re(0<=O&&O<A.length,"targetStart out of bounds"),re(0<=z&&z<this.length,"sourceStart out of bounds"),re(0<=L&&L<=this.length,"sourceEnd out of bounds"),L>this.length&&(L=this.length);var X=(L=A.length-O<L-z?A.length-O+z:L)-z;if(X<100||!p._useTypedArrays)for(var W=0;W<X;W++)A[W+O]=this[W+z];else A._set(this.subarray(z,z+X),O)}},p.prototype.slice=function(A,O){var z=this.length;if(A=G(A,z,0),O=G(O,z,z),p._useTypedArrays)return p._augment(this.subarray(A,O));for(var L=O-A,X=new p(L,void 0,!0),W=0;W<L;W++)X[W]=this[W+A];return X},p.prototype.get=function(A){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(A)},p.prototype.set=function(A,O){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(A,O)},p.prototype.readUInt8=function(A,O){if(O||(re(A!=null,"missing offset"),re(A<this.length,"Trying to read beyond buffer length")),!(A>=this.length))return this[A]},p.prototype.readUInt16LE=function(A,O){return b(this,A,!0,O)},p.prototype.readUInt16BE=function(A,O){return b(this,A,!1,O)},p.prototype.readUInt32LE=function(A,O){return w(this,A,!0,O)},p.prototype.readUInt32BE=function(A,O){return w(this,A,!1,O)},p.prototype.readInt8=function(A,O){if(O||(re(A!=null,"missing offset"),re(A<this.length,"Trying to read beyond buffer length")),!(A>=this.length))return 128&this[A]?-1*(255-this[A]+1):this[A]},p.prototype.readInt16LE=function(A,O){return M(this,A,!0,O)},p.prototype.readInt16BE=function(A,O){return M(this,A,!1,O)},p.prototype.readInt32LE=function(A,O){return T(this,A,!0,O)},p.prototype.readInt32BE=function(A,O){return T(this,A,!1,O)},p.prototype.readFloatLE=function(A,O){return E(this,A,!0,O)},p.prototype.readFloatBE=function(A,O){return E(this,A,!1,O)},p.prototype.readDoubleLE=function(A,O){return x(this,A,!0,O)},p.prototype.readDoubleBE=function(A,O){return x(this,A,!1,O)},p.prototype.writeUInt8=function(A,O,z){z||(re(A!=null,"missing value"),re(O!=null,"missing offset"),re(O<this.length,"trying to write beyond buffer length"),_e(A,255)),O>=this.length||(this[O]=A)},p.prototype.writeUInt16LE=function(A,O,z){v(this,A,O,!0,z)},p.prototype.writeUInt16BE=function(A,O,z){v(this,A,O,!1,z)},p.prototype.writeUInt32LE=function(A,O,z){D(this,A,O,!0,z)},p.prototype.writeUInt32BE=function(A,O,z){D(this,A,O,!1,z)},p.prototype.writeInt8=function(A,O,z){z||(re(A!=null,"missing value"),re(O!=null,"missing offset"),re(O<this.length,"Trying to write beyond buffer length"),Ae(A,127,-128)),O>=this.length||(0<=A?this.writeUInt8(A,O,z):this.writeUInt8(255+A+1,O,z))},p.prototype.writeInt16LE=function(A,O,z){R(this,A,O,!0,z)},p.prototype.writeInt16BE=function(A,O,z){R(this,A,O,!1,z)},p.prototype.writeInt32LE=function(A,O,z){q(this,A,O,!0,z)},p.prototype.writeInt32BE=function(A,O,z){q(this,A,O,!1,z)},p.prototype.writeFloatLE=function(A,O,z){N(this,A,O,!0,z)},p.prototype.writeFloatBE=function(A,O,z){N(this,A,O,!1,z)},p.prototype.writeDoubleLE=function(A,O,z){k(this,A,O,!0,z)},p.prototype.writeDoubleBE=function(A,O,z){k(this,A,O,!1,z)},p.prototype.fill=function(A,O,z){if(O=O||0,z=z||this.length,re(typeof(A=typeof(A=A||0)=="string"?A.charCodeAt(0):A)=="number"&&!isNaN(A),"value is not a number"),re(O<=z,"end < start"),z!==O&&this.length!==0){re(0<=O&&O<this.length,"start out of bounds"),re(0<=z&&z<=this.length,"end out of bounds");for(var L=O;L<z;L++)this[L]=A}},p.prototype.inspect=function(){for(var A=[],O=this.length,z=0;z<O;z++)if(A[z]=I(this[z]),z===i.INSPECT_MAX_BYTES){A[z+1]="...";break}return"<Buffer "+A.join(" ")+">"},p.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(p._useTypedArrays)return new p(this).buffer;for(var A=new Uint8Array(this.length),O=0,z=A.length;O<z;O+=1)A[O]=this[O];return A.buffer};var U=p.prototype;function G(A,O,z){return typeof A!="number"?z:O<=(A=~~A)?O:0<=A||0<=(A+=O)?A:0}function K(A){return(A=~~Math.ceil(+A))<0?0:A}function Z(A){return(Array.isArray||function(O){return Object.prototype.toString.call(O)==="[object Array]"})(A)}function I(A){return A<16?"0"+A.toString(16):A.toString(16)}function se(A){for(var O=[],z=0;z<A.length;z++){var L=A.charCodeAt(z);if(L<=127)O.push(A.charCodeAt(z));else for(var X=z,W=(55296<=L&&L<=57343&&z++,encodeURIComponent(A.slice(X,z+1)).substr(1).split("%")),ie=0;ie<W.length;ie++)O.push(parseInt(W[ie],16))}return O}function le(A){return g.toByteArray(A)}function Q(A,O,z,L){for(var X=0;X<L&&!(X+z>=O.length||X>=A.length);X++)O[X+z]=A[X];return X}function oe(A){try{return decodeURIComponent(A)}catch{return"�"}}function _e(A,O){re(typeof A=="number","cannot write a non-number as a number"),re(0<=A,"specified a negative value for writing an unsigned value"),re(A<=O,"value is larger than maximum value for type"),re(Math.floor(A)===A,"value has a fractional component")}function Ae(A,O,z){re(typeof A=="number","cannot write a non-number as a number"),re(A<=O,"value larger than maximum allowed value"),re(z<=A,"value smaller than minimum allowed value"),re(Math.floor(A)===A,"value has a fractional component")}function ye(A,O,z){re(typeof A=="number","cannot write a non-number as a number"),re(A<=O,"value larger than maximum allowed value"),re(z<=A,"value smaller than minimum allowed value")}function re(A,O){if(!A)throw new Error(O||"Failed assertion")}p._augment=function(A){return A._isBuffer=!0,A._get=A.get,A._set=A.set,A.get=U.get,A.set=U.set,A.write=U.write,A.toString=U.toString,A.toLocaleString=U.toString,A.toJSON=U.toJSON,A.copy=U.copy,A.slice=U.slice,A.readUInt8=U.readUInt8,A.readUInt16LE=U.readUInt16LE,A.readUInt16BE=U.readUInt16BE,A.readUInt32LE=U.readUInt32LE,A.readUInt32BE=U.readUInt32BE,A.readInt8=U.readInt8,A.readInt16LE=U.readInt16LE,A.readInt16BE=U.readInt16BE,A.readInt32LE=U.readInt32LE,A.readInt32BE=U.readInt32BE,A.readFloatLE=U.readFloatLE,A.readFloatBE=U.readFloatBE,A.readDoubleLE=U.readDoubleLE,A.readDoubleBE=U.readDoubleBE,A.writeUInt8=U.writeUInt8,A.writeUInt16LE=U.writeUInt16LE,A.writeUInt16BE=U.writeUInt16BE,A.writeUInt32LE=U.writeUInt32LE,A.writeUInt32BE=U.writeUInt32BE,A.writeInt8=U.writeInt8,A.writeInt16LE=U.writeInt16LE,A.writeInt16BE=U.writeInt16BE,A.writeInt32LE=U.writeInt32LE,A.writeInt32BE=U.writeInt32BE,A.writeFloatLE=U.writeFloatLE,A.writeFloatBE=U.writeFloatBE,A.writeDoubleLE=U.writeDoubleLE,A.writeDoubleBE=U.writeDoubleBE,A.fill=U.fill,A.inspect=U.inspect,A.toArrayBuffer=U.toArrayBuffer,A}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(t,n,i){(function(r,o,g,l,c,u,h,f,d){var g=t("buffer").Buffer,_=4,p=new g(_);p.fill(0),n.exports={hash:function(m,S,y,b){for(var w=S(function(v,D){v.length%_!=0&&(R=v.length+(_-v.length%_),v=g.concat([v,p],R));for(var R,q=[],N=D?v.readInt32BE:v.readInt32LE,k=0;k<v.length;k+=_)q.push(N.call(v,k));return q}(m=g.isBuffer(m)?m:new g(m),b),8*m.length),S=b,M=new g(y),T=S?M.writeInt32BE:M.writeInt32LE,E=0;E<w.length;E++)T.call(M,w[E],4*E,!0);return M}}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(t,n,i){(function(r,o,g,l,c,u,h,f,d){var g=t("buffer").Buffer,_=t("./sha"),p=t("./sha256"),m=t("./rng"),S={sha1:_,sha256:p,md5:t("./md5")},y=64,b=new g(y);function w(v,D){var R=S[v=v||"sha1"],q=[];return R||M("algorithm:",v,"is not yet supported"),{update:function(N){return g.isBuffer(N)||(N=new g(N)),q.push(N),N.length,this},digest:function(N){var k=g.concat(q),k=D?function(U,G,K){g.isBuffer(G)||(G=new g(G)),g.isBuffer(K)||(K=new g(K)),G.length>y?G=U(G):G.length<y&&(G=g.concat([G,b],y));for(var Z=new g(y),I=new g(y),se=0;se<y;se++)Z[se]=54^G[se],I[se]=92^G[se];return K=U(g.concat([Z,K])),U(g.concat([I,K]))}(R,D,k):R(k);return q=null,N?k.toString(N):k}}}function M(){var v=[].slice.call(arguments).join(" ");throw new Error([v,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}b.fill(0),i.createHash=function(v){return w(v)},i.createHmac=w,i.randomBytes=function(v,D){if(!D||!D.call)return new g(m(v));try{D.call(this,void 0,new g(m(v)))}catch(R){D(R)}};var T,E=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],x=function(v){i[v]=function(){M("sorry,",v,"is not implemented yet")}};for(T in E)x(E[T])}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(t,n,i){(function(r,o,a,l,c,u,h,f,d){var g=t("./helpers");function _(M,T){M[T>>5]|=128<<T%32,M[14+(T+64>>>9<<4)]=T;for(var E=1732584193,x=-271733879,v=-1732584194,D=271733878,R=0;R<M.length;R+=16){var q=E,N=x,k=v,U=D,E=m(E,x,v,D,M[R+0],7,-680876936),D=m(D,E,x,v,M[R+1],12,-389564586),v=m(v,D,E,x,M[R+2],17,606105819),x=m(x,v,D,E,M[R+3],22,-1044525330);E=m(E,x,v,D,M[R+4],7,-176418897),D=m(D,E,x,v,M[R+5],12,1200080426),v=m(v,D,E,x,M[R+6],17,-1473231341),x=m(x,v,D,E,M[R+7],22,-45705983),E=m(E,x,v,D,M[R+8],7,1770035416),D=m(D,E,x,v,M[R+9],12,-1958414417),v=m(v,D,E,x,M[R+10],17,-42063),x=m(x,v,D,E,M[R+11],22,-1990404162),E=m(E,x,v,D,M[R+12],7,1804603682),D=m(D,E,x,v,M[R+13],12,-40341101),v=m(v,D,E,x,M[R+14],17,-1502002290),E=S(E,x=m(x,v,D,E,M[R+15],22,1236535329),v,D,M[R+1],5,-165796510),D=S(D,E,x,v,M[R+6],9,-1069501632),v=S(v,D,E,x,M[R+11],14,643717713),x=S(x,v,D,E,M[R+0],20,-373897302),E=S(E,x,v,D,M[R+5],5,-701558691),D=S(D,E,x,v,M[R+10],9,38016083),v=S(v,D,E,x,M[R+15],14,-660478335),x=S(x,v,D,E,M[R+4],20,-405537848),E=S(E,x,v,D,M[R+9],5,568446438),D=S(D,E,x,v,M[R+14],9,-1019803690),v=S(v,D,E,x,M[R+3],14,-187363961),x=S(x,v,D,E,M[R+8],20,1163531501),E=S(E,x,v,D,M[R+13],5,-1444681467),D=S(D,E,x,v,M[R+2],9,-51403784),v=S(v,D,E,x,M[R+7],14,1735328473),E=y(E,x=S(x,v,D,E,M[R+12],20,-1926607734),v,D,M[R+5],4,-378558),D=y(D,E,x,v,M[R+8],11,-2022574463),v=y(v,D,E,x,M[R+11],16,1839030562),x=y(x,v,D,E,M[R+14],23,-35309556),E=y(E,x,v,D,M[R+1],4,-1530992060),D=y(D,E,x,v,M[R+4],11,1272893353),v=y(v,D,E,x,M[R+7],16,-155497632),x=y(x,v,D,E,M[R+10],23,-1094730640),E=y(E,x,v,D,M[R+13],4,681279174),D=y(D,E,x,v,M[R+0],11,-358537222),v=y(v,D,E,x,M[R+3],16,-722521979),x=y(x,v,D,E,M[R+6],23,76029189),E=y(E,x,v,D,M[R+9],4,-640364487),D=y(D,E,x,v,M[R+12],11,-421815835),v=y(v,D,E,x,M[R+15],16,530742520),E=b(E,x=y(x,v,D,E,M[R+2],23,-995338651),v,D,M[R+0],6,-198630844),D=b(D,E,x,v,M[R+7],10,1126891415),v=b(v,D,E,x,M[R+14],15,-1416354905),x=b(x,v,D,E,M[R+5],21,-57434055),E=b(E,x,v,D,M[R+12],6,1700485571),D=b(D,E,x,v,M[R+3],10,-1894986606),v=b(v,D,E,x,M[R+10],15,-1051523),x=b(x,v,D,E,M[R+1],21,-2054922799),E=b(E,x,v,D,M[R+8],6,1873313359),D=b(D,E,x,v,M[R+15],10,-30611744),v=b(v,D,E,x,M[R+6],15,-1560198380),x=b(x,v,D,E,M[R+13],21,1309151649),E=b(E,x,v,D,M[R+4],6,-145523070),D=b(D,E,x,v,M[R+11],10,-1120210379),v=b(v,D,E,x,M[R+2],15,718787259),x=b(x,v,D,E,M[R+9],21,-343485551),E=w(E,q),x=w(x,N),v=w(v,k),D=w(D,U)}return Array(E,x,v,D)}function p(M,T,E,x,v,D){return w((T=w(w(T,M),w(x,D)))<<v|T>>>32-v,E)}function m(M,T,E,x,v,D,R){return p(T&E|~T&x,M,T,v,D,R)}function S(M,T,E,x,v,D,R){return p(T&x|E&~x,M,T,v,D,R)}function y(M,T,E,x,v,D,R){return p(T^E^x,M,T,v,D,R)}function b(M,T,E,x,v,D,R){return p(E^(T|~x),M,T,v,D,R)}function w(M,T){var E=(65535&M)+(65535&T);return(M>>16)+(T>>16)+(E>>16)<<16|65535&E}n.exports=function(M){return g.hash(M,_,16)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(t,n,i){(function(r,o,a,l,c,u,h,f,d){n.exports=function(g){for(var _,p=new Array(g),m=0;m<g;m++)!(3&m)&&(_=4294967296*Math.random()),p[m]=_>>>((3&m)<<3)&255;return p}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(t,n,i){(function(r,o,a,l,c,u,h,f,d){var g=t("./helpers");function _(S,y){S[y>>5]|=128<<24-y%32,S[15+(y+64>>9<<4)]=y;for(var b,w,M,T=Array(80),E=1732584193,x=-271733879,v=-1732584194,D=271733878,R=-1009589776,q=0;q<S.length;q+=16){for(var N=E,k=x,U=v,G=D,K=R,Z=0;Z<80;Z++){T[Z]=Z<16?S[q+Z]:m(T[Z-3]^T[Z-8]^T[Z-14]^T[Z-16],1);var I=p(p(m(E,5),(I=x,w=v,M=D,(b=Z)<20?I&w|~I&M:!(b<40)&&b<60?I&w|I&M|w&M:I^w^M)),p(p(R,T[Z]),(b=Z)<20?1518500249:b<40?1859775393:b<60?-1894007588:-899497514)),R=D,D=v,v=m(x,30),x=E,E=I}E=p(E,N),x=p(x,k),v=p(v,U),D=p(D,G),R=p(R,K)}return Array(E,x,v,D,R)}function p(S,y){var b=(65535&S)+(65535&y);return(S>>16)+(y>>16)+(b>>16)<<16|65535&b}function m(S,y){return S<<y|S>>>32-y}n.exports=function(S){return g.hash(S,_,20,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(t,n,i){(function(r,o,a,l,c,u,h,f,d){function g(y,b){var w=(65535&y)+(65535&b);return(y>>16)+(b>>16)+(w>>16)<<16|65535&w}function _(y,b){var w,M=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),T=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),E=new Array(64);y[b>>5]|=128<<24-b%32,y[15+(b+64>>9<<4)]=b;for(var x,v,D=0;D<y.length;D+=16){for(var R=T[0],q=T[1],N=T[2],k=T[3],U=T[4],G=T[5],K=T[6],Z=T[7],I=0;I<64;I++)E[I]=I<16?y[I+D]:g(g(g((v=E[I-2],m(v,17)^m(v,19)^S(v,10)),E[I-7]),(v=E[I-15],m(v,7)^m(v,18)^S(v,3))),E[I-16]),w=g(g(g(g(Z,m(v=U,6)^m(v,11)^m(v,25)),U&G^~U&K),M[I]),E[I]),x=g(m(x=R,2)^m(x,13)^m(x,22),R&q^R&N^q&N),Z=K,K=G,G=U,U=g(k,w),k=N,N=q,q=R,R=g(w,x);T[0]=g(R,T[0]),T[1]=g(q,T[1]),T[2]=g(N,T[2]),T[3]=g(k,T[3]),T[4]=g(U,T[4]),T[5]=g(G,T[5]),T[6]=g(K,T[6]),T[7]=g(Z,T[7])}return T}var p=t("./helpers"),m=function(y,b){return y>>>b|y<<32-b},S=function(y,b){return y>>>b};n.exports=function(y){return p.hash(y,_,32,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(t,n,i){(function(r,o,a,l,c,u,h,f,d){i.read=function(g,_,p,m,D){var y,b,w=8*D-m-1,M=(1<<w)-1,T=M>>1,E=-7,x=p?D-1:0,v=p?-1:1,D=g[_+x];for(x+=v,y=D&(1<<-E)-1,D>>=-E,E+=w;0<E;y=256*y+g[_+x],x+=v,E-=8);for(b=y&(1<<-E)-1,y>>=-E,E+=m;0<E;b=256*b+g[_+x],x+=v,E-=8);if(y===0)y=1-T;else{if(y===M)return b?NaN:1/0*(D?-1:1);b+=Math.pow(2,m),y-=T}return(D?-1:1)*b*Math.pow(2,y-m)},i.write=function(g,_,p,m,S,R){var b,w,M=8*R-S-1,T=(1<<M)-1,E=T>>1,x=S===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=m?0:R-1,D=m?1:-1,R=_<0||_===0&&1/_<0?1:0;for(_=Math.abs(_),isNaN(_)||_===1/0?(w=isNaN(_)?1:0,b=T):(b=Math.floor(Math.log(_)/Math.LN2),_*(m=Math.pow(2,-b))<1&&(b--,m*=2),2<=(_+=1<=b+E?x/m:x*Math.pow(2,1-E))*m&&(b++,m/=2),T<=b+E?(w=0,b=T):1<=b+E?(w=(_*m-1)*Math.pow(2,S),b+=E):(w=_*Math.pow(2,E-1)*Math.pow(2,S),b=0));8<=S;g[p+v]=255&w,v+=D,w/=256,S-=8);for(b=b<<S|w,M+=S;0<M;g[p+v]=255&b,v+=D,b/=256,M-=8);g[p+v-D]|=128*R}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(t,n,i){(function(r,o,a,l,c,u,h,f,d){var g,_,p;function m(){}(r=n.exports={}).nextTick=(_=typeof window<"u"&&window.setImmediate,p=typeof window<"u"&&window.postMessage&&window.addEventListener,_?function(S){return window.setImmediate(S)}:p?(g=[],window.addEventListener("message",function(S){var y=S.source;y!==window&&y!==null||S.data!=="process-tick"||(S.stopPropagation(),0<g.length&&g.shift()())},!0),function(S){g.push(S),window.postMessage("process-tick","*")}):function(S){setTimeout(S,0)}),r.title="browser",r.browser=!0,r.env={},r.argv=[],r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.binding=function(S){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(S){throw new Error("process.chdir is not supported")}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(h_);var Nw=h_.exports;const Ow=Yc(Nw);var f_=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],Uw=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],d_=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"],Bw=f_,kw=Bw.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),Rh=d_;Rh=Rh.slice().filter(function(s){return!/^(gl\_|texture)/.test(s)});var zw=Rh.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),Hw=Zw,Vw=f_,hm=Uw,Gw=d_,Ww=kw,Xw=zw,wi=999,fm=9999,Yu=0,qu=1,dm=2,pm=3,mm=4,ia=5,jw=6,Yw=7,qw=8,gm=9,$w=10,_m=11,Kw=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function Zw(s){var e=0,t=0,n=wi,i,r,o=[],a=[],l=1,c=0,u=0,h=!1,f=!1,d="",g;s=s||{};var _=Gw,p=Vw;s.version==="300 es"&&(_=Xw,p=Ww);for(var m={},S={},e=0;e<_.length;e++)m[_[e]]=!0;for(var e=0;e<p.length;e++)S[p[e]]=!0;return function(G){return a=[],G!==null?b(G):w()};function y(G){G.length&&a.push({type:Kw[n],data:G,position:u,line:l,column:c})}function b(G){e=0,G.toString&&(G=G.toString()),d+=G.replace(/\r\n/g,`
`),g=d.length;for(var K;i=d[e],e<g;){switch(K=e,n){case Yu:e=v();break;case qu:e=x();break;case dm:e=E();break;case pm:e=D();break;case mm:e=N();break;case _m:e=q();break;case ia:e=k();break;case fm:e=U();break;case gm:e=T();break;case wi:e=M();break}if(K!==e)switch(d[K]){case`
`:c=0,++l;break;default:++c;break}}return t+=e,d=d.slice(e),a}function w(G){return o.length&&y(o.join("")),n=$w,y("(eof)"),a}function M(){return o=o.length?[]:o,r==="/"&&i==="*"?(u=t+e-1,n=Yu,r=i,e+1):r==="/"&&i==="/"?(u=t+e-1,n=qu,r=i,e+1):i==="#"?(n=dm,u=t+e,e):/\s/.test(i)?(n=gm,u=t+e,e):(h=/\d/.test(i),f=/[^\w_]/.test(i),u=t+e,n=h?mm:f?pm:fm,e)}function T(){return/[^\s]/g.test(i)?(y(o.join("")),n=wi,e):(o.push(i),r=i,e+1)}function E(){return(i==="\r"||i===`
`)&&r!=="\\"?(y(o.join("")),n=wi,e):(o.push(i),r=i,e+1)}function x(){return E()}function v(){return i==="/"&&r==="*"?(o.push(i),y(o.join("")),n=wi,e+1):(o.push(i),r=i,e+1)}function D(){if(r==="."&&/\d/.test(i))return n=ia,e;if(r==="/"&&i==="*")return n=Yu,e;if(r==="/"&&i==="/")return n=qu,e;if(i==="."&&o.length){for(;R(o););return n=ia,e}if(i===";"||i===")"||i==="("){if(o.length)for(;R(o););return y(i),n=wi,e+1}var G=o.length===2&&i!=="=";if(/[\w_\d\s]/.test(i)||G){for(;R(o););return n=wi,e}return o.push(i),r=i,e+1}function R(G){var K=0,Z,I;do{if(Z=hm.indexOf(G.slice(0,G.length+K).join("")),I=hm[Z],Z===-1){if(K--+G.length>0)continue;I=G.slice(0,1).join("")}return y(I),u+=I.length,o=o.slice(I.length),o.length}while(!0)}function q(){return/[^a-fA-F0-9]/.test(i)?(y(o.join("")),n=wi,e):(o.push(i),r=i,e+1)}function N(){return i==="."||/[eE]/.test(i)?(o.push(i),n=ia,r=i,e+1):i==="x"&&o.length===1&&o[0]==="0"?(n=_m,o.push(i),r=i,e+1):/[^\d]/.test(i)?(y(o.join("")),n=wi,e):(o.push(i),r=i,e+1)}function k(){return i==="f"&&(o.push(i),r=i,e+=1),/[eE]/.test(i)||(i==="-"||i==="+")&&/[eE]/.test(r)?(o.push(i),r=i,e+1):/[^\d]/.test(i)?(y(o.join("")),n=wi,e):(o.push(i),r=i,e+1)}function U(){if(/[^\d\w_]/.test(i)){var G=o.join("");return S[G]?n=qw:m[G]?n=Yw:n=jw,y(o.join("")),n=wi,e}return o.push(i),r=i,e+1}}var Jw=Hw,Qw=eA;function eA(s,e){var t=Jw(e),n=[];return n=n.concat(t(s)),n=n.concat(t(null)),n}const tA=Yc(Qw);var nA=iA;function iA(s){for(var e=[],t=0;t<s.length;t++)s[t].type!=="eof"&&e.push(s[t].data);return e.join("")}const vm=Yc(nA);var rA=sA;function sA(s){var e=null,t=null,n=0,i=0,r=0,o=0,a=0,l=[],c,u,h;for(c=0,u;c<s.length;c++)if(h=s[c],h.data==="{"){if(n&&n++||(u=d(c,br(")"),br()),u<0)||(o=u,u=d(u,br("("),br(")")),u<0)||(a=u,u=d(u,ra),u<0)||s[u].type!=="ident"||(t=s[u].data,u=d(u,ra),u<0))continue;n=1,i=c,e=s[u].data,r=u;var f=d(u,ra);switch(s[f]&&s[f].data){case"lowp":case"highp":case"mediump":r=f}}else if(n&&h.data==="}"){if(--n)continue;l.push({name:t,type:e,body:[i+1,c],args:[a,o+1],outer:[r,c+1]})}for(c=0;c<s.length;c++)if(h=s[c],h.data===";"){if(u=d(c,br(")"),br()),u<0||(o=u,u=d(u,br("("),br(")")),u<0)||(a=u,u=d(u,ra),u<0)||s[u].type!=="ident"||(t=s[u].data,u=d(u,ra),u<0)||s[u].type==="operator"||s[u].data==="return")continue;e=s[u].data,l.push({name:t,type:e,body:!1,args:[a,o+1],outer:[u,c+1]})}return l.sort(function(g,_){return g.outer[0]-_.outer[0]});function d(g,_,p){for(var m=g-1;m>=0;m--){if(_(s[m]))return m;if(p&&p(s[m]))return-1}return-1}}function br(s){return function(e){return e.type==="operator"&&(!s||e.data===s)}}function ra(s){return s.type!=="whitespace"}const oA=Yc(rA);function aA(s,e){if(typeof s!="object"||s===null)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var n=t.call(s,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function p_(s){var e=aA(s,"string");return typeof e=="symbol"?e:String(e)}function _t(s,e,t){return e=p_(e),e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function xm(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(s,i).enumerable})),t.push.apply(t,n)}return t}function to(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?xm(Object(t),!0).forEach(function(n){_t(s,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):xm(Object(t)).forEach(function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(t,n))})}return s}function lA(s,e){if(s==null)return{};var t={},n=Object.keys(s),i,r;for(r=0;r<n.length;r++)i=n[r],!(e.indexOf(i)>=0)&&(t[i]=s[i]);return t}function cA(s,e){if(s==null)return{};var t=lA(s,e),n,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(s,n)&&(t[n]=s[n])}return t}function uA(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function ym(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,p_(n.key),n)}}function hA(s,e,t){return e&&ym(s.prototype,e),t&&ym(s,t),Object.defineProperty(s,"prototype",{writable:!1}),s}function m_(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ph(s,e){return Ph=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Ph(s,e)}function fA(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),e&&Ph(s,e)}function Tc(s){return Tc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Tc(s)}function dA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function pA(s,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return m_(s)}function mA(s){var e=dA();return function(){var n=Tc(s),i;if(e){var r=Tc(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return pA(this,i)}}var Ze={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",depthAlpha:"csm_DepthAlpha"},On,no,gA=(On={},_t(On,"".concat(Ze.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(Ze.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),_t(On,"".concat(Ze.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(Ze.position,`;
  `)}),_t(On,"".concat(Ze.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(Ze.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),_t(On,"".concat(Ze.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(Ze.pointSize,`;
    `)}),_t(On,"".concat(Ze.diffuseColor),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(Ze.diffuseColor,`;
  `)}),_t(On,"".concat(Ze.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(Ze.fragColor,`;
  `)}),_t(On,"".concat(Ze.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(Ze.emissive,`;
    `)}),_t(On,"".concat(Ze.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(Ze.roughness,`;
    `)}),_t(On,"".concat(Ze.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(Ze.metalness,`;
    `)}),_t(On,"".concat(Ze.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(Ze.ao,`;
    `)}),_t(On,"".concat(Ze.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(Ze.bump," - (dot(").concat(Ze.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),_t(On,"".concat(Ze.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(Ze.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(Ze.depthAlpha,`;
    `)}),On),_A=(no={},_t(no,"".concat(Ze.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(Ze.position,`, 1.0 );
  `)}),_t(no,"".concat(Ze.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(Ze.position,`;
  `)}),_t(no,"".concat(Ze.diffuseColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Ze.diffuseColor,`;
  `)}),_t(no,"".concat(Ze.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Ze.fragColor,`;
  `)}),no),vA=`

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        vec3 csm_Position = vec3(0.0);
        vec4 csm_PositionRaw = vec4(0.0);
        vec3 csm_Normal = vec3(0.0);
    #else
        vec3 csm_Position = position;
        vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        vec3 csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize = size;
    #endif
#else
    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        vec4 csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        vec4 csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            vec4 csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            vec4 csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            vec4 csm_DiffuseColor = vec4(diffuse, opacity);
            vec4 csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive = emissive;
        float csm_Roughness = roughness;
        float csm_Metalness = metalness;
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump = vec3(0.0);
    #endif

    float csm_DepthAlpha = 1.0;
#endif
`,xA=`
    varying mat4 csm_internal_vModelViewMatrix;
`,yA=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,SA=`
    varying mat4 csm_internal_vModelViewMatrix;
`,bA=`
    
`,Un,EA=(Un={},_t(Un,"".concat(Ze.position),"*"),_t(Un,"".concat(Ze.positionRaw),"*"),_t(Un,"".concat(Ze.normal),"*"),_t(Un,"".concat(Ze.pointSize),["PointsMaterial"]),_t(Un,"".concat(Ze.diffuseColor),"*"),_t(Un,"".concat(Ze.fragColor),"*"),_t(Un,"".concat(Ze.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),_t(Un,"".concat(Ze.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),_t(Un,"".concat(Ze.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),_t(Un,"".concat(Ze.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),_t(Un,"".concat(Ze.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),_t(Un,"".concat(Ze.depthAlpha),"*"),Un),MA=["baseMaterial","fragmentShader","vertexShader","uniforms","patchMap","cacheKey","silent"],TA=function(e,t,n){return e.split(t).join(n)},wA=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},AA=function(e,t){return new RegExp("\\b".concat(wA(t),"\\b")).test(e)};function DA(s){try{new s}catch(e){if(e.message.indexOf("is not a constructor")>=0)return!1}return!0}function CA(s,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;Object.assign(s,e);var n=Object.getPrototypeOf(e);Object.entries(Object.getOwnPropertyDescriptors(n)).filter(function(i){var r=typeof i[1].get=="function",o=typeof i[1].set=="function",a=typeof i[1].value=="function",l=i[0]==="constructor";return(r||o||a)&&!l}).forEach(function(i){if(typeof s[i[0]]=="function"){t||console.warn("Function ".concat(i[0]," already exists on CSM, renaming to base_").concat(i[0]));var r="base_".concat(i[0]);s[r]=i[1].value.bind(s);return}Object.defineProperty(s,i[0],i[1])})}function RA(s){var e=s.toString().trim(),t=e.substring(e.indexOf("{")+1,e.lastIndexOf("}"));return t.trim().length===0}function Sm(s){return s.replace(/\s/g,"")}function PA(s,e,t){var n=s.lastIndexOf(e);return n===-1?s:s.substring(0,n)+t+s.substring(n+e.length)}var qc=function(s){fA(t,s);var e=mA(t);function t(n){var i,r=n.baseMaterial,o=n.fragmentShader,a=n.vertexShader,l=n.uniforms,c=n.patchMap,u=n.cacheKey,h=n.silent,f=cA(n,MA);uA(this,t);var d;if(DA(r)?d=new r(f):(d=r,Object.assign(d,f)),d.type==="RawShaderMaterial")throw new Error("CustomShaderMaterial does not support RawShaderMaterial");i=e.call(this),CA(m_(i),d,h),i.__csm={patchMap:c||{},fragmentShader:o||"",vertexShader:a||"",cacheKey:u,baseMaterial:r,instanceID:pf.generateUUID(),type:d.type,isAlreadyExtended:!RA(d.onBeforeCompile),cacheHash:"",silent:h},i.uniforms=to(to({},i.uniforms||{}),l||{});{var g=i.__csm,_=g.fragmentShader,p=g.vertexShader,m=i.uniforms;i.__csm.cacheHash=i.getCacheHash(),i.generateMaterial(_,p,m)}return i}return hA(t,[{key:"update",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.uniforms=i.uniforms||this.uniforms,Object.assign(this.__csm,i);var r=this.__csm,o=r.fragmentShader,a=r.vertexShader,l=this.uniforms,c=this.getCacheHash();this.__csm.cacheHash=c,this.generateMaterial(o,a,l)}},{key:"clone",value:function(){var i={baseMaterial:this.__csm.baseMaterial,fragmentShader:this.__csm.fragmentShader,vertexShader:this.__csm.vertexShader,uniforms:this.uniforms,silent:this.__csm.silent,patchMap:this.__csm.patchMap,cacheKey:this.__csm.cacheKey},r=new this.constructor(i);return Object.assign(this,r),r}},{key:"getCacheHash",value:function(){var i=this.__csm,r=i.fragmentShader,o=i.vertexShader,a=this.uniforms,l=Object.values(a).reduce(function(u,h){var f=h.value;return u+JSON.stringify(f)},""),c=Sm(r)+Sm(o)+l;return c.trim().length>0?Ow(c):this.customProgramCacheKey()}},{key:"generateMaterial",value:function(i,r,o){var a=this,l=this.parseShader(i),c=this.parseShader(r);this.uniforms=o||{},this.customProgramCacheKey=function(){return a.__csm.cacheHash};var u=function(d){try{if(l){var g=a.patchShader(l,d.fragmentShader,!0);d.fragmentShader=a.getMaterialDefine()+g}if(c){var _=a.patchShader(c,d.vertexShader);d.vertexShader=`#define IS_VERTEX;
`+_,d.vertexShader=a.getMaterialDefine()+d.vertexShader}d.uniforms=to(to({},d.uniforms),a.uniforms),a.uniforms=d.uniforms}catch(p){console.error(p)}};if(this.__csm.isAlreadyExtended){var h=this.onBeforeCompile;this.onBeforeCompile=function(f,d){h(f,d),u(f)}}else this.onBeforeCompile=u;this.needsUpdate=!0}},{key:"patchShader",value:function(i,r,o){var a=this,l=r,c=to(to({},this.getPatchMapForMaterial()),this.__csm.patchMap);Object.keys(c).forEach(function(f){Object.keys(c[f]).forEach(function(d){var g=EA[f],_=a.__csm.type;if(f==="*"||AA(i.main,f))if(!g||Array.isArray(g)&&g.includes(_)||g==="*")l=TA(l,d,c[f][d]);else throw new Error("CSM: ".concat(f," is not available in ").concat(_,". Shader cannot compile."))})}),l=l.replace("void main() {",`
        #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
          `.concat(o?SA:xA,`
          #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
        #endif

        `).concat(i.header,`
        
        void main() {
          #ifndef CSM_IS_DEFAULTS_DEFINED
            `).concat(vA,`
            #define CSM_IS_DEFAULTS_DEFINED 1
          #endif
          
          #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
            `).concat(o?bA:yA,`
            #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
          #endif

          // CSM_START
      `));var u=this.__csm.isAlreadyExtended,h=l.includes("// CSM_END");return u&&h?l=PA(l,"// CSM_END",`
          // CSM_END
          `.concat(i.main,`
          // CSM_END
        `)):l=l.replace("// CSM_START",`
        // CSM_START
        `.concat(i.main,`
        // CSM_END
          `)),l=i.defines+l,l}},{key:"parseShader",value:function(i){if(i){var r=i.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,""),o=tA(r),a=oA(o),l=a.map(function(h){return h.name}).indexOf("main"),c=vm(o.slice(0,l>=0?a[l].outer[0]:void 0)),u=l>=0?this.getShaderFromIndex(o,a[l].body):"";return{defines:"",header:c,main:u}}}},{key:"getMaterialDefine",value:function(){var i=this.__csm.type;return i?"#define IS_".concat(i.toUpperCase(),`;
`):`#define IS_UNKNOWN;
`}},{key:"getPatchMapForMaterial",value:function(){switch(this.__csm.type){case"ShaderMaterial":return _A;default:return gA}}},{key:"getShaderFromIndex",value:function(i,r){return vm(i.slice(r[0],r[1]))}}]),t}(Ri);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class zi{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),zi.nextNameID=zi.nextNameID||0,this.$name.id=`lil-gui-name-${++zi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class LA extends zi{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Lh(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const IA={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Lh,toHexString:Lh},Va={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},FA={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,e,t=1){const n=Va.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([s,e,t],n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return Va.toHexString(i)}},NA={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=Va.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:s,g:e,b:t},n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return Va.toHexString(i)}},OA=[IA,Va,FA,NA];function UA(s){return OA.find(e=>e.match(s))}class BA extends zi{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=UA(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Lh(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class $u extends zi{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class kA extends zi{constructor(e,t,n,i,r,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let S=parseFloat(this.$input.value);isNaN(S)||(this._stepExplicit&&(S=this._snap(S)),this.setValue(this._clamp(S)))},n=S=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+S),this.$input.value=this.getValue())},i=S=>{S.key==="Enter"&&this.$input.blur(),S.code==="ArrowUp"&&(S.preventDefault(),n(this._step*this._arrowKeyMultiplier(S))),S.code==="ArrowDown"&&(S.preventDefault(),n(this._step*this._arrowKeyMultiplier(S)*-1))},r=S=>{this._inputFocused&&(S.preventDefault(),n(this._step*this._normalizeMouseWheel(S)))};let o=!1,a,l,c,u,h;const f=5,d=S=>{a=S.clientX,l=c=S.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=S=>{if(o){const y=S.clientX-a,b=S.clientY-l;Math.abs(b)>f?(S.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>f&&_()}if(!o){const y=S.clientY-c;h-=y*this._step*this._arrowKeyMultiplier(S),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=S.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},p=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(m,S,y,b,w)=>(m-S)/(y-S)*(w-b)+b,t=m=>{const S=this.$slider.getBoundingClientRect();let y=e(m,S.left,S.right,this._min,this._max);this._snapClampSetValue(y)},n=m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=m=>{t(m.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),o=!1},u=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):c(m),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f))},h=m=>{if(o){const S=m.touches[0].clientX-a,y=m.touches[0].clientY-l;Math.abs(S)>Math.abs(y)?c(m):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f))}else m.preventDefault(),t(m.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f)},d=this._callOnFinishChange.bind(this),g=400;let _;const p=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const y=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(d,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class zA extends zi{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class HA extends zi{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const VA=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function GA(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let bm=!1;class Lf{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!bm&&a&&(GA(VA),bm=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,r){if(Object(n)===n)return new zA(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new kA(this,e,t,n,i,r);case"boolean":return new LA(this,e,t);case"string":return new HA(this,e,t);case"function":return new $u(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new BA(this,e,t,n)}addFolder(e){const t=new Lf({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof $u||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof $u)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}var g_=`uniform float uTime;
uniform float uPositionFrequency;
uniform float uTimeFrequency;
uniform float uStrength;
uniform float uRidgeSharpness;
uniform float uWaveIntensity;
uniform float uWarpPositionFrequency;
uniform float uWarpTimeFrequency;
uniform float uTimeStrength;
uniform float uBlockIntensity;
uniform float uSurfaceNoiseIntensity;
uniform float uSurfaceNoiseScale;
uniform float uSurfaceNoiseAnimationSpeed;
uniform vec2 uMousePosition;
uniform float uRippleEffectIntensity; 

attribute vec4 tangent;

varying float vWobble;
varying vec2 vUv; 

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

vec4 grad4(float j, vec4 ip)
{
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;
}

float simplexNoise4d(vec4 v)
{
  const vec2  C = vec2( 0.138196601125010504,  
                        0.309016994374947451); 
  
  vec4 i  = floor(v + dot(v, C.yyyy) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

  

  
  vec4 i0;

  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );
  
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;

  
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;

  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  
  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

  
  i = mod(i, 289.0); 
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));
  
  
  

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

  
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

  
  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

}

float getSurfaceNoise(vec3 position) {
    float modifiedTime = uTime * uSurfaceNoiseAnimationSpeed;
    return simplexNoise4d(vec4(position * uSurfaceNoiseScale, modifiedTime)) * uSurfaceNoiseIntensity;
}

float getTimeNoise(vec3 position) {
    float modifiedTime = uTime * uTimeFrequency;
    return simplexNoise4d(vec4(position * uWarpPositionFrequency, modifiedTime)) * uTimeStrength;
}

float getBaseSineWobble(vec3 position) {
    float timeNoise = getTimeNoise(position);
    float wobbleX = sin(position.x * uPositionFrequency + timeNoise);
    float wobbleY = sin(position.y * uPositionFrequency + timeNoise);
    float wobbleZ = sin(position.z * uPositionFrequency + timeNoise);
    return (wobbleX + wobbleY + wobbleZ) * uStrength * 0.5;
}

float getRidgeWobble(vec3 position) {
    float timeNoise = getTimeNoise(position);
    float modulation = cos(position.y * uPositionFrequency * 10.0);
    float combinedWobble = sin(position.x * uPositionFrequency + timeNoise) +
                           sin(position.y * uPositionFrequency + timeNoise) +
                           sin(position.z * uPositionFrequency + timeNoise);
    float sharpWobble = pow(abs(combinedWobble * modulation), uRidgeSharpness);
    return sign(combinedWobble) * sharpWobble * uStrength * 0.5;
}

float getRippleEffect(vec3 position, vec2 mousePosition) {
    float distance = length(position.xy - mousePosition);
    return sin(distance * 5.0 - uTime * 3.0) * exp(-distance * 3.0) * uRippleEffectIntensity;
}

void main() {
    vec3 biTangent = cross(normal, tangent.xyz);
    float shift = 0.01;
    vec3 positionA = csm_Position + tangent.xyz * shift;
    vec3 positionB = csm_Position + biTangent * shift;

    float baseWobble = getBaseSineWobble(csm_Position);
    float ridgeWobble = getRidgeWobble(csm_Position);
    float wobble = mix(baseWobble, ridgeWobble, uWaveIntensity);

    vec3 snappedPosition = floor(csm_Position / 0.5 + 0.5) * 0.5; 
    csm_Position = mix(csm_Position, snappedPosition, uBlockIntensity);

    
    csm_Position += wobble * normal;
    positionA += mix(getBaseSineWobble(positionA), getRidgeWobble(positionA), uWaveIntensity) * normal;
    positionB += mix(getBaseSineWobble(positionB), getRidgeWobble(positionB), uWaveIntensity) * normal;

    
    float surfaceNoise = getSurfaceNoise(csm_Position);
    csm_Position += surfaceNoise * normal;

    
    float rippleEffect = getRippleEffect(csm_Position, uMousePosition);
    csm_Position += rippleEffect * normal;

    vec3 toA = normalize(positionA - csm_Position);
    vec3 toB = normalize(positionB - csm_Position);
    csm_Normal = cross(toA, toB);

    
    vUv = uv; 

    vWobble = wobble / uStrength;
}`,WA=`uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform float uColorThresholdA;
uniform float uColorThresholdB;
uniform float uColorThresholdC;
uniform float uColorTransition;
uniform float uShinyTipsIntensity;
uniform float uShinyTipsEffect;
uniform sampler2D uDiffuseMap;
uniform bool useDiffuseMap; 

varying float vWobble;
varying vec2 vUv;

void main() {
    vec3 finalColor;
    float colorMix = smoothstep(-0.2, 0.5, vWobble);

    if (uColorTransition < 0.5) {
        finalColor = mix(uColorB, uColorA, colorMix);
    } else {
        if (vWobble > uColorThresholdA) {
            finalColor = uColorA;
        } else if (vWobble > uColorThresholdB) {
            finalColor = mix(uColorB, uColorA, (vWobble - uColorThresholdB) / (uColorThresholdA - uColorThresholdB));
        } else {
            finalColor = mix(uColorC, uColorB, (vWobble - uColorThresholdC) / (uColorThresholdB - uColorThresholdC));
        }
    }

    
    if (useDiffuseMap) {
        vec4 diffuseMapColor = texture2D(uDiffuseMap, vUv);
        finalColor *= diffuseMapColor.rgb;
    }

    csm_DiffuseColor.rgb = finalColor;

    float shinyEffect = 1.0 - pow(colorMix, 2.0) * uShinyTipsIntensity;
    csm_Roughness = mix(csm_Roughness, shinyEffect, uShinyTipsEffect);
}`,__=`void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); 
}`,v_=`uniform float uTextTime;
uniform float uTextPositionFrequency;
uniform float uTextTimeFrequency;
uniform float uTextStrength;
uniform float uTextRidgeSharpness;
uniform float uTextWaveIntensity;
uniform float uTextWarpPositionFrequency;
uniform float uTextWarpTimeFrequency;
uniform float uTextTimeStrength;
uniform float uTextScale;

attribute vec4 tangent;

varying float vWobble;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

vec4 grad4(float j, vec4 ip)
{
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;
}

float simplexNoise4d(vec4 v)
{
  const vec2  C = vec2( 0.138196601125010504,  
                        0.309016994374947451); 
  
  vec4 i  = floor(v + dot(v, C.yyyy) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

  

  
  vec4 i0;

  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );
  
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;

  
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;

  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  
  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

  
  i = mod(i, 289.0); 
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));
  
  
  

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

  
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

  
  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

}

float getTimeNoise(vec3 position) {
    float modifiedTime = uTextTime * uTextTimeFrequency;
    return simplexNoise4d(vec4(position * uTextWarpPositionFrequency, modifiedTime)) * uTextTimeStrength;
}

float getBaseSineWobble(vec3 position) {
    float timeNoise = getTimeNoise(position);
    float wobbleX = sin(position.x * uTextPositionFrequency + timeNoise);
    float wobbleY = sin(position.y * uTextPositionFrequency + timeNoise);
    float wobbleZ = sin(position.z * uTextPositionFrequency + timeNoise);
    return (wobbleX + wobbleY + wobbleZ) * uTextStrength * 0.5;
}

float getRidgeWobble(vec3 position) {
    float timeNoise = getTimeNoise(position);
    float modulation = cos(position.y * uTextPositionFrequency * 10.0);
    float combinedWobble = sin(position.x * uTextPositionFrequency + timeNoise) +
                           sin(position.y * uTextPositionFrequency + timeNoise) +
                           sin(position.z * uTextPositionFrequency + timeNoise);
    float sharpWobble = pow(abs(combinedWobble * modulation), uTextRidgeSharpness);
    return sign(combinedWobble) * sharpWobble * uTextStrength * 0.5;
}

void main() {
    vec3 biTangent = cross(normal, tangent.xyz);
    float shift = 0.01;
    vec3 positionA = csm_Position + tangent.xyz * shift;
    vec3 positionB = csm_Position + biTangent * shift;

    float baseWobble = getBaseSineWobble(csm_Position);
    float ridgeWobble = getRidgeWobble(csm_Position);
    float wobble = mix(baseWobble, ridgeWobble, uTextWaveIntensity);

    csm_Position += wobble * normal * uTextScale;
    positionA += mix(getBaseSineWobble(positionA), getRidgeWobble(positionA), uTextWaveIntensity) * normal * uTextScale;
    positionB += mix(getBaseSineWobble(positionB), getRidgeWobble(positionB), uTextWaveIntensity) * normal * uTextScale;

    vec3 toA = normalize(positionA - csm_Position);
    vec3 toB = normalize(positionB - csm_Position);
    csm_Normal = cross(toA, toB);

    vWobble = wobble / uTextStrength;
}`;class x_ extends mr{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Oo(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},n,i)}parse(e){return new XA(e)}}class XA{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=jA(e,t,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function jA(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=r;else{const h=YA(u,i,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function YA(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new qT;let a,l,c,u,h,f,d,g;if(r.o){const _=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,m=_.length;p<m;)switch(_[p++]){case"m":a=_[p++]*e+t,l=_[p++]*e+n,o.moveTo(a,l);break;case"l":a=_[p++]*e+t,l=_[p++]*e+n,o.lineTo(a,l);break;case"q":c=_[p++]*e+t,u=_[p++]*e+n,h=_[p++]*e+t,f=_[p++]*e+n,o.quadraticCurveTo(h,f,c,u);break;case"b":c=_[p++]*e+t,u=_[p++]*e+n,h=_[p++]*e+t,f=_[p++]*e+n,d=_[p++]*e+t,g=_[p++]*e+n,o.bezierCurveTo(h,f,d,g,c,u);break}}return{offsetX:r.ha*e,path:o}}class qA extends Mf{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}function nr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function y_(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ii={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Uo={duration:.5,overwrite:!1,delay:0},If,bn,It,vi=1e8,wt=1/vi,Ih=Math.PI*2,$A=Ih/4,KA=0,S_=Math.sqrt,ZA=Math.cos,JA=Math.sin,fn=function(e){return typeof e=="string"},Ht=function(e){return typeof e=="function"},fr=function(e){return typeof e=="number"},Ff=function(e){return typeof e>"u"},Wi=function(e){return typeof e=="object"},Gn=function(e){return e!==!1},Nf=function(){return typeof window<"u"},Hl=function(e){return Ht(e)||fn(e)},b_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},En=Array.isArray,Fh=/(?:-?\.?\d|\.)+/gi,E_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ho=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ku=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,M_=/[+-]=-?[.\d]+/,T_=/[^,'"\[\]\s]+/gi,QA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ut,Ii,Nh,Of,ri={},wc={},w_,A_=function(e){return(wc=Ts(e,ri))&&Yn},Uf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ga=function(e,t){return!t&&console.warn(e)},D_=function(e,t){return e&&(ri[e]=t)&&wc&&(wc[e]=t)||ri},Wa=function(){return 0},e1={suppressEvents:!0,isStart:!0,kill:!1},sc={suppressEvents:!0,kill:!1},t1={suppressEvents:!0},Bf={},kr=[],Oh={},C_,Qn={},Zu={},Em=30,oc=[],kf="",zf=function(e){var t=e[0],n,i;if(Wi(t)||Ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=oc.length;i--&&!oc[i].targetTest(t););n=oc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Q_(e[i],n)))||e.splice(i,1);return e},gs=function(e){return e._gsap||zf(xi(e))[0]._gsap},R_=function(e,t,n){return(n=e[t])&&Ht(n)?e[t]():Ff(n)&&e.getAttribute&&e.getAttribute(t)||n},Wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},un=function(e){return Math.round(e*1e7)/1e7||0},xo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},n1=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ac=function(){var e=kr.length,t=kr.slice(0),n,i;for(Oh={},kr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},P_=function(e,t,n,i){kr.length&&!bn&&Ac(),e.render(t,n,i||bn&&t<0&&(e._initted||e._startAt)),kr.length&&!bn&&Ac()},L_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(T_).length<2?t:fn(e)?e.trim():e},I_=function(e){return e},bi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},i1=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ts=function(e,t){for(var n in t)e[n]=t[n];return e},Mm=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Wi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Dc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ma=function(e){var t=e.parent||Ut,n=e.keyframes?i1(En(e.keyframes)):bi;if(Gn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},r1=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},F_=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},$c=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Xr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},_s=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},s1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Uh=function(e,t,n,i){return e._startAt&&(bn?e._startAt.revert(sc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},o1=function s(e){return!e||e._ts&&s(e.parent)},Tm=function(e){return e._repeat?Bo(e._tTime,e=e.duration()+e._rDelay)*e:0},Bo=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Cc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Kc=function(e){return e._end=un(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},Zc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=un(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Kc(e),n._dirty||_s(n,e)),e},N_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Cc(e.rawTime(),t),(!t._dur||tl(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),_s(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},Ui=function(e,t,n,i){return t.parent&&Xr(t),t._start=un((fr(n)?n:n||e!==Ut?li(e,n,t):e._time)+t._delay),t._end=un(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),F_(e,t,"_first","_last",e._sort?"_start":0),Bh(t)||(e._recent=t),i||N_(e,t),e._ts<0&&Zc(e,e._tTime),e},O_=function(e,t){return(ri.ScrollTrigger||Uf("scrollTrigger",t))&&ri.ScrollTrigger.create(t,e)},U_=function(e,t,n,i,r){if(Vf(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!bn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&C_!==ei.frame)return kr.push(e),e._lazy=[r,i],1},a1=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Bh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},l1=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&a1(e)&&!(!e._initted&&Bh(e))||(e._ts<0||e._dp._ts<0)&&!Bh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=tl(0,e._tDur,t),u=Bo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Bo(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||bn||i||e._zTime===wt||!t&&e._zTime){if(!e._initted&&U_(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Uh(e,t,n,!0),e._onUpdate&&!n&&ni(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ni(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Xr(e,1),!n&&!bn&&(ni(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},c1=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ko=function(e,t,n,i){var r=e._repeat,o=un(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:un(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Zc(e,e._tTime=e._tDur*a),e.parent&&Kc(e),n||_s(e.parent,e),e},wm=function(e){return e instanceof In?_s(e):ko(e,e._dur)},u1={_start:0,endTime:Wa,totalDuration:Wa},li=function s(e,t,n){var i=e.labels,r=e._recent||u1,o=e.duration()>=vi?r.endTime(!1):e._dur,a,l,c;return fn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(En(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ta=function(e,t,n){var i=fr(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Gn(l.vars.inherit)&&l.parent;o.immediateRender=Gn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new $t(t[0],o,t[r+1])},$r=function(e,t){return e||e===0?t(e):t},tl=function(e,t,n){return n<e?e:n>t?t:n},yn=function(e,t){return!fn(e)||!(t=QA.exec(e))?"":t[1]},h1=function(e,t,n){return $r(n,function(i){return tl(e,t,i)})},kh=[].slice,B_=function(e,t){return e&&Wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wi(e[0]))&&!e.nodeType&&e!==Ii},f1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return fn(i)&&!t||B_(i,1)?(r=n).push.apply(r,xi(i)):n.push(i)})||n},xi=function(e,t,n){return It&&!t&&It.selector?It.selector(e):fn(e)&&!n&&(Nh||!zo())?kh.call((t||Of).querySelectorAll(e),0):En(e)?f1(e,n):B_(e)?kh.call(e,0):e?[e]:[]},zh=function(e){return e=xi(e)[0]||Ga("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return xi(t,n.querySelectorAll?n:n===e?Ga("Invalid scope")||Of.createElement("div"):e)}},k_=function(e){return e.sort(function(){return .5-Math.random()})},z_=function(e){if(Ht(e))return e;var t=Wi(e)?e:{each:e},n=vs(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return fn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,p=o[_],m,S,y,b,w,M,T,E,x;if(!p){if(x=t.grid==="auto"?0:(t.grid||[1,vi])[1],!x){for(T=-vi;T<(T=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(p=o[_]=[],m=l?Math.min(x,_)*u-.5:i%x,S=x===vi?0:l?_*h/x-.5:i/x|0,T=0,E=vi,M=0;M<_;M++)y=M%x-m,b=S-(M/x|0),p[M]=w=c?Math.abs(c==="y"?b:y):S_(y*y+b*b),w>T&&(T=w),w<E&&(E=w);i==="random"&&k_(p),p.max=T-E,p.min=E,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=yn(t.amount||t.each)||0,n=n&&_<0?K_(n):n}return _=(p[f]-p.min)/p.max||0,un(p.b+(n?n(_):_)*p.v)+p.u}},Hh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=un(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(fr(n)?0:yn(n))}},H_=function(e,t){var n=En(e),i,r;return!n&&Wi(e)&&(i=n=e.radius||vi,e.values?(e=xi(e.values),(r=!fr(e[0]))&&(i*=i)):e=Hh(e.increment)),$r(t,n?Ht(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=vi,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,r||u===o||fr(o)?u:u+yn(o)}:Hh(e))},V_=function(e,t,n,i){return $r(En(e)?!t:n===!0?!!(n=0):!i,function(){return En(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},d1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},p1=function(e,t){return function(n){return e(parseFloat(n))+(t||yn(n))}},m1=function(e,t,n){return W_(e,t,0,1,n)},G_=function(e,t,n){return $r(n,function(i){return e[~~t(i)]})},g1=function s(e,t,n){var i=t-e;return En(e)?G_(e,s(0,e.length),t):$r(n,function(r){return(i+(r-e)%i)%i+e})},_1=function s(e,t,n){var i=t-e,r=i*2;return En(e)?G_(e,s(0,e.length-1),t):$r(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Xa=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?T_:Fh),n+=e.substr(t,i-t)+V_(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},W_=function(e,t,n,i,r){var o=t-e,a=i-n;return $r(r,function(l){return n+((l-e)/o*a||0)})},v1=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=fn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(En(e)&&!En(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=Ts(En(e)?[]:{},e));if(!u){for(l in t)Hf.call(a,e,l,"get",t[l]);r=function(g){return Xf(g,a)||(o?e.p:e)}}}return $r(n,r)},Am=function(e,t,n){var i=e.labels,r=vi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ni=function(e,t,n){var i=e.vars,r=i[t],o=It,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&kr.length&&Ac(),a&&(It=a),u=l?r.apply(c,l):r.call(c),It=o,u},ca=function(e){return Xr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bn),e.progress()<1&&ni(e,"onInterrupt"),e},fo,X_=[],j_=function(e){if(e)if(e=!e.name&&e.default||e,Nf()||e.headless){var t=e.name,n=Ht(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Wa,render:Xf,add:Hf,kill:F1,modifier:I1,rawVars:0},o={targetTest:0,get:0,getSetter:Wf,aliases:{},register:0};if(zo(),e!==i){if(Qn[t])return;bi(i,bi(Dc(e,r),o)),Ts(i.prototype,Ts(r,Dc(e,o))),Qn[i.prop=t]=i,e.targetTest&&(oc.push(i),Bf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}D_(t,i),e.register&&e.register(Yn,i,Xn)}else X_.push(e)},St=255,ua={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Ju=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*St+.5|0},Y_=function(e,t,n){var i=e?fr(e)?[e>>16,e>>8&St,e&St]:0:ua.black,r,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ua[e])i=ua[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&St,i&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Fh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ju(l+1/3,r,o),i[1]=Ju(l,r,o),i[2]=Ju(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(E_),n&&i.length<4&&(i[3]=1),i}else i=e.match(Fh)||ua.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/St,o=i[1]/St,a=i[2]/St,h=Math.max(r,o,a),f=Math.min(r,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(o-a)/d+(o<a?6:0):h===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},q_=function(e){var t=[],n=[],i=-1;return e.split(zr).forEach(function(r){var o=r.match(ho)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Dm=function(e,t,n){var i="",r=(e+i).match(zr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Y_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=q_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(zr,"1").split(ho),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(zr),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},zr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ua)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),x1=/hsl[a]?\(/,$_=function(e){var t=e.join(" "),n;if(zr.lastIndex=0,zr.test(t))return n=x1.test(t),e[1]=Dm(e[1],n),e[0]=Dm(e[0],n,q_(e[1])),!0},ja,ei=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,f,d,g=function _(p){var m=s()-i,S=p===!0,y,b,w,M;if((m>e||m<0)&&(n+=m-t),i+=m,w=i-n,y=w-o,(y>0||S)&&(M=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,o+=y+(y>=r?4:r-y),b=1),S||(l=c(_)),b)for(d=0;d<a.length;d++)a[d](w,f,M,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){w_&&(!Nh&&Nf()&&(Ii=Nh=window,Of=Ii.document||{},ri.gsap=Yn,(Ii.gsapVersions||(Ii.gsapVersions=[])).push(Yn.version),A_(wc||Ii.GreenSockGlobals||!Ii.gsap&&Ii||{}),X_.forEach(j_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},ja=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ja=0,c=Wa},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,m,S){var y=m?function(b,w,M,T){p(b,w,M,T),h.remove(y)}:p;return h.remove(p),a[S?"unshift":"push"](y),zo(),y},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),zo=function(){return!ja&&ei.wake()},ft={},y1=/^[\d.\-M][\d.\-,\s]/,S1=/["']/g,b1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(S1,"").trim():+c,i=l.substr(a+1).trim();return t},E1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},M1=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[b1(t[1])]:E1(e).split(",").map(L_)):ft._CE&&y1.test(e)?ft._CE("",e):n},K_=function(e){return function(t){return 1-e(1-t)}},Z_=function s(e,t){for(var n=e._first,i;n;)n instanceof In?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},vs=function(e,t){return e&&(Ht(e)?e:ft[e]||M1(e))||t},Is=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Wn(e,function(a){ft[a]=ri[a]=r,ft[o=a.toLowerCase()]=n;for(var l in r)ft[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[a+"."+l]=r[l]}),r},J_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Qu=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Ih*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*JA((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:J_(a);return r=Ih/r,l.config=function(c,u){return s(e,c,u)},l},eh=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:J_(n);return i.config=function(r){return s(e,r)},i};Wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Is(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;Is("Elastic",Qu("in"),Qu("out"),Qu());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Is("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Is("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Is("Circ",function(s){return-(S_(1-s*s)-1)});Is("Sine",function(s){return s===1?1:-ZA(s*$A)+1});Is("Back",eh("in"),eh("out"),eh());ft.SteppedEase=ft.steps=ri.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-wt;return function(a){return((i*tl(0,o,a)|0)+r)*n}}};Uo.ease=ft["quad.out"];Wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return kf+=s+","+s+"Params,"});var Q_=function(e,t){this.id=KA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:R_,this.set=t?t.getSetter:Wf},Ya=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ko(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),ja||ei.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ko(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(zo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Zc(this,n),!r._dp||r.parent||N_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===wt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),P_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Tm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Tm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Bo(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Cc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts,this.totalTime(tl(-Math.abs(this._delay),this._tDur,r),i!==!1),Kc(this),s1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ui(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Gn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Cc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=t1);var i=bn;return bn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),bn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,wm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(li(this,n),Gn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Gn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-wt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=Ht(n)?n:I_,a=function(){var c=i.then;i.then=null,Ht(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ca(this)},s}();bi(Ya.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var In=function(s){y_(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Gn(n.sortChildren),Ut&&Ui(n.parent||Ut,nr(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&O_(nr(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Ta(0,arguments,this),this},t.from=function(i,r,o){return Ta(1,arguments,this),this},t.fromTo=function(i,r,o,a){return Ta(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Ma(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new $t(i,r,li(this,o),1),this},t.call=function(i,r,o){return Ui(this,$t.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new $t(i,o,li(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,Ma(o).immediateRender=Gn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,Ma(a).immediateRender=Gn(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:un(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,p,m,S,y,b,w,M,T;if(this!==Ut&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,b=this._start,y=this._ts,m=!y,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=un(u%p),u===l?(_=this._repeat,f=c):(_=~~(u/p),_&&_===u/p&&(f=c,_--),f>c&&(f=c)),w=Bo(this._tTime,p),!a&&this._tTime&&w!==_&&this._tTime-w*p-this._dur<=0&&(w=_),M&&_&1&&(f=c-f,T=1),_!==w&&!this._lock){var E=M&&w&1,x=E===(M&&_&1);if(_<w&&(E=!E),a=E?0:u%c?c:u,this._lock=1,this.render(a||(T?0:un(_*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=E?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Z_(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=c1(this,un(a),un(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&!_&&(ni(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!m){S=0,g&&(u+=this._zTime=-wt);break}}d=g}else{d=this._last;for(var v=i<0?i:f;d;){if(g=d._prev,(d._act||v<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,r,o||bn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){S=0,g&&(u+=this._zTime=v?-wt:wt);break}}d=g}}if(S&&!r&&(this.pause(),S.render(f>=a?0:-wt)._zTime=f>=a?1:-1,this._ts))return this._start=b,Kc(this),this.render(i,r,o);this._onUpdate&&!r&&ni(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(b===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Xr(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(ni(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(fr(r)||(r=li(this,r,i)),!(i instanceof Ya)){if(En(i))return i.forEach(function(a){return o.add(a,r)}),this;if(fn(i))return this.addLabel(i,r);if(Ht(i))i=$t.delayedCall(0,i);else return this}return this!==i?Ui(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-vi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof $t?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return fn(i)?this.removeLabel(i):Ht(i)?this.killTweensOf(i):($c(this,i),i===this._recent&&(this._recent=this._last),_s(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=un(ei.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=li(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=$t.delayedCall(0,r||Wa,o);return a.data="isPause",this._hasPause=1,Ui(this,a,li(this,i))},t.removePause=function(i){var r=this._first;for(i=li(this,i);r;)r._start===i&&r.data==="isPause"&&Xr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Dr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=xi(i),l=this._first,c=fr(r),u;l;)l instanceof $t?n1(l._targets,a)&&(c?(!Dr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=li(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=$t.to(o,bi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||wt,onStart:function(){if(o.pause(),!d){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&ko(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,bi({startAt:{time:li(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Am(this,li(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Am(this,li(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return _s(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),_s(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=vi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ui(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;ko(o,o===Ut&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ut._ts&&(P_(Ut,Cc(i,Ut)),C_=ei.frame),ei.frame>=Em){Em+=ii.autoSleep||120;var r=Ut._first;if((!r||!r._ts)&&ii.autoSleep&&ei._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ei.sleep()}}},e}(Ya);bi(In.prototype,{_lock:0,_hasPause:0,_forcing:0});var T1=function(e,t,n,i,r,o,a){var l=new Xn(this._pt,e,t,0,1,s0,null,r),c=0,u=0,h,f,d,g,_,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Xa(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),f=n.match(Ku)||[];h=Ku.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?xo(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=Ku.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(M_.test(i)||m)&&(l.e=0),this._pt=l,l},Hf=function(e,t,n,i,r,o,a,l,c,u){Ht(i)&&(i=i(r||0,e,o));var h=e[t],f=n!=="get"?n:Ht(h)?c?e[t.indexOf("set")||!Ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ht(h)?c?R1:i0:Gf,g;if(fn(i)&&(~i.indexOf("random(")&&(i=Xa(i)),i.charAt(1)==="="&&(g=xo(f,i)+(yn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Vh)return!isNaN(f*i)&&i!==""?(g=new Xn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?L1:r0,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Uf(t,i),T1.call(this,e,t,f,i,d,l||ii.stringFilter,c))},w1=function(e,t,n,i,r){if(Ht(e)&&(e=wa(e,r,t,n,i)),!Wi(e)||e.style&&e.nodeType||En(e)||b_(e))return fn(e)?wa(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=wa(e[a],r,t,n,i);return o},e0=function(e,t,n,i,r,o){var a,l,c,u;if(Qn[e]&&(a=new Qn[e]).init(r,a.rawVars?t[e]:w1(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Xn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==fo))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Dr,Vh,Vf=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,y=e._overwrite==="auto"&&!If,b=e.timeline,w,M,T,E,x,v,D,R,q,N,k,U,G;if(b&&(!f||!r)&&(r="none"),e._ease=vs(r,Uo.ease),e._yEase=h?K_(vs(h===!0?r:h,Uo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!b&&!!i.runBackwards,!b||f&&!i.stagger){if(R=p[0]?gs(p[0]).harness:0,U=R&&i[R.prop],w=Dc(i,Bf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?sc:e1),_._lazy=0),o){if(Xr(e._startAt=$t.set(p,bi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Gn(l),startAt:null,delay:0,onUpdate:c&&function(){return ni(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn||!a&&!d)&&e._startAt.revert(sc),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),T=bi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Gn(l),immediateRender:a,stagger:0,parent:m},w),U&&(T[R.prop]=U),Xr(e._startAt=$t.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn?e._startAt.revert(sc):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Gn(l)||l&&!g,M=0;M<p.length;M++){if(x=p[M],D=x._gsap||zf(p)[M]._gsap,e._ptLookup[M]=N={},Oh[D.id]&&kr.length&&Ac(),k=S===p?M:S.indexOf(x),R&&(q=new R).init(x,U||w,e,k,S)!==!1&&(e._pt=E=new Xn(e._pt,x,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(K){N[K]=E}),q.priority&&(v=1)),!R||U)for(T in w)Qn[T]&&(q=e0(T,w,e,k,x,S))?q.priority&&(v=1):N[T]=E=Hf.call(e,x,T,"get",w[T],k,S,0,i.stringFilter);e._op&&e._op[M]&&e.kill(x,e._op[M]),y&&e._pt&&(Dr=e,Ut.killTweensOf(x,N,e.globalTime(t)),G=!e.parent,Dr=0),e._pt&&l&&(Oh[D.id]=1)}v&&o0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,f&&t<=0&&b.render(vi,!0,!0)},A1=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Vh=1,e.vars[t]="+=0",Vf(e,a),Vh=0,l?Ga(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Gt(n)+yn(h.e)),h.b&&(h.b=u.s+yn(h.b))},D1=function(e,t){var n=e[0]?gs(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=Ts({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},C1=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(En(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},wa=function(e,t,n,i,r){return Ht(e)?e.call(t,n,i,r):fn(e)&&~e.indexOf("random(")?Xa(e):e},t0=kf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",n0={};Wn(t0+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return n0[s]=1});var $t=function(s){y_(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Ma(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=i.parent||Ut,y=(En(n)||b_(n)?fr(n[0]):"length"in i)?[n]:xi(n),b,w,M,T,E,x,v,D;if(a._targets=y.length?zf(y):Ga("GSAP target "+n+" not found. https://gsap.com",!ii.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Hl(c)||Hl(u)){if(i=a.vars,b=a.timeline=new In({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:y}),b.kill(),b.parent=b._dp=nr(a),b._start=0,f||Hl(c)||Hl(u)){if(T=y.length,v=f&&z_(f),Wi(f))for(E in f)~t0.indexOf(E)&&(D||(D={}),D[E]=f[E]);for(w=0;w<T;w++)M=Dc(i,n0),M.stagger=0,m&&(M.yoyoEase=m),D&&Ts(M,D),x=y[w],M.duration=+wa(c,nr(a),w,x,y),M.delay=(+wa(u,nr(a),w,x,y)||0)-a._delay,!f&&T===1&&M.delay&&(a._delay=u=M.delay,a._start+=u,M.delay=0),b.to(x,M,v?v(w,x,y):0),b._ease=ft.none;b.duration()?c=u=0:a.timeline=0}else if(g){Ma(bi(b.vars.defaults,{ease:"none"})),b._ease=vs(g.ease||i.ease||"none");var R=0,q,N,k;if(En(g))g.forEach(function(U){return b.to(y,U,">")}),b.duration();else{M={};for(E in g)E==="ease"||E==="easeEach"||C1(E,g[E],M,g.easeEach);for(E in M)for(q=M[E].sort(function(U,G){return U.t-G.t}),R=0,w=0;w<q.length;w++)N=q[w],k={ease:N.e,duration:(N.t-(w?q[w-1].t:0))/100*c},k[E]=N.v,b.to(y,k,R),R+=k.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return d===!0&&!If&&(Dr=nr(a),Ut.killTweensOf(y),Dr=0),Ui(S,nr(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===un(S._time)&&Gn(h)&&o1(nr(a))&&S.data!=="nested")&&(a._tTime=-wt,a.render(Math.max(0,-u)||0)),p&&O_(nr(a),p),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-wt&&!u?l:i<wt?0:i,f,d,g,_,p,m,S,y,b;if(!c)l1(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,o);if(f=un(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===un(h/_)&&(f=c,g--),f>c&&(f=c)),m=this._yoyo&&g&1,m&&(b=this._yEase,f=c-f),p=Bo(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(y&&this._yEase&&Z_(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(un(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(U_(this,u?i:f,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(b||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!a&&!r&&!g&&(ni(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Uh(this,i,r,o),ni(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&ni(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Uh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Xr(this,1),!r&&!(u&&!a)&&(h||a||m)&&(ni(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){ja||ei.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Vf(this,c),u=this._ease(c/this._dur),A1(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(Zc(this,0),this.parent||F_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ca(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Dr&&Dr.vars.overwrite!==!0)._first||ca(this),this.parent&&o!==this.timeline.totalDuration()&&ko(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?xi(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,p,m;if((!r||r==="all")&&r1(a,l))return r==="all"&&(this._pt=0),ca(this);for(h=this._op=this._op||[],r!=="all"&&(fn(r)&&(_={},Wn(r,function(S){return _[S]=1}),r=_),r=D1(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],r==="all"?(h[m]=r,g=f,d={}):(d=h[m]=h[m]||{},g=r);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&$c(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&ca(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Ta(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return Ta(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Ut.killTweensOf(i,r,o)},e}(Ya);bi($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wn("staggerTo,staggerFrom,staggerFromTo",function(s){$t[s]=function(){var e=new In,t=kh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Gf=function(e,t,n){return e[t]=n},i0=function(e,t,n){return e[t](n)},R1=function(e,t,n,i){return e[t](i.fp,n)},P1=function(e,t,n){return e.setAttribute(t,n)},Wf=function(e,t){return Ht(e[t])?i0:Ff(e[t])&&e.setAttribute?P1:Gf},r0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},L1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},s0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Xf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},I1=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},F1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?$c(this,t,"_pt"):t.dep||(n=1),t=i;return!n},N1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},o0=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Xn=function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||r0,this.d=l||this,this.set=c||Gf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=N1,this.m=n,this.mt=r,this.tween=i},s}();Wn(kf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Bf[s]=1});ri.TweenMax=ri.TweenLite=$t;ri.TimelineLite=ri.TimelineMax=In;Ut=new In({sortChildren:!1,defaults:Uo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ii.stringFilter=$_;var xs=[],ac={},O1=[],Cm=0,U1=0,th=function(e){return(ac[e]||O1).map(function(t){return t()})},Gh=function(){var e=Date.now(),t=[];e-Cm>2&&(th("matchMediaInit"),xs.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Ii.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),th("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Cm=e,th("matchMedia"))},a0=function(){function s(t,n){this.selector=n&&zh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=U1++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Ht(n)&&(r=i,i=n,n=Ht);var o=this,a=function(){var c=It,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=zh(r)),It=o,h=i.apply(o,arguments),Ht(h)&&o._r.push(h),It=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ht?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=It;It=null,n(this),It=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof $t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof In?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof $t)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=xs.length;o--;)xs[o].id===this.id&&xs.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),B1=function(){function s(t){this.contexts=[],this.scope=t,It&&It.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Wi(n)||(n={matches:n});var o=new a0(0,r||this.scope),a=o.conditions={},l,c,u;It&&!o.selector&&(o.selector=It.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ii.matchMedia(n[c]),l&&(xs.indexOf(o)<0&&xs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Gh):l.addEventListener("change",Gh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Rc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return j_(i)})},timeline:function(e){return new In(e)},getTweensOf:function(e,t){return Ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){fn(e)&&(e=xi(e)[0]);var r=gs(e||{}).get,o=n?I_:L_;return n==="native"&&(n=""),e&&(t?o((Qn[t]&&Qn[t].get||r)(e,t,n,i)):function(a,l,c){return o((Qn[a]&&Qn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=xi(e),e.length>1){var i=e.map(function(u){return Yn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=Qn[t],a=gs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;fo._pt=0,h.init(e,n?u+n:u,fo,0,[e]),h.render(1,h),fo._pt&&Xf(1,fo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Yn.to(e,Ts((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return Ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vs(e.ease,Uo.ease)),Mm(Uo,e||{})},config:function(e){return Mm(ii,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Qn[a]&&!ri[a]&&Ga(t+" effect requires "+a+" plugin.")}),Zu[t]=function(a,l,c){return n(xi(a),bi(l||{},r),c)},o&&(In.prototype[t]=function(a,l,c){return this.add(Zu[t](a,Wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=vs(t)},parseEase:function(e,t){return arguments.length?vs(e,t):ft},getById:function(e){return Ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new In(e),i,r;for(n.smoothChildTiming=Gn(e.smoothChildTiming),Ut.remove(n),n._dp=0,n._time=n._tTime=Ut._time,i=Ut._first;i;)r=i._next,(t||!(!i._dur&&i instanceof $t&&i.vars.onComplete===i._targets[0]))&&Ui(n,i,i._start-i._delay),i=r;return Ui(Ut,n,0),n},context:function(e,t){return e?new a0(e,t):It},matchMedia:function(e){return new B1(e)},matchMediaRefresh:function(){return xs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Gh()},addEventListener:function(e,t){var n=ac[e]||(ac[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ac[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:g1,wrapYoyo:_1,distribute:z_,random:V_,snap:H_,normalize:m1,getUnit:yn,clamp:h1,splitColor:Y_,toArray:xi,selector:zh,mapRange:W_,pipe:d1,unitize:p1,interpolate:v1,shuffle:k_},install:A_,effects:Zu,ticker:ei,updateRoot:In.updateRoot,plugins:Qn,globalTimeline:Ut,core:{PropTween:Xn,globals:D_,Tween:$t,Timeline:In,Animation:Ya,getCache:gs,_removeLinkedListItem:$c,reverting:function(){return bn},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return If=e}}};Wn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Rc[s]=$t[s]});ei.add(In.updateRoot);fo=Rc.to({},{duration:0});var k1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},z1=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=k1(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},nh=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(fn(r)&&(l={},Wn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}z1(a,r)}}}},Yn=Rc.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)bn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},nh("roundProps",Hh),nh("modifiers"),nh("snap",H_))||Rc;$t.version=In.version=Yn.version="3.12.5";w_=1;Nf()&&zo();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Rm,Cr,yo,jf,fs,Pm,Yf,H1=function(){return typeof window<"u"},dr={},os=180/Math.PI,So=Math.PI/180,io=Math.atan2,Lm=1e8,qf=/([A-Z])/g,V1=/(left|right|width|margin|padding|x)/i,G1=/[\s,\(]\S/,Bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},W1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},X1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},j1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},l0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},c0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Y1=function(e,t,n){return e.style[t]=n},q1=function(e,t,n){return e.style.setProperty(t,n)},$1=function(e,t,n){return e._gsap[t]=n},K1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Z1=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},J1=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},kt="transform",jn=kt+"Origin",Q1=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in dr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Bi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ir(i,a)}):this.tfm[e]=o.x?o[e]:ir(i,e),e===jn&&(this.tfm.zOrigin=o.zOrigin);else return Bi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(kt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(jn,t,"")),e=kt}(r||t)&&this.props.push(e,t,r[e])},u0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},eD=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(qf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Yf(),(!r||!r.isStart)&&!n[kt]&&(u0(n),i.zOrigin&&n[jn]&&(n[jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},h0=function(e,t){var n={target:e,props:[],revert:eD,save:Q1};return e._gsap||Yn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},f0,Xh=function(e,t){var n=Cr.createElementNS?Cr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Cr.createElement(e);return n&&n.style?n:Cr.createElement(e)},Hi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(qf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Ho(t)||t,1)||""},Im="O,Moz,ms,Ms,Webkit".split(","),Ho=function(e,t,n){var i=t||fs,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Im[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Im[o]:"")+e},jh=function(){H1()&&window.document&&(Rm=window,Cr=Rm.document,yo=Cr.documentElement,fs=Xh("div")||{style:{}},Xh("div"),kt=Ho(kt),jn=kt+"Origin",fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",f0=!!Ho("perspective"),Yf=Yn.core.reverting,jf=1)},ih=function s(e){var t=Xh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(yo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),yo.removeChild(t),this.style.cssText=r,o},Fm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},d0=function(e){var t;try{t=e.getBBox()}catch{t=ih.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ih||(t=ih.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Fm(e,["x","cx","x1"])||0,y:+Fm(e,["y","cy","y1"])||0,width:0,height:0}:t},p0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&d0(e))},ws=function(e,t){if(t){var n=e.style,i;t in dr&&t!==jn&&(t=kt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(qf,"-$1").toLowerCase())):n.removeAttribute(t)}},Rr=function(e,t,n,i,r,o){var a=new Xn(e._pt,t,n,0,1,o?c0:l0);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Nm={deg:1,rad:1,turn:1},tD={grid:1,flex:1},jr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=fs.style,l=V1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,p,m;if(i===o||!r||Nm[i]||Nm[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),m=e.getCTM&&p0(e),(d||o==="%")&&(dr[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Gt(d?r/g*h:r/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Cr||!_.appendChild)&&(_=Cr.body),p=_._gsap,p&&d&&p.width&&l&&p.time===ei.time&&!p.uncache)return Gt(r/p.width*h);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,g=e[u],S?e.style[t]=S:ws(e,t)}else(d||o==="%")&&!tD[Hi(_,"display")]&&(a.position=Hi(e,"position")),_===e&&(a.position="static"),_.appendChild(fs),g=fs[u],_.removeChild(fs),a.position="absolute";return l&&d&&(p=gs(_),p.time=ei.time,p.width=_[u]),Gt(f?g*r/h:g&&r?h/g*r:0)},ir=function(e,t,n,i){var r;return jf||jh(),t in Bi&&t!=="transform"&&(t=Bi[t],~t.indexOf(",")&&(t=t.split(",")[0])),dr[t]&&t!=="transform"?(r=$a(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Lc(Hi(e,jn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Pc[t]&&Pc[t](e,t,n)||Hi(e,t)||R_(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?jr(e,t,r,n)+n:r},nD=function(e,t,n,i){if(!n||n==="none"){var r=Ho(t,e,1),o=r&&Hi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Hi(e,"borderTopColor"))}var a=new Xn(this._pt,e.style,t,0,1,s0),l=0,c=0,u,h,f,d,g,_,p,m,S,y,b,w;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=Hi(e,t)||i,_?e.style[t]=_:ws(e,t)),u=[n,i],$_(u),n=u[0],i=u[1],f=n.match(ho)||[],w=i.match(ho)||[],w.length){for(;h=ho.exec(i);)p=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,b=_.substr((d+"").length),p.charAt(1)==="="&&(p=xo(d,p)+b),m=parseFloat(p),y=p.substr((m+"").length),l=ho.lastIndex-y.length,y||(y=y||ii.units[t]||b,l===i.length&&(i+=y,a.e+=y)),b!==y&&(d=jr(e,t,_,y)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?c0:l0;return M_.test(i)&&(a.e=0),this._pt=a,a},Om={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},iD=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Om[n]||n,t[1]=Om[i]||i,t.join(" ")},rD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],dr[a]&&(l=1,a=a==="transformOrigin"?jn:kt),ws(n,a);l&&(ws(n,kt),o&&(o.svg&&n.removeAttribute("transform"),$a(n,1),o.uncache=1,u0(i)))}},Pc={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Xn(e._pt,t,n,0,0,rD);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},qa=[1,0,0,1,0,0],m0={},g0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Um=function(e){var t=Hi(e,kt);return g0(t)?qa:t.substr(7).match(E_).map(Gt)},$f=function(e,t){var n=e._gsap||gs(e),i=e.style,r=Um(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?qa:r):(r===qa&&!e.offsetParent&&e!==yo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,yo.appendChild(e)),r=Um(e),l?i.display=l:ws(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):yo.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Yh=function(e,t,n,i,r,o){var a=e._gsap,l=r||$f(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],S=l[5],y=t.split(" "),b=parseFloat(y[0])||0,w=parseFloat(y[1])||0,M,T,E,x;n?l!==qa&&(T=d*p-g*_)&&(E=b*(p/T)+w*(-_/T)+(_*S-p*m)/T,x=b*(-g/T)+w*(d/T)-(d*S-g*m)/T,b=E,w=x):(M=d0(e),b=M.x+(~y[0].indexOf("%")?b/100*M.width:b),w=M.y+(~(y[1]||y[0]).indexOf("%")?w/100*M.height:w)),i||i!==!1&&a.smooth?(m=b-c,S=w-u,a.xOffset=h+(m*d+S*_)-m,a.yOffset=f+(m*g+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[jn]="0px 0px",o&&(Rr(o,a,"xOrigin",c,b),Rr(o,a,"yOrigin",u,w),Rr(o,a,"xOffset",h,a.xOffset),Rr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+w)},$a=function(e,t){var n=e._gsap||new Q_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Hi(e,jn)||"0",u,h,f,d,g,_,p,m,S,y,b,w,M,T,E,x,v,D,R,q,N,k,U,G,K,Z,I,se,le,Q,oe,_e;return u=h=f=_=p=m=S=y=b=0,d=g=1,n.svg=!!(e.getCTM&&p0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[kt]!=="none"?l[kt]:"")),i.scale=i.rotate=i.translate="none"),T=$f(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),Yh(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,T)),w=n.xOrigin||0,M=n.yOrigin||0,T!==qa&&(D=T[0],R=T[1],q=T[2],N=T[3],u=k=T[4],h=U=T[5],T.length===6?(d=Math.sqrt(D*D+R*R),g=Math.sqrt(N*N+q*q),_=D||R?io(R,D)*os:0,S=q||N?io(q,N)*os+_:0,S&&(g*=Math.abs(Math.cos(S*So))),n.svg&&(u-=w-(w*D+M*q),h-=M-(w*R+M*N))):(_e=T[6],Q=T[7],I=T[8],se=T[9],le=T[10],oe=T[11],u=T[12],h=T[13],f=T[14],E=io(_e,le),p=E*os,E&&(x=Math.cos(-E),v=Math.sin(-E),G=k*x+I*v,K=U*x+se*v,Z=_e*x+le*v,I=k*-v+I*x,se=U*-v+se*x,le=_e*-v+le*x,oe=Q*-v+oe*x,k=G,U=K,_e=Z),E=io(-q,le),m=E*os,E&&(x=Math.cos(-E),v=Math.sin(-E),G=D*x-I*v,K=R*x-se*v,Z=q*x-le*v,oe=N*v+oe*x,D=G,R=K,q=Z),E=io(R,D),_=E*os,E&&(x=Math.cos(E),v=Math.sin(E),G=D*x+R*v,K=k*x+U*v,R=R*x-D*v,U=U*x-k*v,D=G,k=K),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Gt(Math.sqrt(D*D+R*R+q*q)),g=Gt(Math.sqrt(U*U+_e*_e)),E=io(k,U),S=Math.abs(E)>2e-4?E*os:0,b=oe?1/(oe<0?-oe:oe):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!g0(Hi(e,kt)),G&&e.setAttribute("transform",G))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Gt(d),n.scaleY=Gt(g),n.rotation=Gt(_)+a,n.rotationX=Gt(p)+a,n.rotationY=Gt(m)+a,n.skewX=S+a,n.skewY=y+a,n.transformPerspective=b+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[jn]=Lc(c)),n.xOffset=n.yOffset=0,n.force3D=ii.force3D,n.renderTransform=n.svg?oD:f0?_0:sD,n.uncache=0,n},Lc=function(e){return(e=e.split(" "))[0]+" "+e[1]},rh=function(e,t,n){var i=yn(t);return Gt(parseFloat(t)+parseFloat(jr(e,"x",n+"px",i)))+i},sD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,_0(e,t)},is="0deg",sa="0px",rs=") ",_0=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,y=n.zOrigin,b="",w=m==="auto"&&e&&e!==1||m===!0;if(y&&(h!==is||u!==is)){var M=parseFloat(u)*So,T=Math.sin(M),E=Math.cos(M),x;M=parseFloat(h)*So,x=Math.cos(M),o=rh(S,o,T*x*-y),a=rh(S,a,-Math.sin(M)*-y),l=rh(S,l,E*x*-y+y)}p!==sa&&(b+="perspective("+p+rs),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(w||o!==sa||a!==sa||l!==sa)&&(b+=l!==sa||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+rs),c!==is&&(b+="rotate("+c+rs),u!==is&&(b+="rotateY("+u+rs),h!==is&&(b+="rotateX("+h+rs),(f!==is||d!==is)&&(b+="skew("+f+", "+d+rs),(g!==1||_!==1)&&(b+="scale("+g+", "+_+rs),S.style[kt]=b||"translate(0, 0)"},oD=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,y=parseFloat(o),b=parseFloat(a),w,M,T,E,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=So,c*=So,w=Math.cos(l)*h,M=Math.sin(l)*h,T=Math.sin(l-c)*-f,E=Math.cos(l-c)*f,c&&(u*=So,x=Math.tan(c-u),x=Math.sqrt(1+x*x),T*=x,E*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),w*=x,M*=x)),w=Gt(w),M=Gt(M),T=Gt(T),E=Gt(E)):(w=h,E=f,M=T=0),(y&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(y=jr(d,"x",o,"px"),b=jr(d,"y",a,"px")),(g||_||p||m)&&(y=Gt(y+g-(g*w+_*T)+p),b=Gt(b+_-(g*M+_*E)+m)),(i||r)&&(x=d.getBBox(),y=Gt(y+i/100*x.width),b=Gt(b+r/100*x.height)),x="matrix("+w+","+M+","+T+","+E+","+y+","+b+")",d.setAttribute("transform",x),S&&(d.style[kt]=x)},aD=function(e,t,n,i,r){var o=360,a=fn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?os:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Lm)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Lm)%o-~~(c/o)*o)),e._pt=f=new Xn(e._pt,t,n,i,c,W1),f.e=u,f.u="deg",e._props.push(n),f},Bm=function(e,t){for(var n in t)e[n]=t[n];return e},lD=function(e,t,n){var i=Bm({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[kt]=t,a=$a(n,1),ws(n,kt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[kt],o[kt]=t,a=$a(n,1),o[kt]=c);for(l in dr)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=yn(c),g=yn(u),h=d!==g?jr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Xn(e._pt,a,l,h,f-h,Wh),e._pt.u=g||0,e._props.push(l));Bm(a,i)};Wn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Pc[e>1?"border"+s:s]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return ir(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var v0={name:"css",register:jh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,p,m,S,y,b,w,M,T,E;jf||jh(),this.styles=this.styles||h0(e),E=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Qn[_]&&e0(_,t,n,i,e,r)))){if(d=typeof u,g=Pc[_],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Xa(u)),g)g(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",zr.lastIndex=0,zr.test(c)||(p=yn(c),m=yn(u)),m?p!==m&&(c=jr(e,_,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,i,r,0,0,_),o.push(_),E.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],fn(c)&&~c.indexOf("random(")&&(c=Xa(c)),yn(c+"")||c==="auto"||(c+=ii.units[_]||yn(ir(e,_))||""),(c+"").charAt(1)==="="&&(c=ir(e,_))):c=ir(e,_),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in Bi&&(_==="autoAlpha"&&(f===1&&ir(e,"visibility")==="hidden"&&h&&(f=0),E.push("visibility",0,a.visibility),Rr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Bi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in dr,y){if(this.styles.save(_),b||(w=e._gsap,w.renderTransform&&!t.parseTransform||$a(e,t.parseTransform),M=t.smoothOrigin!==!1&&w.smooth,b=this._pt=new Xn(this._pt,a,kt,0,1,w.renderTransform,w,0,-1),b.dep=1),_==="scale")this._pt=new Xn(this._pt,w,"scaleY",w.scaleY,(S?xo(w.scaleY,S+h):h)-w.scaleY||0,Wh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){E.push(jn,0,a[jn]),u=iD(u),w.svg?Yh(e,u,0,M,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==w.zOrigin&&Rr(this,w,"zOrigin",w.zOrigin,m),Rr(this,a,_,Lc(c),Lc(u)));continue}else if(_==="svgOrigin"){Yh(e,u,1,M,0,this);continue}else if(_ in m0){aD(this,w,_,f,S?xo(f,S+u):u);continue}else if(_==="smoothOrigin"){Rr(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){lD(this,u,e);continue}}else _ in a||(_=Ho(_)||_);if(y||(h||h===0)&&(f||f===0)&&!G1.test(u)&&_ in a)p=(c+"").substr((f+"").length),h||(h=0),m=yn(u)||(_ in ii.units?ii.units[_]:p),p!==m&&(f=jr(e,_,c,m)),this._pt=new Xn(this._pt,y?w:a,_,f,(S?xo(f,S+h):h)-f,!y&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?j1:Wh),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=X1);else if(_ in a)nD.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,r);else if(_!=="parseTransform"){Uf(_,u);continue}y||(_ in a?E.push(_,0,a[_]):E.push(_,1,c||e[_])),o.push(_)}}T&&o0(this)},render:function(e,t){if(t.tween._time||!Yf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ir,aliases:Bi,getSetter:function(e,t,n){var i=Bi[t];return i&&i.indexOf(",")<0&&(t=i),t in dr&&t!==jn&&(e._gsap.x||ir(e,"x"))?n&&Pm===n?t==="scale"?K1:$1:(Pm=n||{})&&(t==="scale"?Z1:J1):e.style&&!Ff(e.style[t])?Y1:~t.indexOf("-")?q1:Wf(e,t)},core:{_removeProperty:ws,_getMatrix:$f}};Yn.utils.checkPrefix=Ho;Yn.core.getStyleSaver=h0;(function(s,e,t,n){var i=Wn(s+","+e+","+t,function(r){dr[r]=1});Wn(e,function(r){ii.units[r]="deg",m0[r]=1}),Bi[i[13]]=s+","+e,Wn(n,function(r){var o=r.split(":");Bi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ii.units[s]="px"});Yn.registerPlugin(v0);var Et=Yn.registerPlugin(v0)||Yn;Et.core.Tween;function km(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function cD(s,e,t){return e&&km(s.prototype,e),t&&km(s,t),s}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pn,lc,ti,Pr,Lr,bo,x0,as,Aa,y0,cr,Ai,S0,b0=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},E0=1,po=[],lt=[],Vi=[],Da=Date.now,qh=function(e,t){return t},uD=function(){var e=Aa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,Vi),lt=n,Vi=i,qh=function(o,a){return t[o](a)}},Hr=function(e,t){return~Vi.indexOf(e)&&Vi[Vi.indexOf(e)+1][t]},Ca=function(e){return!!~y0.indexOf(e)},An=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},wn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Vl="scrollLeft",Gl="scrollTop",$h=function(){return cr&&cr.isPressed||lt.cache++},Ic=function(e,t){var n=function i(r){if(r||r===0){E0&&(ti.history.scrollRestoration="manual");var o=cr&&cr.isPressed;r=i.v=Math.round(r)||(cr&&cr.iOS?1:0),e(r),i.cacheID=lt.cache,o&&qh("ss",r)}else(t||lt.cache!==i.cacheID||qh("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Fn={s:Vl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ic(function(s){return arguments.length?ti.scrollTo(s,tn.sc()):ti.pageXOffset||Pr[Vl]||Lr[Vl]||bo[Vl]||0})},tn={s:Gl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fn,sc:Ic(function(s){return arguments.length?ti.scrollTo(Fn.sc(),s):ti.pageYOffset||Pr[Gl]||Lr[Gl]||bo[Gl]||0})},Bn=function(e,t){return(t&&t._ctx&&t._ctx.selector||pn.utils.toArray)(e)[0]||(typeof e=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Yr=function(e,t){var n=t.s,i=t.sc;Ca(e)&&(e=Pr.scrollingElement||Lr);var r=lt.indexOf(e),o=i===tn.sc?1:2;!~r&&(r=lt.push(e)-1),lt[r+o]||An(e,"scroll",$h);var a=lt[r+o],l=a||(lt[r+o]=Ic(Hr(e,n),!0)||(Ca(e)?i:Ic(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=pn.getProperty(e,"scrollBehavior")==="smooth"),l},Kh=function(e,t,n){var i=e,r=e,o=Da(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=Da();_||p-o>l?(r=i,i=g,a=o,o=p):n?i+=g:i=r+(g-r)/(p-a)*(o-a)},h=function(){r=i=n?0:i,a=o=0},f=function(g){var _=a,p=r,m=Da();return(g||g===0)&&g!==i&&u(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},oa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},zm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},M0=function(){Aa=pn.core.globals().ScrollTrigger,Aa&&Aa.core&&uD()},T0=function(e){return pn=e||b0(),!lc&&pn&&typeof document<"u"&&document.body&&(ti=window,Pr=document,Lr=Pr.documentElement,bo=Pr.body,y0=[ti,Pr,Lr,bo],pn.utils.clamp,S0=pn.core.context||function(){},as="onpointerenter"in bo?"pointer":"mouse",x0=Xt.isTouch=ti.matchMedia&&ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ai=Xt.eventTypes=("ontouchstart"in Lr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Lr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return E0=0},500),M0(),lc=1),lc};Fn.op=tn;lt.cache=0;var Xt=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){lc||T0(pn)||console.warn("Please gsap.registerPlugin(Observer)"),Aa||M0();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,y=n.onPress,b=n.onRelease,w=n.onRight,M=n.onLeft,T=n.onUp,E=n.onDown,x=n.onChangeX,v=n.onChangeY,D=n.onChange,R=n.onToggleX,q=n.onToggleY,N=n.onHover,k=n.onHoverEnd,U=n.onMove,G=n.ignoreCheck,K=n.isNormalizer,Z=n.onGestureStart,I=n.onGestureEnd,se=n.onWheel,le=n.onEnable,Q=n.onDisable,oe=n.onClick,_e=n.scrollSpeed,Ae=n.capture,ye=n.allowClicks,re=n.lockAxis,A=n.onLockAxis;this.target=a=Bn(a)||Lr,this.vars=n,d&&(d=pn.utils.toArray(d)),i=i||1e-9,r=r||0,g=g||1,_e=_e||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ti.getComputedStyle(bo).lineHeight)||22);var O,z,L,X,W,ie,ee,Y=this,me=0,P=0,C=n.passive||!u,j=Yr(a,Fn),ae=Yr(a,tn),ce=j(),ue=ae(),Te=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ai[0]==="pointerdown",Ee=Ca(a),Se=a.ownerDocument||Pr,Pe=[0,0,0],Ve=[0,0,0],he=0,nt=function(){return he=Da()},ke=function(Ce,Ne){return(Y.event=Ce)&&d&&~d.indexOf(Ce.target)||Ne&&Te&&Ce.pointerType!=="touch"||G&&G(Ce,Ne)},qe=function(){Y._vx.reset(),Y._vy.reset(),z.pause(),h&&h(Y)},Oe=function(){var Ce=Y.deltaX=zm(Pe),Ne=Y.deltaY=zm(Ve),ve=Math.abs(Ce)>=i,Xe=Math.abs(Ne)>=i;D&&(ve||Xe)&&D(Y,Ce,Ne,Pe,Ve),ve&&(w&&Y.deltaX>0&&w(Y),M&&Y.deltaX<0&&M(Y),x&&x(Y),R&&Y.deltaX<0!=me<0&&R(Y),me=Y.deltaX,Pe[0]=Pe[1]=Pe[2]=0),Xe&&(E&&Y.deltaY>0&&E(Y),T&&Y.deltaY<0&&T(Y),v&&v(Y),q&&Y.deltaY<0!=P<0&&q(Y),P=Y.deltaY,Ve[0]=Ve[1]=Ve[2]=0),(X||L)&&(U&&U(Y),L&&(S(Y),L=!1),X=!1),ie&&!(ie=!1)&&A&&A(Y),W&&(se(Y),W=!1),O=0},De=function(Ce,Ne,ve){Pe[ve]+=Ce,Ve[ve]+=Ne,Y._vx.update(Ce),Y._vy.update(Ne),c?O||(O=requestAnimationFrame(Oe)):Oe()},B=function(Ce,Ne){re&&!ee&&(Y.axis=ee=Math.abs(Ce)>Math.abs(Ne)?"x":"y",ie=!0),ee!=="y"&&(Pe[2]+=Ce,Y._vx.update(Ce,!0)),ee!=="x"&&(Ve[2]+=Ne,Y._vy.update(Ne,!0)),c?O||(O=requestAnimationFrame(Oe)):Oe()},ge=function(Ce){if(!ke(Ce,1)){Ce=oa(Ce,u);var Ne=Ce.clientX,ve=Ce.clientY,Xe=Ne-Y.x,We=ve-Y.y,Je=Y.isDragging;Y.x=Ne,Y.y=ve,(Je||Math.abs(Y.startX-Ne)>=r||Math.abs(Y.startY-ve)>=r)&&(S&&(L=!0),Je||(Y.isDragging=!0),B(Xe,We),Je||p&&p(Y))}},Fe=Y.onPress=function(Le){ke(Le,1)||Le&&Le.button||(Y.axis=ee=null,z.pause(),Y.isPressed=!0,Le=oa(Le),me=P=0,Y.startX=Y.x=Le.clientX,Y.startY=Y.y=Le.clientY,Y._vx.reset(),Y._vy.reset(),An(K?a:Se,Ai[1],ge,C,!0),Y.deltaX=Y.deltaY=0,y&&y(Y))},fe=Y.onRelease=function(Le){if(!ke(Le,1)){wn(K?a:Se,Ai[1],ge,!0);var Ce=!isNaN(Y.y-Y.startY),Ne=Y.isDragging,ve=Ne&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),Xe=oa(Le);!ve&&Ce&&(Y._vx.reset(),Y._vy.reset(),u&&ye&&pn.delayedCall(.08,function(){if(Da()-he>300&&!Le.defaultPrevented){if(Le.target.click)Le.target.click();else if(Se.createEvent){var We=Se.createEvent("MouseEvents");We.initMouseEvent("click",!0,!0,ti,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),Le.target.dispatchEvent(We)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,h&&Ne&&!K&&z.restart(!0),m&&Ne&&m(Y),b&&b(Y,ve)}},de=function(Ce){return Ce.touches&&Ce.touches.length>1&&(Y.isGesturing=!0)&&Z(Ce,Y.isDragging)},V=function(){return(Y.isGesturing=!1)||I(Y)},pe=function(Ce){if(!ke(Ce)){var Ne=j(),ve=ae();De((Ne-ce)*_e,(ve-ue)*_e,1),ce=Ne,ue=ve,h&&z.restart(!0)}},be=function(Ce){if(!ke(Ce)){Ce=oa(Ce,u),se&&(W=!0);var Ne=(Ce.deltaMode===1?l:Ce.deltaMode===2?ti.innerHeight:1)*g;De(Ce.deltaX*Ne,Ce.deltaY*Ne,0),h&&!K&&z.restart(!0)}},Ge=function(Ce){if(!ke(Ce)){var Ne=Ce.clientX,ve=Ce.clientY,Xe=Ne-Y.x,We=ve-Y.y;Y.x=Ne,Y.y=ve,X=!0,h&&z.restart(!0),(Xe||We)&&B(Xe,We)}},ze=function(Ce){Y.event=Ce,N(Y)},Ke=function(Ce){Y.event=Ce,k(Y)},tt=function(Ce){return ke(Ce)||oa(Ce,u)&&oe(Y)};z=Y._dc=pn.delayedCall(f||.25,qe).pause(),Y.deltaX=Y.deltaY=0,Y._vx=Kh(0,50,!0),Y._vy=Kh(0,50,!0),Y.scrollX=j,Y.scrollY=ae,Y.isDragging=Y.isGesturing=Y.isPressed=!1,S0(this),Y.enable=function(Le){return Y.isEnabled||(An(Ee?Se:a,"scroll",$h),o.indexOf("scroll")>=0&&An(Ee?Se:a,"scroll",pe,C,Ae),o.indexOf("wheel")>=0&&An(a,"wheel",be,C,Ae),(o.indexOf("touch")>=0&&x0||o.indexOf("pointer")>=0)&&(An(a,Ai[0],Fe,C,Ae),An(Se,Ai[2],fe),An(Se,Ai[3],fe),ye&&An(a,"click",nt,!0,!0),oe&&An(a,"click",tt),Z&&An(Se,"gesturestart",de),I&&An(Se,"gestureend",V),N&&An(a,as+"enter",ze),k&&An(a,as+"leave",Ke),U&&An(a,as+"move",Ge)),Y.isEnabled=!0,Le&&Le.type&&Fe(Le),le&&le(Y)),Y},Y.disable=function(){Y.isEnabled&&(po.filter(function(Le){return Le!==Y&&Ca(Le.target)}).length||wn(Ee?Se:a,"scroll",$h),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),wn(K?a:Se,Ai[1],ge,!0)),wn(Ee?Se:a,"scroll",pe,Ae),wn(a,"wheel",be,Ae),wn(a,Ai[0],Fe,Ae),wn(Se,Ai[2],fe),wn(Se,Ai[3],fe),wn(a,"click",nt,!0),wn(a,"click",tt),wn(Se,"gesturestart",de),wn(Se,"gestureend",V),wn(a,as+"enter",ze),wn(a,as+"leave",Ke),wn(a,as+"move",Ge),Y.isEnabled=Y.isPressed=Y.isDragging=!1,Q&&Q(Y))},Y.kill=Y.revert=function(){Y.disable();var Le=po.indexOf(Y);Le>=0&&po.splice(Le,1),cr===Y&&(cr=0)},po.push(Y),K&&Ca(a)&&(cr=Y),Y.enable(_)},cD(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Xt.version="3.12.5";Xt.create=function(s){return new Xt(s)};Xt.register=T0;Xt.getAll=function(){return po.slice()};Xt.getById=function(s){return po.filter(function(e){return e.vars.id===s})[0]};b0()&&pn.registerPlugin(Xt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ie,oo,ht,Ot,Ci,Ct,w0,Fc,Ka,Ra,ha,Wl,vn,Jc,Zh,Rn,Hm,Vm,ao,A0,sh,D0,Cn,Jh,C0,R0,Er,Qh,Kf,Eo,Zf,Nc,ef,oh,Xl=1,xn=Date.now,ah=xn(),Si=0,fa=0,Gm=function(e,t,n){var i=Jn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Wm=function(e,t){return t&&(!Jn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},hD=function s(){return fa&&requestAnimationFrame(s)},Xm=function(){return Jc=1},jm=function(){return Jc=0},Fi=function(e){return e},da=function(e){return Math.round(e*1e5)/1e5||0},P0=function(){return typeof window<"u"},L0=function(){return Ie||P0()&&(Ie=window.gsap)&&Ie.registerPlugin&&Ie},As=function(e){return!!~w0.indexOf(e)},I0=function(e){return(e==="Height"?Zf:ht["inner"+e])||Ci["client"+e]||Ct["client"+e]},F0=function(e){return Hr(e,"getBoundingClientRect")||(As(e)?function(){return dc.width=ht.innerWidth,dc.height=Zf,dc}:function(){return or(e)})},fD=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=Hr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?I0(r):e["client"+r])||0}},dD=function(e,t){return!t||~Vi.indexOf(e)?F0(e):function(){return dc}},ki=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Hr(e,n))?o()-F0(e)()[r]:As(e)?(Ci[n]||Ct[n])-I0(i):e[n]-e["offset"+i])},jl=function(e,t){for(var n=0;n<ao.length;n+=3)(!t||~t.indexOf(ao[n+1]))&&e(ao[n],ao[n+1],ao[n+2])},Jn=function(e){return typeof e=="string"},Nn=function(e){return typeof e=="function"},pa=function(e){return typeof e=="number"},ls=function(e){return typeof e=="object"},aa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},lh=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ro=Math.abs,N0="left",O0="top",Jf="right",Qf="bottom",ys="width",Ss="height",Pa="Right",La="Left",Ia="Top",Fa="Bottom",qt="padding",ui="margin",Vo="Width",ed="Height",en="px",hi=function(e){return ht.getComputedStyle(e)},pD=function(e){var t=hi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ym=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},or=function(e,t){var n=t&&hi(e)[Zh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ie.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Oc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},U0=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},mD=function(e){return function(t){return Ie.utils.snap(U0(e),t)}},td=function(e){var t=Ie.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},gD=function(e){return function(t,n){return td(U0(e))(t,n.direction)}},Yl=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},ln=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},an=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ql=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},qm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},$l={toggleActions:"play",anticipatePin:0},Uc={top:0,left:0,center:.5,bottom:1,right:1},cc=function(e,t){if(Jn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Uc?Uc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Kl=function(e,t,n,i,r,o,a,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,g=Ot.createElement("div"),_=As(n)||Hr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?Ct:n,S=e.indexOf("start")!==-1,y=S?c:u,b="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(b+=(i===tn?Jf:Qf)+":"+(o+parseFloat(f))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=b,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],uc(g,0,i,S),g},uc=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Vo]=1,r["border"+a+Vo]=0,r[n.p]=t+"px",Ie.set(e,r)},ot=[],tf={},Za,$m=function(){return xn()-Si>34&&(Za||(Za=requestAnimationFrame(ur)))},so=function(){(!Cn||!Cn.isPressed||Cn.startX>Ct.clientWidth)&&(lt.cache++,Cn?Za||(Za=requestAnimationFrame(ur)):ur(),Si||Cs("scrollStart"),Si=xn())},ch=function(){R0=ht.innerWidth,C0=ht.innerHeight},ma=function(){lt.cache++,!vn&&!D0&&!Ot.fullscreenElement&&!Ot.webkitFullscreenElement&&(!Jh||R0!==ht.innerWidth||Math.abs(ht.innerHeight-C0)>ht.innerHeight*.25)&&Fc.restart(!0)},Ds={},_D=[],B0=function s(){return an(ct,"scrollEnd",s)||ds(!0)},Cs=function(e){return Ds[e]&&Ds[e].map(function(t){return t()})||_D},Zn=[],k0=function(e){for(var t=0;t<Zn.length;t+=5)(!e||Zn[t+4]&&Zn[t+4].query===e)&&(Zn[t].style.cssText=Zn[t+1],Zn[t].getBBox&&Zn[t].setAttribute("transform",Zn[t+2]||""),Zn[t+3].uncache=1)},nd=function(e,t){var n;for(Rn=0;Rn<ot.length;Rn++)n=ot[Rn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Nc=!0,t&&k0(t),t||Cs("revert")},z0=function(e,t){lt.cache++,(t||!Pn)&&lt.forEach(function(n){return Nn(n)&&n.cacheID++&&(n.rec=0)}),Jn(e)&&(ht.history.scrollRestoration=Kf=e)},Pn,bs=0,Km,vD=function(){if(Km!==bs){var e=Km=bs;requestAnimationFrame(function(){return e===bs&&ds(!0)})}},H0=function(){Ct.appendChild(Eo),Zf=!Cn&&Eo.offsetHeight||ht.innerHeight,Ct.removeChild(Eo)},Zm=function(e){return Ka(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ds=function(e,t){if(Si&&!e&&!Nc){ln(ct,"scrollEnd",B0);return}H0(),Pn=ct.isRefreshing=!0,lt.forEach(function(i){return Nn(i)&&++i.cacheID&&(i.rec=i())});var n=Cs("refreshInit");A0&&ct.sort(),t||nd(),lt.forEach(function(i){Nn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ot.slice(0).forEach(function(i){return i.refresh()}),Nc=!1,ot.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),ef=1,Zm(!0),ot.forEach(function(i){var r=ki(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Zm(!1),ef=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){Nn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),z0(Kf,1),Fc.pause(),bs++,Pn=2,ur(2),ot.forEach(function(i){return Nn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Pn=ct.isRefreshing=!1,Cs("refresh")},nf=0,hc=1,Na,ur=function(e){if(e===2||!Pn&&!Nc){ct.isUpdating=!0,Na&&Na.update(0);var t=ot.length,n=xn(),i=n-ah>=50,r=t&&ot[0].scroll();if(hc=nf>r?-1:1,Pn||(nf=r),i&&(Si&&!Jc&&n-Si>200&&(Si=0,Cs("scrollEnd")),ha=ah,ah=n),hc<0){for(Rn=t;Rn-- >0;)ot[Rn]&&ot[Rn].update(0,i);hc=1}else for(Rn=0;Rn<t;Rn++)ot[Rn]&&ot[Rn].update(0,i);ct.isUpdating=!1}Za=0},rf=[N0,O0,Qf,Jf,ui+Fa,ui+Pa,ui+Ia,ui+La,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],fc=rf.concat([ys,Ss,"boxSizing","max"+Vo,"max"+ed,"position",ui,qt,qt+Ia,qt+Pa,qt+Fa,qt+La]),xD=function(e,t,n){Mo(n);var i=e._gsap;if(i.spacerIsNative)Mo(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},uh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=rf.length,o=t.style,a=e.style,l;r--;)l=rf[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Qf]=a[Jf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ys]=Oc(e,Fn)+en,o[Ss]=Oc(e,tn)+en,o[qt]=a[ui]=a[O0]=a[N0]="0",Mo(i),a[ys]=a["max"+Vo]=n[ys],a[Ss]=a["max"+ed]=n[Ss],a[qt]=n[qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},yD=/([A-Z])/g,Mo=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Ie.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(yD,"-$1").toLowerCase())}},Zl=function(e){for(var t=fc.length,n=e.style,i=[],r=0;r<t;r++)i.push(fc[r],n[fc[r]]);return i.t=e,i},SD=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},dc={left:0,top:0},Jm=function(e,t,n,i,r,o,a,l,c,u,h,f,d,g){Nn(e)&&(e=e(l)),Jn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?cc("0"+e.substr(3),n):0));var _=d?d.time():0,p,m,S;if(d&&d.seek(0),isNaN(e)||(e=+e),pa(e))d&&(e=Ie.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&uc(a,n,i,!0);else{Nn(t)&&(t=t(l));var y=(e||"0").split(" "),b,w,M,T;S=Bn(t,l)||Ct,b=or(S)||{},(!b||!b.left&&!b.top)&&hi(S).display==="none"&&(T=S.style.display,S.style.display="block",b=or(S),T?S.style.display=T:S.style.removeProperty("display")),w=cc(y[0],b[i.d]),M=cc(y[1]||"0",n),e=b[i.p]-c[i.p]-u+w+r-M,a&&uc(a,M,i,n-M<20||a._isStart&&M>20),n-=n-M}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var E=e+n,x=o._isStart;p="scroll"+i.d2,uc(o,E,i,x&&E>20||!x&&(h?Math.max(Ct[p],Ci[p]):o.parentNode[p])<=E+1),h&&(c=or(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+en))}return d&&S&&(p=or(S),d.seek(f),m=or(S),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},bD=/(webkit|moz|length|cssText|inset)/i,Qm=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===Ct){e._stOrig=r.cssText,a=hi(e);for(o in a)!+o&&!bD.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ie.core.getCache(e).uncache=1,t.appendChild(e)}},V0=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=o,o}},Jl=function(e,t,n){var i={};i[t.p]="+="+n,Ie.set(e,i)},eg=function(e,t){var n=Yr(e,t),i="_scroll"+t.p2,r=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=V0(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&ur()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ie.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},ln(e,"wheel",n.wheelHandler),ct.isTouch&&ln(e,"touchmove",n.wheelHandler),r},ct=function(){function s(t,n){oo||s.register(Ie)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Qh(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!fa){this.update=this.refresh=this.kill=Fi;return}n=Ym(Jn(n)||pa(n)||n.nodeType?{trigger:n}:n,$l);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,g=r.pinSpacing,_=r.invalidateOnRefresh,p=r.anticipatePin,m=r.onScrubComplete,S=r.onSnapComplete,y=r.once,b=r.snap,w=r.pinReparent,M=r.pinSpacer,T=r.containerAnimation,E=r.fastScrollEnd,x=r.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Fn:tn,D=!h&&h!==0,R=Bn(n.scroller||ht),q=Ie.core.getCache(R),N=As(R),k=("pinType"in n?n.pinType:Hr(R,"pinType")||N&&"fixed")==="fixed",U=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=D&&n.toggleActions.split(" "),K="markers"in n?n.markers:$l.markers,Z=N?0:parseFloat(hi(R)["border"+v.p2+Vo])||0,I=this,se=n.onRefreshInit&&function(){return n.onRefreshInit(I)},le=fD(R,N,v),Q=dD(R,N),oe=0,_e=0,Ae=0,ye=Yr(R,v),re,A,O,z,L,X,W,ie,ee,Y,me,P,C,j,ae,ce,ue,Te,Ee,Se,Pe,Ve,he,nt,ke,qe,Oe,De,B,ge,Fe,fe,de,V,pe,be,Ge,ze,Ke;if(I._startClamp=I._endClamp=!1,I._dir=v,p*=45,I.scroller=R,I.scroll=T?T.time.bind(T):ye,z=ye(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(A0=1,n.refreshPriority===-9999&&(Na=I)),q.tweenScroll=q.tweenScroll||{top:eg(R,tn),left:eg(R,Fn)},I.tweenTo=re=q.tweenScroll[v.p],I.scrubDuration=function(ve){de=pa(ve)&&ve,de?fe?fe.duration(ve):fe=Ie.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:de,paused:!0,onComplete:function(){return m&&m(I)}}):(fe&&fe.progress(1).kill(),fe=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(h),ge=0,l||(l=i.vars.id)),b&&((!ls(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in Ct.style&&Ie.set(N?[Ct,Ci]:R,{scrollBehavior:"auto"}),lt.forEach(function(ve){return Nn(ve)&&ve.target===(N?Ot.scrollingElement||Ci:R)&&(ve.smooth=!1)}),O=Nn(b.snapTo)?b.snapTo:b.snapTo==="labels"?mD(i):b.snapTo==="labelsDirectional"?gD(i):b.directional!==!1?function(ve,Xe){return td(b.snapTo)(ve,xn()-_e<500?0:Xe.direction)}:Ie.utils.snap(b.snapTo),V=b.duration||{min:.1,max:2},V=ls(V)?Ra(V.min,V.max):Ra(V,V),pe=Ie.delayedCall(b.delay||de/2||.1,function(){var ve=ye(),Xe=xn()-_e<500,We=re.tween;if((Xe||Math.abs(I.getVelocity())<10)&&!We&&!Jc&&oe!==ve){var Je=(ve-X)/j,Nt=i&&!D?i.totalProgress():Je,st=Xe?0:(Nt-Fe)/(xn()-ha)*1e3||0,Mt=Ie.utils.clamp(-Je,1-Je,ro(st/2)*st/.185),Jt=Je+(b.inertia===!1?0:Mt),At,Tt,pt=b,qn=pt.onStart,F=pt.onInterrupt,$=pt.onComplete;if(At=O(Jt,I),pa(At)||(At=Jt),Tt=Math.round(X+At*j),ve<=W&&ve>=X&&Tt!==ve){if(We&&!We._initted&&We.data<=ro(Tt-ve))return;b.inertia===!1&&(Mt=At-Je),re(Tt,{duration:V(ro(Math.max(ro(Jt-Nt),ro(At-Nt))*.185/st/.05||0)),ease:b.ease||"power3",data:ro(Tt-ve),onInterrupt:function(){return pe.restart(!0)&&F&&F(I)},onComplete:function(){I.update(),oe=ye(),i&&(fe?fe.resetTo("totalProgress",At,i._tTime/i._tDur):i.progress(At)),ge=Fe=i&&!D?i.totalProgress():I.progress,S&&S(I),$&&$(I)}},ve,Mt*j,Tt-ve-Mt*j),qn&&qn(I,re.tween)}}else I.isActive&&oe!==ve&&pe.restart(!0)}).pause()),l&&(tf[l]=I),f=I.trigger=Bn(f||d!==!0&&d),Ke=f&&f._gsap&&f._gsap.stRevert,Ke&&(Ke=Ke(I)),d=d===!0?f:Bn(d),Jn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===ui||(g=!g&&d.parentNode&&d.parentNode.style&&hi(d.parentNode).display==="flex"?!1:qt),I.pin=d,A=Ie.core.getCache(d),A.spacer?ae=A.pinState:(M&&(M=Bn(M),M&&!M.nodeType&&(M=M.current||M.nativeElement),A.spacerIsNative=!!M,M&&(A.spacerState=Zl(M))),A.spacer=Te=M||Ot.createElement("div"),Te.classList.add("pin-spacer"),l&&Te.classList.add("pin-spacer-"+l),A.pinState=ae=Zl(d)),n.force3D!==!1&&Ie.set(d,{force3D:!0}),I.spacer=Te=A.spacer,B=hi(d),nt=B[g+v.os2],Se=Ie.getProperty(d),Pe=Ie.quickSetter(d,v.a,en),uh(d,Te,B),ue=Zl(d)),K){P=ls(K)?Ym(K,qm):qm,Y=Kl("scroller-start",l,R,v,P,0),me=Kl("scroller-end",l,R,v,P,0,Y),Ee=Y["offset"+v.op.d2];var tt=Bn(Hr(R,"content")||R);ie=this.markerStart=Kl("start",l,tt,v,P,Ee,0,T),ee=this.markerEnd=Kl("end",l,tt,v,P,Ee,0,T),T&&(ze=Ie.quickSetter([ie,ee],v.a,en)),!k&&!(Vi.length&&Hr(R,"fixedMarkers")===!0)&&(pD(N?Ct:R),Ie.set([Y,me],{force3D:!0}),qe=Ie.quickSetter(Y,v.a,en),De=Ie.quickSetter(me,v.a,en))}if(T){var Le=T.vars.onUpdate,Ce=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){I.update(0,0,1),Le&&Le.apply(T,Ce||[])})}if(I.previous=function(){return ot[ot.indexOf(I)-1]},I.next=function(){return ot[ot.indexOf(I)+1]},I.revert=function(ve,Xe){if(!Xe)return I.kill(!0);var We=ve!==!1||!I.enabled,Je=vn;We!==I.isReverted&&(We&&(be=Math.max(ye(),I.scroll.rec||0),Ae=I.progress,Ge=i&&i.progress()),ie&&[ie,ee,Y,me].forEach(function(Nt){return Nt.style.display=We?"none":"block"}),We&&(vn=I,I.update(We)),d&&(!w||!I.isActive)&&(We?xD(d,Te,ae):uh(d,Te,hi(d),ke)),We||I.update(We),vn=Je,I.isReverted=We)},I.refresh=function(ve,Xe,We,Je){if(!((vn||!I.enabled)&&!Xe)){if(d&&ve&&Si){ln(s,"scrollEnd",B0);return}!Pn&&se&&se(I),vn=I,re.tween&&!We&&(re.tween.kill(),re.tween=0),fe&&fe.pause(),_&&i&&i.revert({kill:!1}).invalidate(),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Nt=le(),st=Q(),Mt=T?T.duration():ki(R,v),Jt=j<=.01,At=0,Tt=Je||0,pt=ls(We)?We.end:n.end,qn=n.endTrigger||f,F=ls(We)?We.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),$=I.pinnedContainer=n.pinnedContainer&&Bn(n.pinnedContainer,I),ne=f&&Math.max(0,ot.indexOf(I))||0,te=ne,J,Me,Ue,je,Be,He,Ye,Qe,Pt,Qt,mt,Mn,vt;for(K&&ls(We)&&(Mn=Ie.getProperty(Y,v.p),vt=Ie.getProperty(me,v.p));te--;)He=ot[te],He.end||He.refresh(0,1)||(vn=I),Ye=He.pin,Ye&&(Ye===f||Ye===d||Ye===$)&&!He.isReverted&&(Qt||(Qt=[]),Qt.unshift(He),He.revert(!0,!0)),He!==ot[te]&&(ne--,te--);for(Nn(F)&&(F=F(I)),F=Gm(F,"start",I),X=Jm(F,f,Nt,v,ye(),ie,Y,I,st,Z,k,Mt,T,I._startClamp&&"_startClamp")||(d?-.001:0),Nn(pt)&&(pt=pt(I)),Jn(pt)&&!pt.indexOf("+=")&&(~pt.indexOf(" ")?pt=(Jn(F)?F.split(" ")[0]:"")+pt:(At=cc(pt.substr(2),Nt),pt=Jn(F)?F:(T?Ie.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,X):X)+At,qn=f)),pt=Gm(pt,"end",I),W=Math.max(X,Jm(pt||(qn?"100% 0":Mt),qn,Nt,v,ye()+At,ee,me,I,st,Z,k,Mt,T,I._endClamp&&"_endClamp"))||-.001,At=0,te=ne;te--;)He=ot[te],Ye=He.pin,Ye&&He.start-He._pinPush<=X&&!T&&He.end>0&&(J=He.end-(I._startClamp?Math.max(0,He.start):He.start),(Ye===f&&He.start-He._pinPush<X||Ye===$)&&isNaN(F)&&(At+=J*(1-He.progress)),Ye===d&&(Tt+=J));if(X+=At,W+=At,I._startClamp&&(I._startClamp+=At),I._endClamp&&!Pn&&(I._endClamp=W||-.001,W=Math.min(W,ki(R,v))),j=W-X||(X-=.01)&&.001,Jt&&(Ae=Ie.utils.clamp(0,1,Ie.utils.normalize(X,W,be))),I._pinPush=Tt,ie&&At&&(J={},J[v.a]="+="+At,$&&(J[v.p]="-="+ye()),Ie.set([ie,ee],J)),d&&!(ef&&I.end>=ki(R,v)))J=hi(d),je=v===tn,Ue=ye(),Ve=parseFloat(Se(v.a))+Tt,!Mt&&W>1&&(mt=(N?Ot.scrollingElement||Ci:R).style,mt={style:mt,value:mt["overflow"+v.a.toUpperCase()]},N&&hi(Ct)["overflow"+v.a.toUpperCase()]!=="scroll"&&(mt.style["overflow"+v.a.toUpperCase()]="scroll")),uh(d,Te,J),ue=Zl(d),Me=or(d,!0),Qe=k&&Yr(R,je?Fn:tn)(),g?(ke=[g+v.os2,j+Tt+en],ke.t=Te,te=g===qt?Oc(d,v)+j+Tt:0,te&&(ke.push(v.d,te+en),Te.style.flexBasis!=="auto"&&(Te.style.flexBasis=te+en)),Mo(ke),$&&ot.forEach(function(et){et.pin===$&&et.vars.pinSpacing!==!1&&(et._subPinOffset=!0)}),k&&ye(be)):(te=Oc(d,v),te&&Te.style.flexBasis!=="auto"&&(Te.style.flexBasis=te+en)),k&&(Be={top:Me.top+(je?Ue-X:Qe)+en,left:Me.left+(je?Qe:Ue-X)+en,boxSizing:"border-box",position:"fixed"},Be[ys]=Be["max"+Vo]=Math.ceil(Me.width)+en,Be[Ss]=Be["max"+ed]=Math.ceil(Me.height)+en,Be[ui]=Be[ui+Ia]=Be[ui+Pa]=Be[ui+Fa]=Be[ui+La]="0",Be[qt]=J[qt],Be[qt+Ia]=J[qt+Ia],Be[qt+Pa]=J[qt+Pa],Be[qt+Fa]=J[qt+Fa],Be[qt+La]=J[qt+La],ce=SD(ae,Be,w),Pn&&ye(0)),i?(Pt=i._initted,sh(1),i.render(i.duration(),!0,!0),he=Se(v.a)-Ve+j+Tt,Oe=Math.abs(j-he)>1,k&&Oe&&ce.splice(ce.length-2,2),i.render(0,!0,!0),Pt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),sh(0)):he=j,mt&&(mt.value?mt.style["overflow"+v.a.toUpperCase()]=mt.value:mt.style.removeProperty("overflow-"+v.a));else if(f&&ye()&&!T)for(Me=f.parentNode;Me&&Me!==Ct;)Me._pinOffset&&(X-=Me._pinOffset,W-=Me._pinOffset),Me=Me.parentNode;Qt&&Qt.forEach(function(et){return et.revert(!1,!0)}),I.start=X,I.end=W,z=L=Pn?be:ye(),!T&&!Pn&&(z<be&&ye(be),I.scroll.rec=0),I.revert(!1,!0),_e=xn(),pe&&(oe=-1,pe.restart(!0)),vn=0,i&&D&&(i._initted||Ge)&&i.progress()!==Ge&&i.progress(Ge||0,!0).render(i.time(),!0,!0),(Jt||Ae!==I.progress||T||_)&&(i&&!D&&i.totalProgress(T&&X<-.001&&!Ae?Ie.utils.normalize(X,W,0):Ae,!0),I.progress=Jt||(z-X)/j===Ae?0:Ae),d&&g&&(Te._pinOffset=Math.round(I.progress*he)),fe&&fe.invalidate(),isNaN(Mn)||(Mn-=Ie.getProperty(Y,v.p),vt-=Ie.getProperty(me,v.p),Jl(Y,v,Mn),Jl(ie,v,Mn-(Je||0)),Jl(me,v,vt),Jl(ee,v,vt-(Je||0))),Jt&&!Pn&&I.update(),u&&!Pn&&!C&&(C=!0,u(I),C=!1)}},I.getVelocity=function(){return(ye()-L)/(xn()-ha)*1e3||0},I.endAnimation=function(){aa(I.callbackAnimation),i&&(fe?fe.progress(1):i.paused()?D||aa(i,I.direction<0,1):aa(i,i.reversed()))},I.labelToScroll=function(ve){return i&&i.labels&&(X||I.refresh()||X)+i.labels[ve]/i.duration()*j||0},I.getTrailing=function(ve){var Xe=ot.indexOf(I),We=I.direction>0?ot.slice(0,Xe).reverse():ot.slice(Xe+1);return(Jn(ve)?We.filter(function(Je){return Je.vars.preventOverlaps===ve}):We).filter(function(Je){return I.direction>0?Je.end<=X:Je.start>=W})},I.update=function(ve,Xe,We){if(!(T&&!We&&!ve)){var Je=Pn===!0?be:I.scroll(),Nt=ve?0:(Je-X)/j,st=Nt<0?0:Nt>1?1:Nt||0,Mt=I.progress,Jt,At,Tt,pt,qn,F,$,ne;if(Xe&&(L=z,z=T?ye():Je,b&&(Fe=ge,ge=i&&!D?i.totalProgress():st)),p&&d&&!vn&&!Xl&&Si&&(!st&&X<Je+(Je-L)/(xn()-ha)*p?st=1e-4:st===1&&W>Je+(Je-L)/(xn()-ha)*p&&(st=.9999)),st!==Mt&&I.enabled){if(Jt=I.isActive=!!st&&st<1,At=!!Mt&&Mt<1,F=Jt!==At,qn=F||!!st!=!!Mt,I.direction=st>Mt?1:-1,I.progress=st,qn&&!vn&&(Tt=st&&!Mt?0:st===1?1:Mt===1?2:3,D&&(pt=!F&&G[Tt+1]!=="none"&&G[Tt+1]||G[Tt],ne=i&&(pt==="complete"||pt==="reset"||pt in i))),x&&(F||ne)&&(ne||h||!i)&&(Nn(x)?x(I):I.getTrailing(x).forEach(function(Ue){return Ue.endAnimation()})),D||(fe&&!vn&&!Xl?(fe._dp._time-fe._start!==fe._time&&fe.render(fe._dp._time-fe._start),fe.resetTo?fe.resetTo("totalProgress",st,i._tTime/i._tDur):(fe.vars.totalProgress=st,fe.invalidate().restart())):i&&i.totalProgress(st,!!(vn&&(_e||ve)))),d){if(ve&&g&&(Te.style[g+v.os2]=nt),!k)Pe(da(Ve+he*st));else if(qn){if($=!ve&&st>Mt&&W+1>Je&&Je+1>=ki(R,v),w)if(!ve&&(Jt||$)){var te=or(d,!0),J=Je-X;Qm(d,Ct,te.top+(v===tn?J:0)+en,te.left+(v===tn?0:J)+en)}else Qm(d,Te);Mo(Jt||$?ce:ue),Oe&&st<1&&Jt||Pe(Ve+(st===1&&!$?he:0))}}b&&!re.tween&&!vn&&!Xl&&pe.restart(!0),a&&(F||y&&st&&(st<1||!oh))&&Ka(a.targets).forEach(function(Ue){return Ue.classList[Jt||y?"add":"remove"](a.className)}),o&&!D&&!ve&&o(I),qn&&!vn?(D&&(ne&&(pt==="complete"?i.pause().totalProgress(1):pt==="reset"?i.restart(!0).pause():pt==="restart"?i.restart(!0):i[pt]()),o&&o(I)),(F||!oh)&&(c&&F&&lh(I,c),U[Tt]&&lh(I,U[Tt]),y&&(st===1?I.kill(!1,1):U[Tt]=0),F||(Tt=st===1?1:3,U[Tt]&&lh(I,U[Tt]))),E&&!Jt&&Math.abs(I.getVelocity())>(pa(E)?E:2500)&&(aa(I.callbackAnimation),fe?fe.progress(1):aa(i,pt==="reverse"?1:!st,1))):D&&o&&!vn&&o(I)}if(De){var Me=T?Je/T.duration()*(T._caScrollDist||0):Je;qe(Me+(Y._isFlipped?1:0)),De(Me)}ze&&ze(-Je/T.duration()*(T._caScrollDist||0))}},I.enable=function(ve,Xe){I.enabled||(I.enabled=!0,ln(R,"resize",ma),N||ln(R,"scroll",so),se&&ln(s,"refreshInit",se),ve!==!1&&(I.progress=Ae=0,z=L=oe=ye()),Xe!==!1&&I.refresh())},I.getTween=function(ve){return ve&&re?re.tween:fe},I.setPositions=function(ve,Xe,We,Je){if(T){var Nt=T.scrollTrigger,st=T.duration(),Mt=Nt.end-Nt.start;ve=Nt.start+Mt*ve/st,Xe=Nt.start+Mt*Xe/st}I.refresh(!1,!1,{start:Wm(ve,We&&!!I._startClamp),end:Wm(Xe,We&&!!I._endClamp)},Je),I.update()},I.adjustPinSpacing=function(ve){if(ke&&ve){var Xe=ke.indexOf(v.d)+1;ke[Xe]=parseFloat(ke[Xe])+ve+en,ke[1]=parseFloat(ke[1])+ve+en,Mo(ke)}},I.disable=function(ve,Xe){if(I.enabled&&(ve!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,Xe||fe&&fe.pause(),be=0,A&&(A.uncache=1),se&&an(s,"refreshInit",se),pe&&(pe.pause(),re.tween&&re.tween.kill()&&(re.tween=0)),!N)){for(var We=ot.length;We--;)if(ot[We].scroller===R&&ot[We]!==I)return;an(R,"resize",ma),N||an(R,"scroll",so)}},I.kill=function(ve,Xe){I.disable(ve,Xe),fe&&!Xe&&fe.kill(),l&&delete tf[l];var We=ot.indexOf(I);We>=0&&ot.splice(We,1),We===Rn&&hc>0&&Rn--,We=0,ot.forEach(function(Je){return Je.scroller===I.scroller&&(We=1)}),We||Pn||(I.scroll.rec=0),i&&(i.scrollTrigger=null,ve&&i.revert({kill:!1}),Xe||i.kill()),ie&&[ie,ee,Y,me].forEach(function(Je){return Je.parentNode&&Je.parentNode.removeChild(Je)}),Na===I&&(Na=0),d&&(A&&(A.uncache=1),We=0,ot.forEach(function(Je){return Je.pin===d&&We++}),We||(A.spacer=0)),n.onKill&&n.onKill(I)},ot.push(I),I.enable(!1,!1),Ke&&Ke(I),i&&i.add&&!j){var Ne=I.update;I.update=function(){I.update=Ne,X||W||I.refresh()},Ie.delayedCall(.01,I.update),j=.01,X=W=0}else I.refresh();d&&vD()},s.register=function(n){return oo||(Ie=n||L0(),P0()&&window.document&&s.enable(),oo=fa),oo},s.defaults=function(n){if(n)for(var i in n)$l[i]=n[i];return $l},s.disable=function(n,i){fa=0,ot.forEach(function(o){return o[i?"kill":"disable"](n)}),an(ht,"wheel",so),an(Ot,"scroll",so),clearInterval(Wl),an(Ot,"touchcancel",Fi),an(Ct,"touchstart",Fi),Yl(an,Ot,"pointerdown,touchstart,mousedown",Xm),Yl(an,Ot,"pointerup,touchend,mouseup",jm),Fc.kill(),jl(an);for(var r=0;r<lt.length;r+=3)ql(an,lt[r],lt[r+1]),ql(an,lt[r],lt[r+2])},s.enable=function(){if(ht=window,Ot=document,Ci=Ot.documentElement,Ct=Ot.body,Ie&&(Ka=Ie.utils.toArray,Ra=Ie.utils.clamp,Qh=Ie.core.context||Fi,sh=Ie.core.suppressOverwrites||Fi,Kf=ht.history.scrollRestoration||"auto",nf=ht.pageYOffset,Ie.core.globals("ScrollTrigger",s),Ct)){fa=1,Eo=document.createElement("div"),Eo.style.height="100vh",Eo.style.position="absolute",H0(),hD(),Xt.register(Ie),s.isTouch=Xt.isTouch,Er=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Jh=Xt.isTouch===1,ln(ht,"wheel",so),w0=[ht,Ot,Ci,Ct],Ie.matchMedia?(s.matchMedia=function(l){var c=Ie.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Ie.addEventListener("matchMediaInit",function(){return nd()}),Ie.addEventListener("matchMediaRevert",function(){return k0()}),Ie.addEventListener("matchMedia",function(){ds(0,1),Cs("matchMedia")}),Ie.matchMedia("(orientation: portrait)",function(){return ch(),ch})):console.warn("Requires GSAP 3.11.0 or later"),ch(),ln(Ot,"scroll",so);var n=Ct.style,i=n.borderTopStyle,r=Ie.core.Animation.prototype,o,a;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=or(Ct),tn.m=Math.round(o.top+tn.sc())||0,Fn.m=Math.round(o.left+Fn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Wl=setInterval($m,250),Ie.delayedCall(.5,function(){return Xl=0}),ln(Ot,"touchcancel",Fi),ln(Ct,"touchstart",Fi),Yl(ln,Ot,"pointerdown,touchstart,mousedown",Xm),Yl(ln,Ot,"pointerup,touchend,mouseup",jm),Zh=Ie.utils.checkPrefix("transform"),fc.push(Zh),oo=xn(),Fc=Ie.delayedCall(.2,ds).pause(),ao=[Ot,"visibilitychange",function(){var l=ht.innerWidth,c=ht.innerHeight;Ot.hidden?(Hm=l,Vm=c):(Hm!==l||Vm!==c)&&ma()},Ot,"DOMContentLoaded",ds,ht,"load",ds,ht,"resize",ma],jl(ln),ot.forEach(function(l){return l.enable(0,1)}),a=0;a<lt.length;a+=3)ql(an,lt[a],lt[a+1]),ql(an,lt[a],lt[a+2])}},s.config=function(n){"limitCallbacks"in n&&(oh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Wl)||(Wl=i)&&setInterval($m,i),"ignoreMobileResize"in n&&(Jh=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(jl(an)||jl(ln,n.autoRefreshEvents||"none"),D0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Bn(n),o=lt.indexOf(r),a=As(r);~o&&lt.splice(o,a?6:2),i&&(a?Vi.unshift(ht,i,Ct,i,Ci,i):Vi.unshift(r,i))},s.clearMatchMedia=function(n){ot.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Jn(n)?Bn(n):n).getBoundingClientRect(),a=o[r?ys:Ss]*i||0;return r?o.right-a>0&&o.left+a<ht.innerWidth:o.bottom-a>0&&o.top+a<ht.innerHeight},s.positionInViewport=function(n,i,r){Jn(n)&&(n=Bn(n));var o=n.getBoundingClientRect(),a=o[r?ys:Ss],l=i==null?a/2:i in Uc?Uc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/ht.innerWidth:(o.top+l)/ht.innerHeight},s.killAll=function(n){if(ot.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Ds.killAll||[];Ds={},i.forEach(function(r){return r()})}},s}();ct.version="3.12.5";ct.saveStyles=function(s){return s?Ka(s).forEach(function(e){if(e&&e.style){var t=Zn.indexOf(e);t>=0&&Zn.splice(t,5),Zn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ie.core.getCache(e),Qh())}}):Zn};ct.revert=function(s,e){return nd(!s,e)};ct.create=function(s,e){return new ct(s,e)};ct.refresh=function(s){return s?ma():(oo||ct.register())&&ds(!0)};ct.update=function(s){return++lt.cache&&ur(s===!0?2:0)};ct.clearScrollMemory=z0;ct.maxScroll=function(s,e){return ki(s,e?Fn:tn)};ct.getScrollFunc=function(s,e){return Yr(Bn(s),e?Fn:tn)};ct.getById=function(s){return tf[s]};ct.getAll=function(){return ot.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ct.isScrolling=function(){return!!Si};ct.snapDirectional=td;ct.addEventListener=function(s,e){var t=Ds[s]||(Ds[s]=[]);~t.indexOf(e)||t.push(e)};ct.removeEventListener=function(s,e){var t=Ds[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ct.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ie.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),r<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Nn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Nn(r)&&(r=r(),ln(ct,"refresh",function(){return r=e.batchMax()})),Ka(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ct.create(c))}),t};var tg=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},hh=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===Ci&&s(Ct,t)},Ql={auto:1,scroll:1},ED=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Ie.core.getCache(r),a=xn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Ct&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Ql[(l=hi(r)).overflowY]||Ql[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!As(r)&&(Ql[(l=hi(r)).overflowY]||Ql[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},G0=function(e,t,n,i){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ED,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ln(Ot,Xt.eventTypes[0],ig,!1,!0)},onDisable:function(){return an(Ot,Xt.eventTypes[0],ig,!0)}})},MD=/(input|label|select|textarea)/i,ng,ig=function(e){var t=MD.test(e.target.tagName);(t||ng)&&(e._gsapAllow=!0,ng=t)},TD=function(e){ls(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=Bn(e.target)||Ci,u=Ie.core.globals().ScrollSmoother,h=u&&u.get(),f=Er&&(e.content&&Bn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Yr(c,tn),g=Yr(c,Fn),_=1,p=(Xt.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,m=0,S=Nn(i)?function(){return i(a)}:function(){return i||2.8},y,b,w=G0(c,e.type,!0,r),M=function(){return b=!1},T=Fi,E=Fi,x=function(){l=ki(c,tn),E=Ra(Er?1:0,l),n&&(T=Ra(0,ki(c,Fn))),y=bs},v=function(){f._gsap.y=da(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(b){requestAnimationFrame(M);var K=da(a.deltaY/2),Z=E(d.v-K);if(f&&Z!==d.v+d.offset){d.offset=Z-d.v;var I=da((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",f._gsap.y=I+"px",d.cacheID=lt.cache,ur()}return!0}d.offset&&v(),b=!0},R,q,N,k,U=function(){x(),R.isActive()&&R.vars.scrollY>l&&(d()>l?R.progress(1)&&d(l):R.resetTo("scrollY",l))};return f&&Ie.set(f,{y:"+=0"}),e.ignoreCheck=function(G){return Er&&G.type==="touchmove"&&D()||_>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){b=!1;var G=_;_=da((ht.visualViewport&&ht.visualViewport.scale||1)/p),R.pause(),G!==_&&hh(c,_>1.01?!0:n?!1:"x"),q=g(),N=d(),x(),y=bs},e.onRelease=e.onGestureStart=function(G,K){if(d.offset&&v(),!K)k.restart(!0);else{lt.cache++;var Z=S(),I,se;n&&(I=g(),se=I+Z*.05*-G.velocityX/.227,Z*=tg(g,I,se,ki(c,Fn)),R.vars.scrollX=T(se)),I=d(),se=I+Z*.05*-G.velocityY/.227,Z*=tg(d,I,se,ki(c,tn)),R.vars.scrollY=E(se),R.invalidate().duration(Z).play(.01),(Er&&R.vars.scrollY>=l||I>=l-1)&&Ie.to({},{onUpdate:U,duration:Z})}o&&o(G)},e.onWheel=function(){R._ts&&R.pause(),xn()-m>1e3&&(y=0,m=xn())},e.onChange=function(G,K,Z,I,se){if(bs!==y&&x(),K&&n&&g(T(I[2]===K?q+(G.startX-G.x):g()+K-I[1])),Z){d.offset&&v();var le=se[2]===Z,Q=le?N+G.startY-G.y:d()+Z-se[1],oe=E(Q);le&&Q!==oe&&(N+=oe-Q),d(oe)}(Z||K)&&ur()},e.onEnable=function(){hh(c,n?!1:"x"),ct.addEventListener("refresh",U),ln(ht,"resize",U),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){hh(c,!0),an(ht,"resize",U),ct.removeEventListener("refresh",U),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Xt(e),a.iOS=Er,Er&&!d()&&d(1),Er&&Ie.ticker.add(Fi),k=a._dc,R=Ie.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:V0(d,d(),function(){return R.pause()})},onUpdate:ur,onComplete:k.vars.onComplete}),a};ct.sort=function(s){return ot.sort(s||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};ct.observe=function(s){return new Xt(s)};ct.normalizeScroll=function(s){if(typeof s>"u")return Cn;if(s===!0&&Cn)return Cn.enable();if(s===!1){Cn&&Cn.kill(),Cn=s;return}var e=s instanceof Xt?s:TD(s);return Cn&&Cn.target===e.target&&Cn.kill(),As(e.target)&&(Cn=e),e};ct.core={_getVelocityProp:Kh,_inputObserver:G0,_scrollers:lt,_proxies:Vi,bridge:{ss:function(){Si||Cs("scrollStart"),Si=xn()},ref:function(){return vn}}};L0()&&Ie.registerPlugin(ct);/*!
 * strings: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wD=/(?:^\s+|\s+$)/g,AD=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function W0(s){var e=s.nodeType,t="";if(e===1||e===9||e===11){if(typeof s.textContent=="string")return s.textContent;for(s=s.firstChild;s;s=s.nextSibling)t+=W0(s)}else if(e===3||e===4)return s.nodeValue;return t}function sf(s,e,t,n){for(var i=s.firstChild,r=[],o;i;)i.nodeType===3?(o=(i.nodeValue+"").replace(/^\n+/g,""),n||(o=o.replace(/\s+/g," ")),r.push.apply(r,X0(o,e,t,n))):(i.nodeName+"").toLowerCase()==="br"?r[r.length-1]+="<br>":r.push(i.outerHTML),i=i.nextSibling;for(o=r.length;o--;)r[o]==="&"&&r.splice(o,1,"&amp;");return r}function X0(s,e,t,n){if(s+="",t&&(s=s.trim?s.trim():s.replace(wD,"")),e&&e!=="")return s.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(e);for(var i=[],r=s.length,o=0,a,l;o<r;o++)l=s.charAt(o),(l.charCodeAt(0)>=55296&&l.charCodeAt(0)<=56319||s.charCodeAt(o+1)>=65024&&s.charCodeAt(o+1)<=65039)&&(a=((s.substr(o,12).split(AD)||[])[1]||"").length||2,l=s.substr(o,a),i.emoji=1,o+=a-1),i.push(l===">"?"&gt;":l==="<"?"&lt;":n&&l===" "&&(s.charAt(o-1)===" "||s.charAt(o+1)===" ")?"&nbsp;":l);return i}/*!
 * TextPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ga,ec,DD=function(){return ga||typeof window<"u"&&(ga=window.gsap)&&ga.registerPlugin&&ga},nl={version:"3.12.5",name:"text",init:function(e,t,n){typeof t!="object"&&(t={value:t});var i=e.nodeName.toUpperCase(),r=this,o=t,a=o.newClass,l=o.oldClass,c=o.preserveSpaces,u=o.rtl,h=r.delimiter=t.delimiter||"",f=r.fillChar=t.fillChar||(t.padSpace?"&nbsp;":""),d,g,_,p,m,S,y,b;if(r.svg=e.getBBox&&(i==="TEXT"||i==="TSPAN"),!("innerHTML"in e)&&!r.svg)return!1;if(r.target=e,!("value"in t)){r.text=r.original=[""];return}for(_=sf(e,h,!1,c),ec||(ec=document.createElement("div")),ec.innerHTML=t.value,g=sf(ec,h,!1,c),r.from=n._from,(r.from||u)&&!(u&&r.from)&&(i=_,_=g,g=i),r.hasClass=!!(a||l),r.newClass=u?l:a,r.oldClass=u?a:l,i=_.length-g.length,d=i<0?_:g,i<0&&(i=-i);--i>-1;)d.push(f);if(t.type==="diff"){for(p=0,m=[],S=[],y="",i=0;i<g.length;i++)b=g[i],b===_[i]?y+=b:(m[p]=y+b,S[p++]=y+_[i],y="");g=m,_=S,y&&(g.push(y),_.push(y))}t.speed&&n.duration(Math.min(.05/t.speed*d.length,t.maxDuration||9999)),r.rtl=u,r.original=_,r.text=g,r._props.push("text")},render:function(e,t){e>1?e=1:e<0&&(e=0),t.from&&(e=1-e);var n=t.text,i=t.hasClass,r=t.newClass,o=t.oldClass,a=t.delimiter,l=t.target,c=t.fillChar,u=t.original,h=t.rtl,f=n.length,d=(h?1-e:e)*f+.5|0,g,_,p;i&&e?(g=r&&d,_=o&&d!==f,p=(g?"<span class='"+r+"'>":"")+n.slice(0,d).join(a)+(g?"</span>":"")+(_?"<span class='"+o+"'>":"")+a+u.slice(d).join(a)+(_?"</span>":"")):p=n.slice(0,d).join(a)+a+u.slice(d).join(a),t.svg?l.textContent=p:l.innerHTML=c==="&nbsp;"&&~p.indexOf("  ")?p.split("  ").join("&nbsp;&nbsp;"):p}};nl.splitInnerHTML=sf;nl.emojiSafeSplit=X0;nl.getText=W0;DD()&&ga.registerPlugin(nl);/*!
 * CSSRulePlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ir,of,pc,Bc,j0=function(){return typeof window<"u"},Y0=function(){return Ir||j0()&&(Ir=window.gsap)&&Ir.registerPlugin&&Ir},rg=function(){return of||(q0(),Bc||console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")),of},q0=function(e){Ir=e||Y0(),j0()&&(pc=document),Ir&&(Bc=Ir.plugins.css,Bc&&(of=1))},$0={version:"3.12.5",name:"cssRule",init:function(e,t,n,i,r){if(!rg()||typeof e.cssText>"u")return!1;var o=e._gsProxy=e._gsProxy||pc.createElement("div");this.ss=e,this.style=o.style,o.style.cssText=e.cssText,Bc.prototype.init.call(this,o,t,n,i,r)},render:function(e,t){for(var n=t._pt,i=t.style,r=t.ss,o;n;)n.r(e,n.d),n=n._next;for(o=i.length;--o>-1;)r[i[o]]=i[i[o]]},getRule:function(e){rg();var t=pc.all?"rules":"cssRules",n=pc.styleSheets,i=n.length,r=e.charAt(0)===":",o,a,l,c;for(e=(r?"":",")+e.split("::").join(":").toLowerCase()+",",r&&(c=[]);i--;){try{if(a=n[i][t],!a)continue;o=a.length}catch(u){console.warn(u);continue}for(;--o>-1;)if(l=a[o],l.selectorText&&(","+l.selectorText.split("::").join(":").toLowerCase()+",").indexOf(e)!==-1)if(r)c.push(l.style);else return l.style}return c},register:q0};Y0()&&Ir.registerPlugin($0);Et.defaults({ease:"ease"});Et.config({nullTargetWarn:!1,force3D:!1,autoSleep:60});Et.registerPlugin(ct,nl,$0);const Fs=new Lf({width:325,closed:!0}),Pi={},K0=document.querySelector("canvas.webgl-b"),Xi=new qg;var la=new Rt,cs=new Rt,Rs;const rr=!0,To=new _i,wo=new _i,Ft=new _i,_a=new _i,Oa=new _i;let tc;const CD=new ZT,Z0=new Iw;Z0.setDecoderPath("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/cw/draco/");const id=new QT;id.setDRACOLoader(Z0);CD.load("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/cw/urban_alley_01_1k.hdr",s=>{s.mapping=vc,Xi.environment=s});const rd=new Af().load("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/umS/pAAAAAASUVORK5CYII=",()=>{Re.uDiffuseMap.value=rd,Re.useDiffuseMap.value=!1}),Vt={width:window.innerWidth,height:window.innerHeight,pixelRatio:Math.min(window.devicePixelRatio,2)};let sg=window.innerWidth/2,og=window.innerHeight/2,J0=0,Q0=0,mc=0,gc=0;function RD(s){J0=(s.clientX-sg)*.025,Q0=(s.clientY-og)*.015,mc=(s.clientY-og)*5e-4,gc=(s.clientX-sg)*5e-4}setTimeout(()=>{document.addEventListener("mousemove",RD)},0);const Ja={mouseMfactor:1};function PD(){Et.to(Rs.position,{x:J0/200,y:Q0/200,duration:3,ease:"power4.out"}),Et.to(Rs.rotation,{x:mc/Ja.mouseMfactor,y:gc/Ja.mouseMfactor,duration:3,ease:"power4.out"}),Et.to(_a.rotation,{x:mc/2,y:gc/2,duration:3,ease:"power4.out"}),Et.to(Oa.rotation,{x:mc/2,y:gc/2,duration:3,ease:"power4.out"})}const qr=new Ln(8,Vt.width/Vt.height,.1,100);qr.position.set(0,0,-20);Xi.add(qr);const ev=new KT(qr,K0);ev.enableDamping=!0;const kn=new Yg({canvas:K0,antialias:!0,alpha:!0});kn.shadowMap.type=fg;kn.toneMapping=pg;kn.outputEncoding=Br;kn.toneMappingExposure=1;kn.setSize(Vt.width,Vt.height);kn.setPixelRatio(Vt.pixelRatio);Pi.colorA="#FFFFFF";Pi.colorB="#FFFFFF";Pi.colorC="#FFFFFF";var tv=0,nv=0,LD=0,ID=.1,FD=0,ND=0,OD=1,UD=0,BD=0;const Re={uTime:new yt(0),uTimeStrength:new yt(tv),uPositionFrequency:new yt(LD),uTimeFrequency:new yt(nv),uStrength:new yt(ID),uWarpPositionFrequency:new yt(FD),uWarpTimeFrequency:new yt(ND),uColorA:new yt(new $e(Pi.colorA)),uColorB:new yt(new $e(Pi.colorB)),uColorC:new yt(new $e(Pi.colorC)),uRidgeSharpness:new yt(OD),uWaveIntensity:new yt(UD),uBlockIntensity:new yt(BD),uColorThresholdA:new yt(.3),uColorThresholdB:new yt(.2),uColorThresholdC:new yt(.1),uColorMode:new yt(0),uShinyTipsIntensity:new yt(0),uSurfaceNoiseIntensity:new yt(.005),uSurfaceNoiseScale:new yt(0),uSurfaceNoiseAnimationSpeed:new yt(0),uShinyTipsEffect:new yt(0),uColorTransition:new yt(0),uMousePosition:new yt(new xe(1,1)),uRippleEffectIntensity:new yt(.001),uDiffuseMap:{value:rd},useDiffuseMap:{value:!1}};window.addEventListener("mousemove",s=>{const e=-(s.clientX/window.innerWidth)*2+1,t=-(s.clientY/window.innerHeight)*2+1;Et.to(Re.uMousePosition.value,{x:e,y:t,duration:3,ease:"power2.out"})});const Ns=new qc({baseMaterial:Li,vertexShader:g_,fragmentShader:WA,uniforms:Re,silent:!0,metalness:0,roughness:0,color:"#ffffff",transmission:0,ior:1.5,thickness:1.5,transparent:!1}),kD=new qc({baseMaterial:jg,vertexShader:g_,uniforms:Re,silent:!0,depthPacking:wg}),zD=new Li({color:16250871,roughness:.2,metalness:.9,transmission:0,thickness:1,envMapIntensity:1});id.load("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/cw/ab_sphere15.glb",s=>{cs=s.scene.children[0],cs.receiveShadow=!0,cs.castShadow=!0,cs.material=zD,cs.scale.set(.2,.2,.2),Oa.add(cs),Oa.position.set(0,-3,0),Xi.add(Oa)});const HD={detail:200};let kc=new Tf(.9,HD.detail);kc=JT(kc);kc.computeTangents();Rs=new dn(kc,Ns);Rs.customDepthMaterial=kD;Rs.receiveShadow=!0;Rs.castShadow=!0;var iv=-1,rv=0,VD=-3;Ft.position.set(iv,rv,VD);Ft.add(Rs);Xi.add(Ft);const GD=new gi({color:16777215,toneMapped:!1});id.load("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/cw/bcorp.glb",s=>{la=s.scene.children[0],la.material=GD,la.rotation.y=Math.PI,la.scale.set(.5,.5,.5),_a.position.set(0,-5,-4),_a.add(la),Xi.add(_a),Et.to(_a.position,{scrollTrigger:{trigger:"#triggerB",start:"top bottom",end:"bottom top",scrub:rr,markers:!0},y:"+=8",ease:"none"})});function sv(){ct.refresh()}setTimeout(sv,5e3);const il=.5;Et.fromTo(Ft.position,{x:7,y:5},{x:iv,y:rv,duration:3,delay:il,ease:"power4.out"});Et.fromTo(Re.uTimeFrequency,{value:7},{value:nv,duration:3,delay:il,ease:"power4.out"});Et.fromTo(Ft.scale,{x:.5,y:.5,z:.5},{x:1,y:1,z:1,duration:3,delay:il,ease:"power4.out"});Et.fromTo(Ft.rotation,{x:0,y:-Math.PI},{x:.2,y:.4,duration:3.2,delay:il,ease:"power4.out",onComplete:WD});Et.fromTo(Re.uTimeStrength,{value:1},{value:tv,duration:3.2,delay:il,ease:"power4.out",onComplete:sv});function WD(){Et.to(Ft.rotation,{scrollTrigger:{trigger:"#hero-group",start:"top top",end:"bottom top",scrub:rr,markers:!0},y:Math.PI,z:-Math.PI/4,ease:"none"}),Et.to(Ft.position,{scrollTrigger:{trigger:"#hero-group",start:"top top",end:"bottom top",scrub:rr,markers:!0},y:1.5,z:3,x:1.5,ease:"none",onComplete:()=>{s()}});function s(){Et.fromTo(Ft.rotation,{y:0},{scrollTrigger:{trigger:"#triggerB",start:"top bottom",end:"bottom top",scrub:rr,markers:!0},y:Math.PI*1,ease:"none"}),Et.fromTo(Ft.position,{x:0,y:-2,z:0},{scrollTrigger:{trigger:"#triggerB",start:"top bottom",end:"bottom top",scrub:rr,markers:!0},x:0,y:3,z:0,ease:"none"})}Et.to(Oa.position,{scrollTrigger:{trigger:"#model1-trigger",start:"top bottom",end:"bottom top",scrub:rr,markers:!0},y:3,z:0,x:0,ease:"none"}),Et.to(cs.rotation,{scrollTrigger:{trigger:"#model1-trigger",start:"top bottom",end:"bottom top",scrub:rr,markers:!0},y:Math.PI/2,ease:"none"})}const Sn=new l_("#ffffff",1);Sn.castShadow=!0;Sn.shadow.mapSize.set(1024,1024);Sn.shadow.camera.far=15;Sn.shadow.normalBias=.05;Sn.position.set(10,5,-10);Xi.add(Sn);const Fr={intensity:Sn.intensity,positionX:Sn.position.x,positionY:Sn.position.y,positionZ:Sn.position.z},rl={uTextTime:{value:0},uTextTimeFrequency:{value:0},uTextTimeStrength:{value:0},uTextPositionFrequency:{value:0},uTextStrength:{value:0},uTextRidgeSharpness:{value:0},uTextWaveIntensity:{value:0},uTextWarpPositionFrequency:{value:0},uTextWarpTimeFrequency:{value:0},uTextScale:{value:5}},XD=new qc({baseMaterial:gi,vertexShader:v_,fragmentShader:__,uniforms:rl,silent:!0,color:"#ffffff",toneMapped:!1,transparent:!1}),jD=new qc({baseMaterial:gi,vertexShader:v_,fragmentShader:__,uniforms:rl,silent:!0,color:"#dddddd",toneMapped:!1,transparent:!1}),YD={size:1,height:0,curveSegments:24,bevelEnabled:!1,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5},qD={size:.32,height:0,curveSegments:24,bevelEnabled:!1,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5};let ag,lg;const $D=new x_;$D.load("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/cw/SandroGrottesco_Regular.json",function(s){ag=s,ov(`WELCOME TO
COLLECTIVE
WORLD`,To,ag,YD,1.35),zc(),window.addEventListener("resize",zc)});const KD=new x_;KD.load("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/cw/HelveticaNowDisplay_Regular_Regular.json",function(s){lg=s,ov(`Change is where we play
Creative + technology powering
sustainable, accelerated growth`,wo,lg,qD,.5,jD,1),zc(),window.addEventListener("resize",zc)});function ov(s,e,t,n,i=1.35,r=null,o=null){e.clear();const a=s.split(`
`);let l=0;a.forEach((c,u)=>{const h=new qA(c,{font:t,...n}),f=new dn(h,r&&o!==null&&u>=o?r:XD);f.position.set(0,l,0),l-=i,e.rotation.y=Math.PI,e.add(f)}),Xi.add(e)}const cg=new YT,ug=new xe;function ZD(s,e){ug.set(s/window.innerWidth*2-1,-(e/window.innerHeight)*2+1),cg.setFromCamera(ug,qr);const t=cg.intersectObject(Qc);return t.length>0?t[0].point:null}const JD=new Wo(100,100),QD=new gi({color:16711680,side:fi,transparent:!0,opacity:0}),Qc=new dn(JD,QD);Xi.add(Qc);Qc.position.z=5;function zc(){tc=window.innerWidth/window.innerHeight,Qc.scale.set(20*tc,20,1);const e=ZD(0,0);if(e){const t=window.innerWidth/7400,n=window.innerHeight/1e3;To.scale.set(t/n,t/n,t/n),wo.scale.set(t/n,t/n,t/n);const i=-.1*tc,r=-.55*tc;To.position.set(e.x+i,e.y+r,e.z),wo.position.set(e.x+i,e.y+r-1,e.z),Et.fromTo(To.position,{y:e.y+r},{y:e.y+r+26,scrollTrigger:{trigger:"#trigger",start:"top top",end:"bottom bottom",scrub:rr,markers:!0},ease:"none"}),Et.fromTo(wo.position,{y:e.y+r-1},{y:e.y+r+24.5,scrollTrigger:{trigger:"#trigger",start:"top top",end:"bottom bottom",scrub:rr,markers:!0},ease:"none"})}}To.visible=!1;wo.visible=!1;Et.delayedCall(1.2,()=>{To.visible=!0,wo.visible=!0});Et.fromTo(rl.uTextTimeFrequency,{value:1},{value:.01,duration:2,ease:"power4.out",delay:1.2});Et.fromTo(rl.uTextPositionFrequency,{value:1},{value:.01,duration:2,ease:"power4.out",delay:1.2});Et.fromTo(rl.uTextStrength,{value:1},{value:.01,duration:2,ease:"power4.out",delay:1.2});Pi.uColorThresholdA=.8;Pi.uColorThresholdB=.5;Pi.uColorThresholdC=.2;const jt=Fs.addFolder("Shader Material");jt.add(Re.uPositionFrequency,"value",0,2,.001).name("Wave Frequency");jt.add(Re.uWaveIntensity,"value",0,10,.01).name("Wave Intensity");jt.add(Re.uRidgeSharpness,"value",1,5,.001).name("Wave Sharpness");jt.add(Re.uTimeStrength,"value",0,2,.001).name("Noise Strength");jt.add(Re.uTimeFrequency,"value",0,2,.001).name("Animation Speed");jt.add(Re.uStrength,"value",0,2,.001).name("Noise Strength");jt.add(Re.uWarpPositionFrequency,"value",0,2,.001).name("Noise Frequancy");jt.add(Re.uBlockIntensity,"value",0,1,.01).name("Blockiness");jt.addColor(Pi,"colorA").onChange(s=>Re.uColorA.value.set(s));jt.addColor(Pi,"colorB").onChange(s=>Re.uColorB.value.set(s));jt.add(Re.uSurfaceNoiseIntensity,"value",0,1,.005).name("Surface Noise Intensity");jt.add(Re.uSurfaceNoiseScale,"value",1,100,1).name("Surface Noise Scale");jt.add(Re.uSurfaceNoiseAnimationSpeed,"value",0,1,.01).name("Surface Noise Animation Speed");jt.add(Re.uShinyTipsIntensity,"value",0,100,.01).name("Shiny Tips Intensity");jt.add(Re.uShinyTipsEffect,"value",0,1,.01).name("Shiny Tips Control");jt.add(Ns,"metalness",0,1,.001);jt.add(Ns,"roughness",0,1,.001);jt.add(Ns,"transmission",0,1,.001);jt.add(Ns,"ior",0,10,.001);jt.add(Ns,"thickness",0,10,.001);jt.close();const sl=Fs.addFolder("Directional Light");sl.add(Fr,"intensity",0,10,.1).name("Intensity").onChange(s=>{Sn.intensity=s});sl.add(Fr,"positionX",-40,40,.1).name("Position X").onChange(s=>{Sn.position.x=s});sl.add(Fr,"positionY",-40,40,.1).name("Position Y").onChange(s=>{Sn.position.y=s});sl.add(Fr,"positionZ",-40,40,.1).name("Position Z").onChange(s=>{Sn.position.z=s});sl.close();const eu={positionX:Ft.position.x,positionY:Ft.position.y,positionZ:Ft.position.z,scale:Ft.scale.x},ol=Fs.addFolder("World Transform");ol.add(eu,"positionX",-10,10).name("Word Position X").onChange(s=>{Ft.position.x=s});ol.add(eu,"positionY",-10,10).name("Word Position Y").onChange(s=>{Ft.position.y=s});ol.add(eu,"positionZ",-10,10).name("World Position Z").onChange(s=>{Ft.position.z=s});ol.add(eu,"scale",.1,5).name("Word Scale").onChange(s=>{Ft.scale.set(s,s,s)});ol.close();const sd=Fs.addFolder("Mouse effects");sd.add(Ja,"mouseMfactor",.1,4,.2).name("Rotation Factor");sd.add(Re.uRippleEffectIntensity,"value",0,.2,.001).name("Mouse ripple strength");sd.close();Fs.add({uploadTexture:()=>{const s=document.createElement("input");s.type="file",s.accept="image/*",s.click(),s.onchange=e=>{const t=e.target.files[0];if(t){const n=new FileReader;n.onload=i=>{const o=new Af().load(i.target.result);eC(o)},n.readAsDataURL(t)}}}},"uploadTexture").name("Upload Diffuse Map");function eC(s){Re.uDiffuseMap.value=s||rd,Re.useDiffuseMap.value=!!s,Ns.needsUpdate=!0}const od=Fs.addFolder("Settings");od.add({exportSettings:()=>{const s={uniforms:{uTimeStrength:Re.uTimeStrength.value,uPositionFrequency:Re.uPositionFrequency.value,uTimeFrequency:Re.uTimeFrequency.value,uStrength:Re.uStrength.value,uWarpPositionFrequency:Re.uWarpPositionFrequency.value,uWarpTimeFrequency:Re.uWarpTimeFrequency.value,uColorA:Re.uColorA.value.getHex(),uColorB:Re.uColorB.value.getHex(),uColorC:Re.uColorC.value.getHex(),uRidgeSharpness:Re.uRidgeSharpness.value,uWaveIntensity:Re.uWaveIntensity.value,uBlockIntensity:Re.uBlockIntensity.value,uColorThresholdA:Re.uColorThresholdA.value,uColorThresholdB:Re.uColorThresholdB.value,uColorThresholdC:Re.uColorThresholdC.value,uShinyTipsIntensity:Re.uShinyTipsIntensity.value,uSurfaceNoiseIntensity:Re.uSurfaceNoiseIntensity.value,uSurfaceNoiseScale:Re.uSurfaceNoiseScale.value,uSurfaceNoiseAnimationSpeed:Re.uSurfaceNoiseAnimationSpeed.value,uShinyTipsEffect:Re.uShinyTipsEffect.value,uColorTransition:Re.uColorTransition.value},mouseEffects:{mouseMfactor:Ja.mouseMfactor},wobbleSettings:{positionX:Ft.position.x,positionY:Ft.position.y,positionZ:Ft.position.z,scale:Ft.scale.x},lightSettings:{intensity:Fr.intensity,positionX:Fr.positionX,positionY:Fr.positionY,positionZ:Fr.positionZ}},e=JSON.stringify(s),t=new Blob([e],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(t),n.download="threejs_settings.json",n.click()}},"exportSettings").name("Export Settings");od.close();const Ps=document.createElement("input");Ps.type="file";Ps.accept="application/json";Ps.style.display="none";document.body.appendChild(Ps);Ps.addEventListener("change",s=>{const e=s.target.files[0];if(e){const t=new FileReader;t.onload=n=>{const i=JSON.parse(n.target.result);Re.uTimeStrength.value=i.uniforms.uTimeStrength,Re.uPositionFrequency.value=i.uniforms.uPositionFrequency,Re.uTimeFrequency.value=i.uniforms.uTimeFrequency,Re.uStrength.value=i.uniforms.uStrength,Re.uWarpPositionFrequency.value=i.uniforms.uWarpPositionFrequency,Re.uWarpTimeFrequency.value=i.uniforms.uWarpTimeFrequency,Re.uColorA.value.setHex(i.uniforms.uColorA),Re.uColorB.value.setHex(i.uniforms.uColorB),Re.uColorC.value.setHex(i.uniforms.uColorC),Re.uRidgeSharpness.value=i.uniforms.uRidgeSharpness,Re.uWaveIntensity.value=i.uniforms.uWaveIntensity,Re.uBlockIntensity.value=i.uniforms.uBlockIntensity,Re.uColorThresholdA.value=i.uniforms.uColorThresholdA,Re.uColorThresholdB.value=i.uniforms.uColorThresholdB,Re.uColorThresholdC.value=i.uniforms.uColorThresholdC,Re.uShinyTipsIntensity.value=i.uniforms.uShinyTipsIntensity,Re.uSurfaceNoiseIntensity.value=i.uniforms.uSurfaceNoiseIntensity,Re.uSurfaceNoiseScale.value=i.uniforms.uSurfaceNoiseScale,Re.uSurfaceNoiseAnimationSpeed.value=i.uniforms.uSurfaceNoiseAnimationSpeed,Re.uShinyTipsEffect.value=i.uniforms.uShinyTipsEffect,Re.uColorTransition.value=i.uniforms.uColorTransition,Ja.mouseMfactor=i.mouseEffects.mouseMfactor,Ft.position.set(i.wobbleSettings.positionX,i.wobbleSettings.positionY,i.wobbleSettings.positionZ),Ft.scale.set(i.wobbleSettings.scale,i.wobbleSettings.scale,i.wobbleSettings.scale),Sn.intensity=i.lightSettings.intensity,Sn.position.set(i.lightSettings.positionX,i.lightSettings.positionY,i.lightSettings.positionZ),Fs.updateDisplay()},t.readAsText(e)}Ps.value=""});od.add({importSettings:()=>Ps.click()},"importSettings").name("Import Settings");window.addEventListener("resize",()=>{Vt.width=window.innerWidth,Vt.height=window.innerHeight,Vt.pixelRatio=Math.min(window.devicePixelRatio,2),qr.aspect=Vt.width/Vt.height,qr.updateProjectionMatrix(),kn.setSize(Vt.width,Vt.height),kn.setPixelRatio(Vt.pixelRatio),af.setSize(Vt.width,Vt.height)});function tC(){const s=document.createElement("canvas");s.width=256,s.height=256;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"rgba(0, 0, 255, 1)"),t.addColorStop(1,"rgba(173, 216, 230, 1)"),e.fillStyle=t,e.fillRect(0,0,256,256);const n=new hn(s);return n.needsUpdate=!0,n}const nC=tC(),iC=new Wo(100,100),rC=new gi({map:nC,side:fi}),sC=new dn(iC,rC);sC.position.z=20;const af=new Gr(Vt.width*Vt.pixelRatio,Vt.height*Vt.pixelRatio,{}),oC=`
varying vec2 v_texCoord;

void main() {
    v_texCoord = uv;
    gl_Position = vec4(position, 1.0);
}
`,aC=`
// postprocessing_fragment.glsl
precision highp float;

varying vec2 v_texCoord;
uniform sampler2D u_texture;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = v_texCoord;

    // Warp effect
    vec2 center = vec2(0.5, 0.5);
    vec2 direction = uv - center;
    float distance = length(direction);
    float warpAmount = sin(distance * 10.0 - u_time * 5.0) * 0.03;

    vec2 warpTexCoord = uv + normalize(direction) * warpAmount;

    // Chromatic aberration
    float chromaticAberrationAmount = distance * 0.02;

    vec4 colorR = texture2D(u_texture, warpTexCoord + vec2(chromaticAberrationAmount, 0.0));
    vec4 colorG = texture2D(u_texture, warpTexCoord);
    vec4 colorB = texture2D(u_texture, warpTexCoord - vec2(chromaticAberrationAmount, 0.0));

    vec4 color = vec4(colorR.r, colorG.g, colorB.b, colorG.a); // Preserve the alpha channel

    gl_FragColor = color;
}
`,lf=new Wr({vertexShader:oC,fragmentShader:aC,uniforms:{u_texture:{value:null},u_time:{value:0},u_resolution:{value:new xe(Vt.width,Vt.height)}},toneMapped:!1}),lC=new Wo(2,2),cC=new dn(lC,lf),av=new qg,uC=new Wc(-1,1,1,-1,0,1);av.add(cC);console.log("Post-processing setup complete");const hC=new UT;let cf=!1;function lv(){const s=hC.getElapsedTime();Re.uTime.value=s,cf?(kn.setRenderTarget(af),kn.clear(),kn.render(Xi,qr),kn.setRenderTarget(null),lf.uniforms.u_texture.value=af.texture,lf.uniforms.u_time.value=s,kn.render(av,uC)):kn.render(Xi,qr),PD(),ev.update(),requestAnimationFrame(lv)}lv();window.addEventListener("keydown",s=>{s.key==="p"&&(cf=!cf)});
//# sourceMappingURL=index-D8jgK8qc.js.map
