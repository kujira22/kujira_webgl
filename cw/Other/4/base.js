var WebflowThreeBarbaStarter=(function(mo){"use strict";var zh;function Hh(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,typeof(r=(function(s,o){if(typeof s!="object"||s===null)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var l=a.call(s,"string");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)})(n.key))=="symbol"?r:String(r),n)}var r}function go(i,e,t){return e&&Hh(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function gn(){return gn=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},gn.apply(this,arguments)}function Qr(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,fr(i,e)}function _o(i){return _o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_o(i)}function fr(i,e){return fr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},fr(i,e)}function Vh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function vo(i,e,t){return vo=Vh()?Reflect.construct.bind():function(n,r,s){var o=[null];o.push.apply(o,r);var a=new(Function.bind.apply(n,o));return s&&fr(a,s.prototype),a},vo.apply(null,arguments)}function xo(i){var e=typeof Map=="function"?new Map:void 0;return xo=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return vo(t,arguments,_o(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),fr(n,t)},xo(i)}function Gh(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}var Wn,Wh=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(i){i[i.off=0]="off",i[i.error=1]="error",i[i.warning=2]="warning",i[i.info=3]="info",i[i.debug=4]="debug"})(Wn||(Wn={}));var jl=Wn.off,ci=(function(){function i(t){this.t=void 0,this.t=t}i.getLevel=function(){return jl},i.setLevel=function(t){return jl=Wn[t]};var e=i.prototype;return e.error=function(){this.i(console.error,Wn.error,[].slice.call(arguments))},e.warn=function(){this.i(console.warn,Wn.warning,[].slice.call(arguments))},e.info=function(){this.i(console.info,Wn.info,[].slice.call(arguments))},e.debug=function(){this.i(console.log,Wn.debug,[].slice.call(arguments))},e.i=function(t,n,r){n<=i.getLevel()&&t.apply(console,["["+this.t+"] "].concat(r))},i})();function Ri(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Kl(i){return i&&i.sensitive?"":"i"}var _n={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},ui=new((function(){function i(){this.o=_n,this.u=void 0,this.h={after:null,before:null,parent:null}}var e=i.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u||(this.u=new DOMParser),this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&(this.v(t),t.parentNode.removeChild(t))},e.addContainer=function(t,n){var r=this.getContainer()||this.h.before;r?this.l(t,r):this.h.after?this.h.after.parentNode.insertBefore(t,this.h.after):this.h.parent?this.h.parent.appendChild(t):n.appendChild(t)},e.getSibling=function(){return this.h},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){var t=[].slice.call(arguments).length;if(t===0)throw new Error("resolveUrl requires at least one argument; got none.");var n=document.createElement("base");if(n.href=arguments[0],t===1)return n.href;var r=document.getElementsByTagName("head")[0];r.insertBefore(n,r.firstChild);for(var s,o=document.createElement("a"),a=1;a<t;a++)o.href=arguments[a],n.href=s=o.href;return r.removeChild(n),s},e.l=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},e.v=function(t){return this.h={after:t.nextElementSibling,before:t.previousElementSibling,parent:t.parentElement},this.h},i})()),Xh=(function(){function i(){this.p=void 0,this.m=[],this.P=-1}var e=i.prototype;return e.init=function(t,n){this.p="barba";var r={data:{},ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.P=0,this.m.push(r);var s={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,r){if(r&&r.state){var s=r.state,o=s.index;n=this.g(this.P-o),this.replace(s.states),this.P=o}else this.add(t,n);return n},e.add=function(t,n,r,s){var o=r??this.R(n),a={data:s??{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};switch(o){case"push":this.P=this.size,this.m.push(a);break;case"replace":this.set(this.P,a)}var l={from:this.p,index:this.P,states:[].concat(this.m)};switch(o){case"push":window.history&&window.history.pushState(l,"",t);break;case"replace":window.history&&window.history.replaceState(l,"",t)}},e.store=function(t,n){var r=n||this.P,s=this.get(r);s.data=gn({},s.data,t),this.set(r,s);var o={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(o,"")},e.update=function(t,n){var r=n||this.P,s=gn({},this.get(r),t);this.set(r,s)},e.remove=function(t){t?this.m.splice(t,1):this.m.pop(),this.P--},e.clear=function(){this.m=[],this.P=-1},e.replace=function(t){this.m=t},e.get=function(t){return this.m[t]},e.set=function(t,n){return this.m[t]=n},e.R=function(t){var n="push",r=t,s=_n.prefix+"-"+_n.history;return r.hasAttribute&&r.hasAttribute(s)&&(n=r.getAttribute(s)),n},e.g=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},go(i,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),i})(),Jl=new Xh,es=function(i,e){try{var t=(function(){if(!e.next.html)return Promise.resolve(i).then(function(n){var r=e.next;if(n){var s=ui.toElement(n.html);r.namespace=ui.getNamespace(s),r.container=ui.getContainer(s),r.url=n.url,r.html=n.html,Jl.update({ns:r.namespace});var o=ui.toDocument(n.html);document.title=o.title}})})();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},Zl=function i(e,t,n){return e instanceof RegExp?(function(r,s){if(!s)return r;for(var o=/\((?:\?<(.*?)>)?(?!\?)/g,a=0,l=o.exec(r.source);l;)s.push({name:l[1]||a++,prefix:"",suffix:"",modifier:"",pattern:""}),l=o.exec(r.source);return r})(e,t):Array.isArray(e)?(function(r,s,o){var a=r.map(function(l){return i(l,s,o).source});return new RegExp("(?:".concat(a.join("|"),")"),Kl(o))})(e,t,n):(function(r,s,o){return(function(a,l,c){c===void 0&&(c={});for(var h=c.strict,d=h!==void 0&&h,u=c.start,f=u===void 0||u,g=c.end,y=g===void 0||g,m=c.encode,p=m===void 0?function(T){return T}:m,M=c.delimiter,S=M===void 0?"/#?":M,x=c.endsWith,U="[".concat(Ri(x===void 0?"":x),"]|$"),A="[".concat(Ri(S),"]"),I=f?"^":"",_=0,E=a;_<E.length;_++){var P=E[_];if(typeof P=="string")I+=Ri(p(P));else{var R=Ri(p(P.prefix)),C=Ri(p(P.suffix));if(P.pattern)if(l&&l.push(P),R||C)if(P.modifier==="+"||P.modifier==="*"){var F=P.modifier==="*"?"?":"";I+="(?:".concat(R,"((?:").concat(P.pattern,")(?:").concat(C).concat(R,"(?:").concat(P.pattern,"))*)").concat(C,")").concat(F)}else I+="(?:".concat(R,"(").concat(P.pattern,")").concat(C,")").concat(P.modifier);else I+=P.modifier==="+"||P.modifier==="*"?"((?:".concat(P.pattern,")").concat(P.modifier,")"):"(".concat(P.pattern,")").concat(P.modifier);else I+="(?:".concat(R).concat(C,")").concat(P.modifier)}}if(y)d||(I+="".concat(A,"?")),I+=c.endsWith?"(?=".concat(U,")"):"$";else{var D=a[a.length-1],L=typeof D=="string"?A.indexOf(D[D.length-1])>-1:D===void 0;d||(I+="(?:".concat(A,"(?=").concat(U,"))?")),L||(I+="(?=".concat(A,"|").concat(U,")"))}return new RegExp(I,Kl(c))})((function(a,l){l===void 0&&(l={});for(var c=(function(C){for(var F=[],D=0;D<C.length;){var L=C[D];if(L!=="*"&&L!=="+"&&L!=="?")if(L!=="\\")if(L!=="{")if(L!=="}")if(L!==":")if(L!=="(")F.push({type:"CHAR",index:D,value:C[D++]});else{var T=1,z="";if(C[q=D+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(q));for(;q<C.length;)if(C[q]!=="\\"){if(C[q]===")"){if(--T==0){q++;break}}else if(C[q]==="("&&(T++,C[q+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(q));z+=C[q++]}else z+=C[q++]+C[q++];if(T)throw new TypeError("Unbalanced pattern at ".concat(D));if(!z)throw new TypeError("Missing pattern at ".concat(D));F.push({type:"PATTERN",index:D,value:z}),D=q}else{for(var X="",q=D+1;q<C.length;){var G=C.charCodeAt(q);if(!(G>=48&&G<=57||G>=65&&G<=90||G>=97&&G<=122||G===95))break;X+=C[q++]}if(!X)throw new TypeError("Missing parameter name at ".concat(D));F.push({type:"NAME",index:D,value:X}),D=q}else F.push({type:"CLOSE",index:D,value:C[D++]});else F.push({type:"OPEN",index:D,value:C[D++]});else F.push({type:"ESCAPED_CHAR",index:D++,value:C[D++]});else F.push({type:"MODIFIER",index:D,value:C[D++]})}return F.push({type:"END",index:D,value:""}),F})(a),h=l.prefixes,d=h===void 0?"./":h,u="[^".concat(Ri(l.delimiter||"/#?"),"]+?"),f=[],g=0,y=0,m="",p=function(C){if(y<c.length&&c[y].type===C)return c[y++].value},M=function(C){var F=p(C);if(F!==void 0)return F;var D=c[y],L=D.index;throw new TypeError("Unexpected ".concat(D.type," at ").concat(L,", expected ").concat(C))},S=function(){for(var C,F="";C=p("CHAR")||p("ESCAPED_CHAR");)F+=C;return F};y<c.length;){var x=p("CHAR"),U=p("NAME"),A=p("PATTERN");if(U||A)d.indexOf(_=x||"")===-1&&(m+=_,_=""),m&&(f.push(m),m=""),f.push({name:U||g++,prefix:_,suffix:"",pattern:A||u,modifier:p("MODIFIER")||""});else{var I=x||p("ESCAPED_CHAR");if(I)m+=I;else if(m&&(f.push(m),m=""),p("OPEN")){var _=S(),E=p("NAME")||"",P=p("PATTERN")||"",R=S();M("CLOSE"),f.push({name:E||(P?g++:""),pattern:E&&!P?u:P,prefix:_,suffix:R,modifier:p("MODIFIER")||""})}else M("END")}}return f})(r,o),s,o)})(e,t,n)},qh={__proto__:null,update:es,nextTick:function(){return new Promise(function(i){window.requestAnimationFrame(i)})},pathToRegexp:Zl},Ql=function(){return window.location.origin},pr=function(i){return i===void 0&&(i=window.location.href),Xn(i).port},Xn=function(i){var e,t=i.match(/:\d+/);if(t===null)/^http/.test(i)&&(e=80),/^https/.test(i)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var r,s=i.replace(Ql(),""),o={},a=s.indexOf("#");a>=0&&(r=s.slice(a+1),s=s.slice(0,a));var l=s.indexOf("?");return l>=0&&(o=ec(s.slice(l+1)),s=s.slice(0,l)),{hash:r,path:s,port:e,query:o}},ec=function(i){return i.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},yo=function(i){return i===void 0&&(i=window.location.href),i.replace(/(\/#.*|\/|#.*)$/,"")},$h={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(i,e){return e===void 0&&(e=document.baseURI),new URL(i,e).href},getOrigin:Ql,getPort:pr,getPath:function(i){return i===void 0&&(i=window.location.href),Xn(i).path},getQuery:function(i,e){return e===void 0&&(e=!1),e?JSON.stringify(Xn(i).query):Xn(i).query},getHash:function(i){return Xn(i).hash},parse:Xn,parseQuery:ec,clean:yo};function Yh(i,e,t,n,r){return e===void 0&&(e=2e3),new Promise(function(s,o){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){if(a.status===200){var l=a.responseURL!==""&&a.responseURL!==i?a.responseURL:i;s({html:a.responseText,url:gn({href:l},Xn(l))}),n.update(i,{status:"fulfilled",target:l})}else if(a.status){var c={status:a.status,statusText:a.statusText};t(i,c),o(c),n.update(i,{status:"rejected"})}}},a.ontimeout=function(){var l=new Error("Timeout error ["+e+"]");t(i,l),o(l),n.update(i,{status:"rejected"})},a.onerror=function(){var l=new Error("Fetch error");t(i,l),o(l),n.update(i,{status:"rejected"})},a.open("GET",i),a.timeout=e,a.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),a.setRequestHeader("x-barba","yes"),r.all().forEach(function(l,c){a.setRequestHeader(c,l)}),a.send()})}function jh(i){return!!i&&(typeof i=="object"||typeof i=="function")&&typeof i.then=="function"}function Pi(i,e){return e===void 0&&(e={}),function(){var t=arguments,n=!1,r=new Promise(function(s,o){e.async=function(){return n=!0,function(l,c){l?o(l):s(c)}};var a=i.apply(e,[].slice.call(t));n||(jh(a)?a.then(s,o):s(a))});return r}}var qn=new((function(i){function e(){var n;return(n=i.call(this)||this).logger=new ci("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}Qr(e,i);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(r){n[r]||(n[r]=function(s,o){n.registered.has(r)||n.registered.set(r,new Set),n.registered.get(r).add({ctx:o||{},fn:s})})})},t.do=function(n){var r=arguments,s=this;if(this.registered.has(n)){var o=Promise.resolve();return this.registered.get(n).forEach(function(a){o=o.then(function(){return Pi(a.fn,a.ctx).apply(void 0,[].slice.call(r,1))})}),o.catch(function(a){s.logger.debug("Hook error ["+n+"]"),s.logger.error(a)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(r){delete n[r]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(r,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e})(Wh)),tc=(function(){function i(e){if(this.k=void 0,this.O=[],typeof e=="boolean")this.k=e;else{var t=Array.isArray(e)?e:[e];this.O=t.map(function(n){return Zl(n)})}}return i.prototype.checkHref=function(e){if(typeof this.k=="boolean")return this.k;var t=Xn(e).path;return this.O.some(function(n){return n.exec(t)!==null})},i})(),Kh=(function(i){function e(n){var r;return(r=i.call(this,n)||this).T=new Map,r}Qr(e,i);var t=e.prototype;return t.set=function(n,r,s,o,a){return this.T.set(n,{action:s,request:r,status:o,target:a??n}),{action:s,request:r,status:o,target:a}},t.get=function(n){return this.T.get(n)},t.getRequest=function(n){return this.T.get(n).request},t.getAction=function(n){return this.T.get(n).action},t.getStatus=function(n){return this.T.get(n).status},t.getTarget=function(n){return this.T.get(n).target},t.has=function(n){return!this.checkHref(n)&&this.T.has(n)},t.delete=function(n){return this.T.delete(n)},t.update=function(n,r){var s=gn({},this.T.get(n),r);return this.T.set(n,s),s},e})(tc),Jh=(function(){function i(){this.A=new Map}var e=i.prototype;return e.set=function(t,n){return this.A.set(t,n),{name:n}},e.get=function(t){return this.A.get(t)},e.all=function(){return this.A},e.has=function(t){return this.A.has(t)},e.delete=function(t){return this.A.delete(t)},e.clear=function(){return this.A.clear()},i})(),Zh=function(){return!window.history.pushState},Qh=function(i){return!i.el||!i.href},ed=function(i){var e=i.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},td=function(i){var e=i.el;return e.hasAttribute("target")&&e.target==="_blank"},nd=function(i){var e=i.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},id=function(i){var e=i.el;return e.port!==void 0&&pr()!==pr(e.href)},rd=function(i){var e=i.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},sd=function(i){return i.el.hasAttribute(_n.prefix+"-"+_n.prevent)},od=function(i){return!!i.el.closest("["+_n.prefix+"-"+_n.prevent+'="all"]')},ad=function(i){var e=i.href;return yo(e)===yo()&&pr(e)===pr()},ld=(function(i){function e(n){var r;return(r=i.call(this,n)||this).suite=[],r.tests=new Map,r.init(),r}Qr(e,i);var t=e.prototype;return t.init=function(){this.add("pushState",Zh),this.add("exists",Qh),this.add("newTab",ed),this.add("blank",td),this.add("corsDomain",nd),this.add("corsPort",id),this.add("download",rd),this.add("preventSelf",sd),this.add("preventAll",od),this.add("sameUrl",ad,!1)},t.add=function(n,r,s){s===void 0&&(s=!0),this.tests.set(n,r),s&&this.suite.push(n)},t.run=function(n,r,s,o){return this.tests.get(n)({el:r,event:s,href:o})},t.checkLink=function(n,r,s){var o=this;return this.suite.some(function(a){return o.run(a,n,r,s)})},e})(tc),Mo=(function(i){function e(t,n){var r;return n===void 0&&(n="Barba error"),(r=i.call.apply(i,[this].concat([].slice.call(arguments,2)))||this).error=void 0,r.label=void 0,r.error=t,r.label=n,Error.captureStackTrace&&Error.captureStackTrace(Gh(r),e),r.name="BarbaError",r}return Qr(e,i),e})(xo(Error)),cd=(function(){function i(t){t===void 0&&(t=[]),this.logger=new ci("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=i.prototype;return e.add=function(t,n){t==="rule"?this.j.splice(n.position||0,0,n.value):this.all.push(n),this.update()},e.resolve=function(t,n){var r=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(u){return u.name&&u.name==="self"}:function(u){return!u.name||u.name!=="self"});var o=new Map,a=s.find(function(u){var f=!0,g={};return n.self&&u.name==="self"?(o.set(u,g),!0):(r.j.reverse().forEach(function(y){f&&(f=r.M(u,y,t,g),u.from&&u.to&&(f=r.M(u,y,t,g,"from")&&r.M(u,y,t,g,"to")),u.from&&!u.to&&(f=r.M(u,y,t,g,"from")),!u.from&&u.to&&(f=r.M(u,y,t,g,"to")))}),o.set(u,g),f)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var h,d=[a];Object.keys(l).length>0&&d.push(l),(h=this.logger).info.apply(h,["Transition found ["+c.join(",")+"]"].concat(d))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.N(n)}).sort(function(n,r){return n.priority-r.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.M=function(t,n,r,s,o){var a=!0,l=!1,c=t,h=n.name,d=h,u=h,f=h,g=o?c[o]:c,y=o==="to"?r.next:r.current;if(o?g&&g[h]:g[h]){switch(n.type){case"strings":default:var m=Array.isArray(g[d])?g[d]:[g[d]];y[d]&&m.indexOf(y[d])!==-1&&(l=!0),m.indexOf(y[d])===-1&&(a=!1);break;case"object":var p=Array.isArray(g[u])?g[u]:[g[u]];y[u]?(y[u].name&&p.indexOf(y[u].name)!==-1&&(l=!0),p.indexOf(y[u].name)===-1&&(a=!1)):a=!1;break;case"function":g[f](r)?l=!0:a=!1}l&&(o?(s[o]=s[o]||{},s[o][h]=c[o][h]):s[h]=c[h])}return a},e.S=function(t,n,r){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,r),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.N=function(t){var n=this;t.priority=0;var r=0;return this.j.forEach(function(s,o){r+=n.S(t,s.name,o+1)}),t.priority=r,t},i})();function mr(i,e){try{var t=i()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}var ud=(function(){function i(t){t===void 0&&(t=[]),this.logger=new ci("@barba/core"),this.store=void 0,this.C=!1,this.store=new cd(t)}var e=i.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,r=t.transition;try{var s=function(){o.C=!1},o=this,a=r||{};o.C=!0;var l=mr(function(){return Promise.resolve(o.L("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.L("afterOnce",n,a)).then(function(){})})})},function(c){o.C=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,r=t.transition,s=t.page,o=t.wrapper;try{var a=function(u){l.C=!1},l=this,c=r||{},h=c.sync===!0||!1;l.C=!0;var d=mr(function(){function u(){return Promise.resolve(l.L("before",n,c)).then(function(){function g(m){return Promise.resolve(l.remove(n)).then(function(){return Promise.resolve(l.L("after",n,c)).then(function(){})})}var y=(function(){if(h)return mr(function(){return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),l.enter(n,c)])).then(function(){return Promise.resolve(l.L("afterLeave",n,c)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})})},function(S){if(l.H(S))throw new Mo(S,"Transition error [sync]")});var m=function(S){return mr(function(){var x=(function(){if(p!==!1)return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(l.enter(n,c,p)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})();if(x&&x.then)return x.then(function(){})},function(x){if(l.H(x))throw new Mo(x,"Transition error [before/after/enter]")})},p=!1,M=mr(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),es(s,n)]).then(function(S){return S[0]})).then(function(S){return p=S,Promise.resolve(l.L("afterLeave",n,c)).then(function(){})})})},function(S){if(l.H(S))throw new Mo(S,"Transition error [before/after/leave]")});return M&&M.then?M.then(m):m()})();return y&&y.then?y.then(g):g()})}var f=(function(){if(h)return Promise.resolve(es(s,n)).then(function(){})})();return f&&f.then?f.then(u):u()},function(u){throw l.C=!1,u.name&&u.name==="BarbaError"?(l.logger.debug(u.label),l.logger.error(u.error),u):(l.logger.debug("Transition error [page]"),l.logger.error(u),u)});return Promise.resolve(d&&d.then?d.then(a):a())}catch(u){return Promise.reject(u)}},e.once=function(t,n){try{return Promise.resolve(qn.do("once",t,n)).then(function(){return n.once?Pi(n.once,n)(t):Promise.resolve()})}catch(r){return Promise.reject(r)}},e.leave=function(t,n){try{return Promise.resolve(qn.do("leave",t,n)).then(function(){return n.leave?Pi(n.leave,n)(t):Promise.resolve()})}catch(r){return Promise.reject(r)}},e.enter=function(t,n,r){try{return Promise.resolve(qn.do("enter",t,n)).then(function(){return n.enter?Pi(n.enter,n)(t,r):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return ui.addContainer(t.next.container,n),qn.do("nextAdded",t),Promise.resolve()}catch(r){return Promise.reject(r)}},e.remove=function(t){try{return ui.removeContainer(t.current.container),qn.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.H=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.L=function(t,n,r){try{return Promise.resolve(qn.do(t,n,r)).then(function(){return r[t]?Pi(r[t],r)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},go(i,[{key:"isRunning",get:function(){return this.C},set:function(t){this.C=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),i})(),hd=(function(){function i(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){qn[n](t._(n))}))}return i.prototype._=function(e){var t=this;return function(n){var r=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(r.namespace);return s&&s[e]?Pi(s[e],s)(n):Promise.resolve()}},i})();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(i){var e=this;do{if(e.matches(i))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var dd={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},ts=new((function(){function i(){this.version="2.10.3",this.schemaPage=dd,this.Logger=ci,this.logger=new ci("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=qn,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=ui,this.helpers=qh,this.history=Jl,this.request=Yh,this.url=$h,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var e=i.prototype;return e.use=function(t,n){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,r=n.transitions,s=r===void 0?[]:r,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?_n:l,h=n.requestError,d=n.timeout,u=d===void 0?2e3:d,f=n.cacheIgnore,g=f!==void 0&&f,y=n.cacheFirstPage,m=y!==void 0&&y,p=n.prefetchIgnore,M=p!==void 0&&p,S=n.preventRunning,x=S!==void 0&&S,U=n.prevent,A=U===void 0?null:U,I=n.debug,_=n.logLevel;if(ci.setLevel((I!==void 0&&I)===!0?"debug":_===void 0?"off":_),this.logger.info(this.version),Object.keys(c).forEach(function(R){_n[R]&&(_n[R]=c[R])}),this.B=h,this.timeout=u,this.cacheIgnore=g,this.cacheFirstPage=m,this.prefetchIgnore=M,this.preventRunning=x,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var E=this.data.current;if(!E.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new Kh(g),this.headers=new Jh,this.prevent=new ld(M),this.transitions=new ud(s),this.views=new hd(a),A!==null){if(typeof A!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",A)}this.history.init(E.url.href,E.namespace),m&&this.cache.set(E.url.href,Promise.resolve({html:E.html,url:E.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(R){return R.init()});var P=this.data;P.trigger="barba",P.next=P.current,P.current=gn({},this.schemaPage),this.hooks.do("ready",P),this.once(P),this.I()},e.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,r){var s;if(n===void 0&&(n="barba"),this.F=null,this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(t,!0):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(this.cache.has(t)?this.cache.get(t).target:t,n,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,n,r??void 0,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function r(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=(function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}})();return s&&s.then?s.then(r):r()})}catch(r){return Promise.reject(r)}},e.page=function(t,n,r,s){try{var o,a=function(){var d=l.data;return Promise.resolve(l.hooks.do("page",d)).then(function(){var u=(function(f,g){try{var y=(m=l.transitions.get(d,{once:!1,self:s}),Promise.resolve(l.transitions.doPage({data:d,page:o,transition:m,wrapper:l.q})).then(function(){l.I()}))}catch{return g()}var m;return y&&y.then?y.then(void 0,g):y})(0,function(){ci.getLevel()===0&&l.force(d.next.url.href)});if(u&&u.then)return u.then(function(){})})},l=this;if(l.data.next.url=gn({href:t},l.url.parse(t)),l.data.trigger=n,l.data.event=r,l.cache.has(t))o=l.cache.update(t,{action:"click"}).request;else{var c=l.request(t,l.timeout,l.onRequestError.bind(l,n),l.cache,l.headers);c.then(function(d){d.url.href!==t&&l.history.add(d.url.href,n,"replace")}),o=l.cache.set(t,c,"click","pending").request}var h=(function(){if(l.transitions.shouldWait)return Promise.resolve(es(o,l.data)).then(function(){})})();return Promise.resolve(h&&h.then?h.then(a):a())}catch(d){return Promise.reject(d)}},e.onRequestError=function(t){this.transitions.isRunning=!1;var n=[].slice.call(arguments,1),r=n[0],s=n[1],o=this.cache.getAction(r);return this.cache.delete(r),this.B&&this.B(t,o,r,s)===!1||o==="click"&&this.force(r),!1},e.prefetch=function(t){var n=this;t=this.url.getAbsoluteHref(t),this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(r){n.logger.error(r)}),"prefetch","pending")},e.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},e.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},e.U=function(t){var n=this,r=this.W(t);if(r){var s=this.url.getAbsoluteHref(this.dom.getHref(r));this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,r),this.cache,this.headers).catch(function(o){n.logger.error(o)}),"enter","pending")}},e.$=function(t){var n=this.W(t);if(n){if(this.transitions.isRunning&&this.preventRunning)return t.preventDefault(),void t.stopPropagation();this.F=t,this.go(this.dom.getHref(n),n,t)}},e.X=function(t){this.go(this.url.getHref(),"popstate",t)},e.W=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.I=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:gn({href:t},this.url.parse(t))};this.D={current:n,event:void 0,next:gn({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},go(i,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),i})());const So=.28,nc="[base lifecycle]";function fd({onEnter:i,onLeave:e,onBeforeLeave:t,onStart:n,onComplete:r}={}){let s=()=>{},o=Promise.resolve();return{name:"transition",sync:!0,async once({next:a}){console.log(nc,"transition once -> run setup",bo(a)),await(i==null?void 0:i(Li(a)))},before({current:a,next:l}){console.log(nc,"transition before",md(a,l)),a.container.dataset.pageLeaving="true",t==null||t(Li(a)),delete l.container.dataset.pageLeaving,pd(a.container,l.container),window.scrollTo(0,0),o=new Promise(c=>{s=c})},async leave({current:a}){await o,n==null||n(Li(a)),await ic(a.container,0)},async enter({next:a}){try{await(i==null?void 0:i(Li(a,{transition:!0})))}finally{s()}await ic(a.container,1)},async after({current:a,next:l}){var c;rc(a.container),rc(l.container),window.scrollTo(0,0),await(e==null?void 0:e(Li(a))),(c=window.ScrollTrigger)==null||c.refresh(),r==null||r(Li(l))}}}function ic(i,e){const t=window.gsap;return t?t.to(i,{opacity:e,duration:So,ease:"power1.inOut",overwrite:!0}):new Promise(n=>{i.style.transition=`opacity ${So}s ease-in-out`,requestAnimationFrame(()=>{i.style.opacity=String(e),window.setTimeout(n,So*1e3)})})}function pd(i,e){const t=window.scrollY||window.pageYOffset||0;i.style.position="fixed",i.style.top=`${-t}px`,i.style.left="0",i.style.width="100%",i.style.zIndex="1",e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.zIndex="2",e.style.opacity="0"}function rc(i){["position","top","left","width","zIndex","opacity","transition"].forEach(t=>{i.style[t]=""}),delete i.dataset.pageLeaving}function md(i,e){return{current:bo(i),next:bo(e)}}function bo(i){var e,t;return{namespace:sc(i),connected:!!((e=i==null?void 0:i.container)!=null&&e.isConnected),className:((t=i==null?void 0:i.container)==null?void 0:t.className)||""}}function Li(i,e={}){return{container:(i==null?void 0:i.container)||null,html:i==null?void 0:i.html,namespace:sc(i),transition:!!e.transition}}function sc(i){var e,t;return String((i==null?void 0:i.namespace)||((t=(e=i==null?void 0:i.container)==null?void 0:e.dataset)==null?void 0:t.barbaNamespace)||"page").trim().toLowerCase()}const Eo="[base lifecycle]";function gd({onEnter:i,onLeave:e,onBeforeLeave:t,onTransitionStart:n,onTransitionComplete:r}={}){return document.querySelector("[data-barba='wrapper']")?(console.log(Eo,"barba init"),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),ts.init({debug:!1,preventRunning:!0,transitions:[fd({onEnter:i,onLeave:e,onBeforeLeave:t,onStart:n,onComplete:r})]}),_d(),ts):(console.log(Eo,"barba skipped -> no wrapper"),null)}function _d(){window.__baseBarbaLinkRouterInit||(window.__baseBarbaLinkRouterInit=!0,document.addEventListener("click",i=>{var n,r;const e=(r=(n=i.target).closest)==null?void 0:r.call(n,"a[href]");if(!e||vd(i,e))return;const t=new URL(e.href,window.location.href);t.href!==window.location.href&&(console.log(Eo,"link router -> barba.go",{href:e.getAttribute("href"),url:t.href}),i.preventDefault(),i.stopImmediatePropagation(),ts.transitions.isRunning||ts.go(t.href,e,i))},!0))}function vd(i,e){if(i.defaultPrevented||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.button!==0)return!0;const t=e.getAttribute("href")||"";if(t===""||t.startsWith("#")||t.startsWith("mailto:")||t.startsWith("tel:")||e.target&&e.target!=="_self"||e.hasAttribute("download")||e.closest("[data-barba-prevent]"))return!0;const n=new URL(e.href,window.location.href);return n.origin!==window.location.origin||n.pathname===window.location.pathname&&n.search===window.location.search&&!!n.hash}const oc="base-underline-link-style";let ac=!1;function xd(){if(Md(),yd(),document.getElementById(oc))return;const i=document.createElement("style");i.id=oc,i.textContent=`
    [data-underline-link] {
      position: relative;
      text-decoration: none;
      --base-underline-thickness: 0.07lh;
      --base-underline-offset: 0.02lh;
    }

    [data-underline-link]::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: calc(var(--base-underline-offset) * -1);
      height: 0;
      border-bottom: var(--base-underline-thickness) solid currentColor;
      background: transparent;
      transform: scaleX(var(--base-underline-scale, 0));
      transform-origin: var(--base-underline-origin, right center);
      transition: transform 0.24s ease;
      pointer-events: none;
    }

    html.base-safari .w-dyn-item [data-underline-link] {
      display: inline-block;
      vertical-align: top;
      line-height: inherit;
    }


    [data-underline-link="alt"]::after {
      transform-origin: var(--base-underline-origin, left center);
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
      transform: scaleX(var(--base-underline-scale, 0));
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
      transform: scaleX(var(--base-underline-scale, 1));
      transform-origin: left center;
      animation: none;
    }

  `,document.head.appendChild(i)}function yd(){document.documentElement.classList.toggle("base-safari",Sd())}function Md(){ac||(ac=!0,document.addEventListener("pointerdown",lc,!0),document.addEventListener("click",lc,!0))}function lc(i){var t,n;document.querySelectorAll("[data-underline-clicked='true']").forEach(r=>{delete r.dataset.underlineClicked,delete r.dataset.underlineClickedHovered});const e=(n=(t=i.target)==null?void 0:t.closest)==null?void 0:n.call(t,"[data-underline-link]");e&&(e.dataset.underlineClicked="true",e.dataset.underlineClickedHovered=String(e.matches(":hover")))}function Sd(){return/^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo="184",bd=0,cc=1,Ed=2,ns=1,wd=2,gr=3,on=0,Wt=1,Rn=2,Pn=0,Di=1,uc=2,hc=3,dc=4,Ad=5,hi=100,Td=101,Cd=102,Rd=103,Pd=104,Ld=200,Dd=201,Id=202,Ud=203,Ao=204,To=205,Nd=206,Fd=207,Od=208,Bd=209,zd=210,kd=211,Hd=212,Vd=213,Gd=214,Co=0,Ro=1,Po=2,Ii=3,Lo=4,Do=5,Io=6,Uo=7,No=0,Wd=1,Xd=2,an=0,Fo=1,Oo=2,fc=3,is=4,pc=5,mc=6,Bo=7,gc=300,di=301,Ui=302,zo=303,ko=304,rs=306,ss=1e3,ln=1001,Ho=1002,Ut=1003,qd=1004,os=1005,ft=1006,Vo=1007,$n=1008,Yt=1009,_c=1010,vc=1011,_r=1012,Go=1013,vn=1014,$t=1015,jt=1016,Wo=1017,Xo=1018,vr=1020,xc=35902,yc=35899,Mc=1021,Sc=1022,tn=1023,Ln=1026,fi=1027,qo=1028,$o=1029,pi=1030,Yo=1031,jo=1033,as=33776,ls=33777,cs=33778,us=33779,Ko=35840,Jo=35841,Zo=35842,Qo=35843,ea=36196,ta=37492,na=37496,ia=37488,ra=37489,hs=37490,sa=37491,oa=37808,aa=37809,la=37810,ca=37811,ua=37812,ha=37813,da=37814,fa=37815,pa=37816,ma=37817,ga=37818,_a=37819,va=37820,xa=37821,ya=36492,Ma=36494,Sa=36495,ba=36283,Ea=36284,ds=36285,wa=36286,$d=3200,fs=0,Yd=1,Yn="",Nt="srgb",xr="srgb-linear",ps="linear",ht="srgb",Ni=7680,bc=519,jd=512,Kd=513,Jd=514,Aa=515,Zd=516,Qd=517,Ta=518,ef=519,Ec=35044,wc="300 es",xn=2e3,yr=2001;function tf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nf(){const i=Mr("canvas");return i.style.display="block",i}const Ac={};function Tc(...i){const e="THREE."+i.shift();console.log(e,...i)}function Cc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ke(...i){i=Cc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ot(...i){i=Cc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ca(...i){const e=i.join(" ");e in Ac||(Ac[e]=!0,ke(...i))}function rf(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const sf={[Co]:Ro,[Po]:Io,[Lo]:Uo,[Ii]:Do,[Ro]:Co,[Io]:Po,[Uo]:Lo,[Do]:Ii};class mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rc=1234567;const Sr=Math.PI/180,br=180/Math.PI;function gi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function Ra(i,e){return(i%e+e)%e}function of(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function af(i,e,t){return i!==e?(t-i)/(e-i):0}function Er(i,e,t){return(1-t)*i+t*e}function lf(i,e,t,n){return Er(i,e,1-Math.exp(-t*n))}function cf(i,e=1){return e-Math.abs(Ra(i,e*2)-e)}function uf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function df(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ff(i,e){return i+Math.random()*(e-i)}function pf(i){return i*(.5-Math.random())}function mf(i){i!==void 0&&(Rc=i);let e=Rc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gf(i){return i*Sr}function _f(i){return i*br}function vf(i){return(i&i-1)===0&&i!==0}function xf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mf(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),d=s((e-n)/2),u=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const it={DEG2RAD:Sr,RAD2DEG:br,generateUUID:gi,clamp:Qe,euclideanModulo:Ra,mapLinear:of,inverseLerp:af,lerp:Er,damp:lf,pingpong:cf,smoothstep:uf,smootherstep:hf,randInt:df,randFloat:ff,randFloatSpread:pf,seededRandom:mf,degToRad:gf,radToDeg:_f,isPowerOfTwo:vf,ceilPowerOfTwo:xf,floorPowerOfTwo:yf,setQuaternionFromProperEuler:Mf,normalize:Xt,denormalize:Fi},Wl=class Wl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wl.prototype.isVector2=!0;let ce=Wl;class Oi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3],u=s[o+0],f=s[o+1],g=s[o+2],y=s[o+3];if(d!==y||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){const M=Math.acos(m),S=Math.sin(M);p=Math.sin(p*M)/S,a=Math.sin(a*M)/S,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+y*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+y*a;const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),d=a(s/2),u=l(n/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Xl=class Xl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pa.copy(this).projectOnVector(e),this.sub(Pa)}reflect(e){return this.sub(Pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xl.prototype.isVector3=!0;let B=Xl;const Pa=new B,Pc=new Oi,ql=class ql{constructor(e,t,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=r[0],m=r[3],p=r[6],M=r[1],S=r[4],x=r[7],U=r[2],A=r[5],I=r[8];return s[0]=o*y+a*M+l*U,s[3]=o*m+a*S+l*A,s[6]=o*p+a*x+l*I,s[1]=c*y+h*M+d*U,s[4]=c*m+h*S+d*A,s[7]=c*p+h*x+d*I,s[2]=u*y+f*M+g*U,s[5]=u*m+f*S+g*A,s[8]=u*p+f*x+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,g=t*d+n*u+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(r*c-h*n)*y,e[2]=(a*n-r*o)*y,e[3]=u*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(La.makeScale(e,t)),this}rotate(e){return this.premultiply(La.makeRotation(-e)),this}translate(e,t){return this.premultiply(La.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ql.prototype.isMatrix3=!0;let Ke=ql;const La=new Ke,Lc=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dc=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sf(){const i={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ht&&(r.r=Dn(r.r),r.g=Dn(r.g),r.b=Dn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yn?ps:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ca("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ca("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xr]:{primaries:e,whitePoint:n,transfer:ps,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}const at=Sf();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zi;class bf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zi===void 0&&(zi=Mr("canvas")),zi.width=e.width,zi.height=e.height;const r=zi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Dn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dn(t[n]/255)*255):t[n]=Dn(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ef=0;class Da{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ia(r[o].image)):s.push(Ia(r[o]))}else s=Ia(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let wf=0;const Ua=new B;class Ft extends mi{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=ln,r=ln,s=ft,o=$n,a=tn,l=Yt,c=Ft.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=gi(),this.name="",this.source=new Da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ua).x}get height(){return this.source.getSize(Ua).y}get depth(){return this.source.getSize(Ua).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ss:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ss:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null,Ft.DEFAULT_MAPPING=gc,Ft.DEFAULT_ANISOTROPY=1;const $l=class $l{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(f+1)/2,U=(p+1)/2,A=(h+u)/4,I=(d+y)/4,_=(g+m)/4;return S>x&&S>U?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=A/n,s=I/n):x>U?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=A/r,s=_/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=I/s,r=_/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$l.prototype.isVector4=!0;let St=$l;class Af extends mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Ft(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Da(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends Af{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ic extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tf extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ao=class ao{constructor(e,t,n,r,s,o,a,l,c,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,d,u,f,g,y,m)}set(e,t,n,r,s,o,a,l,c,h,d,u,f,g,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ao().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/ki.setFromMatrixColumn(e,0).length(),s=1/ki.setFromMatrixColumn(e,1).length(),o=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*h,f=o*d,g=a*h,y=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-y*c,t[9]=-a*l,t[2]=y-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u+y*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=y+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u-y*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=y-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,f=o*d,g=a*h,y=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-y*d}else if(e.order==="XZY"){const u=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cf,e,Rf)}lookAt(e,t,n){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),jn.crossVectors(n,Kt),jn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),jn.crossVectors(n,Kt)),jn.normalize(),ms.crossVectors(Kt,jn),r[0]=jn.x,r[4]=ms.x,r[8]=Kt.x,r[1]=jn.y,r[5]=ms.y,r[9]=Kt.y,r[2]=jn.z,r[6]=ms.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],M=n[3],S=n[7],x=n[11],U=n[15],A=r[0],I=r[4],_=r[8],E=r[12],P=r[1],R=r[5],C=r[9],F=r[13],D=r[2],L=r[6],T=r[10],z=r[14],X=r[3],q=r[7],G=r[11],he=r[15];return s[0]=o*A+a*P+l*D+c*X,s[4]=o*I+a*R+l*L+c*q,s[8]=o*_+a*C+l*T+c*G,s[12]=o*E+a*F+l*z+c*he,s[1]=h*A+d*P+u*D+f*X,s[5]=h*I+d*R+u*L+f*q,s[9]=h*_+d*C+u*T+f*G,s[13]=h*E+d*F+u*z+f*he,s[2]=g*A+y*P+m*D+p*X,s[6]=g*I+y*R+m*L+p*q,s[10]=g*_+y*C+m*T+p*G,s[14]=g*E+y*F+m*z+p*he,s[3]=M*A+S*P+x*D+U*X,s[7]=M*I+S*R+x*L+U*q,s[11]=M*_+S*C+x*T+U*G,s[15]=M*E+S*F+x*z+U*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],M=l*f-c*u,S=a*f-c*d,x=a*u-l*d,U=o*f-c*h,A=o*u-l*h,I=o*d-a*h;return t*(y*M-m*S+p*x)-n*(g*M-m*U+p*A)+r*(g*S-y*U+p*I)-s*(g*x-y*A+m*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],M=t*a-n*o,S=t*l-r*o,x=t*c-s*o,U=n*l-r*a,A=n*c-s*a,I=r*c-s*l,_=h*y-d*g,E=h*m-u*g,P=h*p-f*g,R=d*m-u*y,C=d*p-f*y,F=u*p-f*m,D=M*F-S*C+x*R+U*P-A*E+I*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/D;return e[0]=(a*F-l*C+c*R)*L,e[1]=(r*C-n*F-s*R)*L,e[2]=(y*I-m*A+p*U)*L,e[3]=(u*A-d*I-f*U)*L,e[4]=(l*P-o*F-c*E)*L,e[5]=(t*F-r*P+s*E)*L,e[6]=(m*x-g*I-p*S)*L,e[7]=(h*I-u*x+f*S)*L,e[8]=(o*C-a*P+c*_)*L,e[9]=(n*P-t*C-s*_)*L,e[10]=(g*A-y*x+p*M)*L,e[11]=(d*x-h*A-f*M)*L,e[12]=(a*E-o*R-l*_)*L,e[13]=(t*R-n*E+r*_)*L,e[14]=(y*S-g*U-m*M)*L,e[15]=(h*U-d*S+u*M)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,g=s*d,y=o*h,m=o*d,p=a*d,M=l*c,S=l*h,x=l*d,U=n.x,A=n.y,I=n.z;return r[0]=(1-(y+p))*U,r[1]=(f+x)*U,r[2]=(g-S)*U,r[3]=0,r[4]=(f-x)*A,r[5]=(1-(u+p))*A,r[6]=(m+M)*A,r[7]=0,r[8]=(g+S)*I,r[9]=(m-M)*I,r[10]=(1-(u+y))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=ki.set(r[0],r[1],r[2]).length();const a=ki.set(r[4],r[5],r[6]).length(),l=ki.set(r[8],r[9],r[10]).length();s<0&&(o=-o),cn.copy(this);const c=1/o,h=1/a,d=1/l;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,t.setFromRotationMatrix(cn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=xn,l=!1){const c=this.elements,h=2*s/(t-e),d=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r);let g,y;if(l)g=s/(o-s),y=o*s/(o-s);else if(a===xn)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===yr)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=xn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-r),u=-(t+e)/(t-e),f=-(n+r)/(n-r);let g,y;if(l)g=1/(o-s),y=o/(o-s);else if(a===xn)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===yr)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ao.prototype.isMatrix4=!0;let _t=ao;const ki=new B,cn=new _t,Cf=new B(0,0,0),Rf=new B(1,1,1),jn=new B,ms=new B,Kt=new B,Uc=new _t,Nc=new Oi;class In{constructor(e=0,t=0,n=0,r=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pf=0;const Oc=new B,Hi=new Oi,Un=new _t,gs=new B,wr=new B,Lf=new B,Df=new Oi,Bc=new B(1,0,0),zc=new B(0,1,0),kc=new B(0,0,1),Hc={type:"added"},If={type:"removed"},Vi={type:"childadded",child:null},Na={type:"childremoved",child:null};class Ot extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new B,t=new In,n=new Oi,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ke}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(Bc,e)}rotateY(e){return this.rotateOnAxis(zc,e)}rotateZ(e){return this.rotateOnAxis(kc,e)}translateOnAxis(e,t){return Oc.copy(e).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bc,e)}translateY(e){return this.translateOnAxis(zc,e)}translateZ(e){return this.translateOnAxis(kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(wr,gs,this.up):Un.lookAt(gs,wr,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),Hi.setFromRotationMatrix(Un),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hc),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(If),Na.child=e,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hc),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Lf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new B(0,1,0),Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Kn extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uf={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Uf)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Oa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?i+(e-i)*6*t:t<.5?e:t<.6666666666666666?i+(e-i)*6*(.6666666666666666-t):i}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=at.workingColorSpace){if(e=Ra(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Oa(o,s,e+.3333333333333333),this.g=Oa(o,s,e),this.b=Oa(o,s,e-.3333333333333333)}return at.colorSpaceToWorking(this,r),this}setStyle(e,t=Nt){function n(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=Vc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return at.workingToColorSpace(zt.copy(this),e),Math.round(Qe(zt.r*255,0,255))*65536+Math.round(Qe(zt.g*255,0,255))*256+Math.round(Qe(zt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(zt.copy(this),t);const n=zt.r,r=zt.g,s=zt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Nt){at.workingToColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,r=zt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(_s);const n=Er(Jn.h,_s.h,t),r=Er(Jn.s,_s.s,t),s=Er(Jn.l,_s.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new tt;tt.NAMES=Vc;class Ba extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const un=new B,Nn=new B,za=new B,Fn=new B,Gi=new B,Wi=new B,Gc=new B,ka=new B,Ha=new B,Va=new B,Ga=new St,Wa=new St,Xa=new St;class hn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),un.subVectors(e,t),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){un.subVectors(r,t),Nn.subVectors(n,t),za.subVectors(e,t);const o=un.dot(un),a=un.dot(Nn),l=un.dot(za),c=Nn.dot(Nn),h=Nn.dot(za),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Ga.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),Ga.fromBufferAttribute(e,t),Wa.fromBufferAttribute(e,n),Xa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ga,s.x),o.addScaledVector(Wa,s.y),o.addScaledVector(Xa,s.z),o}static isFrontFacing(e,t,n,r){return un.subVectors(n,t),Nn.subVectors(e,t),un.cross(Nn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),un.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Gi.subVectors(r,n),Wi.subVectors(s,n),ka.subVectors(e,n);const l=Gi.dot(ka),c=Wi.dot(ka);if(l<=0&&c<=0)return t.copy(n);Ha.subVectors(e,r);const h=Gi.dot(Ha),d=Wi.dot(Ha);if(h>=0&&d<=h)return t.copy(r);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Gi,o);Va.subVectors(e,s);const f=Gi.dot(Va),g=Wi.dot(Va);if(g>=0&&f<=g)return t.copy(s);const y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Wi,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Gc.subVectors(s,r),a=(d-h)/(d-h+(f-g)),t.copy(r).addScaledVector(Gc,a);const p=1/(m+y+u);return o=y*p,a=u*p,t.copy(n).addScaledVector(Gi,o).addScaledVector(Wi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Mn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(s,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(e.matrixWorld),this.union(vs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),xs.subVectors(this.max,Ar),Xi.subVectors(e.a,Ar),qi.subVectors(e.b,Ar),$i.subVectors(e.c,Ar),Zn.subVectors(qi,Xi),Qn.subVectors($i,qi),_i.subVectors(Xi,$i);let t=[0,-Zn.z,Zn.y,0,-Qn.z,Qn.y,0,-_i.z,_i.y,Zn.z,0,-Zn.x,Qn.z,0,-Qn.x,_i.z,0,-_i.x,-Zn.y,Zn.x,0,-Qn.y,Qn.x,0,-_i.y,_i.x,0];return!qa(t,Xi,qi,$i,xs)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,Xi,qi,$i,xs))?!1:(ys.crossVectors(Zn,Qn),t=[ys.x,ys.y,ys.z],qa(t,Xi,qi,$i,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new B,new B,new B,new B,new B,new B,new B,new B],dn=new B,vs=new Mn,Xi=new B,qi=new B,$i=new B,Zn=new B,Qn=new B,_i=new B,Ar=new B,xs=new B,ys=new B,vi=new B;function qa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){vi.fromArray(i,s);const a=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),l=e.dot(vi),c=t.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Bn=Nf();function Nf(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function Ff(i){Math.abs(i)>65504&&ke("DataUtils.toHalfFloat(): Value out of range."),i=Qe(i,-65504,65504),Bn.floatView[0]=i;const e=Bn.uint32View[0],t=e>>23&511;return Bn.baseTable[t]+((e&8388607)>>Bn.shiftTable[t])}function Of(i){const e=i>>10;return Bn.uint32View[0]=Bn.mantissaTable[Bn.offsetTable[e]+(i&1023)]+Bn.exponentTable[e],Bn.floatView[0]}class Ms{static toHalfFloat(e){return Ff(e)}static fromHalfFloat(e){return Of(e)}}const Rt=new B,Ss=new ce;let Bf=0;class fn extends mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ec,this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ec&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Wc extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xc extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const zf=new Mn,Tr=new B,$a=new B;class Cr{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);const t=Tr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Tr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add($a)),this.expandByPoint(Tr.copy(e.center).sub($a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let kf=0;const nn=new _t,Ya=new Ot,Yi=new B,Jt=new Mn,Rr=new Mn,It=new B;class kt extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tf(e)?Xc:Wc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(Jt.min,Rr.min),Jt.expandByPoint(It),It.addVectors(Jt.max,Rr.max),Jt.expandByPoint(It)):(Jt.expandByPoint(Rr.min),Jt.expandByPoint(Rr.max))}Jt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)It.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(e,c),It.add(Yi)),r=Math.max(r,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new B,l[_]=new B;const c=new B,h=new B,d=new B,u=new ce,f=new ce,g=new ce,y=new B,m=new B;function p(_,E,P){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,P),u.fromBufferAttribute(s,_),f.fromBufferAttribute(s,E),g.fromBufferAttribute(s,P),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[_].add(y),a[E].add(y),a[P].add(y),l[_].add(m),l[E].add(m),l[P].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,E=M.length;_<E;++_){const P=M[_],R=P.start,C=P.count;for(let F=R,D=R+C;F<D;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const S=new B,x=new B,U=new B,A=new B;function I(_){U.fromBufferAttribute(r,_),A.copy(U);const E=a[_];S.copy(E),S.sub(U.multiplyScalar(U.dot(E))).normalize(),x.crossVectors(A,E);const R=x.dot(l[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,R)}for(let _=0,E=M.length;_<E;++_){const P=M[_],R=P.start,C=P.count;for(let F=R,D=R+C;F<D;F+=3)I(e.getX(F+0)),I(e.getX(F+1)),I(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new fn(u,h,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Hf=0;class ji extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Di,this.side=on,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=To,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==on&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ao&&(n.blendSrc=this.blendSrc),this.blendDst!==To&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zn=new B,ja=new B,bs=new B,ei=new B,Ka=new B,Es=new B,Ja=new B;class Vf{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ja.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(ja);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bs),a=ei.dot(this.direction),l=-ei.dot(bs),c=ei.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ja).addScaledVector(bs,u),f}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),r=zn.dot(zn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,r,s){Ka.subVectors(t,e),Es.subVectors(n,e),Ja.crossVectors(Ka,Es);let o=this.direction.dot(Ja),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,e);const l=a*this.direction.dot(Es.crossVectors(ei,Es));if(l<0)return null;const c=a*this.direction.dot(Ka.cross(ei));if(c<0||l+c>o)return null;const h=-a*ei.dot(Ja);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ws extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qc=new _t,xi=new Vf,As=new Cr,$c=new B,Ts=new B,Cs=new B,Rs=new B,Za=new B,Ps=new B,Yc=new B,Ls=new B;class vt extends Ot{constructor(e=new kt,t=new ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ps.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Za.fromBufferAttribute(d,e),o?Ps.addScaledVector(Za,h):Ps.addScaledVector(Za.sub(t),h))}t.add(Ps)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(s),xi.copy(e.ray).recast(e.near),!(As.containsPoint(xi.origin)===!1&&(xi.intersectSphere(As,$c)===null||xi.origin.distanceToSquared($c)>(e.far-e.near)**2))&&(qc.copy(s).invert(),xi.copy(e.ray).applyMatrix4(qc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){const m=u[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,U=S;x<U;x+=3){const A=a.getX(x),I=a.getX(x+1),_=a.getX(x+2);r=Ds(this,p,e,n,c,h,d,A,I,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const M=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);r=Ds(this,o,e,n,c,h,d,M,S,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){const m=u[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,U=S;x<U;x+=3){const A=x,I=x+1,_=x+2;r=Ds(this,p,e,n,c,h,d,A,I,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const M=m,S=m+1,x=m+2;r=Ds(this,o,e,n,c,h,d,M,S,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Gf(i,e,t,n,r,s,o,a){let l;if(e.side===Wt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===on,a),l===null)return null;Ls.copy(a),Ls.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ls);return c<t.near||c>t.far?null:{distance:c,point:Ls.clone(),object:i}}function Ds(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Ts),i.getVertexPosition(l,Cs),i.getVertexPosition(c,Rs);const h=Gf(i,e,t,n,Ts,Cs,Rs,Yc);if(h){const d=new B;hn.getBarycoord(Yc,Ts,Cs,Rs,d),r&&(h.uv=hn.getInterpolatedAttribute(r,a,l,c,d,new ce)),s&&(h.uv1=hn.getInterpolatedAttribute(s,a,l,c,d,new ce)),o&&(h.normal=hn.getInterpolatedAttribute(o,a,l,c,d,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new B,materialIndex:0};hn.getNormal(Ts,Cs,Rs,u.normal),h.face=u,h.barycoord=d}return h}class Is extends Ft{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Ut,h=Ut,d,u){super(null,o,a,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jc extends fn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ki=new _t,Kc=new _t,Us=[],Jc=new Mn,Wf=new _t,Pr=new vt,Lr=new Cr;class Qa extends vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jc(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Wf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),Jc.copy(e.boundingBox).applyMatrix4(Ki),this.boundingBox.union(Jc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),Lr.copy(e.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(n),e.ray.intersectsSphere(Lr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ki),Kc.multiplyMatrices(n,Ki),Pr.matrixWorld=Kc,Pr.raycast(e,Us);for(let o=0,a=Us.length;o<a;o++){const l=Us[o];l.instanceId=s,l.object=this,t.push(l)}Us.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new jc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Is(new Float32Array(r*this.count),r,this.count,qo,$t));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const el=new B,Xf=new B,qf=new Ke;class ti{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=el.subVectors(n,t).cross(Xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(el),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qf.getNormalMatrix(e),r=this.coplanarPoint(el).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Cr,$f=new ce(.5,.5),Ns=new B;class tl{constructor(e=new ti,t=new ti,n=new ti,r=new ti,s=new ti,o=new ti){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],g=s[8],y=s[9],m=s[10],p=s[11],M=s[12],S=s[13],x=s[14],U=s[15];if(r[0].setComponents(c-o,f-h,p-g,U-M).normalize(),r[1].setComponents(c+o,f+h,p+g,U+M).normalize(),r[2].setComponents(c+a,f+d,p+y,U+S).normalize(),r[3].setComponents(c-a,f-d,p-y,U-S).normalize(),n)r[4].setComponents(l,u,m,x).normalize(),r[5].setComponents(c-l,f-u,p-m,U-x).normalize();else if(r[4].setComponents(c-l,f-u,p-m,U-x).normalize(),t===xn)r[5].setComponents(c+l,f+u,p+m,U+x).normalize();else if(t===yr)r[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);const t=$f.distanceTo(e.center);return yi.radius=.7071067811865476+t,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ns.x=r.normal.x>0?e.max.x:e.min.x,Ns.y=r.normal.y>0?e.max.y:e.min.y,Ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zc extends Ft{constructor(e=[],t=di,n,r,s,o,a,l,c,h){super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nl extends Ft{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ji extends Ft{constructor(e,t,n=vn,r,s,o,a=Ut,l=Ut,c,h=Ln,d=1){if(h!==Ln&&h!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Da(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yf extends Ji{constructor(e,t=vn,n=di,r,s,o=Ut,a=Ut,l,c=Ln){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Qc extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zi extends kt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(d,2));function g(y,m,p,M,S,x,U,A,I,_,E){const P=x/I,R=U/_,C=x/2,F=U/2,D=A/2,L=I+1,T=_+1;let z=0,X=0;const q=new B;for(let G=0;G<T;G++){const he=G*R-F;for(let pe=0;pe<L;pe++){const Le=pe*P-C;q[y]=Le*M,q[m]=he*S,q[p]=D,c.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[p]=A>0?1:-1,h.push(q.x,q.y,q.z),d.push(pe/I),d.push(1-G/_),z+=1}}for(let G=0;G<_;G++)for(let he=0;he<I;he++){const pe=u+he+L*G,Le=u+he+L*(G+1),we=u+(he+1)+L*(G+1),xe=u+(he+1)+L*G;l.push(pe,Le,xe),l.push(Le,we,xe),X+=6}a.addGroup(f,X,E),f+=X,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class il extends kt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const y=[],m=n/2;let p=0;M(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(f,2));function M(){const x=new B,U=new B;let A=0;const I=(t-e)/n;for(let _=0;_<=s;_++){const E=[],P=_/s,R=P*(t-e)+e;for(let C=0;C<=r;C++){const F=C/r,D=F*l+a,L=Math.sin(D),T=Math.cos(D);U.x=R*L,U.y=-P*n+m,U.z=R*T,d.push(U.x,U.y,U.z),x.set(L,I,T).normalize(),u.push(x.x,x.y,x.z),f.push(F,1-P),E.push(g++)}y.push(E)}for(let _=0;_<r;_++)for(let E=0;E<s;E++){const P=y[E][_],R=y[E+1][_],C=y[E+1][_+1],F=y[E][_+1];(e>0||E!==0)&&(h.push(P,R,F),A+=3),(t>0||E!==s-1)&&(h.push(R,C,F),A+=3)}c.addGroup(p,A,0),p+=A}function S(x){const U=g,A=new ce,I=new B;let _=0;const E=x===!0?e:t,P=x===!0?1:-1;for(let C=1;C<=r;C++)d.push(0,m*P,0),u.push(0,P,0),f.push(.5,.5),g++;const R=g;for(let C=0;C<=r;C++){const D=C/r*l+a,L=Math.cos(D),T=Math.sin(D);I.x=E*T,I.y=m*P,I.z=E*L,d.push(I.x,I.y,I.z),u.push(0,P,0),A.x=L*.5+.5,A.y=T*.5*P+.5,f.push(A.x,A.y),g++}for(let C=0;C<r;C++){const F=U+C,D=R+C;x===!0?h.push(D,D+1,F):h.push(D+1,D,F),_+=3}c.addGroup(p,_,x===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],u=n[r+1]-h,f=(o-h)/u;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ce:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new B,r=[],s=[],o=[],a=new B,l=new _t;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qe(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Qe(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rl extends Sn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jf extends rl{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sl(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,r(o,a,u,f)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const eu=new B,tu=new B,ol=new sl,al=new sl,ll=new sl;class Kf extends Sn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(tu.subVectors(r[0],r[1]).add(r[0]),c=tu);const d=r[a%s],u=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(eu.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=eu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),ol.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),al.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),ll.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),al.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ll.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ol.calc(l),al.calc(l),ll.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nu(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Jf(i,e){const t=1-i;return t*t*e}function Zf(i,e){return 2*(1-i)*i*e}function Qf(i,e){return i*i*e}function Dr(i,e,t,n){return Jf(i,e)+Zf(i,t)+Qf(i,n)}function ep(i,e){const t=1-i;return t*t*t*e}function tp(i,e){const t=1-i;return 3*t*t*i*e}function np(i,e){return 3*(1-i)*i*i*e}function ip(i,e){return i*i*i*e}function Ir(i,e,t,n,r){return ep(i,e)+tp(i,t)+np(i,n)+ip(i,r)}class cl extends Sn{constructor(e=new ce,t=new ce,n=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ce){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ir(e,r.x,s.x,o.x,a.x),Ir(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rp extends Sn{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ir(e,r.x,s.x,o.x,a.x),Ir(e,r.y,s.y,o.y,a.y),Ir(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class iu extends Sn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sp extends Sn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ru extends Sn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Dr(e,r.x,s.x,o.x),Dr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class op extends Sn{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Dr(e,r.x,s.x,o.x),Dr(e,r.y,s.y,o.y),Dr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ul extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(nu(a,l.x,c.x,h.x,d.x),nu(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ce().fromArray(r))}return this}}var hl=Object.freeze({__proto__:null,ArcCurve:jf,CatmullRomCurve3:Kf,CubicBezierCurve:cl,CubicBezierCurve3:rp,EllipseCurve:rl,LineCurve:iu,LineCurve3:sp,QuadraticBezierCurve:ru,QuadraticBezierCurve3:op,SplineCurve:ul});class ap extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new hl[r.type]().fromJSON(r))}return this}}class su extends ap{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new iu(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new ru(this.currentPoint.clone(),new ce(e,t),new ce(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new cl(this.currentPoint.clone(),new ce(e,t),new ce(n,r),new ce(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ul(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new rl(e,t,n,r,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ou extends su{constructor(e){super(e),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new su().fromJSON(r))}return this}}function lp(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=au(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=fp(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let u=t;u<r;u+=t){const f=i[u],g=i[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Ur(s,o,t,a,l,c,0),o}function au(i,e,t,n,r){let s;if(r===Ep(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=hu(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=hu(o/n|0,i[o],i[o+1],s);return s&&Qi(s,s.next)&&(Or(s),s=s.next),s}function Mi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Qi(t,t.next)||Mt(t.prev,t,t.next)===0)){if(Or(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ur(i,e,t,n,r,s,o){if(!i)return;!o&&s&&vp(i,n,r,s);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?up(i,n,r,s):cp(i)){e.push(l.i,i.i,c.i),Or(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=hp(Mi(i),e),Ur(i,e,t,n,r,s,2)):o===2&&dp(i,e,t,n,r,s):Ur(Mi(i),e,t,n,r,s,1);break}}}function cp(i){const e=i.prev,t=i,n=i.next;if(Mt(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(r,s,o),d=Math.min(a,l,c),u=Math.max(r,s,o),f=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Nr(r,a,s,l,o,c,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function up(i,e,t,n){const r=i.prev,s=i,o=i.next;if(Mt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,d=s.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),y=Math.max(a,l,c),m=Math.max(h,d,u),p=dl(f,g,e,t,n),M=dl(y,m,e,t,n);let S=i.prevZ,x=i.nextZ;for(;S&&S.z>=p&&x&&x.z<=M;){if(S.x>=f&&S.x<=y&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Nr(a,h,l,d,c,u,S.x,S.y)&&Mt(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Nr(a,h,l,d,c,u,x.x,x.y)&&Mt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=y&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Nr(a,h,l,d,c,u,S.x,S.y)&&Mt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Nr(a,h,l,d,c,u,x.x,x.y)&&Mt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function hp(i,e){let t=i;do{const n=t.prev,r=t.next.next;!Qi(n,r)&&cu(n,t,t.next,r)&&Fr(n,r)&&Fr(r,n)&&(e.push(n.i,t.i,r.i),Or(t),Or(t.next),t=i=r),t=t.next}while(t!==i);return Mi(t)}function dp(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mp(o,a)){let l=uu(o,a);o=Mi(o,o.next),l=Mi(l,l.next),Ur(o,e,t,n,r,s,0),Ur(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function fp(i,e,t,n){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=au(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(yp(c))}r.sort(pp);for(let s=0;s<r.length;s++)t=mp(r[s],t);return t}function pp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function mp(i,e){const t=gp(i,e);if(!t)return e;const n=uu(t,i);return Mi(n,n.next),Mi(t,t.next)}function gp(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;if(Qi(i,t))return t;do{if(Qi(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&lu(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){const d=Math.abs(r-t.y)/(n-t.x);Fr(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&_p(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function _p(i,e){return Mt(i.prev,i,e.prev)<0&&Mt(e.next,i,i.next)<0}function vp(i,e,t,n){let r=i;do r.z===0&&(r.z=dl(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,xp(r)}function xp(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function dl(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function yp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function lu(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Nr(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&lu(i,e,t,n,r,s,o,a)}function Mp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Sp(i,e)&&(Fr(i,e)&&Fr(e,i)&&bp(i,e)&&(Mt(i.prev,i,e.prev)||Mt(i,e.prev,e))||Qi(i,e)&&Mt(i.prev,i,i.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Qi(i,e){return i.x===e.x&&i.y===e.y}function cu(i,e,t,n){const r=Os(Mt(i,e,t)),s=Os(Mt(i,e,n)),o=Os(Mt(t,n,i)),a=Os(Mt(t,n,e));return!!(r!==s&&o!==a||r===0&&Fs(i,t,e)||s===0&&Fs(i,n,e)||o===0&&Fs(t,i,n)||a===0&&Fs(t,e,n))}function Fs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Os(i){return i>0?1:i<0?-1:0}function Sp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&cu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Fr(i,e){return Mt(i.prev,i,i.next)<0?Mt(i,e,i.next)>=0&&Mt(i,i.prev,e)>=0:Mt(i,e,i.prev)<0||Mt(i,i.next,e)<0}function bp(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function uu(i,e){const t=fl(i.i,i.x,i.y),n=fl(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function hu(i,e,t,n){const r=fl(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ep(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class wp{static triangulate(e,t,n=2){return lp(e,t,n)}}class Si{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Si.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];du(e),fu(n,e);let o=e.length;t.forEach(du);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,fu(n,t[l]);const a=wp.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function du(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function fu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class pl extends kt{constructor(e=new ou([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new yt(r,3)),this.setAttribute("uv",new yt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Ap;let S,x=!1,U,A,I,_;if(p){S=p.getSpacedPoints(h),x=!0,u=!1;const ee=p.isCatmullRomCurve3?p.closed:!1;U=p.computeFrenetFrames(h,ee),A=new B,I=new B,_=new B}u||(m=0,f=0,g=0,y=0);const E=a.extractPoints(c);let P=E.shape;const R=E.holes;if(!Si.isClockWise(P)){P=P.reverse();for(let ee=0,ie=R.length;ee<ie;ee++){const Y=R[ee];Si.isClockWise(Y)&&(R[ee]=Y.reverse())}}function F(ee){const Y=10000000000000001e-36;let ve=ee[0];for(let me=1;me<=ee.length;me++){const He=me%ee.length,N=ee[He],We=N.x-ve.x,De=N.y-ve.y,Ge=We*We+De*De,se=Math.max(Math.abs(N.x),Math.abs(N.y),Math.abs(ve.x),Math.abs(ve.y)),rt=Y*se*se;if(Ge<=rt){ee.splice(He,1),me--;continue}ve=N}}F(P),R.forEach(F);const D=R.length,L=P;for(let ee=0;ee<D;ee++){const ie=R[ee];P=P.concat(ie)}function T(ee,ie,Y){return ie||ot("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(ie,Y)}const z=P.length;function X(ee,ie,Y){let ve,me,He;const N=ee.x-ie.x,We=ee.y-ie.y,De=Y.x-ee.x,Ge=Y.y-ee.y,se=N*N+We*We,rt=N*Ge-We*De;if(Math.abs(rt)>Number.EPSILON){const w=Math.sqrt(se),v=Math.sqrt(De*De+Ge*Ge),H=ie.x-We/w,K=ie.y+N/w,te=Y.x-Ge/v,le=Y.y+De/v,de=((te-H)*Ge-(le-K)*De)/(N*Ge-We*De);ve=H+N*de-ee.x,me=K+We*de-ee.y;const j=ve*ve+me*me;if(j<=2)return new ce(ve,me);He=Math.sqrt(j/2)}else{let w=!1;N>Number.EPSILON?De>Number.EPSILON&&(w=!0):N<-Number.EPSILON?De<-Number.EPSILON&&(w=!0):Math.sign(We)===Math.sign(Ge)&&(w=!0),w?(ve=-We,me=N,He=Math.sqrt(se)):(ve=N,me=We,He=Math.sqrt(se/2))}return new ce(ve/He,me/He)}const q=[];for(let ee=0,ie=L.length,Y=ie-1,ve=ee+1;ee<ie;ee++,Y++,ve++)Y===ie&&(Y=0),ve===ie&&(ve=0),q[ee]=X(L[ee],L[Y],L[ve]);const G=[];let he,pe=q.concat();for(let ee=0,ie=D;ee<ie;ee++){const Y=R[ee];he=[];for(let ve=0,me=Y.length,He=me-1,N=ve+1;ve<me;ve++,He++,N++)He===me&&(He=0),N===me&&(N=0),he[ve]=X(Y[ve],Y[He],Y[N]);G.push(he),pe=pe.concat(he)}let Le;if(m===0)Le=Si.triangulateShape(L,R);else{const ee=[],ie=[];for(let Y=0;Y<m;Y++){const ve=Y/m,me=f*Math.cos(ve*Math.PI/2),He=g*Math.sin(ve*Math.PI/2)+y;for(let N=0,We=L.length;N<We;N++){const De=T(L[N],q[N],He);Ae(De.x,De.y,-me),ve===0&&ee.push(De)}for(let N=0,We=D;N<We;N++){const De=R[N];he=G[N];const Ge=[];for(let se=0,rt=De.length;se<rt;se++){const w=T(De[se],he[se],He);Ae(w.x,w.y,-me),ve===0&&Ge.push(w)}ve===0&&ie.push(Ge)}}Le=Si.triangulateShape(ee,ie)}const we=Le.length,xe=g+y;for(let ee=0;ee<z;ee++){const ie=u?T(P[ee],pe[ee],xe):P[ee];x?(I.copy(U.normals[0]).multiplyScalar(ie.x),A.copy(U.binormals[0]).multiplyScalar(ie.y),_.copy(S[0]).add(I).add(A),Ae(_.x,_.y,_.z)):Ae(ie.x,ie.y,0)}for(let ee=1;ee<=h;ee++)for(let ie=0;ie<z;ie++){const Y=u?T(P[ie],pe[ie],xe):P[ie];x?(I.copy(U.normals[ee]).multiplyScalar(Y.x),A.copy(U.binormals[ee]).multiplyScalar(Y.y),_.copy(S[ee]).add(I).add(A),Ae(_.x,_.y,_.z)):Ae(Y.x,Y.y,d/h*ee)}for(let ee=m-1;ee>=0;ee--){const ie=ee/m,Y=f*Math.cos(ie*Math.PI/2),ve=g*Math.sin(ie*Math.PI/2)+y;for(let me=0,He=L.length;me<He;me++){const N=T(L[me],q[me],ve);Ae(N.x,N.y,d+Y)}for(let me=0,He=R.length;me<He;me++){const N=R[me];he=G[me];for(let We=0,De=N.length;We<De;We++){const Ge=T(N[We],he[We],ve);x?Ae(Ge.x,Ge.y+S[h-1].y,S[h-1].x+Y):Ae(Ge.x,Ge.y,d+Y)}}}Z(),ge();function Z(){const ee=r.length/3;if(u){let ie=0,Y=z*ie;for(let ve=0;ve<we;ve++){const me=Le[ve];Ne(me[2]+Y,me[1]+Y,me[0]+Y)}ie=h+m*2,Y=z*ie;for(let ve=0;ve<we;ve++){const me=Le[ve];Ne(me[0]+Y,me[1]+Y,me[2]+Y)}}else{for(let ie=0;ie<we;ie++){const Y=Le[ie];Ne(Y[2],Y[1],Y[0])}for(let ie=0;ie<we;ie++){const Y=Le[ie];Ne(Y[0]+z*h,Y[1]+z*h,Y[2]+z*h)}}n.addGroup(ee,r.length/3-ee,0)}function ge(){const ee=r.length/3;let ie=0;oe(L,ie),ie+=L.length;for(let Y=0,ve=R.length;Y<ve;Y++){const me=R[Y];oe(me,ie),ie+=me.length}n.addGroup(ee,r.length/3-ee,1)}function oe(ee,ie){let Y=ee.length;for(;--Y>=0;){const ve=Y;let me=Y-1;me<0&&(me=ee.length-1);for(let He=0,N=h+m*2;He<N;He++){const We=z*He,De=z*(He+1),Ge=ie+ve+We,se=ie+me+We,rt=ie+me+De,w=ie+ve+De;Ie(Ge,se,rt,w)}}}function Ae(ee,ie,Y){l.push(ee),l.push(ie),l.push(Y)}function Ne(ee,ie,Y){$e(ee),$e(ie),$e(Y);const ve=r.length/3,me=M.generateTopUV(n,r,ve-3,ve-2,ve-1);Be(me[0]),Be(me[1]),Be(me[2])}function Ie(ee,ie,Y,ve){$e(ee),$e(ie),$e(ve),$e(ie),$e(Y),$e(ve);const me=r.length/3,He=M.generateSideWallUV(n,r,me-6,me-3,me-2,me-1);Be(He[0]),Be(He[1]),Be(He[3]),Be(He[1]),Be(He[2]),Be(He[3])}function $e(ee){r.push(l[ee*3+0]),r.push(l[ee*3+1]),r.push(l[ee*3+2])}function Be(ee){s.push(ee.x),s.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tp(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new hl[r.type]().fromJSON(r)),new pl(n,e.options)}}const Ap={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],h=e[r*3+1];return[new ce(s,o),new ce(a,l),new ce(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[r*3],f=e[r*3+1],g=e[r*3+2],y=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-d),new ce(u,1-g),new ce(y,1-p)]:[new ce(a,1-l),new ce(h,1-d),new ce(f,1-g),new ce(m,1-p)]}};function Tp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Bs extends kt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Qe(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/t,d=new B,u=new ce,f=new B,g=new B,y=new B;let m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let M=0;M<=t;M++){const S=n+M*h*r,x=Math.sin(S),U=Math.cos(S);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*x,d.y=e[A].y,d.z=e[A].x*U,o.push(d.x,d.y,d.z),u.x=M/t,u.y=A/(e.length-1),a.push(u.x,u.y);const I=l[3*A+0]*x,_=l[3*A+1],E=l[3*A+0]*U;c.push(I,_,E)}}for(let M=0;M<t;M++)for(let S=0;S<e.length-1;S++){const x=S+M*e.length,U=x,A=x+e.length,I=x+e.length+1,_=x+1;s.push(U,A,_),s.push(I,_,A)}this.setIndex(s),this.setAttribute("position",new yt(o,3)),this.setAttribute("uv",new yt(a,2)),this.setAttribute("normal",new yt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.points,e.segments,e.phiStart,e.phiLength)}}class Br extends kt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){const M=p*u-o;for(let S=0;S<c;S++){const x=S*d-s;g.push(x,-M,0),y.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const S=M+c*p,x=M+c*(p+1),U=M+1+c*(p+1),A=M+1+c*p;f.push(S,x,A),f.push(x,U,A)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(y,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.widthSegments,e.heightSegments)}}class ml extends kt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new B,u=new B,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){const M=[],S=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let U=0;U<=t;U++){const A=U/t;d.x=-e*Math.cos(r+A*s)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(A+x,1-S),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const S=h[p][M+1],x=h[p][M],U=h[p+1][M],A=h[p+1][M+1];(p!==0||o>0)&&f.push(S,x,A),(p!==n-1||l<Math.PI)&&f.push(x,U,A)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(y,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function er(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(pu(r))r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(pu(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=er(i[t]);for(const r in n)e[r]=n[r]}return e}function pu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Rp={clone:er,merge:qt};var Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=Cp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Dp extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gl extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zr extends gl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ip extends ji{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=No,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Up extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Np extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(gu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!gu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function gu(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Fp{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Op=new Fp;class Hr{constructor(e){this.manager=e!==void 0?e:Op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Hr.DEFAULT_MATERIAL_NAME="__DEFAULT";const kn={};class Bp extends Error{constructor(e,t){super(e),this.response=t}}class zp extends Hr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=kr.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:n,onError:r});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=kn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let y=0;const m=new ReadableStream({start(p){M();function M(){d.read().then(({done:S,value:x})=>{if(S)p.close();else{y+=x.byteLength;const U=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let A=0,I=h.length;A<I;A++){const _=h[A];_.onProgress&&_.onProgress(U)}p.enqueue(x),M()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Bp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{kr.add(`file:${e}`,c);const h=kn[e];delete kn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=kn[e];if(h===void 0)throw this.manager.itemError(e),c;delete kn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const tr=new WeakMap;class kp extends Hr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=kr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=tr.get(o);d===void 0&&(d=[],tr.set(o,d)),d.push({onLoad:t,onError:r})}return o}const a=Mr("img");function l(){h(),t&&t(this);const d=tr.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}tr.delete(this),s.manager.itemEnd(e)}function c(d){h(),r&&r(d),kr.remove(`image:${e}`);const u=tr.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}tr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),kr.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Hp extends Hr{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Is,a=new zp(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(h){r!==void 0?r(h):ot(h);return}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:ln,o.wrapT=c.wrapT!==void 0?c.wrapT:ln,o.magFilter=c.magFilter!==void 0?c.magFilter:ft,o.minFilter=c.minFilter!==void 0?c.minFilter:ft,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=$n),c.mipmapCount===1&&(o.minFilter=ft),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}}class Vp extends Hr{constructor(e){super(e)}load(e,t,n,r){const s=new Ft,o=new kp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class _u extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Gp extends _u{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const _l=new _t,vu=new B,xu=new B;class Wp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tl,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(vu),xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xu),t.updateMatrixWorld(),_l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===yr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zs=new B,ks=new Oi,En=new B;class yu extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zs,ks,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zs,ks,En.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(zs,ks,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zs,ks,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ni=new B,Mu=new ce,Su=new ce;class Zt extends yu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return br*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,Mu,Su),t.subVectors(Su,Mu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Xp extends Wp{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}}class qp extends _u{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Xp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class bu extends yu{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const nr=-90,ir=1;class $p extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(nr,ir,e,t);r.layers=this.layers,this.add(r);const s=new Zt(nr,ir,e,t);s.layers=this.layers,this.add(s);const o=new Zt(nr,ir,e,t);o.layers=this.layers,this.add(o);const a=new Zt(nr,ir,e,t);a.layers=this.layers,this.add(a);const l=new Zt(nr,ir,e,t);l.layers=this.layers,this.add(l);const c=new Zt(nr,ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yp extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class jp{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Kp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Kp(){this._document.hidden===!1&&this.reset()}const Yl=class Yl{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Yl.prototype.isMatrix2=!0;let Eu=Yl;function wu(i,e,t,n){const r=Jp(n);switch(t){case Mc:return i*e;case qo:return i*e/r.components*r.byteLength;case $o:return i*e/r.components*r.byteLength;case pi:return i*e*2/r.components*r.byteLength;case Yo:return i*e*2/r.components*r.byteLength;case Sc:return i*e*3/r.components*r.byteLength;case tn:return i*e*4/r.components*r.byteLength;case jo:return i*e*4/r.components*r.byteLength;case as:case ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cs:case us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jo:case Qo:return Math.max(i,16)*Math.max(e,8)/4;case Ko:case Zo:return Math.max(i,8)*Math.max(e,8)/2;case ea:case ta:case ia:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case na:case hs:case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case la:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ua:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ya:case Ma:case Sa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ba:case Ea:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ds:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jp(i){switch(i){case Yt:case _c:return{byteLength:1,components:1};case _r:case vc:case jt:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case vn:case Go:case $t:return{byteLength:4,components:1};case xc:case yc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}})),typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Au(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Zp(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,em=`#ifdef USE_ALPHAHASH
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
#endif`,tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sm=`#ifdef USE_AOMAP
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
#endif`,om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,am=`#ifdef USE_BATCHING
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
#endif`,lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dm=`#ifdef USE_IRIDESCENCE
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
#endif`,fm=`#ifdef USE_BUMPMAP
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sm=`#define PI 3.141592653589793
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
} // validated`,bm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Em=`vec3 transformedNormal = objectNormal;
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
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
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
}`,Hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Km=`PhysicalMaterial material;
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
#endif`,Jm=`uniform sampler2D dfgLUT;
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
}`,Zm=`
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
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cg=`#if defined( USE_POINTS_UV )
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
#endif`,ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`#ifdef USE_MORPHTARGETS
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
#endif`,gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sg=`#ifdef USE_NORMALMAP
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
#endif`,bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bg=`float getShadowMask() {
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
}`,zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Hg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,Gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#ifdef USE_TRANSMISSION
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const et={alphahash_fragment:Qp,alphahash_pars_fragment:em,alphamap_fragment:tm,alphamap_pars_fragment:nm,alphatest_fragment:im,alphatest_pars_fragment:rm,aomap_fragment:sm,aomap_pars_fragment:om,batching_pars_vertex:am,batching_vertex:lm,begin_vertex:cm,beginnormal_vertex:um,bsdfs:hm,iridescence_fragment:dm,bumpmap_pars_fragment:fm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:_m,color_fragment:vm,color_pars_fragment:xm,color_pars_vertex:ym,color_vertex:Mm,common:Sm,cube_uv_reflection_fragment:bm,defaultnormal_vertex:Em,displacementmap_pars_vertex:wm,displacementmap_vertex:Am,emissivemap_fragment:Tm,emissivemap_pars_fragment:Cm,colorspace_fragment:Rm,colorspace_pars_fragment:Pm,envmap_fragment:Lm,envmap_common_pars_fragment:Dm,envmap_pars_fragment:Im,envmap_pars_vertex:Um,envmap_physical_pars_fragment:Xm,envmap_vertex:Nm,fog_vertex:Fm,fog_pars_vertex:Om,fog_fragment:Bm,fog_pars_fragment:zm,gradientmap_pars_fragment:km,lightmap_pars_fragment:Hm,lights_lambert_fragment:Vm,lights_lambert_pars_fragment:Gm,lights_pars_begin:Wm,lights_toon_fragment:qm,lights_toon_pars_fragment:$m,lights_phong_fragment:Ym,lights_phong_pars_fragment:jm,lights_physical_fragment:Km,lights_physical_pars_fragment:Jm,lights_fragment_begin:Zm,lights_fragment_maps:Qm,lights_fragment_end:eg,lightprobes_pars_fragment:tg,logdepthbuf_fragment:ng,logdepthbuf_pars_fragment:ig,logdepthbuf_pars_vertex:rg,logdepthbuf_vertex:sg,map_fragment:og,map_pars_fragment:ag,map_particle_fragment:lg,map_particle_pars_fragment:cg,metalnessmap_fragment:ug,metalnessmap_pars_fragment:hg,morphinstance_vertex:dg,morphcolor_vertex:fg,morphnormal_vertex:pg,morphtarget_pars_vertex:mg,morphtarget_vertex:gg,normal_fragment_begin:_g,normal_fragment_maps:vg,normal_pars_fragment:xg,normal_pars_vertex:yg,normal_vertex:Mg,normalmap_pars_fragment:Sg,clearcoat_normal_fragment_begin:bg,clearcoat_normal_fragment_maps:Eg,clearcoat_pars_fragment:wg,iridescence_pars_fragment:Ag,opaque_fragment:Tg,packing:Cg,premultiplied_alpha_fragment:Rg,project_vertex:Pg,dithering_fragment:Lg,dithering_pars_fragment:Dg,roughnessmap_fragment:Ig,roughnessmap_pars_fragment:Ug,shadowmap_pars_fragment:Ng,shadowmap_pars_vertex:Fg,shadowmap_vertex:Og,shadowmask_pars_fragment:Bg,skinbase_vertex:zg,skinning_pars_vertex:kg,skinning_vertex:Hg,skinnormal_vertex:Vg,specularmap_fragment:Gg,specularmap_pars_fragment:Wg,tonemapping_fragment:Xg,tonemapping_pars_fragment:qg,transmission_fragment:$g,transmission_pars_fragment:Yg,uv_pars_fragment:jg,uv_pars_vertex:Kg,uv_vertex:Jg,worldpos_vertex:Zg,background_vert:`varying vec2 vUv;
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
}`},ye={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},wn={basic:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:qt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:qt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new tt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:qt([ye.points,ye.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:qt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:qt([ye.common,ye.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:qt([ye.sprite,ye.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:qt([ye.common,ye.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:qt([ye.lights,ye.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};wn.physical={uniforms:qt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Hs={r:0,b:0,g:0},Qg=new _t,Tu=new Ke;Tu.set(-1,0,0,0,1,0,0,0,1);function e0(i,e,t,n,r,s){const o=new tt(0);let a=r===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){const x=M.backgroundBlurriness>0;S=e.get(S,x)}return S}function g(M){let S=!1;const x=f(M);x===null?m(o,a):x&&x.isColor&&(m(x,1),S=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,s):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,S){const x=f(S);x&&(x.isCubeTexture||x.mapping===rs)?(c===void 0&&(c=new vt(new Zi(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:er(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(U,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tu),c.material.toneMapped=at.getTransfer(x.colorSpace)!==ht,(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new vt(new Br(2,2),new bn({name:"BackgroundMaterial",uniforms:er(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=at.getTransfer(x.colorSpace)!==ht,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,S){M.getRGB(Hs,mu(i)),t.buffers.color.setClear(Hs.r,Hs.g,Hs.b,S,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:y,dispose:p}}function t0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,o=!1;function a(R,C,F,D,L){let T=!1;const z=d(R,D,F,C);s!==z&&(s=z,c(s.object)),T=f(R,D,F,L),T&&g(R,D,F,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(T||o)&&(o=!1,x(R,C,F,D),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function d(R,C,F,D){const L=D.wireframe===!0;let T=n[C.id];T===void 0&&(T={},n[C.id]=T);const z=R.isInstancedMesh===!0?R.id:0;let X=T[z];X===void 0&&(X={},T[z]=X);let q=X[F.id];q===void 0&&(q={},X[F.id]=q);let G=q[L];return G===void 0&&(G=u(l()),q[L]=G),G}function u(R){const C=[],F=[],D=[];for(let L=0;L<t;L++)C[L]=0,F[L]=0,D[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:D,object:R,attributes:{},index:null}}function f(R,C,F,D){const L=s.attributes,T=C.attributes;let z=0;const X=F.getAttributes();for(const q in X)if(X[q].location>=0){const he=L[q];let pe=T[q];if(pe===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(pe=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(pe=R.instanceColor)),he===void 0||he.attribute!==pe||pe&&he.data!==pe.data)return!0;z++}return s.attributesNum!==z||s.index!==D}function g(R,C,F,D){const L={},T=C.attributes;let z=0;const X=F.getAttributes();for(const q in X)if(X[q].location>=0){let he=T[q];he===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(he=R.instanceColor));const pe={};pe.attribute=he,he&&he.data&&(pe.data=he.data),L[q]=pe,z++}s.attributes=L,s.attributesNum=z,s.index=D}function y(){const R=s.newAttributes;for(let C=0,F=R.length;C<F;C++)R[C]=0}function m(R){p(R,0)}function p(R,C){const F=s.newAttributes,D=s.enabledAttributes,L=s.attributeDivisors;F[R]=1,D[R]===0&&(i.enableVertexAttribArray(R),D[R]=1),L[R]!==C&&(i.vertexAttribDivisor(R,C),L[R]=C)}function M(){const R=s.newAttributes,C=s.enabledAttributes;for(let F=0,D=C.length;F<D;F++)C[F]!==R[F]&&(i.disableVertexAttribArray(F),C[F]=0)}function S(R,C,F,D,L,T,z){z===!0?i.vertexAttribIPointer(R,C,F,L,T):i.vertexAttribPointer(R,C,F,D,L,T)}function x(R,C,F,D){y();const L=D.attributes,T=F.getAttributes(),z=C.defaultAttributeValues;for(const X in T){const q=T[X];if(q.location>=0){let G=L[X];if(G===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(G=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(G=R.instanceColor)),G!==void 0){const he=G.normalized,pe=G.itemSize,Le=e.get(G);if(Le===void 0)continue;const we=Le.buffer,xe=Le.type,Z=Le.bytesPerElement,ge=xe===i.INT||xe===i.UNSIGNED_INT||G.gpuType===Go;if(G.isInterleavedBufferAttribute){const oe=G.data,Ae=oe.stride,Ne=G.offset;if(oe.isInstancedInterleavedBuffer){for(let Ie=0;Ie<q.locationSize;Ie++)p(q.location+Ie,oe.meshPerAttribute);R.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ie=0;Ie<q.locationSize;Ie++)m(q.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Ie=0;Ie<q.locationSize;Ie++)S(q.location+Ie,pe/q.locationSize,xe,he,Ae*Z,(Ne+pe/q.locationSize*Ie)*Z,ge)}else{if(G.isInstancedBufferAttribute){for(let oe=0;oe<q.locationSize;oe++)p(q.location+oe,G.meshPerAttribute);R.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let oe=0;oe<q.locationSize;oe++)m(q.location+oe);i.bindBuffer(i.ARRAY_BUFFER,we);for(let oe=0;oe<q.locationSize;oe++)S(q.location+oe,pe/q.locationSize,xe,he,pe*Z,pe/q.locationSize*oe*Z,ge)}}else if(z!==void 0){const he=z[X];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(q.location,he);break;case 3:i.vertexAttrib3fv(q.location,he);break;case 4:i.vertexAttrib4fv(q.location,he);break;default:i.vertexAttrib1fv(q.location,he)}}}}M()}function U(){E();for(const R in n){const C=n[R];for(const F in C){const D=C[F];for(const L in D){const T=D[L];for(const z in T)h(T[z].object),delete T[z];delete D[L]}}delete n[R]}}function A(R){if(n[R.id]===void 0)return;const C=n[R.id];for(const F in C){const D=C[F];for(const L in D){const T=D[L];for(const z in T)h(T[z].object),delete T[z];delete D[L]}}delete n[R.id]}function I(R){for(const C in n){const F=n[C];for(const D in F){const L=F[D];if(L[R.id]===void 0)continue;const T=L[R.id];for(const z in T)h(T[z].object),delete T[z];delete L[R.id]}}}function _(R){for(const C in n){const F=n[C],D=R.isInstancedMesh===!0?R.id:0,L=F[D];if(L!==void 0){for(const T in L){const z=L[T];for(const X in z)h(z[X].object),delete z[X];delete L[T]}delete F[D],Object.keys(F).length===0&&delete n[C]}}}function E(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:P,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function n0(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function i0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==tn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const _=I===jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Yt&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==$t&&!_)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,maxSamples:U,samples:A}}function r0(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new ti,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||r;return r=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const M=s?0:n,S=M*4;let x=p.clippingState||null;l.value=x,x=h(g,u,S,f);for(let U=0;U!==S;++U)x[U]=t[U];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const p=f+y*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==y;++S,x+=4)o.copy(d[S]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const ii=4,Cu=[.125,.215,.35,.446,.526,.582],bi=20,s0=256,Vr=new bu,Ru=new tt;let vl=null,xl=0,yl=0,Ml=!1;const o0=new B;class Sl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=o0}=s;vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,xl,yl),this._renderer.xr.enabled=Ml,e.scissorTest=!1,rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ft,minFilter:ft,generateMipmaps:!1,type:jt,format:tn,colorSpace:xr,depthBuffer:!1},r=Pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=a0(s)),this._blurMaterial=c0(s,e,t),this._ggxMaterial=l0(s,e,t)}return r}_compileMaterial(e){const t=new vt(new kt,e);this._renderer.compile(t,Vr)}_sceneToCubeUV(e,t,n,r,s){const l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Ru),d.toneMapping=an,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vt(new Zi,new ws({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Ru),p=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));const U=this._cubeSize;rr(r,x*U,S>2?U:0,U,U),d.setRenderTarget(r),p&&d.render(y,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===di||e.mapping===Ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Vr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-ii?n-g+ii:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,rr(s,m,p,3*y,2*y),r.setRenderTarget(s),r.render(a,Vr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,rr(e,m,p,3*y,2*y),r.setRenderTarget(e),r.render(a,Vr)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[r];d.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*bi-1),y=s/g,m=isFinite(s)?1+Math.floor(h*y):bi;m>bi&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const p=[];let M=0;for(let I=0;I<bi;++I){const _=I/y,E=Math.exp(-_*_/2);p.push(E),I===0?M+=E:I<m&&(M+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const x=this._sizeLods[r],U=3*x*(r>S-ii?r-S+ii:0),A=4*(this._cubeSize-x);rr(t,U,A,3*x,2*x),l.setRenderTarget(t),l.render(d,Vr)}}function a0(i){const e=[],t=[],n=[];let r=i;const s=i-ii+1+Cu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-ii?l=Cu[o-i+ii-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,m=2,p=1,M=new Float32Array(y*g*f),S=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const I=A%3*2/3-1,_=A>2?0:-1,E=[I,_,0,I+2/3,_,0,I+2/3,_+1,0,I,_,0,I+2/3,_+1,0,I,_+1,0];M.set(E,y*g*A),S.set(u,m*g*A);const P=[A,A,A,A,A,A];x.set(P,p*g*A)}const U=new kt;U.setAttribute("position",new fn(M,y)),U.setAttribute("uv",new fn(S,m)),U.setAttribute("faceIndex",new fn(x,p)),n.push(new vt(U,null)),r>ii&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Pu(i,e,t){const n=new yn(i,e,t);return n.texture.mapping=rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function l0(i,e,t){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:s0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vs(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function c0(i,e,t){const n=new Float32Array(bi),r=new B(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vs(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Lu(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vs(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Du(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Vs(){return`

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
	`}class Iu extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Zc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zi(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Pn});s.uniforms.tEquirect.value=t;const o=new vt(r,s),a=t.minFilter;return t.minFilter===$n&&(t.minFilter=ft),new $p(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}function u0(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===zo||f===ko)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const y=new Iu(g.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,g=f===zo||f===ko,y=f===di||f===Ui;if(g||y){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Sl(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new Sl(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===zo?u.mapping=di:f===ko&&(u.mapping=Ui),u}function l(u){let f=0;const g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function h0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ca("WebGLRenderer: "+n+" extension not supported."),r}}}function d0(i,e,t,n){const r={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete r[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let y=0;if(g===void 0)return;if(f!==null){const M=f.array;y=f.version;for(let S=0,x=M.length;S<x;S+=3){const U=M[S+0],A=M[S+1],I=M[S+2];u.push(U,A,A,I,I,U)}}else{const M=g.array;y=g.version;for(let S=0,x=M.length/3-1;S<x;S+=3){const U=S+0,A=S+1,I=S+2;u.push(U,A,A,I,I,U)}}const m=new(g.count>=65535?Xc:Wc)(u,1);m.version=y;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function f0(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,s,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,s,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];t.update(y,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function p0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:ot("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function m0(i,e,t){const n=new WeakMap,r=new St;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let E=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),g===!0&&(S=2),y===!0&&(S=3);let x=a.attributes.position.count*S,U=1;x>e.maxTextureSize&&(U=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*U*4*d),I=new Ic(A,x,U,d);I.type=$t,I.needsUpdate=!0;const _=S*4;for(let P=0;P<d;P++){const R=m[P],C=p[P],F=M[P],D=x*U*4*P;for(let L=0;L<R.count;L++){const T=L*_;f===!0&&(r.fromBufferAttribute(R,L),A[D+T+0]=r.x,A[D+T+1]=r.y,A[D+T+2]=r.z,A[D+T+3]=0),g===!0&&(r.fromBufferAttribute(C,L),A[D+T+4]=r.x,A[D+T+5]=r.y,A[D+T+6]=r.z,A[D+T+7]=0),y===!0&&(r.fromBufferAttribute(F,L),A[D+T+8]=r.x,A[D+T+9]=r.y,A[D+T+10]=r.z,A[D+T+11]=F.itemSize===4?r.w:1)}}u={count:d,texture:I,size:new ce(x,U)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function g0(i,e,t,n,r){let s=new WeakMap;function o(c){const h=r.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const _0={[Fo]:"LINEAR_TONE_MAPPING",[Oo]:"REINHARD_TONE_MAPPING",[fc]:"CINEON_TONE_MAPPING",[is]:"ACES_FILMIC_TONE_MAPPING",[mc]:"AGX_TONE_MAPPING",[Bo]:"NEUTRAL_TONE_MAPPING",[pc]:"CUSTOM_TONE_MAPPING"};function v0(i,e,t,n,r){const s=new yn(e,t,{type:i,depthBuffer:n,stencilBuffer:r,depthTexture:n?new Ji(e,t):void 0}),o=new yn(e,t,{type:jt,depthBuffer:!1,stencilBuffer:!1}),a=new kt;a.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new yt([0,2,0,0,2,0],2));const l=new Dp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new vt(a,l),h=new bu(-1,1,1,-1,0,1);let d=null,u=null,f=!1,g,y=null,m=[],p=!1;this.setSize=function(M,S){s.setSize(M,S),o.setSize(M,S);for(let x=0;x<m.length;x++){const U=m[x];U.setSize&&U.setSize(M,S)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const S=s.width,x=s.height;for(let U=0;U<m.length;U++){const A=m[U];A.setSize&&A.setSize(S,x)}},this.begin=function(M,S){if(f||M.toneMapping===an&&m.length===0)return!1;if(y=S,S!==null){const x=S.width,U=S.height;(s.width!==x||s.height!==U)&&this.setSize(x,U)}return p===!1&&M.setRenderTarget(s),g=M.toneMapping,M.toneMapping=an,!0},this.hasRenderPass=function(){return p},this.end=function(M,S){M.toneMapping=g,f=!0;let x=s,U=o;for(let A=0;A<m.length;A++){const I=m[A];if(I.enabled!==!1&&(I.render(M,U,x,S),I.needsSwap!==!1)){const _=x;x=U,U=_}}if(d!==M.outputColorSpace||u!==M.toneMapping){d=M.outputColorSpace,u=M.toneMapping,l.defines={},at.getTransfer(d)===ht&&(l.defines.SRGB_TRANSFER="");const A=_0[u];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,M.setRenderTarget(y),M.render(c,h),y=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Uu=new Ft,bl=new Ji(1,1),Nu=new Ic,Fu=new Tf,Ou=new Zc,Bu=[],zu=[],ku=new Float32Array(16),Hu=new Float32Array(9),Vu=new Float32Array(4);function sr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Bu[r];if(s===void 0&&(s=new Float32Array(r),Bu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gs(i,e){let t=zu[e];t===void 0&&(t=new Int32Array(e),zu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function x0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function M0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function S0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function b0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Vu.set(n),i.uniformMatrix2fv(this.addr,!1,Vu),Lt(t,n)}}function E0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Hu.set(n),i.uniformMatrix3fv(this.addr,!1,Hu),Lt(t,n)}}function w0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;ku.set(n),i.uniformMatrix4fv(this.addr,!1,ku),Lt(t,n)}}function A0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function T0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function C0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function R0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function P0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function L0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function D0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function I0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function U0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(bl.compareFunction=t.isReversedDepthBuffer()?Ta:Aa,s=bl):s=Uu,t.setTexture2D(e||s,r)}function N0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Fu,r)}function F0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ou,r)}function O0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Nu,r)}function B0(i){switch(i){case 5126:return x0;case 35664:return y0;case 35665:return M0;case 35666:return S0;case 35674:return b0;case 35675:return E0;case 35676:return w0;case 5124:case 35670:return A0;case 35667:case 35671:return T0;case 35668:case 35672:return C0;case 35669:case 35673:return R0;case 5125:return P0;case 36294:return L0;case 36295:return D0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return O0}}function z0(i,e){i.uniform1fv(this.addr,e)}function k0(i,e){const t=sr(e,this.size,2);i.uniform2fv(this.addr,t)}function H0(i,e){const t=sr(e,this.size,3);i.uniform3fv(this.addr,t)}function V0(i,e){const t=sr(e,this.size,4);i.uniform4fv(this.addr,t)}function G0(i,e){const t=sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function W0(i,e){const t=sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function X0(i,e){const t=sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function q0(i,e){i.uniform1iv(this.addr,e)}function $0(i,e){i.uniform2iv(this.addr,e)}function Y0(i,e){i.uniform3iv(this.addr,e)}function j0(i,e){i.uniform4iv(this.addr,e)}function K0(i,e){i.uniform1uiv(this.addr,e)}function J0(i,e){i.uniform2uiv(this.addr,e)}function Z0(i,e){i.uniform3uiv(this.addr,e)}function Q0(i,e){i.uniform4uiv(this.addr,e)}function e_(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=bl:o=Uu;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function t_(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Fu,s[o])}function n_(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ou,s[o])}function i_(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Nu,s[o])}function r_(i){switch(i){case 5126:return z0;case 35664:return k0;case 35665:return H0;case 35666:return V0;case 35674:return G0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return $0;case 35668:case 35672:return Y0;case 35669:case 35673:return j0;case 5125:return K0;case 36294:return J0;case 36295:return Z0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}class s_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=B0(t.type)}}class o_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=r_(t.type)}}class a_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const El=/(\w+)(\])?(\[|\.)?/g;function Gu(i,e){i.seq.push(e),i.map[e.id]=e}function l_(i,e,t){const n=i.name,r=n.length;for(El.lastIndex=0;;){const s=El.exec(n),o=El.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Gu(t,c===void 0?new s_(a,i,e):new o_(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new a_(a),Gu(t,d)),t=d}}}class Ws{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);l_(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Wu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const c_=37297;let u_=0;function h_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Xu=new Ke;function d_(i){at._getMatrix(Xu,at.workingColorSpace,i);const e=`mat3( ${Xu.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case ps:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+h_(i.getShaderSource(e),a)}else return s}function f_(i,e){const t=d_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const p_={[Fo]:"Linear",[Oo]:"Reinhard",[fc]:"Cineon",[is]:"ACESFilmic",[mc]:"AgX",[Bo]:"Neutral",[pc]:"Custom"};function m_(i,e){const t=p_[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xs=new B;function g_(){at.getLuminanceCoefficients(Xs);const i=Xs.x.toFixed(4),e=Xs.y.toFixed(4),t=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function __(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function v_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function x_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Gr(i){return i!==""}function $u(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(i){return i.replace(y_,S_)}const M_=new Map;function S_(i,e){let t=et[e];if(t===void 0){const n=M_.get(e);if(n!==void 0)t=et[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wl(t)}const b_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(i){return i.replace(b_,E_)}function E_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ku(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const w_={[ns]:"SHADOWMAP_TYPE_PCF",[gr]:"SHADOWMAP_TYPE_VSM"};function A_(i){return w_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const T_={[di]:"ENVMAP_TYPE_CUBE",[Ui]:"ENVMAP_TYPE_CUBE",[rs]:"ENVMAP_TYPE_CUBE_UV"};function C_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":T_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const R_={[Ui]:"ENVMAP_MODE_REFRACTION"};function P_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":R_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L_={[No]:"ENVMAP_BLENDING_MULTIPLY",[Wd]:"ENVMAP_BLENDING_MIX",[Xd]:"ENVMAP_BLENDING_ADD"};function D_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":L_[i.combine]||"ENVMAP_BLENDING_NONE"}function I_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function U_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=A_(t),c=C_(t),h=P_(t),d=D_(t),u=I_(t),f=__(t),g=v_(s),y=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),p.length>0&&(p+=`
`)):(m=[Ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),p=[Ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==an?"#define TONE_MAPPING":"",t.toneMapping!==an?et.tonemapping_pars_fragment:"",t.toneMapping!==an?m_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,f_("linearToOutputTexel",t.outputColorSpace),g_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),o=wl(o),o=$u(o,t),o=Yu(o,t),a=wl(a),a=$u(a,t),a=Yu(a,t),o=ju(o),a=ju(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+o,x=M+p+a,U=Wu(r,r.VERTEX_SHADER,S),A=Wu(r,r.FRAGMENT_SHADER,x);r.attachShader(y,U),r.attachShader(y,A),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function I(R){if(i.debug.checkShaderErrors){const C=r.getProgramInfoLog(y)||"",F=r.getShaderInfoLog(U)||"",D=r.getShaderInfoLog(A)||"",L=C.trim(),T=F.trim(),z=D.trim();let X=!0,q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,U,A);else{const G=qu(r,U,"vertex"),he=qu(r,A,"fragment");ot("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+G+`
`+he)}else L!==""?ke("WebGLProgram: Program Info Log:",L):(T===""||z==="")&&(q=!1);q&&(R.diagnostics={runnable:X,programLog:L,vertexShader:{log:T,prefix:m},fragmentShader:{log:z,prefix:p}})}r.deleteShader(U),r.deleteShader(A),_=new Ws(r,y),E=x_(r,y)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(y,c_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=A,this}let N_=0;class F_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new O_(e),t.set(e,n)),n}}class O_{constructor(e){this.id=N_++,this.code=e,this.usedTimes=0}}function B_(i){return i===pi||i===hs||i===ds}function z_(i,e,t,n,r,s){const o=new Fc,a=new F_,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,E,P,R,C,F){const D=R.fog,L=C.geometry,T=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=e.get(_.envMap||T,z),q=X&&X.mapping===rs?X.image.height:null,G=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&ke("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const he=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,pe=he!==void 0?he.length:0;let Le=0;L.morphAttributes.position!==void 0&&(Le=1),L.morphAttributes.normal!==void 0&&(Le=2),L.morphAttributes.color!==void 0&&(Le=3);let we,xe,Z,ge;if(G){const Ye=wn[G];we=Ye.vertexShader,xe=Ye.fragmentShader}else we=_.vertexShader,xe=_.fragmentShader,a.update(_),Z=a.getVertexShaderID(_),ge=a.getFragmentShaderID(_);const oe=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Ne=C.isInstancedMesh===!0,Ie=C.isBatchedMesh===!0,$e=!!_.map,Be=!!_.matcap,ee=!!X,ie=!!_.aoMap,Y=!!_.lightMap,ve=!!_.bumpMap,me=!!_.normalMap,He=!!_.displacementMap,N=!!_.emissiveMap,We=!!_.metalnessMap,De=!!_.roughnessMap,Ge=_.anisotropy>0,se=_.clearcoat>0,rt=_.dispersion>0,w=_.iridescence>0,v=_.sheen>0,H=_.transmission>0,K=Ge&&!!_.anisotropyMap,te=se&&!!_.clearcoatMap,le=se&&!!_.clearcoatNormalMap,de=se&&!!_.clearcoatRoughnessMap,j=w&&!!_.iridescenceMap,Q=w&&!!_.iridescenceThicknessMap,Me=v&&!!_.sheenColorMap,Te=v&&!!_.sheenRoughnessMap,_e=!!_.specularMap,fe=!!_.specularColorMap,Xe=!!_.specularIntensityMap,qe=H&&!!_.transmissionMap,lt=H&&!!_.thicknessMap,O=!!_.gradientMap,ue=!!_.alphaMap,J=_.alphaTest>0,be=!!_.alphaHash,ae=!!_.extensions;let ne=an;_.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ne=i.toneMapping);const Ce={shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:we,fragmentShader:xe,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:ge,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Ie,batchingColor:Ie&&C._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&C.instanceColor!==null,instancingMorph:Ne&&C.morphTexture!==null,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:$e,matcap:Be,envMap:ee,envMapMode:ee&&X.mapping,envMapCubeUVHeight:q,aoMap:ie,lightMap:Y,bumpMap:ve,normalMap:me,displacementMap:He,emissiveMap:N,normalMapObjectSpace:me&&_.normalMapType===Yd,normalMapTangentSpace:me&&_.normalMapType===fs,packedNormalMap:me&&_.normalMapType===fs&&B_(_.normalMap.format),metalnessMap:We,roughnessMap:De,anisotropy:Ge,anisotropyMap:K,clearcoat:se,clearcoatMap:te,clearcoatNormalMap:le,clearcoatRoughnessMap:de,dispersion:rt,iridescence:w,iridescenceMap:j,iridescenceThicknessMap:Q,sheen:v,sheenColorMap:Me,sheenRoughnessMap:Te,specularMap:_e,specularColorMap:fe,specularIntensityMap:Xe,transmission:H,transmissionMap:qe,thicknessMap:lt,gradientMap:O,opaque:_.transparent===!1&&_.blending===Di&&_.alphaToCoverage===!1,alphaMap:ue,alphaTest:J,alphaHash:be,combine:_.combine,mapUv:$e&&g(_.map.channel),aoMapUv:ie&&g(_.aoMap.channel),lightMapUv:Y&&g(_.lightMap.channel),bumpMapUv:ve&&g(_.bumpMap.channel),normalMapUv:me&&g(_.normalMap.channel),displacementMapUv:He&&g(_.displacementMap.channel),emissiveMapUv:N&&g(_.emissiveMap.channel),metalnessMapUv:We&&g(_.metalnessMap.channel),roughnessMapUv:De&&g(_.roughnessMap.channel),anisotropyMapUv:K&&g(_.anisotropyMap.channel),clearcoatMapUv:te&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(_.sheenRoughnessMap.channel),specularMapUv:_e&&g(_.specularMap.channel),specularColorMapUv:fe&&g(_.specularColorMap.channel),specularIntensityMapUv:Xe&&g(_.specularIntensityMap.channel),transmissionMapUv:qe&&g(_.transmissionMap.channel),thicknessMapUv:lt&&g(_.thicknessMap.channel),alphaMapUv:ue&&g(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(me||Ge),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!L.attributes.uv&&($e||ue),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ae,skinning:C.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Le,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:$e&&_.map.isVideoTexture===!0&&at.getTransfer(_.map.colorSpace)===ht,decodeVideoTextureEmissive:N&&_.emissiveMap.isVideoTexture===!0&&at.getTransfer(_.emissiveMap.colorSpace)===ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Rn,flipSided:_.side===Wt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function m(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)E.push(P),E.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(E,_),M(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function M(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),_.push(o.mask)}function S(_){const E=f[_.type];let P;if(E){const R=wn[E];P=Rp.clone(R.uniforms)}else P=_.uniforms;return P}function x(_,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new U_(i,E,_,r),c.push(P),h.set(E,P)),P}function U(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){a.remove(_)}function I(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:S,acquireProgram:x,releaseProgram:U,releaseShaderCache:A,programs:c,dispose:I}}function k_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function H_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ju(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,y,m,p){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=o(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function l(u,f,g,y,m,p){const M=a(u,f,g,y,m,p);g.transmission>0?n.push(M):g.transparent===!0?r.push(M):t.push(M)}function c(u,f,g,y,m,p){const M=a(u,f,g,y,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?r.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||H_),n.length>1&&n.sort(f||Ju),r.length>1&&r.sort(f||Ju)}function d(){for(let u=e,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:h}}function V_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Zu,i.set(n,[o])):r>=s.length?(o=new Zu,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function G_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new tt};break;case"SpotLight":t={position:new B,direction:new B,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function W_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let X_=0;function q_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $_(i){const e=new G_,t=W_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const r=new B,s=new _t,o=new _t;function a(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,M=0,S=0,x=0,U=0,A=0,I=0;c.sort(q_);for(let E=0,P=c.length;E<P;E++){const R=c[E],C=R.color,F=R.intensity,D=R.distance;let L=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===pi?L=R.shadow.map.texture:L=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=C.r*F,d+=C.g*F,u+=C.b*F;else if(R.isLightProbe){for(let T=0;T<9;T++)n.probe[T].addScaledVector(R.sh.coefficients[T],F);I++}else if(R.isDirectionalLight){const T=e.get(R);if(T.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const z=R.shadow,X=t.get(R);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=L,n.directionalShadowMatrix[f]=R.shadow.matrix,M++}n.directional[f]=T,f++}else if(R.isSpotLight){const T=e.get(R);T.position.setFromMatrixPosition(R.matrixWorld),T.color.copy(C).multiplyScalar(F),T.distance=D,T.coneCos=Math.cos(R.angle),T.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),T.decay=R.decay,n.spot[y]=T;const z=R.shadow;if(R.map&&(n.spotLightMap[U]=R.map,U++,z.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[y]=z.matrix,R.castShadow){const X=t.get(R);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,n.spotShadow[y]=X,n.spotShadowMap[y]=L,x++}y++}else if(R.isRectAreaLight){const T=e.get(R);T.color.copy(C).multiplyScalar(F),T.halfWidth.set(R.width*.5,0,0),T.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=T,m++}else if(R.isPointLight){const T=e.get(R);if(T.color.copy(R.color).multiplyScalar(R.intensity),T.distance=R.distance,T.decay=R.decay,R.castShadow){const z=R.shadow,X=t.get(R);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,X.shadowCameraNear=z.camera.near,X.shadowCameraFar=z.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=L,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=T,g++}else if(R.isHemisphereLight){const T=e.get(R);T.skyColor.copy(R.color).multiplyScalar(F),T.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[p]=T,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const _=n.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==y||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==M||_.numPointShadows!==S||_.numSpotShadows!==x||_.numSpotMaps!==U||_.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+U-A,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,_.directionalLength=f,_.pointLength=g,_.spotLength=y,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=M,_.numPointShadows=S,_.numSpotShadows=x,_.numSpotMaps=U,_.numLightProbes=I,n.version=X_++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const x=n.hemi[y];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function Qu(i){const e=new $_(i),t=[],n=[],r=[];function s(u){d.camera=u,t.length=0,n.length=0,r.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Y_(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Qu(i),e.set(r,[a])):s>=o.length?(a=new Qu(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const j_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K_=`uniform sampler2D shadow_pass;
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
}`,J_=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Z_=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],eh=new _t,Wr=new B,Al=new B;function Q_(i,e,t){let n=new tl;const r=new ce,s=new ce,o=new St,a=new Up,l=new Np,c={},h=t.maxTextureSize,d={[on]:Wt,[Wt]:on,[Rn]:Rn},u=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:j_,fragmentShader:K_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new vt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ns;let p=this.type;this.render=function(A,I,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===wd&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ns);const E=i.getRenderTarget(),P=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Pn),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const F=p!==this.type;F&&I.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(L=>L.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,L=A.length;D<L;D++){const T=A[D],z=T.shadow;if(z===void 0){ke("WebGLShadowMap:",T,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const X=z.getFrameExtents();r.multiply(X),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/X.x),r.x=s.x*X.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/X.y),r.y=s.y*X.y,z.mapSize.y=s.y));const q=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=q,z.map===null||F===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===gr){if(T.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new yn(r.x,r.y,{format:pi,type:jt,minFilter:ft,magFilter:ft,generateMipmaps:!1}),z.map.texture.name=T.name+".shadowMap",z.map.depthTexture=new Ji(r.x,r.y,$t),z.map.depthTexture.name=T.name+".shadowMapDepth",z.map.depthTexture.format=Ln,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ut,z.map.depthTexture.magFilter=Ut}else T.isPointLight?(z.map=new Iu(r.x),z.map.depthTexture=new Yf(r.x,vn)):(z.map=new yn(r.x,r.y),z.map.depthTexture=new Ji(r.x,r.y,vn)),z.map.depthTexture.name=T.name+".shadowMap",z.map.depthTexture.format=Ln,this.type===ns?(z.map.depthTexture.compareFunction=q?Ta:Aa,z.map.depthTexture.minFilter=ft,z.map.depthTexture.magFilter=ft):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ut,z.map.depthTexture.magFilter=Ut);z.camera.updateProjectionMatrix()}const G=z.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<G;he++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,he),i.clear();else{he===0&&(i.setRenderTarget(z.map),i.clear());const pe=z.getViewport(he);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),C.viewport(o)}if(T.isPointLight){const pe=z.camera,Le=z.matrix,we=T.distance||pe.far;we!==pe.far&&(pe.far=we,pe.updateProjectionMatrix()),Wr.setFromMatrixPosition(T.matrixWorld),pe.position.copy(Wr),Al.copy(pe.position),Al.add(J_[he]),pe.up.copy(Z_[he]),pe.lookAt(Al),pe.updateMatrixWorld(),Le.makeTranslation(-Wr.x,-Wr.y,-Wr.z),eh.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),z._frustum.setFromProjectionMatrix(eh,pe.coordinateSystem,pe.reversedDepth)}else z.updateMatrices(T);n=z.getFrustum(),x(I,_,z.camera,T,this.type)}z.isPointLightShadow!==!0&&this.type===gr&&M(z,_),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,P,R)};function M(A,I){const _=e.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new yn(r.x,r.y,{format:pi,type:jt})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,_,u,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,_,f,y,null)}function S(A,I,_,E){let P=null;const R=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)P=R;else if(P=_.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const C=P.uuid,F=I.uuid;let D=c[C];D===void 0&&(D={},c[C]=D);let L=D[F];L===void 0&&(L=P.clone(),D[F]=L,I.addEventListener("dispose",U)),P=L}if(P.visible=I.visible,P.wireframe=I.wireframe,E===gr?P.side=I.shadowSide!==null?I.shadowSide:I.side:P.side=I.shadowSide!==null?I.shadowSide:d[I.side],P.alphaMap=I.alphaMap,P.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,P.map=I.map,P.clipShadows=I.clipShadows,P.clippingPlanes=I.clippingPlanes,P.clipIntersection=I.clipIntersection,P.displacementMap=I.displacementMap,P.displacementScale=I.displacementScale,P.displacementBias=I.displacementBias,P.wireframeLinewidth=I.wireframeLinewidth,P.linewidth=I.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const C=i.properties.get(P);C.light=_}return P}function x(A,I,_,E,P){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&P===gr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const F=e.update(A),D=A.material;if(Array.isArray(D)){const L=F.groups;for(let T=0,z=L.length;T<z;T++){const X=L[T],q=D[X.materialIndex];if(q&&q.visible){const G=S(A,q,E,P);A.onBeforeShadow(i,A,I,_,F,G,X),i.renderBufferDirect(_,null,F,G,A,X),A.onAfterShadow(i,A,I,_,F,G,X)}}}else if(D.visible){const L=S(A,D,E,P);A.onBeforeShadow(i,A,I,_,F,L,null),i.renderBufferDirect(_,null,F,L,A,null),A.onAfterShadow(i,A,I,_,F,L,null)}}const C=A.children;for(let F=0,D=C.length;F<D;F++)x(C[F],I,_,E,P)}function U(A){A.target.removeEventListener("dispose",U);for(const _ in c){const E=c[_],P=A.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function ev(i,e){function t(){let O=!1;const ue=new St;let J=null;const be=new St(0,0,0,0);return{setMask:function(ae){J!==ae&&!O&&(i.colorMask(ae,ae,ae,ae),J=ae)},setLocked:function(ae){O=ae},setClear:function(ae,ne,Ce,Ye,xt){xt===!0&&(ae*=Ye,ne*=Ye,Ce*=Ye),ue.set(ae,ne,Ce,Ye),be.equals(ue)===!1&&(i.clearColor(ae,ne,Ce,Ye),be.copy(ue))},reset:function(){O=!1,J=null,be.set(-1,0,0,0)}}}function n(){let O=!1,ue=!1,J=null,be=null,ae=null;return{setReversed:function(ne){if(ue!==ne){const Ce=e.get("EXT_clip_control");ne?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ue=ne;const Ye=ae;ae=null,this.setClear(Ye)}},getReversed:function(){return ue},setTest:function(ne){ne?oe(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(ne){J!==ne&&!O&&(i.depthMask(ne),J=ne)},setFunc:function(ne){if(ue&&(ne=sf[ne]),be!==ne){switch(ne){case Co:i.depthFunc(i.NEVER);break;case Ro:i.depthFunc(i.ALWAYS);break;case Po:i.depthFunc(i.LESS);break;case Ii:i.depthFunc(i.LEQUAL);break;case Lo:i.depthFunc(i.EQUAL);break;case Do:i.depthFunc(i.GEQUAL);break;case Io:i.depthFunc(i.GREATER);break;case Uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=ne}},setLocked:function(ne){O=ne},setClear:function(ne){ae!==ne&&(ae=ne,ue&&(ne=1-ne),i.clearDepth(ne))},reset:function(){O=!1,J=null,be=null,ae=null,ue=!1}}}function r(){let O=!1,ue=null,J=null,be=null,ae=null,ne=null,Ce=null,Ye=null,xt=null;return{setTest:function(ut){O||(ut?oe(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(ut){ue!==ut&&!O&&(i.stencilMask(ut),ue=ut)},setFunc:function(ut,mn,rn){(J!==ut||be!==mn||ae!==rn)&&(i.stencilFunc(ut,mn,rn),J=ut,be=mn,ae=rn)},setOp:function(ut,mn,rn){(ne!==ut||Ce!==mn||Ye!==rn)&&(i.stencilOp(ut,mn,rn),ne=ut,Ce=mn,Ye=rn)},setLocked:function(ut){O=ut},setClear:function(ut){xt!==ut&&(i.clearStencil(ut),xt=ut)},reset:function(){O=!1,ue=null,J=null,be=null,ae=null,ne=null,Ce=null,Ye=null,xt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,S=null,x=null,U=null,A=null,I=null,_=new tt(0,0,0),E=0,P=!1,R=null,C=null,F=null,D=null,L=null;const T=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,X=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=X>=2);let G=null,he={};const pe=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),we=new St().fromArray(pe),xe=new St().fromArray(Le);function Z(O,ue,J,be){const ae=new Uint8Array(4),ne=i.createTexture();i.bindTexture(O,ne),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<J;Ce++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(ue+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return ne}const ge={};ge[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(Ii),ve(!1),me(cc),oe(i.CULL_FACE),ie(Pn);function oe(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Ae(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ne(O,ue){return u[O]!==ue?(i.bindFramebuffer(O,ue),u[O]=ue,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ie(O,ue){let J=g,be=!1;if(O){J=f.get(ue),J===void 0&&(J=[],f.set(ue,J));const ae=O.textures;if(J.length!==ae.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Ce=ae.length;ne<Ce;ne++)J[ne]=i.COLOR_ATTACHMENT0+ne;J.length=ae.length,be=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,be=!0);be&&i.drawBuffers(J)}function $e(O){return y!==O?(i.useProgram(O),y=O,!0):!1}const Be={[hi]:i.FUNC_ADD,[Td]:i.FUNC_SUBTRACT,[Cd]:i.FUNC_REVERSE_SUBTRACT};Be[Rd]=i.MIN,Be[Pd]=i.MAX;const ee={[Ld]:i.ZERO,[Dd]:i.ONE,[Id]:i.SRC_COLOR,[Ao]:i.SRC_ALPHA,[zd]:i.SRC_ALPHA_SATURATE,[Od]:i.DST_COLOR,[Nd]:i.DST_ALPHA,[Ud]:i.ONE_MINUS_SRC_COLOR,[To]:i.ONE_MINUS_SRC_ALPHA,[Bd]:i.ONE_MINUS_DST_COLOR,[Fd]:i.ONE_MINUS_DST_ALPHA,[kd]:i.CONSTANT_COLOR,[Hd]:i.ONE_MINUS_CONSTANT_COLOR,[Vd]:i.CONSTANT_ALPHA,[Gd]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(O,ue,J,be,ae,ne,Ce,Ye,xt,ut){if(O===Pn){m===!0&&(Ae(i.BLEND),m=!1);return}if(m===!1&&(oe(i.BLEND),m=!0),O!==Ad){if(O!==p||ut!==P){if((M!==hi||U!==hi)&&(i.blendEquation(i.FUNC_ADD),M=hi,U=hi),ut)switch(O){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uc:i.blendFunc(i.ONE,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",O);break}else switch(O){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hc:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dc:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",O);break}S=null,x=null,A=null,I=null,_.set(0,0,0),E=0,p=O,P=ut}return}ae=ae||ue,ne=ne||J,Ce=Ce||be,(ue!==M||ae!==U)&&(i.blendEquationSeparate(Be[ue],Be[ae]),M=ue,U=ae),(J!==S||be!==x||ne!==A||Ce!==I)&&(i.blendFuncSeparate(ee[J],ee[be],ee[ne],ee[Ce]),S=J,x=be,A=ne,I=Ce),(Ye.equals(_)===!1||xt!==E)&&(i.blendColor(Ye.r,Ye.g,Ye.b,xt),_.copy(Ye),E=xt),p=O,P=!1}function Y(O,ue){O.side===Rn?Ae(i.CULL_FACE):oe(i.CULL_FACE);let J=O.side===Wt;ue&&(J=!J),ve(J),O.blending===Di&&O.transparent===!1?ie(Pn):ie(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const be=O.stencilWrite;a.setTest(be),be&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),N(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(O){R!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),R=O)}function me(O){O!==bd?(oe(i.CULL_FACE),O!==C&&(O===cc?i.cullFace(i.BACK):O===Ed?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),C=O}function He(O){O!==F&&(z&&i.lineWidth(O),F=O)}function N(O,ue,J){O?(oe(i.POLYGON_OFFSET_FILL),(D!==ue||L!==J)&&(D=ue,L=J,o.getReversed()&&(ue=-ue),i.polygonOffset(ue,J))):Ae(i.POLYGON_OFFSET_FILL)}function We(O){O?oe(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function De(O){O===void 0&&(O=i.TEXTURE0+T-1),G!==O&&(i.activeTexture(O),G=O)}function Ge(O,ue,J){J===void 0&&(G===null?J=i.TEXTURE0+T-1:J=G);let be=he[J];be===void 0&&(be={type:void 0,texture:void 0},he[J]=be),(be.type!==O||be.texture!==ue)&&(G!==J&&(i.activeTexture(J),G=J),i.bindTexture(O,ue||ge[O]),be.type=O,be.texture=ue)}function se(){const O=he[G];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function v(){try{i.texSubImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function H(){try{i.texSubImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function le(){try{i.texStorage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function de(){try{i.texStorage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function j(){try{i.texImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function Q(){try{i.texImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function Me(O){return d[O]!==void 0?d[O]:i.getParameter(O)}function Te(O,ue){d[O]!==ue&&(i.pixelStorei(O,ue),d[O]=ue)}function _e(O){we.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),we.copy(O))}function fe(O){xe.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),xe.copy(O))}function Xe(O,ue){let J=c.get(ue);J===void 0&&(J=new WeakMap,c.set(ue,J));let be=J.get(O);be===void 0&&(be=i.getUniformBlockIndex(ue,O.name),J.set(O,be))}function qe(O,ue){const be=c.get(ue).get(O);l.get(ue)!==be&&(i.uniformBlockBinding(ue,be,O.__bindingPointIndex),l.set(ue,be))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},G=null,he={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,S=null,x=null,U=null,A=null,I=null,_=new tt(0,0,0),E=0,P=!1,R=null,C=null,F=null,D=null,L=null,we.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Ae,bindFramebuffer:Ne,drawBuffers:Ie,useProgram:$e,setBlending:ie,setMaterial:Y,setFlipSided:ve,setCullFace:me,setLineWidth:He,setPolygonOffset:N,setScissorTest:We,activeTexture:De,bindTexture:Ge,unbindTexture:se,compressedTexImage2D:rt,compressedTexImage3D:w,texImage2D:j,texImage3D:Q,pixelStorei:Te,getParameter:Me,updateUBOMapping:Xe,uniformBlockBinding:qe,texStorage2D:le,texStorage3D:de,texSubImage2D:v,texSubImage3D:H,compressedTexSubImage2D:K,compressedTexSubImage3D:te,scissor:_e,viewport:fe,reset:lt}}function tv(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,v){return g?new OffscreenCanvas(w,v):Mr("canvas")}function m(w,v,H){let K=1;const te=rt(w);if((te.width>H||te.height>H)&&(K=H/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const le=Math.floor(K*te.width),de=Math.floor(K*te.height);u===void 0&&(u=y(le,de));const j=v?y(le,de):u;return j.width=le,j.height=de,j.getContext("2d").drawImage(w,0,0,le,de),ke("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+le+"x"+de+")."),j}else return"data"in w&&ke("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function p(w){return w.generateMipmaps}function M(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(w,v,H,K,te,le=!1){if(w!==null){if(i[w]!==void 0)return i[w];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let de;K&&(de=e.get("EXT_texture_norm16"),de||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=v;if(v===i.RED&&(H===i.FLOAT&&(j=i.R32F),H===i.HALF_FLOAT&&(j=i.R16F),H===i.UNSIGNED_BYTE&&(j=i.R8),H===i.UNSIGNED_SHORT&&de&&(j=de.R16_EXT),H===i.SHORT&&de&&(j=de.R16_SNORM_EXT)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.R8UI),H===i.UNSIGNED_SHORT&&(j=i.R16UI),H===i.UNSIGNED_INT&&(j=i.R32UI),H===i.BYTE&&(j=i.R8I),H===i.SHORT&&(j=i.R16I),H===i.INT&&(j=i.R32I)),v===i.RG&&(H===i.FLOAT&&(j=i.RG32F),H===i.HALF_FLOAT&&(j=i.RG16F),H===i.UNSIGNED_BYTE&&(j=i.RG8),H===i.UNSIGNED_SHORT&&de&&(j=de.RG16_EXT),H===i.SHORT&&de&&(j=de.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RG8UI),H===i.UNSIGNED_SHORT&&(j=i.RG16UI),H===i.UNSIGNED_INT&&(j=i.RG32UI),H===i.BYTE&&(j=i.RG8I),H===i.SHORT&&(j=i.RG16I),H===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGB8UI),H===i.UNSIGNED_SHORT&&(j=i.RGB16UI),H===i.UNSIGNED_INT&&(j=i.RGB32UI),H===i.BYTE&&(j=i.RGB8I),H===i.SHORT&&(j=i.RGB16I),H===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),H===i.UNSIGNED_INT&&(j=i.RGBA32UI),H===i.BYTE&&(j=i.RGBA8I),H===i.SHORT&&(j=i.RGBA16I),H===i.INT&&(j=i.RGBA32I)),v===i.RGB&&(H===i.UNSIGNED_SHORT&&de&&(j=de.RGB16_EXT),H===i.SHORT&&de&&(j=de.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),v===i.RGBA){const Q=le?ps:at.getTransfer(te);H===i.FLOAT&&(j=i.RGBA32F),H===i.HALF_FLOAT&&(j=i.RGBA16F),H===i.UNSIGNED_BYTE&&(j=Q===ht?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&de&&(j=de.RGBA16_EXT),H===i.SHORT&&de&&(j=de.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function U(w,v){let H;return w?v===null||v===vn||v===vr?H=i.DEPTH24_STENCIL8:v===$t?H=i.DEPTH32F_STENCIL8:v===_r&&(H=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===vn||v===vr?H=i.DEPTH_COMPONENT24:v===$t?H=i.DEPTH_COMPONENT32F:v===_r&&(H=i.DEPTH_COMPONENT16),H}function A(w,v){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ut&&w.minFilter!==ft?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function I(w){const v=w.target;v.removeEventListener("dispose",I),E(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function _(w){const v=w.target;v.removeEventListener("dispose",_),R(v)}function E(w){const v=n.get(w);if(v.__webglInit===void 0)return;const H=w.source,K=f.get(H);if(K){const te=K[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(w),Object.keys(K).length===0&&f.delete(H)}n.remove(w)}function P(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const H=w.source,K=f.get(H);delete K[v.__cacheKey],o.memory.textures--}function R(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let te=0;te<v.__webglFramebuffer[K].length;te++)i.deleteFramebuffer(v.__webglFramebuffer[K][te]);else i.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)i.deleteFramebuffer(v.__webglFramebuffer[K]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=w.textures;for(let K=0,te=H.length;K<te;K++){const le=n.get(H[K]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(H[K])}n.remove(w)}let C=0;function F(){C=0}function D(){return C}function L(w){C=w}function T(){const w=C;return w>=r.maxTextures&&ke("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),C+=1,w}function z(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function X(w,v){const H=n.get(w);if(w.isVideoTexture&&Ge(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){const K=w.image;if(K===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(H,w,v);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function q(w,v){const H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Ae(H,w,v);return}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function G(w,v){const H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Ae(H,w,v);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function he(w,v){const H=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&H.__version!==w.version){Ne(H,w,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}const pe={[ss]:i.REPEAT,[ln]:i.CLAMP_TO_EDGE,[Ho]:i.MIRRORED_REPEAT},Le={[Ut]:i.NEAREST,[qd]:i.NEAREST_MIPMAP_NEAREST,[os]:i.NEAREST_MIPMAP_LINEAR,[ft]:i.LINEAR,[Vo]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},we={[jd]:i.NEVER,[ef]:i.ALWAYS,[Kd]:i.LESS,[Aa]:i.LEQUAL,[Jd]:i.EQUAL,[Ta]:i.GEQUAL,[Zd]:i.GREATER,[Qd]:i.NOTEQUAL};function xe(w,v){if(v.type===$t&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===ft||v.magFilter===Vo||v.magFilter===os||v.magFilter===$n||v.minFilter===ft||v.minFilter===Vo||v.minFilter===os||v.minFilter===$n)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,pe[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,pe[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,pe[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Le[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Le[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,we[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ut||v.minFilter!==os&&v.minFilter!==$n||v.type===$t&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Z(w,v){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",I));const K=v.source;let te=f.get(K);te===void 0&&(te={},f.set(K,te));const le=z(v);if(le!==w.__cacheKey){te[le]===void 0&&(te[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[le].usedTimes++;const de=te[w.__cacheKey];de!==void 0&&(te[w.__cacheKey].usedTimes--,de.usedTimes===0&&P(v)),w.__cacheKey=le,w.__webglTexture=te[le].texture}return H}function ge(w,v,H){return Math.floor(Math.floor(w/H)/v)}function oe(w,v,H,K){const le=w.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,H,K,v.data);else{le.sort((Te,_e)=>Te.start-_e.start);let de=0;for(let Te=1;Te<le.length;Te++){const _e=le[de],fe=le[Te],Xe=_e.start+_e.count,qe=ge(fe.start,v.width,4),lt=ge(_e.start,v.width,4);fe.start<=Xe+1&&qe===lt&&ge(fe.start+fe.count-1,v.width,4)===qe?_e.count=Math.max(_e.count,fe.start+fe.count-_e.start):(++de,le[de]=fe)}le.length=de+1;const j=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),Me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Te=0,_e=le.length;Te<_e;Te++){const fe=le[Te],Xe=Math.floor(fe.start/4),qe=Math.ceil(fe.count/4),lt=Xe%v.width,O=Math.floor(Xe/v.width),ue=qe,J=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,lt,O,ue,J,H,K,v.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function Ae(w,v,H){let K=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=i.TEXTURE_3D);const te=Z(w,v),le=v.source;t.bindTexture(K,w.__webglTexture,i.TEXTURE0+H);const de=n.get(le);if(le.version!==de.__version||te===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const J=at.getPrimaries(at.workingColorSpace),be=v.colorSpace===Yn?null:at.getPrimaries(v.colorSpace),ae=v.colorSpace===Yn||J===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=m(v.image,!1,r.maxTextureSize);Q=se(v,Q);const Me=s.convert(v.format,v.colorSpace),Te=s.convert(v.type);let _e=x(v.internalFormat,Me,Te,v.normalized,v.colorSpace,v.isVideoTexture);xe(K,v);let fe;const Xe=v.mipmaps,qe=v.isVideoTexture!==!0,lt=de.__version===void 0||te===!0,O=le.dataReady,ue=A(v,Q);if(v.isDepthTexture)_e=U(v.format===fi,v.type),lt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,_e,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,_e,Q.width,Q.height,0,Me,Te,null));else if(v.isDataTexture)if(Xe.length>0){qe&&lt&&t.texStorage2D(i.TEXTURE_2D,ue,_e,Xe[0].width,Xe[0].height);for(let J=0,be=Xe.length;J<be;J++)fe=Xe[J],qe?O&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,fe.width,fe.height,Me,Te,fe.data):t.texImage2D(i.TEXTURE_2D,J,_e,fe.width,fe.height,0,Me,Te,fe.data);v.generateMipmaps=!1}else qe?(lt&&t.texStorage2D(i.TEXTURE_2D,ue,_e,Q.width,Q.height),O&&oe(v,Q,Me,Te)):t.texImage2D(i.TEXTURE_2D,0,_e,Q.width,Q.height,0,Me,Te,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qe&&lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,_e,Xe[0].width,Xe[0].height,Q.depth);for(let J=0,be=Xe.length;J<be;J++)if(fe=Xe[J],v.format!==tn)if(Me!==null)if(qe){if(O)if(v.layerUpdates.size>0){const ae=wu(fe.width,fe.height,v.format,v.type);for(const ne of v.layerUpdates){const Ce=fe.data.subarray(ne*ae/fe.data.BYTES_PER_ELEMENT,(ne+1)*ae/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ne,fe.width,fe.height,1,Me,Ce)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,Q.depth,Me,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,_e,fe.width,fe.height,Q.depth,0,fe.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,Q.depth,Me,Te,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,_e,fe.width,fe.height,Q.depth,0,Me,Te,fe.data)}else{qe&&lt&&t.texStorage2D(i.TEXTURE_2D,ue,_e,Xe[0].width,Xe[0].height);for(let J=0,be=Xe.length;J<be;J++)fe=Xe[J],v.format!==tn?Me!==null?qe?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,fe.width,fe.height,Me,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,J,_e,fe.width,fe.height,0,fe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?O&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,fe.width,fe.height,Me,Te,fe.data):t.texImage2D(i.TEXTURE_2D,J,_e,fe.width,fe.height,0,Me,Te,fe.data)}else if(v.isDataArrayTexture)if(qe){if(lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,_e,Q.width,Q.height,Q.depth),O)if(v.layerUpdates.size>0){const J=wu(Q.width,Q.height,v.format,v.type);for(const be of v.layerUpdates){const ae=Q.data.subarray(be*J/Q.data.BYTES_PER_ELEMENT,(be+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,Q.width,Q.height,1,Me,Te,ae)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Me,Te,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,Q.width,Q.height,Q.depth,0,Me,Te,Q.data);else if(v.isData3DTexture)qe?(lt&&t.texStorage3D(i.TEXTURE_3D,ue,_e,Q.width,Q.height,Q.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Me,Te,Q.data)):t.texImage3D(i.TEXTURE_3D,0,_e,Q.width,Q.height,Q.depth,0,Me,Te,Q.data);else if(v.isFramebufferTexture){if(lt)if(qe)t.texStorage2D(i.TEXTURE_2D,ue,_e,Q.width,Q.height);else{let J=Q.width,be=Q.height;for(let ae=0;ae<ue;ae++)t.texImage2D(i.TEXTURE_2D,ae,_e,J,be,0,Me,Te,null),J>>=1,be>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),d.add(v),J.onpaint=Ye=>{const xt=Ye.changedElements;for(const ut of d)xt.includes(ut.image)&&(ut.needsUpdate=!0)},J.requestPaint();return}const be=0,ae=i.RGBA,ne=i.RGBA,Ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,be,ae,ne,Ce,Q),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(qe&&lt){const J=rt(Xe[0]);t.texStorage2D(i.TEXTURE_2D,ue,_e,J.width,J.height)}for(let J=0,be=Xe.length;J<be;J++)fe=Xe[J],qe?O&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Me,Te,fe):t.texImage2D(i.TEXTURE_2D,J,_e,Me,Te,fe);v.generateMipmaps=!1}else if(qe){if(lt){const J=rt(Q);t.texStorage2D(i.TEXTURE_2D,ue,_e,J.width,J.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Te,Q)}else t.texImage2D(i.TEXTURE_2D,0,_e,Me,Te,Q);p(v)&&M(K),de.__version=le.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ne(w,v,H){if(v.image.length!==6)return;const K=Z(w,v),te=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+H);const le=n.get(te);if(te.version!==le.__version||K===!0){t.activeTexture(i.TEXTURE0+H);const de=at.getPrimaries(at.workingColorSpace),j=v.colorSpace===Yn?null:at.getPrimaries(v.colorSpace),Q=v.colorSpace===Yn||de===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const Me=v.isCompressedTexture||v.image[0].isCompressedTexture,Te=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let ne=0;ne<6;ne++)!Me&&!Te?_e[ne]=m(v.image[ne],!0,r.maxCubemapSize):_e[ne]=Te?v.image[ne].image:v.image[ne],_e[ne]=se(v,_e[ne]);const fe=_e[0],Xe=s.convert(v.format,v.colorSpace),qe=s.convert(v.type),lt=x(v.internalFormat,Xe,qe,v.normalized,v.colorSpace),O=v.isVideoTexture!==!0,ue=le.__version===void 0||K===!0,J=te.dataReady;let be=A(v,fe);xe(i.TEXTURE_CUBE_MAP,v);let ae;if(Me){O&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,lt,fe.width,fe.height);for(let ne=0;ne<6;ne++){ae=_e[ne].mipmaps;for(let Ce=0;Ce<ae.length;Ce++){const Ye=ae[Ce];v.format!==tn?Xe!==null?O?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,Ye.width,Ye.height,Xe,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,lt,Ye.width,Ye.height,0,Ye.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,Ye.width,Ye.height,Xe,qe,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,lt,Ye.width,Ye.height,0,Xe,qe,Ye.data)}}}else{if(ae=v.mipmaps,O&&ue){ae.length>0&&be++;const ne=rt(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,lt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Te){O?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,_e[ne].width,_e[ne].height,Xe,qe,_e[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,lt,_e[ne].width,_e[ne].height,0,Xe,qe,_e[ne].data);for(let Ce=0;Ce<ae.length;Ce++){const xt=ae[Ce].image[ne].image;O?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,xt.width,xt.height,Xe,qe,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,lt,xt.width,xt.height,0,Xe,qe,xt.data)}}else{O?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Xe,qe,_e[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,lt,Xe,qe,_e[ne]);for(let Ce=0;Ce<ae.length;Ce++){const Ye=ae[Ce];O?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,Xe,qe,Ye.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,lt,Xe,qe,Ye.image[ne])}}}p(v)&&M(i.TEXTURE_CUBE_MAP),le.__version=te.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ie(w,v,H,K,te,le){const de=s.convert(H.format,H.colorSpace),j=s.convert(H.type),Q=x(H.internalFormat,de,j,H.normalized,H.colorSpace),Me=n.get(v),Te=n.get(H);if(Te.__renderTarget=v,!Me.__hasExternalTextures){const _e=Math.max(1,v.width>>le),fe=Math.max(1,v.height>>le);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,le,Q,_e,fe,v.depth,0,de,j,null):t.texImage2D(te,le,Q,_e,fe,0,de,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),De(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,te,Te.__webglTexture,0,We(v)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,te,Te.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(w,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const K=v.depthTexture,te=K&&K.isDepthTexture?K.type:null,le=U(v.stencilBuffer,te),de=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;De(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(v),le,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(v),le,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,le,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,w)}else{const K=v.textures;for(let te=0;te<K.length;te++){const le=K[te],de=s.convert(le.format,le.colorSpace),j=s.convert(le.type),Q=x(le.internalFormat,de,j,le.normalized,le.colorSpace);De(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(v),Q,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(v),Q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(w,v,H){const K=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(v.depthTexture);if(te.__renderTarget=v,(!te.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K){if(te.__webglInit===void 0&&(te.__webglInit=!0,v.depthTexture.addEventListener("dispose",I)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),xe(i.TEXTURE_CUBE_MAP,v.depthTexture);const Me=s.convert(v.depthTexture.format),Te=s.convert(v.depthTexture.type);let _e;v.depthTexture.format===Ln?_e=i.DEPTH_COMPONENT24:v.depthTexture.format===fi&&(_e=i.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,_e,v.width,v.height,0,Me,Te,null)}}else X(v.depthTexture,0);const le=te.__webglTexture,de=We(v),j=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,Q=v.depthTexture.format===fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ln)De(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,j,le,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,Q,j,le,0);else if(v.depthTexture.format===fi)De(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,j,le,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,Q,j,le,0);else throw new Error("Unknown depthTexture format")}function ee(w){const v=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=K}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let K=0;K<6;K++)Be(v.__webglFramebuffer[K],w,K);else{const K=w.texture.mipmaps;K&&K.length>0?Be(v.__webglFramebuffer[0],w,0):Be(v.__webglFramebuffer,w,0)}else if(H){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=i.createRenderbuffer(),$e(v.__webglDepthbuffer[K],w,!1);else{const te=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,le)}}else{const K=w.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),$e(v.__webglDepthbuffer,w,!1);else{const te=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(w,v,H){const K=n.get(w);v!==void 0&&Ie(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ee(w)}function Y(w){const v=w.texture,H=n.get(w),K=n.get(v);w.addEventListener("dispose",_);const te=w.textures,le=w.isWebGLCubeRenderTarget===!0,de=te.length>1;if(de||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=v.version,o.memory.textures++),le){H.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[j]=[];for(let Q=0;Q<v.mipmaps.length;Q++)H.__webglFramebuffer[j][Q]=i.createFramebuffer()}else H.__webglFramebuffer[j]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)H.__webglFramebuffer[j]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(de)for(let j=0,Q=te.length;j<Q;j++){const Me=n.get(te[j]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&De(w)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<te.length;j++){const Q=te[j];H.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[j]);const Me=s.convert(Q.format,Q.colorSpace),Te=s.convert(Q.type),_e=x(Q.internalFormat,Me,Te,Q.normalized,Q.colorSpace,w.isXRRenderTarget===!0),fe=We(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,_e,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,H.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),$e(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),xe(i.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Ie(H.__webglFramebuffer[j][Q],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else Ie(H.__webglFramebuffer[j],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(v)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let j=0,Q=te.length;j<Q;j++){const Me=te[j],Te=n.get(Me);let _e=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(_e=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,Te.__webglTexture),xe(_e,Me),Ie(H.__webglFramebuffer,w,Me,i.COLOR_ATTACHMENT0+j,_e,0),p(Me)&&M(_e)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(j=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,K.__webglTexture),xe(j,v),v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Ie(H.__webglFramebuffer[Q],w,v,i.COLOR_ATTACHMENT0,j,Q);else Ie(H.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,j,0);p(v)&&M(j),t.unbindTexture()}w.depthBuffer&&ee(w)}function ve(w){const v=w.textures;for(let H=0,K=v.length;H<K;H++){const te=v[H];if(p(te)){const le=S(w),de=n.get(te).__webglTexture;t.bindTexture(le,de),M(le),t.unbindTexture()}}}const me=[],He=[];function N(w){if(w.samples>0){if(De(w)===!1){const v=w.textures,H=w.width,K=w.height;let te=i.COLOR_BUFFER_BIT;const le=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(w),j=v.length>1;if(j)for(let Me=0;Me<v.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const Q=w.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[Me]);const Te=n.get(v[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,H,K,0,0,H,K,te,i.NEAREST),l===!0&&(me.length=0,He.length=0,me.push(i.COLOR_ATTACHMENT0+Me),w.depthBuffer&&w.resolveDepthBuffer===!1&&(me.push(le),He.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let Me=0;Me<v.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,de.__webglColorRenderbuffer[Me]);const Te=n.get(v[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function We(w){return Math.min(r.maxSamples,w.samples)}function De(w){const v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ge(w){const v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function se(w,v){const H=w.colorSpace,K=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==xr&&H!==Yn&&(at.getTransfer(H)===ht?(K!==tn||te!==Yt)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",H)),v}function rt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=T,this.resetTextureUnits=F,this.getTextureUnits=D,this.setTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=G,this.setTextureCube=he,this.rebindTextures=ie,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nv(i,e){function t(n,r=Yn){let s;const o=at.getTransfer(r);if(n===Yt)return i.UNSIGNED_BYTE;if(n===Wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_c)return i.BYTE;if(n===vc)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===vn)return i.UNSIGNED_INT;if(n===$t)return i.FLOAT;if(n===jt)return i.HALF_FLOAT;if(n===Mc)return i.ALPHA;if(n===Sc)return i.RGB;if(n===tn)return i.RGBA;if(n===Ln)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===qo)return i.RED;if(n===$o)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===Yo)return i.RG_INTEGER;if(n===jo)return i.RGBA_INTEGER;if(n===as||n===ls||n===cs||n===us)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===as)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===as)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ls)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===us)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ko||n===Jo||n===Zo||n===Qo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ko)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ea||n===ta||n===na||n===ia||n===ra||n===hs||n===sa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ea||n===ta)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===na)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ia)return s.COMPRESSED_R11_EAC;if(n===ra)return s.COMPRESSED_SIGNED_R11_EAC;if(n===hs)return s.COMPRESSED_RG11_EAC;if(n===sa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===oa||n===aa||n===la||n===ca||n===ua||n===ha||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===oa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===aa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===la)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ca)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ua)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ha)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===da)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ma)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ga)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_a)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===va)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ya||n===Ma||n===Sa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ya)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ma)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ba||n===Ea||n===ds||n===wa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ba)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ea)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ds)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const iv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
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

}`;class sv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Qc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bn({vertexShader:iv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ov extends mi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const y=typeof XRWebGLBinding<"u",m=new sv,p={},M=t.getContextAttributes();let S=null,x=null;const U=[],A=[],I=new ce;let _=null;const E=new Zt;E.viewport=new St;const P=new Zt;P.viewport=new St;const R=[E,P],C=new Yp;let F=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ge=U[Z];return ge===void 0&&(ge=new Fa,U[Z]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Z){let ge=U[Z];return ge===void 0&&(ge=new Fa,U[Z]=ge),ge.getGripSpace()},this.getHand=function(Z){let ge=U[Z];return ge===void 0&&(ge=new Fa,U[Z]=ge),ge.getHandSpace()};function L(Z){const ge=A.indexOf(Z.inputSource);if(ge===-1)return;const oe=U[ge];oe!==void 0&&(oe.update(Z.inputSource,Z.frame,c||o),oe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function T(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",T),r.removeEventListener("inputsourceschange",z);for(let Z=0;Z<U.length;Z++){const ge=A[Z];ge!==null&&(A[Z]=null,U[Z].disconnect(ge))}F=null,D=null,m.reset();for(const Z in p)delete p[Z];e.setRenderTarget(S),f=null,u=null,d=null,r=null,x=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",T),r.addEventListener("inputsourceschange",z),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(I),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ae=null,Ne=null;M.depth&&(Ne=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=M.stencil?fi:Ln,Ae=M.stencil?vr:vn);const Ie={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ie),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new yn(u.textureWidth,u.textureHeight,{format:tn,type:Yt,depthTexture:new Ji(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const oe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new yn(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),xe.setContext(r),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(Z){for(let ge=0;ge<Z.removed.length;ge++){const oe=Z.removed[ge],Ae=A.indexOf(oe);Ae>=0&&(A[Ae]=null,U[Ae].disconnect(oe))}for(let ge=0;ge<Z.added.length;ge++){const oe=Z.added[ge];let Ae=A.indexOf(oe);if(Ae===-1){for(let Ie=0;Ie<U.length;Ie++)if(Ie>=A.length){A.push(oe),Ae=Ie;break}else if(A[Ie]===null){A[Ie]=oe,Ae=Ie;break}if(Ae===-1)break}const Ne=U[Ae];Ne&&Ne.connect(oe)}}const X=new B,q=new B;function G(Z,ge,oe){X.setFromMatrixPosition(ge.matrixWorld),q.setFromMatrixPosition(oe.matrixWorld);const Ae=X.distanceTo(q),Ne=ge.projectionMatrix.elements,Ie=oe.projectionMatrix.elements,$e=Ne[14]/(Ne[10]-1),Be=Ne[14]/(Ne[10]+1),ee=(Ne[9]+1)/Ne[5],ie=(Ne[9]-1)/Ne[5],Y=(Ne[8]-1)/Ne[0],ve=(Ie[8]+1)/Ie[0],me=$e*Y,He=$e*ve,N=Ae/(-Y+ve),We=N*-Y;if(ge.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(We),Z.translateZ(N),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ne[10]===-1)Z.projectionMatrix.copy(ge.projectionMatrix),Z.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const De=$e+N,Ge=Be+N,se=me-We,rt=He+(Ae-We),w=ee*Be/Ge*De,v=ie*Be/Ge*De;Z.projectionMatrix.makePerspective(se,rt,w,v,De,Ge),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function he(Z,ge){ge===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ge.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ge=Z.near,oe=Z.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),C.near=P.near=E.near=ge,C.far=P.far=E.far=oe,(F!==C.near||D!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,D=C.far),C.layers.mask=Z.layers.mask|6,E.layers.mask=C.layers.mask&-5,P.layers.mask=C.layers.mask&-3;const Ae=Z.parent,Ne=C.cameras;he(C,Ae);for(let Ie=0;Ie<Ne.length;Ie++)he(Ne[Ie],Ae);Ne.length===2?G(C,E,P):C.projectionMatrix.copy(E.projectionMatrix),pe(Z,C,Ae)};function pe(Z,ge,oe){oe===null?Z.matrix.copy(ge.matrixWorld):(Z.matrix.copy(oe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ge.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ge.projectionMatrix),Z.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=br*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(Z){return p[Z]};let Le=null;function we(Z,ge){if(h=ge.getViewerPose(c||o),g=ge,h!==null){const oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ae=!1;oe.length!==C.cameras.length&&(C.cameras.length=0,Ae=!0);for(let Be=0;Be<oe.length;Be++){const ee=oe[Be];let ie=null;if(f!==null)ie=f.getViewport(ee);else{const ve=d.getViewSubImage(u,ee);ie=ve.viewport,Be===0&&(e.setRenderTargetTextures(x,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(x))}let Y=R[Be];Y===void 0&&(Y=new Zt,Y.layers.enable(Be),Y.viewport=new St,R[Be]=Y),Y.matrix.fromArray(ee.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(ee.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(ie.x,ie.y,ie.width,ie.height),Be===0&&(C.matrix.copy(Y.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ae===!0&&C.cameras.push(Y)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=n.getBinding();const Be=d.getDepthInformation(oe[0]);Be&&Be.isValid&&Be.texture&&m.init(Be,r.renderState)}if(Ne&&Ne.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let Be=0;Be<oe.length;Be++){const ee=oe[Be].camera;if(ee){let ie=p[ee];ie||(ie=new Qc,p[ee]=ie);const Y=d.getCameraImage(ee);ie.sourceTexture=Y}}}}for(let oe=0;oe<U.length;oe++){const Ae=A[oe],Ne=U[oe];Ae!==null&&Ne!==void 0&&Ne.update(Ae,ge,c||o)}Le&&Le(Z,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),g=null}const xe=new Au;xe.setAnimationLoop(we),this.setAnimationLoop=function(Z){Le=Z},this.dispose=function(){}}}const av=new _t,th=new Ke;th.set(-1,0,0,0,1,0,0,0,1);function lv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,S,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),S=M.envMap,x=M.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(av.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(th),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function cv(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const x=S.program;n.uniformBlockBinding(M,x)}function c(M,S){let x=r[M.id];x===void 0&&(g(M),x=h(M),r[M.id]=x,M.addEventListener("dispose",m));const U=S.program;n.updateUBOMapping(M,U);const A=e.render.frame;s[M.id]!==A&&(u(M),s[M.id]=A)}function h(M){const S=d();M.__bindingPointIndex=S;const x=i.createBuffer(),U=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,U,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const S=r[M.id],x=M.uniforms,U=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,I=x.length;A<I;A++){const _=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,P=_.length;E<P;E++){const R=_[E];if(f(R,A,E,U)===!0){const C=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let D=0;for(let L=0;L<F.length;L++){const T=F[L],z=y(T);typeof T=="number"||typeof T=="boolean"?(R.__data[0]=T,i.bufferSubData(i.UNIFORM_BUFFER,C+D,R.__data)):T.isMatrix3?(R.__data[0]=T.elements[0],R.__data[1]=T.elements[1],R.__data[2]=T.elements[2],R.__data[3]=0,R.__data[4]=T.elements[3],R.__data[5]=T.elements[4],R.__data[6]=T.elements[5],R.__data[7]=0,R.__data[8]=T.elements[6],R.__data[9]=T.elements[7],R.__data[10]=T.elements[8],R.__data[11]=0):ArrayBuffer.isView(T)?R.__data.set(new T.constructor(T.buffer,T.byteOffset,R.__data.length)):(T.toArray(R.__data,D),D+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,S,x,U){const A=M.value,I=S+"_"+x;if(U[I]===void 0)return typeof A=="number"||typeof A=="boolean"?U[I]=A:ArrayBuffer.isView(A)?U[I]=A.slice():U[I]=A.clone(),!0;{const _=U[I];if(typeof A=="number"||typeof A=="boolean"){if(_!==A)return U[I]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(_.equals(A)===!1)return _.copy(A),!0}}return!1}function g(M){const S=M.uniforms;let x=0;const U=16;for(let I=0,_=S.length;I<_;I++){const E=Array.isArray(S[I])?S[I]:[S[I]];for(let P=0,R=E.length;P<R;P++){const C=E[P],F=Array.isArray(C.value)?C.value:[C.value];for(let D=0,L=F.length;D<L;D++){const T=F[D],z=y(T),X=x%U,q=X%z.boundary,G=X+q;x+=q,G!==0&&U-G<z.storage&&(x+=U-G),C.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=x,x+=z.storage}}}const A=x%U;return A>0&&(x+=U-A),M.__size=x,M.__cache={},this}function y(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}const uv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let An=null;function hv(){return An===null&&(An=new Is(uv,16,16,pi,jt),An.name="DFG_LUT",An.minFilter=ft,An.magFilter=ft,An.wrapS=ln,An.wrapT=ln,An.generateMipmaps=!1,An.needsUpdate=!0),An}class dv{constructor(e={}){const{canvas:t=nf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Yt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const y=f,m=new Set([jo,Yo,$o]),p=new Set([Yt,vn,_r,vr,Wo,Xo]),M=new Uint32Array(4),S=new Int32Array(4),x=new B;let U=null,A=null;const I=[],_=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=an,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let R=!1,C=null;this._outputColorSpace=Nt;let F=0,D=0,L=null,T=-1,z=null;const X=new St,q=new St;let G=null;const he=new tt(0);let pe=0,Le=t.width,we=t.height,xe=1,Z=null,ge=null;const oe=new St(0,0,Le,we),Ae=new St(0,0,Le,we);let Ne=!1;const Ie=new tl;let $e=!1,Be=!1;const ee=new _t,ie=new B,Y=new St,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function He(){return L===null?xe:1}let N=n;function We(b,k){return t.getContext(b,k)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wo}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Ye,!1),N===null){const k="webgl2";if(N=We(k,b),N===null)throw We(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw ot("WebGLRenderer: "+b.message),b}let De,Ge,se,rt,w,v,H,K,te,le,de,j,Q,Me,Te,_e,fe,Xe,qe,lt,O,ue,J;function be(){De=new h0(N),De.init(),O=new nv(N,De),Ge=new i0(N,De,e,O),se=new ev(N,De),Ge.reversedDepthBuffer&&u&&se.buffers.depth.setReversed(!0),rt=new p0(N),w=new k_,v=new tv(N,De,se,w,Ge,O,rt),H=new u0(P),K=new Zp(N),ue=new t0(N,K),te=new d0(N,K,rt,ue),le=new g0(N,te,K,ue,rt),Xe=new m0(N,Ge,v),Te=new r0(w),de=new z_(P,H,De,Ge,ue,Te),j=new lv(P,w),Q=new V_,Me=new Y_(De),fe=new e0(P,H,se,le,g,l),_e=new Q_(P,le,Ge),J=new cv(N,rt,Ge,se),qe=new n0(N,De,rt),lt=new f0(N,De,rt),rt.programs=de.programs,P.capabilities=Ge,P.extensions=De,P.properties=w,P.renderLists=Q,P.shadowMap=_e,P.state=se,P.info=rt}be(),y!==Yt&&(E=new v0(y,t.width,t.height,r,s));const ae=new ov(P,N);this.xr=ae,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=De.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=De.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(b){b!==void 0&&(xe=b,this.setSize(Le,we,!1))},this.getSize=function(b){return b.set(Le,we)},this.setSize=function(b,k,$=!0){if(ae.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Le=b,we=k,t.width=Math.floor(b*xe),t.height=Math.floor(k*xe),$===!0&&(t.style.width=b+"px",t.style.height=k+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(Le*xe,we*xe).floor()},this.setDrawingBufferSize=function(b,k,$){Le=b,we=k,xe=$,t.width=Math.floor(b*$),t.height=Math.floor(k*$),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(y===Yt){ot("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){ke("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(X)},this.getViewport=function(b){return b.copy(oe)},this.setViewport=function(b,k,$,V){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,k,$,V),se.viewport(X.copy(oe).multiplyScalar(xe).round())},this.getScissor=function(b){return b.copy(Ae)},this.setScissor=function(b,k,$,V){b.isVector4?Ae.set(b.x,b.y,b.z,b.w):Ae.set(b,k,$,V),se.scissor(q.copy(Ae).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(b){se.setScissorTest(Ne=b)},this.setOpaqueSort=function(b){Z=b},this.setTransparentSort=function(b){ge=b},this.getClearColor=function(b){return b.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,$=!0){let V=0;if(b){let W=!1;if(L!==null){const Ee=L.texture.format;W=m.has(Ee)}if(W){const Ee=L.texture.type,Pe=p.has(Ee),Se=fe.getClearColor(),Ue=fe.getClearAlpha(),Fe=Se.r,Ze=Se.g,nt=Se.b;Pe?(M[0]=Fe,M[1]=Ze,M[2]=nt,M[3]=Ue,N.clearBufferuiv(N.COLOR,0,M)):(S[0]=Fe,S[1]=Ze,S[2]=nt,S[3]=Ue,N.clearBufferiv(N.COLOR,0,S))}else V|=N.COLOR_BUFFER_BIT}k&&(V|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),C=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Ye,!1),fe.dispose(),Q.dispose(),Me.dispose(),w.dispose(),H.dispose(),le.dispose(),ue.dispose(),J.dispose(),de.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Zr),ae.removeEventListener("sessionend",co),Vn.stop()};function ne(b){b.preventDefault(),Tc("WebGLRenderer: Context Lost."),R=!0}function Ce(){Tc("WebGLRenderer: Context Restored."),R=!1;const b=rt.autoReset,k=_e.enabled,$=_e.autoUpdate,V=_e.needsUpdate,W=_e.type;be(),rt.autoReset=b,_e.enabled=k,_e.autoUpdate=$,_e.needsUpdate=V,_e.type=W}function Ye(b){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function xt(b){const k=b.target;k.removeEventListener("dispose",xt),ut(k)}function ut(b){mn(b),w.remove(b)}function mn(b){const k=w.get(b).programs;k!==void 0&&(k.forEach(function($){de.releaseProgram($)}),b.isShaderMaterial&&de.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,$,V,W,Ee){k===null&&(k=ve);const Pe=W.isMesh&&W.matrixWorld.determinant()<0,Se=Dt(b,k,$,V,W);se.setMaterial(V,Pe);let Ue=$.index,Fe=1;if(V.wireframe===!0){if(Ue=te.getWireframeAttribute($),Ue===void 0)return;Fe=2}const Ze=$.drawRange,nt=$.attributes.position;let Oe=Ze.start*Fe,dt=(Ze.start+Ze.count)*Fe;Ee!==null&&(Oe=Math.max(Oe,Ee.start*Fe),dt=Math.min(dt,(Ee.start+Ee.count)*Fe)),Ue!==null?(Oe=Math.max(Oe,0),dt=Math.min(dt,Ue.count)):nt!=null&&(Oe=Math.max(Oe,0),dt=Math.min(dt,nt.count));const Tt=dt-Oe;if(Tt<0||Tt===1/0)return;ue.setup(W,V,Se,$,Ue);let At,pt=qe;if(Ue!==null&&(At=K.get(Ue),pt=lt,pt.setIndex(At)),W.isMesh)V.wireframe===!0?(se.setLineWidth(V.wireframeLinewidth*He()),pt.setMode(N.LINES)):pt.setMode(N.TRIANGLES);else if(W.isLine){let Gt=V.linewidth;Gt===void 0&&(Gt=1),se.setLineWidth(Gt*He()),W.isLineSegments?pt.setMode(N.LINES):W.isLineLoop?pt.setMode(N.LINE_LOOP):pt.setMode(N.LINE_STRIP)}else W.isPoints?pt.setMode(N.POINTS):W.isSprite&&pt.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(De.get("WEBGL_multi_draw"))pt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Gt=W._multiDrawStarts,Re=W._multiDrawCounts,en=W._multiDrawCount,ct=Ue?K.get(Ue).bytesPerElement:1,sn=w.get(V).currentProgram.getUniforms();for(let Cn=0;Cn<en;Cn++)sn.setValue(N,"_gl_DrawID",Cn),pt.render(Gt[Cn]/ct,Re[Cn])}else if(W.isInstancedMesh)pt.renderInstances(Oe,Tt,W.count);else if($.isInstancedBufferGeometry){const Gt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Re=Math.min($.instanceCount,Gt);pt.renderInstances(Oe,Tt,Re)}else pt.render(Oe,Tt)};function rn(b,k,$){b.transparent===!0&&b.side===Rn&&b.forceSinglePass===!1?(b.side=Wt,b.needsUpdate=!0,ze(b,k,$),b.side=on,b.needsUpdate=!0,ze(b,k,$),b.side=Rn):ze(b,k,$)}this.compile=function(b,k,$=null){$===null&&($=b),A=Me.get($),A.init(k),_.push(A),$.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),b!==$&&b.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),A.setupLights();const V=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ee=W.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const Se=Ee[Pe];rn(Se,$,W),V.add(Se)}else rn(Ee,$,W),V.add(Ee)}),A=_.pop(),V},this.compileAsync=function(b,k,$=null){const V=this.compile(b,k,$);return new Promise(W=>{function Ee(){if(V.forEach(function(Pe){w.get(Pe).currentProgram.isReady()&&V.delete(Pe)}),V.size===0){W(b);return}setTimeout(Ee,10)}De.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Jr=null;function lo(b){Jr&&Jr(b)}function Zr(){Vn.stop()}function co(){Vn.start()}const Vn=new Au;Vn.setAnimationLoop(lo),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(b){Jr=b,ae.setAnimationLoop(b),b===null?Vn.stop():Vn.start()},ae.addEventListener("sessionstart",Zr),ae.addEventListener("sessionend",co),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;C!==null&&C.renderStart(b,k);const $=ae.enabled===!0&&ae.isPresenting===!0,V=E!==null&&(L===null||$)&&E.begin(P,L);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(k),k=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,k,L),A=Me.get(b,_.length),A.init(k),A.state.textureUnits=v.getTextureUnits(),_.push(A),ee.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ie.setFromProjectionMatrix(ee,xn,k.reversedDepth),Be=this.localClippingEnabled,$e=Te.init(this.clippingPlanes,Be),U=Q.get(b,I.length),U.init(),I.push(U),ae.enabled===!0&&ae.isPresenting===!0){const Pe=P.xr.getDepthSensingMesh();Pe!==null&&uo(Pe,k,-1/0,P.sortObjects)}uo(b,k,0,P.sortObjects),U.finish(),P.sortObjects===!0&&U.sort(Z,ge),me=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,me&&fe.addToRenderList(U,b),this.info.render.frame++,$e===!0&&Te.beginShadows();const W=A.state.shadowsArray;if(_e.render(W,b,k),$e===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&E.hasRenderPass())===!1){const Pe=U.opaque,Se=U.transmissive;if(A.setupLights(),k.isArrayCamera){const Ue=k.cameras;if(Se.length>0)for(let Fe=0,Ze=Ue.length;Fe<Ze;Fe++){const nt=Ue[Fe];fo(Pe,Se,b,nt)}me&&fe.render(b);for(let Fe=0,Ze=Ue.length;Fe<Ze;Fe++){const nt=Ue[Fe];ho(U,b,nt,nt.viewport)}}else Se.length>0&&fo(Pe,Se,b,k),me&&fe.render(b),ho(U,b,k)}L!==null&&D===0&&(v.updateMultisampleRenderTarget(L),v.updateRenderTargetMipmap(L)),V&&E.end(P),b.isScene===!0&&b.onAfterRender(P,b,k),ue.resetDefaultState(),T=-1,z=null,_.pop(),_.length>0?(A=_[_.length-1],v.setTextureUnits(A.state.textureUnits),$e===!0&&Te.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,I.pop(),I.length>0?U=I[I.length-1]:U=null,C!==null&&C.renderEnd()};function uo(b,k,$,V){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ie.intersectsSprite(b)){V&&Y.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ee);const Pe=le.update(b),Se=b.material;Se.visible&&U.push(b,Pe,Se,$,Y.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ie.intersectsObject(b))){const Pe=le.update(b),Se=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Y.copy(b.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Y.copy(Pe.boundingSphere.center)),Y.applyMatrix4(b.matrixWorld).applyMatrix4(ee)),Array.isArray(Se)){const Ue=Pe.groups;for(let Fe=0,Ze=Ue.length;Fe<Ze;Fe++){const nt=Ue[Fe],Oe=Se[nt.materialIndex];Oe&&Oe.visible&&U.push(b,Pe,Oe,$,Y.z,nt)}}else Se.visible&&U.push(b,Pe,Se,$,Y.z,null)}}const Ee=b.children;for(let Pe=0,Se=Ee.length;Pe<Se;Pe++)uo(Ee[Pe],k,$,V)}function ho(b,k,$,V){const{opaque:W,transmissive:Ee,transparent:Pe}=b;A.setupLightsView($),$e===!0&&Te.setGlobalState(P.clippingPlanes,$),V&&se.viewport(X.copy(V)),W.length>0&&Ci(W,k,$),Ee.length>0&&Ci(Ee,k,$),Pe.length>0&&Ci(Pe,k,$),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function fo(b,k,$,V){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[V.id]===void 0){const Oe=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[V.id]=new yn(1,1,{generateMipmaps:!0,type:Oe?jt:Yt,minFilter:$n,samples:Math.max(4,Ge.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const Ee=A.state.transmissionRenderTarget[V.id],Pe=V.viewport||X;Ee.setSize(Pe.z*P.transmissionResolutionScale,Pe.w*P.transmissionResolutionScale);const Se=P.getRenderTarget(),Ue=P.getActiveCubeFace(),Fe=P.getActiveMipmapLevel();P.setRenderTarget(Ee),P.getClearColor(he),pe=P.getClearAlpha(),pe<1&&P.setClearColor(16777215,.5),P.clear(),me&&fe.render($);const Ze=P.toneMapping;P.toneMapping=an;const nt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),A.setupLightsView(V),$e===!0&&Te.setGlobalState(P.clippingPlanes,V),Ci(b,$,V),v.updateMultisampleRenderTarget(Ee),v.updateRenderTargetMipmap(Ee),De.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let dt=0,Tt=k.length;dt<Tt;dt++){const At=k[dt],{object:pt,geometry:Gt,material:Re,group:en}=At;if(Re.side===Rn&&pt.layers.test(V.layers)){const ct=Re.side;Re.side=Wt,Re.needsUpdate=!0,re(pt,$,V,Gt,Re,en),Re.side=ct,Re.needsUpdate=!0,Oe=!0}}Oe===!0&&(v.updateMultisampleRenderTarget(Ee),v.updateRenderTargetMipmap(Ee))}P.setRenderTarget(Se,Ue,Fe),P.setClearColor(he,pe),nt!==void 0&&(V.viewport=nt),P.toneMapping=Ze}function Ci(b,k,$){const V=k.isScene===!0?k.overrideMaterial:null;for(let W=0,Ee=b.length;W<Ee;W++){const Pe=b[W],{object:Se,geometry:Ue,group:Fe}=Pe;let Ze=Pe.material;Ze.allowOverride===!0&&V!==null&&(Ze=V),Se.layers.test($.layers)&&re(Se,k,$,Ue,Ze,Fe)}}function re(b,k,$,V,W,Ee){b.onBeforeRender(P,k,$,V,W,Ee),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(P,k,$,V,b,Ee),W.transparent===!0&&W.side===Rn&&W.forceSinglePass===!1?(W.side=Wt,W.needsUpdate=!0,P.renderBufferDirect($,k,V,W,b,Ee),W.side=on,W.needsUpdate=!0,P.renderBufferDirect($,k,V,W,b,Ee),W.side=Rn):P.renderBufferDirect($,k,V,W,b,Ee),b.onAfterRender(P,k,$,V,W,Ee)}function ze(b,k,$){k.isScene!==!0&&(k=ve);const V=w.get(b),W=A.state.lights,Ee=A.state.shadowsArray,Pe=W.state.version,Se=de.getParameters(b,W.state,Ee,k,$,A.state.lightProbeGridArray),Ue=de.getProgramCacheKey(Se);let Fe=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,V.fog=k.fog;const Ze=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=H.get(b.envMap||V.environment,Ze),V.envMapRotation=V.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",xt),Fe=new Map,V.programs=Fe);let nt=Fe.get(Ue);if(nt!==void 0){if(V.currentProgram===nt&&V.lightsStateVersion===Pe)return je(b,Se),nt}else Se.uniforms=de.getUniforms(b),C!==null&&b.isNodeMaterial&&C.build(b,$,Se),b.onBeforeCompile(Se,P),nt=de.acquireProgram(Se,Ue),Fe.set(Ue,nt),V.uniforms=Se.uniforms;const Oe=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=Te.uniform),je(b,Se),V.needsLights=wt(b),V.lightsStateVersion=Pe,V.needsLights&&(Oe.ambientLightColor.value=W.state.ambient,Oe.lightProbe.value=W.state.probe,Oe.directionalLights.value=W.state.directional,Oe.directionalLightShadows.value=W.state.directionalShadow,Oe.spotLights.value=W.state.spot,Oe.spotLightShadows.value=W.state.spotShadow,Oe.rectAreaLights.value=W.state.rectArea,Oe.ltc_1.value=W.state.rectAreaLTC1,Oe.ltc_2.value=W.state.rectAreaLTC2,Oe.pointLights.value=W.state.point,Oe.pointLightShadows.value=W.state.pointShadow,Oe.hemisphereLights.value=W.state.hemi,Oe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Oe.spotLightMatrix.value=W.state.spotLightMatrix,Oe.spotLightMap.value=W.state.spotLightMap,Oe.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=A.state.lightProbeGridArray.length>0,V.currentProgram=nt,V.uniformsList=null,nt}function Ve(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=Ws.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function je(b,k){const $=w.get(b);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function st(b,k){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;x.setFromMatrixPosition(k.matrixWorld);for(let $=0,V=b.length;$<V;$++){const W=b[$];if(W.texture!==null&&W.boundingBox.containsPoint(x))return W}return null}function Dt(b,k,$,V,W){k.isScene!==!0&&(k=ve),v.resetTextureUnits();const Ee=k.fog,Pe=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?k.environment:null,Se=L===null?P.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:at.workingColorSpace,Ue=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Fe=H.get(V.envMap||Pe,Ue),Ze=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,nt=!!$.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Oe=!!$.morphAttributes.position,dt=!!$.morphAttributes.normal,Tt=!!$.morphAttributes.color;let At=an;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(At=P.toneMapping);const pt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Gt=pt!==void 0?pt.length:0,Re=w.get(V),en=A.state.lights;if($e===!0&&(Be===!0||b!==z)){const gt=b===z&&V.id===T;Te.setState(V,b,gt)}let ct=!1;V.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==en.state.version||Re.outputColorSpace!==Se||W.isBatchedMesh&&Re.batching===!1||!W.isBatchedMesh&&Re.batching===!0||W.isBatchedMesh&&Re.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Re.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Re.instancing===!1||!W.isInstancedMesh&&Re.instancing===!0||W.isSkinnedMesh&&Re.skinning===!1||!W.isSkinnedMesh&&Re.skinning===!0||W.isInstancedMesh&&Re.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Re.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Re.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Re.instancingMorph===!1&&W.morphTexture!==null||Re.envMap!==Fe||V.fog===!0&&Re.fog!==Ee||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Te.numPlanes||Re.numIntersection!==Te.numIntersection)||Re.vertexAlphas!==Ze||Re.vertexTangents!==nt||Re.morphTargets!==Oe||Re.morphNormals!==dt||Re.morphColors!==Tt||Re.toneMapping!==At||Re.morphTargetsCount!==Gt||!!Re.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Re.__version=V.version);let sn=Re.currentProgram;ct===!0&&(sn=ze(V,k,W),C&&V.isNodeMaterial&&C.onUpdateProgram(V,sn,Re));let Cn=!1,oi=!1,hr=!1;const mt=sn.getUniforms(),Ct=Re.uniforms;if(se.useProgram(sn.program)&&(Cn=!0,oi=!0,hr=!0),V.id!==T&&(T=V.id,oi=!0),Re.needsLights){const gt=st(A.state.lightProbeGridArray,W);Re.lightProbeGrid!==gt&&(Re.lightProbeGrid=gt,oi=!0)}if(Cn||z!==b){se.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),mt.setValue(N,"projectionMatrix",b.projectionMatrix),mt.setValue(N,"viewMatrix",b.matrixWorldInverse);const li=mt.map.cameraPosition;li!==void 0&&li.setValue(N,ie.setFromMatrixPosition(b.matrixWorld)),Ge.logarithmicDepthBuffer&&mt.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&mt.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),z!==b&&(z=b,oi=!0,hr=!0)}if(Re.needsLights&&(en.state.directionalShadowMap.length>0&&mt.setValue(N,"directionalShadowMap",en.state.directionalShadowMap,v),en.state.spotShadowMap.length>0&&mt.setValue(N,"spotShadowMap",en.state.spotShadowMap,v),en.state.pointShadowMap.length>0&&mt.setValue(N,"pointShadowMap",en.state.pointShadowMap,v)),W.isSkinnedMesh){mt.setOptional(N,W,"bindMatrix"),mt.setOptional(N,W,"bindMatrixInverse");const gt=W.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),mt.setValue(N,"boneTexture",gt.boneTexture,v))}W.isBatchedMesh&&(mt.setOptional(N,W,"batchingTexture"),mt.setValue(N,"batchingTexture",W._matricesTexture,v),mt.setOptional(N,W,"batchingIdTexture"),mt.setValue(N,"batchingIdTexture",W._indirectTexture,v),mt.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&mt.setValue(N,"batchingColorTexture",W._colorsTexture,v));const ai=$.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Xe.update(W,$,sn),(oi||Re.receiveShadow!==W.receiveShadow)&&(Re.receiveShadow=W.receiveShadow,mt.setValue(N,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&k.environment!==null&&(Ct.envMapIntensity.value=k.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=hv()),oi){if(mt.setValue(N,"toneMappingExposure",P.toneMappingExposure),Re.needsLights&&Je(Ct,hr),Ee&&V.fog===!0&&j.refreshFogUniforms(Ct,Ee),j.refreshMaterialUniforms(Ct,V,xe,we,A.state.transmissionRenderTarget[b.id]),Re.needsLights&&Re.lightProbeGrid){const gt=Re.lightProbeGrid;Ct.probesSH.value=gt.texture,Ct.probesMin.value.copy(gt.boundingBox.min),Ct.probesMax.value.copy(gt.boundingBox.max),Ct.probesResolution.value.copy(gt.resolution)}Ws.upload(N,Ve(Re),Ct,v)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ws.upload(N,Ve(Re),Ct,v),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&mt.setValue(N,"center",W.center),mt.setValue(N,"modelViewMatrix",W.modelViewMatrix),mt.setValue(N,"normalMatrix",W.normalMatrix),mt.setValue(N,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const gt=V.uniformsGroups;for(let li=0,dr=gt.length;li<dr;li++){const kh=gt[li];J.update(kh,sn),J.bind(kh,sn)}}return sn}function Je(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function wt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,k,$){const V=w.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),w.get(b.texture).__webglTexture=k,w.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:$,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const $=w.get(b);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0};const Qt=N.createFramebuffer();this.setRenderTarget=function(b,k=0,$=0){L=b,F=k,D=$;let V=null,W=!1,Ee=!1;if(b){const Se=w.get(b);if(Se.__useDefaultFramebuffer!==void 0){se.bindFramebuffer(N.FRAMEBUFFER,Se.__webglFramebuffer),X.copy(b.viewport),q.copy(b.scissor),G=b.scissorTest,se.viewport(X),se.scissor(q),se.setScissorTest(G),T=-1;return}else if(Se.__webglFramebuffer===void 0)v.setupRenderTarget(b);else if(Se.__hasExternalTextures)v.rebindTextures(b,w.get(b.texture).__webglTexture,w.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ze=b.depthTexture;if(Se.__boundDepthTexture!==Ze){if(Ze!==null&&w.has(Ze)&&(b.width!==Ze.image.width||b.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(b)}}const Ue=b.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Ee=!0);const Fe=w.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[k])?V=Fe[k][$]:V=Fe[k],W=!0):b.samples>0&&v.useMultisampledRTT(b)===!1?V=w.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?V=Fe[$]:V=Fe,X.copy(b.viewport),q.copy(b.scissor),G=b.scissorTest}else X.copy(oe).multiplyScalar(xe).floor(),q.copy(Ae).multiplyScalar(xe).floor(),G=Ne;if($!==0&&(V=Qt),se.bindFramebuffer(N.FRAMEBUFFER,V)&&se.drawBuffers(b,V),se.viewport(X),se.scissor(q),se.setScissorTest(G),W){const Se=w.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se.__webglTexture,$)}else if(Ee){const Se=k;for(let Ue=0;Ue<b.textures.length;Ue++){const Fe=w.get(b.textures[Ue]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ue,Fe.__webglTexture,$,Se)}}else if(b!==null&&$!==0){const Se=w.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Se.__webglTexture,$)}T=-1},this.readRenderTargetPixels=function(b,k,$,V,W,Ee,Pe,Se=0){if(!(b&&b.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=w.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){se.bindFramebuffer(N.FRAMEBUFFER,Ue);try{const Fe=b.textures[Se],Ze=Fe.format,nt=Fe.type;if(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se),!Ge.textureFormatReadable(Ze)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(nt)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-V&&$>=0&&$<=b.height-W&&N.readPixels(k,$,V,W,O.convert(Ze),O.convert(nt),Ee)}finally{const Fe=L!==null?w.get(L).__webglFramebuffer:null;se.bindFramebuffer(N.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(b,k,$,V,W,Ee,Pe,Se=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=w.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue)if(k>=0&&k<=b.width-V&&$>=0&&$<=b.height-W){se.bindFramebuffer(N.FRAMEBUFFER,Ue);const Fe=b.textures[Se],Ze=Fe.format,nt=Fe.type;if(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se),!Ge.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Oe),N.bufferData(N.PIXEL_PACK_BUFFER,Ee.byteLength,N.STREAM_READ),N.readPixels(k,$,V,W,O.convert(Ze),O.convert(nt),0);const dt=L!==null?w.get(L).__webglFramebuffer:null;se.bindFramebuffer(N.FRAMEBUFFER,dt);const Tt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await rf(N,Tt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Oe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ee),N.deleteBuffer(Oe),N.deleteSync(Tt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,$=0){const V=Math.pow(2,-$),W=Math.floor(b.image.width*V),Ee=Math.floor(b.image.height*V),Pe=k!==null?k.x:0,Se=k!==null?k.y:0;v.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,Pe,Se,W,Ee),se.unbindTexture()};const Gn=N.createFramebuffer(),po=N.createFramebuffer();this.copyTextureToTexture=function(b,k,$=null,V=null,W=0,Ee=0){let Pe,Se,Ue,Fe,Ze,nt,Oe,dt,Tt;const At=b.isCompressedTexture?b.mipmaps[Ee]:b.image;if($!==null)Pe=$.max.x-$.min.x,Se=$.max.y-$.min.y,Ue=$.isBox3?$.max.z-$.min.z:1,Fe=$.min.x,Ze=$.min.y,nt=$.isBox3?$.min.z:0;else{const Ct=Math.pow(2,-W);Pe=Math.floor(At.width*Ct),Se=Math.floor(At.height*Ct),b.isDataArrayTexture?Ue=At.depth:b.isData3DTexture?Ue=Math.floor(At.depth*Ct):Ue=1,Fe=0,Ze=0,nt=0}V!==null?(Oe=V.x,dt=V.y,Tt=V.z):(Oe=0,dt=0,Tt=0);const pt=O.convert(k.format),Gt=O.convert(k.type);let Re;k.isData3DTexture?(v.setTexture3D(k,0),Re=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(v.setTexture2DArray(k,0),Re=N.TEXTURE_2D_ARRAY):(v.setTexture2D(k,0),Re=N.TEXTURE_2D),se.activeTexture(N.TEXTURE0),se.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),se.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),se.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const en=se.getParameter(N.UNPACK_ROW_LENGTH),ct=se.getParameter(N.UNPACK_IMAGE_HEIGHT),sn=se.getParameter(N.UNPACK_SKIP_PIXELS),Cn=se.getParameter(N.UNPACK_SKIP_ROWS),oi=se.getParameter(N.UNPACK_SKIP_IMAGES);se.pixelStorei(N.UNPACK_ROW_LENGTH,At.width),se.pixelStorei(N.UNPACK_IMAGE_HEIGHT,At.height),se.pixelStorei(N.UNPACK_SKIP_PIXELS,Fe),se.pixelStorei(N.UNPACK_SKIP_ROWS,Ze),se.pixelStorei(N.UNPACK_SKIP_IMAGES,nt);const hr=b.isDataArrayTexture||b.isData3DTexture,mt=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const Ct=w.get(b),ai=w.get(k),gt=w.get(Ct.__renderTarget),li=w.get(ai.__renderTarget);se.bindFramebuffer(N.READ_FRAMEBUFFER,gt.__webglFramebuffer),se.bindFramebuffer(N.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let dr=0;dr<Ue;dr++)hr&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,w.get(b).__webglTexture,W,nt+dr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,w.get(k).__webglTexture,Ee,Tt+dr)),N.blitFramebuffer(Fe,Ze,Pe,Se,Oe,dt,Pe,Se,N.DEPTH_BUFFER_BIT,N.NEAREST);se.bindFramebuffer(N.READ_FRAMEBUFFER,null),se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||w.has(b)){const Ct=w.get(b),ai=w.get(k);se.bindFramebuffer(N.READ_FRAMEBUFFER,Gn),se.bindFramebuffer(N.DRAW_FRAMEBUFFER,po);for(let gt=0;gt<Ue;gt++)hr?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.__webglTexture,W,nt+gt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ct.__webglTexture,W),mt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ai.__webglTexture,Ee,Tt+gt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ai.__webglTexture,Ee),W!==0?N.blitFramebuffer(Fe,Ze,Pe,Se,Oe,dt,Pe,Se,N.COLOR_BUFFER_BIT,N.NEAREST):mt?N.copyTexSubImage3D(Re,Ee,Oe,dt,Tt+gt,Fe,Ze,Pe,Se):N.copyTexSubImage2D(Re,Ee,Oe,dt,Fe,Ze,Pe,Se);se.bindFramebuffer(N.READ_FRAMEBUFFER,null),se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else mt?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(Re,Ee,Oe,dt,Tt,Pe,Se,Ue,pt,Gt,At.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(Re,Ee,Oe,dt,Tt,Pe,Se,Ue,pt,At.data):N.texSubImage3D(Re,Ee,Oe,dt,Tt,Pe,Se,Ue,pt,Gt,At):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ee,Oe,dt,Pe,Se,pt,Gt,At.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ee,Oe,dt,At.width,At.height,pt,At.data):N.texSubImage2D(N.TEXTURE_2D,Ee,Oe,dt,Pe,Se,pt,Gt,At);se.pixelStorei(N.UNPACK_ROW_LENGTH,en),se.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct),se.pixelStorei(N.UNPACK_SKIP_PIXELS,sn),se.pixelStorei(N.UNPACK_SKIP_ROWS,Cn),se.pixelStorei(N.UNPACK_SKIP_IMAGES,oi),Ee===0&&k.generateMipmaps&&N.generateMipmap(Re),se.unbindTexture()},this.initRenderTarget=function(b){w.get(b).__webglFramebuffer===void 0&&v.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?v.setTextureCube(b,0):b.isData3DTexture?v.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?v.setTexture2DArray(b,0):v.setTexture2D(b,0),se.unbindTexture()},this.resetState=function(){F=0,D=0,L=null,se.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}class fv extends Ba{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Zi;e.deleteAttribute("uv");const t=new gl({side:Wt}),n=new gl,r=new qp(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new vt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Qa(e,n,6),a=new Ot;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new vt(e,or(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new vt(e,or(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new vt(e,or(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const d=new vt(e,or(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const u=new vt(e,or(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const f=new vt(e,or(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function or(i){return new Ip({color:0,emissive:16777215,emissiveIntensity:i})}class pv extends Hp{constructor(e){super(e),this.type=jt}parse(e){const o=function(_,E){switch(_){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(E||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(E||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(E||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(E||""))}},d=function(_,E,P){E=E||1024;let C=_.pos,F=-1,D=0,L="",T=String.fromCharCode.apply(null,new Uint16Array(_.subarray(C,C+128)));for(;0>(F=T.indexOf(`
`))&&D<E&&C<_.byteLength;)L+=T,D+=T.length,C+=128,T=String.fromCharCode.apply(null,new Uint16Array(_.subarray(C,C+128)));return-1<F?(_.pos+=D+F+1,L+T.slice(0,F)):!1},u=function(_){const E=/^#\?(\S+)/,P=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,D={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let L,T;for((_.pos>=_.byteLength||!(L=d(_)))&&o(1,"no header found"),(T=L.match(E))||o(3,"bad initial token"),D.valid|=1,D.programtype=T[1],D.string+=L+`
`;L=d(_),L!==!1;){if(D.string+=L+`
`,L.charAt(0)==="#"){D.comments+=L+`
`;continue}if((T=L.match(P))&&(D.gamma=parseFloat(T[1])),(T=L.match(R))&&(D.exposure=parseFloat(T[1])),(T=L.match(C))&&(D.valid|=2,D.format=T[1]),(T=L.match(F))&&(D.valid|=4,D.height=parseInt(T[1],10),D.width=parseInt(T[2],10)),D.valid&2&&D.valid&4)break}return D.valid&2||o(3,"missing format specifier"),D.valid&4||o(3,"missing image size specifier"),D},f=function(_,E,P){const R=E;if(R<8||R>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);R!==(_[2]<<8|_[3])&&o(3,"wrong scanline width");const C=new Uint8Array(4*E*P);C.length||o(4,"unable to allocate buffer space");let F=0,D=0;const L=4*R,T=new Uint8Array(4),z=new Uint8Array(L);let X=P;for(;X>0&&D<_.byteLength;){D+4>_.byteLength&&o(1),T[0]=_[D++],T[1]=_[D++],T[2]=_[D++],T[3]=_[D++],(T[0]!=2||T[1]!=2||(T[2]<<8|T[3])!=R)&&o(3,"bad rgbe scanline format");let q=0,G;for(;q<L&&D<_.byteLength;){G=_[D++];const pe=G>128;if(pe&&(G-=128),(G===0||q+G>L)&&o(3,"bad scanline data"),pe){const Le=_[D++];for(let we=0;we<G;we++)z[q++]=Le}else z.set(_.subarray(D,D+G),q),q+=G,D+=G}const he=R;for(let pe=0;pe<he;pe++){let Le=0;C[F]=z[pe+Le],Le+=R,C[F+1]=z[pe+Le],Le+=R,C[F+2]=z[pe+Le],Le+=R,C[F+3]=z[pe+Le],F+=4}X--}return C},g=function(_,E,P,R){const C=_[E+3],F=Math.pow(2,C-128)/255;P[R+0]=_[E+0]*F,P[R+1]=_[E+1]*F,P[R+2]=_[E+2]*F,P[R+3]=1},y=function(_,E,P,R){const C=_[E+3],F=Math.pow(2,C-128)/255;P[R+0]=Ms.toHalfFloat(Math.min(_[E+0]*F,65504)),P[R+1]=Ms.toHalfFloat(Math.min(_[E+1]*F,65504)),P[R+2]=Ms.toHalfFloat(Math.min(_[E+2]*F,65504)),P[R+3]=Ms.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=u(m),M=p.width,S=p.height,x=f(m.subarray(m.pos),M,S);let U,A,I;switch(this.type){case $t:I=x.length/4;const _=new Float32Array(I*4);for(let P=0;P<I;P++)g(x,P*4,_,P*4);U=_,A=$t;break;case jt:I=x.length/4;const E=new Uint16Array(I*4);for(let P=0;P<I;P++)y(x,P*4,E,P*4);U=E,A=jt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:M,height:S,data:U,header:p.string,gamma:p.gamma,exposure:p.exposure,type:A}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){switch(o.type){case $t:case jt:o.colorSpace=xr,o.minFilter=ft,o.magFilter=ft,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,r)}}const ri=4.1,Ei=.63,Xr=.055,qs=.012,Tl=.7,mv=.8,gv=.69,_v=.97,wi=64,Ai=(617.41-593.91)/618.93*ri,vv={outer:[[[98,558.41],[46.75,558.41],[42.51,617.41],[22.01,617.41]],[[22.01,617.41],[19.06,617.41],[16.11,617.41],[13.16,617.41]],[[13.16,617.41],[5.94,617.41],[2,610.46],[2,593.91]]],inner:[[[98,533.89],[36.02,533.89],[31.48,607.41],[21.45,607.41]],[[21.45,607.41],[12.31,607.41],[12.48,602.39],[12.48,593.91]]]},xv={axisX:199,bottomY:1235,bodyX:10,points:[[49,1235],[27,1213],[10,1188],[10,1180],[10,1050],[10,850],[12,750],[27,650],[61,550],[104,450],[127,350],[135,250],[139,150],[139,80],[135,70],[130,58],[134,45],[140,35],[142,23],[137,12],[140,0]]};function yv({axisX:i,bottomY:e,bodyX:t,points:n}){const r=n.map(([o,a])=>new ce((i-o)/(i-t)*Ei,(e-a)/e*ri)),s=new ul(r).getPoints(100);return s.forEach(o=>{o.x=Math.max(0,o.x),o.y=Math.max(0,o.y)}),s}function Cl(i,e,t=0){const r=e/((98-(i==="outer"?2:12.48))/96*Ei),s=([o,a])=>new ce((98-o)/96*Ei*r,(617.41-a)/618.93*ri-t);return vv[i].flatMap((o,a)=>{const c=new cl(...o.map(s)).getPoints(40);return a?c.slice(1):c})}function nh(i,e){return[new ce(e,Ai),new ce(e,Ai+.025),...i.filter(t=>t.y>Ai+.03)]}function ih(i,e){for(let t=1;t<i.length;t++)if(i[t].y>=e){const n=i[t-1],r=(e-n.y)/(i[t].y-n.y);return it.lerp(n.x,i[t].x,r)}return i.at(-1).x}function Rl(i,e){return i.map((t,n)=>{if(t.y<1.4)return new ce(Math.max(0,t.x-e),t.y);const r=i[Math.max(0,n-1)],o=i[Math.min(i.length-1,n+1)].clone().sub(r).normalize();return new ce(Math.max(0,t.x-o.y*e),t.y+o.x*e)})}function Mv(i,e){const t=Rl(i,Xr-qs),r=[...Cl("inner",ih(t,Ai),qs)];for(let s=1;s<t.length;s++)if(!(t[s].y<=Ai)){if(t[s].y>=e){const o=t[s-1],a=t[s],l=(e-o.y)/(a.y-o.y);r.push(o.clone().lerp(a,l));break}r.push(t[s])}return r.push(new ce(0,e)),r}function Sv(i){if(!i)return new B(0,1,0);i.updateWorldMatrix(!0,!0);const e=[];if(i.traverse(s=>{if(!s.isMesh)return;const o=s.geometry.getAttribute("position"),a=Math.max(1,Math.floor(o.count/3e3));for(let l=0;l<o.count;l+=a)e.push(new B().fromBufferAttribute(o,l).applyMatrix4(s.matrixWorld))}),!e.length)return new B(0,1,0);const t=e.reduce((s,o)=>s.add(o),new B).divideScalar(e.length),n=[0,0,0,0,0,0];e.forEach(s=>{const o=s.x-t.x,a=s.y-t.y,l=s.z-t.z;n[0]+=o*o,n[1]+=o*a,n[2]+=o*l,n[3]+=a*a,n[4]+=a*l,n[5]+=l*l});const r=new B(0,1,0);for(let s=0;s<16;s++)r.set(n[0]*r.x+n[1]*r.y+n[2]*r.z,n[1]*r.x+n[3]*r.y+n[4]*r.z,n[2]*r.x+n[4]*r.y+n[5]*r.z).normalize();return r.y<0&&r.negate(),r}function bv(i,e,t,n){const r=2*(n-Xr+qs);let s,o=1,a=r,l=Tl;if(!i)s=new vt(new il(.5,.5,1,48),new zr({color:12952695,roughness:1})),s.name="Cork",l=1,s.scale.set(a,Tl,a);else{i.updateWorldMatrix(!0,!1);const d=i.clone(!0);d.matrix.copy(i.matrixWorld),d.matrix.decompose(d.position,d.quaternion,d.scale),s=new Kn,s.name="Cork",s.add(d);const u=new Mn().setFromObject(s);d.position.sub(u.getCenter(new B)),s.quaternion.setFromUnitVectors(Sv(e),new B(0,1,0));const f=new Mn().setFromObject(s).getSize(new B);l=f.y,a=r/Math.max(f.x,f.z),o=a,s.scale.set(a,o,a)}const c=d=>{const u=it.clamp(d,.8,1.8);s.scale.x=a*u,s.scale.z=a*u},h=d=>{const u=it.clamp(d,.2,.8);s.scale.y=o*u/l,s.position.y=t-u/2};return c(mv),h(Tl),{mesh:s,setLength:h,setThickness:c}}function Ev(){const n=Ei+.01,r=[],s=[],o=[];for(let c=0;c<=32;c++){const h=c/32,d=it.lerp(.23,1.27,h);for(let u=0;u<=wi;u++){const f=u/wi,g=f*Math.PI*2;if(r.push(Math.sin(g)*n,d,Math.cos(g)*n),s.push(f,h),c<32&&u<wi){const y=c*(wi+1)+u,m=y+wi+1;o.push(y,y+1,m,y+1,m+1,m)}}}const a=new kt;a.setAttribute("position",new yt(r,3)),a.setAttribute("uv",new yt(s,2)),a.setIndex(o),a.computeVertexNormals();const l=new vt(a,new ws({color:16777215,side:on,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,toneMapped:!1}));return l.name="Bottle wrap",l.renderOrder=1e3,l}function wv(i,e){const t=new Kn;t.name="Base details";const n=new ou;n.moveTo(-.013,0),n.quadraticCurveTo(0,.012,.013,0),n.quadraticCurveTo(0,.005,-.013,0);const r=new pl(n,{depth:.01,bevelEnabled:!1,curveSegments:8});r.rotateX(Math.PI/2);const s=new Qa(r,e,64),o=.012,a=.65,l=new Qa(new ml(o,10,8),e,18),c=new Ot,h=.525;for(let d=0;d<s.count;d++){const u=d/s.count*Math.PI*2;c.position.set(Math.sin(u)*(h-.006),.006,Math.cos(u)*(h-.006)),c.rotation.set(0,u,0),c.scale.set(1.4,1,1.4),c.updateMatrix(),s.setMatrixAt(d,c.matrix)}for(let d=0;d<6;d++)for(let u=0;u<3;u++){const f=d*3+u,g=d/6*Math.PI*2+(u-1)*.06,y=(618.93-590.43)/618.93*ri,m=ih(i,y)-o*a*.55;c.position.set(Math.sin(g)*m,y,Math.cos(g)*m),c.rotation.set(0,g,0),c.scale.set(1,1,a),c.updateMatrix(),l.setMatrixAt(f,c.matrix)}return t.add(s,l),t}function Av({sourceCork:i,sourceBottle:e,profile:t=xv}={}){const n=new Kn;n.name="Generated bottle";const r=yv(t),s=[...Cl("outer",Ei),...nh(r,Ei).slice(1)],o=Rl(r,Xr),a=Ei-Xr,l=[...Cl("inner",a),...nh(o,a).slice(1)],c=new vt(new Bs([...s,...l.reverse()],wi),new zr);c.name="AM Bottle",n.add(c);const h=new vt(new Bs(Mv(r,_v*ri),wi),new zr);h.name="AM Bottle Liquid",n.add(h);const d=new vt(new kt,h.material);d.name="Generated liquid surface",n.add(d);const u=new ti(new B(0,-1,0),-1e3);let f=gv,g=null,y=NaN;const m=Rl(r,Xr-qs),p=I=>{f=it.clamp(I,.1,.9)};function M(){n.updateWorldMatrix(!0,!0);const I=n.localToWorld(new B(0,f*ri,0));u.constant=I.y,h.updateWorldMatrix(!0,!1);const _=h.matrixWorld.elements;if(g&&Math.abs(y-I.y)<1e-5&&_.every((T,z)=>Math.abs(T-g[z])<1e-5))return;const E=u.clone().applyMatrix4(h.matrixWorld.clone().invert()),P=[],R=[],C=64;for(let T=0;T<C;T++){const z=T/C*Math.PI*2,X=Math.cos(z),q=Math.sin(z);let G=null,he=1/0;for(let Le=1;Le<m.length;Le++){const we=m[Le-1],xe=m[Le];if(we.y<Ai||xe.y<Ai)continue;const Z=E.normal.x*we.x*X+E.normal.y*we.y+E.normal.z*we.x*q+E.constant,ge=E.normal.x*xe.x*X+E.normal.y*xe.y+E.normal.z*xe.x*q+E.constant;if(Z*ge>0||Math.abs(Z-ge)<1e-8)continue;const oe=Z/(Z-ge),Ae=we.clone().lerp(xe,oe),Ne=Math.abs(Ae.y-f*ri);Ne<he&&(he=Ne,G=new B(Ae.x*X,Ae.y,Ae.x*q))}if(!G)continue;const pe=h.localToWorld(G.clone());P.push(new ce(pe.x,pe.z)),R.push(G)}const F=Si.triangulateShape(P,[]),D=[];F.forEach(T=>T.forEach(z=>{const X=R[z];D.push(X.x,X.y,X.z)}));for(let T=0;T<D.length;T+=9)[D[T+3],D[T+6]]=[D[T+6],D[T+3]],[D[T+4],D[T+7]]=[D[T+7],D[T+4]],[D[T+5],D[T+8]]=[D[T+8],D[T+5]];const L=new kt;L.setAttribute("position",new yt(D,3)),L.computeVertexNormals(),d.geometry.dispose(),d.geometry=L,g=_.slice(),y=I.y}const S=bv(i,e,ri,r.at(-1).x),x=S.mesh;n.add(x);const U=Ev();n.add(U);const A=wv(r,c.material);return n.add(A),{root:n,glass:c,liquid:h,liquidCap:d,clippingPlane:u,cork:x,labelArea:U,baseDetails:A,setCorkLength:S.setLength,setCorkThickness:S.setThickness,setLiquidLevel:p,updateHorizontalLevel:M,get liquidLevel(){return f}}}const Tv=1e3,Hn="[kujira webgl]",rh="kujira-webgl-style",Cv="#b4895d",Pl=new WeakMap;function Rv({mount:i,lenis:e=null}={}){var Ci;if(!i)return console.warn(`${Hn} No [data-three-canvas] mount found.`),null;let t;try{t=new dv({canvas:i,alpha:!0,antialias:!0})}catch(re){return console.warn(`${Hn} Renderer could not be created.`,re),null}const n=Lv(i),r=new URLSearchParams(window.location.search),s=r.get("canvasTest"),o=s==="static",a=s==="gsapY",l=s==="canvasY",c=navigator.userAgent,h=!(/Safari/i.test(c)&&!/(Chrome|Chromium|CriOS|Edg|EdgiOS|OPR|FxiOS|Firefox)/i.test(c)),d=window.matchMedia("(hover: none), (pointer: coarse)").matches||/Android|iPhone|iPad|iPod/i.test(c)||navigator.maxTouchPoints>1&&/Macintosh/i.test(c),u=r.has("diag"),f=r.has("scrollTrace"),g=r.has("diag"),y=u?Number.parseFloat(r.get("renderScale")):NaN,m=u&&r.get("freezeLogoPosition")==="1";Pv();const p=new Ba,M=new Ba,S=new Zt(n.fov,1,.1,100),x=new Kn,U=new jp,A=new pv,I=new Sl(t),_={liquidLogoTexture:{value:Iv()},resolution:{value:new ce(1,1)},logoOffsetY:{value:n.logoProjectionY},logoScrollOffset:{value:0},backgroundColor:{value:Dv(i)}};S.position.set(n.cameraPosition.x,n.cameraPosition.y,n.cameraPosition.z),S.lookAt(0,0,0);const E={...n.pagePoses.home};if(x.position.set(E.x,E.y,E.z),x.rotation.set(it.degToRad(E.rx),it.degToRad(E.ry),it.degToRad(E.rz)),x.scale.setScalar(n.modelScale),o){const re=document.querySelector("#top, .hero");re&&re.insertBefore(i,re.firstChild),i.style.cssText="position:static;display:block;flex:none;width:100vw;height:100svh;max-width:100vw;margin:0 auto;transform:none",x.position.set(0,0,0),x.rotation.set(0,0,0)}p.add(x),p.add(new Gp(16777215,5592405,.7));const P=Math.min(window.devicePixelRatio||1,2);t.setPixelRatio(Number.isFinite(y)&&y>0?Math.min(P,y):P),t.outputColorSpace=Nt,t.toneMapping=Uv(n.toneMapping),t.toneMappingExposure=n.exposure,t.autoClear=!1,u&&(t.info.autoReset=!1),t.localClippingEnabled=!0;const R=new ce,C=new ce;let F=null,D=null,L=null,T=null,z=null,X=null,q=null,G=null,he=0,pe=!1,Le=!1,we=null,xe=null,Z=null,ge=null,oe=null,Ae=!1,Ne=!1,Ie=!1,$e=!1,Be=null,ee=!1,ie=0,Y=null,ve=null,me=0,He=0,N=0,We=performance.now(),De=window.innerWidth,Ge=!1,se=null,rt=0,w=window.scrollY,v=0,H=0,K=0,te=0,le=0,de=0,j=0,Q=performance.now(),Me=0;const Te=Promise.all([ho(),Vn(),co()]);function _e(){return i.clientWidth||window.innerWidth||1}function fe(){return i.clientHeight||window.innerHeight||1}function Xe(){var je,st;const re=window.innerWidth;if(Ge&&d&&Math.abs(re-De)<2)return;De=re,Ge=!0;const ze=_e(),Ve=fe();S.aspect=ze/Ve,S.updateProjectionMatrix(),t.setSize(ze,Ve),t.getDrawingBufferSize(_.resolution.value),xe==null||xe.update((st=(je=G==null?void 0:G.userData)==null?void 0:je.logoTexture)==null?void 0:st.image,_.backgroundColor.value),(Ie||$e)&&Ce(),qe(),ae("resize")}function qe(){if(!G||Ne||(pe=!0,G.userData.updating||he))return;const re=Math.max(0,1e3/n.logoCaptureFps-(performance.now()-G.userData.lastTextureUpdate));he=window.setTimeout(()=>{he=0,lt()},re)}async function lt(){if(!pe||!G||Ne)return;pe=!1;const re=G.userData.logoElement.querySelector("svg, img[data-static-hero-logo]"),ze=G.userData.logoTexture,Ve=ze.image,je=G.userData.logoContext;if(!(!re||!je)){G.userData.updating=!0,G.userData.lastTextureUpdate=performance.now();try{const st=await sh(re,G.userData.logoElement,i,Ve,je,n);Ne||(G.userData.logoImage=st,G.userData.logoRectKey=oh(G.userData.logoElement,i,n),G.userData.logoRect=ar(G.userData.logoElement,i,n),_.logoScrollOffset.value=0,(we==null?void 0:we.liquidLogoStrength.value)>0&&G.userData.liquidLogo.updateImage(st),ze.needsUpdate=!0,xe==null||xe.setVerticalOffset(0),xe==null||xe.update(Ve,_.backgroundColor.value),ae("logo texture updated"))}catch(st){console.warn(`${Hn} Logo capture failed.`,st)}finally{G.userData.updating=!1,pe&&qe()}}}function O(){if(Le=!1,m||!(G!=null&&G.userData.logoImage)||G.userData.updating)return;const{logoElement:re,logoImage:ze,logoTexture:Ve,logoContext:je}=G.userData,st=ar(re,i,n),Dt=`${st.x},${st.y},${st.width},${st.height}`;if(Dt===G.userData.logoRectKey)return;const Je=G.userData.logoRect;if(Je&&st.x===Je.x&&st.width===Je.width&&st.height===Je.height){const wt=(st.y-Je.y)/Math.max(Ve.image.height,1);_.logoScrollOffset.value=wt,xe==null||xe.setVerticalOffset(wt),G.userData.logoRectKey=Dt;return}$s(ze,re,i,Ve.image,je,n),G.userData.logoRect=st,G.userData.logoRectKey=Dt,Ve.needsUpdate=!0,(we==null?void 0:we.liquidLogoStrength.value)>0&&G.userData.liquidLogo.position(),_.logoScrollOffset.value=0,xe==null||xe.setVerticalOffset(0),xe==null||xe.update(Ve.image,_.backgroundColor.value)}function ue(){if(!Ae)return;const re=u?performance.now():0,ze=performance.now();if(H){const Je=ze-H;K=Math.max(K,Je),le+=Je,te+=1}if(H=ze,f&&ze-Q>=1e3){const Je=ze-Q;de=Math.round(te*1e3/Je),j=te?le/te:0,te=0,le=0,Q=ze}U.update(),Le&&O();const Ve=Math.min(U.getDelta(),.1);F&&(F.rotation.x+=n.intrinsicRotationSpeed.x*Ve,F.rotation.y+=n.intrinsicRotationSpeed.y*Ve),C.x=it.damp(C.x,R.x,7,Ve),C.y=it.damp(C.y,R.y,7,Ve);const je=n.cameraPosition.z;S.position.set(je*Math.sin(C.x)*Math.cos(C.y),je*Math.sin(C.y),je*Math.cos(C.x)*Math.cos(C.y)),S.lookAt(0,0,0),xe==null||xe.position(S);const st=2*Math.tan(it.degToRad(S.fov/2))*je;if($e&&!Y){const{home:Je,capsule:wt}=n.pagePoses;for(const Qt of["x","y","z","rx","ry","rz"])E[Qt]=it.lerp(Je[Qt],wt[Qt],ie)}Y||(x.position.set(E.x,E.y+(Ie||$e?ie*st*n.scrollTravelVh:0),E.z),x.rotation.set(it.degToRad(E.rx),it.degToRad(E.ry),it.degToRad(E.rz))),D!=null&&D.root.visible&&D.updateHorizontalLevel(),mn(ze);const Dt=!!(L!=null&&L.visible&&(D!=null&&D.root.visible));if(L&&(L.visible=!1),t.clear(),t.render(p,S),L&&(L.visible=Dt),L&&T&&Dt?(D.root.updateWorldMatrix(!0,!0),T.matrix.copy(L.matrixWorld),T.matrixWorldNeedsUpdate=!0,T.visible=!0,t.clearDepth(),t.render(M,S)):T&&(T.visible=!1),u){const Je=performance.now(),wt=Je-re;if(me+=1,He+=wt,N=Math.max(N,wt),Je-We>=1e3){const Qt=(Je-We)/1e3,Gn={fps:Math.round(me/Qt),averageFrameMs:Number((He/me).toFixed(2)),maxFrameMs:Number(N.toFixed(2)),drawCallsPerFrame:Number((t.info.render.calls/me).toFixed(1)),trianglesPerFrame:Math.round(t.info.render.triangles/me),geometries:t.info.memory.geometries,textures:t.info.memory.textures};oe==null||oe(Gn),g&&console.info("[webgl diagnostics]",Gn),t.info.reset(),me=0,He=0,N=0,We=Je}}z=window.requestAnimationFrame(ue)}function J(re){Ae||document.hidden||Ne||(Ae=!0,oe==null||oe({state:"Rendering"}),U.update(),console.log(`${Hn} rendering started`,{reason:re}),ue())}function be(re){Ae&&(Ae=!1,window.cancelAnimationFrame(z),z=null,oe==null||oe({state:"Idle"}),console.log(`${Hn} rendering stopped`,{reason:re}))}function ae(re="activity",ze=Tv){window.clearTimeout(X),J(re),X=window.setTimeout(()=>be("idle"),ze)}function ne(re){if(re.type==="pointermove"&&re.pointerType==="mouse"&&(R.x=(re.clientX/window.innerWidth*2-1)*n.mouseYawRange,R.y=(1-re.clientY/window.innerHeight*2)*n.mousePitchRange),re.type==="scroll"){Ce();return}ae(re.type)}function Ce(re=(e==null?void 0:e.scroll)??window.scrollY,ze=e==null?void 0:e.limit){if(w=re,v=performance.now(),!Y){const Ve=Math.max(ze??document.documentElement.scrollHeight-window.innerHeight,1),je=Be?Be.getBoundingClientRect().top+re:Ve;ie=Ie||$e?it.clamp(re/Math.max(je,1),0,1):0,rt=ie}ge==null||ge($e?ie>=.5?"capsule":"home":Ie?"capsule":"home"),Le=h,ae("scroll position")}function Ye(){if(!l||!ve)return;const re=window.scrollY,ze=ve.getBoundingClientRect().top+re,Ve=it.clamp(re/Math.max(ze,1),0,1);i.style.setProperty("transform",`translate3d(0, ${window.innerHeight*.5*Ve}px, 0)`,"important"),w=re,v=performance.now(),ae("native canvas Y scroll")}function xt(re){re&&(ie=it.clamp(re.progress,0,1),rt=ie,E.x=x.position.x,E.y=x.position.y-ie*ut(),E.z=x.position.z,E.rx=it.radToDeg(x.rotation.x),E.ry=it.radToDeg(x.rotation.y),E.rz=it.radToDeg(x.rotation.z),ge==null||ge($e?ie>=.5?"capsule":"home":Ie?"capsule":"home"),Le=h,ae("scroll scrub"))}function ut(){const re=n.cameraPosition.z;return 2*Math.tan(it.degToRad(S.fov/2))*re*n.scrollTravelVh}function mn(re){if(!se||re-Me<100)return;Me=re;const ze=t.domElement.getBoundingClientRect(),Ve=v?Math.round(re-v):"-";se.textContent=[`scrollY ${Math.round(w)} | lenis ${Math.round((e==null?void 0:e.scroll)??-1)}`,`ScrollTrigger ${rt.toFixed(3)} | input age ${Ve}ms`,`group y ${x.position.y.toFixed(3)} | rotation ${x.rotation.x.toFixed(2)}, ${x.rotation.y.toFixed(2)}, ${x.rotation.z.toFixed(2)}`,`RAF ${de}fps avg ${j.toFixed(1)}ms | max gap ${K.toFixed(1)}ms`,`canvas ${Math.round(ze.width)}x${Math.round(ze.height)} @ ${Math.round(ze.top)} | DPR ${t.getPixelRatio().toFixed(2)}`].join(`
`),K=0}function rn(){f&&(se=document.createElement("pre"),se.style.cssText="position:fixed;z-index:2147483647;left:8px;bottom:8px;margin:0;padding:8px;background:rgba(0,0,0,.82);color:#8ff;font:11px/1.4 monospace;white-space:pre;pointer-events:none",se.textContent="Waiting for first render",document.body.appendChild(se))}function Jr({capsule:re=!1,scrollTarget:ze=null}={}){var je,st,Dt;if((je=Y==null?void 0:Y.scrollTrigger)==null||je.kill(),Y==null||Y.kill(),Y=null,l||i.style.removeProperty("transform"),o){Ie=!1,$e=!1,Be=null,ie=0,rt=0,Object.assign(E,{x:0,y:0,z:0,rx:0,ry:0,rz:0}),x.position.set(0,0,0),x.rotation.set(0,0,0),ee=!0,Ce();return}if(l&&ze){Ie=!1,$e=!1,Be=null,ve=ze,ie=0,rt=0,Object.assign(E,{x:0,y:0,z:0,rx:0,ry:0,rz:0}),x.position.set(0,0,0),x.rotation.set(0,0,0),ee=!0,Ye(),Ce();return}if(ve=null,a&&window.gsap&&window.ScrollTrigger&&ze){Ie=!1,$e=!1,Be=null;const Je=n.pagePoses.home;x.position.set(Je.x,Je.y,Je.z),x.rotation.set(it.degToRad(Je.rx),it.degToRad(Je.ry),it.degToRad(Je.rz)),Y=window.gsap.timeline({onUpdate:()=>xt(Y==null?void 0:Y.scrollTrigger),scrollTrigger:{trigger:ze,start:0,end:()=>Math.max(ze.getBoundingClientRect().top+window.scrollY,1),scrub:0,invalidateOnRefresh:!0}}),Y.to(x.position,{y:()=>Je.y-ut(),ease:"none"},0),Y.to(x.rotation,{x:it.degToRad(Je.rx-90),y:it.degToRad(Je.ry+180),z:it.degToRad(Je.rz+90),ease:"none"},0),(st=Y.scrollTrigger)==null||st.refresh(),ee=!0,Ce();return}Ie=re,$e=!!ze,Be=$e?ze:null;const Ve=n.pagePoses[re?"capsule":"home"];if(q==null||q.kill(),$e){if(Object.assign(E,n.pagePoses.home),ie=0,d&&window.gsap&&window.ScrollTrigger){const{home:Je,capsule:wt}=n.pagePoses;x.position.set(Je.x,Je.y,Je.z),x.rotation.set(it.degToRad(Je.rx),it.degToRad(Je.ry),it.degToRad(Je.rz)),Y=window.gsap.timeline({onUpdate:()=>xt(Y==null?void 0:Y.scrollTrigger),scrollTrigger:{trigger:Be,start:0,end:()=>Math.max(Be.getBoundingClientRect().top+window.scrollY,1),scrub:0,invalidateOnRefresh:!0}}),Y.to(x.position,{x:wt.x,y:()=>wt.y+ut(),z:wt.z,ease:"none"},0),Y.to(x.rotation,{x:it.degToRad(wt.rx),y:it.degToRad(wt.ry),z:it.degToRad(wt.rz),ease:"none"},0),(Dt=Y.scrollTrigger)==null||Dt.refresh()}}else ee&&window.gsap?q=window.gsap.to(E,{...Ve,duration:.7,ease:"power2.inOut",onUpdate:()=>ae("page pose")}):Object.assign(E,Ve);ee=!0,Ce()}function lo({scroll:re,limit:ze}){Ce(re,ze)}function Zr(){if(document.hidden){window.clearTimeout(X),be("tab hidden");return}ae("tab visible")}async function co(){try{const re=Av();if(we=Fv(_,h),u){const je=Number.parseFloat(r.get("glassTransmission")),st=Number.parseFloat(r.get("glassDispersion"));Number.isFinite(je)&&(we.physicalGlassMaterial.transmission=it.clamp(je,0,1)),Number.isFinite(st)&&(we.physicalGlassMaterial.dispersion=it.clamp(st,0,1))}if(Ne){lh(re.root);return}try{re.labelArea.material.map=await Ov("https://cdn.jsdelivr.net/gh/kujira22/other-label-texture@main/label.png"),re.labelArea.material.needsUpdate=!0}catch(je){console.warn(`${Hn} Label texture could not be loaded.`,je)}L=re.labelArea,T=re.labelArea.clone(),T.matrixAutoUpdate=!1,T.renderOrder=0,L.visible=!1,M.add(T),D=re,Wv(re.root),re.glass.material=we.physicalGlassMaterial,re.baseDetails.children.forEach(je=>{je.material=we.physicalGlassMaterial}),re.liquid.material=we.liquidMaterial;const ze=we.liquidMaterial.clone();if(ze.onBeforeCompile=we.liquidMaterial.onBeforeCompile,ze.customProgramCacheKey=we.liquidMaterial.customProgramCacheKey.bind(we.liquidMaterial),re.liquidCap.material=ze,we.liquidMaterial.clippingPlanes=[re.clippingPlane],we.glassMeshes=[re.glass,...re.baseDetails.children],we.liquidMeshes=[re.liquid,re.liquidCap],we.labelMeshes=[re.labelArea],we.corkMeshes=[re.cork],re.root.visible=!0,x.add(re.root),F=re.root,u){re.updateHorizontalLevel();const je=[];re.root.traverse(st=>{var wt,Qt;if(!st.isMesh)return;const Dt=st.geometry,Je=(((wt=Dt.index)==null?void 0:wt.count)??((Qt=Dt.getAttribute("position"))==null?void 0:Qt.count)??0)/3;je.push({name:st.name,triangles:Math.round(Je*(st.isInstancedMesh?st.count:1))})}),window.__webglGeometryInventory=je,console.info("[webgl geometry]",je)}(je=>re.cork.material.color.set(je))(Cv),Tn(we.glassMeshes,!0),Tn(we.liquidMeshes,!0),Tn(we.labelMeshes,!0),Tn(we.corkMeshes,!0),ae("model loaded")}catch(re){console.warn(`${Hn} Generated bottle could not be created.`,re)}}async function Vn(){if(!h)return;const re=document.querySelector(n.logoSelector);if(!re)return;const ze=await zv(re);if(!(!ze||Ne))try{const Ve=await kv(ze,re,i,n),je=Hv(Ve.userData.logoImage,re,i,n,(we==null?void 0:we.liquidMaterial.roughness)??1);_.liquidLogoTexture.value=je.texture,xe=Bv(p),xe.update(Ve.image,_.backgroundColor.value),G={userData:{logoElement:re,logoTexture:Ve,logoContext:Ve.image.getContext("2d"),logoImage:Ve.userData.logoImage,logoRectKey:oh(re,i,n),logoRect:ar(re,i,n),liquidLogo:je,lastTextureUpdate:performance.now()}},re.style.opacity=n.domLogoOpacity,qe(),ae("logo texture loaded")}catch(Ve){console.warn(`${Hn} Logo texture could not be created.`,Ve)}}function uo(re,ze=1){re.forEach(Ve=>{Pl.has(Ve)||Pl.set(Ve,Ve.scale.clone());const je=Pl.get(Ve);Ve.scale.set(je.x*ze,je.y,je.z*ze)})}async function ho(){const re=i.dataset.threeHdri;if(re)try{const Ve=await A.loadAsync(re),je=I.fromEquirectangular(Ve).texture;Ve.dispose(),p.environment=je,n.showEnvironment;return}catch(Ve){console.warn(`${Hn} HDRI could not be loaded; using preset environment.`,Ve)}const ze=I.fromScene(new fv,Nv(n.environment)).texture;p.environment=ze}function fo(){var re,ze,Ve,je,st,Dt,Je,wt,Qt,Gn,po;window.removeEventListener("resize",Xe),window.removeEventListener("pointermove",ne),window.removeEventListener("scroll",Ye),e?(re=e.off)==null||re.call(e,"scroll",lo):window.removeEventListener("scroll",ne),document.removeEventListener("visibilitychange",Zr),(ze=document.querySelector(n.logoSelector))==null||ze.removeEventListener("logo-frame-change",qe),se==null||se.remove(),window.clearTimeout(X),window.clearTimeout(he),q==null||q.kill(),(Ve=Y==null?void 0:Y.scrollTrigger)==null||Ve.kill(),Y==null||Y.kill(),be("destroy"),Ne=!0,D&&lh(D.root),xe==null||xe.dispose(),(je=G==null?void 0:G.userData)!=null&&je.logoElement&&(G.userData.logoElement.style.opacity=String(n.domLogoOpacity)),(Je=(Dt=(st=G==null?void 0:G.userData)==null?void 0:st.logoTexture)==null?void 0:Dt.dispose)==null||Je.call(Dt),(Qt=(wt=G==null?void 0:G.userData)==null?void 0:wt.liquidLogo)==null||Qt.dispose(),Z==null||Z.destroy(),I.dispose(),(po=(Gn=p.environment)==null?void 0:Gn.dispose)==null||po.call(Gn),t.dispose(),t.domElement.remove()}return window.addEventListener("resize",Xe),h&&((Ci=document.querySelector(n.logoSelector))==null||Ci.addEventListener("logo-frame-change",qe)),window.addEventListener("pointermove",ne,{passive:!0}),l&&window.addEventListener("scroll",Ye,{passive:!0}),e?e.on("scroll",lo):window.addEventListener("scroll",ne,{passive:!0}),document.addEventListener("visibilitychange",Zr),Xe(),rn(),{ready:Te,setPage:Jr,syncScroll:Ce,destroy:fo}}function Pv(){if(document.getElementById(rh))return;const i=document.createElement("style");i.id=rh,i.textContent=`
    [data-three-canvas],
    [data-three-canvas] canvas {
      position: fixed;
      inset: 0;
      display: block;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      transform: none !important;
      will-change: auto;
    }
    body[data-page="capsule 02"] [data-three-canvas] {
      z-index: 4;
      pointer-events: none;
    }
    body[data-page="capsule 02"] [data-three-canvas] canvas {
      pointer-events: none;
    }
  `,document.head.appendChild(i)}function Lv(i){return{fov:45,cameraPosition:{x:0,y:0,z:5},pagePoses:{home:{x:.02,y:.78,z:0,rx:-22,ry:-22,rz:-17},capsule:{x:-1.1,y:.93,z:-.1,rx:-24,ry:60,rz:30}},mouseYawRange:.2,mousePitchRange:.1,scrollTravelVh:1.1,intrinsicRotationSpeed:{x:0,y:0},environment:i.dataset.threeEnv||"studio",exposure:Ti(i.dataset.threeExposure,1.15),domLogoOpacity:Ti(i.dataset.threeDomLogoOpacity,1),logoCaptureFps:Ti(i.dataset.threeLogoFps,15),logoTextureScale:Ti(i.dataset.threeLogoTextureScale,1),logoTextureMaxWidth:1536,logoTextureMaxHeight:864,logoDepth:Ti(i.dataset.threeLogoDepth,-1.4),logoSelector:i.dataset.threeLogoSelector||".hero_logo",modelScale:Ti(i.dataset.threeModelScale,1.5),logoProjectionY:Ti(i.dataset.threeLogoProjectionY,.37),showEnvironment:!1,toneMapping:i.dataset.threeTone||"filmic"}}function Ti(i,e){const t=Number.parseFloat(i);return Number.isFinite(t)?t:e}function Dv(i){const e=document.querySelector(".hero_logo");for(let t=(e==null?void 0:e.parentElement)||i.parentElement;t;t=t.parentElement){const n=new tt,r=getComputedStyle(t).backgroundColor;if(r&&r!=="transparent"&&!/^rgba\([^)]*,\s*0\s*\)$/.test(r))return n.set(r),n}return new tt(14479704)}function Iv(){const i=new Is(new Uint8Array([0,0,0,0]),1,1,tn);return i.needsUpdate=!0,i}function Uv(i){const e={aces:is,filmic:is,linear:Fo,neutral:Bo,none:an,reinhard:Oo};return e[i]??e.filmic}function Nv(i){return{crisp:.01,neutral:.04,soft:.08,studio:.03}[i]??.03}function Fv(i,e=!0){const t=new zr({color:1972998,metalness:0,roughness:0,transmission:1,thickness:.2,ior:1.2,dispersion:.68,opacity:1,depthWrite:!0,side:on,envMapIntensity:1}),n={value:.48};t.onBeforeCompile=o=>{o.uniforms.uEdgeLight=n,o.fragmentShader=o.fragmentShader.replace("#include <common>",`
      #include <common>
      uniform float uEdgeLight;
    `).replace("#include <transmission_fragment>",`
      #include <transmission_fragment>
      float edge = pow(1.0 - abs(normal.z), 2.0);
      totalSpecular += vec3(0.9, 0.98, 1.0) * edge * uEdgeLight;
    `)};const r=new zr({color:3812103,metalness:0,roughness:1,envMapIntensity:1,opacity:1,depthWrite:!0,side:on}),s={value:e?.63:0};return e&&(r.onBeforeCompile=o=>{o.uniforms.uLiquidLogoStrength=s,o.uniforms.uLiquidLogoTexture=i.liquidLogoTexture,o.uniforms.uLiquidResolution=i.resolution,o.uniforms.uLiquidLogoOffsetY=i.logoOffsetY,o.uniforms.uLiquidLogoScrollOffset=i.logoScrollOffset,o.uniforms.uLiquidBackground=i.backgroundColor,o.fragmentShader=o.fragmentShader.replace("#include <common>",`
      #include <common>
      uniform float uLiquidLogoStrength;
      uniform sampler2D uLiquidLogoTexture;
      uniform vec2 uLiquidResolution;
      uniform float uLiquidLogoOffsetY;
      uniform float uLiquidLogoScrollOffset;
      uniform vec3 uLiquidBackground;
    `).replace("#include <color_fragment>",`
      #include <color_fragment>
      vec2 liquidUv = gl_FragCoord.xy / uLiquidResolution;
      liquidUv.y = 1.0 - liquidUv.y + uLiquidLogoOffsetY + uLiquidLogoScrollOffset;
      if (uLiquidLogoStrength > 0.0) {
        vec4 liquidLogo = texture2D(uLiquidLogoTexture, liquidUv);
        vec3 liquidBackdrop = mix(uLiquidBackground, liquidLogo.rgb, liquidLogo.a);
        diffuseColor.rgb = mix(diffuseColor.rgb, liquidBackdrop, uLiquidLogoStrength);
      }
    `)}),{physicalGlassMaterial:t,physicalEdgeLight:n,liquidMaterial:r,liquidLogoStrength:s,glassMeshes:[],liquidMeshes:[],labelMeshes:[],corkMeshes:[]}}async function my({bottleParts:i,modelGroup:e,refractionUniforms:t,settings:n,wake:r,pagePose:s,isCapsulePage:o,isScrollPoseEnabled:a,stopPageTween:l,setLabelScale:c,setGeneratedLiquidLevel:h,generatedLiquidLevel:d,liquidCapMaterial:u,corkColor:f,setCorkColor:g,setCorkLength:y,setCorkThickness:m,refreshLiquidLogo:p}){const{GUI:M}=await Promise.resolve().then(()=>Ux),S=new M({title:"Bottle / glass"});S.domElement.style.maxHeight="calc(100vh - 24px)",S.domElement.style.overflowY="auto",S.domElement.style.zIndex="2147483647",S.domElement.style.pointerEvents="auto";const x={glass:!0,physicalRoughness:i.physicalGlassMaterial.roughness,physicalThickness:i.physicalGlassMaterial.thickness,physicalIor:i.physicalGlassMaterial.ior,physicalDispersion:i.physicalGlassMaterial.dispersion,physicalEdgeLight:i.physicalEdgeLight.value,physicalColor:`#${i.physicalGlassMaterial.color.getHexString()}`,liquid:!0,label:!0,labelScale:1,cork:!0,corkColor:f,corkLength:.7,corkThickness:.8,liquidColor:`#${i.liquidMaterial.color.getHexString()}`,liquidLogoStrength:i.liquidLogoStrength.value,liquidRoughness:i.liquidMaterial.roughness,generatedLiquidLevel:d,rotate:n.intrinsicRotationSpeed.y!==0,modelScale:e.scale.x,logoOffsetY:t.logoOffsetY.value},U=S.addFolder("Live diagnostics"),A=Object.fromEntries([["state","Render"],["fps","FPS"],["averageFrameMs","Frame avg (ms)"],["maxFrameMs","Frame max (ms)"],["drawCallsPerFrame","Draw calls / frame"],["trianglesPerFrame","Triangles / frame"]].map(([T,z])=>{const X={text:T==="state"?"Rendering":"--"},q=U.add(X,"text").name(z).disable();return[T,{value:X,controller:q}]})),I=T=>{Object.entries(T).forEach(([z,X])=>{const q=A[z];q&&(q.value.text=String(X),q.controller.updateDisplay())})};U.open();const _=S.addFolder("Colours");Ll(_.addColor(x,"corkColor").name("Cork")).onChange(T=>{g(T),r("cork colour")}),Ll(_.addColor(x,"liquidColor").name("Liquid")).onChange(T=>{i.liquidMaterial.color.set(T),u.color.set(T),r("liquid colour")}),Ll(_.addColor(x,"physicalColor").name("Glass")).onChange(T=>{i.physicalGlassMaterial.color.set(T),r("physical glass colour")}),_.open(),S.add(x,"glass").name("Glass meshes").onChange(T=>{Tn(i.glassMeshes,T),r("glass visibility")}),S.add(x,"liquid").name("Liquid mesh").onChange(T=>{Tn(i.liquidMeshes,T),r("liquid visibility")}),Tn(i.labelMeshes,x.label),Tn(i.corkMeshes,x.cork),S.add(x,"label").name("Label").onChange(T=>{Tn(i.labelMeshes,T),r("label visibility")}),S.add(x,"labelScale",.9,1.2,.005).name("Label scale").onChange(T=>{c(i.labelMeshes,T),r("label scale")}),S.add(x,"cork").name("Cork").onChange(T=>{Tn(i.corkMeshes,T),r("cork visibility")}),S.add(x,"corkLength",.2,.8,.01).name("Cork length").onChange(T=>{y(T),r("cork length")}),S.add(x,"corkThickness",.8,1.8,.01).name("Cork thickness").onChange(T=>{m(T),r("cork thickness")});const E=S.addFolder("Liquid");E.add(x,"generatedLiquidLevel",.1,.9,.01).name("Generated fill level").onChange(T=>{h(T),r("generated liquid level")}),E.add(x,"liquidLogoStrength",0,1,.01).name("Logo through liquid").onChange(T=>{T>0&&i.liquidLogoStrength.value===0&&p(),i.liquidLogoStrength.value=T,r("liquid logo strength")}),E.add(x,"liquidRoughness",0,1,.01).name("Roughness").onChange(T=>{var z,X;i.liquidMaterial.roughness=T,u.roughness=T,(X=(z=t.liquidLogoTexture.value.userData).setRoughness)==null||X.call(z,T),r("liquid roughness")}),S.add(x,"rotate").name("Auto rotate").onChange(T=>{n.intrinsicRotationSpeed.y=T?.26:0,r("auto rotate")}),S.add(x,"modelScale",.2,2.5,.01).name("Model scale").onChange(T=>{e.scale.setScalar(T),r("model scale")});const P={pose:o()?"capsule":"home"},R=S.addFolder("Bottle pose"),C=R.add(P,"pose",{Home:"home","Capsule 02":"capsule"}).name("Editing pose"),F=[],D=T=>{n.pagePoses[T]&&(P.pose=T,Object.assign(P,n.pagePoses[T]),C.updateDisplay(),F.forEach(z=>z.updateDisplay()))};C.onChange(D);for(const[T,z,X,q,G]of[["x","Position X",-2,2,.01],["y","Position Y",-2,2,.01],["z","Position Z",-2,2,.01],["rx","Rotation X",-180,180,1],["ry","Rotation Y",-180,180,1],["rz","Rotation Z",-180,180,1]]){P[T]=n.pagePoses[P.pose][T];const he=R.add(P,T,X,q,G).name(z).onChange(pe=>{const Le=P.pose;n.pagePoses[Le][T]=pe,l(),a()?r("scroll pose control"):o()===(Le==="capsule")&&(s[T]=pe,r("page pose control"))});F.push(he)}D(P.pose),R.close(),S.add(x,"logoOffsetY",-.5,.5,.005).name("Logo projection height").onChange(T=>{t.logoOffsetY.value=T,r("logo projection height")});const L=S.addFolder("Physical glass");L.add(x,"physicalEdgeLight",0,2,.01).name("Edge light").onChange(T=>{i.physicalEdgeLight.value=T,r("physical edge light")});for(const[T,z,X,q,G]of[["physicalRoughness","Roughness",0,1,"roughness"],["physicalThickness","Thickness",0,2,"thickness"],["physicalIor","IOR",1,2,"ior"],["physicalDispersion","Dispersion",0,1,"dispersion"]])L.add(x,T,X,q,.01).name(z).onChange(he=>{i.physicalGlassMaterial[G]=he,r(`physical ${G}`)});return{gui:S,selectPose:D,updateDiagnostics:I}}function Ll(i){const e=i.$input;return e.style.position="absolute",e.style.inset="0",e.style.zIndex="2",e.style.width="100%",e.style.height="100%",e.style.padding="0",e.style.opacity="1",e.style.pointerEvents="auto",e.style.cursor="pointer",i}function Tn(i,e){i.forEach(t=>{t.visible=e})}async function Ov(i){const e=await new Vp().loadAsync(i);return e.colorSpace=Nt,e.wrapS=ss,e.offset.x=.5,e.anisotropy=4,e}function Bv(i){const e=document.createElement("canvas"),t=e.getContext("2d"),n=new nl(e);n.colorSpace=Nt,n.generateMipmaps=!1,n.minFilter=ft,n.magFilter=ft;const r=new ws({map:n,toneMapped:!1}),s=new Br(1,1),o=new vt(s,r);o.visible=!0,o.renderOrder=-1,o.onBeforeRender=l=>{const c=l.getRenderTarget()!==null;r.colorWrite=c,r.depthWrite=c},i.add(o);const a=new B;return{mesh:o,update(l,c){l&&((e.width!==l.width||e.height!==l.height)&&(e.width=l.width,e.height=l.height),t.fillStyle=c.getStyle(),t.fillRect(0,0,e.width,e.height),t.drawImage(l,0,0),n.needsUpdate=!0)},setVerticalOffset(l){n.offset.y=l},position(l){l.getWorldDirection(a),o.position.copy(l.position).addScaledVector(a,8),o.quaternion.copy(l.quaternion);const h=2*Math.tan(it.degToRad(l.fov/2))*8;o.scale.set(h*l.aspect,h,1)},dispose(){i.remove(o),s.dispose(),r.dispose(),n.dispose()}}}function zv(i){const e=()=>i.querySelector("svg, img[data-static-hero-logo]"),t=e();return t?Promise.resolve(t):new Promise(n=>{const r=new MutationObserver(()=>{const s=e();s&&(r.disconnect(),n(s))});r.observe(i,{childList:!0,subtree:!0}),window.setTimeout(()=>{r.disconnect(),n(e())},5e3)})}async function kv(i,e,t,n){const r=document.createElement("canvas"),s=r.getContext("2d");Dl(r,t,n);const o=await sh(i,e,t,r,s,n),a=new nl(r);return a.userData.logoImage=o,a.colorSpace=Nt,a.generateMipmaps=!1,a.minFilter=ft,a.magFilter=ft,a.anisotropy=1,a.premultiplyAlpha=!0,a.needsUpdate=!0,a}async function sh(i,e,t,n,r,s){if(Dl(n,t,s),i instanceof HTMLImageElement)return(!i.complete||!i.naturalWidth)&&await i.decode(),$s(i,e,t,n,r,s),i;const o=i.cloneNode(!0),a=ar(e,t,s);o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("width",String(a.width)),o.setAttribute("height",String(a.height)),Vv(i,o),o.style.filter="",o.querySelectorAll('filter[id^="logo-jitter-"]').forEach(d=>d.remove()),o.querySelectorAll('[filter^="url(#logo-jitter-"]').forEach(d=>d.removeAttribute("filter"));const l=new XMLSerializer().serializeToString(o),c=new Blob([l],{type:"image/svg+xml"}),h=URL.createObjectURL(c);try{const d=await Gv(h);return $s(d,e,t,n,r,s),d}finally{URL.revokeObjectURL(h)}}function $s(i,e,t,n,r,s){const o=ar(e,t,s);r.clearRect(0,0,n.width,n.height),r.drawImage(i,o.x,o.y,o.width,o.height)}function Hv(i,e,t,n,r){const s=document.createElement("canvas"),o=s.getContext("2d"),a=document.createElement("canvas"),l=a.getContext("2d"),c=new nl(s);c.colorSpace=Nt,c.generateMipmaps=!1,c.minFilter=ft,c.magFilter=ft,c.premultiplyAlpha=!0;let h=i,d=r;function u(){Dl(s,t,n),$s(d>0?a:h,e,t,s,o,n),c.needsUpdate=!0}function f(){a.width=h.naturalWidth,a.height=h.naturalHeight,l.clearRect(0,0,a.width,a.height),l.filter=d>0?`blur(${18*d}px)`:"none",l.drawImage(h,0,0),l.filter="none",u()}function g(y){d=y,f()}return c.userData.setRoughness=g,f(),{texture:c,position:u,updateImage(y){h=y,f()},dispose(){c.dispose()}}}function oh(i,e,t){const n=ar(i,e,t);return`${n.x},${n.y},${n.width},${n.height}`}function ah(i,e){const t=i.getBoundingClientRect();return Math.min(Math.min(window.devicePixelRatio||1,2)*e.logoTextureScale,e.logoTextureMaxWidth/Math.max(t.width,1),e.logoTextureMaxHeight/Math.max(t.height,1))}function Dl(i,e,t){const n=e.getBoundingClientRect(),r=ah(e,t),s=Math.max(1,Math.round(n.width*r)),o=Math.max(1,Math.round(n.height*r));(i.width!==s||i.height!==o)&&(i.width=s,i.height=o)}function ar(i,e,t){const n=i.getBoundingClientRect(),r=e.getBoundingClientRect(),s=ah(e,t);return{x:Math.round((n.left-r.left)*s),y:Math.round((n.top-r.top)*s),width:Math.max(1,Math.round(n.width*s)),height:Math.max(1,Math.round(n.height*s))}}function Vv(i,e){const t=[i,...i.querySelectorAll("*")],n=[e,...e.querySelectorAll("*")];t.forEach((r,s)=>{const o=n[s];if(!o)return;const a=window.getComputedStyle(r),l=r.getAttribute("fill"),c=r.getAttribute("stroke");(!l||l==="currentColor")&&o.setAttribute("fill",a.fill||a.color),c==="currentColor"&&o.setAttribute("stroke",a.stroke||a.color)})}function Gv(i){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=t,n.src=i})}function Wv(i){const e=new Mn().setFromObject(i),t=e.getSize(new B),n=e.getCenter(new B),r=Math.max(t.x,t.y,t.z)||1,s=2.8;i.position.sub(n),i.scale.multiplyScalar(s/r)}function lh(i){const e=new Set,t=new Set,n=new Set;i.traverse(r=>{r.geometry&&e.add(r.geometry),(Array.isArray(r.material)?r.material:[r.material]).filter(Boolean).forEach(o=>{t.add(o),Object.values(o).forEach(a=>{a!=null&&a.isTexture&&n.add(a)})})}),n.forEach(r=>r.dispose()),t.forEach(r=>r.dispose()),e.forEach(r=>r.dispose())}const Xv=.4,ch=1,qv=.18,Ys=new WeakMap;function $v(i=document){i==null||i.querySelectorAll("[data-link-hover]").forEach(e=>{const t=[...e.querySelectorAll("a[href]")];t.length<2||Ys.has(e)||Ys.set(e,jv(e,t))})}function Yv(i=document){i==null||i.querySelectorAll("[data-link-hover]").forEach(e=>{var t;(t=Ys.get(e))==null||t.destroy(),Ys.delete(e)})}function jv(i,e){const t=new Map(e.map(a=>[a,a.style.opacity]));let n=!1;const r=a=>{if(n)return;const l=a.currentTarget;uh(e,l)},s=()=>{n||e.forEach(a=>Il(a,ch))},o=a=>{n=!0,uh(e,a.currentTarget)};return e.forEach(a=>{a.addEventListener("mouseenter",r),a.addEventListener("focus",r),a.addEventListener("click",o)}),i.addEventListener("mouseleave",s),i.addEventListener("focusout",s),{destroy(){e.forEach(a=>{a.removeEventListener("mouseenter",r),a.removeEventListener("focus",r),a.removeEventListener("click",o),Il(a,t.get(a)||"",!0)}),i.removeEventListener("mouseleave",s),i.removeEventListener("focusout",s)}}}function uh(i,e){i.forEach(t=>{Il(t,t===e?ch:Xv)})}function Il(i,e,t=!1){const n=window.gsap;if(n&&!t){n.to(i,{opacity:e,duration:qv,ease:"power2.out",overwrite:!0});return}i.style.opacity=e}const hh={amount:5,frequency:.03,fps:12,octaves:1,speed:1,color:"",selector:".hero_logo"},js=new WeakMap;let Kv=0;function Jv(i=document,e={}){var r;const t={...hh,...e},n=(r=i.querySelectorAll)==null?void 0:r.call(i,t.selector);n==null||n.forEach(s=>{if(js.has(s))return;const o=Qv(s,t);js.set(s,o),o.start()})}function Zv(i=document){var e;(e=i.querySelectorAll)==null||e.call(i,hh.selector).forEach(t=>{var n;(n=js.get(t))==null||n.destroy(),js.delete(t)})}function Qv(i,e){const t=ex(i,e);let n=0,r=0,s=null,o=Math.floor(Math.random()*1e3),a=null,l=null;const c=1e3/t.fps,h=`logo-jitter-${++Kv}`,d=["pointermove","scroll","keydown","touchstart"],u={passive:!0},f=()=>{clearTimeout(r),!n&&a&&(n=window.setInterval(m,c)),r=window.setTimeout(()=>{clearInterval(n),n=0},1e4)},g=()=>{y(),s=new MutationObserver(y),s.observe(i,{childList:!0,subtree:!0}),d.forEach(M=>window.addEventListener(M,f,u))},y=()=>{const M=i.querySelector("svg");!M||M===l||(l=M,a=nx(M,h,t),ix(M,t.color),M.style.filter=`url(#${h})`,M.style.overflow="visible",clearInterval(n),n=window.setInterval(m,c),f())},m=()=>{a&&(o+=t.speed,a.setAttribute("seed",String(Math.floor(o))))};return{start:g,destroy:()=>{clearInterval(n),clearTimeout(r),d.forEach(M=>window.removeEventListener(M,f,u)),s==null||s.disconnect(),l&&(l.style.filter="")}}}function ex(i,e){return{...e,amount:qr(i,"logoJitterAmount",e.amount),frequency:qr(i,"logoJitterFrequency",e.frequency),fps:qr(i,"logoJitterFps",e.fps),octaves:tx(i,"logoJitterOctaves",e.octaves),speed:qr(i,"logoJitterSpeed",e.speed),color:i.dataset.logoJitterColor||e.color}}function qr(i,e,t){const n=Number.parseFloat(i.dataset[e]);return Number.isFinite(n)?n:t}function tx(i,e,t){const n=Math.round(qr(i,e,t));return Math.max(1,n)}function nx(i,e,t){const n="http://www.w3.org/2000/svg",r=i.querySelector("defs")||i.insertBefore(document.createElementNS(n,"defs"),i.firstChild),s=r.querySelector(`#${CSS.escape(e)}`);s==null||s.remove();const o=document.createElementNS(n,"filter");o.setAttribute("id",e),o.setAttribute("x","-20%"),o.setAttribute("y","-40%"),o.setAttribute("width","140%"),o.setAttribute("height","180%"),o.setAttribute("color-interpolation-filters","sRGB");const a=document.createElementNS(n,"feTurbulence");a.setAttribute("type","fractalNoise"),a.setAttribute("baseFrequency",String(t.frequency)),a.setAttribute("numOctaves",String(t.octaves)),a.setAttribute("seed","1"),a.setAttribute("result","noise");const l=document.createElementNS(n,"feDisplacementMap");return l.setAttribute("in","SourceGraphic"),l.setAttribute("in2","noise"),l.setAttribute("scale",String(t.amount)),l.setAttribute("xChannelSelector","R"),l.setAttribute("yChannelSelector","G"),o.append(a,l),r.append(o),a}function ix(i,e){e&&i.querySelectorAll("path, rect, circle, ellipse, polygon, polyline").forEach(t=>{const n=t.getAttribute("fill"),r=t.getAttribute("stroke");n&&n!=="none"&&t.setAttribute("fill",e),r&&r!=="none"&&t.setAttribute("stroke",e)})}const dh="scrolling-banner-ticker-style",$r=new WeakMap;function fh(i=document,e=null){ph(i).forEach(t=>{if($r.has(t))return;const n=t.querySelector(".scrolling_banner_inner");if(!n)return;ax();const r=sx(t,n,e);$r.set(t,r),r.start()})}function rx(i=document){ph(i).forEach(e=>{var t;(t=$r.get(e))==null||t.destroy(),$r.delete(e)})}function Ul(i,e){if(!i)return;const t=$r.get(i);if(t){t.setText(e);return}const n=i.querySelector(".scrolling_banner_inner h5");n&&(n.textContent=e)}function sx(i,e,t){const n=e.parentNode,r=e.nextSibling,s=document.createElement("div"),o=document.createElement("div");s.className="scrolling_banner_track",o.className="scrolling_banner_group",o.append(e),s.append(o),i.append(s),i.classList.add("scrolling_banner--ticker");const a=window.matchMedia("(prefers-reduced-motion: reduce)"),l=ox(),c=new ResizeObserver(x);let h=null,d=null,u=[],f=0,g=0,y=1,m=1,p=(t==null?void 0:t.scroll)??window.scrollY,M=performance.now(),S=0;function x(){if(a.matches){h==null||h.cancel(),h=null,d==null||d.remove(),d=null,cancelAnimationFrame(g),g=0;return}const _=e.getBoundingClientRect().width,E=i.getBoundingClientRect().width;if(!(!_||!E)){for(d==null||d.remove(),d=null;o.children.length>1;)o.lastElementChild.remove();for(;o.getBoundingClientRect().width<E+_;){const P=e.cloneNode(!0);P.setAttribute("aria-hidden","true"),o.append(P)}if(d=o.cloneNode(!0),d.setAttribute("aria-hidden","true"),s.append(d),!h){const P=o.getBoundingClientRect().width,R=Math.max(1,Number.parseFloat(i.dataset.tickerSpeed)||55),C=P/R*1e3;h=s.animate([{transform:"translate3d(0, 0, 0)"},{transform:"translate3d(-50%, 0, 0)"}],{duration:C,iterations:1/0,easing:"linear"}),h.playbackRate=y}}}function U(_){const E=e.querySelector("h5");if(!E||E.textContent===_)return;if(u.forEach(C=>C.cancel()),u=[],a.matches||l){E.textContent=_,x();return}const P=++f,R=[...s.querySelectorAll(".scrolling_banner_inner h5")].map(C=>C.animate([{clipPath:"inset(0 0 0 0)"},{clipPath:"inset(0 0 0 100%)"}],{duration:160,easing:"cubic-bezier(.7, 0, .3, 1)"}));u=R,Promise.all(R.map(C=>C.finished)).then(()=>{P===f&&(E.textContent=_,x(),u=[...s.querySelectorAll(".scrolling_banner_inner h5")].map(C=>C.animate([{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0 0 0)"}],{duration:260,easing:"cubic-bezier(.2, .7, .2, 1)"})))}).catch(()=>{})}function A(_){if(g=0,!h||a.matches)return;_-S>150&&(m=1);const E=Math.min(48,Math.max(1,_-(A.previousTime||_)));A.previousTime=_;const P=1-Math.exp(-E/160);if(y+=(m-y)*P,Math.abs(m-y)<.015&&m===1){y=1,h.playbackRate=y;return}h.playbackRate=y,g=requestAnimationFrame(A)}function I(_){const E=Number.isFinite(_==null?void 0:_.scroll)?_.scroll:(t==null?void 0:t.scroll)??window.scrollY,P=performance.now(),R=Math.max(P-M,1),C=mh((E-p)/R*1e3,-3e3,3e3);m=mh(1+C/180,-8,14),S=P,p=E,M=P,!g&&h&&!a.matches&&(g=requestAnimationFrame(A))}return{start(){var _,E;c.observe(i),a.addEventListener("change",x),(_=t==null?void 0:t.on)==null||_.call(t,"scroll",I),(E=document.fonts)==null||E.ready.then(x),x()},rebuild:x,setText:U,destroy(){var _;h==null||h.cancel(),u.forEach(E=>E.cancel()),c.disconnect(),a.removeEventListener("change",x),(_=t==null?void 0:t.off)==null||_.call(t,"scroll",I),cancelAnimationFrame(g),d==null||d.remove(),s.parentNode===i&&(n!=null&&n.isConnected?n.insertBefore(e,(r==null?void 0:r.parentNode)===n?r:null):i.append(e),s.remove()),i.classList.remove("scrolling_banner--ticker")}}}function ph(i){var t,n;const e=new Set(((t=i==null?void 0:i.querySelectorAll)==null?void 0:t.call(i,".scrolling_banner"))||[]);return(n=i==null?void 0:i.matches)!=null&&n.call(i,".scrolling_banner")&&e.add(i),[...e]}function mh(i,e,t){return Math.min(t,Math.max(e,i))}function ox(){const i=navigator.userAgent;return/Safari/i.test(i)&&!/Chrome|Chromium|CriOS|Edg|OPR|FxiOS/i.test(i)}function ax(){if(document.getElementById(dh))return;const i=document.createElement("style");i.id=dh,i.textContent=`
    .scrolling_banner--ticker { overflow: hidden; }
    .scrolling_banner--ticker .scrolling_banner_track,
    .scrolling_banner--ticker .scrolling_banner_group {
      display: flex;
      align-items: center;
      flex: none;
      width: max-content;
    }
    .scrolling_banner--ticker .scrolling_banner_track { will-change: transform; }
    .scrolling_banner--ticker .scrolling_banner_group {
      gap: 3rem;
      padding-right: 3rem;
    }
    .scrolling_banner--ticker .scrolling_banner_inner {
      flex: none;
      width: max-content;
      white-space: nowrap;
    }
    .scrolling_banner--ticker .scrolling_banner_inner h5 { white-space: nowrap; }
  `,document.head.append(i)}function lx(i){if(!i)return()=>{};let e=0;const t=r=>{if(document.hidden){e=0;return}i.raf(r),e=requestAnimationFrame(t)},n=()=>{document.hidden?(cancelAnimationFrame(e),e=0):e||(e=requestAnimationFrame(t))};return document.addEventListener("visibilitychange",n),e=requestAnimationFrame(t),()=>{cancelAnimationFrame(e),document.removeEventListener("visibilitychange",n)}}let Yr=null;function cx({nav:i,sectionsRoot:e,ticker:t,lenis:n}={}){var E,P,R;_h();const r=(i==null?void 0:i.querySelector(".flex"))||i;if(!r||!e)return;const s=e.querySelector("#top"),o=((P=(E=t==null?void 0:t.querySelector(".scrolling_banner_inner h5"))==null?void 0:E.textContent)==null?void 0:P.trim())||"";let a=[],l=null,c=0,h=null,d=null,u=null,f=null;const g=i.style.position,y=i.style.zIndex;getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.style.zIndex="5";const m=()=>{const C=[...r.querySelectorAll("a.cta.round[href]")];l=C[0]||null;const F=C.length?C.slice(1):[...r.querySelectorAll('a[href^="#"]')].slice(1),D=new Map;F.forEach(X=>{const q=gh(X.getAttribute("href"));q&&(D.has(q)||D.set(q,[]),D.get(q).push(X))});const L=F[0]||null,T=[...e.querySelectorAll(".section[id]")].filter(X=>X.classList.length===1).map(X=>({id:X.id,section:X,label:Nl(X)})),z=new Set;T.forEach(X=>{var he;const G=((he=D.get(X.id))==null?void 0:he.find(pe=>!z.has(pe)))||F.find(pe=>!z.has(pe))||hx(L);z.add(G),G.setAttribute("href",`#${encodeURIComponent(X.id)}`),ux(G,X.label),r.append(G)}),F.forEach(X=>{z.has(X)||X.remove()}),a=T.map(X=>({...X,link:[...r.querySelectorAll("a[href]")].find(q=>gh(q.getAttribute("href"))===X.id)})).filter(X=>X.link),h=null,S()},p=C=>{C&&(U(C,!1),u!==C&&C.section.id!=="top"&&(u=C,Ul(t,Nl(C.section).toUpperCase())))},M=()=>{if(!s)return;const C=dx((window.innerHeight-s.getBoundingClientRect().bottom)/Math.max(window.innerHeight,1));i.style.setProperty("--nav-gradient-opacity",C.toFixed(3)),i.style.setProperty("--nav-gradient-y",`${(-90*(1-C)).toFixed(1)}px`),i.classList.toggle("nav--past-top",C>0)};function S(){M(),cancelAnimationFrame(c),c=requestAnimationFrame(()=>{const C=window.innerHeight*.72,F=a.find(({section:T})=>{const z=T.getBoundingClientRect();return z.top<=C&&z.bottom>C});if(f){const T=f.section.getBoundingClientRect();if(T.top<=C&&T.bottom>C)f=null;else return}const D=[...a].reverse().find(({section:T})=>T.getBoundingClientRect().top<=C),L=F||D;if(L){const T=s==null?void 0:s.getBoundingClientRect(),z=!!(T&&T.top<=C&&T.bottom>C);U(L,z),!z&&u!==L&&L.section.id!=="top"&&(u=L,Ul(t,Nl(L.section).toUpperCase()))}else u=null,U(null,!0),Ul(t,o)})}const x=C=>{const F=C.target.closest("a[href]");if(!F||!r.contains(F))return;if(F===l){U(null,!0),f=null,S();return}const D=a.find(L=>L.link===F);D&&(f=D,cancelAnimationFrame(c),p(D),S())};function U(C,F=!1){h===C&&d===F||(h=C,d=F,l&&(l.classList.toggle("w--current",F),F?l.setAttribute("aria-current","page"):l.removeAttribute("aria-current")),a.forEach(({link:D})=>{const L=!F&&!!C&&D===C.link;D.classList.toggle("w--current",L),L?D.setAttribute("aria-current","location"):D.removeAttribute("aria-current")}))}const A=()=>{f=null},I=()=>{const C=a.find(({id:F})=>`#${F}`===window.location.hash);C&&p(C),S()};m(),r.addEventListener("click",x),window.addEventListener("scroll",S,{passive:!0}),window.addEventListener("resize",S,{passive:!0}),window.addEventListener("hashchange",I),window.addEventListener("wheel",A,{passive:!0}),window.addEventListener("touchstart",A,{passive:!0}),(R=n==null?void 0:n.on)==null||R.call(n,"scroll",S);const _=new MutationObserver(C=>{C.some(F=>!(i!=null&&i.contains(F.target)))&&m()});_.observe(e,{childList:!0,subtree:!0}),Yr=()=>{var C;cancelAnimationFrame(c),_.disconnect(),i.classList.remove("nav--past-top"),i.style.removeProperty("--nav-gradient-opacity"),i.style.removeProperty("--nav-gradient-y"),i.style.position=g,i.style.zIndex=y,r.removeEventListener("click",x),window.removeEventListener("scroll",S),window.removeEventListener("resize",S),window.removeEventListener("hashchange",I),window.removeEventListener("wheel",A),window.removeEventListener("touchstart",A),(C=n==null?void 0:n.off)==null||C.call(n,"scroll",S)}}function Nl(i){const e=i.dataset.navLabel||i.getAttribute("aria-label"),t=i.querySelector(".feature_headings h3, [data-nav-heading], h1, h2, h3, h4, h5, h6");return(e||(t==null?void 0:t.textContent)||i.id.replace(/[-_]+/g," ")).trim().replace(/\s+/g," ")}function ux(i,e){const t=i.querySelector(":scope > div")||i;t.textContent.trim()!==e&&(t.textContent=e)}function hx(i){if(i){const t=i.cloneNode(!0);return t.classList.remove("w--current"),t.removeAttribute("aria-current"),t}const e=document.createElement("a");return e.className="cta round w-inline-block",e.append(document.createElement("div")),e}function gh(i){if(!(i!=null&&i.startsWith("#")))return"";try{return decodeURIComponent(i.slice(1))}catch{return i.slice(1)}}function dx(i){return Math.min(1,Math.max(0,i))}function _h(){Yr==null||Yr(),Yr=null}let jr=null;function fx({root:i,lenis:e}={}){var c;if(vh(),!i)return;const t=[...i.querySelectorAll(".section .feature_image_holder .feature_image")];if(!t.length)return;const n=window.matchMedia("(prefers-reduced-motion: reduce)"),r=t.map(h=>({image:h,translate:h.style.translate,willChange:h.style.willChange}));let s=0;const o=()=>{if(s=0,n.matches){t.forEach(d=>{d.style.translate="0 0"});return}const h=window.innerHeight||1;t.forEach(d=>{const u=d.closest(".feature_image_holder"),f=d.closest(".section");if(!u||!f)return;const g=f.getBoundingClientRect(),y=d.getBoundingClientRect().height,m=Math.max(0,(y-u.clientHeight)/2),M=(Math.min(1,Math.max(0,(h-g.top)/(h+g.height)))-.5)*2*m;d.style.translate=`0 ${M.toFixed(2)}px`,d.style.willChange="translate"})},a=()=>{s||(s=requestAnimationFrame(o))},l=()=>a();window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a,{passive:!0}),(c=e==null?void 0:e.on)==null||c.call(e,"scroll",a),n.addEventListener("change",l),a(),jr=()=>{var h;cancelAnimationFrame(s),window.removeEventListener("scroll",a),window.removeEventListener("resize",a),(h=e==null?void 0:e.off)==null||h.call(e,"scroll",a),n.removeEventListener("change",l),r.forEach(({image:d,translate:u,willChange:f})=>{d.style.translate=u,d.style.willChange=f})}}function vh(){jr==null||jr(),jr=null}const Ks={domain:"other-dev-xwvzitvq.myshopify.com",token:"3594d690353b2cb8846be866204a4369",productId:"gid://shopify/Product/15463489208474"},xh=`id totalQuantity checkoutUrl cost { subtotalAmount { amount currencyCode } }
  lines(first: 100) { nodes { id quantity cost { totalAmount { amount currencyCode } }
    merchandise { ... on ProductVariant { id title product { title } image { url altText } } } } }`,Fl=`other-cart:${Ks.domain}`;let bt=null,Ht,Js,lr,yh,Zs,Qs,si=!1,Ol,Bl,cr;async function zl(i,e={}){var r;const t=await fetch(`https://${Ks.domain}/api/2026-07/graphql.json`,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":Ks.token},body:JSON.stringify({query:i,variables:e}),signal:AbortSignal.timeout(15e3)});if(!t.ok)throw new Error("The shop is unavailable. Please try again.");const n=await t.json();if((r=n.errors)!=null&&r.length)throw new Error(n.errors.map(s=>s.message).join(" "));return n.data}function px(){try{return localStorage.getItem(Fl)}catch{return null}}function Mh(i){bt=i;try{bt?localStorage.setItem(Fl,bt.id):localStorage.removeItem(Fl)}catch{}}async function eo(){const i=(bt==null?void 0:bt.id)||px();i&&Mh((await zl(`query($id: ID!) { cart(id: $id) { ${xh} } }`,{id:i})).cart)}async function to(i,e,t,n){const r=(await zl(`mutation(${e}) { ${i}(${t}) {
    cart { ${xh} } userErrors { message } warnings { message }
  } }`,n))[i];if(r.cart&&Mh(r.cart),r.userErrors.length)throw new Error(r.userErrors.map(s=>s.message).join(" "));lr.textContent=r.warnings.map(s=>s.message).join(" ")}function Et(i,e,t){const n=document.createElement(i);return e&&(n.textContent=e),t==null||t.append(n),n}function Sh(i){return new Intl.NumberFormat("en-GB",{style:"currency",currency:i.currencyCode}).format(Number(i.amount))}function kl(){Js.replaceChildren(),Qs.textContent=`Cart (${(bt==null?void 0:bt.totalQuantity)||0})`;const i=((bt==null?void 0:bt.lines.nodes)||[]).filter(e=>e.quantity>0);i.length||Et("p","Your cart is empty.",Js);for(const e of i){const t=Et("article","",Js);t.className="other-cart-line";const n=e.merchandise;if(n.image){const a=Et("img","",t);a.src=n.image.url,a.alt=n.image.altText||n.product.title}const r=Et("div","",t);Et("h3",n.product.title,r),n.title!=="Default Title"&&Et("p",n.title,r),Et("p",Sh(e.cost.totalAmount),r);const s=Et("div","",r);s.className="other-cart-quantity";for(const[a,l,c]of[["−",e.quantity-1,"Decrease quantity"],["+",e.quantity+1,"Increase quantity"]]){a==="+"&&Et("span",String(e.quantity),s);const h=Et("button",a,s);h.type="button",h.setAttribute("aria-label",`${c}: ${n.product.title}`),h.disabled=si,h.onclick=()=>ur(()=>bh(e.id,l))}const o=Et("button","Remove",r);o.type="button",o.disabled=si,o.onclick=()=>ur(()=>bh(e.id,0))}yh.textContent=bt?`Subtotal ${Sh(bt.cost.subtotalAmount)}`:"",Zs.disabled=si||!i.length,Ht.setAttribute("aria-busy",String(si))}async function bh(i,e){return e?to("cartLinesUpdate","$cartId: ID!, $lines: [CartLineUpdateInput!]!","cartId: $cartId, lines: $lines",{cartId:bt.id,lines:[{id:i,quantity:e}]}):to("cartLinesRemove","$cartId: ID!, $lineIds: [ID!]!","cartId: $cartId, lineIds: $lineIds",{cartId:bt.id,lineIds:[i]})}async function ur(i){if(!si){si=!0,lr.textContent="",kl();try{await i()}catch(e){lr.textContent=e.message||"Something went wrong. Please try again."}finally{si=!1,kl()}}}function Eh(){Ht.open||(cr=document.activeElement,Ht.showModal())}function wh(){if(Ht)return;const i=Et("style","",document.head);i.textContent=`
    .other-cart { position:fixed; inset:0 0 0 auto; margin:0; width:min(460px,100%); max-width:100%; height:100dvh; max-height:100dvh; box-sizing:border-box; padding:24px; border:0; background:#edff00; color:#08006b; overflow:auto; font:16px/1.4 Arial,sans-serif; }
    .other-cart::backdrop { background:rgba(0,0,0,.4); }
    .other-cart header { display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid; margin-bottom:24px; }
    .other-cart h2 { font-size:24px; } .other-cart h3 { font-size:18px; margin:0; }
    .other-cart button { cursor:pointer; padding:8px 12px; color:inherit; background:transparent; border:1px solid currentColor; font:inherit; }
    .other-cart button:disabled { opacity:.45; cursor:wait; }
    .other-cart-line { display:flex; gap:16px; padding:20px 0; border-bottom:1px solid; }
    .other-cart-line img { width:80px; height:120px; object-fit:contain; }
    .other-cart-line > div { min-width:0; overflow-wrap:anywhere; }
    .other-cart-quantity { display:flex; gap:14px; align-items:center; margin:12px 0; }
    .other-cart-status { min-height:24px; }
    .other-cart .other-checkout { width:100%; background:#08006b; color:#edff00; padding:16px; }
    .other-cart-toggle { position:fixed; right:16px; bottom:90px; z-index:30; padding:10px 18px; border:1px solid #edff00; background:#08006b; color:#edff00; font:16px Arial,sans-serif; cursor:pointer; }
  `,Ht=Et("dialog","",document.body),Ht.className="other-cart",Ht.dataset.lenisPrevent="",Ht.setAttribute("aria-label","Shopping cart");const e=Et("header","",Ht);Et("h2","Your cart",e);const t=Et("button","×",e);t.setAttribute("aria-label","Close cart"),t.onclick=()=>Ht.close(),Ht.addEventListener("close",()=>{var n;return(n=cr==null?void 0:cr.focus)==null?void 0:n.call(cr,{preventScroll:!0})}),Js=Et("div","",Ht),lr=Et("p","",Ht),lr.className="other-cart-status",lr.setAttribute("role","status"),yh=Et("p","",Ht),Et("p","Shipping and taxes calculated at checkout.",Ht),Zs=Et("button","Checkout",Ht),Zs.className="other-checkout",Zs.onclick=()=>ur(async()=>{if(await eo(),!(bt!=null&&bt.totalQuantity))throw new Error("Your cart is empty. Please add your product again.");window.location.assign(bt.checkoutUrl)}),Qs=Et("button","Cart (0)",document.body),Qs.className="other-cart-toggle",Qs.onclick=()=>{Eh(),ur(eo)},kl(),Ol=zl("query($id: ID!) { product(id: $id) { title variants(first: 100) { nodes { id title availableForSale } } } }",{id:Ks.productId}).then(n=>{Bl=n.product}),Ol.catch(()=>{}),ur(eo)}async function mx(){wh(),Eh(),!si&&await ur(async()=>{if(await Ol,!Bl)throw new Error("This capsule is not available in the shop yet.");const i=Bl.variants.nodes.filter(t=>t.availableForSale);if(!i.length)throw new Error("This capsule is sold out.");if(i.length>1)throw new Error("This capsule has multiple options. Product option selection needs to be configured.");await eo();const e=[{merchandiseId:i[0].id,quantity:1}];bt?await to("cartLinesAdd","$cartId: ID!, $lines: [CartLineInput!]!","cartId: $cartId, lines: $lines",{cartId:bt.id,lines:e}):await to("cartCreate","$input: CartInput","input: $input",{input:{lines:e}})})}const no=new WeakMap;let gx=1;function _x(i){io(i).forEach(e=>{var t;(t=Th(e))==null||t.removeAttribute("data-w-id"),e.style.removeProperty("visibility")})}function vx(i){wh(),io(i).forEach(e=>{if(no.has(e))return;const t=Th(e),n=yx(e);if(!t||!n)return;(t.querySelector("div")||t).textContent="BUY",t.setAttribute("aria-haspopup","dialog");const r=window.gsap,s=t.getAttribute("style"),o=n.getAttribute("style");let a=!1,l={x:window.innerWidth/2,y:window.innerHeight/2};Object.assign(t.style,{position:"fixed",left:"0px",top:"0px",zIndex:"20"}),Object.assign(n.style,{position:"fixed",left:"0px",top:"0px",zIndex:"21",display:"none",pointerEvents:"none"}),t.setAttribute("aria-expanded","false"),t.setAttribute("aria-controls",n.id||(n.id=`floating-register-menu-${gx++}`));const c=r==null?void 0:r.quickTo(t,"x",{duration:.32,ease:"power2.out"}),h=r==null?void 0:r.quickTo(t,"y",{duration:.32,ease:"power2.out"});function d(){return[...document.querySelectorAll("a[href], button")].some(p=>{if(p===t||e.contains(p))return!1;const M=p.getBoundingClientRect();if(!M.width||!M.height||getComputedStyle(p).visibility==="hidden")return!1;const S=Math.max(M.left-l.x,0,l.x-M.right),x=Math.max(M.top-l.y,0,l.y-M.bottom);return Math.hypot(S,x)<44})}function u(){const p=Math.max(0,Math.min(window.innerWidth-t.offsetWidth,l.x-t.offsetWidth/2)),M=Math.max(0,Math.min(window.innerHeight-t.offsetHeight,l.y-t.offsetHeight/2));c&&h?(c(p),h(M)):t.style.transform=`translate3d(${p}px, ${M}px, 0) scale(${a?0:1})`;const S=d();S!==a&&(a=S,t.style.pointerEvents=a?"none":"auto",r==null||r.to(t,{scale:a?0:1,duration:a?.18:.4,ease:a?"power2.in":"back.out(2)",overwrite:"auto"}))}function f(p){p.preventDefault(),p.stopImmediatePropagation();{mx();return}}function g(p){l={x:p.clientX,y:p.clientY},u()}function y(p){}function m(p){p.key}t.addEventListener("click",f),document.addEventListener("pointermove",g,{passive:!0}),document.addEventListener("click",y),document.addEventListener("keydown",m),window.addEventListener("resize",u),window.addEventListener("scroll",u,{passive:!0}),u(),no.set(e,()=>{t.removeEventListener("click",f),document.removeEventListener("pointermove",g),document.removeEventListener("click",y),document.removeEventListener("keydown",m),window.removeEventListener("resize",u),window.removeEventListener("scroll",u),r==null||r.killTweensOf(t),r==null||r.killTweensOf(n),s===null?t.removeAttribute("style"):t.setAttribute("style",s),o===null?n.removeAttribute("style"):n.setAttribute("style",o)})})}function Ah(i){io(i).forEach(e=>{var t;(t=no.get(e))==null||t(),no.delete(e)})}function xx(i){io(i).forEach(e=>{e.style.visibility="hidden"}),Ah(i)}function io(i){var t,n;const e=new Set(document.querySelectorAll(".floating_menu_holder"));return(t=i==null?void 0:i.querySelectorAll)==null||t.call(i,".floating_menu_holder").forEach(r=>e.add(r)),(n=i==null?void 0:i.matches)!=null&&n.call(i,".floating_menu_holder")&&e.add(i),[...e]}function Th(i){return i.querySelector("[data-floating-register-trigger], a.cta.floating:not(.vert)")}function yx(i){return i.querySelector("[data-floating-register-menu], .cta.floating.vert")}function Mx(){return document.readyState!=="loading"?Promise.resolve():new Promise(i=>{document.addEventListener("DOMContentLoaded",i,{once:!0})})}const Vt={three:null,barba:null,lenis:null},Sx=((zh=document.currentScript)==null?void 0:zh.src)||"";let ro=null;const Hl=new URLSearchParams(window.location.search),bx=!Hl.has("nojitter"),Ch=Hl.has("no3d"),Rh=Hl.has("nojson"),so=Ex();xd(),Ax(),Ph(document),so&&Lh(document);function Ex(){const i=navigator.userAgent;return/Safari/i.test(i)&&!/(Chrome|Chromium|CriOS|Edg|EdgiOS|OPR|FxiOS|Firefox)/i.test(i)}function Ph(i){var e;(e=i.querySelectorAll)==null||e.call(i,".hero_logo").forEach(t=>{t.removeAttribute("data-animation-type"),t.removeAttribute("data-w-id"),t.removeAttribute("data-src")})}function Lh(i){var e;(e=i.querySelectorAll)==null||e.call(i,".hero_logo").forEach(t=>{if(t.querySelector("img[data-static-hero-logo]"))return;const n=document.createElement("img");n.src="https://cdn.jsdelivr.net/gh/kujira22/other-label-texture@8ad5291/hero-logo.svg",n.alt="",n.setAttribute("aria-hidden","true"),n.dataset.staticHeroLogo="",n.draggable=!1,n.style.cssText="display:block;width:100%;height:100%;object-fit:contain;pointer-events:none",n.addEventListener("error",()=>console.warn("[logo] Static logo could not be loaded:",n.src),{once:!0}),t.replaceChildren(n)})}function wx(){return ro||(ro=new Promise((i,e)=>{const t=document.createElement("script");t.src=new URL("./logo-lottie.js",Sx).href,t.onload=()=>i(window.LogoLottieControls),t.onerror=()=>e(new Error("The optional Lottie controls script could not be loaded.")),document.head.appendChild(t)}),ro)}function Ax(){const i=document.createElement("style");i.textContent=`
    .nav, [data-section-navigation] { isolation: isolate; }
    .nav::before, [data-section-navigation]::before {
      content: "";
      position: fixed;
      inset: 0 0 auto;
      height: 180px;
      z-index: -1;
      pointer-events: none;
      opacity: var(--nav-gradient-opacity, 0);
      background: linear-gradient(to bottom, #edff00 0%, rgba(237, 255, 0, 0.82) 38%, rgba(237, 255, 0, 0) 100%);
      transform: translate3d(0, var(--nav-gradient-y, 0px), 0);
      will-change: transform, opacity;
    }
    .nav a.cta.w--current {
      background-color: var(--colour--other-blue);
      color: var(--colour--other-yellow);
    }
  `,document.head.appendChild(i)}async function Tx(){var t;await Mx(),await window.lenisReady,Vt.lenis=window.lenis||(typeof lenis<"u"?lenis:null);const i=navigator.userAgent;if((window.matchMedia("(hover: none), (pointer: coarse)").matches||/Android|iPhone|iPad|iPod/i.test(i)||navigator.maxTouchPoints>1&&/Macintosh/i.test(i))&&((t=window.ScrollTrigger)==null||t.config({ignoreMobileResize:!0})),lx(Vt.lenis),fh(document,Vt.lenis),Vt.three=Ch?null:Rv({mount:document.querySelector("[data-three-canvas]"),lenis:Vt.lenis}),Ch&&console.info("[diagnostics] Three.js scene disabled by ?no3d=1"),Vt.barba=gd({onEnter:Dh,onLeave:Rx,onBeforeLeave:({container:n})=>xx(n),onTransitionStart:()=>{var n;(n=Vt.lenis)==null||n.stop()},onTransitionComplete:()=>{var n,r,s;(n=Vt.lenis)==null||n.scrollTo(0,{immediate:!0}),(r=Vt.lenis)==null||r.start(),(s=Vt.three)==null||s.syncScroll()}}),!Vt.barba){const n=document.querySelector("[data-barba='container']");await Dh({container:n})}}async function Dh({container:i,namespace:e,html:t,transition:n=!1}){var o;if(!i)return;const r=String(e||i.dataset.barbaNamespace||"page").toLowerCase();await(async()=>{var c,h,d,u,f,g;i.dataset.pageActive="true",document.body.dataset.page=r,(c=Vt.three)==null||c.setPage({capsule:i.classList.contains("cap2"),scrollTarget:i.querySelector("#origin")});const a=window.Webflow;(h=a==null?void 0:a.destroy)==null||h.call(a),Ph(document),so&&Lh(document);const l=t?new DOMParser().parseFromString(t,"text/html"):document;if(t){const y=l.documentElement.getAttribute("data-wf-page");y&&document.documentElement.setAttribute("data-wf-page",y)}if(Cx(l),fh(document,Vt.lenis),cx({nav:document.querySelector(".nav, [data-section-navigation]"),sectionsRoot:i,ticker:document.querySelector(".scrolling_banner"),lenis:Vt.lenis}),fx({root:i,lenis:Vt.lenis}),_x(i),(d=a==null?void 0:a.ready)==null||d.call(a),(g=(f=(u=a==null?void 0:a.require)==null?void 0:u.call(a,"ix2"))==null?void 0:f.init)==null||g.call(f),$v(i),vx(i),!so&&!Rh){const y=await wx(),{initLogoLottieControls:m}=y;m(document)}else Rh&&console.info("[diagnostics] Logo Lottie JSON disabled by ?nojson=1");bx&&!so&&Jv(document),i.querySelectorAll("[data-year]").forEach(y=>{y.textContent=String(new Date().getFullYear())})})(),n||(o=window.ScrollTrigger)==null||o.refresh()}function Cx(i){var t;const e=(t=i.querySelector(".nav a.w--current[href], [data-section-navigation] a.w--current[href]"))==null?void 0:t.getAttribute("href");document.querySelectorAll(".nav a[href], [data-section-navigation] a[href]").forEach(n=>{const r=!!(e&&n.getAttribute("href")===e);n.classList.toggle("w--current",r),r?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}function Rx({container:i}){i&&(_h(),vh(),rx(i),Yv(i),Ah(i),Zv(i),delete i.dataset.pageActive)}Tx().catch(i=>{console.error("[base] Setup failed.",i)});/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class pn{constructor(e,t,n,r,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),pn.nextNameID=pn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++pn.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ih extends pn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Vl(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const Px={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Vl,toHexString:Vl},Kr={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Lx={isPrimitive:!1,match:Array.isArray,fromHexString(i,e,t=1){const n=Kr.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(255&n)/255*t},toHexString:([i,e,t],n=1)=>Kr.toHexString(i*(n=255/n)<<16^e*n<<8^t*n<<0)},Dx={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=Kr.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(255&n)/255*t},toHexString:({r:i,g:e,b:t},n=1)=>Kr.toHexString(i*(n=255/n)<<16^e*n<<8^t*n<<0)},Ix=[Px,Kr,Lx,Dx];class Uh extends pn{constructor(e,t,n,r){var s;super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,Ix.find(o=>o.match(s))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Vl(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class oo extends pn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Nh extends pn{constructor(e,t,n,r,s,o){super(e,t,n,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=h=>{const d=parseFloat(this.$input.value);isNaN(d)||(this._snapClampSetValue(d+h),this.$input.value=this.getValue())};let t,n,r,s,o,a=!1;const l=h=>{if(a){const d=h.clientX-t,u=h.clientY-n;Math.abs(u)>5?(h.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(d)>5&&c()}if(!a){const d=h.clientY-r;o-=d*this._step*this._arrowKeyMultiplier(h),s+o>this._max?o=this._max-s:s+o<this._min&&(o=this._min-s),this._snapClampSetValue(s+o)}r=h.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{let h=parseFloat(this.$input.value);isNaN(h)||(this._stepExplicit&&(h=this._snap(h)),this.setValue(this._clamp(h)))}),this.$input.addEventListener("keydown",h=>{h.code==="Enter"&&this.$input.blur(),h.code==="ArrowUp"&&(h.preventDefault(),e(this._step*this._arrowKeyMultiplier(h))),h.code==="ArrowDown"&&(h.preventDefault(),e(this._step*this._arrowKeyMultiplier(h)*-1))}),this.$input.addEventListener("wheel",h=>{this._inputFocused&&(h.preventDefault(),e(this._step*this._normalizeMouseWheel(h)))},{passive:!1}),this.$input.addEventListener("mousedown",h=>{t=h.clientX,n=r=h.clientY,a=!0,s=this.getValue(),o=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=u=>{const f=this.$slider.getBoundingClientRect();let g=(y=u,m=f.left,p=f.right,M=this._min,S=this._max,(y-m)/(p-m)*(S-M)+M);var y,m,p,M,S;this._snapClampSetValue(g)},t=u=>{e(u.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n)};let r,s,o=!1;const a=u=>{u.preventDefault(),this._setDraggingStyle(!0),e(u.touches[0].clientX),o=!1},l=u=>{if(o){const f=u.touches[0].clientX-r,g=u.touches[0].clientY-s;Math.abs(f)>Math.abs(g)?a(u):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else u.preventDefault(),e(u.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},h=this._callOnFinishChange.bind(this);let d;this.$slider.addEventListener("mousedown",u=>{this._setDraggingStyle(!0),e(u.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",u=>{u.touches.length>1||(this._hasScrollBar?(r=u.touches[0].clientX,s=u.touches[0].clientY,o=!0):a(u),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",c))},{passive:!1}),this.$slider.addEventListener("wheel",u=>{if(Math.abs(u.deltaX)<Math.abs(u.deltaY)&&this._hasScrollBar)return;u.preventDefault();const f=this._normalizeMouseWheel(u)*this._step;this._snapClampSetValue(this.getValue()+f),this.$input.value=this.getValue(),clearTimeout(d),d=setTimeout(h,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Fh extends pn{constructor(e,t,n,r){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Oh extends pn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Bh=!1;class Gl{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:s="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Bh&&o&&((function(l){const c=document.createElement("style");c.innerHTML=l;const h=document.querySelector("head link[rel=stylesheet], head style");h?document.head.insertBefore(c,h):document.head.appendChild(c)})('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Bh=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,r,s){if(Object(n)===n)return new Fh(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new Nh(this,e,t,n,r,s);case"boolean":return new Ih(this,e,t);case"string":return new Oh(this,e,t);case"function":return new oo(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new Uh(this,e,t,n)}addFolder(e){return new Gl({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof oo||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof oo)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Ux=Object.freeze(Object.defineProperty({__proto__:null,BooleanController:Ih,ColorController:Uh,Controller:pn,FunctionController:oo,GUI:Gl,NumberController:Nh,OptionController:Fh,StringController:Oh},Symbol.toStringTag,{value:"Module"}));return mo.app=Vt,Object.defineProperty(mo,Symbol.toStringTag,{value:"Module"}),mo})({});
//# sourceMappingURL=base.js.map
