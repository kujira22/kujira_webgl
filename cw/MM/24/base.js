var WebflowThreeBarbaStarter=(function(yo){"use strict";function ap(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,typeof(r=(function(s,o){if(typeof s!="object"||s===null)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var l=a.call(s,"string");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)})(i.key))=="symbol"?r:String(r),i)}var r}function So(n,e,t){return e&&ap(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function un(){return un=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},un.apply(this,arguments)}function Qr(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,yr(n,e)}function Mo(n){return Mo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Mo(n)}function yr(n,e){return yr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,i){return t.__proto__=i,t},yr(n,e)}function lp(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Eo(n,e,t){return Eo=lp()?Reflect.construct.bind():function(i,r,s){var o=[null];o.push.apply(o,r);var a=new(Function.bind.apply(i,o));return s&&yr(a,s.prototype),a},Eo.apply(null,arguments)}function bo(n){var e=typeof Map=="function"?new Map:void 0;return bo=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return Eo(t,arguments,Mo(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),yr(i,t)},bo(n)}function cp(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}var qn,up=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(n){n[n.off=0]="off",n[n.error=1]="error",n[n.warning=2]="warning",n[n.info=3]="info",n[n.debug=4]="debug"})(qn||(qn={}));var Ec=qn.off,di=(function(){function n(t){this.t=void 0,this.t=t}n.getLevel=function(){return Ec},n.setLevel=function(t){return Ec=qn[t]};var e=n.prototype;return e.error=function(){this.i(console.error,qn.error,[].slice.call(arguments))},e.warn=function(){this.i(console.warn,qn.warning,[].slice.call(arguments))},e.info=function(){this.i(console.info,qn.info,[].slice.call(arguments))},e.debug=function(){this.i(console.log,qn.debug,[].slice.call(arguments))},e.i=function(t,i,r){i<=n.getLevel()&&t.apply(console,["["+this.t+"] "].concat(r))},n})();function Ci(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function bc(n){return n&&n.sensitive?"":"i"}var dn={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},hi=new((function(){function n(){this.o=dn,this.u=void 0,this.h={after:null,before:null,parent:null}}var e=n.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u||(this.u=new DOMParser),this.u.parseFromString(t,"text/html")},e.toElement=function(t){var i=document.createElement("div");return i.innerHTML=t,i},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&(this.v(t),t.parentNode.removeChild(t))},e.addContainer=function(t,i){var r=this.getContainer()||this.h.before;r?this.l(t,r):this.h.after?this.h.after.parentNode.insertBefore(t,this.h.after):this.h.parent?this.h.parent.appendChild(t):i.appendChild(t)},e.getSibling=function(){return this.h},e.getNamespace=function(t){t===void 0&&(t=document);var i=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return i?i.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var i=t.getAttribute("href")||t.getAttribute("xlink:href");if(i)return this.resolveUrl(i.baseVal||i)}return null},e.resolveUrl=function(){var t=[].slice.call(arguments).length;if(t===0)throw new Error("resolveUrl requires at least one argument; got none.");var i=document.createElement("base");if(i.href=arguments[0],t===1)return i.href;var r=document.getElementsByTagName("head")[0];r.insertBefore(i,r.firstChild);for(var s,o=document.createElement("a"),a=1;a<t;a++)o.href=arguments[a],i.href=s=o.href;return r.removeChild(i),s},e.l=function(t,i){i.parentNode.insertBefore(t,i.nextSibling)},e.v=function(t){return this.h={after:t.nextElementSibling,before:t.previousElementSibling,parent:t.parentElement},this.h},n})()),dp=(function(){function n(){this.p=void 0,this.m=[],this.P=-1}var e=n.prototype;return e.init=function(t,i){this.p="barba";var r={data:{},ns:i,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.P=0,this.m.push(r);var s={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,i,r){if(r&&r.state){var s=r.state,o=s.index;i=this.g(this.P-o),this.replace(s.states),this.P=o}else this.add(t,i);return i},e.add=function(t,i,r,s){var o=r??this.R(i),a={data:s??{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};switch(o){case"push":this.P=this.size,this.m.push(a);break;case"replace":this.set(this.P,a)}var l={from:this.p,index:this.P,states:[].concat(this.m)};switch(o){case"push":window.history&&window.history.pushState(l,"",t);break;case"replace":window.history&&window.history.replaceState(l,"",t)}},e.store=function(t,i){var r=i||this.P,s=this.get(r);s.data=un({},s.data,t),this.set(r,s);var o={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(o,"")},e.update=function(t,i){var r=i||this.P,s=un({},this.get(r),t);this.set(r,s)},e.remove=function(t){t?this.m.splice(t,1):this.m.pop(),this.P--},e.clear=function(){this.m=[],this.P=-1},e.replace=function(t){this.m=t},e.get=function(t){return this.m[t]},e.set=function(t,i){return this.m[t]=i},e.R=function(t){var i="push",r=t,s=dn.prefix+"-"+dn.history;return r.hasAttribute&&r.hasAttribute(s)&&(i=r.getAttribute(s)),i},e.g=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},So(n,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),n})(),Tc=new dp,es=function(n,e){try{var t=(function(){if(!e.next.html)return Promise.resolve(n).then(function(i){var r=e.next;if(i){var s=hi.toElement(i.html);r.namespace=hi.getNamespace(s),r.container=hi.getContainer(s),r.url=i.url,r.html=i.html,Tc.update({ns:r.namespace});var o=hi.toDocument(i.html);document.title=o.title}})})();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(i){return Promise.reject(i)}},wc=function n(e,t,i){return e instanceof RegExp?(function(r,s){if(!s)return r;for(var o=/\((?:\?<(.*?)>)?(?!\?)/g,a=0,l=o.exec(r.source);l;)s.push({name:l[1]||a++,prefix:"",suffix:"",modifier:"",pattern:""}),l=o.exec(r.source);return r})(e,t):Array.isArray(e)?(function(r,s,o){var a=r.map(function(l){return n(l,s,o).source});return new RegExp("(?:".concat(a.join("|"),")"),bc(o))})(e,t,i):(function(r,s,o){return(function(a,l,c){c===void 0&&(c={});for(var u=c.strict,d=u!==void 0&&u,h=c.start,f=h===void 0||h,g=c.end,_=g===void 0||g,m=c.encode,p=m===void 0?function(V){return V}:m,y=c.delimiter,M=y===void 0?"/#?":y,E=c.endsWith,A="[".concat(Ci(E===void 0?"":E),"]|$"),T="[".concat(Ci(M),"]"),C=f?"^":"",x=0,w=a;x<w.length;x++){var P=w[x];if(typeof P=="string")C+=Ci(p(P));else{var R=Ci(p(P.prefix)),I=Ci(p(P.suffix));if(P.pattern)if(l&&l.push(P),R||I)if(P.modifier==="+"||P.modifier==="*"){var G=P.modifier==="*"?"?":"";C+="(?:".concat(R,"((?:").concat(P.pattern,")(?:").concat(I).concat(R,"(?:").concat(P.pattern,"))*)").concat(I,")").concat(G)}else C+="(?:".concat(R,"(").concat(P.pattern,")").concat(I,")").concat(P.modifier);else C+=P.modifier==="+"||P.modifier==="*"?"((?:".concat(P.pattern,")").concat(P.modifier,")"):"(".concat(P.pattern,")").concat(P.modifier);else C+="(?:".concat(R).concat(I,")").concat(P.modifier)}}if(_)d||(C+="".concat(T,"?")),C+=c.endsWith?"(?=".concat(A,")"):"$";else{var B=a[a.length-1],N=typeof B=="string"?T.indexOf(B[B.length-1])>-1:B===void 0;d||(C+="(?:".concat(T,"(?=").concat(A,"))?")),N||(C+="(?=".concat(T,"|").concat(A,")"))}return new RegExp(C,bc(c))})((function(a,l){l===void 0&&(l={});for(var c=(function(I){for(var G=[],B=0;B<I.length;){var N=I[B];if(N!=="*"&&N!=="+"&&N!=="?")if(N!=="\\")if(N!=="{")if(N!=="}")if(N!==":")if(N!=="(")G.push({type:"CHAR",index:B,value:I[B++]});else{var V=1,z="";if(I[$=B+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat($));for(;$<I.length;)if(I[$]!=="\\"){if(I[$]===")"){if(--V==0){$++;break}}else if(I[$]==="("&&(V++,I[$+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat($));z+=I[$++]}else z+=I[$++]+I[$++];if(V)throw new TypeError("Unbalanced pattern at ".concat(B));if(!z)throw new TypeError("Missing pattern at ".concat(B));G.push({type:"PATTERN",index:B,value:z}),B=$}else{for(var Z="",$=B+1;$<I.length;){var te=I.charCodeAt($);if(!(te>=48&&te<=57||te>=65&&te<=90||te>=97&&te<=122||te===95))break;Z+=I[$++]}if(!Z)throw new TypeError("Missing parameter name at ".concat(B));G.push({type:"NAME",index:B,value:Z}),B=$}else G.push({type:"CLOSE",index:B,value:I[B++]});else G.push({type:"OPEN",index:B,value:I[B++]});else G.push({type:"ESCAPED_CHAR",index:B++,value:I[B++]});else G.push({type:"MODIFIER",index:B,value:I[B++]})}return G.push({type:"END",index:B,value:""}),G})(a),u=l.prefixes,d=u===void 0?"./":u,h="[^".concat(Ci(l.delimiter||"/#?"),"]+?"),f=[],g=0,_=0,m="",p=function(I){if(_<c.length&&c[_].type===I)return c[_++].value},y=function(I){var G=p(I);if(G!==void 0)return G;var B=c[_],N=B.index;throw new TypeError("Unexpected ".concat(B.type," at ").concat(N,", expected ").concat(I))},M=function(){for(var I,G="";I=p("CHAR")||p("ESCAPED_CHAR");)G+=I;return G};_<c.length;){var E=p("CHAR"),A=p("NAME"),T=p("PATTERN");if(A||T)d.indexOf(x=E||"")===-1&&(m+=x,x=""),m&&(f.push(m),m=""),f.push({name:A||g++,prefix:x,suffix:"",pattern:T||h,modifier:p("MODIFIER")||""});else{var C=E||p("ESCAPED_CHAR");if(C)m+=C;else if(m&&(f.push(m),m=""),p("OPEN")){var x=M(),w=p("NAME")||"",P=p("PATTERN")||"",R=M();y("CLOSE"),f.push({name:w||(P?g++:""),pattern:w&&!P?h:P,prefix:x,suffix:R,modifier:p("MODIFIER")||""})}else y("END")}}return f})(r,o),s,o)})(e,t,i)},hp={__proto__:null,update:es,nextTick:function(){return new Promise(function(n){window.requestAnimationFrame(n)})},pathToRegexp:wc},Ac=function(){return window.location.origin},Sr=function(n){return n===void 0&&(n=window.location.href),Yn(n).port},Yn=function(n){var e,t=n.match(/:\d+/);if(t===null)/^http/.test(n)&&(e=80),/^https/.test(n)&&(e=443);else{var i=t[0].substring(1);e=parseInt(i,10)}var r,s=n.replace(Ac(),""),o={},a=s.indexOf("#");a>=0&&(r=s.slice(a+1),s=s.slice(0,a));var l=s.indexOf("?");return l>=0&&(o=Rc(s.slice(l+1)),s=s.slice(0,l)),{hash:r,path:s,port:e,query:o}},Rc=function(n){return n.split("&").reduce(function(e,t){var i=t.split("=");return e[i[0]]=i[1],e},{})},To=function(n){return n===void 0&&(n=window.location.href),n.replace(/(\/#.*|\/|#.*)$/,"")},fp={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(n,e){return e===void 0&&(e=document.baseURI),new URL(n,e).href},getOrigin:Ac,getPort:Sr,getPath:function(n){return n===void 0&&(n=window.location.href),Yn(n).path},getQuery:function(n,e){return e===void 0&&(e=!1),e?JSON.stringify(Yn(n).query):Yn(n).query},getHash:function(n){return Yn(n).hash},parse:Yn,parseQuery:Rc,clean:To};function pp(n,e,t,i,r){return e===void 0&&(e=2e3),new Promise(function(s,o){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){if(a.status===200){var l=a.responseURL!==""&&a.responseURL!==n?a.responseURL:n;s({html:a.responseText,url:un({href:l},Yn(l))}),i.update(n,{status:"fulfilled",target:l})}else if(a.status){var c={status:a.status,statusText:a.statusText};t(n,c),o(c),i.update(n,{status:"rejected"})}}},a.ontimeout=function(){var l=new Error("Timeout error ["+e+"]");t(n,l),o(l),i.update(n,{status:"rejected"})},a.onerror=function(){var l=new Error("Fetch error");t(n,l),o(l),i.update(n,{status:"rejected"})},a.open("GET",n),a.timeout=e,a.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),a.setRequestHeader("x-barba","yes"),r.all().forEach(function(l,c){a.setRequestHeader(c,l)}),a.send()})}function mp(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function Pi(n,e){return e===void 0&&(e={}),function(){var t=arguments,i=!1,r=new Promise(function(s,o){e.async=function(){return i=!0,function(l,c){l?o(l):s(c)}};var a=n.apply(e,[].slice.call(t));i||(mp(a)?a.then(s,o):s(a))});return r}}var Kn=new((function(n){function e(){var i;return(i=n.call(this)||this).logger=new di("@barba/core"),i.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],i.registered=new Map,i.init(),i}Qr(e,n);var t=e.prototype;return t.init=function(){var i=this;this.registered.clear(),this.all.forEach(function(r){i[r]||(i[r]=function(s,o){i.registered.has(r)||i.registered.set(r,new Set),i.registered.get(r).add({ctx:o||{},fn:s})})})},t.do=function(i){var r=arguments,s=this;if(this.registered.has(i)){var o=Promise.resolve();return this.registered.get(i).forEach(function(a){o=o.then(function(){return Pi(a.fn,a.ctx).apply(void 0,[].slice.call(r,1))})}),o.catch(function(a){s.logger.debug("Hook error ["+i+"]"),s.logger.error(a)})}return Promise.resolve()},t.clear=function(){var i=this;this.all.forEach(function(r){delete i[r]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var i=[];this.registered.forEach(function(r,s){return i.push(s)}),this.logger.info("Registered hooks: "+i.join(","))},e})(up)),Cc=(function(){function n(e){if(this.k=void 0,this.O=[],typeof e=="boolean")this.k=e;else{var t=Array.isArray(e)?e:[e];this.O=t.map(function(i){return wc(i)})}}return n.prototype.checkHref=function(e){if(typeof this.k=="boolean")return this.k;var t=Yn(e).path;return this.O.some(function(i){return i.exec(t)!==null})},n})(),gp=(function(n){function e(i){var r;return(r=n.call(this,i)||this).T=new Map,r}Qr(e,n);var t=e.prototype;return t.set=function(i,r,s,o,a){return this.T.set(i,{action:s,request:r,status:o,target:a??i}),{action:s,request:r,status:o,target:a}},t.get=function(i){return this.T.get(i)},t.getRequest=function(i){return this.T.get(i).request},t.getAction=function(i){return this.T.get(i).action},t.getStatus=function(i){return this.T.get(i).status},t.getTarget=function(i){return this.T.get(i).target},t.has=function(i){return!this.checkHref(i)&&this.T.has(i)},t.delete=function(i){return this.T.delete(i)},t.update=function(i,r){var s=un({},this.T.get(i),r);return this.T.set(i,s),s},e})(Cc),_p=(function(){function n(){this.A=new Map}var e=n.prototype;return e.set=function(t,i){return this.A.set(t,i),{name:i}},e.get=function(t){return this.A.get(t)},e.all=function(){return this.A},e.has=function(t){return this.A.has(t)},e.delete=function(t){return this.A.delete(t)},e.clear=function(){return this.A.clear()},n})(),vp=function(){return!window.history.pushState},xp=function(n){return!n.el||!n.href},yp=function(n){var e=n.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},Sp=function(n){var e=n.el;return e.hasAttribute("target")&&e.target==="_blank"},Mp=function(n){var e=n.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},Ep=function(n){var e=n.el;return e.port!==void 0&&Sr()!==Sr(e.href)},bp=function(n){var e=n.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},Tp=function(n){return n.el.hasAttribute(dn.prefix+"-"+dn.prevent)},wp=function(n){return!!n.el.closest("["+dn.prefix+"-"+dn.prevent+'="all"]')},Ap=function(n){var e=n.href;return To(e)===To()&&Sr(e)===Sr()},Rp=(function(n){function e(i){var r;return(r=n.call(this,i)||this).suite=[],r.tests=new Map,r.init(),r}Qr(e,n);var t=e.prototype;return t.init=function(){this.add("pushState",vp),this.add("exists",xp),this.add("newTab",yp),this.add("blank",Sp),this.add("corsDomain",Mp),this.add("corsPort",Ep),this.add("download",bp),this.add("preventSelf",Tp),this.add("preventAll",wp),this.add("sameUrl",Ap,!1)},t.add=function(i,r,s){s===void 0&&(s=!0),this.tests.set(i,r),s&&this.suite.push(i)},t.run=function(i,r,s,o){return this.tests.get(i)({el:r,event:s,href:o})},t.checkLink=function(i,r,s){var o=this;return this.suite.some(function(a){return o.run(a,i,r,s)})},e})(Cc),wo=(function(n){function e(t,i){var r;return i===void 0&&(i="Barba error"),(r=n.call.apply(n,[this].concat([].slice.call(arguments,2)))||this).error=void 0,r.label=void 0,r.error=t,r.label=i,Error.captureStackTrace&&Error.captureStackTrace(cp(r),e),r.name="BarbaError",r}return Qr(e,n),e})(bo(Error)),Cp=(function(){function n(t){t===void 0&&(t=[]),this.logger=new di("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=n.prototype;return e.add=function(t,i){t==="rule"?this.j.splice(i.position||0,0,i.value):this.all.push(i),this.update()},e.resolve=function(t,i){var r=this;i===void 0&&(i={});var s=i.once?this.once:this.page;s=s.filter(i.self?function(h){return h.name&&h.name==="self"}:function(h){return!h.name||h.name!=="self"});var o=new Map,a=s.find(function(h){var f=!0,g={};return i.self&&h.name==="self"?(o.set(h,g),!0):(r.j.reverse().forEach(function(_){f&&(f=r.M(h,_,t,g),h.from&&h.to&&(f=r.M(h,_,t,g,"from")&&r.M(h,_,t,g,"to")),h.from&&!h.to&&(f=r.M(h,_,t,g,"from")),!h.from&&h.to&&(f=r.M(h,_,t,g,"to")))}),o.set(h,g),f)}),l=o.get(a),c=[];if(c.push(i.once?"once":"page"),i.self&&c.push("self"),l){var u,d=[a];Object.keys(l).length>0&&d.push(l),(u=this.logger).info.apply(u,["Transition found ["+c.join(",")+"]"].concat(d))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(i){return t.N(i)}).sort(function(i,r){return i.priority-r.priority}).reverse().map(function(i){return delete i.priority,i}),this.page=this.all.filter(function(i){return i.leave!==void 0||i.enter!==void 0}),this.once=this.all.filter(function(i){return i.once!==void 0})},e.M=function(t,i,r,s,o){var a=!0,l=!1,c=t,u=i.name,d=u,h=u,f=u,g=o?c[o]:c,_=o==="to"?r.next:r.current;if(o?g&&g[u]:g[u]){switch(i.type){case"strings":default:var m=Array.isArray(g[d])?g[d]:[g[d]];_[d]&&m.indexOf(_[d])!==-1&&(l=!0),m.indexOf(_[d])===-1&&(a=!1);break;case"object":var p=Array.isArray(g[h])?g[h]:[g[h]];_[h]?(_[h].name&&p.indexOf(_[h].name)!==-1&&(l=!0),p.indexOf(_[h].name)===-1&&(a=!1)):a=!1;break;case"function":g[f](r)?l=!0:a=!1}l&&(o?(s[o]=s[o]||{},s[o][u]=c[o][u]):s[u]=c[u])}return a},e.S=function(t,i,r){var s=0;return(t[i]||t.from&&t.from[i]||t.to&&t.to[i])&&(s+=Math.pow(10,r),t.from&&t.from[i]&&(s+=1),t.to&&t.to[i]&&(s+=2)),s},e.N=function(t){var i=this;t.priority=0;var r=0;return this.j.forEach(function(s,o){r+=i.S(t,s.name,o+1)}),t.priority=r,t},n})();function Mr(n,e){try{var t=n()}catch(i){return e(i)}return t&&t.then?t.then(void 0,e):t}var Pp=(function(){function n(t){t===void 0&&(t=[]),this.logger=new di("@barba/core"),this.store=void 0,this.C=!1,this.store=new Cp(t)}var e=n.prototype;return e.get=function(t,i){return this.store.resolve(t,i)},e.doOnce=function(t){var i=t.data,r=t.transition;try{var s=function(){o.C=!1},o=this,a=r||{};o.C=!0;var l=Mr(function(){return Promise.resolve(o.L("beforeOnce",i,a)).then(function(){return Promise.resolve(o.once(i,a)).then(function(){return Promise.resolve(o.L("afterOnce",i,a)).then(function(){})})})},function(c){o.C=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var i=t.data,r=t.transition,s=t.page,o=t.wrapper;try{var a=function(h){l.C=!1},l=this,c=r||{},u=c.sync===!0||!1;l.C=!0;var d=Mr(function(){function h(){return Promise.resolve(l.L("before",i,c)).then(function(){function g(m){return Promise.resolve(l.remove(i)).then(function(){return Promise.resolve(l.L("after",i,c)).then(function(){})})}var _=(function(){if(u)return Mr(function(){return Promise.resolve(l.add(i,o)).then(function(){return Promise.resolve(l.L("beforeLeave",i,c)).then(function(){return Promise.resolve(l.L("beforeEnter",i,c)).then(function(){return Promise.resolve(Promise.all([l.leave(i,c),l.enter(i,c)])).then(function(){return Promise.resolve(l.L("afterLeave",i,c)).then(function(){return Promise.resolve(l.L("afterEnter",i,c)).then(function(){})})})})})})},function(M){if(l.H(M))throw new wo(M,"Transition error [sync]")});var m=function(M){return Mr(function(){var E=(function(){if(p!==!1)return Promise.resolve(l.add(i,o)).then(function(){return Promise.resolve(l.L("beforeEnter",i,c)).then(function(){return Promise.resolve(l.enter(i,c,p)).then(function(){return Promise.resolve(l.L("afterEnter",i,c)).then(function(){})})})})})();if(E&&E.then)return E.then(function(){})},function(E){if(l.H(E))throw new wo(E,"Transition error [before/after/enter]")})},p=!1,y=Mr(function(){return Promise.resolve(l.L("beforeLeave",i,c)).then(function(){return Promise.resolve(Promise.all([l.leave(i,c),es(s,i)]).then(function(M){return M[0]})).then(function(M){return p=M,Promise.resolve(l.L("afterLeave",i,c)).then(function(){})})})},function(M){if(l.H(M))throw new wo(M,"Transition error [before/after/leave]")});return y&&y.then?y.then(m):m()})();return _&&_.then?_.then(g):g()})}var f=(function(){if(u)return Promise.resolve(es(s,i)).then(function(){})})();return f&&f.then?f.then(h):h()},function(h){throw l.C=!1,h.name&&h.name==="BarbaError"?(l.logger.debug(h.label),l.logger.error(h.error),h):(l.logger.debug("Transition error [page]"),l.logger.error(h),h)});return Promise.resolve(d&&d.then?d.then(a):a())}catch(h){return Promise.reject(h)}},e.once=function(t,i){try{return Promise.resolve(Kn.do("once",t,i)).then(function(){return i.once?Pi(i.once,i)(t):Promise.resolve()})}catch(r){return Promise.reject(r)}},e.leave=function(t,i){try{return Promise.resolve(Kn.do("leave",t,i)).then(function(){return i.leave?Pi(i.leave,i)(t):Promise.resolve()})}catch(r){return Promise.reject(r)}},e.enter=function(t,i,r){try{return Promise.resolve(Kn.do("enter",t,i)).then(function(){return i.enter?Pi(i.enter,i)(t,r):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,i){try{return hi.addContainer(t.next.container,i),Kn.do("nextAdded",t),Promise.resolve()}catch(r){return Promise.reject(r)}},e.remove=function(t){try{return hi.removeContainer(t.current.container),Kn.do("currentRemoved",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.H=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.L=function(t,i,r){try{return Promise.resolve(Kn.do(t,i,r)).then(function(){return r[t]?Pi(r[t],r)(i):Promise.resolve()})}catch(s){return Promise.reject(s)}},So(n,[{key:"isRunning",get:function(){return this.C},set:function(t){this.C=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),n})(),Lp=(function(){function n(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(i){t.byNamespace.set(i.namespace,i)}),this.names.forEach(function(i){Kn[i](t._(i))}))}return n.prototype._=function(e){var t=this;return function(i){var r=e.match(/enter/i)?i.next:i.current,s=t.byNamespace.get(r.namespace);return s&&s[e]?Pi(s[e],s)(i):Promise.resolve()}},n})();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(n){var e=this;do{if(e.matches(n))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var Ip={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},Ao=new((function(){function n(){this.version="2.10.3",this.schemaPage=Ip,this.Logger=di,this.logger=new di("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=Kn,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=hi,this.helpers=hp,this.history=Tc,this.request=pp,this.url=fp,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var e=n.prototype;return e.use=function(t,i){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,i),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var i=t===void 0?{}:t,r=i.transitions,s=r===void 0?[]:r,o=i.views,a=o===void 0?[]:o,l=i.schema,c=l===void 0?dn:l,u=i.requestError,d=i.timeout,h=d===void 0?2e3:d,f=i.cacheIgnore,g=f!==void 0&&f,_=i.cacheFirstPage,m=_!==void 0&&_,p=i.prefetchIgnore,y=p!==void 0&&p,M=i.preventRunning,E=M!==void 0&&M,A=i.prevent,T=A===void 0?null:A,C=i.debug,x=i.logLevel;if(di.setLevel((C!==void 0&&C)===!0?"debug":x===void 0?"off":x),this.logger.info(this.version),Object.keys(c).forEach(function(R){dn[R]&&(dn[R]=c[R])}),this.B=u,this.timeout=h,this.cacheIgnore=g,this.cacheFirstPage=m,this.prefetchIgnore=y,this.preventRunning=E,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var w=this.data.current;if(!w.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new gp(g),this.headers=new _p,this.prevent=new Rp(y),this.transitions=new Pp(s),this.views=new Lp(a),T!==null){if(typeof T!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",T)}this.history.init(w.url.href,w.namespace),m&&this.cache.set(w.url.href,Promise.resolve({html:w.html,url:w.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(R){return R.init()});var P=this.data;P.trigger="barba",P.next=P.current,P.current=un({},this.schemaPage),this.hooks.do("ready",P),this.once(P),this.I()},e.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,i,r){var s;if(i===void 0&&(i="barba"),this.F=null,this.transitions.isRunning)this.force(t);else if(!(s=i==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(t,!0):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return i=this.history.change(this.cache.has(t)?this.cache.get(t).target:t,i,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,i,r??void 0,s)},e.once=function(t){try{var i=this;return Promise.resolve(i.hooks.do("beforeEnter",t)).then(function(){function r(){return Promise.resolve(i.hooks.do("afterEnter",t)).then(function(){})}var s=(function(){if(i.transitions.hasOnce){var o=i.transitions.get(t,{once:!0});return Promise.resolve(i.transitions.doOnce({transition:o,data:t})).then(function(){})}})();return s&&s.then?s.then(r):r()})}catch(r){return Promise.reject(r)}},e.page=function(t,i,r,s){try{var o,a=function(){var d=l.data;return Promise.resolve(l.hooks.do("page",d)).then(function(){var h=(function(f,g){try{var _=(m=l.transitions.get(d,{once:!1,self:s}),Promise.resolve(l.transitions.doPage({data:d,page:o,transition:m,wrapper:l.q})).then(function(){l.I()}))}catch{return g()}var m;return _&&_.then?_.then(void 0,g):_})(0,function(){di.getLevel()===0&&l.force(d.next.url.href)});if(h&&h.then)return h.then(function(){})})},l=this;if(l.data.next.url=un({href:t},l.url.parse(t)),l.data.trigger=i,l.data.event=r,l.cache.has(t))o=l.cache.update(t,{action:"click"}).request;else{var c=l.request(t,l.timeout,l.onRequestError.bind(l,i),l.cache,l.headers);c.then(function(d){d.url.href!==t&&l.history.add(d.url.href,i,"replace")}),o=l.cache.set(t,c,"click","pending").request}var u=(function(){if(l.transitions.shouldWait)return Promise.resolve(es(o,l.data)).then(function(){})})();return Promise.resolve(u&&u.then?u.then(a):a())}catch(d){return Promise.reject(d)}},e.onRequestError=function(t){this.transitions.isRunning=!1;var i=[].slice.call(arguments,1),r=i[0],s=i[1],o=this.cache.getAction(r);return this.cache.delete(r),this.B&&this.B(t,o,r,s)===!1||o==="click"&&this.force(r),!1},e.prefetch=function(t){var i=this;t=this.url.getAbsoluteHref(t),this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(r){i.logger.error(r)}),"prefetch","pending")},e.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},e.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},e.U=function(t){var i=this,r=this.W(t);if(r){var s=this.url.getAbsoluteHref(this.dom.getHref(r));this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,r),this.cache,this.headers).catch(function(o){i.logger.error(o)}),"enter","pending")}},e.$=function(t){var i=this.W(t);if(i){if(this.transitions.isRunning&&this.preventRunning)return t.preventDefault(),void t.stopPropagation();this.F=t,this.go(this.dom.getHref(i),i,t)}},e.X=function(t){this.go(this.url.getHref(),"popstate",t)},e.W=function(t){for(var i=t.target;i&&!this.dom.getHref(i);)i=i.parentNode;if(i&&!this.prevent.checkLink(i,t,this.dom.getHref(i)))return i},e.I=function(){var t=this.url.getHref(),i={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:un({href:t},this.url.parse(t))};this.D={current:i,event:void 0,next:un({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},So(n,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),n})());const Pc=["h1","h2","h3","h4","h5","h6","p","[data-text]",".filter",".w-inline-block",".body-large",".body-regular",".body-small",".link_large",".link_small",".link_mob_nav",".nav_link",".heading-1",".heading-2",".heading-3",".heading-4",".heading-5",".heading-6"].join(","),mt={load:{duration:.9,ease:"power3.out",groupStagger:.3,lineStagger:.045},aos:{start:"top bottom",duration:.8,ease:"power3.out",lineStagger:.045},out:{duration:.65,ease:"power3.in",lineStagger:0},underline:{duration:.16,inEase:"power2.out",outEase:"power2.in"}},Rn=new WeakMap,Lc="mm-text-preload-style",Ic="mm-underline-link-style",Dp="mm:text-reveal",Ro="mm:underline-reveal";let Dc=!1;function Np(){if(Up(),document.getElementById(Lc))return;const n=document.createElement("style");n.id=Lc,n.textContent=`
    [data-barba="container"]:not([data-text-ready="true"]) :is(${Pc}) {
      opacity: 0 !important;
    }
  `,document.head.appendChild(n)}function Up(){if(Fp(),Op(),document.getElementById(Ic))return;const n=document.createElement("style");n.id=Ic,n.textContent=`
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

    html.mm-safari .w-dyn-item [data-underline-link] {
      display: inline-block;
      vertical-align: top;
      line-height: inherit;
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

  `,document.head.appendChild(n)}function Op(){document.documentElement.classList.toggle("mm-safari",Yp())}function Fp(){Dc||(Dc=!0,document.addEventListener("pointerdown",Nc,!0),document.addEventListener("click",Nc,!0))}function Nc(n){var t,i;document.querySelectorAll("[data-underline-clicked='true']").forEach(r=>{delete r.dataset.underlineClicked,delete r.dataset.underlineClickedHovered});const e=(i=(t=n.target)==null?void 0:t.closest)==null?void 0:i.call(t,"[data-underline-link]");e&&(e.dataset.underlineClicked="true",e.dataset.underlineClickedHovered=String(e.matches(":hover")))}function Uc(n=document,e={}){const t=window.gsap,i=window.SplitText,r=e.autoAnimate!==!1;if(!t||!i||!n){n!=null&&n.dataset&&(n.dataset.textReady="true");return}const s=Li(n).map(o=>(zc(o)||t.set(o,{opacity:0}),Vp(o,i)));s.forEach(o=>{t.set(o.lines,{yPercent:110}),zp(o),zc(o.element)||t.set(o.element,{opacity:1})}),n.dataset.textReady="true",r&&(Bp(s),kc(s))}function Er(n=document){n!=null&&n.dataset&&delete n.dataset.textReady,Li(n).forEach(Hp)}function Co(n=document){const e=window.gsap;if(!e||!n)return Promise.resolve();const t=Li(n).map(r=>Rn.get(r)).filter(Boolean),i=t.flatMap(r=>r.lines);return i.length?(t.forEach(Hc),Promise.all([Gp(t),e.to(i,{yPercent:-110,duration:mt.out.duration,ease:mt.out.ease,stagger:mt.out.lineStagger})])):Promise.resolve()}function Oc(n=document,e={}){if(!window.gsap||!n)return Promise.resolve();const i=Li(n).filter(Lo).map(r=>Rn.get(r)).filter(Boolean);return i.length?Bc(i,{delay:e.delay||0,duration:mt.aos.duration,ease:mt.aos.ease,stagger:mt.aos.lineStagger}):Promise.resolve()}function Po(n=document,e={}){if(!window.gsap||!n)return Promise.resolve();const i=Li(n).map(r=>Rn.get(r)).filter(Boolean).filter(r=>e.force||!r.inDone);return i.length?Bc(i,{duration:e.duration??mt.aos.duration,ease:e.ease||mt.aos.ease,delay:e.delay||0,stagger:e.stagger??mt.aos.lineStagger}):Promise.resolve()}function Fc(n=document){const e=Li(n).map(t=>Rn.get(t)).filter(Boolean).filter(t=>!t.inDone);kc(e)}function Bp(n){const e=window.gsap;n.filter(i=>i.loadIndex!==null).sort((i,r)=>i.loadIndex-r.loadIndex).forEach(i=>{e.to(i.lines,{yPercent:0,opacity:1,duration:mt.load.duration,ease:mt.load.ease,delay:(i.loadIndex-1)*mt.load.groupStagger,stagger:mt.load.lineStagger,onStart:()=>{i.inDone=!0,Io(i)},onComplete:()=>{Do(i)}})})}function Bc(n,e={}){const t=window.gsap,i=n.filter(r=>r.lines.length).map(r=>t.to(r.lines,{yPercent:0,opacity:1,duration:e.duration,ease:e.ease,delay:e.delay||0,stagger:e.stagger||0,onStart:()=>{r.inDone=!0,Io(r)},onComplete:()=>{Do(r)}}));return Promise.all(i)}function kc(n){if(!window.ScrollTrigger){n.filter(e=>e.loadIndex===null).forEach(ts);return}n.filter(e=>e.loadIndex===null).forEach(e=>{e.trigger=window.ScrollTrigger.create({trigger:e.element,start:mt.aos.start,once:!0,onEnter:()=>ts(e),onRefresh:()=>{Lo(e.element)&&ts(e)}}),Lo(e.element)&&ts(e)})}function ts(n){const e=window.gsap;!e||n.inDone||(n.inDone=!0,Io(n),e.to(n.lines,{yPercent:0,opacity:1,duration:mt.aos.duration,ease:mt.aos.ease,stagger:mt.aos.lineStagger,onComplete:()=>{Do(n)}}))}function Lo(n){const e=n.getBoundingClientRect();return e.top-kp(n.closest("[data-barba='container']"))<window.innerHeight*.95&&e.bottom>0}function kp(n){if(!n)return 0;const e=window.getComputedStyle(n).transform;return!e||e==="none"?0:new DOMMatrixReadOnly(e).m42}function Vp(n,e){if(Rn.has(n))return Rn.get(n);const t=new e(n,{type:"lines,words",linesClass:"text-reveal-line"}),i=t.lines.map(qp),r=Number(n.dataset.textLoad),s={element:n,split:t,lines:i,trigger:null,inDone:!1,isUnderlineLink:No(n),loadIndex:Number.isFinite(r)&&r>0?r:null};return n.dataset.textRoot="",Rn.set(n,s),s}function Hp(n){var t,i;const e=Rn.get(n);e&&((t=e.trigger)==null||t.kill(),(i=e.split)==null||i.revert(),delete n.dataset.textRoot,delete n.dataset.textRevealed,delete n.dataset.underlineRevealed,Vc(e),Rn.delete(n))}function Io(n){!(n!=null&&n.element)||n.element.dataset.textRevealed==="true"||(n.element.dataset.textRevealed="true",n.element.dispatchEvent(new CustomEvent(Dp,{bubbles:!0,detail:{element:n.element}})))}function zp(n){n!=null&&n.isUnderlineLink&&(n.element.dataset.underlineReady="false",n.element.style.setProperty("--mm-underline-scale","0"),n.element.style.setProperty("--mm-underline-origin","left center"),n.lines.forEach(e=>ns(e,"hidden")))}function Gp(n){const e=window.gsap,t=n.filter(i=>i==null?void 0:i.isUnderlineLink);return t.length?(t.forEach(i=>{const r=i.element.matches(":hover"),s=Uo(i.element)&&i.element.dataset.underlineClicked==="true";if(Hc(i),s){i.skipUnderlineOut=!0;return}i.element.dataset.underlineHovered=String(r),i.element.dataset.underlineLeaving="true",i.element.dataset.underlineReady="false",i.element.style.setProperty("--mm-underline-origin","right center"),e==null||e.killTweensOf(i.element),i.skipUnderlineOut=!1,!Uo(i.element)&&r&&i.element.style.setProperty("--mm-underline-scale","1")}),e?Promise.all(t.filter(i=>!i.skipUnderlineOut).map(i=>e.to(i.element,{"--mm-underline-scale":0,duration:mt.underline.duration,ease:mt.underline.outEase,overwrite:!0}))):(t.forEach(Vc),Promise.resolve())):Promise.resolve()}function Do(n){n!=null&&n.isUnderlineLink&&(Xp(n),n.lines.forEach(e=>ns(e,"visible")),Wp(n.element))}function Wp(n){const e=window.gsap;if(n){if(delete n.dataset.underlineLeaving,n.dataset.underlineReady="true",n.style.setProperty("--mm-underline-origin","left center"),!Uo(n)){n.style.setProperty("--mm-underline-scale","0");return}if(!e){n.style.setProperty("--mm-underline-scale","1");return}e.to(n,{"--mm-underline-scale":1,duration:mt.underline.duration,ease:mt.underline.inEase,overwrite:!0})}}function Xp(n){!(n!=null&&n.element)||n.element.dataset.underlineRevealed==="true"||(n.element.dataset.underlineRevealed="true",n.element.textContent.trim().toLowerCase()==="sf.co"&&console.log("[MM footer GLB] SFCO line underline activated"),n.element.dispatchEvent(new CustomEvent(Ro,{bubbles:!0,detail:{element:n.element}})))}function Vc(n){n!=null&&n.isUnderlineLink&&(n.element.dataset.underlineReady="false",delete n.element.dataset.underlineLeaving,delete n.element.dataset.underlineHovered,delete n.element.dataset.underlineClicked,delete n.element.dataset.underlineClickedHovered,delete n.skipUnderlineOut,n.element.style.setProperty("--mm-underline-scale","0"),n.element.style.setProperty("--mm-underline-origin","left center"),n.lines.forEach(e=>ns(e,"hidden")))}function Hc(n){n.lines.forEach(e=>ns(e,"hidden"))}function ns(n,e){const t=n.closest(".text-reveal-mask");t&&(t.style.overflow=e)}function qp(n){const e=document.createElement("span");return e.className="text-reveal-mask",e.style.display="block",e.style.overflow="hidden",e.style.textAlign="inherit",n.style.display="block",n.style.textAlign="inherit",n.parentNode.insertBefore(e,n),e.appendChild(n),n}function Li(n){const e=[...n.querySelectorAll(Pc)].filter(t=>t.dataset.textAnimate==="false"||t.closest("[data-text-animate='false'], .spinner_group, .off, [hidden]")?!1:t.textContent.trim().length>0);return e.filter(t=>e.find(r=>r!==t&&No(r)&&r.contains(t))?!1:No(t)?!0:!e.some(r=>r!==t&&t.contains(r)))}function zc(n){return n.classList.contains("filter")}function No(n){var e;return(e=n.matches)==null?void 0:e.call(n,"[data-underline-link]")}function Uo(n){var e;return((e=n.getAttribute)==null?void 0:e.call(n,"data-underline-link"))==="alt"}function Yp(){return/^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)}const Kp="https://methodmadness.slateapp.com/api/v1",jp="30a62480f9e645c6a15f706c3b2d14b2",$p="2857",Gc={s:1.1,m:1.2,l:1.3},Zp=500,Jp=28,Qp=-4,em=4,Wc="110%",tm=.35,nm="power3.out",im=.6,rm=.3,sm=.45,om=.5,am='[data-vid="title"], [data-vid="client"], [data-vid="director"]',lm="(min-width: 992px)",Oo=new Map,Fo=new WeakMap,jn=new WeakMap,is=new WeakMap,rs=new WeakMap;function cm(n=document,e={}){const t=yg();qc(n);const i=[...dm(n,t),...pm(n,t,e),..._m(n,t),...vm(n,t,e),...fm(n,t),...Bm(n,t)];return Promise.allSettled(i).then(r=>(n!=null&&n.dataset&&(n.dataset.shotsReady="true"),r))}function um(n=document){qc(n),n.querySelectorAll("video").forEach(t=>{t.pause()});const e=document.querySelector("[data-shots-modal]");e&&!n.contains(e)&&Wo(e)}function Xc(n=document,e={}){n.querySelectorAll("[data-showreel-stream]").forEach(t=>{const i=t.querySelector(".vid_stream_inner");i&&Om(t,i,e)})}function qc(n=document){var t;n.querySelectorAll('[data-shots="hero"]').forEach(i=>{var r;(r=Fo.get(i))==null||r.stop(),Fo.delete(i),delete i.dataset.shotsHeroInit}),n.querySelectorAll("[data-featured-list]").forEach(i=>{delete i.dataset.shotsFeaturedInit}),((t=n.matches)!=null&&t.call(n,'[data-barba="container"]')?[n,...n.querySelectorAll('[data-barba="container"]')]:[...n.querySelectorAll('[data-barba="container"]')]).forEach(i=>{delete i.dataset.shotsReady,delete i.dataset.shotsWorkGridInit,delete i.dataset.workGridVisible,delete i.dataset.workGridReady}),n.querySelectorAll("[data-showreel-stream]").forEach(i=>{var r;(r=is.get(i))==null||r.stop(),is.delete(i),delete i.dataset.shotsShowreelStreamInit}),n.querySelectorAll(".featured .vid-panel, .featured.vid-panel, .featured .vid-panels, .featured.vid-panels, [data-showreel-stream] .vid-panel").forEach(i=>{var r;(r=jn.get(i))==null||r.stop(),jn.delete(i)})}function dm(n,e){return[...n.querySelectorAll('[data-shots="hero"]')].map(t=>{const i=Gm(t);if(i.length>0)return Hm(t,i,e);const r=t.dataset.shotsWork||$p;return Cn(`work/${r}`,e).then(s=>km(t,s)).catch(s=>console.warn(`[shots] Could not load hero work ${r}.`,s))})}function hm(n=document){n.querySelectorAll(".vid-panel").forEach(e=>{var t,i;(i=(t=jn.get(e))==null?void 0:t.freeze)==null||i.call(t)})}function fm(n,e){return[...n.querySelectorAll("[data-shots-work]")].map(t=>{const i=t.dataset.shotsWork;return i?Cn(`work/${i}`,e).then(r=>zo(t,r)).catch(r=>console.warn(`[shots] Could not load work ${i}.`,r)):Promise.resolve()})}function pm(n,e,t={}){return[...n.querySelectorAll("[data-featured-list]")].map(i=>{if(i.dataset.shotsFeaturedInit==="true")return Promise.resolve();i.dataset.shotsFeaturedInit="true";const r=Qc(i),s=i.closest('[data-barba="container"]')||document,o=!!s.querySelector("[data-director-list]")||!!s.querySelector("[data-editors-list]"),a=mm(s),l=a.flat();return r.length===0||l.length===0?Promise.resolve():o?gm(s,e,t):Promise.all(r.map(c=>Cn(`work/${c.id}`,e).then(u=>({...c,work:u,snippetUrl:Di(u)||Qt(u),fullVideoUrl:Qt(u)})).catch(u=>(console.warn(`[shots] Could not load featured work ${c.id}.`,u),null)))).then(c=>{const u=c.filter(Boolean).filter(d=>d.snippetUrl).slice(0,Yc(a));a.forEach(d=>{d.forEach((h,f)=>{const g=u[f];h.hidden=!g,g&&ss(h,g.work,g.snippetUrl,g.fullVideoUrl,f,{reveal:!1})})}),a.forEach(d=>{jc(d.filter(h=>!h.hidden),t.transition)})}).catch(c=>console.warn("[shots] Could not load featured work.",c))})}function mm(n){const e=[...n.querySelectorAll(".featured .grid.features")];return e.length?e.map(t=>[...t.querySelectorAll(".vid-panel, .vid-panels")]).filter(t=>t.length):[[...n.querySelectorAll(".featured .vid-panel, .featured.vid-panel, .featured .vid-panels, .featured.vid-panels")]]}function Yc(n){return Math.max(...n.map(e=>e.length),0)}function Bo(){var n,e;return((e=(n=window.matchMedia)==null?void 0:n.call(window,lm))==null?void 0:e.matches)??!0}function Kc(){return!Bo()}function gm(n,e,t={}){if(n.dataset.shotsWorkGridInit==="true")return Promise.resolve();n.dataset.shotsWorkGridInit="true";const i=wm(n),r=i.flatMap(a=>a.panels),s=Qc(n.querySelector("[data-featured-list]")).map(a=>a.id),o=[...eu(n.querySelector("[data-director-list]")),...eu(n.querySelector("[data-editors-list]"))];return i.length===0||r.length===0||s.length===0&&o.length===0?Promise.resolve():Promise.allSettled([...s.map(a=>Cn(`work/${a}`,e)),...o.map(a=>Cn(`showreel/${a}`,e).then(nu))]).then(a=>{const l=qm(Ym(a.flatMap(d=>d.status!=="fulfilled"?[]:Array.isArray(d.value)?d.value:[d.value]))).filter(d=>Di(d)||Qt(d)),c=Yc(i.map(d=>d.panels)),u=c*2;n.dataset.workGridBatch=String(c),n.dataset.workGridInitial=String(u),Im(n,l,()=>Vo(n,i,l,c,u,{transition:!0})),Vo(n,i,l,c,u,{transition:t.transition})}).catch(a=>console.warn("[shots] Could not load work grid.",a))}function _m(n,e){return[...n.querySelectorAll("[data-direct-id]")].map(t=>{var s;const i=(s=t.dataset.directId)==null?void 0:s.trim();if(!i)return Promise.resolve();const r=t.closest(".vid-panel")||t.parentElement;return r?Cn(`work/${i}`,e).then(o=>ss(r,o,Di(o)||Qt(o),Qt(o),0,{eagerPoster:!0,autoplayInView:!0})).catch(o=>console.warn(`[shots] Could not load direct video ${i}.`,o)):Promise.resolve()})}function vm(n,e,t={}){return[...n.querySelectorAll("[data-showreel-stream]")].map(i=>{var a;if(i.dataset.shotsShowreelStreamInit==="true")return Promise.resolve();const r=Jm(i);if(!r)return Promise.resolve();i.closest('[data-barba="container"]');const s=i.querySelector(".vid_stream_inner"),o=(a=s==null?void 0:s.querySelector(".vid-panel"))==null?void 0:a.cloneNode(!0);return!s||!o?Promise.resolve():Cn(`showreel/${r}`,e).then(l=>{const c=nu(l).map(u=>({work:u,snippetUrl:Di(u)||Qt(u),fullVideoUrl:Qt(u)})).filter(u=>u.snippetUrl);xm(i,s,o,c,{loop:Bo()}),i.dataset.shotsShowreelStreamInit="true"}).catch(l=>{delete i.dataset.shotsShowreelStreamInit,console.warn(`[shots] Could not load showreel stream ${r}.`,l)})})}function xm(n,e,t,i,r={}){if(n.querySelectorAll("[data-showreel-clone]").forEach(s=>s.remove()),console.log("[shots] showreel stream items",i.length),i.length===0){e.hidden=!0;return}if(e.hidden=!1,e.replaceChildren(),r.loop&&ko(e,t,i,"before"),ko(e,t,i,"primary"),r.loop){ko(e,t,i,"after");const s=ym(n,e),o=Sm(n);is.set(n,{stop(){s.stop(),o.stop()}})}else is.set(n,{stop(){}})}function ko(n,e,t,i){t.forEach((r,s)=>{const o=bm(e);o.dataset.showreelSet=i,i!=="primary"&&(o.dataset.showreelClone=""),n.append(o),ss(o,r.work,r.snippetUrl,r.fullVideoUrl,s,{eagerPoster:!0,parallax:!1,reveal:!1})})}function ym(n,e){const t={passive:!0,capture:!0};let i=0,r=!1;Mm(),n.style.overflowY="auto",n.style.overflowX="hidden",n.style.scrollbarWidth="none",n.style.overscrollBehavior="contain",n.style.webkitOverflowScrolling="touch",n.style.minHeight="0",n.style.height="100vh",n.style.maxHeight="100vh",n.setAttribute("data-lenis-prevent",""),n.tabIndex||(n.tabIndex=0);const s=l=>{l.stopPropagation()},o=l=>{l.stopPropagation()},a=()=>{r||i<=0||(n.scrollTop>=i*1.75?(r=!0,n.scrollTop-=i,r=!1):n.scrollTop<=i*.25&&(r=!0,n.scrollTop+=i,r=!1))};return n.addEventListener("wheel",s,t),n.addEventListener("touchmove",o,t),n.addEventListener("scroll",a,{passive:!0}),requestAnimationFrame(()=>{i=Em(e),i>0&&(r=!0,n.scrollTop=i,r=!1)}),{stop(){n.removeEventListener("wheel",s,t),n.removeEventListener("touchmove",o,t),n.removeEventListener("scroll",a),n.style.overflowY="",n.style.overflowX="",n.style.scrollbarWidth="",n.style.overscrollBehavior="",n.style.webkitOverflowScrolling="",n.style.minHeight="",n.style.height="",n.style.maxHeight="",n.removeAttribute("data-lenis-prevent")}}}function Sm(n){const e=n.closest(".directors_page_holder")||n.closest(".grid.directors")||n.closest('[data-barba="container"]')||document;let t=null;const i=o=>{var a,l;(l=(a=o.target).closest)!=null&&l.call(a,"[data-showreel-stream]")||(n.scrollTop+=o.deltaY,o.preventDefault())},r=o=>{var a,l;t=((l=(a=o.touches)==null?void 0:a[0])==null?void 0:l.clientY)??null},s=o=>{var l,c,u,d;if((c=(l=o.target).closest)!=null&&c.call(l,"[data-showreel-stream]")||t===null)return;const a=((d=(u=o.touches)==null?void 0:u[0])==null?void 0:d.clientY)??t;n.scrollTop+=t-a,t=a,o.preventDefault()};return e.addEventListener("wheel",i,{passive:!1}),e.addEventListener("touchstart",r,{passive:!0}),e.addEventListener("touchmove",s,{passive:!1}),{stop(){e.removeEventListener("wheel",i),e.removeEventListener("touchstart",r),e.removeEventListener("touchmove",s)}}}function Mm(){if(document.getElementById("mm-showreel-stream-style"))return;const n=document.createElement("style");n.id="mm-showreel-stream-style",n.textContent="[data-showreel-stream]::-webkit-scrollbar{display:none;}",document.head.append(n)}function Em(n){const e=n==null?void 0:n.querySelector('[data-showreel-set="primary"]'),t=n==null?void 0:n.querySelector('[data-showreel-set="after"]');return!e||!t?0:Math.max(t.offsetTop-e.offsetTop,0)}function bm(n){const e=n.cloneNode(!0);return e.removeAttribute("id"),e.querySelectorAll("[id]").forEach(t=>t.removeAttribute("id")),e.querySelectorAll('[data-vid="vid"]').forEach(t=>{t.style.clipPath="",t.style.webkitClipPath=""}),e.hidden=!1,e}function ss(n,e,t,i,r=0,s={}){var P;(P=jn.get(n))==null||P.stop(),jn.delete(n);const o=n.querySelector('[data-vid="vid"]'),a=n.querySelector(".vid_holder")||o,l=n.querySelector(".vid_play_hover"),c=n.querySelector('[data-vid="title"]'),u=n.querySelector('[data-vid="client"]'),d=n.querySelector('[data-vid="director"]'),h=n.querySelector('[data-vid="time"]'),f=Su(e),g=e.title||"",_=vu(_u(e)),m=gu(e);if(console.log("[shots] bind panel",{index:r,title:g,client:_,time:yu(xu(e)),hasVideoRoot:!!o,hasSnippet:!!t,hasFullVideo:!!i}),n.dataset.modalTitle=g,n.dataset.modalClient=_,n.dataset.modalDirector=m,Ii(c,g),Ii(u,_),iu(d,m,n),Ii(h,yu(xu(e))),l&&(l.dataset.textAnimate="false"),!o)return;const p=du(n),y=document.createElement("img");p.loop=!0,p.autoplay=!1,p.preload="none",p.style.display="none",y.src=f||"",y.alt=e.title||"",y.loading=s.eagerPoster?"eager":"lazy",s.eagerPoster&&(y.fetchPriority="high"),y.decoding="async",y.style.width="100%",y.style.height=s.parallax===!1?"100%":Wc,y.style.objectFit="cover",o.replaceChildren(y,p);const M=s.parallax===!1?null:Tm(o),E=s.reveal===!1?null:Um(o,n)||Nm(o,r),A=new AbortController,{signal:T}=A;let C=null,x=!1;const w=s.autoplayInView?_g(n,p,y,t):null;s.autoplayInView||(a.addEventListener("mouseenter",()=>{x=!0,clearTimeout(C),C=window.setTimeout(()=>{p.src||(p.src=t,p.load()),pu(p,y,()=>x)},Zp)},{signal:T}),a.addEventListener("mouseleave",()=>{x=!1,clearTimeout(C),p.pause(),p.currentTime=0,p.style.display="none",y.style.display=""},{signal:T})),a.addEventListener("click",()=>{eg(i||t,e,n)},{signal:T}),jn.set(n,{freeze(){M==null||M.freeze()},stop(){A.abort(),clearTimeout(C),w==null||w.stop(),E==null||E.kill(),M==null||M.kill(),p.pause()}})}function Tm(n){const e=window.gsap,t=window.ScrollTrigger,i=[...(n==null?void 0:n.querySelectorAll("img, video"))||[]];if(!e||!t||!n||i.length===0)return null;n.style.overflow="hidden",e.set(i,{height:Wc,yPercent:Qp});const r=e.to(i,{yPercent:em,ease:"none",scrollTrigger:{trigger:n,start:"top bottom",end:"bottom top",scrub:.45}});return{freeze(){var s;(s=r.scrollTrigger)==null||s.kill(!1),r.kill()},kill(){var s;(s=r.scrollTrigger)==null||s.kill(!1),r.kill(),e.killTweensOf(i),n.style.overflow=""}}}function wm(n){return[...n.querySelectorAll(".featured .grid.features")].map(e=>({grid:e,panels:[...e.querySelectorAll(".vid-panel, .vid-panels")]})).filter(e=>e.panels.length)}function Vo(n,e,t,i,r,s={}){const o=$m(n),a=Number(n.dataset.workGridVisible||r),l=o==="all"?t:t.filter(d=>jm(d).includes(o)),c=l.slice(0,a),u=()=>{var h;const d=[];e.forEach(f=>{const g=Rm(f.grid,f.panels,c.length,i);$c(f.grid).forEach(m=>{var y;const p=br(m);(y=jn.get(m))==null||y.stop(),jn.delete(m),m.hidden=!0,p&&(p.hidden=!0)}),g.forEach((m,p)=>{const y=c[p],M=br(m);m.hidden=!y,M&&(M.hidden=!y),y&&(ss(m,y,Di(y)||Qt(y),Qt(y),p,{reveal:!1,parallax:!1}),d.push(m))})}),n!=null&&n.dataset&&(n.dataset.shotsReady="true"),jc(d,s.transition),Cm(n,Am(e),l.length,c.length,i,()=>{n.dataset.workGridVisible=String(a+i),Vo(n,e,t,i,r,{transition:!0})}),(h=window.ScrollTrigger)==null||h.refresh()};if(s.transition){Promise.all(e.map(d=>Pm(d.grid))).then(u);return}u()}function Am(n){var e,t;return((e=n.find(({grid:i})=>{var s;const r=(s=window.getComputedStyle)==null?void 0:s.call(window,i);return(r==null?void 0:r.display)!=="none"&&i.getClientRects().length>0}))==null?void 0:e.grid)||((t=n[0])==null?void 0:t.grid)}function Rm(n,e,t,i){const r=e.slice(0,i).map(s=>br(s)||s).filter(Boolean);if(r.length===0)return e;for(;e.length<t;){const o=r[e.length%r.length].cloneNode(!0);delete o.dataset.shotsVideoReveal,o.querySelectorAll("[data-shots-video-reveal]").forEach(a=>{delete a.dataset.shotsVideoReveal}),n.append(o),e.push(o.matches(".vid-panel")?o:o.querySelector(".vid-panel"))}return e.filter(Boolean)}function Cm(n,e,t,i,r,s){if(!e)return;let o=n.querySelector("[data-work-load-more]");o||(o=document.createElement("button"),o.type="button",o.dataset.workLoadMore="",o.textContent="Load more"),o.onclick=s,o.hidden=i>=t,o.disabled=i>=t,e.append(o)}function Pm(n){const e=window.gsap,t=Lm(n).filter(i=>!i.hidden);return!e||t.length===0?Promise.resolve():new Promise(i=>{e.to(t,{opacity:0,duration:.18,ease:"power1.out",overwrite:!0,onComplete:i})})}function jc(n,e=!1){var a;const t=window.gsap,i=n.map(br).filter(Boolean),r=(a=n[0])==null?void 0:a.closest("[data-barba='container']"),s=n.map(l=>l.querySelector(".vid.backing")).filter(Boolean),o=n.map(l=>l.querySelector('[data-vid="vid"]')).filter(Boolean);if(!t){r!=null&&r.dataset&&(r.dataset.workGridReady="true"),i.forEach(l=>{l.style.opacity=""});return}r!=null&&r.dataset&&(r.dataset.workGridReady="true"),t.set(i,{opacity:1}),t.set(s,{y:18,opacity:0}),t.set(o,{clipPath:Wt(0),webkitClipPath:Wt(0)}),t.to(s,{y:0,opacity:1,duration:.7,ease:"power3.out",stagger:.035,delay:e?.42:.08,overwrite:!0}),t.to(o,{clipPath:Wt(1),webkitClipPath:Wt(1),duration:.55,ease:"power4.out",stagger:.04,delay:e?.48:.12,overwrite:!0})}function $c(n){return[...n.querySelectorAll(".vid-panel")]}function Lm(n){return $c(n).map(br).filter(Boolean)}function br(n){return(n==null?void 0:n.closest(".vid_container"))||n||null}function Im(n,e,t){const i=[...n.querySelectorAll(".filter")],r=Km(e);if(i.length===0)return;i.forEach(Zc);const s=Dm(n.dataset.workGridCategory||"all",r);n.dataset.workGridCategory=s,i.forEach((o,a)=>{const l=a===0?{label:"All",slug:"all"}:r[a-1];if(!l){o.hidden=!0,Zc(o);return}o.hidden=!1,o.dataset.filter=l.slug,o.textContent=Zm(l.label),o.dataset.workFilterReady!=="true"&&(o.dataset.workFilterReady="true",o.addEventListener("click",c=>{c.preventDefault();const u=c.currentTarget;Ho(n,u.dataset.filter||"all"),n.dataset.workGridVisible=n.dataset.workGridInitial||n.dataset.workGridBatch||"15",t(),Ho(n,n.dataset.workGridCategory||"all")}))}),Ho(n,s)}function Ho(n,e){const t=e||"all";n.dataset.workGridCategory=t,n.querySelectorAll(".filter").forEach(i=>{const r=i.dataset.filter===t;i.classList.toggle("active",r),i.style.opacity=r?"1":"0.4",i.setAttribute("aria-pressed",String(r))})}function Zc(n){n.classList.remove("active"),n.style.opacity="0.4",n.setAttribute("aria-pressed","false")}function Dm(n,e){return new Set(["all",...e.map(i=>i.slug)]).has(n)?n:"all"}function Nm(n,e=0){const t=window.gsap;if(!t||!n)return null;const i={progress:0};t.set(n,{clipPath:Wt(i.progress),webkitClipPath:Wt(i.progress)});const r=t.to(i,{progress:1,duration:.6,ease:"power4.Out",delay:.12+e*.04,paused:!0,onUpdate:()=>{n.style.clipPath=Wt(i.progress),n.style.webkitClipPath=Wt(i.progress)}}),s=window.ScrollTrigger?window.ScrollTrigger.create({trigger:n,start:"top 96%",once:!0,onEnter:()=>r.play()}):null;return s||r.play(),{kill(){s==null||s.kill(),r.kill(),t.set(n,{clearProps:"clipPath,webkitClipPath"})}}}function Um(n,e){const t=window.gsap,i=n==null?void 0:n.closest(".showreel_vid_holder");if(!t||!i||!i.closest(".footer"))return null;if(!Bo())return t.set(n,{clearProps:"clipPath,webkitClipPath"}),t.set(i,{clearProps:"width,overflow"}),t.set(e,{clearProps:"scale,transformOrigin"}),null;const r=i.offsetWidth||i.getBoundingClientRect().width;if(!r)return null;t.set(n,{clearProps:"clipPath,webkitClipPath"}),t.set(i,{width:0,overflow:"hidden"}),t.set(e,{scale:0,transformOrigin:"50% 50%"});const s=t.to(i,{width:r,duration:.8,ease:"power3.inOut",paused:!0,overwrite:!0,onComplete:()=>{var c;t.set(i,{clearProps:"width,overflow"}),t.set(e,{clearProps:"scale,transformOrigin"}),(c=window.ScrollTrigger)==null||c.refresh()}}),o=t.to(e,{scale:1,duration:.8,ease:"power3.inOut",paused:!0,overwrite:!0}),a=()=>{s.play(),o.play()},l=window.ScrollTrigger?window.ScrollTrigger.create({trigger:i,start:"top 130%",once:!0,onEnter:a}):null;return l||a(),{kill(){l==null||l.kill(),s.kill(),o.kill(),t.set(n,{clearProps:"clipPath,webkitClipPath"}),t.set(i,{clearProps:"width,overflow"}),t.set(e,{clearProps:"scale,transformOrigin"})}}}function Om(n,e,t={}){const i=window.gsap,r=[...e.querySelectorAll('[data-vid="vid"]')],s=(t.delay??.15)+2.7;Po(e,{delay:t.delay??.15,force:!0,stagger:.035}),!(!i||r.length===0)&&(Fm(n,s),i.to(n,{scrollTop:n.scrollTop+window.innerHeight*3.6,duration:2.4,ease:"power4.out",delay:0}),i.set(r,{clipPath:Wt(0),webkitClipPath:Wt(0)}),i.to(r,{clipPath:Wt(1),webkitClipPath:Wt(1),duration:.8,ease:"power3.inOut",stagger:.06,delay:t.delay??.15}))}function Fm(n,e){n&&(window.clearTimeout(Number(n.dataset.pointerHoldTimer||0)),n.style.pointerEvents="none",n.dataset.pointerHoldTimer=String(window.setTimeout(()=>{n.style.pointerEvents="",delete n.dataset.pointerHoldTimer},e*1e3)))}function Wt(n){return`inset(${100-n*100}% 0% 0% 0%)`}function Bm(n,e){return[...n.querySelectorAll("[data-shots-showreel]")].map(t=>{const i=t.dataset.shotsShowreel,r=t.querySelector("[data-shots-template]");return!i||!r?Promise.resolve():(r.hidden=!0,Cn(`showreel/${i}`,e).then(s=>{var o;t.querySelectorAll("[data-shots-item]").forEach(a=>a.remove()),(o=s.media)==null||o.forEach(a=>{const l=r.cloneNode(!0);l.hidden=!1,l.removeAttribute("data-shots-template"),l.dataset.shotsItem="",zo(l,a),r.before(l)})}).catch(s=>console.warn(`[shots] Could not load showreel ${i}.`,s)))})}function zo(n,e){const t=Qt(e),i=Su(e);n.querySelectorAll("[data-shots-title]").forEach(s=>{Ii(s,e.title||"")}),n.querySelectorAll("[data-shots-poster]").forEach(s=>{s instanceof HTMLImageElement?(s.src=i||"",s.alt||(s.alt=e.title||"")):i&&(s.style.backgroundImage=`url("${i}")`)}),(n instanceof HTMLVideoElement?[n]:[...n.querySelectorAll("video[data-shots-video]")]).forEach(s=>{t&&(s.src=t,s.poster=i||"",s.playsInline=!0,s.preload||(s.preload="metadata"),mu(s),s.hasAttribute("data-shots-autoplay")&&(s.muted=!0,s.autoplay=!0,s.loop=!0,s.play().catch(()=>{})))})}function km(n,e){n.replaceChildren();const t=document.createElement("video");t.dataset.shotsVideo="",t.dataset.shotsAutoplay="",t.dataset.shotsFit=n.dataset.shotsFit||"cover",t.muted=!0,t.loop=!0,t.autoplay=!0,t.playsInline=!0,t.controls=n.dataset.shotsControls==="true",t.preload="metadata";const i=document.createElement("div");i.dataset.shotsTitle="",n.append(t,i),zo(n,e)}function Vm(n,e){const t=Gc[String(e||"").toLowerCase()];if(!t){n.style.height="100%",n.style.transform="";return}const i=(t-1)/t/2*100;n.style.height=`${t*100}%`,n.style.transform=`translateY(-${i.toFixed(3)}%)`}async function Hm(n,e,t){if(n.dataset.shotsHeroInit==="true")return;const i=n.querySelector('[data-bgvid="true"]'),r=n.querySelector("[data-hero-directors]");if(!i||!r)return;const s=[...r.querySelectorAll(".h_director_holder")],a=(await Promise.all(e.map(_=>Cn(`work/${_.id}`,t).then(m=>({..._,work:m,videoUrl:Di(m)||Qt(m)})).catch(m=>(console.warn(`[shots] Could not load hero work ${_.id}.`,m),null))))).filter(_=>_==null?void 0:_.videoUrl).slice(0,s.length);if(a.length===0)return;n.dataset.shotsHeroInit="true";const l=du(n);i.replaceChildren(l);const c=zm(n,i);s.forEach((_,m)=>{const p=a[m];_.hidden=!p,p&&hu(_)}),pg(s);let u=0;const d={id:0},h={stop(){cancelAnimationFrame(d.id),l.pause(),l.onended=null}};Fo.set(n,h),l.addEventListener("play",()=>{fu(l,s[u%a.length],d)});function f(){if(!n.isConnected)return;const _=a[u%a.length],m=s[u%a.length];cancelAnimationFrame(d.id),fg(s),mg(s,m),Vm(l,_.size),l.src=_.videoUrl,l.load(),l.onended=()=>{n.isConnected&&(cancelAnimationFrame(d.id),u+=1,f())},gg(l),fu(l,m,d)}const g=()=>{!n.isConnected||!l.src||(document.hidden?l.pause():l.play().catch(()=>{}))};document.addEventListener("visibilitychange",g),h.stop=()=>{cancelAnimationFrame(d.id),l.pause(),l.onended=null,c==null||c.kill(),document.removeEventListener("visibilitychange",g)},f()}function zm(n,e){const t=window.gsap,i=window.ScrollTrigger;if(!t||!i||!n||!e)return null;t.set(e,{yPercent:0});const r=t.to(e,{yPercent:Jp,ease:"none",scrollTrigger:{trigger:n,start:"top top",end:"bottom top",scrub:!0}});return{kill(){var s;(s=r.scrollTrigger)==null||s.kill(),r.kill(),t.set(e,{clearProps:"yPercent"})}}}function Gm(n){const e=n.querySelector("[data-hero-directors]");return e?[...e.querySelectorAll(".h_director_holder")].map(t=>{const i=Jc(t),r=Wm(i),s=Number(t.dataset.order||t.dataset.sort||r.order),o=t.dataset.id||t.dataset.workId||r.id;return{order:s,id:o,size:r.size}}).filter(t=>Number.isFinite(t.order)&&t.order>0&&t.id).sort((t,i)=>t.order-i.order):Xm(n)}function Wm(n){const e=n.map(r=>String(r||"").trim()).filter(Boolean),t=e.map(r=>r.toLowerCase()).find(r=>Object.hasOwn(Gc,r))||"",i=e.filter(r=>/^\d+$/.test(r));return{order:i[0],id:i[1],size:t}}function Xm(n){return n?[...n.querySelectorAll(".w-dyn-item")].map(e=>{const t=Jc(e);return{order:Number(e.dataset.order||e.dataset.sort||t[0]),id:e.dataset.id||e.dataset.workId||t[1]}}).filter(e=>e.order&&e.id).sort((e,t)=>e.order-t.order):[]}function Jc(n){return[...n.children].filter(e=>!e.matches("a")).map(e=>e.textContent.trim()).filter(Boolean)}function Qc(n){return n?[...n.querySelectorAll(".w-dyn-item")].map((e,t)=>{const i=[...e.children].map(s=>s.textContent.trim()).filter(Boolean),r=Number(e.dataset.order||e.dataset.sort||i[1]);return{id:e.dataset.id||e.dataset.workId||i[0],order:Number.isFinite(r)?r:null,index:t}}).filter(e=>e.id).sort((e,t)=>e.order!==null&&t.order!==null?t.order-e.order:e.order!==null?-1:t.order!==null?1:e.index-t.index):[]}function eu(n){return n?[...n.querySelectorAll(".w-dyn-item")].flatMap(e=>[...e.children].map(t=>t.textContent.trim()).filter(Boolean)).filter(e=>/^\d+$/.test(e)):[]}function qm(n){const e=new Set;return n.filter(t=>{const i=String((t==null?void 0:t.id)||"").trim();return!i||e.has(i)?!1:(e.add(i),!0)})}function Ym(n){const e=[...n];for(let t=e.length-1;t>0;t-=1){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}function Km(n){const e=new Map;return n.forEach(t=>{tu(t).forEach(i=>{const r=Go(i);r&&e.set(r,{label:i,slug:r})})}),[...e.values()].sort((t,i)=>t.label.localeCompare(i.label))}function jm(n){return tu(n).map(Go).filter(Boolean)}function tu(n){const e=n==null?void 0:n.categories;return Array.isArray(e)?e.map(t=>(t==null?void 0:t.name)||t).map(t=>String(t||"").trim()).filter(Boolean):e&&typeof e=="object"?Object.values(e).map(t=>(t==null?void 0:t.name)||t).map(t=>String(t||"").trim()).filter(Boolean):[]}function $m(n){if(n.dataset.workGridCategory)return n.dataset.workGridCategory;const e=n.querySelector(".filter.active");return(e==null?void 0:e.dataset.filter)||Go(e==null?void 0:e.textContent)||"all"}function Go(n){return String(n||"").trim().toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}function Zm(n){return String(n||"").trim().toLowerCase().replace(/\b[a-z]/g,e=>e.toUpperCase())}function Jm(n){var e,t;return(n.dataset.showreelId||((e=n.closest("[data-showreel-id]"))==null?void 0:e.dataset.showreelId)||((t=n.closest('[data-barba="container"]'))==null?void 0:t.dataset.showreelId)||"").trim()}function nu(n){return Array.isArray(n==null?void 0:n.clips)?n.clips:Array.isArray(n==null?void 0:n.media)?n.media:[]}function Ii(n,e){if(!n)return;const t=n.style.textAlign||window.getComputedStyle(n).textAlign;n.textContent=e||"",t&&(n.style.textAlign=t)}function iu(n,e,t=document){if(!n)return;const i=n.style.textAlign||window.getComputedStyle(n).textAlign,r=Qm(t).get(ru(e));if(n.replaceChildren(),r){const s=document.createElement("a");s.href=r.href,s.textContent=e||"",s.dataset.underlineLink="alt",s.className=n.className,s.style.color="inherit",s.style.textDecoration="none",n.append(s)}else n.textContent=e||"";i&&(n.style.textAlign=i)}function Qm(n=document){var i,r;const e=((i=n==null?void 0:n.closest)==null?void 0:i.call(n,'[data-barba="container"]'))||((r=n==null?void 0:n.querySelector)==null?void 0:r.call(n,'[data-barba="container"]'))||document.querySelector('[data-barba="container"]')||document,t=new Map;return e.querySelectorAll("[data-links='directors'], [data-links='editors']").forEach(s=>{s.querySelectorAll(".w-dyn-item, [role='listitem'], li, div").forEach(o=>{var u,d,h,f,g;const a=(h=(d=(u=o.querySelector)==null?void 0:u.call(o,"[data-link-name]"))==null?void 0:d.textContent)==null?void 0:h.trim(),l=(f=o.querySelector)==null?void 0:f.call(o,"[data-link-link]"),c=(g=l==null?void 0:l.getAttribute)==null?void 0:g.call(l,"href");a&&c&&t.set(ru(a),{href:c,name:a})})}),t}function ru(n){return String(n||"").toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g," ").trim().replace(/\s+/g," ")}function eg(n,e={},t=null){if(!n)return;const i=lg(),r=cg(i),s=Yo(i),o=ig(e,t),a=su(i);Er(a),ou(i),rg(i,o),sg(Xo(i)),i.hidden=!1,i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="center",i.style.pointerEvents="auto",i.setAttribute("aria-hidden","false"),tg(i),r.src=n,r.muted=!1,r.controls=!0,r.loop=!1,r.currentTime=0,r.onloadedmetadata=()=>{dg(r)},r.play().catch(()=>{}),uu(i,1,{duration:im}),ng(i),hg(s)}function Wo(n){var i;const e=n.querySelector("video[data-shots-modal-video]"),t=n.querySelector('[data-vid="player"]');(i=window.gsap)==null||i.killTweensOf(t),uu(n,0).then(()=>{e&&(e.pause(),e.removeAttribute("src"),e.load()),n.hidden=!0,n.style.display="none",n.style.alignItems="",n.style.justifyContent="",n.style.pointerEvents="none",n.setAttribute("aria-hidden","true"),ou(n),og(Xo(n))})}function tg(n){const e=window.gsap,t=Xo(n);if(!e||t.length===0)return;const i=t.map(r=>ag(r,e));rs.set(n,i.filter(Boolean))}function ng(n){const e=window.gsap,i=(rs.get(n)||[]).map(r=>r.line).filter(Boolean);return!e||i.length===0?Promise.resolve():e.to(i,{yPercent:0,opacity:1,duration:sm,ease:"power3.out",delay:rm,stagger:.025})}function su(n){return n.querySelector(".modal_footer")||n}function Xo(n){return[...su(n).querySelectorAll(am)]}function ig(n,e=null){var l,c,u;const t=((l=e==null?void 0:e.dataset)==null?void 0:l.modalTitle)||"",i=((c=e==null?void 0:e.dataset)==null?void 0:c.modalClient)||"",r=((u=e==null?void 0:e.dataset)==null?void 0:u.modalDirector)||"",s=qo(e,'[data-vid="title"]'),o=qo(e,'[data-vid="client"]'),a=qo(e,'[data-vid="director"]');return{title:t||s||n.title||"",client:i||o||vu(_u(n)),director:r||a||gu(n)}}function qo(n,e){var t,i;return((i=(t=n==null?void 0:n.querySelector(e))==null?void 0:t.textContent)==null?void 0:i.trim())||""}function rg(n,e){Ii(n.querySelector('[data-vid="title"]'),e.title),Ii(n.querySelector('[data-vid="client"]'),e.client),iu(n.querySelector('[data-vid="director"]'),e.director,document)}function sg(n){var e;(e=window.gsap)==null||e.set(n,{opacity:0})}function og(n){var e;(e=window.gsap)==null||e.set(n,{clearProps:"opacity"})}function ou(n){const e=window.gsap;(rs.get(n)||[]).forEach(i=>{var r,s;if(e==null||e.killTweensOf(i.line),(r=i.mask)!=null&&r.parentNode&&i.element){for(;(s=i.line)!=null&&s.firstChild;)i.element.appendChild(i.line.firstChild);i.mask.remove()}e==null||e.set(i.element,{clearProps:"opacity"})}),rs.delete(n)}function ag(n,e){var s;if(!n||(s=n.parentElement)!=null&&s.classList.contains("text-reveal-mask"))return null;const t=n.style.textAlign||window.getComputedStyle(n).textAlign,i=document.createElement("span"),r=document.createElement("span");for(i.className="text-reveal-mask",i.style.display="block",i.style.overflow="hidden",i.style.textAlign=t||"inherit",r.className="text-reveal-line",r.style.display="block",r.style.textAlign=t||"inherit";n.firstChild;)r.appendChild(n.firstChild);return n.appendChild(i),i.appendChild(r),e.set(n,{opacity:1}),e.set(r,{yPercent:110,opacity:1}),{element:n,mask:i,line:r}}function lg(){const n=document.querySelector(".modal_vid")||document.querySelector("[data-shots-modal]");if(n)return au(n);const e=document.createElement("div"),t=document.createElement("button"),i=document.createElement("video");e.dataset.shotsModal="",e.hidden=!0,e.style.cssText="position:fixed;inset:0;z-index:9999;display:none;background:rgba(0,0,0,.92);align-items:center;justify-content:center;padding:4vw;",t.type="button",t.dataset.vid="close",t.dataset.shotsModalClose="",t.textContent="Close",t.style.cssText="position:absolute;top:20px;right:20px;z-index:1;color:#fff;background:transparent;border:1px solid currentColor;padding:8px 12px;cursor:pointer;",i.dataset.shotsModalVideo="",i.playsInline=!0;const r=lu(i);return r.className="modal_vid_holder",e.append(t,r),document.body.append(e),au(e)}function au(n){return n.dataset.modalDisplay||(n.dataset.modalDisplay=window.getComputedStyle(n).display==="none"?"flex":window.getComputedStyle(n).display),n.hidden=!0,n.style.display="none",n.style.opacity="0",n.style.pointerEvents="none",n.setAttribute("aria-hidden","true"),n.dataset.shotsModalReady==="true"||(n.dataset.shotsModalReady="true",n.querySelectorAll('[data-vid="close"], [data-shots-modal-close]').forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),Wo(n)})}),n.addEventListener("click",e=>{var t,i;(i=(t=e.target).closest)!=null&&i.call(t,'[data-vid="player"], .modal_footer, [data-vid="close"]')||Wo(n)}),n.querySelector("video[data-shots-modal-video]")||Yo(n)),n}function cg(n){return n.querySelector("video[data-shots-modal-video]")||ug(n)}function ug(n){const e=Yo(n),t=document.createElement("video");return t.dataset.shotsModalVideo="",t.playsInline=!0,t.style.width="100%",t.style.height="100%",t.style.objectFit="contain",e.replaceChildren(t),t}function Yo(n){const e=n.querySelector('[data-vid="player"]');if(e)return e;const i=n.querySelector(".modal_vid_holder")||lu();if(i.dataset.vid="player",cu(i),!i.isConnected){const r=n.querySelector(".modal_footer");n.insertBefore(i,r||null)}return i}function lu(n){const e=document.createElement("div");return e.dataset.vid="player",cu(e),n&&(n.style.width="100%",n.style.height="100%",n.style.objectFit="contain",e.append(n)),e}function cu(n){n.style.width="min(90vw, 140vh)",n.style.maxWidth="100%",n.style.margin="auto",n.style.display="flex",n.style.alignItems="center",n.style.justifyContent="center"}function dg(n){const e=n.closest('[data-vid="player"]');!e||!n.videoWidth||!n.videoHeight||(e.style.aspectRatio=`${n.videoWidth} / ${n.videoHeight}`)}function hg(n){const e=window.gsap;!n||!e||(e.killTweensOf(n),e.set(n,{opacity:0,scale:.9,transformOrigin:"50% 50%"}),e.to(n,{opacity:1,scale:1,duration:tm,delay:om,ease:nm,overwrite:!0}))}function uu(n,e,t={}){const i=window.gsap;return i?i.to(n,{opacity:e,duration:t.duration??.2,ease:"power1.out"}):(n.style.opacity=String(e),Promise.resolve())}function du(n){const e=document.createElement("video");return e.muted=!0,e.autoplay=!0,e.playsInline=!0,e.preload="auto",e.dataset.shotsFit=n.dataset.shotsFit||"cover",mu(e),e}function fg(n){n.forEach(hu)}function pg(n){const e=window.gsap;if(!Kc()){e==null||e.set(n,{clearProps:"opacity"});return}e==null||e.set(n,{opacity:0})}function mg(n,e){const t=window.gsap;if(!Kc()){t==null||t.set(n,{clearProps:"opacity"});return}n.forEach(i=>{t==null||t.to(i,{opacity:i===e?1:0,duration:.25,ease:"power1.out",overwrite:!0})})}function hu(n){const e=n==null?void 0:n.querySelector(".h_director_mask");e&&(e.style.width="0%")}function fu(n,e,t){const i=e==null?void 0:e.querySelector(".h_director_mask");if(!i)return;function r(){const s=Number.isFinite(n.duration)?n.duration:0,o=s>0?n.currentTime/s:0;i.style.width=`${Math.min(o,1)*100}%`,!n.paused&&!n.ended&&(t.id=requestAnimationFrame(r))}cancelAnimationFrame(t.id),t.id=requestAnimationFrame(r)}function gg(n){if(n.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA){n.play().catch(()=>{});return}n.addEventListener("loadeddata",()=>{n.play().catch(()=>{})},{once:!0})}function pu(n,e,t){const i=()=>{t()&&(e.style.display="none",n.style.display="",n.play().catch(()=>{}))};if(n.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA){i();return}n.addEventListener("loadeddata",i,{once:!0})}function _g(n,e,t,i){if(!i)return null;let r=!1;e.muted=!0,e.loop=!0,e.playsInline=!0,e.preload="metadata";const s=()=>{r=!0,e.src||(e.src=i,e.load()),pu(e,t,()=>r)},o=()=>{r=!1,e.pause()};if(!("IntersectionObserver"in window))return s(),{stop(){o()}};const a=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting?s():o()})},{threshold:.2});return a.observe(n),{stop(){a.disconnect(),o()}}}function mu(n){const e=n.dataset.shotsFit;e&&(n.style.width="100%",n.style.height="100%",n.style.objectFit=e)}function Qt(n){var i,r;return((r=(i=Object.values(n.streams||{}).filter(s=>{var o,a;return((o=s.file)==null?void 0:o.remote_address)&&((a=s.stream_type)==null?void 0:a.output)==="mp4"}).sort((s,o)=>{var a,l;return(((a=o.stream_type)==null?void 0:a.bitrate)||0)-(((l=s.stream_type)==null?void 0:l.bitrate)||0)})[0])==null?void 0:i.file)==null?void 0:r.remote_address)||null}function Di(n){var t;const e=vg(n);return((t=e==null?void 0:e.file)==null?void 0:t.remote_address)||null}function vg(n){return n.snippets?Array.isArray(n.snippets)?n.snippets.find(e=>{var t;return(t=e.file)==null?void 0:t.remote_address})||null:n.snippets.large||n.snippets.small||null:null}function gu(n){var e,t;return((e=n.artists_names)==null?void 0:e.join(", "))||((t=n.director)==null?void 0:t.join(", "))||"Director"}function _u(n){return n.client?typeof n.client=="string"?n.client:n.client.name||"":""}function vu(n){return n?`(${n})`:""}function xu(n){var r,s,o,a,l;const e=Number(n.duration),t=Number((s=(r=n.original_file)==null?void 0:r.mediaInfo)==null?void 0:s.Duration),i=Number((l=(a=(o=Object.values(n.streams||{})[0])==null?void 0:o.file)==null?void 0:a.mediaInfo)==null?void 0:l.Duration);return[e,t,i].find(c=>Number.isFinite(c)&&c>0)}function yu(n){if(!Number.isFinite(n)||n<=0)return"00:00:00";const e=Math.round(n),t=Math.floor(e/3600),i=Math.floor(e%3600/60),r=e%60;return[t,i,r].map(s=>String(s).padStart(2,"0")).join(":")}function Su(n){var e,t;return((e=n.thumbnail)==null?void 0:e.image_player_url)||((t=n.thumbnail)==null?void 0:t.remote_address)||null}async function Cn(n,e){const t=xg(n,e),i=t.toString();if(Oo.has(i))return Oo.get(i);const r=fetch(t).then(s=>{if(!s.ok)throw new Error(`HTTP ${s.status}`);return s.json()}).then(s=>s.response);return Oo.set(i,r),r}function xg(n,e){if(e.proxyUrl){const i=new URL(e.proxyUrl);return i.searchParams.set("path",n),i}if(!e.accessToken)throw new Error("Missing Shots access token.");const t=new URL(`${e.baseUrl}/${n}`);return t.searchParams.set("access_token",e.accessToken),t}function yg(){var n,e,t;return{baseUrl:((n=window.ShotsConfig)==null?void 0:n.baseUrl)||Kp,accessToken:((e=window.ShotsConfig)==null?void 0:e.accessToken)||jp,proxyUrl:((t=window.ShotsConfig)==null?void 0:t.proxyUrl)||""}}const Sg=".divider",Ko=".p_image",Mu="mm-page-media-preload-style",Mg=.7,Eg="power3.inOut",bg=.8,Tg="power3.inOut",Eu=.06,wg=.7,Ag="power3.out",bu=0,Rg=10,jo=".next_post",Tu="a[href]",wu=1.05,Au=1,Ru=.45,Cu="power3.out",Tr=new WeakMap,os=new WeakMap;function Cg(){if(document.getElementById(Mu))return;const n=document.createElement("style");n.id=Mu,n.textContent=`
    [data-barba="container"]:not([data-page-media-ready="true"]) .divider,
    [data-barba="container"]:not([data-page-media-ready="true"]) .p_image {
      opacity: 0 !important;
    }
  `,document.head.appendChild(n)}function Pg(n=document,e={}){if(!window.gsap||!n)return;Pu(n);const i=[...Nu(n).map((r,s)=>Ig(r,s)),...Uu(n).map((r,s)=>Dg(r,s))].filter(Boolean);i.forEach(r=>Tr.set(r.element,r)),Ng(i.filter(r=>r.type==="image")),n.dataset.pageMediaReady="true",e.autoAnimate!==!1&&(Lu(n),Iu(n)),Ug(n)}function Pu(n=document){const e=window.gsap;$o(n).forEach(t=>{var r,s,o,a;const i=Tr.get(t);(r=i==null?void 0:i.trigger)==null||r.kill(),(s=i==null?void 0:i.parallaxTrigger)==null||s.kill(!1),(o=i==null?void 0:i.revealTween)==null||o.kill(),(a=i==null?void 0:i.parallaxTween)==null||a.kill(),e&&e.set(t,{clearProps:"clipPath,webkitClipPath,scaleX,transformOrigin,opacity"}),delete t.dataset.pageMediaReady,Tr.delete(t)}),n==null||n.querySelectorAll("[data-page-media-holder]").forEach(t=>{delete t.dataset.pageMediaHolder,e?e.set(t,{clearProps:"opacity"}):t.style.opacity=""}),n!=null&&n.dataset&&delete n.dataset.pageMediaReady,Og(n)}function Lg(n=document){$o(n).forEach(e=>{var i,r;const t=Tr.get(e);t&&((i=t==null?void 0:t.parallaxTrigger)==null||i.kill(!1),(r=t==null?void 0:t.parallaxTween)==null||r.kill(),t.parallaxTrigger=null,t.parallaxTween=null)})}function Lu(n=document,e={}){const t=Du(n).filter(i=>Ou(i.element));return as(t,e)}function Iu(n=document){const e=Du(n).filter(t=>!t.revealed);if(!window.ScrollTrigger){as(e);return}e.forEach(t=>{var i;(i=t.trigger)==null||i.kill(),t.trigger=window.ScrollTrigger.create({trigger:t.element,start:"top 95%",once:!0,onEnter:()=>as([t]),onRefresh:()=>{Ou(t.element)&&as([t])}})})}function Ig(n,e){return window.gsap.set(n,{scaleX:0,transformOrigin:"left center"}),{type:"divider",element:n,index:e,revealed:!1}}function Dg(n,e){const t=window.gsap,i=n.closest("div");return i==null||i.style.setProperty("overflow","hidden"),i&&(i.dataset.pageMediaHolder="",t.set(i,{opacity:0})),t.set(n,{clipPath:ls(0),webkitClipPath:ls(0),opacity:1,yPercent:bu}),{type:"image",element:n,holder:i,index:e,revealed:!1}}function Ng(n){const e=window.gsap;!e||!window.ScrollTrigger||n.forEach(t=>{var i,r;(i=t.parallaxTween)==null||i.kill(),(r=t.parallaxTrigger)==null||r.kill(),t.parallaxTween=e.fromTo(t.element,{yPercent:bu},{yPercent:Rg,ease:"none",scrollTrigger:{trigger:t.element,start:"top bottom",end:"bottom top",scrub:.45}}),t.parallaxTrigger=t.parallaxTween.scrollTrigger})}function as(n,e={}){const t=window.gsap;if(!t||n.length===0)return Promise.resolve();const i=n.filter(o=>o.type==="divider"&&!o.revealed),r=n.filter(o=>o.type==="image"&&!o.revealed),s=r.map(o=>o.holder).filter(Boolean);return i.forEach(o=>{o.revealed=!0,o.element.dataset.pageMediaReady="true"}),r.forEach(o=>{o.revealed=!0,o.element.dataset.pageMediaReady="true"}),Promise.all([i.length?t.to(i.map(o=>o.element),{scaleX:1,duration:e.duration??Mg,ease:e.ease||Eg,stagger:e.stagger??.035,delay:e.delay||0,overwrite:!0}):Promise.resolve(),r.length?[t.to(s,{opacity:1,duration:wg,ease:Ag,stagger:e.stagger??Eu,delay:e.delay||0,overwrite:!0}),t.to(r.map(o=>o.element),{clipPath:ls(1),webkitClipPath:ls(1),duration:e.duration??bg,ease:e.ease||Tg,stagger:e.stagger??Eu,delay:e.delay||0,overwrite:"auto"})]:Promise.resolve()].flat())}function Du(n){return $o(n).map(e=>Tr.get(e)).filter(Boolean)}function $o(n){return[...Nu(n),...Uu(n)]}function Nu(n){return[...n.querySelectorAll(Sg)]}function Uu(n){return[...n.querySelectorAll(Ko)]}function Ou(n){const e=n.getBoundingClientRect();return e.top<window.innerHeight*.95&&e.bottom>0}function ls(n){return`inset(${100-Math.max(0,Math.min(n,1))*100}% 0% 0% 0%)`}function Ug(n=document){const e=window.gsap;e&&n.querySelectorAll(jo).forEach(t=>{const i=t.querySelector(Tu);if(!i||os.has(i))return;const r=t.querySelector(Ko);if(!r)return;const s=new AbortController,{signal:o}=s;let a=!1;e.set(r,{scale:wu}),i.addEventListener("mouseenter",()=>{e.to(r,{scale:Au,duration:Ru,ease:Cu,overwrite:"auto"})},{signal:o}),i.addEventListener("mouseleave",()=>{a||e.to(r,{scale:wu,duration:Ru,ease:Cu,overwrite:"auto"})},{signal:o}),i.addEventListener("click",()=>{a=!0,e.to(r,{scale:Au,duration:.18,ease:"power2.out",overwrite:"auto"})},{signal:o}),os.set(i,{stop(){s.abort(),e.killTweensOf(r),e.set(r,{clearProps:"scale"})}})})}function Og(n=document){const e=window.gsap;n.querySelectorAll(`${jo} ${Tu}`).forEach(t=>{const i=os.get(t);i==null||i.stop(),os.delete(t)}),e&&n.querySelectorAll(`${jo} ${Ko}`).forEach(t=>e.set(t,{clearProps:"scale"}))}const Fg=50,Bg=.01,kg=1,Vg="power1.out",Hg=0,zg=100,Gg=.01,Wg=.8,Xg="power4.in",qg=0;let Yg=0,Fu=!1;async function cs(n){if(!(n instanceof HTMLImageElement)||!n.src.endsWith(".svg"))return null;const e=Zo(n);if(e)return e;try{await $g(n);const i=await(await fetch(n.src)).text(),r=new DOMParser().parseFromString(i,"image/svg+xml").documentElement;return!(r instanceof SVGSVGElement)||!zu(n,r)?null:(jg(),r)}catch(t){return console.warn("[logo] Could not create SVG logo overlay.",t),null}}function us(n,e=-1){const t=window.gsap,i=ku(Hu(n),e);return!t||!i.length?[]:(t.set(i,{x:e*Fg,rotation:e*Hg,transformOrigin:"50% 50%"}),i)}function ds(n,e={}){const t=window.gsap;return!t||!(n!=null&&n.length)?null:t.to(n,{x:0,rotation:0,duration:e.duration??kg,ease:e.ease||Vg,stagger:e.stagger??Bg,overwrite:!0})}function Bu(n,e=-1,t={}){const i=window.gsap,r=ku(Hu(n),e);return!i||!r.length?null:i.to(r,{x:e*(t.offset??zg),rotation:e*(t.rotation??qg),duration:t.duration??Wg,ease:t.ease||Xg,stagger:t.stagger??Gg,overwrite:!0})}function ku(n,e){const t=[...n||[]],i=e>0;return t.sort((r,s)=>Vu(r)-Vu(s)),i||t.reverse(),t}function Vu(n){const e=Gu(n);return e.x+e.width/2}function Ni(n){return Zo(n)||n}function hs(n=document){n.querySelectorAll("[data-logo-overlay-source]").forEach(e=>{const t=Zo(e);t&&zu(e,t)})}function Kg(n,e){e.setAttribute("aria-hidden",n.alt?"false":"true")}function Hu(n){if(!(n instanceof SVGSVGElement))return[];const e=[...n.querySelectorAll("[data-logo-letter-mask] > g[id]")];return e.length?e:(Zg(n),[...n.children].filter(t=>t.matches("g[id]")).filter(t=>!t.matches("defs")).map((t,i)=>Jg(n,t,i)).filter(Boolean))}function zu(n,e){const t=n.parentElement;if(!t)return!1;window.getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=n.offsetWidth,r=n.offsetHeight;return!i||!r?!1:(Kg(n,e),n.dataset.logoOverlaySource="",n.after(e),e.dataset.logoOverlay="",e.style.position="absolute",e.style.left=`${n.offsetLeft}px`,e.style.top=`${n.offsetTop}px`,e.style.width=`${i}px`,e.style.height=`${r}px`,e.style.display="block",e.style.pointerEvents="none",n.style.opacity="0",!0)}function jg(){Fu||(Fu=!0,window.addEventListener("resize",()=>hs(),{passive:!0}))}function Zo(n){var t;const e=n==null?void 0:n.nextElementSibling;return(t=e==null?void 0:e.matches)!=null&&t.call(e,"[data-logo-overlay]")?e:null}function $g(n){return(n.complete?Promise.resolve():new Promise(t=>{n.addEventListener("load",t,{once:!0}),n.addEventListener("error",t,{once:!0})})).then(()=>new Promise(t=>requestAnimationFrame(()=>requestAnimationFrame(t))))}function Zg(n){n.querySelector(":scope > defs")||n.insertBefore(document.createElementNS("http://www.w3.org/2000/svg","defs"),n.firstChild)}function Jg(n,e,t){const i=n.querySelector(":scope > defs"),r="http://www.w3.org/2000/svg",s=Gu(e);if(!i||!s.width||!s.height)return null;const o=document.createElementNS(r,"clipPath"),a=document.createElementNS(r,"rect"),l=document.createElementNS(r,"g"),c=`mm-logo-letter-clip-${Yg++}-${t}`;return o.id=c,a.setAttribute("x",String(s.x)),a.setAttribute("y",String(s.y)),a.setAttribute("width",String(s.width)),a.setAttribute("height",String(s.height)),o.append(a),i.append(o),l.dataset.logoLetterMask=e.id||String(t),l.setAttribute("clip-path",`url(#${c})`),e.parentNode.insertBefore(l,e),l.append(e),e}function Gu(n){try{return n.getBBox()}catch{return{x:0,y:0,width:0,height:0}}}const Qg=10,e_=.045,t_=.94,n_=4,Wu="(max-width: 991px)",i_=.4,r_=.22,wr=new WeakMap;function s_(n=document){n==null||n.querySelectorAll(".client_spinner").forEach(e=>{if(wr.has(e))return;const t=a_(e);t&&wr.set(e,t)})}function o_(n=document){n==null||n.querySelectorAll(".client_spinner").forEach(e=>{var t;(t=wr.get(e))==null||t.destroy(),wr.delete(e)})}function Xu(n=document){n==null||n.querySelectorAll(".client_spinner").forEach(e=>{var t;(t=wr.get(e))==null||t.freeze()})}function a_(n){const e=n.querySelector(".spinner_group");if(!e)return null;const t=[e];let i=0,r=0,s=0,o=window.scrollY||window.pageYOffset||0,a=performance.now(),l=null;const c={overflow:n.style.overflow,position:n.style.position,minHeight:n.style.minHeight},u=l_(e);n.style.overflow="hidden",getComputedStyle(n).position==="static"&&(n.style.position="relative"),qu(e),d(),h(),window.addEventListener("resize",h),l=window.requestAnimationFrame(f);function d(){const g=Math.max(n_,Math.ceil((n.clientHeight||window.innerHeight||1)/Math.max(e.offsetHeight,1))+2);for(;t.length<g;){const _=e.cloneNode(!0);_.dataset.spinnerClone="",_.setAttribute("aria-hidden","true"),qu(_),e.parentNode.insertBefore(_,u_(n)),t.push(_)}}function h(){r=Math.max(e.offsetHeight,1),n.style.minHeight=`${r}px`,d()}function f(g){const _=Math.min((g-a)/1e3,.05),m=window.scrollY||window.pageYOffset||0,p=m-o,y=d_(),M=h_();s=s*t_+p*e_*M,i=f_(i+Qg*y*_+s,r),t.forEach((E,A)=>{E.style.transform=`translate3d(0, ${A*r-i}px, 0)`}),o=m,a=g,l=window.requestAnimationFrame(f)}return{freeze(){window.cancelAnimationFrame(l),l=null},destroy(){l!==null&&window.cancelAnimationFrame(l),window.removeEventListener("resize",h),t.slice(1).forEach(g=>g.remove()),c_(e,u),n.style.overflow=c.overflow,n.style.position=c.position,n.style.minHeight=c.minHeight}}}function qu(n){n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.right="0",n.style.width="100%",n.style.willChange="transform"}function l_(n){return{position:n.style.position,top:n.style.top,left:n.style.left,right:n.style.right,width:n.style.width,transform:n.style.transform,willChange:n.style.willChange}}function c_(n,e){n.style.position=e.position,n.style.top=e.top,n.style.left=e.left,n.style.right=e.right,n.style.width=e.width,n.style.transform=e.transform,n.style.willChange=e.willChange}function u_(n){return n.querySelector(".spinner_grad")}function d_(){var e,t;return((t=(e=window.matchMedia)==null?void 0:e.call(window,Wu))==null?void 0:t.matches)?i_:1}function h_(){var e,t;return((t=(e=window.matchMedia)==null?void 0:e.call(window,Wu))==null?void 0:t.matches)?r_:1}function f_(n,e){return(n%e+e)%e}const p_=300,m_=300,g_=90,__=180,v_=92;async function Yu(n,e={}){const t=Promise.resolve().then(()=>n),i=Ku(e);try{return await t}finally{await i.finish()}}function Ku(n={}){let e=null,t=null,i=0,r=0,s=!1,o=!1;const a=window.setTimeout(()=>{var c;o||(r=performance.now(),e=y_(n.container,{detachText:n.detachText,noOverlay:n.noOverlay,requireContainer:n.requireContainer}),s=!!e,s&&((c=n.onShow)==null||c.call(n),l()))},p_);return{async finish(){o||(o=!0,window.clearTimeout(a),s&&e&&(window.cancelAnimationFrame(t),await x_(r),await S_(e,i)))}};function l(){const c=performance.now()-r,u=Math.min(v_,Math.floor(c/24));i+=(u-i)*.16,ju(e,Math.floor(i)),t=window.requestAnimationFrame(l)}}function x_(n){const e=performance.now()-n,t=m_-e;return t<=0?Promise.resolve():new Promise(i=>{window.setTimeout(i,t)})}function y_(n,e={}){if(!n&&e.requireContainer)return null;const t=n||document.createElement("div"),i=document.createElement("div"),r=!n,s=n&&e.detachText?document.body:t;return r&&(t.dataset.loadIndicator="",t.style.position="fixed",t.style.inset="0",t.style.zIndex="999999",t.style.pointerEvents="none",t.style.background=e.noOverlay?"transparent":"rgba(0, 0, 0, 0.2)",t.style.opacity="1",document.body.append(t)),i.dataset.loadIndicatorText="",i.textContent="0",i.style.position=e.detachText?"fixed":"absolute",i.style.left="50%",i.style.top="50%",i.style.transform="translate(-50%, -50%)",i.style.color="#fff",i.style.opacity="0.7",i.style.fontSize="0.8rem",i.style.lineHeight="1",i.style.fontFamily="inherit",i.style.fontVariantNumeric="tabular-nums",i.style.letterSpacing="0",i.style.mixBlendMode="difference",i.style.zIndex=e.detachText?"999999":"",i.style.pointerEvents="none",s.append(i),{root:t,text:i,ownsRoot:r}}async function S_(n,e){const t=Math.max(0,Math.floor(e)),i=performance.now();if(await new Promise(r=>{const s=()=>{const o=performance.now()-i,a=Math.min(1,o/g_),l=Math.round(t+(100-t)*a);if(ju(n,l),a<1){window.requestAnimationFrame(s);return}r()};s()}),n.ownsRoot){await M_(n.root),n.root.remove();return}n.text.remove()}function ju(n,e){n.text.textContent=String(Math.min(100,Math.max(0,e)))}function M_(n){return new Promise(e=>{const t=performance.now(),i=()=>{const r=performance.now()-t,s=Math.min(1,r/__);if(n.style.opacity=String(1-s),s<1){window.requestAnimationFrame(i);return}e()};i()})}const fs=.8,$u=fs+.2,Zu="power4.out",Ju=1,Qu="power4.in",Ar=.18,Jo=Ar+.35,ed="5vw",td="0vw",E_="(min-width: 992px)",fi="[MM lifecycle]";function b_({onEnter:n,onLeave:e,onStart:t}={}){let i=()=>{},r=Promise.resolve(),s=null;return{name:"transition",sync:!0,async once({next:o}){var l,c;console.log(fi,"transition once -> run setup",pi(o));const a=ps(o,{deferIntros:!0});a.namespace==="home"?await(n==null?void 0:n(a)):await Yu(n==null?void 0:n(a),{noOverlay:!0}),(c=(l=o.container).__mmStartDeferredIntro)==null||c.call(l),delete o.container.__mmStartDeferredIntro},async before({current:o,next:a}){console.log(fi,"transition before",rd(o,a)),o.container.dataset.pageLeaving="true",delete a.container.dataset.pageLeaving,Lg(o.container),hm(o.container),Xu(o.container),P_(o.container,a.container),window.scrollTo(0,0),Qo(o.container,"none"),Qo(a.container,"none"),s=U_(o.container),I_(a.container),r=new Promise(l=>{i=l})},async leave({current:o}){return console.log(fi,"transition leave",pi(o)),await r,t==null||t(ps(o)),T_(o.container)},async enter({current:o,next:a}){console.log(fi,"transition enter",pi(a)),console.log(fi,"transition enter -> run setup",pi(a));try{await Yu(n==null?void 0:n(ps(a,{transition:!0})),{container:ea(o.container)||s,requireContainer:!0,detachText:!0,onShow:()=>{O_(s)}}),L_(a.container)}finally{i()}return R_(a.container)},async after({current:o,next:a}){var l;console.log(fi,"transition after",rd(o,a)),F_(o.container),s=null,id(o.container),window.scrollTo(0,0),id(a.container),console.log(fi,"transition after -> run teardown",pi(o)),e==null||e(ps(o)),Fc(a.container),Iu(a.container),(l=window.ScrollTrigger)==null||l.refresh()}}}function T_(n){const e=window.gsap;return e?(A_(n,e),Promise.all([w_(n,e),Co(n)])):Co(n)}function w_(n,e){const t=ea(n);return t?e.to(t,{opacity:.2,duration:fs,ease:"power2.inOut"}):Promise.resolve()}function A_(n,e){if(od(n)!=="home"||!nd())return;const i=n.querySelector(".method"),r=n.querySelector(".madness");hs(n);const s=Ni(i),o=Ni(r);s&&(e.to(s,{x:`-${td}`,duration:Ju,ease:Qu,overwrite:!0}),Bu(s,-1)),o&&(e.to(o,{x:td,duration:Ju,ease:Qu,overwrite:!0}),Bu(o,1))}async function R_(n){const e=window.gsap;if(!e)return Oc(n);const t={scale:0,rotation:5},i=await C_(n,e);return Promise.all([e.to(n,{scale:1,duration:fs,delay:Ar,ease:"power3.inOut"}),e.to(t,{scale:1.45,rotation:0,duration:fs,delay:Ar,ease:"power3.inOut",onStart:()=>{t.scale=.14,Ui(n,t.scale,t.rotation)},onUpdate:()=>{Ui(n,t.scale,t.rotation)}}),...i,Oc(n,{delay:Jo}),Xc(n,{delay:Jo}),Lu(n,{delay:Jo})])}async function C_(n,e){var g;if(String(((g=n==null?void 0:n.dataset)==null?void 0:g.barbaNamespace)||"").trim().toLowerCase()!=="home"||!nd())return[];let i=n.querySelector(".method"),r=n.querySelector(".madness");const s=[],[o,a]=await Promise.all([cs(i),cs(r)]);hs(n);const l=us(o,1),c=us(a,-1),u=Ni(i),d=Ni(r);u&&(e.set(u,{x:ed}),s.push(e.to(u,{x:0,duration:$u,delay:Ar,ease:Zu,onComplete:()=>e.set(u,{clearProps:"x"})}))),d&&(e.set(d,{x:`-${ed}`}),s.push(e.to(d,{x:0,duration:$u,delay:Ar,ease:Zu,onComplete:()=>e.set(d,{clearProps:"x"})})));const h=ds(l,{}),f=ds(c,{});return h&&s.push(h),f&&s.push(f),s}function nd(){var n,e;return((e=(n=window.matchMedia)==null?void 0:n.call(window,E_))==null?void 0:e.matches)??!0}function P_(n,e){const t=window.scrollY||window.pageYOffset||0;n.dataset.transitionScrollY=String(t),n.style.position="fixed",n.style.top=`${-t}px`,n.style.left="0",n.style.right="0",n.style.width="100%",e.style.position="fixed",e.style.inset="0",e.style.width="100%",n.style.zIndex="",e.style.zIndex=""}function L_(n){const e=window.gsap;e?e.set(n,{opacity:1,scale:.5,transformOrigin:"50% 50%"}):(n.style.opacity="1",n.style.scale="0.5",n.style.transformOrigin="50% 50%"),Ui(n,0,5)}function I_(n){n.style.opacity="0"}function id(n){const e=window.gsap;if(D_(n),e){e.set(n,{clearProps:"position,inset,top,left,right,width,zIndex,opacity,transform,scale,transformOrigin,clipPath,webkitClipPath"}),delete n.dataset.transitionScrollY;return}n.style.position="",n.style.inset="",n.style.top="",n.style.left="",n.style.right="",n.style.width="",n.style.zIndex="",n.style.opacity="",n.style.transform="",n.style.scale="",n.style.transformOrigin="",n.style.clipPath="",n.style.webkitClipPath="",delete n.dataset.transitionScrollY}function Qo(n,e){n==null||n.querySelectorAll("[data-showreel-stream]").forEach(t=>{t.style.pointerEvents=e})}function D_(n){window.setTimeout(()=>{Qo(n,"")},900)}function Ui(n,e,t){const i=N_(e,t);n.style.clipPath=i,n.style.webkitClipPath=i}function N_(n,e){const t=Math.max(window.innerWidth/Math.max(window.innerHeight,1),.01),i=t*n,r=n,s=e*Math.PI/180,o=Math.cos(s),a=Math.sin(s);return`polygon(${[[-i/2,-r/2],[i/2,-r/2],[i/2,r/2],[-i/2,r/2]].map(([c,u])=>{const d=c*o-u*a+t/2,h=c*a+u*o+.5;return`${(d/t*100).toFixed(3)}% ${(h*100).toFixed(3)}%`}).join(", ")})`}function U_(n){const e=document.createElement("div");return e.dataset.transitionOverlay="",e.style.position="absolute",e.style.inset="0",e.style.background="#000000",e.style.opacity="0",e.style.pointerEvents="none",e.style.zIndex="999",n.appendChild(e),e}function O_(n){var e;if(n){if((e=window.gsap)==null||e.killTweensOf(n),!window.gsap){n.style.opacity="0.15";return}window.gsap.to(n,{opacity:.15,duration:.2,ease:"power2.out",overwrite:!0})}}function F_(n){var e;(e=ea(n))==null||e.remove()}function ea(n){return n.querySelector("[data-transition-overlay]")}function rd(n,e){return{current:pi(n),next:pi(e)}}function pi(n){var e,t;return{namespace:sd(n),connected:!!((e=n==null?void 0:n.container)!=null&&e.isConnected),className:((t=n==null?void 0:n.container)==null?void 0:t.className)||""}}function ps(n,e={}){return n!=null&&n.container?{container:n.container,namespace:sd(n),rawNamespace:n.namespace,transition:!!e.transition,settled:!!e.settled,deferIntros:!!e.deferIntros}:{container:null,namespace:"page",rawNamespace:"",transition:!!e.transition,settled:!!e.settled,deferIntros:!!e.deferIntros}}function sd(n){return String((n==null?void 0:n.namespace)||od(n==null?void 0:n.container)||"page").trim().toLowerCase()}function od(n){var e;return String(((e=n==null?void 0:n.dataset)==null?void 0:e.barbaNamespace)||"").trim().toLowerCase()}const ta="[MM lifecycle]";function B_({onEnter:n,onLeave:e,onTransitionStart:t}={}){return document.querySelector("[data-barba='wrapper']")?(console.log(ta,"barba init"),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),Ao.init({debug:!1,preventRunning:!0,transitions:[b_({onEnter:n,onLeave:e,onStart:t})]}),k_(),Ao):(console.log(ta,"barba skipped -> no wrapper"),null)}function k_(){window.__mmBarbaLinkRouterInit||(window.__mmBarbaLinkRouterInit=!0,document.addEventListener("click",n=>{var i,r;const e=(r=(i=n.target).closest)==null?void 0:r.call(i,"a[href]");if(!e||V_(n,e))return;const t=new URL(e.href,window.location.href);t.href!==window.location.href&&(console.log(ta,"link router -> barba.go",{href:e.getAttribute("href"),url:t.href}),n.preventDefault(),Ao.go(t.href))},!0))}function V_(n,e){if(n.defaultPrevented||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.button!==0)return!0;const t=e.getAttribute("href")||"";return t===""||t.startsWith("#")||t.startsWith("mailto:")||t.startsWith("tel:")||e.target==="_blank"||e.hasAttribute("download")||e.closest("[data-barba-prevent]")?!0:new URL(e.href,window.location.href).origin!==window.location.origin}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const na="184",H_=0,ad=1,z_=2,ms=1,G_=2,Rr=3,hn=0,Ot=1,en=2,Pn=0,Oi=1,ld=2,cd=3,ud=4,W_=5,mi=100,X_=101,q_=102,Y_=103,K_=104,j_=200,$_=201,Z_=202,J_=203,ia=204,ra=205,Q_=206,e0=207,t0=208,n0=209,i0=210,r0=211,s0=212,o0=213,a0=214,sa=0,oa=1,aa=2,Fi=3,la=4,ca=5,ua=6,da=7,dd=0,l0=1,c0=2,fn=0,hd=1,fd=2,pd=3,md=4,gd=5,_d=6,vd=7,xd="attached",u0="detached",yd=300,gi=301,Bi=302,ha=303,fa=304,gs=306,ki=1e3,pn=1001,_s=1002,Mt=1003,Sd=1004,Cr=1005,Et=1006,vs=1007,Ln=1008,Bt=1009,Md=1010,Ed=1011,Pr=1012,pa=1013,mn=1014,Xt=1015,In=1016,ma=1017,ga=1018,Lr=1020,bd=35902,Td=35899,wd=1021,Ad=1022,qt=1023,Dn=1026,_i=1027,_a=1028,va=1029,vi=1030,xa=1031,ya=1033,xs=33776,ys=33777,Ss=33778,Ms=33779,Sa=35840,Ma=35841,Ea=35842,ba=35843,Ta=36196,wa=37492,Aa=37496,Ra=37488,Ca=37489,Es=37490,Pa=37491,La=37808,Ia=37809,Da=37810,Na=37811,Ua=37812,Oa=37813,Fa=37814,Ba=37815,ka=37816,Va=37817,Ha=37818,za=37819,Ga=37820,Wa=37821,Xa=36492,qa=36494,Ya=36495,Ka=36283,ja=36284,bs=36285,$a=36286,Rd=2200,d0=2201,h0=2202,Ir=2300,Dr=2301,Za=2302,Cd=2303,Vi=2400,Hi=2401,Ts=2402,Ja=2500,f0=2501,p0=0,Pd=1,Qa=2,m0=3200,el=0,g0=1,$n="",Rt="srgb",kt="srgb-linear",ws="linear",et="srgb",zi=7680,Ld=519,_0=512,v0=513,x0=514,tl=515,y0=516,S0=517,nl=518,M0=519,il=35044,Id="300 es",gn=2e3,Nr=2001;function E0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function b0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ur(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function T0(){const n=Ur("canvas");return n.style.display="block",n}const Dd={};function As(...n){const e="THREE."+n.shift();console.log(e,...n)}function Nd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Se(...n){n=Nd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Pe(...n){n=Nd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function rl(...n){const e=n.join(" ");e in Dd||(Dd[e]=!0,Se(...n))}function w0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const A0={[sa]:oa,[aa]:ua,[la]:da,[Fi]:ca,[oa]:sa,[ua]:aa,[da]:la,[ca]:Fi};class Zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ud=1234567;const Or=Math.PI/180,Gi=180/Math.PI;function tn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function sl(n,e){return(n%e+e)%e}function R0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function C0(n,e,t){return n!==e?(t-n)/(e-n):0}function Fr(n,e,t){return(1-t)*n+t*e}function P0(n,e,t,i){return Fr(n,e,1-Math.exp(-t*i))}function L0(n,e=1){return e-Math.abs(sl(n,e*2)-e)}function I0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function D0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function N0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function U0(n,e){return n+Math.random()*(e-n)}function O0(n){return n*(.5-Math.random())}function F0(n){n!==void 0&&(Ud=n);let e=Ud+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function B0(n){return n*Or}function k0(n){return n*Gi}function V0(n){return(n&n-1)===0&&n!==0}function H0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function z0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function G0(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*u,a*c);break;default:Se("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const xi={DEG2RAD:Or,RAD2DEG:Gi,generateUUID:tn,clamp:qe,euclideanModulo:sl,mapLinear:R0,inverseLerp:C0,lerp:Fr,damp:P0,pingpong:L0,smoothstep:I0,smootherstep:D0,randInt:N0,randFloat:U0,randFloatSpread:O0,seededRandom:F0,degToRad:B0,radToDeg:k0,isPowerOfTwo:V0,ceilPowerOfTwo:H0,floorPowerOfTwo:z0,setQuaternionFromProperEuler:G0,normalize:tt,denormalize:nn},gc=class gc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gc.prototype.isVector2=!0;let Ke=gc;class Yt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(d!==_||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*_;m<0&&(h=-h,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const y=Math.acos(m),M=Math.sin(y);p=Math.sin(p*y)/M,a=Math.sin(a*y)/M,l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+_*a}else{l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+_*a;const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-a*f,e[t+2]=c*g+u*f+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Se("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _c=class _c{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Od.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Od.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_c.prototype.isVector3=!0;let O=_c;const ol=new O,Od=new Yt,vc=class vc{constructor(e,t,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],M=r[4],E=r[7],A=r[2],T=r[5],C=r[8];return s[0]=o*_+a*y+l*A,s[3]=o*m+a*M+l*T,s[6]=o*p+a*E+l*C,s[1]=c*_+u*y+d*A,s[4]=c*m+u*M+d*T,s[7]=c*p+u*E+d*C,s[2]=h*_+f*y+g*A,s[5]=h*m+f*M+g*T,s[8]=h*p+f*E+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,g=t*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(al.makeScale(e,t)),this}rotate(e){return this.premultiply(al.makeRotation(-e)),this}translate(e,t){return this.premultiply(al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vc.prototype.isMatrix3=!0;let Ne=vc;const al=new Ne,Fd=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bd=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W0(){const n={enabled:!0,workingColorSpace:kt,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===et&&(r.r=Nn(r.r),r.g=Nn(r.g),r.b=Nn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===et&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$n?ws:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return rl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return rl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[kt]:{primaries:e,whitePoint:i,transfer:ws,toXYZ:Fd,fromXYZ:Bd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:i,transfer:et,toXYZ:Fd,fromXYZ:Bd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),n}const Ye=W0();function Nn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xi;class X0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xi===void 0&&(Xi=Ur("canvas")),Xi.width=e.width,Xi.height=e.height;const r=Xi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Xi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Nn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Nn(t[i]/255)*255):t[i]=Nn(t[i]);return{data:t,width:e.width,height:e.height}}else return Se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let q0=0;class ll{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=tn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cl(r[o].image)):s.push(cl(r[o]))}else s=cl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?X0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Se("Texture: Unable to serialize Texture."),{})}let Y0=0;const ul=new O;class wt extends Zn{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,i=pn,r=pn,s=Et,o=Ln,a=qt,l=Bt,c=wt.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=tn(),this.name="",this.source=new ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ul).x}get height(){return this.source.getSize(ul).y}get depth(){return this.source.getSize(ul).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Se(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Se(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case _s:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case _s:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null,wt.DEFAULT_MAPPING=yd,wt.DEFAULT_ANISOTROPY=1;const xc=class xc{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,E=(f+1)/2,A=(p+1)/2,T=(u+h)/4,C=(d+_)/4,x=(g+m)/4;return M>E&&M>A?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=T/i,s=C/i):E>A?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=T/r,s=x/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=x/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xc.prototype.isVector4=!0;let ot=xc;class K0 extends Zn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new wt(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ll(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends K0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kd extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class j0 extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _o=class _o{constructor(e,t,i,r,s,o,a,l,c,u,d,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,h,f,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _o().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($0,e,Z0)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Jn.crossVectors(i,Vt),Jn.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Jn.crossVectors(i,Vt)),Jn.normalize(),Rs.crossVectors(Vt,Jn),r[0]=Jn.x,r[4]=Rs.x,r[8]=Vt.x,r[1]=Jn.y,r[5]=Rs.y,r[9]=Vt.y,r[2]=Jn.z,r[6]=Rs.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],M=i[7],E=i[11],A=i[15],T=r[0],C=r[4],x=r[8],w=r[12],P=r[1],R=r[5],I=r[9],G=r[13],B=r[2],N=r[6],V=r[10],z=r[14],Z=r[3],$=r[7],te=r[11],ye=r[15];return s[0]=o*T+a*P+l*B+c*Z,s[4]=o*C+a*R+l*N+c*$,s[8]=o*x+a*I+l*V+c*te,s[12]=o*w+a*G+l*z+c*ye,s[1]=u*T+d*P+h*B+f*Z,s[5]=u*C+d*R+h*N+f*$,s[9]=u*x+d*I+h*V+f*te,s[13]=u*w+d*G+h*z+f*ye,s[2]=g*T+_*P+m*B+p*Z,s[6]=g*C+_*R+m*N+p*$,s[10]=g*x+_*I+m*V+p*te,s[14]=g*w+_*G+m*z+p*ye,s[3]=y*T+M*P+E*B+A*Z,s[7]=y*C+M*R+E*N+A*$,s[11]=y*x+M*I+E*V+A*te,s[15]=y*w+M*G+E*z+A*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],y=l*f-c*h,M=a*f-c*d,E=a*h-l*d,A=o*f-c*u,T=o*h-l*u,C=o*d-a*u;return t*(_*y-m*M+p*E)-i*(g*y-m*A+p*T)+r*(g*M-_*A+p*C)-s*(g*E-_*T+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=t*a-i*o,M=t*l-r*o,E=t*c-s*o,A=i*l-r*a,T=i*c-s*a,C=r*c-s*l,x=u*_-d*g,w=u*m-h*g,P=u*p-f*g,R=d*m-h*_,I=d*p-f*_,G=h*p-f*m,B=y*G-M*I+E*R+A*P-T*w+C*x;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/B;return e[0]=(a*G-l*I+c*R)*N,e[1]=(r*I-i*G-s*R)*N,e[2]=(_*C-m*T+p*A)*N,e[3]=(h*T-d*C-f*A)*N,e[4]=(l*P-o*G-c*w)*N,e[5]=(t*G-r*P+s*w)*N,e[6]=(m*E-g*C-p*M)*N,e[7]=(u*C-h*E+f*M)*N,e[8]=(o*I-a*P+c*x)*N,e[9]=(i*P-t*I-s*x)*N,e[10]=(g*T-_*E+p*y)*N,e[11]=(d*E-u*T-f*y)*N,e[12]=(a*w-o*R-l*x)*N,e[13]=(t*R-i*w+r*x)*N,e[14]=(_*M-g*A-m*y)*N,e[15]=(u*A-d*M+h*y)*N,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,g=s*d,_=o*u,m=o*d,p=a*d,y=l*c,M=l*u,E=l*d,A=i.x,T=i.y,C=i.z;return r[0]=(1-(_+p))*A,r[1]=(f+E)*A,r[2]=(g-M)*A,r[3]=0,r[4]=(f-E)*T,r[5]=(1-(h+p))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(g+M)*C,r[9]=(m-y)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=qi.set(r[0],r[1],r[2]).length();const a=qi.set(r[4],r[5],r[6]).length(),l=qi.set(r[8],r[9],r[10]).length();s<0&&(o=-o),rn.copy(this);const c=1/o,u=1/a,d=1/l;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,t.setFromRotationMatrix(rn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=gn,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===gn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Nr)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=gn,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),h=-(t+e)/(t-e),f=-(i+r)/(i-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===gn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Nr)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};_o.prototype.isMatrix4=!0;let Ve=_o;const qi=new O,rn=new Ve,$0=new O(0,0,0),Z0=new O(1,1,1),Jn=new O,Rs=new O,Vt=new O,Vd=new Ve,Hd=new Yt;class Qn{constructor(e=0,t=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Se("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let J0=0;const Gd=new O,Yi=new Yt,Un=new Ve,Cs=new O,Br=new O,Q0=new O,ev=new Yt,Wd=new O(1,0,0),Xd=new O(0,1,0),qd=new O(0,0,1),Yd={type:"added"},tv={type:"removed"},Ki={type:"childadded",child:null},dl={type:"childremoved",child:null};class dt extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new O,t=new Qn,i=new Yt,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ne}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Wd,e)}rotateY(e){return this.rotateOnAxis(Xd,e)}rotateZ(e){return this.rotateOnAxis(qd,e)}translateOnAxis(e,t){return Gd.copy(e).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wd,e)}translateY(e){return this.translateOnAxis(Xd,e)}translateZ(e){return this.translateOnAxis(qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cs.copy(e):Cs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Br,Cs,this.up):Un.lookAt(Cs,Br,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(Un),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yd),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tv),dl.child=e,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yd),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,Q0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,ev,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dt.DEFAULT_UP=new O(0,1,0),dt.DEFAULT_MATRIX_AUTO_UPDATE=!0,dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ei extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nv={type:"move"};class hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ei;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function fl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?n+(e-n)*6*t:t<.5?e:t<.6666666666666666?n+(e-n)*6*(.6666666666666666-t):n}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=sl(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=fl(o,s,e+.3333333333333333),this.g=fl(o,s,e),this.b=fl(o,s,e-.3333333333333333)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=Rt){function i(s){s!==void 0&&parseFloat(s)<1&&Se("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Se("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Se("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const i=Kd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Se("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Ye.workingToColorSpace(Pt.copy(this),e),Math.round(qe(Pt.r*255,0,255))*65536+Math.round(qe(Pt.g*255,0,255))*256+Math.round(qe(Pt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,s=Pt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Rt){Ye.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(Ps);const i=Fr(ti.h,Ps.h,t),r=Fr(ti.s,Ps.s,t),s=Fr(ti.l,Ps.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Ue;Ue.NAMES=Kd;class iv extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const sn=new O,On=new O,pl=new O,Fn=new O,ji=new O,$i=new O,jd=new O,ml=new O,gl=new O,_l=new O,vl=new ot,xl=new ot,yl=new ot;class on{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),sn.subVectors(e,t),r.cross(sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){sn.subVectors(r,t),On.subVectors(i,t),pl.subVectors(e,t);const o=sn.dot(sn),a=sn.dot(On),l=sn.dot(pl),c=On.dot(On),u=On.dot(pl),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return vl.setScalar(0),xl.setScalar(0),yl.setScalar(0),vl.fromBufferAttribute(e,t),xl.fromBufferAttribute(e,i),yl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(vl,s.x),o.addScaledVector(xl,s.y),o.addScaledVector(yl,s.z),o}static isFrontFacing(e,t,i,r){return sn.subVectors(i,t),On.subVectors(e,t),sn.cross(On).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),sn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return on.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ji.subVectors(r,i),$i.subVectors(s,i),ml.subVectors(e,i);const l=ji.dot(ml),c=$i.dot(ml);if(l<=0&&c<=0)return t.copy(i);gl.subVectors(e,r);const u=ji.dot(gl),d=$i.dot(gl);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ji,o);_l.subVectors(e,s);const f=ji.dot(_l),g=$i.dot(_l);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector($i,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return jd.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(jd,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(ji,o).addScaledVector($i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Bn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,an):an.fromBufferAttribute(s,o),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ls.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ls.copy(i.boundingBox)),Ls.applyMatrix4(e.matrixWorld),this.union(Ls)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),Is.subVectors(this.max,kr),Zi.subVectors(e.a,kr),Ji.subVectors(e.b,kr),Qi.subVectors(e.c,kr),ni.subVectors(Ji,Zi),ii.subVectors(Qi,Ji),yi.subVectors(Zi,Qi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-yi.z,yi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,yi.z,0,-yi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-yi.y,yi.x,0];return!Sl(t,Zi,Ji,Qi,Is)||(t=[1,0,0,0,1,0,0,0,1],!Sl(t,Zi,Ji,Qi,Is))?!1:(Ds.crossVectors(ni,ii),t=[Ds.x,Ds.y,Ds.z],Sl(t,Zi,Ji,Qi,Is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new O,new O,new O,new O,new O,new O,new O,new O],an=new O,Ls=new Bn,Zi=new O,Ji=new O,Qi=new O,ni=new O,ii=new O,yi=new O,kr=new O,Is=new O,Ds=new O,Si=new O;function Sl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Si.fromArray(n,s);const a=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),u=i.dot(Si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const yt=new O,Ns=new Ke;let rv=0;class It extends Zn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=il,this.updateRanges=[],this.gpuType=Xt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ns.fromBufferAttribute(this,t),Ns.applyMatrix3(e),this.setXY(t,Ns.x,Ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=nn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==il&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class $d extends It{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zd extends It{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ln extends It{constructor(e,t,i){super(new Float32Array(e),t,i)}}const sv=new Bn,Vr=new O,Ml=new O;class vn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Vr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Ml)),this.expandByPoint(Vr.copy(e.center).sub(Ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ov=0;const Kt=new Ve,El=new dt,er=new O,Ht=new Bn,Hr=new Bn,At=new O;class jt extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E0(e)?Zd:$d)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return El.lookAt(e),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ln(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Ht.min,Hr.min),Ht.expandByPoint(At),At.addVectors(Ht.max,Hr.max),Ht.expandByPoint(At)):(Ht.expandByPoint(Hr.min),Ht.expandByPoint(Hr.max))}Ht.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)At.fromBufferAttribute(a,c),l&&(er.fromBufferAttribute(e,c),At.add(er)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new O,l[x]=new O;const c=new O,u=new O,d=new O,h=new Ke,f=new Ke,g=new Ke,_=new O,m=new O;function p(x,w,P){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,P),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,P),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),a[x].add(_),a[w].add(_),a[P].add(_),l[x].add(m),l[w].add(m),l[P].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,w=y.length;x<w;++x){const P=y[x],R=P.start,I=P.count;for(let G=R,B=R+I;G<B;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const M=new O,E=new O,A=new O,T=new O;function C(x){A.fromBufferAttribute(r,x),T.copy(A);const w=a[x];M.copy(w),M.sub(A.multiplyScalar(A.dot(w))).normalize(),E.crossVectors(T,w);const R=E.dot(l[x])<0?-1:1;o.setXYZW(x,M.x,M.y,M.z,R)}for(let x=0,w=y.length;x<w;++x){const P=y[x],R=P.start,I=P.count;for(let G=R,B=R+I;G<B;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new It(h,u,d)}if(this.index===null)return Se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class av{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=il,this.updateRanges=[],this.version=0,this.uuid=tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new O;class bl{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=nn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=nn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){As("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){As("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let lv=0;class xn extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=tn(),this.name="",this.type="Material",this.blending=Oi,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ia,this.blendDst=ra,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Se(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Se(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(i.blending=this.blending),this.side!==hn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ia&&(i.blendSrc=this.blendSrc),this.blendDst!==ra&&(i.blendDst=this.blendDst),this.blendEquation!==mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ld&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vn=new O,Tl=new O,Us=new O,ri=new O,wl=new O,Os=new O,Al=new O;class Fs{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Tl.copy(e).add(t).multiplyScalar(.5),Us.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Tl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Us),a=ri.dot(this.direction),l=-ri.dot(Us),c=ri.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Tl).addScaledVector(Us,h),f}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const i=Vn.dot(this.direction),r=Vn.dot(Vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,i,r,s){wl.subVectors(t,e),Os.subVectors(i,e),Al.crossVectors(wl,Os);let o=this.direction.dot(Al),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(Os.crossVectors(ri,Os));if(l<0)return null;const c=a*this.direction.dot(wl.cross(ri));if(c<0||l+c>o)return null;const u=-a*ri.dot(Al);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hn extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jd=new Ve,Mi=new Fs,Bs=new vn,Qd=new O,ks=new O,Vs=new O,Hs=new O,Rl=new O,zs=new O,eh=new O,Gs=new O;class zt extends dt{constructor(e=new jt,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){zs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Rl.fromBufferAttribute(d,e),o?zs.addScaledVector(Rl,u):zs.addScaledVector(Rl.sub(t),u))}t.add(zs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(s),Mi.copy(e.ray).recast(e.near),!(Bs.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Bs,Qd)===null||Mi.origin.distanceToSquared(Qd)>(e.far-e.near)**2))&&(Jd.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(Jd),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=y,A=M;E<A;E+=3){const T=a.getX(E),C=a.getX(E+1),x=a.getX(E+2);r=Ws(this,p,e,i,c,u,d,T,C,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);r=Ws(this,o,e,i,c,u,d,y,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=y,A=M;E<A;E+=3){const T=E,C=E+1,x=E+2;r=Ws(this,p,e,i,c,u,d,T,C,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,M=m+1,E=m+2;r=Ws(this,o,e,i,c,u,d,y,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function cv(n,e,t,i,r,s,o,a){let l;if(e.side===Ot?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===hn,a),l===null)return null;Gs.copy(a),Gs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Gs);return c<t.near||c>t.far?null:{distance:c,point:Gs.clone(),object:n}}function Ws(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ks),n.getVertexPosition(l,Vs),n.getVertexPosition(c,Hs);const u=cv(n,e,t,i,ks,Vs,Hs,eh);if(u){const d=new O;on.getBarycoord(eh,ks,Vs,Hs,d),r&&(u.uv=on.getInterpolatedAttribute(r,a,l,c,d,new Ke)),s&&(u.uv1=on.getInterpolatedAttribute(s,a,l,c,d,new Ke)),o&&(u.normal=on.getInterpolatedAttribute(o,a,l,c,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};on.getNormal(ks,Vs,Hs,h.normal),u.face=h,u.barycoord=d}return u}const zr=new ot,th=new ot,nh=new ot,uv=new ot,ih=new Ve,Xs=new O,Cl=new vn,rh=new Ve,Pl=new Fs;class dv extends zt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xd,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Xs),this.boundingBox.expandByPoint(Xs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Xs),this.boundingSphere.expandByPoint(Xs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cl.copy(this.boundingSphere),Cl.applyMatrix4(r),e.ray.intersectsSphere(Cl)!==!1&&(rh.copy(r).invert(),Pl.copy(e.ray).applyMatrix4(rh),!(this.boundingBox!==null&&Pl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===u0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Se("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;th.fromBufferAttribute(r.attributes.skinIndex,e),nh.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(zr.copy(t),t.set(0,0,0,0)):(zr.set(...t,1),t.set(0,0,0)),zr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const o=nh.getComponent(s);if(o!==0){const a=th.getComponent(s);ih.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(uv.copy(zr).applyMatrix4(ih),o)}}return t.isVector4&&(t.w=zr.w),t.applyMatrix4(this.bindMatrixInverse)}}class sh extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ll extends wt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Mt,u=Mt,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oh=new Ve,hv=new Ve;class Il{constructor(e=[],t=[]){this.uuid=tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Se("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ve;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:hv;oh.multiplyMatrices(a,t[s]),oh.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Il(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ll(t,e,e,qt,Xt);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(Se("Skeleton: No bone found with UUID:",s),o=new sh),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Dl extends It{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const tr=new Ve,ah=new Ve,qs=[],lh=new Bn,fv=new Ve,Gr=new zt,Wr=new vn;class pv extends zt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dl(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,fv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,tr),lh.copy(e.boundingBox).applyMatrix4(tr),this.boundingBox.union(lh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,tr),Wr.copy(e.boundingSphere).applyMatrix4(tr),this.boundingSphere.union(Wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(i),e.ray.intersectsSphere(Wr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,tr),ah.multiplyMatrices(i,tr),Gr.matrixWorld=ah,Gr.raycast(e,qs);for(let o=0,a=qs.length;o<a;o++){const l=qs[o];l.instanceId=s,l.object=this,t.push(l)}qs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Dl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ll(new Float32Array(r*this.count),r,this.count,_a,Xt));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Nl=new O,mv=new O,gv=new Ne;class Ei{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Nl.subVectors(i,t).cross(mv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Nl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gv.getNormalMatrix(e),r=this.coplanarPoint(Nl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new vn,_v=new Ke(.5,.5),Ys=new O;class Ul{constructor(e=new Ei,t=new Ei,i=new Ei,r=new Ei,s=new Ei,o=new Ei){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],y=s[12],M=s[13],E=s[14],A=s[15];if(r[0].setComponents(c-o,f-u,p-g,A-y).normalize(),r[1].setComponents(c+o,f+u,p+g,A+y).normalize(),r[2].setComponents(c+a,f+d,p+_,A+M).normalize(),r[3].setComponents(c-a,f-d,p-_,A-M).normalize(),i)r[4].setComponents(l,h,m,E).normalize(),r[5].setComponents(c-l,f-h,p-m,A-E).normalize();else if(r[4].setComponents(c-l,f-h,p-m,A-E).normalize(),t===gn)r[5].setComponents(c+l,f+h,p+m,A+E).normalize();else if(t===Nr)r[5].setComponents(l,h,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);const t=_v.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ys.x=r.normal.x>0?e.max.x:e.min.x,Ys.y=r.normal.y>0?e.max.y:e.min.y,Ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ch extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ks=new O,js=new O,uh=new Ve,Xr=new Fs,$s=new vn,Ol=new O,dh=new O;class Fl extends dt{constructor(e=new jt,t=new ch){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ks.fromBufferAttribute(t,r-1),js.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ks.distanceTo(js);e.setAttribute("lineDistance",new ln(i,1))}else Se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(r),$s.radius+=s,e.ray.intersectsSphere($s)===!1)return;uh.copy(r).invert(),Xr.copy(e.ray).applyMatrix4(uh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),y=u.getX(_+1),M=Zs(this,e,Xr,l,p,y,_);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Zs(this,e,Xr,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=Zs(this,e,Xr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Zs(this,e,Xr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zs(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Ks.fromBufferAttribute(a,r),js.fromBufferAttribute(a,s),t.distanceSqToSegment(Ks,js,Ol,dh)>i)return;Ol.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ol);if(!(c<e.near||c>e.far))return{distance:c,point:dh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const hh=new O,fh=new O;class vv extends Fl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)hh.fromBufferAttribute(t,r),fh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+hh.distanceTo(fh);e.setAttribute("lineDistance",new ln(i,1))}else Se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xv extends Fl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ph extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mh=new Ve,Bl=new Fs,Js=new vn,Qs=new O;class yv extends dt{constructor(e=new jt,t=new ph){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(r),Js.radius+=s,e.ray.intersectsSphere(Js)===!1)return;mh.copy(r).invert(),Bl.copy(e.ray).applyMatrix4(mh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,_=f;g<_;g++){const m=c.getX(g);Qs.fromBufferAttribute(d,m),gh(Qs,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,_=f;g<_;g++)Qs.fromBufferAttribute(d,g),gh(Qs,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gh(n,e,t,i,r,s,o){const a=Bl.distanceSqToPoint(n);if(a<t){const l=new O;Bl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class _h extends wt{constructor(e=[],t=gi,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nr extends wt{constructor(e,t,i=mn,r,s,o,a=Mt,l=Mt,c,u=Dn,d=1){if(u!==Dn&&u!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ll(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Sv extends nr{constructor(e,t=mn,i=gi,r,s,o=Mt,a=Mt,l,c=Dn){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vh extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qr extends jt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(d,2));function g(_,m,p,y,M,E,A,T,C,x,w){const P=E/C,R=A/x,I=E/2,G=A/2,B=T/2,N=C+1,V=x+1;let z=0,Z=0;const $=new O;for(let te=0;te<V;te++){const ye=te*R-G;for(let be=0;be<N;be++){const We=be*P-I;$[_]=We*y,$[m]=ye*M,$[p]=B,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=T>0?1:-1,u.push($.x,$.y,$.z),d.push(be/C),d.push(1-te/x),z+=1}}for(let te=0;te<x;te++)for(let ye=0;ye<C;ye++){const be=h+ye+N*te,We=h+ye+N*(te+1),Qe=h+(ye+1)+N*(te+1),Le=h+(ye+1)+N*te;l.push(be,We,Le),l.push(We,Qe,Le),Z+=6}a.addGroup(f,Z,w),f+=Z,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class eo extends jt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*h-o;for(let M=0;M<c;M++){const E=M*d-s;g.push(E,-y,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const M=y+c*p,E=y+c*(p+1),A=y+1+c*(p+1),T=y+1+c*p;f.push(M,E,T),f.push(E,A,T)}this.setIndex(f),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(_,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.widthSegments,e.heightSegments)}}function ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(xh(r))r.isRenderTargetTexture?(Se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(xh(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=ir(n[t]);for(const r in i)e[r]=i[r]}return e}function xh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Mv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Ev={clone:ir,merge:Nt};var bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bv,this.fragmentShader=Tv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=Mv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wv extends yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kl extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sn extends kl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Av extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=m0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rv extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function to(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Cv(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Sh(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Mh(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class rr{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Pv extends rr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vi,endingEnd:Vi}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hi:s=e,a=2*t-i;break;case Ts:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Hi:o=e,l=2*i-t;break;case Ts:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,y=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,E=f*m-f*_;for(let A=0;A!==a;++A)s[A]=p*o[u+A]+y*o[c+A]+M*o[l+A]+E*o[d+A];return s}}class Eh extends rr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}}class Lv extends rr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Iv extends rr{interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,d=u.inTangents,h=u.outTangents;if(!d||!h){const _=(i-t)/(r-t),m=1-_;for(let p=0;p!==a;++p)s[p]=o[c+p]*m+o[l+p]*_;return s}const f=a*2,g=e-1;for(let _=0;_!==a;++_){const m=o[c+_],p=o[l+_],y=g*f+_*2,M=h[y],E=h[y+1],A=e*f+_*2,T=d[A],C=d[A+1];let x=(i-t)/(r-t),w,P,R,I,G;for(let B=0;B<8;B++){w=x*x,P=w*x,R=1-x,I=R*R,G=I*R;const V=G*t+3*I*x*M+3*R*w*T+P*r-i;if(Math.abs(V)<1e-10)break;const z=3*I*(M-t)+6*R*x*(T-M)+3*w*(r-T);if(Math.abs(z)<1e-10)break;x=x-V/z,x=Math.max(0,Math.min(1,x))}s[_]=G*m+3*I*x*E+3*R*w*C+P*p}return s}}class cn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=to(t,this.TimeBufferType),this.values=to(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:to(e.times,Array),values:to(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Lv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Iv(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ir:t=this.InterpolantFactoryMethodDiscrete;break;case Dr:t=this.InterpolantFactoryMethodLinear;break;case Za:t=this.InterpolantFactoryMethodSmooth;break;case Cd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Se("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return Dr;case this.InterpolantFactoryMethodSmooth:return Za;case this.InterpolantFactoryMethodBezier:return Cd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Pe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&b0(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Za,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const d=a*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){const _=t[d+g];if(_!==t[h+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}cn.prototype.ValueTypeName="",cn.prototype.TimeBufferType=Float32Array,cn.prototype.ValueBufferType=Float32Array,cn.prototype.DefaultInterpolation=Dr;class sr extends cn{constructor(e,t,i){super(e,t,i)}}sr.prototype.ValueTypeName="bool",sr.prototype.ValueBufferType=Array,sr.prototype.DefaultInterpolation=Ir,sr.prototype.InterpolantFactoryMethodLinear=void 0,sr.prototype.InterpolantFactoryMethodSmooth=void 0;class bh extends cn{constructor(e,t,i,r){super(e,t,i,r)}}bh.prototype.ValueTypeName="color";class or extends cn{constructor(e,t,i,r){super(e,t,i,r)}}or.prototype.ValueTypeName="number";class Dv extends rr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Yt.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ar extends cn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Dv(this.times,this.values,this.getValueSize(),e)}}ar.prototype.ValueTypeName="quaternion",ar.prototype.InterpolantFactoryMethodSmooth=void 0;class lr extends cn{constructor(e,t,i){super(e,t,i)}}lr.prototype.ValueTypeName="string",lr.prototype.ValueBufferType=Array,lr.prototype.DefaultInterpolation=Ir,lr.prototype.InterpolantFactoryMethodLinear=void 0,lr.prototype.InterpolantFactoryMethodSmooth=void 0;class cr extends cn{constructor(e,t,i,r){super(e,t,i,r)}}cr.prototype.ValueTypeName="vector";class Vl{constructor(e="",t=-1,i=[],r=Ja){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=tn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Uv(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=i.length;s!==o;++s)t.push(cn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Cv(l);l=Sh(l,1,u),c=Sh(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new or(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=r[d];h||(r[d]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(Se("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Pe("AnimationClip: No animation in JSONLoader data."),null;const i=function(d,h,f,g,_){if(f.length!==0){const m=[],p=[];Mh(f,m,p,g),m.length!==0&&_.push(new d(h,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)f[h[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==h[g].morphTargets.length;++y){const M=h[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}r.push(new or(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[d].name+"]";i(cr,f+".position",h,"pos",r),i(ar,f+".quaternion",h,"rot",r),i(cr,f+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Nv(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return or;case"vector":case"vector2":case"vector3":case"vector4":return cr;case"color":return bh;case"quaternion":return ar;case"bool":case"boolean":return sr;case"string":return lr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Uv(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Nv(n.type);if(n.times===void 0){const t=[],i=[];Mh(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const zn={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Th(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Th(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Th(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Ov{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Fv=new Ov;class ur{constructor(e){this.manager=e!==void 0?e:Fv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ur.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gn={};class Bv extends Error{constructor(e,t){super(e),this.response=t}}class wh extends ur{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=zn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Gn[e]!==void 0){Gn[e].push({onLoad:t,onProgress:i,onError:r});return}Gn[e]=[],Gn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Se("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Gn[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){d.read().then(({done:M,value:E})=>{if(M)p.close();else{_+=E.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,C=u.length;T<C;T++){const x=u[T];x.onProgress&&x.onProgress(A)}p.enqueue(E),y()}},M=>{p.error(M)})}}});return new Response(m)}else throw new Bv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{zn.add(`file:${e}`,c);const u=Gn[e];delete Gn[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Gn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Gn[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const dr=new WeakMap;class kv extends ur{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=zn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=dr.get(o);d===void 0&&(d=[],dr.set(o,d)),d.push({onLoad:t,onError:r})}return o}const a=Ur("img");function l(){u(),t&&t(this);const d=dr.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}dr.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),zn.remove(`image:${e}`);const h=dr.get(this)||[];for(let f=0;f<h.length;f++){const g=h[f];g.onError&&g.onError(d)}dr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),zn.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Vv extends ur{constructor(e){super(e)}load(e,t,i,r){const s=new wt,o=new kv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Hl extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const zl=new Ve,Ah=new O,Rh=new O;class Gl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Bt,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ul,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ah),Rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rh),t.updateMatrixWorld(),zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Nr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const no=new O,io=new Yt,Mn=new O;class Ch extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(no,io,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(no,io,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new O,Ph=new Ke,Lh=new Ke;class Ut extends Ch{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Ph,Lh),t.subVectors(Lh,Ph)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Or*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Hv extends Gl{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Gi*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zv extends Hl{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Hv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Gv extends Gl{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0}}class Wv extends Hl{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Gv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ro extends Ch{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xv extends Gl{constructor(){super(new ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qv extends Hl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Xv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Yr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Wl=new WeakMap;class Yv extends ur{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Se("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Se("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=zn.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{Wl.has(o)===!0?(r&&r(Wl.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){zn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){r&&r(c),Wl.set(l,c),zn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});zn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const hr=-90,fr=1;class Kv extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ut(hr,fr,e,t);r.layers=this.layers,this.add(r);const s=new Ut(hr,fr,e,t);s.layers=this.layers,this.add(s);const o=new Ut(hr,fr,e,t);o.layers=this.layers,this.add(o);const a=new Ut(hr,fr,e,t);a.layers=this.layers,this.add(a);const l=new Ut(hr,fr,e,t);l.layers=this.layers,this.add(l);const c=new Ut(hr,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jv extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $v{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)i[s+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){Yt.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){const o=this._workIndex*s;Yt.multiplyQuaternionsFlat(e,o,e,t,e,i),Yt.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[i+a]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[i+o]*r}}}const Xl="\\[\\]\\.:\\/",Zv=new RegExp("["+Xl+"]","g"),ql="[^"+Xl+"]",Jv="[^"+Xl.replace("\\.","")+"]",Qv=/((?:WC+[\/:])*)/.source.replace("WC",ql),ex=/(WCOD+)?/.source.replace("WCOD",Jv),tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql),nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql),ix=new RegExp("^"+Qv+ex+tx+nx+"$"),rx=["material","materials","bones","map"];class sx{constructor(e,t,i){const r=i||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Je{constructor(e,t,i){this.path=t,this.parsedPath=i||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,i):new Je(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zv,"")}static parseTrackName(e){const t=ix.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);rx.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Se("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;Pe("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=sx,Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray],Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ox{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Vi,endingEnd:Vi};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings&&Object.assign(l,u.settings),u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=d0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case f0:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Ja:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===h0;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(i===Rd){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=s,this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=Hi,r.endingEnd=Hi):(e?r.endingStart=this.zeroSlopeAtStart?Hi:Vi:r.endingStart=Ts,t?r.endingEnd=this.zeroSlopeAtEnd?Hi:Vi:r.endingEnd=Ts)}_scheduleFading(e,t,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}}const ax=new Float32Array(1);class lx extends Zn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==s;++d){const h=r[d],f=h.name;let g=u[f];if(g!==void 0)++g.referenceCount,o[d]=g;else{if(g=o[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;g=new $v(Je.create(i,f,_),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[d]=g}a[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Eh(new Float32Array(2),new Float32Array(2),1,ax),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?Vl.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Ja),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===i)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new ox(this,o,t,i);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const i=t||this._root,r=i.uuid,s=typeof e=="string"?Vl.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class cx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Se("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const yc=class yc{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};yc.prototype.isMatrix2=!0;let Ih=yc;function Dh(n,e,t,i){const r=ux(i);switch(t){case wd:return n*e;case _a:return n*e/r.components*r.byteLength;case va:return n*e/r.components*r.byteLength;case vi:return n*e*2/r.components*r.byteLength;case xa:return n*e*2/r.components*r.byteLength;case Ad:return n*e*3/r.components*r.byteLength;case qt:return n*e*4/r.components*r.byteLength;case ya:return n*e*4/r.components*r.byteLength;case xs:case ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ss:case Ms:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ma:case ba:return Math.max(n,16)*Math.max(e,8)/4;case Sa:case Ea:return Math.max(n,8)*Math.max(e,8)/2;case Ta:case wa:case Ra:case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Aa:case Es:case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Da:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Na:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ka:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Va:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case za:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Xa:case qa:case Ya:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ka:case ja:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bs:case $a:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ux(n){switch(n){case Bt:case Md:return{byteLength:1,components:1};case Pr:case Ed:case In:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case mn:case pa:case Xt:return{byteLength:4,components:1};case bd:case Td:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:na}})),typeof window<"u"&&(window.__THREE__?Se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=na);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dx(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var hx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fx=`#ifdef USE_ALPHAHASH
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
#endif`,px=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vx=`#ifdef USE_AOMAP
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
#endif`,xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yx=`#ifdef USE_BATCHING
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
#endif`,Sx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tx=`#ifdef USE_IRIDESCENCE
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
#endif`,wx=`#ifdef USE_BUMPMAP
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
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ux=`#define PI 3.141592653589793
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
} // validated`,Ox=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fx=`vec3 transformedNormal = objectNormal;
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
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qx=`#ifdef USE_GRADIENTMAP
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
}`,ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ry=`#ifdef USE_ENVMAP
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
#endif`,sy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ay=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cy=`PhysicalMaterial material;
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
#endif`,uy=`uniform sampler2D dfgLUT;
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
}`,dy=`
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
#endif`,hy=`#if defined( RE_IndirectDiffuse )
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
#endif`,fy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,py=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,my=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_y=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,My=`#if defined( USE_POINTS_UV )
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
#endif`,Ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,by=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ty=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ay=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ry=`#ifdef USE_MORPHTARGETS
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
#endif`,Cy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uy=`#ifdef USE_NORMALMAP
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
#endif`,Oy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,By=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ky=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$y=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zy=`float getShadowMask() {
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
}`,Jy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qy=`#ifdef USE_SKINNING
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
#endif`,eS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tS=`#ifdef USE_SKINNING
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
#endif`,nS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oS=`#ifdef USE_TRANSMISSION
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
#endif`,aS=`#ifdef USE_TRANSMISSION
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
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ke={alphahash_fragment:hx,alphahash_pars_fragment:fx,alphamap_fragment:px,alphamap_pars_fragment:mx,alphatest_fragment:gx,alphatest_pars_fragment:_x,aomap_fragment:vx,aomap_pars_fragment:xx,batching_pars_vertex:yx,batching_vertex:Sx,begin_vertex:Mx,beginnormal_vertex:Ex,bsdfs:bx,iridescence_fragment:Tx,bumpmap_pars_fragment:wx,clipping_planes_fragment:Ax,clipping_planes_pars_fragment:Rx,clipping_planes_pars_vertex:Cx,clipping_planes_vertex:Px,color_fragment:Lx,color_pars_fragment:Ix,color_pars_vertex:Dx,color_vertex:Nx,common:Ux,cube_uv_reflection_fragment:Ox,defaultnormal_vertex:Fx,displacementmap_pars_vertex:Bx,displacementmap_vertex:kx,emissivemap_fragment:Vx,emissivemap_pars_fragment:Hx,colorspace_fragment:zx,colorspace_pars_fragment:Gx,envmap_fragment:Wx,envmap_common_pars_fragment:Xx,envmap_pars_fragment:qx,envmap_pars_vertex:Yx,envmap_physical_pars_fragment:ry,envmap_vertex:Kx,fog_vertex:jx,fog_pars_vertex:$x,fog_fragment:Zx,fog_pars_fragment:Jx,gradientmap_pars_fragment:Qx,lightmap_pars_fragment:ey,lights_lambert_fragment:ty,lights_lambert_pars_fragment:ny,lights_pars_begin:iy,lights_toon_fragment:sy,lights_toon_pars_fragment:oy,lights_phong_fragment:ay,lights_phong_pars_fragment:ly,lights_physical_fragment:cy,lights_physical_pars_fragment:uy,lights_fragment_begin:dy,lights_fragment_maps:hy,lights_fragment_end:fy,lightprobes_pars_fragment:py,logdepthbuf_fragment:my,logdepthbuf_pars_fragment:gy,logdepthbuf_pars_vertex:_y,logdepthbuf_vertex:vy,map_fragment:xy,map_pars_fragment:yy,map_particle_fragment:Sy,map_particle_pars_fragment:My,metalnessmap_fragment:Ey,metalnessmap_pars_fragment:by,morphinstance_vertex:Ty,morphcolor_vertex:wy,morphnormal_vertex:Ay,morphtarget_pars_vertex:Ry,morphtarget_vertex:Cy,normal_fragment_begin:Py,normal_fragment_maps:Ly,normal_pars_fragment:Iy,normal_pars_vertex:Dy,normal_vertex:Ny,normalmap_pars_fragment:Uy,clearcoat_normal_fragment_begin:Oy,clearcoat_normal_fragment_maps:Fy,clearcoat_pars_fragment:By,iridescence_pars_fragment:ky,opaque_fragment:Vy,packing:Hy,premultiplied_alpha_fragment:zy,project_vertex:Gy,dithering_fragment:Wy,dithering_pars_fragment:Xy,roughnessmap_fragment:qy,roughnessmap_pars_fragment:Yy,shadowmap_pars_fragment:Ky,shadowmap_pars_vertex:jy,shadowmap_vertex:$y,shadowmask_pars_fragment:Zy,skinbase_vertex:Jy,skinning_pars_vertex:Qy,skinning_vertex:eS,skinnormal_vertex:tS,specularmap_fragment:nS,specularmap_pars_fragment:iS,tonemapping_fragment:rS,tonemapping_pars_fragment:sS,transmission_fragment:oS,transmission_pars_fragment:aS,uv_pars_fragment:lS,uv_pars_vertex:cS,uv_vertex:uS,worldpos_vertex:dS,background_vert:`varying vec2 vUv;
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
}`},ue={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},En={basic:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Nt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Nt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Nt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Nt([ue.points,ue.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Nt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Nt([ue.common,ue.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Nt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Nt([ue.sprite,ue.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Nt([ue.common,ue.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Nt([ue.lights,ue.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};En.physical={uniforms:Nt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const so={r:0,b:0,g:0},hS=new Ve,Uh=new Ne;Uh.set(-1,0,0,0,1,0,0,0,1);function fS(n,e,t,i,r,s){const o=new Ue(0);let a=r===!0?0:1,l,c,u=null,d=0,h=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){const E=y.backgroundBlurriness>0;M=e.get(M,E)}return M}function g(y){let M=!1;const E=f(y);E===null?m(o,a):E&&E.isColor&&(m(E,1),M=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(y,M){const E=f(M);E&&(E.isCubeTexture||E.mapping===gs)?(c===void 0&&(c=new zt(new qr(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:ir(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hS.makeRotationFromEuler(M.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Uh),c.material.toneMapped=Ye.getTransfer(E.colorSpace)!==et,(u!==E||d!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new zt(new eo(2,2),new yn({name:"BackgroundMaterial",uniforms:ir(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(E.colorSpace)!==et,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(so,yh(n)),t.buffers.color.setClear(so.r,so.g,so.b,M,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:_,dispose:p}}function pS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(R,I,G,B,N){let V=!1;const z=d(R,B,G,I);s!==z&&(s=z,c(s.object)),V=f(R,B,G,N),V&&g(R,B,G,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,E(R,I,G,B),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function d(R,I,G,B){const N=B.wireframe===!0;let V=i[I.id];V===void 0&&(V={},i[I.id]=V);const z=R.isInstancedMesh===!0?R.id:0;let Z=V[z];Z===void 0&&(Z={},V[z]=Z);let $=Z[G.id];$===void 0&&($={},Z[G.id]=$);let te=$[N];return te===void 0&&(te=h(l()),$[N]=te),te}function h(R){const I=[],G=[],B=[];for(let N=0;N<t;N++)I[N]=0,G[N]=0,B[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:B,object:R,attributes:{},index:null}}function f(R,I,G,B){const N=s.attributes,V=I.attributes;let z=0;const Z=G.getAttributes();for(const $ in Z)if(Z[$].location>=0){const ye=N[$];let be=V[$];if(be===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(be=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(be=R.instanceColor)),ye===void 0||ye.attribute!==be||be&&ye.data!==be.data)return!0;z++}return s.attributesNum!==z||s.index!==B}function g(R,I,G,B){const N={},V=I.attributes;let z=0;const Z=G.getAttributes();for(const $ in Z)if(Z[$].location>=0){let ye=V[$];ye===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(ye=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(ye=R.instanceColor));const be={};be.attribute=ye,ye&&ye.data&&(be.data=ye.data),N[$]=be,z++}s.attributes=N,s.attributesNum=z,s.index=B}function _(){const R=s.newAttributes;for(let I=0,G=R.length;I<G;I++)R[I]=0}function m(R){p(R,0)}function p(R,I){const G=s.newAttributes,B=s.enabledAttributes,N=s.attributeDivisors;G[R]=1,B[R]===0&&(n.enableVertexAttribArray(R),B[R]=1),N[R]!==I&&(n.vertexAttribDivisor(R,I),N[R]=I)}function y(){const R=s.newAttributes,I=s.enabledAttributes;for(let G=0,B=I.length;G<B;G++)I[G]!==R[G]&&(n.disableVertexAttribArray(G),I[G]=0)}function M(R,I,G,B,N,V,z){z===!0?n.vertexAttribIPointer(R,I,G,N,V):n.vertexAttribPointer(R,I,G,B,N,V)}function E(R,I,G,B){_();const N=B.attributes,V=G.getAttributes(),z=I.defaultAttributeValues;for(const Z in V){const $=V[Z];if($.location>=0){let te=N[Z];if(te===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(te=R.instanceColor)),te!==void 0){const ye=te.normalized,be=te.itemSize,We=e.get(te);if(We===void 0)continue;const Qe=We.buffer,Le=We.type,j=We.bytesPerElement,de=Le===n.INT||Le===n.UNSIGNED_INT||te.gpuType===pa;if(te.isInterleavedBufferAttribute){const se=te.data,Re=se.stride,Ie=te.offset;if(se.isInstancedInterleavedBuffer){for(let Ce=0;Ce<$.locationSize;Ce++)p($.location+Ce,se.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ce=0;Ce<$.locationSize;Ce++)m($.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let Ce=0;Ce<$.locationSize;Ce++)M($.location+Ce,be/$.locationSize,Le,ye,Re*j,(Ie+be/$.locationSize*Ce)*j,de)}else{if(te.isInstancedBufferAttribute){for(let se=0;se<$.locationSize;se++)p($.location+se,te.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let se=0;se<$.locationSize;se++)m($.location+se);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let se=0;se<$.locationSize;se++)M($.location+se,be/$.locationSize,Le,ye,be*j,be/$.locationSize*se*j,de)}}else if(z!==void 0){const ye=z[Z];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv($.location,ye);break;case 3:n.vertexAttrib3fv($.location,ye);break;case 4:n.vertexAttrib4fv($.location,ye);break;default:n.vertexAttrib1fv($.location,ye)}}}}y()}function A(){w();for(const R in i){const I=i[R];for(const G in I){const B=I[G];for(const N in B){const V=B[N];for(const z in V)u(V[z].object),delete V[z];delete B[N]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;const I=i[R.id];for(const G in I){const B=I[G];for(const N in B){const V=B[N];for(const z in V)u(V[z].object),delete V[z];delete B[N]}}delete i[R.id]}function C(R){for(const I in i){const G=i[I];for(const B in G){const N=G[B];if(N[R.id]===void 0)continue;const V=N[R.id];for(const z in V)u(V[z].object),delete V[z];delete N[R.id]}}}function x(R){for(const I in i){const G=i[I],B=R.isInstancedMesh===!0?R.id:0,N=G[B];if(N!==void 0){for(const V in N){const z=N[V];for(const Z in z)u(z[Z].object),delete z[Z];delete N[V]}delete G[B],Object.keys(G).length===0&&delete i[I]}}}function w(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function mS(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function gS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==qt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const x=C===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Bt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xt&&!x)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Se("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:E,maxSamples:A,samples:T}}function _S(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ei,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,M=y*4;let E=p.clippingState||null;l.value=E,E=u(g,h,M,f);for(let A=0;A!==M;++A)E[A]=t[A];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,E=f;M!==_;++M,E+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const oi=4,Oh=[.125,.215,.35,.446,.526,.582],Ti=20,vS=256,Kr=new ro,Fh=new Ue;let Yl=null,Kl=0,jl=0,$l=!1;const xS=new O;class Bh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=xS}=s;Yl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl,Kl,jl),this._renderer.xr.enabled=$l,e.scissorTest=!1,pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:In,format:qt,colorSpace:kt,depthBuffer:!1},r=kh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yS(s)),this._blurMaterial=MS(s,e,t),this._ggxMaterial=SS(s,e,t)}return r}_compileMaterial(e){const t=new zt(new jt,e);this._renderer.compile(t,Kr)}_sceneToCubeUV(e,t,i,r,s){const l=new Ut(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Fh),d.toneMapping=fn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zt(new qr,new Hn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Fh),p=!0);for(let M=0;M<6;M++){const E=M%3;E===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):E===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const A=this._cubeSize;pr(r,E*A,M>2?A:0,A,A),d.setRenderTarget(r),p&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===gi||e.mapping===Bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;pr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Kr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-oi?i-g+oi:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,pr(s,m,p,3*_,2*_),r.setRenderTarget(s),r.render(a,Kr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,pr(e,m,p,3*_,2*_),r.setRenderTarget(e),r.render(a,Kr)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ti-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ti;m>Ti&&Se(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let y=0;for(let C=0;C<Ti;++C){const x=C/_,w=Math.exp(-x*x/2);p.push(w),C===0?y+=w:C<m&&(y+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const E=this._sizeLods[r],A=3*E*(r>M-oi?r-M+oi:0),T=4*(this._cubeSize-E);pr(t,A,T,3*E,2*E),l.setRenderTarget(t),l.render(d,Kr)}}function yS(n){const e=[],t=[],i=[];let r=n;const s=n-oi+1+Oh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-oi?l=Oh[o-n+oi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),M=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,x=T>2?0:-1,w=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];y.set(w,_*g*T),M.set(h,m*g*T);const P=[T,T,T,T,T,T];E.set(P,p*g*T)}const A=new jt;A.setAttribute("position",new It(y,_)),A.setAttribute("uv",new It(M,m)),A.setAttribute("faceIndex",new It(E,p)),i.push(new zt(A,null)),r>oi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function kh(n,e,t){const i=new _n(n,e,t);return i.texture.mapping=gs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function SS(n,e,t){return new yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function MS(n,e,t){const i=new Float32Array(Ti),r=new O(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Vh(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Hh(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function oo(){return`

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
	`}class zh extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _h(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qr(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Pn});s.uniforms.tEquirect.value=t;const o=new zt(r,s),a=t.minFilter;return t.minFilter===Ln&&(t.minFilter=Et),new Kv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function ES(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===ha||f===fa)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new zh(g.height);return _.fromEquirectangularTexture(n,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===ha||f===fa,_=f===gi||f===Bi;if(g||_){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Bh(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return g&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new Bh(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===ha?h.mapping=gi:f===fa&&(h.mapping=Bi),h}function l(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function bS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&rl("WebGLRenderer: "+i+" extension not supported."),r}}}function TS(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const y=f.array;_=f.version;for(let M=0,E=y.length;M<E;M+=3){const A=y[M+0],T=y[M+1],C=y[M+2];h.push(A,T,T,C,C,A)}}else{const y=g.array;_=g.version;for(let M=0,E=y.length/3-1;M<E;M+=3){const A=M+0,T=M+1,C=M+2;h.push(A,T,T,C,C,A)}}const m=new(g.count>=65535?Zd:$d)(h,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function wS(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*o),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,s,d*o,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];t.update(_,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function AS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Pe("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function RS(n,e,t){const i=new WeakMap,r=new ot;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let w=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let E=a.attributes.position.count*M,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*A*4*d),C=new kd(T,E,A,d);C.type=Xt,C.needsUpdate=!0;const x=M*4;for(let P=0;P<d;P++){const R=m[P],I=p[P],G=y[P],B=E*A*4*P;for(let N=0;N<R.count;N++){const V=N*x;f===!0&&(r.fromBufferAttribute(R,N),T[B+V+0]=r.x,T[B+V+1]=r.y,T[B+V+2]=r.z,T[B+V+3]=0),g===!0&&(r.fromBufferAttribute(I,N),T[B+V+4]=r.x,T[B+V+5]=r.y,T[B+V+6]=r.z,T[B+V+7]=0),_===!0&&(r.fromBufferAttribute(G,N),T[B+V+8]=r.x,T[B+V+9]=r.y,T[B+V+10]=r.z,T[B+V+11]=G.itemSize===4?r.w:1)}}h={count:d,texture:C,size:new Ke(E,A)},i.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function CS(n,e,t,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const PS={[hd]:"LINEAR_TONE_MAPPING",[fd]:"REINHARD_TONE_MAPPING",[pd]:"CINEON_TONE_MAPPING",[md]:"ACES_FILMIC_TONE_MAPPING",[_d]:"AGX_TONE_MAPPING",[vd]:"NEUTRAL_TONE_MAPPING",[gd]:"CUSTOM_TONE_MAPPING"};function LS(n,e,t,i,r){const s=new _n(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new nr(e,t):void 0}),o=new _n(e,t,{type:In,depthBuffer:!1,stencilBuffer:!1}),a=new jt;a.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ln([0,2,0,0,2,0],2));const l=new wv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new zt(a,l),u=new ro(-1,1,1,-1,0,1);let d=null,h=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(y,M){s.setSize(y,M),o.setSize(y,M);for(let E=0;E<m.length;E++){const A=m[E];A.setSize&&A.setSize(y,M)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;const M=s.width,E=s.height;for(let A=0;A<m.length;A++){const T=m[A];T.setSize&&T.setSize(M,E)}},this.begin=function(y,M){if(f||y.toneMapping===fn&&m.length===0)return!1;if(_=M,M!==null){const E=M.width,A=M.height;(s.width!==E||s.height!==A)&&this.setSize(E,A)}return p===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=fn,!0},this.hasRenderPass=function(){return p},this.end=function(y,M){y.toneMapping=g,f=!0;let E=s,A=o;for(let T=0;T<m.length;T++){const C=m[T];if(C.enabled!==!1&&(C.render(y,A,E,M),C.needsSwap!==!1)){const x=E;E=A,A=x}}if(d!==y.outputColorSpace||h!==y.toneMapping){d=y.outputColorSpace,h=y.toneMapping,l.defines={},Ye.getTransfer(d)===et&&(l.defines.SRGB_TRANSFER="");const T=PS[h];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(_),y.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Gh=new wt,Zl=new nr(1,1),Wh=new kd,Xh=new j0,qh=new _h,Yh=[],Kh=[],jh=new Float32Array(16),$h=new Float32Array(9),Zh=new Float32Array(4);function mr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Yh[r];if(s===void 0&&(s=new Float32Array(r),Yh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ao(n,e){let t=Kh[e];t===void 0&&(t=new Int32Array(e),Kh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function IS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function DS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function NS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function US(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function OS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;Zh.set(i),n.uniformMatrix2fv(this.addr,!1,Zh),Tt(t,i)}}function FS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;$h.set(i),n.uniformMatrix3fv(this.addr,!1,$h),Tt(t,i)}}function BS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;jh.set(i),n.uniformMatrix4fv(this.addr,!1,jh),Tt(t,i)}}function kS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function VS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function HS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function zS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function GS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function WS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function XS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function qS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function YS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Zl.compareFunction=t.isReversedDepthBuffer()?nl:tl,s=Zl):s=Gh,t.setTexture2D(e||s,r)}function KS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Xh,r)}function jS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||qh,r)}function $S(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Wh,r)}function ZS(n){switch(n){case 5126:return IS;case 35664:return DS;case 35665:return NS;case 35666:return US;case 35674:return OS;case 35675:return FS;case 35676:return BS;case 5124:case 35670:return kS;case 35667:case 35671:return VS;case 35668:case 35672:return HS;case 35669:case 35673:return zS;case 5125:return GS;case 36294:return WS;case 36295:return XS;case 36296:return qS;case 35678:case 36198:case 36298:case 36306:case 35682:return YS;case 35679:case 36299:case 36307:return KS;case 35680:case 36300:case 36308:case 36293:return jS;case 36289:case 36303:case 36311:case 36292:return $S}}function JS(n,e){n.uniform1fv(this.addr,e)}function QS(n,e){const t=mr(e,this.size,2);n.uniform2fv(this.addr,t)}function eM(n,e){const t=mr(e,this.size,3);n.uniform3fv(this.addr,t)}function tM(n,e){const t=mr(e,this.size,4);n.uniform4fv(this.addr,t)}function nM(n,e){const t=mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function iM(n,e){const t=mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rM(n,e){const t=mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sM(n,e){n.uniform1iv(this.addr,e)}function oM(n,e){n.uniform2iv(this.addr,e)}function aM(n,e){n.uniform3iv(this.addr,e)}function lM(n,e){n.uniform4iv(this.addr,e)}function cM(n,e){n.uniform1uiv(this.addr,e)}function uM(n,e){n.uniform2uiv(this.addr,e)}function dM(n,e){n.uniform3uiv(this.addr,e)}function hM(n,e){n.uniform4uiv(this.addr,e)}function fM(n,e,t){const i=this.cache,r=e.length,s=ao(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Zl:o=Gh;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function pM(n,e,t){const i=this.cache,r=e.length,s=ao(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Xh,s[o])}function mM(n,e,t){const i=this.cache,r=e.length,s=ao(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||qh,s[o])}function gM(n,e,t){const i=this.cache,r=e.length,s=ao(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Wh,s[o])}function _M(n){switch(n){case 5126:return JS;case 35664:return QS;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return rM;case 5124:case 35670:return sM;case 35667:case 35671:return oM;case 35668:case 35672:return aM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return uM;case 36295:return dM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}class vM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ZS(t.type)}}class xM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_M(t.type)}}class yM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Jl=/(\w+)(\])?(\[|\.)?/g;function Jh(n,e){n.seq.push(e),n.map[e.id]=e}function SM(n,e,t){const i=n.name,r=i.length;for(Jl.lastIndex=0;;){const s=Jl.exec(i),o=Jl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Jh(t,c===void 0?new vM(a,n,e):new xM(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new yM(a),Jh(t,d)),t=d}}}class lo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);SM(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Qh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const MM=37297;let EM=0;function bM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ef=new Ne;function TM(n){Ye._getMatrix(ef,Ye.workingColorSpace,n);const e=`mat3( ${ef.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case ws:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Se("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function tf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+bM(n.getShaderSource(e),a)}else return s}function wM(n,e){const t=TM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const AM={[hd]:"Linear",[fd]:"Reinhard",[pd]:"Cineon",[md]:"ACESFilmic",[_d]:"AgX",[vd]:"Neutral",[gd]:"Custom"};function RM(n,e){const t=AM[e];return t===void 0?(Se("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const co=new O;function CM(){Ye.getLuminanceCoefficients(co);const n=co.x.toFixed(4),e=co.y.toFixed(4),t=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function LM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function IM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function jr(n){return n!==""}function nf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(n){return n.replace(DM,UM)}const NM=new Map;function UM(n,e){let t=ke[e];if(t===void 0){const i=NM.get(e);if(i!==void 0)t=ke[i],Se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ql(t)}const OM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sf(n){return n.replace(OM,FM)}function FM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function of(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const BM={[ms]:"SHADOWMAP_TYPE_PCF",[Rr]:"SHADOWMAP_TYPE_VSM"};function kM(n){return BM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const VM={[gi]:"ENVMAP_TYPE_CUBE",[Bi]:"ENVMAP_TYPE_CUBE",[gs]:"ENVMAP_TYPE_CUBE_UV"};function HM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":VM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const zM={[Bi]:"ENVMAP_MODE_REFRACTION"};function GM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":zM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const WM={[dd]:"ENVMAP_BLENDING_MULTIPLY",[l0]:"ENVMAP_BLENDING_MIX",[c0]:"ENVMAP_BLENDING_ADD"};function XM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":WM[n.combine]||"ENVMAP_BLENDING_NONE"}function qM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function YM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=kM(t),c=HM(t),u=GM(t),d=XM(t),h=qM(t),f=PM(t),g=LM(s),_=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jr).join(`
`),p.length>0&&(p+=`
`)):(m=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),p=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?ke.tonemapping_pars_fragment:"",t.toneMapping!==fn?RM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,wM("linearToOutputTexel",t.outputColorSpace),CM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jr).join(`
`)),o=Ql(o),o=nf(o,t),o=rf(o,t),a=Ql(a),a=nf(a,t),a=rf(a,t),o=sf(o),a=sf(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Id?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+o,E=y+p+a,A=Qh(r,r.VERTEX_SHADER,M),T=Qh(r,r.FRAGMENT_SHADER,E);r.attachShader(_,A),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(R){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(A)||"",B=r.getShaderInfoLog(T)||"",N=I.trim(),V=G.trim(),z=B.trim();let Z=!0,$=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,T);else{const te=tf(r,A,"vertex"),ye=tf(r,T,"fragment");Pe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+te+`
`+ye)}else N!==""?Se("WebGLProgram: Program Info Log:",N):(V===""||z==="")&&($=!1);$&&(R.diagnostics={runnable:Z,programLog:N,vertexShader:{log:V,prefix:m},fragmentShader:{log:z,prefix:p}})}r.deleteShader(A),r.deleteShader(T),x=new lo(r,_),w=IM(r,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(_,MM)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=EM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let KM=0;class jM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $M(e),t.set(e,i)),i}}class $M{constructor(e){this.id=KM++,this.code=e,this.usedTimes=0}}function ZM(n){return n===vi||n===Es||n===bs}function JM(n,e,t,i,r,s){const o=new zd,a=new jM,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,w,P,R,I,G){const B=R.fog,N=I.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||V,z),$=Z&&Z.mapping===gs?Z.image.height:null,te=f[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Se("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ye=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,be=ye!==void 0?ye.length:0;let We=0;N.morphAttributes.position!==void 0&&(We=1),N.morphAttributes.normal!==void 0&&(We=2),N.morphAttributes.color!==void 0&&(We=3);let Qe,Le,j,de;if(te){const Oe=En[te];Qe=Oe.vertexShader,Le=Oe.fragmentShader}else Qe=x.vertexShader,Le=x.fragmentShader,a.update(x),j=a.getVertexShaderID(x),de=a.getFragmentShaderID(x);const se=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Ie=I.isInstancedMesh===!0,Ce=I.isBatchedMesh===!0,ct=!!x.map,Xe=!!x.matcap,ee=!!Z,ge=!!x.aoMap,Ee=!!x.lightMap,Ze=!!x.bumpMap,nt=!!x.normalMap,St=!!x.displacementMap,D=!!x.emissiveMap,ht=!!x.metalnessMap,He=!!x.roughnessMap,it=x.anisotropy>0,ce=x.clearcoat>0,ft=x.dispersion>0,b=x.iridescence>0,v=x.sheen>0,F=x.transmission>0,Y=it&&!!x.anisotropyMap,Q=ce&&!!x.clearcoatMap,ne=ce&&!!x.clearcoatNormalMap,le=ce&&!!x.clearcoatRoughnessMap,X=b&&!!x.iridescenceMap,K=b&&!!x.iridescenceThicknessMap,pe=v&&!!x.sheenColorMap,ve=v&&!!x.sheenRoughnessMap,oe=!!x.specularMap,ie=!!x.specularColorMap,De=!!x.specularIntensityMap,Be=F&&!!x.transmissionMap,$e=F&&!!x.thicknessMap,L=!!x.gradientMap,re=!!x.alphaMap,q=x.alphaTest>0,me=!!x.alphaHash,ae=!!x.extensions;let J=fn;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(J=n.toneMapping);const Te={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:Qe,fragmentShader:Le,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ce,batchingColor:Ce&&I._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&I.instanceColor!==null,instancingMorph:Ie&&I.morphTexture!==null,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ct,matcap:Xe,envMap:ee,envMapMode:ee&&Z.mapping,envMapCubeUVHeight:$,aoMap:ge,lightMap:Ee,bumpMap:Ze,normalMap:nt,displacementMap:St,emissiveMap:D,normalMapObjectSpace:nt&&x.normalMapType===g0,normalMapTangentSpace:nt&&x.normalMapType===el,packedNormalMap:nt&&x.normalMapType===el&&ZM(x.normalMap.format),metalnessMap:ht,roughnessMap:He,anisotropy:it,anisotropyMap:Y,clearcoat:ce,clearcoatMap:Q,clearcoatNormalMap:ne,clearcoatRoughnessMap:le,dispersion:ft,iridescence:b,iridescenceMap:X,iridescenceThicknessMap:K,sheen:v,sheenColorMap:pe,sheenRoughnessMap:ve,specularMap:oe,specularColorMap:ie,specularIntensityMap:De,transmission:F,transmissionMap:Be,thicknessMap:$e,gradientMap:L,opaque:x.transparent===!1&&x.blending===Oi&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:q,alphaHash:me,combine:x.combine,mapUv:ct&&g(x.map.channel),aoMapUv:ge&&g(x.aoMap.channel),lightMapUv:Ee&&g(x.lightMap.channel),bumpMapUv:Ze&&g(x.bumpMap.channel),normalMapUv:nt&&g(x.normalMap.channel),displacementMapUv:St&&g(x.displacementMap.channel),emissiveMapUv:D&&g(x.emissiveMap.channel),metalnessMapUv:ht&&g(x.metalnessMap.channel),roughnessMapUv:He&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:Q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:K&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(x.sheenRoughnessMap.channel),specularMapUv:oe&&g(x.specularMap.channel),specularColorMapUv:ie&&g(x.specularColorMap.channel),specularIntensityMapUv:De&&g(x.specularIntensityMap.channel),transmissionMapUv:Be&&g(x.transmissionMap.channel),thicknessMapUv:$e&&g(x.thicknessMap.channel),alphaMapUv:re&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(nt||it),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(ct||re),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&nt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Re,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:We,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:J,decodeVideoTexture:ct&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===et,decodeVideoTextureEmissive:D&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===en,flipSided:x.side===Ot,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)w.push(P),w.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(w,x),y(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function M(x){const w=f[x.type];let P;if(w){const R=En[w];P=Ev.clone(R.uniforms)}else P=x.uniforms;return P}function E(x,w){let P=u.get(w);return P!==void 0?++P.usedTimes:(P=new YM(n,w,x,r),c.push(P),u.set(w,P)),P}function A(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:C}}function QM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function eE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function af(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function lf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,_,m,p){let y=n[e];return y===void 0?(y={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},n[e]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=g,y.materialVariant=o(h),y.groupOrder=_,y.renderOrder=h.renderOrder,y.z=m,y.group=p),e++,y}function l(h,f,g,_,m,p){const y=a(h,f,g,_,m,p);g.transmission>0?i.push(y):g.transparent===!0?r.push(y):t.push(y)}function c(h,f,g,_,m,p){const y=a(h,f,g,_,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?r.unshift(y):t.unshift(y)}function u(h,f){t.length>1&&t.sort(h||eE),i.length>1&&i.sort(f||af),r.length>1&&r.sort(f||af)}function d(){for(let h=e,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function tE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new lf,n.set(i,[o])):r>=s.length?(o=new lf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function nE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ue};break;case"SpotLight":t={position:new O,direction:new O,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function iE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rE=0;function sE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function oE(n){const e=new nE,t=iE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new Ve,o=new Ve;function a(c){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,M=0,E=0,A=0,T=0,C=0;c.sort(sE);for(let w=0,P=c.length;w<P;w++){const R=c[w],I=R.color,G=R.intensity,B=R.distance;let N=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===vi?N=R.shadow.map.texture:N=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=I.r*G,d+=I.g*G,h+=I.b*G;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],G);C++}else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const z=R.shadow,Z=t.get(R);Z.shadowIntensity=z.intensity,Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,i.directionalShadow[f]=Z,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=R.shadow.matrix,y++}i.directional[f]=V,f++}else if(R.isSpotLight){const V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(I).multiplyScalar(G),V.distance=B,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[_]=V;const z=R.shadow;if(R.map&&(i.spotLightMap[A]=R.map,A++,z.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[_]=z.matrix,R.castShadow){const Z=t.get(R);Z.shadowIntensity=z.intensity,Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,i.spotShadow[_]=Z,i.spotShadowMap[_]=N,E++}_++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(I).multiplyScalar(G),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=V,m++}else if(R.isPointLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const z=R.shadow,Z=t.get(R);Z.shadowIntensity=z.intensity,Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,Z.shadowCameraNear=z.camera.near,Z.shadowCameraFar=z.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=R.shadow.matrix,M++}i.point[g]=V,g++}else if(R.isHemisphereLight){const V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(G),V.groundColor.copy(R.groundColor).multiplyScalar(G),i.hemi[p]=V,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==M||x.numSpotShadows!==E||x.numSpotMaps!==A||x.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=M,x.numSpotShadows=E,x.numSpotMaps=A,x.numLightProbes=C,i.version=rE++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(M.isSpotLight){const E=i.spot[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function cf(n){const e=new oE(n),t=[],i=[],r=[];function s(h){d.camera=h,t.length=0,i.length=0,r.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function aE(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new cf(n),e.set(r,[a])):s>=o.length?(a=new cf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const lE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cE=`uniform sampler2D shadow_pass;
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
}`,uE=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],dE=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],uf=new Ve,$r=new O,ec=new O;function hE(n,e,t){let i=new Ul;const r=new Ke,s=new Ke,o=new ot,a=new Av,l=new Rv,c={},u=t.maxTextureSize,d={[hn]:Ot,[Ot]:hn,[en]:en},h=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:lE,fragmentShader:cE}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new zt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let p=this.type;this.render=function(T,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===G_&&(Se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ms);const w=n.getRenderTarget(),P=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Pn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const G=p!==this.type;G&&C.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(N=>N.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,N=T.length;B<N;B++){const V=T[B],z=V.shadow;if(z===void 0){Se("WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const Z=z.getFrameExtents();r.multiply(Z),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,z.mapSize.y=s.y));const $=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=$,z.map===null||G===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Rr){if(V.isPointLight){Se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new _n(r.x,r.y,{format:vi,type:In,minFilter:Et,magFilter:Et,generateMipmaps:!1}),z.map.texture.name=V.name+".shadowMap",z.map.depthTexture=new nr(r.x,r.y,Xt),z.map.depthTexture.name=V.name+".shadowMapDepth",z.map.depthTexture.format=Dn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Mt,z.map.depthTexture.magFilter=Mt}else V.isPointLight?(z.map=new zh(r.x),z.map.depthTexture=new Sv(r.x,mn)):(z.map=new _n(r.x,r.y),z.map.depthTexture=new nr(r.x,r.y,mn)),z.map.depthTexture.name=V.name+".shadowMap",z.map.depthTexture.format=Dn,this.type===ms?(z.map.depthTexture.compareFunction=$?nl:tl,z.map.depthTexture.minFilter=Et,z.map.depthTexture.magFilter=Et):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Mt,z.map.depthTexture.magFilter=Mt);z.camera.updateProjectionMatrix()}const te=z.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<te;ye++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,ye),n.clear();else{ye===0&&(n.setRenderTarget(z.map),n.clear());const be=z.getViewport(ye);o.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),I.viewport(o)}if(V.isPointLight){const be=z.camera,We=z.matrix,Qe=V.distance||be.far;Qe!==be.far&&(be.far=Qe,be.updateProjectionMatrix()),$r.setFromMatrixPosition(V.matrixWorld),be.position.copy($r),ec.copy(be.position),ec.add(uE[ye]),be.up.copy(dE[ye]),be.lookAt(ec),be.updateMatrixWorld(),We.makeTranslation(-$r.x,-$r.y,-$r.z),uf.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),z._frustum.setFromProjectionMatrix(uf,be.coordinateSystem,be.reversedDepth)}else z.updateMatrices(V);i=z.getFrustum(),E(C,x,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===Rr&&y(z,x),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,P,R)};function y(T,C){const x=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new _n(r.x,r.y,{format:vi,type:In})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,x,h,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,x,f,_,null)}function M(T,C,x,w){let P=null;const R=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)P=R;else if(P=x.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=P.uuid,G=C.uuid;let B=c[I];B===void 0&&(B={},c[I]=B);let N=B[G];N===void 0&&(N=P.clone(),B[G]=N,C.addEventListener("dispose",A)),P=N}if(P.visible=C.visible,P.wireframe=C.wireframe,w===Rr?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:d[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const I=n.properties.get(P);I.light=x}return P}function E(T,C,x,w,P){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Rr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const G=e.update(T),B=T.material;if(Array.isArray(B)){const N=G.groups;for(let V=0,z=N.length;V<z;V++){const Z=N[V],$=B[Z.materialIndex];if($&&$.visible){const te=M(T,$,w,P);T.onBeforeShadow(n,T,C,x,G,te,Z),n.renderBufferDirect(x,null,G,te,T,Z),T.onAfterShadow(n,T,C,x,G,te,Z)}}}else if(B.visible){const N=M(T,B,w,P);T.onBeforeShadow(n,T,C,x,G,N,null),n.renderBufferDirect(x,null,G,N,T,null),T.onAfterShadow(n,T,C,x,G,N,null)}}const I=T.children;for(let G=0,B=I.length;G<B;G++)E(I[G],C,x,w,P)}function A(T){T.target.removeEventListener("dispose",A);for(const x in c){const w=c[x],P=T.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function fE(n,e){function t(){let L=!1;const re=new ot;let q=null;const me=new ot(0,0,0,0);return{setMask:function(ae){q!==ae&&!L&&(n.colorMask(ae,ae,ae,ae),q=ae)},setLocked:function(ae){L=ae},setClear:function(ae,J,Te,Oe,_t){_t===!0&&(ae*=Oe,J*=Oe,Te*=Oe),re.set(ae,J,Te,Oe),me.equals(re)===!1&&(n.clearColor(ae,J,Te,Oe),me.copy(re))},reset:function(){L=!1,q=null,me.set(-1,0,0,0)}}}function i(){let L=!1,re=!1,q=null,me=null,ae=null;return{setReversed:function(J){if(re!==J){const Te=e.get("EXT_clip_control");J?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),re=J;const Oe=ae;ae=null,this.setClear(Oe)}},getReversed:function(){return re},setTest:function(J){J?se(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(J){q!==J&&!L&&(n.depthMask(J),q=J)},setFunc:function(J){if(re&&(J=A0[J]),me!==J){switch(J){case sa:n.depthFunc(n.NEVER);break;case oa:n.depthFunc(n.ALWAYS);break;case aa:n.depthFunc(n.LESS);break;case Fi:n.depthFunc(n.LEQUAL);break;case la:n.depthFunc(n.EQUAL);break;case ca:n.depthFunc(n.GEQUAL);break;case ua:n.depthFunc(n.GREATER);break;case da:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=J}},setLocked:function(J){L=J},setClear:function(J){ae!==J&&(ae=J,re&&(J=1-J),n.clearDepth(J))},reset:function(){L=!1,q=null,me=null,ae=null,re=!1}}}function r(){let L=!1,re=null,q=null,me=null,ae=null,J=null,Te=null,Oe=null,_t=null;return{setTest:function(rt){L||(rt?se(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(rt){re!==rt&&!L&&(n.stencilMask(rt),re=rt)},setFunc:function(rt,Xn,wn){(q!==rt||me!==Xn||ae!==wn)&&(n.stencilFunc(rt,Xn,wn),q=rt,me=Xn,ae=wn)},setOp:function(rt,Xn,wn){(J!==rt||Te!==Xn||Oe!==wn)&&(n.stencilOp(rt,Xn,wn),J=rt,Te=Xn,Oe=wn)},setLocked:function(rt){L=rt},setClear:function(rt){_t!==rt&&(n.clearStencil(rt),_t=rt)},reset:function(){L=!1,re=null,q=null,me=null,ae=null,J=null,Te=null,Oe=null,_t=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,M=null,E=null,A=null,T=null,C=null,x=new Ue(0,0,0),w=0,P=!1,R=null,I=null,G=null,B=null,N=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec($)[1]),z=Z>=1):$.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=Z>=2);let te=null,ye={};const be=n.getParameter(n.SCISSOR_BOX),We=n.getParameter(n.VIEWPORT),Qe=new ot().fromArray(be),Le=new ot().fromArray(We);function j(L,re,q,me){const ae=new Uint8Array(4),J=n.createTexture();n.bindTexture(L,J),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Te=0;Te<q;Te++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(re+Te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return J}const de={};de[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(Fi),Ze(!1),nt(ad),se(n.CULL_FACE),ge(Pn);function se(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function Re(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ie(L,re){return h[L]!==re?(n.bindFramebuffer(L,re),h[L]=re,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=re),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Ce(L,re){let q=g,me=!1;if(L){q=f.get(re),q===void 0&&(q=[],f.set(re,q));const ae=L.textures;if(q.length!==ae.length||q[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Te=ae.length;J<Te;J++)q[J]=n.COLOR_ATTACHMENT0+J;q.length=ae.length,me=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,me=!0);me&&n.drawBuffers(q)}function ct(L){return _!==L?(n.useProgram(L),_=L,!0):!1}const Xe={[mi]:n.FUNC_ADD,[X_]:n.FUNC_SUBTRACT,[q_]:n.FUNC_REVERSE_SUBTRACT};Xe[Y_]=n.MIN,Xe[K_]=n.MAX;const ee={[j_]:n.ZERO,[$_]:n.ONE,[Z_]:n.SRC_COLOR,[ia]:n.SRC_ALPHA,[i0]:n.SRC_ALPHA_SATURATE,[t0]:n.DST_COLOR,[Q_]:n.DST_ALPHA,[J_]:n.ONE_MINUS_SRC_COLOR,[ra]:n.ONE_MINUS_SRC_ALPHA,[n0]:n.ONE_MINUS_DST_COLOR,[e0]:n.ONE_MINUS_DST_ALPHA,[r0]:n.CONSTANT_COLOR,[s0]:n.ONE_MINUS_CONSTANT_COLOR,[o0]:n.CONSTANT_ALPHA,[a0]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(L,re,q,me,ae,J,Te,Oe,_t,rt){if(L===Pn){m===!0&&(Re(n.BLEND),m=!1);return}if(m===!1&&(se(n.BLEND),m=!0),L!==W_){if(L!==p||rt!==P){if((y!==mi||A!==mi)&&(n.blendEquation(n.FUNC_ADD),y=mi,A=mi),rt)switch(L){case Oi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ld:n.blendFunc(n.ONE,n.ONE);break;case cd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ud:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pe("WebGLState: Invalid blending: ",L);break}else switch(L){case Oi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ld:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case cd:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ud:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",L);break}M=null,E=null,T=null,C=null,x.set(0,0,0),w=0,p=L,P=rt}return}ae=ae||re,J=J||q,Te=Te||me,(re!==y||ae!==A)&&(n.blendEquationSeparate(Xe[re],Xe[ae]),y=re,A=ae),(q!==M||me!==E||J!==T||Te!==C)&&(n.blendFuncSeparate(ee[q],ee[me],ee[J],ee[Te]),M=q,E=me,T=J,C=Te),(Oe.equals(x)===!1||_t!==w)&&(n.blendColor(Oe.r,Oe.g,Oe.b,_t),x.copy(Oe),w=_t),p=L,P=!1}function Ee(L,re){L.side===en?Re(n.CULL_FACE):se(n.CULL_FACE);let q=L.side===Ot;re&&(q=!q),Ze(q),L.blending===Oi&&L.transparent===!1?ge(Pn):ge(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const me=L.stencilWrite;a.setTest(me),me&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),D(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(L){R!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),R=L)}function nt(L){L!==H_?(se(n.CULL_FACE),L!==I&&(L===ad?n.cullFace(n.BACK):L===z_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),I=L}function St(L){L!==G&&(z&&n.lineWidth(L),G=L)}function D(L,re,q){L?(se(n.POLYGON_OFFSET_FILL),(B!==re||N!==q)&&(B=re,N=q,o.getReversed()&&(re=-re),n.polygonOffset(re,q))):Re(n.POLYGON_OFFSET_FILL)}function ht(L){L?se(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function He(L){L===void 0&&(L=n.TEXTURE0+V-1),te!==L&&(n.activeTexture(L),te=L)}function it(L,re,q){q===void 0&&(te===null?q=n.TEXTURE0+V-1:q=te);let me=ye[q];me===void 0&&(me={type:void 0,texture:void 0},ye[q]=me),(me.type!==L||me.texture!==re)&&(te!==q&&(n.activeTexture(q),te=q),n.bindTexture(L,re||de[L]),me.type=L,me.texture=re)}function ce(){const L=ye[te];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ft(){try{n.compressedTexImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function b(){try{n.compressedTexImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function v(){try{n.texSubImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function F(){try{n.texSubImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function ne(){try{n.texStorage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function le(){try{n.texStorage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function X(){try{n.texImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function K(){try{n.texImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function pe(L){return d[L]!==void 0?d[L]:n.getParameter(L)}function ve(L,re){d[L]!==re&&(n.pixelStorei(L,re),d[L]=re)}function oe(L){Qe.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Qe.copy(L))}function ie(L){Le.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Le.copy(L))}function De(L,re){let q=c.get(re);q===void 0&&(q=new WeakMap,c.set(re,q));let me=q.get(L);me===void 0&&(me=n.getUniformBlockIndex(re,L.name),q.set(L,me))}function Be(L,re){const me=c.get(re).get(L);l.get(re)!==me&&(n.uniformBlockBinding(re,me,L.__bindingPointIndex),l.set(re,me))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,ye={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,M=null,E=null,A=null,T=null,C=null,x=new Ue(0,0,0),w=0,P=!1,R=null,I=null,G=null,B=null,N=null,Qe.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Re,bindFramebuffer:Ie,drawBuffers:Ce,useProgram:ct,setBlending:ge,setMaterial:Ee,setFlipSided:Ze,setCullFace:nt,setLineWidth:St,setPolygonOffset:D,setScissorTest:ht,activeTexture:He,bindTexture:it,unbindTexture:ce,compressedTexImage2D:ft,compressedTexImage3D:b,texImage2D:X,texImage3D:K,pixelStorei:ve,getParameter:pe,updateUBOMapping:De,uniformBlockBinding:Be,texStorage2D:ne,texStorage3D:le,texSubImage2D:v,texSubImage3D:F,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:oe,viewport:ie,reset:$e}}function pE(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,v){return g?new OffscreenCanvas(b,v):Ur("canvas")}function m(b,v,F){let Y=1;const Q=ft(b);if((Q.width>F||Q.height>F)&&(Y=F/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ne=Math.floor(Y*Q.width),le=Math.floor(Y*Q.height);h===void 0&&(h=_(ne,le));const X=v?_(ne,le):h;return X.width=ne,X.height=le,X.getContext("2d").drawImage(b,0,0,ne,le),Se("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ne+"x"+le+")."),X}else return"data"in b&&Se("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function p(b){return b.generateMipmaps}function y(b){n.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,v,F,Y,Q,ne=!1){if(b!==null){if(n[b]!==void 0)return n[b];Se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let le;Y&&(le=e.get("EXT_texture_norm16"),le||Se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=v;if(v===n.RED&&(F===n.FLOAT&&(X=n.R32F),F===n.HALF_FLOAT&&(X=n.R16F),F===n.UNSIGNED_BYTE&&(X=n.R8),F===n.UNSIGNED_SHORT&&le&&(X=le.R16_EXT),F===n.SHORT&&le&&(X=le.R16_SNORM_EXT)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.R8UI),F===n.UNSIGNED_SHORT&&(X=n.R16UI),F===n.UNSIGNED_INT&&(X=n.R32UI),F===n.BYTE&&(X=n.R8I),F===n.SHORT&&(X=n.R16I),F===n.INT&&(X=n.R32I)),v===n.RG&&(F===n.FLOAT&&(X=n.RG32F),F===n.HALF_FLOAT&&(X=n.RG16F),F===n.UNSIGNED_BYTE&&(X=n.RG8),F===n.UNSIGNED_SHORT&&le&&(X=le.RG16_EXT),F===n.SHORT&&le&&(X=le.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RG8UI),F===n.UNSIGNED_SHORT&&(X=n.RG16UI),F===n.UNSIGNED_INT&&(X=n.RG32UI),F===n.BYTE&&(X=n.RG8I),F===n.SHORT&&(X=n.RG16I),F===n.INT&&(X=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGB8UI),F===n.UNSIGNED_SHORT&&(X=n.RGB16UI),F===n.UNSIGNED_INT&&(X=n.RGB32UI),F===n.BYTE&&(X=n.RGB8I),F===n.SHORT&&(X=n.RGB16I),F===n.INT&&(X=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),F===n.UNSIGNED_INT&&(X=n.RGBA32UI),F===n.BYTE&&(X=n.RGBA8I),F===n.SHORT&&(X=n.RGBA16I),F===n.INT&&(X=n.RGBA32I)),v===n.RGB&&(F===n.UNSIGNED_SHORT&&le&&(X=le.RGB16_EXT),F===n.SHORT&&le&&(X=le.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),v===n.RGBA){const K=ne?ws:Ye.getTransfer(Q);F===n.FLOAT&&(X=n.RGBA32F),F===n.HALF_FLOAT&&(X=n.RGBA16F),F===n.UNSIGNED_BYTE&&(X=K===et?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&le&&(X=le.RGBA16_EXT),F===n.SHORT&&le&&(X=le.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function A(b,v){let F;return b?v===null||v===mn||v===Lr?F=n.DEPTH24_STENCIL8:v===Xt?F=n.DEPTH32F_STENCIL8:v===Pr&&(F=n.DEPTH24_STENCIL8,Se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mn||v===Lr?F=n.DEPTH_COMPONENT24:v===Xt?F=n.DEPTH_COMPONENT32F:v===Pr&&(F=n.DEPTH_COMPONENT16),F}function T(b,v){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Mt&&b.minFilter!==Et?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function C(b){const v=b.target;v.removeEventListener("dispose",C),w(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function x(b){const v=b.target;v.removeEventListener("dispose",x),R(v)}function w(b){const v=i.get(b);if(v.__webglInit===void 0)return;const F=b.source,Y=f.get(F);if(Y){const Q=Y[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(b),Object.keys(Y).length===0&&f.delete(F)}i.remove(b)}function P(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const F=b.source,Y=f.get(F);delete Y[v.__cacheKey],o.memory.textures--}function R(b){const v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Q=0;Q<v.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[Y]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=b.textures;for(let Y=0,Q=F.length;Y<Q;Y++){const ne=i.get(F[Y]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(F[Y])}i.remove(b)}let I=0;function G(){I=0}function B(){return I}function N(b){I=b}function V(){const b=I;return b>=r.maxTextures&&Se("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),I+=1,b}function z(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Z(b,v){const F=i.get(b);if(b.isVideoTexture&&it(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){const Y=b.image;if(Y===null)Se("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Se("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(F,b,v);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function $(b,v){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Re(F,b,v);return}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function te(b,v){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Re(F,b,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function ye(b,v){const F=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&F.__version!==b.version){Ie(F,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const be={[ki]:n.REPEAT,[pn]:n.CLAMP_TO_EDGE,[_s]:n.MIRRORED_REPEAT},We={[Mt]:n.NEAREST,[Sd]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[Et]:n.LINEAR,[vs]:n.LINEAR_MIPMAP_NEAREST,[Ln]:n.LINEAR_MIPMAP_LINEAR},Qe={[_0]:n.NEVER,[M0]:n.ALWAYS,[v0]:n.LESS,[tl]:n.LEQUAL,[x0]:n.EQUAL,[nl]:n.GEQUAL,[y0]:n.GREATER,[S0]:n.NOTEQUAL};function Le(b,v){if(v.type===Xt&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Et||v.magFilter===vs||v.magFilter===Cr||v.magFilter===Ln||v.minFilter===Et||v.minFilter===vs||v.minFilter===Cr||v.minFilter===Ln)&&Se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,be[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,be[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,be[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,We[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,We[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Qe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Mt||v.minFilter!==Cr&&v.minFilter!==Ln||v.type===Xt&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function j(b,v){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",C));const Y=v.source;let Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));const ne=z(v);if(ne!==b.__cacheKey){Q[ne]===void 0&&(Q[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[ne].usedTimes++;const le=Q[b.__cacheKey];le!==void 0&&(Q[b.__cacheKey].usedTimes--,le.usedTimes===0&&P(v)),b.__cacheKey=ne,b.__webglTexture=Q[ne].texture}return F}function de(b,v,F){return Math.floor(Math.floor(b/F)/v)}function se(b,v,F,Y){const ne=b.updateRanges;if(ne.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,F,Y,v.data);else{ne.sort((ve,oe)=>ve.start-oe.start);let le=0;for(let ve=1;ve<ne.length;ve++){const oe=ne[le],ie=ne[ve],De=oe.start+oe.count,Be=de(ie.start,v.width,4),$e=de(oe.start,v.width,4);ie.start<=De+1&&Be===$e&&de(ie.start+ie.count-1,v.width,4)===Be?oe.count=Math.max(oe.count,ie.start+ie.count-oe.start):(++le,ne[le]=ie)}ne.length=le+1;const X=t.getParameter(n.UNPACK_ROW_LENGTH),K=t.getParameter(n.UNPACK_SKIP_PIXELS),pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ve=0,oe=ne.length;ve<oe;ve++){const ie=ne[ve],De=Math.floor(ie.start/4),Be=Math.ceil(ie.count/4),$e=De%v.width,L=Math.floor(De/v.width),re=Be,q=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,$e,L,re,q,F,Y,v.data)}b.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,X),t.pixelStorei(n.UNPACK_SKIP_PIXELS,K),t.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function Re(b,v,F){let Y=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=n.TEXTURE_3D);const Q=j(b,v),ne=v.source;t.bindTexture(Y,b.__webglTexture,n.TEXTURE0+F);const le=i.get(ne);if(ne.version!==le.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const q=Ye.getPrimaries(Ye.workingColorSpace),me=v.colorSpace===$n?null:Ye.getPrimaries(v.colorSpace),ae=v.colorSpace===$n||q===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let K=m(v.image,!1,r.maxTextureSize);K=ce(v,K);const pe=s.convert(v.format,v.colorSpace),ve=s.convert(v.type);let oe=E(v.internalFormat,pe,ve,v.normalized,v.colorSpace,v.isVideoTexture);Le(Y,v);let ie;const De=v.mipmaps,Be=v.isVideoTexture!==!0,$e=le.__version===void 0||Q===!0,L=ne.dataReady,re=T(v,K);if(v.isDepthTexture)oe=A(v.format===_i,v.type),$e&&(Be?t.texStorage2D(n.TEXTURE_2D,1,oe,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,oe,K.width,K.height,0,pe,ve,null));else if(v.isDataTexture)if(De.length>0){Be&&$e&&t.texStorage2D(n.TEXTURE_2D,re,oe,De[0].width,De[0].height);for(let q=0,me=De.length;q<me;q++)ie=De[q],Be?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ie.width,ie.height,pe,ve,ie.data):t.texImage2D(n.TEXTURE_2D,q,oe,ie.width,ie.height,0,pe,ve,ie.data);v.generateMipmaps=!1}else Be?($e&&t.texStorage2D(n.TEXTURE_2D,re,oe,K.width,K.height),L&&se(v,K,pe,ve)):t.texImage2D(n.TEXTURE_2D,0,oe,K.width,K.height,0,pe,ve,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Be&&$e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,oe,De[0].width,De[0].height,K.depth);for(let q=0,me=De.length;q<me;q++)if(ie=De[q],v.format!==qt)if(pe!==null)if(Be){if(L)if(v.layerUpdates.size>0){const ae=Dh(ie.width,ie.height,v.format,v.type);for(const J of v.layerUpdates){const Te=ie.data.subarray(J*ae/ie.data.BYTES_PER_ELEMENT,(J+1)*ae/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,J,ie.width,ie.height,1,pe,Te)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ie.width,ie.height,K.depth,pe,ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,oe,ie.width,ie.height,K.depth,0,ie.data,0,0);else Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ie.width,ie.height,K.depth,pe,ve,ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,oe,ie.width,ie.height,K.depth,0,pe,ve,ie.data)}else{Be&&$e&&t.texStorage2D(n.TEXTURE_2D,re,oe,De[0].width,De[0].height);for(let q=0,me=De.length;q<me;q++)ie=De[q],v.format!==qt?pe!==null?Be?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,ie.width,ie.height,pe,ie.data):t.compressedTexImage2D(n.TEXTURE_2D,q,oe,ie.width,ie.height,0,ie.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ie.width,ie.height,pe,ve,ie.data):t.texImage2D(n.TEXTURE_2D,q,oe,ie.width,ie.height,0,pe,ve,ie.data)}else if(v.isDataArrayTexture)if(Be){if($e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,oe,K.width,K.height,K.depth),L)if(v.layerUpdates.size>0){const q=Dh(K.width,K.height,v.format,v.type);for(const me of v.layerUpdates){const ae=K.data.subarray(me*q/K.data.BYTES_PER_ELEMENT,(me+1)*q/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,K.width,K.height,1,pe,ve,ae)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,pe,ve,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,oe,K.width,K.height,K.depth,0,pe,ve,K.data);else if(v.isData3DTexture)Be?($e&&t.texStorage3D(n.TEXTURE_3D,re,oe,K.width,K.height,K.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,pe,ve,K.data)):t.texImage3D(n.TEXTURE_3D,0,oe,K.width,K.height,K.depth,0,pe,ve,K.data);else if(v.isFramebufferTexture){if($e)if(Be)t.texStorage2D(n.TEXTURE_2D,re,oe,K.width,K.height);else{let q=K.width,me=K.height;for(let ae=0;ae<re;ae++)t.texImage2D(n.TEXTURE_2D,ae,oe,q,me,0,pe,ve,null),q>>=1,me>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const q=n.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),K.parentNode!==q){q.appendChild(K),d.add(v),q.onpaint=Oe=>{const _t=Oe.changedElements;for(const rt of d)_t.includes(rt.image)&&(rt.needsUpdate=!0)},q.requestPaint();return}const me=0,ae=n.RGBA,J=n.RGBA,Te=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,me,ae,J,Te,K),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(De.length>0){if(Be&&$e){const q=ft(De[0]);t.texStorage2D(n.TEXTURE_2D,re,oe,q.width,q.height)}for(let q=0,me=De.length;q<me;q++)ie=De[q],Be?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,pe,ve,ie):t.texImage2D(n.TEXTURE_2D,q,oe,pe,ve,ie);v.generateMipmaps=!1}else if(Be){if($e){const q=ft(K);t.texStorage2D(n.TEXTURE_2D,re,oe,q.width,q.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,ve,K)}else t.texImage2D(n.TEXTURE_2D,0,oe,pe,ve,K);p(v)&&y(Y),le.__version=ne.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Ie(b,v,F){if(v.image.length!==6)return;const Y=j(b,v),Q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const ne=i.get(Q);if(Q.version!==ne.__version||Y===!0){t.activeTexture(n.TEXTURE0+F);const le=Ye.getPrimaries(Ye.workingColorSpace),X=v.colorSpace===$n?null:Ye.getPrimaries(v.colorSpace),K=v.colorSpace===$n||le===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const pe=v.isCompressedTexture||v.image[0].isCompressedTexture,ve=v.image[0]&&v.image[0].isDataTexture,oe=[];for(let J=0;J<6;J++)!pe&&!ve?oe[J]=m(v.image[J],!0,r.maxCubemapSize):oe[J]=ve?v.image[J].image:v.image[J],oe[J]=ce(v,oe[J]);const ie=oe[0],De=s.convert(v.format,v.colorSpace),Be=s.convert(v.type),$e=E(v.internalFormat,De,Be,v.normalized,v.colorSpace),L=v.isVideoTexture!==!0,re=ne.__version===void 0||Y===!0,q=Q.dataReady;let me=T(v,ie);Le(n.TEXTURE_CUBE_MAP,v);let ae;if(pe){L&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,$e,ie.width,ie.height);for(let J=0;J<6;J++){ae=oe[J].mipmaps;for(let Te=0;Te<ae.length;Te++){const Oe=ae[Te];v.format!==qt?De!==null?L?q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,Oe.width,Oe.height,De,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,$e,Oe.width,Oe.height,0,Oe.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,Oe.width,Oe.height,De,Be,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,$e,Oe.width,Oe.height,0,De,Be,Oe.data)}}}else{if(ae=v.mipmaps,L&&re){ae.length>0&&me++;const J=ft(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,$e,J.width,J.height)}for(let J=0;J<6;J++)if(ve){L?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,oe[J].width,oe[J].height,De,Be,oe[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$e,oe[J].width,oe[J].height,0,De,Be,oe[J].data);for(let Te=0;Te<ae.length;Te++){const _t=ae[Te].image[J].image;L?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,_t.width,_t.height,De,Be,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,$e,_t.width,_t.height,0,De,Be,_t.data)}}else{L?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,De,Be,oe[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$e,De,Be,oe[J]);for(let Te=0;Te<ae.length;Te++){const Oe=ae[Te];L?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,De,Be,Oe.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,$e,De,Be,Oe.image[J])}}}p(v)&&y(n.TEXTURE_CUBE_MAP),ne.__version=Q.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Ce(b,v,F,Y,Q,ne){const le=s.convert(F.format,F.colorSpace),X=s.convert(F.type),K=E(F.internalFormat,le,X,F.normalized,F.colorSpace),pe=i.get(v),ve=i.get(F);if(ve.__renderTarget=v,!pe.__hasExternalTextures){const oe=Math.max(1,v.width>>ne),ie=Math.max(1,v.height>>ne);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ne,K,oe,ie,v.depth,0,le,X,null):t.texImage2D(Q,ne,K,oe,ie,0,le,X,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),He(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Q,ve.__webglTexture,0,ht(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Q,ve.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(b,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){const Y=v.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,ne=A(v.stencilBuffer,Q),le=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;He(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht(v),ne,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht(v),ne,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ne,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,b)}else{const Y=v.textures;for(let Q=0;Q<Y.length;Q++){const ne=Y[Q],le=s.convert(ne.format,ne.colorSpace),X=s.convert(ne.type),K=E(ne.internalFormat,le,X,ne.normalized,ne.colorSpace);He(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht(v),K,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht(v),K,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xe(b,v,F){const Y=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(n.TEXTURE_CUBE_MAP,v.depthTexture);const pe=s.convert(v.depthTexture.format),ve=s.convert(v.depthTexture.type);let oe;v.depthTexture.format===Dn?oe=n.DEPTH_COMPONENT24:v.depthTexture.format===_i&&(oe=n.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,oe,v.width,v.height,0,pe,ve,null)}}else Z(v.depthTexture,0);const ne=Q.__webglTexture,le=ht(v),X=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,K=v.depthTexture.format===_i?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Dn)He(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,X,ne,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,K,X,ne,0);else if(v.depthTexture.format===_i)He(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,X,ne,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,K,X,ne,0);else throw new Error("Unknown depthTexture format")}function ee(b){const v=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Y}if(b.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let Y=0;Y<6;Y++)Xe(v.__webglFramebuffer[Y],b,Y);else{const Y=b.texture.mipmaps;Y&&Y.length>0?Xe(v.__webglFramebuffer[0],b,0):Xe(v.__webglFramebuffer,b,0)}else if(F){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=n.createRenderbuffer(),ct(v.__webglDepthbuffer[Y],b,!1);else{const Q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=v.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ne)}}else{const Y=b.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ct(v.__webglDepthbuffer,b,!1);else{const Q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ne)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(b,v,F){const Y=i.get(b);v!==void 0&&Ce(Y.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&ee(b)}function Ee(b){const v=b.texture,F=i.get(b),Y=i.get(v);b.addEventListener("dispose",x);const Q=b.textures,ne=b.isWebGLCubeRenderTarget===!0,le=Q.length>1;if(le||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=v.version,o.memory.textures++),ne){F.__webglFramebuffer=[];for(let X=0;X<6;X++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[X]=[];for(let K=0;K<v.mipmaps.length;K++)F.__webglFramebuffer[X][K]=n.createFramebuffer()}else F.__webglFramebuffer[X]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let X=0;X<v.mipmaps.length;X++)F.__webglFramebuffer[X]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(le)for(let X=0,K=Q.length;X<K;X++){const pe=i.get(Q[X]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&He(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let X=0;X<Q.length;X++){const K=Q[X];F.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[X]);const pe=s.convert(K.format,K.colorSpace),ve=s.convert(K.type),oe=E(K.internalFormat,pe,ve,K.normalized,K.colorSpace,b.isXRRenderTarget===!0),ie=ht(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,oe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,F.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Le(n.TEXTURE_CUBE_MAP,v);for(let X=0;X<6;X++)if(v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Ce(F.__webglFramebuffer[X][K],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,K);else Ce(F.__webglFramebuffer[X],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(v)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let X=0,K=Q.length;X<K;X++){const pe=Q[X],ve=i.get(pe);let oe=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,ve.__webglTexture),Le(oe,pe),Ce(F.__webglFramebuffer,b,pe,n.COLOR_ATTACHMENT0+X,oe,0),p(pe)&&y(oe)}t.unbindTexture()}else{let X=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(X=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(X,Y.__webglTexture),Le(X,v),v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Ce(F.__webglFramebuffer[K],b,v,n.COLOR_ATTACHMENT0,X,K);else Ce(F.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,X,0);p(v)&&y(X),t.unbindTexture()}b.depthBuffer&&ee(b)}function Ze(b){const v=b.textures;for(let F=0,Y=v.length;F<Y;F++){const Q=v[F];if(p(Q)){const ne=M(b),le=i.get(Q).__webglTexture;t.bindTexture(ne,le),y(ne),t.unbindTexture()}}}const nt=[],St=[];function D(b){if(b.samples>0){if(He(b)===!1){const v=b.textures,F=b.width,Y=b.height;let Q=n.COLOR_BUFFER_BIT;const ne=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(b),X=v.length>1;if(X)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const K=b.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),X){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[pe]);const ve=i.get(v[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,F,Y,0,0,F,Y,Q,n.NEAREST),l===!0&&(nt.length=0,St.length=0,nt.push(n.COLOR_ATTACHMENT0+pe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(nt.push(ne),St.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,St)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,le.__webglColorRenderbuffer[pe]);const ve=i.get(v[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function ht(b){return Math.min(r.maxSamples,b.samples)}function He(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function it(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function ce(b,v){const F=b.colorSpace,Y=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==kt&&F!==$n&&(Ye.getTransfer(F)===et?(Y!==qt||Q!==Bt)&&Se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",F)),v}function ft(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.getTextureUnits=B,this.setTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=$,this.setTexture3D=te,this.setTextureCube=ye,this.rebindTextures=ge,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function mE(n,e){function t(i,r=$n){let s;const o=Ye.getTransfer(r);if(i===Bt)return n.UNSIGNED_BYTE;if(i===ma)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ga)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Td)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Md)return n.BYTE;if(i===Ed)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===pa)return n.INT;if(i===mn)return n.UNSIGNED_INT;if(i===Xt)return n.FLOAT;if(i===In)return n.HALF_FLOAT;if(i===wd)return n.ALPHA;if(i===Ad)return n.RGB;if(i===qt)return n.RGBA;if(i===Dn)return n.DEPTH_COMPONENT;if(i===_i)return n.DEPTH_STENCIL;if(i===_a)return n.RED;if(i===va)return n.RED_INTEGER;if(i===vi)return n.RG;if(i===xa)return n.RG_INTEGER;if(i===ya)return n.RGBA_INTEGER;if(i===xs||i===ys||i===Ss||i===Ms)if(o===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ss)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ms)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sa||i===Ma||i===Ea||i===ba)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ma)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ea)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ba)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ta||i===wa||i===Aa||i===Ra||i===Ca||i===Es||i===Pa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ta||i===wa)return o===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Aa)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ra)return s.COMPRESSED_R11_EAC;if(i===Ca)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Es)return s.COMPRESSED_RG11_EAC;if(i===Pa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===La||i===Ia||i===Da||i===Na||i===Ua||i===Oa||i===Fa||i===Ba||i===ka||i===Va||i===Ha||i===za||i===Ga||i===Wa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===La)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ia)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Da)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Na)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ua)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oa)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fa)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ba)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ka)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Va)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ha)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===za)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ga)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wa)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xa||i===qa||i===Ya)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xa)return o===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ya)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ka||i===ja||i===bs||i===$a)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ka)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$a)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const gE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_E=`
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

}`;class vE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new vh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yn({vertexShader:gE,fragmentShader:_E,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new eo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xE extends Zn{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new vE,p={},y=t.getContextAttributes();let M=null,E=null;const A=[],T=[],C=new Ke;let x=null;const w=new Ut;w.viewport=new ot;const P=new Ut;P.viewport=new ot;const R=[w,P],I=new jv;let G=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let de=A[j];return de===void 0&&(de=new hl,A[j]=de),de.getTargetRaySpace()},this.getControllerGrip=function(j){let de=A[j];return de===void 0&&(de=new hl,A[j]=de),de.getGripSpace()},this.getHand=function(j){let de=A[j];return de===void 0&&(de=new hl,A[j]=de),de.getHandSpace()};function N(j){const de=T.indexOf(j.inputSource);if(de===-1)return;const se=A[de];se!==void 0&&(se.update(j.inputSource,j.frame,c||o),se.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",z);for(let j=0;j<A.length;j++){const de=T[j];de!==null&&(T[j]=null,A[j].disconnect(de))}G=null,B=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(M),f=null,h=null,d=null,r=null,E=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&Se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",V),r.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Re=null,Ie=null;y.depth&&(Ie=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=y.stencil?_i:Dn,Re=y.stencil?Lr:mn);const Ce={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new _n(h.textureWidth,h.textureHeight,{format:qt,type:Bt,depthTexture:new nr(h.textureWidth,h.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new _n(f.framebufferWidth,f.framebufferHeight,{format:qt,type:Bt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(j){for(let de=0;de<j.removed.length;de++){const se=j.removed[de],Re=T.indexOf(se);Re>=0&&(T[Re]=null,A[Re].disconnect(se))}for(let de=0;de<j.added.length;de++){const se=j.added[de];let Re=T.indexOf(se);if(Re===-1){for(let Ce=0;Ce<A.length;Ce++)if(Ce>=T.length){T.push(se),Re=Ce;break}else if(T[Ce]===null){T[Ce]=se,Re=Ce;break}if(Re===-1)break}const Ie=A[Re];Ie&&Ie.connect(se)}}const Z=new O,$=new O;function te(j,de,se){Z.setFromMatrixPosition(de.matrixWorld),$.setFromMatrixPosition(se.matrixWorld);const Re=Z.distanceTo($),Ie=de.projectionMatrix.elements,Ce=se.projectionMatrix.elements,ct=Ie[14]/(Ie[10]-1),Xe=Ie[14]/(Ie[10]+1),ee=(Ie[9]+1)/Ie[5],ge=(Ie[9]-1)/Ie[5],Ee=(Ie[8]-1)/Ie[0],Ze=(Ce[8]+1)/Ce[0],nt=ct*Ee,St=ct*Ze,D=Re/(-Ee+Ze),ht=D*-Ee;if(de.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ht),j.translateZ(D),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ie[10]===-1)j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const He=ct+D,it=Xe+D,ce=nt-ht,ft=St+(Re-ht),b=ee*Xe/it*He,v=ge*Xe/it*He;j.projectionMatrix.makePerspective(ce,ft,b,v,He,it),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ye(j,de){de===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(de.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let de=j.near,se=j.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(se=m.depthFar)),I.near=P.near=w.near=de,I.far=P.far=w.far=se,(G!==I.near||B!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),G=I.near,B=I.far),I.layers.mask=j.layers.mask|6,w.layers.mask=I.layers.mask&-5,P.layers.mask=I.layers.mask&-3;const Re=j.parent,Ie=I.cameras;ye(I,Re);for(let Ce=0;Ce<Ie.length;Ce++)ye(Ie[Ce],Re);Ie.length===2?te(I,w,P):I.projectionMatrix.copy(w.projectionMatrix),be(j,I,Re)};function be(j,de,se){se===null?j.matrix.copy(de.matrixWorld):(j.matrix.copy(se.matrixWorld),j.matrix.invert(),j.matrix.multiply(de.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Gi*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(j){return p[j]};let We=null;function Qe(j,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const se=u.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let Re=!1;se.length!==I.cameras.length&&(I.cameras.length=0,Re=!0);for(let Xe=0;Xe<se.length;Xe++){const ee=se[Xe];let ge=null;if(f!==null)ge=f.getViewport(ee);else{const Ze=d.getViewSubImage(h,ee);ge=Ze.viewport,Xe===0&&(e.setRenderTargetTextures(E,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(E))}let Ee=R[Xe];Ee===void 0&&(Ee=new Ut,Ee.layers.enable(Xe),Ee.viewport=new ot,R[Xe]=Ee),Ee.matrix.fromArray(ee.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(ee.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(ge.x,ge.y,ge.width,ge.height),Xe===0&&(I.matrix.copy(Ee.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Re===!0&&I.cameras.push(Ee)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const Xe=d.getDepthInformation(se[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,r.renderState)}if(Ie&&Ie.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let Xe=0;Xe<se.length;Xe++){const ee=se[Xe].camera;if(ee){let ge=p[ee];ge||(ge=new vh,p[ee]=ge);const Ee=d.getCameraImage(ee);ge.sourceTexture=Ee}}}}for(let se=0;se<A.length;se++){const Re=T[se],Ie=A[se];Re!==null&&Ie!==void 0&&Ie.update(Re,de,c||o)}We&&We(j,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const Le=new Nh;Le.setAnimationLoop(Qe),this.setAnimationLoop=function(j){We=j},this.dispose=function(){}}}const yE=new Ve,df=new Ne;df.set(-1,0,0,0,1,0,0,0,1);function SE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,yh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,M,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ot&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ot&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,E=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(yE.makeRotationFromEuler(E)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(df),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ME(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const E=M.program;i.uniformBlockBinding(y,E)}function c(y,M){let E=r[y.id];E===void 0&&(g(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",m));const A=M.program;i.updateUBOMapping(y,A);const T=e.render.frame;s[y.id]!==T&&(h(y),s[y.id]=T)}function u(y){const M=d();y.__bindingPointIndex=M;const E=n.createBuffer(),A=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const M=r[y.id],E=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,C=E.length;T<C;T++){const x=Array.isArray(E[T])?E[T]:[E[T]];for(let w=0,P=x.length;w<P;w++){const R=x[w];if(f(R,T,w,A)===!0){const I=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let N=0;N<G.length;N++){const V=G[N],z=_(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,I+B,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):ArrayBuffer.isView(V)?R.__data.set(new V.constructor(V.buffer,V.byteOffset,R.__data.length)):(V.toArray(R.__data,B),B+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,M,E,A){const T=y.value,C=M+"_"+E;if(A[C]===void 0)return typeof T=="number"||typeof T=="boolean"?A[C]=T:ArrayBuffer.isView(T)?A[C]=T.slice():A[C]=T.clone(),!0;{const x=A[C];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return A[C]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function g(y){const M=y.uniforms;let E=0;const A=16;for(let C=0,x=M.length;C<x;C++){const w=Array.isArray(M[C])?M[C]:[M[C]];for(let P=0,R=w.length;P<R;P++){const I=w[P],G=Array.isArray(I.value)?I.value:[I.value];for(let B=0,N=G.length;B<N;B++){const V=G[B],z=_(V),Z=E%A,$=Z%z.boundary,te=Z+$;E+=$,te!==0&&A-te<z.storage&&(E+=A-te),I.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=z.storage}}}const T=E%A;return T>0&&(E+=A-T),y.__size=E,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Se("WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}const EE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function bE(){return bn===null&&(bn=new Ll(EE,16,16,vi,In),bn.name="DFG_LUT",bn.minFilter=Et,bn.magFilter=Et,bn.wrapS=pn,bn.wrapT=pn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class TE{constructor(e={}){const{canvas:t=T0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Bt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=f,m=new Set([ya,xa,va]),p=new Set([Bt,mn,Pr,Lr,ma,ga]),y=new Uint32Array(4),M=new Int32Array(4),E=new O;let A=null,T=null;const C=[],x=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let R=!1,I=null;this._outputColorSpace=Rt;let G=0,B=0,N=null,V=-1,z=null;const Z=new ot,$=new ot;let te=null;const ye=new Ue(0);let be=0,We=t.width,Qe=t.height,Le=1,j=null,de=null;const se=new ot(0,0,We,Qe),Re=new ot(0,0,We,Qe);let Ie=!1;const Ce=new Ul;let ct=!1,Xe=!1;const ee=new Ve,ge=new O,Ee=new ot,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function St(){return N===null?Le:1}let D=i;function ht(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${na}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),D===null){const U="webgl2";if(D=ht(U,S),D===null)throw ht(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw Pe("WebGLRenderer: "+S.message),S}let He,it,ce,ft,b,v,F,Y,Q,ne,le,X,K,pe,ve,oe,ie,De,Be,$e,L,re,q;function me(){He=new bS(D),He.init(),L=new mE(D,He),it=new gS(D,He,e,L),ce=new fE(D,He),it.reversedDepthBuffer&&h&&ce.buffers.depth.setReversed(!0),ft=new AS(D),b=new QM,v=new pE(D,He,ce,b,it,L,ft),F=new ES(P),Y=new dx(D),re=new pS(D,Y),Q=new TS(D,Y,ft,re),ne=new CS(D,Q,Y,re,ft),De=new RS(D,it,v),ve=new _S(b),le=new JM(P,F,He,it,re,ve),X=new SE(P,b),K=new tE,pe=new aE(He),ie=new fS(P,F,ce,ne,g,l),oe=new hE(P,ne,it),q=new ME(D,ft,it,ce),Be=new mS(D,He,ft),$e=new wS(D,He,ft),ft.programs=le.programs,P.capabilities=it,P.extensions=He,P.properties=b,P.renderLists=K,P.shadowMap=oe,P.state=ce,P.info=ft}me(),_!==Bt&&(w=new LS(_,t.width,t.height,r,s));const ae=new xE(P,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=He.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=He.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(S){S!==void 0&&(Le=S,this.setSize(We,Qe,!1))},this.getSize=function(S){return S.set(We,Qe)},this.setSize=function(S,U,W=!0){if(ae.isPresenting){Se("WebGLRenderer: Can't change size while VR device is presenting.");return}We=S,Qe=U,t.width=Math.floor(S*Le),t.height=Math.floor(U*Le),W===!0&&(t.style.width=S+"px",t.style.height=U+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(We*Le,Qe*Le).floor()},this.setDrawingBufferSize=function(S,U,W){We=S,Qe=U,Le=W,t.width=Math.floor(S*W),t.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(_===Bt){Pe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Se("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(Z)},this.getViewport=function(S){return S.copy(se)},this.setViewport=function(S,U,W,k){S.isVector4?se.set(S.x,S.y,S.z,S.w):se.set(S,U,W,k),ce.viewport(Z.copy(se).multiplyScalar(Le).round())},this.getScissor=function(S){return S.copy(Re)},this.setScissor=function(S,U,W,k){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,U,W,k),ce.scissor($.copy(Re).multiplyScalar(Le).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(S){ce.setScissorTest(Ie=S)},this.setOpaqueSort=function(S){j=S},this.setTransparentSort=function(S){de=S},this.getClearColor=function(S){return S.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,W=!0){let k=0;if(S){let H=!1;if(N!==null){const fe=N.texture.format;H=m.has(fe)}if(H){const fe=N.texture.type,xe=p.has(fe),he=ie.getClearColor(),Me=ie.getClearAlpha(),we=he.r,Fe=he.g,ze=he.b;xe?(y[0]=we,y[1]=Fe,y[2]=ze,y[3]=Me,D.clearBufferuiv(D.COLOR,0,y)):(M[0]=we,M[1]=Fe,M[2]=ze,M[3]=Me,D.clearBufferiv(D.COLOR,0,M))}else k|=D.COLOR_BUFFER_BIT}U&&(k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),I=S},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),ie.dispose(),K.dispose(),pe.dispose(),b.dispose(),F.dispose(),ne.dispose(),re.dispose(),q.dispose(),le.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Qf),ae.removeEventListener("sessionend",ep),Ri.stop()};function J(S){S.preventDefault(),As("WebGLRenderer: Context Lost."),R=!0}function Te(){As("WebGLRenderer: Context Restored."),R=!1;const S=ft.autoReset,U=oe.enabled,W=oe.autoUpdate,k=oe.needsUpdate,H=oe.type;me(),ft.autoReset=S,oe.enabled=U,oe.autoUpdate=W,oe.needsUpdate=k,oe.type=H}function Oe(S){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function _t(S){const U=S.target;U.removeEventListener("dispose",_t),rt(U)}function rt(S){Xn(S),b.remove(S)}function Xn(S){const U=b.get(S).programs;U!==void 0&&(U.forEach(function(W){le.releaseProgram(W)}),S.isShaderMaterial&&le.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,W,k,H,fe){U===null&&(U=Ze);const xe=H.isMesh&&H.matrixWorld.determinant()<0,he=CT(S,U,W,k,H);ce.setMaterial(k,xe);let Me=W.index,we=1;if(k.wireframe===!0){if(Me=Q.getWireframeAttribute(W),Me===void 0)return;we=2}const Fe=W.drawRange,ze=W.attributes.position;let Ae=Fe.start*we,st=(Fe.start+Fe.count)*we;fe!==null&&(Ae=Math.max(Ae,fe.start*we),st=Math.min(st,(fe.start+fe.count)*we)),Me!==null?(Ae=Math.max(Ae,0),st=Math.min(st,Me.count)):ze!=null&&(Ae=Math.max(Ae,0),st=Math.min(st,ze.count));const vt=st-Ae;if(vt<0||vt===1/0)return;re.setup(H,k,he,W,Me);let pt,at=Be;if(Me!==null&&(pt=Y.get(Me),at=$e,at.setIndex(pt)),H.isMesh)k.wireframe===!0?(ce.setLineWidth(k.wireframeLinewidth*St()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(H.isLine){let Lt=k.linewidth;Lt===void 0&&(Lt=1),ce.setLineWidth(Lt*St()),H.isLineSegments?at.setMode(D.LINES):H.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else H.isPoints?at.setMode(D.POINTS):H.isSprite&&at.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(He.get("WEBGL_multi_draw"))at.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Lt=H._multiDrawStarts,_e=H._multiDrawCounts,Gt=H._multiDrawCount,je=Me?Y.get(Me).bytesPerElement:1,Jt=b.get(k).currentProgram.getUniforms();for(let An=0;An<Gt;An++)Jt.setValue(D,"_gl_DrawID",An),at.render(Lt[An]/je,_e[An])}else if(H.isInstancedMesh)at.renderInstances(Ae,vt,H.count);else if(W.isInstancedBufferGeometry){const Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_e=Math.min(W.instanceCount,Lt);at.renderInstances(Ae,vt,_e)}else at.render(Ae,vt)};function wn(S,U,W){S.transparent===!0&&S.side===en&&S.forceSinglePass===!1?(S.side=Ot,S.needsUpdate=!0,xo(S,U,W),S.side=hn,S.needsUpdate=!0,xo(S,U,W),S.side=en):xo(S,U,W)}this.compile=function(S,U,W=null){W===null&&(W=S),T=pe.get(W),T.init(U),x.push(T),W.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),S!==W&&S.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();const k=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const fe=H.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){const he=fe[xe];wn(he,W,H),k.add(he)}else wn(fe,W,H),k.add(fe)}),T=x.pop(),k},this.compileAsync=function(S,U,W=null){const k=this.compile(S,U,W);return new Promise(H=>{function fe(){if(k.forEach(function(xe){b.get(xe).currentProgram.isReady()&&k.delete(xe)}),k.size===0){H(S);return}setTimeout(fe,10)}He.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Sc=null;function AT(S){Sc&&Sc(S)}function Qf(){Ri.stop()}function ep(){Ri.start()}const Ri=new Nh;Ri.setAnimationLoop(AT),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(S){Sc=S,ae.setAnimationLoop(S),S===null?Ri.stop():Ri.start()},ae.addEventListener("sessionstart",Qf),ae.addEventListener("sessionend",ep),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;I!==null&&I.renderStart(S,U);const W=ae.enabled===!0&&ae.isPresenting===!0,k=w!==null&&(N===null||W)&&w.begin(P,N);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,U,N),T=pe.get(S,x.length),T.init(U),T.state.textureUnits=v.getTextureUnits(),x.push(T),ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ce.setFromProjectionMatrix(ee,gn,U.reversedDepth),Xe=this.localClippingEnabled,ct=ve.init(this.clippingPlanes,Xe),A=K.get(S,C.length),A.init(),C.push(A),ae.enabled===!0&&ae.isPresenting===!0){const xe=P.xr.getDepthSensingMesh();xe!==null&&Mc(xe,U,-1/0,P.sortObjects)}Mc(S,U,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(j,de),nt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,nt&&ie.addToRenderList(A,S),this.info.render.frame++,ct===!0&&ve.beginShadows();const H=T.state.shadowsArray;if(oe.render(H,S,U),ct===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&w.hasRenderPass())===!1){const xe=A.opaque,he=A.transmissive;if(T.setupLights(),U.isArrayCamera){const Me=U.cameras;if(he.length>0)for(let we=0,Fe=Me.length;we<Fe;we++){const ze=Me[we];np(xe,he,S,ze)}nt&&ie.render(S);for(let we=0,Fe=Me.length;we<Fe;we++){const ze=Me[we];tp(A,S,ze,ze.viewport)}}else he.length>0&&np(xe,he,S,U),nt&&ie.render(S),tp(A,S,U)}N!==null&&B===0&&(v.updateMultisampleRenderTarget(N),v.updateRenderTargetMipmap(N)),k&&w.end(P),S.isScene===!0&&S.onAfterRender(P,S,U),re.resetDefaultState(),V=-1,z=null,x.pop(),x.length>0?(T=x[x.length-1],v.setTextureUnits(T.state.textureUnits),ct===!0&&ve.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,I!==null&&I.renderEnd()};function Mc(S,U,W,k){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ce.intersectsSprite(S)){k&&Ee.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ee);const xe=ne.update(S),he=S.material;he.visible&&A.push(S,xe,he,W,Ee.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ce.intersectsObject(S))){const xe=ne.update(S),he=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ee.copy(S.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ee.copy(xe.boundingSphere.center)),Ee.applyMatrix4(S.matrixWorld).applyMatrix4(ee)),Array.isArray(he)){const Me=xe.groups;for(let we=0,Fe=Me.length;we<Fe;we++){const ze=Me[we],Ae=he[ze.materialIndex];Ae&&Ae.visible&&A.push(S,xe,Ae,W,Ee.z,ze)}}else he.visible&&A.push(S,xe,he,W,Ee.z,null)}}const fe=S.children;for(let xe=0,he=fe.length;xe<he;xe++)Mc(fe[xe],U,W,k)}function tp(S,U,W,k){const{opaque:H,transmissive:fe,transparent:xe}=S;T.setupLightsView(W),ct===!0&&ve.setGlobalState(P.clippingPlanes,W),k&&ce.viewport(Z.copy(k)),H.length>0&&vo(H,U,W),fe.length>0&&vo(fe,U,W),xe.length>0&&vo(xe,U,W),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function np(S,U,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){const Ae=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new _n(1,1,{generateMipmaps:!0,type:Ae?In:Bt,minFilter:Ln,samples:Math.max(4,it.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const fe=T.state.transmissionRenderTarget[k.id],xe=k.viewport||Z;fe.setSize(xe.z*P.transmissionResolutionScale,xe.w*P.transmissionResolutionScale);const he=P.getRenderTarget(),Me=P.getActiveCubeFace(),we=P.getActiveMipmapLevel();P.setRenderTarget(fe),P.getClearColor(ye),be=P.getClearAlpha(),be<1&&P.setClearColor(16777215,.5),P.clear(),nt&&ie.render(W);const Fe=P.toneMapping;P.toneMapping=fn;const ze=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),ct===!0&&ve.setGlobalState(P.clippingPlanes,k),vo(S,W,k),v.updateMultisampleRenderTarget(fe),v.updateRenderTargetMipmap(fe),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let st=0,vt=U.length;st<vt;st++){const pt=U[st],{object:at,geometry:Lt,material:_e,group:Gt}=pt;if(_e.side===en&&at.layers.test(k.layers)){const je=_e.side;_e.side=Ot,_e.needsUpdate=!0,ip(at,W,k,Lt,_e,Gt),_e.side=je,_e.needsUpdate=!0,Ae=!0}}Ae===!0&&(v.updateMultisampleRenderTarget(fe),v.updateRenderTargetMipmap(fe))}P.setRenderTarget(he,Me,we),P.setClearColor(ye,be),ze!==void 0&&(k.viewport=ze),P.toneMapping=Fe}function vo(S,U,W){const k=U.isScene===!0?U.overrideMaterial:null;for(let H=0,fe=S.length;H<fe;H++){const xe=S[H],{object:he,geometry:Me,group:we}=xe;let Fe=xe.material;Fe.allowOverride===!0&&k!==null&&(Fe=k),he.layers.test(W.layers)&&ip(he,U,W,Me,Fe,we)}}function ip(S,U,W,k,H,fe){S.onBeforeRender(P,U,W,k,H,fe),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(P,U,W,k,S,fe),H.transparent===!0&&H.side===en&&H.forceSinglePass===!1?(H.side=Ot,H.needsUpdate=!0,P.renderBufferDirect(W,U,k,H,S,fe),H.side=hn,H.needsUpdate=!0,P.renderBufferDirect(W,U,k,H,S,fe),H.side=en):P.renderBufferDirect(W,U,k,H,S,fe),S.onAfterRender(P,U,W,k,H,fe)}function xo(S,U,W){U.isScene!==!0&&(U=Ze);const k=b.get(S),H=T.state.lights,fe=T.state.shadowsArray,xe=H.state.version,he=le.getParameters(S,H.state,fe,U,W,T.state.lightProbeGridArray),Me=le.getProgramCacheKey(he);let we=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;const Fe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=F.get(S.envMap||k.environment,Fe),k.envMapRotation=k.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,we===void 0&&(S.addEventListener("dispose",_t),we=new Map,k.programs=we);let ze=we.get(Me);if(ze!==void 0){if(k.currentProgram===ze&&k.lightsStateVersion===xe)return sp(S,he),ze}else he.uniforms=le.getUniforms(S),I!==null&&S.isNodeMaterial&&I.build(S,W,he),S.onBeforeCompile(he,P),ze=le.acquireProgram(he,Me),we.set(Me,ze),k.uniforms=he.uniforms;const Ae=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=ve.uniform),sp(S,he),k.needsLights=LT(S),k.lightsStateVersion=xe,k.needsLights&&(Ae.ambientLightColor.value=H.state.ambient,Ae.lightProbe.value=H.state.probe,Ae.directionalLights.value=H.state.directional,Ae.directionalLightShadows.value=H.state.directionalShadow,Ae.spotLights.value=H.state.spot,Ae.spotLightShadows.value=H.state.spotShadow,Ae.rectAreaLights.value=H.state.rectArea,Ae.ltc_1.value=H.state.rectAreaLTC1,Ae.ltc_2.value=H.state.rectAreaLTC2,Ae.pointLights.value=H.state.point,Ae.pointLightShadows.value=H.state.pointShadow,Ae.hemisphereLights.value=H.state.hemi,Ae.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ae.spotLightMatrix.value=H.state.spotLightMatrix,Ae.spotLightMap.value=H.state.spotLightMap,Ae.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=ze,k.uniformsList=null,ze}function rp(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=lo.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function sp(S,U){const W=b.get(S);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function RT(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;E.setFromMatrixPosition(U.matrixWorld);for(let W=0,k=S.length;W<k;W++){const H=S[W];if(H.texture!==null&&H.boundingBox.containsPoint(E))return H}return null}function CT(S,U,W,k,H){U.isScene!==!0&&(U=Ze),v.resetTextureUnits();const fe=U.fog,xe=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,he=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ye.workingColorSpace,Me=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,we=F.get(k.envMap||xe,Me),Fe=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ze=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ae=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,vt=!!W.morphAttributes.color;let pt=fn;k.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(pt=P.toneMapping);const at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Lt=at!==void 0?at.length:0,_e=b.get(k),Gt=T.state.lights;if(ct===!0&&(Xe===!0||S!==z)){const ut=S===z&&k.id===V;ve.setState(k,S,ut)}let je=!1;k.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Gt.state.version||_e.outputColorSpace!==he||H.isBatchedMesh&&_e.batching===!1||!H.isBatchedMesh&&_e.batching===!0||H.isBatchedMesh&&_e.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&_e.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&_e.instancing===!1||!H.isInstancedMesh&&_e.instancing===!0||H.isSkinnedMesh&&_e.skinning===!1||!H.isSkinnedMesh&&_e.skinning===!0||H.isInstancedMesh&&_e.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&_e.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&_e.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&_e.instancingMorph===!1&&H.morphTexture!==null||_e.envMap!==we||k.fog===!0&&_e.fog!==fe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==ve.numPlanes||_e.numIntersection!==ve.numIntersection)||_e.vertexAlphas!==Fe||_e.vertexTangents!==ze||_e.morphTargets!==Ae||_e.morphNormals!==st||_e.morphColors!==vt||_e.toneMapping!==pt||_e.morphTargetsCount!==Lt||!!_e.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,_e.__version=k.version);let Jt=_e.currentProgram;je===!0&&(Jt=xo(k,U,H),I&&k.isNodeMaterial&&I.onUpdateProgram(k,Jt,_e));let An=!1,li=!1,vr=!1;const lt=Jt.getUniforms(),xt=_e.uniforms;if(ce.useProgram(Jt.program)&&(An=!0,li=!0,vr=!0),k.id!==V&&(V=k.id,li=!0),_e.needsLights){const ut=RT(T.state.lightProbeGridArray,H);_e.lightProbeGrid!==ut&&(_e.lightProbeGrid=ut,li=!0)}if(An||z!==S){ce.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),lt.setValue(D,"projectionMatrix",S.projectionMatrix),lt.setValue(D,"viewMatrix",S.matrixWorldInverse);const ui=lt.map.cameraPosition;ui!==void 0&&ui.setValue(D,ge.setFromMatrixPosition(S.matrixWorld)),it.logarithmicDepthBuffer&&lt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&lt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),z!==S&&(z=S,li=!0,vr=!0)}if(_e.needsLights&&(Gt.state.directionalShadowMap.length>0&&lt.setValue(D,"directionalShadowMap",Gt.state.directionalShadowMap,v),Gt.state.spotShadowMap.length>0&&lt.setValue(D,"spotShadowMap",Gt.state.spotShadowMap,v),Gt.state.pointShadowMap.length>0&&lt.setValue(D,"pointShadowMap",Gt.state.pointShadowMap,v)),H.isSkinnedMesh){lt.setOptional(D,H,"bindMatrix"),lt.setOptional(D,H,"bindMatrixInverse");const ut=H.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),lt.setValue(D,"boneTexture",ut.boneTexture,v))}H.isBatchedMesh&&(lt.setOptional(D,H,"batchingTexture"),lt.setValue(D,"batchingTexture",H._matricesTexture,v),lt.setOptional(D,H,"batchingIdTexture"),lt.setValue(D,"batchingIdTexture",H._indirectTexture,v),lt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&lt.setValue(D,"batchingColorTexture",H._colorsTexture,v));const ci=W.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&De.update(H,W,Jt),(li||_e.receiveShadow!==H.receiveShadow)&&(_e.receiveShadow=H.receiveShadow,lt.setValue(D,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(xt.envMapIntensity.value=U.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=bE()),li){if(lt.setValue(D,"toneMappingExposure",P.toneMappingExposure),_e.needsLights&&PT(xt,vr),fe&&k.fog===!0&&X.refreshFogUniforms(xt,fe),X.refreshMaterialUniforms(xt,k,Le,Qe,T.state.transmissionRenderTarget[S.id]),_e.needsLights&&_e.lightProbeGrid){const ut=_e.lightProbeGrid;xt.probesSH.value=ut.texture,xt.probesMin.value.copy(ut.boundingBox.min),xt.probesMax.value.copy(ut.boundingBox.max),xt.probesResolution.value.copy(ut.resolution)}lo.upload(D,rp(_e),xt,v)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(lo.upload(D,rp(_e),xt,v),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&lt.setValue(D,"center",H.center),lt.setValue(D,"modelViewMatrix",H.modelViewMatrix),lt.setValue(D,"normalMatrix",H.normalMatrix),lt.setValue(D,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){const ut=k.uniformsGroups;for(let ui=0,xr=ut.length;ui<xr;ui++){const op=ut[ui];q.update(op,Jt),q.bind(op,Jt)}}return Jt}function PT(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function LT(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(S,U,W){const k=b.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),b.get(S.texture).__webglTexture=U,b.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const W=b.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const IT=D.createFramebuffer();this.setRenderTarget=function(S,U=0,W=0){N=S,G=U,B=W;let k=null,H=!1,fe=!1;if(S){const he=b.get(S);if(he.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(D.FRAMEBUFFER,he.__webglFramebuffer),Z.copy(S.viewport),$.copy(S.scissor),te=S.scissorTest,ce.viewport(Z),ce.scissor($),ce.setScissorTest(te),V=-1;return}else if(he.__webglFramebuffer===void 0)v.setupRenderTarget(S);else if(he.__hasExternalTextures)v.rebindTextures(S,b.get(S.texture).__webglTexture,b.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Fe=S.depthTexture;if(he.__boundDepthTexture!==Fe){if(Fe!==null&&b.has(Fe)&&(S.width!==Fe.image.width||S.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(S)}}const Me=S.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(fe=!0);const we=b.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(we[U])?k=we[U][W]:k=we[U],H=!0):S.samples>0&&v.useMultisampledRTT(S)===!1?k=b.get(S).__webglMultisampledFramebuffer:Array.isArray(we)?k=we[W]:k=we,Z.copy(S.viewport),$.copy(S.scissor),te=S.scissorTest}else Z.copy(se).multiplyScalar(Le).floor(),$.copy(Re).multiplyScalar(Le).floor(),te=Ie;if(W!==0&&(k=IT),ce.bindFramebuffer(D.FRAMEBUFFER,k)&&ce.drawBuffers(S,k),ce.viewport(Z),ce.scissor($),ce.setScissorTest(te),H){const he=b.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,W)}else if(fe){const he=U;for(let Me=0;Me<S.textures.length;Me++){const we=b.get(S.textures[Me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Me,we.__webglTexture,W,he)}}else if(S!==null&&W!==0){const he=b.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,W)}V=-1},this.readRenderTargetPixels=function(S,U,W,k,H,fe,xe,he=0){if(!(S&&S.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){ce.bindFramebuffer(D.FRAMEBUFFER,Me);try{const we=S.textures[he],Fe=we.format,ze=we.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!it.textureFormatReadable(Fe)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(ze)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-k&&W>=0&&W<=S.height-H&&D.readPixels(U,W,k,H,L.convert(Fe),L.convert(ze),fe)}finally{const we=N!==null?b.get(N).__webglFramebuffer:null;ce.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(S,U,W,k,H,fe,xe,he=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me)if(U>=0&&U<=S.width-k&&W>=0&&W<=S.height-H){ce.bindFramebuffer(D.FRAMEBUFFER,Me);const we=S.textures[he],Fe=we.format,ze=we.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!it.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ae),D.bufferData(D.PIXEL_PACK_BUFFER,fe.byteLength,D.STREAM_READ),D.readPixels(U,W,k,H,L.convert(Fe),L.convert(ze),0);const st=N!==null?b.get(N).__webglFramebuffer:null;ce.bindFramebuffer(D.FRAMEBUFFER,st);const vt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await w0(D,vt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ae),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,fe),D.deleteBuffer(Ae),D.deleteSync(vt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,W=0){const k=Math.pow(2,-W),H=Math.floor(S.image.width*k),fe=Math.floor(S.image.height*k),xe=U!==null?U.x:0,he=U!==null?U.y:0;v.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,xe,he,H,fe),ce.unbindTexture()};const DT=D.createFramebuffer(),NT=D.createFramebuffer();this.copyTextureToTexture=function(S,U,W=null,k=null,H=0,fe=0){let xe,he,Me,we,Fe,ze,Ae,st,vt;const pt=S.isCompressedTexture?S.mipmaps[fe]:S.image;if(W!==null)xe=W.max.x-W.min.x,he=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,we=W.min.x,Fe=W.min.y,ze=W.isBox3?W.min.z:0;else{const xt=Math.pow(2,-H);xe=Math.floor(pt.width*xt),he=Math.floor(pt.height*xt),S.isDataArrayTexture?Me=pt.depth:S.isData3DTexture?Me=Math.floor(pt.depth*xt):Me=1,we=0,Fe=0,ze=0}k!==null?(Ae=k.x,st=k.y,vt=k.z):(Ae=0,st=0,vt=0);const at=L.convert(U.format),Lt=L.convert(U.type);let _e;U.isData3DTexture?(v.setTexture3D(U,0),_e=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(v.setTexture2DArray(U,0),_e=D.TEXTURE_2D_ARRAY):(v.setTexture2D(U,0),_e=D.TEXTURE_2D),ce.activeTexture(D.TEXTURE0),ce.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),ce.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ce.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Gt=ce.getParameter(D.UNPACK_ROW_LENGTH),je=ce.getParameter(D.UNPACK_IMAGE_HEIGHT),Jt=ce.getParameter(D.UNPACK_SKIP_PIXELS),An=ce.getParameter(D.UNPACK_SKIP_ROWS),li=ce.getParameter(D.UNPACK_SKIP_IMAGES);ce.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),ce.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),ce.pixelStorei(D.UNPACK_SKIP_PIXELS,we),ce.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),ce.pixelStorei(D.UNPACK_SKIP_IMAGES,ze);const vr=S.isDataArrayTexture||S.isData3DTexture,lt=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const xt=b.get(S),ci=b.get(U),ut=b.get(xt.__renderTarget),ui=b.get(ci.__renderTarget);ce.bindFramebuffer(D.READ_FRAMEBUFFER,ut.__webglFramebuffer),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let xr=0;xr<Me;xr++)vr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,b.get(S).__webglTexture,H,ze+xr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,b.get(U).__webglTexture,fe,vt+xr)),D.blitFramebuffer(we,Fe,xe,he,Ae,st,xe,he,D.DEPTH_BUFFER_BIT,D.NEAREST);ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||b.has(S)){const xt=b.get(S),ci=b.get(U);ce.bindFramebuffer(D.READ_FRAMEBUFFER,DT),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,NT);for(let ut=0;ut<Me;ut++)vr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,H,ze+ut):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xt.__webglTexture,H),lt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ci.__webglTexture,fe,vt+ut):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ci.__webglTexture,fe),H!==0?D.blitFramebuffer(we,Fe,xe,he,Ae,st,xe,he,D.COLOR_BUFFER_BIT,D.NEAREST):lt?D.copyTexSubImage3D(_e,fe,Ae,st,vt+ut,we,Fe,xe,he):D.copyTexSubImage2D(_e,fe,Ae,st,we,Fe,xe,he);ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else lt?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(_e,fe,Ae,st,vt,xe,he,Me,at,Lt,pt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(_e,fe,Ae,st,vt,xe,he,Me,at,pt.data):D.texSubImage3D(_e,fe,Ae,st,vt,xe,he,Me,at,Lt,pt):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,fe,Ae,st,xe,he,at,Lt,pt.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,fe,Ae,st,pt.width,pt.height,at,pt.data):D.texSubImage2D(D.TEXTURE_2D,fe,Ae,st,xe,he,at,Lt,pt);ce.pixelStorei(D.UNPACK_ROW_LENGTH,Gt),ce.pixelStorei(D.UNPACK_IMAGE_HEIGHT,je),ce.pixelStorei(D.UNPACK_SKIP_PIXELS,Jt),ce.pixelStorei(D.UNPACK_SKIP_ROWS,An),ce.pixelStorei(D.UNPACK_SKIP_IMAGES,li),fe===0&&U.generateMipmaps&&D.generateMipmap(_e),ce.unbindTexture()},this.initRenderTarget=function(S){b.get(S).__webglFramebuffer===void 0&&v.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?v.setTextureCube(S,0):S.isData3DTexture?v.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?v.setTexture2DArray(S,0):v.setTexture2D(S,0),ce.unbindTexture()},this.resetState=function(){G=0,B=0,N=null,ce.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}function hf(n,e){if(e===p0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Qa||e===Pd){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Qa)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function wE(n){const e=new Map,t=new Map,i=n.clone();return ff(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function ff(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)ff(n.children[i],e.children[i],t)}class AE extends ur{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new IE(t)}),this.register(function(t){return new DE(t)}),this.register(function(t){return new zE(t)}),this.register(function(t){return new GE(t)}),this.register(function(t){return new WE(t)}),this.register(function(t){return new UE(t)}),this.register(function(t){return new OE(t)}),this.register(function(t){return new FE(t)}),this.register(function(t){return new BE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new kE(t)}),this.register(function(t){return new NE(t)}),this.register(function(t){return new HE(t)}),this.register(function(t){return new VE(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new pf(t,Ge.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new pf(t,Ge.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new XE(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Yr.extractUrlBase(e);o=Yr.resolveURL(c,this.path)}else o=Yr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new wh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===mf){try{o[Ge.KHR_BINARY_GLTF]=new qE(e)}catch(d){r&&r(d);return}s=JSON.parse(o[Ge.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new sb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case Ge.KHR_MATERIALS_UNLIT:o[d]=new PE;break;case Ge.KHR_DRACO_MESH_COMPRESSION:o[d]=new YE(s,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:o[d]=new KE;break;case Ge.KHR_MESH_QUANTIZATION:o[d]=new jE;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function RE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function gt(n,e,t){const i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class CE{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ue(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],kt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qv(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Wv(u),c.distance=d;break;case"spot":c=new zv(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Tn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class PE{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return Hn}extendParams(e,t,i){const r=[];e.color=new Ue(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],kt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Rt))}return Promise.all(r)}}class LE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=gt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class IE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const i=gt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(s,s)}return Promise.all(r)}}class DE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_DISPERSION}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const i=gt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class NE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const i=gt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}}class UE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const i=gt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],kt)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Rt)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}}class OE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const i=gt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}}class FE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const i=gt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const s=i.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(s[0],s[1],s[2],kt),Promise.all(r)}}class BE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const i=gt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class kE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const i=gt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const s=i.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(s[0],s[1],s[2],kt),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Rt)),Promise.all(r)}}class VE{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const i=gt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}}class HE{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){const i=gt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}}class zE{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class GE{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class WE{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class pf{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,r.mode,r.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(f),u,d,h,r.mode,r.filter),f})})}else return null}}class XE{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==$t.TRIANGLES&&c.mode!==$t.TRIANGLE_STRIP&&c.mode!==$t.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(const g of d){const _=new Ve,m=new O,p=new Yt,y=new O(1,1,1),M=new pv(g.geometry,g.material,h);for(let E=0;E<h;E++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,E),l.SCALE&&y.fromBufferAttribute(l.SCALE,E),M.setMatrixAt(E,_.compose(m,p,y));for(const E in l)if(E==="_COLOR_0"){const A=l[E];M.instanceColor=new Dl(A.array,A.itemSize,A.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,l[E]);dt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const mf="glTF",Zr=12,gf={JSON:1313821514,BIN:5130562};class qE{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Zr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==mf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Zr,s=new DataView(e,Zr);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===gf.JSON){const c=new Uint8Array(e,Zr+o,a);this.content=i.decode(c)}else if(l===gf.BIN){const c=Zr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class YE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=nc[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=nc[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],f=gr[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){r.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(f)},a,c,kt,h)})})}}class KE{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class jE{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class _f extends rr{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,d=(i-t)/u,h=d*d,f=h*d,g=e*c,_=g-c,m=-2*f+3*h,p=f-h,y=1-m,M=p-h+d;for(let E=0;E!==a;E++){const A=o[_+E+a],T=o[_+E+l]*u,C=o[g+E+a],x=o[g+E]*u;s[E]=y*A+M*T+m*C+p*x}return s}}const $E=new Yt;class ZE extends _f{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return $E.fromArray(s).normalize().toArray(s),s}}const $t={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vf={9728:Mt,9729:Et,9984:Sd,9985:vs,9986:Cr,9987:Ln},xf={33071:pn,33648:_s,10497:ki},tc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},JE={CUBICSPLINE:void 0,LINEAR:Dr,STEP:Ir},ic={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function QE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new kl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hn})),n.DefaultMaterial}function wi(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Tn(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function eb(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(i){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(h)}if(r){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function tb(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function nb(n){let e;const t=n.extensions&&n.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rc(t.attributes):e=n.indices+":"+rc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+rc(n.targets[i]);return e}function rc(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function sc(n){switch(n){case Int8Array:return .007874015748031496;case Uint8Array:return .00392156862745098;case Int16Array:return 3051850947599719e-20;case Uint16Array:return 15259021896696422e-21;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ib(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const rb=new Ve;class sb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new RE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new Vv(this.options.manager):this.textureLoader=new Yv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return wi(s,a,r),Tn(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Yr.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=tc[r.type],a=gr[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new It(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=tc[r.type],c=gr[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=r.byteOffset||0,f=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(f&&f!==d){const p=Math.floor(h/f),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let M=t.cache.get(y);M||(_=new c(a,p*f,r.count*f/u),M=new av(_,f/u),t.cache.add(y,M)),m=new bl(M,l,h%f/u,g)}else a===null?_=new c(r.count*l):_=new c(a,h,r.count*l),m=new It(_,l,g);if(r.sparse!==void 0){const p=tc.SCALAR,y=gr[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,E=r.sparse.values.byteOffset||0,A=new y(o[1],M,r.sparse.count*p),T=new c(o[2],E,r.sparse.count*l);a!==null&&(m=new It(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,x=A.length;C<x;C++){const w=A[C];if(m.setX(w,T[C*l]),l>=2&&m.setY(w,T[C*l+1]),l>=3&&m.setZ(w,T[C*l+2]),l>=4&&m.setW(w,T[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=vf[h.magFilter]||Et,u.minFilter=vf[h.minFilter]||Ln,u.wrapS=xf[h.wrapS]||ki,u.wrapT=xf[h.wrapT]||ki,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Mt&&u.minFilter!==Et,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new wt(_);m.needsUpdate=!0,h(m)}),t.load(Yr.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),Tn(d,o),d.userData.mimeType=o.mimeType||ib(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ph,xn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ch,xn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return kl}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ge.KHR_MATERIALS_UNLIT]){const d=r[Ge.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],kt),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Rt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=en);const u=s.alphaMode||ic.OPAQUE;if(u===ic.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ic.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Hn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ke(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==Hn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Hn){const d=s.emissiveFactor;a.emissive=new Ue().setRGB(d[0],d[1],d[2],kt)}return s.emissiveTexture!==void 0&&o!==Hn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Rt)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),Tn(d,s),t.associations.set(d,{materials:e}),s.extensions&&wi(r,d,s),d})}createUniqueName(e){const t=Je.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return yf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=nb(c),d=r[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=yf(new jt,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?QE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const y=c[f];if(m.mode===$t.TRIANGLES||m.mode===$t.TRIANGLE_STRIP||m.mode===$t.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new dv(_,y):new zt(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===$t.TRIANGLE_STRIP?p.geometry=hf(p.geometry,Pd):m.mode===$t.TRIANGLE_FAN&&(p.geometry=hf(p.geometry,Qa));else if(m.mode===$t.LINES)p=new vv(_,y);else if(m.mode===$t.LINE_STRIP)p=new Fl(_,y);else if(m.mode===$t.LINE_LOOP)p=new xv(_,y);else if(m.mode===$t.POINTS)p=new yv(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&tb(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Tn(p,s),m.extensions&&wi(r,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&wi(r,d[0],s),d[0];const h=new ei;s.extensions&&wi(r,h,s),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ut(xi.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new ro(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Tn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const h=new Ve;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Il(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=r.channels.length;d<h;d++){const f=r.channels[d],g=r.samplers[f.sampler],_=f.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,y=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let M=0,E=h.length;M<E;M++){const A=h[M],T=f[M],C=g[M],x=_[M],w=m[M];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const P=i._createAnimationTracks(A,T,C,x,w);if(P)for(let R=0;R<P.length;R++)p.push(P[R])}const y=new Vl(s,void 0,p);return Tn(y,r),y})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,rb)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);if(u.userData.pivot!==void 0&&d.length>0){const f=u.userData.pivot,g=d[0];u.pivot=new O().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new sh:c.length>1?u=new ei:c.length===1?u=c[0]:u=new dt,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=o),Tn(u,s),s.extensions&&wi(i,u,s),s.matrix!==void 0){const d=new Ve;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const d=r.associations.get(u);r.associations.set(u,{...d})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new ei;i.name&&(s.name=r.createUniqueName(i.name)),Tn(s,i),i.extensions&&wi(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++){const h=l[u];h.parent!==null?s.add(wE(h)):s.add(h)}const c=u=>{const d=new Map;for(const[h,f]of r.associations)(h instanceof xn||h instanceof wt)&&d.set(h,f);return u.traverse(h=>{const f=r.associations.get(h);f!=null&&d.set(h,f)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}ai[s.path]===ai.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(ai[s.path]){case ai.weights:u=or;break;case ai.rotation:u=ar;break;case ai.translation:case ai.scale:u=cr;break;default:switch(i.itemSize){case 1:u=or;break;case 2:case 3:default:u=cr;break}break}const d=r.interpolation!==void 0?JE[r.interpolation]:Dr,h=this._getArrayFromAccessor(i);for(let f=0,g=l.length;f<g;f++){const _=new u(l[f]+"."+ai[s.path],t.array,h,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=sc(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof ar?ZE:_f;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ob(n,e,t){const i=e.attributes,r=new Bn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){const u=sc(gr[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new O,l=new O;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const _=sc(gr[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new vn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function yf(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=nc[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Ye.workingColorSpace!==kt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),Tn(n,e),ob(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?eb(n,e.targets,t):n})}const ab="https://raw.githubusercontent.com/kujira22/kujira_webgl/master/mm/M4.glb";function lb({mount:n}={}){if(!n)return console.warn("[base] No [data-three-canvas] mount found."),null;hb();const e=ub(n);let t;try{t=new TE({alpha:!0,antialias:!0})}catch(ee){return console.warn("[base] WebGL renderer could not be created.",ee),null}t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(P(),R()),n.appendChild(t.domElement);const i=new iv,r=new Ut(e.fov,P()/R(),.1,100);r.position.set(e.cameraPosition.x,e.cameraPosition.y,e.cameraPosition.z);const s=r.position.clone(),o=new ei;o.rotation.set(xi.degToRad(e.rotation.x),xi.degToRad(e.rotation.y),xi.degToRad(e.rotation.z)),i.add(o),G();let a=null,l=null,c=null,u=null,d=null,h=null,f=null,g=!1,_=null,m=null,p=o.rotation.y,y=s.x,M=s.y,E=s.z,A=!1;const T=new cx,C=new AE,x=new Hn({color:e.blackColor,side:hn}),w=new Hn({color:16777215,colorWrite:!1,depthTest:!0,depthWrite:!0,side:en});N();function P(){return n.clientWidth||window.innerWidth||1}function R(){return n.clientHeight||window.innerHeight||1}function I(){const ee=P(),ge=R();r.aspect=ee/ge,r.updateProjectionMatrix(),G(),t.setSize(ee,ge)}function G(){r.lookAt(o.position)}function B(){A&&(e.mouseCameraMove?(r.position.x+=(y-r.position.x)*e.mouseEase,r.position.y+=(M-r.position.y)*e.mouseEase,r.position.z+=(E-r.position.z)*e.mouseEase):o.rotation.y+=(p-o.rotation.y)*e.mouseEase,G(),t.render(i,r),a=window.requestAnimationFrame(B))}function N(){C.loadAsync(ab).then(ee=>{l=ee.scene,j(l),l.position.set(0,0,0),o.add(l),V(ee),G()}).catch(ee=>{console.warn("[base] M model could not be loaded.",ee)})}function V(ee){if(!ee.animations.length)return;c=new lx(l);const ge=ee.animations[0];d=ge,u=c.clipAction(ge),u.reset(),u.setLoop(Rd,1),u.clampWhenFinished=!0,u.play(),u.paused=!0,u.time=0,c.update(0),z(ge),e.footerControls&&be(ge)}function z(ee){const ge=window.gsap;if(!ge){Le(ee);return}const Ee=Jr(ee);h=ge.to(u,{time:Ee,duration:e.enterDuration,ease:"power4.out",paused:!0,onStart:()=>{u.paused=!1},onUpdate:()=>{c.update(0)},onComplete:()=>{Le(ee)}}),!$(ee)&&Z()}function Z(){if(!d||!u||f||g||$(d))return;if(!window.ScrollTrigger){te(d);return}const ee=Ie();f=window.ScrollTrigger.create({trigger:ee,start:e.enterStart,once:!0,onEnter:()=>te(d)}),window.ScrollTrigger.refresh(),cb(ee)&&te(d)}function $(ee){const ge=Ie();if(!e.useUnderlineRevealTrigger||!ge)return!1;if(ge.dataset.underlineRevealed==="true")return ye(ee),!0;if(_)return!0;const Ee=()=>{_=null,console.log("[MM footer GLB] animating footer GLB from SFCO underline",{canvas:n.dataset.threeCanvas,className:n.className}),ye(ee)};return ge.addEventListener(Ro,Ee,{once:!0}),_=()=>{ge.removeEventListener(Ro,Ee)},!0}function te(ee){if(g){Le(ee);return}h==null||h.play()}function ye(ee){if(!e.footerControls||!window.gsap||!u||!c){te(ee);return}h==null||h.kill(),g=!1,u.paused=!1,u.time=0,I(),c.update(0),t.render(i,r),requestAnimationFrame(I),h=window.gsap.to(u,{time:Jr(ee),duration:e.enterDuration,ease:"power4.out",overwrite:!0,onStart:()=>{u.paused=!1},onUpdate:()=>{c.update(0)},onComplete:()=>{Le(ee)}})}function be(ee){if(!window.gsap||!u||!c)return;const Ee=Jr(ee),Ze=Ee*e.footerHoverProgress,nt=Ee*e.footerRestProgress,St=Ee*e.footerClickProgress,D=n.closest(".footer_home_link")||n;let ht=!1;const He=()=>{ht||We(Ze,e.footerHoverDuration,e.footerHoverEase)},it=()=>{ht||We(nt,e.footerHoverDuration,e.footerHoverEase)},ce=()=>{ht=!0,We(St,e.footerClickDuration,e.footerClickEase)};D.addEventListener("mouseenter",He),D.addEventListener("mouseleave",it),D.addEventListener("click",ce),m=()=>{D.removeEventListener("mouseenter",He),D.removeEventListener("mouseleave",it),D.removeEventListener("click",ce)}}function We(ee,ge,Ee){const Ze=window.gsap;!Ze||!u||!c||(h==null||h.kill(),u.paused=!1,h=Ze.to(u,{time:ee,duration:ge,ease:Ee,onUpdate:()=>{c.update(0)},onComplete:()=>{u.paused=!0,c.update(0)}}))}function Qe(ee,ge=e.transitionOutDuration){if(!u||!d)return;const Ze=Jr(d)*xi.clamp(ee,0,1);We(Ze,ge,e.transitionOutEase)}function Le(ee){const ge=Jr(ee);g=!0,u.time=ge,u.paused=!0,c.update(0)}function j(ee){ee.traverse(ge=>{if(!ge.isMesh)return;const Ee=Array.isArray(ge.material)?ge.material:[ge.material],Ze=Ee.some(de),nt=Ee.some(se);ge.visible=Ze||nt,ge.material=Array.isArray(ge.material)?Ee.map(St=>de(St)?w:x):Ze?w:x,ge.renderOrder=nt?1:0})}function de(ee){var ge;return((ge=ee==null?void 0:ee.name)==null?void 0:ge.toLowerCase())==="white"}function se(ee){var ge;return((ge=ee==null?void 0:ee.name)==null?void 0:ge.toLowerCase())==="black"}function Re(ee){const Ee=ee.clientX/Math.max(window.innerWidth,1)-.5;if(e.mouseCameraMove){const St=ee.clientY/Math.max(window.innerHeight,1)-.5;y=s.x+Ee*2*e.mouseCameraRange.x,M=s.y+St*2*e.mouseCameraRange.y,E=s.z-St*2*e.mouseCameraRange.z;return}const Ze=xi.degToRad(e.mouseRotationRange)*Ee*2;p=xi.degToRad(e.rotation.y)+Ze}function Ie(){return e.enterTrigger||n}window.addEventListener("resize",I),(e.mouseRotation||e.mouseCameraMove)&&window.addEventListener("mousemove",Re),I(),Ce();function Ce(){A||(A=!0,T.getDelta(),B())}function ct(){A=!1,window.cancelAnimationFrame(a),a=null}function Xe(){var Ee;const ee=(Ee=window.getComputedStyle)==null?void 0:Ee.call(window,n),ge=n.getBoundingClientRect();return(ee==null?void 0:ee.display)!=="none"&&(ee==null?void 0:ee.visibility)!=="hidden"&&ge.width>0&&ge.height>0}return{spin(){},setNamespace(){},animateToProgress:Qe,isVisible:Xe,start:Ce,stop:ct,destroy(){window.removeEventListener("resize",I),window.removeEventListener("mousemove",Re),ct(),_==null||_(),m==null||m(),f==null||f.kill(),h==null||h.kill(),l==null||l.traverse(ee=>{ee.geometry&&ee.geometry.dispose()}),x.dispose(),w.dispose(),t.dispose(),t.domElement.remove()}}}function cb(n){const e=n.getBoundingClientRect();return e.top<window.innerHeight&&e.bottom>0}function Jr(n){return Math.max(n.duration-.001,0)}function ub(n){const e=n.classList.contains("footer_logo"),t=n.dataset.threeCanvas==="blue",i=e?n.closest(".footer"):null,r=db(i);return{fov:25,cameraPosition:{x:0,y:2,z:3},rotation:{x:0,y:35,z:0},enterAnimation:!0,enterTrigger:r,enterStart:e?"top 20%":"top 100%",useUnderlineRevealTrigger:!!r,enterDuration:2.2,mouseRotation:!e,mouseRotationRange:5,mouseCameraMove:e,mouseCameraRange:{x:.18,y:.12,z:.1},mouseEase:.045,footerControls:e,footerRestProgress:1,footerHoverProgress:.8,footerClickProgress:0,footerHoverDuration:.24,footerHoverEase:"power1.inOut",footerClickDuration:.42,footerClickEase:"power4.in",transitionOutDuration:.55,transitionOutEase:"power4.in",blackColor:t?16768682:2434341}}function db(n){return n?[...n.querySelectorAll("[data-underline-link]")].find(i=>i.textContent.trim().toLowerCase()==="sf.co")||n.querySelector(".link_large"):null}function hb(){if(document.querySelector("[data-three-temp-style]"))return;const n=document.createElement("style");n.dataset.threeTempStyle="",n.textContent=`
    .webgl_2 {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      pointer-events: none !important;
    }

    .webgl.footer_logo {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
    }

    .webgl_2 canvas {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
    }

    .webgl.footer_logo canvas {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
    }
  `,document.head.append(n)}const Sf=1.2,Mf="power1.out",Ef=.8,fb=Ef+.05,pb="power4.inOut",mb="power4.inOut",bf=11,Tf=3,wf=.12,oc=.12,gb=1,_b=1,ac=.2,Af=1,Rf=.4,Cf=.2,vb="(min-width: 992px)";function xb(n=document,e={}){var h;const t=window.gsap,i=n.querySelector('[data-shots="hero"]'),r=i==null?void 0:i.querySelector('[data-bgvid="true"]'),s=r==null?void 0:r.querySelector("video"),o=Mb(),a=o;let l=o?n.querySelector(".method"):null,c=o?n.querySelector(".madness"):null;const u=a?n.querySelector(".and"):null;return!t||!i||!s?(n.dataset.homeIntroReady="true",(h=e.loader)==null||h.finish(),Promise.resolve()):Promise.all([wb(s),o?cs(l):Promise.resolve(null),o?cs(c):Promise.resolve(null)]).finally(()=>{var f;return(f=e.loader)==null?void 0:f.finish()}).then(([,f,g])=>{o&&hs(n);const _=us(f,1),m=us(g,-1),p=o?Ni(l):null,y=o?Ni(c):null,M=Eb(),E=bb(u),A=a?`pop+=${ac+Af+Cf}`:`pop+=${Cf}`,T={scale:0,rotation:Tf};t.set(n,{opacity:1,position:"fixed",inset:0,width:"100%",zIndex:1}),Ui(n,T.scale,T.rotation),t.set(r,{scale:oc,transformOrigin:"50% 50%"}),p&&t.set(p,{x:`${bf}vw`}),y&&t.set(y,{x:`-${bf}vw`}),n.dataset.homeIntroReady="true";const C=t.timeline({paused:!!e.defer}).to(T,{scale:wf,duration:Sf,ease:Mf,onUpdate:()=>Ui(n,T.scale,T.rotation)}).to(r,{scale:oc,duration:Sf,ease:Mf},0).add("pop").add(()=>Po(i,{force:!0}),A).add(()=>Fc(n),A).to({progress:0},{progress:1,duration:Ef,ease:pb,onUpdate(){const x=this.targets()[0].progress;T.scale=lc(wf,gb,x),T.rotation=lc(Tf,0,x),Ui(n,T.scale,T.rotation),t.set(r,{scale:lc(oc,_b,x)})},onComplete(){t.set(n,{clearProps:"position,inset,width,zIndex,clipPath,webkitClipPath"}),t.set(r,{clearProps:"scale,transformOrigin"}),M.remove()}},"pop").add(Pf(t,p),"pop").add(Pf(t,y),"pop").add(ds(_),"pop+=0.04").add(ds(m),"pop+=0.04").add(yb(t,E),`pop+=${ac}`).add(Sb(t,E),`pop+=${ac+Af}`);e.defer&&(n.__mmStartDeferredIntro=()=>C.play(0))})}function yb(n,e){return e!=null&&e.outer?n.timeline().set(e.outer,{opacity:0,autoAlpha:0,visibility:"visible"}).to(e.outer,{opacity:1,autoAlpha:1,duration:Rf,ease:"power2.out"}):null}function Sb(n,e){return e!=null&&e.outer?n.to(e.outer,{opacity:0,duration:Rf,ease:"power3.inOut",onComplete:()=>{Tb(e)}}):null}function Pf(n,e){return e?n.to(e,{x:0,duration:fb,ease:mb,onComplete:()=>n.set(e,{clearProps:"x"})}):null}function Mb(){var n,e;return((e=(n=window.matchMedia)==null?void 0:n.call(window,vb))==null?void 0:e.matches)??!0}function lc(n,e,t){return n+(e-n)*t}function Eb(){const n=document.createElement("div");return n.dataset.homeIntroBacking="",n.style.position="fixed",n.style.inset="0",n.style.background="#000",n.style.zIndex="0",n.style.pointerEvents="none",document.body.prepend(n),n}function bb(n){const e=window.gsap;if(!e||!n)return null;if(!n.dataset.andMaskReady){const i=document.createElement("span");i.dataset.andMaskInner="",i.textContent=n.textContent,n.textContent="",n.appendChild(i),n.dataset.andMaskReady="true"}const t=n.querySelector("[data-and-mask-inner]");return e.set(n,{opacity:0,visibility:"visible",overflow:"visible",display:"inline-block",lineHeight:1.15,paddingBottom:"0.05em"}),e.set(t,{display:"inline-block",yPercent:0}),{outer:n,inner:t}}function Tb(n){const e=window.gsap;!e||!(n!=null&&n.outer)||!(n!=null&&n.inner)||(e.set(n.outer,{opacity:0,visibility:"visible",clearProps:"overflow,display,lineHeight,paddingBottom"}),e.set(n.inner,{yPercent:0}))}function wb(n){return n.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA?Promise.resolve():new Promise(e=>{const t=()=>{n.removeEventListener("loadeddata",t),n.removeEventListener("canplay",t),e()};n.addEventListener("loadeddata",t,{once:!0}),n.addEventListener("canplay",t,{once:!0})})}const Ab=.4,Lf=1,Rb=.18,uo=new WeakMap;function Cb(n=document){n==null||n.querySelectorAll('[data-shots="hero"] nav').forEach(e=>{const t=[...e.querySelectorAll(".hero_link")];t.length<2||uo.has(e)||uo.set(e,Lb(e,t))})}function Pb(n=document){n==null||n.querySelectorAll('[data-shots="hero"] nav').forEach(e=>{var t;(t=uo.get(e))==null||t.destroy(),uo.delete(e)})}function Lb(n,e){const t=new Map(e.map(a=>[a,a.style.opacity]));let i=!1;const r=a=>{if(i)return;const l=a.currentTarget;If(e,l)},s=()=>{i||e.forEach(a=>cc(a,Lf))},o=a=>{i=!0,If(e,a.currentTarget)};return e.forEach(a=>{a.addEventListener("mouseenter",r),a.addEventListener("focus",r),a.addEventListener("click",o)}),n.addEventListener("mouseleave",s),n.addEventListener("focusout",s),{destroy(){e.forEach(a=>{a.removeEventListener("mouseenter",r),a.removeEventListener("focus",r),a.removeEventListener("click",o),cc(a,t.get(a)||"",!0)}),n.removeEventListener("mouseleave",s),n.removeEventListener("focusout",s)}}}function If(n,e){n.forEach(t=>{cc(t,t===e?Lf:Ab)})}function cc(n,e,t=!1){const i=window.gsap;if(i&&!t){i.to(n,{opacity:e,duration:Rb,ease:"power2.out",overwrite:!0});return}n.style.opacity=e}const ho={london:{lat:51.5072,lon:-.1276},miami:{lat:25.7617,lon:-80.1918},hobart:{lat:-42.8821,lon:147.3272},tokyo:{lat:35.6762,lon:139.6503}},Ib={amsterdam:{lat:52.3676,lon:4.9041},atlanta:{lat:33.749,lon:-84.388},barcelona:{lat:41.3874,lon:2.1686},berlin:{lat:52.52,lon:13.405},buenosaires:{lat:-34.6037,lon:-58.3816},chicago:{lat:41.8781,lon:-87.6298},copenhagen:{lat:55.6761,lon:12.5683},dubai:{lat:25.2048,lon:55.2708},hongkong:{lat:22.3193,lon:114.1694},losangeles:{lat:34.0522,lon:-118.2437},london:ho.london,madrid:{lat:40.4168,lon:-3.7038},melbourne:{lat:-37.8136,lon:144.9631},mexico:{lat:19.4326,lon:-99.1332},mexicocity:{lat:19.4326,lon:-99.1332},miami:ho.miami,milan:{lat:45.4642,lon:9.19},montreal:{lat:45.5019,lon:-73.5674},mumbai:{lat:19.076,lon:72.8777},newyork:{lat:40.7128,lon:-74.006},paris:{lat:48.8566,lon:2.3522},sanfrancisco:{lat:37.7749,lon:-122.4194},saopaulo:{lat:-23.5558,lon:-46.6396},seoul:{lat:37.5665,lon:126.978},shanghai:{lat:31.2304,lon:121.4737},singapore:{lat:1.3521,lon:103.8198},stockholm:{lat:59.3293,lon:18.0686},sydney:{lat:-33.8688,lon:151.2093},tokyo:ho.tokyo,toronto:{lat:43.6532,lon:-79.3832},vancouver:{lat:49.2827,lon:-123.1207}},Db="-1.2rem",Nb="#FFDEAA",Ub="#1A365E",Ob=32,Df=1.3,Fb="(min-width: 991px)",Bb=.9,kb=.55,Nf=28,Uf=18,Of=1.2,Vb=-.25,Hb=-.18,Ff=10,Bf=8,kf=.75,Vf=1,fo="power2.out",zb=1050,po=new WeakMap;function Gb(n=document,e={}){n.querySelectorAll(".map").forEach(t=>{if(zf(t),e.transition){Gf(t),po.set(t,window.setTimeout(()=>{po.delete(t),Hf(t)},zb));return}Hf(t)})}function Wb(n=document){n.querySelectorAll(".map").forEach(e=>{zf(e)})}function Xb(n){const e=n.querySelector(".map_holder"),t=n.querySelector(".location_card [data-map]"),i=e==null?void 0:e.querySelector(".map_pin[data-map]");if(!e||!t||!i)return;Gf(n);const r=iT(e);if(!r)return;const s=oT(t),o=[];Zb(n,s),s.forEach(a=>{const l=qf(a),c=aT(l);if(!c){console.warn(`[map] No map coordinates for "${l}".`);return}const u=rT(c,r),d=i.cloneNode(!0);d.dataset.mapDynamic="",d.dataset.mapCity=l,d.removeAttribute("data-map"),d.classList.remove("p1","p2","p3","p4","hq"),d.style.left=`calc(${u.x}% + ${Db})`,d.style.top=`${u.y}%`,d.style.opacity="",d.style.pointerEvents="",d.tabIndex=0,d.setAttribute("aria-label",l),jb(d),e.append(d),o.push(d)}),$b(e),Kb(n,e,o,s)}async function Hf(n){await qb(n),n.isConnected&&Xb(n)}function zf(n){const e=po.get(n);e&&(window.clearTimeout(e),po.delete(n))}function Gf(n){n.querySelectorAll("[data-map-dynamic]").forEach(e=>e.remove())}async function qb(n){await Yb(n),await new Promise(e=>{requestAnimationFrame(()=>requestAnimationFrame(e))})}function Yb(n){const e=[...n.querySelectorAll("img")].filter(t=>!t.complete);return e.length?new Promise(t=>{let i=!1,r=e.length;const s=()=>{i||(r-=1,r<=0&&(i=!0,t()))};window.setTimeout(()=>{i||(i=!0,t())},500),e.forEach(o=>{o.addEventListener("load",s,{once:!0}),o.addEventListener("error",s,{once:!0})})}):Promise.resolve()}function Kb(n,e,t,i){const r=window.gsap,s=t,o=window.matchMedia(Fb).matches;let a=null,l="";if(uc(s,null),!o||!r||t.length===0)return;const c=n.querySelector(".location_card"),u=c?r.quickTo(c,"x",{duration:kf,ease:fo}):null,d=c?r.quickTo(c,"y",{duration:kf,ease:fo}):null,h=c?[...c.querySelectorAll(".location_image, img")]:[],f=h.map(M=>r.quickTo(M,"x",{duration:Vf,ease:fo})),g=h.map(M=>r.quickTo(M,"y",{duration:Vf,ease:fo}));r.set(h,{scale:Of,transformOrigin:"50% 50%",force3D:!0});const _=new Map(t.map(M=>[M,{x:r.quickTo(M,"x",{duration:.38,ease:"power3.out"}),y:r.quickTo(M,"y",{duration:.38,ease:"power3.out"})}])),m=()=>{a=null,l="",e.style.cursor="",u==null||u(0),d==null||d(0),Wf(f,g,0,0),_.forEach(M=>{M.x(0),M.y(0)}),mo(t,1),uc(s,null),eT(n)},p=M=>{const E=M.dataset.mapCity||"";a=M,e.style.cursor="pointer",mo(t,1),mo([a],Df),uc(s,a),E!==l&&(l=E,Jb(n,l,i))},y=M=>{const E=nT(M,t);if(!E||E.distance>Ob){m();return}p(E.pin),_.forEach((T,C)=>{C!==a&&(T.x(0),T.y(0))});const A=_.get(a);A.x(E.dx),A.y(E.dy),u==null||u(_r(E.dx*Bb,-Nf,Nf)),d==null||d(_r(E.dy*kb,-Uf,Uf)),Wf(f,g,E.dx,E.dy),mo([a],Df)};t.forEach(M=>{M.addEventListener("mouseenter",()=>p(M)),M.addEventListener("focus",()=>p(M))}),e.addEventListener("mousemove",y),e.addEventListener("mouseleave",m)}function jb(n){const e=window.gsap;n.style.transformOrigin="50% 50%",n.style.transition="scale 0.18s ease",n.style.scale="1",n.style.willChange="transform",e&&e.set(n,{x:0,y:0,transformOrigin:"50% 50%",force3D:!0})}function mo(n,e){n.forEach(t=>{t.style.scale=String(e)})}function $b(n){n.querySelectorAll(".map_pin[data-map]").forEach(e=>{e.style.opacity="0",e.style.pointerEvents="none"})}function Wf(n,e,t,i){const r=_r(t*Vb,-Ff,Ff),s=_r(i*Hb,-Bf,Bf);n.forEach(o=>o(r)),e.forEach(o=>o(s))}function Zb(n,e){const t=window.gsap,i=n.querySelector(".location_card");if(i){if(i.hidden=!1,i.style.display="",window.getComputedStyle(i).display==="none"&&(i.style.display="block"),e.forEach(r=>{r.hidden=!0,r.dataset.mapLocationItem=dc(qf(r)),r.style.display="none"}),t){t.set(i,{autoAlpha:0}),t.set(e,{clipPath:"inset(100% 0% 0% 0%)",webkitClipPath:"inset(100% 0% 0% 0%)",y:18});return}i.style.opacity="0",i.style.visibility="hidden"}}function Jb(n,e,t){const i=window.gsap,r=n.querySelector(".location_card"),s=dc(e),o=t.find(a=>a.dataset.mapLocationItem===s);if(!(!r||!o)){if(r.hidden=!1,r.style.display="",window.getComputedStyle(r).display==="none"&&(r.style.display="block"),t.forEach(a=>{a.hidden=a!==o,a.style.display=a===o?"":"none"}),Qb(o),!i){r.style.opacity="1",r.style.visibility="visible";return}i.killTweensOf(t),i.set(o.querySelectorAll(".location_image, img"),{scale:Of,transformOrigin:"50% 50%",x:0,y:0}),i.set(r,{autoAlpha:1}),i.fromTo(o,{clipPath:"inset(100% 0% 0% 0%)",webkitClipPath:"inset(100% 0% 0% 0%)",y:18},{clipPath:"inset(0% 0% 0% 0%)",webkitClipPath:"inset(0% 0% 0% 0%)",y:0,duration:.6,ease:"power3.inOut",overwrite:!0})}}function Qb(n){const e=window.gsap,t=n.querySelectorAll("[data-text-root], .text-reveal-mask, .text-reveal-line, .text-reveal-word");t.forEach(i=>{i.style.opacity="",i.style.visibility="",i.style.clipPath="",i.style.webkitClipPath=""}),e&&(e.killTweensOf(t),e.set(t,{autoAlpha:1,y:0,yPercent:0,clearProps:"transform,opacity,visibility,clipPath,webkitClipPath"}))}function eT(n){const e=window.gsap,t=n.querySelector(".location_card"),i=[...(t==null?void 0:t.querySelectorAll(".location_item, .w-dyn-item"))||[]];if(t){if(e){e.killTweensOf(i),e.to(i,{clipPath:"inset(0% 0% 100% 0%)",webkitClipPath:"inset(0% 0% 100% 0%)",y:-18,duration:.4,ease:"power4.out",overwrite:!0,onComplete:()=>{e.set(t,{autoAlpha:0,x:0,y:0}),e.set(t.querySelectorAll(".location_image, img"),{x:0,y:0})}});return}t.style.opacity="0",t.style.visibility="hidden"}}function uc(n,e){var t;tT((t=n[0])==null?void 0:t.closest(".map_holder"),!!e),n.forEach(i=>{const r=!e||i===e?Nb:Ub;i.style.backgroundColor=r,i.style.color=r,i.querySelectorAll("svg, path, circle, rect, polygon").forEach(s=>{s.style.fill=r,s.style.stroke=r})})}function tT(n,e){if(!n)return;const t=n.querySelector('[data-hq="inactive"]'),i=n.querySelector('[data-hq="active"]');t&&(t.style.opacity=e?"1":"0"),i&&(i.style.opacity=e?"0":"1")}function nT(n,e){return e.reduce((t,i)=>{const r=i.getBoundingClientRect(),s=r.left+r.width/2,o=r.top+r.height/2,a=n.clientX-s,l=n.clientY-o,c=Math.hypot(a,l);return!t||c<t.distance?{pin:i,dx:a,dy:l,distance:c}:t},null)}function iT(n){const e=Object.entries(ho).map(([t,i])=>{const r=n.querySelector(`[data-map="${t}"]`),s=sT(r,n);return s?{...i,...s}:null}).filter(Boolean);return e.length<2?null:{xFit:Xf(e.map(t=>[t.lon,t.x])),yFit:Xf(e.map(t=>[t.lat,t.y]))}}function rT(n,e){return{x:_r(e.xFit.a*n.lon+e.xFit.b,0,100),y:_r(e.yFit.a*n.lat+e.yFit.b,0,100)}}function Xf(n){const e=n.length,t=n.reduce((c,u)=>c+u[0],0),i=n.reduce((c,u)=>c+u[1],0),r=n.reduce((c,u)=>c+u[0]*u[1],0),s=n.reduce((c,u)=>c+u[0]*u[0],0),o=e*s-t*t||1,a=(e*r-t*i)/o,l=(i-a*t)/e;return{a,b:l}}function sT(n,e){if(!n)return null;const t=e.getBoundingClientRect(),i=n.getBoundingClientRect();return!t.width||!t.height?null:{x:(i.left+i.width/2-t.left)/t.width*100,y:(i.top+i.height/2-t.top)/t.height*100}}function oT(n){return[...n.querySelectorAll(".location_item, .w-dyn-item")]}function qf(n){return[...n.children].filter(t=>t.matches("h1,h2,h3,h4,h5,h6,p,div,span")).map(t=>t.textContent.trim()).filter(Boolean)[0]||""}function aT(n){return Ib[dc(n)]}function dc(n){return String(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z]/g,"")}function _r(n,e,t){return Math.min(Math.max(n,e),t)}const hc=new WeakMap,lT=.06;function cT(n=document){var i;const e=[...((i=n.querySelectorAll)==null?void 0:i.call(n,".nav"))||[]].filter(r=>r.querySelector(".mob_nav"));if(!e.length)return;Yf(n),fc(n,!1,{animate:!1});const t=new AbortController;e.forEach(r=>{r.addEventListener("click",s=>{var c,u,d,h,f,g;const o=(u=(c=s.target).closest)==null?void 0:u.call(c,".mob_nav .right_box .nav_link, .hamburger.close, .hamburger.off"),a=(h=(d=s.target).closest)==null?void 0:h.call(d,".mob_nav a[href]"),l=(g=(f=s.target).closest)==null?void 0:g.call(f,".hamburger");if(o){s.preventDefault(),s.stopPropagation(),fc(r,!1);return}if(a&&fT(a)){Kf(r);return}l&&(s.preventDefault(),s.stopPropagation(),fc(r,!0))},{capture:!0,signal:t.signal})}),hc.set(n,t)}function Yf(n=document){var e;(e=hc.get(n))==null||e.abort(),hc.delete(n)}function fc(n,e,t={}){n.querySelectorAll(".mob_nav").forEach(i=>{if(t.animate===!1){go(i,e);return}uT(i,e)})}function uT(n,e){const t=window.gsap;if(!t){go(n,e);return}if(t.killTweensOf(n),e){go(n,!0),dT(n),t.set(n,{opacity:0}),t.to(n,{opacity:1,duration:.16,ease:"power1.out",overwrite:!0}),Po(n,{force:!0,delay:lT,duration:.8,ease:"power3.out",stagger:.045});return}Kf(n),t.to(n,{opacity:0,duration:.2,delay:.08,ease:"power1.in",overwrite:!0,onComplete:()=>{Er(n),go(n,!1)}})}function dT(n){Er(n),Uc(n,{autoAnimate:!1})}function Kf(n){return Co(n)}function go(n,e){n.style.setProperty("display",e?"flex":"none","important"),n.style.setProperty("opacity",e?"1":"0","important"),n.style.setProperty("visibility",e?"visible":"hidden","important"),n.style.setProperty("pointer-events",e?"auto":"none","important"),n.setAttribute("aria-hidden",e?"false":"true")}function hT(n){const e=n.getAttribute("href")||"";return e===""||e.startsWith("#")}function fT(n){const e=n.getAttribute("href")||"";return hT(n)||e.startsWith("mailto:")||e.startsWith("tel:")||n.target==="_blank"?!1:new URL(n.href,window.location.href).origin===window.location.origin}function pT(){return document.readyState!=="loading"?Promise.resolve():new Promise(n=>{document.addEventListener("DOMContentLoaded",n,{once:!0})})}const Ai={three:{spin(){Wn.forEach(n=>n==null?void 0:n.spin())},animateToProgress(n,e){Wn.forEach(t=>{var i,r;((i=t==null?void 0:t.isVisible)==null?void 0:i.call(t))!==!1&&((r=t==null?void 0:t.animateToProgress)==null||r.call(t,n,e))})},setNamespace(n){Wn.forEach(e=>e==null?void 0:e.setNamespace(n))}},barba:null},Wn=new Map,Ft="[MM lifecycle]";wT(),Np(),Cg();const pc={home({namespace:n}){var e;(e=Ai.three)==null||e.setNamespace(n)}};async function mT(){if(await pT(),TT(),Ai.barba=B_({onEnter:jf,onLeave:gT,onTransitionStart:({namespace:n}={})=>{var e,t;(e=Ai.three)==null||e.spin(),(t=Ai.three)==null||t.animateToProgress(0,.55)}}),!Ai.barba){const n=document.querySelector("[data-barba='container']");console.log(Ft,"no barba -> setup attempt",Zt(n)),jf({container:n,namespace:mc(n)})}}async function jf({container:n,namespace:e,transition:t=!1,deferIntros:i=!1}){var o,a,l,c;if(!n){console.log(Ft,"setup skipped -> no container");return}const r=$f(e||mc(n)),s=!t&&r==="home"?Ku({noOverlay:!0}):null;t&&r==="home"&&(n.dataset.homeIntroReady="true"),console.log(Ft,"setup start",{...Zt(n,r),transition:t,deferIntros:i}),n.dataset.pageActive="true",document.body.dataset.page=r,ST(n)&&(console.log(Ft,"run shots()",{...Zt(n,r),hero:n.querySelectorAll('[data-shots="hero"]').length,featuredLists:n.querySelectorAll("[data-featured-list]").length}),await cm(n,{transition:t})),yT(n)&&(await Zf(),(o=window.ScrollTrigger)==null||o.refresh(),console.log(Ft,"run three()",{...Zt(n,r),mounts:n.querySelectorAll("[data-three-canvas]").length}),_T(n),(a=Ai.three)==null||a.setNamespace(r)),ET(n),bT(n),s_(n),Cb(n),cT(n),Gb(n,{transition:t}),Pg(n,{autoAnimate:!t}),console.log(Ft,"reinit webflow",{...Zt(n,r),hasWebflow:!!window.Webflow}),xT(),MT(n)&&(console.log(Ft,"run text()",{...Zt(n,r),transition:t}),await Zf(),Er(n),Uc(n,{autoAnimate:!t&&r!=="home"})),!t&&r==="home"&&await xb(n,{defer:i,loader:s}),t||Xc(n),(l=window.ScrollTrigger)==null||l.refresh(),console.log(Ft,"setup complete",Zt(n,r)),(c=pc[r])==null||c.call(pc,{container:n,namespace:r})}function gT({container:n}){if(!n){console.log(Ft,"teardown skipped -> no container");return}console.log(Ft,"teardown start",Zt(n)),Xu(n),console.log(Ft,"stop shots",Zt(n)),um(n),console.log(Ft,"reset text on leave",Zt(n)),Er(n),console.log(Ft,"destroy three",{...Zt(n),mounts:n.querySelectorAll("[data-three-canvas]").length}),vT(n),o_(n),Pb(n),Yf(n),Wb(n),Pu(n),delete n.dataset.pageActive,console.log(Ft,"teardown complete",Zt(n))}mT();function _T(n=document){Wn.forEach((e,t)=>{t.isConnected||(e==null||e.destroy(),Wn.delete(t))}),n==null||n.querySelectorAll("[data-three-canvas]").forEach(e=>{if(Wn.has(e))return;const t=lb({mount:e});t&&Wn.set(e,t)})}function vT(n){n==null||n.querySelectorAll("[data-three-canvas]").forEach(e=>{var t;(t=Wn.get(e))==null||t.destroy(),Wn.delete(e)})}function $f(n){return String(n||"page").trim().toLowerCase()}function mc(n){var e;return((e=n==null?void 0:n.dataset)==null?void 0:e.barbaNamespace)||"page"}function xT(){var e,t,i,r,s;const n=window.Webflow;n&&((e=n.destroy)==null||e.call(n),(t=n.ready)==null||t.call(n),(s=(r=(i=n.require)==null?void 0:i.call(n,"ix2"))==null?void 0:r.init)==null||s.call(r))}async function Zf(){var n,e,t;return await((t=(e=(n=document.fonts)==null?void 0:n.ready)==null?void 0:e.catch)==null?void 0:t.call(e,()=>{})),new Promise(i=>{requestAnimationFrame(()=>requestAnimationFrame(i))})}function Zt(n,e){var t;return{namespace:$f(e||mc(n)),active:((t=n==null?void 0:n.dataset)==null?void 0:t.pageActive)==="true",connected:!!(n!=null&&n.isConnected),className:(n==null?void 0:n.className)||""}}function yT(n){return!!(n!=null&&n.querySelector("[data-three-canvas]"))}function ST(n){return!!(n!=null&&n.querySelector("[data-shots], [data-featured-list], [data-shots-work], [data-shots-showreel], [data-showreel-id], [data-showreel-stream], [data-direct-id]"))}function MT(n){return!!(n!=null&&n.querySelector("h1, h2, h3, h4, h5, h6, p, [data-text], .filter, .w-inline-block, .body-large, .body-regular, .body-small, .link_large, .link_small, .nav_link, .heading-1, .heading-2, .heading-3, .heading-4, .heading-5, .heading-6"))}function ET(n=document){const e=n==null?void 0:n.querySelectorAll(".directors_list, .director_list, [data-directors='list']");if(!(e!=null&&e.length))return;const t=Jf(window.location.pathname);e.forEach(i=>{i.querySelectorAll("a[href]").forEach(r=>{const o=Jf(new URL(r.href,window.location.href).pathname)===t||r.getAttribute("aria-current")==="page"||r.classList.contains("w--current");r.style.opacity=o?"1":"",r.style.color=o?"":"#C3C3C3"})})}function Jf(n){return String(n||"/").replace(/\/+$/,"")||"/"}function bT(n=document){const e=String(new Date().getFullYear());n==null||n.querySelectorAll("[data-year]").forEach(t=>{t.textContent=e})}function TT(){const n=window.gsap,e=window.ScrollTrigger;!n||!e||!window.Lenis||window.__mmLenisScrollTriggerBridge||(window.__mmLenisScrollTriggerBridge=!0,n.ticker.add(()=>e.update()),n.ticker.lagSmoothing(0))}function wT(){if(!window.Lenis||window.__mmLenisCaptureInit)return;const n=window.Lenis;window.__mmLenisCaptureInit=!0,window.__mmLenisInstances=window.__mmLenisInstances||[],window.Lenis=function(...t){const i=new n(...t);return window.__mmLenisInstances.push(i),i},window.Lenis.prototype=n.prototype,Object.setPrototypeOf(window.Lenis,n)}return yo.app=Ai,Object.defineProperty(yo,Symbol.toStringTag,{value:"Module"}),yo})({});
//# sourceMappingURL=base.js.map
