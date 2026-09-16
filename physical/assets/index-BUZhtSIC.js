var Lg=Object.defineProperty;var Ig=(i,e,t)=>e in i?Lg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Dn=(i,e,t)=>Ig(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const Ng="modulepreload",Fg=function(i){return"/physical/"+i},jl={},Ug=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let c=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),h=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));r=c(t.map(d=>{if(d=Fg(d),d in jl)return;jl[d]=!0;const p=d.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const _=document.createElement("link");if(_.rel=p?"stylesheet":Ng,p||(_.as="script"),_.crossOrigin="",_.href=d,h&&_.setAttribute("nonce",h),document.head.appendChild(_),p)return new Promise((y,S)=>{_.addEventListener("load",y),_.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return r.then(c=>{for(const l of c||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})};var Og=(async function(i={}){var Vl,Gl,Wl;var e,t=i,n=typeof window=="object",r=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&((Vl=process.versions)==null?void 0:Vl.node)&&process.type!="renderer",c=!n&&!o&&!r;if(o){const{createRequire:s}=await Ug(async()=>{const{createRequire:a}=await Promise.resolve().then(()=>cb);return{createRequire:a}},void 0);var l=s(import.meta.url)}var h="./this.program",d=(s,a)=>{throw a},p=import.meta.url,m="";function _(s){return t.locateFile?t.locateFile(s,m):m+s}var y,S;if(o){if(!(typeof process=="object"&&((Gl=process.versions)==null?void 0:Gl.node)&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var b=process.versions.node,x=b.split(".").slice(0,3);if(x=x[0]*1e4+x[1]*100+x[2].split("-")[0]*1,x<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+b+")");var v=l("fs");p.startsWith("file:")&&(m=l("path").dirname(l("url").fileURLToPath(p))+"/"),S=a=>{a=O(a)?new URL(a):a;var u=v.readFileSync(a);return L(Buffer.isBuffer(u)),u},y=async(a,u=!0)=>{a=O(a)?new URL(a):a;var f=v.readFileSync(a,u?void 0:"utf8");return L(u?Buffer.isBuffer(f):typeof f=="string"),f},process.argv.length>1&&(h=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),d=(a,u)=>{throw process.exitCode=a,u}}else if(c){if(typeof process=="object"&&((Wl=process.versions)==null?void 0:Wl.node)&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||r){try{m=new URL(".",p).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");r&&(S=s=>{var a=new XMLHttpRequest;return a.open("GET",s,!1),a.responseType="arraybuffer",a.send(null),new Uint8Array(a.response)}),y=async s=>{if(O(s))return new Promise((u,f)=>{var g=new XMLHttpRequest;g.open("GET",s,!0),g.responseType="arraybuffer",g.onload=()=>{if(g.status==200||g.status==0&&g.response){u(g.response);return}f(g.status)},g.onerror=f,g.send(null)});var a=await fetch(s,{credentials:"same-origin"});if(a.ok)return a.arrayBuffer();throw new Error(a.status+" : "+a.url)}}else throw new Error("environment detection error");var N=console.log.bind(console),D=console.error.bind(console);L(!c,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var P;typeof WebAssembly!="object"&&D("no native wasm support detected");var q=!1;function L(s,a){s||le("Assertion failed"+(a?": "+a:""))}var O=s=>s.startsWith("file://");function $(){var s=na();L((s&3)==0),s==0&&(s+=4),Se[s>>2]=34821223,Se[s+4>>2]=2310721022,Se[0]=1668509029}function I(){if(!q){var s=na();s==0&&(s+=4);var a=Se[s>>2],u=Se[s+4>>2];(a!=34821223||u!=2310721022)&&le(`Stack overflow! Stack cookie has been overwritten at ${ue(s)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ue(u)} ${ue(a)}`),Se[0]!=1668509029&&le("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class T extends Error{}class k extends T{}class ae extends T{constructor(a){super(a),this.excPtr=a;const u=Rl(a);this.name=u[0],this.message=u[1]}}(()=>{var s=new Int16Array(1),a=new Int8Array(s.buffer);if(s[0]=25459,a[0]!==115||a[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function J(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,set(){le(`Attempt to set \`Module.${s}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function te(s){return()=>L(!1,`call to '${s}' via reference taken before Wasm module initialization`)}function me(s){Object.getOwnPropertyDescriptor(t,s)&&le(`\`Module.${s}\` was supplied but \`${s}\` not included in INCOMING_MODULE_JS_API`)}function ce(s){return s==="FS_createPath"||s==="FS_createDataFile"||s==="FS_createPreloadedFile"||s==="FS_unlink"||s==="addRunDependency"||s==="FS_createLazyFile"||s==="FS_createDevice"||s==="removeRunDependency"}function xe(s,a){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,s)&&Object.defineProperty(globalThis,s,{configurable:!0,get(){a()}})}function ne(s,a){xe(s,()=>{Ge(`\`${s}\` is not longer defined by emscripten. ${a}`)})}ne("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),ne("asm","Please use wasmExports instead");function Te(s){xe(s,()=>{var a=`\`${s}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,u=s;u.startsWith("_")||(u="$"+s),a+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${u}')`,ce(s)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Ge(a)}),Ce(s)}function Ce(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,get(){var a=`'${s}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;ce(s)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),le(a)}})}var Pe,Xe,nt,ee,pe,Le,Me,de,Se,it,At,Ze,Lt,V=!1;function tn(){var s=nt.buffer;ee=new Int8Array(s),Le=new Int16Array(s),pe=new Uint8Array(s),Me=new Uint16Array(s),de=new Int32Array(s),Se=new Uint32Array(s),it=new Float32Array(s),At=new Float64Array(s),Ze=new BigInt64Array(s),Lt=new BigUint64Array(s)}L(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function ut(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)we(t.preRun.shift());J("preRun"),at(z)}function ht(){L(!V),V=!0,I(),!t.noFSInit&&!M.initialized&&M.init(),Hi.__wasm_call_ctors(),M.ignorePermissions=!1}function We(){if(I(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)Tt(t.postRun.shift());J("postRun"),at(Je)}var gt=0,Ve=null,U={},R=null;function Z(s){var a;gt++,(a=t.monitorRunDependencies)==null||a.call(t,gt),s?(L(!U[s]),U[s]=1,R===null&&typeof setInterval<"u"&&(R=setInterval(()=>{if(q){clearInterval(R),R=null;return}var u=!1;for(var f in U)u||(u=!0,D("still waiting on run dependencies:")),D(`dependency: ${f}`);u&&D("(end of list)")},1e4))):D("warning: run dependency added without ID")}function he(s){var u;if(gt--,(u=t.monitorRunDependencies)==null||u.call(t,gt),s?(L(U[s]),delete U[s]):D("warning: run dependency removed without ID"),gt==0&&(R!==null&&(clearInterval(R),R=null),Ve)){var a=Ve;Ve=null,a()}}function le(s){var u;(u=t.onAbort)==null||u.call(t,s),s="Aborted("+s+")",D(s),q=!0;var a=new WebAssembly.RuntimeError(s);throw Xe==null||Xe(a),a}function oe(s,a){return(...u)=>{L(V,`native function \`${s}\` called before runtime initialization`);var f=Hi[s];return L(f,`exported native function \`${s}\` not found`),L(u.length<=a,`native function \`${s}\` called with ${u.length} args but expects ${a}`),f(...u)}}var ke;function Re(){return t.locateFile?_("mujoco.wasm"):new URL("/physical/assets/mujoco-D9UjOFNX.wasm",import.meta.url).href}function Ne(s){if(s==ke&&P)return new Uint8Array(P);if(S)return S(s);throw"both async and sync fetching of the wasm failed"}async function dt(s){if(!P)try{var a=await y(s);return new Uint8Array(a)}catch{}return Ne(s)}async function Ee(s,a){try{var u=await dt(s),f=await WebAssembly.instantiate(u,a);return f}catch(g){D(`failed to asynchronously prepare wasm: ${g}`),O(ke)&&D(`warning: Loading from a file URI (${ke}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),le(g)}}async function Fe(s,a,u){if(!s&&typeof WebAssembly.instantiateStreaming=="function"&&!O(a)&&!o)try{var f=fetch(a,{credentials:"same-origin"}),g=await WebAssembly.instantiateStreaming(f,u);return g}catch(E){D(`wasm streaming compile failed: ${E}`),D("falling back to ArrayBuffer instantiation")}return Ee(a,u)}function je(){return{env:zl,wasi_snapshot_preview1:zl}}async function qe(){function s(w,A){return Hi=w.exports,nt=Hi.memory,L(nt,"memory not found in wasm exports"),tn(),Us=Hi.__indirect_function_table,L(Us,"table not found in wasm exports"),Fp(Hi),he("wasm-instantiate"),Hi}Z("wasm-instantiate");var a=t;function u(w){return L(t===a,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),a=null,s(w.instance)}var f=je();if(t.instantiateWasm)return new Promise((w,A)=>{try{t.instantiateWasm(f,(F,H)=>{w(s(F,H))})}catch(F){D(`Module.instantiateWasm callback failed with error: ${F}`),A(F)}});ke??(ke=Re());var g=await Fe(P,ke,f),E=u(g);return E}class Ue{constructor(a){Dn(this,"name","ExitStatus");this.message=`Program terminated with exit(${a})`,this.status=a}}var at=s=>{for(;s.length>0;)s.shift()(t)},Je=[],Tt=s=>Je.push(s),z=[],we=s=>z.push(s),ie=!0,ue=s=>(L(typeof s=="number"),s>>>=0,"0x"+s.toString(16).padStart(8,"0")),Y=s=>Nl(s),j=()=>Ul(),Ge=s=>{Ge.shown||(Ge.shown={}),Ge.shown[s]||(Ge.shown[s]=1,o&&(s="warning: "+s),D(s))},Dt=typeof TextDecoder<"u"?new TextDecoder:void 0,Nt=(s,a=0,u=NaN)=>{for(var f=a+u,g=a;s[g]&&!(g>=f);)++g;if(g-a>16&&s.buffer&&Dt)return Dt.decode(s.subarray(a,g));for(var E="";a<g;){var w=s[a++];if(!(w&128)){E+=String.fromCharCode(w);continue}var A=s[a++]&63;if((w&224)==192){E+=String.fromCharCode((w&31)<<6|A);continue}var F=s[a++]&63;if((w&240)==224?w=(w&15)<<12|A<<6|F:((w&248)!=240&&Ge("Invalid UTF-8 leading byte "+ue(w)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),w=(w&7)<<18|A<<12|F<<6|s[a++]&63),w<65536)E+=String.fromCharCode(w);else{var H=w-65536;E+=String.fromCharCode(55296|H>>10,56320|H&1023)}}return E},ot=(s,a)=>(L(typeof s=="number",`UTF8ToString expects a number (got ${typeof s})`),s?Nt(pe,s,a):""),_n=(s,a,u,f)=>le(`Assertion failed: ${ot(s)}, at: `+[a?ot(a):"unknown filename",u,f?ot(f):"unknown function"]),Ot=[],Ni=0,Ss=s=>{var a=new Fi(s);return a.get_caught()||(a.set_caught(!0),Ni--),a.set_rethrown(!1),Ot.push(a),Gs(s),Bl(s)},ti=()=>{if(!Ot.length)return 0;var s=Ot[Ot.length-1];return Gs(s.excPtr),s.excPtr},nn=0,Ms=()=>{ge(0,0),L(Ot.length>0);var s=Ot.pop();ia(s.excPtr),nn=0};class Fi{constructor(a){this.excPtr=a,this.ptr=a-24}set_type(a){Se[this.ptr+4>>2]=a}get_type(){return Se[this.ptr+4>>2]}set_destructor(a){Se[this.ptr+8>>2]=a}get_destructor(){return Se[this.ptr+8>>2]}set_caught(a){a=a?1:0,ee[this.ptr+12]=a}get_caught(){return ee[this.ptr+12]!=0}set_rethrown(a){a=a?1:0,ee[this.ptr+13]=a}get_rethrown(){return ee[this.ptr+13]!=0}init(a,u){this.set_adjusted_ptr(0),this.set_type(a),this.set_destructor(u)}set_adjusted_ptr(a){Se[this.ptr+16>>2]=a}get_adjusted_ptr(){return Se[this.ptr+16>>2]}}var ni=s=>Ll(s),ir=s=>{var a=nn==null?void 0:nn.excPtr;if(!a)return ni(0),0;var u=new Fi(a);u.set_adjusted_ptr(a);var f=u.get_type();if(!f)return ni(0),a;for(var g of s){if(g===0||g===f)break;var E=u.ptr+16;if(kl(g,f,E))return ni(g),a}return ni(f),a},rr=()=>ir([]),Ts=s=>ir([s]),bs=(s,a)=>ir([s,a]),ws=()=>{var s=Ot.pop();s||le("no exception to throw");var a=s.excPtr;throw s.get_rethrown()||(Ot.push(s),s.set_rethrown(!0),s.set_caught(!1),Ni++),nn=new ae(a),nn},Go=s=>{if(s){var a=new Fi(s);Ot.push(a),a.set_rethrown(!0),ws()}},Wo=(s,a,u)=>{var f=new Fi(s);throw f.init(a,u),nn=new ae(s),Ni++,nn},C=()=>Ni,G=s=>{throw nn||(nn=new ae(s)),nn},X={isAbs:s=>s.charAt(0)==="/",splitPath:s=>{var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return a.exec(s).slice(1)},normalizeArray:(s,a)=>{for(var u=0,f=s.length-1;f>=0;f--){var g=s[f];g==="."?s.splice(f,1):g===".."?(s.splice(f,1),u++):u&&(s.splice(f,1),u--)}if(a)for(;u;u--)s.unshift("..");return s},normalize:s=>{var a=X.isAbs(s),u=s.slice(-1)==="/";return s=X.normalizeArray(s.split("/").filter(f=>!!f),!a).join("/"),!s&&!a&&(s="."),s&&u&&(s+="/"),(a?"/":"")+s},dirname:s=>{var a=X.splitPath(s),u=a[0],f=a[1];return!u&&!f?".":(f&&(f=f.slice(0,-1)),u+f)},basename:s=>s&&s.match(/([^\/]+|\/)\/*$/)[1],join:(...s)=>X.normalize(s.join("/")),join2:(s,a)=>X.normalize(s+"/"+a)},Q=()=>{if(o){var s=l("crypto");return a=>s.randomFillSync(a)}return a=>crypto.getRandomValues(a)},W=s=>{(W=Q())(s)},ye={resolve:(...s)=>{for(var a="",u=!1,f=s.length-1;f>=-1&&!u;f--){var g=f>=0?s[f]:M.cwd();if(typeof g!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!g)return"";a=g+"/"+a,u=X.isAbs(g)}return a=X.normalizeArray(a.split("/").filter(E=>!!E),!u).join("/"),(u?"/":"")+a||"."},relative:(s,a)=>{s=ye.resolve(s).slice(1),a=ye.resolve(a).slice(1);function u(H){for(var K=0;K<H.length&&H[K]==="";K++);for(var re=H.length-1;re>=0&&H[re]==="";re--);return K>re?[]:H.slice(K,re-K+1)}for(var f=u(s.split("/")),g=u(a.split("/")),E=Math.min(f.length,g.length),w=E,A=0;A<E;A++)if(f[A]!==g[A]){w=A;break}for(var F=[],A=w;A<f.length;A++)F.push("..");return F=F.concat(g.slice(w)),F.join("/")}},Ae=[],Oe=s=>{for(var a=0,u=0;u<s.length;++u){var f=s.charCodeAt(u);f<=127?a++:f<=2047?a+=2:f>=55296&&f<=57343?(a+=4,++u):a+=3}return a},Be=(s,a,u,f)=>{if(L(typeof s=="string",`stringToUTF8Array expects a string (got ${typeof s})`),!(f>0))return 0;for(var g=u,E=u+f-1,w=0;w<s.length;++w){var A=s.codePointAt(w);if(A<=127){if(u>=E)break;a[u++]=A}else if(A<=2047){if(u+1>=E)break;a[u++]=192|A>>6,a[u++]=128|A&63}else if(A<=65535){if(u+2>=E)break;a[u++]=224|A>>12,a[u++]=128|A>>6&63,a[u++]=128|A&63}else{if(u+3>=E)break;A>1114111&&Ge("Invalid Unicode code point "+ue(A)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),a[u++]=240|A>>18,a[u++]=128|A>>12&63,a[u++]=128|A>>6&63,a[u++]=128|A&63,w++}}return a[u]=0,u-g},$e=(s,a,u)=>{var f=Oe(s)+1,g=new Array(f),E=Be(s,g,0,g.length);return g.length=E,g},Qe=()=>{if(!Ae.length){var s=null;if(o){var a=256,u=Buffer.alloc(a),f=0,g=process.stdin.fd;try{f=v.readSync(g,u,0,a)}catch(E){if(E.toString().includes("EOF"))f=0;else throw E}f>0&&(s=u.slice(0,f).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(s=window.prompt("Input: "),s!==null&&(s+=`
`));if(!s)return null;Ae=$e(s)}return Ae.shift()},Ie={ttys:[],init(){},shutdown(){},register(s,a){Ie.ttys[s]={input:[],output:[],ops:a},M.registerDevice(s,Ie.stream_ops)},stream_ops:{open(s){var a=Ie.ttys[s.node.rdev];if(!a)throw new M.ErrnoError(43);s.tty=a,s.seekable=!1},close(s){s.tty.ops.fsync(s.tty)},fsync(s){s.tty.ops.fsync(s.tty)},read(s,a,u,f,g){if(!s.tty||!s.tty.ops.get_char)throw new M.ErrnoError(60);for(var E=0,w=0;w<f;w++){var A;try{A=s.tty.ops.get_char(s.tty)}catch{throw new M.ErrnoError(29)}if(A===void 0&&E===0)throw new M.ErrnoError(6);if(A==null)break;E++,a[u+w]=A}return E&&(s.node.atime=Date.now()),E},write(s,a,u,f,g){if(!s.tty||!s.tty.ops.put_char)throw new M.ErrnoError(60);try{for(var E=0;E<f;E++)s.tty.ops.put_char(s.tty,a[u+E])}catch{throw new M.ErrnoError(29)}return f&&(s.node.mtime=s.node.ctime=Date.now()),E}},default_tty_ops:{get_char(s){return Qe()},put_char(s,a){a===null||a===10?(N(Nt(s.output)),s.output=[]):a!=0&&s.output.push(a)},fsync(s){var a;((a=s.output)==null?void 0:a.length)>0&&(N(Nt(s.output)),s.output=[])},ioctl_tcgets(s){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(s,a,u){return 0},ioctl_tiocgwinsz(s){return[24,80]}},default_tty1_ops:{put_char(s,a){a===null||a===10?(D(Nt(s.output)),s.output=[]):a!=0&&s.output.push(a)},fsync(s){var a;((a=s.output)==null?void 0:a.length)>0&&(D(Nt(s.output)),s.output=[])}}},ft=s=>{le("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},De={ops_table:null,mount(s){return De.createNode(null,"/",16895,0)},createNode(s,a,u,f){if(M.isBlkdev(u)||M.isFIFO(u))throw new M.ErrnoError(63);De.ops_table||(De.ops_table={dir:{node:{getattr:De.node_ops.getattr,setattr:De.node_ops.setattr,lookup:De.node_ops.lookup,mknod:De.node_ops.mknod,rename:De.node_ops.rename,unlink:De.node_ops.unlink,rmdir:De.node_ops.rmdir,readdir:De.node_ops.readdir,symlink:De.node_ops.symlink},stream:{llseek:De.stream_ops.llseek}},file:{node:{getattr:De.node_ops.getattr,setattr:De.node_ops.setattr},stream:{llseek:De.stream_ops.llseek,read:De.stream_ops.read,write:De.stream_ops.write,mmap:De.stream_ops.mmap,msync:De.stream_ops.msync}},link:{node:{getattr:De.node_ops.getattr,setattr:De.node_ops.setattr,readlink:De.node_ops.readlink},stream:{}},chrdev:{node:{getattr:De.node_ops.getattr,setattr:De.node_ops.setattr},stream:M.chrdev_stream_ops}});var g=M.createNode(s,a,u,f);return M.isDir(g.mode)?(g.node_ops=De.ops_table.dir.node,g.stream_ops=De.ops_table.dir.stream,g.contents={}):M.isFile(g.mode)?(g.node_ops=De.ops_table.file.node,g.stream_ops=De.ops_table.file.stream,g.usedBytes=0,g.contents=null):M.isLink(g.mode)?(g.node_ops=De.ops_table.link.node,g.stream_ops=De.ops_table.link.stream):M.isChrdev(g.mode)&&(g.node_ops=De.ops_table.chrdev.node,g.stream_ops=De.ops_table.chrdev.stream),g.atime=g.mtime=g.ctime=Date.now(),s&&(s.contents[a]=g,s.atime=s.mtime=s.ctime=g.atime),g},getFileDataAsTypedArray(s){return s.contents?s.contents.subarray?s.contents.subarray(0,s.usedBytes):new Uint8Array(s.contents):new Uint8Array(0)},expandFileStorage(s,a){var u=s.contents?s.contents.length:0;if(!(u>=a)){var f=1024*1024;a=Math.max(a,u*(u<f?2:1.125)>>>0),u!=0&&(a=Math.max(a,256));var g=s.contents;s.contents=new Uint8Array(a),s.usedBytes>0&&s.contents.set(g.subarray(0,s.usedBytes),0)}},resizeFileStorage(s,a){if(s.usedBytes!=a)if(a==0)s.contents=null,s.usedBytes=0;else{var u=s.contents;s.contents=new Uint8Array(a),u&&s.contents.set(u.subarray(0,Math.min(a,s.usedBytes))),s.usedBytes=a}},node_ops:{getattr(s){var a={};return a.dev=M.isChrdev(s.mode)?s.id:1,a.ino=s.id,a.mode=s.mode,a.nlink=1,a.uid=0,a.gid=0,a.rdev=s.rdev,M.isDir(s.mode)?a.size=4096:M.isFile(s.mode)?a.size=s.usedBytes:M.isLink(s.mode)?a.size=s.link.length:a.size=0,a.atime=new Date(s.atime),a.mtime=new Date(s.mtime),a.ctime=new Date(s.ctime),a.blksize=4096,a.blocks=Math.ceil(a.size/a.blksize),a},setattr(s,a){for(const u of["mode","atime","mtime","ctime"])a[u]!=null&&(s[u]=a[u]);a.size!==void 0&&De.resizeFileStorage(s,a.size)},lookup(s,a){throw new M.ErrnoError(44)},mknod(s,a,u,f){return De.createNode(s,a,u,f)},rename(s,a,u){var f;try{f=M.lookupNode(a,u)}catch{}if(f){if(M.isDir(s.mode))for(var g in f.contents)throw new M.ErrnoError(55);M.hashRemoveNode(f)}delete s.parent.contents[s.name],a.contents[u]=s,s.name=u,a.ctime=a.mtime=s.parent.ctime=s.parent.mtime=Date.now()},unlink(s,a){delete s.contents[a],s.ctime=s.mtime=Date.now()},rmdir(s,a){var u=M.lookupNode(s,a);for(var f in u.contents)throw new M.ErrnoError(55);delete s.contents[a],s.ctime=s.mtime=Date.now()},readdir(s){return[".","..",...Object.keys(s.contents)]},symlink(s,a,u){var f=De.createNode(s,a,41471,0);return f.link=u,f},readlink(s){if(!M.isLink(s.mode))throw new M.ErrnoError(28);return s.link}},stream_ops:{read(s,a,u,f,g){var E=s.node.contents;if(g>=s.node.usedBytes)return 0;var w=Math.min(s.node.usedBytes-g,f);if(L(w>=0),w>8&&E.subarray)a.set(E.subarray(g,g+w),u);else for(var A=0;A<w;A++)a[u+A]=E[g+A];return w},write(s,a,u,f,g,E){if(L(!(a instanceof ArrayBuffer)),a.buffer===ee.buffer&&(E=!1),!f)return 0;var w=s.node;if(w.mtime=w.ctime=Date.now(),a.subarray&&(!w.contents||w.contents.subarray)){if(E)return L(g===0,"canOwn must imply no weird position inside the file"),w.contents=a.subarray(u,u+f),w.usedBytes=f,f;if(w.usedBytes===0&&g===0)return w.contents=a.slice(u,u+f),w.usedBytes=f,f;if(g+f<=w.usedBytes)return w.contents.set(a.subarray(u,u+f),g),f}if(De.expandFileStorage(w,g+f),w.contents.subarray&&a.subarray)w.contents.set(a.subarray(u,u+f),g);else for(var A=0;A<f;A++)w.contents[g+A]=a[u+A];return w.usedBytes=Math.max(w.usedBytes,g+f),f},llseek(s,a,u){var f=a;if(u===1?f+=s.position:u===2&&M.isFile(s.node.mode)&&(f+=s.node.usedBytes),f<0)throw new M.ErrnoError(28);return f},mmap(s,a,u,f,g){if(!M.isFile(s.node.mode))throw new M.ErrnoError(43);var E,w,A=s.node.contents;if(!(g&2)&&A&&A.buffer===ee.buffer)w=!1,E=A.byteOffset;else{if(w=!0,E=ft(),!E)throw new M.ErrnoError(48);A&&((u>0||u+a<A.length)&&(A.subarray?A=A.subarray(u,u+a):A=Array.prototype.slice.call(A,u,u+a)),ee.set(A,E))}return{ptr:E,allocated:w}},msync(s,a,u,f,g){return De.stream_ops.write(s,a,0,f,u,!1),0}}},Rt=async s=>{var a=await y(s);return L(a,`Loading data file "${s}" failed (no arrayBuffer).`),new Uint8Array(a)},$t=(...s)=>M.createDataFile(...s),xt=s=>{for(var a=s;;){if(!U[s])return s;s=a+Math.random()}},ze=[],Cn=(s,a,u,f)=>{typeof Browser<"u"&&Browser.init();var g=!1;return ze.forEach(E=>{g||E.canHandle(a)&&(E.handle(s,a,u,f),g=!0)}),g},vt=(s,a,u,f,g,E,w,A,F,H)=>{var K=a?ye.resolve(X.join2(s,a)):s,re=xt(`cp ${K}`);function fe(se){function _e(He){H==null||H(),A||$t(s,a,He,f,g,F),E==null||E(),he(re)}Cn(se,K,_e,()=>{w==null||w(),he(re)})||_e(se)}Z(re),typeof u=="string"?Rt(u).then(fe,w):fe(u)},gn=s=>{var a={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},u=a[s];if(typeof u>"u")throw new Error(`Unknown file open mode: ${s}`);return u},zn=(s,a)=>{var u=0;return s&&(u|=365),a&&(u|=146),u},rn=s=>ot(Dl(s)),yi={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},M={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{constructor(a){super(V?rn(a):"");Dn(this,"name","ErrnoError");this.errno=a;for(var u in yi)if(yi[u]===a){this.code=u;break}}},FSStream:class{constructor(){Dn(this,"shared",{})}get object(){return this.node}set object(s){this.node=s}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(s){this.shared.flags=s}get position(){return this.shared.position}set position(s){this.shared.position=s}},FSNode:class{constructor(s,a,u,f){Dn(this,"node_ops",{});Dn(this,"stream_ops",{});Dn(this,"readMode",365);Dn(this,"writeMode",146);Dn(this,"mounted",null);s||(s=this),this.parent=s,this.mount=s.mount,this.id=M.nextInode++,this.name=a,this.mode=u,this.rdev=f,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(s){s?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(s){s?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return M.isDir(this.mode)}get isDevice(){return M.isChrdev(this.mode)}},lookupPath(s,a={}){if(!s)throw new M.ErrnoError(44);a.follow_mount??(a.follow_mount=!0),X.isAbs(s)||(s=M.cwd()+"/"+s);e:for(var u=0;u<40;u++){for(var f=s.split("/").filter(H=>!!H),g=M.root,E="/",w=0;w<f.length;w++){var A=w===f.length-1;if(A&&a.parent)break;if(f[w]!=="."){if(f[w]===".."){if(E=X.dirname(E),M.isRoot(g)){s=E+"/"+f.slice(w+1).join("/");continue e}else g=g.parent;continue}E=X.join2(E,f[w]);try{g=M.lookupNode(g,f[w])}catch(H){if((H==null?void 0:H.errno)===44&&A&&a.noent_okay)return{path:E};throw H}if(M.isMountpoint(g)&&(!A||a.follow_mount)&&(g=g.mounted.root),M.isLink(g.mode)&&(!A||a.follow)){if(!g.node_ops.readlink)throw new M.ErrnoError(52);var F=g.node_ops.readlink(g);X.isAbs(F)||(F=X.dirname(E)+"/"+F),s=F+"/"+f.slice(w+1).join("/");continue e}}}return{path:E,node:g}}throw new M.ErrnoError(32)},getPath(s){for(var a;;){if(M.isRoot(s)){var u=s.mount.mountpoint;return a?u[u.length-1]!=="/"?`${u}/${a}`:u+a:u}a=a?`${s.name}/${a}`:s.name,s=s.parent}},hashName(s,a){for(var u=0,f=0;f<a.length;f++)u=(u<<5)-u+a.charCodeAt(f)|0;return(s+u>>>0)%M.nameTable.length},hashAddNode(s){var a=M.hashName(s.parent.id,s.name);s.name_next=M.nameTable[a],M.nameTable[a]=s},hashRemoveNode(s){var a=M.hashName(s.parent.id,s.name);if(M.nameTable[a]===s)M.nameTable[a]=s.name_next;else for(var u=M.nameTable[a];u;){if(u.name_next===s){u.name_next=s.name_next;break}u=u.name_next}},lookupNode(s,a){var u=M.mayLookup(s);if(u)throw new M.ErrnoError(u);for(var f=M.hashName(s.id,a),g=M.nameTable[f];g;g=g.name_next){var E=g.name;if(g.parent.id===s.id&&E===a)return g}return M.lookup(s,a)},createNode(s,a,u,f){L(typeof s=="object");var g=new M.FSNode(s,a,u,f);return M.hashAddNode(g),g},destroyNode(s){M.hashRemoveNode(s)},isRoot(s){return s===s.parent},isMountpoint(s){return!!s.mounted},isFile(s){return(s&61440)===32768},isDir(s){return(s&61440)===16384},isLink(s){return(s&61440)===40960},isChrdev(s){return(s&61440)===8192},isBlkdev(s){return(s&61440)===24576},isFIFO(s){return(s&61440)===4096},isSocket(s){return(s&49152)===49152},flagsToPermissionString(s){var a=["r","w","rw"][s&3];return s&512&&(a+="w"),a},nodePermissions(s,a){return M.ignorePermissions?0:a.includes("r")&&!(s.mode&292)||a.includes("w")&&!(s.mode&146)||a.includes("x")&&!(s.mode&73)?2:0},mayLookup(s){if(!M.isDir(s.mode))return 54;var a=M.nodePermissions(s,"x");return a||(s.node_ops.lookup?0:2)},mayCreate(s,a){if(!M.isDir(s.mode))return 54;try{var u=M.lookupNode(s,a);return 20}catch{}return M.nodePermissions(s,"wx")},mayDelete(s,a,u){var f;try{f=M.lookupNode(s,a)}catch(E){return E.errno}var g=M.nodePermissions(s,"wx");if(g)return g;if(u){if(!M.isDir(f.mode))return 54;if(M.isRoot(f)||M.getPath(f)===M.cwd())return 10}else if(M.isDir(f.mode))return 31;return 0},mayOpen(s,a){return s?M.isLink(s.mode)?32:M.isDir(s.mode)&&(M.flagsToPermissionString(a)!=="r"||a&576)?31:M.nodePermissions(s,M.flagsToPermissionString(a)):44},checkOpExists(s,a){if(!s)throw new M.ErrnoError(a);return s},MAX_OPEN_FDS:4096,nextfd(){for(var s=0;s<=M.MAX_OPEN_FDS;s++)if(!M.streams[s])return s;throw new M.ErrnoError(33)},getStreamChecked(s){var a=M.getStream(s);if(!a)throw new M.ErrnoError(8);return a},getStream:s=>M.streams[s],createStream(s,a=-1){return L(a>=-1),s=Object.assign(new M.FSStream,s),a==-1&&(a=M.nextfd()),s.fd=a,M.streams[a]=s,s},closeStream(s){M.streams[s]=null},dupStream(s,a=-1){var f,g;var u=M.createStream(s,a);return(g=(f=u.stream_ops)==null?void 0:f.dup)==null||g.call(f,u),u},doSetAttr(s,a,u){var f=s==null?void 0:s.stream_ops.setattr,g=f?s:a;f??(f=a.node_ops.setattr),M.checkOpExists(f,63),f(g,u)},chrdev_stream_ops:{open(s){var u,f;var a=M.getDevice(s.node.rdev);s.stream_ops=a.stream_ops,(f=(u=s.stream_ops).open)==null||f.call(u,s)},llseek(){throw new M.ErrnoError(70)}},major:s=>s>>8,minor:s=>s&255,makedev:(s,a)=>s<<8|a,registerDevice(s,a){M.devices[s]={stream_ops:a}},getDevice:s=>M.devices[s],getMounts(s){for(var a=[],u=[s];u.length;){var f=u.pop();a.push(f),u.push(...f.mounts)}return a},syncfs(s,a){typeof s=="function"&&(a=s,s=!1),M.syncFSRequests++,M.syncFSRequests>1&&D(`warning: ${M.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var u=M.getMounts(M.root.mount),f=0;function g(w){return L(M.syncFSRequests>0),M.syncFSRequests--,a(w)}function E(w){if(w)return E.errored?void 0:(E.errored=!0,g(w));++f>=u.length&&g(null)}u.forEach(w=>{if(!w.type.syncfs)return E(null);w.type.syncfs(w,s,E)})},mount(s,a,u){if(typeof s=="string")throw s;var f=u==="/",g=!u,E;if(f&&M.root)throw new M.ErrnoError(10);if(!f&&!g){var w=M.lookupPath(u,{follow_mount:!1});if(u=w.path,E=w.node,M.isMountpoint(E))throw new M.ErrnoError(10);if(!M.isDir(E.mode))throw new M.ErrnoError(54)}var A={type:s,opts:a,mountpoint:u,mounts:[]},F=s.mount(A);return F.mount=A,A.root=F,f?M.root=F:E&&(E.mounted=A,E.mount&&E.mount.mounts.push(A)),F},unmount(s){var a=M.lookupPath(s,{follow_mount:!1});if(!M.isMountpoint(a.node))throw new M.ErrnoError(28);var u=a.node,f=u.mounted,g=M.getMounts(f);Object.keys(M.nameTable).forEach(w=>{for(var A=M.nameTable[w];A;){var F=A.name_next;g.includes(A.mount)&&M.destroyNode(A),A=F}}),u.mounted=null;var E=u.mount.mounts.indexOf(f);L(E!==-1),u.mount.mounts.splice(E,1)},lookup(s,a){return s.node_ops.lookup(s,a)},mknod(s,a,u){var f=M.lookupPath(s,{parent:!0}),g=f.node,E=X.basename(s);if(!E)throw new M.ErrnoError(28);if(E==="."||E==="..")throw new M.ErrnoError(20);var w=M.mayCreate(g,E);if(w)throw new M.ErrnoError(w);if(!g.node_ops.mknod)throw new M.ErrnoError(63);return g.node_ops.mknod(g,E,a,u)},statfs(s){return M.statfsNode(M.lookupPath(s,{follow:!0}).node)},statfsStream(s){return M.statfsNode(s.node)},statfsNode(s){var a={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:M.nextInode,ffree:M.nextInode-1,fsid:42,flags:2,namelen:255};return s.node_ops.statfs&&Object.assign(a,s.node_ops.statfs(s.mount.opts.root)),a},create(s,a=438){return a&=4095,a|=32768,M.mknod(s,a,0)},mkdir(s,a=511){return a&=1023,a|=16384,M.mknod(s,a,0)},mkdirTree(s,a){var u=s.split("/"),f="";for(var g of u)if(g){(f||X.isAbs(s))&&(f+="/"),f+=g;try{M.mkdir(f,a)}catch(E){if(E.errno!=20)throw E}}},mkdev(s,a,u){return typeof u>"u"&&(u=a,a=438),a|=8192,M.mknod(s,a,u)},symlink(s,a){if(!ye.resolve(s))throw new M.ErrnoError(44);var u=M.lookupPath(a,{parent:!0}),f=u.node;if(!f)throw new M.ErrnoError(44);var g=X.basename(a),E=M.mayCreate(f,g);if(E)throw new M.ErrnoError(E);if(!f.node_ops.symlink)throw new M.ErrnoError(63);return f.node_ops.symlink(f,g,s)},rename(s,a){var u=X.dirname(s),f=X.dirname(a),g=X.basename(s),E=X.basename(a),w,A,F;if(w=M.lookupPath(s,{parent:!0}),A=w.node,w=M.lookupPath(a,{parent:!0}),F=w.node,!A||!F)throw new M.ErrnoError(44);if(A.mount!==F.mount)throw new M.ErrnoError(75);var H=M.lookupNode(A,g),K=ye.relative(s,f);if(K.charAt(0)!==".")throw new M.ErrnoError(28);if(K=ye.relative(a,u),K.charAt(0)!==".")throw new M.ErrnoError(55);var re;try{re=M.lookupNode(F,E)}catch{}if(H!==re){var fe=M.isDir(H.mode),se=M.mayDelete(A,g,fe);if(se)throw new M.ErrnoError(se);if(se=re?M.mayDelete(F,E,fe):M.mayCreate(F,E),se)throw new M.ErrnoError(se);if(!A.node_ops.rename)throw new M.ErrnoError(63);if(M.isMountpoint(H)||re&&M.isMountpoint(re))throw new M.ErrnoError(10);if(F!==A&&(se=M.nodePermissions(A,"w"),se))throw new M.ErrnoError(se);M.hashRemoveNode(H);try{A.node_ops.rename(H,F,E),H.parent=F}catch(_e){throw _e}finally{M.hashAddNode(H)}}},rmdir(s){var a=M.lookupPath(s,{parent:!0}),u=a.node,f=X.basename(s),g=M.lookupNode(u,f),E=M.mayDelete(u,f,!0);if(E)throw new M.ErrnoError(E);if(!u.node_ops.rmdir)throw new M.ErrnoError(63);if(M.isMountpoint(g))throw new M.ErrnoError(10);u.node_ops.rmdir(u,f),M.destroyNode(g)},readdir(s){var a=M.lookupPath(s,{follow:!0}),u=a.node,f=M.checkOpExists(u.node_ops.readdir,54);return f(u)},unlink(s){var a=M.lookupPath(s,{parent:!0}),u=a.node;if(!u)throw new M.ErrnoError(44);var f=X.basename(s),g=M.lookupNode(u,f),E=M.mayDelete(u,f,!1);if(E)throw new M.ErrnoError(E);if(!u.node_ops.unlink)throw new M.ErrnoError(63);if(M.isMountpoint(g))throw new M.ErrnoError(10);u.node_ops.unlink(u,f),M.destroyNode(g)},readlink(s){var a=M.lookupPath(s),u=a.node;if(!u)throw new M.ErrnoError(44);if(!u.node_ops.readlink)throw new M.ErrnoError(28);return u.node_ops.readlink(u)},stat(s,a){var u=M.lookupPath(s,{follow:!a}),f=u.node,g=M.checkOpExists(f.node_ops.getattr,63);return g(f)},fstat(s){var a=M.getStreamChecked(s),u=a.node,f=a.stream_ops.getattr,g=f?a:u;return f??(f=u.node_ops.getattr),M.checkOpExists(f,63),f(g)},lstat(s){return M.stat(s,!0)},doChmod(s,a,u,f){M.doSetAttr(s,a,{mode:u&4095|a.mode&-4096,ctime:Date.now(),dontFollow:f})},chmod(s,a,u){var f;if(typeof s=="string"){var g=M.lookupPath(s,{follow:!u});f=g.node}else f=s;M.doChmod(null,f,a,u)},lchmod(s,a){M.chmod(s,a,!0)},fchmod(s,a){var u=M.getStreamChecked(s);M.doChmod(u,u.node,a,!1)},doChown(s,a,u){M.doSetAttr(s,a,{timestamp:Date.now(),dontFollow:u})},chown(s,a,u,f){var g;if(typeof s=="string"){var E=M.lookupPath(s,{follow:!f});g=E.node}else g=s;M.doChown(null,g,f)},lchown(s,a,u){M.chown(s,a,u,!0)},fchown(s,a,u){var f=M.getStreamChecked(s);M.doChown(f,f.node,!1)},doTruncate(s,a,u){if(M.isDir(a.mode))throw new M.ErrnoError(31);if(!M.isFile(a.mode))throw new M.ErrnoError(28);var f=M.nodePermissions(a,"w");if(f)throw new M.ErrnoError(f);M.doSetAttr(s,a,{size:u,timestamp:Date.now()})},truncate(s,a){if(a<0)throw new M.ErrnoError(28);var u;if(typeof s=="string"){var f=M.lookupPath(s,{follow:!0});u=f.node}else u=s;M.doTruncate(null,u,a)},ftruncate(s,a){var u=M.getStreamChecked(s);if(a<0||(u.flags&2097155)===0)throw new M.ErrnoError(28);M.doTruncate(u,u.node,a)},utime(s,a,u){var f=M.lookupPath(s,{follow:!0}),g=f.node,E=M.checkOpExists(g.node_ops.setattr,63);E(g,{atime:a,mtime:u})},open(s,a,u=438){if(s==="")throw new M.ErrnoError(44);a=typeof a=="string"?gn(a):a,a&64?u=u&4095|32768:u=0;var f,g;if(typeof s=="object")f=s;else{g=s.endsWith("/");var E=M.lookupPath(s,{follow:!(a&131072),noent_okay:!0});f=E.node,s=E.path}var w=!1;if(a&64)if(f){if(a&128)throw new M.ErrnoError(20)}else{if(g)throw new M.ErrnoError(31);f=M.mknod(s,u|511,0),w=!0}if(!f)throw new M.ErrnoError(44);if(M.isChrdev(f.mode)&&(a&=-513),a&65536&&!M.isDir(f.mode))throw new M.ErrnoError(54);if(!w){var A=M.mayOpen(f,a);if(A)throw new M.ErrnoError(A)}a&512&&!w&&M.truncate(f,0),a&=-131713;var F=M.createStream({node:f,path:M.getPath(f),flags:a,seekable:!0,position:0,stream_ops:f.stream_ops,ungotten:[],error:!1});return F.stream_ops.open&&F.stream_ops.open(F),w&&M.chmod(f,u&511),t.logReadFiles&&!(a&1)&&(s in M.readFiles||(M.readFiles[s]=1)),F},close(s){if(M.isClosed(s))throw new M.ErrnoError(8);s.getdents&&(s.getdents=null);try{s.stream_ops.close&&s.stream_ops.close(s)}catch(a){throw a}finally{M.closeStream(s.fd)}s.fd=null},isClosed(s){return s.fd===null},llseek(s,a,u){if(M.isClosed(s))throw new M.ErrnoError(8);if(!s.seekable||!s.stream_ops.llseek)throw new M.ErrnoError(70);if(u!=0&&u!=1&&u!=2)throw new M.ErrnoError(28);return s.position=s.stream_ops.llseek(s,a,u),s.ungotten=[],s.position},read(s,a,u,f,g){if(L(u>=0),f<0||g<0)throw new M.ErrnoError(28);if(M.isClosed(s))throw new M.ErrnoError(8);if((s.flags&2097155)===1)throw new M.ErrnoError(8);if(M.isDir(s.node.mode))throw new M.ErrnoError(31);if(!s.stream_ops.read)throw new M.ErrnoError(28);var E=typeof g<"u";if(!E)g=s.position;else if(!s.seekable)throw new M.ErrnoError(70);var w=s.stream_ops.read(s,a,u,f,g);return E||(s.position+=w),w},write(s,a,u,f,g,E){if(L(u>=0),f<0||g<0)throw new M.ErrnoError(28);if(M.isClosed(s))throw new M.ErrnoError(8);if((s.flags&2097155)===0)throw new M.ErrnoError(8);if(M.isDir(s.node.mode))throw new M.ErrnoError(31);if(!s.stream_ops.write)throw new M.ErrnoError(28);s.seekable&&s.flags&1024&&M.llseek(s,0,2);var w=typeof g<"u";if(!w)g=s.position;else if(!s.seekable)throw new M.ErrnoError(70);var A=s.stream_ops.write(s,a,u,f,g,E);return w||(s.position+=A),A},mmap(s,a,u,f,g){if((f&2)!==0&&(g&2)===0&&(s.flags&2097155)!==2)throw new M.ErrnoError(2);if((s.flags&2097155)===1)throw new M.ErrnoError(2);if(!s.stream_ops.mmap)throw new M.ErrnoError(43);if(!a)throw new M.ErrnoError(28);return s.stream_ops.mmap(s,a,u,f,g)},msync(s,a,u,f,g){return L(u>=0),s.stream_ops.msync?s.stream_ops.msync(s,a,u,f,g):0},ioctl(s,a,u){if(!s.stream_ops.ioctl)throw new M.ErrnoError(59);return s.stream_ops.ioctl(s,a,u)},readFile(s,a={}){if(a.flags=a.flags||0,a.encoding=a.encoding||"binary",a.encoding!=="utf8"&&a.encoding!=="binary")throw new Error(`Invalid encoding type "${a.encoding}"`);var u=M.open(s,a.flags),f=M.stat(s),g=f.size,E=new Uint8Array(g);return M.read(u,E,0,g,0),a.encoding==="utf8"&&(E=Nt(E)),M.close(u),E},writeFile(s,a,u={}){u.flags=u.flags||577;var f=M.open(s,u.flags,u.mode);if(typeof a=="string"&&(a=new Uint8Array($e(a))),ArrayBuffer.isView(a))M.write(f,a,0,a.byteLength,void 0,u.canOwn);else throw new Error("Unsupported data type");M.close(f)},cwd:()=>M.currentPath,chdir(s){var a=M.lookupPath(s,{follow:!0});if(a.node===null)throw new M.ErrnoError(44);if(!M.isDir(a.node.mode))throw new M.ErrnoError(54);var u=M.nodePermissions(a.node,"x");if(u)throw new M.ErrnoError(u);M.currentPath=a.path},createDefaultDirectories(){M.mkdir("/tmp"),M.mkdir("/home"),M.mkdir("/home/web_user")},createDefaultDevices(){M.mkdir("/dev"),M.registerDevice(M.makedev(1,3),{read:()=>0,write:(f,g,E,w,A)=>w,llseek:()=>0}),M.mkdev("/dev/null",M.makedev(1,3)),Ie.register(M.makedev(5,0),Ie.default_tty_ops),Ie.register(M.makedev(6,0),Ie.default_tty1_ops),M.mkdev("/dev/tty",M.makedev(5,0)),M.mkdev("/dev/tty1",M.makedev(6,0));var s=new Uint8Array(1024),a=0,u=()=>(a===0&&(W(s),a=s.byteLength),s[--a]);M.createDevice("/dev","random",u),M.createDevice("/dev","urandom",u),M.mkdir("/dev/shm"),M.mkdir("/dev/shm/tmp")},createSpecialDirectories(){M.mkdir("/proc");var s=M.mkdir("/proc/self");M.mkdir("/proc/self/fd"),M.mount({mount(){var a=M.createNode(s,"fd",16895,73);return a.stream_ops={llseek:De.stream_ops.llseek},a.node_ops={lookup(u,f){var g=+f,E=M.getStreamChecked(g),w={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>E.path},id:g+1};return w.parent=w,w},readdir(){return Array.from(M.streams.entries()).filter(([u,f])=>f).map(([u,f])=>u.toString())}},a}},{},"/proc/self/fd")},createStandardStreams(s,a,u){s?M.createDevice("/dev","stdin",s):M.symlink("/dev/tty","/dev/stdin"),a?M.createDevice("/dev","stdout",null,a):M.symlink("/dev/tty","/dev/stdout"),u?M.createDevice("/dev","stderr",null,u):M.symlink("/dev/tty1","/dev/stderr");var f=M.open("/dev/stdin",0),g=M.open("/dev/stdout",1),E=M.open("/dev/stderr",1);L(f.fd===0,`invalid handle for stdin (${f.fd})`),L(g.fd===1,`invalid handle for stdout (${g.fd})`),L(E.fd===2,`invalid handle for stderr (${E.fd})`)},staticInit(){M.nameTable=new Array(4096),M.mount(De,{},"/"),M.createDefaultDirectories(),M.createDefaultDevices(),M.createSpecialDirectories(),M.filesystems={MEMFS:De}},init(s,a,u){L(!M.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),M.initialized=!0,s??(s=t.stdin),a??(a=t.stdout),u??(u=t.stderr),M.createStandardStreams(s,a,u)},quit(){M.initialized=!1,ta(0);for(var s of M.streams)s&&M.close(s)},findObject(s,a){var u=M.analyzePath(s,a);return u.exists?u.object:null},analyzePath(s,a){try{var u=M.lookupPath(s,{follow:!a});s=u.path}catch{}var f={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var u=M.lookupPath(s,{parent:!0});f.parentExists=!0,f.parentPath=u.path,f.parentObject=u.node,f.name=X.basename(s),u=M.lookupPath(s,{follow:!a}),f.exists=!0,f.path=u.path,f.object=u.node,f.name=u.node.name,f.isRoot=u.path==="/"}catch(g){f.error=g.errno}return f},createPath(s,a,u,f){s=typeof s=="string"?s:M.getPath(s);for(var g=a.split("/").reverse();g.length;){var E=g.pop();if(E){var w=X.join2(s,E);try{M.mkdir(w)}catch(A){if(A.errno!=20)throw A}s=w}}return w},createFile(s,a,u,f,g){var E=X.join2(typeof s=="string"?s:M.getPath(s),a),w=zn(f,g);return M.create(E,w)},createDataFile(s,a,u,f,g,E){var w=a;s&&(s=typeof s=="string"?s:M.getPath(s),w=a?X.join2(s,a):s);var A=zn(f,g),F=M.create(w,A);if(u){if(typeof u=="string"){for(var H=new Array(u.length),K=0,re=u.length;K<re;++K)H[K]=u.charCodeAt(K);u=H}M.chmod(F,A|146);var fe=M.open(F,577);M.write(fe,u,0,u.length,0,E),M.close(fe),M.chmod(F,A)}},createDevice(s,a,u,f){var A;var g=X.join2(typeof s=="string"?s:M.getPath(s),a),E=zn(!!u,!!f);(A=M.createDevice).major??(A.major=64);var w=M.makedev(M.createDevice.major++,0);return M.registerDevice(w,{open(F){F.seekable=!1},close(F){var H;(H=f==null?void 0:f.buffer)!=null&&H.length&&f(10)},read(F,H,K,re,fe){for(var se=0,_e=0;_e<re;_e++){var He;try{He=u()}catch{throw new M.ErrnoError(29)}if(He===void 0&&se===0)throw new M.ErrnoError(6);if(He==null)break;se++,H[K+_e]=He}return se&&(F.node.atime=Date.now()),se},write(F,H,K,re,fe){for(var se=0;se<re;se++)try{f(H[K+se])}catch{throw new M.ErrnoError(29)}return re&&(F.node.mtime=F.node.ctime=Date.now()),se}}),M.mkdev(g,E,w)},forceLoadFile(s){if(s.isDevice||s.isFolder||s.link||s.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{s.contents=S(s.url),s.usedBytes=s.contents.length}catch{throw new M.ErrnoError(29)}},createLazyFile(s,a,u,f,g){class E{constructor(){Dn(this,"lengthKnown",!1);Dn(this,"chunks",[])}get(se){if(!(se>this.length-1||se<0)){var _e=se%this.chunkSize,He=se/this.chunkSize|0;return this.getter(He)[_e]}}setDataGetter(se){this.getter=se}cacheLength(){var se=new XMLHttpRequest;if(se.open("HEAD",u,!1),se.send(null),!(se.status>=200&&se.status<300||se.status===304))throw new Error("Couldn't load "+u+". Status: "+se.status);var _e=Number(se.getResponseHeader("Content-length")),He,ct=(He=se.getResponseHeader("Accept-Ranges"))&&He==="bytes",rt=(He=se.getResponseHeader("Content-Encoding"))&&He==="gzip",Pt=1024*1024;ct||(Pt=_e);var yt=(zt,on)=>{if(zt>on)throw new Error("invalid range ("+zt+", "+on+") or no bytes requested!");if(on>_e-1)throw new Error("only "+_e+" bytes available! programmer error!");var Ct=new XMLHttpRequest;if(Ct.open("GET",u,!1),_e!==Pt&&Ct.setRequestHeader("Range","bytes="+zt+"-"+on),Ct.responseType="arraybuffer",Ct.overrideMimeType&&Ct.overrideMimeType("text/plain; charset=x-user-defined"),Ct.send(null),!(Ct.status>=200&&Ct.status<300||Ct.status===304))throw new Error("Couldn't load "+u+". Status: "+Ct.status);return Ct.response!==void 0?new Uint8Array(Ct.response||[]):$e(Ct.responseText||"")},Jt=this;Jt.setDataGetter(zt=>{var on=zt*Pt,Ct=(zt+1)*Pt-1;if(Ct=Math.min(Ct,_e-1),typeof Jt.chunks[zt]>"u"&&(Jt.chunks[zt]=yt(on,Ct)),typeof Jt.chunks[zt]>"u")throw new Error("doXHR failed!");return Jt.chunks[zt]}),(rt||!_e)&&(Pt=_e=1,_e=this.getter(0).length,Pt=_e,N("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=_e,this._chunkSize=Pt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!r)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var w=new E,A={isDevice:!1,contents:w}}else var A={isDevice:!1,url:u};var F=M.createFile(s,a,A,f,g);A.contents?F.contents=A.contents:A.url&&(F.contents=null,F.url=A.url),Object.defineProperties(F,{usedBytes:{get:function(){return this.contents.length}}});var H={},K=Object.keys(F.stream_ops);K.forEach(fe=>{var se=F.stream_ops[fe];H[fe]=(..._e)=>(M.forceLoadFile(F),se(..._e))});function re(fe,se,_e,He,ct){var rt=fe.node.contents;if(ct>=rt.length)return 0;var Pt=Math.min(rt.length-ct,He);if(L(Pt>=0),rt.slice)for(var yt=0;yt<Pt;yt++)se[_e+yt]=rt[ct+yt];else for(var yt=0;yt<Pt;yt++)se[_e+yt]=rt.get(ct+yt);return Pt}return H.read=(fe,se,_e,He,ct)=>(M.forceLoadFile(F),re(fe,se,_e,He,ct)),H.mmap=(fe,se,_e,He,ct)=>{M.forceLoadFile(F);var rt=ft();if(!rt)throw new M.ErrnoError(48);return re(fe,ee,rt,se,_e),{ptr:rt,allocated:!0}},F.stream_ops=H,F},absolutePath(){le("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){le("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){le("FS.createLink has been removed; use FS.symlink instead")},joinPath(){le("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){le("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){le("FS.standardizePath has been removed; use PATH.normalize instead")}},pt={DEFAULT_POLLMASK:5,calculateAt(s,a,u){if(X.isAbs(a))return a;var f;if(s===-100)f=M.cwd();else{var g=pt.getStreamFromFD(s);f=g.path}if(a.length==0){if(!u)throw new M.ErrnoError(44);return f}return f+"/"+a},writeStat(s,a){de[s>>2]=a.dev,de[s+4>>2]=a.mode,Se[s+8>>2]=a.nlink,de[s+12>>2]=a.uid,de[s+16>>2]=a.gid,de[s+20>>2]=a.rdev,Ze[s+24>>3]=BigInt(a.size),de[s+32>>2]=4096,de[s+36>>2]=a.blocks;var u=a.atime.getTime(),f=a.mtime.getTime(),g=a.ctime.getTime();return Ze[s+40>>3]=BigInt(Math.floor(u/1e3)),Se[s+48>>2]=u%1e3*1e3*1e3,Ze[s+56>>3]=BigInt(Math.floor(f/1e3)),Se[s+64>>2]=f%1e3*1e3*1e3,Ze[s+72>>3]=BigInt(Math.floor(g/1e3)),Se[s+80>>2]=g%1e3*1e3*1e3,Ze[s+88>>3]=BigInt(a.ino),0},writeStatFs(s,a){de[s+4>>2]=a.bsize,de[s+40>>2]=a.bsize,de[s+8>>2]=a.blocks,de[s+12>>2]=a.bfree,de[s+16>>2]=a.bavail,de[s+20>>2]=a.files,de[s+24>>2]=a.ffree,de[s+28>>2]=a.fsid,de[s+44>>2]=a.flags,de[s+36>>2]=a.namelen},doMsync(s,a,u,f,g){if(!M.isFile(a.node.mode))throw new M.ErrnoError(43);if(f&2)return 0;var E=pe.slice(s,s+u);M.msync(a,E,g,u,f)},getStreamFromFD(s){var a=M.getStreamChecked(s);return a},varargs:void 0,getStr(s){var a=ot(s);return a}};function Ui(s,a,u){try{var f=pt.getStreamFromFD(s);if(L(!u),f.fd===a)return-28;if(a<0||a>=M.MAX_OPEN_FDS)return-8;var g=M.getStream(a);return g&&M.close(g),M.dupStream(f,a).fd}catch(E){if(typeof M>"u"||E.name!=="ErrnoError")throw E;return-E.errno}}var Yt=()=>{L(pt.varargs!=null);var s=de[+pt.varargs>>2];return pt.varargs+=4,s},sn=Yt;function Hn(s,a,u){pt.varargs=u;try{var f=pt.getStreamFromFD(s);switch(a){case 0:{var g=Yt();if(g<0)return-28;for(;M.streams[g];)g++;var E;return E=M.dupStream(f,g),E.fd}case 1:case 2:return 0;case 3:return f.flags;case 4:{var g=Yt();return f.flags|=g,0}case 12:{var g=sn(),w=0;return Le[g+w>>1]=2,0}case 13:case 14:return 0}return-28}catch(A){if(typeof M>"u"||A.name!=="ErrnoError")throw A;return-A.errno}}function As(s,a){try{return pt.writeStat(a,M.fstat(s))}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function wd(s,a,u){pt.varargs=u;try{var f=pt.getStreamFromFD(s);switch(a){case 21509:return f.tty?0:-59;case 21505:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcgets){var g=f.tty.ops.ioctl_tcgets(f),E=sn();de[E>>2]=g.c_iflag||0,de[E+4>>2]=g.c_oflag||0,de[E+8>>2]=g.c_cflag||0,de[E+12>>2]=g.c_lflag||0;for(var w=0;w<32;w++)ee[E+w+17]=g.c_cc[w]||0;return 0}return 0}case 21510:case 21511:case 21512:return f.tty?0:-59;case 21506:case 21507:case 21508:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcsets){for(var E=sn(),A=de[E>>2],F=de[E+4>>2],H=de[E+8>>2],K=de[E+12>>2],re=[],w=0;w<32;w++)re.push(ee[E+w+17]);return f.tty.ops.ioctl_tcsets(f.tty,a,{c_iflag:A,c_oflag:F,c_cflag:H,c_lflag:K,c_cc:re})}return 0}case 21519:{if(!f.tty)return-59;var E=sn();return de[E>>2]=0,0}case 21520:return f.tty?-28:-59;case 21531:{var E=sn();return M.ioctl(f,a,E)}case 21523:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tiocgwinsz){var fe=f.tty.ops.ioctl_tiocgwinsz(f.tty),E=sn();Le[E>>1]=fe[0],Le[E+2>>1]=fe[1]}return 0}case 21524:return f.tty?0:-59;case 21515:return f.tty?0:-59;default:return-28}}catch(se){if(typeof M>"u"||se.name!=="ErrnoError")throw se;return-se.errno}}function Ad(s,a){try{return s=pt.getStr(s),pt.writeStat(a,M.lstat(s))}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function Rd(s,a,u,f){try{a=pt.getStr(a);var g=f&256,E=f&4096;return f=f&-6401,L(!f,`unknown flags in __syscall_newfstatat: ${f}`),a=pt.calculateAt(s,a,E),pt.writeStat(u,g?M.lstat(a):M.stat(a))}catch(w){if(typeof M>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function Cd(s,a,u,f){pt.varargs=f;try{a=pt.getStr(a),a=pt.calculateAt(s,a);var g=f?Yt():0;return M.open(a,u,g).fd}catch(E){if(typeof M>"u"||E.name!=="ErrnoError")throw E;return-E.errno}}function Pd(s,a){try{return s=pt.getStr(s),pt.writeStat(a,M.stat(s))}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}var Dd=()=>le("native code called abort()"),kt=s=>{for(var a="";;){var u=pe[s++];if(!u)return a;a+=String.fromCharCode(u)}},sr={},Oi={},Rs={},$r=class extends Error{constructor(a){super(a),this.name="BindingError"}},mt=s=>{throw new $r(s)};function Ld(s,a,u={}){var f=a.name;if(s||mt(`type "${f}" must have a positive integer typeid pointer`),Oi.hasOwnProperty(s)){if(u.ignoreDuplicateRegistrations)return;mt(`Cannot register type '${f}' twice`)}if(Oi[s]=a,delete Rs[s],sr.hasOwnProperty(s)){var g=sr[s];delete sr[s],g.forEach(E=>E())}}function Mn(s,a,u={}){if(a.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return Ld(s,a,u)}var nl=(s,a,u)=>{switch(a){case 1:return u?f=>ee[f]:f=>pe[f];case 2:return u?f=>Le[f>>1]:f=>Me[f>>1];case 4:return u?f=>de[f>>2]:f=>Se[f>>2];case 8:return u?f=>Ze[f>>3]:f=>Lt[f>>3];default:throw new TypeError(`invalid integer width (${a}): ${s}`)}},ki=s=>{if(s===null)return"null";var a=typeof s;return a==="object"||a==="array"||a==="function"?s.toString():""+s},il=(s,a,u,f)=>{if(a<u||a>f)throw new TypeError(`Passing a number "${ki(a)}" from JS side to C/C++ side to an argument of type "${s}", which is outside the valid range [${u}, ${f}]!`)},Id=(s,a,u,f,g)=>{a=kt(a);const E=f===0n;let w=A=>A;if(E){const A=u*8;w=F=>BigInt.asUintN(A,F),g=w(g)}Mn(s,{name:a,fromWireType:w,toWireType:(A,F)=>{if(typeof F=="number")F=BigInt(F);else if(typeof F!="bigint")throw new TypeError(`Cannot convert "${ki(F)}" to ${this.name}`);return il(a,F,f,g),F},argPackAdvance:Vn,readValueFromPointer:nl(a,u,!E),destructorFunction:null})},Vn=8,Nd=(s,a,u,f)=>{a=kt(a),Mn(s,{name:a,fromWireType:function(g){return!!g},toWireType:function(g,E){return E?u:f},argPackAdvance:Vn,readValueFromPointer:function(g){return this.fromWireType(pe[g])},destructorFunction:null})},Fd=s=>({count:s.count,deleteScheduled:s.deleteScheduled,preservePointerOnDelete:s.preservePointerOnDelete,ptr:s.ptr,ptrType:s.ptrType,smartPtr:s.smartPtr,smartPtrType:s.smartPtrType}),Xo=s=>{function a(u){return u.$$.ptrType.registeredClass.name}mt(a(s)+" instance already deleted")},jo=!1,rl=s=>{},Ud=s=>{s.smartPtr?s.smartPtrType.rawDestructor(s.smartPtr):s.ptrType.registeredClass.rawDestructor(s.ptr)},sl=s=>{s.count.value-=1;var a=s.count.value===0;a&&Ud(s)},ol=(s,a,u)=>{if(a===u)return s;if(u.baseClass===void 0)return null;var f=ol(s,a,u.baseClass);return f===null?null:u.downcast(f)},al={},Od={},kd=(s,a)=>{for(a===void 0&&mt("ptr should not be undefined");s.baseClass;)a=s.upcast(a),s=s.baseClass;return a},Bd=(s,a)=>(a=kd(s,a),Od[a]),zd=class extends Error{constructor(a){super(a),this.name="InternalError"}},Cs=s=>{throw new zd(s)},Ps=(s,a)=>{(!a.ptrType||!a.ptr)&&Cs("makeClassHandle requires ptr and ptrType");var u=!!a.smartPtrType,f=!!a.smartPtr;return u!==f&&Cs("Both smartPtrType and smartPtr must be specified"),a.count={value:1},Yr(Object.create(s,{$$:{value:a,writable:!0}}))};function cl(s){var a=this.getPointee(s);if(!a)return this.destructor(s),null;var u=Bd(this.registeredClass,a);if(u!==void 0){if(u.$$.count.value===0)return u.$$.ptr=a,u.$$.smartPtr=s,u.clone();var f=u.clone();return this.destructor(s),f}function g(){return this.isSmartPointer?Ps(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:a,smartPtrType:this,smartPtr:s}):Ps(this.registeredClass.instancePrototype,{ptrType:this,ptr:s})}var E=this.registeredClass.getActualType(a),w=al[E];if(!w)return g.call(this);var A;this.isConst?A=w.constPointerType:A=w.pointerType;var F=ol(a,this.registeredClass,A.registeredClass);return F===null?g.call(this):this.isSmartPointer?Ps(A.registeredClass.instancePrototype,{ptrType:A,ptr:F,smartPtrType:this,smartPtr:s}):Ps(A.registeredClass.instancePrototype,{ptrType:A,ptr:F})}var Yr=s=>typeof FinalizationRegistry>"u"?(Yr=a=>a,s):(jo=new FinalizationRegistry(a=>{console.warn(a.leakWarning),sl(a.$$)}),Yr=a=>{var u=a.$$,f=!!u.smartPtr;if(f){var g={$$:u},E=u.ptrType.registeredClass,w=new Error(`Embind found a leaked C++ instance ${E.name} <${ue(u.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(w,cl),g.leakWarning=w.stack.replace(/^Error: /,""),jo.register(a,g,a)}return a},rl=a=>jo.unregister(a),Yr(s)),Hd=()=>{let s=Ds.prototype;Object.assign(s,{isAliasOf(u){if(!(this instanceof Ds)||!(u instanceof Ds))return!1;var f=this.$$.ptrType.registeredClass,g=this.$$.ptr;u.$$=u.$$;for(var E=u.$$.ptrType.registeredClass,w=u.$$.ptr;f.baseClass;)g=f.upcast(g),f=f.baseClass;for(;E.baseClass;)w=E.upcast(w),E=E.baseClass;return f===E&&g===w},clone(){if(this.$$.ptr||Xo(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var u=Yr(Object.create(Object.getPrototypeOf(this),{$$:{value:Fd(this.$$)}}));return u.$$.count.value+=1,u.$$.deleteScheduled=!1,u},delete(){this.$$.ptr||Xo(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&mt("Object already scheduled for deletion"),rl(this),sl(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Xo(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&mt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const a=Symbol.dispose;a&&(s[a]=s.delete)};function Ds(){}var Ls=(s,a)=>Object.defineProperty(a,"name",{value:s}),$o=(s,a,u)=>{if(s[a].overloadTable===void 0){var f=s[a];s[a]=function(...g){return s[a].overloadTable.hasOwnProperty(g.length)||mt(`Function '${u}' called with an invalid number of arguments (${g.length}) - expects one of (${s[a].overloadTable})!`),s[a].overloadTable[g.length].apply(this,g)},s[a].overloadTable=[],s[a].overloadTable[f.argCount]=f}},Yo=(s,a,u)=>{t.hasOwnProperty(s)?((u===void 0||t[s].overloadTable!==void 0&&t[s].overloadTable[u]!==void 0)&&mt(`Cannot register public name '${s}' twice`),$o(t,s,s),t[s].overloadTable.hasOwnProperty(u)&&mt(`Cannot register multiple overloads of a function with the same number of arguments (${u})!`),t[s].overloadTable[u]=a):(t[s]=a,t[s].argCount=u)},Vd=48,Gd=57,Wd=s=>{L(typeof s=="string"),s=s.replace(/[^a-zA-Z0-9_]/g,"$");var a=s.charCodeAt(0);return a>=Vd&&a<=Gd?`_${s}`:s};function Xd(s,a,u,f,g,E,w,A){this.name=s,this.constructor=a,this.instancePrototype=u,this.rawDestructor=f,this.baseClass=g,this.getActualType=E,this.upcast=w,this.downcast=A,this.pureVirtualFunctions=[]}var Is=(s,a,u)=>{for(;a!==u;)a.upcast||mt(`Expected null or instance of ${u.name}, got an instance of ${a.name}`),s=a.upcast(s),a=a.baseClass;return s};function jd(s,a){if(a===null)return this.isReference&&mt(`null is not a valid ${this.name}`),0;a.$$||mt(`Cannot pass "${ki(a)}" as a ${this.name}`),a.$$.ptr||mt(`Cannot pass deleted object as a pointer of type ${this.name}`);var u=a.$$.ptrType.registeredClass,f=Is(a.$$.ptr,u,this.registeredClass);return f}function $d(s,a){var u;if(a===null)return this.isReference&&mt(`null is not a valid ${this.name}`),this.isSmartPointer?(u=this.rawConstructor(),s!==null&&s.push(this.rawDestructor,u),u):0;(!a||!a.$$)&&mt(`Cannot pass "${ki(a)}" as a ${this.name}`),a.$$.ptr||mt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&a.$$.ptrType.isConst&&mt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);var f=a.$$.ptrType.registeredClass;if(u=Is(a.$$.ptr,f,this.registeredClass),this.isSmartPointer)switch(a.$$.smartPtr===void 0&&mt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:a.$$.smartPtrType===this?u=a.$$.smartPtr:mt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:u=a.$$.smartPtr;break;case 2:if(a.$$.smartPtrType===this)u=a.$$.smartPtr;else{var g=a.clone();u=this.rawShare(u,Bt.toHandle(()=>g.delete())),s!==null&&s.push(this.rawDestructor,u)}break;default:mt("Unsupporting sharing policy")}return u}function Yd(s,a){if(a===null)return this.isReference&&mt(`null is not a valid ${this.name}`),0;a.$$||mt(`Cannot pass "${ki(a)}" as a ${this.name}`),a.$$.ptr||mt(`Cannot pass deleted object as a pointer of type ${this.name}`),a.$$.ptrType.isConst&&mt(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);var u=a.$$.ptrType.registeredClass,f=Is(a.$$.ptr,u,this.registeredClass);return f}function Ns(s){return this.fromWireType(Se[s>>2])}var qd=()=>{Object.assign(Fs.prototype,{getPointee(s){return this.rawGetPointee&&(s=this.rawGetPointee(s)),s},destructor(s){var a;(a=this.rawDestructor)==null||a.call(this,s)},argPackAdvance:Vn,readValueFromPointer:Ns,fromWireType:cl})};function Fs(s,a,u,f,g,E,w,A,F,H,K){this.name=s,this.registeredClass=a,this.isReference=u,this.isConst=f,this.isSmartPointer=g,this.pointeeType=E,this.sharingPolicy=w,this.rawGetPointee=A,this.rawConstructor=F,this.rawShare=H,this.rawDestructor=K,!g&&a.baseClass===void 0?f?(this.toWireType=jd,this.destructorFunction=null):(this.toWireType=Yd,this.destructorFunction=null):this.toWireType=$d}var ll=(s,a,u)=>{t.hasOwnProperty(s)||Cs("Replacing nonexistent public symbol"),t[s].overloadTable!==void 0&&u!==void 0?t[s].overloadTable[u]=a:(t[s]=a,t[s].argCount=u)},ul=[],Us,ve=s=>{var a=ul[s];return a||(ul[s]=a=Us.get(s)),L(Us.get(s)==a,"JavaScript-side Wasm function table mirror is out of date!"),a},Gn=(s,a,u=!1)=>{L(!u,"Async bindings are only supported with JSPI."),s=kt(s);function f(){var E=ve(a);return E}var g=f();return typeof g!="function"&&mt(`unknown function pointer with signature ${s}: ${a}`),g};class Kd extends Error{}var hl=s=>{var a=Pl(s),u=kt(a);return Xn(a),u},Bi=(s,a)=>{var u=[],f={};function g(E){if(!f[E]&&!Oi[E]){if(Rs[E]){Rs[E].forEach(g);return}u.push(E),f[E]=!0}}throw a.forEach(g),new Kd(`${s}: `+u.map(hl).join([", "]))},Pn=(s,a,u)=>{s.forEach(A=>Rs[A]=a);function f(A){var F=u(A);F.length!==s.length&&Cs("Mismatched type converter count");for(var H=0;H<s.length;++H)Mn(s[H],F[H])}var g=new Array(a.length),E=[],w=0;a.forEach((A,F)=>{Oi.hasOwnProperty(A)?g[F]=Oi[A]:(E.push(A),sr.hasOwnProperty(A)||(sr[A]=[]),sr[A].push(()=>{g[F]=Oi[A],++w,w===E.length&&f(g)}))}),E.length===0&&f(g)},Zd=(s,a,u,f,g,E,w,A,F,H,K,re,fe)=>{K=kt(K),E=Gn(g,E),A&&(A=Gn(w,A)),H&&(H=Gn(F,H)),fe=Gn(re,fe);var se=Wd(K);Yo(se,function(){Bi(`Cannot construct ${K} due to unbound types`,[f])}),Pn([s,a,u],f?[f]:[],_e=>{var Ct;_e=_e[0];var He,ct;f?(He=_e.registeredClass,ct=He.instancePrototype):ct=Ds.prototype;var rt=Ls(K,function(...xi){if(Object.getPrototypeOf(this)!==Pt)throw new $r(`Use 'new' to construct ${K}`);if(yt.constructor_body===void 0)throw new $r(`${K} has no accessible constructor`);var Ws=yt.constructor_body[xi.length];if(Ws===void 0)throw new $r(`Tried to invoke ctor of ${K} with invalid number of parameters (${xi.length}) - expected (${Object.keys(yt.constructor_body).toString()}) parameters instead!`);return Ws.apply(this,xi)}),Pt=Object.create(ct,{constructor:{value:rt}});rt.prototype=Pt;var yt=new Xd(K,rt,Pt,fe,He,E,A,H);yt.baseClass&&((Ct=yt.baseClass).__derivedClasses??(Ct.__derivedClasses=[]),yt.baseClass.__derivedClasses.push(yt));var Jt=new Fs(K,yt,!0,!1,!1),zt=new Fs(K+"*",yt,!1,!1,!1),on=new Fs(K+" const*",yt,!1,!0,!1);return al[s]={pointerType:zt,constPointerType:on},ll(se,rt),[Jt,zt,on]})},qo=s=>{for(;s.length;){var a=s.pop(),u=s.pop();u(a)}};function dl(s){for(var a=1;a<s.length;++a)if(s[a]!==null&&s[a].destructorFunction===void 0)return!0;return!1}function Jd(s,a,u,f,g){if(s<a||s>u){var E=a==u?a:`${a} to ${u}`;g(`function ${f} called with ${s} arguments, expected ${E}`)}}function Qd(s,a,u,f){var g=dl(s),E=s.length-2,w=[],A=["fn"];a&&A.push("thisWired");for(var F=0;F<E;++F)w.push(`arg${F}`),A.push(`arg${F}Wired`);w=w.join(","),A=A.join(",");var H=`return function (${w}) {
`;H+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,g&&(H+=`var destructors = [];
`);var K=g?"destructors":"null",re=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];a&&(H+=`var thisWired = classParam['toWireType'](${K}, this);
`);for(var F=0;F<E;++F)H+=`var arg${F}Wired = argType${F}['toWireType'](${K}, arg${F});
`,re.push(`argType${F}`);if(H+=(u||f?"var rv = ":"")+`invoker(${A});
`,g)H+=`runDestructors(destructors);
`;else for(var F=a?1:2;F<s.length;++F){var fe=F===1?"thisWired":"arg"+(F-2)+"Wired";s[F].destructorFunction!==null&&(H+=`${fe}_dtor(${fe});
`,re.push(`${fe}_dtor`))}return u&&(H+=`var ret = retType['fromWireType'](rv);
return ret;
`),H+=`}
`,re.push("checkArgCount","minArgs","maxArgs"),H=`if (arguments.length !== ${re.length}){ throw new Error(humanName + "Expected ${re.length} closure arguments " + arguments.length + " given."); }
${H}`,[re,H]}function ef(s){for(var a=s.length-2,u=s.length-1;u>=2&&s[u].optional;--u)a--;return a}function Os(s,a,u,f,g,E){var w=a.length;w<2&&mt("argTypes array size mismatch! Must at least get return value and 'this' types!"),L(!E,"Async bindings are only supported with JSPI.");for(var A=a[1]!==null&&u!==null,F=dl(a),H=a[0].name!=="void",K=w-2,re=ef(a),fe=[s,mt,f,g,qo,a[0],a[1]],se=0;se<w-2;++se)fe.push(a[se+2]);if(!F)for(var se=A?1:2;se<a.length;++se)a[se].destructorFunction!==null&&fe.push(a[se].destructorFunction);fe.push(Jd,re,K);let[_e,He]=Qd(a,A,H,E);var ct=new Function(..._e,He)(...fe);return Ls(s,ct)}var ks=(s,a)=>{for(var u=[],f=0;f<s;f++)u.push(Se[a+f*4>>2]);return u},Ko=s=>{s=s.trim();const a=s.indexOf("(");return a===-1?s:(L(s.endsWith(")"),"Parentheses for argument names should match."),s.slice(0,a))},tf=(s,a,u,f,g,E,w,A,F)=>{var H=ks(u,f);a=kt(a),a=Ko(a),E=Gn(g,E,A),Pn([],[s],K=>{K=K[0];var re=`${K.name}.${a}`;function fe(){Bi(`Cannot call ${re} due to unbound types`,H)}a.startsWith("@@")&&(a=Symbol[a.substring(2)]);var se=K.registeredClass.constructor;return se[a]===void 0?(fe.argCount=u-1,se[a]=fe):($o(se,a,re),se[a].overloadTable[u-1]=fe),Pn([],H,_e=>{var He=[_e[0],null].concat(_e.slice(1)),ct=Os(re,He,null,E,w,A);if(se[a].overloadTable===void 0?(ct.argCount=u-1,se[a]=ct):se[a].overloadTable[u-1]=ct,K.registeredClass.__derivedClasses)for(const rt of K.registeredClass.__derivedClasses)rt.constructor.hasOwnProperty(a)||(rt.constructor[a]=ct);return[]}),[]})},nf=(s,a,u,f,g,E)=>{L(a>0);var w=ks(a,u);g=Gn(f,g),Pn([],[s],A=>{A=A[0];var F=`constructor ${A.name}`;if(A.registeredClass.constructor_body===void 0&&(A.registeredClass.constructor_body=[]),A.registeredClass.constructor_body[a-1]!==void 0)throw new $r(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${A.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return A.registeredClass.constructor_body[a-1]=()=>{Bi(`Cannot construct ${A.name} due to unbound types`,w)},Pn([],w,H=>(H.splice(1,0,null),A.registeredClass.constructor_body[a-1]=Os(F,H,null,g,E),[])),[]})},rf=(s,a,u,f,g,E,w,A,F,H)=>{var K=ks(u,f);a=kt(a),a=Ko(a),E=Gn(g,E,F),Pn([],[s],re=>{re=re[0];var fe=`${re.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]),A&&re.registeredClass.pureVirtualFunctions.push(a);function se(){Bi(`Cannot call ${fe} due to unbound types`,K)}var _e=re.registeredClass.instancePrototype,He=_e[a];return He===void 0||He.overloadTable===void 0&&He.className!==re.name&&He.argCount===u-2?(se.argCount=u-2,se.className=re.name,_e[a]=se):($o(_e,a,fe),_e[a].overloadTable[u-2]=se),Pn([],K,ct=>{var rt=Os(fe,ct,re,E,w,F);return _e[a].overloadTable===void 0?(rt.argCount=u-2,_e[a]=rt):_e[a].overloadTable[u-2]=rt,[]}),[]})},fl=(s,a,u)=>(s instanceof Object||mt(`${u} with invalid "this": ${s}`),s instanceof a.registeredClass.constructor||mt(`${u} incompatible with "this" of type ${s.constructor.name}`),s.$$.ptr||mt(`cannot call emscripten binding method ${u} on deleted object`),Is(s.$$.ptr,s.$$.ptrType.registeredClass,a.registeredClass)),sf=(s,a,u,f,g,E,w,A,F,H)=>{a=kt(a),g=Gn(f,g),Pn([],[s],K=>{K=K[0];var re=`${K.name}.${a}`,fe={get(){Bi(`Cannot access ${re} due to unbound types`,[u,w])},enumerable:!0,configurable:!0};return F?fe.set=()=>Bi(`Cannot access ${re} due to unbound types`,[u,w]):fe.set=se=>mt(re+" is a read-only property"),Object.defineProperty(K.registeredClass.instancePrototype,a,fe),Pn([],F?[u,w]:[u],se=>{var _e=se[0],He={get(){var rt=fl(this,K,re+" getter");return _e.fromWireType(g(E,rt))},enumerable:!0};if(F){F=Gn(A,F);var ct=se[1];He.set=function(rt){var Pt=fl(this,K,re+" setter"),yt=[];F(H,Pt,ct.toWireType(yt,rt)),qo(yt)}}return Object.defineProperty(K.registeredClass.instancePrototype,a,He),[]}),[]})},of=(s,a,u)=>{s=kt(s),Pn([],[a],f=>(f=f[0],t[s]=f.fromWireType(u),[]))},pl=[],Wn=[0,1,,1,null,1,!0,1,!1,1],Zo=s=>{s>9&&--Wn[s+1]===0&&(L(Wn[s]!==void 0,"Decref for unallocated handle."),Wn[s]=void 0,pl.push(s))},Bt={toValue:s=>(s||mt(`Cannot use deleted val. handle = ${s}`),L(s===2||Wn[s]!==void 0&&s%2===0,`invalid handle: ${s}`),Wn[s]),toHandle:s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const a=pl.pop()||Wn.length;return Wn[a]=s,Wn[a+1]=1,a}}}},ml={name:"emscripten::val",fromWireType:s=>{var a=Bt.toValue(s);return Zo(s),a},toWireType:(s,a)=>Bt.toHandle(a),argPackAdvance:Vn,readValueFromPointer:Ns,destructorFunction:null},_l=s=>Mn(s,ml),af=(s,a,u)=>{switch(a){case 1:return u?function(f){return this.fromWireType(ee[f])}:function(f){return this.fromWireType(pe[f])};case 2:return u?function(f){return this.fromWireType(Le[f>>1])}:function(f){return this.fromWireType(Me[f>>1])};case 4:return u?function(f){return this.fromWireType(de[f>>2])}:function(f){return this.fromWireType(Se[f>>2])};default:throw new TypeError(`invalid integer width (${a}): ${s}`)}},cf=(s,a,u,f)=>{a=kt(a);function g(){}g.values={},Mn(s,{name:a,constructor:g,fromWireType:function(E){return this.constructor.values[E]},toWireType:(E,w)=>w.value,argPackAdvance:Vn,readValueFromPointer:af(a,u,f),destructorFunction:null}),Yo(a,g)},Bs=(s,a)=>{var u=Oi[s];return u===void 0&&mt(`${a} has unknown type ${hl(s)}`),u},lf=(s,a,u)=>{var f=Bs(s,"enum");a=kt(a);var g=f.constructor,E=Object.create(f.constructor.prototype,{value:{value:u},constructor:{value:Ls(`${f.name}_${a}`,function(){})}});g.values[u]=E,g[a]=E},uf=(s,a)=>{switch(a){case 4:return function(u){return this.fromWireType(it[u>>2])};case 8:return function(u){return this.fromWireType(At[u>>3])};default:throw new TypeError(`invalid float width (${a}): ${s}`)}},hf=(s,a,u)=>{a=kt(a),Mn(s,{name:a,fromWireType:f=>f,toWireType:(f,g)=>{if(typeof g!="number"&&typeof g!="boolean")throw new TypeError(`Cannot convert ${ki(g)} to ${this.name}`);return g},argPackAdvance:Vn,readValueFromPointer:uf(a,u),destructorFunction:null})},df=(s,a,u,f,g,E,w,A)=>{var F=ks(a,u);s=kt(s),s=Ko(s),g=Gn(f,g,w),Yo(s,function(){Bi(`Cannot call ${s} due to unbound types`,F)},a-1),Pn([],F,H=>{var K=[H[0],null].concat(H.slice(1));return ll(s,Os(s,K,null,g,E,w),a-1),[]})},ff=(s,a,u,f,g)=>{a=kt(a);const E=f===0;let w=F=>F;if(E){var A=32-8*u;w=F=>F<<A>>>A,g=w(g)}Mn(s,{name:a,fromWireType:w,toWireType:(F,H)=>{if(typeof H!="number"&&typeof H!="boolean")throw new TypeError(`Cannot convert "${ki(H)}" to ${a}`);return il(a,H,f,g),H},argPackAdvance:Vn,readValueFromPointer:nl(a,u,f!==0),destructorFunction:null})},pf=(s,a,u)=>{var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],g=f[a];function E(w){var A=Se[w>>2],F=Se[w+4>>2];return new g(ee.buffer,F,A)}u=kt(u),Mn(s,{name:u,fromWireType:E,argPackAdvance:Vn,readValueFromPointer:E},{ignoreDuplicateRegistrations:!0})},mf=Object.assign({optional:!0},ml),_f=(s,a)=>{Mn(s,mf)},zi=(s,a,u)=>(L(typeof u=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),Be(s,pe,a,u)),gf=(s,a)=>{a=kt(a),Mn(s,{name:a,fromWireType(u){for(var f=Se[u>>2],g=u+4,E,w,A=g,w=0;w<=f;++w){var F=g+w;if(w==f||pe[F]==0){var H=F-A,K=ot(A,H);E===void 0?E=K:(E+="\0",E+=K),A=F+1}}return Xn(u),E},toWireType(u,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g,E=typeof f=="string";E||ArrayBuffer.isView(f)&&f.BYTES_PER_ELEMENT==1||mt("Cannot pass non-string to std::string"),E?g=Oe(f):g=f.length;var w=ea(4+g+1),A=w+4;return Se[w>>2]=g,E?zi(f,A,g+1):pe.set(f,A),u!==null&&u.push(Xn,w),w},argPackAdvance:Vn,readValueFromPointer:Ns,destructorFunction(u){Xn(u)}})},gl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,vf=(s,a)=>{L(s%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var u=s>>1,f=u+a/2,g=u;!(g>=f)&&Me[g];)++g;if(g-u>16&&gl)return gl.decode(Me.subarray(u,g));for(var E="",w=u;!(w>=f);++w){var A=Me[w];if(A==0)break;E+=String.fromCharCode(A)}return E},yf=(s,a,u)=>{if(L(a%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),L(typeof u=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??(u=2147483647),u<2)return 0;u-=2;for(var f=a,g=u<s.length*2?u/2:s.length,E=0;E<g;++E){var w=s.charCodeAt(E);Le[a>>1]=w,a+=2}return Le[a>>1]=0,a-f},xf=s=>s.length*2,Ef=(s,a)=>{L(s%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var u="",f=0;!(f>=a/4);f++){var g=de[s+f*4>>2];if(!g)break;u+=String.fromCodePoint(g)}return u},Sf=(s,a,u)=>{if(L(a%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),L(typeof u=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??(u=2147483647),u<4)return 0;for(var f=a,g=f+u-4,E=0;E<s.length;++E){var w=s.codePointAt(E);if(w>65535&&E++,de[a>>2]=w,a+=4,a+4>g)break}return de[a>>2]=0,a-f},Mf=s=>{for(var a=0,u=0;u<s.length;++u){var f=s.codePointAt(u);f>65535&&u++,a+=4}return a},Tf=(s,a,u)=>{u=kt(u);var f,g,E,w;a===2?(f=vf,g=yf,w=xf,E=A=>Me[A>>1]):a===4&&(f=Ef,g=Sf,w=Mf,E=A=>Se[A>>2]),Mn(s,{name:u,fromWireType:A=>{for(var F=Se[A>>2],H,K=A+4,re=0;re<=F;++re){var fe=A+4+re*a;if(re==F||E(fe)==0){var se=fe-K,_e=f(K,se);H===void 0?H=_e:(H+="\0",H+=_e),K=fe+a}}return Xn(A),H},toWireType:(A,F)=>{typeof F!="string"&&mt(`Cannot pass non-string to C++ string type ${u}`);var H=w(F),K=ea(4+H+a);return Se[K>>2]=H/a,g(F,K+4,H+a),A!==null&&A.push(Xn,K),K},argPackAdvance:Vn,readValueFromPointer:Ns,destructorFunction(A){Xn(A)}})},bf=(s,a)=>{_l(s)},wf=(s,a)=>{a=kt(a),Mn(s,{isVoid:!0,name:a,argPackAdvance:0,fromWireType:()=>{},toWireType:(u,f)=>{}})},Af=()=>{throw new k},vl=(s,a,u)=>{var f=[],g=s.toWireType(f,u);return f.length&&(Se[a>>2]=Bt.toHandle(f)),g},Rf=(s,a,u)=>(s=Bt.toValue(s),a=Bs(a,"emval::as"),vl(a,u,s)),zs=[],Cf=(s,a,u,f)=>(s=zs[s],a=Bt.toValue(a),s(null,a,u,f)),Pf={},Jo=s=>{var a=Pf[s];return a===void 0?kt(s):a},Df=(s,a,u,f,g)=>(s=zs[s],a=Bt.toValue(a),u=Jo(u),s(a,a[u],f,g)),yl=()=>globalThis,Lf=s=>s===0?Bt.toHandle(yl()):(s=Jo(s),Bt.toHandle(yl()[s])),If=s=>{var a=zs.length;return zs.push(s),a},Nf=(s,a)=>{for(var u=new Array(s),f=0;f<s;++f)u[f]=Bs(Se[a+f*4>>2],`parameter ${f}`);return u},Ff=(s,a,u)=>{var f=Nf(s,a),g=f.shift();s--;var E=`return function (obj, func, destructorsRef, args) {
`,w=0,A=[];u===0&&A.push("obj");for(var F=["retType"],H=[g],K=0;K<s;++K)A.push(`arg${K}`),F.push(`argType${K}`),H.push(f[K]),E+=`  var arg${K} = argType${K}.readValueFromPointer(args${w?"+"+w:""});
`,w+=f[K].argPackAdvance;var re=u===1?"new func":"func.call";E+=`  var rv = ${re}(${A.join(", ")});
`,g.isVoid||(F.push("emval_returnValue"),H.push(vl),E+=`  return emval_returnValue(retType, destructorsRef, rv);
`),E+=`};
`;var fe=new Function(...F,E)(...H),se=`methodCaller<(${f.map(_e=>_e.name).join(", ")}) => ${g.name}>`;return If(Ls(se,fe))},Uf=(s,a)=>(s=Bt.toValue(s),a=Bt.toValue(a),Bt.toHandle(s[a])),Of=s=>{s>9&&(Wn[s+1]+=1)},kf=s=>(s=Bt.toValue(s),typeof s=="number"),Bf=s=>(s=Bt.toValue(s),typeof s=="string"),zf=()=>Bt.toHandle([]),Hf=s=>Bt.toHandle(Jo(s)),Vf=s=>{var a=Bt.toValue(s);qo(a),Zo(s)},Gf=(s,a)=>{s=Bs(s,"_emval_take_value");var u=s.readValueFromPointer(a);return Bt.toHandle(u)},Wf=s=>{throw s=Bt.toValue(s),s},Xf=s=>s%4===0&&(s%100!==0||s%400===0),jf=[0,31,60,91,121,152,182,213,244,274,305,335],$f=[0,31,59,90,120,151,181,212,243,273,304,334],xl=s=>{var a=Xf(s.getFullYear()),u=a?jf:$f,f=u[s.getMonth()]+s.getDate()-1;return f},Yf=9007199254740992,qf=-9007199254740992,El=s=>s<qf||s>Yf?NaN:Number(s);function Kf(s,a){s=El(s);var u=new Date(s*1e3);de[a>>2]=u.getSeconds(),de[a+4>>2]=u.getMinutes(),de[a+8>>2]=u.getHours(),de[a+12>>2]=u.getDate(),de[a+16>>2]=u.getMonth(),de[a+20>>2]=u.getFullYear()-1900,de[a+24>>2]=u.getDay();var f=xl(u)|0;de[a+28>>2]=f,de[a+36>>2]=-(u.getTimezoneOffset()*60);var g=new Date(u.getFullYear(),0,1),E=new Date(u.getFullYear(),6,1).getTimezoneOffset(),w=g.getTimezoneOffset(),A=(E!=w&&u.getTimezoneOffset()==Math.min(w,E))|0;de[a+32>>2]=A}var Zf=function(s){var a=(()=>{var u=new Date(de[s+20>>2]+1900,de[s+16>>2],de[s+12>>2],de[s+8>>2],de[s+4>>2],de[s>>2],0),f=de[s+32>>2],g=u.getTimezoneOffset(),E=new Date(u.getFullYear(),0,1),w=new Date(u.getFullYear(),6,1).getTimezoneOffset(),A=E.getTimezoneOffset(),F=Math.min(A,w);if(f<0)de[s+32>>2]=+(w!=A&&F==g);else if(f>0!=(F==g)){var H=Math.max(A,w),K=f>0?F:H;u.setTime(u.getTime()+(K-g)*6e4)}de[s+24>>2]=u.getDay();var re=xl(u)|0;de[s+28>>2]=re,de[s>>2]=u.getSeconds(),de[s+4>>2]=u.getMinutes(),de[s+8>>2]=u.getHours(),de[s+12>>2]=u.getDate(),de[s+16>>2]=u.getMonth(),de[s+20>>2]=u.getYear();var fe=u.getTime();return isNaN(fe)?-1:fe/1e3})();return BigInt(a)},Jf=(s,a,u,f)=>{var g=new Date().getFullYear(),E=new Date(g,0,1),w=new Date(g,6,1),A=E.getTimezoneOffset(),F=w.getTimezoneOffset(),H=Math.max(A,F);Se[s>>2]=H*60,de[a>>2]=+(A!=F);var K=se=>{var _e=se>=0?"-":"+",He=Math.abs(se),ct=String(Math.floor(He/60)).padStart(2,"0"),rt=String(He%60).padStart(2,"0");return`UTC${_e}${ct}${rt}`},re=K(A),fe=K(F);L(re),L(fe),L(Oe(re)<=16,`timezone name truncated to fit in TZNAME_MAX (${re})`),L(Oe(fe)<=16,`timezone name truncated to fit in TZNAME_MAX (${fe})`),F<A?(zi(re,u,17),zi(fe,f,17)):(zi(re,f,17),zi(fe,u,17))},Sl=()=>performance.now(),Ml=()=>Date.now(),Qf=s=>s>=0&&s<=3;function ep(s,a,u){if(!Qf(s))return 28;var f;s===0?f=Ml():f=Sl();var g=Math.round(f*1e3*1e3);return Ze[u>>3]=BigInt(g),0}var Hs=[],tp=(s,a)=>{L(Array.isArray(Hs)),L(a%16==0),Hs.length=0;for(var u;u=pe[s++];){var f=String.fromCharCode(u),g=["d","f","i","p"];g.push("j"),L(g.includes(f),`Invalid character ${u}("${f}") in readEmAsmArgs! Use only [${g}], and do not specify "v" for void return argument.`);var E=u!=105;E&=u!=112,a+=E&&a%8?4:0,Hs.push(u==112?Se[a>>2]:u==106?Ze[a>>3]:u==105?de[a>>2]:At[a>>3]),a+=E?8:4}return Hs},np=(s,a,u)=>{var f=tp(a,u);return L(Cl.hasOwnProperty(s),`No EM_ASM constant found at address ${s}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),Cl[s](...f)},ip=(s,a,u)=>np(s,a,u),Tl=()=>2147483648,rp=()=>Tl(),sp=(s,a)=>(L(a,"alignment argument is required"),Math.ceil(s/a)*a),op=s=>{var a=nt.buffer,u=(s-a.byteLength+65535)/65536|0;try{return nt.grow(u),tn(),1}catch(f){D(`growMemory: Attempted to grow heap from ${a.byteLength} bytes to ${s} bytes, but got error: ${f}`)}},ap=s=>{var a=pe.length;s>>>=0,L(s>a);var u=Tl();if(s>u)return D(`Cannot enlarge memory, requested ${s} bytes, but the limit is ${u} bytes!`),!1;for(var f=1;f<=4;f*=2){var g=a*(1+.2/f);g=Math.min(g,s+100663296);var E=Math.min(u,sp(Math.max(s,g),65536)),w=op(E);if(w)return!0}return D(`Failed to grow the heap from ${a} bytes to ${E} bytes, not enough memory!`),!1},Qo={},cp=()=>h||"./this.program",qr=()=>{if(!qr.strings){var s=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:s,_:cp()};for(var u in Qo)Qo[u]===void 0?delete a[u]:a[u]=Qo[u];var f=[];for(var u in a)f.push(`${u}=${a[u]}`);qr.strings=f}return qr.strings},lp=(s,a)=>{var u=0,f=0;for(var g of qr()){var E=a+u;Se[s+f>>2]=E,u+=zi(g,E,1/0)+1,f+=4}return 0},up=(s,a)=>{var u=qr();Se[s>>2]=u.length;var f=0;for(var g of u)f+=Oe(g)+1;return Se[a>>2]=f,0},bl=0,wl=()=>ie||bl>0,hp=s=>{var a;wl()||((a=t.onExit)==null||a.call(t,s),q=!0),d(s,new Ue(s))},dp=(s,a)=>{if(M_(),wl()&&!a){var u=`program exited (with status: ${s}), but keepRuntimeAlive() is set (counter=${bl}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Xe==null||Xe(u),D(u)}hp(s)},fp=dp;function pp(s){try{var a=pt.getStreamFromFD(s);return M.close(a),0}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return u.errno}}var mp=(s,a,u,f)=>{for(var g=0,E=0;E<u;E++){var w=Se[a>>2],A=Se[a+4>>2];a+=8;var F=M.read(s,ee,w,A,f);if(F<0)return-1;if(g+=F,F<A)break}return g};function _p(s,a,u,f){try{var g=pt.getStreamFromFD(s),E=mp(g,a,u);return Se[f>>2]=E,0}catch(w){if(typeof M>"u"||w.name!=="ErrnoError")throw w;return w.errno}}function gp(s,a,u,f){a=El(a);try{if(isNaN(a))return 61;var g=pt.getStreamFromFD(s);return M.llseek(g,a,u),Ze[f>>3]=BigInt(g.position),g.getdents&&a===0&&u===0&&(g.getdents=null),0}catch(E){if(typeof M>"u"||E.name!=="ErrnoError")throw E;return E.errno}}var vp=(s,a,u,f)=>{for(var g=0,E=0;E<u;E++){var w=Se[a>>2],A=Se[a+4>>2];a+=8;var F=M.write(s,ee,w,A,f);if(F<0)return-1;if(g+=F,F<A)break}return g};function yp(s,a,u,f){try{var g=pt.getStreamFromFD(s),E=vp(g,a,u);return Se[f>>2]=E,0}catch(w){if(typeof M>"u"||w.name!=="ErrnoError")throw w;return w.errno}}var xp=s=>s,Ep=s=>{var a=t["_"+s];return L(a,"Cannot call unknown function "+s+", make sure it is exported"),a},Sp=(s,a)=>{L(s.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),ee.set(s,a)},Vs=s=>Fl(s),Mp=s=>{var a=Oe(s)+1,u=Vs(a);return zi(s,u,a),u},Al=(s,a,u,f,g)=>{var E={string:_e=>{var He=0;return _e!=null&&_e!==0&&(He=Mp(_e)),He},array:_e=>{var He=Vs(_e.length);return Sp(_e,He),He}};function w(_e){return a==="string"?ot(_e):a==="boolean"?!!_e:_e}var A=Ep(s),F=[],H=0;if(L(a!=="array",'Return type should not be "array".'),f)for(var K=0;K<f.length;K++){var re=E[u[K]];re?(H===0&&(H=j()),F[K]=re(f[K])):F[K]=f[K]}var fe=A(...F);function se(_e){return H!==0&&Y(H),w(_e)}return fe=se(fe),fe},Tp=(s,a,u,f)=>(...g)=>Al(s,a,u,g),bp=(...s)=>M.createPath(...s),wp=(...s)=>M.unlink(...s),Ap=(...s)=>M.createLazyFile(...s),Rp=(...s)=>M.createDevice(...s),Cp=s=>Gs(s),Pp=s=>ia(s),Dp=s=>{var a=j(),u=Vs(4),f=Vs(4);Ol(s,u,f);var g=Se[u>>2],E=Se[f>>2],w=ot(g);Xn(g);var A;return E&&(A=ot(E),Xn(E)),Y(a),[w,A]},Rl=s=>Dp(s);M.createPreloadedFile=vt,M.staticInit(),Hd(),qd(),L(Wn.length===10),t.noExitRuntime&&(ie=t.noExitRuntime),t.preloadPlugins&&(ze=t.preloadPlugins),t.print&&(N=t.print),t.printErr&&(D=t.printErr),t.wasmBinary&&(P=t.wasmBinary),Np(),t.arguments&&t.arguments,t.thisProgram&&(h=t.thisProgram),L(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),L(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),L(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),L(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),L(typeof t.read>"u","Module.read option was removed"),L(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),L(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),L(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),L(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),L(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),L(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),L(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),L(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=Z,t.removeRunDependency=he,t.ccall=Al,t.cwrap=Tp,t.FS_createPreloadedFile=vt,t.FS_unlink=wp,t.FS_createPath=bp,t.FS_createDevice=Rp,t.FS=M,t.FS_createDataFile=$t,t.FS_createLazyFile=Ap,t.MEMFS=De;var Lp=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];Lp.forEach(Te);var Ip=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];Ip.forEach(Ce),t.incrementExceptionRefcount=Cp,t.decrementExceptionRefcount=Pp,t.getExceptionMessage=Rl;function Np(){me("fetchSettings")}var Cl={667668:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(s){Object.defineProperty(t,s,{get:function(){return t["get_"+s]()},set:function(a){},enumerable:!0,configurable:!0})})}},Pl=te("___getTypeName"),ea=te("_malloc"),ta=te("_fflush"),Xn=te("_free"),na=te("_emscripten_stack_get_end"),Dl=te("_strerror"),ge=te("_setThrew"),Ll=te("__emscripten_tempret_set"),Il=te("_emscripten_stack_init"),Nl=te("__emscripten_stack_restore"),Fl=te("__emscripten_stack_alloc"),Ul=te("_emscripten_stack_get_current"),ia=te("___cxa_decrement_exception_refcount"),Gs=te("___cxa_increment_exception_refcount"),Ol=te("___get_exception_message"),kl=te("___cxa_can_catch"),Bl=te("___cxa_get_exception_ptr");function Fp(s){Pl=oe("__getTypeName",1),ea=oe("malloc",1),ta=oe("fflush",1),Xn=oe("free",1),na=s.emscripten_stack_get_end,s.emscripten_stack_get_base,Dl=oe("strerror",1),ge=oe("setThrew",2),Ll=oe("_emscripten_tempret_set",1),Il=s.emscripten_stack_init,s.emscripten_stack_get_free,Nl=s._emscripten_stack_restore,Fl=s._emscripten_stack_alloc,Ul=s.emscripten_stack_get_current,ia=oe("__cxa_decrement_exception_refcount",1),Gs=oe("__cxa_increment_exception_refcount",1),Ol=oe("__get_exception_message",3),kl=oe("__cxa_can_catch",3),Bl=oe("__cxa_get_exception_ptr",1)}var zl={__assert_fail:_n,__cxa_begin_catch:Ss,__cxa_current_primary_exception:ti,__cxa_end_catch:Ms,__cxa_find_matching_catch_2:rr,__cxa_find_matching_catch_3:Ts,__cxa_find_matching_catch_4:bs,__cxa_rethrow:ws,__cxa_rethrow_primary_exception:Go,__cxa_throw:Wo,__cxa_uncaught_exceptions:C,__resumeException:G,__syscall_dup3:Ui,__syscall_fcntl64:Hn,__syscall_fstat64:As,__syscall_ioctl:wd,__syscall_lstat64:Ad,__syscall_newfstatat:Rd,__syscall_openat:Cd,__syscall_stat64:Pd,_abort_js:Dd,_embind_register_bigint:Id,_embind_register_bool:Nd,_embind_register_class:Zd,_embind_register_class_class_function:tf,_embind_register_class_constructor:nf,_embind_register_class_function:rf,_embind_register_class_property:sf,_embind_register_constant:of,_embind_register_emval:_l,_embind_register_enum:cf,_embind_register_enum_value:lf,_embind_register_float:hf,_embind_register_function:df,_embind_register_integer:ff,_embind_register_memory_view:pf,_embind_register_optional:_f,_embind_register_std_string:gf,_embind_register_std_wstring:Tf,_embind_register_user_type:bf,_embind_register_void:wf,_emscripten_throw_longjmp:Af,_emval_as:Rf,_emval_call:Cf,_emval_call_method:Df,_emval_decref:Zo,_emval_get_global:Lf,_emval_get_method_caller:Ff,_emval_get_property:Uf,_emval_incref:Of,_emval_is_number:kf,_emval_is_string:Bf,_emval_new_array:zf,_emval_new_cstring:Hf,_emval_run_destructors:Vf,_emval_take_value:Gf,_emval_throw:Wf,_localtime_js:Kf,_mktime_js:Zf,_tzset_js:Jf,clock_time_get:ep,emscripten_asm_const_int:ip,emscripten_date_now:Ml,emscripten_get_heap_max:rp,emscripten_get_now:Sl,emscripten_resize_heap:ap,environ_get:lp,environ_sizes_get:up,exit:fp,fd_close:pp,fd_read:_p,fd_seek:gp,fd_write:yp,invoke_ddd:c_,invoke_dddi:bm,invoke_dddidi:wm,invoke_ddidi:Tm,invoke_di:Am,invoke_dii:mm,invoke_diii:qp,invoke_diiii:Mm,invoke_diiiidd:Em,invoke_diiiidi:Jp,invoke_diiiii:Wp,invoke_diiiiii:rm,invoke_diiiiiii:Rm,invoke_diiiiiiiii:nm,invoke_diiiiiiiiiiii:im,invoke_fiii:y_,invoke_i:Xp,invoke_id:i_,invoke_ii:kp,invoke_iid:km,invoke_iidddd:f_,invoke_iidiii:dm,invoke_iidiiid:um,invoke_iidiiiiidi:fm,invoke_iif:d_,invoke_iii:Up,invoke_iiid:pm,invoke_iiididdddddd:hm,invoke_iiidiiiiiiii:lm,invoke_iiii:Hp,invoke_iiiidddiiiii:Pm,invoke_iiiii:Yp,invoke_iiiiid:Ym,invoke_iiiiii:Gm,invoke_iiiiiii:zm,invoke_iiiiiiii:Om,invoke_iiiiiiiidd:qm,invoke_iiiiiiiii:xm,invoke_iiiiiiiiii:Hm,invoke_iiiiiiiiiidddiiiiiiiii:cm,invoke_iiiiiiiiiii:v_,invoke_iiiiiiiiiiii:x_,invoke_iiiiiiiiiiiii:n_,invoke_iiij:Vm,invoke_iiji:$m,invoke_j:__,invoke_ji:t_,invoke_jiiii:Wm,invoke_jij:e_,invoke_v:zp,invoke_vi:Bp,invoke_vid:Bm,invoke_viddd:Xm,invoke_vidddd:jm,invoke_vidi:Sm,invoke_vidiii:om,invoke_vii:Gp,invoke_viid:vm,invoke_viiddi:Qm,invoke_viiddidi:Jm,invoke_viiddii:Cm,invoke_viidi:gm,invoke_viidii:Zp,invoke_viidiii:Fm,invoke_viidiiid:Im,invoke_viidiiiii:am,invoke_viidiiiiidi:Um,invoke_viidiiiiiiii:sm,invoke_viii:Op,invoke_viiid:em,invoke_viiidd:Zm,invoke_viiidi:_m,invoke_viiididdddddd:Nm,invoke_viiidiiiiiiii:Lm,invoke_viiii:$p,invoke_viiiiddd:Km,invoke_viiiidi:l_,invoke_viiiifi:u_,invoke_viiiii:Vp,invoke_viiiiid:Qp,invoke_viiiiii:jp,invoke_viiiiiii:Kp,invoke_viiiiiiii:ym,invoke_viiiiiiiiii:o_,invoke_viiiiiiiiiidddiiiiiiiii:Dm,invoke_viiiiiiiiiiid:tm,invoke_viiiiiiiiiiiii:s_,invoke_viiiiiiiiiiiiiii:E_,invoke_viiiiiiiiiiiiiiiiii:a_,invoke_viiiij:p_,invoke_viij:m_,invoke_viijii:g_,invoke_vij:h_,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:r_,llvm_eh_typeid_for:xp},Hi=await qe();function Up(s,a,u){var f=j();try{return ve(s)(a,u)}catch(g){if(Y(f),!(g instanceof T))throw g;ge(1,0)}}function Op(s,a,u,f){var g=j();try{ve(s)(a,u,f)}catch(E){if(Y(g),!(E instanceof T))throw E;ge(1,0)}}function kp(s,a){var u=j();try{return ve(s)(a)}catch(f){if(Y(u),!(f instanceof T))throw f;ge(1,0)}}function Bp(s,a){var u=j();try{ve(s)(a)}catch(f){if(Y(u),!(f instanceof T))throw f;ge(1,0)}}function zp(s){var a=j();try{ve(s)()}catch(u){if(Y(a),!(u instanceof T))throw u;ge(1,0)}}function Hp(s,a,u,f){var g=j();try{return ve(s)(a,u,f)}catch(E){if(Y(g),!(E instanceof T))throw E;ge(1,0)}}function Vp(s,a,u,f,g,E){var w=j();try{ve(s)(a,u,f,g,E)}catch(A){if(Y(w),!(A instanceof T))throw A;ge(1,0)}}function Gp(s,a,u){var f=j();try{ve(s)(a,u)}catch(g){if(Y(f),!(g instanceof T))throw g;ge(1,0)}}function Wp(s,a,u,f,g,E){var w=j();try{return ve(s)(a,u,f,g,E)}catch(A){if(Y(w),!(A instanceof T))throw A;ge(1,0)}}function Xp(s){var a=j();try{return ve(s)()}catch(u){if(Y(a),!(u instanceof T))throw u;ge(1,0)}}function jp(s,a,u,f,g,E,w){var A=j();try{ve(s)(a,u,f,g,E,w)}catch(F){if(Y(A),!(F instanceof T))throw F;ge(1,0)}}function $p(s,a,u,f,g){var E=j();try{ve(s)(a,u,f,g)}catch(w){if(Y(E),!(w instanceof T))throw w;ge(1,0)}}function Yp(s,a,u,f,g){var E=j();try{return ve(s)(a,u,f,g)}catch(w){if(Y(E),!(w instanceof T))throw w;ge(1,0)}}function qp(s,a,u,f){var g=j();try{return ve(s)(a,u,f)}catch(E){if(Y(g),!(E instanceof T))throw E;ge(1,0)}}function Kp(s,a,u,f,g,E,w,A){var F=j();try{ve(s)(a,u,f,g,E,w,A)}catch(H){if(Y(F),!(H instanceof T))throw H;ge(1,0)}}function Zp(s,a,u,f,g,E){var w=j();try{ve(s)(a,u,f,g,E)}catch(A){if(Y(w),!(A instanceof T))throw A;ge(1,0)}}function Jp(s,a,u,f,g,E,w){var A=j();try{return ve(s)(a,u,f,g,E,w)}catch(F){if(Y(A),!(F instanceof T))throw F;ge(1,0)}}function Qp(s,a,u,f,g,E,w){var A=j();try{ve(s)(a,u,f,g,E,w)}catch(F){if(Y(A),!(F instanceof T))throw F;ge(1,0)}}function em(s,a,u,f,g){var E=j();try{ve(s)(a,u,f,g)}catch(w){if(Y(E),!(w instanceof T))throw w;ge(1,0)}}function tm(s,a,u,f,g,E,w,A,F,H,K,re,fe){var se=j();try{ve(s)(a,u,f,g,E,w,A,F,H,K,re,fe)}catch(_e){if(Y(se),!(_e instanceof T))throw _e;ge(1,0)}}function nm(s,a,u,f,g,E,w,A,F,H){var K=j();try{return ve(s)(a,u,f,g,E,w,A,F,H)}catch(re){if(Y(K),!(re instanceof T))throw re;ge(1,0)}}function im(s,a,u,f,g,E,w,A,F,H,K,re,fe){var se=j();try{return ve(s)(a,u,f,g,E,w,A,F,H,K,re,fe)}catch(_e){if(Y(se),!(_e instanceof T))throw _e;ge(1,0)}}function rm(s,a,u,f,g,E,w){var A=j();try{return ve(s)(a,u,f,g,E,w)}catch(F){if(Y(A),!(F instanceof T))throw F;ge(1,0)}}function sm(s,a,u,f,g,E,w,A,F,H,K,re){var fe=j();try{ve(s)(a,u,f,g,E,w,A,F,H,K,re)}catch(se){if(Y(fe),!(se instanceof T))throw se;ge(1,0)}}function om(s,a,u,f,g,E){var w=j();try{ve(s)(a,u,f,g,E)}catch(A){if(Y(w),!(A instanceof T))throw A;ge(1,0)}}function am(s,a,u,f,g,E,w,A,F){var H=j();try{ve(s)(a,u,f,g,E,w,A,F)}catch(K){if(Y(H),!(K instanceof T))throw K;ge(1,0)}}function cm(s,a,u,f,g,E,w,A,F,H,K,re,fe,se,_e,He,ct,rt,Pt,yt,Jt,zt){var on=j();try{return ve(s)(a,u,f,g,E,w,A,F,H,K,re,fe,se,_e,He,ct,rt,Pt,yt,Jt,zt)}catch(Ct){if(Y(on),!(Ct instanceof T))throw Ct;ge(1,0)}}function lm(s,a,u,f,g,E,w,A,F,H,K,re){var fe=j();try{return ve(s)(a,u,f,g,E,w,A,F,H,K,re)}catch(se){if(Y(fe),!(se instanceof T))throw se;ge(1,0)}}function um(s,a,u,f,g,E,w){var A=j();try{return ve(s)(a,u,f,g,E,w)}catch(F){if(Y(A),!(F instanceof T))throw F;ge(1,0)}}function hm(s,a,u,f,g,E,w,A,F,H,K,re){var fe=j();try{return ve(s)(a,u,f,g,E,w,A,F,H,K,re)}catch(se){if(Y(fe),!(se instanceof T))throw se;ge(1,0)}}function dm(s,a,u,f,g,E){var w=j();try{return ve(s)(a,u,f,g,E)}catch(A){if(Y(w),!(A instanceof T))throw A;ge(1,0)}}function fm(s,a,u,f,g,E,w,A,F,H){var K=j();try{return ve(s)(a,u,f,g,E,w,A,F,H)}catch(re){if(Y(K),!(re instanceof T))throw re;ge(1,0)}}function pm(s,a,u,f){var g=j();try{return ve(s)(a,u,f)}catch(E){if(Y(g),!(E instanceof T))throw E;ge(1,0)}}function mm(s,a,u){var f=j();try{return ve(s)(a,u)}catch(g){if(Y(f),!(g instanceof T))throw g;ge(1,0)}}function _m(s,a,u,f,g,E){var w=j();try{ve(s)(a,u,f,g,E)}catch(A){if(Y(w),!(A instanceof T))throw A;ge(1,0)}}function gm(s,a,u,f,g){var E=j();try{ve(s)(a,u,f,g)}catch(w){if(Y(E),!(w instanceof T))throw w;ge(1,0)}}function vm(s,a,u,f){var g=j();try{ve(s)(a,u,f)}catch(E){if(Y(g),!(E instanceof T))throw E;ge(1,0)}}function ym(s,a,u,f,g,E,w,A,F){var H=j();try{ve(s)(a,u,f,g,E,w,A,F)}catch(K){if(Y(H),!(K instanceof T))throw K;ge(1,0)}}function xm(s,a,u,f,g,E,w,A,F){var H=j();try{return ve(s)(a,u,f,g,E,w,A,F)}catch(K){if(Y(H),!(K instanceof T))throw K;ge(1,0)}}function Em(s,a,u,f,g,E,w){var A=j();try{return ve(s)(a,u,f,g,E,w)}catch(F){if(Y(A),!(F instanceof T))throw F;ge(1,0)}}function Sm(s,a,u,f){var g=j();try{ve(s)(a,u,f)}catch(E){if(Y(g),!(E instanceof T))throw E;ge(1,0)}}function Mm(s,a,u,f,g){var E=j();try{return ve(s)(a,u,f,g)}catch(w){if(Y(E),!(w instanceof T))throw w;ge(1,0)}}function Tm(s,a,u,f,g){var E=j();try{return ve(s)(a,u,f,g)}catch(w){if(Y(E),!(w instanceof T))throw w;ge(1,0)}}function bm(s,a,u,f){var g=j();try{return ve(s)(a,u,f)}catch(E){if(Y(g),!(E instanceof T))throw E;ge(1,0)}}function wm(s,a,u,f,g,E){var w=j();try{return ve(s)(a,u,f,g,E)}catch(A){if(Y(w),!(A instanceof T))throw A;ge(1,0)}}function Am(s,a){var u=j();try{return ve(s)(a)}catch(f){if(Y(u),!(f instanceof T))throw f;ge(1,0)}}function Rm(s,a,u,f,g,E,w,A){var F=j();try{return ve(s)(a,u,f,g,E,w,A)}catch(H){if(Y(F),!(H instanceof T))throw H;ge(1,0)}}function Cm(s,a,u,f,g,E,w){var A=j();try{ve(s)(a,u,f,g,E,w)}catch(F){if(Y(A),!(F instanceof T))throw F;ge(1,0)}}function Pm(s,a,u,f,g,E,w,A,F,H,K,re){var fe=j();try{return ve(s)(a,u,f,g,E,w,A,F,H,K,re)}catch(se){if(Y(fe),!(se instanceof T))throw se;ge(1,0)}}function Dm(s,a,u,f,g,E,w,A,F,H,K,re,fe,se,_e,He,ct,rt,Pt,yt,Jt,zt,on){var Ct=j();try{ve(s)(a,u,f,g,E,w,A,F,H,K,re,fe,se,_e,He,ct,rt,Pt,yt,Jt,zt,on)}catch(xi){if(Y(Ct),!(xi instanceof T))throw xi;ge(1,0)}}function Lm(s,a,u,f,g,E,w,A,F,H,K,re,fe){var se=j();try{ve(s)(a,u,f,g,E,w,A,F,H,K,re,fe)}catch(_e){if(Y(se),!(_e instanceof T))throw _e;ge(1,0)}}function Im(s,a,u,f,g,E,w,A){var F=j();try{ve(s)(a,u,f,g,E,w,A)}catch(H){if(Y(F),!(H instanceof T))throw H;ge(1,0)}}function Nm(s,a,u,f,g,E,w,A,F,H,K,re,fe){var se=j();try{ve(s)(a,u,f,g,E,w,A,F,H,K,re,fe)}catch(_e){if(Y(se),!(_e instanceof T))throw _e;ge(1,0)}}function Fm(s,a,u,f,g,E,w){var A=j();try{ve(s)(a,u,f,g,E,w)}catch(F){if(Y(A),!(F instanceof T))throw F;ge(1,0)}}function Um(s,a,u,f,g,E,w,A,F,H,K){var re=j();try{ve(s)(a,u,f,g,E,w,A,F,H,K)}catch(fe){if(Y(re),!(fe instanceof T))throw fe;ge(1,0)}}function Om(s,a,u,f,g,E,w,A){var F=j();try{return ve(s)(a,u,f,g,E,w,A)}catch(H){if(Y(F),!(H instanceof T))throw H;ge(1,0)}}function km(s,a,u){var f=j();try{return ve(s)(a,u)}catch(g){if(Y(f),!(g instanceof T))throw g;ge(1,0)}}function Bm(s,a,u){var f=j();try{ve(s)(a,u)}catch(g){if(Y(f),!(g instanceof T))throw g;ge(1,0)}}function zm(s,a,u,f,g,E,w){var A=j();try{return ve(s)(a,u,f,g,E,w)}catch(F){if(Y(A),!(F instanceof T))throw F;ge(1,0)}}function Hm(s,a,u,f,g,E,w,A,F,H){var K=j();try{return ve(s)(a,u,f,g,E,w,A,F,H)}catch(re){if(Y(K),!(re instanceof T))throw re;ge(1,0)}}function Vm(s,a,u,f){var g=j();try{return ve(s)(a,u,f)}catch(E){if(Y(g),!(E instanceof T))throw E;ge(1,0)}}function Gm(s,a,u,f,g,E){var w=j();try{return ve(s)(a,u,f,g,E)}catch(A){if(Y(w),!(A instanceof T))throw A;ge(1,0)}}function Wm(s,a,u,f,g){var E=j();try{return ve(s)(a,u,f,g)}catch(w){if(Y(E),!(w instanceof T))throw w;return ge(1,0),0n}}function Xm(s,a,u,f,g){var E=j();try{ve(s)(a,u,f,g)}catch(w){if(Y(E),!(w instanceof T))throw w;ge(1,0)}}function jm(s,a,u,f,g,E){var w=j();try{ve(s)(a,u,f,g,E)}catch(A){if(Y(w),!(A instanceof T))throw A;ge(1,0)}}function $m(s,a,u,f){var g=j();try{return ve(s)(a,u,f)}catch(E){if(Y(g),!(E instanceof T))throw E;ge(1,0)}}function Ym(s,a,u,f,g,E){var w=j();try{return ve(s)(a,u,f,g,E)}catch(A){if(Y(w),!(A instanceof T))throw A;ge(1,0)}}function qm(s,a,u,f,g,E,w,A,F,H){var K=j();try{return ve(s)(a,u,f,g,E,w,A,F,H)}catch(re){if(Y(K),!(re instanceof T))throw re;ge(1,0)}}function Km(s,a,u,f,g,E,w,A){var F=j();try{ve(s)(a,u,f,g,E,w,A)}catch(H){if(Y(F),!(H instanceof T))throw H;ge(1,0)}}function Zm(s,a,u,f,g,E){var w=j();try{ve(s)(a,u,f,g,E)}catch(A){if(Y(w),!(A instanceof T))throw A;ge(1,0)}}function Jm(s,a,u,f,g,E,w,A){var F=j();try{ve(s)(a,u,f,g,E,w,A)}catch(H){if(Y(F),!(H instanceof T))throw H;ge(1,0)}}function Qm(s,a,u,f,g,E){var w=j();try{ve(s)(a,u,f,g,E)}catch(A){if(Y(w),!(A instanceof T))throw A;ge(1,0)}}function e_(s,a,u){var f=j();try{return ve(s)(a,u)}catch(g){if(Y(f),!(g instanceof T))throw g;return ge(1,0),0n}}function t_(s,a){var u=j();try{return ve(s)(a)}catch(f){if(Y(u),!(f instanceof T))throw f;return ge(1,0),0n}}function n_(s,a,u,f,g,E,w,A,F,H,K,re,fe){var se=j();try{return ve(s)(a,u,f,g,E,w,A,F,H,K,re,fe)}catch(_e){if(Y(se),!(_e instanceof T))throw _e;ge(1,0)}}function i_(s,a){var u=j();try{return ve(s)(a)}catch(f){if(Y(u),!(f instanceof T))throw f;ge(1,0)}}function r_(s,a,u,f,g,E,w,A,F,H,K,re,fe,se,_e,He,ct,rt,Pt,yt,Jt,zt,on,Ct,xi,Ws,b_,w_,A_,R_,C_,P_,D_,L_,I_,N_,F_,U_,O_,k_,B_,z_,H_,V_,G_,W_,X_,j_,$_,Y_,q_,K_,Z_,J_,Q_,eg,tg,ng,ig,rg,sg,og,ag,cg,lg,ug,hg,dg,fg,pg,mg,_g,gg,vg,yg,xg,Eg,Sg,Mg,Tg,bg,wg,Ag,Rg,Cg,Pg){var Dg=j();try{ve(s)(a,u,f,g,E,w,A,F,H,K,re,fe,se,_e,He,ct,rt,Pt,yt,Jt,zt,on,Ct,xi,Ws,b_,w_,A_,R_,C_,P_,D_,L_,I_,N_,F_,U_,O_,k_,B_,z_,H_,V_,G_,W_,X_,j_,$_,Y_,q_,K_,Z_,J_,Q_,eg,tg,ng,ig,rg,sg,og,ag,cg,lg,ug,hg,dg,fg,pg,mg,_g,gg,vg,yg,xg,Eg,Sg,Mg,Tg,bg,wg,Ag,Rg,Cg,Pg)}catch(Xl){if(Y(Dg),!(Xl instanceof T))throw Xl;ge(1,0)}}function s_(s,a,u,f,g,E,w,A,F,H,K,re,fe,se){var _e=j();try{ve(s)(a,u,f,g,E,w,A,F,H,K,re,fe,se)}catch(He){if(Y(_e),!(He instanceof T))throw He;ge(1,0)}}function o_(s,a,u,f,g,E,w,A,F,H,K){var re=j();try{ve(s)(a,u,f,g,E,w,A,F,H,K)}catch(fe){if(Y(re),!(fe instanceof T))throw fe;ge(1,0)}}function a_(s,a,u,f,g,E,w,A,F,H,K,re,fe,se,_e,He,ct,rt,Pt){var yt=j();try{ve(s)(a,u,f,g,E,w,A,F,H,K,re,fe,se,_e,He,ct,rt,Pt)}catch(Jt){if(Y(yt),!(Jt instanceof T))throw Jt;ge(1,0)}}function c_(s,a,u){var f=j();try{return ve(s)(a,u)}catch(g){if(Y(f),!(g instanceof T))throw g;ge(1,0)}}function l_(s,a,u,f,g,E,w){var A=j();try{ve(s)(a,u,f,g,E,w)}catch(F){if(Y(A),!(F instanceof T))throw F;ge(1,0)}}function u_(s,a,u,f,g,E,w){var A=j();try{ve(s)(a,u,f,g,E,w)}catch(F){if(Y(A),!(F instanceof T))throw F;ge(1,0)}}function h_(s,a,u){var f=j();try{ve(s)(a,u)}catch(g){if(Y(f),!(g instanceof T))throw g;ge(1,0)}}function d_(s,a,u){var f=j();try{return ve(s)(a,u)}catch(g){if(Y(f),!(g instanceof T))throw g;ge(1,0)}}function f_(s,a,u,f,g,E){var w=j();try{return ve(s)(a,u,f,g,E)}catch(A){if(Y(w),!(A instanceof T))throw A;ge(1,0)}}function p_(s,a,u,f,g,E){var w=j();try{ve(s)(a,u,f,g,E)}catch(A){if(Y(w),!(A instanceof T))throw A;ge(1,0)}}function m_(s,a,u,f){var g=j();try{ve(s)(a,u,f)}catch(E){if(Y(g),!(E instanceof T))throw E;ge(1,0)}}function __(s){var a=j();try{return ve(s)()}catch(u){if(Y(a),!(u instanceof T))throw u;return ge(1,0),0n}}function g_(s,a,u,f,g,E){var w=j();try{ve(s)(a,u,f,g,E)}catch(A){if(Y(w),!(A instanceof T))throw A;ge(1,0)}}function v_(s,a,u,f,g,E,w,A,F,H,K){var re=j();try{return ve(s)(a,u,f,g,E,w,A,F,H,K)}catch(fe){if(Y(re),!(fe instanceof T))throw fe;ge(1,0)}}function y_(s,a,u,f){var g=j();try{return ve(s)(a,u,f)}catch(E){if(Y(g),!(E instanceof T))throw E;ge(1,0)}}function x_(s,a,u,f,g,E,w,A,F,H,K,re){var fe=j();try{return ve(s)(a,u,f,g,E,w,A,F,H,K,re)}catch(se){if(Y(fe),!(se instanceof T))throw se;ge(1,0)}}function E_(s,a,u,f,g,E,w,A,F,H,K,re,fe,se,_e,He){var ct=j();try{ve(s)(a,u,f,g,E,w,A,F,H,K,re,fe,se,_e,He)}catch(rt){if(Y(ct),!(rt instanceof T))throw rt;ge(1,0)}}var Hl;function S_(){Il(),$()}function ra(){if(gt>0){Ve=ra;return}if(S_(),ut(),gt>0){Ve=ra;return}function s(){var a;L(!Hl),Hl=!0,t.calledRun=!0,!q&&(ht(),Pe==null||Pe(t),(a=t.onRuntimeInitialized)==null||a.call(t),J("onRuntimeInitialized"),L(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),We())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),s()},1)):s(),I()}function M_(){var s=N,a=D,u=!1;N=D=f=>{u=!0};try{ta(0),["stdout","stderr"].forEach(f=>{var F;var g=M.analyzePath("/dev/"+f);if(g){var E=g.object,w=E.rdev,A=Ie.ttys[w];(F=A==null?void 0:A.output)!=null&&F.length&&(u=!0)}})}catch{}N=s,D=a,u&&Ge("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function T_(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();J("preInit")}T_(),ra(),V?e=t:e=new Promise((s,a)=>{Pe=s,Xe=a});for(const s of Object.keys(t))s in i||Object.defineProperty(i,s,{configurable:!0,get(){le(`Access to module property ('${s}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const kg="/physical/assets/mujoco-D9UjOFNX.wasm";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fc="170",Tr={ROTATE:0,DOLLY:1,PAN:2},Er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bg=0,$l=1,zg=2,Rh=1,Ch=2,li=3,_i=0,pn=1,$n=2,Di=0,br=1,Yl=2,ql=3,Kl=4,Hg=5,Ki=100,Vg=101,Gg=102,Wg=103,Xg=104,jg=200,$g=201,Yg=202,qg=203,Ga=204,Wa=205,Kg=206,Zg=207,Jg=208,Qg=209,ev=210,tv=211,nv=212,iv=213,rv=214,Xa=0,ja=1,$a=2,Pr=3,Ya=4,qa=5,Ka=6,Za=7,Ph=0,sv=1,ov=2,Li=0,av=1,cv=2,lv=3,uv=4,hv=5,dv=6,fv=7,Zl="attached",pv="detached",Dh=300,Dr=301,Lr=302,Ja=303,Qa=304,ko=306,Ir=1e3,qn=1001,No=1002,un=1003,Lh=1004,ss=1005,Sn=1006,To=1007,hi=1008,gi=1009,Ih=1010,Nh=1011,hs=1012,Uc=1013,er=1014,Un=1015,ms=1016,Oc=1017,kc=1018,Nr=1020,Fh=35902,Uh=1021,Oh=1022,An=1023,kh=1024,Bh=1025,wr=1026,Fr=1027,Bc=1028,zc=1029,zh=1030,Hc=1031,Vc=1033,bo=33776,wo=33777,Ao=33778,Ro=33779,ec=35840,tc=35841,nc=35842,ic=35843,rc=36196,sc=37492,oc=37496,ac=37808,cc=37809,lc=37810,uc=37811,hc=37812,dc=37813,fc=37814,pc=37815,mc=37816,_c=37817,gc=37818,vc=37819,yc=37820,xc=37821,Co=36492,Ec=36494,Sc=36495,Hh=36283,Mc=36284,Tc=36285,bc=36286,ds=2300,fs=2301,sa=2302,Jl=2400,Ql=2401,eu=2402,mv=2500,_v=0,Vh=1,wc=2,gv=3200,vv=3201,Gh=0,yv=1,Ci="",Ut="srgb",dn="srgb-linear",Bo="linear",bt="srgb",or=7680,tu=519,xv=512,Ev=513,Sv=514,Wh=515,Mv=516,Tv=517,bv=518,wv=519,Ac=35044,nu="300 es",di=2e3,Fo=2001;class nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,c=r.length;o<c;o++)r[o].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let iu=1234567;const Ar=Math.PI/180,Ur=180/Math.PI;function On(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function qt(i,e,t){return Math.max(e,Math.min(t,i))}function Gc(i,e){return(i%e+e)%e}function Av(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Rv(i,e,t){return i!==e?(t-i)/(e-i):0}function cs(i,e,t){return(1-t)*i+t*e}function Cv(i,e,t,n){return cs(i,e,1-Math.exp(-t*n))}function Pv(i,e=1){return e-Math.abs(Gc(i,e*2)-e)}function Dv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Lv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Iv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Nv(i,e){return i+Math.random()*(e-i)}function Fv(i){return i*(.5-Math.random())}function Uv(i){i!==void 0&&(iu=i);let e=iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ov(i){return i*Ar}function kv(i){return i*Ur}function Bv(i){return(i&i-1)===0&&i!==0}function zv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vv(i,e,t,n,r){const o=Math.cos,c=Math.sin,l=o(t/2),h=c(t/2),d=o((e+n)/2),p=c((e+n)/2),m=o((e-n)/2),_=c((e-n)/2),y=o((n-e)/2),S=c((n-e)/2);switch(r){case"XYX":i.set(l*p,h*m,h*_,l*d);break;case"YZY":i.set(h*_,l*p,h*m,l*d);break;case"ZXZ":i.set(h*m,h*_,l*p,l*d);break;case"XZX":i.set(l*p,h*S,h*y,l*d);break;case"YXY":i.set(h*y,l*p,h*S,l*d);break;case"ZYZ":i.set(h*S,h*y,l*p,l*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xh={DEG2RAD:Ar,RAD2DEG:Ur,generateUUID:On,clamp:qt,euclideanModulo:Gc,mapLinear:Av,inverseLerp:Rv,lerp:cs,damp:Cv,pingpong:Pv,smoothstep:Dv,smootherstep:Lv,randInt:Iv,randFloat:Nv,randFloatSpread:Fv,seededRandom:Uv,degToRad:Ov,radToDeg:kv,isPowerOfTwo:Bv,ceilPowerOfTwo:zv,floorPowerOfTwo:Hv,setQuaternionFromProperEuler:Vv,normalize:St,denormalize:Fn};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*n-c*r+e.x,this.y=o*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,r,o,c,l,h,d){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,c,l,h,d)}set(e,t,n,r,o,c,l,h,d){const p=this.elements;return p[0]=e,p[1]=r,p[2]=l,p[3]=t,p[4]=o,p[5]=h,p[6]=n,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,c=n[0],l=n[3],h=n[6],d=n[1],p=n[4],m=n[7],_=n[2],y=n[5],S=n[8],b=r[0],x=r[3],v=r[6],N=r[1],D=r[4],P=r[7],q=r[2],L=r[5],O=r[8];return o[0]=c*b+l*N+h*q,o[3]=c*x+l*D+h*L,o[6]=c*v+l*P+h*O,o[1]=d*b+p*N+m*q,o[4]=d*x+p*D+m*L,o[7]=d*v+p*P+m*O,o[2]=_*b+y*N+S*q,o[5]=_*x+y*D+S*L,o[8]=_*v+y*P+S*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],h=e[6],d=e[7],p=e[8];return t*c*p-t*l*d-n*o*p+n*l*h+r*o*d-r*c*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],h=e[6],d=e[7],p=e[8],m=p*c-l*d,_=l*h-p*o,y=d*o-c*h,S=t*m+n*_+r*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/S;return e[0]=m*b,e[1]=(r*d-p*n)*b,e[2]=(l*n-r*c)*b,e[3]=_*b,e[4]=(p*t-r*h)*b,e[5]=(r*o-l*t)*b,e[6]=y*b,e[7]=(n*h-d*t)*b,e[8]=(c*t-n*o)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,c,l){const h=Math.cos(o),d=Math.sin(o);return this.set(n*h,n*d,-n*(h*c+d*l)+c+e,-r*d,r*h,-r*(-d*c+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(oa.makeScale(e,t)),this}rotate(e){return this.premultiply(oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new tt;function jh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gv(){const i=ps("canvas");return i.style.display="block",i}const ru={};function os(i){i in ru||(ru[i]=!0,console.warn(i))}function Wv(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Xv(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jv(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _t={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===bt&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===bt&&(i.r=Rr(i.r),i.g=Rr(i.g),i.b=Rr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ci?Bo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const su=[.64,.33,.3,.6,.15,.06],ou=[.2126,.7152,.0722],au=[.3127,.329],cu=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lu=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_t.define({[dn]:{primaries:su,whitePoint:au,transfer:Bo,toXYZ:cu,fromXYZ:lu,luminanceCoefficients:ou,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:su,whitePoint:au,transfer:bt,toXYZ:cu,fromXYZ:lu,luminanceCoefficients:ou,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}});let ar;class $v{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ar===void 0&&(ar=ps("canvas")),ar.width=e.width,ar.height=e.height;const n=ar.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ps("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let c=0;c<o.length;c++)o[c]=mi(o[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yv=0;class $h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let c=0,l=r.length;c<l;c++)r[c].isDataTexture?o.push(aa(r[c].image)):o.push(aa(r[c]))}else o=aa(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$v.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qv=0;class jt extends nr{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=qn,r=qn,o=Sn,c=hi,l=An,h=gi,d=jt.DEFAULT_ANISOTROPY,p=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=On(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=c,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=h,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ir:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ir:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Dh;jt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*o,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*o,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*o,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const h=e.elements,d=h[0],p=h[4],m=h[8],_=h[1],y=h[5],S=h[9],b=h[2],x=h[6],v=h[10];if(Math.abs(p-_)<.01&&Math.abs(m-b)<.01&&Math.abs(S-x)<.01){if(Math.abs(p+_)<.1&&Math.abs(m+b)<.1&&Math.abs(S+x)<.1&&Math.abs(d+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(d+1)/2,P=(y+1)/2,q=(v+1)/2,L=(p+_)/4,O=(m+b)/4,$=(S+x)/4;return D>P&&D>q?D<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(D),r=L/n,o=O/n):P>q?P<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(P),n=L/r,o=$/r):q<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(q),n=O/o,r=$/o),this.set(n,r,o,t),this}let N=Math.sqrt((x-S)*(x-S)+(m-b)*(m-b)+(_-p)*(_-p));return Math.abs(N)<.001&&(N=1),this.x=(x-S)/N,this.y=(m-b)/N,this.z=(_-p)/N,this.w=Math.acos((d+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kv extends nr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new jt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let l=0;l<c;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $h(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends Kv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yh extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zv extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,c,l){let h=n[r+0],d=n[r+1],p=n[r+2],m=n[r+3];const _=o[c+0],y=o[c+1],S=o[c+2],b=o[c+3];if(l===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=m;return}if(l===1){e[t+0]=_,e[t+1]=y,e[t+2]=S,e[t+3]=b;return}if(m!==b||h!==_||d!==y||p!==S){let x=1-l;const v=h*_+d*y+p*S+m*b,N=v>=0?1:-1,D=1-v*v;if(D>Number.EPSILON){const q=Math.sqrt(D),L=Math.atan2(q,v*N);x=Math.sin(x*L)/q,l=Math.sin(l*L)/q}const P=l*N;if(h=h*x+_*P,d=d*x+y*P,p=p*x+S*P,m=m*x+b*P,x===1-l){const q=1/Math.sqrt(h*h+d*d+p*p+m*m);h*=q,d*=q,p*=q,m*=q}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,o,c){const l=n[r],h=n[r+1],d=n[r+2],p=n[r+3],m=o[c],_=o[c+1],y=o[c+2],S=o[c+3];return e[t]=l*S+p*m+h*y-d*_,e[t+1]=h*S+p*_+d*m-l*y,e[t+2]=d*S+p*y+l*_-h*m,e[t+3]=p*S-l*m-h*_-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,c=e._order,l=Math.cos,h=Math.sin,d=l(n/2),p=l(r/2),m=l(o/2),_=h(n/2),y=h(r/2),S=h(o/2);switch(c){case"XYZ":this._x=_*p*m+d*y*S,this._y=d*y*m-_*p*S,this._z=d*p*S+_*y*m,this._w=d*p*m-_*y*S;break;case"YXZ":this._x=_*p*m+d*y*S,this._y=d*y*m-_*p*S,this._z=d*p*S-_*y*m,this._w=d*p*m+_*y*S;break;case"ZXY":this._x=_*p*m-d*y*S,this._y=d*y*m+_*p*S,this._z=d*p*S+_*y*m,this._w=d*p*m-_*y*S;break;case"ZYX":this._x=_*p*m-d*y*S,this._y=d*y*m+_*p*S,this._z=d*p*S-_*y*m,this._w=d*p*m+_*y*S;break;case"YZX":this._x=_*p*m+d*y*S,this._y=d*y*m+_*p*S,this._z=d*p*S-_*y*m,this._w=d*p*m-_*y*S;break;case"XZY":this._x=_*p*m-d*y*S,this._y=d*y*m-_*p*S,this._z=d*p*S+_*y*m,this._w=d*p*m+_*y*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],c=t[1],l=t[5],h=t[9],d=t[2],p=t[6],m=t[10],_=n+l+m;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(p-h)*y,this._y=(o-d)*y,this._z=(c-r)*y}else if(n>l&&n>m){const y=2*Math.sqrt(1+n-l-m);this._w=(p-h)/y,this._x=.25*y,this._y=(r+c)/y,this._z=(o+d)/y}else if(l>m){const y=2*Math.sqrt(1+l-n-m);this._w=(o-d)/y,this._x=(r+c)/y,this._y=.25*y,this._z=(h+p)/y}else{const y=2*Math.sqrt(1+m-n-l);this._w=(c-r)/y,this._x=(o+d)/y,this._y=(h+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,c=e._w,l=t._x,h=t._y,d=t._z,p=t._w;return this._x=n*p+c*l+r*d-o*h,this._y=r*p+c*h+o*l-n*d,this._z=o*p+c*d+n*h-r*l,this._w=c*p-n*l-r*h-o*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,c=this._w;let l=c*e._w+n*e._x+r*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=r,this._z=o,this;const h=1-l*l;if(h<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*n+t*this._x,this._y=y*r+t*this._y,this._z=y*o+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,l),m=Math.sin((1-t)*p)/d,_=Math.sin(t*p)/d;return this._w=c*m+this._w*_,this._x=n*m+this._x*_,this._y=r*m+this._y*_,this._z=o*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,c=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*c,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*c,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,c=e.y,l=e.z,h=e.w,d=2*(c*r-l*n),p=2*(l*t-o*r),m=2*(o*n-c*t);return this.x=t+h*d+c*m-l*p,this.y=n+h*p+l*d-o*m,this.z=r+h*m+o*p-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,c=t.x,l=t.y,h=t.z;return this.x=r*h-o*l,this.y=o*c-n*h,this.z=n*l-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ca.copy(this).projectOnVector(e),this.sub(ca)}reflect(e){return this.sub(ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new B,uu=new kn;class Xt{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=o.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,Ln):Ln.fromBufferAttribute(o,c),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(e.matrixWorld),this.union(Xs)}const r=e.children;for(let o=0,c=r.length;o<c;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),js.subVectors(this.max,Kr),cr.subVectors(e.a,Kr),lr.subVectors(e.b,Kr),ur.subVectors(e.c,Kr),Ei.subVectors(lr,cr),Si.subVectors(ur,lr),Vi.subVectors(cr,ur);let t=[0,-Ei.z,Ei.y,0,-Si.z,Si.y,0,-Vi.z,Vi.y,Ei.z,0,-Ei.x,Si.z,0,-Si.x,Vi.z,0,-Vi.x,-Ei.y,Ei.x,0,-Si.y,Si.x,0,-Vi.y,Vi.x,0];return!la(t,cr,lr,ur,js)||(t=[1,0,0,0,1,0,0,0,1],!la(t,cr,lr,ur,js))?!1:($s.crossVectors(Ei,Si),t=[$s.x,$s.y,$s.z],la(t,cr,lr,ur,js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new B,new B,new B,new B,new B,new B,new B,new B],Ln=new B,Xs=new Xt,cr=new B,lr=new B,ur=new B,Ei=new B,Si=new B,Vi=new B,Kr=new B,js=new B,$s=new B,Gi=new B;function la(i,e,t,n,r){for(let o=0,c=i.length-3;o<=c;o+=3){Gi.fromArray(i,o);const l=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),h=e.dot(Gi),d=t.dot(Gi),p=n.dot(Gi);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>l)return!1}return!0}const Jv=new Xt,Zr=new B,ua=new B;class Jn{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jv.setFromPoints(e).getCenter(n);let r=0;for(let o=0,c=e.length;o<c;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Zr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(ua)),this.expandByPoint(Zr.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new B,ha=new B,Ys=new B,Mi=new B,da=new B,qs=new B,fa=new B;class _s{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ha.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(ha);const o=e.distanceTo(t)*.5,c=-this.direction.dot(Ys),l=Mi.dot(this.direction),h=-Mi.dot(Ys),d=Mi.lengthSq(),p=Math.abs(1-c*c);let m,_,y,S;if(p>0)if(m=c*h-l,_=c*l-h,S=o*p,m>=0)if(_>=-S)if(_<=S){const b=1/p;m*=b,_*=b,y=m*(m+c*_+2*l)+_*(c*m+_+2*h)+d}else _=o,m=Math.max(0,-(c*_+l)),y=-m*m+_*(_+2*h)+d;else _=-o,m=Math.max(0,-(c*_+l)),y=-m*m+_*(_+2*h)+d;else _<=-S?(m=Math.max(0,-(-c*o+l)),_=m>0?-o:Math.min(Math.max(-o,-h),o),y=-m*m+_*(_+2*h)+d):_<=S?(m=0,_=Math.min(Math.max(-o,-h),o),y=_*(_+2*h)+d):(m=Math.max(0,-(c*o+l)),_=m>0?o:Math.min(Math.max(-o,-h),o),y=-m*m+_*(_+2*h)+d);else _=c>0?-o:o,m=Math.max(0,-(c*_+l)),y=-m*m+_*(_+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(ha).addScaledVector(Ys,_),y}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const n=ri.dot(this.direction),r=ri.dot(ri)-n*n,o=e.radius*e.radius;if(r>o)return null;const c=Math.sqrt(o-r),l=n-c,h=n+c;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,c,l,h;const d=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,_=this.origin;return d>=0?(n=(e.min.x-_.x)*d,r=(e.max.x-_.x)*d):(n=(e.max.x-_.x)*d,r=(e.min.x-_.x)*d),p>=0?(o=(e.min.y-_.y)*p,c=(e.max.y-_.y)*p):(o=(e.max.y-_.y)*p,c=(e.min.y-_.y)*p),n>c||o>r||((o>n||isNaN(n))&&(n=o),(c<r||isNaN(r))&&(r=c),m>=0?(l=(e.min.z-_.z)*m,h=(e.max.z-_.z)*m):(l=(e.max.z-_.z)*m,h=(e.min.z-_.z)*m),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,r,o){da.subVectors(t,e),qs.subVectors(n,e),fa.crossVectors(da,qs);let c=this.direction.dot(fa),l;if(c>0){if(r)return null;l=1}else if(c<0)l=-1,c=-c;else return null;Mi.subVectors(this.origin,e);const h=l*this.direction.dot(qs.crossVectors(Mi,qs));if(h<0)return null;const d=l*this.direction.dot(da.cross(Mi));if(d<0||h+d>c)return null;const p=-l*Mi.dot(fa);return p<0?null:this.at(p/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,n,r,o,c,l,h,d,p,m,_,y,S,b,x){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,c,l,h,d,p,m,_,y,S,b,x)}set(e,t,n,r,o,c,l,h,d,p,m,_,y,S,b,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=o,v[5]=c,v[9]=l,v[13]=h,v[2]=d,v[6]=p,v[10]=m,v[14]=_,v[3]=y,v[7]=S,v[11]=b,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/hr.setFromMatrixColumn(e,0).length(),o=1/hr.setFromMatrixColumn(e,1).length(),c=1/hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,c=Math.cos(n),l=Math.sin(n),h=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const _=c*p,y=c*m,S=l*p,b=l*m;t[0]=h*p,t[4]=-h*m,t[8]=d,t[1]=y+S*d,t[5]=_-b*d,t[9]=-l*h,t[2]=b-_*d,t[6]=S+y*d,t[10]=c*h}else if(e.order==="YXZ"){const _=h*p,y=h*m,S=d*p,b=d*m;t[0]=_+b*l,t[4]=S*l-y,t[8]=c*d,t[1]=c*m,t[5]=c*p,t[9]=-l,t[2]=y*l-S,t[6]=b+_*l,t[10]=c*h}else if(e.order==="ZXY"){const _=h*p,y=h*m,S=d*p,b=d*m;t[0]=_-b*l,t[4]=-c*m,t[8]=S+y*l,t[1]=y+S*l,t[5]=c*p,t[9]=b-_*l,t[2]=-c*d,t[6]=l,t[10]=c*h}else if(e.order==="ZYX"){const _=c*p,y=c*m,S=l*p,b=l*m;t[0]=h*p,t[4]=S*d-y,t[8]=_*d+b,t[1]=h*m,t[5]=b*d+_,t[9]=y*d-S,t[2]=-d,t[6]=l*h,t[10]=c*h}else if(e.order==="YZX"){const _=c*h,y=c*d,S=l*h,b=l*d;t[0]=h*p,t[4]=b-_*m,t[8]=S*m+y,t[1]=m,t[5]=c*p,t[9]=-l*p,t[2]=-d*p,t[6]=y*m+S,t[10]=_-b*m}else if(e.order==="XZY"){const _=c*h,y=c*d,S=l*h,b=l*d;t[0]=h*p,t[4]=-m,t[8]=d*p,t[1]=_*m+b,t[5]=c*p,t[9]=y*m-S,t[2]=S*m-y,t[6]=l*p,t[10]=b*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qv,e,e0)}lookAt(e,t,n){const r=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ti.crossVectors(n,vn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ti.crossVectors(n,vn)),Ti.normalize(),Ks.crossVectors(vn,Ti),r[0]=Ti.x,r[4]=Ks.x,r[8]=vn.x,r[1]=Ti.y,r[5]=Ks.y,r[9]=vn.y,r[2]=Ti.z,r[6]=Ks.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,c=n[0],l=n[4],h=n[8],d=n[12],p=n[1],m=n[5],_=n[9],y=n[13],S=n[2],b=n[6],x=n[10],v=n[14],N=n[3],D=n[7],P=n[11],q=n[15],L=r[0],O=r[4],$=r[8],I=r[12],T=r[1],k=r[5],ae=r[9],J=r[13],te=r[2],me=r[6],ce=r[10],xe=r[14],ne=r[3],Te=r[7],Ce=r[11],Pe=r[15];return o[0]=c*L+l*T+h*te+d*ne,o[4]=c*O+l*k+h*me+d*Te,o[8]=c*$+l*ae+h*ce+d*Ce,o[12]=c*I+l*J+h*xe+d*Pe,o[1]=p*L+m*T+_*te+y*ne,o[5]=p*O+m*k+_*me+y*Te,o[9]=p*$+m*ae+_*ce+y*Ce,o[13]=p*I+m*J+_*xe+y*Pe,o[2]=S*L+b*T+x*te+v*ne,o[6]=S*O+b*k+x*me+v*Te,o[10]=S*$+b*ae+x*ce+v*Ce,o[14]=S*I+b*J+x*xe+v*Pe,o[3]=N*L+D*T+P*te+q*ne,o[7]=N*O+D*k+P*me+q*Te,o[11]=N*$+D*ae+P*ce+q*Ce,o[15]=N*I+D*J+P*xe+q*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],c=e[1],l=e[5],h=e[9],d=e[13],p=e[2],m=e[6],_=e[10],y=e[14],S=e[3],b=e[7],x=e[11],v=e[15];return S*(+o*h*m-r*d*m-o*l*_+n*d*_+r*l*y-n*h*y)+b*(+t*h*y-t*d*_+o*c*_-r*c*y+r*d*p-o*h*p)+x*(+t*d*m-t*l*y-o*c*m+n*c*y+o*l*p-n*d*p)+v*(-r*l*p-t*h*m+t*l*_+r*c*m-n*c*_+n*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],h=e[6],d=e[7],p=e[8],m=e[9],_=e[10],y=e[11],S=e[12],b=e[13],x=e[14],v=e[15],N=m*x*d-b*_*d+b*h*y-l*x*y-m*h*v+l*_*v,D=S*_*d-p*x*d-S*h*y+c*x*y+p*h*v-c*_*v,P=p*b*d-S*m*d+S*l*y-c*b*y-p*l*v+c*m*v,q=S*m*h-p*b*h-S*l*_+c*b*_+p*l*x-c*m*x,L=t*N+n*D+r*P+o*q;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return e[0]=N*O,e[1]=(b*_*o-m*x*o-b*r*y+n*x*y+m*r*v-n*_*v)*O,e[2]=(l*x*o-b*h*o+b*r*d-n*x*d-l*r*v+n*h*v)*O,e[3]=(m*h*o-l*_*o-m*r*d+n*_*d+l*r*y-n*h*y)*O,e[4]=D*O,e[5]=(p*x*o-S*_*o+S*r*y-t*x*y-p*r*v+t*_*v)*O,e[6]=(S*h*o-c*x*o-S*r*d+t*x*d+c*r*v-t*h*v)*O,e[7]=(c*_*o-p*h*o+p*r*d-t*_*d-c*r*y+t*h*y)*O,e[8]=P*O,e[9]=(S*m*o-p*b*o-S*n*y+t*b*y+p*n*v-t*m*v)*O,e[10]=(c*b*o-S*l*o+S*n*d-t*b*d-c*n*v+t*l*v)*O,e[11]=(p*l*o-c*m*o-p*n*d+t*m*d+c*n*y-t*l*y)*O,e[12]=q*O,e[13]=(p*b*r-S*m*r+S*n*_-t*b*_-p*n*x+t*m*x)*O,e[14]=(S*l*r-c*b*r-S*n*h+t*b*h+c*n*x-t*l*x)*O,e[15]=(c*m*r-p*l*r+p*n*h-t*m*h-c*n*_+t*l*_)*O,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,c=e.x,l=e.y,h=e.z,d=o*c,p=o*l;return this.set(d*c+n,d*l-r*h,d*h+r*l,0,d*l+r*h,p*l+n,p*h-r*c,0,d*h-r*l,p*h+r*c,o*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,c){return this.set(1,n,o,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,c=t._y,l=t._z,h=t._w,d=o+o,p=c+c,m=l+l,_=o*d,y=o*p,S=o*m,b=c*p,x=c*m,v=l*m,N=h*d,D=h*p,P=h*m,q=n.x,L=n.y,O=n.z;return r[0]=(1-(b+v))*q,r[1]=(y+P)*q,r[2]=(S-D)*q,r[3]=0,r[4]=(y-P)*L,r[5]=(1-(_+v))*L,r[6]=(x+N)*L,r[7]=0,r[8]=(S+D)*O,r[9]=(x-N)*O,r[10]=(1-(_+b))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=hr.set(r[0],r[1],r[2]).length();const c=hr.set(r[4],r[5],r[6]).length(),l=hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const d=1/o,p=1/c,m=1/l;return In.elements[0]*=d,In.elements[1]*=d,In.elements[2]*=d,In.elements[4]*=p,In.elements[5]*=p,In.elements[6]*=p,In.elements[8]*=m,In.elements[9]*=m,In.elements[10]*=m,t.setFromRotationMatrix(In),n.x=o,n.y=c,n.z=l,this}makePerspective(e,t,n,r,o,c,l=di){const h=this.elements,d=2*o/(t-e),p=2*o/(n-r),m=(t+e)/(t-e),_=(n+r)/(n-r);let y,S;if(l===di)y=-(c+o)/(c-o),S=-2*c*o/(c-o);else if(l===Fo)y=-c/(c-o),S=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=p,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,o,c,l=di){const h=this.elements,d=1/(t-e),p=1/(n-r),m=1/(c-o),_=(t+e)*d,y=(n+r)*p;let S,b;if(l===di)S=(c+o)*m,b=-2*m;else if(l===Fo)S=o*m,b=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=b,h[14]=-S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hr=new B,In=new et,Qv=new B(0,0,0),e0=new B(1,1,1),Ti=new B,Ks=new B,vn=new B,hu=new et,du=new kn;class Bn{constructor(e=0,t=0,n=0,r=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],c=r[4],l=r[8],h=r[1],d=r[5],p=r[9],m=r[2],_=r[6],y=r[10];switch(t){case"XYZ":this._y=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,y),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(qt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-qt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(l,y));break;case"XZY":this._z=Math.asin(-qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return du.setFromEuler(this),this.setFromQuaternion(du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let t0=0;const fu=new B,dr=new kn,si=new et,Zs=new B,Jr=new B,n0=new B,i0=new kn,pu=new B(1,0,0),mu=new B(0,1,0),_u=new B(0,0,1),gu={type:"added"},r0={type:"removed"},fr={type:"childadded",child:null},pa={type:"childremoved",child:null};class It extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new B,t=new Bn,n=new kn,r=new B(1,1,1);function o(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new et},normalMatrix:{value:new tt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(pu,e)}rotateY(e){return this.rotateOnAxis(mu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return fu.copy(e).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pu,e)}translateY(e){return this.translateOnAxis(mu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zs.copy(e):Zs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Jr,Zs,this.up):si.lookAt(Zs,Jr,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),dr.setFromRotationMatrix(si),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gu),fr.child=e,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r0),pa.child=e,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gu),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,n0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,i0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const m=h[d];o(e.shapes,m)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,d=this.material.length;h<d;h++)l.push(o(e.materials,this.material[h]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(o(e.animations,h))}}if(t){const l=c(e.geometries),h=c(e.materials),d=c(e.textures),p=c(e.images),m=c(e.shapes),_=c(e.skeletons),y=c(e.animations),S=c(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),_.length>0&&(n.skeletons=_),y.length>0&&(n.animations=y),S.length>0&&(n.nodes=S)}return n.object=r,n;function c(l){const h=[];for(const d in l){const p=l[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}It.DEFAULT_UP=new B(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new B,oi=new B,ma=new B,ai=new B,pr=new B,mr=new B,vu=new B,_a=new B,ga=new B,va=new B,ya=new Et,xa=new Et,Ea=new Et;class wn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nn.subVectors(e,t),r.cross(Nn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Nn.subVectors(r,t),oi.subVectors(n,t),ma.subVectors(e,t);const c=Nn.dot(Nn),l=Nn.dot(oi),h=Nn.dot(ma),d=oi.dot(oi),p=oi.dot(ma),m=c*d-l*l;if(m===0)return o.set(0,0,0),null;const _=1/m,y=(d*h-l*p)*_,S=(c*p-l*h)*_;return o.set(1-y-S,S,y)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,r,o,c,l,h){return this.getBarycoord(e,t,n,r,ai)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,ai.x),h.addScaledVector(c,ai.y),h.addScaledVector(l,ai.z),h)}static getInterpolatedAttribute(e,t,n,r,o,c){return ya.setScalar(0),xa.setScalar(0),Ea.setScalar(0),ya.fromBufferAttribute(e,t),xa.fromBufferAttribute(e,n),Ea.fromBufferAttribute(e,r),c.setScalar(0),c.addScaledVector(ya,o.x),c.addScaledVector(xa,o.y),c.addScaledVector(Ea,o.z),c}static isFrontFacing(e,t,n,r){return Nn.subVectors(n,t),oi.subVectors(e,t),Nn.cross(oi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Nn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let c,l;pr.subVectors(r,n),mr.subVectors(o,n),_a.subVectors(e,n);const h=pr.dot(_a),d=mr.dot(_a);if(h<=0&&d<=0)return t.copy(n);ga.subVectors(e,r);const p=pr.dot(ga),m=mr.dot(ga);if(p>=0&&m<=p)return t.copy(r);const _=h*m-p*d;if(_<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(n).addScaledVector(pr,c);va.subVectors(e,o);const y=pr.dot(va),S=mr.dot(va);if(S>=0&&y<=S)return t.copy(o);const b=y*d-h*S;if(b<=0&&d>=0&&S<=0)return l=d/(d-S),t.copy(n).addScaledVector(mr,l);const x=p*S-y*m;if(x<=0&&m-p>=0&&y-S>=0)return vu.subVectors(o,r),l=(m-p)/(m-p+(y-S)),t.copy(r).addScaledVector(vu,l);const v=1/(x+b+_);return c=b*v,l=_*v,t.copy(n).addScaledVector(pr,c).addScaledVector(mr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Js={h:0,s:0,l:0};function Sa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=_t.workingColorSpace){if(e=Gc(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,c=2*n-o;this.r=Sa(c,o,e+1/3),this.g=Sa(c,o,e),this.b=Sa(c,o,e-1/3)}return _t.toWorkingColorSpace(this,r),this}setStyle(e,t=Ut){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=r[1],l=r[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=Kh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return _t.fromWorkingColorSpace(en.copy(this),e),Math.round(qt(en.r*255,0,255))*65536+Math.round(qt(en.g*255,0,255))*256+Math.round(qt(en.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(en.copy(this),t);const n=en.r,r=en.g,o=en.b,c=Math.max(n,r,o),l=Math.min(n,r,o);let h,d;const p=(l+c)/2;if(l===c)h=0,d=0;else{const m=c-l;switch(d=p<=.5?m/(c+l):m/(2-c-l),c){case n:h=(r-o)/m+(r<o?6:0);break;case r:h=(o-n)/m+2;break;case o:h=(n-r)/m+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Ut){_t.fromWorkingColorSpace(en.copy(this),e);const t=en.r,n=en.g,r=en.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Js);const n=cs(bi.h,Js.h,t),r=cs(bi.s,Js.s,t),o=cs(bi.l,Js.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Ye;Ye.NAMES=Kh;let s0=0;class Zn extends nr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=On(),this.name="",this.blending=br,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Wa,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}if(t){const o=r(e.textures),c=r(e.images);o.length>0&&(n.textures=o),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fi extends Zn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new B,Qs=new Ke;class hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ac,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qs.fromBufferAttribute(this,t),Qs.applyMatrix3(e),this.setXY(t,Qs.x,Qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),o=St(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ac&&(e.usage=this.usage),e}}class Zh extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jh extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zt extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let o0=0;const Tn=new et,Ma=new It,_r=new B,yn=new Xt,Qr=new Xt,Wt=new B;class mn extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jh(e)?Jh:Zh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new tt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return Ma.lookAt(e),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Zt(n,3))}else{for(let n=0,r=t.count;n<r;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];yn.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const l=t[o];Qr.setFromBufferAttribute(l),this.morphTargetsRelative?(Wt.addVectors(yn.min,Qr.min),yn.expandByPoint(Wt),Wt.addVectors(yn.max,Qr.max),yn.expandByPoint(Wt)):(yn.expandByPoint(Qr.min),yn.expandByPoint(Qr.max))}yn.getCenter(n);let r=0;for(let o=0,c=e.count;o<c;o++)Wt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(Wt));if(t)for(let o=0,c=t.length;o<c;o++){const l=t[o],h=this.morphTargetsRelative;for(let d=0,p=l.count;d<p;d++)Wt.fromBufferAttribute(l,d),h&&(_r.fromBufferAttribute(e,d),Wt.add(_r)),r=Math.max(r,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],h=[];for(let $=0;$<n.count;$++)l[$]=new B,h[$]=new B;const d=new B,p=new B,m=new B,_=new Ke,y=new Ke,S=new Ke,b=new B,x=new B;function v($,I,T){d.fromBufferAttribute(n,$),p.fromBufferAttribute(n,I),m.fromBufferAttribute(n,T),_.fromBufferAttribute(o,$),y.fromBufferAttribute(o,I),S.fromBufferAttribute(o,T),p.sub(d),m.sub(d),y.sub(_),S.sub(_);const k=1/(y.x*S.y-S.x*y.y);isFinite(k)&&(b.copy(p).multiplyScalar(S.y).addScaledVector(m,-y.y).multiplyScalar(k),x.copy(m).multiplyScalar(y.x).addScaledVector(p,-S.x).multiplyScalar(k),l[$].add(b),l[I].add(b),l[T].add(b),h[$].add(x),h[I].add(x),h[T].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let $=0,I=N.length;$<I;++$){const T=N[$],k=T.start,ae=T.count;for(let J=k,te=k+ae;J<te;J+=3)v(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const D=new B,P=new B,q=new B,L=new B;function O($){q.fromBufferAttribute(r,$),L.copy(q);const I=l[$];D.copy(I),D.sub(q.multiplyScalar(q.dot(I))).normalize(),P.crossVectors(L,I);const k=P.dot(h[$])<0?-1:1;c.setXYZW($,D.x,D.y,D.z,k)}for(let $=0,I=N.length;$<I;++$){const T=N[$],k=T.start,ae=T.count;for(let J=k,te=k+ae;J<te;J+=3)O(e.getX(J+0)),O(e.getX(J+1)),O(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,y=n.count;_<y;_++)n.setXYZ(_,0,0,0);const r=new B,o=new B,c=new B,l=new B,h=new B,d=new B,p=new B,m=new B;if(e)for(let _=0,y=e.count;_<y;_+=3){const S=e.getX(_+0),b=e.getX(_+1),x=e.getX(_+2);r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,b),c.fromBufferAttribute(t,x),p.subVectors(c,o),m.subVectors(r,o),p.cross(m),l.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,x),l.add(p),h.add(p),d.add(p),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(b,h.x,h.y,h.z),n.setXYZ(x,d.x,d.y,d.z)}else for(let _=0,y=t.count;_<y;_+=3)r.fromBufferAttribute(t,_+0),o.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),p.subVectors(c,o),m.subVectors(r,o),p.cross(m),n.setXYZ(_+0,p.x,p.y,p.z),n.setXYZ(_+1,p.x,p.y,p.z),n.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(l,h){const d=l.array,p=l.itemSize,m=l.normalized,_=new d.constructor(h.length*p);let y=0,S=0;for(let b=0,x=h.length;b<x;b++){l.isInterleavedBufferAttribute?y=h[b]*l.data.stride+l.offset:y=h[b]*p;for(let v=0;v<p;v++)_[S++]=d[y++]}return new hn(_,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],d=e(h,n);t.setAttribute(l,d)}const o=this.morphAttributes;for(const l in o){const h=[],d=o[l];for(let p=0,m=d.length;p<m;p++){const _=d[p],y=e(_,n);h.push(y)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,h=c.length;l<h;l++){const d=c[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const d=n[h];e.data.attributes[h]=d.toJSON(e.data)}const r={};let o=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let m=0,_=d.length;m<_;m++){const y=d[m];p.push(y.toJSON(e.data))}p.length>0&&(r[h]=p,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const d in r){const p=r[d];this.setAttribute(d,p.clone(t))}const o=e.morphAttributes;for(const d in o){const p=[],m=o[d];for(let _=0,y=m.length;_<y;_++)p.push(m[_].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,p=c.length;d<p;d++){const m=c[d];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yu=new et,Wi=new _s,eo=new Jn,xu=new B,to=new B,no=new B,io=new B,Ta=new B,ro=new B,Eu=new B,so=new B;class Kt extends It{constructor(e=new mn,t=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(o&&l){ro.set(0,0,0);for(let h=0,d=o.length;h<d;h++){const p=l[h],m=o[h];p!==0&&(Ta.fromBufferAttribute(m,e),c?ro.addScaledVector(Ta,p):ro.addScaledVector(Ta.sub(t),p))}t.add(ro)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(o),Wi.copy(e.ray).recast(e.near),!(eo.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(eo,xu)===null||Wi.origin.distanceToSquared(xu)>(e.far-e.near)**2))&&(yu.copy(o).invert(),Wi.copy(e.ray).applyMatrix4(yu),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let r;const o=this.geometry,c=this.material,l=o.index,h=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,_=o.groups,y=o.drawRange;if(l!==null)if(Array.isArray(c))for(let S=0,b=_.length;S<b;S++){const x=_[S],v=c[x.materialIndex],N=Math.max(x.start,y.start),D=Math.min(l.count,Math.min(x.start+x.count,y.start+y.count));for(let P=N,q=D;P<q;P+=3){const L=l.getX(P),O=l.getX(P+1),$=l.getX(P+2);r=oo(this,v,e,n,d,p,m,L,O,$),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const S=Math.max(0,y.start),b=Math.min(l.count,y.start+y.count);for(let x=S,v=b;x<v;x+=3){const N=l.getX(x),D=l.getX(x+1),P=l.getX(x+2);r=oo(this,c,e,n,d,p,m,N,D,P),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(c))for(let S=0,b=_.length;S<b;S++){const x=_[S],v=c[x.materialIndex],N=Math.max(x.start,y.start),D=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let P=N,q=D;P<q;P+=3){const L=P,O=P+1,$=P+2;r=oo(this,v,e,n,d,p,m,L,O,$),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const S=Math.max(0,y.start),b=Math.min(h.count,y.start+y.count);for(let x=S,v=b;x<v;x+=3){const N=x,D=x+1,P=x+2;r=oo(this,c,e,n,d,p,m,N,D,P),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function a0(i,e,t,n,r,o,c,l){let h;if(e.side===pn?h=n.intersectTriangle(c,o,r,!0,l):h=n.intersectTriangle(r,o,c,e.side===_i,l),h===null)return null;so.copy(l),so.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(so);return d<t.near||d>t.far?null:{distance:d,point:so.clone(),object:i}}function oo(i,e,t,n,r,o,c,l,h,d){i.getVertexPosition(l,to),i.getVertexPosition(h,no),i.getVertexPosition(d,io);const p=a0(i,e,t,n,to,no,io,Eu);if(p){const m=new B;wn.getBarycoord(Eu,to,no,io,m),r&&(p.uv=wn.getInterpolatedAttribute(r,l,h,d,m,new Ke)),o&&(p.uv1=wn.getInterpolatedAttribute(o,l,h,d,m,new Ke)),c&&(p.normal=wn.getInterpolatedAttribute(c,l,h,d,m,new B),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const _={a:l,b:h,c:d,normal:new B,materialIndex:0};wn.getNormal(to,no,io,_.normal),p.face=_,p.barycoord=m}return p}class Vr extends mn{constructor(e=1,t=1,n=1,r=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:c};const l=this;r=Math.floor(r),o=Math.floor(o),c=Math.floor(c);const h=[],d=[],p=[],m=[];let _=0,y=0;S("z","y","x",-1,-1,n,t,e,c,o,0),S("z","y","x",1,-1,n,t,-e,c,o,1),S("x","z","y",1,1,e,n,t,r,c,2),S("x","z","y",1,-1,e,n,-t,r,c,3),S("x","y","z",1,-1,e,t,n,r,o,4),S("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(h),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(p,3)),this.setAttribute("uv",new Zt(m,2));function S(b,x,v,N,D,P,q,L,O,$,I){const T=P/O,k=q/$,ae=P/2,J=q/2,te=L/2,me=O+1,ce=$+1;let xe=0,ne=0;const Te=new B;for(let Ce=0;Ce<ce;Ce++){const Pe=Ce*k-J;for(let Xe=0;Xe<me;Xe++){const nt=Xe*T-ae;Te[b]=nt*N,Te[x]=Pe*D,Te[v]=te,d.push(Te.x,Te.y,Te.z),Te[b]=0,Te[x]=0,Te[v]=L>0?1:-1,p.push(Te.x,Te.y,Te.z),m.push(Xe/O),m.push(1-Ce/$),xe+=1}}for(let Ce=0;Ce<$;Ce++)for(let Pe=0;Pe<O;Pe++){const Xe=_+Pe+me*Ce,nt=_+Pe+me*(Ce+1),ee=_+(Pe+1)+me*(Ce+1),pe=_+(Pe+1)+me*Ce;h.push(Xe,nt,pe),h.push(nt,ee,pe),ne+=6}l.addGroup(y,ne,I),y+=ne,_+=xe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function cn(i){const e={};for(let t=0;t<i.length;t++){const n=Or(i[t]);for(const r in n)e[r]=n[r]}return e}function c0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const l0={clone:Or,merge:cn};var u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Zn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=h0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=c0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ed extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new B,Su=new Ke,Mu=new Ke;class ln extends ed{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Su,Mu),t.subVectors(Mu,Su)}setViewOffset(e,t,n,r,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;o+=c.offsetX*r/h,t-=c.offsetY*n/d,r*=c.width/h,n*=c.height/d}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gr=-90,vr=1;class d0 extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(gr,vr,e,t);r.layers=this.layers,this.add(r);const o=new ln(gr,vr,e,t);o.layers=this.layers,this.add(o);const c=new ln(gr,vr,e,t);c.layers=this.layers,this.add(c);const l=new ln(gr,vr,e,t);l.layers=this.layers,this.add(l);const h=new ln(gr,vr,e,t);h.layers=this.layers,this.add(h);const d=new ln(gr,vr,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,c,l,h]=t;for(const d of t)this.remove(d);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,l,h,d,p]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,h),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(m,_,y),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class td extends jt{constructor(e,t,n,r,o,c,l,h,d,p){e=e!==void 0?e:[],t=t!==void 0?t:Dr,super(e,t,n,r,o,c,l,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class f0 extends tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new td(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vr(5,5,5),o=new Ii({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Di});o.uniforms.tEquirect.value=t;const c=new Kt(r,o),l=t.minFilter;return t.minFilter===hi&&(t.minFilter=Sn),new d0(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(o)}}const ba=new B,p0=new B,m0=new tt;class Ri{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ba.subVectors(n,t).cross(p0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ba),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||m0.getNormalMatrix(e),r=this.coplanarPoint(ba).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new Jn,ao=new B;class Wc{constructor(e=new Ri,t=new Ri,n=new Ri,r=new Ri,o=new Ri,c=new Ri){this.planes=[e,t,n,r,o,c]}set(e,t,n,r,o,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(o),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di){const n=this.planes,r=e.elements,o=r[0],c=r[1],l=r[2],h=r[3],d=r[4],p=r[5],m=r[6],_=r[7],y=r[8],S=r[9],b=r[10],x=r[11],v=r[12],N=r[13],D=r[14],P=r[15];if(n[0].setComponents(h-o,_-d,x-y,P-v).normalize(),n[1].setComponents(h+o,_+d,x+y,P+v).normalize(),n[2].setComponents(h+c,_+p,x+S,P+N).normalize(),n[3].setComponents(h-c,_-p,x-S,P-N).normalize(),n[4].setComponents(h-l,_-m,x-b,P-D).normalize(),t===di)n[5].setComponents(h+l,_+m,x+b,P+D).normalize();else if(t===Fo)n[5].setComponents(l,m,b,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ao.x=r.normal.x>0?e.max.x:e.min.x,ao.y=r.normal.y>0?e.max.y:e.min.y,ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nd(){let i=null,e=!1,t=null,n=null;function r(o,c){t(o,c),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function _0(i){const e=new WeakMap;function t(l,h){const d=l.array,p=l.usage,m=d.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,d,p),l.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function n(l,h,d){const p=h.array,m=h.updateRanges;if(i.bindBuffer(d,l),m.length===0)i.bufferSubData(d,0,p);else{m.sort((y,S)=>y.start-S.start);let _=0;for(let y=1;y<m.length;y++){const S=m[_],b=m[y];b.start<=S.start+S.count+1?S.count=Math.max(S.count,b.start+b.count-S.start):(++_,m[_]=b)}m.length=_+1;for(let y=0,S=m.length;y<S;y++){const b=m[y];i.bufferSubData(d,b.start*p.BYTES_PER_ELEMENT,p,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=e.get(l);h&&(i.deleteBuffer(h.buffer),e.delete(l))}function c(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const p=e.get(l);(!p||p.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,t(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,l,h),d.version=l.version}}return{get:r,remove:o,update:c}}class gs extends mn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,c=t/2,l=Math.floor(n),h=Math.floor(r),d=l+1,p=h+1,m=e/l,_=t/h,y=[],S=[],b=[],x=[];for(let v=0;v<p;v++){const N=v*_-c;for(let D=0;D<d;D++){const P=D*m-o;S.push(P,-N,0),b.push(0,0,1),x.push(D/l),x.push(1-v/h)}}for(let v=0;v<h;v++)for(let N=0;N<l;N++){const D=N+d*v,P=N+d*(v+1),q=N+1+d*(v+1),L=N+1+d*v;y.push(D,P,L),y.push(P,q,L)}this.setIndex(y),this.setAttribute("position",new Zt(S,3)),this.setAttribute("normal",new Zt(b,3)),this.setAttribute("uv",new Zt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.width,e.height,e.widthSegments,e.heightSegments)}}var g0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v0=`#ifdef USE_ALPHAHASH
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
#endif`,y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M0=`#ifdef USE_AOMAP
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
#endif`,T0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b0=`#ifdef USE_BATCHING
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
#endif`,w0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,P0=`#ifdef USE_IRIDESCENCE
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
#endif`,D0=`#ifdef USE_BUMPMAP
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
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,z0=`#define PI 3.141592653589793
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
} // validated`,H0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,V0=`vec3 transformedNormal = objectNormal;
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
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ny=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ry=`#ifdef USE_GRADIENTMAP
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cy=`uniform bool receiveShadow;
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
#endif`,ly=`#ifdef USE_ENVMAP
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
#endif`,my=`struct PhysicalMaterial {
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
}`,_y=`
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
#endif`,gy=`#if defined( RE_IndirectDiffuse )
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
#endif`,yy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ey=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,My=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ty=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,by=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wy=`#if defined( USE_POINTS_UV )
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
#endif`,Ry=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Py=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ly=`#ifdef USE_MORPHTARGETS
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
#endif`,Iy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
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
#endif`,Hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$y=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tx=`float getShadowMask() {
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
}`,nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ix=`#ifdef USE_SKINNING
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
#endif`,rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sx=`#ifdef USE_SKINNING
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
#endif`,ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ax=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ux=`#ifdef USE_TRANSMISSION
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
#endif`,hx=`#ifdef USE_TRANSMISSION
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
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gx=`uniform sampler2D t2D;
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`#include <common>
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
}`,Mx=`#if DEPTH_PACKING == 3200
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
}`,Tx=`#define DISTANCE
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
}`,bx=`#define DISTANCE
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`uniform float scale;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Lx=`#define LAMBERT
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
}`,Ix=`#define LAMBERT
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
}`,Nx=`#define MATCAP
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
}`,Fx=`#define MATCAP
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
}`,Ux=`#define NORMAL
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
}`,Ox=`#define NORMAL
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
}`,kx=`#define PHONG
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
}`,Bx=`#define PHONG
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
}`,zx=`#define STANDARD
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
}`,Hx=`#define STANDARD
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
}`,Vx=`#define TOON
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
}`,Gx=`#define TOON
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
}`,Wx=`uniform float size;
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
}`,Xx=`uniform vec3 diffuse;
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
}`,jx=`#include <common>
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
}`,$x=`uniform vec3 color;
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
}`,Yx=`uniform float rotation;
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
}`,qx=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:g0,alphahash_pars_fragment:v0,alphamap_fragment:y0,alphamap_pars_fragment:x0,alphatest_fragment:E0,alphatest_pars_fragment:S0,aomap_fragment:M0,aomap_pars_fragment:T0,batching_pars_vertex:b0,batching_vertex:w0,begin_vertex:A0,beginnormal_vertex:R0,bsdfs:C0,iridescence_fragment:P0,bumpmap_pars_fragment:D0,clipping_planes_fragment:L0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:F0,color_fragment:U0,color_pars_fragment:O0,color_pars_vertex:k0,color_vertex:B0,common:z0,cube_uv_reflection_fragment:H0,defaultnormal_vertex:V0,displacementmap_pars_vertex:G0,displacementmap_vertex:W0,emissivemap_fragment:X0,emissivemap_pars_fragment:j0,colorspace_fragment:$0,colorspace_pars_fragment:Y0,envmap_fragment:q0,envmap_common_pars_fragment:K0,envmap_pars_fragment:Z0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:ly,envmap_vertex:Q0,fog_vertex:ey,fog_pars_vertex:ty,fog_fragment:ny,fog_pars_fragment:iy,gradientmap_pars_fragment:ry,lightmap_pars_fragment:sy,lights_lambert_fragment:oy,lights_lambert_pars_fragment:ay,lights_pars_begin:cy,lights_toon_fragment:uy,lights_toon_pars_fragment:hy,lights_phong_fragment:dy,lights_phong_pars_fragment:fy,lights_physical_fragment:py,lights_physical_pars_fragment:my,lights_fragment_begin:_y,lights_fragment_maps:gy,lights_fragment_end:vy,logdepthbuf_fragment:yy,logdepthbuf_pars_fragment:xy,logdepthbuf_pars_vertex:Ey,logdepthbuf_vertex:Sy,map_fragment:My,map_pars_fragment:Ty,map_particle_fragment:by,map_particle_pars_fragment:wy,metalnessmap_fragment:Ay,metalnessmap_pars_fragment:Ry,morphinstance_vertex:Cy,morphcolor_vertex:Py,morphnormal_vertex:Dy,morphtarget_pars_vertex:Ly,morphtarget_vertex:Iy,normal_fragment_begin:Ny,normal_fragment_maps:Fy,normal_pars_fragment:Uy,normal_pars_vertex:Oy,normal_vertex:ky,normalmap_pars_fragment:By,clearcoat_normal_fragment_begin:zy,clearcoat_normal_fragment_maps:Hy,clearcoat_pars_fragment:Vy,iridescence_pars_fragment:Gy,opaque_fragment:Wy,packing:Xy,premultiplied_alpha_fragment:jy,project_vertex:$y,dithering_fragment:Yy,dithering_pars_fragment:qy,roughnessmap_fragment:Ky,roughnessmap_pars_fragment:Zy,shadowmap_pars_fragment:Jy,shadowmap_pars_vertex:Qy,shadowmap_vertex:ex,shadowmask_pars_fragment:tx,skinbase_vertex:nx,skinning_pars_vertex:ix,skinning_vertex:rx,skinnormal_vertex:sx,specularmap_fragment:ox,specularmap_pars_fragment:ax,tonemapping_fragment:cx,tonemapping_pars_fragment:lx,transmission_fragment:ux,transmission_pars_fragment:hx,uv_pars_fragment:dx,uv_pars_vertex:fx,uv_vertex:px,worldpos_vertex:mx,background_vert:_x,background_frag:gx,backgroundCube_vert:vx,backgroundCube_frag:yx,cube_vert:xx,cube_frag:Ex,depth_vert:Sx,depth_frag:Mx,distanceRGBA_vert:Tx,distanceRGBA_frag:bx,equirect_vert:wx,equirect_frag:Ax,linedashed_vert:Rx,linedashed_frag:Cx,meshbasic_vert:Px,meshbasic_frag:Dx,meshlambert_vert:Lx,meshlambert_frag:Ix,meshmatcap_vert:Nx,meshmatcap_frag:Fx,meshnormal_vert:Ux,meshnormal_frag:Ox,meshphong_vert:kx,meshphong_frag:Bx,meshphysical_vert:zx,meshphysical_frag:Hx,meshtoon_vert:Vx,meshtoon_frag:Gx,points_vert:Wx,points_frag:Xx,shadow_vert:jx,shadow_frag:$x,sprite_vert:Yx,sprite_frag:qx},be={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},jn={basic:{uniforms:cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ye(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:cn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:cn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ye(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:cn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:cn([be.points,be.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:cn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:cn([be.common,be.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:cn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:cn([be.sprite,be.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:cn([be.common,be.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:cn([be.lights,be.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};jn.physical={uniforms:cn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const co={r:0,b:0,g:0},ji=new Bn,Kx=new et;function Zx(i,e,t,n,r,o,c){const l=new Ye(0);let h=o===!0?0:1,d,p,m=null,_=0,y=null;function S(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?t:e).get(D)),D}function b(N){let D=!1;const P=S(N);P===null?v(l,h):P&&P.isColor&&(v(P,1),D=!0);const q=i.xr.getEnvironmentBlendMode();q==="additive"?n.buffers.color.setClear(0,0,0,1,c):q==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(N,D){const P=S(D);P&&(P.isCubeTexture||P.mapping===ko)?(p===void 0&&(p=new Kt(new Vr(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Or(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(q,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),ji.copy(D.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),p.material.uniforms.envMap.value=P,p.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(ji)),p.material.toneMapped=_t.getTransfer(P.colorSpace)!==bt,(m!==P||_!==P.version||y!==i.toneMapping)&&(p.material.needsUpdate=!0,m=P,_=P.version,y=i.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new Kt(new gs(2,2),new Ii({name:"BackgroundMaterial",uniforms:Or(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.toneMapped=_t.getTransfer(P.colorSpace)!==bt,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(m!==P||_!==P.version||y!==i.toneMapping)&&(d.material.needsUpdate=!0,m=P,_=P.version,y=i.toneMapping),d.layers.enableAll(),N.unshift(d,d.geometry,d.material,0,0,null))}function v(N,D){N.getRGB(co,Qh(i)),n.buffers.color.setClear(co.r,co.g,co.b,D,c)}return{getClearColor:function(){return l},setClearColor:function(N,D=1){l.set(N),h=D,v(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,v(l,h)},render:b,addToRenderList:x}}function Jx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=_(null);let o=r,c=!1;function l(T,k,ae,J,te){let me=!1;const ce=m(J,ae,k);o!==ce&&(o=ce,d(o.object)),me=y(T,J,ae,te),me&&S(T,J,ae,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(me||c)&&(c=!1,P(T,k,ae,J),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function h(){return i.createVertexArray()}function d(T){return i.bindVertexArray(T)}function p(T){return i.deleteVertexArray(T)}function m(T,k,ae){const J=ae.wireframe===!0;let te=n[T.id];te===void 0&&(te={},n[T.id]=te);let me=te[k.id];me===void 0&&(me={},te[k.id]=me);let ce=me[J];return ce===void 0&&(ce=_(h()),me[J]=ce),ce}function _(T){const k=[],ae=[],J=[];for(let te=0;te<t;te++)k[te]=0,ae[te]=0,J[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ae,attributeDivisors:J,object:T,attributes:{},index:null}}function y(T,k,ae,J){const te=o.attributes,me=k.attributes;let ce=0;const xe=ae.getAttributes();for(const ne in xe)if(xe[ne].location>=0){const Ce=te[ne];let Pe=me[ne];if(Pe===void 0&&(ne==="instanceMatrix"&&T.instanceMatrix&&(Pe=T.instanceMatrix),ne==="instanceColor"&&T.instanceColor&&(Pe=T.instanceColor)),Ce===void 0||Ce.attribute!==Pe||Pe&&Ce.data!==Pe.data)return!0;ce++}return o.attributesNum!==ce||o.index!==J}function S(T,k,ae,J){const te={},me=k.attributes;let ce=0;const xe=ae.getAttributes();for(const ne in xe)if(xe[ne].location>=0){let Ce=me[ne];Ce===void 0&&(ne==="instanceMatrix"&&T.instanceMatrix&&(Ce=T.instanceMatrix),ne==="instanceColor"&&T.instanceColor&&(Ce=T.instanceColor));const Pe={};Pe.attribute=Ce,Ce&&Ce.data&&(Pe.data=Ce.data),te[ne]=Pe,ce++}o.attributes=te,o.attributesNum=ce,o.index=J}function b(){const T=o.newAttributes;for(let k=0,ae=T.length;k<ae;k++)T[k]=0}function x(T){v(T,0)}function v(T,k){const ae=o.newAttributes,J=o.enabledAttributes,te=o.attributeDivisors;ae[T]=1,J[T]===0&&(i.enableVertexAttribArray(T),J[T]=1),te[T]!==k&&(i.vertexAttribDivisor(T,k),te[T]=k)}function N(){const T=o.newAttributes,k=o.enabledAttributes;for(let ae=0,J=k.length;ae<J;ae++)k[ae]!==T[ae]&&(i.disableVertexAttribArray(ae),k[ae]=0)}function D(T,k,ae,J,te,me,ce){ce===!0?i.vertexAttribIPointer(T,k,ae,te,me):i.vertexAttribPointer(T,k,ae,J,te,me)}function P(T,k,ae,J){b();const te=J.attributes,me=ae.getAttributes(),ce=k.defaultAttributeValues;for(const xe in me){const ne=me[xe];if(ne.location>=0){let Te=te[xe];if(Te===void 0&&(xe==="instanceMatrix"&&T.instanceMatrix&&(Te=T.instanceMatrix),xe==="instanceColor"&&T.instanceColor&&(Te=T.instanceColor)),Te!==void 0){const Ce=Te.normalized,Pe=Te.itemSize,Xe=e.get(Te);if(Xe===void 0)continue;const nt=Xe.buffer,ee=Xe.type,pe=Xe.bytesPerElement,Le=ee===i.INT||ee===i.UNSIGNED_INT||Te.gpuType===Uc;if(Te.isInterleavedBufferAttribute){const Me=Te.data,de=Me.stride,Se=Te.offset;if(Me.isInstancedInterleavedBuffer){for(let it=0;it<ne.locationSize;it++)v(ne.location+it,Me.meshPerAttribute);T.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let it=0;it<ne.locationSize;it++)x(ne.location+it);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let it=0;it<ne.locationSize;it++)D(ne.location+it,Pe/ne.locationSize,ee,Ce,de*pe,(Se+Pe/ne.locationSize*it)*pe,Le)}else{if(Te.isInstancedBufferAttribute){for(let Me=0;Me<ne.locationSize;Me++)v(ne.location+Me,Te.meshPerAttribute);T.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Me=0;Me<ne.locationSize;Me++)x(ne.location+Me);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Me=0;Me<ne.locationSize;Me++)D(ne.location+Me,Pe/ne.locationSize,ee,Ce,Pe*pe,Pe/ne.locationSize*Me*pe,Le)}}else if(ce!==void 0){const Ce=ce[xe];if(Ce!==void 0)switch(Ce.length){case 2:i.vertexAttrib2fv(ne.location,Ce);break;case 3:i.vertexAttrib3fv(ne.location,Ce);break;case 4:i.vertexAttrib4fv(ne.location,Ce);break;default:i.vertexAttrib1fv(ne.location,Ce)}}}}N()}function q(){$();for(const T in n){const k=n[T];for(const ae in k){const J=k[ae];for(const te in J)p(J[te].object),delete J[te];delete k[ae]}delete n[T]}}function L(T){if(n[T.id]===void 0)return;const k=n[T.id];for(const ae in k){const J=k[ae];for(const te in J)p(J[te].object),delete J[te];delete k[ae]}delete n[T.id]}function O(T){for(const k in n){const ae=n[k];if(ae[T.id]===void 0)continue;const J=ae[T.id];for(const te in J)p(J[te].object),delete J[te];delete ae[T.id]}}function $(){I(),c=!0,o!==r&&(o=r,d(o.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:$,resetDefaultState:I,dispose:q,releaseStatesOfGeometry:L,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:x,disableUnusedAttributes:N}}function Qx(i,e,t){let n;function r(d){n=d}function o(d,p){i.drawArrays(n,d,p),t.update(p,n,1)}function c(d,p,m){m!==0&&(i.drawArraysInstanced(n,d,p,m),t.update(p,n,m))}function l(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,p,0,m);let y=0;for(let S=0;S<m;S++)y+=p[S];t.update(y,n,1)}function h(d,p,m,_){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<d.length;S++)c(d[S],p[S],_[S]);else{y.multiDrawArraysInstancedWEBGL(n,d,0,p,0,_,0,m);let S=0;for(let b=0;b<m;b++)S+=p[b]*_[b];t.update(S,n,1)}}this.setMode=r,this.render=o,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function eE(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(O){return!(O!==An&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(O){const $=O===ms&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==gi&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Un&&!$)}function h(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=h(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),q=S>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:m,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:S,maxTextureSize:b,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:P,vertexTextures:q,maxSamples:L}}function tE(i){const e=this;let t=null,n=0,r=!1,o=!1;const c=new Ri,l=new tt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const y=m.length!==0||_||n!==0||r;return r=_,n=m.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,_){t=p(m,_,0)},this.setState=function(m,_,y){const S=m.clippingPlanes,b=m.clipIntersection,x=m.clipShadows,v=i.get(m);if(!r||S===null||S.length===0||o&&!x)o?p(null):d();else{const N=o?0:n,D=N*4;let P=v.clippingState||null;h.value=P,P=p(S,_,D,y);for(let q=0;q!==D;++q)P[q]=t[q];v.clippingState=P,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,_,y,S){const b=m!==null?m.length:0;let x=null;if(b!==0){if(x=h.value,S!==!0||x===null){const v=y+b*4,N=_.matrixWorldInverse;l.getNormalMatrix(N),(x===null||x.length<v)&&(x=new Float32Array(v));for(let D=0,P=y;D!==b;++D,P+=4)c.copy(m[D]).applyMatrix4(N,l),c.normal.toArray(x,P),x[P+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function nE(i){let e=new WeakMap;function t(c,l){return l===Ja?c.mapping=Dr:l===Qa&&(c.mapping=Lr),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===Ja||l===Qa)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const d=new f0(h.height);return d.fromEquirectangularTexture(i,c),e.set(c,d),c.addEventListener("dispose",r),t(d.texture,c.mapping)}else return null}}return c}function r(c){const l=c.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Xc extends ed{constructor(e=-1,t=1,n=1,r=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,c=n+e,l=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,c=o+d*this.view.width,l-=p*this.view.offsetY,h=l-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Sr=4,Tu=[.125,.215,.35,.446,.526,.582],Zi=20,wa=new Xc,bu=new Ye;let Aa=null,Ra=0,Ca=0,Pa=!1;const qi=(1+Math.sqrt(5))/2,yr=1/qi,wu=[new B(-qi,yr,0),new B(qi,yr,0),new B(-yr,0,qi),new B(yr,0,qi),new B(0,qi,-yr),new B(0,qi,yr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Au{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Aa,Ra,Ca),this._renderer.xr.enabled=Pa,e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:ms,format:An,colorSpace:dn,depthBuffer:!1},r=Ru(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ru(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iE(o)),this._blurMaterial=rE(o,e,t)}return r}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,r){const l=new ln(90,1,t,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,_=p.toneMapping;p.getClearColor(bu),p.toneMapping=Li,p.autoClear=!1;const y=new fi({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),S=new Kt(new Vr,y);let b=!1;const x=e.background;x?x.isColor&&(y.color.copy(x),e.background=null,b=!0):(y.color.copy(bu),b=!0);for(let v=0;v<6;v++){const N=v%3;N===0?(l.up.set(0,h[v],0),l.lookAt(d[v],0,0)):N===1?(l.up.set(0,0,h[v]),l.lookAt(0,d[v],0)):(l.up.set(0,h[v],0),l.lookAt(0,0,d[v]));const D=this._cubeSize;lo(r,N*D,v>2?D:0,D,D),p.setRenderTarget(r),b&&p.render(S,l),p.render(e,l)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=_,p.autoClear=m,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Dr||e.mapping===Lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());const o=r?this._cubemapMaterial:this._equirectMaterial,c=new Kt(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;const h=this._cubeSize;lo(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(c,wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=wu[(r-o-1)%wu.length];this._blur(e,o-1,o,c,l)}t.autoClear=n}_blur(e,t,n,r,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",o),this._halfBlur(c,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,c,l){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new Kt(this._lodPlanes[r],d),_=d.uniforms,y=this._sizeLods[n]-1,S=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Zi-1),b=o/S,x=isFinite(o)?1+Math.floor(p*b):Zi;x>Zi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Zi}`);const v=[];let N=0;for(let O=0;O<Zi;++O){const $=O/b,I=Math.exp(-$*$/2);v.push(I),O===0?N+=I:O<x&&(N+=2*I)}for(let O=0;O<v.length;O++)v[O]=v[O]/N;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=v,_.latitudinal.value=c==="latitudinal",l&&(_.poleAxis.value=l);const{_lodMax:D}=this;_.dTheta.value=S,_.mipInt.value=D-n;const P=this._sizeLods[r],q=3*P*(r>D-Sr?r-D+Sr:0),L=4*(this._cubeSize-P);lo(t,q,L,3*P,2*P),h.setRenderTarget(t),h.render(m,wa)}}function iE(i){const e=[],t=[],n=[];let r=i;const o=i-Sr+1+Tu.length;for(let c=0;c<o;c++){const l=Math.pow(2,r);t.push(l);let h=1/l;c>i-Sr?h=Tu[c-i+Sr-1]:c===0&&(h=0),n.push(h);const d=1/(l-2),p=-d,m=1+d,_=[p,p,m,p,m,m,p,p,m,m,p,m],y=6,S=6,b=3,x=2,v=1,N=new Float32Array(b*S*y),D=new Float32Array(x*S*y),P=new Float32Array(v*S*y);for(let L=0;L<y;L++){const O=L%3*2/3-1,$=L>2?0:-1,I=[O,$,0,O+2/3,$,0,O+2/3,$+1,0,O,$,0,O+2/3,$+1,0,O,$+1,0];N.set(I,b*S*L),D.set(_,x*S*L);const T=[L,L,L,L,L,L];P.set(T,v*S*L)}const q=new mn;q.setAttribute("position",new hn(N,b)),q.setAttribute("uv",new hn(D,x)),q.setAttribute("faceIndex",new hn(P,v)),e.push(q),r>Sr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ru(i,e,t){const n=new tr(i,e,t);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function rE(i,e,t){const n=new Float32Array(Zi),r=new B(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Cu(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Pu(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}function sE(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const h=l.mapping,d=h===Ja||h===Qa,p=h===Dr||h===Lr;if(d||p){let m=e.get(l);const _=m!==void 0?m.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==_)return t===null&&(t=new Au(i)),m=d?t.fromEquirectangular(l,m):t.fromCubemap(l,m),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),m.texture;if(m!==void 0)return m.texture;{const y=l.image;return d&&y&&y.height>0||p&&y&&r(y)?(t===null&&(t=new Au(i)),m=d?t.fromEquirectangular(l):t.fromCubemap(l),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),l.addEventListener("dispose",o),m.texture):null}}}return l}function r(l){let h=0;const d=6;for(let p=0;p<d;p++)l[p]!==void 0&&h++;return h===d}function o(l){const h=l.target;h.removeEventListener("dispose",o);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function oE(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&os("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function aE(i,e,t,n){const r={},o=new WeakMap;function c(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const S in _.attributes)e.remove(_.attributes[S]);for(const S in _.morphAttributes){const b=_.morphAttributes[S];for(let x=0,v=b.length;x<v;x++)e.remove(b[x])}_.removeEventListener("dispose",c),delete r[_.id];const y=o.get(_);y&&(e.remove(y),o.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(m,_){return r[_.id]===!0||(_.addEventListener("dispose",c),r[_.id]=!0,t.memory.geometries++),_}function h(m){const _=m.attributes;for(const S in _)e.update(_[S],i.ARRAY_BUFFER);const y=m.morphAttributes;for(const S in y){const b=y[S];for(let x=0,v=b.length;x<v;x++)e.update(b[x],i.ARRAY_BUFFER)}}function d(m){const _=[],y=m.index,S=m.attributes.position;let b=0;if(y!==null){const N=y.array;b=y.version;for(let D=0,P=N.length;D<P;D+=3){const q=N[D+0],L=N[D+1],O=N[D+2];_.push(q,L,L,O,O,q)}}else if(S!==void 0){const N=S.array;b=S.version;for(let D=0,P=N.length/3-1;D<P;D+=3){const q=D+0,L=D+1,O=D+2;_.push(q,L,L,O,O,q)}}else return;const x=new(jh(_)?Jh:Zh)(_,1);x.version=b;const v=o.get(m);v&&e.remove(v),o.set(m,x)}function p(m){const _=o.get(m);if(_){const y=m.index;y!==null&&_.version<y.version&&d(m)}else d(m);return o.get(m)}return{get:l,update:h,getWireframeAttribute:p}}function cE(i,e,t){let n;function r(_){n=_}let o,c;function l(_){o=_.type,c=_.bytesPerElement}function h(_,y){i.drawElements(n,y,o,_*c),t.update(y,n,1)}function d(_,y,S){S!==0&&(i.drawElementsInstanced(n,y,o,_*c,S),t.update(y,n,S))}function p(_,y,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,o,_,0,S);let x=0;for(let v=0;v<S;v++)x+=y[v];t.update(x,n,1)}function m(_,y,S,b){if(S===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<_.length;v++)d(_[v]/c,y[v],b[v]);else{x.multiDrawElementsInstancedWEBGL(n,y,0,o,_,0,b,0,S);let v=0;for(let N=0;N<S;N++)v+=y[N]*b[N];t.update(v,n,1)}}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function lE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,c,l){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=l*(o/3);break;case i.LINES:t.lines+=l*(o/2);break;case i.LINE_STRIP:t.lines+=l*(o-1);break;case i.LINE_LOOP:t.lines+=l*o;break;case i.POINTS:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function uE(i,e,t){const n=new WeakMap,r=new Et;function o(c,l,h){const d=c.morphTargetInfluences,p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=p!==void 0?p.length:0;let _=n.get(l);if(_===void 0||_.count!==m){let I=function(){O.dispose(),n.delete(l),l.removeEventListener("dispose",I)};_!==void 0&&_.texture.dispose();const y=l.morphAttributes.position!==void 0,S=l.morphAttributes.normal!==void 0,b=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],v=l.morphAttributes.normal||[],N=l.morphAttributes.color||[];let D=0;y===!0&&(D=1),S===!0&&(D=2),b===!0&&(D=3);let P=l.attributes.position.count*D,q=1;P>e.maxTextureSize&&(q=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const L=new Float32Array(P*q*4*m),O=new Yh(L,P,q,m);O.type=Un,O.needsUpdate=!0;const $=D*4;for(let T=0;T<m;T++){const k=x[T],ae=v[T],J=N[T],te=P*q*4*T;for(let me=0;me<k.count;me++){const ce=me*$;y===!0&&(r.fromBufferAttribute(k,me),L[te+ce+0]=r.x,L[te+ce+1]=r.y,L[te+ce+2]=r.z,L[te+ce+3]=0),S===!0&&(r.fromBufferAttribute(ae,me),L[te+ce+4]=r.x,L[te+ce+5]=r.y,L[te+ce+6]=r.z,L[te+ce+7]=0),b===!0&&(r.fromBufferAttribute(J,me),L[te+ce+8]=r.x,L[te+ce+9]=r.y,L[te+ce+10]=r.z,L[te+ce+11]=J.itemSize===4?r.w:1)}}_={count:m,texture:O,size:new Ke(P,q)},n.set(l,_),l.addEventListener("dispose",I)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let y=0;for(let b=0;b<d.length;b++)y+=d[b];const S=l.morphTargetsRelative?1:1-y;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",d)}h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:o}}function hE(i,e,t,n){let r=new WeakMap;function o(h){const d=n.render.frame,p=h.geometry,m=e.get(h,p);if(r.get(m)!==d&&(e.update(m),r.set(m,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==d&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){const _=h.skeleton;r.get(_)!==d&&(_.update(),r.set(_,d))}return m}function c(){r=new WeakMap}function l(h){const d=h.target;d.removeEventListener("dispose",l),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:c}}class id extends jt{constructor(e,t,n,r,o,c,l,h,d,p=wr){if(p!==wr&&p!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===wr&&(n=er),n===void 0&&p===Fr&&(n=Nr),super(null,r,o,c,l,h,p,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:un,this.minFilter=h!==void 0?h:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const rd=new jt,Du=new id(1,1),sd=new Yh,od=new Zv,ad=new td,Lu=[],Iu=[],Nu=new Float32Array(16),Fu=new Float32Array(9),Uu=new Float32Array(4);function Gr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=Lu[r];if(o===void 0&&(o=new Float32Array(r),Lu[r]=o),e!==0){n.toArray(o,0);for(let c=1,l=0;c!==e;++c)l+=t,i[c].toArray(o,l)}return o}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zo(i,e){let t=Iu[e];t===void 0&&(t=new Int32Array(e),Iu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function pE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function mE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function _E(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Uu.set(n),i.uniformMatrix2fv(this.addr,!1,Uu),Gt(t,n)}}function gE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Fu.set(n),i.uniformMatrix3fv(this.addr,!1,Fu),Gt(t,n)}}function vE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Nu.set(n),i.uniformMatrix4fv(this.addr,!1,Nu),Gt(t,n)}}function yE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function EE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function SE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function ME(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function TE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function bE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function wE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function AE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Du.compareFunction=Wh,o=Du):o=rd,t.setTexture2D(e||o,r)}function RE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||od,r)}function CE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ad,r)}function PE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||sd,r)}function DE(i){switch(i){case 5126:return dE;case 35664:return fE;case 35665:return pE;case 35666:return mE;case 35674:return _E;case 35675:return gE;case 35676:return vE;case 5124:case 35670:return yE;case 35667:case 35671:return xE;case 35668:case 35672:return EE;case 35669:case 35673:return SE;case 5125:return ME;case 36294:return TE;case 36295:return bE;case 36296:return wE;case 35678:case 36198:case 36298:case 36306:case 35682:return AE;case 35679:case 36299:case 36307:return RE;case 35680:case 36300:case 36308:case 36293:return CE;case 36289:case 36303:case 36311:case 36292:return PE}}function LE(i,e){i.uniform1fv(this.addr,e)}function IE(i,e){const t=Gr(e,this.size,2);i.uniform2fv(this.addr,t)}function NE(i,e){const t=Gr(e,this.size,3);i.uniform3fv(this.addr,t)}function FE(i,e){const t=Gr(e,this.size,4);i.uniform4fv(this.addr,t)}function UE(i,e){const t=Gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function OE(i,e){const t=Gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kE(i,e){const t=Gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function BE(i,e){i.uniform1iv(this.addr,e)}function zE(i,e){i.uniform2iv(this.addr,e)}function HE(i,e){i.uniform3iv(this.addr,e)}function VE(i,e){i.uniform4iv(this.addr,e)}function GE(i,e){i.uniform1uiv(this.addr,e)}function WE(i,e){i.uniform2uiv(this.addr,e)}function XE(i,e){i.uniform3uiv(this.addr,e)}function jE(i,e){i.uniform4uiv(this.addr,e)}function $E(i,e,t){const n=this.cache,r=e.length,o=zo(t,r);Vt(n,o)||(i.uniform1iv(this.addr,o),Gt(n,o));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||rd,o[c])}function YE(i,e,t){const n=this.cache,r=e.length,o=zo(t,r);Vt(n,o)||(i.uniform1iv(this.addr,o),Gt(n,o));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||od,o[c])}function qE(i,e,t){const n=this.cache,r=e.length,o=zo(t,r);Vt(n,o)||(i.uniform1iv(this.addr,o),Gt(n,o));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||ad,o[c])}function KE(i,e,t){const n=this.cache,r=e.length,o=zo(t,r);Vt(n,o)||(i.uniform1iv(this.addr,o),Gt(n,o));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||sd,o[c])}function ZE(i){switch(i){case 5126:return LE;case 35664:return IE;case 35665:return NE;case 35666:return FE;case 35674:return UE;case 35675:return OE;case 35676:return kE;case 5124:case 35670:return BE;case 35667:case 35671:return zE;case 35668:case 35672:return HE;case 35669:case 35673:return VE;case 5125:return GE;case 36294:return WE;case 36295:return XE;case 36296:return jE;case 35678:case 36198:case 36298:case 36306:case 35682:return $E;case 35679:case 36299:case 36307:return YE;case 35680:case 36300:case 36308:case 36293:return qE;case 36289:case 36303:case 36311:case 36292:return KE}}class JE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=DE(t.type)}}class QE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZE(t.type)}}class eS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,c=r.length;o!==c;++o){const l=r[o];l.setValue(e,t[l.id],n)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function Ou(i,e){i.seq.push(e),i.map[e.id]=e}function tS(i,e,t){const n=i.name,r=n.length;for(Da.lastIndex=0;;){const o=Da.exec(n),c=Da.lastIndex;let l=o[1];const h=o[2]==="]",d=o[3];if(h&&(l=l|0),d===void 0||d==="["&&c+2===r){Ou(t,d===void 0?new JE(l,i,e):new QE(l,i,e));break}else{let m=t.map[l];m===void 0&&(m=new eS(l),Ou(t,m)),t=m}}}class Po{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);tS(o,c,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,c=t.length;o!==c;++o){const l=t[o],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function ku(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const nS=37297;let iS=0;function rS(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=r;c<o;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}const Bu=new tt;function sS(i){_t._getMatrix(Bu,_t.workingColorSpace,i);const e=`mat3( ${Bu.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(i)){case Bo:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+rS(i.getShaderSource(e),c)}else return r}function oS(i,e){const t=sS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function aS(i,e){let t;switch(e){case av:t="Linear";break;case cv:t="Reinhard";break;case lv:t="Cineon";break;case uv:t="ACESFilmic";break;case dv:t="AgX";break;case fv:t="Neutral";break;case hv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const uo=new B;function cS(){_t.getLuminanceCoefficients(uo);const i=uo.x.toFixed(4),e=uo.y.toFixed(4),t=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function uS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),c=o.name;let l=1;o.type===i.FLOAT_MAT2&&(l=2),o.type===i.FLOAT_MAT3&&(l=3),o.type===i.FLOAT_MAT4&&(l=4),t[c]={type:o.type,location:i.getAttribLocation(e,c),locationSize:l}}return t}function as(i){return i!==""}function Hu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(i){return i.replace(dS,pS)}const fS=new Map;function pS(i,e){let t=st[e];if(t===void 0){const n=fS.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rc(t)}const mS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(i){return i.replace(mS,_S)}function _S(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Wu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function gS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ch?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function vS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Dr:case Lr:e="ENVMAP_TYPE_CUBE";break;case ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Lr:e="ENVMAP_MODE_REFRACTION";break}return e}function xS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ph:e="ENVMAP_BLENDING_MULTIPLY";break;case sv:e="ENVMAP_BLENDING_MIX";break;case ov:e="ENVMAP_BLENDING_ADD";break}return e}function ES(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function SS(i,e,t,n){const r=i.getContext(),o=t.defines;let c=t.vertexShader,l=t.fragmentShader;const h=gS(t),d=vS(t),p=yS(t),m=xS(t),_=ES(t),y=lS(t),S=uS(o),b=r.createProgram();let x,v,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(as).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(as).join(`
`),v.length>0&&(v+=`
`)):(x=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),v=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?st.tonemapping_pars_fragment:"",t.toneMapping!==Li?aS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,oS("linearToOutputTexel",t.outputColorSpace),cS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(as).join(`
`)),c=Rc(c),c=Hu(c,t),c=Vu(c,t),l=Rc(l),l=Hu(l,t),l=Vu(l,t),c=Gu(c),l=Gu(l),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=N+x+c,P=N+v+l,q=ku(r,r.VERTEX_SHADER,D),L=ku(r,r.FRAGMENT_SHADER,P);r.attachShader(b,q),r.attachShader(b,L),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function O(k){if(i.debug.checkShaderErrors){const ae=r.getProgramInfoLog(b).trim(),J=r.getShaderInfoLog(q).trim(),te=r.getShaderInfoLog(L).trim();let me=!0,ce=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,q,L);else{const xe=zu(r,q,"vertex"),ne=zu(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ae+`
`+xe+`
`+ne)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(J===""||te==="")&&(ce=!1);ce&&(k.diagnostics={runnable:me,programLog:ae,vertexShader:{log:J,prefix:x},fragmentShader:{log:te,prefix:v}})}r.deleteShader(q),r.deleteShader(L),$=new Po(r,b),I=hS(r,b)}let $;this.getUniforms=function(){return $===void 0&&O(this),$};let I;this.getAttributes=function(){return I===void 0&&O(this),I};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(b,nS)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iS++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=q,this.fragmentShader=L,this}let MS=0;class TS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bS(e),t.set(e,n)),n}}class bS{constructor(e){this.id=MS++,this.code=e,this.usedTimes=0}}function wS(i,e,t,n,r,o,c){const l=new qh,h=new TS,d=new Set,p=[],m=r.logarithmicDepthBuffer,_=r.vertexTextures;let y=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(I){return d.add(I),I===0?"uv":`uv${I}`}function x(I,T,k,ae,J){const te=ae.fog,me=J.geometry,ce=I.isMeshStandardMaterial?ae.environment:null,xe=(I.isMeshStandardMaterial?t:e).get(I.envMap||ce),ne=xe&&xe.mapping===ko?xe.image.height:null,Te=S[I.type];I.precision!==null&&(y=r.getMaxPrecision(I.precision),y!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",y,"instead."));const Ce=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,Pe=Ce!==void 0?Ce.length:0;let Xe=0;me.morphAttributes.position!==void 0&&(Xe=1),me.morphAttributes.normal!==void 0&&(Xe=2),me.morphAttributes.color!==void 0&&(Xe=3);let nt,ee,pe,Le;if(Te){const ot=jn[Te];nt=ot.vertexShader,ee=ot.fragmentShader}else nt=I.vertexShader,ee=I.fragmentShader,h.update(I),pe=h.getVertexShaderID(I),Le=h.getFragmentShaderID(I);const Me=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Se=J.isInstancedMesh===!0,it=J.isBatchedMesh===!0,At=!!I.map,Ze=!!I.matcap,Lt=!!xe,V=!!I.aoMap,tn=!!I.lightMap,ut=!!I.bumpMap,ht=!!I.normalMap,We=!!I.displacementMap,gt=!!I.emissiveMap,Ve=!!I.metalnessMap,U=!!I.roughnessMap,R=I.anisotropy>0,Z=I.clearcoat>0,he=I.dispersion>0,le=I.iridescence>0,oe=I.sheen>0,ke=I.transmission>0,Re=R&&!!I.anisotropyMap,Ne=Z&&!!I.clearcoatMap,dt=Z&&!!I.clearcoatNormalMap,Ee=Z&&!!I.clearcoatRoughnessMap,Fe=le&&!!I.iridescenceMap,je=le&&!!I.iridescenceThicknessMap,qe=oe&&!!I.sheenColorMap,Ue=oe&&!!I.sheenRoughnessMap,at=!!I.specularMap,Je=!!I.specularColorMap,Tt=!!I.specularIntensityMap,z=ke&&!!I.transmissionMap,we=ke&&!!I.thicknessMap,ie=!!I.gradientMap,ue=!!I.alphaMap,Y=I.alphaTest>0,j=!!I.alphaHash,Ge=!!I.extensions;let Dt=Li;I.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Dt=i.toneMapping);const Nt={shaderID:Te,shaderType:I.type,shaderName:I.name,vertexShader:nt,fragmentShader:ee,defines:I.defines,customVertexShaderID:pe,customFragmentShaderID:Le,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:y,batching:it,batchingColor:it&&J._colorsTexture!==null,instancing:Se,instancingColor:Se&&J.instanceColor!==null,instancingMorph:Se&&J.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:dn,alphaToCoverage:!!I.alphaToCoverage,map:At,matcap:Ze,envMap:Lt,envMapMode:Lt&&xe.mapping,envMapCubeUVHeight:ne,aoMap:V,lightMap:tn,bumpMap:ut,normalMap:ht,displacementMap:_&&We,emissiveMap:gt,normalMapObjectSpace:ht&&I.normalMapType===yv,normalMapTangentSpace:ht&&I.normalMapType===Gh,metalnessMap:Ve,roughnessMap:U,anisotropy:R,anisotropyMap:Re,clearcoat:Z,clearcoatMap:Ne,clearcoatNormalMap:dt,clearcoatRoughnessMap:Ee,dispersion:he,iridescence:le,iridescenceMap:Fe,iridescenceThicknessMap:je,sheen:oe,sheenColorMap:qe,sheenRoughnessMap:Ue,specularMap:at,specularColorMap:Je,specularIntensityMap:Tt,transmission:ke,transmissionMap:z,thicknessMap:we,gradientMap:ie,opaque:I.transparent===!1&&I.blending===br&&I.alphaToCoverage===!1,alphaMap:ue,alphaTest:Y,alphaHash:j,combine:I.combine,mapUv:At&&b(I.map.channel),aoMapUv:V&&b(I.aoMap.channel),lightMapUv:tn&&b(I.lightMap.channel),bumpMapUv:ut&&b(I.bumpMap.channel),normalMapUv:ht&&b(I.normalMap.channel),displacementMapUv:We&&b(I.displacementMap.channel),emissiveMapUv:gt&&b(I.emissiveMap.channel),metalnessMapUv:Ve&&b(I.metalnessMap.channel),roughnessMapUv:U&&b(I.roughnessMap.channel),anisotropyMapUv:Re&&b(I.anisotropyMap.channel),clearcoatMapUv:Ne&&b(I.clearcoatMap.channel),clearcoatNormalMapUv:dt&&b(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&b(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&b(I.iridescenceMap.channel),iridescenceThicknessMapUv:je&&b(I.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&b(I.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&b(I.sheenRoughnessMap.channel),specularMapUv:at&&b(I.specularMap.channel),specularColorMapUv:Je&&b(I.specularColorMap.channel),specularIntensityMapUv:Tt&&b(I.specularIntensityMap.channel),transmissionMapUv:z&&b(I.transmissionMap.channel),thicknessMapUv:we&&b(I.thicknessMap.channel),alphaMapUv:ue&&b(I.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(ht||R),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!me.attributes.uv&&(At||ue),fog:!!te,useFog:I.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:de,skinning:J.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Xe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:At&&I.map.isVideoTexture===!0&&_t.getTransfer(I.map.colorSpace)===bt,decodeVideoTextureEmissive:gt&&I.emissiveMap.isVideoTexture===!0&&_t.getTransfer(I.emissiveMap.colorSpace)===bt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===$n,flipSided:I.side===pn,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Ge&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&I.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Nt.vertexUv1s=d.has(1),Nt.vertexUv2s=d.has(2),Nt.vertexUv3s=d.has(3),d.clear(),Nt}function v(I){const T=[];if(I.shaderID?T.push(I.shaderID):(T.push(I.customVertexShaderID),T.push(I.customFragmentShaderID)),I.defines!==void 0)for(const k in I.defines)T.push(k),T.push(I.defines[k]);return I.isRawShaderMaterial===!1&&(N(T,I),D(T,I),T.push(i.outputColorSpace)),T.push(I.customProgramCacheKey),T.join()}function N(I,T){I.push(T.precision),I.push(T.outputColorSpace),I.push(T.envMapMode),I.push(T.envMapCubeUVHeight),I.push(T.mapUv),I.push(T.alphaMapUv),I.push(T.lightMapUv),I.push(T.aoMapUv),I.push(T.bumpMapUv),I.push(T.normalMapUv),I.push(T.displacementMapUv),I.push(T.emissiveMapUv),I.push(T.metalnessMapUv),I.push(T.roughnessMapUv),I.push(T.anisotropyMapUv),I.push(T.clearcoatMapUv),I.push(T.clearcoatNormalMapUv),I.push(T.clearcoatRoughnessMapUv),I.push(T.iridescenceMapUv),I.push(T.iridescenceThicknessMapUv),I.push(T.sheenColorMapUv),I.push(T.sheenRoughnessMapUv),I.push(T.specularMapUv),I.push(T.specularColorMapUv),I.push(T.specularIntensityMapUv),I.push(T.transmissionMapUv),I.push(T.thicknessMapUv),I.push(T.combine),I.push(T.fogExp2),I.push(T.sizeAttenuation),I.push(T.morphTargetsCount),I.push(T.morphAttributeCount),I.push(T.numDirLights),I.push(T.numPointLights),I.push(T.numSpotLights),I.push(T.numSpotLightMaps),I.push(T.numHemiLights),I.push(T.numRectAreaLights),I.push(T.numDirLightShadows),I.push(T.numPointLightShadows),I.push(T.numSpotLightShadows),I.push(T.numSpotLightShadowsWithMaps),I.push(T.numLightProbes),I.push(T.shadowMapType),I.push(T.toneMapping),I.push(T.numClippingPlanes),I.push(T.numClipIntersection),I.push(T.depthPacking)}function D(I,T){l.disableAll(),T.supportsVertexTextures&&l.enable(0),T.instancing&&l.enable(1),T.instancingColor&&l.enable(2),T.instancingMorph&&l.enable(3),T.matcap&&l.enable(4),T.envMap&&l.enable(5),T.normalMapObjectSpace&&l.enable(6),T.normalMapTangentSpace&&l.enable(7),T.clearcoat&&l.enable(8),T.iridescence&&l.enable(9),T.alphaTest&&l.enable(10),T.vertexColors&&l.enable(11),T.vertexAlphas&&l.enable(12),T.vertexUv1s&&l.enable(13),T.vertexUv2s&&l.enable(14),T.vertexUv3s&&l.enable(15),T.vertexTangents&&l.enable(16),T.anisotropy&&l.enable(17),T.alphaHash&&l.enable(18),T.batching&&l.enable(19),T.dispersion&&l.enable(20),T.batchingColor&&l.enable(21),I.push(l.mask),l.disableAll(),T.fog&&l.enable(0),T.useFog&&l.enable(1),T.flatShading&&l.enable(2),T.logarithmicDepthBuffer&&l.enable(3),T.reverseDepthBuffer&&l.enable(4),T.skinning&&l.enable(5),T.morphTargets&&l.enable(6),T.morphNormals&&l.enable(7),T.morphColors&&l.enable(8),T.premultipliedAlpha&&l.enable(9),T.shadowMapEnabled&&l.enable(10),T.doubleSided&&l.enable(11),T.flipSided&&l.enable(12),T.useDepthPacking&&l.enable(13),T.dithering&&l.enable(14),T.transmission&&l.enable(15),T.sheen&&l.enable(16),T.opaque&&l.enable(17),T.pointsUvs&&l.enable(18),T.decodeVideoTexture&&l.enable(19),T.decodeVideoTextureEmissive&&l.enable(20),T.alphaToCoverage&&l.enable(21),I.push(l.mask)}function P(I){const T=S[I.type];let k;if(T){const ae=jn[T];k=l0.clone(ae.uniforms)}else k=I.uniforms;return k}function q(I,T){let k;for(let ae=0,J=p.length;ae<J;ae++){const te=p[ae];if(te.cacheKey===T){k=te,++k.usedTimes;break}}return k===void 0&&(k=new SS(i,T,I,o),p.push(k)),k}function L(I){if(--I.usedTimes===0){const T=p.indexOf(I);p[T]=p[p.length-1],p.pop(),I.destroy()}}function O(I){h.remove(I)}function $(){h.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:P,acquireProgram:q,releaseProgram:L,releaseShaderCache:O,programs:p,dispose:$}}function AS(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let l=i.get(c);return l===void 0&&(l={},i.set(c,l)),l}function n(c){i.delete(c)}function r(c,l,h){i.get(c)[l]=h}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function RS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ju(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function c(m,_,y,S,b,x){let v=i[e];return v===void 0?(v={id:m.id,object:m,geometry:_,material:y,groupOrder:S,renderOrder:m.renderOrder,z:b,group:x},i[e]=v):(v.id=m.id,v.object=m,v.geometry=_,v.material=y,v.groupOrder=S,v.renderOrder=m.renderOrder,v.z=b,v.group=x),e++,v}function l(m,_,y,S,b,x){const v=c(m,_,y,S,b,x);y.transmission>0?n.push(v):y.transparent===!0?r.push(v):t.push(v)}function h(m,_,y,S,b,x){const v=c(m,_,y,S,b,x);y.transmission>0?n.unshift(v):y.transparent===!0?r.unshift(v):t.unshift(v)}function d(m,_){t.length>1&&t.sort(m||RS),n.length>1&&n.sort(_||Xu),r.length>1&&r.sort(_||Xu)}function p(){for(let m=e,_=i.length;m<_;m++){const y=i[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:l,unshift:h,finish:p,sort:d}}function CS(){let i=new WeakMap;function e(n,r){const o=i.get(n);let c;return o===void 0?(c=new ju,i.set(n,[c])):r>=o.length?(c=new ju,o.push(c)):c=o[r],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function PS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ye};break;case"SpotLight":t={position:new B,direction:new B,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function DS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let LS=0;function IS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function NS(i){const e=new PS,t=DS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new B);const r=new B,o=new et,c=new et;function l(d){let p=0,m=0,_=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let y=0,S=0,b=0,x=0,v=0,N=0,D=0,P=0,q=0,L=0,O=0;d.sort(IS);for(let I=0,T=d.length;I<T;I++){const k=d[I],ae=k.color,J=k.intensity,te=k.distance,me=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=ae.r*J,m+=ae.g*J,_+=ae.b*J;else if(k.isLightProbe){for(let ce=0;ce<9;ce++)n.probe[ce].addScaledVector(k.sh.coefficients[ce],J);O++}else if(k.isDirectionalLight){const ce=e.get(k);if(ce.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const xe=k.shadow,ne=t.get(k);ne.shadowIntensity=xe.intensity,ne.shadowBias=xe.bias,ne.shadowNormalBias=xe.normalBias,ne.shadowRadius=xe.radius,ne.shadowMapSize=xe.mapSize,n.directionalShadow[y]=ne,n.directionalShadowMap[y]=me,n.directionalShadowMatrix[y]=k.shadow.matrix,N++}n.directional[y]=ce,y++}else if(k.isSpotLight){const ce=e.get(k);ce.position.setFromMatrixPosition(k.matrixWorld),ce.color.copy(ae).multiplyScalar(J),ce.distance=te,ce.coneCos=Math.cos(k.angle),ce.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ce.decay=k.decay,n.spot[b]=ce;const xe=k.shadow;if(k.map&&(n.spotLightMap[q]=k.map,q++,xe.updateMatrices(k),k.castShadow&&L++),n.spotLightMatrix[b]=xe.matrix,k.castShadow){const ne=t.get(k);ne.shadowIntensity=xe.intensity,ne.shadowBias=xe.bias,ne.shadowNormalBias=xe.normalBias,ne.shadowRadius=xe.radius,ne.shadowMapSize=xe.mapSize,n.spotShadow[b]=ne,n.spotShadowMap[b]=me,P++}b++}else if(k.isRectAreaLight){const ce=e.get(k);ce.color.copy(ae).multiplyScalar(J),ce.halfWidth.set(k.width*.5,0,0),ce.halfHeight.set(0,k.height*.5,0),n.rectArea[x]=ce,x++}else if(k.isPointLight){const ce=e.get(k);if(ce.color.copy(k.color).multiplyScalar(k.intensity),ce.distance=k.distance,ce.decay=k.decay,k.castShadow){const xe=k.shadow,ne=t.get(k);ne.shadowIntensity=xe.intensity,ne.shadowBias=xe.bias,ne.shadowNormalBias=xe.normalBias,ne.shadowRadius=xe.radius,ne.shadowMapSize=xe.mapSize,ne.shadowCameraNear=xe.camera.near,ne.shadowCameraFar=xe.camera.far,n.pointShadow[S]=ne,n.pointShadowMap[S]=me,n.pointShadowMatrix[S]=k.shadow.matrix,D++}n.point[S]=ce,S++}else if(k.isHemisphereLight){const ce=e.get(k);ce.skyColor.copy(k.color).multiplyScalar(J),ce.groundColor.copy(k.groundColor).multiplyScalar(J),n.hemi[v]=ce,v++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=_;const $=n.hash;($.directionalLength!==y||$.pointLength!==S||$.spotLength!==b||$.rectAreaLength!==x||$.hemiLength!==v||$.numDirectionalShadows!==N||$.numPointShadows!==D||$.numSpotShadows!==P||$.numSpotMaps!==q||$.numLightProbes!==O)&&(n.directional.length=y,n.spot.length=b,n.rectArea.length=x,n.point.length=S,n.hemi.length=v,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=N,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=P+q-L,n.spotLightMap.length=q,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=O,$.directionalLength=y,$.pointLength=S,$.spotLength=b,$.rectAreaLength=x,$.hemiLength=v,$.numDirectionalShadows=N,$.numPointShadows=D,$.numSpotShadows=P,$.numSpotMaps=q,$.numLightProbes=O,n.version=LS++)}function h(d,p){let m=0,_=0,y=0,S=0,b=0;const x=p.matrixWorldInverse;for(let v=0,N=d.length;v<N;v++){const D=d[v];if(D.isDirectionalLight){const P=n.directional[m];P.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(x),m++}else if(D.isSpotLight){const P=n.spot[y];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(x),y++}else if(D.isRectAreaLight){const P=n.rectArea[S];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),c.identity(),o.copy(D.matrixWorld),o.premultiply(x),c.extractRotation(o),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),S++}else if(D.isPointLight){const P=n.point[_];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),_++}else if(D.isHemisphereLight){const P=n.hemi[b];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(x),b++}}}return{setup:l,setupView:h,state:n}}function $u(i){const e=new NS(i),t=[],n=[];function r(p){d.camera=p,t.length=0,n.length=0}function o(p){t.push(p)}function c(p){n.push(p)}function l(){e.setup(t)}function h(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:c}}function FS(i){let e=new WeakMap;function t(r,o=0){const c=e.get(r);let l;return c===void 0?(l=new $u(i),e.set(r,[l])):o>=c.length?(l=new $u(i),c.push(l)):l=c[o],l}function n(){e=new WeakMap}return{get:t,dispose:n}}class US extends Zn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OS extends Zn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BS=`uniform sampler2D shadow_pass;
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
}`;function zS(i,e,t){let n=new Wc;const r=new Ke,o=new Ke,c=new Et,l=new US({depthPacking:vv}),h=new OS,d={},p=t.maxTextureSize,m={[_i]:pn,[pn]:_i,[$n]:$n},_=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:kS,fragmentShader:BS}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const S=new mn;S.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Kt(S,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rh;let v=this.type;this.render=function(L,O,$){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;const I=i.getRenderTarget(),T=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),ae=i.state;ae.setBlending(Di),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const J=v!==li&&this.type===li,te=v===li&&this.type!==li;for(let me=0,ce=L.length;me<ce;me++){const xe=L[me],ne=xe.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",xe,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;r.copy(ne.mapSize);const Te=ne.getFrameExtents();if(r.multiply(Te),o.copy(ne.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/Te.x),r.x=o.x*Te.x,ne.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/Te.y),r.y=o.y*Te.y,ne.mapSize.y=o.y)),ne.map===null||J===!0||te===!0){const Pe=this.type!==li?{minFilter:un,magFilter:un}:{};ne.map!==null&&ne.map.dispose(),ne.map=new tr(r.x,r.y,Pe),ne.map.texture.name=xe.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();const Ce=ne.getViewportCount();for(let Pe=0;Pe<Ce;Pe++){const Xe=ne.getViewport(Pe);c.set(o.x*Xe.x,o.y*Xe.y,o.x*Xe.z,o.y*Xe.w),ae.viewport(c),ne.updateMatrices(xe,Pe),n=ne.getFrustum(),P(O,$,ne.camera,xe,this.type)}ne.isPointLightShadow!==!0&&this.type===li&&N(ne,$),ne.needsUpdate=!1}v=this.type,x.needsUpdate=!1,i.setRenderTarget(I,T,k)};function N(L,O){const $=e.update(b);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new tr(r.x,r.y)),_.uniforms.shadow_pass.value=L.map.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(O,null,$,_,b,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(O,null,$,y,b,null)}function D(L,O,$,I){let T=null;const k=$.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)T=k;else if(T=$.isPointLight===!0?h:l,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ae=T.uuid,J=O.uuid;let te=d[ae];te===void 0&&(te={},d[ae]=te);let me=te[J];me===void 0&&(me=T.clone(),te[J]=me,O.addEventListener("dispose",q)),T=me}if(T.visible=O.visible,T.wireframe=O.wireframe,I===li?T.side=O.shadowSide!==null?O.shadowSide:O.side:T.side=O.shadowSide!==null?O.shadowSide:m[O.side],T.alphaMap=O.alphaMap,T.alphaTest=O.alphaTest,T.map=O.map,T.clipShadows=O.clipShadows,T.clippingPlanes=O.clippingPlanes,T.clipIntersection=O.clipIntersection,T.displacementMap=O.displacementMap,T.displacementScale=O.displacementScale,T.displacementBias=O.displacementBias,T.wireframeLinewidth=O.wireframeLinewidth,T.linewidth=O.linewidth,$.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ae=i.properties.get(T);ae.light=$}return T}function P(L,O,$,I,T){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&T===li)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,L.matrixWorld);const J=e.update(L),te=L.material;if(Array.isArray(te)){const me=J.groups;for(let ce=0,xe=me.length;ce<xe;ce++){const ne=me[ce],Te=te[ne.materialIndex];if(Te&&Te.visible){const Ce=D(L,Te,I,T);L.onBeforeShadow(i,L,O,$,J,Ce,ne),i.renderBufferDirect($,null,J,Ce,L,ne),L.onAfterShadow(i,L,O,$,J,Ce,ne)}}}else if(te.visible){const me=D(L,te,I,T);L.onBeforeShadow(i,L,O,$,J,me,null),i.renderBufferDirect($,null,J,me,L,null),L.onAfterShadow(i,L,O,$,J,me,null)}}const ae=L.children;for(let J=0,te=ae.length;J<te;J++)P(ae[J],O,$,I,T)}function q(L){L.target.removeEventListener("dispose",q);for(const $ in d){const I=d[$],T=L.target.uuid;T in I&&(I[T].dispose(),delete I[T])}}}const HS={[Xa]:ja,[$a]:Ka,[Ya]:Za,[Pr]:qa,[ja]:Xa,[Ka]:$a,[Za]:Ya,[qa]:Pr};function VS(i,e){function t(){let z=!1;const we=new Et;let ie=null;const ue=new Et(0,0,0,0);return{setMask:function(Y){ie!==Y&&!z&&(i.colorMask(Y,Y,Y,Y),ie=Y)},setLocked:function(Y){z=Y},setClear:function(Y,j,Ge,Dt,Nt){Nt===!0&&(Y*=Dt,j*=Dt,Ge*=Dt),we.set(Y,j,Ge,Dt),ue.equals(we)===!1&&(i.clearColor(Y,j,Ge,Dt),ue.copy(we))},reset:function(){z=!1,ie=null,ue.set(-1,0,0,0)}}}function n(){let z=!1,we=!1,ie=null,ue=null,Y=null;return{setReversed:function(j){if(we!==j){const Ge=e.get("EXT_clip_control");we?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const Dt=Y;Y=null,this.setClear(Dt)}we=j},getReversed:function(){return we},setTest:function(j){j?Me(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(j){ie!==j&&!z&&(i.depthMask(j),ie=j)},setFunc:function(j){if(we&&(j=HS[j]),ue!==j){switch(j){case Xa:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case $a:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=j}},setLocked:function(j){z=j},setClear:function(j){Y!==j&&(we&&(j=1-j),i.clearDepth(j),Y=j)},reset:function(){z=!1,ie=null,ue=null,Y=null,we=!1}}}function r(){let z=!1,we=null,ie=null,ue=null,Y=null,j=null,Ge=null,Dt=null,Nt=null;return{setTest:function(ot){z||(ot?Me(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(ot){we!==ot&&!z&&(i.stencilMask(ot),we=ot)},setFunc:function(ot,_n,Ot){(ie!==ot||ue!==_n||Y!==Ot)&&(i.stencilFunc(ot,_n,Ot),ie=ot,ue=_n,Y=Ot)},setOp:function(ot,_n,Ot){(j!==ot||Ge!==_n||Dt!==Ot)&&(i.stencilOp(ot,_n,Ot),j=ot,Ge=_n,Dt=Ot)},setLocked:function(ot){z=ot},setClear:function(ot){Nt!==ot&&(i.clearStencil(ot),Nt=ot)},reset:function(){z=!1,we=null,ie=null,ue=null,Y=null,j=null,Ge=null,Dt=null,Nt=null}}}const o=new t,c=new n,l=new r,h=new WeakMap,d=new WeakMap;let p={},m={},_=new WeakMap,y=[],S=null,b=!1,x=null,v=null,N=null,D=null,P=null,q=null,L=null,O=new Ye(0,0,0),$=0,I=!1,T=null,k=null,ae=null,J=null,te=null;const me=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,xe=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(xe=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ce=xe>=1):ne.indexOf("OpenGL ES")!==-1&&(xe=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ce=xe>=2);let Te=null,Ce={};const Pe=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),nt=new Et().fromArray(Pe),ee=new Et().fromArray(Xe);function pe(z,we,ie,ue){const Y=new Uint8Array(4),j=i.createTexture();i.bindTexture(z,j),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<ie;Ge++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,Y):i.texImage2D(we+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Y);return j}const Le={};Le[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Le[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Le[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Me(i.DEPTH_TEST),c.setFunc(Pr),ut(!1),ht($l),Me(i.CULL_FACE),V(Di);function Me(z){p[z]!==!0&&(i.enable(z),p[z]=!0)}function de(z){p[z]!==!1&&(i.disable(z),p[z]=!1)}function Se(z,we){return m[z]!==we?(i.bindFramebuffer(z,we),m[z]=we,z===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=we),z===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=we),!0):!1}function it(z,we){let ie=y,ue=!1;if(z){ie=_.get(we),ie===void 0&&(ie=[],_.set(we,ie));const Y=z.textures;if(ie.length!==Y.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let j=0,Ge=Y.length;j<Ge;j++)ie[j]=i.COLOR_ATTACHMENT0+j;ie.length=Y.length,ue=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,ue=!0);ue&&i.drawBuffers(ie)}function At(z){return S!==z?(i.useProgram(z),S=z,!0):!1}const Ze={[Ki]:i.FUNC_ADD,[Vg]:i.FUNC_SUBTRACT,[Gg]:i.FUNC_REVERSE_SUBTRACT};Ze[Wg]=i.MIN,Ze[Xg]=i.MAX;const Lt={[jg]:i.ZERO,[$g]:i.ONE,[Yg]:i.SRC_COLOR,[Ga]:i.SRC_ALPHA,[ev]:i.SRC_ALPHA_SATURATE,[Jg]:i.DST_COLOR,[Kg]:i.DST_ALPHA,[qg]:i.ONE_MINUS_SRC_COLOR,[Wa]:i.ONE_MINUS_SRC_ALPHA,[Qg]:i.ONE_MINUS_DST_COLOR,[Zg]:i.ONE_MINUS_DST_ALPHA,[tv]:i.CONSTANT_COLOR,[nv]:i.ONE_MINUS_CONSTANT_COLOR,[iv]:i.CONSTANT_ALPHA,[rv]:i.ONE_MINUS_CONSTANT_ALPHA};function V(z,we,ie,ue,Y,j,Ge,Dt,Nt,ot){if(z===Di){b===!0&&(de(i.BLEND),b=!1);return}if(b===!1&&(Me(i.BLEND),b=!0),z!==Hg){if(z!==x||ot!==I){if((v!==Ki||P!==Ki)&&(i.blendEquation(i.FUNC_ADD),v=Ki,P=Ki),ot)switch(z){case br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yl:i.blendFunc(i.ONE,i.ONE);break;case ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}N=null,D=null,q=null,L=null,O.set(0,0,0),$=0,x=z,I=ot}return}Y=Y||we,j=j||ie,Ge=Ge||ue,(we!==v||Y!==P)&&(i.blendEquationSeparate(Ze[we],Ze[Y]),v=we,P=Y),(ie!==N||ue!==D||j!==q||Ge!==L)&&(i.blendFuncSeparate(Lt[ie],Lt[ue],Lt[j],Lt[Ge]),N=ie,D=ue,q=j,L=Ge),(Dt.equals(O)===!1||Nt!==$)&&(i.blendColor(Dt.r,Dt.g,Dt.b,Nt),O.copy(Dt),$=Nt),x=z,I=!1}function tn(z,we){z.side===$n?de(i.CULL_FACE):Me(i.CULL_FACE);let ie=z.side===pn;we&&(ie=!ie),ut(ie),z.blending===br&&z.transparent===!1?V(Di):V(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),o.setMask(z.colorWrite);const ue=z.stencilWrite;l.setTest(ue),ue&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),gt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(z){T!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),T=z)}function ht(z){z!==Bg?(Me(i.CULL_FACE),z!==k&&(z===$l?i.cullFace(i.BACK):z===zg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),k=z}function We(z){z!==ae&&(ce&&i.lineWidth(z),ae=z)}function gt(z,we,ie){z?(Me(i.POLYGON_OFFSET_FILL),(J!==we||te!==ie)&&(i.polygonOffset(we,ie),J=we,te=ie)):de(i.POLYGON_OFFSET_FILL)}function Ve(z){z?Me(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function U(z){z===void 0&&(z=i.TEXTURE0+me-1),Te!==z&&(i.activeTexture(z),Te=z)}function R(z,we,ie){ie===void 0&&(Te===null?ie=i.TEXTURE0+me-1:ie=Te);let ue=Ce[ie];ue===void 0&&(ue={type:void 0,texture:void 0},Ce[ie]=ue),(ue.type!==z||ue.texture!==we)&&(Te!==ie&&(i.activeTexture(ie),Te=ie),i.bindTexture(z,we||Le[z]),ue.type=z,ue.texture=we)}function Z(){const z=Ce[Te];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function he(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function je(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qe(z){nt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),nt.copy(z))}function Ue(z){ee.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),ee.copy(z))}function at(z,we){let ie=d.get(we);ie===void 0&&(ie=new WeakMap,d.set(we,ie));let ue=ie.get(z);ue===void 0&&(ue=i.getUniformBlockIndex(we,z.name),ie.set(z,ue))}function Je(z,we){const ue=d.get(we).get(z);h.get(we)!==ue&&(i.uniformBlockBinding(we,ue,z.__bindingPointIndex),h.set(we,ue))}function Tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},Te=null,Ce={},m={},_=new WeakMap,y=[],S=null,b=!1,x=null,v=null,N=null,D=null,P=null,q=null,L=null,O=new Ye(0,0,0),$=0,I=!1,T=null,k=null,ae=null,J=null,te=null,nt.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Me,disable:de,bindFramebuffer:Se,drawBuffers:it,useProgram:At,setBlending:V,setMaterial:tn,setFlipSided:ut,setCullFace:ht,setLineWidth:We,setPolygonOffset:gt,setScissorTest:Ve,activeTexture:U,bindTexture:R,unbindTexture:Z,compressedTexImage2D:he,compressedTexImage3D:le,texImage2D:Fe,texImage3D:je,updateUBOMapping:at,uniformBlockBinding:Je,texStorage2D:dt,texStorage3D:Ee,texSubImage2D:oe,texSubImage3D:ke,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ne,scissor:qe,viewport:Ue,reset:Tt}}function Yu(i,e,t,n){const r=GS(n);switch(t){case Uh:return i*e;case kh:return i*e;case Bh:return i*e*2;case Bc:return i*e/r.components*r.byteLength;case zc:return i*e/r.components*r.byteLength;case zh:return i*e*2/r.components*r.byteLength;case Hc:return i*e*2/r.components*r.byteLength;case Oh:return i*e*3/r.components*r.byteLength;case An:return i*e*4/r.components*r.byteLength;case Vc:return i*e*4/r.components*r.byteLength;case bo:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ao:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:case ic:return Math.max(i,16)*Math.max(e,8)/4;case ec:case nc:return Math.max(i,8)*Math.max(e,8)/2;case rc:case sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case lc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case dc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case gc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Co:case Ec:case Sc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hh:case Mc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Tc:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function GS(i){switch(i){case gi:case Ih:return{byteLength:1,components:1};case hs:case Nh:case ms:return{byteLength:2,components:1};case Oc:case kc:return{byteLength:2,components:4};case er:case Uc:case Un:return{byteLength:4,components:1};case Fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function WS(i,e,t,n,r,o,c){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ke,p=new WeakMap;let m;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(U,R){return y?new OffscreenCanvas(U,R):ps("canvas")}function b(U,R,Z){let he=1;const le=Ve(U);if((le.width>Z||le.height>Z)&&(he=Z/Math.max(le.width,le.height)),he<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const oe=Math.floor(he*le.width),ke=Math.floor(he*le.height);m===void 0&&(m=S(oe,ke));const Re=R?S(oe,ke):m;return Re.width=oe,Re.height=ke,Re.getContext("2d").drawImage(U,0,0,oe,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+oe+"x"+ke+")."),Re}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),U;return U}function x(U){return U.generateMipmaps}function v(U){i.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(U,R,Z,he,le=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let oe=R;if(R===i.RED&&(Z===i.FLOAT&&(oe=i.R32F),Z===i.HALF_FLOAT&&(oe=i.R16F),Z===i.UNSIGNED_BYTE&&(oe=i.R8)),R===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.R8UI),Z===i.UNSIGNED_SHORT&&(oe=i.R16UI),Z===i.UNSIGNED_INT&&(oe=i.R32UI),Z===i.BYTE&&(oe=i.R8I),Z===i.SHORT&&(oe=i.R16I),Z===i.INT&&(oe=i.R32I)),R===i.RG&&(Z===i.FLOAT&&(oe=i.RG32F),Z===i.HALF_FLOAT&&(oe=i.RG16F),Z===i.UNSIGNED_BYTE&&(oe=i.RG8)),R===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RG8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RG16UI),Z===i.UNSIGNED_INT&&(oe=i.RG32UI),Z===i.BYTE&&(oe=i.RG8I),Z===i.SHORT&&(oe=i.RG16I),Z===i.INT&&(oe=i.RG32I)),R===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),Z===i.UNSIGNED_INT&&(oe=i.RGB32UI),Z===i.BYTE&&(oe=i.RGB8I),Z===i.SHORT&&(oe=i.RGB16I),Z===i.INT&&(oe=i.RGB32I)),R===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),Z===i.UNSIGNED_INT&&(oe=i.RGBA32UI),Z===i.BYTE&&(oe=i.RGBA8I),Z===i.SHORT&&(oe=i.RGBA16I),Z===i.INT&&(oe=i.RGBA32I)),R===i.RGB&&Z===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),R===i.RGBA){const ke=le?Bo:_t.getTransfer(he);Z===i.FLOAT&&(oe=i.RGBA32F),Z===i.HALF_FLOAT&&(oe=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(oe=ke===bt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function P(U,R){let Z;return U?R===null||R===er||R===Nr?Z=i.DEPTH24_STENCIL8:R===Un?Z=i.DEPTH32F_STENCIL8:R===hs&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===er||R===Nr?Z=i.DEPTH_COMPONENT24:R===Un?Z=i.DEPTH_COMPONENT32F:R===hs&&(Z=i.DEPTH_COMPONENT16),Z}function q(U,R){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==un&&U.minFilter!==Sn?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function L(U){const R=U.target;R.removeEventListener("dispose",L),$(R),R.isVideoTexture&&p.delete(R)}function O(U){const R=U.target;R.removeEventListener("dispose",O),T(R)}function $(U){const R=n.get(U);if(R.__webglInit===void 0)return;const Z=U.source,he=_.get(Z);if(he){const le=he[R.__cacheKey];le.usedTimes--,le.usedTimes===0&&I(U),Object.keys(he).length===0&&_.delete(Z)}n.remove(U)}function I(U){const R=n.get(U);i.deleteTexture(R.__webglTexture);const Z=U.source,he=_.get(Z);delete he[R.__cacheKey],c.memory.textures--}function T(U){const R=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(R.__webglFramebuffer[he]))for(let le=0;le<R.__webglFramebuffer[he].length;le++)i.deleteFramebuffer(R.__webglFramebuffer[he][le]);else i.deleteFramebuffer(R.__webglFramebuffer[he]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[he])}else{if(Array.isArray(R.__webglFramebuffer))for(let he=0;he<R.__webglFramebuffer.length;he++)i.deleteFramebuffer(R.__webglFramebuffer[he]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let he=0;he<R.__webglColorRenderbuffer.length;he++)R.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[he]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Z=U.textures;for(let he=0,le=Z.length;he<le;he++){const oe=n.get(Z[he]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),c.memory.textures--),n.remove(Z[he])}n.remove(U)}let k=0;function ae(){k=0}function J(){const U=k;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),k+=1,U}function te(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function me(U,R){const Z=n.get(U);if(U.isVideoTexture&&We(U),U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){const he=U.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(Z,U,R);return}}t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+R)}function ce(U,R){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){ee(Z,U,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+R)}function xe(U,R){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){ee(Z,U,R);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+R)}function ne(U,R){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){pe(Z,U,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+R)}const Te={[Ir]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[No]:i.MIRRORED_REPEAT},Ce={[un]:i.NEAREST,[Lh]:i.NEAREST_MIPMAP_NEAREST,[ss]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[To]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},Pe={[xv]:i.NEVER,[wv]:i.ALWAYS,[Ev]:i.LESS,[Wh]:i.LEQUAL,[Sv]:i.EQUAL,[bv]:i.GEQUAL,[Mv]:i.GREATER,[Tv]:i.NOTEQUAL};function Xe(U,R){if(R.type===Un&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Sn||R.magFilter===To||R.magFilter===ss||R.magFilter===hi||R.minFilter===Sn||R.minFilter===To||R.minFilter===ss||R.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Te[R.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Te[R.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Te[R.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Ce[R.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Ce[R.minFilter]),R.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Pe[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===un||R.minFilter!==ss&&R.minFilter!==hi||R.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function nt(U,R){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",L));const he=R.source;let le=_.get(he);le===void 0&&(le={},_.set(he,le));const oe=te(R);if(oe!==U.__cacheKey){le[oe]===void 0&&(le[oe]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),le[oe].usedTimes++;const ke=le[U.__cacheKey];ke!==void 0&&(le[U.__cacheKey].usedTimes--,ke.usedTimes===0&&I(R)),U.__cacheKey=oe,U.__webglTexture=le[oe].texture}return Z}function ee(U,R,Z){let he=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(he=i.TEXTURE_3D);const le=nt(U,R),oe=R.source;t.bindTexture(he,U.__webglTexture,i.TEXTURE0+Z);const ke=n.get(oe);if(oe.version!==ke.__version||le===!0){t.activeTexture(i.TEXTURE0+Z);const Re=_t.getPrimaries(_t.workingColorSpace),Ne=R.colorSpace===Ci?null:_t.getPrimaries(R.colorSpace),dt=R.colorSpace===Ci||Re===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Ee=b(R.image,!1,r.maxTextureSize);Ee=gt(R,Ee);const Fe=o.convert(R.format,R.colorSpace),je=o.convert(R.type);let qe=D(R.internalFormat,Fe,je,R.colorSpace,R.isVideoTexture);Xe(he,R);let Ue;const at=R.mipmaps,Je=R.isVideoTexture!==!0,Tt=ke.__version===void 0||le===!0,z=oe.dataReady,we=q(R,Ee);if(R.isDepthTexture)qe=P(R.format===Fr,R.type),Tt&&(Je?t.texStorage2D(i.TEXTURE_2D,1,qe,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,qe,Ee.width,Ee.height,0,Fe,je,null));else if(R.isDataTexture)if(at.length>0){Je&&Tt&&t.texStorage2D(i.TEXTURE_2D,we,qe,at[0].width,at[0].height);for(let ie=0,ue=at.length;ie<ue;ie++)Ue=at[ie],Je?z&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Ue.width,Ue.height,Fe,je,Ue.data):t.texImage2D(i.TEXTURE_2D,ie,qe,Ue.width,Ue.height,0,Fe,je,Ue.data);R.generateMipmaps=!1}else Je?(Tt&&t.texStorage2D(i.TEXTURE_2D,we,qe,Ee.width,Ee.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Fe,je,Ee.data)):t.texImage2D(i.TEXTURE_2D,0,qe,Ee.width,Ee.height,0,Fe,je,Ee.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Je&&Tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,qe,at[0].width,at[0].height,Ee.depth);for(let ie=0,ue=at.length;ie<ue;ie++)if(Ue=at[ie],R.format!==An)if(Fe!==null)if(Je){if(z)if(R.layerUpdates.size>0){const Y=Yu(Ue.width,Ue.height,R.format,R.type);for(const j of R.layerUpdates){const Ge=Ue.data.subarray(j*Y/Ue.data.BYTES_PER_ELEMENT,(j+1)*Y/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,j,Ue.width,Ue.height,1,Fe,Ge)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Ue.width,Ue.height,Ee.depth,Fe,Ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,qe,Ue.width,Ue.height,Ee.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Ue.width,Ue.height,Ee.depth,Fe,je,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,qe,Ue.width,Ue.height,Ee.depth,0,Fe,je,Ue.data)}else{Je&&Tt&&t.texStorage2D(i.TEXTURE_2D,we,qe,at[0].width,at[0].height);for(let ie=0,ue=at.length;ie<ue;ie++)Ue=at[ie],R.format!==An?Fe!==null?Je?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Ue.width,Ue.height,Fe,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,qe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?z&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Ue.width,Ue.height,Fe,je,Ue.data):t.texImage2D(i.TEXTURE_2D,ie,qe,Ue.width,Ue.height,0,Fe,je,Ue.data)}else if(R.isDataArrayTexture)if(Je){if(Tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,qe,Ee.width,Ee.height,Ee.depth),z)if(R.layerUpdates.size>0){const ie=Yu(Ee.width,Ee.height,R.format,R.type);for(const ue of R.layerUpdates){const Y=Ee.data.subarray(ue*ie/Ee.data.BYTES_PER_ELEMENT,(ue+1)*ie/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,Ee.width,Ee.height,1,Fe,je,Y)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Fe,je,Ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,qe,Ee.width,Ee.height,Ee.depth,0,Fe,je,Ee.data);else if(R.isData3DTexture)Je?(Tt&&t.texStorage3D(i.TEXTURE_3D,we,qe,Ee.width,Ee.height,Ee.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Fe,je,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,qe,Ee.width,Ee.height,Ee.depth,0,Fe,je,Ee.data);else if(R.isFramebufferTexture){if(Tt)if(Je)t.texStorage2D(i.TEXTURE_2D,we,qe,Ee.width,Ee.height);else{let ie=Ee.width,ue=Ee.height;for(let Y=0;Y<we;Y++)t.texImage2D(i.TEXTURE_2D,Y,qe,ie,ue,0,Fe,je,null),ie>>=1,ue>>=1}}else if(at.length>0){if(Je&&Tt){const ie=Ve(at[0]);t.texStorage2D(i.TEXTURE_2D,we,qe,ie.width,ie.height)}for(let ie=0,ue=at.length;ie<ue;ie++)Ue=at[ie],Je?z&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Fe,je,Ue):t.texImage2D(i.TEXTURE_2D,ie,qe,Fe,je,Ue);R.generateMipmaps=!1}else if(Je){if(Tt){const ie=Ve(Ee);t.texStorage2D(i.TEXTURE_2D,we,qe,ie.width,ie.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Fe,je,Ee)}else t.texImage2D(i.TEXTURE_2D,0,qe,Fe,je,Ee);x(R)&&v(he),ke.__version=oe.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function pe(U,R,Z){if(R.image.length!==6)return;const he=nt(U,R),le=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+Z);const oe=n.get(le);if(le.version!==oe.__version||he===!0){t.activeTexture(i.TEXTURE0+Z);const ke=_t.getPrimaries(_t.workingColorSpace),Re=R.colorSpace===Ci?null:_t.getPrimaries(R.colorSpace),Ne=R.colorSpace===Ci||ke===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const dt=R.isCompressedTexture||R.image[0].isCompressedTexture,Ee=R.image[0]&&R.image[0].isDataTexture,Fe=[];for(let ue=0;ue<6;ue++)!dt&&!Ee?Fe[ue]=b(R.image[ue],!0,r.maxCubemapSize):Fe[ue]=Ee?R.image[ue].image:R.image[ue],Fe[ue]=gt(R,Fe[ue]);const je=Fe[0],qe=o.convert(R.format,R.colorSpace),Ue=o.convert(R.type),at=D(R.internalFormat,qe,Ue,R.colorSpace),Je=R.isVideoTexture!==!0,Tt=oe.__version===void 0||he===!0,z=le.dataReady;let we=q(R,je);Xe(i.TEXTURE_CUBE_MAP,R);let ie;if(dt){Je&&Tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,at,je.width,je.height);for(let ue=0;ue<6;ue++){ie=Fe[ue].mipmaps;for(let Y=0;Y<ie.length;Y++){const j=ie[Y];R.format!==An?qe!==null?Je?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Y,0,0,j.width,j.height,qe,j.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Y,at,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Y,0,0,j.width,j.height,qe,Ue,j.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Y,at,j.width,j.height,0,qe,Ue,j.data)}}}else{if(ie=R.mipmaps,Je&&Tt){ie.length>0&&we++;const ue=Ve(Fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,at,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Ee){Je?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Fe[ue].width,Fe[ue].height,qe,Ue,Fe[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,at,Fe[ue].width,Fe[ue].height,0,qe,Ue,Fe[ue].data);for(let Y=0;Y<ie.length;Y++){const Ge=ie[Y].image[ue].image;Je?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Y+1,0,0,Ge.width,Ge.height,qe,Ue,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Y+1,at,Ge.width,Ge.height,0,qe,Ue,Ge.data)}}else{Je?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,qe,Ue,Fe[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,at,qe,Ue,Fe[ue]);for(let Y=0;Y<ie.length;Y++){const j=ie[Y];Je?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Y+1,0,0,qe,Ue,j.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Y+1,at,qe,Ue,j.image[ue])}}}x(R)&&v(i.TEXTURE_CUBE_MAP),oe.__version=le.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function Le(U,R,Z,he,le,oe){const ke=o.convert(Z.format,Z.colorSpace),Re=o.convert(Z.type),Ne=D(Z.internalFormat,ke,Re,Z.colorSpace),dt=n.get(R),Ee=n.get(Z);if(Ee.__renderTarget=R,!dt.__hasExternalTextures){const Fe=Math.max(1,R.width>>oe),je=Math.max(1,R.height>>oe);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,oe,Ne,Fe,je,R.depth,0,ke,Re,null):t.texImage2D(le,oe,Ne,Fe,je,0,ke,Re,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),ht(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,le,Ee.__webglTexture,0,ut(R)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,le,Ee.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(U,R,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,U),R.depthBuffer){const he=R.depthTexture,le=he&&he.isDepthTexture?he.type:null,oe=P(R.stencilBuffer,le),ke=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=ut(R);ht(R)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,oe,R.width,R.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,oe,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,oe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,U)}else{const he=R.textures;for(let le=0;le<he.length;le++){const oe=he[le],ke=o.convert(oe.format,oe.colorSpace),Re=o.convert(oe.type),Ne=D(oe.internalFormat,ke,Re,oe.colorSpace),dt=ut(R);Z&&ht(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,Ne,R.width,R.height):ht(R)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,Ne,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=n.get(R.depthTexture);he.__renderTarget=R,(!he.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),me(R.depthTexture,0);const le=he.__webglTexture,oe=ut(R);if(R.depthTexture.format===wr)ht(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(R.depthTexture.format===Fr)ht(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Se(U){const R=n.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){const he=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),he){const le=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,he.removeEventListener("dispose",le)};he.addEventListener("dispose",le),R.__depthDisposeCallback=le}R.__boundDepthTexture=he}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");de(R.__webglFramebuffer,U)}else if(Z){R.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[he]),R.__webglDepthbuffer[he]===void 0)R.__webglDepthbuffer[he]=i.createRenderbuffer(),Me(R.__webglDepthbuffer[he],U,!1);else{const le=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=R.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),Me(R.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,le)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(U,R,Z){const he=n.get(U);R!==void 0&&Le(he.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Se(U)}function At(U){const R=U.texture,Z=n.get(U),he=n.get(R);U.addEventListener("dispose",O);const le=U.textures,oe=U.isWebGLCubeRenderTarget===!0,ke=le.length>1;if(ke||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=R.version,c.memory.textures++),oe){Z.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer[Re]=[];for(let Ne=0;Ne<R.mipmaps.length;Ne++)Z.__webglFramebuffer[Re][Ne]=i.createFramebuffer()}else Z.__webglFramebuffer[Re]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Re=0;Re<R.mipmaps.length;Re++)Z.__webglFramebuffer[Re]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(ke)for(let Re=0,Ne=le.length;Re<Ne;Re++){const dt=n.get(le[Re]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),c.memory.textures++)}if(U.samples>0&&ht(U)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Re=0;Re<le.length;Re++){const Ne=le[Re];Z.__webglColorRenderbuffer[Re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[Re]);const dt=o.convert(Ne.format,Ne.colorSpace),Ee=o.convert(Ne.type),Fe=D(Ne.internalFormat,dt,Ee,Ne.colorSpace,U.isXRRenderTarget===!0),je=ut(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,je,Fe,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Z.__webglColorRenderbuffer[Re])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(Z.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,R);for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ne=0;Ne<R.mipmaps.length;Ne++)Le(Z.__webglFramebuffer[Re][Ne],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ne);else Le(Z.__webglFramebuffer[Re],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);x(R)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let Re=0,Ne=le.length;Re<Ne;Re++){const dt=le[Re],Ee=n.get(dt);t.bindTexture(i.TEXTURE_2D,Ee.__webglTexture),Xe(i.TEXTURE_2D,dt),Le(Z.__webglFramebuffer,U,dt,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,0),x(dt)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Re=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Re=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Re,he.__webglTexture),Xe(Re,R),R.mipmaps&&R.mipmaps.length>0)for(let Ne=0;Ne<R.mipmaps.length;Ne++)Le(Z.__webglFramebuffer[Ne],U,R,i.COLOR_ATTACHMENT0,Re,Ne);else Le(Z.__webglFramebuffer,U,R,i.COLOR_ATTACHMENT0,Re,0);x(R)&&v(Re),t.unbindTexture()}U.depthBuffer&&Se(U)}function Ze(U){const R=U.textures;for(let Z=0,he=R.length;Z<he;Z++){const le=R[Z];if(x(le)){const oe=N(U),ke=n.get(le).__webglTexture;t.bindTexture(oe,ke),v(oe),t.unbindTexture()}}}const Lt=[],V=[];function tn(U){if(U.samples>0){if(ht(U)===!1){const R=U.textures,Z=U.width,he=U.height;let le=i.COLOR_BUFFER_BIT;const oe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(U),Re=R.length>1;if(Re)for(let Ne=0;Ne<R.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ne=0;Ne<R.length;Ne++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),Re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ne]);const dt=n.get(R[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,Z,he,0,0,Z,he,le,i.NEAREST),h===!0&&(Lt.length=0,V.length=0,Lt.push(i.COLOR_ATTACHMENT0+Ne),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Lt.push(oe),V.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Re)for(let Ne=0;Ne<R.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ne]);const dt=n.get(R[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,dt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const R=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function ut(U){return Math.min(r.maxSamples,U.samples)}function ht(U){const R=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function We(U){const R=c.render.frame;p.get(U)!==R&&(p.set(U,R),U.update())}function gt(U,R){const Z=U.colorSpace,he=U.format,le=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Z!==dn&&Z!==Ci&&(_t.getTransfer(Z)===bt?(he!==An||le!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),R}function Ve(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=J,this.resetTextureUnits=ae,this.setTexture2D=me,this.setTexture2DArray=ce,this.setTexture3D=xe,this.setTextureCube=ne,this.rebindTextures=it,this.setupRenderTarget=At,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=ht}function XS(i,e){function t(n,r=Ci){let o;const c=_t.getTransfer(r);if(n===gi)return i.UNSIGNED_BYTE;if(n===Oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ih)return i.BYTE;if(n===Nh)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===Uc)return i.INT;if(n===er)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===ms)return i.HALF_FLOAT;if(n===Uh)return i.ALPHA;if(n===Oh)return i.RGB;if(n===An)return i.RGBA;if(n===kh)return i.LUMINANCE;if(n===Bh)return i.LUMINANCE_ALPHA;if(n===wr)return i.DEPTH_COMPONENT;if(n===Fr)return i.DEPTH_STENCIL;if(n===Bc)return i.RED;if(n===zc)return i.RED_INTEGER;if(n===zh)return i.RG;if(n===Hc)return i.RG_INTEGER;if(n===Vc)return i.RGBA_INTEGER;if(n===bo||n===wo||n===Ao||n===Ro)if(c===bt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===bo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===bo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===tc||n===nc||n===ic)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ec)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rc||n===sc||n===oc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===rc||n===sc)return c===bt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===oc)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ac||n===cc||n===lc||n===uc||n===hc||n===dc||n===fc||n===pc||n===mc||n===_c||n===gc||n===vc||n===yc||n===xc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ac)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cc)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lc)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uc)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hc)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dc)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fc)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pc)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mc)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gc)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vc)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yc)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xc)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===Ec||n===Sc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Co)return c===bt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hh||n===Mc||n===Tc||n===bc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Co)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class jS extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pi extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $S={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,c=null;const l=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,n),v=this._getHandJoint(d,b);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const p=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],_=p.position.distanceTo(m.position),y=.02,S=.005;d.inputState.pinching&&_>y+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=y-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent($S)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const YS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qS=`
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

}`;class KS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new jt,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ii({vertexShader:YS,fragmentShader:qS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new gs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZS extends nr{constructor(e,t){super();const n=this;let r=null,o=1,c=null,l="local-floor",h=1,d=null,p=null,m=null,_=null,y=null,S=null;const b=new KS,x=t.getContextAttributes();let v=null,N=null;const D=[],P=[],q=new Ke;let L=null;const O=new ln;O.viewport=new Et;const $=new ln;$.viewport=new Et;const I=[O,$],T=new jS;let k=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let pe=D[ee];return pe===void 0&&(pe=new La,D[ee]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ee){let pe=D[ee];return pe===void 0&&(pe=new La,D[ee]=pe),pe.getGripSpace()},this.getHand=function(ee){let pe=D[ee];return pe===void 0&&(pe=new La,D[ee]=pe),pe.getHandSpace()};function J(ee){const pe=P.indexOf(ee.inputSource);if(pe===-1)return;const Le=D[pe];Le!==void 0&&(Le.update(ee.inputSource,ee.frame,d||c),Le.dispatchEvent({type:ee.type,data:ee.inputSource}))}function te(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",me);for(let ee=0;ee<D.length;ee++){const pe=P[ee];pe!==null&&(P[ee]=null,D[ee].disconnect(pe))}k=null,ae=null,b.reset(),e.setRenderTarget(v),y=null,_=null,m=null,r=null,N=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(q.width,q.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){l=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(ee){d=ee},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return m},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",te),r.addEventListener("inputsourceschange",me),x.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(q),r.renderState.layers===void 0){const pe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new tr(y.framebufferWidth,y.framebufferHeight,{format:An,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let pe=null,Le=null,Me=null;x.depth&&(Me=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=x.stencil?Fr:wr,Le=x.stencil?Nr:er);const de={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:o};m=new XRWebGLBinding(r,t),_=m.createProjectionLayer(de),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new tr(_.textureWidth,_.textureHeight,{format:An,type:gi,depthTexture:new id(_.textureWidth,_.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await r.requestReferenceSpace(l),nt.setContext(r),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function me(ee){for(let pe=0;pe<ee.removed.length;pe++){const Le=ee.removed[pe],Me=P.indexOf(Le);Me>=0&&(P[Me]=null,D[Me].disconnect(Le))}for(let pe=0;pe<ee.added.length;pe++){const Le=ee.added[pe];let Me=P.indexOf(Le);if(Me===-1){for(let Se=0;Se<D.length;Se++)if(Se>=P.length){P.push(Le),Me=Se;break}else if(P[Se]===null){P[Se]=Le,Me=Se;break}if(Me===-1)break}const de=D[Me];de&&de.connect(Le)}}const ce=new B,xe=new B;function ne(ee,pe,Le){ce.setFromMatrixPosition(pe.matrixWorld),xe.setFromMatrixPosition(Le.matrixWorld);const Me=ce.distanceTo(xe),de=pe.projectionMatrix.elements,Se=Le.projectionMatrix.elements,it=de[14]/(de[10]-1),At=de[14]/(de[10]+1),Ze=(de[9]+1)/de[5],Lt=(de[9]-1)/de[5],V=(de[8]-1)/de[0],tn=(Se[8]+1)/Se[0],ut=it*V,ht=it*tn,We=Me/(-V+tn),gt=We*-V;if(pe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(gt),ee.translateZ(We),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),de[10]===-1)ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ve=it+We,U=At+We,R=ut-gt,Z=ht+(Me-gt),he=Ze*At/U*Ve,le=Lt*At/U*Ve;ee.projectionMatrix.makePerspective(R,Z,he,le,Ve,U),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Te(ee,pe){pe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(pe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let pe=ee.near,Le=ee.far;b.texture!==null&&(b.depthNear>0&&(pe=b.depthNear),b.depthFar>0&&(Le=b.depthFar)),T.near=$.near=O.near=pe,T.far=$.far=O.far=Le,(k!==T.near||ae!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),k=T.near,ae=T.far),O.layers.mask=ee.layers.mask|2,$.layers.mask=ee.layers.mask|4,T.layers.mask=O.layers.mask|$.layers.mask;const Me=ee.parent,de=T.cameras;Te(T,Me);for(let Se=0;Se<de.length;Se++)Te(de[Se],Me);de.length===2?ne(T,O,$):T.projectionMatrix.copy(O.projectionMatrix),Ce(ee,T,Me)};function Ce(ee,pe,Le){Le===null?ee.matrix.copy(pe.matrixWorld):(ee.matrix.copy(Le.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(pe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ur*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(_===null&&y===null))return h},this.setFoveation=function(ee){h=ee,_!==null&&(_.fixedFoveation=ee),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ee)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(T)};let Pe=null;function Xe(ee,pe){if(p=pe.getViewerPose(d||c),S=pe,p!==null){const Le=p.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let Me=!1;Le.length!==T.cameras.length&&(T.cameras.length=0,Me=!0);for(let Se=0;Se<Le.length;Se++){const it=Le[Se];let At=null;if(y!==null)At=y.getViewport(it);else{const Lt=m.getViewSubImage(_,it);At=Lt.viewport,Se===0&&(e.setRenderTargetTextures(N,Lt.colorTexture,_.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(N))}let Ze=I[Se];Ze===void 0&&(Ze=new ln,Ze.layers.enable(Se),Ze.viewport=new Et,I[Se]=Ze),Ze.matrix.fromArray(it.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(it.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(At.x,At.y,At.width,At.height),Se===0&&(T.matrix.copy(Ze.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Me===!0&&T.cameras.push(Ze)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")){const Se=m.getDepthInformation(Le[0]);Se&&Se.isValid&&Se.texture&&b.init(e,Se,r.renderState)}}for(let Le=0;Le<D.length;Le++){const Me=P[Le],de=D[Le];Me!==null&&de!==void 0&&de.update(Me,pe,d||c)}Pe&&Pe(ee,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),S=null}const nt=new nd;nt.setAnimationLoop(Xe),this.setAnimationLoop=function(ee){Pe=ee},this.dispose=function(){}}}const $i=new Bn,JS=new et;function QS(i,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function n(x,v){v.color.getRGB(x.fogColor.value,Qh(i)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function r(x,v,N,D,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?o(x,v):v.isMeshToonMaterial?(o(x,v),m(x,v)):v.isMeshPhongMaterial?(o(x,v),p(x,v)):v.isMeshStandardMaterial?(o(x,v),_(x,v),v.isMeshPhysicalMaterial&&y(x,v,P)):v.isMeshMatcapMaterial?(o(x,v),S(x,v)):v.isMeshDepthMaterial?o(x,v):v.isMeshDistanceMaterial?(o(x,v),b(x,v)):v.isMeshNormalMaterial?o(x,v):v.isLineBasicMaterial?(c(x,v),v.isLineDashedMaterial&&l(x,v)):v.isPointsMaterial?h(x,v,N,D):v.isSpriteMaterial?d(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===pn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===pn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const N=e.get(v),D=N.envMap,P=N.envMapRotation;D&&(x.envMap.value=D,$i.copy(P),$i.x*=-1,$i.y*=-1,$i.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),x.envMapRotation.value.setFromMatrix4(JS.makeRotationFromEuler($i)),x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function c(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function l(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function h(x,v,N,D){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*N,x.scale.value=D*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function d(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function m(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function y(x,v,N){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===pn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=N.texture,x.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,v){v.matcap&&(x.matcap.value=v.matcap)}function b(x,v){const N=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(N.matrixWorld),x.nearDistance.value=N.shadow.camera.near,x.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function eM(i,e,t,n){let r={},o={},c=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,D){const P=D.program;n.uniformBlockBinding(N,P)}function d(N,D){let P=r[N.id];P===void 0&&(S(N),P=p(N),r[N.id]=P,N.addEventListener("dispose",x));const q=D.program;n.updateUBOMapping(N,q);const L=e.render.frame;o[N.id]!==L&&(_(N),o[N.id]=L)}function p(N){const D=m();N.__bindingPointIndex=D;const P=i.createBuffer(),q=N.__size,L=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,q,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,P),P}function m(){for(let N=0;N<l;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const D=r[N.id],P=N.uniforms,q=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let L=0,O=P.length;L<O;L++){const $=Array.isArray(P[L])?P[L]:[P[L]];for(let I=0,T=$.length;I<T;I++){const k=$[I];if(y(k,L,I,q)===!0){const ae=k.__offset,J=Array.isArray(k.value)?k.value:[k.value];let te=0;for(let me=0;me<J.length;me++){const ce=J[me],xe=b(ce);typeof ce=="number"||typeof ce=="boolean"?(k.__data[0]=ce,i.bufferSubData(i.UNIFORM_BUFFER,ae+te,k.__data)):ce.isMatrix3?(k.__data[0]=ce.elements[0],k.__data[1]=ce.elements[1],k.__data[2]=ce.elements[2],k.__data[3]=0,k.__data[4]=ce.elements[3],k.__data[5]=ce.elements[4],k.__data[6]=ce.elements[5],k.__data[7]=0,k.__data[8]=ce.elements[6],k.__data[9]=ce.elements[7],k.__data[10]=ce.elements[8],k.__data[11]=0):(ce.toArray(k.__data,te),te+=xe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ae,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(N,D,P,q){const L=N.value,O=D+"_"+P;if(q[O]===void 0)return typeof L=="number"||typeof L=="boolean"?q[O]=L:q[O]=L.clone(),!0;{const $=q[O];if(typeof L=="number"||typeof L=="boolean"){if($!==L)return q[O]=L,!0}else if($.equals(L)===!1)return $.copy(L),!0}return!1}function S(N){const D=N.uniforms;let P=0;const q=16;for(let O=0,$=D.length;O<$;O++){const I=Array.isArray(D[O])?D[O]:[D[O]];for(let T=0,k=I.length;T<k;T++){const ae=I[T],J=Array.isArray(ae.value)?ae.value:[ae.value];for(let te=0,me=J.length;te<me;te++){const ce=J[te],xe=b(ce),ne=P%q,Te=ne%xe.boundary,Ce=ne+Te;P+=Te,Ce!==0&&q-Ce<xe.storage&&(P+=q-Ce),ae.__data=new Float32Array(xe.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=P,P+=xe.storage}}}const L=P%q;return L>0&&(P+=q-L),N.__size=P,N.__cache={},this}function b(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),D}function x(N){const D=N.target;D.removeEventListener("dispose",x);const P=c.indexOf(D.__bindingPointIndex);c.splice(P,1),i.deleteBuffer(r[D.id]),delete r[D.id],delete o[D.id]}function v(){for(const N in r)i.deleteBuffer(r[N]);c=[],r={},o={}}return{bind:h,update:d,dispose:v}}class tM{constructor(e={}){const{canvas:t=Gv(),context:n=null,depth:r=!0,stencil:o=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=c;const S=new Uint32Array(4),b=new Int32Array(4);let x=null,v=null;const N=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=Li,this.toneMappingExposure=1;const P=this;let q=!1,L=0,O=0,$=null,I=-1,T=null;const k=new Et,ae=new Et;let J=null;const te=new Ye(0);let me=0,ce=t.width,xe=t.height,ne=1,Te=null,Ce=null;const Pe=new Et(0,0,ce,xe),Xe=new Et(0,0,ce,xe);let nt=!1;const ee=new Wc;let pe=!1,Le=!1;const Me=new et,de=new et,Se=new B,it=new Et,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function Lt(){return $===null?ne:1}let V=n;function tn(C,G){return t.getContext(C,G)}try{const C={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fc}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",j,!1),V===null){const G="webgl2";if(V=tn(G,C),V===null)throw tn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ut,ht,We,gt,Ve,U,R,Z,he,le,oe,ke,Re,Ne,dt,Ee,Fe,je,qe,Ue,at,Je,Tt,z;function we(){ut=new oE(V),ut.init(),Je=new XS(V,ut),ht=new eE(V,ut,e,Je),We=new VS(V,ut),ht.reverseDepthBuffer&&_&&We.buffers.depth.setReversed(!0),gt=new lE(V),Ve=new AS,U=new WS(V,ut,We,Ve,ht,Je,gt),R=new nE(P),Z=new sE(P),he=new _0(V),Tt=new Jx(V,he),le=new aE(V,he,gt,Tt),oe=new hE(V,le,he,gt),qe=new uE(V,ht,U),Ee=new tE(Ve),ke=new wS(P,R,Z,ut,ht,Tt,Ee),Re=new QS(P,Ve),Ne=new CS,dt=new FS(ut),je=new Zx(P,R,Z,We,oe,y,h),Fe=new zS(P,oe,ht),z=new eM(V,gt,ht,We),Ue=new Qx(V,ut,gt),at=new cE(V,ut,gt),gt.programs=ke.programs,P.capabilities=ht,P.extensions=ut,P.properties=Ve,P.renderLists=Ne,P.shadowMap=Fe,P.state=We,P.info=gt}we();const ie=new ZS(P,V);this.xr=ie,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(C){C!==void 0&&(ne=C,this.setSize(ce,xe,!1))},this.getSize=function(C){return C.set(ce,xe)},this.setSize=function(C,G,X=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=C,xe=G,t.width=Math.floor(C*ne),t.height=Math.floor(G*ne),X===!0&&(t.style.width=C+"px",t.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(ce*ne,xe*ne).floor()},this.setDrawingBufferSize=function(C,G,X){ce=C,xe=G,ne=X,t.width=Math.floor(C*X),t.height=Math.floor(G*X),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(Pe)},this.setViewport=function(C,G,X,Q){C.isVector4?Pe.set(C.x,C.y,C.z,C.w):Pe.set(C,G,X,Q),We.viewport(k.copy(Pe).multiplyScalar(ne).round())},this.getScissor=function(C){return C.copy(Xe)},this.setScissor=function(C,G,X,Q){C.isVector4?Xe.set(C.x,C.y,C.z,C.w):Xe.set(C,G,X,Q),We.scissor(ae.copy(Xe).multiplyScalar(ne).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(C){We.setScissorTest(nt=C)},this.setOpaqueSort=function(C){Te=C},this.setTransparentSort=function(C){Ce=C},this.getClearColor=function(C){return C.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(C=!0,G=!0,X=!0){let Q=0;if(C){let W=!1;if($!==null){const ye=$.texture.format;W=ye===Vc||ye===Hc||ye===zc}if(W){const ye=$.texture.type,Ae=ye===gi||ye===er||ye===hs||ye===Nr||ye===Oc||ye===kc,Oe=je.getClearColor(),Be=je.getClearAlpha(),$e=Oe.r,Qe=Oe.g,Ie=Oe.b;Ae?(S[0]=$e,S[1]=Qe,S[2]=Ie,S[3]=Be,V.clearBufferuiv(V.COLOR,0,S)):(b[0]=$e,b[1]=Qe,b[2]=Ie,b[3]=Be,V.clearBufferiv(V.COLOR,0,b))}else Q|=V.COLOR_BUFFER_BIT}G&&(Q|=V.DEPTH_BUFFER_BIT),X&&(Q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",j,!1),Ne.dispose(),dt.dispose(),Ve.dispose(),R.dispose(),Z.dispose(),oe.dispose(),Tt.dispose(),z.dispose(),ke.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ni),ie.removeEventListener("sessionend",Ss),ti.stop()};function ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const C=gt.autoReset,G=Fe.enabled,X=Fe.autoUpdate,Q=Fe.needsUpdate,W=Fe.type;we(),gt.autoReset=C,Fe.enabled=G,Fe.autoUpdate=X,Fe.needsUpdate=Q,Fe.type=W}function j(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ge(C){const G=C.target;G.removeEventListener("dispose",Ge),Dt(G)}function Dt(C){Nt(C),Ve.remove(C)}function Nt(C){const G=Ve.get(C).programs;G!==void 0&&(G.forEach(function(X){ke.releaseProgram(X)}),C.isShaderMaterial&&ke.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,X,Q,W,ye){G===null&&(G=At);const Ae=W.isMesh&&W.matrixWorld.determinant()<0,Oe=ws(C,G,X,Q,W);We.setMaterial(Q,Ae);let Be=X.index,$e=1;if(Q.wireframe===!0){if(Be=le.getWireframeAttribute(X),Be===void 0)return;$e=2}const Qe=X.drawRange,Ie=X.attributes.position;let ft=Qe.start*$e,De=(Qe.start+Qe.count)*$e;ye!==null&&(ft=Math.max(ft,ye.start*$e),De=Math.min(De,(ye.start+ye.count)*$e)),Be!==null?(ft=Math.max(ft,0),De=Math.min(De,Be.count)):Ie!=null&&(ft=Math.max(ft,0),De=Math.min(De,Ie.count));const Rt=De-ft;if(Rt<0||Rt===1/0)return;Tt.setup(W,Q,Oe,X,Be);let $t,xt=Ue;if(Be!==null&&($t=he.get(Be),xt=at,xt.setIndex($t)),W.isMesh)Q.wireframe===!0?(We.setLineWidth(Q.wireframeLinewidth*Lt()),xt.setMode(V.LINES)):xt.setMode(V.TRIANGLES);else if(W.isLine){let ze=Q.linewidth;ze===void 0&&(ze=1),We.setLineWidth(ze*Lt()),W.isLineSegments?xt.setMode(V.LINES):W.isLineLoop?xt.setMode(V.LINE_LOOP):xt.setMode(V.LINE_STRIP)}else W.isPoints?xt.setMode(V.POINTS):W.isSprite&&xt.setMode(V.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)xt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const ze=W._multiDrawStarts,Cn=W._multiDrawCounts,vt=W._multiDrawCount,gn=Be?he.get(Be).bytesPerElement:1,zn=Ve.get(Q).currentProgram.getUniforms();for(let rn=0;rn<vt;rn++)zn.setValue(V,"_gl_DrawID",rn),xt.render(ze[rn]/gn,Cn[rn])}else if(W.isInstancedMesh)xt.renderInstances(ft,Rt,W.count);else if(X.isInstancedBufferGeometry){const ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Cn=Math.min(X.instanceCount,ze);xt.renderInstances(ft,Rt,Cn)}else xt.render(ft,Rt)};function ot(C,G,X){C.transparent===!0&&C.side===$n&&C.forceSinglePass===!1?(C.side=pn,C.needsUpdate=!0,rr(C,G,X),C.side=_i,C.needsUpdate=!0,rr(C,G,X),C.side=$n):rr(C,G,X)}this.compile=function(C,G,X=null){X===null&&(X=C),v=dt.get(X),v.init(G),D.push(v),X.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),C!==X&&C.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),v.setupLights();const Q=new Set;return C.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ye=W.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const Oe=ye[Ae];ot(Oe,X,W),Q.add(Oe)}else ot(ye,X,W),Q.add(ye)}),D.pop(),v=null,Q},this.compileAsync=function(C,G,X=null){const Q=this.compile(C,G,X);return new Promise(W=>{function ye(){if(Q.forEach(function(Ae){Ve.get(Ae).currentProgram.isReady()&&Q.delete(Ae)}),Q.size===0){W(C);return}setTimeout(ye,10)}ut.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let _n=null;function Ot(C){_n&&_n(C)}function Ni(){ti.stop()}function Ss(){ti.start()}const ti=new nd;ti.setAnimationLoop(Ot),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(C){_n=C,ie.setAnimationLoop(C),C===null?ti.stop():ti.start()},ie.addEventListener("sessionstart",Ni),ie.addEventListener("sessionend",Ss),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(G),G=ie.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,G,$),v=dt.get(C,D.length),v.init(G),D.push(v),de.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ee.setFromProjectionMatrix(de),Le=this.localClippingEnabled,pe=Ee.init(this.clippingPlanes,Le),x=Ne.get(C,N.length),x.init(),N.push(x),ie.enabled===!0&&ie.isPresenting===!0){const ye=P.xr.getDepthSensingMesh();ye!==null&&nn(ye,G,-1/0,P.sortObjects)}nn(C,G,0,P.sortObjects),x.finish(),P.sortObjects===!0&&x.sort(Te,Ce),Ze=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ze&&je.addToRenderList(x,C),this.info.render.frame++,pe===!0&&Ee.beginShadows();const X=v.state.shadowsArray;Fe.render(X,C,G),pe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=x.opaque,W=x.transmissive;if(v.setupLights(),G.isArrayCamera){const ye=G.cameras;if(W.length>0)for(let Ae=0,Oe=ye.length;Ae<Oe;Ae++){const Be=ye[Ae];Fi(Q,W,C,Be)}Ze&&je.render(C);for(let Ae=0,Oe=ye.length;Ae<Oe;Ae++){const Be=ye[Ae];Ms(x,C,Be,Be.viewport)}}else W.length>0&&Fi(Q,W,C,G),Ze&&je.render(C),Ms(x,C,G);$!==null&&(U.updateMultisampleRenderTarget($),U.updateRenderTargetMipmap($)),C.isScene===!0&&C.onAfterRender(P,C,G),Tt.resetDefaultState(),I=-1,T=null,D.pop(),D.length>0?(v=D[D.length-1],pe===!0&&Ee.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,N.pop(),N.length>0?x=N[N.length-1]:x=null};function nn(C,G,X,Q){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ee.intersectsSprite(C)){Q&&it.setFromMatrixPosition(C.matrixWorld).applyMatrix4(de);const Ae=oe.update(C),Oe=C.material;Oe.visible&&x.push(C,Ae,Oe,X,it.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ee.intersectsObject(C))){const Ae=oe.update(C),Oe=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),it.copy(C.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),it.copy(Ae.boundingSphere.center)),it.applyMatrix4(C.matrixWorld).applyMatrix4(de)),Array.isArray(Oe)){const Be=Ae.groups;for(let $e=0,Qe=Be.length;$e<Qe;$e++){const Ie=Be[$e],ft=Oe[Ie.materialIndex];ft&&ft.visible&&x.push(C,Ae,ft,X,it.z,Ie)}}else Oe.visible&&x.push(C,Ae,Oe,X,it.z,null)}}const ye=C.children;for(let Ae=0,Oe=ye.length;Ae<Oe;Ae++)nn(ye[Ae],G,X,Q)}function Ms(C,G,X,Q){const W=C.opaque,ye=C.transmissive,Ae=C.transparent;v.setupLightsView(X),pe===!0&&Ee.setGlobalState(P.clippingPlanes,X),Q&&We.viewport(k.copy(Q)),W.length>0&&ni(W,G,X),ye.length>0&&ni(ye,G,X),Ae.length>0&&ni(Ae,G,X),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Fi(C,G,X,Q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[Q.id]===void 0&&(v.state.transmissionRenderTarget[Q.id]=new tr(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?ms:gi,minFilter:hi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const ye=v.state.transmissionRenderTarget[Q.id],Ae=Q.viewport||k;ye.setSize(Ae.z,Ae.w);const Oe=P.getRenderTarget();P.setRenderTarget(ye),P.getClearColor(te),me=P.getClearAlpha(),me<1&&P.setClearColor(16777215,.5),P.clear(),Ze&&je.render(X);const Be=P.toneMapping;P.toneMapping=Li;const $e=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),v.setupLightsView(Q),pe===!0&&Ee.setGlobalState(P.clippingPlanes,Q),ni(C,X,Q),U.updateMultisampleRenderTarget(ye),U.updateRenderTargetMipmap(ye),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ie=0,ft=G.length;Ie<ft;Ie++){const De=G[Ie],Rt=De.object,$t=De.geometry,xt=De.material,ze=De.group;if(xt.side===$n&&Rt.layers.test(Q.layers)){const Cn=xt.side;xt.side=pn,xt.needsUpdate=!0,ir(Rt,X,Q,$t,xt,ze),xt.side=Cn,xt.needsUpdate=!0,Qe=!0}}Qe===!0&&(U.updateMultisampleRenderTarget(ye),U.updateRenderTargetMipmap(ye))}P.setRenderTarget(Oe),P.setClearColor(te,me),$e!==void 0&&(Q.viewport=$e),P.toneMapping=Be}function ni(C,G,X){const Q=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ye=C.length;W<ye;W++){const Ae=C[W],Oe=Ae.object,Be=Ae.geometry,$e=Q===null?Ae.material:Q,Qe=Ae.group;Oe.layers.test(X.layers)&&ir(Oe,G,X,Be,$e,Qe)}}function ir(C,G,X,Q,W,ye){C.onBeforeRender(P,G,X,Q,W,ye),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(P,G,X,Q,C,ye),W.transparent===!0&&W.side===$n&&W.forceSinglePass===!1?(W.side=pn,W.needsUpdate=!0,P.renderBufferDirect(X,G,Q,W,C,ye),W.side=_i,W.needsUpdate=!0,P.renderBufferDirect(X,G,Q,W,C,ye),W.side=$n):P.renderBufferDirect(X,G,Q,W,C,ye),C.onAfterRender(P,G,X,Q,W,ye)}function rr(C,G,X){G.isScene!==!0&&(G=At);const Q=Ve.get(C),W=v.state.lights,ye=v.state.shadowsArray,Ae=W.state.version,Oe=ke.getParameters(C,W.state,ye,G,X),Be=ke.getProgramCacheKey(Oe);let $e=Q.programs;Q.environment=C.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(C.isMeshStandardMaterial?Z:R).get(C.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,$e===void 0&&(C.addEventListener("dispose",Ge),$e=new Map,Q.programs=$e);let Qe=$e.get(Be);if(Qe!==void 0){if(Q.currentProgram===Qe&&Q.lightsStateVersion===Ae)return bs(C,Oe),Qe}else Oe.uniforms=ke.getUniforms(C),C.onBeforeCompile(Oe,P),Qe=ke.acquireProgram(Oe,Be),$e.set(Be,Qe),Q.uniforms=Oe.uniforms;const Ie=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ie.clippingPlanes=Ee.uniform),bs(C,Oe),Q.needsLights=Wo(C),Q.lightsStateVersion=Ae,Q.needsLights&&(Ie.ambientLightColor.value=W.state.ambient,Ie.lightProbe.value=W.state.probe,Ie.directionalLights.value=W.state.directional,Ie.directionalLightShadows.value=W.state.directionalShadow,Ie.spotLights.value=W.state.spot,Ie.spotLightShadows.value=W.state.spotShadow,Ie.rectAreaLights.value=W.state.rectArea,Ie.ltc_1.value=W.state.rectAreaLTC1,Ie.ltc_2.value=W.state.rectAreaLTC2,Ie.pointLights.value=W.state.point,Ie.pointLightShadows.value=W.state.pointShadow,Ie.hemisphereLights.value=W.state.hemi,Ie.directionalShadowMap.value=W.state.directionalShadowMap,Ie.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ie.spotShadowMap.value=W.state.spotShadowMap,Ie.spotLightMatrix.value=W.state.spotLightMatrix,Ie.spotLightMap.value=W.state.spotLightMap,Ie.pointShadowMap.value=W.state.pointShadowMap,Ie.pointShadowMatrix.value=W.state.pointShadowMatrix),Q.currentProgram=Qe,Q.uniformsList=null,Qe}function Ts(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=Po.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function bs(C,G){const X=Ve.get(C);X.outputColorSpace=G.outputColorSpace,X.batching=G.batching,X.batchingColor=G.batchingColor,X.instancing=G.instancing,X.instancingColor=G.instancingColor,X.instancingMorph=G.instancingMorph,X.skinning=G.skinning,X.morphTargets=G.morphTargets,X.morphNormals=G.morphNormals,X.morphColors=G.morphColors,X.morphTargetsCount=G.morphTargetsCount,X.numClippingPlanes=G.numClippingPlanes,X.numIntersection=G.numClipIntersection,X.vertexAlphas=G.vertexAlphas,X.vertexTangents=G.vertexTangents,X.toneMapping=G.toneMapping}function ws(C,G,X,Q,W){G.isScene!==!0&&(G=At),U.resetTextureUnits();const ye=G.fog,Ae=Q.isMeshStandardMaterial?G.environment:null,Oe=$===null?P.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:dn,Be=(Q.isMeshStandardMaterial?Z:R).get(Q.envMap||Ae),$e=Q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qe=!!X.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ie=!!X.morphAttributes.position,ft=!!X.morphAttributes.normal,De=!!X.morphAttributes.color;let Rt=Li;Q.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Rt=P.toneMapping);const $t=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xt=$t!==void 0?$t.length:0,ze=Ve.get(Q),Cn=v.state.lights;if(pe===!0&&(Le===!0||C!==T)){const Yt=C===T&&Q.id===I;Ee.setState(Q,C,Yt)}let vt=!1;Q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Cn.state.version||ze.outputColorSpace!==Oe||W.isBatchedMesh&&ze.batching===!1||!W.isBatchedMesh&&ze.batching===!0||W.isBatchedMesh&&ze.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&ze.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&ze.instancing===!1||!W.isInstancedMesh&&ze.instancing===!0||W.isSkinnedMesh&&ze.skinning===!1||!W.isSkinnedMesh&&ze.skinning===!0||W.isInstancedMesh&&ze.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ze.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ze.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ze.instancingMorph===!1&&W.morphTexture!==null||ze.envMap!==Be||Q.fog===!0&&ze.fog!==ye||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ee.numPlanes||ze.numIntersection!==Ee.numIntersection)||ze.vertexAlphas!==$e||ze.vertexTangents!==Qe||ze.morphTargets!==Ie||ze.morphNormals!==ft||ze.morphColors!==De||ze.toneMapping!==Rt||ze.morphTargetsCount!==xt)&&(vt=!0):(vt=!0,ze.__version=Q.version);let gn=ze.currentProgram;vt===!0&&(gn=rr(Q,G,W));let zn=!1,rn=!1,yi=!1;const M=gn.getUniforms(),pt=ze.uniforms;if(We.useProgram(gn.program)&&(zn=!0,rn=!0,yi=!0),Q.id!==I&&(I=Q.id,rn=!0),zn||T!==C){We.buffers.depth.getReversed()?(Me.copy(C.projectionMatrix),Xv(Me),jv(Me),M.setValue(V,"projectionMatrix",Me)):M.setValue(V,"projectionMatrix",C.projectionMatrix),M.setValue(V,"viewMatrix",C.matrixWorldInverse);const sn=M.map.cameraPosition;sn!==void 0&&sn.setValue(V,Se.setFromMatrixPosition(C.matrixWorld)),ht.logarithmicDepthBuffer&&M.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&M.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,rn=!0,yi=!0)}if(W.isSkinnedMesh){M.setOptional(V,W,"bindMatrix"),M.setOptional(V,W,"bindMatrixInverse");const Yt=W.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),M.setValue(V,"boneTexture",Yt.boneTexture,U))}W.isBatchedMesh&&(M.setOptional(V,W,"batchingTexture"),M.setValue(V,"batchingTexture",W._matricesTexture,U),M.setOptional(V,W,"batchingIdTexture"),M.setValue(V,"batchingIdTexture",W._indirectTexture,U),M.setOptional(V,W,"batchingColorTexture"),W._colorsTexture!==null&&M.setValue(V,"batchingColorTexture",W._colorsTexture,U));const Ui=X.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&qe.update(W,X,gn),(rn||ze.receiveShadow!==W.receiveShadow)&&(ze.receiveShadow=W.receiveShadow,M.setValue(V,"receiveShadow",W.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(pt.envMap.value=Be,pt.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&G.environment!==null&&(pt.envMapIntensity.value=G.environmentIntensity),rn&&(M.setValue(V,"toneMappingExposure",P.toneMappingExposure),ze.needsLights&&Go(pt,yi),ye&&Q.fog===!0&&Re.refreshFogUniforms(pt,ye),Re.refreshMaterialUniforms(pt,Q,ne,xe,v.state.transmissionRenderTarget[C.id]),Po.upload(V,Ts(ze),pt,U)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Po.upload(V,Ts(ze),pt,U),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&M.setValue(V,"center",W.center),M.setValue(V,"modelViewMatrix",W.modelViewMatrix),M.setValue(V,"normalMatrix",W.normalMatrix),M.setValue(V,"modelMatrix",W.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Yt=Q.uniformsGroups;for(let sn=0,Hn=Yt.length;sn<Hn;sn++){const As=Yt[sn];z.update(As,gn),z.bind(As,gn)}}return gn}function Go(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Wo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,G,X){Ve.get(C.texture).__webglTexture=G,Ve.get(C.depthTexture).__webglTexture=X;const Q=Ve.get(C);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=X===void 0,Q.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,G){const X=Ve.get(C);X.__webglFramebuffer=G,X.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,X=0){$=C,L=G,O=X;let Q=!0,W=null,ye=!1,Ae=!1;if(C){const Be=Ve.get(C);if(Be.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(V.FRAMEBUFFER,null),Q=!1;else if(Be.__webglFramebuffer===void 0)U.setupRenderTarget(C);else if(Be.__hasExternalTextures)U.rebindTextures(C,Ve.get(C.texture).__webglTexture,Ve.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ie=C.depthTexture;if(Be.__boundDepthTexture!==Ie){if(Ie!==null&&Ve.has(Ie)&&(C.width!==Ie.image.width||C.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(C)}}const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ae=!0);const Qe=Ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[G])?W=Qe[G][X]:W=Qe[G],ye=!0):C.samples>0&&U.useMultisampledRTT(C)===!1?W=Ve.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?W=Qe[X]:W=Qe,k.copy(C.viewport),ae.copy(C.scissor),J=C.scissorTest}else k.copy(Pe).multiplyScalar(ne).floor(),ae.copy(Xe).multiplyScalar(ne).floor(),J=nt;if(We.bindFramebuffer(V.FRAMEBUFFER,W)&&Q&&We.drawBuffers(C,W),We.viewport(k),We.scissor(ae),We.setScissorTest(J),ye){const Be=Ve.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+G,Be.__webglTexture,X)}else if(Ae){const Be=Ve.get(C.texture),$e=G||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Be.__webglTexture,X||0,$e)}I=-1},this.readRenderTargetPixels=function(C,G,X,Q,W,ye,Ae){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ae!==void 0&&(Oe=Oe[Ae]),Oe){We.bindFramebuffer(V.FRAMEBUFFER,Oe);try{const Be=C.texture,$e=Be.format,Qe=Be.type;if(!ht.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-Q&&X>=0&&X<=C.height-W&&V.readPixels(G,X,Q,W,Je.convert($e),Je.convert(Qe),ye)}finally{const Be=$!==null?Ve.get($).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(C,G,X,Q,W,ye,Ae){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ae!==void 0&&(Oe=Oe[Ae]),Oe){const Be=C.texture,$e=Be.format,Qe=Be.type;if(!ht.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=C.width-Q&&X>=0&&X<=C.height-W){We.bindFramebuffer(V.FRAMEBUFFER,Oe);const Ie=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ie),V.bufferData(V.PIXEL_PACK_BUFFER,ye.byteLength,V.STREAM_READ),V.readPixels(G,X,Q,W,Je.convert($e),Je.convert(Qe),0);const ft=$!==null?Ve.get($).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,ft);const De=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Wv(V,De,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ie),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,ye),V.deleteBuffer(Ie),V.deleteSync(De),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,G=null,X=0){C.isTexture!==!0&&(os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,C=arguments[1]);const Q=Math.pow(2,-X),W=Math.floor(C.image.width*Q),ye=Math.floor(C.image.height*Q),Ae=G!==null?G.x:0,Oe=G!==null?G.y:0;U.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,X,0,0,Ae,Oe,W,ye),We.unbindTexture()},this.copyTextureToTexture=function(C,G,X=null,Q=null,W=0){C.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,C=arguments[1],G=arguments[2],W=arguments[3]||0,X=null);let ye,Ae,Oe,Be,$e,Qe,Ie,ft,De;const Rt=C.isCompressedTexture?C.mipmaps[W]:C.image;X!==null?(ye=X.max.x-X.min.x,Ae=X.max.y-X.min.y,Oe=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,$e=X.min.y,Qe=X.isBox3?X.min.z:0):(ye=Rt.width,Ae=Rt.height,Oe=Rt.depth||1,Be=0,$e=0,Qe=0),Q!==null?(Ie=Q.x,ft=Q.y,De=Q.z):(Ie=0,ft=0,De=0);const $t=Je.convert(G.format),xt=Je.convert(G.type);let ze;G.isData3DTexture?(U.setTexture3D(G,0),ze=V.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(U.setTexture2DArray(G,0),ze=V.TEXTURE_2D_ARRAY):(U.setTexture2D(G,0),ze=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,G.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,G.unpackAlignment);const Cn=V.getParameter(V.UNPACK_ROW_LENGTH),vt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),gn=V.getParameter(V.UNPACK_SKIP_PIXELS),zn=V.getParameter(V.UNPACK_SKIP_ROWS),rn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Rt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Rt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Be),V.pixelStorei(V.UNPACK_SKIP_ROWS,$e),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qe);const yi=C.isDataArrayTexture||C.isData3DTexture,M=G.isDataArrayTexture||G.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const pt=Ve.get(C),Ui=Ve.get(G),Yt=Ve.get(pt.__renderTarget),sn=Ve.get(Ui.__renderTarget);We.bindFramebuffer(V.READ_FRAMEBUFFER,Yt.__webglFramebuffer),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let Hn=0;Hn<Oe;Hn++)yi&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ve.get(C).__webglTexture,W,Qe+Hn),C.isDepthTexture?(M&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ve.get(G).__webglTexture,W,De+Hn),V.blitFramebuffer(Be,$e,ye,Ae,Ie,ft,ye,Ae,V.DEPTH_BUFFER_BIT,V.NEAREST)):M?V.copyTexSubImage3D(ze,W,Ie,ft,De+Hn,Be,$e,ye,Ae):V.copyTexSubImage2D(ze,W,Ie,ft,De+Hn,Be,$e,ye,Ae);We.bindFramebuffer(V.READ_FRAMEBUFFER,null),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else M?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(ze,W,Ie,ft,De,ye,Ae,Oe,$t,xt,Rt.data):G.isCompressedArrayTexture?V.compressedTexSubImage3D(ze,W,Ie,ft,De,ye,Ae,Oe,$t,Rt.data):V.texSubImage3D(ze,W,Ie,ft,De,ye,Ae,Oe,$t,xt,Rt):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,W,Ie,ft,ye,Ae,$t,xt,Rt.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,W,Ie,ft,Rt.width,Rt.height,$t,Rt.data):V.texSubImage2D(V.TEXTURE_2D,W,Ie,ft,ye,Ae,$t,xt,Rt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Cn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,vt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,gn),V.pixelStorei(V.UNPACK_SKIP_ROWS,zn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,rn),W===0&&G.generateMipmaps&&V.generateMipmap(ze),We.unbindTexture()},this.copyTextureToTexture3D=function(C,G,X=null,Q=null,W=0){return C.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Q=arguments[1]||null,C=arguments[2],G=arguments[3],W=arguments[4]||0),os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,G,X,Q,W)},this.initRenderTarget=function(C){Ve.get(C).__webglFramebuffer===void 0&&U.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?U.setTextureCube(C,0):C.isData3DTexture?U.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?U.setTexture2DArray(C,0):U.setTexture2D(C,0),We.unbindTexture()},this.resetState=function(){L=0,O=0,$=null,We.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}class $c{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new $c(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nM extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class iM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ac,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new B;class Yc{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),o=St(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const qu=new B,Ku=new Et,Zu=new Et,rM=new B,Ju=new et,ho=new B,Ia=new Jn,Qu=new et,Na=new _s;class sM extends Kt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zl,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ho),this.boundingBox.expandByPoint(ho)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ho),this.boundingSphere.expandByPoint(ho)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(r),e.ray.intersectsSphere(Ia)!==!1&&(Qu.copy(r).invert(),Na.copy(e.ray).applyMatrix4(Qu),!(this.boundingBox!==null&&Na.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Na)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===pv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Ku.fromBufferAttribute(r.attributes.skinIndex,e),Zu.fromBufferAttribute(r.attributes.skinWeight,e),qu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const c=Zu.getComponent(o);if(c!==0){const l=Ku.getComponent(o);Ju.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(rM.copy(qu).applyMatrix4(Ju),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class cd extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ld extends jt{constructor(e=null,t=1,n=1,r,o,c,l,h,d=un,p=un,m,_){super(null,c,l,h,d,p,r,o,m,_),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eh=new et,oM=new et;class qc{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let o=0,c=e.length;o<c;o++){const l=e[o]?e[o].matrixWorld:oM;eh.multiplyMatrices(l,t[o]),eh.toArray(n,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new qc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ld(t,e,e,An,Un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const o=e.bones[n];let c=t[o];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),c=new cd),this.bones.push(c),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,o=t.length;r<o;r++){const c=t[r];e.bones.push(c.uuid);const l=n[r];e.boneInverses.push(l.toArray())}return e}}class Cc extends hn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xr=new et,th=new et,fo=[],nh=new Xt,aM=new et,es=new Kt,ts=new Jn;class cM extends Kt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,aM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xr),nh.copy(e.boundingBox).applyMatrix4(xr),this.boundingBox.union(nh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xr),ts.copy(e.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,o=n.length+1,c=e*o+1;for(let l=0;l<n.length;l++)n[l]=r[c+l]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ts.copy(this.boundingSphere),ts.applyMatrix4(n),e.ray.intersectsSphere(ts)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,xr),th.multiplyMatrices(n,xr),es.matrixWorld=th,es.raycast(e,fo);for(let c=0,l=fo.length;c<l;c++){const h=fo[c];h.instanceId=o,h.object=this,t.push(h)}fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ld(new Float32Array(r*this.count),r,this.count,Bc,Un));const o=this.morphTexture.source.data.data;let c=0;for(let d=0;d<n.length;d++)c+=n[d];const l=this.geometry.morphTargetsRelative?1:1-c,h=r*e;o[h]=l,o.set(n,h+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class vs extends Zn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uo=new B,Oo=new B,ih=new et,ns=new _s,po=new Jn,Fa=new B,rh=new B;class Kc extends It{constructor(e=new mn,t=new vs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)Uo.fromBufferAttribute(t,r-1),Oo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Uo.distanceTo(Oo);e.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),po.radius+=o,e.ray.intersectsSphere(po)===!1)return;ih.copy(r).invert(),ns.copy(e.ray).applyMatrix4(ih);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,d=this.isLineSegments?2:1,p=n.index,_=n.attributes.position;if(p!==null){const y=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let b=y,x=S-1;b<x;b+=d){const v=p.getX(b),N=p.getX(b+1),D=mo(this,e,ns,h,v,N);D&&t.push(D)}if(this.isLineLoop){const b=p.getX(S-1),x=p.getX(y),v=mo(this,e,ns,h,b,x);v&&t.push(v)}}else{const y=Math.max(0,c.start),S=Math.min(_.count,c.start+c.count);for(let b=y,x=S-1;b<x;b+=d){const v=mo(this,e,ns,h,b,b+1);v&&t.push(v)}if(this.isLineLoop){const b=mo(this,e,ns,h,S-1,y);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function mo(i,e,t,n,r,o){const c=i.geometry.attributes.position;if(Uo.fromBufferAttribute(c,r),Oo.fromBufferAttribute(c,o),t.distanceSqToSegment(Uo,Oo,Fa,rh)>n)return;Fa.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Fa);if(!(h<e.near||h>e.far))return{distance:h,point:rh.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const sh=new B,oh=new B;class Ho extends Kc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)sh.fromBufferAttribute(t,r),oh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+sh.distanceTo(oh);e.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lM extends Kc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ud extends Zn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ah=new et,Pc=new _s,_o=new Jn,go=new B;class uM extends It{constructor(e=new mn,t=new ud){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),_o.radius+=o,e.ray.intersectsSphere(_o)===!1)return;ah.copy(r).invert(),Pc.copy(e.ray).applyMatrix4(ah);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,d=n.index,m=n.attributes.position;if(d!==null){const _=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let S=_,b=y;S<b;S++){const x=d.getX(S);go.fromBufferAttribute(m,x),ch(go,x,h,r,e,t,this)}}else{const _=Math.max(0,c.start),y=Math.min(m.count,c.start+c.count);for(let S=_,b=y;S<b;S++)go.fromBufferAttribute(m,S),ch(go,S,h,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function ch(i,e,t,n,r,o,c){const l=Pc.distanceSqToPoint(i);if(l<t){const h=new B;Pc.closestPointToPoint(i,h),h.applyMatrix4(n);const d=r.ray.origin.distanceTo(h);if(d<r.near||d>r.far)return;o.push({distance:d,distanceToRay:Math.sqrt(l),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}const vo=new B,yo=new B,Ua=new B,xo=new wn;class hM extends mn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),o=Math.cos(Ar*t),c=e.getIndex(),l=e.getAttribute("position"),h=c?c.count:l.count,d=[0,0,0],p=["a","b","c"],m=new Array(3),_={},y=[];for(let S=0;S<h;S+=3){c?(d[0]=c.getX(S),d[1]=c.getX(S+1),d[2]=c.getX(S+2)):(d[0]=S,d[1]=S+1,d[2]=S+2);const{a:b,b:x,c:v}=xo;if(b.fromBufferAttribute(l,d[0]),x.fromBufferAttribute(l,d[1]),v.fromBufferAttribute(l,d[2]),xo.getNormal(Ua),m[0]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,m[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,m[2]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let N=0;N<3;N++){const D=(N+1)%3,P=m[N],q=m[D],L=xo[p[N]],O=xo[p[D]],$=`${P}_${q}`,I=`${q}_${P}`;I in _&&_[I]?(Ua.dot(_[I].normal)<=o&&(y.push(L.x,L.y,L.z),y.push(O.x,O.y,O.z)),_[I]=null):$ in _||(_[$]={index0:d[N],index1:d[D],normal:Ua.clone()})}}for(const S in _)if(_[S]){const{index0:b,index1:x}=_[S];vo.fromBufferAttribute(l,b),yo.fromBufferAttribute(l,x),y.push(vo.x,vo.y,vo.z),y.push(yo.x,yo.y,yo.z)}this.setAttribute("position",new Zt(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ys extends Zn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qn extends ys{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Eo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function dM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fM(i){function e(r,o){return i[r]-i[o]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function lh(i,e,t){const n=i.length,r=new i.constructor(n);for(let o=0,c=0;c!==n;++o){const l=t[o]*e;for(let h=0;h!==e;++h)r[c++]=i[l+h]}return r}function hd(i,e,t,n){let r=1,o=i[0];for(;o!==void 0&&o[n]===void 0;)o=i[r++];if(o===void 0)return;let c=o[n];if(c!==void 0)if(Array.isArray(c))do c=o[n],c!==void 0&&(e.push(o.time),t.push.apply(t,c)),o=i[r++];while(o!==void 0);else if(c.toArray!==void 0)do c=o[n],c!==void 0&&(e.push(o.time),c.toArray(t,t.length)),o=i[r++];while(o!==void 0);else do c=o[n],c!==void 0&&(e.push(o.time),t.push(c)),o=i[r++];while(o!==void 0)}class xs{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],o=t[n-1];e:{t:{let c;n:{i:if(!(e<r)){for(let l=n+2;;){if(r===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(o=r,r=t[++n],e<r)break t}c=t.length;break n}if(!(e>=o)){const l=t[1];e<l&&(n=2,o=l);for(let h=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(r=o,o=t[--n-1],e>=o)break t}c=n,n=0;break n}break e}for(;n<c;){const l=n+c>>>1;e<t[l]?c=l:n=l+1}if(r=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=e*r;for(let c=0;c!==r;++c)t[c]=n[o+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class pM extends xs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jl,endingEnd:Jl}}intervalChanged_(e,t,n){const r=this.parameterPositions;let o=e-2,c=e+1,l=r[o],h=r[c];if(l===void 0)switch(this.getSettings_().endingStart){case Ql:o=e,l=2*t-n;break;case eu:o=r.length-2,l=t+r[o]-r[o+1];break;default:o=e,l=n}if(h===void 0)switch(this.getSettings_().endingEnd){case Ql:c=e,h=2*n-t;break;case eu:c=1,h=n+r[1]-r[0];break;default:c=e-1,h=t}const d=(n-t)*.5,p=this.valueSize;this._weightPrev=d/(t-l),this._weightNext=d/(h-n),this._offsetPrev=o*p,this._offsetNext=c*p}interpolate_(e,t,n,r){const o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,h=e*l,d=h-l,p=this._offsetPrev,m=this._offsetNext,_=this._weightPrev,y=this._weightNext,S=(n-t)/(r-t),b=S*S,x=b*S,v=-_*x+2*_*b-_*S,N=(1+_)*x+(-1.5-2*_)*b+(-.5+_)*S+1,D=(-1-y)*x+(1.5+y)*b+.5*S,P=y*x-y*b;for(let q=0;q!==l;++q)o[q]=v*c[p+q]+N*c[d+q]+D*c[h+q]+P*c[m+q];return o}}class mM extends xs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,h=e*l,d=h-l,p=(n-t)/(r-t),m=1-p;for(let _=0;_!==l;++_)o[_]=c[d+_]*m+c[h+_]*p;return o}}class _M extends xs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ei{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Eo(t,this.TimeBufferType),this.values=Eo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Eo(e.times,Array),values:Eo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _M(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ds:t=this.InterpolantFactoryMethodDiscrete;break;case fs:t=this.InterpolantFactoryMethodLinear;break;case sa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ds;case this.InterpolantFactoryMethodLinear:return fs;case this.InterpolantFactoryMethodSmooth:return sa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let o=0,c=r-1;for(;o!==r&&n[o]<e;)++o;for(;c!==-1&&n[c]>t;)--c;if(++c,o!==0||c!==r){o>=c&&(c=Math.max(c,1),o=c-1);const l=this.getValueSize();this.times=n.slice(o,c),this.values=this.values.slice(o*l,c*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let l=0;l!==o;l++){const h=n[l];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,h),e=!1;break}if(c!==null&&c>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,h,c),e=!1;break}c=h}if(r!==void 0&&dM(r))for(let l=0,h=r.length;l!==h;++l){const d=r[l];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===sa,o=e.length-1;let c=1;for(let l=1;l<o;++l){let h=!1;const d=e[l],p=e[l+1];if(d!==p&&(l!==1||d!==e[0]))if(r)h=!0;else{const m=l*n,_=m-n,y=m+n;for(let S=0;S!==n;++S){const b=t[m+S];if(b!==t[_+S]||b!==t[y+S]){h=!0;break}}}if(h){if(l!==c){e[c]=e[l];const m=l*n,_=c*n;for(let y=0;y!==n;++y)t[_+y]=t[m+y]}++c}}if(o>0){e[c]=e[o];for(let l=o*n,h=c*n,d=0;d!==n;++d)t[h+d]=t[l+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=fs;class Wr extends ei{constructor(e,t,n){super(e,t,n)}}Wr.prototype.ValueTypeName="bool";Wr.prototype.ValueBufferType=Array;Wr.prototype.DefaultInterpolation=ds;Wr.prototype.InterpolantFactoryMethodLinear=void 0;Wr.prototype.InterpolantFactoryMethodSmooth=void 0;class dd extends ei{}dd.prototype.ValueTypeName="color";class kr extends ei{}kr.prototype.ValueTypeName="number";class gM extends xs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,h=(n-t)/(r-t);let d=e*l;for(let p=d+l;d!==p;d+=4)kn.slerpFlat(o,0,c,d-l,c,d,h);return o}}class Br extends ei{InterpolantFactoryMethodLinear(e){return new gM(this.times,this.values,this.getValueSize(),e)}}Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;class Xr extends ei{constructor(e,t,n){super(e,t,n)}}Xr.prototype.ValueTypeName="string";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=ds;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class zr extends ei{}zr.prototype.ValueTypeName="vector";class vM{constructor(e="",t=-1,n=[],r=mv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let c=0,l=n.length;c!==l;++c)t.push(xM(n[c]).scale(r));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,c=n.length;o!==c;++o)t.push(ei.toJSON(n[o]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const o=t.length,c=[];for(let l=0;l<o;l++){let h=[],d=[];h.push((l+o-1)%o,l,(l+1)%o),d.push(0,1,0);const p=fM(h);h=lh(h,1,p),d=lh(d,1,p),!r&&h[0]===0&&(h.push(o),d.push(d[0])),c.push(new kr(".morphTargetInfluences["+t[l].name+"]",h,d).scale(1/n))}return new this(e,-1,c)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},o=/^([\w-]*?)([\d]+)$/;for(let l=0,h=e.length;l<h;l++){const d=e[l],p=d.name.match(o);if(p&&p.length>1){const m=p[1];let _=r[m];_||(r[m]=_=[]),_.push(d)}}const c=[];for(const l in r)c.push(this.CreateFromMorphTargetSequence(l,r[l],t,n));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(m,_,y,S,b){if(y.length!==0){const x=[],v=[];hd(y,x,v,S),x.length!==0&&b.push(new m(_,x,v))}},r=[],o=e.name||"default",c=e.fps||30,l=e.blendMode;let h=e.length||-1;const d=e.hierarchy||[];for(let m=0;m<d.length;m++){const _=d[m].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const y={};let S;for(S=0;S<_.length;S++)if(_[S].morphTargets)for(let b=0;b<_[S].morphTargets.length;b++)y[_[S].morphTargets[b]]=-1;for(const b in y){const x=[],v=[];for(let N=0;N!==_[S].morphTargets.length;++N){const D=_[S];x.push(D.time),v.push(D.morphTarget===b?1:0)}r.push(new kr(".morphTargetInfluence["+b+"]",x,v))}h=y.length*c}else{const y=".bones["+t[m].name+"]";n(zr,y+".position",_,"pos",r),n(Br,y+".quaternion",_,"rot",r),n(zr,y+".scale",_,"scl",r)}}return r.length===0?null:new this(o,h,r,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function yM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return kr;case"vector":case"vector2":case"vector3":case"vector4":return zr;case"color":return dd;case"quaternion":return Br;case"bool":case"boolean":return Wr;case"string":return Xr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function xM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=yM(i.type);if(i.times===void 0){const t=[],n=[];hd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Pi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class EM{constructor(e,t,n){const r=this;let o=!1,c=0,l=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){l++,o===!1&&r.onStart!==void 0&&r.onStart(p,c,l),o=!0},this.itemEnd=function(p){c++,r.onProgress!==void 0&&r.onProgress(p,c,l),c===l&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,m){return d.push(p,m),this},this.removeHandler=function(p){const m=d.indexOf(p);return m!==-1&&d.splice(m,2),this},this.getHandler=function(p){for(let m=0,_=d.length;m<_;m+=2){const y=d[m],S=d[m+1];if(y.global&&(y.lastIndex=0),y.test(p))return S}return null}}}const SM=new EM;class jr{constructor(e){this.manager=e!==void 0?e:SM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}jr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ci={};class MM extends Error{constructor(e,t){super(e),this.response=t}}class fd extends jr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Pi.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(ci[e]!==void 0){ci[e].push({onLoad:t,onProgress:n,onError:r});return}ci[e]=[],ci[e].push({onLoad:t,onProgress:n,onError:r});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,h=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=ci[e],m=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=_?parseInt(_):0,S=y!==0;let b=0;const x=new ReadableStream({start(v){N();function N(){m.read().then(({done:D,value:P})=>{if(D)v.close();else{b+=P.byteLength;const q=new ProgressEvent("progress",{lengthComputable:S,loaded:b,total:y});for(let L=0,O=p.length;L<O;L++){const $=p[L];$.onProgress&&$.onProgress(q)}v.enqueue(P),N()}},D=>{v.error(D)})}}});return new Response(x)}else throw new MM(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,l));case"json":return d.json();default:if(l===void 0)return d.text();{const m=/charset="?([^;"\s]*)"?/i.exec(l),_=m&&m[1]?m[1].toLowerCase():void 0,y=new TextDecoder(_);return d.arrayBuffer().then(S=>y.decode(S))}}}).then(d=>{Pi.add(e,d);const p=ci[e];delete ci[e];for(let m=0,_=p.length;m<_;m++){const y=p[m];y.onLoad&&y.onLoad(d)}}).catch(d=>{const p=ci[e];if(p===void 0)throw this.manager.itemError(e),d;delete ci[e];for(let m=0,_=p.length;m<_;m++){const y=p[m];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class TM extends jr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=Pi.get(e);if(c!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0),c;const l=ps("img");function h(){p(),Pi.add(e,this),t&&t(this),o.manager.itemEnd(e)}function d(m){p(),r&&r(m),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){l.removeEventListener("load",h,!1),l.removeEventListener("error",d,!1)}return l.addEventListener("load",h,!1),l.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(e),l.src=e,l}}class pd extends jr{constructor(e){super(e)}load(e,t,n,r){const o=new jt,c=new TM(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(l){o.image=l,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class Vo extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class bM extends Vo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Oa=new et,uh=new B,hh=new B;class Zc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wc,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(uh),hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hh),t.updateMatrixWorld(),Oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wM extends Zc{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ur*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class AM extends Vo{constructor(e,t,n=0,r=Math.PI/3,o=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=r,this.penumbra=o,this.decay=c,this.map=null,this.shadow=new wM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const dh=new et,is=new B,ka=new B;class RM extends Zc{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),is.setFromMatrixPosition(e.matrixWorld),n.position.copy(is),ka.copy(n.position),ka.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ka),n.updateMatrixWorld(),r.makeTranslation(-is.x,-is.y,-is.z),dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh)}}class md extends Vo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new RM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class CM extends Zc{constructor(){super(new Xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Do extends Vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new CM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ls{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class PM extends jr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=Pi.get(e);if(c!==void 0){if(o.manager.itemStart(e),c.then){c.then(d=>{t&&t(d),o.manager.itemEnd(e)}).catch(d=>{r&&r(d)});return}return setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0),c}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const h=fetch(e,l).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(d){return Pi.add(e,d),t&&t(d),o.manager.itemEnd(e),d}).catch(function(d){r&&r(d),Pi.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});Pi.add(e,h),o.manager.itemStart(e)}}class DM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=fh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function fh(){return performance.now()}const Jc="\\[\\]\\.:\\/",LM=new RegExp("["+Jc+"]","g"),Qc="[^"+Jc+"]",IM="[^"+Jc.replace("\\.","")+"]",NM=/((?:WC+[\/:])*)/.source.replace("WC",Qc),FM=/(WCOD+)?/.source.replace("WCOD",IM),UM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),OM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),kM=new RegExp("^"+NM+FM+UM+OM+"$"),BM=["material","materials","bones","map"];class zM{constructor(e,t,n){const r=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(LM,"")}static parseTrackName(e){const t=kM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const o=n.nodeName.substring(r+1);BM.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(o){for(let c=0;c<o.length;c++){const l=o[c];if(l.name===t||l.uuid===t)return l;const h=n(l.children);if(h)return h}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let o=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===d){d=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const c=e[r];if(c===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=r;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=zM;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ph{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class HM extends Ho{constructor(e=10,t=10,n=4473924,r=8947848){n=new Ye(n),r=new Ye(r);const o=t/2,c=e/t,l=e/2,h=[],d=[];for(let _=0,y=0,S=-l;_<=t;_++,S+=c){h.push(-l,0,S,l,0,S),h.push(S,0,-l,S,0,l);const b=_===o?n:r;b.toArray(d,y),y+=3,b.toArray(d,y),y+=3,b.toArray(d,y),y+=3,b.toArray(d,y),y+=3}const p=new mn;p.setAttribute("position",new Zt(h,3)),p.setAttribute("color",new Zt(d,3));const m=new vs({vertexColors:!0,toneMapped:!1});super(p,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class VM extends Ho{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new mn;r.setAttribute("position",new Zt(t,3)),r.setAttribute("color",new Zt(n,3));const o=new vs({vertexColors:!0,toneMapped:!1});super(r,o),this.type="AxesHelper"}setColors(e,t,n){const r=new Ye,o=this.geometry.attributes.color.array;return r.set(e),r.toArray(o,0),r.toArray(o,3),r.set(t),r.toArray(o,6),r.toArray(o,9),r.set(n),r.toArray(o,12),r.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class GM extends nr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fc);const mh={type:"change"},el={type:"start"},_d={type:"end"},So=new _s,_h=new Ri,WM=Math.cos(70*Xh.DEG2RAD),Ht=new B,fn=2*Math.PI,wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ba=1e-6;class XM extends GM{constructor(e,t=null){super(e,t),this.state=wt.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Er.ROTATE,TWO:Er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new kn,this._lastTargetPosition=new B,this._quat=new kn().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ph,this._sphericalDelta=new ph,this._scale=1,this._panOffset=new B,this._rotateStart=new Ke,this._rotateEnd=new Ke,this._rotateDelta=new Ke,this._panStart=new Ke,this._panEnd=new Ke,this._panDelta=new Ke,this._dollyStart=new Ke,this._dollyEnd=new Ke,this._dollyDelta=new Ke,this._dollyDirection=new B,this._mouse=new Ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$M.bind(this),this._onPointerDown=jM.bind(this),this._onPointerUp=YM.bind(this),this._onContextMenu=tT.bind(this),this._onMouseWheel=ZM.bind(this),this._onKeyDown=JM.bind(this),this._onTouchStart=QM.bind(this),this._onTouchMove=eT.bind(this),this._onMouseDown=qM.bind(this),this._onMouseMove=KM.bind(this),this._interceptControlDown=nT.bind(this),this._interceptControlUp=iT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mh),this.update(),this.state=wt.NONE}update(e=null){const t=this.object.position;Ht.copy(t).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=fn:n>Math.PI&&(n-=fn),r<-Math.PI?r+=fn:r>Math.PI&&(r-=fn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const l=Ht.length();c=this._clampDistance(l*this._scale);const h=l-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),o=!!h}else if(this.object.isOrthographicCamera){const l=new B(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=h!==this.object.zoom;const d=new B(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(l),this.object.updateMatrixWorld(),c=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(So.origin.copy(this.object.position),So.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(So.direction))<WM?this.object.lookAt(this.target):(_h.setFromNormalAndCoplanarPoint(this.object.up,this.target),So.intersectPlane(_h,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ba||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ba||this._lastTargetPosition.distanceToSquared(this.target)>Ba?(this.dispatchEvent(mh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fn/60*this.autoRotateSpeed*e:fn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ht.setFromMatrixColumn(t,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,t){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(t,1):(Ht.setFromMatrixColumn(t,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ht.copy(r).sub(this.target);let o=Ht.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,o=t-n.top,c=n.width,l=n.height;this._mouse.x=r/c*2-1,this._mouse.y=-(o/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(n*n+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(c,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function jM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function $M(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function YM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_d),this.state=wt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function qM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=wt.DOLLY;break;case Tr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}break;case Tr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(el)}function KM(i){switch(this.state){case wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ZM(i){this.enabled===!1||this.enableZoom===!1||this.state!==wt.NONE||(i.preventDefault(),this.dispatchEvent(el),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(_d))}function JM(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function QM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Er.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=wt.TOUCH_ROTATE;break;case Er.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=wt.TOUCH_PAN;break;default:this.state=wt.NONE}break;case 2:switch(this.touches.TWO){case Er.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=wt.TOUCH_DOLLY_PAN;break;case Er.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=wt.TOUCH_DOLLY_ROTATE;break;default:this.state=wt.NONE}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(el)}function eT(i){switch(this._trackPointer(i),this.state){case wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=wt.NONE}}function tT(i){this.enabled!==!1&&i.preventDefault()}function nT(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iT(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gh(i,e){if(e===_v)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===wc||e===Vh){let t=i.getIndex();if(t===null){const c=[],l=i.getAttribute("position");if(l!==void 0){for(let h=0;h<l.count;h++)c.push(h);i.setIndex(c),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===wc)for(let c=1;c<=n;c++)r.push(t.getX(0)),r.push(t.getX(c)),r.push(t.getX(c+1));else for(let c=0;c<n;c++)c%2===0?(r.push(t.getX(c)),r.push(t.getX(c+1)),r.push(t.getX(c+2))):(r.push(t.getX(c+2)),r.push(t.getX(c+1)),r.push(t.getX(c)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=i.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class rT extends jr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new lT(t)}),this.register(function(t){return new uT(t)}),this.register(function(t){return new yT(t)}),this.register(function(t){return new xT(t)}),this.register(function(t){return new ET(t)}),this.register(function(t){return new dT(t)}),this.register(function(t){return new fT(t)}),this.register(function(t){return new pT(t)}),this.register(function(t){return new mT(t)}),this.register(function(t){return new cT(t)}),this.register(function(t){return new _T(t)}),this.register(function(t){return new hT(t)}),this.register(function(t){return new vT(t)}),this.register(function(t){return new gT(t)}),this.register(function(t){return new oT(t)}),this.register(function(t){return new ST(t)}),this.register(function(t){return new MT(t)})}load(e,t,n,r){const o=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const d=ls.extractUrlBase(e);c=ls.resolveURL(d,this.path)}else c=ls.extractUrlBase(e);this.manager.itemStart(e);const l=function(d){r?r(d):console.error(d),o.manager.itemError(e),o.manager.itemEnd(e)},h=new fd(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(e,function(d){try{o.parse(d,c,function(p){t(p),o.manager.itemEnd(e)},l)}catch(p){l(p)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let o;const c={},l={},h=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(h.decode(new Uint8Array(e,0,4))===gd){try{c[lt.KHR_BINARY_GLTF]=new TT(e)}catch(m){r&&r(m);return}o=JSON.parse(c[lt.KHR_BINARY_GLTF].content)}else o=JSON.parse(h.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new OT(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const m=this.pluginCallbacks[p](d);m.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[m.name]=m,c[m.name]=!0}if(o.extensionsUsed)for(let p=0;p<o.extensionsUsed.length;++p){const m=o.extensionsUsed[p],_=o.extensionsRequired||[];switch(m){case lt.KHR_MATERIALS_UNLIT:c[m]=new aT;break;case lt.KHR_DRACO_MESH_COMPRESSION:c[m]=new bT(o,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:c[m]=new wT;break;case lt.KHR_MESH_QUANTIZATION:c[m]=new AT;break;default:_.indexOf(m)>=0&&l[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}d.setExtensions(c),d.setPlugins(l),d.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,o){n.parse(e,t,r,o)})}}function sT(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class oT{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const o=t[n];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const o=t.json,h=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let d;const p=new Ye(16777215);h.color!==void 0&&p.setRGB(h.color[0],h.color[1],h.color[2],dn);const m=h.range!==void 0?h.range:0;switch(h.type){case"directional":d=new Do(p),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new md(p),d.distance=m;break;case"spot":d=new AM(p),d.distance=m,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,d.angle=h.spot.outerConeAngle,d.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return d.position.set(0,0,0),d.decay=2,ui(d,h),h.intensity!==void 0&&(d.intensity=h.intensity),d.name=t.createUniqueName(h.name||"light_"+e),r=Promise.resolve(d),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,o=n.json.nodes[e],l=(o.extensions&&o.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(h){return n._getNodeRef(t.cache,l,h)})}}class aT{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return fi}extendParams(e,t,n){const r=[];e.color=new Ye(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const c=o.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],dn),e.opacity=c[3]}o.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",o.baseColorTexture,Ut))}return Promise.all(r)}}class cT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}}class lT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],c=r.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(o.push(n.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const l=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(l,l)}return Promise.all(o)}}class uT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class hT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],c=r.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(o)}}class dT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new Ye(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=r.extensions[this.name];if(c.sheenColorFactor!==void 0){const l=c.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],dn)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&o.push(n.assignTexture(t,"sheenColorMap",c.sheenColorTexture,Ut)),c.sheenRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(o)}}class fT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],c=r.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&o.push(n.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(o)}}class pT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],c=r.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&o.push(n.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const l=c.attenuationColor||[1,1,1];return t.attenuationColor=new Ye().setRGB(l[0],l[1],l[2],dn),Promise.all(o)}}class mT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class _T{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],c=r.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&o.push(n.assignTexture(t,"specularIntensityMap",c.specularTexture));const l=c.specularColorFactor||[1,1,1];return t.specularColor=new Ye().setRGB(l[0],l[1],l[2],dn),c.specularColorTexture!==void 0&&o.push(n.assignTexture(t,"specularColorMap",c.specularColorTexture,Ut)),Promise.all(o)}}class gT{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],c=r.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&o.push(n.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(o)}}class vT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],c=r.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&o.push(n.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(o)}}class yT{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const o=r.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,c)}}class xT{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;const c=o.extensions[t],l=r.images[c.source];let h=n.textureLoader;if(l.uri){const d=n.options.manager.getHandler(l.uri);d!==null&&(h=d)}return this.detectSupport().then(function(d){if(d)return n.loadTextureImage(e,c.source,h);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ET{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;const c=o.extensions[t],l=r.images[c.source];let h=n.textureLoader;if(l.uri){const d=n.options.manager.getHandler(l.uri);d!==null&&(h=d)}return this.detectSupport().then(function(d){if(d)return n.loadTextureImage(e,c.source,h);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ST{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(l){const h=r.byteOffset||0,d=r.byteLength||0,p=r.count,m=r.byteStride,_=new Uint8Array(l,h,d);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(p,m,_,r.mode,r.filter).then(function(y){return y.buffer}):c.ready.then(function(){const y=new ArrayBuffer(p*m);return c.decodeGltfBuffer(new Uint8Array(y),p,m,_,r.mode,r.filter),y})})}else return null}}class MT{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const d of r.primitives)if(d.mode!==bn.TRIANGLES&&d.mode!==bn.TRIANGLE_STRIP&&d.mode!==bn.TRIANGLE_FAN&&d.mode!==void 0)return null;const c=n.extensions[this.name].attributes,l=[],h={};for(const d in c)l.push(this.parser.getDependency("accessor",c[d]).then(p=>(h[d]=p,h[d])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(d=>{const p=d.pop(),m=p.isGroup?p.children:[p],_=d[0].count,y=[];for(const S of m){const b=new et,x=new B,v=new kn,N=new B(1,1,1),D=new cM(S.geometry,S.material,_);for(let P=0;P<_;P++)h.TRANSLATION&&x.fromBufferAttribute(h.TRANSLATION,P),h.ROTATION&&v.fromBufferAttribute(h.ROTATION,P),h.SCALE&&N.fromBufferAttribute(h.SCALE,P),D.setMatrixAt(P,b.compose(x,v,N));for(const P in h)if(P==="_COLOR_0"){const q=h[P];D.instanceColor=new Cc(q.array,q.itemSize,q.normalized)}else P!=="TRANSLATION"&&P!=="ROTATION"&&P!=="SCALE"&&S.geometry.setAttribute(P,h[P]);It.prototype.copy.call(D,S),this.parser.assignFinalMaterial(D),y.push(D)}return p.isGroup?(p.clear(),p.add(...y),p):y[0]}))}}const gd="glTF",rs=12,vh={JSON:1313821514,BIN:5130562};class TT{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,rs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-rs,o=new DataView(e,rs);let c=0;for(;c<r;){const l=o.getUint32(c,!0);c+=4;const h=o.getUint32(c,!0);if(c+=4,h===vh.JSON){const d=new Uint8Array(e,rs+c,l);this.content=n.decode(d)}else if(h===vh.BIN){const d=rs+c;this.body=e.slice(d,d+l)}c+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,o=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,l={},h={},d={};for(const p in c){const m=Dc[p]||p.toLowerCase();l[m]=c[p]}for(const p in e.attributes){const m=Dc[p]||p.toLowerCase();if(c[p]!==void 0){const _=n.accessors[e.attributes[p]],y=Cr[_.componentType];d[m]=y.name,h[m]=_.normalized===!0}}return t.getDependency("bufferView",o).then(function(p){return new Promise(function(m,_){r.decodeDracoFile(p,function(y){for(const S in y.attributes){const b=y.attributes[S],x=h[S];x!==void 0&&(b.normalized=x)}m(y)},l,d,dn,_)})})}}class wT{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class AT{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class vd extends xs{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=e*r*3+r;for(let c=0;c!==r;c++)t[c]=n[o+c];return t}interpolate_(e,t,n,r){const o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,h=l*2,d=l*3,p=r-t,m=(n-t)/p,_=m*m,y=_*m,S=e*d,b=S-d,x=-2*y+3*_,v=y-_,N=1-x,D=v-_+m;for(let P=0;P!==l;P++){const q=c[b+P+l],L=c[b+P+h]*p,O=c[S+P+l],$=c[S+P]*p;o[P]=N*q+D*L+x*O+v*$}return o}}const RT=new kn;class CT extends vd{interpolate_(e,t,n,r){const o=super.interpolate_(e,t,n,r);return RT.fromArray(o).normalize().toArray(o),o}}const bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Cr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yh={9728:un,9729:Sn,9984:Lh,9985:To,9986:ss,9987:hi},xh={33071:qn,33648:No,10497:Ir},za={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Dc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},PT={CUBICSPLINE:void 0,LINEAR:fs,STEP:ds},Ha={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function DT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ys({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_i})),i.DefaultMaterial}function Yi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ui(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function LT(i,e,t){let n=!1,r=!1,o=!1;for(let d=0,p=e.length;d<p;d++){const m=e[d];if(m.POSITION!==void 0&&(n=!0),m.NORMAL!==void 0&&(r=!0),m.COLOR_0!==void 0&&(o=!0),n&&r&&o)break}if(!n&&!r&&!o)return Promise.resolve(i);const c=[],l=[],h=[];for(let d=0,p=e.length;d<p;d++){const m=e[d];if(n){const _=m.POSITION!==void 0?t.getDependency("accessor",m.POSITION):i.attributes.position;c.push(_)}if(r){const _=m.NORMAL!==void 0?t.getDependency("accessor",m.NORMAL):i.attributes.normal;l.push(_)}if(o){const _=m.COLOR_0!==void 0?t.getDependency("accessor",m.COLOR_0):i.attributes.color;h.push(_)}}return Promise.all([Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){const p=d[0],m=d[1],_=d[2];return n&&(i.morphAttributes.position=p),r&&(i.morphAttributes.normal=m),o&&(i.morphAttributes.color=_),i.morphTargetsRelative=!0,i})}function IT(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function NT(i){let e;const t=i.extensions&&i.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Va(t.attributes):e=i.indices+":"+Va(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Va(i.targets[n]);return e}function Va(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Lc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function FT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const UT=new et;class OT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,o=!1,c=-1;if(typeof navigator<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const h=l.match(/Version\/(\d+)/);r=n&&h?parseInt(h[1],10):-1,o=l.indexOf("Firefox")>-1,c=o?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||o&&c<98?this.textureLoader=new pd(this.options.manager):this.textureLoader=new PM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(c){const l={scene:c[0][r.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:r.asset,parser:n,userData:{}};return Yi(o,l,r),ui(l,r),Promise.all(n._invokeAll(function(h){return h.afterRoot&&h.afterRoot(l)})).then(function(){for(const h of l.scenes)h.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,o=t.length;r<o;r++){const c=t[r].joints;for(let l=0,h=c.length;l<h;l++)e[c[l]].isBone=!0}for(let r=0,o=e.length;r<o;r++){const c=e[r];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(n[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),o=(c,l)=>{const h=this.associations.get(c);h!=null&&this.associations.set(l,h);for(const[d,p]of c.children.entries())o(p,l.children[d])};return o(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const o=e(t[r]);o&&n.push(o)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(o,c){return n.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(o,c){n.load(ls.resolveURL(t.uri,r.path),o,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,o=t.byteOffset||0;return n.slice(o,o+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const c=za[r.type],l=Cr[r.componentType],h=r.normalized===!0,d=new l(r.count*c);return Promise.resolve(new hn(d,c,h))}const o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(c){const l=c[0],h=za[r.type],d=Cr[r.componentType],p=d.BYTES_PER_ELEMENT,m=p*h,_=r.byteOffset||0,y=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,S=r.normalized===!0;let b,x;if(y&&y!==m){const v=Math.floor(_/y),N="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+v+":"+r.count;let D=t.cache.get(N);D||(b=new d(l,v*y,r.count*y/p),D=new iM(b,y/p),t.cache.add(N,D)),x=new Yc(D,h,_%y/p,S)}else l===null?b=new d(r.count*h):b=new d(l,_,r.count*h),x=new hn(b,h,S);if(r.sparse!==void 0){const v=za.SCALAR,N=Cr[r.sparse.indices.componentType],D=r.sparse.indices.byteOffset||0,P=r.sparse.values.byteOffset||0,q=new N(c[1],D,r.sparse.count*v),L=new d(c[2],P,r.sparse.count*h);l!==null&&(x=new hn(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let O=0,$=q.length;O<$;O++){const I=q[O];if(x.setX(I,L[O*h]),h>=2&&x.setY(I,L[O*h+1]),h>=3&&x.setZ(I,L[O*h+2]),h>=4&&x.setW(I,L[O*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=S}return x})}loadTexture(e){const t=this.json,n=this.options,o=t.textures[e].source,c=t.images[o];let l=this.textureLoader;if(c.uri){const h=n.manager.getHandler(c.uri);h!==null&&(l=h)}return this.loadTextureImage(e,o,l)}loadTextureImage(e,t,n){const r=this,o=this.json,c=o.textures[e],l=o.images[t],h=(l.uri||l.bufferView)+":"+c.sampler;if(this.textureCache[h])return this.textureCache[h];const d=this.loadImageSource(t,n).then(function(p){p.flipY=!1,p.name=c.name||l.name||"",p.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(p.name=l.uri);const _=(o.samplers||{})[c.sampler]||{};return p.magFilter=yh[_.magFilter]||Sn,p.minFilter=yh[_.minFilter]||hi,p.wrapS=xh[_.wrapS]||Ir,p.wrapT=xh[_.wrapT]||Ir,p.generateMipmaps=!p.isCompressedTexture&&p.minFilter!==un&&p.minFilter!==Sn,r.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[h]=d,d}loadImageSource(e,t){const n=this,r=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(m=>m.clone());const c=r.images[e],l=self.URL||self.webkitURL;let h=c.uri||"",d=!1;if(c.bufferView!==void 0)h=n.getDependency("bufferView",c.bufferView).then(function(m){d=!0;const _=new Blob([m],{type:c.mimeType});return h=l.createObjectURL(_),h});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(h).then(function(m){return new Promise(function(_,y){let S=_;t.isImageBitmapLoader===!0&&(S=function(b){const x=new jt(b);x.needsUpdate=!0,_(x)}),t.load(ls.resolveURL(m,o.path),S,void 0,y)})}).then(function(m){return d===!0&&l.revokeObjectURL(h),ui(m,c),m.userData.mimeType=c.mimeType||FT(c.uri),m}).catch(function(m){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),m});return this.sourceCache[e]=p,p}assignTexture(e,t,n,r){const o=this;return this.getDependency("texture",n.index).then(function(c){if(!c)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(c=c.clone(),c.channel=n.texCoord),o.extensions[lt.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const h=o.associations.get(c);c=o.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(c,l),o.associations.set(c,h)}}return r!==void 0&&(c.colorSpace=r),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let h=this.cache.get(l);h||(h=new ud,Zn.prototype.copy.call(h,n),h.color.copy(n.color),h.map=n.map,h.sizeAttenuation=!1,this.cache.add(l,h)),n=h}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let h=this.cache.get(l);h||(h=new vs,Zn.prototype.copy.call(h,n),h.color.copy(n.color),h.map=n.map,this.cache.add(l,h)),n=h}if(r||o||c){let l="ClonedMaterial:"+n.uuid+":";r&&(l+="derivative-tangents:"),o&&(l+="vertex-colors:"),c&&(l+="flat-shading:");let h=this.cache.get(l);h||(h=n.clone(),o&&(h.vertexColors=!0),c&&(h.flatShading=!0),r&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(l,h),this.associations.set(h,this.associations.get(n))),n=h}e.material=n}getMaterialType(){return ys}loadMaterial(e){const t=this,n=this.json,r=this.extensions,o=n.materials[e];let c;const l={},h=o.extensions||{},d=[];if(h[lt.KHR_MATERIALS_UNLIT]){const m=r[lt.KHR_MATERIALS_UNLIT];c=m.getMaterialType(),d.push(m.extendParams(l,o,t))}else{const m=o.pbrMetallicRoughness||{};if(l.color=new Ye(1,1,1),l.opacity=1,Array.isArray(m.baseColorFactor)){const _=m.baseColorFactor;l.color.setRGB(_[0],_[1],_[2],dn),l.opacity=_[3]}m.baseColorTexture!==void 0&&d.push(t.assignTexture(l,"map",m.baseColorTexture,Ut)),l.metalness=m.metallicFactor!==void 0?m.metallicFactor:1,l.roughness=m.roughnessFactor!==void 0?m.roughnessFactor:1,m.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(l,"metalnessMap",m.metallicRoughnessTexture)),d.push(t.assignTexture(l,"roughnessMap",m.metallicRoughnessTexture))),c=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,l)})))}o.doubleSided===!0&&(l.side=$n);const p=o.alphaMode||Ha.OPAQUE;if(p===Ha.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,p===Ha.MASK&&(l.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&c!==fi&&(d.push(t.assignTexture(l,"normalMap",o.normalTexture)),l.normalScale=new Ke(1,1),o.normalTexture.scale!==void 0)){const m=o.normalTexture.scale;l.normalScale.set(m,m)}if(o.occlusionTexture!==void 0&&c!==fi&&(d.push(t.assignTexture(l,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&c!==fi){const m=o.emissiveFactor;l.emissive=new Ye().setRGB(m[0],m[1],m[2],dn)}return o.emissiveTexture!==void 0&&c!==fi&&d.push(t.assignTexture(l,"emissiveMap",o.emissiveTexture,Ut)),Promise.all(d).then(function(){const m=new c(l);return o.name&&(m.name=o.name),ui(m,o),t.associations.set(m,{materials:e}),o.extensions&&Yi(r,m,o),m})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function o(l){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(h){return Eh(h,l,t)})}const c=[];for(let l=0,h=e.length;l<h;l++){const d=e[l],p=NT(d),m=r[p];if(m)c.push(m.promise);else{let _;d.extensions&&d.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?_=o(d):_=Eh(new mn,d,t),r[p]={primitive:d,promise:_},c.push(_)}}return Promise.all(c)}loadMesh(e){const t=this,n=this.json,r=this.extensions,o=n.meshes[e],c=o.primitives,l=[];for(let h=0,d=c.length;h<d;h++){const p=c[h].material===void 0?DT(this.cache):this.getDependency("material",c[h].material);l.push(p)}return l.push(t.loadGeometries(c)),Promise.all(l).then(function(h){const d=h.slice(0,h.length-1),p=h[h.length-1],m=[];for(let y=0,S=p.length;y<S;y++){const b=p[y],x=c[y];let v;const N=d[y];if(x.mode===bn.TRIANGLES||x.mode===bn.TRIANGLE_STRIP||x.mode===bn.TRIANGLE_FAN||x.mode===void 0)v=o.isSkinnedMesh===!0?new sM(b,N):new Kt(b,N),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),x.mode===bn.TRIANGLE_STRIP?v.geometry=gh(v.geometry,Vh):x.mode===bn.TRIANGLE_FAN&&(v.geometry=gh(v.geometry,wc));else if(x.mode===bn.LINES)v=new Ho(b,N);else if(x.mode===bn.LINE_STRIP)v=new Kc(b,N);else if(x.mode===bn.LINE_LOOP)v=new lM(b,N);else if(x.mode===bn.POINTS)v=new uM(b,N);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(v.geometry.morphAttributes).length>0&&IT(v,o),v.name=t.createUniqueName(o.name||"mesh_"+e),ui(v,o),x.extensions&&Yi(r,v,x),t.assignFinalMaterial(v),m.push(v)}for(let y=0,S=m.length;y<S;y++)t.associations.set(m[y],{meshes:e,primitives:y});if(m.length===1)return o.extensions&&Yi(r,m[0],o),m[0];const _=new pi;o.extensions&&Yi(r,_,o),t.associations.set(_,{meshes:e});for(let y=0,S=m.length;y<S;y++)_.add(m[y]);return _})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ln(Xh.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Xc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ui(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,o=t.joints.length;r<o;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const o=r.pop(),c=r,l=[],h=[];for(let d=0,p=c.length;d<p;d++){const m=c[d];if(m){l.push(m);const _=new et;o!==null&&_.fromArray(o.array,d*16),h.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new qc(l,h)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],o=r.name?r.name:"animation_"+e,c=[],l=[],h=[],d=[],p=[];for(let m=0,_=r.channels.length;m<_;m++){const y=r.channels[m],S=r.samplers[y.sampler],b=y.target,x=b.node,v=r.parameters!==void 0?r.parameters[S.input]:S.input,N=r.parameters!==void 0?r.parameters[S.output]:S.output;b.node!==void 0&&(c.push(this.getDependency("node",x)),l.push(this.getDependency("accessor",v)),h.push(this.getDependency("accessor",N)),d.push(S),p.push(b))}return Promise.all([Promise.all(c),Promise.all(l),Promise.all(h),Promise.all(d),Promise.all(p)]).then(function(m){const _=m[0],y=m[1],S=m[2],b=m[3],x=m[4],v=[];for(let N=0,D=_.length;N<D;N++){const P=_[N],q=y[N],L=S[N],O=b[N],$=x[N];if(P===void 0)continue;P.updateMatrix&&P.updateMatrix();const I=n._createAnimationTracks(P,q,L,O,$);if(I)for(let T=0;T<I.length;T++)v.push(I[T])}return new vM(o,void 0,v)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(o){const c=n._getNodeRef(n.meshCache,r.mesh,o);return r.weights!==void 0&&c.traverse(function(l){if(l.isMesh)for(let h=0,d=r.weights.length;h<d;h++)l.morphTargetInfluences[h]=r.weights[h]}),c})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],o=n._loadNodeShallow(e),c=[],l=r.children||[];for(let d=0,p=l.length;d<p;d++)c.push(n.getDependency("node",l[d]));const h=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([o,Promise.all(c),h]).then(function(d){const p=d[0],m=d[1],_=d[2];_!==null&&p.traverse(function(y){y.isSkinnedMesh&&y.bind(_,UT)});for(let y=0,S=m.length;y<S;y++)p.add(m[y]);return p})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],c=o.name?r.createUniqueName(o.name):"",l=[],h=r._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return h&&l.push(h),o.camera!==void 0&&l.push(r.getDependency("camera",o.camera).then(function(d){return r._getNodeRef(r.cameraCache,o.camera,d)})),r._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){l.push(d)}),this.nodeCache[e]=Promise.all(l).then(function(d){let p;if(o.isBone===!0?p=new cd:d.length>1?p=new pi:d.length===1?p=d[0]:p=new It,p!==d[0])for(let m=0,_=d.length;m<_;m++)p.add(d[m]);if(o.name&&(p.userData.name=o.name,p.name=c),ui(p,o),o.extensions&&Yi(n,p,o),o.matrix!==void 0){const m=new et;m.fromArray(o.matrix),p.applyMatrix4(m)}else o.translation!==void 0&&p.position.fromArray(o.translation),o.rotation!==void 0&&p.quaternion.fromArray(o.rotation),o.scale!==void 0&&p.scale.fromArray(o.scale);return r.associations.has(p)||r.associations.set(p,{}),r.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,o=new pi;n.name&&(o.name=r.createUniqueName(n.name)),ui(o,n),n.extensions&&Yi(t,o,n);const c=n.nodes||[],l=[];for(let h=0,d=c.length;h<d;h++)l.push(r.getDependency("node",c[h]));return Promise.all(l).then(function(h){for(let p=0,m=h.length;p<m;p++)o.add(h[p]);const d=p=>{const m=new Map;for(const[_,y]of r.associations)(_ instanceof Zn||_ instanceof jt)&&m.set(_,y);return p.traverse(_=>{const y=r.associations.get(_);y!=null&&m.set(_,y)}),m};return r.associations=d(o),o})}_createAnimationTracks(e,t,n,r,o){const c=[],l=e.name?e.name:e.uuid,h=[];Ai[o.path]===Ai.weights?e.traverse(function(_){_.morphTargetInfluences&&h.push(_.name?_.name:_.uuid)}):h.push(l);let d;switch(Ai[o.path]){case Ai.weights:d=kr;break;case Ai.rotation:d=Br;break;case Ai.position:case Ai.scale:d=zr;break;default:switch(n.itemSize){case 1:d=kr;break;case 2:case 3:default:d=zr;break}break}const p=r.interpolation!==void 0?PT[r.interpolation]:fs,m=this._getArrayFromAccessor(n);for(let _=0,y=h.length;_<y;_++){const S=new d(h[_]+"."+Ai[o.path],t.array,m,p);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),c.push(S)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Lc(t.constructor),r=new Float32Array(t.length);for(let o=0,c=t.length;o<c;o++)r[o]=t[o]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof Br?CT:vd;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kT(i,e,t){const n=e.attributes,r=new Xt;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],h=l.min,d=l.max;if(h!==void 0&&d!==void 0){if(r.set(new B(h[0],h[1],h[2]),new B(d[0],d[1],d[2])),l.normalized){const p=Lc(Cr[l.componentType]);r.min.multiplyScalar(p),r.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const l=new B,h=new B;for(let d=0,p=o.length;d<p;d++){const m=o[d];if(m.POSITION!==void 0){const _=t.json.accessors[m.POSITION],y=_.min,S=_.max;if(y!==void 0&&S!==void 0){if(h.setX(Math.max(Math.abs(y[0]),Math.abs(S[0]))),h.setY(Math.max(Math.abs(y[1]),Math.abs(S[1]))),h.setZ(Math.max(Math.abs(y[2]),Math.abs(S[2]))),_.normalized){const b=Lc(Cr[_.componentType]);h.multiplyScalar(b)}l.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(l)}i.boundingBox=r;const c=new Jn;r.getCenter(c.center),c.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=c}function Eh(i,e,t){const n=e.attributes,r=[];function o(c,l){return t.getDependency("accessor",c).then(function(h){i.setAttribute(l,h)})}for(const c in n){const l=Dc[c]||c.toLowerCase();l in i.attributes||r.push(o(n[c],l))}if(e.indices!==void 0&&!i.index){const c=t.getDependency("accessor",e.indices).then(function(l){i.setIndex(l)});r.push(c)}return _t.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${_t.workingColorSpace}" not supported.`),ui(i,e),kT(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?LT(i,e.targets,t):i})}const BT="/physical/assets/OneDollarBoard.com.1.004_pcb-K1Mjx2rQ.glb",zT="/physical/assets/OneDollarBoard.com.1.004_components-CoanxN0x.glb",HT="/physical/assets/OneDollarBoard.com.1.004_top-BvGGEr6L.png",VT="/physical/assets/OneDollarBoard.com.1.004_button-ra9G2813.png",Sh=Object.freeze({top:Object.freeze({scale:1,offsetX:0,offsetY:0,rotation:0,flipV:!1}),button:Object.freeze({scale:1,offsetX:0,offsetY:0,rotation:0,flipV:!1})});function Mh(i,e){i.wrapS=qn,i.wrapT=qn,i.center.set(.5,.5),i.rotation=e.rotation*Math.PI/180;let t=1/e.scale,n=1/e.scale;e.flipV&&(n=-n),i.repeat.set(t,n);let r=e.offsetX,o=e.offsetY;e.flipV&&(o=1-o),i.offset.set(r,o),i.needsUpdate=!0}function GT(i,e,t,n){const r=i.geometry,o=r.index?r.toNonIndexed():r.clone();o.attributes.normal||o.computeVertexNormals();const c=o.attributes.position,l=o.attributes.normal,h=c.count,d=e.min.x,p=e.max.x,m=e.min.y,_=e.max.y,y=p-d,S=_-m,b=[],x=[],v=[],N=[],D=[],P=[],q=[],L=[],O=[],$=new et().copy(n).invert(),I=new et().multiplyMatrices($,t),T=new tt().getNormalMatrix(I),k=new B,ae=new B,J=new B,te=new B,me=new B,ce=new B;let xe=0,ne=0,Te=0;for(let Pe=0;Pe<h;Pe+=3){k.fromBufferAttribute(c,Pe).applyMatrix4(I),ae.fromBufferAttribute(c,Pe+1).applyMatrix4(I),J.fromBufferAttribute(c,Pe+2).applyMatrix4(I),te.fromBufferAttribute(l,Pe).applyMatrix3(T).normalize(),me.fromBufferAttribute(l,Pe+1).applyMatrix3(T).normalize(),ce.fromBufferAttribute(l,Pe+2).applyMatrix3(T).normalize();const Xe=(te.z+me.z+ce.z)/3;let nt,ee,pe,Le=!1,Me=!1;Xe>.5?(nt=b,ee=x,pe=v,Le=!0,xe+=1):Xe<-.5?(nt=N,ee=D,pe=P,Me=!0,ne+=1):(nt=q,ee=L,pe=O,Te+=1),nt.push(k.x,k.y,k.z,ae.x,ae.y,ae.z,J.x,J.y,J.z),ee.push(te.x,te.y,te.z,me.x,me.y,me.z,ce.x,ce.y,ce.z),Le?pe.push(341/2880+(k.x-d)/y*(2198/2880),66/1466+(k.y-m)/S*(1335/1466),341/2880+(ae.x-d)/y*(2198/2880),66/1466+(ae.y-m)/S*(1335/1466),341/2880+(J.x-d)/y*(2198/2880),66/1466+(J.y-m)/S*(1335/1466)):Me?pe.push(341/2880+(k.x-d)/y*(2198/2880),66/1466+(_-k.y)/S*(1335/1466),341/2880+(ae.x-d)/y*(2198/2880),66/1466+(_-ae.y)/S*(1335/1466),341/2880+(J.x-d)/y*(2198/2880),66/1466+(_-J.y)/S*(1335/1466)):pe.push(0,0,0,0,0,0)}function Ce(Pe,Xe,nt){if(Pe.length===0)return null;const ee=new mn;return ee.setAttribute("position",new Zt(Pe,3)),ee.setAttribute("normal",new Zt(Xe,3)),ee.setAttribute("uv",new Zt(nt,2)),ee}return{frontGeo:Ce(b,x,v),backGeo:Ce(N,D,P),sideGeo:Ce(q,L,O),counts:{front:xe,back:ne,side:Te}}}function WT(i,e,t,n){i.updateMatrixWorld(!0);const r=new Xt().setFromObject(i),o=[];i.traverse(d=>{d.isMesh&&o.push(d)});let c=0,l=0,h=0;return o.forEach(d=>{const p=d.parent;if(!p)return;d.updateMatrixWorld(!0);const{frontGeo:m,backGeo:_,sideGeo:y,counts:S}=GT(d,r,d.matrixWorld,i.matrixWorld);if(c+=S.front,l+=S.back,h+=S.side,m){const b=new Kt(m,e);b.name=`${d.name||"pcb"}_Front`,b.castShadow=!0,b.receiveShadow=!0,i.add(b)}if(_){const b=new Kt(_,t);b.name=`${d.name||"pcb"}_Back`,b.castShadow=!0,b.receiveShadow=!0,i.add(b)}if(y){const b=new Kt(y,n);b.name=`${d.name||"pcb"}_Sides`,b.castShadow=!0,b.receiveShadow=!0,i.add(b)}p.remove(d),d.geometry&&d.geometry.dispose()}),{front:c,back:l,side:h,meshes:o.length}}const Lo=Object.freeze({x:.06,y:.04,z:.01});async function XT(){var y,S;const i=new rT,e=new pd,[t,n,r,o]=await Promise.all([i.loadAsync(BT),i.loadAsync(zT),e.loadAsync(HT),e.loadAsync(VT)]);for(const b of[r,o])b.colorSpace=Ut,b.anisotropy=8;Mh(r,Sh.top),Mh(o,Sh.button);const c=new fi({map:r,toneMapped:!1,fog:!1,transparent:!0,alphaTest:.1}),l=new fi({map:o,toneMapped:!1,fog:!1,transparent:!0,alphaTest:.1}),h=new ys({color:408350,roughness:.5,metalness:.05}),d=new pi;d.name="odcVisual";const p=t.scene;p.name="odcPcb";const m=n.scene;m.name="odcComponents",d.add(p),d.add(m);const _=WT(p,c,l,h);return typeof window<"u"&&(window.__odcSilk={..._,frontHasMap:!!c.map,backHasMap:!!l.map,topImage:(y=r.image)==null?void 0:y.width,buttonImage:(S=o.image)==null?void 0:S.width}),m.traverse(b=>{if(!b.isMesh)return;b.castShadow=!0,b.receiveShadow=!0,(Array.isArray(b.material)?b.material:[b.material]).forEach(v=>{var N;if(v){if(v.map&&(v.map.colorSpace=Ut),(N=v.color)!=null&&N.getHSL){const D={h:0,s:0,l:0};v.color.getHSL(D),D.l<.1&&v.color.setHSL(D.h,D.s,.18)}"metalness"in v&&v.metalness>.8&&(v.metalness=.55),"roughness"in v&&v.roughness<.15&&(v.roughness=.25),v.needsUpdate=!0}})}),jT(d,p,Lo),d}function jT(i,e,t){i.position.set(0,0,0),i.rotation.set(0,0,0),i.scale.set(1,1,1),i.updateMatrixWorld(!0);let n=new Xt().setFromObject(e),r=new B;n.getSize(r),r.x<=r.y&&r.x<=r.z?i.rotation.y=Math.PI/2:r.y<=r.x&&r.y<=r.z&&(i.rotation.x=Math.PI/2),i.updateMatrixWorld(!0),n=new Xt().setFromObject(e),n.getSize(r);const o=t.x*2,c=t.y*2,l=o/Math.max(r.x,1e-9),h=c/Math.max(r.y,1e-9),d=Math.min(l,h);i.scale.setScalar(d),i.updateMatrixWorld(!0),n=new Xt().setFromObject(i);const p=n.getCenter(new B);i.position.sub(p),i.updateMatrixWorld(!0),n=new Xt().setFromObject(i);const m=-t.z-n.min.z;i.position.z+=m;const _=new Xt().setFromObject(e),y=new Xt().setFromObject(i),S=_.max.z;if(y.max.z-S<1e-4){i.rotateX(Math.PI),i.updateMatrixWorld(!0);const v=new Xt().setFromObject(i).getCenter(new B);i.position.x-=v.x,i.position.y-=v.y,i.position.z-=v.z,i.updateMatrixWorld(!0);const N=new Xt().setFromObject(i);i.position.z+=-t.z-N.min.z}}const Th=new kn,Mo=new Bn(0,0,0,"XYZ");function xn(i,e=4){return(Number.isFinite(i)?i:0).toFixed(e)}function $T(i){const{bodyId:e,model:t,data:n,hudEls:r}=i,o=n.xpos,c=n.xquat,l=e*3,h=e*4,d=[o[l],o[l+1],o[l+2]],p=[c[h],c[h+1],c[h+2],c[h+3]];Th.set(p[1],p[2],p[3],p[0]),Mo.setFromQuaternion(Th,"XYZ");const m={x:Mo.x*180/Math.PI,y:Mo.y*180/Math.PI,z:Mo.z*180/Math.PI};let _=[0,0,0];try{const S=t.jnt("odc_free"),b=S.dofadr,x=typeof b=="number"?b:Number(t.jnt_dofadr[S.id]??(b==null?void 0:b[0])??0),v=n.qvel;Number.isFinite(x)&&(_=[v[x],v[x+1],v[x+2]])}catch{}const y={body:"odc",joint:"odc_free",frame:"mujoco-z-up",pos:d,quat:p,eulerDeg:m,vel:_,t:performance.now()};return typeof window<"u"&&(window.__odcPose=y),r!=null&&r.root&&!r.root.hidden&&(r.pos.textContent=`${xn(d[0])}  ${xn(d[1])}  ${xn(d[2])}`,r.quat.textContent=`${xn(p[0])}  ${xn(p[1])}  ${xn(p[2])}  ${xn(p[3])}`,r.euler.textContent=`${xn(m.x,1)}°  ${xn(m.y,1)}°  ${xn(m.z,1)}°`,r.vel.textContent=`${xn(_[0])}  ${xn(_[1])}  ${xn(_[2])}`),y}function YT(i=.06){const e=new VM(i);return e.name="odcBodyAxes",e.raycast=()=>{},e}function qT(){if(typeof MediaRecorder>"u")return null;const i=["video/webm;codecs=vp9,opus","video/webm;codecs=vp9","video/webm;codecs=vp8,opus","video/webm;codecs=vp8","video/webm"];for(const e of i)if(MediaRecorder.isTypeSupported(e))return e;return""}function KT(i=new Date){const e=l=>String(l).padStart(2,"0"),t=i.getFullYear(),n=e(i.getMonth()+1),r=e(i.getDate()),o=e(i.getHours()),c=e(i.getMinutes());return`odc-physical-lab-drop-${t}${n}${r}-${o}${c}.webm`}function ZT(i,e={}){const t=e.fps??30;let n=null,r=null,o=[],c=null,l=qT();function h(){c&&(URL.revokeObjectURL(c),c=null)}function d(){return(n==null?void 0:n.state)==="recording"}function p(){return typeof i.captureStream=="function"&&typeof MediaRecorder<"u"&&l!==null}function m(){var x,v,N;if(!p())return(x=e.onError)==null||x.call(e,new Error("Recording not supported in this browser (need MediaRecorder + canvas.captureStream).")),!1;if(d())return!1;h(),o=[];try{r=i.captureStream(t);const D=l?{mimeType:l,videoBitsPerSecond:6e6}:{videoBitsPerSecond:6e6};n=new MediaRecorder(r,D),l=n.mimeType||l||"video/webm"}catch(D){return(v=e.onError)==null||v.call(e,D instanceof Error?D:new Error(String(D))),y(),!1}return n.ondataavailable=D=>{D.data&&D.data.size>0&&o.push(D.data)},n.onerror=()=>{var D,P;(D=e.onError)==null||D.call(e,new Error("MediaRecorder error")),(P=e.onRecordingChange)==null||P.call(e,!1)},n.onstop=()=>{var q,L,O;if(y(),(q=e.onRecordingChange)==null||q.call(e,!1),!o.length){(L=e.onError)==null||L.call(e,new Error("Recording produced no data"));return}const D=new Blob(o,{type:l||"video/webm"});o=[],h(),c=URL.createObjectURL(D);const P=KT();(O=e.onReady)==null||O.call(e,{blob:D,url:c,filename:P,mime:D.type||l||"video/webm"})},n.start(250),(N=e.onRecordingChange)==null||N.call(e,!0),!0}function _(){var x,v,N;if(!n||n.state==="inactive")return!1;try{return n.state==="recording"&&((x=n.requestData)==null||x.call(n)),n.stop(),!0}catch(D){return(v=e.onError)==null||v.call(e,D instanceof Error?D:new Error(String(D))),(N=e.onRecordingChange)==null||N.call(e,!1),y(),!1}}function y(){if(r){for(const x of r.getTracks())x.stop();r=null}}function S(){d()&&_(),h(),y(),n=null}function b(x,v){const N=document.createElement("a");N.href=x,N.download=v,N.rel="noopener",document.body.appendChild(N),N.click(),N.remove()}return{supported:p,isRecording:d,start:m,stop:_,dispose:S,triggerDownload:b,get mime(){return l}}}const JT=document.getElementById("status"),yd=document.getElementById("btn-play"),xd=document.getElementById("btn-pause"),Ed=document.getElementById("btn-reset"),bh=document.getElementById("btn-pose"),Hr=document.getElementById("btn-record"),Sd=document.getElementById("record-bar"),QT=document.getElementById("record-live"),Mr=document.getElementById("btn-download"),Ic=document.getElementById("pose-hud"),tl=document.getElementById("c"),eb={root:Ic,pos:document.getElementById("pose-pos"),quat:document.getElementById("pose-quat"),euler:document.getElementById("pose-euler"),vel:document.getElementById("pose-vel")};let Ji,Yn,En,vi=!1,Kn=!1,us=-1,Nc=null;const tb=new DM;let Io=0;const nb=typeof location<"u"&&new URLSearchParams(location.search).has("debugCollider");function Rn(i){JT.textContent=i}function Es(){yd.disabled=!Kn||vi,xd.disabled=!Kn||!vi,Ed.disabled=!Kn,Hr.disabled=!Kn||!Qi.supported()}function wh(i){Hr.textContent=i?"Stop":"Record",Hr.setAttribute("aria-pressed",i?"true":"false"),QT.hidden=!i,i&&(Sd.hidden=!1,Mr.hidden=!0)}async function ib(){Rn("Loading MuJoCo WASM…"),Ji=await Og({locateFile:t=>t.endsWith(".wasm")?kg:t});const i=await fetch("/models/odc_drop.xml");if(!i.ok)throw new Error(`Failed to fetch MJCF (${i.status})`);const e=await i.text();if(Yn=Ji.MjModel.from_xml_string(e),!Yn)throw new Error("MjModel.from_xml_string failed");if(En=new Ji.MjData(Yn),!En)throw new Error("MjData construction failed");if(us=Yn.body("odc").id,us<0)throw new Error('Named body "odc" not found');Ji.mj_forward(Yn,En),Nc=Float64Array.from(En.qpos),Kn=!0,Es()}function rb(){const i=new tM({canvas:tl,antialias:!0,alpha:!0,preserveDrawingBuffer:!0});return i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.setSize(window.innerWidth,window.innerHeight),i.shadowMap.enabled=!0,i.shadowMap.type=Ch,i.outputColorSpace=Ut,i}function sb(){const i=new nM;i.fog=new $c(790550,8,22);const e=new ln(42,window.innerWidth/window.innerHeight,.05,40);e.up.set(0,0,1),e.position.set(.55,-1.15,.95);const t=new XM(e,tl);t.target.set(0,0,.55),t.enableDamping=!0,t.minPolarAngle=0,t.maxPolarAngle=Math.PI,t.minDistance=.08,t.maxDistance=5,t.update();const n=new bM(16777215,2765632,1.4);i.add(n);const r=new Do(16777215,1.6);r.position.set(.8,-.5,2.8),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.near=.2,r.shadow.camera.far=10,r.shadow.camera.left=-2,r.shadow.camera.right=2,r.shadow.camera.top=2,r.shadow.camera.bottom=-2,i.add(r);const o=new Do(12110048,.7);o.position.set(-1.2,.9,1.6),i.add(o);const c=new Do(16773328,.45);c.position.set(.3,1.4,.6),i.add(c);const l=new md(16777215,2.2,5,1.2);l.position.set(.15,-.25,1.55),i.add(l);const h=new Kt(new gs(8,8),new ys({color:1844272,roughness:.92,metalness:.05}));h.receiveShadow=!0,i.add(h);const d=new HM(8,32,3818840,2502204);d.rotation.x=Math.PI/2,d.position.z=.001,i.add(d);const p=new pi;if(p.name="odcRoot",i.add(p),p.add(YT(.07)),nb){const m=new Vr(Lo.x*2,Lo.y*2,Lo.z*2),_=new Ho(new hM(m),new vs({color:6750156,transparent:!0,opacity:.85,toneMapped:!1,fog:!1}));_.name="odcColliderDebug",p.add(_)}return{scene:i,camera:e,controls:t,odcRoot:p}}function Ah(i){const e=En.xpos,t=En.xquat,n=us*3,r=us*4;i.position.set(e[n],e[n+1],e[n+2]),i.quaternion.set(t[r+1],t[r+2],t[r+3],t[r]),$T({bodyId:us,model:Yn,data:En,hudEls:eb})}function ob(i){if(!vi||!Kn)return;const e=Yn.opt.timestep;Io+=Math.min(i,.05);let t=0;for(;Io>=e&&t<100;)Ji.mj_step(Yn,En),Io-=e,t+=1}function Md(){!Kn||vi||(vi=!0,Es(),Rn("Running — gravity on, computer falling."))}function Td(){vi&&(vi=!1,Es(),Rn("Paused."))}function bd(){if(Kn){vi=!1,Io=0,Ji.mj_resetData(Yn,En);for(let i=0;i<Nc.length;i++)En.qpos[i]=Nc[i];for(let i=0;i<En.qvel.length;i++)En.qvel[i]=0;Ji.mj_forward(Yn,En),Es(),Rn("Reset — suspended above the floor. Hit Play to drop again.")}}yd.addEventListener("click",Md);xd.addEventListener("click",Td);Ed.addEventListener("click",bd);bh.addEventListener("click",()=>{const i=Ic.hidden;Ic.hidden=!i,bh.setAttribute("aria-pressed",i?"true":"false")});const Qi=ZT(tl,{fps:30,onRecordingChange:i=>{wh(i),i&&Rn("Recording… hit Play for the bounce, then Stop to download.")},onReady:({url:i,filename:e,mime:t})=>{Sd.hidden=!1,Mr.hidden=!1,Mr.href=i,Mr.download=e,Mr.textContent=`Download video (${e.split(".").pop()||"webm"})`,Rn(`Clip ready (${t||"video/webm"}) — downloading ${e}`),Qi.triggerDownload(i,e)},onError:i=>{console.error(i),wh(!1),Rn(`Record failed: ${i.message||i}`)}});Hr.addEventListener("click",()=>{if(!Kn)return;if(Qi.isRecording()){Qi.stop();return}Mr.hidden=!0,!Qi.start()&&!Qi.supported()&&Rn("Recording not supported in this browser (need WebM MediaRecorder).")});window.addEventListener("keydown",i=>{if(i.code==="Space")i.preventDefault(),vi?Td():Md();else if(i.code==="KeyR"&&!i.metaKey&&!i.ctrlKey&&!i.altKey){if(document.activeElement&&/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName))return;bd()}});async function ab(){Es(),Qi.supported()||(Hr.disabled=!0,Hr.title="MediaRecorder / captureStream not available");const i=rb(),{scene:e,camera:t,controls:n,odcRoot:r}=sb();window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}),Rn("Loading computer mesh…");try{const c=await XT();r.add(c)}catch(c){console.error(c),Rn(`Failed to load computer GLB: ${c.message||c}`);return}try{await ib()}catch(c){console.error(c),Rn(`Failed to init MuJoCo: ${c.message||c}`);return}Ah(r),Rn("Ready — Record → Play (bounce) → Stop → download WebM.");function o(){const c=tb.getDelta();ob(c),Kn&&Ah(r),n.update(),i.render(e,t),requestAnimationFrame(o)}requestAnimationFrame(o)}ab();const cb=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
