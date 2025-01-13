(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kh="160",Vr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},D0=0,Gd=1,C0=2,jm=1,Zh=2,ls=3,_s=0,kn=1,Ti=2,Vs=0,Mo=1,Wd=2,Xd=3,qd=4,R0=5,gr=100,P0=101,L0=102,Yd=103,jd=104,F0=200,I0=201,N0=202,U0=203,lh=204,ch=205,O0=206,B0=207,z0=208,k0=209,H0=210,V0=211,G0=212,W0=213,X0=214,q0=0,Y0=1,j0=2,gc=3,$0=4,K0=5,Z0=6,J0=7,$m=0,Q0=1,ev=2,Gs=0,tv=1,nv=2,iv=3,Jh=4,sv=5,rv=6,$d="attached",ov="detached",Km=300,No=301,Uo=302,za=303,uh=304,Bc=306,js=1e3,zn=1001,_c=1002,an=1003,hh=1004,sc=1005,en=1006,Zm=1007,$s=1008,Ws=1009,av=1010,lv=1011,Qh=1012,Jm=1013,Ls=1014,di=1015,fs=1016,Qm=1017,eg=1018,Er=1020,cv=1021,ui=1023,uv=1024,hv=1025,Mr=1026,Oo=1027,dv=1028,tg=1029,fv=1030,ng=1031,ig=1033,Jc=33776,Qc=33777,eu=33778,tu=33779,Kd=35840,Zd=35841,Jd=35842,Qd=35843,sg=36196,ef=37492,tf=37496,nf=37808,sf=37809,rf=37810,of=37811,af=37812,lf=37813,cf=37814,uf=37815,hf=37816,df=37817,ff=37818,pf=37819,mf=37820,gf=37821,nu=36492,_f=36494,vf=36495,pv=36283,xf=36284,yf=36285,Ef=36286,ka=2300,Bo=2301,iu=2302,Mf=2400,bf=2401,Sf=2402,mv=2500,gv=0,rg=1,dh=2,og=3e3,br=3001,_v=3200,vv=3201,ag=0,xv=1,hi="",Tt="srgb",jt="srgb-linear",ed="display-p3",zc="display-p3-linear",vc="linear",Ct="srgb",xc="rec709",yc="p3",Wr=7680,wf=519,yv=512,Ev=513,Mv=514,lg=515,bv=516,Sv=517,wv=518,Tv=519,fh=35044,Tf="300 es",ph=1035,ps=2e3,Ec=2001;class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Af=1234567;const ba=Math.PI/180,zo=180/Math.PI;function Ci(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[o&255]+gn[o>>8&255]+gn[o>>16&255]+gn[o>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function ln(o,e,t){return Math.max(e,Math.min(t,o))}function td(o,e){return(o%e+e)%e}function Av(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function Dv(o,e,t){return o!==e?(t-o)/(e-o):0}function Sa(o,e,t){return(1-t)*o+t*e}function Cv(o,e,t,n){return Sa(o,e,1-Math.exp(-t*n))}function Rv(o,e=1){return e-Math.abs(td(o,e*2)-e)}function Pv(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Lv(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Fv(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Iv(o,e){return o+Math.random()*(e-o)}function Nv(o){return o*(.5-Math.random())}function Uv(o){o!==void 0&&(Af=o);let e=Af+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ov(o){return o*ba}function Bv(o){return o*zo}function mh(o){return(o&o-1)===0&&o!==0}function zv(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Mc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function kv(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),c=s((e+n)/2),u=r((e+n)/2),d=s((e-n)/2),h=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":o.set(a*u,l*d,l*h,a*c);break;case"YZY":o.set(l*h,a*u,l*d,a*c);break;case"ZXZ":o.set(l*d,l*h,a*u,a*c);break;case"XZX":o.set(a*u,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*u,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Oi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function yt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const bo={DEG2RAD:ba,RAD2DEG:zo,generateUUID:Ci,clamp:ln,euclideanModulo:td,mapLinear:Av,inverseLerp:Dv,lerp:Sa,damp:Cv,pingpong:Rv,smoothstep:Pv,smootherstep:Lv,randInt:Fv,randFloat:Iv,randFloatSpread:Nv,seededRandom:Uv,degToRad:Ov,radToDeg:Bv,isPowerOfTwo:mh,ceilPowerOfTwo:zv,floorPowerOfTwo:Mc,setQuaternionFromProperEuler:kv,normalize:yt,denormalize:Oi};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,n,i,s,r,a,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,l,c)}set(e,t,n,i,s,r,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],v=i[1],x=i[4],E=i[7],w=i[2],S=i[5],b=i[8];return s[0]=r*_+a*v+l*w,s[3]=r*p+a*x+l*S,s[6]=r*m+a*E+l*b,s[1]=c*_+u*v+d*w,s[4]=c*p+u*x+d*S,s[7]=c*m+u*E+d*b,s[2]=h*_+f*v+g*w,s[5]=h*p+f*x+g*S,s[8]=h*m+f*E+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*a*c-n*s*u+n*a*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*r-a*c,h=a*l-u*s,f=c*s-r*l,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*r)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(r*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(su.makeScale(e,t)),this}rotate(e){return this.premultiply(su.makeRotation(-e)),this}translate(e,t){return this.premultiply(su.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const su=new ot;function cg(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ha(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Hv(){const o=Ha("canvas");return o.style.display="block",o}const Df={};function wa(o){o in Df||(Df[o]=!0,console.warn(o))}const Cf=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rf=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),al={[jt]:{transfer:vc,primaries:xc,toReference:o=>o,fromReference:o=>o},[Tt]:{transfer:Ct,primaries:xc,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[zc]:{transfer:vc,primaries:yc,toReference:o=>o.applyMatrix3(Rf),fromReference:o=>o.applyMatrix3(Cf)},[ed]:{transfer:Ct,primaries:yc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Rf),fromReference:o=>o.applyMatrix3(Cf).convertLinearToSRGB()}},Vv=new Set([jt,zc]),mt={enabled:!0,_workingColorSpace:jt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Vv.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const n=al[e].toReference,i=al[t].fromReference;return i(n(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return al[o].primaries},getTransfer:function(o){return o===hi?vc:al[o].transfer}};function So(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ru(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Xr;class ug{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xr===void 0&&(Xr=Ha("canvas")),Xr.width=e.width,Xr.height=e.height;const n=Xr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ha("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=So(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(So(t[n]/255)*255):t[n]=So(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gv=0;class hg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Ci(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(ou(i[r].image)):s.push(ou(i[r]))}else s=ou(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ou(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ug.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wv=0;class fn extends kr{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,n=zn,i=zn,s=en,r=$s,a=ui,l=Ws,c=fn.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Ci(),this.name="",this.source=new hg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===br?Tt:hi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Km)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case _c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case _c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tt?br:og}set encoding(e){wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===br?Tt:hi}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Km;fn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,i=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,E=(f+1)/2,w=(m+1)/2,S=(u+h)/4,b=(d+_)/4,D=(g+p)/4;return x>E&&x>w?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=S/n,s=b/n):E>w?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=S/i,s=D/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=b/s,i=D/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xv extends kr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(wa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===br?Tt:hi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new fn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends Xv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dg extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qv extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Yi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[r+0],f=s[r+1],g=s[r+2],_=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==f||u!==g){let p=1-a;const m=l*h+c*f+u*g+d*_,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const w=Math.sqrt(x),S=Math.atan2(w,m*v);p=Math.sin(p*S)/w,a=Math.sin(a*S)/w}const E=a*v;if(l=l*p+h*E,c=c*p+f*E,u=u*p+g*E,d=d*p+_*E,p===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[r],h=s[r+1],f=s[r+2],g=s[r+3];return e[t]=a*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-a*f,e[t+2]=c*g+u*f+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*a+i*c-s*l,this._y=i*u+r*l+s*a-n*c,this._z=s*u+r*c+n*l-i*a,this._w=r*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=r*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*i-a*n),u=2*(a*t-s*i),d=2*(s*n-r*t);return this.x=t+l*c+r*d-a*u,this.y=n+l*u+a*c-s*d,this.z=i+l*d+s*u-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return au.copy(this).projectOnVector(e),this.sub(au)}reflect(e){return this.sub(au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const au=new H,Pf=new Yi;class ys{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,_i):_i.fromBufferAttribute(s,r),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ll.copy(n.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),cl.subVectors(this.max,ea),qr.subVectors(e.a,ea),Yr.subVectors(e.b,ea),jr.subVectors(e.c,ea),Es.subVectors(Yr,qr),Ms.subVectors(jr,Yr),ir.subVectors(qr,jr);let t=[0,-Es.z,Es.y,0,-Ms.z,Ms.y,0,-ir.z,ir.y,Es.z,0,-Es.x,Ms.z,0,-Ms.x,ir.z,0,-ir.x,-Es.y,Es.x,0,-Ms.y,Ms.x,0,-ir.y,ir.x,0];return!lu(t,qr,Yr,jr,cl)||(t=[1,0,0,0,1,0,0,0,1],!lu(t,qr,Yr,jr,cl))?!1:(ul.crossVectors(Es,Ms),t=[ul.x,ul.y,ul.z],lu(t,qr,Yr,jr,cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new H,new H,new H,new H,new H,new H,new H,new H],_i=new H,ll=new ys,qr=new H,Yr=new H,jr=new H,Es=new H,Ms=new H,ir=new H,ea=new H,cl=new H,ul=new H,sr=new H;function lu(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){sr.fromArray(o,s);const a=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),l=e.dot(sr),c=t.dot(sr),u=n.dot(sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Yv=new ys,ta=new H,cu=new H;let $i=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);const t=ta.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ta,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(cu)),this.expandByPoint(ta.copy(e.center).sub(cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Ji=new H,uu=new H,hl=new H,bs=new H,hu=new H,dl=new H,du=new H;let el=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uu.copy(e).add(t).multiplyScalar(.5),hl.copy(t).sub(e).normalize(),bs.copy(this.origin).sub(uu);const s=e.distanceTo(t)*.5,r=-this.direction.dot(hl),a=bs.dot(this.direction),l=-bs.dot(hl),c=bs.lengthSq(),u=Math.abs(1-r*r);let d,h,f,g;if(u>0)if(d=r*l-a,h=r*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+r*h+2*a)+h*(r*d+h+2*l)+c}else h=s,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-r*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(r*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=r>0?-s:s,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(uu).addScaledVector(hl,h),f}intersectSphere(e,t){Ji.subVectors(e.center,this.origin);const n=Ji.dot(this.direction),i=Ji.dot(Ji)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,r=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,r=(e.min.y-h.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,n,i,s){hu.subVectors(t,e),dl.subVectors(n,e),du.crossVectors(hu,dl);let r=this.direction.dot(du),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;bs.subVectors(this.origin,e);const l=a*this.direction.dot(dl.crossVectors(bs,dl));if(l<0)return null;const c=a*this.direction.dot(hu.cross(bs));if(c<0||l+c>r)return null;const u=-a*bs.dot(du);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class at{constructor(e,t,n,i,s,r,a,l,c,u,d,h,f,g,_,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,l,c,u,d,h,f,g,_,p)}set(e,t,n,i,s,r,a,l,c,u,d,h,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$r.setFromMatrixColumn(e,0).length(),s=1/$r.setFromMatrixColumn(e,1).length(),r=1/$r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=r*u,f=r*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*a,t[4]=g*a-f,t[8]=r*c,t[1]=r*d,t[5]=r*u,t[9]=-a,t[2]=f*a-g,t[6]=_+h*a,t[10]=r*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*a,t[4]=-r*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=r*u,t[9]=_-h*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const h=r*u,f=r*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const h=r*l,f=r*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=r*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=r*l,f=r*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=r*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jv,e,$v)}lookAt(e,t,n){const i=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Ss.crossVectors(n,Yn),Ss.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Ss.crossVectors(n,Yn)),Ss.normalize(),fl.crossVectors(Yn,Ss),i[0]=Ss.x,i[4]=fl.x,i[8]=Yn.x,i[1]=Ss.y,i[5]=fl.y,i[9]=Yn.y,i[2]=Ss.z,i[6]=fl.z,i[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],x=n[7],E=n[11],w=n[15],S=i[0],b=i[4],D=i[8],y=i[12],M=i[1],U=i[5],R=i[9],N=i[13],T=i[2],L=i[6],P=i[10],k=i[14],V=i[3],G=i[7],I=i[11],Q=i[15];return s[0]=r*S+a*M+l*T+c*V,s[4]=r*b+a*U+l*L+c*G,s[8]=r*D+a*R+l*P+c*I,s[12]=r*y+a*N+l*k+c*Q,s[1]=u*S+d*M+h*T+f*V,s[5]=u*b+d*U+h*L+f*G,s[9]=u*D+d*R+h*P+f*I,s[13]=u*y+d*N+h*k+f*Q,s[2]=g*S+_*M+p*T+m*V,s[6]=g*b+_*U+p*L+m*G,s[10]=g*D+_*R+p*P+m*I,s[14]=g*y+_*N+p*k+m*Q,s[3]=v*S+x*M+E*T+w*V,s[7]=v*b+x*U+E*L+w*G,s[11]=v*D+x*R+E*P+w*I,s[15]=v*y+x*N+E*k+w*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*d-i*c*d-s*a*h+n*c*h+i*a*f-n*l*f)+_*(+t*l*f-t*c*h+s*r*h-i*r*f+i*c*u-s*l*u)+p*(+t*c*d-t*a*f-s*r*d+n*r*f+s*a*u-n*c*u)+m*(-i*a*u-t*l*d+t*a*h+i*r*d-n*r*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],v=d*p*c-_*h*c+_*l*f-a*p*f-d*l*m+a*h*m,x=g*h*c-u*p*c-g*l*f+r*p*f+u*l*m-r*h*m,E=u*_*c-g*d*c+g*a*f-r*_*f-u*a*m+r*d*m,w=g*d*l-u*_*l-g*a*h+r*_*h+u*a*p-r*d*p,S=t*v+n*x+i*E+s*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/S;return e[0]=v*b,e[1]=(_*h*s-d*p*s-_*i*f+n*p*f+d*i*m-n*h*m)*b,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*b,e[3]=(d*l*s-a*h*s-d*i*c+n*h*c+a*i*f-n*l*f)*b,e[4]=x*b,e[5]=(u*p*s-g*h*s+g*i*f-t*p*f-u*i*m+t*h*m)*b,e[6]=(g*l*s-r*p*s-g*i*c+t*p*c+r*i*m-t*l*m)*b,e[7]=(r*h*s-u*l*s+u*i*c-t*h*c-r*i*f+t*l*f)*b,e[8]=E*b,e[9]=(g*d*s-u*_*s-g*n*f+t*_*f+u*n*m-t*d*m)*b,e[10]=(r*_*s-g*a*s+g*n*c-t*_*c-r*n*m+t*a*m)*b,e[11]=(u*a*s-r*d*s-u*n*c+t*d*c+r*n*f-t*a*f)*b,e[12]=w*b,e[13]=(u*_*i-g*d*i+g*n*h-t*_*h-u*n*p+t*d*p)*b,e[14]=(g*a*i-r*_*i-g*n*l+t*_*l+r*n*p-t*a*p)*b,e[15]=(r*d*i-u*a*i+u*n*l-t*d*l-r*n*h+t*a*h)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,l=e.z,c=s*r,u=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*r,0,c*l-i*a,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,u=r+r,d=a+a,h=s*c,f=s*u,g=s*d,_=r*u,p=r*d,m=a*d,v=l*c,x=l*u,E=l*d,w=n.x,S=n.y,b=n.z;return i[0]=(1-(_+m))*w,i[1]=(f+E)*w,i[2]=(g-x)*w,i[3]=0,i[4]=(f-E)*S,i[5]=(1-(h+m))*S,i[6]=(p+v)*S,i[7]=0,i[8]=(g+x)*b,i[9]=(p-v)*b,i[10]=(1-(h+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=$r.set(i[0],i[1],i[2]).length();const r=$r.set(i[4],i[5],i[6]).length(),a=$r.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],vi.copy(this);const c=1/s,u=1/r,d=1/a;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=d,vi.elements[9]*=d,vi.elements[10]*=d,t.setFromRotationMatrix(vi),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r,a=ps){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let f,g;if(a===ps)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===Ec)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=ps){const l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(r-s),h=(t+e)*c,f=(n+i)*u;let g,_;if(a===ps)g=(r+s)*d,_=-2*d;else if(a===Ec)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $r=new H,vi=new at,jv=new H(0,0,0),$v=new H(1,1,1),Ss=new H,fl=new H,Yn=new H,Lf=new at,Ff=new Yi;class kc{constructor(e=0,t=0,n=0,i=kc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ln(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ff.setFromEuler(this),this.setFromQuaternion(Ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kc.DEFAULT_ORDER="XYZ";class fg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kv=0;const If=new H,Kr=new Yi,Qi=new at,pl=new H,na=new H,Zv=new H,Jv=new Yi,Nf=new H(1,0,0),Uf=new H(0,1,0),Of=new H(0,0,1),Qv={type:"added"},ex={type:"removed"};class Ft extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new H,t=new kc,n=new Yi,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new ot}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(Nf,e)}rotateY(e){return this.rotateOnAxis(Uf,e)}rotateZ(e){return this.rotateOnAxis(Of,e)}translateOnAxis(e,t){return If.copy(e).applyQuaternion(this.quaternion),this.position.add(If.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nf,e)}translateY(e){return this.translateOnAxis(Uf,e)}translateZ(e){return this.translateOnAxis(Of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pl.copy(e):pl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(na,pl,this.up):Qi.lookAt(pl,na,this.up),this.quaternion.setFromRotationMatrix(Qi),i&&(Qi.extractRotation(i.matrixWorld),Kr.setFromRotationMatrix(Qi),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ex)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,Zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,Jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),d=r(e.shapes),h=r(e.skeletons),f=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ft.DEFAULT_UP=new H(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new H,es=new H,fu=new H,ts=new H,Zr=new H,Jr=new H,Bf=new H,pu=new H,mu=new H,gu=new H;let ml=!1;class Si{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xi.subVectors(e,t),i.cross(xi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xi.subVectors(i,t),es.subVectors(n,t),fu.subVectors(e,t);const r=xi.dot(xi),a=xi.dot(es),l=xi.dot(fu),c=es.dot(es),u=es.dot(fu),d=r*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,g=(r*u-a*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ts)===null?!1:ts.x>=0&&ts.y>=0&&ts.x+ts.y<=1}static getUV(e,t,n,i,s,r,a,l){return ml===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ml=!0),this.getInterpolation(e,t,n,i,s,r,a,l)}static getInterpolation(e,t,n,i,s,r,a,l){return this.getBarycoord(e,t,n,i,ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ts.x),l.addScaledVector(r,ts.y),l.addScaledVector(a,ts.z),l)}static isFrontFacing(e,t,n,i){return xi.subVectors(n,t),es.subVectors(e,t),xi.cross(es).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),es.subVectors(this.a,this.b),xi.cross(es).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ml===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ml=!0),Si.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Si.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;Zr.subVectors(i,n),Jr.subVectors(s,n),pu.subVectors(e,n);const l=Zr.dot(pu),c=Jr.dot(pu);if(l<=0&&c<=0)return t.copy(n);mu.subVectors(e,i);const u=Zr.dot(mu),d=Jr.dot(mu);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(n).addScaledVector(Zr,r);gu.subVectors(e,s);const f=Zr.dot(gu),g=Jr.dot(gu);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Jr,a);const p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Bf.subVectors(s,i),a=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(Bf,a);const m=1/(p+_+h);return r=_*m,a=h*m,t.copy(n).addScaledVector(Zr,r).addScaledVector(Jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ws={h:0,s:0,l:0},gl={h:0,s:0,l:0};function _u(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=td(e,1),t=ln(t,0,1),n=ln(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=_u(r,s,e+1/3),this.g=_u(r,s,e),this.b=_u(r,s,e-1/3)}return mt.toWorkingColorSpace(this,i),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=pg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}copyLinearToSRGB(e){return this.r=ru(e.r),this.g=ru(e.g),this.b=ru(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return mt.fromWorkingColorSpace(_n.copy(this),e),Math.round(ln(_n.r*255,0,255))*65536+Math.round(ln(_n.g*255,0,255))*256+Math.round(ln(_n.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(_n.copy(this),t);const n=_n.r,i=_n.g,s=_n.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=u<=.5?d/(r+a):d/(2-r-a),r){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Tt){mt.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,i=_n.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ws),this.setHSL(ws.h+e,ws.s+t,ws.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ws),e.getHSL(gl);const n=Sa(ws.h,gl.h,t),i=Sa(ws.s,gl.s,t),s=Sa(ws.l,gl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Je;Je.NAMES=pg;let tx=0,Gi=class extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=Mo,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=gc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(n.blending=this.blending),this.side!==_s&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lh&&(n.blendSrc=this.blendSrc),this.blendDst!==ch&&(n.blendDst=this.blendDst),this.blendEquation!==gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class Fs extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hs=nx();function nx(){const o=new ArrayBuffer(4),e=new Float32Array(o),t=new Uint32Array(o),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),r=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:r,offsetTable:a}}function ix(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=ln(o,-65504,65504),hs.floatView[0]=o;const e=hs.uint32View[0],t=e>>23&511;return hs.baseTable[t]+((e&8388607)>>hs.shiftTable[t])}function sx(o){const e=o>>10;return hs.uint32View[0]=hs.mantissaTable[hs.offsetTable[e]+(o&1023)]+hs.exponentTable[e],hs.floatView[0]}const _l={toHalfFloat:ix,fromHalfFloat:sx},Wt=new H,vl=new Ke;class pn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vl.fromBufferAttribute(this,t),vl.applyMatrix3(e),this.setXY(t,vl.x,vl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fh&&(e.usage=this.usage),e}}class mg extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gg extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class un extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rx=0;const ri=new at,vu=new Ft,Qr=new H,jn=new ys,ia=new ys,sn=new H;class bn extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cg(e)?gg:mg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ot().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return vu.lookAt(e),vu.updateMatrix(),this.applyMatrix4(vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];ia.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(jn.min,ia.min),jn.expandByPoint(sn),sn.addVectors(jn.max,ia.max),jn.expandByPoint(sn)):(jn.expandByPoint(ia.min),jn.expandByPoint(ia.max))}jn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)sn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(sn));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(Qr.fromBufferAttribute(e,c),sn.add(Qr)),i=Math.max(i,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let M=0;M<a;M++)c[M]=new H,u[M]=new H;const d=new H,h=new H,f=new H,g=new Ke,_=new Ke,p=new Ke,m=new H,v=new H;function x(M,U,R){d.fromArray(i,M*3),h.fromArray(i,U*3),f.fromArray(i,R*3),g.fromArray(r,M*2),_.fromArray(r,U*2),p.fromArray(r,R*2),h.sub(d),f.sub(d),_.sub(g),p.sub(g);const N=1/(_.x*p.y-p.x*_.y);isFinite(N)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(f,-_.y).multiplyScalar(N),v.copy(f).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(N),c[M].add(m),c[U].add(m),c[R].add(m),u[M].add(v),u[U].add(v),u[R].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let M=0,U=E.length;M<U;++M){const R=E[M],N=R.start,T=R.count;for(let L=N,P=N+T;L<P;L+=3)x(n[L+0],n[L+1],n[L+2])}const w=new H,S=new H,b=new H,D=new H;function y(M){b.fromArray(s,M*3),D.copy(b);const U=c[M];w.copy(U),w.sub(b.multiplyScalar(b.dot(U))).normalize(),S.crossVectors(D,U);const N=S.dot(u[M])<0?-1:1;l[M*4]=w.x,l[M*4+1]=w.y,l[M*4+2]=w.z,l[M*4+3]=N}for(let M=0,U=E.length;M<U;++M){const R=E[M],N=R.start,T=R.count;for(let L=N,P=N+T;L<P;L+=3)y(n[L+0]),y(n[L+1]),y(n[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new H,s=new H,r=new H,a=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),u.subVectors(r,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),u.subVectors(r,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new pn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,u=r.length;c<u;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zf=new at,rr=new el,xl=new $i,kf=new H,eo=new H,to=new H,no=new H,xu=new H,yl=new H,El=new Ke,Ml=new Ke,bl=new Ke,Hf=new H,Vf=new H,Gf=new H,Sl=new H,wl=new H;class Ut extends Ft{constructor(e=new bn,t=new Fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){yl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(xu.fromBufferAttribute(d,e),r?yl.addScaledVector(xu,u):yl.addScaledVector(xu.sub(t),u))}t.add(yl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(xl.containsPoint(rr.origin)===!1&&(rr.intersectSphere(xl,kf)===null||rr.origin.distanceToSquared(kf)>(e.far-e.near)**2))&&(zf.copy(s).invert(),rr.copy(e.ray).applyMatrix4(zf),!(n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=r[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let E=v,w=x;E<w;E+=3){const S=a.getX(E),b=a.getX(E+1),D=a.getX(E+2);i=Tl(this,m,e,n,c,u,d,S,b,D),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=a.getX(p),x=a.getX(p+1),E=a.getX(p+2);i=Tl(this,r,e,n,c,u,d,v,x,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=r[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let E=v,w=x;E<w;E+=3){const S=E,b=E+1,D=E+2;i=Tl(this,m,e,n,c,u,d,S,b,D),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=p,x=p+1,E=p+2;i=Tl(this,r,e,n,c,u,d,v,x,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function ox(o,e,t,n,i,s,r,a){let l;if(e.side===kn?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,e.side===_s,a),l===null)return null;wl.copy(a),wl.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(wl);return c<t.near||c>t.far?null:{distance:c,point:wl.clone(),object:o}}function Tl(o,e,t,n,i,s,r,a,l,c){o.getVertexPosition(a,eo),o.getVertexPosition(l,to),o.getVertexPosition(c,no);const u=ox(o,e,t,n,eo,to,no,Sl);if(u){i&&(El.fromBufferAttribute(i,a),Ml.fromBufferAttribute(i,l),bl.fromBufferAttribute(i,c),u.uv=Si.getInterpolation(Sl,eo,to,no,El,Ml,bl,new Ke)),s&&(El.fromBufferAttribute(s,a),Ml.fromBufferAttribute(s,l),bl.fromBufferAttribute(s,c),u.uv1=Si.getInterpolation(Sl,eo,to,no,El,Ml,bl,new Ke),u.uv2=u.uv1),r&&(Hf.fromBufferAttribute(r,a),Vf.fromBufferAttribute(r,l),Gf.fromBufferAttribute(r,c),u.normal=Si.getInterpolation(Sl,eo,to,no,Hf,Vf,Gf,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new H,materialIndex:0};Si.getNormal(eo,to,no,d.normal),u.face=d}return u}class Lr extends bn{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(u,3)),this.setAttribute("uv",new un(d,2));function g(_,p,m,v,x,E,w,S,b,D,y){const M=E/b,U=w/D,R=E/2,N=w/2,T=S/2,L=b+1,P=D+1;let k=0,V=0;const G=new H;for(let I=0;I<P;I++){const Q=I*U-N;for(let $=0;$<L;$++){const j=$*M-R;G[_]=j*v,G[p]=Q*x,G[m]=T,c.push(G.x,G.y,G.z),G[_]=0,G[p]=0,G[m]=S>0?1:-1,u.push(G.x,G.y,G.z),d.push($/b),d.push(1-I/D),k+=1}}for(let I=0;I<D;I++)for(let Q=0;Q<b;Q++){const $=h+Q+L*I,j=h+Q+L*(I+1),ee=h+(Q+1)+L*(I+1),he=h+(Q+1)+L*I;l.push($,j,he),l.push(j,ee,he),V+=6}a.addGroup(f,V,y),f+=V,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ko(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rn(o){const e={};for(let t=0;t<o.length;t++){const n=ko(o[t]);for(const i in n)e[i]=n[i]}return e}function ax(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function _g(o){return o.getRenderTarget()===null?o.outputColorSpace:mt.workingColorSpace}const lx={clone:ko,merge:Rn};var cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ux=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cx,this.fragmentShader=ux,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ko(e.uniforms),this.uniformsGroups=ax(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vg extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ps}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class En extends vg{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ba*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const io=-90,so=1;class hx extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new En(io,so,e,t);i.layers=this.layers,this.add(i);const s=new En(io,so,e,t);s.layers=this.layers,this.add(s);const r=new En(io,so,e,t);r.layers=this.layers,this.add(r);const a=new En(io,so,e,t);a.layers=this.layers,this.add(a);const l=new En(io,so,e,t);l.layers=this.layers,this.add(l);const c=new En(io,so,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,l]=t;for(const c of t)this.remove(c);if(e===ps)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ec)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class xg extends fn{constructor(e,t,n,i,s,r,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:No,super(e,t,n,i,s,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dx extends Pr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(wa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===br?Tt:hi),this.texture=new xg(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Lr(5,5,5),s=new Fr({name:"CubemapFromEquirect",uniforms:ko(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:Vs});s.uniforms.tEquirect.value=t;const r=new Ut(i,s),a=t.minFilter;return t.minFilter===$s&&(t.minFilter=en),new hx(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const yu=new H,fx=new H,px=new ot;class Rs{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=yu.subVectors(n,t).cross(fx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||px.getNormalMatrix(e),i=this.coplanarPoint(yu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new $i,Al=new H;class nd{constructor(e=new Rs,t=new Rs,n=new Rs,i=new Rs,s=new Rs,r=new Rs){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ps){const n=this.planes,i=e.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],v=i[13],x=i[14],E=i[15];if(n[0].setComponents(l-s,h-c,p-f,E-m).normalize(),n[1].setComponents(l+s,h+c,p+f,E+m).normalize(),n[2].setComponents(l+r,h+u,p+g,E+v).normalize(),n[3].setComponents(l-r,h-u,p-g,E-v).normalize(),n[4].setComponents(l-a,h-d,p-_,E-x).normalize(),t===ps)n[5].setComponents(l+a,h+d,p+_,E+x).normalize();else if(t===Ec)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Al.x=i.normal.x>0?e.max.x:e.min.x,Al.y=i.normal.y>0?e.max.y:e.min.y,Al.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yg(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function mx(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,h=c.usage,f=d.byteLength,g=o.createBuffer();o.bindBuffer(u,g),o.bufferData(u,d,h),c.onUploadCallback();let _;if(d instanceof Float32Array)_=o.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=o.SHORT;else if(d instanceof Uint32Array)_=o.UNSIGNED_INT;else if(d instanceof Int32Array)_=o.INT;else if(d instanceof Int8Array)_=o.BYTE;else if(d instanceof Uint8Array)_=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,d){const h=u.array,f=u._updateRange,g=u.updateRanges;if(o.bindBuffer(d,c),f.count===-1&&g.length===0&&o.bufferSubData(d,0,h),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?o.bufferSubData(d,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count):o.bufferSubData(d,m.start*h.BYTES_PER_ELEMENT,h.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}f.count!==-1&&(t?o.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):o.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,i(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:r,remove:a,update:l}}class Va extends bn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,h=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const v=m*h-r;for(let x=0;x<c;x++){const E=x*d-s;g.push(E,-v,0),_.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const x=v+c*m,E=v+c*(m+1),w=v+1+c*(m+1),S=v+1+c*m;f.push(x,E,S),f.push(E,w,S)}this.setIndex(f),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.widthSegments,e.heightSegments)}}var gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_x=`#ifdef USE_ALPHAHASH
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
#endif`,vx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mx=`#ifdef USE_AOMAP
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
#endif`,bx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sx=`#ifdef USE_BATCHING
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
#endif`,wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Tx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cx=`#ifdef USE_IRIDESCENCE
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
#endif`,Rx=`#ifdef USE_BUMPMAP
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zx=`#define PI 3.141592653589793
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
} // validated`,kx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hx=`vec3 transformedNormal = objectNormal;
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
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yx=`
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
}`,jx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ey=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ty=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iy=`#ifdef USE_GRADIENTMAP
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
}`,sy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ry=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ly=`uniform bool receiveShadow;
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
#endif`,cy=`#ifdef USE_ENVMAP
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
#endif`,uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,py=`PhysicalMaterial material;
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
#endif`,my=`struct PhysicalMaterial {
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
}`,gy=`
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
#endif`,_y=`#if defined( RE_IndirectDiffuse )
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
#endif`,vy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ey=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,My=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,by=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ty=`#if defined( USE_POINTS_UV )
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
#endif`,Ay=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ry=`#ifdef USE_MORPHNORMALS
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
#endif`,Py=`#ifdef USE_MORPHTARGETS
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
#endif`,Ly=`#ifdef USE_MORPHTARGETS
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
#endif`,Fy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Iy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,By=`#ifdef USE_NORMALMAP
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
#endif`,zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ky=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$y=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eE=`float getShadowMask() {
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
}`,tE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nE=`#ifdef USE_SKINNING
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
#endif`,iE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sE=`#ifdef USE_SKINNING
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
#endif`,rE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cE=`#ifdef USE_TRANSMISSION
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
#endif`,uE=`#ifdef USE_TRANSMISSION
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
#endif`,hE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gE=`uniform sampler2D t2D;
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
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`#include <common>
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
}`,ME=`#if DEPTH_PACKING == 3200
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
}`,bE=`#define DISTANCE
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
}`,SE=`#define DISTANCE
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
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`uniform float scale;
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
}`,DE=`uniform vec3 diffuse;
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
}`,CE=`#include <common>
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
}`,RE=`uniform vec3 diffuse;
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
}`,PE=`#define LAMBERT
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
}`,LE=`#define LAMBERT
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
}`,FE=`#define MATCAP
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
}`,IE=`#define MATCAP
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
}`,NE=`#define NORMAL
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
}`,UE=`#define NORMAL
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
}`,OE=`#define PHONG
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
}`,BE=`#define PHONG
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
}`,zE=`#define STANDARD
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
}`,kE=`#define STANDARD
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
}`,HE=`#define TOON
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
}`,VE=`#define TOON
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
}`,GE=`uniform float size;
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
}`,WE=`uniform vec3 diffuse;
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
}`,XE=`#include <common>
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
}`,qE=`uniform vec3 color;
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
}`,YE=`uniform float rotation;
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
}`,jE=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:gx,alphahash_pars_fragment:_x,alphamap_fragment:vx,alphamap_pars_fragment:xx,alphatest_fragment:yx,alphatest_pars_fragment:Ex,aomap_fragment:Mx,aomap_pars_fragment:bx,batching_pars_vertex:Sx,batching_vertex:wx,begin_vertex:Tx,beginnormal_vertex:Ax,bsdfs:Dx,iridescence_fragment:Cx,bumpmap_pars_fragment:Rx,clipping_planes_fragment:Px,clipping_planes_pars_fragment:Lx,clipping_planes_pars_vertex:Fx,clipping_planes_vertex:Ix,color_fragment:Nx,color_pars_fragment:Ux,color_pars_vertex:Ox,color_vertex:Bx,common:zx,cube_uv_reflection_fragment:kx,defaultnormal_vertex:Hx,displacementmap_pars_vertex:Vx,displacementmap_vertex:Gx,emissivemap_fragment:Wx,emissivemap_pars_fragment:Xx,colorspace_fragment:qx,colorspace_pars_fragment:Yx,envmap_fragment:jx,envmap_common_pars_fragment:$x,envmap_pars_fragment:Kx,envmap_pars_vertex:Zx,envmap_physical_pars_fragment:cy,envmap_vertex:Jx,fog_vertex:Qx,fog_pars_vertex:ey,fog_fragment:ty,fog_pars_fragment:ny,gradientmap_pars_fragment:iy,lightmap_fragment:sy,lightmap_pars_fragment:ry,lights_lambert_fragment:oy,lights_lambert_pars_fragment:ay,lights_pars_begin:ly,lights_toon_fragment:uy,lights_toon_pars_fragment:hy,lights_phong_fragment:dy,lights_phong_pars_fragment:fy,lights_physical_fragment:py,lights_physical_pars_fragment:my,lights_fragment_begin:gy,lights_fragment_maps:_y,lights_fragment_end:vy,logdepthbuf_fragment:xy,logdepthbuf_pars_fragment:yy,logdepthbuf_pars_vertex:Ey,logdepthbuf_vertex:My,map_fragment:by,map_pars_fragment:Sy,map_particle_fragment:wy,map_particle_pars_fragment:Ty,metalnessmap_fragment:Ay,metalnessmap_pars_fragment:Dy,morphcolor_vertex:Cy,morphnormal_vertex:Ry,morphtarget_pars_vertex:Py,morphtarget_vertex:Ly,normal_fragment_begin:Fy,normal_fragment_maps:Iy,normal_pars_fragment:Ny,normal_pars_vertex:Uy,normal_vertex:Oy,normalmap_pars_fragment:By,clearcoat_normal_fragment_begin:zy,clearcoat_normal_fragment_maps:ky,clearcoat_pars_fragment:Hy,iridescence_pars_fragment:Vy,opaque_fragment:Gy,packing:Wy,premultiplied_alpha_fragment:Xy,project_vertex:qy,dithering_fragment:Yy,dithering_pars_fragment:jy,roughnessmap_fragment:$y,roughnessmap_pars_fragment:Ky,shadowmap_pars_fragment:Zy,shadowmap_pars_vertex:Jy,shadowmap_vertex:Qy,shadowmask_pars_fragment:eE,skinbase_vertex:tE,skinning_pars_vertex:nE,skinning_vertex:iE,skinnormal_vertex:sE,specularmap_fragment:rE,specularmap_pars_fragment:oE,tonemapping_fragment:aE,tonemapping_pars_fragment:lE,transmission_fragment:cE,transmission_pars_fragment:uE,uv_pars_fragment:hE,uv_pars_vertex:dE,uv_vertex:fE,worldpos_vertex:pE,background_vert:mE,background_frag:gE,backgroundCube_vert:_E,backgroundCube_frag:vE,cube_vert:xE,cube_frag:yE,depth_vert:EE,depth_frag:ME,distanceRGBA_vert:bE,distanceRGBA_frag:SE,equirect_vert:wE,equirect_frag:TE,linedashed_vert:AE,linedashed_frag:DE,meshbasic_vert:CE,meshbasic_frag:RE,meshlambert_vert:PE,meshlambert_frag:LE,meshmatcap_vert:FE,meshmatcap_frag:IE,meshnormal_vert:NE,meshnormal_frag:UE,meshphong_vert:OE,meshphong_frag:BE,meshphysical_vert:zE,meshphysical_frag:kE,meshtoon_vert:HE,meshtoon_frag:VE,points_vert:GE,points_frag:WE,shadow_vert:XE,shadow_frag:qE,sprite_vert:YE,sprite_frag:jE},Ee={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ui={basic:{uniforms:Rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Rn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Rn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Rn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Rn([Ee.points,Ee.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Rn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Rn([Ee.common,Ee.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Rn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Rn([Ee.sprite,Ee.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Rn([Ee.common,Ee.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Rn([Ee.lights,Ee.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Ui.physical={uniforms:Rn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Dl={r:0,b:0,g:0};function $E(o,e,t,n,i,s,r){const a=new Je(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function g(p,m){let v=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);const E=o.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||v)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Bc)?(u===void 0&&(u=new Ut(new Lr(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:ko(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,S,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=mt.getTransfer(x.colorSpace)!==Ct,(d!==x||h!==x.version||f!==o.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,f=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ut(new Va(2,2),new Fr({name:"BackgroundMaterial",uniforms:ko(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=mt.getTransfer(x.colorSpace)!==Ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,f=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(Dl,_g(o)),n.buffers.color.setClear(Dl.r,Dl.g,Dl.b,m,r)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function KE(o,e,t,n){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function d(T,L,P,k,V){let G=!1;if(r){const I=_(k,P,L);c!==I&&(c=I,f(c.object)),G=m(T,k,P,V),G&&v(T,k,P,V)}else{const I=L.wireframe===!0;(c.geometry!==k.id||c.program!==P.id||c.wireframe!==I)&&(c.geometry=k.id,c.program=P.id,c.wireframe=I,G=!0)}V!==null&&t.update(V,o.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,D(T,L,P,k),V!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function h(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(T){return n.isWebGL2?o.bindVertexArray(T):s.bindVertexArrayOES(T)}function g(T){return n.isWebGL2?o.deleteVertexArray(T):s.deleteVertexArrayOES(T)}function _(T,L,P){const k=P.wireframe===!0;let V=a[T.id];V===void 0&&(V={},a[T.id]=V);let G=V[L.id];G===void 0&&(G={},V[L.id]=G);let I=G[k];return I===void 0&&(I=p(h()),G[k]=I),I}function p(T){const L=[],P=[],k=[];for(let V=0;V<i;V++)L[V]=0,P[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:P,attributeDivisors:k,object:T,attributes:{},index:null}}function m(T,L,P,k){const V=c.attributes,G=L.attributes;let I=0;const Q=P.getAttributes();for(const $ in Q)if(Q[$].location>=0){const ee=V[$];let he=G[$];if(he===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(he=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(he=T.instanceColor)),ee===void 0||ee.attribute!==he||he&&ee.data!==he.data)return!0;I++}return c.attributesNum!==I||c.index!==k}function v(T,L,P,k){const V={},G=L.attributes;let I=0;const Q=P.getAttributes();for(const $ in Q)if(Q[$].location>=0){let ee=G[$];ee===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(ee=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(ee=T.instanceColor));const he={};he.attribute=ee,ee&&ee.data&&(he.data=ee.data),V[$]=he,I++}c.attributes=V,c.attributesNum=I,c.index=k}function x(){const T=c.newAttributes;for(let L=0,P=T.length;L<P;L++)T[L]=0}function E(T){w(T,0)}function w(T,L){const P=c.newAttributes,k=c.enabledAttributes,V=c.attributeDivisors;P[T]=1,k[T]===0&&(o.enableVertexAttribArray(T),k[T]=1),V[T]!==L&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,L),V[T]=L)}function S(){const T=c.newAttributes,L=c.enabledAttributes;for(let P=0,k=L.length;P<k;P++)L[P]!==T[P]&&(o.disableVertexAttribArray(P),L[P]=0)}function b(T,L,P,k,V,G,I){I===!0?o.vertexAttribIPointer(T,L,P,V,G):o.vertexAttribPointer(T,L,P,k,V,G)}function D(T,L,P,k){if(n.isWebGL2===!1&&(T.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=k.attributes,G=P.getAttributes(),I=L.defaultAttributeValues;for(const Q in G){const $=G[Q];if($.location>=0){let j=V[Q];if(j===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(j=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(j=T.instanceColor)),j!==void 0){const ee=j.normalized,he=j.itemSize,ye=t.get(j);if(ye===void 0)continue;const ge=ye.buffer,ae=ye.type,te=ye.bytesPerElement,ve=n.isWebGL2===!0&&(ae===o.INT||ae===o.UNSIGNED_INT||j.gpuType===Jm);if(j.isInterleavedBufferAttribute){const Se=j.data,q=Se.stride,He=j.offset;if(Se.isInstancedInterleavedBuffer){for(let _e=0;_e<$.locationSize;_e++)w($.location+_e,Se.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let _e=0;_e<$.locationSize;_e++)E($.location+_e);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let _e=0;_e<$.locationSize;_e++)b($.location+_e,he/$.locationSize,ae,ee,q*te,(He+he/$.locationSize*_e)*te,ve)}else{if(j.isInstancedBufferAttribute){for(let Se=0;Se<$.locationSize;Se++)w($.location+Se,j.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Se=0;Se<$.locationSize;Se++)E($.location+Se);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let Se=0;Se<$.locationSize;Se++)b($.location+Se,he/$.locationSize,ae,ee,he*te,he/$.locationSize*Se*te,ve)}}else if(I!==void 0){const ee=I[Q];if(ee!==void 0)switch(ee.length){case 2:o.vertexAttrib2fv($.location,ee);break;case 3:o.vertexAttrib3fv($.location,ee);break;case 4:o.vertexAttrib4fv($.location,ee);break;default:o.vertexAttrib1fv($.location,ee)}}}}S()}function y(){R();for(const T in a){const L=a[T];for(const P in L){const k=L[P];for(const V in k)g(k[V].object),delete k[V];delete L[P]}delete a[T]}}function M(T){if(a[T.id]===void 0)return;const L=a[T.id];for(const P in L){const k=L[P];for(const V in k)g(k[V].object),delete k[V];delete L[P]}delete a[T.id]}function U(T){for(const L in a){const P=a[L];if(P[T.id]===void 0)continue;const k=P[T.id];for(const V in k)g(k[V].object),delete k[V];delete P[T.id]}}function R(){N(),u=!0,c!==l&&(c=l,f(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:R,resetDefaultState:N,dispose:y,releaseStatesOfGeometry:M,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:E,disableUnusedAttributes:S}}function ZE(o,e,t,n){const i=n.isWebGL2;let s;function r(u){s=u}function a(u,d){o.drawArrays(s,u,d),t.update(d,s,1)}function l(u,d,h){if(h===0)return;let f,g;if(i)f=o,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,d,h),t.update(d,s,h)}function c(u,d,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{f.multiDrawArraysWEBGL(s,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_];t.update(g,s,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function JE(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=r||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),h=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),p=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),m=o.getParameter(o.MAX_VARYING_VECTORS),v=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,E=r||e.has("OES_texture_float"),w=x&&E,S=r?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:S}}function QE(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Rs,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=o.get(d);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const v=s?0:n,x=v*4;let E=m.clippingState||null;l.value=E,E=u(g,h,x,f);for(let w=0;w!==x;++w)E[w]=t[w];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,E=f;x!==_;++x,E+=4)r.copy(d[x]).applyMatrix4(v,a),r.normal.toArray(p,E),p[E+3]=r.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function eM(o){let e=new WeakMap;function t(r,a){return a===za?r.mapping=No:a===uh&&(r.mapping=Uo),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===za||a===uh)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new dx(l.height/2);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class id extends vg{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const go=4,Wf=[.125,.215,.35,.446,.526,.582],_r=20,Eu=new id,Xf=new Je;let Mu=null,bu=0,Su=0;const dr=(1+Math.sqrt(5))/2,ro=1/dr,qf=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,dr,ro),new H(0,dr,-ro),new H(ro,0,dr),new H(-ro,0,dr),new H(dr,ro,0),new H(-dr,ro,0)];class Yf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Mu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mu,bu,Su),e.scissorTest=!1,Cl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===No||e.mapping===Uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:fs,format:ui,colorSpace:jt,depthBuffer:!1},i=jf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tM(s)),this._blurMaterial=nM(s,e,t)}return i}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,Eu)}_sceneToCubeUV(e,t,n,i){const a=new En(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Xf),u.toneMapping=Gs,u.autoClear=!1;const f=new Fs({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),g=new Ut(new Lr,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(Xf),_=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Cl(i,v*x,m>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===No||e.mapping===Uo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$f());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Cl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Eu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=qf[(i-1)%qf.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ut(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*_r-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):_r;p>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_r}`);const m=[];let v=0;for(let b=0;b<_r;++b){const D=b/_,y=Math.exp(-D*D/2);m.push(y),b===0?v+=y:b<p&&(v+=2*y)}for(let b=0;b<m.length;b++)m[b]=m[b]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const E=this._sizeLods[i],w=3*E*(i>x-go?i-x+go:0),S=4*(this._cubeSize-E);Cl(t,w,S,3*E,2*E),l.setRenderTarget(t),l.render(d,Eu)}}function tM(o){const e=[],t=[],n=[];let i=o;const s=o-go+1+Wf.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>o-go?l=Wf[r-o+go-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*f),x=new Float32Array(p*g*f),E=new Float32Array(m*g*f);for(let S=0;S<f;S++){const b=S%3*2/3-1,D=S>2?0:-1,y=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];v.set(y,_*g*S),x.set(h,p*g*S);const M=[S,S,S,S,S,S];E.set(M,m*g*S)}const w=new bn;w.setAttribute("position",new pn(v,_)),w.setAttribute("uv",new pn(x,p)),w.setAttribute("faceIndex",new pn(E,m)),e.push(w),i>go&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jf(o,e,t){const n=new Pr(o,e,t);return n.texture.mapping=Bc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cl(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function nM(o,e,t){const n=new Float32Array(_r),i=new H(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sd(),fragmentShader:`

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
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function $f(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sd(),fragmentShader:`

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
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function Kf(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function sd(){return`

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
	`}function iM(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===za||l===uh,u=l===No||l===Uo;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Yf(o)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new Yf(o));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function sM(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rM(o,e,t,n){const i={},s=new WeakMap;function r(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}h.removeEventListener("dispose",r),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",r),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],o.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],o.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,E=v.length;x<E;x+=3){const w=v[x+0],S=v[x+1],b=v[x+2];h.push(w,S,S,b,b,w)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,E=v.length/3-1;x<E;x+=3){const w=x+0,S=x+1,b=x+2;h.push(w,S,S,b,b,w)}}else return;const p=new(cg(h)?gg:mg)(h,1);p.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function oM(o,e,t,n){const i=n.isWebGL2;let s;function r(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,g){o.drawElements(s,g,a,f*l),t.update(g,s,1)}function d(f,g,_){if(_===0)return;let p,m;if(i)p=o,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,f*l,_),t.update(g,s,_)}function h(f,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(f[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,f,0,_);let m=0;for(let v=0;v<_;v++)m+=g[v];t.update(m,s,1)}}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function aM(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case o.TRIANGLES:t.triangles+=a*(s/3);break;case o.LINES:t.lines+=a*(s/2);break;case o.LINE_STRIP:t.lines+=a*(s-1);break;case o.LINE_LOOP:t.lines+=a*s;break;case o.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function lM(o,e){return o[0]-e[0]}function cM(o,e){return Math.abs(e[1])-Math.abs(o[1])}function uM(o,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new Mt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let L=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",L)};var f=L;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let y=0;x===!0&&(y=1),E===!0&&(y=2),w===!0&&(y=3);let M=u.attributes.position.count*y,U=1;M>e.maxTextureSize&&(U=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const R=new Float32Array(M*U*4*_),N=new dg(R,M,U,_);N.type=di,N.needsUpdate=!0;const T=y*4;for(let P=0;P<_;P++){const k=S[P],V=b[P],G=D[P],I=M*U*4*P;for(let Q=0;Q<k.count;Q++){const $=Q*T;x===!0&&(r.fromBufferAttribute(k,Q),R[I+$+0]=r.x,R[I+$+1]=r.y,R[I+$+2]=r.z,R[I+$+3]=0),E===!0&&(r.fromBufferAttribute(V,Q),R[I+$+4]=r.x,R[I+$+5]=r.y,R[I+$+6]=r.z,R[I+$+7]=0),w===!0&&(r.fromBufferAttribute(G,Q),R[I+$+8]=r.x,R[I+$+9]=r.y,R[I+$+10]=r.z,R[I+$+11]=G.itemSize===4?r.w:1)}}p={count:_,texture:N,size:new Ke(M,U)},s.set(u,p),u.addEventListener("dispose",L)}let m=0;for(let x=0;x<h.length;x++)m+=h[x];const v=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(o,"morphTargetBaseInfluence",v),d.getUniforms().setValue(o,"morphTargetInfluences",h),d.getUniforms().setValue(o,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",p.size)}else{const g=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let E=0;E<g;E++)_[E]=[E,0];n[u.id]=_}for(let E=0;E<g;E++){const w=_[E];w[0]=E,w[1]=h[E]}_.sort(cM);for(let E=0;E<8;E++)E<g&&_[E][1]?(a[E][0]=_[E][0],a[E][1]=_[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(lM);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let v=0;for(let E=0;E<8;E++){const w=a[E],S=w[0],b=w[1];S!==Number.MAX_SAFE_INTEGER&&b?(p&&u.getAttribute("morphTarget"+E)!==p[S]&&u.setAttribute("morphTarget"+E,p[S]),m&&u.getAttribute("morphNormal"+E)!==m[S]&&u.setAttribute("morphNormal"+E,m[S]),i[E]=b,v+=b):(p&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),m&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),i[E]=0)}const x=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(o,"morphTargetBaseInfluence",x),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function hM(o,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}class Eg extends fn{constructor(e,t,n,i,s,r,a,l,c,u){if(u=u!==void 0?u:Mr,u!==Mr&&u!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Mr&&(n=Ls),n===void 0&&u===Oo&&(n=Er),super(null,i,s,r,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mg=new fn,bg=new Eg(1,1);bg.compareFunction=lg;const Sg=new dg,wg=new qv,Tg=new xg,Zf=[],Jf=[],Qf=new Float32Array(16),ep=new Float32Array(9),tp=new Float32Array(4);function Ko(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=Zf[i];if(s===void 0&&(s=new Float32Array(i),Zf[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function tn(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function nn(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Hc(o,e){let t=Jf[e];t===void 0&&(t=new Int32Array(e),Jf[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function dM(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function fM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;o.uniform2fv(this.addr,e),nn(t,e)}}function pM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;o.uniform3fv(this.addr,e),nn(t,e)}}function mM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;o.uniform4fv(this.addr,e),nn(t,e)}}function gM(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;tp.set(n),o.uniformMatrix2fv(this.addr,!1,tp),nn(t,n)}}function _M(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;ep.set(n),o.uniformMatrix3fv(this.addr,!1,ep),nn(t,n)}}function vM(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Qf.set(n),o.uniformMatrix4fv(this.addr,!1,Qf),nn(t,n)}}function xM(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function yM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;o.uniform2iv(this.addr,e),nn(t,e)}}function EM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;o.uniform3iv(this.addr,e),nn(t,e)}}function MM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;o.uniform4iv(this.addr,e),nn(t,e)}}function bM(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function SM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;o.uniform2uiv(this.addr,e),nn(t,e)}}function wM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;o.uniform3uiv(this.addr,e),nn(t,e)}}function TM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;o.uniform4uiv(this.addr,e),nn(t,e)}}function AM(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);const s=this.type===o.SAMPLER_2D_SHADOW?bg:Mg;t.setTexture2D(e||s,i)}function DM(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wg,i)}function CM(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Tg,i)}function RM(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sg,i)}function PM(o){switch(o){case 5126:return dM;case 35664:return fM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return _M;case 35676:return vM;case 5124:case 35670:return xM;case 35667:case 35671:return yM;case 35668:case 35672:return EM;case 35669:case 35673:return MM;case 5125:return bM;case 36294:return SM;case 36295:return wM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return RM}}function LM(o,e){o.uniform1fv(this.addr,e)}function FM(o,e){const t=Ko(e,this.size,2);o.uniform2fv(this.addr,t)}function IM(o,e){const t=Ko(e,this.size,3);o.uniform3fv(this.addr,t)}function NM(o,e){const t=Ko(e,this.size,4);o.uniform4fv(this.addr,t)}function UM(o,e){const t=Ko(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function OM(o,e){const t=Ko(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function BM(o,e){const t=Ko(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function zM(o,e){o.uniform1iv(this.addr,e)}function kM(o,e){o.uniform2iv(this.addr,e)}function HM(o,e){o.uniform3iv(this.addr,e)}function VM(o,e){o.uniform4iv(this.addr,e)}function GM(o,e){o.uniform1uiv(this.addr,e)}function WM(o,e){o.uniform2uiv(this.addr,e)}function XM(o,e){o.uniform3uiv(this.addr,e)}function qM(o,e){o.uniform4uiv(this.addr,e)}function YM(o,e,t){const n=this.cache,i=e.length,s=Hc(t,i);tn(n,s)||(o.uniform1iv(this.addr,s),nn(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Mg,s[r])}function jM(o,e,t){const n=this.cache,i=e.length,s=Hc(t,i);tn(n,s)||(o.uniform1iv(this.addr,s),nn(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||wg,s[r])}function $M(o,e,t){const n=this.cache,i=e.length,s=Hc(t,i);tn(n,s)||(o.uniform1iv(this.addr,s),nn(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Tg,s[r])}function KM(o,e,t){const n=this.cache,i=e.length,s=Hc(t,i);tn(n,s)||(o.uniform1iv(this.addr,s),nn(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Sg,s[r])}function ZM(o){switch(o){case 5126:return LM;case 35664:return FM;case 35665:return IM;case 35666:return NM;case 35674:return UM;case 35675:return OM;case 35676:return BM;case 5124:case 35670:return zM;case 35667:case 35671:return kM;case 35668:case 35672:return HM;case 35669:case 35673:return VM;case 5125:return GM;case 36294:return WM;case 36295:return XM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return jM;case 35680:case 36300:case 36308:case 36293:return $M;case 36289:case 36303:case 36311:case 36292:return KM}}class JM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=PM(t.type)}}class QM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZM(t.type)}}class eb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const wu=/(\w+)(\])?(\[|\.)?/g;function np(o,e){o.seq.push(e),o.map[e.id]=e}function tb(o,e,t){const n=o.name,i=n.length;for(wu.lastIndex=0;;){const s=wu.exec(n),r=wu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){np(t,c===void 0?new JM(a,o,e):new QM(a,o,e));break}else{let d=t.map[a];d===void 0&&(d=new eb(a),np(t,d)),t=d}}}class rc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);tb(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function ip(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const nb=37297;let ib=0;function sb(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}function rb(o){const e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(o);let n;switch(e===t?n="":e===yc&&t===xc?n="LinearDisplayP3ToLinearSRGB":e===xc&&t===yc&&(n="LinearSRGBToLinearDisplayP3"),o){case jt:case zc:return[n,"LinearTransferOETF"];case Tt:case ed:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[n,"LinearTransferOETF"]}}function sp(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+sb(o.getShaderSource(e),r)}else return i}function ob(o,e){const t=rb(e);return`vec4 ${o}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ab(o,e){let t;switch(e){case tv:t="Linear";break;case nv:t="Reinhard";break;case iv:t="OptimizedCineon";break;case Jh:t="ACESFilmic";break;case rv:t="AgX";break;case sv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lb(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_o).join(`
`)}function cb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_o).join(`
`)}function ub(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hb(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function _o(o){return o!==""}function rp(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function op(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const db=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(o){return o.replace(db,pb)}const fb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pb(o,e){let t=it[e];if(t===void 0){const n=fb.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gh(t)}const mb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ap(o){return o.replace(mb,gb)}function gb(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function lp(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _b(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===jm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ls&&(e="SHADOWMAP_TYPE_VSM"),e}function vb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case No:case Uo:e="ENVMAP_TYPE_CUBE";break;case Bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Uo:e="ENVMAP_MODE_REFRACTION";break}return e}function yb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case $m:e="ENVMAP_BLENDING_MULTIPLY";break;case Q0:e="ENVMAP_BLENDING_MIX";break;case ev:e="ENVMAP_BLENDING_ADD";break}return e}function Eb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Mb(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=_b(t),c=vb(t),u=xb(t),d=yb(t),h=Eb(t),f=t.isWebGL2?"":lb(t),g=cb(t),_=ub(s),p=i.createProgram();let m,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(_o).join(`
`),m.length>0&&(m+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(_o).join(`
`),v.length>0&&(v+=`
`)):(m=[lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),v=[f,lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gs?"#define TONE_MAPPING":"",t.toneMapping!==Gs?it.tonemapping_pars_fragment:"",t.toneMapping!==Gs?ab("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,ob("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_o).join(`
`)),r=gh(r),r=rp(r,t),r=op(r,t),a=gh(a),a=rp(a,t),a=op(a,t),r=ap(r),a=ap(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const E=x+m+r,w=x+v+a,S=ip(i,i.VERTEX_SHADER,E),b=ip(i,i.FRAGMENT_SHADER,w);i.attachShader(p,S),i.attachShader(p,b),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function D(R){if(o.debug.checkShaderErrors){const N=i.getProgramInfoLog(p).trim(),T=i.getShaderInfoLog(S).trim(),L=i.getShaderInfoLog(b).trim();let P=!0,k=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(P=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,p,S,b);else{const V=sp(i,S,"vertex"),G=sp(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+V+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(T===""||L==="")&&(k=!1);k&&(R.diagnostics={runnable:P,programLog:N,vertexShader:{log:T,prefix:m},fragmentShader:{log:L,prefix:v}})}i.deleteShader(S),i.deleteShader(b),y=new rc(i,p),M=hb(i,p)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(p,nb)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ib++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=b,this}let bb=0;class Sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wb(e),t.set(e,n)),n}}class wb{constructor(e){this.id=bb++,this.code=e,this.usedTimes=0}}function Tb(o,e,t,n,i,s,r){const a=new fg,l=new Sb,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function p(y,M,U,R,N){const T=R.fog,L=N.geometry,P=y.isMeshStandardMaterial?R.environment:null,k=(y.isMeshStandardMaterial?t:e).get(y.envMap||P),V=k&&k.mapping===Bc?k.image.height:null,G=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const I=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Q=I!==void 0?I.length:0;let $=0;L.morphAttributes.position!==void 0&&($=1),L.morphAttributes.normal!==void 0&&($=2),L.morphAttributes.color!==void 0&&($=3);let j,ee,he,ye;if(G){const Ae=Ui[G];j=Ae.vertexShader,ee=Ae.fragmentShader}else j=y.vertexShader,ee=y.fragmentShader,l.update(y),he=l.getVertexShaderID(y),ye=l.getFragmentShaderID(y);const ge=o.getRenderTarget(),ae=N.isInstancedMesh===!0,te=N.isBatchedMesh===!0,ve=!!y.map,Se=!!y.matcap,q=!!k,He=!!y.aoMap,_e=!!y.lightMap,Ce=!!y.bumpMap,Me=!!y.normalMap,K=!!y.displacementMap,Ve=!!y.emissiveMap,O=!!y.metalnessMap,C=!!y.roughnessMap,X=y.anisotropy>0,ie=y.clearcoat>0,se=y.iridescence>0,le=y.sheen>0,be=y.transmission>0,xe=X&&!!y.anisotropyMap,fe=ie&&!!y.clearcoatMap,Ie=ie&&!!y.clearcoatNormalMap,We=ie&&!!y.clearcoatRoughnessMap,ne=se&&!!y.iridescenceMap,lt=se&&!!y.iridescenceThicknessMap,Be=le&&!!y.sheenColorMap,$e=le&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,we=!!y.specularColorMap,B=!!y.specularIntensityMap,ue=be&&!!y.transmissionMap,Le=be&&!!y.thicknessMap,re=!!y.gradientMap,oe=!!y.alphaMap,z=y.alphaTest>0,ce=!!y.alphaHash,pe=!!y.extensions,Ge=!!L.attributes.uv1,ze=!!L.attributes.uv2,Ze=!!L.attributes.uv3;let nt=Gs;return y.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(nt=o.toneMapping),{isWebGL2:u,shaderID:G,shaderType:y.type,shaderName:y.name,vertexShader:j,fragmentShader:ee,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:ye,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:te,instancing:ae,instancingColor:ae&&N.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ge===null?o.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:jt,map:ve,matcap:Se,envMap:q,envMapMode:q&&k.mapping,envMapCubeUVHeight:V,aoMap:He,lightMap:_e,bumpMap:Ce,normalMap:Me,displacementMap:h&&K,emissiveMap:Ve,normalMapObjectSpace:Me&&y.normalMapType===xv,normalMapTangentSpace:Me&&y.normalMapType===ag,metalnessMap:O,roughnessMap:C,anisotropy:X,anisotropyMap:xe,clearcoat:ie,clearcoatMap:fe,clearcoatNormalMap:Ie,clearcoatRoughnessMap:We,iridescence:se,iridescenceMap:ne,iridescenceThicknessMap:lt,sheen:le,sheenColorMap:Be,sheenRoughnessMap:$e,specularMap:Ne,specularColorMap:we,specularIntensityMap:B,transmission:be,transmissionMap:ue,thicknessMap:Le,gradientMap:re,opaque:y.transparent===!1&&y.blending===Mo,alphaMap:oe,alphaTest:z,alphaHash:ce,combine:y.combine,mapUv:ve&&_(y.map.channel),aoMapUv:He&&_(y.aoMap.channel),lightMapUv:_e&&_(y.lightMap.channel),bumpMapUv:Ce&&_(y.bumpMap.channel),normalMapUv:Me&&_(y.normalMap.channel),displacementMapUv:K&&_(y.displacementMap.channel),emissiveMapUv:Ve&&_(y.emissiveMap.channel),metalnessMapUv:O&&_(y.metalnessMap.channel),roughnessMapUv:C&&_(y.roughnessMap.channel),anisotropyMapUv:xe&&_(y.anisotropyMap.channel),clearcoatMapUv:fe&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:$e&&_(y.sheenRoughnessMap.channel),specularMapUv:Ne&&_(y.specularMap.channel),specularColorMapUv:we&&_(y.specularColorMap.channel),specularIntensityMapUv:B&&_(y.specularIntensityMap.channel),transmissionMapUv:ue&&_(y.transmissionMap.channel),thicknessMapUv:Le&&_(y.thicknessMap.channel),alphaMapUv:oe&&_(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Me||X),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:Ge,vertexUv2s:ze,vertexUv3s:Ze,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(ve||oe),fog:!!T,useFog:y.fog===!0,fogExp2:T&&T.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:$,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:o.shadowMap.enabled&&U.length>0,shadowMapType:o.shadowMap.type,toneMapping:nt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&mt.getTransfer(y.map.colorSpace)===Ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ti,flipSided:y.side===kn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:pe&&y.extensions.derivatives===!0,extensionFragDepth:pe&&y.extensions.fragDepth===!0,extensionDrawBuffers:pe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)M.push(U),M.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(v(M,y),x(M,y),M.push(o.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function E(y){const M=g[y.type];let U;if(M){const R=Ui[M];U=lx.clone(R.uniforms)}else U=y.uniforms;return U}function w(y,M){let U;for(let R=0,N=c.length;R<N;R++){const T=c[R];if(T.cacheKey===M){U=T,++U.usedTimes;break}}return U===void 0&&(U=new Mb(o,M,y,s),c.push(U)),U}function S(y){if(--y.usedTimes===0){const M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),y.destroy()}}function b(y){l.remove(y)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:E,acquireProgram:w,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:D}}function Ab(){let o=new WeakMap;function e(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function t(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Db(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function cp(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function up(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(d,h,f,g,_,p){let m=o[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},o[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=p),e++,m}function a(d,h,f,g,_,p){const m=r(d,h,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(d,h,f,g,_,p){const m=r(d,h,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(d,h){t.length>1&&t.sort(d||Db),n.length>1&&n.sort(h||cp),i.length>1&&i.sort(h||cp)}function u(){for(let d=e,h=o.length;d<h;d++){const f=o[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Cb(){let o=new WeakMap;function e(n,i){const s=o.get(n);let r;return s===void 0?(r=new up,o.set(n,[r])):i>=s.length?(r=new up,s.push(r)):r=s[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function Rb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Je};break;case"SpotLight":t={position:new H,direction:new H,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new H,halfWidth:new H,halfHeight:new H};break}return o[e.id]=t,t}}}function Pb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Lb=0;function Fb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Ib(o,e){const t=new Rb,n=Pb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new H);const s=new H,r=new at,a=new at;function l(u,d){let h=0,f=0,g=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let _=0,p=0,m=0,v=0,x=0,E=0,w=0,S=0,b=0,D=0,y=0;u.sort(Fb);const M=d===!0?Math.PI:1;for(let R=0,N=u.length;R<N;R++){const T=u[R],L=T.color,P=T.intensity,k=T.distance,V=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=L.r*P*M,f+=L.g*P*M,g+=L.b*P*M;else if(T.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(T.sh.coefficients[G],P);y++}else if(T.isDirectionalLight){const G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity*M),T.castShadow){const I=T.shadow,Q=n.get(T);Q.shadowBias=I.bias,Q.shadowNormalBias=I.normalBias,Q.shadowRadius=I.radius,Q.shadowMapSize=I.mapSize,i.directionalShadow[_]=Q,i.directionalShadowMap[_]=V,i.directionalShadowMatrix[_]=T.shadow.matrix,E++}i.directional[_]=G,_++}else if(T.isSpotLight){const G=t.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(L).multiplyScalar(P*M),G.distance=k,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,i.spot[m]=G;const I=T.shadow;if(T.map&&(i.spotLightMap[b]=T.map,b++,I.updateMatrices(T),T.castShadow&&D++),i.spotLightMatrix[m]=I.matrix,T.castShadow){const Q=n.get(T);Q.shadowBias=I.bias,Q.shadowNormalBias=I.normalBias,Q.shadowRadius=I.radius,Q.shadowMapSize=I.mapSize,i.spotShadow[m]=Q,i.spotShadowMap[m]=V,S++}m++}else if(T.isRectAreaLight){const G=t.get(T);G.color.copy(L).multiplyScalar(P),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),i.rectArea[v]=G,v++}else if(T.isPointLight){const G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity*M),G.distance=T.distance,G.decay=T.decay,T.castShadow){const I=T.shadow,Q=n.get(T);Q.shadowBias=I.bias,Q.shadowNormalBias=I.normalBias,Q.shadowRadius=I.radius,Q.shadowMapSize=I.mapSize,Q.shadowCameraNear=I.camera.near,Q.shadowCameraFar=I.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=T.shadow.matrix,w++}i.point[p]=G,p++}else if(T.isHemisphereLight){const G=t.get(T);G.skyColor.copy(T.color).multiplyScalar(P*M),G.groundColor.copy(T.groundColor).multiplyScalar(P*M),i.hemi[x]=G,x++}}v>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=g;const U=i.hash;(U.directionalLength!==_||U.pointLength!==p||U.spotLength!==m||U.rectAreaLength!==v||U.hemiLength!==x||U.numDirectionalShadows!==E||U.numPointShadows!==w||U.numSpotShadows!==S||U.numSpotMaps!==b||U.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=v,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+b-D,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=y,U.directionalLength=_,U.pointLength=p,U.spotLength=m,U.rectAreaLength=v,U.hemiLength=x,U.numDirectionalShadows=E,U.numPointShadows=w,U.numSpotShadows=S,U.numSpotMaps=b,U.numLightProbes=y,i.version=Lb++)}function c(u,d){let h=0,f=0,g=0,_=0,p=0;const m=d.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const E=u[v];if(E.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(E.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(E.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function hp(o,e){const t=new Ib(o,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function Nb(o,e){let t=new WeakMap;function n(s,r=0){const a=t.get(s);let l;return a===void 0?(l=new hp(o,e),t.set(s,[l])):r>=a.length?(l=new hp(o,e),a.push(l)):l=a[r],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Ub extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_v,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ob extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zb=`uniform sampler2D shadow_pass;
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
}`;function kb(o,e,t){let n=new nd;const i=new Ke,s=new Ke,r=new Mt,a=new Ub({depthPacking:vv}),l=new Ob,c={},u=t.maxTextureSize,d={[_s]:kn,[kn]:_s,[Ti]:Ti},h=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Bb,fragmentShader:zb}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new bn;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ut(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jm;let m=this.type;this.render=function(S,b,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const y=o.getRenderTarget(),M=o.getActiveCubeFace(),U=o.getActiveMipmapLevel(),R=o.state;R.setBlending(Vs),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const N=m!==ls&&this.type===ls,T=m===ls&&this.type!==ls;for(let L=0,P=S.length;L<P;L++){const k=S[L],V=k.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const G=V.getFrameExtents();if(i.multiply(G),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/G.x),i.x=s.x*G.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/G.y),i.y=s.y*G.y,V.mapSize.y=s.y)),V.map===null||N===!0||T===!0){const Q=this.type!==ls?{minFilter:an,magFilter:an}:{};V.map!==null&&V.map.dispose(),V.map=new Pr(i.x,i.y,Q),V.map.texture.name=k.name+".shadowMap",V.camera.updateProjectionMatrix()}o.setRenderTarget(V.map),o.clear();const I=V.getViewportCount();for(let Q=0;Q<I;Q++){const $=V.getViewport(Q);r.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),R.viewport(r),V.updateMatrices(k,Q),n=V.getFrustum(),E(b,D,V.camera,k,this.type)}V.isPointLightShadow!==!0&&this.type===ls&&v(V,D),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,o.setRenderTarget(y,M,U)};function v(S,b){const D=e.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Pr(i.x,i.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,o.setRenderTarget(S.mapPass),o.clear(),o.renderBufferDirect(b,null,D,h,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,o.setRenderTarget(S.map),o.clear(),o.renderBufferDirect(b,null,D,f,_,null)}function x(S,b,D,y){let M=null;const U=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)M=U;else if(M=D.isPointLight===!0?l:a,o.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const R=M.uuid,N=b.uuid;let T=c[R];T===void 0&&(T={},c[R]=T);let L=T[N];L===void 0&&(L=M.clone(),T[N]=L,b.addEventListener("dispose",w)),M=L}if(M.visible=b.visible,M.wireframe=b.wireframe,y===ls?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:d[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const R=o.properties.get(M);R.light=D}return M}function E(S,b,D,y,M){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===ls)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);const N=e.update(S),T=S.material;if(Array.isArray(T)){const L=N.groups;for(let P=0,k=L.length;P<k;P++){const V=L[P],G=T[V.materialIndex];if(G&&G.visible){const I=x(S,G,y,M);S.onBeforeShadow(o,S,b,D,N,I,V),o.renderBufferDirect(D,null,N,I,S,V),S.onAfterShadow(o,S,b,D,N,I,V)}}}else if(T.visible){const L=x(S,T,y,M);S.onBeforeShadow(o,S,b,D,N,L,null),o.renderBufferDirect(D,null,N,L,S,null),S.onAfterShadow(o,S,b,D,N,L,null)}}const R=S.children;for(let N=0,T=R.length;N<T;N++)E(R[N],b,D,y,M)}function w(S){S.target.removeEventListener("dispose",w);for(const D in c){const y=c[D],M=S.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}function Hb(o,e,t){const n=t.isWebGL2;function i(){let z=!1;const ce=new Mt;let pe=null;const Ge=new Mt(0,0,0,0);return{setMask:function(ze){pe!==ze&&!z&&(o.colorMask(ze,ze,ze,ze),pe=ze)},setLocked:function(ze){z=ze},setClear:function(ze,Ze,nt,Re,Ae){Ae===!0&&(ze*=Re,Ze*=Re,nt*=Re),ce.set(ze,Ze,nt,Re),Ge.equals(ce)===!1&&(o.clearColor(ze,Ze,nt,Re),Ge.copy(ce))},reset:function(){z=!1,pe=null,Ge.set(-1,0,0,0)}}}function s(){let z=!1,ce=null,pe=null,Ge=null;return{setTest:function(ze){ze?te(o.DEPTH_TEST):ve(o.DEPTH_TEST)},setMask:function(ze){ce!==ze&&!z&&(o.depthMask(ze),ce=ze)},setFunc:function(ze){if(pe!==ze){switch(ze){case q0:o.depthFunc(o.NEVER);break;case Y0:o.depthFunc(o.ALWAYS);break;case j0:o.depthFunc(o.LESS);break;case gc:o.depthFunc(o.LEQUAL);break;case $0:o.depthFunc(o.EQUAL);break;case K0:o.depthFunc(o.GEQUAL);break;case Z0:o.depthFunc(o.GREATER);break;case J0:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}pe=ze}},setLocked:function(ze){z=ze},setClear:function(ze){Ge!==ze&&(o.clearDepth(ze),Ge=ze)},reset:function(){z=!1,ce=null,pe=null,Ge=null}}}function r(){let z=!1,ce=null,pe=null,Ge=null,ze=null,Ze=null,nt=null,Re=null,Ae=null;return{setTest:function(Fe){z||(Fe?te(o.STENCIL_TEST):ve(o.STENCIL_TEST))},setMask:function(Fe){ce!==Fe&&!z&&(o.stencilMask(Fe),ce=Fe)},setFunc:function(Fe,de,qe){(pe!==Fe||Ge!==de||ze!==qe)&&(o.stencilFunc(Fe,de,qe),pe=Fe,Ge=de,ze=qe)},setOp:function(Fe,de,qe){(Ze!==Fe||nt!==de||Re!==qe)&&(o.stencilOp(Fe,de,qe),Ze=Fe,nt=de,Re=qe)},setLocked:function(Fe){z=Fe},setClear:function(Fe){Ae!==Fe&&(o.clearStencil(Fe),Ae=Fe)},reset:function(){z=!1,ce=null,pe=null,Ge=null,ze=null,Ze=null,nt=null,Re=null,Ae=null}}}const a=new i,l=new s,c=new r,u=new WeakMap,d=new WeakMap;let h={},f={},g=new WeakMap,_=[],p=null,m=!1,v=null,x=null,E=null,w=null,S=null,b=null,D=null,y=new Je(0,0,0),M=0,U=!1,R=null,N=null,T=null,L=null,P=null;const k=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,G=0;const I=o.getParameter(o.VERSION);I.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(I)[1]),V=G>=1):I.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),V=G>=2);let Q=null,$={};const j=o.getParameter(o.SCISSOR_BOX),ee=o.getParameter(o.VIEWPORT),he=new Mt().fromArray(j),ye=new Mt().fromArray(ee);function ge(z,ce,pe,Ge){const ze=new Uint8Array(4),Ze=o.createTexture();o.bindTexture(z,Ze),o.texParameteri(z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let nt=0;nt<pe;nt++)n&&(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)?o.texImage3D(ce,0,o.RGBA,1,1,Ge,0,o.RGBA,o.UNSIGNED_BYTE,ze):o.texImage2D(ce+nt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ze);return Ze}const ae={};ae[o.TEXTURE_2D]=ge(o.TEXTURE_2D,o.TEXTURE_2D,1),ae[o.TEXTURE_CUBE_MAP]=ge(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ae[o.TEXTURE_2D_ARRAY]=ge(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ae[o.TEXTURE_3D]=ge(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),te(o.DEPTH_TEST),l.setFunc(gc),Ve(!1),O(Gd),te(o.CULL_FACE),Me(Vs);function te(z){h[z]!==!0&&(o.enable(z),h[z]=!0)}function ve(z){h[z]!==!1&&(o.disable(z),h[z]=!1)}function Se(z,ce){return f[z]!==ce?(o.bindFramebuffer(z,ce),f[z]=ce,n&&(z===o.DRAW_FRAMEBUFFER&&(f[o.FRAMEBUFFER]=ce),z===o.FRAMEBUFFER&&(f[o.DRAW_FRAMEBUFFER]=ce)),!0):!1}function q(z,ce){let pe=_,Ge=!1;if(z)if(pe=g.get(ce),pe===void 0&&(pe=[],g.set(ce,pe)),z.isWebGLMultipleRenderTargets){const ze=z.texture;if(pe.length!==ze.length||pe[0]!==o.COLOR_ATTACHMENT0){for(let Ze=0,nt=ze.length;Ze<nt;Ze++)pe[Ze]=o.COLOR_ATTACHMENT0+Ze;pe.length=ze.length,Ge=!0}}else pe[0]!==o.COLOR_ATTACHMENT0&&(pe[0]=o.COLOR_ATTACHMENT0,Ge=!0);else pe[0]!==o.BACK&&(pe[0]=o.BACK,Ge=!0);Ge&&(t.isWebGL2?o.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function He(z){return p!==z?(o.useProgram(z),p=z,!0):!1}const _e={[gr]:o.FUNC_ADD,[P0]:o.FUNC_SUBTRACT,[L0]:o.FUNC_REVERSE_SUBTRACT};if(n)_e[Yd]=o.MIN,_e[jd]=o.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(_e[Yd]=z.MIN_EXT,_e[jd]=z.MAX_EXT)}const Ce={[F0]:o.ZERO,[I0]:o.ONE,[N0]:o.SRC_COLOR,[lh]:o.SRC_ALPHA,[H0]:o.SRC_ALPHA_SATURATE,[z0]:o.DST_COLOR,[O0]:o.DST_ALPHA,[U0]:o.ONE_MINUS_SRC_COLOR,[ch]:o.ONE_MINUS_SRC_ALPHA,[k0]:o.ONE_MINUS_DST_COLOR,[B0]:o.ONE_MINUS_DST_ALPHA,[V0]:o.CONSTANT_COLOR,[G0]:o.ONE_MINUS_CONSTANT_COLOR,[W0]:o.CONSTANT_ALPHA,[X0]:o.ONE_MINUS_CONSTANT_ALPHA};function Me(z,ce,pe,Ge,ze,Ze,nt,Re,Ae,Fe){if(z===Vs){m===!0&&(ve(o.BLEND),m=!1);return}if(m===!1&&(te(o.BLEND),m=!0),z!==R0){if(z!==v||Fe!==U){if((x!==gr||S!==gr)&&(o.blendEquation(o.FUNC_ADD),x=gr,S=gr),Fe)switch(z){case Mo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wd:o.blendFunc(o.ONE,o.ONE);break;case Xd:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case qd:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Mo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wd:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Xd:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case qd:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}E=null,w=null,b=null,D=null,y.set(0,0,0),M=0,v=z,U=Fe}return}ze=ze||ce,Ze=Ze||pe,nt=nt||Ge,(ce!==x||ze!==S)&&(o.blendEquationSeparate(_e[ce],_e[ze]),x=ce,S=ze),(pe!==E||Ge!==w||Ze!==b||nt!==D)&&(o.blendFuncSeparate(Ce[pe],Ce[Ge],Ce[Ze],Ce[nt]),E=pe,w=Ge,b=Ze,D=nt),(Re.equals(y)===!1||Ae!==M)&&(o.blendColor(Re.r,Re.g,Re.b,Ae),y.copy(Re),M=Ae),v=z,U=!1}function K(z,ce){z.side===Ti?ve(o.CULL_FACE):te(o.CULL_FACE);let pe=z.side===kn;ce&&(pe=!pe),Ve(pe),z.blending===Mo&&z.transparent===!1?Me(Vs):Me(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const Ge=z.stencilWrite;c.setTest(Ge),Ge&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),X(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?te(o.SAMPLE_ALPHA_TO_COVERAGE):ve(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(z){R!==z&&(z?o.frontFace(o.CW):o.frontFace(o.CCW),R=z)}function O(z){z!==D0?(te(o.CULL_FACE),z!==N&&(z===Gd?o.cullFace(o.BACK):z===C0?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ve(o.CULL_FACE),N=z}function C(z){z!==T&&(V&&o.lineWidth(z),T=z)}function X(z,ce,pe){z?(te(o.POLYGON_OFFSET_FILL),(L!==ce||P!==pe)&&(o.polygonOffset(ce,pe),L=ce,P=pe)):ve(o.POLYGON_OFFSET_FILL)}function ie(z){z?te(o.SCISSOR_TEST):ve(o.SCISSOR_TEST)}function se(z){z===void 0&&(z=o.TEXTURE0+k-1),Q!==z&&(o.activeTexture(z),Q=z)}function le(z,ce,pe){pe===void 0&&(Q===null?pe=o.TEXTURE0+k-1:pe=Q);let Ge=$[pe];Ge===void 0&&(Ge={type:void 0,texture:void 0},$[pe]=Ge),(Ge.type!==z||Ge.texture!==ce)&&(Q!==pe&&(o.activeTexture(pe),Q=pe),o.bindTexture(z,ce||ae[z]),Ge.type=z,Ge.texture=ce)}function be(){const z=$[Q];z!==void 0&&z.type!==void 0&&(o.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function xe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{o.compressedTexImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{o.texSubImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function We(){try{o.texSubImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Be(){try{o.texStorage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $e(){try{o.texStorage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(){try{o.texImage2D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{o.texImage3D.apply(o,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function B(z){he.equals(z)===!1&&(o.scissor(z.x,z.y,z.z,z.w),he.copy(z))}function ue(z){ye.equals(z)===!1&&(o.viewport(z.x,z.y,z.z,z.w),ye.copy(z))}function Le(z,ce){let pe=d.get(ce);pe===void 0&&(pe=new WeakMap,d.set(ce,pe));let Ge=pe.get(z);Ge===void 0&&(Ge=o.getUniformBlockIndex(ce,z.name),pe.set(z,Ge))}function re(z,ce){const Ge=d.get(ce).get(z);u.get(ce)!==Ge&&(o.uniformBlockBinding(ce,Ge,z.__bindingPointIndex),u.set(ce,Ge))}function oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),n===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},Q=null,$={},f={},g=new WeakMap,_=[],p=null,m=!1,v=null,x=null,E=null,w=null,S=null,b=null,D=null,y=new Je(0,0,0),M=0,U=!1,R=null,N=null,T=null,L=null,P=null,he.set(0,0,o.canvas.width,o.canvas.height),ye.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:te,disable:ve,bindFramebuffer:Se,drawBuffers:q,useProgram:He,setBlending:Me,setMaterial:K,setFlipSided:Ve,setCullFace:O,setLineWidth:C,setPolygonOffset:X,setScissorTest:ie,activeTexture:se,bindTexture:le,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:fe,texImage2D:Ne,texImage3D:we,updateUBOMapping:Le,uniformBlockBinding:re,texStorage2D:Be,texStorage3D:$e,texSubImage2D:Ie,texSubImage3D:We,compressedTexSubImage2D:ne,compressedTexSubImage3D:lt,scissor:B,viewport:ue,reset:oe}}function Vb(o,e,t,n,i,s,r){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(O,C){return f?new OffscreenCanvas(O,C):Ha("canvas")}function _(O,C,X,ie){let se=1;if((O.width>ie||O.height>ie)&&(se=ie/Math.max(O.width,O.height)),se<1||C===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const le=C?Mc:Math.floor,be=le(se*O.width),xe=le(se*O.height);d===void 0&&(d=g(be,xe));const fe=X?g(be,xe):d;return fe.width=be,fe.height=xe,fe.getContext("2d").drawImage(O,0,0,be,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+be+"x"+xe+")."),fe}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function p(O){return mh(O.width)&&mh(O.height)}function m(O){return a?!1:O.wrapS!==zn||O.wrapT!==zn||O.minFilter!==an&&O.minFilter!==en}function v(O,C){return O.generateMipmaps&&C&&O.minFilter!==an&&O.minFilter!==en}function x(O){o.generateMipmap(O)}function E(O,C,X,ie,se=!1){if(a===!1)return C;if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let le=C;if(C===o.RED&&(X===o.FLOAT&&(le=o.R32F),X===o.HALF_FLOAT&&(le=o.R16F),X===o.UNSIGNED_BYTE&&(le=o.R8)),C===o.RED_INTEGER&&(X===o.UNSIGNED_BYTE&&(le=o.R8UI),X===o.UNSIGNED_SHORT&&(le=o.R16UI),X===o.UNSIGNED_INT&&(le=o.R32UI),X===o.BYTE&&(le=o.R8I),X===o.SHORT&&(le=o.R16I),X===o.INT&&(le=o.R32I)),C===o.RG&&(X===o.FLOAT&&(le=o.RG32F),X===o.HALF_FLOAT&&(le=o.RG16F),X===o.UNSIGNED_BYTE&&(le=o.RG8)),C===o.RGBA){const be=se?vc:mt.getTransfer(ie);X===o.FLOAT&&(le=o.RGBA32F),X===o.HALF_FLOAT&&(le=o.RGBA16F),X===o.UNSIGNED_BYTE&&(le=be===Ct?o.SRGB8_ALPHA8:o.RGBA8),X===o.UNSIGNED_SHORT_4_4_4_4&&(le=o.RGBA4),X===o.UNSIGNED_SHORT_5_5_5_1&&(le=o.RGB5_A1)}return(le===o.R16F||le===o.R32F||le===o.RG16F||le===o.RG32F||le===o.RGBA16F||le===o.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function w(O,C,X){return v(O,X)===!0||O.isFramebufferTexture&&O.minFilter!==an&&O.minFilter!==en?Math.log2(Math.max(C.width,C.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?C.mipmaps.length:1}function S(O){return O===an||O===hh||O===sc?o.NEAREST:o.LINEAR}function b(O){const C=O.target;C.removeEventListener("dispose",b),y(C),C.isVideoTexture&&u.delete(C)}function D(O){const C=O.target;C.removeEventListener("dispose",D),U(C)}function y(O){const C=n.get(O);if(C.__webglInit===void 0)return;const X=O.source,ie=h.get(X);if(ie){const se=ie[C.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(O),Object.keys(ie).length===0&&h.delete(X)}n.remove(O)}function M(O){const C=n.get(O);o.deleteTexture(C.__webglTexture);const X=O.source,ie=h.get(X);delete ie[C.__cacheKey],r.memory.textures--}function U(O){const C=O.texture,X=n.get(O),ie=n.get(C);if(ie.__webglTexture!==void 0&&(o.deleteTexture(ie.__webglTexture),r.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(X.__webglFramebuffer[se]))for(let le=0;le<X.__webglFramebuffer[se].length;le++)o.deleteFramebuffer(X.__webglFramebuffer[se][le]);else o.deleteFramebuffer(X.__webglFramebuffer[se]);X.__webglDepthbuffer&&o.deleteRenderbuffer(X.__webglDepthbuffer[se])}else{if(Array.isArray(X.__webglFramebuffer))for(let se=0;se<X.__webglFramebuffer.length;se++)o.deleteFramebuffer(X.__webglFramebuffer[se]);else o.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&o.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&o.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let se=0;se<X.__webglColorRenderbuffer.length;se++)X.__webglColorRenderbuffer[se]&&o.deleteRenderbuffer(X.__webglColorRenderbuffer[se]);X.__webglDepthRenderbuffer&&o.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let se=0,le=C.length;se<le;se++){const be=n.get(C[se]);be.__webglTexture&&(o.deleteTexture(be.__webglTexture),r.memory.textures--),n.remove(C[se])}n.remove(C),n.remove(O)}let R=0;function N(){R=0}function T(){const O=R;return O>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+i.maxTextures),R+=1,O}function L(O){const C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.colorSpace),C.join()}function P(O,C){const X=n.get(O);if(O.isVideoTexture&&K(O),O.isRenderTargetTexture===!1&&O.version>0&&X.__version!==O.version){const ie=O.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(X,O,C);return}}t.bindTexture(o.TEXTURE_2D,X.__webglTexture,o.TEXTURE0+C)}function k(O,C){const X=n.get(O);if(O.version>0&&X.__version!==O.version){he(X,O,C);return}t.bindTexture(o.TEXTURE_2D_ARRAY,X.__webglTexture,o.TEXTURE0+C)}function V(O,C){const X=n.get(O);if(O.version>0&&X.__version!==O.version){he(X,O,C);return}t.bindTexture(o.TEXTURE_3D,X.__webglTexture,o.TEXTURE0+C)}function G(O,C){const X=n.get(O);if(O.version>0&&X.__version!==O.version){ye(X,O,C);return}t.bindTexture(o.TEXTURE_CUBE_MAP,X.__webglTexture,o.TEXTURE0+C)}const I={[js]:o.REPEAT,[zn]:o.CLAMP_TO_EDGE,[_c]:o.MIRRORED_REPEAT},Q={[an]:o.NEAREST,[hh]:o.NEAREST_MIPMAP_NEAREST,[sc]:o.NEAREST_MIPMAP_LINEAR,[en]:o.LINEAR,[Zm]:o.LINEAR_MIPMAP_NEAREST,[$s]:o.LINEAR_MIPMAP_LINEAR},$={[yv]:o.NEVER,[Tv]:o.ALWAYS,[Ev]:o.LESS,[lg]:o.LEQUAL,[Mv]:o.EQUAL,[wv]:o.GEQUAL,[bv]:o.GREATER,[Sv]:o.NOTEQUAL};function j(O,C,X){if(X?(o.texParameteri(O,o.TEXTURE_WRAP_S,I[C.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,I[C.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,I[C.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Q[C.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Q[C.minFilter])):(o.texParameteri(O,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(O,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(C.wrapS!==zn||C.wrapT!==zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(O,o.TEXTURE_MAG_FILTER,S(C.magFilter)),o.texParameteri(O,o.TEXTURE_MIN_FILTER,S(C.minFilter)),C.minFilter!==an&&C.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,$[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===an||C.minFilter!==sc&&C.minFilter!==$s||C.type===di&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===fs&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(o.texParameterf(O,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function ee(O,C){let X=!1;O.__webglInit===void 0&&(O.__webglInit=!0,C.addEventListener("dispose",b));const ie=C.source;let se=h.get(ie);se===void 0&&(se={},h.set(ie,se));const le=L(C);if(le!==O.__cacheKey){se[le]===void 0&&(se[le]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,X=!0),se[le].usedTimes++;const be=se[O.__cacheKey];be!==void 0&&(se[O.__cacheKey].usedTimes--,be.usedTimes===0&&M(C)),O.__cacheKey=le,O.__webglTexture=se[le].texture}return X}function he(O,C,X){let ie=o.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ie=o.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ie=o.TEXTURE_3D);const se=ee(O,C),le=C.source;t.bindTexture(ie,O.__webglTexture,o.TEXTURE0+X);const be=n.get(le);if(le.version!==be.__version||se===!0){t.activeTexture(o.TEXTURE0+X);const xe=mt.getPrimaries(mt.workingColorSpace),fe=C.colorSpace===hi?null:mt.getPrimaries(C.colorSpace),Ie=C.colorSpace===hi||xe===fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const We=m(C)&&p(C.image)===!1;let ne=_(C.image,We,!1,i.maxTextureSize);ne=Ve(C,ne);const lt=p(ne)||a,Be=s.convert(C.format,C.colorSpace);let $e=s.convert(C.type),Ne=E(C.internalFormat,Be,$e,C.colorSpace,C.isVideoTexture);j(ie,C,lt);let we;const B=C.mipmaps,ue=a&&C.isVideoTexture!==!0&&Ne!==sg,Le=be.__version===void 0||se===!0,re=w(C,ne,lt);if(C.isDepthTexture)Ne=o.DEPTH_COMPONENT,a?C.type===di?Ne=o.DEPTH_COMPONENT32F:C.type===Ls?Ne=o.DEPTH_COMPONENT24:C.type===Er?Ne=o.DEPTH24_STENCIL8:Ne=o.DEPTH_COMPONENT16:C.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Mr&&Ne===o.DEPTH_COMPONENT&&C.type!==Qh&&C.type!==Ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Ls,$e=s.convert(C.type)),C.format===Oo&&Ne===o.DEPTH_COMPONENT&&(Ne=o.DEPTH_STENCIL,C.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Er,$e=s.convert(C.type))),Le&&(ue?t.texStorage2D(o.TEXTURE_2D,1,Ne,ne.width,ne.height):t.texImage2D(o.TEXTURE_2D,0,Ne,ne.width,ne.height,0,Be,$e,null));else if(C.isDataTexture)if(B.length>0&&lt){ue&&Le&&t.texStorage2D(o.TEXTURE_2D,re,Ne,B[0].width,B[0].height);for(let oe=0,z=B.length;oe<z;oe++)we=B[oe],ue?t.texSubImage2D(o.TEXTURE_2D,oe,0,0,we.width,we.height,Be,$e,we.data):t.texImage2D(o.TEXTURE_2D,oe,Ne,we.width,we.height,0,Be,$e,we.data);C.generateMipmaps=!1}else ue?(Le&&t.texStorage2D(o.TEXTURE_2D,re,Ne,ne.width,ne.height),t.texSubImage2D(o.TEXTURE_2D,0,0,0,ne.width,ne.height,Be,$e,ne.data)):t.texImage2D(o.TEXTURE_2D,0,Ne,ne.width,ne.height,0,Be,$e,ne.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ue&&Le&&t.texStorage3D(o.TEXTURE_2D_ARRAY,re,Ne,B[0].width,B[0].height,ne.depth);for(let oe=0,z=B.length;oe<z;oe++)we=B[oe],C.format!==ui?Be!==null?ue?t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,oe,0,0,0,we.width,we.height,ne.depth,Be,we.data,0,0):t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,oe,Ne,we.width,we.height,ne.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?t.texSubImage3D(o.TEXTURE_2D_ARRAY,oe,0,0,0,we.width,we.height,ne.depth,Be,$e,we.data):t.texImage3D(o.TEXTURE_2D_ARRAY,oe,Ne,we.width,we.height,ne.depth,0,Be,$e,we.data)}else{ue&&Le&&t.texStorage2D(o.TEXTURE_2D,re,Ne,B[0].width,B[0].height);for(let oe=0,z=B.length;oe<z;oe++)we=B[oe],C.format!==ui?Be!==null?ue?t.compressedTexSubImage2D(o.TEXTURE_2D,oe,0,0,we.width,we.height,Be,we.data):t.compressedTexImage2D(o.TEXTURE_2D,oe,Ne,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?t.texSubImage2D(o.TEXTURE_2D,oe,0,0,we.width,we.height,Be,$e,we.data):t.texImage2D(o.TEXTURE_2D,oe,Ne,we.width,we.height,0,Be,$e,we.data)}else if(C.isDataArrayTexture)ue?(Le&&t.texStorage3D(o.TEXTURE_2D_ARRAY,re,Ne,ne.width,ne.height,ne.depth),t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Be,$e,ne.data)):t.texImage3D(o.TEXTURE_2D_ARRAY,0,Ne,ne.width,ne.height,ne.depth,0,Be,$e,ne.data);else if(C.isData3DTexture)ue?(Le&&t.texStorage3D(o.TEXTURE_3D,re,Ne,ne.width,ne.height,ne.depth),t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Be,$e,ne.data)):t.texImage3D(o.TEXTURE_3D,0,Ne,ne.width,ne.height,ne.depth,0,Be,$e,ne.data);else if(C.isFramebufferTexture){if(Le)if(ue)t.texStorage2D(o.TEXTURE_2D,re,Ne,ne.width,ne.height);else{let oe=ne.width,z=ne.height;for(let ce=0;ce<re;ce++)t.texImage2D(o.TEXTURE_2D,ce,Ne,oe,z,0,Be,$e,null),oe>>=1,z>>=1}}else if(B.length>0&&lt){ue&&Le&&t.texStorage2D(o.TEXTURE_2D,re,Ne,B[0].width,B[0].height);for(let oe=0,z=B.length;oe<z;oe++)we=B[oe],ue?t.texSubImage2D(o.TEXTURE_2D,oe,0,0,Be,$e,we):t.texImage2D(o.TEXTURE_2D,oe,Ne,Be,$e,we);C.generateMipmaps=!1}else ue?(Le&&t.texStorage2D(o.TEXTURE_2D,re,Ne,ne.width,ne.height),t.texSubImage2D(o.TEXTURE_2D,0,0,0,Be,$e,ne)):t.texImage2D(o.TEXTURE_2D,0,Ne,Be,$e,ne);v(C,lt)&&x(ie),be.__version=le.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function ye(O,C,X){if(C.image.length!==6)return;const ie=ee(O,C),se=C.source;t.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+X);const le=n.get(se);if(se.version!==le.__version||ie===!0){t.activeTexture(o.TEXTURE0+X);const be=mt.getPrimaries(mt.workingColorSpace),xe=C.colorSpace===hi?null:mt.getPrimaries(C.colorSpace),fe=C.colorSpace===hi||be===xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ie=C.isCompressedTexture||C.image[0].isCompressedTexture,We=C.image[0]&&C.image[0].isDataTexture,ne=[];for(let oe=0;oe<6;oe++)!Ie&&!We?ne[oe]=_(C.image[oe],!1,!0,i.maxCubemapSize):ne[oe]=We?C.image[oe].image:C.image[oe],ne[oe]=Ve(C,ne[oe]);const lt=ne[0],Be=p(lt)||a,$e=s.convert(C.format,C.colorSpace),Ne=s.convert(C.type),we=E(C.internalFormat,$e,Ne,C.colorSpace),B=a&&C.isVideoTexture!==!0,ue=le.__version===void 0||ie===!0;let Le=w(C,lt,Be);j(o.TEXTURE_CUBE_MAP,C,Be);let re;if(Ie){B&&ue&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Le,we,lt.width,lt.height);for(let oe=0;oe<6;oe++){re=ne[oe].mipmaps;for(let z=0;z<re.length;z++){const ce=re[z];C.format!==ui?$e!==null?B?t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+oe,z,0,0,ce.width,ce.height,$e,ce.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+oe,z,we,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+oe,z,0,0,ce.width,ce.height,$e,Ne,ce.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+oe,z,we,ce.width,ce.height,0,$e,Ne,ce.data)}}}else{re=C.mipmaps,B&&ue&&(re.length>0&&Le++,t.texStorage2D(o.TEXTURE_CUBE_MAP,Le,we,ne[0].width,ne[0].height));for(let oe=0;oe<6;oe++)if(We){B?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ne[oe].width,ne[oe].height,$e,Ne,ne[oe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,we,ne[oe].width,ne[oe].height,0,$e,Ne,ne[oe].data);for(let z=0;z<re.length;z++){const pe=re[z].image[oe].image;B?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+oe,z+1,0,0,pe.width,pe.height,$e,Ne,pe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+oe,z+1,we,pe.width,pe.height,0,$e,Ne,pe.data)}}else{B?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,$e,Ne,ne[oe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,we,$e,Ne,ne[oe]);for(let z=0;z<re.length;z++){const ce=re[z];B?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+oe,z+1,0,0,$e,Ne,ce.image[oe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+oe,z+1,we,$e,Ne,ce.image[oe])}}}v(C,Be)&&x(o.TEXTURE_CUBE_MAP),le.__version=se.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function ge(O,C,X,ie,se,le){const be=s.convert(X.format,X.colorSpace),xe=s.convert(X.type),fe=E(X.internalFormat,be,xe,X.colorSpace);if(!n.get(C).__hasExternalTextures){const We=Math.max(1,C.width>>le),ne=Math.max(1,C.height>>le);se===o.TEXTURE_3D||se===o.TEXTURE_2D_ARRAY?t.texImage3D(se,le,fe,We,ne,C.depth,0,be,xe,null):t.texImage2D(se,le,fe,We,ne,0,be,xe,null)}t.bindFramebuffer(o.FRAMEBUFFER,O),Me(C)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ie,se,n.get(X).__webglTexture,0,Ce(C)):(se===o.TEXTURE_2D||se>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ie,se,n.get(X).__webglTexture,le),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ae(O,C,X){if(o.bindRenderbuffer(o.RENDERBUFFER,O),C.depthBuffer&&!C.stencilBuffer){let ie=a===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(X||Me(C)){const se=C.depthTexture;se&&se.isDepthTexture&&(se.type===di?ie=o.DEPTH_COMPONENT32F:se.type===Ls&&(ie=o.DEPTH_COMPONENT24));const le=Ce(C);Me(C)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,le,ie,C.width,C.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,le,ie,C.width,C.height)}else o.renderbufferStorage(o.RENDERBUFFER,ie,C.width,C.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,O)}else if(C.depthBuffer&&C.stencilBuffer){const ie=Ce(C);X&&Me(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ie,o.DEPTH24_STENCIL8,C.width,C.height):Me(C)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ie,o.DEPTH24_STENCIL8,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,O)}else{const ie=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let se=0;se<ie.length;se++){const le=ie[se],be=s.convert(le.format,le.colorSpace),xe=s.convert(le.type),fe=E(le.internalFormat,be,xe,le.colorSpace),Ie=Ce(C);X&&Me(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie,fe,C.width,C.height):Me(C)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ie,fe,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,fe,C.width,C.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function te(O,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,O),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),P(C.depthTexture,0);const ie=n.get(C.depthTexture).__webglTexture,se=Ce(C);if(C.depthTexture.format===Mr)Me(C)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ie,0,se):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ie,0);else if(C.depthTexture.format===Oo)Me(C)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ie,0,se):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ve(O){const C=n.get(O),X=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!C.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");te(C.__webglFramebuffer,O)}else if(X){C.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[ie]),C.__webglDepthbuffer[ie]=o.createRenderbuffer(),ae(C.__webglDepthbuffer[ie],O,!1)}else t.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=o.createRenderbuffer(),ae(C.__webglDepthbuffer,O,!1);t.bindFramebuffer(o.FRAMEBUFFER,null)}function Se(O,C,X){const ie=n.get(O);C!==void 0&&ge(ie.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),X!==void 0&&ve(O)}function q(O){const C=O.texture,X=n.get(O),ie=n.get(C);O.addEventListener("dispose",D),O.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=o.createTexture()),ie.__version=C.version,r.memory.textures++);const se=O.isWebGLCubeRenderTarget===!0,le=O.isWebGLMultipleRenderTargets===!0,be=p(O)||a;if(se){X.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer[xe]=[];for(let fe=0;fe<C.mipmaps.length;fe++)X.__webglFramebuffer[xe][fe]=o.createFramebuffer()}else X.__webglFramebuffer[xe]=o.createFramebuffer()}else{if(a&&C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer=[];for(let xe=0;xe<C.mipmaps.length;xe++)X.__webglFramebuffer[xe]=o.createFramebuffer()}else X.__webglFramebuffer=o.createFramebuffer();if(le)if(i.drawBuffers){const xe=O.texture;for(let fe=0,Ie=xe.length;fe<Ie;fe++){const We=n.get(xe[fe]);We.__webglTexture===void 0&&(We.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&O.samples>0&&Me(O)===!1){const xe=le?C:[C];X.__webglMultisampledFramebuffer=o.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let fe=0;fe<xe.length;fe++){const Ie=xe[fe];X.__webglColorRenderbuffer[fe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,X.__webglColorRenderbuffer[fe]);const We=s.convert(Ie.format,Ie.colorSpace),ne=s.convert(Ie.type),lt=E(Ie.internalFormat,We,ne,Ie.colorSpace,O.isXRRenderTarget===!0),Be=Ce(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Be,lt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+fe,o.RENDERBUFFER,X.__webglColorRenderbuffer[fe])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(X.__webglDepthRenderbuffer=o.createRenderbuffer(),ae(X.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(se){t.bindTexture(o.TEXTURE_CUBE_MAP,ie.__webglTexture),j(o.TEXTURE_CUBE_MAP,C,be);for(let xe=0;xe<6;xe++)if(a&&C.mipmaps&&C.mipmaps.length>0)for(let fe=0;fe<C.mipmaps.length;fe++)ge(X.__webglFramebuffer[xe][fe],O,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,fe);else ge(X.__webglFramebuffer[xe],O,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(C,be)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const xe=O.texture;for(let fe=0,Ie=xe.length;fe<Ie;fe++){const We=xe[fe],ne=n.get(We);t.bindTexture(o.TEXTURE_2D,ne.__webglTexture),j(o.TEXTURE_2D,We,be),ge(X.__webglFramebuffer,O,We,o.COLOR_ATTACHMENT0+fe,o.TEXTURE_2D,0),v(We,be)&&x(o.TEXTURE_2D)}t.unbindTexture()}else{let xe=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(a?xe=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,ie.__webglTexture),j(xe,C,be),a&&C.mipmaps&&C.mipmaps.length>0)for(let fe=0;fe<C.mipmaps.length;fe++)ge(X.__webglFramebuffer[fe],O,C,o.COLOR_ATTACHMENT0,xe,fe);else ge(X.__webglFramebuffer,O,C,o.COLOR_ATTACHMENT0,xe,0);v(C,be)&&x(xe),t.unbindTexture()}O.depthBuffer&&ve(O)}function He(O){const C=p(O)||a,X=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let ie=0,se=X.length;ie<se;ie++){const le=X[ie];if(v(le,C)){const be=O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,xe=n.get(le).__webglTexture;t.bindTexture(be,xe),x(be),t.unbindTexture()}}}function _e(O){if(a&&O.samples>0&&Me(O)===!1){const C=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],X=O.width,ie=O.height;let se=o.COLOR_BUFFER_BIT;const le=[],be=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xe=n.get(O),fe=O.isWebGLMultipleRenderTargets===!0;if(fe)for(let Ie=0;Ie<C.length;Ie++)t.bindFramebuffer(o.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,xe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ie=0;Ie<C.length;Ie++){le.push(o.COLOR_ATTACHMENT0+Ie),O.depthBuffer&&le.push(be);const We=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(We===!1&&(O.depthBuffer&&(se|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&(se|=o.STENCIL_BUFFER_BIT)),fe&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,xe.__webglColorRenderbuffer[Ie]),We===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[be]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[be])),fe){const ne=n.get(C[Ie]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ne,0)}o.blitFramebuffer(0,0,X,ie,0,0,X,ie,se,o.NEAREST),c&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),fe)for(let Ie=0;Ie<C.length;Ie++){t.bindFramebuffer(o.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.RENDERBUFFER,xe.__webglColorRenderbuffer[Ie]);const We=n.get(C[Ie]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,xe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.TEXTURE_2D,We,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function Ce(O){return Math.min(i.maxSamples,O.samples)}function Me(O){const C=n.get(O);return a&&O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function K(O){const C=r.render.frame;u.get(O)!==C&&(u.set(O,C),O.update())}function Ve(O,C){const X=O.colorSpace,ie=O.format,se=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===ph||X!==jt&&X!==hi&&(mt.getTransfer(X)===Ct?a===!1?e.has("EXT_sRGB")===!0&&ie===ui?(O.format=ph,O.minFilter=en,O.generateMipmaps=!1):C=ug.sRGBToLinear(C):(ie!==ui||se!==Ws)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),C}this.allocateTextureUnit=T,this.resetTextureUnits=N,this.setTexture2D=P,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=G,this.rebindTextures=Se,this.setupRenderTarget=q,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Me}function Gb(o,e,t){const n=t.isWebGL2;function i(s,r=hi){let a;const l=mt.getTransfer(r);if(s===Ws)return o.UNSIGNED_BYTE;if(s===Qm)return o.UNSIGNED_SHORT_4_4_4_4;if(s===eg)return o.UNSIGNED_SHORT_5_5_5_1;if(s===av)return o.BYTE;if(s===lv)return o.SHORT;if(s===Qh)return o.UNSIGNED_SHORT;if(s===Jm)return o.INT;if(s===Ls)return o.UNSIGNED_INT;if(s===di)return o.FLOAT;if(s===fs)return n?o.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===cv)return o.ALPHA;if(s===ui)return o.RGBA;if(s===uv)return o.LUMINANCE;if(s===hv)return o.LUMINANCE_ALPHA;if(s===Mr)return o.DEPTH_COMPONENT;if(s===Oo)return o.DEPTH_STENCIL;if(s===ph)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===dv)return o.RED;if(s===tg)return o.RED_INTEGER;if(s===fv)return o.RG;if(s===ng)return o.RG_INTEGER;if(s===ig)return o.RGBA_INTEGER;if(s===Jc||s===Qc||s===eu||s===tu)if(l===Ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Jc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Jc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===eu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Kd||s===Zd||s===Jd||s===Qd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Kd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ef||s===tf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ef)return l===Ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===tf)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nf||s===sf||s===rf||s===of||s===af||s===lf||s===cf||s===uf||s===hf||s===df||s===ff||s===pf||s===mf||s===gf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===nf)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sf)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===rf)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===of)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===af)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lf)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===cf)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===uf)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hf)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===df)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ff)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===pf)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mf)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gf)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nu||s===_f||s===vf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===nu)return l===Ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_f)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===vf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===pv||s===xf||s===yf||s===Ef)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===nu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===xf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ef)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Er?n?o.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class Wb extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ki extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xb={type:"move"};class Tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xb)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ki;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class qb extends kr{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=t.getContextAttributes();let p=null,m=null;const v=[],x=[],E=new Ke;let w=null;const S=new En;S.layers.enable(1),S.viewport=new Mt;const b=new En;b.layers.enable(2),b.viewport=new Mt;const D=[S,b],y=new Wb;y.layers.enable(1),y.layers.enable(2);let M=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=v[j];return ee===void 0&&(ee=new Tu,v[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=v[j];return ee===void 0&&(ee=new Tu,v[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=v[j];return ee===void 0&&(ee=new Tu,v[j]=ee),ee.getHandSpace()};function R(j){const ee=x.indexOf(j.inputSource);if(ee===-1)return;const he=v[ee];he!==void 0&&(he.update(j.inputSource,j.frame,c||r),he.dispatchEvent({type:j.type,data:j.inputSource}))}function N(){i.removeEventListener("select",R),i.removeEventListener("selectstart",R),i.removeEventListener("selectend",R),i.removeEventListener("squeeze",R),i.removeEventListener("squeezestart",R),i.removeEventListener("squeezeend",R),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",T);for(let j=0;j<v.length;j++){const ee=x[j];ee!==null&&(x[j]=null,v[j].disconnect(ee))}M=null,U=null,e.setRenderTarget(p),f=null,h=null,d=null,i=null,m=null,$.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",R),i.addEventListener("selectstart",R),i.addEventListener("selectend",R),i.addEventListener("squeeze",R),i.addEventListener("squeezestart",R),i.addEventListener("squeezeend",R),i.addEventListener("end",N),i.addEventListener("inputsourceschange",T),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new Pr(f.framebufferWidth,f.framebufferHeight,{format:ui,type:Ws,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ee=null,he=null,ye=null;_.depth&&(ye=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=_.stencil?Oo:Mr,he=_.stencil?Er:Ls);const ge={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(ge),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new Pr(h.textureWidth,h.textureHeight,{format:ui,type:Ws,depthTexture:new Eg(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ae=e.properties.get(m);ae.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),$.setContext(i),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function T(j){for(let ee=0;ee<j.removed.length;ee++){const he=j.removed[ee],ye=x.indexOf(he);ye>=0&&(x[ye]=null,v[ye].disconnect(he))}for(let ee=0;ee<j.added.length;ee++){const he=j.added[ee];let ye=x.indexOf(he);if(ye===-1){for(let ae=0;ae<v.length;ae++)if(ae>=x.length){x.push(he),ye=ae;break}else if(x[ae]===null){x[ae]=he,ye=ae;break}if(ye===-1)break}const ge=v[ye];ge&&ge.connect(he)}}const L=new H,P=new H;function k(j,ee,he){L.setFromMatrixPosition(ee.matrixWorld),P.setFromMatrixPosition(he.matrixWorld);const ye=L.distanceTo(P),ge=ee.projectionMatrix.elements,ae=he.projectionMatrix.elements,te=ge[14]/(ge[10]-1),ve=ge[14]/(ge[10]+1),Se=(ge[9]+1)/ge[5],q=(ge[9]-1)/ge[5],He=(ge[8]-1)/ge[0],_e=(ae[8]+1)/ae[0],Ce=te*He,Me=te*_e,K=ye/(-He+_e),Ve=K*-He;ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ve),j.translateZ(K),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const O=te+K,C=ve+K,X=Ce-Ve,ie=Me+(ye-Ve),se=Se*ve/C*O,le=q*ve/C*O;j.projectionMatrix.makePerspective(X,ie,se,le,O,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function V(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;y.near=b.near=S.near=j.near,y.far=b.far=S.far=j.far,(M!==y.near||U!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,U=y.far);const ee=j.parent,he=y.cameras;V(y,ee);for(let ye=0;ye<he.length;ye++)V(he[ye],ee);he.length===2?k(y,S,b):y.projectionMatrix.copy(S.projectionMatrix),G(j,y,ee)};function G(j,ee,he){he===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(he.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=zo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)};let I=null;function Q(j,ee){if(u=ee.getViewerPose(c||r),g=ee,u!==null){const he=u.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let ye=!1;he.length!==y.cameras.length&&(y.cameras.length=0,ye=!0);for(let ge=0;ge<he.length;ge++){const ae=he[ge];let te=null;if(f!==null)te=f.getViewport(ae);else{const Se=d.getViewSubImage(h,ae);te=Se.viewport,ge===0&&(e.setRenderTargetTextures(m,Se.colorTexture,h.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(m))}let ve=D[ge];ve===void 0&&(ve=new En,ve.layers.enable(ge),ve.viewport=new Mt,D[ge]=ve),ve.matrix.fromArray(ae.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(ae.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(te.x,te.y,te.width,te.height),ge===0&&(y.matrix.copy(ve.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ye===!0&&y.cameras.push(ve)}}for(let he=0;he<v.length;he++){const ye=x[he],ge=v[he];ye!==null&&ge!==void 0&&ge.update(ye,ee,c||r)}I&&I(j,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const $=new yg;$.setAnimationLoop(Q),this.setAnimationLoop=function(j){I=j},this.dispose=function(){}}}function Yb(o,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,_g(o)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,x,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,E)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===kn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===kn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const x=o._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*x,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===kn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jb(o,e,t,n){let i={},s={},r=[];const a=t.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const E=x.program;n.uniformBlockBinding(v,E)}function c(v,x){let E=i[v.id];E===void 0&&(g(v),E=u(v),i[v.id]=E,v.addEventListener("dispose",p));const w=x.program;n.updateUBOMapping(v,w);const S=e.render.frame;s[v.id]!==S&&(h(v),s[v.id]=S)}function u(v){const x=d();v.__bindingPointIndex=x;const E=o.createBuffer(),w=v.__size,S=v.usage;return o.bindBuffer(o.UNIFORM_BUFFER,E),o.bufferData(o.UNIFORM_BUFFER,w,S),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,x,E),E}function d(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=i[v.id],E=v.uniforms,w=v.__cache;o.bindBuffer(o.UNIFORM_BUFFER,x);for(let S=0,b=E.length;S<b;S++){const D=Array.isArray(E[S])?E[S]:[E[S]];for(let y=0,M=D.length;y<M;y++){const U=D[y];if(f(U,S,y,w)===!0){const R=U.__offset,N=Array.isArray(U.value)?U.value:[U.value];let T=0;for(let L=0;L<N.length;L++){const P=N[L],k=_(P);typeof P=="number"||typeof P=="boolean"?(U.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,R+T,U.__data)):P.isMatrix3?(U.__data[0]=P.elements[0],U.__data[1]=P.elements[1],U.__data[2]=P.elements[2],U.__data[3]=0,U.__data[4]=P.elements[3],U.__data[5]=P.elements[4],U.__data[6]=P.elements[5],U.__data[7]=0,U.__data[8]=P.elements[6],U.__data[9]=P.elements[7],U.__data[10]=P.elements[8],U.__data[11]=0):(P.toArray(U.__data,T),T+=k.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,R,U.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(v,x,E,w){const S=v.value,b=x+"_"+E;if(w[b]===void 0)return typeof S=="number"||typeof S=="boolean"?w[b]=S:w[b]=S.clone(),!0;{const D=w[b];if(typeof S=="number"||typeof S=="boolean"){if(D!==S)return w[b]=S,!0}else if(D.equals(S)===!1)return D.copy(S),!0}return!1}function g(v){const x=v.uniforms;let E=0;const w=16;for(let b=0,D=x.length;b<D;b++){const y=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,U=y.length;M<U;M++){const R=y[M],N=Array.isArray(R.value)?R.value:[R.value];for(let T=0,L=N.length;T<L;T++){const P=N[T],k=_(P),V=E%w;V!==0&&w-V<k.boundary&&(E+=w-V),R.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=E,E+=k.storage}}}const S=E%w;return S>0&&(E+=w-S),v.__size=E,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const E=r.indexOf(x.__bindingPointIndex);r.splice(E,1),o.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const v in i)o.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:l,update:c,dispose:m}}class rd{constructor(e={}){const{canvas:t=Hv(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=r;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=Gs,this.toneMappingExposure=1;const x=this;let E=!1,w=0,S=0,b=null,D=-1,y=null;const M=new Mt,U=new Mt;let R=null;const N=new Je(0);let T=0,L=t.width,P=t.height,k=1,V=null,G=null;const I=new Mt(0,0,L,P),Q=new Mt(0,0,L,P);let $=!1;const j=new nd;let ee=!1,he=!1,ye=null;const ge=new at,ae=new Ke,te=new H,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return b===null?k:1}let q=n;function He(F,W){for(let J=0;J<F.length;J++){const Z=F[J],Y=t.getContext(Z,W);if(Y!==null)return Y}return null}try{const F={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kh}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",ce,!1),q===null){const W=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&W.shift(),q=He(W,F),q===null)throw He(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let _e,Ce,Me,K,Ve,O,C,X,ie,se,le,be,xe,fe,Ie,We,ne,lt,Be,$e,Ne,we,B,ue;function Le(){_e=new sM(q),Ce=new JE(q,_e,e),_e.init(Ce),we=new Gb(q,_e,Ce),Me=new Hb(q,_e,Ce),K=new aM(q),Ve=new Ab,O=new Vb(q,_e,Me,Ve,Ce,we,K),C=new eM(x),X=new iM(x),ie=new mx(q,Ce),B=new KE(q,_e,ie,Ce),se=new rM(q,ie,K,B),le=new hM(q,se,ie,K),Be=new uM(q,Ce,O),We=new QE(Ve),be=new Tb(x,C,X,_e,Ce,B,We),xe=new Yb(x,Ve),fe=new Cb,Ie=new Nb(_e,Ce),lt=new $E(x,C,X,Me,le,h,l),ne=new kb(x,le,Ce),ue=new jb(q,K,Ce,Me),$e=new ZE(q,_e,K,Ce),Ne=new oM(q,_e,K,Ce),K.programs=be.programs,x.capabilities=Ce,x.extensions=_e,x.properties=Ve,x.renderLists=fe,x.shadowMap=ne,x.state=Me,x.info=K}Le();const re=new qb(x,q);this.xr=re,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const F=_e.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=_e.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(F){F!==void 0&&(k=F,this.setSize(L,P,!1))},this.getSize=function(F){return F.set(L,P)},this.setSize=function(F,W,J=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=F,P=W,t.width=Math.floor(F*k),t.height=Math.floor(W*k),J===!0&&(t.style.width=F+"px",t.style.height=W+"px"),this.setViewport(0,0,F,W)},this.getDrawingBufferSize=function(F){return F.set(L*k,P*k).floor()},this.setDrawingBufferSize=function(F,W,J){L=F,P=W,k=J,t.width=Math.floor(F*J),t.height=Math.floor(W*J),this.setViewport(0,0,F,W)},this.getCurrentViewport=function(F){return F.copy(M)},this.getViewport=function(F){return F.copy(I)},this.setViewport=function(F,W,J,Z){F.isVector4?I.set(F.x,F.y,F.z,F.w):I.set(F,W,J,Z),Me.viewport(M.copy(I).multiplyScalar(k).floor())},this.getScissor=function(F){return F.copy(Q)},this.setScissor=function(F,W,J,Z){F.isVector4?Q.set(F.x,F.y,F.z,F.w):Q.set(F,W,J,Z),Me.scissor(U.copy(Q).multiplyScalar(k).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(F){Me.setScissorTest($=F)},this.setOpaqueSort=function(F){V=F},this.setTransparentSort=function(F){G=F},this.getClearColor=function(F){return F.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(F=!0,W=!0,J=!0){let Z=0;if(F){let Y=!1;if(b!==null){const me=b.texture.format;Y=me===ig||me===ng||me===tg}if(Y){const me=b.texture.type,Ue=me===Ws||me===Ls||me===Qh||me===Er||me===Qm||me===eg,Ye=lt.getClearColor(),Oe=lt.getClearAlpha(),ke=Ye.r,je=Ye.g,et=Ye.b;Ue?(f[0]=ke,f[1]=je,f[2]=et,f[3]=Oe,q.clearBufferuiv(q.COLOR,0,f)):(g[0]=ke,g[1]=je,g[2]=et,g[3]=Oe,q.clearBufferiv(q.COLOR,0,g))}else Z|=q.COLOR_BUFFER_BIT}W&&(Z|=q.DEPTH_BUFFER_BIT),J&&(Z|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),fe.dispose(),Ie.dispose(),Ve.dispose(),C.dispose(),X.dispose(),le.dispose(),B.dispose(),ue.dispose(),be.dispose(),re.dispose(),re.removeEventListener("sessionstart",Ae),re.removeEventListener("sessionend",Fe),ye&&(ye.dispose(),ye=null),de.stop()};function oe(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const F=K.autoReset,W=ne.enabled,J=ne.autoUpdate,Z=ne.needsUpdate,Y=ne.type;Le(),K.autoReset=F,ne.enabled=W,ne.autoUpdate=J,ne.needsUpdate=Z,ne.type=Y}function ce(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function pe(F){const W=F.target;W.removeEventListener("dispose",pe),Ge(W)}function Ge(F){ze(F),Ve.remove(F)}function ze(F){const W=Ve.get(F).programs;W!==void 0&&(W.forEach(function(J){be.releaseProgram(J)}),F.isShaderMaterial&&be.releaseShaderCache(F))}this.renderBufferDirect=function(F,W,J,Z,Y,me){W===null&&(W=ve);const Ue=Y.isMesh&&Y.matrixWorld.determinant()<0,Ye=St(F,W,J,Z,Y);Me.setMaterial(Z,Ue);let Oe=J.index,ke=1;if(Z.wireframe===!0){if(Oe=se.getWireframeAttribute(J),Oe===void 0)return;ke=2}const je=J.drawRange,et=J.attributes.position;let Pt=je.start*ke,Kt=(je.start+je.count)*ke;me!==null&&(Pt=Math.max(Pt,me.start*ke),Kt=Math.min(Kt,(me.start+me.count)*ke)),Oe!==null?(Pt=Math.max(Pt,0),Kt=Math.min(Kt,Oe.count)):et!=null&&(Pt=Math.max(Pt,0),Kt=Math.min(Kt,et.count));const _t=Kt-Pt;if(_t<0||_t===1/0)return;B.setup(Y,Z,Ye,J,Oe);let Tn,xt=$e;if(Oe!==null&&(Tn=ie.get(Oe),xt=Ne,xt.setIndex(Tn)),Y.isMesh)Z.wireframe===!0?(Me.setLineWidth(Z.wireframeLinewidth*Se()),xt.setMode(q.LINES)):xt.setMode(q.TRIANGLES);else if(Y.isLine){let tt=Z.linewidth;tt===void 0&&(tt=1),Me.setLineWidth(tt*Se()),Y.isLineSegments?xt.setMode(q.LINES):Y.isLineLoop?xt.setMode(q.LINE_LOOP):xt.setMode(q.LINE_STRIP)}else Y.isPoints?xt.setMode(q.POINTS):Y.isSprite&&xt.setMode(q.TRIANGLES);if(Y.isBatchedMesh)xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)xt.renderInstances(Pt,_t,Y.count);else if(J.isInstancedBufferGeometry){const tt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,jc=Math.min(J.instanceCount,tt);xt.renderInstances(Pt,_t,jc)}else xt.render(Pt,_t)};function Ze(F,W,J){F.transparent===!0&&F.side===Ti&&F.forceSinglePass===!1?(F.side=kn,F.needsUpdate=!0,bt(F,W,J),F.side=_s,F.needsUpdate=!0,bt(F,W,J),F.side=Ti):bt(F,W,J)}this.compile=function(F,W,J=null){J===null&&(J=F),p=Ie.get(J),p.init(),v.push(p),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),F!==J&&F.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(x._useLegacyLights);const Z=new Set;return F.traverse(function(Y){const me=Y.material;if(me)if(Array.isArray(me))for(let Ue=0;Ue<me.length;Ue++){const Ye=me[Ue];Ze(Ye,J,Y),Z.add(Ye)}else Ze(me,J,Y),Z.add(me)}),v.pop(),p=null,Z},this.compileAsync=function(F,W,J=null){const Z=this.compile(F,W,J);return new Promise(Y=>{function me(){if(Z.forEach(function(Ue){Ve.get(Ue).currentProgram.isReady()&&Z.delete(Ue)}),Z.size===0){Y(F);return}setTimeout(me,10)}_e.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let nt=null;function Re(F){nt&&nt(F)}function Ae(){de.stop()}function Fe(){de.start()}const de=new yg;de.setAnimationLoop(Re),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(F){nt=F,re.setAnimationLoop(F),F===null?de.stop():de.start()},re.addEventListener("sessionstart",Ae),re.addEventListener("sessionend",Fe),this.render=function(F,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(W),W=re.getCamera()),F.isScene===!0&&F.onBeforeRender(x,F,W,b),p=Ie.get(F,v.length),p.init(),v.push(p),ge.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),j.setFromProjectionMatrix(ge),he=this.localClippingEnabled,ee=We.init(this.clippingPlanes,he),_=fe.get(F,m.length),_.init(),m.push(_),qe(F,W,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,G),this.info.render.frame++,ee===!0&&We.beginShadows();const J=p.state.shadowsArray;if(ne.render(J,F,W),ee===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),lt.render(_,F),p.setupLights(x._useLegacyLights),W.isArrayCamera){const Z=W.cameras;for(let Y=0,me=Z.length;Y<me;Y++){const Ue=Z[Y];Xe(_,F,Ue,Ue.viewport)}}else Xe(_,F,W);b!==null&&(O.updateMultisampleRenderTarget(b),O.updateRenderTargetMipmap(b)),F.isScene===!0&&F.onAfterRender(x,F,W),B.resetDefaultState(),D=-1,y=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function qe(F,W,J,Z){if(F.visible===!1)return;if(F.layers.test(W.layers)){if(F.isGroup)J=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(W);else if(F.isLight)p.pushLight(F),F.castShadow&&p.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||j.intersectsSprite(F)){Z&&te.setFromMatrixPosition(F.matrixWorld).applyMatrix4(ge);const Ue=le.update(F),Ye=F.material;Ye.visible&&_.push(F,Ue,Ye,J,te.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||j.intersectsObject(F))){const Ue=le.update(F),Ye=F.material;if(Z&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),te.copy(F.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),te.copy(Ue.boundingSphere.center)),te.applyMatrix4(F.matrixWorld).applyMatrix4(ge)),Array.isArray(Ye)){const Oe=Ue.groups;for(let ke=0,je=Oe.length;ke<je;ke++){const et=Oe[ke],Pt=Ye[et.materialIndex];Pt&&Pt.visible&&_.push(F,Ue,Pt,J,te.z,et)}}else Ye.visible&&_.push(F,Ue,Ye,J,te.z,null)}}const me=F.children;for(let Ue=0,Ye=me.length;Ue<Ye;Ue++)qe(me[Ue],W,J,Z)}function Xe(F,W,J,Z){const Y=F.opaque,me=F.transmissive,Ue=F.transparent;p.setupLightsView(J),ee===!0&&We.setGlobalState(x.clippingPlanes,J),me.length>0&&Qe(Y,me,W,J),Z&&Me.viewport(M.copy(Z)),Y.length>0&&It(Y,W,J),me.length>0&&It(me,W,J),Ue.length>0&&It(Ue,W,J),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Qe(F,W,J,Z){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const me=Ce.isWebGL2;ye===null&&(ye=new Pr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?fs:Ws,minFilter:$s,samples:me?4:0})),x.getDrawingBufferSize(ae),me?ye.setSize(ae.x,ae.y):ye.setSize(Mc(ae.x),Mc(ae.y));const Ue=x.getRenderTarget();x.setRenderTarget(ye),x.getClearColor(N),T=x.getClearAlpha(),T<1&&x.setClearColor(16777215,.5),x.clear();const Ye=x.toneMapping;x.toneMapping=Gs,It(F,J,Z),O.updateMultisampleRenderTarget(ye),O.updateRenderTargetMipmap(ye);let Oe=!1;for(let ke=0,je=W.length;ke<je;ke++){const et=W[ke],Pt=et.object,Kt=et.geometry,_t=et.material,Tn=et.group;if(_t.side===Ti&&Pt.layers.test(Z.layers)){const xt=_t.side;_t.side=kn,_t.needsUpdate=!0,st(Pt,J,Z,Kt,_t,Tn),_t.side=xt,_t.needsUpdate=!0,Oe=!0}}Oe===!0&&(O.updateMultisampleRenderTarget(ye),O.updateRenderTargetMipmap(ye)),x.setRenderTarget(Ue),x.setClearColor(N,T),x.toneMapping=Ye}function It(F,W,J){const Z=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,me=F.length;Y<me;Y++){const Ue=F[Y],Ye=Ue.object,Oe=Ue.geometry,ke=Z===null?Ue.material:Z,je=Ue.group;Ye.layers.test(J.layers)&&st(Ye,W,J,Oe,ke,je)}}function st(F,W,J,Z,Y,me){F.onBeforeRender(x,W,J,Z,Y,me),F.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),Y.onBeforeRender(x,W,J,Z,F,me),Y.transparent===!0&&Y.side===Ti&&Y.forceSinglePass===!1?(Y.side=kn,Y.needsUpdate=!0,x.renderBufferDirect(J,W,Z,Y,F,me),Y.side=_s,Y.needsUpdate=!0,x.renderBufferDirect(J,W,Z,Y,F,me),Y.side=Ti):x.renderBufferDirect(J,W,Z,Y,F,me),F.onAfterRender(x,W,J,Z,Y,me)}function bt(F,W,J){W.isScene!==!0&&(W=ve);const Z=Ve.get(F),Y=p.state.lights,me=p.state.shadowsArray,Ue=Y.state.version,Ye=be.getParameters(F,Y.state,me,W,J),Oe=be.getProgramCacheKey(Ye);let ke=Z.programs;Z.environment=F.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(F.isMeshStandardMaterial?X:C).get(F.envMap||Z.environment),ke===void 0&&(F.addEventListener("dispose",pe),ke=new Map,Z.programs=ke);let je=ke.get(Oe);if(je!==void 0){if(Z.currentProgram===je&&Z.lightsStateVersion===Ue)return At(F,Ye),je}else Ye.uniforms=be.getUniforms(F),F.onBuild(J,Ye,x),F.onBeforeCompile(Ye,x),je=be.acquireProgram(Ye,Oe),ke.set(Oe,je),Z.uniforms=Ye.uniforms;const et=Z.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(et.clippingPlanes=We.uniform),At(F,Ye),Z.needsLights=qn(F),Z.lightsStateVersion=Ue,Z.needsLights&&(et.ambientLightColor.value=Y.state.ambient,et.lightProbe.value=Y.state.probe,et.directionalLights.value=Y.state.directional,et.directionalLightShadows.value=Y.state.directionalShadow,et.spotLights.value=Y.state.spot,et.spotLightShadows.value=Y.state.spotShadow,et.rectAreaLights.value=Y.state.rectArea,et.ltc_1.value=Y.state.rectAreaLTC1,et.ltc_2.value=Y.state.rectAreaLTC2,et.pointLights.value=Y.state.point,et.pointLightShadows.value=Y.state.pointShadow,et.hemisphereLights.value=Y.state.hemi,et.directionalShadowMap.value=Y.state.directionalShadowMap,et.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,et.spotShadowMap.value=Y.state.spotShadowMap,et.spotLightMatrix.value=Y.state.spotLightMatrix,et.spotLightMap.value=Y.state.spotLightMap,et.pointShadowMap.value=Y.state.pointShadowMap,et.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=je,Z.uniformsList=null,je}function $t(F){if(F.uniformsList===null){const W=F.currentProgram.getUniforms();F.uniformsList=rc.seqWithValue(W.seq,F.uniforms)}return F.uniformsList}function At(F,W){const J=Ve.get(F);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function St(F,W,J,Z,Y){W.isScene!==!0&&(W=ve),O.resetTextureUnits();const me=W.fog,Ue=Z.isMeshStandardMaterial?W.environment:null,Ye=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:jt,Oe=(Z.isMeshStandardMaterial?X:C).get(Z.envMap||Ue),ke=Z.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,je=!!J.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),et=!!J.morphAttributes.position,Pt=!!J.morphAttributes.normal,Kt=!!J.morphAttributes.color;let _t=Gs;Z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(_t=x.toneMapping);const Tn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xt=Tn!==void 0?Tn.length:0,tt=Ve.get(Z),jc=p.state.lights;if(ee===!0&&(he===!0||F!==y)){const si=F===y&&Z.id===D;We.setState(Z,F,si)}let kt=!1;Z.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==jc.state.version||tt.outputColorSpace!==Ye||Y.isBatchedMesh&&tt.batching===!1||!Y.isBatchedMesh&&tt.batching===!0||Y.isInstancedMesh&&tt.instancing===!1||!Y.isInstancedMesh&&tt.instancing===!0||Y.isSkinnedMesh&&tt.skinning===!1||!Y.isSkinnedMesh&&tt.skinning===!0||Y.isInstancedMesh&&tt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&tt.instancingColor===!1&&Y.instanceColor!==null||tt.envMap!==Oe||Z.fog===!0&&tt.fog!==me||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==We.numPlanes||tt.numIntersection!==We.numIntersection)||tt.vertexAlphas!==ke||tt.vertexTangents!==je||tt.morphTargets!==et||tt.morphNormals!==Pt||tt.morphColors!==Kt||tt.toneMapping!==_t||Ce.isWebGL2===!0&&tt.morphTargetsCount!==xt)&&(kt=!0):(kt=!0,tt.__version=Z.version);let tr=tt.currentProgram;kt===!0&&(tr=bt(Z,W,Y));let Hd=!1,Qo=!1,$c=!1;const mn=tr.getUniforms(),nr=tt.uniforms;if(Me.useProgram(tr.program)&&(Hd=!0,Qo=!0,$c=!0),Z.id!==D&&(D=Z.id,Qo=!0),Hd||y!==F){mn.setValue(q,"projectionMatrix",F.projectionMatrix),mn.setValue(q,"viewMatrix",F.matrixWorldInverse);const si=mn.map.cameraPosition;si!==void 0&&si.setValue(q,te.setFromMatrixPosition(F.matrixWorld)),Ce.logarithmicDepthBuffer&&mn.setValue(q,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&mn.setValue(q,"isOrthographic",F.isOrthographicCamera===!0),y!==F&&(y=F,Qo=!0,$c=!0)}if(Y.isSkinnedMesh){mn.setOptional(q,Y,"bindMatrix"),mn.setOptional(q,Y,"bindMatrixInverse");const si=Y.skeleton;si&&(Ce.floatVertexTextures?(si.boneTexture===null&&si.computeBoneTexture(),mn.setValue(q,"boneTexture",si.boneTexture,O)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(mn.setOptional(q,Y,"batchingTexture"),mn.setValue(q,"batchingTexture",Y._matricesTexture,O));const Kc=J.morphAttributes;if((Kc.position!==void 0||Kc.normal!==void 0||Kc.color!==void 0&&Ce.isWebGL2===!0)&&Be.update(Y,J,tr),(Qo||tt.receiveShadow!==Y.receiveShadow)&&(tt.receiveShadow=Y.receiveShadow,mn.setValue(q,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(nr.envMap.value=Oe,nr.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Qo&&(mn.setValue(q,"toneMappingExposure",x.toneMappingExposure),tt.needsLights&&gt(nr,$c),me&&Z.fog===!0&&xe.refreshFogUniforms(nr,me),xe.refreshMaterialUniforms(nr,Z,k,P,ye),rc.upload(q,$t(tt),nr,O)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(rc.upload(q,$t(tt),nr,O),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&mn.setValue(q,"center",Y.center),mn.setValue(q,"modelViewMatrix",Y.modelViewMatrix),mn.setValue(q,"normalMatrix",Y.normalMatrix),mn.setValue(q,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const si=Z.uniformsGroups;for(let Zc=0,A0=si.length;Zc<A0;Zc++)if(Ce.isWebGL2){const Vd=si[Zc];ue.update(Vd,tr),ue.bind(Vd,tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tr}function gt(F,W){F.ambientLightColor.needsUpdate=W,F.lightProbe.needsUpdate=W,F.directionalLights.needsUpdate=W,F.directionalLightShadows.needsUpdate=W,F.pointLights.needsUpdate=W,F.pointLightShadows.needsUpdate=W,F.spotLights.needsUpdate=W,F.spotLightShadows.needsUpdate=W,F.rectAreaLights.needsUpdate=W,F.hemisphereLights.needsUpdate=W}function qn(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(F,W,J){Ve.get(F.texture).__webglTexture=W,Ve.get(F.depthTexture).__webglTexture=J;const Z=Ve.get(F);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=J===void 0,Z.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,W){const J=Ve.get(F);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(F,W=0,J=0){b=F,w=W,S=J;let Z=!0,Y=null,me=!1,Ue=!1;if(F){const Oe=Ve.get(F);Oe.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(q.FRAMEBUFFER,null),Z=!1):Oe.__webglFramebuffer===void 0?O.setupRenderTarget(F):Oe.__hasExternalTextures&&O.rebindTextures(F,Ve.get(F.texture).__webglTexture,Ve.get(F.depthTexture).__webglTexture);const ke=F.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ue=!0);const je=Ve.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(je[W])?Y=je[W][J]:Y=je[W],me=!0):Ce.isWebGL2&&F.samples>0&&O.useMultisampledRTT(F)===!1?Y=Ve.get(F).__webglMultisampledFramebuffer:Array.isArray(je)?Y=je[J]:Y=je,M.copy(F.viewport),U.copy(F.scissor),R=F.scissorTest}else M.copy(I).multiplyScalar(k).floor(),U.copy(Q).multiplyScalar(k).floor(),R=$;if(Me.bindFramebuffer(q.FRAMEBUFFER,Y)&&Ce.drawBuffers&&Z&&Me.drawBuffers(F,Y),Me.viewport(M),Me.scissor(U),Me.setScissorTest(R),me){const Oe=Ve.get(F.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,J)}else if(Ue){const Oe=Ve.get(F.texture),ke=W||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Oe.__webglTexture,J||0,ke)}D=-1},this.readRenderTargetPixels=function(F,W,J,Z,Y,me,Ue){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Ve.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ye=Ye[Ue]),Ye){Me.bindFramebuffer(q.FRAMEBUFFER,Ye);try{const Oe=F.texture,ke=Oe.format,je=Oe.type;if(ke!==ui&&we.convert(ke)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const et=je===fs&&(_e.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&_e.has("EXT_color_buffer_float"));if(je!==Ws&&we.convert(je)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===di&&(Ce.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=F.width-Z&&J>=0&&J<=F.height-Y&&q.readPixels(W,J,Z,Y,we.convert(ke),we.convert(je),me)}finally{const Oe=b!==null?Ve.get(b).__webglFramebuffer:null;Me.bindFramebuffer(q.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(F,W,J=0){const Z=Math.pow(2,-J),Y=Math.floor(W.image.width*Z),me=Math.floor(W.image.height*Z);O.setTexture2D(W,0),q.copyTexSubImage2D(q.TEXTURE_2D,J,0,0,F.x,F.y,Y,me),Me.unbindTexture()},this.copyTextureToTexture=function(F,W,J,Z=0){const Y=W.image.width,me=W.image.height,Ue=we.convert(J.format),Ye=we.convert(J.type);O.setTexture2D(J,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,J.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,J.unpackAlignment),W.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Z,F.x,F.y,Y,me,Ue,Ye,W.image.data):W.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Z,F.x,F.y,W.mipmaps[0].width,W.mipmaps[0].height,Ue,W.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,Z,F.x,F.y,Ue,Ye,W.image),Z===0&&J.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(F,W,J,Z,Y=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=F.max.x-F.min.x+1,Ue=F.max.y-F.min.y+1,Ye=F.max.z-F.min.z+1,Oe=we.convert(Z.format),ke=we.convert(Z.type);let je;if(Z.isData3DTexture)O.setTexture3D(Z,0),je=q.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)O.setTexture2DArray(Z,0),je=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Z.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Z.unpackAlignment);const et=q.getParameter(q.UNPACK_ROW_LENGTH),Pt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Kt=q.getParameter(q.UNPACK_SKIP_PIXELS),_t=q.getParameter(q.UNPACK_SKIP_ROWS),Tn=q.getParameter(q.UNPACK_SKIP_IMAGES),xt=J.isCompressedTexture?J.mipmaps[Y]:J.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,xt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,xt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,F.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,F.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,F.min.z),J.isDataTexture||J.isData3DTexture?q.texSubImage3D(je,Y,W.x,W.y,W.z,me,Ue,Ye,Oe,ke,xt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(je,Y,W.x,W.y,W.z,me,Ue,Ye,Oe,xt.data)):q.texSubImage3D(je,Y,W.x,W.y,W.z,me,Ue,Ye,Oe,ke,xt),q.pixelStorei(q.UNPACK_ROW_LENGTH,et),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Pt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Kt),q.pixelStorei(q.UNPACK_SKIP_ROWS,_t),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Tn),Y===0&&Z.generateMipmaps&&q.generateMipmap(je),Me.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?O.setTextureCube(F,0):F.isData3DTexture?O.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?O.setTexture2DArray(F,0):O.setTexture2D(F,0),Me.unbindTexture()},this.resetState=function(){w=0,S=0,b=null,Me.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ps}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ed?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===zc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tt?br:og}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===br?Tt:jt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $b extends rd{}$b.prototype.isWebGL1Renderer=!0;class Ag extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Kb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new H;class od{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Oi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new od(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const dp=new H,fp=new Mt,pp=new Mt,Zb=new H,mp=new at,Rl=new H,Au=new $i,gp=new at,Du=new el;class Jb extends Ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$d,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ys),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Rl),this.boundingBox.expandByPoint(Rl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $i),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Rl),this.boundingSphere.expandByPoint(Rl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Au.copy(this.boundingSphere),Au.applyMatrix4(i),e.ray.intersectsSphere(Au)!==!1&&(gp.copy(i).invert(),Du.copy(e.ray).applyMatrix4(gp),!(this.boundingBox!==null&&Du.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Du)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$d?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ov?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;fp.fromBufferAttribute(i.attributes.skinIndex,e),pp.fromBufferAttribute(i.attributes.skinWeight,e),dp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=pp.getComponent(s);if(r!==0){const a=fp.getComponent(s);mp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Zb.copy(dp).applyMatrix4(mp),r)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Dg extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Cg extends fn{constructor(e=null,t=1,n=1,i,s,r,a,l,c=an,u=an,d,h){super(null,r,a,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _p=new at,Qb=new at;class ad{constructor(e=[],t=[]){this.uuid=Ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new at;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:Qb;_p.multiplyMatrices(a,t[s]),_p.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ad(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Cg(t,e,e,ui,di);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Dg),this.bones.push(r),this.boneInverses.push(new at().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class _h extends pn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const oo=new at,vp=new at,Pl=[],xp=new ys,eS=new at,sa=new Ut,ra=new $i;class tS extends Ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _h(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,eS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ys),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oo),xp.copy(e.boundingBox).applyMatrix4(oo),this.boundingBox.union(xp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oo),ra.copy(e.boundingSphere).applyMatrix4(oo),this.boundingSphere.union(ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(n),e.ray.intersectsSphere(ra)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,oo),vp.multiplyMatrices(n,oo),sa.matrixWorld=vp,sa.raycast(e,Pl);for(let r=0,a=Pl.length;r<a;r++){const l=Pl[r];l.instanceId=s,l.object=this,t.push(l)}Pl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _h(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Rg extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yp=new H,Ep=new H,Mp=new at,Cu=new el,Ll=new $i;class ld extends Ft{constructor(e=new bn,t=new Rg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)yp.fromBufferAttribute(t,i-1),Ep.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=yp.distanceTo(Ep);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ll.copy(n.boundingSphere),Ll.applyMatrix4(i),Ll.radius+=s,e.ray.intersectsSphere(Ll)===!1)return;Mp.copy(i).invert(),Cu.copy(e.ray).applyMatrix4(Mp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new H,u=new H,d=new H,h=new H,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,r.start),v=Math.min(g.count,r.start+r.count);for(let x=m,E=v-1;x<E;x+=f){const w=g.getX(x),S=g.getX(x+1);if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,S),Cu.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(h);D<e.near||D>e.far||t.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,r.start),v=Math.min(p.count,r.start+r.count);for(let x=m,E=v-1;x<E;x+=f){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),Cu.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(h);S<e.near||S>e.far||t.push({distance:S,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const bp=new H,Sp=new H;class nS extends ld{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)bp.fromBufferAttribute(t,i),Sp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bp.distanceTo(Sp);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class iS extends ld{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pg extends Gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wp=new at,vh=new el,Fl=new $i,Il=new H;class sS extends Ft{constructor(e=new bn,t=new Pg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fl.copy(n.boundingSphere),Fl.applyMatrix4(i),Fl.radius+=s,e.ray.intersectsSphere(Fl)===!1)return;wp.copy(i).invert(),vh.copy(e.ray).applyMatrix4(wp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=h,_=f;g<_;g++){const p=c.getX(g);Il.fromBufferAttribute(d,p),Tp(Il,p,l,i,e,t,this)}}else{const h=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=h,_=f;g<_;g++)Il.fromBufferAttribute(d,g),Tp(Il,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Tp(o,e,t,n,i,s,r){const a=vh.distanceSqToPoint(o);if(a<t){const l=new H;vh.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:r})}}class Vc extends bn{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],f=[];let g=0;const _=[],p=n/2;let m=0;v(),r===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new un(d,3)),this.setAttribute("normal",new un(h,3)),this.setAttribute("uv",new un(f,2));function v(){const E=new H,w=new H;let S=0;const b=(t-e)/n;for(let D=0;D<=s;D++){const y=[],M=D/s,U=M*(t-e)+e;for(let R=0;R<=i;R++){const N=R/i,T=N*l+a,L=Math.sin(T),P=Math.cos(T);w.x=U*L,w.y=-M*n+p,w.z=U*P,d.push(w.x,w.y,w.z),E.set(L,b,P).normalize(),h.push(E.x,E.y,E.z),f.push(N,1-M),y.push(g++)}_.push(y)}for(let D=0;D<i;D++)for(let y=0;y<s;y++){const M=_[y][D],U=_[y+1][D],R=_[y+1][D+1],N=_[y][D+1];u.push(M,U,N),u.push(U,R,N),S+=6}c.addGroup(m,S,0),m+=S}function x(E){const w=g,S=new Ke,b=new H;let D=0;const y=E===!0?e:t,M=E===!0?1:-1;for(let R=1;R<=i;R++)d.push(0,p*M,0),h.push(0,M,0),f.push(.5,.5),g++;const U=g;for(let R=0;R<=i;R++){const T=R/i*l+a,L=Math.cos(T),P=Math.sin(T);b.x=y*P,b.y=p*M,b.z=y*L,d.push(b.x,b.y,b.z),h.push(0,M,0),S.x=L*.5+.5,S.y=P*.5*M+.5,f.push(S.x,S.y),g++}for(let R=0;R<i;R++){const N=w+R,T=U+R;E===!0?u.push(T,T+1,N):u.push(T+1,T,N),D+=3}c.addGroup(m,D,E===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ho extends bn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const u=[],d=new H,h=new H,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const v=[],x=m/n;let E=0;m===0&&r===0?E=.5/t:m===n&&l===Math.PI&&(E=-.5/t);for(let w=0;w<=t;w++){const S=w/t;d.x=-e*Math.cos(i+S*s)*Math.sin(r+x*a),d.y=e*Math.cos(r+x*a),d.z=e*Math.sin(i+S*s)*Math.sin(r+x*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),p.push(S+E,1-x),v.push(c++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const x=u[m][v+1],E=u[m][v],w=u[m+1][v],S=u[m+1][v+1];(m!==0||r>0)&&f.push(x,E,S),(m!==n-1||l<Math.PI)&&f.push(E,w,S)}this.setIndex(f),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gc extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ag,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ri extends Gc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ln(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Nl(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function rS(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function oS(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ap(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[r++]=o[a+l]}return i}function Lg(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)}class tl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class aS extends tl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mf,endingEnd:Mf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case bf:s=e,a=2*t-n;break;case Sf:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bf:r=e,l=2*n-t;break;case Sf:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-h*p+2*h*_-h*g,v=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*g+1,x=(-1-f)*p+(1.5+f)*_+.5*g,E=f*p-f*_;for(let w=0;w!==a;++w)s[w]=m*r[u+w]+v*r[c+w]+x*r[l+w]+E*r[d+w];return s}}class lS extends tl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==a;++h)s[h]=r[c+h]*d+r[l+h]*u;return s}}class cS extends tl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ki{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Nl(t,this.TimeBufferType),this.values=Nl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Nl(e.times,Array),values:Nl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new aS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ka:t=this.InterpolantFactoryMethodDiscrete;break;case Bo:t=this.InterpolantFactoryMethodLinear;break;case iu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ka;case this.InterpolantFactoryMethodLinear:return Bo;case this.InterpolantFactoryMethodSmooth:return iu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&rS(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===iu,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[h+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const d=a*n,h=r*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ki.prototype.TimeBufferType=Float32Array;Ki.prototype.ValueBufferType=Float32Array;Ki.prototype.DefaultInterpolation=Bo;class Zo extends Ki{}Zo.prototype.ValueTypeName="bool";Zo.prototype.ValueBufferType=Array;Zo.prototype.DefaultInterpolation=ka;Zo.prototype.InterpolantFactoryMethodLinear=void 0;Zo.prototype.InterpolantFactoryMethodSmooth=void 0;class Fg extends Ki{}Fg.prototype.ValueTypeName="color";class Vo extends Ki{}Vo.prototype.ValueTypeName="number";class uS extends tl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Yi.slerpFlat(s,0,r,c-a,r,c,l);return s}}class Ir extends Ki{InterpolantFactoryMethodLinear(e){return new uS(this.times,this.values,this.getValueSize(),e)}}Ir.prototype.ValueTypeName="quaternion";Ir.prototype.DefaultInterpolation=Bo;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Jo extends Ki{}Jo.prototype.ValueTypeName="string";Jo.prototype.ValueBufferType=Array;Jo.prototype.DefaultInterpolation=ka;Jo.prototype.InterpolantFactoryMethodLinear=void 0;Jo.prototype.InterpolantFactoryMethodSmooth=void 0;class Go extends Ki{}Go.prototype.ValueTypeName="vector";class hS{constructor(e,t=-1,n,i=mv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ci(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(fS(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Ki.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=oS(l);l=Ap(l,1,u),c=Ap(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Vo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,g,_){if(f.length!==0){const p=[],m=[];Lg(f,p,m,g),p.length!==0&&_.push(new d(h,p,m))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)f[h[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let v=0;v!==h[g].morphTargets.length;++v){const x=h[g];p.push(x.time),m.push(x.morphTarget===_?1:0)}i.push(new Vo(".morphTargetInfluence["+_+"]",p,m))}l=f.length*r}else{const f=".bones["+t[d].name+"]";n(Go,f+".position",h,"pos",i),n(Ir,f+".quaternion",h,"rot",i),n(Go,f+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function dS(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vo;case"vector":case"vector2":case"vector3":case"vector4":return Go;case"color":return Fg;case"quaternion":return Ir;case"bool":case"boolean":return Zo;case"string":return Jo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function fS(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=dS(o.type);if(o.times===void 0){const t=[],n=[];Lg(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Is={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class pS{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,a),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const mS=new pS;class Qs{constructor(e){this.manager=e!==void 0?e:mS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ns={};class gS extends Error{constructor(e,t){super(e),this.response=t}}class Ga extends Qs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Is.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ns[e]!==void 0){ns[e].push({onLoad:t,onProgress:n,onError:i});return}ns[e]=[],ns[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ns[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=h?parseInt(h):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){v();function v(){d.read().then(({done:x,value:E})=>{if(x)m.close();else{_+=E.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let S=0,b=u.length;S<b;S++){const D=u[S];D.onProgress&&D.onProgress(w)}m.enqueue(E),v()}})}}});return new Response(p)}else throw new gS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Is.add(e,c);const u=ns[e];delete ns[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=ns[e];if(u===void 0)throw this.manager.itemError(e),c;delete ns[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _S extends Qs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Is.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=Ha("img");function l(){u(),Is.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class vS extends Qs{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new Cg,a=new Ga(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?r.image=c.image:c.data!==void 0&&(r.image.width=c.width,r.image.height=c.height,r.image.data=c.data),r.wrapS=c.wrapS!==void 0?c.wrapS:zn,r.wrapT=c.wrapT!==void 0?c.wrapT:zn,r.magFilter=c.magFilter!==void 0?c.magFilter:en,r.minFilter=c.minFilter!==void 0?c.minFilter:en,r.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?r.colorSpace=c.colorSpace:c.encoding!==void 0&&(r.encoding=c.encoding),c.flipY!==void 0&&(r.flipY=c.flipY),c.format!==void 0&&(r.format=c.format),c.type!==void 0&&(r.type=c.type),c.mipmaps!==void 0&&(r.mipmaps=c.mipmaps,r.minFilter=$s),c.mipmapCount===1&&(r.minFilter=en),c.generateMipmaps!==void 0&&(r.generateMipmaps=c.generateMipmaps),r.needsUpdate=!0,t&&t(r,c)},n,i),r}}class Ig extends Qs{constructor(e){super(e)}load(e,t,n,i){const s=new fn,r=new _S(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class cd extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ru=new at,Dp=new H,Cp=new H;class ud{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nd,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dp),Cp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cp),t.updateMatrixWorld(),Ru.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ru)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xS extends ud{constructor(){super(new En(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=zo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yS extends cd{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new xS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Rp=new at,oa=new H,Pu=new H;class ES extends ud{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),oa.setFromMatrixPosition(e.matrixWorld),n.position.copy(oa),Pu.copy(n.position),Pu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pu),n.updateMatrixWorld(),i.makeTranslation(-oa.x,-oa.y,-oa.z),Rp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rp)}}class MS extends cd{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ES}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bS extends ud{constructor(){super(new id(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class SS extends cd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new bS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ta{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class wS extends Qs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Is.get(e);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Is.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Is.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Is.add(e,l),s.manager.itemStart(e)}}class Ng{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Pp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Pp(){return(typeof performance>"u"?Date:performance).now()}const hd="\\[\\]\\.:\\/",TS=new RegExp("["+hd+"]","g"),dd="[^"+hd+"]",AS="[^"+hd.replace("\\.","")+"]",DS=/((?:WC+[\/:])*)/.source.replace("WC",dd),CS=/(WCOD+)?/.source.replace("WCOD",AS),RS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dd),PS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dd),LS=new RegExp("^"+DS+CS+RS+PS+"$"),FS=["material","materials","bones","map"];class IS{constructor(e,t,n){const i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class vt{constructor(e,t,n){this.path=t,this.parsedPath=n||vt.parseTrackName(t),this.node=vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new vt.Composite(e,t,n):new vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(TS,"")}static parseTrackName(e){const t=LS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);FS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}vt.Composite=IS;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Lp{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ln(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kh);const Fp={type:"change"},Lu={type:"start"},Ip={type:"end"},Ul=new el,Np=new Rs,NS=Math.cos(70*bo.DEG2RAD);class Ug extends kr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vr.ROTATE,MIDDLE:Vr.DOLLY,RIGHT:Vr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(B){B.addEventListener("keydown",Ie),this._domElementKeyEvents=B},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ie),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Fp),n.update(),s=i.NONE},this.update=function(){const B=new H,ue=new Yi().setFromUnitVectors(e.up,new H(0,1,0)),Le=ue.clone().invert(),re=new H,oe=new Yi,z=new H,ce=2*Math.PI;return function(Ge=null){const ze=n.object.position;B.copy(ze).sub(n.target),B.applyQuaternion(ue),a.setFromVector3(B),n.autoRotate&&s===i.NONE&&R(M(Ge)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ze=n.minAzimuthAngle,nt=n.maxAzimuthAngle;isFinite(Ze)&&isFinite(nt)&&(Ze<-Math.PI?Ze+=ce:Ze>Math.PI&&(Ze-=ce),nt<-Math.PI?nt+=ce:nt>Math.PI&&(nt-=ce),Ze<=nt?a.theta=Math.max(Ze,Math.min(nt,a.theta)):a.theta=a.theta>(Ze+nt)/2?Math.max(Ze,a.theta):Math.min(nt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&S||n.object.isOrthographicCamera?a.radius=I(a.radius):a.radius=I(a.radius*c),B.setFromSpherical(a),B.applyQuaternion(Le),ze.copy(n.target).add(B),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Re=!1;if(n.zoomToCursor&&S){let Ae=null;if(n.object.isPerspectiveCamera){const Fe=B.length();Ae=I(Fe*c);const de=Fe-Ae;n.object.position.addScaledVector(E,de),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Fe=new H(w.x,w.y,0);Fe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Re=!0;const de=new H(w.x,w.y,0);de.unproject(n.object),n.object.position.sub(de).add(Fe),n.object.updateMatrixWorld(),Ae=B.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ae!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ae).add(n.object.position):(Ul.origin.copy(n.object.position),Ul.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ul.direction))<NS?e.lookAt(n.target):(Np.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ul.intersectPlane(Np,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Re=!0);return c=1,S=!1,Re||re.distanceToSquared(n.object.position)>r||8*(1-oe.dot(n.object.quaternion))>r||z.distanceToSquared(n.target)>0?(n.dispatchEvent(Fp),re.copy(n.object.position),oe.copy(n.object.quaternion),z.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",lt),n.domElement.removeEventListener("pointerdown",O),n.domElement.removeEventListener("pointercancel",X),n.domElement.removeEventListener("wheel",le),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",X),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ie),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,a=new Lp,l=new Lp;let c=1;const u=new H,d=new Ke,h=new Ke,f=new Ke,g=new Ke,_=new Ke,p=new Ke,m=new Ke,v=new Ke,x=new Ke,E=new H,w=new Ke;let S=!1;const b=[],D={};let y=!1;function M(B){return B!==null?2*Math.PI/60*n.autoRotateSpeed*B:2*Math.PI/60/60*n.autoRotateSpeed}function U(B){const ue=Math.abs(B*.01);return Math.pow(.95,n.zoomSpeed*ue)}function R(B){l.theta-=B}function N(B){l.phi-=B}const T=function(){const B=new H;return function(Le,re){B.setFromMatrixColumn(re,0),B.multiplyScalar(-Le),u.add(B)}}(),L=function(){const B=new H;return function(Le,re){n.screenSpacePanning===!0?B.setFromMatrixColumn(re,1):(B.setFromMatrixColumn(re,0),B.crossVectors(n.object.up,B)),B.multiplyScalar(Le),u.add(B)}}(),P=function(){const B=new H;return function(Le,re){const oe=n.domElement;if(n.object.isPerspectiveCamera){const z=n.object.position;B.copy(z).sub(n.target);let ce=B.length();ce*=Math.tan(n.object.fov/2*Math.PI/180),T(2*Le*ce/oe.clientHeight,n.object.matrix),L(2*re*ce/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(T(Le*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),L(re*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(B){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(B){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(B,ue){if(!n.zoomToCursor)return;S=!0;const Le=n.domElement.getBoundingClientRect(),re=B-Le.left,oe=ue-Le.top,z=Le.width,ce=Le.height;w.x=re/z*2-1,w.y=-(oe/ce)*2+1,E.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function I(B){return Math.max(n.minDistance,Math.min(n.maxDistance,B))}function Q(B){d.set(B.clientX,B.clientY)}function $(B){G(B.clientX,B.clientX),m.set(B.clientX,B.clientY)}function j(B){g.set(B.clientX,B.clientY)}function ee(B){h.set(B.clientX,B.clientY),f.subVectors(h,d).multiplyScalar(n.rotateSpeed);const ue=n.domElement;R(2*Math.PI*f.x/ue.clientHeight),N(2*Math.PI*f.y/ue.clientHeight),d.copy(h),n.update()}function he(B){v.set(B.clientX,B.clientY),x.subVectors(v,m),x.y>0?k(U(x.y)):x.y<0&&V(U(x.y)),m.copy(v),n.update()}function ye(B){_.set(B.clientX,B.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),P(p.x,p.y),g.copy(_),n.update()}function ge(B){G(B.clientX,B.clientY),B.deltaY<0?V(U(B.deltaY)):B.deltaY>0&&k(U(B.deltaY)),n.update()}function ae(B){let ue=!1;switch(B.code){case n.keys.UP:B.ctrlKey||B.metaKey||B.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,n.keyPanSpeed),ue=!0;break;case n.keys.BOTTOM:B.ctrlKey||B.metaKey||B.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,-n.keyPanSpeed),ue=!0;break;case n.keys.LEFT:B.ctrlKey||B.metaKey||B.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(n.keyPanSpeed,0),ue=!0;break;case n.keys.RIGHT:B.ctrlKey||B.metaKey||B.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(-n.keyPanSpeed,0),ue=!0;break}ue&&(B.preventDefault(),n.update())}function te(B){if(b.length===1)d.set(B.pageX,B.pageY);else{const ue=we(B),Le=.5*(B.pageX+ue.x),re=.5*(B.pageY+ue.y);d.set(Le,re)}}function ve(B){if(b.length===1)g.set(B.pageX,B.pageY);else{const ue=we(B),Le=.5*(B.pageX+ue.x),re=.5*(B.pageY+ue.y);g.set(Le,re)}}function Se(B){const ue=we(B),Le=B.pageX-ue.x,re=B.pageY-ue.y,oe=Math.sqrt(Le*Le+re*re);m.set(0,oe)}function q(B){n.enableZoom&&Se(B),n.enablePan&&ve(B)}function He(B){n.enableZoom&&Se(B),n.enableRotate&&te(B)}function _e(B){if(b.length==1)h.set(B.pageX,B.pageY);else{const Le=we(B),re=.5*(B.pageX+Le.x),oe=.5*(B.pageY+Le.y);h.set(re,oe)}f.subVectors(h,d).multiplyScalar(n.rotateSpeed);const ue=n.domElement;R(2*Math.PI*f.x/ue.clientHeight),N(2*Math.PI*f.y/ue.clientHeight),d.copy(h)}function Ce(B){if(b.length===1)_.set(B.pageX,B.pageY);else{const ue=we(B),Le=.5*(B.pageX+ue.x),re=.5*(B.pageY+ue.y);_.set(Le,re)}p.subVectors(_,g).multiplyScalar(n.panSpeed),P(p.x,p.y),g.copy(_)}function Me(B){const ue=we(B),Le=B.pageX-ue.x,re=B.pageY-ue.y,oe=Math.sqrt(Le*Le+re*re);v.set(0,oe),x.set(0,Math.pow(v.y/m.y,n.zoomSpeed)),k(x.y),m.copy(v);const z=(B.pageX+ue.x)*.5,ce=(B.pageY+ue.y)*.5;G(z,ce)}function K(B){n.enableZoom&&Me(B),n.enablePan&&Ce(B)}function Ve(B){n.enableZoom&&Me(B),n.enableRotate&&_e(B)}function O(B){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(B.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",X)),Be(B),B.pointerType==="touch"?We(B):ie(B))}function C(B){n.enabled!==!1&&(B.pointerType==="touch"?ne(B):se(B))}function X(B){$e(B),b.length===0&&(n.domElement.releasePointerCapture(B.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",X)),n.dispatchEvent(Ip),s=i.NONE}function ie(B){let ue;switch(B.button){case 0:ue=n.mouseButtons.LEFT;break;case 1:ue=n.mouseButtons.MIDDLE;break;case 2:ue=n.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case Vr.DOLLY:if(n.enableZoom===!1)return;$(B),s=i.DOLLY;break;case Vr.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enablePan===!1)return;j(B),s=i.PAN}else{if(n.enableRotate===!1)return;Q(B),s=i.ROTATE}break;case Vr.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enableRotate===!1)return;Q(B),s=i.ROTATE}else{if(n.enablePan===!1)return;j(B),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Lu)}function se(B){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ee(B);break;case i.DOLLY:if(n.enableZoom===!1)return;he(B);break;case i.PAN:if(n.enablePan===!1)return;ye(B);break}}function le(B){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(B.preventDefault(),n.dispatchEvent(Lu),ge(be(B)),n.dispatchEvent(Ip))}function be(B){const ue=B.deltaMode,Le={clientX:B.clientX,clientY:B.clientY,deltaY:B.deltaY};switch(ue){case 1:Le.deltaY*=16;break;case 2:Le.deltaY*=100;break}return B.ctrlKey&&!y&&(Le.deltaY*=10),Le}function xe(B){B.key==="Control"&&(y=!0,document.addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(B){B.key==="Control"&&(y=!1,document.removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function Ie(B){n.enabled===!1||n.enablePan===!1||ae(B)}function We(B){switch(Ne(B),b.length){case 1:switch(n.touches.ONE){case Gr.ROTATE:if(n.enableRotate===!1)return;te(B),s=i.TOUCH_ROTATE;break;case Gr.PAN:if(n.enablePan===!1)return;ve(B),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Gr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;q(B),s=i.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;He(B),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Lu)}function ne(B){switch(Ne(B),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_e(B),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ce(B),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;K(B),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ve(B),n.update();break;default:s=i.NONE}}function lt(B){n.enabled!==!1&&B.preventDefault()}function Be(B){b.push(B.pointerId)}function $e(B){delete D[B.pointerId];for(let ue=0;ue<b.length;ue++)if(b[ue]==B.pointerId){b.splice(ue,1);return}}function Ne(B){let ue=D[B.pointerId];ue===void 0&&(ue=new Ke,D[B.pointerId]=ue),ue.set(B.pageX,B.pageY)}function we(B){const ue=B.pointerId===b[0]?b[1]:b[0];return D[ue]}n.domElement.addEventListener("contextmenu",lt),n.domElement.addEventListener("pointerdown",O),n.domElement.addEventListener("pointercancel",X),n.domElement.addEventListener("wheel",le,{passive:!1}),document.addEventListener("keydown",xe,{passive:!0,capture:!0}),this.update()}}class US extends vS{constructor(e){super(e),this.type=fs}parse(e){const r=function(D,y){switch(D){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(y||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(y||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(y||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(y||""))}},u=`
`,d=function(D,y,M){y=y||1024;let R=D.pos,N=-1,T=0,L="",P=String.fromCharCode.apply(null,new Uint16Array(D.subarray(R,R+128)));for(;0>(N=P.indexOf(u))&&T<y&&R<D.byteLength;)L+=P,T+=P.length,R+=128,P+=String.fromCharCode.apply(null,new Uint16Array(D.subarray(R,R+128)));return-1<N?(M!==!1&&(D.pos+=T+N+1),L+P.slice(0,N)):!1},h=function(D){const y=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,U=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*FORMAT=(\S+)\s*$/,N=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,T={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let L,P;for((D.pos>=D.byteLength||!(L=d(D)))&&r(1,"no header found"),(P=L.match(y))||r(3,"bad initial token"),T.valid|=1,T.programtype=P[1],T.string+=L+`
`;L=d(D),L!==!1;){if(T.string+=L+`
`,L.charAt(0)==="#"){T.comments+=L+`
`;continue}if((P=L.match(M))&&(T.gamma=parseFloat(P[1])),(P=L.match(U))&&(T.exposure=parseFloat(P[1])),(P=L.match(R))&&(T.valid|=2,T.format=P[1]),(P=L.match(N))&&(T.valid|=4,T.height=parseInt(P[1],10),T.width=parseInt(P[2],10)),T.valid&2&&T.valid&4)break}return T.valid&2||r(3,"missing format specifier"),T.valid&4||r(3,"missing image size specifier"),T},f=function(D,y,M){const U=y;if(U<8||U>32767||D[0]!==2||D[1]!==2||D[2]&128)return new Uint8Array(D);U!==(D[2]<<8|D[3])&&r(3,"wrong scanline width");const R=new Uint8Array(4*y*M);R.length||r(4,"unable to allocate buffer space");let N=0,T=0;const L=4*U,P=new Uint8Array(4),k=new Uint8Array(L);let V=M;for(;V>0&&T<D.byteLength;){T+4>D.byteLength&&r(1),P[0]=D[T++],P[1]=D[T++],P[2]=D[T++],P[3]=D[T++],(P[0]!=2||P[1]!=2||(P[2]<<8|P[3])!=U)&&r(3,"bad rgbe scanline format");let G=0,I;for(;G<L&&T<D.byteLength;){I=D[T++];const $=I>128;if($&&(I-=128),(I===0||G+I>L)&&r(3,"bad scanline data"),$){const j=D[T++];for(let ee=0;ee<I;ee++)k[G++]=j}else k.set(D.subarray(T,T+I),G),G+=I,T+=I}const Q=U;for(let $=0;$<Q;$++){let j=0;R[N]=k[$+j],j+=U,R[N+1]=k[$+j],j+=U,R[N+2]=k[$+j],j+=U,R[N+3]=k[$+j],N+=4}V--}return R},g=function(D,y,M,U){const R=D[y+3],N=Math.pow(2,R-128)/255;M[U+0]=D[y+0]*N,M[U+1]=D[y+1]*N,M[U+2]=D[y+2]*N,M[U+3]=1},_=function(D,y,M,U){const R=D[y+3],N=Math.pow(2,R-128)/255;M[U+0]=_l.toHalfFloat(Math.min(D[y+0]*N,65504)),M[U+1]=_l.toHalfFloat(Math.min(D[y+1]*N,65504)),M[U+2]=_l.toHalfFloat(Math.min(D[y+2]*N,65504)),M[U+3]=_l.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const m=h(p),v=m.width,x=m.height,E=f(p.subarray(p.pos),v,x);let w,S,b;switch(this.type){case di:b=E.length/4;const D=new Float32Array(b*4);for(let M=0;M<b;M++)g(E,M*4,D,M*4);w=D,S=di;break;case fs:b=E.length/4;const y=new Uint16Array(b*4);for(let M=0;M<b;M++)_(E,M*4,y,M*4);w=y,S=fs;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:v,height:x,data:w,header:m.string,gamma:m.gamma,exposure:m.exposure,type:S}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(r,a){switch(r.type){case di:case fs:r.colorSpace=jt,r.minFilter=en,r.magFilter=en,r.generateMipmaps=!1,r.flipY=!0;break}t&&t(r,a)}return super.load(e,s,n,i)}}function Up(o,e){if(e===gv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===dh||e===rg){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===dh)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class OS extends Qs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new VS(t)}),this.register(function(t){return new ZS(t)}),this.register(function(t){return new JS(t)}),this.register(function(t){return new QS(t)}),this.register(function(t){return new WS(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new qS(t)}),this.register(function(t){return new YS(t)}),this.register(function(t){return new HS(t)}),this.register(function(t){return new jS(t)}),this.register(function(t){return new GS(t)}),this.register(function(t){return new KS(t)}),this.register(function(t){return new $S(t)}),this.register(function(t){return new zS(t)}),this.register(function(t){return new ew(t)}),this.register(function(t){return new tw(t)})}load(e,t,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=Ta.extractUrlBase(e);r=Ta.resolveURL(c,this.path)}else r=Ta.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ga(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Og){try{r[ut.KHR_BINARY_GLTF]=new nw(e)}catch(d){i&&i(d);return}s=JSON.parse(r[ut.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new mw(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,r[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case ut.KHR_MATERIALS_UNLIT:r[d]=new kS;break;case ut.KHR_DRACO_MESH_COMPRESSION:r[d]=new iw(s,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:r[d]=new sw;break;case ut.KHR_MESH_QUANTIZATION:r[d]=new rw;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function BS(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zS{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Je(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],jt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new SS(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new MS(u),c.distance=d;break;case"spot":c=new yS(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ps(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class kS{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return Fs}extendParams(e,t,n){const i=[];e.color=new Je(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],jt),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Tt))}return Promise.all(i)}}class HS{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class VS{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(a,a)}return Promise.all(s)}}class GS{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class WS{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Je(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],jt)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Tt)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class XS{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class qS{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new Je().setRGB(a[0],a[1],a[2],jt),Promise.all(s)}}class YS{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class jS{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new Je().setRGB(a[0],a[1],a[2],jt),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Tt)),Promise.all(s)}}class $S{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(s)}}class KS{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class ZS{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class JS{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class QS{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ew{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(u*d);return r.decodeGltfBuffer(new Uint8Array(f),u,d,h,i.mode,i.filter),f})})}else return null}}class tw{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ai.TRIANGLES&&c.mode!==ai.TRIANGLE_STRIP&&c.mode!==ai.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],l={};for(const c in r)a.push(this.parser.getDependency("accessor",r[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(const g of d){const _=new at,p=new H,m=new Yi,v=new H(1,1,1),x=new tS(g.geometry,g.material,h);for(let E=0;E<h;E++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,E),l.SCALE&&v.fromBufferAttribute(l.SCALE,E),x.setMatrixAt(E,_.compose(p,m,v));for(const E in l)if(E==="_COLOR_0"){const w=l[E];x.instanceColor=new _h(w.array,w.itemSize,w.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,l[E]);Ft.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Og="glTF",aa=12,Op={JSON:1313821514,BIN:5130562};class nw{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,aa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Og)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-aa,s=new DataView(e,aa);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===Op.JSON){const c=new Uint8Array(e,aa+r,a);this.content=n.decode(c)}else if(l===Op.BIN){const c=aa+r;this.body=e.slice(c,c+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class iw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},c={};for(const u in r){const d=xh[u]||u.toLowerCase();a[d]=r[u]}for(const u in e.attributes){const d=xh[u]||u.toLowerCase();if(r[u]!==void 0){const h=n.accessors[e.attributes[u]],f=wo[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}d(f)},a,c,jt,h)})})}}class sw{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class rw{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}}class Bg extends tl{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,d=(n-t)/u,h=d*d,f=h*d,g=e*c,_=g-c,p=-2*f+3*h,m=f-h,v=1-p,x=m-h+d;for(let E=0;E!==a;E++){const w=r[_+E+a],S=r[_+E+l]*u,b=r[g+E+a],D=r[g+E]*u;s[E]=v*w+x*S+p*b+m*D}return s}}const ow=new Yi;class aw extends Bg{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return ow.fromArray(s).normalize().toArray(s),s}}const ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bp={9728:an,9729:en,9984:hh,9985:Zm,9986:sc,9987:$s},zp={33071:zn,33648:_c,10497:js},Fu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lw={CUBICSPLINE:void 0,LINEAR:Bo,STEP:ka},Iu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cw(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Gc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_s})),o.DefaultMaterial}function ar(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ps(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function uw(o,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):o.attributes.position;r.push(h)}if(i){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):o.attributes.normal;a.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):o.attributes.color;l.push(h)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=d),s&&(o.morphAttributes.color=h),o.morphTargetsRelative=!0,o})}function hw(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dw(o){let e;const t=o.extensions&&o.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nu(t.attributes):e=o.indices+":"+Nu(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)e+=":"+Nu(o.targets[n]);return e}function Nu(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function yh(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fw(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const pw=new at;class mw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new BS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Ig(this.options.manager):this.textureLoader=new wS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ga(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return ar(s,a,i),Ps(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,u]of r.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Ta.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Fu[i.type],a=wo[i.componentType],l=i.normalized===!0,c=new a(i.count*r);return Promise.resolve(new pn(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=Fu[i.type],c=wo[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(f&&f!==d){const m=Math.floor(h/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let x=t.cache.get(v);x||(_=new c(a,m*f,i.count*f/u),x=new Kb(_,f/u),t.cache.add(v,x)),p=new od(x,l,h%f/u,g)}else a===null?_=new c(i.count*l):_=new c(a,h,i.count*l),p=new pn(_,l,g);if(i.sparse!==void 0){const m=Fu.SCALAR,v=wo[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,w=new v(r[1],x,i.sparse.count*m),S=new c(r[2],E,i.sparse.count*l);a!==null&&(p=new pn(p.array.slice(),p.itemSize,p.normalized));for(let b=0,D=w.length;b<D;b++){const y=w[b];if(p.setX(y,S[b*l]),l>=2&&p.setY(y,S[b*l+1]),l>=3&&p.setZ(y,S[b*l+2]),l>=4&&p.setW(y,S[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=r.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[r.sampler]||{};return u.magFilter=Bp[h.magFilter]||en,u.minFilter=Bp[h.minFilter]||$s,u.wrapS=zp[h.wrapS]||js,u.wrapT=zp[h.wrapT]||js,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const r=i.images[e],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:r.mimeType});return l=a.createObjectURL(h),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const p=new fn(_);p.needsUpdate=!0,h(p)}),t.load(Ta.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),d.userData.mimeType=r.mimeType||fw(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[ut.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Pg,Gi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Rg,Gi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Gc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const a={},l=s.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){const d=i[ut.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Je(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],jt),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Tt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ti);const u=s.alphaMode||Iu.OPAQUE;if(u===Iu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Iu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Fs&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ke(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&r!==Fs&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Fs){const d=s.emissiveFactor;a.emissive=new Je().setRGB(d[0],d[1],d[2],jt)}return s.emissiveTexture!==void 0&&r!==Fs&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Tt)),Promise.all(c).then(function(){const d=new r(a);return s.name&&(d.name=s.name),Ps(d,s),t.associations.set(d,{materials:e}),s.extensions&&ar(i,d,s),d})}createUniqueName(e){const t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return kp(l,a,t)})}const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=dw(c),d=i[u];if(d)r.push(d.promise);else{let h;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=kp(new bn,c,t),i[u]={primitive:c,promise:h},r.push(h)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const u=r[l].material===void 0?cw(this.cache):this.getDependency("material",r[l].material);a.push(u)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],p=r[f];let m;const v=c[f];if(p.mode===ai.TRIANGLES||p.mode===ai.TRIANGLE_STRIP||p.mode===ai.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new Jb(_,v):new Ut(_,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===ai.TRIANGLE_STRIP?m.geometry=Up(m.geometry,rg):p.mode===ai.TRIANGLE_FAN&&(m.geometry=Up(m.geometry,dh));else if(p.mode===ai.LINES)m=new nS(_,v);else if(p.mode===ai.LINE_STRIP)m=new ld(_,v);else if(p.mode===ai.LINE_LOOP)m=new iS(_,v);else if(p.mode===ai.POINTS)m=new sS(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&hw(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Ps(m,s),p.extensions&&ar(i,m,p),t.assignFinalMaterial(m),d.push(m)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&ar(i,d[0],s),d[0];const h=new ki;s.extensions&&ar(i,h,s),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new En(bo.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new id(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ps(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,a=[],l=[];for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d){a.push(d);const h=new at;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ad(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],a=[],l=[],c=[],u=[];for(let d=0,h=i.channels.length;d<h;d++){const f=i.channels[d],g=i.samplers[f.sampler],_=f.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(r.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(_))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],g=d[2],_=d[3],p=d[4],m=[];for(let v=0,x=h.length;v<x;v++){const E=h[v],w=f[v],S=g[v],b=_[v],D=p[v];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const y=n._createAnimationTracks(E,w,S,b,D);if(y)for(let M=0;M<y.length;M++)m.push(y[M])}return new hS(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)r.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,pw)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Dg:c.length>1?u=new ki:c.length===1?u=c[0]:u=new Ft,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=r),Ps(u,s),s.extensions&&ar(n,u,s),s.matrix!==void 0){const d=new at;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ki;n.name&&(s.name=i.createUniqueName(n.name)),Ps(s,n),n.extensions&&ar(t,s,n);const r=n.nodes||[],a=[];for(let l=0,c=r.length;l<c;l++)a.push(i.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)s.add(l[u]);const c=u=>{const d=new Map;for(const[h,f]of i.associations)(h instanceof Gi||h instanceof fn)&&d.set(h,f);return u.traverse(h=>{const f=i.associations.get(h);f!=null&&d.set(h,f)}),d};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const r=[],a=e.name?e.name:e.uuid,l=[];Ts[s.path]===Ts.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Ts[s.path]){case Ts.weights:c=Vo;break;case Ts.rotation:c=Ir;break;case Ts.position:case Ts.scale:c=Go;break;default:switch(n.itemSize){case 1:c=Vo;break;case 2:case 3:default:c=Go;break}break}const u=i.interpolation!==void 0?lw[i.interpolation]:Bo,d=this._getArrayFromAccessor(n);for(let h=0,f=l.length;h<f;h++){const g=new c(l[h]+"."+Ts[s.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=yh(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ir?aw:Bg;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function gw(o,e,t){const n=e.attributes,i=new ys;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){const u=yh(wo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new H,l=new H;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const _=yh(wo[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new $i;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function kp(o,e,t){const n=e.attributes,i=[];function s(r,a){return t.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=xh[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(r)}return mt.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),Ps(o,e),gw(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?uw(o,e.targets,t):o})}const Uu=new WeakMap;class _w extends Qs{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Ga(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.parse(r,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Tt).catch(n)}decodeDracoFile(e,t,n,i,s=jt,r=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(r)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Uu.has(e)){const l=Uu.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,r=e.byteLength,a=this._getWorker(s,r).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[s]={resolve:c,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Uu.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new bn;e.index&&t.setIndex(new pn(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,r=i.array,a=i.itemSize,l=new pn(r,a);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(r instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==Tt)return;const n=new Je;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Ga(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=vw.toString(),r=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const r=s.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function vw(){let o,e;onmessage=function(r){const a=r.data;switch(a.type){case"init":o=a.decoderConfig,e=new Promise(function(u){o.onModuleLoaded=function(d){u({draco:d})},DracoDecoderModule(o)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const d=u.draco,h=new d.Decoder;try{const f=t(d,h,new Int8Array(l),c),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{d.destroy(h)}});break}};function t(r,a,l,c){const u=c.attributeIDs,d=c.attributeTypes;let h,f;const g=a.GetEncodedGeometryType(l);if(g===r.TRIANGULAR_MESH)h=new r.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,h);else if(g===r.POINT_CLOUD)h=new r.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,h);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||h.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const p in u){const m=self[d[p]];let v,x;if(c.useUniqueIDs)x=u[p],v=a.GetAttributeByUniqueId(h,x);else{if(x=a.GetAttributeId(h,r[u[p]]),x===-1)continue;v=a.GetAttribute(h,x)}const E=i(r,a,h,p,m,v);p==="color"&&(E.vertexColorSpace=c.vertexColorSpace),_.attributes.push(E)}return g===r.TRIANGULAR_MESH&&(_.index=n(r,a,h)),r.destroy(h),_}function n(r,a,l){const u=l.num_faces()*3,d=u*4,h=r._malloc(d);a.GetTrianglesUInt32Array(l,d,h);const f=new Uint32Array(r.HEAPF32.buffer,h,u).slice();return r._free(h),{array:f,itemSize:1}}function i(r,a,l,c,u,d){const h=d.num_components(),g=l.num_points()*h,_=g*u.BYTES_PER_ELEMENT,p=s(r,u),m=r._malloc(_);a.GetAttributeDataArrayForAllPoints(l,d,p,_,m);const v=new u(r.HEAPF32.buffer,m,g).slice();return r._free(m),{name:c,array:v,itemSize:h}}function s(r,a){switch(a){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Wi{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Wi.nextNameID=Wi.nextNameID||0,this.$name.id=`lil-gui-name-${++Wi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",r=>r.stopPropagation()),this.domElement.addEventListener("keyup",r=>r.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class xw extends Wi{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Eh(o){let e,t;return(e=o.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const yw={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:Eh,toHexString:Eh},Wa={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},Ew={isPrimitive:!1,match:o=>Array.isArray(o),fromHexString(o,e,t=1){const n=Wa.fromHexString(o);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([o,e,t],n=1){n=255/n;const i=o*n<<16^e*n<<8^t*n<<0;return Wa.toHexString(i)}},Mw={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,e,t=1){const n=Wa.fromHexString(o);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:o,g:e,b:t},n=1){n=255/n;const i=o*n<<16^e*n<<8^t*n<<0;return Wa.toHexString(i)}},bw=[yw,Wa,Ew,Mw];function Sw(o){return bw.find(e=>e.match(o))}class ww extends Wi{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Sw(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Eh(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ou extends Wi{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Tw extends Wi{constructor(e,t,n,i,s,r){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const a=r!==void 0;this.step(a?r:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+v),this.$input.value=this.getValue())},i=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},s=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let r=!1,a,l,c,u,d;const h=5,f=v=>{a=v.clientX,l=c=v.clientY,r=!0,u=this.getValue(),d=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=v=>{if(r){const x=v.clientX-a,E=v.clientY-l;Math.abs(E)>h?(v.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>h&&_()}if(!r){const x=v.clientY-c;d-=x*this._step*this._arrowKeyMultiplier(v),u+d>this._max?d=this._max-u:u+d<this._min&&(d=this._min-u),this._snapClampSetValue(u+d)}c=v.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},p=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(m,v,x,E,w)=>(m-v)/(x-v)*(w-E)+E,t=m=>{const v=this.$slider.getBoundingClientRect();let x=e(m,v.left,v.right,this._min,this._max);this._snapClampSetValue(x)},n=m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=m=>{t(m.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let r=!1,a,l;const c=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),r=!1},u=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,r=!0):c(m),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",h))},d=m=>{if(r){const v=m.touches[0].clientX-a,x=m.touches[0].clientY-l;Math.abs(v)>Math.abs(x)?c(m):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h))}else m.preventDefault(),t(m.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h)},f=this._callOnFinishChange.bind(this),g=400;let _;const p=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const x=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Aw extends Wi{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class Dw extends Wi{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Cw=`.lil-gui {
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
}`;function Rw(o){const e=document.createElement("style");e.innerHTML=o;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Hp=!1;class fd{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:r=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Hp&&a&&(Rw(Cw),Hp=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=r}add(e,t,n,i,s){if(Object(n)===n)return new Aw(this,e,t,n);const r=e[t];switch(typeof r){case"number":return new Tw(this,e,t,n,i,s);case"boolean":return new xw(this,e,t);case"string":return new Dw(this,e,t);case"function":return new Ou(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,r)}addColor(e,t,n=1){return new ww(this,e,t,n)}addFolder(e){const t=new fd({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Ou||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ou)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function cs(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function zg(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wo={duration:.5,overwrite:!1,delay:0},pd,Sn,Lt,fi=1e8,wt=1/fi,Mh=Math.PI*2,Pw=Mh/4,Lw=0,kg=Math.sqrt,Fw=Math.cos,Iw=Math.sin,hn=function(e){return typeof e=="string"},Ht=function(e){return typeof e=="function"},vs=function(e){return typeof e=="number"},md=function(e){return typeof e>"u"},ji=function(e){return typeof e=="object"},Hn=function(e){return e!==!1},gd=function(){return typeof window<"u"},Ol=function(e){return Ht(e)||hn(e)},Hg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wn=Array.isArray,bh=/(?:-?\.?\d|\.)+/gi,Vg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Bu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gg=/[+-]=-?[.\d]+/,Wg=/[^,'"\[\]\s]+/gi,Nw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,Ii,Sh,_d,ni={},bc={},Xg,qg=function(e){return(bc=Nr(e,ni))&&Xn},vd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xa=function(e,t){return!t&&console.warn(e)},Yg=function(e,t){return e&&(ni[e]=t)&&bc&&(bc[e]=t)||ni},qa=function(){return 0},Uw={suppressEvents:!0,isStart:!0,kill:!1},oc={suppressEvents:!0,kill:!1},Ow={suppressEvents:!0},xd={},Xs=[],wh={},jg,Zn={},zu={},Vp=30,ac=[],yd="",Ed=function(e){var t=e[0],n,i;if(ji(t)||Ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ac.length;i--&&!ac[i].targetTest(t););n=ac[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new v_(e[i],n)))||e.splice(i,1);return e},Sr=function(e){return e._gsap||Ed(pi(e))[0]._gsap},$g=function(e,t,n){return(n=e[t])&&Ht(n)?e[t]():md(n)&&e.getAttribute&&e.getAttribute(t)||n},Vn=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},cn=function(e){return Math.round(e*1e7)/1e7||0},To=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Bw=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Sc=function(){var e=Xs.length,t=Xs.slice(0),n,i;for(wh={},Xs.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Kg=function(e,t,n,i){Xs.length&&!Sn&&Sc(),e.render(t,n,i||Sn&&t<0&&(e._initted||e._startAt)),Xs.length&&!Sn&&Sc()},Zg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Wg).length<2?t:hn(e)?e.trim():e},Jg=function(e){return e},gi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},zw=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Nr=function(e,t){for(var n in t)e[n]=t[n];return e},Gp=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ji(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},wc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Aa=function(e){var t=e.parent||Ot,n=e.keyframes?zw(wn(e.keyframes)):gi;if(Hn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},kw=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Qg=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e[i],a;if(s)for(a=t[s];r&&r[s]>a;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=r,t.parent=t._dp=e,t},Wc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,r=t._next;s?s._next=r:e[n]===t&&(e[n]=r),r?r._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ks=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},wr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Hw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Th=function(e,t,n,i){return e._startAt&&(Sn?e._startAt.revert(oc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Vw=function o(e){return!e||e._ts&&o(e.parent)},Wp=function(e){return e._repeat?Xo(e._tTime,e=e.duration()+e._rDelay)*e:0},Xo=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Tc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Xc=function(e){return e._end=cn(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},qc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=cn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Xc(e),n._dirty||wr(n,e)),e},e_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Tc(e.rawTime(),t),(!t._dur||nl(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),wr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},Bi=function(e,t,n,i){return t.parent&&Ks(t),t._start=cn((vs(n)?n:n||e!==Ot?oi(e,n,t):e._time)+t._delay),t._end=cn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Qg(e,t,"_first","_last",e._sort?"_start":0),Ah(t)||(e._recent=t),i||e_(e,t),e._ts<0&&qc(e,e._tTime),e},t_=function(e,t){return(ni.ScrollTrigger||vd("scrollTrigger",t))&&ni.ScrollTrigger.create(t,e)},n_=function(e,t,n,i,s){if(bd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&jg!==Jn.frame)return Xs.push(e),e._lazy=[s,i],1},Gw=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Ah=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ww=function(e,t,n,i){var s=e.ratio,r=t<0||!t&&(!e._start&&Gw(e)&&!(!e._initted&&Ah(e))||(e._ts<0||e._dp._ts<0)&&!Ah(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=nl(0,e._tDur,t),u=Xo(l,a),e._yoyo&&u&1&&(r=1-r),u!==Xo(e._tTime,a)&&(s=1-r,e.vars.repeatRefresh&&e._initted&&e.invalidate())),r!==s||Sn||i||e._zTime===wt||!t&&e._zTime){if(!e._initted&&n_(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!d),e.ratio=r,e._from&&(r=1-r),e._time=0,e._tTime=l,c=e._pt;c;)c.r(r,c.d),c=c._next;t<0&&Th(e,t,n,!0),e._onUpdate&&!n&&ei(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===r&&(r&&Ks(e,1),!n&&!Sn&&(ei(e,r?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Xw=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},qo=function(e,t,n,i){var s=e._repeat,r=cn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=r/e._dur),e._dur=r,e._tDur=s?s<0?1e10:cn(r*(s+1)+e._rDelay*s):r,a>0&&!i&&qc(e,e._tTime=e._tDur*a),e.parent&&Xc(e),n||wr(e.parent,e),e},Xp=function(e){return e instanceof In?wr(e):qo(e,e._dur)},qw={_start:0,endTime:qa,totalDuration:qa},oi=function o(e,t,n){var i=e.labels,s=e._recent||qw,r=e.duration()>=fi?s.endTime(!1):e._dur,a,l,c;return hn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=r),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(wn(n)?n[0]:n).totalDuration()),a>1?o(e,t.substr(0,a-1),n)+l:r+l)):t==null?r:+t},Da=function(e,t,n){var i=vs(t[1]),s=(i?2:1)+(e<2?0:1),r=t[s],a,l;if(i&&(r.duration=t[1]),r.parent=n,e){for(a=r,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Hn(l.vars.inherit)&&l.parent;r.immediateRender=Hn(a.immediateRender),e<2?r.runBackwards=1:r.startAt=t[s-1]}return new Yt(t[0],r,t[s+1])},er=function(e,t){return e||e===0?t(e):t},nl=function(e,t,n){return n<e?e:n>t?t:n},Mn=function(e,t){return!hn(e)||!(t=Nw.exec(e))?"":t[1]},Yw=function(e,t,n){return er(n,function(i){return nl(e,t,i)})},Dh=[].slice,i_=function(e,t){return e&&ji(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ji(e[0]))&&!e.nodeType&&e!==Ii},jw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return hn(i)&&!t||i_(i,1)?(s=n).push.apply(s,pi(i)):n.push(i)})||n},pi=function(e,t,n){return Lt&&!t&&Lt.selector?Lt.selector(e):hn(e)&&!n&&(Sh||!Yo())?Dh.call((t||_d).querySelectorAll(e),0):wn(e)?jw(e,n):i_(e)?Dh.call(e,0):e?[e]:[]},Ch=function(e){return e=pi(e)[0]||Xa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return pi(t,n.querySelectorAll?n:n===e?Xa("Invalid scope")||_d.createElement("div"):e)}},s_=function(e){return e.sort(function(){return .5-Math.random()})},r_=function(e){if(Ht(e))return e;var t=ji(e)?e:{each:e},n=Tr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,r={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,d=i;return hn(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],d=i[1]),function(h,f,g){var _=(g||t).length,p=r[_],m,v,x,E,w,S,b,D,y;if(!p){if(y=t.grid==="auto"?0:(t.grid||[1,fi])[1],!y){for(b=-fi;b<(b=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(p=r[_]=[],m=l?Math.min(y,_)*u-.5:i%y,v=y===fi?0:l?_*d/y-.5:i/y|0,b=0,D=fi,S=0;S<_;S++)x=S%y-m,E=v-(S/y|0),p[S]=w=c?Math.abs(c==="y"?E:x):kg(x*x+E*E),w>b&&(b=w),w<D&&(D=w);i==="random"&&s_(p),p.max=b-D,p.min=D,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Mn(t.amount||t.each)||0,n=n&&_<0?m_(n):n}return _=(p[h]-p.min)/p.max||0,cn(p.b+(n?n(_):_)*p.v)+p.u}},Rh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=cn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(vs(n)?0:Mn(n))}},o_=function(e,t){var n=wn(e),i,s;return!n&&ji(e)&&(i=n=e.radius||fi,e.values?(e=pi(e.values),(s=!vs(e[0]))&&(i*=i)):e=Rh(e.increment)),er(t,n?Ht(e)?function(r){return s=e(r),Math.abs(s-r)<=i?s:r}:function(r){for(var a=parseFloat(s?r.x:r),l=parseFloat(s?r.y:0),c=fi,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-a,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-a),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:r,s||u===r||vs(r)?u:u+Mn(r)}:Rh(e))},a_=function(e,t,n,i){return er(wn(e)?!t:n===!0?!!(n=0):!i,function(){return wn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},$w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,r){return r(s)},i)}},Kw=function(e,t){return function(n){return e(parseFloat(n))+(t||Mn(n))}},Zw=function(e,t,n){return c_(e,t,0,1,n)},l_=function(e,t,n){return er(n,function(i){return e[~~t(i)]})},Jw=function o(e,t,n){var i=t-e;return wn(e)?l_(e,o(0,e.length),t):er(n,function(s){return(i+(s-e)%i)%i+e})},Qw=function o(e,t,n){var i=t-e,s=i*2;return wn(e)?l_(e,o(0,e.length-1),t):er(n,function(r){return r=(s+(r-e)%s)%s||0,e+(r>i?s-r:r)})},Ya=function(e){for(var t=0,n="",i,s,r,a;~(i=e.indexOf("random(",t));)r=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,r-i-7).match(a?Wg:bh),n+=e.substr(t,i-t)+a_(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=r+1;return n+e.substr(t,e.length-t)},c_=function(e,t,n,i,s){var r=t-e,a=i-n;return er(s,function(l){return n+((l-e)/r*a||0)})},eT=function o(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var r=hn(e),a={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),r)e={p:e},t={p:t};else if(wn(e)&&!wn(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(o(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=Nr(wn(e)?[]:{},e));if(!u){for(l in t)Md.call(a,e,l,"get",t[l]);s=function(g){return Td(g,a)||(r?e.p:e)}}}return er(n,s)},qp=function(e,t,n){var i=e.labels,s=fi,r,a,l;for(r in i)a=i[r]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=r,s=a);return l},ei=function(e,t,n){var i=e.vars,s=i[t],r=Lt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Xs.length&&Sc(),a&&(Lt=a),u=l?s.apply(c,l):s.call(c),Lt=r,u},ma=function(e){return Ks(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Sn),e.progress()<1&&ei(e,"onInterrupt"),e},xo,u_=[],h_=function(e){if(e)if(e=!e.name&&e.default||e,gd()||e.headless){var t=e.name,n=Ht(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:qa,render:Td,add:Md,kill:gT,modifier:mT,rawVars:0},r={targetTest:0,get:0,getSetter:wd,aliases:{},register:0};if(Yo(),e!==i){if(Zn[t])return;gi(i,gi(wc(e,s),r)),Nr(i.prototype,Nr(s,wc(e,r))),Zn[i.prop=t]=i,e.targetTest&&(ac.push(i),xd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Yg(t,i),e.register&&e.register(Xn,i,Gn)}else u_.push(e)},Et=255,ga={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},ku=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Et+.5|0},d_=function(e,t,n){var i=e?vs(e)?[e>>16,e>>8&Et,e&Et]:0:ga.black,s,r,a,l,c,u,d,h,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ga[e])i=ga[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),r=e.charAt(2),a=e.charAt(3),e="#"+s+s+r+r+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Et,i&Et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Et,e&Et]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(bh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,r=u<=.5?u*(c+1):u+c-u*c,s=u*2-r,i.length>3&&(i[3]*=1),i[0]=ku(l+1/3,s,r),i[1]=ku(l,s,r),i[2]=ku(l-1/3,s,r);else if(~e.indexOf("="))return i=e.match(Vg),n&&i.length<4&&(i[3]=1),i}else i=e.match(bh)||ga.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Et,r=i[1]/Et,a=i[2]/Et,d=Math.max(s,r,a),h=Math.min(s,r,a),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(r-a)/f+(r<a?6:0):d===r?(a-s)/f+2:(s-r)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},f_=function(e){var t=[],n=[],i=-1;return e.split(qs).forEach(function(s){var r=s.match(vo)||[];t.push.apply(t,r),n.push(i+=r.length+1)}),t.c=n,t},Yp=function(e,t,n){var i="",s=(e+i).match(qs),r=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=d_(h,t,1))&&r+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=f_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(qs,"1").split(vo),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||r+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(qs),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},qs=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ga)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),tT=/hsl[a]?\(/,p_=function(e){var t=e.join(" "),n;if(qs.lastIndex=0,qs.test(t))return n=tT.test(t),e[1]=Yp(e[1],n),e[0]=Yp(e[0],n,f_(e[1])),!0},ja,Jn=function(){var o=Date.now,e=500,t=33,n=o(),i=n,s=1e3/240,r=s,a=[],l,c,u,d,h,f,g=function _(p){var m=o()-i,v=p===!0,x,E,w,S;if((m>e||m<0)&&(n+=m-t),i+=m,w=i-n,x=w-r,(x>0||v)&&(S=++d.frame,h=w-d.time*1e3,d.time=w=w/1e3,r+=x+(x>=s?4:s-x),E=1),v||(l=c(_)),E)for(f=0;f<a.length;f++)a[f](w,h,S,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Xg&&(!Sh&&gd()&&(Ii=Sh=window,_d=Ii.document||{},ni.gsap=Xn,(Ii.gsapVersions||(Ii.gsapVersions=[])).push(Xn.version),qg(bc||Ii.GreenSockGlobals||!Ii.gsap&&Ii||{}),u_.forEach(h_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,r-d.time*1e3+1|0)},ja=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ja=0,c=qa},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),r=d.time*1e3+s},add:function(p,m,v){var x=m?function(E,w,S,b){p(E,w,S,b),d.remove(x)}:p;return d.remove(p),a[v?"unshift":"push"](x),Yo(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},d}(),Yo=function(){return!ja&&Jn.wake()},ft={},nT=/^[\d.\-M][\d.\-,\s]/,iT=/["']/g,sT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,r=n.length,a,l,c;s<r;s++)l=n[s],a=s!==r-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(iT,"").trim():+c,i=l.substr(a+1).trim();return t},rT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},oT=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[sT(t[1])]:rT(e).split(",").map(Zg)):ft._CE&&nT.test(e)?ft._CE("",e):n},m_=function(e){return function(t){return 1-e(1-t)}},g_=function o(e,t){for(var n=e._first,i;n;)n instanceof In?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Tr=function(e,t){return e&&(Ht(e)?e:ft[e]||oT(e))||t},Hr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},r;return Vn(e,function(a){ft[a]=ni[a]=s,ft[r=a.toLowerCase()]=n;for(var l in s)ft[r+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[a+"."+l]=s[l]}),s},__=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Hu=function o(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),r=s/Mh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Iw((u-r)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:__(a);return s=Mh/s,l.config=function(c,u){return o(e,c,u)},l},Vu=function o(e,t){t===void 0&&(t=1.70158);var n=function(r){return r?--r*r*((t+1)*r+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:__(n);return i.config=function(s){return o(e,s)},i};Vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Hr(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;Hr("Elastic",Hu("in"),Hu("out"),Hu());(function(o,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?o*a*a:a<n?o*Math.pow(a-1.5/e,2)+.75:a<i?o*(a-=2.25/e)*a+.9375:o*Math.pow(a-2.625/e,2)+.984375};Hr("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);Hr("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Hr("Circ",function(o){return-(kg(1-o*o)-1)});Hr("Sine",function(o){return o===1?1:-Fw(o*Pw)+1});Hr("Back",Vu("in"),Vu("out"),Vu());ft.SteppedEase=ft.steps=ni.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,r=1-wt;return function(a){return((i*nl(0,r,a)|0)+s)*n}}};Wo.ease=ft["quad.out"];Vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return yd+=o+","+o+"Params,"});var v_=function(e,t){this.id=Lw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:$g,this.set=t?t.getSetter:wd},$a=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,qo(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),ja||Jn.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,qo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Yo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(qc(this,n),!s._dp||s.parent||e_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===wt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Kg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Wp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Wp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Xo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Tc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts,this.totalTime(nl(-Math.abs(this._delay),this._tDur,s),i!==!1),Xc(this),Hw(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Yo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Bi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Tc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ow);var i=Sn;return Sn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Sn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Xp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Xp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(oi(this,n),Hn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Hn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-wt)},e.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},e.then=function(n){var i=this;return new Promise(function(s){var r=Ht(n)?n:Jg,a=function(){var c=i.then;i.then=null,Ht(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=c),s(r),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ma(this)},o}();gi($a.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var In=function(o){zg(e,o);function e(n,i){var s;return n===void 0&&(n={}),s=o.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Hn(n.sortChildren),Ot&&Bi(n.parent||Ot,cs(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&t_(cs(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,r){return Da(0,arguments,this),this},t.from=function(i,s,r){return Da(1,arguments,this),this},t.fromTo=function(i,s,r,a){return Da(2,arguments,this),this},t.set=function(i,s,r){return s.duration=0,s.parent=this,Aa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Yt(i,s,oi(this,r),1),this},t.call=function(i,s,r){return Bi(this,Yt.delayedCall(0,i,s),r)},t.staggerTo=function(i,s,r,a,l,c,u){return r.duration=s,r.stagger=r.stagger||a,r.onComplete=c,r.onCompleteParams=u,r.parent=this,new Yt(i,r,oi(this,l)),this},t.staggerFrom=function(i,s,r,a,l,c,u){return r.runBackwards=1,Aa(r).immediateRender=Hn(r.immediateRender),this.staggerTo(i,s,r,a,l,c,u)},t.staggerFromTo=function(i,s,r,a,l,c,u,d){return a.startAt=r,Aa(a).immediateRender=Hn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,d)},t.render=function(i,s,r){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:cn(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,g,_,p,m,v,x,E,w,S,b;if(this!==Ot&&u>l&&i>=0&&(u=l),u!==this._tTime||r||d){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,E=this._start,x=this._ts,m=!x,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,r);if(h=cn(u%p),u===l?(_=this._repeat,h=c):(_=~~(u/p),_&&_===u/p&&(h=c,_--),h>c&&(h=c)),w=Xo(this._tTime,p),!a&&this._tTime&&w!==_&&this._tTime-w*p-this._dur<=0&&(w=_),S&&_&1&&(h=c-h,b=1),_!==w&&!this._lock){var D=S&&w&1,y=D===(S&&_&1);if(_<w&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(b?0:cn(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ei(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;g_(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Xw(this,cn(a),cn(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!_&&(ei(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,r);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,r),h!==this._time||!this._ts&&!m){v=0,g&&(u+=this._zTime=-wt);break}}f=g}else{f=this._last;for(var M=i<0?i:h;f;){if(g=f._prev,(f._act||M<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,r);if(f.render(f._ts>0?(M-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(M-f._start)*f._ts,s,r||Sn&&(f._initted||f._startAt)),h!==this._time||!this._ts&&!m){v=0,g&&(u+=this._zTime=M?-wt:wt);break}}f=g}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-wt)._zTime=h>=a?1:-1,this._ts))return this._start=E,Xc(this),this.render(i,s,r);this._onUpdate&&!s&&ei(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(E===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ks(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(ei(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var r=this;if(vs(s)||(s=oi(this,s,i)),!(i instanceof $a)){if(wn(i))return i.forEach(function(a){return r.add(a,s)}),this;if(hn(i))return this.addLabel(i,s);if(Ht(i))i=Yt.delayedCall(0,i);else return this}return this!==i?Bi(this,i,s):this},t.getChildren=function(i,s,r,a){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=-fi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Yt?s&&l.push(c):(r&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,r)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},t.remove=function(i){return hn(i)?this.removeLabel(i):Ht(i)?this.killTweensOf(i):(Wc(this,i),i===this._recent&&(this._recent=this._last),wr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=cn(Jn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=oi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,r){var a=Yt.delayedCall(0,s||qa,r);return a.data="isPause",this._hasPause=1,Bi(this,a,oi(this,i))},t.removePause=function(i){var s=this._first;for(i=oi(this,i);s;)s._start===i&&s.data==="isPause"&&Ks(s),s=s._next},t.killTweensOf=function(i,s,r){for(var a=this.getTweensOf(i,r),l=a.length;l--;)Ns!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var r=[],a=pi(i),l=this._first,c=vs(s),u;l;)l instanceof Yt?Bw(l._targets,a)&&(c?(!Ns||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&r.push(l):(u=l.getTweensOf(a,s)).length&&r.push.apply(r,u),l=l._next;return r},t.tweenTo=function(i,s){s=s||{};var r=this,a=oi(r,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=Yt.to(r,gi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:r._time))/r.timeScale())||wt,onStart:function(){if(r.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:r._time))/r.timeScale());g._dur!==p&&qo(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,r){return this.tweenTo(s,gi({startAt:{time:oi(this,i)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),qp(this,oi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),qp(this,oi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var a=this._first,l=this.labels,c;a;)a._start>=r&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=r&&(l[c]+=i);return wr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),wr(this)},t.totalDuration=function(i){var s=0,r=this,a=r._last,l=fi,c,u,d;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(d=r.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&r._sort&&a._ts&&!r._lock?(r._lock=1,Bi(r,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!r._dp||d&&d.smoothChildTiming)&&(r._start+=u/r._ts,r._time-=u,r._tTime-=u),r.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;qo(r,r===Ot&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},e.updateRoot=function(i){if(Ot._ts&&(Kg(Ot,Tc(i,Ot)),jg=Jn.frame),Jn.frame>=Vp){Vp+=ti.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&ti.autoSleep&&Jn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Jn.sleep()}}},e}($a);gi(In.prototype,{_lock:0,_hasPause:0,_forcing:0});var aT=function(e,t,n,i,s,r,a){var l=new Gn(this._pt,e,t,0,1,S_,null,s),c=0,u=0,d,h,f,g,_,p,m,v;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ya(i)),r&&(v=[n,i],r(v,e,t),n=v[0],i=v[1]),h=n.match(Bu)||[];d=Bu.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?To(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=Bu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Gg.test(i)||m)&&(l.e=0),this._pt=l,l},Md=function(e,t,n,i,s,r,a,l,c,u){Ht(i)&&(i=i(s||0,e,r));var d=e[t],h=n!=="get"?n:Ht(d)?c?e[t.indexOf("set")||!Ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Ht(d)?c?dT:M_:Sd,g;if(hn(i)&&(~i.indexOf("random(")&&(i=Ya(i)),i.charAt(1)==="="&&(g=To(h,i)+(Mn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Ph)return!isNaN(h*i)&&i!==""?(g=new Gn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?pT:b_,0,f),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&vd(t,i),aT.call(this,e,t,h,i,f,l||ti.stringFilter,c))},lT=function(e,t,n,i,s){if(Ht(e)&&(e=Ca(e,s,t,n,i)),!ji(e)||e.style&&e.nodeType||wn(e)||Hg(e))return hn(e)?Ca(e,s,t,n,i):e;var r={},a;for(a in e)r[a]=Ca(e[a],s,t,n,i);return r},x_=function(e,t,n,i,s,r){var a,l,c,u;if(Zn[e]&&(a=new Zn[e]).init(s,a.rawVars?t[e]:lT(t[e],i,s,r,n),n,i,r)!==!1&&(n._pt=l=new Gn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==xo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ns,Ph,bd=function o(e,t,n){var i=e.vars,s=i.ease,r=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,v=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!pd,E=e.timeline,w,S,b,D,y,M,U,R,N,T,L,P,k;if(E&&(!h||!s)&&(s="none"),e._ease=Tr(s,Wo.ease),e._yEase=d?m_(Tr(d===!0?s:d,Wo.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!E&&!!i.runBackwards,!E||h&&!i.stagger){if(R=p[0]?Sr(p[0]).harness:0,P=R&&i[R.prop],w=wc(i,xd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&g?oc:Uw),_._lazy=0),r){if(Ks(e._startAt=Yt.set(p,gi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Hn(l),startAt:null,delay:0,onUpdate:c&&function(){return ei(e,"onUpdate")},stagger:0},r))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn||!a&&!f)&&e._startAt.revert(oc),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),b=gi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Hn(l),immediateRender:a,stagger:0,parent:m},w),P&&(b[R.prop]=P),Ks(e._startAt=Yt.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn?e._startAt.revert(oc):e._startAt.render(-1,!0)),e._zTime=t,!a)o(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Hn(l)||l&&!g,S=0;S<p.length;S++){if(y=p[S],U=y._gsap||Ed(p)[S]._gsap,e._ptLookup[S]=T={},wh[U.id]&&Xs.length&&Sc(),L=v===p?S:v.indexOf(y),R&&(N=new R).init(y,P||w,e,L,v)!==!1&&(e._pt=D=new Gn(e._pt,y,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(V){T[V]=D}),N.priority&&(M=1)),!R||P)for(b in w)Zn[b]&&(N=x_(b,w,e,L,y,v))?N.priority&&(M=1):T[b]=D=Md.call(e,y,b,"get",w[b],L,v,0,i.stringFilter);e._op&&e._op[S]&&e.kill(y,e._op[S]),x&&e._pt&&(Ns=e,Ot.killTweensOf(y,T,e.globalTime(t)),k=!e.parent,Ns=0),e._pt&&l&&(wh[U.id]=1)}M&&w_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,h&&t<=0&&E.render(fi,!0,!0)},cT=function(e,t,n,i,s,r,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ph=1,e.vars[t]="+=0",bd(e,a),Ph=0,l?Xa(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+r*u.c,u.c=n-u.s,d.e&&(d.e=Vt(n)+Mn(d.e)),d.b&&(d.b=u.s+Mn(d.b))},uT=function(e,t){var n=e[0]?Sr(e[0]).harness:0,i=n&&n.aliases,s,r,a,l;if(!i)return t;s=Nr({},t);for(r in i)if(r in s)for(l=i[r].split(","),a=l.length;a--;)s[l[a]]=s[r];return s},hT=function(e,t,n,i){var s=t.ease||i||"power1.inOut",r,a;if(wn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(r in t)a=n[r]||(n[r]=[]),r==="ease"||a.push({t:parseFloat(e),v:t[r],e:s})},Ca=function(e,t,n,i,s){return Ht(e)?e.call(t,n,i,s):hn(e)&&~e.indexOf("random(")?Ya(e):e},y_=yd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",E_={};Vn(y_+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return E_[o]=1});var Yt=function(o){zg(e,o);function e(n,i,s,r){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=o.call(this,r?i:Aa(i))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,v=i.parent||Ot,x=(wn(n)||Hg(n)?vs(n[0]):"length"in i)?[n]:pi(n),E,w,S,b,D,y,M,U;if(a._targets=x.length?Ed(x):Xa("GSAP target "+n+" not found. https://gsap.com",!ti.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||h||Ol(c)||Ol(u)){if(i=a.vars,E=a.timeline=new In({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),E.kill(),E.parent=E._dp=cs(a),E._start=0,h||Ol(c)||Ol(u)){if(b=x.length,M=h&&r_(h),ji(h))for(D in h)~y_.indexOf(D)&&(U||(U={}),U[D]=h[D]);for(w=0;w<b;w++)S=wc(i,E_),S.stagger=0,m&&(S.yoyoEase=m),U&&Nr(S,U),y=x[w],S.duration=+Ca(c,cs(a),w,y,x),S.delay=(+Ca(u,cs(a),w,y,x)||0)-a._delay,!h&&b===1&&S.delay&&(a._delay=u=S.delay,a._start+=u,S.delay=0),E.to(y,S,M?M(w,y,x):0),E._ease=ft.none;E.duration()?c=u=0:a.timeline=0}else if(g){Aa(gi(E.vars.defaults,{ease:"none"})),E._ease=Tr(g.ease||i.ease||"none");var R=0,N,T,L;if(wn(g))g.forEach(function(P){return E.to(x,P,">")}),E.duration();else{S={};for(D in g)D==="ease"||D==="easeEach"||hT(D,g[D],S,g.easeEach);for(D in S)for(N=S[D].sort(function(P,k){return P.t-k.t}),R=0,w=0;w<N.length;w++)T=N[w],L={ease:T.e,duration:(T.t-(w?N[w-1].t:0))/100*c},L[D]=T.v,E.to(x,L,R),R+=L.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return f===!0&&!pd&&(Ns=cs(a),Ot.killTweensOf(x),Ns=0),Bi(v,cs(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!g&&a._start===cn(v._time)&&Hn(d)&&Vw(cs(a))&&v.data!=="nested")&&(a._tTime=-wt,a.render(Math.max(0,-u)||0)),p&&t_(cs(a),p),a}var t=e.prototype;return t.render=function(i,s,r){var a=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-wt&&!u?l:i<wt?0:i,h,f,g,_,p,m,v,x,E;if(!c)Ww(this,i,s,r);else if(d!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=d,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,r);if(h=cn(d%_),d===l?(g=this._repeat,h=c):(g=~~(d/_),g&&g===cn(d/_)&&(h=c,g--),h>c&&(h=c)),m=this._yoyo&&g&1,m&&(E=this._yEase,h=c-h),p=Xo(this._tTime,_),h===a&&!r&&this._initted&&g===p)return this._tTime=d,this;g!==p&&(x&&this._yEase&&g_(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=r=1,this.render(cn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(n_(this,u?i:h,r,s,d))return this._tTime=0,this;if(a!==this._time&&!(r&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,r)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(E||this._ease)(h/c),this._from&&(this.ratio=v=1-v),h&&!a&&!s&&!g&&(ei(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(h/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Th(this,i,s,r),ei(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&ei(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Th(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ks(this,1),!s&&!(u&&!a)&&(d||a||m)&&(ei(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,r,a,l){ja||Jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||bd(this,c),u=this._ease(c/this._dur),cT(this,i,s,r,a,u,c,l)?this.resetTo(i,s,r,a,1):(qc(this,0),this.parent||Qg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ma(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ns&&Ns.vars.overwrite!==!0)._first||ma(this),this.parent&&r!==this.timeline.totalDuration()&&qo(this,this._dur*this.timeline._tDur/r,0,1),this}var a=this._targets,l=i?pi(i):a,c=this._ptLookup,u=this._pt,d,h,f,g,_,p,m;if((!s||s==="all")&&kw(a,l))return s==="all"&&(this._pt=0),ma(this);for(d=this._op=this._op||[],s!=="all"&&(hn(s)&&(_={},Vn(s,function(v){return _[v]=1}),s=_),s=uT(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(d[m]=s,g=h,f={}):(f=d[m]=d[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Wc(this,p,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&ma(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Da(1,arguments)},e.delayedCall=function(i,s,r,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:a})},e.fromTo=function(i,s,r){return Da(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,r){return Ot.killTweensOf(i,s,r)},e}($a);gi(Yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vn("staggerTo,staggerFrom,staggerFromTo",function(o){Yt[o]=function(){var e=new In,t=Dh.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Sd=function(e,t,n){return e[t]=n},M_=function(e,t,n){return e[t](n)},dT=function(e,t,n,i){return e[t](i.fp,n)},fT=function(e,t,n){return e.setAttribute(t,n)},wd=function(e,t){return Ht(e[t])?M_:md(e[t])&&e.setAttribute?fT:Sd},b_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},pT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},S_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Td=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},mT=function(e,t,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(e,t,n),s=r},gT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Wc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},_T=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},w_=function(e){for(var t=e._pt,n,i,s,r;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:r)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:r=t,t=n}e._pt=s},Gn=function(){function o(t,n,i,s,r,a,l,c,u){this.t=n,this.s=s,this.c=r,this.p=i,this.r=a||b_,this.d=l||this,this.set=c||Sd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=_T,this.m=n,this.mt=s,this.tween=i},o}();Vn(yd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return xd[o]=1});ni.TweenMax=ni.TweenLite=Yt;ni.TimelineLite=ni.TimelineMax=In;Ot=new In({sortChildren:!1,defaults:Wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ti.stringFilter=p_;var Ar=[],lc={},vT=[],jp=0,xT=0,Gu=function(e){return(lc[e]||vT).map(function(t){return t()})},Lh=function(){var e=Date.now(),t=[];e-jp>2&&(Gu("matchMediaInit"),Ar.forEach(function(n){var i=n.queries,s=n.conditions,r,a,l,c;for(a in i)r=Ii.matchMedia(i[a]).matches,r&&(l=1),r!==s[a]&&(s[a]=r,c=1);c&&(n.revert(),l&&t.push(n))}),Gu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),jp=e,Gu("matchMedia"))},T_=function(){function o(t,n){this.selector=n&&Ch(n),this.data=[],this._r=[],this.isReverted=!1,this.id=xT++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,s){Ht(n)&&(s=i,i=n,n=Ht);var r=this,a=function(){var c=Lt,u=r.selector,d;return c&&c!==r&&c.data.push(r),s&&(r.selector=Ch(s)),Lt=r,d=i.apply(r,arguments),Ht(d)&&r._r.push(d),Lt=c,r.selector=u,r.isReverted=!1,d};return r.last=a,n===Ht?a(r,function(l){return r.add(null,l)}):n?r[n]=a:a},e.ignore=function(n){var i=Lt;Lt=null,n(this),Lt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Yt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof In?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Yt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var r=Ar.length;r--;)Ar[r].id===this.id&&Ar.splice(r,1)},e.revert=function(n){this.kill(n||{})},o}(),yT=function(){function o(t){this.contexts=[],this.scope=t,Lt&&Lt.data.push(this)}var e=o.prototype;return e.add=function(n,i,s){ji(n)||(n={matches:n});var r=new T_(0,s||this.scope),a=r.conditions={},l,c,u;Lt&&!r.selector&&(r.selector=Lt.selector),this.contexts.push(r),i=r.add("onMatch",i),r.queries=n;for(c in n)c==="all"?u=1:(l=Ii.matchMedia(n[c]),l&&(Ar.indexOf(r)<0&&Ar.push(r),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Lh):l.addEventListener("change",Lh)));return u&&i(r,function(d){return r.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Ac={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return h_(i)})},timeline:function(e){return new In(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,n,i){hn(e)&&(e=pi(e)[0]);var s=Sr(e||{}).get,r=n?Jg:Zg;return n==="native"&&(n=""),e&&(t?r((Zn[t]&&Zn[t].get||s)(e,t,n,i)):function(a,l,c){return r((Zn[a]&&Zn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=pi(e),e.length>1){var i=e.map(function(u){return Xn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var r=Zn[t],a=Sr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=r?function(u){var d=new r;xo._pt=0,d.init(e,n?u+n:u,xo,0,[e]),d.render(1,d),xo._pt&&Td(1,xo)}:a.set(e,l);return r?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Xn.to(e,Nr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),r=function(l,c,u){return s.resetTo(t,l,c,u)};return r.tween=s,r},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Tr(e.ease,Wo.ease)),Gp(Wo,e||{})},config:function(e){return Gp(ti,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,r=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Zn[a]&&!ni[a]&&Xa(t+" effect requires "+a+" plugin.")}),zu[t]=function(a,l,c){return n(pi(a),gi(l||{},s),c)},r&&(In.prototype[t]=function(a,l,c){return this.add(zu[t](a,ji(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=Tr(t)},parseEase:function(e,t){return arguments.length?Tr(e,t):ft},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new In(e),i,s;for(n.smoothChildTiming=Hn(e.smoothChildTiming),Ot.remove(n),n._dp=0,n._time=n._tTime=Ot._time,i=Ot._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Yt&&i.vars.onComplete===i._targets[0]))&&Bi(n,i,i._start-i._delay),i=s;return Bi(Ot,n,0),n},context:function(e,t){return e?new T_(e,t):Lt},matchMedia:function(e){return new yT(e)},matchMediaRefresh:function(){return Ar.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Lh()},addEventListener:function(e,t){var n=lc[e]||(lc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=lc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Jw,wrapYoyo:Qw,distribute:r_,random:a_,snap:o_,normalize:Zw,getUnit:Mn,clamp:Yw,splitColor:d_,toArray:pi,selector:Ch,mapRange:c_,pipe:$w,unitize:Kw,interpolate:eT,shuffle:s_},install:qg,effects:zu,ticker:Jn,updateRoot:In.updateRoot,plugins:Zn,globalTimeline:Ot,core:{PropTween:Gn,globals:Yg,Tween:Yt,Timeline:In,Animation:$a,getCache:Sr,_removeLinkedListItem:Wc,reverting:function(){return Sn},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return pd=e}}};Vn("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Ac[o]=Yt[o]});Jn.add(In.updateRoot);xo=Ac.to({},{duration:0});var ET=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},MT=function(e,t){var n=e._targets,i,s,r;for(i in t)for(s=n.length;s--;)r=e._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=ET(r,i)),r&&r.modifier&&r.modifier(t[i],e,n[s],i))},Wu=function(e,t){return{name:e,rawVars:1,init:function(i,s,r){r._onInit=function(a){var l,c;if(hn(s)&&(l={},Vn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}MT(a,s)}}}},Xn=Ac.registerPlugin({name:"attr",init:function(e,t,n,i,s){var r,a,l;this.tween=n;for(r in t)l=e.getAttribute(r)||"",a=this.add(e,"setAttribute",(l||0)+"",t[r],i,s,0,0,r),a.op=r,a.b=l,this._props.push(r)},render:function(e,t){for(var n=t._pt;n;)Sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Wu("roundProps",Rh),Wu("modifiers"),Wu("snap",o_))||Ac;Yt.version=In.version=Xn.version="3.12.5";Xg=1;gd()&&Yo();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $p,Us,Ao,Ad,xr,Kp,Dd,bT=function(){return typeof window<"u"},xs={},fr=180/Math.PI,Do=Math.PI/180,ao=Math.atan2,Zp=1e8,Cd=/([A-Z])/g,ST=/(left|right|width|margin|padding|x)/i,wT=/[\s,\(]\S/,Hi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},TT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},AT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},DT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},A_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},D_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},CT=function(e,t,n){return e.style[t]=n},RT=function(e,t,n){return e.style.setProperty(t,n)},PT=function(e,t,n){return e._gsap[t]=n},LT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},FT=function(e,t,n,i,s){var r=e._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},IT=function(e,t,n,i,s){var r=e._gsap;r[t]=n,r.renderTransform(s,r)},zt="transform",Wn=zt+"Origin",NT=function o(e,t){var n=this,i=this.target,s=i.style,r=i._gsap;if(e in xs&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Hi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=us(i,a)}):this.tfm[e]=r.x?r[e]:us(i,e),e===Wn&&(this.tfm.zOrigin=r.zOrigin);else return Hi.transform.split(",").forEach(function(a){return o.call(n,a,t)});if(this.props.indexOf(zt)>=0)return;r.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Wn,t,"")),e=zt}(s||t)&&this.props.push(e,t,s[e])},C_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},UT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,r;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Cd,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)i[r]=this.tfm[r];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Dd(),(!s||!s.isStart)&&!n[zt]&&(C_(n),i.zOrigin&&n[Wn]&&(n[Wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},R_=function(e,t){var n={target:e,props:[],revert:UT,save:NT};return e._gsap||Xn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},P_,Ih=function(e,t){var n=Us.createElementNS?Us.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Us.createElement(e);return n&&n.style?n:Us.createElement(e)},Xi=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Cd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,jo(t)||t,1)||""},Jp="O,Moz,ms,Ms,Webkit".split(","),jo=function(e,t,n){var i=t||xr,s=i.style,r=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(Jp[r]+e in s););return r<0?null:(r===3?"ms":r>=0?Jp[r]:"")+e},Nh=function(){bT()&&window.document&&($p=window,Us=$p.document,Ao=Us.documentElement,xr=Ih("div")||{style:{}},Ih("div"),zt=jo(zt),Wn=zt+"Origin",xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",P_=!!jo("perspective"),Dd=Xn.core.reverting,Ad=1)},Xu=function o(e){var t=Ih("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,r;if(Ao.appendChild(t),t.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ao.removeChild(t),this.style.cssText=s,r},Qp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},L_=function(e){var t;try{t=e.getBBox()}catch{t=Xu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Xu||(t=Xu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Qp(e,["x","cx","x1"])||0,y:+Qp(e,["y","cy","y1"])||0,width:0,height:0}:t},F_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&L_(e))},Ur=function(e,t){if(t){var n=e.style,i;t in xs&&t!==Wn&&(t=zt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Cd,"-$1").toLowerCase())):n.removeAttribute(t)}},Os=function(e,t,n,i,s,r){var a=new Gn(e._pt,t,n,0,1,r?D_:A_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},em={deg:1,rad:1,turn:1},OT={grid:1,flex:1},Zs=function o(e,t,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",a=xr.style,l=ST.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",g,_,p,m;if(i===r||!s||em[i]||em[r])return s;if(r!=="px"&&!h&&(s=o(e,t,n,"px")),m=e.getCTM&&F_(e),(f||r==="%")&&(xs[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Vt(f?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(h?r:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Us||!_.appendChild)&&(_=Us.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Jn.time&&!p.uncache)return Vt(s/p.width*d);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,g=e[u],v?e.style[t]=v:Ur(e,t)}else(f||r==="%")&&!OT[Xi(_,"display")]&&(a.position=Xi(e,"position")),_===e&&(a.position="static"),_.appendChild(xr),g=xr[u],_.removeChild(xr),a.position="absolute";return l&&f&&(p=Sr(_),p.time=Jn.time,p.width=_[u]),Vt(h?g*s/d:g&&s?d/g*s:0)},us=function(e,t,n,i){var s;return Ad||Nh(),t in Hi&&t!=="transform"&&(t=Hi[t],~t.indexOf(",")&&(t=t.split(",")[0])),xs[t]&&t!=="transform"?(s=Za(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Cc(Xi(e,Wn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Dc[t]&&Dc[t](e,t,n)||Xi(e,t)||$g(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Zs(e,t,s,n)+n:s},BT=function(e,t,n,i){if(!n||n==="none"){var s=jo(t,e,1),r=s&&Xi(e,s,1);r&&r!==n?(t=s,n=r):t==="borderColor"&&(n=Xi(e,"borderTopColor"))}var a=new Gn(this._pt,e.style,t,0,1,S_),l=0,c=0,u,d,h,f,g,_,p,m,v,x,E,w;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=Xi(e,t)||i,_?e.style[t]=_:Ur(e,t)),u=[n,i],p_(u),n=u[0],i=u[1],h=n.match(vo)||[],w=i.match(vo)||[],w.length){for(;d=vo.exec(i);)p=d[0],v=i.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(f=parseFloat(_)||0,E=_.substr((f+"").length),p.charAt(1)==="="&&(p=To(f,p)+E),m=parseFloat(p),x=p.substr((m+"").length),l=vo.lastIndex-x.length,x||(x=x||ti.units[t]||E,l===i.length&&(i+=x,a.e+=x)),E!==x&&(f=Zs(e,t,_,x)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?D_:A_;return Gg.test(i)&&(a.e=0),this._pt=a,a},tm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},zT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=tm[n]||n,t[1]=tm[i]||i,t.join(" ")},kT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,r=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],xs[a]&&(l=1,a=a==="transformOrigin"?Wn:zt),Ur(n,a);l&&(Ur(n,zt),r&&(r.svg&&n.removeAttribute("transform"),Za(n,1),r.uncache=1,C_(i)))}},Dc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var r=e._pt=new Gn(e._pt,t,n,0,0,kT);return r.u=i,r.pr=-10,r.tween=s,e._props.push(n),1}}},Ka=[1,0,0,1,0,0],I_={},N_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},nm=function(e){var t=Xi(e,zt);return N_(t)?Ka:t.substr(7).match(Vg).map(Vt)},Rd=function(e,t){var n=e._gsap||Sr(e),i=e.style,s=nm(e),r,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ka:s):(s===Ka&&!e.offsetParent&&e!==Ao&&!n.svg&&(l=i.display,i.display="block",r=e.parentNode,(!r||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Ao.appendChild(e)),s=nm(e),l?i.display=l:Ur(e,"display"),c&&(a?r.insertBefore(e,a):r?r.appendChild(e):Ao.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Uh=function(e,t,n,i,s,r){var a=e._gsap,l=s||Rd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],v=l[5],x=t.split(" "),E=parseFloat(x[0])||0,w=parseFloat(x[1])||0,S,b,D,y;n?l!==Ka&&(b=f*p-g*_)&&(D=E*(p/b)+w*(-_/b)+(_*v-p*m)/b,y=E*(-g/b)+w*(f/b)-(f*v-g*m)/b,E=D,w=y):(S=L_(e),E=S.x+(~x[0].indexOf("%")?E/100*S.width:E),w=S.y+(~(x[1]||x[0]).indexOf("%")?w/100*S.height:w)),i||i!==!1&&a.smooth?(m=E-c,v=w-u,a.xOffset=d+(m*f+v*_)-m,a.yOffset=h+(m*g+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=E,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Wn]="0px 0px",r&&(Os(r,a,"xOrigin",c,E),Os(r,a,"yOrigin",u,w),Os(r,a,"xOffset",d,a.xOffset),Os(r,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",E+" "+w)},Za=function(e,t){var n=e._gsap||new v_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,r="px",a="deg",l=getComputedStyle(e),c=Xi(e,Wn)||"0",u,d,h,f,g,_,p,m,v,x,E,w,S,b,D,y,M,U,R,N,T,L,P,k,V,G,I,Q,$,j,ee,he;return u=d=h=_=p=m=v=x=E=0,f=g=1,n.svg=!!(e.getCTM&&F_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[zt]!=="none"?l[zt]:"")),i.scale=i.rotate=i.translate="none"),b=Rd(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),Uh(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,b)),w=n.xOrigin||0,S=n.yOrigin||0,b!==Ka&&(U=b[0],R=b[1],N=b[2],T=b[3],u=L=b[4],d=P=b[5],b.length===6?(f=Math.sqrt(U*U+R*R),g=Math.sqrt(T*T+N*N),_=U||R?ao(R,U)*fr:0,v=N||T?ao(N,T)*fr+_:0,v&&(g*=Math.abs(Math.cos(v*Do))),n.svg&&(u-=w-(w*U+S*N),d-=S-(w*R+S*T))):(he=b[6],j=b[7],I=b[8],Q=b[9],$=b[10],ee=b[11],u=b[12],d=b[13],h=b[14],D=ao(he,$),p=D*fr,D&&(y=Math.cos(-D),M=Math.sin(-D),k=L*y+I*M,V=P*y+Q*M,G=he*y+$*M,I=L*-M+I*y,Q=P*-M+Q*y,$=he*-M+$*y,ee=j*-M+ee*y,L=k,P=V,he=G),D=ao(-N,$),m=D*fr,D&&(y=Math.cos(-D),M=Math.sin(-D),k=U*y-I*M,V=R*y-Q*M,G=N*y-$*M,ee=T*M+ee*y,U=k,R=V,N=G),D=ao(R,U),_=D*fr,D&&(y=Math.cos(D),M=Math.sin(D),k=U*y+R*M,V=L*y+P*M,R=R*y-U*M,P=P*y-L*M,U=k,L=V),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=Vt(Math.sqrt(U*U+R*R+N*N)),g=Vt(Math.sqrt(P*P+he*he)),D=ao(L,P),v=Math.abs(D)>2e-4?D*fr:0,E=ee?1/(ee<0?-ee:ee):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!N_(Xi(e,zt)),k&&e.setAttribute("transform",k))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+r,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+r,n.z=h+r,n.scaleX=Vt(f),n.scaleY=Vt(g),n.rotation=Vt(_)+a,n.rotationX=Vt(p)+a,n.rotationY=Vt(m)+a,n.skewX=v+a,n.skewY=x+a,n.transformPerspective=E+r,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Wn]=Cc(c)),n.xOffset=n.yOffset=0,n.force3D=ti.force3D,n.renderTransform=n.svg?VT:P_?U_:HT,n.uncache=0,n},Cc=function(e){return(e=e.split(" "))[0]+" "+e[1]},qu=function(e,t,n){var i=Mn(t);return Vt(parseFloat(t)+parseFloat(Zs(e,"x",n+"px",i)))+i},HT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,U_(e,t)},lr="0deg",la="0px",cr=") ",U_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,v=n.target,x=n.zOrigin,E="",w=m==="auto"&&e&&e!==1||m===!0;if(x&&(d!==lr||u!==lr)){var S=parseFloat(u)*Do,b=Math.sin(S),D=Math.cos(S),y;S=parseFloat(d)*Do,y=Math.cos(S),r=qu(v,r,b*y*-x),a=qu(v,a,-Math.sin(S)*-x),l=qu(v,l,D*y*-x+x)}p!==la&&(E+="perspective("+p+cr),(i||s)&&(E+="translate("+i+"%, "+s+"%) "),(w||r!==la||a!==la||l!==la)&&(E+=l!==la||w?"translate3d("+r+", "+a+", "+l+") ":"translate("+r+", "+a+cr),c!==lr&&(E+="rotate("+c+cr),u!==lr&&(E+="rotateY("+u+cr),d!==lr&&(E+="rotateX("+d+cr),(h!==lr||f!==lr)&&(E+="skew("+h+", "+f+cr),(g!==1||_!==1)&&(E+="scale("+g+", "+_+cr),v.style[zt]=E||"translate(0, 0)"},VT=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,v=n.forceCSS,x=parseFloat(r),E=parseFloat(a),w,S,b,D,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Do,c*=Do,w=Math.cos(l)*d,S=Math.sin(l)*d,b=Math.sin(l-c)*-h,D=Math.cos(l-c)*h,c&&(u*=Do,y=Math.tan(c-u),y=Math.sqrt(1+y*y),b*=y,D*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),w*=y,S*=y)),w=Vt(w),S=Vt(S),b=Vt(b),D=Vt(D)):(w=d,D=h,S=b=0),(x&&!~(r+"").indexOf("px")||E&&!~(a+"").indexOf("px"))&&(x=Zs(f,"x",r,"px"),E=Zs(f,"y",a,"px")),(g||_||p||m)&&(x=Vt(x+g-(g*w+_*b)+p),E=Vt(E+_-(g*S+_*D)+m)),(i||s)&&(y=f.getBBox(),x=Vt(x+i/100*y.width),E=Vt(E+s/100*y.height)),y="matrix("+w+","+S+","+b+","+D+","+x+","+E+")",f.setAttribute("transform",y),v&&(f.style[zt]=y)},GT=function(e,t,n,i,s){var r=360,a=hn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?fr:1),c=l-i,u=i+c+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(c%=r,c!==c%(r/2)&&(c+=c<0?r:-r)),d==="cw"&&c<0?c=(c+r*Zp)%r-~~(c/r)*r:d==="ccw"&&c>0&&(c=(c-r*Zp)%r-~~(c/r)*r)),e._pt=h=new Gn(e._pt,t,n,i,c,TT),h.e=u,h.u="deg",e._props.push(n),h},im=function(e,t){for(var n in t)e[n]=t[n];return e},WT=function(e,t,n){var i=im({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,a,l,c,u,d,h,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),r[zt]=t,a=Za(n,1),Ur(n,zt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[zt],r[zt]=t,a=Za(n,1),r[zt]=c);for(l in xs)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=Mn(c),g=Mn(u),d=f!==g?Zs(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Gn(e._pt,a,l,d,h-d,Fh),e._pt.u=g||0,e._props.push(l));im(a,i)};Vn("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",s="Left",r=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?o+a:"border"+a+o});Dc[e>1?"border"+o:o]=function(a,l,c,u,d){var h,f;if(arguments.length<4)return h=r.map(function(g){return us(a,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},r.forEach(function(g,_){return f[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,f,d)}});var O_={name:"css",register:Nh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var r=this._props,a=e.style,l=n.vars.startAt,c,u,d,h,f,g,_,p,m,v,x,E,w,S,b,D;Ad||Nh(),this.styles=this.styles||R_(e),D=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Zn[_]&&x_(_,t,n,i,e,s)))){if(f=typeof u,g=Dc[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ya(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",qs.lastIndex=0,qs.test(c)||(p=Mn(c),m=Mn(u)),m?p!==m&&(c=Zs(e,_,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,_),r.push(_),D.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],hn(c)&&~c.indexOf("random(")&&(c=Ya(c)),Mn(c+"")||c==="auto"||(c+=ti.units[_]||Mn(us(e,_))||""),(c+"").charAt(1)==="="&&(c=us(e,_))):c=us(e,_),h=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),_ in Hi&&(_==="autoAlpha"&&(h===1&&us(e,"visibility")==="hidden"&&d&&(h=0),D.push("visibility",0,a.visibility),Os(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Hi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in xs,x){if(this.styles.save(_),E||(w=e._gsap,w.renderTransform&&!t.parseTransform||Za(e,t.parseTransform),S=t.smoothOrigin!==!1&&w.smooth,E=this._pt=new Gn(this._pt,a,zt,0,1,w.renderTransform,w,0,-1),E.dep=1),_==="scale")this._pt=new Gn(this._pt,w,"scaleY",w.scaleY,(v?To(w.scaleY,v+d):d)-w.scaleY||0,Fh),this._pt.u=0,r.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(Wn,0,a[Wn]),u=zT(u),w.svg?Uh(e,u,0,S,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==w.zOrigin&&Os(this,w,"zOrigin",w.zOrigin,m),Os(this,a,_,Cc(c),Cc(u)));continue}else if(_==="svgOrigin"){Uh(e,u,1,S,0,this);continue}else if(_ in I_){GT(this,w,_,h,v?To(h,v+u):u);continue}else if(_==="smoothOrigin"){Os(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){WT(this,u,e);continue}}else _ in a||(_=jo(_)||_);if(x||(d||d===0)&&(h||h===0)&&!wT.test(u)&&_ in a)p=(c+"").substr((h+"").length),d||(d=0),m=Mn(u)||(_ in ti.units?ti.units[_]:p),p!==m&&(h=Zs(e,_,c,m)),this._pt=new Gn(this._pt,x?w:a,_,h,(v?To(h,v+d):d)-h,!x&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?DT:Fh),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=AT);else if(_ in a)BT.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,i,s);else if(_!=="parseTransform"){vd(_,u);continue}x||(_ in a?D.push(_,0,a[_]):D.push(_,1,c||e[_])),r.push(_)}}b&&w_(this)},render:function(e,t){if(t.tween._time||!Dd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:us,aliases:Hi,getSetter:function(e,t,n){var i=Hi[t];return i&&i.indexOf(",")<0&&(t=i),t in xs&&t!==Wn&&(e._gsap.x||us(e,"x"))?n&&Kp===n?t==="scale"?LT:PT:(Kp=n||{})&&(t==="scale"?FT:IT):e.style&&!md(e.style[t])?CT:~t.indexOf("-")?RT:wd(e,t)},core:{_removeProperty:Ur,_getMatrix:Rd}};Xn.utils.checkPrefix=jo;Xn.core.getStyleSaver=R_;(function(o,e,t,n){var i=Vn(o+","+e+","+t,function(s){xs[s]=1});Vn(e,function(s){ti.units[s]="deg",I_[s]=1}),Hi[i[13]]=o+","+e,Vn(n,function(s){var r=s.split(":");Hi[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){ti.units[o]="px"});Xn.registerPlugin(O_);var yn=Xn.registerPlugin(O_)||Xn;yn.core.Tween;function sm(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function XT(o,e,t){return e&&sm(o.prototype,e),t&&sm(o,t),o}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dn,cc,Qn,Bs,zs,Co,B_,pr,Ra,z_,ms,Mi,k_,H_=function(){return dn||typeof window<"u"&&(dn=window.gsap)&&dn.registerPlugin&&dn},V_=1,yo=[],ct=[],qi=[],Pa=Date.now,Oh=function(e,t){return t},qT=function(){var e=Ra.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ct),i.push.apply(i,qi),ct=n,qi=i,Oh=function(r,a){return t[r](a)}},Ys=function(e,t){return~qi.indexOf(e)&&qi[qi.indexOf(e)+1][t]},La=function(e){return!!~z_.indexOf(e)},Cn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Dn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Bl="scrollLeft",zl="scrollTop",Bh=function(){return ms&&ms.isPressed||ct.cache++},Rc=function(e,t){var n=function i(s){if(s||s===0){V_&&(Qn.history.scrollRestoration="manual");var r=ms&&ms.isPressed;s=i.v=Math.round(s)||(ms&&ms.iOS?1:0),e(s),i.cacheID=ct.cache,r&&Oh("ss",s)}else(t||ct.cache!==i.cacheID||Oh("ref"))&&(i.cacheID=ct.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Nn={s:Bl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Rc(function(o){return arguments.length?Qn.scrollTo(o,Qt.sc()):Qn.pageXOffset||Bs[Bl]||zs[Bl]||Co[Bl]||0})},Qt={s:zl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Nn,sc:Rc(function(o){return arguments.length?Qn.scrollTo(Nn.sc(),o):Qn.pageYOffset||Bs[zl]||zs[zl]||Co[zl]||0})},Bn=function(e,t){return(t&&t._ctx&&t._ctx.selector||dn.utils.toArray)(e)[0]||(typeof e=="string"&&dn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Js=function(e,t){var n=t.s,i=t.sc;La(e)&&(e=Bs.scrollingElement||zs);var s=ct.indexOf(e),r=i===Qt.sc?1:2;!~s&&(s=ct.push(e)-1),ct[s+r]||Cn(e,"scroll",Bh);var a=ct[s+r],l=a||(ct[s+r]=Rc(Ys(e,n),!0)||(La(e)?i:Rc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=dn.getProperty(e,"scrollBehavior")==="smooth"),l},zh=function(e,t,n){var i=e,s=e,r=Pa(),a=r,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=Pa();_||p-r>l?(s=i,i=g,a=r,r=p):n?i+=g:i=s+(g-s)/(p-a)*(r-a)},d=function(){s=i=n?0:i,a=r=0},h=function(g){var _=a,p=s,m=Pa();return(g||g===0)&&g!==i&&u(g),r===a||m-a>c?0:(i+(n?p:-p))/((n?m:r)-_)*1e3};return{update:u,reset:d,getVelocity:h}},ca=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},rm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},G_=function(){Ra=dn.core.globals().ScrollTrigger,Ra&&Ra.core&&qT()},W_=function(e){return dn=e||H_(),!cc&&dn&&typeof document<"u"&&document.body&&(Qn=window,Bs=document,zs=Bs.documentElement,Co=Bs.body,z_=[Qn,Bs,zs,Co],dn.utils.clamp,k_=dn.core.context||function(){},pr="onpointerenter"in Co?"pointer":"mouse",B_=Gt.isTouch=Qn.matchMedia&&Qn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Qn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mi=Gt.eventTypes=("ontouchstart"in zs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in zs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return V_=0},500),G_(),cc=1),cc};Nn.op=Qt;ct.cache=0;var Gt=function(){function o(t){this.init(t)}var e=o.prototype;return e.init=function(n){cc||W_(dn)||console.warn("Please gsap.registerPlugin(Observer)"),Ra||G_();var i=n.tolerance,s=n.dragMinimum,r=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,v=n.onDrag,x=n.onPress,E=n.onRelease,w=n.onRight,S=n.onLeft,b=n.onUp,D=n.onDown,y=n.onChangeX,M=n.onChangeY,U=n.onChange,R=n.onToggleX,N=n.onToggleY,T=n.onHover,L=n.onHoverEnd,P=n.onMove,k=n.ignoreCheck,V=n.isNormalizer,G=n.onGestureStart,I=n.onGestureEnd,Q=n.onWheel,$=n.onEnable,j=n.onDisable,ee=n.onClick,he=n.scrollSpeed,ye=n.capture,ge=n.allowClicks,ae=n.lockAxis,te=n.onLockAxis;this.target=a=Bn(a)||zs,this.vars=n,f&&(f=dn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,he=he||1,r=r||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Qn.getComputedStyle(Co).lineHeight)||22);var ve,Se,q,He,_e,Ce,Me,K=this,Ve=0,O=0,C=n.passive||!u,X=Js(a,Nn),ie=Js(a,Qt),se=X(),le=ie(),be=~r.indexOf("touch")&&!~r.indexOf("pointer")&&Mi[0]==="pointerdown",xe=La(a),fe=a.ownerDocument||Bs,Ie=[0,0,0],We=[0,0,0],ne=0,lt=function(){return ne=Pa()},Be=function(Ae,Fe){return(K.event=Ae)&&f&&~f.indexOf(Ae.target)||Fe&&be&&Ae.pointerType!=="touch"||k&&k(Ae,Fe)},$e=function(){K._vx.reset(),K._vy.reset(),Se.pause(),d&&d(K)},Ne=function(){var Ae=K.deltaX=rm(Ie),Fe=K.deltaY=rm(We),de=Math.abs(Ae)>=i,qe=Math.abs(Fe)>=i;U&&(de||qe)&&U(K,Ae,Fe,Ie,We),de&&(w&&K.deltaX>0&&w(K),S&&K.deltaX<0&&S(K),y&&y(K),R&&K.deltaX<0!=Ve<0&&R(K),Ve=K.deltaX,Ie[0]=Ie[1]=Ie[2]=0),qe&&(D&&K.deltaY>0&&D(K),b&&K.deltaY<0&&b(K),M&&M(K),N&&K.deltaY<0!=O<0&&N(K),O=K.deltaY,We[0]=We[1]=We[2]=0),(He||q)&&(P&&P(K),q&&(v(K),q=!1),He=!1),Ce&&!(Ce=!1)&&te&&te(K),_e&&(Q(K),_e=!1),ve=0},we=function(Ae,Fe,de){Ie[de]+=Ae,We[de]+=Fe,K._vx.update(Ae),K._vy.update(Fe),c?ve||(ve=requestAnimationFrame(Ne)):Ne()},B=function(Ae,Fe){ae&&!Me&&(K.axis=Me=Math.abs(Ae)>Math.abs(Fe)?"x":"y",Ce=!0),Me!=="y"&&(Ie[2]+=Ae,K._vx.update(Ae,!0)),Me!=="x"&&(We[2]+=Fe,K._vy.update(Fe,!0)),c?ve||(ve=requestAnimationFrame(Ne)):Ne()},ue=function(Ae){if(!Be(Ae,1)){Ae=ca(Ae,u);var Fe=Ae.clientX,de=Ae.clientY,qe=Fe-K.x,Xe=de-K.y,Qe=K.isDragging;K.x=Fe,K.y=de,(Qe||Math.abs(K.startX-Fe)>=s||Math.abs(K.startY-de)>=s)&&(v&&(q=!0),Qe||(K.isDragging=!0),B(qe,Xe),Qe||p&&p(K))}},Le=K.onPress=function(Re){Be(Re,1)||Re&&Re.button||(K.axis=Me=null,Se.pause(),K.isPressed=!0,Re=ca(Re),Ve=O=0,K.startX=K.x=Re.clientX,K.startY=K.y=Re.clientY,K._vx.reset(),K._vy.reset(),Cn(V?a:fe,Mi[1],ue,C,!0),K.deltaX=K.deltaY=0,x&&x(K))},re=K.onRelease=function(Re){if(!Be(Re,1)){Dn(V?a:fe,Mi[1],ue,!0);var Ae=!isNaN(K.y-K.startY),Fe=K.isDragging,de=Fe&&(Math.abs(K.x-K.startX)>3||Math.abs(K.y-K.startY)>3),qe=ca(Re);!de&&Ae&&(K._vx.reset(),K._vy.reset(),u&&ge&&dn.delayedCall(.08,function(){if(Pa()-ne>300&&!Re.defaultPrevented){if(Re.target.click)Re.target.click();else if(fe.createEvent){var Xe=fe.createEvent("MouseEvents");Xe.initMouseEvent("click",!0,!0,Qn,1,qe.screenX,qe.screenY,qe.clientX,qe.clientY,!1,!1,!1,!1,0,null),Re.target.dispatchEvent(Xe)}}})),K.isDragging=K.isGesturing=K.isPressed=!1,d&&Fe&&!V&&Se.restart(!0),m&&Fe&&m(K),E&&E(K,de)}},oe=function(Ae){return Ae.touches&&Ae.touches.length>1&&(K.isGesturing=!0)&&G(Ae,K.isDragging)},z=function(){return(K.isGesturing=!1)||I(K)},ce=function(Ae){if(!Be(Ae)){var Fe=X(),de=ie();we((Fe-se)*he,(de-le)*he,1),se=Fe,le=de,d&&Se.restart(!0)}},pe=function(Ae){if(!Be(Ae)){Ae=ca(Ae,u),Q&&(_e=!0);var Fe=(Ae.deltaMode===1?l:Ae.deltaMode===2?Qn.innerHeight:1)*g;we(Ae.deltaX*Fe,Ae.deltaY*Fe,0),d&&!V&&Se.restart(!0)}},Ge=function(Ae){if(!Be(Ae)){var Fe=Ae.clientX,de=Ae.clientY,qe=Fe-K.x,Xe=de-K.y;K.x=Fe,K.y=de,He=!0,d&&Se.restart(!0),(qe||Xe)&&B(qe,Xe)}},ze=function(Ae){K.event=Ae,T(K)},Ze=function(Ae){K.event=Ae,L(K)},nt=function(Ae){return Be(Ae)||ca(Ae,u)&&ee(K)};Se=K._dc=dn.delayedCall(h||.25,$e).pause(),K.deltaX=K.deltaY=0,K._vx=zh(0,50,!0),K._vy=zh(0,50,!0),K.scrollX=X,K.scrollY=ie,K.isDragging=K.isGesturing=K.isPressed=!1,k_(this),K.enable=function(Re){return K.isEnabled||(Cn(xe?fe:a,"scroll",Bh),r.indexOf("scroll")>=0&&Cn(xe?fe:a,"scroll",ce,C,ye),r.indexOf("wheel")>=0&&Cn(a,"wheel",pe,C,ye),(r.indexOf("touch")>=0&&B_||r.indexOf("pointer")>=0)&&(Cn(a,Mi[0],Le,C,ye),Cn(fe,Mi[2],re),Cn(fe,Mi[3],re),ge&&Cn(a,"click",lt,!0,!0),ee&&Cn(a,"click",nt),G&&Cn(fe,"gesturestart",oe),I&&Cn(fe,"gestureend",z),T&&Cn(a,pr+"enter",ze),L&&Cn(a,pr+"leave",Ze),P&&Cn(a,pr+"move",Ge)),K.isEnabled=!0,Re&&Re.type&&Le(Re),$&&$(K)),K},K.disable=function(){K.isEnabled&&(yo.filter(function(Re){return Re!==K&&La(Re.target)}).length||Dn(xe?fe:a,"scroll",Bh),K.isPressed&&(K._vx.reset(),K._vy.reset(),Dn(V?a:fe,Mi[1],ue,!0)),Dn(xe?fe:a,"scroll",ce,ye),Dn(a,"wheel",pe,ye),Dn(a,Mi[0],Le,ye),Dn(fe,Mi[2],re),Dn(fe,Mi[3],re),Dn(a,"click",lt,!0),Dn(a,"click",nt),Dn(fe,"gesturestart",oe),Dn(fe,"gestureend",z),Dn(a,pr+"enter",ze),Dn(a,pr+"leave",Ze),Dn(a,pr+"move",Ge),K.isEnabled=K.isPressed=K.isDragging=!1,j&&j(K))},K.kill=K.revert=function(){K.disable();var Re=yo.indexOf(K);Re>=0&&yo.splice(Re,1),ms===K&&(ms=0)},yo.push(K),V&&La(a)&&(ms=K),K.enable(_)},XT(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o}();Gt.version="3.12.5";Gt.create=function(o){return new Gt(o)};Gt.register=W_;Gt.getAll=function(){return yo.slice()};Gt.getById=function(o){return yo.filter(function(e){return e.vars.id===o})[0]};H_()&&dn.registerPlugin(Gt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pe,po,dt,Nt,wi,Rt,X_,Pc,Ja,Fa,_a,kl,vn,Yc,kh,Ln,om,am,mo,q_,Yu,Y_,Pn,Hh,j_,$_,Cs,Vh,Pd,Ro,Ld,Lc,Gh,ju,Hl=1,xn=Date.now,$u=xn(),mi=0,va=0,lm=function(e,t,n){var i=Kn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},cm=function(e,t){return t&&(!Kn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},YT=function o(){return va&&requestAnimationFrame(o)},um=function(){return Yc=1},hm=function(){return Yc=0},Ni=function(e){return e},xa=function(e){return Math.round(e*1e5)/1e5||0},K_=function(){return typeof window<"u"},Z_=function(){return Pe||K_()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},Or=function(e){return!!~X_.indexOf(e)},J_=function(e){return(e==="Height"?Ld:dt["inner"+e])||wi["client"+e]||Rt["client"+e]},Q_=function(e){return Ys(e,"getBoundingClientRect")||(Or(e)?function(){return pc.width=dt.innerWidth,pc.height=Ld,pc}:function(){return ds(e)})},jT=function(e,t,n){var i=n.d,s=n.d2,r=n.a;return(r=Ys(e,"getBoundingClientRect"))?function(){return r()[i]}:function(){return(t?J_(s):e["client"+s])||0}},$T=function(e,t){return!t||~qi.indexOf(e)?Q_(e):function(){return pc}},Vi=function(e,t){var n=t.s,i=t.d2,s=t.d,r=t.a;return Math.max(0,(n="scroll"+i)&&(r=Ys(e,n))?r()-Q_(e)()[s]:Or(e)?(wi[n]||Rt[n])-J_(i):e[n]-e["offset"+i])},Vl=function(e,t){for(var n=0;n<mo.length;n+=3)(!t||~t.indexOf(mo[n+1]))&&e(mo[n],mo[n+1],mo[n+2])},Kn=function(e){return typeof e=="string"},Un=function(e){return typeof e=="function"},ya=function(e){return typeof e=="number"},mr=function(e){return typeof e=="object"},ua=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ku=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},lo=Math.abs,e0="left",t0="top",Fd="right",Id="bottom",Dr="width",Cr="height",Ia="Right",Na="Left",Ua="Top",Oa="Bottom",Xt="padding",li="margin",$o="Width",Nd="Height",Zt="px",ci=function(e){return dt.getComputedStyle(e)},KT=function(e){var t=ci(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},dm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ds=function(e,t){var n=t&&ci(e)[kh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Fc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},n0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},ZT=function(e){return function(t){return Pe.utils.snap(n0(e),t)}},Ud=function(e){var t=Pe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,r){r===void 0&&(r=.001);var a;if(!s)return t(i);if(s>0){for(i-=r,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=r;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,r){r===void 0&&(r=.001);var a=t(i);return!s||Math.abs(a-i)<r||a-i<0==s<0?a:t(s<0?i-e:i+e)}},JT=function(e){return function(t,n){return Ud(n0(e))(t,n.direction)}},Gl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},on=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Wl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},fm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Xl={toggleActions:"play",anticipatePin:0},Ic={top:0,left:0,center:.5,bottom:1,right:1},uc=function(e,t){if(Kn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ic?Ic[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ql=function(e,t,n,i,s,r,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,g=Nt.createElement("div"),_=Or(n)||Ys(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?Rt:n,v=e.indexOf("start")!==-1,x=v?c:u,E="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return E+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(E+=(i===Qt?Fd:Id)+":"+(r+parseFloat(h))+"px;"),a&&(E+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=E,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],hc(g,0,i,v),g},hc=function(e,t,n,i){var s={display:"block"},r=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+r+$o]=1,s["border"+a+$o]=0,s[n.p]=t+"px",Pe.set(e,s)},rt=[],Wh={},Qa,pm=function(){return xn()-mi>34&&(Qa||(Qa=requestAnimationFrame(gs)))},co=function(){(!Pn||!Pn.isPressed||Pn.startX>Rt.clientWidth)&&(ct.cache++,Pn?Qa||(Qa=requestAnimationFrame(gs)):gs(),mi||zr("scrollStart"),mi=xn())},Zu=function(){$_=dt.innerWidth,j_=dt.innerHeight},Ea=function(){ct.cache++,!vn&&!Y_&&!Nt.fullscreenElement&&!Nt.webkitFullscreenElement&&(!Hh||$_!==dt.innerWidth||Math.abs(dt.innerHeight-j_)>dt.innerHeight*.25)&&Pc.restart(!0)},Br={},QT=[],i0=function o(){return rn(ht,"scrollEnd",o)||yr(!0)},zr=function(e){return Br[e]&&Br[e].map(function(t){return t()})||QT},$n=[],s0=function(e){for(var t=0;t<$n.length;t+=5)(!e||$n[t+4]&&$n[t+4].query===e)&&($n[t].style.cssText=$n[t+1],$n[t].getBBox&&$n[t].setAttribute("transform",$n[t+2]||""),$n[t+3].uncache=1)},Od=function(e,t){var n;for(Ln=0;Ln<rt.length;Ln++)n=rt[Ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Lc=!0,t&&s0(t),t||zr("revert")},r0=function(e,t){ct.cache++,(t||!Fn)&&ct.forEach(function(n){return Un(n)&&n.cacheID++&&(n.rec=0)}),Kn(e)&&(dt.history.scrollRestoration=Pd=e)},Fn,Rr=0,mm,eA=function(){if(mm!==Rr){var e=mm=Rr;requestAnimationFrame(function(){return e===Rr&&yr(!0)})}},o0=function(){Rt.appendChild(Ro),Ld=!Pn&&Ro.offsetHeight||dt.innerHeight,Rt.removeChild(Ro)},gm=function(e){return Ja(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},yr=function(e,t){if(mi&&!e&&!Lc){on(ht,"scrollEnd",i0);return}o0(),Fn=ht.isRefreshing=!0,ct.forEach(function(i){return Un(i)&&++i.cacheID&&(i.rec=i())});var n=zr("refreshInit");q_&&ht.sort(),t||Od(),ct.forEach(function(i){Un(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),rt.slice(0).forEach(function(i){return i.refresh()}),Lc=!1,rt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",r=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-r),i.refresh()}}),Gh=1,gm(!0),rt.forEach(function(i){var s=Vi(i.scroller,i._dir),r=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(r||a)&&i.setPositions(a?s-1:i.start,r?Math.max(a?s:i.start+1,s):i.end,!0)}),gm(!1),Gh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ct.forEach(function(i){Un(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),r0(Pd,1),Pc.pause(),Rr++,Fn=2,gs(2),rt.forEach(function(i){return Un(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Fn=ht.isRefreshing=!1,zr("refresh")},Xh=0,dc=1,Ba,gs=function(e){if(e===2||!Fn&&!Lc){ht.isUpdating=!0,Ba&&Ba.update(0);var t=rt.length,n=xn(),i=n-$u>=50,s=t&&rt[0].scroll();if(dc=Xh>s?-1:1,Fn||(Xh=s),i&&(mi&&!Yc&&n-mi>200&&(mi=0,zr("scrollEnd")),_a=$u,$u=n),dc<0){for(Ln=t;Ln-- >0;)rt[Ln]&&rt[Ln].update(0,i);dc=1}else for(Ln=0;Ln<t;Ln++)rt[Ln]&&rt[Ln].update(0,i);ht.isUpdating=!1}Qa=0},qh=[e0,t0,Id,Fd,li+Oa,li+Ia,li+Ua,li+Na,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],fc=qh.concat([Dr,Cr,"boxSizing","max"+$o,"max"+Nd,"position",li,Xt,Xt+Ua,Xt+Ia,Xt+Oa,Xt+Na]),tA=function(e,t,n){Po(n);var i=e._gsap;if(i.spacerIsNative)Po(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ju=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=qh.length,r=t.style,a=e.style,l;s--;)l=qh[s],r[l]=n[l];r.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(r.display="inline-block"),a[Id]=a[Fd]="auto",r.flexBasis=n.flexBasis||"auto",r.overflow="visible",r.boxSizing="border-box",r[Dr]=Fc(e,Nn)+Zt,r[Cr]=Fc(e,Qt)+Zt,r[Xt]=a[li]=a[t0]=a[e0]="0",Po(i),a[Dr]=a["max"+$o]=n[Dr],a[Cr]=a["max"+Nd]=n[Cr],a[Xt]=n[Xt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},nA=/([A-Z])/g,Po=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,r;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;i<n;i+=2)r=e[i+1],s=e[i],r?t[s]=r:t[s]&&t.removeProperty(s.replace(nA,"-$1").toLowerCase())}},Yl=function(e){for(var t=fc.length,n=e.style,i=[],s=0;s<t;s++)i.push(fc[s],n[fc[s]]);return i.t=e,i},iA=function(e,t,n){for(var i=[],s=e.length,r=n?8:0,a;r<s;r+=2)a=e[r],i.push(a,a in t?t[a]:e[r+1]);return i.t=e.t,i},pc={left:0,top:0},_m=function(e,t,n,i,s,r,a,l,c,u,d,h,f,g){Un(e)&&(e=e(l)),Kn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?uc("0"+e.substr(3),n):0));var _=f?f.time():0,p,m,v;if(f&&f.seek(0),isNaN(e)||(e=+e),ya(e))f&&(e=Pe.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),a&&hc(a,n,i,!0);else{Un(t)&&(t=t(l));var x=(e||"0").split(" "),E,w,S,b;v=Bn(t,l)||Rt,E=ds(v)||{},(!E||!E.left&&!E.top)&&ci(v).display==="none"&&(b=v.style.display,v.style.display="block",E=ds(v),b?v.style.display=b:v.style.removeProperty("display")),w=uc(x[0],E[i.d]),S=uc(x[1]||"0",n),e=E[i.p]-c[i.p]-u+w+s-S,a&&hc(a,S,i,n-S<20||a._isStart&&S>20),n-=n-S}if(g&&(l[g]=e||-.001,e<0&&(e=0)),r){var D=e+n,y=r._isStart;p="scroll"+i.d2,hc(r,D,i,y&&D>20||!y&&(d?Math.max(Rt[p],wi[p]):r.parentNode[p])<=D+1),d&&(c=ds(a),d&&(r.style[i.op.p]=c[i.op.p]-i.op.m-r._offset+Zt))}return f&&v&&(p=ds(v),f.seek(h),m=ds(v),f._caScrollDist=p[i.p]-m[i.p],e=e/f._caScrollDist*h),f&&f.seek(_),f?e:Math.round(e)},sA=/(webkit|moz|length|cssText|inset)/i,vm=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,r,a;if(t===Rt){e._stOrig=s.cssText,a=ci(e);for(r in a)!+r&&!sA.test(r)&&a[r]&&typeof s[r]=="string"&&r!=="0"&&(s[r]=a[r]);s.top=n,s.left=i}else s.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},a0=function(e,t,n){var i=t,s=i;return function(r){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(r=a,n&&n()),s=i,i=r,r}},jl=function(e,t,n){var i={};i[t.p]="+="+n,Pe.set(e,i)},xm=function(e,t){var n=Js(e,t),i="_scroll"+t.p2,s=function r(a,l,c,u,d){var h=r.tween,f=l.onComplete,g={};c=c||n();var _=a0(n,c,function(){h.kill(),r.tween=0});return d=u&&d||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){ct.cache++,r.tween&&gs()},l.onComplete=function(){r.tween=0,f&&f.call(h)},h=r.tween=Pe.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},on(e,"wheel",n.wheelHandler),ht.isTouch&&on(e,"touchmove",n.wheelHandler),s},ht=function(){function o(t,n){po||o.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Vh(this),this.init(t,n)}var e=o.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!va){this.update=this.refresh=this.kill=Ni;return}n=dm(Kn(n)||ya(n)||n.nodeType?{trigger:n}:n,Xl);var s=n,r=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,v=s.onSnapComplete,x=s.once,E=s.snap,w=s.pinReparent,S=s.pinSpacer,b=s.containerAnimation,D=s.fastScrollEnd,y=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Nn:Qt,U=!d&&d!==0,R=Bn(n.scroller||dt),N=Pe.core.getCache(R),T=Or(R),L=("pinType"in n?n.pinType:Ys(R,"pinType")||T&&"fixed")==="fixed",P=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=U&&n.toggleActions.split(" "),V="markers"in n?n.markers:Xl.markers,G=T?0:parseFloat(ci(R)["border"+M.p2+$o])||0,I=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(I)},$=jT(R,T,M),j=$T(R,T),ee=0,he=0,ye=0,ge=Js(R,M),ae,te,ve,Se,q,He,_e,Ce,Me,K,Ve,O,C,X,ie,se,le,be,xe,fe,Ie,We,ne,lt,Be,$e,Ne,we,B,ue,Le,re,oe,z,ce,pe,Ge,ze,Ze;if(I._startClamp=I._endClamp=!1,I._dir=M,p*=45,I.scroller=R,I.scroll=b?b.time.bind(b):ge,Se=ge(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(q_=1,n.refreshPriority===-9999&&(Ba=I)),N.tweenScroll=N.tweenScroll||{top:xm(R,Qt),left:xm(R,Nn)},I.tweenTo=ae=N.tweenScroll[M.p],I.scrubDuration=function(de){oe=ya(de)&&de,oe?re?re.duration(de):re=Pe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:oe,paused:!0,onComplete:function(){return m&&m(I)}}):(re&&re.progress(1).kill(),re=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(d),ue=0,l||(l=i.vars.id)),E&&((!mr(E)||E.push)&&(E={snapTo:E}),"scrollBehavior"in Rt.style&&Pe.set(T?[Rt,wi]:R,{scrollBehavior:"auto"}),ct.forEach(function(de){return Un(de)&&de.target===(T?Nt.scrollingElement||wi:R)&&(de.smooth=!1)}),ve=Un(E.snapTo)?E.snapTo:E.snapTo==="labels"?ZT(i):E.snapTo==="labelsDirectional"?JT(i):E.directional!==!1?function(de,qe){return Ud(E.snapTo)(de,xn()-he<500?0:qe.direction)}:Pe.utils.snap(E.snapTo),z=E.duration||{min:.1,max:2},z=mr(z)?Fa(z.min,z.max):Fa(z,z),ce=Pe.delayedCall(E.delay||oe/2||.1,function(){var de=ge(),qe=xn()-he<500,Xe=ae.tween;if((qe||Math.abs(I.getVelocity())<10)&&!Xe&&!Yc&&ee!==de){var Qe=(de-He)/X,It=i&&!U?i.totalProgress():Qe,st=qe?0:(It-Le)/(xn()-_a)*1e3||0,bt=Pe.utils.clamp(-Qe,1-Qe,lo(st/2)*st/.185),$t=Qe+(E.inertia===!1?0:bt),At,St,gt=E,qn=gt.onStart,F=gt.onInterrupt,W=gt.onComplete;if(At=ve($t,I),ya(At)||(At=$t),St=Math.round(He+At*X),de<=_e&&de>=He&&St!==de){if(Xe&&!Xe._initted&&Xe.data<=lo(St-de))return;E.inertia===!1&&(bt=At-Qe),ae(St,{duration:z(lo(Math.max(lo($t-It),lo(At-It))*.185/st/.05||0)),ease:E.ease||"power3",data:lo(St-de),onInterrupt:function(){return ce.restart(!0)&&F&&F(I)},onComplete:function(){I.update(),ee=ge(),i&&(re?re.resetTo("totalProgress",At,i._tTime/i._tDur):i.progress(At)),ue=Le=i&&!U?i.totalProgress():I.progress,v&&v(I),W&&W(I)}},de,bt*X,St-de-bt*X),qn&&qn(I,ae.tween)}}else I.isActive&&ee!==de&&ce.restart(!0)}).pause()),l&&(Wh[l]=I),h=I.trigger=Bn(h||f!==!0&&f),Ze=h&&h._gsap&&h._gsap.stRevert,Ze&&(Ze=Ze(I)),f=f===!0?h:Bn(f),Kn(a)&&(a={targets:h,className:a}),f&&(g===!1||g===li||(g=!g&&f.parentNode&&f.parentNode.style&&ci(f.parentNode).display==="flex"?!1:Xt),I.pin=f,te=Pe.core.getCache(f),te.spacer?ie=te.pinState:(S&&(S=Bn(S),S&&!S.nodeType&&(S=S.current||S.nativeElement),te.spacerIsNative=!!S,S&&(te.spacerState=Yl(S))),te.spacer=be=S||Nt.createElement("div"),be.classList.add("pin-spacer"),l&&be.classList.add("pin-spacer-"+l),te.pinState=ie=Yl(f)),n.force3D!==!1&&Pe.set(f,{force3D:!0}),I.spacer=be=te.spacer,B=ci(f),lt=B[g+M.os2],fe=Pe.getProperty(f),Ie=Pe.quickSetter(f,M.a,Zt),Ju(f,be,B),le=Yl(f)),V){O=mr(V)?dm(V,fm):fm,K=ql("scroller-start",l,R,M,O,0),Ve=ql("scroller-end",l,R,M,O,0,K),xe=K["offset"+M.op.d2];var nt=Bn(Ys(R,"content")||R);Ce=this.markerStart=ql("start",l,nt,M,O,xe,0,b),Me=this.markerEnd=ql("end",l,nt,M,O,xe,0,b),b&&(ze=Pe.quickSetter([Ce,Me],M.a,Zt)),!L&&!(qi.length&&Ys(R,"fixedMarkers")===!0)&&(KT(T?Rt:R),Pe.set([K,Ve],{force3D:!0}),$e=Pe.quickSetter(K,M.a,Zt),we=Pe.quickSetter(Ve,M.a,Zt))}if(b){var Re=b.vars.onUpdate,Ae=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){I.update(0,0,1),Re&&Re.apply(b,Ae||[])})}if(I.previous=function(){return rt[rt.indexOf(I)-1]},I.next=function(){return rt[rt.indexOf(I)+1]},I.revert=function(de,qe){if(!qe)return I.kill(!0);var Xe=de!==!1||!I.enabled,Qe=vn;Xe!==I.isReverted&&(Xe&&(pe=Math.max(ge(),I.scroll.rec||0),ye=I.progress,Ge=i&&i.progress()),Ce&&[Ce,Me,K,Ve].forEach(function(It){return It.style.display=Xe?"none":"block"}),Xe&&(vn=I,I.update(Xe)),f&&(!w||!I.isActive)&&(Xe?tA(f,be,ie):Ju(f,be,ci(f),Be)),Xe||I.update(Xe),vn=Qe,I.isReverted=Xe)},I.refresh=function(de,qe,Xe,Qe){if(!((vn||!I.enabled)&&!qe)){if(f&&de&&mi){on(o,"scrollEnd",i0);return}!Fn&&Q&&Q(I),vn=I,ae.tween&&!Xe&&(ae.tween.kill(),ae.tween=0),re&&re.pause(),_&&i&&i.revert({kill:!1}).invalidate(),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var It=$(),st=j(),bt=b?b.duration():Vi(R,M),$t=X<=.01,At=0,St=Qe||0,gt=mr(Xe)?Xe.end:n.end,qn=n.endTrigger||h,F=mr(Xe)?Xe.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),W=I.pinnedContainer=n.pinnedContainer&&Bn(n.pinnedContainer,I),J=h&&Math.max(0,rt.indexOf(I))||0,Z=J,Y,me,Ue,Ye,Oe,ke,je,et,Pt,Kt,_t,Tn,xt;for(V&&mr(Xe)&&(Tn=Pe.getProperty(K,M.p),xt=Pe.getProperty(Ve,M.p));Z--;)ke=rt[Z],ke.end||ke.refresh(0,1)||(vn=I),je=ke.pin,je&&(je===h||je===f||je===W)&&!ke.isReverted&&(Kt||(Kt=[]),Kt.unshift(ke),ke.revert(!0,!0)),ke!==rt[Z]&&(J--,Z--);for(Un(F)&&(F=F(I)),F=lm(F,"start",I),He=_m(F,h,It,M,ge(),Ce,K,I,st,G,L,bt,b,I._startClamp&&"_startClamp")||(f?-.001:0),Un(gt)&&(gt=gt(I)),Kn(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(Kn(F)?F.split(" ")[0]:"")+gt:(At=uc(gt.substr(2),It),gt=Kn(F)?F:(b?Pe.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,He):He)+At,qn=h)),gt=lm(gt,"end",I),_e=Math.max(He,_m(gt||(qn?"100% 0":bt),qn,It,M,ge()+At,Me,Ve,I,st,G,L,bt,b,I._endClamp&&"_endClamp"))||-.001,At=0,Z=J;Z--;)ke=rt[Z],je=ke.pin,je&&ke.start-ke._pinPush<=He&&!b&&ke.end>0&&(Y=ke.end-(I._startClamp?Math.max(0,ke.start):ke.start),(je===h&&ke.start-ke._pinPush<He||je===W)&&isNaN(F)&&(At+=Y*(1-ke.progress)),je===f&&(St+=Y));if(He+=At,_e+=At,I._startClamp&&(I._startClamp+=At),I._endClamp&&!Fn&&(I._endClamp=_e||-.001,_e=Math.min(_e,Vi(R,M))),X=_e-He||(He-=.01)&&.001,$t&&(ye=Pe.utils.clamp(0,1,Pe.utils.normalize(He,_e,pe))),I._pinPush=St,Ce&&At&&(Y={},Y[M.a]="+="+At,W&&(Y[M.p]="-="+ge()),Pe.set([Ce,Me],Y)),f&&!(Gh&&I.end>=Vi(R,M)))Y=ci(f),Ye=M===Qt,Ue=ge(),We=parseFloat(fe(M.a))+St,!bt&&_e>1&&(_t=(T?Nt.scrollingElement||wi:R).style,_t={style:_t,value:_t["overflow"+M.a.toUpperCase()]},T&&ci(Rt)["overflow"+M.a.toUpperCase()]!=="scroll"&&(_t.style["overflow"+M.a.toUpperCase()]="scroll")),Ju(f,be,Y),le=Yl(f),me=ds(f,!0),et=L&&Js(R,Ye?Nn:Qt)(),g?(Be=[g+M.os2,X+St+Zt],Be.t=be,Z=g===Xt?Fc(f,M)+X+St:0,Z&&(Be.push(M.d,Z+Zt),be.style.flexBasis!=="auto"&&(be.style.flexBasis=Z+Zt)),Po(Be),W&&rt.forEach(function(tt){tt.pin===W&&tt.vars.pinSpacing!==!1&&(tt._subPinOffset=!0)}),L&&ge(pe)):(Z=Fc(f,M),Z&&be.style.flexBasis!=="auto"&&(be.style.flexBasis=Z+Zt)),L&&(Oe={top:me.top+(Ye?Ue-He:et)+Zt,left:me.left+(Ye?et:Ue-He)+Zt,boxSizing:"border-box",position:"fixed"},Oe[Dr]=Oe["max"+$o]=Math.ceil(me.width)+Zt,Oe[Cr]=Oe["max"+Nd]=Math.ceil(me.height)+Zt,Oe[li]=Oe[li+Ua]=Oe[li+Ia]=Oe[li+Oa]=Oe[li+Na]="0",Oe[Xt]=Y[Xt],Oe[Xt+Ua]=Y[Xt+Ua],Oe[Xt+Ia]=Y[Xt+Ia],Oe[Xt+Oa]=Y[Xt+Oa],Oe[Xt+Na]=Y[Xt+Na],se=iA(ie,Oe,w),Fn&&ge(0)),i?(Pt=i._initted,Yu(1),i.render(i.duration(),!0,!0),ne=fe(M.a)-We+X+St,Ne=Math.abs(X-ne)>1,L&&Ne&&se.splice(se.length-2,2),i.render(0,!0,!0),Pt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Yu(0)):ne=X,_t&&(_t.value?_t.style["overflow"+M.a.toUpperCase()]=_t.value:_t.style.removeProperty("overflow-"+M.a));else if(h&&ge()&&!b)for(me=h.parentNode;me&&me!==Rt;)me._pinOffset&&(He-=me._pinOffset,_e-=me._pinOffset),me=me.parentNode;Kt&&Kt.forEach(function(tt){return tt.revert(!1,!0)}),I.start=He,I.end=_e,Se=q=Fn?pe:ge(),!b&&!Fn&&(Se<pe&&ge(pe),I.scroll.rec=0),I.revert(!1,!0),he=xn(),ce&&(ee=-1,ce.restart(!0)),vn=0,i&&U&&(i._initted||Ge)&&i.progress()!==Ge&&i.progress(Ge||0,!0).render(i.time(),!0,!0),($t||ye!==I.progress||b||_)&&(i&&!U&&i.totalProgress(b&&He<-.001&&!ye?Pe.utils.normalize(He,_e,0):ye,!0),I.progress=$t||(Se-He)/X===ye?0:ye),f&&g&&(be._pinOffset=Math.round(I.progress*ne)),re&&re.invalidate(),isNaN(Tn)||(Tn-=Pe.getProperty(K,M.p),xt-=Pe.getProperty(Ve,M.p),jl(K,M,Tn),jl(Ce,M,Tn-(Qe||0)),jl(Ve,M,xt),jl(Me,M,xt-(Qe||0))),$t&&!Fn&&I.update(),u&&!Fn&&!C&&(C=!0,u(I),C=!1)}},I.getVelocity=function(){return(ge()-q)/(xn()-_a)*1e3||0},I.endAnimation=function(){ua(I.callbackAnimation),i&&(re?re.progress(1):i.paused()?U||ua(i,I.direction<0,1):ua(i,i.reversed()))},I.labelToScroll=function(de){return i&&i.labels&&(He||I.refresh()||He)+i.labels[de]/i.duration()*X||0},I.getTrailing=function(de){var qe=rt.indexOf(I),Xe=I.direction>0?rt.slice(0,qe).reverse():rt.slice(qe+1);return(Kn(de)?Xe.filter(function(Qe){return Qe.vars.preventOverlaps===de}):Xe).filter(function(Qe){return I.direction>0?Qe.end<=He:Qe.start>=_e})},I.update=function(de,qe,Xe){if(!(b&&!Xe&&!de)){var Qe=Fn===!0?pe:I.scroll(),It=de?0:(Qe-He)/X,st=It<0?0:It>1?1:It||0,bt=I.progress,$t,At,St,gt,qn,F,W,J;if(qe&&(q=Se,Se=b?ge():Qe,E&&(Le=ue,ue=i&&!U?i.totalProgress():st)),p&&f&&!vn&&!Hl&&mi&&(!st&&He<Qe+(Qe-q)/(xn()-_a)*p?st=1e-4:st===1&&_e>Qe+(Qe-q)/(xn()-_a)*p&&(st=.9999)),st!==bt&&I.enabled){if($t=I.isActive=!!st&&st<1,At=!!bt&&bt<1,F=$t!==At,qn=F||!!st!=!!bt,I.direction=st>bt?1:-1,I.progress=st,qn&&!vn&&(St=st&&!bt?0:st===1?1:bt===1?2:3,U&&(gt=!F&&k[St+1]!=="none"&&k[St+1]||k[St],J=i&&(gt==="complete"||gt==="reset"||gt in i))),y&&(F||J)&&(J||d||!i)&&(Un(y)?y(I):I.getTrailing(y).forEach(function(Ue){return Ue.endAnimation()})),U||(re&&!vn&&!Hl?(re._dp._time-re._start!==re._time&&re.render(re._dp._time-re._start),re.resetTo?re.resetTo("totalProgress",st,i._tTime/i._tDur):(re.vars.totalProgress=st,re.invalidate().restart())):i&&i.totalProgress(st,!!(vn&&(he||de)))),f){if(de&&g&&(be.style[g+M.os2]=lt),!L)Ie(xa(We+ne*st));else if(qn){if(W=!de&&st>bt&&_e+1>Qe&&Qe+1>=Vi(R,M),w)if(!de&&($t||W)){var Z=ds(f,!0),Y=Qe-He;vm(f,Rt,Z.top+(M===Qt?Y:0)+Zt,Z.left+(M===Qt?0:Y)+Zt)}else vm(f,be);Po($t||W?se:le),Ne&&st<1&&$t||Ie(We+(st===1&&!W?ne:0))}}E&&!ae.tween&&!vn&&!Hl&&ce.restart(!0),a&&(F||x&&st&&(st<1||!ju))&&Ja(a.targets).forEach(function(Ue){return Ue.classList[$t||x?"add":"remove"](a.className)}),r&&!U&&!de&&r(I),qn&&!vn?(U&&(J&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),r&&r(I)),(F||!ju)&&(c&&F&&Ku(I,c),P[St]&&Ku(I,P[St]),x&&(st===1?I.kill(!1,1):P[St]=0),F||(St=st===1?1:3,P[St]&&Ku(I,P[St]))),D&&!$t&&Math.abs(I.getVelocity())>(ya(D)?D:2500)&&(ua(I.callbackAnimation),re?re.progress(1):ua(i,gt==="reverse"?1:!st,1))):U&&r&&!vn&&r(I)}if(we){var me=b?Qe/b.duration()*(b._caScrollDist||0):Qe;$e(me+(K._isFlipped?1:0)),we(me)}ze&&ze(-Qe/b.duration()*(b._caScrollDist||0))}},I.enable=function(de,qe){I.enabled||(I.enabled=!0,on(R,"resize",Ea),T||on(R,"scroll",co),Q&&on(o,"refreshInit",Q),de!==!1&&(I.progress=ye=0,Se=q=ee=ge()),qe!==!1&&I.refresh())},I.getTween=function(de){return de&&ae?ae.tween:re},I.setPositions=function(de,qe,Xe,Qe){if(b){var It=b.scrollTrigger,st=b.duration(),bt=It.end-It.start;de=It.start+bt*de/st,qe=It.start+bt*qe/st}I.refresh(!1,!1,{start:cm(de,Xe&&!!I._startClamp),end:cm(qe,Xe&&!!I._endClamp)},Qe),I.update()},I.adjustPinSpacing=function(de){if(Be&&de){var qe=Be.indexOf(M.d)+1;Be[qe]=parseFloat(Be[qe])+de+Zt,Be[1]=parseFloat(Be[1])+de+Zt,Po(Be)}},I.disable=function(de,qe){if(I.enabled&&(de!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,qe||re&&re.pause(),pe=0,te&&(te.uncache=1),Q&&rn(o,"refreshInit",Q),ce&&(ce.pause(),ae.tween&&ae.tween.kill()&&(ae.tween=0)),!T)){for(var Xe=rt.length;Xe--;)if(rt[Xe].scroller===R&&rt[Xe]!==I)return;rn(R,"resize",Ea),T||rn(R,"scroll",co)}},I.kill=function(de,qe){I.disable(de,qe),re&&!qe&&re.kill(),l&&delete Wh[l];var Xe=rt.indexOf(I);Xe>=0&&rt.splice(Xe,1),Xe===Ln&&dc>0&&Ln--,Xe=0,rt.forEach(function(Qe){return Qe.scroller===I.scroller&&(Xe=1)}),Xe||Fn||(I.scroll.rec=0),i&&(i.scrollTrigger=null,de&&i.revert({kill:!1}),qe||i.kill()),Ce&&[Ce,Me,K,Ve].forEach(function(Qe){return Qe.parentNode&&Qe.parentNode.removeChild(Qe)}),Ba===I&&(Ba=0),f&&(te&&(te.uncache=1),Xe=0,rt.forEach(function(Qe){return Qe.pin===f&&Xe++}),Xe||(te.spacer=0)),n.onKill&&n.onKill(I)},rt.push(I),I.enable(!1,!1),Ze&&Ze(I),i&&i.add&&!X){var Fe=I.update;I.update=function(){I.update=Fe,He||_e||I.refresh()},Pe.delayedCall(.01,I.update),X=.01,He=_e=0}else I.refresh();f&&eA()},o.register=function(n){return po||(Pe=n||Z_(),K_()&&window.document&&o.enable(),po=va),po},o.defaults=function(n){if(n)for(var i in n)Xl[i]=n[i];return Xl},o.disable=function(n,i){va=0,rt.forEach(function(r){return r[i?"kill":"disable"](n)}),rn(dt,"wheel",co),rn(Nt,"scroll",co),clearInterval(kl),rn(Nt,"touchcancel",Ni),rn(Rt,"touchstart",Ni),Gl(rn,Nt,"pointerdown,touchstart,mousedown",um),Gl(rn,Nt,"pointerup,touchend,mouseup",hm),Pc.kill(),Vl(rn);for(var s=0;s<ct.length;s+=3)Wl(rn,ct[s],ct[s+1]),Wl(rn,ct[s],ct[s+2])},o.enable=function(){if(dt=window,Nt=document,wi=Nt.documentElement,Rt=Nt.body,Pe&&(Ja=Pe.utils.toArray,Fa=Pe.utils.clamp,Vh=Pe.core.context||Ni,Yu=Pe.core.suppressOverwrites||Ni,Pd=dt.history.scrollRestoration||"auto",Xh=dt.pageYOffset,Pe.core.globals("ScrollTrigger",o),Rt)){va=1,Ro=document.createElement("div"),Ro.style.height="100vh",Ro.style.position="absolute",o0(),YT(),Gt.register(Pe),o.isTouch=Gt.isTouch,Cs=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Hh=Gt.isTouch===1,on(dt,"wheel",co),X_=[dt,Nt,wi,Rt],Pe.matchMedia?(o.matchMedia=function(l){var c=Pe.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Pe.addEventListener("matchMediaInit",function(){return Od()}),Pe.addEventListener("matchMediaRevert",function(){return s0()}),Pe.addEventListener("matchMedia",function(){yr(0,1),zr("matchMedia")}),Pe.matchMedia("(orientation: portrait)",function(){return Zu(),Zu})):console.warn("Requires GSAP 3.11.0 or later"),Zu(),on(Nt,"scroll",co);var n=Rt.style,i=n.borderTopStyle,s=Pe.core.Animation.prototype,r,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",r=ds(Rt),Qt.m=Math.round(r.top+Qt.sc())||0,Nn.m=Math.round(r.left+Nn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),kl=setInterval(pm,250),Pe.delayedCall(.5,function(){return Hl=0}),on(Nt,"touchcancel",Ni),on(Rt,"touchstart",Ni),Gl(on,Nt,"pointerdown,touchstart,mousedown",um),Gl(on,Nt,"pointerup,touchend,mouseup",hm),kh=Pe.utils.checkPrefix("transform"),fc.push(kh),po=xn(),Pc=Pe.delayedCall(.2,yr).pause(),mo=[Nt,"visibilitychange",function(){var l=dt.innerWidth,c=dt.innerHeight;Nt.hidden?(om=l,am=c):(om!==l||am!==c)&&Ea()},Nt,"DOMContentLoaded",yr,dt,"load",yr,dt,"resize",Ea],Vl(on),rt.forEach(function(l){return l.enable(0,1)}),a=0;a<ct.length;a+=3)Wl(rn,ct[a],ct[a+1]),Wl(rn,ct[a],ct[a+2])}},o.config=function(n){"limitCallbacks"in n&&(ju=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(kl)||(kl=i)&&setInterval(pm,i),"ignoreMobileResize"in n&&(Hh=o.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Vl(rn)||Vl(on,n.autoRefreshEvents||"none"),Y_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(n,i){var s=Bn(n),r=ct.indexOf(s),a=Or(s);~r&&ct.splice(r,a?6:2),i&&(a?qi.unshift(dt,i,Rt,i,wi,i):qi.unshift(s,i))},o.clearMatchMedia=function(n){rt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},o.isInViewport=function(n,i,s){var r=(Kn(n)?Bn(n):n).getBoundingClientRect(),a=r[s?Dr:Cr]*i||0;return s?r.right-a>0&&r.left+a<dt.innerWidth:r.bottom-a>0&&r.top+a<dt.innerHeight},o.positionInViewport=function(n,i,s){Kn(n)&&(n=Bn(n));var r=n.getBoundingClientRect(),a=r[s?Dr:Cr],l=i==null?a/2:i in Ic?Ic[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(r.left+l)/dt.innerWidth:(r.top+l)/dt.innerHeight},o.killAll=function(n){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Br.killAll||[];Br={},i.forEach(function(s){return s()})}},o}();ht.version="3.12.5";ht.saveStyles=function(o){return o?Ja(o).forEach(function(e){if(e&&e.style){var t=$n.indexOf(e);t>=0&&$n.splice(t,5),$n.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),Vh())}}):$n};ht.revert=function(o,e){return Od(!o,e)};ht.create=function(o,e){return new ht(o,e)};ht.refresh=function(o){return o?Ea():(po||ht.register())&&yr(!0)};ht.update=function(o){return++ct.cache&&gs(o===!0?2:0)};ht.clearScrollMemory=r0;ht.maxScroll=function(o,e){return Vi(o,e?Nn:Qt)};ht.getScrollFunc=function(o,e){return Js(Bn(o),e?Nn:Qt)};ht.getById=function(o){return Wh[o]};ht.getAll=function(){return rt.filter(function(o){return o.vars.id!=="ScrollSmoother"})};ht.isScrolling=function(){return!!mi};ht.snapDirectional=Ud;ht.addEventListener=function(o,e){var t=Br[o]||(Br[o]=[]);~t.indexOf(e)||t.push(e)};ht.removeEventListener=function(o,e){var t=Br[o],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ht.batch=function(o,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,r=function(c,u){var d=[],h=[],f=Pe.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),s<=d.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Un(e[a])&&a!=="onRefreshInit"?r(a,e[a]):e[a];return Un(s)&&(s=s(),on(ht,"refresh",function(){return s=e.batchMax()})),Ja(o).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ht.create(c))}),t};var ym=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Qu=function o(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===wi&&o(Rt,t)},$l={auto:1,scroll:1},rA=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,r=s._gsap||Pe.core.getCache(s),a=xn(),l;if(!r._isScrollT||a-r._isScrollT>2e3){for(;s&&s!==Rt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!($l[(l=ci(s)).overflowY]||$l[l.overflowX]));)s=s.parentNode;r._isScroll=s&&s!==n&&!Or(s)&&($l[(l=ci(s)).overflowY]||$l[l.overflowX]),r._isScrollT=a}(r._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},l0=function(e,t,n,i){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&rA,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&on(Nt,Gt.eventTypes[0],Mm,!1,!0)},onDisable:function(){return rn(Nt,Gt.eventTypes[0],Mm,!0)}})},oA=/(input|label|select|textarea)/i,Em,Mm=function(e){var t=oA.test(e.target.tagName);(t||Em)&&(e._gsapAllow=!0,Em=t)},aA=function(e){mr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,r=t.onRelease,a,l,c=Bn(e.target)||wi,u=Pe.core.globals().ScrollSmoother,d=u&&u.get(),h=Cs&&(e.content&&Bn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=Js(c,Qt),g=Js(c,Nn),_=1,p=(Gt.isTouch&&dt.visualViewport?dt.visualViewport.scale*dt.visualViewport.width:dt.outerWidth)/dt.innerWidth,m=0,v=Un(i)?function(){return i(a)}:function(){return i||2.8},x,E,w=l0(c,e.type,!0,s),S=function(){return E=!1},b=Ni,D=Ni,y=function(){l=Vi(c,Qt),D=Fa(Cs?1:0,l),n&&(b=Fa(0,Vi(c,Nn))),x=Rr},M=function(){h._gsap.y=xa(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},U=function(){if(E){requestAnimationFrame(S);var V=xa(a.deltaY/2),G=D(f.v-V);if(h&&G!==f.v+f.offset){f.offset=G-f.v;var I=xa((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",h._gsap.y=I+"px",f.cacheID=ct.cache,gs()}return!0}f.offset&&M(),E=!0},R,N,T,L,P=function(){y(),R.isActive()&&R.vars.scrollY>l&&(f()>l?R.progress(1)&&f(l):R.resetTo("scrollY",l))};return h&&Pe.set(h,{y:"+=0"}),e.ignoreCheck=function(k){return Cs&&k.type==="touchmove"&&U()||_>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){E=!1;var k=_;_=xa((dt.visualViewport&&dt.visualViewport.scale||1)/p),R.pause(),k!==_&&Qu(c,_>1.01?!0:n?!1:"x"),N=g(),T=f(),y(),x=Rr},e.onRelease=e.onGestureStart=function(k,V){if(f.offset&&M(),!V)L.restart(!0);else{ct.cache++;var G=v(),I,Q;n&&(I=g(),Q=I+G*.05*-k.velocityX/.227,G*=ym(g,I,Q,Vi(c,Nn)),R.vars.scrollX=b(Q)),I=f(),Q=I+G*.05*-k.velocityY/.227,G*=ym(f,I,Q,Vi(c,Qt)),R.vars.scrollY=D(Q),R.invalidate().duration(G).play(.01),(Cs&&R.vars.scrollY>=l||I>=l-1)&&Pe.to({},{onUpdate:P,duration:G})}r&&r(k)},e.onWheel=function(){R._ts&&R.pause(),xn()-m>1e3&&(x=0,m=xn())},e.onChange=function(k,V,G,I,Q){if(Rr!==x&&y(),V&&n&&g(b(I[2]===V?N+(k.startX-k.x):g()+V-I[1])),G){f.offset&&M();var $=Q[2]===G,j=$?T+k.startY-k.y:f()+G-Q[1],ee=D(j);$&&j!==ee&&(T+=ee-j),f(ee)}(G||V)&&gs()},e.onEnable=function(){Qu(c,n?!1:"x"),ht.addEventListener("refresh",P),on(dt,"resize",P),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){Qu(c,!0),rn(dt,"resize",P),ht.removeEventListener("refresh",P),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Gt(e),a.iOS=Cs,Cs&&!f()&&f(1),Cs&&Pe.ticker.add(Ni),L=a._dc,R=Pe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:a0(f,f(),function(){return R.pause()})},onUpdate:gs,onComplete:L.vars.onComplete}),a};ht.sort=function(o){return rt.sort(o||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};ht.observe=function(o){return new Gt(o)};ht.normalizeScroll=function(o){if(typeof o>"u")return Pn;if(o===!0&&Pn)return Pn.enable();if(o===!1){Pn&&Pn.kill(),Pn=o;return}var e=o instanceof Gt?o:aA(o);return Pn&&Pn.target===e.target&&Pn.kill(),Or(e.target)&&(Pn=e),e};ht.core={_getVelocityProp:zh,_inputObserver:l0,_scrollers:ct,_proxies:qi,bridge:{ss:function(){mi||zr("scrollStart"),mi=xn()},ref:function(){return vn}}};Z_()&&Pe.registerPlugin(ht);/*!
 * strings: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var lA=/(?:^\s+|\s+$)/g,cA=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function c0(o){var e=o.nodeType,t="";if(e===1||e===9||e===11){if(typeof o.textContent=="string")return o.textContent;for(o=o.firstChild;o;o=o.nextSibling)t+=c0(o)}else if(e===3||e===4)return o.nodeValue;return t}function Yh(o,e,t,n){for(var i=o.firstChild,s=[],r;i;)i.nodeType===3?(r=(i.nodeValue+"").replace(/^\n+/g,""),n||(r=r.replace(/\s+/g," ")),s.push.apply(s,u0(r,e,t,n))):(i.nodeName+"").toLowerCase()==="br"?s[s.length-1]+="<br>":s.push(i.outerHTML),i=i.nextSibling;for(r=s.length;r--;)s[r]==="&"&&s.splice(r,1,"&amp;");return s}function u0(o,e,t,n){if(o+="",t&&(o=o.trim?o.trim():o.replace(lA,"")),e&&e!=="")return o.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(e);for(var i=[],s=o.length,r=0,a,l;r<s;r++)l=o.charAt(r),(l.charCodeAt(0)>=55296&&l.charCodeAt(0)<=56319||o.charCodeAt(r+1)>=65024&&o.charCodeAt(r+1)<=65039)&&(a=((o.substr(r,12).split(cA)||[])[1]||"").length||2,l=o.substr(r,a),i.emoji=1,r+=a-1),i.push(l===">"?"&gt;":l==="<"?"&lt;":n&&l===" "&&(o.charAt(r-1)===" "||o.charAt(r+1)===" ")?"&nbsp;":l);return i}/*!
 * TextPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ma,Kl,uA=function(){return Ma||typeof window<"u"&&(Ma=window.gsap)&&Ma.registerPlugin&&Ma},il={version:"3.12.5",name:"text",init:function(e,t,n){typeof t!="object"&&(t={value:t});var i=e.nodeName.toUpperCase(),s=this,r=t,a=r.newClass,l=r.oldClass,c=r.preserveSpaces,u=r.rtl,d=s.delimiter=t.delimiter||"",h=s.fillChar=t.fillChar||(t.padSpace?"&nbsp;":""),f,g,_,p,m,v,x,E;if(s.svg=e.getBBox&&(i==="TEXT"||i==="TSPAN"),!("innerHTML"in e)&&!s.svg)return!1;if(s.target=e,!("value"in t)){s.text=s.original=[""];return}for(_=Yh(e,d,!1,c),Kl||(Kl=document.createElement("div")),Kl.innerHTML=t.value,g=Yh(Kl,d,!1,c),s.from=n._from,(s.from||u)&&!(u&&s.from)&&(i=_,_=g,g=i),s.hasClass=!!(a||l),s.newClass=u?l:a,s.oldClass=u?a:l,i=_.length-g.length,f=i<0?_:g,i<0&&(i=-i);--i>-1;)f.push(h);if(t.type==="diff"){for(p=0,m=[],v=[],x="",i=0;i<g.length;i++)E=g[i],E===_[i]?x+=E:(m[p]=x+E,v[p++]=x+_[i],x="");g=m,_=v,x&&(g.push(x),_.push(x))}t.speed&&n.duration(Math.min(.05/t.speed*f.length,t.maxDuration||9999)),s.rtl=u,s.original=_,s.text=g,s._props.push("text")},render:function(e,t){e>1?e=1:e<0&&(e=0),t.from&&(e=1-e);var n=t.text,i=t.hasClass,s=t.newClass,r=t.oldClass,a=t.delimiter,l=t.target,c=t.fillChar,u=t.original,d=t.rtl,h=n.length,f=(d?1-e:e)*h+.5|0,g,_,p;i&&e?(g=s&&f,_=r&&f!==h,p=(g?"<span class='"+s+"'>":"")+n.slice(0,f).join(a)+(g?"</span>":"")+(_?"<span class='"+r+"'>":"")+a+u.slice(f).join(a)+(_?"</span>":"")):p=n.slice(0,f).join(a)+a+u.slice(f).join(a),t.svg?l.textContent=p:l.innerHTML=c==="&nbsp;"&&~p.indexOf("  ")?p.split("  ").join("&nbsp;&nbsp;"):p}};il.splitInnerHTML=Yh;il.emojiSafeSplit=u0;il.getText=c0;uA()&&Ma.registerPlugin(il);/*!
 * CSSRulePlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ks,jh,mc,Nc,h0=function(){return typeof window<"u"},d0=function(){return ks||h0()&&(ks=window.gsap)&&ks.registerPlugin&&ks},bm=function(){return jh||(f0(),Nc||console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")),jh},f0=function(e){ks=e||d0(),h0()&&(mc=document),ks&&(Nc=ks.plugins.css,Nc&&(jh=1))},p0={version:"3.12.5",name:"cssRule",init:function(e,t,n,i,s){if(!bm()||typeof e.cssText>"u")return!1;var r=e._gsProxy=e._gsProxy||mc.createElement("div");this.ss=e,this.style=r.style,r.style.cssText=e.cssText,Nc.prototype.init.call(this,r,t,n,i,s)},render:function(e,t){for(var n=t._pt,i=t.style,s=t.ss,r;n;)n.r(e,n.d),n=n._next;for(r=i.length;--r>-1;)s[i[r]]=i[i[r]]},getRule:function(e){bm();var t=mc.all?"rules":"cssRules",n=mc.styleSheets,i=n.length,s=e.charAt(0)===":",r,a,l,c;for(e=(s?"":",")+e.split("::").join(":").toLowerCase()+",",s&&(c=[]);i--;){try{if(a=n[i][t],!a)continue;r=a.length}catch(u){console.warn(u);continue}for(;--r>-1;)if(l=a[r],l.selectorText&&(","+l.selectorText.split("::").join(":").toLowerCase()+",").indexOf(e)!==-1)if(s)c.push(l.style);else return l.style}return c},register:f0};d0()&&ks.registerPlugin(p0);class Di{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new A);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new A);const n=this.elements,i=e.x,s=e.y,r=e.z;return t.x=n[0]*i+n[1]*s+n[2]*r,t.y=n[3]*i+n[4]*s+n[5]*r,t.z=n[6]*i+n[7]*s+n[8]*r,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Di);const n=this.elements,i=e.elements,s=t.elements,r=n[0],a=n[1],l=n[2],c=n[3],u=n[4],d=n[5],h=n[6],f=n[7],g=n[8],_=i[0],p=i[1],m=i[2],v=i[3],x=i[4],E=i[5],w=i[6],S=i[7],b=i[8];return s[0]=r*_+a*v+l*w,s[1]=r*p+a*x+l*S,s[2]=r*m+a*E+l*b,s[3]=c*_+u*v+d*w,s[4]=c*p+u*x+d*S,s[5]=c*m+u*E+d*b,s[6]=h*_+f*v+g*w,s[7]=h*p+f*x+g*S,s[8]=h*m+f*E+g*b,t}scale(e,t){t===void 0&&(t=new Di);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new A);const n=3,i=4,s=[];let r,a;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)s[r+i*a]=this.elements[r+3*a];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let l=3;const c=l;let u;const d=4;let h;do{if(r=c-l,s[r+i*r]===0){for(a=r+1;a<c;a++)if(s[r+i*a]!==0){u=d;do h=d-u,s[h+i*r]+=s[h+i*a];while(--u);break}}if(s[r+i*r]!==0)for(a=r+1;a<c;a++){const f=s[r+i*a]/s[r+i*r];u=d;do h=d-u,s[h+i*a]=h<=r?0:s[h+i*a]-s[h+i*r]*f;while(--u)}}while(--l);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Di);const t=3,n=6,i=hA;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const u=n;let d;do{if(s=l-a,i[s+n*s]===0){for(r=s+1;r<l;r++)if(i[s+n*r]!==0){c=u;do d=u-c,i[d+n*s]+=i[d+n*r];while(--c);break}}if(i[s+n*s]!==0)for(r=s+1;r<l;r++){const h=i[s+n*r]/i[s+n*s];c=u;do d=u-c,i[d+n*r]=d<=s?0:i[d+n*r]-i[d+n*s]*h;while(--c)}}while(--a);s=2;do{r=s-1;do{const h=i[s+n*r]/i[s+n*s];c=n;do d=n-c,i[d+n*r]=i[d+n*r]-i[d+n*s]*h;while(--c)}while(r--)}while(--s);s=2;do{const h=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*h;while(--c)}while(s--);s=2;do{r=2;do{if(d=i[t+r+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,r,d)}while(r--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,r=t+t,a=n+n,l=i+i,c=t*r,u=t*a,d=t*l,h=n*a,f=n*l,g=i*l,_=s*r,p=s*a,m=s*l,v=this.elements;return v[3*0+0]=1-(h+g),v[3*0+1]=u-m,v[3*0+2]=d+p,v[3*1+0]=u+m,v[3*1+1]=1-(c+g),v[3*1+2]=f-_,v[3*2+0]=d-p,v[3*2+1]=f+_,v[3*2+2]=1-(c+h),this}transpose(e){e===void 0&&(e=new Di);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const hA=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class A{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new A);const n=e.x,i=e.y,s=e.z,r=this.x,a=this.y,l=this.z;return t.x=a*s-l*i,t.y=l*n-r*s,t.z=r*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new A(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new A(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Di([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new A);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(r-n)*(r-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z;return(s-t)*(s-t)+(r-n)*(r-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new A);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new A),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new A),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new A),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=dA,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=fA;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,e)):(r.set(0,1,0),i.cross(r,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,r=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=r+(e.z-r)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Sm),Sm.almostEquals(e,t)}clone(){return new A(this.x,this.y,this.z)}}A.ZERO=new A(0,0,0);A.UNIT_X=new A(1,0,0);A.UNIT_Y=new A(0,1,0);A.UNIT_Z=new A(0,0,1);const dA=new A,fA=new A,Sm=new A;class ii{constructor(e){e===void 0&&(e={}),this.lowerBound=new A,this.upperBound=new A,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,r=this.upperBound,a=n;s.copy(e[0]),a&&a.vmult(s,s),r.copy(s);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,wm),c=wm),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return t&&(t.vadd(s,s),t.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new ii().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,r=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return r&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,r,a,l){const c=this.lowerBound,u=this.upperBound;e.copy(c),t.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),i.set(c.x,u.y,u.z),s.set(u.x,c.y,u.z),r.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(e,t){const n=Tm,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,s,r,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=Tm,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,s,r,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,r=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,h=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(d,h)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(d,h));return!(g<0||f>g)}}const wm=new A,Tm=[new A,new A,new A,new A,new A,new A,new A,new A];class Am{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class m0{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class Bt{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new A),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=pA,i=mA;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Bt);const n=this.x,i=this.y,s=this.z,r=this.w,a=e.x,l=e.y,c=e.z,u=e.w;return t.x=n*u+r*a+i*c-s*l,t.y=i*u+r*l+s*a-n*c,t.z=s*u+r*c+n*l-i*a,t.w=r*u-n*a-i*l-s*c,t}inverse(e){e===void 0&&(e=new Bt);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const r=1/(t*t+n*n+i*i+s*s);return e.x*=r,e.y*=r,e.z*=r,e.w*=r,e}conjugate(e){return e===void 0&&(e=new Bt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new A);const n=e.x,i=e.y,s=e.z,r=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*s-l*i,d=c*i+l*n-r*s,h=c*s+r*i-a*n,f=-r*n-a*i-l*s;return t.x=u*c+f*-r+d*-l-h*-a,t.y=d*c+f*-a+h*-r-u*-l,t.z=h*c+f*-l+u*-a-d*-r,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const r=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const u=r*a+l*c;if(u>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const d=r*r,h=a*a,f=l*l;n=Math.atan2(2*a*c-2*r*l,1-2*h-2*f),i=Math.asin(2*u),s=Math.atan2(2*r*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),r=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=l*r*a+s*c*u,this.y=s*c*a-l*r*u,this.z=s*r*u+l*c*a,this.w=s*r*a-l*c*u):i==="YXZ"?(this.x=l*r*a+s*c*u,this.y=s*c*a-l*r*u,this.z=s*r*u-l*c*a,this.w=s*r*a+l*c*u):i==="ZXY"?(this.x=l*r*a-s*c*u,this.y=s*c*a+l*r*u,this.z=s*r*u+l*c*a,this.w=s*r*a-l*c*u):i==="ZYX"?(this.x=l*r*a-s*c*u,this.y=s*c*a+l*r*u,this.z=s*r*u-l*c*a,this.w=s*r*a+l*c*u):i==="YZX"?(this.x=l*r*a+s*c*u,this.y=s*c*a+l*r*u,this.z=s*r*u-l*c*a,this.w=s*r*a-l*c*u):i==="XZY"&&(this.x=l*r*a-s*c*u,this.y=s*c*a-l*r*u,this.z=s*r*u+l*c*a,this.w=s*r*a+l*c*u),this}clone(){return new Bt(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new Bt);const i=this.x,s=this.y,r=this.z,a=this.w;let l=e.x,c=e.y,u=e.z,d=e.w,h,f,g,_,p;return f=i*l+s*c+r*u+a*d,f<0&&(f=-f,l=-l,c=-c,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),g=Math.sin(h),_=Math.sin((1-t)*h)/g,p=Math.sin(t*h)/g):(_=1-t,p=t),n.x=_*i+p*l,n.y=_*s+p*c,n.z=_*r+p*u,n.w=_*a+p*d,n}integrate(e,t,n,i){i===void 0&&(i=new Bt);const s=e.x*n.x,r=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,u=this.z,d=this.w,h=t*.5;return i.x+=h*(s*d+r*u-a*c),i.y+=h*(r*d+a*l-s*u),i.z+=h*(a*d+s*c-r*l),i.w+=h*(-s*l-r*c-a*u),i}}const pA=new A,mA=new A,gA={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Te{constructor(e){e===void 0&&(e={}),this.id=Te.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Te.idCounter=0;Te.types=gA;class pt{constructor(e){e===void 0&&(e={}),this.position=new A,this.quaternion=new Bt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return pt.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return pt.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new A),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new A),n.vsub(e,i),t.conjugate(Dm),Dm.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new A),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new A),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new A),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const Dm=new Bt;class Lo extends Te{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=e;super({type:Te.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new A;for(let s=0;s!==e.length;s++){const r=e[s],a=r.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[r[l]].vsub(t[r[c]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new A;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];Lo.computeNormal(i,s,r,t)}static computeNormal(e,t,n,i){const s=new A,r=new A;t.vsub(e,r),n.vsub(t,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,r,a,l,c){const u=new A;let d=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),s.vmult(u,u);const _=u.dot(r);_>h&&(h=_,d=g)}const f=[];for(let g=0;g<n.faces[d].length;g++){const _=n.vertices[n.faces[d][g]],p=new A;p.copy(_),s.vmult(p,p),i.vadd(p,p),f.push(p)}d>=0&&this.clipFaceAgainstHull(r,e,t,f,a,l,c)}findSeparatingAxis(e,t,n,i,s,r,a,l){const c=new A,u=new A,d=new A,h=new A,f=new A,g=new A;let _=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let m=0;m!==p.uniqueAxes.length;m++){n.vmult(p.uniqueAxes[m],c);const v=p.testSepAxis(c,e,t,n,i,s);if(v===!1)return!1;v<_&&(_=v,r.copy(c))}else{const m=a?a.length:p.faces.length;for(let v=0;v<m;v++){const x=a?a[v]:v;c.copy(p.faceNormals[x]),n.vmult(c,c);const E=p.testSepAxis(c,e,t,n,i,s);if(E===!1)return!1;E<_&&(_=E,r.copy(c))}}if(e.uniqueAxes)for(let m=0;m!==e.uniqueAxes.length;m++){s.vmult(e.uniqueAxes[m],u);const v=p.testSepAxis(u,e,t,n,i,s);if(v===!1)return!1;v<_&&(_=v,r.copy(u))}else{const m=l?l.length:e.faces.length;for(let v=0;v<m;v++){const x=l?l[v]:v;u.copy(e.faceNormals[x]),s.vmult(u,u);const E=p.testSepAxis(u,e,t,n,i,s);if(E===!1)return!1;E<_&&(_=E,r.copy(u))}}for(let m=0;m!==p.uniqueEdges.length;m++){n.vmult(p.uniqueEdges[m],h);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],f),h.cross(f,g),!g.almostZero()){g.normalize();const x=p.testSepAxis(g,e,t,n,i,s);if(x===!1)return!1;x<_&&(_=x,r.copy(g))}}return i.vsub(t,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(e,t,n,i,s,r){const a=this;Lo.project(a,e,n,i,eh),Lo.project(t,e,s,r,th);const l=eh[0],c=eh[1],u=th[0],d=th[1];if(l<d||u<c)return!1;const h=l-d,f=u-c;return h<f?h:f}calculateLocalInertia(e,t){const n=new A,i=new A;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*r*2*r+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,r,a){const l=new A,c=new A,u=new A,d=new A,h=new A,f=new A,g=new A,_=new A,p=this,m=[],v=i,x=m;let E=-1,w=Number.MAX_VALUE;for(let M=0;M<p.faces.length;M++){l.copy(p.faceNormals[M]),n.vmult(l,l);const U=l.dot(e);U<w&&(w=U,E=M)}if(E<0)return;const S=p.faces[E];S.connectedFaces=[];for(let M=0;M<p.faces.length;M++)for(let U=0;U<p.faces[M].length;U++)S.indexOf(p.faces[M][U])!==-1&&M!==E&&S.connectedFaces.indexOf(M)===-1&&S.connectedFaces.push(M);const b=S.length;for(let M=0;M<b;M++){const U=p.vertices[S[M]],R=p.vertices[S[(M+1)%b]];U.vsub(R,c),u.copy(c),n.vmult(u,u),t.vadd(u,u),d.copy(this.faceNormals[E]),n.vmult(d,d),t.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(U),n.vmult(f,f),t.vadd(f,f);const N=S.connectedFaces[M];g.copy(this.faceNormals[N]);const T=this.getPlaneConstantOfFace(N);_.copy(g),n.vmult(_,_);const L=T-_.dot(t);for(this.clipFaceAgainstPlane(v,x,_,L);v.length;)v.shift();for(;x.length;)v.push(x.shift())}g.copy(this.faceNormals[E]);const D=this.getPlaneConstantOfFace(E);_.copy(g),n.vmult(_,_);const y=D-_.dot(t);for(let M=0;M<v.length;M++){let U=_.dot(v[M])+y;if(U<=s&&(console.log(`clamped: depth=${U} to minDist=${s}`),U=s),U<=r){const R=v[M];if(U<=1e-6){const N={point:R,normal:_,depth:U};a.push(N)}}}}clipFaceAgainstPlane(e,t,n,i){let s,r;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];s=n.dot(l)+i;for(let u=0;u<a;u++){if(c=e[u],r=n.dot(c)+i,s<0)if(r<0){const d=new A;d.copy(c),t.push(d)}else{const d=new A;l.lerp(c,s/(s-r),d),t.push(d)}else if(r<0){const d=new A;l.lerp(c,s/(s-r),d),t.push(d),t.push(c)}l=c,s=r}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new A);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new A);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let r,a,l,c,u,d,h=new A;for(let f=0;f<s.length;f++){h.copy(s[f]),t.vmult(h,h),e.vadd(h,h);const g=h;(r===void 0||g.x<r)&&(r=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,a,l),i.set(c,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new A);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const r=i[s];t.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];t.vmult(r,r)}}if(e)for(let s=0;s<n;s++){const r=i[s];r.vadd(e,r)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=null,r=new A;this.getAveragePointLocal(r);for(let a=0;a<this.faces.length;a++){let l=i[a];const c=t[n[a][0]],u=new A;e.vsub(c,u);const d=l.dot(u),h=new A;r.vsub(c,h);const f=l.dot(h);if(d<0&&f>0||d>0&&f<0)return!1}return s?1:-1}static project(e,t,n,i,s){const r=e.vertices.length,a=_A;let l=0,c=0;const u=vA,d=e.vertices;u.setZero(),pt.vectorToLocalFrame(n,i,t,a),pt.pointToLocalFrame(n,i,u,u);const h=u.dot(a);c=l=d[0].dot(a);for(let f=1;f<r;f++){const g=d[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=h,l-=h,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const eh=[],th=[];new A;const _A=new A,vA=new A;class Fo extends Te{constructor(e){super({type:Te.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=A,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Lo({vertices:s,faces:r,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new A),Fo.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)As.set(s[r][0],s[r][1],s[r][2]),t.vmult(As,As),e.vadd(As,As),n(As.x,As.y,As.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;Pi[0].set(s.x,s.y,s.z),Pi[1].set(-s.x,s.y,s.z),Pi[2].set(-s.x,-s.y,s.z),Pi[3].set(-s.x,-s.y,-s.z),Pi[4].set(s.x,-s.y,-s.z),Pi[5].set(s.x,s.y,-s.z),Pi[6].set(-s.x,s.y,-s.z),Pi[7].set(s.x,-s.y,s.z);const r=Pi[0];t.vmult(r,r),e.vadd(r,r),i.copy(r),n.copy(r);for(let a=1;a<8;a++){const l=Pi[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,u=l.y,d=l.z;c>i.x&&(i.x=c),u>i.y&&(i.y=u),d>i.z&&(i.z=d),c<n.x&&(n.x=c),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const As=new A,Pi=[new A,new A,new A,new A,new A,new A,new A,new A],Bd={DYNAMIC:1,STATIC:2,KINEMATIC:4},zd={AWAKE:0,SLEEPY:1,SLEEPING:2};class De extends m0{constructor(e){e===void 0&&(e={}),super(),this.id=De.idCounter++,this.index=-1,this.world=null,this.vlambda=new A,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new A,this.previousPosition=new A,this.interpolatedPosition=new A,this.initPosition=new A,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new A,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new A,this.force=new A;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?De.STATIC:De.DYNAMIC,typeof e.type==typeof De.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=De.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new A,this.quaternion=new Bt,this.initQuaternion=new Bt,this.previousQuaternion=new Bt,this.interpolatedQuaternion=new Bt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new A,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new A,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new A,this.invInertia=new A,this.invInertiaWorld=new Di,this.invMassSolve=0,this.invInertiaSolve=new A,this.invInertiaWorldSolve=new Di,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new A(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new A(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new ii,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new A,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=De.AWAKE,this.wakeUpAfterNarrowphase=!1,e===De.SLEEPING&&this.dispatchEvent(De.wakeupEvent)}sleep(){this.sleepState=De.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===De.AWAKE&&n<i?(this.sleepState=De.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(De.sleepyEvent)):t===De.SLEEPY&&n>i?this.wakeUp():t===De.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(De.sleepEvent))}}updateSolveMassProperties(){this.sleepState===De.SLEEPING||this.type===De.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new A),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new A),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new A),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new A),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new A,s=new Bt;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const r=e[s];r.updateBoundingSphereRadius();const a=t[s].length(),l=r.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=xA,r=yA,a=this.quaternion,l=this.aabb,c=EA;for(let u=0;u!==i;u++){const d=e[u];a.vmult(t[u],s),s.vadd(this.position,s),a.mult(n[u],r),d.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=MA,i=bA;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new A),this.type!==De.DYNAMIC)return;this.sleepState===De.SLEEPING&&this.wakeUp();const n=wA;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new A),this.type!==De.DYNAMIC)return;const n=TA,i=AA;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===De.DYNAMIC&&(this.sleepState===De.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new A),this.type!==De.DYNAMIC)return;this.sleepState===De.SLEEPING&&this.wakeUp();const n=t,i=DA;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=CA;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new A),this.type!==De.DYNAMIC)return;const n=RA,i=PA;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=LA;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Fo.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new A;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===De.DYNAMIC||this.type===De.KINEMATIC)||this.sleepState===De.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*e;i.x+=a.x*f*h.x,i.y+=a.y*f*h.y,i.z+=a.z*f*h.z;const g=d.elements,_=this.angularFactor,p=l.x*_.x,m=l.y*_.y,v=l.z*_.z;s.x+=e*(g[0]*p+g[1]*m+g[2]*v),s.y+=e*(g[3]*p+g[4]*m+g[5]*v),s.z+=e*(g[6]*p+g[7]*m+g[8]*v),r.x+=i.x*e,r.y+=i.y*e,r.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}De.idCounter=0;De.COLLIDE_EVENT_NAME="collide";De.DYNAMIC=Bd.DYNAMIC;De.STATIC=Bd.STATIC;De.KINEMATIC=Bd.KINEMATIC;De.AWAKE=zd.AWAKE;De.SLEEPY=zd.SLEEPY;De.SLEEPING=zd.SLEEPING;De.wakeupEvent={type:"wakeup"};De.sleepyEvent={type:"sleepy"};De.sleepEvent={type:"sleep"};const xA=new A,yA=new Bt,EA=new ii,MA=new Di,bA=new Di,SA=new Di,wA=new A,TA=new A,AA=new A,DA=new A,CA=new A,RA=new A,PA=new A,LA=new A;class g0{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&De.STATIC||e.sleepState===De.SLEEPING)&&(t.type&De.STATIC||t.sleepState===De.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=FA;t.position.vsub(e.position,s);const r=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<r&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=IA,i=NA,s=UA,r=e.length;for(let a=0;a!==r;a++)i[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==r;a++){const l=i[a].id,c=s[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(s[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new A;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const FA=new A;new A;new Bt;new A;const IA={keys:[]},NA=[],UA=[];new A;new A;new A;class OA extends g0{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let r,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)r=i[l],a=i[c],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class Uc{constructor(){this.rayFromWorld=new A,this.rayToWorld=new A,this.hitNormalWorld=new A,this.hitPointWorld=new A,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,r,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=a}}let _0,v0,x0,y0,E0,M0,b0;const kd={CLOSEST:1,ANY:2,ALL:4};_0=Te.types.SPHERE;v0=Te.types.PLANE;x0=Te.types.BOX;y0=Te.types.CYLINDER;E0=Te.types.CONVEXPOLYHEDRON;M0=Te.types.HEIGHTFIELD;b0=Te.types.TRIMESH;class qt{get[_0](){return this._intersectSphere}get[v0](){return this._intersectPlane}get[x0](){return this._intersectBox}get[y0](){return this._intersectConvex}get[E0](){return this._intersectConvex}get[M0](){return this._intersectHeightfield}get[b0](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new A),t===void 0&&(t=new A),this.from=e.clone(),this.to=t.clone(),this.direction=new A,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=qt.ANY,this.result=new Uc,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||qt.ANY,this.result=t.result||new Uc,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Cm),nh.length=0,e.broadphase.aabbQuery(e,Cm,nh),this.intersectBodies(nh),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=BA,s=zA;for(let r=0,a=e.shapes.length;r<a;r++){const l=e.shapes[r];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[r],s),e.quaternion.vmult(e.shapeOffsets[r],i),i.vadd(e.position,i),this.intersectShape(l,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(QA(s,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const r=this.from,a=this.to,l=this.direction,c=new A(0,0,1);t.vmult(c,c);const u=new A;r.vsub(n,u);const d=u.dot(c);a.vsub(n,u);const h=u.dot(c);if(d*h>0||r.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new A,_=new A,p=new A;r.vsub(n,g);const m=-c.dot(g)/f;l.scale(m,_),r.vadd(_,p),this.reportIntersection(c,p,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const r=kA;r.from.copy(this.from),r.to.copy(this.to),pt.pointToLocalFrame(n,t,r.from,r.from),pt.pointToLocalFrame(n,t,r.to,r.to),r.updateDirection();const a=HA;let l,c,u,d;l=c=0,u=d=e.data.length-1;const h=new ii;r.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<u;f++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,g,h),!!h.overlapsRay(r)){if(e.getConvexTrianglePillar(f,g,!1),pt.pointToWorldFrame(n,t,e.pillarOffset,Zl),this._intersectConvex(e.pillarConvex,t,Zl,i,s,Rm),this.result.shouldStop)return;e.getConvexTrianglePillar(f,g,!0),pt.pointToWorldFrame(n,t,e.pillarOffset,Zl),this._intersectConvex(e.pillarConvex,t,Zl,i,s,Rm)}}}_intersectSphere(e,t,n,i,s){const r=this.from,a=this.to,l=e.radius,c=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,u=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,h=u**2-4*c*d,f=VA,g=GA;if(!(h<0))if(h===0)r.lerp(a,h,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{const _=(-u-Math.sqrt(h))/(2*c),p=(-u+Math.sqrt(h))/(2*c);if(_>=0&&_<=1&&(r.lerp(a,_,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(r.lerp(a,p,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(e,t,n,i,s,r){const a=WA,l=Pm,c=r&&r.faceList||null,u=e.faces,d=e.vertices,h=e.faceNormals,f=this.direction,g=this.from,_=this.to,p=g.distanceTo(_),m=c?c.length:u.length,v=this.result;for(let x=0;!v.shouldStop&&x<m;x++){const E=c?c[x]:x,w=u[E],S=h[E],b=t,D=n;l.copy(d[w[0]]),b.vmult(l,l),l.vadd(D,l),l.vsub(g,l),b.vmult(S,a);const y=f.dot(a);if(Math.abs(y)<this.precision)continue;const M=a.dot(l)/y;if(!(M<0)){f.scale(M,On),On.vadd(g,On),yi.copy(d[w[0]]),b.vmult(yi,yi),D.vadd(yi,yi);for(let U=1;!v.shouldStop&&U<w.length-1;U++){Li.copy(d[w[U]]),Fi.copy(d[w[U+1]]),b.vmult(Li,Li),b.vmult(Fi,Fi),D.vadd(Li,Li),D.vadd(Fi,Fi);const R=On.distanceTo(g);!(qt.pointInTriangle(On,yi,Li,Fi)||qt.pointInTriangle(On,Li,yi,Fi))||R>p||this.reportIntersection(a,On,s,i,E)}}}}_intersectTrimesh(e,t,n,i,s,r){const a=XA,l=ZA,c=JA,u=Pm,d=qA,h=YA,f=jA,g=KA,_=$A,p=e.indices;e.vertices;const m=this.from,v=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(t),pt.vectorToLocalFrame(n,t,x,d),pt.pointToLocalFrame(n,t,m,h),pt.pointToLocalFrame(n,t,v,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,f.vsub(h,d),d.normalize();const E=h.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let w=0,S=l.length;!this.result.shouldStop&&w!==S;w++){const b=l[w];e.getNormal(b,a),e.getVertex(p[b*3],yi),yi.vsub(h,u);const D=d.dot(a),y=a.dot(u)/D;if(y<0)continue;d.scale(y,On),On.vadd(h,On),e.getVertex(p[b*3+1],Li),e.getVertex(p[b*3+2],Fi);const M=On.distanceSquared(h);!(qt.pointInTriangle(On,Li,yi,Fi)||qt.pointInTriangle(On,yi,Li,Fi))||M>E||(pt.vectorToWorldFrame(t,a,_),pt.pointToWorldFrame(n,t,On,g),this.reportIntersection(_,g,s,i,b))}l.length=0}reportIntersection(e,t,n,i,s){const r=this.from,a=this.to,l=r.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case qt.ALL:this.hasHit=!0,c.set(r,a,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case qt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,a,e,t,n,i,l));break;case qt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,a,e,t,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,vr),n.vsub(t,ha),e.vsub(t,ih);const s=vr.dot(vr),r=vr.dot(ha),a=vr.dot(ih),l=ha.dot(ha),c=ha.dot(ih);let u,d;return(u=l*a-r*c)>=0&&(d=s*c-r*a)>=0&&u+d<s*l-r*r}}qt.CLOSEST=kd.CLOSEST;qt.ANY=kd.ANY;qt.ALL=kd.ALL;const Cm=new ii,nh=[],ha=new A,ih=new A,BA=new A,zA=new Bt,On=new A,yi=new A,Li=new A,Fi=new A;new A;new Uc;const Rm={faceList:[0]},Zl=new A,kA=new qt,HA=[],VA=new A,GA=new A,WA=new A;new A;new A;const Pm=new A,XA=new A,qA=new A,YA=new A,jA=new A,$A=new A,KA=new A;new ii;const ZA=[],JA=new pt,vr=new A,Jl=new A;function QA(o,e,t){t.vsub(o,vr);const n=vr.dot(e);return e.scale(n,Jl),Jl.vadd(o,Jl),t.distanceTo(Jl)}class Eo extends g0{static checkBounds(e,t,n){let i,s;n===0?(i=e.position.x,s=t.position.x):n===1?(i=e.position.y,s=t.position.y):n===2&&(i=e.position.z,s=t.position.z);const r=e.boundingRadius,a=t.boundingRadius,l=i+r;return s-a<l}static insertionSortX(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortY(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortZ(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)e[s+1]=e[s];e[s+1]=i}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;const t=this.axisList;this._addBodyHandler=n=>{t.push(n.body)},this._removeBodyHandler=n=>{const i=t.indexOf(n.body);i!==-1&&t.splice(i,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,n){const i=this.axisList,s=i.length,r=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){const c=i[a];for(l=a+1;l<s;l++){const u=i[l];if(this.needBroadphaseCollision(c,u)){if(!Eo.checkBounds(c,u,r))break;this.intersectionTest(c,u,t,n)}}}}sortList(){const e=this.axisList,t=this.axisIndex,n=e.length;for(let i=0;i!==n;i++){const s=e[i];s.aabbNeedsUpdate&&s.updateAABB()}t===0?Eo.insertionSortX(e):t===1?Eo.insertionSortY(e):t===2&&Eo.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,n=0,i=0,s=0,r=0;const a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){const g=a[f],_=g.position.x;e+=_,t+=_*_;const p=g.position.y;n+=p,i+=p*p;const m=g.position.z;s+=m,r+=m*m}const u=t-e*e*c,d=i-n*n*c,h=r-s*s*c;u>d?u>h?this.axisIndex=0:this.axisIndex=2:d>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const r=this.axisList;t.lowerBound[s],t.upperBound[s];for(let a=0;a<r.length;a++){const l=r[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(t)&&n.push(l)}return n}}class eD{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Lm{constructor(){this.spatial=new A,this.rotational=new A}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class sl{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=sl.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Lm,this.jacobianElementB=new Lm,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*e-i*t-r*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return e.spatial.dot(s)+t.spatial.dot(r)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(r,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(r,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,u=i.invMassSolve;return s.scale(c,Fm),a.scale(u,Im),n.invInertiaWorldSolve.vmult(r,Nm),i.invInertiaWorldSolve.vmult(l,Um),e.multiplyVectors(Fm,Nm)+t.multiplyVectors(Im,Um)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+r;return a.vmult(e.rotational,Ql),c+=Ql.dot(e.rotational),l.vmult(t.rotational,Ql),c+=Ql.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=tD;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,r),i.wlambda.addScaledVector(e,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(e,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}sl.idCounter=0;const Fm=new A,Im=new A,Nm=new A,Um=new A,Ql=new A,tD=new A;class nD extends sl{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new A,this.rj=new A,this.ni=new A}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,a=this.rj,l=iD,c=sD,u=i.velocity,d=i.angularVelocity;i.force,i.torque;const h=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=rD,_=this.jacobianElementA,p=this.jacobianElementB,m=this.ni;r.cross(m,l),a.cross(m,c),m.negate(_.spatial),l.negate(_.rotational),p.spatial.copy(m),p.rotational.copy(c),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(r,g);const v=m.dot(g),x=this.restitution+1,E=x*h.dot(m)-x*u.dot(m)+f.dot(c)-d.dot(l),w=this.computeGiMf();return-v*t-E*n-e*w}getImpactVelocityAlongNormal(){const e=oD,t=aD,n=lD,i=cD,s=uD;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const iD=new A,sD=new A,rD=new A,oD=new A,aD=new A,lD=new A,cD=new A,uD=new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;class Om extends sl{constructor(e,t,n){super(e,t,-n,n),this.ri=new A,this.rj=new A,this.t=new A}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=hD,r=dD,a=this.t;n.cross(a,s),i.cross(a,r);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(r);const u=this.computeGW(),d=this.computeGiMf();return-u*t-e*d}}const hD=new A,dD=new A;class rl{constructor(e,t,n){n=eD.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=rl.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}rl.idCounter=0;class ol{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=ol.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}ol.idCounter=0;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new qt;new A;new A;new A;new A(1,0,0),new A(0,1,0),new A(0,0,1);new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;class Bm extends Te{constructor(e){if(super({type:Te.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new A);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,r=["x","y","z"];for(let a=0;a<r.length;a++){const l=r[a];n[l]=e[l]-s,i[l]=e[l]+s}}}new A;new A;new A;new A;new A;new A;new A;new A;new A;class sh extends Lo{constructor(e,t,n,i){if(e===void 0&&(e=1),t===void 0&&(t=1),n===void 0&&(n=1),i===void 0&&(i=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(t<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,r=[],a=[],l=[],c=[],u=[],d=Math.cos,h=Math.sin;r.push(new A(-t*h(0),-n*.5,t*d(0))),c.push(0),r.push(new A(-e*h(0),n*.5,e*d(0))),u.push(1);for(let g=0;g<s;g++){const _=2*Math.PI/s*(g+1),p=2*Math.PI/s*(g+.5);g<s-1?(r.push(new A(-t*h(_),-n*.5,t*d(_))),c.push(2*g+2),r.push(new A(-e*h(_),n*.5,e*d(_))),u.push(2*g+3),l.push([2*g,2*g+1,2*g+3,2*g+2])):l.push([2*g,2*g+1,1,0]),(s%2===1||g<s/2)&&a.push(new A(-h(p),0,d(p)))}l.push(c),a.push(new A(0,1,0));const f=[];for(let g=0;g<u.length;g++)f.push(u[u.length-g-1]);l.push(f),super({vertices:r,faces:l,axes:a}),this.type=Te.types.CYLINDER,this.radiusTop=e,this.radiusBottom=t,this.height=n,this.numSegments=i}}new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new ii;new A;new ii;new A;new A;new A;new A;new A;new A;new A;new ii;new A;new pt;new ii;class fD{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class pD extends fD{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,a=r.length,l=t.bodies,c=l.length,u=e;let d,h,f,g,_,p;if(a!==0)for(let E=0;E!==c;E++)l[E].updateSolveMassProperties();const m=gD,v=_D,x=mD;m.length=a,v.length=a,x.length=a;for(let E=0;E!==a;E++){const w=r[E];x[E]=0,v[E]=w.computeB(u),m[E]=1/w.computeC()}if(a!==0){for(let S=0;S!==c;S++){const b=l[S],D=b.vlambda,y=b.wlambda;D.set(0,0,0),y.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let S=0;S!==a;S++){const b=r[S];d=v[S],h=m[S],p=x[S],_=b.computeGWlambda(),f=h*(d-_-b.eps*p),p+f<b.minForce?f=b.minForce-p:p+f>b.maxForce&&(f=b.maxForce-p),x[S]+=f,g+=f>0?f:-f,b.addToWlambda(f)}if(g*g<s)break}for(let S=0;S!==c;S++){const b=l[S],D=b.velocity,y=b.angularVelocity;b.vlambda.vmul(b.linearFactor,b.vlambda),D.vadd(b.vlambda,D),b.wlambda.vmul(b.angularFactor,b.wlambda),y.vadd(b.wlambda,y)}let E=r.length;const w=1/u;for(;E--;)r[E].multiplier=x[E]*w}return n}}const mD=[],gD=[],_D=[];De.STATIC;class vD{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class xD extends vD{constructor(){super(...arguments),this.type=A}constructObject(){return new A}}const Dt={sphereSphere:Te.types.SPHERE,spherePlane:Te.types.SPHERE|Te.types.PLANE,boxBox:Te.types.BOX|Te.types.BOX,sphereBox:Te.types.SPHERE|Te.types.BOX,planeBox:Te.types.PLANE|Te.types.BOX,convexConvex:Te.types.CONVEXPOLYHEDRON,sphereConvex:Te.types.SPHERE|Te.types.CONVEXPOLYHEDRON,planeConvex:Te.types.PLANE|Te.types.CONVEXPOLYHEDRON,boxConvex:Te.types.BOX|Te.types.CONVEXPOLYHEDRON,sphereHeightfield:Te.types.SPHERE|Te.types.HEIGHTFIELD,boxHeightfield:Te.types.BOX|Te.types.HEIGHTFIELD,convexHeightfield:Te.types.CONVEXPOLYHEDRON|Te.types.HEIGHTFIELD,sphereParticle:Te.types.PARTICLE|Te.types.SPHERE,planeParticle:Te.types.PLANE|Te.types.PARTICLE,boxParticle:Te.types.BOX|Te.types.PARTICLE,convexParticle:Te.types.PARTICLE|Te.types.CONVEXPOLYHEDRON,cylinderCylinder:Te.types.CYLINDER,sphereCylinder:Te.types.SPHERE|Te.types.CYLINDER,planeCylinder:Te.types.PLANE|Te.types.CYLINDER,boxCylinder:Te.types.BOX|Te.types.CYLINDER,convexCylinder:Te.types.CONVEXPOLYHEDRON|Te.types.CYLINDER,heightfieldCylinder:Te.types.HEIGHTFIELD|Te.types.CYLINDER,particleCylinder:Te.types.PARTICLE|Te.types.CYLINDER,sphereTrimesh:Te.types.SPHERE|Te.types.TRIMESH,planeTrimesh:Te.types.PLANE|Te.types.TRIMESH};class yD{get[Dt.sphereSphere](){return this.sphereSphere}get[Dt.spherePlane](){return this.spherePlane}get[Dt.boxBox](){return this.boxBox}get[Dt.sphereBox](){return this.sphereBox}get[Dt.planeBox](){return this.planeBox}get[Dt.convexConvex](){return this.convexConvex}get[Dt.sphereConvex](){return this.sphereConvex}get[Dt.planeConvex](){return this.planeConvex}get[Dt.boxConvex](){return this.boxConvex}get[Dt.sphereHeightfield](){return this.sphereHeightfield}get[Dt.boxHeightfield](){return this.boxHeightfield}get[Dt.convexHeightfield](){return this.convexHeightfield}get[Dt.sphereParticle](){return this.sphereParticle}get[Dt.planeParticle](){return this.planeParticle}get[Dt.boxParticle](){return this.boxParticle}get[Dt.convexParticle](){return this.convexParticle}get[Dt.cylinderCylinder](){return this.convexConvex}get[Dt.sphereCylinder](){return this.sphereConvex}get[Dt.planeCylinder](){return this.planeConvex}get[Dt.boxCylinder](){return this.boxConvex}get[Dt.convexCylinder](){return this.convexConvex}get[Dt.heightfieldCylinder](){return this.heightfieldCylinder}get[Dt.particleCylinder](){return this.particleCylinder}get[Dt.sphereTrimesh](){return this.sphereTrimesh}get[Dt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new xD,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new nD(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,u=i.material||t.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=s||n,a.sj=r||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,r=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=s.material||n.material,d=r.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(c=u.friction*d.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,_=g.length?g.pop():new Om(n,i,h*f),p=g.length?g.pop():new Om(n,i,h*f);return _.bi=p.bi=n,_.bj=p.bj=i,_.minForce=p.minForce=-h*f,_.maxForce=p.maxForce=h*f,_.ri.copy(e.ri),_.rj.copy(e.rj),p.ri.copy(e.ri),p.rj.copy(e.rj),e.ni.tangents(_.t,p.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=p.enabled=e.enabled,t.push(_,p),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ur.setZero(),uo.setZero(),ho.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(ur.vadd(t.ni,ur),uo.vadd(t.ri,uo),ho.vadd(t.rj,ho)):(ur.vsub(t.ni,ur),uo.vadd(t.rj,uo),ho.vadd(t.ri,ho));const r=1/e;uo.scale(r,n.ri),ho.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ur.normalize(),ur.tangents(n.t,i.t)}getContacts(e,t,n,i,s,r,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=r;const l=bD,c=SD,u=ED,d=MD;for(let h=0,f=e.length;h!==f;h++){const g=e[h],_=t[h];let p=null;g.material&&_.material&&(p=n.getContactMaterial(g.material,_.material)||null);const m=g.type&De.KINEMATIC&&_.type&De.STATIC||g.type&De.STATIC&&_.type&De.KINEMATIC||g.type&De.KINEMATIC&&_.type&De.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],u),u.vadd(g.position,u);const x=g.shapes[v];for(let E=0;E<_.shapes.length;E++){_.quaternion.mult(_.shapeOrientations[E],c),_.quaternion.vmult(_.shapeOffsets[E],d),d.vadd(_.position,d);const w=_.shapes[E];if(!(x.collisionFilterMask&w.collisionFilterGroup&&w.collisionFilterMask&x.collisionFilterGroup)||u.distanceTo(d)>x.boundingSphereRadius+w.boundingSphereRadius)continue;let S=null;x.material&&w.material&&(S=n.getContactMaterial(x.material,w.material)||null),this.currentContactMaterial=S||p||n.defaultContactMaterial;const b=x.type|w.type,D=this[b];if(D){let y=!1;x.type<w.type?y=D.call(this,x,w,u,d,l,c,g,_,x,w,m):y=D.call(this,w,x,d,u,c,l,_,g,x,w,m),y&&m&&(n.shapeOverlapKeeper.set(x.id,w.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(e,t,n,i,s,r,a,l,c,u,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const h=this.createContactEquation(a,l,e,t,c,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,n,i,s,r,a,l,c,u,d){const h=this.createContactEquation(a,l,e,t,c,u);if(h.ni.set(0,0,1),r.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),n.vsub(i,ec),h.ni.scale(h.ni.dot(ec),zm),ec.vsub(zm,h.rj),-ec.dot(h.ni)<=e.radius){if(d)return!0;const f=h.ri,g=h.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(l.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,n,i,s,r,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,r,a,l,e,t,d)}sphereBox(e,t,n,i,s,r,a,l,c,u,d){const h=this.v3pool,f=KD;n.vsub(i,tc),t.getSideNormals(f,r);const g=e.radius;let _=!1;const p=JD,m=QD,v=e1;let x=null,E=0,w=0,S=0,b=null;for(let P=0,k=f.length;P!==k&&_===!1;P++){const V=YD;V.copy(f[P]);const G=V.length();V.normalize();const I=tc.dot(V);if(I<G+g&&I>0){const Q=jD,$=$D;Q.copy(f[(P+1)%3]),$.copy(f[(P+2)%3]);const j=Q.length(),ee=$.length();Q.normalize(),$.normalize();const he=tc.dot(Q),ye=tc.dot($);if(he<j&&he>-j&&ye<ee&&ye>-ee){const ge=Math.abs(I-G-g);if((b===null||ge<b)&&(b=ge,w=he,S=ye,x=G,p.copy(V),m.copy(Q),v.copy($),E++,d))return!0}}}if(E){_=!0;const P=this.createContactEquation(a,l,e,t,c,u);p.scale(-g,P.ri),P.ni.copy(p),P.ni.negate(P.ni),p.scale(x,p),m.scale(w,m),p.vadd(m,p),v.scale(S,v),p.vadd(v,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),P.rj.vadd(i,P.rj),P.rj.vsub(l.position,P.rj),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult)}let D=h.get();const y=ZD;for(let P=0;P!==2&&!_;P++)for(let k=0;k!==2&&!_;k++)for(let V=0;V!==2&&!_;V++)if(D.set(0,0,0),P?D.vadd(f[0],D):D.vsub(f[0],D),k?D.vadd(f[1],D):D.vsub(f[1],D),V?D.vadd(f[2],D):D.vsub(f[2],D),i.vadd(D,y),y.vsub(n,y),y.lengthSquared()<g*g){if(d)return!0;_=!0;const G=this.createContactEquation(a,l,e,t,c,u);G.ri.copy(y),G.ri.normalize(),G.ni.copy(G.ri),G.ri.scale(g,G.ri),G.rj.copy(D),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),G.rj.vadd(i,G.rj),G.rj.vsub(l.position,G.rj),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}h.release(D),D=null;const M=h.get(),U=h.get(),R=h.get(),N=h.get(),T=h.get(),L=f.length;for(let P=0;P!==L&&!_;P++)for(let k=0;k!==L&&!_;k++)if(P%3!==k%3){f[k].cross(f[P],M),M.normalize(),f[P].vadd(f[k],U),R.copy(n),R.vsub(U,R),R.vsub(i,R);const V=R.dot(M);M.scale(V,N);let G=0;for(;G===P%3||G===k%3;)G++;T.copy(n),T.vsub(N,T),T.vsub(U,T),T.vsub(i,T);const I=Math.abs(V),Q=T.length();if(I<f[G].length()&&Q<g){if(d)return!0;_=!0;const $=this.createContactEquation(a,l,e,t,c,u);U.vadd(N,$.rj),$.rj.copy($.rj),T.negate($.ni),$.ni.normalize(),$.ri.copy($.rj),$.ri.vadd(i,$.ri),$.ri.vsub(n,$.ri),$.ri.normalize(),$.ri.scale(g,$.ri),$.ri.vadd(n,$.ri),$.ri.vsub(a.position,$.ri),$.rj.vadd(i,$.rj),$.rj.vsub(l.position,$.rj),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}}h.release(M,U,R,N,T)}planeBox(e,t,n,i,s,r,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,r,a,l,e,t,d)}convexConvex(e,t,n,i,s,r,a,l,c,u,d,h,f){const g=m1;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,r,g,h,f)){const _=[],p=g1;e.clipAgainstHull(n,s,t,i,r,g,-100,100,_);let m=0;for(let v=0;v!==_.length;v++){if(d)return!0;const x=this.createContactEquation(a,l,e,t,c,u),E=x.ri,w=x.rj;g.negate(x.ni),_[v].normal.negate(p),p.scale(_[v].depth,p),_[v].point.vadd(p,E),w.copy(_[v].point),E.vsub(n,E),w.vsub(i,w),E.vadd(n,E),E.vsub(a.position,E),w.vadd(i,w),w.vsub(l.position,w),this.result.push(x),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(e,t,n,i,s,r,a,l,c,u,d){const h=this.v3pool;n.vsub(i,t1);const f=t.faceNormals,g=t.faces,_=t.vertices,p=e.radius;let m=!1;for(let v=0;v!==_.length;v++){const x=_[v],E=r1;r.vmult(x,E),i.vadd(E,E);const w=s1;if(E.vsub(n,w),w.lengthSquared()<p*p){if(d)return!0;m=!0;const S=this.createContactEquation(a,l,e,t,c,u);S.ri.copy(w),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(p,S.ri),E.vsub(i,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(a.position,S.ri),S.rj.vadd(i,S.rj),S.rj.vsub(l.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let v=0,x=g.length;v!==x&&m===!1;v++){const E=f[v],w=g[v],S=o1;r.vmult(E,S);const b=a1;r.vmult(_[w[0]],b),b.vadd(i,b);const D=l1;S.scale(-p,D),n.vadd(D,D);const y=c1;D.vsub(b,y);const M=y.dot(S),U=u1;if(n.vsub(b,U),M<0&&U.dot(S)>0){const R=[];for(let N=0,T=w.length;N!==T;N++){const L=h.get();r.vmult(_[w[N]],L),i.vadd(L,L),R.push(L)}if(qD(R,S,n)){if(d)return!0;m=!0;const N=this.createContactEquation(a,l,e,t,c,u);S.scale(-p,N.ri),S.negate(N.ni);const T=h.get();S.scale(-M,T);const L=h.get();S.scale(-p,L),n.vsub(i,N.rj),N.rj.vadd(L,N.rj),N.rj.vadd(T,N.rj),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),h.release(T),h.release(L),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let P=0,k=R.length;P!==k;P++)h.release(R[P]);return}else for(let N=0;N!==w.length;N++){const T=h.get(),L=h.get();r.vmult(_[w[(N+1)%w.length]],T),r.vmult(_[w[(N+2)%w.length]],L),i.vadd(T,T),i.vadd(L,L);const P=n1;L.vsub(T,P);const k=i1;P.unit(k);const V=h.get(),G=h.get();n.vsub(T,G);const I=G.dot(k);k.scale(I,V),V.vadd(T,V);const Q=h.get();if(V.vsub(n,Q),I>0&&I*I<P.lengthSquared()&&Q.lengthSquared()<p*p){if(d)return!0;const $=this.createContactEquation(a,l,e,t,c,u);V.vsub(i,$.rj),V.vsub(n,$.ni),$.ni.normalize(),$.ni.scale(p,$.ri),$.rj.vadd(i,$.rj),$.rj.vsub(l.position,$.rj),$.ri.vadd(n,$.ri),$.ri.vsub(a.position,$.ri),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult);for(let j=0,ee=R.length;j!==ee;j++)h.release(R[j]);h.release(T),h.release(L),h.release(V),h.release(Q),h.release(G);return}h.release(T),h.release(L),h.release(V),h.release(Q),h.release(G)}for(let N=0,T=R.length;N!==T;N++)h.release(R[N])}}}planeConvex(e,t,n,i,s,r,a,l,c,u,d){const h=h1,f=d1;f.set(0,0,1),s.vmult(f,f);let g=0;const _=f1;for(let p=0;p!==t.vertices.length;p++)if(h.copy(t.vertices[p]),r.vmult(h,h),i.vadd(h,h),h.vsub(n,_),f.dot(_)<=0){if(d)return!0;const v=this.createContactEquation(a,l,e,t,c,u),x=p1;f.scale(f.dot(_),x),h.vsub(x,x),x.vsub(n,v.ri),v.ni.copy(f),h.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,r,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,r,a,l,e,t,d)}sphereHeightfield(e,t,n,i,s,r,a,l,c,u,d){const h=t.data,f=e.radius,g=t.elementSize,_=D1,p=A1;pt.pointToLocalFrame(i,r,n,p);let m=Math.floor((p.x-f)/g)-1,v=Math.ceil((p.x+f)/g)+1,x=Math.floor((p.y-f)/g)-1,E=Math.ceil((p.y+f)/g)+1;if(v<0||E<0||m>h.length||x>h[0].length)return;m<0&&(m=0),v<0&&(v=0),x<0&&(x=0),E<0&&(E=0),m>=h.length&&(m=h.length-1),v>=h.length&&(v=h.length-1),E>=h[0].length&&(E=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const w=[];t.getRectMinMax(m,x,v,E,w);const S=w[0],b=w[1];if(p.z-f>b||p.z+f<S)return;const D=this.result;for(let y=m;y<v;y++)for(let M=x;M<E;M++){const U=D.length;let R=!1;if(t.getConvexTrianglePillar(y,M,!1),pt.pointToWorldFrame(i,r,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(R=this.sphereConvex(e,t.pillarConvex,n,_,s,r,a,l,e,t,d)),d&&R||(t.getConvexTrianglePillar(y,M,!0),pt.pointToWorldFrame(i,r,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(R=this.sphereConvex(e,t.pillarConvex,n,_,s,r,a,l,e,t,d)),d&&R))return!0;if(D.length-U>2)return}}boxHeightfield(e,t,n,i,s,r,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,r,a,l,e,t,d)}convexHeightfield(e,t,n,i,s,r,a,l,c,u,d){const h=t.data,f=t.elementSize,g=e.boundingSphereRadius,_=w1,p=T1,m=S1;pt.pointToLocalFrame(i,r,n,m);let v=Math.floor((m.x-g)/f)-1,x=Math.ceil((m.x+g)/f)+1,E=Math.floor((m.y-g)/f)-1,w=Math.ceil((m.y+g)/f)+1;if(x<0||w<0||v>h.length||E>h[0].length)return;v<0&&(v=0),x<0&&(x=0),E<0&&(E=0),w<0&&(w=0),v>=h.length&&(v=h.length-1),x>=h.length&&(x=h.length-1),w>=h[0].length&&(w=h[0].length-1),E>=h[0].length&&(E=h[0].length-1);const S=[];t.getRectMinMax(v,E,x,w,S);const b=S[0],D=S[1];if(!(m.z-g>D||m.z+g<b))for(let y=v;y<x;y++)for(let M=E;M<w;M++){let U=!1;if(t.getConvexTrianglePillar(y,M,!1),pt.pointToWorldFrame(i,r,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.convexConvex(e,t.pillarConvex,n,_,s,r,a,l,null,null,d,p,null)),d&&U||(t.getConvexTrianglePillar(y,M,!0),pt.pointToWorldFrame(i,r,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.convexConvex(e,t.pillarConvex,n,_,s,r,a,l,null,null,d,p,null)),d&&U))return!0}}sphereParticle(e,t,n,i,s,r,a,l,c,u,d){const h=y1;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=e.radius*e.radius){if(d)return!0;const g=this.createContactEquation(l,a,t,e,c,u);h.normalize(),g.rj.copy(h),g.rj.scale(e.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,r,a,l,c,u,d){const h=_1;h.set(0,0,1),a.quaternion.vmult(h,h);const f=v1;if(i.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;const _=this.createContactEquation(l,a,t,e,c,u);_.ni.copy(h),_.ni.negate(_.ni),_.ri.set(0,0,0);const p=x1;h.scale(h.dot(i),p),i.vsub(p,p),_.rj.copy(p),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(e,t,n,i,s,r,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,r,a,l,e,t,d)}convexParticle(e,t,n,i,s,r,a,l,c,u,d){let h=-1;const f=M1,g=b1;let _=null;const p=E1;if(p.copy(i),p.vsub(n,p),s.conjugate(km),km.vmult(p,p),e.pointIsInside(p)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let m=0,v=e.faces.length;m!==v;m++){const x=[e.worldVertices[e.faces[m][0]]],E=e.worldFaceNormals[m];i.vsub(x[0],Hm);const w=-E.dot(Hm);if(_===null||Math.abs(w)<Math.abs(_)){if(d)return!0;_=w,h=m,f.copy(E)}}if(h!==-1){const m=this.createContactEquation(l,a,t,e,c,u);f.scale(_,g),g.vadd(i,g),g.vsub(n,g),m.rj.copy(g),f.negate(m.ni),m.ri.set(0,0,0);const v=m.ri,x=m.rj;v.vadd(i,v),v.vsub(l.position,v),x.vadd(n,x),x.vsub(a.position,x),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,r,a,l,c,u,d){return this.convexHeightfield(t,e,i,n,r,s,l,a,c,u,d)}particleCylinder(e,t,n,i,s,r,a,l,c,u,d){return this.convexParticle(t,e,i,n,r,s,l,a,c,u,d)}sphereTrimesh(e,t,n,i,s,r,a,l,c,u,d){const h=LD,f=FD,g=ID,_=ND,p=UD,m=OD,v=HD,x=PD,E=CD,w=VD;pt.pointToLocalFrame(i,r,n,p);const S=e.radius;v.lowerBound.set(p.x-S,p.y-S,p.z-S),v.upperBound.set(p.x+S,p.y+S,p.z+S),t.getTrianglesInAABB(v,w);const b=RD,D=e.radius*e.radius;for(let N=0;N<w.length;N++)for(let T=0;T<3;T++)if(t.getVertex(t.indices[w[N]*3+T],b),b.vsub(p,E),E.lengthSquared()<=D){if(x.copy(b),pt.pointToWorldFrame(i,r,x,b),b.vsub(n,E),d)return!0;let L=this.createContactEquation(a,l,e,t,c,u);L.ni.copy(E),L.ni.normalize(),L.ri.copy(L.ni),L.ri.scale(e.radius,L.ri),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),L.rj.copy(b),L.rj.vsub(l.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}for(let N=0;N<w.length;N++)for(let T=0;T<3;T++){t.getVertex(t.indices[w[N]*3+T],h),t.getVertex(t.indices[w[N]*3+(T+1)%3],f),f.vsub(h,g),p.vsub(f,m);const L=m.dot(g);p.vsub(h,m);let P=m.dot(g);if(P>0&&L<0&&(p.vsub(h,m),_.copy(g),_.normalize(),P=m.dot(_),_.scale(P,m),m.vadd(h,m),m.distanceTo(p)<e.radius)){if(d)return!0;const V=this.createContactEquation(a,l,e,t,c,u);m.vsub(p,V.ni),V.ni.normalize(),V.ni.scale(e.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),pt.pointToWorldFrame(i,r,m,m),m.vsub(l.position,V.rj),pt.vectorToWorldFrame(r,V.ni,V.ni),pt.vectorToWorldFrame(r,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}const y=BD,M=zD,U=kD,R=DD;for(let N=0,T=w.length;N!==T;N++){t.getTriangleVertices(w[N],y,M,U),t.getNormal(w[N],R),p.vsub(y,m);let L=m.dot(R);if(R.scale(L,m),p.vsub(m,m),L=m.distanceTo(p),qt.pointInTriangle(m,y,M,U)&&L<e.radius){if(d)return!0;let P=this.createContactEquation(a,l,e,t,c,u);m.vsub(p,P.ni),P.ni.normalize(),P.ni.scale(e.radius,P.ri),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),pt.pointToWorldFrame(i,r,m,m),m.vsub(l.position,P.rj),pt.vectorToWorldFrame(r,P.ni,P.ni),pt.vectorToWorldFrame(r,P.ri,P.ri),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult)}}w.length=0}planeTrimesh(e,t,n,i,s,r,a,l,c,u,d){const h=new A,f=wD;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,h);const _=new A;_.copy(h),pt.pointToWorldFrame(i,r,_,h);const p=TD;if(h.vsub(n,p),f.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(a,l,e,t,c,u);v.ni.copy(f);const x=AD;f.scale(p.dot(f),x),h.vsub(x,x),v.ri.copy(x),v.ri.vsub(a.position,v.ri),v.rj.copy(h),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const ur=new A,uo=new A,ho=new A,ED=new A,MD=new A,bD=new Bt,SD=new Bt,wD=new A,TD=new A,AD=new A,DD=new A,CD=new A;new A;const RD=new A,PD=new A,LD=new A,FD=new A,ID=new A,ND=new A,UD=new A,OD=new A,BD=new A,zD=new A,kD=new A,HD=new ii,VD=[],ec=new A,zm=new A,GD=new A,WD=new A,XD=new A;function qD(o,e,t){let n=null;const i=o.length;for(let s=0;s!==i;s++){const r=o[s],a=GD;o[(s+1)%i].vsub(r,a);const l=WD;a.cross(e,l);const c=XD;t.vsub(r,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const tc=new A,YD=new A,jD=new A,$D=new A,KD=[new A,new A,new A,new A,new A,new A],ZD=new A,JD=new A,QD=new A,e1=new A,t1=new A,n1=new A,i1=new A,s1=new A,r1=new A,o1=new A,a1=new A,l1=new A,c1=new A,u1=new A;new A;new A;const h1=new A,d1=new A,f1=new A,p1=new A,m1=new A,g1=new A,_1=new A,v1=new A,x1=new A,y1=new A,km=new Bt,E1=new A;new A;const M1=new A,Hm=new A,b1=new A,S1=new A,w1=new A,T1=[0],A1=new A,D1=new A;class Vm{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,r=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const u=n[l];for(;u>i[a];)a++;c=u===i[a],c||Gm(e,u)}a=0;for(let l=0;l<r;l++){let c=!1;const u=i[l];for(;u>n[a];)a++;c=n[a]===u,c||Gm(t,u)}}}function Gm(o,e){o.push((e&4294901760)>>16,e&65535)}const rh=(o,e)=>o<e?`${o}-${e}`:`${e}-${o}`;class C1{constructor(){this.data={keys:[]}}get(e,t){const n=rh(e,t);return this.data[n]}set(e,t,n){const i=rh(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=rh(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class R1 extends m0{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new A,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new A,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new OA,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new pD,this.constraints=[],this.narrowphase=new yD(this),this.collisionMatrix=new Am,this.collisionMatrixPrevious=new Am,this.bodyOverlapKeeper=new Vm,this.shapeOverlapKeeper=new Vm,this.contactmaterials=[],this.contactMaterialTable=new C1,this.defaultMaterial=new ol("default"),this.defaultContactMaterial=new rl(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Uc?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=qt.ALL,n.from=e,n.to=t,n.callback=i,oh.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=qt.ANY,n.from=e,n.to=t,n.result=i,oh.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=qt.CLOSEST,n.from=e,n.to=t,n.result=i,oh.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof De&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===e)return r}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=Jt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Jt.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(Jt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const r=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=N1,i=U1,s=this.bodies.length,r=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,d=De.DYNAMIC;let h=-1/0;const f=this.constraints,g=I1;l.length();const _=l.x,p=l.y,m=l.z;let v=0;for(c&&(h=Jt.now()),v=0;v!==s;v++){const N=r[v];if(N.type===d){const T=N.force,L=N.mass;T.x+=L*_,T.y+=L*p,T.z+=L*m}}for(let N=0,T=this.subsystems.length;N!==T;N++)this.subsystems[N].update();c&&(h=Jt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(u.broadphase=Jt.now()-h);let x=f.length;for(v=0;v!==x;v++){const N=f[v];if(!N.collideConnected)for(let T=n.length-1;T>=0;T-=1)(N.bodyA===n[T]&&N.bodyB===i[T]||N.bodyB===n[T]&&N.bodyA===i[T])&&(n.splice(T,1),i.splice(T,1))}this.collisionMatrixTick(),c&&(h=Jt.now());const E=F1,w=t.length;for(v=0;v!==w;v++)E.push(t[v]);t.length=0;const S=this.frictionEquations.length;for(v=0;v!==S;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,E,this.frictionEquations,g),c&&(u.narrowphase=Jt.now()-h),c&&(h=Jt.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const b=t.length;for(let N=0;N!==b;N++){const T=t[N],L=T.bi,P=T.bj,k=T.si,V=T.sj;let G;if(L.material&&P.material?G=this.getContactMaterial(L.material,P.material)||this.defaultContactMaterial:G=this.defaultContactMaterial,G.friction,L.material&&P.material&&(L.material.friction>=0&&P.material.friction>=0&&L.material.friction*P.material.friction,L.material.restitution>=0&&P.material.restitution>=0&&(T.restitution=L.material.restitution*P.material.restitution)),a.addEquation(T),L.allowSleep&&L.type===De.DYNAMIC&&L.sleepState===De.SLEEPING&&P.sleepState===De.AWAKE&&P.type!==De.STATIC){const I=P.velocity.lengthSquared()+P.angularVelocity.lengthSquared(),Q=P.sleepSpeedLimit**2;I>=Q*2&&(L.wakeUpAfterNarrowphase=!0)}if(P.allowSleep&&P.type===De.DYNAMIC&&P.sleepState===De.SLEEPING&&L.sleepState===De.AWAKE&&L.type!==De.STATIC){const I=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),Q=L.sleepSpeedLimit**2;I>=Q*2&&(P.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(L,P,!0),this.collisionMatrixPrevious.get(L,P)||(da.body=P,da.contact=T,L.dispatchEvent(da),da.body=L,P.dispatchEvent(da)),this.bodyOverlapKeeper.set(L.id,P.id),this.shapeOverlapKeeper.set(k.id,V.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Jt.now()-h,h=Jt.now()),v=0;v!==s;v++){const N=r[v];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(x=f.length,v=0;v!==x;v++){const N=f[v];N.update();for(let T=0,L=N.equations.length;T!==L;T++){const P=N.equations[T];a.addEquation(P)}}a.solve(e,this),c&&(u.solve=Jt.now()-h),a.removeAllEquations();const D=Math.pow;for(v=0;v!==s;v++){const N=r[v];if(N.type&d){const T=D(1-N.linearDamping,e),L=N.velocity;L.scale(T,L);const P=N.angularVelocity;if(P){const k=D(1-N.angularDamping,e);P.scale(k,P)}}}this.dispatchEvent(L1),c&&(h=Jt.now());const M=this.stepnumber%(this.quatNormalizeSkip+1)===0,U=this.quatNormalizeFast;for(v=0;v!==s;v++)r[v].integrate(e,M,U);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Jt.now()-h),this.stepnumber+=1,this.dispatchEvent(P1);let R=!0;if(this.allowSleep)for(R=!1,v=0;v!==s;v++){const N=r[v];N.sleepTick(this.time),N.sleepState!==De.SLEEPING&&(R=!0)}this.hasActiveBodies=R}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(is,ss),e){for(let s=0,r=is.length;s<r;s+=2)fa.bodyA=this.getBodyById(is[s]),fa.bodyB=this.getBodyById(is[s+1]),this.dispatchEvent(fa);fa.bodyA=fa.bodyB=null}if(t){for(let s=0,r=ss.length;s<r;s+=2)pa.bodyA=this.getBodyById(ss[s]),pa.bodyB=this.getBodyById(ss[s+1]),this.dispatchEvent(pa);pa.bodyA=pa.bodyB=null}is.length=ss.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(is,ss),n){for(let s=0,r=is.length;s<r;s+=2){const a=this.getShapeById(is[s]),l=this.getShapeById(is[s+1]);rs.shapeA=a,rs.shapeB=l,a&&(rs.bodyA=a.body),l&&(rs.bodyB=l.body),this.dispatchEvent(rs)}rs.bodyA=rs.bodyB=rs.shapeA=rs.shapeB=null}if(i){for(let s=0,r=ss.length;s<r;s+=2){const a=this.getShapeById(ss[s]),l=this.getShapeById(ss[s+1]);os.shapeA=a,os.shapeB=l,a&&(os.bodyA=a.body),l&&(os.bodyB=l.body),this.dispatchEvent(os)}os.bodyA=os.bodyB=os.shapeA=os.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new ii;const oh=new qt,Jt=globalThis.performance||{};if(!Jt.now){let o=Date.now();Jt.timing&&Jt.timing.navigationStart&&(o=Jt.timing.navigationStart),Jt.now=()=>Date.now()-o}new A;const P1={type:"postStep"},L1={type:"preStep"},da={type:De.COLLIDE_EVENT_NAME,body:null,contact:null},F1=[],I1=[],N1=[],U1=[],is=[],ss=[],fa={type:"beginContact",bodyA:null,bodyB:null},pa={type:"endContact",bodyA:null,bodyB:null},rs={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},os={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function Wm(o,e,t){let{color:n=65280,scale:i=1,onInit:s,onUpdate:r}=t===void 0?{}:t;const a=[],l=new Fs({color:n??65280,wireframe:!0}),c=new A,u=new A,d=new A,h=new Bt,f=new Ho(1),g=new Lr(1,1,1),_=new Va(10,10,10,10);_.translate(0,0,1e-4);function p(D){const y=new bn,M=[];for(let R=0;R<D.vertices.length;R++){const N=D.vertices[R];M.push(N.x,N.y,N.z)}y.setAttribute("position",new un(M,3));const U=[];for(let R=0;R<D.faces.length;R++){const N=D.faces[R],T=N[0];for(let L=1;L<N.length-1;L++){const P=N[L],k=N[L+1];U.push(T,P,k)}}return y.setIndex(U),y.computeBoundingSphere(),y.computeVertexNormals(),y}function m(D){const y=new bn,M=[],U=c,R=u,N=d;for(let T=0;T<D.indices.length/3;T++)D.getTriangleVertices(T,U,R,N),M.push(U.x,U.y,U.z),M.push(R.x,R.y,R.z),M.push(N.x,N.y,N.z);return y.setAttribute("position",new un(M,3)),y.computeBoundingSphere(),y.computeVertexNormals(),y}function v(D){const y=new bn,M=D.elementSize||1,U=D.data.flatMap((N,T)=>N.flatMap((L,P)=>[T*M,P*M,L])),R=[];for(let N=0;N<D.data.length-1;N++)for(let T=0;T<D.data[N].length-1;T++){const L=D.data[N].length,P=N*L+T;R.push(P+1,P+L,P+L+1),R.push(P+L,P+1,P)}return y.setIndex(R),y.setAttribute("position",new un(U,3)),y.computeBoundingSphere(),y.computeVertexNormals(),y}function x(D){let y=new Ut;const{SPHERE:M,BOX:U,PLANE:R,CYLINDER:N,CONVEXPOLYHEDRON:T,TRIMESH:L,HEIGHTFIELD:P}=Te.types;switch(D.type){case M:{y=new Ut(f,l);break}case U:{y=new Ut(g,l);break}case R:{y=new Ut(_,l);break}case N:{const k=new Vc(D.radiusTop,D.radiusBottom,D.height,D.numSegments);y=new Ut(k,l),D.geometryId=k.id;break}case T:{const k=p(D);y=new Ut(k,l),D.geometryId=k.id;break}case L:{const k=m(D);y=new Ut(k,l),D.geometryId=k.id;break}case P:{const k=v(D);y=new Ut(k,l),D.geometryId=k.id;break}}return o.add(y),y}function E(D,y){const{SPHERE:M,BOX:U,PLANE:R,CYLINDER:N,CONVEXPOLYHEDRON:T,TRIMESH:L,HEIGHTFIELD:P}=Te.types;switch(y.type){case M:{const{radius:k}=y;D.scale.set(k*i,k*i,k*i);break}case U:{D.scale.copy(y.halfExtents),D.scale.multiplyScalar(2*i);break}case R:break;case N:{D.scale.set(1*i,1*i,1*i);break}case T:{D.scale.set(1*i,1*i,1*i);break}case L:{D.scale.copy(y.scale).multiplyScalar(i);break}case P:{D.scale.set(1*i,1*i,1*i);break}}}function w(D,y){if(!D)return!1;const{geometry:M}=D;return M instanceof Ho&&y.type===Te.types.SPHERE||M instanceof Lr&&y.type===Te.types.BOX||M instanceof Va&&y.type===Te.types.PLANE||M.id===y.geometryId&&y.type===Te.types.CYLINDER||M.id===y.geometryId&&y.type===Te.types.CONVEXPOLYHEDRON||M.id===y.geometryId&&y.type===Te.types.TRIMESH||M.id===y.geometryId&&y.type===Te.types.HEIGHTFIELD}function S(D,y){let M=a[D],U=!1;return w(M,y)||(M&&o.remove(M),a[D]=M=x(y),U=!0),E(M,y),U}function b(){const D=a,y=c,M=h;let U=0;for(const R of e.bodies)for(let N=0;N!==R.shapes.length;N++){const T=R.shapes[N],L=S(U,T),P=D[U];P&&(R.quaternion.vmult(R.shapeOffsets[N],y),R.position.vadd(y,y),R.quaternion.mult(R.shapeOrientations[N],M),P.position.copy(y),P.quaternion.copy(M),L&&s instanceof Function&&s(R,P,T),!L&&r instanceof Function&&r(R,P,T)),U++}for(let R=U;R<D.length;R++){const N=D[R];N&&o.remove(N)}D.length=U}return{update:b}}yn.defaults({ease:"ease"});yn.config({nullTargetWarn:!1,force3D:!1,autoSleep:60});yn.registerPlugin(ht,il,p0);const Oc=new fd({width:325,closed:!0});let hr,Ai=!0,Xm=window.innerWidth<991;function S0(o){const e=o.getBoundingClientRect();return e.bottom>=0&&e.right>=0&&e.top<=(window.innerHeight||document.documentElement.clientHeight)&&e.left<=(window.innerWidth||document.documentElement.clientWidth)}document.addEventListener("visibilitychange",function(){Ai=!document.hidden});const O1=!0;let qm=-1,Ym=0;const w0=new US,T0=new _w;T0.setDecoderPath("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/cw/draco/");const Io=new OS;Io.setDRACOLoader(T0);const B1=new Ig,nc=document.querySelector("canvas.webgl-a"),ic=document.querySelector("canvas.webgl-b"),ah={enabled:!1},bi=new Ri({metalness:0,roughness:.4,color:"#F4CA71"}),as=new Gc({color:"#f7f7f7",metalness:0,roughness:.9,side:Ti,toneMapped:!1,emissive:"#ffffff",emissiveIntensity:.6}),zi=new Ri({metalness:0,roughness:.5,transmission:.8,ior:1.5,thickness:.6,transparent:!1}),Hs={color1:new Je(16739860),color2:new Je(16042609)};function $h(o){o.onBeforeCompile=e=>{e.uniforms.color1={value:Hs.color1},e.uniforms.color2={value:Hs.color2},e.vertexShader=`
          varying vec3 vPosition;
          ${e.vertexShader}
        `.replace("#include <begin_vertex>",`#include <begin_vertex>
             vPosition = position;
            `),e.fragmentShader=`
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec3 vPosition;

          ${e.fragmentShader}
        `.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`
            float mixValue = (vPosition.y + 1.0) / 2.0;
            vec3 gradientColor = mix(color1, color2, mixValue);
            vec4 diffuseColor = vec4( gradientColor, opacity );
            `),o.userData.shader=e}}$h(zi);if(nc){let r=function(){Xm?(n.position.set(-8,-3,-15),n.lookAt(0,0,0),t.rotation.set(.1,0,0),fo.position.set(0,0,0),Ei.position.set(0,0,0),fo.scale.set(.7,.7,.7),Ei.scale.set(.7,.7,.7)):(n.position.set(-8,-3,-15),n.lookAt(0,0,0),t.rotation.set(.1,0,0),fo.position.set(qm,Ym,0),Ei.position.set(qm,Ym,0))},g=function(){const U=b.getElapsedTime();Ei.children.forEach((R,N)=>{const T=f[N],L=Math.sin(U*u+T)*c;R.position.y=L})},_=function(){let U=window.scrollY,R=0;yn.to({},{scrollTrigger:{trigger:"#hero-group",start:"top bottom",end:"bottom top",scrub:!0,markers:!0,onUpdate:N=>{d=l+N.progress,Ei.children.forEach((L,P)=>{L.position.z=P*d}),R=Math.abs(window.scrollY-U),U=window.scrollY;const T=Math.min(R/200,h);Ei.children.forEach(L=>{const P=N.direction===1?1:-1;yn.to(L.rotation,{x:-T*P*2,duration:.2,ease:"power2.out"})})},onLeaveBack:()=>p(),onLeave:()=>p()}})},p=function(){Ei.children.forEach(U=>{yn.to(U.rotation,{x:0,duration:.8,ease:"power2.out"})})},D=function(){if(window.requestAnimationFrame(D),S&&!Ai||!S0(nc)){console.log("Loop Stopped");return}console.log("Loop Running"),b.getElapsedTime(),i.update(),s.render(t,n),g()};var G1=r,W1=g,X1=_,q1=p,Y1=D;console.log("Initializing Scene A..."),new Ft;var Ei=new ki,fo=new ki;const o=window.innerWidth,e=window.innerHeight,t=new Ag,n=new En(10,window.innerWidth/window.innerHeight,.1,100);t.add(n);const i=new Ug(n,nc);i.enableDamping=!0;const s=new rd({canvas:nc,antialias:!0,alpha:!0});s.shadowMap.type=Zh,s.toneMapping=Jh,s.toneMappingExposure=1,s.setSize(o,e),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.outputColorSpace=Tt,w0.load("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/cw/urban_alley_01_1k.hdr",U=>{U.mapping=za,t.environment=U}),window.addEventListener("resize",()=>{const U=window.innerWidth,R=window.innerHeight;n.aspect=U/R,n.updateProjectionMatrix(),s.setSize(U,R),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),Xm=window.innerWidth<991,r()}),document.addEventListener("visibilitychange",function(){document.hidden?Ai=!1:Ai=!0});const a=8,l=1.3,c=.05,u=.6;let d=l;const h=Math.PI,f=[];Io.load("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/zaang/cone128.glb",U=>{const R=U.scene.children[0];R.receiveShadow=!0,R.castShadow=!0,R.material=bi,R.scale.set(.3,.3,.3);for(let N=0;N<a;N++){const T=R.clone(),L=N*l;T.position.set(0,0,L),f.push(Math.random()*Math.PI*2),Ei.add(T)}t.add(Ei),_()});const m=10,v=1;Io.load("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/zaang/plane2048g.glb",U=>{const R=U.scene.children[0];R.receiveShadow=!0,R.castShadow=!0;const N=R.material,T=N?N.normalMap:null,L=zi.clone();T&&(L.normalMap=T),$h(L),R.material=L;for(let P=0;P<m;P++){const k=R.clone(),V=zi.clone();T&&(V.normalMap=T),$h(V),k.material=V;const G=P*v;k.position.set(0,0,G),fo.add(k),yn.to(k.rotation,{z:Math.PI/2,duration:1.4,ease:"power3.inOut",delay:P*.1,repeat:-1,yoyo:!0,repeatDelay:9.4})}t.add(fo)});const x=1,E=2,w=.5;yn.to(Ei.position,{scrollTrigger:{trigger:"#hero-group",start:"top bottom",end:"bottom top",scrub:O1,markers:!0,onUpdate:U=>{const R=U.progress,N=bo.lerp(x,E,R);fo.children.forEach((T,L)=>{T.position.z=L*N}),Ei.position.z=-R*w*a}},ease:"none"}),r(),window.onfocus=function(){Ai=!0},window.onblur=function(){Ai=!1};let S=!1;setTimeout(()=>{S=!0},5e3);const b=new Ng;D();const y=Oc.addFolder("Material 1");y.addColor(Hs,"color1").name("Gradient Color 1").onChange(U=>{Hs.color1.set(U),zi.needsUpdate=!0}),y.addColor(Hs,"color2").name("Gradient Color 2").onChange(U=>{Hs.color2.set(U),zi.needsUpdate=!0}),y.close();const M=Oc.addFolder("Material 2");M.add(bi,"metalness",0,1,.001).name("Metalness").onChange(U=>{bi.metalness=U,bi.needsUpdate=!0}),M.add(bi,"roughness",0,1,.001).name("Roughness").onChange(U=>{bi.roughness=U,bi.needsUpdate=!0}),M.addColor(bi,"color").name("Base Color").onChange(U=>{bi.color.set(U),bi.needsUpdate=!0}),M.close()}if(ic){let c=function(ae){ae.onBeforeCompile=te=>{te.uniforms.normalMap={value:l},te.uniforms.color1={value:Hs.color1},te.uniforms.color2={value:Hs.color2},te.vertexShader=`
          varying vec2 vUv;
          varying vec3 vPosition;
          ${te.vertexShader}
        `.replace("#include <uv_vertex>",`
            #include <uv_vertex>
            vUv = uv;
            vPosition = position;
            `),te.fragmentShader=`
        uniform sampler2D normalMap;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        varying vec3 vPosition;
        ${te.fragmentShader}
        `.replace("#include <normal_fragment_maps>",`
          #include <normal_fragment_maps>
          vec3 normalTex = texture2D(normalMap, vUv * 4.0).rgb * 2.0 - 1.0; // Adjust scale with * 5.0
          float normalPower = 3.0; // Amplify the normal effect (1.0 = default strength)
          normalTex *= normalPower; // Increase the strength of the normal map effect
          normalTex = normalize(normalTex);
          normal = normalize(normal + normalTex);
          `).replace("vec4 diffuseColor = vec4( diffuse, opacity );",`
                    float mixValue = (vPosition.y + 1.0) / 2.0;
                    vec3 gradientColor = mix(color1, color2, mixValue);
                    vec4 diffuseColor = vec4(gradientColor, opacity);
                    `),ae.userData.shader=te},ae.needsUpdate=!0},u=function(){for(let ae=x.length-1;ae>=0;ae--){const te=x[ae],ve=E[ae];te.parent&&te.parent.remove(te),o.bodies.includes(ve)&&o.removeBody(ve),x.pop(),E.pop()}m.parent&&m.parent.remove(m),o.bodies.includes(v)&&o.removeBody(v),console.log("All spheres and central sphere removed.")},S=function(){o.step(.016666666666666666),E.forEach((te,ve)=>{const Se=new A(v.position.x-te.position.x,v.position.y-te.position.y,v.position.z-te.position.z),q=Se.length();Se.normalize();const He=Se.scale(f/(q*q));te.applyForce(He,te.position),x[ve].position.copy(te.position),x[ve].quaternion.copy(te.quaternion)}),m.position.copy(v.position)},b=function(){const te=v.shapes[0].radius;yn.timeline({repeat:-1,repeatDelay:g}).to(m.scale,{x:1.55,y:1.55,z:1.55,duration:.25,ease:"power2.out",onUpdate:function(){const Se=te*m.scale.x;v.shapes[0].radius=Se,v.updateBoundingRadius()}}).to(m.scale,{x:1,y:1,z:1,duration:1,ease:"elastic.out(1, 0.5)",onUpdate:function(){const Se=te*m.scale.x;v.shapes[0].radius=Se,v.updateBoundingRadius()}})},k=function(ae){const te=bo.degToRad(ae),ve=yn.timeline({delay:P}),Se=.8,q=.2;ve.to(L.rotation,{x:te/20,duration:.3,ease:"power1.inOut",onUpdate:()=>{v.position.y=-L.rotation.x*Se}}).to(L.rotation,{x:-te/12,duration:.4,ease:"power1.inOut",onUpdate:()=>{v.position.y=-L.rotation.x*Se}}).to(L.rotation,{x:te,duration:1.6,ease:"power2.out",onUpdate:()=>{v.quaternion.setFromEuler(-L.rotation.x*q,0,0)}}).to(L.position,{y:-.4,duration:1.6,ease:"power2.out"},"<").to(s.position,{y:5,duration:1.6,ease:"power2.out"},"<").to(as,{emissiveIntensity:0,duration:1.6,ease:"power2.out"},"<"),yn.delayedCall(P+1.2,()=>{u()}),yn.delayedCall(P+1.3,()=>{o.addBody(T),o.gravity.set(0,-.1,0),e.friction=.6,e.restitution=0,o.defaultContactMaterial=e}),yn.delayedCall(P+1.58,()=>{V()}),yn.delayedCall(P+3,()=>{G()}),yn.delayedCall(P+3.7,()=>{I()})},V=function(){Io.load("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/zaang/cone128.glb",ae=>{const te=ae.scene;te.position.set(0,0,0),te.scale.set(.3,.3,.3),te.traverse(Se=>{Se.isMesh&&(Se.material=zi)}),t.add(te);const ve=new De({mass:1,shape:new sh(.1,.4,.6,16),material:Ds});ve.position.set(0,0,0),o.addBody(ve),Q.push({mesh:te,body:ve})})},G=function(){Io.load("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/zaang/irregular_hex.glb",ae=>{const te=ae.scene;te.position.set(0,.3,0),te.scale.set(.25,.25,.25);const ve=zi.clone();c(ve),te.traverse(Ce=>{Ce.isMesh&&(Ce.material=ve)}),t.add(te);const Se=new Fo(new A(.3,.06,.3)),q=new Fo(new A(.5,.02,.3)),He=new Fo(new A(.5,.02,.3)),_e=new De({mass:1,material:Ds});_e.addShape(Se,new A(0,.02,0)),_e.addShape(q,new A(0,.02,0),new Bt().setFromEuler(0,0,bo.degToRad(15))),_e.addShape(He,new A(0,.06,0),new Bt().setFromEuler(0,0,bo.degToRad(-13))),_e.position.set(0,.3,0),o.addBody(_e),Q.push({mesh:te,body:_e})})},I=function(){Io.load("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/zaang/miniDisc.glb",ae=>{const te=ae.scene;te.position.set(0,.75,0),te.scale.set(.3,.3,.3),te.traverse(Se=>{Se.isMesh&&(Se.material=zi)}),t.add(te);const ve=new De({mass:1,shape:new sh(.3,.3,.6,32),material:Ds});ve.position.set(0,.75,0),ve.quaternion.setFromEuler(0,1,1.5),o.addBody(ve),Q.push({mesh:te,body:ve})})},$=function(){Q.forEach(({mesh:ae,body:te})=>{ae.position.copy(te.position),ae.quaternion.copy(te.quaternion)})},he=function(){if(window.requestAnimationFrame(he),j&&!Ai||!S0(ic)){console.log("Loop B Stopped");return}console.log("Loop B Running");const ae=ee.getDelta();o.step(1/60,ae,3),$(),S(),ah.enabled&&hr.update(),ee.getElapsedTime(),a.render(t,s),r.update()};var j1=c,$1=u,K1=S,Z1=b,J1=k,Q1=V,eC=G,tC=I,nC=$,iC=he;console.log("Initializing Scene B...");let o;o=new R1,o.broadphase=new Eo(o),o.solver.iterations=1,o.gravity.set(0,0,0);var Ds=new ol("default");const e=new rl(Ds,Ds,{friction:.3,restitution:.1});o.defaultContactMaterial=e;const t=new Ag;t.position.set(-.2,0,0);const n=window.innerWidth/100*60,i=n,s=new En(10,n/i,.1,100);s.position.set(0,0,15),t.add(s);const r=new Ug(s,ic);r.enableDamping=!0;const a=new rd({canvas:ic,antialias:!0,alpha:!0});a.shadowMap.type=Zh,a.toneMapping=Jh,a.toneMappingExposure=1,a.setSize(n,i),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.outputColorSpace=Tt,ah.enabled&&(hr=new Wm(t,o)),w0.load("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/cw/urban_alley_01_1k.hdr",ae=>{ae.mapping=za,t.environment=ae});const l=B1.load("https://raw.githubusercontent.com/kujira22/kujira_webgl/master/zaang/textures/normal.jpg");l.wrapS=js,l.wrapT=js,c(zi),window.addEventListener("resize",()=>{const ae=window.innerWidth/100*60,te=ae;s.aspect=ae/te,s.updateProjectionMatrix(),a.setSize(ae,te),a.setPixelRatio(Math.min(window.devicePixelRatio,2))});const d=zi,h=bi,f=.25,g=10,_=.25,p=new Ho(_,64,64),m=new Ut(p,d);m.position.set(0,0,.5),t.add(m);const v=new De({mass:0,shape:new Bm(_),material:Ds});v.position.set(0,0,.5),o.addBody(v);const x=[],E=[],w=10;for(let ae=0;ae<w;ae++){const te=Math.random()*.03+.13;let ve=!1,Se,q,He;for(;!ve;){const K=Math.random()*Math.PI*2,Ve=_+te+Math.random()*.2+.3;Se=Math.cos(K)*Ve+v.position.x,q=Math.sin(K)*Ve+v.position.y,He=(Math.random()-.5)*.5+v.position.z,ve=E.every(O=>{const C=O.position.x-Se,X=O.position.y-q,ie=O.position.z-He;return Math.sqrt(C*C+X*X+ie*ie)>te+O.shapes[0].radius+.1})}const _e=new Ho(te,32,32),Ce=new Ut(_e,h);t.add(Ce);const Me=new De({mass:1,shape:new Bm(te),material:Ds});Me.position.set(Se,q,He),o.addBody(Me),x.push(Ce),E.push(Me)}b();const D=.8,y=.1,M=64,U=new Vc(D,D,y,M),R=new Ut(U,as);R.position.set(0,0,0),R.rotation.x=Math.PI/2,t.add(R);const N=new sh(D,D,y,M),T=new De({mass:0,shape:N,material:Ds});T.position.set(R.position.x,R.position.y-.4,R.position.z),T.quaternion.setFromEuler(0,0,0);const L=new ki;t.add(L);const P=15;L.add(m),x.forEach(ae=>L.add(ae)),L.add(R),k(270);const Q=[];document.addEventListener("visibilitychange",function(){document.hidden?Ai=!1:Ai=!0}),window.onfocus=function(){Ai=!0},window.onblur=function(){Ai=!1};let j=!1;setTimeout(()=>{j=!0},5e3);const ee=new Ng;he();const ye=Oc.addFolder("Base Material");ye.addColor(as,"color").name("Base Color").onChange(ae=>{as.color.set(ae),as.needsUpdate=!0}),ye.add(as,"metalness",0,1,.01).name("Metalness").onChange(()=>{as.needsUpdate=!0}),ye.add(as,"roughness",0,1,.01).name("Roughness").onChange(()=>{as.needsUpdate=!0}),ye.close();const ge=Oc.addFolder("Physics");ge.add(ah,"enabled").name("Enable Cannon Debug").onChange(ae=>{console.log(`Cannon debug switched to: ${ae}`),ae?(hr||(hr=new Wm(t,o)),console.log("Cannon debugger enabled.")):(hr&&(hr.clear(),hr=null),console.log("Cannon debugger disabled."))}),ge.close()}
//# sourceMappingURL=index-Bv6TwyrB.js.map
