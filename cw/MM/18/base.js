var WebflowThreeBarbaStarter=(function(_o){"use strict";function Yf(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,typeof(r=(function(s,o){if(typeof s!="object"||s===null)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var l=a.call(s,"string");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)})(n.key))=="symbol"?r:String(r),n)}var r}function vo(i,e,t){return e&&Yf(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function un(){return un=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},un.apply(this,arguments)}function $r(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,yr(i,e)}function xo(i){return xo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},xo(i)}function yr(i,e){return yr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},yr(i,e)}function Kf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function yo(i,e,t){return yo=Kf()?Reflect.construct.bind():function(n,r,s){var o=[null];o.push.apply(o,r);var a=new(Function.bind.apply(n,o));return s&&yr(a,s.prototype),a},yo.apply(null,arguments)}function So(i){var e=typeof Map=="function"?new Map:void 0;return So=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return yo(t,arguments,xo(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),yr(n,t)},So(i)}function jf(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}var qn,$f=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(i){i[i.off=0]="off",i[i.error=1]="error",i[i.warning=2]="warning",i[i.info=3]="info",i[i.debug=4]="debug"})(qn||(qn={}));var pc=qn.off,di=(function(){function i(t){this.t=void 0,this.t=t}i.getLevel=function(){return pc},i.setLevel=function(t){return pc=qn[t]};var e=i.prototype;return e.error=function(){this.i(console.error,qn.error,[].slice.call(arguments))},e.warn=function(){this.i(console.warn,qn.warning,[].slice.call(arguments))},e.info=function(){this.i(console.info,qn.info,[].slice.call(arguments))},e.debug=function(){this.i(console.log,qn.debug,[].slice.call(arguments))},e.i=function(t,n,r){n<=i.getLevel()&&t.apply(console,["["+this.t+"] "].concat(r))},i})();function Ci(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function mc(i){return i&&i.sensitive?"":"i"}var dn={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},hi=new((function(){function i(){this.o=dn,this.u=void 0,this.h={after:null,before:null,parent:null}}var e=i.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u||(this.u=new DOMParser),this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&(this.v(t),t.parentNode.removeChild(t))},e.addContainer=function(t,n){var r=this.getContainer()||this.h.before;r?this.l(t,r):this.h.after?this.h.after.parentNode.insertBefore(t,this.h.after):this.h.parent?this.h.parent.appendChild(t):n.appendChild(t)},e.getSibling=function(){return this.h},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){var t=[].slice.call(arguments).length;if(t===0)throw new Error("resolveUrl requires at least one argument; got none.");var n=document.createElement("base");if(n.href=arguments[0],t===1)return n.href;var r=document.getElementsByTagName("head")[0];r.insertBefore(n,r.firstChild);for(var s,o=document.createElement("a"),a=1;a<t;a++)o.href=arguments[a],n.href=s=o.href;return r.removeChild(n),s},e.l=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},e.v=function(t){return this.h={after:t.nextElementSibling,before:t.previousElementSibling,parent:t.parentElement},this.h},i})()),Zf=(function(){function i(){this.p=void 0,this.m=[],this.P=-1}var e=i.prototype;return e.init=function(t,n){this.p="barba";var r={data:{},ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.P=0,this.m.push(r);var s={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,r){if(r&&r.state){var s=r.state,o=s.index;n=this.g(this.P-o),this.replace(s.states),this.P=o}else this.add(t,n);return n},e.add=function(t,n,r,s){var o=r??this.R(n),a={data:s??{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};switch(o){case"push":this.P=this.size,this.m.push(a);break;case"replace":this.set(this.P,a)}var l={from:this.p,index:this.P,states:[].concat(this.m)};switch(o){case"push":window.history&&window.history.pushState(l,"",t);break;case"replace":window.history&&window.history.replaceState(l,"",t)}},e.store=function(t,n){var r=n||this.P,s=this.get(r);s.data=un({},s.data,t),this.set(r,s);var o={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(o,"")},e.update=function(t,n){var r=n||this.P,s=un({},this.get(r),t);this.set(r,s)},e.remove=function(t){t?this.m.splice(t,1):this.m.pop(),this.P--},e.clear=function(){this.m=[],this.P=-1},e.replace=function(t){this.m=t},e.get=function(t){return this.m[t]},e.set=function(t,n){return this.m[t]=n},e.R=function(t){var n="push",r=t,s=dn.prefix+"-"+dn.history;return r.hasAttribute&&r.hasAttribute(s)&&(n=r.getAttribute(s)),n},e.g=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},vo(i,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),i})(),gc=new Zf,Zr=function(i,e){try{var t=(function(){if(!e.next.html)return Promise.resolve(i).then(function(n){var r=e.next;if(n){var s=hi.toElement(n.html);r.namespace=hi.getNamespace(s),r.container=hi.getContainer(s),r.url=n.url,r.html=n.html,gc.update({ns:r.namespace});var o=hi.toDocument(n.html);document.title=o.title}})})();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},_c=function i(e,t,n){return e instanceof RegExp?(function(r,s){if(!s)return r;for(var o=/\((?:\?<(.*?)>)?(?!\?)/g,a=0,l=o.exec(r.source);l;)s.push({name:l[1]||a++,prefix:"",suffix:"",modifier:"",pattern:""}),l=o.exec(r.source);return r})(e,t):Array.isArray(e)?(function(r,s,o){var a=r.map(function(l){return i(l,s,o).source});return new RegExp("(?:".concat(a.join("|"),")"),mc(o))})(e,t,n):(function(r,s,o){return(function(a,l,c){c===void 0&&(c={});for(var u=c.strict,d=u!==void 0&&u,h=c.start,f=h===void 0||h,g=c.end,_=g===void 0||g,m=c.encode,p=m===void 0?function(H){return H}:m,y=c.delimiter,M=y===void 0?"/#?":y,E=c.endsWith,R="[".concat(Ci(E===void 0?"":E),"]|$"),T="[".concat(Ci(M),"]"),C=f?"^":"",x=0,A=a;x<A.length;x++){var P=A[x];if(typeof P=="string")C+=Ci(p(P));else{var w=Ci(p(P.prefix)),L=Ci(p(P.suffix));if(P.pattern)if(l&&l.push(P),w||L)if(P.modifier==="+"||P.modifier==="*"){var G=P.modifier==="*"?"?":"";C+="(?:".concat(w,"((?:").concat(P.pattern,")(?:").concat(L).concat(w,"(?:").concat(P.pattern,"))*)").concat(L,")").concat(G)}else C+="(?:".concat(w,"(").concat(P.pattern,")").concat(L,")").concat(P.modifier);else C+=P.modifier==="+"||P.modifier==="*"?"((?:".concat(P.pattern,")").concat(P.modifier,")"):"(".concat(P.pattern,")").concat(P.modifier);else C+="(?:".concat(w).concat(L,")").concat(P.modifier)}}if(_)d||(C+="".concat(T,"?")),C+=c.endsWith?"(?=".concat(R,")"):"$";else{var B=a[a.length-1],N=typeof B=="string"?T.indexOf(B[B.length-1])>-1:B===void 0;d||(C+="(?:".concat(T,"(?=").concat(R,"))?")),N||(C+="(?=".concat(T,"|").concat(R,")"))}return new RegExp(C,mc(c))})((function(a,l){l===void 0&&(l={});for(var c=(function(L){for(var G=[],B=0;B<L.length;){var N=L[B];if(N!=="*"&&N!=="+"&&N!=="?")if(N!=="\\")if(N!=="{")if(N!=="}")if(N!==":")if(N!=="(")G.push({type:"CHAR",index:B,value:L[B++]});else{var H=1,z="";if(L[Z=B+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(Z));for(;Z<L.length;)if(L[Z]!=="\\"){if(L[Z]===")"){if(--H==0){Z++;break}}else if(L[Z]==="("&&(H++,L[Z+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(Z));z+=L[Z++]}else z+=L[Z++]+L[Z++];if(H)throw new TypeError("Unbalanced pattern at ".concat(B));if(!z)throw new TypeError("Missing pattern at ".concat(B));G.push({type:"PATTERN",index:B,value:z}),B=Z}else{for(var J="",Z=B+1;Z<L.length;){var re=L.charCodeAt(Z);if(!(re>=48&&re<=57||re>=65&&re<=90||re>=97&&re<=122||re===95))break;J+=L[Z++]}if(!J)throw new TypeError("Missing parameter name at ".concat(B));G.push({type:"NAME",index:B,value:J}),B=Z}else G.push({type:"CLOSE",index:B,value:L[B++]});else G.push({type:"OPEN",index:B,value:L[B++]});else G.push({type:"ESCAPED_CHAR",index:B++,value:L[B++]});else G.push({type:"MODIFIER",index:B,value:L[B++]})}return G.push({type:"END",index:B,value:""}),G})(a),u=l.prefixes,d=u===void 0?"./":u,h="[^".concat(Ci(l.delimiter||"/#?"),"]+?"),f=[],g=0,_=0,m="",p=function(L){if(_<c.length&&c[_].type===L)return c[_++].value},y=function(L){var G=p(L);if(G!==void 0)return G;var B=c[_],N=B.index;throw new TypeError("Unexpected ".concat(B.type," at ").concat(N,", expected ").concat(L))},M=function(){for(var L,G="";L=p("CHAR")||p("ESCAPED_CHAR");)G+=L;return G};_<c.length;){var E=p("CHAR"),R=p("NAME"),T=p("PATTERN");if(R||T)d.indexOf(x=E||"")===-1&&(m+=x,x=""),m&&(f.push(m),m=""),f.push({name:R||g++,prefix:x,suffix:"",pattern:T||h,modifier:p("MODIFIER")||""});else{var C=E||p("ESCAPED_CHAR");if(C)m+=C;else if(m&&(f.push(m),m=""),p("OPEN")){var x=M(),A=p("NAME")||"",P=p("PATTERN")||"",w=M();y("CLOSE"),f.push({name:A||(P?g++:""),pattern:A&&!P?h:P,prefix:x,suffix:w,modifier:p("MODIFIER")||""})}else y("END")}}return f})(r,o),s,o)})(e,t,n)},Jf={__proto__:null,update:Zr,nextTick:function(){return new Promise(function(i){window.requestAnimationFrame(i)})},pathToRegexp:_c},vc=function(){return window.location.origin},Sr=function(i){return i===void 0&&(i=window.location.href),Yn(i).port},Yn=function(i){var e,t=i.match(/:\d+/);if(t===null)/^http/.test(i)&&(e=80),/^https/.test(i)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var r,s=i.replace(vc(),""),o={},a=s.indexOf("#");a>=0&&(r=s.slice(a+1),s=s.slice(0,a));var l=s.indexOf("?");return l>=0&&(o=xc(s.slice(l+1)),s=s.slice(0,l)),{hash:r,path:s,port:e,query:o}},xc=function(i){return i.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},Mo=function(i){return i===void 0&&(i=window.location.href),i.replace(/(\/#.*|\/|#.*)$/,"")},Qf={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(i,e){return e===void 0&&(e=document.baseURI),new URL(i,e).href},getOrigin:vc,getPort:Sr,getPath:function(i){return i===void 0&&(i=window.location.href),Yn(i).path},getQuery:function(i,e){return e===void 0&&(e=!1),e?JSON.stringify(Yn(i).query):Yn(i).query},getHash:function(i){return Yn(i).hash},parse:Yn,parseQuery:xc,clean:Mo};function ep(i,e,t,n,r){return e===void 0&&(e=2e3),new Promise(function(s,o){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){if(a.status===200){var l=a.responseURL!==""&&a.responseURL!==i?a.responseURL:i;s({html:a.responseText,url:un({href:l},Yn(l))}),n.update(i,{status:"fulfilled",target:l})}else if(a.status){var c={status:a.status,statusText:a.statusText};t(i,c),o(c),n.update(i,{status:"rejected"})}}},a.ontimeout=function(){var l=new Error("Timeout error ["+e+"]");t(i,l),o(l),n.update(i,{status:"rejected"})},a.onerror=function(){var l=new Error("Fetch error");t(i,l),o(l),n.update(i,{status:"rejected"})},a.open("GET",i),a.timeout=e,a.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),a.setRequestHeader("x-barba","yes"),r.all().forEach(function(l,c){a.setRequestHeader(c,l)}),a.send()})}function tp(i){return!!i&&(typeof i=="object"||typeof i=="function")&&typeof i.then=="function"}function Pi(i,e){return e===void 0&&(e={}),function(){var t=arguments,n=!1,r=new Promise(function(s,o){e.async=function(){return n=!0,function(l,c){l?o(l):s(c)}};var a=i.apply(e,[].slice.call(t));n||(tp(a)?a.then(s,o):s(a))});return r}}var Kn=new((function(i){function e(){var n;return(n=i.call(this)||this).logger=new di("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}$r(e,i);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(r){n[r]||(n[r]=function(s,o){n.registered.has(r)||n.registered.set(r,new Set),n.registered.get(r).add({ctx:o||{},fn:s})})})},t.do=function(n){var r=arguments,s=this;if(this.registered.has(n)){var o=Promise.resolve();return this.registered.get(n).forEach(function(a){o=o.then(function(){return Pi(a.fn,a.ctx).apply(void 0,[].slice.call(r,1))})}),o.catch(function(a){s.logger.debug("Hook error ["+n+"]"),s.logger.error(a)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(r){delete n[r]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(r,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e})($f)),yc=(function(){function i(e){if(this.k=void 0,this.O=[],typeof e=="boolean")this.k=e;else{var t=Array.isArray(e)?e:[e];this.O=t.map(function(n){return _c(n)})}}return i.prototype.checkHref=function(e){if(typeof this.k=="boolean")return this.k;var t=Yn(e).path;return this.O.some(function(n){return n.exec(t)!==null})},i})(),np=(function(i){function e(n){var r;return(r=i.call(this,n)||this).T=new Map,r}$r(e,i);var t=e.prototype;return t.set=function(n,r,s,o,a){return this.T.set(n,{action:s,request:r,status:o,target:a??n}),{action:s,request:r,status:o,target:a}},t.get=function(n){return this.T.get(n)},t.getRequest=function(n){return this.T.get(n).request},t.getAction=function(n){return this.T.get(n).action},t.getStatus=function(n){return this.T.get(n).status},t.getTarget=function(n){return this.T.get(n).target},t.has=function(n){return!this.checkHref(n)&&this.T.has(n)},t.delete=function(n){return this.T.delete(n)},t.update=function(n,r){var s=un({},this.T.get(n),r);return this.T.set(n,s),s},e})(yc),ip=(function(){function i(){this.A=new Map}var e=i.prototype;return e.set=function(t,n){return this.A.set(t,n),{name:n}},e.get=function(t){return this.A.get(t)},e.all=function(){return this.A},e.has=function(t){return this.A.has(t)},e.delete=function(t){return this.A.delete(t)},e.clear=function(){return this.A.clear()},i})(),rp=function(){return!window.history.pushState},sp=function(i){return!i.el||!i.href},op=function(i){var e=i.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},ap=function(i){var e=i.el;return e.hasAttribute("target")&&e.target==="_blank"},lp=function(i){var e=i.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},cp=function(i){var e=i.el;return e.port!==void 0&&Sr()!==Sr(e.href)},up=function(i){var e=i.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},dp=function(i){return i.el.hasAttribute(dn.prefix+"-"+dn.prevent)},hp=function(i){return!!i.el.closest("["+dn.prefix+"-"+dn.prevent+'="all"]')},fp=function(i){var e=i.href;return Mo(e)===Mo()&&Sr(e)===Sr()},pp=(function(i){function e(n){var r;return(r=i.call(this,n)||this).suite=[],r.tests=new Map,r.init(),r}$r(e,i);var t=e.prototype;return t.init=function(){this.add("pushState",rp),this.add("exists",sp),this.add("newTab",op),this.add("blank",ap),this.add("corsDomain",lp),this.add("corsPort",cp),this.add("download",up),this.add("preventSelf",dp),this.add("preventAll",hp),this.add("sameUrl",fp,!1)},t.add=function(n,r,s){s===void 0&&(s=!0),this.tests.set(n,r),s&&this.suite.push(n)},t.run=function(n,r,s,o){return this.tests.get(n)({el:r,event:s,href:o})},t.checkLink=function(n,r,s){var o=this;return this.suite.some(function(a){return o.run(a,n,r,s)})},e})(yc),Eo=(function(i){function e(t,n){var r;return n===void 0&&(n="Barba error"),(r=i.call.apply(i,[this].concat([].slice.call(arguments,2)))||this).error=void 0,r.label=void 0,r.error=t,r.label=n,Error.captureStackTrace&&Error.captureStackTrace(jf(r),e),r.name="BarbaError",r}return $r(e,i),e})(So(Error)),mp=(function(){function i(t){t===void 0&&(t=[]),this.logger=new di("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=i.prototype;return e.add=function(t,n){t==="rule"?this.j.splice(n.position||0,0,n.value):this.all.push(n),this.update()},e.resolve=function(t,n){var r=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(h){return h.name&&h.name==="self"}:function(h){return!h.name||h.name!=="self"});var o=new Map,a=s.find(function(h){var f=!0,g={};return n.self&&h.name==="self"?(o.set(h,g),!0):(r.j.reverse().forEach(function(_){f&&(f=r.M(h,_,t,g),h.from&&h.to&&(f=r.M(h,_,t,g,"from")&&r.M(h,_,t,g,"to")),h.from&&!h.to&&(f=r.M(h,_,t,g,"from")),!h.from&&h.to&&(f=r.M(h,_,t,g,"to")))}),o.set(h,g),f)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var u,d=[a];Object.keys(l).length>0&&d.push(l),(u=this.logger).info.apply(u,["Transition found ["+c.join(",")+"]"].concat(d))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.N(n)}).sort(function(n,r){return n.priority-r.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.M=function(t,n,r,s,o){var a=!0,l=!1,c=t,u=n.name,d=u,h=u,f=u,g=o?c[o]:c,_=o==="to"?r.next:r.current;if(o?g&&g[u]:g[u]){switch(n.type){case"strings":default:var m=Array.isArray(g[d])?g[d]:[g[d]];_[d]&&m.indexOf(_[d])!==-1&&(l=!0),m.indexOf(_[d])===-1&&(a=!1);break;case"object":var p=Array.isArray(g[h])?g[h]:[g[h]];_[h]?(_[h].name&&p.indexOf(_[h].name)!==-1&&(l=!0),p.indexOf(_[h].name)===-1&&(a=!1)):a=!1;break;case"function":g[f](r)?l=!0:a=!1}l&&(o?(s[o]=s[o]||{},s[o][u]=c[o][u]):s[u]=c[u])}return a},e.S=function(t,n,r){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,r),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.N=function(t){var n=this;t.priority=0;var r=0;return this.j.forEach(function(s,o){r+=n.S(t,s.name,o+1)}),t.priority=r,t},i})();function Mr(i,e){try{var t=i()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}var gp=(function(){function i(t){t===void 0&&(t=[]),this.logger=new di("@barba/core"),this.store=void 0,this.C=!1,this.store=new mp(t)}var e=i.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,r=t.transition;try{var s=function(){o.C=!1},o=this,a=r||{};o.C=!0;var l=Mr(function(){return Promise.resolve(o.L("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.L("afterOnce",n,a)).then(function(){})})})},function(c){o.C=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,r=t.transition,s=t.page,o=t.wrapper;try{var a=function(h){l.C=!1},l=this,c=r||{},u=c.sync===!0||!1;l.C=!0;var d=Mr(function(){function h(){return Promise.resolve(l.L("before",n,c)).then(function(){function g(m){return Promise.resolve(l.remove(n)).then(function(){return Promise.resolve(l.L("after",n,c)).then(function(){})})}var _=(function(){if(u)return Mr(function(){return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),l.enter(n,c)])).then(function(){return Promise.resolve(l.L("afterLeave",n,c)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})})},function(M){if(l.H(M))throw new Eo(M,"Transition error [sync]")});var m=function(M){return Mr(function(){var E=(function(){if(p!==!1)return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(l.enter(n,c,p)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})();if(E&&E.then)return E.then(function(){})},function(E){if(l.H(E))throw new Eo(E,"Transition error [before/after/enter]")})},p=!1,y=Mr(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),Zr(s,n)]).then(function(M){return M[0]})).then(function(M){return p=M,Promise.resolve(l.L("afterLeave",n,c)).then(function(){})})})},function(M){if(l.H(M))throw new Eo(M,"Transition error [before/after/leave]")});return y&&y.then?y.then(m):m()})();return _&&_.then?_.then(g):g()})}var f=(function(){if(u)return Promise.resolve(Zr(s,n)).then(function(){})})();return f&&f.then?f.then(h):h()},function(h){throw l.C=!1,h.name&&h.name==="BarbaError"?(l.logger.debug(h.label),l.logger.error(h.error),h):(l.logger.debug("Transition error [page]"),l.logger.error(h),h)});return Promise.resolve(d&&d.then?d.then(a):a())}catch(h){return Promise.reject(h)}},e.once=function(t,n){try{return Promise.resolve(Kn.do("once",t,n)).then(function(){return n.once?Pi(n.once,n)(t):Promise.resolve()})}catch(r){return Promise.reject(r)}},e.leave=function(t,n){try{return Promise.resolve(Kn.do("leave",t,n)).then(function(){return n.leave?Pi(n.leave,n)(t):Promise.resolve()})}catch(r){return Promise.reject(r)}},e.enter=function(t,n,r){try{return Promise.resolve(Kn.do("enter",t,n)).then(function(){return n.enter?Pi(n.enter,n)(t,r):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return hi.addContainer(t.next.container,n),Kn.do("nextAdded",t),Promise.resolve()}catch(r){return Promise.reject(r)}},e.remove=function(t){try{return hi.removeContainer(t.current.container),Kn.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.H=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.L=function(t,n,r){try{return Promise.resolve(Kn.do(t,n,r)).then(function(){return r[t]?Pi(r[t],r)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},vo(i,[{key:"isRunning",get:function(){return this.C},set:function(t){this.C=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),i})(),_p=(function(){function i(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){Kn[n](t._(n))}))}return i.prototype._=function(e){var t=this;return function(n){var r=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(r.namespace);return s&&s[e]?Pi(s[e],s)(n):Promise.resolve()}},i})();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(i){var e=this;do{if(e.matches(i))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var vp={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},bo=new((function(){function i(){this.version="2.10.3",this.schemaPage=vp,this.Logger=di,this.logger=new di("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=Kn,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=hi,this.helpers=Jf,this.history=gc,this.request=ep,this.url=Qf,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var e=i.prototype;return e.use=function(t,n){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,r=n.transitions,s=r===void 0?[]:r,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?dn:l,u=n.requestError,d=n.timeout,h=d===void 0?2e3:d,f=n.cacheIgnore,g=f!==void 0&&f,_=n.cacheFirstPage,m=_!==void 0&&_,p=n.prefetchIgnore,y=p!==void 0&&p,M=n.preventRunning,E=M!==void 0&&M,R=n.prevent,T=R===void 0?null:R,C=n.debug,x=n.logLevel;if(di.setLevel((C!==void 0&&C)===!0?"debug":x===void 0?"off":x),this.logger.info(this.version),Object.keys(c).forEach(function(w){dn[w]&&(dn[w]=c[w])}),this.B=u,this.timeout=h,this.cacheIgnore=g,this.cacheFirstPage=m,this.prefetchIgnore=y,this.preventRunning=E,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var A=this.data.current;if(!A.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new np(g),this.headers=new ip,this.prevent=new pp(y),this.transitions=new gp(s),this.views=new _p(a),T!==null){if(typeof T!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",T)}this.history.init(A.url.href,A.namespace),m&&this.cache.set(A.url.href,Promise.resolve({html:A.html,url:A.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(w){return w.init()});var P=this.data;P.trigger="barba",P.next=P.current,P.current=un({},this.schemaPage),this.hooks.do("ready",P),this.once(P),this.I()},e.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,r){var s;if(n===void 0&&(n="barba"),this.F=null,this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(t,!0):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(this.cache.has(t)?this.cache.get(t).target:t,n,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,n,r??void 0,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function r(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=(function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}})();return s&&s.then?s.then(r):r()})}catch(r){return Promise.reject(r)}},e.page=function(t,n,r,s){try{var o,a=function(){var d=l.data;return Promise.resolve(l.hooks.do("page",d)).then(function(){var h=(function(f,g){try{var _=(m=l.transitions.get(d,{once:!1,self:s}),Promise.resolve(l.transitions.doPage({data:d,page:o,transition:m,wrapper:l.q})).then(function(){l.I()}))}catch{return g()}var m;return _&&_.then?_.then(void 0,g):_})(0,function(){di.getLevel()===0&&l.force(d.next.url.href)});if(h&&h.then)return h.then(function(){})})},l=this;if(l.data.next.url=un({href:t},l.url.parse(t)),l.data.trigger=n,l.data.event=r,l.cache.has(t))o=l.cache.update(t,{action:"click"}).request;else{var c=l.request(t,l.timeout,l.onRequestError.bind(l,n),l.cache,l.headers);c.then(function(d){d.url.href!==t&&l.history.add(d.url.href,n,"replace")}),o=l.cache.set(t,c,"click","pending").request}var u=(function(){if(l.transitions.shouldWait)return Promise.resolve(Zr(o,l.data)).then(function(){})})();return Promise.resolve(u&&u.then?u.then(a):a())}catch(d){return Promise.reject(d)}},e.onRequestError=function(t){this.transitions.isRunning=!1;var n=[].slice.call(arguments,1),r=n[0],s=n[1],o=this.cache.getAction(r);return this.cache.delete(r),this.B&&this.B(t,o,r,s)===!1||o==="click"&&this.force(r),!1},e.prefetch=function(t){var n=this;t=this.url.getAbsoluteHref(t),this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(r){n.logger.error(r)}),"prefetch","pending")},e.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},e.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},e.U=function(t){var n=this,r=this.W(t);if(r){var s=this.url.getAbsoluteHref(this.dom.getHref(r));this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,r),this.cache,this.headers).catch(function(o){n.logger.error(o)}),"enter","pending")}},e.$=function(t){var n=this.W(t);if(n){if(this.transitions.isRunning&&this.preventRunning)return t.preventDefault(),void t.stopPropagation();this.F=t,this.go(this.dom.getHref(n),n,t)}},e.X=function(t){this.go(this.url.getHref(),"popstate",t)},e.W=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.I=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:un({href:t},this.url.parse(t))};this.D={current:n,event:void 0,next:un({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},vo(i,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),i})());const Sc=["h1","h2","h3","h4","h5","h6","p","[data-text]",".filter",".w-inline-block",".body-large",".body-regular",".body-small",".link_large",".link_small",".nav_link",".heading-1",".heading-2",".heading-3",".heading-4",".heading-5",".heading-6"].join(","),pt={load:{duration:.9,ease:"power3.out",groupStagger:.3,lineStagger:.045},aos:{start:"top bottom",duration:.8,ease:"power3.out",lineStagger:.045},out:{duration:.65,ease:"power3.in",lineStagger:0},underline:{duration:.16,inEase:"power2.out",outEase:"power2.in"}},Rn=new WeakMap,Mc="mm-text-preload-style",Ec="mm-underline-link-style";let bc=!1;function xp(){if(yp(),document.getElementById(Mc))return;const i=document.createElement("style");i.id=Mc,i.textContent=`
    [data-barba="container"]:not([data-text-ready="true"]) :is(${Sc}) {
      opacity: 0 !important;
    }
  `,document.head.appendChild(i)}function yp(){if(Sp(),document.getElementById(Ec))return;const i=document.createElement("style");i.id=Ec,i.textContent=`
    [data-underline-link] {
      position: relative;
      text-decoration: none;
      --mm-underline-thickness: 0.07lh;
      --mm-underline-offset: 0.02lh;
    }

    [data-underline-link]::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: calc(var(--mm-underline-offset) * -1);
      height: 0;
      border-bottom: var(--mm-underline-thickness) solid currentColor;
      background: transparent;
      transform: scaleX(var(--mm-underline-scale, 0));
      transform-origin: var(--mm-underline-origin, right center);
      transition: transform 0.24s ease;
      pointer-events: none;
    }

    [data-underline-link="alt"]::after {
      transform-origin: var(--mm-underline-origin, left center);
    }

    [data-underline-link=""][data-underline-ready="true"]:hover::after {
      transform: scaleX(1);
      transform-origin: left center;
    }

    [data-underline-link="alt"][data-underline-ready="true"]:hover::after {
      transform: scaleX(0);
      transform-origin: right center;
    }

    [data-underline-link][data-underline-leaving="true"]::after,
    [data-underline-link][data-underline-leaving="true"][data-underline-ready="true"]:hover::after {
      transform: scaleX(var(--mm-underline-scale, 0));
      transform-origin: right center;
      transition: none;
      animation: none;
    }

    [data-page-leaving="true"] [data-underline-link="alt"][data-underline-clicked="true"][data-underline-clicked-hovered="true"]::after {
      transform: scaleX(0);
      transform-origin: right center;
      animation: none;
    }

    [data-page-leaving="true"] [data-underline-link="alt"][data-underline-clicked="true"][data-underline-clicked-hovered="false"]::after {
      transform: scaleX(var(--mm-underline-scale, 1));
      transform-origin: left center;
      animation: none;
    }

  `,document.head.appendChild(i)}function Sp(){bc||(bc=!0,document.addEventListener("pointerdown",Tc,!0),document.addEventListener("click",Tc,!0))}function Tc(i){var t,n;document.querySelectorAll("[data-underline-clicked='true']").forEach(r=>{delete r.dataset.underlineClicked,delete r.dataset.underlineClickedHovered});const e=(n=(t=i.target)==null?void 0:t.closest)==null?void 0:n.call(t,"[data-underline-link]");e&&(e.dataset.underlineClicked="true",e.dataset.underlineClickedHovered=String(e.matches(":hover")))}function Mp(i=document,e={}){const t=window.gsap,n=window.SplitText,r=e.autoAnimate!==!1;if(!t||!n||!i){i!=null&&i.dataset&&(i.dataset.textReady="true");return}const s=Ii(i).map(o=>(Nc(o)||t.set(o,{opacity:0}),Tp(o,n)));s.forEach(o=>{t.set(o.lines,{yPercent:110}),wp(o),Nc(o.element)||t.set(o.element,{opacity:1})}),i.dataset.textReady="true",r&&(Ep(s),Ic(s))}function To(i=document){i!=null&&i.dataset&&delete i.dataset.textReady,Ii(i).forEach(Ap)}function Ac(i=document){const e=window.gsap;if(!e||!i)return Promise.resolve();const t=Ii(i).map(r=>Rn.get(r)).filter(Boolean),n=t.flatMap(r=>r.lines);return n.length?(t.forEach(Dc),Promise.all([Rp(t),e.to(n,{yPercent:-110,duration:pt.out.duration,ease:pt.out.ease,stagger:pt.out.lineStagger})])):Promise.resolve()}function wc(i=document,e={}){if(!window.gsap||!i)return Promise.resolve();const n=Ii(i).filter(Ao).map(r=>Rn.get(r)).filter(Boolean);return n.length?Pc(n,{delay:e.delay||0,duration:pt.aos.duration,ease:pt.aos.ease,stagger:pt.aos.lineStagger}):Promise.resolve()}function Rc(i=document,e={}){if(!window.gsap||!i)return Promise.resolve();const n=Ii(i).map(r=>Rn.get(r)).filter(Boolean).filter(r=>e.force||!r.inDone);return n.length?Pc(n,{duration:e.duration??pt.aos.duration,ease:e.ease||pt.aos.ease,delay:e.delay||0,stagger:e.stagger??pt.aos.lineStagger}):Promise.resolve()}function Cc(i=document){const e=Ii(i).map(t=>Rn.get(t)).filter(Boolean).filter(t=>!t.inDone);Ic(e)}function Ep(i){const e=window.gsap;i.filter(n=>n.loadIndex!==null).sort((n,r)=>n.loadIndex-r.loadIndex).forEach(n=>{e.to(n.lines,{yPercent:0,opacity:1,duration:pt.load.duration,ease:pt.load.ease,delay:(n.loadIndex-1)*pt.load.groupStagger,stagger:pt.load.lineStagger,onStart:()=>{n.inDone=!0},onComplete:()=>{wo(n)}})})}function Pc(i,e={}){const t=window.gsap,n=i.filter(r=>r.lines.length).map(r=>t.to(r.lines,{yPercent:0,opacity:1,duration:e.duration,ease:e.ease,delay:e.delay||0,stagger:e.stagger||0,onStart:()=>{r.inDone=!0},onComplete:()=>{wo(r)}}));return Promise.all(n)}function Ic(i){if(!window.ScrollTrigger){i.filter(e=>e.loadIndex===null).forEach(Jr);return}i.filter(e=>e.loadIndex===null).forEach(e=>{e.trigger=window.ScrollTrigger.create({trigger:e.element,start:pt.aos.start,once:!0,onEnter:()=>Jr(e),onRefresh:()=>{Ao(e.element)&&Jr(e)}}),Ao(e.element)&&Jr(e)})}function Jr(i){const e=window.gsap;!e||i.inDone||(i.inDone=!0,e.to(i.lines,{yPercent:0,opacity:1,duration:pt.aos.duration,ease:pt.aos.ease,stagger:pt.aos.lineStagger,onComplete:()=>{wo(i)}}))}function Ao(i){const e=i.getBoundingClientRect();return e.top-bp(i.closest("[data-barba='container']"))<window.innerHeight*.95&&e.bottom>0}function bp(i){if(!i)return 0;const e=window.getComputedStyle(i).transform;return!e||e==="none"?0:new DOMMatrixReadOnly(e).m42}function Tp(i,e){if(Rn.has(i))return Rn.get(i);const t=new e(i,{type:"lines,words",linesClass:"text-reveal-line"}),n=t.lines.map(Cp),r=Number(i.dataset.textLoad),s={element:i,split:t,lines:n,trigger:null,inDone:!1,isUnderlineLink:Pp(i),loadIndex:Number.isFinite(r)&&r>0?r:null};return i.dataset.textRoot="",Rn.set(i,s),s}function Ap(i){var t,n;const e=Rn.get(i);e&&((t=e.trigger)==null||t.kill(),(n=e.split)==null||n.revert(),delete i.dataset.textRoot,Lc(e),Rn.delete(i))}function wp(i){i!=null&&i.isUnderlineLink&&(i.element.dataset.underlineReady="false",i.element.style.setProperty("--mm-underline-scale","0"),i.element.style.setProperty("--mm-underline-origin","left center"),i.lines.forEach(e=>Qr(e,"hidden")))}function Rp(i){const e=window.gsap,t=i.filter(n=>n==null?void 0:n.isUnderlineLink);return t.length?(t.forEach(n=>{const r=n.element.matches(":hover"),s=Ro(n.element)&&n.element.dataset.underlineClicked==="true";if(Dc(n),s){n.skipUnderlineOut=!0;return}n.element.dataset.underlineHovered=String(r),n.element.dataset.underlineLeaving="true",n.element.dataset.underlineReady="false",n.element.style.setProperty("--mm-underline-origin","right center"),e==null||e.killTweensOf(n.element),n.skipUnderlineOut=!1,!Ro(n.element)&&r&&n.element.style.setProperty("--mm-underline-scale","1")}),e?Promise.all(t.filter(n=>!n.skipUnderlineOut).map(n=>e.to(n.element,{"--mm-underline-scale":0,duration:pt.underline.duration,ease:pt.underline.outEase,overwrite:!0}))):(t.forEach(Lc),Promise.resolve())):Promise.resolve()}function wo(i){const e=window.gsap;if(i!=null&&i.isUnderlineLink){if(i.lines.forEach(t=>Qr(t,"visible")),delete i.element.dataset.underlineLeaving,i.element.dataset.underlineReady="true",i.element.style.setProperty("--mm-underline-origin","left center"),!Ro(i.element)){i.element.style.setProperty("--mm-underline-scale","0");return}if(!e){i.element.style.setProperty("--mm-underline-scale","1");return}e.to(i.element,{"--mm-underline-scale":1,duration:pt.underline.duration,ease:pt.underline.inEase,overwrite:!0})}}function Lc(i){i!=null&&i.isUnderlineLink&&(i.element.dataset.underlineReady="false",delete i.element.dataset.underlineLeaving,delete i.element.dataset.underlineHovered,delete i.element.dataset.underlineClicked,delete i.element.dataset.underlineClickedHovered,delete i.skipUnderlineOut,i.element.style.setProperty("--mm-underline-scale","0"),i.element.style.setProperty("--mm-underline-origin","left center"),i.lines.forEach(e=>Qr(e,"hidden")))}function Dc(i){i.lines.forEach(e=>Qr(e,"hidden"))}function Qr(i,e){const t=i.closest(".text-reveal-mask");t&&(t.style.overflow=e)}function Cp(i){const e=document.createElement("span");return e.className="text-reveal-mask",e.style.display="block",e.style.overflow="hidden",e.style.textAlign="inherit",i.style.display="block",i.style.textAlign="inherit",i.parentNode.insertBefore(e,i),e.appendChild(i),i}function Ii(i){const e=[...i.querySelectorAll(Sc)].filter(t=>t.dataset.textAnimate==="false"||t.closest("[data-text-animate='false'], .spinner_group, .off, [hidden]")?!1:t.textContent.trim().length>0);return e.filter(t=>!e.some(n=>n!==t&&t.contains(n)))}function Nc(i){return i.classList.contains("filter")}function Pp(i){var e;return(e=i.matches)==null?void 0:e.call(i,"[data-underline-link]")}function Ro(i){var e;return((e=i.getAttribute)==null?void 0:e.call(i,"data-underline-link"))==="alt"}const Ip="https://methodmadness.slateapp.com/api/v1",Lp="30a62480f9e645c6a15f706c3b2d14b2",Dp="2857",Uc={s:1.1,m:1.2,l:1.3},Np=500,Up=28,Op=-4,Fp=4,Oc="110%",Bp=.35,kp="power3.out",Hp=.6,Vp=.3,zp=.45,Gp=.5,Wp='[data-vid="title"], [data-vid="client"], [data-vid="director"]',Xp="(min-width: 992px)",Co=new Map,Po=new WeakMap,jn=new WeakMap,es=new WeakMap,ts=new WeakMap;function qp(i=document,e={}){const t=ig();Bc(i);const n=[...Kp(i,t),...Zp(i,t,e),...em(i,t),...tm(i,t,e),...$p(i,t),...Sm(i,t)];return Promise.allSettled(n).then(r=>(i!=null&&i.dataset&&(i.dataset.shotsReady="true"),r))}function Yp(i=document){Bc(i),i.querySelectorAll("video").forEach(t=>{t.pause()});const e=document.querySelector("[data-shots-modal]");e&&!i.contains(e)&&Oo(e)}function Fc(i=document,e={}){i.querySelectorAll("[data-showreel-stream]").forEach(t=>{const n=t.querySelector(".vid_stream_inner");n&&xm(t,n,e)})}function Bc(i=document){var t;i.querySelectorAll('[data-shots="hero"]').forEach(n=>{var r;(r=Po.get(n))==null||r.stop(),Po.delete(n),delete n.dataset.shotsHeroInit}),i.querySelectorAll("[data-featured-list]").forEach(n=>{delete n.dataset.shotsFeaturedInit}),((t=i.matches)!=null&&t.call(i,'[data-barba="container"]')?[i,...i.querySelectorAll('[data-barba="container"]')]:[...i.querySelectorAll('[data-barba="container"]')]).forEach(n=>{delete n.dataset.shotsReady,delete n.dataset.shotsWorkGridInit,delete n.dataset.workGridVisible,delete n.dataset.workGridReady}),i.querySelectorAll("[data-showreel-stream]").forEach(n=>{var r;(r=es.get(n))==null||r.stop(),es.delete(n),delete n.dataset.shotsShowreelStreamInit}),i.querySelectorAll(".featured .vid-panel, .featured.vid-panel, .featured .vid-panels, .featured.vid-panels, [data-showreel-stream] .vid-panel").forEach(n=>{var r;(r=jn.get(n))==null||r.stop(),jn.delete(n)})}function Kp(i,e){return[...i.querySelectorAll('[data-shots="hero"]')].map(t=>{const n=Am(t);if(n.length>0)return bm(t,n,e);const r=t.dataset.shotsWork||Dp;return Cn(`work/${r}`,e).then(s=>Mm(t,s)).catch(s=>console.warn(`[shots] Could not load hero work ${r}.`,s))})}function jp(i=document){i.querySelectorAll(".vid-panel").forEach(e=>{var t,n;(n=(t=jn.get(e))==null?void 0:t.freeze)==null||n.call(t)})}function $p(i,e){return[...i.querySelectorAll("[data-shots-work]")].map(t=>{const n=t.dataset.shotsWork;return n?Cn(`work/${n}`,e).then(r=>No(t,r)).catch(r=>console.warn(`[shots] Could not load work ${n}.`,r)):Promise.resolve()})}function Zp(i,e,t={}){return[...i.querySelectorAll("[data-featured-list]")].map(n=>{if(n.dataset.shotsFeaturedInit==="true")return Promise.resolve();n.dataset.shotsFeaturedInit="true";const r=qc(n),s=n.closest('[data-barba="container"]')||document,o=!!s.querySelector("[data-director-list]")||!!s.querySelector("[data-editors-list]"),a=Jp(s),l=a.flat();return r.length===0||l.length===0?Promise.resolve():o?Qp(s,e,t):Promise.all(r.map(c=>Cn(`work/${c.id}`,e).then(u=>({...c,work:u,snippetUrl:Di(u)||Qt(u),fullVideoUrl:Qt(u)})).catch(u=>(console.warn(`[shots] Could not load featured work ${c.id}.`,u),null)))).then(c=>{const u=c.filter(Boolean).filter(d=>d.snippetUrl).slice(0,kc(a));a.forEach(d=>{d.forEach((h,f)=>{const g=u[f];h.hidden=!g,g&&ns(h,g.work,g.snippetUrl,g.fullVideoUrl,f,{reveal:!1})})}),a.forEach(d=>{zc(d.filter(h=>!h.hidden),t.transition)})}).catch(c=>console.warn("[shots] Could not load featured work.",c))})}function Jp(i){const e=[...i.querySelectorAll(".featured .grid.features")];return e.length?e.map(t=>[...t.querySelectorAll(".vid-panel, .vid-panels")]).filter(t=>t.length):[[...i.querySelectorAll(".featured .vid-panel, .featured.vid-panel, .featured .vid-panels, .featured.vid-panels")]]}function kc(i){return Math.max(...i.map(e=>e.length),0)}function Hc(){var i,e;return((e=(i=window.matchMedia)==null?void 0:i.call(window,Xp))==null?void 0:e.matches)??!0}function Vc(){return!Hc()}function Qp(i,e,t={}){if(i.dataset.shotsWorkGridInit==="true")return Promise.resolve();i.dataset.shotsWorkGridInit="true";const n=cm(i),r=n.flatMap(a=>a.panels),s=qc(i.querySelector("[data-featured-list]")).map(a=>a.id),o=[...Yc(i.querySelector("[data-director-list]")),...Yc(i.querySelector("[data-editors-list]"))];return n.length===0||r.length===0||s.length===0&&o.length===0?Promise.resolve():Promise.allSettled([...s.map(a=>Cn(`work/${a}`,e)),...o.map(a=>Cn(`showreel/${a}`,e).then(jc))]).then(a=>{const l=Cm(Pm(a.flatMap(d=>d.status!=="fulfilled"?[]:Array.isArray(d.value)?d.value:[d.value]))).filter(d=>Di(d)||Qt(d)),c=kc(n.map(d=>d.panels)),u=c*2;i.dataset.workGridBatch=String(c),i.dataset.workGridInitial=String(u),mm(i,l,()=>Lo(i,n,l,c,u,{transition:!0})),Lo(i,n,l,c,u,{transition:t.transition})}).catch(a=>console.warn("[shots] Could not load work grid.",a))}function em(i,e){return[...i.querySelectorAll("[data-direct-id]")].map(t=>{var s;const n=(s=t.dataset.directId)==null?void 0:s.trim();if(!n)return Promise.resolve();const r=t.closest(".vid-panel")||t.parentElement;return r?Cn(`work/${n}`,e).then(o=>ns(r,o,Di(o)||Qt(o),Qt(o),0,{eagerPoster:!0,autoplayInView:!0})).catch(o=>console.warn(`[shots] Could not load direct video ${n}.`,o)):Promise.resolve()})}function tm(i,e,t={}){return[...i.querySelectorAll("[data-showreel-stream]")].map(n=>{var a;if(n.dataset.shotsShowreelStreamInit==="true")return Promise.resolve();const r=Um(n);if(!r)return Promise.resolve();n.closest('[data-barba="container"]');const s=n.querySelector(".vid_stream_inner"),o=(a=s==null?void 0:s.querySelector(".vid-panel"))==null?void 0:a.cloneNode(!0);return!s||!o?Promise.resolve():Cn(`showreel/${r}`,e).then(l=>{const c=jc(l).map(u=>({work:u,snippetUrl:Di(u)||Qt(u),fullVideoUrl:Qt(u)})).filter(u=>u.snippetUrl);nm(n,s,o,c,{loop:Hc()}),n.dataset.shotsShowreelStreamInit="true"}).catch(l=>{delete n.dataset.shotsShowreelStreamInit,console.warn(`[shots] Could not load showreel stream ${r}.`,l)})})}function nm(i,e,t,n,r={}){if(i.querySelectorAll("[data-showreel-clone]").forEach(s=>s.remove()),console.log("[shots] showreel stream items",n.length),n.length===0){e.hidden=!0;return}if(e.hidden=!1,e.replaceChildren(),r.loop&&Io(e,t,n,"before"),Io(e,t,n,"primary"),r.loop){Io(e,t,n,"after");const s=im(i,e),o=rm(i);es.set(i,{stop(){s.stop(),o.stop()}})}else es.set(i,{stop(){}})}function Io(i,e,t,n){t.forEach((r,s)=>{const o=am(e);o.dataset.showreelSet=n,n!=="primary"&&(o.dataset.showreelClone=""),i.append(o),ns(o,r.work,r.snippetUrl,r.fullVideoUrl,s,{eagerPoster:!0,parallax:!1,reveal:!1})})}function im(i,e){const t={passive:!0,capture:!0};let n=0,r=!1;sm(),i.style.overflowY="auto",i.style.overflowX="hidden",i.style.scrollbarWidth="none",i.style.overscrollBehavior="contain",i.style.webkitOverflowScrolling="touch",i.style.minHeight="0",i.style.height="100vh",i.style.maxHeight="100vh",i.setAttribute("data-lenis-prevent",""),i.tabIndex||(i.tabIndex=0);const s=l=>{l.stopPropagation()},o=l=>{l.stopPropagation()},a=()=>{r||n<=0||(i.scrollTop>=n*1.75?(r=!0,i.scrollTop-=n,r=!1):i.scrollTop<=n*.25&&(r=!0,i.scrollTop+=n,r=!1))};return i.addEventListener("wheel",s,t),i.addEventListener("touchmove",o,t),i.addEventListener("scroll",a,{passive:!0}),requestAnimationFrame(()=>{n=om(e),n>0&&(r=!0,i.scrollTop=n,r=!1)}),{stop(){i.removeEventListener("wheel",s,t),i.removeEventListener("touchmove",o,t),i.removeEventListener("scroll",a),i.style.overflowY="",i.style.overflowX="",i.style.scrollbarWidth="",i.style.overscrollBehavior="",i.style.webkitOverflowScrolling="",i.style.minHeight="",i.style.height="",i.style.maxHeight="",i.removeAttribute("data-lenis-prevent")}}}function rm(i){const e=i.closest(".directors_page_holder")||i.closest(".grid.directors")||i.closest('[data-barba="container"]')||document;let t=null;const n=o=>{var a,l;(l=(a=o.target).closest)!=null&&l.call(a,"[data-showreel-stream]")||(i.scrollTop+=o.deltaY,o.preventDefault())},r=o=>{var a,l;t=((l=(a=o.touches)==null?void 0:a[0])==null?void 0:l.clientY)??null},s=o=>{var l,c,u,d;if((c=(l=o.target).closest)!=null&&c.call(l,"[data-showreel-stream]")||t===null)return;const a=((d=(u=o.touches)==null?void 0:u[0])==null?void 0:d.clientY)??t;i.scrollTop+=t-a,t=a,o.preventDefault()};return e.addEventListener("wheel",n,{passive:!1}),e.addEventListener("touchstart",r,{passive:!0}),e.addEventListener("touchmove",s,{passive:!1}),{stop(){e.removeEventListener("wheel",n),e.removeEventListener("touchstart",r),e.removeEventListener("touchmove",s)}}}function sm(){if(document.getElementById("mm-showreel-stream-style"))return;const i=document.createElement("style");i.id="mm-showreel-stream-style",i.textContent="[data-showreel-stream]::-webkit-scrollbar{display:none;}",document.head.append(i)}function om(i){const e=i==null?void 0:i.querySelector('[data-showreel-set="primary"]'),t=i==null?void 0:i.querySelector('[data-showreel-set="after"]');return!e||!t?0:Math.max(t.offsetTop-e.offsetTop,0)}function am(i){const e=i.cloneNode(!0);return e.removeAttribute("id"),e.querySelectorAll("[id]").forEach(t=>t.removeAttribute("id")),e.querySelectorAll('[data-vid="vid"]').forEach(t=>{t.style.clipPath="",t.style.webkitClipPath=""}),e.hidden=!1,e}function ns(i,e,t,n,r=0,s={}){var P;(P=jn.get(i))==null||P.stop(),jn.delete(i);const o=i.querySelector('[data-vid="vid"]'),a=i.querySelector(".vid_holder")||o,l=i.querySelector(".vid_play_hover"),c=i.querySelector('[data-vid="title"]'),u=i.querySelector('[data-vid="client"]'),d=i.querySelector('[data-vid="director"]'),h=i.querySelector('[data-vid="time"]'),f=pu(e),g=e.title||"",_=du(uu(e)),m=cu(e);if(console.log("[shots] bind panel",{index:r,title:g,client:_,time:fu(hu(e)),hasVideoRoot:!!o,hasSnippet:!!t,hasFullVideo:!!n}),i.dataset.modalTitle=g,i.dataset.modalClient=_,i.dataset.modalDirector=m,Li(c,g),Li(u,_),$c(d,m,i),Li(h,fu(hu(e))),l&&(l.dataset.textAnimate="false"),!o)return;const p=ru(i),y=document.createElement("img");p.loop=!0,p.autoplay=!1,p.preload="none",p.style.display="none",y.src=f||"",y.alt=e.title||"",y.loading=s.eagerPoster?"eager":"lazy",s.eagerPoster&&(y.fetchPriority="high"),y.decoding="async",y.style.width="100%",y.style.height=s.parallax===!1?"100%":Oc,y.style.objectFit="cover",o.replaceChildren(y,p);const M=s.parallax===!1?null:lm(o),E=s.reveal===!1?null:vm(o,i)||_m(o,r),R=new AbortController,{signal:T}=R;let C=null,x=!1;const A=s.autoplayInView?eg(i,p,y,t):null;s.autoplayInView||(a.addEventListener("mouseenter",()=>{x=!0,clearTimeout(C),C=window.setTimeout(()=>{p.src||(p.src=t,p.load()),au(p,y,()=>x)},Np)},{signal:T}),a.addEventListener("mouseleave",()=>{x=!1,clearTimeout(C),p.pause(),p.currentTime=0,p.style.display="none",y.style.display=""},{signal:T})),a.addEventListener("click",()=>{Fm(n||t,e,i)},{signal:T}),jn.set(i,{freeze(){M==null||M.freeze()},stop(){R.abort(),clearTimeout(C),A==null||A.stop(),E==null||E.kill(),M==null||M.kill(),p.pause()}})}function lm(i){const e=window.gsap,t=window.ScrollTrigger,n=[...(i==null?void 0:i.querySelectorAll("img, video"))||[]];if(!e||!t||!i||n.length===0)return null;i.style.overflow="hidden",e.set(n,{height:Oc,yPercent:Op});const r=e.to(n,{yPercent:Fp,ease:"none",scrollTrigger:{trigger:i,start:"top bottom",end:"bottom top",scrub:.45}});return{freeze(){var s;(s=r.scrollTrigger)==null||s.kill(!1),r.kill()},kill(){var s;(s=r.scrollTrigger)==null||s.kill(!1),r.kill(),e.killTweensOf(n),i.style.overflow=""}}}function cm(i){return[...i.querySelectorAll(".featured .grid.features")].map(e=>({grid:e,panels:[...e.querySelectorAll(".vid-panel, .vid-panels")]})).filter(e=>e.panels.length)}function Lo(i,e,t,n,r,s={}){const o=Dm(i),a=Number(i.dataset.workGridVisible||r),l=o==="all"?t:t.filter(d=>Lm(d).includes(o)),c=l.slice(0,a),u=()=>{var h;const d=[];e.forEach(f=>{const g=dm(f.grid,f.panels,c.length,n);Gc(f.grid).forEach(m=>{var y;const p=Er(m);(y=jn.get(m))==null||y.stop(),jn.delete(m),m.hidden=!0,p&&(p.hidden=!0)}),g.forEach((m,p)=>{const y=c[p],M=Er(m);m.hidden=!y,M&&(M.hidden=!y),y&&(ns(m,y,Di(y)||Qt(y),Qt(y),p,{reveal:!1}),d.push(m))})}),i!=null&&i.dataset&&(i.dataset.shotsReady="true"),zc(d,s.transition),hm(i,um(e),l.length,c.length,n,()=>{i.dataset.workGridVisible=String(a+n),Lo(i,e,t,n,r,{transition:!0})}),(h=window.ScrollTrigger)==null||h.refresh()};if(s.transition){Promise.all(e.map(d=>fm(d.grid))).then(u);return}u()}function um(i){var e,t;return((e=i.find(({grid:n})=>{var s;const r=(s=window.getComputedStyle)==null?void 0:s.call(window,n);return(r==null?void 0:r.display)!=="none"&&n.getClientRects().length>0}))==null?void 0:e.grid)||((t=i[0])==null?void 0:t.grid)}function dm(i,e,t,n){const r=e.slice(0,n).map(s=>Er(s)||s).filter(Boolean);if(r.length===0)return e;for(;e.length<t;){const o=r[e.length%r.length].cloneNode(!0);delete o.dataset.shotsVideoReveal,o.querySelectorAll("[data-shots-video-reveal]").forEach(a=>{delete a.dataset.shotsVideoReveal}),i.append(o),e.push(o.matches(".vid-panel")?o:o.querySelector(".vid-panel"))}return e.filter(Boolean)}function hm(i,e,t,n,r,s){if(!e)return;let o=i.querySelector("[data-work-load-more]");o||(o=document.createElement("button"),o.type="button",o.dataset.workLoadMore="",o.textContent="Load more"),o.onclick=s,o.hidden=n>=t,o.disabled=n>=t,e.append(o)}function fm(i){const e=window.gsap,t=pm(i).filter(n=>!n.hidden);return!e||t.length===0?Promise.resolve():new Promise(n=>{e.to(t,{opacity:0,duration:.18,ease:"power1.out",overwrite:!0,onComplete:n})})}function zc(i,e=!1){var a;const t=window.gsap,n=i.map(Er).filter(Boolean),r=(a=i[0])==null?void 0:a.closest("[data-barba='container']"),s=i.map(l=>l.querySelector(".vid.backing")).filter(Boolean),o=i.map(l=>l.querySelector('[data-vid="vid"]')).filter(Boolean);if(!t){r!=null&&r.dataset&&(r.dataset.workGridReady="true"),n.forEach(l=>{l.style.opacity=""});return}r!=null&&r.dataset&&(r.dataset.workGridReady="true"),t.set(n,{opacity:1}),t.set(s,{y:18,opacity:0}),t.set(o,{clipPath:Wt(0),webkitClipPath:Wt(0)}),t.to(s,{y:0,opacity:1,duration:.7,ease:"power3.out",stagger:.035,delay:e?0:.08,overwrite:!0}),t.to(o,{clipPath:Wt(1),webkitClipPath:Wt(1),duration:.55,ease:"power4.out",stagger:.04,delay:e?.04:.12,overwrite:!0})}function Gc(i){return[...i.querySelectorAll(".vid-panel")]}function pm(i){return Gc(i).map(Er).filter(Boolean)}function Er(i){return(i==null?void 0:i.closest(".vid_container"))||i||null}function mm(i,e,t){const n=[...i.querySelectorAll(".filter")],r=Im(e);if(n.length===0)return;n.forEach(Wc);const s=gm(i.dataset.workGridCategory||"all",r);i.dataset.workGridCategory=s,n.forEach((o,a)=>{const l=a===0?{label:"All",slug:"all"}:r[a-1];if(!l){o.hidden=!0,Wc(o);return}o.hidden=!1,o.dataset.filter=l.slug,o.textContent=Nm(l.label),o.dataset.workFilterReady!=="true"&&(o.dataset.workFilterReady="true",o.addEventListener("click",c=>{c.preventDefault();const u=c.currentTarget;Do(i,u.dataset.filter||"all"),i.dataset.workGridVisible=i.dataset.workGridInitial||i.dataset.workGridBatch||"15",t(),Do(i,i.dataset.workGridCategory||"all")}))}),Do(i,s)}function Do(i,e){const t=e||"all";i.dataset.workGridCategory=t,i.querySelectorAll(".filter").forEach(n=>{const r=n.dataset.filter===t;n.classList.toggle("active",r),n.style.opacity=r?"1":"0.4",n.setAttribute("aria-pressed",String(r))})}function Wc(i){i.classList.remove("active"),i.style.opacity="0.4",i.setAttribute("aria-pressed","false")}function gm(i,e){return new Set(["all",...e.map(n=>n.slug)]).has(i)?i:"all"}function _m(i,e=0){const t=window.gsap;if(!t||!i)return null;const n={progress:0};t.set(i,{clipPath:Wt(n.progress),webkitClipPath:Wt(n.progress)});const r=t.to(n,{progress:1,duration:.6,ease:"power4.Out",delay:.12+e*.04,paused:!0,onUpdate:()=>{i.style.clipPath=Wt(n.progress),i.style.webkitClipPath=Wt(n.progress)}}),s=window.ScrollTrigger?window.ScrollTrigger.create({trigger:i,start:"top 96%",once:!0,onEnter:()=>r.play()}):null;return s||r.play(),{kill(){s==null||s.kill(),r.kill(),t.set(i,{clearProps:"clipPath,webkitClipPath"})}}}function vm(i,e){const t=window.gsap,n=i==null?void 0:i.closest(".showreel_vid_holder");if(!t||!n||!n.closest(".footer"))return null;const r=n.offsetWidth||n.getBoundingClientRect().width;if(!r)return null;t.set(i,{clearProps:"clipPath,webkitClipPath"}),t.set(n,{width:0,overflow:"hidden"}),t.set(e,{scale:0,transformOrigin:"50% 50%"});const s=t.to(n,{width:r,duration:.8,ease:"power3.inOut",paused:!0,overwrite:!0,onComplete:()=>{var c;t.set(n,{clearProps:"width,overflow"}),t.set(e,{clearProps:"scale,transformOrigin"}),(c=window.ScrollTrigger)==null||c.refresh()}}),o=t.to(e,{scale:1,duration:.8,ease:"power3.inOut",paused:!0,overwrite:!0}),a=()=>{s.play(),o.play()},l=window.ScrollTrigger?window.ScrollTrigger.create({trigger:n,start:"top 130%",once:!0,onEnter:a}):null;return l||a(),{kill(){l==null||l.kill(),s.kill(),o.kill(),t.set(i,{clearProps:"clipPath,webkitClipPath"}),t.set(n,{clearProps:"width,overflow"}),t.set(e,{clearProps:"scale,transformOrigin"})}}}function xm(i,e,t={}){const n=window.gsap,r=[...e.querySelectorAll('[data-vid="vid"]')],s=(t.delay??.15)+2.7;Rc(e,{delay:t.delay??.15,force:!0,stagger:.035}),!(!n||r.length===0)&&(ym(i,s),n.to(i,{scrollTop:i.scrollTop+window.innerHeight*3.6,duration:2.4,ease:"power4.out",delay:0}),n.set(r,{clipPath:Wt(0),webkitClipPath:Wt(0)}),n.to(r,{clipPath:Wt(1),webkitClipPath:Wt(1),duration:.8,ease:"power3.inOut",stagger:.06,delay:t.delay??.15}))}function ym(i,e){i&&(window.clearTimeout(Number(i.dataset.pointerHoldTimer||0)),i.style.pointerEvents="none",i.dataset.pointerHoldTimer=String(window.setTimeout(()=>{i.style.pointerEvents="",delete i.dataset.pointerHoldTimer},e*1e3)))}function Wt(i){return`inset(${100-i*100}% 0% 0% 0%)`}function Sm(i,e){return[...i.querySelectorAll("[data-shots-showreel]")].map(t=>{const n=t.dataset.shotsShowreel,r=t.querySelector("[data-shots-template]");return!n||!r?Promise.resolve():(r.hidden=!0,Cn(`showreel/${n}`,e).then(s=>{var o;t.querySelectorAll("[data-shots-item]").forEach(a=>a.remove()),(o=s.media)==null||o.forEach(a=>{const l=r.cloneNode(!0);l.hidden=!1,l.removeAttribute("data-shots-template"),l.dataset.shotsItem="",No(l,a),r.before(l)})}).catch(s=>console.warn(`[shots] Could not load showreel ${n}.`,s)))})}function No(i,e){const t=Qt(e),n=pu(e);i.querySelectorAll("[data-shots-title]").forEach(s=>{Li(s,e.title||"")}),i.querySelectorAll("[data-shots-poster]").forEach(s=>{s instanceof HTMLImageElement?(s.src=n||"",s.alt||(s.alt=e.title||"")):n&&(s.style.backgroundImage=`url("${n}")`)}),(i instanceof HTMLVideoElement?[i]:[...i.querySelectorAll("video[data-shots-video]")]).forEach(s=>{t&&(s.src=t,s.poster=n||"",s.playsInline=!0,s.preload||(s.preload="metadata"),lu(s),s.hasAttribute("data-shots-autoplay")&&(s.muted=!0,s.autoplay=!0,s.loop=!0,s.play().catch(()=>{})))})}function Mm(i,e){i.replaceChildren();const t=document.createElement("video");t.dataset.shotsVideo="",t.dataset.shotsAutoplay="",t.dataset.shotsFit=i.dataset.shotsFit||"cover",t.muted=!0,t.loop=!0,t.autoplay=!0,t.playsInline=!0,t.controls=i.dataset.shotsControls==="true",t.preload="metadata";const n=document.createElement("div");n.dataset.shotsTitle="",i.append(t,n),No(i,e)}function Em(i,e){const t=Uc[String(e||"").toLowerCase()];if(!t){i.style.height="100%",i.style.transform="";return}const n=(t-1)/t/2*100;i.style.height=`${t*100}%`,i.style.transform=`translateY(-${n.toFixed(3)}%)`}async function bm(i,e,t){if(i.dataset.shotsHeroInit==="true")return;const n=i.querySelector('[data-bgvid="true"]'),r=i.querySelector("[data-hero-directors]");if(!n||!r)return;const s=[...r.querySelectorAll(".h_director_holder")],a=(await Promise.all(e.map(_=>Cn(`work/${_.id}`,t).then(m=>({..._,work:m,videoUrl:Di(m)||Qt(m)})).catch(m=>(console.warn(`[shots] Could not load hero work ${_.id}.`,m),null))))).filter(_=>_==null?void 0:_.videoUrl).slice(0,s.length);if(a.length===0)return;i.dataset.shotsHeroInit="true";const l=ru(i);n.replaceChildren(l);const c=Tm(i,n);s.forEach((_,m)=>{const p=a[m];_.hidden=!p,p&&su(_)}),Zm(s);let u=0;const d={id:0},h={stop(){cancelAnimationFrame(d.id),l.pause(),l.onended=null}};Po.set(i,h),l.addEventListener("play",()=>{ou(l,s[u%a.length],d)});function f(){if(!i.isConnected)return;const _=a[u%a.length],m=s[u%a.length];cancelAnimationFrame(d.id),$m(s),Jm(s,m),Em(l,_.size),l.src=_.videoUrl,l.load(),l.onended=()=>{i.isConnected&&(cancelAnimationFrame(d.id),u+=1,f())},Qm(l),ou(l,m,d)}const g=()=>{!i.isConnected||!l.src||(document.hidden?l.pause():l.play().catch(()=>{}))};document.addEventListener("visibilitychange",g),h.stop=()=>{cancelAnimationFrame(d.id),l.pause(),l.onended=null,c==null||c.kill(),document.removeEventListener("visibilitychange",g)},f()}function Tm(i,e){const t=window.gsap,n=window.ScrollTrigger;if(!t||!n||!i||!e)return null;t.set(e,{yPercent:0});const r=t.to(e,{yPercent:Up,ease:"none",scrollTrigger:{trigger:i,start:"top top",end:"bottom top",scrub:!0}});return{kill(){var s;(s=r.scrollTrigger)==null||s.kill(),r.kill(),t.set(e,{clearProps:"yPercent"})}}}function Am(i){const e=i.querySelector("[data-hero-directors]");return e?[...e.querySelectorAll(".h_director_holder")].map(t=>{const n=Xc(t),r=wm(n),s=Number(t.dataset.order||t.dataset.sort||r.order),o=t.dataset.id||t.dataset.workId||r.id;return{order:s,id:o,size:r.size}}).filter(t=>Number.isFinite(t.order)&&t.order>0&&t.id).sort((t,n)=>t.order-n.order):Rm(i)}function wm(i){const e=i.map(r=>String(r||"").trim()).filter(Boolean),t=e.map(r=>r.toLowerCase()).find(r=>Object.hasOwn(Uc,r))||"",n=e.filter(r=>/^\d+$/.test(r));return{order:n[0],id:n[1],size:t}}function Rm(i){return i?[...i.querySelectorAll(".w-dyn-item")].map(e=>{const t=Xc(e);return{order:Number(e.dataset.order||e.dataset.sort||t[0]),id:e.dataset.id||e.dataset.workId||t[1]}}).filter(e=>e.order&&e.id).sort((e,t)=>e.order-t.order):[]}function Xc(i){return[...i.children].filter(e=>!e.matches("a")).map(e=>e.textContent.trim()).filter(Boolean)}function qc(i){return i?[...i.querySelectorAll(".w-dyn-item")].map((e,t)=>{const n=[...e.children].map(s=>s.textContent.trim()).filter(Boolean),r=Number(e.dataset.order||e.dataset.sort||n[1]);return{id:e.dataset.id||e.dataset.workId||n[0],order:Number.isFinite(r)?r:null,index:t}}).filter(e=>e.id).sort((e,t)=>e.order!==null&&t.order!==null?t.order-e.order:e.order!==null?-1:t.order!==null?1:e.index-t.index):[]}function Yc(i){return i?[...i.querySelectorAll(".w-dyn-item")].flatMap(e=>[...e.children].map(t=>t.textContent.trim()).filter(Boolean)).filter(e=>/^\d+$/.test(e)):[]}function Cm(i){const e=new Set;return i.filter(t=>{const n=String((t==null?void 0:t.id)||"").trim();return!n||e.has(n)?!1:(e.add(n),!0)})}function Pm(i){const e=[...i];for(let t=e.length-1;t>0;t-=1){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function Im(i){const e=new Map;return i.forEach(t=>{Kc(t).forEach(n=>{const r=Uo(n);r&&e.set(r,{label:n,slug:r})})}),[...e.values()].sort((t,n)=>t.label.localeCompare(n.label))}function Lm(i){return Kc(i).map(Uo).filter(Boolean)}function Kc(i){const e=i==null?void 0:i.categories;return Array.isArray(e)?e.map(t=>(t==null?void 0:t.name)||t).map(t=>String(t||"").trim()).filter(Boolean):e&&typeof e=="object"?Object.values(e).map(t=>(t==null?void 0:t.name)||t).map(t=>String(t||"").trim()).filter(Boolean):[]}function Dm(i){if(i.dataset.workGridCategory)return i.dataset.workGridCategory;const e=i.querySelector(".filter.active");return(e==null?void 0:e.dataset.filter)||Uo(e==null?void 0:e.textContent)||"all"}function Uo(i){return String(i||"").trim().toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}function Nm(i){return String(i||"").trim().toLowerCase().replace(/\b[a-z]/g,e=>e.toUpperCase())}function Um(i){var e,t;return(i.dataset.showreelId||((e=i.closest("[data-showreel-id]"))==null?void 0:e.dataset.showreelId)||((t=i.closest('[data-barba="container"]'))==null?void 0:t.dataset.showreelId)||"").trim()}function jc(i){return Array.isArray(i==null?void 0:i.clips)?i.clips:Array.isArray(i==null?void 0:i.media)?i.media:[]}function Li(i,e){if(!i)return;const t=i.style.textAlign||window.getComputedStyle(i).textAlign;i.textContent=e||"",t&&(i.style.textAlign=t)}function $c(i,e,t=document){if(!i)return;const n=i.style.textAlign||window.getComputedStyle(i).textAlign,r=Om(t).get(Zc(e));if(i.replaceChildren(),r){const s=document.createElement("a");s.href=r.href,s.textContent=e||"",s.dataset.underlineLink="alt",s.className=i.className,s.style.color="inherit",s.style.textDecoration="none",i.append(s)}else i.textContent=e||"";n&&(i.style.textAlign=n)}function Om(i=document){var n,r;const e=((n=i==null?void 0:i.closest)==null?void 0:n.call(i,'[data-barba="container"]'))||((r=i==null?void 0:i.querySelector)==null?void 0:r.call(i,'[data-barba="container"]'))||document.querySelector('[data-barba="container"]')||document,t=new Map;return e.querySelectorAll("[data-links='directors'], [data-links='editors']").forEach(s=>{s.querySelectorAll(".w-dyn-item, [role='listitem'], li, div").forEach(o=>{var u,d,h,f,g;const a=(h=(d=(u=o.querySelector)==null?void 0:u.call(o,"[data-link-name]"))==null?void 0:d.textContent)==null?void 0:h.trim(),l=(f=o.querySelector)==null?void 0:f.call(o,"[data-link-link]"),c=(g=l==null?void 0:l.getAttribute)==null?void 0:g.call(l,"href");a&&c&&t.set(Zc(a),{href:c,name:a})})}),t}function Zc(i){return String(i||"").toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g," ").trim().replace(/\s+/g," ")}function Fm(i,e={},t=null){if(!i)return;const n=Xm(),r=qm(n),s=ko(n),o=Hm(e,t),a=Jc(n);To(a),Qc(n),Vm(n,o),zm(Fo(n)),n.hidden=!1,n.style.display="flex",n.style.alignItems="center",n.style.justifyContent="center",n.style.pointerEvents="auto",n.setAttribute("aria-hidden","false"),Bm(n),r.src=i,r.muted=!1,r.controls=!0,r.loop=!1,r.currentTime=0,r.onloadedmetadata=()=>{Km(r)},r.play().catch(()=>{}),iu(n,1,{duration:Hp}),km(n),jm(s)}function Oo(i){var n;const e=i.querySelector("video[data-shots-modal-video]"),t=i.querySelector('[data-vid="player"]');(n=window.gsap)==null||n.killTweensOf(t),iu(i,0).then(()=>{e&&(e.pause(),e.removeAttribute("src"),e.load()),i.hidden=!0,i.style.display="none",i.style.alignItems="",i.style.justifyContent="",i.style.pointerEvents="none",i.setAttribute("aria-hidden","true"),Qc(i),Gm(Fo(i))})}function Bm(i){const e=window.gsap,t=Fo(i);if(!e||t.length===0)return;const n=t.map(r=>Wm(r,e));ts.set(i,n.filter(Boolean))}function km(i){const e=window.gsap,n=(ts.get(i)||[]).map(r=>r.line).filter(Boolean);return!e||n.length===0?Promise.resolve():e.to(n,{yPercent:0,opacity:1,duration:zp,ease:"power3.out",delay:Vp,stagger:.025})}function Jc(i){return i.querySelector(".modal_footer")||i}function Fo(i){return[...Jc(i).querySelectorAll(Wp)]}function Hm(i,e=null){var l,c,u;const t=((l=e==null?void 0:e.dataset)==null?void 0:l.modalTitle)||"",n=((c=e==null?void 0:e.dataset)==null?void 0:c.modalClient)||"",r=((u=e==null?void 0:e.dataset)==null?void 0:u.modalDirector)||"",s=Bo(e,'[data-vid="title"]'),o=Bo(e,'[data-vid="client"]'),a=Bo(e,'[data-vid="director"]');return{title:t||s||i.title||"",client:n||o||du(uu(i)),director:r||a||cu(i)}}function Bo(i,e){var t,n;return((n=(t=i==null?void 0:i.querySelector(e))==null?void 0:t.textContent)==null?void 0:n.trim())||""}function Vm(i,e){Li(i.querySelector('[data-vid="title"]'),e.title),Li(i.querySelector('[data-vid="client"]'),e.client),$c(i.querySelector('[data-vid="director"]'),e.director,document)}function zm(i){var e;(e=window.gsap)==null||e.set(i,{opacity:0})}function Gm(i){var e;(e=window.gsap)==null||e.set(i,{clearProps:"opacity"})}function Qc(i){const e=window.gsap;(ts.get(i)||[]).forEach(n=>{var r,s;if(e==null||e.killTweensOf(n.line),(r=n.mask)!=null&&r.parentNode&&n.element){for(;(s=n.line)!=null&&s.firstChild;)n.element.appendChild(n.line.firstChild);n.mask.remove()}e==null||e.set(n.element,{clearProps:"opacity"})}),ts.delete(i)}function Wm(i,e){var s;if(!i||(s=i.parentElement)!=null&&s.classList.contains("text-reveal-mask"))return null;const t=i.style.textAlign||window.getComputedStyle(i).textAlign,n=document.createElement("span"),r=document.createElement("span");for(n.className="text-reveal-mask",n.style.display="block",n.style.overflow="hidden",n.style.textAlign=t||"inherit",r.className="text-reveal-line",r.style.display="block",r.style.textAlign=t||"inherit";i.firstChild;)r.appendChild(i.firstChild);return i.appendChild(n),n.appendChild(r),e.set(i,{opacity:1}),e.set(r,{yPercent:110,opacity:1}),{element:i,mask:n,line:r}}function Xm(){const i=document.querySelector(".modal_vid")||document.querySelector("[data-shots-modal]");if(i)return eu(i);const e=document.createElement("div"),t=document.createElement("button"),n=document.createElement("video");e.dataset.shotsModal="",e.hidden=!0,e.style.cssText="position:fixed;inset:0;z-index:9999;display:none;background:rgba(0,0,0,.92);align-items:center;justify-content:center;padding:4vw;",t.type="button",t.dataset.vid="close",t.dataset.shotsModalClose="",t.textContent="Close",t.style.cssText="position:absolute;top:20px;right:20px;z-index:1;color:#fff;background:transparent;border:1px solid currentColor;padding:8px 12px;cursor:pointer;",n.dataset.shotsModalVideo="",n.playsInline=!0;const r=tu(n);return r.className="modal_vid_holder",e.append(t,r),document.body.append(e),eu(e)}function eu(i){return i.dataset.modalDisplay||(i.dataset.modalDisplay=window.getComputedStyle(i).display==="none"?"flex":window.getComputedStyle(i).display),i.hidden=!0,i.style.display="none",i.style.opacity="0",i.style.pointerEvents="none",i.setAttribute("aria-hidden","true"),i.dataset.shotsModalReady==="true"||(i.dataset.shotsModalReady="true",i.querySelectorAll('[data-vid="close"], [data-shots-modal-close]').forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),Oo(i)})}),i.addEventListener("click",e=>{var t,n;(n=(t=e.target).closest)!=null&&n.call(t,'[data-vid="player"], .modal_footer, [data-vid="close"]')||Oo(i)}),i.querySelector("video[data-shots-modal-video]")||ko(i)),i}function qm(i){return i.querySelector("video[data-shots-modal-video]")||Ym(i)}function Ym(i){const e=ko(i),t=document.createElement("video");return t.dataset.shotsModalVideo="",t.playsInline=!0,t.style.width="100%",t.style.height="100%",t.style.objectFit="contain",e.replaceChildren(t),t}function ko(i){const e=i.querySelector('[data-vid="player"]');if(e)return e;const n=i.querySelector(".modal_vid_holder")||tu();if(n.dataset.vid="player",nu(n),!n.isConnected){const r=i.querySelector(".modal_footer");i.insertBefore(n,r||null)}return n}function tu(i){const e=document.createElement("div");return e.dataset.vid="player",nu(e),i&&(i.style.width="100%",i.style.height="100%",i.style.objectFit="contain",e.append(i)),e}function nu(i){i.style.width="min(90vw, 140vh)",i.style.maxWidth="100%",i.style.margin="auto",i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="center"}function Km(i){const e=i.closest('[data-vid="player"]');!e||!i.videoWidth||!i.videoHeight||(e.style.aspectRatio=`${i.videoWidth} / ${i.videoHeight}`)}function jm(i){const e=window.gsap;!i||!e||(e.killTweensOf(i),e.set(i,{opacity:0,scale:.9,transformOrigin:"50% 50%"}),e.to(i,{opacity:1,scale:1,duration:Bp,delay:Gp,ease:kp,overwrite:!0}))}function iu(i,e,t={}){const n=window.gsap;return n?n.to(i,{opacity:e,duration:t.duration??.2,ease:"power1.out"}):(i.style.opacity=String(e),Promise.resolve())}function ru(i){const e=document.createElement("video");return e.muted=!0,e.autoplay=!0,e.playsInline=!0,e.preload="auto",e.dataset.shotsFit=i.dataset.shotsFit||"cover",lu(e),e}function $m(i){i.forEach(su)}function Zm(i){const e=window.gsap;if(!Vc()){e==null||e.set(i,{clearProps:"opacity"});return}e==null||e.set(i,{opacity:0})}function Jm(i,e){const t=window.gsap;if(!Vc()){t==null||t.set(i,{clearProps:"opacity"});return}i.forEach(n=>{t==null||t.to(n,{opacity:n===e?1:0,duration:.25,ease:"power1.out",overwrite:!0})})}function su(i){const e=i==null?void 0:i.querySelector(".h_director_mask");e&&(e.style.width="0%")}function ou(i,e,t){const n=e==null?void 0:e.querySelector(".h_director_mask");if(!n)return;function r(){const s=Number.isFinite(i.duration)?i.duration:0,o=s>0?i.currentTime/s:0;n.style.width=`${Math.min(o,1)*100}%`,!i.paused&&!i.ended&&(t.id=requestAnimationFrame(r))}cancelAnimationFrame(t.id),t.id=requestAnimationFrame(r)}function Qm(i){if(i.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA){i.play().catch(()=>{});return}i.addEventListener("loadeddata",()=>{i.play().catch(()=>{})},{once:!0})}function au(i,e,t){const n=()=>{t()&&(e.style.display="none",i.style.display="",i.play().catch(()=>{}))};if(i.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA){n();return}i.addEventListener("loadeddata",n,{once:!0})}function eg(i,e,t,n){if(!n)return null;let r=!1;e.muted=!0,e.loop=!0,e.playsInline=!0,e.preload="metadata";const s=()=>{r=!0,e.src||(e.src=n,e.load()),au(e,t,()=>r)},o=()=>{r=!1,e.pause()};if(!("IntersectionObserver"in window))return s(),{stop(){o()}};const a=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting?s():o()})},{threshold:.2});return a.observe(i),{stop(){a.disconnect(),o()}}}function lu(i){const e=i.dataset.shotsFit;e&&(i.style.width="100%",i.style.height="100%",i.style.objectFit=e)}function Qt(i){var n,r;return((r=(n=Object.values(i.streams||{}).filter(s=>{var o,a;return((o=s.file)==null?void 0:o.remote_address)&&((a=s.stream_type)==null?void 0:a.output)==="mp4"}).sort((s,o)=>{var a,l;return(((a=o.stream_type)==null?void 0:a.bitrate)||0)-(((l=s.stream_type)==null?void 0:l.bitrate)||0)})[0])==null?void 0:n.file)==null?void 0:r.remote_address)||null}function Di(i){var t;const e=tg(i);return((t=e==null?void 0:e.file)==null?void 0:t.remote_address)||null}function tg(i){return i.snippets?Array.isArray(i.snippets)?i.snippets.find(e=>{var t;return(t=e.file)==null?void 0:t.remote_address})||null:i.snippets.large||i.snippets.small||null:null}function cu(i){var e,t;return((e=i.artists_names)==null?void 0:e.join(", "))||((t=i.director)==null?void 0:t.join(", "))||"Director"}function uu(i){return i.client?typeof i.client=="string"?i.client:i.client.name||"":""}function du(i){return i?`(${i})`:""}function hu(i){var r,s,o,a,l;const e=Number(i.duration),t=Number((s=(r=i.original_file)==null?void 0:r.mediaInfo)==null?void 0:s.Duration),n=Number((l=(a=(o=Object.values(i.streams||{})[0])==null?void 0:o.file)==null?void 0:a.mediaInfo)==null?void 0:l.Duration);return[e,t,n].find(c=>Number.isFinite(c)&&c>0)}function fu(i){if(!Number.isFinite(i)||i<=0)return"00:00:00";const e=Math.round(i),t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=e%60;return[t,n,r].map(s=>String(s).padStart(2,"0")).join(":")}function pu(i){var e,t;return((e=i.thumbnail)==null?void 0:e.image_player_url)||((t=i.thumbnail)==null?void 0:t.remote_address)||null}async function Cn(i,e){const t=ng(i,e),n=t.toString();if(Co.has(n))return Co.get(n);const r=fetch(t).then(s=>{if(!s.ok)throw new Error(`HTTP ${s.status}`);return s.json()}).then(s=>s.response);return Co.set(n,r),r}function ng(i,e){if(e.proxyUrl){const n=new URL(e.proxyUrl);return n.searchParams.set("path",i),n}if(!e.accessToken)throw new Error("Missing Shots access token.");const t=new URL(`${e.baseUrl}/${i}`);return t.searchParams.set("access_token",e.accessToken),t}function ig(){var i,e,t;return{baseUrl:((i=window.ShotsConfig)==null?void 0:i.baseUrl)||Ip,accessToken:((e=window.ShotsConfig)==null?void 0:e.accessToken)||Lp,proxyUrl:((t=window.ShotsConfig)==null?void 0:t.proxyUrl)||""}}const rg=".divider",Ho=".p_image",mu="mm-page-media-preload-style",sg=.7,og="power3.inOut",ag=.8,lg="power3.inOut",gu=.06,cg=.7,ug="power3.out",_u=0,dg=10,Vo=".next_post",vu="a[href]",xu=1.05,yu=1,Su=.45,Mu="power3.out",br=new WeakMap,is=new WeakMap;function hg(){if(document.getElementById(mu))return;const i=document.createElement("style");i.id=mu,i.textContent=`
    [data-barba="container"]:not([data-page-media-ready="true"]) .divider,
    [data-barba="container"]:not([data-page-media-ready="true"]) .p_image {
      opacity: 0 !important;
    }
  `,document.head.appendChild(i)}function fg(i=document,e={}){if(!window.gsap||!i)return;Eu(i);const n=[...wu(i).map((r,s)=>mg(r,s)),...Ru(i).map((r,s)=>gg(r,s))].filter(Boolean);n.forEach(r=>br.set(r.element,r)),_g(n.filter(r=>r.type==="image")),i.dataset.pageMediaReady="true",e.autoAnimate!==!1&&(bu(i),Tu(i)),vg(i)}function Eu(i=document){const e=window.gsap;zo(i).forEach(t=>{var r,s,o,a;const n=br.get(t);(r=n==null?void 0:n.trigger)==null||r.kill(),(s=n==null?void 0:n.parallaxTrigger)==null||s.kill(!1),(o=n==null?void 0:n.revealTween)==null||o.kill(),(a=n==null?void 0:n.parallaxTween)==null||a.kill(),e&&e.set(t,{clearProps:"clipPath,webkitClipPath,scaleX,transformOrigin,opacity"}),delete t.dataset.pageMediaReady,br.delete(t)}),i==null||i.querySelectorAll("[data-page-media-holder]").forEach(t=>{delete t.dataset.pageMediaHolder,e?e.set(t,{clearProps:"opacity"}):t.style.opacity=""}),i!=null&&i.dataset&&delete i.dataset.pageMediaReady,xg(i)}function pg(i=document){zo(i).forEach(e=>{var n,r;const t=br.get(e);t&&((n=t==null?void 0:t.parallaxTrigger)==null||n.kill(!1),(r=t==null?void 0:t.parallaxTween)==null||r.kill(),t.parallaxTrigger=null,t.parallaxTween=null)})}function bu(i=document,e={}){const t=Au(i).filter(n=>Cu(n.element));return rs(t,e)}function Tu(i=document){const e=Au(i).filter(t=>!t.revealed);if(!window.ScrollTrigger){rs(e);return}e.forEach(t=>{var n;(n=t.trigger)==null||n.kill(),t.trigger=window.ScrollTrigger.create({trigger:t.element,start:"top 95%",once:!0,onEnter:()=>rs([t]),onRefresh:()=>{Cu(t.element)&&rs([t])}})})}function mg(i,e){return window.gsap.set(i,{scaleX:0,transformOrigin:"left center"}),{type:"divider",element:i,index:e,revealed:!1}}function gg(i,e){const t=window.gsap,n=i.closest("div");return n==null||n.style.setProperty("overflow","hidden"),n&&(n.dataset.pageMediaHolder="",t.set(n,{opacity:0})),t.set(i,{clipPath:ss(0),webkitClipPath:ss(0),opacity:1,yPercent:_u}),{type:"image",element:i,holder:n,index:e,revealed:!1}}function _g(i){const e=window.gsap;!e||!window.ScrollTrigger||i.forEach(t=>{var n,r;(n=t.parallaxTween)==null||n.kill(),(r=t.parallaxTrigger)==null||r.kill(),t.parallaxTween=e.fromTo(t.element,{yPercent:_u},{yPercent:dg,ease:"none",scrollTrigger:{trigger:t.element,start:"top bottom",end:"bottom top",scrub:.45}}),t.parallaxTrigger=t.parallaxTween.scrollTrigger})}function rs(i,e={}){const t=window.gsap;if(!t||i.length===0)return Promise.resolve();const n=i.filter(o=>o.type==="divider"&&!o.revealed),r=i.filter(o=>o.type==="image"&&!o.revealed),s=r.map(o=>o.holder).filter(Boolean);return n.forEach(o=>{o.revealed=!0,o.element.dataset.pageMediaReady="true"}),r.forEach(o=>{o.revealed=!0,o.element.dataset.pageMediaReady="true"}),Promise.all([n.length?t.to(n.map(o=>o.element),{scaleX:1,duration:e.duration??sg,ease:e.ease||og,stagger:e.stagger??.035,delay:e.delay||0,overwrite:!0}):Promise.resolve(),r.length?[t.to(s,{opacity:1,duration:cg,ease:ug,stagger:e.stagger??gu,delay:e.delay||0,overwrite:!0}),t.to(r.map(o=>o.element),{clipPath:ss(1),webkitClipPath:ss(1),duration:e.duration??ag,ease:e.ease||lg,stagger:e.stagger??gu,delay:e.delay||0,overwrite:"auto"})]:Promise.resolve()].flat())}function Au(i){return zo(i).map(e=>br.get(e)).filter(Boolean)}function zo(i){return[...wu(i),...Ru(i)]}function wu(i){return[...i.querySelectorAll(rg)]}function Ru(i){return[...i.querySelectorAll(Ho)]}function Cu(i){const e=i.getBoundingClientRect();return e.top<window.innerHeight*.95&&e.bottom>0}function ss(i){return`inset(${100-Math.max(0,Math.min(i,1))*100}% 0% 0% 0%)`}function vg(i=document){const e=window.gsap;e&&i.querySelectorAll(Vo).forEach(t=>{const n=t.querySelector(vu);if(!n||is.has(n))return;const r=t.querySelector(Ho);if(!r)return;const s=new AbortController,{signal:o}=s;let a=!1;e.set(r,{scale:xu}),n.addEventListener("mouseenter",()=>{e.to(r,{scale:yu,duration:Su,ease:Mu,overwrite:"auto"})},{signal:o}),n.addEventListener("mouseleave",()=>{a||e.to(r,{scale:xu,duration:Su,ease:Mu,overwrite:"auto"})},{signal:o}),n.addEventListener("click",()=>{a=!0,e.to(r,{scale:yu,duration:.18,ease:"power2.out",overwrite:"auto"})},{signal:o}),is.set(n,{stop(){s.abort(),e.killTweensOf(r),e.set(r,{clearProps:"scale"})}})})}function xg(i=document){const e=window.gsap;i.querySelectorAll(`${Vo} ${vu}`).forEach(t=>{const n=is.get(t);n==null||n.stop(),is.delete(t)}),e&&i.querySelectorAll(`${Vo} ${Ho}`).forEach(t=>e.set(t,{clearProps:"scale"}))}const yg=50,Sg=.01,Mg=1,Eg="power1.out",bg=0,Tg=100,Ag=.01,wg=.8,Rg="power4.in",Cg=0;let Pg=0,Pu=!1;async function os(i){if(!(i instanceof HTMLImageElement)||!i.src.endsWith(".svg"))return null;const e=Go(i);if(e)return e;try{await Dg(i);const n=await(await fetch(i.src)).text(),r=new DOMParser().parseFromString(n,"image/svg+xml").documentElement;return!(r instanceof SVGSVGElement)||!Uu(i,r)?null:(Lg(),r)}catch(t){return console.warn("[logo] Could not create SVG logo overlay.",t),null}}function as(i,e=-1){const t=window.gsap,n=Lu(Nu(i),e);return!t||!n.length?[]:(t.set(n,{x:e*yg,rotation:e*bg,transformOrigin:"50% 50%"}),n)}function ls(i,e={}){const t=window.gsap;return!t||!(i!=null&&i.length)?null:t.to(i,{x:0,rotation:0,duration:e.duration??Mg,ease:e.ease||Eg,stagger:e.stagger??Sg,overwrite:!0})}function Iu(i,e=-1,t={}){const n=window.gsap,r=Lu(Nu(i),e);return!n||!r.length?null:n.to(r,{x:e*(t.offset??Tg),rotation:e*(t.rotation??Cg),duration:t.duration??wg,ease:t.ease||Rg,stagger:t.stagger??Ag,overwrite:!0})}function Lu(i,e){const t=[...i||[]],n=e>0;return t.sort((r,s)=>Du(r)-Du(s)),n||t.reverse(),t}function Du(i){const e=Ou(i);return e.x+e.width/2}function Ni(i){return Go(i)||i}function cs(i=document){i.querySelectorAll("[data-logo-overlay-source]").forEach(e=>{const t=Go(e);t&&Uu(e,t)})}function Ig(i,e){e.setAttribute("aria-hidden",i.alt?"false":"true")}function Nu(i){if(!(i instanceof SVGSVGElement))return[];const e=[...i.querySelectorAll("[data-logo-letter-mask] > g[id]")];return e.length?e:(Ng(i),[...i.children].filter(t=>t.matches("g[id]")).filter(t=>!t.matches("defs")).map((t,n)=>Ug(i,t,n)).filter(Boolean))}function Uu(i,e){const t=i.parentElement;if(!t)return!1;window.getComputedStyle(t).position==="static"&&(t.style.position="relative");const n=i.offsetWidth,r=i.offsetHeight;return!n||!r?!1:(Ig(i,e),i.dataset.logoOverlaySource="",i.after(e),e.dataset.logoOverlay="",e.style.position="absolute",e.style.left=`${i.offsetLeft}px`,e.style.top=`${i.offsetTop}px`,e.style.width=`${n}px`,e.style.height=`${r}px`,e.style.display="block",e.style.pointerEvents="none",i.style.opacity="0",!0)}function Lg(){Pu||(Pu=!0,window.addEventListener("resize",()=>cs(),{passive:!0}))}function Go(i){var t;const e=i==null?void 0:i.nextElementSibling;return(t=e==null?void 0:e.matches)!=null&&t.call(e,"[data-logo-overlay]")?e:null}function Dg(i){return(i.complete?Promise.resolve():new Promise(t=>{i.addEventListener("load",t,{once:!0}),i.addEventListener("error",t,{once:!0})})).then(()=>new Promise(t=>requestAnimationFrame(()=>requestAnimationFrame(t))))}function Ng(i){i.querySelector(":scope > defs")||i.insertBefore(document.createElementNS("http://www.w3.org/2000/svg","defs"),i.firstChild)}function Ug(i,e,t){const n=i.querySelector(":scope > defs"),r="http://www.w3.org/2000/svg",s=Ou(e);if(!n||!s.width||!s.height)return null;const o=document.createElementNS(r,"clipPath"),a=document.createElementNS(r,"rect"),l=document.createElementNS(r,"g"),c=`mm-logo-letter-clip-${Pg++}-${t}`;return o.id=c,a.setAttribute("x",String(s.x)),a.setAttribute("y",String(s.y)),a.setAttribute("width",String(s.width)),a.setAttribute("height",String(s.height)),o.append(a),n.append(o),l.dataset.logoLetterMask=e.id||String(t),l.setAttribute("clip-path",`url(#${c})`),e.parentNode.insertBefore(l,e),l.append(e),e}function Ou(i){try{return i.getBBox()}catch{return{x:0,y:0,width:0,height:0}}}const us=.8,Fu=us+.2,Bu="power4.out",ku=1,Hu="power4.in",Tr=.18,Wo=Tr+.35,Vu="5vw",zu="0vw",Og="(min-width: 992px)",fi="[MM lifecycle]";function Fg({onEnter:i,onLeave:e,onStart:t}={}){let n=()=>{},r=Promise.resolve();return{name:"transition",sync:!0,async once({next:s}){console.log(fi,"transition once -> run setup",pi(s)),await(i==null?void 0:i(ds(s)))},async before({current:s,next:o}){console.log(fi,"transition before",qu(s,o)),s.container.dataset.pageLeaving="true",delete o.container.dataset.pageLeaving,pg(s.container),jp(s.container),zg(s.container,o.container),window.scrollTo(0,0),Xo(s.container,"none"),Xo(o.container,"none"),Yg(s.container),Wg(o.container),r=new Promise(a=>{n=a})},async leave({current:s}){return console.log(fi,"transition leave",pi(s)),await r,t==null||t(ds(s)),Bg(s.container)},async enter({next:s}){console.log(fi,"transition enter",pi(s)),console.log(fi,"transition enter -> run setup",pi(s));try{await(i==null?void 0:i(ds(s,{transition:!0}))),Gg(s.container)}finally{n()}return Hg(s.container)},async after({current:s,next:o}){var a;console.log(fi,"transition after",qu(s,o)),Kg(s.container),Wu(s.container),window.scrollTo(0,0),Wu(o.container),console.log(fi,"transition after -> run teardown",pi(s)),e==null||e(ds(s)),Cc(o.container),Tu(o.container),(a=window.ScrollTrigger)==null||a.refresh()}}}function Bg(i){const e=window.gsap,t=Xu(i);return!e||!t?Ac(i):(kg(i,e),Promise.all([Ac(i),e.to(t,{opacity:.2,duration:us,ease:"power2.inOut"})]))}function kg(i,e){if(Ku(i)!=="home"||!Gu())return;const n=i.querySelector(".method"),r=i.querySelector(".madness");cs(i);const s=Ni(n),o=Ni(r);s&&(e.to(s,{x:`-${zu}`,duration:ku,ease:Hu,overwrite:!0}),Iu(s,-1)),o&&(e.to(o,{x:zu,duration:ku,ease:Hu,overwrite:!0}),Iu(o,1))}async function Hg(i){const e=window.gsap;if(!e)return wc(i);const t={scale:0,rotation:5},n=await Vg(i,e);return Promise.all([e.to(i,{scale:1,duration:us,delay:Tr,ease:"power3.inOut"}),e.to(t,{scale:1.45,rotation:0,duration:us,delay:Tr,ease:"power3.inOut",onStart:()=>{t.scale=.14,Ui(i,t.scale,t.rotation)},onUpdate:()=>{Ui(i,t.scale,t.rotation)}}),...n,wc(i,{delay:Wo}),Fc(i,{delay:Wo}),bu(i,{delay:Wo})])}async function Vg(i,e){var g;if(String(((g=i==null?void 0:i.dataset)==null?void 0:g.barbaNamespace)||"").trim().toLowerCase()!=="home"||!Gu())return[];let n=i.querySelector(".method"),r=i.querySelector(".madness");const s=[],[o,a]=await Promise.all([os(n),os(r)]);cs(i);const l=as(o,1),c=as(a,-1),u=Ni(n),d=Ni(r);u&&(e.set(u,{x:Vu}),s.push(e.to(u,{x:0,duration:Fu,delay:Tr,ease:Bu,onComplete:()=>e.set(u,{clearProps:"x"})}))),d&&(e.set(d,{x:`-${Vu}`}),s.push(e.to(d,{x:0,duration:Fu,delay:Tr,ease:Bu,onComplete:()=>e.set(d,{clearProps:"x"})})));const h=ls(l,{}),f=ls(c,{});return h&&s.push(h),f&&s.push(f),s}function Gu(){var i,e;return((e=(i=window.matchMedia)==null?void 0:i.call(window,Og))==null?void 0:e.matches)??!0}function zg(i,e){const t=window.scrollY||window.pageYOffset||0;i.dataset.transitionScrollY=String(t),i.style.position="fixed",i.style.top=`${-t}px`,i.style.left="0",i.style.right="0",i.style.width="100%",e.style.position="fixed",e.style.inset="0",e.style.width="100%",i.style.zIndex="",e.style.zIndex=""}function Gg(i){const e=window.gsap;e?e.set(i,{opacity:1,scale:.5,transformOrigin:"50% 50%"}):(i.style.opacity="1",i.style.scale="0.5",i.style.transformOrigin="50% 50%"),Ui(i,0,5)}function Wg(i){i.style.opacity="0"}function Wu(i){const e=window.gsap;if(Xg(i),e){e.set(i,{clearProps:"position,inset,top,left,right,width,zIndex,opacity,transform,scale,transformOrigin,clipPath,webkitClipPath"}),delete i.dataset.transitionScrollY;return}i.style.position="",i.style.inset="",i.style.top="",i.style.left="",i.style.right="",i.style.width="",i.style.zIndex="",i.style.opacity="",i.style.transform="",i.style.scale="",i.style.transformOrigin="",i.style.clipPath="",i.style.webkitClipPath="",delete i.dataset.transitionScrollY}function Xo(i,e){i==null||i.querySelectorAll("[data-showreel-stream]").forEach(t=>{t.style.pointerEvents=e})}function Xg(i){window.setTimeout(()=>{Xo(i,"")},900)}function Ui(i,e,t){const n=qg(e,t);i.style.clipPath=n,i.style.webkitClipPath=n}function qg(i,e){const t=Math.max(window.innerWidth/Math.max(window.innerHeight,1),.01),n=t*i,r=i,s=e*Math.PI/180,o=Math.cos(s),a=Math.sin(s);return`polygon(${[[-n/2,-r/2],[n/2,-r/2],[n/2,r/2],[-n/2,r/2]].map(([c,u])=>{const d=c*o-u*a+t/2,h=c*a+u*o+.5;return`${(d/t*100).toFixed(3)}% ${(h*100).toFixed(3)}%`}).join(", ")})`}function Yg(i){const e=document.createElement("div");e.dataset.transitionOverlay="",e.style.position="absolute",e.style.inset="0",e.style.background="#000000",e.style.opacity="0",e.style.pointerEvents="none",e.style.zIndex="999",i.appendChild(e)}function Kg(i){var e;(e=Xu(i))==null||e.remove()}function Xu(i){return i.querySelector("[data-transition-overlay]")}function qu(i,e){return{current:pi(i),next:pi(e)}}function pi(i){var e,t;return{namespace:Yu(i),connected:!!((e=i==null?void 0:i.container)!=null&&e.isConnected),className:((t=i==null?void 0:i.container)==null?void 0:t.className)||""}}function ds(i,e={}){return i!=null&&i.container?{container:i.container,namespace:Yu(i),rawNamespace:i.namespace,transition:!!e.transition,settled:!!e.settled}:{container:null,namespace:"page",rawNamespace:"",transition:!!e.transition,settled:!!e.settled}}function Yu(i){return String((i==null?void 0:i.namespace)||Ku(i==null?void 0:i.container)||"page").trim().toLowerCase()}function Ku(i){var e;return String(((e=i==null?void 0:i.dataset)==null?void 0:e.barbaNamespace)||"").trim().toLowerCase()}const qo="[MM lifecycle]";function jg({onEnter:i,onLeave:e,onTransitionStart:t}={}){return document.querySelector("[data-barba='wrapper']")?(console.log(qo,"barba init"),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),bo.init({debug:!1,preventRunning:!0,transitions:[Fg({onEnter:i,onLeave:e,onStart:t})]}),$g(),bo):(console.log(qo,"barba skipped -> no wrapper"),null)}function $g(){window.__mmBarbaLinkRouterInit||(window.__mmBarbaLinkRouterInit=!0,document.addEventListener("click",i=>{var n,r;const e=(r=(n=i.target).closest)==null?void 0:r.call(n,"a[href]");if(!e||Zg(i,e))return;const t=new URL(e.href,window.location.href);t.href!==window.location.href&&(console.log(qo,"link router -> barba.go",{href:e.getAttribute("href"),url:t.href}),i.preventDefault(),bo.go(t.href))},!0))}function Zg(i,e){if(i.defaultPrevented||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.button!==0)return!0;const t=e.getAttribute("href")||"";return t===""||t.startsWith("#")||t.startsWith("mailto:")||t.startsWith("tel:")||e.target==="_blank"||e.hasAttribute("download")||e.closest("[data-barba-prevent]")?!0:new URL(e.href,window.location.href).origin!==window.location.origin}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yo="184",Jg=0,ju=1,Qg=2,hs=1,e_=2,Ar=3,hn=0,Ut=1,en=2,Pn=0,Oi=1,$u=2,Zu=3,Ju=4,t_=5,mi=100,n_=101,i_=102,r_=103,s_=104,o_=200,a_=201,l_=202,c_=203,Ko=204,jo=205,u_=206,d_=207,h_=208,f_=209,p_=210,m_=211,g_=212,__=213,v_=214,$o=0,Zo=1,Jo=2,Fi=3,Qo=4,ea=5,ta=6,na=7,Qu=0,x_=1,y_=2,fn=0,ed=1,td=2,nd=3,id=4,rd=5,sd=6,od=7,ad="attached",S_="detached",ld=300,gi=301,Bi=302,ia=303,ra=304,fs=306,ki=1e3,pn=1001,ps=1002,yt=1003,cd=1004,wr=1005,St=1006,ms=1007,In=1008,Ft=1009,ud=1010,dd=1011,Rr=1012,sa=1013,mn=1014,Xt=1015,Ln=1016,oa=1017,aa=1018,Cr=1020,hd=35902,fd=35899,pd=1021,md=1022,qt=1023,Dn=1026,_i=1027,la=1028,ca=1029,vi=1030,ua=1031,da=1033,gs=33776,_s=33777,vs=33778,xs=33779,ha=35840,fa=35841,pa=35842,ma=35843,ga=36196,_a=37492,va=37496,xa=37488,ya=37489,ys=37490,Sa=37491,Ma=37808,Ea=37809,ba=37810,Ta=37811,Aa=37812,wa=37813,Ra=37814,Ca=37815,Pa=37816,Ia=37817,La=37818,Da=37819,Na=37820,Ua=37821,Oa=36492,Fa=36494,Ba=36495,ka=36283,Ha=36284,Ss=36285,Va=36286,gd=2200,M_=2201,E_=2202,Pr=2300,Ir=2301,za=2302,_d=2303,Hi=2400,Vi=2401,Ms=2402,Ga=2500,b_=2501,T_=0,vd=1,Wa=2,A_=3200,Xa=0,w_=1,$n="",wt="srgb",Bt="srgb-linear",Es="linear",Je="srgb",zi=7680,xd=519,R_=512,C_=513,P_=514,qa=515,I_=516,L_=517,Ya=518,D_=519,Ka=35044,yd="300 es",gn=2e3,Lr=2001;function N_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function U_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function O_(){const i=Dr("canvas");return i.style.display="block",i}const Sd={};function bs(...i){const e="THREE."+i.shift();console.log(e,...i)}function Md(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ye(...i){i=Md(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Re(...i){i=Md(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ja(...i){const e=i.join(" ");e in Sd||(Sd[e]=!0,ye(...i))}function F_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const B_={[$o]:Zo,[Jo]:ta,[Qo]:na,[Fi]:ea,[Zo]:$o,[ta]:Jo,[na]:Qo,[ea]:Fi};class Zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ed=1234567;const Nr=Math.PI/180,Gi=180/Math.PI;function tn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function ze(i,e,t){return Math.max(e,Math.min(t,i))}function $a(i,e){return(i%e+e)%e}function k_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function H_(i,e,t){return i!==e?(t-i)/(e-i):0}function Ur(i,e,t){return(1-t)*i+t*e}function V_(i,e,t,n){return Ur(i,e,1-Math.exp(-t*n))}function z_(i,e=1){return e-Math.abs($a(i,e*2)-e)}function G_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function W_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function X_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function q_(i,e){return i+Math.random()*(e-i)}function Y_(i){return i*(.5-Math.random())}function K_(i){i!==void 0&&(Ed=i);let e=Ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function j_(i){return i*Nr}function $_(i){return i*Gi}function Z_(i){return(i&i-1)===0&&i!==0}function J_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Q_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function e0(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),h=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xi={DEG2RAD:Nr,RAD2DEG:Gi,generateUUID:tn,clamp:ze,euclideanModulo:$a,mapLinear:k_,inverseLerp:H_,lerp:Ur,damp:V_,pingpong:z_,smoothstep:G_,smootherstep:W_,randInt:X_,randFloat:q_,randFloatSpread:Y_,seededRandom:K_,degToRad:j_,radToDeg:$_,isPowerOfTwo:Z_,ceilPowerOfTwo:J_,floorPowerOfTwo:Q_,setQuaternionFromProperEuler:e0,normalize:Qe,denormalize:nn},ac=class ac{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ac.prototype.isVector2=!0;let Ye=ac;class Yt{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3],h=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(d!==_||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*_;m<0&&(h=-h,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const y=Math.acos(m),M=Math.sin(y);p=Math.sin(p*y)/M,a=Math.sin(a*y)/M,l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+_*a}else{l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+_*a;const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-a*f,e[t+2]=c*g+u*f+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),h=l(n/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const lc=class lc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Za.copy(this).projectOnVector(e),this.sub(Za)}reflect(e){return this.sub(Za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lc.prototype.isVector3=!0;let O=lc;const Za=new O,bd=new Yt,cc=class cc{constructor(e,t,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=r[0],m=r[3],p=r[6],y=r[1],M=r[4],E=r[7],R=r[2],T=r[5],C=r[8];return s[0]=o*_+a*y+l*R,s[3]=o*m+a*M+l*T,s[6]=o*p+a*E+l*C,s[1]=c*_+u*y+d*R,s[4]=c*m+u*M+d*T,s[7]=c*p+u*E+d*C,s[2]=h*_+f*y+g*R,s[5]=h*m+f*M+g*T,s[8]=h*p+f*E+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,g=t*d+n*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ja.makeScale(e,t)),this}rotate(e){return this.premultiply(Ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cc.prototype.isMatrix3=!0;let Ie=cc;const Ja=new Ie,Td=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ad=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function t0(){const i={enabled:!0,workingColorSpace:Bt,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Je&&(r.r=Nn(r.r),r.g=Nn(r.g),r.b=Nn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Je&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$n?Es:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ja("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ja("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bt]:{primaries:e,whitePoint:n,transfer:Es,toXYZ:Td,fromXYZ:Ad,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:Td,fromXYZ:Ad,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),i}const Ge=t0();function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xi;class n0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xi===void 0&&(Xi=Dr("canvas")),Xi.width=e.width,Xi.height=e.height;const r=Xi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Nn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Nn(t[n]/255)*255):t[n]=Nn(t[n]);return{data:t,width:e.width,height:e.height}}else return ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let i0=0;class Qa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=tn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(el(r[o].image)):s.push(el(r[o]))}else s=el(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function el(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?n0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ye("Texture: Unable to serialize Texture."),{})}let r0=0;const tl=new O;class Tt extends Zn{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=pn,r=pn,s=St,o=In,a=qt,l=Ft,c=Tt.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=tn(),this.name="",this.source=new Qa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tl).x}get height(){return this.source.getSize(tl).y}get depth(){return this.source.getSize(tl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ld)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null,Tt.DEFAULT_MAPPING=ld,Tt.DEFAULT_ANISOTROPY=1;const uc=class uc{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,E=(f+1)/2,R=(p+1)/2,T=(u+h)/4,C=(d+_)/4,x=(g+m)/4;return M>E&&M>R?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=T/n,s=C/n):E>R?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=T/r,s=x/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=C/s,r=x/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uc.prototype.isVector4=!0;let rt=uc;class s0 extends Zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Tt(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Qa(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends s0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wd extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class o0 extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const po=class po{constructor(e,t,n,r,s,o,a,l,c,u,d,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,d,h,f,g,_,m)}set(e,t,n,r,s,o,a,l,c,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new po().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a0,e,l0)}lookAt(e,t,n){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Jn.crossVectors(n,kt),Jn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Jn.crossVectors(n,kt)),Jn.normalize(),Ts.crossVectors(kt,Jn),r[0]=Jn.x,r[4]=Ts.x,r[8]=kt.x,r[1]=Jn.y,r[5]=Ts.y,r[9]=kt.y,r[2]=Jn.z,r[6]=Ts.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],M=n[7],E=n[11],R=n[15],T=r[0],C=r[4],x=r[8],A=r[12],P=r[1],w=r[5],L=r[9],G=r[13],B=r[2],N=r[6],H=r[10],z=r[14],J=r[3],Z=r[7],re=r[11],xe=r[15];return s[0]=o*T+a*P+l*B+c*J,s[4]=o*C+a*w+l*N+c*Z,s[8]=o*x+a*L+l*H+c*re,s[12]=o*A+a*G+l*z+c*xe,s[1]=u*T+d*P+h*B+f*J,s[5]=u*C+d*w+h*N+f*Z,s[9]=u*x+d*L+h*H+f*re,s[13]=u*A+d*G+h*z+f*xe,s[2]=g*T+_*P+m*B+p*J,s[6]=g*C+_*w+m*N+p*Z,s[10]=g*x+_*L+m*H+p*re,s[14]=g*A+_*G+m*z+p*xe,s[3]=y*T+M*P+E*B+R*J,s[7]=y*C+M*w+E*N+R*Z,s[11]=y*x+M*L+E*H+R*re,s[15]=y*A+M*G+E*z+R*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],y=l*f-c*h,M=a*f-c*d,E=a*h-l*d,R=o*f-c*u,T=o*h-l*u,C=o*d-a*u;return t*(_*y-m*M+p*E)-n*(g*y-m*R+p*T)+r*(g*M-_*R+p*C)-s*(g*E-_*T+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=t*a-n*o,M=t*l-r*o,E=t*c-s*o,R=n*l-r*a,T=n*c-s*a,C=r*c-s*l,x=u*_-d*g,A=u*m-h*g,P=u*p-f*g,w=d*m-h*_,L=d*p-f*_,G=h*p-f*m,B=y*G-M*L+E*w+R*P-T*A+C*x;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/B;return e[0]=(a*G-l*L+c*w)*N,e[1]=(r*L-n*G-s*w)*N,e[2]=(_*C-m*T+p*R)*N,e[3]=(h*T-d*C-f*R)*N,e[4]=(l*P-o*G-c*A)*N,e[5]=(t*G-r*P+s*A)*N,e[6]=(m*E-g*C-p*M)*N,e[7]=(u*C-h*E+f*M)*N,e[8]=(o*L-a*P+c*x)*N,e[9]=(n*P-t*L-s*x)*N,e[10]=(g*T-_*E+p*y)*N,e[11]=(d*E-u*T-f*y)*N,e[12]=(a*A-o*w-l*x)*N,e[13]=(t*w-n*A+r*x)*N,e[14]=(_*M-g*R-m*y)*N,e[15]=(u*R-d*M+h*y)*N,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,g=s*d,_=o*u,m=o*d,p=a*d,y=l*c,M=l*u,E=l*d,R=n.x,T=n.y,C=n.z;return r[0]=(1-(_+p))*R,r[1]=(f+E)*R,r[2]=(g-M)*R,r[3]=0,r[4]=(f-E)*T,r[5]=(1-(h+p))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(g+M)*C,r[9]=(m-y)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=qi.set(r[0],r[1],r[2]).length();const a=qi.set(r[4],r[5],r[6]).length(),l=qi.set(r[8],r[9],r[10]).length();s<0&&(o=-o),rn.copy(this);const c=1/o,u=1/a,d=1/l;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,t.setFromRotationMatrix(rn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=gn,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===gn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Lr)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=gn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-r),h=-(t+e)/(t-e),f=-(n+r)/(n-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===gn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Lr)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};po.prototype.isMatrix4=!0;let ke=po;const qi=new O,rn=new ke,a0=new O(0,0,0),l0=new O(1,1,1),Jn=new O,Ts=new O,kt=new O,Rd=new ke,Cd=new Yt;class Qn{constructor(e=0,t=0,n=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cd.setFromEuler(this),this.setFromQuaternion(Cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Pd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let c0=0;const Id=new O,Yi=new Yt,Un=new ke,As=new O,Or=new O,u0=new O,d0=new Yt,Ld=new O(1,0,0),Dd=new O(0,1,0),Nd=new O(0,0,1),Ud={type:"added"},h0={type:"removed"},Ki={type:"childadded",child:null},nl={type:"childremoved",child:null};class ut extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new O,t=new Qn,n=new Yt,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ie}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Ld,e)}rotateY(e){return this.rotateOnAxis(Dd,e)}rotateZ(e){return this.rotateOnAxis(Nd,e)}translateOnAxis(e,t){return Id.copy(e).applyQuaternion(this.quaternion),this.position.add(Id.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ld,e)}translateY(e){return this.translateOnAxis(Dd,e)}translateZ(e){return this.translateOnAxis(Nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?As.copy(e):As.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Or,As,this.up):Un.lookAt(As,Or,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(Un),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Re("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ud),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h0),nl.child=e,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ud),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,u0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,d0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ut.DEFAULT_UP=new O(0,1,0),ut.DEFAULT_MATRIX_AUTO_UPDATE=!0,ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ei extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f0={type:"move"};class il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(f0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},ws={h:0,s:0,l:0};function rl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?i+(e-i)*6*t:t<.5?e:t<.6666666666666666?i+(e-i)*6*(.6666666666666666-t):i}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ge.workingColorSpace){if(e=$a(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=rl(o,s,e+.3333333333333333),this.g=rl(o,s,e),this.b=rl(o,s,e-.3333333333333333)}return Ge.colorSpaceToWorking(this,r),this}setStyle(e,t=wt){function n(s){s!==void 0&&parseFloat(s)<1&&ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const n=Od[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Ge.workingToColorSpace(Ct.copy(this),e),Math.round(ze(Ct.r*255,0,255))*65536+Math.round(ze(Ct.g*255,0,255))*256+Math.round(ze(Ct.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(Ct.copy(this),t);const n=Ct.r,r=Ct.g,s=Ct.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=wt){Ge.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,r=Ct.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(ws);const n=Ur(ti.h,ws.h,t),r=Ur(ti.s,ws.s,t),s=Ur(ti.l,ws.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Le;Le.NAMES=Od;class p0 extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const sn=new O,On=new O,sl=new O,Fn=new O,ji=new O,$i=new O,Fd=new O,ol=new O,al=new O,ll=new O,cl=new rt,ul=new rt,dl=new rt;class on{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),sn.subVectors(e,t),r.cross(sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){sn.subVectors(r,t),On.subVectors(n,t),sl.subVectors(e,t);const o=sn.dot(sn),a=sn.dot(On),l=sn.dot(sl),c=On.dot(On),u=On.dot(sl),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return cl.setScalar(0),ul.setScalar(0),dl.setScalar(0),cl.fromBufferAttribute(e,t),ul.fromBufferAttribute(e,n),dl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(cl,s.x),o.addScaledVector(ul,s.y),o.addScaledVector(dl,s.z),o}static isFrontFacing(e,t,n,r){return sn.subVectors(n,t),On.subVectors(e,t),sn.cross(On).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),sn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return on.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ji.subVectors(r,n),$i.subVectors(s,n),ol.subVectors(e,n);const l=ji.dot(ol),c=$i.dot(ol);if(l<=0&&c<=0)return t.copy(n);al.subVectors(e,r);const u=ji.dot(al),d=$i.dot(al);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ji,o);ll.subVectors(e,s);const f=ji.dot(ll),g=$i.dot(ll);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector($i,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Fd.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(Fd,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(ji,o).addScaledVector($i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Bn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,an):an.fromBufferAttribute(s,o),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox)),Rs.applyMatrix4(e.matrixWorld),this.union(Rs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Cs.subVectors(this.max,Fr),Zi.subVectors(e.a,Fr),Ji.subVectors(e.b,Fr),Qi.subVectors(e.c,Fr),ni.subVectors(Ji,Zi),ii.subVectors(Qi,Ji),yi.subVectors(Zi,Qi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-yi.z,yi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,yi.z,0,-yi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-yi.y,yi.x,0];return!hl(t,Zi,Ji,Qi,Cs)||(t=[1,0,0,0,1,0,0,0,1],!hl(t,Zi,Ji,Qi,Cs))?!1:(Ps.crossVectors(ni,ii),t=[Ps.x,Ps.y,Ps.z],hl(t,Zi,Ji,Qi,Cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new O,new O,new O,new O,new O,new O,new O,new O],an=new O,Rs=new Bn,Zi=new O,Ji=new O,Qi=new O,ni=new O,ii=new O,yi=new O,Fr=new O,Cs=new O,Ps=new O,Si=new O;function hl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Si.fromArray(i,s);const a=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),u=n.dot(Si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const xt=new O,Is=new Ye;let m0=0;class It extends Zn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:m0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=Xt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Is.fromBufferAttribute(this,t),Is.applyMatrix3(e),this.setXY(t,Is.x,Is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ka&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Bd extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kd extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ln extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}}const g0=new Bn,Br=new O,fl=new O;class vn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):g0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Br,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(fl)),this.expandByPoint(Br.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _0=0;const Kt=new ke,pl=new ut,er=new O,Ht=new Bn,kr=new Bn,At=new O;class jt extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N_(e)?kd:Bd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ln(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];kr.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Ht.min,kr.min),Ht.expandByPoint(At),At.addVectors(Ht.max,kr.max),Ht.expandByPoint(At)):(Ht.expandByPoint(kr.min),Ht.expandByPoint(kr.max))}Ht.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)At.fromBufferAttribute(a,c),l&&(er.fromBufferAttribute(e,c),At.add(er)),r=Math.max(r,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new O,l[x]=new O;const c=new O,u=new O,d=new O,h=new Ye,f=new Ye,g=new Ye,_=new O,m=new O;function p(x,A,P){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,P),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,A),g.fromBufferAttribute(s,P),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(w),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(w),a[x].add(_),a[A].add(_),a[P].add(_),l[x].add(m),l[A].add(m),l[P].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,A=y.length;x<A;++x){const P=y[x],w=P.start,L=P.count;for(let G=w,B=w+L;G<B;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const M=new O,E=new O,R=new O,T=new O;function C(x){R.fromBufferAttribute(r,x),T.copy(R);const A=a[x];M.copy(A),M.sub(R.multiplyScalar(R.dot(A))).normalize(),E.crossVectors(T,A);const w=E.dot(l[x])<0?-1:1;o.setXYZW(x,M.x,M.y,M.z,w)}for(let x=0,A=y.length;x<A;++x){const P=y[x],w=P.start,L=P.count;for(let G=w,B=w+L;G<B;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new It(h,u,d)}if(this.index===null)return ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class v0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ka,this.updateRanges=[],this.version=0,this.uuid=tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new O;class ml{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){bs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ml(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){bs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let x0=0;class xn extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=tn(),this.name="",this.type="Material",this.blending=Oi,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=jo,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ye(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ko&&(n.blendSrc=this.blendSrc),this.blendDst!==jo&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hn=new O,gl=new O,Ls=new O,ri=new O,_l=new O,Ds=new O,vl=new O;class Ns{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){gl.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(gl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ls),a=ri.dot(this.direction),l=-ri.dot(Ls),c=ri.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(gl).addScaledVector(Ls,h),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),r=Hn.dot(Hn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,r,s){_l.subVectors(t,e),Ds.subVectors(n,e),vl.crossVectors(_l,Ds);let o=this.direction.dot(vl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(Ds.crossVectors(ri,Ds));if(l<0)return null;const c=a*this.direction.dot(_l.cross(ri));if(c<0||l+c>o)return null;const u=-a*ri.dot(vl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vn extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hd=new ke,Mi=new Ns,Us=new vn,Vd=new O,Os=new O,Fs=new O,Bs=new O,xl=new O,ks=new O,zd=new O,Hs=new O;class Vt extends ut{constructor(e=new jt,t=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ks.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(xl.fromBufferAttribute(d,e),o?ks.addScaledVector(xl,u):ks.addScaledVector(xl.sub(t),u))}t.add(ks)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(s),Mi.copy(e.ray).recast(e.near),!(Us.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Us,Vd)===null||Mi.origin.distanceToSquared(Vd)>(e.far-e.near)**2))&&(Hd.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(Hd),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=y,R=M;E<R;E+=3){const T=a.getX(E),C=a.getX(E+1),x=a.getX(E+2);r=Vs(this,p,e,n,c,u,d,T,C,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);r=Vs(this,o,e,n,c,u,d,y,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=y,R=M;E<R;E+=3){const T=E,C=E+1,x=E+2;r=Vs(this,p,e,n,c,u,d,T,C,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,M=m+1,E=m+2;r=Vs(this,o,e,n,c,u,d,y,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function y0(i,e,t,n,r,s,o,a){let l;if(e.side===Ut?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===hn,a),l===null)return null;Hs.copy(a),Hs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Hs);return c<t.near||c>t.far?null:{distance:c,point:Hs.clone(),object:i}}function Vs(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Os),i.getVertexPosition(l,Fs),i.getVertexPosition(c,Bs);const u=y0(i,e,t,n,Os,Fs,Bs,zd);if(u){const d=new O;on.getBarycoord(zd,Os,Fs,Bs,d),r&&(u.uv=on.getInterpolatedAttribute(r,a,l,c,d,new Ye)),s&&(u.uv1=on.getInterpolatedAttribute(s,a,l,c,d,new Ye)),o&&(u.normal=on.getInterpolatedAttribute(o,a,l,c,d,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};on.getNormal(Os,Fs,Bs,h.normal),u.face=h,u.barycoord=d}return u}const Hr=new rt,Gd=new rt,Wd=new rt,S0=new rt,Xd=new ke,zs=new O,yl=new vn,qd=new ke,Sl=new Ns;class M0 extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ad,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zs),this.boundingBox.expandByPoint(zs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zs),this.boundingSphere.expandByPoint(zs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yl.copy(this.boundingSphere),yl.applyMatrix4(r),e.ray.intersectsSphere(yl)!==!1&&(qd.copy(r).invert(),Sl.copy(e.ray).applyMatrix4(qd),!(this.boundingBox!==null&&Sl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Sl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ad?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===S_?this.bindMatrixInverse.copy(this.bindMatrix).invert():ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Gd.fromBufferAttribute(r.attributes.skinIndex,e),Wd.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Hr.copy(t),t.set(0,0,0,0)):(Hr.set(...t,1),t.set(0,0,0)),Hr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const o=Wd.getComponent(s);if(o!==0){const a=Gd.getComponent(s);Xd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(S0.copy(Hr).applyMatrix4(Xd),o)}}return t.isVector4&&(t.w=Hr.w),t.applyMatrix4(this.bindMatrixInverse)}}class Yd extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ml extends Tt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=yt,u=yt,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kd=new ke,E0=new ke;class El{constructor(e=[],t=[]){this.uuid=tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:E0;Kd.multiplyMatrices(a,t[s]),Kd.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new El(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ml(t,e,e,qt,Xt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(ye("Skeleton: No bone found with UUID:",s),o=new Yd),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class bl extends It{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const tr=new ke,jd=new ke,Gs=[],$d=new Bn,b0=new ke,Vr=new Vt,zr=new vn;class T0 extends Vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bl(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,b0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,tr),$d.copy(e.boundingBox).applyMatrix4(tr),this.boundingBox.union($d)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,tr),zr.copy(e.boundingSphere).applyMatrix4(tr),this.boundingSphere.union(zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(n),e.ray.intersectsSphere(zr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,tr),jd.multiplyMatrices(n,tr),Vr.matrixWorld=jd,Vr.raycast(e,Gs);for(let o=0,a=Gs.length;o<a;o++){const l=Gs[o];l.instanceId=s,l.object=this,t.push(l)}Gs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ml(new Float32Array(r*this.count),r,this.count,la,Xt));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Tl=new O,A0=new O,w0=new Ie;class Ei{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Tl.subVectors(n,t).cross(A0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Tl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||w0.getNormalMatrix(e),r=this.coplanarPoint(Tl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new vn,R0=new Ye(.5,.5),Ws=new O;class Al{constructor(e=new Ei,t=new Ei,n=new Ei,r=new Ei,s=new Ei,o=new Ei){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],y=s[12],M=s[13],E=s[14],R=s[15];if(r[0].setComponents(c-o,f-u,p-g,R-y).normalize(),r[1].setComponents(c+o,f+u,p+g,R+y).normalize(),r[2].setComponents(c+a,f+d,p+_,R+M).normalize(),r[3].setComponents(c-a,f-d,p-_,R-M).normalize(),n)r[4].setComponents(l,h,m,E).normalize(),r[5].setComponents(c-l,f-h,p-m,R-E).normalize();else if(r[4].setComponents(c-l,f-h,p-m,R-E).normalize(),t===gn)r[5].setComponents(c+l,f+h,p+m,R+E).normalize();else if(t===Lr)r[5].setComponents(l,h,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);const t=R0.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ws.x=r.normal.x>0?e.max.x:e.min.x,Ws.y=r.normal.y>0?e.max.y:e.min.y,Ws.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zd extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xs=new O,qs=new O,Jd=new ke,Gr=new Ns,Ys=new vn,wl=new O,Qd=new O;class Rl extends ut{constructor(e=new jt,t=new Zd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Xs.fromBufferAttribute(t,r-1),qs.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Xs.distanceTo(qs);e.setAttribute("lineDistance",new ln(n,1))}else ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(r),Ys.radius+=s,e.ray.intersectsSphere(Ys)===!1)return;Jd.copy(r).invert(),Gr.copy(e.ray).applyMatrix4(Jd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),y=u.getX(_+1),M=Ks(this,e,Gr,l,p,y,_);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Ks(this,e,Gr,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=Ks(this,e,Gr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Ks(this,e,Gr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ks(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(Xs.fromBufferAttribute(a,r),qs.fromBufferAttribute(a,s),t.distanceSqToSegment(Xs,qs,wl,Qd)>n)return;wl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(wl);if(!(c<e.near||c>e.far))return{distance:c,point:Qd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const eh=new O,th=new O;class C0 extends Rl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)eh.fromBufferAttribute(t,r),th.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+eh.distanceTo(th);e.setAttribute("lineDistance",new ln(n,1))}else ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class P0 extends Rl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class nh extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ih=new ke,Cl=new Ns,js=new vn,$s=new O;class I0 extends ut{constructor(e=new jt,t=new nh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),js.radius+=s,e.ray.intersectsSphere(js)===!1)return;ih.copy(r).invert(),Cl.copy(e.ray).applyMatrix4(ih);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,_=f;g<_;g++){const m=c.getX(g);$s.fromBufferAttribute(d,m),rh($s,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,_=f;g<_;g++)$s.fromBufferAttribute(d,g),rh($s,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rh(i,e,t,n,r,s,o){const a=Cl.distanceSqToPoint(i);if(a<t){const l=new O;Cl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class sh extends Tt{constructor(e=[],t=gi,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nr extends Tt{constructor(e,t,n=mn,r,s,o,a=yt,l=yt,c,u=Dn,d=1){if(u!==Dn&&u!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class L0 extends nr{constructor(e,t=mn,n=gi,r,s,o=yt,a=yt,l,c=Dn){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class oh extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wr extends jt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(d,2));function g(_,m,p,y,M,E,R,T,C,x,A){const P=E/C,w=R/x,L=E/2,G=R/2,B=T/2,N=C+1,H=x+1;let z=0,J=0;const Z=new O;for(let re=0;re<H;re++){const xe=re*w-G;for(let be=0;be<N;be++){const We=be*P-L;Z[_]=We*y,Z[m]=xe*M,Z[p]=B,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=T>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(be/C),d.push(1-re/x),z+=1}}for(let re=0;re<x;re++)for(let xe=0;xe<C;xe++){const be=h+xe+N*re,We=h+xe+N*(re+1),Ze=h+(xe+1)+N*(re+1),Ce=h+(xe+1)+N*re;l.push(be,We,Ce),l.push(We,Ze,Ce),J+=6}a.addGroup(f,J,A),f+=J,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zs extends jt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*h-o;for(let M=0;M<c;M++){const E=M*d-s;g.push(E,-y,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const M=y+c*p,E=y+c*(p+1),R=y+1+c*(p+1),T=y+1+c*p;f.push(M,E,T),f.push(E,R,T)}this.setIndex(f),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(_,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.widthSegments,e.heightSegments)}}function ir(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(ah(r))r.isRenderTargetTexture?(ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(ah(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Dt(i){const e={};for(let t=0;t<i.length;t++){const n=ir(i[t]);for(const r in n)e[r]=n[r]}return e}function ah(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function D0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const N0={clone:ir,merge:Dt};var U0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U0,this.fragmentShader=O0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=D0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class F0 extends yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Pl extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xa,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sn extends Pl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class B0 extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k0 extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Js(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function H0(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function ch(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function uh(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class rr{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class V0 extends rr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hi,endingEnd:Hi}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vi:s=e,a=2*t-n;break;case Ms:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vi:o=e,l=2*n-t;break;case Ms:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,y=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,E=f*m-f*_;for(let R=0;R!==a;++R)s[R]=p*o[u+R]+y*o[c+R]+M*o[l+R]+E*o[d+R];return s}}class dh extends rr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}}class z0 extends rr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class G0 extends rr{interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,d=u.inTangents,h=u.outTangents;if(!d||!h){const _=(n-t)/(r-t),m=1-_;for(let p=0;p!==a;++p)s[p]=o[c+p]*m+o[l+p]*_;return s}const f=a*2,g=e-1;for(let _=0;_!==a;++_){const m=o[c+_],p=o[l+_],y=g*f+_*2,M=h[y],E=h[y+1],R=e*f+_*2,T=d[R],C=d[R+1];let x=(n-t)/(r-t),A,P,w,L,G;for(let B=0;B<8;B++){A=x*x,P=A*x,w=1-x,L=w*w,G=L*w;const H=G*t+3*L*x*M+3*w*A*T+P*r-n;if(Math.abs(H)<1e-10)break;const z=3*L*(M-t)+6*w*x*(T-M)+3*A*(r-T);if(Math.abs(z)<1e-10)break;x=x-H/z,x=Math.max(0,Math.min(1,x))}s[_]=G*m+3*L*x*E+3*w*A*C+P*p}return s}}class cn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Js(t,this.TimeBufferType),this.values=Js(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Js(e.times,Array),values:Js(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new z0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new V0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new G0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case za:t=this.InterpolantFactoryMethodSmooth;break;case _d:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return za;case this.InterpolantFactoryMethodBezier:return _d}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Re("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(Re("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Re("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Re("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&U_(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){Re("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===za,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[h+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}cn.prototype.ValueTypeName="",cn.prototype.TimeBufferType=Float32Array,cn.prototype.ValueBufferType=Float32Array,cn.prototype.DefaultInterpolation=Ir;class sr extends cn{constructor(e,t,n){super(e,t,n)}}sr.prototype.ValueTypeName="bool",sr.prototype.ValueBufferType=Array,sr.prototype.DefaultInterpolation=Pr,sr.prototype.InterpolantFactoryMethodLinear=void 0,sr.prototype.InterpolantFactoryMethodSmooth=void 0;class hh extends cn{constructor(e,t,n,r){super(e,t,n,r)}}hh.prototype.ValueTypeName="color";class or extends cn{constructor(e,t,n,r){super(e,t,n,r)}}or.prototype.ValueTypeName="number";class W0 extends rr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Yt.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ar extends cn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new W0(this.times,this.values,this.getValueSize(),e)}}ar.prototype.ValueTypeName="quaternion",ar.prototype.InterpolantFactoryMethodSmooth=void 0;class lr extends cn{constructor(e,t,n){super(e,t,n)}}lr.prototype.ValueTypeName="string",lr.prototype.ValueBufferType=Array,lr.prototype.DefaultInterpolation=Pr,lr.prototype.InterpolantFactoryMethodLinear=void 0,lr.prototype.InterpolantFactoryMethodSmooth=void 0;class cr extends cn{constructor(e,t,n,r){super(e,t,n,r)}}cr.prototype.ValueTypeName="vector";class Il{constructor(e="",t=-1,n=[],r=Ga){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=tn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(q0(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(cn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=H0(l);l=ch(l,1,u),c=ch(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new or(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=r[d];h||(r[d]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(ye("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Re("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,g,_){if(f.length!==0){const m=[],p=[];uh(f,m,p,g),m.length!==0&&_.push(new d(h,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)f[h[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==h[g].morphTargets.length;++y){const M=h[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}r.push(new or(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[d].name+"]";n(cr,f+".position",h,"pos",r),n(ar,f+".quaternion",h,"rot",r),n(cr,f+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function X0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return or;case"vector":case"vector2":case"vector3":case"vector4":return cr;case"color":return hh;case"quaternion":return ar;case"bool":case"boolean":return sr;case"string":return lr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function q0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=X0(i.type);if(i.times===void 0){const t=[],n=[];uh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const zn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(fh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!fh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function fh(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Y0{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const K0=new Y0;class ur{constructor(e){this.manager=e!==void 0?e:K0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ur.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gn={};class j0 extends Error{constructor(e,t){super(e),this.response=t}}class ph extends ur{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=zn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Gn[e]!==void 0){Gn[e].push({onLoad:t,onProgress:n,onError:r});return}Gn[e]=[],Gn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Gn[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){d.read().then(({done:M,value:E})=>{if(M)p.close();else{_+=E.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,C=u.length;T<C;T++){const x=u[T];x.onProgress&&x.onProgress(R)}p.enqueue(E),y()}},M=>{p.error(M)})}}});return new Response(m)}else throw new j0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{zn.add(`file:${e}`,c);const u=Gn[e];delete Gn[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Gn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Gn[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const dr=new WeakMap;class $0 extends ur{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=zn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=dr.get(o);d===void 0&&(d=[],dr.set(o,d)),d.push({onLoad:t,onError:r})}return o}const a=Dr("img");function l(){u(),t&&t(this);const d=dr.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}dr.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),zn.remove(`image:${e}`);const h=dr.get(this)||[];for(let f=0;f<h.length;f++){const g=h[f];g.onError&&g.onError(d)}dr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),zn.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Z0 extends ur{constructor(e){super(e)}load(e,t,n,r){const s=new Tt,o=new $0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Ll extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Dl=new ke,mh=new O,gh=new O;class Nl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=Ft,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;mh.setFromMatrixPosition(e.matrixWorld),t.position.copy(mh),gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gh),t.updateMatrixWorld(),Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Lr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qs=new O,eo=new Yt,Mn=new O;class _h extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qs,eo,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qs,eo,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Qs,eo,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qs,eo,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new O,vh=new Ye,xh=new Ye;class Nt extends _h{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,vh,xh),t.subVectors(xh,vh)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class J0 extends Nl{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Gi*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Q0 extends Ll{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new J0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class ev extends Nl{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0}}class tv extends Ll{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new ev}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class to extends _h{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class nv extends Nl{constructor(){super(new to(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iv extends Ll{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new nv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Xr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ul=new WeakMap;class rv extends ur{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=zn.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{Ul.has(o)===!0?(r&&r(Ul.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){zn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){r&&r(c),Ul.set(l,c),zn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});zn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const hr=-90,fr=1;class sv extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nt(hr,fr,e,t);r.layers=this.layers,this.add(r);const s=new Nt(hr,fr,e,t);s.layers=this.layers,this.add(s);const o=new Nt(hr,fr,e,t);o.layers=this.layers,this.add(o);const a=new Nt(hr,fr,e,t);a.layers=this.layers,this.add(a);const l=new Nt(hr,fr,e,t);l.layers=this.layers,this.add(l);const c=new Nt(hr,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ov extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class av{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,o=r;s!==o;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,r){Yt.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const o=this._workIndex*s;Yt.multiplyQuaternionsFlat(e,o,e,t,e,n),Yt.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,n,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*r}}_lerpAdditive(e,t,n,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*r}}}const Ol="\\[\\]\\.:\\/",lv=new RegExp("["+Ol+"]","g"),Fl="[^"+Ol+"]",cv="[^"+Ol.replace("\\.","")+"]",uv=/((?:WC+[\/:])*)/.source.replace("WC",Fl),dv=/(WCOD+)?/.source.replace("WCOD",cv),hv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),fv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),pv=new RegExp("^"+uv+dv+hv+fv+"$"),mv=["material","materials","bones","map"];class gv{constructor(e,t,n){const r=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lv,"")}static parseTrackName(e){const t=pv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);mv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;Re("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=gv,$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray],$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _v{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Hi,endingEnd:Hi};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings&&Object.assign(l,u.settings),u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=M_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case b_:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Ga:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const o=n===E_;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(n===gd){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=s,this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=Vi,r.endingEnd=Vi):(e?r.endingStart=this.zeroSlopeAtStart?Vi:Hi:r.endingStart=Ms,t?r.endingEnd=this.zeroSlopeAtEnd?Vi:Hi:r.endingEnd=Ms)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const vv=new Float32Array(1);class xv extends Zn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==s;++d){const h=r[d],f=h.name;let g=u[f];if(g!==void 0)++g.referenceCount,o[d]=g;else{if(g=o[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;g=new av($e.create(n,f,_),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[d]=g}a[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new dh(new Float32Array(2),new Float32Array(2),1,vv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?Il.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ga),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new _v(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?Il.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class yv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ye("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const dc=class dc{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};dc.prototype.isMatrix2=!0;let yh=dc;function Sh(i,e,t,n){const r=Sv(n);switch(t){case pd:return i*e;case la:return i*e/r.components*r.byteLength;case ca:return i*e/r.components*r.byteLength;case vi:return i*e*2/r.components*r.byteLength;case ua:return i*e*2/r.components*r.byteLength;case md:return i*e*3/r.components*r.byteLength;case qt:return i*e*4/r.components*r.byteLength;case da:return i*e*4/r.components*r.byteLength;case gs:case _s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vs:case xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fa:case ma:return Math.max(i,16)*Math.max(e,8)/4;case ha:case pa:return Math.max(i,8)*Math.max(e,8)/2;case ga:case _a:case xa:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case va:case ys:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Oa:case Fa:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ka:case Ha:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ss:case Va:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sv(i){switch(i){case Ft:case ud:return{byteLength:1,components:1};case Rr:case dd:case Ln:return{byteLength:2,components:1};case oa:case aa:return{byteLength:2,components:4};case mn:case sa:case Xt:return{byteLength:4,components:1};case hd:case fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}})),typeof window<"u"&&(window.__THREE__?ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Mv(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Ev=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bv=`#ifdef USE_ALPHAHASH
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
#endif`,Tv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cv=`#ifdef USE_AOMAP
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
#endif`,Pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iv=`#ifdef USE_BATCHING
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
#endif`,Lv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ov=`#ifdef USE_IRIDESCENCE
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
#endif`,Fv=`#ifdef USE_BUMPMAP
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
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qv=`#define PI 3.141592653589793
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
} // validated`,Yv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kv=`vec3 transformedNormal = objectNormal;
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
#endif`,jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tx=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ux=`#ifdef USE_GRADIENTMAP
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
}`,dx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
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
#endif`,Sx=`uniform sampler2D dfgLUT;
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
}`,Mx=`
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
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dx=`#if defined( USE_POINTS_UV )
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
#endif`,Nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ox=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`#ifdef USE_MORPHTARGETS
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
#endif`,Hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qx=`#ifdef USE_NORMALMAP
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
#endif`,Yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ey=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ny=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ry=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,ly=`float getShadowMask() {
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
}`,cy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uy=`#ifdef USE_SKINNING
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
#endif`,dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hy=`#ifdef USE_SKINNING
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
#endif`,fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,my=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_y=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vy=`#ifdef USE_TRANSMISSION
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,My=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fe={alphahash_fragment:Ev,alphahash_pars_fragment:bv,alphamap_fragment:Tv,alphamap_pars_fragment:Av,alphatest_fragment:wv,alphatest_pars_fragment:Rv,aomap_fragment:Cv,aomap_pars_fragment:Pv,batching_pars_vertex:Iv,batching_vertex:Lv,begin_vertex:Dv,beginnormal_vertex:Nv,bsdfs:Uv,iridescence_fragment:Ov,bumpmap_pars_fragment:Fv,clipping_planes_fragment:Bv,clipping_planes_pars_fragment:kv,clipping_planes_pars_vertex:Hv,clipping_planes_vertex:Vv,color_fragment:zv,color_pars_fragment:Gv,color_pars_vertex:Wv,color_vertex:Xv,common:qv,cube_uv_reflection_fragment:Yv,defaultnormal_vertex:Kv,displacementmap_pars_vertex:jv,displacementmap_vertex:$v,emissivemap_fragment:Zv,emissivemap_pars_fragment:Jv,colorspace_fragment:Qv,colorspace_pars_fragment:ex,envmap_fragment:tx,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:rx,envmap_physical_pars_fragment:mx,envmap_vertex:sx,fog_vertex:ox,fog_pars_vertex:ax,fog_fragment:lx,fog_pars_fragment:cx,gradientmap_pars_fragment:ux,lightmap_pars_fragment:dx,lights_lambert_fragment:hx,lights_lambert_pars_fragment:fx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:_x,lights_phong_fragment:vx,lights_phong_pars_fragment:xx,lights_physical_fragment:yx,lights_physical_pars_fragment:Sx,lights_fragment_begin:Mx,lights_fragment_maps:Ex,lights_fragment_end:bx,lightprobes_pars_fragment:Tx,logdepthbuf_fragment:Ax,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:Rx,logdepthbuf_vertex:Cx,map_fragment:Px,map_pars_fragment:Ix,map_particle_fragment:Lx,map_particle_pars_fragment:Dx,metalnessmap_fragment:Nx,metalnessmap_pars_fragment:Ux,morphinstance_vertex:Ox,morphcolor_vertex:Fx,morphnormal_vertex:Bx,morphtarget_pars_vertex:kx,morphtarget_vertex:Hx,normal_fragment_begin:Vx,normal_fragment_maps:zx,normal_pars_fragment:Gx,normal_pars_vertex:Wx,normal_vertex:Xx,normalmap_pars_fragment:qx,clearcoat_normal_fragment_begin:Yx,clearcoat_normal_fragment_maps:Kx,clearcoat_pars_fragment:jx,iridescence_pars_fragment:$x,opaque_fragment:Zx,packing:Jx,premultiplied_alpha_fragment:Qx,project_vertex:ey,dithering_fragment:ty,dithering_pars_fragment:ny,roughnessmap_fragment:iy,roughnessmap_pars_fragment:ry,shadowmap_pars_fragment:sy,shadowmap_pars_vertex:oy,shadowmap_vertex:ay,shadowmask_pars_fragment:ly,skinbase_vertex:cy,skinning_pars_vertex:uy,skinning_vertex:dy,skinnormal_vertex:hy,specularmap_fragment:fy,specularmap_pars_fragment:py,tonemapping_fragment:my,tonemapping_pars_fragment:gy,transmission_fragment:_y,transmission_pars_fragment:vy,uv_pars_fragment:xy,uv_pars_vertex:yy,uv_vertex:Sy,worldpos_vertex:My,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
void main () {
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},ce={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},En={basic:{uniforms:Dt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Dt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Dt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Dt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Dt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Dt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Dt([ce.points,ce.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Dt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Dt([ce.common,ce.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Dt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Dt([ce.sprite,ce.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:Dt([ce.common,ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:Dt([ce.lights,ce.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};En.physical={uniforms:Dt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const no={r:0,b:0,g:0},Ey=new ke,Eh=new Ie;Eh.set(-1,0,0,0,1,0,0,0,1);function by(i,e,t,n,r,s){const o=new Le(0);let a=r===!0?0:1,l,c,u=null,d=0,h=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){const E=y.backgroundBlurriness>0;M=e.get(M,E)}return M}function g(y){let M=!1;const E=f(y);E===null?m(o,a):E&&E.isColor&&(m(E,1),M=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,M){const E=f(M);E&&(E.isCubeTexture||E.mapping===fs)?(c===void 0&&(c=new Vt(new Wr(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:ir(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(M.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Eh),c.material.toneMapped=Ge.getTransfer(E.colorSpace)!==Je,(u!==E||d!==E.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Vt(new Zs(2,2),new yn({name:"BackgroundMaterial",uniforms:ir(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(E.colorSpace)!==Je,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(no,lh(i)),t.buffers.color.setClear(no.r,no.g,no.b,M,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:_,dispose:p}}function Ty(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(w,L,G,B,N){let H=!1;const z=d(w,B,G,L);s!==z&&(s=z,c(s.object)),H=f(w,B,G,N),H&&g(w,B,G,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,E(w,L,G,B),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function d(w,L,G,B){const N=B.wireframe===!0;let H=n[L.id];H===void 0&&(H={},n[L.id]=H);const z=w.isInstancedMesh===!0?w.id:0;let J=H[z];J===void 0&&(J={},H[z]=J);let Z=J[G.id];Z===void 0&&(Z={},J[G.id]=Z);let re=Z[N];return re===void 0&&(re=h(l()),Z[N]=re),re}function h(w){const L=[],G=[],B=[];for(let N=0;N<t;N++)L[N]=0,G[N]=0,B[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:B,object:w,attributes:{},index:null}}function f(w,L,G,B){const N=s.attributes,H=L.attributes;let z=0;const J=G.getAttributes();for(const Z in J)if(J[Z].location>=0){const xe=N[Z];let be=H[Z];if(be===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(be=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(be=w.instanceColor)),xe===void 0||xe.attribute!==be||be&&xe.data!==be.data)return!0;z++}return s.attributesNum!==z||s.index!==B}function g(w,L,G,B){const N={},H=L.attributes;let z=0;const J=G.getAttributes();for(const Z in J)if(J[Z].location>=0){let xe=H[Z];xe===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(xe=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(xe=w.instanceColor));const be={};be.attribute=xe,xe&&xe.data&&(be.data=xe.data),N[Z]=be,z++}s.attributes=N,s.attributesNum=z,s.index=B}function _(){const w=s.newAttributes;for(let L=0,G=w.length;L<G;L++)w[L]=0}function m(w){p(w,0)}function p(w,L){const G=s.newAttributes,B=s.enabledAttributes,N=s.attributeDivisors;G[w]=1,B[w]===0&&(i.enableVertexAttribArray(w),B[w]=1),N[w]!==L&&(i.vertexAttribDivisor(w,L),N[w]=L)}function y(){const w=s.newAttributes,L=s.enabledAttributes;for(let G=0,B=L.length;G<B;G++)L[G]!==w[G]&&(i.disableVertexAttribArray(G),L[G]=0)}function M(w,L,G,B,N,H,z){z===!0?i.vertexAttribIPointer(w,L,G,N,H):i.vertexAttribPointer(w,L,G,B,N,H)}function E(w,L,G,B){_();const N=B.attributes,H=G.getAttributes(),z=L.defaultAttributeValues;for(const J in H){const Z=H[J];if(Z.location>=0){let re=N[J];if(re===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(re=w.instanceColor)),re!==void 0){const xe=re.normalized,be=re.itemSize,We=e.get(re);if(We===void 0)continue;const Ze=We.buffer,Ce=We.type,$=We.bytesPerElement,ue=Ce===i.INT||Ce===i.UNSIGNED_INT||re.gpuType===sa;if(re.isInterleavedBufferAttribute){const X=re.data,se=X.stride,Ee=re.offset;if(X.isInstancedInterleavedBuffer){for(let Se=0;Se<Z.locationSize;Se++)p(Z.location+Se,X.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Se=0;Se<Z.locationSize;Se++)m(Z.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Se=0;Se<Z.locationSize;Se++)M(Z.location+Se,be/Z.locationSize,Ce,xe,se*$,(Ee+be/Z.locationSize*Se)*$,ue)}else{if(re.isInstancedBufferAttribute){for(let X=0;X<Z.locationSize;X++)p(Z.location+X,re.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let X=0;X<Z.locationSize;X++)m(Z.location+X);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let X=0;X<Z.locationSize;X++)M(Z.location+X,be/Z.locationSize,Ce,xe,be*$,be/Z.locationSize*X*$,ue)}}else if(z!==void 0){const xe=z[J];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(Z.location,xe);break;case 3:i.vertexAttrib3fv(Z.location,xe);break;case 4:i.vertexAttrib4fv(Z.location,xe);break;default:i.vertexAttrib1fv(Z.location,xe)}}}}y()}function R(){A();for(const w in n){const L=n[w];for(const G in L){const B=L[G];for(const N in B){const H=B[N];for(const z in H)u(H[z].object),delete H[z];delete B[N]}}delete n[w]}}function T(w){if(n[w.id]===void 0)return;const L=n[w.id];for(const G in L){const B=L[G];for(const N in B){const H=B[N];for(const z in H)u(H[z].object),delete H[z];delete B[N]}}delete n[w.id]}function C(w){for(const L in n){const G=n[L];for(const B in G){const N=G[B];if(N[w.id]===void 0)continue;const H=N[w.id];for(const z in H)u(H[z].object),delete H[z];delete N[w.id]}}}function x(w){for(const L in n){const G=n[L],B=w.isInstancedMesh===!0?w.id:0,N=G[B];if(N!==void 0){for(const H in N){const z=N[H];for(const J in z)u(z[J].object),delete z[J];delete N[H]}delete G[B],Object.keys(G).length===0&&delete n[L]}}}function A(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Ay(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function wy(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==qt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const x=C===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ft&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xt&&!x)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ye("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:E,maxSamples:R,samples:T}}function Ry(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ei,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,M=y*4;let E=p.clippingState||null;l.value=E,E=u(g,h,M,f);for(let R=0;R!==M;++R)E[R]=t[R];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,E=f;M!==_;++M,E+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const oi=4,bh=[.125,.215,.35,.446,.526,.582],Ti=20,Cy=256,qr=new to,Th=new Le;let Bl=null,kl=0,Hl=0,Vl=!1;const Py=new O;class Ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=Py}=s;Bl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bl,kl,Hl),this._renderer.xr.enabled=Vl,e.scissorTest=!1,pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:Ln,format:qt,colorSpace:Bt,depthBuffer:!1},r=wh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Iy(s)),this._blurMaterial=Dy(s,e,t),this._ggxMaterial=Ly(s,e,t)}return r}_compileMaterial(e){const t=new Vt(new jt,e);this._renderer.compile(t,qr)}_sceneToCubeUV(e,t,n,r,s){const l=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Th),d.toneMapping=fn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new Wr,new Vn({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Th),p=!0);for(let M=0;M<6;M++){const E=M%3;E===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):E===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const R=this._cubeSize;pr(r,E*R,M>2?R:0,R,R),d.setRenderTarget(r),p&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===gi||e.mapping===Bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;pr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,qr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-oi?n-g+oi:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,pr(s,m,p,3*_,2*_),r.setRenderTarget(s),r.render(a,qr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,pr(e,m,p,3*_,2*_),r.setRenderTarget(e),r.render(a,qr)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ti-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ti;m>Ti&&ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let y=0;for(let C=0;C<Ti;++C){const x=C/_,A=Math.exp(-x*x/2);p.push(A),C===0?y+=A:C<m&&(y+=2*A)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;const E=this._sizeLods[r],R=3*E*(r>M-oi?r-M+oi:0),T=4*(this._cubeSize-E);pr(t,R,T,3*E,2*E),l.setRenderTarget(t),l.render(d,qr)}}function Iy(i){const e=[],t=[],n=[];let r=i;const s=i-oi+1+bh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-oi?l=bh[o-i+oi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),M=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,x=T>2?0:-1,A=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];y.set(A,_*g*T),M.set(h,m*g*T);const P=[T,T,T,T,T,T];E.set(P,p*g*T)}const R=new jt;R.setAttribute("position",new It(y,_)),R.setAttribute("uv",new It(M,m)),R.setAttribute("faceIndex",new It(E,p)),n.push(new Vt(R,null)),r>oi&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function wh(i,e,t){const n=new _n(i,e,t);return n.texture.mapping=fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ly(i,e,t){return new yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:io(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Dy(i,e,t){const n=new Float32Array(Ti),r=new O(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:io(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Rh(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ch(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function io(){return`

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
	`}class Ph extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new sh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wr(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Pn});s.uniforms.tEquirect.value=t;const o=new Vt(r,s),a=t.minFilter;return t.minFilter===In&&(t.minFilter=St),new sv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}function Ny(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===ia||f===ra)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new Ph(g.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===ia||f===ra,_=f===gi||f===Bi;if(g||_){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Ah(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return g&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new Ah(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===ia?h.mapping=gi:f===ra&&(h.mapping=Bi),h}function l(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function Uy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ja("WebGLRenderer: "+n+" extension not supported."),r}}}function Oy(i,e,t,n){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const y=f.array;_=f.version;for(let M=0,E=y.length;M<E;M+=3){const R=y[M+0],T=y[M+1],C=y[M+2];h.push(R,T,T,C,C,R)}}else{const y=g.array;_=g.version;for(let M=0,E=y.length/3-1;M<E;M+=3){const R=M+0,T=M+1,C=M+2;h.push(R,T,T,C,C,R)}}const m=new(g.count>=65535?kd:Bd)(h,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Fy(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){i.drawElements(n,h,s,d*o),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,s,d*o,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];t.update(_,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function By(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:Re("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ky(i,e,t){const n=new WeakMap,r=new rt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let A=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let E=a.attributes.position.count*M,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*R*4*d),C=new wd(T,E,R,d);C.type=Xt,C.needsUpdate=!0;const x=M*4;for(let P=0;P<d;P++){const w=m[P],L=p[P],G=y[P],B=E*R*4*P;for(let N=0;N<w.count;N++){const H=N*x;f===!0&&(r.fromBufferAttribute(w,N),T[B+H+0]=r.x,T[B+H+1]=r.y,T[B+H+2]=r.z,T[B+H+3]=0),g===!0&&(r.fromBufferAttribute(L,N),T[B+H+4]=r.x,T[B+H+5]=r.y,T[B+H+6]=r.z,T[B+H+7]=0),_===!0&&(r.fromBufferAttribute(G,N),T[B+H+8]=r.x,T[B+H+9]=r.y,T[B+H+10]=r.z,T[B+H+11]=G.itemSize===4?r.w:1)}}h={count:d,texture:C,size:new Ye(E,R)},n.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Hy(i,e,t,n,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const Vy={[ed]:"LINEAR_TONE_MAPPING",[td]:"REINHARD_TONE_MAPPING",[nd]:"CINEON_TONE_MAPPING",[id]:"ACES_FILMIC_TONE_MAPPING",[sd]:"AGX_TONE_MAPPING",[od]:"NEUTRAL_TONE_MAPPING",[rd]:"CUSTOM_TONE_MAPPING"};function zy(i,e,t,n,r){const s=new _n(e,t,{type:i,depthBuffer:n,stencilBuffer:r,depthTexture:n?new nr(e,t):void 0}),o=new _n(e,t,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),a=new jt;a.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ln([0,2,0,0,2,0],2));const l=new F0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Vt(a,l),u=new to(-1,1,1,-1,0,1);let d=null,h=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(y,M){s.setSize(y,M),o.setSize(y,M);for(let E=0;E<m.length;E++){const R=m[E];R.setSize&&R.setSize(y,M)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;const M=s.width,E=s.height;for(let R=0;R<m.length;R++){const T=m[R];T.setSize&&T.setSize(M,E)}},this.begin=function(y,M){if(f||y.toneMapping===fn&&m.length===0)return!1;if(_=M,M!==null){const E=M.width,R=M.height;(s.width!==E||s.height!==R)&&this.setSize(E,R)}return p===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=fn,!0},this.hasRenderPass=function(){return p},this.end=function(y,M){y.toneMapping=g,f=!0;let E=s,R=o;for(let T=0;T<m.length;T++){const C=m[T];if(C.enabled!==!1&&(C.render(y,R,E,M),C.needsSwap!==!1)){const x=E;E=R,R=x}}if(d!==y.outputColorSpace||h!==y.toneMapping){d=y.outputColorSpace,h=y.toneMapping,l.defines={},Ge.getTransfer(d)===Je&&(l.defines.SRGB_TRANSFER="");const T=Vy[h];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(_),y.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Ih=new Tt,zl=new nr(1,1),Lh=new wd,Dh=new o0,Nh=new sh,Uh=[],Oh=[],Fh=new Float32Array(16),Bh=new Float32Array(9),kh=new Float32Array(4);function mr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Uh[r];if(s===void 0&&(s=new Float32Array(r),Uh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ro(i,e){let t=Oh[e];t===void 0&&(t=new Int32Array(e),Oh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function Xy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function qy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function Yy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;kh.set(n),i.uniformMatrix2fv(this.addr,!1,kh),Et(t,n)}}function Ky(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;Bh.set(n),i.uniformMatrix3fv(this.addr,!1,Bh),Et(t,n)}}function jy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;Fh.set(n),i.uniformMatrix4fv(this.addr,!1,Fh),Et(t,n)}}function $y(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function Jy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function Qy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function eS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function nS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function iS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function rS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(zl.compareFunction=t.isReversedDepthBuffer()?Ya:qa,s=zl):s=Ih,t.setTexture2D(e||s,r)}function sS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Dh,r)}function oS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Nh,r)}function aS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Lh,r)}function lS(i){switch(i){case 5126:return Gy;case 35664:return Wy;case 35665:return Xy;case 35666:return qy;case 35674:return Yy;case 35675:return Ky;case 35676:return jy;case 5124:case 35670:return $y;case 35667:case 35671:return Zy;case 35668:case 35672:return Jy;case 35669:case 35673:return Qy;case 5125:return eS;case 36294:return tS;case 36295:return nS;case 36296:return iS;case 35678:case 36198:case 36298:case 36306:case 35682:return rS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return oS;case 36289:case 36303:case 36311:case 36292:return aS}}function cS(i,e){i.uniform1fv(this.addr,e)}function uS(i,e){const t=mr(e,this.size,2);i.uniform2fv(this.addr,t)}function dS(i,e){const t=mr(e,this.size,3);i.uniform3fv(this.addr,t)}function hS(i,e){const t=mr(e,this.size,4);i.uniform4fv(this.addr,t)}function fS(i,e){const t=mr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pS(i,e){const t=mr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mS(i,e){const t=mr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gS(i,e){i.uniform1iv(this.addr,e)}function _S(i,e){i.uniform2iv(this.addr,e)}function vS(i,e){i.uniform3iv(this.addr,e)}function xS(i,e){i.uniform4iv(this.addr,e)}function yS(i,e){i.uniform1uiv(this.addr,e)}function SS(i,e){i.uniform2uiv(this.addr,e)}function MS(i,e){i.uniform3uiv(this.addr,e)}function ES(i,e){i.uniform4uiv(this.addr,e)}function bS(i,e,t){const n=this.cache,r=e.length,s=ro(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=zl:o=Ih;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function TS(i,e,t){const n=this.cache,r=e.length,s=ro(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Dh,s[o])}function AS(i,e,t){const n=this.cache,r=e.length,s=ro(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Nh,s[o])}function wS(i,e,t){const n=this.cache,r=e.length,s=ro(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Lh,s[o])}function RS(i){switch(i){case 5126:return cS;case 35664:return uS;case 35665:return dS;case 35666:return hS;case 35674:return fS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return gS;case 35667:case 35671:return _S;case 35668:case 35672:return vS;case 35669:case 35673:return xS;case 5125:return yS;case 36294:return SS;case 36295:return MS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return bS;case 35679:case 36299:case 36307:return TS;case 35680:case 36300:case 36308:case 36293:return AS;case 36289:case 36303:case 36311:case 36292:return wS}}class CS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lS(t.type)}}class PS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RS(t.type)}}class IS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Gl=/(\w+)(\])?(\[|\.)?/g;function Hh(i,e){i.seq.push(e),i.map[e.id]=e}function LS(i,e,t){const n=i.name,r=n.length;for(Gl.lastIndex=0;;){const s=Gl.exec(n),o=Gl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Hh(t,c===void 0?new CS(a,i,e):new PS(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new IS(a),Hh(t,d)),t=d}}}class so{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);LS(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Vh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const DS=37297;let NS=0;function US(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const zh=new Ie;function OS(i){Ge._getMatrix(zh,Ge.workingColorSpace,i);const e=`mat3( ${zh.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case Es:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Gh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+US(i.getShaderSource(e),a)}else return s}function FS(i,e){const t=OS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const BS={[ed]:"Linear",[td]:"Reinhard",[nd]:"Cineon",[id]:"ACESFilmic",[sd]:"AgX",[od]:"Neutral",[rd]:"Custom"};function kS(i,e){const t=BS[e];return t===void 0?(ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oo=new O;function HS(){Ge.getLuminanceCoefficients(oo);const i=oo.x.toFixed(4),e=oo.y.toFixed(4),t=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function zS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function GS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Yr(i){return i!==""}function Wh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(i){return i.replace(WS,qS)}const XS=new Map;function qS(i,e){let t=Fe[e];if(t===void 0){const n=XS.get(e);if(n!==void 0)t=Fe[n],ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wl(t)}const YS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(i){return i.replace(YS,KS)}function KS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const jS={[hs]:"SHADOWMAP_TYPE_PCF",[Ar]:"SHADOWMAP_TYPE_VSM"};function $S(i){return jS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZS={[gi]:"ENVMAP_TYPE_CUBE",[Bi]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE_UV"};function JS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ZS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const QS={[Bi]:"ENVMAP_MODE_REFRACTION"};function eM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":QS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tM={[Qu]:"ENVMAP_BLENDING_MULTIPLY",[x_]:"ENVMAP_BLENDING_MIX",[y_]:"ENVMAP_BLENDING_ADD"};function nM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":tM[i.combine]||"ENVMAP_BLENDING_NONE"}function iM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rM(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=$S(t),c=JS(t),u=eM(t),d=nM(t),h=iM(t),f=VS(t),g=zS(s),_=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),p.length>0&&(p+=`
`)):(m=[Yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),p=[Yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==fn?kS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,FS("linearToOutputTexel",t.outputColorSpace),HS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),o=Wl(o),o=Wh(o,t),o=Xh(o,t),a=Wl(a),a=Wh(a,t),a=Xh(a,t),o=qh(o),a=qh(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===yd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+o,E=y+p+a,R=Vh(r,r.VERTEX_SHADER,M),T=Vh(r,r.FRAGMENT_SHADER,E);r.attachShader(_,R),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(w){if(i.debug.checkShaderErrors){const L=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(R)||"",B=r.getShaderInfoLog(T)||"",N=L.trim(),H=G.trim(),z=B.trim();let J=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,R,T);else{const re=Gh(r,R,"vertex"),xe=Gh(r,T,"fragment");Re("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+N+`
`+re+`
`+xe)}else N!==""?ye("WebGLProgram: Program Info Log:",N):(H===""||z==="")&&(Z=!1);Z&&(w.diagnostics={runnable:J,programLog:N,vertexShader:{log:H,prefix:m},fragmentShader:{log:z,prefix:p}})}r.deleteShader(R),r.deleteShader(T),x=new so(r,_),A=GS(r,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(_,DS)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let sM=0;class oM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new aM(e),t.set(e,n)),n}}class aM{constructor(e){this.id=sM++,this.code=e,this.usedTimes=0}}function lM(i){return i===vi||i===ys||i===Ss}function cM(i,e,t,n,r,s){const o=new Pd,a=new oM,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,A,P,w,L,G){const B=w.fog,N=L.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=e.get(x.envMap||H,z),Z=J&&J.mapping===fs?J.image.height:null,re=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&ye("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const xe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,be=xe!==void 0?xe.length:0;let We=0;N.morphAttributes.position!==void 0&&(We=1),N.morphAttributes.normal!==void 0&&(We=2),N.morphAttributes.color!==void 0&&(We=3);let Ze,Ce,$,ue;if(re){const Ne=En[re];Ze=Ne.vertexShader,Ce=Ne.fragmentShader}else Ze=x.vertexShader,Ce=x.fragmentShader,a.update(x),$=a.getVertexShaderID(x),ue=a.getFragmentShaderID(x);const X=i.getRenderTarget(),se=i.state.buffers.depth.getReversed(),Ee=L.isInstancedMesh===!0,Se=L.isBatchedMesh===!0,et=!!x.map,De=!!x.matcap,qe=!!J,tt=!!x.aoMap,Be=!!x.lightMap,dt=!!x.bumpMap,at=!!x.normalMap,zt=!!x.displacementMap,D=!!x.emissiveMap,bt=!!x.metalnessMap,Xe=!!x.roughnessMap,lt=x.anisotropy>0,de=x.clearcoat>0,ht=x.dispersion>0,b=x.iridescence>0,v=x.sheen>0,F=x.transmission>0,K=lt&&!!x.anisotropyMap,ee=de&&!!x.clearcoatMap,te=de&&!!x.clearcoatNormalMap,le=de&&!!x.clearcoatRoughnessMap,q=b&&!!x.iridescenceMap,j=b&&!!x.iridescenceThicknessMap,pe=v&&!!x.sheenColorMap,_e=v&&!!x.sheenRoughnessMap,oe=!!x.specularMap,ne=!!x.specularColorMap,Pe=!!x.specularIntensityMap,Oe=F&&!!x.transmissionMap,je=F&&!!x.thicknessMap,I=!!x.gradientMap,ie=!!x.alphaMap,Y=x.alphaTest>0,me=!!x.alphaHash,ae=!!x.extensions;let Q=fn;x.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Q=i.toneMapping);const Te={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:Ze,fragmentShader:Ce,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Se,batchingColor:Se&&L._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&L.instanceColor!==null,instancingMorph:Ee&&L.morphTexture!==null,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:et,matcap:De,envMap:qe,envMapMode:qe&&J.mapping,envMapCubeUVHeight:Z,aoMap:tt,lightMap:Be,bumpMap:dt,normalMap:at,displacementMap:zt,emissiveMap:D,normalMapObjectSpace:at&&x.normalMapType===w_,normalMapTangentSpace:at&&x.normalMapType===Xa,packedNormalMap:at&&x.normalMapType===Xa&&lM(x.normalMap.format),metalnessMap:bt,roughnessMap:Xe,anisotropy:lt,anisotropyMap:K,clearcoat:de,clearcoatMap:ee,clearcoatNormalMap:te,clearcoatRoughnessMap:le,dispersion:ht,iridescence:b,iridescenceMap:q,iridescenceThicknessMap:j,sheen:v,sheenColorMap:pe,sheenRoughnessMap:_e,specularMap:oe,specularColorMap:ne,specularIntensityMap:Pe,transmission:F,transmissionMap:Oe,thicknessMap:je,gradientMap:I,opaque:x.transparent===!1&&x.blending===Oi&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:Y,alphaHash:me,combine:x.combine,mapUv:et&&g(x.map.channel),aoMapUv:tt&&g(x.aoMap.channel),lightMapUv:Be&&g(x.lightMap.channel),bumpMapUv:dt&&g(x.bumpMap.channel),normalMapUv:at&&g(x.normalMap.channel),displacementMapUv:zt&&g(x.displacementMap.channel),emissiveMapUv:D&&g(x.emissiveMap.channel),metalnessMapUv:bt&&g(x.metalnessMap.channel),roughnessMapUv:Xe&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:ee&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:j&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(x.sheenRoughnessMap.channel),specularMapUv:oe&&g(x.specularMap.channel),specularColorMapUv:ne&&g(x.specularColorMap.channel),specularIntensityMapUv:Pe&&g(x.specularIntensityMap.channel),transmissionMapUv:Oe&&g(x.transmissionMap.channel),thicknessMapUv:je&&g(x.thicknessMap.channel),alphaMapUv:ie&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(at||lt),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(et||ie),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&at===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:se,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:We,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,decodeVideoTexture:et&&x.map.isVideoTexture===!0&&Ge.getTransfer(x.map.colorSpace)===Je,decodeVideoTextureEmissive:D&&x.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(x.emissiveMap.colorSpace)===Je,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===en,flipSided:x.side===Ut,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)A.push(P),A.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(A,x),y(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function p(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function y(x,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function M(x){const A=f[x.type];let P;if(A){const w=En[A];P=N0.clone(w.uniforms)}else P=x.uniforms;return P}function E(x,A){let P=u.get(A);return P!==void 0?++P.usedTimes:(P=new rM(i,A,x,r),c.push(P),u.set(A,P)),P}function R(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:E,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:C}}function uM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function dM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Kh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,_,m,p){let y=i[e];return y===void 0?(y={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},i[e]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=g,y.materialVariant=o(h),y.groupOrder=_,y.renderOrder=h.renderOrder,y.z=m,y.group=p),e++,y}function l(h,f,g,_,m,p){const y=a(h,f,g,_,m,p);g.transmission>0?n.push(y):g.transparent===!0?r.push(y):t.push(y)}function c(h,f,g,_,m,p){const y=a(h,f,g,_,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?r.unshift(y):t.unshift(y)}function u(h,f){t.length>1&&t.sort(h||dM),n.length>1&&n.sort(f||Kh),r.length>1&&r.sort(f||Kh)}function d(){for(let h=e,f=i.length;h<f;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function hM(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new jh,i.set(n,[o])):r>=s.length?(o=new jh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function fM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Le};break;case"SpotLight":t={position:new O,direction:new O,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function pM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let mM=0;function gM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _M(i){const e=new fM,t=pM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const r=new O,s=new ke,o=new ke;function a(c){let u=0,d=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,M=0,E=0,R=0,T=0,C=0;c.sort(gM);for(let A=0,P=c.length;A<P;A++){const w=c[A],L=w.color,G=w.intensity,B=w.distance;let N=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===vi?N=w.shadow.map.texture:N=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=L.r*G,d+=L.g*G,h+=L.b*G;else if(w.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(w.sh.coefficients[H],G);C++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const z=w.shadow,J=t.get(w);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=w.shadow.matrix,y++}n.directional[f]=H,f++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(L).multiplyScalar(G),H.distance=B,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,n.spot[_]=H;const z=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,z.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[_]=z.matrix,w.castShadow){const J=t.get(w);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=N,E++}_++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(L).multiplyScalar(G),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=H,m++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const z=w.shadow,J=t.get(w);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,J.shadowCameraNear=z.camera.near,J.shadowCameraFar=z.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=w.shadow.matrix,M++}n.point[g]=H,g++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(G),H.groundColor.copy(w.groundColor).multiplyScalar(G),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==M||x.numSpotShadows!==E||x.numSpotMaps!==R||x.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=E+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=M,x.numSpotShadows=E,x.numSpotMaps=R,x.numLightProbes=C,n.version=mM++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(M.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function $h(i){const e=new _M(i),t=[],n=[],r=[];function s(h){d.camera=h,t.length=0,n.length=0,r.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function vM(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new $h(i),e.set(r,[a])):s>=o.length?(a=new $h(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const xM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yM=`uniform sampler2D shadow_pass;
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
}`,SM=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],MM=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Zh=new ke,Kr=new O,Xl=new O;function EM(i,e,t){let n=new Al;const r=new Ye,s=new Ye,o=new rt,a=new B0,l=new k0,c={},u=t.maxTextureSize,d={[hn]:Ut,[Ut]:hn,[en]:en},h=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:xM,fragmentShader:yM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hs;let p=this.type;this.render=function(T,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===e_&&(ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hs);const A=i.getRenderTarget(),P=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Pn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const G=p!==this.type;G&&C.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(N=>N.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,N=T.length;B<N;B++){const H=T[B],z=H.shadow;if(z===void 0){ye("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const J=z.getFrameExtents();r.multiply(J),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,z.mapSize.y=s.y));const Z=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Z,z.map===null||G===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ar){if(H.isPointLight){ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new _n(r.x,r.y,{format:vi,type:Ln,minFilter:St,magFilter:St,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new nr(r.x,r.y,Xt),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=Dn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=yt,z.map.depthTexture.magFilter=yt}else H.isPointLight?(z.map=new Ph(r.x),z.map.depthTexture=new L0(r.x,mn)):(z.map=new _n(r.x,r.y),z.map.depthTexture=new nr(r.x,r.y,mn)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=Dn,this.type===hs?(z.map.depthTexture.compareFunction=Z?Ya:qa,z.map.depthTexture.minFilter=St,z.map.depthTexture.magFilter=St):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=yt,z.map.depthTexture.magFilter=yt);z.camera.updateProjectionMatrix()}const re=z.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<re;xe++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,xe),i.clear();else{xe===0&&(i.setRenderTarget(z.map),i.clear());const be=z.getViewport(xe);o.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),L.viewport(o)}if(H.isPointLight){const be=z.camera,We=z.matrix,Ze=H.distance||be.far;Ze!==be.far&&(be.far=Ze,be.updateProjectionMatrix()),Kr.setFromMatrixPosition(H.matrixWorld),be.position.copy(Kr),Xl.copy(be.position),Xl.add(SM[xe]),be.up.copy(MM[xe]),be.lookAt(Xl),be.updateMatrixWorld(),We.makeTranslation(-Kr.x,-Kr.y,-Kr.z),Zh.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Zh,be.coordinateSystem,be.reversedDepth)}else z.updateMatrices(H);n=z.getFrustum(),E(C,x,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===Ar&&y(z,x),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,P,w)};function y(T,C){const x=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new _n(r.x,r.y,{format:vi,type:Ln})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,x,f,_,null)}function M(T,C,x,A){let P=null;const w=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)P=w;else if(P=x.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const L=P.uuid,G=C.uuid;let B=c[L];B===void 0&&(B={},c[L]=B);let N=B[G];N===void 0&&(N=P.clone(),B[G]=N,C.addEventListener("dispose",R)),P=N}if(P.visible=C.visible,P.wireframe=C.wireframe,A===Ar?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:d[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const L=i.properties.get(P);L.light=x}return P}function E(T,C,x,A,P){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Ar)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const G=e.update(T),B=T.material;if(Array.isArray(B)){const N=G.groups;for(let H=0,z=N.length;H<z;H++){const J=N[H],Z=B[J.materialIndex];if(Z&&Z.visible){const re=M(T,Z,A,P);T.onBeforeShadow(i,T,C,x,G,re,J),i.renderBufferDirect(x,null,G,re,T,J),T.onAfterShadow(i,T,C,x,G,re,J)}}}else if(B.visible){const N=M(T,B,A,P);T.onBeforeShadow(i,T,C,x,G,N,null),i.renderBufferDirect(x,null,G,N,T,null),T.onAfterShadow(i,T,C,x,G,N,null)}}const L=T.children;for(let G=0,B=L.length;G<B;G++)E(L[G],C,x,A,P)}function R(T){T.target.removeEventListener("dispose",R);for(const x in c){const A=c[x],P=T.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function bM(i,e){function t(){let I=!1;const ie=new rt;let Y=null;const me=new rt(0,0,0,0);return{setMask:function(ae){Y!==ae&&!I&&(i.colorMask(ae,ae,ae,ae),Y=ae)},setLocked:function(ae){I=ae},setClear:function(ae,Q,Te,Ne,gt){gt===!0&&(ae*=Ne,Q*=Ne,Te*=Ne),ie.set(ae,Q,Te,Ne),me.equals(ie)===!1&&(i.clearColor(ae,Q,Te,Ne),me.copy(ie))},reset:function(){I=!1,Y=null,me.set(-1,0,0,0)}}}function n(){let I=!1,ie=!1,Y=null,me=null,ae=null;return{setReversed:function(Q){if(ie!==Q){const Te=e.get("EXT_clip_control");Q?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ie=Q;const Ne=ae;ae=null,this.setClear(Ne)}},getReversed:function(){return ie},setTest:function(Q){Q?X(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(Q){Y!==Q&&!I&&(i.depthMask(Q),Y=Q)},setFunc:function(Q){if(ie&&(Q=B_[Q]),me!==Q){switch(Q){case $o:i.depthFunc(i.NEVER);break;case Zo:i.depthFunc(i.ALWAYS);break;case Jo:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case Qo:i.depthFunc(i.EQUAL);break;case ea:i.depthFunc(i.GEQUAL);break;case ta:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=Q}},setLocked:function(Q){I=Q},setClear:function(Q){ae!==Q&&(ae=Q,ie&&(Q=1-Q),i.clearDepth(Q))},reset:function(){I=!1,Y=null,me=null,ae=null,ie=!1}}}function r(){let I=!1,ie=null,Y=null,me=null,ae=null,Q=null,Te=null,Ne=null,gt=null;return{setTest:function(nt){I||(nt?X(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(nt){ie!==nt&&!I&&(i.stencilMask(nt),ie=nt)},setFunc:function(nt,Xn,An){(Y!==nt||me!==Xn||ae!==An)&&(i.stencilFunc(nt,Xn,An),Y=nt,me=Xn,ae=An)},setOp:function(nt,Xn,An){(Q!==nt||Te!==Xn||Ne!==An)&&(i.stencilOp(nt,Xn,An),Q=nt,Te=Xn,Ne=An)},setLocked:function(nt){I=nt},setClear:function(nt){gt!==nt&&(i.clearStencil(nt),gt=nt)},reset:function(){I=!1,ie=null,Y=null,me=null,ae=null,Q=null,Te=null,Ne=null,gt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,M=null,E=null,R=null,T=null,C=null,x=new Le(0,0,0),A=0,P=!1,w=null,L=null,G=null,B=null,N=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=J>=1):Z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=J>=2);let re=null,xe={};const be=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),Ze=new rt().fromArray(be),Ce=new rt().fromArray(We);function $(I,ie,Y,me){const ae=new Uint8Array(4),Q=i.createTexture();i.bindTexture(I,Q),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<Y;Te++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(ie+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return Q}const ue={};ue[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(i.DEPTH_TEST),o.setFunc(Fi),dt(!1),at(ju),X(i.CULL_FACE),tt(Pn);function X(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function se(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Ee(I,ie){return h[I]!==ie?(i.bindFramebuffer(I,ie),h[I]=ie,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ie),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Se(I,ie){let Y=g,me=!1;if(I){Y=f.get(ie),Y===void 0&&(Y=[],f.set(ie,Y));const ae=I.textures;if(Y.length!==ae.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Te=ae.length;Q<Te;Q++)Y[Q]=i.COLOR_ATTACHMENT0+Q;Y.length=ae.length,me=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,me=!0);me&&i.drawBuffers(Y)}function et(I){return _!==I?(i.useProgram(I),_=I,!0):!1}const De={[mi]:i.FUNC_ADD,[n_]:i.FUNC_SUBTRACT,[i_]:i.FUNC_REVERSE_SUBTRACT};De[r_]=i.MIN,De[s_]=i.MAX;const qe={[o_]:i.ZERO,[a_]:i.ONE,[l_]:i.SRC_COLOR,[Ko]:i.SRC_ALPHA,[p_]:i.SRC_ALPHA_SATURATE,[h_]:i.DST_COLOR,[u_]:i.DST_ALPHA,[c_]:i.ONE_MINUS_SRC_COLOR,[jo]:i.ONE_MINUS_SRC_ALPHA,[f_]:i.ONE_MINUS_DST_COLOR,[d_]:i.ONE_MINUS_DST_ALPHA,[m_]:i.CONSTANT_COLOR,[g_]:i.ONE_MINUS_CONSTANT_COLOR,[__]:i.CONSTANT_ALPHA,[v_]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(I,ie,Y,me,ae,Q,Te,Ne,gt,nt){if(I===Pn){m===!0&&(se(i.BLEND),m=!1);return}if(m===!1&&(X(i.BLEND),m=!0),I!==t_){if(I!==p||nt!==P){if((y!==mi||R!==mi)&&(i.blendEquation(i.FUNC_ADD),y=mi,R=mi),nt)switch(I){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $u:i.blendFunc(i.ONE,i.ONE);break;case Zu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ju:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Re("WebGLState: Invalid blending: ",I);break}else switch(I){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $u:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zu:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ju:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",I);break}M=null,E=null,T=null,C=null,x.set(0,0,0),A=0,p=I,P=nt}return}ae=ae||ie,Q=Q||Y,Te=Te||me,(ie!==y||ae!==R)&&(i.blendEquationSeparate(De[ie],De[ae]),y=ie,R=ae),(Y!==M||me!==E||Q!==T||Te!==C)&&(i.blendFuncSeparate(qe[Y],qe[me],qe[Q],qe[Te]),M=Y,E=me,T=Q,C=Te),(Ne.equals(x)===!1||gt!==A)&&(i.blendColor(Ne.r,Ne.g,Ne.b,gt),x.copy(Ne),A=gt),p=I,P=!1}function Be(I,ie){I.side===en?se(i.CULL_FACE):X(i.CULL_FACE);let Y=I.side===Ut;ie&&(Y=!Y),dt(Y),I.blending===Oi&&I.transparent===!1?tt(Pn):tt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const me=I.stencilWrite;a.setTest(me),me&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),D(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(I){w!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),w=I)}function at(I){I!==Jg?(X(i.CULL_FACE),I!==L&&(I===ju?i.cullFace(i.BACK):I===Qg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),L=I}function zt(I){I!==G&&(z&&i.lineWidth(I),G=I)}function D(I,ie,Y){I?(X(i.POLYGON_OFFSET_FILL),(B!==ie||N!==Y)&&(B=ie,N=Y,o.getReversed()&&(ie=-ie),i.polygonOffset(ie,Y))):se(i.POLYGON_OFFSET_FILL)}function bt(I){I?X(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function Xe(I){I===void 0&&(I=i.TEXTURE0+H-1),re!==I&&(i.activeTexture(I),re=I)}function lt(I,ie,Y){Y===void 0&&(re===null?Y=i.TEXTURE0+H-1:Y=re);let me=xe[Y];me===void 0&&(me={type:void 0,texture:void 0},xe[Y]=me),(me.type!==I||me.texture!==ie)&&(re!==Y&&(i.activeTexture(Y),re=Y),i.bindTexture(I,ie||ue[I]),me.type=I,me.texture=ie)}function de(){const I=xe[re];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ht(){try{i.compressedTexImage2D(...arguments)}catch(I){Re("WebGLState:",I)}}function b(){try{i.compressedTexImage3D(...arguments)}catch(I){Re("WebGLState:",I)}}function v(){try{i.texSubImage2D(...arguments)}catch(I){Re("WebGLState:",I)}}function F(){try{i.texSubImage3D(...arguments)}catch(I){Re("WebGLState:",I)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Re("WebGLState:",I)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Re("WebGLState:",I)}}function te(){try{i.texStorage2D(...arguments)}catch(I){Re("WebGLState:",I)}}function le(){try{i.texStorage3D(...arguments)}catch(I){Re("WebGLState:",I)}}function q(){try{i.texImage2D(...arguments)}catch(I){Re("WebGLState:",I)}}function j(){try{i.texImage3D(...arguments)}catch(I){Re("WebGLState:",I)}}function pe(I){return d[I]!==void 0?d[I]:i.getParameter(I)}function _e(I,ie){d[I]!==ie&&(i.pixelStorei(I,ie),d[I]=ie)}function oe(I){Ze.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ze.copy(I))}function ne(I){Ce.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Ce.copy(I))}function Pe(I,ie){let Y=c.get(ie);Y===void 0&&(Y=new WeakMap,c.set(ie,Y));let me=Y.get(I);me===void 0&&(me=i.getUniformBlockIndex(ie,I.name),Y.set(I,me))}function Oe(I,ie){const me=c.get(ie).get(I);l.get(ie)!==me&&(i.uniformBlockBinding(ie,me,I.__bindingPointIndex),l.set(ie,me))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,xe={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,M=null,E=null,R=null,T=null,C=null,x=new Le(0,0,0),A=0,P=!1,w=null,L=null,G=null,B=null,N=null,Ze.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:X,disable:se,bindFramebuffer:Ee,drawBuffers:Se,useProgram:et,setBlending:tt,setMaterial:Be,setFlipSided:dt,setCullFace:at,setLineWidth:zt,setPolygonOffset:D,setScissorTest:bt,activeTexture:Xe,bindTexture:lt,unbindTexture:de,compressedTexImage2D:ht,compressedTexImage3D:b,texImage2D:q,texImage3D:j,pixelStorei:_e,getParameter:pe,updateUBOMapping:Pe,uniformBlockBinding:Oe,texStorage2D:te,texStorage3D:le,texSubImage2D:v,texSubImage3D:F,compressedTexSubImage2D:K,compressedTexSubImage3D:ee,scissor:oe,viewport:ne,reset:je}}function TM(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,v){return g?new OffscreenCanvas(b,v):Dr("canvas")}function m(b,v,F){let K=1;const ee=ht(b);if((ee.width>F||ee.height>F)&&(K=F/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const te=Math.floor(K*ee.width),le=Math.floor(K*ee.height);h===void 0&&(h=_(te,le));const q=v?_(te,le):h;return q.width=te,q.height=le,q.getContext("2d").drawImage(b,0,0,te,le),ye("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+te+"x"+le+")."),q}else return"data"in b&&ye("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function p(b){return b.generateMipmaps}function y(b){i.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,v,F,K,ee,te=!1){if(b!==null){if(i[b]!==void 0)return i[b];ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let le;K&&(le=e.get("EXT_texture_norm16"),le||ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=v;if(v===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8),F===i.UNSIGNED_SHORT&&le&&(q=le.R16_EXT),F===i.SHORT&&le&&(q=le.R16_SNORM_EXT)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),v===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8),F===i.UNSIGNED_SHORT&&le&&(q=le.RG16_EXT),F===i.SHORT&&le&&(q=le.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),v===i.RGB&&(F===i.UNSIGNED_SHORT&&le&&(q=le.RGB16_EXT),F===i.SHORT&&le&&(q=le.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),v===i.RGBA){const j=te?Es:Ge.getTransfer(ee);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=j===Je?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&le&&(q=le.RGBA16_EXT),F===i.SHORT&&le&&(q=le.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function R(b,v){let F;return b?v===null||v===mn||v===Cr?F=i.DEPTH24_STENCIL8:v===Xt?F=i.DEPTH32F_STENCIL8:v===Rr&&(F=i.DEPTH24_STENCIL8,ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mn||v===Cr?F=i.DEPTH_COMPONENT24:v===Xt?F=i.DEPTH_COMPONENT32F:v===Rr&&(F=i.DEPTH_COMPONENT16),F}function T(b,v){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==yt&&b.minFilter!==St?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function C(b){const v=b.target;v.removeEventListener("dispose",C),A(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function x(b){const v=b.target;v.removeEventListener("dispose",x),w(v)}function A(b){const v=n.get(b);if(v.__webglInit===void 0)return;const F=b.source,K=f.get(F);if(K){const ee=K[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(b),Object.keys(K).length===0&&f.delete(F)}n.remove(b)}function P(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const F=b.source,K=f.get(F);delete K[v.__cacheKey],o.memory.textures--}function w(b){const v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let ee=0;ee<v.__webglFramebuffer[K].length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[K][ee]);else i.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)i.deleteFramebuffer(v.__webglFramebuffer[K]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=b.textures;for(let K=0,ee=F.length;K<ee;K++){const te=n.get(F[K]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(F[K])}n.remove(b)}let L=0;function G(){L=0}function B(){return L}function N(b){L=b}function H(){const b=L;return b>=r.maxTextures&&ye("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),L+=1,b}function z(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function J(b,v){const F=n.get(b);if(b.isVideoTexture&&lt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){const K=b.image;if(K===null)ye("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)ye("WebGLRenderer: Texture marked for update but image is incomplete");else{se(F,b,v);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function Z(b,v){const F=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){se(F,b,v);return}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function re(b,v){const F=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){se(F,b,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function xe(b,v){const F=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&F.__version!==b.version){Ee(F,b,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const be={[ki]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[ps]:i.MIRRORED_REPEAT},We={[yt]:i.NEAREST,[cd]:i.NEAREST_MIPMAP_NEAREST,[wr]:i.NEAREST_MIPMAP_LINEAR,[St]:i.LINEAR,[ms]:i.LINEAR_MIPMAP_NEAREST,[In]:i.LINEAR_MIPMAP_LINEAR},Ze={[R_]:i.NEVER,[D_]:i.ALWAYS,[C_]:i.LESS,[qa]:i.LEQUAL,[P_]:i.EQUAL,[Ya]:i.GEQUAL,[I_]:i.GREATER,[L_]:i.NOTEQUAL};function Ce(b,v){if(v.type===Xt&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===St||v.magFilter===ms||v.magFilter===wr||v.magFilter===In||v.minFilter===St||v.minFilter===ms||v.minFilter===wr||v.minFilter===In)&&ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,be[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,be[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,be[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,We[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,We[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Ze[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===yt||v.minFilter!==wr&&v.minFilter!==In||v.type===Xt&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $(b,v){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",C));const K=v.source;let ee=f.get(K);ee===void 0&&(ee={},f.set(K,ee));const te=z(v);if(te!==b.__cacheKey){ee[te]===void 0&&(ee[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[te].usedTimes++;const le=ee[b.__cacheKey];le!==void 0&&(ee[b.__cacheKey].usedTimes--,le.usedTimes===0&&P(v)),b.__cacheKey=te,b.__webglTexture=ee[te].texture}return F}function ue(b,v,F){return Math.floor(Math.floor(b/F)/v)}function X(b,v,F,K){const te=b.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,K,v.data);else{te.sort((_e,oe)=>_e.start-oe.start);let le=0;for(let _e=1;_e<te.length;_e++){const oe=te[le],ne=te[_e],Pe=oe.start+oe.count,Oe=ue(ne.start,v.width,4),je=ue(oe.start,v.width,4);ne.start<=Pe+1&&Oe===je&&ue(ne.start+ne.count-1,v.width,4)===Oe?oe.count=Math.max(oe.count,ne.start+ne.count-oe.start):(++le,te[le]=ne)}te.length=le+1;const q=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let _e=0,oe=te.length;_e<oe;_e++){const ne=te[_e],Pe=Math.floor(ne.start/4),Oe=Math.ceil(ne.count/4),je=Pe%v.width,I=Math.floor(Pe/v.width),ie=Oe,Y=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,je),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,je,I,ie,Y,F,K,v.data)}b.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function se(b,v,F){let K=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=i.TEXTURE_3D);const ee=$(b,v),te=v.source;t.bindTexture(K,b.__webglTexture,i.TEXTURE0+F);const le=n.get(te);if(te.version!==le.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const Y=Ge.getPrimaries(Ge.workingColorSpace),me=v.colorSpace===$n?null:Ge.getPrimaries(v.colorSpace),ae=v.colorSpace===$n||Y===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let j=m(v.image,!1,r.maxTextureSize);j=de(v,j);const pe=s.convert(v.format,v.colorSpace),_e=s.convert(v.type);let oe=E(v.internalFormat,pe,_e,v.normalized,v.colorSpace,v.isVideoTexture);Ce(K,v);let ne;const Pe=v.mipmaps,Oe=v.isVideoTexture!==!0,je=le.__version===void 0||ee===!0,I=te.dataReady,ie=T(v,j);if(v.isDepthTexture)oe=R(v.format===_i,v.type),je&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,oe,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,oe,j.width,j.height,0,pe,_e,null));else if(v.isDataTexture)if(Pe.length>0){Oe&&je&&t.texStorage2D(i.TEXTURE_2D,ie,oe,Pe[0].width,Pe[0].height);for(let Y=0,me=Pe.length;Y<me;Y++)ne=Pe[Y],Oe?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ne.width,ne.height,pe,_e,ne.data):t.texImage2D(i.TEXTURE_2D,Y,oe,ne.width,ne.height,0,pe,_e,ne.data);v.generateMipmaps=!1}else Oe?(je&&t.texStorage2D(i.TEXTURE_2D,ie,oe,j.width,j.height),I&&X(v,j,pe,_e)):t.texImage2D(i.TEXTURE_2D,0,oe,j.width,j.height,0,pe,_e,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Oe&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,oe,Pe[0].width,Pe[0].height,j.depth);for(let Y=0,me=Pe.length;Y<me;Y++)if(ne=Pe[Y],v.format!==qt)if(pe!==null)if(Oe){if(I)if(v.layerUpdates.size>0){const ae=Sh(ne.width,ne.height,v.format,v.type);for(const Q of v.layerUpdates){const Te=ne.data.subarray(Q*ae/ne.data.BYTES_PER_ELEMENT,(Q+1)*ae/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,Q,ne.width,ne.height,1,pe,Te)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ne.width,ne.height,j.depth,pe,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,oe,ne.width,ne.height,j.depth,0,ne.data,0,0);else ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ne.width,ne.height,j.depth,pe,_e,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,oe,ne.width,ne.height,j.depth,0,pe,_e,ne.data)}else{Oe&&je&&t.texStorage2D(i.TEXTURE_2D,ie,oe,Pe[0].width,Pe[0].height);for(let Y=0,me=Pe.length;Y<me;Y++)ne=Pe[Y],v.format!==qt?pe!==null?Oe?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ne.width,ne.height,pe,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,oe,ne.width,ne.height,0,ne.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ne.width,ne.height,pe,_e,ne.data):t.texImage2D(i.TEXTURE_2D,Y,oe,ne.width,ne.height,0,pe,_e,ne.data)}else if(v.isDataArrayTexture)if(Oe){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,oe,j.width,j.height,j.depth),I)if(v.layerUpdates.size>0){const Y=Sh(j.width,j.height,v.format,v.type);for(const me of v.layerUpdates){const ae=j.data.subarray(me*Y/j.data.BYTES_PER_ELEMENT,(me+1)*Y/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,j.width,j.height,1,pe,_e,ae)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pe,_e,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,oe,j.width,j.height,j.depth,0,pe,_e,j.data);else if(v.isData3DTexture)Oe?(je&&t.texStorage3D(i.TEXTURE_3D,ie,oe,j.width,j.height,j.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pe,_e,j.data)):t.texImage3D(i.TEXTURE_3D,0,oe,j.width,j.height,j.depth,0,pe,_e,j.data);else if(v.isFramebufferTexture){if(je)if(Oe)t.texStorage2D(i.TEXTURE_2D,ie,oe,j.width,j.height);else{let Y=j.width,me=j.height;for(let ae=0;ae<ie;ae++)t.texImage2D(i.TEXTURE_2D,ae,oe,Y,me,0,pe,_e,null),Y>>=1,me>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const Y=i.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),j.parentNode!==Y){Y.appendChild(j),d.add(v),Y.onpaint=Ne=>{const gt=Ne.changedElements;for(const nt of d)gt.includes(nt.image)&&(nt.needsUpdate=!0)},Y.requestPaint();return}const me=0,ae=i.RGBA,Q=i.RGBA,Te=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,me,ae,Q,Te,j),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Oe&&je){const Y=ht(Pe[0]);t.texStorage2D(i.TEXTURE_2D,ie,oe,Y.width,Y.height)}for(let Y=0,me=Pe.length;Y<me;Y++)ne=Pe[Y],Oe?I&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,pe,_e,ne):t.texImage2D(i.TEXTURE_2D,Y,oe,pe,_e,ne);v.generateMipmaps=!1}else if(Oe){if(je){const Y=ht(j);t.texStorage2D(i.TEXTURE_2D,ie,oe,Y.width,Y.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,_e,j)}else t.texImage2D(i.TEXTURE_2D,0,oe,pe,_e,j);p(v)&&y(K),le.__version=te.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Ee(b,v,F){if(v.image.length!==6)return;const K=$(b,v),ee=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const te=n.get(ee);if(ee.version!==te.__version||K===!0){t.activeTexture(i.TEXTURE0+F);const le=Ge.getPrimaries(Ge.workingColorSpace),q=v.colorSpace===$n?null:Ge.getPrimaries(v.colorSpace),j=v.colorSpace===$n||le===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const pe=v.isCompressedTexture||v.image[0].isCompressedTexture,_e=v.image[0]&&v.image[0].isDataTexture,oe=[];for(let Q=0;Q<6;Q++)!pe&&!_e?oe[Q]=m(v.image[Q],!0,r.maxCubemapSize):oe[Q]=_e?v.image[Q].image:v.image[Q],oe[Q]=de(v,oe[Q]);const ne=oe[0],Pe=s.convert(v.format,v.colorSpace),Oe=s.convert(v.type),je=E(v.internalFormat,Pe,Oe,v.normalized,v.colorSpace),I=v.isVideoTexture!==!0,ie=te.__version===void 0||K===!0,Y=ee.dataReady;let me=T(v,ne);Ce(i.TEXTURE_CUBE_MAP,v);let ae;if(pe){I&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,je,ne.width,ne.height);for(let Q=0;Q<6;Q++){ae=oe[Q].mipmaps;for(let Te=0;Te<ae.length;Te++){const Ne=ae[Te];v.format!==qt?Pe!==null?I?Y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,Ne.width,Ne.height,Pe,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,je,Ne.width,Ne.height,0,Ne.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,Ne.width,Ne.height,Pe,Oe,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,je,Ne.width,Ne.height,0,Pe,Oe,Ne.data)}}}else{if(ae=v.mipmaps,I&&ie){ae.length>0&&me++;const Q=ht(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(_e){I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,oe[Q].width,oe[Q].height,Pe,Oe,oe[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,oe[Q].width,oe[Q].height,0,Pe,Oe,oe[Q].data);for(let Te=0;Te<ae.length;Te++){const gt=ae[Te].image[Q].image;I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,gt.width,gt.height,Pe,Oe,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,je,gt.width,gt.height,0,Pe,Oe,gt.data)}}else{I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe,Oe,oe[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,Pe,Oe,oe[Q]);for(let Te=0;Te<ae.length;Te++){const Ne=ae[Te];I?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,Pe,Oe,Ne.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,je,Pe,Oe,Ne.image[Q])}}}p(v)&&y(i.TEXTURE_CUBE_MAP),te.__version=ee.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Se(b,v,F,K,ee,te){const le=s.convert(F.format,F.colorSpace),q=s.convert(F.type),j=E(F.internalFormat,le,q,F.normalized,F.colorSpace),pe=n.get(v),_e=n.get(F);if(_e.__renderTarget=v,!pe.__hasExternalTextures){const oe=Math.max(1,v.width>>te),ne=Math.max(1,v.height>>te);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,te,j,oe,ne,v.depth,0,le,q,null):t.texImage2D(ee,te,j,oe,ne,0,le,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Xe(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ee,_e.__webglTexture,0,bt(v)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ee,_e.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(b,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){const K=v.depthTexture,ee=K&&K.isDepthTexture?K.type:null,te=R(v.stencilBuffer,ee),le=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Xe(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(v),te,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(v),te,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,te,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,b)}else{const K=v.textures;for(let ee=0;ee<K.length;ee++){const te=K[ee],le=s.convert(te.format,te.colorSpace),q=s.convert(te.type),j=E(te.internalFormat,le,q,te.normalized,te.colorSpace);Xe(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(v),j,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(v),j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(b,v,F){const K=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(v.depthTexture);if(ee.__renderTarget=v,(!ee.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,v.depthTexture);const pe=s.convert(v.depthTexture.format),_e=s.convert(v.depthTexture.type);let oe;v.depthTexture.format===Dn?oe=i.DEPTH_COMPONENT24:v.depthTexture.format===_i&&(oe=i.DEPTH24_STENCIL8);for(let ne=0;ne<6;ne++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,oe,v.width,v.height,0,pe,_e,null)}}else J(v.depthTexture,0);const te=ee.__webglTexture,le=bt(v),q=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,j=v.depthTexture.format===_i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Dn)Xe(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,q,te,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,j,q,te,0);else if(v.depthTexture.format===_i)Xe(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,q,te,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,j,q,te,0);else throw new Error("Unknown depthTexture format")}function qe(b){const v=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=K}if(b.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let K=0;K<6;K++)De(v.__webglFramebuffer[K],b,K);else{const K=b.texture.mipmaps;K&&K.length>0?De(v.__webglFramebuffer[0],b,0):De(v.__webglFramebuffer,b,0)}else if(F){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=i.createRenderbuffer(),et(v.__webglDepthbuffer[K],b,!1);else{const ee=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,te)}}else{const K=b.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),et(v.__webglDepthbuffer,b,!1);else{const ee=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(b,v,F){const K=n.get(b);v!==void 0&&Se(K.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&qe(b)}function Be(b){const v=b.texture,F=n.get(b),K=n.get(v);b.addEventListener("dispose",x);const ee=b.textures,te=b.isWebGLCubeRenderTarget===!0,le=ee.length>1;if(le||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=v.version,o.memory.textures++),te){F.__webglFramebuffer=[];for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[q]=[];for(let j=0;j<v.mipmaps.length;j++)F.__webglFramebuffer[q][j]=i.createFramebuffer()}else F.__webglFramebuffer[q]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let q=0;q<v.mipmaps.length;q++)F.__webglFramebuffer[q]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(le)for(let q=0,j=ee.length;q<j;q++){const pe=n.get(ee[q]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&Xe(b)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let q=0;q<ee.length;q++){const j=ee[q];F.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[q]);const pe=s.convert(j.format,j.colorSpace),_e=s.convert(j.type),oe=E(j.internalFormat,pe,_e,j.normalized,j.colorSpace,b.isXRRenderTarget===!0),ne=bt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,oe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,F.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),et(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,v);for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)Se(F.__webglFramebuffer[q][j],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,j);else Se(F.__webglFramebuffer[q],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(v)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let q=0,j=ee.length;q<j;q++){const pe=ee[q],_e=n.get(pe);let oe=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,_e.__webglTexture),Ce(oe,pe),Se(F.__webglFramebuffer,b,pe,i.COLOR_ATTACHMENT0+q,oe,0),p(pe)&&y(oe)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(q=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,K.__webglTexture),Ce(q,v),v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)Se(F.__webglFramebuffer[j],b,v,i.COLOR_ATTACHMENT0,q,j);else Se(F.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,q,0);p(v)&&y(q),t.unbindTexture()}b.depthBuffer&&qe(b)}function dt(b){const v=b.textures;for(let F=0,K=v.length;F<K;F++){const ee=v[F];if(p(ee)){const te=M(b),le=n.get(ee).__webglTexture;t.bindTexture(te,le),y(te),t.unbindTexture()}}}const at=[],zt=[];function D(b){if(b.samples>0){if(Xe(b)===!1){const v=b.textures,F=b.width,K=b.height;let ee=i.COLOR_BUFFER_BIT;const te=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(b),q=v.length>1;if(q)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const j=b.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[pe]);const _e=n.get(v[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,ee,i.NEAREST),l===!0&&(at.length=0,zt.length=0,at.push(i.COLOR_ATTACHMENT0+pe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(at.push(te),zt.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,le.__webglColorRenderbuffer[pe]);const _e=n.get(v[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,_e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function bt(b){return Math.min(r.maxSamples,b.samples)}function Xe(b){const v=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function lt(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function de(b,v){const F=b.colorSpace,K=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Bt&&F!==$n&&(Ge.getTransfer(F)===Je?(K!==qt||ee!==Ft)&&ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",F)),v}function ht(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.getTextureUnits=B,this.setTextureUnits=N,this.setTexture2D=J,this.setTexture2DArray=Z,this.setTexture3D=re,this.setTextureCube=xe,this.rebindTextures=tt,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function AM(i,e){function t(n,r=$n){let s;const o=Ge.getTransfer(r);if(n===Ft)return i.UNSIGNED_BYTE;if(n===oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ud)return i.BYTE;if(n===dd)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===sa)return i.INT;if(n===mn)return i.UNSIGNED_INT;if(n===Xt)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===pd)return i.ALPHA;if(n===md)return i.RGB;if(n===qt)return i.RGBA;if(n===Dn)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===la)return i.RED;if(n===ca)return i.RED_INTEGER;if(n===vi)return i.RG;if(n===ua)return i.RG_INTEGER;if(n===da)return i.RGBA_INTEGER;if(n===gs||n===_s||n===vs||n===xs)if(o===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===fa||n===pa||n===ma)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ma)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ga||n===_a||n===va||n===xa||n===ya||n===ys||n===Sa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ga||n===_a)return o===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===va)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===xa)return s.COMPRESSED_R11_EAC;if(n===ya)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ys)return s.COMPRESSED_RG11_EAC;if(n===Sa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ma||n===Ea||n===ba||n===Ta||n===Aa||n===wa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Na||n===Ua)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ma)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ta)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Aa)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wa)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pa)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ia)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Na)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oa||n===Fa||n===Ba)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Oa)return o===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ka||n===Ha||n===Ss||n===Va)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ka)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ha)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ss)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const wM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RM=`
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

}`;class CM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new oh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new yn({vertexShader:wM,fragmentShader:RM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new Zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PM extends Zn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new CM,p={},y=t.getContextAttributes();let M=null,E=null;const R=[],T=[],C=new Ye;let x=null;const A=new Nt;A.viewport=new rt;const P=new Nt;P.viewport=new rt;const w=[A,P],L=new ov;let G=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ue=R[$];return ue===void 0&&(ue=new il,R[$]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function($){let ue=R[$];return ue===void 0&&(ue=new il,R[$]=ue),ue.getGripSpace()},this.getHand=function($){let ue=R[$];return ue===void 0&&(ue=new il,R[$]=ue),ue.getHandSpace()};function N($){const ue=T.indexOf($.inputSource);if(ue===-1)return;const X=R[ue];X!==void 0&&(X.update($.inputSource,$.frame,c||o),X.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",z);for(let $=0;$<R.length;$++){const ue=T[$];ue!==null&&(T[$]=null,R[$].disconnect(ue))}G=null,B=null,m.reset();for(const $ in p)delete p[$];e.setRenderTarget(M),f=null,h=null,d=null,r=null,E=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",H),r.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,se=null,Ee=null;y.depth&&(Ee=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=y.stencil?_i:Dn,se=y.stencil?Cr:mn);const Se={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Se),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new _n(h.textureWidth,h.textureHeight,{format:qt,type:Ft,depthTexture:new nr(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const X={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new _n(f.framebufferWidth,f.framebufferHeight,{format:qt,type:Ft,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ce.setContext(r),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z($){for(let ue=0;ue<$.removed.length;ue++){const X=$.removed[ue],se=T.indexOf(X);se>=0&&(T[se]=null,R[se].disconnect(X))}for(let ue=0;ue<$.added.length;ue++){const X=$.added[ue];let se=T.indexOf(X);if(se===-1){for(let Se=0;Se<R.length;Se++)if(Se>=T.length){T.push(X),se=Se;break}else if(T[Se]===null){T[Se]=X,se=Se;break}if(se===-1)break}const Ee=R[se];Ee&&Ee.connect(X)}}const J=new O,Z=new O;function re($,ue,X){J.setFromMatrixPosition(ue.matrixWorld),Z.setFromMatrixPosition(X.matrixWorld);const se=J.distanceTo(Z),Ee=ue.projectionMatrix.elements,Se=X.projectionMatrix.elements,et=Ee[14]/(Ee[10]-1),De=Ee[14]/(Ee[10]+1),qe=(Ee[9]+1)/Ee[5],tt=(Ee[9]-1)/Ee[5],Be=(Ee[8]-1)/Ee[0],dt=(Se[8]+1)/Se[0],at=et*Be,zt=et*dt,D=se/(-Be+dt),bt=D*-Be;if(ue.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(bt),$.translateZ(D),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ee[10]===-1)$.projectionMatrix.copy(ue.projectionMatrix),$.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Xe=et+D,lt=De+D,de=at-bt,ht=zt+(se-bt),b=qe*De/lt*Xe,v=tt*De/lt*Xe;$.projectionMatrix.makePerspective(de,ht,b,v,Xe,lt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function xe($,ue){ue===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ue.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ue=$.near,X=$.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(X=m.depthFar)),L.near=P.near=A.near=ue,L.far=P.far=A.far=X,(G!==L.near||B!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),G=L.near,B=L.far),L.layers.mask=$.layers.mask|6,A.layers.mask=L.layers.mask&-5,P.layers.mask=L.layers.mask&-3;const se=$.parent,Ee=L.cameras;xe(L,se);for(let Se=0;Se<Ee.length;Se++)xe(Ee[Se],se);Ee.length===2?re(L,A,P):L.projectionMatrix.copy(A.projectionMatrix),be($,L,se)};function be($,ue,X){X===null?$.matrix.copy(ue.matrixWorld):($.matrix.copy(X.matrixWorld),$.matrix.invert(),$.matrix.multiply(ue.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ue.projectionMatrix),$.projectionMatrixInverse.copy(ue.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Gi*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function($){return p[$]};let We=null;function Ze($,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const X=u.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let se=!1;X.length!==L.cameras.length&&(L.cameras.length=0,se=!0);for(let De=0;De<X.length;De++){const qe=X[De];let tt=null;if(f!==null)tt=f.getViewport(qe);else{const dt=d.getViewSubImage(h,qe);tt=dt.viewport,De===0&&(e.setRenderTargetTextures(E,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(E))}let Be=w[De];Be===void 0&&(Be=new Nt,Be.layers.enable(De),Be.viewport=new rt,w[De]=Be),Be.matrix.fromArray(qe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(qe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(tt.x,tt.y,tt.width,tt.height),De===0&&(L.matrix.copy(Be.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),se===!0&&L.cameras.push(Be)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const De=d.getDepthInformation(X[0]);De&&De.isValid&&De.texture&&m.init(De,r.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let De=0;De<X.length;De++){const qe=X[De].camera;if(qe){let tt=p[qe];tt||(tt=new oh,p[qe]=tt);const Be=d.getCameraImage(qe);tt.sourceTexture=Be}}}}for(let X=0;X<R.length;X++){const se=T[X],Ee=R[X];se!==null&&Ee!==void 0&&Ee.update(se,ue,c||o)}We&&We($,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}const Ce=new Mh;Ce.setAnimationLoop(Ze),this.setAnimationLoop=function($){We=$},this.dispose=function(){}}}const IM=new ke,Jh=new Ie;Jh.set(-1,0,0,0,1,0,0,0,1);function LM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,M,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ut&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ut&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,E=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(IM.makeRotationFromEuler(E)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Jh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ut&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function DM(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const E=M.program;n.uniformBlockBinding(y,E)}function c(y,M){let E=r[y.id];E===void 0&&(g(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",m));const R=M.program;n.updateUBOMapping(y,R);const T=e.render.frame;s[y.id]!==T&&(h(y),s[y.id]=T)}function u(y){const M=d();y.__bindingPointIndex=M;const E=i.createBuffer(),R=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const M=r[y.id],E=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,C=E.length;T<C;T++){const x=Array.isArray(E[T])?E[T]:[E[T]];for(let A=0,P=x.length;A<P;A++){const w=x[A];if(f(w,T,A,R)===!0){const L=w.__offset,G=Array.isArray(w.value)?w.value:[w.value];let B=0;for(let N=0;N<G.length;N++){const H=G[N],z=_(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,L+B,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):ArrayBuffer.isView(H)?w.__data.set(new H.constructor(H.buffer,H.byteOffset,w.__data.length)):(H.toArray(w.__data,B),B+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,M,E,R){const T=y.value,C=M+"_"+E;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:ArrayBuffer.isView(T)?R[C]=T.slice():R[C]=T.clone(),!0;{const x=R[C];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return R[C]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function g(y){const M=y.uniforms;let E=0;const R=16;for(let C=0,x=M.length;C<x;C++){const A=Array.isArray(M[C])?M[C]:[M[C]];for(let P=0,w=A.length;P<w;P++){const L=A[P],G=Array.isArray(L.value)?L.value:[L.value];for(let B=0,N=G.length;B<N;B++){const H=G[B],z=_(H),J=E%R,Z=J%z.boundary,re=J+Z;E+=Z,re!==0&&R-re<z.storage&&(E+=R-re),L.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=z.storage}}}const T=E%R;return T>0&&(E+=R-T),y.__size=E,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):ye("WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}const NM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function UM(){return bn===null&&(bn=new Ml(NM,16,16,vi,Ln),bn.name="DFG_LUT",bn.minFilter=St,bn.magFilter=St,bn.wrapS=pn,bn.wrapT=pn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class OM{constructor(e={}){const{canvas:t=O_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Ft}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=f,m=new Set([da,ua,ca]),p=new Set([Ft,mn,Rr,Cr,oa,aa]),y=new Uint32Array(4),M=new Int32Array(4),E=new O;let R=null,T=null;const C=[],x=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let w=!1,L=null;this._outputColorSpace=wt;let G=0,B=0,N=null,H=-1,z=null;const J=new rt,Z=new rt;let re=null;const xe=new Le(0);let be=0,We=t.width,Ze=t.height,Ce=1,$=null,ue=null;const X=new rt(0,0,We,Ze),se=new rt(0,0,We,Ze);let Ee=!1;const Se=new Al;let et=!1,De=!1;const qe=new ke,tt=new O,Be=new rt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function zt(){return N===null?Ce:1}let D=n;function bt(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yo}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),D===null){const U="webgl2";if(D=bt(U,S),D===null)throw bt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw Re("WebGLRenderer: "+S.message),S}let Xe,lt,de,ht,b,v,F,K,ee,te,le,q,j,pe,_e,oe,ne,Pe,Oe,je,I,ie,Y;function me(){Xe=new Uy(D),Xe.init(),I=new AM(D,Xe),lt=new wy(D,Xe,e,I),de=new bM(D,Xe),lt.reversedDepthBuffer&&h&&de.buffers.depth.setReversed(!0),ht=new By(D),b=new uM,v=new TM(D,Xe,de,b,lt,I,ht),F=new Ny(P),K=new Mv(D),ie=new Ty(D,K),ee=new Oy(D,K,ht,ie),te=new Hy(D,ee,K,ie,ht),Pe=new ky(D,lt,v),_e=new Ry(b),le=new cM(P,F,Xe,lt,ie,_e),q=new LM(P,b),j=new hM,pe=new vM(Xe),ne=new by(P,F,de,te,g,l),oe=new EM(P,te,lt),Y=new DM(D,ht,lt,de),Oe=new Ay(D,Xe,ht),je=new Fy(D,Xe,ht),ht.programs=le.programs,P.capabilities=lt,P.extensions=Xe,P.properties=b,P.renderLists=j,P.shadowMap=oe,P.state=de,P.info=ht}me(),_!==Ft&&(A=new zy(_,t.width,t.height,r,s));const ae=new PM(P,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=Xe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Xe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(S){S!==void 0&&(Ce=S,this.setSize(We,Ze,!1))},this.getSize=function(S){return S.set(We,Ze)},this.setSize=function(S,U,W=!0){if(ae.isPresenting){ye("WebGLRenderer: Can't change size while VR device is presenting.");return}We=S,Ze=U,t.width=Math.floor(S*Ce),t.height=Math.floor(U*Ce),W===!0&&(t.style.width=S+"px",t.style.height=U+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(We*Ce,Ze*Ce).floor()},this.setDrawingBufferSize=function(S,U,W){We=S,Ze=U,Ce=W,t.width=Math.floor(S*W),t.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(_===Ft){Re("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){ye("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(J)},this.getViewport=function(S){return S.copy(X)},this.setViewport=function(S,U,W,k){S.isVector4?X.set(S.x,S.y,S.z,S.w):X.set(S,U,W,k),de.viewport(J.copy(X).multiplyScalar(Ce).round())},this.getScissor=function(S){return S.copy(se)},this.setScissor=function(S,U,W,k){S.isVector4?se.set(S.x,S.y,S.z,S.w):se.set(S,U,W,k),de.scissor(Z.copy(se).multiplyScalar(Ce).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(S){de.setScissorTest(Ee=S)},this.setOpaqueSort=function(S){$=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,W=!0){let k=0;if(S){let V=!1;if(N!==null){const fe=N.texture.format;V=m.has(fe)}if(V){const fe=N.texture.type,ve=p.has(fe),he=ne.getClearColor(),Me=ne.getClearAlpha(),Ae=he.r,Ue=he.g,He=he.b;ve?(y[0]=Ae,y[1]=Ue,y[2]=He,y[3]=Me,D.clearBufferuiv(D.COLOR,0,y)):(M[0]=Ae,M[1]=Ue,M[2]=He,M[3]=Me,D.clearBufferiv(D.COLOR,0,M))}else k|=D.COLOR_BUFFER_BIT}U&&(k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),L=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),ne.dispose(),j.dispose(),pe.dispose(),b.dispose(),F.dispose(),te.dispose(),ie.dispose(),Y.dispose(),le.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",kf),ae.removeEventListener("sessionend",Hf),Ri.stop()};function Q(S){S.preventDefault(),bs("WebGLRenderer: Context Lost."),w=!0}function Te(){bs("WebGLRenderer: Context Restored."),w=!1;const S=ht.autoReset,U=oe.enabled,W=oe.autoUpdate,k=oe.needsUpdate,V=oe.type;me(),ht.autoReset=S,oe.enabled=U,oe.autoUpdate=W,oe.needsUpdate=k,oe.type=V}function Ne(S){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function gt(S){const U=S.target;U.removeEventListener("dispose",gt),nt(U)}function nt(S){Xn(S),b.remove(S)}function Xn(S){const U=b.get(S).programs;U!==void 0&&(U.forEach(function(W){le.releaseProgram(W)}),S.isShaderMaterial&&le.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,W,k,V,fe){U===null&&(U=dt);const ve=V.isMesh&&V.matrixWorld.determinant()<0,he=Gb(S,U,W,k,V);de.setMaterial(k,ve);let Me=W.index,Ae=1;if(k.wireframe===!0){if(Me=ee.getWireframeAttribute(W),Me===void 0)return;Ae=2}const Ue=W.drawRange,He=W.attributes.position;let we=Ue.start*Ae,it=(Ue.start+Ue.count)*Ae;fe!==null&&(we=Math.max(we,fe.start*Ae),it=Math.min(it,(fe.start+fe.count)*Ae)),Me!==null?(we=Math.max(we,0),it=Math.min(it,Me.count)):He!=null&&(we=Math.max(we,0),it=Math.min(it,He.count));const _t=it-we;if(_t<0||_t===1/0)return;ie.setup(V,k,he,W,Me);let ft,st=Oe;if(Me!==null&&(ft=K.get(Me),st=je,st.setIndex(ft)),V.isMesh)k.wireframe===!0?(de.setLineWidth(k.wireframeLinewidth*zt()),st.setMode(D.LINES)):st.setMode(D.TRIANGLES);else if(V.isLine){let Pt=k.linewidth;Pt===void 0&&(Pt=1),de.setLineWidth(Pt*zt()),V.isLineSegments?st.setMode(D.LINES):V.isLineLoop?st.setMode(D.LINE_LOOP):st.setMode(D.LINE_STRIP)}else V.isPoints?st.setMode(D.POINTS):V.isSprite&&st.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))st.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Pt=V._multiDrawStarts,ge=V._multiDrawCounts,Gt=V._multiDrawCount,Ke=Me?K.get(Me).bytesPerElement:1,Jt=b.get(k).currentProgram.getUniforms();for(let wn=0;wn<Gt;wn++)Jt.setValue(D,"_gl_DrawID",wn),st.render(Pt[wn]/Ke,ge[wn])}else if(V.isInstancedMesh)st.renderInstances(we,_t,V.count);else if(W.isInstancedBufferGeometry){const Pt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ge=Math.min(W.instanceCount,Pt);st.renderInstances(we,_t,ge)}else st.render(we,_t)};function An(S,U,W){S.transparent===!0&&S.side===en&&S.forceSinglePass===!1?(S.side=Ut,S.needsUpdate=!0,go(S,U,W),S.side=hn,S.needsUpdate=!0,go(S,U,W),S.side=en):go(S,U,W)}this.compile=function(S,U,W=null){W===null&&(W=S),T=pe.get(W),T.init(U),x.push(T),W.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),S!==W&&S.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights();const k=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const fe=V.material;if(fe)if(Array.isArray(fe))for(let ve=0;ve<fe.length;ve++){const he=fe[ve];An(he,W,V),k.add(he)}else An(fe,W,V),k.add(fe)}),T=x.pop(),k},this.compileAsync=function(S,U,W=null){const k=this.compile(S,U,W);return new Promise(V=>{function fe(){if(k.forEach(function(ve){b.get(ve).currentProgram.isReady()&&k.delete(ve)}),k.size===0){V(S);return}setTimeout(fe,10)}Xe.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let hc=null;function Vb(S){hc&&hc(S)}function kf(){Ri.stop()}function Hf(){Ri.start()}const Ri=new Mh;Ri.setAnimationLoop(Vb),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(S){hc=S,ae.setAnimationLoop(S),S===null?Ri.stop():Ri.start()},ae.addEventListener("sessionstart",kf),ae.addEventListener("sessionend",Hf),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;L!==null&&L.renderStart(S,U);const W=ae.enabled===!0&&ae.isPresenting===!0,k=A!==null&&(N===null||W)&&A.begin(P,N);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,U,N),T=pe.get(S,x.length),T.init(U),T.state.textureUnits=v.getTextureUnits(),x.push(T),qe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Se.setFromProjectionMatrix(qe,gn,U.reversedDepth),De=this.localClippingEnabled,et=_e.init(this.clippingPlanes,De),R=j.get(S,C.length),R.init(),C.push(R),ae.enabled===!0&&ae.isPresenting===!0){const ve=P.xr.getDepthSensingMesh();ve!==null&&fc(ve,U,-1/0,P.sortObjects)}fc(S,U,0,P.sortObjects),R.finish(),P.sortObjects===!0&&R.sort($,ue),at=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,at&&ne.addToRenderList(R,S),this.info.render.frame++,et===!0&&_e.beginShadows();const V=T.state.shadowsArray;if(oe.render(V,S,U),et===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&A.hasRenderPass())===!1){const ve=R.opaque,he=R.transmissive;if(T.setupLights(),U.isArrayCamera){const Me=U.cameras;if(he.length>0)for(let Ae=0,Ue=Me.length;Ae<Ue;Ae++){const He=Me[Ae];zf(ve,he,S,He)}at&&ne.render(S);for(let Ae=0,Ue=Me.length;Ae<Ue;Ae++){const He=Me[Ae];Vf(R,S,He,He.viewport)}}else he.length>0&&zf(ve,he,S,U),at&&ne.render(S),Vf(R,S,U)}N!==null&&B===0&&(v.updateMultisampleRenderTarget(N),v.updateRenderTargetMipmap(N)),k&&A.end(P),S.isScene===!0&&S.onAfterRender(P,S,U),ie.resetDefaultState(),H=-1,z=null,x.pop(),x.length>0?(T=x[x.length-1],v.setTextureUnits(T.state.textureUnits),et===!0&&_e.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?R=C[C.length-1]:R=null,L!==null&&L.renderEnd()};function fc(S,U,W,k){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Se.intersectsSprite(S)){k&&Be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(qe);const ve=te.update(S),he=S.material;he.visible&&R.push(S,ve,he,W,Be.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Se.intersectsObject(S))){const ve=te.update(S),he=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Be.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Be.copy(ve.boundingSphere.center)),Be.applyMatrix4(S.matrixWorld).applyMatrix4(qe)),Array.isArray(he)){const Me=ve.groups;for(let Ae=0,Ue=Me.length;Ae<Ue;Ae++){const He=Me[Ae],we=he[He.materialIndex];we&&we.visible&&R.push(S,ve,we,W,Be.z,He)}}else he.visible&&R.push(S,ve,he,W,Be.z,null)}}const fe=S.children;for(let ve=0,he=fe.length;ve<he;ve++)fc(fe[ve],U,W,k)}function Vf(S,U,W,k){const{opaque:V,transmissive:fe,transparent:ve}=S;T.setupLightsView(W),et===!0&&_e.setGlobalState(P.clippingPlanes,W),k&&de.viewport(J.copy(k)),V.length>0&&mo(V,U,W),fe.length>0&&mo(fe,U,W),ve.length>0&&mo(ve,U,W),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function zf(S,U,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){const we=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new _n(1,1,{generateMipmaps:!0,type:we?Ln:Ft,minFilter:In,samples:Math.max(4,lt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const fe=T.state.transmissionRenderTarget[k.id],ve=k.viewport||J;fe.setSize(ve.z*P.transmissionResolutionScale,ve.w*P.transmissionResolutionScale);const he=P.getRenderTarget(),Me=P.getActiveCubeFace(),Ae=P.getActiveMipmapLevel();P.setRenderTarget(fe),P.getClearColor(xe),be=P.getClearAlpha(),be<1&&P.setClearColor(16777215,.5),P.clear(),at&&ne.render(W);const Ue=P.toneMapping;P.toneMapping=fn;const He=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),et===!0&&_e.setGlobalState(P.clippingPlanes,k),mo(S,W,k),v.updateMultisampleRenderTarget(fe),v.updateRenderTargetMipmap(fe),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let it=0,_t=U.length;it<_t;it++){const ft=U[it],{object:st,geometry:Pt,material:ge,group:Gt}=ft;if(ge.side===en&&st.layers.test(k.layers)){const Ke=ge.side;ge.side=Ut,ge.needsUpdate=!0,Gf(st,W,k,Pt,ge,Gt),ge.side=Ke,ge.needsUpdate=!0,we=!0}}we===!0&&(v.updateMultisampleRenderTarget(fe),v.updateRenderTargetMipmap(fe))}P.setRenderTarget(he,Me,Ae),P.setClearColor(xe,be),He!==void 0&&(k.viewport=He),P.toneMapping=Ue}function mo(S,U,W){const k=U.isScene===!0?U.overrideMaterial:null;for(let V=0,fe=S.length;V<fe;V++){const ve=S[V],{object:he,geometry:Me,group:Ae}=ve;let Ue=ve.material;Ue.allowOverride===!0&&k!==null&&(Ue=k),he.layers.test(W.layers)&&Gf(he,U,W,Me,Ue,Ae)}}function Gf(S,U,W,k,V,fe){S.onBeforeRender(P,U,W,k,V,fe),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(P,U,W,k,S,fe),V.transparent===!0&&V.side===en&&V.forceSinglePass===!1?(V.side=Ut,V.needsUpdate=!0,P.renderBufferDirect(W,U,k,V,S,fe),V.side=hn,V.needsUpdate=!0,P.renderBufferDirect(W,U,k,V,S,fe),V.side=en):P.renderBufferDirect(W,U,k,V,S,fe),S.onAfterRender(P,U,W,k,V,fe)}function go(S,U,W){U.isScene!==!0&&(U=dt);const k=b.get(S),V=T.state.lights,fe=T.state.shadowsArray,ve=V.state.version,he=le.getParameters(S,V.state,fe,U,W,T.state.lightProbeGridArray),Me=le.getProgramCacheKey(he);let Ae=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;const Ue=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=F.get(S.envMap||k.environment,Ue),k.envMapRotation=k.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ae===void 0&&(S.addEventListener("dispose",gt),Ae=new Map,k.programs=Ae);let He=Ae.get(Me);if(He!==void 0){if(k.currentProgram===He&&k.lightsStateVersion===ve)return Xf(S,he),He}else he.uniforms=le.getUniforms(S),L!==null&&S.isNodeMaterial&&L.build(S,W,he),S.onBeforeCompile(he,P),He=le.acquireProgram(he,Me),Ae.set(Me,He),k.uniforms=he.uniforms;const we=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(we.clippingPlanes=_e.uniform),Xf(S,he),k.needsLights=Xb(S),k.lightsStateVersion=ve,k.needsLights&&(we.ambientLightColor.value=V.state.ambient,we.lightProbe.value=V.state.probe,we.directionalLights.value=V.state.directional,we.directionalLightShadows.value=V.state.directionalShadow,we.spotLights.value=V.state.spot,we.spotLightShadows.value=V.state.spotShadow,we.rectAreaLights.value=V.state.rectArea,we.ltc_1.value=V.state.rectAreaLTC1,we.ltc_2.value=V.state.rectAreaLTC2,we.pointLights.value=V.state.point,we.pointLightShadows.value=V.state.pointShadow,we.hemisphereLights.value=V.state.hemi,we.directionalShadowMatrix.value=V.state.directionalShadowMatrix,we.spotLightMatrix.value=V.state.spotLightMatrix,we.spotLightMap.value=V.state.spotLightMap,we.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=He,k.uniformsList=null,He}function Wf(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=so.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Xf(S,U){const W=b.get(S);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function zb(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;E.setFromMatrixPosition(U.matrixWorld);for(let W=0,k=S.length;W<k;W++){const V=S[W];if(V.texture!==null&&V.boundingBox.containsPoint(E))return V}return null}function Gb(S,U,W,k,V){U.isScene!==!0&&(U=dt),v.resetTextureUnits();const fe=U.fog,ve=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,he=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ge.workingColorSpace,Me=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ae=F.get(k.envMap||ve,Me),Ue=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),we=!!W.morphAttributes.position,it=!!W.morphAttributes.normal,_t=!!W.morphAttributes.color;let ft=fn;k.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ft=P.toneMapping);const st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Pt=st!==void 0?st.length:0,ge=b.get(k),Gt=T.state.lights;if(et===!0&&(De===!0||S!==z)){const ct=S===z&&k.id===H;_e.setState(k,S,ct)}let Ke=!1;k.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Gt.state.version||ge.outputColorSpace!==he||V.isBatchedMesh&&ge.batching===!1||!V.isBatchedMesh&&ge.batching===!0||V.isBatchedMesh&&ge.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&ge.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&ge.instancing===!1||!V.isInstancedMesh&&ge.instancing===!0||V.isSkinnedMesh&&ge.skinning===!1||!V.isSkinnedMesh&&ge.skinning===!0||V.isInstancedMesh&&ge.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ge.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ge.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ge.instancingMorph===!1&&V.morphTexture!==null||ge.envMap!==Ae||k.fog===!0&&ge.fog!==fe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==_e.numPlanes||ge.numIntersection!==_e.numIntersection)||ge.vertexAlphas!==Ue||ge.vertexTangents!==He||ge.morphTargets!==we||ge.morphNormals!==it||ge.morphColors!==_t||ge.toneMapping!==ft||ge.morphTargetsCount!==Pt||!!ge.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,ge.__version=k.version);let Jt=ge.currentProgram;Ke===!0&&(Jt=go(k,U,V),L&&k.isNodeMaterial&&L.onUpdateProgram(k,Jt,ge));let wn=!1,li=!1,vr=!1;const ot=Jt.getUniforms(),vt=ge.uniforms;if(de.useProgram(Jt.program)&&(wn=!0,li=!0,vr=!0),k.id!==H&&(H=k.id,li=!0),ge.needsLights){const ct=zb(T.state.lightProbeGridArray,V);ge.lightProbeGrid!==ct&&(ge.lightProbeGrid=ct,li=!0)}if(wn||z!==S){de.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ot.setValue(D,"projectionMatrix",S.projectionMatrix),ot.setValue(D,"viewMatrix",S.matrixWorldInverse);const ui=ot.map.cameraPosition;ui!==void 0&&ui.setValue(D,tt.setFromMatrixPosition(S.matrixWorld)),lt.logarithmicDepthBuffer&&ot.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ot.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),z!==S&&(z=S,li=!0,vr=!0)}if(ge.needsLights&&(Gt.state.directionalShadowMap.length>0&&ot.setValue(D,"directionalShadowMap",Gt.state.directionalShadowMap,v),Gt.state.spotShadowMap.length>0&&ot.setValue(D,"spotShadowMap",Gt.state.spotShadowMap,v),Gt.state.pointShadowMap.length>0&&ot.setValue(D,"pointShadowMap",Gt.state.pointShadowMap,v)),V.isSkinnedMesh){ot.setOptional(D,V,"bindMatrix"),ot.setOptional(D,V,"bindMatrixInverse");const ct=V.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),ot.setValue(D,"boneTexture",ct.boneTexture,v))}V.isBatchedMesh&&(ot.setOptional(D,V,"batchingTexture"),ot.setValue(D,"batchingTexture",V._matricesTexture,v),ot.setOptional(D,V,"batchingIdTexture"),ot.setValue(D,"batchingIdTexture",V._indirectTexture,v),ot.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&ot.setValue(D,"batchingColorTexture",V._colorsTexture,v));const ci=W.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&Pe.update(V,W,Jt),(li||ge.receiveShadow!==V.receiveShadow)&&(ge.receiveShadow=V.receiveShadow,ot.setValue(D,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(vt.envMapIntensity.value=U.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=UM()),li){if(ot.setValue(D,"toneMappingExposure",P.toneMappingExposure),ge.needsLights&&Wb(vt,vr),fe&&k.fog===!0&&q.refreshFogUniforms(vt,fe),q.refreshMaterialUniforms(vt,k,Ce,Ze,T.state.transmissionRenderTarget[S.id]),ge.needsLights&&ge.lightProbeGrid){const ct=ge.lightProbeGrid;vt.probesSH.value=ct.texture,vt.probesMin.value.copy(ct.boundingBox.min),vt.probesMax.value.copy(ct.boundingBox.max),vt.probesResolution.value.copy(ct.resolution)}so.upload(D,Wf(ge),vt,v)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(so.upload(D,Wf(ge),vt,v),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ot.setValue(D,"center",V.center),ot.setValue(D,"modelViewMatrix",V.modelViewMatrix),ot.setValue(D,"normalMatrix",V.normalMatrix),ot.setValue(D,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){const ct=k.uniformsGroups;for(let ui=0,xr=ct.length;ui<xr;ui++){const qf=ct[ui];Y.update(qf,Jt),Y.bind(qf,Jt)}}return Jt}function Wb(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Xb(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(S,U,W){const k=b.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),b.get(S.texture).__webglTexture=U,b.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const W=b.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const qb=D.createFramebuffer();this.setRenderTarget=function(S,U=0,W=0){N=S,G=U,B=W;let k=null,V=!1,fe=!1;if(S){const he=b.get(S);if(he.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(D.FRAMEBUFFER,he.__webglFramebuffer),J.copy(S.viewport),Z.copy(S.scissor),re=S.scissorTest,de.viewport(J),de.scissor(Z),de.setScissorTest(re),H=-1;return}else if(he.__webglFramebuffer===void 0)v.setupRenderTarget(S);else if(he.__hasExternalTextures)v.rebindTextures(S,b.get(S.texture).__webglTexture,b.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ue=S.depthTexture;if(he.__boundDepthTexture!==Ue){if(Ue!==null&&b.has(Ue)&&(S.width!==Ue.image.width||S.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(S)}}const Me=S.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(fe=!0);const Ae=b.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?k=Ae[U][W]:k=Ae[U],V=!0):S.samples>0&&v.useMultisampledRTT(S)===!1?k=b.get(S).__webglMultisampledFramebuffer:Array.isArray(Ae)?k=Ae[W]:k=Ae,J.copy(S.viewport),Z.copy(S.scissor),re=S.scissorTest}else J.copy(X).multiplyScalar(Ce).floor(),Z.copy(se).multiplyScalar(Ce).floor(),re=Ee;if(W!==0&&(k=qb),de.bindFramebuffer(D.FRAMEBUFFER,k)&&de.drawBuffers(S,k),de.viewport(J),de.scissor(Z),de.setScissorTest(re),V){const he=b.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,W)}else if(fe){const he=U;for(let Me=0;Me<S.textures.length;Me++){const Ae=b.get(S.textures[Me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Me,Ae.__webglTexture,W,he)}}else if(S!==null&&W!==0){const he=b.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,W)}H=-1},this.readRenderTargetPixels=function(S,U,W,k,V,fe,ve,he=0){if(!(S&&S.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){de.bindFramebuffer(D.FRAMEBUFFER,Me);try{const Ae=S.textures[he],Ue=Ae.format,He=Ae.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!lt.textureFormatReadable(Ue)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(He)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-k&&W>=0&&W<=S.height-V&&D.readPixels(U,W,k,V,I.convert(Ue),I.convert(He),fe)}finally{const Ae=N!==null?b.get(N).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(S,U,W,k,V,fe,ve,he=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me)if(U>=0&&U<=S.width-k&&W>=0&&W<=S.height-V){de.bindFramebuffer(D.FRAMEBUFFER,Me);const Ae=S.textures[he],Ue=Ae.format,He=Ae.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!lt.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.bufferData(D.PIXEL_PACK_BUFFER,fe.byteLength,D.STREAM_READ),D.readPixels(U,W,k,V,I.convert(Ue),I.convert(He),0);const it=N!==null?b.get(N).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,it);const _t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await F_(D,_t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,fe),D.deleteBuffer(we),D.deleteSync(_t),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,W=0){const k=Math.pow(2,-W),V=Math.floor(S.image.width*k),fe=Math.floor(S.image.height*k),ve=U!==null?U.x:0,he=U!==null?U.y:0;v.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ve,he,V,fe),de.unbindTexture()};const Yb=D.createFramebuffer(),Kb=D.createFramebuffer();this.copyTextureToTexture=function(S,U,W=null,k=null,V=0,fe=0){let ve,he,Me,Ae,Ue,He,we,it,_t;const ft=S.isCompressedTexture?S.mipmaps[fe]:S.image;if(W!==null)ve=W.max.x-W.min.x,he=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,Ue=W.min.y,He=W.isBox3?W.min.z:0;else{const vt=Math.pow(2,-V);ve=Math.floor(ft.width*vt),he=Math.floor(ft.height*vt),S.isDataArrayTexture?Me=ft.depth:S.isData3DTexture?Me=Math.floor(ft.depth*vt):Me=1,Ae=0,Ue=0,He=0}k!==null?(we=k.x,it=k.y,_t=k.z):(we=0,it=0,_t=0);const st=I.convert(U.format),Pt=I.convert(U.type);let ge;U.isData3DTexture?(v.setTexture3D(U,0),ge=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(v.setTexture2DArray(U,0),ge=D.TEXTURE_2D_ARRAY):(v.setTexture2D(U,0),ge=D.TEXTURE_2D),de.activeTexture(D.TEXTURE0),de.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),de.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),de.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Gt=de.getParameter(D.UNPACK_ROW_LENGTH),Ke=de.getParameter(D.UNPACK_IMAGE_HEIGHT),Jt=de.getParameter(D.UNPACK_SKIP_PIXELS),wn=de.getParameter(D.UNPACK_SKIP_ROWS),li=de.getParameter(D.UNPACK_SKIP_IMAGES);de.pixelStorei(D.UNPACK_ROW_LENGTH,ft.width),de.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft.height),de.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),de.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),de.pixelStorei(D.UNPACK_SKIP_IMAGES,He);const vr=S.isDataArrayTexture||S.isData3DTexture,ot=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const vt=b.get(S),ci=b.get(U),ct=b.get(vt.__renderTarget),ui=b.get(ci.__renderTarget);de.bindFramebuffer(D.READ_FRAMEBUFFER,ct.__webglFramebuffer),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let xr=0;xr<Me;xr++)vr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,b.get(S).__webglTexture,V,He+xr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,b.get(U).__webglTexture,fe,_t+xr)),D.blitFramebuffer(Ae,Ue,ve,he,we,it,ve,he,D.DEPTH_BUFFER_BIT,D.NEAREST);de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||b.has(S)){const vt=b.get(S),ci=b.get(U);de.bindFramebuffer(D.READ_FRAMEBUFFER,Yb),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,Kb);for(let ct=0;ct<Me;ct++)vr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.__webglTexture,V,He+ct):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vt.__webglTexture,V),ot?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ci.__webglTexture,fe,_t+ct):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ci.__webglTexture,fe),V!==0?D.blitFramebuffer(Ae,Ue,ve,he,we,it,ve,he,D.COLOR_BUFFER_BIT,D.NEAREST):ot?D.copyTexSubImage3D(ge,fe,we,it,_t+ct,Ae,Ue,ve,he):D.copyTexSubImage2D(ge,fe,we,it,Ae,Ue,ve,he);de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ot?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(ge,fe,we,it,_t,ve,he,Me,st,Pt,ft.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(ge,fe,we,it,_t,ve,he,Me,st,ft.data):D.texSubImage3D(ge,fe,we,it,_t,ve,he,Me,st,Pt,ft):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,fe,we,it,ve,he,st,Pt,ft.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,fe,we,it,ft.width,ft.height,st,ft.data):D.texSubImage2D(D.TEXTURE_2D,fe,we,it,ve,he,st,Pt,ft);de.pixelStorei(D.UNPACK_ROW_LENGTH,Gt),de.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ke),de.pixelStorei(D.UNPACK_SKIP_PIXELS,Jt),de.pixelStorei(D.UNPACK_SKIP_ROWS,wn),de.pixelStorei(D.UNPACK_SKIP_IMAGES,li),fe===0&&U.generateMipmaps&&D.generateMipmap(ge),de.unbindTexture()},this.initRenderTarget=function(S){b.get(S).__webglFramebuffer===void 0&&v.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?v.setTextureCube(S,0):S.isData3DTexture?v.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?v.setTexture2DArray(S,0):v.setTexture2D(S,0),de.unbindTexture()},this.resetState=function(){G=0,B=0,N=null,de.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}function Qh(i,e){if(e===T_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Wa||e===vd){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Wa)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function FM(i){const e=new Map,t=new Map,n=i.clone();return ef(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function ef(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)ef(i.children[n],e.children[n],t)}class BM extends ur{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new GM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new eE(t)}),this.register(function(t){return new tE(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new zM(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new HM(t)}),this.register(function(t){return new tf(t,Ve.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new tf(t,Ve.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new nE(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Xr.extractUrlBase(e);o=Xr.resolveURL(c,this.path)}else o=Xr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ph(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===nf){try{o[Ve.KHR_BINARY_GLTF]=new iE(e)}catch(d){r&&r(d);return}s=JSON.parse(o[Ve.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new gE(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case Ve.KHR_MATERIALS_UNLIT:o[d]=new VM;break;case Ve.KHR_DRACO_MESH_COMPRESSION:o[d]=new rE(s,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:o[d]=new sE;break;case Ve.KHR_MESH_QUANTIZATION:o[d]=new oE;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function kM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function mt(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class HM{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Le(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Bt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new iv(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new tv(u),c.distance=d;break;case"spot":c=new Q0(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Tn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class VM{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Vn}extendParams(e,t,n){const r=[];e.color=new Le(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Bt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,wt))}return Promise.all(r)}}class zM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=mt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class GM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const n=mt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(s,s)}return Promise.all(r)}}class WM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const n=mt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class XM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const n=mt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}}class qM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const n=mt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];if(t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Bt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,wt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}}class YM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const n=mt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}}class KM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const n=mt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(s[0],s[1],s[2],Bt),Promise.all(r)}}class jM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const n=mt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class $M{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const n=mt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(s[0],s[1],s[2],Bt),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,wt)),Promise.all(r)}}class ZM{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const n=mt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}}class JM{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return mt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const n=mt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}}class QM{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class eE{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class tE{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class tf{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,r.mode,r.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(f),u,d,h,r.mode,r.filter),f})})}else return null}}class nE{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==$t.TRIANGLES&&c.mode!==$t.TRIANGLE_STRIP&&c.mode!==$t.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(const g of d){const _=new ke,m=new O,p=new Yt,y=new O(1,1,1),M=new T0(g.geometry,g.material,h);for(let E=0;E<h;E++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,E),l.SCALE&&y.fromBufferAttribute(l.SCALE,E),M.setMatrixAt(E,_.compose(m,p,y));for(const E in l)if(E==="_COLOR_0"){const R=l[E];M.instanceColor=new bl(R.array,R.itemSize,R.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,l[E]);ut.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const nf="glTF",jr=12,rf={JSON:1313821514,BIN:5130562};class iE{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,jr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==nf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-jr,s=new DataView(e,jr);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===rf.JSON){const c=new Uint8Array(e,jr+o,a);this.content=n.decode(c)}else if(l===rf.BIN){const c=jr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class rE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=Yl[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Yl[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],f=gr[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){r.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(f)},a,c,Bt,h)})})}}class sE{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class oE{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class sf extends rr{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,d=(n-t)/u,h=d*d,f=h*d,g=e*c,_=g-c,m=-2*f+3*h,p=f-h,y=1-m,M=p-h+d;for(let E=0;E!==a;E++){const R=o[_+E+a],T=o[_+E+l]*u,C=o[g+E+a],x=o[g+E]*u;s[E]=y*R+M*T+m*C+p*x}return s}}const aE=new Yt;class lE extends sf{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return aE.fromArray(s).normalize().toArray(s),s}}const $t={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},of={9728:yt,9729:St,9984:cd,9985:ms,9986:wr,9987:In},af={33071:pn,33648:ps,10497:ki},ql={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cE={CUBICSPLINE:void 0,LINEAR:Ir,STEP:Pr},Kl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Pl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hn})),i.DefaultMaterial}function Ai(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Tn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dE(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;o.push(h)}if(r){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;a.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=d),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function hE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fE(i){let e;const t=i.extensions&&i.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+jl(t.attributes):e=i.indices+":"+jl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+jl(i.targets[n]);return e}function jl(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function $l(i){switch(i){case Int8Array:return .007874015748031496;case Uint8Array:return .00392156862745098;case Int16Array:return 3051850947599719e-20;case Uint16Array:return 15259021896696422e-21;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function pE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const mE=new ke;class gE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new Z0(this.options.manager):this.textureLoader=new rv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ph(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Ai(s,a,r),Tn(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Xr.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=ql[r.type],a=gr[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new It(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=ql[r.type],c=gr[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=r.byteOffset||0,f=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(f&&f!==d){const p=Math.floor(h/f),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let M=t.cache.get(y);M||(_=new c(a,p*f,r.count*f/u),M=new v0(_,f/u),t.cache.add(y,M)),m=new ml(M,l,h%f/u,g)}else a===null?_=new c(r.count*l):_=new c(a,h,r.count*l),m=new It(_,l,g);if(r.sparse!==void 0){const p=ql.SCALAR,y=gr[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,E=r.sparse.values.byteOffset||0,R=new y(o[1],M,r.sparse.count*p),T=new c(o[2],E,r.sparse.count*l);a!==null&&(m=new It(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,x=R.length;C<x;C++){const A=R[C];if(m.setX(A,T[C*l]),l>=2&&m.setY(A,T[C*l+1]),l>=3&&m.setZ(A,T[C*l+2]),l>=4&&m.setW(A,T[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=of[h.magFilter]||St,u.minFilter=of[h.minFilter]||In,u.wrapS=af[h.wrapS]||ki,u.wrapT=af[h.wrapT]||ki,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==yt&&u.minFilter!==St,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Tt(_);m.needsUpdate=!0,h(m)}),t.load(Xr.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),Tn(d,o),d.userData.mimeType=o.mimeType||pE(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new nh,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Zd,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Pl}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){const d=r[Ve.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Bt),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,wt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=en);const u=s.alphaMode||Kl.OPAQUE;if(u===Kl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Kl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Vn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ye(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==Vn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Vn){const d=s.emissiveFactor;a.emissive=new Le().setRGB(d[0],d[1],d[2],Bt)}return s.emissiveTexture!==void 0&&o!==Vn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,wt)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),Tn(d,s),t.associations.set(d,{materials:e}),s.extensions&&Ai(r,d,s),d})}createUniqueName(e){const t=$e.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return lf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=fE(c),d=r[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=lf(new jt,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?uE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const y=c[f];if(m.mode===$t.TRIANGLES||m.mode===$t.TRIANGLE_STRIP||m.mode===$t.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new M0(_,y):new Vt(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===$t.TRIANGLE_STRIP?p.geometry=Qh(p.geometry,vd):m.mode===$t.TRIANGLE_FAN&&(p.geometry=Qh(p.geometry,Wa));else if(m.mode===$t.LINES)p=new C0(_,y);else if(m.mode===$t.LINE_STRIP)p=new Rl(_,y);else if(m.mode===$t.LINE_LOOP)p=new P0(_,y);else if(m.mode===$t.POINTS)p=new I0(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&hE(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Tn(p,s),m.extensions&&Ai(r,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&Ai(r,d[0],s),d[0];const h=new ei;s.extensions&&Ai(r,h,s),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nt(xi.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new to(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Tn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const h=new ke;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new El(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=r.channels.length;d<h;d++){const f=r.channels[d],g=r.samplers[f.sampler],_=f.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,y=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let M=0,E=h.length;M<E;M++){const R=h[M],T=f[M],C=g[M],x=_[M],A=m[M];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const P=n._createAnimationTracks(R,T,C,x,A);if(P)for(let w=0;w<P.length;w++)p.push(P[w])}const y=new Il(s,void 0,p);return Tn(y,r),y})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,mE)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);if(u.userData.pivot!==void 0&&d.length>0){const f=u.userData.pivot,g=d[0];u.pivot=new O().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Yd:c.length>1?u=new ei:c.length===1?u=c[0]:u=new ut,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=o),Tn(u,s),s.extensions&&Ai(n,u,s),s.matrix!==void 0){const d=new ke;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const d=r.associations.get(u);r.associations.set(u,{...d})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new ei;n.name&&(s.name=r.createUniqueName(n.name)),Tn(s,n),n.extensions&&Ai(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++){const h=l[u];h.parent!==null?s.add(FM(h)):s.add(h)}const c=u=>{const d=new Map;for(const[h,f]of r.associations)(h instanceof xn||h instanceof Tt)&&d.set(h,f);return u.traverse(h=>{const f=r.associations.get(h);f!=null&&d.set(h,f)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}ai[s.path]===ai.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(ai[s.path]){case ai.weights:u=or;break;case ai.rotation:u=ar;break;case ai.translation:case ai.scale:u=cr;break;default:switch(n.itemSize){case 1:u=or;break;case 2:case 3:default:u=cr;break}break}const d=r.interpolation!==void 0?cE[r.interpolation]:Ir,h=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){const _=new u(l[f]+"."+ai[s.path],t.array,h,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=$l(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof ar?lE:sf;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _E(i,e,t){const n=e.attributes,r=new Bn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){const u=$l(gr[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new O,l=new O;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const _=$l(gr[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new vn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function lf(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Yl[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return Ge.workingColorSpace!==Bt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ge.workingColorSpace}" not supported.`),Tn(i,e),_E(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?dE(i,e.targets,t):i})}const vE="https://raw.githubusercontent.com/kujira22/kujira_webgl/master/mm/M4.glb";function xE({mount:i}){if(!i)return console.warn("[base] No [data-three-canvas] mount found."),null;ME();const e=SE(i);let t;try{t=new OM({alpha:!0,antialias:!0})}catch(X){return console.warn("[base] WebGL renderer could not be created.",X),null}t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(A(),P()),i.appendChild(t.domElement);const n=new p0,r=new Nt(e.fov,A()/P(),.1,100);r.position.set(e.cameraPosition.x,e.cameraPosition.y,e.cameraPosition.z);const s=r.position.clone(),o=new ei;o.rotation.set(xi.degToRad(e.rotation.x),xi.degToRad(e.rotation.y),xi.degToRad(e.rotation.z)),n.add(o),L();let a=null,l=null,c=null,u=null,d=null,h=null,f=null,g=!1,_=null,m=o.rotation.y,p=s.x,y=s.y,M=s.z,E=!1;const R=new yv,T=new BM,C=new Vn({color:e.blackColor,side:hn}),x=new Vn({color:16777215,colorWrite:!1,depthTest:!0,depthWrite:!0,side:en});B();function A(){return i.clientWidth||window.innerWidth||1}function P(){return i.clientHeight||window.innerHeight||1}function w(){const X=A(),se=P();r.aspect=X/se,r.updateProjectionMatrix(),L(),t.setSize(X,se)}function L(){r.lookAt(o.position)}function G(){E&&(e.mouseCameraMove?(r.position.x+=(p-r.position.x)*e.mouseEase,r.position.y+=(y-r.position.y)*e.mouseEase,r.position.z+=(M-r.position.z)*e.mouseEase):o.rotation.y+=(m-o.rotation.y)*e.mouseEase,L(),t.render(n,r),a=window.requestAnimationFrame(G))}function B(){T.loadAsync(vE).then(X=>{l=X.scene,be(l),l.position.set(0,0,0),o.add(l),N(X),L()}).catch(X=>{console.warn("[base] M model could not be loaded.",X)})}function N(X){if(!X.animations.length)return;c=new xv(l);const se=X.animations[0];d=se,u=c.clipAction(se),u.reset(),u.setLoop(gd,1),u.clampWhenFinished=!0,u.play(),u.paused=!0,u.time=0,c.update(0),H(se),e.footerControls&&J(se)}function H(X){const se=window.gsap;if(!se){xe(X);return}const Ee=ao(X);if(h=se.to(u,{time:Ee,duration:e.enterDuration,ease:"power4.out",paused:!0,onStart:()=>{u.paused=!1},onUpdate:()=>{c.update(0)},onComplete:()=>{xe(X)}}),!window.ScrollTrigger){z(X);return}f=window.ScrollTrigger.create({trigger:i,start:e.enterStart,once:!0,onEnter:()=>z(X)}),yE(i)&&z(X)}function z(X){if(g){xe(X);return}h==null||h.play()}function J(X){if(!window.gsap||!u||!c)return;const Ee=ao(X),Se=Ee*e.footerHoverProgress,et=Ee*e.footerRestProgress,De=Ee*e.footerClickProgress,qe=i.closest(".footer_home_link")||i;let tt=!1;const Be=()=>{tt||Z(Se,e.footerHoverDuration,e.footerHoverEase)},dt=()=>{tt||Z(et,e.footerHoverDuration,e.footerHoverEase)},at=()=>{tt=!0,Z(De,e.footerClickDuration,e.footerClickEase)};qe.addEventListener("mouseenter",Be),qe.addEventListener("mouseleave",dt),qe.addEventListener("click",at),_=()=>{qe.removeEventListener("mouseenter",Be),qe.removeEventListener("mouseleave",dt),qe.removeEventListener("click",at)}}function Z(X,se,Ee){const Se=window.gsap;!Se||!u||!c||(h==null||h.kill(),u.paused=!1,h=Se.to(u,{time:X,duration:se,ease:Ee,onUpdate:()=>{c.update(0)},onComplete:()=>{u.paused=!0,c.update(0)}}))}function re(X,se=e.transitionOutDuration){if(!u||!d)return;const Se=ao(d)*xi.clamp(X,0,1);Z(Se,se,e.transitionOutEase)}function xe(X){const se=ao(X);g=!0,u.time=se,u.paused=!0,c.update(0)}function be(X){X.traverse(se=>{if(!se.isMesh)return;const Ee=Array.isArray(se.material)?se.material:[se.material],Se=Ee.some(We),et=Ee.some(Ze);se.visible=Se||et,se.material=Array.isArray(se.material)?Ee.map(De=>We(De)?x:C):Se?x:C,se.renderOrder=et?1:0})}function We(X){var se;return((se=X==null?void 0:X.name)==null?void 0:se.toLowerCase())==="white"}function Ze(X){var se;return((se=X==null?void 0:X.name)==null?void 0:se.toLowerCase())==="black"}function Ce(X){const Ee=X.clientX/Math.max(window.innerWidth,1)-.5;if(e.mouseCameraMove){const De=X.clientY/Math.max(window.innerHeight,1)-.5;p=s.x+Ee*2*e.mouseCameraRange.x,y=s.y+De*2*e.mouseCameraRange.y,M=s.z-De*2*e.mouseCameraRange.z;return}const Se=xi.degToRad(e.mouseRotationRange)*Ee*2;m=xi.degToRad(e.rotation.y)+Se}window.addEventListener("resize",w),(e.mouseRotation||e.mouseCameraMove)&&window.addEventListener("mousemove",Ce),w(),$();function $(){E||(E=!0,R.getDelta(),G())}function ue(){E=!1,window.cancelAnimationFrame(a),a=null}return{spin(){},setNamespace(){},animateToProgress:re,start:$,stop:ue,destroy(){window.removeEventListener("resize",w),window.removeEventListener("mousemove",Ce),ue(),_==null||_(),f==null||f.kill(),h==null||h.kill(),l==null||l.traverse(X=>{X.geometry&&X.geometry.dispose()}),C.dispose(),x.dispose(),t.dispose(),t.domElement.remove()}}}function yE(i){const e=i.getBoundingClientRect();return e.top<window.innerHeight&&e.bottom>0}function ao(i){return Math.max(i.duration-.001,0)}function SE(i){const e=i.classList.contains("footer_logo"),t=i.dataset.threeCanvas==="blue";return{fov:25,cameraPosition:{x:0,y:2,z:3},rotation:{x:0,y:35,z:0},enterAnimation:!0,enterStart:"top 100%",enterDuration:2.2,mouseRotation:!e,mouseRotationRange:5,mouseCameraMove:e,mouseCameraRange:{x:.18,y:.12,z:.1},mouseEase:.045,footerControls:e,footerRestProgress:1,footerHoverProgress:.8,footerClickProgress:0,footerHoverDuration:.24,footerHoverEase:"power1.inOut",footerClickDuration:.42,footerClickEase:"power4.in",transitionOutDuration:.55,transitionOutEase:"power4.in",blackColor:t?16768682:2434341}}function ME(){if(document.querySelector("[data-three-temp-style]"))return;const i=document.createElement("style");i.dataset.threeTempStyle="",i.textContent=`
    .webgl_2 {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      pointer-events: none !important;
    }

    .webgl_2 canvas {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
    }
  `,document.head.append(i)}const cf=1.2,uf="power1.out",df=.8,EE=df+.05,bE="power4.inOut",TE="power4.inOut",hf=11,ff=3,pf=.12,Zl=.12,AE=1,wE=1,Jl=.2,mf=1,gf=.4,_f=.2,RE="(min-width: 992px)";function CE(i=document){const e=window.gsap,t=i.querySelector('[data-shots="hero"]'),n=t==null?void 0:t.querySelector('[data-bgvid="true"]'),r=n==null?void 0:n.querySelector("video"),s=LE(),o=s;let a=s?i.querySelector(".method"):null,l=s?i.querySelector(".madness"):null;const c=o?i.querySelector(".and"):null;return!e||!t||!r?(i.dataset.homeIntroReady="true",Promise.resolve()):Promise.all([OE(r),s?os(a):Promise.resolve(null),s?os(l):Promise.resolve(null)]).then(([,u,d])=>{s&&cs(i);const h=as(u,1),f=as(d,-1),g=s?Ni(a):null,_=s?Ni(l):null,m=DE(),p=NE(c),y=o?`pop+=${Jl+mf+_f}`:`pop+=${_f}`,M={scale:0,rotation:ff};return e.set(i,{opacity:1,position:"fixed",inset:0,width:"100%",zIndex:1}),Ui(i,M.scale,M.rotation),e.set(n,{scale:Zl,transformOrigin:"50% 50%"}),g&&e.set(g,{x:`${hf}vw`}),_&&e.set(_,{x:`-${hf}vw`}),i.dataset.homeIntroReady="true",e.timeline().to(M,{scale:pf,duration:cf,ease:uf,onUpdate:()=>Ui(i,M.scale,M.rotation)}).to(n,{scale:Zl,duration:cf,ease:uf},0).add("pop").add(()=>Rc(t,{force:!0}),y).add(()=>Cc(i),y).to({progress:0},{progress:1,duration:df,ease:bE,onUpdate(){const E=this.targets()[0].progress;M.scale=Ql(pf,AE,E),M.rotation=Ql(ff,0,E),Ui(i,M.scale,M.rotation),e.set(n,{scale:Ql(Zl,wE,E)})},onComplete(){e.set(i,{clearProps:"position,inset,width,zIndex,clipPath,webkitClipPath"}),e.set(n,{clearProps:"scale,transformOrigin"}),m.remove()}},"pop").add(vf(e,g),"pop").add(vf(e,_),"pop").add(ls(h),"pop+=0.04").add(ls(f),"pop+=0.04").add(PE(e,p),`pop+=${Jl}`).add(IE(e,p),`pop+=${Jl+mf}`)})}function PE(i,e){return e!=null&&e.outer?i.timeline().set(e.outer,{opacity:0,autoAlpha:0,visibility:"visible"}).to(e.outer,{opacity:1,autoAlpha:1,duration:gf,ease:"power2.out"}):null}function IE(i,e){return e!=null&&e.outer?i.to(e.outer,{opacity:0,duration:gf,ease:"power3.inOut",onComplete:()=>{UE(e)}}):null}function vf(i,e){return e?i.to(e,{x:0,duration:EE,ease:TE,onComplete:()=>i.set(e,{clearProps:"x"})}):null}function LE(){var i,e;return((e=(i=window.matchMedia)==null?void 0:i.call(window,RE))==null?void 0:e.matches)??!0}function Ql(i,e,t){return i+(e-i)*t}function DE(){const i=document.createElement("div");return i.dataset.homeIntroBacking="",i.style.position="fixed",i.style.inset="0",i.style.background="#000",i.style.zIndex="0",i.style.pointerEvents="none",document.body.prepend(i),i}function NE(i){const e=window.gsap;if(!e||!i)return null;if(!i.dataset.andMaskReady){const n=document.createElement("span");n.dataset.andMaskInner="",n.textContent=i.textContent,i.textContent="",i.appendChild(n),i.dataset.andMaskReady="true"}const t=i.querySelector("[data-and-mask-inner]");return e.set(i,{opacity:0,visibility:"visible",overflow:"visible",display:"inline-block",lineHeight:1.15,paddingBottom:"0.05em"}),e.set(t,{display:"inline-block",yPercent:0}),{outer:i,inner:t}}function UE(i){const e=window.gsap;!e||!(i!=null&&i.outer)||!(i!=null&&i.inner)||(e.set(i.outer,{opacity:0,visibility:"visible",clearProps:"overflow,display,lineHeight,paddingBottom"}),e.set(i.inner,{yPercent:0}))}function OE(i){return i.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA?Promise.resolve():new Promise(e=>{const t=()=>{i.removeEventListener("loadeddata",t),i.removeEventListener("canplay",t),e()};i.addEventListener("loadeddata",t,{once:!0}),i.addEventListener("canplay",t,{once:!0})})}const FE=10,BE=.045,kE=.94,HE=4,xf="(max-width: 991px)",VE=.3,zE=.3,lo=new WeakMap;function GE(i=document){i==null||i.querySelectorAll(".client_spinner").forEach(e=>{if(lo.has(e))return;const t=XE(e);t&&lo.set(e,t)})}function WE(i=document){i==null||i.querySelectorAll(".client_spinner").forEach(e=>{var t;(t=lo.get(e))==null||t.destroy(),lo.delete(e)})}function XE(i){const e=i.querySelector(".spinner_group");if(!e)return null;const t=[e];let n=0,r=0,s=0,o=window.scrollY||window.pageYOffset||0,a=performance.now(),l=null;const c={overflow:i.style.overflow,position:i.style.position,minHeight:i.style.minHeight},u=qE(e);i.style.overflow="hidden",getComputedStyle(i).position==="static"&&(i.style.position="relative"),yf(e),d(),h(),window.addEventListener("resize",h),l=window.requestAnimationFrame(f);function d(){const g=Math.max(HE,Math.ceil((i.clientHeight||window.innerHeight||1)/Math.max(e.offsetHeight,1))+2);for(;t.length<g;){const _=e.cloneNode(!0);_.dataset.spinnerClone="",_.setAttribute("aria-hidden","true"),yf(_),e.parentNode.insertBefore(_,KE(i)),t.push(_)}}function h(){r=Math.max(e.offsetHeight,1),i.style.minHeight=`${r}px`,d()}function f(g){const _=Math.min((g-a)/1e3,.05),m=window.scrollY||window.pageYOffset||0,p=m-o,y=jE(),M=$E();s=s*kE+p*BE*M,n=ZE(n+FE*y*_+s,r),t.forEach((E,R)=>{E.style.transform=`translate3d(0, ${R*r-n}px, 0)`}),o=m,a=g,l=window.requestAnimationFrame(f)}return{destroy(){window.cancelAnimationFrame(l),window.removeEventListener("resize",h),t.slice(1).forEach(g=>g.remove()),YE(e,u),i.style.overflow=c.overflow,i.style.position=c.position,i.style.minHeight=c.minHeight}}}function yf(i){i.style.position="absolute",i.style.top="0",i.style.left="0",i.style.right="0",i.style.width="100%",i.style.willChange="transform"}function qE(i){return{position:i.style.position,top:i.style.top,left:i.style.left,right:i.style.right,width:i.style.width,transform:i.style.transform,willChange:i.style.willChange}}function YE(i,e){i.style.position=e.position,i.style.top=e.top,i.style.left=e.left,i.style.right=e.right,i.style.width=e.width,i.style.transform=e.transform,i.style.willChange=e.willChange}function KE(i){return i.querySelector(".spinner_grad")}function jE(){var e,t;return((t=(e=window.matchMedia)==null?void 0:e.call(window,xf))==null?void 0:t.matches)?VE:1}function $E(){var e,t;return((t=(e=window.matchMedia)==null?void 0:e.call(window,xf))==null?void 0:t.matches)?zE:1}function ZE(i,e){return(i%e+e)%e}const JE=.4,Sf=1,QE=.18,co=new WeakMap;function eb(i=document){i==null||i.querySelectorAll('[data-shots="hero"] nav').forEach(e=>{const t=[...e.querySelectorAll(".hero_link")];t.length<2||co.has(e)||co.set(e,nb(e,t))})}function tb(i=document){i==null||i.querySelectorAll('[data-shots="hero"] nav').forEach(e=>{var t;(t=co.get(e))==null||t.destroy(),co.delete(e)})}function nb(i,e){const t=new Map(e.map(a=>[a,a.style.opacity]));let n=!1;const r=a=>{if(n)return;const l=a.currentTarget;Mf(e,l)},s=()=>{n||e.forEach(a=>ec(a,Sf))},o=a=>{n=!0,Mf(e,a.currentTarget)};return e.forEach(a=>{a.addEventListener("mouseenter",r),a.addEventListener("focus",r),a.addEventListener("click",o)}),i.addEventListener("mouseleave",s),i.addEventListener("focusout",s),{destroy(){e.forEach(a=>{a.removeEventListener("mouseenter",r),a.removeEventListener("focus",r),a.removeEventListener("click",o),ec(a,t.get(a)||"",!0)}),i.removeEventListener("mouseleave",s),i.removeEventListener("focusout",s)}}}function Mf(i,e){i.forEach(t=>{ec(t,t===e?Sf:JE)})}function ec(i,e,t=!1){const n=window.gsap;if(n&&!t){n.to(i,{opacity:e,duration:QE,ease:"power2.out",overwrite:!0});return}i.style.opacity=e}const uo={london:{lat:51.5072,lon:-.1276},miami:{lat:25.7617,lon:-80.1918},hobart:{lat:-42.8821,lon:147.3272},tokyo:{lat:35.6762,lon:139.6503}},ib={amsterdam:{lat:52.3676,lon:4.9041},atlanta:{lat:33.749,lon:-84.388},barcelona:{lat:41.3874,lon:2.1686},berlin:{lat:52.52,lon:13.405},buenosaires:{lat:-34.6037,lon:-58.3816},chicago:{lat:41.8781,lon:-87.6298},copenhagen:{lat:55.6761,lon:12.5683},dubai:{lat:25.2048,lon:55.2708},hongkong:{lat:22.3193,lon:114.1694},losangeles:{lat:34.0522,lon:-118.2437},london:uo.london,madrid:{lat:40.4168,lon:-3.7038},melbourne:{lat:-37.8136,lon:144.9631},mexico:{lat:19.4326,lon:-99.1332},mexicocity:{lat:19.4326,lon:-99.1332},miami:uo.miami,milan:{lat:45.4642,lon:9.19},montreal:{lat:45.5019,lon:-73.5674},mumbai:{lat:19.076,lon:72.8777},newyork:{lat:40.7128,lon:-74.006},paris:{lat:48.8566,lon:2.3522},sanfrancisco:{lat:37.7749,lon:-122.4194},saopaulo:{lat:-23.5558,lon:-46.6396},seoul:{lat:37.5665,lon:126.978},shanghai:{lat:31.2304,lon:121.4737},singapore:{lat:1.3521,lon:103.8198},stockholm:{lat:59.3293,lon:18.0686},sydney:{lat:-33.8688,lon:151.2093},tokyo:uo.tokyo,toronto:{lat:43.6532,lon:-79.3832},vancouver:{lat:49.2827,lon:-123.1207}},rb="-1.2rem",sb="#FFDEAA",ob="#1A365E",ab=32,Ef=1.3,lb="(min-width: 991px)",cb=.9,ub=.55,bf=28,Tf=18,Af=1.2,db=-.25,hb=-.18,wf=10,Rf=8,Cf=.75,Pf=1,ho="power2.out";function fb(i=document){i.querySelectorAll(".map").forEach(pb)}function pb(i){const e=i.querySelector(".map_holder"),t=i.querySelector(".location_card [data-map]"),n=e==null?void 0:e.querySelector(".map_pin[data-map]");if(!e||!t||!n)return;e.querySelectorAll("[data-map-dynamic]").forEach(a=>a.remove());const r=Eb(e);if(!r)return;const s=Ab(t),o=[];vb(i,s),s.forEach(a=>{const l=Df(a),c=wb(l);if(!c){console.warn(`[map] No map coordinates for "${l}".`);return}const u=bb(c,r),d=n.cloneNode(!0);d.dataset.mapDynamic="",d.dataset.mapCity=l,d.removeAttribute("data-map"),d.classList.remove("p1","p2","p3","p4","hq"),d.style.left=`calc(${u.x}% + ${rb})`,d.style.top=`${u.y}%`,d.style.opacity="",d.style.pointerEvents="",d.tabIndex=0,d.setAttribute("aria-label",l),gb(d),e.append(d),o.push(d)}),_b(e),mb(i,e,o,s)}function mb(i,e,t,n){const r=window.gsap,s=t,o=window.matchMedia(lb).matches;let a=null,l="";if(tc(s,null),!o||!r||t.length===0)return;const c=i.querySelector(".location_card"),u=c?r.quickTo(c,"x",{duration:Cf,ease:ho}):null,d=c?r.quickTo(c,"y",{duration:Cf,ease:ho}):null,h=c?[...c.querySelectorAll(".location_image, img")]:[],f=h.map(M=>r.quickTo(M,"x",{duration:Pf,ease:ho})),g=h.map(M=>r.quickTo(M,"y",{duration:Pf,ease:ho}));r.set(h,{scale:Af,transformOrigin:"50% 50%",force3D:!0});const _=new Map(t.map(M=>[M,{x:r.quickTo(M,"x",{duration:.38,ease:"power3.out"}),y:r.quickTo(M,"y",{duration:.38,ease:"power3.out"})}])),m=()=>{a=null,l="",e.style.cursor="",u==null||u(0),d==null||d(0),If(f,g,0,0),_.forEach(M=>{M.x(0),M.y(0)}),fo(t,1),tc(s,null),yb(i)},p=M=>{const E=M.dataset.mapCity||"";a=M,e.style.cursor="pointer",fo(t,1),fo([a],Ef),tc(s,a),E!==l&&(l=E,xb(i,l,n))},y=M=>{const E=Mb(M,t);if(!E||E.distance>ab){m();return}p(E.pin),_.forEach((T,C)=>{C!==a&&(T.x(0),T.y(0))});const R=_.get(a);R.x(E.dx),R.y(E.dy),u==null||u(_r(E.dx*cb,-bf,bf)),d==null||d(_r(E.dy*ub,-Tf,Tf)),If(f,g,E.dx,E.dy),fo([a],Ef)};t.forEach(M=>{M.addEventListener("mouseenter",()=>p(M)),M.addEventListener("focus",()=>p(M))}),e.addEventListener("mousemove",y),e.addEventListener("mouseleave",m)}function gb(i){const e=window.gsap;i.style.transformOrigin="50% 50%",i.style.transition="scale 0.18s ease",i.style.scale="1",i.style.willChange="transform",e&&e.set(i,{x:0,y:0,transformOrigin:"50% 50%",force3D:!0})}function fo(i,e){i.forEach(t=>{t.style.scale=String(e)})}function _b(i){i.querySelectorAll(".map_pin[data-map]").forEach(e=>{e.style.opacity="0",e.style.pointerEvents="none"})}function If(i,e,t,n){const r=_r(t*db,-wf,wf),s=_r(n*hb,-Rf,Rf);i.forEach(o=>o(r)),e.forEach(o=>o(s))}function vb(i,e){const t=window.gsap,n=i.querySelector(".location_card");if(n){if(n.hidden=!1,n.style.display="",window.getComputedStyle(n).display==="none"&&(n.style.display="block"),e.forEach(r=>{r.hidden=!0,r.dataset.mapLocationItem=nc(Df(r)),r.style.display="none"}),t){t.set(n,{autoAlpha:0}),t.set(e,{clipPath:"inset(100% 0% 0% 0%)",webkitClipPath:"inset(100% 0% 0% 0%)",y:18});return}n.style.opacity="0",n.style.visibility="hidden"}}function xb(i,e,t){const n=window.gsap,r=i.querySelector(".location_card"),s=nc(e),o=t.find(a=>a.dataset.mapLocationItem===s);if(!(!r||!o)){if(r.hidden=!1,r.style.display="",window.getComputedStyle(r).display==="none"&&(r.style.display="block"),t.forEach(a=>{a.hidden=a!==o,a.style.display=a===o?"":"none"}),!n){r.style.opacity="1",r.style.visibility="visible";return}n.killTweensOf(t),n.set(o.querySelectorAll(".location_image, img"),{scale:Af,transformOrigin:"50% 50%",x:0,y:0}),n.set(r,{autoAlpha:1}),n.fromTo(o,{clipPath:"inset(100% 0% 0% 0%)",webkitClipPath:"inset(100% 0% 0% 0%)",y:18},{clipPath:"inset(0% 0% 0% 0%)",webkitClipPath:"inset(0% 0% 0% 0%)",y:0,duration:.6,ease:"power3.inOut",overwrite:!0})}}function yb(i){const e=window.gsap,t=i.querySelector(".location_card"),n=[...(t==null?void 0:t.querySelectorAll(".location_item, .w-dyn-item"))||[]];if(t){if(e){e.killTweensOf(n),e.to(n,{clipPath:"inset(0% 0% 100% 0%)",webkitClipPath:"inset(0% 0% 100% 0%)",y:-18,duration:.4,ease:"power4.out",overwrite:!0,onComplete:()=>{e.set(t,{autoAlpha:0,x:0,y:0}),e.set(t.querySelectorAll(".location_image, img"),{x:0,y:0})}});return}t.style.opacity="0",t.style.visibility="hidden"}}function tc(i,e){var t;Sb((t=i[0])==null?void 0:t.closest(".map_holder"),!!e),i.forEach(n=>{const r=!e||n===e?sb:ob;n.style.backgroundColor=r,n.style.color=r,n.querySelectorAll("svg, path, circle, rect, polygon").forEach(s=>{s.style.fill=r,s.style.stroke=r})})}function Sb(i,e){if(!i)return;const t=i.querySelector('[data-hq="inactive"]'),n=i.querySelector('[data-hq="active"]');t&&(t.style.opacity=e?"1":"0"),n&&(n.style.opacity=e?"0":"1")}function Mb(i,e){return e.reduce((t,n)=>{const r=n.getBoundingClientRect(),s=r.left+r.width/2,o=r.top+r.height/2,a=i.clientX-s,l=i.clientY-o,c=Math.hypot(a,l);return!t||c<t.distance?{pin:n,dx:a,dy:l,distance:c}:t},null)}function Eb(i){const e=Object.entries(uo).map(([t,n])=>{const r=i.querySelector(`[data-map="${t}"]`),s=Tb(r,i);return s?{...n,...s}:null}).filter(Boolean);return e.length<2?null:{xFit:Lf(e.map(t=>[t.lon,t.x])),yFit:Lf(e.map(t=>[t.lat,t.y]))}}function bb(i,e){return{x:_r(e.xFit.a*i.lon+e.xFit.b,0,100),y:_r(e.yFit.a*i.lat+e.yFit.b,0,100)}}function Lf(i){const e=i.length,t=i.reduce((c,u)=>c+u[0],0),n=i.reduce((c,u)=>c+u[1],0),r=i.reduce((c,u)=>c+u[0]*u[1],0),s=i.reduce((c,u)=>c+u[0]*u[0],0),o=e*s-t*t||1,a=(e*r-t*n)/o,l=(n-a*t)/e;return{a,b:l}}function Tb(i,e){if(!i)return null;const t=e.getBoundingClientRect(),n=i.getBoundingClientRect();return!t.width||!t.height?null:{x:(n.left+n.width/2-t.left)/t.width*100,y:(n.top+n.height/2-t.top)/t.height*100}}function Ab(i){return[...i.querySelectorAll(".location_item, .w-dyn-item")]}function Df(i){return[...i.children].filter(t=>t.matches("h1,h2,h3,h4,h5,h6,p,div,span")).map(t=>t.textContent.trim()).filter(Boolean)[0]||""}function wb(i){return ib[nc(i)]}function nc(i){return String(i||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z]/g,"")}function _r(i,e,t){return Math.min(Math.max(i,e),t)}const ic=new WeakMap;function Rb(i=document){var n;const e=[...((n=i.querySelectorAll)==null?void 0:n.call(i,".nav"))||[]].filter(r=>r.querySelector(".mob_nav"));if(!e.length)return;Nf(i),rc(i,!1);const t=new AbortController;e.forEach(r=>{r.addEventListener("click",s=>{var l,c,u,d;const o=(c=(l=s.target).closest)==null?void 0:c.call(l,".mob_nav .right_box .nav_link, .hamburger.close, .hamburger.off"),a=(d=(u=s.target).closest)==null?void 0:d.call(u,".hamburger");if(o){s.preventDefault(),s.stopPropagation(),rc(r,!1);return}a&&(s.preventDefault(),s.stopPropagation(),rc(r,!0))},{capture:!0,signal:t.signal})}),ic.set(i,t)}function Nf(i=document){var e;(e=ic.get(i))==null||e.abort(),ic.delete(i)}function rc(i,e){i.querySelectorAll(".mob_nav").forEach(t=>{t.style.setProperty("display",e?"flex":"none","important"),t.style.setProperty("opacity",e?"1":"0","important"),t.style.setProperty("visibility",e?"visible":"hidden","important"),t.style.setProperty("pointer-events",e?"auto":"none","important"),t.setAttribute("aria-hidden",e?"false":"true")})}function Cb(){return document.readyState!=="loading"?Promise.resolve():new Promise(i=>{document.addEventListener("DOMContentLoaded",i,{once:!0})})}const wi={three:{spin(){Wn.forEach(i=>i==null?void 0:i.spin())},animateToProgress(i,e){Wn.forEach(t=>{var n;return(n=t==null?void 0:t.animateToProgress)==null?void 0:n.call(t,i,e)})},setNamespace(i){Wn.forEach(e=>e==null?void 0:e.setNamespace(i))}},barba:null},Wn=new Map,Ot="[MM lifecycle]";xp(),hg();const sc={home({namespace:i}){var e;(e=wi.three)==null||e.setNamespace(i)}};async function Pb(){if(await Cb(),Hb(),wi.barba=jg({onEnter:Uf,onLeave:Ib,onTransitionStart:({namespace:i}={})=>{var e,t;(e=wi.three)==null||e.spin(),(i==="home"||i==="contact")&&((t=wi.three)==null||t.animateToProgress(0,.55))}}),!wi.barba){const i=document.querySelector("[data-barba='container']");console.log(Ot,"no barba -> setup attempt",Zt(i)),Uf({container:i,namespace:oc(i)})}}async function Uf({container:i,namespace:e,transition:t=!1}){var r,s,o,a;if(!i){console.log(Ot,"setup skipped -> no container");return}const n=Of(e||oc(i));t&&n==="home"&&(i.dataset.homeIntroReady="true"),console.log(Ot,"setup start",{...Zt(i,n),transition:t}),i.dataset.pageActive="true",document.body.dataset.page=n,Ob(i)&&(console.log(Ot,"run shots()",{...Zt(i,n),hero:i.querySelectorAll('[data-shots="hero"]').length,featuredLists:i.querySelectorAll("[data-featured-list]").length}),await qp(i,{transition:t})),Ub(i)&&(await Ff(),(r=window.ScrollTrigger)==null||r.refresh(),console.log(Ot,"run three()",{...Zt(i,n),mounts:i.querySelectorAll("[data-three-canvas]").length}),Lb(i),(s=wi.three)==null||s.setNamespace(n)),Bb(i),kb(i),GE(i),eb(i),Rb(i),fb(i),fg(i,{autoAnimate:!t}),console.log(Ot,"reinit webflow",{...Zt(i,n),hasWebflow:!!window.Webflow}),Nb(),Fb(i)&&(console.log(Ot,"run text()",{...Zt(i,n),transition:t}),await Ff(),To(i),Mp(i,{autoAnimate:!t&&n!=="home"})),!t&&n==="home"&&await CE(i),t||Fc(i),(o=window.ScrollTrigger)==null||o.refresh(),console.log(Ot,"setup complete",Zt(i,n)),(a=sc[n])==null||a.call(sc,{container:i,namespace:n})}function Ib({container:i}){if(!i){console.log(Ot,"teardown skipped -> no container");return}console.log(Ot,"teardown start",Zt(i)),console.log(Ot,"stop shots",Zt(i)),Yp(i),console.log(Ot,"reset text on leave",Zt(i)),To(i),console.log(Ot,"destroy three",{...Zt(i),mounts:i.querySelectorAll("[data-three-canvas]").length}),Db(i),WE(i),tb(i),Nf(i),Eu(i),delete i.dataset.pageActive,console.log(Ot,"teardown complete",Zt(i))}Pb();function Lb(i=document){Wn.forEach((e,t)=>{t.isConnected||(e==null||e.destroy(),Wn.delete(t))}),i==null||i.querySelectorAll("[data-three-canvas]").forEach(e=>{if(Wn.has(e))return;const t=xE({mount:e});t&&Wn.set(e,t)})}function Db(i){i==null||i.querySelectorAll("[data-three-canvas]").forEach(e=>{var t;(t=Wn.get(e))==null||t.destroy(),Wn.delete(e)})}function Of(i){return String(i||"page").trim().toLowerCase()}function oc(i){var e;return((e=i==null?void 0:i.dataset)==null?void 0:e.barbaNamespace)||"page"}function Nb(){var e,t,n,r,s;const i=window.Webflow;i&&((e=i.destroy)==null||e.call(i),(t=i.ready)==null||t.call(i),(s=(r=(n=i.require)==null?void 0:n.call(i,"ix2"))==null?void 0:r.init)==null||s.call(r))}async function Ff(){var i,e,t;return await((t=(e=(i=document.fonts)==null?void 0:i.ready)==null?void 0:e.catch)==null?void 0:t.call(e,()=>{})),new Promise(n=>{requestAnimationFrame(()=>requestAnimationFrame(n))})}function Zt(i,e){var t;return{namespace:Of(e||oc(i)),active:((t=i==null?void 0:i.dataset)==null?void 0:t.pageActive)==="true",connected:!!(i!=null&&i.isConnected),className:(i==null?void 0:i.className)||""}}function Ub(i){return!!(i!=null&&i.querySelector("[data-three-canvas]"))}function Ob(i){return!!(i!=null&&i.querySelector("[data-shots], [data-featured-list], [data-shots-work], [data-shots-showreel], [data-showreel-id], [data-showreel-stream], [data-direct-id]"))}function Fb(i){return!!(i!=null&&i.querySelector("h1, h2, h3, h4, h5, h6, p, [data-text], .filter, .w-inline-block, .body-large, .body-regular, .body-small, .link_large, .link_small, .nav_link, .heading-1, .heading-2, .heading-3, .heading-4, .heading-5, .heading-6"))}function Bb(i=document){const e=i==null?void 0:i.querySelectorAll(".directors_list, .director_list, [data-directors='list']");if(!(e!=null&&e.length))return;const t=Bf(window.location.pathname);e.forEach(n=>{n.querySelectorAll("a[href]").forEach(r=>{const o=Bf(new URL(r.href,window.location.href).pathname)===t||r.getAttribute("aria-current")==="page"||r.classList.contains("w--current");r.style.opacity=o?"1":"",r.style.color=o?"":"#C3C3C3"})})}function Bf(i){return String(i||"/").replace(/\/+$/,"")||"/"}function kb(i=document){const e=String(new Date().getFullYear());i==null||i.querySelectorAll("[data-year]").forEach(t=>{t.textContent=e})}function Hb(){const i=window.gsap,e=window.ScrollTrigger;!i||!e||!window.Lenis||window.__mmLenisScrollTriggerBridge||(window.__mmLenisScrollTriggerBridge=!0,i.ticker.add(()=>e.update()),i.ticker.lagSmoothing(0))}return _o.app=wi,Object.defineProperty(_o,Symbol.toStringTag,{value:"Module"}),_o})({});
//# sourceMappingURL=base.js.map
