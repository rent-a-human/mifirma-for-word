/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see legal.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[5],{346:function(ha,ca,h){function ba(e,h,n){h.endsWith("/")||(h+="/");n=n||{};var r=n.disableWebsockets||!1;this.dO=n.singleServerMode||!1;h.endsWith("blackbox/")||(h+="blackbox/");this.Jl=n.uploadData||null;this.Lt=n.uriData||null;this.bI=n.cacheKey||null;this.Nf=Object(f.a)(h,null,r);this.Je=h;this.VA=e;this.Ye=null;this.Yj=da();this.sm=da();this.Gv=!1;this.Kf=this.Md=this.$d=this.He=null;this.ef=[];this.kw=[];this.cache={};this.timeStamp=
0;this.zf=[];this.Cg=[];this.jB=null;this.OA=!1;this.JD=this.id=null;this.HC=this.WK=fa;this.by=0;this.bC=!1;this.b_=1;this.qx={};this.Nw=null;this.Tp(!0)}function da(){var e={promise:null,resolve:null,reject:null,state:0,result:null,request:null,cn:function(){return 1===(e.state&1)},kZ:function(){return 2===(e.state&2)},oh:function(){return!e.kZ()&&!e.cn()},XY:function(){return 4===(e.state&4)},xN:function(){e.state|=4}};e.promise=new Promise(function(f,h){e.resolve=function(){if(0===e.state||4===
e.state)e.state=1,e.result=arguments[0],f.apply(null,arguments)};e.reject=function(){if(0===e.state||4===e.state)e.state=2,h.apply(null,arguments)}});return e}function fa(){return!1}function aa(e,f,h){if(!(f in x))return!0;f=x[f];for(var n=0;n<f.length;n++){var r=e;var w=f[n];var y=h;if(w.name in r){var aa="",ba=!1;r=r[w.name];switch(w.type){case "s":aa="String";ba=Object(z.isString)(r);break;case "a":aa="Array";ba=Object(z.isArray)(r);break;case "n":aa="Number";ba=Object(z.isNumber)(r)&&Object(z.isFinite)(r);
break;case "o":aa="Object",ba=Object(z.isObject)(r)&&!Object(z.isArray)(r)}ba||y.reject('Expected response field "'+w.name+'" to have type '+aa);w=ba}else y.reject('Response missing field "'+w.name+'"'),w=!1;if(!w)return!1}return!0}h.r(ca);var z=h(0);h.n(z);var y=h(1);ha=h(35);var w=h(26),f=h(363),n=h(74);h=h(290);var x={pages:[{name:"pages",type:"a"}],pdf:[{name:"url",type:"s"}],docmod:[{name:"url",type:"s"},{name:"rID",type:"s"}],health:[],tiles:[{name:"z",type:"n"},{name:"rID",type:"n"},{name:"tiles",
type:"a"},{name:"size",type:"n"}],annots:[{name:"url",type:"s"},{name:"name",type:"s"}],image:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],text:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}]};ba.prototype=Object(z.extend)(ba.prototype,{qU:function(){var e=this;return new Promise(function(f,h){var n=new XMLHttpRequest;n.open("GET",e.Je+"ck");n.withCredentials=e.Pm();n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?f():h())};
n.send()})},w1:function(e,f){this.WK=e||fa;this.HC=f||fa},qI:function(){var e=this;this.sm=da();this.Yj=da();return this.Nf.eB().then(function(){e.Gv=!1;e.id=null;e.OA=!1;return e.qU()})},xD:function(){this.WK();this.$w();this.He&&(this.He.oh()?this.Ze(this.He.request):this.He.cn()&&this.HC(this.He.result.url,"pdf")&&(this.He=null,this.XM()));this.Kf&&this.Kf.oh()&&this.Ze(this.Kf.request);this.$d&&this.$d.oh()?this.Ze(this.$d.request):this.Md&&this.Md.oh()&&this.KK(this.Md.request);var e;for(e=0;e<
this.zf.length;e++)this.zf[e]&&this.zf[e]&&(this.zf[e].oh()?this.Ze(this.zf[e].request):this.zf[e].cn()&&this.HC(this.zf[e].result.url,"image")&&(this.zf[e]=null,this.Xx(e)));for(e=0;e<this.Cg.length;e++)this.Cg[e]&&this.Cg[e]&&this.Cg[e].oh()&&!this.Cg[e].XY()&&this.Ze(this.Cg[e].request);for(e=0;e<this.ef.length;e++)this.ef[e]&&this.ef[e].oh()&&this.Ze(this.ef[e].request)},$w:function(){var e=this;this.Gv||(this.timeStamp=Date.now(),this.Nf.mE(function(f){e.n_(f)}).then(function(){clearInterval(e.lD);
e.lD=null},function(f){Object(y.e)("Blackbox connection failed:"+f);e.Gv=!1;if(!e.lD){var h=0;e.OA=!0;e.JD=0;e.lD=setInterval(function(){50>h++&&e.xD()},5E3)}}),this.Gv=!0)},z3:function(){var e=this,f=createPromiseCapability();if(this.Jl){var h=new FormData;h.append("file",this.Jl.fileHandle,this.Jl.fileHandle.name);var n=this.Jl.loadCallback;var x="upload";var y=this.Jl.extension}else if(this.Lt){h={uri:this.Lt.uri,E6:this.Lt.shareId};h=Object.keys(h).map(function(e){return e+"="+(h[e]?encodeURIComponent(h[e]):
"")}).join("&");var z="application/x-www-form-urlencoded; charset=UTF-8";n=this.Lt.loadCallback;x="url";y=this.Lt.extension}else return Promise.resolve();var aa=new XMLHttpRequest;aa.open("POST",Object(w.i)(e.Je,"AuxUpload?ext="+y+"&type="+x+"&bcid="+this.Nf.clientId));aa.withCredentials=this.Pm();z&&aa.setRequestHeader("Content-Type",z);aa.addEventListener("load",function(){if(aa.readyState===aa.DONE&&200===aa.status){var h=JSON.parse(aa.response);e.VA=h.uri;n(h);f.resolve(h)}});aa.addEventListener("error",
function(){f.reject(aa.statusText+" "+JSON.stringify(aa))});this.Jl&&null!=this.Jl.onProgress&&(aa.upload.onprogress=function(f){e.Jl.onProgress(f)});aa.send(h);return f.promise},O1:function(e){this.Nw=e},ZX:function(e){this.password&&this.Yj.cn()?e(this.password):this.Nw(e)},n0:function(e){this.password=e||null;this.Yj.cn()||(this.$w(),this.Ze({t:"pages"}));return this.Yj.promise},nt:function(e){this.jB=e||null;this.Yj.cn()||(this.$w(),this.Ze({t:"pages"}));return this.Yj.promise},sI:function(e){e=
Object.assign(e,{uri:encodeURIComponent(this.VA)});this.jB&&(e.ext=this.jB);this.Ye&&(e.c=this.Ye);this.password&&(e.pswd=this.password);this.bI&&(e.cacheKey=this.bI);return e},Ze:function(e){e=this.sI(e);this.Nf.send(e)},tj:function(e){return e},n_:function(e){var f=this,h=e.data,w=e.err,x=e.t;if(w&&f.Nw&&"This document could not be decrypted with the given password"===w)f.Nw(function(e){f.n0(e)});else switch(x){case "upload":w?f.A3.reject(w):f.A3.resolve("Success");break;case "pages":w?f.Yj.reject(w):
aa(h,x,f.Yj)&&f.Yj.resolve(h);break;case "config":w?f.sm.reject(w):aa(h,x,f.sm)&&(h.id&&(f.id=h.id),h.serverVersion&&(f.O3=h.serverVersion,Object(y.f)("[WebViewer Server] server version: "+f.O3)),h.serverID?(f.by=h.serverID===f.JD&&f.bC?f.by+1:0,f.JD=h.serverID):f.by=0,f.bC=!1,f.sm.resolve(h));break;case "health":w?f.sm.reject(w):aa(h,x,f.sm)&&(e=h.unhealthy,this.dO&&(e=h.isDead),!f.k5&&e&&1>=f.by&&(f.bC=!0,f.qI().then(function(){f.xD()},function(){f.xD()})));break;case "pdf":h.url=f.Je+"../"+encodeURI(h.url)+
"?bcid="+this.Nf.clientId;w?f.He.reject(w):aa(h,x,f.He)&&f.He.resolve(h);break;case "docmod":h.url=f.Je+"../"+encodeURI(h.url)+"?bcid="+this.Nf.clientId;w?f.qx[h.rID].reject(w):aa(h,x,f.He)&&f.qx[h.rID].resolve(h);break;case "xod":if(w)this.$d&&this.$d.oh()&&this.$d.reject(w),this.Md&&this.Md.oh()&&this.Md.reject(w);else if(h.notFound)h.noCreate||this.$d&&this.$d.oh()&&this.$d.resolve(h),this.Md&&this.Md.oh()&&this.Md.resolve(h);else{h.url&&(h.url=f.Je+"../"+encodeURI(h.url)+"?bcid="+this.Nf.clientId);
if(!this.Md||this.Md.cn())this.Md=da(),this.Md.request={t:"xod",noCreate:!0};this.$d||(this.$d=da(),this.$d.request={t:"xod"});this.Md.resolve(h);this.$d.resolve(h)}break;case "annots":if(w)f.Kf.reject(w);else if(aa(h,x,f.Kf)){f.Kf.xN();var z=new XMLHttpRequest;e=f.Je+"../"+encodeURI(h.url);var ba=h.hasAppearance?e+".xodapp?bcid="+this.Nf.clientId:null;e+="?bcid="+this.Nf.clientId;z.open("GET",e);z.responseType="text";z.withCredentials=this.Pm();z.addEventListener("load",function(){z.readyState===
z.DONE&&200===z.status&&f.Kf.resolve({FE:z.response,PH:ba})});z.addEventListener("error",function(){f.Kf.reject(z.statusText+" "+JSON.stringify(z))});z.send()}break;case "image":var ca=this.zf[h.p];w?ca.promise.reject(w):aa(h,x,ca)&&(ca.result=h,ca.result.url=f.Je+"../"+encodeURI(ca.result.url)+"?bcid="+this.Nf.clientId,ca.resolve(ca.result));break;case "tiles":ca=h.rID;e=this.ef[ca];this.ef[ca]=null;this.kw.push(ca);if(w)e.reject(w);else if(aa(h,x,e)){for(w=0;w<h.tiles.length;w++)h.tiles[w]=f.Je+
"../"+encodeURI(h.tiles[w])+"?bcid="+this.Nf.clientId;e.resolve(h)}break;case "text":ca=this.Cg[h.p];if(w)ca.reject(w);else if(aa(h,x,ca)){ca.xN();var fa=new XMLHttpRequest;fa.open("GET",f.Je+"../"+encodeURI(h.url)+"?bcid="+this.Nf.clientId);fa.withCredentials=this.Pm();fa.addEventListener("load",function(){fa.readyState===fa.DONE&&200===fa.status&&(ca.result=JSON.parse(fa.response),ca.resolve(ca.result))});fa.addEventListener("error",function(e){ca.reject(fa.statusText+" "+JSON.stringify(e))});fa.send()}break;
case "progress":"loading"===h.t&&f.trigger(n.a.Events.DOCUMENT_LOADING_PROGRESS,[h.bytes,h.total])}},OJ:function(){this.$w();return this.sm.promise},oW:function(){this.Kf||(this.Kf=da(),this.Kf.request={t:"annots"},this.Ze(this.Kf.request));return this.Kf.promise},Xx:function(e){this.zf[e]||(this.zf[e]=da(),this.zf[e].request={t:"image",p:e},this.Ze(this.zf[e].request));return this.zf[e].promise},o0:function(e){this.Cg[e]||(this.Cg[e]=da(),this.Cg[e].request={t:"text",p:e},this.Ze(this.Cg[e].request));
return this.Cg[e].promise},p0:function(e,f,h,n){var r=this.ef.length;this.kw.length&&(r=this.kw.pop());this.ef[r]=da();this.ef[r].request={t:"tiles",p:e,z:f,r:h,size:n,rID:r};this.Ze(this.ef[r].request);return this.ef[r].promise},XM:function(){this.He||(this.He=da(),this.He.request={t:"pdf"},this.OA?this.He.resolve({url:this.VA}):this.Ze(this.He.request));return this.He.promise},eK:function(e){var f=this,h=new XMLHttpRequest,n=this.Je+"aul?id="+this.id+"&bcid="+this.Nf.clientId,w=new FormData,x={};
e.annots&&(x.annots="xfdf");e.watermark&&(x.watermark="png");e.redactions&&(x.redactions="redact");x={t:"docmod",reqID:this.b_++,parts:x};e.print&&(x.print=!0);var y=this.sI(x);w.append("msg",JSON.stringify(y));return Promise.all([e.annots,e.watermark,e.redactions].map(function(e){return Promise.resolve(e)})).then(function(e){var r=e[0],x=e[1],z=e[2];r&&w.append("annots",r);x&&w.append("watermark",e.watermark);z&&w.append("redactions",z);f.qx[y.reqID]=da();h.open("POST",n);h.withCredentials=f.Pm;
h.send(w);return f.qx[y.reqID].promise})},KK:function(){this.Md||(this.Md=da(),this.Md.request={t:"xod",noCreate:!0},this.Ze(this.Md.request));return this.Md.promise},q0:function(){this.$d||(this.$d=da(),this.$d.request={t:"xod"},this.Ze(this.$d.request));return this.$d.promise},wl:function(){return!0},request:function(){},GM:function(){},abort:function(){for(var e=0;e<this.ef.length;e++)this.ef[e]&&(this.ef[e].resolve(null),this.ef[e]=null,this.kw.push(e));this.close()},iy:function(e){this.Ye=this.Ye||
{};this.Ye.headers=e},G5:function(){return this.Ye?Object(z.omit)(this.Ye.headers,["Cookie","cookie"]):null},Tp:function(e){this.Ye=this.Ye||{};this.Ye.internal=this.Ye.internal||{};this.Ye.internal.withCredentials=e},Pm:function(){return this.Ye&&this.Ye.internal?this.Ye.internal.withCredentials:null},getFileData:function(){return Promise.reject()}});Object(ha.b)(ba);Object(h.a)(ba);Object(h.b)(ba);ca["default"]=ba},363:function(ha,ca,h){function ba(h){for(var z="",y=0;y<h;y++)z+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*
Math.random()));return z}function da(h,z,y){function w(f,e,h){function n(e){w().then(function(f){ca&&!da?setTimeout(function(){n(e)},1):f.send(JSON.stringify(e))})}function r(e,f,r){var w=window.createPromiseCapability(),ea=!1,ia=w;z=e;aa=f;ba=r;y=null;try{e=fa?ha+"/"+fa:ha+"/ws";e+="?bcid="+h;var ja=new WebSocket(e);ja.onopen=function(){w.resolve();ea=!0;w=null;ca=!1;x.resolve(ja);aa&&aa()};ja.onerror=function(e){ca=da=!0;w&&w.reject(e);y&&y.reject()};ja.onclose=function(){x=window.createPromiseCapability();
ca=!0;y||(y=window.createPromiseCapability());y.resolve();ba&&ba();z&&ea&&z({t:"health",data:{unhealthy:!0,isDead:!0}})};ja.onmessage=function(e){e&&e.data&&(e=JSON.parse(e.data),e.hb?n({hb:!0}):e.end?close():z(e))}}catch(Ba){w.reject(Ba),w=null}return ia.promise}function w(){ca&&z&&r(z);return x.promise}var x=window.createPromiseCapability(),y=null,z,aa,ba=null,ca=!1,da=!1,fa=e,ha=function(e){var f=e.indexOf("://"),h="ws://";0>f?f=0:(5===f&&(h="wss://"),f+=3);var n=e.lastIndexOf("/");0>n&&(n=e.length);
return h+e.slice(f,n)}(f);return{send:n,mE:r,eB:function(){return y?y.promise:w().then(function(e){y=window.createPromiseCapability();z=null;e.close();return y.promise})},clientId:h}}function f(f){var e=f.lastIndexOf("/");0>e&&(e=f.length);return f.slice(0,e)}var n=ba(8);return window.WebSocket&&!y?w(h,z,n):function(h,e,n){function r(e){(ca?ca.promise:Promise.resolve(ba)).then(function(f){var h=new XMLHttpRequest;f=aa?z+"/"+aa+"pf?id="+f:z+"/pf?id="+f;f+="&bcid="+n;var r=new FormData;r.append("data",
JSON.stringify(e));h.open("POST",f);h.withCredentials=!0;h.send(r)})}function w(){ba=0;ca||(ca=window.createPromiseCapability())}function x(){y=new XMLHttpRequest;var e=z+"/pf";e=0!==ba?e+("?id="+ba+"&uc="+ja):e+("?uc="+ja);ja++;y.open("GET",e,!0);y.withCredentials=!0;y.setRequestHeader("Cache-Control","no-cache");y.setRequestHeader("X-Requested-With","XMLHttpRequest");var f=y,h=!1;y.onreadystatechange=function(){a:if(3<=f.readyState&&!h){try{var e=f.responseText.length}catch(za){Object(fa.f)("caught exception");
break a}if(0<e)try{var n=f.responseText.split("\n");for(n[n.length-1]&&n.pop();0<n.length&&3>n[n.length-1].length;)"]"===n.pop()&&w();0<n.length&&3>n[0].length&&n.shift();for(e=0;e<n.length;++e)n[e].endsWith(",")&&(n[e]=n[e].substr(0,n[e].length-1));0===ba&&0<n.length&&(ba=JSON.parse(n.shift()).id,e=ca,ca=null,e.resolve(ba));var y;for(e=0;e<n.length;++e)(y=JSON.parse(n[e]))&&y.end?close():y&&y.hb&&y.id===ba?r({hb:!0}):Aa(y)}catch(za){}da||(h=!0,x())}};y.send()}var y,z=f(h),aa=e,ba=0,ca=window.createPromiseCapability(),
da=!1,ha=null,Aa=null,ja=0;return{send:r,mE:function(e,f,h){Aa=e;ha=h;da=!1;w();x();f&&f();return Promise.resolve()},eB:function(){w();Aa=null;da=!0;ha&&ha();y.abort();return Promise.resolve()},clientId:n}}(h,z,n)}h.d(ca,"a",function(){return da});var fa=h(1)}}]);}).call(this || window)
