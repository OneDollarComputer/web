const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/occt-import-js-DCqKp0QJ.js","assets/__vite-browser-external-D7Ct-6yo.js"])))=>i.map(i=>d[i]);
var dv=Object.defineProperty;var fv=(i,e,t)=>e in i?dv(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Pn=(i,e,t)=>fv(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const pv="modulepreload",mv=function(i){return"/physical/"+i},hu={},id=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let c=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),h=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));r=c(t.map(d=>{if(d=mv(d),d in hu)return;hu[d]=!0;const p=d.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const _=document.createElement("link");if(_.rel=p?"stylesheet":pv,p||(_.as="script"),_.crossOrigin="",_.href=d,h&&_.setAttribute("nonce",h),document.head.appendChild(_),p)return new Promise((g,S)=>{_.addEventListener("load",g),_.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return r.then(c=>{for(const l of c||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})};var Rw=(async function(i={}){var au,cu,lu;var e,t=i,n=typeof window=="object",r=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&((au=process.versions)==null?void 0:au.node)&&process.type!="renderer",c=!n&&!o&&!r;if(o){const{createRequire:s}=await id(async()=>{const{createRequire:a}=await import("./__vite-browser-external-D7Ct-6yo.js").then(u=>u._);return{createRequire:a}},[]);var l=s(import.meta.url)}var h="./this.program",d=(s,a)=>{throw a},p=import.meta.url,m="";function _(s){return t.locateFile?t.locateFile(s,m):m+s}var g,S;if(o){if(!(typeof process=="object"&&((cu=process.versions)==null?void 0:cu.node)&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var E=process.versions.node,x=E.split(".").slice(0,3);if(x=x[0]*1e4+x[1]*100+x[2].split("-")[0]*1,x<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+E+")");var y=l("fs");p.startsWith("file:")&&(m=l("path").dirname(l("url").fileURLToPath(p))+"/"),S=a=>{a=k(a)?new URL(a):a;var u=y.readFileSync(a);return L(Buffer.isBuffer(u)),u},g=async(a,u=!0)=>{a=k(a)?new URL(a):a;var f=y.readFileSync(a,u?void 0:"utf8");return L(u?Buffer.isBuffer(f):typeof f=="string"),f},process.argv.length>1&&(h=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),d=(a,u)=>{throw process.exitCode=a,u}}else if(c){if(typeof process=="object"&&((lu=process.versions)==null?void 0:lu.node)&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||r){try{m=new URL(".",p).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");r&&(S=s=>{var a=new XMLHttpRequest;return a.open("GET",s,!1),a.responseType="arraybuffer",a.send(null),new Uint8Array(a.response)}),g=async s=>{if(k(s))return new Promise((u,f)=>{var v=new XMLHttpRequest;v.open("GET",s,!0),v.responseType="arraybuffer",v.onload=()=>{if(v.status==200||v.status==0&&v.response){u(v.response);return}f(v.status)},v.onerror=f,v.send(null)});var a=await fetch(s,{credentials:"same-origin"});if(a.ok)return a.arrayBuffer();throw new Error(a.status+" : "+a.url)}}else throw new Error("environment detection error");var N=console.log.bind(console),P=console.error.bind(console);L(!c,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var A;typeof WebAssembly!="object"&&P("no native wasm support detected");var V=!1;function L(s,a){s||fe("Assertion failed"+(a?": "+a:""))}var k=s=>s.startsWith("file://");function H(){var s=ca();L((s&3)==0),s==0&&(s+=4),Me[s>>2]=34821223,Me[s+4>>2]=2310721022,Me[0]=1668509029}function I(){if(!V){var s=ca();s==0&&(s+=4);var a=Me[s>>2],u=Me[s+4>>2];(a!=34821223||u!=2310721022)&&fe(`Stack overflow! Stack cookie has been overwritten at ${_e(s)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${_e(u)} ${_e(a)}`),Me[0]!=1668509029&&fe("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class b extends Error{}class O extends b{}class q extends b{constructor(a){super(a),this.excPtr=a;const u=jl(a);this.name=u[0],this.message=u[1]}}(()=>{var s=new Int16Array(1),a=new Int8Array(s.buffer);if(s[0]=25459,a[0]!==115||a[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function Z(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,set(){fe(`Attempt to set \`Module.${s}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function Q(s){return()=>L(!1,`call to '${s}' via reference taken before Wasm module initialization`)}function ne(s){Object.getOwnPropertyDescriptor(t,s)&&fe(`\`Module.${s}\` was supplied but \`${s}\` not included in INCOMING_MODULE_JS_API`)}function ie(s){return s==="FS_createPath"||s==="FS_createDataFile"||s==="FS_createPreloadedFile"||s==="FS_unlink"||s==="addRunDependency"||s==="FS_createLazyFile"||s==="FS_createDevice"||s==="removeRunDependency"}function me(s,a){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,s)&&Object.defineProperty(globalThis,s,{configurable:!0,get(){a()}})}function se(s,a){me(s,()=>{Qe(`\`${s}\` is not longer defined by emscripten. ${a}`)})}se("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),se("asm","Please use wasmExports instead");function Ce(s){me(s,()=>{var a=`\`${s}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,u=s;u.startsWith("_")||(u="$"+s),a+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${u}')`,ie(s)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Qe(a)}),Le(s)}function Le(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,get(){var a=`'${s}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;ie(s)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),fe(a)}})}var Oe,Ke,ht,oe,ve,Ue,be,pe,Me,Je,ct,X,he,B=!1;function $e(){var s=ht.buffer;oe=new Int8Array(s),Ue=new Int16Array(s),ve=new Uint8Array(s),be=new Uint16Array(s),pe=new Int32Array(s),Me=new Uint32Array(s),Je=new Float32Array(s),ct=new Float64Array(s),X=new BigInt64Array(s),he=new BigUint64Array(s)}L(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function Ee(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Ie(t.preRun.shift());Z("preRun"),pt(G)}function ze(){L(!B),B=!0,I(),!t.noFSInit&&!w.initialized&&w.init(),Pi.__wasm_call_ctors(),w.ignorePermissions=!1}function Re(){if(I(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)wt(t.postRun.shift());Z("postRun"),pt(it)}var Ze=0,Fe=null,F={},R=null;function ee(s){var a;Ze++,(a=t.monitorRunDependencies)==null||a.call(t,Ze),s?(L(!F[s]),F[s]=1,R===null&&typeof setInterval<"u"&&(R=setInterval(()=>{if(V){clearInterval(R),R=null;return}var u=!1;for(var f in F)u||(u=!0,P("still waiting on run dependencies:")),P(`dependency: ${f}`);u&&P("(end of list)")},1e4))):P("warning: run dependency added without ID")}function de(s){var u;if(Ze--,(u=t.monitorRunDependencies)==null||u.call(t,Ze),s?(L(F[s]),delete F[s]):P("warning: run dependency removed without ID"),Ze==0&&(R!==null&&(clearInterval(R),R=null),Fe)){var a=Fe;Fe=null,a()}}function fe(s){var u;(u=t.onAbort)==null||u.call(t,s),s="Aborted("+s+")",P(s),V=!0;var a=new WebAssembly.RuntimeError(s);throw Ke==null||Ke(a),a}function ce(s,a){return(...u)=>{L(B,`native function \`${s}\` called before runtime initialization`);var f=Pi[s];return L(f,`exported native function \`${s}\` not found`),L(u.length<=a,`native function \`${s}\` called with ${u.length} args but expects ${a}`),f(...u)}}var Ve;function Pe(){return t.locateFile?_("mujoco.wasm"):new URL("/physical/assets/mujoco-D9UjOFNX.wasm",import.meta.url).href}function ke(s){if(s==Ve&&A)return new Uint8Array(A);if(S)return S(s);throw"both async and sync fetching of the wasm failed"}async function ft(s){if(!A)try{var a=await g(s);return new Uint8Array(a)}catch{}return ke(s)}async function Te(s,a){try{var u=await ft(s),f=await WebAssembly.instantiate(u,a);return f}catch(v){P(`failed to asynchronously prepare wasm: ${v}`),k(Ve)&&P(`warning: Loading from a file URI (${Ve}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),fe(v)}}async function Ge(s,a,u){if(!s&&typeof WebAssembly.instantiateStreaming=="function"&&!k(a)&&!o)try{var f=fetch(a,{credentials:"same-origin"}),v=await WebAssembly.instantiateStreaming(f,u);return v}catch(M){P(`wasm streaming compile failed: ${M}`),P("falling back to ArrayBuffer instantiation")}return Te(a,u)}function et(){return{env:su,wasi_snapshot_preview1:su}}async function nt(){function s(T,C){return Pi=T.exports,ht=Pi.memory,L(ht,"memory not found in wasm exports"),$e(),Ts=Pi.__indirect_function_table,L(Ts,"table not found in wasm exports"),mm(Pi),de("wasm-instantiate"),Pi}ee("wasm-instantiate");var a=t;function u(T){return L(t===a,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),a=null,s(T.instance)}var f=et();if(t.instantiateWasm)return new Promise((T,C)=>{try{t.instantiateWasm(f,(U,W)=>{T(s(U,W))})}catch(U){P(`Module.instantiateWasm callback failed with error: ${U}`),C(U)}});Ve??(Ve=Pe());var v=await Ge(A,Ve,f),M=u(v);return M}class We{constructor(a){Pn(this,"name","ExitStatus");this.message=`Program terminated with exit(${a})`,this.status=a}}var pt=s=>{for(;s.length>0;)s.shift()(t)},it=[],wt=s=>it.push(s),G=[],Ie=s=>G.push(s),ae=!0,_e=s=>(L(typeof s=="number"),s>>>=0,"0x"+s.toString(16).padStart(8,"0")),J=s=>Ql(s),K=()=>tu(),Qe=s=>{Qe.shown||(Qe.shown={}),Qe.shown[s]||(Qe.shown[s]=1,o&&(s="warning: "+s),P(s))},Lt=typeof TextDecoder<"u"?new TextDecoder:void 0,It=(s,a=0,u=NaN)=>{for(var f=a+u,v=a;s[v]&&!(v>=f);)++v;if(v-a>16&&s.buffer&&Lt)return Lt.decode(s.subarray(a,v));for(var M="";a<v;){var T=s[a++];if(!(T&128)){M+=String.fromCharCode(T);continue}var C=s[a++]&63;if((T&224)==192){M+=String.fromCharCode((T&31)<<6|C);continue}var U=s[a++]&63;if((T&240)==224?T=(T&15)<<12|C<<6|U:((T&248)!=240&&Qe("Invalid UTF-8 leading byte "+_e(T)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),T=(T&7)<<18|C<<12|U<<6|s[a++]&63),T<65536)M+=String.fromCharCode(T);else{var W=T-65536;M+=String.fromCharCode(55296|W>>10,56320|W&1023)}}return M},dt=(s,a)=>(L(typeof s=="number",`UTF8ToString expects a number (got ${typeof s})`),s?It(ve,s,a):""),dn=(s,a,u,f)=>fe(`Assertion failed: ${dt(s)}, at: `+[a?dt(a):"unknown filename",u,f?dt(f):"unknown function"]),Bt=[],Ei=0,ds=s=>{var a=new bi(s);return a.get_caught()||(a.set_caught(!0),Ei--),a.set_rethrown(!1),Bt.push(a),Is(s),ru(s)},jn=()=>{if(!Bt.length)return 0;var s=Bt[Bt.length-1];return Is(s.excPtr),s.excPtr},nn=0,fs=()=>{xe(0,0),L(Bt.length>0);var s=Bt.pop();la(s.excPtr),nn=0};class bi{constructor(a){this.excPtr=a,this.ptr=a-24}set_type(a){Me[this.ptr+4>>2]=a}get_type(){return Me[this.ptr+4>>2]}set_destructor(a){Me[this.ptr+8>>2]=a}get_destructor(){return Me[this.ptr+8>>2]}set_caught(a){a=a?1:0,oe[this.ptr+12]=a}get_caught(){return oe[this.ptr+12]!=0}set_rethrown(a){a=a?1:0,oe[this.ptr+13]=a}get_rethrown(){return oe[this.ptr+13]!=0}init(a,u){this.set_adjusted_ptr(0),this.set_type(a),this.set_destructor(u)}set_adjusted_ptr(a){Me[this.ptr+16>>2]=a}get_adjusted_ptr(){return Me[this.ptr+16>>2]}}var Yn=s=>Kl(s),qi=s=>{var a=nn==null?void 0:nn.excPtr;if(!a)return Yn(0),0;var u=new bi(a);u.set_adjusted_ptr(a);var f=u.get_type();if(!f)return Yn(0),a;for(var v of s){if(v===0||v===f)break;var M=u.ptr+16;if(iu(v,f,M))return Yn(v),a}return Yn(f),a},Zi=()=>qi([]),ps=s=>qi([s]),ms=(s,a)=>qi([s,a]),_s=()=>{var s=Bt.pop();s||fe("no exception to throw");var a=s.excPtr;throw s.get_rethrown()||(Bt.push(s),s.set_rethrown(!0),s.set_caught(!1),Ei++),nn=new q(a),nn},qo=s=>{if(s){var a=new bi(s);Bt.push(a),a.set_rethrown(!0),_s()}},Zo=(s,a,u)=>{var f=new bi(s);throw f.init(a,u),nn=new q(s),Ei++,nn},D=()=>Ei,$=s=>{throw nn||(nn=new q(s)),nn},Y={isAbs:s=>s.charAt(0)==="/",splitPath:s=>{var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return a.exec(s).slice(1)},normalizeArray:(s,a)=>{for(var u=0,f=s.length-1;f>=0;f--){var v=s[f];v==="."?s.splice(f,1):v===".."?(s.splice(f,1),u++):u&&(s.splice(f,1),u--)}if(a)for(;u;u--)s.unshift("..");return s},normalize:s=>{var a=Y.isAbs(s),u=s.slice(-1)==="/";return s=Y.normalizeArray(s.split("/").filter(f=>!!f),!a).join("/"),!s&&!a&&(s="."),s&&u&&(s+="/"),(a?"/":"")+s},dirname:s=>{var a=Y.splitPath(s),u=a[0],f=a[1];return!u&&!f?".":(f&&(f=f.slice(0,-1)),u+f)},basename:s=>s&&s.match(/([^\/]+|\/)\/*$/)[1],join:(...s)=>Y.normalize(s.join("/")),join2:(s,a)=>Y.normalize(s+"/"+a)},re=()=>{if(o){var s=l("crypto");return a=>s.randomFillSync(a)}return a=>crypto.getRandomValues(a)},j=s=>{(j=re())(s)},we={resolve:(...s)=>{for(var a="",u=!1,f=s.length-1;f>=-1&&!u;f--){var v=f>=0?s[f]:w.cwd();if(typeof v!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!v)return"";a=v+"/"+a,u=Y.isAbs(v)}return a=Y.normalizeArray(a.split("/").filter(M=>!!M),!u).join("/"),(u?"/":"")+a||"."},relative:(s,a)=>{s=we.resolve(s).slice(1),a=we.resolve(a).slice(1);function u(W){for(var te=0;te<W.length&&W[te]==="";te++);for(var le=W.length-1;le>=0&&W[le]==="";le--);return te>le?[]:W.slice(te,le-te+1)}for(var f=u(s.split("/")),v=u(a.split("/")),M=Math.min(f.length,v.length),T=M,C=0;C<M;C++)if(f[C]!==v[C]){T=C;break}for(var U=[],C=T;C<f.length;C++)U.push("..");return U=U.concat(v.slice(T)),U.join("/")}},Ne=[],Xe=s=>{for(var a=0,u=0;u<s.length;++u){var f=s.charCodeAt(u);f<=127?a++:f<=2047?a+=2:f>=55296&&f<=57343?(a+=4,++u):a+=3}return a},je=(s,a,u,f)=>{if(L(typeof s=="string",`stringToUTF8Array expects a string (got ${typeof s})`),!(f>0))return 0;for(var v=u,M=u+f-1,T=0;T<s.length;++T){var C=s.codePointAt(T);if(C<=127){if(u>=M)break;a[u++]=C}else if(C<=2047){if(u+1>=M)break;a[u++]=192|C>>6,a[u++]=128|C&63}else if(C<=65535){if(u+2>=M)break;a[u++]=224|C>>12,a[u++]=128|C>>6&63,a[u++]=128|C&63}else{if(u+3>=M)break;C>1114111&&Qe("Invalid Unicode code point "+_e(C)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),a[u++]=240|C>>18,a[u++]=128|C>>12&63,a[u++]=128|C>>6&63,a[u++]=128|C&63,T++}}return a[u]=0,u-v},tt=(s,a,u)=>{var f=Xe(s)+1,v=new Array(f),M=je(s,v,0,v.length);return v.length=M,v},rt=()=>{if(!Ne.length){var s=null;if(o){var a=256,u=Buffer.alloc(a),f=0,v=process.stdin.fd;try{f=y.readSync(v,u,0,a)}catch(M){if(M.toString().includes("EOF"))f=0;else throw M}f>0&&(s=u.slice(0,f).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(s=window.prompt("Input: "),s!==null&&(s+=`
`));if(!s)return null;Ne=tt(s)}return Ne.shift()},He={ttys:[],init(){},shutdown(){},register(s,a){He.ttys[s]={input:[],output:[],ops:a},w.registerDevice(s,He.stream_ops)},stream_ops:{open(s){var a=He.ttys[s.node.rdev];if(!a)throw new w.ErrnoError(43);s.tty=a,s.seekable=!1},close(s){s.tty.ops.fsync(s.tty)},fsync(s){s.tty.ops.fsync(s.tty)},read(s,a,u,f,v){if(!s.tty||!s.tty.ops.get_char)throw new w.ErrnoError(60);for(var M=0,T=0;T<f;T++){var C;try{C=s.tty.ops.get_char(s.tty)}catch{throw new w.ErrnoError(29)}if(C===void 0&&M===0)throw new w.ErrnoError(6);if(C==null)break;M++,a[u+T]=C}return M&&(s.node.atime=Date.now()),M},write(s,a,u,f,v){if(!s.tty||!s.tty.ops.put_char)throw new w.ErrnoError(60);try{for(var M=0;M<f;M++)s.tty.ops.put_char(s.tty,a[u+M])}catch{throw new w.ErrnoError(29)}return f&&(s.node.mtime=s.node.ctime=Date.now()),M}},default_tty_ops:{get_char(s){return rt()},put_char(s,a){a===null||a===10?(N(It(s.output)),s.output=[]):a!=0&&s.output.push(a)},fsync(s){var a;((a=s.output)==null?void 0:a.length)>0&&(N(It(s.output)),s.output=[])},ioctl_tcgets(s){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(s,a,u){return 0},ioctl_tiocgwinsz(s){return[24,80]}},default_tty1_ops:{put_char(s,a){a===null||a===10?(P(It(s.output)),s.output=[]):a!=0&&s.output.push(a)},fsync(s){var a;((a=s.output)==null?void 0:a.length)>0&&(P(It(s.output)),s.output=[])}}},_t=s=>{fe("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},Be={ops_table:null,mount(s){return Be.createNode(null,"/",16895,0)},createNode(s,a,u,f){if(w.isBlkdev(u)||w.isFIFO(u))throw new w.ErrnoError(63);Be.ops_table||(Be.ops_table={dir:{node:{getattr:Be.node_ops.getattr,setattr:Be.node_ops.setattr,lookup:Be.node_ops.lookup,mknod:Be.node_ops.mknod,rename:Be.node_ops.rename,unlink:Be.node_ops.unlink,rmdir:Be.node_ops.rmdir,readdir:Be.node_ops.readdir,symlink:Be.node_ops.symlink},stream:{llseek:Be.stream_ops.llseek}},file:{node:{getattr:Be.node_ops.getattr,setattr:Be.node_ops.setattr},stream:{llseek:Be.stream_ops.llseek,read:Be.stream_ops.read,write:Be.stream_ops.write,mmap:Be.stream_ops.mmap,msync:Be.stream_ops.msync}},link:{node:{getattr:Be.node_ops.getattr,setattr:Be.node_ops.setattr,readlink:Be.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Be.node_ops.getattr,setattr:Be.node_ops.setattr},stream:w.chrdev_stream_ops}});var v=w.createNode(s,a,u,f);return w.isDir(v.mode)?(v.node_ops=Be.ops_table.dir.node,v.stream_ops=Be.ops_table.dir.stream,v.contents={}):w.isFile(v.mode)?(v.node_ops=Be.ops_table.file.node,v.stream_ops=Be.ops_table.file.stream,v.usedBytes=0,v.contents=null):w.isLink(v.mode)?(v.node_ops=Be.ops_table.link.node,v.stream_ops=Be.ops_table.link.stream):w.isChrdev(v.mode)&&(v.node_ops=Be.ops_table.chrdev.node,v.stream_ops=Be.ops_table.chrdev.stream),v.atime=v.mtime=v.ctime=Date.now(),s&&(s.contents[a]=v,s.atime=s.mtime=s.ctime=v.atime),v},getFileDataAsTypedArray(s){return s.contents?s.contents.subarray?s.contents.subarray(0,s.usedBytes):new Uint8Array(s.contents):new Uint8Array(0)},expandFileStorage(s,a){var u=s.contents?s.contents.length:0;if(!(u>=a)){var f=1024*1024;a=Math.max(a,u*(u<f?2:1.125)>>>0),u!=0&&(a=Math.max(a,256));var v=s.contents;s.contents=new Uint8Array(a),s.usedBytes>0&&s.contents.set(v.subarray(0,s.usedBytes),0)}},resizeFileStorage(s,a){if(s.usedBytes!=a)if(a==0)s.contents=null,s.usedBytes=0;else{var u=s.contents;s.contents=new Uint8Array(a),u&&s.contents.set(u.subarray(0,Math.min(a,s.usedBytes))),s.usedBytes=a}},node_ops:{getattr(s){var a={};return a.dev=w.isChrdev(s.mode)?s.id:1,a.ino=s.id,a.mode=s.mode,a.nlink=1,a.uid=0,a.gid=0,a.rdev=s.rdev,w.isDir(s.mode)?a.size=4096:w.isFile(s.mode)?a.size=s.usedBytes:w.isLink(s.mode)?a.size=s.link.length:a.size=0,a.atime=new Date(s.atime),a.mtime=new Date(s.mtime),a.ctime=new Date(s.ctime),a.blksize=4096,a.blocks=Math.ceil(a.size/a.blksize),a},setattr(s,a){for(const u of["mode","atime","mtime","ctime"])a[u]!=null&&(s[u]=a[u]);a.size!==void 0&&Be.resizeFileStorage(s,a.size)},lookup(s,a){throw new w.ErrnoError(44)},mknod(s,a,u,f){return Be.createNode(s,a,u,f)},rename(s,a,u){var f;try{f=w.lookupNode(a,u)}catch{}if(f){if(w.isDir(s.mode))for(var v in f.contents)throw new w.ErrnoError(55);w.hashRemoveNode(f)}delete s.parent.contents[s.name],a.contents[u]=s,s.name=u,a.ctime=a.mtime=s.parent.ctime=s.parent.mtime=Date.now()},unlink(s,a){delete s.contents[a],s.ctime=s.mtime=Date.now()},rmdir(s,a){var u=w.lookupNode(s,a);for(var f in u.contents)throw new w.ErrnoError(55);delete s.contents[a],s.ctime=s.mtime=Date.now()},readdir(s){return[".","..",...Object.keys(s.contents)]},symlink(s,a,u){var f=Be.createNode(s,a,41471,0);return f.link=u,f},readlink(s){if(!w.isLink(s.mode))throw new w.ErrnoError(28);return s.link}},stream_ops:{read(s,a,u,f,v){var M=s.node.contents;if(v>=s.node.usedBytes)return 0;var T=Math.min(s.node.usedBytes-v,f);if(L(T>=0),T>8&&M.subarray)a.set(M.subarray(v,v+T),u);else for(var C=0;C<T;C++)a[u+C]=M[v+C];return T},write(s,a,u,f,v,M){if(L(!(a instanceof ArrayBuffer)),a.buffer===oe.buffer&&(M=!1),!f)return 0;var T=s.node;if(T.mtime=T.ctime=Date.now(),a.subarray&&(!T.contents||T.contents.subarray)){if(M)return L(v===0,"canOwn must imply no weird position inside the file"),T.contents=a.subarray(u,u+f),T.usedBytes=f,f;if(T.usedBytes===0&&v===0)return T.contents=a.slice(u,u+f),T.usedBytes=f,f;if(v+f<=T.usedBytes)return T.contents.set(a.subarray(u,u+f),v),f}if(Be.expandFileStorage(T,v+f),T.contents.subarray&&a.subarray)T.contents.set(a.subarray(u,u+f),v);else for(var C=0;C<f;C++)T.contents[v+C]=a[u+C];return T.usedBytes=Math.max(T.usedBytes,v+f),f},llseek(s,a,u){var f=a;if(u===1?f+=s.position:u===2&&w.isFile(s.node.mode)&&(f+=s.node.usedBytes),f<0)throw new w.ErrnoError(28);return f},mmap(s,a,u,f,v){if(!w.isFile(s.node.mode))throw new w.ErrnoError(43);var M,T,C=s.node.contents;if(!(v&2)&&C&&C.buffer===oe.buffer)T=!1,M=C.byteOffset;else{if(T=!0,M=_t(),!M)throw new w.ErrnoError(48);C&&((u>0||u+a<C.length)&&(C.subarray?C=C.subarray(u,u+a):C=Array.prototype.slice.call(C,u,u+a)),oe.set(C,M))}return{ptr:M,allocated:T}},msync(s,a,u,f,v){return Be.stream_ops.write(s,a,0,f,u,!1),0}}},Rt=async s=>{var a=await g(s);return L(a,`Loading data file "${s}" failed (no arrayBuffer).`),new Uint8Array(a)},jt=(...s)=>w.createDataFile(...s),Mt=s=>{for(var a=s;;){if(!F[s])return s;s=a+Math.random()}},Ye=[],Cn=(s,a,u,f)=>{typeof Browser<"u"&&Browser.init();var v=!1;return Ye.forEach(M=>{v||M.canHandle(a)&&(M.handle(s,a,u,f),v=!0)}),v},yt=(s,a,u,f,v,M,T,C,U,W)=>{var te=a?we.resolve(Y.join2(s,a)):s,le=Mt(`cp ${te}`);function ge(ue){function ye(qe){W==null||W(),C||jt(s,a,qe,f,v,U),M==null||M(),de(le)}Cn(ue,te,ye,()=>{T==null||T(),de(le)})||ye(ue)}ee(le),typeof u=="string"?Rt(u).then(ge,T):ge(u)},fn=s=>{var a={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},u=a[s];if(typeof u>"u")throw new Error(`Unknown file open mode: ${s}`);return u},Un=(s,a)=>{var u=0;return s&&(u|=365),a&&(u|=146),u},rn=s=>dt(Zl(s)),ci={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},w={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{constructor(a){super(B?rn(a):"");Pn(this,"name","ErrnoError");this.errno=a;for(var u in ci)if(ci[u]===a){this.code=u;break}}},FSStream:class{constructor(){Pn(this,"shared",{})}get object(){return this.node}set object(s){this.node=s}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(s){this.shared.flags=s}get position(){return this.shared.position}set position(s){this.shared.position=s}},FSNode:class{constructor(s,a,u,f){Pn(this,"node_ops",{});Pn(this,"stream_ops",{});Pn(this,"readMode",365);Pn(this,"writeMode",146);Pn(this,"mounted",null);s||(s=this),this.parent=s,this.mount=s.mount,this.id=w.nextInode++,this.name=a,this.mode=u,this.rdev=f,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(s){s?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(s){s?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return w.isDir(this.mode)}get isDevice(){return w.isChrdev(this.mode)}},lookupPath(s,a={}){if(!s)throw new w.ErrnoError(44);a.follow_mount??(a.follow_mount=!0),Y.isAbs(s)||(s=w.cwd()+"/"+s);e:for(var u=0;u<40;u++){for(var f=s.split("/").filter(W=>!!W),v=w.root,M="/",T=0;T<f.length;T++){var C=T===f.length-1;if(C&&a.parent)break;if(f[T]!=="."){if(f[T]===".."){if(M=Y.dirname(M),w.isRoot(v)){s=M+"/"+f.slice(T+1).join("/");continue e}else v=v.parent;continue}M=Y.join2(M,f[T]);try{v=w.lookupNode(v,f[T])}catch(W){if((W==null?void 0:W.errno)===44&&C&&a.noent_okay)return{path:M};throw W}if(w.isMountpoint(v)&&(!C||a.follow_mount)&&(v=v.mounted.root),w.isLink(v.mode)&&(!C||a.follow)){if(!v.node_ops.readlink)throw new w.ErrnoError(52);var U=v.node_ops.readlink(v);Y.isAbs(U)||(U=Y.dirname(M)+"/"+U),s=U+"/"+f.slice(T+1).join("/");continue e}}}return{path:M,node:v}}throw new w.ErrnoError(32)},getPath(s){for(var a;;){if(w.isRoot(s)){var u=s.mount.mountpoint;return a?u[u.length-1]!=="/"?`${u}/${a}`:u+a:u}a=a?`${s.name}/${a}`:s.name,s=s.parent}},hashName(s,a){for(var u=0,f=0;f<a.length;f++)u=(u<<5)-u+a.charCodeAt(f)|0;return(s+u>>>0)%w.nameTable.length},hashAddNode(s){var a=w.hashName(s.parent.id,s.name);s.name_next=w.nameTable[a],w.nameTable[a]=s},hashRemoveNode(s){var a=w.hashName(s.parent.id,s.name);if(w.nameTable[a]===s)w.nameTable[a]=s.name_next;else for(var u=w.nameTable[a];u;){if(u.name_next===s){u.name_next=s.name_next;break}u=u.name_next}},lookupNode(s,a){var u=w.mayLookup(s);if(u)throw new w.ErrnoError(u);for(var f=w.hashName(s.id,a),v=w.nameTable[f];v;v=v.name_next){var M=v.name;if(v.parent.id===s.id&&M===a)return v}return w.lookup(s,a)},createNode(s,a,u,f){L(typeof s=="object");var v=new w.FSNode(s,a,u,f);return w.hashAddNode(v),v},destroyNode(s){w.hashRemoveNode(s)},isRoot(s){return s===s.parent},isMountpoint(s){return!!s.mounted},isFile(s){return(s&61440)===32768},isDir(s){return(s&61440)===16384},isLink(s){return(s&61440)===40960},isChrdev(s){return(s&61440)===8192},isBlkdev(s){return(s&61440)===24576},isFIFO(s){return(s&61440)===4096},isSocket(s){return(s&49152)===49152},flagsToPermissionString(s){var a=["r","w","rw"][s&3];return s&512&&(a+="w"),a},nodePermissions(s,a){return w.ignorePermissions?0:a.includes("r")&&!(s.mode&292)||a.includes("w")&&!(s.mode&146)||a.includes("x")&&!(s.mode&73)?2:0},mayLookup(s){if(!w.isDir(s.mode))return 54;var a=w.nodePermissions(s,"x");return a||(s.node_ops.lookup?0:2)},mayCreate(s,a){if(!w.isDir(s.mode))return 54;try{var u=w.lookupNode(s,a);return 20}catch{}return w.nodePermissions(s,"wx")},mayDelete(s,a,u){var f;try{f=w.lookupNode(s,a)}catch(M){return M.errno}var v=w.nodePermissions(s,"wx");if(v)return v;if(u){if(!w.isDir(f.mode))return 54;if(w.isRoot(f)||w.getPath(f)===w.cwd())return 10}else if(w.isDir(f.mode))return 31;return 0},mayOpen(s,a){return s?w.isLink(s.mode)?32:w.isDir(s.mode)&&(w.flagsToPermissionString(a)!=="r"||a&576)?31:w.nodePermissions(s,w.flagsToPermissionString(a)):44},checkOpExists(s,a){if(!s)throw new w.ErrnoError(a);return s},MAX_OPEN_FDS:4096,nextfd(){for(var s=0;s<=w.MAX_OPEN_FDS;s++)if(!w.streams[s])return s;throw new w.ErrnoError(33)},getStreamChecked(s){var a=w.getStream(s);if(!a)throw new w.ErrnoError(8);return a},getStream:s=>w.streams[s],createStream(s,a=-1){return L(a>=-1),s=Object.assign(new w.FSStream,s),a==-1&&(a=w.nextfd()),s.fd=a,w.streams[a]=s,s},closeStream(s){w.streams[s]=null},dupStream(s,a=-1){var f,v;var u=w.createStream(s,a);return(v=(f=u.stream_ops)==null?void 0:f.dup)==null||v.call(f,u),u},doSetAttr(s,a,u){var f=s==null?void 0:s.stream_ops.setattr,v=f?s:a;f??(f=a.node_ops.setattr),w.checkOpExists(f,63),f(v,u)},chrdev_stream_ops:{open(s){var u,f;var a=w.getDevice(s.node.rdev);s.stream_ops=a.stream_ops,(f=(u=s.stream_ops).open)==null||f.call(u,s)},llseek(){throw new w.ErrnoError(70)}},major:s=>s>>8,minor:s=>s&255,makedev:(s,a)=>s<<8|a,registerDevice(s,a){w.devices[s]={stream_ops:a}},getDevice:s=>w.devices[s],getMounts(s){for(var a=[],u=[s];u.length;){var f=u.pop();a.push(f),u.push(...f.mounts)}return a},syncfs(s,a){typeof s=="function"&&(a=s,s=!1),w.syncFSRequests++,w.syncFSRequests>1&&P(`warning: ${w.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var u=w.getMounts(w.root.mount),f=0;function v(T){return L(w.syncFSRequests>0),w.syncFSRequests--,a(T)}function M(T){if(T)return M.errored?void 0:(M.errored=!0,v(T));++f>=u.length&&v(null)}u.forEach(T=>{if(!T.type.syncfs)return M(null);T.type.syncfs(T,s,M)})},mount(s,a,u){if(typeof s=="string")throw s;var f=u==="/",v=!u,M;if(f&&w.root)throw new w.ErrnoError(10);if(!f&&!v){var T=w.lookupPath(u,{follow_mount:!1});if(u=T.path,M=T.node,w.isMountpoint(M))throw new w.ErrnoError(10);if(!w.isDir(M.mode))throw new w.ErrnoError(54)}var C={type:s,opts:a,mountpoint:u,mounts:[]},U=s.mount(C);return U.mount=C,C.root=U,f?w.root=U:M&&(M.mounted=C,M.mount&&M.mount.mounts.push(C)),U},unmount(s){var a=w.lookupPath(s,{follow_mount:!1});if(!w.isMountpoint(a.node))throw new w.ErrnoError(28);var u=a.node,f=u.mounted,v=w.getMounts(f);Object.keys(w.nameTable).forEach(T=>{for(var C=w.nameTable[T];C;){var U=C.name_next;v.includes(C.mount)&&w.destroyNode(C),C=U}}),u.mounted=null;var M=u.mount.mounts.indexOf(f);L(M!==-1),u.mount.mounts.splice(M,1)},lookup(s,a){return s.node_ops.lookup(s,a)},mknod(s,a,u){var f=w.lookupPath(s,{parent:!0}),v=f.node,M=Y.basename(s);if(!M)throw new w.ErrnoError(28);if(M==="."||M==="..")throw new w.ErrnoError(20);var T=w.mayCreate(v,M);if(T)throw new w.ErrnoError(T);if(!v.node_ops.mknod)throw new w.ErrnoError(63);return v.node_ops.mknod(v,M,a,u)},statfs(s){return w.statfsNode(w.lookupPath(s,{follow:!0}).node)},statfsStream(s){return w.statfsNode(s.node)},statfsNode(s){var a={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:w.nextInode,ffree:w.nextInode-1,fsid:42,flags:2,namelen:255};return s.node_ops.statfs&&Object.assign(a,s.node_ops.statfs(s.mount.opts.root)),a},create(s,a=438){return a&=4095,a|=32768,w.mknod(s,a,0)},mkdir(s,a=511){return a&=1023,a|=16384,w.mknod(s,a,0)},mkdirTree(s,a){var u=s.split("/"),f="";for(var v of u)if(v){(f||Y.isAbs(s))&&(f+="/"),f+=v;try{w.mkdir(f,a)}catch(M){if(M.errno!=20)throw M}}},mkdev(s,a,u){return typeof u>"u"&&(u=a,a=438),a|=8192,w.mknod(s,a,u)},symlink(s,a){if(!we.resolve(s))throw new w.ErrnoError(44);var u=w.lookupPath(a,{parent:!0}),f=u.node;if(!f)throw new w.ErrnoError(44);var v=Y.basename(a),M=w.mayCreate(f,v);if(M)throw new w.ErrnoError(M);if(!f.node_ops.symlink)throw new w.ErrnoError(63);return f.node_ops.symlink(f,v,s)},rename(s,a){var u=Y.dirname(s),f=Y.dirname(a),v=Y.basename(s),M=Y.basename(a),T,C,U;if(T=w.lookupPath(s,{parent:!0}),C=T.node,T=w.lookupPath(a,{parent:!0}),U=T.node,!C||!U)throw new w.ErrnoError(44);if(C.mount!==U.mount)throw new w.ErrnoError(75);var W=w.lookupNode(C,v),te=we.relative(s,f);if(te.charAt(0)!==".")throw new w.ErrnoError(28);if(te=we.relative(a,u),te.charAt(0)!==".")throw new w.ErrnoError(55);var le;try{le=w.lookupNode(U,M)}catch{}if(W!==le){var ge=w.isDir(W.mode),ue=w.mayDelete(C,v,ge);if(ue)throw new w.ErrnoError(ue);if(ue=le?w.mayDelete(U,M,ge):w.mayCreate(U,M),ue)throw new w.ErrnoError(ue);if(!C.node_ops.rename)throw new w.ErrnoError(63);if(w.isMountpoint(W)||le&&w.isMountpoint(le))throw new w.ErrnoError(10);if(U!==C&&(ue=w.nodePermissions(C,"w"),ue))throw new w.ErrnoError(ue);w.hashRemoveNode(W);try{C.node_ops.rename(W,U,M),W.parent=U}catch(ye){throw ye}finally{w.hashAddNode(W)}}},rmdir(s){var a=w.lookupPath(s,{parent:!0}),u=a.node,f=Y.basename(s),v=w.lookupNode(u,f),M=w.mayDelete(u,f,!0);if(M)throw new w.ErrnoError(M);if(!u.node_ops.rmdir)throw new w.ErrnoError(63);if(w.isMountpoint(v))throw new w.ErrnoError(10);u.node_ops.rmdir(u,f),w.destroyNode(v)},readdir(s){var a=w.lookupPath(s,{follow:!0}),u=a.node,f=w.checkOpExists(u.node_ops.readdir,54);return f(u)},unlink(s){var a=w.lookupPath(s,{parent:!0}),u=a.node;if(!u)throw new w.ErrnoError(44);var f=Y.basename(s),v=w.lookupNode(u,f),M=w.mayDelete(u,f,!1);if(M)throw new w.ErrnoError(M);if(!u.node_ops.unlink)throw new w.ErrnoError(63);if(w.isMountpoint(v))throw new w.ErrnoError(10);u.node_ops.unlink(u,f),w.destroyNode(v)},readlink(s){var a=w.lookupPath(s),u=a.node;if(!u)throw new w.ErrnoError(44);if(!u.node_ops.readlink)throw new w.ErrnoError(28);return u.node_ops.readlink(u)},stat(s,a){var u=w.lookupPath(s,{follow:!a}),f=u.node,v=w.checkOpExists(f.node_ops.getattr,63);return v(f)},fstat(s){var a=w.getStreamChecked(s),u=a.node,f=a.stream_ops.getattr,v=f?a:u;return f??(f=u.node_ops.getattr),w.checkOpExists(f,63),f(v)},lstat(s){return w.stat(s,!0)},doChmod(s,a,u,f){w.doSetAttr(s,a,{mode:u&4095|a.mode&-4096,ctime:Date.now(),dontFollow:f})},chmod(s,a,u){var f;if(typeof s=="string"){var v=w.lookupPath(s,{follow:!u});f=v.node}else f=s;w.doChmod(null,f,a,u)},lchmod(s,a){w.chmod(s,a,!0)},fchmod(s,a){var u=w.getStreamChecked(s);w.doChmod(u,u.node,a,!1)},doChown(s,a,u){w.doSetAttr(s,a,{timestamp:Date.now(),dontFollow:u})},chown(s,a,u,f){var v;if(typeof s=="string"){var M=w.lookupPath(s,{follow:!f});v=M.node}else v=s;w.doChown(null,v,f)},lchown(s,a,u){w.chown(s,a,u,!0)},fchown(s,a,u){var f=w.getStreamChecked(s);w.doChown(f,f.node,!1)},doTruncate(s,a,u){if(w.isDir(a.mode))throw new w.ErrnoError(31);if(!w.isFile(a.mode))throw new w.ErrnoError(28);var f=w.nodePermissions(a,"w");if(f)throw new w.ErrnoError(f);w.doSetAttr(s,a,{size:u,timestamp:Date.now()})},truncate(s,a){if(a<0)throw new w.ErrnoError(28);var u;if(typeof s=="string"){var f=w.lookupPath(s,{follow:!0});u=f.node}else u=s;w.doTruncate(null,u,a)},ftruncate(s,a){var u=w.getStreamChecked(s);if(a<0||(u.flags&2097155)===0)throw new w.ErrnoError(28);w.doTruncate(u,u.node,a)},utime(s,a,u){var f=w.lookupPath(s,{follow:!0}),v=f.node,M=w.checkOpExists(v.node_ops.setattr,63);M(v,{atime:a,mtime:u})},open(s,a,u=438){if(s==="")throw new w.ErrnoError(44);a=typeof a=="string"?fn(a):a,a&64?u=u&4095|32768:u=0;var f,v;if(typeof s=="object")f=s;else{v=s.endsWith("/");var M=w.lookupPath(s,{follow:!(a&131072),noent_okay:!0});f=M.node,s=M.path}var T=!1;if(a&64)if(f){if(a&128)throw new w.ErrnoError(20)}else{if(v)throw new w.ErrnoError(31);f=w.mknod(s,u|511,0),T=!0}if(!f)throw new w.ErrnoError(44);if(w.isChrdev(f.mode)&&(a&=-513),a&65536&&!w.isDir(f.mode))throw new w.ErrnoError(54);if(!T){var C=w.mayOpen(f,a);if(C)throw new w.ErrnoError(C)}a&512&&!T&&w.truncate(f,0),a&=-131713;var U=w.createStream({node:f,path:w.getPath(f),flags:a,seekable:!0,position:0,stream_ops:f.stream_ops,ungotten:[],error:!1});return U.stream_ops.open&&U.stream_ops.open(U),T&&w.chmod(f,u&511),t.logReadFiles&&!(a&1)&&(s in w.readFiles||(w.readFiles[s]=1)),U},close(s){if(w.isClosed(s))throw new w.ErrnoError(8);s.getdents&&(s.getdents=null);try{s.stream_ops.close&&s.stream_ops.close(s)}catch(a){throw a}finally{w.closeStream(s.fd)}s.fd=null},isClosed(s){return s.fd===null},llseek(s,a,u){if(w.isClosed(s))throw new w.ErrnoError(8);if(!s.seekable||!s.stream_ops.llseek)throw new w.ErrnoError(70);if(u!=0&&u!=1&&u!=2)throw new w.ErrnoError(28);return s.position=s.stream_ops.llseek(s,a,u),s.ungotten=[],s.position},read(s,a,u,f,v){if(L(u>=0),f<0||v<0)throw new w.ErrnoError(28);if(w.isClosed(s))throw new w.ErrnoError(8);if((s.flags&2097155)===1)throw new w.ErrnoError(8);if(w.isDir(s.node.mode))throw new w.ErrnoError(31);if(!s.stream_ops.read)throw new w.ErrnoError(28);var M=typeof v<"u";if(!M)v=s.position;else if(!s.seekable)throw new w.ErrnoError(70);var T=s.stream_ops.read(s,a,u,f,v);return M||(s.position+=T),T},write(s,a,u,f,v,M){if(L(u>=0),f<0||v<0)throw new w.ErrnoError(28);if(w.isClosed(s))throw new w.ErrnoError(8);if((s.flags&2097155)===0)throw new w.ErrnoError(8);if(w.isDir(s.node.mode))throw new w.ErrnoError(31);if(!s.stream_ops.write)throw new w.ErrnoError(28);s.seekable&&s.flags&1024&&w.llseek(s,0,2);var T=typeof v<"u";if(!T)v=s.position;else if(!s.seekable)throw new w.ErrnoError(70);var C=s.stream_ops.write(s,a,u,f,v,M);return T||(s.position+=C),C},mmap(s,a,u,f,v){if((f&2)!==0&&(v&2)===0&&(s.flags&2097155)!==2)throw new w.ErrnoError(2);if((s.flags&2097155)===1)throw new w.ErrnoError(2);if(!s.stream_ops.mmap)throw new w.ErrnoError(43);if(!a)throw new w.ErrnoError(28);return s.stream_ops.mmap(s,a,u,f,v)},msync(s,a,u,f,v){return L(u>=0),s.stream_ops.msync?s.stream_ops.msync(s,a,u,f,v):0},ioctl(s,a,u){if(!s.stream_ops.ioctl)throw new w.ErrnoError(59);return s.stream_ops.ioctl(s,a,u)},readFile(s,a={}){if(a.flags=a.flags||0,a.encoding=a.encoding||"binary",a.encoding!=="utf8"&&a.encoding!=="binary")throw new Error(`Invalid encoding type "${a.encoding}"`);var u=w.open(s,a.flags),f=w.stat(s),v=f.size,M=new Uint8Array(v);return w.read(u,M,0,v,0),a.encoding==="utf8"&&(M=It(M)),w.close(u),M},writeFile(s,a,u={}){u.flags=u.flags||577;var f=w.open(s,u.flags,u.mode);if(typeof a=="string"&&(a=new Uint8Array(tt(a))),ArrayBuffer.isView(a))w.write(f,a,0,a.byteLength,void 0,u.canOwn);else throw new Error("Unsupported data type");w.close(f)},cwd:()=>w.currentPath,chdir(s){var a=w.lookupPath(s,{follow:!0});if(a.node===null)throw new w.ErrnoError(44);if(!w.isDir(a.node.mode))throw new w.ErrnoError(54);var u=w.nodePermissions(a.node,"x");if(u)throw new w.ErrnoError(u);w.currentPath=a.path},createDefaultDirectories(){w.mkdir("/tmp"),w.mkdir("/home"),w.mkdir("/home/web_user")},createDefaultDevices(){w.mkdir("/dev"),w.registerDevice(w.makedev(1,3),{read:()=>0,write:(f,v,M,T,C)=>T,llseek:()=>0}),w.mkdev("/dev/null",w.makedev(1,3)),He.register(w.makedev(5,0),He.default_tty_ops),He.register(w.makedev(6,0),He.default_tty1_ops),w.mkdev("/dev/tty",w.makedev(5,0)),w.mkdev("/dev/tty1",w.makedev(6,0));var s=new Uint8Array(1024),a=0,u=()=>(a===0&&(j(s),a=s.byteLength),s[--a]);w.createDevice("/dev","random",u),w.createDevice("/dev","urandom",u),w.mkdir("/dev/shm"),w.mkdir("/dev/shm/tmp")},createSpecialDirectories(){w.mkdir("/proc");var s=w.mkdir("/proc/self");w.mkdir("/proc/self/fd"),w.mount({mount(){var a=w.createNode(s,"fd",16895,73);return a.stream_ops={llseek:Be.stream_ops.llseek},a.node_ops={lookup(u,f){var v=+f,M=w.getStreamChecked(v),T={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>M.path},id:v+1};return T.parent=T,T},readdir(){return Array.from(w.streams.entries()).filter(([u,f])=>f).map(([u,f])=>u.toString())}},a}},{},"/proc/self/fd")},createStandardStreams(s,a,u){s?w.createDevice("/dev","stdin",s):w.symlink("/dev/tty","/dev/stdin"),a?w.createDevice("/dev","stdout",null,a):w.symlink("/dev/tty","/dev/stdout"),u?w.createDevice("/dev","stderr",null,u):w.symlink("/dev/tty1","/dev/stderr");var f=w.open("/dev/stdin",0),v=w.open("/dev/stdout",1),M=w.open("/dev/stderr",1);L(f.fd===0,`invalid handle for stdin (${f.fd})`),L(v.fd===1,`invalid handle for stdout (${v.fd})`),L(M.fd===2,`invalid handle for stderr (${M.fd})`)},staticInit(){w.nameTable=new Array(4096),w.mount(Be,{},"/"),w.createDefaultDirectories(),w.createDefaultDevices(),w.createSpecialDirectories(),w.filesystems={MEMFS:Be}},init(s,a,u){L(!w.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),w.initialized=!0,s??(s=t.stdin),a??(a=t.stdout),u??(u=t.stderr),w.createStandardStreams(s,a,u)},quit(){w.initialized=!1,aa(0);for(var s of w.streams)s&&w.close(s)},findObject(s,a){var u=w.analyzePath(s,a);return u.exists?u.object:null},analyzePath(s,a){try{var u=w.lookupPath(s,{follow:!a});s=u.path}catch{}var f={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var u=w.lookupPath(s,{parent:!0});f.parentExists=!0,f.parentPath=u.path,f.parentObject=u.node,f.name=Y.basename(s),u=w.lookupPath(s,{follow:!a}),f.exists=!0,f.path=u.path,f.object=u.node,f.name=u.node.name,f.isRoot=u.path==="/"}catch(v){f.error=v.errno}return f},createPath(s,a,u,f){s=typeof s=="string"?s:w.getPath(s);for(var v=a.split("/").reverse();v.length;){var M=v.pop();if(M){var T=Y.join2(s,M);try{w.mkdir(T)}catch(C){if(C.errno!=20)throw C}s=T}}return T},createFile(s,a,u,f,v){var M=Y.join2(typeof s=="string"?s:w.getPath(s),a),T=Un(f,v);return w.create(M,T)},createDataFile(s,a,u,f,v,M){var T=a;s&&(s=typeof s=="string"?s:w.getPath(s),T=a?Y.join2(s,a):s);var C=Un(f,v),U=w.create(T,C);if(u){if(typeof u=="string"){for(var W=new Array(u.length),te=0,le=u.length;te<le;++te)W[te]=u.charCodeAt(te);u=W}w.chmod(U,C|146);var ge=w.open(U,577);w.write(ge,u,0,u.length,0,M),w.close(ge),w.chmod(U,C)}},createDevice(s,a,u,f){var C;var v=Y.join2(typeof s=="string"?s:w.getPath(s),a),M=Un(!!u,!!f);(C=w.createDevice).major??(C.major=64);var T=w.makedev(w.createDevice.major++,0);return w.registerDevice(T,{open(U){U.seekable=!1},close(U){var W;(W=f==null?void 0:f.buffer)!=null&&W.length&&f(10)},read(U,W,te,le,ge){for(var ue=0,ye=0;ye<le;ye++){var qe;try{qe=u()}catch{throw new w.ErrnoError(29)}if(qe===void 0&&ue===0)throw new w.ErrnoError(6);if(qe==null)break;ue++,W[te+ye]=qe}return ue&&(U.node.atime=Date.now()),ue},write(U,W,te,le,ge){for(var ue=0;ue<le;ue++)try{f(W[te+ue])}catch{throw new w.ErrnoError(29)}return le&&(U.node.mtime=U.node.ctime=Date.now()),ue}}),w.mkdev(v,M,T)},forceLoadFile(s){if(s.isDevice||s.isFolder||s.link||s.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{s.contents=S(s.url),s.usedBytes=s.contents.length}catch{throw new w.ErrnoError(29)}},createLazyFile(s,a,u,f,v){class M{constructor(){Pn(this,"lengthKnown",!1);Pn(this,"chunks",[])}get(ue){if(!(ue>this.length-1||ue<0)){var ye=ue%this.chunkSize,qe=ue/this.chunkSize|0;return this.getter(qe)[ye]}}setDataGetter(ue){this.getter=ue}cacheLength(){var ue=new XMLHttpRequest;if(ue.open("HEAD",u,!1),ue.send(null),!(ue.status>=200&&ue.status<300||ue.status===304))throw new Error("Couldn't load "+u+". Status: "+ue.status);var ye=Number(ue.getResponseHeader("Content-length")),qe,mt=(qe=ue.getResponseHeader("Accept-Ranges"))&&qe==="bytes",lt=(qe=ue.getResponseHeader("Content-Encoding"))&&qe==="gzip",Dt=1024*1024;mt||(Dt=ye);var xt=(Ht,on)=>{if(Ht>on)throw new Error("invalid range ("+Ht+", "+on+") or no bytes requested!");if(on>ye-1)throw new Error("only "+ye+" bytes available! programmer error!");var Pt=new XMLHttpRequest;if(Pt.open("GET",u,!1),ye!==Dt&&Pt.setRequestHeader("Range","bytes="+Ht+"-"+on),Pt.responseType="arraybuffer",Pt.overrideMimeType&&Pt.overrideMimeType("text/plain; charset=x-user-defined"),Pt.send(null),!(Pt.status>=200&&Pt.status<300||Pt.status===304))throw new Error("Couldn't load "+u+". Status: "+Pt.status);return Pt.response!==void 0?new Uint8Array(Pt.response||[]):tt(Pt.responseText||"")},Kt=this;Kt.setDataGetter(Ht=>{var on=Ht*Dt,Pt=(Ht+1)*Dt-1;if(Pt=Math.min(Pt,ye-1),typeof Kt.chunks[Ht]>"u"&&(Kt.chunks[Ht]=xt(on,Pt)),typeof Kt.chunks[Ht]>"u")throw new Error("doXHR failed!");return Kt.chunks[Ht]}),(lt||!ye)&&(Dt=ye=1,ye=this.getter(0).length,Dt=ye,N("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=ye,this._chunkSize=Dt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!r)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var T=new M,C={isDevice:!1,contents:T}}else var C={isDevice:!1,url:u};var U=w.createFile(s,a,C,f,v);C.contents?U.contents=C.contents:C.url&&(U.contents=null,U.url=C.url),Object.defineProperties(U,{usedBytes:{get:function(){return this.contents.length}}});var W={},te=Object.keys(U.stream_ops);te.forEach(ge=>{var ue=U.stream_ops[ge];W[ge]=(...ye)=>(w.forceLoadFile(U),ue(...ye))});function le(ge,ue,ye,qe,mt){var lt=ge.node.contents;if(mt>=lt.length)return 0;var Dt=Math.min(lt.length-mt,qe);if(L(Dt>=0),lt.slice)for(var xt=0;xt<Dt;xt++)ue[ye+xt]=lt[mt+xt];else for(var xt=0;xt<Dt;xt++)ue[ye+xt]=lt.get(mt+xt);return Dt}return W.read=(ge,ue,ye,qe,mt)=>(w.forceLoadFile(U),le(ge,ue,ye,qe,mt)),W.mmap=(ge,ue,ye,qe,mt)=>{w.forceLoadFile(U);var lt=_t();if(!lt)throw new w.ErrnoError(48);return le(ge,oe,lt,ue,ye),{ptr:lt,allocated:!0}},U.stream_ops=W,U},absolutePath(){fe("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){fe("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){fe("FS.createLink has been removed; use FS.symlink instead")},joinPath(){fe("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){fe("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){fe("FS.standardizePath has been removed; use PATH.normalize instead")}},gt={DEFAULT_POLLMASK:5,calculateAt(s,a,u){if(Y.isAbs(a))return a;var f;if(s===-100)f=w.cwd();else{var v=gt.getStreamFromFD(s);f=v.path}if(a.length==0){if(!u)throw new w.ErrnoError(44);return f}return f+"/"+a},writeStat(s,a){pe[s>>2]=a.dev,pe[s+4>>2]=a.mode,Me[s+8>>2]=a.nlink,pe[s+12>>2]=a.uid,pe[s+16>>2]=a.gid,pe[s+20>>2]=a.rdev,X[s+24>>3]=BigInt(a.size),pe[s+32>>2]=4096,pe[s+36>>2]=a.blocks;var u=a.atime.getTime(),f=a.mtime.getTime(),v=a.ctime.getTime();return X[s+40>>3]=BigInt(Math.floor(u/1e3)),Me[s+48>>2]=u%1e3*1e3*1e3,X[s+56>>3]=BigInt(Math.floor(f/1e3)),Me[s+64>>2]=f%1e3*1e3*1e3,X[s+72>>3]=BigInt(Math.floor(v/1e3)),Me[s+80>>2]=v%1e3*1e3*1e3,X[s+88>>3]=BigInt(a.ino),0},writeStatFs(s,a){pe[s+4>>2]=a.bsize,pe[s+40>>2]=a.bsize,pe[s+8>>2]=a.blocks,pe[s+12>>2]=a.bfree,pe[s+16>>2]=a.bavail,pe[s+20>>2]=a.files,pe[s+24>>2]=a.ffree,pe[s+28>>2]=a.fsid,pe[s+44>>2]=a.flags,pe[s+36>>2]=a.namelen},doMsync(s,a,u,f,v){if(!w.isFile(a.node.mode))throw new w.ErrnoError(43);if(f&2)return 0;var M=ve.slice(s,s+u);w.msync(a,M,v,u,f)},getStreamFromFD(s){var a=w.getStreamChecked(s);return a},varargs:void 0,getStr(s){var a=dt(s);return a}};function wi(s,a,u){try{var f=gt.getStreamFromFD(s);if(L(!u),f.fd===a)return-28;if(a<0||a>=w.MAX_OPEN_FDS)return-8;var v=w.getStream(a);return v&&w.close(v),w.dupStream(f,a).fd}catch(M){if(typeof w>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}var Yt=()=>{L(gt.varargs!=null);var s=pe[+gt.varargs>>2];return gt.varargs+=4,s},sn=Yt;function On(s,a,u){gt.varargs=u;try{var f=gt.getStreamFromFD(s);switch(a){case 0:{var v=Yt();if(v<0)return-28;for(;w.streams[v];)v++;var M;return M=w.dupStream(f,v),M.fd}case 1:case 2:return 0;case 3:return f.flags;case 4:{var v=Yt();return f.flags|=v,0}case 12:{var v=sn(),T=0;return Ue[v+T>>1]=2,0}case 13:case 14:return 0}return-28}catch(C){if(typeof w>"u"||C.name!=="ErrnoError")throw C;return-C.errno}}function gs(s,a){try{return gt.writeStat(a,w.fstat(s))}catch(u){if(typeof w>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function af(s,a,u){gt.varargs=u;try{var f=gt.getStreamFromFD(s);switch(a){case 21509:return f.tty?0:-59;case 21505:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcgets){var v=f.tty.ops.ioctl_tcgets(f),M=sn();pe[M>>2]=v.c_iflag||0,pe[M+4>>2]=v.c_oflag||0,pe[M+8>>2]=v.c_cflag||0,pe[M+12>>2]=v.c_lflag||0;for(var T=0;T<32;T++)oe[M+T+17]=v.c_cc[T]||0;return 0}return 0}case 21510:case 21511:case 21512:return f.tty?0:-59;case 21506:case 21507:case 21508:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcsets){for(var M=sn(),C=pe[M>>2],U=pe[M+4>>2],W=pe[M+8>>2],te=pe[M+12>>2],le=[],T=0;T<32;T++)le.push(oe[M+T+17]);return f.tty.ops.ioctl_tcsets(f.tty,a,{c_iflag:C,c_oflag:U,c_cflag:W,c_lflag:te,c_cc:le})}return 0}case 21519:{if(!f.tty)return-59;var M=sn();return pe[M>>2]=0,0}case 21520:return f.tty?-28:-59;case 21531:{var M=sn();return w.ioctl(f,a,M)}case 21523:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tiocgwinsz){var ge=f.tty.ops.ioctl_tiocgwinsz(f.tty),M=sn();Ue[M>>1]=ge[0],Ue[M+2>>1]=ge[1]}return 0}case 21524:return f.tty?0:-59;case 21515:return f.tty?0:-59;default:return-28}}catch(ue){if(typeof w>"u"||ue.name!=="ErrnoError")throw ue;return-ue.errno}}function cf(s,a){try{return s=gt.getStr(s),gt.writeStat(a,w.lstat(s))}catch(u){if(typeof w>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function lf(s,a,u,f){try{a=gt.getStr(a);var v=f&256,M=f&4096;return f=f&-6401,L(!f,`unknown flags in __syscall_newfstatat: ${f}`),a=gt.calculateAt(s,a,M),gt.writeStat(u,v?w.lstat(a):w.stat(a))}catch(T){if(typeof w>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function uf(s,a,u,f){gt.varargs=f;try{a=gt.getStr(a),a=gt.calculateAt(s,a);var v=f?Yt():0;return w.open(a,u,v).fd}catch(M){if(typeof w>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function hf(s,a){try{return s=gt.getStr(s),gt.writeStat(a,w.stat(s))}catch(u){if(typeof w>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}var df=()=>fe("native code called abort()"),kt=s=>{for(var a="";;){var u=ve[s++];if(!u)return a;a+=String.fromCharCode(u)}},Ki={},Ti={},vs={},kr=class extends Error{constructor(a){super(a),this.name="BindingError"}},vt=s=>{throw new kr(s)};function ff(s,a,u={}){var f=a.name;if(s||vt(`type "${f}" must have a positive integer typeid pointer`),Ti.hasOwnProperty(s)){if(u.ignoreDuplicateRegistrations)return;vt(`Cannot register type '${f}' twice`)}if(Ti[s]=a,delete vs[s],Ki.hasOwnProperty(s)){var v=Ki[s];delete Ki[s],v.forEach(M=>M())}}function xn(s,a,u={}){if(a.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return ff(s,a,u)}var Sl=(s,a,u)=>{switch(a){case 1:return u?f=>oe[f]:f=>ve[f];case 2:return u?f=>Ue[f>>1]:f=>be[f>>1];case 4:return u?f=>pe[f>>2]:f=>Me[f>>2];case 8:return u?f=>X[f>>3]:f=>he[f>>3];default:throw new TypeError(`invalid integer width (${a}): ${s}`)}},Ai=s=>{if(s===null)return"null";var a=typeof s;return a==="object"||a==="array"||a==="function"?s.toString():""+s},Ml=(s,a,u,f)=>{if(a<u||a>f)throw new TypeError(`Passing a number "${Ai(a)}" from JS side to C/C++ side to an argument of type "${s}", which is outside the valid range [${u}, ${f}]!`)},pf=(s,a,u,f,v)=>{a=kt(a);const M=f===0n;let T=C=>C;if(M){const C=u*8;T=U=>BigInt.asUintN(C,U),v=T(v)}xn(s,{name:a,fromWireType:T,toWireType:(C,U)=>{if(typeof U=="number")U=BigInt(U);else if(typeof U!="bigint")throw new TypeError(`Cannot convert "${Ai(U)}" to ${this.name}`);return Ml(a,U,f,v),U},argPackAdvance:Bn,readValueFromPointer:Sl(a,u,!M),destructorFunction:null})},Bn=8,mf=(s,a,u,f)=>{a=kt(a),xn(s,{name:a,fromWireType:function(v){return!!v},toWireType:function(v,M){return M?u:f},argPackAdvance:Bn,readValueFromPointer:function(v){return this.fromWireType(ve[v])},destructorFunction:null})},_f=s=>({count:s.count,deleteScheduled:s.deleteScheduled,preservePointerOnDelete:s.preservePointerOnDelete,ptr:s.ptr,ptrType:s.ptrType,smartPtr:s.smartPtr,smartPtrType:s.smartPtrType}),Ko=s=>{function a(u){return u.$$.ptrType.registeredClass.name}vt(a(s)+" instance already deleted")},Jo=!1,El=s=>{},gf=s=>{s.smartPtr?s.smartPtrType.rawDestructor(s.smartPtr):s.ptrType.registeredClass.rawDestructor(s.ptr)},bl=s=>{s.count.value-=1;var a=s.count.value===0;a&&gf(s)},wl=(s,a,u)=>{if(a===u)return s;if(u.baseClass===void 0)return null;var f=wl(s,a,u.baseClass);return f===null?null:u.downcast(f)},Tl={},vf={},yf=(s,a)=>{for(a===void 0&&vt("ptr should not be undefined");s.baseClass;)a=s.upcast(a),s=s.baseClass;return a},xf=(s,a)=>(a=yf(s,a),vf[a]),Sf=class extends Error{constructor(a){super(a),this.name="InternalError"}},ys=s=>{throw new Sf(s)},xs=(s,a)=>{(!a.ptrType||!a.ptr)&&ys("makeClassHandle requires ptr and ptrType");var u=!!a.smartPtrType,f=!!a.smartPtr;return u!==f&&ys("Both smartPtrType and smartPtr must be specified"),a.count={value:1},zr(Object.create(s,{$$:{value:a,writable:!0}}))};function Al(s){var a=this.getPointee(s);if(!a)return this.destructor(s),null;var u=xf(this.registeredClass,a);if(u!==void 0){if(u.$$.count.value===0)return u.$$.ptr=a,u.$$.smartPtr=s,u.clone();var f=u.clone();return this.destructor(s),f}function v(){return this.isSmartPointer?xs(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:a,smartPtrType:this,smartPtr:s}):xs(this.registeredClass.instancePrototype,{ptrType:this,ptr:s})}var M=this.registeredClass.getActualType(a),T=Tl[M];if(!T)return v.call(this);var C;this.isConst?C=T.constPointerType:C=T.pointerType;var U=wl(a,this.registeredClass,C.registeredClass);return U===null?v.call(this):this.isSmartPointer?xs(C.registeredClass.instancePrototype,{ptrType:C,ptr:U,smartPtrType:this,smartPtr:s}):xs(C.registeredClass.instancePrototype,{ptrType:C,ptr:U})}var zr=s=>typeof FinalizationRegistry>"u"?(zr=a=>a,s):(Jo=new FinalizationRegistry(a=>{console.warn(a.leakWarning),bl(a.$$)}),zr=a=>{var u=a.$$,f=!!u.smartPtr;if(f){var v={$$:u},M=u.ptrType.registeredClass,T=new Error(`Embind found a leaked C++ instance ${M.name} <${_e(u.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(T,Al),v.leakWarning=T.stack.replace(/^Error: /,""),Jo.register(a,v,a)}return a},El=a=>Jo.unregister(a),zr(s)),Mf=()=>{let s=Ss.prototype;Object.assign(s,{isAliasOf(u){if(!(this instanceof Ss)||!(u instanceof Ss))return!1;var f=this.$$.ptrType.registeredClass,v=this.$$.ptr;u.$$=u.$$;for(var M=u.$$.ptrType.registeredClass,T=u.$$.ptr;f.baseClass;)v=f.upcast(v),f=f.baseClass;for(;M.baseClass;)T=M.upcast(T),M=M.baseClass;return f===M&&v===T},clone(){if(this.$$.ptr||Ko(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var u=zr(Object.create(Object.getPrototypeOf(this),{$$:{value:_f(this.$$)}}));return u.$$.count.value+=1,u.$$.deleteScheduled=!1,u},delete(){this.$$.ptr||Ko(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vt("Object already scheduled for deletion"),El(this),bl(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Ko(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const a=Symbol.dispose;a&&(s[a]=s.delete)};function Ss(){}var Ms=(s,a)=>Object.defineProperty(a,"name",{value:s}),Qo=(s,a,u)=>{if(s[a].overloadTable===void 0){var f=s[a];s[a]=function(...v){return s[a].overloadTable.hasOwnProperty(v.length)||vt(`Function '${u}' called with an invalid number of arguments (${v.length}) - expects one of (${s[a].overloadTable})!`),s[a].overloadTable[v.length].apply(this,v)},s[a].overloadTable=[],s[a].overloadTable[f.argCount]=f}},ea=(s,a,u)=>{t.hasOwnProperty(s)?((u===void 0||t[s].overloadTable!==void 0&&t[s].overloadTable[u]!==void 0)&&vt(`Cannot register public name '${s}' twice`),Qo(t,s,s),t[s].overloadTable.hasOwnProperty(u)&&vt(`Cannot register multiple overloads of a function with the same number of arguments (${u})!`),t[s].overloadTable[u]=a):(t[s]=a,t[s].argCount=u)},Ef=48,bf=57,wf=s=>{L(typeof s=="string"),s=s.replace(/[^a-zA-Z0-9_]/g,"$");var a=s.charCodeAt(0);return a>=Ef&&a<=bf?`_${s}`:s};function Tf(s,a,u,f,v,M,T,C){this.name=s,this.constructor=a,this.instancePrototype=u,this.rawDestructor=f,this.baseClass=v,this.getActualType=M,this.upcast=T,this.downcast=C,this.pureVirtualFunctions=[]}var Es=(s,a,u)=>{for(;a!==u;)a.upcast||vt(`Expected null or instance of ${u.name}, got an instance of ${a.name}`),s=a.upcast(s),a=a.baseClass;return s};function Af(s,a){if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),0;a.$$||vt(`Cannot pass "${Ai(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`);var u=a.$$.ptrType.registeredClass,f=Es(a.$$.ptr,u,this.registeredClass);return f}function Cf(s,a){var u;if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),this.isSmartPointer?(u=this.rawConstructor(),s!==null&&s.push(this.rawDestructor,u),u):0;(!a||!a.$$)&&vt(`Cannot pass "${Ai(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&a.$$.ptrType.isConst&&vt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);var f=a.$$.ptrType.registeredClass;if(u=Es(a.$$.ptr,f,this.registeredClass),this.isSmartPointer)switch(a.$$.smartPtr===void 0&&vt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:a.$$.smartPtrType===this?u=a.$$.smartPtr:vt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:u=a.$$.smartPtr;break;case 2:if(a.$$.smartPtrType===this)u=a.$$.smartPtr;else{var v=a.clone();u=this.rawShare(u,zt.toHandle(()=>v.delete())),s!==null&&s.push(this.rawDestructor,u)}break;default:vt("Unsupporting sharing policy")}return u}function Rf(s,a){if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),0;a.$$||vt(`Cannot pass "${Ai(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`),a.$$.ptrType.isConst&&vt(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);var u=a.$$.ptrType.registeredClass,f=Es(a.$$.ptr,u,this.registeredClass);return f}function bs(s){return this.fromWireType(Me[s>>2])}var Pf=()=>{Object.assign(ws.prototype,{getPointee(s){return this.rawGetPointee&&(s=this.rawGetPointee(s)),s},destructor(s){var a;(a=this.rawDestructor)==null||a.call(this,s)},argPackAdvance:Bn,readValueFromPointer:bs,fromWireType:Al})};function ws(s,a,u,f,v,M,T,C,U,W,te){this.name=s,this.registeredClass=a,this.isReference=u,this.isConst=f,this.isSmartPointer=v,this.pointeeType=M,this.sharingPolicy=T,this.rawGetPointee=C,this.rawConstructor=U,this.rawShare=W,this.rawDestructor=te,!v&&a.baseClass===void 0?f?(this.toWireType=Af,this.destructorFunction=null):(this.toWireType=Rf,this.destructorFunction=null):this.toWireType=Cf}var Cl=(s,a,u)=>{t.hasOwnProperty(s)||ys("Replacing nonexistent public symbol"),t[s].overloadTable!==void 0&&u!==void 0?t[s].overloadTable[u]=a:(t[s]=a,t[s].argCount=u)},Rl=[],Ts,Se=s=>{var a=Rl[s];return a||(Rl[s]=a=Ts.get(s)),L(Ts.get(s)==a,"JavaScript-side Wasm function table mirror is out of date!"),a},kn=(s,a,u=!1)=>{L(!u,"Async bindings are only supported with JSPI."),s=kt(s);function f(){var M=Se(a);return M}var v=f();return typeof v!="function"&&vt(`unknown function pointer with signature ${s}: ${a}`),v};class Df extends Error{}var Pl=s=>{var a=ql(s),u=kt(a);return Hn(a),u},Ci=(s,a)=>{var u=[],f={};function v(M){if(!f[M]&&!Ti[M]){if(vs[M]){vs[M].forEach(v);return}u.push(M),f[M]=!0}}throw a.forEach(v),new Df(`${s}: `+u.map(Pl).join([", "]))},Rn=(s,a,u)=>{s.forEach(C=>vs[C]=a);function f(C){var U=u(C);U.length!==s.length&&ys("Mismatched type converter count");for(var W=0;W<s.length;++W)xn(s[W],U[W])}var v=new Array(a.length),M=[],T=0;a.forEach((C,U)=>{Ti.hasOwnProperty(C)?v[U]=Ti[C]:(M.push(C),Ki.hasOwnProperty(C)||(Ki[C]=[]),Ki[C].push(()=>{v[U]=Ti[C],++T,T===M.length&&f(v)}))}),M.length===0&&f(v)},Lf=(s,a,u,f,v,M,T,C,U,W,te,le,ge)=>{te=kt(te),M=kn(v,M),C&&(C=kn(T,C)),W&&(W=kn(U,W)),ge=kn(le,ge);var ue=wf(te);ea(ue,function(){Ci(`Cannot construct ${te} due to unbound types`,[f])}),Rn([s,a,u],f?[f]:[],ye=>{var Pt;ye=ye[0];var qe,mt;f?(qe=ye.registeredClass,mt=qe.instancePrototype):mt=Ss.prototype;var lt=Ms(te,function(...li){if(Object.getPrototypeOf(this)!==Dt)throw new kr(`Use 'new' to construct ${te}`);if(xt.constructor_body===void 0)throw new kr(`${te} has no accessible constructor`);var Ns=xt.constructor_body[li.length];if(Ns===void 0)throw new kr(`Tried to invoke ctor of ${te} with invalid number of parameters (${li.length}) - expected (${Object.keys(xt.constructor_body).toString()}) parameters instead!`);return Ns.apply(this,li)}),Dt=Object.create(mt,{constructor:{value:lt}});lt.prototype=Dt;var xt=new Tf(te,lt,Dt,ge,qe,M,C,W);xt.baseClass&&((Pt=xt.baseClass).__derivedClasses??(Pt.__derivedClasses=[]),xt.baseClass.__derivedClasses.push(xt));var Kt=new ws(te,xt,!0,!1,!1),Ht=new ws(te+"*",xt,!1,!1,!1),on=new ws(te+" const*",xt,!1,!0,!1);return Tl[s]={pointerType:Ht,constPointerType:on},Cl(ue,lt),[Kt,Ht,on]})},ta=s=>{for(;s.length;){var a=s.pop(),u=s.pop();u(a)}};function Dl(s){for(var a=1;a<s.length;++a)if(s[a]!==null&&s[a].destructorFunction===void 0)return!0;return!1}function If(s,a,u,f,v){if(s<a||s>u){var M=a==u?a:`${a} to ${u}`;v(`function ${f} called with ${s} arguments, expected ${M}`)}}function Nf(s,a,u,f){var v=Dl(s),M=s.length-2,T=[],C=["fn"];a&&C.push("thisWired");for(var U=0;U<M;++U)T.push(`arg${U}`),C.push(`arg${U}Wired`);T=T.join(","),C=C.join(",");var W=`return function (${T}) {
`;W+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,v&&(W+=`var destructors = [];
`);var te=v?"destructors":"null",le=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];a&&(W+=`var thisWired = classParam['toWireType'](${te}, this);
`);for(var U=0;U<M;++U)W+=`var arg${U}Wired = argType${U}['toWireType'](${te}, arg${U});
`,le.push(`argType${U}`);if(W+=(u||f?"var rv = ":"")+`invoker(${C});
`,v)W+=`runDestructors(destructors);
`;else for(var U=a?1:2;U<s.length;++U){var ge=U===1?"thisWired":"arg"+(U-2)+"Wired";s[U].destructorFunction!==null&&(W+=`${ge}_dtor(${ge});
`,le.push(`${ge}_dtor`))}return u&&(W+=`var ret = retType['fromWireType'](rv);
return ret;
`),W+=`}
`,le.push("checkArgCount","minArgs","maxArgs"),W=`if (arguments.length !== ${le.length}){ throw new Error(humanName + "Expected ${le.length} closure arguments " + arguments.length + " given."); }
${W}`,[le,W]}function Ff(s){for(var a=s.length-2,u=s.length-1;u>=2&&s[u].optional;--u)a--;return a}function As(s,a,u,f,v,M){var T=a.length;T<2&&vt("argTypes array size mismatch! Must at least get return value and 'this' types!"),L(!M,"Async bindings are only supported with JSPI.");for(var C=a[1]!==null&&u!==null,U=Dl(a),W=a[0].name!=="void",te=T-2,le=Ff(a),ge=[s,vt,f,v,ta,a[0],a[1]],ue=0;ue<T-2;++ue)ge.push(a[ue+2]);if(!U)for(var ue=C?1:2;ue<a.length;++ue)a[ue].destructorFunction!==null&&ge.push(a[ue].destructorFunction);ge.push(If,le,te);let[ye,qe]=Nf(a,C,W,M);var mt=new Function(...ye,qe)(...ge);return Ms(s,mt)}var Cs=(s,a)=>{for(var u=[],f=0;f<s;f++)u.push(Me[a+f*4>>2]);return u},na=s=>{s=s.trim();const a=s.indexOf("(");return a===-1?s:(L(s.endsWith(")"),"Parentheses for argument names should match."),s.slice(0,a))},Uf=(s,a,u,f,v,M,T,C,U)=>{var W=Cs(u,f);a=kt(a),a=na(a),M=kn(v,M,C),Rn([],[s],te=>{te=te[0];var le=`${te.name}.${a}`;function ge(){Ci(`Cannot call ${le} due to unbound types`,W)}a.startsWith("@@")&&(a=Symbol[a.substring(2)]);var ue=te.registeredClass.constructor;return ue[a]===void 0?(ge.argCount=u-1,ue[a]=ge):(Qo(ue,a,le),ue[a].overloadTable[u-1]=ge),Rn([],W,ye=>{var qe=[ye[0],null].concat(ye.slice(1)),mt=As(le,qe,null,M,T,C);if(ue[a].overloadTable===void 0?(mt.argCount=u-1,ue[a]=mt):ue[a].overloadTable[u-1]=mt,te.registeredClass.__derivedClasses)for(const lt of te.registeredClass.__derivedClasses)lt.constructor.hasOwnProperty(a)||(lt.constructor[a]=mt);return[]}),[]})},Of=(s,a,u,f,v,M)=>{L(a>0);var T=Cs(a,u);v=kn(f,v),Rn([],[s],C=>{C=C[0];var U=`constructor ${C.name}`;if(C.registeredClass.constructor_body===void 0&&(C.registeredClass.constructor_body=[]),C.registeredClass.constructor_body[a-1]!==void 0)throw new kr(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${C.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return C.registeredClass.constructor_body[a-1]=()=>{Ci(`Cannot construct ${C.name} due to unbound types`,T)},Rn([],T,W=>(W.splice(1,0,null),C.registeredClass.constructor_body[a-1]=As(U,W,null,v,M),[])),[]})},Bf=(s,a,u,f,v,M,T,C,U,W)=>{var te=Cs(u,f);a=kt(a),a=na(a),M=kn(v,M,U),Rn([],[s],le=>{le=le[0];var ge=`${le.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]),C&&le.registeredClass.pureVirtualFunctions.push(a);function ue(){Ci(`Cannot call ${ge} due to unbound types`,te)}var ye=le.registeredClass.instancePrototype,qe=ye[a];return qe===void 0||qe.overloadTable===void 0&&qe.className!==le.name&&qe.argCount===u-2?(ue.argCount=u-2,ue.className=le.name,ye[a]=ue):(Qo(ye,a,ge),ye[a].overloadTable[u-2]=ue),Rn([],te,mt=>{var lt=As(ge,mt,le,M,T,U);return ye[a].overloadTable===void 0?(lt.argCount=u-2,ye[a]=lt):ye[a].overloadTable[u-2]=lt,[]}),[]})},Ll=(s,a,u)=>(s instanceof Object||vt(`${u} with invalid "this": ${s}`),s instanceof a.registeredClass.constructor||vt(`${u} incompatible with "this" of type ${s.constructor.name}`),s.$$.ptr||vt(`cannot call emscripten binding method ${u} on deleted object`),Es(s.$$.ptr,s.$$.ptrType.registeredClass,a.registeredClass)),kf=(s,a,u,f,v,M,T,C,U,W)=>{a=kt(a),v=kn(f,v),Rn([],[s],te=>{te=te[0];var le=`${te.name}.${a}`,ge={get(){Ci(`Cannot access ${le} due to unbound types`,[u,T])},enumerable:!0,configurable:!0};return U?ge.set=()=>Ci(`Cannot access ${le} due to unbound types`,[u,T]):ge.set=ue=>vt(le+" is a read-only property"),Object.defineProperty(te.registeredClass.instancePrototype,a,ge),Rn([],U?[u,T]:[u],ue=>{var ye=ue[0],qe={get(){var lt=Ll(this,te,le+" getter");return ye.fromWireType(v(M,lt))},enumerable:!0};if(U){U=kn(C,U);var mt=ue[1];qe.set=function(lt){var Dt=Ll(this,te,le+" setter"),xt=[];U(W,Dt,mt.toWireType(xt,lt)),ta(xt)}}return Object.defineProperty(te.registeredClass.instancePrototype,a,qe),[]}),[]})},zf=(s,a,u)=>{s=kt(s),Rn([],[a],f=>(f=f[0],t[s]=f.fromWireType(u),[]))},Il=[],zn=[0,1,,1,null,1,!0,1,!1,1],ia=s=>{s>9&&--zn[s+1]===0&&(L(zn[s]!==void 0,"Decref for unallocated handle."),zn[s]=void 0,Il.push(s))},zt={toValue:s=>(s||vt(`Cannot use deleted val. handle = ${s}`),L(s===2||zn[s]!==void 0&&s%2===0,`invalid handle: ${s}`),zn[s]),toHandle:s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const a=Il.pop()||zn.length;return zn[a]=s,zn[a+1]=1,a}}}},Nl={name:"emscripten::val",fromWireType:s=>{var a=zt.toValue(s);return ia(s),a},toWireType:(s,a)=>zt.toHandle(a),argPackAdvance:Bn,readValueFromPointer:bs,destructorFunction:null},Fl=s=>xn(s,Nl),Hf=(s,a,u)=>{switch(a){case 1:return u?function(f){return this.fromWireType(oe[f])}:function(f){return this.fromWireType(ve[f])};case 2:return u?function(f){return this.fromWireType(Ue[f>>1])}:function(f){return this.fromWireType(be[f>>1])};case 4:return u?function(f){return this.fromWireType(pe[f>>2])}:function(f){return this.fromWireType(Me[f>>2])};default:throw new TypeError(`invalid integer width (${a}): ${s}`)}},Vf=(s,a,u,f)=>{a=kt(a);function v(){}v.values={},xn(s,{name:a,constructor:v,fromWireType:function(M){return this.constructor.values[M]},toWireType:(M,T)=>T.value,argPackAdvance:Bn,readValueFromPointer:Hf(a,u,f),destructorFunction:null}),ea(a,v)},Rs=(s,a)=>{var u=Ti[s];return u===void 0&&vt(`${a} has unknown type ${Pl(s)}`),u},Gf=(s,a,u)=>{var f=Rs(s,"enum");a=kt(a);var v=f.constructor,M=Object.create(f.constructor.prototype,{value:{value:u},constructor:{value:Ms(`${f.name}_${a}`,function(){})}});v.values[u]=M,v[a]=M},Wf=(s,a)=>{switch(a){case 4:return function(u){return this.fromWireType(Je[u>>2])};case 8:return function(u){return this.fromWireType(ct[u>>3])};default:throw new TypeError(`invalid float width (${a}): ${s}`)}},Xf=(s,a,u)=>{a=kt(a),xn(s,{name:a,fromWireType:f=>f,toWireType:(f,v)=>{if(typeof v!="number"&&typeof v!="boolean")throw new TypeError(`Cannot convert ${Ai(v)} to ${this.name}`);return v},argPackAdvance:Bn,readValueFromPointer:Wf(a,u),destructorFunction:null})},$f=(s,a,u,f,v,M,T,C)=>{var U=Cs(a,u);s=kt(s),s=na(s),v=kn(f,v,T),ea(s,function(){Ci(`Cannot call ${s} due to unbound types`,U)},a-1),Rn([],U,W=>{var te=[W[0],null].concat(W.slice(1));return Cl(s,As(s,te,null,v,M,T),a-1),[]})},jf=(s,a,u,f,v)=>{a=kt(a);const M=f===0;let T=U=>U;if(M){var C=32-8*u;T=U=>U<<C>>>C,v=T(v)}xn(s,{name:a,fromWireType:T,toWireType:(U,W)=>{if(typeof W!="number"&&typeof W!="boolean")throw new TypeError(`Cannot convert "${Ai(W)}" to ${a}`);return Ml(a,W,f,v),W},argPackAdvance:Bn,readValueFromPointer:Sl(a,u,f!==0),destructorFunction:null})},Yf=(s,a,u)=>{var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],v=f[a];function M(T){var C=Me[T>>2],U=Me[T+4>>2];return new v(oe.buffer,U,C)}u=kt(u),xn(s,{name:u,fromWireType:M,argPackAdvance:Bn,readValueFromPointer:M},{ignoreDuplicateRegistrations:!0})},qf=Object.assign({optional:!0},Nl),Zf=(s,a)=>{xn(s,qf)},Ri=(s,a,u)=>(L(typeof u=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),je(s,ve,a,u)),Kf=(s,a)=>{a=kt(a),xn(s,{name:a,fromWireType(u){for(var f=Me[u>>2],v=u+4,M,T,C=v,T=0;T<=f;++T){var U=v+T;if(T==f||ve[U]==0){var W=U-C,te=dt(C,W);M===void 0?M=te:(M+="\0",M+=te),C=U+1}}return Hn(u),M},toWireType(u,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var v,M=typeof f=="string";M||ArrayBuffer.isView(f)&&f.BYTES_PER_ELEMENT==1||vt("Cannot pass non-string to std::string"),M?v=Xe(f):v=f.length;var T=oa(4+v+1),C=T+4;return Me[T>>2]=v,M?Ri(f,C,v+1):ve.set(f,C),u!==null&&u.push(Hn,T),T},argPackAdvance:Bn,readValueFromPointer:bs,destructorFunction(u){Hn(u)}})},Ul=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Jf=(s,a)=>{L(s%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var u=s>>1,f=u+a/2,v=u;!(v>=f)&&be[v];)++v;if(v-u>16&&Ul)return Ul.decode(be.subarray(u,v));for(var M="",T=u;!(T>=f);++T){var C=be[T];if(C==0)break;M+=String.fromCharCode(C)}return M},Qf=(s,a,u)=>{if(L(a%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),L(typeof u=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??(u=2147483647),u<2)return 0;u-=2;for(var f=a,v=u<s.length*2?u/2:s.length,M=0;M<v;++M){var T=s.charCodeAt(M);Ue[a>>1]=T,a+=2}return Ue[a>>1]=0,a-f},ep=s=>s.length*2,tp=(s,a)=>{L(s%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var u="",f=0;!(f>=a/4);f++){var v=pe[s+f*4>>2];if(!v)break;u+=String.fromCodePoint(v)}return u},np=(s,a,u)=>{if(L(a%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),L(typeof u=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??(u=2147483647),u<4)return 0;for(var f=a,v=f+u-4,M=0;M<s.length;++M){var T=s.codePointAt(M);if(T>65535&&M++,pe[a>>2]=T,a+=4,a+4>v)break}return pe[a>>2]=0,a-f},ip=s=>{for(var a=0,u=0;u<s.length;++u){var f=s.codePointAt(u);f>65535&&u++,a+=4}return a},rp=(s,a,u)=>{u=kt(u);var f,v,M,T;a===2?(f=Jf,v=Qf,T=ep,M=C=>be[C>>1]):a===4&&(f=tp,v=np,T=ip,M=C=>Me[C>>2]),xn(s,{name:u,fromWireType:C=>{for(var U=Me[C>>2],W,te=C+4,le=0;le<=U;++le){var ge=C+4+le*a;if(le==U||M(ge)==0){var ue=ge-te,ye=f(te,ue);W===void 0?W=ye:(W+="\0",W+=ye),te=ge+a}}return Hn(C),W},toWireType:(C,U)=>{typeof U!="string"&&vt(`Cannot pass non-string to C++ string type ${u}`);var W=T(U),te=oa(4+W+a);return Me[te>>2]=W/a,v(U,te+4,W+a),C!==null&&C.push(Hn,te),te},argPackAdvance:Bn,readValueFromPointer:bs,destructorFunction(C){Hn(C)}})},sp=(s,a)=>{Fl(s)},op=(s,a)=>{a=kt(a),xn(s,{isVoid:!0,name:a,argPackAdvance:0,fromWireType:()=>{},toWireType:(u,f)=>{}})},ap=()=>{throw new O},Ol=(s,a,u)=>{var f=[],v=s.toWireType(f,u);return f.length&&(Me[a>>2]=zt.toHandle(f)),v},cp=(s,a,u)=>(s=zt.toValue(s),a=Rs(a,"emval::as"),Ol(a,u,s)),Ps=[],lp=(s,a,u,f)=>(s=Ps[s],a=zt.toValue(a),s(null,a,u,f)),up={},ra=s=>{var a=up[s];return a===void 0?kt(s):a},hp=(s,a,u,f,v)=>(s=Ps[s],a=zt.toValue(a),u=ra(u),s(a,a[u],f,v)),Bl=()=>globalThis,dp=s=>s===0?zt.toHandle(Bl()):(s=ra(s),zt.toHandle(Bl()[s])),fp=s=>{var a=Ps.length;return Ps.push(s),a},pp=(s,a)=>{for(var u=new Array(s),f=0;f<s;++f)u[f]=Rs(Me[a+f*4>>2],`parameter ${f}`);return u},mp=(s,a,u)=>{var f=pp(s,a),v=f.shift();s--;var M=`return function (obj, func, destructorsRef, args) {
`,T=0,C=[];u===0&&C.push("obj");for(var U=["retType"],W=[v],te=0;te<s;++te)C.push(`arg${te}`),U.push(`argType${te}`),W.push(f[te]),M+=`  var arg${te} = argType${te}.readValueFromPointer(args${T?"+"+T:""});
`,T+=f[te].argPackAdvance;var le=u===1?"new func":"func.call";M+=`  var rv = ${le}(${C.join(", ")});
`,v.isVoid||(U.push("emval_returnValue"),W.push(Ol),M+=`  return emval_returnValue(retType, destructorsRef, rv);
`),M+=`};
`;var ge=new Function(...U,M)(...W),ue=`methodCaller<(${f.map(ye=>ye.name).join(", ")}) => ${v.name}>`;return fp(Ms(ue,ge))},_p=(s,a)=>(s=zt.toValue(s),a=zt.toValue(a),zt.toHandle(s[a])),gp=s=>{s>9&&(zn[s+1]+=1)},vp=s=>(s=zt.toValue(s),typeof s=="number"),yp=s=>(s=zt.toValue(s),typeof s=="string"),xp=()=>zt.toHandle([]),Sp=s=>zt.toHandle(ra(s)),Mp=s=>{var a=zt.toValue(s);ta(a),ia(s)},Ep=(s,a)=>{s=Rs(s,"_emval_take_value");var u=s.readValueFromPointer(a);return zt.toHandle(u)},bp=s=>{throw s=zt.toValue(s),s},wp=s=>s%4===0&&(s%100!==0||s%400===0),Tp=[0,31,60,91,121,152,182,213,244,274,305,335],Ap=[0,31,59,90,120,151,181,212,243,273,304,334],kl=s=>{var a=wp(s.getFullYear()),u=a?Tp:Ap,f=u[s.getMonth()]+s.getDate()-1;return f},Cp=9007199254740992,Rp=-9007199254740992,zl=s=>s<Rp||s>Cp?NaN:Number(s);function Pp(s,a){s=zl(s);var u=new Date(s*1e3);pe[a>>2]=u.getSeconds(),pe[a+4>>2]=u.getMinutes(),pe[a+8>>2]=u.getHours(),pe[a+12>>2]=u.getDate(),pe[a+16>>2]=u.getMonth(),pe[a+20>>2]=u.getFullYear()-1900,pe[a+24>>2]=u.getDay();var f=kl(u)|0;pe[a+28>>2]=f,pe[a+36>>2]=-(u.getTimezoneOffset()*60);var v=new Date(u.getFullYear(),0,1),M=new Date(u.getFullYear(),6,1).getTimezoneOffset(),T=v.getTimezoneOffset(),C=(M!=T&&u.getTimezoneOffset()==Math.min(T,M))|0;pe[a+32>>2]=C}var Dp=function(s){var a=(()=>{var u=new Date(pe[s+20>>2]+1900,pe[s+16>>2],pe[s+12>>2],pe[s+8>>2],pe[s+4>>2],pe[s>>2],0),f=pe[s+32>>2],v=u.getTimezoneOffset(),M=new Date(u.getFullYear(),0,1),T=new Date(u.getFullYear(),6,1).getTimezoneOffset(),C=M.getTimezoneOffset(),U=Math.min(C,T);if(f<0)pe[s+32>>2]=+(T!=C&&U==v);else if(f>0!=(U==v)){var W=Math.max(C,T),te=f>0?U:W;u.setTime(u.getTime()+(te-v)*6e4)}pe[s+24>>2]=u.getDay();var le=kl(u)|0;pe[s+28>>2]=le,pe[s>>2]=u.getSeconds(),pe[s+4>>2]=u.getMinutes(),pe[s+8>>2]=u.getHours(),pe[s+12>>2]=u.getDate(),pe[s+16>>2]=u.getMonth(),pe[s+20>>2]=u.getYear();var ge=u.getTime();return isNaN(ge)?-1:ge/1e3})();return BigInt(a)},Lp=(s,a,u,f)=>{var v=new Date().getFullYear(),M=new Date(v,0,1),T=new Date(v,6,1),C=M.getTimezoneOffset(),U=T.getTimezoneOffset(),W=Math.max(C,U);Me[s>>2]=W*60,pe[a>>2]=+(C!=U);var te=ue=>{var ye=ue>=0?"-":"+",qe=Math.abs(ue),mt=String(Math.floor(qe/60)).padStart(2,"0"),lt=String(qe%60).padStart(2,"0");return`UTC${ye}${mt}${lt}`},le=te(C),ge=te(U);L(le),L(ge),L(Xe(le)<=16,`timezone name truncated to fit in TZNAME_MAX (${le})`),L(Xe(ge)<=16,`timezone name truncated to fit in TZNAME_MAX (${ge})`),U<C?(Ri(le,u,17),Ri(ge,f,17)):(Ri(le,f,17),Ri(ge,u,17))},Hl=()=>performance.now(),Vl=()=>Date.now(),Ip=s=>s>=0&&s<=3;function Np(s,a,u){if(!Ip(s))return 28;var f;s===0?f=Vl():f=Hl();var v=Math.round(f*1e3*1e3);return X[u>>3]=BigInt(v),0}var Ds=[],Fp=(s,a)=>{L(Array.isArray(Ds)),L(a%16==0),Ds.length=0;for(var u;u=ve[s++];){var f=String.fromCharCode(u),v=["d","f","i","p"];v.push("j"),L(v.includes(f),`Invalid character ${u}("${f}") in readEmAsmArgs! Use only [${v}], and do not specify "v" for void return argument.`);var M=u!=105;M&=u!=112,a+=M&&a%8?4:0,Ds.push(u==112?Me[a>>2]:u==106?X[a>>3]:u==105?pe[a>>2]:ct[a>>3]),a+=M?8:4}return Ds},Up=(s,a,u)=>{var f=Fp(a,u);return L(Yl.hasOwnProperty(s),`No EM_ASM constant found at address ${s}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),Yl[s](...f)},Op=(s,a,u)=>Up(s,a,u),Gl=()=>2147483648,Bp=()=>Gl(),kp=(s,a)=>(L(a,"alignment argument is required"),Math.ceil(s/a)*a),zp=s=>{var a=ht.buffer,u=(s-a.byteLength+65535)/65536|0;try{return ht.grow(u),$e(),1}catch(f){P(`growMemory: Attempted to grow heap from ${a.byteLength} bytes to ${s} bytes, but got error: ${f}`)}},Hp=s=>{var a=ve.length;s>>>=0,L(s>a);var u=Gl();if(s>u)return P(`Cannot enlarge memory, requested ${s} bytes, but the limit is ${u} bytes!`),!1;for(var f=1;f<=4;f*=2){var v=a*(1+.2/f);v=Math.min(v,s+100663296);var M=Math.min(u,kp(Math.max(s,v),65536)),T=zp(M);if(T)return!0}return P(`Failed to grow the heap from ${a} bytes to ${M} bytes, not enough memory!`),!1},sa={},Vp=()=>h||"./this.program",Hr=()=>{if(!Hr.strings){var s=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:s,_:Vp()};for(var u in sa)sa[u]===void 0?delete a[u]:a[u]=sa[u];var f=[];for(var u in a)f.push(`${u}=${a[u]}`);Hr.strings=f}return Hr.strings},Gp=(s,a)=>{var u=0,f=0;for(var v of Hr()){var M=a+u;Me[s+f>>2]=M,u+=Ri(v,M,1/0)+1,f+=4}return 0},Wp=(s,a)=>{var u=Hr();Me[s>>2]=u.length;var f=0;for(var v of u)f+=Xe(v)+1;return Me[a>>2]=f,0},Wl=0,Xl=()=>ae||Wl>0,Xp=s=>{var a;Xl()||((a=t.onExit)==null||a.call(t,s),V=!0),d(s,new We(s))},$p=(s,a)=>{if(ig(),Xl()&&!a){var u=`program exited (with status: ${s}), but keepRuntimeAlive() is set (counter=${Wl}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Ke==null||Ke(u),P(u)}Xp(s)},jp=$p;function Yp(s){try{var a=gt.getStreamFromFD(s);return w.close(a),0}catch(u){if(typeof w>"u"||u.name!=="ErrnoError")throw u;return u.errno}}var qp=(s,a,u,f)=>{for(var v=0,M=0;M<u;M++){var T=Me[a>>2],C=Me[a+4>>2];a+=8;var U=w.read(s,oe,T,C,f);if(U<0)return-1;if(v+=U,U<C)break}return v};function Zp(s,a,u,f){try{var v=gt.getStreamFromFD(s),M=qp(v,a,u);return Me[f>>2]=M,0}catch(T){if(typeof w>"u"||T.name!=="ErrnoError")throw T;return T.errno}}function Kp(s,a,u,f){a=zl(a);try{if(isNaN(a))return 61;var v=gt.getStreamFromFD(s);return w.llseek(v,a,u),X[f>>3]=BigInt(v.position),v.getdents&&a===0&&u===0&&(v.getdents=null),0}catch(M){if(typeof w>"u"||M.name!=="ErrnoError")throw M;return M.errno}}var Jp=(s,a,u,f)=>{for(var v=0,M=0;M<u;M++){var T=Me[a>>2],C=Me[a+4>>2];a+=8;var U=w.write(s,oe,T,C,f);if(U<0)return-1;if(v+=U,U<C)break}return v};function Qp(s,a,u,f){try{var v=gt.getStreamFromFD(s),M=Jp(v,a,u);return Me[f>>2]=M,0}catch(T){if(typeof w>"u"||T.name!=="ErrnoError")throw T;return T.errno}}var em=s=>s,tm=s=>{var a=t["_"+s];return L(a,"Cannot call unknown function "+s+", make sure it is exported"),a},nm=(s,a)=>{L(s.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),oe.set(s,a)},Ls=s=>eu(s),im=s=>{var a=Xe(s)+1,u=Ls(a);return Ri(s,u,a),u},$l=(s,a,u,f,v)=>{var M={string:ye=>{var qe=0;return ye!=null&&ye!==0&&(qe=im(ye)),qe},array:ye=>{var qe=Ls(ye.length);return nm(ye,qe),qe}};function T(ye){return a==="string"?dt(ye):a==="boolean"?!!ye:ye}var C=tm(s),U=[],W=0;if(L(a!=="array",'Return type should not be "array".'),f)for(var te=0;te<f.length;te++){var le=M[u[te]];le?(W===0&&(W=K()),U[te]=le(f[te])):U[te]=f[te]}var ge=C(...U);function ue(ye){return W!==0&&J(W),T(ye)}return ge=ue(ge),ge},rm=(s,a,u,f)=>(...v)=>$l(s,a,u,v),sm=(...s)=>w.createPath(...s),om=(...s)=>w.unlink(...s),am=(...s)=>w.createLazyFile(...s),cm=(...s)=>w.createDevice(...s),lm=s=>Is(s),um=s=>la(s),hm=s=>{var a=K(),u=Ls(4),f=Ls(4);nu(s,u,f);var v=Me[u>>2],M=Me[f>>2],T=dt(v);Hn(v);var C;return M&&(C=dt(M),Hn(M)),J(a),[T,C]},jl=s=>hm(s);w.createPreloadedFile=yt,w.staticInit(),Mf(),Pf(),L(zn.length===10),t.noExitRuntime&&(ae=t.noExitRuntime),t.preloadPlugins&&(Ye=t.preloadPlugins),t.print&&(N=t.print),t.printErr&&(P=t.printErr),t.wasmBinary&&(A=t.wasmBinary),pm(),t.arguments&&t.arguments,t.thisProgram&&(h=t.thisProgram),L(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),L(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),L(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),L(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),L(typeof t.read>"u","Module.read option was removed"),L(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),L(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),L(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),L(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),L(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),L(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),L(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),L(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=ee,t.removeRunDependency=de,t.ccall=$l,t.cwrap=rm,t.FS_createPreloadedFile=yt,t.FS_unlink=om,t.FS_createPath=sm,t.FS_createDevice=cm,t.FS=w,t.FS_createDataFile=jt,t.FS_createLazyFile=am,t.MEMFS=Be;var dm=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];dm.forEach(Ce);var fm=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];fm.forEach(Le),t.incrementExceptionRefcount=lm,t.decrementExceptionRefcount=um,t.getExceptionMessage=jl;function pm(){ne("fetchSettings")}var Yl={667668:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(s){Object.defineProperty(t,s,{get:function(){return t["get_"+s]()},set:function(a){},enumerable:!0,configurable:!0})})}},ql=Q("___getTypeName"),oa=Q("_malloc"),aa=Q("_fflush"),Hn=Q("_free"),ca=Q("_emscripten_stack_get_end"),Zl=Q("_strerror"),xe=Q("_setThrew"),Kl=Q("__emscripten_tempret_set"),Jl=Q("_emscripten_stack_init"),Ql=Q("__emscripten_stack_restore"),eu=Q("__emscripten_stack_alloc"),tu=Q("_emscripten_stack_get_current"),la=Q("___cxa_decrement_exception_refcount"),Is=Q("___cxa_increment_exception_refcount"),nu=Q("___get_exception_message"),iu=Q("___cxa_can_catch"),ru=Q("___cxa_get_exception_ptr");function mm(s){ql=ce("__getTypeName",1),oa=ce("malloc",1),aa=ce("fflush",1),Hn=ce("free",1),ca=s.emscripten_stack_get_end,s.emscripten_stack_get_base,Zl=ce("strerror",1),xe=ce("setThrew",2),Kl=ce("_emscripten_tempret_set",1),Jl=s.emscripten_stack_init,s.emscripten_stack_get_free,Ql=s._emscripten_stack_restore,eu=s._emscripten_stack_alloc,tu=s.emscripten_stack_get_current,la=ce("__cxa_decrement_exception_refcount",1),Is=ce("__cxa_increment_exception_refcount",1),nu=ce("__get_exception_message",3),iu=ce("__cxa_can_catch",3),ru=ce("__cxa_get_exception_ptr",1)}var su={__assert_fail:dn,__cxa_begin_catch:ds,__cxa_current_primary_exception:jn,__cxa_end_catch:fs,__cxa_find_matching_catch_2:Zi,__cxa_find_matching_catch_3:ps,__cxa_find_matching_catch_4:ms,__cxa_rethrow:_s,__cxa_rethrow_primary_exception:qo,__cxa_throw:Zo,__cxa_uncaught_exceptions:D,__resumeException:$,__syscall_dup3:wi,__syscall_fcntl64:On,__syscall_fstat64:gs,__syscall_ioctl:af,__syscall_lstat64:cf,__syscall_newfstatat:lf,__syscall_openat:uf,__syscall_stat64:hf,_abort_js:df,_embind_register_bigint:pf,_embind_register_bool:mf,_embind_register_class:Lf,_embind_register_class_class_function:Uf,_embind_register_class_constructor:Of,_embind_register_class_function:Bf,_embind_register_class_property:kf,_embind_register_constant:zf,_embind_register_emval:Fl,_embind_register_enum:Vf,_embind_register_enum_value:Gf,_embind_register_float:Xf,_embind_register_function:$f,_embind_register_integer:jf,_embind_register_memory_view:Yf,_embind_register_optional:Zf,_embind_register_std_string:Kf,_embind_register_std_wstring:rp,_embind_register_user_type:sp,_embind_register_void:op,_emscripten_throw_longjmp:ap,_emval_as:cp,_emval_call:lp,_emval_call_method:hp,_emval_decref:ia,_emval_get_global:dp,_emval_get_method_caller:mp,_emval_get_property:_p,_emval_incref:gp,_emval_is_number:vp,_emval_is_string:yp,_emval_new_array:xp,_emval_new_cstring:Sp,_emval_run_destructors:Mp,_emval_take_value:Ep,_emval_throw:bp,_localtime_js:Pp,_mktime_js:Dp,_tzset_js:Lp,clock_time_get:Np,emscripten_asm_const_int:Op,emscripten_date_now:Vl,emscripten_get_heap_max:Bp,emscripten_get_now:Hl,emscripten_resize_heap:Hp,environ_get:Gp,environ_sizes_get:Wp,exit:jp,fd_close:Yp,fd_read:Zp,fd_seek:Kp,fd_write:Qp,invoke_ddd:V_,invoke_dddi:s_,invoke_dddidi:o_,invoke_ddidi:r_,invoke_di:a_,invoke_dii:qm,invoke_diii:Rm,invoke_diiii:i_,invoke_diiiidd:t_,invoke_diiiidi:Lm,invoke_diiiii:bm,invoke_diiiiii:Bm,invoke_diiiiiii:c_,invoke_diiiiiiiii:Um,invoke_diiiiiiiiiiii:Om,invoke_fiii:Q_,invoke_i:wm,invoke_id:O_,invoke_ii:vm,invoke_iid:v_,invoke_iidddd:j_,invoke_iidiii:$m,invoke_iidiiid:Wm,invoke_iidiiiiidi:jm,invoke_iif:$_,invoke_iii:_m,invoke_iiid:Ym,invoke_iiididdddddd:Xm,invoke_iiidiiiiiiii:Gm,invoke_iiii:Sm,invoke_iiiidddiiiii:u_,invoke_iiiii:Cm,invoke_iiiiid:C_,invoke_iiiiii:E_,invoke_iiiiiii:x_,invoke_iiiiiiii:g_,invoke_iiiiiiiidd:R_,invoke_iiiiiiiii:e_,invoke_iiiiiiiiii:S_,invoke_iiiiiiiiiidddiiiiiiiii:Vm,invoke_iiiiiiiiiii:J_,invoke_iiiiiiiiiiii:eg,invoke_iiiiiiiiiiiii:U_,invoke_iiij:M_,invoke_iiji:A_,invoke_j:Z_,invoke_ji:F_,invoke_jiiii:b_,invoke_jij:N_,invoke_v:xm,invoke_vi:ym,invoke_vid:y_,invoke_viddd:w_,invoke_vidddd:T_,invoke_vidi:n_,invoke_vidiii:zm,invoke_vii:Em,invoke_viid:Jm,invoke_viiddi:I_,invoke_viiddidi:L_,invoke_viiddii:l_,invoke_viidi:Km,invoke_viidii:Dm,invoke_viidiii:m_,invoke_viidiiid:f_,invoke_viidiiiii:Hm,invoke_viidiiiiidi:__,invoke_viidiiiiiiii:km,invoke_viii:gm,invoke_viiid:Nm,invoke_viiidd:D_,invoke_viiidi:Zm,invoke_viiididdddddd:p_,invoke_viiidiiiiiiii:d_,invoke_viiii:Am,invoke_viiiiddd:P_,invoke_viiiidi:G_,invoke_viiiifi:W_,invoke_viiiii:Mm,invoke_viiiiid:Im,invoke_viiiiii:Tm,invoke_viiiiiii:Pm,invoke_viiiiiiii:Qm,invoke_viiiiiiiiii:z_,invoke_viiiiiiiiiidddiiiiiiiii:h_,invoke_viiiiiiiiiiid:Fm,invoke_viiiiiiiiiiiii:k_,invoke_viiiiiiiiiiiiiii:tg,invoke_viiiiiiiiiiiiiiiiii:H_,invoke_viiiij:Y_,invoke_viij:q_,invoke_viijii:K_,invoke_vij:X_,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:B_,llvm_eh_typeid_for:em},Pi=await nt();function _m(s,a,u){var f=K();try{return Se(s)(a,u)}catch(v){if(J(f),!(v instanceof b))throw v;xe(1,0)}}function gm(s,a,u,f){var v=K();try{Se(s)(a,u,f)}catch(M){if(J(v),!(M instanceof b))throw M;xe(1,0)}}function vm(s,a){var u=K();try{return Se(s)(a)}catch(f){if(J(u),!(f instanceof b))throw f;xe(1,0)}}function ym(s,a){var u=K();try{Se(s)(a)}catch(f){if(J(u),!(f instanceof b))throw f;xe(1,0)}}function xm(s){var a=K();try{Se(s)()}catch(u){if(J(a),!(u instanceof b))throw u;xe(1,0)}}function Sm(s,a,u,f){var v=K();try{return Se(s)(a,u,f)}catch(M){if(J(v),!(M instanceof b))throw M;xe(1,0)}}function Mm(s,a,u,f,v,M){var T=K();try{Se(s)(a,u,f,v,M)}catch(C){if(J(T),!(C instanceof b))throw C;xe(1,0)}}function Em(s,a,u){var f=K();try{Se(s)(a,u)}catch(v){if(J(f),!(v instanceof b))throw v;xe(1,0)}}function bm(s,a,u,f,v,M){var T=K();try{return Se(s)(a,u,f,v,M)}catch(C){if(J(T),!(C instanceof b))throw C;xe(1,0)}}function wm(s){var a=K();try{return Se(s)()}catch(u){if(J(a),!(u instanceof b))throw u;xe(1,0)}}function Tm(s,a,u,f,v,M,T){var C=K();try{Se(s)(a,u,f,v,M,T)}catch(U){if(J(C),!(U instanceof b))throw U;xe(1,0)}}function Am(s,a,u,f,v){var M=K();try{Se(s)(a,u,f,v)}catch(T){if(J(M),!(T instanceof b))throw T;xe(1,0)}}function Cm(s,a,u,f,v){var M=K();try{return Se(s)(a,u,f,v)}catch(T){if(J(M),!(T instanceof b))throw T;xe(1,0)}}function Rm(s,a,u,f){var v=K();try{return Se(s)(a,u,f)}catch(M){if(J(v),!(M instanceof b))throw M;xe(1,0)}}function Pm(s,a,u,f,v,M,T,C){var U=K();try{Se(s)(a,u,f,v,M,T,C)}catch(W){if(J(U),!(W instanceof b))throw W;xe(1,0)}}function Dm(s,a,u,f,v,M){var T=K();try{Se(s)(a,u,f,v,M)}catch(C){if(J(T),!(C instanceof b))throw C;xe(1,0)}}function Lm(s,a,u,f,v,M,T){var C=K();try{return Se(s)(a,u,f,v,M,T)}catch(U){if(J(C),!(U instanceof b))throw U;xe(1,0)}}function Im(s,a,u,f,v,M,T){var C=K();try{Se(s)(a,u,f,v,M,T)}catch(U){if(J(C),!(U instanceof b))throw U;xe(1,0)}}function Nm(s,a,u,f,v){var M=K();try{Se(s)(a,u,f,v)}catch(T){if(J(M),!(T instanceof b))throw T;xe(1,0)}}function Fm(s,a,u,f,v,M,T,C,U,W,te,le,ge){var ue=K();try{Se(s)(a,u,f,v,M,T,C,U,W,te,le,ge)}catch(ye){if(J(ue),!(ye instanceof b))throw ye;xe(1,0)}}function Um(s,a,u,f,v,M,T,C,U,W){var te=K();try{return Se(s)(a,u,f,v,M,T,C,U,W)}catch(le){if(J(te),!(le instanceof b))throw le;xe(1,0)}}function Om(s,a,u,f,v,M,T,C,U,W,te,le,ge){var ue=K();try{return Se(s)(a,u,f,v,M,T,C,U,W,te,le,ge)}catch(ye){if(J(ue),!(ye instanceof b))throw ye;xe(1,0)}}function Bm(s,a,u,f,v,M,T){var C=K();try{return Se(s)(a,u,f,v,M,T)}catch(U){if(J(C),!(U instanceof b))throw U;xe(1,0)}}function km(s,a,u,f,v,M,T,C,U,W,te,le){var ge=K();try{Se(s)(a,u,f,v,M,T,C,U,W,te,le)}catch(ue){if(J(ge),!(ue instanceof b))throw ue;xe(1,0)}}function zm(s,a,u,f,v,M){var T=K();try{Se(s)(a,u,f,v,M)}catch(C){if(J(T),!(C instanceof b))throw C;xe(1,0)}}function Hm(s,a,u,f,v,M,T,C,U){var W=K();try{Se(s)(a,u,f,v,M,T,C,U)}catch(te){if(J(W),!(te instanceof b))throw te;xe(1,0)}}function Vm(s,a,u,f,v,M,T,C,U,W,te,le,ge,ue,ye,qe,mt,lt,Dt,xt,Kt,Ht){var on=K();try{return Se(s)(a,u,f,v,M,T,C,U,W,te,le,ge,ue,ye,qe,mt,lt,Dt,xt,Kt,Ht)}catch(Pt){if(J(on),!(Pt instanceof b))throw Pt;xe(1,0)}}function Gm(s,a,u,f,v,M,T,C,U,W,te,le){var ge=K();try{return Se(s)(a,u,f,v,M,T,C,U,W,te,le)}catch(ue){if(J(ge),!(ue instanceof b))throw ue;xe(1,0)}}function Wm(s,a,u,f,v,M,T){var C=K();try{return Se(s)(a,u,f,v,M,T)}catch(U){if(J(C),!(U instanceof b))throw U;xe(1,0)}}function Xm(s,a,u,f,v,M,T,C,U,W,te,le){var ge=K();try{return Se(s)(a,u,f,v,M,T,C,U,W,te,le)}catch(ue){if(J(ge),!(ue instanceof b))throw ue;xe(1,0)}}function $m(s,a,u,f,v,M){var T=K();try{return Se(s)(a,u,f,v,M)}catch(C){if(J(T),!(C instanceof b))throw C;xe(1,0)}}function jm(s,a,u,f,v,M,T,C,U,W){var te=K();try{return Se(s)(a,u,f,v,M,T,C,U,W)}catch(le){if(J(te),!(le instanceof b))throw le;xe(1,0)}}function Ym(s,a,u,f){var v=K();try{return Se(s)(a,u,f)}catch(M){if(J(v),!(M instanceof b))throw M;xe(1,0)}}function qm(s,a,u){var f=K();try{return Se(s)(a,u)}catch(v){if(J(f),!(v instanceof b))throw v;xe(1,0)}}function Zm(s,a,u,f,v,M){var T=K();try{Se(s)(a,u,f,v,M)}catch(C){if(J(T),!(C instanceof b))throw C;xe(1,0)}}function Km(s,a,u,f,v){var M=K();try{Se(s)(a,u,f,v)}catch(T){if(J(M),!(T instanceof b))throw T;xe(1,0)}}function Jm(s,a,u,f){var v=K();try{Se(s)(a,u,f)}catch(M){if(J(v),!(M instanceof b))throw M;xe(1,0)}}function Qm(s,a,u,f,v,M,T,C,U){var W=K();try{Se(s)(a,u,f,v,M,T,C,U)}catch(te){if(J(W),!(te instanceof b))throw te;xe(1,0)}}function e_(s,a,u,f,v,M,T,C,U){var W=K();try{return Se(s)(a,u,f,v,M,T,C,U)}catch(te){if(J(W),!(te instanceof b))throw te;xe(1,0)}}function t_(s,a,u,f,v,M,T){var C=K();try{return Se(s)(a,u,f,v,M,T)}catch(U){if(J(C),!(U instanceof b))throw U;xe(1,0)}}function n_(s,a,u,f){var v=K();try{Se(s)(a,u,f)}catch(M){if(J(v),!(M instanceof b))throw M;xe(1,0)}}function i_(s,a,u,f,v){var M=K();try{return Se(s)(a,u,f,v)}catch(T){if(J(M),!(T instanceof b))throw T;xe(1,0)}}function r_(s,a,u,f,v){var M=K();try{return Se(s)(a,u,f,v)}catch(T){if(J(M),!(T instanceof b))throw T;xe(1,0)}}function s_(s,a,u,f){var v=K();try{return Se(s)(a,u,f)}catch(M){if(J(v),!(M instanceof b))throw M;xe(1,0)}}function o_(s,a,u,f,v,M){var T=K();try{return Se(s)(a,u,f,v,M)}catch(C){if(J(T),!(C instanceof b))throw C;xe(1,0)}}function a_(s,a){var u=K();try{return Se(s)(a)}catch(f){if(J(u),!(f instanceof b))throw f;xe(1,0)}}function c_(s,a,u,f,v,M,T,C){var U=K();try{return Se(s)(a,u,f,v,M,T,C)}catch(W){if(J(U),!(W instanceof b))throw W;xe(1,0)}}function l_(s,a,u,f,v,M,T){var C=K();try{Se(s)(a,u,f,v,M,T)}catch(U){if(J(C),!(U instanceof b))throw U;xe(1,0)}}function u_(s,a,u,f,v,M,T,C,U,W,te,le){var ge=K();try{return Se(s)(a,u,f,v,M,T,C,U,W,te,le)}catch(ue){if(J(ge),!(ue instanceof b))throw ue;xe(1,0)}}function h_(s,a,u,f,v,M,T,C,U,W,te,le,ge,ue,ye,qe,mt,lt,Dt,xt,Kt,Ht,on){var Pt=K();try{Se(s)(a,u,f,v,M,T,C,U,W,te,le,ge,ue,ye,qe,mt,lt,Dt,xt,Kt,Ht,on)}catch(li){if(J(Pt),!(li instanceof b))throw li;xe(1,0)}}function d_(s,a,u,f,v,M,T,C,U,W,te,le,ge){var ue=K();try{Se(s)(a,u,f,v,M,T,C,U,W,te,le,ge)}catch(ye){if(J(ue),!(ye instanceof b))throw ye;xe(1,0)}}function f_(s,a,u,f,v,M,T,C){var U=K();try{Se(s)(a,u,f,v,M,T,C)}catch(W){if(J(U),!(W instanceof b))throw W;xe(1,0)}}function p_(s,a,u,f,v,M,T,C,U,W,te,le,ge){var ue=K();try{Se(s)(a,u,f,v,M,T,C,U,W,te,le,ge)}catch(ye){if(J(ue),!(ye instanceof b))throw ye;xe(1,0)}}function m_(s,a,u,f,v,M,T){var C=K();try{Se(s)(a,u,f,v,M,T)}catch(U){if(J(C),!(U instanceof b))throw U;xe(1,0)}}function __(s,a,u,f,v,M,T,C,U,W,te){var le=K();try{Se(s)(a,u,f,v,M,T,C,U,W,te)}catch(ge){if(J(le),!(ge instanceof b))throw ge;xe(1,0)}}function g_(s,a,u,f,v,M,T,C){var U=K();try{return Se(s)(a,u,f,v,M,T,C)}catch(W){if(J(U),!(W instanceof b))throw W;xe(1,0)}}function v_(s,a,u){var f=K();try{return Se(s)(a,u)}catch(v){if(J(f),!(v instanceof b))throw v;xe(1,0)}}function y_(s,a,u){var f=K();try{Se(s)(a,u)}catch(v){if(J(f),!(v instanceof b))throw v;xe(1,0)}}function x_(s,a,u,f,v,M,T){var C=K();try{return Se(s)(a,u,f,v,M,T)}catch(U){if(J(C),!(U instanceof b))throw U;xe(1,0)}}function S_(s,a,u,f,v,M,T,C,U,W){var te=K();try{return Se(s)(a,u,f,v,M,T,C,U,W)}catch(le){if(J(te),!(le instanceof b))throw le;xe(1,0)}}function M_(s,a,u,f){var v=K();try{return Se(s)(a,u,f)}catch(M){if(J(v),!(M instanceof b))throw M;xe(1,0)}}function E_(s,a,u,f,v,M){var T=K();try{return Se(s)(a,u,f,v,M)}catch(C){if(J(T),!(C instanceof b))throw C;xe(1,0)}}function b_(s,a,u,f,v){var M=K();try{return Se(s)(a,u,f,v)}catch(T){if(J(M),!(T instanceof b))throw T;return xe(1,0),0n}}function w_(s,a,u,f,v){var M=K();try{Se(s)(a,u,f,v)}catch(T){if(J(M),!(T instanceof b))throw T;xe(1,0)}}function T_(s,a,u,f,v,M){var T=K();try{Se(s)(a,u,f,v,M)}catch(C){if(J(T),!(C instanceof b))throw C;xe(1,0)}}function A_(s,a,u,f){var v=K();try{return Se(s)(a,u,f)}catch(M){if(J(v),!(M instanceof b))throw M;xe(1,0)}}function C_(s,a,u,f,v,M){var T=K();try{return Se(s)(a,u,f,v,M)}catch(C){if(J(T),!(C instanceof b))throw C;xe(1,0)}}function R_(s,a,u,f,v,M,T,C,U,W){var te=K();try{return Se(s)(a,u,f,v,M,T,C,U,W)}catch(le){if(J(te),!(le instanceof b))throw le;xe(1,0)}}function P_(s,a,u,f,v,M,T,C){var U=K();try{Se(s)(a,u,f,v,M,T,C)}catch(W){if(J(U),!(W instanceof b))throw W;xe(1,0)}}function D_(s,a,u,f,v,M){var T=K();try{Se(s)(a,u,f,v,M)}catch(C){if(J(T),!(C instanceof b))throw C;xe(1,0)}}function L_(s,a,u,f,v,M,T,C){var U=K();try{Se(s)(a,u,f,v,M,T,C)}catch(W){if(J(U),!(W instanceof b))throw W;xe(1,0)}}function I_(s,a,u,f,v,M){var T=K();try{Se(s)(a,u,f,v,M)}catch(C){if(J(T),!(C instanceof b))throw C;xe(1,0)}}function N_(s,a,u){var f=K();try{return Se(s)(a,u)}catch(v){if(J(f),!(v instanceof b))throw v;return xe(1,0),0n}}function F_(s,a){var u=K();try{return Se(s)(a)}catch(f){if(J(u),!(f instanceof b))throw f;return xe(1,0),0n}}function U_(s,a,u,f,v,M,T,C,U,W,te,le,ge){var ue=K();try{return Se(s)(a,u,f,v,M,T,C,U,W,te,le,ge)}catch(ye){if(J(ue),!(ye instanceof b))throw ye;xe(1,0)}}function O_(s,a){var u=K();try{return Se(s)(a)}catch(f){if(J(u),!(f instanceof b))throw f;xe(1,0)}}function B_(s,a,u,f,v,M,T,C,U,W,te,le,ge,ue,ye,qe,mt,lt,Dt,xt,Kt,Ht,on,Pt,li,Ns,sg,og,ag,cg,lg,ug,hg,dg,fg,pg,mg,_g,gg,vg,yg,xg,Sg,Mg,Eg,bg,wg,Tg,Ag,Cg,Rg,Pg,Dg,Lg,Ig,Ng,Fg,Ug,Og,Bg,kg,zg,Hg,Vg,Gg,Wg,Xg,$g,jg,Yg,qg,Zg,Kg,Jg,Qg,ev,tv,nv,iv,rv,sv,ov,av,cv,lv,uv){var hv=K();try{Se(s)(a,u,f,v,M,T,C,U,W,te,le,ge,ue,ye,qe,mt,lt,Dt,xt,Kt,Ht,on,Pt,li,Ns,sg,og,ag,cg,lg,ug,hg,dg,fg,pg,mg,_g,gg,vg,yg,xg,Sg,Mg,Eg,bg,wg,Tg,Ag,Cg,Rg,Pg,Dg,Lg,Ig,Ng,Fg,Ug,Og,Bg,kg,zg,Hg,Vg,Gg,Wg,Xg,$g,jg,Yg,qg,Zg,Kg,Jg,Qg,ev,tv,nv,iv,rv,sv,ov,av,cv,lv,uv)}catch(uu){if(J(hv),!(uu instanceof b))throw uu;xe(1,0)}}function k_(s,a,u,f,v,M,T,C,U,W,te,le,ge,ue){var ye=K();try{Se(s)(a,u,f,v,M,T,C,U,W,te,le,ge,ue)}catch(qe){if(J(ye),!(qe instanceof b))throw qe;xe(1,0)}}function z_(s,a,u,f,v,M,T,C,U,W,te){var le=K();try{Se(s)(a,u,f,v,M,T,C,U,W,te)}catch(ge){if(J(le),!(ge instanceof b))throw ge;xe(1,0)}}function H_(s,a,u,f,v,M,T,C,U,W,te,le,ge,ue,ye,qe,mt,lt,Dt){var xt=K();try{Se(s)(a,u,f,v,M,T,C,U,W,te,le,ge,ue,ye,qe,mt,lt,Dt)}catch(Kt){if(J(xt),!(Kt instanceof b))throw Kt;xe(1,0)}}function V_(s,a,u){var f=K();try{return Se(s)(a,u)}catch(v){if(J(f),!(v instanceof b))throw v;xe(1,0)}}function G_(s,a,u,f,v,M,T){var C=K();try{Se(s)(a,u,f,v,M,T)}catch(U){if(J(C),!(U instanceof b))throw U;xe(1,0)}}function W_(s,a,u,f,v,M,T){var C=K();try{Se(s)(a,u,f,v,M,T)}catch(U){if(J(C),!(U instanceof b))throw U;xe(1,0)}}function X_(s,a,u){var f=K();try{Se(s)(a,u)}catch(v){if(J(f),!(v instanceof b))throw v;xe(1,0)}}function $_(s,a,u){var f=K();try{return Se(s)(a,u)}catch(v){if(J(f),!(v instanceof b))throw v;xe(1,0)}}function j_(s,a,u,f,v,M){var T=K();try{return Se(s)(a,u,f,v,M)}catch(C){if(J(T),!(C instanceof b))throw C;xe(1,0)}}function Y_(s,a,u,f,v,M){var T=K();try{Se(s)(a,u,f,v,M)}catch(C){if(J(T),!(C instanceof b))throw C;xe(1,0)}}function q_(s,a,u,f){var v=K();try{Se(s)(a,u,f)}catch(M){if(J(v),!(M instanceof b))throw M;xe(1,0)}}function Z_(s){var a=K();try{return Se(s)()}catch(u){if(J(a),!(u instanceof b))throw u;return xe(1,0),0n}}function K_(s,a,u,f,v,M){var T=K();try{Se(s)(a,u,f,v,M)}catch(C){if(J(T),!(C instanceof b))throw C;xe(1,0)}}function J_(s,a,u,f,v,M,T,C,U,W,te){var le=K();try{return Se(s)(a,u,f,v,M,T,C,U,W,te)}catch(ge){if(J(le),!(ge instanceof b))throw ge;xe(1,0)}}function Q_(s,a,u,f){var v=K();try{return Se(s)(a,u,f)}catch(M){if(J(v),!(M instanceof b))throw M;xe(1,0)}}function eg(s,a,u,f,v,M,T,C,U,W,te,le){var ge=K();try{return Se(s)(a,u,f,v,M,T,C,U,W,te,le)}catch(ue){if(J(ge),!(ue instanceof b))throw ue;xe(1,0)}}function tg(s,a,u,f,v,M,T,C,U,W,te,le,ge,ue,ye,qe){var mt=K();try{Se(s)(a,u,f,v,M,T,C,U,W,te,le,ge,ue,ye,qe)}catch(lt){if(J(mt),!(lt instanceof b))throw lt;xe(1,0)}}var ou;function ng(){Jl(),H()}function ua(){if(Ze>0){Fe=ua;return}if(ng(),Ee(),Ze>0){Fe=ua;return}function s(){var a;L(!ou),ou=!0,t.calledRun=!0,!V&&(ze(),Oe==null||Oe(t),(a=t.onRuntimeInitialized)==null||a.call(t),Z("onRuntimeInitialized"),L(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Re())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),s()},1)):s(),I()}function ig(){var s=N,a=P,u=!1;N=P=f=>{u=!0};try{aa(0),["stdout","stderr"].forEach(f=>{var U;var v=w.analyzePath("/dev/"+f);if(v){var M=v.object,T=M.rdev,C=He.ttys[T];(U=C==null?void 0:C.output)!=null&&U.length&&(u=!0)}})}catch{}N=s,P=a,u&&Qe("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function rg(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();Z("preInit")}rg(),ua(),B?e=t:e=new Promise((s,a)=>{Oe=s,Ke=a});for(const s of Object.keys(t))s in i||Object.defineProperty(i,s,{configurable:!0,get(){fe(`Access to module property ('${s}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const Lw="/physical/assets/mujoco-D9UjOFNX.wasm";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tl="170",vr={ROTATE:0,DOLLY:1,PAN:2},mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_v=0,du=1,gv=2,rd=1,vv=2,ti=3,Si=0,ln=1,ni=2,yi=0,yr=1,Co=2,fu=3,pu=4,yv=5,ki=100,xv=101,Sv=102,Mv=103,Ev=104,bv=200,wv=201,Tv=202,Av=203,nc=204,ic=205,Cv=206,Rv=207,Pv=208,Dv=209,Lv=210,Iv=211,Nv=212,Fv=213,Uv=214,rc=0,sc=1,oc=2,br=3,ac=4,cc=5,lc=6,uc=7,sd=0,Ov=1,Bv=2,xi=0,kv=1,zv=2,Hv=3,Vv=4,Gv=5,Wv=6,Xv=7,mu="attached",$v="detached",od=300,wr=301,Tr=302,hc=303,dc=304,zo=306,fc=1e3,Hi=1001,pc=1002,yn=1003,jv=1004,Fs=1005,Gn=1006,ha=1007,Vi=1008,oi=1009,ad=1010,cd=1011,rs=1012,nl=1013,Wi=1014,Fn=1015,us=1016,il=1017,rl=1018,Ar=1020,ld=35902,ud=1021,hd=1022,wn=1023,dd=1024,fd=1025,xr=1026,Cr=1027,sl=1028,ol=1029,pd=1030,al=1031,cl=1033,So=33776,Mo=33777,Eo=33778,bo=33779,mc=35840,_c=35841,gc=35842,vc=35843,yc=36196,xc=37492,Sc=37496,Mc=37808,Ec=37809,bc=37810,wc=37811,Tc=37812,Ac=37813,Cc=37814,Rc=37815,Pc=37816,Dc=37817,Lc=37818,Ic=37819,Nc=37820,Fc=37821,wo=36492,Uc=36494,Oc=36495,md=36283,Bc=36284,kc=36285,zc=36286,Ro=2300,Hc=2301,da=2302,_u=2400,gu=2401,vu=2402,Yv=2500,Iw=0,Nw=1,Fw=2,qv=3200,Zv=3201,_d=0,Kv=1,gi="",En="srgb",Ir="srgb-linear",Ho="linear",Tt="srgb",Ji=7680,yu=519,Jv=512,Qv=513,e0=514,gd=515,t0=516,n0=517,i0=518,r0=519,Vc=35044,xu="300 es",ii=2e3,Po=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,c=r.length;o<c;o++)r[o].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Su=1234567;const Sr=Math.PI/180,Rr=180/Math.PI;function Tn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function ll(i,e){return(i%e+e)%e}function s0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function o0(i,e,t){return i!==e?(t-i)/(e-i):0}function es(i,e,t){return(1-t)*i+t*e}function a0(i,e,t,n){return es(i,e,1-Math.exp(-t*n))}function c0(i,e=1){return e-Math.abs(ll(i,e*2)-e)}function l0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function u0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function h0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function d0(i,e){return i+Math.random()*(e-i)}function f0(i){return i*(.5-Math.random())}function p0(i){i!==void 0&&(Su=i);let e=Su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function m0(i){return i*Sr}function _0(i){return i*Rr}function g0(i){return(i&i-1)===0&&i!==0}function v0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function y0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function x0(i,e,t,n,r){const o=Math.cos,c=Math.sin,l=o(t/2),h=c(t/2),d=o((e+n)/2),p=c((e+n)/2),m=o((e-n)/2),_=c((e-n)/2),g=o((n-e)/2),S=c((n-e)/2);switch(r){case"XYX":i.set(l*p,h*m,h*_,l*d);break;case"YZY":i.set(h*_,l*p,h*m,l*d);break;case"ZXZ":i.set(h*m,h*_,l*p,l*d);break;case"XZX":i.set(l*p,h*S,h*g,l*d);break;case"YXY":i.set(h*g,l*p,h*S,l*d);break;case"ZYZ":i.set(h*S,h*g,l*p,l*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const S0={DEG2RAD:Sr,RAD2DEG:Rr,generateUUID:Tn,clamp:Gt,euclideanModulo:ll,mapLinear:s0,inverseLerp:o0,lerp:es,damp:a0,pingpong:c0,smoothstep:l0,smootherstep:u0,randInt:h0,randFloat:d0,randFloatSpread:f0,seededRandom:p0,degToRad:m0,radToDeg:_0,isPowerOfTwo:g0,ceilPowerOfTwo:v0,floorPowerOfTwo:y0,setQuaternionFromProperEuler:x0,normalize:bt,denormalize:Nn};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*n-c*r+e.x,this.y=o*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,r,o,c,l,h,d){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,c,l,h,d)}set(e,t,n,r,o,c,l,h,d){const p=this.elements;return p[0]=e,p[1]=r,p[2]=l,p[3]=t,p[4]=o,p[5]=h,p[6]=n,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,c=n[0],l=n[3],h=n[6],d=n[1],p=n[4],m=n[7],_=n[2],g=n[5],S=n[8],E=r[0],x=r[3],y=r[6],N=r[1],P=r[4],A=r[7],V=r[2],L=r[5],k=r[8];return o[0]=c*E+l*N+h*V,o[3]=c*x+l*P+h*L,o[6]=c*y+l*A+h*k,o[1]=d*E+p*N+m*V,o[4]=d*x+p*P+m*L,o[7]=d*y+p*A+m*k,o[2]=_*E+g*N+S*V,o[5]=_*x+g*P+S*L,o[8]=_*y+g*A+S*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],h=e[6],d=e[7],p=e[8];return t*c*p-t*l*d-n*o*p+n*l*h+r*o*d-r*c*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],h=e[6],d=e[7],p=e[8],m=p*c-l*d,_=l*h-p*o,g=d*o-c*h,S=t*m+n*_+r*g;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=m*E,e[1]=(r*d-p*n)*E,e[2]=(l*n-r*c)*E,e[3]=_*E,e[4]=(p*t-r*h)*E,e[5]=(r*o-l*t)*E,e[6]=g*E,e[7]=(n*h-d*t)*E,e[8]=(c*t-n*o)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,c,l){const h=Math.cos(o),d=Math.sin(o);return this.set(n*h,n*d,-n*(h*c+d*l)+c+e,-r*d,r*h,-r*(-d*c+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(fa.makeScale(e,t)),this}rotate(e){return this.premultiply(fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new st;function vd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function M0(){const i=ss("canvas");return i.style.display="block",i}const Mu={};function Jr(i){i in Mu||(Mu[i]=!0,console.warn(i))}function E0(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function b0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function w0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Tt&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Tt&&(i.r=Mr(i.r),i.g=Mr(i.g),i.b=Mr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?Ho:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Eu=[.64,.33,.3,.6,.15,.06],bu=[.2126,.7152,.0722],wu=[.3127,.329],Tu=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Au=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[Ir]:{primaries:Eu,whitePoint:wu,transfer:Ho,toXYZ:Tu,fromXYZ:Au,luminanceCoefficients:bu,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:Eu,whitePoint:wu,transfer:Tt,toXYZ:Tu,fromXYZ:Au,luminanceCoefficients:bu,outputColorSpaceConfig:{drawingBufferColorSpace:En}}});let Qi;class T0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=ss("canvas")),Qi.width=e.width,Qi.height=e.height;const n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ss("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let c=0;c<o.length;c++)o[c]=ri(o[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A0=0;class yd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Tn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let c=0,l=r.length;c<l;c++)r[c].isDataTexture?o.push(pa(r[c].image)):o.push(pa(r[c]))}else o=pa(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?T0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let C0=0;class tn extends ji{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=Hi,r=Hi,o=Gn,c=Vi,l=wn,h=oi,d=tn.DEFAULT_ANISOTROPY,p=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Tn(),this.name="",this.source=new yd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=c,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=h,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fc:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fc:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=od;tn.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*o,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*o,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*o,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const h=e.elements,d=h[0],p=h[4],m=h[8],_=h[1],g=h[5],S=h[9],E=h[2],x=h[6],y=h[10];if(Math.abs(p-_)<.01&&Math.abs(m-E)<.01&&Math.abs(S-x)<.01){if(Math.abs(p+_)<.1&&Math.abs(m+E)<.1&&Math.abs(S+x)<.1&&Math.abs(d+g+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(d+1)/2,A=(g+1)/2,V=(y+1)/2,L=(p+_)/4,k=(m+E)/4,H=(S+x)/4;return P>A&&P>V?P<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(P),r=L/n,o=k/n):A>V?A<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(A),n=L/r,o=H/r):V<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(V),n=k/o,r=H/o),this.set(n,r,o,t),this}let N=Math.sqrt((x-S)*(x-S)+(m-E)*(m-E)+(_-p)*(_-p));return Math.abs(N)<.001&&(N=1),this.x=(x-S)/N,this.y=(m-E)/N,this.z=(_-p)/N,this.w=Math.acos((d+g+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R0 extends ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new tn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let l=0;l<c;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends R0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xd extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P0 extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,c,l){let h=n[r+0],d=n[r+1],p=n[r+2],m=n[r+3];const _=o[c+0],g=o[c+1],S=o[c+2],E=o[c+3];if(l===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=m;return}if(l===1){e[t+0]=_,e[t+1]=g,e[t+2]=S,e[t+3]=E;return}if(m!==E||h!==_||d!==g||p!==S){let x=1-l;const y=h*_+d*g+p*S+m*E,N=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const V=Math.sqrt(P),L=Math.atan2(V,y*N);x=Math.sin(x*L)/V,l=Math.sin(l*L)/V}const A=l*N;if(h=h*x+_*A,d=d*x+g*A,p=p*x+S*A,m=m*x+E*A,x===1-l){const V=1/Math.sqrt(h*h+d*d+p*p+m*m);h*=V,d*=V,p*=V,m*=V}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,o,c){const l=n[r],h=n[r+1],d=n[r+2],p=n[r+3],m=o[c],_=o[c+1],g=o[c+2],S=o[c+3];return e[t]=l*S+p*m+h*g-d*_,e[t+1]=h*S+p*_+d*m-l*g,e[t+2]=d*S+p*g+l*_-h*m,e[t+3]=p*S-l*m-h*_-d*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,c=e._order,l=Math.cos,h=Math.sin,d=l(n/2),p=l(r/2),m=l(o/2),_=h(n/2),g=h(r/2),S=h(o/2);switch(c){case"XYZ":this._x=_*p*m+d*g*S,this._y=d*g*m-_*p*S,this._z=d*p*S+_*g*m,this._w=d*p*m-_*g*S;break;case"YXZ":this._x=_*p*m+d*g*S,this._y=d*g*m-_*p*S,this._z=d*p*S-_*g*m,this._w=d*p*m+_*g*S;break;case"ZXY":this._x=_*p*m-d*g*S,this._y=d*g*m+_*p*S,this._z=d*p*S+_*g*m,this._w=d*p*m-_*g*S;break;case"ZYX":this._x=_*p*m-d*g*S,this._y=d*g*m+_*p*S,this._z=d*p*S-_*g*m,this._w=d*p*m+_*g*S;break;case"YZX":this._x=_*p*m+d*g*S,this._y=d*g*m+_*p*S,this._z=d*p*S-_*g*m,this._w=d*p*m-_*g*S;break;case"XZY":this._x=_*p*m-d*g*S,this._y=d*g*m-_*p*S,this._z=d*p*S+_*g*m,this._w=d*p*m+_*g*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],c=t[1],l=t[5],h=t[9],d=t[2],p=t[6],m=t[10],_=n+l+m;if(_>0){const g=.5/Math.sqrt(_+1);this._w=.25/g,this._x=(p-h)*g,this._y=(o-d)*g,this._z=(c-r)*g}else if(n>l&&n>m){const g=2*Math.sqrt(1+n-l-m);this._w=(p-h)/g,this._x=.25*g,this._y=(r+c)/g,this._z=(o+d)/g}else if(l>m){const g=2*Math.sqrt(1+l-n-m);this._w=(o-d)/g,this._x=(r+c)/g,this._y=.25*g,this._z=(h+p)/g}else{const g=2*Math.sqrt(1+m-n-l);this._w=(c-r)/g,this._x=(o+d)/g,this._y=(h+p)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,c=e._w,l=t._x,h=t._y,d=t._z,p=t._w;return this._x=n*p+c*l+r*d-o*h,this._y=r*p+c*h+o*l-n*d,this._z=o*p+c*d+n*h-r*l,this._w=c*p-n*l-r*h-o*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,c=this._w;let l=c*e._w+n*e._x+r*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=r,this._z=o,this;const h=1-l*l;if(h<=Number.EPSILON){const g=1-t;return this._w=g*c+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*o+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,l),m=Math.sin((1-t)*p)/d,_=Math.sin(t*p)/d;return this._w=c*m+this._w*_,this._x=n*m+this._x*_,this._y=r*m+this._y*_,this._z=o*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,c=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*c,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*c,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,c=e.y,l=e.z,h=e.w,d=2*(c*r-l*n),p=2*(l*t-o*r),m=2*(o*n-c*t);return this.x=t+h*d+c*m-l*p,this.y=n+h*p+l*d-o*m,this.z=r+h*m+o*p-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,c=t.x,l=t.y,h=t.z;return this.x=r*h-o*l,this.y=o*c-n*h,this.z=n*l-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new z,Cu=new hn;class Wn{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=o.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,Dn):Dn.fromBufferAttribute(o,c),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(e.matrixWorld),this.union(Us)}const r=e.children;for(let o=0,c=r.length;o<c;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),Os.subVectors(this.max,Vr),er.subVectors(e.a,Vr),tr.subVectors(e.b,Vr),nr.subVectors(e.c,Vr),ui.subVectors(tr,er),hi.subVectors(nr,tr),Di.subVectors(er,nr);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Di.z,Di.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Di.z,0,-Di.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Di.y,Di.x,0];return!_a(t,er,tr,nr,Os)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,er,tr,nr,Os))?!1:(Bs.crossVectors(ui,hi),t=[Bs.x,Bs.y,Bs.z],_a(t,er,tr,nr,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new z,new z,new z,new z,new z,new z,new z,new z],Dn=new z,Us=new Wn,er=new z,tr=new z,nr=new z,ui=new z,hi=new z,Di=new z,Vr=new z,Os=new z,Bs=new z,Li=new z;function _a(i,e,t,n,r){for(let o=0,c=i.length-3;o<=c;o+=3){Li.fromArray(i,o);const l=r.x*Math.abs(Li.x)+r.y*Math.abs(Li.y)+r.z*Math.abs(Li.z),h=e.dot(Li),d=t.dot(Li),p=n.dot(Li);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>l)return!1}return!0}const D0=new Wn,Gr=new z,ga=new z;class ai{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):D0.setFromPoints(e).getCenter(n);let r=0;for(let o=0,c=e.length;o<c;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);const t=Gr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Gr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(ga)),this.expandByPoint(Gr.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new z,va=new z,ks=new z,di=new z,ya=new z,zs=new z,xa=new z;class Nr{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){va.copy(e).add(t).multiplyScalar(.5),ks.copy(t).sub(e).normalize(),di.copy(this.origin).sub(va);const o=e.distanceTo(t)*.5,c=-this.direction.dot(ks),l=di.dot(this.direction),h=-di.dot(ks),d=di.lengthSq(),p=Math.abs(1-c*c);let m,_,g,S;if(p>0)if(m=c*h-l,_=c*l-h,S=o*p,m>=0)if(_>=-S)if(_<=S){const E=1/p;m*=E,_*=E,g=m*(m+c*_+2*l)+_*(c*m+_+2*h)+d}else _=o,m=Math.max(0,-(c*_+l)),g=-m*m+_*(_+2*h)+d;else _=-o,m=Math.max(0,-(c*_+l)),g=-m*m+_*(_+2*h)+d;else _<=-S?(m=Math.max(0,-(-c*o+l)),_=m>0?-o:Math.min(Math.max(-o,-h),o),g=-m*m+_*(_+2*h)+d):_<=S?(m=0,_=Math.min(Math.max(-o,-h),o),g=_*(_+2*h)+d):(m=Math.max(0,-(c*o+l)),_=m>0?o:Math.min(Math.max(-o,-h),o),g=-m*m+_*(_+2*h)+d);else _=c>0?-o:o,m=Math.max(0,-(c*_+l)),g=-m*m+_*(_+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(va).addScaledVector(ks,_),g}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const n=Zn.dot(this.direction),r=Zn.dot(Zn)-n*n,o=e.radius*e.radius;if(r>o)return null;const c=Math.sqrt(o-r),l=n-c,h=n+c;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,c,l,h;const d=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,_=this.origin;return d>=0?(n=(e.min.x-_.x)*d,r=(e.max.x-_.x)*d):(n=(e.max.x-_.x)*d,r=(e.min.x-_.x)*d),p>=0?(o=(e.min.y-_.y)*p,c=(e.max.y-_.y)*p):(o=(e.max.y-_.y)*p,c=(e.min.y-_.y)*p),n>c||o>r||((o>n||isNaN(n))&&(n=o),(c<r||isNaN(r))&&(r=c),m>=0?(l=(e.min.z-_.z)*m,h=(e.max.z-_.z)*m):(l=(e.max.z-_.z)*m,h=(e.min.z-_.z)*m),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,r,o){ya.subVectors(t,e),zs.subVectors(n,e),xa.crossVectors(ya,zs);let c=this.direction.dot(xa),l;if(c>0){if(r)return null;l=1}else if(c<0)l=-1,c=-c;else return null;di.subVectors(this.origin,e);const h=l*this.direction.dot(zs.crossVectors(di,zs));if(h<0)return null;const d=l*this.direction.dot(ya.cross(di));if(d<0||h+d>c)return null;const p=-l*di.dot(xa);return p<0?null:this.at(p/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,r,o,c,l,h,d,p,m,_,g,S,E,x){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,c,l,h,d,p,m,_,g,S,E,x)}set(e,t,n,r,o,c,l,h,d,p,m,_,g,S,E,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=r,y[1]=o,y[5]=c,y[9]=l,y[13]=h,y[2]=d,y[6]=p,y[10]=m,y[14]=_,y[3]=g,y[7]=S,y[11]=E,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ir.setFromMatrixColumn(e,0).length(),o=1/ir.setFromMatrixColumn(e,1).length(),c=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,c=Math.cos(n),l=Math.sin(n),h=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const _=c*p,g=c*m,S=l*p,E=l*m;t[0]=h*p,t[4]=-h*m,t[8]=d,t[1]=g+S*d,t[5]=_-E*d,t[9]=-l*h,t[2]=E-_*d,t[6]=S+g*d,t[10]=c*h}else if(e.order==="YXZ"){const _=h*p,g=h*m,S=d*p,E=d*m;t[0]=_+E*l,t[4]=S*l-g,t[8]=c*d,t[1]=c*m,t[5]=c*p,t[9]=-l,t[2]=g*l-S,t[6]=E+_*l,t[10]=c*h}else if(e.order==="ZXY"){const _=h*p,g=h*m,S=d*p,E=d*m;t[0]=_-E*l,t[4]=-c*m,t[8]=S+g*l,t[1]=g+S*l,t[5]=c*p,t[9]=E-_*l,t[2]=-c*d,t[6]=l,t[10]=c*h}else if(e.order==="ZYX"){const _=c*p,g=c*m,S=l*p,E=l*m;t[0]=h*p,t[4]=S*d-g,t[8]=_*d+E,t[1]=h*m,t[5]=E*d+_,t[9]=g*d-S,t[2]=-d,t[6]=l*h,t[10]=c*h}else if(e.order==="YZX"){const _=c*h,g=c*d,S=l*h,E=l*d;t[0]=h*p,t[4]=E-_*m,t[8]=S*m+g,t[1]=m,t[5]=c*p,t[9]=-l*p,t[2]=-d*p,t[6]=g*m+S,t[10]=_-E*m}else if(e.order==="XZY"){const _=c*h,g=c*d,S=l*h,E=l*d;t[0]=h*p,t[4]=-m,t[8]=d*p,t[1]=_*m+E,t[5]=c*p,t[9]=g*m-S,t[2]=S*m-g,t[6]=l*p,t[10]=E*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L0,e,I0)}lookAt(e,t,n){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),fi.crossVectors(n,pn),fi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),fi.crossVectors(n,pn)),fi.normalize(),Hs.crossVectors(pn,fi),r[0]=fi.x,r[4]=Hs.x,r[8]=pn.x,r[1]=fi.y,r[5]=Hs.y,r[9]=pn.y,r[2]=fi.z,r[6]=Hs.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,c=n[0],l=n[4],h=n[8],d=n[12],p=n[1],m=n[5],_=n[9],g=n[13],S=n[2],E=n[6],x=n[10],y=n[14],N=n[3],P=n[7],A=n[11],V=n[15],L=r[0],k=r[4],H=r[8],I=r[12],b=r[1],O=r[5],q=r[9],Z=r[13],Q=r[2],ne=r[6],ie=r[10],me=r[14],se=r[3],Ce=r[7],Le=r[11],Oe=r[15];return o[0]=c*L+l*b+h*Q+d*se,o[4]=c*k+l*O+h*ne+d*Ce,o[8]=c*H+l*q+h*ie+d*Le,o[12]=c*I+l*Z+h*me+d*Oe,o[1]=p*L+m*b+_*Q+g*se,o[5]=p*k+m*O+_*ne+g*Ce,o[9]=p*H+m*q+_*ie+g*Le,o[13]=p*I+m*Z+_*me+g*Oe,o[2]=S*L+E*b+x*Q+y*se,o[6]=S*k+E*O+x*ne+y*Ce,o[10]=S*H+E*q+x*ie+y*Le,o[14]=S*I+E*Z+x*me+y*Oe,o[3]=N*L+P*b+A*Q+V*se,o[7]=N*k+P*O+A*ne+V*Ce,o[11]=N*H+P*q+A*ie+V*Le,o[15]=N*I+P*Z+A*me+V*Oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],c=e[1],l=e[5],h=e[9],d=e[13],p=e[2],m=e[6],_=e[10],g=e[14],S=e[3],E=e[7],x=e[11],y=e[15];return S*(+o*h*m-r*d*m-o*l*_+n*d*_+r*l*g-n*h*g)+E*(+t*h*g-t*d*_+o*c*_-r*c*g+r*d*p-o*h*p)+x*(+t*d*m-t*l*g-o*c*m+n*c*g+o*l*p-n*d*p)+y*(-r*l*p-t*h*m+t*l*_+r*c*m-n*c*_+n*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],h=e[6],d=e[7],p=e[8],m=e[9],_=e[10],g=e[11],S=e[12],E=e[13],x=e[14],y=e[15],N=m*x*d-E*_*d+E*h*g-l*x*g-m*h*y+l*_*y,P=S*_*d-p*x*d-S*h*g+c*x*g+p*h*y-c*_*y,A=p*E*d-S*m*d+S*l*g-c*E*g-p*l*y+c*m*y,V=S*m*h-p*E*h-S*l*_+c*E*_+p*l*x-c*m*x,L=t*N+n*P+r*A+o*V;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/L;return e[0]=N*k,e[1]=(E*_*o-m*x*o-E*r*g+n*x*g+m*r*y-n*_*y)*k,e[2]=(l*x*o-E*h*o+E*r*d-n*x*d-l*r*y+n*h*y)*k,e[3]=(m*h*o-l*_*o-m*r*d+n*_*d+l*r*g-n*h*g)*k,e[4]=P*k,e[5]=(p*x*o-S*_*o+S*r*g-t*x*g-p*r*y+t*_*y)*k,e[6]=(S*h*o-c*x*o-S*r*d+t*x*d+c*r*y-t*h*y)*k,e[7]=(c*_*o-p*h*o+p*r*d-t*_*d-c*r*g+t*h*g)*k,e[8]=A*k,e[9]=(S*m*o-p*E*o-S*n*g+t*E*g+p*n*y-t*m*y)*k,e[10]=(c*E*o-S*l*o+S*n*d-t*E*d-c*n*y+t*l*y)*k,e[11]=(p*l*o-c*m*o-p*n*d+t*m*d+c*n*g-t*l*g)*k,e[12]=V*k,e[13]=(p*E*r-S*m*r+S*n*_-t*E*_-p*n*x+t*m*x)*k,e[14]=(S*l*r-c*E*r-S*n*h+t*E*h+c*n*x-t*l*x)*k,e[15]=(c*m*r-p*l*r+p*n*h-t*m*h-c*n*_+t*l*_)*k,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,c=e.x,l=e.y,h=e.z,d=o*c,p=o*l;return this.set(d*c+n,d*l-r*h,d*h+r*l,0,d*l+r*h,p*l+n,p*h-r*c,0,d*h-r*l,p*h+r*c,o*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,c){return this.set(1,n,o,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,c=t._y,l=t._z,h=t._w,d=o+o,p=c+c,m=l+l,_=o*d,g=o*p,S=o*m,E=c*p,x=c*m,y=l*m,N=h*d,P=h*p,A=h*m,V=n.x,L=n.y,k=n.z;return r[0]=(1-(E+y))*V,r[1]=(g+A)*V,r[2]=(S-P)*V,r[3]=0,r[4]=(g-A)*L,r[5]=(1-(_+y))*L,r[6]=(x+N)*L,r[7]=0,r[8]=(S+P)*k,r[9]=(x-N)*k,r[10]=(1-(_+E))*k,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=ir.set(r[0],r[1],r[2]).length();const c=ir.set(r[4],r[5],r[6]).length(),l=ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const d=1/o,p=1/c,m=1/l;return Ln.elements[0]*=d,Ln.elements[1]*=d,Ln.elements[2]*=d,Ln.elements[4]*=p,Ln.elements[5]*=p,Ln.elements[6]*=p,Ln.elements[8]*=m,Ln.elements[9]*=m,Ln.elements[10]*=m,t.setFromRotationMatrix(Ln),n.x=o,n.y=c,n.z=l,this}makePerspective(e,t,n,r,o,c,l=ii){const h=this.elements,d=2*o/(t-e),p=2*o/(n-r),m=(t+e)/(t-e),_=(n+r)/(n-r);let g,S;if(l===ii)g=-(c+o)/(c-o),S=-2*c*o/(c-o);else if(l===Po)g=-c/(c-o),S=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=p,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,o,c,l=ii){const h=this.elements,d=1/(t-e),p=1/(n-r),m=1/(c-o),_=(t+e)*d,g=(n+r)*p;let S,E;if(l===ii)S=(c+o)*m,E=-2*m;else if(l===Po)S=o*m,E=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-g,h[2]=0,h[6]=0,h[10]=E,h[14]=-S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ir=new z,Ln=new at,L0=new z(0,0,0),I0=new z(1,1,1),fi=new z,Hs=new z,pn=new z,Ru=new at,Pu=new hn;class An{constructor(e=0,t=0,n=0,r=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],c=r[4],l=r[8],h=r[1],d=r[5],p=r[9],m=r[2],_=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-Gt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,g),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-p,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ru,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class ul{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let N0=0;const Du=new z,rr=new hn,Kn=new at,Vs=new z,Wr=new z,F0=new z,U0=new hn,Lu=new z(1,0,0),Iu=new z(0,1,0),Nu=new z(0,0,1),Fu={type:"added"},O0={type:"removed"},sr={type:"childadded",child:null},Sa={type:"childremoved",child:null};class Ft extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new z,t=new An,n=new hn,r=new z(1,1,1);function o(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new st}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(Lu,e)}rotateY(e){return this.rotateOnAxis(Iu,e)}rotateZ(e){return this.rotateOnAxis(Nu,e)}translateOnAxis(e,t){return Du.copy(e).applyQuaternion(this.quaternion),this.position.add(Du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lu,e)}translateY(e){return this.translateOnAxis(Iu,e)}translateZ(e){return this.translateOnAxis(Nu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Wr,Vs,this.up):Kn.lookAt(Vs,Wr,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),rr.setFromRotationMatrix(Kn),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fu),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O0),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fu),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,F0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,U0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const m=h[d];o(e.shapes,m)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,d=this.material.length;h<d;h++)l.push(o(e.materials,this.material[h]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(o(e.animations,h))}}if(t){const l=c(e.geometries),h=c(e.materials),d=c(e.textures),p=c(e.images),m=c(e.shapes),_=c(e.skeletons),g=c(e.animations),S=c(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),_.length>0&&(n.skeletons=_),g.length>0&&(n.animations=g),S.length>0&&(n.nodes=S)}return n.object=r,n;function c(l){const h=[];for(const d in l){const p=l[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new z(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new z,Jn=new z,Ma=new z,Qn=new z,or=new z,ar=new z,Uu=new z,Ea=new z,ba=new z,wa=new z,Ta=new Et,Aa=new Et,Ca=new Et;class bn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),In.subVectors(e,t),r.cross(In);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){In.subVectors(r,t),Jn.subVectors(n,t),Ma.subVectors(e,t);const c=In.dot(In),l=In.dot(Jn),h=In.dot(Ma),d=Jn.dot(Jn),p=Jn.dot(Ma),m=c*d-l*l;if(m===0)return o.set(0,0,0),null;const _=1/m,g=(d*h-l*p)*_,S=(c*p-l*h)*_;return o.set(1-g-S,S,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,r,o,c,l,h){return this.getBarycoord(e,t,n,r,Qn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Qn.x),h.addScaledVector(c,Qn.y),h.addScaledVector(l,Qn.z),h)}static getInterpolatedAttribute(e,t,n,r,o,c){return Ta.setScalar(0),Aa.setScalar(0),Ca.setScalar(0),Ta.fromBufferAttribute(e,t),Aa.fromBufferAttribute(e,n),Ca.fromBufferAttribute(e,r),c.setScalar(0),c.addScaledVector(Ta,o.x),c.addScaledVector(Aa,o.y),c.addScaledVector(Ca,o.z),c}static isFrontFacing(e,t,n,r){return In.subVectors(n,t),Jn.subVectors(e,t),In.cross(Jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),In.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return bn.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let c,l;or.subVectors(r,n),ar.subVectors(o,n),Ea.subVectors(e,n);const h=or.dot(Ea),d=ar.dot(Ea);if(h<=0&&d<=0)return t.copy(n);ba.subVectors(e,r);const p=or.dot(ba),m=ar.dot(ba);if(p>=0&&m<=p)return t.copy(r);const _=h*m-p*d;if(_<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(n).addScaledVector(or,c);wa.subVectors(e,o);const g=or.dot(wa),S=ar.dot(wa);if(S>=0&&g<=S)return t.copy(o);const E=g*d-h*S;if(E<=0&&d>=0&&S<=0)return l=d/(d-S),t.copy(n).addScaledVector(ar,l);const x=p*S-g*m;if(x<=0&&m-p>=0&&g-S>=0)return Uu.subVectors(o,r),l=(m-p)/(m-p+(g-S)),t.copy(r).addScaledVector(Uu,l);const y=1/(x+E+_);return c=E*y,l=_*y,t.copy(n).addScaledVector(or,c).addScaledVector(ar,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ot{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=St.workingColorSpace){if(e=ll(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,c=2*n-o;this.r=Ra(c,o,e+1/3),this.g=Ra(c,o,e),this.b=Ra(c,o,e-1/3)}return St.toWorkingColorSpace(this,r),this}setStyle(e,t=En){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=r[1],l=r[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=Sd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return St.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Gt(Qt.r*255,0,255))*65536+Math.round(Gt(Qt.g*255,0,255))*256+Math.round(Gt(Qt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,r=Qt.g,o=Qt.b,c=Math.max(n,r,o),l=Math.min(n,r,o);let h,d;const p=(l+c)/2;if(l===c)h=0,d=0;else{const m=c-l;switch(d=p<=.5?m/(c+l):m/(2-c-l),c){case n:h=(r-o)/m+(r<o?6:0);break;case r:h=(o-n)/m+2;break;case o:h=(n-r)/m+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=En){St.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,r=Qt.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Gs);const n=es(pi.h,Gs.h,t),r=es(pi.s,Gs.s,t),o=es(pi.l,Gs.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new ot;ot.NAMES=Sd;let B0=0;class Yi extends ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Tn(),this.name="",this.blending=yr,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nc&&(n.blendSrc=this.blendSrc),this.blendDst!==ic&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}if(t){const o=r(e.textures),c=r(e.images);o.length>0&&(n.textures=o),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Do extends Yi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new z,Ws=new Ae;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),o=bt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),e}}class Md extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ed extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ut extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let k0=0;const Sn=new at,Pa=new Ft,cr=new z,mn=new Wn,Xr=new Wn,$t=new z;class Zt extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vd(e)?Ed:Md)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new st().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ut(n,3))}else{for(let n=0,r=t.count;n<r;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];mn.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const l=t[o];Xr.setFromBufferAttribute(l),this.morphTargetsRelative?($t.addVectors(mn.min,Xr.min),mn.expandByPoint($t),$t.addVectors(mn.max,Xr.max),mn.expandByPoint($t)):(mn.expandByPoint(Xr.min),mn.expandByPoint(Xr.max))}mn.getCenter(n);let r=0;for(let o=0,c=e.count;o<c;o++)$t.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared($t));if(t)for(let o=0,c=t.length;o<c;o++){const l=t[o],h=this.morphTargetsRelative;for(let d=0,p=l.count;d<p;d++)$t.fromBufferAttribute(l,d),h&&(cr.fromBufferAttribute(e,d),$t.add(cr)),r=Math.max(r,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],h=[];for(let H=0;H<n.count;H++)l[H]=new z,h[H]=new z;const d=new z,p=new z,m=new z,_=new Ae,g=new Ae,S=new Ae,E=new z,x=new z;function y(H,I,b){d.fromBufferAttribute(n,H),p.fromBufferAttribute(n,I),m.fromBufferAttribute(n,b),_.fromBufferAttribute(o,H),g.fromBufferAttribute(o,I),S.fromBufferAttribute(o,b),p.sub(d),m.sub(d),g.sub(_),S.sub(_);const O=1/(g.x*S.y-S.x*g.y);isFinite(O)&&(E.copy(p).multiplyScalar(S.y).addScaledVector(m,-g.y).multiplyScalar(O),x.copy(m).multiplyScalar(g.x).addScaledVector(p,-S.x).multiplyScalar(O),l[H].add(E),l[I].add(E),l[b].add(E),h[H].add(x),h[I].add(x),h[b].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let H=0,I=N.length;H<I;++H){const b=N[H],O=b.start,q=b.count;for(let Z=O,Q=O+q;Z<Q;Z+=3)y(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const P=new z,A=new z,V=new z,L=new z;function k(H){V.fromBufferAttribute(r,H),L.copy(V);const I=l[H];P.copy(I),P.sub(V.multiplyScalar(V.dot(I))).normalize(),A.crossVectors(L,I);const O=A.dot(h[H])<0?-1:1;c.setXYZW(H,P.x,P.y,P.z,O)}for(let H=0,I=N.length;H<I;++H){const b=N[H],O=b.start,q=b.count;for(let Z=O,Q=O+q;Z<Q;Z+=3)k(e.getX(Z+0)),k(e.getX(Z+1)),k(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,g=n.count;_<g;_++)n.setXYZ(_,0,0,0);const r=new z,o=new z,c=new z,l=new z,h=new z,d=new z,p=new z,m=new z;if(e)for(let _=0,g=e.count;_<g;_+=3){const S=e.getX(_+0),E=e.getX(_+1),x=e.getX(_+2);r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,E),c.fromBufferAttribute(t,x),p.subVectors(c,o),m.subVectors(r,o),p.cross(m),l.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,x),l.add(p),h.add(p),d.add(p),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(E,h.x,h.y,h.z),n.setXYZ(x,d.x,d.y,d.z)}else for(let _=0,g=t.count;_<g;_+=3)r.fromBufferAttribute(t,_+0),o.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),p.subVectors(c,o),m.subVectors(r,o),p.cross(m),n.setXYZ(_+0,p.x,p.y,p.z),n.setXYZ(_+1,p.x,p.y,p.z),n.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(l,h){const d=l.array,p=l.itemSize,m=l.normalized,_=new d.constructor(h.length*p);let g=0,S=0;for(let E=0,x=h.length;E<x;E++){l.isInterleavedBufferAttribute?g=h[E]*l.data.stride+l.offset:g=h[E]*p;for(let y=0;y<p;y++)_[S++]=d[g++]}return new qt(_,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],d=e(h,n);t.setAttribute(l,d)}const o=this.morphAttributes;for(const l in o){const h=[],d=o[l];for(let p=0,m=d.length;p<m;p++){const _=d[p],g=e(_,n);h.push(g)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,h=c.length;l<h;l++){const d=c[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const d=n[h];e.data.attributes[h]=d.toJSON(e.data)}const r={};let o=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let m=0,_=d.length;m<_;m++){const g=d[m];p.push(g.toJSON(e.data))}p.length>0&&(r[h]=p,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const d in r){const p=r[d];this.setAttribute(d,p.clone(t))}const o=e.morphAttributes;for(const d in o){const p=[],m=o[d];for(let _=0,g=m.length;_<g;_++)p.push(m[_].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,p=c.length;d<p;d++){const m=c[d];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ou=new at,Ii=new Nr,Xs=new ai,Bu=new z,$s=new z,js=new z,Ys=new z,Da=new z,qs=new z,ku=new z,Zs=new z;class en extends Ft{constructor(e=new Zt,t=new Do){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(o&&l){qs.set(0,0,0);for(let h=0,d=o.length;h<d;h++){const p=l[h],m=o[h];p!==0&&(Da.fromBufferAttribute(m,e),c?qs.addScaledVector(Da,p):qs.addScaledVector(Da.sub(t),p))}t.add(qs)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(o),Ii.copy(e.ray).recast(e.near),!(Xs.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Xs,Bu)===null||Ii.origin.distanceToSquared(Bu)>(e.far-e.near)**2))&&(Ou.copy(o).invert(),Ii.copy(e.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let r;const o=this.geometry,c=this.material,l=o.index,h=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,_=o.groups,g=o.drawRange;if(l!==null)if(Array.isArray(c))for(let S=0,E=_.length;S<E;S++){const x=_[S],y=c[x.materialIndex],N=Math.max(x.start,g.start),P=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let A=N,V=P;A<V;A+=3){const L=l.getX(A),k=l.getX(A+1),H=l.getX(A+2);r=Ks(this,y,e,n,d,p,m,L,k,H),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const S=Math.max(0,g.start),E=Math.min(l.count,g.start+g.count);for(let x=S,y=E;x<y;x+=3){const N=l.getX(x),P=l.getX(x+1),A=l.getX(x+2);r=Ks(this,c,e,n,d,p,m,N,P,A),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(c))for(let S=0,E=_.length;S<E;S++){const x=_[S],y=c[x.materialIndex],N=Math.max(x.start,g.start),P=Math.min(h.count,Math.min(x.start+x.count,g.start+g.count));for(let A=N,V=P;A<V;A+=3){const L=A,k=A+1,H=A+2;r=Ks(this,y,e,n,d,p,m,L,k,H),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const S=Math.max(0,g.start),E=Math.min(h.count,g.start+g.count);for(let x=S,y=E;x<y;x+=3){const N=x,P=x+1,A=x+2;r=Ks(this,c,e,n,d,p,m,N,P,A),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function z0(i,e,t,n,r,o,c,l){let h;if(e.side===ln?h=n.intersectTriangle(c,o,r,!0,l):h=n.intersectTriangle(r,o,c,e.side===Si,l),h===null)return null;Zs.copy(l),Zs.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Zs);return d<t.near||d>t.far?null:{distance:d,point:Zs.clone(),object:i}}function Ks(i,e,t,n,r,o,c,l,h,d){i.getVertexPosition(l,$s),i.getVertexPosition(h,js),i.getVertexPosition(d,Ys);const p=z0(i,e,t,n,$s,js,Ys,ku);if(p){const m=new z;bn.getBarycoord(ku,$s,js,Ys,m),r&&(p.uv=bn.getInterpolatedAttribute(r,l,h,d,m,new Ae)),o&&(p.uv1=bn.getInterpolatedAttribute(o,l,h,d,m,new Ae)),c&&(p.normal=bn.getInterpolatedAttribute(c,l,h,d,m,new z),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const _={a:l,b:h,c:d,normal:new z,materialIndex:0};bn.getNormal($s,js,Ys,_.normal),p.face=_,p.barycoord=m}return p}class Fr extends Zt{constructor(e=1,t=1,n=1,r=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:c};const l=this;r=Math.floor(r),o=Math.floor(o),c=Math.floor(c);const h=[],d=[],p=[],m=[];let _=0,g=0;S("z","y","x",-1,-1,n,t,e,c,o,0),S("z","y","x",1,-1,n,t,-e,c,o,1),S("x","z","y",1,1,e,n,t,r,c,2),S("x","z","y",1,-1,e,n,-t,r,c,3),S("x","y","z",1,-1,e,t,n,r,o,4),S("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(h),this.setAttribute("position",new Ut(d,3)),this.setAttribute("normal",new Ut(p,3)),this.setAttribute("uv",new Ut(m,2));function S(E,x,y,N,P,A,V,L,k,H,I){const b=A/k,O=V/H,q=A/2,Z=V/2,Q=L/2,ne=k+1,ie=H+1;let me=0,se=0;const Ce=new z;for(let Le=0;Le<ie;Le++){const Oe=Le*O-Z;for(let Ke=0;Ke<ne;Ke++){const ht=Ke*b-q;Ce[E]=ht*N,Ce[x]=Oe*P,Ce[y]=Q,d.push(Ce.x,Ce.y,Ce.z),Ce[E]=0,Ce[x]=0,Ce[y]=L>0?1:-1,p.push(Ce.x,Ce.y,Ce.z),m.push(Ke/k),m.push(1-Le/H),me+=1}}for(let Le=0;Le<H;Le++)for(let Oe=0;Oe<k;Oe++){const Ke=_+Oe+ne*Le,ht=_+Oe+ne*(Le+1),oe=_+(Oe+1)+ne*(Le+1),ve=_+(Oe+1)+ne*Le;h.push(Ke,ht,ve),h.push(ht,oe,ve),se+=6}l.addGroup(g,se,I),g+=se,_+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function cn(i){const e={};for(let t=0;t<i.length;t++){const n=Pr(i[t]);for(const r in n)e[r]=n[r]}return e}function H0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const V0={clone:Pr,merge:cn};var G0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Yi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=H0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wd extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new z,zu=new Ae,Hu=new Ae;class gn extends wd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,zu,Hu),t.subVectors(Hu,zu)}setViewOffset(e,t,n,r,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;o+=c.offsetX*r/h,t-=c.offsetY*n/d,r*=c.width/h,n*=c.height/d}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lr=-90,ur=1;class X0 extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(lr,ur,e,t);r.layers=this.layers,this.add(r);const o=new gn(lr,ur,e,t);o.layers=this.layers,this.add(o);const c=new gn(lr,ur,e,t);c.layers=this.layers,this.add(c);const l=new gn(lr,ur,e,t);l.layers=this.layers,this.add(l);const h=new gn(lr,ur,e,t);h.layers=this.layers,this.add(h);const d=new gn(lr,ur,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,c,l,h]=t;for(const d of t)this.remove(d);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Po)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,l,h,d,p]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,h),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(m,_,g),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Td extends tn{constructor(e,t,n,r,o,c,l,h,d,p){e=e!==void 0?e:[],t=t!==void 0?t:wr,super(e,t,n,r,o,c,l,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $0 extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Td(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fr(5,5,5),o=new Mi({name:"CubemapFromEquirect",uniforms:Pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:yi});o.uniforms.tEquirect.value=t;const c=new en(r,o),l=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Gn),new X0(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(o)}}const La=new z,j0=new z,Y0=new st;class _i{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=La.subVectors(n,t).cross(j0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(La),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Y0.getNormalMatrix(e),r=this.coplanarPoint(La).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new ai,Js=new z;class hl{constructor(e=new _i,t=new _i,n=new _i,r=new _i,o=new _i,c=new _i){this.planes=[e,t,n,r,o,c]}set(e,t,n,r,o,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(o),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii){const n=this.planes,r=e.elements,o=r[0],c=r[1],l=r[2],h=r[3],d=r[4],p=r[5],m=r[6],_=r[7],g=r[8],S=r[9],E=r[10],x=r[11],y=r[12],N=r[13],P=r[14],A=r[15];if(n[0].setComponents(h-o,_-d,x-g,A-y).normalize(),n[1].setComponents(h+o,_+d,x+g,A+y).normalize(),n[2].setComponents(h+c,_+p,x+S,A+N).normalize(),n[3].setComponents(h-c,_-p,x-S,A-N).normalize(),n[4].setComponents(h-l,_-m,x-E,A-P).normalize(),t===ii)n[5].setComponents(h+l,_+m,x+E,A+P).normalize();else if(t===Po)n[5].setComponents(l,m,E,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Js.x=r.normal.x>0?e.max.x:e.min.x,Js.y=r.normal.y>0?e.max.y:e.min.y,Js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ad(){let i=null,e=!1,t=null,n=null;function r(o,c){t(o,c),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function q0(i){const e=new WeakMap;function t(l,h){const d=l.array,p=l.usage,m=d.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,d,p),l.onUploadCallback();let g;if(d instanceof Float32Array)g=i.FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=i.SHORT;else if(d instanceof Uint32Array)g=i.UNSIGNED_INT;else if(d instanceof Int32Array)g=i.INT;else if(d instanceof Int8Array)g=i.BYTE;else if(d instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function n(l,h,d){const p=h.array,m=h.updateRanges;if(i.bindBuffer(d,l),m.length===0)i.bufferSubData(d,0,p);else{m.sort((g,S)=>g.start-S.start);let _=0;for(let g=1;g<m.length;g++){const S=m[_],E=m[g];E.start<=S.start+S.count+1?S.count=Math.max(S.count,E.start+E.count-S.start):(++_,m[_]=E)}m.length=_+1;for(let g=0,S=m.length;g<S;g++){const E=m[g];i.bufferSubData(d,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=e.get(l);h&&(i.deleteBuffer(h.buffer),e.delete(l))}function c(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const p=e.get(l);(!p||p.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,t(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,l,h),d.version=l.version}}return{get:r,remove:o,update:c}}class Vo extends Zt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,c=t/2,l=Math.floor(n),h=Math.floor(r),d=l+1,p=h+1,m=e/l,_=t/h,g=[],S=[],E=[],x=[];for(let y=0;y<p;y++){const N=y*_-c;for(let P=0;P<d;P++){const A=P*m-o;S.push(A,-N,0),E.push(0,0,1),x.push(P/l),x.push(1-y/h)}}for(let y=0;y<h;y++)for(let N=0;N<l;N++){const P=N+d*y,A=N+d*(y+1),V=N+1+d*(y+1),L=N+1+d*y;g.push(P,A,L),g.push(A,V,L)}this.setIndex(g),this.setAttribute("position",new Ut(S,3)),this.setAttribute("normal",new Ut(E,3)),this.setAttribute("uv",new Ut(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K0=`#ifdef USE_ALPHAHASH
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
#endif`,J0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ey=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ny=`#ifdef USE_AOMAP
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
#endif`,iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ry=`#ifdef USE_BATCHING
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
#endif`,sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ay=`vec3 objectNormal = vec3( normal );
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
} // validated`,ly=`#ifdef USE_IRIDESCENCE
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
#endif`,uy=`#ifdef USE_BUMPMAP
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
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,my=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vy=`#if defined( USE_COLOR_ALPHA )
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
} // validated`,xy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sy=`vec3 transformedNormal = objectNormal;
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
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ey=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,by=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
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
#endif`,Ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
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
#endif`,Dy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fy=`#ifdef USE_FOG
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
#endif`,Oy=`#ifdef USE_GRADIENTMAP
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
}`,By=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ky=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hy=`uniform bool receiveShadow;
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
#endif`,Vy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jy=`PhysicalMaterial material;
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
#endif`,Yy=`struct PhysicalMaterial {
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
}`,qy=`
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
#endif`,Zy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sx=`#if defined( USE_POINTS_UV )
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
#endif`,ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ux=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hx=`#ifdef USE_MORPHTARGETS
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
#endif`,dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,px=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vx=`#ifdef USE_NORMALMAP
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
#endif`,yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ix=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nx=`float getShadowMask() {
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
}`,Fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ux=`#ifdef USE_SKINNING
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
#endif`,Ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bx=`#ifdef USE_SKINNING
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
#endif`,kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gx=`#ifdef USE_TRANSMISSION
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
#endif`,Wx=`#ifdef USE_TRANSMISSION
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
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zx=`uniform sampler2D t2D;
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`#include <common>
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
}`,nS=`#if DEPTH_PACKING == 3200
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
}`,iS=`#define DISTANCE
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
}`,rS=`#define DISTANCE
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
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`uniform float scale;
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
}`,cS=`uniform vec3 diffuse;
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
}`,lS=`#include <common>
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
}`,uS=`uniform vec3 diffuse;
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
}`,hS=`#define LAMBERT
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
}`,dS=`#define LAMBERT
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
}`,fS=`#define MATCAP
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
}`,pS=`#define MATCAP
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
}`,mS=`#define NORMAL
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
}`,_S=`#define NORMAL
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
}`,gS=`#define PHONG
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
}`,vS=`#define PHONG
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
}`,yS=`#define STANDARD
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
}`,xS=`#define STANDARD
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
}`,SS=`#define TOON
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
}`,MS=`#define TOON
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
}`,ES=`uniform float size;
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
}`,bS=`uniform vec3 diffuse;
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
}`,wS=`#include <common>
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
}`,TS=`uniform vec3 color;
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
}`,AS=`uniform float rotation;
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
}`,CS=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:Z0,alphahash_pars_fragment:K0,alphamap_fragment:J0,alphamap_pars_fragment:Q0,alphatest_fragment:ey,alphatest_pars_fragment:ty,aomap_fragment:ny,aomap_pars_fragment:iy,batching_pars_vertex:ry,batching_vertex:sy,begin_vertex:oy,beginnormal_vertex:ay,bsdfs:cy,iridescence_fragment:ly,bumpmap_pars_fragment:uy,clipping_planes_fragment:hy,clipping_planes_pars_fragment:dy,clipping_planes_pars_vertex:fy,clipping_planes_vertex:py,color_fragment:my,color_pars_fragment:_y,color_pars_vertex:gy,color_vertex:vy,common:yy,cube_uv_reflection_fragment:xy,defaultnormal_vertex:Sy,displacementmap_pars_vertex:My,displacementmap_vertex:Ey,emissivemap_fragment:by,emissivemap_pars_fragment:wy,colorspace_fragment:Ty,colorspace_pars_fragment:Ay,envmap_fragment:Cy,envmap_common_pars_fragment:Ry,envmap_pars_fragment:Py,envmap_pars_vertex:Dy,envmap_physical_pars_fragment:Vy,envmap_vertex:Ly,fog_vertex:Iy,fog_pars_vertex:Ny,fog_fragment:Fy,fog_pars_fragment:Uy,gradientmap_pars_fragment:Oy,lightmap_pars_fragment:By,lights_lambert_fragment:ky,lights_lambert_pars_fragment:zy,lights_pars_begin:Hy,lights_toon_fragment:Gy,lights_toon_pars_fragment:Wy,lights_phong_fragment:Xy,lights_phong_pars_fragment:$y,lights_physical_fragment:jy,lights_physical_pars_fragment:Yy,lights_fragment_begin:qy,lights_fragment_maps:Zy,lights_fragment_end:Ky,logdepthbuf_fragment:Jy,logdepthbuf_pars_fragment:Qy,logdepthbuf_pars_vertex:ex,logdepthbuf_vertex:tx,map_fragment:nx,map_pars_fragment:ix,map_particle_fragment:rx,map_particle_pars_fragment:sx,metalnessmap_fragment:ox,metalnessmap_pars_fragment:ax,morphinstance_vertex:cx,morphcolor_vertex:lx,morphnormal_vertex:ux,morphtarget_pars_vertex:hx,morphtarget_vertex:dx,normal_fragment_begin:fx,normal_fragment_maps:px,normal_pars_fragment:mx,normal_pars_vertex:_x,normal_vertex:gx,normalmap_pars_fragment:vx,clearcoat_normal_fragment_begin:yx,clearcoat_normal_fragment_maps:xx,clearcoat_pars_fragment:Sx,iridescence_pars_fragment:Mx,opaque_fragment:Ex,packing:bx,premultiplied_alpha_fragment:wx,project_vertex:Tx,dithering_fragment:Ax,dithering_pars_fragment:Cx,roughnessmap_fragment:Rx,roughnessmap_pars_fragment:Px,shadowmap_pars_fragment:Dx,shadowmap_pars_vertex:Lx,shadowmap_vertex:Ix,shadowmask_pars_fragment:Nx,skinbase_vertex:Fx,skinning_pars_vertex:Ux,skinning_vertex:Ox,skinnormal_vertex:Bx,specularmap_fragment:kx,specularmap_pars_fragment:zx,tonemapping_fragment:Hx,tonemapping_pars_fragment:Vx,transmission_fragment:Gx,transmission_pars_fragment:Wx,uv_pars_fragment:Xx,uv_pars_vertex:$x,uv_vertex:jx,worldpos_vertex:Yx,background_vert:qx,background_frag:Zx,backgroundCube_vert:Kx,backgroundCube_frag:Jx,cube_vert:Qx,cube_frag:eS,depth_vert:tS,depth_frag:nS,distanceRGBA_vert:iS,distanceRGBA_frag:rS,equirect_vert:sS,equirect_frag:oS,linedashed_vert:aS,linedashed_frag:cS,meshbasic_vert:lS,meshbasic_frag:uS,meshlambert_vert:hS,meshlambert_frag:dS,meshmatcap_vert:fS,meshmatcap_frag:pS,meshnormal_vert:mS,meshnormal_frag:_S,meshphong_vert:gS,meshphong_frag:vS,meshphysical_vert:yS,meshphysical_frag:xS,meshtoon_vert:SS,meshtoon_frag:MS,points_vert:ES,points_frag:bS,shadow_vert:wS,shadow_frag:TS,sprite_vert:AS,sprite_frag:CS},De={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Vn={basic:{uniforms:cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ot(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:cn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:cn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ot(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:cn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:cn([De.points,De.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:cn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:cn([De.common,De.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:cn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:cn([De.sprite,De.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:cn([De.common,De.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:cn([De.lights,De.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Vn.physical={uniforms:cn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Qs={r:0,b:0,g:0},Fi=new An,RS=new at;function PS(i,e,t,n,r,o,c){const l=new ot(0);let h=o===!0?0:1,d,p,m=null,_=0,g=null;function S(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?t:e).get(P)),P}function E(N){let P=!1;const A=S(N);A===null?y(l,h):A&&A.isColor&&(y(A,1),P=!0);const V=i.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(N,P){const A=S(P);A&&(A.isCubeTexture||A.mapping===zo)?(p===void 0&&(p=new en(new Fr(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Pr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Fi.copy(P.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),p.material.uniforms.envMap.value=A,p.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(RS.makeRotationFromEuler(Fi)),p.material.toneMapped=St.getTransfer(A.colorSpace)!==Tt,(m!==A||_!==A.version||g!==i.toneMapping)&&(p.material.needsUpdate=!0,m=A,_=A.version,g=i.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(d===void 0&&(d=new en(new Vo(2,2),new Mi({name:"BackgroundMaterial",uniforms:Pr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=A,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.toneMapped=St.getTransfer(A.colorSpace)!==Tt,A.matrixAutoUpdate===!0&&A.updateMatrix(),d.material.uniforms.uvTransform.value.copy(A.matrix),(m!==A||_!==A.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,m=A,_=A.version,g=i.toneMapping),d.layers.enableAll(),N.unshift(d,d.geometry,d.material,0,0,null))}function y(N,P){N.getRGB(Qs,bd(i)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,P,c)}return{getClearColor:function(){return l},setClearColor:function(N,P=1){l.set(N),h=P,y(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,y(l,h)},render:E,addToRenderList:x}}function DS(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=_(null);let o=r,c=!1;function l(b,O,q,Z,Q){let ne=!1;const ie=m(Z,q,O);o!==ie&&(o=ie,d(o.object)),ne=g(b,Z,q,Q),ne&&S(b,Z,q,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(ne||c)&&(c=!1,A(b,O,q,Z),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function h(){return i.createVertexArray()}function d(b){return i.bindVertexArray(b)}function p(b){return i.deleteVertexArray(b)}function m(b,O,q){const Z=q.wireframe===!0;let Q=n[b.id];Q===void 0&&(Q={},n[b.id]=Q);let ne=Q[O.id];ne===void 0&&(ne={},Q[O.id]=ne);let ie=ne[Z];return ie===void 0&&(ie=_(h()),ne[Z]=ie),ie}function _(b){const O=[],q=[],Z=[];for(let Q=0;Q<t;Q++)O[Q]=0,q[Q]=0,Z[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:Z,object:b,attributes:{},index:null}}function g(b,O,q,Z){const Q=o.attributes,ne=O.attributes;let ie=0;const me=q.getAttributes();for(const se in me)if(me[se].location>=0){const Le=Q[se];let Oe=ne[se];if(Oe===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(Oe=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(Oe=b.instanceColor)),Le===void 0||Le.attribute!==Oe||Oe&&Le.data!==Oe.data)return!0;ie++}return o.attributesNum!==ie||o.index!==Z}function S(b,O,q,Z){const Q={},ne=O.attributes;let ie=0;const me=q.getAttributes();for(const se in me)if(me[se].location>=0){let Le=ne[se];Le===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(Le=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(Le=b.instanceColor));const Oe={};Oe.attribute=Le,Le&&Le.data&&(Oe.data=Le.data),Q[se]=Oe,ie++}o.attributes=Q,o.attributesNum=ie,o.index=Z}function E(){const b=o.newAttributes;for(let O=0,q=b.length;O<q;O++)b[O]=0}function x(b){y(b,0)}function y(b,O){const q=o.newAttributes,Z=o.enabledAttributes,Q=o.attributeDivisors;q[b]=1,Z[b]===0&&(i.enableVertexAttribArray(b),Z[b]=1),Q[b]!==O&&(i.vertexAttribDivisor(b,O),Q[b]=O)}function N(){const b=o.newAttributes,O=o.enabledAttributes;for(let q=0,Z=O.length;q<Z;q++)O[q]!==b[q]&&(i.disableVertexAttribArray(q),O[q]=0)}function P(b,O,q,Z,Q,ne,ie){ie===!0?i.vertexAttribIPointer(b,O,q,Q,ne):i.vertexAttribPointer(b,O,q,Z,Q,ne)}function A(b,O,q,Z){E();const Q=Z.attributes,ne=q.getAttributes(),ie=O.defaultAttributeValues;for(const me in ne){const se=ne[me];if(se.location>=0){let Ce=Q[me];if(Ce===void 0&&(me==="instanceMatrix"&&b.instanceMatrix&&(Ce=b.instanceMatrix),me==="instanceColor"&&b.instanceColor&&(Ce=b.instanceColor)),Ce!==void 0){const Le=Ce.normalized,Oe=Ce.itemSize,Ke=e.get(Ce);if(Ke===void 0)continue;const ht=Ke.buffer,oe=Ke.type,ve=Ke.bytesPerElement,Ue=oe===i.INT||oe===i.UNSIGNED_INT||Ce.gpuType===nl;if(Ce.isInterleavedBufferAttribute){const be=Ce.data,pe=be.stride,Me=Ce.offset;if(be.isInstancedInterleavedBuffer){for(let Je=0;Je<se.locationSize;Je++)y(se.location+Je,be.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Je=0;Je<se.locationSize;Je++)x(se.location+Je);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let Je=0;Je<se.locationSize;Je++)P(se.location+Je,Oe/se.locationSize,oe,Le,pe*ve,(Me+Oe/se.locationSize*Je)*ve,Ue)}else{if(Ce.isInstancedBufferAttribute){for(let be=0;be<se.locationSize;be++)y(se.location+be,Ce.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let be=0;be<se.locationSize;be++)x(se.location+be);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let be=0;be<se.locationSize;be++)P(se.location+be,Oe/se.locationSize,oe,Le,Oe*ve,Oe/se.locationSize*be*ve,Ue)}}else if(ie!==void 0){const Le=ie[me];if(Le!==void 0)switch(Le.length){case 2:i.vertexAttrib2fv(se.location,Le);break;case 3:i.vertexAttrib3fv(se.location,Le);break;case 4:i.vertexAttrib4fv(se.location,Le);break;default:i.vertexAttrib1fv(se.location,Le)}}}}N()}function V(){H();for(const b in n){const O=n[b];for(const q in O){const Z=O[q];for(const Q in Z)p(Z[Q].object),delete Z[Q];delete O[q]}delete n[b]}}function L(b){if(n[b.id]===void 0)return;const O=n[b.id];for(const q in O){const Z=O[q];for(const Q in Z)p(Z[Q].object),delete Z[Q];delete O[q]}delete n[b.id]}function k(b){for(const O in n){const q=n[O];if(q[b.id]===void 0)continue;const Z=q[b.id];for(const Q in Z)p(Z[Q].object),delete Z[Q];delete q[b.id]}}function H(){I(),c=!0,o!==r&&(o=r,d(o.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:H,resetDefaultState:I,dispose:V,releaseStatesOfGeometry:L,releaseStatesOfProgram:k,initAttributes:E,enableAttribute:x,disableUnusedAttributes:N}}function LS(i,e,t){let n;function r(d){n=d}function o(d,p){i.drawArrays(n,d,p),t.update(p,n,1)}function c(d,p,m){m!==0&&(i.drawArraysInstanced(n,d,p,m),t.update(p,n,m))}function l(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,p,0,m);let g=0;for(let S=0;S<m;S++)g+=p[S];t.update(g,n,1)}function h(d,p,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let S=0;S<d.length;S++)c(d[S],p[S],_[S]);else{g.multiDrawArraysInstancedWEBGL(n,d,0,p,0,_,0,m);let S=0;for(let E=0;E<m;E++)S+=p[E]*_[E];t.update(S,n,1)}}this.setMode=r,this.render=o,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function IS(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(k){return!(k!==wn&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(k){const H=k===us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==oi&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Fn&&!H)}function h(k){if(k==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=h(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),V=S>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:m,reverseDepthBuffer:_,maxTextures:g,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:N,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:V,maxSamples:L}}function NS(i){const e=this;let t=null,n=0,r=!1,o=!1;const c=new _i,l=new st,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const g=m.length!==0||_||n!==0||r;return r=_,n=m.length,g},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,_){t=p(m,_,0)},this.setState=function(m,_,g){const S=m.clippingPlanes,E=m.clipIntersection,x=m.clipShadows,y=i.get(m);if(!r||S===null||S.length===0||o&&!x)o?p(null):d();else{const N=o?0:n,P=N*4;let A=y.clippingState||null;h.value=A,A=p(S,_,P,g);for(let V=0;V!==P;++V)A[V]=t[V];y.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=N}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,_,g,S){const E=m!==null?m.length:0;let x=null;if(E!==0){if(x=h.value,S!==!0||x===null){const y=g+E*4,N=_.matrixWorldInverse;l.getNormalMatrix(N),(x===null||x.length<y)&&(x=new Float32Array(y));for(let P=0,A=g;P!==E;++P,A+=4)c.copy(m[P]).applyMatrix4(N,l),c.normal.toArray(x,A),x[A+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function FS(i){let e=new WeakMap;function t(c,l){return l===hc?c.mapping=wr:l===dc&&(c.mapping=Tr),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===hc||l===dc)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const d=new $0(h.height);return d.fromEquirectangularTexture(i,c),e.set(c,d),c.addEventListener("dispose",r),t(d.texture,c.mapping)}else return null}}return c}function r(c){const l=c.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Cd extends wd{constructor(e=-1,t=1,n=1,r=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,c=n+e,l=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,c=o+d*this.view.width,l-=p*this.view.offsetY,h=l-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _r=4,Vu=[.125,.215,.35,.446,.526,.582],zi=20,Ia=new Cd,Gu=new ot;let Na=null,Fa=0,Ua=0,Oa=!1;const Oi=(1+Math.sqrt(5))/2,hr=1/Oi,Wu=[new z(-Oi,hr,0),new z(Oi,hr,0),new z(-hr,0,Oi),new z(hr,0,Oi),new z(0,Oi,-hr),new z(0,Oi,hr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Xu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Na,Fa,Ua),this._renderer.xr.enabled=Oa,e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:us,format:wn,colorSpace:Ir,depthBuffer:!1},r=$u(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=US(o)),this._blurMaterial=OS(o,e,t)}return r}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,n,r){const l=new gn(90,1,t,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,_=p.toneMapping;p.getClearColor(Gu),p.toneMapping=xi,p.autoClear=!1;const g=new Do({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),S=new en(new Fr,g);let E=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,E=!0):(g.color.copy(Gu),E=!0);for(let y=0;y<6;y++){const N=y%3;N===0?(l.up.set(0,h[y],0),l.lookAt(d[y],0,0)):N===1?(l.up.set(0,0,h[y]),l.lookAt(0,d[y],0)):(l.up.set(0,h[y],0),l.lookAt(0,0,d[y]));const P=this._cubeSize;eo(r,N*P,y>2?P:0,P,P),p.setRenderTarget(r),E&&p.render(S,l),p.render(e,l)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=_,p.autoClear=m,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===wr||e.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());const o=r?this._cubemapMaterial:this._equirectMaterial,c=new en(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;const h=this._cubeSize;eo(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(c,Ia)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=Wu[(r-o-1)%Wu.length];this._blur(e,o-1,o,c,l)}t.autoClear=n}_blur(e,t,n,r,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",o),this._halfBlur(c,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,c,l){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new en(this._lodPlanes[r],d),_=d.uniforms,g=this._sizeLods[n]-1,S=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*zi-1),E=o/S,x=isFinite(o)?1+Math.floor(p*E):zi;x>zi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${zi}`);const y=[];let N=0;for(let k=0;k<zi;++k){const H=k/E,I=Math.exp(-H*H/2);y.push(I),k===0?N+=I:k<x&&(N+=2*I)}for(let k=0;k<y.length;k++)y[k]=y[k]/N;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=y,_.latitudinal.value=c==="latitudinal",l&&(_.poleAxis.value=l);const{_lodMax:P}=this;_.dTheta.value=S,_.mipInt.value=P-n;const A=this._sizeLods[r],V=3*A*(r>P-_r?r-P+_r:0),L=4*(this._cubeSize-A);eo(t,V,L,3*A,2*A),h.setRenderTarget(t),h.render(m,Ia)}}function US(i){const e=[],t=[],n=[];let r=i;const o=i-_r+1+Vu.length;for(let c=0;c<o;c++){const l=Math.pow(2,r);t.push(l);let h=1/l;c>i-_r?h=Vu[c-i+_r-1]:c===0&&(h=0),n.push(h);const d=1/(l-2),p=-d,m=1+d,_=[p,p,m,p,m,m,p,p,m,m,p,m],g=6,S=6,E=3,x=2,y=1,N=new Float32Array(E*S*g),P=new Float32Array(x*S*g),A=new Float32Array(y*S*g);for(let L=0;L<g;L++){const k=L%3*2/3-1,H=L>2?0:-1,I=[k,H,0,k+2/3,H,0,k+2/3,H+1,0,k,H,0,k+2/3,H+1,0,k,H+1,0];N.set(I,E*S*L),P.set(_,x*S*L);const b=[L,L,L,L,L,L];A.set(b,y*S*L)}const V=new Zt;V.setAttribute("position",new qt(N,E)),V.setAttribute("uv",new qt(P,x)),V.setAttribute("faceIndex",new qt(A,y)),e.push(V),r>_r&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $u(i,e,t){const n=new Xi(i,e,t);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function eo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function OS(i,e,t){const n=new Float32Array(zi),r=new z(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ju(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Yu(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function dl(){return`

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
	`}function BS(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const h=l.mapping,d=h===hc||h===dc,p=h===wr||h===Tr;if(d||p){let m=e.get(l);const _=m!==void 0?m.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==_)return t===null&&(t=new Xu(i)),m=d?t.fromEquirectangular(l,m):t.fromCubemap(l,m),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),m.texture;if(m!==void 0)return m.texture;{const g=l.image;return d&&g&&g.height>0||p&&g&&r(g)?(t===null&&(t=new Xu(i)),m=d?t.fromEquirectangular(l):t.fromCubemap(l),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),l.addEventListener("dispose",o),m.texture):null}}}return l}function r(l){let h=0;const d=6;for(let p=0;p<d;p++)l[p]!==void 0&&h++;return h===d}function o(l){const h=l.target;h.removeEventListener("dispose",o);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function kS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Jr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function zS(i,e,t,n){const r={},o=new WeakMap;function c(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const S in _.attributes)e.remove(_.attributes[S]);for(const S in _.morphAttributes){const E=_.morphAttributes[S];for(let x=0,y=E.length;x<y;x++)e.remove(E[x])}_.removeEventListener("dispose",c),delete r[_.id];const g=o.get(_);g&&(e.remove(g),o.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(m,_){return r[_.id]===!0||(_.addEventListener("dispose",c),r[_.id]=!0,t.memory.geometries++),_}function h(m){const _=m.attributes;for(const S in _)e.update(_[S],i.ARRAY_BUFFER);const g=m.morphAttributes;for(const S in g){const E=g[S];for(let x=0,y=E.length;x<y;x++)e.update(E[x],i.ARRAY_BUFFER)}}function d(m){const _=[],g=m.index,S=m.attributes.position;let E=0;if(g!==null){const N=g.array;E=g.version;for(let P=0,A=N.length;P<A;P+=3){const V=N[P+0],L=N[P+1],k=N[P+2];_.push(V,L,L,k,k,V)}}else if(S!==void 0){const N=S.array;E=S.version;for(let P=0,A=N.length/3-1;P<A;P+=3){const V=P+0,L=P+1,k=P+2;_.push(V,L,L,k,k,V)}}else return;const x=new(vd(_)?Ed:Md)(_,1);x.version=E;const y=o.get(m);y&&e.remove(y),o.set(m,x)}function p(m){const _=o.get(m);if(_){const g=m.index;g!==null&&_.version<g.version&&d(m)}else d(m);return o.get(m)}return{get:l,update:h,getWireframeAttribute:p}}function HS(i,e,t){let n;function r(_){n=_}let o,c;function l(_){o=_.type,c=_.bytesPerElement}function h(_,g){i.drawElements(n,g,o,_*c),t.update(g,n,1)}function d(_,g,S){S!==0&&(i.drawElementsInstanced(n,g,o,_*c,S),t.update(g,n,S))}function p(_,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,o,_,0,S);let x=0;for(let y=0;y<S;y++)x+=g[y];t.update(x,n,1)}function m(_,g,S,E){if(S===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<_.length;y++)d(_[y]/c,g[y],E[y]);else{x.multiDrawElementsInstancedWEBGL(n,g,0,o,_,0,E,0,S);let y=0;for(let N=0;N<S;N++)y+=g[N]*E[N];t.update(y,n,1)}}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function VS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,c,l){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=l*(o/3);break;case i.LINES:t.lines+=l*(o/2);break;case i.LINE_STRIP:t.lines+=l*(o-1);break;case i.LINE_LOOP:t.lines+=l*o;break;case i.POINTS:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function GS(i,e,t){const n=new WeakMap,r=new Et;function o(c,l,h){const d=c.morphTargetInfluences,p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=p!==void 0?p.length:0;let _=n.get(l);if(_===void 0||_.count!==m){let I=function(){k.dispose(),n.delete(l),l.removeEventListener("dispose",I)};_!==void 0&&_.texture.dispose();const g=l.morphAttributes.position!==void 0,S=l.morphAttributes.normal!==void 0,E=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],y=l.morphAttributes.normal||[],N=l.morphAttributes.color||[];let P=0;g===!0&&(P=1),S===!0&&(P=2),E===!0&&(P=3);let A=l.attributes.position.count*P,V=1;A>e.maxTextureSize&&(V=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const L=new Float32Array(A*V*4*m),k=new xd(L,A,V,m);k.type=Fn,k.needsUpdate=!0;const H=P*4;for(let b=0;b<m;b++){const O=x[b],q=y[b],Z=N[b],Q=A*V*4*b;for(let ne=0;ne<O.count;ne++){const ie=ne*H;g===!0&&(r.fromBufferAttribute(O,ne),L[Q+ie+0]=r.x,L[Q+ie+1]=r.y,L[Q+ie+2]=r.z,L[Q+ie+3]=0),S===!0&&(r.fromBufferAttribute(q,ne),L[Q+ie+4]=r.x,L[Q+ie+5]=r.y,L[Q+ie+6]=r.z,L[Q+ie+7]=0),E===!0&&(r.fromBufferAttribute(Z,ne),L[Q+ie+8]=r.x,L[Q+ie+9]=r.y,L[Q+ie+10]=r.z,L[Q+ie+11]=Z.itemSize===4?r.w:1)}}_={count:m,texture:k,size:new Ae(A,V)},n.set(l,_),l.addEventListener("dispose",I)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let g=0;for(let E=0;E<d.length;E++)g+=d[E];const S=l.morphTargetsRelative?1:1-g;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",d)}h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:o}}function WS(i,e,t,n){let r=new WeakMap;function o(h){const d=n.render.frame,p=h.geometry,m=e.get(h,p);if(r.get(m)!==d&&(e.update(m),r.set(m,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==d&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){const _=h.skeleton;r.get(_)!==d&&(_.update(),r.set(_,d))}return m}function c(){r=new WeakMap}function l(h){const d=h.target;d.removeEventListener("dispose",l),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:c}}class Rd extends tn{constructor(e,t,n,r,o,c,l,h,d,p=xr){if(p!==xr&&p!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===xr&&(n=Wi),n===void 0&&p===Cr&&(n=Ar),super(null,r,o,c,l,h,p,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:yn,this.minFilter=h!==void 0?h:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Pd=new tn,qu=new Rd(1,1),Dd=new xd,Ld=new P0,Id=new Td,Zu=[],Ku=[],Ju=new Float32Array(16),Qu=new Float32Array(9),eh=new Float32Array(4);function Ur(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=Zu[r];if(o===void 0&&(o=new Float32Array(r),Zu[r]=o),e!==0){n.toArray(o,0);for(let c=1,l=0;c!==e;++c)l+=t,i[c].toArray(o,l)}return o}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Go(i,e){let t=Ku[e];t===void 0&&(t=new Int32Array(e),Ku[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function XS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $S(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function jS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function YS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function qS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;eh.set(n),i.uniformMatrix2fv(this.addr,!1,eh),Xt(t,n)}}function ZS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Qu.set(n),i.uniformMatrix3fv(this.addr,!1,Qu),Xt(t,n)}}function KS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Ju.set(n),i.uniformMatrix4fv(this.addr,!1,Ju),Xt(t,n)}}function JS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function QS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function eM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function tM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function nM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function iM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function rM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function sM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function oM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(qu.compareFunction=gd,o=qu):o=Pd,t.setTexture2D(e||o,r)}function aM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ld,r)}function cM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Id,r)}function lM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Dd,r)}function uM(i){switch(i){case 5126:return XS;case 35664:return $S;case 35665:return jS;case 35666:return YS;case 35674:return qS;case 35675:return ZS;case 35676:return KS;case 5124:case 35670:return JS;case 35667:case 35671:return QS;case 35668:case 35672:return eM;case 35669:case 35673:return tM;case 5125:return nM;case 36294:return iM;case 36295:return rM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return lM}}function hM(i,e){i.uniform1fv(this.addr,e)}function dM(i,e){const t=Ur(e,this.size,2);i.uniform2fv(this.addr,t)}function fM(i,e){const t=Ur(e,this.size,3);i.uniform3fv(this.addr,t)}function pM(i,e){const t=Ur(e,this.size,4);i.uniform4fv(this.addr,t)}function mM(i,e){const t=Ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _M(i,e){const t=Ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gM(i,e){const t=Ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vM(i,e){i.uniform1iv(this.addr,e)}function yM(i,e){i.uniform2iv(this.addr,e)}function xM(i,e){i.uniform3iv(this.addr,e)}function SM(i,e){i.uniform4iv(this.addr,e)}function MM(i,e){i.uniform1uiv(this.addr,e)}function EM(i,e){i.uniform2uiv(this.addr,e)}function bM(i,e){i.uniform3uiv(this.addr,e)}function wM(i,e){i.uniform4uiv(this.addr,e)}function TM(i,e,t){const n=this.cache,r=e.length,o=Go(t,r);Wt(n,o)||(i.uniform1iv(this.addr,o),Xt(n,o));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||Pd,o[c])}function AM(i,e,t){const n=this.cache,r=e.length,o=Go(t,r);Wt(n,o)||(i.uniform1iv(this.addr,o),Xt(n,o));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||Ld,o[c])}function CM(i,e,t){const n=this.cache,r=e.length,o=Go(t,r);Wt(n,o)||(i.uniform1iv(this.addr,o),Xt(n,o));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||Id,o[c])}function RM(i,e,t){const n=this.cache,r=e.length,o=Go(t,r);Wt(n,o)||(i.uniform1iv(this.addr,o),Xt(n,o));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||Dd,o[c])}function PM(i){switch(i){case 5126:return hM;case 35664:return dM;case 35665:return fM;case 35666:return pM;case 35674:return mM;case 35675:return _M;case 35676:return gM;case 5124:case 35670:return vM;case 35667:case 35671:return yM;case 35668:case 35672:return xM;case 35669:case 35673:return SM;case 5125:return MM;case 36294:return EM;case 36295:return bM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return RM}}class DM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uM(t.type)}}class LM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PM(t.type)}}class IM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,c=r.length;o!==c;++o){const l=r[o];l.setValue(e,t[l.id],n)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function th(i,e){i.seq.push(e),i.map[e.id]=e}function NM(i,e,t){const n=i.name,r=n.length;for(Ba.lastIndex=0;;){const o=Ba.exec(n),c=Ba.lastIndex;let l=o[1];const h=o[2]==="]",d=o[3];if(h&&(l=l|0),d===void 0||d==="["&&c+2===r){th(t,d===void 0?new DM(l,i,e):new LM(l,i,e));break}else{let m=t.map[l];m===void 0&&(m=new IM(l),th(t,m)),t=m}}}class To{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);NM(o,c,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,c=t.length;o!==c;++o){const l=t[o],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function nh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const FM=37297;let UM=0;function OM(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=r;c<o;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}const ih=new st;function BM(i){St._getMatrix(ih,St.workingColorSpace,i);const e=`mat3( ${ih.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(i)){case Ho:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function rh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+OM(i.getShaderSource(e),c)}else return r}function kM(i,e){const t=BM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function zM(i,e){let t;switch(e){case kv:t="Linear";break;case zv:t="Reinhard";break;case Hv:t="Cineon";break;case Vv:t="ACESFilmic";break;case Wv:t="AgX";break;case Xv:t="Neutral";break;case Gv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const to=new z;function HM(){St.getLuminanceCoefficients(to);const i=to.x.toFixed(4),e=to.y.toFixed(4),t=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function GM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function WM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),c=o.name;let l=1;o.type===i.FLOAT_MAT2&&(l=2),o.type===i.FLOAT_MAT3&&(l=3),o.type===i.FLOAT_MAT4&&(l=4),t[c]={type:o.type,location:i.getAttribLocation(e,c),locationSize:l}}return t}function Qr(i){return i!==""}function sh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(i){return i.replace(XM,jM)}const $M=new Map;function jM(i,e){let t=ut[e];if(t===void 0){const n=$M.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gc(t)}const YM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ah(i){return i.replace(YM,qM)}function qM(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function ch(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function ZM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===vv?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function KM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wr:case Tr:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function QM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sd:e="ENVMAP_BLENDING_MULTIPLY";break;case Ov:e="ENVMAP_BLENDING_MIX";break;case Bv:e="ENVMAP_BLENDING_ADD";break}return e}function eE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function tE(i,e,t,n){const r=i.getContext(),o=t.defines;let c=t.vertexShader,l=t.fragmentShader;const h=ZM(t),d=KM(t),p=JM(t),m=QM(t),_=eE(t),g=VM(t),S=GM(o),E=r.createProgram();let x,y,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Qr).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Qr).join(`
`),y.length>0&&(y+=`
`)):(x=[ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),y=[ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?ut.tonemapping_pars_fragment:"",t.toneMapping!==xi?zM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,kM("linearToOutputTexel",t.outputColorSpace),HM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qr).join(`
`)),c=Gc(c),c=sh(c,t),c=oh(c,t),l=Gc(l),l=sh(l,t),l=oh(l,t),c=ah(c),l=ah(l),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=N+x+c,A=N+y+l,V=nh(r,r.VERTEX_SHADER,P),L=nh(r,r.FRAGMENT_SHADER,A);r.attachShader(E,V),r.attachShader(E,L),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function k(O){if(i.debug.checkShaderErrors){const q=r.getProgramInfoLog(E).trim(),Z=r.getShaderInfoLog(V).trim(),Q=r.getShaderInfoLog(L).trim();let ne=!0,ie=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,V,L);else{const me=rh(r,V,"vertex"),se=rh(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+q+`
`+me+`
`+se)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Z===""||Q==="")&&(ie=!1);ie&&(O.diagnostics={runnable:ne,programLog:q,vertexShader:{log:Z,prefix:x},fragmentShader:{log:Q,prefix:y}})}r.deleteShader(V),r.deleteShader(L),H=new To(r,E),I=WM(r,E)}let H;this.getUniforms=function(){return H===void 0&&k(this),H};let I;this.getAttributes=function(){return I===void 0&&k(this),I};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(E,FM)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UM++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=V,this.fragmentShader=L,this}let nE=0;class iE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rE(e),t.set(e,n)),n}}class rE{constructor(e){this.id=nE++,this.code=e,this.usedTimes=0}}function sE(i,e,t,n,r,o,c){const l=new ul,h=new iE,d=new Set,p=[],m=r.logarithmicDepthBuffer,_=r.vertexTextures;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(I){return d.add(I),I===0?"uv":`uv${I}`}function x(I,b,O,q,Z){const Q=q.fog,ne=Z.geometry,ie=I.isMeshStandardMaterial?q.environment:null,me=(I.isMeshStandardMaterial?t:e).get(I.envMap||ie),se=me&&me.mapping===zo?me.image.height:null,Ce=S[I.type];I.precision!==null&&(g=r.getMaxPrecision(I.precision),g!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",g,"instead."));const Le=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Oe=Le!==void 0?Le.length:0;let Ke=0;ne.morphAttributes.position!==void 0&&(Ke=1),ne.morphAttributes.normal!==void 0&&(Ke=2),ne.morphAttributes.color!==void 0&&(Ke=3);let ht,oe,ve,Ue;if(Ce){const dt=Vn[Ce];ht=dt.vertexShader,oe=dt.fragmentShader}else ht=I.vertexShader,oe=I.fragmentShader,h.update(I),ve=h.getVertexShaderID(I),Ue=h.getFragmentShaderID(I);const be=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Me=Z.isInstancedMesh===!0,Je=Z.isBatchedMesh===!0,ct=!!I.map,X=!!I.matcap,he=!!me,B=!!I.aoMap,$e=!!I.lightMap,Ee=!!I.bumpMap,ze=!!I.normalMap,Re=!!I.displacementMap,Ze=!!I.emissiveMap,Fe=!!I.metalnessMap,F=!!I.roughnessMap,R=I.anisotropy>0,ee=I.clearcoat>0,de=I.dispersion>0,fe=I.iridescence>0,ce=I.sheen>0,Ve=I.transmission>0,Pe=R&&!!I.anisotropyMap,ke=ee&&!!I.clearcoatMap,ft=ee&&!!I.clearcoatNormalMap,Te=ee&&!!I.clearcoatRoughnessMap,Ge=fe&&!!I.iridescenceMap,et=fe&&!!I.iridescenceThicknessMap,nt=ce&&!!I.sheenColorMap,We=ce&&!!I.sheenRoughnessMap,pt=!!I.specularMap,it=!!I.specularColorMap,wt=!!I.specularIntensityMap,G=Ve&&!!I.transmissionMap,Ie=Ve&&!!I.thicknessMap,ae=!!I.gradientMap,_e=!!I.alphaMap,J=I.alphaTest>0,K=!!I.alphaHash,Qe=!!I.extensions;let Lt=xi;I.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Lt=i.toneMapping);const It={shaderID:Ce,shaderType:I.type,shaderName:I.name,vertexShader:ht,fragmentShader:oe,defines:I.defines,customVertexShaderID:ve,customFragmentShaderID:Ue,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:g,batching:Je,batchingColor:Je&&Z._colorsTexture!==null,instancing:Me,instancingColor:Me&&Z.instanceColor!==null,instancingMorph:Me&&Z.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ir,alphaToCoverage:!!I.alphaToCoverage,map:ct,matcap:X,envMap:he,envMapMode:he&&me.mapping,envMapCubeUVHeight:se,aoMap:B,lightMap:$e,bumpMap:Ee,normalMap:ze,displacementMap:_&&Re,emissiveMap:Ze,normalMapObjectSpace:ze&&I.normalMapType===Kv,normalMapTangentSpace:ze&&I.normalMapType===_d,metalnessMap:Fe,roughnessMap:F,anisotropy:R,anisotropyMap:Pe,clearcoat:ee,clearcoatMap:ke,clearcoatNormalMap:ft,clearcoatRoughnessMap:Te,dispersion:de,iridescence:fe,iridescenceMap:Ge,iridescenceThicknessMap:et,sheen:ce,sheenColorMap:nt,sheenRoughnessMap:We,specularMap:pt,specularColorMap:it,specularIntensityMap:wt,transmission:Ve,transmissionMap:G,thicknessMap:Ie,gradientMap:ae,opaque:I.transparent===!1&&I.blending===yr&&I.alphaToCoverage===!1,alphaMap:_e,alphaTest:J,alphaHash:K,combine:I.combine,mapUv:ct&&E(I.map.channel),aoMapUv:B&&E(I.aoMap.channel),lightMapUv:$e&&E(I.lightMap.channel),bumpMapUv:Ee&&E(I.bumpMap.channel),normalMapUv:ze&&E(I.normalMap.channel),displacementMapUv:Re&&E(I.displacementMap.channel),emissiveMapUv:Ze&&E(I.emissiveMap.channel),metalnessMapUv:Fe&&E(I.metalnessMap.channel),roughnessMapUv:F&&E(I.roughnessMap.channel),anisotropyMapUv:Pe&&E(I.anisotropyMap.channel),clearcoatMapUv:ke&&E(I.clearcoatMap.channel),clearcoatNormalMapUv:ft&&E(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&E(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&E(I.iridescenceMap.channel),iridescenceThicknessMapUv:et&&E(I.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&E(I.sheenColorMap.channel),sheenRoughnessMapUv:We&&E(I.sheenRoughnessMap.channel),specularMapUv:pt&&E(I.specularMap.channel),specularColorMapUv:it&&E(I.specularColorMap.channel),specularIntensityMapUv:wt&&E(I.specularIntensityMap.channel),transmissionMapUv:G&&E(I.transmissionMap.channel),thicknessMapUv:Ie&&E(I.thicknessMap.channel),alphaMapUv:_e&&E(I.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(ze||R),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ne.attributes.uv&&(ct||_e),fog:!!Q,useFog:I.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:pe,skinning:Z.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:ct&&I.map.isVideoTexture===!0&&St.getTransfer(I.map.colorSpace)===Tt,decodeVideoTextureEmissive:Ze&&I.emissiveMap.isVideoTexture===!0&&St.getTransfer(I.emissiveMap.colorSpace)===Tt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===ni,flipSided:I.side===ln,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Qe&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&I.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return It.vertexUv1s=d.has(1),It.vertexUv2s=d.has(2),It.vertexUv3s=d.has(3),d.clear(),It}function y(I){const b=[];if(I.shaderID?b.push(I.shaderID):(b.push(I.customVertexShaderID),b.push(I.customFragmentShaderID)),I.defines!==void 0)for(const O in I.defines)b.push(O),b.push(I.defines[O]);return I.isRawShaderMaterial===!1&&(N(b,I),P(b,I),b.push(i.outputColorSpace)),b.push(I.customProgramCacheKey),b.join()}function N(I,b){I.push(b.precision),I.push(b.outputColorSpace),I.push(b.envMapMode),I.push(b.envMapCubeUVHeight),I.push(b.mapUv),I.push(b.alphaMapUv),I.push(b.lightMapUv),I.push(b.aoMapUv),I.push(b.bumpMapUv),I.push(b.normalMapUv),I.push(b.displacementMapUv),I.push(b.emissiveMapUv),I.push(b.metalnessMapUv),I.push(b.roughnessMapUv),I.push(b.anisotropyMapUv),I.push(b.clearcoatMapUv),I.push(b.clearcoatNormalMapUv),I.push(b.clearcoatRoughnessMapUv),I.push(b.iridescenceMapUv),I.push(b.iridescenceThicknessMapUv),I.push(b.sheenColorMapUv),I.push(b.sheenRoughnessMapUv),I.push(b.specularMapUv),I.push(b.specularColorMapUv),I.push(b.specularIntensityMapUv),I.push(b.transmissionMapUv),I.push(b.thicknessMapUv),I.push(b.combine),I.push(b.fogExp2),I.push(b.sizeAttenuation),I.push(b.morphTargetsCount),I.push(b.morphAttributeCount),I.push(b.numDirLights),I.push(b.numPointLights),I.push(b.numSpotLights),I.push(b.numSpotLightMaps),I.push(b.numHemiLights),I.push(b.numRectAreaLights),I.push(b.numDirLightShadows),I.push(b.numPointLightShadows),I.push(b.numSpotLightShadows),I.push(b.numSpotLightShadowsWithMaps),I.push(b.numLightProbes),I.push(b.shadowMapType),I.push(b.toneMapping),I.push(b.numClippingPlanes),I.push(b.numClipIntersection),I.push(b.depthPacking)}function P(I,b){l.disableAll(),b.supportsVertexTextures&&l.enable(0),b.instancing&&l.enable(1),b.instancingColor&&l.enable(2),b.instancingMorph&&l.enable(3),b.matcap&&l.enable(4),b.envMap&&l.enable(5),b.normalMapObjectSpace&&l.enable(6),b.normalMapTangentSpace&&l.enable(7),b.clearcoat&&l.enable(8),b.iridescence&&l.enable(9),b.alphaTest&&l.enable(10),b.vertexColors&&l.enable(11),b.vertexAlphas&&l.enable(12),b.vertexUv1s&&l.enable(13),b.vertexUv2s&&l.enable(14),b.vertexUv3s&&l.enable(15),b.vertexTangents&&l.enable(16),b.anisotropy&&l.enable(17),b.alphaHash&&l.enable(18),b.batching&&l.enable(19),b.dispersion&&l.enable(20),b.batchingColor&&l.enable(21),I.push(l.mask),l.disableAll(),b.fog&&l.enable(0),b.useFog&&l.enable(1),b.flatShading&&l.enable(2),b.logarithmicDepthBuffer&&l.enable(3),b.reverseDepthBuffer&&l.enable(4),b.skinning&&l.enable(5),b.morphTargets&&l.enable(6),b.morphNormals&&l.enable(7),b.morphColors&&l.enable(8),b.premultipliedAlpha&&l.enable(9),b.shadowMapEnabled&&l.enable(10),b.doubleSided&&l.enable(11),b.flipSided&&l.enable(12),b.useDepthPacking&&l.enable(13),b.dithering&&l.enable(14),b.transmission&&l.enable(15),b.sheen&&l.enable(16),b.opaque&&l.enable(17),b.pointsUvs&&l.enable(18),b.decodeVideoTexture&&l.enable(19),b.decodeVideoTextureEmissive&&l.enable(20),b.alphaToCoverage&&l.enable(21),I.push(l.mask)}function A(I){const b=S[I.type];let O;if(b){const q=Vn[b];O=V0.clone(q.uniforms)}else O=I.uniforms;return O}function V(I,b){let O;for(let q=0,Z=p.length;q<Z;q++){const Q=p[q];if(Q.cacheKey===b){O=Q,++O.usedTimes;break}}return O===void 0&&(O=new tE(i,b,I,o),p.push(O)),O}function L(I){if(--I.usedTimes===0){const b=p.indexOf(I);p[b]=p[p.length-1],p.pop(),I.destroy()}}function k(I){h.remove(I)}function H(){h.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:A,acquireProgram:V,releaseProgram:L,releaseShaderCache:k,programs:p,dispose:H}}function oE(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let l=i.get(c);return l===void 0&&(l={},i.set(c,l)),l}function n(c){i.delete(c)}function r(c,l,h){i.get(c)[l]=h}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function aE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function lh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function uh(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function c(m,_,g,S,E,x){let y=i[e];return y===void 0?(y={id:m.id,object:m,geometry:_,material:g,groupOrder:S,renderOrder:m.renderOrder,z:E,group:x},i[e]=y):(y.id=m.id,y.object=m,y.geometry=_,y.material=g,y.groupOrder=S,y.renderOrder=m.renderOrder,y.z=E,y.group=x),e++,y}function l(m,_,g,S,E,x){const y=c(m,_,g,S,E,x);g.transmission>0?n.push(y):g.transparent===!0?r.push(y):t.push(y)}function h(m,_,g,S,E,x){const y=c(m,_,g,S,E,x);g.transmission>0?n.unshift(y):g.transparent===!0?r.unshift(y):t.unshift(y)}function d(m,_){t.length>1&&t.sort(m||aE),n.length>1&&n.sort(_||lh),r.length>1&&r.sort(_||lh)}function p(){for(let m=e,_=i.length;m<_;m++){const g=i[m];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:l,unshift:h,finish:p,sort:d}}function cE(){let i=new WeakMap;function e(n,r){const o=i.get(n);let c;return o===void 0?(c=new uh,i.set(n,[c])):r>=o.length?(c=new uh,o.push(c)):c=o[r],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function lE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ot};break;case"SpotLight":t={position:new z,direction:new z,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function uE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let hE=0;function dE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fE(i){const e=new lE,t=uE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new z);const r=new z,o=new at,c=new at;function l(d){let p=0,m=0,_=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let g=0,S=0,E=0,x=0,y=0,N=0,P=0,A=0,V=0,L=0,k=0;d.sort(dE);for(let I=0,b=d.length;I<b;I++){const O=d[I],q=O.color,Z=O.intensity,Q=O.distance,ne=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)p+=q.r*Z,m+=q.g*Z,_+=q.b*Z;else if(O.isLightProbe){for(let ie=0;ie<9;ie++)n.probe[ie].addScaledVector(O.sh.coefficients[ie],Z);k++}else if(O.isDirectionalLight){const ie=e.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const me=O.shadow,se=t.get(O);se.shadowIntensity=me.intensity,se.shadowBias=me.bias,se.shadowNormalBias=me.normalBias,se.shadowRadius=me.radius,se.shadowMapSize=me.mapSize,n.directionalShadow[g]=se,n.directionalShadowMap[g]=ne,n.directionalShadowMatrix[g]=O.shadow.matrix,N++}n.directional[g]=ie,g++}else if(O.isSpotLight){const ie=e.get(O);ie.position.setFromMatrixPosition(O.matrixWorld),ie.color.copy(q).multiplyScalar(Z),ie.distance=Q,ie.coneCos=Math.cos(O.angle),ie.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ie.decay=O.decay,n.spot[E]=ie;const me=O.shadow;if(O.map&&(n.spotLightMap[V]=O.map,V++,me.updateMatrices(O),O.castShadow&&L++),n.spotLightMatrix[E]=me.matrix,O.castShadow){const se=t.get(O);se.shadowIntensity=me.intensity,se.shadowBias=me.bias,se.shadowNormalBias=me.normalBias,se.shadowRadius=me.radius,se.shadowMapSize=me.mapSize,n.spotShadow[E]=se,n.spotShadowMap[E]=ne,A++}E++}else if(O.isRectAreaLight){const ie=e.get(O);ie.color.copy(q).multiplyScalar(Z),ie.halfWidth.set(O.width*.5,0,0),ie.halfHeight.set(0,O.height*.5,0),n.rectArea[x]=ie,x++}else if(O.isPointLight){const ie=e.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity),ie.distance=O.distance,ie.decay=O.decay,O.castShadow){const me=O.shadow,se=t.get(O);se.shadowIntensity=me.intensity,se.shadowBias=me.bias,se.shadowNormalBias=me.normalBias,se.shadowRadius=me.radius,se.shadowMapSize=me.mapSize,se.shadowCameraNear=me.camera.near,se.shadowCameraFar=me.camera.far,n.pointShadow[S]=se,n.pointShadowMap[S]=ne,n.pointShadowMatrix[S]=O.shadow.matrix,P++}n.point[S]=ie,S++}else if(O.isHemisphereLight){const ie=e.get(O);ie.skyColor.copy(O.color).multiplyScalar(Z),ie.groundColor.copy(O.groundColor).multiplyScalar(Z),n.hemi[y]=ie,y++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=_;const H=n.hash;(H.directionalLength!==g||H.pointLength!==S||H.spotLength!==E||H.rectAreaLength!==x||H.hemiLength!==y||H.numDirectionalShadows!==N||H.numPointShadows!==P||H.numSpotShadows!==A||H.numSpotMaps!==V||H.numLightProbes!==k)&&(n.directional.length=g,n.spot.length=E,n.rectArea.length=x,n.point.length=S,n.hemi.length=y,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=N,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=A+V-L,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=k,H.directionalLength=g,H.pointLength=S,H.spotLength=E,H.rectAreaLength=x,H.hemiLength=y,H.numDirectionalShadows=N,H.numPointShadows=P,H.numSpotShadows=A,H.numSpotMaps=V,H.numLightProbes=k,n.version=hE++)}function h(d,p){let m=0,_=0,g=0,S=0,E=0;const x=p.matrixWorldInverse;for(let y=0,N=d.length;y<N;y++){const P=d[y];if(P.isDirectionalLight){const A=n.directional[m];A.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),m++}else if(P.isSpotLight){const A=n.spot[g];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),g++}else if(P.isRectAreaLight){const A=n.rectArea[S];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),c.identity(),o.copy(P.matrixWorld),o.premultiply(x),c.extractRotation(o),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),S++}else if(P.isPointLight){const A=n.point[_];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),_++}else if(P.isHemisphereLight){const A=n.hemi[E];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(x),E++}}}return{setup:l,setupView:h,state:n}}function hh(i){const e=new fE(i),t=[],n=[];function r(p){d.camera=p,t.length=0,n.length=0}function o(p){t.push(p)}function c(p){n.push(p)}function l(){e.setup(t)}function h(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:c}}function pE(i){let e=new WeakMap;function t(r,o=0){const c=e.get(r);let l;return c===void 0?(l=new hh(i),e.set(r,[l])):o>=c.length?(l=new hh(i),c.push(l)):l=c[o],l}function n(){e=new WeakMap}return{get:t,dispose:n}}class mE extends Yi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _E extends Yi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vE=`uniform sampler2D shadow_pass;
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
}`;function yE(i,e,t){let n=new hl;const r=new Ae,o=new Ae,c=new Et,l=new mE({depthPacking:Zv}),h=new _E,d={},p=t.maxTextureSize,m={[Si]:ln,[ln]:Si,[ni]:ni},_=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:gE,fragmentShader:vE}),g=_.clone();g.defines.HORIZONTAL_PASS=1;const S=new Zt;S.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new en(S,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rd;let y=this.type;this.render=function(L,k,H){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;const I=i.getRenderTarget(),b=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),q=i.state;q.setBlending(yi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Z=y!==ti&&this.type===ti,Q=y===ti&&this.type!==ti;for(let ne=0,ie=L.length;ne<ie;ne++){const me=L[ne],se=me.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;r.copy(se.mapSize);const Ce=se.getFrameExtents();if(r.multiply(Ce),o.copy(se.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/Ce.x),r.x=o.x*Ce.x,se.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/Ce.y),r.y=o.y*Ce.y,se.mapSize.y=o.y)),se.map===null||Z===!0||Q===!0){const Oe=this.type!==ti?{minFilter:yn,magFilter:yn}:{};se.map!==null&&se.map.dispose(),se.map=new Xi(r.x,r.y,Oe),se.map.texture.name=me.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();const Le=se.getViewportCount();for(let Oe=0;Oe<Le;Oe++){const Ke=se.getViewport(Oe);c.set(o.x*Ke.x,o.y*Ke.y,o.x*Ke.z,o.y*Ke.w),q.viewport(c),se.updateMatrices(me,Oe),n=se.getFrustum(),A(k,H,se.camera,me,this.type)}se.isPointLightShadow!==!0&&this.type===ti&&N(se,H),se.needsUpdate=!1}y=this.type,x.needsUpdate=!1,i.setRenderTarget(I,b,O)};function N(L,k){const H=e.update(E);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Xi(r.x,r.y)),_.uniforms.shadow_pass.value=L.map.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(k,null,H,_,E,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(k,null,H,g,E,null)}function P(L,k,H,I){let b=null;const O=H.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(O!==void 0)b=O;else if(b=H.isPointLight===!0?h:l,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const q=b.uuid,Z=k.uuid;let Q=d[q];Q===void 0&&(Q={},d[q]=Q);let ne=Q[Z];ne===void 0&&(ne=b.clone(),Q[Z]=ne,k.addEventListener("dispose",V)),b=ne}if(b.visible=k.visible,b.wireframe=k.wireframe,I===ti?b.side=k.shadowSide!==null?k.shadowSide:k.side:b.side=k.shadowSide!==null?k.shadowSide:m[k.side],b.alphaMap=k.alphaMap,b.alphaTest=k.alphaTest,b.map=k.map,b.clipShadows=k.clipShadows,b.clippingPlanes=k.clippingPlanes,b.clipIntersection=k.clipIntersection,b.displacementMap=k.displacementMap,b.displacementScale=k.displacementScale,b.displacementBias=k.displacementBias,b.wireframeLinewidth=k.wireframeLinewidth,b.linewidth=k.linewidth,H.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const q=i.properties.get(b);q.light=H}return b}function A(L,k,H,I,b){if(L.visible===!1)return;if(L.layers.test(k.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===ti)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,L.matrixWorld);const Z=e.update(L),Q=L.material;if(Array.isArray(Q)){const ne=Z.groups;for(let ie=0,me=ne.length;ie<me;ie++){const se=ne[ie],Ce=Q[se.materialIndex];if(Ce&&Ce.visible){const Le=P(L,Ce,I,b);L.onBeforeShadow(i,L,k,H,Z,Le,se),i.renderBufferDirect(H,null,Z,Le,L,se),L.onAfterShadow(i,L,k,H,Z,Le,se)}}}else if(Q.visible){const ne=P(L,Q,I,b);L.onBeforeShadow(i,L,k,H,Z,ne,null),i.renderBufferDirect(H,null,Z,ne,L,null),L.onAfterShadow(i,L,k,H,Z,ne,null)}}const q=L.children;for(let Z=0,Q=q.length;Z<Q;Z++)A(q[Z],k,H,I,b)}function V(L){L.target.removeEventListener("dispose",V);for(const H in d){const I=d[H],b=L.target.uuid;b in I&&(I[b].dispose(),delete I[b])}}}const xE={[rc]:sc,[oc]:lc,[ac]:uc,[br]:cc,[sc]:rc,[lc]:oc,[uc]:ac,[cc]:br};function SE(i,e){function t(){let G=!1;const Ie=new Et;let ae=null;const _e=new Et(0,0,0,0);return{setMask:function(J){ae!==J&&!G&&(i.colorMask(J,J,J,J),ae=J)},setLocked:function(J){G=J},setClear:function(J,K,Qe,Lt,It){It===!0&&(J*=Lt,K*=Lt,Qe*=Lt),Ie.set(J,K,Qe,Lt),_e.equals(Ie)===!1&&(i.clearColor(J,K,Qe,Lt),_e.copy(Ie))},reset:function(){G=!1,ae=null,_e.set(-1,0,0,0)}}}function n(){let G=!1,Ie=!1,ae=null,_e=null,J=null;return{setReversed:function(K){if(Ie!==K){const Qe=e.get("EXT_clip_control");Ie?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);const Lt=J;J=null,this.setClear(Lt)}Ie=K},getReversed:function(){return Ie},setTest:function(K){K?be(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(K){ae!==K&&!G&&(i.depthMask(K),ae=K)},setFunc:function(K){if(Ie&&(K=xE[K]),_e!==K){switch(K){case rc:i.depthFunc(i.NEVER);break;case sc:i.depthFunc(i.ALWAYS);break;case oc:i.depthFunc(i.LESS);break;case br:i.depthFunc(i.LEQUAL);break;case ac:i.depthFunc(i.EQUAL);break;case cc:i.depthFunc(i.GEQUAL);break;case lc:i.depthFunc(i.GREATER);break;case uc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=K}},setLocked:function(K){G=K},setClear:function(K){J!==K&&(Ie&&(K=1-K),i.clearDepth(K),J=K)},reset:function(){G=!1,ae=null,_e=null,J=null,Ie=!1}}}function r(){let G=!1,Ie=null,ae=null,_e=null,J=null,K=null,Qe=null,Lt=null,It=null;return{setTest:function(dt){G||(dt?be(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(dt){Ie!==dt&&!G&&(i.stencilMask(dt),Ie=dt)},setFunc:function(dt,dn,Bt){(ae!==dt||_e!==dn||J!==Bt)&&(i.stencilFunc(dt,dn,Bt),ae=dt,_e=dn,J=Bt)},setOp:function(dt,dn,Bt){(K!==dt||Qe!==dn||Lt!==Bt)&&(i.stencilOp(dt,dn,Bt),K=dt,Qe=dn,Lt=Bt)},setLocked:function(dt){G=dt},setClear:function(dt){It!==dt&&(i.clearStencil(dt),It=dt)},reset:function(){G=!1,Ie=null,ae=null,_e=null,J=null,K=null,Qe=null,Lt=null,It=null}}}const o=new t,c=new n,l=new r,h=new WeakMap,d=new WeakMap;let p={},m={},_=new WeakMap,g=[],S=null,E=!1,x=null,y=null,N=null,P=null,A=null,V=null,L=null,k=new ot(0,0,0),H=0,I=!1,b=null,O=null,q=null,Z=null,Q=null;const ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,me=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(se)[1]),ie=me>=1):se.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ie=me>=2);let Ce=null,Le={};const Oe=i.getParameter(i.SCISSOR_BOX),Ke=i.getParameter(i.VIEWPORT),ht=new Et().fromArray(Oe),oe=new Et().fromArray(Ke);function ve(G,Ie,ae,_e){const J=new Uint8Array(4),K=i.createTexture();i.bindTexture(G,K),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<ae;Qe++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(Ie+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return K}const Ue={};Ue[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),be(i.DEPTH_TEST),c.setFunc(br),Ee(!1),ze(du),be(i.CULL_FACE),B(yi);function be(G){p[G]!==!0&&(i.enable(G),p[G]=!0)}function pe(G){p[G]!==!1&&(i.disable(G),p[G]=!1)}function Me(G,Ie){return m[G]!==Ie?(i.bindFramebuffer(G,Ie),m[G]=Ie,G===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ie),G===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Je(G,Ie){let ae=g,_e=!1;if(G){ae=_.get(Ie),ae===void 0&&(ae=[],_.set(Ie,ae));const J=G.textures;if(ae.length!==J.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let K=0,Qe=J.length;K<Qe;K++)ae[K]=i.COLOR_ATTACHMENT0+K;ae.length=J.length,_e=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,_e=!0);_e&&i.drawBuffers(ae)}function ct(G){return S!==G?(i.useProgram(G),S=G,!0):!1}const X={[ki]:i.FUNC_ADD,[xv]:i.FUNC_SUBTRACT,[Sv]:i.FUNC_REVERSE_SUBTRACT};X[Mv]=i.MIN,X[Ev]=i.MAX;const he={[bv]:i.ZERO,[wv]:i.ONE,[Tv]:i.SRC_COLOR,[nc]:i.SRC_ALPHA,[Lv]:i.SRC_ALPHA_SATURATE,[Pv]:i.DST_COLOR,[Cv]:i.DST_ALPHA,[Av]:i.ONE_MINUS_SRC_COLOR,[ic]:i.ONE_MINUS_SRC_ALPHA,[Dv]:i.ONE_MINUS_DST_COLOR,[Rv]:i.ONE_MINUS_DST_ALPHA,[Iv]:i.CONSTANT_COLOR,[Nv]:i.ONE_MINUS_CONSTANT_COLOR,[Fv]:i.CONSTANT_ALPHA,[Uv]:i.ONE_MINUS_CONSTANT_ALPHA};function B(G,Ie,ae,_e,J,K,Qe,Lt,It,dt){if(G===yi){E===!0&&(pe(i.BLEND),E=!1);return}if(E===!1&&(be(i.BLEND),E=!0),G!==yv){if(G!==x||dt!==I){if((y!==ki||A!==ki)&&(i.blendEquation(i.FUNC_ADD),y=ki,A=ki),dt)switch(G){case yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFunc(i.ONE,i.ONE);break;case fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}N=null,P=null,V=null,L=null,k.set(0,0,0),H=0,x=G,I=dt}return}J=J||Ie,K=K||ae,Qe=Qe||_e,(Ie!==y||J!==A)&&(i.blendEquationSeparate(X[Ie],X[J]),y=Ie,A=J),(ae!==N||_e!==P||K!==V||Qe!==L)&&(i.blendFuncSeparate(he[ae],he[_e],he[K],he[Qe]),N=ae,P=_e,V=K,L=Qe),(Lt.equals(k)===!1||It!==H)&&(i.blendColor(Lt.r,Lt.g,Lt.b,It),k.copy(Lt),H=It),x=G,I=!1}function $e(G,Ie){G.side===ni?pe(i.CULL_FACE):be(i.CULL_FACE);let ae=G.side===ln;Ie&&(ae=!ae),Ee(ae),G.blending===yr&&G.transparent===!1?B(yi):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),o.setMask(G.colorWrite);const _e=G.stencilWrite;l.setTest(_e),_e&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ze(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?be(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(G){b!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),b=G)}function ze(G){G!==_v?(be(i.CULL_FACE),G!==O&&(G===du?i.cullFace(i.BACK):G===gv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),O=G}function Re(G){G!==q&&(ie&&i.lineWidth(G),q=G)}function Ze(G,Ie,ae){G?(be(i.POLYGON_OFFSET_FILL),(Z!==Ie||Q!==ae)&&(i.polygonOffset(Ie,ae),Z=Ie,Q=ae)):pe(i.POLYGON_OFFSET_FILL)}function Fe(G){G?be(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function F(G){G===void 0&&(G=i.TEXTURE0+ne-1),Ce!==G&&(i.activeTexture(G),Ce=G)}function R(G,Ie,ae){ae===void 0&&(Ce===null?ae=i.TEXTURE0+ne-1:ae=Ce);let _e=Le[ae];_e===void 0&&(_e={type:void 0,texture:void 0},Le[ae]=_e),(_e.type!==G||_e.texture!==Ie)&&(Ce!==ae&&(i.activeTexture(ae),Ce=ae),i.bindTexture(G,Ie||Ue[G]),_e.type=G,_e.texture=Ie)}function ee(){const G=Le[Ce];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function de(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(G){ht.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),ht.copy(G))}function We(G){oe.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),oe.copy(G))}function pt(G,Ie){let ae=d.get(Ie);ae===void 0&&(ae=new WeakMap,d.set(Ie,ae));let _e=ae.get(G);_e===void 0&&(_e=i.getUniformBlockIndex(Ie,G.name),ae.set(G,_e))}function it(G,Ie){const _e=d.get(Ie).get(G);h.get(Ie)!==_e&&(i.uniformBlockBinding(Ie,_e,G.__bindingPointIndex),h.set(Ie,_e))}function wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},Ce=null,Le={},m={},_=new WeakMap,g=[],S=null,E=!1,x=null,y=null,N=null,P=null,A=null,V=null,L=null,k=new ot(0,0,0),H=0,I=!1,b=null,O=null,q=null,Z=null,Q=null,ht.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:be,disable:pe,bindFramebuffer:Me,drawBuffers:Je,useProgram:ct,setBlending:B,setMaterial:$e,setFlipSided:Ee,setCullFace:ze,setLineWidth:Re,setPolygonOffset:Ze,setScissorTest:Fe,activeTexture:F,bindTexture:R,unbindTexture:ee,compressedTexImage2D:de,compressedTexImage3D:fe,texImage2D:Ge,texImage3D:et,updateUBOMapping:pt,uniformBlockBinding:it,texStorage2D:ft,texStorage3D:Te,texSubImage2D:ce,texSubImage3D:Ve,compressedTexSubImage2D:Pe,compressedTexSubImage3D:ke,scissor:nt,viewport:We,reset:wt}}function dh(i,e,t,n){const r=ME(n);switch(t){case ud:return i*e;case dd:return i*e;case fd:return i*e*2;case sl:return i*e/r.components*r.byteLength;case ol:return i*e/r.components*r.byteLength;case pd:return i*e*2/r.components*r.byteLength;case al:return i*e*2/r.components*r.byteLength;case hd:return i*e*3/r.components*r.byteLength;case wn:return i*e*4/r.components*r.byteLength;case cl:return i*e*4/r.components*r.byteLength;case So:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Eo:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _c:case vc:return Math.max(i,16)*Math.max(e,8)/4;case mc:case gc:return Math.max(i,8)*Math.max(e,8)/2;case yc:case xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wo:case Uc:case Oc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case md:case Bc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case kc:case zc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ME(i){switch(i){case oi:case ad:return{byteLength:1,components:1};case rs:case cd:case us:return{byteLength:2,components:1};case il:case rl:return{byteLength:2,components:4};case Wi:case nl:case Fn:return{byteLength:4,components:1};case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function EE(i,e,t,n,r,o,c){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ae,p=new WeakMap;let m;const _=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(F,R){return g?new OffscreenCanvas(F,R):ss("canvas")}function E(F,R,ee){let de=1;const fe=Fe(F);if((fe.width>ee||fe.height>ee)&&(de=ee/Math.max(fe.width,fe.height)),de<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ce=Math.floor(de*fe.width),Ve=Math.floor(de*fe.height);m===void 0&&(m=S(ce,Ve));const Pe=R?S(ce,Ve):m;return Pe.width=ce,Pe.height=Ve,Pe.getContext("2d").drawImage(F,0,0,ce,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+ce+"x"+Ve+")."),Pe}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),F;return F}function x(F){return F.generateMipmaps}function y(F){i.generateMipmap(F)}function N(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(F,R,ee,de,fe=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ce=R;if(R===i.RED&&(ee===i.FLOAT&&(ce=i.R32F),ee===i.HALF_FLOAT&&(ce=i.R16F),ee===i.UNSIGNED_BYTE&&(ce=i.R8)),R===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ce=i.R8UI),ee===i.UNSIGNED_SHORT&&(ce=i.R16UI),ee===i.UNSIGNED_INT&&(ce=i.R32UI),ee===i.BYTE&&(ce=i.R8I),ee===i.SHORT&&(ce=i.R16I),ee===i.INT&&(ce=i.R32I)),R===i.RG&&(ee===i.FLOAT&&(ce=i.RG32F),ee===i.HALF_FLOAT&&(ce=i.RG16F),ee===i.UNSIGNED_BYTE&&(ce=i.RG8)),R===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ce=i.RG8UI),ee===i.UNSIGNED_SHORT&&(ce=i.RG16UI),ee===i.UNSIGNED_INT&&(ce=i.RG32UI),ee===i.BYTE&&(ce=i.RG8I),ee===i.SHORT&&(ce=i.RG16I),ee===i.INT&&(ce=i.RG32I)),R===i.RGB_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),ee===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),ee===i.UNSIGNED_INT&&(ce=i.RGB32UI),ee===i.BYTE&&(ce=i.RGB8I),ee===i.SHORT&&(ce=i.RGB16I),ee===i.INT&&(ce=i.RGB32I)),R===i.RGBA_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),ee===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),ee===i.UNSIGNED_INT&&(ce=i.RGBA32UI),ee===i.BYTE&&(ce=i.RGBA8I),ee===i.SHORT&&(ce=i.RGBA16I),ee===i.INT&&(ce=i.RGBA32I)),R===i.RGB&&ee===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),R===i.RGBA){const Ve=fe?Ho:St.getTransfer(de);ee===i.FLOAT&&(ce=i.RGBA32F),ee===i.HALF_FLOAT&&(ce=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(ce=Ve===Tt?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function A(F,R){let ee;return F?R===null||R===Wi||R===Ar?ee=i.DEPTH24_STENCIL8:R===Fn?ee=i.DEPTH32F_STENCIL8:R===rs&&(ee=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Wi||R===Ar?ee=i.DEPTH_COMPONENT24:R===Fn?ee=i.DEPTH_COMPONENT32F:R===rs&&(ee=i.DEPTH_COMPONENT16),ee}function V(F,R){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==yn&&F.minFilter!==Gn?Math.log2(Math.max(R.width,R.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?R.mipmaps.length:1}function L(F){const R=F.target;R.removeEventListener("dispose",L),H(R),R.isVideoTexture&&p.delete(R)}function k(F){const R=F.target;R.removeEventListener("dispose",k),b(R)}function H(F){const R=n.get(F);if(R.__webglInit===void 0)return;const ee=F.source,de=_.get(ee);if(de){const fe=de[R.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&I(F),Object.keys(de).length===0&&_.delete(ee)}n.remove(F)}function I(F){const R=n.get(F);i.deleteTexture(R.__webglTexture);const ee=F.source,de=_.get(ee);delete de[R.__cacheKey],c.memory.textures--}function b(F){const R=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(R.__webglFramebuffer[de]))for(let fe=0;fe<R.__webglFramebuffer[de].length;fe++)i.deleteFramebuffer(R.__webglFramebuffer[de][fe]);else i.deleteFramebuffer(R.__webglFramebuffer[de]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[de])}else{if(Array.isArray(R.__webglFramebuffer))for(let de=0;de<R.__webglFramebuffer.length;de++)i.deleteFramebuffer(R.__webglFramebuffer[de]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let de=0;de<R.__webglColorRenderbuffer.length;de++)R.__webglColorRenderbuffer[de]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[de]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ee=F.textures;for(let de=0,fe=ee.length;de<fe;de++){const ce=n.get(ee[de]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),c.memory.textures--),n.remove(ee[de])}n.remove(F)}let O=0;function q(){O=0}function Z(){const F=O;return F>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+r.maxTextures),O+=1,F}function Q(F){const R=[];return R.push(F.wrapS),R.push(F.wrapT),R.push(F.wrapR||0),R.push(F.magFilter),R.push(F.minFilter),R.push(F.anisotropy),R.push(F.internalFormat),R.push(F.format),R.push(F.type),R.push(F.generateMipmaps),R.push(F.premultiplyAlpha),R.push(F.flipY),R.push(F.unpackAlignment),R.push(F.colorSpace),R.join()}function ne(F,R){const ee=n.get(F);if(F.isVideoTexture&&Re(F),F.isRenderTargetTexture===!1&&F.version>0&&ee.__version!==F.version){const de=F.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(ee,F,R);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+R)}function ie(F,R){const ee=n.get(F);if(F.version>0&&ee.__version!==F.version){oe(ee,F,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+R)}function me(F,R){const ee=n.get(F);if(F.version>0&&ee.__version!==F.version){oe(ee,F,R);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+R)}function se(F,R){const ee=n.get(F);if(F.version>0&&ee.__version!==F.version){ve(ee,F,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+R)}const Ce={[fc]:i.REPEAT,[Hi]:i.CLAMP_TO_EDGE,[pc]:i.MIRRORED_REPEAT},Le={[yn]:i.NEAREST,[jv]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},Oe={[Jv]:i.NEVER,[r0]:i.ALWAYS,[Qv]:i.LESS,[gd]:i.LEQUAL,[e0]:i.EQUAL,[i0]:i.GEQUAL,[t0]:i.GREATER,[n0]:i.NOTEQUAL};function Ke(F,R){if(R.type===Fn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Gn||R.magFilter===ha||R.magFilter===Fs||R.magFilter===Vi||R.minFilter===Gn||R.minFilter===ha||R.minFilter===Fs||R.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,Ce[R.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,Ce[R.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,Ce[R.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Le[R.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Le[R.minFilter]),R.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Oe[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===yn||R.minFilter!==Fs&&R.minFilter!==Vi||R.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ht(F,R){let ee=!1;F.__webglInit===void 0&&(F.__webglInit=!0,R.addEventListener("dispose",L));const de=R.source;let fe=_.get(de);fe===void 0&&(fe={},_.set(de,fe));const ce=Q(R);if(ce!==F.__cacheKey){fe[ce]===void 0&&(fe[ce]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),fe[ce].usedTimes++;const Ve=fe[F.__cacheKey];Ve!==void 0&&(fe[F.__cacheKey].usedTimes--,Ve.usedTimes===0&&I(R)),F.__cacheKey=ce,F.__webglTexture=fe[ce].texture}return ee}function oe(F,R,ee){let de=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(de=i.TEXTURE_3D);const fe=ht(F,R),ce=R.source;t.bindTexture(de,F.__webglTexture,i.TEXTURE0+ee);const Ve=n.get(ce);if(ce.version!==Ve.__version||fe===!0){t.activeTexture(i.TEXTURE0+ee);const Pe=St.getPrimaries(St.workingColorSpace),ke=R.colorSpace===gi?null:St.getPrimaries(R.colorSpace),ft=R.colorSpace===gi||Pe===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Te=E(R.image,!1,r.maxTextureSize);Te=Ze(R,Te);const Ge=o.convert(R.format,R.colorSpace),et=o.convert(R.type);let nt=P(R.internalFormat,Ge,et,R.colorSpace,R.isVideoTexture);Ke(de,R);let We;const pt=R.mipmaps,it=R.isVideoTexture!==!0,wt=Ve.__version===void 0||fe===!0,G=ce.dataReady,Ie=V(R,Te);if(R.isDepthTexture)nt=A(R.format===Cr,R.type),wt&&(it?t.texStorage2D(i.TEXTURE_2D,1,nt,Te.width,Te.height):t.texImage2D(i.TEXTURE_2D,0,nt,Te.width,Te.height,0,Ge,et,null));else if(R.isDataTexture)if(pt.length>0){it&&wt&&t.texStorage2D(i.TEXTURE_2D,Ie,nt,pt[0].width,pt[0].height);for(let ae=0,_e=pt.length;ae<_e;ae++)We=pt[ae],it?G&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,We.width,We.height,Ge,et,We.data):t.texImage2D(i.TEXTURE_2D,ae,nt,We.width,We.height,0,Ge,et,We.data);R.generateMipmaps=!1}else it?(wt&&t.texStorage2D(i.TEXTURE_2D,Ie,nt,Te.width,Te.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te.width,Te.height,Ge,et,Te.data)):t.texImage2D(i.TEXTURE_2D,0,nt,Te.width,Te.height,0,Ge,et,Te.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){it&&wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,nt,pt[0].width,pt[0].height,Te.depth);for(let ae=0,_e=pt.length;ae<_e;ae++)if(We=pt[ae],R.format!==wn)if(Ge!==null)if(it){if(G)if(R.layerUpdates.size>0){const J=dh(We.width,We.height,R.format,R.type);for(const K of R.layerUpdates){const Qe=We.data.subarray(K*J/We.data.BYTES_PER_ELEMENT,(K+1)*J/We.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,K,We.width,We.height,1,Ge,Qe)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,We.width,We.height,Te.depth,Ge,We.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,nt,We.width,We.height,Te.depth,0,We.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,We.width,We.height,Te.depth,Ge,et,We.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,nt,We.width,We.height,Te.depth,0,Ge,et,We.data)}else{it&&wt&&t.texStorage2D(i.TEXTURE_2D,Ie,nt,pt[0].width,pt[0].height);for(let ae=0,_e=pt.length;ae<_e;ae++)We=pt[ae],R.format!==wn?Ge!==null?it?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,We.width,We.height,Ge,We.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,nt,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?G&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,We.width,We.height,Ge,et,We.data):t.texImage2D(i.TEXTURE_2D,ae,nt,We.width,We.height,0,Ge,et,We.data)}else if(R.isDataArrayTexture)if(it){if(wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,nt,Te.width,Te.height,Te.depth),G)if(R.layerUpdates.size>0){const ae=dh(Te.width,Te.height,R.format,R.type);for(const _e of R.layerUpdates){const J=Te.data.subarray(_e*ae/Te.data.BYTES_PER_ELEMENT,(_e+1)*ae/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,Te.width,Te.height,1,Ge,et,J)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ge,et,Te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,nt,Te.width,Te.height,Te.depth,0,Ge,et,Te.data);else if(R.isData3DTexture)it?(wt&&t.texStorage3D(i.TEXTURE_3D,Ie,nt,Te.width,Te.height,Te.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ge,et,Te.data)):t.texImage3D(i.TEXTURE_3D,0,nt,Te.width,Te.height,Te.depth,0,Ge,et,Te.data);else if(R.isFramebufferTexture){if(wt)if(it)t.texStorage2D(i.TEXTURE_2D,Ie,nt,Te.width,Te.height);else{let ae=Te.width,_e=Te.height;for(let J=0;J<Ie;J++)t.texImage2D(i.TEXTURE_2D,J,nt,ae,_e,0,Ge,et,null),ae>>=1,_e>>=1}}else if(pt.length>0){if(it&&wt){const ae=Fe(pt[0]);t.texStorage2D(i.TEXTURE_2D,Ie,nt,ae.width,ae.height)}for(let ae=0,_e=pt.length;ae<_e;ae++)We=pt[ae],it?G&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ge,et,We):t.texImage2D(i.TEXTURE_2D,ae,nt,Ge,et,We);R.generateMipmaps=!1}else if(it){if(wt){const ae=Fe(Te);t.texStorage2D(i.TEXTURE_2D,Ie,nt,ae.width,ae.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ge,et,Te)}else t.texImage2D(i.TEXTURE_2D,0,nt,Ge,et,Te);x(R)&&y(de),Ve.__version=ce.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function ve(F,R,ee){if(R.image.length!==6)return;const de=ht(F,R),fe=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+ee);const ce=n.get(fe);if(fe.version!==ce.__version||de===!0){t.activeTexture(i.TEXTURE0+ee);const Ve=St.getPrimaries(St.workingColorSpace),Pe=R.colorSpace===gi?null:St.getPrimaries(R.colorSpace),ke=R.colorSpace===gi||Ve===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const ft=R.isCompressedTexture||R.image[0].isCompressedTexture,Te=R.image[0]&&R.image[0].isDataTexture,Ge=[];for(let _e=0;_e<6;_e++)!ft&&!Te?Ge[_e]=E(R.image[_e],!0,r.maxCubemapSize):Ge[_e]=Te?R.image[_e].image:R.image[_e],Ge[_e]=Ze(R,Ge[_e]);const et=Ge[0],nt=o.convert(R.format,R.colorSpace),We=o.convert(R.type),pt=P(R.internalFormat,nt,We,R.colorSpace),it=R.isVideoTexture!==!0,wt=ce.__version===void 0||de===!0,G=fe.dataReady;let Ie=V(R,et);Ke(i.TEXTURE_CUBE_MAP,R);let ae;if(ft){it&&wt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,pt,et.width,et.height);for(let _e=0;_e<6;_e++){ae=Ge[_e].mipmaps;for(let J=0;J<ae.length;J++){const K=ae[J];R.format!==wn?nt!==null?it?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,J,0,0,K.width,K.height,nt,K.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,J,pt,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,J,0,0,K.width,K.height,nt,We,K.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,J,pt,K.width,K.height,0,nt,We,K.data)}}}else{if(ae=R.mipmaps,it&&wt){ae.length>0&&Ie++;const _e=Fe(Ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,pt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Te){it?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ge[_e].width,Ge[_e].height,nt,We,Ge[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pt,Ge[_e].width,Ge[_e].height,0,nt,We,Ge[_e].data);for(let J=0;J<ae.length;J++){const Qe=ae[J].image[_e].image;it?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,J+1,0,0,Qe.width,Qe.height,nt,We,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,J+1,pt,Qe.width,Qe.height,0,nt,We,Qe.data)}}else{it?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,nt,We,Ge[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pt,nt,We,Ge[_e]);for(let J=0;J<ae.length;J++){const K=ae[J];it?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,J+1,0,0,nt,We,K.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,J+1,pt,nt,We,K.image[_e])}}}x(R)&&y(i.TEXTURE_CUBE_MAP),ce.__version=fe.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function Ue(F,R,ee,de,fe,ce){const Ve=o.convert(ee.format,ee.colorSpace),Pe=o.convert(ee.type),ke=P(ee.internalFormat,Ve,Pe,ee.colorSpace),ft=n.get(R),Te=n.get(ee);if(Te.__renderTarget=R,!ft.__hasExternalTextures){const Ge=Math.max(1,R.width>>ce),et=Math.max(1,R.height>>ce);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,ce,ke,Ge,et,R.depth,0,Ve,Pe,null):t.texImage2D(fe,ce,ke,Ge,et,0,Ve,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),ze(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,fe,Te.__webglTexture,0,Ee(R)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,fe,Te.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(F,R,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,F),R.depthBuffer){const de=R.depthTexture,fe=de&&de.isDepthTexture?de.type:null,ce=A(R.stencilBuffer,fe),Ve=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=Ee(R);ze(R)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,ce,R.width,R.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ce,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ce,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ve,i.RENDERBUFFER,F)}else{const de=R.textures;for(let fe=0;fe<de.length;fe++){const ce=de[fe],Ve=o.convert(ce.format,ce.colorSpace),Pe=o.convert(ce.type),ke=P(ce.internalFormat,Ve,Pe,ce.colorSpace),ft=Ee(R);ee&&ze(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,ke,R.width,R.height):ze(R)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,ke,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ke,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(F,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=n.get(R.depthTexture);de.__renderTarget=R,(!de.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ne(R.depthTexture,0);const fe=de.__webglTexture,ce=Ee(R);if(R.depthTexture.format===xr)ze(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0);else if(R.depthTexture.format===Cr)ze(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Me(F){const R=n.get(F),ee=F.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==F.depthTexture){const de=F.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),de){const fe=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,de.removeEventListener("dispose",fe)};de.addEventListener("dispose",fe),R.__depthDisposeCallback=fe}R.__boundDepthTexture=de}if(F.depthTexture&&!R.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");pe(R.__webglFramebuffer,F)}else if(ee){R.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[de]),R.__webglDepthbuffer[de]===void 0)R.__webglDepthbuffer[de]=i.createRenderbuffer(),be(R.__webglDepthbuffer[de],F,!1);else{const fe=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=R.__webglDepthbuffer[de];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),be(R.__webglDepthbuffer,F,!1);else{const de=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,fe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(F,R,ee){const de=n.get(F);R!==void 0&&Ue(de.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&Me(F)}function ct(F){const R=F.texture,ee=n.get(F),de=n.get(R);F.addEventListener("dispose",k);const fe=F.textures,ce=F.isWebGLCubeRenderTarget===!0,Ve=fe.length>1;if(Ve||(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=R.version,c.memory.textures++),ce){ee.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(R.mipmaps&&R.mipmaps.length>0){ee.__webglFramebuffer[Pe]=[];for(let ke=0;ke<R.mipmaps.length;ke++)ee.__webglFramebuffer[Pe][ke]=i.createFramebuffer()}else ee.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Pe=0;Pe<R.mipmaps.length;Pe++)ee.__webglFramebuffer[Pe]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(Ve)for(let Pe=0,ke=fe.length;Pe<ke;Pe++){const ft=n.get(fe[Pe]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),c.memory.textures++)}if(F.samples>0&&ze(F)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Pe=0;Pe<fe.length;Pe++){const ke=fe[Pe];ee.__webglColorRenderbuffer[Pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[Pe]);const ft=o.convert(ke.format,ke.colorSpace),Te=o.convert(ke.type),Ge=P(ke.internalFormat,ft,Te,ke.colorSpace,F.isXRRenderTarget===!0),et=Ee(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Ge,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,ee.__webglColorRenderbuffer[Pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),be(ee.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,R);for(let Pe=0;Pe<6;Pe++)if(R.mipmaps&&R.mipmaps.length>0)for(let ke=0;ke<R.mipmaps.length;ke++)Ue(ee.__webglFramebuffer[Pe][ke],F,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ke);else Ue(ee.__webglFramebuffer[Pe],F,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);x(R)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Pe=0,ke=fe.length;Pe<ke;Pe++){const ft=fe[Pe],Te=n.get(ft);t.bindTexture(i.TEXTURE_2D,Te.__webglTexture),Ke(i.TEXTURE_2D,ft),Ue(ee.__webglFramebuffer,F,ft,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,0),x(ft)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Pe=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,de.__webglTexture),Ke(Pe,R),R.mipmaps&&R.mipmaps.length>0)for(let ke=0;ke<R.mipmaps.length;ke++)Ue(ee.__webglFramebuffer[ke],F,R,i.COLOR_ATTACHMENT0,Pe,ke);else Ue(ee.__webglFramebuffer,F,R,i.COLOR_ATTACHMENT0,Pe,0);x(R)&&y(Pe),t.unbindTexture()}F.depthBuffer&&Me(F)}function X(F){const R=F.textures;for(let ee=0,de=R.length;ee<de;ee++){const fe=R[ee];if(x(fe)){const ce=N(F),Ve=n.get(fe).__webglTexture;t.bindTexture(ce,Ve),y(ce),t.unbindTexture()}}}const he=[],B=[];function $e(F){if(F.samples>0){if(ze(F)===!1){const R=F.textures,ee=F.width,de=F.height;let fe=i.COLOR_BUFFER_BIT;const ce=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ve=n.get(F),Pe=R.length>1;if(Pe)for(let ke=0;ke<R.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let ke=0;ke<R.length;ke++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),Pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[ke]);const ft=n.get(R[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ft,0)}i.blitFramebuffer(0,0,ee,de,0,0,ee,de,fe,i.NEAREST),h===!0&&(he.length=0,B.length=0,he.push(i.COLOR_ATTACHMENT0+ke),F.depthBuffer&&F.resolveDepthBuffer===!1&&(he.push(ce),B.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pe)for(let ke=0;ke<R.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[ke]);const ft=n.get(R[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,ft,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&h){const R=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Ee(F){return Math.min(r.maxSamples,F.samples)}function ze(F){const R=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Re(F){const R=c.render.frame;p.get(F)!==R&&(p.set(F,R),F.update())}function Ze(F,R){const ee=F.colorSpace,de=F.format,fe=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ee!==Ir&&ee!==gi&&(St.getTransfer(ee)===Tt?(de!==wn||fe!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),R}function Fe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=Z,this.resetTextureUnits=q,this.setTexture2D=ne,this.setTexture2DArray=ie,this.setTexture3D=me,this.setTextureCube=se,this.rebindTextures=Je,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=ze}function bE(i,e){function t(n,r=gi){let o;const c=St.getTransfer(r);if(n===oi)return i.UNSIGNED_BYTE;if(n===il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ld)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ad)return i.BYTE;if(n===cd)return i.SHORT;if(n===rs)return i.UNSIGNED_SHORT;if(n===nl)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===us)return i.HALF_FLOAT;if(n===ud)return i.ALPHA;if(n===hd)return i.RGB;if(n===wn)return i.RGBA;if(n===dd)return i.LUMINANCE;if(n===fd)return i.LUMINANCE_ALPHA;if(n===xr)return i.DEPTH_COMPONENT;if(n===Cr)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===ol)return i.RED_INTEGER;if(n===pd)return i.RG;if(n===al)return i.RG_INTEGER;if(n===cl)return i.RGBA_INTEGER;if(n===So||n===Mo||n===Eo||n===bo)if(c===Tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===So)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===So)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===_c||n===gc||n===vc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===mc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_c)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yc||n===xc||n===Sc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===yc||n===xc)return c===Tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Sc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mc||n===Ec||n===bc||n===wc||n===Tc||n===Ac||n===Cc||n===Rc||n===Pc||n===Dc||n===Lc||n===Ic||n===Nc||n===Fc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Mc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ec)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ic)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wo||n===Uc||n===Oc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===wo)return c===Tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===md||n===Bc||n===kc||n===zc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===wo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Bc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class wE extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class no extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TE={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new no,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new no,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new no,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,c=null;const l=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,n),y=this._getHandJoint(d,E);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const p=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],_=p.position.distanceTo(m.position),g=.02,S=.005;d.inputState.pinching&&_>g+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=g-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(TE)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new no;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const AE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CE=`
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

}`;class RE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new tn,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mi({vertexShader:AE,fragmentShader:CE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new Vo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PE extends ji{constructor(e,t){super();const n=this;let r=null,o=1,c=null,l="local-floor",h=1,d=null,p=null,m=null,_=null,g=null,S=null;const E=new RE,x=t.getContextAttributes();let y=null,N=null;const P=[],A=[],V=new Ae;let L=null;const k=new gn;k.viewport=new Et;const H=new gn;H.viewport=new Et;const I=[k,H],b=new wE;let O=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ve=P[oe];return ve===void 0&&(ve=new ka,P[oe]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(oe){let ve=P[oe];return ve===void 0&&(ve=new ka,P[oe]=ve),ve.getGripSpace()},this.getHand=function(oe){let ve=P[oe];return ve===void 0&&(ve=new ka,P[oe]=ve),ve.getHandSpace()};function Z(oe){const ve=A.indexOf(oe.inputSource);if(ve===-1)return;const Ue=P[ve];Ue!==void 0&&(Ue.update(oe.inputSource,oe.frame,d||c),Ue.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Q(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",ne);for(let oe=0;oe<P.length;oe++){const ve=A[oe];ve!==null&&(A[oe]=null,P[oe].disconnect(ve))}O=null,q=null,E.reset(),e.setRenderTarget(y),g=null,_=null,m=null,r=null,N=null,ht.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){l=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(oe){d=oe},this.getBaseLayer=function(){return _!==null?_:g},this.getBinding=function(){return m},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",ne),x.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(V),r.renderState.layers===void 0){const ve={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),N=new Xi(g.framebufferWidth,g.framebufferHeight,{format:wn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ve=null,Ue=null,be=null;x.depth&&(be=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=x.stencil?Cr:xr,Ue=x.stencil?Ar:Wi);const pe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:o};m=new XRWebGLBinding(r,t),_=m.createProjectionLayer(pe),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new Xi(_.textureWidth,_.textureHeight,{format:wn,type:oi,depthTexture:new Rd(_.textureWidth,_.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await r.requestReferenceSpace(l),ht.setContext(r),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ne(oe){for(let ve=0;ve<oe.removed.length;ve++){const Ue=oe.removed[ve],be=A.indexOf(Ue);be>=0&&(A[be]=null,P[be].disconnect(Ue))}for(let ve=0;ve<oe.added.length;ve++){const Ue=oe.added[ve];let be=A.indexOf(Ue);if(be===-1){for(let Me=0;Me<P.length;Me++)if(Me>=A.length){A.push(Ue),be=Me;break}else if(A[Me]===null){A[Me]=Ue,be=Me;break}if(be===-1)break}const pe=P[be];pe&&pe.connect(Ue)}}const ie=new z,me=new z;function se(oe,ve,Ue){ie.setFromMatrixPosition(ve.matrixWorld),me.setFromMatrixPosition(Ue.matrixWorld);const be=ie.distanceTo(me),pe=ve.projectionMatrix.elements,Me=Ue.projectionMatrix.elements,Je=pe[14]/(pe[10]-1),ct=pe[14]/(pe[10]+1),X=(pe[9]+1)/pe[5],he=(pe[9]-1)/pe[5],B=(pe[8]-1)/pe[0],$e=(Me[8]+1)/Me[0],Ee=Je*B,ze=Je*$e,Re=be/(-B+$e),Ze=Re*-B;if(ve.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Ze),oe.translateZ(Re),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),pe[10]===-1)oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Fe=Je+Re,F=ct+Re,R=Ee-Ze,ee=ze+(be-Ze),de=X*ct/F*Fe,fe=he*ct/F*Fe;oe.projectionMatrix.makePerspective(R,ee,de,fe,Fe,F),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Ce(oe,ve){ve===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ve.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let ve=oe.near,Ue=oe.far;E.texture!==null&&(E.depthNear>0&&(ve=E.depthNear),E.depthFar>0&&(Ue=E.depthFar)),b.near=H.near=k.near=ve,b.far=H.far=k.far=Ue,(O!==b.near||q!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),O=b.near,q=b.far),k.layers.mask=oe.layers.mask|2,H.layers.mask=oe.layers.mask|4,b.layers.mask=k.layers.mask|H.layers.mask;const be=oe.parent,pe=b.cameras;Ce(b,be);for(let Me=0;Me<pe.length;Me++)Ce(pe[Me],be);pe.length===2?se(b,k,H):b.projectionMatrix.copy(k.projectionMatrix),Le(oe,b,be)};function Le(oe,ve,Ue){Ue===null?oe.matrix.copy(ve.matrixWorld):(oe.matrix.copy(Ue.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ve.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Rr*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(_===null&&g===null))return h},this.setFoveation=function(oe){h=oe,_!==null&&(_.fixedFoveation=oe),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=oe)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(b)};let Oe=null;function Ke(oe,ve){if(p=ve.getViewerPose(d||c),S=ve,p!==null){const Ue=p.views;g!==null&&(e.setRenderTargetFramebuffer(N,g.framebuffer),e.setRenderTarget(N));let be=!1;Ue.length!==b.cameras.length&&(b.cameras.length=0,be=!0);for(let Me=0;Me<Ue.length;Me++){const Je=Ue[Me];let ct=null;if(g!==null)ct=g.getViewport(Je);else{const he=m.getViewSubImage(_,Je);ct=he.viewport,Me===0&&(e.setRenderTargetTextures(N,he.colorTexture,_.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(N))}let X=I[Me];X===void 0&&(X=new gn,X.layers.enable(Me),X.viewport=new Et,I[Me]=X),X.matrix.fromArray(Je.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(Je.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(ct.x,ct.y,ct.width,ct.height),Me===0&&(b.matrix.copy(X.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),be===!0&&b.cameras.push(X)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")){const Me=m.getDepthInformation(Ue[0]);Me&&Me.isValid&&Me.texture&&E.init(e,Me,r.renderState)}}for(let Ue=0;Ue<P.length;Ue++){const be=A[Ue],pe=P[Ue];be!==null&&pe!==void 0&&pe.update(be,ve,d||c)}Oe&&Oe(oe,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),S=null}const ht=new Ad;ht.setAnimationLoop(Ke),this.setAnimationLoop=function(oe){Oe=oe},this.dispose=function(){}}}const Ui=new An,DE=new at;function LE(i,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function n(x,y){y.color.getRGB(x.fogColor.value,bd(i)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function r(x,y,N,P,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?o(x,y):y.isMeshToonMaterial?(o(x,y),m(x,y)):y.isMeshPhongMaterial?(o(x,y),p(x,y)):y.isMeshStandardMaterial?(o(x,y),_(x,y),y.isMeshPhysicalMaterial&&g(x,y,A)):y.isMeshMatcapMaterial?(o(x,y),S(x,y)):y.isMeshDepthMaterial?o(x,y):y.isMeshDistanceMaterial?(o(x,y),E(x,y)):y.isMeshNormalMaterial?o(x,y):y.isLineBasicMaterial?(c(x,y),y.isLineDashedMaterial&&l(x,y)):y.isPointsMaterial?h(x,y,N,P):y.isSpriteMaterial?d(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===ln&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===ln&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const N=e.get(y),P=N.envMap,A=N.envMapRotation;P&&(x.envMap.value=P,Ui.copy(A),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),x.envMapRotation.value.setFromMatrix4(DE.makeRotationFromEuler(Ui)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function c(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function l(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function h(x,y,N,P){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*N,x.scale.value=P*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function d(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function m(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function _(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function g(x,y,N){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ln&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=N.texture,x.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,y){y.matcap&&(x.matcap.value=y.matcap)}function E(x,y){const N=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(N.matrixWorld),x.nearDistance.value=N.shadow.camera.near,x.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function IE(i,e,t,n){let r={},o={},c=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,P){const A=P.program;n.uniformBlockBinding(N,A)}function d(N,P){let A=r[N.id];A===void 0&&(S(N),A=p(N),r[N.id]=A,N.addEventListener("dispose",x));const V=P.program;n.updateUBOMapping(N,V);const L=e.render.frame;o[N.id]!==L&&(_(N),o[N.id]=L)}function p(N){const P=m();N.__bindingPointIndex=P;const A=i.createBuffer(),V=N.__size,L=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,V,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,A),A}function m(){for(let N=0;N<l;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const P=r[N.id],A=N.uniforms,V=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let L=0,k=A.length;L<k;L++){const H=Array.isArray(A[L])?A[L]:[A[L]];for(let I=0,b=H.length;I<b;I++){const O=H[I];if(g(O,L,I,V)===!0){const q=O.__offset,Z=Array.isArray(O.value)?O.value:[O.value];let Q=0;for(let ne=0;ne<Z.length;ne++){const ie=Z[ne],me=E(ie);typeof ie=="number"||typeof ie=="boolean"?(O.__data[0]=ie,i.bufferSubData(i.UNIFORM_BUFFER,q+Q,O.__data)):ie.isMatrix3?(O.__data[0]=ie.elements[0],O.__data[1]=ie.elements[1],O.__data[2]=ie.elements[2],O.__data[3]=0,O.__data[4]=ie.elements[3],O.__data[5]=ie.elements[4],O.__data[6]=ie.elements[5],O.__data[7]=0,O.__data[8]=ie.elements[6],O.__data[9]=ie.elements[7],O.__data[10]=ie.elements[8],O.__data[11]=0):(ie.toArray(O.__data,Q),Q+=me.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(N,P,A,V){const L=N.value,k=P+"_"+A;if(V[k]===void 0)return typeof L=="number"||typeof L=="boolean"?V[k]=L:V[k]=L.clone(),!0;{const H=V[k];if(typeof L=="number"||typeof L=="boolean"){if(H!==L)return V[k]=L,!0}else if(H.equals(L)===!1)return H.copy(L),!0}return!1}function S(N){const P=N.uniforms;let A=0;const V=16;for(let k=0,H=P.length;k<H;k++){const I=Array.isArray(P[k])?P[k]:[P[k]];for(let b=0,O=I.length;b<O;b++){const q=I[b],Z=Array.isArray(q.value)?q.value:[q.value];for(let Q=0,ne=Z.length;Q<ne;Q++){const ie=Z[Q],me=E(ie),se=A%V,Ce=se%me.boundary,Le=se+Ce;A+=Ce,Le!==0&&V-Le<me.storage&&(A+=V-Le),q.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=A,A+=me.storage}}}const L=A%V;return L>0&&(A+=V-L),N.__size=A,N.__cache={},this}function E(N){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=48,P.storage=48):N.isMatrix4?(P.boundary=64,P.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),P}function x(N){const P=N.target;P.removeEventListener("dispose",x);const A=c.indexOf(P.__bindingPointIndex);c.splice(A,1),i.deleteBuffer(r[P.id]),delete r[P.id],delete o[P.id]}function y(){for(const N in r)i.deleteBuffer(r[N]);c=[],r={},o={}}return{bind:h,update:d,dispose:y}}class Uw{constructor(e={}){const{canvas:t=M0(),context:n=null,depth:r=!0,stencil:o=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=c;const S=new Uint32Array(4),E=new Int32Array(4);let x=null,y=null;const N=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=xi,this.toneMappingExposure=1;const A=this;let V=!1,L=0,k=0,H=null,I=-1,b=null;const O=new Et,q=new Et;let Z=null;const Q=new ot(0);let ne=0,ie=t.width,me=t.height,se=1,Ce=null,Le=null;const Oe=new Et(0,0,ie,me),Ke=new Et(0,0,ie,me);let ht=!1;const oe=new hl;let ve=!1,Ue=!1;const be=new at,pe=new at,Me=new z,Je=new Et,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let X=!1;function he(){return H===null?se:1}let B=n;function $e(D,$){return t.getContext(D,$)}try{const D={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tl}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",K,!1),B===null){const $="webgl2";if(B=$e($,D),B===null)throw $e($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Ee,ze,Re,Ze,Fe,F,R,ee,de,fe,ce,Ve,Pe,ke,ft,Te,Ge,et,nt,We,pt,it,wt,G;function Ie(){Ee=new kS(B),Ee.init(),it=new bE(B,Ee),ze=new IS(B,Ee,e,it),Re=new SE(B,Ee),ze.reverseDepthBuffer&&_&&Re.buffers.depth.setReversed(!0),Ze=new VS(B),Fe=new oE,F=new EE(B,Ee,Re,Fe,ze,it,Ze),R=new FS(A),ee=new BS(A),de=new q0(B),wt=new DS(B,de),fe=new zS(B,de,Ze,wt),ce=new WS(B,fe,de,Ze),nt=new GS(B,ze,F),Te=new NS(Fe),Ve=new sE(A,R,ee,Ee,ze,wt,Te),Pe=new LE(A,Fe),ke=new cE,ft=new pE(Ee),et=new PS(A,R,ee,Re,ce,g,h),Ge=new yE(A,ce,ze),G=new IE(B,Ze,ze,Re),We=new LS(B,Ee,Ze),pt=new HS(B,Ee,Ze),Ze.programs=Ve.programs,A.capabilities=ze,A.extensions=Ee,A.properties=Fe,A.renderLists=ke,A.shadowMap=Ge,A.state=Re,A.info=Ze}Ie();const ae=new PE(A,B);this.xr=ae,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const D=Ee.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ee.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(D){D!==void 0&&(se=D,this.setSize(ie,me,!1))},this.getSize=function(D){return D.set(ie,me)},this.setSize=function(D,$,Y=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=D,me=$,t.width=Math.floor(D*se),t.height=Math.floor($*se),Y===!0&&(t.style.width=D+"px",t.style.height=$+"px"),this.setViewport(0,0,D,$)},this.getDrawingBufferSize=function(D){return D.set(ie*se,me*se).floor()},this.setDrawingBufferSize=function(D,$,Y){ie=D,me=$,se=Y,t.width=Math.floor(D*Y),t.height=Math.floor($*Y),this.setViewport(0,0,D,$)},this.getCurrentViewport=function(D){return D.copy(O)},this.getViewport=function(D){return D.copy(Oe)},this.setViewport=function(D,$,Y,re){D.isVector4?Oe.set(D.x,D.y,D.z,D.w):Oe.set(D,$,Y,re),Re.viewport(O.copy(Oe).multiplyScalar(se).round())},this.getScissor=function(D){return D.copy(Ke)},this.setScissor=function(D,$,Y,re){D.isVector4?Ke.set(D.x,D.y,D.z,D.w):Ke.set(D,$,Y,re),Re.scissor(q.copy(Ke).multiplyScalar(se).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(D){Re.setScissorTest(ht=D)},this.setOpaqueSort=function(D){Ce=D},this.setTransparentSort=function(D){Le=D},this.getClearColor=function(D){return D.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(D=!0,$=!0,Y=!0){let re=0;if(D){let j=!1;if(H!==null){const we=H.texture.format;j=we===cl||we===al||we===ol}if(j){const we=H.texture.type,Ne=we===oi||we===Wi||we===rs||we===Ar||we===il||we===rl,Xe=et.getClearColor(),je=et.getClearAlpha(),tt=Xe.r,rt=Xe.g,He=Xe.b;Ne?(S[0]=tt,S[1]=rt,S[2]=He,S[3]=je,B.clearBufferuiv(B.COLOR,0,S)):(E[0]=tt,E[1]=rt,E[2]=He,E[3]=je,B.clearBufferiv(B.COLOR,0,E))}else re|=B.COLOR_BUFFER_BIT}$&&(re|=B.DEPTH_BUFFER_BIT),Y&&(re|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",K,!1),ke.dispose(),ft.dispose(),Fe.dispose(),R.dispose(),ee.dispose(),ce.dispose(),wt.dispose(),G.dispose(),Ve.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ei),ae.removeEventListener("sessionend",ds),jn.stop()};function _e(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const D=Ze.autoReset,$=Ge.enabled,Y=Ge.autoUpdate,re=Ge.needsUpdate,j=Ge.type;Ie(),Ze.autoReset=D,Ge.enabled=$,Ge.autoUpdate=Y,Ge.needsUpdate=re,Ge.type=j}function K(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Qe(D){const $=D.target;$.removeEventListener("dispose",Qe),Lt($)}function Lt(D){It(D),Fe.remove(D)}function It(D){const $=Fe.get(D).programs;$!==void 0&&($.forEach(function(Y){Ve.releaseProgram(Y)}),D.isShaderMaterial&&Ve.releaseShaderCache(D))}this.renderBufferDirect=function(D,$,Y,re,j,we){$===null&&($=ct);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,Xe=_s(D,$,Y,re,j);Re.setMaterial(re,Ne);let je=Y.index,tt=1;if(re.wireframe===!0){if(je=fe.getWireframeAttribute(Y),je===void 0)return;tt=2}const rt=Y.drawRange,He=Y.attributes.position;let _t=rt.start*tt,Be=(rt.start+rt.count)*tt;we!==null&&(_t=Math.max(_t,we.start*tt),Be=Math.min(Be,(we.start+we.count)*tt)),je!==null?(_t=Math.max(_t,0),Be=Math.min(Be,je.count)):He!=null&&(_t=Math.max(_t,0),Be=Math.min(Be,He.count));const Rt=Be-_t;if(Rt<0||Rt===1/0)return;wt.setup(j,re,Xe,Y,je);let jt,Mt=We;if(je!==null&&(jt=de.get(je),Mt=pt,Mt.setIndex(jt)),j.isMesh)re.wireframe===!0?(Re.setLineWidth(re.wireframeLinewidth*he()),Mt.setMode(B.LINES)):Mt.setMode(B.TRIANGLES);else if(j.isLine){let Ye=re.linewidth;Ye===void 0&&(Ye=1),Re.setLineWidth(Ye*he()),j.isLineSegments?Mt.setMode(B.LINES):j.isLineLoop?Mt.setMode(B.LINE_LOOP):Mt.setMode(B.LINE_STRIP)}else j.isPoints?Mt.setMode(B.POINTS):j.isSprite&&Mt.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Mt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Mt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ye=j._multiDrawStarts,Cn=j._multiDrawCounts,yt=j._multiDrawCount,fn=je?de.get(je).bytesPerElement:1,Un=Fe.get(re).currentProgram.getUniforms();for(let rn=0;rn<yt;rn++)Un.setValue(B,"_gl_DrawID",rn),Mt.render(Ye[rn]/fn,Cn[rn])}else if(j.isInstancedMesh)Mt.renderInstances(_t,Rt,j.count);else if(Y.isInstancedBufferGeometry){const Ye=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Cn=Math.min(Y.instanceCount,Ye);Mt.renderInstances(_t,Rt,Cn)}else Mt.render(_t,Rt)};function dt(D,$,Y){D.transparent===!0&&D.side===ni&&D.forceSinglePass===!1?(D.side=ln,D.needsUpdate=!0,Zi(D,$,Y),D.side=Si,D.needsUpdate=!0,Zi(D,$,Y),D.side=ni):Zi(D,$,Y)}this.compile=function(D,$,Y=null){Y===null&&(Y=D),y=ft.get(Y),y.init($),P.push(y),Y.traverseVisible(function(j){j.isLight&&j.layers.test($.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),D!==Y&&D.traverseVisible(function(j){j.isLight&&j.layers.test($.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),y.setupLights();const re=new Set;return D.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const we=j.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){const Xe=we[Ne];dt(Xe,Y,j),re.add(Xe)}else dt(we,Y,j),re.add(we)}),P.pop(),y=null,re},this.compileAsync=function(D,$,Y=null){const re=this.compile(D,$,Y);return new Promise(j=>{function we(){if(re.forEach(function(Ne){Fe.get(Ne).currentProgram.isReady()&&re.delete(Ne)}),re.size===0){j(D);return}setTimeout(we,10)}Ee.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let dn=null;function Bt(D){dn&&dn(D)}function Ei(){jn.stop()}function ds(){jn.start()}const jn=new Ad;jn.setAnimationLoop(Bt),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(D){dn=D,ae.setAnimationLoop(D),D===null?jn.stop():jn.start()},ae.addEventListener("sessionstart",Ei),ae.addEventListener("sessionend",ds),this.render=function(D,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera($),$=ae.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,$,H),y=ft.get(D,P.length),y.init($),P.push(y),pe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),oe.setFromProjectionMatrix(pe),Ue=this.localClippingEnabled,ve=Te.init(this.clippingPlanes,Ue),x=ke.get(D,N.length),x.init(),N.push(x),ae.enabled===!0&&ae.isPresenting===!0){const we=A.xr.getDepthSensingMesh();we!==null&&nn(we,$,-1/0,A.sortObjects)}nn(D,$,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(Ce,Le),X=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,X&&et.addToRenderList(x,D),this.info.render.frame++,ve===!0&&Te.beginShadows();const Y=y.state.shadowsArray;Ge.render(Y,D,$),ve===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=x.opaque,j=x.transmissive;if(y.setupLights(),$.isArrayCamera){const we=$.cameras;if(j.length>0)for(let Ne=0,Xe=we.length;Ne<Xe;Ne++){const je=we[Ne];bi(re,j,D,je)}X&&et.render(D);for(let Ne=0,Xe=we.length;Ne<Xe;Ne++){const je=we[Ne];fs(x,D,je,je.viewport)}}else j.length>0&&bi(re,j,D,$),X&&et.render(D),fs(x,D,$);H!==null&&(F.updateMultisampleRenderTarget(H),F.updateRenderTargetMipmap(H)),D.isScene===!0&&D.onAfterRender(A,D,$),wt.resetDefaultState(),I=-1,b=null,P.pop(),P.length>0?(y=P[P.length-1],ve===!0&&Te.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,N.pop(),N.length>0?x=N[N.length-1]:x=null};function nn(D,$,Y,re){if(D.visible===!1)return;if(D.layers.test($.layers)){if(D.isGroup)Y=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update($);else if(D.isLight)y.pushLight(D),D.castShadow&&y.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||oe.intersectsSprite(D)){re&&Je.setFromMatrixPosition(D.matrixWorld).applyMatrix4(pe);const Ne=ce.update(D),Xe=D.material;Xe.visible&&x.push(D,Ne,Xe,Y,Je.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||oe.intersectsObject(D))){const Ne=ce.update(D),Xe=D.material;if(re&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Je.copy(D.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Je.copy(Ne.boundingSphere.center)),Je.applyMatrix4(D.matrixWorld).applyMatrix4(pe)),Array.isArray(Xe)){const je=Ne.groups;for(let tt=0,rt=je.length;tt<rt;tt++){const He=je[tt],_t=Xe[He.materialIndex];_t&&_t.visible&&x.push(D,Ne,_t,Y,Je.z,He)}}else Xe.visible&&x.push(D,Ne,Xe,Y,Je.z,null)}}const we=D.children;for(let Ne=0,Xe=we.length;Ne<Xe;Ne++)nn(we[Ne],$,Y,re)}function fs(D,$,Y,re){const j=D.opaque,we=D.transmissive,Ne=D.transparent;y.setupLightsView(Y),ve===!0&&Te.setGlobalState(A.clippingPlanes,Y),re&&Re.viewport(O.copy(re)),j.length>0&&Yn(j,$,Y),we.length>0&&Yn(we,$,Y),Ne.length>0&&Yn(Ne,$,Y),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function bi(D,$,Y,re){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[re.id]===void 0&&(y.state.transmissionRenderTarget[re.id]=new Xi(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?us:oi,minFilter:Vi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const we=y.state.transmissionRenderTarget[re.id],Ne=re.viewport||O;we.setSize(Ne.z,Ne.w);const Xe=A.getRenderTarget();A.setRenderTarget(we),A.getClearColor(Q),ne=A.getClearAlpha(),ne<1&&A.setClearColor(16777215,.5),A.clear(),X&&et.render(Y);const je=A.toneMapping;A.toneMapping=xi;const tt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),y.setupLightsView(re),ve===!0&&Te.setGlobalState(A.clippingPlanes,re),Yn(D,Y,re),F.updateMultisampleRenderTarget(we),F.updateRenderTargetMipmap(we),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let He=0,_t=$.length;He<_t;He++){const Be=$[He],Rt=Be.object,jt=Be.geometry,Mt=Be.material,Ye=Be.group;if(Mt.side===ni&&Rt.layers.test(re.layers)){const Cn=Mt.side;Mt.side=ln,Mt.needsUpdate=!0,qi(Rt,Y,re,jt,Mt,Ye),Mt.side=Cn,Mt.needsUpdate=!0,rt=!0}}rt===!0&&(F.updateMultisampleRenderTarget(we),F.updateRenderTargetMipmap(we))}A.setRenderTarget(Xe),A.setClearColor(Q,ne),tt!==void 0&&(re.viewport=tt),A.toneMapping=je}function Yn(D,$,Y){const re=$.isScene===!0?$.overrideMaterial:null;for(let j=0,we=D.length;j<we;j++){const Ne=D[j],Xe=Ne.object,je=Ne.geometry,tt=re===null?Ne.material:re,rt=Ne.group;Xe.layers.test(Y.layers)&&qi(Xe,$,Y,je,tt,rt)}}function qi(D,$,Y,re,j,we){D.onBeforeRender(A,$,Y,re,j,we),D.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),j.onBeforeRender(A,$,Y,re,D,we),j.transparent===!0&&j.side===ni&&j.forceSinglePass===!1?(j.side=ln,j.needsUpdate=!0,A.renderBufferDirect(Y,$,re,j,D,we),j.side=Si,j.needsUpdate=!0,A.renderBufferDirect(Y,$,re,j,D,we),j.side=ni):A.renderBufferDirect(Y,$,re,j,D,we),D.onAfterRender(A,$,Y,re,j,we)}function Zi(D,$,Y){$.isScene!==!0&&($=ct);const re=Fe.get(D),j=y.state.lights,we=y.state.shadowsArray,Ne=j.state.version,Xe=Ve.getParameters(D,j.state,we,$,Y),je=Ve.getProgramCacheKey(Xe);let tt=re.programs;re.environment=D.isMeshStandardMaterial?$.environment:null,re.fog=$.fog,re.envMap=(D.isMeshStandardMaterial?ee:R).get(D.envMap||re.environment),re.envMapRotation=re.environment!==null&&D.envMap===null?$.environmentRotation:D.envMapRotation,tt===void 0&&(D.addEventListener("dispose",Qe),tt=new Map,re.programs=tt);let rt=tt.get(je);if(rt!==void 0){if(re.currentProgram===rt&&re.lightsStateVersion===Ne)return ms(D,Xe),rt}else Xe.uniforms=Ve.getUniforms(D),D.onBeforeCompile(Xe,A),rt=Ve.acquireProgram(Xe,je),tt.set(je,rt),re.uniforms=Xe.uniforms;const He=re.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(He.clippingPlanes=Te.uniform),ms(D,Xe),re.needsLights=Zo(D),re.lightsStateVersion=Ne,re.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.directionalShadowMap.value=j.state.directionalShadowMap,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotShadowMap.value=j.state.spotShadowMap,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMap.value=j.state.pointShadowMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),re.currentProgram=rt,re.uniformsList=null,rt}function ps(D){if(D.uniformsList===null){const $=D.currentProgram.getUniforms();D.uniformsList=To.seqWithValue($.seq,D.uniforms)}return D.uniformsList}function ms(D,$){const Y=Fe.get(D);Y.outputColorSpace=$.outputColorSpace,Y.batching=$.batching,Y.batchingColor=$.batchingColor,Y.instancing=$.instancing,Y.instancingColor=$.instancingColor,Y.instancingMorph=$.instancingMorph,Y.skinning=$.skinning,Y.morphTargets=$.morphTargets,Y.morphNormals=$.morphNormals,Y.morphColors=$.morphColors,Y.morphTargetsCount=$.morphTargetsCount,Y.numClippingPlanes=$.numClippingPlanes,Y.numIntersection=$.numClipIntersection,Y.vertexAlphas=$.vertexAlphas,Y.vertexTangents=$.vertexTangents,Y.toneMapping=$.toneMapping}function _s(D,$,Y,re,j){$.isScene!==!0&&($=ct),F.resetTextureUnits();const we=$.fog,Ne=re.isMeshStandardMaterial?$.environment:null,Xe=H===null?A.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ir,je=(re.isMeshStandardMaterial?ee:R).get(re.envMap||Ne),tt=re.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,rt=!!Y.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),He=!!Y.morphAttributes.position,_t=!!Y.morphAttributes.normal,Be=!!Y.morphAttributes.color;let Rt=xi;re.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Rt=A.toneMapping);const jt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Mt=jt!==void 0?jt.length:0,Ye=Fe.get(re),Cn=y.state.lights;if(ve===!0&&(Ue===!0||D!==b)){const Yt=D===b&&re.id===I;Te.setState(re,D,Yt)}let yt=!1;re.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Cn.state.version||Ye.outputColorSpace!==Xe||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isBatchedMesh&&Ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ye.instancingMorph===!1&&j.morphTexture!==null||Ye.envMap!==je||re.fog===!0&&Ye.fog!==we||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Te.numPlanes||Ye.numIntersection!==Te.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==rt||Ye.morphTargets!==He||Ye.morphNormals!==_t||Ye.morphColors!==Be||Ye.toneMapping!==Rt||Ye.morphTargetsCount!==Mt)&&(yt=!0):(yt=!0,Ye.__version=re.version);let fn=Ye.currentProgram;yt===!0&&(fn=Zi(re,$,j));let Un=!1,rn=!1,ci=!1;const w=fn.getUniforms(),gt=Ye.uniforms;if(Re.useProgram(fn.program)&&(Un=!0,rn=!0,ci=!0),re.id!==I&&(I=re.id,rn=!0),Un||b!==D){Re.buffers.depth.getReversed()?(be.copy(D.projectionMatrix),b0(be),w0(be),w.setValue(B,"projectionMatrix",be)):w.setValue(B,"projectionMatrix",D.projectionMatrix),w.setValue(B,"viewMatrix",D.matrixWorldInverse);const sn=w.map.cameraPosition;sn!==void 0&&sn.setValue(B,Me.setFromMatrixPosition(D.matrixWorld)),ze.logarithmicDepthBuffer&&w.setValue(B,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&w.setValue(B,"isOrthographic",D.isOrthographicCamera===!0),b!==D&&(b=D,rn=!0,ci=!0)}if(j.isSkinnedMesh){w.setOptional(B,j,"bindMatrix"),w.setOptional(B,j,"bindMatrixInverse");const Yt=j.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),w.setValue(B,"boneTexture",Yt.boneTexture,F))}j.isBatchedMesh&&(w.setOptional(B,j,"batchingTexture"),w.setValue(B,"batchingTexture",j._matricesTexture,F),w.setOptional(B,j,"batchingIdTexture"),w.setValue(B,"batchingIdTexture",j._indirectTexture,F),w.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&w.setValue(B,"batchingColorTexture",j._colorsTexture,F));const wi=Y.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&nt.update(j,Y,fn),(rn||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,w.setValue(B,"receiveShadow",j.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(gt.envMap.value=je,gt.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&$.environment!==null&&(gt.envMapIntensity.value=$.environmentIntensity),rn&&(w.setValue(B,"toneMappingExposure",A.toneMappingExposure),Ye.needsLights&&qo(gt,ci),we&&re.fog===!0&&Pe.refreshFogUniforms(gt,we),Pe.refreshMaterialUniforms(gt,re,se,me,y.state.transmissionRenderTarget[D.id]),To.upload(B,ps(Ye),gt,F)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(To.upload(B,ps(Ye),gt,F),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&w.setValue(B,"center",j.center),w.setValue(B,"modelViewMatrix",j.modelViewMatrix),w.setValue(B,"normalMatrix",j.normalMatrix),w.setValue(B,"modelMatrix",j.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Yt=re.uniformsGroups;for(let sn=0,On=Yt.length;sn<On;sn++){const gs=Yt[sn];G.update(gs,fn),G.bind(gs,fn)}}return fn}function qo(D,$){D.ambientLightColor.needsUpdate=$,D.lightProbe.needsUpdate=$,D.directionalLights.needsUpdate=$,D.directionalLightShadows.needsUpdate=$,D.pointLights.needsUpdate=$,D.pointLightShadows.needsUpdate=$,D.spotLights.needsUpdate=$,D.spotLightShadows.needsUpdate=$,D.rectAreaLights.needsUpdate=$,D.hemisphereLights.needsUpdate=$}function Zo(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(D,$,Y){Fe.get(D.texture).__webglTexture=$,Fe.get(D.depthTexture).__webglTexture=Y;const re=Fe.get(D);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=Y===void 0,re.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,$){const Y=Fe.get(D);Y.__webglFramebuffer=$,Y.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(D,$=0,Y=0){H=D,L=$,k=Y;let re=!0,j=null,we=!1,Ne=!1;if(D){const je=Fe.get(D);if(je.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(B.FRAMEBUFFER,null),re=!1;else if(je.__webglFramebuffer===void 0)F.setupRenderTarget(D);else if(je.__hasExternalTextures)F.rebindTextures(D,Fe.get(D.texture).__webglTexture,Fe.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const He=D.depthTexture;if(je.__boundDepthTexture!==He){if(He!==null&&Fe.has(He)&&(D.width!==He.image.width||D.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(D)}}const tt=D.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ne=!0);const rt=Fe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(rt[$])?j=rt[$][Y]:j=rt[$],we=!0):D.samples>0&&F.useMultisampledRTT(D)===!1?j=Fe.get(D).__webglMultisampledFramebuffer:Array.isArray(rt)?j=rt[Y]:j=rt,O.copy(D.viewport),q.copy(D.scissor),Z=D.scissorTest}else O.copy(Oe).multiplyScalar(se).floor(),q.copy(Ke).multiplyScalar(se).floor(),Z=ht;if(Re.bindFramebuffer(B.FRAMEBUFFER,j)&&re&&Re.drawBuffers(D,j),Re.viewport(O),Re.scissor(q),Re.setScissorTest(Z),we){const je=Fe.get(D.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+$,je.__webglTexture,Y)}else if(Ne){const je=Fe.get(D.texture),tt=$||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,je.__webglTexture,Y||0,tt)}I=-1},this.readRenderTargetPixels=function(D,$,Y,re,j,we,Ne){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Fe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ne!==void 0&&(Xe=Xe[Ne]),Xe){Re.bindFramebuffer(B.FRAMEBUFFER,Xe);try{const je=D.texture,tt=je.format,rt=je.type;if(!ze.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=D.width-re&&Y>=0&&Y<=D.height-j&&B.readPixels($,Y,re,j,it.convert(tt),it.convert(rt),we)}finally{const je=H!==null?Fe.get(H).__webglFramebuffer:null;Re.bindFramebuffer(B.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(D,$,Y,re,j,we,Ne){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Fe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ne!==void 0&&(Xe=Xe[Ne]),Xe){const je=D.texture,tt=je.format,rt=je.type;if(!ze.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=D.width-re&&Y>=0&&Y<=D.height-j){Re.bindFramebuffer(B.FRAMEBUFFER,Xe);const He=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,He),B.bufferData(B.PIXEL_PACK_BUFFER,we.byteLength,B.STREAM_READ),B.readPixels($,Y,re,j,it.convert(tt),it.convert(rt),0);const _t=H!==null?Fe.get(H).__webglFramebuffer:null;Re.bindFramebuffer(B.FRAMEBUFFER,_t);const Be=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await E0(B,Be,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,He),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,we),B.deleteBuffer(He),B.deleteSync(Be),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,$=null,Y=0){D.isTexture!==!0&&(Jr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,D=arguments[1]);const re=Math.pow(2,-Y),j=Math.floor(D.image.width*re),we=Math.floor(D.image.height*re),Ne=$!==null?$.x:0,Xe=$!==null?$.y:0;F.setTexture2D(D,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,Ne,Xe,j,we),Re.unbindTexture()},this.copyTextureToTexture=function(D,$,Y=null,re=null,j=0){D.isTexture!==!0&&(Jr("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,D=arguments[1],$=arguments[2],j=arguments[3]||0,Y=null);let we,Ne,Xe,je,tt,rt,He,_t,Be;const Rt=D.isCompressedTexture?D.mipmaps[j]:D.image;Y!==null?(we=Y.max.x-Y.min.x,Ne=Y.max.y-Y.min.y,Xe=Y.isBox3?Y.max.z-Y.min.z:1,je=Y.min.x,tt=Y.min.y,rt=Y.isBox3?Y.min.z:0):(we=Rt.width,Ne=Rt.height,Xe=Rt.depth||1,je=0,tt=0,rt=0),re!==null?(He=re.x,_t=re.y,Be=re.z):(He=0,_t=0,Be=0);const jt=it.convert($.format),Mt=it.convert($.type);let Ye;$.isData3DTexture?(F.setTexture3D($,0),Ye=B.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(F.setTexture2DArray($,0),Ye=B.TEXTURE_2D_ARRAY):(F.setTexture2D($,0),Ye=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,$.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,$.unpackAlignment);const Cn=B.getParameter(B.UNPACK_ROW_LENGTH),yt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),fn=B.getParameter(B.UNPACK_SKIP_PIXELS),Un=B.getParameter(B.UNPACK_SKIP_ROWS),rn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Rt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Rt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,je),B.pixelStorei(B.UNPACK_SKIP_ROWS,tt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,rt);const ci=D.isDataArrayTexture||D.isData3DTexture,w=$.isDataArrayTexture||$.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){const gt=Fe.get(D),wi=Fe.get($),Yt=Fe.get(gt.__renderTarget),sn=Fe.get(wi.__renderTarget);Re.bindFramebuffer(B.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let On=0;On<Xe;On++)ci&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.get(D).__webglTexture,j,rt+On),D.isDepthTexture?(w&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.get($).__webglTexture,j,Be+On),B.blitFramebuffer(je,tt,we,Ne,He,_t,we,Ne,B.DEPTH_BUFFER_BIT,B.NEAREST)):w?B.copyTexSubImage3D(Ye,j,He,_t,Be+On,je,tt,we,Ne):B.copyTexSubImage2D(Ye,j,He,_t,Be+On,je,tt,we,Ne);Re.bindFramebuffer(B.READ_FRAMEBUFFER,null),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else w?D.isDataTexture||D.isData3DTexture?B.texSubImage3D(Ye,j,He,_t,Be,we,Ne,Xe,jt,Mt,Rt.data):$.isCompressedArrayTexture?B.compressedTexSubImage3D(Ye,j,He,_t,Be,we,Ne,Xe,jt,Rt.data):B.texSubImage3D(Ye,j,He,_t,Be,we,Ne,Xe,jt,Mt,Rt):D.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,j,He,_t,we,Ne,jt,Mt,Rt.data):D.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,j,He,_t,Rt.width,Rt.height,jt,Rt.data):B.texSubImage2D(B.TEXTURE_2D,j,He,_t,we,Ne,jt,Mt,Rt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Cn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,yt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,fn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Un),B.pixelStorei(B.UNPACK_SKIP_IMAGES,rn),j===0&&$.generateMipmaps&&B.generateMipmap(Ye),Re.unbindTexture()},this.copyTextureToTexture3D=function(D,$,Y=null,re=null,j=0){return D.isTexture!==!0&&(Jr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,re=arguments[1]||null,D=arguments[2],$=arguments[3],j=arguments[4]||0),Jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,$,Y,re,j)},this.initRenderTarget=function(D){Fe.get(D).__webglFramebuffer===void 0&&F.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?F.setTextureCube(D,0):D.isData3DTexture?F.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?F.setTexture2DArray(D,0):F.setTexture2D(D,0),Re.unbindTexture()},this.resetState=function(){L=0,k=0,H=null,Re.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class Nd{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ot(e),this.near=t,this.far=n}clone(){return new Nd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ow extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vc,this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new z;class Fd{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),o=bt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const fh=new z,ph=new Et,mh=new Et,NE=new z,_h=new at,io=new z,za=new ai,gh=new at,Ha=new Nr;class kw extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mu,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingBox.expandByPoint(io)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingSphere.expandByPoint(io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),za.copy(this.boundingSphere),za.applyMatrix4(r),e.ray.intersectsSphere(za)!==!1&&(gh.copy(r).invert(),Ha.copy(e.ray).applyMatrix4(gh),!(this.boundingBox!==null&&Ha.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ha)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$v?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;ph.fromBufferAttribute(r.attributes.skinIndex,e),mh.fromBufferAttribute(r.attributes.skinWeight,e),fh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const c=mh.getComponent(o);if(c!==0){const l=ph.getComponent(o);_h.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(NE.copy(fh).applyMatrix4(_h),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class FE extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ud extends tn{constructor(e=null,t=1,n=1,r,o,c,l,h,d=yn,p=yn,m,_){super(null,c,l,h,d,p,r,o,m,_),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vh=new at,UE=new at;class Od{constructor(e=[],t=[]){this.uuid=Tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new at;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let o=0,c=e.length;o<c;o++){const l=e[o]?e[o].matrixWorld:UE;vh.multiplyMatrices(l,t[o]),vh.toArray(n,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Od(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ud(t,e,e,wn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const o=e.bones[n];let c=t[o];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),c=new FE),this.bones.push(c),this.boneInverses.push(new at().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,o=t.length;r<o;r++){const c=t[r];e.bones.push(c.uuid);const l=n[r];e.boneInverses.push(l.toArray())}return e}}class yh extends qt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const dr=new at,xh=new at,ro=[],Sh=new Wn,OE=new at,$r=new en,jr=new ai;class zw extends en{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,OE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),Sh.copy(e.boundingBox).applyMatrix4(dr),this.boundingBox.union(Sh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),jr.copy(e.boundingSphere).applyMatrix4(dr),this.boundingSphere.union(jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,o=n.length+1,c=e*o+1;for(let l=0;l<n.length;l++)n[l]=r[c+l]}raycast(e,t){const n=this.matrixWorld,r=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(n),e.ray.intersectsSphere(jr)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,dr),xh.multiplyMatrices(n,dr),$r.matrixWorld=xh,$r.raycast(e,ro);for(let c=0,l=ro.length;c<l;c++){const h=ro[c];h.instanceId=o,h.object=this,t.push(h)}ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ud(new Float32Array(r*this.count),r,this.count,sl,Fn));const o=this.morphTexture.source.data.data;let c=0;for(let d=0;d<n.length;d++)c+=n[d];const l=this.geometry.morphTargetsRelative?1:1-c,h=r*e;o[h]=l,o.set(n,h+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class os extends Yi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lo=new z,Io=new z,Mh=new at,Yr=new Nr,so=new ai,Va=new z,Eh=new z;class Bd extends Ft{constructor(e=new Zt,t=new os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)Lo.fromBufferAttribute(t,r-1),Io.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Lo.distanceTo(Io);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),so.radius+=o,e.ray.intersectsSphere(so)===!1)return;Mh.copy(r).invert(),Yr.copy(e.ray).applyMatrix4(Mh);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,d=this.isLineSegments?2:1,p=n.index,_=n.attributes.position;if(p!==null){const g=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let E=g,x=S-1;E<x;E+=d){const y=p.getX(E),N=p.getX(E+1),P=oo(this,e,Yr,h,y,N);P&&t.push(P)}if(this.isLineLoop){const E=p.getX(S-1),x=p.getX(g),y=oo(this,e,Yr,h,E,x);y&&t.push(y)}}else{const g=Math.max(0,c.start),S=Math.min(_.count,c.start+c.count);for(let E=g,x=S-1;E<x;E+=d){const y=oo(this,e,Yr,h,E,E+1);y&&t.push(y)}if(this.isLineLoop){const E=oo(this,e,Yr,h,S-1,g);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function oo(i,e,t,n,r,o){const c=i.geometry.attributes.position;if(Lo.fromBufferAttribute(c,r),Io.fromBufferAttribute(c,o),t.distanceSqToSegment(Lo,Io,Va,Eh)>n)return;Va.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Va);if(!(h<e.near||h>e.far))return{distance:h,point:Eh.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const bh=new z,wh=new z;class No extends Bd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)bh.fromBufferAttribute(t,r),wh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+bh.distanceTo(wh);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hw extends Bd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class BE extends Yi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Th=new at,Wc=new Nr,ao=new ai,co=new z;class Vw extends Ft{constructor(e=new Zt,t=new BE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),ao.radius+=o,e.ray.intersectsSphere(ao)===!1)return;Th.copy(r).invert(),Wc.copy(e.ray).applyMatrix4(Th);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,d=n.index,m=n.attributes.position;if(d!==null){const _=Math.max(0,c.start),g=Math.min(d.count,c.start+c.count);for(let S=_,E=g;S<E;S++){const x=d.getX(S);co.fromBufferAttribute(m,x),Ah(co,x,h,r,e,t,this)}}else{const _=Math.max(0,c.start),g=Math.min(m.count,c.start+c.count);for(let S=_,E=g;S<E;S++)co.fromBufferAttribute(m,S),Ah(co,S,h,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Ah(i,e,t,n,r,o,c){const l=Wc.distanceSqToPoint(i);if(l<t){const h=new z;Wc.closestPointToPoint(i,h),h.applyMatrix4(n);const d=r.ray.origin.distanceTo(h);if(d<r.near||d>r.far)return;o.push({distance:d,distanceToRay:Math.sqrt(l),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),o=0;t.push(0);for(let c=1;c<=e;c++)n=this.getPoint(c/e),o+=n.distanceTo(r),t.push(o),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const o=n.length;let c;t?c=t:c=e*n[o-1];let l=0,h=o-1,d;for(;l<=h;)if(r=Math.floor(l+(h-l)/2),d=n[r]-c,d<0)l=r+1;else if(d>0)h=r-1;else{h=r;break}if(r=h,n[r]===c)return r/(o-1);const p=n[r],_=n[r+1]-p,g=(c-p)/_;return(r+g)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const c=this.getPoint(r),l=this.getPoint(o),h=t||(c.isVector2?new Ae:new z);return h.copy(l).sub(c).normalize(),h}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new z,r=[],o=[],c=[],l=new z,h=new at;for(let g=0;g<=e;g++){const S=g/e;r[g]=this.getTangentAt(S,new z)}o[0]=new z,c[0]=new z;let d=Number.MAX_VALUE;const p=Math.abs(r[0].x),m=Math.abs(r[0].y),_=Math.abs(r[0].z);p<=d&&(d=p,n.set(1,0,0)),m<=d&&(d=m,n.set(0,1,0)),_<=d&&n.set(0,0,1),l.crossVectors(r[0],n).normalize(),o[0].crossVectors(r[0],l),c[0].crossVectors(r[0],o[0]);for(let g=1;g<=e;g++){if(o[g]=o[g-1].clone(),c[g]=c[g-1].clone(),l.crossVectors(r[g-1],r[g]),l.length()>Number.EPSILON){l.normalize();const S=Math.acos(Gt(r[g-1].dot(r[g]),-1,1));o[g].applyMatrix4(h.makeRotationAxis(l,S))}c[g].crossVectors(r[g],o[g])}if(t===!0){let g=Math.acos(Gt(o[0].dot(o[e]),-1,1));g/=e,r[0].dot(l.crossVectors(o[0],o[e]))>0&&(g=-g);for(let S=1;S<=e;S++)o[S].applyMatrix4(h.makeRotationAxis(r[S],g*S)),c[S].crossVectors(r[S],o[S])}return{tangents:r,normals:o,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class fl extends Xn{constructor(e=0,t=0,n=1,r=1,o=0,c=Math.PI*2,l=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=c,this.aClockwise=l,this.aRotation=h}getPoint(e,t=new Ae){const n=t,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const c=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(c?o=0:o=r),this.aClockwise===!0&&!c&&(o===r?o=-r:o=o-r);const l=this.aStartAngle+e*o;let h=this.aX+this.xRadius*Math.cos(l),d=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const p=Math.cos(this.aRotation),m=Math.sin(this.aRotation),_=h-this.aX,g=d-this.aY;h=_*p-g*m+this.aX,d=_*m+g*p+this.aY}return n.set(h,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class kE extends fl{constructor(e,t,n,r,o,c){super(e,t,n,n,r,o,c),this.isArcCurve=!0,this.type="ArcCurve"}}function pl(){let i=0,e=0,t=0,n=0;function r(o,c,l,h){i=o,e=l,t=-3*o+3*c-2*l-h,n=2*o-2*c+l+h}return{initCatmullRom:function(o,c,l,h,d){r(c,l,d*(l-o),d*(h-c))},initNonuniformCatmullRom:function(o,c,l,h,d,p,m){let _=(c-o)/d-(l-o)/(d+p)+(l-c)/p,g=(l-c)/p-(h-c)/(p+m)+(h-l)/m;_*=p,g*=p,r(c,l,_,g)},calc:function(o){const c=o*o,l=c*o;return i+e*o+t*c+n*l}}}const lo=new z,Ga=new pl,Wa=new pl,Xa=new pl;class zE extends Xn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new z){const n=t,r=this.points,o=r.length,c=(o-(this.closed?0:1))*e;let l=Math.floor(c),h=c-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/o)+1)*o:h===0&&l===o-1&&(l=o-2,h=1);let d,p;this.closed||l>0?d=r[(l-1)%o]:(lo.subVectors(r[0],r[1]).add(r[0]),d=lo);const m=r[l%o],_=r[(l+1)%o];if(this.closed||l+2<o?p=r[(l+2)%o]:(lo.subVectors(r[o-1],r[o-2]).add(r[o-1]),p=lo),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let S=Math.pow(d.distanceToSquared(m),g),E=Math.pow(m.distanceToSquared(_),g),x=Math.pow(_.distanceToSquared(p),g);E<1e-4&&(E=1),S<1e-4&&(S=E),x<1e-4&&(x=E),Ga.initNonuniformCatmullRom(d.x,m.x,_.x,p.x,S,E,x),Wa.initNonuniformCatmullRom(d.y,m.y,_.y,p.y,S,E,x),Xa.initNonuniformCatmullRom(d.z,m.z,_.z,p.z,S,E,x)}else this.curveType==="catmullrom"&&(Ga.initCatmullRom(d.x,m.x,_.x,p.x,this.tension),Wa.initCatmullRom(d.y,m.y,_.y,p.y,this.tension),Xa.initCatmullRom(d.z,m.z,_.z,p.z,this.tension));return n.set(Ga.calc(h),Wa.calc(h),Xa.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ch(i,e,t,n,r){const o=(n-e)*.5,c=(r-t)*.5,l=i*i,h=i*l;return(2*t-2*n+o+c)*h+(-3*t+3*n-2*o-c)*l+o*i+t}function HE(i,e){const t=1-i;return t*t*e}function VE(i,e){return 2*(1-i)*i*e}function GE(i,e){return i*i*e}function ts(i,e,t,n){return HE(i,e)+VE(i,t)+GE(i,n)}function WE(i,e){const t=1-i;return t*t*t*e}function XE(i,e){const t=1-i;return 3*t*t*i*e}function $E(i,e){return 3*(1-i)*i*i*e}function jE(i,e){return i*i*i*e}function ns(i,e,t,n,r){return WE(i,e)+XE(i,t)+$E(i,n)+jE(i,r)}class kd extends Xn{constructor(e=new Ae,t=new Ae,n=new Ae,r=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ae){const n=t,r=this.v0,o=this.v1,c=this.v2,l=this.v3;return n.set(ns(e,r.x,o.x,c.x,l.x),ns(e,r.y,o.y,c.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class YE extends Xn{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){const n=t,r=this.v0,o=this.v1,c=this.v2,l=this.v3;return n.set(ns(e,r.x,o.x,c.x,l.x),ns(e,r.y,o.y,c.y,l.y),ns(e,r.z,o.z,c.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zd extends Xn{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qE extends Xn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hd extends Xn{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){const n=t,r=this.v0,o=this.v1,c=this.v2;return n.set(ts(e,r.x,o.x,c.x),ts(e,r.y,o.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ZE extends Xn{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,r=this.v0,o=this.v1,c=this.v2;return n.set(ts(e,r.x,o.x,c.x),ts(e,r.y,o.y,c.y),ts(e,r.z,o.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vd extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const n=t,r=this.points,o=(r.length-1)*e,c=Math.floor(o),l=o-c,h=r[c===0?c:c-1],d=r[c],p=r[c>r.length-2?r.length-1:c+1],m=r[c>r.length-3?r.length-1:c+2];return n.set(Ch(l,h.x,d.x,p.x,m.x),Ch(l,h.y,d.y,p.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Ae().fromArray(r))}return this}}var Xc=Object.freeze({__proto__:null,ArcCurve:kE,CatmullRomCurve3:zE,CubicBezierCurve:kd,CubicBezierCurve3:YE,EllipseCurve:fl,LineCurve:zd,LineCurve3:qE,QuadraticBezierCurve:Hd,QuadraticBezierCurve3:ZE,SplineCurve:Vd});class KE extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let o=0;for(;o<r.length;){if(r[o]>=n){const c=r[o]-n,l=this.curves[o],h=l.getLength(),d=h===0?0:1-c/h;return l.getPointAt(d,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,o=this.curves;r<o.length;r++){const c=o[r],l=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(l);for(let d=0;d<h.length;d++){const p=h[d];n&&n.equals(p)||(t.push(p),n=p)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Xc[r.type]().fromJSON(r))}return this}}class Fo extends KE{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new zd(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const o=new Hd(this.currentPoint.clone(),new Ae(e,t),new Ae(n,r));return this.curves.push(o),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,o,c){const l=new kd(this.currentPoint.clone(),new Ae(e,t),new Ae(n,r),new Ae(o,c));return this.curves.push(l),this.currentPoint.set(o,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Vd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+l,t+h,n,r,o,c),this}absarc(e,t,n,r,o,c){return this.absellipse(e,t,n,n,r,o,c),this}ellipse(e,t,n,r,o,c,l,h){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(e+d,t+p,n,r,o,c,l,h),this}absellipse(e,t,n,r,o,c,l,h){const d=new fl(e,t,n,r,o,c,l,h);if(this.curves.length>0){const m=d.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(d);const p=d.getPoint(1);return this.currentPoint.copy(p),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gd extends Zt{constructor(e=1,t=1,n=1,r=32,o=1,c=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:c,thetaStart:l,thetaLength:h};const d=this;r=Math.floor(r),o=Math.floor(o);const p=[],m=[],_=[],g=[];let S=0;const E=[],x=n/2;let y=0;N(),c===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(p),this.setAttribute("position",new Ut(m,3)),this.setAttribute("normal",new Ut(_,3)),this.setAttribute("uv",new Ut(g,2));function N(){const A=new z,V=new z;let L=0;const k=(t-e)/n;for(let H=0;H<=o;H++){const I=[],b=H/o,O=b*(t-e)+e;for(let q=0;q<=r;q++){const Z=q/r,Q=Z*h+l,ne=Math.sin(Q),ie=Math.cos(Q);V.x=O*ne,V.y=-b*n+x,V.z=O*ie,m.push(V.x,V.y,V.z),A.set(ne,k,ie).normalize(),_.push(A.x,A.y,A.z),g.push(Z,1-b),I.push(S++)}E.push(I)}for(let H=0;H<r;H++)for(let I=0;I<o;I++){const b=E[I][H],O=E[I+1][H],q=E[I+1][H+1],Z=E[I][H+1];(e>0||I!==0)&&(p.push(b,O,Z),L+=3),(t>0||I!==o-1)&&(p.push(O,q,Z),L+=3)}d.addGroup(y,L,0),y+=L}function P(A){const V=S,L=new Ae,k=new z;let H=0;const I=A===!0?e:t,b=A===!0?1:-1;for(let q=1;q<=r;q++)m.push(0,x*b,0),_.push(0,b,0),g.push(.5,.5),S++;const O=S;for(let q=0;q<=r;q++){const Q=q/r*h+l,ne=Math.cos(Q),ie=Math.sin(Q);k.x=I*ie,k.y=x*b,k.z=I*ne,m.push(k.x,k.y,k.z),_.push(0,b,0),L.x=ne*.5+.5,L.y=ie*.5*b+.5,g.push(L.x,L.y),S++}for(let q=0;q<r;q++){const Z=V+q,Q=O+q;A===!0?p.push(Q,Q+1,Z):p.push(Q+1,Q,Z),H+=3}d.addGroup(y,H,A===!0?1:2),y+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const uo=new z,ho=new z,$a=new z,fo=new bn;class Rh extends Zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),o=Math.cos(Sr*t),c=e.getIndex(),l=e.getAttribute("position"),h=c?c.count:l.count,d=[0,0,0],p=["a","b","c"],m=new Array(3),_={},g=[];for(let S=0;S<h;S+=3){c?(d[0]=c.getX(S),d[1]=c.getX(S+1),d[2]=c.getX(S+2)):(d[0]=S,d[1]=S+1,d[2]=S+2);const{a:E,b:x,c:y}=fo;if(E.fromBufferAttribute(l,d[0]),x.fromBufferAttribute(l,d[1]),y.fromBufferAttribute(l,d[2]),fo.getNormal($a),m[0]=`${Math.round(E.x*r)},${Math.round(E.y*r)},${Math.round(E.z*r)}`,m[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,m[2]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let N=0;N<3;N++){const P=(N+1)%3,A=m[N],V=m[P],L=fo[p[N]],k=fo[p[P]],H=`${A}_${V}`,I=`${V}_${A}`;I in _&&_[I]?($a.dot(_[I].normal)<=o&&(g.push(L.x,L.y,L.z),g.push(k.x,k.y,k.z)),_[I]=null):H in _||(_[H]={index0:d[N],index1:d[P],normal:$a.clone()})}}for(const S in _)if(_[S]){const{index0:E,index1:x}=_[S];uo.fromBufferAttribute(l,E),ho.fromBufferAttribute(l,x),g.push(uo.x,uo.y,uo.z),g.push(ho.x,ho.y,ho.z)}this.setAttribute("position",new Ut(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ao extends Fo{constructor(e){super(e),this.uuid=Tn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Fo().fromJSON(r))}return this}}const JE={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let o=Wd(i,0,r,t,!0);const c=[];if(!o||o.next===o.prev)return c;let l,h,d,p,m,_,g;if(n&&(o=ib(i,e,o,t)),i.length>80*t){l=d=i[0],h=p=i[1];for(let S=t;S<r;S+=t)m=i[S],_=i[S+1],m<l&&(l=m),_<h&&(h=_),m>d&&(d=m),_>p&&(p=_);g=Math.max(d-l,p-h),g=g!==0?32767/g:0}return as(o,c,t,l,h,g,0),c}};function Wd(i,e,t,n,r){let o,c;if(r===pb(i,e,t,n)>0)for(o=e;o<t;o+=n)c=Ph(o,i[o],i[o+1],c);else for(o=t-n;o>=e;o-=n)c=Ph(o,i[o],i[o+1],c);return c&&Wo(c,c.next)&&(ls(c),c=c.next),c}function $i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Wo(t,t.next)||Nt(t.prev,t,t.next)===0)){if(ls(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function as(i,e,t,n,r,o,c){if(!i)return;!c&&o&&cb(i,n,r,o);let l=i,h,d;for(;i.prev!==i.next;){if(h=i.prev,d=i.next,o?eb(i,n,r,o):QE(i)){e.push(h.i/t|0),e.push(i.i/t|0),e.push(d.i/t|0),ls(i),i=d.next,l=d.next;continue}if(i=d,i===l){c?c===1?(i=tb($i(i),e,t),as(i,e,t,n,r,o,2)):c===2&&nb(i,e,t,n,r,o):as($i(i),e,t,n,r,o,1);break}}}function QE(i){const e=i.prev,t=i,n=i.next;if(Nt(e,t,n)>=0)return!1;const r=e.x,o=t.x,c=n.x,l=e.y,h=t.y,d=n.y,p=r<o?r<c?r:c:o<c?o:c,m=l<h?l<d?l:d:h<d?h:d,_=r>o?r>c?r:c:o>c?o:c,g=l>h?l>d?l:d:h>d?h:d;let S=n.next;for(;S!==e;){if(S.x>=p&&S.x<=_&&S.y>=m&&S.y<=g&&gr(r,l,o,h,c,d,S.x,S.y)&&Nt(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function eb(i,e,t,n){const r=i.prev,o=i,c=i.next;if(Nt(r,o,c)>=0)return!1;const l=r.x,h=o.x,d=c.x,p=r.y,m=o.y,_=c.y,g=l<h?l<d?l:d:h<d?h:d,S=p<m?p<_?p:_:m<_?m:_,E=l>h?l>d?l:d:h>d?h:d,x=p>m?p>_?p:_:m>_?m:_,y=$c(g,S,e,t,n),N=$c(E,x,e,t,n);let P=i.prevZ,A=i.nextZ;for(;P&&P.z>=y&&A&&A.z<=N;){if(P.x>=g&&P.x<=E&&P.y>=S&&P.y<=x&&P!==r&&P!==c&&gr(l,p,h,m,d,_,P.x,P.y)&&Nt(P.prev,P,P.next)>=0||(P=P.prevZ,A.x>=g&&A.x<=E&&A.y>=S&&A.y<=x&&A!==r&&A!==c&&gr(l,p,h,m,d,_,A.x,A.y)&&Nt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;P&&P.z>=y;){if(P.x>=g&&P.x<=E&&P.y>=S&&P.y<=x&&P!==r&&P!==c&&gr(l,p,h,m,d,_,P.x,P.y)&&Nt(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;A&&A.z<=N;){if(A.x>=g&&A.x<=E&&A.y>=S&&A.y<=x&&A!==r&&A!==c&&gr(l,p,h,m,d,_,A.x,A.y)&&Nt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function tb(i,e,t){let n=i;do{const r=n.prev,o=n.next.next;!Wo(r,o)&&Xd(r,n,n.next,o)&&cs(r,o)&&cs(o,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(o.i/t|0),ls(n),ls(n.next),n=i=o),n=n.next}while(n!==i);return $i(n)}function nb(i,e,t,n,r,o){let c=i;do{let l=c.next.next;for(;l!==c.prev;){if(c.i!==l.i&&hb(c,l)){let h=$d(c,l);c=$i(c,c.next),h=$i(h,h.next),as(c,e,t,n,r,o,0),as(h,e,t,n,r,o,0);return}l=l.next}c=c.next}while(c!==i)}function ib(i,e,t,n){const r=[];let o,c,l,h,d;for(o=0,c=e.length;o<c;o++)l=e[o]*n,h=o<c-1?e[o+1]*n:i.length,d=Wd(i,l,h,n,!1),d===d.next&&(d.steiner=!0),r.push(ub(d));for(r.sort(rb),o=0;o<r.length;o++)t=sb(r[o],t);return t}function rb(i,e){return i.x-e.x}function sb(i,e){const t=ob(i,e);if(!t)return e;const n=$d(t,i);return $i(n,n.next),$i(t,t.next)}function ob(i,e){let t=e,n=-1/0,r;const o=i.x,c=i.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const _=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(_<=o&&_>n&&(n=_,r=t.x<t.next.x?t:t.next,_===o))return r}t=t.next}while(t!==e);if(!r)return null;const l=r,h=r.x,d=r.y;let p=1/0,m;t=r;do o>=t.x&&t.x>=h&&o!==t.x&&gr(c<d?o:n,c,h,d,c<d?n:o,c,t.x,t.y)&&(m=Math.abs(c-t.y)/(o-t.x),cs(t,i)&&(m<p||m===p&&(t.x>r.x||t.x===r.x&&ab(r,t)))&&(r=t,p=m)),t=t.next;while(t!==l);return r}function ab(i,e){return Nt(i.prev,i,e.prev)<0&&Nt(e.next,i,i.next)<0}function cb(i,e,t,n){let r=i;do r.z===0&&(r.z=$c(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,lb(r)}function lb(i){let e,t,n,r,o,c,l,h,d=1;do{for(t=i,i=null,o=null,c=0;t;){for(c++,n=t,l=0,e=0;e<d&&(l++,n=n.nextZ,!!n);e++);for(h=d;l>0||h>0&&n;)l!==0&&(h===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,l--):(r=n,n=n.nextZ,h--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;t=n}o.nextZ=null,d*=2}while(c>1);return i}function $c(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ub(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function gr(i,e,t,n,r,o,c,l){return(r-c)*(e-l)>=(i-c)*(o-l)&&(i-c)*(n-l)>=(t-c)*(e-l)&&(t-c)*(o-l)>=(r-c)*(n-l)}function hb(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!db(i,e)&&(cs(i,e)&&cs(e,i)&&fb(i,e)&&(Nt(i.prev,i,e.prev)||Nt(i,e.prev,e))||Wo(i,e)&&Nt(i.prev,i,i.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Wo(i,e){return i.x===e.x&&i.y===e.y}function Xd(i,e,t,n){const r=mo(Nt(i,e,t)),o=mo(Nt(i,e,n)),c=mo(Nt(t,n,i)),l=mo(Nt(t,n,e));return!!(r!==o&&c!==l||r===0&&po(i,t,e)||o===0&&po(i,n,e)||c===0&&po(t,i,n)||l===0&&po(t,e,n))}function po(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function mo(i){return i>0?1:i<0?-1:0}function db(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Xd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function cs(i,e){return Nt(i.prev,i,i.next)<0?Nt(i,e,i.next)>=0&&Nt(i,i.prev,e)>=0:Nt(i,e,i.prev)<0||Nt(i,i.next,e)<0}function fb(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,o=(i.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function $d(i,e){const t=new jc(i.i,i.x,i.y),n=new jc(e.i,e.x,e.y),r=i.next,o=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function Ph(i,e,t,n){const r=new jc(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ls(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pb(i,e,t,n){let r=0;for(let o=e,c=t-n;o<t;o+=n)r+=(i[c]-i[o])*(i[o+1]+i[c+1]),c=o;return r}class is{static area(e){const t=e.length;let n=0;for(let r=t-1,o=0;o<t;r=o++)n+=e[r].x*e[o].y-e[o].x*e[r].y;return n*.5}static isClockWise(e){return is.area(e)<0}static triangulateShape(e,t){const n=[],r=[],o=[];Dh(e),Lh(n,e);let c=e.length;t.forEach(Dh);for(let h=0;h<t.length;h++)r.push(c),c+=t[h].length,Lh(n,t[h]);const l=JE.triangulate(n,r);for(let h=0;h<l.length;h+=3)o.push(l.slice(h,h+3));return o}}function Dh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Lh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ml extends Zt{constructor(e=new Ao([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],o=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];c(d)}this.setAttribute("position",new Ut(r,3)),this.setAttribute("uv",new Ut(o,2)),this.computeVertexNormals();function c(l){const h=[],d=t.curveSegments!==void 0?t.curveSegments:12,p=t.steps!==void 0?t.steps:1,m=t.depth!==void 0?t.depth:1;let _=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,S=t.bevelSize!==void 0?t.bevelSize:g-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,N=t.UVGenerator!==void 0?t.UVGenerator:mb;let P,A=!1,V,L,k,H;y&&(P=y.getSpacedPoints(p),A=!0,_=!1,V=y.computeFrenetFrames(p,!1),L=new z,k=new z,H=new z),_||(x=0,g=0,S=0,E=0);const I=l.extractPoints(d);let b=I.shape;const O=I.holes;if(!is.isClockWise(b)){b=b.reverse();for(let X=0,he=O.length;X<he;X++){const B=O[X];is.isClockWise(B)&&(O[X]=B.reverse())}}const Z=is.triangulateShape(b,O),Q=b;for(let X=0,he=O.length;X<he;X++){const B=O[X];b=b.concat(B)}function ne(X,he,B){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(he,B)}const ie=b.length,me=Z.length;function se(X,he,B){let $e,Ee,ze;const Re=X.x-he.x,Ze=X.y-he.y,Fe=B.x-X.x,F=B.y-X.y,R=Re*Re+Ze*Ze,ee=Re*F-Ze*Fe;if(Math.abs(ee)>Number.EPSILON){const de=Math.sqrt(R),fe=Math.sqrt(Fe*Fe+F*F),ce=he.x-Ze/de,Ve=he.y+Re/de,Pe=B.x-F/fe,ke=B.y+Fe/fe,ft=((Pe-ce)*F-(ke-Ve)*Fe)/(Re*F-Ze*Fe);$e=ce+Re*ft-X.x,Ee=Ve+Ze*ft-X.y;const Te=$e*$e+Ee*Ee;if(Te<=2)return new Ae($e,Ee);ze=Math.sqrt(Te/2)}else{let de=!1;Re>Number.EPSILON?Fe>Number.EPSILON&&(de=!0):Re<-Number.EPSILON?Fe<-Number.EPSILON&&(de=!0):Math.sign(Ze)===Math.sign(F)&&(de=!0),de?($e=-Ze,Ee=Re,ze=Math.sqrt(R)):($e=Re,Ee=Ze,ze=Math.sqrt(R/2))}return new Ae($e/ze,Ee/ze)}const Ce=[];for(let X=0,he=Q.length,B=he-1,$e=X+1;X<he;X++,B++,$e++)B===he&&(B=0),$e===he&&($e=0),Ce[X]=se(Q[X],Q[B],Q[$e]);const Le=[];let Oe,Ke=Ce.concat();for(let X=0,he=O.length;X<he;X++){const B=O[X];Oe=[];for(let $e=0,Ee=B.length,ze=Ee-1,Re=$e+1;$e<Ee;$e++,ze++,Re++)ze===Ee&&(ze=0),Re===Ee&&(Re=0),Oe[$e]=se(B[$e],B[ze],B[Re]);Le.push(Oe),Ke=Ke.concat(Oe)}for(let X=0;X<x;X++){const he=X/x,B=g*Math.cos(he*Math.PI/2),$e=S*Math.sin(he*Math.PI/2)+E;for(let Ee=0,ze=Q.length;Ee<ze;Ee++){const Re=ne(Q[Ee],Ce[Ee],$e);be(Re.x,Re.y,-B)}for(let Ee=0,ze=O.length;Ee<ze;Ee++){const Re=O[Ee];Oe=Le[Ee];for(let Ze=0,Fe=Re.length;Ze<Fe;Ze++){const F=ne(Re[Ze],Oe[Ze],$e);be(F.x,F.y,-B)}}}const ht=S+E;for(let X=0;X<ie;X++){const he=_?ne(b[X],Ke[X],ht):b[X];A?(k.copy(V.normals[0]).multiplyScalar(he.x),L.copy(V.binormals[0]).multiplyScalar(he.y),H.copy(P[0]).add(k).add(L),be(H.x,H.y,H.z)):be(he.x,he.y,0)}for(let X=1;X<=p;X++)for(let he=0;he<ie;he++){const B=_?ne(b[he],Ke[he],ht):b[he];A?(k.copy(V.normals[X]).multiplyScalar(B.x),L.copy(V.binormals[X]).multiplyScalar(B.y),H.copy(P[X]).add(k).add(L),be(H.x,H.y,H.z)):be(B.x,B.y,m/p*X)}for(let X=x-1;X>=0;X--){const he=X/x,B=g*Math.cos(he*Math.PI/2),$e=S*Math.sin(he*Math.PI/2)+E;for(let Ee=0,ze=Q.length;Ee<ze;Ee++){const Re=ne(Q[Ee],Ce[Ee],$e);be(Re.x,Re.y,m+B)}for(let Ee=0,ze=O.length;Ee<ze;Ee++){const Re=O[Ee];Oe=Le[Ee];for(let Ze=0,Fe=Re.length;Ze<Fe;Ze++){const F=ne(Re[Ze],Oe[Ze],$e);A?be(F.x,F.y+P[p-1].y,P[p-1].x+B):be(F.x,F.y,m+B)}}}oe(),ve();function oe(){const X=r.length/3;if(_){let he=0,B=ie*he;for(let $e=0;$e<me;$e++){const Ee=Z[$e];pe(Ee[2]+B,Ee[1]+B,Ee[0]+B)}he=p+x*2,B=ie*he;for(let $e=0;$e<me;$e++){const Ee=Z[$e];pe(Ee[0]+B,Ee[1]+B,Ee[2]+B)}}else{for(let he=0;he<me;he++){const B=Z[he];pe(B[2],B[1],B[0])}for(let he=0;he<me;he++){const B=Z[he];pe(B[0]+ie*p,B[1]+ie*p,B[2]+ie*p)}}n.addGroup(X,r.length/3-X,0)}function ve(){const X=r.length/3;let he=0;Ue(Q,he),he+=Q.length;for(let B=0,$e=O.length;B<$e;B++){const Ee=O[B];Ue(Ee,he),he+=Ee.length}n.addGroup(X,r.length/3-X,1)}function Ue(X,he){let B=X.length;for(;--B>=0;){const $e=B;let Ee=B-1;Ee<0&&(Ee=X.length-1);for(let ze=0,Re=p+x*2;ze<Re;ze++){const Ze=ie*ze,Fe=ie*(ze+1),F=he+$e+Ze,R=he+Ee+Ze,ee=he+Ee+Fe,de=he+$e+Fe;Me(F,R,ee,de)}}}function be(X,he,B){h.push(X),h.push(he),h.push(B)}function pe(X,he,B){Je(X),Je(he),Je(B);const $e=r.length/3,Ee=N.generateTopUV(n,r,$e-3,$e-2,$e-1);ct(Ee[0]),ct(Ee[1]),ct(Ee[2])}function Me(X,he,B,$e){Je(X),Je(he),Je($e),Je(he),Je(B),Je($e);const Ee=r.length/3,ze=N.generateSideWallUV(n,r,Ee-6,Ee-3,Ee-2,Ee-1);ct(ze[0]),ct(ze[1]),ct(ze[3]),ct(ze[1]),ct(ze[2]),ct(ze[3])}function Je(X){r.push(h[X*3+0]),r.push(h[X*3+1]),r.push(h[X*3+2])}function ct(X){o.push(X.x),o.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return _b(t,n,e)}static fromJSON(e,t){const n=[];for(let o=0,c=e.shapes.length;o<c;o++){const l=t[e.shapes[o]];n.push(l)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Xc[r.type]().fromJSON(r)),new ml(n,e.options)}}const mb={generateTopUV:function(i,e,t,n,r){const o=e[t*3],c=e[t*3+1],l=e[n*3],h=e[n*3+1],d=e[r*3],p=e[r*3+1];return[new Ae(o,c),new Ae(l,h),new Ae(d,p)]},generateSideWallUV:function(i,e,t,n,r,o){const c=e[t*3],l=e[t*3+1],h=e[t*3+2],d=e[n*3],p=e[n*3+1],m=e[n*3+2],_=e[r*3],g=e[r*3+1],S=e[r*3+2],E=e[o*3],x=e[o*3+1],y=e[o*3+2];return Math.abs(l-p)<Math.abs(c-d)?[new Ae(c,1-h),new Ae(d,1-m),new Ae(_,1-S),new Ae(E,1-y)]:[new Ae(l,1-h),new Ae(p,1-m),new Ae(g,1-S),new Ae(x,1-y)]}};function _b(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const o=i[n];t.shapes.push(o.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class jd extends Zt{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,c=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:c,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(c+l,Math.PI);let d=0;const p=[],m=new z,_=new z,g=[],S=[],E=[],x=[];for(let y=0;y<=n;y++){const N=[],P=y/n;let A=0;y===0&&c===0?A=.5/t:y===n&&h===Math.PI&&(A=-.5/t);for(let V=0;V<=t;V++){const L=V/t;m.x=-e*Math.cos(r+L*o)*Math.sin(c+P*l),m.y=e*Math.cos(c+P*l),m.z=e*Math.sin(r+L*o)*Math.sin(c+P*l),S.push(m.x,m.y,m.z),_.copy(m).normalize(),E.push(_.x,_.y,_.z),x.push(L+A,1-P),N.push(d++)}p.push(N)}for(let y=0;y<n;y++)for(let N=0;N<t;N++){const P=p[y][N+1],A=p[y][N],V=p[y+1][N],L=p[y+1][N+1];(y!==0||c>0)&&g.push(P,A,L),(y!==n-1||h<Math.PI)&&g.push(A,V,L)}this.setIndex(g),this.setAttribute("position",new Ut(S,3)),this.setAttribute("normal",new Ut(E,3)),this.setAttribute("uv",new Ut(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yc extends Yi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_d,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gw extends Yc{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function _o(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function vb(i){function e(r,o){return i[r]-i[o]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Ih(i,e,t){const n=i.length,r=new i.constructor(n);for(let o=0,c=0;c!==n;++o){const l=t[o]*e;for(let h=0;h!==e;++h)r[c++]=i[l+h]}return r}function Yd(i,e,t,n){let r=1,o=i[0];for(;o!==void 0&&o[n]===void 0;)o=i[r++];if(o===void 0)return;let c=o[n];if(c!==void 0)if(Array.isArray(c))do c=o[n],c!==void 0&&(e.push(o.time),t.push.apply(t,c)),o=i[r++];while(o!==void 0);else if(c.toArray!==void 0)do c=o[n],c!==void 0&&(e.push(o.time),c.toArray(t,t.length)),o=i[r++];while(o!==void 0);else do c=o[n],c!==void 0&&(e.push(o.time),t.push(c)),o=i[r++];while(o!==void 0)}class Xo{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],o=t[n-1];e:{t:{let c;n:{i:if(!(e<r)){for(let l=n+2;;){if(r===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(o=r,r=t[++n],e<r)break t}c=t.length;break n}if(!(e>=o)){const l=t[1];e<l&&(n=2,o=l);for(let h=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(r=o,o=t[--n-1],e>=o)break t}c=n,n=0;break n}break e}for(;n<c;){const l=n+c>>>1;e<t[l]?c=l:n=l+1}if(r=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=e*r;for(let c=0;c!==r;++c)t[c]=n[o+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yb extends Xo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_u,endingEnd:_u}}intervalChanged_(e,t,n){const r=this.parameterPositions;let o=e-2,c=e+1,l=r[o],h=r[c];if(l===void 0)switch(this.getSettings_().endingStart){case gu:o=e,l=2*t-n;break;case vu:o=r.length-2,l=t+r[o]-r[o+1];break;default:o=e,l=n}if(h===void 0)switch(this.getSettings_().endingEnd){case gu:c=e,h=2*n-t;break;case vu:c=1,h=n+r[1]-r[0];break;default:c=e-1,h=t}const d=(n-t)*.5,p=this.valueSize;this._weightPrev=d/(t-l),this._weightNext=d/(h-n),this._offsetPrev=o*p,this._offsetNext=c*p}interpolate_(e,t,n,r){const o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,h=e*l,d=h-l,p=this._offsetPrev,m=this._offsetNext,_=this._weightPrev,g=this._weightNext,S=(n-t)/(r-t),E=S*S,x=E*S,y=-_*x+2*_*E-_*S,N=(1+_)*x+(-1.5-2*_)*E+(-.5+_)*S+1,P=(-1-g)*x+(1.5+g)*E+.5*S,A=g*x-g*E;for(let V=0;V!==l;++V)o[V]=y*c[p+V]+N*c[d+V]+P*c[h+V]+A*c[m+V];return o}}class xb extends Xo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,h=e*l,d=h-l,p=(n-t)/(r-t),m=1-p;for(let _=0;_!==l;++_)o[_]=c[d+_]*m+c[h+_]*p;return o}}class Sb extends Xo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class $n{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_o(t,this.TimeBufferType),this.values=_o(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_o(e.times,Array),values:_o(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ro:t=this.InterpolantFactoryMethodDiscrete;break;case Hc:t=this.InterpolantFactoryMethodLinear;break;case da:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ro;case this.InterpolantFactoryMethodLinear:return Hc;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let o=0,c=r-1;for(;o!==r&&n[o]<e;)++o;for(;c!==-1&&n[c]>t;)--c;if(++c,o!==0||c!==r){o>=c&&(c=Math.max(c,1),o=c-1);const l=this.getValueSize();this.times=n.slice(o,c),this.values=this.values.slice(o*l,c*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let l=0;l!==o;l++){const h=n[l];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,h),e=!1;break}if(c!==null&&c>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,h,c),e=!1;break}c=h}if(r!==void 0&&gb(r))for(let l=0,h=r.length;l!==h;++l){const d=r[l];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===da,o=e.length-1;let c=1;for(let l=1;l<o;++l){let h=!1;const d=e[l],p=e[l+1];if(d!==p&&(l!==1||d!==e[0]))if(r)h=!0;else{const m=l*n,_=m-n,g=m+n;for(let S=0;S!==n;++S){const E=t[m+S];if(E!==t[_+S]||E!==t[g+S]){h=!0;break}}}if(h){if(l!==c){e[c]=e[l];const m=l*n,_=c*n;for(let g=0;g!==n;++g)t[_+g]=t[m+g]}++c}}if(o>0){e[c]=e[o];for(let l=o*n,h=c*n,d=0;d!==n;++d)t[h+d]=t[l+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Hc;class Or extends $n{constructor(e,t,n){super(e,t,n)}}Or.prototype.ValueTypeName="bool";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=Ro;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;class qd extends $n{}qd.prototype.ValueTypeName="color";class Uo extends $n{}Uo.prototype.ValueTypeName="number";class Mb extends Xo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,h=(n-t)/(r-t);let d=e*l;for(let p=d+l;d!==p;d+=4)hn.slerpFlat(o,0,c,d-l,c,d,h);return o}}class $o extends $n{InterpolantFactoryMethodLinear(e){return new Mb(this.times,this.values,this.getValueSize(),e)}}$o.prototype.ValueTypeName="quaternion";$o.prototype.InterpolantFactoryMethodSmooth=void 0;class Br extends $n{constructor(e,t,n){super(e,t,n)}}Br.prototype.ValueTypeName="string";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=Ro;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class Oo extends $n{}Oo.prototype.ValueTypeName="vector";class Ww{constructor(e="",t=-1,n=[],r=Yv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Tn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let c=0,l=n.length;c!==l;++c)t.push(bb(n[c]).scale(r));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,c=n.length;o!==c;++o)t.push($n.toJSON(n[o]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const o=t.length,c=[];for(let l=0;l<o;l++){let h=[],d=[];h.push((l+o-1)%o,l,(l+1)%o),d.push(0,1,0);const p=vb(h);h=Ih(h,1,p),d=Ih(d,1,p),!r&&h[0]===0&&(h.push(o),d.push(d[0])),c.push(new Uo(".morphTargetInfluences["+t[l].name+"]",h,d).scale(1/n))}return new this(e,-1,c)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},o=/^([\w-]*?)([\d]+)$/;for(let l=0,h=e.length;l<h;l++){const d=e[l],p=d.name.match(o);if(p&&p.length>1){const m=p[1];let _=r[m];_||(r[m]=_=[]),_.push(d)}}const c=[];for(const l in r)c.push(this.CreateFromMorphTargetSequence(l,r[l],t,n));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(m,_,g,S,E){if(g.length!==0){const x=[],y=[];Yd(g,x,y,S),x.length!==0&&E.push(new m(_,x,y))}},r=[],o=e.name||"default",c=e.fps||30,l=e.blendMode;let h=e.length||-1;const d=e.hierarchy||[];for(let m=0;m<d.length;m++){const _=d[m].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const g={};let S;for(S=0;S<_.length;S++)if(_[S].morphTargets)for(let E=0;E<_[S].morphTargets.length;E++)g[_[S].morphTargets[E]]=-1;for(const E in g){const x=[],y=[];for(let N=0;N!==_[S].morphTargets.length;++N){const P=_[S];x.push(P.time),y.push(P.morphTarget===E?1:0)}r.push(new Uo(".morphTargetInfluence["+E+"]",x,y))}h=g.length*c}else{const g=".bones["+t[m].name+"]";n(Oo,g+".position",_,"pos",r),n($o,g+".quaternion",_,"rot",r),n(Oo,g+".scale",_,"scl",r)}}return r.length===0?null:new this(o,h,r,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Eb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Uo;case"vector":case"vector2":case"vector3":case"vector4":return Oo;case"color":return qd;case"quaternion":return $o;case"bool":case"boolean":return Or;case"string":return Br}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function bb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Eb(i.type);if(i.times===void 0){const t=[],n=[];Yd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class wb{constructor(e,t,n){const r=this;let o=!1,c=0,l=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){l++,o===!1&&r.onStart!==void 0&&r.onStart(p,c,l),o=!0},this.itemEnd=function(p){c++,r.onProgress!==void 0&&r.onProgress(p,c,l),c===l&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,m){return d.push(p,m),this},this.removeHandler=function(p){const m=d.indexOf(p);return m!==-1&&d.splice(m,2),this},this.getHandler=function(p){for(let m=0,_=d.length;m<_;m+=2){const g=d[m],S=d[m+1];if(g.global&&(g.lastIndex=0),g.test(p))return S}return null}}}const Tb=new wb;class hs{constructor(e){this.manager=e!==void 0?e:Tb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}hs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ei={};class Ab extends Error{constructor(e,t){super(e),this.response=t}}class Xw extends hs{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=vi.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:n,onError:r});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:n,onError:r});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,h=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=ei[e],m=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),g=_?parseInt(_):0,S=g!==0;let E=0;const x=new ReadableStream({start(y){N();function N(){m.read().then(({done:P,value:A})=>{if(P)y.close();else{E+=A.byteLength;const V=new ProgressEvent("progress",{lengthComputable:S,loaded:E,total:g});for(let L=0,k=p.length;L<k;L++){const H=p[L];H.onProgress&&H.onProgress(V)}y.enqueue(A),N()}},P=>{y.error(P)})}}});return new Response(x)}else throw new Ab(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,l));case"json":return d.json();default:if(l===void 0)return d.text();{const m=/charset="?([^;"\s]*)"?/i.exec(l),_=m&&m[1]?m[1].toLowerCase():void 0,g=new TextDecoder(_);return d.arrayBuffer().then(S=>g.decode(S))}}}).then(d=>{vi.add(e,d);const p=ei[e];delete ei[e];for(let m=0,_=p.length;m<_;m++){const g=p[m];g.onLoad&&g.onLoad(d)}}).catch(d=>{const p=ei[e];if(p===void 0)throw this.manager.itemError(e),d;delete ei[e];for(let m=0,_=p.length;m<_;m++){const g=p[m];g.onError&&g.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Cb extends hs{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=vi.get(e);if(c!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0),c;const l=ss("img");function h(){p(),vi.add(e,this),t&&t(this),o.manager.itemEnd(e)}function d(m){p(),r&&r(m),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){l.removeEventListener("load",h,!1),l.removeEventListener("error",d,!1)}return l.addEventListener("load",h,!1),l.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(e),l.src=e,l}}class $w extends hs{constructor(e){super(e)}load(e,t,n,r){const o=new tn,c=new Cb(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(l){o.image=l,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class jo extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class jw extends jo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ja=new at,Nh=new z,Fh=new z;class _l{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hl,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nh),Fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fh),t.updateMatrixWorld(),ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rb extends _l{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Rr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Yw extends jo{constructor(e,t,n=0,r=Math.PI/3,o=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=r,this.penumbra=o,this.decay=c,this.map=null,this.shadow=new Rb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Uh=new at,qr=new z,Ya=new z;class Pb extends _l{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),qr.setFromMatrixPosition(e.matrixWorld),n.position.copy(qr),Ya.copy(n.position),Ya.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ya),n.updateMatrixWorld(),r.makeTranslation(-qr.x,-qr.y,-qr.z),Uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh)}}class qw extends jo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Pb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Db extends _l{constructor(){super(new Cd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zw extends jo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Db}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kw{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Jw extends hs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=vi.get(e);if(c!==void 0){if(o.manager.itemStart(e),c.then){c.then(d=>{t&&t(d),o.manager.itemEnd(e)}).catch(d=>{r&&r(d)});return}return setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0),c}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const h=fetch(e,l).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(d){return vi.add(e,d),t&&t(d),o.manager.itemEnd(e),d}).catch(function(d){r&&r(d),vi.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});vi.add(e,h),o.manager.itemStart(e)}}class Qw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Oh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Oh(){return performance.now()}const gl="\\[\\]\\.:\\/",Lb=new RegExp("["+gl+"]","g"),vl="[^"+gl+"]",Ib="[^"+gl.replace("\\.","")+"]",Nb=/((?:WC+[\/:])*)/.source.replace("WC",vl),Fb=/(WCOD+)?/.source.replace("WCOD",Ib),Ub=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),Ob=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),Bb=new RegExp("^"+Nb+Fb+Ub+Ob+"$"),kb=["material","materials","bones","map"];class zb{constructor(e,t,n){const r=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class At{constructor(e,t,n){this.path=t,this.parsedPath=n||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new At.Composite(e,t,n):new At(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lb,"")}static parseTrackName(e){const t=Bb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const o=n.nodeName.substring(r+1);kb.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(o){for(let c=0;c<o.length;c++){const l=o[c];if(l.name===t||l.uuid===t)return l;const h=n(l.children);if(h)return h}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let o=t.propertyIndex;if(e||(e=At.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===d){d=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const c=e[r];if(c===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=r;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=zb;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Bh=new at;class Zd{constructor(e,t,n=0,r=1/0){this.ray=new Nr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ul,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bh),this}intersectObject(e,t=!0,n=[]){return qc(e,this,n,t),n.sort(kh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)qc(e[r],this,n,t);return n.sort(kh),n}}function kh(i,e){return i.distance-e.distance}function qc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const o=i.children;for(let c=0,l=o.length;c<l;c++)qc(o[c],e,t,!0)}}class Zc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class eT extends No{constructor(e=10,t=10,n=4473924,r=8947848){n=new ot(n),r=new ot(r);const o=t/2,c=e/t,l=e/2,h=[],d=[];for(let _=0,g=0,S=-l;_<=t;_++,S+=c){h.push(-l,0,S,l,0,S),h.push(S,0,-l,S,0,l);const E=_===o?n:r;E.toArray(d,g),g+=3,E.toArray(d,g),g+=3,E.toArray(d,g),g+=3,E.toArray(d,g),g+=3}const p=new Zt;p.setAttribute("position",new Ut(h,3)),p.setAttribute("color",new Ut(d,3));const m=new os({vertexColors:!0,toneMapped:!1});super(p,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Hb extends No{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Zt;r.setAttribute("position",new Ut(t,3)),r.setAttribute("color",new Ut(n,3));const o=new os({vertexColors:!0,toneMapped:!1});super(r,o),this.type="AxesHelper"}setColors(e,t,n){const r=new ot,o=this.geometry.attributes.color.array;return r.set(e),r.toArray(o,0),r.toArray(o,3),r.set(t),r.toArray(o,6),r.toArray(o,9),r.set(n),r.toArray(o,12),r.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Vb extends ji{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);const zh={type:"change"},yl={type:"start"},Kd={type:"end"},go=new Nr,Hh=new _i,Gb=Math.cos(70*S0.DEG2RAD),Vt=new z,un=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qa=1e-6;class tT extends Vb{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vr.ROTATE,MIDDLE:vr.DOLLY,RIGHT:vr.PAN},this.touches={ONE:mr.ROTATE,TWO:mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new hn,this._lastTargetPosition=new z,this._quat=new hn().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zc,this._sphericalDelta=new Zc,this._scale=1,this._panOffset=new z,this._rotateStart=new Ae,this._rotateEnd=new Ae,this._rotateDelta=new Ae,this._panStart=new Ae,this._panEnd=new Ae,this._panDelta=new Ae,this._dollyStart=new Ae,this._dollyEnd=new Ae,this._dollyDelta=new Ae,this._dollyDirection=new z,this._mouse=new Ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Xb.bind(this),this._onPointerDown=Wb.bind(this),this._onPointerUp=$b.bind(this),this._onContextMenu=Qb.bind(this),this._onMouseWheel=qb.bind(this),this._onKeyDown=Zb.bind(this),this._onTouchStart=Kb.bind(this),this._onTouchMove=Jb.bind(this),this._onMouseDown=jb.bind(this),this._onMouseMove=Yb.bind(this),this._interceptControlDown=ew.bind(this),this._interceptControlUp=tw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zh),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;Vt.copy(t).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=un:n>Math.PI&&(n-=un),r<-Math.PI?r+=un:r>Math.PI&&(r-=un),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const l=Vt.length();c=this._clampDistance(l*this._scale);const h=l-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),o=!!h}else if(this.object.isOrthographicCamera){const l=new z(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=h!==this.object.zoom;const d=new z(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(l),this.object.updateMatrixWorld(),c=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(go.origin.copy(this.object.position),go.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(go.direction))<Gb?this.object.lookAt(this.target):(Hh.setFromNormalAndCoplanarPoint(this.object.up,this.target),go.intersectPlane(Hh,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>qa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qa||this._lastTargetPosition.distanceToSquared(this.target)>qa?(this.dispatchEvent(zh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Vt.setFromMatrixColumn(t,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,t){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(t,1):(Vt.setFromMatrixColumn(t,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Vt.copy(r).sub(this.target);let o=Vt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,o=t-n.top,c=n.width,l=n.height;this._mouse.x=r/c*2-1,this._mouse.y=-(o/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(n*n+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(c,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Wb(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Xb(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function $b(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kd),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function jb(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ct.DOLLY;break;case vr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}break;case vr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(yl)}function Yb(i){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function qb(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(i.preventDefault(),this.dispatchEvent(yl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Kd))}function Zb(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Kb(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ct.TOUCH_ROTATE;break;case mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ct.TOUCH_DOLLY_PAN;break;case mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(yl)}function Jb(i){switch(this._trackPointer(i),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ct.NONE}}function Qb(i){this.enabled!==!1&&i.preventDefault()}function ew(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tw(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Vh=new hn,vo=new An(0,0,0,"XYZ");function _n(i,e=4){return(Number.isFinite(i)?i:0).toFixed(e)}function nT(i){const{bodyId:e,model:t,data:n,hudEls:r}=i,o=n.xpos,c=n.xquat,l=e*3,h=e*4,d=[o[l],o[l+1],o[l+2]],p=[c[h],c[h+1],c[h+2],c[h+3]];Vh.set(p[1],p[2],p[3],p[0]),vo.setFromQuaternion(Vh,"XYZ");const m={x:vo.x*180/Math.PI,y:vo.y*180/Math.PI,z:vo.z*180/Math.PI};let _=[0,0,0];try{const S=t.jnt("odc_free"),E=S.dofadr,x=typeof E=="number"?E:Number(t.jnt_dofadr[S.id]??(E==null?void 0:E[0])??0),y=n.qvel;Number.isFinite(x)&&(_=[y[x],y[x+1],y[x+2]])}catch{}const g={body:"odc",joint:"odc_free",frame:"mujoco-z-up",pos:d,quat:p,eulerDeg:m,vel:_,t:performance.now()};return typeof window<"u"&&(window.__odcPose=g),r!=null&&r.root&&!r.root.hidden&&(r.pos.textContent=`${_n(d[0])}  ${_n(d[1])}  ${_n(d[2])}`,r.quat.textContent=`${_n(p[0])}  ${_n(p[1])}  ${_n(p[2])}  ${_n(p[3])}`,r.euler.textContent=`${_n(m.x,1)}°  ${_n(m.y,1)}°  ${_n(m.z,1)}°`,r.vel.textContent=`${_n(_[0])}  ${_n(_[1])}  ${_n(_[2])}`),g}function iT(i=.06){const e=new Hb(i);return e.name="odcBodyAxes",e.raycast=()=>{},e}const Za=180/Math.PI,Gh=Math.PI/180,Ka=new z,Wh=new Zc,nw=new z(0,1,0),Xh=new hn,$h=new hn;function Mn(i,e=3){return(Number.isFinite(i)?i:0).toFixed(e)}function Jd(i,e){const t=e.getAzimuthalAngle(),n=e.getPolarAngle(),r=e.getDistance(),o=Math.PI/2-n;return{position:[i.position.x,i.position.y,i.position.z],target:[e.target.x,e.target.y,e.target.z],azimuthDeg:t*Za,polarDeg:n*Za,elevationDeg:o*Za,distance:r}}function jh(i,e,t,n={}){if(!t)return!1;const r=n.padding??1.55,o=n.minDistance??.12,c=new Wn().setFromObject(t);if(c.isEmpty())return!1;const l=c.getCenter(new z),h=c.getSize(new z),d=Math.max(h.x,h.y,h.z,.04),p=i.fov*Math.PI/180;let m=d*r/(2*Math.tan(p/2));m=Math.max(o,m);const _=Jd(i,e);return Qd(i,e,{azimuthDeg:_.azimuthDeg,elevationDeg:_.elevationDeg,distance:m,target:[l.x,l.y,l.z]}),!0}function Qd(i,e,t){const[n,r,o]=t.target;e.target.set(n,r,o);const c=t.azimuthDeg*Gh;let l=t.elevationDeg*Gh;l=Math.max(-Math.PI/2+.001,Math.min(Math.PI/2-.001,l));const h=Math.PI/2-l,d=Math.max(1e-4,t.distance);Wh.set(d,h,c),Ka.setFromSpherical(Wh),Xh.setFromUnitVectors(i.up,nw),$h.copy(Xh).invert(),Ka.applyQuaternion($h),i.position.copy(e.target).add(Ka),i.lookAt(e.target),e.update()}function rT(i){const{camera:e,controls:t,view:n,parent:r=document.getElementById("app"),toggleButton:o=document.getElementById("btn-camera"),getFocusObject:c}=i;let l=document.getElementById("camera-hud");l||(l=document.createElement("aside"),l.id="camera-hud",l.setAttribute("aria-label","Camera view angle"),l.innerHTML=`
      <header class="panel-header">
        <strong>Camera</strong>
        <span class="frame-tag">Z-up · view angle</span>
      </header>
      <div class="cam-grid">
        <label>az ° <input data-k="azimuthDeg" type="number" step="1" /></label>
        <label>el ° <input data-k="elevationDeg" type="number" step="1" /></label>
        <label>dist m <input data-k="distance" type="number" step="0.01" min="0.01" /></label>
        <label>tgt x <input data-k="tx" type="number" step="0.01" /></label>
        <label>tgt y <input data-k="ty" type="number" step="0.01" /></label>
        <label>tgt z <input data-k="tz" type="number" step="0.01" /></label>
      </div>
      <div class="cam-actions">
        <button type="button" data-act="apply">Apply</button>
        <button type="button" data-act="focus">Focus selected</button>
        <button type="button" data-act="copy">Copy JSON</button>
      </div>
      <dl class="cam-live">
        <div><dt>pos</dt><dd data-live="pos">—</dd></div>
        <div><dt>az / el / dist</dt><dd data-live="aed">—</dd></div>
      </dl>
      <p class="pose-hint">Also <code>window.__cameraPose</code> each frame</p>
    `,(r||document.body).appendChild(l));const h={azimuthDeg:l.querySelector('input[data-k="azimuthDeg"]'),elevationDeg:l.querySelector('input[data-k="elevationDeg"]'),distance:l.querySelector('input[data-k="distance"]'),tx:l.querySelector('input[data-k="tx"]'),ty:l.querySelector('input[data-k="ty"]'),tz:l.querySelector('input[data-k="tz"]')},d=l.querySelector('[data-live="pos"]'),p=l.querySelector('[data-live="aed"]');let m=null;l.addEventListener("focusin",E=>{E.target instanceof HTMLInputElement&&(m=E.target)}),l.addEventListener("focusout",()=>{m=null});function _(){const E=Jd(e,t),x={view:n,frame:"mujoco-z-up",...E,t:performance.now()};return typeof window<"u"&&(window.__cameraPose=x),d.textContent=`${Mn(E.position[0])}  ${Mn(E.position[1])}  ${Mn(E.position[2])}`,p.textContent=`${Mn(E.azimuthDeg,1)}°  ${Mn(E.elevationDeg,1)}°  ${Mn(E.distance,3)} m`,m||(h.azimuthDeg.value=Mn(E.azimuthDeg,1),h.elevationDeg.value=Mn(E.elevationDeg,1),h.distance.value=Mn(E.distance,3),h.tx.value=Mn(E.target[0],3),h.ty.value=Mn(E.target[1],3),h.tz.value=Mn(E.target[2],3)),x}function g(){Qd(e,t,{azimuthDeg:Number(h.azimuthDeg.value),elevationDeg:Number(h.elevationDeg.value),distance:Number(h.distance.value),target:[Number(h.tx.value),Number(h.ty.value),Number(h.tz.value)]}),_()}l.querySelector('[data-act="apply"]').addEventListener("click",g);const S=l.querySelector('[data-act="focus"]');return S==null||S.addEventListener("click",()=>{jh(e,t,(c==null?void 0:c())??null),_()}),l.querySelector('[data-act="copy"]').addEventListener("click",async()=>{const E=_(),x=JSON.stringify(E,null,2);try{await navigator.clipboard.writeText(x)}catch{console.log("__cameraPose",E)}}),l.addEventListener("keydown",E=>{E.key==="Enter"&&E.target instanceof HTMLInputElement&&(E.preventDefault(),g())}),o&&(o.addEventListener("click",()=>{const E=!l.hidden;l.hidden=E,o.setAttribute("aria-pressed",E?"false":"true")}),o.setAttribute("aria-pressed",l.hidden?"false":"true")),_(),{update:_,applyFromInputs:g,focusSelected:()=>{const E=jh(e,t,(c==null?void 0:c())??null);return E&&_(),E},root:l}}const iw="(max-width: 720px)";function sT(i){var ct;const{sections:e,focusSelected:t,onReorientModeChange:n,onPartnerModeChange:r,poseToggle:o=document.getElementById("btn-pose"),cameraToggle:c=document.getElementById("btn-camera"),defaultSection:l}=i,h=e.filter(X=>X.panel instanceof HTMLElement);if(!h.length)return{isMobile:()=>!1,openSheet(){},closeSheet(){},setSection(){},isReorientMode:()=>!1,isPartnerMode:()=>!1,setReorientMode(){},setPartnerMode(){},dispose(){}};const d=window.matchMedia(iw);let p=!1,m=l&&h.some(X=>X.id===l)?l:h[0].id,_=!1,g=!1,S=!1;const E=new Map;for(const X of h)E.set(X.panel,{parent:X.panel.parentNode,next:X.panel.nextSibling});const x=document.createElement("button");x.type="button",x.id="btn-mobile-controls",x.className="mobile-fab",x.setAttribute("aria-controls","mobile-sheet"),x.setAttribute("aria-expanded","false"),x.hidden=!0,x.textContent="Controls";const y=document.createElement("button");y.type="button",y.className="mobile-sheet-backdrop",y.setAttribute("aria-label","Close controls"),y.hidden=!0;const N=document.createElement("div");N.id="mobile-sheet",N.className="mobile-sheet",N.setAttribute("role","dialog"),N.setAttribute("aria-modal","true"),N.setAttribute("aria-label","Lab controls"),N.hidden=!0;const P=document.createElement("div");P.className="mobile-sheet-handle",P.setAttribute("aria-hidden","true");const A=document.createElement("div");A.className="mobile-sheet-head";const V=document.createElement("strong");V.className="mobile-sheet-title",V.textContent="Controls";const L=document.createElement("button");L.type="button",L.className="mobile-sheet-close",L.setAttribute("aria-label","Close controls"),L.textContent="Done",A.append(V,L);const k=document.createElement("div");k.className="mobile-sheet-tabs",k.setAttribute("role","tablist"),k.setAttribute("aria-label","Control panels");const H=new Map;for(const X of h){const he=document.createElement("button");he.type="button",he.className="mobile-sheet-tab",he.setAttribute("role","tab"),he.dataset.section=X.id,he.id=`mobile-tab-${X.id}`,he.setAttribute("aria-controls",X.panel.id||`panel-${X.id}`),he.textContent=X.label,he.addEventListener("click",()=>oe(X.id)),k.appendChild(he),H.set(X.id,he)}const I=document.createElement("div");I.className="mobile-sheet-tools";const b=document.createElement("button");b.type="button",b.id="btn-focus-selected",b.textContent="Focus selected",b.title="Frame the camera on the selected object",b.addEventListener("click",()=>{((t==null?void 0:t())??!1)||(b.classList.add("is-flash"),window.setTimeout(()=>b.classList.remove("is-flash"),400))});const O=document.createElement("button");O.type="button",O.id="btn-reorient-mode",O.setAttribute("aria-pressed","false"),O.textContent="Reorient drag",O.title="On phone: enable drag-to-reorient (off by default so orbit/pan/zoom win)",O.addEventListener("click",()=>se(!_));const q=document.createElement("button");q.type="button",q.id="btn-partner-mode",q.setAttribute("aria-pressed","false"),q.textContent="Partner tap",q.title="Next tap sets Attach partner (phone substitute for Shift+click)",q.hidden=!h.some(X=>X.id==="selection"),q.addEventListener("click",()=>Ce(!g));const Z=document.querySelector("#topbar .nav-link");if(Z){const X=document.createElement("a");X.className="mobile-sheet-nav",X.href=Z.getAttribute("href")||"#",X.textContent=Z.textContent.trim()||"Other view",I.append(X)}I.append(b,O,q);const Q=document.createElement("p");Q.className="mobile-sheet-hint",Q.textContent="Scene first — one finger orbit, two-finger pan/zoom. Use sliders to orient; turn on Reorient drag only when needed.";const ne=document.createElement("div");ne.className="mobile-sheet-body",ne.id="mobile-sheet-body",N.append(P,A,k,I,Q,ne),(document.getElementById("app")||document.body).append(x,y,N);function me(){return d.matches}function se(X){_=!!X,document.body.classList.toggle("reorient-mode",_),O.setAttribute("aria-pressed",_?"true":"false"),n==null||n(_)}function Ce(X){g=!!X,document.body.classList.toggle("partner-mode",g),q.setAttribute("aria-pressed",g?"true":"false"),r==null||r(g)}function Le(){if(!S){for(const X of h)ne.appendChild(X.panel),X.panel.classList.add("mobile-sheet-panel");S=!0}}function Oe(){if(S){for(const X of h){const he=E.get(X.panel);X.panel.classList.remove("mobile-sheet-panel","is-mobile-active"),X.panel.removeAttribute("aria-hidden"),he!=null&&he.parent&&(he.next&&he.next.parentNode===he.parent?he.parent.insertBefore(X.panel,he.next):he.parent.appendChild(X.panel))}S=!1}}function Ke(){for(const X of h){const he=X.panel,B=me()&&p&&X.id===m;he.classList.toggle("is-mobile-active",B),he.setAttribute("data-mobile-section",X.id),me()&&(B?(X.id!=="selection"&&(he.hidden=!1),he.setAttribute("aria-hidden",he.hidden?"true":"false")):he.setAttribute("aria-hidden","true"));const $e=H.get(X.id);$e&&($e.setAttribute("aria-selected",B?"true":"false"),$e.classList.toggle("is-active",B))}}function ht(){const X=me();document.body.classList.toggle("mobile-chrome",X),x.hidden=!X,X?(Le(),p||(N.hidden=!0,y.hidden=!0,x.setAttribute("aria-expanded","false"),document.body.classList.remove("sheet-open"),document.body.removeAttribute("data-sheet"))):(p=!1,N.hidden=!0,y.hidden=!0,x.setAttribute("aria-expanded","false"),document.body.classList.remove("sheet-open"),document.body.removeAttribute("data-sheet"),Oe()),Ke()}function oe(X){me()&&(X&&h.some(he=>he.id===X)&&(m=X),Le(),p=!0,N.hidden=!1,y.hidden=!1,x.setAttribute("aria-expanded","true"),document.body.classList.add("sheet-open"),document.body.dataset.sheet=m,o&&m==="pose"&&o.setAttribute("aria-pressed","true"),c&&m==="camera"&&c.setAttribute("aria-pressed","true"),Ke())}function ve(){p=!1,N.hidden=!0,y.hidden=!0,x.setAttribute("aria-expanded","false"),document.body.classList.remove("sheet-open"),document.body.removeAttribute("data-sheet"),Ke()}function Ue(X){p?oe(X):m=X}x.addEventListener("click",()=>{p?ve():oe(m)}),L.addEventListener("click",()=>ve()),y.addEventListener("click",()=>ve()),o==null||o.addEventListener("click",X=>{me()&&(X.preventDefault(),X.stopImmediatePropagation(),p&&m==="pose"?ve():oe("pose"))},!0),c==null||c.addEventListener("click",X=>{me()&&(X.preventDefault(),X.stopImmediatePropagation(),p&&m==="camera"?ve():oe("camera"))},!0);function be(){if(ht(),me()){ve();const X=document.getElementById("pose-hud"),he=document.getElementById("camera-hud");X&&(X.hidden=!1),he&&(he.hidden=!1),o==null||o.setAttribute("aria-pressed","false"),c==null||c.setAttribute("aria-pressed","false")}}ht(),me()&&(ve(),o==null||o.setAttribute("aria-pressed","false"),c==null||c.setAttribute("aria-pressed","false")),d.addEventListener("change",be);const pe=(ct=h.find(X=>X.id==="selection"))==null?void 0:ct.panel,Me=pe&&new MutationObserver(()=>{const X=H.get("selection");X&&(X.classList.toggle("has-selection",!pe.hidden),me()&&p&&m==="selection"&&Ke())});pe&&Me&&Me.observe(pe,{attributes:!0,attributeFilter:["hidden"]});function Je(){Ce(!1)}return document.body.addEventListener("lab-partner-consumed",Je),{isMobile:me,openSheet:oe,closeSheet:ve,setSection:Ue,isReorientMode:()=>_,isPartnerMode:()=>g,setReorientMode:se,setPartnerMode:Ce,dispose:()=>{d.removeEventListener("change",be),document.body.removeEventListener("lab-partner-consumed",Je),Me==null||Me.disconnect(),Oe(),x.remove(),y.remove(),N.remove(),document.body.classList.remove("mobile-chrome","sheet-open","reorient-mode","partner-mode"),document.body.removeAttribute("data-sheet")}}}function rw(i,e){return i.pointerType==="touch"||i.pointerType==="pen"?!!document.body.classList.contains("reorient-mode"):!0}const ef="physical-lab-panel-pos-v1",fr=8;function Yh(){try{const i=localStorage.getItem(ef);if(!i)return{};const e=JSON.parse(i);return e&&typeof e=="object"?e:{}}catch{return{}}}function sw(i){try{localStorage.setItem(ef,JSON.stringify(i))}catch{}}function ow(i,e,t){const n=i.getBoundingClientRect(),r=n.width||i.offsetWidth||0,o=n.height||i.offsetHeight||0,c=Math.max(fr,window.innerWidth-r-fr),l=Math.max(fr,window.innerHeight-o-fr);return{left:Math.min(Math.max(fr,e),c),top:Math.min(Math.max(fr,t),l)}}function yo(i,e,t){const n=ow(i,e,t);return i.classList.add("is-panel-dragged"),i.style.position="fixed",i.style.left=`${n.left}px`,i.style.top=`${n.top}px`,i.style.right="auto",i.style.bottom="auto",i.style.transform="none",n}function aw(i){const e=i.querySelector(":scope > header");return e&&e.classList.add("panel-header"),e}function oT(i={}){const{panels:e=[],isMobile:t=()=>document.body.classList.contains("mobile-chrome")||window.matchMedia("(max-width: 720px)").matches}=i,n=new Set;let r=0;function o(g){const S=g.id;if(!S)return;const E=g.getBoundingClientRect(),x=Yh();x[S]={left:E.left,top:E.top},sw(x)}function c(g){if(t())return;const S=g.id;if(!S)return;const E=Yh()[S];!E||typeof E.left!="number"||typeof E.top!="number"||yo(g,E.left,E.top)}function l(g){if(!(g instanceof HTMLElement)||n.has(g))return;const S=aw(g);S&&(n.add(g),requestAnimationFrame(()=>c(g)),S.addEventListener("pointerdown",E=>{if(t()||E.button!=null&&E.button!==0||E.target instanceof Element&&E.target.closest("button, a, input, select, textarea, label"))return;const x=E.clientX,y=E.clientY,N=g.getBoundingClientRect(),P=N.left,A=N.top;yo(g,P,A),g.classList.add("is-panel-dragging"),r+=1,document.body.classList.add("is-dragging-panel");const V=E.pointerId;try{S.setPointerCapture(V)}catch{}E.preventDefault();function L(H){if(H.pointerId!==V)return;const I=P+(H.clientX-x),b=A+(H.clientY-y);yo(g,I,b)}function k(H){if(H.pointerId===V){S.removeEventListener("pointermove",L),S.removeEventListener("pointerup",k),S.removeEventListener("pointercancel",k);try{S.releasePointerCapture(V)}catch{}g.classList.remove("is-panel-dragging"),r=Math.max(0,r-1),r===0&&document.body.classList.remove("is-dragging-panel"),o(g)}}S.addEventListener("pointermove",L),S.addEventListener("pointerup",k),S.addEventListener("pointercancel",k)}))}function h(){if(!t())for(const g of n){if(!g.classList.contains("is-panel-dragged")||g.hidden)continue;const S=g.getBoundingClientRect();yo(g,S.left,S.top),o(g)}}function d(){if(!t())for(const g of n)c(g)}for(const g of e)g&&l(g);const p=document.getElementById("camera-hud");p&&l(p),window.addEventListener("resize",h);const m=window.matchMedia("(max-width: 720px)"),_=()=>{m.matches||requestAnimationFrame(d)};return m.addEventListener("change",_),{bindPanel:l,restoreAll:d,reclampAll:h,dispose:()=>{window.removeEventListener("resize",h),m.removeEventListener("change",_),document.body.classList.remove("is-dragging-panel")}}}async function qh(i){const e=await fetch(i);if(!e.ok)throw new Error(`Failed to fetch ${i} (${e.status})`);return e.text()}function cw(i,e,t={}){const n=new i.MjVFS,r=new TextEncoder;for(const[c,l]of Object.entries(t))n.addBuffer(c,r.encode(l));const o=i.MjModel.from_xml_string(e,n);if(!o)throw new Error("MjModel.from_xml_string failed");return o}async function aT(i,e,t={}){const n=await qh(e),r={};return await Promise.all(Object.entries(t).map(async([o,c])=>{r[o]=await qh(c)})),cw(i,n,r)}const Zh="/physical/models/sg90/cad/GrabCAD_SG90_body.step",Zr=.0155,Gi=21,Bo=360/Gi;let vn=0;const lw={linearUnit:"millimeter",linearDeflectionType:"absolute_value",linearDeflection:.06,angularDeflection:.3},Dr={cross:{id:"cross",label:"Cross (4 pads)",blurb:"GrabCAD cross — default",kind:"step",step:"/physical/models/sg90/cad/GrabCAD_SG90_cross_horn.step",align:"cross",default:!0},single:{id:"single",label:"1-arm",blurb:"Fewer pads — FreeCAD/GrabCAD 1-arm",kind:"step",step:"/physical/models/sg90/cad/SG90-1-arm-horn.step",align:"single"},short:{id:"short",label:"Short",blurb:"Short kit arm (~14 mm) — parametric",kind:"parametric",parametric:"short"},long:{id:"long",label:"Long / wide",blurb:"Long kit arm (~30 mm) — parametric",kind:"parametric",parametric:"long"},double:{id:"double",label:"2-arm",blurb:"Straight bar through hub (kit) — parametric",kind:"parametric",parametric:"double"}};function uw(){var i;return((i=Object.values(Dr).find(e=>e.default))==null?void 0:i.id)||"cross"}function Kc(i){return i&&Dr[i]?i:i==="one_arm"||i==="1arm"||i==="one-arm"?"single":uw()}function Yo(i){const e=Math.trunc(Number(i));return Number.isFinite(e)?(e%Gi+Gi)%Gi:0}function Er(i=vn){return Yo(i)*Bo}function ko(i=vn){return Er(i)*Math.PI/180}function cT(i){const e=Yo(i);return`${e} (${Er(e).toFixed(1)}°)`}function lT(){return vn}function hw(i){if(!i)return;const e=i.getObjectByName("sg90CadHorn");e&&(e.rotation.z=ko())}function uT(i,e){var n;vn=Yo(i);const t=e||tf||(typeof window<"u"?(n=window.__sg90Roots)==null?void 0:n.rotorRoot:null);return hw(t),typeof window<"u"&&window.__sg90Cad&&(window.__sg90Cad.hornMountIndex=vn,window.__sg90Cad.hornMountOffsetDeg=Er(),window.__sg90Cad.hornMountOffsetRad=ko(),window.__sg90Cad.splineTeeth=Gi,window.__sg90Cad.splineStepDeg=Bo),vn}let Ja=null,Bi=null,Jc=null,tf=null,pr=null,Qc=null,el=null;async function dw(){return Ja||(Ja=(async()=>{let i=null;try{const e=await id(()=>import("./occt-import-js-DCqKp0QJ.js").then(t=>t.o),__vite__mapDeps([0,1]));i=e.default||e.occtimportjs||e,i&&typeof i!="function"&&typeof i.default=="function"&&(i=i.default)}catch{}return typeof i!="function"&&typeof window<"u"&&typeof window.occtimportjs=="function"&&(i=window.occtimportjs),typeof i!="function"&&(i=await new Promise((e,t)=>{const n=document.createElement("script");n.src="/physical/vendor/occt-import-js/occt-import-js.js",n.async=!0,n.onload=()=>{const r=window.occtimportjs;typeof r=="function"?e(r):t(new Error("occtimportjs global missing after script load"))},n.onerror=()=>t(new Error("failed to load /vendor/occt-import-js/occt-import-js.js")),document.head.appendChild(n)})),i({locateFile:e=>e.endsWith(".wasm")?"/physical/vendor/occt-import-js/occt-import-js.wasm":e})})()),Ja}function fw(i){var c,l;const e=i.attributes.position.array,t=(c=i.attributes.normal)==null?void 0:c.array,n=(l=i.index)==null?void 0:l.array,r=new Float32Array(e.length);for(let h=0;h<e.length;h++)r[h]=e[h]*.001;const o=new Zt;return o.setAttribute("position",new qt(r,3)),t&&t.length===e.length&&o.setAttribute("normal",new qt(new Float32Array(t),3)),n!=null&&n.length&&o.setIndex(Array.from(n)),o.computeVertexNormals(),o.computeBoundingBox(),o}function nf(i){if(i.length===1)return i[0];let e=0,t=0;for(const p of i)e+=p.attributes.position.count,t+=p.index?p.index.count:p.attributes.position.count;const n=new Float32Array(e*3),r=new Float32Array(e*3),o=new Uint32Array(t);let c=0,l=0,h=0;for(const p of i){n.set(p.attributes.position.array,c),p.attributes.normal&&r.set(p.attributes.normal.array,c);const m=p.attributes.position.count;if(p.index)for(let _=0;_<p.index.count;_++)o[l++]=p.index.getX(_)+h;else for(let _=0;_<m;_++)o[l++]=h+_;c+=p.attributes.position.array.length,h+=m}const d=new Zt;return d.setAttribute("position",new qt(n,3)),d.setAttribute("normal",new qt(r,3)),d.setIndex(new qt(o,1)),d.computeBoundingBox(),d}async function rf(i,e){var o;const t=await fetch(e);if(!t.ok)throw new Error(`fetch ${e} ${t.status}`);const n=new Uint8Array(await t.arrayBuffer()),r=i.ReadStepFile(n,lw);if(!(r!=null&&r.success)||!((o=r.meshes)!=null&&o.length))throw new Error(`STEP parse failed: ${e}`);return nf(r.meshes.map(fw))}function pw(i){i.rotateX(Math.PI/2),i.computeBoundingBox(),i.translate(0,0,-i.boundingBox.min.z),i.computeBoundingBox();const e=i.boundingBox.max.z,t=i.attributes.position;let n=0,r=0,o=0;for(let h=0;h<t.count;h++)t.getZ(h)>e-.003&&(n+=t.getX(h),r+=t.getY(h),o+=1);o&&i.translate(-n/o,-r/o,0),i.computeBoundingBox();const c=.003;let l=-1/0;for(let h=0;h<t.count;h++){if(Math.hypot(t.getX(h),t.getY(h))<c)continue;const p=t.getZ(h);p>l&&(l=p)}return Number.isFinite(l)||(l=i.boundingBox.max.z),l}function mw(i){i.computeBoundingBox();const e=i.attributes.position,t=.004;let n=1/0;for(let r=0;r<e.count;r++){if(Math.hypot(e.getX(r),e.getY(r))<t)continue;const c=e.getZ(r);c<n&&(n=c)}Number.isFinite(n)||(n=i.boundingBox.min.z),i.translate(0,0,-n),i.computeBoundingBox()}function _w(i){i.computeBoundingBox();const e=i.attributes.position,t=72,n=new Float64Array(t);for(let h=0;h<e.count;h++){const d=e.getX(h),p=e.getY(h),m=Math.hypot(d,p);if(m<1e-9)continue;let _=Math.floor((Math.atan2(p,d)+Math.PI)/(2*Math.PI)*t);_<0&&(_=0),_>=t&&(_=t-1),m>n[_]&&(n[_]=m)}let r=0,o=-1;for(let h=0;h<t;h++)n[h]>o&&(o=n[h],r=h);const c=(r+.5)/t*2*Math.PI-Math.PI;i.rotateZ(-c),i.computeBoundingBox();const l=i.boundingBox;Math.abs(l.min.x)>l.max.x+1e-9&&(i.rotateZ(Math.PI),i.computeBoundingBox())}function sf(i){_w(i),mw(i)}function gw(i){i.rotateX(Math.PI/2),i.computeBoundingBox();const e=i.boundingBox;i.translate(-.5*(e.min.x+e.max.x),-.5*(e.min.y+e.max.y),-e.min.z),sf(i)}function vw(i){i.computeBoundingBox();let e=i.boundingBox;const t=[e.max.x-e.min.x,e.max.y-e.min.y,e.max.z-e.min.z],n=t.indexOf(Math.min(...t));n===0?i.rotateY(-Math.PI/2):n===1&&i.rotateX(Math.PI/2),i.computeBoundingBox(),e=i.boundingBox,i.translate(0,0,-e.min.z),i.computeBoundingBox(),e=i.boundingBox,i.translate(0,-.5*(e.min.y+e.max.y),0),i.computeBoundingBox(),e=i.boundingBox;const r=i.attributes.position;function o(p,m){let _=0,g=0,S=0,E=0,x=0;for(let y=0;y<r.count;y++){const N=r.getX(y);if(N<p||N>m)continue;const P=r.getY(y),A=r.getZ(y);_+=N,g+=P,S+=A,x+=P*P,E+=1}return E?{x:_/E,y:g/E,n:E,rms:Math.sqrt(x/E),meanZ:S/E}:{x:0,y:0,n:0,rms:1,meanZ:0}}const c=e.max.x-e.min.x,l=o(e.min.x,e.min.x+.28*c),h=o(e.max.x-.28*c,e.max.x),d=l.meanZ>=h.meanZ?l:h;i.translate(-d.x,-d.y,0),i.rotateX(Math.PI),sf(i)}function yw(i){let c,l,h,d,p;i==="short"?(c=.012,l=.0034,h=.0026,d=2,p=!1):i==="long"?(c=.03,l=.0034,h=.0022,d=7,p=!1):(c=.017,l=.0032,h=.0022,d=4,p=!0);const m=new Ao;m.absarc(0,0,.0035,0,Math.PI*2,!1);const _=new Fo;_.absarc(0,0,.00145,0,Math.PI*2,!0),m.holes.push(_);function g(P,A){for(let L=0;L<d;L++){const k=A*(.0057+L*.002);if(Math.abs(k)>c-.0015)break;const H=new Fo;H.absarc(k,0,55e-5,0,Math.PI*2,!0),P.holes.push(H)}}function S(){const A=new Ao;return A.moveTo(.001225,l),A.lineTo(c,h),A.absarc(c,0,h,Math.PI/2,-Math.PI/2,!0),A.lineTo(.001225,-l),A.lineTo(.001225,l),A.closePath(),g(A,1),A}function E(){const P=new Ao,A=.0035*.25;return P.moveTo(-c,h),P.lineTo(-A,l),P.lineTo(A,l),P.lineTo(c,h),P.absarc(c,0,h,Math.PI/2,-Math.PI/2,!0),P.lineTo(A,-l),P.lineTo(-A,-l),P.lineTo(-c,-h),P.absarc(-c,0,h,-Math.PI/2,Math.PI/2,!0),P.closePath(),g(P,1),g(P,-1),P}const x=[m];p?x.push(E()):x.push(S());const y=x.map(P=>{const A=new ml(P,{depth:.0024,bevelEnabled:!1,curveSegments:28});return A.computeVertexNormals(),A}),N=nf(y);for(const P of y)P!==N&&P.dispose();return N.computeBoundingBox(),N}function Kh(i){[...i.children].forEach(e=>{var t,n;e.isMesh&&(i.remove(e),e.geometry&&e.geometry!==Bi&&((n=(t=e.geometry).dispose)==null||n.call(t)))})}function xw(){Qc||(Qc=new Yc({color:2781050,roughness:.4,metalness:.15})),el||(el=new Yc({color:15133422,roughness:.35,metalness:.08}))}async function Sw(i,e){const t=Dr[e]||Dr.cross;if(t.kind==="parametric")return{geo:yw(t.parametric),provenance:`parametric:${t.parametric}`};if(!i)throw new Error("OCCT required for STEP horn");const n=await rf(i,t.step);return t.align==="single"?vw(n):gw(n),{geo:n,provenance:t.step}}async function Jh(i,e,t={}){var r;Jc=i,tf=e;const n=Kc(t.hornId);t.hornMountIndex!==void 0&&(vn=Yo(t.hornMountIndex));try{xw();const c=!Bi||((r=Dr[n])==null?void 0:r.kind)==="step"?await dw():null;if(!Bi){const m=await rf(c,Zh);pr=pw(m),Bi=m}const{geo:l,provenance:h}=await Sw(c,n);Kh(i),Kh(e);const d=new en(Bi,Qc);d.name="sg90CadBody",d.castShadow=!0,d.receiveShadow=!0,d.position.set(0,0,Zr-pr),i.add(d);const p=new en(l,el);if(p.name="sg90CadHorn",p.castShadow=!0,p.receiveShadow=!0,p.position.set(0,0,0),p.rotation.z=ko(),e.add(p),typeof window<"u"){Bi.computeBoundingBox(),l.computeBoundingBox();const m=Zr-pr,_=Bi.boundingBox.max.z,g=l.attributes.position;let S=1/0,E=1/0;for(let A=0;A<g.count;A++){const V=Math.hypot(g.getX(A),g.getY(A)),L=g.getZ(A);V>=.004?S=Math.min(S,L):E=Math.min(E,L)}const x=p.position.z,y=m+pr,N=Zr+x+S,P=Zr+x+E;window.__sg90Cad={ok:!0,hornId:n,horn:Dr[n],provenance:h,body:Zh,shaftZ:pr,tipZ:_,rotorZ:Zr,bodyOffsetZ:m,flangeMinZ:S,collarMinZ:E,gapFlangeToBoss_mm:(N-y)*1e3,gapCollarToBoss_mm:(P-y)*1e3,hornMountIndex:vn,hornMountOffsetDeg:Er(),hornMountOffsetRad:ko(),splineTeeth:Gi,splineStepDeg:Bo},window.__sg90Roots={housingRoot:i,rotorRoot:e,bodyMesh:d,hornMesh:p}}return{ok:!0,hornId:n,shaftZ:pr,hornMountIndex:vn,hornMountOffsetDeg:Er()}}catch(o){const c=String((o==null?void 0:o.message)||o);return console.warn("SG90 STEP CAD load failed; keeping box proxies",o),typeof window<"u"&&(window.__sg90Cad={ok:!1,error:c,hornId:n,hornMountIndex:vn,hornMountOffsetDeg:Er(),splineTeeth:Gi,splineStepDeg:Bo}),{ok:!1,error:c,hornId:n,hornMountIndex:vn}}}async function hT(i,e,t){if(t!==void 0)return Jh(i,e,{hornId:Kc(t),hornMountIndex:vn});if(!Jc)throw new Error("setSg90Horn(rotor, id): call attachSg90CadMeshes first");return Jh(Jc,i,{hornId:Kc(e),hornMountIndex:vn})}const Qa=Math.PI/180;let si={yaw:0,pitch:0,roll:0};const Qh=new hn,ed=new hn,Kr=new hn,td=new An(0,0,0,"ZYX");function ec(i,e=-180,t=180){const n=Number(i);return Number.isFinite(n)?Math.max(e,Math.min(t,n)):0}function xl(){return{...si}}function dT(i={}){return i.yaw!==void 0&&(si.yaw=ec(i.yaw)),i.pitch!==void 0&&(si.pitch=ec(i.pitch)),i.roll!==void 0&&(si.roll=ec(i.roll)),Lr(),xl()}function fT(){return si={yaw:0,pitch:0,roll:0},Lr(),xl()}function Mw(i=si){const e=Math.round(i.yaw),t=Math.round(i.pitch),n=Math.round(i.roll);return`Y${e} P${t} R${n}`}function of(i,e=si){return ed.set(i[1],i[2],i[3],i[0]),td.set((e.roll||0)*Qa,(e.pitch||0)*Qa,(e.yaw||0)*Qa,"ZYX"),Qh.setFromEuler(td),Kr.copy(Qh).multiply(ed),[Kr.w,Kr.x,Kr.y,Kr.z]}function pT(i,e){const t=i.body_quat,n=e*4;return[t[n],t[n+1],t[n+2],t[n+3]]}function mT(i,e){const t=i.qpos;return{pos:[t[e],t[e+1],t[e+2]],wxyz:[t[e+3],t[e+4],t[e+5],t[e+6]]}}function _T({mujoco:i,model:e,data:t,bodyId:n,baseWxyz:r}){if(n<0||!e||!t)return;const o=of(r,si),c=e.body_quat,l=n*4;c[l]=o[0],c[l+1]=o[1],c[l+2]=o[2],c[l+3]=o[3],i.mj_forward(e,t),Lr()}function gT({mujoco:i,model:e,data:t,freeQposAdr:n,baseWxyz:r,pos:o,freeDofAdr:c=-1,initialQpos:l=null,running:h=!1,force:d=!1,orient:p=null}){if(n<0||!e||!t)return!1;if(h&&!d)return Lr({deferred:!0}),!1;const _=of(r,p||si),g=t.qpos;if(o&&(g[n]=o[0],g[n+1]=o[1],g[n+2]=o[2]),g[n+3]=_[0],g[n+4]=_[1],g[n+5]=_[2],g[n+6]=_[3],c>=0)for(let S=0;S<6;S++)t.qvel[c+S]=0;return l&&(o&&(l[n]=o[0],l[n+1]=o[1],l[n+2]=o[2]),l[n+3]=_[0],l[n+4]=_[1],l[n+5]=_[2],l[n+6]=_[3]),i.mj_forward(e,t),Lr({deferred:!1}),!0}function Lr(i={}){if(typeof window>"u")return;const e=xl();window.__sg90MotorOrientation={yawDeg:e.yaw,pitchDeg:e.pitch,rollDeg:e.roll,label:Mw(e),mode:"edit-while-paused / apply-on-reset (lab freejoint)",layers:"housing: world*motor*base; horn: world*motor*base*hinge*mount",...i,t:performance.now()}}Lr();const Ew=4114687,bw=16756800;function vT(i,e){i.userData.labObject={...e},i.traverse(t=>{t.isMesh&&(t.userData.labObject=i.userData.labObject)})}function ww(i){var e;if(i.geometry&&!((e=i.userData)!=null&&e.shareGeometry)&&i.geometry.dispose(),i.material)if(Array.isArray(i.material))for(const t of i.material)t.dispose();else i.material.dispose()}function Tw(i,e,t){const n=[];if(i.traverse(r=>{var c;if(!r.isMesh||!r.geometry||r.name==="pickProxy"||!r.visible||(c=r.userData)!=null&&c.labSelectionOutline)return;const o=Array.isArray(r.material)?r.material[0]:r.material;o&&o.opacity===0||n.push(r)}),n.length>0){const r=new Wn,o=new at,c=new at;i.updateWorldMatrix(!0,!0),o.copy(i.matrixWorld).invert();for(const l of n){l.geometry.boundingBox||l.geometry.computeBoundingBox();const h=l.geometry.boundingBox.clone();l.updateWorldMatrix(!0,!1),c.copy(o).multiply(l.matrixWorld),h.applyMatrix4(c),r.union(h)}if(!r.isEmpty()){const l=new z,h=new z;r.getSize(l),r.getCenter(h),l.multiplyScalar(1.05);const d=new Fr(l.x||.001,l.y||.001,l.z||.001),p=new Rh(d);d.dispose();const m=new No(p,new os({color:e,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1,toneMapped:!1}));m.position.copy(h),m.renderOrder=1e3,m.raycast=()=>{},m.userData.labSelectionOutline=!0,i.add(m),t.push(m)}}for(const r of n){const o=new Do({color:e,transparent:!0,opacity:.35,depthWrite:!1,depthTest:!0,blending:Co,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),c=new en(r.geometry,o);c.renderOrder=998,c.raycast=()=>{},c.userData.labSelectionOutline=!0,c.userData.shareGeometry=!0,r.add(c),t.push(c);const l=new Do({color:e,side:ln,transparent:!0,opacity:.5,depthWrite:!1,depthTest:!0,blending:Co,toneMapped:!1}),h=new en(r.geometry,l);h.scale.setScalar(1.08),h.renderOrder=997,h.raycast=()=>{},h.userData.labSelectionOutline=!0,h.userData.shareGeometry=!0,r.add(h),t.push(h);let d;try{d=new Rh(r.geometry,28)}catch{continue}if(!d.attributes.position||d.attributes.position.count===0){d.dispose();continue}const p=new os({color:e,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,toneMapped:!1}),m=new No(d,p);m.renderOrder=999,m.raycast=()=>{},m.userData.labSelectionOutline=!0,r.add(m),t.push(m)}}function yT(i){const{canvas:e,camera:t,scene:n,panelEls:r,getPoseText:o,getExtraText:c,getPartnerText:l,getGroupText:h,onSelect:d,onPanelUpdate:p}=i,m=new Zd,_=new Ae;let g=null,S=null,E=null,x=null;const y=[];function N(){var O;for(const q of y)(O=q.parent)==null||O.remove(q),ww(q);y.length=0}function P(){N();const O=[[S,Ew],[x,bw]];for(const[q,Z]of O)q&&Tw(q,Z,y)}function A(O){r.partner&&(r.partner.textContent=l?l(O,E):E?E.name:"— (Shift+click partner)"),r.group&&(r.group.textContent=h?h(O):"—")}function V(O){if(g=O,typeof window<"u"&&(window.__labSelection=O?{...O,poseText:o(O),extraText:c(O),partner:E?{id:E.id,body:E.body,name:E.name}:null,outlineCount:y.length,t:performance.now()}:null),!O){r.root.hidden=!0,r.name.textContent="—",r.type.textContent="—",r.id.textContent="—",r.pose.textContent="—",r.extra.textContent="—",A(null),d==null||d(null,E),p==null||p(null);return}r.root.hidden=!1,r.name.textContent=O.name,r.type.textContent=O.type,r.id.textContent=O.id,r.pose.textContent=o(O),r.extra.textContent=c(O),A(O),d==null||d(O,E),p==null||p(O)}function L(O,q=null,{asPartner:Z=!1}={}){if(Z&&O){g&&(g.id===O.id||g.body===O.body)?(E=null,x=null):(E=O,x=q),P(),V(g);return}S=q,E&&O&&(E.id===O.id||E.body===O.body)&&(E=null,x=null),P(),V(O)}function k(O){var Z;let q=O;for(;q;){if((Z=q.userData)!=null&&Z.labObject)return q;q=q.parent}return null}function H(O){var ne;if(O.button!==0||O.target!==e)return;const q=e.getBoundingClientRect();_.x=(O.clientX-q.left)/q.width*2-1,_.y=-((O.clientY-q.top)/q.height)*2+1,m.setFromCamera(_,t);const Z=m.intersectObjects(n.children,!0),Q=!!O.shiftKey||document.body.classList.contains("partner-mode");for(const ie of Z){const me=k(ie.object);if((ne=me==null?void 0:me.userData)!=null&&ne.labObject){L(me.userData.labObject,me,{asPartner:Q}),Q&&document.body.classList.contains("partner-mode")&&document.body.dispatchEvent(new CustomEvent("lab-partner-consumed"));return}}S=null,E=null,x=null,N(),V(null)}e.addEventListener("pointerdown",H);function I(){g&&(r.pose.textContent=o(g),r.extra.textContent=c(g),A(g),typeof window<"u"&&window.__labSelection&&(window.__labSelection.poseText=r.pose.textContent,window.__labSelection.extraText=r.extra.textContent,window.__labSelection.partner=E?{id:E.id,body:E.body,name:E.name}:null,window.__labSelection.t=performance.now()),p==null||p(g))}function b(){e.removeEventListener("pointerdown",H),N()}return{selectMeta:L,clear:()=>{S=null,E=null,x=null,N(),V(null)},getSelected:()=>g,getSelectedRoot:()=>S,getPartner:()=>E,getPartnerRoot:()=>x,setPartner:(O,q=null)=>{E=O,x=q,P(),V(g)},refreshHighlight:()=>{(S||x)&&P()},updatePanel:I,dispose:b}}const tc=.45,nd=4;function Aw(i){return i?i.id==="sg90"||i.body==="sg90":!1}function xo(i){return i?Aw(i)||i.id==="sg90_horn"||i.body==="sg90_rotor":!1}function xT(i){const{canvas:e,camera:t,orbitControls:n,getSelected:r,getSelectedRoot:o,getOrientation:c,applyOrientation:l,hintEl:h=null,onActiveChange:d,allowPointer:p}=i,m=new Zd,_=new Ae;let g=!1,S=!1,E=0,x=0,y={yaw:0,pitch:0,roll:0},N=!1,P=!0,A=null;function V(ne={}){if(typeof window>"u")return;const ie=r(),me=xo(ie);window.__sg90MotorReorient={selected:me,dragging:S,hint:me?"Drag to reorient motor":null,layers:"motor_R only — hinge + 21T mount unchanged",...ne,t:performance.now()}}function L(ne){if(h)if(ne){h.hidden=!1;const ie=window.matchMedia("(pointer: coarse)").matches&&!document.body.classList.contains("reorient-mode");h.textContent=ie?"Use Motor orientation sliders — or enable Reorient drag":"Drag to reorient motor"}else h.hidden=!0}function k(ne){ne==="grabbing"?e.style.cursor="grabbing":ne==="grab"?e.style.cursor="grab":e.style.cursor=""}function H(){const ne=xo(r());L(ne),k(ne?S?"grabbing":"grab":""),d==null||d(ne),V()}function I(ne,ie){const me=o();if(!me||!xo(r()))return!1;const se=e.getBoundingClientRect();return _.x=(ne-se.left)/se.width*2-1,_.y=-((ie-se.top)/se.height)*2+1,m.setFromCamera(_,t),m.intersectObject(me,!0).length>0}function b(){if(!g&&!S)return;const ne=S;if(g=!1,S=!1,n.enabled=P,ne&&l(c(),{dragging:!1}),A!=null){try{e.releasePointerCapture(A)}catch{}A=null}H()}function O(ne){ne.button!==0||ne.target!==e||!xo(r())||!I(ne.clientX,ne.clientY)||!(p?p(ne):rw(ne))||(g=!0,S=!1,E=ne.clientX,x=ne.clientY,y={...c()},N=!!ne.shiftKey,A=ne.pointerId,P=n.enabled,V({tracking:!0}))}function q(ne){if(!g)return;const ie=ne.clientX-E,me=ne.clientY-x;if(!S){if(ie*ie+me*me<nd*nd)return;S=!0,n.enabled=!1;try{e.setPointerCapture(ne.pointerId),A=ne.pointerId}catch{}k("grabbing"),V({dragging:!0})}N=!!ne.shiftKey;let se;N?se={yaw:y.yaw,pitch:y.pitch,roll:y.roll+ie*tc}:se={yaw:y.yaw+ie*tc,pitch:y.pitch-me*tc,roll:y.roll},l(se,{dragging:!0})}function Z(){b()}function Q(){b()}return e.addEventListener("pointerdown",O),e.addEventListener("pointermove",q),e.addEventListener("pointerup",Z),e.addEventListener("pointercancel",Q),H(),{onSelectionChange:H,isDragging:()=>S,dispose:()=>{e.removeEventListener("pointerdown",O),e.removeEventListener("pointermove",q),e.removeEventListener("pointerup",Z),e.removeEventListener("pointercancel",Q),b(),L(!1),k(""),typeof window<"u"&&(window.__sg90MotorReorient=null)}}}export{FE as $,kw as A,qt as B,ot as C,Zw as D,en as E,Xw as F,No as G,Bd as H,zw as I,Hw as J,Vw as K,hs as L,Gw as M,Fs as N,Ft as O,qw as P,hn as Q,fc as R,En as S,Iw as T,no as U,Ae as V,gn as W,S0 as X,Cd as Y,Od as Z,Ww as _,Fw as a,Ro as a0,Hc as a1,Fd as a2,tn as a3,Oo as a4,Uo as a5,$o as a6,St as a7,Si as a8,Xo as a9,Jh as aA,lT as aB,vT as aC,Uw as aD,vv as aE,Ow as aF,Nd as aG,tT as aH,jw as aI,Vo as aJ,eT as aK,iT as aL,Fr as aM,jd as aN,Gd as aO,Rh as aP,Rw as aQ,Lw as aR,nT as aS,Qw as aT,hT as aU,uT as aV,xo as aW,aT as aX,pT as aY,xT as aZ,_T as a_,Wn as aa,ai as ab,st as ac,Ut as ad,id as ae,mT as af,xl as ag,dT as ah,ec as ai,Mw as aj,of as ak,gT as al,An as am,rw as an,Zd as ao,_i as ap,uw as aq,fT as ar,Dr as as,Gi as at,cT as au,qh as av,rT as aw,yT as ax,sT as ay,oT as az,Nw as b,Kw as c,Ir as d,Yw as e,at as f,z as g,yh as h,$w as i,Jw as j,Bw as k,Vi as l,ha as m,jv as n,Gn as o,yn as p,pc as q,Hi as r,BE as s,Yi as t,os as u,Yc as v,ni as w,Do as x,At as y,Zt as z};
