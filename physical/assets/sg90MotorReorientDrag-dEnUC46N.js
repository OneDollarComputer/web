const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/occt-import-js-DCqKp0QJ.js","assets/__vite-browser-external-D7Ct-6yo.js"])))=>i.map(i=>d[i]);
var xv=Object.defineProperty;var Sv=(i,e,t)=>e in i?xv(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Rn=(i,e,t)=>Sv(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Mv="modulepreload",Ev=function(i){return"/physical/"+i},vu={},dd=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let c=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),h=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));r=c(t.map(d=>{if(d=Ev(d),d in vu)return;vu[d]=!0;const p=d.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${g}`))return;const m=document.createElement("link");if(m.rel=p?"stylesheet":Mv,p||(m.as="script"),m.crossOrigin="",m.href=d,h&&m.setAttribute("nonce",h),document.head.appendChild(m),p)return new Promise((_,x)=>{m.addEventListener("load",_),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return r.then(c=>{for(const l of c||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};var Bw=(async function(i={}){var pu,mu,gu;var e,t=i,n=typeof window=="object",r=typeof WorkerGlobalScope<"u",s=typeof process=="object"&&((pu=process.versions)==null?void 0:pu.node)&&process.type!="renderer",c=!n&&!s&&!r;if(s){const{createRequire:o}=await dd(async()=>{const{createRequire:a}=await import("./__vite-browser-external-D7Ct-6yo.js").then(u=>u._);return{createRequire:a}},[]);var l=o(import.meta.url)}var h="./this.program",d=(o,a)=>{throw a},p=import.meta.url,g="";function m(o){return t.locateFile?t.locateFile(o,g):g+o}var _,x;if(s){if(!(typeof process=="object"&&((mu=process.versions)==null?void 0:mu.node)&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var w=process.versions.node,S=w.split(".").slice(0,3);if(S=S[0]*1e4+S[1]*100+S[2].split("-")[0]*1,S<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+w+")");var v=l("fs");p.startsWith("file:")&&(g=l("path").dirname(l("url").fileURLToPath(p))+"/"),x=a=>{a=k(a)?new URL(a):a;var u=v.readFileSync(a);return D(Buffer.isBuffer(u)),u},_=async(a,u=!0)=>{a=k(a)?new URL(a):a;var f=v.readFileSync(a,u?void 0:"utf8");return D(u?Buffer.isBuffer(f):typeof f=="string"),f},process.argv.length>1&&(h=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),d=(a,u)=>{throw process.exitCode=a,u}}else if(c){if(typeof process=="object"&&((gu=process.versions)==null?void 0:gu.node)&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||r){try{g=new URL(".",p).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");r&&(x=o=>{var a=new XMLHttpRequest;return a.open("GET",o,!1),a.responseType="arraybuffer",a.send(null),new Uint8Array(a.response)}),_=async o=>{if(k(o))return new Promise((u,f)=>{var y=new XMLHttpRequest;y.open("GET",o,!0),y.responseType="arraybuffer",y.onload=()=>{if(y.status==200||y.status==0&&y.response){u(y.response);return}f(y.status)},y.onerror=f,y.send(null)});var a=await fetch(o,{credentials:"same-origin"});if(a.ok)return a.arrayBuffer();throw new Error(a.status+" : "+a.url)}}else throw new Error("environment detection error");var L=console.log.bind(console),T=console.error.bind(console);D(!c,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var A;typeof WebAssembly!="object"&&T("no native wasm support detected");var H=!1;function D(o,a){o||de("Assertion failed"+(a?": "+a:""))}var k=o=>o.startsWith("file://");function V(){var o=ha();D((o&3)==0),o==0&&(o+=4),Ae[o>>2]=34821223,Ae[o+4>>2]=2310721022,Ae[0]=1668509029}function I(){if(!H){var o=ha();o==0&&(o+=4);var a=Ae[o>>2],u=Ae[o+4>>2];(a!=34821223||u!=2310721022)&&de(`Stack overflow! Stack cookie has been overwritten at ${me(o)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${me(u)} ${me(a)}`),Ae[0]!=1668509029&&de("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class E extends Error{}class z extends E{}class ne extends E{constructor(a){super(a),this.excPtr=a;const u=eu(a);this.name=u[0],this.message=u[1]}}(()=>{var o=new Int16Array(1),a=new Int8Array(o.buffer);if(o[0]=25459,a[0]!==115||a[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function K(o){Object.getOwnPropertyDescriptor(t,o)||Object.defineProperty(t,o,{configurable:!0,set(){de(`Attempt to set \`Module.${o}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function B(o){return()=>D(!1,`call to '${o}' via reference taken before Wasm module initialization`)}function $(o){Object.getOwnPropertyDescriptor(t,o)&&de(`\`Module.${o}\` was supplied but \`${o}\` not included in INCOMING_MODULE_JS_API`)}function J(o){return o==="FS_createPath"||o==="FS_createDataFile"||o==="FS_createPreloadedFile"||o==="FS_unlink"||o==="addRunDependency"||o==="FS_createLazyFile"||o==="FS_createDevice"||o==="removeRunDependency"}function te(o,a){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,o)&&Object.defineProperty(globalThis,o,{configurable:!0,get(){a()}})}function j(o,a){te(o,()=>{Qe(`\`${o}\` is not longer defined by emscripten. ${a}`)})}j("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),j("asm","Please use wasmExports instead");function ve(o){te(o,()=>{var a=`\`${o}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,u=o;u.startsWith("_")||(u="$"+o),a+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${u}')`,J(o)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Qe(a)}),De(o)}function De(o){Object.getOwnPropertyDescriptor(t,o)||Object.defineProperty(t,o,{configurable:!0,get(){var a=`'${o}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;J(o)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),de(a)}})}var Fe,Ze,it,oe,_e,Le,ye,pe,Ae,Je,rt,fe,we,F=!1;function be(){var o=it.buffer;oe=new Int8Array(o),Le=new Int16Array(o),_e=new Uint8Array(o),ye=new Uint16Array(o),pe=new Int32Array(o),Ae=new Uint32Array(o),Je=new Float32Array(o),rt=new Float64Array(o),fe=new BigInt64Array(o),we=new BigUint64Array(o)}D(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function xe(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Ue(t.preRun.shift());K("preRun"),pt(W)}function Be(){D(!F),F=!0,I(),!t.noFSInit&&!b.initialized&&b.init(),Ri.__wasm_call_ctors(),b.ignorePermissions=!1}function Pe(){if(I(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)wt(t.postRun.shift());K("postRun"),pt(st)}var Ke=0,ke=null,U={},P=null;function ie(o){var a;Ke++,(a=t.monitorRunDependencies)==null||a.call(t,Ke),o?(D(!U[o]),U[o]=1,P===null&&typeof setInterval<"u"&&(P=setInterval(()=>{if(H){clearInterval(P),P=null;return}var u=!1;for(var f in U)u||(u=!0,T("still waiting on run dependencies:")),T(`dependency: ${f}`);u&&T("(end of list)")},1e4))):T("warning: run dependency added without ID")}function he(o){var u;if(Ke--,(u=t.monitorRunDependencies)==null||u.call(t,Ke),o?(D(U[o]),delete U[o]):T("warning: run dependency removed without ID"),Ke==0&&(P!==null&&(clearInterval(P),P=null),ke)){var a=ke;ke=null,a()}}function de(o){var u;(u=t.onAbort)==null||u.call(t,o),o="Aborted("+o+")",T(o),H=!0;var a=new WebAssembly.RuntimeError(o);throw Ze==null||Ze(a),a}function ce(o,a){return(...u)=>{D(F,`native function \`${o}\` called before runtime initialization`);var f=Ri[o];return D(f,`exported native function \`${o}\` not found`),D(u.length<=a,`native function \`${o}\` called with ${u.length} args but expects ${a}`),f(...u)}}var Ge;function Ie(){return t.locateFile?m("mujoco.wasm"):new URL("/physical/assets/mujoco-D9UjOFNX.wasm",import.meta.url).href}function He(o){if(o==Ge&&A)return new Uint8Array(A);if(x)return x(o);throw"both async and sync fetching of the wasm failed"}async function ft(o){if(!A)try{var a=await _(o);return new Uint8Array(a)}catch{}return He(o)}async function Ce(o,a){try{var u=await ft(o),f=await WebAssembly.instantiate(u,a);return f}catch(y){T(`failed to asynchronously prepare wasm: ${y}`),k(Ge)&&T(`warning: Loading from a file URI (${Ge}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),de(y)}}async function We(o,a,u){if(!o&&typeof WebAssembly.instantiateStreaming=="function"&&!k(a)&&!s)try{var f=fetch(a,{credentials:"same-origin"}),y=await WebAssembly.instantiateStreaming(f,u);return y}catch(M){T(`wasm streaming compile failed: ${M}`),T("falling back to ArrayBuffer instantiation")}return Ce(a,u)}function et(){return{env:du,wasi_snapshot_preview1:du}}async function nt(){function o(C,R){return Ri=C.exports,it=Ri.memory,D(it,"memory not found in wasm exports"),be(),Cs=Ri.__indirect_function_table,D(Cs,"table not found in wasm exports"),Em(Ri),he("wasm-instantiate"),Ri}ie("wasm-instantiate");var a=t;function u(C){return D(t===a,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),a=null,o(C.instance)}var f=et();if(t.instantiateWasm)return new Promise((C,R)=>{try{t.instantiateWasm(f,(O,X)=>{C(o(O,X))})}catch(O){T(`Module.instantiateWasm callback failed with error: ${O}`),R(O)}});Ge??(Ge=Ie());var y=await We(A,Ge,f),M=u(y);return M}class Xe{constructor(a){Rn(this,"name","ExitStatus");this.message=`Program terminated with exit(${a})`,this.status=a}}var pt=o=>{for(;o.length>0;)o.shift()(t)},st=[],wt=o=>st.push(o),W=[],Ue=o=>W.push(o),ae=!0,me=o=>(D(typeof o=="number"),o>>>=0,"0x"+o.toString(16).padStart(8,"0")),ee=o=>ou(o),Q=()=>cu(),Qe=o=>{Qe.shown||(Qe.shown={}),Qe.shown[o]||(Qe.shown[o]=1,s&&(o="warning: "+o),T(o))},It=typeof TextDecoder<"u"?new TextDecoder:void 0,Nt=(o,a=0,u=NaN)=>{for(var f=a+u,y=a;o[y]&&!(y>=f);)++y;if(y-a>16&&o.buffer&&It)return It.decode(o.subarray(a,y));for(var M="";a<y;){var C=o[a++];if(!(C&128)){M+=String.fromCharCode(C);continue}var R=o[a++]&63;if((C&224)==192){M+=String.fromCharCode((C&31)<<6|R);continue}var O=o[a++]&63;if((C&240)==224?C=(C&15)<<12|R<<6|O:((C&248)!=240&&Qe("Invalid UTF-8 leading byte "+me(C)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),C=(C&7)<<18|R<<12|O<<6|o[a++]&63),C<65536)M+=String.fromCharCode(C);else{var X=C-65536;M+=String.fromCharCode(55296|X>>10,56320|X&1023)}}return M},dt=(o,a)=>(D(typeof o=="number",`UTF8ToString expects a number (got ${typeof o})`),o?Nt(_e,o,a):""),dn=(o,a,u,f)=>de(`Assertion failed: ${dt(o)}, at: `+[a?dt(a):"unknown filename",u,f?dt(f):"unknown function"]),kt=[],Mi=0,ps=o=>{var a=new Ei(o);return a.get_caught()||(a.set_caught(!0),Mi--),a.set_rethrown(!1),kt.push(a),Fs(o),hu(o)},$n=()=>{if(!kt.length)return 0;var o=kt[kt.length-1];return Fs(o.excPtr),o.excPtr},nn=0,ms=()=>{Me(0,0),D(kt.length>0);var o=kt.pop();da(o.excPtr),nn=0};class Ei{constructor(a){this.excPtr=a,this.ptr=a-24}set_type(a){Ae[this.ptr+4>>2]=a}get_type(){return Ae[this.ptr+4>>2]}set_destructor(a){Ae[this.ptr+8>>2]=a}get_destructor(){return Ae[this.ptr+8>>2]}set_caught(a){a=a?1:0,oe[this.ptr+12]=a}get_caught(){return oe[this.ptr+12]!=0}set_rethrown(a){a=a?1:0,oe[this.ptr+13]=a}get_rethrown(){return oe[this.ptr+13]!=0}init(a,u){this.set_adjusted_ptr(0),this.set_type(a),this.set_destructor(u)}set_adjusted_ptr(a){Ae[this.ptr+16>>2]=a}get_adjusted_ptr(){return Ae[this.ptr+16>>2]}}var jn=o=>ru(o),Zi=o=>{var a=nn==null?void 0:nn.excPtr;if(!a)return jn(0),0;var u=new Ei(a);u.set_adjusted_ptr(a);var f=u.get_type();if(!f)return jn(0),a;for(var y of o){if(y===0||y===f)break;var M=u.ptr+16;if(uu(y,f,M))return jn(y),a}return jn(f),a},Ki=()=>Zi([]),gs=o=>Zi([o]),_s=(o,a)=>Zi([o,a]),vs=()=>{var o=kt.pop();o||de("no exception to throw");var a=o.excPtr;throw o.get_rethrown()||(kt.push(o),o.set_rethrown(!0),o.set_caught(!1),Mi++),nn=new ne(a),nn},Jo=o=>{if(o){var a=new Ei(o);kt.push(a),a.set_rethrown(!0),vs()}},Qo=(o,a,u)=>{var f=new Ei(o);throw f.init(a,u),nn=new ne(o),Mi++,nn},N=()=>Mi,Y=o=>{throw nn||(nn=new ne(o)),nn},Z={isAbs:o=>o.charAt(0)==="/",splitPath:o=>{var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return a.exec(o).slice(1)},normalizeArray:(o,a)=>{for(var u=0,f=o.length-1;f>=0;f--){var y=o[f];y==="."?o.splice(f,1):y===".."?(o.splice(f,1),u++):u&&(o.splice(f,1),u--)}if(a)for(;u;u--)o.unshift("..");return o},normalize:o=>{var a=Z.isAbs(o),u=o.slice(-1)==="/";return o=Z.normalizeArray(o.split("/").filter(f=>!!f),!a).join("/"),!o&&!a&&(o="."),o&&u&&(o+="/"),(a?"/":"")+o},dirname:o=>{var a=Z.splitPath(o),u=a[0],f=a[1];return!u&&!f?".":(f&&(f=f.slice(0,-1)),u+f)},basename:o=>o&&o.match(/([^\/]+|\/)\/*$/)[1],join:(...o)=>Z.normalize(o.join("/")),join2:(o,a)=>Z.normalize(o+"/"+a)},se=()=>{if(s){var o=l("crypto");return a=>o.randomFillSync(a)}return a=>crypto.getRandomValues(a)},q=o=>{(q=se())(o)},Te={resolve:(...o)=>{for(var a="",u=!1,f=o.length-1;f>=-1&&!u;f--){var y=f>=0?o[f]:b.cwd();if(typeof y!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!y)return"";a=y+"/"+a,u=Z.isAbs(y)}return a=Z.normalizeArray(a.split("/").filter(M=>!!M),!u).join("/"),(u?"/":"")+a||"."},relative:(o,a)=>{o=Te.resolve(o).slice(1),a=Te.resolve(a).slice(1);function u(X){for(var re=0;re<X.length&&X[re]==="";re++);for(var le=X.length-1;le>=0&&X[le]==="";le--);return re>le?[]:X.slice(re,le-re+1)}for(var f=u(o.split("/")),y=u(a.split("/")),M=Math.min(f.length,y.length),C=M,R=0;R<M;R++)if(f[R]!==y[R]){C=R;break}for(var O=[],R=C;R<f.length;R++)O.push("..");return O=O.concat(y.slice(C)),O.join("/")}},Oe=[],$e=o=>{for(var a=0,u=0;u<o.length;++u){var f=o.charCodeAt(u);f<=127?a++:f<=2047?a+=2:f>=55296&&f<=57343?(a+=4,++u):a+=3}return a},je=(o,a,u,f)=>{if(D(typeof o=="string",`stringToUTF8Array expects a string (got ${typeof o})`),!(f>0))return 0;for(var y=u,M=u+f-1,C=0;C<o.length;++C){var R=o.codePointAt(C);if(R<=127){if(u>=M)break;a[u++]=R}else if(R<=2047){if(u+1>=M)break;a[u++]=192|R>>6,a[u++]=128|R&63}else if(R<=65535){if(u+2>=M)break;a[u++]=224|R>>12,a[u++]=128|R>>6&63,a[u++]=128|R&63}else{if(u+3>=M)break;R>1114111&&Qe("Invalid Unicode code point "+me(R)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),a[u++]=240|R>>18,a[u++]=128|R>>12&63,a[u++]=128|R>>6&63,a[u++]=128|R&63,C++}}return a[u]=0,u-y},tt=(o,a,u)=>{var f=$e(o)+1,y=new Array(f),M=je(o,y,0,y.length);return y.length=M,y},ot=()=>{if(!Oe.length){var o=null;if(s){var a=256,u=Buffer.alloc(a),f=0,y=process.stdin.fd;try{f=v.readSync(y,u,0,a)}catch(M){if(M.toString().includes("EOF"))f=0;else throw M}f>0&&(o=u.slice(0,f).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(o=window.prompt("Input: "),o!==null&&(o+=`
`));if(!o)return null;Oe=tt(o)}return Oe.shift()},Ve={ttys:[],init(){},shutdown(){},register(o,a){Ve.ttys[o]={input:[],output:[],ops:a},b.registerDevice(o,Ve.stream_ops)},stream_ops:{open(o){var a=Ve.ttys[o.node.rdev];if(!a)throw new b.ErrnoError(43);o.tty=a,o.seekable=!1},close(o){o.tty.ops.fsync(o.tty)},fsync(o){o.tty.ops.fsync(o.tty)},read(o,a,u,f,y){if(!o.tty||!o.tty.ops.get_char)throw new b.ErrnoError(60);for(var M=0,C=0;C<f;C++){var R;try{R=o.tty.ops.get_char(o.tty)}catch{throw new b.ErrnoError(29)}if(R===void 0&&M===0)throw new b.ErrnoError(6);if(R==null)break;M++,a[u+C]=R}return M&&(o.node.atime=Date.now()),M},write(o,a,u,f,y){if(!o.tty||!o.tty.ops.put_char)throw new b.ErrnoError(60);try{for(var M=0;M<f;M++)o.tty.ops.put_char(o.tty,a[u+M])}catch{throw new b.ErrnoError(29)}return f&&(o.node.mtime=o.node.ctime=Date.now()),M}},default_tty_ops:{get_char(o){return ot()},put_char(o,a){a===null||a===10?(L(Nt(o.output)),o.output=[]):a!=0&&o.output.push(a)},fsync(o){var a;((a=o.output)==null?void 0:a.length)>0&&(L(Nt(o.output)),o.output=[])},ioctl_tcgets(o){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(o,a,u){return 0},ioctl_tiocgwinsz(o){return[24,80]}},default_tty1_ops:{put_char(o,a){a===null||a===10?(T(Nt(o.output)),o.output=[]):a!=0&&o.output.push(a)},fsync(o){var a;((a=o.output)==null?void 0:a.length)>0&&(T(Nt(o.output)),o.output=[])}}},gt=o=>{de("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},ze={ops_table:null,mount(o){return ze.createNode(null,"/",16895,0)},createNode(o,a,u,f){if(b.isBlkdev(u)||b.isFIFO(u))throw new b.ErrnoError(63);ze.ops_table||(ze.ops_table={dir:{node:{getattr:ze.node_ops.getattr,setattr:ze.node_ops.setattr,lookup:ze.node_ops.lookup,mknod:ze.node_ops.mknod,rename:ze.node_ops.rename,unlink:ze.node_ops.unlink,rmdir:ze.node_ops.rmdir,readdir:ze.node_ops.readdir,symlink:ze.node_ops.symlink},stream:{llseek:ze.stream_ops.llseek}},file:{node:{getattr:ze.node_ops.getattr,setattr:ze.node_ops.setattr},stream:{llseek:ze.stream_ops.llseek,read:ze.stream_ops.read,write:ze.stream_ops.write,mmap:ze.stream_ops.mmap,msync:ze.stream_ops.msync}},link:{node:{getattr:ze.node_ops.getattr,setattr:ze.node_ops.setattr,readlink:ze.node_ops.readlink},stream:{}},chrdev:{node:{getattr:ze.node_ops.getattr,setattr:ze.node_ops.setattr},stream:b.chrdev_stream_ops}});var y=b.createNode(o,a,u,f);return b.isDir(y.mode)?(y.node_ops=ze.ops_table.dir.node,y.stream_ops=ze.ops_table.dir.stream,y.contents={}):b.isFile(y.mode)?(y.node_ops=ze.ops_table.file.node,y.stream_ops=ze.ops_table.file.stream,y.usedBytes=0,y.contents=null):b.isLink(y.mode)?(y.node_ops=ze.ops_table.link.node,y.stream_ops=ze.ops_table.link.stream):b.isChrdev(y.mode)&&(y.node_ops=ze.ops_table.chrdev.node,y.stream_ops=ze.ops_table.chrdev.stream),y.atime=y.mtime=y.ctime=Date.now(),o&&(o.contents[a]=y,o.atime=o.mtime=o.ctime=y.atime),y},getFileDataAsTypedArray(o){return o.contents?o.contents.subarray?o.contents.subarray(0,o.usedBytes):new Uint8Array(o.contents):new Uint8Array(0)},expandFileStorage(o,a){var u=o.contents?o.contents.length:0;if(!(u>=a)){var f=1024*1024;a=Math.max(a,u*(u<f?2:1.125)>>>0),u!=0&&(a=Math.max(a,256));var y=o.contents;o.contents=new Uint8Array(a),o.usedBytes>0&&o.contents.set(y.subarray(0,o.usedBytes),0)}},resizeFileStorage(o,a){if(o.usedBytes!=a)if(a==0)o.contents=null,o.usedBytes=0;else{var u=o.contents;o.contents=new Uint8Array(a),u&&o.contents.set(u.subarray(0,Math.min(a,o.usedBytes))),o.usedBytes=a}},node_ops:{getattr(o){var a={};return a.dev=b.isChrdev(o.mode)?o.id:1,a.ino=o.id,a.mode=o.mode,a.nlink=1,a.uid=0,a.gid=0,a.rdev=o.rdev,b.isDir(o.mode)?a.size=4096:b.isFile(o.mode)?a.size=o.usedBytes:b.isLink(o.mode)?a.size=o.link.length:a.size=0,a.atime=new Date(o.atime),a.mtime=new Date(o.mtime),a.ctime=new Date(o.ctime),a.blksize=4096,a.blocks=Math.ceil(a.size/a.blksize),a},setattr(o,a){for(const u of["mode","atime","mtime","ctime"])a[u]!=null&&(o[u]=a[u]);a.size!==void 0&&ze.resizeFileStorage(o,a.size)},lookup(o,a){throw new b.ErrnoError(44)},mknod(o,a,u,f){return ze.createNode(o,a,u,f)},rename(o,a,u){var f;try{f=b.lookupNode(a,u)}catch{}if(f){if(b.isDir(o.mode))for(var y in f.contents)throw new b.ErrnoError(55);b.hashRemoveNode(f)}delete o.parent.contents[o.name],a.contents[u]=o,o.name=u,a.ctime=a.mtime=o.parent.ctime=o.parent.mtime=Date.now()},unlink(o,a){delete o.contents[a],o.ctime=o.mtime=Date.now()},rmdir(o,a){var u=b.lookupNode(o,a);for(var f in u.contents)throw new b.ErrnoError(55);delete o.contents[a],o.ctime=o.mtime=Date.now()},readdir(o){return[".","..",...Object.keys(o.contents)]},symlink(o,a,u){var f=ze.createNode(o,a,41471,0);return f.link=u,f},readlink(o){if(!b.isLink(o.mode))throw new b.ErrnoError(28);return o.link}},stream_ops:{read(o,a,u,f,y){var M=o.node.contents;if(y>=o.node.usedBytes)return 0;var C=Math.min(o.node.usedBytes-y,f);if(D(C>=0),C>8&&M.subarray)a.set(M.subarray(y,y+C),u);else for(var R=0;R<C;R++)a[u+R]=M[y+R];return C},write(o,a,u,f,y,M){if(D(!(a instanceof ArrayBuffer)),a.buffer===oe.buffer&&(M=!1),!f)return 0;var C=o.node;if(C.mtime=C.ctime=Date.now(),a.subarray&&(!C.contents||C.contents.subarray)){if(M)return D(y===0,"canOwn must imply no weird position inside the file"),C.contents=a.subarray(u,u+f),C.usedBytes=f,f;if(C.usedBytes===0&&y===0)return C.contents=a.slice(u,u+f),C.usedBytes=f,f;if(y+f<=C.usedBytes)return C.contents.set(a.subarray(u,u+f),y),f}if(ze.expandFileStorage(C,y+f),C.contents.subarray&&a.subarray)C.contents.set(a.subarray(u,u+f),y);else for(var R=0;R<f;R++)C.contents[y+R]=a[u+R];return C.usedBytes=Math.max(C.usedBytes,y+f),f},llseek(o,a,u){var f=a;if(u===1?f+=o.position:u===2&&b.isFile(o.node.mode)&&(f+=o.node.usedBytes),f<0)throw new b.ErrnoError(28);return f},mmap(o,a,u,f,y){if(!b.isFile(o.node.mode))throw new b.ErrnoError(43);var M,C,R=o.node.contents;if(!(y&2)&&R&&R.buffer===oe.buffer)C=!1,M=R.byteOffset;else{if(C=!0,M=gt(),!M)throw new b.ErrnoError(48);R&&((u>0||u+a<R.length)&&(R.subarray?R=R.subarray(u,u+a):R=Array.prototype.slice.call(R,u,u+a)),oe.set(R,M))}return{ptr:M,allocated:C}},msync(o,a,u,f,y){return ze.stream_ops.write(o,a,0,f,u,!1),0}}},Pt=async o=>{var a=await _(o);return D(a,`Loading data file "${o}" failed (no arrayBuffer).`),new Uint8Array(a)},Yt=(...o)=>b.createDataFile(...o),Mt=o=>{for(var a=o;;){if(!U[o])return o;o=a+Math.random()}},Ye=[],An=(o,a,u,f)=>{typeof Browser<"u"&&Browser.init();var y=!1;return Ye.forEach(M=>{y||M.canHandle(a)&&(M.handle(o,a,u,f),y=!0)}),y},yt=(o,a,u,f,y,M,C,R,O,X)=>{var re=a?Te.resolve(Z.join2(o,a)):o,le=Mt(`cp ${re}`);function ge(ue){function Se(qe){X==null||X(),R||Yt(o,a,qe,f,y,O),M==null||M(),he(le)}An(ue,re,Se,()=>{C==null||C(),he(le)})||Se(ue)}ie(le),typeof u=="string"?Pt(u).then(ge,C):ge(u)},fn=o=>{var a={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},u=a[o];if(typeof u>"u")throw new Error(`Unknown file open mode: ${o}`);return u},Fn=(o,a)=>{var u=0;return o&&(u|=365),a&&(u|=146),u},rn=o=>dt(iu(o)),ai={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},b={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{constructor(a){super(F?rn(a):"");Rn(this,"name","ErrnoError");this.errno=a;for(var u in ai)if(ai[u]===a){this.code=u;break}}},FSStream:class{constructor(){Rn(this,"shared",{})}get object(){return this.node}set object(o){this.node=o}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(o){this.shared.flags=o}get position(){return this.shared.position}set position(o){this.shared.position=o}},FSNode:class{constructor(o,a,u,f){Rn(this,"node_ops",{});Rn(this,"stream_ops",{});Rn(this,"readMode",365);Rn(this,"writeMode",146);Rn(this,"mounted",null);o||(o=this),this.parent=o,this.mount=o.mount,this.id=b.nextInode++,this.name=a,this.mode=u,this.rdev=f,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(o){o?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(o){o?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return b.isDir(this.mode)}get isDevice(){return b.isChrdev(this.mode)}},lookupPath(o,a={}){if(!o)throw new b.ErrnoError(44);a.follow_mount??(a.follow_mount=!0),Z.isAbs(o)||(o=b.cwd()+"/"+o);e:for(var u=0;u<40;u++){for(var f=o.split("/").filter(X=>!!X),y=b.root,M="/",C=0;C<f.length;C++){var R=C===f.length-1;if(R&&a.parent)break;if(f[C]!=="."){if(f[C]===".."){if(M=Z.dirname(M),b.isRoot(y)){o=M+"/"+f.slice(C+1).join("/");continue e}else y=y.parent;continue}M=Z.join2(M,f[C]);try{y=b.lookupNode(y,f[C])}catch(X){if((X==null?void 0:X.errno)===44&&R&&a.noent_okay)return{path:M};throw X}if(b.isMountpoint(y)&&(!R||a.follow_mount)&&(y=y.mounted.root),b.isLink(y.mode)&&(!R||a.follow)){if(!y.node_ops.readlink)throw new b.ErrnoError(52);var O=y.node_ops.readlink(y);Z.isAbs(O)||(O=Z.dirname(M)+"/"+O),o=O+"/"+f.slice(C+1).join("/");continue e}}}return{path:M,node:y}}throw new b.ErrnoError(32)},getPath(o){for(var a;;){if(b.isRoot(o)){var u=o.mount.mountpoint;return a?u[u.length-1]!=="/"?`${u}/${a}`:u+a:u}a=a?`${o.name}/${a}`:o.name,o=o.parent}},hashName(o,a){for(var u=0,f=0;f<a.length;f++)u=(u<<5)-u+a.charCodeAt(f)|0;return(o+u>>>0)%b.nameTable.length},hashAddNode(o){var a=b.hashName(o.parent.id,o.name);o.name_next=b.nameTable[a],b.nameTable[a]=o},hashRemoveNode(o){var a=b.hashName(o.parent.id,o.name);if(b.nameTable[a]===o)b.nameTable[a]=o.name_next;else for(var u=b.nameTable[a];u;){if(u.name_next===o){u.name_next=o.name_next;break}u=u.name_next}},lookupNode(o,a){var u=b.mayLookup(o);if(u)throw new b.ErrnoError(u);for(var f=b.hashName(o.id,a),y=b.nameTable[f];y;y=y.name_next){var M=y.name;if(y.parent.id===o.id&&M===a)return y}return b.lookup(o,a)},createNode(o,a,u,f){D(typeof o=="object");var y=new b.FSNode(o,a,u,f);return b.hashAddNode(y),y},destroyNode(o){b.hashRemoveNode(o)},isRoot(o){return o===o.parent},isMountpoint(o){return!!o.mounted},isFile(o){return(o&61440)===32768},isDir(o){return(o&61440)===16384},isLink(o){return(o&61440)===40960},isChrdev(o){return(o&61440)===8192},isBlkdev(o){return(o&61440)===24576},isFIFO(o){return(o&61440)===4096},isSocket(o){return(o&49152)===49152},flagsToPermissionString(o){var a=["r","w","rw"][o&3];return o&512&&(a+="w"),a},nodePermissions(o,a){return b.ignorePermissions?0:a.includes("r")&&!(o.mode&292)||a.includes("w")&&!(o.mode&146)||a.includes("x")&&!(o.mode&73)?2:0},mayLookup(o){if(!b.isDir(o.mode))return 54;var a=b.nodePermissions(o,"x");return a||(o.node_ops.lookup?0:2)},mayCreate(o,a){if(!b.isDir(o.mode))return 54;try{var u=b.lookupNode(o,a);return 20}catch{}return b.nodePermissions(o,"wx")},mayDelete(o,a,u){var f;try{f=b.lookupNode(o,a)}catch(M){return M.errno}var y=b.nodePermissions(o,"wx");if(y)return y;if(u){if(!b.isDir(f.mode))return 54;if(b.isRoot(f)||b.getPath(f)===b.cwd())return 10}else if(b.isDir(f.mode))return 31;return 0},mayOpen(o,a){return o?b.isLink(o.mode)?32:b.isDir(o.mode)&&(b.flagsToPermissionString(a)!=="r"||a&576)?31:b.nodePermissions(o,b.flagsToPermissionString(a)):44},checkOpExists(o,a){if(!o)throw new b.ErrnoError(a);return o},MAX_OPEN_FDS:4096,nextfd(){for(var o=0;o<=b.MAX_OPEN_FDS;o++)if(!b.streams[o])return o;throw new b.ErrnoError(33)},getStreamChecked(o){var a=b.getStream(o);if(!a)throw new b.ErrnoError(8);return a},getStream:o=>b.streams[o],createStream(o,a=-1){return D(a>=-1),o=Object.assign(new b.FSStream,o),a==-1&&(a=b.nextfd()),o.fd=a,b.streams[a]=o,o},closeStream(o){b.streams[o]=null},dupStream(o,a=-1){var f,y;var u=b.createStream(o,a);return(y=(f=u.stream_ops)==null?void 0:f.dup)==null||y.call(f,u),u},doSetAttr(o,a,u){var f=o==null?void 0:o.stream_ops.setattr,y=f?o:a;f??(f=a.node_ops.setattr),b.checkOpExists(f,63),f(y,u)},chrdev_stream_ops:{open(o){var u,f;var a=b.getDevice(o.node.rdev);o.stream_ops=a.stream_ops,(f=(u=o.stream_ops).open)==null||f.call(u,o)},llseek(){throw new b.ErrnoError(70)}},major:o=>o>>8,minor:o=>o&255,makedev:(o,a)=>o<<8|a,registerDevice(o,a){b.devices[o]={stream_ops:a}},getDevice:o=>b.devices[o],getMounts(o){for(var a=[],u=[o];u.length;){var f=u.pop();a.push(f),u.push(...f.mounts)}return a},syncfs(o,a){typeof o=="function"&&(a=o,o=!1),b.syncFSRequests++,b.syncFSRequests>1&&T(`warning: ${b.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var u=b.getMounts(b.root.mount),f=0;function y(C){return D(b.syncFSRequests>0),b.syncFSRequests--,a(C)}function M(C){if(C)return M.errored?void 0:(M.errored=!0,y(C));++f>=u.length&&y(null)}u.forEach(C=>{if(!C.type.syncfs)return M(null);C.type.syncfs(C,o,M)})},mount(o,a,u){if(typeof o=="string")throw o;var f=u==="/",y=!u,M;if(f&&b.root)throw new b.ErrnoError(10);if(!f&&!y){var C=b.lookupPath(u,{follow_mount:!1});if(u=C.path,M=C.node,b.isMountpoint(M))throw new b.ErrnoError(10);if(!b.isDir(M.mode))throw new b.ErrnoError(54)}var R={type:o,opts:a,mountpoint:u,mounts:[]},O=o.mount(R);return O.mount=R,R.root=O,f?b.root=O:M&&(M.mounted=R,M.mount&&M.mount.mounts.push(R)),O},unmount(o){var a=b.lookupPath(o,{follow_mount:!1});if(!b.isMountpoint(a.node))throw new b.ErrnoError(28);var u=a.node,f=u.mounted,y=b.getMounts(f);Object.keys(b.nameTable).forEach(C=>{for(var R=b.nameTable[C];R;){var O=R.name_next;y.includes(R.mount)&&b.destroyNode(R),R=O}}),u.mounted=null;var M=u.mount.mounts.indexOf(f);D(M!==-1),u.mount.mounts.splice(M,1)},lookup(o,a){return o.node_ops.lookup(o,a)},mknod(o,a,u){var f=b.lookupPath(o,{parent:!0}),y=f.node,M=Z.basename(o);if(!M)throw new b.ErrnoError(28);if(M==="."||M==="..")throw new b.ErrnoError(20);var C=b.mayCreate(y,M);if(C)throw new b.ErrnoError(C);if(!y.node_ops.mknod)throw new b.ErrnoError(63);return y.node_ops.mknod(y,M,a,u)},statfs(o){return b.statfsNode(b.lookupPath(o,{follow:!0}).node)},statfsStream(o){return b.statfsNode(o.node)},statfsNode(o){var a={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:b.nextInode,ffree:b.nextInode-1,fsid:42,flags:2,namelen:255};return o.node_ops.statfs&&Object.assign(a,o.node_ops.statfs(o.mount.opts.root)),a},create(o,a=438){return a&=4095,a|=32768,b.mknod(o,a,0)},mkdir(o,a=511){return a&=1023,a|=16384,b.mknod(o,a,0)},mkdirTree(o,a){var u=o.split("/"),f="";for(var y of u)if(y){(f||Z.isAbs(o))&&(f+="/"),f+=y;try{b.mkdir(f,a)}catch(M){if(M.errno!=20)throw M}}},mkdev(o,a,u){return typeof u>"u"&&(u=a,a=438),a|=8192,b.mknod(o,a,u)},symlink(o,a){if(!Te.resolve(o))throw new b.ErrnoError(44);var u=b.lookupPath(a,{parent:!0}),f=u.node;if(!f)throw new b.ErrnoError(44);var y=Z.basename(a),M=b.mayCreate(f,y);if(M)throw new b.ErrnoError(M);if(!f.node_ops.symlink)throw new b.ErrnoError(63);return f.node_ops.symlink(f,y,o)},rename(o,a){var u=Z.dirname(o),f=Z.dirname(a),y=Z.basename(o),M=Z.basename(a),C,R,O;if(C=b.lookupPath(o,{parent:!0}),R=C.node,C=b.lookupPath(a,{parent:!0}),O=C.node,!R||!O)throw new b.ErrnoError(44);if(R.mount!==O.mount)throw new b.ErrnoError(75);var X=b.lookupNode(R,y),re=Te.relative(o,f);if(re.charAt(0)!==".")throw new b.ErrnoError(28);if(re=Te.relative(a,u),re.charAt(0)!==".")throw new b.ErrnoError(55);var le;try{le=b.lookupNode(O,M)}catch{}if(X!==le){var ge=b.isDir(X.mode),ue=b.mayDelete(R,y,ge);if(ue)throw new b.ErrnoError(ue);if(ue=le?b.mayDelete(O,M,ge):b.mayCreate(O,M),ue)throw new b.ErrnoError(ue);if(!R.node_ops.rename)throw new b.ErrnoError(63);if(b.isMountpoint(X)||le&&b.isMountpoint(le))throw new b.ErrnoError(10);if(O!==R&&(ue=b.nodePermissions(R,"w"),ue))throw new b.ErrnoError(ue);b.hashRemoveNode(X);try{R.node_ops.rename(X,O,M),X.parent=O}catch(Se){throw Se}finally{b.hashAddNode(X)}}},rmdir(o){var a=b.lookupPath(o,{parent:!0}),u=a.node,f=Z.basename(o),y=b.lookupNode(u,f),M=b.mayDelete(u,f,!0);if(M)throw new b.ErrnoError(M);if(!u.node_ops.rmdir)throw new b.ErrnoError(63);if(b.isMountpoint(y))throw new b.ErrnoError(10);u.node_ops.rmdir(u,f),b.destroyNode(y)},readdir(o){var a=b.lookupPath(o,{follow:!0}),u=a.node,f=b.checkOpExists(u.node_ops.readdir,54);return f(u)},unlink(o){var a=b.lookupPath(o,{parent:!0}),u=a.node;if(!u)throw new b.ErrnoError(44);var f=Z.basename(o),y=b.lookupNode(u,f),M=b.mayDelete(u,f,!1);if(M)throw new b.ErrnoError(M);if(!u.node_ops.unlink)throw new b.ErrnoError(63);if(b.isMountpoint(y))throw new b.ErrnoError(10);u.node_ops.unlink(u,f),b.destroyNode(y)},readlink(o){var a=b.lookupPath(o),u=a.node;if(!u)throw new b.ErrnoError(44);if(!u.node_ops.readlink)throw new b.ErrnoError(28);return u.node_ops.readlink(u)},stat(o,a){var u=b.lookupPath(o,{follow:!a}),f=u.node,y=b.checkOpExists(f.node_ops.getattr,63);return y(f)},fstat(o){var a=b.getStreamChecked(o),u=a.node,f=a.stream_ops.getattr,y=f?a:u;return f??(f=u.node_ops.getattr),b.checkOpExists(f,63),f(y)},lstat(o){return b.stat(o,!0)},doChmod(o,a,u,f){b.doSetAttr(o,a,{mode:u&4095|a.mode&-4096,ctime:Date.now(),dontFollow:f})},chmod(o,a,u){var f;if(typeof o=="string"){var y=b.lookupPath(o,{follow:!u});f=y.node}else f=o;b.doChmod(null,f,a,u)},lchmod(o,a){b.chmod(o,a,!0)},fchmod(o,a){var u=b.getStreamChecked(o);b.doChmod(u,u.node,a,!1)},doChown(o,a,u){b.doSetAttr(o,a,{timestamp:Date.now(),dontFollow:u})},chown(o,a,u,f){var y;if(typeof o=="string"){var M=b.lookupPath(o,{follow:!f});y=M.node}else y=o;b.doChown(null,y,f)},lchown(o,a,u){b.chown(o,a,u,!0)},fchown(o,a,u){var f=b.getStreamChecked(o);b.doChown(f,f.node,!1)},doTruncate(o,a,u){if(b.isDir(a.mode))throw new b.ErrnoError(31);if(!b.isFile(a.mode))throw new b.ErrnoError(28);var f=b.nodePermissions(a,"w");if(f)throw new b.ErrnoError(f);b.doSetAttr(o,a,{size:u,timestamp:Date.now()})},truncate(o,a){if(a<0)throw new b.ErrnoError(28);var u;if(typeof o=="string"){var f=b.lookupPath(o,{follow:!0});u=f.node}else u=o;b.doTruncate(null,u,a)},ftruncate(o,a){var u=b.getStreamChecked(o);if(a<0||(u.flags&2097155)===0)throw new b.ErrnoError(28);b.doTruncate(u,u.node,a)},utime(o,a,u){var f=b.lookupPath(o,{follow:!0}),y=f.node,M=b.checkOpExists(y.node_ops.setattr,63);M(y,{atime:a,mtime:u})},open(o,a,u=438){if(o==="")throw new b.ErrnoError(44);a=typeof a=="string"?fn(a):a,a&64?u=u&4095|32768:u=0;var f,y;if(typeof o=="object")f=o;else{y=o.endsWith("/");var M=b.lookupPath(o,{follow:!(a&131072),noent_okay:!0});f=M.node,o=M.path}var C=!1;if(a&64)if(f){if(a&128)throw new b.ErrnoError(20)}else{if(y)throw new b.ErrnoError(31);f=b.mknod(o,u|511,0),C=!0}if(!f)throw new b.ErrnoError(44);if(b.isChrdev(f.mode)&&(a&=-513),a&65536&&!b.isDir(f.mode))throw new b.ErrnoError(54);if(!C){var R=b.mayOpen(f,a);if(R)throw new b.ErrnoError(R)}a&512&&!C&&b.truncate(f,0),a&=-131713;var O=b.createStream({node:f,path:b.getPath(f),flags:a,seekable:!0,position:0,stream_ops:f.stream_ops,ungotten:[],error:!1});return O.stream_ops.open&&O.stream_ops.open(O),C&&b.chmod(f,u&511),t.logReadFiles&&!(a&1)&&(o in b.readFiles||(b.readFiles[o]=1)),O},close(o){if(b.isClosed(o))throw new b.ErrnoError(8);o.getdents&&(o.getdents=null);try{o.stream_ops.close&&o.stream_ops.close(o)}catch(a){throw a}finally{b.closeStream(o.fd)}o.fd=null},isClosed(o){return o.fd===null},llseek(o,a,u){if(b.isClosed(o))throw new b.ErrnoError(8);if(!o.seekable||!o.stream_ops.llseek)throw new b.ErrnoError(70);if(u!=0&&u!=1&&u!=2)throw new b.ErrnoError(28);return o.position=o.stream_ops.llseek(o,a,u),o.ungotten=[],o.position},read(o,a,u,f,y){if(D(u>=0),f<0||y<0)throw new b.ErrnoError(28);if(b.isClosed(o))throw new b.ErrnoError(8);if((o.flags&2097155)===1)throw new b.ErrnoError(8);if(b.isDir(o.node.mode))throw new b.ErrnoError(31);if(!o.stream_ops.read)throw new b.ErrnoError(28);var M=typeof y<"u";if(!M)y=o.position;else if(!o.seekable)throw new b.ErrnoError(70);var C=o.stream_ops.read(o,a,u,f,y);return M||(o.position+=C),C},write(o,a,u,f,y,M){if(D(u>=0),f<0||y<0)throw new b.ErrnoError(28);if(b.isClosed(o))throw new b.ErrnoError(8);if((o.flags&2097155)===0)throw new b.ErrnoError(8);if(b.isDir(o.node.mode))throw new b.ErrnoError(31);if(!o.stream_ops.write)throw new b.ErrnoError(28);o.seekable&&o.flags&1024&&b.llseek(o,0,2);var C=typeof y<"u";if(!C)y=o.position;else if(!o.seekable)throw new b.ErrnoError(70);var R=o.stream_ops.write(o,a,u,f,y,M);return C||(o.position+=R),R},mmap(o,a,u,f,y){if((f&2)!==0&&(y&2)===0&&(o.flags&2097155)!==2)throw new b.ErrnoError(2);if((o.flags&2097155)===1)throw new b.ErrnoError(2);if(!o.stream_ops.mmap)throw new b.ErrnoError(43);if(!a)throw new b.ErrnoError(28);return o.stream_ops.mmap(o,a,u,f,y)},msync(o,a,u,f,y){return D(u>=0),o.stream_ops.msync?o.stream_ops.msync(o,a,u,f,y):0},ioctl(o,a,u){if(!o.stream_ops.ioctl)throw new b.ErrnoError(59);return o.stream_ops.ioctl(o,a,u)},readFile(o,a={}){if(a.flags=a.flags||0,a.encoding=a.encoding||"binary",a.encoding!=="utf8"&&a.encoding!=="binary")throw new Error(`Invalid encoding type "${a.encoding}"`);var u=b.open(o,a.flags),f=b.stat(o),y=f.size,M=new Uint8Array(y);return b.read(u,M,0,y,0),a.encoding==="utf8"&&(M=Nt(M)),b.close(u),M},writeFile(o,a,u={}){u.flags=u.flags||577;var f=b.open(o,u.flags,u.mode);if(typeof a=="string"&&(a=new Uint8Array(tt(a))),ArrayBuffer.isView(a))b.write(f,a,0,a.byteLength,void 0,u.canOwn);else throw new Error("Unsupported data type");b.close(f)},cwd:()=>b.currentPath,chdir(o){var a=b.lookupPath(o,{follow:!0});if(a.node===null)throw new b.ErrnoError(44);if(!b.isDir(a.node.mode))throw new b.ErrnoError(54);var u=b.nodePermissions(a.node,"x");if(u)throw new b.ErrnoError(u);b.currentPath=a.path},createDefaultDirectories(){b.mkdir("/tmp"),b.mkdir("/home"),b.mkdir("/home/web_user")},createDefaultDevices(){b.mkdir("/dev"),b.registerDevice(b.makedev(1,3),{read:()=>0,write:(f,y,M,C,R)=>C,llseek:()=>0}),b.mkdev("/dev/null",b.makedev(1,3)),Ve.register(b.makedev(5,0),Ve.default_tty_ops),Ve.register(b.makedev(6,0),Ve.default_tty1_ops),b.mkdev("/dev/tty",b.makedev(5,0)),b.mkdev("/dev/tty1",b.makedev(6,0));var o=new Uint8Array(1024),a=0,u=()=>(a===0&&(q(o),a=o.byteLength),o[--a]);b.createDevice("/dev","random",u),b.createDevice("/dev","urandom",u),b.mkdir("/dev/shm"),b.mkdir("/dev/shm/tmp")},createSpecialDirectories(){b.mkdir("/proc");var o=b.mkdir("/proc/self");b.mkdir("/proc/self/fd"),b.mount({mount(){var a=b.createNode(o,"fd",16895,73);return a.stream_ops={llseek:ze.stream_ops.llseek},a.node_ops={lookup(u,f){var y=+f,M=b.getStreamChecked(y),C={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>M.path},id:y+1};return C.parent=C,C},readdir(){return Array.from(b.streams.entries()).filter(([u,f])=>f).map(([u,f])=>u.toString())}},a}},{},"/proc/self/fd")},createStandardStreams(o,a,u){o?b.createDevice("/dev","stdin",o):b.symlink("/dev/tty","/dev/stdin"),a?b.createDevice("/dev","stdout",null,a):b.symlink("/dev/tty","/dev/stdout"),u?b.createDevice("/dev","stderr",null,u):b.symlink("/dev/tty1","/dev/stderr");var f=b.open("/dev/stdin",0),y=b.open("/dev/stdout",1),M=b.open("/dev/stderr",1);D(f.fd===0,`invalid handle for stdin (${f.fd})`),D(y.fd===1,`invalid handle for stdout (${y.fd})`),D(M.fd===2,`invalid handle for stderr (${M.fd})`)},staticInit(){b.nameTable=new Array(4096),b.mount(ze,{},"/"),b.createDefaultDirectories(),b.createDefaultDevices(),b.createSpecialDirectories(),b.filesystems={MEMFS:ze}},init(o,a,u){D(!b.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),b.initialized=!0,o??(o=t.stdin),a??(a=t.stdout),u??(u=t.stderr),b.createStandardStreams(o,a,u)},quit(){b.initialized=!1,ua(0);for(var o of b.streams)o&&b.close(o)},findObject(o,a){var u=b.analyzePath(o,a);return u.exists?u.object:null},analyzePath(o,a){try{var u=b.lookupPath(o,{follow:!a});o=u.path}catch{}var f={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var u=b.lookupPath(o,{parent:!0});f.parentExists=!0,f.parentPath=u.path,f.parentObject=u.node,f.name=Z.basename(o),u=b.lookupPath(o,{follow:!a}),f.exists=!0,f.path=u.path,f.object=u.node,f.name=u.node.name,f.isRoot=u.path==="/"}catch(y){f.error=y.errno}return f},createPath(o,a,u,f){o=typeof o=="string"?o:b.getPath(o);for(var y=a.split("/").reverse();y.length;){var M=y.pop();if(M){var C=Z.join2(o,M);try{b.mkdir(C)}catch(R){if(R.errno!=20)throw R}o=C}}return C},createFile(o,a,u,f,y){var M=Z.join2(typeof o=="string"?o:b.getPath(o),a),C=Fn(f,y);return b.create(M,C)},createDataFile(o,a,u,f,y,M){var C=a;o&&(o=typeof o=="string"?o:b.getPath(o),C=a?Z.join2(o,a):o);var R=Fn(f,y),O=b.create(C,R);if(u){if(typeof u=="string"){for(var X=new Array(u.length),re=0,le=u.length;re<le;++re)X[re]=u.charCodeAt(re);u=X}b.chmod(O,R|146);var ge=b.open(O,577);b.write(ge,u,0,u.length,0,M),b.close(ge),b.chmod(O,R)}},createDevice(o,a,u,f){var R;var y=Z.join2(typeof o=="string"?o:b.getPath(o),a),M=Fn(!!u,!!f);(R=b.createDevice).major??(R.major=64);var C=b.makedev(b.createDevice.major++,0);return b.registerDevice(C,{open(O){O.seekable=!1},close(O){var X;(X=f==null?void 0:f.buffer)!=null&&X.length&&f(10)},read(O,X,re,le,ge){for(var ue=0,Se=0;Se<le;Se++){var qe;try{qe=u()}catch{throw new b.ErrnoError(29)}if(qe===void 0&&ue===0)throw new b.ErrnoError(6);if(qe==null)break;ue++,X[re+Se]=qe}return ue&&(O.node.atime=Date.now()),ue},write(O,X,re,le,ge){for(var ue=0;ue<le;ue++)try{f(X[re+ue])}catch{throw new b.ErrnoError(29)}return le&&(O.node.mtime=O.node.ctime=Date.now()),ue}}),b.mkdev(y,M,C)},forceLoadFile(o){if(o.isDevice||o.isFolder||o.link||o.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{o.contents=x(o.url),o.usedBytes=o.contents.length}catch{throw new b.ErrnoError(29)}},createLazyFile(o,a,u,f,y){class M{constructor(){Rn(this,"lengthKnown",!1);Rn(this,"chunks",[])}get(ue){if(!(ue>this.length-1||ue<0)){var Se=ue%this.chunkSize,qe=ue/this.chunkSize|0;return this.getter(qe)[Se]}}setDataGetter(ue){this.getter=ue}cacheLength(){var ue=new XMLHttpRequest;if(ue.open("HEAD",u,!1),ue.send(null),!(ue.status>=200&&ue.status<300||ue.status===304))throw new Error("Couldn't load "+u+". Status: "+ue.status);var Se=Number(ue.getResponseHeader("Content-length")),qe,mt=(qe=ue.getResponseHeader("Accept-Ranges"))&&qe==="bytes",ut=(qe=ue.getResponseHeader("Content-Encoding"))&&qe==="gzip",Lt=1024*1024;mt||(Lt=Se);var xt=(Ht,on)=>{if(Ht>on)throw new Error("invalid range ("+Ht+", "+on+") or no bytes requested!");if(on>Se-1)throw new Error("only "+Se+" bytes available! programmer error!");var Dt=new XMLHttpRequest;if(Dt.open("GET",u,!1),Se!==Lt&&Dt.setRequestHeader("Range","bytes="+Ht+"-"+on),Dt.responseType="arraybuffer",Dt.overrideMimeType&&Dt.overrideMimeType("text/plain; charset=x-user-defined"),Dt.send(null),!(Dt.status>=200&&Dt.status<300||Dt.status===304))throw new Error("Couldn't load "+u+". Status: "+Dt.status);return Dt.response!==void 0?new Uint8Array(Dt.response||[]):tt(Dt.responseText||"")},Kt=this;Kt.setDataGetter(Ht=>{var on=Ht*Lt,Dt=(Ht+1)*Lt-1;if(Dt=Math.min(Dt,Se-1),typeof Kt.chunks[Ht]>"u"&&(Kt.chunks[Ht]=xt(on,Dt)),typeof Kt.chunks[Ht]>"u")throw new Error("doXHR failed!");return Kt.chunks[Ht]}),(ut||!Se)&&(Lt=Se=1,Se=this.getter(0).length,Lt=Se,L("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Se,this._chunkSize=Lt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!r)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var C=new M,R={isDevice:!1,contents:C}}else var R={isDevice:!1,url:u};var O=b.createFile(o,a,R,f,y);R.contents?O.contents=R.contents:R.url&&(O.contents=null,O.url=R.url),Object.defineProperties(O,{usedBytes:{get:function(){return this.contents.length}}});var X={},re=Object.keys(O.stream_ops);re.forEach(ge=>{var ue=O.stream_ops[ge];X[ge]=(...Se)=>(b.forceLoadFile(O),ue(...Se))});function le(ge,ue,Se,qe,mt){var ut=ge.node.contents;if(mt>=ut.length)return 0;var Lt=Math.min(ut.length-mt,qe);if(D(Lt>=0),ut.slice)for(var xt=0;xt<Lt;xt++)ue[Se+xt]=ut[mt+xt];else for(var xt=0;xt<Lt;xt++)ue[Se+xt]=ut.get(mt+xt);return Lt}return X.read=(ge,ue,Se,qe,mt)=>(b.forceLoadFile(O),le(ge,ue,Se,qe,mt)),X.mmap=(ge,ue,Se,qe,mt)=>{b.forceLoadFile(O);var ut=gt();if(!ut)throw new b.ErrnoError(48);return le(ge,oe,ut,ue,Se),{ptr:ut,allocated:!0}},O.stream_ops=X,O},absolutePath(){de("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){de("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){de("FS.createLink has been removed; use FS.symlink instead")},joinPath(){de("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){de("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){de("FS.standardizePath has been removed; use PATH.normalize instead")}},_t={DEFAULT_POLLMASK:5,calculateAt(o,a,u){if(Z.isAbs(a))return a;var f;if(o===-100)f=b.cwd();else{var y=_t.getStreamFromFD(o);f=y.path}if(a.length==0){if(!u)throw new b.ErrnoError(44);return f}return f+"/"+a},writeStat(o,a){pe[o>>2]=a.dev,pe[o+4>>2]=a.mode,Ae[o+8>>2]=a.nlink,pe[o+12>>2]=a.uid,pe[o+16>>2]=a.gid,pe[o+20>>2]=a.rdev,fe[o+24>>3]=BigInt(a.size),pe[o+32>>2]=4096,pe[o+36>>2]=a.blocks;var u=a.atime.getTime(),f=a.mtime.getTime(),y=a.ctime.getTime();return fe[o+40>>3]=BigInt(Math.floor(u/1e3)),Ae[o+48>>2]=u%1e3*1e3*1e3,fe[o+56>>3]=BigInt(Math.floor(f/1e3)),Ae[o+64>>2]=f%1e3*1e3*1e3,fe[o+72>>3]=BigInt(Math.floor(y/1e3)),Ae[o+80>>2]=y%1e3*1e3*1e3,fe[o+88>>3]=BigInt(a.ino),0},writeStatFs(o,a){pe[o+4>>2]=a.bsize,pe[o+40>>2]=a.bsize,pe[o+8>>2]=a.blocks,pe[o+12>>2]=a.bfree,pe[o+16>>2]=a.bavail,pe[o+20>>2]=a.files,pe[o+24>>2]=a.ffree,pe[o+28>>2]=a.fsid,pe[o+44>>2]=a.flags,pe[o+36>>2]=a.namelen},doMsync(o,a,u,f,y){if(!b.isFile(a.node.mode))throw new b.ErrnoError(43);if(f&2)return 0;var M=_e.slice(o,o+u);b.msync(a,M,y,u,f)},getStreamFromFD(o){var a=b.getStreamChecked(o);return a},varargs:void 0,getStr(o){var a=dt(o);return a}};function bi(o,a,u){try{var f=_t.getStreamFromFD(o);if(D(!u),f.fd===a)return-28;if(a<0||a>=b.MAX_OPEN_FDS)return-8;var y=b.getStream(a);return y&&b.close(y),b.dupStream(f,a).fd}catch(M){if(typeof b>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}var qt=()=>{D(_t.varargs!=null);var o=pe[+_t.varargs>>2];return _t.varargs+=4,o},sn=qt;function Un(o,a,u){_t.varargs=u;try{var f=_t.getStreamFromFD(o);switch(a){case 0:{var y=qt();if(y<0)return-28;for(;b.streams[y];)y++;var M;return M=b.dupStream(f,y),M.fd}case 1:case 2:return 0;case 3:return f.flags;case 4:{var y=qt();return f.flags|=y,0}case 12:{var y=sn(),C=0;return Le[y+C>>1]=2,0}case 13:case 14:return 0}return-28}catch(R){if(typeof b>"u"||R.name!=="ErrnoError")throw R;return-R.errno}}function ys(o,a){try{return _t.writeStat(a,b.fstat(o))}catch(u){if(typeof b>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function mf(o,a,u){_t.varargs=u;try{var f=_t.getStreamFromFD(o);switch(a){case 21509:return f.tty?0:-59;case 21505:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcgets){var y=f.tty.ops.ioctl_tcgets(f),M=sn();pe[M>>2]=y.c_iflag||0,pe[M+4>>2]=y.c_oflag||0,pe[M+8>>2]=y.c_cflag||0,pe[M+12>>2]=y.c_lflag||0;for(var C=0;C<32;C++)oe[M+C+17]=y.c_cc[C]||0;return 0}return 0}case 21510:case 21511:case 21512:return f.tty?0:-59;case 21506:case 21507:case 21508:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcsets){for(var M=sn(),R=pe[M>>2],O=pe[M+4>>2],X=pe[M+8>>2],re=pe[M+12>>2],le=[],C=0;C<32;C++)le.push(oe[M+C+17]);return f.tty.ops.ioctl_tcsets(f.tty,a,{c_iflag:R,c_oflag:O,c_cflag:X,c_lflag:re,c_cc:le})}return 0}case 21519:{if(!f.tty)return-59;var M=sn();return pe[M>>2]=0,0}case 21520:return f.tty?-28:-59;case 21531:{var M=sn();return b.ioctl(f,a,M)}case 21523:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tiocgwinsz){var ge=f.tty.ops.ioctl_tiocgwinsz(f.tty),M=sn();Le[M>>1]=ge[0],Le[M+2>>1]=ge[1]}return 0}case 21524:return f.tty?0:-59;case 21515:return f.tty?0:-59;default:return-28}}catch(ue){if(typeof b>"u"||ue.name!=="ErrnoError")throw ue;return-ue.errno}}function gf(o,a){try{return o=_t.getStr(o),_t.writeStat(a,b.lstat(o))}catch(u){if(typeof b>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function _f(o,a,u,f){try{a=_t.getStr(a);var y=f&256,M=f&4096;return f=f&-6401,D(!f,`unknown flags in __syscall_newfstatat: ${f}`),a=_t.calculateAt(o,a,M),_t.writeStat(u,y?b.lstat(a):b.stat(a))}catch(C){if(typeof b>"u"||C.name!=="ErrnoError")throw C;return-C.errno}}function vf(o,a,u,f){_t.varargs=f;try{a=_t.getStr(a),a=_t.calculateAt(o,a);var y=f?qt():0;return b.open(a,u,y).fd}catch(M){if(typeof b>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function yf(o,a){try{return o=_t.getStr(o),_t.writeStat(a,b.stat(o))}catch(u){if(typeof b>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}var xf=()=>de("native code called abort()"),Bt=o=>{for(var a="";;){var u=_e[o++];if(!u)return a;a+=String.fromCharCode(u)}},Ji={},wi={},xs={},zr=class extends Error{constructor(a){super(a),this.name="BindingError"}},vt=o=>{throw new zr(o)};function Sf(o,a,u={}){var f=a.name;if(o||vt(`type "${f}" must have a positive integer typeid pointer`),wi.hasOwnProperty(o)){if(u.ignoreDuplicateRegistrations)return;vt(`Cannot register type '${f}' twice`)}if(wi[o]=a,delete xs[o],Ji.hasOwnProperty(o)){var y=Ji[o];delete Ji[o],y.forEach(M=>M())}}function vn(o,a,u={}){if(a.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return Sf(o,a,u)}var Cl=(o,a,u)=>{switch(a){case 1:return u?f=>oe[f]:f=>_e[f];case 2:return u?f=>Le[f>>1]:f=>ye[f>>1];case 4:return u?f=>pe[f>>2]:f=>Ae[f>>2];case 8:return u?f=>fe[f>>3]:f=>we[f>>3];default:throw new TypeError(`invalid integer width (${a}): ${o}`)}},Ti=o=>{if(o===null)return"null";var a=typeof o;return a==="object"||a==="array"||a==="function"?o.toString():""+o},Rl=(o,a,u,f)=>{if(a<u||a>f)throw new TypeError(`Passing a number "${Ti(a)}" from JS side to C/C++ side to an argument of type "${o}", which is outside the valid range [${u}, ${f}]!`)},Mf=(o,a,u,f,y)=>{a=Bt(a);const M=f===0n;let C=R=>R;if(M){const R=u*8;C=O=>BigInt.asUintN(R,O),y=C(y)}vn(o,{name:a,fromWireType:C,toWireType:(R,O)=>{if(typeof O=="number")O=BigInt(O);else if(typeof O!="bigint")throw new TypeError(`Cannot convert "${Ti(O)}" to ${this.name}`);return Rl(a,O,f,y),O},argPackAdvance:On,readValueFromPointer:Cl(a,u,!M),destructorFunction:null})},On=8,Ef=(o,a,u,f)=>{a=Bt(a),vn(o,{name:a,fromWireType:function(y){return!!y},toWireType:function(y,M){return M?u:f},argPackAdvance:On,readValueFromPointer:function(y){return this.fromWireType(_e[y])},destructorFunction:null})},bf=o=>({count:o.count,deleteScheduled:o.deleteScheduled,preservePointerOnDelete:o.preservePointerOnDelete,ptr:o.ptr,ptrType:o.ptrType,smartPtr:o.smartPtr,smartPtrType:o.smartPtrType}),ea=o=>{function a(u){return u.$$.ptrType.registeredClass.name}vt(a(o)+" instance already deleted")},ta=!1,Pl=o=>{},wf=o=>{o.smartPtr?o.smartPtrType.rawDestructor(o.smartPtr):o.ptrType.registeredClass.rawDestructor(o.ptr)},Dl=o=>{o.count.value-=1;var a=o.count.value===0;a&&wf(o)},Ll=(o,a,u)=>{if(a===u)return o;if(u.baseClass===void 0)return null;var f=Ll(o,a,u.baseClass);return f===null?null:u.downcast(f)},Il={},Tf={},Af=(o,a)=>{for(a===void 0&&vt("ptr should not be undefined");o.baseClass;)a=o.upcast(a),o=o.baseClass;return a},Cf=(o,a)=>(a=Af(o,a),Tf[a]),Rf=class extends Error{constructor(a){super(a),this.name="InternalError"}},Ss=o=>{throw new Rf(o)},Ms=(o,a)=>{(!a.ptrType||!a.ptr)&&Ss("makeClassHandle requires ptr and ptrType");var u=!!a.smartPtrType,f=!!a.smartPtr;return u!==f&&Ss("Both smartPtrType and smartPtr must be specified"),a.count={value:1},Hr(Object.create(o,{$$:{value:a,writable:!0}}))};function Nl(o){var a=this.getPointee(o);if(!a)return this.destructor(o),null;var u=Cf(this.registeredClass,a);if(u!==void 0){if(u.$$.count.value===0)return u.$$.ptr=a,u.$$.smartPtr=o,u.clone();var f=u.clone();return this.destructor(o),f}function y(){return this.isSmartPointer?Ms(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:a,smartPtrType:this,smartPtr:o}):Ms(this.registeredClass.instancePrototype,{ptrType:this,ptr:o})}var M=this.registeredClass.getActualType(a),C=Il[M];if(!C)return y.call(this);var R;this.isConst?R=C.constPointerType:R=C.pointerType;var O=Ll(a,this.registeredClass,R.registeredClass);return O===null?y.call(this):this.isSmartPointer?Ms(R.registeredClass.instancePrototype,{ptrType:R,ptr:O,smartPtrType:this,smartPtr:o}):Ms(R.registeredClass.instancePrototype,{ptrType:R,ptr:O})}var Hr=o=>typeof FinalizationRegistry>"u"?(Hr=a=>a,o):(ta=new FinalizationRegistry(a=>{console.warn(a.leakWarning),Dl(a.$$)}),Hr=a=>{var u=a.$$,f=!!u.smartPtr;if(f){var y={$$:u},M=u.ptrType.registeredClass,C=new Error(`Embind found a leaked C++ instance ${M.name} <${me(u.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(C,Nl),y.leakWarning=C.stack.replace(/^Error: /,""),ta.register(a,y,a)}return a},Pl=a=>ta.unregister(a),Hr(o)),Pf=()=>{let o=Es.prototype;Object.assign(o,{isAliasOf(u){if(!(this instanceof Es)||!(u instanceof Es))return!1;var f=this.$$.ptrType.registeredClass,y=this.$$.ptr;u.$$=u.$$;for(var M=u.$$.ptrType.registeredClass,C=u.$$.ptr;f.baseClass;)y=f.upcast(y),f=f.baseClass;for(;M.baseClass;)C=M.upcast(C),M=M.baseClass;return f===M&&y===C},clone(){if(this.$$.ptr||ea(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var u=Hr(Object.create(Object.getPrototypeOf(this),{$$:{value:bf(this.$$)}}));return u.$$.count.value+=1,u.$$.deleteScheduled=!1,u},delete(){this.$$.ptr||ea(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vt("Object already scheduled for deletion"),Pl(this),Dl(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||ea(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const a=Symbol.dispose;a&&(o[a]=o.delete)};function Es(){}var bs=(o,a)=>Object.defineProperty(a,"name",{value:o}),na=(o,a,u)=>{if(o[a].overloadTable===void 0){var f=o[a];o[a]=function(...y){return o[a].overloadTable.hasOwnProperty(y.length)||vt(`Function '${u}' called with an invalid number of arguments (${y.length}) - expects one of (${o[a].overloadTable})!`),o[a].overloadTable[y.length].apply(this,y)},o[a].overloadTable=[],o[a].overloadTable[f.argCount]=f}},ia=(o,a,u)=>{t.hasOwnProperty(o)?((u===void 0||t[o].overloadTable!==void 0&&t[o].overloadTable[u]!==void 0)&&vt(`Cannot register public name '${o}' twice`),na(t,o,o),t[o].overloadTable.hasOwnProperty(u)&&vt(`Cannot register multiple overloads of a function with the same number of arguments (${u})!`),t[o].overloadTable[u]=a):(t[o]=a,t[o].argCount=u)},Df=48,Lf=57,If=o=>{D(typeof o=="string"),o=o.replace(/[^a-zA-Z0-9_]/g,"$");var a=o.charCodeAt(0);return a>=Df&&a<=Lf?`_${o}`:o};function Nf(o,a,u,f,y,M,C,R){this.name=o,this.constructor=a,this.instancePrototype=u,this.rawDestructor=f,this.baseClass=y,this.getActualType=M,this.upcast=C,this.downcast=R,this.pureVirtualFunctions=[]}var ws=(o,a,u)=>{for(;a!==u;)a.upcast||vt(`Expected null or instance of ${u.name}, got an instance of ${a.name}`),o=a.upcast(o),a=a.baseClass;return o};function Ff(o,a){if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),0;a.$$||vt(`Cannot pass "${Ti(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`);var u=a.$$.ptrType.registeredClass,f=ws(a.$$.ptr,u,this.registeredClass);return f}function Uf(o,a){var u;if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),this.isSmartPointer?(u=this.rawConstructor(),o!==null&&o.push(this.rawDestructor,u),u):0;(!a||!a.$$)&&vt(`Cannot pass "${Ti(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&a.$$.ptrType.isConst&&vt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);var f=a.$$.ptrType.registeredClass;if(u=ws(a.$$.ptr,f,this.registeredClass),this.isSmartPointer)switch(a.$$.smartPtr===void 0&&vt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:a.$$.smartPtrType===this?u=a.$$.smartPtr:vt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:u=a.$$.smartPtr;break;case 2:if(a.$$.smartPtrType===this)u=a.$$.smartPtr;else{var y=a.clone();u=this.rawShare(u,zt.toHandle(()=>y.delete())),o!==null&&o.push(this.rawDestructor,u)}break;default:vt("Unsupporting sharing policy")}return u}function Of(o,a){if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),0;a.$$||vt(`Cannot pass "${Ti(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`),a.$$.ptrType.isConst&&vt(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);var u=a.$$.ptrType.registeredClass,f=ws(a.$$.ptr,u,this.registeredClass);return f}function Ts(o){return this.fromWireType(Ae[o>>2])}var kf=()=>{Object.assign(As.prototype,{getPointee(o){return this.rawGetPointee&&(o=this.rawGetPointee(o)),o},destructor(o){var a;(a=this.rawDestructor)==null||a.call(this,o)},argPackAdvance:On,readValueFromPointer:Ts,fromWireType:Nl})};function As(o,a,u,f,y,M,C,R,O,X,re){this.name=o,this.registeredClass=a,this.isReference=u,this.isConst=f,this.isSmartPointer=y,this.pointeeType=M,this.sharingPolicy=C,this.rawGetPointee=R,this.rawConstructor=O,this.rawShare=X,this.rawDestructor=re,!y&&a.baseClass===void 0?f?(this.toWireType=Ff,this.destructorFunction=null):(this.toWireType=Of,this.destructorFunction=null):this.toWireType=Uf}var Fl=(o,a,u)=>{t.hasOwnProperty(o)||Ss("Replacing nonexistent public symbol"),t[o].overloadTable!==void 0&&u!==void 0?t[o].overloadTable[u]=a:(t[o]=a,t[o].argCount=u)},Ul=[],Cs,Ee=o=>{var a=Ul[o];return a||(Ul[o]=a=Cs.get(o)),D(Cs.get(o)==a,"JavaScript-side Wasm function table mirror is out of date!"),a},kn=(o,a,u=!1)=>{D(!u,"Async bindings are only supported with JSPI."),o=Bt(o);function f(){var M=Ee(a);return M}var y=f();return typeof y!="function"&&vt(`unknown function pointer with signature ${o}: ${a}`),y};class Bf extends Error{}var Ol=o=>{var a=nu(o),u=Bt(a);return zn(a),u},Ai=(o,a)=>{var u=[],f={};function y(M){if(!f[M]&&!wi[M]){if(xs[M]){xs[M].forEach(y);return}u.push(M),f[M]=!0}}throw a.forEach(y),new Bf(`${o}: `+u.map(Ol).join([", "]))},Cn=(o,a,u)=>{o.forEach(R=>xs[R]=a);function f(R){var O=u(R);O.length!==o.length&&Ss("Mismatched type converter count");for(var X=0;X<o.length;++X)vn(o[X],O[X])}var y=new Array(a.length),M=[],C=0;a.forEach((R,O)=>{wi.hasOwnProperty(R)?y[O]=wi[R]:(M.push(R),Ji.hasOwnProperty(R)||(Ji[R]=[]),Ji[R].push(()=>{y[O]=wi[R],++C,C===M.length&&f(y)}))}),M.length===0&&f(y)},zf=(o,a,u,f,y,M,C,R,O,X,re,le,ge)=>{re=Bt(re),M=kn(y,M),R&&(R=kn(C,R)),X&&(X=kn(O,X)),ge=kn(le,ge);var ue=If(re);ia(ue,function(){Ai(`Cannot construct ${re} due to unbound types`,[f])}),Cn([o,a,u],f?[f]:[],Se=>{var Dt;Se=Se[0];var qe,mt;f?(qe=Se.registeredClass,mt=qe.instancePrototype):mt=Es.prototype;var ut=bs(re,function(...ci){if(Object.getPrototypeOf(this)!==Lt)throw new zr(`Use 'new' to construct ${re}`);if(xt.constructor_body===void 0)throw new zr(`${re} has no accessible constructor`);var Us=xt.constructor_body[ci.length];if(Us===void 0)throw new zr(`Tried to invoke ctor of ${re} with invalid number of parameters (${ci.length}) - expected (${Object.keys(xt.constructor_body).toString()}) parameters instead!`);return Us.apply(this,ci)}),Lt=Object.create(mt,{constructor:{value:ut}});ut.prototype=Lt;var xt=new Nf(re,ut,Lt,ge,qe,M,R,X);xt.baseClass&&((Dt=xt.baseClass).__derivedClasses??(Dt.__derivedClasses=[]),xt.baseClass.__derivedClasses.push(xt));var Kt=new As(re,xt,!0,!1,!1),Ht=new As(re+"*",xt,!1,!1,!1),on=new As(re+" const*",xt,!1,!0,!1);return Il[o]={pointerType:Ht,constPointerType:on},Fl(ue,ut),[Kt,Ht,on]})},ra=o=>{for(;o.length;){var a=o.pop(),u=o.pop();u(a)}};function kl(o){for(var a=1;a<o.length;++a)if(o[a]!==null&&o[a].destructorFunction===void 0)return!0;return!1}function Hf(o,a,u,f,y){if(o<a||o>u){var M=a==u?a:`${a} to ${u}`;y(`function ${f} called with ${o} arguments, expected ${M}`)}}function Vf(o,a,u,f){var y=kl(o),M=o.length-2,C=[],R=["fn"];a&&R.push("thisWired");for(var O=0;O<M;++O)C.push(`arg${O}`),R.push(`arg${O}Wired`);C=C.join(","),R=R.join(",");var X=`return function (${C}) {
`;X+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,y&&(X+=`var destructors = [];
`);var re=y?"destructors":"null",le=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];a&&(X+=`var thisWired = classParam['toWireType'](${re}, this);
`);for(var O=0;O<M;++O)X+=`var arg${O}Wired = argType${O}['toWireType'](${re}, arg${O});
`,le.push(`argType${O}`);if(X+=(u||f?"var rv = ":"")+`invoker(${R});
`,y)X+=`runDestructors(destructors);
`;else for(var O=a?1:2;O<o.length;++O){var ge=O===1?"thisWired":"arg"+(O-2)+"Wired";o[O].destructorFunction!==null&&(X+=`${ge}_dtor(${ge});
`,le.push(`${ge}_dtor`))}return u&&(X+=`var ret = retType['fromWireType'](rv);
return ret;
`),X+=`}
`,le.push("checkArgCount","minArgs","maxArgs"),X=`if (arguments.length !== ${le.length}){ throw new Error(humanName + "Expected ${le.length} closure arguments " + arguments.length + " given."); }
${X}`,[le,X]}function Gf(o){for(var a=o.length-2,u=o.length-1;u>=2&&o[u].optional;--u)a--;return a}function Rs(o,a,u,f,y,M){var C=a.length;C<2&&vt("argTypes array size mismatch! Must at least get return value and 'this' types!"),D(!M,"Async bindings are only supported with JSPI.");for(var R=a[1]!==null&&u!==null,O=kl(a),X=a[0].name!=="void",re=C-2,le=Gf(a),ge=[o,vt,f,y,ra,a[0],a[1]],ue=0;ue<C-2;++ue)ge.push(a[ue+2]);if(!O)for(var ue=R?1:2;ue<a.length;++ue)a[ue].destructorFunction!==null&&ge.push(a[ue].destructorFunction);ge.push(Hf,le,re);let[Se,qe]=Vf(a,R,X,M);var mt=new Function(...Se,qe)(...ge);return bs(o,mt)}var Ps=(o,a)=>{for(var u=[],f=0;f<o;f++)u.push(Ae[a+f*4>>2]);return u},sa=o=>{o=o.trim();const a=o.indexOf("(");return a===-1?o:(D(o.endsWith(")"),"Parentheses for argument names should match."),o.slice(0,a))},Wf=(o,a,u,f,y,M,C,R,O)=>{var X=Ps(u,f);a=Bt(a),a=sa(a),M=kn(y,M,R),Cn([],[o],re=>{re=re[0];var le=`${re.name}.${a}`;function ge(){Ai(`Cannot call ${le} due to unbound types`,X)}a.startsWith("@@")&&(a=Symbol[a.substring(2)]);var ue=re.registeredClass.constructor;return ue[a]===void 0?(ge.argCount=u-1,ue[a]=ge):(na(ue,a,le),ue[a].overloadTable[u-1]=ge),Cn([],X,Se=>{var qe=[Se[0],null].concat(Se.slice(1)),mt=Rs(le,qe,null,M,C,R);if(ue[a].overloadTable===void 0?(mt.argCount=u-1,ue[a]=mt):ue[a].overloadTable[u-1]=mt,re.registeredClass.__derivedClasses)for(const ut of re.registeredClass.__derivedClasses)ut.constructor.hasOwnProperty(a)||(ut.constructor[a]=mt);return[]}),[]})},Xf=(o,a,u,f,y,M)=>{D(a>0);var C=Ps(a,u);y=kn(f,y),Cn([],[o],R=>{R=R[0];var O=`constructor ${R.name}`;if(R.registeredClass.constructor_body===void 0&&(R.registeredClass.constructor_body=[]),R.registeredClass.constructor_body[a-1]!==void 0)throw new zr(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${R.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return R.registeredClass.constructor_body[a-1]=()=>{Ai(`Cannot construct ${R.name} due to unbound types`,C)},Cn([],C,X=>(X.splice(1,0,null),R.registeredClass.constructor_body[a-1]=Rs(O,X,null,y,M),[])),[]})},$f=(o,a,u,f,y,M,C,R,O,X)=>{var re=Ps(u,f);a=Bt(a),a=sa(a),M=kn(y,M,O),Cn([],[o],le=>{le=le[0];var ge=`${le.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]),R&&le.registeredClass.pureVirtualFunctions.push(a);function ue(){Ai(`Cannot call ${ge} due to unbound types`,re)}var Se=le.registeredClass.instancePrototype,qe=Se[a];return qe===void 0||qe.overloadTable===void 0&&qe.className!==le.name&&qe.argCount===u-2?(ue.argCount=u-2,ue.className=le.name,Se[a]=ue):(na(Se,a,ge),Se[a].overloadTable[u-2]=ue),Cn([],re,mt=>{var ut=Rs(ge,mt,le,M,C,O);return Se[a].overloadTable===void 0?(ut.argCount=u-2,Se[a]=ut):Se[a].overloadTable[u-2]=ut,[]}),[]})},Bl=(o,a,u)=>(o instanceof Object||vt(`${u} with invalid "this": ${o}`),o instanceof a.registeredClass.constructor||vt(`${u} incompatible with "this" of type ${o.constructor.name}`),o.$$.ptr||vt(`cannot call emscripten binding method ${u} on deleted object`),ws(o.$$.ptr,o.$$.ptrType.registeredClass,a.registeredClass)),jf=(o,a,u,f,y,M,C,R,O,X)=>{a=Bt(a),y=kn(f,y),Cn([],[o],re=>{re=re[0];var le=`${re.name}.${a}`,ge={get(){Ai(`Cannot access ${le} due to unbound types`,[u,C])},enumerable:!0,configurable:!0};return O?ge.set=()=>Ai(`Cannot access ${le} due to unbound types`,[u,C]):ge.set=ue=>vt(le+" is a read-only property"),Object.defineProperty(re.registeredClass.instancePrototype,a,ge),Cn([],O?[u,C]:[u],ue=>{var Se=ue[0],qe={get(){var ut=Bl(this,re,le+" getter");return Se.fromWireType(y(M,ut))},enumerable:!0};if(O){O=kn(R,O);var mt=ue[1];qe.set=function(ut){var Lt=Bl(this,re,le+" setter"),xt=[];O(X,Lt,mt.toWireType(xt,ut)),ra(xt)}}return Object.defineProperty(re.registeredClass.instancePrototype,a,qe),[]}),[]})},Yf=(o,a,u)=>{o=Bt(o),Cn([],[a],f=>(f=f[0],t[o]=f.fromWireType(u),[]))},zl=[],Bn=[0,1,,1,null,1,!0,1,!1,1],oa=o=>{o>9&&--Bn[o+1]===0&&(D(Bn[o]!==void 0,"Decref for unallocated handle."),Bn[o]=void 0,zl.push(o))},zt={toValue:o=>(o||vt(`Cannot use deleted val. handle = ${o}`),D(o===2||Bn[o]!==void 0&&o%2===0,`invalid handle: ${o}`),Bn[o]),toHandle:o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const a=zl.pop()||Bn.length;return Bn[a]=o,Bn[a+1]=1,a}}}},Hl={name:"emscripten::val",fromWireType:o=>{var a=zt.toValue(o);return oa(o),a},toWireType:(o,a)=>zt.toHandle(a),argPackAdvance:On,readValueFromPointer:Ts,destructorFunction:null},Vl=o=>vn(o,Hl),qf=(o,a,u)=>{switch(a){case 1:return u?function(f){return this.fromWireType(oe[f])}:function(f){return this.fromWireType(_e[f])};case 2:return u?function(f){return this.fromWireType(Le[f>>1])}:function(f){return this.fromWireType(ye[f>>1])};case 4:return u?function(f){return this.fromWireType(pe[f>>2])}:function(f){return this.fromWireType(Ae[f>>2])};default:throw new TypeError(`invalid integer width (${a}): ${o}`)}},Zf=(o,a,u,f)=>{a=Bt(a);function y(){}y.values={},vn(o,{name:a,constructor:y,fromWireType:function(M){return this.constructor.values[M]},toWireType:(M,C)=>C.value,argPackAdvance:On,readValueFromPointer:qf(a,u,f),destructorFunction:null}),ia(a,y)},Ds=(o,a)=>{var u=wi[o];return u===void 0&&vt(`${a} has unknown type ${Ol(o)}`),u},Kf=(o,a,u)=>{var f=Ds(o,"enum");a=Bt(a);var y=f.constructor,M=Object.create(f.constructor.prototype,{value:{value:u},constructor:{value:bs(`${f.name}_${a}`,function(){})}});y.values[u]=M,y[a]=M},Jf=(o,a)=>{switch(a){case 4:return function(u){return this.fromWireType(Je[u>>2])};case 8:return function(u){return this.fromWireType(rt[u>>3])};default:throw new TypeError(`invalid float width (${a}): ${o}`)}},Qf=(o,a,u)=>{a=Bt(a),vn(o,{name:a,fromWireType:f=>f,toWireType:(f,y)=>{if(typeof y!="number"&&typeof y!="boolean")throw new TypeError(`Cannot convert ${Ti(y)} to ${this.name}`);return y},argPackAdvance:On,readValueFromPointer:Jf(a,u),destructorFunction:null})},ep=(o,a,u,f,y,M,C,R)=>{var O=Ps(a,u);o=Bt(o),o=sa(o),y=kn(f,y,C),ia(o,function(){Ai(`Cannot call ${o} due to unbound types`,O)},a-1),Cn([],O,X=>{var re=[X[0],null].concat(X.slice(1));return Fl(o,Rs(o,re,null,y,M,C),a-1),[]})},tp=(o,a,u,f,y)=>{a=Bt(a);const M=f===0;let C=O=>O;if(M){var R=32-8*u;C=O=>O<<R>>>R,y=C(y)}vn(o,{name:a,fromWireType:C,toWireType:(O,X)=>{if(typeof X!="number"&&typeof X!="boolean")throw new TypeError(`Cannot convert "${Ti(X)}" to ${a}`);return Rl(a,X,f,y),X},argPackAdvance:On,readValueFromPointer:Cl(a,u,f!==0),destructorFunction:null})},np=(o,a,u)=>{var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],y=f[a];function M(C){var R=Ae[C>>2],O=Ae[C+4>>2];return new y(oe.buffer,O,R)}u=Bt(u),vn(o,{name:u,fromWireType:M,argPackAdvance:On,readValueFromPointer:M},{ignoreDuplicateRegistrations:!0})},ip=Object.assign({optional:!0},Hl),rp=(o,a)=>{vn(o,ip)},Ci=(o,a,u)=>(D(typeof u=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),je(o,_e,a,u)),sp=(o,a)=>{a=Bt(a),vn(o,{name:a,fromWireType(u){for(var f=Ae[u>>2],y=u+4,M,C,R=y,C=0;C<=f;++C){var O=y+C;if(C==f||_e[O]==0){var X=O-R,re=dt(R,X);M===void 0?M=re:(M+="\0",M+=re),R=O+1}}return zn(u),M},toWireType(u,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var y,M=typeof f=="string";M||ArrayBuffer.isView(f)&&f.BYTES_PER_ELEMENT==1||vt("Cannot pass non-string to std::string"),M?y=$e(f):y=f.length;var C=la(4+y+1),R=C+4;return Ae[C>>2]=y,M?Ci(f,R,y+1):_e.set(f,R),u!==null&&u.push(zn,C),C},argPackAdvance:On,readValueFromPointer:Ts,destructorFunction(u){zn(u)}})},Gl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,op=(o,a)=>{D(o%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var u=o>>1,f=u+a/2,y=u;!(y>=f)&&ye[y];)++y;if(y-u>16&&Gl)return Gl.decode(ye.subarray(u,y));for(var M="",C=u;!(C>=f);++C){var R=ye[C];if(R==0)break;M+=String.fromCharCode(R)}return M},ap=(o,a,u)=>{if(D(a%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),D(typeof u=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??(u=2147483647),u<2)return 0;u-=2;for(var f=a,y=u<o.length*2?u/2:o.length,M=0;M<y;++M){var C=o.charCodeAt(M);Le[a>>1]=C,a+=2}return Le[a>>1]=0,a-f},cp=o=>o.length*2,lp=(o,a)=>{D(o%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var u="",f=0;!(f>=a/4);f++){var y=pe[o+f*4>>2];if(!y)break;u+=String.fromCodePoint(y)}return u},up=(o,a,u)=>{if(D(a%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),D(typeof u=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??(u=2147483647),u<4)return 0;for(var f=a,y=f+u-4,M=0;M<o.length;++M){var C=o.codePointAt(M);if(C>65535&&M++,pe[a>>2]=C,a+=4,a+4>y)break}return pe[a>>2]=0,a-f},hp=o=>{for(var a=0,u=0;u<o.length;++u){var f=o.codePointAt(u);f>65535&&u++,a+=4}return a},dp=(o,a,u)=>{u=Bt(u);var f,y,M,C;a===2?(f=op,y=ap,C=cp,M=R=>ye[R>>1]):a===4&&(f=lp,y=up,C=hp,M=R=>Ae[R>>2]),vn(o,{name:u,fromWireType:R=>{for(var O=Ae[R>>2],X,re=R+4,le=0;le<=O;++le){var ge=R+4+le*a;if(le==O||M(ge)==0){var ue=ge-re,Se=f(re,ue);X===void 0?X=Se:(X+="\0",X+=Se),re=ge+a}}return zn(R),X},toWireType:(R,O)=>{typeof O!="string"&&vt(`Cannot pass non-string to C++ string type ${u}`);var X=C(O),re=la(4+X+a);return Ae[re>>2]=X/a,y(O,re+4,X+a),R!==null&&R.push(zn,re),re},argPackAdvance:On,readValueFromPointer:Ts,destructorFunction(R){zn(R)}})},fp=(o,a)=>{Vl(o)},pp=(o,a)=>{a=Bt(a),vn(o,{isVoid:!0,name:a,argPackAdvance:0,fromWireType:()=>{},toWireType:(u,f)=>{}})},mp=()=>{throw new z},Wl=(o,a,u)=>{var f=[],y=o.toWireType(f,u);return f.length&&(Ae[a>>2]=zt.toHandle(f)),y},gp=(o,a,u)=>(o=zt.toValue(o),a=Ds(a,"emval::as"),Wl(a,u,o)),Ls=[],_p=(o,a,u,f)=>(o=Ls[o],a=zt.toValue(a),o(null,a,u,f)),vp={},aa=o=>{var a=vp[o];return a===void 0?Bt(o):a},yp=(o,a,u,f,y)=>(o=Ls[o],a=zt.toValue(a),u=aa(u),o(a,a[u],f,y)),Xl=()=>globalThis,xp=o=>o===0?zt.toHandle(Xl()):(o=aa(o),zt.toHandle(Xl()[o])),Sp=o=>{var a=Ls.length;return Ls.push(o),a},Mp=(o,a)=>{for(var u=new Array(o),f=0;f<o;++f)u[f]=Ds(Ae[a+f*4>>2],`parameter ${f}`);return u},Ep=(o,a,u)=>{var f=Mp(o,a),y=f.shift();o--;var M=`return function (obj, func, destructorsRef, args) {
`,C=0,R=[];u===0&&R.push("obj");for(var O=["retType"],X=[y],re=0;re<o;++re)R.push(`arg${re}`),O.push(`argType${re}`),X.push(f[re]),M+=`  var arg${re} = argType${re}.readValueFromPointer(args${C?"+"+C:""});
`,C+=f[re].argPackAdvance;var le=u===1?"new func":"func.call";M+=`  var rv = ${le}(${R.join(", ")});
`,y.isVoid||(O.push("emval_returnValue"),X.push(Wl),M+=`  return emval_returnValue(retType, destructorsRef, rv);
`),M+=`};
`;var ge=new Function(...O,M)(...X),ue=`methodCaller<(${f.map(Se=>Se.name).join(", ")}) => ${y.name}>`;return Sp(bs(ue,ge))},bp=(o,a)=>(o=zt.toValue(o),a=zt.toValue(a),zt.toHandle(o[a])),wp=o=>{o>9&&(Bn[o+1]+=1)},Tp=o=>(o=zt.toValue(o),typeof o=="number"),Ap=o=>(o=zt.toValue(o),typeof o=="string"),Cp=()=>zt.toHandle([]),Rp=o=>zt.toHandle(aa(o)),Pp=o=>{var a=zt.toValue(o);ra(a),oa(o)},Dp=(o,a)=>{o=Ds(o,"_emval_take_value");var u=o.readValueFromPointer(a);return zt.toHandle(u)},Lp=o=>{throw o=zt.toValue(o),o},Ip=o=>o%4===0&&(o%100!==0||o%400===0),Np=[0,31,60,91,121,152,182,213,244,274,305,335],Fp=[0,31,59,90,120,151,181,212,243,273,304,334],$l=o=>{var a=Ip(o.getFullYear()),u=a?Np:Fp,f=u[o.getMonth()]+o.getDate()-1;return f},Up=9007199254740992,Op=-9007199254740992,jl=o=>o<Op||o>Up?NaN:Number(o);function kp(o,a){o=jl(o);var u=new Date(o*1e3);pe[a>>2]=u.getSeconds(),pe[a+4>>2]=u.getMinutes(),pe[a+8>>2]=u.getHours(),pe[a+12>>2]=u.getDate(),pe[a+16>>2]=u.getMonth(),pe[a+20>>2]=u.getFullYear()-1900,pe[a+24>>2]=u.getDay();var f=$l(u)|0;pe[a+28>>2]=f,pe[a+36>>2]=-(u.getTimezoneOffset()*60);var y=new Date(u.getFullYear(),0,1),M=new Date(u.getFullYear(),6,1).getTimezoneOffset(),C=y.getTimezoneOffset(),R=(M!=C&&u.getTimezoneOffset()==Math.min(C,M))|0;pe[a+32>>2]=R}var Bp=function(o){var a=(()=>{var u=new Date(pe[o+20>>2]+1900,pe[o+16>>2],pe[o+12>>2],pe[o+8>>2],pe[o+4>>2],pe[o>>2],0),f=pe[o+32>>2],y=u.getTimezoneOffset(),M=new Date(u.getFullYear(),0,1),C=new Date(u.getFullYear(),6,1).getTimezoneOffset(),R=M.getTimezoneOffset(),O=Math.min(R,C);if(f<0)pe[o+32>>2]=+(C!=R&&O==y);else if(f>0!=(O==y)){var X=Math.max(R,C),re=f>0?O:X;u.setTime(u.getTime()+(re-y)*6e4)}pe[o+24>>2]=u.getDay();var le=$l(u)|0;pe[o+28>>2]=le,pe[o>>2]=u.getSeconds(),pe[o+4>>2]=u.getMinutes(),pe[o+8>>2]=u.getHours(),pe[o+12>>2]=u.getDate(),pe[o+16>>2]=u.getMonth(),pe[o+20>>2]=u.getYear();var ge=u.getTime();return isNaN(ge)?-1:ge/1e3})();return BigInt(a)},zp=(o,a,u,f)=>{var y=new Date().getFullYear(),M=new Date(y,0,1),C=new Date(y,6,1),R=M.getTimezoneOffset(),O=C.getTimezoneOffset(),X=Math.max(R,O);Ae[o>>2]=X*60,pe[a>>2]=+(R!=O);var re=ue=>{var Se=ue>=0?"-":"+",qe=Math.abs(ue),mt=String(Math.floor(qe/60)).padStart(2,"0"),ut=String(qe%60).padStart(2,"0");return`UTC${Se}${mt}${ut}`},le=re(R),ge=re(O);D(le),D(ge),D($e(le)<=16,`timezone name truncated to fit in TZNAME_MAX (${le})`),D($e(ge)<=16,`timezone name truncated to fit in TZNAME_MAX (${ge})`),O<R?(Ci(le,u,17),Ci(ge,f,17)):(Ci(le,f,17),Ci(ge,u,17))},Yl=()=>performance.now(),ql=()=>Date.now(),Hp=o=>o>=0&&o<=3;function Vp(o,a,u){if(!Hp(o))return 28;var f;o===0?f=ql():f=Yl();var y=Math.round(f*1e3*1e3);return fe[u>>3]=BigInt(y),0}var Is=[],Gp=(o,a)=>{D(Array.isArray(Is)),D(a%16==0),Is.length=0;for(var u;u=_e[o++];){var f=String.fromCharCode(u),y=["d","f","i","p"];y.push("j"),D(y.includes(f),`Invalid character ${u}("${f}") in readEmAsmArgs! Use only [${y}], and do not specify "v" for void return argument.`);var M=u!=105;M&=u!=112,a+=M&&a%8?4:0,Is.push(u==112?Ae[a>>2]:u==106?fe[a>>3]:u==105?pe[a>>2]:rt[a>>3]),a+=M?8:4}return Is},Wp=(o,a,u)=>{var f=Gp(a,u);return D(tu.hasOwnProperty(o),`No EM_ASM constant found at address ${o}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),tu[o](...f)},Xp=(o,a,u)=>Wp(o,a,u),Zl=()=>2147483648,$p=()=>Zl(),jp=(o,a)=>(D(a,"alignment argument is required"),Math.ceil(o/a)*a),Yp=o=>{var a=it.buffer,u=(o-a.byteLength+65535)/65536|0;try{return it.grow(u),be(),1}catch(f){T(`growMemory: Attempted to grow heap from ${a.byteLength} bytes to ${o} bytes, but got error: ${f}`)}},qp=o=>{var a=_e.length;o>>>=0,D(o>a);var u=Zl();if(o>u)return T(`Cannot enlarge memory, requested ${o} bytes, but the limit is ${u} bytes!`),!1;for(var f=1;f<=4;f*=2){var y=a*(1+.2/f);y=Math.min(y,o+100663296);var M=Math.min(u,jp(Math.max(o,y),65536)),C=Yp(M);if(C)return!0}return T(`Failed to grow the heap from ${a} bytes to ${M} bytes, not enough memory!`),!1},ca={},Zp=()=>h||"./this.program",Vr=()=>{if(!Vr.strings){var o=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:o,_:Zp()};for(var u in ca)ca[u]===void 0?delete a[u]:a[u]=ca[u];var f=[];for(var u in a)f.push(`${u}=${a[u]}`);Vr.strings=f}return Vr.strings},Kp=(o,a)=>{var u=0,f=0;for(var y of Vr()){var M=a+u;Ae[o+f>>2]=M,u+=Ci(y,M,1/0)+1,f+=4}return 0},Jp=(o,a)=>{var u=Vr();Ae[o>>2]=u.length;var f=0;for(var y of u)f+=$e(y)+1;return Ae[a>>2]=f,0},Kl=0,Jl=()=>ae||Kl>0,Qp=o=>{var a;Jl()||((a=t.onExit)==null||a.call(t,o),H=!0),d(o,new Xe(o))},em=(o,a)=>{if(h_(),Jl()&&!a){var u=`program exited (with status: ${o}), but keepRuntimeAlive() is set (counter=${Kl}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Ze==null||Ze(u),T(u)}Qp(o)},tm=em;function nm(o){try{var a=_t.getStreamFromFD(o);return b.close(a),0}catch(u){if(typeof b>"u"||u.name!=="ErrnoError")throw u;return u.errno}}var im=(o,a,u,f)=>{for(var y=0,M=0;M<u;M++){var C=Ae[a>>2],R=Ae[a+4>>2];a+=8;var O=b.read(o,oe,C,R,f);if(O<0)return-1;if(y+=O,O<R)break}return y};function rm(o,a,u,f){try{var y=_t.getStreamFromFD(o),M=im(y,a,u);return Ae[f>>2]=M,0}catch(C){if(typeof b>"u"||C.name!=="ErrnoError")throw C;return C.errno}}function sm(o,a,u,f){a=jl(a);try{if(isNaN(a))return 61;var y=_t.getStreamFromFD(o);return b.llseek(y,a,u),fe[f>>3]=BigInt(y.position),y.getdents&&a===0&&u===0&&(y.getdents=null),0}catch(M){if(typeof b>"u"||M.name!=="ErrnoError")throw M;return M.errno}}var om=(o,a,u,f)=>{for(var y=0,M=0;M<u;M++){var C=Ae[a>>2],R=Ae[a+4>>2];a+=8;var O=b.write(o,oe,C,R,f);if(O<0)return-1;if(y+=O,O<R)break}return y};function am(o,a,u,f){try{var y=_t.getStreamFromFD(o),M=om(y,a,u);return Ae[f>>2]=M,0}catch(C){if(typeof b>"u"||C.name!=="ErrnoError")throw C;return C.errno}}var cm=o=>o,lm=o=>{var a=t["_"+o];return D(a,"Cannot call unknown function "+o+", make sure it is exported"),a},um=(o,a)=>{D(o.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),oe.set(o,a)},Ns=o=>au(o),hm=o=>{var a=$e(o)+1,u=Ns(a);return Ci(o,u,a),u},Ql=(o,a,u,f,y)=>{var M={string:Se=>{var qe=0;return Se!=null&&Se!==0&&(qe=hm(Se)),qe},array:Se=>{var qe=Ns(Se.length);return um(Se,qe),qe}};function C(Se){return a==="string"?dt(Se):a==="boolean"?!!Se:Se}var R=lm(o),O=[],X=0;if(D(a!=="array",'Return type should not be "array".'),f)for(var re=0;re<f.length;re++){var le=M[u[re]];le?(X===0&&(X=Q()),O[re]=le(f[re])):O[re]=f[re]}var ge=R(...O);function ue(Se){return X!==0&&ee(X),C(Se)}return ge=ue(ge),ge},dm=(o,a,u,f)=>(...y)=>Ql(o,a,u,y),fm=(...o)=>b.createPath(...o),pm=(...o)=>b.unlink(...o),mm=(...o)=>b.createLazyFile(...o),gm=(...o)=>b.createDevice(...o),_m=o=>Fs(o),vm=o=>da(o),ym=o=>{var a=Q(),u=Ns(4),f=Ns(4);lu(o,u,f);var y=Ae[u>>2],M=Ae[f>>2],C=dt(y);zn(y);var R;return M&&(R=dt(M),zn(M)),ee(a),[C,R]},eu=o=>ym(o);b.createPreloadedFile=yt,b.staticInit(),Pf(),kf(),D(Bn.length===10),t.noExitRuntime&&(ae=t.noExitRuntime),t.preloadPlugins&&(Ye=t.preloadPlugins),t.print&&(L=t.print),t.printErr&&(T=t.printErr),t.wasmBinary&&(A=t.wasmBinary),Mm(),t.arguments&&t.arguments,t.thisProgram&&(h=t.thisProgram),D(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),D(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),D(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),D(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),D(typeof t.read>"u","Module.read option was removed"),D(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),D(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),D(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),D(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),D(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),D(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),D(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),D(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=ie,t.removeRunDependency=he,t.ccall=Ql,t.cwrap=dm,t.FS_createPreloadedFile=yt,t.FS_unlink=pm,t.FS_createPath=fm,t.FS_createDevice=gm,t.FS=b,t.FS_createDataFile=Yt,t.FS_createLazyFile=mm,t.MEMFS=ze;var xm=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];xm.forEach(ve);var Sm=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];Sm.forEach(De),t.incrementExceptionRefcount=_m,t.decrementExceptionRefcount=vm,t.getExceptionMessage=eu;function Mm(){$("fetchSettings")}var tu={667668:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(o){Object.defineProperty(t,o,{get:function(){return t["get_"+o]()},set:function(a){},enumerable:!0,configurable:!0})})}},nu=B("___getTypeName"),la=B("_malloc"),ua=B("_fflush"),zn=B("_free"),ha=B("_emscripten_stack_get_end"),iu=B("_strerror"),Me=B("_setThrew"),ru=B("__emscripten_tempret_set"),su=B("_emscripten_stack_init"),ou=B("__emscripten_stack_restore"),au=B("__emscripten_stack_alloc"),cu=B("_emscripten_stack_get_current"),da=B("___cxa_decrement_exception_refcount"),Fs=B("___cxa_increment_exception_refcount"),lu=B("___get_exception_message"),uu=B("___cxa_can_catch"),hu=B("___cxa_get_exception_ptr");function Em(o){nu=ce("__getTypeName",1),la=ce("malloc",1),ua=ce("fflush",1),zn=ce("free",1),ha=o.emscripten_stack_get_end,o.emscripten_stack_get_base,iu=ce("strerror",1),Me=ce("setThrew",2),ru=ce("_emscripten_tempret_set",1),su=o.emscripten_stack_init,o.emscripten_stack_get_free,ou=o._emscripten_stack_restore,au=o._emscripten_stack_alloc,cu=o.emscripten_stack_get_current,da=ce("__cxa_decrement_exception_refcount",1),Fs=ce("__cxa_increment_exception_refcount",1),lu=ce("__get_exception_message",3),uu=ce("__cxa_can_catch",3),hu=ce("__cxa_get_exception_ptr",1)}var du={__assert_fail:dn,__cxa_begin_catch:ps,__cxa_current_primary_exception:$n,__cxa_end_catch:ms,__cxa_find_matching_catch_2:Ki,__cxa_find_matching_catch_3:gs,__cxa_find_matching_catch_4:_s,__cxa_rethrow:vs,__cxa_rethrow_primary_exception:Jo,__cxa_throw:Qo,__cxa_uncaught_exceptions:N,__resumeException:Y,__syscall_dup3:bi,__syscall_fcntl64:Un,__syscall_fstat64:ys,__syscall_ioctl:mf,__syscall_lstat64:gf,__syscall_newfstatat:_f,__syscall_openat:vf,__syscall_stat64:yf,_abort_js:xf,_embind_register_bigint:Mf,_embind_register_bool:Ef,_embind_register_class:zf,_embind_register_class_class_function:Wf,_embind_register_class_constructor:Xf,_embind_register_class_function:$f,_embind_register_class_property:jf,_embind_register_constant:Yf,_embind_register_emval:Vl,_embind_register_enum:Zf,_embind_register_enum_value:Kf,_embind_register_float:Qf,_embind_register_function:ep,_embind_register_integer:tp,_embind_register_memory_view:np,_embind_register_optional:rp,_embind_register_std_string:sp,_embind_register_std_wstring:dp,_embind_register_user_type:fp,_embind_register_void:pp,_emscripten_throw_longjmp:mp,_emval_as:gp,_emval_call:_p,_emval_call_method:yp,_emval_decref:oa,_emval_get_global:xp,_emval_get_method_caller:Ep,_emval_get_property:bp,_emval_incref:wp,_emval_is_number:Tp,_emval_is_string:Ap,_emval_new_array:Cp,_emval_new_cstring:Rp,_emval_run_destructors:Pp,_emval_take_value:Dp,_emval_throw:Lp,_localtime_js:kp,_mktime_js:Bp,_tzset_js:zp,clock_time_get:Vp,emscripten_asm_const_int:Xp,emscripten_date_now:ql,emscripten_get_heap_max:$p,emscripten_get_now:Yl,emscripten_resize_heap:qp,environ_get:Kp,environ_sizes_get:Jp,exit:tm,fd_close:nm,fd_read:rm,fd_seek:sm,fd_write:am,invoke_ddd:Zg,invoke_dddi:fg,invoke_dddidi:pg,invoke_ddidi:dg,invoke_di:mg,invoke_dii:ig,invoke_diii:Om,invoke_diiii:hg,invoke_diiiidd:lg,invoke_diiiidi:zm,invoke_diiiii:Lm,invoke_diiiiii:$m,invoke_diiiiiii:gg,invoke_diiiiiiiii:Wm,invoke_diiiiiiiiiiii:Xm,invoke_fiii:a_,invoke_i:Im,invoke_id:Xg,invoke_ii:Tm,invoke_iid:Tg,invoke_iidddd:t_,invoke_iidiii:eg,invoke_iidiiid:Jm,invoke_iidiiiiidi:tg,invoke_iif:e_,invoke_iii:bm,invoke_iiid:ng,invoke_iiididdddddd:Qm,invoke_iiidiiiiiiii:Km,invoke_iiii:Rm,invoke_iiiidddiiiii:vg,invoke_iiiii:Um,invoke_iiiiid:Ug,invoke_iiiiii:Dg,invoke_iiiiiii:Cg,invoke_iiiiiiii:wg,invoke_iiiiiiiidd:Og,invoke_iiiiiiiii:cg,invoke_iiiiiiiiii:Rg,invoke_iiiiiiiiiidddiiiiiiiii:Zm,invoke_iiiiiiiiiii:o_,invoke_iiiiiiiiiiii:c_,invoke_iiiiiiiiiiiii:Wg,invoke_iiij:Pg,invoke_iiji:Fg,invoke_j:r_,invoke_ji:Gg,invoke_jiiii:Lg,invoke_jij:Vg,invoke_v:Cm,invoke_vi:Am,invoke_vid:Ag,invoke_viddd:Ig,invoke_vidddd:Ng,invoke_vidi:ug,invoke_vidiii:Ym,invoke_vii:Dm,invoke_viid:og,invoke_viiddi:Hg,invoke_viiddidi:zg,invoke_viiddii:_g,invoke_viidi:sg,invoke_viidii:Bm,invoke_viidiii:Eg,invoke_viidiiid:Sg,invoke_viidiiiii:qm,invoke_viidiiiiidi:bg,invoke_viidiiiiiiii:jm,invoke_viii:wm,invoke_viiid:Vm,invoke_viiidd:Bg,invoke_viiidi:rg,invoke_viiididdddddd:Mg,invoke_viiidiiiiiiii:xg,invoke_viiii:Fm,invoke_viiiiddd:kg,invoke_viiiidi:Kg,invoke_viiiifi:Jg,invoke_viiiii:Pm,invoke_viiiiid:Hm,invoke_viiiiii:Nm,invoke_viiiiiii:km,invoke_viiiiiiii:ag,invoke_viiiiiiiiii:Yg,invoke_viiiiiiiiiidddiiiiiiiii:yg,invoke_viiiiiiiiiiid:Gm,invoke_viiiiiiiiiiiii:jg,invoke_viiiiiiiiiiiiiii:l_,invoke_viiiiiiiiiiiiiiiiii:qg,invoke_viiiij:n_,invoke_viij:i_,invoke_viijii:s_,invoke_vij:Qg,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:$g,llvm_eh_typeid_for:cm},Ri=await nt();function bm(o,a,u){var f=Q();try{return Ee(o)(a,u)}catch(y){if(ee(f),!(y instanceof E))throw y;Me(1,0)}}function wm(o,a,u,f){var y=Q();try{Ee(o)(a,u,f)}catch(M){if(ee(y),!(M instanceof E))throw M;Me(1,0)}}function Tm(o,a){var u=Q();try{return Ee(o)(a)}catch(f){if(ee(u),!(f instanceof E))throw f;Me(1,0)}}function Am(o,a){var u=Q();try{Ee(o)(a)}catch(f){if(ee(u),!(f instanceof E))throw f;Me(1,0)}}function Cm(o){var a=Q();try{Ee(o)()}catch(u){if(ee(a),!(u instanceof E))throw u;Me(1,0)}}function Rm(o,a,u,f){var y=Q();try{return Ee(o)(a,u,f)}catch(M){if(ee(y),!(M instanceof E))throw M;Me(1,0)}}function Pm(o,a,u,f,y,M){var C=Q();try{Ee(o)(a,u,f,y,M)}catch(R){if(ee(C),!(R instanceof E))throw R;Me(1,0)}}function Dm(o,a,u){var f=Q();try{Ee(o)(a,u)}catch(y){if(ee(f),!(y instanceof E))throw y;Me(1,0)}}function Lm(o,a,u,f,y,M){var C=Q();try{return Ee(o)(a,u,f,y,M)}catch(R){if(ee(C),!(R instanceof E))throw R;Me(1,0)}}function Im(o){var a=Q();try{return Ee(o)()}catch(u){if(ee(a),!(u instanceof E))throw u;Me(1,0)}}function Nm(o,a,u,f,y,M,C){var R=Q();try{Ee(o)(a,u,f,y,M,C)}catch(O){if(ee(R),!(O instanceof E))throw O;Me(1,0)}}function Fm(o,a,u,f,y){var M=Q();try{Ee(o)(a,u,f,y)}catch(C){if(ee(M),!(C instanceof E))throw C;Me(1,0)}}function Um(o,a,u,f,y){var M=Q();try{return Ee(o)(a,u,f,y)}catch(C){if(ee(M),!(C instanceof E))throw C;Me(1,0)}}function Om(o,a,u,f){var y=Q();try{return Ee(o)(a,u,f)}catch(M){if(ee(y),!(M instanceof E))throw M;Me(1,0)}}function km(o,a,u,f,y,M,C,R){var O=Q();try{Ee(o)(a,u,f,y,M,C,R)}catch(X){if(ee(O),!(X instanceof E))throw X;Me(1,0)}}function Bm(o,a,u,f,y,M){var C=Q();try{Ee(o)(a,u,f,y,M)}catch(R){if(ee(C),!(R instanceof E))throw R;Me(1,0)}}function zm(o,a,u,f,y,M,C){var R=Q();try{return Ee(o)(a,u,f,y,M,C)}catch(O){if(ee(R),!(O instanceof E))throw O;Me(1,0)}}function Hm(o,a,u,f,y,M,C){var R=Q();try{Ee(o)(a,u,f,y,M,C)}catch(O){if(ee(R),!(O instanceof E))throw O;Me(1,0)}}function Vm(o,a,u,f,y){var M=Q();try{Ee(o)(a,u,f,y)}catch(C){if(ee(M),!(C instanceof E))throw C;Me(1,0)}}function Gm(o,a,u,f,y,M,C,R,O,X,re,le,ge){var ue=Q();try{Ee(o)(a,u,f,y,M,C,R,O,X,re,le,ge)}catch(Se){if(ee(ue),!(Se instanceof E))throw Se;Me(1,0)}}function Wm(o,a,u,f,y,M,C,R,O,X){var re=Q();try{return Ee(o)(a,u,f,y,M,C,R,O,X)}catch(le){if(ee(re),!(le instanceof E))throw le;Me(1,0)}}function Xm(o,a,u,f,y,M,C,R,O,X,re,le,ge){var ue=Q();try{return Ee(o)(a,u,f,y,M,C,R,O,X,re,le,ge)}catch(Se){if(ee(ue),!(Se instanceof E))throw Se;Me(1,0)}}function $m(o,a,u,f,y,M,C){var R=Q();try{return Ee(o)(a,u,f,y,M,C)}catch(O){if(ee(R),!(O instanceof E))throw O;Me(1,0)}}function jm(o,a,u,f,y,M,C,R,O,X,re,le){var ge=Q();try{Ee(o)(a,u,f,y,M,C,R,O,X,re,le)}catch(ue){if(ee(ge),!(ue instanceof E))throw ue;Me(1,0)}}function Ym(o,a,u,f,y,M){var C=Q();try{Ee(o)(a,u,f,y,M)}catch(R){if(ee(C),!(R instanceof E))throw R;Me(1,0)}}function qm(o,a,u,f,y,M,C,R,O){var X=Q();try{Ee(o)(a,u,f,y,M,C,R,O)}catch(re){if(ee(X),!(re instanceof E))throw re;Me(1,0)}}function Zm(o,a,u,f,y,M,C,R,O,X,re,le,ge,ue,Se,qe,mt,ut,Lt,xt,Kt,Ht){var on=Q();try{return Ee(o)(a,u,f,y,M,C,R,O,X,re,le,ge,ue,Se,qe,mt,ut,Lt,xt,Kt,Ht)}catch(Dt){if(ee(on),!(Dt instanceof E))throw Dt;Me(1,0)}}function Km(o,a,u,f,y,M,C,R,O,X,re,le){var ge=Q();try{return Ee(o)(a,u,f,y,M,C,R,O,X,re,le)}catch(ue){if(ee(ge),!(ue instanceof E))throw ue;Me(1,0)}}function Jm(o,a,u,f,y,M,C){var R=Q();try{return Ee(o)(a,u,f,y,M,C)}catch(O){if(ee(R),!(O instanceof E))throw O;Me(1,0)}}function Qm(o,a,u,f,y,M,C,R,O,X,re,le){var ge=Q();try{return Ee(o)(a,u,f,y,M,C,R,O,X,re,le)}catch(ue){if(ee(ge),!(ue instanceof E))throw ue;Me(1,0)}}function eg(o,a,u,f,y,M){var C=Q();try{return Ee(o)(a,u,f,y,M)}catch(R){if(ee(C),!(R instanceof E))throw R;Me(1,0)}}function tg(o,a,u,f,y,M,C,R,O,X){var re=Q();try{return Ee(o)(a,u,f,y,M,C,R,O,X)}catch(le){if(ee(re),!(le instanceof E))throw le;Me(1,0)}}function ng(o,a,u,f){var y=Q();try{return Ee(o)(a,u,f)}catch(M){if(ee(y),!(M instanceof E))throw M;Me(1,0)}}function ig(o,a,u){var f=Q();try{return Ee(o)(a,u)}catch(y){if(ee(f),!(y instanceof E))throw y;Me(1,0)}}function rg(o,a,u,f,y,M){var C=Q();try{Ee(o)(a,u,f,y,M)}catch(R){if(ee(C),!(R instanceof E))throw R;Me(1,0)}}function sg(o,a,u,f,y){var M=Q();try{Ee(o)(a,u,f,y)}catch(C){if(ee(M),!(C instanceof E))throw C;Me(1,0)}}function og(o,a,u,f){var y=Q();try{Ee(o)(a,u,f)}catch(M){if(ee(y),!(M instanceof E))throw M;Me(1,0)}}function ag(o,a,u,f,y,M,C,R,O){var X=Q();try{Ee(o)(a,u,f,y,M,C,R,O)}catch(re){if(ee(X),!(re instanceof E))throw re;Me(1,0)}}function cg(o,a,u,f,y,M,C,R,O){var X=Q();try{return Ee(o)(a,u,f,y,M,C,R,O)}catch(re){if(ee(X),!(re instanceof E))throw re;Me(1,0)}}function lg(o,a,u,f,y,M,C){var R=Q();try{return Ee(o)(a,u,f,y,M,C)}catch(O){if(ee(R),!(O instanceof E))throw O;Me(1,0)}}function ug(o,a,u,f){var y=Q();try{Ee(o)(a,u,f)}catch(M){if(ee(y),!(M instanceof E))throw M;Me(1,0)}}function hg(o,a,u,f,y){var M=Q();try{return Ee(o)(a,u,f,y)}catch(C){if(ee(M),!(C instanceof E))throw C;Me(1,0)}}function dg(o,a,u,f,y){var M=Q();try{return Ee(o)(a,u,f,y)}catch(C){if(ee(M),!(C instanceof E))throw C;Me(1,0)}}function fg(o,a,u,f){var y=Q();try{return Ee(o)(a,u,f)}catch(M){if(ee(y),!(M instanceof E))throw M;Me(1,0)}}function pg(o,a,u,f,y,M){var C=Q();try{return Ee(o)(a,u,f,y,M)}catch(R){if(ee(C),!(R instanceof E))throw R;Me(1,0)}}function mg(o,a){var u=Q();try{return Ee(o)(a)}catch(f){if(ee(u),!(f instanceof E))throw f;Me(1,0)}}function gg(o,a,u,f,y,M,C,R){var O=Q();try{return Ee(o)(a,u,f,y,M,C,R)}catch(X){if(ee(O),!(X instanceof E))throw X;Me(1,0)}}function _g(o,a,u,f,y,M,C){var R=Q();try{Ee(o)(a,u,f,y,M,C)}catch(O){if(ee(R),!(O instanceof E))throw O;Me(1,0)}}function vg(o,a,u,f,y,M,C,R,O,X,re,le){var ge=Q();try{return Ee(o)(a,u,f,y,M,C,R,O,X,re,le)}catch(ue){if(ee(ge),!(ue instanceof E))throw ue;Me(1,0)}}function yg(o,a,u,f,y,M,C,R,O,X,re,le,ge,ue,Se,qe,mt,ut,Lt,xt,Kt,Ht,on){var Dt=Q();try{Ee(o)(a,u,f,y,M,C,R,O,X,re,le,ge,ue,Se,qe,mt,ut,Lt,xt,Kt,Ht,on)}catch(ci){if(ee(Dt),!(ci instanceof E))throw ci;Me(1,0)}}function xg(o,a,u,f,y,M,C,R,O,X,re,le,ge){var ue=Q();try{Ee(o)(a,u,f,y,M,C,R,O,X,re,le,ge)}catch(Se){if(ee(ue),!(Se instanceof E))throw Se;Me(1,0)}}function Sg(o,a,u,f,y,M,C,R){var O=Q();try{Ee(o)(a,u,f,y,M,C,R)}catch(X){if(ee(O),!(X instanceof E))throw X;Me(1,0)}}function Mg(o,a,u,f,y,M,C,R,O,X,re,le,ge){var ue=Q();try{Ee(o)(a,u,f,y,M,C,R,O,X,re,le,ge)}catch(Se){if(ee(ue),!(Se instanceof E))throw Se;Me(1,0)}}function Eg(o,a,u,f,y,M,C){var R=Q();try{Ee(o)(a,u,f,y,M,C)}catch(O){if(ee(R),!(O instanceof E))throw O;Me(1,0)}}function bg(o,a,u,f,y,M,C,R,O,X,re){var le=Q();try{Ee(o)(a,u,f,y,M,C,R,O,X,re)}catch(ge){if(ee(le),!(ge instanceof E))throw ge;Me(1,0)}}function wg(o,a,u,f,y,M,C,R){var O=Q();try{return Ee(o)(a,u,f,y,M,C,R)}catch(X){if(ee(O),!(X instanceof E))throw X;Me(1,0)}}function Tg(o,a,u){var f=Q();try{return Ee(o)(a,u)}catch(y){if(ee(f),!(y instanceof E))throw y;Me(1,0)}}function Ag(o,a,u){var f=Q();try{Ee(o)(a,u)}catch(y){if(ee(f),!(y instanceof E))throw y;Me(1,0)}}function Cg(o,a,u,f,y,M,C){var R=Q();try{return Ee(o)(a,u,f,y,M,C)}catch(O){if(ee(R),!(O instanceof E))throw O;Me(1,0)}}function Rg(o,a,u,f,y,M,C,R,O,X){var re=Q();try{return Ee(o)(a,u,f,y,M,C,R,O,X)}catch(le){if(ee(re),!(le instanceof E))throw le;Me(1,0)}}function Pg(o,a,u,f){var y=Q();try{return Ee(o)(a,u,f)}catch(M){if(ee(y),!(M instanceof E))throw M;Me(1,0)}}function Dg(o,a,u,f,y,M){var C=Q();try{return Ee(o)(a,u,f,y,M)}catch(R){if(ee(C),!(R instanceof E))throw R;Me(1,0)}}function Lg(o,a,u,f,y){var M=Q();try{return Ee(o)(a,u,f,y)}catch(C){if(ee(M),!(C instanceof E))throw C;return Me(1,0),0n}}function Ig(o,a,u,f,y){var M=Q();try{Ee(o)(a,u,f,y)}catch(C){if(ee(M),!(C instanceof E))throw C;Me(1,0)}}function Ng(o,a,u,f,y,M){var C=Q();try{Ee(o)(a,u,f,y,M)}catch(R){if(ee(C),!(R instanceof E))throw R;Me(1,0)}}function Fg(o,a,u,f){var y=Q();try{return Ee(o)(a,u,f)}catch(M){if(ee(y),!(M instanceof E))throw M;Me(1,0)}}function Ug(o,a,u,f,y,M){var C=Q();try{return Ee(o)(a,u,f,y,M)}catch(R){if(ee(C),!(R instanceof E))throw R;Me(1,0)}}function Og(o,a,u,f,y,M,C,R,O,X){var re=Q();try{return Ee(o)(a,u,f,y,M,C,R,O,X)}catch(le){if(ee(re),!(le instanceof E))throw le;Me(1,0)}}function kg(o,a,u,f,y,M,C,R){var O=Q();try{Ee(o)(a,u,f,y,M,C,R)}catch(X){if(ee(O),!(X instanceof E))throw X;Me(1,0)}}function Bg(o,a,u,f,y,M){var C=Q();try{Ee(o)(a,u,f,y,M)}catch(R){if(ee(C),!(R instanceof E))throw R;Me(1,0)}}function zg(o,a,u,f,y,M,C,R){var O=Q();try{Ee(o)(a,u,f,y,M,C,R)}catch(X){if(ee(O),!(X instanceof E))throw X;Me(1,0)}}function Hg(o,a,u,f,y,M){var C=Q();try{Ee(o)(a,u,f,y,M)}catch(R){if(ee(C),!(R instanceof E))throw R;Me(1,0)}}function Vg(o,a,u){var f=Q();try{return Ee(o)(a,u)}catch(y){if(ee(f),!(y instanceof E))throw y;return Me(1,0),0n}}function Gg(o,a){var u=Q();try{return Ee(o)(a)}catch(f){if(ee(u),!(f instanceof E))throw f;return Me(1,0),0n}}function Wg(o,a,u,f,y,M,C,R,O,X,re,le,ge){var ue=Q();try{return Ee(o)(a,u,f,y,M,C,R,O,X,re,le,ge)}catch(Se){if(ee(ue),!(Se instanceof E))throw Se;Me(1,0)}}function Xg(o,a){var u=Q();try{return Ee(o)(a)}catch(f){if(ee(u),!(f instanceof E))throw f;Me(1,0)}}function $g(o,a,u,f,y,M,C,R,O,X,re,le,ge,ue,Se,qe,mt,ut,Lt,xt,Kt,Ht,on,Dt,ci,Us,f_,p_,m_,g_,__,v_,y_,x_,S_,M_,E_,b_,w_,T_,A_,C_,R_,P_,D_,L_,I_,N_,F_,U_,O_,k_,B_,z_,H_,V_,G_,W_,X_,$_,j_,Y_,q_,Z_,K_,J_,Q_,ev,tv,nv,iv,rv,sv,ov,av,cv,lv,uv,hv,dv,fv,pv,mv,gv,_v,vv){var yv=Q();try{Ee(o)(a,u,f,y,M,C,R,O,X,re,le,ge,ue,Se,qe,mt,ut,Lt,xt,Kt,Ht,on,Dt,ci,Us,f_,p_,m_,g_,__,v_,y_,x_,S_,M_,E_,b_,w_,T_,A_,C_,R_,P_,D_,L_,I_,N_,F_,U_,O_,k_,B_,z_,H_,V_,G_,W_,X_,$_,j_,Y_,q_,Z_,K_,J_,Q_,ev,tv,nv,iv,rv,sv,ov,av,cv,lv,uv,hv,dv,fv,pv,mv,gv,_v,vv)}catch(_u){if(ee(yv),!(_u instanceof E))throw _u;Me(1,0)}}function jg(o,a,u,f,y,M,C,R,O,X,re,le,ge,ue){var Se=Q();try{Ee(o)(a,u,f,y,M,C,R,O,X,re,le,ge,ue)}catch(qe){if(ee(Se),!(qe instanceof E))throw qe;Me(1,0)}}function Yg(o,a,u,f,y,M,C,R,O,X,re){var le=Q();try{Ee(o)(a,u,f,y,M,C,R,O,X,re)}catch(ge){if(ee(le),!(ge instanceof E))throw ge;Me(1,0)}}function qg(o,a,u,f,y,M,C,R,O,X,re,le,ge,ue,Se,qe,mt,ut,Lt){var xt=Q();try{Ee(o)(a,u,f,y,M,C,R,O,X,re,le,ge,ue,Se,qe,mt,ut,Lt)}catch(Kt){if(ee(xt),!(Kt instanceof E))throw Kt;Me(1,0)}}function Zg(o,a,u){var f=Q();try{return Ee(o)(a,u)}catch(y){if(ee(f),!(y instanceof E))throw y;Me(1,0)}}function Kg(o,a,u,f,y,M,C){var R=Q();try{Ee(o)(a,u,f,y,M,C)}catch(O){if(ee(R),!(O instanceof E))throw O;Me(1,0)}}function Jg(o,a,u,f,y,M,C){var R=Q();try{Ee(o)(a,u,f,y,M,C)}catch(O){if(ee(R),!(O instanceof E))throw O;Me(1,0)}}function Qg(o,a,u){var f=Q();try{Ee(o)(a,u)}catch(y){if(ee(f),!(y instanceof E))throw y;Me(1,0)}}function e_(o,a,u){var f=Q();try{return Ee(o)(a,u)}catch(y){if(ee(f),!(y instanceof E))throw y;Me(1,0)}}function t_(o,a,u,f,y,M){var C=Q();try{return Ee(o)(a,u,f,y,M)}catch(R){if(ee(C),!(R instanceof E))throw R;Me(1,0)}}function n_(o,a,u,f,y,M){var C=Q();try{Ee(o)(a,u,f,y,M)}catch(R){if(ee(C),!(R instanceof E))throw R;Me(1,0)}}function i_(o,a,u,f){var y=Q();try{Ee(o)(a,u,f)}catch(M){if(ee(y),!(M instanceof E))throw M;Me(1,0)}}function r_(o){var a=Q();try{return Ee(o)()}catch(u){if(ee(a),!(u instanceof E))throw u;return Me(1,0),0n}}function s_(o,a,u,f,y,M){var C=Q();try{Ee(o)(a,u,f,y,M)}catch(R){if(ee(C),!(R instanceof E))throw R;Me(1,0)}}function o_(o,a,u,f,y,M,C,R,O,X,re){var le=Q();try{return Ee(o)(a,u,f,y,M,C,R,O,X,re)}catch(ge){if(ee(le),!(ge instanceof E))throw ge;Me(1,0)}}function a_(o,a,u,f){var y=Q();try{return Ee(o)(a,u,f)}catch(M){if(ee(y),!(M instanceof E))throw M;Me(1,0)}}function c_(o,a,u,f,y,M,C,R,O,X,re,le){var ge=Q();try{return Ee(o)(a,u,f,y,M,C,R,O,X,re,le)}catch(ue){if(ee(ge),!(ue instanceof E))throw ue;Me(1,0)}}function l_(o,a,u,f,y,M,C,R,O,X,re,le,ge,ue,Se,qe){var mt=Q();try{Ee(o)(a,u,f,y,M,C,R,O,X,re,le,ge,ue,Se,qe)}catch(ut){if(ee(mt),!(ut instanceof E))throw ut;Me(1,0)}}var fu;function u_(){su(),V()}function fa(){if(Ke>0){ke=fa;return}if(u_(),xe(),Ke>0){ke=fa;return}function o(){var a;D(!fu),fu=!0,t.calledRun=!0,!H&&(Be(),Fe==null||Fe(t),(a=t.onRuntimeInitialized)==null||a.call(t),K("onRuntimeInitialized"),D(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Pe())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),o()},1)):o(),I()}function h_(){var o=L,a=T,u=!1;L=T=f=>{u=!0};try{ua(0),["stdout","stderr"].forEach(f=>{var O;var y=b.analyzePath("/dev/"+f);if(y){var M=y.object,C=M.rdev,R=Ve.ttys[C];(O=R==null?void 0:R.output)!=null&&O.length&&(u=!0)}})}catch{}L=o,T=a,u&&Qe("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function d_(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();K("preInit")}d_(),fa(),F?e=t:e=new Promise((o,a)=>{Fe=o,Ze=a});for(const o of Object.keys(t))o in i||Object.defineProperty(i,o,{configurable:!0,get(){de(`Access to module property ('${o}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const Vw="/physical/assets/mujoco-D9UjOFNX.wasm";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ol="170",yr={ROTATE:0,DOLLY:1,PAN:2},gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bv=0,yu=1,wv=2,fd=1,Tv=2,ei=3,xi=0,ln=1,ti=2,vi=0,xr=1,Do=2,xu=3,Su=4,Av=5,ki=100,Cv=101,Rv=102,Pv=103,Dv=104,Lv=200,Iv=201,Nv=202,Fv=203,ac=204,cc=205,Uv=206,Ov=207,kv=208,Bv=209,zv=210,Hv=211,Vv=212,Gv=213,Wv=214,lc=0,uc=1,hc=2,wr=3,dc=4,fc=5,pc=6,mc=7,pd=0,Xv=1,$v=2,yi=0,jv=1,Yv=2,qv=3,Zv=4,Kv=5,Jv=6,Qv=7,Mu="attached",e0="detached",md=300,Tr=301,Ar=302,gc=303,_c=304,Go=306,vc=1e3,zi=1001,yc=1002,_n=1003,t0=1004,Os=1005,Vn=1006,pa=1007,Hi=1008,si=1009,gd=1010,_d=1011,ss=1012,al=1013,Xi=1014,Nn=1015,ds=1016,cl=1017,ll=1018,Cr=1020,vd=35902,yd=1021,xd=1022,En=1023,Sd=1024,Md=1025,Sr=1026,Rr=1027,ul=1028,hl=1029,Ed=1030,dl=1031,fl=1033,bo=33776,wo=33777,To=33778,Ao=33779,xc=35840,Sc=35841,Mc=35842,Ec=35843,bc=36196,wc=37492,Tc=37496,Ac=37808,Cc=37809,Rc=37810,Pc=37811,Dc=37812,Lc=37813,Ic=37814,Nc=37815,Fc=37816,Uc=37817,Oc=37818,kc=37819,Bc=37820,zc=37821,Co=36492,Hc=36494,Vc=36495,bd=36283,Gc=36284,Wc=36285,Xc=36286,Lo=2300,$c=2301,ma=2302,Eu=2400,bu=2401,wu=2402,n0=2500,Gw=0,Ww=1,Xw=2,i0=3200,r0=3201,wd=0,s0=1,gi="",Sn="srgb",Nr="srgb-linear",Wo="linear",Tt="srgb",Qi=7680,Tu=519,o0=512,a0=513,c0=514,Td=515,l0=516,u0=517,h0=518,d0=519,jc=35044,Au="300 es",ni=2e3,Io=2001;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,c=r.length;s<c;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cu=1234567;const Mr=Math.PI/180,Pr=180/Math.PI;function wn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function pl(i,e){return(i%e+e)%e}function f0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function p0(i,e,t){return i!==e?(t-i)/(e-i):0}function ts(i,e,t){return(1-t)*i+t*e}function m0(i,e,t,n){return ts(i,e,1-Math.exp(-t*n))}function g0(i,e=1){return e-Math.abs(pl(i,e*2)-e)}function _0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function v0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function y0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function x0(i,e){return i+Math.random()*(e-i)}function S0(i){return i*(.5-Math.random())}function M0(i){i!==void 0&&(Cu=i);let e=Cu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function E0(i){return i*Mr}function b0(i){return i*Pr}function w0(i){return(i&i-1)===0&&i!==0}function T0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function A0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function C0(i,e,t,n,r){const s=Math.cos,c=Math.sin,l=s(t/2),h=c(t/2),d=s((e+n)/2),p=c((e+n)/2),g=s((e-n)/2),m=c((e-n)/2),_=s((n-e)/2),x=c((n-e)/2);switch(r){case"XYX":i.set(l*p,h*g,h*m,l*d);break;case"YZY":i.set(h*m,l*p,h*g,l*d);break;case"ZXZ":i.set(h*g,h*m,l*p,l*d);break;case"XZX":i.set(l*p,h*x,h*_,l*d);break;case"YXY":i.set(h*_,l*p,h*x,l*d);break;case"ZYZ":i.set(h*x,h*_,l*p,l*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const R0={DEG2RAD:Mr,RAD2DEG:Pr,generateUUID:wn,clamp:Gt,euclideanModulo:pl,mapLinear:f0,inverseLerp:p0,lerp:ts,damp:m0,pingpong:g0,smoothstep:_0,smootherstep:v0,randInt:y0,randFloat:x0,randFloatSpread:S0,seededRandom:M0,degToRad:E0,radToDeg:b0,isPowerOfTwo:w0,ceilPowerOfTwo:T0,floorPowerOfTwo:A0,setQuaternionFromProperEuler:C0,normalize:bt,denormalize:In};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,c=this.y-e.y;return this.x=s*n-c*r+e.x,this.y=s*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,n,r,s,c,l,h,d){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,c,l,h,d)}set(e,t,n,r,s,c,l,h,d){const p=this.elements;return p[0]=e,p[1]=r,p[2]=l,p[3]=t,p[4]=s,p[5]=h,p[6]=n,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,c=n[0],l=n[3],h=n[6],d=n[1],p=n[4],g=n[7],m=n[2],_=n[5],x=n[8],w=r[0],S=r[3],v=r[6],L=r[1],T=r[4],A=r[7],H=r[2],D=r[5],k=r[8];return s[0]=c*w+l*L+h*H,s[3]=c*S+l*T+h*D,s[6]=c*v+l*A+h*k,s[1]=d*w+p*L+g*H,s[4]=d*S+p*T+g*D,s[7]=d*v+p*A+g*k,s[2]=m*w+_*L+x*H,s[5]=m*S+_*T+x*D,s[8]=m*v+_*A+x*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],l=e[5],h=e[6],d=e[7],p=e[8];return t*c*p-t*l*d-n*s*p+n*l*h+r*s*d-r*c*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],l=e[5],h=e[6],d=e[7],p=e[8],g=p*c-l*d,m=l*h-p*s,_=d*s-c*h,x=t*g+n*m+r*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/x;return e[0]=g*w,e[1]=(r*d-p*n)*w,e[2]=(l*n-r*c)*w,e[3]=m*w,e[4]=(p*t-r*h)*w,e[5]=(r*s-l*t)*w,e[6]=_*w,e[7]=(n*h-d*t)*w,e[8]=(c*t-n*s)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,c,l){const h=Math.cos(s),d=Math.sin(s);return this.set(n*h,n*d,-n*(h*c+d*l)+c+e,-r*d,r*h,-r*(-d*c+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new at;function Ad(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function P0(){const i=os("canvas");return i.style.display="block",i}const Ru={};function Qr(i){i in Ru||(Ru[i]=!0,console.warn(i))}function D0(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function L0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function I0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Tt&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Tt&&(i.r=Er(i.r),i.g=Er(i.g),i.b=Er(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?Wo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Pu=[.64,.33,.3,.6,.15,.06],Du=[.2126,.7152,.0722],Lu=[.3127,.329],Iu=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[Nr]:{primaries:Pu,whitePoint:Lu,transfer:Wo,toXYZ:Iu,fromXYZ:Nu,luminanceCoefficients:Du,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:Pu,whitePoint:Lu,transfer:Tt,toXYZ:Iu,fromXYZ:Nu,luminanceCoefficients:Du,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}});let er;class N0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=os("canvas")),er.width=e.width,er.height=e.height;const n=er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let c=0;c<s.length;c++)s[c]=ii(s[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let F0=0;class Cd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let c=0,l=r.length;c<l;c++)r[c].isDataTexture?s.push(_a(r[c].image)):s.push(_a(r[c]))}else s=_a(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function _a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?N0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let U0=0;class tn extends Yi{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=zi,r=zi,s=Vn,c=Hi,l=En,h=si,d=tn.DEFAULT_ANISOTROPY,p=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=wn(),this.name="",this.source=new Cd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=c,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=h,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vc:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vc:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=md;tn.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*s,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*s,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*s,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const h=e.elements,d=h[0],p=h[4],g=h[8],m=h[1],_=h[5],x=h[9],w=h[2],S=h[6],v=h[10];if(Math.abs(p-m)<.01&&Math.abs(g-w)<.01&&Math.abs(x-S)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+w)<.1&&Math.abs(x+S)<.1&&Math.abs(d+_+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(d+1)/2,A=(_+1)/2,H=(v+1)/2,D=(p+m)/4,k=(g+w)/4,V=(x+S)/4;return T>A&&T>H?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=D/n,s=k/n):A>H?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=D/r,s=V/r):H<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(H),n=k/s,r=V/s),this.set(n,r,s,t),this}let L=Math.sqrt((S-x)*(S-x)+(g-w)*(g-w)+(m-p)*(m-p));return Math.abs(L)<.001&&(L=1),this.x=(S-x)/L,this.y=(g-w)/L,this.z=(m-p)/L,this.w=Math.acos((d+_+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class O0 extends Yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new tn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let l=0;l<c;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends O0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rd extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k0 extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,c,l){let h=n[r+0],d=n[r+1],p=n[r+2],g=n[r+3];const m=s[c+0],_=s[c+1],x=s[c+2],w=s[c+3];if(l===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(l===1){e[t+0]=m,e[t+1]=_,e[t+2]=x,e[t+3]=w;return}if(g!==w||h!==m||d!==_||p!==x){let S=1-l;const v=h*m+d*_+p*x+g*w,L=v>=0?1:-1,T=1-v*v;if(T>Number.EPSILON){const H=Math.sqrt(T),D=Math.atan2(H,v*L);S=Math.sin(S*D)/H,l=Math.sin(l*D)/H}const A=l*L;if(h=h*S+m*A,d=d*S+_*A,p=p*S+x*A,g=g*S+w*A,S===1-l){const H=1/Math.sqrt(h*h+d*d+p*p+g*g);h*=H,d*=H,p*=H,g*=H}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,s,c){const l=n[r],h=n[r+1],d=n[r+2],p=n[r+3],g=s[c],m=s[c+1],_=s[c+2],x=s[c+3];return e[t]=l*x+p*g+h*_-d*m,e[t+1]=h*x+p*m+d*g-l*_,e[t+2]=d*x+p*_+l*m-h*g,e[t+3]=p*x-l*g-h*m-d*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,c=e._order,l=Math.cos,h=Math.sin,d=l(n/2),p=l(r/2),g=l(s/2),m=h(n/2),_=h(r/2),x=h(s/2);switch(c){case"XYZ":this._x=m*p*g+d*_*x,this._y=d*_*g-m*p*x,this._z=d*p*x+m*_*g,this._w=d*p*g-m*_*x;break;case"YXZ":this._x=m*p*g+d*_*x,this._y=d*_*g-m*p*x,this._z=d*p*x-m*_*g,this._w=d*p*g+m*_*x;break;case"ZXY":this._x=m*p*g-d*_*x,this._y=d*_*g+m*p*x,this._z=d*p*x+m*_*g,this._w=d*p*g-m*_*x;break;case"ZYX":this._x=m*p*g-d*_*x,this._y=d*_*g+m*p*x,this._z=d*p*x-m*_*g,this._w=d*p*g+m*_*x;break;case"YZX":this._x=m*p*g+d*_*x,this._y=d*_*g+m*p*x,this._z=d*p*x-m*_*g,this._w=d*p*g-m*_*x;break;case"XZY":this._x=m*p*g-d*_*x,this._y=d*_*g-m*p*x,this._z=d*p*x+m*_*g,this._w=d*p*g+m*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],c=t[1],l=t[5],h=t[9],d=t[2],p=t[6],g=t[10],m=n+l+g;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(p-h)*_,this._y=(s-d)*_,this._z=(c-r)*_}else if(n>l&&n>g){const _=2*Math.sqrt(1+n-l-g);this._w=(p-h)/_,this._x=.25*_,this._y=(r+c)/_,this._z=(s+d)/_}else if(l>g){const _=2*Math.sqrt(1+l-n-g);this._w=(s-d)/_,this._x=(r+c)/_,this._y=.25*_,this._z=(h+p)/_}else{const _=2*Math.sqrt(1+g-n-l);this._w=(c-r)/_,this._x=(s+d)/_,this._y=(h+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,c=e._w,l=t._x,h=t._y,d=t._z,p=t._w;return this._x=n*p+c*l+r*d-s*h,this._y=r*p+c*h+s*l-n*d,this._z=s*p+c*d+n*h-r*l,this._w=c*p-n*l-r*h-s*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,c=this._w;let l=c*e._w+n*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=r,this._z=s,this;const h=1-l*l;if(h<=Number.EPSILON){const _=1-t;return this._w=_*c+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,l),g=Math.sin((1-t)*p)/d,m=Math.sin(t*p)/d;return this._w=c*g+this._w*m,this._x=n*g+this._x*m,this._y=r*g+this._y*m,this._z=s*g+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,c=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*c,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*c,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,c=e.y,l=e.z,h=e.w,d=2*(c*r-l*n),p=2*(l*t-s*r),g=2*(s*n-c*t);return this.x=t+h*d+c*g-l*p,this.y=n+h*p+l*d-s*g,this.z=r+h*g+s*p-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,c=t.x,l=t.y,h=t.z;return this.x=r*h-s*l,this.y=s*c-n*h,this.z=n*l-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new G,Fu=new hn;class Gn{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=s.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,Pn):Pn.fromBufferAttribute(s,c),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}const r=e.children;for(let s=0,c=r.length;s<c;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),Bs.subVectors(this.max,Gr),tr.subVectors(e.a,Gr),nr.subVectors(e.b,Gr),ir.subVectors(e.c,Gr),li.subVectors(nr,tr),ui.subVectors(ir,nr),Pi.subVectors(tr,ir);let t=[0,-li.z,li.y,0,-ui.z,ui.y,0,-Pi.z,Pi.y,li.z,0,-li.x,ui.z,0,-ui.x,Pi.z,0,-Pi.x,-li.y,li.x,0,-ui.y,ui.x,0,-Pi.y,Pi.x,0];return!ya(t,tr,nr,ir,Bs)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,tr,nr,ir,Bs))?!1:(zs.crossVectors(li,ui),t=[zs.x,zs.y,zs.z],ya(t,tr,nr,ir,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new G,new G,new G,new G,new G,new G,new G,new G],Pn=new G,ks=new Gn,tr=new G,nr=new G,ir=new G,li=new G,ui=new G,Pi=new G,Gr=new G,Bs=new G,zs=new G,Di=new G;function ya(i,e,t,n,r){for(let s=0,c=i.length-3;s<=c;s+=3){Di.fromArray(i,s);const l=r.x*Math.abs(Di.x)+r.y*Math.abs(Di.y)+r.z*Math.abs(Di.z),h=e.dot(Di),d=t.dot(Di),p=n.dot(Di);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>l)return!1}return!0}const B0=new Gn,Wr=new G,xa=new G;class oi{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):B0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,c=e.length;s<c;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);const t=Wr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Wr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(xa)),this.expandByPoint(Wr.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new G,Sa=new G,Hs=new G,hi=new G,Ma=new G,Vs=new G,Ea=new G;class Fr{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Sa.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Sa);const s=e.distanceTo(t)*.5,c=-this.direction.dot(Hs),l=hi.dot(this.direction),h=-hi.dot(Hs),d=hi.lengthSq(),p=Math.abs(1-c*c);let g,m,_,x;if(p>0)if(g=c*h-l,m=c*l-h,x=s*p,g>=0)if(m>=-x)if(m<=x){const w=1/p;g*=w,m*=w,_=g*(g+c*m+2*l)+m*(c*g+m+2*h)+d}else m=s,g=Math.max(0,-(c*m+l)),_=-g*g+m*(m+2*h)+d;else m=-s,g=Math.max(0,-(c*m+l)),_=-g*g+m*(m+2*h)+d;else m<=-x?(g=Math.max(0,-(-c*s+l)),m=g>0?-s:Math.min(Math.max(-s,-h),s),_=-g*g+m*(m+2*h)+d):m<=x?(g=0,m=Math.min(Math.max(-s,-h),s),_=m*(m+2*h)+d):(g=Math.max(0,-(c*s+l)),m=g>0?s:Math.min(Math.max(-s,-h),s),_=-g*g+m*(m+2*h)+d);else m=c>0?-s:s,g=Math.max(0,-(c*m+l)),_=-g*g+m*(m+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Sa).addScaledVector(Hs,m),_}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),r=qn.dot(qn)-n*n,s=e.radius*e.radius;if(r>s)return null;const c=Math.sqrt(s-r),l=n-c,h=n+c;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,c,l,h;const d=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return d>=0?(n=(e.min.x-m.x)*d,r=(e.max.x-m.x)*d):(n=(e.max.x-m.x)*d,r=(e.min.x-m.x)*d),p>=0?(s=(e.min.y-m.y)*p,c=(e.max.y-m.y)*p):(s=(e.max.y-m.y)*p,c=(e.min.y-m.y)*p),n>c||s>r||((s>n||isNaN(n))&&(n=s),(c<r||isNaN(r))&&(r=c),g>=0?(l=(e.min.z-m.z)*g,h=(e.max.z-m.z)*g):(l=(e.max.z-m.z)*g,h=(e.min.z-m.z)*g),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,r,s){Ma.subVectors(t,e),Vs.subVectors(n,e),Ea.crossVectors(Ma,Vs);let c=this.direction.dot(Ea),l;if(c>0){if(r)return null;l=1}else if(c<0)l=-1,c=-c;else return null;hi.subVectors(this.origin,e);const h=l*this.direction.dot(Vs.crossVectors(hi,Vs));if(h<0)return null;const d=l*this.direction.dot(Ma.cross(hi));if(d<0||h+d>c)return null;const p=-l*hi.dot(Ea);return p<0?null:this.at(p/c,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,r,s,c,l,h,d,p,g,m,_,x,w,S){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,c,l,h,d,p,g,m,_,x,w,S)}set(e,t,n,r,s,c,l,h,d,p,g,m,_,x,w,S){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=s,v[5]=c,v[9]=l,v[13]=h,v[2]=d,v[6]=p,v[10]=g,v[14]=m,v[3]=_,v[7]=x,v[11]=w,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),s=1/rr.setFromMatrixColumn(e,1).length(),c=1/rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,c=Math.cos(n),l=Math.sin(n),h=Math.cos(r),d=Math.sin(r),p=Math.cos(s),g=Math.sin(s);if(e.order==="XYZ"){const m=c*p,_=c*g,x=l*p,w=l*g;t[0]=h*p,t[4]=-h*g,t[8]=d,t[1]=_+x*d,t[5]=m-w*d,t[9]=-l*h,t[2]=w-m*d,t[6]=x+_*d,t[10]=c*h}else if(e.order==="YXZ"){const m=h*p,_=h*g,x=d*p,w=d*g;t[0]=m+w*l,t[4]=x*l-_,t[8]=c*d,t[1]=c*g,t[5]=c*p,t[9]=-l,t[2]=_*l-x,t[6]=w+m*l,t[10]=c*h}else if(e.order==="ZXY"){const m=h*p,_=h*g,x=d*p,w=d*g;t[0]=m-w*l,t[4]=-c*g,t[8]=x+_*l,t[1]=_+x*l,t[5]=c*p,t[9]=w-m*l,t[2]=-c*d,t[6]=l,t[10]=c*h}else if(e.order==="ZYX"){const m=c*p,_=c*g,x=l*p,w=l*g;t[0]=h*p,t[4]=x*d-_,t[8]=m*d+w,t[1]=h*g,t[5]=w*d+m,t[9]=_*d-x,t[2]=-d,t[6]=l*h,t[10]=c*h}else if(e.order==="YZX"){const m=c*h,_=c*d,x=l*h,w=l*d;t[0]=h*p,t[4]=w-m*g,t[8]=x*g+_,t[1]=g,t[5]=c*p,t[9]=-l*p,t[2]=-d*p,t[6]=_*g+x,t[10]=m-w*g}else if(e.order==="XZY"){const m=c*h,_=c*d,x=l*h,w=l*d;t[0]=h*p,t[4]=-g,t[8]=d*p,t[1]=m*g+w,t[5]=c*p,t[9]=_*g-x,t[2]=x*g-_,t[6]=l*p,t[10]=w*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z0,e,H0)}lookAt(e,t,n){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),di.crossVectors(n,pn),di.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),di.crossVectors(n,pn)),di.normalize(),Gs.crossVectors(pn,di),r[0]=di.x,r[4]=Gs.x,r[8]=pn.x,r[1]=di.y,r[5]=Gs.y,r[9]=pn.y,r[2]=di.z,r[6]=Gs.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,c=n[0],l=n[4],h=n[8],d=n[12],p=n[1],g=n[5],m=n[9],_=n[13],x=n[2],w=n[6],S=n[10],v=n[14],L=n[3],T=n[7],A=n[11],H=n[15],D=r[0],k=r[4],V=r[8],I=r[12],E=r[1],z=r[5],ne=r[9],K=r[13],B=r[2],$=r[6],J=r[10],te=r[14],j=r[3],ve=r[7],De=r[11],Fe=r[15];return s[0]=c*D+l*E+h*B+d*j,s[4]=c*k+l*z+h*$+d*ve,s[8]=c*V+l*ne+h*J+d*De,s[12]=c*I+l*K+h*te+d*Fe,s[1]=p*D+g*E+m*B+_*j,s[5]=p*k+g*z+m*$+_*ve,s[9]=p*V+g*ne+m*J+_*De,s[13]=p*I+g*K+m*te+_*Fe,s[2]=x*D+w*E+S*B+v*j,s[6]=x*k+w*z+S*$+v*ve,s[10]=x*V+w*ne+S*J+v*De,s[14]=x*I+w*K+S*te+v*Fe,s[3]=L*D+T*E+A*B+H*j,s[7]=L*k+T*z+A*$+H*ve,s[11]=L*V+T*ne+A*J+H*De,s[15]=L*I+T*K+A*te+H*Fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],c=e[1],l=e[5],h=e[9],d=e[13],p=e[2],g=e[6],m=e[10],_=e[14],x=e[3],w=e[7],S=e[11],v=e[15];return x*(+s*h*g-r*d*g-s*l*m+n*d*m+r*l*_-n*h*_)+w*(+t*h*_-t*d*m+s*c*m-r*c*_+r*d*p-s*h*p)+S*(+t*d*g-t*l*_-s*c*g+n*c*_+s*l*p-n*d*p)+v*(-r*l*p-t*h*g+t*l*m+r*c*g-n*c*m+n*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],l=e[5],h=e[6],d=e[7],p=e[8],g=e[9],m=e[10],_=e[11],x=e[12],w=e[13],S=e[14],v=e[15],L=g*S*d-w*m*d+w*h*_-l*S*_-g*h*v+l*m*v,T=x*m*d-p*S*d-x*h*_+c*S*_+p*h*v-c*m*v,A=p*w*d-x*g*d+x*l*_-c*w*_-p*l*v+c*g*v,H=x*g*h-p*w*h-x*l*m+c*w*m+p*l*S-c*g*S,D=t*L+n*T+r*A+s*H;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/D;return e[0]=L*k,e[1]=(w*m*s-g*S*s-w*r*_+n*S*_+g*r*v-n*m*v)*k,e[2]=(l*S*s-w*h*s+w*r*d-n*S*d-l*r*v+n*h*v)*k,e[3]=(g*h*s-l*m*s-g*r*d+n*m*d+l*r*_-n*h*_)*k,e[4]=T*k,e[5]=(p*S*s-x*m*s+x*r*_-t*S*_-p*r*v+t*m*v)*k,e[6]=(x*h*s-c*S*s-x*r*d+t*S*d+c*r*v-t*h*v)*k,e[7]=(c*m*s-p*h*s+p*r*d-t*m*d-c*r*_+t*h*_)*k,e[8]=A*k,e[9]=(x*g*s-p*w*s-x*n*_+t*w*_+p*n*v-t*g*v)*k,e[10]=(c*w*s-x*l*s+x*n*d-t*w*d-c*n*v+t*l*v)*k,e[11]=(p*l*s-c*g*s-p*n*d+t*g*d+c*n*_-t*l*_)*k,e[12]=H*k,e[13]=(p*w*r-x*g*r+x*n*m-t*w*m-p*n*S+t*g*S)*k,e[14]=(x*l*r-c*w*r-x*n*h+t*w*h+c*n*S-t*l*S)*k,e[15]=(c*g*r-p*l*r+p*n*h-t*g*h-c*n*m+t*l*m)*k,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,c=e.x,l=e.y,h=e.z,d=s*c,p=s*l;return this.set(d*c+n,d*l-r*h,d*h+r*l,0,d*l+r*h,p*l+n,p*h-r*c,0,d*h-r*l,p*h+r*c,s*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,c){return this.set(1,n,s,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,c=t._y,l=t._z,h=t._w,d=s+s,p=c+c,g=l+l,m=s*d,_=s*p,x=s*g,w=c*p,S=c*g,v=l*g,L=h*d,T=h*p,A=h*g,H=n.x,D=n.y,k=n.z;return r[0]=(1-(w+v))*H,r[1]=(_+A)*H,r[2]=(x-T)*H,r[3]=0,r[4]=(_-A)*D,r[5]=(1-(m+v))*D,r[6]=(S+L)*D,r[7]=0,r[8]=(x+T)*k,r[9]=(S-L)*k,r[10]=(1-(m+w))*k,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=rr.set(r[0],r[1],r[2]).length();const c=rr.set(r[4],r[5],r[6]).length(),l=rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const d=1/s,p=1/c,g=1/l;return Dn.elements[0]*=d,Dn.elements[1]*=d,Dn.elements[2]*=d,Dn.elements[4]*=p,Dn.elements[5]*=p,Dn.elements[6]*=p,Dn.elements[8]*=g,Dn.elements[9]*=g,Dn.elements[10]*=g,t.setFromRotationMatrix(Dn),n.x=s,n.y=c,n.z=l,this}makePerspective(e,t,n,r,s,c,l=ni){const h=this.elements,d=2*s/(t-e),p=2*s/(n-r),g=(t+e)/(t-e),m=(n+r)/(n-r);let _,x;if(l===ni)_=-(c+s)/(c-s),x=-2*c*s/(c-s);else if(l===Io)_=-c/(c-s),x=-c*s/(c-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=p,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=_,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,s,c,l=ni){const h=this.elements,d=1/(t-e),p=1/(n-r),g=1/(c-s),m=(t+e)*d,_=(n+r)*p;let x,w;if(l===ni)x=(c+s)*g,w=-2*g;else if(l===Io)x=s*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-m,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-_,h[2]=0,h[6]=0,h[10]=w,h[14]=-x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rr=new G,Dn=new lt,z0=new G(0,0,0),H0=new G(1,1,1),di=new G,Gs=new G,pn=new G,Uu=new lt,Ou=new hn;class Tn{constructor(e=0,t=0,n=0,r=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],c=r[4],l=r[8],h=r[1],d=r[5],p=r[9],g=r[2],m=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-g,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Gt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-g,s)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-p,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let V0=0;const ku=new G,sr=new hn,Zn=new lt,Ws=new G,Xr=new G,G0=new G,W0=new hn,Bu=new G(1,0,0),zu=new G(0,1,0),Hu=new G(0,0,1),Vu={type:"added"},X0={type:"removed"},or={type:"childadded",child:null},ba={type:"childremoved",child:null};class Ut extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new G,t=new Tn,n=new hn,r=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new at}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(Bu,e)}rotateY(e){return this.rotateOnAxis(zu,e)}rotateZ(e){return this.rotateOnAxis(Hu,e)}translateOnAxis(e,t){return ku.copy(e).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bu,e)}translateY(e){return this.translateOnAxis(zu,e)}translateZ(e){return this.translateOnAxis(Hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ws.copy(e):Ws.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Xr,Ws,this.up):Zn.lookAt(Ws,Xr,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),sr.setFromRotationMatrix(Zn),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vu),or.child=e,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X0),ba.child=e,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vu),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,c=r.length;s<c;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,e,G0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,W0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,c=r.length;s<c;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const g=h[d];s(e.shapes,g)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,d=this.material.length;h<d;h++)l.push(s(e.materials,this.material[h]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(s(e.animations,h))}}if(t){const l=c(e.geometries),h=c(e.materials),d=c(e.textures),p=c(e.images),g=c(e.shapes),m=c(e.skeletons),_=c(e.animations),x=c(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),x.length>0&&(n.nodes=x)}return n.object=r,n;function c(l){const h=[];for(const d in l){const p=l[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new G(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new G,Kn=new G,wa=new G,Jn=new G,ar=new G,cr=new G,Gu=new G,Ta=new G,Aa=new G,Ca=new G,Ra=new Et,Pa=new Et,Da=new Et;class Mn{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ln.subVectors(e,t),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ln.subVectors(r,t),Kn.subVectors(n,t),wa.subVectors(e,t);const c=Ln.dot(Ln),l=Ln.dot(Kn),h=Ln.dot(wa),d=Kn.dot(Kn),p=Kn.dot(wa),g=c*d-l*l;if(g===0)return s.set(0,0,0),null;const m=1/g,_=(d*h-l*p)*m,x=(c*p-l*h)*m;return s.set(1-_-x,x,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,r,s,c,l,h){return this.getBarycoord(e,t,n,r,Jn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,Jn.x),h.addScaledVector(c,Jn.y),h.addScaledVector(l,Jn.z),h)}static getInterpolatedAttribute(e,t,n,r,s,c){return Ra.setScalar(0),Pa.setScalar(0),Da.setScalar(0),Ra.fromBufferAttribute(e,t),Pa.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,r),c.setScalar(0),c.addScaledVector(Ra,s.x),c.addScaledVector(Pa,s.y),c.addScaledVector(Da,s.z),c}static isFrontFacing(e,t,n,r){return Ln.subVectors(n,t),Kn.subVectors(e,t),Ln.cross(Kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Ln.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let c,l;ar.subVectors(r,n),cr.subVectors(s,n),Ta.subVectors(e,n);const h=ar.dot(Ta),d=cr.dot(Ta);if(h<=0&&d<=0)return t.copy(n);Aa.subVectors(e,r);const p=ar.dot(Aa),g=cr.dot(Aa);if(p>=0&&g<=p)return t.copy(r);const m=h*g-p*d;if(m<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(n).addScaledVector(ar,c);Ca.subVectors(e,s);const _=ar.dot(Ca),x=cr.dot(Ca);if(x>=0&&_<=x)return t.copy(s);const w=_*d-h*x;if(w<=0&&d>=0&&x<=0)return l=d/(d-x),t.copy(n).addScaledVector(cr,l);const S=p*x-_*g;if(S<=0&&g-p>=0&&_-x>=0)return Gu.subVectors(s,r),l=(g-p)/(g-p+(_-x)),t.copy(r).addScaledVector(Gu,l);const v=1/(S+w+m);return c=w*v,l=m*v,t.copy(n).addScaledVector(ar,c).addScaledVector(cr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function La(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=St.workingColorSpace){if(e=pl(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,c=2*n-s;this.r=La(c,s,e+1/3),this.g=La(c,s,e),this.b=La(c,s,e-1/3)}return St.toWorkingColorSpace(this,r),this}setStyle(e,t=Sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const c=r[1],l=r[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const n=Pd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return St.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Gt(Qt.r*255,0,255))*65536+Math.round(Gt(Qt.g*255,0,255))*256+Math.round(Gt(Qt.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,r=Qt.g,s=Qt.b,c=Math.max(n,r,s),l=Math.min(n,r,s);let h,d;const p=(l+c)/2;if(l===c)h=0,d=0;else{const g=c-l;switch(d=p<=.5?g/(c+l):g/(2-c-l),c){case n:h=(r-s)/g+(r<s?6:0);break;case r:h=(s-n)/g+2;break;case s:h=(n-r)/g+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Sn){St.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,r=Qt.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Xs);const n=ts(fi.h,Xs.h,t),r=ts(fi.s,Xs.s,t),s=ts(fi.l,Xs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new ct;ct.NAMES=Pd;let $0=0;class qi extends Yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=wn(),this.name="",this.blending=xr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=cc,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ac&&(n.blendSrc=this.blendSrc),this.blendDst!==cc&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const c=[];for(const l in s){const h=s[l];delete h.metadata,c.push(h)}return c}if(t){const s=r(e.textures),c=r(e.images);s.length>0&&(n.textures=s),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class No extends qi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new G,$s=new Re;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jc&&(e.usage=this.usage),e}}class Dd extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ld extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let j0=0;const yn=new lt,Ia=new Ut,lr=new G,mn=new Gn,$r=new Gn,jt=new G;class $t extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ad(e)?Ld:Dd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new at().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Rt(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,c=t.length;s<c;s++){const l=t[s];$r.setFromBufferAttribute(l),this.morphTargetsRelative?(jt.addVectors(mn.min,$r.min),mn.expandByPoint(jt),jt.addVectors(mn.max,$r.max),mn.expandByPoint(jt)):(mn.expandByPoint($r.min),mn.expandByPoint($r.max))}mn.getCenter(n);let r=0;for(let s=0,c=e.count;s<c;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(jt));if(t)for(let s=0,c=t.length;s<c;s++){const l=t[s],h=this.morphTargetsRelative;for(let d=0,p=l.count;d<p;d++)jt.fromBufferAttribute(l,d),h&&(lr.fromBufferAttribute(e,d),jt.add(lr)),r=Math.max(r,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],h=[];for(let V=0;V<n.count;V++)l[V]=new G,h[V]=new G;const d=new G,p=new G,g=new G,m=new Re,_=new Re,x=new Re,w=new G,S=new G;function v(V,I,E){d.fromBufferAttribute(n,V),p.fromBufferAttribute(n,I),g.fromBufferAttribute(n,E),m.fromBufferAttribute(s,V),_.fromBufferAttribute(s,I),x.fromBufferAttribute(s,E),p.sub(d),g.sub(d),_.sub(m),x.sub(m);const z=1/(_.x*x.y-x.x*_.y);isFinite(z)&&(w.copy(p).multiplyScalar(x.y).addScaledVector(g,-_.y).multiplyScalar(z),S.copy(g).multiplyScalar(_.x).addScaledVector(p,-x.x).multiplyScalar(z),l[V].add(w),l[I].add(w),l[E].add(w),h[V].add(S),h[I].add(S),h[E].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let V=0,I=L.length;V<I;++V){const E=L[V],z=E.start,ne=E.count;for(let K=z,B=z+ne;K<B;K+=3)v(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const T=new G,A=new G,H=new G,D=new G;function k(V){H.fromBufferAttribute(r,V),D.copy(H);const I=l[V];T.copy(I),T.sub(H.multiplyScalar(H.dot(I))).normalize(),A.crossVectors(D,I);const z=A.dot(h[V])<0?-1:1;c.setXYZW(V,T.x,T.y,T.z,z)}for(let V=0,I=L.length;V<I;++V){const E=L[V],z=E.start,ne=E.count;for(let K=z,B=z+ne;K<B;K+=3)k(e.getX(K+0)),k(e.getX(K+1)),k(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const r=new G,s=new G,c=new G,l=new G,h=new G,d=new G,p=new G,g=new G;if(e)for(let m=0,_=e.count;m<_;m+=3){const x=e.getX(m+0),w=e.getX(m+1),S=e.getX(m+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,w),c.fromBufferAttribute(t,S),p.subVectors(c,s),g.subVectors(r,s),p.cross(g),l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,S),l.add(p),h.add(p),d.add(p),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(w,h.x,h.y,h.z),n.setXYZ(S,d.x,d.y,d.z)}else for(let m=0,_=t.count;m<_;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),p.subVectors(c,s),g.subVectors(r,s),p.cross(g),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(l,h){const d=l.array,p=l.itemSize,g=l.normalized,m=new d.constructor(h.length*p);let _=0,x=0;for(let w=0,S=h.length;w<S;w++){l.isInterleavedBufferAttribute?_=h[w]*l.data.stride+l.offset:_=h[w]*p;for(let v=0;v<p;v++)m[x++]=d[_++]}return new Zt(m,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],d=e(h,n);t.setAttribute(l,d)}const s=this.morphAttributes;for(const l in s){const h=[],d=s[l];for(let p=0,g=d.length;p<g;p++){const m=d[p],_=e(m,n);h.push(_)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,h=c.length;l<h;l++){const d=c[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const d=n[h];e.data.attributes[h]=d.toJSON(e.data)}const r={};let s=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let g=0,m=d.length;g<m;g++){const _=d[g];p.push(_.toJSON(e.data))}p.length>0&&(r[h]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const d in r){const p=r[d];this.setAttribute(d,p.clone(t))}const s=e.morphAttributes;for(const d in s){const p=[],g=s[d];for(let m=0,_=g.length;m<_;m++)p.push(g[m].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,p=c.length;d<p;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wu=new lt,Li=new Fr,js=new oi,Xu=new G,Ys=new G,qs=new G,Zs=new G,Na=new G,Ks=new G,$u=new G,Js=new G;class en extends Ut{constructor(e=new $t,t=new No){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){Ks.set(0,0,0);for(let h=0,d=s.length;h<d;h++){const p=l[h],g=s[h];p!==0&&(Na.fromBufferAttribute(g,e),c?Ks.addScaledVector(Na,p):Ks.addScaledVector(Na.sub(t),p))}t.add(Ks)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(s),Li.copy(e.ray).recast(e.near),!(js.containsPoint(Li.origin)===!1&&(Li.intersectSphere(js,Xu)===null||Li.origin.distanceToSquared(Xu)>(e.far-e.near)**2))&&(Wu.copy(s).invert(),Li.copy(e.ray).applyMatrix4(Wu),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let r;const s=this.geometry,c=this.material,l=s.index,h=s.attributes.position,d=s.attributes.uv,p=s.attributes.uv1,g=s.attributes.normal,m=s.groups,_=s.drawRange;if(l!==null)if(Array.isArray(c))for(let x=0,w=m.length;x<w;x++){const S=m[x],v=c[S.materialIndex],L=Math.max(S.start,_.start),T=Math.min(l.count,Math.min(S.start+S.count,_.start+_.count));for(let A=L,H=T;A<H;A+=3){const D=l.getX(A),k=l.getX(A+1),V=l.getX(A+2);r=Qs(this,v,e,n,d,p,g,D,k,V),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const x=Math.max(0,_.start),w=Math.min(l.count,_.start+_.count);for(let S=x,v=w;S<v;S+=3){const L=l.getX(S),T=l.getX(S+1),A=l.getX(S+2);r=Qs(this,c,e,n,d,p,g,L,T,A),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(c))for(let x=0,w=m.length;x<w;x++){const S=m[x],v=c[S.materialIndex],L=Math.max(S.start,_.start),T=Math.min(h.count,Math.min(S.start+S.count,_.start+_.count));for(let A=L,H=T;A<H;A+=3){const D=A,k=A+1,V=A+2;r=Qs(this,v,e,n,d,p,g,D,k,V),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const x=Math.max(0,_.start),w=Math.min(h.count,_.start+_.count);for(let S=x,v=w;S<v;S+=3){const L=S,T=S+1,A=S+2;r=Qs(this,c,e,n,d,p,g,L,T,A),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}}}function Y0(i,e,t,n,r,s,c,l){let h;if(e.side===ln?h=n.intersectTriangle(c,s,r,!0,l):h=n.intersectTriangle(r,s,c,e.side===xi,l),h===null)return null;Js.copy(l),Js.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Js);return d<t.near||d>t.far?null:{distance:d,point:Js.clone(),object:i}}function Qs(i,e,t,n,r,s,c,l,h,d){i.getVertexPosition(l,Ys),i.getVertexPosition(h,qs),i.getVertexPosition(d,Zs);const p=Y0(i,e,t,n,Ys,qs,Zs,$u);if(p){const g=new G;Mn.getBarycoord($u,Ys,qs,Zs,g),r&&(p.uv=Mn.getInterpolatedAttribute(r,l,h,d,g,new Re)),s&&(p.uv1=Mn.getInterpolatedAttribute(s,l,h,d,g,new Re)),c&&(p.normal=Mn.getInterpolatedAttribute(c,l,h,d,g,new G),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:l,b:h,c:d,normal:new G,materialIndex:0};Mn.getNormal(Ys,qs,Zs,m.normal),p.face=m,p.barycoord=g}return p}class Ur extends $t{constructor(e=1,t=1,n=1,r=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:c};const l=this;r=Math.floor(r),s=Math.floor(s),c=Math.floor(c);const h=[],d=[],p=[],g=[];let m=0,_=0;x("z","y","x",-1,-1,n,t,e,c,s,0),x("z","y","x",1,-1,n,t,-e,c,s,1),x("x","z","y",1,1,e,n,t,r,c,2),x("x","z","y",1,-1,e,n,-t,r,c,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new Rt(d,3)),this.setAttribute("normal",new Rt(p,3)),this.setAttribute("uv",new Rt(g,2));function x(w,S,v,L,T,A,H,D,k,V,I){const E=A/k,z=H/V,ne=A/2,K=H/2,B=D/2,$=k+1,J=V+1;let te=0,j=0;const ve=new G;for(let De=0;De<J;De++){const Fe=De*z-K;for(let Ze=0;Ze<$;Ze++){const it=Ze*E-ne;ve[w]=it*L,ve[S]=Fe*T,ve[v]=B,d.push(ve.x,ve.y,ve.z),ve[w]=0,ve[S]=0,ve[v]=D>0?1:-1,p.push(ve.x,ve.y,ve.z),g.push(Ze/k),g.push(1-De/V),te+=1}}for(let De=0;De<V;De++)for(let Fe=0;Fe<k;Fe++){const Ze=m+Fe+$*De,it=m+Fe+$*(De+1),oe=m+(Fe+1)+$*(De+1),_e=m+(Fe+1)+$*De;h.push(Ze,it,_e),h.push(it,oe,_e),j+=6}l.addGroup(_,j,I),_+=j,m+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Dr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function cn(i){const e={};for(let t=0;t<i.length;t++){const n=Dr(i[t]);for(const r in n)e[r]=n[r]}return e}function q0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Id(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const Z0={clone:Dr,merge:cn};var K0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends qi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K0,this.fragmentShader=J0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=q0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nd extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new G,ju=new Re,Yu=new Re;class gn extends Nd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,ju,Yu),t.subVectors(Yu,ju)}setViewOffset(e,t,n,r,s,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;s+=c.offsetX*r/h,t-=c.offsetY*n/d,r*=c.width/h,n*=c.height/d}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ur=-90,hr=1;class Q0 extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(ur,hr,e,t);r.layers=this.layers,this.add(r);const s=new gn(ur,hr,e,t);s.layers=this.layers,this.add(s);const c=new gn(ur,hr,e,t);c.layers=this.layers,this.add(c);const l=new gn(ur,hr,e,t);l.layers=this.layers,this.add(l);const h=new gn(ur,hr,e,t);h.layers=this.layers,this.add(h);const d=new gn(ur,hr,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,c,l,h]=t;for(const d of t)this.remove(d);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Io)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,c,l,h,d,p]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,h),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(g,m,_),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Fd extends tn{constructor(e,t,n,r,s,c,l,h,d,p){e=e!==void 0?e:[],t=t!==void 0?t:Tr,super(e,t,n,r,s,c,l,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ey extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Fd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ur(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:vi});s.uniforms.tEquirect.value=t;const c=new en(r,s),l=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Vn),new Q0(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(s)}}const Fa=new G,ty=new G,ny=new at;class mi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Fa.subVectors(n,t).cross(ty.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ny.getNormalMatrix(e),r=this.coplanarPoint(Fa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new oi,eo=new G;class gl{constructor(e=new mi,t=new mi,n=new mi,r=new mi,s=new mi,c=new mi){this.planes=[e,t,n,r,s,c]}set(e,t,n,r,s,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni){const n=this.planes,r=e.elements,s=r[0],c=r[1],l=r[2],h=r[3],d=r[4],p=r[5],g=r[6],m=r[7],_=r[8],x=r[9],w=r[10],S=r[11],v=r[12],L=r[13],T=r[14],A=r[15];if(n[0].setComponents(h-s,m-d,S-_,A-v).normalize(),n[1].setComponents(h+s,m+d,S+_,A+v).normalize(),n[2].setComponents(h+c,m+p,S+x,A+L).normalize(),n[3].setComponents(h-c,m-p,S-x,A-L).normalize(),n[4].setComponents(h-l,m-g,S-w,A-T).normalize(),t===ni)n[5].setComponents(h+l,m+g,S+w,A+T).normalize();else if(t===Io)n[5].setComponents(l,g,w,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(eo.x=r.normal.x>0?e.max.x:e.min.x,eo.y=r.normal.y>0?e.max.y:e.min.y,eo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ud(){let i=null,e=!1,t=null,n=null;function r(s,c){t(s,c),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function iy(i){const e=new WeakMap;function t(l,h){const d=l.array,p=l.usage,g=d.byteLength,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,d,p),l.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:g}}function n(l,h,d){const p=h.array,g=h.updateRanges;if(i.bindBuffer(d,l),g.length===0)i.bufferSubData(d,0,p);else{g.sort((_,x)=>_.start-x.start);let m=0;for(let _=1;_<g.length;_++){const x=g[m],w=g[_];w.start<=x.start+x.count+1?x.count=Math.max(x.count,w.start+w.count-x.start):(++m,g[m]=w)}g.length=m+1;for(let _=0,x=g.length;_<x;_++){const w=g[_];i.bufferSubData(d,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=e.get(l);h&&(i.deleteBuffer(h.buffer),e.delete(l))}function c(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const p=e.get(l);(!p||p.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,t(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,l,h),d.version=l.version}}return{get:r,remove:s,update:c}}class Xo extends $t{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,c=t/2,l=Math.floor(n),h=Math.floor(r),d=l+1,p=h+1,g=e/l,m=t/h,_=[],x=[],w=[],S=[];for(let v=0;v<p;v++){const L=v*m-c;for(let T=0;T<d;T++){const A=T*g-s;x.push(A,-L,0),w.push(0,0,1),S.push(T/l),S.push(1-v/h)}}for(let v=0;v<h;v++)for(let L=0;L<l;L++){const T=L+d*v,A=L+d*(v+1),H=L+1+d*(v+1),D=L+1+d*v;_.push(T,A,D),_.push(A,H,D)}this.setIndex(_),this.setAttribute("position",new Rt(x,3)),this.setAttribute("normal",new Rt(w,3)),this.setAttribute("uv",new Rt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.widthSegments,e.heightSegments)}}var ry=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sy=`#ifdef USE_ALPHAHASH
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
#endif`,oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ay=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ly=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uy=`#ifdef USE_AOMAP
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
#endif`,hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dy=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,py=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,my=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_y=`#ifdef USE_IRIDESCENCE
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
#endif`,vy=`#ifdef USE_BUMPMAP
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
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ay=`#define PI 3.141592653589793
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
} // validated`,Cy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ry=`vec3 transformedNormal = objectNormal;
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
#endif`,Py=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uy=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Oy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,By=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xy=`#ifdef USE_GRADIENTMAP
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
}`,$y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qy=`uniform bool receiveShadow;
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
#endif`,Zy=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,Ky=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tx=`PhysicalMaterial material;
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
#endif`,nx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
}`,ix=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rx=`#if defined( RE_IndirectDiffuse )
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
#endif`,sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ox=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ax=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fx=`#if defined( USE_POINTS_UV )
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
#endif`,px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yx=`#ifdef USE_MORPHTARGETS
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
#endif`,xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tx=`#ifdef USE_NORMALMAP
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
#endif`,Ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vx=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wx=`#ifdef USE_SKINNING
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
#endif`,Xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kx=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jx=`#ifdef USE_TRANSMISSION
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
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rS=`uniform sampler2D t2D;
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
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`#include <common>
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
}`,uS=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hS=`#define DISTANCE
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
}`,dS=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`uniform float scale;
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
}`,gS=`uniform vec3 diffuse;
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
}`,_S=`#include <common>
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
}`,vS=`uniform vec3 diffuse;
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
}`,yS=`#define LAMBERT
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
}`,xS=`#define LAMBERT
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
}`,SS=`#define MATCAP
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
}`,MS=`#define MATCAP
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
}`,ES=`#define NORMAL
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
}`,bS=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wS=`#define PHONG
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
}`,TS=`#define PHONG
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
}`,AS=`#define STANDARD
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
}`,CS=`#define STANDARD
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
}`,RS=`#define TOON
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
}`,PS=`#define TOON
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
}`,DS=`uniform float size;
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
}`,LS=`uniform vec3 diffuse;
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
}`,IS=`#include <common>
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
}`,NS=`uniform vec3 color;
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
}`,FS=`uniform float rotation;
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
}`,US=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:ry,alphahash_pars_fragment:sy,alphamap_fragment:oy,alphamap_pars_fragment:ay,alphatest_fragment:cy,alphatest_pars_fragment:ly,aomap_fragment:uy,aomap_pars_fragment:hy,batching_pars_vertex:dy,batching_vertex:fy,begin_vertex:py,beginnormal_vertex:my,bsdfs:gy,iridescence_fragment:_y,bumpmap_pars_fragment:vy,clipping_planes_fragment:yy,clipping_planes_pars_fragment:xy,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:My,color_fragment:Ey,color_pars_fragment:by,color_pars_vertex:wy,color_vertex:Ty,common:Ay,cube_uv_reflection_fragment:Cy,defaultnormal_vertex:Ry,displacementmap_pars_vertex:Py,displacementmap_vertex:Dy,emissivemap_fragment:Ly,emissivemap_pars_fragment:Iy,colorspace_fragment:Ny,colorspace_pars_fragment:Fy,envmap_fragment:Uy,envmap_common_pars_fragment:Oy,envmap_pars_fragment:ky,envmap_pars_vertex:By,envmap_physical_pars_fragment:Zy,envmap_vertex:zy,fog_vertex:Hy,fog_pars_vertex:Vy,fog_fragment:Gy,fog_pars_fragment:Wy,gradientmap_pars_fragment:Xy,lightmap_pars_fragment:$y,lights_lambert_fragment:jy,lights_lambert_pars_fragment:Yy,lights_pars_begin:qy,lights_toon_fragment:Ky,lights_toon_pars_fragment:Jy,lights_phong_fragment:Qy,lights_phong_pars_fragment:ex,lights_physical_fragment:tx,lights_physical_pars_fragment:nx,lights_fragment_begin:ix,lights_fragment_maps:rx,lights_fragment_end:sx,logdepthbuf_fragment:ox,logdepthbuf_pars_fragment:ax,logdepthbuf_pars_vertex:cx,logdepthbuf_vertex:lx,map_fragment:ux,map_pars_fragment:hx,map_particle_fragment:dx,map_particle_pars_fragment:fx,metalnessmap_fragment:px,metalnessmap_pars_fragment:mx,morphinstance_vertex:gx,morphcolor_vertex:_x,morphnormal_vertex:vx,morphtarget_pars_vertex:yx,morphtarget_vertex:xx,normal_fragment_begin:Sx,normal_fragment_maps:Mx,normal_pars_fragment:Ex,normal_pars_vertex:bx,normal_vertex:wx,normalmap_pars_fragment:Tx,clearcoat_normal_fragment_begin:Ax,clearcoat_normal_fragment_maps:Cx,clearcoat_pars_fragment:Rx,iridescence_pars_fragment:Px,opaque_fragment:Dx,packing:Lx,premultiplied_alpha_fragment:Ix,project_vertex:Nx,dithering_fragment:Fx,dithering_pars_fragment:Ux,roughnessmap_fragment:Ox,roughnessmap_pars_fragment:kx,shadowmap_pars_fragment:Bx,shadowmap_pars_vertex:zx,shadowmap_vertex:Hx,shadowmask_pars_fragment:Vx,skinbase_vertex:Gx,skinning_pars_vertex:Wx,skinning_vertex:Xx,skinnormal_vertex:$x,specularmap_fragment:jx,specularmap_pars_fragment:Yx,tonemapping_fragment:qx,tonemapping_pars_fragment:Zx,transmission_fragment:Kx,transmission_pars_fragment:Jx,uv_pars_fragment:Qx,uv_pars_vertex:eS,uv_vertex:tS,worldpos_vertex:nS,background_vert:iS,background_frag:rS,backgroundCube_vert:sS,backgroundCube_frag:oS,cube_vert:aS,cube_frag:cS,depth_vert:lS,depth_frag:uS,distanceRGBA_vert:hS,distanceRGBA_frag:dS,equirect_vert:fS,equirect_frag:pS,linedashed_vert:mS,linedashed_frag:gS,meshbasic_vert:_S,meshbasic_frag:vS,meshlambert_vert:yS,meshlambert_frag:xS,meshmatcap_vert:SS,meshmatcap_frag:MS,meshnormal_vert:ES,meshnormal_frag:bS,meshphong_vert:wS,meshphong_frag:TS,meshphysical_vert:AS,meshphysical_frag:CS,meshtoon_vert:RS,meshtoon_frag:PS,points_vert:DS,points_frag:LS,shadow_vert:IS,shadow_frag:NS,sprite_vert:FS,sprite_frag:US},Ne={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Hn={basic:{uniforms:cn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:cn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ct(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:cn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:cn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:cn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new ct(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:cn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:cn([Ne.points,Ne.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:cn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:cn([Ne.common,Ne.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:cn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:cn([Ne.sprite,Ne.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:cn([Ne.common,Ne.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:cn([Ne.lights,Ne.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Hn.physical={uniforms:cn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const to={r:0,b:0,g:0},Ni=new Tn,OS=new lt;function kS(i,e,t,n,r,s,c){const l=new ct(0);let h=s===!0?0:1,d,p,g=null,m=0,_=null;function x(L){let T=L.isScene===!0?L.background:null;return T&&T.isTexture&&(T=(L.backgroundBlurriness>0?t:e).get(T)),T}function w(L){let T=!1;const A=x(L);A===null?v(l,h):A&&A.isColor&&(v(A,1),T=!0);const H=i.xr.getEnvironmentBlendMode();H==="additive"?n.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(L,T){const A=x(T);A&&(A.isCubeTexture||A.mapping===Go)?(p===void 0&&(p=new en(new Ur(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Dr(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(H,D,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Ni.copy(T.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),p.material.uniforms.envMap.value=A,p.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(OS.makeRotationFromEuler(Ni)),p.material.toneMapped=St.getTransfer(A.colorSpace)!==Tt,(g!==A||m!==A.version||_!==i.toneMapping)&&(p.material.needsUpdate=!0,g=A,m=A.version,_=i.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(d===void 0&&(d=new en(new Xo(2,2),new Si({name:"BackgroundMaterial",uniforms:Dr(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=A,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.toneMapped=St.getTransfer(A.colorSpace)!==Tt,A.matrixAutoUpdate===!0&&A.updateMatrix(),d.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||m!==A.version||_!==i.toneMapping)&&(d.material.needsUpdate=!0,g=A,m=A.version,_=i.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function v(L,T){L.getRGB(to,Id(i)),n.buffers.color.setClear(to.r,to.g,to.b,T,c)}return{getClearColor:function(){return l},setClearColor:function(L,T=1){l.set(L),h=T,v(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,v(l,h)},render:w,addToRenderList:S}}function BS(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,c=!1;function l(E,z,ne,K,B){let $=!1;const J=g(K,ne,z);s!==J&&(s=J,d(s.object)),$=_(E,K,ne,B),$&&x(E,K,ne,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),($||c)&&(c=!1,A(E,z,ne,K),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function h(){return i.createVertexArray()}function d(E){return i.bindVertexArray(E)}function p(E){return i.deleteVertexArray(E)}function g(E,z,ne){const K=ne.wireframe===!0;let B=n[E.id];B===void 0&&(B={},n[E.id]=B);let $=B[z.id];$===void 0&&($={},B[z.id]=$);let J=$[K];return J===void 0&&(J=m(h()),$[K]=J),J}function m(E){const z=[],ne=[],K=[];for(let B=0;B<t;B++)z[B]=0,ne[B]=0,K[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ne,attributeDivisors:K,object:E,attributes:{},index:null}}function _(E,z,ne,K){const B=s.attributes,$=z.attributes;let J=0;const te=ne.getAttributes();for(const j in te)if(te[j].location>=0){const De=B[j];let Fe=$[j];if(Fe===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(Fe=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(Fe=E.instanceColor)),De===void 0||De.attribute!==Fe||Fe&&De.data!==Fe.data)return!0;J++}return s.attributesNum!==J||s.index!==K}function x(E,z,ne,K){const B={},$=z.attributes;let J=0;const te=ne.getAttributes();for(const j in te)if(te[j].location>=0){let De=$[j];De===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(De=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(De=E.instanceColor));const Fe={};Fe.attribute=De,De&&De.data&&(Fe.data=De.data),B[j]=Fe,J++}s.attributes=B,s.attributesNum=J,s.index=K}function w(){const E=s.newAttributes;for(let z=0,ne=E.length;z<ne;z++)E[z]=0}function S(E){v(E,0)}function v(E,z){const ne=s.newAttributes,K=s.enabledAttributes,B=s.attributeDivisors;ne[E]=1,K[E]===0&&(i.enableVertexAttribArray(E),K[E]=1),B[E]!==z&&(i.vertexAttribDivisor(E,z),B[E]=z)}function L(){const E=s.newAttributes,z=s.enabledAttributes;for(let ne=0,K=z.length;ne<K;ne++)z[ne]!==E[ne]&&(i.disableVertexAttribArray(ne),z[ne]=0)}function T(E,z,ne,K,B,$,J){J===!0?i.vertexAttribIPointer(E,z,ne,B,$):i.vertexAttribPointer(E,z,ne,K,B,$)}function A(E,z,ne,K){w();const B=K.attributes,$=ne.getAttributes(),J=z.defaultAttributeValues;for(const te in $){const j=$[te];if(j.location>=0){let ve=B[te];if(ve===void 0&&(te==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),te==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor)),ve!==void 0){const De=ve.normalized,Fe=ve.itemSize,Ze=e.get(ve);if(Ze===void 0)continue;const it=Ze.buffer,oe=Ze.type,_e=Ze.bytesPerElement,Le=oe===i.INT||oe===i.UNSIGNED_INT||ve.gpuType===al;if(ve.isInterleavedBufferAttribute){const ye=ve.data,pe=ye.stride,Ae=ve.offset;if(ye.isInstancedInterleavedBuffer){for(let Je=0;Je<j.locationSize;Je++)v(j.location+Je,ye.meshPerAttribute);E.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Je=0;Je<j.locationSize;Je++)S(j.location+Je);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Je=0;Je<j.locationSize;Je++)T(j.location+Je,Fe/j.locationSize,oe,De,pe*_e,(Ae+Fe/j.locationSize*Je)*_e,Le)}else{if(ve.isInstancedBufferAttribute){for(let ye=0;ye<j.locationSize;ye++)v(j.location+ye,ve.meshPerAttribute);E.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ye=0;ye<j.locationSize;ye++)S(j.location+ye);i.bindBuffer(i.ARRAY_BUFFER,it);for(let ye=0;ye<j.locationSize;ye++)T(j.location+ye,Fe/j.locationSize,oe,De,Fe*_e,Fe/j.locationSize*ye*_e,Le)}}else if(J!==void 0){const De=J[te];if(De!==void 0)switch(De.length){case 2:i.vertexAttrib2fv(j.location,De);break;case 3:i.vertexAttrib3fv(j.location,De);break;case 4:i.vertexAttrib4fv(j.location,De);break;default:i.vertexAttrib1fv(j.location,De)}}}}L()}function H(){V();for(const E in n){const z=n[E];for(const ne in z){const K=z[ne];for(const B in K)p(K[B].object),delete K[B];delete z[ne]}delete n[E]}}function D(E){if(n[E.id]===void 0)return;const z=n[E.id];for(const ne in z){const K=z[ne];for(const B in K)p(K[B].object),delete K[B];delete z[ne]}delete n[E.id]}function k(E){for(const z in n){const ne=n[z];if(ne[E.id]===void 0)continue;const K=ne[E.id];for(const B in K)p(K[B].object),delete K[B];delete ne[E.id]}}function V(){I(),c=!0,s!==r&&(s=r,d(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:V,resetDefaultState:I,dispose:H,releaseStatesOfGeometry:D,releaseStatesOfProgram:k,initAttributes:w,enableAttribute:S,disableUnusedAttributes:L}}function zS(i,e,t){let n;function r(d){n=d}function s(d,p){i.drawArrays(n,d,p),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawArraysInstanced(n,d,p,g),t.update(p,n,g))}function l(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,p,0,g);let _=0;for(let x=0;x<g;x++)_+=p[x];t.update(_,n,1)}function h(d,p,g,m){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<d.length;x++)c(d[x],p[x],m[x]);else{_.multiDrawArraysInstancedWEBGL(n,d,0,p,0,m,0,g);let x=0;for(let w=0;w<g;w++)x+=p[w]*m[w];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function HS(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(k){return!(k!==En&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(k){const V=k===ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==si&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Nn&&!V)}function h(k){if(k==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=h(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const g=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),H=x>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:g,reverseDepthBuffer:m,maxTextures:_,maxVertexTextures:x,maxTextureSize:w,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:L,maxVaryings:T,maxFragmentUniforms:A,vertexTextures:H,maxSamples:D}}function VS(i){const e=this;let t=null,n=0,r=!1,s=!1;const c=new mi,l=new at,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const _=g.length!==0||m||n!==0||r;return r=m,n=g.length,_},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(g,m){t=p(g,m,0)},this.setState=function(g,m,_){const x=g.clippingPlanes,w=g.clipIntersection,S=g.clipShadows,v=i.get(g);if(!r||x===null||x.length===0||s&&!S)s?p(null):d();else{const L=s?0:n,T=L*4;let A=v.clippingState||null;h.value=A,A=p(x,m,T,_);for(let H=0;H!==T;++H)A[H]=t[H];v.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,m,_,x){const w=g!==null?g.length:0;let S=null;if(w!==0){if(S=h.value,x!==!0||S===null){const v=_+w*4,L=m.matrixWorldInverse;l.getNormalMatrix(L),(S===null||S.length<v)&&(S=new Float32Array(v));for(let T=0,A=_;T!==w;++T,A+=4)c.copy(g[T]).applyMatrix4(L,l),c.normal.toArray(S,A),S[A+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function GS(i){let e=new WeakMap;function t(c,l){return l===gc?c.mapping=Tr:l===_c&&(c.mapping=Ar),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===gc||l===_c)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const d=new ey(h.height);return d.fromEquirectangularTexture(i,c),e.set(c,d),c.addEventListener("dispose",r),t(d.texture,c.mapping)}else return null}}return c}function r(c){const l=c.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Od extends Nd{constructor(e=-1,t=1,n=1,r=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,c=n+e,l=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,c=s+d*this.view.width,l-=p*this.view.offsetY,h=l-p*this.view.height}this.projectionMatrix.makeOrthographic(s,c,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _r=4,qu=[.125,.215,.35,.446,.526,.582],Bi=20,Ua=new Od,Zu=new ct;let Oa=null,ka=0,Ba=0,za=!1;const Ui=(1+Math.sqrt(5))/2,dr=1/Ui,Ku=[new G(-Ui,dr,0),new G(Ui,dr,0),new G(-dr,0,Ui),new G(dr,0,Ui),new G(0,Ui,-dr),new G(0,Ui,dr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Ju{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Oa=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oa,ka,Ba),this._renderer.xr.enabled=za,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oa=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:ds,format:En,colorSpace:Nr,depthBuffer:!1},r=Qu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WS(s)),this._blurMaterial=XS(s,e,t)}return r}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,n,r){const l=new gn(90,1,t,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,m=p.toneMapping;p.getClearColor(Zu),p.toneMapping=yi,p.autoClear=!1;const _=new No({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),x=new en(new Ur,_);let w=!1;const S=e.background;S?S.isColor&&(_.color.copy(S),e.background=null,w=!0):(_.color.copy(Zu),w=!0);for(let v=0;v<6;v++){const L=v%3;L===0?(l.up.set(0,h[v],0),l.lookAt(d[v],0,0)):L===1?(l.up.set(0,0,h[v]),l.lookAt(0,d[v],0)):(l.up.set(0,h[v],0),l.lookAt(0,0,d[v]));const T=this._cubeSize;no(r,L*T,v>2?T:0,T,T),p.setRenderTarget(r),w&&p.render(x,l),p.render(e,l)}x.geometry.dispose(),x.material.dispose(),p.toneMapping=m,p.autoClear=g,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Tr||e.mapping===Ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());const s=r?this._cubemapMaterial:this._equirectMaterial,c=new en(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const h=this._cubeSize;no(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(c,Ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const c=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=Ku[(r-s-1)%Ku.length];this._blur(e,s-1,s,c,l)}t.autoClear=n}_blur(e,t,n,r,s){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",s),this._halfBlur(c,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,c,l){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new en(this._lodPlanes[r],d),m=d.uniforms,_=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Bi-1),w=s/x,S=isFinite(s)?1+Math.floor(p*w):Bi;S>Bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Bi}`);const v=[];let L=0;for(let k=0;k<Bi;++k){const V=k/w,I=Math.exp(-V*V/2);v.push(I),k===0?L+=I:k<S&&(L+=2*I)}for(let k=0;k<v.length;k++)v[k]=v[k]/L;m.envMap.value=e.texture,m.samples.value=S,m.weights.value=v,m.latitudinal.value=c==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:T}=this;m.dTheta.value=x,m.mipInt.value=T-n;const A=this._sizeLods[r],H=3*A*(r>T-_r?r-T+_r:0),D=4*(this._cubeSize-A);no(t,H,D,3*A,2*A),h.setRenderTarget(t),h.render(g,Ua)}}function WS(i){const e=[],t=[],n=[];let r=i;const s=i-_r+1+qu.length;for(let c=0;c<s;c++){const l=Math.pow(2,r);t.push(l);let h=1/l;c>i-_r?h=qu[c-i+_r-1]:c===0&&(h=0),n.push(h);const d=1/(l-2),p=-d,g=1+d,m=[p,p,g,p,g,g,p,p,g,g,p,g],_=6,x=6,w=3,S=2,v=1,L=new Float32Array(w*x*_),T=new Float32Array(S*x*_),A=new Float32Array(v*x*_);for(let D=0;D<_;D++){const k=D%3*2/3-1,V=D>2?0:-1,I=[k,V,0,k+2/3,V,0,k+2/3,V+1,0,k,V,0,k+2/3,V+1,0,k,V+1,0];L.set(I,w*x*D),T.set(m,S*x*D);const E=[D,D,D,D,D,D];A.set(E,v*x*D)}const H=new $t;H.setAttribute("position",new Zt(L,w)),H.setAttribute("uv",new Zt(T,S)),H.setAttribute("faceIndex",new Zt(A,v)),e.push(H),r>_r&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qu(i,e,t){const n=new $i(i,e,t);return n.texture.mapping=Go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function no(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function XS(i,e,t){const n=new Float32Array(Bi),r=new G(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_l(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function eh(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function th(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function _l(){return`

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
	`}function $S(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const h=l.mapping,d=h===gc||h===_c,p=h===Tr||h===Ar;if(d||p){let g=e.get(l);const m=g!==void 0?g.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==m)return t===null&&(t=new Ju(i)),g=d?t.fromEquirectangular(l,g):t.fromCubemap(l,g),g.texture.pmremVersion=l.pmremVersion,e.set(l,g),g.texture;if(g!==void 0)return g.texture;{const _=l.image;return d&&_&&_.height>0||p&&_&&r(_)?(t===null&&(t=new Ju(i)),g=d?t.fromEquirectangular(l):t.fromCubemap(l),g.texture.pmremVersion=l.pmremVersion,e.set(l,g),l.addEventListener("dispose",s),g.texture):null}}}return l}function r(l){let h=0;const d=6;for(let p=0;p<d;p++)l[p]!==void 0&&h++;return h===d}function s(l){const h=l.target;h.removeEventListener("dispose",s);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function jS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Qr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function YS(i,e,t,n){const r={},s=new WeakMap;function c(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const x in m.attributes)e.remove(m.attributes[x]);for(const x in m.morphAttributes){const w=m.morphAttributes[x];for(let S=0,v=w.length;S<v;S++)e.remove(w[S])}m.removeEventListener("dispose",c),delete r[m.id];const _=s.get(m);_&&(e.remove(_),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(g,m){return r[m.id]===!0||(m.addEventListener("dispose",c),r[m.id]=!0,t.memory.geometries++),m}function h(g){const m=g.attributes;for(const x in m)e.update(m[x],i.ARRAY_BUFFER);const _=g.morphAttributes;for(const x in _){const w=_[x];for(let S=0,v=w.length;S<v;S++)e.update(w[S],i.ARRAY_BUFFER)}}function d(g){const m=[],_=g.index,x=g.attributes.position;let w=0;if(_!==null){const L=_.array;w=_.version;for(let T=0,A=L.length;T<A;T+=3){const H=L[T+0],D=L[T+1],k=L[T+2];m.push(H,D,D,k,k,H)}}else if(x!==void 0){const L=x.array;w=x.version;for(let T=0,A=L.length/3-1;T<A;T+=3){const H=T+0,D=T+1,k=T+2;m.push(H,D,D,k,k,H)}}else return;const S=new(Ad(m)?Ld:Dd)(m,1);S.version=w;const v=s.get(g);v&&e.remove(v),s.set(g,S)}function p(g){const m=s.get(g);if(m){const _=g.index;_!==null&&m.version<_.version&&d(g)}else d(g);return s.get(g)}return{get:l,update:h,getWireframeAttribute:p}}function qS(i,e,t){let n;function r(m){n=m}let s,c;function l(m){s=m.type,c=m.bytesPerElement}function h(m,_){i.drawElements(n,_,s,m*c),t.update(_,n,1)}function d(m,_,x){x!==0&&(i.drawElementsInstanced(n,_,s,m*c,x),t.update(_,n,x))}function p(m,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,m,0,x);let S=0;for(let v=0;v<x;v++)S+=_[v];t.update(S,n,1)}function g(m,_,x,w){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<m.length;v++)d(m[v]/c,_[v],w[v]);else{S.multiDrawElementsInstancedWEBGL(n,_,0,s,m,0,w,0,x);let v=0;for(let L=0;L<x;L++)v+=_[L]*w[L];t.update(v,n,1)}}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function ZS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,c,l){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function KS(i,e,t){const n=new WeakMap,r=new Et;function s(c,l,h){const d=c.morphTargetInfluences,p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=p!==void 0?p.length:0;let m=n.get(l);if(m===void 0||m.count!==g){let I=function(){k.dispose(),n.delete(l),l.removeEventListener("dispose",I)};m!==void 0&&m.texture.dispose();const _=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,w=l.morphAttributes.color!==void 0,S=l.morphAttributes.position||[],v=l.morphAttributes.normal||[],L=l.morphAttributes.color||[];let T=0;_===!0&&(T=1),x===!0&&(T=2),w===!0&&(T=3);let A=l.attributes.position.count*T,H=1;A>e.maxTextureSize&&(H=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const D=new Float32Array(A*H*4*g),k=new Rd(D,A,H,g);k.type=Nn,k.needsUpdate=!0;const V=T*4;for(let E=0;E<g;E++){const z=S[E],ne=v[E],K=L[E],B=A*H*4*E;for(let $=0;$<z.count;$++){const J=$*V;_===!0&&(r.fromBufferAttribute(z,$),D[B+J+0]=r.x,D[B+J+1]=r.y,D[B+J+2]=r.z,D[B+J+3]=0),x===!0&&(r.fromBufferAttribute(ne,$),D[B+J+4]=r.x,D[B+J+5]=r.y,D[B+J+6]=r.z,D[B+J+7]=0),w===!0&&(r.fromBufferAttribute(K,$),D[B+J+8]=r.x,D[B+J+9]=r.y,D[B+J+10]=r.z,D[B+J+11]=K.itemSize===4?r.w:1)}}m={count:g,texture:k,size:new Re(A,H)},n.set(l,m),l.addEventListener("dispose",I)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let _=0;for(let w=0;w<d.length;w++)_+=d[w];const x=l.morphTargetsRelative?1:1-_;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",d)}h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function JS(i,e,t,n){let r=new WeakMap;function s(h){const d=n.render.frame,p=h.geometry,g=e.get(h,p);if(r.get(g)!==d&&(e.update(g),r.set(g,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==d&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){const m=h.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return g}function c(){r=new WeakMap}function l(h){const d=h.target;d.removeEventListener("dispose",l),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:c}}class kd extends tn{constructor(e,t,n,r,s,c,l,h,d,p=Sr){if(p!==Sr&&p!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===Sr&&(n=Xi),n===void 0&&p===Rr&&(n=Cr),super(null,r,s,c,l,h,p,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:_n,this.minFilter=h!==void 0?h:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bd=new tn,nh=new kd(1,1),zd=new Rd,Hd=new k0,Vd=new Fd,ih=[],rh=[],sh=new Float32Array(16),oh=new Float32Array(9),ah=new Float32Array(4);function Or(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ih[r];if(s===void 0&&(s=new Float32Array(r),ih[r]=s),e!==0){n.toArray(s,0);for(let c=1,l=0;c!==e;++c)l+=t,i[c].toArray(s,l)}return s}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $o(i,e){let t=rh[e];t===void 0&&(t=new Int32Array(e),rh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function QS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function eM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function tM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function nM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function iM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;ah.set(n),i.uniformMatrix2fv(this.addr,!1,ah),Xt(t,n)}}function rM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;oh.set(n),i.uniformMatrix3fv(this.addr,!1,oh),Xt(t,n)}}function sM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;sh.set(n),i.uniformMatrix4fv(this.addr,!1,sh),Xt(t,n)}}function oM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function aM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function cM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function lM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function uM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function dM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function fM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function pM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(nh.compareFunction=Td,s=nh):s=Bd,t.setTexture2D(e||s,r)}function mM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Hd,r)}function gM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vd,r)}function _M(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||zd,r)}function vM(i){switch(i){case 5126:return QS;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return rM;case 35676:return sM;case 5124:case 35670:return oM;case 35667:case 35671:return aM;case 35668:case 35672:return cM;case 35669:case 35673:return lM;case 5125:return uM;case 36294:return hM;case 36295:return dM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return _M}}function yM(i,e){i.uniform1fv(this.addr,e)}function xM(i,e){const t=Or(e,this.size,2);i.uniform2fv(this.addr,t)}function SM(i,e){const t=Or(e,this.size,3);i.uniform3fv(this.addr,t)}function MM(i,e){const t=Or(e,this.size,4);i.uniform4fv(this.addr,t)}function EM(i,e){const t=Or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bM(i,e){const t=Or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wM(i,e){const t=Or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function TM(i,e){i.uniform1iv(this.addr,e)}function AM(i,e){i.uniform2iv(this.addr,e)}function CM(i,e){i.uniform3iv(this.addr,e)}function RM(i,e){i.uniform4iv(this.addr,e)}function PM(i,e){i.uniform1uiv(this.addr,e)}function DM(i,e){i.uniform2uiv(this.addr,e)}function LM(i,e){i.uniform3uiv(this.addr,e)}function IM(i,e){i.uniform4uiv(this.addr,e)}function NM(i,e,t){const n=this.cache,r=e.length,s=$o(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||Bd,s[c])}function FM(i,e,t){const n=this.cache,r=e.length,s=$o(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||Hd,s[c])}function UM(i,e,t){const n=this.cache,r=e.length,s=$o(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||Vd,s[c])}function OM(i,e,t){const n=this.cache,r=e.length,s=$o(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||zd,s[c])}function kM(i){switch(i){case 5126:return yM;case 35664:return xM;case 35665:return SM;case 35666:return MM;case 35674:return EM;case 35675:return bM;case 35676:return wM;case 5124:case 35670:return TM;case 35667:case 35671:return AM;case 35668:case 35672:return CM;case 35669:case 35673:return RM;case 5125:return PM;case 36294:return DM;case 36295:return LM;case 36296:return IM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return UM;case 36289:case 36303:case 36311:case 36292:return OM}}class BM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vM(t.type)}}class zM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kM(t.type)}}class HM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,c=r.length;s!==c;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function ch(i,e){i.seq.push(e),i.map[e.id]=e}function VM(i,e,t){const n=i.name,r=n.length;for(Ha.lastIndex=0;;){const s=Ha.exec(n),c=Ha.lastIndex;let l=s[1];const h=s[2]==="]",d=s[3];if(h&&(l=l|0),d===void 0||d==="["&&c+2===r){ch(t,d===void 0?new BM(l,i,e):new zM(l,i,e));break}else{let g=t.map[l];g===void 0&&(g=new HM(l),ch(t,g)),t=g}}}class Ro{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),c=e.getUniformLocation(t,s.name);VM(s,c,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,c=t.length;s!==c;++s){const l=t[s],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function lh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const GM=37297;let WM=0;function XM(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let c=r;c<s;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}const uh=new at;function $M(i){St._getMatrix(uh,St.workingColorSpace,i);const e=`mat3( ${uh.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(i)){case Wo:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const c=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+XM(i.getShaderSource(e),c)}else return r}function jM(i,e){const t=$M(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function YM(i,e){let t;switch(e){case jv:t="Linear";break;case Yv:t="Reinhard";break;case qv:t="Cineon";break;case Zv:t="ACESFilmic";break;case Jv:t="AgX";break;case Qv:t="Neutral";break;case Kv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const io=new G;function qM(){St.getLuminanceCoefficients(io);const i=io.x.toFixed(4),e=io.y.toFixed(4),t=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function KM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function JM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),c=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[c]={type:s.type,location:i.getAttribLocation(e,c),locationSize:l}}return t}function es(i){return i!==""}function dh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(i){return i.replace(QM,tE)}const eE=new Map;function tE(i,e){let t=ht[e];if(t===void 0){const n=eE.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yc(t)}const nE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(i){return i.replace(nE,iE)}function iE(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function rE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tv?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function sE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Tr:case Ar:e="ENVMAP_TYPE_CUBE";break;case Go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oE(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ar:e="ENVMAP_MODE_REFRACTION";break}return e}function aE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pd:e="ENVMAP_BLENDING_MULTIPLY";break;case Xv:e="ENVMAP_BLENDING_MIX";break;case $v:e="ENVMAP_BLENDING_ADD";break}return e}function cE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function lE(i,e,t,n){const r=i.getContext(),s=t.defines;let c=t.vertexShader,l=t.fragmentShader;const h=rE(t),d=sE(t),p=oE(t),g=aE(t),m=cE(t),_=ZM(t),x=KM(s),w=r.createProgram();let S,v,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(es).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(es).join(`
`),v.length>0&&(v+=`
`)):(S=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),v=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?ht.tonemapping_pars_fragment:"",t.toneMapping!==yi?YM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,jM("linearToOutputTexel",t.outputColorSpace),qM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),c=Yc(c),c=dh(c,t),c=fh(c,t),l=Yc(l),l=dh(l,t),l=fh(l,t),c=ph(c),l=ph(l),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",t.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const T=L+S+c,A=L+v+l,H=lh(r,r.VERTEX_SHADER,T),D=lh(r,r.FRAGMENT_SHADER,A);r.attachShader(w,H),r.attachShader(w,D),t.index0AttributeName!==void 0?r.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function k(z){if(i.debug.checkShaderErrors){const ne=r.getProgramInfoLog(w).trim(),K=r.getShaderInfoLog(H).trim(),B=r.getShaderInfoLog(D).trim();let $=!0,J=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,w,H,D);else{const te=hh(r,H,"vertex"),j=hh(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ne+`
`+te+`
`+j)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(K===""||B==="")&&(J=!1);J&&(z.diagnostics={runnable:$,programLog:ne,vertexShader:{log:K,prefix:S},fragmentShader:{log:B,prefix:v}})}r.deleteShader(H),r.deleteShader(D),V=new Ro(r,w),I=JM(r,w)}let V;this.getUniforms=function(){return V===void 0&&k(this),V};let I;this.getAttributes=function(){return I===void 0&&k(this),I};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(w,GM)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=D,this}let uE=0;class hE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dE(e),t.set(e,n)),n}}class dE{constructor(e){this.id=uE++,this.code=e,this.usedTimes=0}}function fE(i,e,t,n,r,s,c){const l=new ml,h=new hE,d=new Set,p=[],g=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(I){return d.add(I),I===0?"uv":`uv${I}`}function S(I,E,z,ne,K){const B=ne.fog,$=K.geometry,J=I.isMeshStandardMaterial?ne.environment:null,te=(I.isMeshStandardMaterial?t:e).get(I.envMap||J),j=te&&te.mapping===Go?te.image.height:null,ve=x[I.type];I.precision!==null&&(_=r.getMaxPrecision(I.precision),_!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",_,"instead."));const De=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Fe=De!==void 0?De.length:0;let Ze=0;$.morphAttributes.position!==void 0&&(Ze=1),$.morphAttributes.normal!==void 0&&(Ze=2),$.morphAttributes.color!==void 0&&(Ze=3);let it,oe,_e,Le;if(ve){const dt=Hn[ve];it=dt.vertexShader,oe=dt.fragmentShader}else it=I.vertexShader,oe=I.fragmentShader,h.update(I),_e=h.getVertexShaderID(I),Le=h.getFragmentShaderID(I);const ye=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Ae=K.isInstancedMesh===!0,Je=K.isBatchedMesh===!0,rt=!!I.map,fe=!!I.matcap,we=!!te,F=!!I.aoMap,be=!!I.lightMap,xe=!!I.bumpMap,Be=!!I.normalMap,Pe=!!I.displacementMap,Ke=!!I.emissiveMap,ke=!!I.metalnessMap,U=!!I.roughnessMap,P=I.anisotropy>0,ie=I.clearcoat>0,he=I.dispersion>0,de=I.iridescence>0,ce=I.sheen>0,Ge=I.transmission>0,Ie=P&&!!I.anisotropyMap,He=ie&&!!I.clearcoatMap,ft=ie&&!!I.clearcoatNormalMap,Ce=ie&&!!I.clearcoatRoughnessMap,We=de&&!!I.iridescenceMap,et=de&&!!I.iridescenceThicknessMap,nt=ce&&!!I.sheenColorMap,Xe=ce&&!!I.sheenRoughnessMap,pt=!!I.specularMap,st=!!I.specularColorMap,wt=!!I.specularIntensityMap,W=Ge&&!!I.transmissionMap,Ue=Ge&&!!I.thicknessMap,ae=!!I.gradientMap,me=!!I.alphaMap,ee=I.alphaTest>0,Q=!!I.alphaHash,Qe=!!I.extensions;let It=yi;I.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(It=i.toneMapping);const Nt={shaderID:ve,shaderType:I.type,shaderName:I.name,vertexShader:it,fragmentShader:oe,defines:I.defines,customVertexShaderID:_e,customFragmentShaderID:Le,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:_,batching:Je,batchingColor:Je&&K._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&K.instanceColor!==null,instancingMorph:Ae&&K.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Nr,alphaToCoverage:!!I.alphaToCoverage,map:rt,matcap:fe,envMap:we,envMapMode:we&&te.mapping,envMapCubeUVHeight:j,aoMap:F,lightMap:be,bumpMap:xe,normalMap:Be,displacementMap:m&&Pe,emissiveMap:Ke,normalMapObjectSpace:Be&&I.normalMapType===s0,normalMapTangentSpace:Be&&I.normalMapType===wd,metalnessMap:ke,roughnessMap:U,anisotropy:P,anisotropyMap:Ie,clearcoat:ie,clearcoatMap:He,clearcoatNormalMap:ft,clearcoatRoughnessMap:Ce,dispersion:he,iridescence:de,iridescenceMap:We,iridescenceThicknessMap:et,sheen:ce,sheenColorMap:nt,sheenRoughnessMap:Xe,specularMap:pt,specularColorMap:st,specularIntensityMap:wt,transmission:Ge,transmissionMap:W,thicknessMap:Ue,gradientMap:ae,opaque:I.transparent===!1&&I.blending===xr&&I.alphaToCoverage===!1,alphaMap:me,alphaTest:ee,alphaHash:Q,combine:I.combine,mapUv:rt&&w(I.map.channel),aoMapUv:F&&w(I.aoMap.channel),lightMapUv:be&&w(I.lightMap.channel),bumpMapUv:xe&&w(I.bumpMap.channel),normalMapUv:Be&&w(I.normalMap.channel),displacementMapUv:Pe&&w(I.displacementMap.channel),emissiveMapUv:Ke&&w(I.emissiveMap.channel),metalnessMapUv:ke&&w(I.metalnessMap.channel),roughnessMapUv:U&&w(I.roughnessMap.channel),anisotropyMapUv:Ie&&w(I.anisotropyMap.channel),clearcoatMapUv:He&&w(I.clearcoatMap.channel),clearcoatNormalMapUv:ft&&w(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&w(I.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&w(I.iridescenceMap.channel),iridescenceThicknessMapUv:et&&w(I.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&w(I.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&w(I.sheenRoughnessMap.channel),specularMapUv:pt&&w(I.specularMap.channel),specularColorMapUv:st&&w(I.specularColorMap.channel),specularIntensityMapUv:wt&&w(I.specularIntensityMap.channel),transmissionMapUv:W&&w(I.transmissionMap.channel),thicknessMapUv:Ue&&w(I.thicknessMap.channel),alphaMapUv:me&&w(I.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Be||P),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!$.attributes.uv&&(rt||me),fog:!!B,useFog:I.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:pe,skinning:K.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:Ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:rt&&I.map.isVideoTexture===!0&&St.getTransfer(I.map.colorSpace)===Tt,decodeVideoTextureEmissive:Ke&&I.emissiveMap.isVideoTexture===!0&&St.getTransfer(I.emissiveMap.colorSpace)===Tt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===ti,flipSided:I.side===ln,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Qe&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&I.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Nt.vertexUv1s=d.has(1),Nt.vertexUv2s=d.has(2),Nt.vertexUv3s=d.has(3),d.clear(),Nt}function v(I){const E=[];if(I.shaderID?E.push(I.shaderID):(E.push(I.customVertexShaderID),E.push(I.customFragmentShaderID)),I.defines!==void 0)for(const z in I.defines)E.push(z),E.push(I.defines[z]);return I.isRawShaderMaterial===!1&&(L(E,I),T(E,I),E.push(i.outputColorSpace)),E.push(I.customProgramCacheKey),E.join()}function L(I,E){I.push(E.precision),I.push(E.outputColorSpace),I.push(E.envMapMode),I.push(E.envMapCubeUVHeight),I.push(E.mapUv),I.push(E.alphaMapUv),I.push(E.lightMapUv),I.push(E.aoMapUv),I.push(E.bumpMapUv),I.push(E.normalMapUv),I.push(E.displacementMapUv),I.push(E.emissiveMapUv),I.push(E.metalnessMapUv),I.push(E.roughnessMapUv),I.push(E.anisotropyMapUv),I.push(E.clearcoatMapUv),I.push(E.clearcoatNormalMapUv),I.push(E.clearcoatRoughnessMapUv),I.push(E.iridescenceMapUv),I.push(E.iridescenceThicknessMapUv),I.push(E.sheenColorMapUv),I.push(E.sheenRoughnessMapUv),I.push(E.specularMapUv),I.push(E.specularColorMapUv),I.push(E.specularIntensityMapUv),I.push(E.transmissionMapUv),I.push(E.thicknessMapUv),I.push(E.combine),I.push(E.fogExp2),I.push(E.sizeAttenuation),I.push(E.morphTargetsCount),I.push(E.morphAttributeCount),I.push(E.numDirLights),I.push(E.numPointLights),I.push(E.numSpotLights),I.push(E.numSpotLightMaps),I.push(E.numHemiLights),I.push(E.numRectAreaLights),I.push(E.numDirLightShadows),I.push(E.numPointLightShadows),I.push(E.numSpotLightShadows),I.push(E.numSpotLightShadowsWithMaps),I.push(E.numLightProbes),I.push(E.shadowMapType),I.push(E.toneMapping),I.push(E.numClippingPlanes),I.push(E.numClipIntersection),I.push(E.depthPacking)}function T(I,E){l.disableAll(),E.supportsVertexTextures&&l.enable(0),E.instancing&&l.enable(1),E.instancingColor&&l.enable(2),E.instancingMorph&&l.enable(3),E.matcap&&l.enable(4),E.envMap&&l.enable(5),E.normalMapObjectSpace&&l.enable(6),E.normalMapTangentSpace&&l.enable(7),E.clearcoat&&l.enable(8),E.iridescence&&l.enable(9),E.alphaTest&&l.enable(10),E.vertexColors&&l.enable(11),E.vertexAlphas&&l.enable(12),E.vertexUv1s&&l.enable(13),E.vertexUv2s&&l.enable(14),E.vertexUv3s&&l.enable(15),E.vertexTangents&&l.enable(16),E.anisotropy&&l.enable(17),E.alphaHash&&l.enable(18),E.batching&&l.enable(19),E.dispersion&&l.enable(20),E.batchingColor&&l.enable(21),I.push(l.mask),l.disableAll(),E.fog&&l.enable(0),E.useFog&&l.enable(1),E.flatShading&&l.enable(2),E.logarithmicDepthBuffer&&l.enable(3),E.reverseDepthBuffer&&l.enable(4),E.skinning&&l.enable(5),E.morphTargets&&l.enable(6),E.morphNormals&&l.enable(7),E.morphColors&&l.enable(8),E.premultipliedAlpha&&l.enable(9),E.shadowMapEnabled&&l.enable(10),E.doubleSided&&l.enable(11),E.flipSided&&l.enable(12),E.useDepthPacking&&l.enable(13),E.dithering&&l.enable(14),E.transmission&&l.enable(15),E.sheen&&l.enable(16),E.opaque&&l.enable(17),E.pointsUvs&&l.enable(18),E.decodeVideoTexture&&l.enable(19),E.decodeVideoTextureEmissive&&l.enable(20),E.alphaToCoverage&&l.enable(21),I.push(l.mask)}function A(I){const E=x[I.type];let z;if(E){const ne=Hn[E];z=Z0.clone(ne.uniforms)}else z=I.uniforms;return z}function H(I,E){let z;for(let ne=0,K=p.length;ne<K;ne++){const B=p[ne];if(B.cacheKey===E){z=B,++z.usedTimes;break}}return z===void 0&&(z=new lE(i,E,I,s),p.push(z)),z}function D(I){if(--I.usedTimes===0){const E=p.indexOf(I);p[E]=p[p.length-1],p.pop(),I.destroy()}}function k(I){h.remove(I)}function V(){h.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:A,acquireProgram:H,releaseProgram:D,releaseShaderCache:k,programs:p,dispose:V}}function pE(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let l=i.get(c);return l===void 0&&(l={},i.set(c,l)),l}function n(c){i.delete(c)}function r(c,l,h){i.get(c)[l]=h}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function mE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _h(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function c(g,m,_,x,w,S){let v=i[e];return v===void 0?(v={id:g.id,object:g,geometry:m,material:_,groupOrder:x,renderOrder:g.renderOrder,z:w,group:S},i[e]=v):(v.id=g.id,v.object=g,v.geometry=m,v.material=_,v.groupOrder=x,v.renderOrder=g.renderOrder,v.z=w,v.group=S),e++,v}function l(g,m,_,x,w,S){const v=c(g,m,_,x,w,S);_.transmission>0?n.push(v):_.transparent===!0?r.push(v):t.push(v)}function h(g,m,_,x,w,S){const v=c(g,m,_,x,w,S);_.transmission>0?n.unshift(v):_.transparent===!0?r.unshift(v):t.unshift(v)}function d(g,m){t.length>1&&t.sort(g||mE),n.length>1&&n.sort(m||gh),r.length>1&&r.sort(m||gh)}function p(){for(let g=e,m=i.length;g<m;g++){const _=i[g];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:h,finish:p,sort:d}}function gE(){let i=new WeakMap;function e(n,r){const s=i.get(n);let c;return s===void 0?(c=new _h,i.set(n,[c])):r>=s.length?(c=new _h,s.push(c)):c=s[r],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function _E(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new ct};break;case"SpotLight":t={position:new G,direction:new G,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function vE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let yE=0;function xE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function SE(i){const e=new _E,t=vE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new G);const r=new G,s=new lt,c=new lt;function l(d){let p=0,g=0,m=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let _=0,x=0,w=0,S=0,v=0,L=0,T=0,A=0,H=0,D=0,k=0;d.sort(xE);for(let I=0,E=d.length;I<E;I++){const z=d[I],ne=z.color,K=z.intensity,B=z.distance,$=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=ne.r*K,g+=ne.g*K,m+=ne.b*K;else if(z.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(z.sh.coefficients[J],K);k++}else if(z.isDirectionalLight){const J=e.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const te=z.shadow,j=t.get(z);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,n.directionalShadow[_]=j,n.directionalShadowMap[_]=$,n.directionalShadowMatrix[_]=z.shadow.matrix,L++}n.directional[_]=J,_++}else if(z.isSpotLight){const J=e.get(z);J.position.setFromMatrixPosition(z.matrixWorld),J.color.copy(ne).multiplyScalar(K),J.distance=B,J.coneCos=Math.cos(z.angle),J.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),J.decay=z.decay,n.spot[w]=J;const te=z.shadow;if(z.map&&(n.spotLightMap[H]=z.map,H++,te.updateMatrices(z),z.castShadow&&D++),n.spotLightMatrix[w]=te.matrix,z.castShadow){const j=t.get(z);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,n.spotShadow[w]=j,n.spotShadowMap[w]=$,A++}w++}else if(z.isRectAreaLight){const J=e.get(z);J.color.copy(ne).multiplyScalar(K),J.halfWidth.set(z.width*.5,0,0),J.halfHeight.set(0,z.height*.5,0),n.rectArea[S]=J,S++}else if(z.isPointLight){const J=e.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity),J.distance=z.distance,J.decay=z.decay,z.castShadow){const te=z.shadow,j=t.get(z);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,j.shadowCameraNear=te.camera.near,j.shadowCameraFar=te.camera.far,n.pointShadow[x]=j,n.pointShadowMap[x]=$,n.pointShadowMatrix[x]=z.shadow.matrix,T++}n.point[x]=J,x++}else if(z.isHemisphereLight){const J=e.get(z);J.skyColor.copy(z.color).multiplyScalar(K),J.groundColor.copy(z.groundColor).multiplyScalar(K),n.hemi[v]=J,v++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=m;const V=n.hash;(V.directionalLength!==_||V.pointLength!==x||V.spotLength!==w||V.rectAreaLength!==S||V.hemiLength!==v||V.numDirectionalShadows!==L||V.numPointShadows!==T||V.numSpotShadows!==A||V.numSpotMaps!==H||V.numLightProbes!==k)&&(n.directional.length=_,n.spot.length=w,n.rectArea.length=S,n.point.length=x,n.hemi.length=v,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=A+H-D,n.spotLightMap.length=H,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=k,V.directionalLength=_,V.pointLength=x,V.spotLength=w,V.rectAreaLength=S,V.hemiLength=v,V.numDirectionalShadows=L,V.numPointShadows=T,V.numSpotShadows=A,V.numSpotMaps=H,V.numLightProbes=k,n.version=yE++)}function h(d,p){let g=0,m=0,_=0,x=0,w=0;const S=p.matrixWorldInverse;for(let v=0,L=d.length;v<L;v++){const T=d[v];if(T.isDirectionalLight){const A=n.directional[g];A.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(S),g++}else if(T.isSpotLight){const A=n.spot[_];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(S),_++}else if(T.isRectAreaLight){const A=n.rectArea[x];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(S),c.identity(),s.copy(T.matrixWorld),s.premultiply(S),c.extractRotation(s),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),x++}else if(T.isPointLight){const A=n.point[m];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(S),m++}else if(T.isHemisphereLight){const A=n.hemi[w];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(S),w++}}}return{setup:l,setupView:h,state:n}}function vh(i){const e=new SE(i),t=[],n=[];function r(p){d.camera=p,t.length=0,n.length=0}function s(p){t.push(p)}function c(p){n.push(p)}function l(){e.setup(t)}function h(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:s,pushShadow:c}}function ME(i){let e=new WeakMap;function t(r,s=0){const c=e.get(r);let l;return c===void 0?(l=new vh(i),e.set(r,[l])):s>=c.length?(l=new vh(i),c.push(l)):l=c[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}class EE extends qi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=i0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bE extends qi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TE=`uniform sampler2D shadow_pass;
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
}`;function AE(i,e,t){let n=new gl;const r=new Re,s=new Re,c=new Et,l=new EE({depthPacking:r0}),h=new bE,d={},p=t.maxTextureSize,g={[xi]:ln,[ln]:xi,[ti]:ti},m=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:wE,fragmentShader:TE}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const x=new $t;x.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new en(x,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fd;let v=this.type;this.render=function(D,k,V){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||D.length===0)return;const I=i.getRenderTarget(),E=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),ne=i.state;ne.setBlending(vi),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const K=v!==ei&&this.type===ei,B=v===ei&&this.type!==ei;for(let $=0,J=D.length;$<J;$++){const te=D[$],j=te.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const ve=j.getFrameExtents();if(r.multiply(ve),s.copy(j.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/ve.x),r.x=s.x*ve.x,j.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/ve.y),r.y=s.y*ve.y,j.mapSize.y=s.y)),j.map===null||K===!0||B===!0){const Fe=this.type!==ei?{minFilter:_n,magFilter:_n}:{};j.map!==null&&j.map.dispose(),j.map=new $i(r.x,r.y,Fe),j.map.texture.name=te.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const De=j.getViewportCount();for(let Fe=0;Fe<De;Fe++){const Ze=j.getViewport(Fe);c.set(s.x*Ze.x,s.y*Ze.y,s.x*Ze.z,s.y*Ze.w),ne.viewport(c),j.updateMatrices(te,Fe),n=j.getFrustum(),A(k,V,j.camera,te,this.type)}j.isPointLightShadow!==!0&&this.type===ei&&L(j,V),j.needsUpdate=!1}v=this.type,S.needsUpdate=!1,i.setRenderTarget(I,E,z)};function L(D,k){const V=e.update(w);m.defines.VSM_SAMPLES!==D.blurSamples&&(m.defines.VSM_SAMPLES=D.blurSamples,_.defines.VSM_SAMPLES=D.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new $i(r.x,r.y)),m.uniforms.shadow_pass.value=D.map.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(k,null,V,m,w,null),_.uniforms.shadow_pass.value=D.mapPass.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(k,null,V,_,w,null)}function T(D,k,V,I){let E=null;const z=V.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(z!==void 0)E=z;else if(E=V.isPointLight===!0?h:l,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const ne=E.uuid,K=k.uuid;let B=d[ne];B===void 0&&(B={},d[ne]=B);let $=B[K];$===void 0&&($=E.clone(),B[K]=$,k.addEventListener("dispose",H)),E=$}if(E.visible=k.visible,E.wireframe=k.wireframe,I===ei?E.side=k.shadowSide!==null?k.shadowSide:k.side:E.side=k.shadowSide!==null?k.shadowSide:g[k.side],E.alphaMap=k.alphaMap,E.alphaTest=k.alphaTest,E.map=k.map,E.clipShadows=k.clipShadows,E.clippingPlanes=k.clippingPlanes,E.clipIntersection=k.clipIntersection,E.displacementMap=k.displacementMap,E.displacementScale=k.displacementScale,E.displacementBias=k.displacementBias,E.wireframeLinewidth=k.wireframeLinewidth,E.linewidth=k.linewidth,V.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ne=i.properties.get(E);ne.light=V}return E}function A(D,k,V,I,E){if(D.visible===!1)return;if(D.layers.test(k.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&E===ei)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,D.matrixWorld);const K=e.update(D),B=D.material;if(Array.isArray(B)){const $=K.groups;for(let J=0,te=$.length;J<te;J++){const j=$[J],ve=B[j.materialIndex];if(ve&&ve.visible){const De=T(D,ve,I,E);D.onBeforeShadow(i,D,k,V,K,De,j),i.renderBufferDirect(V,null,K,De,D,j),D.onAfterShadow(i,D,k,V,K,De,j)}}}else if(B.visible){const $=T(D,B,I,E);D.onBeforeShadow(i,D,k,V,K,$,null),i.renderBufferDirect(V,null,K,$,D,null),D.onAfterShadow(i,D,k,V,K,$,null)}}const ne=D.children;for(let K=0,B=ne.length;K<B;K++)A(ne[K],k,V,I,E)}function H(D){D.target.removeEventListener("dispose",H);for(const V in d){const I=d[V],E=D.target.uuid;E in I&&(I[E].dispose(),delete I[E])}}}const CE={[lc]:uc,[hc]:pc,[dc]:mc,[wr]:fc,[uc]:lc,[pc]:hc,[mc]:dc,[fc]:wr};function RE(i,e){function t(){let W=!1;const Ue=new Et;let ae=null;const me=new Et(0,0,0,0);return{setMask:function(ee){ae!==ee&&!W&&(i.colorMask(ee,ee,ee,ee),ae=ee)},setLocked:function(ee){W=ee},setClear:function(ee,Q,Qe,It,Nt){Nt===!0&&(ee*=It,Q*=It,Qe*=It),Ue.set(ee,Q,Qe,It),me.equals(Ue)===!1&&(i.clearColor(ee,Q,Qe,It),me.copy(Ue))},reset:function(){W=!1,ae=null,me.set(-1,0,0,0)}}}function n(){let W=!1,Ue=!1,ae=null,me=null,ee=null;return{setReversed:function(Q){if(Ue!==Q){const Qe=e.get("EXT_clip_control");Ue?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);const It=ee;ee=null,this.setClear(It)}Ue=Q},getReversed:function(){return Ue},setTest:function(Q){Q?ye(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(Q){ae!==Q&&!W&&(i.depthMask(Q),ae=Q)},setFunc:function(Q){if(Ue&&(Q=CE[Q]),me!==Q){switch(Q){case lc:i.depthFunc(i.NEVER);break;case uc:i.depthFunc(i.ALWAYS);break;case hc:i.depthFunc(i.LESS);break;case wr:i.depthFunc(i.LEQUAL);break;case dc:i.depthFunc(i.EQUAL);break;case fc:i.depthFunc(i.GEQUAL);break;case pc:i.depthFunc(i.GREATER);break;case mc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=Q}},setLocked:function(Q){W=Q},setClear:function(Q){ee!==Q&&(Ue&&(Q=1-Q),i.clearDepth(Q),ee=Q)},reset:function(){W=!1,ae=null,me=null,ee=null,Ue=!1}}}function r(){let W=!1,Ue=null,ae=null,me=null,ee=null,Q=null,Qe=null,It=null,Nt=null;return{setTest:function(dt){W||(dt?ye(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(dt){Ue!==dt&&!W&&(i.stencilMask(dt),Ue=dt)},setFunc:function(dt,dn,kt){(ae!==dt||me!==dn||ee!==kt)&&(i.stencilFunc(dt,dn,kt),ae=dt,me=dn,ee=kt)},setOp:function(dt,dn,kt){(Q!==dt||Qe!==dn||It!==kt)&&(i.stencilOp(dt,dn,kt),Q=dt,Qe=dn,It=kt)},setLocked:function(dt){W=dt},setClear:function(dt){Nt!==dt&&(i.clearStencil(dt),Nt=dt)},reset:function(){W=!1,Ue=null,ae=null,me=null,ee=null,Q=null,Qe=null,It=null,Nt=null}}}const s=new t,c=new n,l=new r,h=new WeakMap,d=new WeakMap;let p={},g={},m=new WeakMap,_=[],x=null,w=!1,S=null,v=null,L=null,T=null,A=null,H=null,D=null,k=new ct(0,0,0),V=0,I=!1,E=null,z=null,ne=null,K=null,B=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,te=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(j)[1]),J=te>=1):j.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),J=te>=2);let ve=null,De={};const Fe=i.getParameter(i.SCISSOR_BOX),Ze=i.getParameter(i.VIEWPORT),it=new Et().fromArray(Fe),oe=new Et().fromArray(Ze);function _e(W,Ue,ae,me){const ee=new Uint8Array(4),Q=i.createTexture();i.bindTexture(W,Q),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<ae;Qe++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ue,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(Ue+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return Q}const Le={};Le[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),Le[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Le[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ye(i.DEPTH_TEST),c.setFunc(wr),xe(!1),Be(yu),ye(i.CULL_FACE),F(vi);function ye(W){p[W]!==!0&&(i.enable(W),p[W]=!0)}function pe(W){p[W]!==!1&&(i.disable(W),p[W]=!1)}function Ae(W,Ue){return g[W]!==Ue?(i.bindFramebuffer(W,Ue),g[W]=Ue,W===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Ue),W===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Je(W,Ue){let ae=_,me=!1;if(W){ae=m.get(Ue),ae===void 0&&(ae=[],m.set(Ue,ae));const ee=W.textures;if(ae.length!==ee.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Qe=ee.length;Q<Qe;Q++)ae[Q]=i.COLOR_ATTACHMENT0+Q;ae.length=ee.length,me=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,me=!0);me&&i.drawBuffers(ae)}function rt(W){return x!==W?(i.useProgram(W),x=W,!0):!1}const fe={[ki]:i.FUNC_ADD,[Cv]:i.FUNC_SUBTRACT,[Rv]:i.FUNC_REVERSE_SUBTRACT};fe[Pv]=i.MIN,fe[Dv]=i.MAX;const we={[Lv]:i.ZERO,[Iv]:i.ONE,[Nv]:i.SRC_COLOR,[ac]:i.SRC_ALPHA,[zv]:i.SRC_ALPHA_SATURATE,[kv]:i.DST_COLOR,[Uv]:i.DST_ALPHA,[Fv]:i.ONE_MINUS_SRC_COLOR,[cc]:i.ONE_MINUS_SRC_ALPHA,[Bv]:i.ONE_MINUS_DST_COLOR,[Ov]:i.ONE_MINUS_DST_ALPHA,[Hv]:i.CONSTANT_COLOR,[Vv]:i.ONE_MINUS_CONSTANT_COLOR,[Gv]:i.CONSTANT_ALPHA,[Wv]:i.ONE_MINUS_CONSTANT_ALPHA};function F(W,Ue,ae,me,ee,Q,Qe,It,Nt,dt){if(W===vi){w===!0&&(pe(i.BLEND),w=!1);return}if(w===!1&&(ye(i.BLEND),w=!0),W!==Av){if(W!==S||dt!==I){if((v!==ki||A!==ki)&&(i.blendEquation(i.FUNC_ADD),v=ki,A=ki),dt)switch(W){case xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.ONE,i.ONE);break;case xu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Su:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Su:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,T=null,H=null,D=null,k.set(0,0,0),V=0,S=W,I=dt}return}ee=ee||Ue,Q=Q||ae,Qe=Qe||me,(Ue!==v||ee!==A)&&(i.blendEquationSeparate(fe[Ue],fe[ee]),v=Ue,A=ee),(ae!==L||me!==T||Q!==H||Qe!==D)&&(i.blendFuncSeparate(we[ae],we[me],we[Q],we[Qe]),L=ae,T=me,H=Q,D=Qe),(It.equals(k)===!1||Nt!==V)&&(i.blendColor(It.r,It.g,It.b,Nt),k.copy(It),V=Nt),S=W,I=!1}function be(W,Ue){W.side===ti?pe(i.CULL_FACE):ye(i.CULL_FACE);let ae=W.side===ln;Ue&&(ae=!ae),xe(ae),W.blending===xr&&W.transparent===!1?F(vi):F(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),s.setMask(W.colorWrite);const me=W.stencilWrite;l.setTest(me),me&&(l.setMask(W.stencilWriteMask),l.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),l.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ke(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(W){E!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),E=W)}function Be(W){W!==bv?(ye(i.CULL_FACE),W!==z&&(W===yu?i.cullFace(i.BACK):W===wv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),z=W}function Pe(W){W!==ne&&(J&&i.lineWidth(W),ne=W)}function Ke(W,Ue,ae){W?(ye(i.POLYGON_OFFSET_FILL),(K!==Ue||B!==ae)&&(i.polygonOffset(Ue,ae),K=Ue,B=ae)):pe(i.POLYGON_OFFSET_FILL)}function ke(W){W?ye(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function U(W){W===void 0&&(W=i.TEXTURE0+$-1),ve!==W&&(i.activeTexture(W),ve=W)}function P(W,Ue,ae){ae===void 0&&(ve===null?ae=i.TEXTURE0+$-1:ae=ve);let me=De[ae];me===void 0&&(me={type:void 0,texture:void 0},De[ae]=me),(me.type!==W||me.texture!==Ue)&&(ve!==ae&&(i.activeTexture(ae),ve=ae),i.bindTexture(W,Ue||Le[W]),me.type=W,me.texture=Ue)}function ie(){const W=De[ve];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function he(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ce(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ge(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function He(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function We(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(W){it.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),it.copy(W))}function Xe(W){oe.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),oe.copy(W))}function pt(W,Ue){let ae=d.get(Ue);ae===void 0&&(ae=new WeakMap,d.set(Ue,ae));let me=ae.get(W);me===void 0&&(me=i.getUniformBlockIndex(Ue,W.name),ae.set(W,me))}function st(W,Ue){const me=d.get(Ue).get(W);h.get(Ue)!==me&&(i.uniformBlockBinding(Ue,me,W.__bindingPointIndex),h.set(Ue,me))}function wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ve=null,De={},g={},m=new WeakMap,_=[],x=null,w=!1,S=null,v=null,L=null,T=null,A=null,H=null,D=null,k=new ct(0,0,0),V=0,I=!1,E=null,z=null,ne=null,K=null,B=null,it.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:ye,disable:pe,bindFramebuffer:Ae,drawBuffers:Je,useProgram:rt,setBlending:F,setMaterial:be,setFlipSided:xe,setCullFace:Be,setLineWidth:Pe,setPolygonOffset:Ke,setScissorTest:ke,activeTexture:U,bindTexture:P,unbindTexture:ie,compressedTexImage2D:he,compressedTexImage3D:de,texImage2D:We,texImage3D:et,updateUBOMapping:pt,uniformBlockBinding:st,texStorage2D:ft,texStorage3D:Ce,texSubImage2D:ce,texSubImage3D:Ge,compressedTexSubImage2D:Ie,compressedTexSubImage3D:He,scissor:nt,viewport:Xe,reset:wt}}function yh(i,e,t,n){const r=PE(n);switch(t){case yd:return i*e;case Sd:return i*e;case Md:return i*e*2;case ul:return i*e/r.components*r.byteLength;case hl:return i*e/r.components*r.byteLength;case Ed:return i*e*2/r.components*r.byteLength;case dl:return i*e*2/r.components*r.byteLength;case xd:return i*e*3/r.components*r.byteLength;case En:return i*e*4/r.components*r.byteLength;case fl:return i*e*4/r.components*r.byteLength;case bo:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case To:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sc:case Ec:return Math.max(i,16)*Math.max(e,8)/4;case xc:case Mc:return Math.max(i,8)*Math.max(e,8)/2;case bc:case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case kc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case zc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Co:case Hc:case Vc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case bd:case Gc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wc:case Xc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function PE(i){switch(i){case si:case gd:return{byteLength:1,components:1};case ss:case _d:case ds:return{byteLength:2,components:1};case cl:case ll:return{byteLength:2,components:4};case Xi:case al:case Nn:return{byteLength:4,components:1};case vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function DE(i,e,t,n,r,s,c){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Re,p=new WeakMap;let g;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(U,P){return _?new OffscreenCanvas(U,P):os("canvas")}function w(U,P,ie){let he=1;const de=ke(U);if((de.width>ie||de.height>ie)&&(he=ie/Math.max(de.width,de.height)),he<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ce=Math.floor(he*de.width),Ge=Math.floor(he*de.height);g===void 0&&(g=x(ce,Ge));const Ie=P?x(ce,Ge):g;return Ie.width=ce,Ie.height=Ge,Ie.getContext("2d").drawImage(U,0,0,ce,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ce+"x"+Ge+")."),Ie}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),U;return U}function S(U){return U.generateMipmaps}function v(U){i.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(U,P,ie,he,de=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ce=P;if(P===i.RED&&(ie===i.FLOAT&&(ce=i.R32F),ie===i.HALF_FLOAT&&(ce=i.R16F),ie===i.UNSIGNED_BYTE&&(ce=i.R8)),P===i.RED_INTEGER&&(ie===i.UNSIGNED_BYTE&&(ce=i.R8UI),ie===i.UNSIGNED_SHORT&&(ce=i.R16UI),ie===i.UNSIGNED_INT&&(ce=i.R32UI),ie===i.BYTE&&(ce=i.R8I),ie===i.SHORT&&(ce=i.R16I),ie===i.INT&&(ce=i.R32I)),P===i.RG&&(ie===i.FLOAT&&(ce=i.RG32F),ie===i.HALF_FLOAT&&(ce=i.RG16F),ie===i.UNSIGNED_BYTE&&(ce=i.RG8)),P===i.RG_INTEGER&&(ie===i.UNSIGNED_BYTE&&(ce=i.RG8UI),ie===i.UNSIGNED_SHORT&&(ce=i.RG16UI),ie===i.UNSIGNED_INT&&(ce=i.RG32UI),ie===i.BYTE&&(ce=i.RG8I),ie===i.SHORT&&(ce=i.RG16I),ie===i.INT&&(ce=i.RG32I)),P===i.RGB_INTEGER&&(ie===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),ie===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),ie===i.UNSIGNED_INT&&(ce=i.RGB32UI),ie===i.BYTE&&(ce=i.RGB8I),ie===i.SHORT&&(ce=i.RGB16I),ie===i.INT&&(ce=i.RGB32I)),P===i.RGBA_INTEGER&&(ie===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),ie===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),ie===i.UNSIGNED_INT&&(ce=i.RGBA32UI),ie===i.BYTE&&(ce=i.RGBA8I),ie===i.SHORT&&(ce=i.RGBA16I),ie===i.INT&&(ce=i.RGBA32I)),P===i.RGB&&ie===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),P===i.RGBA){const Ge=de?Wo:St.getTransfer(he);ie===i.FLOAT&&(ce=i.RGBA32F),ie===i.HALF_FLOAT&&(ce=i.RGBA16F),ie===i.UNSIGNED_BYTE&&(ce=Ge===Tt?i.SRGB8_ALPHA8:i.RGBA8),ie===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),ie===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function A(U,P){let ie;return U?P===null||P===Xi||P===Cr?ie=i.DEPTH24_STENCIL8:P===Nn?ie=i.DEPTH32F_STENCIL8:P===ss&&(ie=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Xi||P===Cr?ie=i.DEPTH_COMPONENT24:P===Nn?ie=i.DEPTH_COMPONENT32F:P===ss&&(ie=i.DEPTH_COMPONENT16),ie}function H(U,P){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==_n&&U.minFilter!==Vn?Math.log2(Math.max(P.width,P.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?P.mipmaps.length:1}function D(U){const P=U.target;P.removeEventListener("dispose",D),V(P),P.isVideoTexture&&p.delete(P)}function k(U){const P=U.target;P.removeEventListener("dispose",k),E(P)}function V(U){const P=n.get(U);if(P.__webglInit===void 0)return;const ie=U.source,he=m.get(ie);if(he){const de=he[P.__cacheKey];de.usedTimes--,de.usedTimes===0&&I(U),Object.keys(he).length===0&&m.delete(ie)}n.remove(U)}function I(U){const P=n.get(U);i.deleteTexture(P.__webglTexture);const ie=U.source,he=m.get(ie);delete he[P.__cacheKey],c.memory.textures--}function E(U){const P=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(P.__webglFramebuffer[he]))for(let de=0;de<P.__webglFramebuffer[he].length;de++)i.deleteFramebuffer(P.__webglFramebuffer[he][de]);else i.deleteFramebuffer(P.__webglFramebuffer[he]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[he])}else{if(Array.isArray(P.__webglFramebuffer))for(let he=0;he<P.__webglFramebuffer.length;he++)i.deleteFramebuffer(P.__webglFramebuffer[he]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let he=0;he<P.__webglColorRenderbuffer.length;he++)P.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[he]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const ie=U.textures;for(let he=0,de=ie.length;he<de;he++){const ce=n.get(ie[he]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),c.memory.textures--),n.remove(ie[he])}n.remove(U)}let z=0;function ne(){z=0}function K(){const U=z;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),z+=1,U}function B(U){const P=[];return P.push(U.wrapS),P.push(U.wrapT),P.push(U.wrapR||0),P.push(U.magFilter),P.push(U.minFilter),P.push(U.anisotropy),P.push(U.internalFormat),P.push(U.format),P.push(U.type),P.push(U.generateMipmaps),P.push(U.premultiplyAlpha),P.push(U.flipY),P.push(U.unpackAlignment),P.push(U.colorSpace),P.join()}function $(U,P){const ie=n.get(U);if(U.isVideoTexture&&Pe(U),U.isRenderTargetTexture===!1&&U.version>0&&ie.__version!==U.version){const he=U.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(ie,U,P);return}}t.bindTexture(i.TEXTURE_2D,ie.__webglTexture,i.TEXTURE0+P)}function J(U,P){const ie=n.get(U);if(U.version>0&&ie.__version!==U.version){oe(ie,U,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ie.__webglTexture,i.TEXTURE0+P)}function te(U,P){const ie=n.get(U);if(U.version>0&&ie.__version!==U.version){oe(ie,U,P);return}t.bindTexture(i.TEXTURE_3D,ie.__webglTexture,i.TEXTURE0+P)}function j(U,P){const ie=n.get(U);if(U.version>0&&ie.__version!==U.version){_e(ie,U,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture,i.TEXTURE0+P)}const ve={[vc]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[yc]:i.MIRRORED_REPEAT},De={[_n]:i.NEAREST,[t0]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[pa]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},Fe={[o0]:i.NEVER,[d0]:i.ALWAYS,[a0]:i.LESS,[Td]:i.LEQUAL,[c0]:i.EQUAL,[h0]:i.GEQUAL,[l0]:i.GREATER,[u0]:i.NOTEQUAL};function Ze(U,P){if(P.type===Nn&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Vn||P.magFilter===pa||P.magFilter===Os||P.magFilter===Hi||P.minFilter===Vn||P.minFilter===pa||P.minFilter===Os||P.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,ve[P.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,ve[P.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,ve[P.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,De[P.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,De[P.minFilter]),P.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Fe[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===_n||P.minFilter!==Os&&P.minFilter!==Hi||P.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function it(U,P){let ie=!1;U.__webglInit===void 0&&(U.__webglInit=!0,P.addEventListener("dispose",D));const he=P.source;let de=m.get(he);de===void 0&&(de={},m.set(he,de));const ce=B(P);if(ce!==U.__cacheKey){de[ce]===void 0&&(de[ce]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ie=!0),de[ce].usedTimes++;const Ge=de[U.__cacheKey];Ge!==void 0&&(de[U.__cacheKey].usedTimes--,Ge.usedTimes===0&&I(P)),U.__cacheKey=ce,U.__webglTexture=de[ce].texture}return ie}function oe(U,P,ie){let he=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(he=i.TEXTURE_3D);const de=it(U,P),ce=P.source;t.bindTexture(he,U.__webglTexture,i.TEXTURE0+ie);const Ge=n.get(ce);if(ce.version!==Ge.__version||de===!0){t.activeTexture(i.TEXTURE0+ie);const Ie=St.getPrimaries(St.workingColorSpace),He=P.colorSpace===gi?null:St.getPrimaries(P.colorSpace),ft=P.colorSpace===gi||Ie===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Ce=w(P.image,!1,r.maxTextureSize);Ce=Ke(P,Ce);const We=s.convert(P.format,P.colorSpace),et=s.convert(P.type);let nt=T(P.internalFormat,We,et,P.colorSpace,P.isVideoTexture);Ze(he,P);let Xe;const pt=P.mipmaps,st=P.isVideoTexture!==!0,wt=Ge.__version===void 0||de===!0,W=ce.dataReady,Ue=H(P,Ce);if(P.isDepthTexture)nt=A(P.format===Rr,P.type),wt&&(st?t.texStorage2D(i.TEXTURE_2D,1,nt,Ce.width,Ce.height):t.texImage2D(i.TEXTURE_2D,0,nt,Ce.width,Ce.height,0,We,et,null));else if(P.isDataTexture)if(pt.length>0){st&&wt&&t.texStorage2D(i.TEXTURE_2D,Ue,nt,pt[0].width,pt[0].height);for(let ae=0,me=pt.length;ae<me;ae++)Xe=pt[ae],st?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Xe.width,Xe.height,We,et,Xe.data):t.texImage2D(i.TEXTURE_2D,ae,nt,Xe.width,Xe.height,0,We,et,Xe.data);P.generateMipmaps=!1}else st?(wt&&t.texStorage2D(i.TEXTURE_2D,Ue,nt,Ce.width,Ce.height),W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce.width,Ce.height,We,et,Ce.data)):t.texImage2D(i.TEXTURE_2D,0,nt,Ce.width,Ce.height,0,We,et,Ce.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){st&&wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,nt,pt[0].width,pt[0].height,Ce.depth);for(let ae=0,me=pt.length;ae<me;ae++)if(Xe=pt[ae],P.format!==En)if(We!==null)if(st){if(W)if(P.layerUpdates.size>0){const ee=yh(Xe.width,Xe.height,P.format,P.type);for(const Q of P.layerUpdates){const Qe=Xe.data.subarray(Q*ee/Xe.data.BYTES_PER_ELEMENT,(Q+1)*ee/Xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Q,Xe.width,Xe.height,1,We,Qe)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Xe.width,Xe.height,Ce.depth,We,Xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,nt,Xe.width,Xe.height,Ce.depth,0,Xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Xe.width,Xe.height,Ce.depth,We,et,Xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,nt,Xe.width,Xe.height,Ce.depth,0,We,et,Xe.data)}else{st&&wt&&t.texStorage2D(i.TEXTURE_2D,Ue,nt,pt[0].width,pt[0].height);for(let ae=0,me=pt.length;ae<me;ae++)Xe=pt[ae],P.format!==En?We!==null?st?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Xe.width,Xe.height,We,Xe.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,nt,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Xe.width,Xe.height,We,et,Xe.data):t.texImage2D(i.TEXTURE_2D,ae,nt,Xe.width,Xe.height,0,We,et,Xe.data)}else if(P.isDataArrayTexture)if(st){if(wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,nt,Ce.width,Ce.height,Ce.depth),W)if(P.layerUpdates.size>0){const ae=yh(Ce.width,Ce.height,P.format,P.type);for(const me of P.layerUpdates){const ee=Ce.data.subarray(me*ae/Ce.data.BYTES_PER_ELEMENT,(me+1)*ae/Ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,Ce.width,Ce.height,1,We,et,ee)}P.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ce.width,Ce.height,Ce.depth,We,et,Ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,nt,Ce.width,Ce.height,Ce.depth,0,We,et,Ce.data);else if(P.isData3DTexture)st?(wt&&t.texStorage3D(i.TEXTURE_3D,Ue,nt,Ce.width,Ce.height,Ce.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ce.width,Ce.height,Ce.depth,We,et,Ce.data)):t.texImage3D(i.TEXTURE_3D,0,nt,Ce.width,Ce.height,Ce.depth,0,We,et,Ce.data);else if(P.isFramebufferTexture){if(wt)if(st)t.texStorage2D(i.TEXTURE_2D,Ue,nt,Ce.width,Ce.height);else{let ae=Ce.width,me=Ce.height;for(let ee=0;ee<Ue;ee++)t.texImage2D(i.TEXTURE_2D,ee,nt,ae,me,0,We,et,null),ae>>=1,me>>=1}}else if(pt.length>0){if(st&&wt){const ae=ke(pt[0]);t.texStorage2D(i.TEXTURE_2D,Ue,nt,ae.width,ae.height)}for(let ae=0,me=pt.length;ae<me;ae++)Xe=pt[ae],st?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,We,et,Xe):t.texImage2D(i.TEXTURE_2D,ae,nt,We,et,Xe);P.generateMipmaps=!1}else if(st){if(wt){const ae=ke(Ce);t.texStorage2D(i.TEXTURE_2D,Ue,nt,ae.width,ae.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,We,et,Ce)}else t.texImage2D(i.TEXTURE_2D,0,nt,We,et,Ce);S(P)&&v(he),Ge.__version=ce.version,P.onUpdate&&P.onUpdate(P)}U.__version=P.version}function _e(U,P,ie){if(P.image.length!==6)return;const he=it(U,P),de=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+ie);const ce=n.get(de);if(de.version!==ce.__version||he===!0){t.activeTexture(i.TEXTURE0+ie);const Ge=St.getPrimaries(St.workingColorSpace),Ie=P.colorSpace===gi?null:St.getPrimaries(P.colorSpace),He=P.colorSpace===gi||Ge===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const ft=P.isCompressedTexture||P.image[0].isCompressedTexture,Ce=P.image[0]&&P.image[0].isDataTexture,We=[];for(let me=0;me<6;me++)!ft&&!Ce?We[me]=w(P.image[me],!0,r.maxCubemapSize):We[me]=Ce?P.image[me].image:P.image[me],We[me]=Ke(P,We[me]);const et=We[0],nt=s.convert(P.format,P.colorSpace),Xe=s.convert(P.type),pt=T(P.internalFormat,nt,Xe,P.colorSpace),st=P.isVideoTexture!==!0,wt=ce.__version===void 0||he===!0,W=de.dataReady;let Ue=H(P,et);Ze(i.TEXTURE_CUBE_MAP,P);let ae;if(ft){st&&wt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,pt,et.width,et.height);for(let me=0;me<6;me++){ae=We[me].mipmaps;for(let ee=0;ee<ae.length;ee++){const Q=ae[ee];P.format!==En?nt!==null?st?W&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ee,0,0,Q.width,Q.height,nt,Q.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ee,pt,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ee,0,0,Q.width,Q.height,nt,Xe,Q.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ee,pt,Q.width,Q.height,0,nt,Xe,Q.data)}}}else{if(ae=P.mipmaps,st&&wt){ae.length>0&&Ue++;const me=ke(We[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,pt,me.width,me.height)}for(let me=0;me<6;me++)if(Ce){st?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,We[me].width,We[me].height,nt,Xe,We[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,pt,We[me].width,We[me].height,0,nt,Xe,We[me].data);for(let ee=0;ee<ae.length;ee++){const Qe=ae[ee].image[me].image;st?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ee+1,0,0,Qe.width,Qe.height,nt,Xe,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ee+1,pt,Qe.width,Qe.height,0,nt,Xe,Qe.data)}}else{st?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,nt,Xe,We[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,pt,nt,Xe,We[me]);for(let ee=0;ee<ae.length;ee++){const Q=ae[ee];st?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ee+1,0,0,nt,Xe,Q.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ee+1,pt,nt,Xe,Q.image[me])}}}S(P)&&v(i.TEXTURE_CUBE_MAP),ce.__version=de.version,P.onUpdate&&P.onUpdate(P)}U.__version=P.version}function Le(U,P,ie,he,de,ce){const Ge=s.convert(ie.format,ie.colorSpace),Ie=s.convert(ie.type),He=T(ie.internalFormat,Ge,Ie,ie.colorSpace),ft=n.get(P),Ce=n.get(ie);if(Ce.__renderTarget=P,!ft.__hasExternalTextures){const We=Math.max(1,P.width>>ce),et=Math.max(1,P.height>>ce);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,ce,He,We,et,P.depth,0,Ge,Ie,null):t.texImage2D(de,ce,He,We,et,0,Ge,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Be(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,de,Ce.__webglTexture,0,xe(P)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,de,Ce.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(U,P,ie){if(i.bindRenderbuffer(i.RENDERBUFFER,U),P.depthBuffer){const he=P.depthTexture,de=he&&he.isDepthTexture?he.type:null,ce=A(P.stencilBuffer,de),Ge=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=xe(P);Be(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,ce,P.width,P.height):ie?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ce,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,ce,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ge,i.RENDERBUFFER,U)}else{const he=P.textures;for(let de=0;de<he.length;de++){const ce=he[de],Ge=s.convert(ce.format,ce.colorSpace),Ie=s.convert(ce.type),He=T(ce.internalFormat,Ge,Ie,ce.colorSpace),ft=xe(P);ie&&Be(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,He,P.width,P.height):Be(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,He,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,He,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(U,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=n.get(P.depthTexture);he.__renderTarget=P,(!he.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),$(P.depthTexture,0);const de=he.__webglTexture,ce=xe(P);if(P.depthTexture.format===Sr)Be(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0);else if(P.depthTexture.format===Rr)Be(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Ae(U){const P=n.get(U),ie=U.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==U.depthTexture){const he=U.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),he){const de=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,he.removeEventListener("dispose",de)};he.addEventListener("dispose",de),P.__depthDisposeCallback=de}P.__boundDepthTexture=he}if(U.depthTexture&&!P.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");pe(P.__webglFramebuffer,U)}else if(ie){P.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[he]),P.__webglDepthbuffer[he]===void 0)P.__webglDepthbuffer[he]=i.createRenderbuffer(),ye(P.__webglDepthbuffer[he],U,!1);else{const de=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=P.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),ye(P.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(U,P,ie){const he=n.get(U);P!==void 0&&Le(he.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ie!==void 0&&Ae(U)}function rt(U){const P=U.texture,ie=n.get(U),he=n.get(P);U.addEventListener("dispose",k);const de=U.textures,ce=U.isWebGLCubeRenderTarget===!0,Ge=de.length>1;if(Ge||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=P.version,c.memory.textures++),ce){ie.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(P.mipmaps&&P.mipmaps.length>0){ie.__webglFramebuffer[Ie]=[];for(let He=0;He<P.mipmaps.length;He++)ie.__webglFramebuffer[Ie][He]=i.createFramebuffer()}else ie.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Ie=0;Ie<P.mipmaps.length;Ie++)ie.__webglFramebuffer[Ie]=i.createFramebuffer()}else ie.__webglFramebuffer=i.createFramebuffer();if(Ge)for(let Ie=0,He=de.length;Ie<He;Ie++){const ft=n.get(de[Ie]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),c.memory.textures++)}if(U.samples>0&&Be(U)===!1){ie.__webglMultisampledFramebuffer=i.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Ie=0;Ie<de.length;Ie++){const He=de[Ie];ie.__webglColorRenderbuffer[Ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ie.__webglColorRenderbuffer[Ie]);const ft=s.convert(He.format,He.colorSpace),Ce=s.convert(He.type),We=T(He.internalFormat,ft,Ce,He.colorSpace,U.isXRRenderTarget===!0),et=xe(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,We,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,ie.__webglColorRenderbuffer[Ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(ie.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(ie.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,P);for(let Ie=0;Ie<6;Ie++)if(P.mipmaps&&P.mipmaps.length>0)for(let He=0;He<P.mipmaps.length;He++)Le(ie.__webglFramebuffer[Ie][He],U,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,He);else Le(ie.__webglFramebuffer[Ie],U,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);S(P)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Ie=0,He=de.length;Ie<He;Ie++){const ft=de[Ie],Ce=n.get(ft);t.bindTexture(i.TEXTURE_2D,Ce.__webglTexture),Ze(i.TEXTURE_2D,ft),Le(ie.__webglFramebuffer,U,ft,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,0),S(ft)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ie=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,he.__webglTexture),Ze(Ie,P),P.mipmaps&&P.mipmaps.length>0)for(let He=0;He<P.mipmaps.length;He++)Le(ie.__webglFramebuffer[He],U,P,i.COLOR_ATTACHMENT0,Ie,He);else Le(ie.__webglFramebuffer,U,P,i.COLOR_ATTACHMENT0,Ie,0);S(P)&&v(Ie),t.unbindTexture()}U.depthBuffer&&Ae(U)}function fe(U){const P=U.textures;for(let ie=0,he=P.length;ie<he;ie++){const de=P[ie];if(S(de)){const ce=L(U),Ge=n.get(de).__webglTexture;t.bindTexture(ce,Ge),v(ce),t.unbindTexture()}}}const we=[],F=[];function be(U){if(U.samples>0){if(Be(U)===!1){const P=U.textures,ie=U.width,he=U.height;let de=i.COLOR_BUFFER_BIT;const ce=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=n.get(U),Ie=P.length>1;if(Ie)for(let He=0;He<P.length;He++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let He=0;He<P.length;He++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),Ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[He]);const ft=n.get(P[He]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ft,0)}i.blitFramebuffer(0,0,ie,he,0,0,ie,he,de,i.NEAREST),h===!0&&(we.length=0,F.length=0,we.push(i.COLOR_ATTACHMENT0+He),U.depthBuffer&&U.resolveDepthBuffer===!1&&(we.push(ce),F.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ie)for(let He=0;He<P.length;He++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[He]);const ft=n.get(P[He]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,ft,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const P=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function xe(U){return Math.min(r.maxSamples,U.samples)}function Be(U){const P=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Pe(U){const P=c.render.frame;p.get(U)!==P&&(p.set(U,P),U.update())}function Ke(U,P){const ie=U.colorSpace,he=U.format,de=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ie!==Nr&&ie!==gi&&(St.getTransfer(ie)===Tt?(he!==En||de!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),P}function ke(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=K,this.resetTextureUnits=ne,this.setTexture2D=$,this.setTexture2DArray=J,this.setTexture3D=te,this.setTextureCube=j,this.rebindTextures=Je,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Be}function LE(i,e){function t(n,r=gi){let s;const c=St.getTransfer(r);if(n===si)return i.UNSIGNED_BYTE;if(n===cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gd)return i.BYTE;if(n===_d)return i.SHORT;if(n===ss)return i.UNSIGNED_SHORT;if(n===al)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===ds)return i.HALF_FLOAT;if(n===yd)return i.ALPHA;if(n===xd)return i.RGB;if(n===En)return i.RGBA;if(n===Sd)return i.LUMINANCE;if(n===Md)return i.LUMINANCE_ALPHA;if(n===Sr)return i.DEPTH_COMPONENT;if(n===Rr)return i.DEPTH_STENCIL;if(n===ul)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===Ed)return i.RG;if(n===dl)return i.RG_INTEGER;if(n===fl)return i.RGBA_INTEGER;if(n===bo||n===wo||n===To||n===Ao)if(c===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xc||n===Sc||n===Mc||n===Ec)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ec)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bc||n===wc||n===Tc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===bc||n===wc)return c===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Tc)return c===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ac||n===Cc||n===Rc||n===Pc||n===Dc||n===Lc||n===Ic||n===Nc||n===Fc||n===Uc||n===Oc||n===kc||n===Bc||n===zc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ac)return c===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cc)return c===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rc)return c===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pc)return c===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dc)return c===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return c===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ic)return c===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nc)return c===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fc)return c===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uc)return c===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oc)return c===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kc)return c===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bc)return c===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zc)return c===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===Hc||n===Vc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Co)return c===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bd||n===Gc||n===Wc||n===Xc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Co)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Gc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class IE extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ro extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NE={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,c=null;const l=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const w of e.hand.values()){const S=t.getJointPose(w,n),v=this._getHandJoint(d,w);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const p=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],m=p.position.distanceTo(g.position),_=.02,x=.005;d.inputState.pinching&&m>_+x?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&m<=_-x&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(NE)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=s!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ro;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const FE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UE=`
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

}`;class OE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new tn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Si({vertexShader:FE,fragmentShader:UE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new Xo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kE extends Yi{constructor(e,t){super();const n=this;let r=null,s=1,c=null,l="local-floor",h=1,d=null,p=null,g=null,m=null,_=null,x=null;const w=new OE,S=t.getContextAttributes();let v=null,L=null;const T=[],A=[],H=new Re;let D=null;const k=new gn;k.viewport=new Et;const V=new gn;V.viewport=new Et;const I=[k,V],E=new IE;let z=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let _e=T[oe];return _e===void 0&&(_e=new Va,T[oe]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(oe){let _e=T[oe];return _e===void 0&&(_e=new Va,T[oe]=_e),_e.getGripSpace()},this.getHand=function(oe){let _e=T[oe];return _e===void 0&&(_e=new Va,T[oe]=_e),_e.getHandSpace()};function K(oe){const _e=A.indexOf(oe.inputSource);if(_e===-1)return;const Le=T[_e];Le!==void 0&&(Le.update(oe.inputSource,oe.frame,d||c),Le.dispatchEvent({type:oe.type,data:oe.inputSource}))}function B(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",$);for(let oe=0;oe<T.length;oe++){const _e=A[oe];_e!==null&&(A[oe]=null,T[oe].disconnect(_e))}z=null,ne=null,w.reset(),e.setRenderTarget(v),_=null,m=null,g=null,r=null,L=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(H.width,H.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){l=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(oe){d=oe},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return g},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",B),r.addEventListener("inputsourceschange",$),S.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(H),r.renderState.layers===void 0){const _e={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),L=new $i(_.framebufferWidth,_.framebufferHeight,{format:En,type:si,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let _e=null,Le=null,ye=null;S.depth&&(ye=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=S.stencil?Rr:Sr,Le=S.stencil?Cr:Xi);const pe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};g=new XRWebGLBinding(r,t),m=g.createProjectionLayer(pe),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),L=new $i(m.textureWidth,m.textureHeight,{format:En,type:si,depthTexture:new kd(m.textureWidth,m.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await r.requestReferenceSpace(l),it.setContext(r),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function $(oe){for(let _e=0;_e<oe.removed.length;_e++){const Le=oe.removed[_e],ye=A.indexOf(Le);ye>=0&&(A[ye]=null,T[ye].disconnect(Le))}for(let _e=0;_e<oe.added.length;_e++){const Le=oe.added[_e];let ye=A.indexOf(Le);if(ye===-1){for(let Ae=0;Ae<T.length;Ae++)if(Ae>=A.length){A.push(Le),ye=Ae;break}else if(A[Ae]===null){A[Ae]=Le,ye=Ae;break}if(ye===-1)break}const pe=T[ye];pe&&pe.connect(Le)}}const J=new G,te=new G;function j(oe,_e,Le){J.setFromMatrixPosition(_e.matrixWorld),te.setFromMatrixPosition(Le.matrixWorld);const ye=J.distanceTo(te),pe=_e.projectionMatrix.elements,Ae=Le.projectionMatrix.elements,Je=pe[14]/(pe[10]-1),rt=pe[14]/(pe[10]+1),fe=(pe[9]+1)/pe[5],we=(pe[9]-1)/pe[5],F=(pe[8]-1)/pe[0],be=(Ae[8]+1)/Ae[0],xe=Je*F,Be=Je*be,Pe=ye/(-F+be),Ke=Pe*-F;if(_e.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Ke),oe.translateZ(Pe),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),pe[10]===-1)oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const ke=Je+Pe,U=rt+Pe,P=xe-Ke,ie=Be+(ye-Ke),he=fe*rt/U*ke,de=we*rt/U*ke;oe.projectionMatrix.makePerspective(P,ie,he,de,ke,U),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function ve(oe,_e){_e===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(_e.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let _e=oe.near,Le=oe.far;w.texture!==null&&(w.depthNear>0&&(_e=w.depthNear),w.depthFar>0&&(Le=w.depthFar)),E.near=V.near=k.near=_e,E.far=V.far=k.far=Le,(z!==E.near||ne!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),z=E.near,ne=E.far),k.layers.mask=oe.layers.mask|2,V.layers.mask=oe.layers.mask|4,E.layers.mask=k.layers.mask|V.layers.mask;const ye=oe.parent,pe=E.cameras;ve(E,ye);for(let Ae=0;Ae<pe.length;Ae++)ve(pe[Ae],ye);pe.length===2?j(E,k,V):E.projectionMatrix.copy(k.projectionMatrix),De(oe,E,ye)};function De(oe,_e,Le){Le===null?oe.matrix.copy(_e.matrixWorld):(oe.matrix.copy(Le.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(_e.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Pr*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(m===null&&_===null))return h},this.setFoveation=function(oe){h=oe,m!==null&&(m.fixedFoveation=oe),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=oe)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(E)};let Fe=null;function Ze(oe,_e){if(p=_e.getViewerPose(d||c),x=_e,p!==null){const Le=p.views;_!==null&&(e.setRenderTargetFramebuffer(L,_.framebuffer),e.setRenderTarget(L));let ye=!1;Le.length!==E.cameras.length&&(E.cameras.length=0,ye=!0);for(let Ae=0;Ae<Le.length;Ae++){const Je=Le[Ae];let rt=null;if(_!==null)rt=_.getViewport(Je);else{const we=g.getViewSubImage(m,Je);rt=we.viewport,Ae===0&&(e.setRenderTargetTextures(L,we.colorTexture,m.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(L))}let fe=I[Ae];fe===void 0&&(fe=new gn,fe.layers.enable(Ae),fe.viewport=new Et,I[Ae]=fe),fe.matrix.fromArray(Je.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Je.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(rt.x,rt.y,rt.width,rt.height),Ae===0&&(E.matrix.copy(fe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ye===!0&&E.cameras.push(fe)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")){const Ae=g.getDepthInformation(Le[0]);Ae&&Ae.isValid&&Ae.texture&&w.init(e,Ae,r.renderState)}}for(let Le=0;Le<T.length;Le++){const ye=A[Le],pe=T[Le];ye!==null&&pe!==void 0&&pe.update(ye,_e,d||c)}Fe&&Fe(oe,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),x=null}const it=new Ud;it.setAnimationLoop(Ze),this.setAnimationLoop=function(oe){Fe=oe},this.dispose=function(){}}}const Fi=new Tn,BE=new lt;function zE(i,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function n(S,v){v.color.getRGB(S.fogColor.value,Id(i)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function r(S,v,L,T,A){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(S,v):v.isMeshToonMaterial?(s(S,v),g(S,v)):v.isMeshPhongMaterial?(s(S,v),p(S,v)):v.isMeshStandardMaterial?(s(S,v),m(S,v),v.isMeshPhysicalMaterial&&_(S,v,A)):v.isMeshMatcapMaterial?(s(S,v),x(S,v)):v.isMeshDepthMaterial?s(S,v):v.isMeshDistanceMaterial?(s(S,v),w(S,v)):v.isMeshNormalMaterial?s(S,v):v.isLineBasicMaterial?(c(S,v),v.isLineDashedMaterial&&l(S,v)):v.isPointsMaterial?h(S,v,L,T):v.isSpriteMaterial?d(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===ln&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===ln&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const L=e.get(v),T=L.envMap,A=L.envMapRotation;T&&(S.envMap.value=T,Fi.copy(A),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),S.envMapRotation.value.setFromMatrix4(BE.makeRotationFromEuler(Fi)),S.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function c(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function l(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function h(S,v,L,T){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*L,S.scale.value=T*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function d(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function g(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function m(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function _(S,v,L){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ln&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function x(S,v){v.matcap&&(S.matcap.value=v.matcap)}function w(S,v){const L=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function HE(i,e,t,n){let r={},s={},c=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,T){const A=T.program;n.uniformBlockBinding(L,A)}function d(L,T){let A=r[L.id];A===void 0&&(x(L),A=p(L),r[L.id]=A,L.addEventListener("dispose",S));const H=T.program;n.updateUBOMapping(L,H);const D=e.render.frame;s[L.id]!==D&&(m(L),s[L.id]=D)}function p(L){const T=g();L.__bindingPointIndex=T;const A=i.createBuffer(),H=L.__size,D=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,H,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,A),A}function g(){for(let L=0;L<l;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(L){const T=r[L.id],A=L.uniforms,H=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let D=0,k=A.length;D<k;D++){const V=Array.isArray(A[D])?A[D]:[A[D]];for(let I=0,E=V.length;I<E;I++){const z=V[I];if(_(z,D,I,H)===!0){const ne=z.__offset,K=Array.isArray(z.value)?z.value:[z.value];let B=0;for(let $=0;$<K.length;$++){const J=K[$],te=w(J);typeof J=="number"||typeof J=="boolean"?(z.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,ne+B,z.__data)):J.isMatrix3?(z.__data[0]=J.elements[0],z.__data[1]=J.elements[1],z.__data[2]=J.elements[2],z.__data[3]=0,z.__data[4]=J.elements[3],z.__data[5]=J.elements[4],z.__data[6]=J.elements[5],z.__data[7]=0,z.__data[8]=J.elements[6],z.__data[9]=J.elements[7],z.__data[10]=J.elements[8],z.__data[11]=0):(J.toArray(z.__data,B),B+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ne,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(L,T,A,H){const D=L.value,k=T+"_"+A;if(H[k]===void 0)return typeof D=="number"||typeof D=="boolean"?H[k]=D:H[k]=D.clone(),!0;{const V=H[k];if(typeof D=="number"||typeof D=="boolean"){if(V!==D)return H[k]=D,!0}else if(V.equals(D)===!1)return V.copy(D),!0}return!1}function x(L){const T=L.uniforms;let A=0;const H=16;for(let k=0,V=T.length;k<V;k++){const I=Array.isArray(T[k])?T[k]:[T[k]];for(let E=0,z=I.length;E<z;E++){const ne=I[E],K=Array.isArray(ne.value)?ne.value:[ne.value];for(let B=0,$=K.length;B<$;B++){const J=K[B],te=w(J),j=A%H,ve=j%te.boundary,De=j+ve;A+=ve,De!==0&&H-De<te.storage&&(A+=H-De),ne.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=A,A+=te.storage}}}const D=A%H;return D>0&&(A+=H-D),L.__size=A,L.__cache={},this}function w(L){const T={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(T.boundary=4,T.storage=4):L.isVector2?(T.boundary=8,T.storage=8):L.isVector3||L.isColor?(T.boundary=16,T.storage=12):L.isVector4?(T.boundary=16,T.storage=16):L.isMatrix3?(T.boundary=48,T.storage=48):L.isMatrix4?(T.boundary=64,T.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),T}function S(L){const T=L.target;T.removeEventListener("dispose",S);const A=c.indexOf(T.__bindingPointIndex);c.splice(A,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function v(){for(const L in r)i.deleteBuffer(r[L]);c=[],r={},s={}}return{bind:h,update:d,dispose:v}}class $w{constructor(e={}){const{canvas:t=P0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=c;const x=new Uint32Array(4),w=new Int32Array(4);let S=null,v=null;const L=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=yi,this.toneMappingExposure=1;const A=this;let H=!1,D=0,k=0,V=null,I=-1,E=null;const z=new Et,ne=new Et;let K=null;const B=new ct(0);let $=0,J=t.width,te=t.height,j=1,ve=null,De=null;const Fe=new Et(0,0,J,te),Ze=new Et(0,0,J,te);let it=!1;const oe=new gl;let _e=!1,Le=!1;const ye=new lt,pe=new lt,Ae=new G,Je=new Et,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function we(){return V===null?j:1}let F=n;function be(N,Y){return t.getContext(N,Y)}try{const N={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ol}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",Q,!1),F===null){const Y="webgl2";if(F=be(Y,N),F===null)throw be(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let xe,Be,Pe,Ke,ke,U,P,ie,he,de,ce,Ge,Ie,He,ft,Ce,We,et,nt,Xe,pt,st,wt,W;function Ue(){xe=new jS(F),xe.init(),st=new LE(F,xe),Be=new HS(F,xe,e,st),Pe=new RE(F,xe),Be.reverseDepthBuffer&&m&&Pe.buffers.depth.setReversed(!0),Ke=new ZS(F),ke=new pE,U=new DE(F,xe,Pe,ke,Be,st,Ke),P=new GS(A),ie=new $S(A),he=new iy(F),wt=new BS(F,he),de=new YS(F,he,Ke,wt),ce=new JS(F,de,he,Ke),nt=new KS(F,Be,U),Ce=new VS(ke),Ge=new fE(A,P,ie,xe,Be,wt,Ce),Ie=new zE(A,ke),He=new gE,ft=new ME(xe),et=new kS(A,P,ie,Pe,ce,_,h),We=new AE(A,ce,Be),W=new HE(F,Ke,Be,Pe),Xe=new zS(F,xe,Ke),pt=new qS(F,xe,Ke),Ke.programs=Ge.programs,A.capabilities=Be,A.extensions=xe,A.properties=ke,A.renderLists=He,A.shadowMap=We,A.state=Pe,A.info=Ke}Ue();const ae=new kE(A,F);this.xr=ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const N=xe.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=xe.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(N){N!==void 0&&(j=N,this.setSize(J,te,!1))},this.getSize=function(N){return N.set(J,te)},this.setSize=function(N,Y,Z=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=N,te=Y,t.width=Math.floor(N*j),t.height=Math.floor(Y*j),Z===!0&&(t.style.width=N+"px",t.style.height=Y+"px"),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(J*j,te*j).floor()},this.setDrawingBufferSize=function(N,Y,Z){J=N,te=Y,j=Z,t.width=Math.floor(N*Z),t.height=Math.floor(Y*Z),this.setViewport(0,0,N,Y)},this.getCurrentViewport=function(N){return N.copy(z)},this.getViewport=function(N){return N.copy(Fe)},this.setViewport=function(N,Y,Z,se){N.isVector4?Fe.set(N.x,N.y,N.z,N.w):Fe.set(N,Y,Z,se),Pe.viewport(z.copy(Fe).multiplyScalar(j).round())},this.getScissor=function(N){return N.copy(Ze)},this.setScissor=function(N,Y,Z,se){N.isVector4?Ze.set(N.x,N.y,N.z,N.w):Ze.set(N,Y,Z,se),Pe.scissor(ne.copy(Ze).multiplyScalar(j).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(N){Pe.setScissorTest(it=N)},this.setOpaqueSort=function(N){ve=N},this.setTransparentSort=function(N){De=N},this.getClearColor=function(N){return N.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(N=!0,Y=!0,Z=!0){let se=0;if(N){let q=!1;if(V!==null){const Te=V.texture.format;q=Te===fl||Te===dl||Te===hl}if(q){const Te=V.texture.type,Oe=Te===si||Te===Xi||Te===ss||Te===Cr||Te===cl||Te===ll,$e=et.getClearColor(),je=et.getClearAlpha(),tt=$e.r,ot=$e.g,Ve=$e.b;Oe?(x[0]=tt,x[1]=ot,x[2]=Ve,x[3]=je,F.clearBufferuiv(F.COLOR,0,x)):(w[0]=tt,w[1]=ot,w[2]=Ve,w[3]=je,F.clearBufferiv(F.COLOR,0,w))}else se|=F.COLOR_BUFFER_BIT}Y&&(se|=F.DEPTH_BUFFER_BIT),Z&&(se|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),He.dispose(),ft.dispose(),ke.dispose(),P.dispose(),ie.dispose(),ce.dispose(),wt.dispose(),W.dispose(),Ge.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Mi),ae.removeEventListener("sessionend",ps),$n.stop()};function me(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const N=Ke.autoReset,Y=We.enabled,Z=We.autoUpdate,se=We.needsUpdate,q=We.type;Ue(),Ke.autoReset=N,We.enabled=Y,We.autoUpdate=Z,We.needsUpdate=se,We.type=q}function Q(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Qe(N){const Y=N.target;Y.removeEventListener("dispose",Qe),It(Y)}function It(N){Nt(N),ke.remove(N)}function Nt(N){const Y=ke.get(N).programs;Y!==void 0&&(Y.forEach(function(Z){Ge.releaseProgram(Z)}),N.isShaderMaterial&&Ge.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,Z,se,q,Te){Y===null&&(Y=rt);const Oe=q.isMesh&&q.matrixWorld.determinant()<0,$e=vs(N,Y,Z,se,q);Pe.setMaterial(se,Oe);let je=Z.index,tt=1;if(se.wireframe===!0){if(je=de.getWireframeAttribute(Z),je===void 0)return;tt=2}const ot=Z.drawRange,Ve=Z.attributes.position;let gt=ot.start*tt,ze=(ot.start+ot.count)*tt;Te!==null&&(gt=Math.max(gt,Te.start*tt),ze=Math.min(ze,(Te.start+Te.count)*tt)),je!==null?(gt=Math.max(gt,0),ze=Math.min(ze,je.count)):Ve!=null&&(gt=Math.max(gt,0),ze=Math.min(ze,Ve.count));const Pt=ze-gt;if(Pt<0||Pt===1/0)return;wt.setup(q,se,$e,Z,je);let Yt,Mt=Xe;if(je!==null&&(Yt=he.get(je),Mt=pt,Mt.setIndex(Yt)),q.isMesh)se.wireframe===!0?(Pe.setLineWidth(se.wireframeLinewidth*we()),Mt.setMode(F.LINES)):Mt.setMode(F.TRIANGLES);else if(q.isLine){let Ye=se.linewidth;Ye===void 0&&(Ye=1),Pe.setLineWidth(Ye*we()),q.isLineSegments?Mt.setMode(F.LINES):q.isLineLoop?Mt.setMode(F.LINE_LOOP):Mt.setMode(F.LINE_STRIP)}else q.isPoints?Mt.setMode(F.POINTS):q.isSprite&&Mt.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Mt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))Mt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ye=q._multiDrawStarts,An=q._multiDrawCounts,yt=q._multiDrawCount,fn=je?he.get(je).bytesPerElement:1,Fn=ke.get(se).currentProgram.getUniforms();for(let rn=0;rn<yt;rn++)Fn.setValue(F,"_gl_DrawID",rn),Mt.render(Ye[rn]/fn,An[rn])}else if(q.isInstancedMesh)Mt.renderInstances(gt,Pt,q.count);else if(Z.isInstancedBufferGeometry){const Ye=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,An=Math.min(Z.instanceCount,Ye);Mt.renderInstances(gt,Pt,An)}else Mt.render(gt,Pt)};function dt(N,Y,Z){N.transparent===!0&&N.side===ti&&N.forceSinglePass===!1?(N.side=ln,N.needsUpdate=!0,Ki(N,Y,Z),N.side=xi,N.needsUpdate=!0,Ki(N,Y,Z),N.side=ti):Ki(N,Y,Z)}this.compile=function(N,Y,Z=null){Z===null&&(Z=N),v=ft.get(Z),v.init(Y),T.push(v),Z.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),N!==Z&&N.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights();const se=new Set;return N.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Te=q.material;if(Te)if(Array.isArray(Te))for(let Oe=0;Oe<Te.length;Oe++){const $e=Te[Oe];dt($e,Z,q),se.add($e)}else dt(Te,Z,q),se.add(Te)}),T.pop(),v=null,se},this.compileAsync=function(N,Y,Z=null){const se=this.compile(N,Y,Z);return new Promise(q=>{function Te(){if(se.forEach(function(Oe){ke.get(Oe).currentProgram.isReady()&&se.delete(Oe)}),se.size===0){q(N);return}setTimeout(Te,10)}xe.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let dn=null;function kt(N){dn&&dn(N)}function Mi(){$n.stop()}function ps(){$n.start()}const $n=new Ud;$n.setAnimationLoop(kt),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(N){dn=N,ae.setAnimationLoop(N),N===null?$n.stop():$n.start()},ae.addEventListener("sessionstart",Mi),ae.addEventListener("sessionend",ps),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(Y),Y=ae.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,Y,V),v=ft.get(N,T.length),v.init(Y),T.push(v),pe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),oe.setFromProjectionMatrix(pe),Le=this.localClippingEnabled,_e=Ce.init(this.clippingPlanes,Le),S=He.get(N,L.length),S.init(),L.push(S),ae.enabled===!0&&ae.isPresenting===!0){const Te=A.xr.getDepthSensingMesh();Te!==null&&nn(Te,Y,-1/0,A.sortObjects)}nn(N,Y,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(ve,De),fe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,fe&&et.addToRenderList(S,N),this.info.render.frame++,_e===!0&&Ce.beginShadows();const Z=v.state.shadowsArray;We.render(Z,N,Y),_e===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=S.opaque,q=S.transmissive;if(v.setupLights(),Y.isArrayCamera){const Te=Y.cameras;if(q.length>0)for(let Oe=0,$e=Te.length;Oe<$e;Oe++){const je=Te[Oe];Ei(se,q,N,je)}fe&&et.render(N);for(let Oe=0,$e=Te.length;Oe<$e;Oe++){const je=Te[Oe];ms(S,N,je,je.viewport)}}else q.length>0&&Ei(se,q,N,Y),fe&&et.render(N),ms(S,N,Y);V!==null&&(U.updateMultisampleRenderTarget(V),U.updateRenderTargetMipmap(V)),N.isScene===!0&&N.onAfterRender(A,N,Y),wt.resetDefaultState(),I=-1,E=null,T.pop(),T.length>0?(v=T[T.length-1],_e===!0&&Ce.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function nn(N,Y,Z,se){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)Z=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLight)v.pushLight(N),N.castShadow&&v.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||oe.intersectsSprite(N)){se&&Je.setFromMatrixPosition(N.matrixWorld).applyMatrix4(pe);const Oe=ce.update(N),$e=N.material;$e.visible&&S.push(N,Oe,$e,Z,Je.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||oe.intersectsObject(N))){const Oe=ce.update(N),$e=N.material;if(se&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Je.copy(N.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Je.copy(Oe.boundingSphere.center)),Je.applyMatrix4(N.matrixWorld).applyMatrix4(pe)),Array.isArray($e)){const je=Oe.groups;for(let tt=0,ot=je.length;tt<ot;tt++){const Ve=je[tt],gt=$e[Ve.materialIndex];gt&&gt.visible&&S.push(N,Oe,gt,Z,Je.z,Ve)}}else $e.visible&&S.push(N,Oe,$e,Z,Je.z,null)}}const Te=N.children;for(let Oe=0,$e=Te.length;Oe<$e;Oe++)nn(Te[Oe],Y,Z,se)}function ms(N,Y,Z,se){const q=N.opaque,Te=N.transmissive,Oe=N.transparent;v.setupLightsView(Z),_e===!0&&Ce.setGlobalState(A.clippingPlanes,Z),se&&Pe.viewport(z.copy(se)),q.length>0&&jn(q,Y,Z),Te.length>0&&jn(Te,Y,Z),Oe.length>0&&jn(Oe,Y,Z),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Ei(N,Y,Z,se){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[se.id]===void 0&&(v.state.transmissionRenderTarget[se.id]=new $i(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?ds:si,minFilter:Hi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const Te=v.state.transmissionRenderTarget[se.id],Oe=se.viewport||z;Te.setSize(Oe.z,Oe.w);const $e=A.getRenderTarget();A.setRenderTarget(Te),A.getClearColor(B),$=A.getClearAlpha(),$<1&&A.setClearColor(16777215,.5),A.clear(),fe&&et.render(Z);const je=A.toneMapping;A.toneMapping=yi;const tt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),v.setupLightsView(se),_e===!0&&Ce.setGlobalState(A.clippingPlanes,se),jn(N,Z,se),U.updateMultisampleRenderTarget(Te),U.updateRenderTargetMipmap(Te),xe.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ve=0,gt=Y.length;Ve<gt;Ve++){const ze=Y[Ve],Pt=ze.object,Yt=ze.geometry,Mt=ze.material,Ye=ze.group;if(Mt.side===ti&&Pt.layers.test(se.layers)){const An=Mt.side;Mt.side=ln,Mt.needsUpdate=!0,Zi(Pt,Z,se,Yt,Mt,Ye),Mt.side=An,Mt.needsUpdate=!0,ot=!0}}ot===!0&&(U.updateMultisampleRenderTarget(Te),U.updateRenderTargetMipmap(Te))}A.setRenderTarget($e),A.setClearColor(B,$),tt!==void 0&&(se.viewport=tt),A.toneMapping=je}function jn(N,Y,Z){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,Te=N.length;q<Te;q++){const Oe=N[q],$e=Oe.object,je=Oe.geometry,tt=se===null?Oe.material:se,ot=Oe.group;$e.layers.test(Z.layers)&&Zi($e,Y,Z,je,tt,ot)}}function Zi(N,Y,Z,se,q,Te){N.onBeforeRender(A,Y,Z,se,q,Te),N.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),q.onBeforeRender(A,Y,Z,se,N,Te),q.transparent===!0&&q.side===ti&&q.forceSinglePass===!1?(q.side=ln,q.needsUpdate=!0,A.renderBufferDirect(Z,Y,se,q,N,Te),q.side=xi,q.needsUpdate=!0,A.renderBufferDirect(Z,Y,se,q,N,Te),q.side=ti):A.renderBufferDirect(Z,Y,se,q,N,Te),N.onAfterRender(A,Y,Z,se,q,Te)}function Ki(N,Y,Z){Y.isScene!==!0&&(Y=rt);const se=ke.get(N),q=v.state.lights,Te=v.state.shadowsArray,Oe=q.state.version,$e=Ge.getParameters(N,q.state,Te,Y,Z),je=Ge.getProgramCacheKey($e);let tt=se.programs;se.environment=N.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(N.isMeshStandardMaterial?ie:P).get(N.envMap||se.environment),se.envMapRotation=se.environment!==null&&N.envMap===null?Y.environmentRotation:N.envMapRotation,tt===void 0&&(N.addEventListener("dispose",Qe),tt=new Map,se.programs=tt);let ot=tt.get(je);if(ot!==void 0){if(se.currentProgram===ot&&se.lightsStateVersion===Oe)return _s(N,$e),ot}else $e.uniforms=Ge.getUniforms(N),N.onBeforeCompile($e,A),ot=Ge.acquireProgram($e,je),tt.set(je,ot),se.uniforms=$e.uniforms;const Ve=se.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ve.clippingPlanes=Ce.uniform),_s(N,$e),se.needsLights=Qo(N),se.lightsStateVersion=Oe,se.needsLights&&(Ve.ambientLightColor.value=q.state.ambient,Ve.lightProbe.value=q.state.probe,Ve.directionalLights.value=q.state.directional,Ve.directionalLightShadows.value=q.state.directionalShadow,Ve.spotLights.value=q.state.spot,Ve.spotLightShadows.value=q.state.spotShadow,Ve.rectAreaLights.value=q.state.rectArea,Ve.ltc_1.value=q.state.rectAreaLTC1,Ve.ltc_2.value=q.state.rectAreaLTC2,Ve.pointLights.value=q.state.point,Ve.pointLightShadows.value=q.state.pointShadow,Ve.hemisphereLights.value=q.state.hemi,Ve.directionalShadowMap.value=q.state.directionalShadowMap,Ve.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ve.spotShadowMap.value=q.state.spotShadowMap,Ve.spotLightMatrix.value=q.state.spotLightMatrix,Ve.spotLightMap.value=q.state.spotLightMap,Ve.pointShadowMap.value=q.state.pointShadowMap,Ve.pointShadowMatrix.value=q.state.pointShadowMatrix),se.currentProgram=ot,se.uniformsList=null,ot}function gs(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=Ro.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function _s(N,Y){const Z=ke.get(N);Z.outputColorSpace=Y.outputColorSpace,Z.batching=Y.batching,Z.batchingColor=Y.batchingColor,Z.instancing=Y.instancing,Z.instancingColor=Y.instancingColor,Z.instancingMorph=Y.instancingMorph,Z.skinning=Y.skinning,Z.morphTargets=Y.morphTargets,Z.morphNormals=Y.morphNormals,Z.morphColors=Y.morphColors,Z.morphTargetsCount=Y.morphTargetsCount,Z.numClippingPlanes=Y.numClippingPlanes,Z.numIntersection=Y.numClipIntersection,Z.vertexAlphas=Y.vertexAlphas,Z.vertexTangents=Y.vertexTangents,Z.toneMapping=Y.toneMapping}function vs(N,Y,Z,se,q){Y.isScene!==!0&&(Y=rt),U.resetTextureUnits();const Te=Y.fog,Oe=se.isMeshStandardMaterial?Y.environment:null,$e=V===null?A.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Nr,je=(se.isMeshStandardMaterial?ie:P).get(se.envMap||Oe),tt=se.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ot=!!Z.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ve=!!Z.morphAttributes.position,gt=!!Z.morphAttributes.normal,ze=!!Z.morphAttributes.color;let Pt=yi;se.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Pt=A.toneMapping);const Yt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Mt=Yt!==void 0?Yt.length:0,Ye=ke.get(se),An=v.state.lights;if(_e===!0&&(Le===!0||N!==E)){const qt=N===E&&se.id===I;Ce.setState(se,N,qt)}let yt=!1;se.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==An.state.version||Ye.outputColorSpace!==$e||q.isBatchedMesh&&Ye.batching===!1||!q.isBatchedMesh&&Ye.batching===!0||q.isBatchedMesh&&Ye.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ye.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ye.instancing===!1||!q.isInstancedMesh&&Ye.instancing===!0||q.isSkinnedMesh&&Ye.skinning===!1||!q.isSkinnedMesh&&Ye.skinning===!0||q.isInstancedMesh&&Ye.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ye.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ye.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ye.instancingMorph===!1&&q.morphTexture!==null||Ye.envMap!==je||se.fog===!0&&Ye.fog!==Te||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ce.numPlanes||Ye.numIntersection!==Ce.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==ot||Ye.morphTargets!==Ve||Ye.morphNormals!==gt||Ye.morphColors!==ze||Ye.toneMapping!==Pt||Ye.morphTargetsCount!==Mt)&&(yt=!0):(yt=!0,Ye.__version=se.version);let fn=Ye.currentProgram;yt===!0&&(fn=Ki(se,Y,q));let Fn=!1,rn=!1,ai=!1;const b=fn.getUniforms(),_t=Ye.uniforms;if(Pe.useProgram(fn.program)&&(Fn=!0,rn=!0,ai=!0),se.id!==I&&(I=se.id,rn=!0),Fn||E!==N){Pe.buffers.depth.getReversed()?(ye.copy(N.projectionMatrix),L0(ye),I0(ye),b.setValue(F,"projectionMatrix",ye)):b.setValue(F,"projectionMatrix",N.projectionMatrix),b.setValue(F,"viewMatrix",N.matrixWorldInverse);const sn=b.map.cameraPosition;sn!==void 0&&sn.setValue(F,Ae.setFromMatrixPosition(N.matrixWorld)),Be.logarithmicDepthBuffer&&b.setValue(F,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&b.setValue(F,"isOrthographic",N.isOrthographicCamera===!0),E!==N&&(E=N,rn=!0,ai=!0)}if(q.isSkinnedMesh){b.setOptional(F,q,"bindMatrix"),b.setOptional(F,q,"bindMatrixInverse");const qt=q.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),b.setValue(F,"boneTexture",qt.boneTexture,U))}q.isBatchedMesh&&(b.setOptional(F,q,"batchingTexture"),b.setValue(F,"batchingTexture",q._matricesTexture,U),b.setOptional(F,q,"batchingIdTexture"),b.setValue(F,"batchingIdTexture",q._indirectTexture,U),b.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&b.setValue(F,"batchingColorTexture",q._colorsTexture,U));const bi=Z.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&nt.update(q,Z,fn),(rn||Ye.receiveShadow!==q.receiveShadow)&&(Ye.receiveShadow=q.receiveShadow,b.setValue(F,"receiveShadow",q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(_t.envMap.value=je,_t.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(_t.envMapIntensity.value=Y.environmentIntensity),rn&&(b.setValue(F,"toneMappingExposure",A.toneMappingExposure),Ye.needsLights&&Jo(_t,ai),Te&&se.fog===!0&&Ie.refreshFogUniforms(_t,Te),Ie.refreshMaterialUniforms(_t,se,j,te,v.state.transmissionRenderTarget[N.id]),Ro.upload(F,gs(Ye),_t,U)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Ro.upload(F,gs(Ye),_t,U),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&b.setValue(F,"center",q.center),b.setValue(F,"modelViewMatrix",q.modelViewMatrix),b.setValue(F,"normalMatrix",q.normalMatrix),b.setValue(F,"modelMatrix",q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const qt=se.uniformsGroups;for(let sn=0,Un=qt.length;sn<Un;sn++){const ys=qt[sn];W.update(ys,fn),W.bind(ys,fn)}}return fn}function Jo(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function Qo(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(N,Y,Z){ke.get(N.texture).__webglTexture=Y,ke.get(N.depthTexture).__webglTexture=Z;const se=ke.get(N);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=Z===void 0,se.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,Y){const Z=ke.get(N);Z.__webglFramebuffer=Y,Z.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(N,Y=0,Z=0){V=N,D=Y,k=Z;let se=!0,q=null,Te=!1,Oe=!1;if(N){const je=ke.get(N);if(je.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(F.FRAMEBUFFER,null),se=!1;else if(je.__webglFramebuffer===void 0)U.setupRenderTarget(N);else if(je.__hasExternalTextures)U.rebindTextures(N,ke.get(N.texture).__webglTexture,ke.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Ve=N.depthTexture;if(je.__boundDepthTexture!==Ve){if(Ve!==null&&ke.has(Ve)&&(N.width!==Ve.image.width||N.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(N)}}const tt=N.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Oe=!0);const ot=ke.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ot[Y])?q=ot[Y][Z]:q=ot[Y],Te=!0):N.samples>0&&U.useMultisampledRTT(N)===!1?q=ke.get(N).__webglMultisampledFramebuffer:Array.isArray(ot)?q=ot[Z]:q=ot,z.copy(N.viewport),ne.copy(N.scissor),K=N.scissorTest}else z.copy(Fe).multiplyScalar(j).floor(),ne.copy(Ze).multiplyScalar(j).floor(),K=it;if(Pe.bindFramebuffer(F.FRAMEBUFFER,q)&&se&&Pe.drawBuffers(N,q),Pe.viewport(z),Pe.scissor(ne),Pe.setScissorTest(K),Te){const je=ke.get(N.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,je.__webglTexture,Z)}else if(Oe){const je=ke.get(N.texture),tt=Y||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,je.__webglTexture,Z||0,tt)}I=-1},this.readRenderTargetPixels=function(N,Y,Z,se,q,Te,Oe){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=ke.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Oe!==void 0&&($e=$e[Oe]),$e){Pe.bindFramebuffer(F.FRAMEBUFFER,$e);try{const je=N.texture,tt=je.format,ot=je.type;if(!Be.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-se&&Z>=0&&Z<=N.height-q&&F.readPixels(Y,Z,se,q,st.convert(tt),st.convert(ot),Te)}finally{const je=V!==null?ke.get(V).__webglFramebuffer:null;Pe.bindFramebuffer(F.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(N,Y,Z,se,q,Te,Oe){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=ke.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Oe!==void 0&&($e=$e[Oe]),$e){const je=N.texture,tt=je.format,ot=je.type;if(!Be.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=N.width-se&&Z>=0&&Z<=N.height-q){Pe.bindFramebuffer(F.FRAMEBUFFER,$e);const Ve=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ve),F.bufferData(F.PIXEL_PACK_BUFFER,Te.byteLength,F.STREAM_READ),F.readPixels(Y,Z,se,q,st.convert(tt),st.convert(ot),0);const gt=V!==null?ke.get(V).__webglFramebuffer:null;Pe.bindFramebuffer(F.FRAMEBUFFER,gt);const ze=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await D0(F,ze,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ve),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Te),F.deleteBuffer(Ve),F.deleteSync(ze),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,Y=null,Z=0){N.isTexture!==!0&&(Qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,N=arguments[1]);const se=Math.pow(2,-Z),q=Math.floor(N.image.width*se),Te=Math.floor(N.image.height*se),Oe=Y!==null?Y.x:0,$e=Y!==null?Y.y:0;U.setTexture2D(N,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,Oe,$e,q,Te),Pe.unbindTexture()},this.copyTextureToTexture=function(N,Y,Z=null,se=null,q=0){N.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,N=arguments[1],Y=arguments[2],q=arguments[3]||0,Z=null);let Te,Oe,$e,je,tt,ot,Ve,gt,ze;const Pt=N.isCompressedTexture?N.mipmaps[q]:N.image;Z!==null?(Te=Z.max.x-Z.min.x,Oe=Z.max.y-Z.min.y,$e=Z.isBox3?Z.max.z-Z.min.z:1,je=Z.min.x,tt=Z.min.y,ot=Z.isBox3?Z.min.z:0):(Te=Pt.width,Oe=Pt.height,$e=Pt.depth||1,je=0,tt=0,ot=0),se!==null?(Ve=se.x,gt=se.y,ze=se.z):(Ve=0,gt=0,ze=0);const Yt=st.convert(Y.format),Mt=st.convert(Y.type);let Ye;Y.isData3DTexture?(U.setTexture3D(Y,0),Ye=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(U.setTexture2DArray(Y,0),Ye=F.TEXTURE_2D_ARRAY):(U.setTexture2D(Y,0),Ye=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const An=F.getParameter(F.UNPACK_ROW_LENGTH),yt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),fn=F.getParameter(F.UNPACK_SKIP_PIXELS),Fn=F.getParameter(F.UNPACK_SKIP_ROWS),rn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Pt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,je),F.pixelStorei(F.UNPACK_SKIP_ROWS,tt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ot);const ai=N.isDataArrayTexture||N.isData3DTexture,b=Y.isDataArrayTexture||Y.isData3DTexture;if(N.isRenderTargetTexture||N.isDepthTexture){const _t=ke.get(N),bi=ke.get(Y),qt=ke.get(_t.__renderTarget),sn=ke.get(bi.__renderTarget);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,qt.__webglFramebuffer),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let Un=0;Un<$e;Un++)ai&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.get(N).__webglTexture,q,ot+Un),N.isDepthTexture?(b&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.get(Y).__webglTexture,q,ze+Un),F.blitFramebuffer(je,tt,Te,Oe,Ve,gt,Te,Oe,F.DEPTH_BUFFER_BIT,F.NEAREST)):b?F.copyTexSubImage3D(Ye,q,Ve,gt,ze+Un,je,tt,Te,Oe):F.copyTexSubImage2D(Ye,q,Ve,gt,ze+Un,je,tt,Te,Oe);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else b?N.isDataTexture||N.isData3DTexture?F.texSubImage3D(Ye,q,Ve,gt,ze,Te,Oe,$e,Yt,Mt,Pt.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(Ye,q,Ve,gt,ze,Te,Oe,$e,Yt,Pt.data):F.texSubImage3D(Ye,q,Ve,gt,ze,Te,Oe,$e,Yt,Mt,Pt):N.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,q,Ve,gt,Te,Oe,Yt,Mt,Pt.data):N.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,q,Ve,gt,Pt.width,Pt.height,Yt,Pt.data):F.texSubImage2D(F.TEXTURE_2D,q,Ve,gt,Te,Oe,Yt,Mt,Pt);F.pixelStorei(F.UNPACK_ROW_LENGTH,An),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,yt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,fn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Fn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,rn),q===0&&Y.generateMipmaps&&F.generateMipmap(Ye),Pe.unbindTexture()},this.copyTextureToTexture3D=function(N,Y,Z=null,se=null,q=0){return N.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,se=arguments[1]||null,N=arguments[2],Y=arguments[3],q=arguments[4]||0),Qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,Y,Z,se,q)},this.initRenderTarget=function(N){ke.get(N).__webglFramebuffer===void 0&&U.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?U.setTextureCube(N,0):N.isData3DTexture?U.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?U.setTexture2DArray(N,0):U.setTexture2D(N,0),Pe.unbindTexture()},this.resetState=function(){D=0,k=0,V=null,Pe.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class Gd{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ct(e),this.near=t,this.far=n}clone(){return new Gd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jw extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jc,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new G;class Wd{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xh=new G,Sh=new Et,Mh=new Et,VE=new G,Eh=new lt,so=new G,Ga=new oi,bh=new lt,Wa=new Fr;class qw extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mu,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,so),this.boundingBox.expandByPoint(so)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,so),this.boundingSphere.expandByPoint(so)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(r),e.ray.intersectsSphere(Ga)!==!1&&(bh.copy(r).invert(),Wa.copy(e.ray).applyMatrix4(bh),!(this.boundingBox!==null&&Wa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Mu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===e0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Sh.fromBufferAttribute(r.attributes.skinIndex,e),Mh.fromBufferAttribute(r.attributes.skinWeight,e),xh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const c=Mh.getComponent(s);if(c!==0){const l=Sh.getComponent(s);Eh.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(VE.copy(xh).applyMatrix4(Eh),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class GE extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xd extends tn{constructor(e=null,t=1,n=1,r,s,c,l,h,d=_n,p=_n,g,m){super(null,c,l,h,d,p,r,s,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wh=new lt,WE=new lt;class $d{constructor(e=[],t=[]){this.uuid=wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new lt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,c=e.length;s<c;s++){const l=e[s]?e[s].matrixWorld:WE;wh.multiplyMatrices(l,t[s]),wh.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new $d(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Xd(t,e,e,En,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let c=t[s];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),c=new GE),this.bones.push(c),this.boneInverses.push(new lt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const c=t[r];e.bones.push(c.uuid);const l=n[r];e.boneInverses.push(l.toArray())}return e}}class Th extends Zt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fr=new lt,Ah=new lt,oo=[],Ch=new Gn,XE=new lt,jr=new en,Yr=new oi;class Zw extends en{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Th(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,XE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fr),Ch.copy(e.boundingBox).applyMatrix4(fr),this.boundingBox.union(Ch)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fr),Yr.copy(e.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,c=e*s+1;for(let l=0;l<n.length;l++)n[l]=r[c+l]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),e.ray.intersectsSphere(Yr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,fr),Ah.multiplyMatrices(n,fr),jr.matrixWorld=Ah,jr.raycast(e,oo);for(let c=0,l=oo.length;c<l;c++){const h=oo[c];h.instanceId=s,h.object=this,t.push(h)}oo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Th(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xd(new Float32Array(r*this.count),r,this.count,ul,Nn));const s=this.morphTexture.source.data.data;let c=0;for(let d=0;d<n.length;d++)c+=n[d];const l=this.geometry.morphTargetsRelative?1:1-c,h=r*e;s[h]=l,s.set(n,h+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class as extends qi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fo=new G,Uo=new G,Rh=new lt,qr=new Fr,ao=new oi,Xa=new G,Ph=new G;class jd extends Ut{constructor(e=new $t,t=new as){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Fo.fromBufferAttribute(t,r-1),Uo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Fo.distanceTo(Uo);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),ao.radius+=s,e.ray.intersectsSphere(ao)===!1)return;Rh.copy(r).invert(),qr.copy(e.ray).applyMatrix4(Rh);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,d=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){const _=Math.max(0,c.start),x=Math.min(p.count,c.start+c.count);for(let w=_,S=x-1;w<S;w+=d){const v=p.getX(w),L=p.getX(w+1),T=co(this,e,qr,h,v,L);T&&t.push(T)}if(this.isLineLoop){const w=p.getX(x-1),S=p.getX(_),v=co(this,e,qr,h,w,S);v&&t.push(v)}}else{const _=Math.max(0,c.start),x=Math.min(m.count,c.start+c.count);for(let w=_,S=x-1;w<S;w+=d){const v=co(this,e,qr,h,w,w+1);v&&t.push(v)}if(this.isLineLoop){const w=co(this,e,qr,h,x-1,_);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function co(i,e,t,n,r,s){const c=i.geometry.attributes.position;if(Fo.fromBufferAttribute(c,r),Uo.fromBufferAttribute(c,s),t.distanceSqToSegment(Fo,Uo,Xa,Ph)>n)return;Xa.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Xa);if(!(h<e.near||h>e.far))return{distance:h,point:Ph.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Dh=new G,Lh=new G;class Oo extends jd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Dh.fromBufferAttribute(t,r),Lh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Dh.distanceTo(Lh);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kw extends jd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class $E extends qi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ih=new lt,qc=new Fr,lo=new oi,uo=new G;class Jw extends Ut{constructor(e=new $t,t=new $E){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),lo.radius+=s,e.ray.intersectsSphere(lo)===!1)return;Ih.copy(r).invert(),qc.copy(e.ray).applyMatrix4(Ih);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,d=n.index,g=n.attributes.position;if(d!==null){const m=Math.max(0,c.start),_=Math.min(d.count,c.start+c.count);for(let x=m,w=_;x<w;x++){const S=d.getX(x);uo.fromBufferAttribute(g,S),Nh(uo,S,h,r,e,t,this)}}else{const m=Math.max(0,c.start),_=Math.min(g.count,c.start+c.count);for(let x=m,w=_;x<w;x++)uo.fromBufferAttribute(g,x),Nh(uo,x,h,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Nh(i,e,t,n,r,s,c){const l=qc.distanceSqToPoint(i);if(l<t){const h=new G;qc.closestPointToPoint(i,h),h.applyMatrix4(n);const d=r.ray.origin.distanceTo(h);if(d<r.near||d>r.far)return;s.push({distance:d,distanceToRay:Math.sqrt(l),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let c=1;c<=e;c++)n=this.getPoint(c/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let c;t?c=t:c=e*n[s-1];let l=0,h=s-1,d;for(;l<=h;)if(r=Math.floor(l+(h-l)/2),d=n[r]-c,d<0)l=r+1;else if(d>0)h=r-1;else{h=r;break}if(r=h,n[r]===c)return r/(s-1);const p=n[r],m=n[r+1]-p,_=(c-p)/m;return(r+_)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const c=this.getPoint(r),l=this.getPoint(s),h=t||(c.isVector2?new Re:new G);return h.copy(l).sub(c).normalize(),h}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new G,r=[],s=[],c=[],l=new G,h=new lt;for(let _=0;_<=e;_++){const x=_/e;r[_]=this.getTangentAt(x,new G)}s[0]=new G,c[0]=new G;let d=Number.MAX_VALUE;const p=Math.abs(r[0].x),g=Math.abs(r[0].y),m=Math.abs(r[0].z);p<=d&&(d=p,n.set(1,0,0)),g<=d&&(d=g,n.set(0,1,0)),m<=d&&n.set(0,0,1),l.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],l),c[0].crossVectors(r[0],s[0]);for(let _=1;_<=e;_++){if(s[_]=s[_-1].clone(),c[_]=c[_-1].clone(),l.crossVectors(r[_-1],r[_]),l.length()>Number.EPSILON){l.normalize();const x=Math.acos(Gt(r[_-1].dot(r[_]),-1,1));s[_].applyMatrix4(h.makeRotationAxis(l,x))}c[_].crossVectors(r[_],s[_])}if(t===!0){let _=Math.acos(Gt(s[0].dot(s[e]),-1,1));_/=e,r[0].dot(l.crossVectors(s[0],s[e]))>0&&(_=-_);for(let x=1;x<=e;x++)s[x].applyMatrix4(h.makeRotationAxis(r[x],_*x)),c[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class vl extends Wn{constructor(e=0,t=0,n=1,r=1,s=0,c=Math.PI*2,l=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=c,this.aClockwise=l,this.aRotation=h}getPoint(e,t=new Re){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const c=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(c?s=0:s=r),this.aClockwise===!0&&!c&&(s===r?s=-r:s=s-r);const l=this.aStartAngle+e*s;let h=this.aX+this.xRadius*Math.cos(l),d=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const p=Math.cos(this.aRotation),g=Math.sin(this.aRotation),m=h-this.aX,_=d-this.aY;h=m*p-_*g+this.aX,d=m*g+_*p+this.aY}return n.set(h,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jE extends vl{constructor(e,t,n,r,s,c){super(e,t,n,n,r,s,c),this.isArcCurve=!0,this.type="ArcCurve"}}function yl(){let i=0,e=0,t=0,n=0;function r(s,c,l,h){i=s,e=l,t=-3*s+3*c-2*l-h,n=2*s-2*c+l+h}return{initCatmullRom:function(s,c,l,h,d){r(c,l,d*(l-s),d*(h-c))},initNonuniformCatmullRom:function(s,c,l,h,d,p,g){let m=(c-s)/d-(l-s)/(d+p)+(l-c)/p,_=(l-c)/p-(h-c)/(p+g)+(h-l)/g;m*=p,_*=p,r(c,l,m,_)},calc:function(s){const c=s*s,l=c*s;return i+e*s+t*c+n*l}}}const ho=new G,$a=new yl,ja=new yl,Ya=new yl;class YE extends Wn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new G){const n=t,r=this.points,s=r.length,c=(s-(this.closed?0:1))*e;let l=Math.floor(c),h=c-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1);let d,p;this.closed||l>0?d=r[(l-1)%s]:(ho.subVectors(r[0],r[1]).add(r[0]),d=ho);const g=r[l%s],m=r[(l+1)%s];if(this.closed||l+2<s?p=r[(l+2)%s]:(ho.subVectors(r[s-1],r[s-2]).add(r[s-1]),p=ho),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let x=Math.pow(d.distanceToSquared(g),_),w=Math.pow(g.distanceToSquared(m),_),S=Math.pow(m.distanceToSquared(p),_);w<1e-4&&(w=1),x<1e-4&&(x=w),S<1e-4&&(S=w),$a.initNonuniformCatmullRom(d.x,g.x,m.x,p.x,x,w,S),ja.initNonuniformCatmullRom(d.y,g.y,m.y,p.y,x,w,S),Ya.initNonuniformCatmullRom(d.z,g.z,m.z,p.z,x,w,S)}else this.curveType==="catmullrom"&&($a.initCatmullRom(d.x,g.x,m.x,p.x,this.tension),ja.initCatmullRom(d.y,g.y,m.y,p.y,this.tension),Ya.initCatmullRom(d.z,g.z,m.z,p.z,this.tension));return n.set($a.calc(h),ja.calc(h),Ya.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new G().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fh(i,e,t,n,r){const s=(n-e)*.5,c=(r-t)*.5,l=i*i,h=i*l;return(2*t-2*n+s+c)*h+(-3*t+3*n-2*s-c)*l+s*i+t}function qE(i,e){const t=1-i;return t*t*e}function ZE(i,e){return 2*(1-i)*i*e}function KE(i,e){return i*i*e}function ns(i,e,t,n){return qE(i,e)+ZE(i,t)+KE(i,n)}function JE(i,e){const t=1-i;return t*t*t*e}function QE(i,e){const t=1-i;return 3*t*t*i*e}function eb(i,e){return 3*(1-i)*i*i*e}function tb(i,e){return i*i*i*e}function is(i,e,t,n,r){return JE(i,e)+QE(i,t)+eb(i,n)+tb(i,r)}class Yd extends Wn{constructor(e=new Re,t=new Re,n=new Re,r=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Re){const n=t,r=this.v0,s=this.v1,c=this.v2,l=this.v3;return n.set(is(e,r.x,s.x,c.x,l.x),is(e,r.y,s.y,c.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nb extends Wn{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){const n=t,r=this.v0,s=this.v1,c=this.v2,l=this.v3;return n.set(is(e,r.x,s.x,c.x,l.x),is(e,r.y,s.y,c.y,l.y),is(e,r.z,s.z,c.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qd extends Wn{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ib extends Wn{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zd extends Wn{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){const n=t,r=this.v0,s=this.v1,c=this.v2;return n.set(ns(e,r.x,s.x,c.x),ns(e,r.y,s.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rb extends Wn{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){const n=t,r=this.v0,s=this.v1,c=this.v2;return n.set(ns(e,r.x,s.x,c.x),ns(e,r.y,s.y,c.y),ns(e,r.z,s.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kd extends Wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const n=t,r=this.points,s=(r.length-1)*e,c=Math.floor(s),l=s-c,h=r[c===0?c:c-1],d=r[c],p=r[c>r.length-2?r.length-1:c+1],g=r[c>r.length-3?r.length-1:c+2];return n.set(Fh(l,h.x,d.x,p.x,g.x),Fh(l,h.y,d.y,p.y,g.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Re().fromArray(r))}return this}}var Zc=Object.freeze({__proto__:null,ArcCurve:jE,CatmullRomCurve3:YE,CubicBezierCurve:Yd,CubicBezierCurve3:nb,EllipseCurve:vl,LineCurve:qd,LineCurve3:ib,QuadraticBezierCurve:Zd,QuadraticBezierCurve3:rb,SplineCurve:Kd});class sb extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const c=r[s]-n,l=this.curves[s],h=l.getLength(),d=h===0?0:1-c/h;return l.getPointAt(d,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const c=s[r],l=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(l);for(let d=0;d<h.length;d++){const p=h[d];n&&n.equals(p)||(t.push(p),n=p)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Zc[r.type]().fromJSON(r))}return this}}class ko extends sb{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new qd(this.currentPoint.clone(),new Re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Zd(this.currentPoint.clone(),new Re(e,t),new Re(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,c){const l=new Yd(this.currentPoint.clone(),new Re(e,t),new Re(n,r),new Re(s,c));return this.curves.push(l),this.currentPoint.set(s,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Kd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+l,t+h,n,r,s,c),this}absarc(e,t,n,r,s,c){return this.absellipse(e,t,n,n,r,s,c),this}ellipse(e,t,n,r,s,c,l,h){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(e+d,t+p,n,r,s,c,l,h),this}absellipse(e,t,n,r,s,c,l,h){const d=new vl(e,t,n,r,s,c,l,h);if(this.curves.length>0){const g=d.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(d);const p=d.getPoint(1);return this.currentPoint.copy(p),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Jd extends $t{constructor(e=1,t=1,n=1,r=32,s=1,c=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:c,thetaStart:l,thetaLength:h};const d=this;r=Math.floor(r),s=Math.floor(s);const p=[],g=[],m=[],_=[];let x=0;const w=[],S=n/2;let v=0;L(),c===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(p),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(m,3)),this.setAttribute("uv",new Rt(_,2));function L(){const A=new G,H=new G;let D=0;const k=(t-e)/n;for(let V=0;V<=s;V++){const I=[],E=V/s,z=E*(t-e)+e;for(let ne=0;ne<=r;ne++){const K=ne/r,B=K*h+l,$=Math.sin(B),J=Math.cos(B);H.x=z*$,H.y=-E*n+S,H.z=z*J,g.push(H.x,H.y,H.z),A.set($,k,J).normalize(),m.push(A.x,A.y,A.z),_.push(K,1-E),I.push(x++)}w.push(I)}for(let V=0;V<r;V++)for(let I=0;I<s;I++){const E=w[I][V],z=w[I+1][V],ne=w[I+1][V+1],K=w[I][V+1];(e>0||I!==0)&&(p.push(E,z,K),D+=3),(t>0||I!==s-1)&&(p.push(z,ne,K),D+=3)}d.addGroup(v,D,0),v+=D}function T(A){const H=x,D=new Re,k=new G;let V=0;const I=A===!0?e:t,E=A===!0?1:-1;for(let ne=1;ne<=r;ne++)g.push(0,S*E,0),m.push(0,E,0),_.push(.5,.5),x++;const z=x;for(let ne=0;ne<=r;ne++){const B=ne/r*h+l,$=Math.cos(B),J=Math.sin(B);k.x=I*J,k.y=S*E,k.z=I*$,g.push(k.x,k.y,k.z),m.push(0,E,0),D.x=$*.5+.5,D.y=J*.5*E+.5,_.push(D.x,D.y),x++}for(let ne=0;ne<r;ne++){const K=H+ne,B=z+ne;A===!0?p.push(B,B+1,K):p.push(B+1,B,K),V+=3}d.addGroup(v,V,A===!0?1:2),v+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xl extends $t{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],c=[];l(r),d(n),p(),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(s.slice(),3)),this.setAttribute("uv",new Rt(c,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(L){const T=new G,A=new G,H=new G;for(let D=0;D<t.length;D+=3)_(t[D+0],T),_(t[D+1],A),_(t[D+2],H),h(T,A,H,L)}function h(L,T,A,H){const D=H+1,k=[];for(let V=0;V<=D;V++){k[V]=[];const I=L.clone().lerp(A,V/D),E=T.clone().lerp(A,V/D),z=D-V;for(let ne=0;ne<=z;ne++)ne===0&&V===D?k[V][ne]=I:k[V][ne]=I.clone().lerp(E,ne/z)}for(let V=0;V<D;V++)for(let I=0;I<2*(D-V)-1;I++){const E=Math.floor(I/2);I%2===0?(m(k[V][E+1]),m(k[V+1][E]),m(k[V][E])):(m(k[V][E+1]),m(k[V+1][E+1]),m(k[V+1][E]))}}function d(L){const T=new G;for(let A=0;A<s.length;A+=3)T.x=s[A+0],T.y=s[A+1],T.z=s[A+2],T.normalize().multiplyScalar(L),s[A+0]=T.x,s[A+1]=T.y,s[A+2]=T.z}function p(){const L=new G;for(let T=0;T<s.length;T+=3){L.x=s[T+0],L.y=s[T+1],L.z=s[T+2];const A=S(L)/2/Math.PI+.5,H=v(L)/Math.PI+.5;c.push(A,1-H)}x(),g()}function g(){for(let L=0;L<c.length;L+=6){const T=c[L+0],A=c[L+2],H=c[L+4],D=Math.max(T,A,H),k=Math.min(T,A,H);D>.9&&k<.1&&(T<.2&&(c[L+0]+=1),A<.2&&(c[L+2]+=1),H<.2&&(c[L+4]+=1))}}function m(L){s.push(L.x,L.y,L.z)}function _(L,T){const A=L*3;T.x=e[A+0],T.y=e[A+1],T.z=e[A+2]}function x(){const L=new G,T=new G,A=new G,H=new G,D=new Re,k=new Re,V=new Re;for(let I=0,E=0;I<s.length;I+=9,E+=6){L.set(s[I+0],s[I+1],s[I+2]),T.set(s[I+3],s[I+4],s[I+5]),A.set(s[I+6],s[I+7],s[I+8]),D.set(c[E+0],c[E+1]),k.set(c[E+2],c[E+3]),V.set(c[E+4],c[E+5]),H.copy(L).add(T).add(A).divideScalar(3);const z=S(H);w(D,E+0,L,z),w(k,E+2,T,z),w(V,E+4,A,z)}}function w(L,T,A,H){H<0&&L.x===1&&(c[T]=L.x-1),A.x===0&&A.z===0&&(c[T]=H/2/Math.PI+.5)}function S(L){return Math.atan2(L.z,-L.x)}function v(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.vertices,e.indices,e.radius,e.details)}}const fo=new G,po=new G,qa=new G,mo=new Mn;class Uh extends $t{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Mr*t),c=e.getIndex(),l=e.getAttribute("position"),h=c?c.count:l.count,d=[0,0,0],p=["a","b","c"],g=new Array(3),m={},_=[];for(let x=0;x<h;x+=3){c?(d[0]=c.getX(x),d[1]=c.getX(x+1),d[2]=c.getX(x+2)):(d[0]=x,d[1]=x+1,d[2]=x+2);const{a:w,b:S,c:v}=mo;if(w.fromBufferAttribute(l,d[0]),S.fromBufferAttribute(l,d[1]),v.fromBufferAttribute(l,d[2]),mo.getNormal(qa),g[0]=`${Math.round(w.x*r)},${Math.round(w.y*r)},${Math.round(w.z*r)}`,g[1]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,g[2]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let L=0;L<3;L++){const T=(L+1)%3,A=g[L],H=g[T],D=mo[p[L]],k=mo[p[T]],V=`${A}_${H}`,I=`${H}_${A}`;I in m&&m[I]?(qa.dot(m[I].normal)<=s&&(_.push(D.x,D.y,D.z),_.push(k.x,k.y,k.z)),m[I]=null):V in m||(m[V]={index0:d[L],index1:d[T],normal:qa.clone()})}}for(const x in m)if(m[x]){const{index0:w,index1:S}=m[x];fo.fromBufferAttribute(l,w),po.fromBufferAttribute(l,S),_.push(fo.x,fo.y,fo.z),_.push(po.x,po.y,po.z)}this.setAttribute("position",new Rt(_,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Po extends ko{constructor(e){super(e),this.uuid=wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new ko().fromJSON(r))}return this}}const ob={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Qd(i,0,r,t,!0);const c=[];if(!s||s.next===s.prev)return c;let l,h,d,p,g,m,_;if(n&&(s=hb(i,e,s,t)),i.length>80*t){l=d=i[0],h=p=i[1];for(let x=t;x<r;x+=t)g=i[x],m=i[x+1],g<l&&(l=g),m<h&&(h=m),g>d&&(d=g),m>p&&(p=m);_=Math.max(d-l,p-h),_=_!==0?32767/_:0}return cs(s,c,t,l,h,_,0),c}};function Qd(i,e,t,n,r){let s,c;if(r===Mb(i,e,t,n)>0)for(s=e;s<t;s+=n)c=Oh(s,i[s],i[s+1],c);else for(s=t-n;s>=e;s-=n)c=Oh(s,i[s],i[s+1],c);return c&&jo(c,c.next)&&(us(c),c=c.next),c}function ji(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(jo(t,t.next)||Ft(t.prev,t,t.next)===0)){if(us(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function cs(i,e,t,n,r,s,c){if(!i)return;!c&&s&&gb(i,n,r,s);let l=i,h,d;for(;i.prev!==i.next;){if(h=i.prev,d=i.next,s?cb(i,n,r,s):ab(i)){e.push(h.i/t|0),e.push(i.i/t|0),e.push(d.i/t|0),us(i),i=d.next,l=d.next;continue}if(i=d,i===l){c?c===1?(i=lb(ji(i),e,t),cs(i,e,t,n,r,s,2)):c===2&&ub(i,e,t,n,r,s):cs(ji(i),e,t,n,r,s,1);break}}}function ab(i){const e=i.prev,t=i,n=i.next;if(Ft(e,t,n)>=0)return!1;const r=e.x,s=t.x,c=n.x,l=e.y,h=t.y,d=n.y,p=r<s?r<c?r:c:s<c?s:c,g=l<h?l<d?l:d:h<d?h:d,m=r>s?r>c?r:c:s>c?s:c,_=l>h?l>d?l:d:h>d?h:d;let x=n.next;for(;x!==e;){if(x.x>=p&&x.x<=m&&x.y>=g&&x.y<=_&&vr(r,l,s,h,c,d,x.x,x.y)&&Ft(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function cb(i,e,t,n){const r=i.prev,s=i,c=i.next;if(Ft(r,s,c)>=0)return!1;const l=r.x,h=s.x,d=c.x,p=r.y,g=s.y,m=c.y,_=l<h?l<d?l:d:h<d?h:d,x=p<g?p<m?p:m:g<m?g:m,w=l>h?l>d?l:d:h>d?h:d,S=p>g?p>m?p:m:g>m?g:m,v=Kc(_,x,e,t,n),L=Kc(w,S,e,t,n);let T=i.prevZ,A=i.nextZ;for(;T&&T.z>=v&&A&&A.z<=L;){if(T.x>=_&&T.x<=w&&T.y>=x&&T.y<=S&&T!==r&&T!==c&&vr(l,p,h,g,d,m,T.x,T.y)&&Ft(T.prev,T,T.next)>=0||(T=T.prevZ,A.x>=_&&A.x<=w&&A.y>=x&&A.y<=S&&A!==r&&A!==c&&vr(l,p,h,g,d,m,A.x,A.y)&&Ft(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;T&&T.z>=v;){if(T.x>=_&&T.x<=w&&T.y>=x&&T.y<=S&&T!==r&&T!==c&&vr(l,p,h,g,d,m,T.x,T.y)&&Ft(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;A&&A.z<=L;){if(A.x>=_&&A.x<=w&&A.y>=x&&A.y<=S&&A!==r&&A!==c&&vr(l,p,h,g,d,m,A.x,A.y)&&Ft(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function lb(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!jo(r,s)&&ef(r,n,n.next,s)&&ls(r,s)&&ls(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),us(n),us(n.next),n=i=s),n=n.next}while(n!==i);return ji(n)}function ub(i,e,t,n,r,s){let c=i;do{let l=c.next.next;for(;l!==c.prev;){if(c.i!==l.i&&yb(c,l)){let h=tf(c,l);c=ji(c,c.next),h=ji(h,h.next),cs(c,e,t,n,r,s,0),cs(h,e,t,n,r,s,0);return}l=l.next}c=c.next}while(c!==i)}function hb(i,e,t,n){const r=[];let s,c,l,h,d;for(s=0,c=e.length;s<c;s++)l=e[s]*n,h=s<c-1?e[s+1]*n:i.length,d=Qd(i,l,h,n,!1),d===d.next&&(d.steiner=!0),r.push(vb(d));for(r.sort(db),s=0;s<r.length;s++)t=fb(r[s],t);return t}function db(i,e){return i.x-e.x}function fb(i,e){const t=pb(i,e);if(!t)return e;const n=tf(t,i);return ji(n,n.next),ji(t,t.next)}function pb(i,e){let t=e,n=-1/0,r;const s=i.x,c=i.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const m=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=s&&m>n&&(n=m,r=t.x<t.next.x?t:t.next,m===s))return r}t=t.next}while(t!==e);if(!r)return null;const l=r,h=r.x,d=r.y;let p=1/0,g;t=r;do s>=t.x&&t.x>=h&&s!==t.x&&vr(c<d?s:n,c,h,d,c<d?n:s,c,t.x,t.y)&&(g=Math.abs(c-t.y)/(s-t.x),ls(t,i)&&(g<p||g===p&&(t.x>r.x||t.x===r.x&&mb(r,t)))&&(r=t,p=g)),t=t.next;while(t!==l);return r}function mb(i,e){return Ft(i.prev,i,e.prev)<0&&Ft(e.next,i,i.next)<0}function gb(i,e,t,n){let r=i;do r.z===0&&(r.z=Kc(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,_b(r)}function _b(i){let e,t,n,r,s,c,l,h,d=1;do{for(t=i,i=null,s=null,c=0;t;){for(c++,n=t,l=0,e=0;e<d&&(l++,n=n.nextZ,!!n);e++);for(h=d;l>0||h>0&&n;)l!==0&&(h===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,l--):(r=n,n=n.nextZ,h--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,d*=2}while(c>1);return i}function Kc(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function vb(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function vr(i,e,t,n,r,s,c,l){return(r-c)*(e-l)>=(i-c)*(s-l)&&(i-c)*(n-l)>=(t-c)*(e-l)&&(t-c)*(s-l)>=(r-c)*(n-l)}function yb(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!xb(i,e)&&(ls(i,e)&&ls(e,i)&&Sb(i,e)&&(Ft(i.prev,i,e.prev)||Ft(i,e.prev,e))||jo(i,e)&&Ft(i.prev,i,i.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function jo(i,e){return i.x===e.x&&i.y===e.y}function ef(i,e,t,n){const r=_o(Ft(i,e,t)),s=_o(Ft(i,e,n)),c=_o(Ft(t,n,i)),l=_o(Ft(t,n,e));return!!(r!==s&&c!==l||r===0&&go(i,t,e)||s===0&&go(i,n,e)||c===0&&go(t,i,n)||l===0&&go(t,e,n))}function go(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _o(i){return i>0?1:i<0?-1:0}function xb(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ef(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ls(i,e){return Ft(i.prev,i,i.next)<0?Ft(i,e,i.next)>=0&&Ft(i,i.prev,e)>=0:Ft(i,e,i.prev)<0||Ft(i,i.next,e)<0}function Sb(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function tf(i,e){const t=new Jc(i.i,i.x,i.y),n=new Jc(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Oh(i,e,t,n){const r=new Jc(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function us(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Jc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mb(i,e,t,n){let r=0;for(let s=e,c=t-n;s<t;s+=n)r+=(i[c]-i[s])*(i[s+1]+i[c+1]),c=s;return r}class rs{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return rs.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];kh(e),Bh(n,e);let c=e.length;t.forEach(kh);for(let h=0;h<t.length;h++)r.push(c),c+=t[h].length,Bh(n,t[h]);const l=ob.triangulate(n,r);for(let h=0;h<l.length;h+=3)s.push(l.slice(h,h+3));return s}}function kh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Sl extends $t{constructor(e=new Po([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];c(d)}this.setAttribute("position",new Rt(r,3)),this.setAttribute("uv",new Rt(s,2)),this.computeVertexNormals();function c(l){const h=[],d=t.curveSegments!==void 0?t.curveSegments:12,p=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,_=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:_-.1,w=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,L=t.UVGenerator!==void 0?t.UVGenerator:Eb;let T,A=!1,H,D,k,V;v&&(T=v.getSpacedPoints(p),A=!0,m=!1,H=v.computeFrenetFrames(p,!1),D=new G,k=new G,V=new G),m||(S=0,_=0,x=0,w=0);const I=l.extractPoints(d);let E=I.shape;const z=I.holes;if(!rs.isClockWise(E)){E=E.reverse();for(let fe=0,we=z.length;fe<we;fe++){const F=z[fe];rs.isClockWise(F)&&(z[fe]=F.reverse())}}const K=rs.triangulateShape(E,z),B=E;for(let fe=0,we=z.length;fe<we;fe++){const F=z[fe];E=E.concat(F)}function $(fe,we,F){return we||console.error("THREE.ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(we,F)}const J=E.length,te=K.length;function j(fe,we,F){let be,xe,Be;const Pe=fe.x-we.x,Ke=fe.y-we.y,ke=F.x-fe.x,U=F.y-fe.y,P=Pe*Pe+Ke*Ke,ie=Pe*U-Ke*ke;if(Math.abs(ie)>Number.EPSILON){const he=Math.sqrt(P),de=Math.sqrt(ke*ke+U*U),ce=we.x-Ke/he,Ge=we.y+Pe/he,Ie=F.x-U/de,He=F.y+ke/de,ft=((Ie-ce)*U-(He-Ge)*ke)/(Pe*U-Ke*ke);be=ce+Pe*ft-fe.x,xe=Ge+Ke*ft-fe.y;const Ce=be*be+xe*xe;if(Ce<=2)return new Re(be,xe);Be=Math.sqrt(Ce/2)}else{let he=!1;Pe>Number.EPSILON?ke>Number.EPSILON&&(he=!0):Pe<-Number.EPSILON?ke<-Number.EPSILON&&(he=!0):Math.sign(Ke)===Math.sign(U)&&(he=!0),he?(be=-Ke,xe=Pe,Be=Math.sqrt(P)):(be=Pe,xe=Ke,Be=Math.sqrt(P/2))}return new Re(be/Be,xe/Be)}const ve=[];for(let fe=0,we=B.length,F=we-1,be=fe+1;fe<we;fe++,F++,be++)F===we&&(F=0),be===we&&(be=0),ve[fe]=j(B[fe],B[F],B[be]);const De=[];let Fe,Ze=ve.concat();for(let fe=0,we=z.length;fe<we;fe++){const F=z[fe];Fe=[];for(let be=0,xe=F.length,Be=xe-1,Pe=be+1;be<xe;be++,Be++,Pe++)Be===xe&&(Be=0),Pe===xe&&(Pe=0),Fe[be]=j(F[be],F[Be],F[Pe]);De.push(Fe),Ze=Ze.concat(Fe)}for(let fe=0;fe<S;fe++){const we=fe/S,F=_*Math.cos(we*Math.PI/2),be=x*Math.sin(we*Math.PI/2)+w;for(let xe=0,Be=B.length;xe<Be;xe++){const Pe=$(B[xe],ve[xe],be);ye(Pe.x,Pe.y,-F)}for(let xe=0,Be=z.length;xe<Be;xe++){const Pe=z[xe];Fe=De[xe];for(let Ke=0,ke=Pe.length;Ke<ke;Ke++){const U=$(Pe[Ke],Fe[Ke],be);ye(U.x,U.y,-F)}}}const it=x+w;for(let fe=0;fe<J;fe++){const we=m?$(E[fe],Ze[fe],it):E[fe];A?(k.copy(H.normals[0]).multiplyScalar(we.x),D.copy(H.binormals[0]).multiplyScalar(we.y),V.copy(T[0]).add(k).add(D),ye(V.x,V.y,V.z)):ye(we.x,we.y,0)}for(let fe=1;fe<=p;fe++)for(let we=0;we<J;we++){const F=m?$(E[we],Ze[we],it):E[we];A?(k.copy(H.normals[fe]).multiplyScalar(F.x),D.copy(H.binormals[fe]).multiplyScalar(F.y),V.copy(T[fe]).add(k).add(D),ye(V.x,V.y,V.z)):ye(F.x,F.y,g/p*fe)}for(let fe=S-1;fe>=0;fe--){const we=fe/S,F=_*Math.cos(we*Math.PI/2),be=x*Math.sin(we*Math.PI/2)+w;for(let xe=0,Be=B.length;xe<Be;xe++){const Pe=$(B[xe],ve[xe],be);ye(Pe.x,Pe.y,g+F)}for(let xe=0,Be=z.length;xe<Be;xe++){const Pe=z[xe];Fe=De[xe];for(let Ke=0,ke=Pe.length;Ke<ke;Ke++){const U=$(Pe[Ke],Fe[Ke],be);A?ye(U.x,U.y+T[p-1].y,T[p-1].x+F):ye(U.x,U.y,g+F)}}}oe(),_e();function oe(){const fe=r.length/3;if(m){let we=0,F=J*we;for(let be=0;be<te;be++){const xe=K[be];pe(xe[2]+F,xe[1]+F,xe[0]+F)}we=p+S*2,F=J*we;for(let be=0;be<te;be++){const xe=K[be];pe(xe[0]+F,xe[1]+F,xe[2]+F)}}else{for(let we=0;we<te;we++){const F=K[we];pe(F[2],F[1],F[0])}for(let we=0;we<te;we++){const F=K[we];pe(F[0]+J*p,F[1]+J*p,F[2]+J*p)}}n.addGroup(fe,r.length/3-fe,0)}function _e(){const fe=r.length/3;let we=0;Le(B,we),we+=B.length;for(let F=0,be=z.length;F<be;F++){const xe=z[F];Le(xe,we),we+=xe.length}n.addGroup(fe,r.length/3-fe,1)}function Le(fe,we){let F=fe.length;for(;--F>=0;){const be=F;let xe=F-1;xe<0&&(xe=fe.length-1);for(let Be=0,Pe=p+S*2;Be<Pe;Be++){const Ke=J*Be,ke=J*(Be+1),U=we+be+Ke,P=we+xe+Ke,ie=we+xe+ke,he=we+be+ke;Ae(U,P,ie,he)}}}function ye(fe,we,F){h.push(fe),h.push(we),h.push(F)}function pe(fe,we,F){Je(fe),Je(we),Je(F);const be=r.length/3,xe=L.generateTopUV(n,r,be-3,be-2,be-1);rt(xe[0]),rt(xe[1]),rt(xe[2])}function Ae(fe,we,F,be){Je(fe),Je(we),Je(be),Je(we),Je(F),Je(be);const xe=r.length/3,Be=L.generateSideWallUV(n,r,xe-6,xe-3,xe-2,xe-1);rt(Be[0]),rt(Be[1]),rt(Be[3]),rt(Be[1]),rt(Be[2]),rt(Be[3])}function Je(fe){r.push(h[fe*3+0]),r.push(h[fe*3+1]),r.push(h[fe*3+2])}function rt(fe){s.push(fe.x),s.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return bb(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,c=e.shapes.length;s<c;s++){const l=t[e.shapes[s]];n.push(l)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Zc[r.type]().fromJSON(r)),new Sl(n,e.options)}}const Eb={generateTopUV:function(i,e,t,n,r){const s=e[t*3],c=e[t*3+1],l=e[n*3],h=e[n*3+1],d=e[r*3],p=e[r*3+1];return[new Re(s,c),new Re(l,h),new Re(d,p)]},generateSideWallUV:function(i,e,t,n,r,s){const c=e[t*3],l=e[t*3+1],h=e[t*3+2],d=e[n*3],p=e[n*3+1],g=e[n*3+2],m=e[r*3],_=e[r*3+1],x=e[r*3+2],w=e[s*3],S=e[s*3+1],v=e[s*3+2];return Math.abs(l-p)<Math.abs(c-d)?[new Re(c,1-h),new Re(d,1-g),new Re(m,1-x),new Re(w,1-v)]:[new Re(l,1-h),new Re(p,1-g),new Re(_,1-x),new Re(S,1-v)]}};function bb(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class nf extends xl{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new nf(e.radius,e.detail)}}class rf extends $t{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,c=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:c,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(c+l,Math.PI);let d=0;const p=[],g=new G,m=new G,_=[],x=[],w=[],S=[];for(let v=0;v<=n;v++){const L=[],T=v/n;let A=0;v===0&&c===0?A=.5/t:v===n&&h===Math.PI&&(A=-.5/t);for(let H=0;H<=t;H++){const D=H/t;g.x=-e*Math.cos(r+D*s)*Math.sin(c+T*l),g.y=e*Math.cos(c+T*l),g.z=e*Math.sin(r+D*s)*Math.sin(c+T*l),x.push(g.x,g.y,g.z),m.copy(g).normalize(),w.push(m.x,m.y,m.z),S.push(D+A,1-T),L.push(d++)}p.push(L)}for(let v=0;v<n;v++)for(let L=0;L<t;L++){const T=p[v][L+1],A=p[v][L],H=p[v+1][L],D=p[v+1][L+1];(v!==0||c>0)&&_.push(T,A,D),(v!==n-1||h<Math.PI)&&_.push(A,H,D)}this.setIndex(_),this.setAttribute("position",new Rt(x,3)),this.setAttribute("normal",new Rt(w,3)),this.setAttribute("uv",new Rt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sf extends $t{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const c=[],l=[],h=[],d=[],p=new G,g=new G,m=new G;for(let _=0;_<=n;_++)for(let x=0;x<=r;x++){const w=x/r*s,S=_/n*Math.PI*2;g.x=(e+t*Math.cos(S))*Math.cos(w),g.y=(e+t*Math.cos(S))*Math.sin(w),g.z=t*Math.sin(S),l.push(g.x,g.y,g.z),p.x=e*Math.cos(w),p.y=e*Math.sin(w),m.subVectors(g,p).normalize(),h.push(m.x,m.y,m.z),d.push(x/r),d.push(_/n)}for(let _=1;_<=n;_++)for(let x=1;x<=r;x++){const w=(r+1)*_+x-1,S=(r+1)*(_-1)+x-1,v=(r+1)*(_-1)+x,L=(r+1)*_+x;c.push(w,S,L),c.push(S,v,L)}this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Qc extends qi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wd,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qw extends Qc{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function vo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Tb(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function zh(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,c=0;c!==n;++s){const l=t[s]*e;for(let h=0;h!==e;++h)r[c++]=i[l+h]}return r}function of(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let c=s[n];if(c!==void 0)if(Array.isArray(c))do c=s[n],c!==void 0&&(e.push(s.time),t.push.apply(t,c)),s=i[r++];while(s!==void 0);else if(c.toArray!==void 0)do c=s[n],c!==void 0&&(e.push(s.time),c.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do c=s[n],c!==void 0&&(e.push(s.time),t.push(c)),s=i[r++];while(s!==void 0)}class Yo{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let c;n:{i:if(!(e<r)){for(let l=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(s=r,r=t[++n],e<r)break t}c=t.length;break n}if(!(e>=s)){const l=t[1];e<l&&(n=2,s=l);for(let h=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(r=s,s=t[--n-1],e>=s)break t}c=n,n=0;break n}break e}for(;n<c;){const l=n+c>>>1;e<t[l]?c=l:n=l+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let c=0;c!==r;++c)t[c]=n[s+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ab extends Yo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eu,endingEnd:Eu}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,c=e+1,l=r[s],h=r[c];if(l===void 0)switch(this.getSettings_().endingStart){case bu:s=e,l=2*t-n;break;case wu:s=r.length-2,l=t+r[s]-r[s+1];break;default:s=e,l=n}if(h===void 0)switch(this.getSettings_().endingEnd){case bu:c=e,h=2*n-t;break;case wu:c=1,h=n+r[1]-r[0];break;default:c=e-1,h=t}const d=(n-t)*.5,p=this.valueSize;this._weightPrev=d/(t-l),this._weightNext=d/(h-n),this._offsetPrev=s*p,this._offsetNext=c*p}interpolate_(e,t,n,r){const s=this.resultBuffer,c=this.sampleValues,l=this.valueSize,h=e*l,d=h-l,p=this._offsetPrev,g=this._offsetNext,m=this._weightPrev,_=this._weightNext,x=(n-t)/(r-t),w=x*x,S=w*x,v=-m*S+2*m*w-m*x,L=(1+m)*S+(-1.5-2*m)*w+(-.5+m)*x+1,T=(-1-_)*S+(1.5+_)*w+.5*x,A=_*S-_*w;for(let H=0;H!==l;++H)s[H]=v*c[p+H]+L*c[d+H]+T*c[h+H]+A*c[g+H];return s}}class Cb extends Yo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,c=this.sampleValues,l=this.valueSize,h=e*l,d=h-l,p=(n-t)/(r-t),g=1-p;for(let m=0;m!==l;++m)s[m]=c[d+m]*g+c[h+m]*p;return s}}class Rb extends Yo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vo(t,this.TimeBufferType),this.values=vo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vo(e.times,Array),values:vo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ab(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lo:t=this.InterpolantFactoryMethodDiscrete;break;case $c:t=this.InterpolantFactoryMethodLinear;break;case ma:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lo;case this.InterpolantFactoryMethodLinear:return $c;case this.InterpolantFactoryMethodSmooth:return ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,c=r-1;for(;s!==r&&n[s]<e;)++s;for(;c!==-1&&n[c]>t;)--c;if(++c,s!==0||c!==r){s>=c&&(c=Math.max(c,1),s=c-1);const l=this.getValueSize();this.times=n.slice(s,c),this.values=this.values.slice(s*l,c*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let l=0;l!==s;l++){const h=n[l];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,h),e=!1;break}if(c!==null&&c>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,h,c),e=!1;break}c=h}if(r!==void 0&&wb(r))for(let l=0,h=r.length;l!==h;++l){const d=r[l];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ma,s=e.length-1;let c=1;for(let l=1;l<s;++l){let h=!1;const d=e[l],p=e[l+1];if(d!==p&&(l!==1||d!==e[0]))if(r)h=!0;else{const g=l*n,m=g-n,_=g+n;for(let x=0;x!==n;++x){const w=t[g+x];if(w!==t[m+x]||w!==t[_+x]){h=!0;break}}}if(h){if(l!==c){e[c]=e[l];const g=l*n,m=c*n;for(let _=0;_!==n;++_)t[m+_]=t[g+_]}++c}}if(s>0){e[c]=e[s];for(let l=s*n,h=c*n,d=0;d!==n;++d)t[h+d]=t[l+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=$c;class kr extends Xn{constructor(e,t,n){super(e,t,n)}}kr.prototype.ValueTypeName="bool";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=Lo;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class af extends Xn{}af.prototype.ValueTypeName="color";class Bo extends Xn{}Bo.prototype.ValueTypeName="number";class Pb extends Yo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,c=this.sampleValues,l=this.valueSize,h=(n-t)/(r-t);let d=e*l;for(let p=d+l;d!==p;d+=4)hn.slerpFlat(s,0,c,d-l,c,d,h);return s}}class qo extends Xn{InterpolantFactoryMethodLinear(e){return new Pb(this.times,this.values,this.getValueSize(),e)}}qo.prototype.ValueTypeName="quaternion";qo.prototype.InterpolantFactoryMethodSmooth=void 0;class Br extends Xn{constructor(e,t,n){super(e,t,n)}}Br.prototype.ValueTypeName="string";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=Lo;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class zo extends Xn{}zo.prototype.ValueTypeName="vector";class eT{constructor(e="",t=-1,n=[],r=n0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=wn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let c=0,l=n.length;c!==l;++c)t.push(Lb(n[c]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,c=n.length;s!==c;++s)t.push(Xn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,c=[];for(let l=0;l<s;l++){let h=[],d=[];h.push((l+s-1)%s,l,(l+1)%s),d.push(0,1,0);const p=Tb(h);h=zh(h,1,p),d=zh(d,1,p),!r&&h[0]===0&&(h.push(s),d.push(d[0])),c.push(new Bo(".morphTargetInfluences["+t[l].name+"]",h,d).scale(1/n))}return new this(e,-1,c)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let l=0,h=e.length;l<h;l++){const d=e[l],p=d.name.match(s);if(p&&p.length>1){const g=p[1];let m=r[g];m||(r[g]=m=[]),m.push(d)}}const c=[];for(const l in r)c.push(this.CreateFromMorphTargetSequence(l,r[l],t,n));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(g,m,_,x,w){if(_.length!==0){const S=[],v=[];of(_,S,v,x),S.length!==0&&w.push(new g(m,S,v))}},r=[],s=e.name||"default",c=e.fps||30,l=e.blendMode;let h=e.length||-1;const d=e.hierarchy||[];for(let g=0;g<d.length;g++){const m=d[g].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const _={};let x;for(x=0;x<m.length;x++)if(m[x].morphTargets)for(let w=0;w<m[x].morphTargets.length;w++)_[m[x].morphTargets[w]]=-1;for(const w in _){const S=[],v=[];for(let L=0;L!==m[x].morphTargets.length;++L){const T=m[x];S.push(T.time),v.push(T.morphTarget===w?1:0)}r.push(new Bo(".morphTargetInfluence["+w+"]",S,v))}h=_.length*c}else{const _=".bones["+t[g].name+"]";n(zo,_+".position",m,"pos",r),n(qo,_+".quaternion",m,"rot",r),n(zo,_+".scale",m,"scl",r)}}return r.length===0?null:new this(s,h,r,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Db(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bo;case"vector":case"vector2":case"vector3":case"vector4":return zo;case"color":return af;case"quaternion":return qo;case"bool":case"boolean":return kr;case"string":return Br}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Lb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Db(i.type);if(i.times===void 0){const t=[],n=[];of(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const _i={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ib{constructor(e,t,n){const r=this;let s=!1,c=0,l=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){l++,s===!1&&r.onStart!==void 0&&r.onStart(p,c,l),s=!0},this.itemEnd=function(p){c++,r.onProgress!==void 0&&r.onProgress(p,c,l),c===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,g){return d.push(p,g),this},this.removeHandler=function(p){const g=d.indexOf(p);return g!==-1&&d.splice(g,2),this},this.getHandler=function(p){for(let g=0,m=d.length;g<m;g+=2){const _=d[g],x=d[g+1];if(_.global&&(_.lastIndex=0),_.test(p))return x}return null}}}const Nb=new Ib;class fs{constructor(e){this.manager=e!==void 0?e:Nb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qn={};class Fb extends Error{constructor(e,t){super(e),this.response=t}}class tT extends fs{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=_i.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Qn[e]!==void 0){Qn[e].push({onLoad:t,onProgress:n,onError:r});return}Qn[e]=[],Qn[e].push({onLoad:t,onProgress:n,onError:r});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,h=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=Qn[e],g=d.body.getReader(),m=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),_=m?parseInt(m):0,x=_!==0;let w=0;const S=new ReadableStream({start(v){L();function L(){g.read().then(({done:T,value:A})=>{if(T)v.close();else{w+=A.byteLength;const H=new ProgressEvent("progress",{lengthComputable:x,loaded:w,total:_});for(let D=0,k=p.length;D<k;D++){const V=p[D];V.onProgress&&V.onProgress(H)}v.enqueue(A),L()}},T=>{v.error(T)})}}});return new Response(S)}else throw new Fb(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,l));case"json":return d.json();default:if(l===void 0)return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(l),m=g&&g[1]?g[1].toLowerCase():void 0,_=new TextDecoder(m);return d.arrayBuffer().then(x=>_.decode(x))}}}).then(d=>{_i.add(e,d);const p=Qn[e];delete Qn[e];for(let g=0,m=p.length;g<m;g++){const _=p[g];_.onLoad&&_.onLoad(d)}}).catch(d=>{const p=Qn[e];if(p===void 0)throw this.manager.itemError(e),d;delete Qn[e];for(let g=0,m=p.length;g<m;g++){const _=p[g];_.onError&&_.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ub extends fs{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,c=_i.get(e);if(c!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(c),s.manager.itemEnd(e)},0),c;const l=os("img");function h(){p(),_i.add(e,this),t&&t(this),s.manager.itemEnd(e)}function d(g){p(),r&&r(g),s.manager.itemError(e),s.manager.itemEnd(e)}function p(){l.removeEventListener("load",h,!1),l.removeEventListener("error",d,!1)}return l.addEventListener("load",h,!1),l.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class nT extends fs{constructor(e){super(e)}load(e,t,n,r){const s=new tn,c=new Ub(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Zo extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class iT extends Zo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Za=new lt,Hh=new G,Vh=new G;class Ml{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hh),Vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vh),t.updateMatrixWorld(),Za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ob extends Ml{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Pr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rT extends Zo{constructor(e,t,n=0,r=Math.PI/3,s=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=r,this.penumbra=s,this.decay=c,this.map=null,this.shadow=new Ob}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Gh=new lt,Zr=new G,Ka=new G;class kb extends Ml{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zr),Ka.copy(n.position),Ka.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ka),n.updateMatrixWorld(),r.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh)}}class sT extends Zo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new kb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Bb extends Ml{constructor(){super(new Od(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oT extends Zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Bb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class aT{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class cT extends fs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,c=_i.get(e);if(c!==void 0){if(s.manager.itemStart(e),c.then){c.then(d=>{t&&t(d),s.manager.itemEnd(e)}).catch(d=>{r&&r(d)});return}return setTimeout(function(){t&&t(c),s.manager.itemEnd(e)},0),c}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const h=fetch(e,l).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(d){return _i.add(e,d),t&&t(d),s.manager.itemEnd(e),d}).catch(function(d){r&&r(d),_i.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});_i.add(e,h),s.manager.itemStart(e)}}class lT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wh(){return performance.now()}const El="\\[\\]\\.:\\/",zb=new RegExp("["+El+"]","g"),bl="[^"+El+"]",Hb="[^"+El.replace("\\.","")+"]",Vb=/((?:WC+[\/:])*)/.source.replace("WC",bl),Gb=/(WCOD+)?/.source.replace("WCOD",Hb),Wb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl),Xb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl),$b=new RegExp("^"+Vb+Gb+Wb+Xb+"$"),jb=["material","materials","bones","map"];class Yb{constructor(e,t,n){const r=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class At{constructor(e,t,n){this.path=t,this.parsedPath=n||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new At.Composite(e,t,n):new At(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zb,"")}static parseTrackName(e){const t=$b.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);jb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let c=0;c<s.length;c++){const l=s[c];if(l.name===t||l.uuid===t)return l;const h=n(l.children);if(h)return h}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=At.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===d){d=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const c=e[r];if(c===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=s}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=r;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=Yb;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Xh=new lt;class wl{constructor(e,t,n=0,r=1/0){this.ray=new Fr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xh),this}intersectObject(e,t=!0,n=[]){return el(e,this,n,t),n.sort($h),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)el(e[r],this,n,t);return n.sort($h),n}}function $h(i,e){return i.distance-e.distance}function el(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let c=0,l=s.length;c<l;c++)el(s[c],e,t,!0)}}class tl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uT extends Oo{constructor(e=10,t=10,n=4473924,r=8947848){n=new ct(n),r=new ct(r);const s=t/2,c=e/t,l=e/2,h=[],d=[];for(let m=0,_=0,x=-l;m<=t;m++,x+=c){h.push(-l,0,x,l,0,x),h.push(x,0,-l,x,0,l);const w=m===s?n:r;w.toArray(d,_),_+=3,w.toArray(d,_),_+=3,w.toArray(d,_),_+=3,w.toArray(d,_),_+=3}const p=new $t;p.setAttribute("position",new Rt(h,3)),p.setAttribute("color",new Rt(d,3));const g=new as({vertexColors:!0,toneMapped:!1});super(p,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class qb extends Oo{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new $t;r.setAttribute("position",new Rt(t,3)),r.setAttribute("color",new Rt(n,3));const s=new as({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new ct,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Zb extends Yi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);const jh={type:"change"},Tl={type:"start"},cf={type:"end"},yo=new Fr,Yh=new mi,Kb=Math.cos(70*R0.DEG2RAD),Vt=new G,un=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ja=1e-6;class hT extends Zb{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yr.ROTATE,MIDDLE:yr.DOLLY,RIGHT:yr.PAN},this.touches={ONE:gr.ROTATE,TWO:gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new hn,this._lastTargetPosition=new G,this._quat=new hn().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tl,this._sphericalDelta=new tl,this._scale=1,this._panOffset=new G,this._rotateStart=new Re,this._rotateEnd=new Re,this._rotateDelta=new Re,this._panStart=new Re,this._panEnd=new Re,this._panDelta=new Re,this._dollyStart=new Re,this._dollyEnd=new Re,this._dollyDelta=new Re,this._dollyDirection=new G,this._mouse=new Re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qb.bind(this),this._onPointerDown=Jb.bind(this),this._onPointerUp=ew.bind(this),this._onContextMenu=aw.bind(this),this._onMouseWheel=iw.bind(this),this._onKeyDown=rw.bind(this),this._onTouchStart=sw.bind(this),this._onTouchMove=ow.bind(this),this._onMouseDown=tw.bind(this),this._onMouseMove=nw.bind(this),this._interceptControlDown=cw.bind(this),this._interceptControlUp=lw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jh),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;Vt.copy(t).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=un:n>Math.PI&&(n-=un),r<-Math.PI?r+=un:r>Math.PI&&(r-=un),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=c!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const l=Vt.length();c=this._clampDistance(l*this._scale);const h=l-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),s=!!h}else if(this.object.isOrthographicCamera){const l=new G(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=h!==this.object.zoom;const d=new G(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(l),this.object.updateMatrixWorld(),c=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(yo.origin.copy(this.object.position),yo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yo.direction))<Kb?this.object.lookAt(this.target):(Yh.setFromNormalAndCoplanarPoint(this.object.up,this.target),yo.intersectPlane(Yh,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ja||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ja||this._lastTargetPosition.distanceToSquared(this.target)>Ja?(this.dispatchEvent(jh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Vt.setFromMatrixColumn(t,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,t){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(t,1):(Vt.setFromMatrixColumn(t,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Vt.copy(r).sub(this.target);let s=Vt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,c=n.width,l=n.height;this._mouse.x=r/c*2-1,this._mouse.y=-(s/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(c,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Jb(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Qb(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ew(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cf),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function tw(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case yr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ct.DOLLY;break;case yr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}break;case yr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Tl)}function nw(i){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function iw(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(i.preventDefault(),this.dispatchEvent(Tl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(cf))}function rw(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function sw(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ct.TOUCH_ROTATE;break;case gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ct.TOUCH_DOLLY_PAN;break;case gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Tl)}function ow(i){switch(this._trackPointer(i),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ct.NONE}}function aw(i){this.enabled!==!1&&i.preventDefault()}function cw(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lw(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const qh={BASE_URL:"/physical/"};function hs(i){const e=String(i||"").replace(/^\/+/,""),t=typeof import.meta<"u"&&qh?qh:null,n=(t==null?void 0:t.BASE_URL)||"/";return n==="/"||n===""?`/${e}`:`${n.endsWith("/")?n:`${n}/`}${e}`}const Zh=new hn,xo=new Tn(0,0,0,"XYZ");function dT(i){const{bodyId:e,model:t,data:n}=i,r=n.xpos,s=n.xquat,c=e*3,l=e*4,h=[r[c],r[c+1],r[c+2]],d=[s[l],s[l+1],s[l+2],s[l+3]];Zh.set(d[1],d[2],d[3],d[0]),xo.setFromQuaternion(Zh,"XYZ");const p={x:xo.x*180/Math.PI,y:xo.y*180/Math.PI,z:xo.z*180/Math.PI};let g=[0,0,0];try{const _=t.jnt("odc_free"),x=_.dofadr,w=typeof x=="number"?x:Number(t.jnt_dofadr[_.id]??(x==null?void 0:x[0])??0),S=n.qvel;Number.isFinite(w)&&(g=[S[w],S[w+1],S[w+2]])}catch{}const m={body:"odc",joint:"odc_free",frame:"lab-z-up",pos:h,quat:d,eulerDeg:p,vel:g,t:performance.now()};return typeof window<"u"&&(window.__odcPose=m),m}function fT(i=.06){const e=new qb(i);return e.name="bodyAxes",e.userData.bodyAxes=!0,e.userData.labViewOnly=!0,e.visible=!1,e.raycast=()=>{},e}const Qa=180/Math.PI,Kh=Math.PI/180,ec=new G,Jh=new tl,uw=new G(0,1,0),Qh=new hn,ed=new hn,So={top:{azimuthDeg:0,elevationDeg:89.2},bottom:{azimuthDeg:0,elevationDeg:-89.2},front:{azimuthDeg:0,elevationDeg:8},back:{azimuthDeg:180,elevationDeg:8},right:{azimuthDeg:-90,elevationDeg:8},left:{azimuthDeg:90,elevationDeg:8},home:{azimuthDeg:45,elevationDeg:32}};function xn(i,e=3){return(Number.isFinite(i)?i:0).toFixed(e)}function Vi(i,e){const t=e.getAzimuthalAngle(),n=e.getPolarAngle(),r=e.getDistance(),s=Math.PI/2-n;return{position:[i.position.x,i.position.y,i.position.z],target:[e.target.x,e.target.y,e.target.z],azimuthDeg:t*Qa,polarDeg:n*Qa,elevationDeg:s*Qa,distance:r}}function td(i,e,t,n={}){if(!t)return!1;const r=typeof e.minDistance=="number"&&e.minDistance>0?e.minDistance:.008,s=n.minDistance??r,c=new Gn().setFromObject(t);if(c.isEmpty())return!1;const l=c.getCenter(new G),h=c.getSize(new G),d=Math.max(h.x,h.y,h.z,.01),p=n.padding??(d<.12?1.25:d<.35?1.4:1.55),g=i.fov*Math.PI/180;let m=d*p/(2*Math.tan(g/2));m=Math.max(s,m);const _=Vi(i,e);return Gi(i,e,{azimuthDeg:_.azimuthDeg,elevationDeg:_.elevationDeg,distance:m,target:[l.x,l.y,l.z]}),!0}function Gi(i,e,t){const[n,r,s]=t.target;e.target.set(n,r,s);const c=t.azimuthDeg*Kh;let l=t.elevationDeg*Kh;l=Math.max(-Math.PI/2+.001,Math.min(Math.PI/2-.001,l));const h=Math.PI/2-l,d=typeof e.minDistance=="number"&&e.minDistance>0?e.minDistance:.008,p=typeof e.maxDistance=="number"&&e.maxDistance>d?e.maxDistance:20,g=Number(t.distance),m=Math.min(p,Math.max(d,Number.isFinite(g)&&g>0?g:d));Jh.set(m,h,c),ec.setFromSpherical(Jh),Qh.setFromUnitVectors(i.up,uw),ed.copy(Qh).invert(),ec.applyQuaternion(ed),i.position.copy(e.target).add(ec),i.lookAt(e.target),e.update()}function pT(i,e,t){const n=Array.isArray(t)?t[0]:t.x,r=Array.isArray(t)?t[1]:t.y,s=Array.isArray(t)?t[2]:t.z;if(![n,r,s].every(d=>typeof d=="number"&&Number.isFinite(d)))return!1;const c=n-e.target.x,l=r-e.target.y,h=s-e.target.z;return e.target.set(n,r,s),i.position.x+=c,i.position.y+=l,i.position.z+=h,e.update(),!0}function hw(i,e){const t=typeof e.minDistance=="number"&&e.minDistance>0?e.minDistance:.008,n=typeof e.maxDistance=="number"&&e.maxDistance>t?e.maxDistance:20;let r=e.getDistance();if(!Number.isFinite(r)||r<t||r>n){const s=Vi(i,e);return Gi(i,e,{azimuthDeg:s.azimuthDeg,elevationDeg:s.elevationDeg,distance:Math.min(n,Math.max(t,Number.isFinite(r)?r:t)),target:s.target}),!0}return!1}const tc=new Re,nc=new G,nd=new wl;function mT(i){const{camera:e,canvas:t,scene:n,controls:r,skipObject:s,onChanged:c}=i;"zoomToCursor"in r&&(r.zoomToCursor=!0);function l(h){var x;if(h.deltaY>=0)return;const d=r.minDistance>0?r.minDistance:.008;if(r.getDistance()>d*1.2)return;const p=t.getBoundingClientRect();if(p.width<1||p.height<1)return;tc.x=(h.clientX-p.left)/p.width*2-1,tc.y=-((h.clientY-p.top)/p.height)*2+1,nd.setFromCamera(tc,e);const g=nd.intersectObjects(n.children,!0);let m=null;for(const w of g){if(s!=null&&s(w.object)||!((x=w.object)!=null&&x.isMesh))continue;const S=typeof w.object.name=="string"?w.object.name:"";if(!(S==="floor"||S==="ground"||S==="labFloor")){m=w;break}}if(h.preventDefault(),h.stopImmediatePropagation(),m){const w=Vi(e,r),S=Math.max(d,Math.min(.18,Math.max(.025,m.distance*.4)));Gi(e,r,{azimuthDeg:w.azimuthDeg,elevationDeg:w.elevationDeg,distance:S,target:[m.point.x,m.point.y,m.point.z]}),c==null||c();return}e.getWorldDirection(nc);const _=.06;r.target.addScaledVector(nc,_),e.position.addScaledVector(nc,_),r.update(),c==null||c()}return t.addEventListener("wheel",l,{capture:!0,passive:!1}),{dispose(){t.removeEventListener("wheel",l,!0)}}}function gT(i){var E,z,ne,K;const{camera:e,controls:t,view:n,parent:r=document.getElementById("app"),toggleButton:s=document.getElementById("btn-camera"),getFocusObject:c,onPoseEdited:l}=i;let h=document.getElementById("camera-hud");h||(h=document.createElement("aside"),h.id="camera-hud",(r||document.body).appendChild(h)),h.setAttribute("aria-label","Camera ViewCube"),h.classList.add("viewcube-dock");try{const B=localStorage.getItem("physical-lab-panel-pos-v1");if(B){const $=JSON.parse(B);$&&typeof $=="object"&&$["camera-hud"]&&(delete $["camera-hud"],localStorage.setItem("physical-lab-panel-pos-v1",JSON.stringify($)))}}catch{}h.classList.remove("is-panel-dragged","is-panel-dragging"),h.style.left="",h.style.top="",h.style.right="",h.style.bottom="",h.style.transform="",h.innerHTML=`
      <div class="viewcube-wrap">
        <div class="viewcube-stage" data-cube-stage title="Drag to orbit · click a face to snap">
          <button type="button" class="vc-home" data-act="home" title="Home view">⌂</button>
          <div class="viewcube" data-cube>
            <button type="button" class="vc-face vc-front" data-view="front" title="Front">FRONT</button>
            <button type="button" class="vc-face vc-back" data-view="back" title="Back">BACK</button>
            <button type="button" class="vc-face vc-right" data-view="right" title="Right">RIGHT</button>
            <button type="button" class="vc-face vc-left" data-view="left" title="Left">LEFT</button>
            <button type="button" class="vc-face vc-top" data-view="top" title="Top">TOP</button>
            <button type="button" class="vc-face vc-bottom" data-view="bottom" title="Bottom">BOT</button>
          </div>
        </div>
        <div class="viewcube-rotate" role="group" aria-label="Orbit rotate">
          <button type="button" data-rotate="-90" title="Rotate −90°">⟲90</button>
          <button type="button" data-rotate="-45" title="Rotate −45°">⟲45</button>
          <button type="button" data-rotate="45" title="Rotate +45°">45⟳</button>
          <button type="button" data-rotate="90" title="Rotate +90°">90⟳</button>
        </div>
        <button type="button" class="vc-focus" data-act="focus" title="Focus selected">Focus</button>
      </div>
      <details class="cam-advanced">
        <summary>Advanced</summary>
        <div class="cam-grid">
          <label>az ° <input data-k="azimuthDeg" type="number" step="1" /></label>
          <label>el ° <input data-k="elevationDeg" type="number" step="1" /></label>
          <label>dist m <input data-k="distance" type="number" step="0.005" min="0.005" /></label>
          <label>tgt x <input data-k="tx" type="number" step="0.01" /></label>
          <label>tgt y <input data-k="ty" type="number" step="0.01" /></label>
          <label>tgt z <input data-k="tz" type="number" step="0.01" /></label>
        </div>
        <div class="cam-actions">
          <button type="button" data-act="apply">Apply</button>
          <button type="button" data-act="copy">Copy JSON</button>
        </div>
        <dl class="cam-live">
          <div><dt>pos</dt><dd data-live="pos">—</dd></div>
          <div><dt>az / el / dist</dt><dd data-live="aed">—</dd></div>
        </dl>
        <p class="pose-hint"><code>window.__cameraPose</code></p>
      </details>
    `;const d=h.querySelector("[data-cube]"),p=h.querySelector("[data-cube-stage]"),g={azimuthDeg:h.querySelector('input[data-k="azimuthDeg"]'),elevationDeg:h.querySelector('input[data-k="elevationDeg"]'),distance:h.querySelector('input[data-k="distance"]'),tx:h.querySelector('input[data-k="tx"]'),ty:h.querySelector('input[data-k="ty"]'),tz:h.querySelector('input[data-k="tz"]')},m=h.querySelector('[data-live="pos"]'),_=h.querySelector('[data-live="aed"]');let x=null;h.addEventListener("focusin",B=>{B.target instanceof HTMLInputElement&&(x=B.target)}),h.addEventListener("focusout",()=>{x=null});function w(B){if(!d)return;const $=Number.isFinite(B.elevationDeg)?B.elevationDeg:0,J=Number.isFinite(B.azimuthDeg)?B.azimuthDeg:0;d.style.transform=`rotateX(${$-18}deg) rotateZ(${-J}deg)`}function S(){const B=Vi(e,t),$={view:n,frame:"lab-z-up",...B,t:performance.now()};return typeof window<"u"&&(window.__cameraPose=$),m&&(m.textContent=`${xn(B.position[0])}  ${xn(B.position[1])}  ${xn(B.position[2])}`),_&&(_.textContent=`${xn(B.azimuthDeg,1)}°  ${xn(B.elevationDeg,1)}°  ${xn(B.distance,3)} m`),w(B),x||(g.azimuthDeg&&(g.azimuthDeg.value=xn(B.azimuthDeg,1)),g.elevationDeg&&(g.elevationDeg.value=xn(B.elevationDeg,1)),g.distance&&(g.distance.value=xn(B.distance,3)),g.tx&&(g.tx.value=xn(B.target[0],3)),g.ty&&(g.ty.value=xn(B.target[1],3)),g.tz&&(g.tz.value=xn(B.target[2],3))),$}function v(){l==null||l()}function L(){!g.azimuthDeg||!g.elevationDeg||!g.distance||!g.tx||!g.ty||!g.tz||(Gi(e,t,{azimuthDeg:Number(g.azimuthDeg.value),elevationDeg:Number(g.elevationDeg.value),distance:Number(g.distance.value),target:[Number(g.tx.value),Number(g.ty.value),Number(g.tz.value)]}),S(),v())}function T(B){const $=So[B];if(!$)return;const J=Vi(e,t);Gi(e,t,{azimuthDeg:$.azimuthDeg,elevationDeg:$.elevationDeg,distance:J.distance,target:J.target}),S(),v()}function A(B){const $=Vi(e,t);Gi(e,t,{azimuthDeg:$.azimuthDeg+B,elevationDeg:$.elevationDeg,distance:$.distance,target:$.target}),S(),v()}let H=null,D=0;const k=5,V=.45;function I(){if(!H)return;const B=H.moved,$=H.face,J=H.pointerId;H=null,p==null||p.classList.remove("is-orbiting"),d==null||d.classList.remove("is-dragging");try{p==null||p.releasePointerCapture(J)}catch{}if(B){v();return}$&&So[$]&&(D=performance.now(),T($))}return p==null||p.addEventListener("pointerdown",B=>{if(B.button!=null&&B.button!==0||B.target instanceof Element&&B.target.closest(".vc-home, .cam-advanced, summary"))return;const $=B.target instanceof Element?B.target.closest("[data-view]"):null,J=$==null?void 0:$.getAttribute("data-view"),te=J&&J in So?J:null,j=Vi(e,t);H={pointerId:B.pointerId,x:B.clientX,y:B.clientY,az:j.azimuthDeg,el:j.elevationDeg,dist:j.distance,target:j.target,moved:!1,face:te};try{p.setPointerCapture(B.pointerId)}catch{}}),p==null||p.addEventListener("pointermove",B=>{if(!H||B.pointerId!==H.pointerId)return;const $=B.clientX-H.x,J=B.clientY-H.y;if(!H.moved){if(Math.hypot($,J)<k)return;H.moved=!0,p.classList.add("is-orbiting"),d==null||d.classList.add("is-dragging")}Gi(e,t,{azimuthDeg:H.az+$*V,elevationDeg:H.el-J*V,distance:H.dist,target:H.target}),S()}),p==null||p.addEventListener("pointerup",B=>{!H||B.pointerId!==H.pointerId||I()}),p==null||p.addEventListener("pointercancel",B=>{!H||B.pointerId!==H.pointerId||I()}),h.querySelectorAll("[data-view]").forEach(B=>{B.addEventListener("click",$=>{if(H||performance.now()-D<400){$.preventDefault();return}const J=B.getAttribute("data-view");J&&So[J]&&T(J)})}),h.querySelectorAll("[data-rotate]").forEach(B=>{B.addEventListener("click",()=>{A(Number(B.getAttribute("data-rotate")))})}),(E=h.querySelector('[data-act="home"]'))==null||E.addEventListener("click",()=>{T("home")}),(z=h.querySelector('[data-act="apply"]'))==null||z.addEventListener("click",L),(ne=h.querySelector('[data-act="focus"]'))==null||ne.addEventListener("click",()=>{td(e,t,(c==null?void 0:c())??null),S(),v()}),(K=h.querySelector('[data-act="copy"]'))==null||K.addEventListener("click",async()=>{const B=S(),$=JSON.stringify(B,null,2);try{await navigator.clipboard.writeText($)}catch{console.log("__cameraPose",B)}}),h.addEventListener("keydown",B=>{B.key==="Enter"&&B.target instanceof HTMLInputElement&&(B.preventDefault(),L())}),s&&(s.addEventListener("click",()=>{const B=!h.hidden;h.hidden=B,s.setAttribute("aria-pressed",B?"false":"true")}),s.setAttribute("aria-pressed",h.hidden?"false":"true")),S(),{update:()=>(hw(e,t),S()),applyFromInputs:L,focusSelected:()=>{const B=td(e,t,(c==null?void 0:c())??null);return B&&(S(),v()),B},snapNamedView:T,rotateAzimuth:A,root:h}}const ic=Math.PI/180;let ri={yaw:0,pitch:0,roll:0};const id=new hn,rd=new hn,Kr=new hn,sd=new Tn(0,0,0,"ZYX");function rc(i,e=-180,t=180){const n=Number(i);return Number.isFinite(n)?Math.max(e,Math.min(t,n)):0}function Al(){return{...ri}}function _T(i={}){return i.yaw!==void 0&&(ri.yaw=rc(i.yaw)),i.pitch!==void 0&&(ri.pitch=rc(i.pitch)),i.roll!==void 0&&(ri.roll=rc(i.roll)),Lr(),Al()}function vT(){return ri={yaw:0,pitch:0,roll:0},Lr(),Al()}function dw(i=ri){const e=Math.round(i.yaw),t=Math.round(i.pitch),n=Math.round(i.roll);return`Y${e} P${t} R${n}`}function lf(i,e=ri){return rd.set(i[1],i[2],i[3],i[0]),sd.set((e.roll||0)*ic,(e.pitch||0)*ic,(e.yaw||0)*ic,"ZYX"),id.setFromEuler(sd),Kr.copy(id).multiply(rd),[Kr.w,Kr.x,Kr.y,Kr.z]}function yT(i,e){const t=i.body_quat,n=e*4;return[t[n],t[n+1],t[n+2],t[n+3]]}function xT(i,e){const t=i.qpos;return{pos:[t[e],t[e+1],t[e+2]],wxyz:[t[e+3],t[e+4],t[e+5],t[e+6]]}}function ST({mujoco:i,model:e,data:t,bodyId:n,baseWxyz:r}){if(n<0||!e||!t)return;const s=lf(r,ri),c=e.body_quat,l=n*4;c[l]=s[0],c[l+1]=s[1],c[l+2]=s[2],c[l+3]=s[3],i.mj_forward(e,t),Lr()}function MT({mujoco:i,model:e,data:t,freeQposAdr:n,baseWxyz:r,pos:s,freeDofAdr:c=-1,initialQpos:l=null,running:h=!1,force:d=!1,orient:p=null}){if(n<0||!e||!t)return!1;if(h&&!d)return Lr({deferred:!0}),!1;const m=lf(r,p||ri),_=t.qpos;if(s&&(_[n]=s[0],_[n+1]=s[1],_[n+2]=s[2]),_[n+3]=m[0],_[n+4]=m[1],_[n+5]=m[2],_[n+6]=m[3],c>=0)for(let x=0;x<6;x++)t.qvel[c+x]=0;return l&&(s&&(l[n]=s[0],l[n+1]=s[1],l[n+2]=s[2]),l[n+3]=m[0],l[n+4]=m[1],l[n+5]=m[2],l[n+6]=m[3]),i.mj_forward(e,t),Lr({deferred:!1}),!0}function Lr(i={}){if(typeof window>"u")return;const e=Al();window.__sg90MotorOrientation={yawDeg:e.yaw,pitchDeg:e.pitch,rollDeg:e.roll,label:dw(e),mode:"edit-while-paused / apply-on-reset (lab freejoint)",layers:"housing: world*motor*base; horn: world*motor*base*hinge*mount",...i,t:performance.now()}}Lr();const fw="(max-width: 720px)";function ET(i){var we;const{sections:e,focusSelected:t,onReorientModeChange:n,onPartnerModeChange:r,poseToggle:s=document.getElementById("btn-pose"),cameraToggle:c=document.getElementById("btn-camera"),sceneToggle:l=document.getElementById("btn-scene"),defaultSection:h}=i,d=e.filter(F=>F.panel instanceof HTMLElement);if(!d.length)return{isMobile:()=>!1,openSheet(){},closeSheet(){},setSection(){},isReorientMode:()=>!1,isPartnerMode:()=>!1,setReorientMode(){},setPartnerMode(){},dispose(){}};const p=window.matchMedia(fw);let g=!1,m=h&&d.some(F=>F.id===h)?h:d[0].id,_=!1,x=!1,w=!1;const S=new Map;for(const F of d)S.set(F.panel,{parent:F.panel.parentNode,next:F.panel.nextSibling});const v=document.createElement("button");v.type="button",v.id="btn-mobile-controls",v.className="mobile-fab",v.setAttribute("aria-controls","mobile-sheet"),v.setAttribute("aria-expanded","false"),v.hidden=!0,v.textContent="Controls";const L=document.createElement("button");L.type="button",L.className="mobile-sheet-backdrop",L.setAttribute("aria-label","Close controls"),L.hidden=!0;const T=document.createElement("div");T.id="mobile-sheet",T.className="mobile-sheet",T.setAttribute("role","dialog"),T.setAttribute("aria-modal","true"),T.setAttribute("aria-label","Lab controls"),T.hidden=!0;const A=document.createElement("div");A.className="mobile-sheet-handle",A.setAttribute("aria-hidden","true");const H=document.createElement("div");H.className="mobile-sheet-head";const D=document.createElement("strong");D.className="mobile-sheet-title",D.textContent="Controls";const k=document.createElement("button");k.type="button",k.className="mobile-sheet-close",k.setAttribute("aria-label","Close controls"),k.textContent="Done",H.append(D,k);const V=document.createElement("div");V.className="mobile-sheet-tabs",V.setAttribute("role","tablist"),V.setAttribute("aria-label","Control panels");const I=new Map;for(const F of d){const be=document.createElement("button");be.type="button",be.className="mobile-sheet-tab",be.setAttribute("role","tab"),be.dataset.section=F.id,be.id=`mobile-tab-${F.id}`,be.setAttribute("aria-controls",F.panel.id||`panel-${F.id}`),be.textContent=F.label,be.addEventListener("click",()=>Le(F.id)),V.appendChild(be),I.set(F.id,be)}const E=document.createElement("div");E.className="mobile-sheet-tools";const z=document.createElement("button");z.type="button",z.id="btn-focus-selected",z.textContent="Focus selected",z.title="Frame the camera on the selected object",z.addEventListener("click",()=>{((t==null?void 0:t())??!1)||(z.classList.add("is-flash"),window.setTimeout(()=>z.classList.remove("is-flash"),400))});const ne=document.createElement("button");ne.type="button",ne.id="btn-reorient-mode",ne.setAttribute("aria-pressed","false"),ne.textContent="Reorient drag",ne.title="On phone: enable drag-to-reorient (off by default so orbit/pan/zoom win)",ne.addEventListener("click",()=>De(!_));const K=document.createElement("button");K.type="button",K.id="btn-partner-mode",K.setAttribute("aria-pressed","false"),K.textContent="Partner tap",K.title="Next tap sets Attach partner (phone substitute for Shift+click)",K.hidden=!d.some(F=>F.id==="selection"),K.addEventListener("click",()=>Fe(!x));const B=document.createElement("button");B.type="button",B.id="btn-deselect-mobile",B.textContent="Deselect",B.title="Clear selection (Esc on desktop)",B.hidden=!d.some(F=>F.id==="selection"),B.addEventListener("click",()=>{var F;(F=document.getElementById("btn-deselect"))==null||F.click()});const $=document.querySelector("#topbar .nav-link");if($){const F=document.createElement("a");F.className="mobile-sheet-nav",F.href=$.getAttribute("href")||"#",F.textContent=$.textContent.trim()||"Other view",E.append(F)}E.append(z,ne,K,B);const J=document.createElement("p");J.className="mobile-sheet-hint",J.textContent="Scene first — one finger orbit, two-finger pan/zoom. Use sliders to orient; turn on Reorient drag only when needed.";const te=document.createElement("div");te.className="mobile-sheet-body",te.id="mobile-sheet-body",T.append(A,H,V,E,J,te),(document.getElementById("app")||document.body).append(v,L,T);function ve(){return p.matches}function De(F){_=!!F,document.body.classList.toggle("reorient-mode",_),ne.setAttribute("aria-pressed",_?"true":"false"),n==null||n(_)}function Fe(F){x=!!F,document.body.classList.toggle("partner-mode",x),K.setAttribute("aria-pressed",x?"true":"false"),r==null||r(x)}function Ze(){if(!w){for(const F of d)te.appendChild(F.panel),F.panel.classList.add("mobile-sheet-panel");w=!0}}function it(){if(w){for(const F of d){const be=S.get(F.panel);F.panel.classList.remove("mobile-sheet-panel","is-mobile-active"),F.panel.removeAttribute("aria-hidden"),be!=null&&be.parent&&(be.next&&be.next.parentNode===be.parent?be.parent.insertBefore(F.panel,be.next):be.parent.appendChild(F.panel))}w=!1}}function oe(){for(const F of d){const be=F.panel,xe=ve()&&g&&F.id===m;be.classList.toggle("is-mobile-active",xe),be.setAttribute("data-mobile-section",F.id),ve()&&(xe?(F.id!=="selection"&&(be.hidden=!1),be.setAttribute("aria-hidden",be.hidden?"true":"false")):be.setAttribute("aria-hidden","true"));const Be=I.get(F.id);Be&&(Be.setAttribute("aria-selected",xe?"true":"false"),Be.classList.toggle("is-active",xe))}}function _e(){const F=ve();document.body.classList.toggle("mobile-chrome",F),v.hidden=!F,F?(Ze(),g||(T.hidden=!0,L.hidden=!0,v.setAttribute("aria-expanded","false"),document.body.classList.remove("sheet-open"),document.body.removeAttribute("data-sheet"))):(g=!1,T.hidden=!0,L.hidden=!0,v.setAttribute("aria-expanded","false"),document.body.classList.remove("sheet-open"),document.body.removeAttribute("data-sheet"),it()),oe()}function Le(F){ve()&&(F&&d.some(be=>be.id===F)&&(m=F),Ze(),g=!0,T.hidden=!1,L.hidden=!1,v.setAttribute("aria-expanded","true"),document.body.classList.add("sheet-open"),document.body.dataset.sheet=m,s&&m==="pose"&&s.setAttribute("aria-pressed","true"),c&&m==="camera"&&c.setAttribute("aria-pressed","true"),oe())}function ye(){g=!1,T.hidden=!0,L.hidden=!0,v.setAttribute("aria-expanded","false"),document.body.classList.remove("sheet-open"),document.body.removeAttribute("data-sheet"),oe()}function pe(F){g?Le(F):m=F}v.addEventListener("click",()=>{g?ye():Le(m)}),k.addEventListener("click",()=>ye()),L.addEventListener("click",()=>ye()),s==null||s.addEventListener("click",F=>{ve()&&(F.preventDefault(),F.stopImmediatePropagation(),g&&m==="pose"?ye():Le("pose"))},!0),c==null||c.addEventListener("click",F=>{ve()&&(F.preventDefault(),F.stopImmediatePropagation(),g&&m==="camera"?ye():Le("camera"))},!0),l==null||l.addEventListener("click",F=>{ve()&&(F.preventDefault(),F.stopImmediatePropagation(),g&&m==="assemblies"?ye():Le("assemblies"))},!0);function Ae(){if(_e(),ve()){ye();const F=document.getElementById("camera-hud");F&&(F.hidden=!1),c==null||c.setAttribute("aria-pressed","false");const be=document.getElementById("assemblies-panel");be&&(be.hidden=!1),l==null||l.setAttribute("aria-pressed","false")}}_e(),ve()&&(ye(),c==null||c.setAttribute("aria-pressed","false")),p.addEventListener("change",Ae);const Je=(we=d.find(F=>F.id==="selection"))==null?void 0:we.panel,rt=Je&&new MutationObserver(()=>{const F=I.get("selection");F&&(F.classList.toggle("has-selection",!Je.hidden),ve()&&g&&m==="selection"&&oe())});Je&&rt&&rt.observe(Je,{attributes:!0,attributeFilter:["hidden"]});function fe(){Fe(!1)}return document.body.addEventListener("lab-partner-consumed",fe),{isMobile:ve,openSheet:Le,closeSheet:ye,setSection:pe,isReorientMode:()=>_,isPartnerMode:()=>x,setReorientMode:De,setPartnerMode:Fe,dispose:()=>{p.removeEventListener("change",Ae),document.body.removeEventListener("lab-partner-consumed",fe),rt==null||rt.disconnect(),it(),v.remove(),L.remove(),T.remove(),document.body.classList.remove("mobile-chrome","sheet-open","reorient-mode","partner-mode"),document.body.removeAttribute("data-sheet")}}}function pw(i,e){return i.pointerType==="touch"||i.pointerType==="pen"?!!document.body.classList.contains("reorient-mode"):!0}const uf="physical-lab-panel-pos-v1",pr=8;function od(){try{const i=localStorage.getItem(uf);if(!i)return{};const e=JSON.parse(i);return e&&typeof e=="object"?e:{}}catch{return{}}}function mw(i){try{localStorage.setItem(uf,JSON.stringify(i))}catch{}}function gw(i,e,t){const n=i.getBoundingClientRect(),r=n.width||i.offsetWidth||0,s=n.height||i.offsetHeight||0,c=Math.max(pr,window.innerWidth-r-pr),l=Math.max(pr,window.innerHeight-s-pr);return{left:Math.min(Math.max(pr,e),c),top:Math.min(Math.max(pr,t),l)}}function Mo(i,e,t){const n=gw(i,e,t);return i.classList.add("is-panel-dragged"),i.style.position="fixed",i.style.left=`${n.left}px`,i.style.top=`${n.top}px`,i.style.right="auto",i.style.bottom="auto",i.style.transform="none",n}function _w(i){const e=i.querySelector(":scope > header");return e&&e.classList.add("panel-header"),e}function bT(i={}){const{panels:e=[],isMobile:t=()=>document.body.classList.contains("mobile-chrome")||window.matchMedia("(max-width: 720px)").matches}=i,n=new Set;let r=0;function s(m){const _=m.id;if(!_)return;const x=m.getBoundingClientRect(),w=od();w[_]={left:x.left,top:x.top},mw(w)}function c(m){if(t())return;const _=m.id;if(!_)return;const x=od()[_];!x||typeof x.left!="number"||typeof x.top!="number"||Mo(m,x.left,x.top)}function l(m){if(!(m instanceof HTMLElement)||n.has(m)||m.classList.contains("viewcube-dock")||m.id==="camera-hud")return;const _=_w(m);_&&(n.add(m),requestAnimationFrame(()=>c(m)),_.addEventListener("pointerdown",x=>{if(t()||x.button!=null&&x.button!==0||x.target instanceof Element&&x.target.closest("button, a, input, select, textarea, label"))return;const w=x.clientX,S=x.clientY,v=m.getBoundingClientRect(),L=v.left,T=v.top;Mo(m,L,T),m.classList.add("is-panel-dragging"),r+=1,document.body.classList.add("is-dragging-panel");const A=x.pointerId;try{_.setPointerCapture(A)}catch{}x.preventDefault();function H(k){if(k.pointerId!==A)return;const V=L+(k.clientX-w),I=T+(k.clientY-S);Mo(m,V,I)}function D(k){if(k.pointerId===A){_.removeEventListener("pointermove",H),_.removeEventListener("pointerup",D),_.removeEventListener("pointercancel",D);try{_.releasePointerCapture(A)}catch{}m.classList.remove("is-panel-dragging"),r=Math.max(0,r-1),r===0&&document.body.classList.remove("is-dragging-panel"),s(m)}}_.addEventListener("pointermove",H),_.addEventListener("pointerup",D),_.addEventListener("pointercancel",D)}))}function h(){if(!t())for(const m of n){if(!m.classList.contains("is-panel-dragged")||m.hidden)continue;const _=m.getBoundingClientRect();Mo(m,_.left,_.top),s(m)}}function d(){if(!t())for(const m of n)c(m)}for(const m of e)m&&l(m);window.addEventListener("resize",h);const p=window.matchMedia("(max-width: 720px)"),g=()=>{p.matches||requestAnimationFrame(d)};return p.addEventListener("change",g),{bindPanel:l,restoreAll:d,reclampAll:h,dispose:()=>{window.removeEventListener("resize",h),p.removeEventListener("change",g),document.body.classList.remove("is-dragging-panel")}}}async function ad(i){const e=await fetch(i);if(!e.ok)throw new Error(`Failed to fetch ${i} (${e.status})`);return e.text()}function vw(i,e,t={}){const n=new i.MjVFS,r=new TextEncoder;for(const[c,l]of Object.entries(t))n.addBuffer(c,r.encode(l));const s=i.MjModel.from_xml_string(e,n);if(!s)throw new Error("MjModel.from_xml_string failed");return s}async function wT(i,e,t={}){const n=await ad(e),r={};return await Promise.all(Object.entries(t).map(async([s,c])=>{r[s]=await ad(c)})),vw(i,n,r)}const cd=hs("/models/sg90/cad/GrabCAD_SG90_body.step"),Jr=.0155,Wi=21,Ho=360/Wi;let bn=0;const yw={linearUnit:"millimeter",linearDeflectionType:"absolute_value",linearDeflection:.06,angularDeflection:.3},Ir={cross:{id:"cross",label:"Cross (4 pads)",blurb:"GrabCAD cross — default",kind:"step",step:hs("/models/sg90/cad/GrabCAD_SG90_cross_horn.step"),align:"cross",default:!0},single:{id:"single",label:"1-arm",blurb:"Fewer pads — FreeCAD/GrabCAD 1-arm",kind:"step",step:hs("/models/sg90/cad/SG90-1-arm-horn.step"),align:"single"},short:{id:"short",label:"Short",blurb:"Short kit arm (~14 mm) — parametric",kind:"parametric",parametric:"short"},long:{id:"long",label:"Long / wide",blurb:"Long kit arm (~30 mm) — parametric",kind:"parametric",parametric:"long"},double:{id:"double",label:"2-arm",blurb:"Straight bar through hub (kit) — parametric",kind:"parametric",parametric:"double"}};function xw(){var i;return((i=Object.values(Ir).find(e=>e.default))==null?void 0:i.id)||"cross"}function nl(i){return i&&Ir[i]?i:i==="one_arm"||i==="1arm"||i==="one-arm"?"single":xw()}function Ko(i){const e=Math.trunc(Number(i));return Number.isFinite(e)?(e%Wi+Wi)%Wi:0}function br(i=bn){return Ko(i)*Ho}function Vo(i=bn){return br(i)*Math.PI/180}function TT(i){const e=Ko(i);return`${e} (${br(e).toFixed(1)}°)`}function AT(){return bn}function Sw(i){if(!i)return;const e=i.getObjectByName("sg90CadHorn");e&&(e.rotation.z=Vo())}function CT(i,e){var n;bn=Ko(i);const t=e||hf||(typeof window<"u"?(n=window.__sg90Roots)==null?void 0:n.rotorRoot:null);return Sw(t),typeof window<"u"&&window.__sg90Cad&&(window.__sg90Cad.hornMountIndex=bn,window.__sg90Cad.hornMountOffsetDeg=br(),window.__sg90Cad.hornMountOffsetRad=Vo(),window.__sg90Cad.splineTeeth=Wi,window.__sg90Cad.splineStepDeg=Ho),bn}let sc=null,Oi=null,il=null,hf=null,mr=null,rl=null,sl=null;async function Mw(){return sc||(sc=(async()=>{let i=null;try{const e=await dd(()=>import("./occt-import-js-DCqKp0QJ.js").then(t=>t.o),__vite__mapDeps([0,1]));i=e.default||e.occtimportjs||e,i&&typeof i!="function"&&typeof i.default=="function"&&(i=i.default)}catch{}return typeof i!="function"&&typeof window<"u"&&typeof window.occtimportjs=="function"&&(i=window.occtimportjs),typeof i!="function"&&(i=await new Promise((e,t)=>{const n=document.createElement("script");n.src=hs("/vendor/occt-import-js/occt-import-js.js"),n.async=!0,n.onload=()=>{const r=window.occtimportjs;typeof r=="function"?e(r):t(new Error("occtimportjs global missing after script load"))},n.onerror=()=>t(new Error("failed to load /vendor/occt-import-js/occt-import-js.js")),document.head.appendChild(n)})),i({locateFile:e=>e.endsWith(".wasm")?hs("/vendor/occt-import-js/occt-import-js.wasm"):e})})()),sc}function Ew(i){var c,l;const e=i.attributes.position.array,t=(c=i.attributes.normal)==null?void 0:c.array,n=(l=i.index)==null?void 0:l.array,r=new Float32Array(e.length);for(let h=0;h<e.length;h++)r[h]=e[h]*.001;const s=new $t;return s.setAttribute("position",new Zt(r,3)),t&&t.length===e.length&&s.setAttribute("normal",new Zt(new Float32Array(t),3)),n!=null&&n.length&&s.setIndex(Array.from(n)),s.computeVertexNormals(),s.computeBoundingBox(),s}function df(i){if(i.length===1)return i[0];let e=0,t=0;for(const p of i)e+=p.attributes.position.count,t+=p.index?p.index.count:p.attributes.position.count;const n=new Float32Array(e*3),r=new Float32Array(e*3),s=new Uint32Array(t);let c=0,l=0,h=0;for(const p of i){n.set(p.attributes.position.array,c),p.attributes.normal&&r.set(p.attributes.normal.array,c);const g=p.attributes.position.count;if(p.index)for(let m=0;m<p.index.count;m++)s[l++]=p.index.getX(m)+h;else for(let m=0;m<g;m++)s[l++]=h+m;c+=p.attributes.position.array.length,h+=g}const d=new $t;return d.setAttribute("position",new Zt(n,3)),d.setAttribute("normal",new Zt(r,3)),d.setIndex(new Zt(s,1)),d.computeBoundingBox(),d}async function ff(i,e){var s;const t=await fetch(e);if(!t.ok)throw new Error(`fetch ${e} ${t.status}`);const n=new Uint8Array(await t.arrayBuffer()),r=i.ReadStepFile(n,yw);if(!(r!=null&&r.success)||!((s=r.meshes)!=null&&s.length))throw new Error(`STEP parse failed: ${e}`);return df(r.meshes.map(Ew))}function bw(i){i.rotateX(Math.PI/2),i.computeBoundingBox(),i.translate(0,0,-i.boundingBox.min.z),i.computeBoundingBox();const e=i.boundingBox.max.z,t=i.attributes.position;let n=0,r=0,s=0;for(let h=0;h<t.count;h++)t.getZ(h)>e-.003&&(n+=t.getX(h),r+=t.getY(h),s+=1);s&&i.translate(-n/s,-r/s,0),i.computeBoundingBox();const c=.003;let l=-1/0;for(let h=0;h<t.count;h++){if(Math.hypot(t.getX(h),t.getY(h))<c)continue;const p=t.getZ(h);p>l&&(l=p)}return Number.isFinite(l)||(l=i.boundingBox.max.z),l}function ww(i){i.computeBoundingBox();const e=i.attributes.position,t=.004;let n=1/0;for(let r=0;r<e.count;r++){if(Math.hypot(e.getX(r),e.getY(r))<t)continue;const c=e.getZ(r);c<n&&(n=c)}Number.isFinite(n)||(n=i.boundingBox.min.z),i.translate(0,0,-n),i.computeBoundingBox()}function Tw(i){i.computeBoundingBox();const e=i.attributes.position,t=72,n=new Float64Array(t);for(let h=0;h<e.count;h++){const d=e.getX(h),p=e.getY(h),g=Math.hypot(d,p);if(g<1e-9)continue;let m=Math.floor((Math.atan2(p,d)+Math.PI)/(2*Math.PI)*t);m<0&&(m=0),m>=t&&(m=t-1),g>n[m]&&(n[m]=g)}let r=0,s=-1;for(let h=0;h<t;h++)n[h]>s&&(s=n[h],r=h);const c=(r+.5)/t*2*Math.PI-Math.PI;i.rotateZ(-c),i.computeBoundingBox();const l=i.boundingBox;Math.abs(l.min.x)>l.max.x+1e-9&&(i.rotateZ(Math.PI),i.computeBoundingBox())}function pf(i){Tw(i),ww(i)}function Aw(i){i.rotateX(Math.PI/2),i.computeBoundingBox();const e=i.boundingBox;i.translate(-.5*(e.min.x+e.max.x),-.5*(e.min.y+e.max.y),-e.min.z),pf(i)}function Cw(i){i.computeBoundingBox();let e=i.boundingBox;const t=[e.max.x-e.min.x,e.max.y-e.min.y,e.max.z-e.min.z],n=t.indexOf(Math.min(...t));n===0?i.rotateY(-Math.PI/2):n===1&&i.rotateX(Math.PI/2),i.computeBoundingBox(),e=i.boundingBox,i.translate(0,0,-e.min.z),i.computeBoundingBox(),e=i.boundingBox,i.translate(0,-.5*(e.min.y+e.max.y),0),i.computeBoundingBox(),e=i.boundingBox;const r=i.attributes.position;function s(p,g){let m=0,_=0,x=0,w=0,S=0;for(let v=0;v<r.count;v++){const L=r.getX(v);if(L<p||L>g)continue;const T=r.getY(v),A=r.getZ(v);m+=L,_+=T,x+=A,S+=T*T,w+=1}return w?{x:m/w,y:_/w,n:w,rms:Math.sqrt(S/w),meanZ:x/w}:{x:0,y:0,n:0,rms:1,meanZ:0}}const c=e.max.x-e.min.x,l=s(e.min.x,e.min.x+.28*c),h=s(e.max.x-.28*c,e.max.x),d=l.meanZ>=h.meanZ?l:h;i.translate(-d.x,-d.y,0),i.rotateX(Math.PI),pf(i)}function Rw(i){let c,l,h,d,p;i==="short"?(c=.012,l=.0034,h=.0026,d=2,p=!1):i==="long"?(c=.03,l=.0034,h=.0022,d=7,p=!1):(c=.017,l=.0032,h=.0022,d=4,p=!0);const g=new Po;g.absarc(0,0,.0035,0,Math.PI*2,!1);const m=new ko;m.absarc(0,0,.00145,0,Math.PI*2,!0),g.holes.push(m);function _(T,A){for(let D=0;D<d;D++){const k=A*(.0057+D*.002);if(Math.abs(k)>c-.0015)break;const V=new ko;V.absarc(k,0,55e-5,0,Math.PI*2,!0),T.holes.push(V)}}function x(){const A=new Po;return A.moveTo(.001225,l),A.lineTo(c,h),A.absarc(c,0,h,Math.PI/2,-Math.PI/2,!0),A.lineTo(.001225,-l),A.lineTo(.001225,l),A.closePath(),_(A,1),A}function w(){const T=new Po,A=.0035*.25;return T.moveTo(-c,h),T.lineTo(-A,l),T.lineTo(A,l),T.lineTo(c,h),T.absarc(c,0,h,Math.PI/2,-Math.PI/2,!0),T.lineTo(A,-l),T.lineTo(-A,-l),T.lineTo(-c,-h),T.absarc(-c,0,h,-Math.PI/2,Math.PI/2,!0),T.closePath(),_(T,1),_(T,-1),T}const S=[g];p?S.push(w()):S.push(x());const v=S.map(T=>{const A=new Sl(T,{depth:.0024,bevelEnabled:!1,curveSegments:28});return A.computeVertexNormals(),A}),L=df(v);for(const T of v)T!==L&&T.dispose();return L.computeBoundingBox(),L}function ld(i){[...i.children].forEach(e=>{var t,n;e.isMesh&&(i.remove(e),e.geometry&&e.geometry!==Oi&&((n=(t=e.geometry).dispose)==null||n.call(t)))})}function Pw(){rl||(rl=new Qc({color:2781050,roughness:.4,metalness:.15})),sl||(sl=new Qc({color:15133422,roughness:.35,metalness:.08}))}async function Dw(i,e){const t=Ir[e]||Ir.cross;if(t.kind==="parametric")return{geo:Rw(t.parametric),provenance:`parametric:${t.parametric}`};if(!i)throw new Error("OCCT required for STEP horn");const n=await ff(i,t.step);return t.align==="single"?Cw(n):Aw(n),{geo:n,provenance:t.step}}async function ud(i,e,t={}){var s;t.trackAsPrimary!==!1&&(il=i,hf=e);const n=nl(t.hornId),r=t.hornMountIndex!==void 0?Ko(t.hornMountIndex):bn;t.trackAsPrimary!==!1&&t.hornMountIndex!==void 0&&(bn=r);try{Pw();const l=!Oi||((s=Ir[n])==null?void 0:s.kind)==="step"?await Mw():null;if(!Oi){const m=await ff(l,cd);mr=bw(m),Oi=m}const{geo:h,provenance:d}=await Dw(l,n);ld(i),ld(e);const p=new en(Oi,rl);p.name="sg90CadBody",p.castShadow=!0,p.receiveShadow=!0,p.position.set(0,0,Jr-mr),i.add(p);const g=new en(h,sl);if(g.name="sg90CadHorn",g.castShadow=!0,g.receiveShadow=!0,g.position.set(0,0,0),g.rotation.z=Vo(r),e.add(g),typeof window<"u"&&t.trackAsPrimary!==!1){Oi.computeBoundingBox(),h.computeBoundingBox();const m=Jr-mr,_=Oi.boundingBox.max.z,x=h.attributes.position;let w=1/0,S=1/0;for(let H=0;H<x.count;H++){const D=Math.hypot(x.getX(H),x.getY(H)),k=x.getZ(H);D>=.004?w=Math.min(w,k):S=Math.min(S,k)}const v=g.position.z,L=m+mr,T=Jr+v+w,A=Jr+v+S;window.__sg90Cad={ok:!0,hornId:n,horn:Ir[n],provenance:d,body:cd,shaftZ:mr,tipZ:_,rotorZ:Jr,bodyOffsetZ:m,flangeMinZ:w,collarMinZ:S,gapFlangeToBoss_mm:(T-L)*1e3,gapCollarToBoss_mm:(A-L)*1e3,hornMountIndex:r,hornMountOffsetDeg:br(r),hornMountOffsetRad:Vo(r),splineTeeth:Wi,splineStepDeg:Ho},window.__sg90Roots={housingRoot:i,rotorRoot:e,bodyMesh:p,hornMesh:g}}return{ok:!0,hornId:n,shaftZ:mr,hornMountIndex:r,hornMountOffsetDeg:br(r)}}catch(c){const l=String((c==null?void 0:c.message)||c);return console.warn("SG90 STEP CAD load failed; keeping box proxies",c),typeof window<"u"&&t.trackAsPrimary!==!1&&(window.__sg90Cad={ok:!1,error:l,hornId:n,hornMountIndex:bn,hornMountOffsetDeg:br(),splineTeeth:Wi,splineStepDeg:Ho}),{ok:!1,error:l,hornId:n,hornMountIndex:bn}}}async function RT(i,e,t){if(t!==void 0)return ud(i,e,{hornId:nl(t),hornMountIndex:bn});if(!il)throw new Error("setSg90Horn(rotor, id): call attachSg90CadMeshes first");return ud(il,i,{hornId:nl(e),hornMountIndex:bn})}const Lw=4114687,Iw=16756800;function Nw(i){var t;let e=i;for(;e;){if((t=e.userData)!=null&&t.labTransformGizmo)return!0;e=e.parent}return!1}function PT(i,e){i.userData.labObject={...e},i.traverse(t=>{t.isMesh&&(t.userData.labObject=i.userData.labObject)})}function Fw(i){var e;if(i.geometry&&!((e=i.userData)!=null&&e.shareGeometry)&&i.geometry.dispose(),i.material)if(Array.isArray(i.material))for(const t of i.material)t.dispose();else i.material.dispose()}function Uw(i,e,t){const n=[];if(i.traverse(r=>{var c;if(!r.isMesh||!r.geometry||r.name==="pickProxy"||!r.visible||(c=r.userData)!=null&&c.labSelectionOutline)return;const s=Array.isArray(r.material)?r.material[0]:r.material;s&&s.opacity===0||n.push(r)}),n.length>0){const r=new Gn,s=new lt,c=new lt;i.updateWorldMatrix(!0,!0),s.copy(i.matrixWorld).invert();for(const l of n){l.geometry.boundingBox||l.geometry.computeBoundingBox();const h=l.geometry.boundingBox.clone();l.updateWorldMatrix(!0,!1),c.copy(s).multiply(l.matrixWorld),h.applyMatrix4(c),r.union(h)}if(!r.isEmpty()){const l=new G,h=new G;r.getSize(l),r.getCenter(h),l.multiplyScalar(1.05);const d=new Ur(l.x||.001,l.y||.001,l.z||.001),p=new Uh(d);d.dispose();const g=new Oo(p,new as({color:e,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1,toneMapped:!1}));g.position.copy(h),g.renderOrder=1e3,g.raycast=()=>{},g.userData.labSelectionOutline=!0,i.add(g),t.push(g)}}for(const r of n){const s=new No({color:e,transparent:!0,opacity:.35,depthWrite:!1,depthTest:!0,blending:Do,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),c=new en(r.geometry,s);c.renderOrder=998,c.raycast=()=>{},c.userData.labSelectionOutline=!0,c.userData.shareGeometry=!0,r.add(c),t.push(c);const l=new No({color:e,side:ln,transparent:!0,opacity:.5,depthWrite:!1,depthTest:!0,blending:Do,toneMapped:!1}),h=new en(r.geometry,l);h.scale.setScalar(1.08),h.renderOrder=997,h.raycast=()=>{},h.userData.labSelectionOutline=!0,h.userData.shareGeometry=!0,r.add(h),t.push(h);let d;try{d=new Uh(r.geometry,28)}catch{continue}if(!d.attributes.position||d.attributes.position.count===0){d.dispose();continue}const p=new as({color:e,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,toneMapped:!1}),g=new Oo(d,p);g.renderOrder=999,g.raycast=()=>{},g.userData.labSelectionOutline=!0,r.add(g),t.push(g)}}function DT(i){const{canvas:e,camera:t,scene:n,panelEls:r,getPoseText:s,getExtraText:c,getPartnerText:l,getGroupText:h,getStatusText:d,onSelect:p,onPanelUpdate:g,hitTestGizmoHandle:m,canPick:_=()=>!0}=i;function x(te,j){te&&(te.textContent=j)}const w=new wl,S=new Re;let v=null,L=null,T=null,A=null;const H=[];function D(){var te;for(const j of H)(te=j.parent)==null||te.remove(j),Fw(j);H.length=0}function k(){D();const te=[[L,Lw],[A,Iw]];for(const[j,ve]of te)j&&Uw(j,ve,H)}function V(te){if(r.partner&&(r.partner.textContent=l?l(te,T):T?T.name:"— (Shift+click partner)"),r.group){const j=h?h(te):"—";r.group.textContent=j,r.group.hidden=!te||!j,r.group.classList.toggle("is-alone",!!te&&/alone|not welded/i.test(j))}}function I(te){if(!r.status)return;const j=d?d(te,T):"";r.status.textContent=j,r.status.hidden=!j}function E(te){if(v=te,typeof window<"u"&&(window.__labSelection=te?{...te,poseText:s(te),extraText:c(te),partner:T?{id:T.id,body:T.body,name:T.name}:null,outlineCount:H.length,t:performance.now()}:null),!te){r.root.hidden=!0,x(r.name,"Item"),x(r.type,"—"),x(r.id,"—"),x(r.pose,"—"),x(r.extra,"—"),V(null),I(null),p==null||p(null,T),g==null||g(null);return}r.root.hidden=!1,x(r.name,te.name),x(r.type,te.type),x(r.id,te.id),x(r.pose,s(te)),x(r.extra,c(te)),V(te),I(te),p==null||p(te,T),g==null||g(te)}function z(te,j=null,{asPartner:ve=!1}={}){if(ve&&te){v&&(v.id===te.id||v.body===te.body)?(T=null,A=null):(T=te,A=j),k(),E(v);return}L=j,T&&te&&(T.id===te.id||T.body===te.body)&&(T=null,A=null),k(),E(te)}function ne(te){var ve;let j=te;for(;j;){if((ve=j.userData)!=null&&ve.labObject)return j;j=j.parent}return null}function K(){v=null,L=null,T=null,A=null,D(),E(null)}function B(te){var Fe;if(te.button!==0||te.target!==e||_&&!_())return;const j=e.getBoundingClientRect();if(S.x=(te.clientX-j.left)/j.width*2-1,S.y=-((te.clientY-j.top)/j.height)*2+1,w.setFromCamera(S,t),m!=null&&m(w))return;const ve=w.intersectObjects(n.children,!0),De=!!te.shiftKey||document.body.classList.contains("partner-mode");for(const Ze of ve){if(Nw(Ze.object))continue;const it=ne(Ze.object);if((Fe=it==null?void 0:it.userData)!=null&&Fe.labObject){z(it.userData.labObject,it,{asPartner:De}),De&&document.body.classList.contains("partner-mode")&&document.body.dispatchEvent(new CustomEvent("lab-partner-consumed"));return}}}e.addEventListener("pointerdown",B);function $(){if(!v)return;const te=s(v),j=c(v);x(r.pose,te),x(r.extra,j),V(v),I(v),typeof window<"u"&&window.__labSelection&&(window.__labSelection.poseText=te,window.__labSelection.extraText=j,window.__labSelection.partner=T?{id:T.id,body:T.body,name:T.name}:null,window.__labSelection.t=performance.now()),g==null||g(v)}function J(){e.removeEventListener("pointerdown",B),D()}return{selectMeta:z,clear:()=>{K()},getSelected:()=>v,getSelectedRoot:()=>L,getPartner:()=>T,getPartnerRoot:()=>A,setPartner:(te,j=null)=>{T=te,A=j,k(),E(v)},refreshHighlight:()=>{(L||A)&&k()},updatePanel:$,dispose:J}}const oc=.45,hd=4;function Ow(i){return i?i.id==="sg90"||i.body==="sg90":!1}function Eo(i){return i?Ow(i)||i.id==="sg90_horn"||i.body==="sg90_rotor":!1}function LT(i){const{canvas:e,camera:t,orbitControls:n,getSelected:r,getSelectedRoot:s,getOrientation:c,applyOrientation:l,hintEl:h=null,onActiveChange:d,allowPointer:p}=i,g=new wl,m=new Re;let _=!1,x=!1,w=0,S=0,v={yaw:0,pitch:0,roll:0},L=!1,T=!0,A=null;function H($={}){if(typeof window>"u")return;const J=r(),te=Eo(J);window.__sg90MotorReorient={selected:te,dragging:x,hint:te?"Drag to reorient motor":null,layers:"motor_R only — hinge + 21T mount unchanged",...$,t:performance.now()}}function D($){if(h)if($){h.hidden=!1;const J=window.matchMedia("(pointer: coarse)").matches&&!document.body.classList.contains("reorient-mode");h.textContent=J?"Use Motor orientation sliders — or enable Reorient drag":"Drag to reorient motor"}else h.hidden=!0}function k($){$==="grabbing"?e.style.cursor="grabbing":$==="grab"?e.style.cursor="grab":e.style.cursor=""}function V(){const $=Eo(r());D($),k($?x?"grabbing":"grab":""),d==null||d($),H()}function I($,J){const te=s();if(!te||!Eo(r()))return!1;const j=e.getBoundingClientRect();return m.x=($-j.left)/j.width*2-1,m.y=-((J-j.top)/j.height)*2+1,g.setFromCamera(m,t),g.intersectObject(te,!0).length>0}function E(){if(!_&&!x)return;const $=x;if(_=!1,x=!1,n.enabled=T,$&&l(c(),{dragging:!1}),A!=null){try{e.releasePointerCapture(A)}catch{}A=null}V()}function z($){$.button!==0||$.target!==e||!Eo(r())||!I($.clientX,$.clientY)||!(p?p($):pw($))||(_=!0,x=!1,w=$.clientX,S=$.clientY,v={...c()},L=!!$.shiftKey,A=$.pointerId,T=n.enabled,H({tracking:!0}))}function ne($){if(!_)return;const J=$.clientX-w,te=$.clientY-S;if(!x){if(J*J+te*te<hd*hd)return;x=!0,n.enabled=!1;try{e.setPointerCapture($.pointerId),A=$.pointerId}catch{}k("grabbing"),H({dragging:!0})}L=!!$.shiftKey;let j;L?j={yaw:v.yaw,pitch:v.pitch,roll:v.roll+J*oc}:j={yaw:v.yaw+J*oc,pitch:v.pitch-te*oc,roll:v.roll},l(j,{dragging:!0})}function K(){E()}function B(){E()}return e.addEventListener("pointerdown",z),e.addEventListener("pointermove",ne),e.addEventListener("pointerup",K),e.addEventListener("pointercancel",B),V(),{onSelectionChange:V,isDragging:()=>x,dispose:()=>{e.removeEventListener("pointerdown",z),e.removeEventListener("pointermove",ne),e.removeEventListener("pointerup",K),e.removeEventListener("pointercancel",B),E(),D(!1),k(""),typeof window<"u"&&(window.__sg90MotorReorient=null)}}}export{GE as $,qw as A,Zt as B,ct as C,oT as D,en as E,tT as F,Oo as G,jd as H,Zw as I,Kw as J,Jw as K,fs as L,Qw as M,Os as N,Ut as O,sT as P,hn as Q,vc as R,Sn as S,Gw as T,ro as U,Re as V,gn as W,R0 as X,Od as Y,$d as Z,eT as _,Xw as a,lT as a$,Lo as a0,$c as a1,Wd as a2,tn as a3,zo as a4,Bo as a5,qo as a6,St as a7,xi as a8,Yo as a9,xw as aA,nl as aB,Ir as aC,ud as aD,PT as aE,TT as aF,CT as aG,Wi as aH,ad as aI,gT as aJ,mT as aK,DT as aL,ET as aM,bT as aN,AT as aO,$w as aP,Tv as aQ,jw as aR,Gd as aS,hT as aT,iT as aU,uT as aV,fT as aW,Uh as aX,Bw as aY,Vw as aZ,dT as a_,Gn as aa,oi as ab,at as ac,Rt as ad,hs as ae,dd as af,Zb as ag,wl as ah,Jd as ai,Ur as aj,nf as ak,sf as al,rf as am,Tn as an,Xo as ao,Al as ap,_T as aq,rc as ar,dw as as,xT as at,lf as au,MT as av,pw as aw,mi as ax,Vi as ay,Gi as az,Ww as b,pT as b0,Eo as b1,wT as b2,yT as b3,LT as b4,RT as b5,vT as b6,ST as b7,aT as c,Nr as d,rT as e,lt as f,G as g,Th as h,nT as i,cT as j,Yw as k,Hi as l,pa as m,t0 as n,Vn as o,_n as p,yc as q,zi as r,$E as s,qi as t,as as u,Qc as v,ti as w,No as x,At as y,$t as z};
