const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/occt-import-js-DCqKp0QJ.js","assets/__vite-browser-external-D7Ct-6yo.js"])))=>i.map(i=>d[i]);
var rv=Object.defineProperty;var sv=(i,e,t)=>e in i?rv(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Pn=(i,e,t)=>sv(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const ov="modulepreload",av=function(i){return"/physical/"+i},ou={},Zh=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let c=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),h=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));r=c(t.map(d=>{if(d=av(d),d in ou)return;ou[d]=!0;const p=d.endsWith(".css"),_=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${_}`))return;const m=document.createElement("link");if(m.rel=p?"stylesheet":ov,p||(m.as="script"),m.crossOrigin="",m.href=d,h&&m.setAttribute("nonce",h),document.head.appendChild(m),p)return new Promise((v,S)=>{m.addEventListener("load",v),m.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return r.then(c=>{for(const l of c||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})};var pw=(async function(i={}){var nu,iu,ru;var e,t=i,n=typeof window=="object",r=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&((nu=process.versions)==null?void 0:nu.node)&&process.type!="renderer",c=!n&&!o&&!r;if(o){const{createRequire:s}=await Zh(async()=>{const{createRequire:a}=await import("./__vite-browser-external-D7Ct-6yo.js").then(u=>u._);return{createRequire:a}},[]);var l=s(import.meta.url)}var h="./this.program",d=(s,a)=>{throw a},p=import.meta.url,_="";function m(s){return t.locateFile?t.locateFile(s,_):_+s}var v,S;if(o){if(!(typeof process=="object"&&((iu=process.versions)==null?void 0:iu.node)&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var T=process.versions.node,x=T.split(".").slice(0,3);if(x=x[0]*1e4+x[1]*100+x[2].split("-")[0]*1,x<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+T+")");var y=l("fs");p.startsWith("file:")&&(_=l("path").dirname(l("url").fileURLToPath(p))+"/"),S=a=>{a=k(a)?new URL(a):a;var u=y.readFileSync(a);return L(Buffer.isBuffer(u)),u},v=async(a,u=!0)=>{a=k(a)?new URL(a):a;var f=y.readFileSync(a,u?void 0:"utf8");return L(u?Buffer.isBuffer(f):typeof f=="string"),f},process.argv.length>1&&(h=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),d=(a,u)=>{throw process.exitCode=a,u}}else if(c){if(typeof process=="object"&&((ru=process.versions)==null?void 0:ru.node)&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||r){try{_=new URL(".",p).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");r&&(S=s=>{var a=new XMLHttpRequest;return a.open("GET",s,!1),a.responseType="arraybuffer",a.send(null),new Uint8Array(a.response)}),v=async s=>{if(k(s))return new Promise((u,f)=>{var g=new XMLHttpRequest;g.open("GET",s,!0),g.responseType="arraybuffer",g.onload=()=>{if(g.status==200||g.status==0&&g.response){u(g.response);return}f(g.status)},g.onerror=f,g.send(null)});var a=await fetch(s,{credentials:"same-origin"});if(a.ok)return a.arrayBuffer();throw new Error(a.status+" : "+a.url)}}else throw new Error("environment detection error");var U=console.log.bind(console),P=console.error.bind(console);L(!c,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var C;typeof WebAssembly!="object"&&P("no native wasm support detected");var j=!1;function L(s,a){s||he("Assertion failed"+(a?": "+a:""))}var k=s=>s.startsWith("file://");function H(){var s=na();L((s&3)==0),s==0&&(s+=4),Te[s>>2]=34821223,Te[s+4>>2]=2310721022,Te[0]=1668509029}function I(){if(!j){var s=na();s==0&&(s+=4);var a=Te[s>>2],u=Te[s+4>>2];(a!=34821223||u!=2310721022)&&he(`Stack overflow! Stack cookie has been overwritten at ${pe(s)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${pe(u)} ${pe(a)}`),Te[0]!=1668509029&&he("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class E extends Error{}class B extends E{}class ee extends E{constructor(a){super(a),this.excPtr=a;const u=Vl(a);this.name=u[0],this.message=u[1]}}(()=>{var s=new Int16Array(1),a=new Int8Array(s.buffer);if(s[0]=25459,a[0]!==115||a[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function K(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,set(){he(`Attempt to set \`Module.${s}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function V(s){return()=>L(!1,`call to '${s}' via reference taken before Wasm module initialization`)}function le(s){Object.getOwnPropertyDescriptor(t,s)&&he(`\`Module.${s}\` was supplied but \`${s}\` not included in INCOMING_MODULE_JS_API`)}function te(s){return s==="FS_createPath"||s==="FS_createDataFile"||s==="FS_createPreloadedFile"||s==="FS_unlink"||s==="addRunDependency"||s==="FS_createLazyFile"||s==="FS_createDevice"||s==="removeRunDependency"}function _e(s,a){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,s)&&Object.defineProperty(globalThis,s,{configurable:!0,get(){a()}})}function ie(s,a){_e(s,()=>{Ke(`\`${s}\` is not longer defined by emscripten. ${a}`)})}ie("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),ie("asm","Please use wasmExports instead");function Re(s){_e(s,()=>{var a=`\`${s}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,u=s;u.startsWith("_")||(u="$"+s),a+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${u}')`,te(s)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Ke(a)}),Fe(s)}function Fe(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,get(){var a=`'${s}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;te(s)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),he(a)}})}var ke,Je,mt,re,ve,Oe,be,fe,Te,Qe,dt,de,we,O=!1;function je(){var s=mt.buffer;re=new Int8Array(s),Oe=new Int16Array(s),ve=new Uint8Array(s),be=new Uint16Array(s),fe=new Int32Array(s),Te=new Uint32Array(s),Qe=new Float32Array(s),dt=new Float64Array(s),de=new BigInt64Array(s),we=new BigUint64Array(s)}L(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function Se(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Le(t.preRun.shift());K("preRun"),ft(G)}function ze(){L(!O),O=!0,I(),!t.noFSInit&&!b.initialized&&b.init(),Pi.__wasm_call_ctors(),b.ignorePermissions=!1}function Ce(){if(I(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)wt(t.postRun.shift());K("postRun"),ft(it)}var Ze=0,Ne=null,N={},R=null;function J(s){var a;Ze++,(a=t.monitorRunDependencies)==null||a.call(t,Ze),s?(L(!N[s]),N[s]=1,R===null&&typeof setInterval<"u"&&(R=setInterval(()=>{if(j){clearInterval(R),R=null;return}var u=!1;for(var f in N)u||(u=!0,P("still waiting on run dependencies:")),P(`dependency: ${f}`);u&&P("(end of list)")},1e4))):P("warning: run dependency added without ID")}function ue(s){var u;if(Ze--,(u=t.monitorRunDependencies)==null||u.call(t,Ze),s?(L(N[s]),delete N[s]):P("warning: run dependency removed without ID"),Ze==0&&(R!==null&&(clearInterval(R),R=null),Ne)){var a=Ne;Ne=null,a()}}function he(s){var u;(u=t.onAbort)==null||u.call(t,s),s="Aborted("+s+")",P(s),j=!0;var a=new WebAssembly.RuntimeError(s);throw Je==null||Je(a),a}function oe(s,a){return(...u)=>{L(O,`native function \`${s}\` called before runtime initialization`);var f=Pi[s];return L(f,`exported native function \`${s}\` not found`),L(u.length<=a,`native function \`${s}\` called with ${u.length} args but expects ${a}`),f(...u)}}var Ve;function Pe(){return t.locateFile?m("mujoco.wasm"):new URL("/physical/assets/mujoco-D9UjOFNX.wasm",import.meta.url).href}function Be(s){if(s==Ve&&C)return new Uint8Array(C);if(S)return S(s);throw"both async and sync fetching of the wasm failed"}async function ht(s){if(!C)try{var a=await v(s);return new Uint8Array(a)}catch{}return Be(s)}async function Ee(s,a){try{var u=await ht(s),f=await WebAssembly.instantiate(u,a);return f}catch(g){P(`failed to asynchronously prepare wasm: ${g}`),k(Ve)&&P(`warning: Loading from a file URI (${Ve}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),he(g)}}async function Ge(s,a,u){if(!s&&typeof WebAssembly.instantiateStreaming=="function"&&!k(a)&&!o)try{var f=fetch(a,{credentials:"same-origin"}),g=await WebAssembly.instantiateStreaming(f,u);return g}catch(M){P(`wasm streaming compile failed: ${M}`),P("falling back to ArrayBuffer instantiation")}return Ee(a,u)}function et(){return{env:eu,wasi_snapshot_preview1:eu}}async function nt(){function s(w,A){return Pi=w.exports,mt=Pi.memory,L(mt,"memory not found in wasm exports"),je(),bs=Pi.__indirect_function_table,L(bs,"table not found in wasm exports"),am(Pi),ue("wasm-instantiate"),Pi}J("wasm-instantiate");var a=t;function u(w){return L(t===a,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),a=null,s(w.instance)}var f=et();if(t.instantiateWasm)return new Promise((w,A)=>{try{t.instantiateWasm(f,(F,W)=>{w(s(F,W))})}catch(F){P(`Module.instantiateWasm callback failed with error: ${F}`),A(F)}});Ve??(Ve=Pe());var g=await Ge(C,Ve,f),M=u(g);return M}class We{constructor(a){Pn(this,"name","ExitStatus");this.message=`Program terminated with exit(${a})`,this.status=a}}var ft=s=>{for(;s.length>0;)s.shift()(t)},it=[],wt=s=>it.push(s),G=[],Le=s=>G.push(s),se=!0,pe=s=>(L(typeof s=="number"),s>>>=0,"0x"+s.toString(16).padStart(8,"0")),Z=s=>Yl(s),q=()=>Zl(),Ke=s=>{Ke.shown||(Ke.shown={}),Ke.shown[s]||(Ke.shown[s]=1,o&&(s="warning: "+s),P(s))},Lt=typeof TextDecoder<"u"?new TextDecoder:void 0,It=(s,a=0,u=NaN)=>{for(var f=a+u,g=a;s[g]&&!(g>=f);)++g;if(g-a>16&&s.buffer&&Lt)return Lt.decode(s.subarray(a,g));for(var M="";a<g;){var w=s[a++];if(!(w&128)){M+=String.fromCharCode(w);continue}var A=s[a++]&63;if((w&224)==192){M+=String.fromCharCode((w&31)<<6|A);continue}var F=s[a++]&63;if((w&240)==224?w=(w&15)<<12|A<<6|F:((w&248)!=240&&Ke("Invalid UTF-8 leading byte "+pe(w)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),w=(w&7)<<18|A<<12|F<<6|s[a++]&63),w<65536)M+=String.fromCharCode(w);else{var W=w-65536;M+=String.fromCharCode(55296|W>>10,56320|W&1023)}}return M},lt=(s,a)=>(L(typeof s=="number",`UTF8ToString expects a number (got ${typeof s})`),s?It(ve,s,a):""),dn=(s,a,u,f)=>he(`Assertion failed: ${lt(s)}, at: `+[a?lt(a):"unknown filename",u,f?lt(f):"unknown function"]),Bt=[],Ei=0,us=s=>{var a=new bi(s);return a.get_caught()||(a.set_caught(!0),Ei--),a.set_rethrown(!1),Bt.push(a),Ds(s),Ql(s)},$n=()=>{if(!Bt.length)return 0;var s=Bt[Bt.length-1];return Ds(s.excPtr),s.excPtr},tn=0,hs=()=>{ye(0,0),L(Bt.length>0);var s=Bt.pop();ia(s.excPtr),tn=0};class bi{constructor(a){this.excPtr=a,this.ptr=a-24}set_type(a){Te[this.ptr+4>>2]=a}get_type(){return Te[this.ptr+4>>2]}set_destructor(a){Te[this.ptr+8>>2]=a}get_destructor(){return Te[this.ptr+8>>2]}set_caught(a){a=a?1:0,re[this.ptr+12]=a}get_caught(){return re[this.ptr+12]!=0}set_rethrown(a){a=a?1:0,re[this.ptr+13]=a}get_rethrown(){return re[this.ptr+13]!=0}init(a,u){this.set_adjusted_ptr(0),this.set_type(a),this.set_destructor(u)}set_adjusted_ptr(a){Te[this.ptr+16>>2]=a}get_adjusted_ptr(){return Te[this.ptr+16>>2]}}var jn=s=>$l(s),qi=s=>{var a=tn==null?void 0:tn.excPtr;if(!a)return jn(0),0;var u=new bi(a);u.set_adjusted_ptr(a);var f=u.get_type();if(!f)return jn(0),a;for(var g of s){if(g===0||g===f)break;var M=u.ptr+16;if(Jl(g,f,M))return jn(g),a}return jn(f),a},Zi=()=>qi([]),ds=s=>qi([s]),fs=(s,a)=>qi([s,a]),ps=()=>{var s=Bt.pop();s||he("no exception to throw");var a=s.excPtr;throw s.get_rethrown()||(Bt.push(s),s.set_rethrown(!0),s.set_caught(!1),Ei++),tn=new ee(a),tn},Go=s=>{if(s){var a=new bi(s);Bt.push(a),a.set_rethrown(!0),ps()}},Wo=(s,a,u)=>{var f=new bi(s);throw f.init(a,u),tn=new ee(s),Ei++,tn},D=()=>Ei,X=s=>{throw tn||(tn=new ee(s)),tn},Y={isAbs:s=>s.charAt(0)==="/",splitPath:s=>{var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return a.exec(s).slice(1)},normalizeArray:(s,a)=>{for(var u=0,f=s.length-1;f>=0;f--){var g=s[f];g==="."?s.splice(f,1):g===".."?(s.splice(f,1),u++):u&&(s.splice(f,1),u--)}if(a)for(;u;u--)s.unshift("..");return s},normalize:s=>{var a=Y.isAbs(s),u=s.slice(-1)==="/";return s=Y.normalizeArray(s.split("/").filter(f=>!!f),!a).join("/"),!s&&!a&&(s="."),s&&u&&(s+="/"),(a?"/":"")+s},dirname:s=>{var a=Y.splitPath(s),u=a[0],f=a[1];return!u&&!f?".":(f&&(f=f.slice(0,-1)),u+f)},basename:s=>s&&s.match(/([^\/]+|\/)\/*$/)[1],join:(...s)=>Y.normalize(s.join("/")),join2:(s,a)=>Y.normalize(s+"/"+a)},ne=()=>{if(o){var s=l("crypto");return a=>s.randomFillSync(a)}return a=>crypto.getRandomValues(a)},$=s=>{($=ne())(s)},Me={resolve:(...s)=>{for(var a="",u=!1,f=s.length-1;f>=-1&&!u;f--){var g=f>=0?s[f]:b.cwd();if(typeof g!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!g)return"";a=g+"/"+a,u=Y.isAbs(g)}return a=Y.normalizeArray(a.split("/").filter(M=>!!M),!u).join("/"),(u?"/":"")+a||"."},relative:(s,a)=>{s=Me.resolve(s).slice(1),a=Me.resolve(a).slice(1);function u(W){for(var Q=0;Q<W.length&&W[Q]==="";Q++);for(var ae=W.length-1;ae>=0&&W[ae]==="";ae--);return Q>ae?[]:W.slice(Q,ae-Q+1)}for(var f=u(s.split("/")),g=u(a.split("/")),M=Math.min(f.length,g.length),w=M,A=0;A<M;A++)if(f[A]!==g[A]){w=A;break}for(var F=[],A=w;A<f.length;A++)F.push("..");return F=F.concat(g.slice(w)),F.join("/")}},Ie=[],Xe=s=>{for(var a=0,u=0;u<s.length;++u){var f=s.charCodeAt(u);f<=127?a++:f<=2047?a+=2:f>=55296&&f<=57343?(a+=4,++u):a+=3}return a},$e=(s,a,u,f)=>{if(L(typeof s=="string",`stringToUTF8Array expects a string (got ${typeof s})`),!(f>0))return 0;for(var g=u,M=u+f-1,w=0;w<s.length;++w){var A=s.codePointAt(w);if(A<=127){if(u>=M)break;a[u++]=A}else if(A<=2047){if(u+1>=M)break;a[u++]=192|A>>6,a[u++]=128|A&63}else if(A<=65535){if(u+2>=M)break;a[u++]=224|A>>12,a[u++]=128|A>>6&63,a[u++]=128|A&63}else{if(u+3>=M)break;A>1114111&&Ke("Invalid Unicode code point "+pe(A)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),a[u++]=240|A>>18,a[u++]=128|A>>12&63,a[u++]=128|A>>6&63,a[u++]=128|A&63,w++}}return a[u]=0,u-g},tt=(s,a,u)=>{var f=Xe(s)+1,g=new Array(f),M=$e(s,g,0,g.length);return g.length=M,g},rt=()=>{if(!Ie.length){var s=null;if(o){var a=256,u=Buffer.alloc(a),f=0,g=process.stdin.fd;try{f=y.readSync(g,u,0,a)}catch(M){if(M.toString().includes("EOF"))f=0;else throw M}f>0&&(s=u.slice(0,f).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(s=window.prompt("Input: "),s!==null&&(s+=`
`));if(!s)return null;Ie=tt(s)}return Ie.shift()},He={ttys:[],init(){},shutdown(){},register(s,a){He.ttys[s]={input:[],output:[],ops:a},b.registerDevice(s,He.stream_ops)},stream_ops:{open(s){var a=He.ttys[s.node.rdev];if(!a)throw new b.ErrnoError(43);s.tty=a,s.seekable=!1},close(s){s.tty.ops.fsync(s.tty)},fsync(s){s.tty.ops.fsync(s.tty)},read(s,a,u,f,g){if(!s.tty||!s.tty.ops.get_char)throw new b.ErrnoError(60);for(var M=0,w=0;w<f;w++){var A;try{A=s.tty.ops.get_char(s.tty)}catch{throw new b.ErrnoError(29)}if(A===void 0&&M===0)throw new b.ErrnoError(6);if(A==null)break;M++,a[u+w]=A}return M&&(s.node.atime=Date.now()),M},write(s,a,u,f,g){if(!s.tty||!s.tty.ops.put_char)throw new b.ErrnoError(60);try{for(var M=0;M<f;M++)s.tty.ops.put_char(s.tty,a[u+M])}catch{throw new b.ErrnoError(29)}return f&&(s.node.mtime=s.node.ctime=Date.now()),M}},default_tty_ops:{get_char(s){return rt()},put_char(s,a){a===null||a===10?(U(It(s.output)),s.output=[]):a!=0&&s.output.push(a)},fsync(s){var a;((a=s.output)==null?void 0:a.length)>0&&(U(It(s.output)),s.output=[])},ioctl_tcgets(s){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(s,a,u){return 0},ioctl_tiocgwinsz(s){return[24,80]}},default_tty1_ops:{put_char(s,a){a===null||a===10?(P(It(s.output)),s.output=[]):a!=0&&s.output.push(a)},fsync(s){var a;((a=s.output)==null?void 0:a.length)>0&&(P(It(s.output)),s.output=[])}}},_t=s=>{he("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},Ue={ops_table:null,mount(s){return Ue.createNode(null,"/",16895,0)},createNode(s,a,u,f){if(b.isBlkdev(u)||b.isFIFO(u))throw new b.ErrnoError(63);Ue.ops_table||(Ue.ops_table={dir:{node:{getattr:Ue.node_ops.getattr,setattr:Ue.node_ops.setattr,lookup:Ue.node_ops.lookup,mknod:Ue.node_ops.mknod,rename:Ue.node_ops.rename,unlink:Ue.node_ops.unlink,rmdir:Ue.node_ops.rmdir,readdir:Ue.node_ops.readdir,symlink:Ue.node_ops.symlink},stream:{llseek:Ue.stream_ops.llseek}},file:{node:{getattr:Ue.node_ops.getattr,setattr:Ue.node_ops.setattr},stream:{llseek:Ue.stream_ops.llseek,read:Ue.stream_ops.read,write:Ue.stream_ops.write,mmap:Ue.stream_ops.mmap,msync:Ue.stream_ops.msync}},link:{node:{getattr:Ue.node_ops.getattr,setattr:Ue.node_ops.setattr,readlink:Ue.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Ue.node_ops.getattr,setattr:Ue.node_ops.setattr},stream:b.chrdev_stream_ops}});var g=b.createNode(s,a,u,f);return b.isDir(g.mode)?(g.node_ops=Ue.ops_table.dir.node,g.stream_ops=Ue.ops_table.dir.stream,g.contents={}):b.isFile(g.mode)?(g.node_ops=Ue.ops_table.file.node,g.stream_ops=Ue.ops_table.file.stream,g.usedBytes=0,g.contents=null):b.isLink(g.mode)?(g.node_ops=Ue.ops_table.link.node,g.stream_ops=Ue.ops_table.link.stream):b.isChrdev(g.mode)&&(g.node_ops=Ue.ops_table.chrdev.node,g.stream_ops=Ue.ops_table.chrdev.stream),g.atime=g.mtime=g.ctime=Date.now(),s&&(s.contents[a]=g,s.atime=s.mtime=s.ctime=g.atime),g},getFileDataAsTypedArray(s){return s.contents?s.contents.subarray?s.contents.subarray(0,s.usedBytes):new Uint8Array(s.contents):new Uint8Array(0)},expandFileStorage(s,a){var u=s.contents?s.contents.length:0;if(!(u>=a)){var f=1024*1024;a=Math.max(a,u*(u<f?2:1.125)>>>0),u!=0&&(a=Math.max(a,256));var g=s.contents;s.contents=new Uint8Array(a),s.usedBytes>0&&s.contents.set(g.subarray(0,s.usedBytes),0)}},resizeFileStorage(s,a){if(s.usedBytes!=a)if(a==0)s.contents=null,s.usedBytes=0;else{var u=s.contents;s.contents=new Uint8Array(a),u&&s.contents.set(u.subarray(0,Math.min(a,s.usedBytes))),s.usedBytes=a}},node_ops:{getattr(s){var a={};return a.dev=b.isChrdev(s.mode)?s.id:1,a.ino=s.id,a.mode=s.mode,a.nlink=1,a.uid=0,a.gid=0,a.rdev=s.rdev,b.isDir(s.mode)?a.size=4096:b.isFile(s.mode)?a.size=s.usedBytes:b.isLink(s.mode)?a.size=s.link.length:a.size=0,a.atime=new Date(s.atime),a.mtime=new Date(s.mtime),a.ctime=new Date(s.ctime),a.blksize=4096,a.blocks=Math.ceil(a.size/a.blksize),a},setattr(s,a){for(const u of["mode","atime","mtime","ctime"])a[u]!=null&&(s[u]=a[u]);a.size!==void 0&&Ue.resizeFileStorage(s,a.size)},lookup(s,a){throw new b.ErrnoError(44)},mknod(s,a,u,f){return Ue.createNode(s,a,u,f)},rename(s,a,u){var f;try{f=b.lookupNode(a,u)}catch{}if(f){if(b.isDir(s.mode))for(var g in f.contents)throw new b.ErrnoError(55);b.hashRemoveNode(f)}delete s.parent.contents[s.name],a.contents[u]=s,s.name=u,a.ctime=a.mtime=s.parent.ctime=s.parent.mtime=Date.now()},unlink(s,a){delete s.contents[a],s.ctime=s.mtime=Date.now()},rmdir(s,a){var u=b.lookupNode(s,a);for(var f in u.contents)throw new b.ErrnoError(55);delete s.contents[a],s.ctime=s.mtime=Date.now()},readdir(s){return[".","..",...Object.keys(s.contents)]},symlink(s,a,u){var f=Ue.createNode(s,a,41471,0);return f.link=u,f},readlink(s){if(!b.isLink(s.mode))throw new b.ErrnoError(28);return s.link}},stream_ops:{read(s,a,u,f,g){var M=s.node.contents;if(g>=s.node.usedBytes)return 0;var w=Math.min(s.node.usedBytes-g,f);if(L(w>=0),w>8&&M.subarray)a.set(M.subarray(g,g+w),u);else for(var A=0;A<w;A++)a[u+A]=M[g+A];return w},write(s,a,u,f,g,M){if(L(!(a instanceof ArrayBuffer)),a.buffer===re.buffer&&(M=!1),!f)return 0;var w=s.node;if(w.mtime=w.ctime=Date.now(),a.subarray&&(!w.contents||w.contents.subarray)){if(M)return L(g===0,"canOwn must imply no weird position inside the file"),w.contents=a.subarray(u,u+f),w.usedBytes=f,f;if(w.usedBytes===0&&g===0)return w.contents=a.slice(u,u+f),w.usedBytes=f,f;if(g+f<=w.usedBytes)return w.contents.set(a.subarray(u,u+f),g),f}if(Ue.expandFileStorage(w,g+f),w.contents.subarray&&a.subarray)w.contents.set(a.subarray(u,u+f),g);else for(var A=0;A<f;A++)w.contents[g+A]=a[u+A];return w.usedBytes=Math.max(w.usedBytes,g+f),f},llseek(s,a,u){var f=a;if(u===1?f+=s.position:u===2&&b.isFile(s.node.mode)&&(f+=s.node.usedBytes),f<0)throw new b.ErrnoError(28);return f},mmap(s,a,u,f,g){if(!b.isFile(s.node.mode))throw new b.ErrnoError(43);var M,w,A=s.node.contents;if(!(g&2)&&A&&A.buffer===re.buffer)w=!1,M=A.byteOffset;else{if(w=!0,M=_t(),!M)throw new b.ErrnoError(48);A&&((u>0||u+a<A.length)&&(A.subarray?A=A.subarray(u,u+a):A=Array.prototype.slice.call(A,u,u+a)),re.set(A,M))}return{ptr:M,allocated:w}},msync(s,a,u,f,g){return Ue.stream_ops.write(s,a,0,f,u,!1),0}}},Rt=async s=>{var a=await v(s);return L(a,`Loading data file "${s}" failed (no arrayBuffer).`),new Uint8Array(a)},jt=(...s)=>b.createDataFile(...s),Mt=s=>{for(var a=s;;){if(!N[s])return s;s=a+Math.random()}},Ye=[],Cn=(s,a,u,f)=>{typeof Browser<"u"&&Browser.init();var g=!1;return Ye.forEach(M=>{g||M.canHandle(a)&&(M.handle(s,a,u,f),g=!0)}),g},yt=(s,a,u,f,g,M,w,A,F,W)=>{var Q=a?Me.resolve(Y.join2(s,a)):s,ae=Mt(`cp ${Q}`);function me(ce){function ge(qe){W==null||W(),A||jt(s,a,qe,f,g,F),M==null||M(),ue(ae)}Cn(ce,Q,ge,()=>{w==null||w(),ue(ae)})||ge(ce)}J(ae),typeof u=="string"?Rt(u).then(me,w):me(u)},fn=s=>{var a={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},u=a[s];if(typeof u>"u")throw new Error(`Unknown file open mode: ${s}`);return u},Un=(s,a)=>{var u=0;return s&&(u|=365),a&&(u|=146),u},nn=s=>lt(Xl(s)),ai={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},b={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{constructor(a){super(O?nn(a):"");Pn(this,"name","ErrnoError");this.errno=a;for(var u in ai)if(ai[u]===a){this.code=u;break}}},FSStream:class{constructor(){Pn(this,"shared",{})}get object(){return this.node}set object(s){this.node=s}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(s){this.shared.flags=s}get position(){return this.shared.position}set position(s){this.shared.position=s}},FSNode:class{constructor(s,a,u,f){Pn(this,"node_ops",{});Pn(this,"stream_ops",{});Pn(this,"readMode",365);Pn(this,"writeMode",146);Pn(this,"mounted",null);s||(s=this),this.parent=s,this.mount=s.mount,this.id=b.nextInode++,this.name=a,this.mode=u,this.rdev=f,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(s){s?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(s){s?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return b.isDir(this.mode)}get isDevice(){return b.isChrdev(this.mode)}},lookupPath(s,a={}){if(!s)throw new b.ErrnoError(44);a.follow_mount??(a.follow_mount=!0),Y.isAbs(s)||(s=b.cwd()+"/"+s);e:for(var u=0;u<40;u++){for(var f=s.split("/").filter(W=>!!W),g=b.root,M="/",w=0;w<f.length;w++){var A=w===f.length-1;if(A&&a.parent)break;if(f[w]!=="."){if(f[w]===".."){if(M=Y.dirname(M),b.isRoot(g)){s=M+"/"+f.slice(w+1).join("/");continue e}else g=g.parent;continue}M=Y.join2(M,f[w]);try{g=b.lookupNode(g,f[w])}catch(W){if((W==null?void 0:W.errno)===44&&A&&a.noent_okay)return{path:M};throw W}if(b.isMountpoint(g)&&(!A||a.follow_mount)&&(g=g.mounted.root),b.isLink(g.mode)&&(!A||a.follow)){if(!g.node_ops.readlink)throw new b.ErrnoError(52);var F=g.node_ops.readlink(g);Y.isAbs(F)||(F=Y.dirname(M)+"/"+F),s=F+"/"+f.slice(w+1).join("/");continue e}}}return{path:M,node:g}}throw new b.ErrnoError(32)},getPath(s){for(var a;;){if(b.isRoot(s)){var u=s.mount.mountpoint;return a?u[u.length-1]!=="/"?`${u}/${a}`:u+a:u}a=a?`${s.name}/${a}`:s.name,s=s.parent}},hashName(s,a){for(var u=0,f=0;f<a.length;f++)u=(u<<5)-u+a.charCodeAt(f)|0;return(s+u>>>0)%b.nameTable.length},hashAddNode(s){var a=b.hashName(s.parent.id,s.name);s.name_next=b.nameTable[a],b.nameTable[a]=s},hashRemoveNode(s){var a=b.hashName(s.parent.id,s.name);if(b.nameTable[a]===s)b.nameTable[a]=s.name_next;else for(var u=b.nameTable[a];u;){if(u.name_next===s){u.name_next=s.name_next;break}u=u.name_next}},lookupNode(s,a){var u=b.mayLookup(s);if(u)throw new b.ErrnoError(u);for(var f=b.hashName(s.id,a),g=b.nameTable[f];g;g=g.name_next){var M=g.name;if(g.parent.id===s.id&&M===a)return g}return b.lookup(s,a)},createNode(s,a,u,f){L(typeof s=="object");var g=new b.FSNode(s,a,u,f);return b.hashAddNode(g),g},destroyNode(s){b.hashRemoveNode(s)},isRoot(s){return s===s.parent},isMountpoint(s){return!!s.mounted},isFile(s){return(s&61440)===32768},isDir(s){return(s&61440)===16384},isLink(s){return(s&61440)===40960},isChrdev(s){return(s&61440)===8192},isBlkdev(s){return(s&61440)===24576},isFIFO(s){return(s&61440)===4096},isSocket(s){return(s&49152)===49152},flagsToPermissionString(s){var a=["r","w","rw"][s&3];return s&512&&(a+="w"),a},nodePermissions(s,a){return b.ignorePermissions?0:a.includes("r")&&!(s.mode&292)||a.includes("w")&&!(s.mode&146)||a.includes("x")&&!(s.mode&73)?2:0},mayLookup(s){if(!b.isDir(s.mode))return 54;var a=b.nodePermissions(s,"x");return a||(s.node_ops.lookup?0:2)},mayCreate(s,a){if(!b.isDir(s.mode))return 54;try{var u=b.lookupNode(s,a);return 20}catch{}return b.nodePermissions(s,"wx")},mayDelete(s,a,u){var f;try{f=b.lookupNode(s,a)}catch(M){return M.errno}var g=b.nodePermissions(s,"wx");if(g)return g;if(u){if(!b.isDir(f.mode))return 54;if(b.isRoot(f)||b.getPath(f)===b.cwd())return 10}else if(b.isDir(f.mode))return 31;return 0},mayOpen(s,a){return s?b.isLink(s.mode)?32:b.isDir(s.mode)&&(b.flagsToPermissionString(a)!=="r"||a&576)?31:b.nodePermissions(s,b.flagsToPermissionString(a)):44},checkOpExists(s,a){if(!s)throw new b.ErrnoError(a);return s},MAX_OPEN_FDS:4096,nextfd(){for(var s=0;s<=b.MAX_OPEN_FDS;s++)if(!b.streams[s])return s;throw new b.ErrnoError(33)},getStreamChecked(s){var a=b.getStream(s);if(!a)throw new b.ErrnoError(8);return a},getStream:s=>b.streams[s],createStream(s,a=-1){return L(a>=-1),s=Object.assign(new b.FSStream,s),a==-1&&(a=b.nextfd()),s.fd=a,b.streams[a]=s,s},closeStream(s){b.streams[s]=null},dupStream(s,a=-1){var f,g;var u=b.createStream(s,a);return(g=(f=u.stream_ops)==null?void 0:f.dup)==null||g.call(f,u),u},doSetAttr(s,a,u){var f=s==null?void 0:s.stream_ops.setattr,g=f?s:a;f??(f=a.node_ops.setattr),b.checkOpExists(f,63),f(g,u)},chrdev_stream_ops:{open(s){var u,f;var a=b.getDevice(s.node.rdev);s.stream_ops=a.stream_ops,(f=(u=s.stream_ops).open)==null||f.call(u,s)},llseek(){throw new b.ErrnoError(70)}},major:s=>s>>8,minor:s=>s&255,makedev:(s,a)=>s<<8|a,registerDevice(s,a){b.devices[s]={stream_ops:a}},getDevice:s=>b.devices[s],getMounts(s){for(var a=[],u=[s];u.length;){var f=u.pop();a.push(f),u.push(...f.mounts)}return a},syncfs(s,a){typeof s=="function"&&(a=s,s=!1),b.syncFSRequests++,b.syncFSRequests>1&&P(`warning: ${b.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var u=b.getMounts(b.root.mount),f=0;function g(w){return L(b.syncFSRequests>0),b.syncFSRequests--,a(w)}function M(w){if(w)return M.errored?void 0:(M.errored=!0,g(w));++f>=u.length&&g(null)}u.forEach(w=>{if(!w.type.syncfs)return M(null);w.type.syncfs(w,s,M)})},mount(s,a,u){if(typeof s=="string")throw s;var f=u==="/",g=!u,M;if(f&&b.root)throw new b.ErrnoError(10);if(!f&&!g){var w=b.lookupPath(u,{follow_mount:!1});if(u=w.path,M=w.node,b.isMountpoint(M))throw new b.ErrnoError(10);if(!b.isDir(M.mode))throw new b.ErrnoError(54)}var A={type:s,opts:a,mountpoint:u,mounts:[]},F=s.mount(A);return F.mount=A,A.root=F,f?b.root=F:M&&(M.mounted=A,M.mount&&M.mount.mounts.push(A)),F},unmount(s){var a=b.lookupPath(s,{follow_mount:!1});if(!b.isMountpoint(a.node))throw new b.ErrnoError(28);var u=a.node,f=u.mounted,g=b.getMounts(f);Object.keys(b.nameTable).forEach(w=>{for(var A=b.nameTable[w];A;){var F=A.name_next;g.includes(A.mount)&&b.destroyNode(A),A=F}}),u.mounted=null;var M=u.mount.mounts.indexOf(f);L(M!==-1),u.mount.mounts.splice(M,1)},lookup(s,a){return s.node_ops.lookup(s,a)},mknod(s,a,u){var f=b.lookupPath(s,{parent:!0}),g=f.node,M=Y.basename(s);if(!M)throw new b.ErrnoError(28);if(M==="."||M==="..")throw new b.ErrnoError(20);var w=b.mayCreate(g,M);if(w)throw new b.ErrnoError(w);if(!g.node_ops.mknod)throw new b.ErrnoError(63);return g.node_ops.mknod(g,M,a,u)},statfs(s){return b.statfsNode(b.lookupPath(s,{follow:!0}).node)},statfsStream(s){return b.statfsNode(s.node)},statfsNode(s){var a={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:b.nextInode,ffree:b.nextInode-1,fsid:42,flags:2,namelen:255};return s.node_ops.statfs&&Object.assign(a,s.node_ops.statfs(s.mount.opts.root)),a},create(s,a=438){return a&=4095,a|=32768,b.mknod(s,a,0)},mkdir(s,a=511){return a&=1023,a|=16384,b.mknod(s,a,0)},mkdirTree(s,a){var u=s.split("/"),f="";for(var g of u)if(g){(f||Y.isAbs(s))&&(f+="/"),f+=g;try{b.mkdir(f,a)}catch(M){if(M.errno!=20)throw M}}},mkdev(s,a,u){return typeof u>"u"&&(u=a,a=438),a|=8192,b.mknod(s,a,u)},symlink(s,a){if(!Me.resolve(s))throw new b.ErrnoError(44);var u=b.lookupPath(a,{parent:!0}),f=u.node;if(!f)throw new b.ErrnoError(44);var g=Y.basename(a),M=b.mayCreate(f,g);if(M)throw new b.ErrnoError(M);if(!f.node_ops.symlink)throw new b.ErrnoError(63);return f.node_ops.symlink(f,g,s)},rename(s,a){var u=Y.dirname(s),f=Y.dirname(a),g=Y.basename(s),M=Y.basename(a),w,A,F;if(w=b.lookupPath(s,{parent:!0}),A=w.node,w=b.lookupPath(a,{parent:!0}),F=w.node,!A||!F)throw new b.ErrnoError(44);if(A.mount!==F.mount)throw new b.ErrnoError(75);var W=b.lookupNode(A,g),Q=Me.relative(s,f);if(Q.charAt(0)!==".")throw new b.ErrnoError(28);if(Q=Me.relative(a,u),Q.charAt(0)!==".")throw new b.ErrnoError(55);var ae;try{ae=b.lookupNode(F,M)}catch{}if(W!==ae){var me=b.isDir(W.mode),ce=b.mayDelete(A,g,me);if(ce)throw new b.ErrnoError(ce);if(ce=ae?b.mayDelete(F,M,me):b.mayCreate(F,M),ce)throw new b.ErrnoError(ce);if(!A.node_ops.rename)throw new b.ErrnoError(63);if(b.isMountpoint(W)||ae&&b.isMountpoint(ae))throw new b.ErrnoError(10);if(F!==A&&(ce=b.nodePermissions(A,"w"),ce))throw new b.ErrnoError(ce);b.hashRemoveNode(W);try{A.node_ops.rename(W,F,M),W.parent=F}catch(ge){throw ge}finally{b.hashAddNode(W)}}},rmdir(s){var a=b.lookupPath(s,{parent:!0}),u=a.node,f=Y.basename(s),g=b.lookupNode(u,f),M=b.mayDelete(u,f,!0);if(M)throw new b.ErrnoError(M);if(!u.node_ops.rmdir)throw new b.ErrnoError(63);if(b.isMountpoint(g))throw new b.ErrnoError(10);u.node_ops.rmdir(u,f),b.destroyNode(g)},readdir(s){var a=b.lookupPath(s,{follow:!0}),u=a.node,f=b.checkOpExists(u.node_ops.readdir,54);return f(u)},unlink(s){var a=b.lookupPath(s,{parent:!0}),u=a.node;if(!u)throw new b.ErrnoError(44);var f=Y.basename(s),g=b.lookupNode(u,f),M=b.mayDelete(u,f,!1);if(M)throw new b.ErrnoError(M);if(!u.node_ops.unlink)throw new b.ErrnoError(63);if(b.isMountpoint(g))throw new b.ErrnoError(10);u.node_ops.unlink(u,f),b.destroyNode(g)},readlink(s){var a=b.lookupPath(s),u=a.node;if(!u)throw new b.ErrnoError(44);if(!u.node_ops.readlink)throw new b.ErrnoError(28);return u.node_ops.readlink(u)},stat(s,a){var u=b.lookupPath(s,{follow:!a}),f=u.node,g=b.checkOpExists(f.node_ops.getattr,63);return g(f)},fstat(s){var a=b.getStreamChecked(s),u=a.node,f=a.stream_ops.getattr,g=f?a:u;return f??(f=u.node_ops.getattr),b.checkOpExists(f,63),f(g)},lstat(s){return b.stat(s,!0)},doChmod(s,a,u,f){b.doSetAttr(s,a,{mode:u&4095|a.mode&-4096,ctime:Date.now(),dontFollow:f})},chmod(s,a,u){var f;if(typeof s=="string"){var g=b.lookupPath(s,{follow:!u});f=g.node}else f=s;b.doChmod(null,f,a,u)},lchmod(s,a){b.chmod(s,a,!0)},fchmod(s,a){var u=b.getStreamChecked(s);b.doChmod(u,u.node,a,!1)},doChown(s,a,u){b.doSetAttr(s,a,{timestamp:Date.now(),dontFollow:u})},chown(s,a,u,f){var g;if(typeof s=="string"){var M=b.lookupPath(s,{follow:!f});g=M.node}else g=s;b.doChown(null,g,f)},lchown(s,a,u){b.chown(s,a,u,!0)},fchown(s,a,u){var f=b.getStreamChecked(s);b.doChown(f,f.node,!1)},doTruncate(s,a,u){if(b.isDir(a.mode))throw new b.ErrnoError(31);if(!b.isFile(a.mode))throw new b.ErrnoError(28);var f=b.nodePermissions(a,"w");if(f)throw new b.ErrnoError(f);b.doSetAttr(s,a,{size:u,timestamp:Date.now()})},truncate(s,a){if(a<0)throw new b.ErrnoError(28);var u;if(typeof s=="string"){var f=b.lookupPath(s,{follow:!0});u=f.node}else u=s;b.doTruncate(null,u,a)},ftruncate(s,a){var u=b.getStreamChecked(s);if(a<0||(u.flags&2097155)===0)throw new b.ErrnoError(28);b.doTruncate(u,u.node,a)},utime(s,a,u){var f=b.lookupPath(s,{follow:!0}),g=f.node,M=b.checkOpExists(g.node_ops.setattr,63);M(g,{atime:a,mtime:u})},open(s,a,u=438){if(s==="")throw new b.ErrnoError(44);a=typeof a=="string"?fn(a):a,a&64?u=u&4095|32768:u=0;var f,g;if(typeof s=="object")f=s;else{g=s.endsWith("/");var M=b.lookupPath(s,{follow:!(a&131072),noent_okay:!0});f=M.node,s=M.path}var w=!1;if(a&64)if(f){if(a&128)throw new b.ErrnoError(20)}else{if(g)throw new b.ErrnoError(31);f=b.mknod(s,u|511,0),w=!0}if(!f)throw new b.ErrnoError(44);if(b.isChrdev(f.mode)&&(a&=-513),a&65536&&!b.isDir(f.mode))throw new b.ErrnoError(54);if(!w){var A=b.mayOpen(f,a);if(A)throw new b.ErrnoError(A)}a&512&&!w&&b.truncate(f,0),a&=-131713;var F=b.createStream({node:f,path:b.getPath(f),flags:a,seekable:!0,position:0,stream_ops:f.stream_ops,ungotten:[],error:!1});return F.stream_ops.open&&F.stream_ops.open(F),w&&b.chmod(f,u&511),t.logReadFiles&&!(a&1)&&(s in b.readFiles||(b.readFiles[s]=1)),F},close(s){if(b.isClosed(s))throw new b.ErrnoError(8);s.getdents&&(s.getdents=null);try{s.stream_ops.close&&s.stream_ops.close(s)}catch(a){throw a}finally{b.closeStream(s.fd)}s.fd=null},isClosed(s){return s.fd===null},llseek(s,a,u){if(b.isClosed(s))throw new b.ErrnoError(8);if(!s.seekable||!s.stream_ops.llseek)throw new b.ErrnoError(70);if(u!=0&&u!=1&&u!=2)throw new b.ErrnoError(28);return s.position=s.stream_ops.llseek(s,a,u),s.ungotten=[],s.position},read(s,a,u,f,g){if(L(u>=0),f<0||g<0)throw new b.ErrnoError(28);if(b.isClosed(s))throw new b.ErrnoError(8);if((s.flags&2097155)===1)throw new b.ErrnoError(8);if(b.isDir(s.node.mode))throw new b.ErrnoError(31);if(!s.stream_ops.read)throw new b.ErrnoError(28);var M=typeof g<"u";if(!M)g=s.position;else if(!s.seekable)throw new b.ErrnoError(70);var w=s.stream_ops.read(s,a,u,f,g);return M||(s.position+=w),w},write(s,a,u,f,g,M){if(L(u>=0),f<0||g<0)throw new b.ErrnoError(28);if(b.isClosed(s))throw new b.ErrnoError(8);if((s.flags&2097155)===0)throw new b.ErrnoError(8);if(b.isDir(s.node.mode))throw new b.ErrnoError(31);if(!s.stream_ops.write)throw new b.ErrnoError(28);s.seekable&&s.flags&1024&&b.llseek(s,0,2);var w=typeof g<"u";if(!w)g=s.position;else if(!s.seekable)throw new b.ErrnoError(70);var A=s.stream_ops.write(s,a,u,f,g,M);return w||(s.position+=A),A},mmap(s,a,u,f,g){if((f&2)!==0&&(g&2)===0&&(s.flags&2097155)!==2)throw new b.ErrnoError(2);if((s.flags&2097155)===1)throw new b.ErrnoError(2);if(!s.stream_ops.mmap)throw new b.ErrnoError(43);if(!a)throw new b.ErrnoError(28);return s.stream_ops.mmap(s,a,u,f,g)},msync(s,a,u,f,g){return L(u>=0),s.stream_ops.msync?s.stream_ops.msync(s,a,u,f,g):0},ioctl(s,a,u){if(!s.stream_ops.ioctl)throw new b.ErrnoError(59);return s.stream_ops.ioctl(s,a,u)},readFile(s,a={}){if(a.flags=a.flags||0,a.encoding=a.encoding||"binary",a.encoding!=="utf8"&&a.encoding!=="binary")throw new Error(`Invalid encoding type "${a.encoding}"`);var u=b.open(s,a.flags),f=b.stat(s),g=f.size,M=new Uint8Array(g);return b.read(u,M,0,g,0),a.encoding==="utf8"&&(M=It(M)),b.close(u),M},writeFile(s,a,u={}){u.flags=u.flags||577;var f=b.open(s,u.flags,u.mode);if(typeof a=="string"&&(a=new Uint8Array(tt(a))),ArrayBuffer.isView(a))b.write(f,a,0,a.byteLength,void 0,u.canOwn);else throw new Error("Unsupported data type");b.close(f)},cwd:()=>b.currentPath,chdir(s){var a=b.lookupPath(s,{follow:!0});if(a.node===null)throw new b.ErrnoError(44);if(!b.isDir(a.node.mode))throw new b.ErrnoError(54);var u=b.nodePermissions(a.node,"x");if(u)throw new b.ErrnoError(u);b.currentPath=a.path},createDefaultDirectories(){b.mkdir("/tmp"),b.mkdir("/home"),b.mkdir("/home/web_user")},createDefaultDevices(){b.mkdir("/dev"),b.registerDevice(b.makedev(1,3),{read:()=>0,write:(f,g,M,w,A)=>w,llseek:()=>0}),b.mkdev("/dev/null",b.makedev(1,3)),He.register(b.makedev(5,0),He.default_tty_ops),He.register(b.makedev(6,0),He.default_tty1_ops),b.mkdev("/dev/tty",b.makedev(5,0)),b.mkdev("/dev/tty1",b.makedev(6,0));var s=new Uint8Array(1024),a=0,u=()=>(a===0&&($(s),a=s.byteLength),s[--a]);b.createDevice("/dev","random",u),b.createDevice("/dev","urandom",u),b.mkdir("/dev/shm"),b.mkdir("/dev/shm/tmp")},createSpecialDirectories(){b.mkdir("/proc");var s=b.mkdir("/proc/self");b.mkdir("/proc/self/fd"),b.mount({mount(){var a=b.createNode(s,"fd",16895,73);return a.stream_ops={llseek:Ue.stream_ops.llseek},a.node_ops={lookup(u,f){var g=+f,M=b.getStreamChecked(g),w={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>M.path},id:g+1};return w.parent=w,w},readdir(){return Array.from(b.streams.entries()).filter(([u,f])=>f).map(([u,f])=>u.toString())}},a}},{},"/proc/self/fd")},createStandardStreams(s,a,u){s?b.createDevice("/dev","stdin",s):b.symlink("/dev/tty","/dev/stdin"),a?b.createDevice("/dev","stdout",null,a):b.symlink("/dev/tty","/dev/stdout"),u?b.createDevice("/dev","stderr",null,u):b.symlink("/dev/tty1","/dev/stderr");var f=b.open("/dev/stdin",0),g=b.open("/dev/stdout",1),M=b.open("/dev/stderr",1);L(f.fd===0,`invalid handle for stdin (${f.fd})`),L(g.fd===1,`invalid handle for stdout (${g.fd})`),L(M.fd===2,`invalid handle for stderr (${M.fd})`)},staticInit(){b.nameTable=new Array(4096),b.mount(Ue,{},"/"),b.createDefaultDirectories(),b.createDefaultDevices(),b.createSpecialDirectories(),b.filesystems={MEMFS:Ue}},init(s,a,u){L(!b.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),b.initialized=!0,s??(s=t.stdin),a??(a=t.stdout),u??(u=t.stderr),b.createStandardStreams(s,a,u)},quit(){b.initialized=!1,ta(0);for(var s of b.streams)s&&b.close(s)},findObject(s,a){var u=b.analyzePath(s,a);return u.exists?u.object:null},analyzePath(s,a){try{var u=b.lookupPath(s,{follow:!a});s=u.path}catch{}var f={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var u=b.lookupPath(s,{parent:!0});f.parentExists=!0,f.parentPath=u.path,f.parentObject=u.node,f.name=Y.basename(s),u=b.lookupPath(s,{follow:!a}),f.exists=!0,f.path=u.path,f.object=u.node,f.name=u.node.name,f.isRoot=u.path==="/"}catch(g){f.error=g.errno}return f},createPath(s,a,u,f){s=typeof s=="string"?s:b.getPath(s);for(var g=a.split("/").reverse();g.length;){var M=g.pop();if(M){var w=Y.join2(s,M);try{b.mkdir(w)}catch(A){if(A.errno!=20)throw A}s=w}}return w},createFile(s,a,u,f,g){var M=Y.join2(typeof s=="string"?s:b.getPath(s),a),w=Un(f,g);return b.create(M,w)},createDataFile(s,a,u,f,g,M){var w=a;s&&(s=typeof s=="string"?s:b.getPath(s),w=a?Y.join2(s,a):s);var A=Un(f,g),F=b.create(w,A);if(u){if(typeof u=="string"){for(var W=new Array(u.length),Q=0,ae=u.length;Q<ae;++Q)W[Q]=u.charCodeAt(Q);u=W}b.chmod(F,A|146);var me=b.open(F,577);b.write(me,u,0,u.length,0,M),b.close(me),b.chmod(F,A)}},createDevice(s,a,u,f){var A;var g=Y.join2(typeof s=="string"?s:b.getPath(s),a),M=Un(!!u,!!f);(A=b.createDevice).major??(A.major=64);var w=b.makedev(b.createDevice.major++,0);return b.registerDevice(w,{open(F){F.seekable=!1},close(F){var W;(W=f==null?void 0:f.buffer)!=null&&W.length&&f(10)},read(F,W,Q,ae,me){for(var ce=0,ge=0;ge<ae;ge++){var qe;try{qe=u()}catch{throw new b.ErrnoError(29)}if(qe===void 0&&ce===0)throw new b.ErrnoError(6);if(qe==null)break;ce++,W[Q+ge]=qe}return ce&&(F.node.atime=Date.now()),ce},write(F,W,Q,ae,me){for(var ce=0;ce<ae;ce++)try{f(W[Q+ce])}catch{throw new b.ErrnoError(29)}return ae&&(F.node.mtime=F.node.ctime=Date.now()),ce}}),b.mkdev(g,M,w)},forceLoadFile(s){if(s.isDevice||s.isFolder||s.link||s.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{s.contents=S(s.url),s.usedBytes=s.contents.length}catch{throw new b.ErrnoError(29)}},createLazyFile(s,a,u,f,g){class M{constructor(){Pn(this,"lengthKnown",!1);Pn(this,"chunks",[])}get(ce){if(!(ce>this.length-1||ce<0)){var ge=ce%this.chunkSize,qe=ce/this.chunkSize|0;return this.getter(qe)[ge]}}setDataGetter(ce){this.getter=ce}cacheLength(){var ce=new XMLHttpRequest;if(ce.open("HEAD",u,!1),ce.send(null),!(ce.status>=200&&ce.status<300||ce.status===304))throw new Error("Couldn't load "+u+". Status: "+ce.status);var ge=Number(ce.getResponseHeader("Content-length")),qe,pt=(qe=ce.getResponseHeader("Accept-Ranges"))&&qe==="bytes",at=(qe=ce.getResponseHeader("Content-Encoding"))&&qe==="gzip",Dt=1024*1024;pt||(Dt=ge);var xt=(Ht,sn)=>{if(Ht>sn)throw new Error("invalid range ("+Ht+", "+sn+") or no bytes requested!");if(sn>ge-1)throw new Error("only "+ge+" bytes available! programmer error!");var Pt=new XMLHttpRequest;if(Pt.open("GET",u,!1),ge!==Dt&&Pt.setRequestHeader("Range","bytes="+Ht+"-"+sn),Pt.responseType="arraybuffer",Pt.overrideMimeType&&Pt.overrideMimeType("text/plain; charset=x-user-defined"),Pt.send(null),!(Pt.status>=200&&Pt.status<300||Pt.status===304))throw new Error("Couldn't load "+u+". Status: "+Pt.status);return Pt.response!==void 0?new Uint8Array(Pt.response||[]):tt(Pt.responseText||"")},Kt=this;Kt.setDataGetter(Ht=>{var sn=Ht*Dt,Pt=(Ht+1)*Dt-1;if(Pt=Math.min(Pt,ge-1),typeof Kt.chunks[Ht]>"u"&&(Kt.chunks[Ht]=xt(sn,Pt)),typeof Kt.chunks[Ht]>"u")throw new Error("doXHR failed!");return Kt.chunks[Ht]}),(at||!ge)&&(Dt=ge=1,ge=this.getter(0).length,Dt=ge,U("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=ge,this._chunkSize=Dt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!r)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var w=new M,A={isDevice:!1,contents:w}}else var A={isDevice:!1,url:u};var F=b.createFile(s,a,A,f,g);A.contents?F.contents=A.contents:A.url&&(F.contents=null,F.url=A.url),Object.defineProperties(F,{usedBytes:{get:function(){return this.contents.length}}});var W={},Q=Object.keys(F.stream_ops);Q.forEach(me=>{var ce=F.stream_ops[me];W[me]=(...ge)=>(b.forceLoadFile(F),ce(...ge))});function ae(me,ce,ge,qe,pt){var at=me.node.contents;if(pt>=at.length)return 0;var Dt=Math.min(at.length-pt,qe);if(L(Dt>=0),at.slice)for(var xt=0;xt<Dt;xt++)ce[ge+xt]=at[pt+xt];else for(var xt=0;xt<Dt;xt++)ce[ge+xt]=at.get(pt+xt);return Dt}return W.read=(me,ce,ge,qe,pt)=>(b.forceLoadFile(F),ae(me,ce,ge,qe,pt)),W.mmap=(me,ce,ge,qe,pt)=>{b.forceLoadFile(F);var at=_t();if(!at)throw new b.ErrnoError(48);return ae(me,re,at,ce,ge),{ptr:at,allocated:!0}},F.stream_ops=W,F},absolutePath(){he("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){he("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){he("FS.createLink has been removed; use FS.symlink instead")},joinPath(){he("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){he("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){he("FS.standardizePath has been removed; use PATH.normalize instead")}},gt={DEFAULT_POLLMASK:5,calculateAt(s,a,u){if(Y.isAbs(a))return a;var f;if(s===-100)f=b.cwd();else{var g=gt.getStreamFromFD(s);f=g.path}if(a.length==0){if(!u)throw new b.ErrnoError(44);return f}return f+"/"+a},writeStat(s,a){fe[s>>2]=a.dev,fe[s+4>>2]=a.mode,Te[s+8>>2]=a.nlink,fe[s+12>>2]=a.uid,fe[s+16>>2]=a.gid,fe[s+20>>2]=a.rdev,de[s+24>>3]=BigInt(a.size),fe[s+32>>2]=4096,fe[s+36>>2]=a.blocks;var u=a.atime.getTime(),f=a.mtime.getTime(),g=a.ctime.getTime();return de[s+40>>3]=BigInt(Math.floor(u/1e3)),Te[s+48>>2]=u%1e3*1e3*1e3,de[s+56>>3]=BigInt(Math.floor(f/1e3)),Te[s+64>>2]=f%1e3*1e3*1e3,de[s+72>>3]=BigInt(Math.floor(g/1e3)),Te[s+80>>2]=g%1e3*1e3*1e3,de[s+88>>3]=BigInt(a.ino),0},writeStatFs(s,a){fe[s+4>>2]=a.bsize,fe[s+40>>2]=a.bsize,fe[s+8>>2]=a.blocks,fe[s+12>>2]=a.bfree,fe[s+16>>2]=a.bavail,fe[s+20>>2]=a.files,fe[s+24>>2]=a.ffree,fe[s+28>>2]=a.fsid,fe[s+44>>2]=a.flags,fe[s+36>>2]=a.namelen},doMsync(s,a,u,f,g){if(!b.isFile(a.node.mode))throw new b.ErrnoError(43);if(f&2)return 0;var M=ve.slice(s,s+u);b.msync(a,M,g,u,f)},getStreamFromFD(s){var a=b.getStreamChecked(s);return a},varargs:void 0,getStr(s){var a=lt(s);return a}};function wi(s,a,u){try{var f=gt.getStreamFromFD(s);if(L(!u),f.fd===a)return-28;if(a<0||a>=b.MAX_OPEN_FDS)return-8;var g=b.getStream(a);return g&&b.close(g),b.dupStream(f,a).fd}catch(M){if(typeof b>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}var Yt=()=>{L(gt.varargs!=null);var s=fe[+gt.varargs>>2];return gt.varargs+=4,s},rn=Yt;function On(s,a,u){gt.varargs=u;try{var f=gt.getStreamFromFD(s);switch(a){case 0:{var g=Yt();if(g<0)return-28;for(;b.streams[g];)g++;var M;return M=b.dupStream(f,g),M.fd}case 1:case 2:return 0;case 3:return f.flags;case 4:{var g=Yt();return f.flags|=g,0}case 12:{var g=rn(),w=0;return Oe[g+w>>1]=2,0}case 13:case 14:return 0}return-28}catch(A){if(typeof b>"u"||A.name!=="ErrnoError")throw A;return-A.errno}}function ms(s,a){try{return gt.writeStat(a,b.fstat(s))}catch(u){if(typeof b>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function Jd(s,a,u){gt.varargs=u;try{var f=gt.getStreamFromFD(s);switch(a){case 21509:return f.tty?0:-59;case 21505:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcgets){var g=f.tty.ops.ioctl_tcgets(f),M=rn();fe[M>>2]=g.c_iflag||0,fe[M+4>>2]=g.c_oflag||0,fe[M+8>>2]=g.c_cflag||0,fe[M+12>>2]=g.c_lflag||0;for(var w=0;w<32;w++)re[M+w+17]=g.c_cc[w]||0;return 0}return 0}case 21510:case 21511:case 21512:return f.tty?0:-59;case 21506:case 21507:case 21508:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcsets){for(var M=rn(),A=fe[M>>2],F=fe[M+4>>2],W=fe[M+8>>2],Q=fe[M+12>>2],ae=[],w=0;w<32;w++)ae.push(re[M+w+17]);return f.tty.ops.ioctl_tcsets(f.tty,a,{c_iflag:A,c_oflag:F,c_cflag:W,c_lflag:Q,c_cc:ae})}return 0}case 21519:{if(!f.tty)return-59;var M=rn();return fe[M>>2]=0,0}case 21520:return f.tty?-28:-59;case 21531:{var M=rn();return b.ioctl(f,a,M)}case 21523:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tiocgwinsz){var me=f.tty.ops.ioctl_tiocgwinsz(f.tty),M=rn();Oe[M>>1]=me[0],Oe[M+2>>1]=me[1]}return 0}case 21524:return f.tty?0:-59;case 21515:return f.tty?0:-59;default:return-28}}catch(ce){if(typeof b>"u"||ce.name!=="ErrnoError")throw ce;return-ce.errno}}function Qd(s,a){try{return s=gt.getStr(s),gt.writeStat(a,b.lstat(s))}catch(u){if(typeof b>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function ef(s,a,u,f){try{a=gt.getStr(a);var g=f&256,M=f&4096;return f=f&-6401,L(!f,`unknown flags in __syscall_newfstatat: ${f}`),a=gt.calculateAt(s,a,M),gt.writeStat(u,g?b.lstat(a):b.stat(a))}catch(w){if(typeof b>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function tf(s,a,u,f){gt.varargs=f;try{a=gt.getStr(a),a=gt.calculateAt(s,a);var g=f?Yt():0;return b.open(a,u,g).fd}catch(M){if(typeof b>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function nf(s,a){try{return s=gt.getStr(s),gt.writeStat(a,b.stat(s))}catch(u){if(typeof b>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}var rf=()=>he("native code called abort()"),kt=s=>{for(var a="";;){var u=ve[s++];if(!u)return a;a+=String.fromCharCode(u)}},Ki={},Ti={},_s={},Or=class extends Error{constructor(a){super(a),this.name="BindingError"}},vt=s=>{throw new Or(s)};function sf(s,a,u={}){var f=a.name;if(s||vt(`type "${f}" must have a positive integer typeid pointer`),Ti.hasOwnProperty(s)){if(u.ignoreDuplicateRegistrations)return;vt(`Cannot register type '${f}' twice`)}if(Ti[s]=a,delete _s[s],Ki.hasOwnProperty(s)){var g=Ki[s];delete Ki[s],g.forEach(M=>M())}}function xn(s,a,u={}){if(a.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return sf(s,a,u)}var _l=(s,a,u)=>{switch(a){case 1:return u?f=>re[f]:f=>ve[f];case 2:return u?f=>Oe[f>>1]:f=>be[f>>1];case 4:return u?f=>fe[f>>2]:f=>Te[f>>2];case 8:return u?f=>de[f>>3]:f=>we[f>>3];default:throw new TypeError(`invalid integer width (${a}): ${s}`)}},Ai=s=>{if(s===null)return"null";var a=typeof s;return a==="object"||a==="array"||a==="function"?s.toString():""+s},gl=(s,a,u,f)=>{if(a<u||a>f)throw new TypeError(`Passing a number "${Ai(a)}" from JS side to C/C++ side to an argument of type "${s}", which is outside the valid range [${u}, ${f}]!`)},of=(s,a,u,f,g)=>{a=kt(a);const M=f===0n;let w=A=>A;if(M){const A=u*8;w=F=>BigInt.asUintN(A,F),g=w(g)}xn(s,{name:a,fromWireType:w,toWireType:(A,F)=>{if(typeof F=="number")F=BigInt(F);else if(typeof F!="bigint")throw new TypeError(`Cannot convert "${Ai(F)}" to ${this.name}`);return gl(a,F,f,g),F},argPackAdvance:Bn,readValueFromPointer:_l(a,u,!M),destructorFunction:null})},Bn=8,af=(s,a,u,f)=>{a=kt(a),xn(s,{name:a,fromWireType:function(g){return!!g},toWireType:function(g,M){return M?u:f},argPackAdvance:Bn,readValueFromPointer:function(g){return this.fromWireType(ve[g])},destructorFunction:null})},cf=s=>({count:s.count,deleteScheduled:s.deleteScheduled,preservePointerOnDelete:s.preservePointerOnDelete,ptr:s.ptr,ptrType:s.ptrType,smartPtr:s.smartPtr,smartPtrType:s.smartPtrType}),Xo=s=>{function a(u){return u.$$.ptrType.registeredClass.name}vt(a(s)+" instance already deleted")},$o=!1,vl=s=>{},lf=s=>{s.smartPtr?s.smartPtrType.rawDestructor(s.smartPtr):s.ptrType.registeredClass.rawDestructor(s.ptr)},yl=s=>{s.count.value-=1;var a=s.count.value===0;a&&lf(s)},xl=(s,a,u)=>{if(a===u)return s;if(u.baseClass===void 0)return null;var f=xl(s,a,u.baseClass);return f===null?null:u.downcast(f)},Sl={},uf={},hf=(s,a)=>{for(a===void 0&&vt("ptr should not be undefined");s.baseClass;)a=s.upcast(a),s=s.baseClass;return a},df=(s,a)=>(a=hf(s,a),uf[a]),ff=class extends Error{constructor(a){super(a),this.name="InternalError"}},gs=s=>{throw new ff(s)},vs=(s,a)=>{(!a.ptrType||!a.ptr)&&gs("makeClassHandle requires ptr and ptrType");var u=!!a.smartPtrType,f=!!a.smartPtr;return u!==f&&gs("Both smartPtrType and smartPtr must be specified"),a.count={value:1},Br(Object.create(s,{$$:{value:a,writable:!0}}))};function Ml(s){var a=this.getPointee(s);if(!a)return this.destructor(s),null;var u=df(this.registeredClass,a);if(u!==void 0){if(u.$$.count.value===0)return u.$$.ptr=a,u.$$.smartPtr=s,u.clone();var f=u.clone();return this.destructor(s),f}function g(){return this.isSmartPointer?vs(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:a,smartPtrType:this,smartPtr:s}):vs(this.registeredClass.instancePrototype,{ptrType:this,ptr:s})}var M=this.registeredClass.getActualType(a),w=Sl[M];if(!w)return g.call(this);var A;this.isConst?A=w.constPointerType:A=w.pointerType;var F=xl(a,this.registeredClass,A.registeredClass);return F===null?g.call(this):this.isSmartPointer?vs(A.registeredClass.instancePrototype,{ptrType:A,ptr:F,smartPtrType:this,smartPtr:s}):vs(A.registeredClass.instancePrototype,{ptrType:A,ptr:F})}var Br=s=>typeof FinalizationRegistry>"u"?(Br=a=>a,s):($o=new FinalizationRegistry(a=>{console.warn(a.leakWarning),yl(a.$$)}),Br=a=>{var u=a.$$,f=!!u.smartPtr;if(f){var g={$$:u},M=u.ptrType.registeredClass,w=new Error(`Embind found a leaked C++ instance ${M.name} <${pe(u.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(w,Ml),g.leakWarning=w.stack.replace(/^Error: /,""),$o.register(a,g,a)}return a},vl=a=>$o.unregister(a),Br(s)),pf=()=>{let s=ys.prototype;Object.assign(s,{isAliasOf(u){if(!(this instanceof ys)||!(u instanceof ys))return!1;var f=this.$$.ptrType.registeredClass,g=this.$$.ptr;u.$$=u.$$;for(var M=u.$$.ptrType.registeredClass,w=u.$$.ptr;f.baseClass;)g=f.upcast(g),f=f.baseClass;for(;M.baseClass;)w=M.upcast(w),M=M.baseClass;return f===M&&g===w},clone(){if(this.$$.ptr||Xo(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var u=Br(Object.create(Object.getPrototypeOf(this),{$$:{value:cf(this.$$)}}));return u.$$.count.value+=1,u.$$.deleteScheduled=!1,u},delete(){this.$$.ptr||Xo(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vt("Object already scheduled for deletion"),vl(this),yl(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Xo(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const a=Symbol.dispose;a&&(s[a]=s.delete)};function ys(){}var xs=(s,a)=>Object.defineProperty(a,"name",{value:s}),jo=(s,a,u)=>{if(s[a].overloadTable===void 0){var f=s[a];s[a]=function(...g){return s[a].overloadTable.hasOwnProperty(g.length)||vt(`Function '${u}' called with an invalid number of arguments (${g.length}) - expects one of (${s[a].overloadTable})!`),s[a].overloadTable[g.length].apply(this,g)},s[a].overloadTable=[],s[a].overloadTable[f.argCount]=f}},Yo=(s,a,u)=>{t.hasOwnProperty(s)?((u===void 0||t[s].overloadTable!==void 0&&t[s].overloadTable[u]!==void 0)&&vt(`Cannot register public name '${s}' twice`),jo(t,s,s),t[s].overloadTable.hasOwnProperty(u)&&vt(`Cannot register multiple overloads of a function with the same number of arguments (${u})!`),t[s].overloadTable[u]=a):(t[s]=a,t[s].argCount=u)},mf=48,_f=57,gf=s=>{L(typeof s=="string"),s=s.replace(/[^a-zA-Z0-9_]/g,"$");var a=s.charCodeAt(0);return a>=mf&&a<=_f?`_${s}`:s};function vf(s,a,u,f,g,M,w,A){this.name=s,this.constructor=a,this.instancePrototype=u,this.rawDestructor=f,this.baseClass=g,this.getActualType=M,this.upcast=w,this.downcast=A,this.pureVirtualFunctions=[]}var Ss=(s,a,u)=>{for(;a!==u;)a.upcast||vt(`Expected null or instance of ${u.name}, got an instance of ${a.name}`),s=a.upcast(s),a=a.baseClass;return s};function yf(s,a){if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),0;a.$$||vt(`Cannot pass "${Ai(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`);var u=a.$$.ptrType.registeredClass,f=Ss(a.$$.ptr,u,this.registeredClass);return f}function xf(s,a){var u;if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),this.isSmartPointer?(u=this.rawConstructor(),s!==null&&s.push(this.rawDestructor,u),u):0;(!a||!a.$$)&&vt(`Cannot pass "${Ai(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&a.$$.ptrType.isConst&&vt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);var f=a.$$.ptrType.registeredClass;if(u=Ss(a.$$.ptr,f,this.registeredClass),this.isSmartPointer)switch(a.$$.smartPtr===void 0&&vt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:a.$$.smartPtrType===this?u=a.$$.smartPtr:vt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:u=a.$$.smartPtr;break;case 2:if(a.$$.smartPtrType===this)u=a.$$.smartPtr;else{var g=a.clone();u=this.rawShare(u,zt.toHandle(()=>g.delete())),s!==null&&s.push(this.rawDestructor,u)}break;default:vt("Unsupporting sharing policy")}return u}function Sf(s,a){if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),0;a.$$||vt(`Cannot pass "${Ai(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`),a.$$.ptrType.isConst&&vt(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);var u=a.$$.ptrType.registeredClass,f=Ss(a.$$.ptr,u,this.registeredClass);return f}function Ms(s){return this.fromWireType(Te[s>>2])}var Mf=()=>{Object.assign(Es.prototype,{getPointee(s){return this.rawGetPointee&&(s=this.rawGetPointee(s)),s},destructor(s){var a;(a=this.rawDestructor)==null||a.call(this,s)},argPackAdvance:Bn,readValueFromPointer:Ms,fromWireType:Ml})};function Es(s,a,u,f,g,M,w,A,F,W,Q){this.name=s,this.registeredClass=a,this.isReference=u,this.isConst=f,this.isSmartPointer=g,this.pointeeType=M,this.sharingPolicy=w,this.rawGetPointee=A,this.rawConstructor=F,this.rawShare=W,this.rawDestructor=Q,!g&&a.baseClass===void 0?f?(this.toWireType=yf,this.destructorFunction=null):(this.toWireType=Sf,this.destructorFunction=null):this.toWireType=xf}var El=(s,a,u)=>{t.hasOwnProperty(s)||gs("Replacing nonexistent public symbol"),t[s].overloadTable!==void 0&&u!==void 0?t[s].overloadTable[u]=a:(t[s]=a,t[s].argCount=u)},bl=[],bs,xe=s=>{var a=bl[s];return a||(bl[s]=a=bs.get(s)),L(bs.get(s)==a,"JavaScript-side Wasm function table mirror is out of date!"),a},kn=(s,a,u=!1)=>{L(!u,"Async bindings are only supported with JSPI."),s=kt(s);function f(){var M=xe(a);return M}var g=f();return typeof g!="function"&&vt(`unknown function pointer with signature ${s}: ${a}`),g};class Ef extends Error{}var wl=s=>{var a=Wl(s),u=kt(a);return Hn(a),u},Ci=(s,a)=>{var u=[],f={};function g(M){if(!f[M]&&!Ti[M]){if(_s[M]){_s[M].forEach(g);return}u.push(M),f[M]=!0}}throw a.forEach(g),new Ef(`${s}: `+u.map(wl).join([", "]))},Rn=(s,a,u)=>{s.forEach(A=>_s[A]=a);function f(A){var F=u(A);F.length!==s.length&&gs("Mismatched type converter count");for(var W=0;W<s.length;++W)xn(s[W],F[W])}var g=new Array(a.length),M=[],w=0;a.forEach((A,F)=>{Ti.hasOwnProperty(A)?g[F]=Ti[A]:(M.push(A),Ki.hasOwnProperty(A)||(Ki[A]=[]),Ki[A].push(()=>{g[F]=Ti[A],++w,w===M.length&&f(g)}))}),M.length===0&&f(g)},bf=(s,a,u,f,g,M,w,A,F,W,Q,ae,me)=>{Q=kt(Q),M=kn(g,M),A&&(A=kn(w,A)),W&&(W=kn(F,W)),me=kn(ae,me);var ce=gf(Q);Yo(ce,function(){Ci(`Cannot construct ${Q} due to unbound types`,[f])}),Rn([s,a,u],f?[f]:[],ge=>{var Pt;ge=ge[0];var qe,pt;f?(qe=ge.registeredClass,pt=qe.instancePrototype):pt=ys.prototype;var at=xs(Q,function(...ci){if(Object.getPrototypeOf(this)!==Dt)throw new Or(`Use 'new' to construct ${Q}`);if(xt.constructor_body===void 0)throw new Or(`${Q} has no accessible constructor`);var Ls=xt.constructor_body[ci.length];if(Ls===void 0)throw new Or(`Tried to invoke ctor of ${Q} with invalid number of parameters (${ci.length}) - expected (${Object.keys(xt.constructor_body).toString()}) parameters instead!`);return Ls.apply(this,ci)}),Dt=Object.create(pt,{constructor:{value:at}});at.prototype=Dt;var xt=new vf(Q,at,Dt,me,qe,M,A,W);xt.baseClass&&((Pt=xt.baseClass).__derivedClasses??(Pt.__derivedClasses=[]),xt.baseClass.__derivedClasses.push(xt));var Kt=new Es(Q,xt,!0,!1,!1),Ht=new Es(Q+"*",xt,!1,!1,!1),sn=new Es(Q+" const*",xt,!1,!0,!1);return Sl[s]={pointerType:Ht,constPointerType:sn},El(ce,at),[Kt,Ht,sn]})},qo=s=>{for(;s.length;){var a=s.pop(),u=s.pop();u(a)}};function Tl(s){for(var a=1;a<s.length;++a)if(s[a]!==null&&s[a].destructorFunction===void 0)return!0;return!1}function wf(s,a,u,f,g){if(s<a||s>u){var M=a==u?a:`${a} to ${u}`;g(`function ${f} called with ${s} arguments, expected ${M}`)}}function Tf(s,a,u,f){var g=Tl(s),M=s.length-2,w=[],A=["fn"];a&&A.push("thisWired");for(var F=0;F<M;++F)w.push(`arg${F}`),A.push(`arg${F}Wired`);w=w.join(","),A=A.join(",");var W=`return function (${w}) {
`;W+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,g&&(W+=`var destructors = [];
`);var Q=g?"destructors":"null",ae=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];a&&(W+=`var thisWired = classParam['toWireType'](${Q}, this);
`);for(var F=0;F<M;++F)W+=`var arg${F}Wired = argType${F}['toWireType'](${Q}, arg${F});
`,ae.push(`argType${F}`);if(W+=(u||f?"var rv = ":"")+`invoker(${A});
`,g)W+=`runDestructors(destructors);
`;else for(var F=a?1:2;F<s.length;++F){var me=F===1?"thisWired":"arg"+(F-2)+"Wired";s[F].destructorFunction!==null&&(W+=`${me}_dtor(${me});
`,ae.push(`${me}_dtor`))}return u&&(W+=`var ret = retType['fromWireType'](rv);
return ret;
`),W+=`}
`,ae.push("checkArgCount","minArgs","maxArgs"),W=`if (arguments.length !== ${ae.length}){ throw new Error(humanName + "Expected ${ae.length} closure arguments " + arguments.length + " given."); }
${W}`,[ae,W]}function Af(s){for(var a=s.length-2,u=s.length-1;u>=2&&s[u].optional;--u)a--;return a}function ws(s,a,u,f,g,M){var w=a.length;w<2&&vt("argTypes array size mismatch! Must at least get return value and 'this' types!"),L(!M,"Async bindings are only supported with JSPI.");for(var A=a[1]!==null&&u!==null,F=Tl(a),W=a[0].name!=="void",Q=w-2,ae=Af(a),me=[s,vt,f,g,qo,a[0],a[1]],ce=0;ce<w-2;++ce)me.push(a[ce+2]);if(!F)for(var ce=A?1:2;ce<a.length;++ce)a[ce].destructorFunction!==null&&me.push(a[ce].destructorFunction);me.push(wf,ae,Q);let[ge,qe]=Tf(a,A,W,M);var pt=new Function(...ge,qe)(...me);return xs(s,pt)}var Ts=(s,a)=>{for(var u=[],f=0;f<s;f++)u.push(Te[a+f*4>>2]);return u},Zo=s=>{s=s.trim();const a=s.indexOf("(");return a===-1?s:(L(s.endsWith(")"),"Parentheses for argument names should match."),s.slice(0,a))},Cf=(s,a,u,f,g,M,w,A,F)=>{var W=Ts(u,f);a=kt(a),a=Zo(a),M=kn(g,M,A),Rn([],[s],Q=>{Q=Q[0];var ae=`${Q.name}.${a}`;function me(){Ci(`Cannot call ${ae} due to unbound types`,W)}a.startsWith("@@")&&(a=Symbol[a.substring(2)]);var ce=Q.registeredClass.constructor;return ce[a]===void 0?(me.argCount=u-1,ce[a]=me):(jo(ce,a,ae),ce[a].overloadTable[u-1]=me),Rn([],W,ge=>{var qe=[ge[0],null].concat(ge.slice(1)),pt=ws(ae,qe,null,M,w,A);if(ce[a].overloadTable===void 0?(pt.argCount=u-1,ce[a]=pt):ce[a].overloadTable[u-1]=pt,Q.registeredClass.__derivedClasses)for(const at of Q.registeredClass.__derivedClasses)at.constructor.hasOwnProperty(a)||(at.constructor[a]=pt);return[]}),[]})},Rf=(s,a,u,f,g,M)=>{L(a>0);var w=Ts(a,u);g=kn(f,g),Rn([],[s],A=>{A=A[0];var F=`constructor ${A.name}`;if(A.registeredClass.constructor_body===void 0&&(A.registeredClass.constructor_body=[]),A.registeredClass.constructor_body[a-1]!==void 0)throw new Or(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${A.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return A.registeredClass.constructor_body[a-1]=()=>{Ci(`Cannot construct ${A.name} due to unbound types`,w)},Rn([],w,W=>(W.splice(1,0,null),A.registeredClass.constructor_body[a-1]=ws(F,W,null,g,M),[])),[]})},Pf=(s,a,u,f,g,M,w,A,F,W)=>{var Q=Ts(u,f);a=kt(a),a=Zo(a),M=kn(g,M,F),Rn([],[s],ae=>{ae=ae[0];var me=`${ae.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]),A&&ae.registeredClass.pureVirtualFunctions.push(a);function ce(){Ci(`Cannot call ${me} due to unbound types`,Q)}var ge=ae.registeredClass.instancePrototype,qe=ge[a];return qe===void 0||qe.overloadTable===void 0&&qe.className!==ae.name&&qe.argCount===u-2?(ce.argCount=u-2,ce.className=ae.name,ge[a]=ce):(jo(ge,a,me),ge[a].overloadTable[u-2]=ce),Rn([],Q,pt=>{var at=ws(me,pt,ae,M,w,F);return ge[a].overloadTable===void 0?(at.argCount=u-2,ge[a]=at):ge[a].overloadTable[u-2]=at,[]}),[]})},Al=(s,a,u)=>(s instanceof Object||vt(`${u} with invalid "this": ${s}`),s instanceof a.registeredClass.constructor||vt(`${u} incompatible with "this" of type ${s.constructor.name}`),s.$$.ptr||vt(`cannot call emscripten binding method ${u} on deleted object`),Ss(s.$$.ptr,s.$$.ptrType.registeredClass,a.registeredClass)),Df=(s,a,u,f,g,M,w,A,F,W)=>{a=kt(a),g=kn(f,g),Rn([],[s],Q=>{Q=Q[0];var ae=`${Q.name}.${a}`,me={get(){Ci(`Cannot access ${ae} due to unbound types`,[u,w])},enumerable:!0,configurable:!0};return F?me.set=()=>Ci(`Cannot access ${ae} due to unbound types`,[u,w]):me.set=ce=>vt(ae+" is a read-only property"),Object.defineProperty(Q.registeredClass.instancePrototype,a,me),Rn([],F?[u,w]:[u],ce=>{var ge=ce[0],qe={get(){var at=Al(this,Q,ae+" getter");return ge.fromWireType(g(M,at))},enumerable:!0};if(F){F=kn(A,F);var pt=ce[1];qe.set=function(at){var Dt=Al(this,Q,ae+" setter"),xt=[];F(W,Dt,pt.toWireType(xt,at)),qo(xt)}}return Object.defineProperty(Q.registeredClass.instancePrototype,a,qe),[]}),[]})},Lf=(s,a,u)=>{s=kt(s),Rn([],[a],f=>(f=f[0],t[s]=f.fromWireType(u),[]))},Cl=[],zn=[0,1,,1,null,1,!0,1,!1,1],Ko=s=>{s>9&&--zn[s+1]===0&&(L(zn[s]!==void 0,"Decref for unallocated handle."),zn[s]=void 0,Cl.push(s))},zt={toValue:s=>(s||vt(`Cannot use deleted val. handle = ${s}`),L(s===2||zn[s]!==void 0&&s%2===0,`invalid handle: ${s}`),zn[s]),toHandle:s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const a=Cl.pop()||zn.length;return zn[a]=s,zn[a+1]=1,a}}}},Rl={name:"emscripten::val",fromWireType:s=>{var a=zt.toValue(s);return Ko(s),a},toWireType:(s,a)=>zt.toHandle(a),argPackAdvance:Bn,readValueFromPointer:Ms,destructorFunction:null},Pl=s=>xn(s,Rl),If=(s,a,u)=>{switch(a){case 1:return u?function(f){return this.fromWireType(re[f])}:function(f){return this.fromWireType(ve[f])};case 2:return u?function(f){return this.fromWireType(Oe[f>>1])}:function(f){return this.fromWireType(be[f>>1])};case 4:return u?function(f){return this.fromWireType(fe[f>>2])}:function(f){return this.fromWireType(Te[f>>2])};default:throw new TypeError(`invalid integer width (${a}): ${s}`)}},Nf=(s,a,u,f)=>{a=kt(a);function g(){}g.values={},xn(s,{name:a,constructor:g,fromWireType:function(M){return this.constructor.values[M]},toWireType:(M,w)=>w.value,argPackAdvance:Bn,readValueFromPointer:If(a,u,f),destructorFunction:null}),Yo(a,g)},As=(s,a)=>{var u=Ti[s];return u===void 0&&vt(`${a} has unknown type ${wl(s)}`),u},Ff=(s,a,u)=>{var f=As(s,"enum");a=kt(a);var g=f.constructor,M=Object.create(f.constructor.prototype,{value:{value:u},constructor:{value:xs(`${f.name}_${a}`,function(){})}});g.values[u]=M,g[a]=M},Uf=(s,a)=>{switch(a){case 4:return function(u){return this.fromWireType(Qe[u>>2])};case 8:return function(u){return this.fromWireType(dt[u>>3])};default:throw new TypeError(`invalid float width (${a}): ${s}`)}},Of=(s,a,u)=>{a=kt(a),xn(s,{name:a,fromWireType:f=>f,toWireType:(f,g)=>{if(typeof g!="number"&&typeof g!="boolean")throw new TypeError(`Cannot convert ${Ai(g)} to ${this.name}`);return g},argPackAdvance:Bn,readValueFromPointer:Uf(a,u),destructorFunction:null})},Bf=(s,a,u,f,g,M,w,A)=>{var F=Ts(a,u);s=kt(s),s=Zo(s),g=kn(f,g,w),Yo(s,function(){Ci(`Cannot call ${s} due to unbound types`,F)},a-1),Rn([],F,W=>{var Q=[W[0],null].concat(W.slice(1));return El(s,ws(s,Q,null,g,M,w),a-1),[]})},kf=(s,a,u,f,g)=>{a=kt(a);const M=f===0;let w=F=>F;if(M){var A=32-8*u;w=F=>F<<A>>>A,g=w(g)}xn(s,{name:a,fromWireType:w,toWireType:(F,W)=>{if(typeof W!="number"&&typeof W!="boolean")throw new TypeError(`Cannot convert "${Ai(W)}" to ${a}`);return gl(a,W,f,g),W},argPackAdvance:Bn,readValueFromPointer:_l(a,u,f!==0),destructorFunction:null})},zf=(s,a,u)=>{var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],g=f[a];function M(w){var A=Te[w>>2],F=Te[w+4>>2];return new g(re.buffer,F,A)}u=kt(u),xn(s,{name:u,fromWireType:M,argPackAdvance:Bn,readValueFromPointer:M},{ignoreDuplicateRegistrations:!0})},Hf=Object.assign({optional:!0},Rl),Vf=(s,a)=>{xn(s,Hf)},Ri=(s,a,u)=>(L(typeof u=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),$e(s,ve,a,u)),Gf=(s,a)=>{a=kt(a),xn(s,{name:a,fromWireType(u){for(var f=Te[u>>2],g=u+4,M,w,A=g,w=0;w<=f;++w){var F=g+w;if(w==f||ve[F]==0){var W=F-A,Q=lt(A,W);M===void 0?M=Q:(M+="\0",M+=Q),A=F+1}}return Hn(u),M},toWireType(u,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g,M=typeof f=="string";M||ArrayBuffer.isView(f)&&f.BYTES_PER_ELEMENT==1||vt("Cannot pass non-string to std::string"),M?g=Xe(f):g=f.length;var w=ea(4+g+1),A=w+4;return Te[w>>2]=g,M?Ri(f,A,g+1):ve.set(f,A),u!==null&&u.push(Hn,w),w},argPackAdvance:Bn,readValueFromPointer:Ms,destructorFunction(u){Hn(u)}})},Dl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Wf=(s,a)=>{L(s%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var u=s>>1,f=u+a/2,g=u;!(g>=f)&&be[g];)++g;if(g-u>16&&Dl)return Dl.decode(be.subarray(u,g));for(var M="",w=u;!(w>=f);++w){var A=be[w];if(A==0)break;M+=String.fromCharCode(A)}return M},Xf=(s,a,u)=>{if(L(a%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),L(typeof u=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??(u=2147483647),u<2)return 0;u-=2;for(var f=a,g=u<s.length*2?u/2:s.length,M=0;M<g;++M){var w=s.charCodeAt(M);Oe[a>>1]=w,a+=2}return Oe[a>>1]=0,a-f},$f=s=>s.length*2,jf=(s,a)=>{L(s%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var u="",f=0;!(f>=a/4);f++){var g=fe[s+f*4>>2];if(!g)break;u+=String.fromCodePoint(g)}return u},Yf=(s,a,u)=>{if(L(a%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),L(typeof u=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??(u=2147483647),u<4)return 0;for(var f=a,g=f+u-4,M=0;M<s.length;++M){var w=s.codePointAt(M);if(w>65535&&M++,fe[a>>2]=w,a+=4,a+4>g)break}return fe[a>>2]=0,a-f},qf=s=>{for(var a=0,u=0;u<s.length;++u){var f=s.codePointAt(u);f>65535&&u++,a+=4}return a},Zf=(s,a,u)=>{u=kt(u);var f,g,M,w;a===2?(f=Wf,g=Xf,w=$f,M=A=>be[A>>1]):a===4&&(f=jf,g=Yf,w=qf,M=A=>Te[A>>2]),xn(s,{name:u,fromWireType:A=>{for(var F=Te[A>>2],W,Q=A+4,ae=0;ae<=F;++ae){var me=A+4+ae*a;if(ae==F||M(me)==0){var ce=me-Q,ge=f(Q,ce);W===void 0?W=ge:(W+="\0",W+=ge),Q=me+a}}return Hn(A),W},toWireType:(A,F)=>{typeof F!="string"&&vt(`Cannot pass non-string to C++ string type ${u}`);var W=w(F),Q=ea(4+W+a);return Te[Q>>2]=W/a,g(F,Q+4,W+a),A!==null&&A.push(Hn,Q),Q},argPackAdvance:Bn,readValueFromPointer:Ms,destructorFunction(A){Hn(A)}})},Kf=(s,a)=>{Pl(s)},Jf=(s,a)=>{a=kt(a),xn(s,{isVoid:!0,name:a,argPackAdvance:0,fromWireType:()=>{},toWireType:(u,f)=>{}})},Qf=()=>{throw new B},Ll=(s,a,u)=>{var f=[],g=s.toWireType(f,u);return f.length&&(Te[a>>2]=zt.toHandle(f)),g},ep=(s,a,u)=>(s=zt.toValue(s),a=As(a,"emval::as"),Ll(a,u,s)),Cs=[],tp=(s,a,u,f)=>(s=Cs[s],a=zt.toValue(a),s(null,a,u,f)),np={},Jo=s=>{var a=np[s];return a===void 0?kt(s):a},ip=(s,a,u,f,g)=>(s=Cs[s],a=zt.toValue(a),u=Jo(u),s(a,a[u],f,g)),Il=()=>globalThis,rp=s=>s===0?zt.toHandle(Il()):(s=Jo(s),zt.toHandle(Il()[s])),sp=s=>{var a=Cs.length;return Cs.push(s),a},op=(s,a)=>{for(var u=new Array(s),f=0;f<s;++f)u[f]=As(Te[a+f*4>>2],`parameter ${f}`);return u},ap=(s,a,u)=>{var f=op(s,a),g=f.shift();s--;var M=`return function (obj, func, destructorsRef, args) {
`,w=0,A=[];u===0&&A.push("obj");for(var F=["retType"],W=[g],Q=0;Q<s;++Q)A.push(`arg${Q}`),F.push(`argType${Q}`),W.push(f[Q]),M+=`  var arg${Q} = argType${Q}.readValueFromPointer(args${w?"+"+w:""});
`,w+=f[Q].argPackAdvance;var ae=u===1?"new func":"func.call";M+=`  var rv = ${ae}(${A.join(", ")});
`,g.isVoid||(F.push("emval_returnValue"),W.push(Ll),M+=`  return emval_returnValue(retType, destructorsRef, rv);
`),M+=`};
`;var me=new Function(...F,M)(...W),ce=`methodCaller<(${f.map(ge=>ge.name).join(", ")}) => ${g.name}>`;return sp(xs(ce,me))},cp=(s,a)=>(s=zt.toValue(s),a=zt.toValue(a),zt.toHandle(s[a])),lp=s=>{s>9&&(zn[s+1]+=1)},up=s=>(s=zt.toValue(s),typeof s=="number"),hp=s=>(s=zt.toValue(s),typeof s=="string"),dp=()=>zt.toHandle([]),fp=s=>zt.toHandle(Jo(s)),pp=s=>{var a=zt.toValue(s);qo(a),Ko(s)},mp=(s,a)=>{s=As(s,"_emval_take_value");var u=s.readValueFromPointer(a);return zt.toHandle(u)},_p=s=>{throw s=zt.toValue(s),s},gp=s=>s%4===0&&(s%100!==0||s%400===0),vp=[0,31,60,91,121,152,182,213,244,274,305,335],yp=[0,31,59,90,120,151,181,212,243,273,304,334],Nl=s=>{var a=gp(s.getFullYear()),u=a?vp:yp,f=u[s.getMonth()]+s.getDate()-1;return f},xp=9007199254740992,Sp=-9007199254740992,Fl=s=>s<Sp||s>xp?NaN:Number(s);function Mp(s,a){s=Fl(s);var u=new Date(s*1e3);fe[a>>2]=u.getSeconds(),fe[a+4>>2]=u.getMinutes(),fe[a+8>>2]=u.getHours(),fe[a+12>>2]=u.getDate(),fe[a+16>>2]=u.getMonth(),fe[a+20>>2]=u.getFullYear()-1900,fe[a+24>>2]=u.getDay();var f=Nl(u)|0;fe[a+28>>2]=f,fe[a+36>>2]=-(u.getTimezoneOffset()*60);var g=new Date(u.getFullYear(),0,1),M=new Date(u.getFullYear(),6,1).getTimezoneOffset(),w=g.getTimezoneOffset(),A=(M!=w&&u.getTimezoneOffset()==Math.min(w,M))|0;fe[a+32>>2]=A}var Ep=function(s){var a=(()=>{var u=new Date(fe[s+20>>2]+1900,fe[s+16>>2],fe[s+12>>2],fe[s+8>>2],fe[s+4>>2],fe[s>>2],0),f=fe[s+32>>2],g=u.getTimezoneOffset(),M=new Date(u.getFullYear(),0,1),w=new Date(u.getFullYear(),6,1).getTimezoneOffset(),A=M.getTimezoneOffset(),F=Math.min(A,w);if(f<0)fe[s+32>>2]=+(w!=A&&F==g);else if(f>0!=(F==g)){var W=Math.max(A,w),Q=f>0?F:W;u.setTime(u.getTime()+(Q-g)*6e4)}fe[s+24>>2]=u.getDay();var ae=Nl(u)|0;fe[s+28>>2]=ae,fe[s>>2]=u.getSeconds(),fe[s+4>>2]=u.getMinutes(),fe[s+8>>2]=u.getHours(),fe[s+12>>2]=u.getDate(),fe[s+16>>2]=u.getMonth(),fe[s+20>>2]=u.getYear();var me=u.getTime();return isNaN(me)?-1:me/1e3})();return BigInt(a)},bp=(s,a,u,f)=>{var g=new Date().getFullYear(),M=new Date(g,0,1),w=new Date(g,6,1),A=M.getTimezoneOffset(),F=w.getTimezoneOffset(),W=Math.max(A,F);Te[s>>2]=W*60,fe[a>>2]=+(A!=F);var Q=ce=>{var ge=ce>=0?"-":"+",qe=Math.abs(ce),pt=String(Math.floor(qe/60)).padStart(2,"0"),at=String(qe%60).padStart(2,"0");return`UTC${ge}${pt}${at}`},ae=Q(A),me=Q(F);L(ae),L(me),L(Xe(ae)<=16,`timezone name truncated to fit in TZNAME_MAX (${ae})`),L(Xe(me)<=16,`timezone name truncated to fit in TZNAME_MAX (${me})`),F<A?(Ri(ae,u,17),Ri(me,f,17)):(Ri(ae,f,17),Ri(me,u,17))},Ul=()=>performance.now(),Ol=()=>Date.now(),wp=s=>s>=0&&s<=3;function Tp(s,a,u){if(!wp(s))return 28;var f;s===0?f=Ol():f=Ul();var g=Math.round(f*1e3*1e3);return de[u>>3]=BigInt(g),0}var Rs=[],Ap=(s,a)=>{L(Array.isArray(Rs)),L(a%16==0),Rs.length=0;for(var u;u=ve[s++];){var f=String.fromCharCode(u),g=["d","f","i","p"];g.push("j"),L(g.includes(f),`Invalid character ${u}("${f}") in readEmAsmArgs! Use only [${g}], and do not specify "v" for void return argument.`);var M=u!=105;M&=u!=112,a+=M&&a%8?4:0,Rs.push(u==112?Te[a>>2]:u==106?de[a>>3]:u==105?fe[a>>2]:dt[a>>3]),a+=M?8:4}return Rs},Cp=(s,a,u)=>{var f=Ap(a,u);return L(Gl.hasOwnProperty(s),`No EM_ASM constant found at address ${s}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),Gl[s](...f)},Rp=(s,a,u)=>Cp(s,a,u),Bl=()=>2147483648,Pp=()=>Bl(),Dp=(s,a)=>(L(a,"alignment argument is required"),Math.ceil(s/a)*a),Lp=s=>{var a=mt.buffer,u=(s-a.byteLength+65535)/65536|0;try{return mt.grow(u),je(),1}catch(f){P(`growMemory: Attempted to grow heap from ${a.byteLength} bytes to ${s} bytes, but got error: ${f}`)}},Ip=s=>{var a=ve.length;s>>>=0,L(s>a);var u=Bl();if(s>u)return P(`Cannot enlarge memory, requested ${s} bytes, but the limit is ${u} bytes!`),!1;for(var f=1;f<=4;f*=2){var g=a*(1+.2/f);g=Math.min(g,s+100663296);var M=Math.min(u,Dp(Math.max(s,g),65536)),w=Lp(M);if(w)return!0}return P(`Failed to grow the heap from ${a} bytes to ${M} bytes, not enough memory!`),!1},Qo={},Np=()=>h||"./this.program",kr=()=>{if(!kr.strings){var s=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:s,_:Np()};for(var u in Qo)Qo[u]===void 0?delete a[u]:a[u]=Qo[u];var f=[];for(var u in a)f.push(`${u}=${a[u]}`);kr.strings=f}return kr.strings},Fp=(s,a)=>{var u=0,f=0;for(var g of kr()){var M=a+u;Te[s+f>>2]=M,u+=Ri(g,M,1/0)+1,f+=4}return 0},Up=(s,a)=>{var u=kr();Te[s>>2]=u.length;var f=0;for(var g of u)f+=Xe(g)+1;return Te[a>>2]=f,0},kl=0,zl=()=>se||kl>0,Op=s=>{var a;zl()||((a=t.onExit)==null||a.call(t,s),j=!0),d(s,new We(s))},Bp=(s,a)=>{if(q_(),zl()&&!a){var u=`program exited (with status: ${s}), but keepRuntimeAlive() is set (counter=${kl}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Je==null||Je(u),P(u)}Op(s)},kp=Bp;function zp(s){try{var a=gt.getStreamFromFD(s);return b.close(a),0}catch(u){if(typeof b>"u"||u.name!=="ErrnoError")throw u;return u.errno}}var Hp=(s,a,u,f)=>{for(var g=0,M=0;M<u;M++){var w=Te[a>>2],A=Te[a+4>>2];a+=8;var F=b.read(s,re,w,A,f);if(F<0)return-1;if(g+=F,F<A)break}return g};function Vp(s,a,u,f){try{var g=gt.getStreamFromFD(s),M=Hp(g,a,u);return Te[f>>2]=M,0}catch(w){if(typeof b>"u"||w.name!=="ErrnoError")throw w;return w.errno}}function Gp(s,a,u,f){a=Fl(a);try{if(isNaN(a))return 61;var g=gt.getStreamFromFD(s);return b.llseek(g,a,u),de[f>>3]=BigInt(g.position),g.getdents&&a===0&&u===0&&(g.getdents=null),0}catch(M){if(typeof b>"u"||M.name!=="ErrnoError")throw M;return M.errno}}var Wp=(s,a,u,f)=>{for(var g=0,M=0;M<u;M++){var w=Te[a>>2],A=Te[a+4>>2];a+=8;var F=b.write(s,re,w,A,f);if(F<0)return-1;if(g+=F,F<A)break}return g};function Xp(s,a,u,f){try{var g=gt.getStreamFromFD(s),M=Wp(g,a,u);return Te[f>>2]=M,0}catch(w){if(typeof b>"u"||w.name!=="ErrnoError")throw w;return w.errno}}var $p=s=>s,jp=s=>{var a=t["_"+s];return L(a,"Cannot call unknown function "+s+", make sure it is exported"),a},Yp=(s,a)=>{L(s.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),re.set(s,a)},Ps=s=>ql(s),qp=s=>{var a=Xe(s)+1,u=Ps(a);return Ri(s,u,a),u},Hl=(s,a,u,f,g)=>{var M={string:ge=>{var qe=0;return ge!=null&&ge!==0&&(qe=qp(ge)),qe},array:ge=>{var qe=Ps(ge.length);return Yp(ge,qe),qe}};function w(ge){return a==="string"?lt(ge):a==="boolean"?!!ge:ge}var A=jp(s),F=[],W=0;if(L(a!=="array",'Return type should not be "array".'),f)for(var Q=0;Q<f.length;Q++){var ae=M[u[Q]];ae?(W===0&&(W=q()),F[Q]=ae(f[Q])):F[Q]=f[Q]}var me=A(...F);function ce(ge){return W!==0&&Z(W),w(ge)}return me=ce(me),me},Zp=(s,a,u,f)=>(...g)=>Hl(s,a,u,g),Kp=(...s)=>b.createPath(...s),Jp=(...s)=>b.unlink(...s),Qp=(...s)=>b.createLazyFile(...s),em=(...s)=>b.createDevice(...s),tm=s=>Ds(s),nm=s=>ia(s),im=s=>{var a=q(),u=Ps(4),f=Ps(4);Kl(s,u,f);var g=Te[u>>2],M=Te[f>>2],w=lt(g);Hn(g);var A;return M&&(A=lt(M),Hn(M)),Z(a),[w,A]},Vl=s=>im(s);b.createPreloadedFile=yt,b.staticInit(),pf(),Mf(),L(zn.length===10),t.noExitRuntime&&(se=t.noExitRuntime),t.preloadPlugins&&(Ye=t.preloadPlugins),t.print&&(U=t.print),t.printErr&&(P=t.printErr),t.wasmBinary&&(C=t.wasmBinary),om(),t.arguments&&t.arguments,t.thisProgram&&(h=t.thisProgram),L(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),L(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),L(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),L(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),L(typeof t.read>"u","Module.read option was removed"),L(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),L(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),L(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),L(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),L(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),L(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),L(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),L(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=J,t.removeRunDependency=ue,t.ccall=Hl,t.cwrap=Zp,t.FS_createPreloadedFile=yt,t.FS_unlink=Jp,t.FS_createPath=Kp,t.FS_createDevice=em,t.FS=b,t.FS_createDataFile=jt,t.FS_createLazyFile=Qp,t.MEMFS=Ue;var rm=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];rm.forEach(Re);var sm=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];sm.forEach(Fe),t.incrementExceptionRefcount=tm,t.decrementExceptionRefcount=nm,t.getExceptionMessage=Vl;function om(){le("fetchSettings")}var Gl={667668:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(s){Object.defineProperty(t,s,{get:function(){return t["get_"+s]()},set:function(a){},enumerable:!0,configurable:!0})})}},Wl=V("___getTypeName"),ea=V("_malloc"),ta=V("_fflush"),Hn=V("_free"),na=V("_emscripten_stack_get_end"),Xl=V("_strerror"),ye=V("_setThrew"),$l=V("__emscripten_tempret_set"),jl=V("_emscripten_stack_init"),Yl=V("__emscripten_stack_restore"),ql=V("__emscripten_stack_alloc"),Zl=V("_emscripten_stack_get_current"),ia=V("___cxa_decrement_exception_refcount"),Ds=V("___cxa_increment_exception_refcount"),Kl=V("___get_exception_message"),Jl=V("___cxa_can_catch"),Ql=V("___cxa_get_exception_ptr");function am(s){Wl=oe("__getTypeName",1),ea=oe("malloc",1),ta=oe("fflush",1),Hn=oe("free",1),na=s.emscripten_stack_get_end,s.emscripten_stack_get_base,Xl=oe("strerror",1),ye=oe("setThrew",2),$l=oe("_emscripten_tempret_set",1),jl=s.emscripten_stack_init,s.emscripten_stack_get_free,Yl=s._emscripten_stack_restore,ql=s._emscripten_stack_alloc,Zl=s.emscripten_stack_get_current,ia=oe("__cxa_decrement_exception_refcount",1),Ds=oe("__cxa_increment_exception_refcount",1),Kl=oe("__get_exception_message",3),Jl=oe("__cxa_can_catch",3),Ql=oe("__cxa_get_exception_ptr",1)}var eu={__assert_fail:dn,__cxa_begin_catch:us,__cxa_current_primary_exception:$n,__cxa_end_catch:hs,__cxa_find_matching_catch_2:Zi,__cxa_find_matching_catch_3:ds,__cxa_find_matching_catch_4:fs,__cxa_rethrow:ps,__cxa_rethrow_primary_exception:Go,__cxa_throw:Wo,__cxa_uncaught_exceptions:D,__resumeException:X,__syscall_dup3:wi,__syscall_fcntl64:On,__syscall_fstat64:ms,__syscall_ioctl:Jd,__syscall_lstat64:Qd,__syscall_newfstatat:ef,__syscall_openat:tf,__syscall_stat64:nf,_abort_js:rf,_embind_register_bigint:of,_embind_register_bool:af,_embind_register_class:bf,_embind_register_class_class_function:Cf,_embind_register_class_constructor:Rf,_embind_register_class_function:Pf,_embind_register_class_property:Df,_embind_register_constant:Lf,_embind_register_emval:Pl,_embind_register_enum:Nf,_embind_register_enum_value:Ff,_embind_register_float:Of,_embind_register_function:Bf,_embind_register_integer:kf,_embind_register_memory_view:zf,_embind_register_optional:Vf,_embind_register_std_string:Gf,_embind_register_std_wstring:Zf,_embind_register_user_type:Kf,_embind_register_void:Jf,_emscripten_throw_longjmp:Qf,_emval_as:ep,_emval_call:tp,_emval_call_method:ip,_emval_decref:Ko,_emval_get_global:rp,_emval_get_method_caller:ap,_emval_get_property:cp,_emval_incref:lp,_emval_is_number:up,_emval_is_string:hp,_emval_new_array:dp,_emval_new_cstring:fp,_emval_run_destructors:pp,_emval_take_value:mp,_emval_throw:_p,_localtime_js:Mp,_mktime_js:Ep,_tzset_js:bp,clock_time_get:Tp,emscripten_asm_const_int:Rp,emscripten_date_now:Ol,emscripten_get_heap_max:Pp,emscripten_get_now:Ul,emscripten_resize_heap:Ip,environ_get:Fp,environ_sizes_get:Up,exit:kp,fd_close:zp,fd_read:Vp,fd_seek:Gp,fd_write:Xp,invoke_ddd:N_,invoke_dddi:Km,invoke_dddidi:Jm,invoke_ddidi:Zm,invoke_di:Qm,invoke_dii:Hm,invoke_diii:Sm,invoke_diiii:qm,invoke_diiiidd:jm,invoke_diiiidi:bm,invoke_diiiii:_m,invoke_diiiiii:Pm,invoke_diiiiiii:e_,invoke_diiiiiiiii:Cm,invoke_diiiiiiiiiiii:Rm,invoke_fiii:X_,invoke_i:gm,invoke_id:R_,invoke_ii:um,invoke_iid:u_,invoke_iidddd:k_,invoke_iidiii:Bm,invoke_iidiiid:Um,invoke_iidiiiiidi:km,invoke_iif:B_,invoke_iii:cm,invoke_iiid:zm,invoke_iiididdddddd:Om,invoke_iiidiiiiiiii:Fm,invoke_iiii:fm,invoke_iiiidddiiiii:n_,invoke_iiiii:xm,invoke_iiiiid:x_,invoke_iiiiii:m_,invoke_iiiiiii:d_,invoke_iiiiiiii:l_,invoke_iiiiiiiidd:S_,invoke_iiiiiiiii:$m,invoke_iiiiiiiiii:f_,invoke_iiiiiiiiiidddiiiiiiiii:Nm,invoke_iiiiiiiiiii:W_,invoke_iiiiiiiiiiii:$_,invoke_iiiiiiiiiiiii:C_,invoke_iiij:p_,invoke_iiji:y_,invoke_j:V_,invoke_ji:A_,invoke_jiiii:__,invoke_jij:T_,invoke_v:dm,invoke_vi:hm,invoke_vid:h_,invoke_viddd:g_,invoke_vidddd:v_,invoke_vidi:Ym,invoke_vidiii:Lm,invoke_vii:mm,invoke_viid:Wm,invoke_viiddi:w_,invoke_viiddidi:b_,invoke_viiddii:t_,invoke_viidi:Gm,invoke_viidii:Em,invoke_viidiii:a_,invoke_viidiiid:s_,invoke_viidiiiii:Im,invoke_viidiiiiidi:c_,invoke_viidiiiiiiii:Dm,invoke_viii:lm,invoke_viiid:Tm,invoke_viiidd:E_,invoke_viiidi:Vm,invoke_viiididdddddd:o_,invoke_viiidiiiiiiii:r_,invoke_viiii:ym,invoke_viiiiddd:M_,invoke_viiiidi:F_,invoke_viiiifi:U_,invoke_viiiii:pm,invoke_viiiiid:wm,invoke_viiiiii:vm,invoke_viiiiiii:Mm,invoke_viiiiiiii:Xm,invoke_viiiiiiiiii:L_,invoke_viiiiiiiiiidddiiiiiiiii:i_,invoke_viiiiiiiiiiid:Am,invoke_viiiiiiiiiiiii:D_,invoke_viiiiiiiiiiiiiii:j_,invoke_viiiiiiiiiiiiiiiiii:I_,invoke_viiiij:z_,invoke_viij:H_,invoke_viijii:G_,invoke_vij:O_,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:P_,llvm_eh_typeid_for:$p},Pi=await nt();function cm(s,a,u){var f=q();try{return xe(s)(a,u)}catch(g){if(Z(f),!(g instanceof E))throw g;ye(1,0)}}function lm(s,a,u,f){var g=q();try{xe(s)(a,u,f)}catch(M){if(Z(g),!(M instanceof E))throw M;ye(1,0)}}function um(s,a){var u=q();try{return xe(s)(a)}catch(f){if(Z(u),!(f instanceof E))throw f;ye(1,0)}}function hm(s,a){var u=q();try{xe(s)(a)}catch(f){if(Z(u),!(f instanceof E))throw f;ye(1,0)}}function dm(s){var a=q();try{xe(s)()}catch(u){if(Z(a),!(u instanceof E))throw u;ye(1,0)}}function fm(s,a,u,f){var g=q();try{return xe(s)(a,u,f)}catch(M){if(Z(g),!(M instanceof E))throw M;ye(1,0)}}function pm(s,a,u,f,g,M){var w=q();try{xe(s)(a,u,f,g,M)}catch(A){if(Z(w),!(A instanceof E))throw A;ye(1,0)}}function mm(s,a,u){var f=q();try{xe(s)(a,u)}catch(g){if(Z(f),!(g instanceof E))throw g;ye(1,0)}}function _m(s,a,u,f,g,M){var w=q();try{return xe(s)(a,u,f,g,M)}catch(A){if(Z(w),!(A instanceof E))throw A;ye(1,0)}}function gm(s){var a=q();try{return xe(s)()}catch(u){if(Z(a),!(u instanceof E))throw u;ye(1,0)}}function vm(s,a,u,f,g,M,w){var A=q();try{xe(s)(a,u,f,g,M,w)}catch(F){if(Z(A),!(F instanceof E))throw F;ye(1,0)}}function ym(s,a,u,f,g){var M=q();try{xe(s)(a,u,f,g)}catch(w){if(Z(M),!(w instanceof E))throw w;ye(1,0)}}function xm(s,a,u,f,g){var M=q();try{return xe(s)(a,u,f,g)}catch(w){if(Z(M),!(w instanceof E))throw w;ye(1,0)}}function Sm(s,a,u,f){var g=q();try{return xe(s)(a,u,f)}catch(M){if(Z(g),!(M instanceof E))throw M;ye(1,0)}}function Mm(s,a,u,f,g,M,w,A){var F=q();try{xe(s)(a,u,f,g,M,w,A)}catch(W){if(Z(F),!(W instanceof E))throw W;ye(1,0)}}function Em(s,a,u,f,g,M){var w=q();try{xe(s)(a,u,f,g,M)}catch(A){if(Z(w),!(A instanceof E))throw A;ye(1,0)}}function bm(s,a,u,f,g,M,w){var A=q();try{return xe(s)(a,u,f,g,M,w)}catch(F){if(Z(A),!(F instanceof E))throw F;ye(1,0)}}function wm(s,a,u,f,g,M,w){var A=q();try{xe(s)(a,u,f,g,M,w)}catch(F){if(Z(A),!(F instanceof E))throw F;ye(1,0)}}function Tm(s,a,u,f,g){var M=q();try{xe(s)(a,u,f,g)}catch(w){if(Z(M),!(w instanceof E))throw w;ye(1,0)}}function Am(s,a,u,f,g,M,w,A,F,W,Q,ae,me){var ce=q();try{xe(s)(a,u,f,g,M,w,A,F,W,Q,ae,me)}catch(ge){if(Z(ce),!(ge instanceof E))throw ge;ye(1,0)}}function Cm(s,a,u,f,g,M,w,A,F,W){var Q=q();try{return xe(s)(a,u,f,g,M,w,A,F,W)}catch(ae){if(Z(Q),!(ae instanceof E))throw ae;ye(1,0)}}function Rm(s,a,u,f,g,M,w,A,F,W,Q,ae,me){var ce=q();try{return xe(s)(a,u,f,g,M,w,A,F,W,Q,ae,me)}catch(ge){if(Z(ce),!(ge instanceof E))throw ge;ye(1,0)}}function Pm(s,a,u,f,g,M,w){var A=q();try{return xe(s)(a,u,f,g,M,w)}catch(F){if(Z(A),!(F instanceof E))throw F;ye(1,0)}}function Dm(s,a,u,f,g,M,w,A,F,W,Q,ae){var me=q();try{xe(s)(a,u,f,g,M,w,A,F,W,Q,ae)}catch(ce){if(Z(me),!(ce instanceof E))throw ce;ye(1,0)}}function Lm(s,a,u,f,g,M){var w=q();try{xe(s)(a,u,f,g,M)}catch(A){if(Z(w),!(A instanceof E))throw A;ye(1,0)}}function Im(s,a,u,f,g,M,w,A,F){var W=q();try{xe(s)(a,u,f,g,M,w,A,F)}catch(Q){if(Z(W),!(Q instanceof E))throw Q;ye(1,0)}}function Nm(s,a,u,f,g,M,w,A,F,W,Q,ae,me,ce,ge,qe,pt,at,Dt,xt,Kt,Ht){var sn=q();try{return xe(s)(a,u,f,g,M,w,A,F,W,Q,ae,me,ce,ge,qe,pt,at,Dt,xt,Kt,Ht)}catch(Pt){if(Z(sn),!(Pt instanceof E))throw Pt;ye(1,0)}}function Fm(s,a,u,f,g,M,w,A,F,W,Q,ae){var me=q();try{return xe(s)(a,u,f,g,M,w,A,F,W,Q,ae)}catch(ce){if(Z(me),!(ce instanceof E))throw ce;ye(1,0)}}function Um(s,a,u,f,g,M,w){var A=q();try{return xe(s)(a,u,f,g,M,w)}catch(F){if(Z(A),!(F instanceof E))throw F;ye(1,0)}}function Om(s,a,u,f,g,M,w,A,F,W,Q,ae){var me=q();try{return xe(s)(a,u,f,g,M,w,A,F,W,Q,ae)}catch(ce){if(Z(me),!(ce instanceof E))throw ce;ye(1,0)}}function Bm(s,a,u,f,g,M){var w=q();try{return xe(s)(a,u,f,g,M)}catch(A){if(Z(w),!(A instanceof E))throw A;ye(1,0)}}function km(s,a,u,f,g,M,w,A,F,W){var Q=q();try{return xe(s)(a,u,f,g,M,w,A,F,W)}catch(ae){if(Z(Q),!(ae instanceof E))throw ae;ye(1,0)}}function zm(s,a,u,f){var g=q();try{return xe(s)(a,u,f)}catch(M){if(Z(g),!(M instanceof E))throw M;ye(1,0)}}function Hm(s,a,u){var f=q();try{return xe(s)(a,u)}catch(g){if(Z(f),!(g instanceof E))throw g;ye(1,0)}}function Vm(s,a,u,f,g,M){var w=q();try{xe(s)(a,u,f,g,M)}catch(A){if(Z(w),!(A instanceof E))throw A;ye(1,0)}}function Gm(s,a,u,f,g){var M=q();try{xe(s)(a,u,f,g)}catch(w){if(Z(M),!(w instanceof E))throw w;ye(1,0)}}function Wm(s,a,u,f){var g=q();try{xe(s)(a,u,f)}catch(M){if(Z(g),!(M instanceof E))throw M;ye(1,0)}}function Xm(s,a,u,f,g,M,w,A,F){var W=q();try{xe(s)(a,u,f,g,M,w,A,F)}catch(Q){if(Z(W),!(Q instanceof E))throw Q;ye(1,0)}}function $m(s,a,u,f,g,M,w,A,F){var W=q();try{return xe(s)(a,u,f,g,M,w,A,F)}catch(Q){if(Z(W),!(Q instanceof E))throw Q;ye(1,0)}}function jm(s,a,u,f,g,M,w){var A=q();try{return xe(s)(a,u,f,g,M,w)}catch(F){if(Z(A),!(F instanceof E))throw F;ye(1,0)}}function Ym(s,a,u,f){var g=q();try{xe(s)(a,u,f)}catch(M){if(Z(g),!(M instanceof E))throw M;ye(1,0)}}function qm(s,a,u,f,g){var M=q();try{return xe(s)(a,u,f,g)}catch(w){if(Z(M),!(w instanceof E))throw w;ye(1,0)}}function Zm(s,a,u,f,g){var M=q();try{return xe(s)(a,u,f,g)}catch(w){if(Z(M),!(w instanceof E))throw w;ye(1,0)}}function Km(s,a,u,f){var g=q();try{return xe(s)(a,u,f)}catch(M){if(Z(g),!(M instanceof E))throw M;ye(1,0)}}function Jm(s,a,u,f,g,M){var w=q();try{return xe(s)(a,u,f,g,M)}catch(A){if(Z(w),!(A instanceof E))throw A;ye(1,0)}}function Qm(s,a){var u=q();try{return xe(s)(a)}catch(f){if(Z(u),!(f instanceof E))throw f;ye(1,0)}}function e_(s,a,u,f,g,M,w,A){var F=q();try{return xe(s)(a,u,f,g,M,w,A)}catch(W){if(Z(F),!(W instanceof E))throw W;ye(1,0)}}function t_(s,a,u,f,g,M,w){var A=q();try{xe(s)(a,u,f,g,M,w)}catch(F){if(Z(A),!(F instanceof E))throw F;ye(1,0)}}function n_(s,a,u,f,g,M,w,A,F,W,Q,ae){var me=q();try{return xe(s)(a,u,f,g,M,w,A,F,W,Q,ae)}catch(ce){if(Z(me),!(ce instanceof E))throw ce;ye(1,0)}}function i_(s,a,u,f,g,M,w,A,F,W,Q,ae,me,ce,ge,qe,pt,at,Dt,xt,Kt,Ht,sn){var Pt=q();try{xe(s)(a,u,f,g,M,w,A,F,W,Q,ae,me,ce,ge,qe,pt,at,Dt,xt,Kt,Ht,sn)}catch(ci){if(Z(Pt),!(ci instanceof E))throw ci;ye(1,0)}}function r_(s,a,u,f,g,M,w,A,F,W,Q,ae,me){var ce=q();try{xe(s)(a,u,f,g,M,w,A,F,W,Q,ae,me)}catch(ge){if(Z(ce),!(ge instanceof E))throw ge;ye(1,0)}}function s_(s,a,u,f,g,M,w,A){var F=q();try{xe(s)(a,u,f,g,M,w,A)}catch(W){if(Z(F),!(W instanceof E))throw W;ye(1,0)}}function o_(s,a,u,f,g,M,w,A,F,W,Q,ae,me){var ce=q();try{xe(s)(a,u,f,g,M,w,A,F,W,Q,ae,me)}catch(ge){if(Z(ce),!(ge instanceof E))throw ge;ye(1,0)}}function a_(s,a,u,f,g,M,w){var A=q();try{xe(s)(a,u,f,g,M,w)}catch(F){if(Z(A),!(F instanceof E))throw F;ye(1,0)}}function c_(s,a,u,f,g,M,w,A,F,W,Q){var ae=q();try{xe(s)(a,u,f,g,M,w,A,F,W,Q)}catch(me){if(Z(ae),!(me instanceof E))throw me;ye(1,0)}}function l_(s,a,u,f,g,M,w,A){var F=q();try{return xe(s)(a,u,f,g,M,w,A)}catch(W){if(Z(F),!(W instanceof E))throw W;ye(1,0)}}function u_(s,a,u){var f=q();try{return xe(s)(a,u)}catch(g){if(Z(f),!(g instanceof E))throw g;ye(1,0)}}function h_(s,a,u){var f=q();try{xe(s)(a,u)}catch(g){if(Z(f),!(g instanceof E))throw g;ye(1,0)}}function d_(s,a,u,f,g,M,w){var A=q();try{return xe(s)(a,u,f,g,M,w)}catch(F){if(Z(A),!(F instanceof E))throw F;ye(1,0)}}function f_(s,a,u,f,g,M,w,A,F,W){var Q=q();try{return xe(s)(a,u,f,g,M,w,A,F,W)}catch(ae){if(Z(Q),!(ae instanceof E))throw ae;ye(1,0)}}function p_(s,a,u,f){var g=q();try{return xe(s)(a,u,f)}catch(M){if(Z(g),!(M instanceof E))throw M;ye(1,0)}}function m_(s,a,u,f,g,M){var w=q();try{return xe(s)(a,u,f,g,M)}catch(A){if(Z(w),!(A instanceof E))throw A;ye(1,0)}}function __(s,a,u,f,g){var M=q();try{return xe(s)(a,u,f,g)}catch(w){if(Z(M),!(w instanceof E))throw w;return ye(1,0),0n}}function g_(s,a,u,f,g){var M=q();try{xe(s)(a,u,f,g)}catch(w){if(Z(M),!(w instanceof E))throw w;ye(1,0)}}function v_(s,a,u,f,g,M){var w=q();try{xe(s)(a,u,f,g,M)}catch(A){if(Z(w),!(A instanceof E))throw A;ye(1,0)}}function y_(s,a,u,f){var g=q();try{return xe(s)(a,u,f)}catch(M){if(Z(g),!(M instanceof E))throw M;ye(1,0)}}function x_(s,a,u,f,g,M){var w=q();try{return xe(s)(a,u,f,g,M)}catch(A){if(Z(w),!(A instanceof E))throw A;ye(1,0)}}function S_(s,a,u,f,g,M,w,A,F,W){var Q=q();try{return xe(s)(a,u,f,g,M,w,A,F,W)}catch(ae){if(Z(Q),!(ae instanceof E))throw ae;ye(1,0)}}function M_(s,a,u,f,g,M,w,A){var F=q();try{xe(s)(a,u,f,g,M,w,A)}catch(W){if(Z(F),!(W instanceof E))throw W;ye(1,0)}}function E_(s,a,u,f,g,M){var w=q();try{xe(s)(a,u,f,g,M)}catch(A){if(Z(w),!(A instanceof E))throw A;ye(1,0)}}function b_(s,a,u,f,g,M,w,A){var F=q();try{xe(s)(a,u,f,g,M,w,A)}catch(W){if(Z(F),!(W instanceof E))throw W;ye(1,0)}}function w_(s,a,u,f,g,M){var w=q();try{xe(s)(a,u,f,g,M)}catch(A){if(Z(w),!(A instanceof E))throw A;ye(1,0)}}function T_(s,a,u){var f=q();try{return xe(s)(a,u)}catch(g){if(Z(f),!(g instanceof E))throw g;return ye(1,0),0n}}function A_(s,a){var u=q();try{return xe(s)(a)}catch(f){if(Z(u),!(f instanceof E))throw f;return ye(1,0),0n}}function C_(s,a,u,f,g,M,w,A,F,W,Q,ae,me){var ce=q();try{return xe(s)(a,u,f,g,M,w,A,F,W,Q,ae,me)}catch(ge){if(Z(ce),!(ge instanceof E))throw ge;ye(1,0)}}function R_(s,a){var u=q();try{return xe(s)(a)}catch(f){if(Z(u),!(f instanceof E))throw f;ye(1,0)}}function P_(s,a,u,f,g,M,w,A,F,W,Q,ae,me,ce,ge,qe,pt,at,Dt,xt,Kt,Ht,sn,Pt,ci,Ls,K_,J_,Q_,eg,tg,ng,ig,rg,sg,og,ag,cg,lg,ug,hg,dg,fg,pg,mg,_g,gg,vg,yg,xg,Sg,Mg,Eg,bg,wg,Tg,Ag,Cg,Rg,Pg,Dg,Lg,Ig,Ng,Fg,Ug,Og,Bg,kg,zg,Hg,Vg,Gg,Wg,Xg,$g,jg,Yg,qg,Zg,Kg,Jg,Qg,ev,tv,nv){var iv=q();try{xe(s)(a,u,f,g,M,w,A,F,W,Q,ae,me,ce,ge,qe,pt,at,Dt,xt,Kt,Ht,sn,Pt,ci,Ls,K_,J_,Q_,eg,tg,ng,ig,rg,sg,og,ag,cg,lg,ug,hg,dg,fg,pg,mg,_g,gg,vg,yg,xg,Sg,Mg,Eg,bg,wg,Tg,Ag,Cg,Rg,Pg,Dg,Lg,Ig,Ng,Fg,Ug,Og,Bg,kg,zg,Hg,Vg,Gg,Wg,Xg,$g,jg,Yg,qg,Zg,Kg,Jg,Qg,ev,tv,nv)}catch(su){if(Z(iv),!(su instanceof E))throw su;ye(1,0)}}function D_(s,a,u,f,g,M,w,A,F,W,Q,ae,me,ce){var ge=q();try{xe(s)(a,u,f,g,M,w,A,F,W,Q,ae,me,ce)}catch(qe){if(Z(ge),!(qe instanceof E))throw qe;ye(1,0)}}function L_(s,a,u,f,g,M,w,A,F,W,Q){var ae=q();try{xe(s)(a,u,f,g,M,w,A,F,W,Q)}catch(me){if(Z(ae),!(me instanceof E))throw me;ye(1,0)}}function I_(s,a,u,f,g,M,w,A,F,W,Q,ae,me,ce,ge,qe,pt,at,Dt){var xt=q();try{xe(s)(a,u,f,g,M,w,A,F,W,Q,ae,me,ce,ge,qe,pt,at,Dt)}catch(Kt){if(Z(xt),!(Kt instanceof E))throw Kt;ye(1,0)}}function N_(s,a,u){var f=q();try{return xe(s)(a,u)}catch(g){if(Z(f),!(g instanceof E))throw g;ye(1,0)}}function F_(s,a,u,f,g,M,w){var A=q();try{xe(s)(a,u,f,g,M,w)}catch(F){if(Z(A),!(F instanceof E))throw F;ye(1,0)}}function U_(s,a,u,f,g,M,w){var A=q();try{xe(s)(a,u,f,g,M,w)}catch(F){if(Z(A),!(F instanceof E))throw F;ye(1,0)}}function O_(s,a,u){var f=q();try{xe(s)(a,u)}catch(g){if(Z(f),!(g instanceof E))throw g;ye(1,0)}}function B_(s,a,u){var f=q();try{return xe(s)(a,u)}catch(g){if(Z(f),!(g instanceof E))throw g;ye(1,0)}}function k_(s,a,u,f,g,M){var w=q();try{return xe(s)(a,u,f,g,M)}catch(A){if(Z(w),!(A instanceof E))throw A;ye(1,0)}}function z_(s,a,u,f,g,M){var w=q();try{xe(s)(a,u,f,g,M)}catch(A){if(Z(w),!(A instanceof E))throw A;ye(1,0)}}function H_(s,a,u,f){var g=q();try{xe(s)(a,u,f)}catch(M){if(Z(g),!(M instanceof E))throw M;ye(1,0)}}function V_(s){var a=q();try{return xe(s)()}catch(u){if(Z(a),!(u instanceof E))throw u;return ye(1,0),0n}}function G_(s,a,u,f,g,M){var w=q();try{xe(s)(a,u,f,g,M)}catch(A){if(Z(w),!(A instanceof E))throw A;ye(1,0)}}function W_(s,a,u,f,g,M,w,A,F,W,Q){var ae=q();try{return xe(s)(a,u,f,g,M,w,A,F,W,Q)}catch(me){if(Z(ae),!(me instanceof E))throw me;ye(1,0)}}function X_(s,a,u,f){var g=q();try{return xe(s)(a,u,f)}catch(M){if(Z(g),!(M instanceof E))throw M;ye(1,0)}}function $_(s,a,u,f,g,M,w,A,F,W,Q,ae){var me=q();try{return xe(s)(a,u,f,g,M,w,A,F,W,Q,ae)}catch(ce){if(Z(me),!(ce instanceof E))throw ce;ye(1,0)}}function j_(s,a,u,f,g,M,w,A,F,W,Q,ae,me,ce,ge,qe){var pt=q();try{xe(s)(a,u,f,g,M,w,A,F,W,Q,ae,me,ce,ge,qe)}catch(at){if(Z(pt),!(at instanceof E))throw at;ye(1,0)}}var tu;function Y_(){jl(),H()}function ra(){if(Ze>0){Ne=ra;return}if(Y_(),Se(),Ze>0){Ne=ra;return}function s(){var a;L(!tu),tu=!0,t.calledRun=!0,!j&&(ze(),ke==null||ke(t),(a=t.onRuntimeInitialized)==null||a.call(t),K("onRuntimeInitialized"),L(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Ce())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),s()},1)):s(),I()}function q_(){var s=U,a=P,u=!1;U=P=f=>{u=!0};try{ta(0),["stdout","stderr"].forEach(f=>{var F;var g=b.analyzePath("/dev/"+f);if(g){var M=g.object,w=M.rdev,A=He.ttys[w];(F=A==null?void 0:A.output)!=null&&F.length&&(u=!0)}})}catch{}U=s,P=a,u&&Ke("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function Z_(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();K("preInit")}Z_(),ra(),O?e=t:e=new Promise((s,a)=>{ke=s,Je=a});for(const s of Object.keys(t))s in i||Object.defineProperty(i,s,{configurable:!0,get(){he(`Access to module property ('${s}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const gw="/physical/assets/mujoco-D9UjOFNX.wasm";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qc="170",gr={ROTATE:0,DOLLY:1,PAN:2},pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cv=0,au=1,lv=2,Kh=1,uv=2,ei=3,xi=0,un=1,ti=2,vi=0,vr=1,cu=2,lu=3,uu=4,hv=5,ki=100,dv=101,fv=102,pv=103,mv=104,_v=200,gv=201,vv=202,yv=203,Za=204,Ka=205,xv=206,Sv=207,Mv=208,Ev=209,bv=210,wv=211,Tv=212,Av=213,Cv=214,Ja=0,Qa=1,ec=2,Er=3,tc=4,nc=5,ic=6,rc=7,Jh=0,Rv=1,Pv=2,yi=0,Dv=1,Lv=2,Iv=3,Nv=4,Fv=5,Uv=6,Ov=7,hu="attached",Bv="detached",Qh=300,br=301,wr=302,sc=303,oc=304,No=306,ac=1e3,Hi=1001,cc=1002,yn=1003,kv=1004,Is=1005,Gn=1006,sa=1007,Vi=1008,si=1009,ed=1010,td=1011,ns=1012,Zc=1013,Wi=1014,Fn=1015,as=1016,Kc=1017,Jc=1018,Tr=1020,nd=35902,id=1021,rd=1022,wn=1023,sd=1024,od=1025,yr=1026,Ar=1027,Qc=1028,el=1029,ad=1030,tl=1031,nl=1033,vo=33776,yo=33777,xo=33778,So=33779,lc=35840,uc=35841,hc=35842,dc=35843,fc=36196,pc=37492,mc=37496,_c=37808,gc=37809,vc=37810,yc=37811,xc=37812,Sc=37813,Mc=37814,Ec=37815,bc=37816,wc=37817,Tc=37818,Ac=37819,Cc=37820,Rc=37821,Mo=36492,Pc=36494,Dc=36495,cd=36283,Lc=36284,Ic=36285,Nc=36286,wo=2300,Fc=2301,oa=2302,du=2400,fu=2401,pu=2402,zv=2500,vw=0,yw=1,xw=2,Hv=3200,Vv=3201,ld=0,Gv=1,_i="",En="srgb",Lr="srgb-linear",Fo="linear",Tt="srgb",Ji=7680,mu=519,Wv=512,Xv=513,$v=514,ud=515,jv=516,Yv=517,qv=518,Zv=519,Uc=35044,_u="300 es",ni=2e3,To=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,c=r.length;o<c;o++)r[o].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gu=1234567;const xr=Math.PI/180,Cr=180/Math.PI;function Tn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function il(i,e){return(i%e+e)%e}function Kv(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Jv(i,e,t){return i!==e?(t-i)/(e-i):0}function Jr(i,e,t){return(1-t)*i+t*e}function Qv(i,e,t,n){return Jr(i,e,1-Math.exp(-t*n))}function e0(i,e=1){return e-Math.abs(il(i,e*2)-e)}function t0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function n0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function i0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function r0(i,e){return i+Math.random()*(e-i)}function s0(i){return i*(.5-Math.random())}function o0(i){i!==void 0&&(gu=i);let e=gu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function a0(i){return i*xr}function c0(i){return i*Cr}function l0(i){return(i&i-1)===0&&i!==0}function u0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function h0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function d0(i,e,t,n,r){const o=Math.cos,c=Math.sin,l=o(t/2),h=c(t/2),d=o((e+n)/2),p=c((e+n)/2),_=o((e-n)/2),m=c((e-n)/2),v=o((n-e)/2),S=c((n-e)/2);switch(r){case"XYX":i.set(l*p,h*_,h*m,l*d);break;case"YZY":i.set(h*m,l*p,h*_,l*d);break;case"ZXZ":i.set(h*_,h*m,l*p,l*d);break;case"XZX":i.set(l*p,h*S,h*v,l*d);break;case"YXY":i.set(h*v,l*p,h*S,l*d);break;case"ZYZ":i.set(h*S,h*v,l*p,l*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const f0={DEG2RAD:xr,RAD2DEG:Cr,generateUUID:Tn,clamp:Gt,euclideanModulo:il,mapLinear:Kv,inverseLerp:Jv,lerp:Jr,damp:Qv,pingpong:e0,smoothstep:t0,smootherstep:n0,randInt:i0,randFloat:r0,randFloatSpread:s0,seededRandom:o0,degToRad:a0,radToDeg:c0,isPowerOfTwo:l0,ceilPowerOfTwo:u0,floorPowerOfTwo:h0,setQuaternionFromProperEuler:d0,normalize:bt,denormalize:Nn};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*n-c*r+e.x,this.y=o*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,r,o,c,l,h,d){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,c,l,h,d)}set(e,t,n,r,o,c,l,h,d){const p=this.elements;return p[0]=e,p[1]=r,p[2]=l,p[3]=t,p[4]=o,p[5]=h,p[6]=n,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,c=n[0],l=n[3],h=n[6],d=n[1],p=n[4],_=n[7],m=n[2],v=n[5],S=n[8],T=r[0],x=r[3],y=r[6],U=r[1],P=r[4],C=r[7],j=r[2],L=r[5],k=r[8];return o[0]=c*T+l*U+h*j,o[3]=c*x+l*P+h*L,o[6]=c*y+l*C+h*k,o[1]=d*T+p*U+_*j,o[4]=d*x+p*P+_*L,o[7]=d*y+p*C+_*k,o[2]=m*T+v*U+S*j,o[5]=m*x+v*P+S*L,o[8]=m*y+v*C+S*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],h=e[6],d=e[7],p=e[8];return t*c*p-t*l*d-n*o*p+n*l*h+r*o*d-r*c*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],h=e[6],d=e[7],p=e[8],_=p*c-l*d,m=l*h-p*o,v=d*o-c*h,S=t*_+n*m+r*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=_*T,e[1]=(r*d-p*n)*T,e[2]=(l*n-r*c)*T,e[3]=m*T,e[4]=(p*t-r*h)*T,e[5]=(r*o-l*t)*T,e[6]=v*T,e[7]=(n*h-d*t)*T,e[8]=(c*t-n*o)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,c,l){const h=Math.cos(o),d=Math.sin(o);return this.set(n*h,n*d,-n*(h*c+d*l)+c+e,-r*d,r*h,-r*(-d*c+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new st;function hd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function p0(){const i=is("canvas");return i.style.display="block",i}const vu={};function Zr(i){i in vu||(vu[i]=!0,console.warn(i))}function m0(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function _0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function g0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Tt&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Tt&&(i.r=Sr(i.r),i.g=Sr(i.g),i.b=Sr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_i?Fo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const yu=[.64,.33,.3,.6,.15,.06],xu=[.2126,.7152,.0722],Su=[.3127,.329],Mu=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eu=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[Lr]:{primaries:yu,whitePoint:Su,transfer:Fo,toXYZ:Mu,fromXYZ:Eu,luminanceCoefficients:xu,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:yu,whitePoint:Su,transfer:Tt,toXYZ:Mu,fromXYZ:Eu,luminanceCoefficients:xu,outputColorSpaceConfig:{drawingBufferColorSpace:En}}});let Qi;class v0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=is("canvas")),Qi.width=e.width,Qi.height=e.height;const n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let c=0;c<o.length;c++)o[c]=ii(o[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let y0=0;class dd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Tn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let c=0,l=r.length;c<l;c++)r[c].isDataTexture?o.push(ca(r[c].image)):o.push(ca(r[c]))}else o=ca(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?v0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x0=0;class en extends ji{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=Hi,r=Hi,o=Gn,c=Vi,l=wn,h=si,d=en.DEFAULT_ANISOTROPY,p=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Tn(),this.name="",this.source=new dd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=c,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=h,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ac:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ac:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Qh;en.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*o,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*o,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*o,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const h=e.elements,d=h[0],p=h[4],_=h[8],m=h[1],v=h[5],S=h[9],T=h[2],x=h[6],y=h[10];if(Math.abs(p-m)<.01&&Math.abs(_-T)<.01&&Math.abs(S-x)<.01){if(Math.abs(p+m)<.1&&Math.abs(_+T)<.1&&Math.abs(S+x)<.1&&Math.abs(d+v+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(d+1)/2,C=(v+1)/2,j=(y+1)/2,L=(p+m)/4,k=(_+T)/4,H=(S+x)/4;return P>C&&P>j?P<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(P),r=L/n,o=k/n):C>j?C<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(C),n=L/r,o=H/r):j<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(j),n=k/o,r=H/o),this.set(n,r,o,t),this}let U=Math.sqrt((x-S)*(x-S)+(_-T)*(_-T)+(m-p)*(m-p));return Math.abs(U)<.001&&(U=1),this.x=(x-S)/U,this.y=(_-T)/U,this.z=(m-p)/U,this.w=Math.acos((d+v+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class S0 extends ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new en(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let l=0;l<c;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends S0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fd extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class M0 extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,c,l){let h=n[r+0],d=n[r+1],p=n[r+2],_=n[r+3];const m=o[c+0],v=o[c+1],S=o[c+2],T=o[c+3];if(l===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(l===1){e[t+0]=m,e[t+1]=v,e[t+2]=S,e[t+3]=T;return}if(_!==T||h!==m||d!==v||p!==S){let x=1-l;const y=h*m+d*v+p*S+_*T,U=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const j=Math.sqrt(P),L=Math.atan2(j,y*U);x=Math.sin(x*L)/j,l=Math.sin(l*L)/j}const C=l*U;if(h=h*x+m*C,d=d*x+v*C,p=p*x+S*C,_=_*x+T*C,x===1-l){const j=1/Math.sqrt(h*h+d*d+p*p+_*_);h*=j,d*=j,p*=j,_*=j}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,r,o,c){const l=n[r],h=n[r+1],d=n[r+2],p=n[r+3],_=o[c],m=o[c+1],v=o[c+2],S=o[c+3];return e[t]=l*S+p*_+h*v-d*m,e[t+1]=h*S+p*m+d*_-l*v,e[t+2]=d*S+p*v+l*m-h*_,e[t+3]=p*S-l*_-h*m-d*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,c=e._order,l=Math.cos,h=Math.sin,d=l(n/2),p=l(r/2),_=l(o/2),m=h(n/2),v=h(r/2),S=h(o/2);switch(c){case"XYZ":this._x=m*p*_+d*v*S,this._y=d*v*_-m*p*S,this._z=d*p*S+m*v*_,this._w=d*p*_-m*v*S;break;case"YXZ":this._x=m*p*_+d*v*S,this._y=d*v*_-m*p*S,this._z=d*p*S-m*v*_,this._w=d*p*_+m*v*S;break;case"ZXY":this._x=m*p*_-d*v*S,this._y=d*v*_+m*p*S,this._z=d*p*S+m*v*_,this._w=d*p*_-m*v*S;break;case"ZYX":this._x=m*p*_-d*v*S,this._y=d*v*_+m*p*S,this._z=d*p*S-m*v*_,this._w=d*p*_+m*v*S;break;case"YZX":this._x=m*p*_+d*v*S,this._y=d*v*_+m*p*S,this._z=d*p*S-m*v*_,this._w=d*p*_-m*v*S;break;case"XZY":this._x=m*p*_-d*v*S,this._y=d*v*_-m*p*S,this._z=d*p*S+m*v*_,this._w=d*p*_+m*v*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],c=t[1],l=t[5],h=t[9],d=t[2],p=t[6],_=t[10],m=n+l+_;if(m>0){const v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(p-h)*v,this._y=(o-d)*v,this._z=(c-r)*v}else if(n>l&&n>_){const v=2*Math.sqrt(1+n-l-_);this._w=(p-h)/v,this._x=.25*v,this._y=(r+c)/v,this._z=(o+d)/v}else if(l>_){const v=2*Math.sqrt(1+l-n-_);this._w=(o-d)/v,this._x=(r+c)/v,this._y=.25*v,this._z=(h+p)/v}else{const v=2*Math.sqrt(1+_-n-l);this._w=(c-r)/v,this._x=(o+d)/v,this._y=(h+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,c=e._w,l=t._x,h=t._y,d=t._z,p=t._w;return this._x=n*p+c*l+r*d-o*h,this._y=r*p+c*h+o*l-n*d,this._z=o*p+c*d+n*h-r*l,this._w=c*p-n*l-r*h-o*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,c=this._w;let l=c*e._w+n*e._x+r*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=r,this._z=o,this;const h=1-l*l;if(h<=Number.EPSILON){const v=1-t;return this._w=v*c+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*o+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,l),_=Math.sin((1-t)*p)/d,m=Math.sin(t*p)/d;return this._w=c*_+this._w*m,this._x=n*_+this._x*m,this._y=r*_+this._y*m,this._z=o*_+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,c=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*c,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*c,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,c=e.y,l=e.z,h=e.w,d=2*(c*r-l*n),p=2*(l*t-o*r),_=2*(o*n-c*t);return this.x=t+h*d+c*_-l*p,this.y=n+h*p+l*d-o*_,this.z=r+h*_+o*p-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,c=t.x,l=t.y,h=t.z;return this.x=r*h-o*l,this.y=o*c-n*h,this.z=n*l-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new z,bu=new hn;class Mi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=o.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,Dn):Dn.fromBufferAttribute(o,c),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}const r=e.children;for(let o=0,c=r.length;o<c;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),Fs.subVectors(this.max,zr),er.subVectors(e.a,zr),tr.subVectors(e.b,zr),nr.subVectors(e.c,zr),li.subVectors(tr,er),ui.subVectors(nr,tr),Di.subVectors(er,nr);let t=[0,-li.z,li.y,0,-ui.z,ui.y,0,-Di.z,Di.y,li.z,0,-li.x,ui.z,0,-ui.x,Di.z,0,-Di.x,-li.y,li.x,0,-ui.y,ui.x,0,-Di.y,Di.x,0];return!ua(t,er,tr,nr,Fs)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,er,tr,nr,Fs))?!1:(Us.crossVectors(li,ui),t=[Us.x,Us.y,Us.z],ua(t,er,tr,nr,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new z,new z,new z,new z,new z,new z,new z,new z],Dn=new z,Ns=new Mi,er=new z,tr=new z,nr=new z,li=new z,ui=new z,Di=new z,zr=new z,Fs=new z,Us=new z,Li=new z;function ua(i,e,t,n,r){for(let o=0,c=i.length-3;o<=c;o+=3){Li.fromArray(i,o);const l=r.x*Math.abs(Li.x)+r.y*Math.abs(Li.y)+r.z*Math.abs(Li.z),h=e.dot(Li),d=t.dot(Li),p=n.dot(Li);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>l)return!1}return!0}const E0=new Mi,Hr=new z,ha=new z;class oi{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):E0.setFromPoints(e).getCenter(n);let r=0;for(let o=0,c=e.length;o<c;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Hr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(ha)),this.expandByPoint(Hr.copy(e.center).sub(ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new z,da=new z,Os=new z,hi=new z,fa=new z,Bs=new z,pa=new z;class Ir{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){da.copy(e).add(t).multiplyScalar(.5),Os.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(da);const o=e.distanceTo(t)*.5,c=-this.direction.dot(Os),l=hi.dot(this.direction),h=-hi.dot(Os),d=hi.lengthSq(),p=Math.abs(1-c*c);let _,m,v,S;if(p>0)if(_=c*h-l,m=c*l-h,S=o*p,_>=0)if(m>=-S)if(m<=S){const T=1/p;_*=T,m*=T,v=_*(_+c*m+2*l)+m*(c*_+m+2*h)+d}else m=o,_=Math.max(0,-(c*m+l)),v=-_*_+m*(m+2*h)+d;else m=-o,_=Math.max(0,-(c*m+l)),v=-_*_+m*(m+2*h)+d;else m<=-S?(_=Math.max(0,-(-c*o+l)),m=_>0?-o:Math.min(Math.max(-o,-h),o),v=-_*_+m*(m+2*h)+d):m<=S?(_=0,m=Math.min(Math.max(-o,-h),o),v=m*(m+2*h)+d):(_=Math.max(0,-(c*o+l)),m=_>0?o:Math.min(Math.max(-o,-h),o),v=-_*_+m*(m+2*h)+d);else m=c>0?-o:o,_=Math.max(0,-(c*m+l)),v=-_*_+m*(m+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(da).addScaledVector(Os,m),v}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),r=qn.dot(qn)-n*n,o=e.radius*e.radius;if(r>o)return null;const c=Math.sqrt(o-r),l=n-c,h=n+c;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,c,l,h;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,m=this.origin;return d>=0?(n=(e.min.x-m.x)*d,r=(e.max.x-m.x)*d):(n=(e.max.x-m.x)*d,r=(e.min.x-m.x)*d),p>=0?(o=(e.min.y-m.y)*p,c=(e.max.y-m.y)*p):(o=(e.max.y-m.y)*p,c=(e.min.y-m.y)*p),n>c||o>r||((o>n||isNaN(n))&&(n=o),(c<r||isNaN(r))&&(r=c),_>=0?(l=(e.min.z-m.z)*_,h=(e.max.z-m.z)*_):(l=(e.max.z-m.z)*_,h=(e.min.z-m.z)*_),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,r,o){fa.subVectors(t,e),Bs.subVectors(n,e),pa.crossVectors(fa,Bs);let c=this.direction.dot(pa),l;if(c>0){if(r)return null;l=1}else if(c<0)l=-1,c=-c;else return null;hi.subVectors(this.origin,e);const h=l*this.direction.dot(Bs.crossVectors(hi,Bs));if(h<0)return null;const d=l*this.direction.dot(fa.cross(hi));if(d<0||h+d>c)return null;const p=-l*hi.dot(pa);return p<0?null:this.at(p/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,r,o,c,l,h,d,p,_,m,v,S,T,x){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,c,l,h,d,p,_,m,v,S,T,x)}set(e,t,n,r,o,c,l,h,d,p,_,m,v,S,T,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=r,y[1]=o,y[5]=c,y[9]=l,y[13]=h,y[2]=d,y[6]=p,y[10]=_,y[14]=m,y[3]=v,y[7]=S,y[11]=T,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ir.setFromMatrixColumn(e,0).length(),o=1/ir.setFromMatrixColumn(e,1).length(),c=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,c=Math.cos(n),l=Math.sin(n),h=Math.cos(r),d=Math.sin(r),p=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){const m=c*p,v=c*_,S=l*p,T=l*_;t[0]=h*p,t[4]=-h*_,t[8]=d,t[1]=v+S*d,t[5]=m-T*d,t[9]=-l*h,t[2]=T-m*d,t[6]=S+v*d,t[10]=c*h}else if(e.order==="YXZ"){const m=h*p,v=h*_,S=d*p,T=d*_;t[0]=m+T*l,t[4]=S*l-v,t[8]=c*d,t[1]=c*_,t[5]=c*p,t[9]=-l,t[2]=v*l-S,t[6]=T+m*l,t[10]=c*h}else if(e.order==="ZXY"){const m=h*p,v=h*_,S=d*p,T=d*_;t[0]=m-T*l,t[4]=-c*_,t[8]=S+v*l,t[1]=v+S*l,t[5]=c*p,t[9]=T-m*l,t[2]=-c*d,t[6]=l,t[10]=c*h}else if(e.order==="ZYX"){const m=c*p,v=c*_,S=l*p,T=l*_;t[0]=h*p,t[4]=S*d-v,t[8]=m*d+T,t[1]=h*_,t[5]=T*d+m,t[9]=v*d-S,t[2]=-d,t[6]=l*h,t[10]=c*h}else if(e.order==="YZX"){const m=c*h,v=c*d,S=l*h,T=l*d;t[0]=h*p,t[4]=T-m*_,t[8]=S*_+v,t[1]=_,t[5]=c*p,t[9]=-l*p,t[2]=-d*p,t[6]=v*_+S,t[10]=m-T*_}else if(e.order==="XZY"){const m=c*h,v=c*d,S=l*h,T=l*d;t[0]=h*p,t[4]=-_,t[8]=d*p,t[1]=m*_+T,t[5]=c*p,t[9]=v*_-S,t[2]=S*_-v,t[6]=l*p,t[10]=T*_+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(b0,e,w0)}lookAt(e,t,n){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),di.crossVectors(n,pn),di.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),di.crossVectors(n,pn)),di.normalize(),ks.crossVectors(pn,di),r[0]=di.x,r[4]=ks.x,r[8]=pn.x,r[1]=di.y,r[5]=ks.y,r[9]=pn.y,r[2]=di.z,r[6]=ks.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,c=n[0],l=n[4],h=n[8],d=n[12],p=n[1],_=n[5],m=n[9],v=n[13],S=n[2],T=n[6],x=n[10],y=n[14],U=n[3],P=n[7],C=n[11],j=n[15],L=r[0],k=r[4],H=r[8],I=r[12],E=r[1],B=r[5],ee=r[9],K=r[13],V=r[2],le=r[6],te=r[10],_e=r[14],ie=r[3],Re=r[7],Fe=r[11],ke=r[15];return o[0]=c*L+l*E+h*V+d*ie,o[4]=c*k+l*B+h*le+d*Re,o[8]=c*H+l*ee+h*te+d*Fe,o[12]=c*I+l*K+h*_e+d*ke,o[1]=p*L+_*E+m*V+v*ie,o[5]=p*k+_*B+m*le+v*Re,o[9]=p*H+_*ee+m*te+v*Fe,o[13]=p*I+_*K+m*_e+v*ke,o[2]=S*L+T*E+x*V+y*ie,o[6]=S*k+T*B+x*le+y*Re,o[10]=S*H+T*ee+x*te+y*Fe,o[14]=S*I+T*K+x*_e+y*ke,o[3]=U*L+P*E+C*V+j*ie,o[7]=U*k+P*B+C*le+j*Re,o[11]=U*H+P*ee+C*te+j*Fe,o[15]=U*I+P*K+C*_e+j*ke,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],c=e[1],l=e[5],h=e[9],d=e[13],p=e[2],_=e[6],m=e[10],v=e[14],S=e[3],T=e[7],x=e[11],y=e[15];return S*(+o*h*_-r*d*_-o*l*m+n*d*m+r*l*v-n*h*v)+T*(+t*h*v-t*d*m+o*c*m-r*c*v+r*d*p-o*h*p)+x*(+t*d*_-t*l*v-o*c*_+n*c*v+o*l*p-n*d*p)+y*(-r*l*p-t*h*_+t*l*m+r*c*_-n*c*m+n*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],h=e[6],d=e[7],p=e[8],_=e[9],m=e[10],v=e[11],S=e[12],T=e[13],x=e[14],y=e[15],U=_*x*d-T*m*d+T*h*v-l*x*v-_*h*y+l*m*y,P=S*m*d-p*x*d-S*h*v+c*x*v+p*h*y-c*m*y,C=p*T*d-S*_*d+S*l*v-c*T*v-p*l*y+c*_*y,j=S*_*h-p*T*h-S*l*m+c*T*m+p*l*x-c*_*x,L=t*U+n*P+r*C+o*j;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/L;return e[0]=U*k,e[1]=(T*m*o-_*x*o-T*r*v+n*x*v+_*r*y-n*m*y)*k,e[2]=(l*x*o-T*h*o+T*r*d-n*x*d-l*r*y+n*h*y)*k,e[3]=(_*h*o-l*m*o-_*r*d+n*m*d+l*r*v-n*h*v)*k,e[4]=P*k,e[5]=(p*x*o-S*m*o+S*r*v-t*x*v-p*r*y+t*m*y)*k,e[6]=(S*h*o-c*x*o-S*r*d+t*x*d+c*r*y-t*h*y)*k,e[7]=(c*m*o-p*h*o+p*r*d-t*m*d-c*r*v+t*h*v)*k,e[8]=C*k,e[9]=(S*_*o-p*T*o-S*n*v+t*T*v+p*n*y-t*_*y)*k,e[10]=(c*T*o-S*l*o+S*n*d-t*T*d-c*n*y+t*l*y)*k,e[11]=(p*l*o-c*_*o-p*n*d+t*_*d+c*n*v-t*l*v)*k,e[12]=j*k,e[13]=(p*T*r-S*_*r+S*n*m-t*T*m-p*n*x+t*_*x)*k,e[14]=(S*l*r-c*T*r-S*n*h+t*T*h+c*n*x-t*l*x)*k,e[15]=(c*_*r-p*l*r+p*n*h-t*_*h-c*n*m+t*l*m)*k,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,c=e.x,l=e.y,h=e.z,d=o*c,p=o*l;return this.set(d*c+n,d*l-r*h,d*h+r*l,0,d*l+r*h,p*l+n,p*h-r*c,0,d*h-r*l,p*h+r*c,o*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,c){return this.set(1,n,o,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,c=t._y,l=t._z,h=t._w,d=o+o,p=c+c,_=l+l,m=o*d,v=o*p,S=o*_,T=c*p,x=c*_,y=l*_,U=h*d,P=h*p,C=h*_,j=n.x,L=n.y,k=n.z;return r[0]=(1-(T+y))*j,r[1]=(v+C)*j,r[2]=(S-P)*j,r[3]=0,r[4]=(v-C)*L,r[5]=(1-(m+y))*L,r[6]=(x+U)*L,r[7]=0,r[8]=(S+P)*k,r[9]=(x-U)*k,r[10]=(1-(m+T))*k,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=ir.set(r[0],r[1],r[2]).length();const c=ir.set(r[4],r[5],r[6]).length(),l=ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const d=1/o,p=1/c,_=1/l;return Ln.elements[0]*=d,Ln.elements[1]*=d,Ln.elements[2]*=d,Ln.elements[4]*=p,Ln.elements[5]*=p,Ln.elements[6]*=p,Ln.elements[8]*=_,Ln.elements[9]*=_,Ln.elements[10]*=_,t.setFromRotationMatrix(Ln),n.x=o,n.y=c,n.z=l,this}makePerspective(e,t,n,r,o,c,l=ni){const h=this.elements,d=2*o/(t-e),p=2*o/(n-r),_=(t+e)/(t-e),m=(n+r)/(n-r);let v,S;if(l===ni)v=-(c+o)/(c-o),S=-2*c*o/(c-o);else if(l===To)v=-c/(c-o),S=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=p,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,o,c,l=ni){const h=this.elements,d=1/(t-e),p=1/(n-r),_=1/(c-o),m=(t+e)*d,v=(n+r)*p;let S,T;if(l===ni)S=(c+o)*_,T=-2*_;else if(l===To)S=o*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-m,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-v,h[2]=0,h[6]=0,h[10]=T,h[14]=-S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ir=new z,Ln=new ut,b0=new z(0,0,0),w0=new z(1,1,1),di=new z,ks=new z,pn=new z,wu=new ut,Tu=new hn;class An{constructor(e=0,t=0,n=0,r=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],c=r[4],l=r[8],h=r[1],d=r[5],p=r[9],_=r[2],m=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,v),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-Gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(l,v));break;case"XZY":this._z=Math.asin(-Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class rl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let T0=0;const Au=new z,rr=new hn,Zn=new ut,zs=new z,Vr=new z,A0=new z,C0=new hn,Cu=new z(1,0,0),Ru=new z(0,1,0),Pu=new z(0,0,1),Du={type:"added"},R0={type:"removed"},sr={type:"childadded",child:null},ma={type:"childremoved",child:null};class Ft extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new z,t=new An,n=new hn,r=new z(1,1,1);function o(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new st}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(Cu,e)}rotateY(e){return this.rotateOnAxis(Ru,e)}rotateZ(e){return this.rotateOnAxis(Pu,e)}translateOnAxis(e,t){return Au.copy(e).applyQuaternion(this.quaternion),this.position.add(Au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cu,e)}translateY(e){return this.translateOnAxis(Ru,e)}translateZ(e){return this.translateOnAxis(Pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zs.copy(e):zs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Vr,zs,this.up):Zn.lookAt(zs,Vr,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),rr.setFromRotationMatrix(Zn),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Du),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R0),ma.child=e,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Du),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,A0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,C0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const _=h[d];o(e.shapes,_)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,d=this.material.length;h<d;h++)l.push(o(e.materials,this.material[h]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(o(e.animations,h))}}if(t){const l=c(e.geometries),h=c(e.materials),d=c(e.textures),p=c(e.images),_=c(e.shapes),m=c(e.skeletons),v=c(e.animations),S=c(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),_.length>0&&(n.shapes=_),m.length>0&&(n.skeletons=m),v.length>0&&(n.animations=v),S.length>0&&(n.nodes=S)}return n.object=r,n;function c(l){const h=[];for(const d in l){const p=l[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new z(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new z,Kn=new z,_a=new z,Jn=new z,or=new z,ar=new z,Lu=new z,ga=new z,va=new z,ya=new z,xa=new Et,Sa=new Et,Ma=new Et;class bn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),In.subVectors(e,t),r.cross(In);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){In.subVectors(r,t),Kn.subVectors(n,t),_a.subVectors(e,t);const c=In.dot(In),l=In.dot(Kn),h=In.dot(_a),d=Kn.dot(Kn),p=Kn.dot(_a),_=c*d-l*l;if(_===0)return o.set(0,0,0),null;const m=1/_,v=(d*h-l*p)*m,S=(c*p-l*h)*m;return o.set(1-v-S,S,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,r,o,c,l,h){return this.getBarycoord(e,t,n,r,Jn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Jn.x),h.addScaledVector(c,Jn.y),h.addScaledVector(l,Jn.z),h)}static getInterpolatedAttribute(e,t,n,r,o,c){return xa.setScalar(0),Sa.setScalar(0),Ma.setScalar(0),xa.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,n),Ma.fromBufferAttribute(e,r),c.setScalar(0),c.addScaledVector(xa,o.x),c.addScaledVector(Sa,o.y),c.addScaledVector(Ma,o.z),c}static isFrontFacing(e,t,n,r){return In.subVectors(n,t),Kn.subVectors(e,t),In.cross(Kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),In.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return bn.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let c,l;or.subVectors(r,n),ar.subVectors(o,n),ga.subVectors(e,n);const h=or.dot(ga),d=ar.dot(ga);if(h<=0&&d<=0)return t.copy(n);va.subVectors(e,r);const p=or.dot(va),_=ar.dot(va);if(p>=0&&_<=p)return t.copy(r);const m=h*_-p*d;if(m<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(n).addScaledVector(or,c);ya.subVectors(e,o);const v=or.dot(ya),S=ar.dot(ya);if(S>=0&&v<=S)return t.copy(o);const T=v*d-h*S;if(T<=0&&d>=0&&S<=0)return l=d/(d-S),t.copy(n).addScaledVector(ar,l);const x=p*S-v*_;if(x<=0&&_-p>=0&&v-S>=0)return Lu.subVectors(o,r),l=(_-p)/(_-p+(v-S)),t.copy(r).addScaledVector(Lu,l);const y=1/(x+T+m);return c=T*y,l=m*y,t.copy(n).addScaledVector(or,c).addScaledVector(ar,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function Ea(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ot{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=St.workingColorSpace){if(e=il(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,c=2*n-o;this.r=Ea(c,o,e+1/3),this.g=Ea(c,o,e),this.b=Ea(c,o,e-1/3)}return St.toWorkingColorSpace(this,r),this}setStyle(e,t=En){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=r[1],l=r[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=pd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return St.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Gt(Qt.r*255,0,255))*65536+Math.round(Gt(Qt.g*255,0,255))*256+Math.round(Gt(Qt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,r=Qt.g,o=Qt.b,c=Math.max(n,r,o),l=Math.min(n,r,o);let h,d;const p=(l+c)/2;if(l===c)h=0,d=0;else{const _=c-l;switch(d=p<=.5?_/(c+l):_/(2-c-l),c){case n:h=(r-o)/_+(r<o?6:0);break;case r:h=(o-n)/_+2;break;case o:h=(n-r)/_+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=En){St.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,r=Qt.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Hs);const n=Jr(fi.h,Hs.h,t),r=Jr(fi.s,Hs.s,t),o=Jr(fi.l,Hs.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new ot;ot.NAMES=pd;let P0=0;class Yi extends ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Tn(),this.name="",this.blending=vr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Ka,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ka&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}if(t){const o=r(e.textures),c=r(e.images);o.length>0&&(n.textures=o),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class md extends Yi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new z,Vs=new Ae;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vs.fromBufferAttribute(this,t),Vs.applyMatrix3(e),this.setXY(t,Vs.x,Vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),o=bt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uc&&(e.usage=this.usage),e}}class _d extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gd extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ut extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let D0=0;const Sn=new ut,ba=new Ft,cr=new z,mn=new Mi,Gr=new Mi,$t=new z;class Zt extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hd(e)?gd:_d)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new st().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ut(n,3))}else{for(let n=0,r=t.count;n<r;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];mn.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const l=t[o];Gr.setFromBufferAttribute(l),this.morphTargetsRelative?($t.addVectors(mn.min,Gr.min),mn.expandByPoint($t),$t.addVectors(mn.max,Gr.max),mn.expandByPoint($t)):(mn.expandByPoint(Gr.min),mn.expandByPoint(Gr.max))}mn.getCenter(n);let r=0;for(let o=0,c=e.count;o<c;o++)$t.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared($t));if(t)for(let o=0,c=t.length;o<c;o++){const l=t[o],h=this.morphTargetsRelative;for(let d=0,p=l.count;d<p;d++)$t.fromBufferAttribute(l,d),h&&(cr.fromBufferAttribute(e,d),$t.add(cr)),r=Math.max(r,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],h=[];for(let H=0;H<n.count;H++)l[H]=new z,h[H]=new z;const d=new z,p=new z,_=new z,m=new Ae,v=new Ae,S=new Ae,T=new z,x=new z;function y(H,I,E){d.fromBufferAttribute(n,H),p.fromBufferAttribute(n,I),_.fromBufferAttribute(n,E),m.fromBufferAttribute(o,H),v.fromBufferAttribute(o,I),S.fromBufferAttribute(o,E),p.sub(d),_.sub(d),v.sub(m),S.sub(m);const B=1/(v.x*S.y-S.x*v.y);isFinite(B)&&(T.copy(p).multiplyScalar(S.y).addScaledVector(_,-v.y).multiplyScalar(B),x.copy(_).multiplyScalar(v.x).addScaledVector(p,-S.x).multiplyScalar(B),l[H].add(T),l[I].add(T),l[E].add(T),h[H].add(x),h[I].add(x),h[E].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let H=0,I=U.length;H<I;++H){const E=U[H],B=E.start,ee=E.count;for(let K=B,V=B+ee;K<V;K+=3)y(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const P=new z,C=new z,j=new z,L=new z;function k(H){j.fromBufferAttribute(r,H),L.copy(j);const I=l[H];P.copy(I),P.sub(j.multiplyScalar(j.dot(I))).normalize(),C.crossVectors(L,I);const B=C.dot(h[H])<0?-1:1;c.setXYZW(H,P.x,P.y,P.z,B)}for(let H=0,I=U.length;H<I;++H){const E=U[H],B=E.start,ee=E.count;for(let K=B,V=B+ee;K<V;K+=3)k(e.getX(K+0)),k(e.getX(K+1)),k(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,v=n.count;m<v;m++)n.setXYZ(m,0,0,0);const r=new z,o=new z,c=new z,l=new z,h=new z,d=new z,p=new z,_=new z;if(e)for(let m=0,v=e.count;m<v;m+=3){const S=e.getX(m+0),T=e.getX(m+1),x=e.getX(m+2);r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,T),c.fromBufferAttribute(t,x),p.subVectors(c,o),_.subVectors(r,o),p.cross(_),l.fromBufferAttribute(n,S),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,x),l.add(p),h.add(p),d.add(p),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(T,h.x,h.y,h.z),n.setXYZ(x,d.x,d.y,d.z)}else for(let m=0,v=t.count;m<v;m+=3)r.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),p.subVectors(c,o),_.subVectors(r,o),p.cross(_),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(l,h){const d=l.array,p=l.itemSize,_=l.normalized,m=new d.constructor(h.length*p);let v=0,S=0;for(let T=0,x=h.length;T<x;T++){l.isInterleavedBufferAttribute?v=h[T]*l.data.stride+l.offset:v=h[T]*p;for(let y=0;y<p;y++)m[S++]=d[v++]}return new qt(m,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],d=e(h,n);t.setAttribute(l,d)}const o=this.morphAttributes;for(const l in o){const h=[],d=o[l];for(let p=0,_=d.length;p<_;p++){const m=d[p],v=e(m,n);h.push(v)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,h=c.length;l<h;l++){const d=c[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const d=n[h];e.data.attributes[h]=d.toJSON(e.data)}const r={};let o=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let _=0,m=d.length;_<m;_++){const v=d[_];p.push(v.toJSON(e.data))}p.length>0&&(r[h]=p,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const d in r){const p=r[d];this.setAttribute(d,p.clone(t))}const o=e.morphAttributes;for(const d in o){const p=[],_=o[d];for(let m=0,v=_.length;m<v;m++)p.push(_[m].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,p=c.length;d<p;d++){const _=c[d];this.addGroup(_.start,_.count,_.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Iu=new ut,Ii=new Ir,Gs=new oi,Nu=new z,Ws=new z,Xs=new z,$s=new z,wa=new z,js=new z,Fu=new z,Ys=new z;class ln extends Ft{constructor(e=new Zt,t=new md){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(o&&l){js.set(0,0,0);for(let h=0,d=o.length;h<d;h++){const p=l[h],_=o[h];p!==0&&(wa.fromBufferAttribute(_,e),c?js.addScaledVector(wa,p):js.addScaledVector(wa.sub(t),p))}t.add(js)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(o),Ii.copy(e.ray).recast(e.near),!(Gs.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Gs,Nu)===null||Ii.origin.distanceToSquared(Nu)>(e.far-e.near)**2))&&(Iu.copy(o).invert(),Ii.copy(e.ray).applyMatrix4(Iu),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let r;const o=this.geometry,c=this.material,l=o.index,h=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,_=o.attributes.normal,m=o.groups,v=o.drawRange;if(l!==null)if(Array.isArray(c))for(let S=0,T=m.length;S<T;S++){const x=m[S],y=c[x.materialIndex],U=Math.max(x.start,v.start),P=Math.min(l.count,Math.min(x.start+x.count,v.start+v.count));for(let C=U,j=P;C<j;C+=3){const L=l.getX(C),k=l.getX(C+1),H=l.getX(C+2);r=qs(this,y,e,n,d,p,_,L,k,H),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const S=Math.max(0,v.start),T=Math.min(l.count,v.start+v.count);for(let x=S,y=T;x<y;x+=3){const U=l.getX(x),P=l.getX(x+1),C=l.getX(x+2);r=qs(this,c,e,n,d,p,_,U,P,C),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(c))for(let S=0,T=m.length;S<T;S++){const x=m[S],y=c[x.materialIndex],U=Math.max(x.start,v.start),P=Math.min(h.count,Math.min(x.start+x.count,v.start+v.count));for(let C=U,j=P;C<j;C+=3){const L=C,k=C+1,H=C+2;r=qs(this,y,e,n,d,p,_,L,k,H),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const S=Math.max(0,v.start),T=Math.min(h.count,v.start+v.count);for(let x=S,y=T;x<y;x+=3){const U=x,P=x+1,C=x+2;r=qs(this,c,e,n,d,p,_,U,P,C),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function L0(i,e,t,n,r,o,c,l){let h;if(e.side===un?h=n.intersectTriangle(c,o,r,!0,l):h=n.intersectTriangle(r,o,c,e.side===xi,l),h===null)return null;Ys.copy(l),Ys.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Ys);return d<t.near||d>t.far?null:{distance:d,point:Ys.clone(),object:i}}function qs(i,e,t,n,r,o,c,l,h,d){i.getVertexPosition(l,Ws),i.getVertexPosition(h,Xs),i.getVertexPosition(d,$s);const p=L0(i,e,t,n,Ws,Xs,$s,Fu);if(p){const _=new z;bn.getBarycoord(Fu,Ws,Xs,$s,_),r&&(p.uv=bn.getInterpolatedAttribute(r,l,h,d,_,new Ae)),o&&(p.uv1=bn.getInterpolatedAttribute(o,l,h,d,_,new Ae)),c&&(p.normal=bn.getInterpolatedAttribute(c,l,h,d,_,new z),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:l,b:h,c:d,normal:new z,materialIndex:0};bn.getNormal(Ws,Xs,$s,m.normal),p.face=m,p.barycoord=_}return p}class cs extends Zt{constructor(e=1,t=1,n=1,r=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:c};const l=this;r=Math.floor(r),o=Math.floor(o),c=Math.floor(c);const h=[],d=[],p=[],_=[];let m=0,v=0;S("z","y","x",-1,-1,n,t,e,c,o,0),S("z","y","x",1,-1,n,t,-e,c,o,1),S("x","z","y",1,1,e,n,t,r,c,2),S("x","z","y",1,-1,e,n,-t,r,c,3),S("x","y","z",1,-1,e,t,n,r,o,4),S("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(h),this.setAttribute("position",new Ut(d,3)),this.setAttribute("normal",new Ut(p,3)),this.setAttribute("uv",new Ut(_,2));function S(T,x,y,U,P,C,j,L,k,H,I){const E=C/k,B=j/H,ee=C/2,K=j/2,V=L/2,le=k+1,te=H+1;let _e=0,ie=0;const Re=new z;for(let Fe=0;Fe<te;Fe++){const ke=Fe*B-K;for(let Je=0;Je<le;Je++){const mt=Je*E-ee;Re[T]=mt*U,Re[x]=ke*P,Re[y]=V,d.push(Re.x,Re.y,Re.z),Re[T]=0,Re[x]=0,Re[y]=L>0?1:-1,p.push(Re.x,Re.y,Re.z),_.push(Je/k),_.push(1-Fe/H),_e+=1}}for(let Fe=0;Fe<H;Fe++)for(let ke=0;ke<k;ke++){const Je=m+ke+le*Fe,mt=m+ke+le*(Fe+1),re=m+(ke+1)+le*(Fe+1),ve=m+(ke+1)+le*Fe;h.push(Je,mt,ve),h.push(mt,re,ve),ie+=6}l.addGroup(v,ie,I),v+=ie,m+=_e}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function an(i){const e={};for(let t=0;t<i.length;t++){const n=Rr(i[t]);for(const r in n)e[r]=n[r]}return e}function I0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const N0={clone:Rr,merge:an};var F0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Yi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F0,this.fragmentShader=U0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=I0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yd extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new z,Uu=new Ae,Ou=new Ae;class gn extends yd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,Uu,Ou),t.subVectors(Ou,Uu)}setViewOffset(e,t,n,r,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;o+=c.offsetX*r/h,t-=c.offsetY*n/d,r*=c.width/h,n*=c.height/d}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lr=-90,ur=1;class O0 extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(lr,ur,e,t);r.layers=this.layers,this.add(r);const o=new gn(lr,ur,e,t);o.layers=this.layers,this.add(o);const c=new gn(lr,ur,e,t);c.layers=this.layers,this.add(c);const l=new gn(lr,ur,e,t);l.layers=this.layers,this.add(l);const h=new gn(lr,ur,e,t);h.layers=this.layers,this.add(h);const d=new gn(lr,ur,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,c,l,h]=t;for(const d of t)this.remove(d);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===To)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,l,h,d,p]=this.children,_=e.getRenderTarget(),m=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,h),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(_,m,v),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class xd extends en{constructor(e,t,n,r,o,c,l,h,d,p){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,n,r,o,c,l,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class B0 extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new xd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cs(5,5,5),o=new Si({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:vi});o.uniforms.tEquirect.value=t;const c=new ln(r,o),l=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Gn),new O0(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(o)}}const Ta=new z,k0=new z,z0=new st;class mi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ta.subVectors(n,t).cross(k0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ta),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||z0.getNormalMatrix(e),r=this.coplanarPoint(Ta).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new oi,Zs=new z;class sl{constructor(e=new mi,t=new mi,n=new mi,r=new mi,o=new mi,c=new mi){this.planes=[e,t,n,r,o,c]}set(e,t,n,r,o,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(o),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni){const n=this.planes,r=e.elements,o=r[0],c=r[1],l=r[2],h=r[3],d=r[4],p=r[5],_=r[6],m=r[7],v=r[8],S=r[9],T=r[10],x=r[11],y=r[12],U=r[13],P=r[14],C=r[15];if(n[0].setComponents(h-o,m-d,x-v,C-y).normalize(),n[1].setComponents(h+o,m+d,x+v,C+y).normalize(),n[2].setComponents(h+c,m+p,x+S,C+U).normalize(),n[3].setComponents(h-c,m-p,x-S,C-U).normalize(),n[4].setComponents(h-l,m-_,x-T,C-P).normalize(),t===ni)n[5].setComponents(h+l,m+_,x+T,C+P).normalize();else if(t===To)n[5].setComponents(l,_,T,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Zs.x=r.normal.x>0?e.max.x:e.min.x,Zs.y=r.normal.y>0?e.max.y:e.min.y,Zs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sd(){let i=null,e=!1,t=null,n=null;function r(o,c){t(o,c),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function H0(i){const e=new WeakMap;function t(l,h){const d=l.array,p=l.usage,_=d.byteLength,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,d,p),l.onUploadCallback();let v;if(d instanceof Float32Array)v=i.FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=i.SHORT;else if(d instanceof Uint32Array)v=i.UNSIGNED_INT;else if(d instanceof Int32Array)v=i.INT;else if(d instanceof Int8Array)v=i.BYTE;else if(d instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:_}}function n(l,h,d){const p=h.array,_=h.updateRanges;if(i.bindBuffer(d,l),_.length===0)i.bufferSubData(d,0,p);else{_.sort((v,S)=>v.start-S.start);let m=0;for(let v=1;v<_.length;v++){const S=_[m],T=_[v];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++m,_[m]=T)}_.length=m+1;for(let v=0,S=_.length;v<S;v++){const T=_[v];i.bufferSubData(d,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=e.get(l);h&&(i.deleteBuffer(h.buffer),e.delete(l))}function c(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const p=e.get(l);(!p||p.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,t(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,l,h),d.version=l.version}}return{get:r,remove:o,update:c}}class Uo extends Zt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,c=t/2,l=Math.floor(n),h=Math.floor(r),d=l+1,p=h+1,_=e/l,m=t/h,v=[],S=[],T=[],x=[];for(let y=0;y<p;y++){const U=y*m-c;for(let P=0;P<d;P++){const C=P*_-o;S.push(C,-U,0),T.push(0,0,1),x.push(P/l),x.push(1-y/h)}}for(let y=0;y<h;y++)for(let U=0;U<l;U++){const P=U+d*y,C=U+d*(y+1),j=U+1+d*(y+1),L=U+1+d*y;v.push(P,C,L),v.push(C,j,L)}this.setIndex(v),this.setAttribute("position",new Ut(S,3)),this.setAttribute("normal",new Ut(T,3)),this.setAttribute("uv",new Ut(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G0=`#ifdef USE_ALPHAHASH
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
#endif`,W0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y0=`#ifdef USE_AOMAP
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
#endif`,q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0=`#ifdef USE_BATCHING
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
#endif`,K0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ey=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ty=`#ifdef USE_IRIDESCENCE
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
#endif`,ny=`#ifdef USE_BUMPMAP
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
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hy=`#define PI 3.141592653589793
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
} // validated`,dy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fy=`vec3 transformedNormal = objectNormal;
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
#endif`,py=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",yy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xy=`#ifdef USE_ENVMAP
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
#endif`,Sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,My=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,by=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ry=`#ifdef USE_GRADIENTMAP
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
}`,Py=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iy=`uniform bool receiveShadow;
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
#endif`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Fy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ky=`PhysicalMaterial material;
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
#endif`,zy=`struct PhysicalMaterial {
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
}`,Hy=`
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
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$y=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ky=`#if defined( USE_POINTS_UV )
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
#endif`,Jy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`#ifdef USE_MORPHTARGETS
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
#endif`,rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ux=`#ifdef USE_NORMALMAP
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
#endif`,hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tx=`float getShadowMask() {
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
}`,Ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cx=`#ifdef USE_SKINNING
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
#endif`,Rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Px=`#ifdef USE_SKINNING
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
#endif`,Dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fx=`#ifdef USE_TRANSMISSION
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
#endif`,Ux=`#ifdef USE_TRANSMISSION
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vx=`uniform sampler2D t2D;
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`#include <common>
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
}`,Yx=`#if DEPTH_PACKING == 3200
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
}`,qx=`#define DISTANCE
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
}`,Zx=`#define DISTANCE
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`uniform float scale;
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
}`,eS=`uniform vec3 diffuse;
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
}`,tS=`#include <common>
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
}`,nS=`uniform vec3 diffuse;
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
}`,iS=`#define LAMBERT
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
}`,rS=`#define LAMBERT
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
}`,sS=`#define MATCAP
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
}`,oS=`#define MATCAP
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
}`,aS=`#define NORMAL
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
}`,cS=`#define NORMAL
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
}`,lS=`#define PHONG
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
}`,uS=`#define PHONG
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
}`,hS=`#define STANDARD
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
}`,dS=`#define STANDARD
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
}`,fS=`#define TOON
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
}`,pS=`#define TOON
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
}`,mS=`uniform float size;
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
}`,_S=`uniform vec3 diffuse;
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
}`,gS=`#include <common>
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
}`,vS=`uniform vec3 color;
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
}`,yS=`uniform float rotation;
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
}`,xS=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:V0,alphahash_pars_fragment:G0,alphamap_fragment:W0,alphamap_pars_fragment:X0,alphatest_fragment:$0,alphatest_pars_fragment:j0,aomap_fragment:Y0,aomap_pars_fragment:q0,batching_pars_vertex:Z0,batching_vertex:K0,begin_vertex:J0,beginnormal_vertex:Q0,bsdfs:ey,iridescence_fragment:ty,bumpmap_pars_fragment:ny,clipping_planes_fragment:iy,clipping_planes_pars_fragment:ry,clipping_planes_pars_vertex:sy,clipping_planes_vertex:oy,color_fragment:ay,color_pars_fragment:cy,color_pars_vertex:ly,color_vertex:uy,common:hy,cube_uv_reflection_fragment:dy,defaultnormal_vertex:fy,displacementmap_pars_vertex:py,displacementmap_vertex:my,emissivemap_fragment:_y,emissivemap_pars_fragment:gy,colorspace_fragment:vy,colorspace_pars_fragment:yy,envmap_fragment:xy,envmap_common_pars_fragment:Sy,envmap_pars_fragment:My,envmap_pars_vertex:Ey,envmap_physical_pars_fragment:Ny,envmap_vertex:by,fog_vertex:wy,fog_pars_vertex:Ty,fog_fragment:Ay,fog_pars_fragment:Cy,gradientmap_pars_fragment:Ry,lightmap_pars_fragment:Py,lights_lambert_fragment:Dy,lights_lambert_pars_fragment:Ly,lights_pars_begin:Iy,lights_toon_fragment:Fy,lights_toon_pars_fragment:Uy,lights_phong_fragment:Oy,lights_phong_pars_fragment:By,lights_physical_fragment:ky,lights_physical_pars_fragment:zy,lights_fragment_begin:Hy,lights_fragment_maps:Vy,lights_fragment_end:Gy,logdepthbuf_fragment:Wy,logdepthbuf_pars_fragment:Xy,logdepthbuf_pars_vertex:$y,logdepthbuf_vertex:jy,map_fragment:Yy,map_pars_fragment:qy,map_particle_fragment:Zy,map_particle_pars_fragment:Ky,metalnessmap_fragment:Jy,metalnessmap_pars_fragment:Qy,morphinstance_vertex:ex,morphcolor_vertex:tx,morphnormal_vertex:nx,morphtarget_pars_vertex:ix,morphtarget_vertex:rx,normal_fragment_begin:sx,normal_fragment_maps:ox,normal_pars_fragment:ax,normal_pars_vertex:cx,normal_vertex:lx,normalmap_pars_fragment:ux,clearcoat_normal_fragment_begin:hx,clearcoat_normal_fragment_maps:dx,clearcoat_pars_fragment:fx,iridescence_pars_fragment:px,opaque_fragment:mx,packing:_x,premultiplied_alpha_fragment:gx,project_vertex:vx,dithering_fragment:yx,dithering_pars_fragment:xx,roughnessmap_fragment:Sx,roughnessmap_pars_fragment:Mx,shadowmap_pars_fragment:Ex,shadowmap_pars_vertex:bx,shadowmap_vertex:wx,shadowmask_pars_fragment:Tx,skinbase_vertex:Ax,skinning_pars_vertex:Cx,skinning_vertex:Rx,skinnormal_vertex:Px,specularmap_fragment:Dx,specularmap_pars_fragment:Lx,tonemapping_fragment:Ix,tonemapping_pars_fragment:Nx,transmission_fragment:Fx,transmission_pars_fragment:Ux,uv_pars_fragment:Ox,uv_pars_vertex:Bx,uv_vertex:kx,worldpos_vertex:zx,background_vert:Hx,background_frag:Vx,backgroundCube_vert:Gx,backgroundCube_frag:Wx,cube_vert:Xx,cube_frag:$x,depth_vert:jx,depth_frag:Yx,distanceRGBA_vert:qx,distanceRGBA_frag:Zx,equirect_vert:Kx,equirect_frag:Jx,linedashed_vert:Qx,linedashed_frag:eS,meshbasic_vert:tS,meshbasic_frag:nS,meshlambert_vert:iS,meshlambert_frag:rS,meshmatcap_vert:sS,meshmatcap_frag:oS,meshnormal_vert:aS,meshnormal_frag:cS,meshphong_vert:lS,meshphong_frag:uS,meshphysical_vert:hS,meshphysical_frag:dS,meshtoon_vert:fS,meshtoon_frag:pS,points_vert:mS,points_frag:_S,shadow_vert:gS,shadow_frag:vS,sprite_vert:yS,sprite_frag:xS},De={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Vn={basic:{uniforms:an([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:an([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ot(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:an([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:an([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:an([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ot(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:an([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:an([De.points,De.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:an([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:an([De.common,De.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:an([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:an([De.sprite,De.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:an([De.common,De.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:an([De.lights,De.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Vn.physical={uniforms:an([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Ks={r:0,b:0,g:0},Fi=new An,SS=new ut;function MS(i,e,t,n,r,o,c){const l=new ot(0);let h=o===!0?0:1,d,p,_=null,m=0,v=null;function S(U){let P=U.isScene===!0?U.background:null;return P&&P.isTexture&&(P=(U.backgroundBlurriness>0?t:e).get(P)),P}function T(U){let P=!1;const C=S(U);C===null?y(l,h):C&&C.isColor&&(y(C,1),P=!0);const j=i.xr.getEnvironmentBlendMode();j==="additive"?n.buffers.color.setClear(0,0,0,1,c):j==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(U,P){const C=S(P);C&&(C.isCubeTexture||C.mapping===No)?(p===void 0&&(p=new ln(new cs(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Rr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(j,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Fi.copy(P.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),p.material.uniforms.envMap.value=C,p.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(SS.makeRotationFromEuler(Fi)),p.material.toneMapped=St.getTransfer(C.colorSpace)!==Tt,(_!==C||m!==C.version||v!==i.toneMapping)&&(p.material.needsUpdate=!0,_=C,m=C.version,v=i.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new ln(new Uo(2,2),new Si({name:"BackgroundMaterial",uniforms:Rr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.toneMapped=St.getTransfer(C.colorSpace)!==Tt,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||m!==C.version||v!==i.toneMapping)&&(d.material.needsUpdate=!0,_=C,m=C.version,v=i.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null))}function y(U,P){U.getRGB(Ks,vd(i)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,P,c)}return{getClearColor:function(){return l},setClearColor:function(U,P=1){l.set(U),h=P,y(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(U){h=U,y(l,h)},render:T,addToRenderList:x}}function ES(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let o=r,c=!1;function l(E,B,ee,K,V){let le=!1;const te=_(K,ee,B);o!==te&&(o=te,d(o.object)),le=v(E,K,ee,V),le&&S(E,K,ee,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(le||c)&&(c=!1,C(E,B,ee,K),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function h(){return i.createVertexArray()}function d(E){return i.bindVertexArray(E)}function p(E){return i.deleteVertexArray(E)}function _(E,B,ee){const K=ee.wireframe===!0;let V=n[E.id];V===void 0&&(V={},n[E.id]=V);let le=V[B.id];le===void 0&&(le={},V[B.id]=le);let te=le[K];return te===void 0&&(te=m(h()),le[K]=te),te}function m(E){const B=[],ee=[],K=[];for(let V=0;V<t;V++)B[V]=0,ee[V]=0,K[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ee,attributeDivisors:K,object:E,attributes:{},index:null}}function v(E,B,ee,K){const V=o.attributes,le=B.attributes;let te=0;const _e=ee.getAttributes();for(const ie in _e)if(_e[ie].location>=0){const Fe=V[ie];let ke=le[ie];if(ke===void 0&&(ie==="instanceMatrix"&&E.instanceMatrix&&(ke=E.instanceMatrix),ie==="instanceColor"&&E.instanceColor&&(ke=E.instanceColor)),Fe===void 0||Fe.attribute!==ke||ke&&Fe.data!==ke.data)return!0;te++}return o.attributesNum!==te||o.index!==K}function S(E,B,ee,K){const V={},le=B.attributes;let te=0;const _e=ee.getAttributes();for(const ie in _e)if(_e[ie].location>=0){let Fe=le[ie];Fe===void 0&&(ie==="instanceMatrix"&&E.instanceMatrix&&(Fe=E.instanceMatrix),ie==="instanceColor"&&E.instanceColor&&(Fe=E.instanceColor));const ke={};ke.attribute=Fe,Fe&&Fe.data&&(ke.data=Fe.data),V[ie]=ke,te++}o.attributes=V,o.attributesNum=te,o.index=K}function T(){const E=o.newAttributes;for(let B=0,ee=E.length;B<ee;B++)E[B]=0}function x(E){y(E,0)}function y(E,B){const ee=o.newAttributes,K=o.enabledAttributes,V=o.attributeDivisors;ee[E]=1,K[E]===0&&(i.enableVertexAttribArray(E),K[E]=1),V[E]!==B&&(i.vertexAttribDivisor(E,B),V[E]=B)}function U(){const E=o.newAttributes,B=o.enabledAttributes;for(let ee=0,K=B.length;ee<K;ee++)B[ee]!==E[ee]&&(i.disableVertexAttribArray(ee),B[ee]=0)}function P(E,B,ee,K,V,le,te){te===!0?i.vertexAttribIPointer(E,B,ee,V,le):i.vertexAttribPointer(E,B,ee,K,V,le)}function C(E,B,ee,K){T();const V=K.attributes,le=ee.getAttributes(),te=B.defaultAttributeValues;for(const _e in le){const ie=le[_e];if(ie.location>=0){let Re=V[_e];if(Re===void 0&&(_e==="instanceMatrix"&&E.instanceMatrix&&(Re=E.instanceMatrix),_e==="instanceColor"&&E.instanceColor&&(Re=E.instanceColor)),Re!==void 0){const Fe=Re.normalized,ke=Re.itemSize,Je=e.get(Re);if(Je===void 0)continue;const mt=Je.buffer,re=Je.type,ve=Je.bytesPerElement,Oe=re===i.INT||re===i.UNSIGNED_INT||Re.gpuType===Zc;if(Re.isInterleavedBufferAttribute){const be=Re.data,fe=be.stride,Te=Re.offset;if(be.isInstancedInterleavedBuffer){for(let Qe=0;Qe<ie.locationSize;Qe++)y(ie.location+Qe,be.meshPerAttribute);E.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Qe=0;Qe<ie.locationSize;Qe++)x(ie.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Qe=0;Qe<ie.locationSize;Qe++)P(ie.location+Qe,ke/ie.locationSize,re,Fe,fe*ve,(Te+ke/ie.locationSize*Qe)*ve,Oe)}else{if(Re.isInstancedBufferAttribute){for(let be=0;be<ie.locationSize;be++)y(ie.location+be,Re.meshPerAttribute);E.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let be=0;be<ie.locationSize;be++)x(ie.location+be);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let be=0;be<ie.locationSize;be++)P(ie.location+be,ke/ie.locationSize,re,Fe,ke*ve,ke/ie.locationSize*be*ve,Oe)}}else if(te!==void 0){const Fe=te[_e];if(Fe!==void 0)switch(Fe.length){case 2:i.vertexAttrib2fv(ie.location,Fe);break;case 3:i.vertexAttrib3fv(ie.location,Fe);break;case 4:i.vertexAttrib4fv(ie.location,Fe);break;default:i.vertexAttrib1fv(ie.location,Fe)}}}}U()}function j(){H();for(const E in n){const B=n[E];for(const ee in B){const K=B[ee];for(const V in K)p(K[V].object),delete K[V];delete B[ee]}delete n[E]}}function L(E){if(n[E.id]===void 0)return;const B=n[E.id];for(const ee in B){const K=B[ee];for(const V in K)p(K[V].object),delete K[V];delete B[ee]}delete n[E.id]}function k(E){for(const B in n){const ee=n[B];if(ee[E.id]===void 0)continue;const K=ee[E.id];for(const V in K)p(K[V].object),delete K[V];delete ee[E.id]}}function H(){I(),c=!0,o!==r&&(o=r,d(o.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:H,resetDefaultState:I,dispose:j,releaseStatesOfGeometry:L,releaseStatesOfProgram:k,initAttributes:T,enableAttribute:x,disableUnusedAttributes:U}}function bS(i,e,t){let n;function r(d){n=d}function o(d,p){i.drawArrays(n,d,p),t.update(p,n,1)}function c(d,p,_){_!==0&&(i.drawArraysInstanced(n,d,p,_),t.update(p,n,_))}function l(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,p,0,_);let v=0;for(let S=0;S<_;S++)v+=p[S];t.update(v,n,1)}function h(d,p,_,m){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<d.length;S++)c(d[S],p[S],m[S]);else{v.multiDrawArraysInstancedWEBGL(n,d,0,p,0,m,0,_);let S=0;for(let T=0;T<_;T++)S+=p[T]*m[T];t.update(S,n,1)}}this.setMode=r,this.render=o,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function wS(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(k){return!(k!==wn&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(k){const H=k===as&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==si&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Fn&&!H)}function h(k){if(k==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=h(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const _=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),U=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),j=S>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:_,reverseDepthBuffer:m,maxTextures:v,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:U,maxVaryings:P,maxFragmentUniforms:C,vertexTextures:j,maxSamples:L}}function TS(i){const e=this;let t=null,n=0,r=!1,o=!1;const c=new mi,l=new st,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){const v=_.length!==0||m||n!==0||r;return r=m,n=_.length,v},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,m){t=p(_,m,0)},this.setState=function(_,m,v){const S=_.clippingPlanes,T=_.clipIntersection,x=_.clipShadows,y=i.get(_);if(!r||S===null||S.length===0||o&&!x)o?p(null):d();else{const U=o?0:n,P=U*4;let C=y.clippingState||null;h.value=C,C=p(S,m,P,v);for(let j=0;j!==P;++j)C[j]=t[j];y.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(_,m,v,S){const T=_!==null?_.length:0;let x=null;if(T!==0){if(x=h.value,S!==!0||x===null){const y=v+T*4,U=m.matrixWorldInverse;l.getNormalMatrix(U),(x===null||x.length<y)&&(x=new Float32Array(y));for(let P=0,C=v;P!==T;++P,C+=4)c.copy(_[P]).applyMatrix4(U,l),c.normal.toArray(x,C),x[C+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function AS(i){let e=new WeakMap;function t(c,l){return l===sc?c.mapping=br:l===oc&&(c.mapping=wr),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===sc||l===oc)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const d=new B0(h.height);return d.fromEquirectangularTexture(i,c),e.set(c,d),c.addEventListener("dispose",r),t(d.texture,c.mapping)}else return null}}return c}function r(c){const l=c.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Md extends yd{constructor(e=-1,t=1,n=1,r=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,c=n+e,l=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,c=o+d*this.view.width,l-=p*this.view.offsetY,h=l-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mr=4,Bu=[.125,.215,.35,.446,.526,.582],zi=20,Aa=new Md,ku=new ot;let Ca=null,Ra=0,Pa=0,Da=!1;const Oi=(1+Math.sqrt(5))/2,hr=1/Oi,zu=[new z(-Oi,hr,0),new z(Oi,hr,0),new z(-hr,0,Oi),new z(hr,0,Oi),new z(0,Oi,-hr),new z(0,Oi,hr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Hu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ca=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ca,Ra,Pa),this._renderer.xr.enabled=Da,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ca=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:as,format:wn,colorSpace:Lr,depthBuffer:!1},r=Vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CS(o)),this._blurMaterial=RS(o,e,t)}return r}_compileMaterial(e){const t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,n,r){const l=new gn(90,1,t,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,m=p.toneMapping;p.getClearColor(ku),p.toneMapping=yi,p.autoClear=!1;const v=new md({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),S=new ln(new cs,v);let T=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,T=!0):(v.color.copy(ku),T=!0);for(let y=0;y<6;y++){const U=y%3;U===0?(l.up.set(0,h[y],0),l.lookAt(d[y],0,0)):U===1?(l.up.set(0,0,h[y]),l.lookAt(0,d[y],0)):(l.up.set(0,h[y],0),l.lookAt(0,0,d[y]));const P=this._cubeSize;Js(r,U*P,y>2?P:0,P,P),p.setRenderTarget(r),T&&p.render(S,l),p.render(e,l)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=m,p.autoClear=_,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===br||e.mapping===wr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());const o=r?this._cubemapMaterial:this._equirectMaterial,c=new ln(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;const h=this._cubeSize;Js(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(c,Aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=zu[(r-o-1)%zu.length];this._blur(e,o-1,o,c,l)}t.autoClear=n}_blur(e,t,n,r,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",o),this._halfBlur(c,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,c,l){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new ln(this._lodPlanes[r],d),m=d.uniforms,v=this._sizeLods[n]-1,S=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*zi-1),T=o/S,x=isFinite(o)?1+Math.floor(p*T):zi;x>zi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${zi}`);const y=[];let U=0;for(let k=0;k<zi;++k){const H=k/T,I=Math.exp(-H*H/2);y.push(I),k===0?U+=I:k<x&&(U+=2*I)}for(let k=0;k<y.length;k++)y[k]=y[k]/U;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=y,m.latitudinal.value=c==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:P}=this;m.dTheta.value=S,m.mipInt.value=P-n;const C=this._sizeLods[r],j=3*C*(r>P-mr?r-P+mr:0),L=4*(this._cubeSize-C);Js(t,j,L,3*C,2*C),h.setRenderTarget(t),h.render(_,Aa)}}function CS(i){const e=[],t=[],n=[];let r=i;const o=i-mr+1+Bu.length;for(let c=0;c<o;c++){const l=Math.pow(2,r);t.push(l);let h=1/l;c>i-mr?h=Bu[c-i+mr-1]:c===0&&(h=0),n.push(h);const d=1/(l-2),p=-d,_=1+d,m=[p,p,_,p,_,_,p,p,_,_,p,_],v=6,S=6,T=3,x=2,y=1,U=new Float32Array(T*S*v),P=new Float32Array(x*S*v),C=new Float32Array(y*S*v);for(let L=0;L<v;L++){const k=L%3*2/3-1,H=L>2?0:-1,I=[k,H,0,k+2/3,H,0,k+2/3,H+1,0,k,H,0,k+2/3,H+1,0,k,H+1,0];U.set(I,T*S*L),P.set(m,x*S*L);const E=[L,L,L,L,L,L];C.set(E,y*S*L)}const j=new Zt;j.setAttribute("position",new qt(U,T)),j.setAttribute("uv",new qt(P,x)),j.setAttribute("faceIndex",new qt(C,y)),e.push(j),r>mr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vu(i,e,t){const n=new Xi(i,e,t);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function RS(i,e,t){const n=new Float32Array(zi),r=new z(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ol(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Gu(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Wu(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function ol(){return`

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
	`}function PS(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const h=l.mapping,d=h===sc||h===oc,p=h===br||h===wr;if(d||p){let _=e.get(l);const m=_!==void 0?_.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==m)return t===null&&(t=new Hu(i)),_=d?t.fromEquirectangular(l,_):t.fromCubemap(l,_),_.texture.pmremVersion=l.pmremVersion,e.set(l,_),_.texture;if(_!==void 0)return _.texture;{const v=l.image;return d&&v&&v.height>0||p&&v&&r(v)?(t===null&&(t=new Hu(i)),_=d?t.fromEquirectangular(l):t.fromCubemap(l),_.texture.pmremVersion=l.pmremVersion,e.set(l,_),l.addEventListener("dispose",o),_.texture):null}}}return l}function r(l){let h=0;const d=6;for(let p=0;p<d;p++)l[p]!==void 0&&h++;return h===d}function o(l){const h=l.target;h.removeEventListener("dispose",o);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function DS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Zr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function LS(i,e,t,n){const r={},o=new WeakMap;function c(_){const m=_.target;m.index!==null&&e.remove(m.index);for(const S in m.attributes)e.remove(m.attributes[S]);for(const S in m.morphAttributes){const T=m.morphAttributes[S];for(let x=0,y=T.length;x<y;x++)e.remove(T[x])}m.removeEventListener("dispose",c),delete r[m.id];const v=o.get(m);v&&(e.remove(v),o.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(_,m){return r[m.id]===!0||(m.addEventListener("dispose",c),r[m.id]=!0,t.memory.geometries++),m}function h(_){const m=_.attributes;for(const S in m)e.update(m[S],i.ARRAY_BUFFER);const v=_.morphAttributes;for(const S in v){const T=v[S];for(let x=0,y=T.length;x<y;x++)e.update(T[x],i.ARRAY_BUFFER)}}function d(_){const m=[],v=_.index,S=_.attributes.position;let T=0;if(v!==null){const U=v.array;T=v.version;for(let P=0,C=U.length;P<C;P+=3){const j=U[P+0],L=U[P+1],k=U[P+2];m.push(j,L,L,k,k,j)}}else if(S!==void 0){const U=S.array;T=S.version;for(let P=0,C=U.length/3-1;P<C;P+=3){const j=P+0,L=P+1,k=P+2;m.push(j,L,L,k,k,j)}}else return;const x=new(hd(m)?gd:_d)(m,1);x.version=T;const y=o.get(_);y&&e.remove(y),o.set(_,x)}function p(_){const m=o.get(_);if(m){const v=_.index;v!==null&&m.version<v.version&&d(_)}else d(_);return o.get(_)}return{get:l,update:h,getWireframeAttribute:p}}function IS(i,e,t){let n;function r(m){n=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,v){i.drawElements(n,v,o,m*c),t.update(v,n,1)}function d(m,v,S){S!==0&&(i.drawElementsInstanced(n,v,o,m*c,S),t.update(v,n,S))}function p(m,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,o,m,0,S);let x=0;for(let y=0;y<S;y++)x+=v[y];t.update(x,n,1)}function _(m,v,S,T){if(S===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<m.length;y++)d(m[y]/c,v[y],T[y]);else{x.multiDrawElementsInstancedWEBGL(n,v,0,o,m,0,T,0,S);let y=0;for(let U=0;U<S;U++)y+=v[U]*T[U];t.update(y,n,1)}}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function NS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,c,l){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=l*(o/3);break;case i.LINES:t.lines+=l*(o/2);break;case i.LINE_STRIP:t.lines+=l*(o-1);break;case i.LINE_LOOP:t.lines+=l*o;break;case i.POINTS:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function FS(i,e,t){const n=new WeakMap,r=new Et;function o(c,l,h){const d=c.morphTargetInfluences,p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,_=p!==void 0?p.length:0;let m=n.get(l);if(m===void 0||m.count!==_){let I=function(){k.dispose(),n.delete(l),l.removeEventListener("dispose",I)};m!==void 0&&m.texture.dispose();const v=l.morphAttributes.position!==void 0,S=l.morphAttributes.normal!==void 0,T=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],y=l.morphAttributes.normal||[],U=l.morphAttributes.color||[];let P=0;v===!0&&(P=1),S===!0&&(P=2),T===!0&&(P=3);let C=l.attributes.position.count*P,j=1;C>e.maxTextureSize&&(j=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const L=new Float32Array(C*j*4*_),k=new fd(L,C,j,_);k.type=Fn,k.needsUpdate=!0;const H=P*4;for(let E=0;E<_;E++){const B=x[E],ee=y[E],K=U[E],V=C*j*4*E;for(let le=0;le<B.count;le++){const te=le*H;v===!0&&(r.fromBufferAttribute(B,le),L[V+te+0]=r.x,L[V+te+1]=r.y,L[V+te+2]=r.z,L[V+te+3]=0),S===!0&&(r.fromBufferAttribute(ee,le),L[V+te+4]=r.x,L[V+te+5]=r.y,L[V+te+6]=r.z,L[V+te+7]=0),T===!0&&(r.fromBufferAttribute(K,le),L[V+te+8]=r.x,L[V+te+9]=r.y,L[V+te+10]=r.z,L[V+te+11]=K.itemSize===4?r.w:1)}}m={count:_,texture:k,size:new Ae(C,j)},n.set(l,m),l.addEventListener("dispose",I)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let v=0;for(let T=0;T<d.length;T++)v+=d[T];const S=l.morphTargetsRelative?1:1-v;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",d)}h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:o}}function US(i,e,t,n){let r=new WeakMap;function o(h){const d=n.render.frame,p=h.geometry,_=e.get(h,p);if(r.get(_)!==d&&(e.update(_),r.set(_,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==d&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){const m=h.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return _}function c(){r=new WeakMap}function l(h){const d=h.target;d.removeEventListener("dispose",l),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:c}}class Ed extends en{constructor(e,t,n,r,o,c,l,h,d,p=yr){if(p!==yr&&p!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===yr&&(n=Wi),n===void 0&&p===Ar&&(n=Tr),super(null,r,o,c,l,h,p,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:yn,this.minFilter=h!==void 0?h:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bd=new en,Xu=new Ed(1,1),wd=new fd,Td=new M0,Ad=new xd,$u=[],ju=[],Yu=new Float32Array(16),qu=new Float32Array(9),Zu=new Float32Array(4);function Nr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=$u[r];if(o===void 0&&(o=new Float32Array(r),$u[r]=o),e!==0){n.toArray(o,0);for(let c=1,l=0;c!==e;++c)l+=t,i[c].toArray(o,l)}return o}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Oo(i,e){let t=ju[e];t===void 0&&(t=new Int32Array(e),ju[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function OS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function BS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function kS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function zS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function HS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Zu.set(n),i.uniformMatrix2fv(this.addr,!1,Zu),Xt(t,n)}}function VS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;qu.set(n),i.uniformMatrix3fv(this.addr,!1,qu),Xt(t,n)}}function GS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Yu.set(n),i.uniformMatrix4fv(this.addr,!1,Yu),Xt(t,n)}}function WS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function XS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function $S(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function jS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function YS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function ZS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function KS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function JS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Xu.compareFunction=ud,o=Xu):o=bd,t.setTexture2D(e||o,r)}function QS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Td,r)}function eM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ad,r)}function tM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||wd,r)}function nM(i){switch(i){case 5126:return OS;case 35664:return BS;case 35665:return kS;case 35666:return zS;case 35674:return HS;case 35675:return VS;case 35676:return GS;case 5124:case 35670:return WS;case 35667:case 35671:return XS;case 35668:case 35672:return $S;case 35669:case 35673:return jS;case 5125:return YS;case 36294:return qS;case 36295:return ZS;case 36296:return KS;case 35678:case 36198:case 36298:case 36306:case 35682:return JS;case 35679:case 36299:case 36307:return QS;case 35680:case 36300:case 36308:case 36293:return eM;case 36289:case 36303:case 36311:case 36292:return tM}}function iM(i,e){i.uniform1fv(this.addr,e)}function rM(i,e){const t=Nr(e,this.size,2);i.uniform2fv(this.addr,t)}function sM(i,e){const t=Nr(e,this.size,3);i.uniform3fv(this.addr,t)}function oM(i,e){const t=Nr(e,this.size,4);i.uniform4fv(this.addr,t)}function aM(i,e){const t=Nr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cM(i,e){const t=Nr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lM(i,e){const t=Nr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function uM(i,e){i.uniform1iv(this.addr,e)}function hM(i,e){i.uniform2iv(this.addr,e)}function dM(i,e){i.uniform3iv(this.addr,e)}function fM(i,e){i.uniform4iv(this.addr,e)}function pM(i,e){i.uniform1uiv(this.addr,e)}function mM(i,e){i.uniform2uiv(this.addr,e)}function _M(i,e){i.uniform3uiv(this.addr,e)}function gM(i,e){i.uniform4uiv(this.addr,e)}function vM(i,e,t){const n=this.cache,r=e.length,o=Oo(t,r);Wt(n,o)||(i.uniform1iv(this.addr,o),Xt(n,o));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||bd,o[c])}function yM(i,e,t){const n=this.cache,r=e.length,o=Oo(t,r);Wt(n,o)||(i.uniform1iv(this.addr,o),Xt(n,o));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||Td,o[c])}function xM(i,e,t){const n=this.cache,r=e.length,o=Oo(t,r);Wt(n,o)||(i.uniform1iv(this.addr,o),Xt(n,o));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||Ad,o[c])}function SM(i,e,t){const n=this.cache,r=e.length,o=Oo(t,r);Wt(n,o)||(i.uniform1iv(this.addr,o),Xt(n,o));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||wd,o[c])}function MM(i){switch(i){case 5126:return iM;case 35664:return rM;case 35665:return sM;case 35666:return oM;case 35674:return aM;case 35675:return cM;case 35676:return lM;case 5124:case 35670:return uM;case 35667:case 35671:return hM;case 35668:case 35672:return dM;case 35669:case 35673:return fM;case 5125:return pM;case 36294:return mM;case 36295:return _M;case 36296:return gM;case 35678:case 36198:case 36298:case 36306:case 35682:return vM;case 35679:case 36299:case 36307:return yM;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return SM}}class EM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nM(t.type)}}class bM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=MM(t.type)}}class wM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,c=r.length;o!==c;++o){const l=r[o];l.setValue(e,t[l.id],n)}}}const La=/(\w+)(\])?(\[|\.)?/g;function Ku(i,e){i.seq.push(e),i.map[e.id]=e}function TM(i,e,t){const n=i.name,r=n.length;for(La.lastIndex=0;;){const o=La.exec(n),c=La.lastIndex;let l=o[1];const h=o[2]==="]",d=o[3];if(h&&(l=l|0),d===void 0||d==="["&&c+2===r){Ku(t,d===void 0?new EM(l,i,e):new bM(l,i,e));break}else{let _=t.map[l];_===void 0&&(_=new wM(l),Ku(t,_)),t=_}}}class Eo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);TM(o,c,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,c=t.length;o!==c;++o){const l=t[o],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function Ju(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const AM=37297;let CM=0;function RM(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=r;c<o;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}const Qu=new st;function PM(i){St._getMatrix(Qu,St.workingColorSpace,i);const e=`mat3( ${Qu.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(i)){case Fo:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function eh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+RM(i.getShaderSource(e),c)}else return r}function DM(i,e){const t=PM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function LM(i,e){let t;switch(e){case Dv:t="Linear";break;case Lv:t="Reinhard";break;case Iv:t="Cineon";break;case Nv:t="ACESFilmic";break;case Uv:t="AgX";break;case Ov:t="Neutral";break;case Fv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qs=new z;function IM(){St.getLuminanceCoefficients(Qs);const i=Qs.x.toFixed(4),e=Qs.y.toFixed(4),t=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function FM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function UM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),c=o.name;let l=1;o.type===i.FLOAT_MAT2&&(l=2),o.type===i.FLOAT_MAT3&&(l=3),o.type===i.FLOAT_MAT4&&(l=4),t[c]={type:o.type,location:i.getAttribLocation(e,c),locationSize:l}}return t}function Kr(i){return i!==""}function th(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(i){return i.replace(OM,kM)}const BM=new Map;function kM(i,e){let t=ct[e];if(t===void 0){const n=BM.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Oc(t)}const zM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(i){return i.replace(zM,HM)}function HM(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function rh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function VM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===uv?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function GM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case br:case wr:e="ENVMAP_TYPE_CUBE";break;case No:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wr:e="ENVMAP_MODE_REFRACTION";break}return e}function XM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jh:e="ENVMAP_BLENDING_MULTIPLY";break;case Rv:e="ENVMAP_BLENDING_MIX";break;case Pv:e="ENVMAP_BLENDING_ADD";break}return e}function $M(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jM(i,e,t,n){const r=i.getContext(),o=t.defines;let c=t.vertexShader,l=t.fragmentShader;const h=VM(t),d=GM(t),p=WM(t),_=XM(t),m=$M(t),v=NM(t),S=FM(o),T=r.createProgram();let x,y,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Kr).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Kr).join(`
`),y.length>0&&(y+=`
`)):(x=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),y=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?ct.tonemapping_pars_fragment:"",t.toneMapping!==yi?LM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,DM("linearToOutputTexel",t.outputColorSpace),IM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),c=Oc(c),c=th(c,t),c=nh(c,t),l=Oc(l),l=th(l,t),l=nh(l,t),c=ih(c),l=ih(l),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=U+x+c,C=U+y+l,j=Ju(r,r.VERTEX_SHADER,P),L=Ju(r,r.FRAGMENT_SHADER,C);r.attachShader(T,j),r.attachShader(T,L),t.index0AttributeName!==void 0?r.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function k(B){if(i.debug.checkShaderErrors){const ee=r.getProgramInfoLog(T).trim(),K=r.getShaderInfoLog(j).trim(),V=r.getShaderInfoLog(L).trim();let le=!0,te=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(le=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,T,j,L);else{const _e=eh(r,j,"vertex"),ie=eh(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ee+`
`+_e+`
`+ie)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(K===""||V==="")&&(te=!1);te&&(B.diagnostics={runnable:le,programLog:ee,vertexShader:{log:K,prefix:x},fragmentShader:{log:V,prefix:y}})}r.deleteShader(j),r.deleteShader(L),H=new Eo(r,T),I=UM(r,T)}let H;this.getUniforms=function(){return H===void 0&&k(this),H};let I;this.getAttributes=function(){return I===void 0&&k(this),I};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(T,AM)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=j,this.fragmentShader=L,this}let YM=0;class qM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ZM(e),t.set(e,n)),n}}class ZM{constructor(e){this.id=YM++,this.code=e,this.usedTimes=0}}function KM(i,e,t,n,r,o,c){const l=new rl,h=new qM,d=new Set,p=[],_=r.logarithmicDepthBuffer,m=r.vertexTextures;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(I){return d.add(I),I===0?"uv":`uv${I}`}function x(I,E,B,ee,K){const V=ee.fog,le=K.geometry,te=I.isMeshStandardMaterial?ee.environment:null,_e=(I.isMeshStandardMaterial?t:e).get(I.envMap||te),ie=_e&&_e.mapping===No?_e.image.height:null,Re=S[I.type];I.precision!==null&&(v=r.getMaxPrecision(I.precision),v!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",v,"instead."));const Fe=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,ke=Fe!==void 0?Fe.length:0;let Je=0;le.morphAttributes.position!==void 0&&(Je=1),le.morphAttributes.normal!==void 0&&(Je=2),le.morphAttributes.color!==void 0&&(Je=3);let mt,re,ve,Oe;if(Re){const lt=Vn[Re];mt=lt.vertexShader,re=lt.fragmentShader}else mt=I.vertexShader,re=I.fragmentShader,h.update(I),ve=h.getVertexShaderID(I),Oe=h.getFragmentShaderID(I);const be=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Te=K.isInstancedMesh===!0,Qe=K.isBatchedMesh===!0,dt=!!I.map,de=!!I.matcap,we=!!_e,O=!!I.aoMap,je=!!I.lightMap,Se=!!I.bumpMap,ze=!!I.normalMap,Ce=!!I.displacementMap,Ze=!!I.emissiveMap,Ne=!!I.metalnessMap,N=!!I.roughnessMap,R=I.anisotropy>0,J=I.clearcoat>0,ue=I.dispersion>0,he=I.iridescence>0,oe=I.sheen>0,Ve=I.transmission>0,Pe=R&&!!I.anisotropyMap,Be=J&&!!I.clearcoatMap,ht=J&&!!I.clearcoatNormalMap,Ee=J&&!!I.clearcoatRoughnessMap,Ge=he&&!!I.iridescenceMap,et=he&&!!I.iridescenceThicknessMap,nt=oe&&!!I.sheenColorMap,We=oe&&!!I.sheenRoughnessMap,ft=!!I.specularMap,it=!!I.specularColorMap,wt=!!I.specularIntensityMap,G=Ve&&!!I.transmissionMap,Le=Ve&&!!I.thicknessMap,se=!!I.gradientMap,pe=!!I.alphaMap,Z=I.alphaTest>0,q=!!I.alphaHash,Ke=!!I.extensions;let Lt=yi;I.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Lt=i.toneMapping);const It={shaderID:Re,shaderType:I.type,shaderName:I.name,vertexShader:mt,fragmentShader:re,defines:I.defines,customVertexShaderID:ve,customFragmentShaderID:Oe,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:v,batching:Qe,batchingColor:Qe&&K._colorsTexture!==null,instancing:Te,instancingColor:Te&&K.instanceColor!==null,instancingMorph:Te&&K.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Lr,alphaToCoverage:!!I.alphaToCoverage,map:dt,matcap:de,envMap:we,envMapMode:we&&_e.mapping,envMapCubeUVHeight:ie,aoMap:O,lightMap:je,bumpMap:Se,normalMap:ze,displacementMap:m&&Ce,emissiveMap:Ze,normalMapObjectSpace:ze&&I.normalMapType===Gv,normalMapTangentSpace:ze&&I.normalMapType===ld,metalnessMap:Ne,roughnessMap:N,anisotropy:R,anisotropyMap:Pe,clearcoat:J,clearcoatMap:Be,clearcoatNormalMap:ht,clearcoatRoughnessMap:Ee,dispersion:ue,iridescence:he,iridescenceMap:Ge,iridescenceThicknessMap:et,sheen:oe,sheenColorMap:nt,sheenRoughnessMap:We,specularMap:ft,specularColorMap:it,specularIntensityMap:wt,transmission:Ve,transmissionMap:G,thicknessMap:Le,gradientMap:se,opaque:I.transparent===!1&&I.blending===vr&&I.alphaToCoverage===!1,alphaMap:pe,alphaTest:Z,alphaHash:q,combine:I.combine,mapUv:dt&&T(I.map.channel),aoMapUv:O&&T(I.aoMap.channel),lightMapUv:je&&T(I.lightMap.channel),bumpMapUv:Se&&T(I.bumpMap.channel),normalMapUv:ze&&T(I.normalMap.channel),displacementMapUv:Ce&&T(I.displacementMap.channel),emissiveMapUv:Ze&&T(I.emissiveMap.channel),metalnessMapUv:Ne&&T(I.metalnessMap.channel),roughnessMapUv:N&&T(I.roughnessMap.channel),anisotropyMapUv:Pe&&T(I.anisotropyMap.channel),clearcoatMapUv:Be&&T(I.clearcoatMap.channel),clearcoatNormalMapUv:ht&&T(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&T(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&T(I.iridescenceMap.channel),iridescenceThicknessMapUv:et&&T(I.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&T(I.sheenColorMap.channel),sheenRoughnessMapUv:We&&T(I.sheenRoughnessMap.channel),specularMapUv:ft&&T(I.specularMap.channel),specularColorMapUv:it&&T(I.specularColorMap.channel),specularIntensityMapUv:wt&&T(I.specularIntensityMap.channel),transmissionMapUv:G&&T(I.transmissionMap.channel),thicknessMapUv:Le&&T(I.thicknessMap.channel),alphaMapUv:pe&&T(I.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(ze||R),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!le.attributes.uv&&(dt||pe),fog:!!V,useFog:I.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:fe,skinning:K.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:Je,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:dt&&I.map.isVideoTexture===!0&&St.getTransfer(I.map.colorSpace)===Tt,decodeVideoTextureEmissive:Ze&&I.emissiveMap.isVideoTexture===!0&&St.getTransfer(I.emissiveMap.colorSpace)===Tt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===ti,flipSided:I.side===un,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Ke&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&I.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return It.vertexUv1s=d.has(1),It.vertexUv2s=d.has(2),It.vertexUv3s=d.has(3),d.clear(),It}function y(I){const E=[];if(I.shaderID?E.push(I.shaderID):(E.push(I.customVertexShaderID),E.push(I.customFragmentShaderID)),I.defines!==void 0)for(const B in I.defines)E.push(B),E.push(I.defines[B]);return I.isRawShaderMaterial===!1&&(U(E,I),P(E,I),E.push(i.outputColorSpace)),E.push(I.customProgramCacheKey),E.join()}function U(I,E){I.push(E.precision),I.push(E.outputColorSpace),I.push(E.envMapMode),I.push(E.envMapCubeUVHeight),I.push(E.mapUv),I.push(E.alphaMapUv),I.push(E.lightMapUv),I.push(E.aoMapUv),I.push(E.bumpMapUv),I.push(E.normalMapUv),I.push(E.displacementMapUv),I.push(E.emissiveMapUv),I.push(E.metalnessMapUv),I.push(E.roughnessMapUv),I.push(E.anisotropyMapUv),I.push(E.clearcoatMapUv),I.push(E.clearcoatNormalMapUv),I.push(E.clearcoatRoughnessMapUv),I.push(E.iridescenceMapUv),I.push(E.iridescenceThicknessMapUv),I.push(E.sheenColorMapUv),I.push(E.sheenRoughnessMapUv),I.push(E.specularMapUv),I.push(E.specularColorMapUv),I.push(E.specularIntensityMapUv),I.push(E.transmissionMapUv),I.push(E.thicknessMapUv),I.push(E.combine),I.push(E.fogExp2),I.push(E.sizeAttenuation),I.push(E.morphTargetsCount),I.push(E.morphAttributeCount),I.push(E.numDirLights),I.push(E.numPointLights),I.push(E.numSpotLights),I.push(E.numSpotLightMaps),I.push(E.numHemiLights),I.push(E.numRectAreaLights),I.push(E.numDirLightShadows),I.push(E.numPointLightShadows),I.push(E.numSpotLightShadows),I.push(E.numSpotLightShadowsWithMaps),I.push(E.numLightProbes),I.push(E.shadowMapType),I.push(E.toneMapping),I.push(E.numClippingPlanes),I.push(E.numClipIntersection),I.push(E.depthPacking)}function P(I,E){l.disableAll(),E.supportsVertexTextures&&l.enable(0),E.instancing&&l.enable(1),E.instancingColor&&l.enable(2),E.instancingMorph&&l.enable(3),E.matcap&&l.enable(4),E.envMap&&l.enable(5),E.normalMapObjectSpace&&l.enable(6),E.normalMapTangentSpace&&l.enable(7),E.clearcoat&&l.enable(8),E.iridescence&&l.enable(9),E.alphaTest&&l.enable(10),E.vertexColors&&l.enable(11),E.vertexAlphas&&l.enable(12),E.vertexUv1s&&l.enable(13),E.vertexUv2s&&l.enable(14),E.vertexUv3s&&l.enable(15),E.vertexTangents&&l.enable(16),E.anisotropy&&l.enable(17),E.alphaHash&&l.enable(18),E.batching&&l.enable(19),E.dispersion&&l.enable(20),E.batchingColor&&l.enable(21),I.push(l.mask),l.disableAll(),E.fog&&l.enable(0),E.useFog&&l.enable(1),E.flatShading&&l.enable(2),E.logarithmicDepthBuffer&&l.enable(3),E.reverseDepthBuffer&&l.enable(4),E.skinning&&l.enable(5),E.morphTargets&&l.enable(6),E.morphNormals&&l.enable(7),E.morphColors&&l.enable(8),E.premultipliedAlpha&&l.enable(9),E.shadowMapEnabled&&l.enable(10),E.doubleSided&&l.enable(11),E.flipSided&&l.enable(12),E.useDepthPacking&&l.enable(13),E.dithering&&l.enable(14),E.transmission&&l.enable(15),E.sheen&&l.enable(16),E.opaque&&l.enable(17),E.pointsUvs&&l.enable(18),E.decodeVideoTexture&&l.enable(19),E.decodeVideoTextureEmissive&&l.enable(20),E.alphaToCoverage&&l.enable(21),I.push(l.mask)}function C(I){const E=S[I.type];let B;if(E){const ee=Vn[E];B=N0.clone(ee.uniforms)}else B=I.uniforms;return B}function j(I,E){let B;for(let ee=0,K=p.length;ee<K;ee++){const V=p[ee];if(V.cacheKey===E){B=V,++B.usedTimes;break}}return B===void 0&&(B=new jM(i,E,I,o),p.push(B)),B}function L(I){if(--I.usedTimes===0){const E=p.indexOf(I);p[E]=p[p.length-1],p.pop(),I.destroy()}}function k(I){h.remove(I)}function H(){h.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:C,acquireProgram:j,releaseProgram:L,releaseShaderCache:k,programs:p,dispose:H}}function JM(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let l=i.get(c);return l===void 0&&(l={},i.set(c,l)),l}function n(c){i.delete(c)}function r(c,l,h){i.get(c)[l]=h}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function QM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function sh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function oh(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function c(_,m,v,S,T,x){let y=i[e];return y===void 0?(y={id:_.id,object:_,geometry:m,material:v,groupOrder:S,renderOrder:_.renderOrder,z:T,group:x},i[e]=y):(y.id=_.id,y.object=_,y.geometry=m,y.material=v,y.groupOrder=S,y.renderOrder=_.renderOrder,y.z=T,y.group=x),e++,y}function l(_,m,v,S,T,x){const y=c(_,m,v,S,T,x);v.transmission>0?n.push(y):v.transparent===!0?r.push(y):t.push(y)}function h(_,m,v,S,T,x){const y=c(_,m,v,S,T,x);v.transmission>0?n.unshift(y):v.transparent===!0?r.unshift(y):t.unshift(y)}function d(_,m){t.length>1&&t.sort(_||QM),n.length>1&&n.sort(m||sh),r.length>1&&r.sort(m||sh)}function p(){for(let _=e,m=i.length;_<m;_++){const v=i[_];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:l,unshift:h,finish:p,sort:d}}function eE(){let i=new WeakMap;function e(n,r){const o=i.get(n);let c;return o===void 0?(c=new oh,i.set(n,[c])):r>=o.length?(c=new oh,o.push(c)):c=o[r],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function tE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ot};break;case"SpotLight":t={position:new z,direction:new z,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function nE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let iE=0;function rE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sE(i){const e=new tE,t=nE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new z);const r=new z,o=new ut,c=new ut;function l(d){let p=0,_=0,m=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let v=0,S=0,T=0,x=0,y=0,U=0,P=0,C=0,j=0,L=0,k=0;d.sort(rE);for(let I=0,E=d.length;I<E;I++){const B=d[I],ee=B.color,K=B.intensity,V=B.distance,le=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=ee.r*K,_+=ee.g*K,m+=ee.b*K;else if(B.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(B.sh.coefficients[te],K);k++}else if(B.isDirectionalLight){const te=e.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const _e=B.shadow,ie=t.get(B);ie.shadowIntensity=_e.intensity,ie.shadowBias=_e.bias,ie.shadowNormalBias=_e.normalBias,ie.shadowRadius=_e.radius,ie.shadowMapSize=_e.mapSize,n.directionalShadow[v]=ie,n.directionalShadowMap[v]=le,n.directionalShadowMatrix[v]=B.shadow.matrix,U++}n.directional[v]=te,v++}else if(B.isSpotLight){const te=e.get(B);te.position.setFromMatrixPosition(B.matrixWorld),te.color.copy(ee).multiplyScalar(K),te.distance=V,te.coneCos=Math.cos(B.angle),te.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),te.decay=B.decay,n.spot[T]=te;const _e=B.shadow;if(B.map&&(n.spotLightMap[j]=B.map,j++,_e.updateMatrices(B),B.castShadow&&L++),n.spotLightMatrix[T]=_e.matrix,B.castShadow){const ie=t.get(B);ie.shadowIntensity=_e.intensity,ie.shadowBias=_e.bias,ie.shadowNormalBias=_e.normalBias,ie.shadowRadius=_e.radius,ie.shadowMapSize=_e.mapSize,n.spotShadow[T]=ie,n.spotShadowMap[T]=le,C++}T++}else if(B.isRectAreaLight){const te=e.get(B);te.color.copy(ee).multiplyScalar(K),te.halfWidth.set(B.width*.5,0,0),te.halfHeight.set(0,B.height*.5,0),n.rectArea[x]=te,x++}else if(B.isPointLight){const te=e.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity),te.distance=B.distance,te.decay=B.decay,B.castShadow){const _e=B.shadow,ie=t.get(B);ie.shadowIntensity=_e.intensity,ie.shadowBias=_e.bias,ie.shadowNormalBias=_e.normalBias,ie.shadowRadius=_e.radius,ie.shadowMapSize=_e.mapSize,ie.shadowCameraNear=_e.camera.near,ie.shadowCameraFar=_e.camera.far,n.pointShadow[S]=ie,n.pointShadowMap[S]=le,n.pointShadowMatrix[S]=B.shadow.matrix,P++}n.point[S]=te,S++}else if(B.isHemisphereLight){const te=e.get(B);te.skyColor.copy(B.color).multiplyScalar(K),te.groundColor.copy(B.groundColor).multiplyScalar(K),n.hemi[y]=te,y++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=_,n.ambient[2]=m;const H=n.hash;(H.directionalLength!==v||H.pointLength!==S||H.spotLength!==T||H.rectAreaLength!==x||H.hemiLength!==y||H.numDirectionalShadows!==U||H.numPointShadows!==P||H.numSpotShadows!==C||H.numSpotMaps!==j||H.numLightProbes!==k)&&(n.directional.length=v,n.spot.length=T,n.rectArea.length=x,n.point.length=S,n.hemi.length=y,n.directionalShadow.length=U,n.directionalShadowMap.length=U,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=U,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=C+j-L,n.spotLightMap.length=j,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=k,H.directionalLength=v,H.pointLength=S,H.spotLength=T,H.rectAreaLength=x,H.hemiLength=y,H.numDirectionalShadows=U,H.numPointShadows=P,H.numSpotShadows=C,H.numSpotMaps=j,H.numLightProbes=k,n.version=iE++)}function h(d,p){let _=0,m=0,v=0,S=0,T=0;const x=p.matrixWorldInverse;for(let y=0,U=d.length;y<U;y++){const P=d[y];if(P.isDirectionalLight){const C=n.directional[_];C.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(x),_++}else if(P.isSpotLight){const C=n.spot[v];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(x),v++}else if(P.isRectAreaLight){const C=n.rectArea[S];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(x),c.identity(),o.copy(P.matrixWorld),o.premultiply(x),c.extractRotation(o),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),S++}else if(P.isPointLight){const C=n.point[m];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(x),m++}else if(P.isHemisphereLight){const C=n.hemi[T];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(x),T++}}}return{setup:l,setupView:h,state:n}}function ah(i){const e=new sE(i),t=[],n=[];function r(p){d.camera=p,t.length=0,n.length=0}function o(p){t.push(p)}function c(p){n.push(p)}function l(){e.setup(t)}function h(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:c}}function oE(i){let e=new WeakMap;function t(r,o=0){const c=e.get(r);let l;return c===void 0?(l=new ah(i),e.set(r,[l])):o>=c.length?(l=new ah(i),c.push(l)):l=c[o],l}function n(){e=new WeakMap}return{get:t,dispose:n}}class aE extends Yi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cE extends Yi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uE=`uniform sampler2D shadow_pass;
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
}`;function hE(i,e,t){let n=new sl;const r=new Ae,o=new Ae,c=new Et,l=new aE({depthPacking:Vv}),h=new cE,d={},p=t.maxTextureSize,_={[xi]:un,[un]:xi,[ti]:ti},m=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:lE,fragmentShader:uE}),v=m.clone();v.defines.HORIZONTAL_PASS=1;const S=new Zt;S.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ln(S,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let y=this.type;this.render=function(L,k,H){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;const I=i.getRenderTarget(),E=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),ee=i.state;ee.setBlending(vi),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const K=y!==ei&&this.type===ei,V=y===ei&&this.type!==ei;for(let le=0,te=L.length;le<te;le++){const _e=L[le],ie=_e.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",_e,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;r.copy(ie.mapSize);const Re=ie.getFrameExtents();if(r.multiply(Re),o.copy(ie.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/Re.x),r.x=o.x*Re.x,ie.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/Re.y),r.y=o.y*Re.y,ie.mapSize.y=o.y)),ie.map===null||K===!0||V===!0){const ke=this.type!==ei?{minFilter:yn,magFilter:yn}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Xi(r.x,r.y,ke),ie.map.texture.name=_e.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();const Fe=ie.getViewportCount();for(let ke=0;ke<Fe;ke++){const Je=ie.getViewport(ke);c.set(o.x*Je.x,o.y*Je.y,o.x*Je.z,o.y*Je.w),ee.viewport(c),ie.updateMatrices(_e,ke),n=ie.getFrustum(),C(k,H,ie.camera,_e,this.type)}ie.isPointLightShadow!==!0&&this.type===ei&&U(ie,H),ie.needsUpdate=!1}y=this.type,x.needsUpdate=!1,i.setRenderTarget(I,E,B)};function U(L,k){const H=e.update(T);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,v.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Xi(r.x,r.y)),m.uniforms.shadow_pass.value=L.map.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(k,null,H,m,T,null),v.uniforms.shadow_pass.value=L.mapPass.texture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(k,null,H,v,T,null)}function P(L,k,H,I){let E=null;const B=H.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)E=B;else if(E=H.isPointLight===!0?h:l,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const ee=E.uuid,K=k.uuid;let V=d[ee];V===void 0&&(V={},d[ee]=V);let le=V[K];le===void 0&&(le=E.clone(),V[K]=le,k.addEventListener("dispose",j)),E=le}if(E.visible=k.visible,E.wireframe=k.wireframe,I===ei?E.side=k.shadowSide!==null?k.shadowSide:k.side:E.side=k.shadowSide!==null?k.shadowSide:_[k.side],E.alphaMap=k.alphaMap,E.alphaTest=k.alphaTest,E.map=k.map,E.clipShadows=k.clipShadows,E.clippingPlanes=k.clippingPlanes,E.clipIntersection=k.clipIntersection,E.displacementMap=k.displacementMap,E.displacementScale=k.displacementScale,E.displacementBias=k.displacementBias,E.wireframeLinewidth=k.wireframeLinewidth,E.linewidth=k.linewidth,H.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ee=i.properties.get(E);ee.light=H}return E}function C(L,k,H,I,E){if(L.visible===!1)return;if(L.layers.test(k.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===ei)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,L.matrixWorld);const K=e.update(L),V=L.material;if(Array.isArray(V)){const le=K.groups;for(let te=0,_e=le.length;te<_e;te++){const ie=le[te],Re=V[ie.materialIndex];if(Re&&Re.visible){const Fe=P(L,Re,I,E);L.onBeforeShadow(i,L,k,H,K,Fe,ie),i.renderBufferDirect(H,null,K,Fe,L,ie),L.onAfterShadow(i,L,k,H,K,Fe,ie)}}}else if(V.visible){const le=P(L,V,I,E);L.onBeforeShadow(i,L,k,H,K,le,null),i.renderBufferDirect(H,null,K,le,L,null),L.onAfterShadow(i,L,k,H,K,le,null)}}const ee=L.children;for(let K=0,V=ee.length;K<V;K++)C(ee[K],k,H,I,E)}function j(L){L.target.removeEventListener("dispose",j);for(const H in d){const I=d[H],E=L.target.uuid;E in I&&(I[E].dispose(),delete I[E])}}}const dE={[Ja]:Qa,[ec]:ic,[tc]:rc,[Er]:nc,[Qa]:Ja,[ic]:ec,[rc]:tc,[nc]:Er};function fE(i,e){function t(){let G=!1;const Le=new Et;let se=null;const pe=new Et(0,0,0,0);return{setMask:function(Z){se!==Z&&!G&&(i.colorMask(Z,Z,Z,Z),se=Z)},setLocked:function(Z){G=Z},setClear:function(Z,q,Ke,Lt,It){It===!0&&(Z*=Lt,q*=Lt,Ke*=Lt),Le.set(Z,q,Ke,Lt),pe.equals(Le)===!1&&(i.clearColor(Z,q,Ke,Lt),pe.copy(Le))},reset:function(){G=!1,se=null,pe.set(-1,0,0,0)}}}function n(){let G=!1,Le=!1,se=null,pe=null,Z=null;return{setReversed:function(q){if(Le!==q){const Ke=e.get("EXT_clip_control");Le?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);const Lt=Z;Z=null,this.setClear(Lt)}Le=q},getReversed:function(){return Le},setTest:function(q){q?be(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(q){se!==q&&!G&&(i.depthMask(q),se=q)},setFunc:function(q){if(Le&&(q=dE[q]),pe!==q){switch(q){case Ja:i.depthFunc(i.NEVER);break;case Qa:i.depthFunc(i.ALWAYS);break;case ec:i.depthFunc(i.LESS);break;case Er:i.depthFunc(i.LEQUAL);break;case tc:i.depthFunc(i.EQUAL);break;case nc:i.depthFunc(i.GEQUAL);break;case ic:i.depthFunc(i.GREATER);break;case rc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=q}},setLocked:function(q){G=q},setClear:function(q){Z!==q&&(Le&&(q=1-q),i.clearDepth(q),Z=q)},reset:function(){G=!1,se=null,pe=null,Z=null,Le=!1}}}function r(){let G=!1,Le=null,se=null,pe=null,Z=null,q=null,Ke=null,Lt=null,It=null;return{setTest:function(lt){G||(lt?be(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(lt){Le!==lt&&!G&&(i.stencilMask(lt),Le=lt)},setFunc:function(lt,dn,Bt){(se!==lt||pe!==dn||Z!==Bt)&&(i.stencilFunc(lt,dn,Bt),se=lt,pe=dn,Z=Bt)},setOp:function(lt,dn,Bt){(q!==lt||Ke!==dn||Lt!==Bt)&&(i.stencilOp(lt,dn,Bt),q=lt,Ke=dn,Lt=Bt)},setLocked:function(lt){G=lt},setClear:function(lt){It!==lt&&(i.clearStencil(lt),It=lt)},reset:function(){G=!1,Le=null,se=null,pe=null,Z=null,q=null,Ke=null,Lt=null,It=null}}}const o=new t,c=new n,l=new r,h=new WeakMap,d=new WeakMap;let p={},_={},m=new WeakMap,v=[],S=null,T=!1,x=null,y=null,U=null,P=null,C=null,j=null,L=null,k=new ot(0,0,0),H=0,I=!1,E=null,B=null,ee=null,K=null,V=null;const le=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,_e=0;const ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(_e=parseFloat(/^WebGL (\d)/.exec(ie)[1]),te=_e>=1):ie.indexOf("OpenGL ES")!==-1&&(_e=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),te=_e>=2);let Re=null,Fe={};const ke=i.getParameter(i.SCISSOR_BOX),Je=i.getParameter(i.VIEWPORT),mt=new Et().fromArray(ke),re=new Et().fromArray(Je);function ve(G,Le,se,pe){const Z=new Uint8Array(4),q=i.createTexture();i.bindTexture(G,q),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<se;Ke++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Le,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,Z):i.texImage2D(Le+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Z);return q}const Oe={};Oe[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Oe[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Oe[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),be(i.DEPTH_TEST),c.setFunc(Er),Se(!1),ze(au),be(i.CULL_FACE),O(vi);function be(G){p[G]!==!0&&(i.enable(G),p[G]=!0)}function fe(G){p[G]!==!1&&(i.disable(G),p[G]=!1)}function Te(G,Le){return _[G]!==Le?(i.bindFramebuffer(G,Le),_[G]=Le,G===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Le),G===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Le),!0):!1}function Qe(G,Le){let se=v,pe=!1;if(G){se=m.get(Le),se===void 0&&(se=[],m.set(Le,se));const Z=G.textures;if(se.length!==Z.length||se[0]!==i.COLOR_ATTACHMENT0){for(let q=0,Ke=Z.length;q<Ke;q++)se[q]=i.COLOR_ATTACHMENT0+q;se.length=Z.length,pe=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,pe=!0);pe&&i.drawBuffers(se)}function dt(G){return S!==G?(i.useProgram(G),S=G,!0):!1}const de={[ki]:i.FUNC_ADD,[dv]:i.FUNC_SUBTRACT,[fv]:i.FUNC_REVERSE_SUBTRACT};de[pv]=i.MIN,de[mv]=i.MAX;const we={[_v]:i.ZERO,[gv]:i.ONE,[vv]:i.SRC_COLOR,[Za]:i.SRC_ALPHA,[bv]:i.SRC_ALPHA_SATURATE,[Mv]:i.DST_COLOR,[xv]:i.DST_ALPHA,[yv]:i.ONE_MINUS_SRC_COLOR,[Ka]:i.ONE_MINUS_SRC_ALPHA,[Ev]:i.ONE_MINUS_DST_COLOR,[Sv]:i.ONE_MINUS_DST_ALPHA,[wv]:i.CONSTANT_COLOR,[Tv]:i.ONE_MINUS_CONSTANT_COLOR,[Av]:i.CONSTANT_ALPHA,[Cv]:i.ONE_MINUS_CONSTANT_ALPHA};function O(G,Le,se,pe,Z,q,Ke,Lt,It,lt){if(G===vi){T===!0&&(fe(i.BLEND),T=!1);return}if(T===!1&&(be(i.BLEND),T=!0),G!==hv){if(G!==x||lt!==I){if((y!==ki||C!==ki)&&(i.blendEquation(i.FUNC_ADD),y=ki,C=ki),lt)switch(G){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cu:i.blendFunc(i.ONE,i.ONE);break;case lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}U=null,P=null,j=null,L=null,k.set(0,0,0),H=0,x=G,I=lt}return}Z=Z||Le,q=q||se,Ke=Ke||pe,(Le!==y||Z!==C)&&(i.blendEquationSeparate(de[Le],de[Z]),y=Le,C=Z),(se!==U||pe!==P||q!==j||Ke!==L)&&(i.blendFuncSeparate(we[se],we[pe],we[q],we[Ke]),U=se,P=pe,j=q,L=Ke),(Lt.equals(k)===!1||It!==H)&&(i.blendColor(Lt.r,Lt.g,Lt.b,It),k.copy(Lt),H=It),x=G,I=!1}function je(G,Le){G.side===ti?fe(i.CULL_FACE):be(i.CULL_FACE);let se=G.side===un;Le&&(se=!se),Se(se),G.blending===vr&&G.transparent===!1?O(vi):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),o.setMask(G.colorWrite);const pe=G.stencilWrite;l.setTest(pe),pe&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ze(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?be(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(G){E!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),E=G)}function ze(G){G!==cv?(be(i.CULL_FACE),G!==B&&(G===au?i.cullFace(i.BACK):G===lv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),B=G}function Ce(G){G!==ee&&(te&&i.lineWidth(G),ee=G)}function Ze(G,Le,se){G?(be(i.POLYGON_OFFSET_FILL),(K!==Le||V!==se)&&(i.polygonOffset(Le,se),K=Le,V=se)):fe(i.POLYGON_OFFSET_FILL)}function Ne(G){G?be(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function N(G){G===void 0&&(G=i.TEXTURE0+le-1),Re!==G&&(i.activeTexture(G),Re=G)}function R(G,Le,se){se===void 0&&(Re===null?se=i.TEXTURE0+le-1:se=Re);let pe=Fe[se];pe===void 0&&(pe={type:void 0,texture:void 0},Fe[se]=pe),(pe.type!==G||pe.texture!==Le)&&(Re!==se&&(i.activeTexture(se),Re=se),i.bindTexture(G,Le||Oe[G]),pe.type=G,pe.texture=Le)}function J(){const G=Fe[Re];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(G){mt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),mt.copy(G))}function We(G){re.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),re.copy(G))}function ft(G,Le){let se=d.get(Le);se===void 0&&(se=new WeakMap,d.set(Le,se));let pe=se.get(G);pe===void 0&&(pe=i.getUniformBlockIndex(Le,G.name),se.set(G,pe))}function it(G,Le){const pe=d.get(Le).get(G);h.get(Le)!==pe&&(i.uniformBlockBinding(Le,pe,G.__bindingPointIndex),h.set(Le,pe))}function wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},Re=null,Fe={},_={},m=new WeakMap,v=[],S=null,T=!1,x=null,y=null,U=null,P=null,C=null,j=null,L=null,k=new ot(0,0,0),H=0,I=!1,E=null,B=null,ee=null,K=null,V=null,mt.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:be,disable:fe,bindFramebuffer:Te,drawBuffers:Qe,useProgram:dt,setBlending:O,setMaterial:je,setFlipSided:Se,setCullFace:ze,setLineWidth:Ce,setPolygonOffset:Ze,setScissorTest:Ne,activeTexture:N,bindTexture:R,unbindTexture:J,compressedTexImage2D:ue,compressedTexImage3D:he,texImage2D:Ge,texImage3D:et,updateUBOMapping:ft,uniformBlockBinding:it,texStorage2D:ht,texStorage3D:Ee,texSubImage2D:oe,texSubImage3D:Ve,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Be,scissor:nt,viewport:We,reset:wt}}function ch(i,e,t,n){const r=pE(n);switch(t){case id:return i*e;case sd:return i*e;case od:return i*e*2;case Qc:return i*e/r.components*r.byteLength;case el:return i*e/r.components*r.byteLength;case ad:return i*e*2/r.components*r.byteLength;case tl:return i*e*2/r.components*r.byteLength;case rd:return i*e*3/r.components*r.byteLength;case wn:return i*e*4/r.components*r.byteLength;case nl:return i*e*4/r.components*r.byteLength;case vo:case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:case dc:return Math.max(i,16)*Math.max(e,8)/4;case lc:case hc:return Math.max(i,8)*Math.max(e,8)/2;case fc:case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Mo:case Pc:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cd:case Lc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ic:case Nc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pE(i){switch(i){case si:case ed:return{byteLength:1,components:1};case ns:case td:case as:return{byteLength:2,components:1};case Kc:case Jc:return{byteLength:2,components:4};case Wi:case Zc:case Fn:return{byteLength:4,components:1};case nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function mE(i,e,t,n,r,o,c){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ae,p=new WeakMap;let _;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(N,R){return v?new OffscreenCanvas(N,R):is("canvas")}function T(N,R,J){let ue=1;const he=Ne(N);if((he.width>J||he.height>J)&&(ue=J/Math.max(he.width,he.height)),ue<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const oe=Math.floor(ue*he.width),Ve=Math.floor(ue*he.height);_===void 0&&(_=S(oe,Ve));const Pe=R?S(oe,Ve):_;return Pe.width=oe,Pe.height=Ve,Pe.getContext("2d").drawImage(N,0,0,oe,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+oe+"x"+Ve+")."),Pe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),N;return N}function x(N){return N.generateMipmaps}function y(N){i.generateMipmap(N)}function U(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(N,R,J,ue,he=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let oe=R;if(R===i.RED&&(J===i.FLOAT&&(oe=i.R32F),J===i.HALF_FLOAT&&(oe=i.R16F),J===i.UNSIGNED_BYTE&&(oe=i.R8)),R===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(oe=i.R8UI),J===i.UNSIGNED_SHORT&&(oe=i.R16UI),J===i.UNSIGNED_INT&&(oe=i.R32UI),J===i.BYTE&&(oe=i.R8I),J===i.SHORT&&(oe=i.R16I),J===i.INT&&(oe=i.R32I)),R===i.RG&&(J===i.FLOAT&&(oe=i.RG32F),J===i.HALF_FLOAT&&(oe=i.RG16F),J===i.UNSIGNED_BYTE&&(oe=i.RG8)),R===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(oe=i.RG8UI),J===i.UNSIGNED_SHORT&&(oe=i.RG16UI),J===i.UNSIGNED_INT&&(oe=i.RG32UI),J===i.BYTE&&(oe=i.RG8I),J===i.SHORT&&(oe=i.RG16I),J===i.INT&&(oe=i.RG32I)),R===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),J===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),J===i.UNSIGNED_INT&&(oe=i.RGB32UI),J===i.BYTE&&(oe=i.RGB8I),J===i.SHORT&&(oe=i.RGB16I),J===i.INT&&(oe=i.RGB32I)),R===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),J===i.UNSIGNED_INT&&(oe=i.RGBA32UI),J===i.BYTE&&(oe=i.RGBA8I),J===i.SHORT&&(oe=i.RGBA16I),J===i.INT&&(oe=i.RGBA32I)),R===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),R===i.RGBA){const Ve=he?Fo:St.getTransfer(ue);J===i.FLOAT&&(oe=i.RGBA32F),J===i.HALF_FLOAT&&(oe=i.RGBA16F),J===i.UNSIGNED_BYTE&&(oe=Ve===Tt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function C(N,R){let J;return N?R===null||R===Wi||R===Tr?J=i.DEPTH24_STENCIL8:R===Fn?J=i.DEPTH32F_STENCIL8:R===ns&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Wi||R===Tr?J=i.DEPTH_COMPONENT24:R===Fn?J=i.DEPTH_COMPONENT32F:R===ns&&(J=i.DEPTH_COMPONENT16),J}function j(N,R){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==yn&&N.minFilter!==Gn?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function L(N){const R=N.target;R.removeEventListener("dispose",L),H(R),R.isVideoTexture&&p.delete(R)}function k(N){const R=N.target;R.removeEventListener("dispose",k),E(R)}function H(N){const R=n.get(N);if(R.__webglInit===void 0)return;const J=N.source,ue=m.get(J);if(ue){const he=ue[R.__cacheKey];he.usedTimes--,he.usedTimes===0&&I(N),Object.keys(ue).length===0&&m.delete(J)}n.remove(N)}function I(N){const R=n.get(N);i.deleteTexture(R.__webglTexture);const J=N.source,ue=m.get(J);delete ue[R.__cacheKey],c.memory.textures--}function E(N){const R=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(R.__webglFramebuffer[ue]))for(let he=0;he<R.__webglFramebuffer[ue].length;he++)i.deleteFramebuffer(R.__webglFramebuffer[ue][he]);else i.deleteFramebuffer(R.__webglFramebuffer[ue]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[ue])}else{if(Array.isArray(R.__webglFramebuffer))for(let ue=0;ue<R.__webglFramebuffer.length;ue++)i.deleteFramebuffer(R.__webglFramebuffer[ue]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ue=0;ue<R.__webglColorRenderbuffer.length;ue++)R.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[ue]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const J=N.textures;for(let ue=0,he=J.length;ue<he;ue++){const oe=n.get(J[ue]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),c.memory.textures--),n.remove(J[ue])}n.remove(N)}let B=0;function ee(){B=0}function K(){const N=B;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),B+=1,N}function V(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function le(N,R){const J=n.get(N);if(N.isVideoTexture&&Ce(N),N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){const ue=N.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(J,N,R);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+R)}function te(N,R){const J=n.get(N);if(N.version>0&&J.__version!==N.version){re(J,N,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+R)}function _e(N,R){const J=n.get(N);if(N.version>0&&J.__version!==N.version){re(J,N,R);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+R)}function ie(N,R){const J=n.get(N);if(N.version>0&&J.__version!==N.version){ve(J,N,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+R)}const Re={[ac]:i.REPEAT,[Hi]:i.CLAMP_TO_EDGE,[cc]:i.MIRRORED_REPEAT},Fe={[yn]:i.NEAREST,[kv]:i.NEAREST_MIPMAP_NEAREST,[Is]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},ke={[Wv]:i.NEVER,[Zv]:i.ALWAYS,[Xv]:i.LESS,[ud]:i.LEQUAL,[$v]:i.EQUAL,[qv]:i.GEQUAL,[jv]:i.GREATER,[Yv]:i.NOTEQUAL};function Je(N,R){if(R.type===Fn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Gn||R.magFilter===sa||R.magFilter===Is||R.magFilter===Vi||R.minFilter===Gn||R.minFilter===sa||R.minFilter===Is||R.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Re[R.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Re[R.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Re[R.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Fe[R.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Fe[R.minFilter]),R.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ke[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===yn||R.minFilter!==Is&&R.minFilter!==Vi||R.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function mt(N,R){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",L));const ue=R.source;let he=m.get(ue);he===void 0&&(he={},m.set(ue,he));const oe=V(R);if(oe!==N.__cacheKey){he[oe]===void 0&&(he[oe]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,J=!0),he[oe].usedTimes++;const Ve=he[N.__cacheKey];Ve!==void 0&&(he[N.__cacheKey].usedTimes--,Ve.usedTimes===0&&I(R)),N.__cacheKey=oe,N.__webglTexture=he[oe].texture}return J}function re(N,R,J){let ue=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ue=i.TEXTURE_3D);const he=mt(N,R),oe=R.source;t.bindTexture(ue,N.__webglTexture,i.TEXTURE0+J);const Ve=n.get(oe);if(oe.version!==Ve.__version||he===!0){t.activeTexture(i.TEXTURE0+J);const Pe=St.getPrimaries(St.workingColorSpace),Be=R.colorSpace===_i?null:St.getPrimaries(R.colorSpace),ht=R.colorSpace===_i||Pe===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Ee=T(R.image,!1,r.maxTextureSize);Ee=Ze(R,Ee);const Ge=o.convert(R.format,R.colorSpace),et=o.convert(R.type);let nt=P(R.internalFormat,Ge,et,R.colorSpace,R.isVideoTexture);Je(ue,R);let We;const ft=R.mipmaps,it=R.isVideoTexture!==!0,wt=Ve.__version===void 0||he===!0,G=oe.dataReady,Le=j(R,Ee);if(R.isDepthTexture)nt=C(R.format===Ar,R.type),wt&&(it?t.texStorage2D(i.TEXTURE_2D,1,nt,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,nt,Ee.width,Ee.height,0,Ge,et,null));else if(R.isDataTexture)if(ft.length>0){it&&wt&&t.texStorage2D(i.TEXTURE_2D,Le,nt,ft[0].width,ft[0].height);for(let se=0,pe=ft.length;se<pe;se++)We=ft[se],it?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,We.width,We.height,Ge,et,We.data):t.texImage2D(i.TEXTURE_2D,se,nt,We.width,We.height,0,Ge,et,We.data);R.generateMipmaps=!1}else it?(wt&&t.texStorage2D(i.TEXTURE_2D,Le,nt,Ee.width,Ee.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ge,et,Ee.data)):t.texImage2D(i.TEXTURE_2D,0,nt,Ee.width,Ee.height,0,Ge,et,Ee.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){it&&wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,nt,ft[0].width,ft[0].height,Ee.depth);for(let se=0,pe=ft.length;se<pe;se++)if(We=ft[se],R.format!==wn)if(Ge!==null)if(it){if(G)if(R.layerUpdates.size>0){const Z=ch(We.width,We.height,R.format,R.type);for(const q of R.layerUpdates){const Ke=We.data.subarray(q*Z/We.data.BYTES_PER_ELEMENT,(q+1)*Z/We.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,q,We.width,We.height,1,Ge,Ke)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,We.width,We.height,Ee.depth,Ge,We.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,nt,We.width,We.height,Ee.depth,0,We.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,We.width,We.height,Ee.depth,Ge,et,We.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,nt,We.width,We.height,Ee.depth,0,Ge,et,We.data)}else{it&&wt&&t.texStorage2D(i.TEXTURE_2D,Le,nt,ft[0].width,ft[0].height);for(let se=0,pe=ft.length;se<pe;se++)We=ft[se],R.format!==wn?Ge!==null?it?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,We.width,We.height,Ge,We.data):t.compressedTexImage2D(i.TEXTURE_2D,se,nt,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,We.width,We.height,Ge,et,We.data):t.texImage2D(i.TEXTURE_2D,se,nt,We.width,We.height,0,Ge,et,We.data)}else if(R.isDataArrayTexture)if(it){if(wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,nt,Ee.width,Ee.height,Ee.depth),G)if(R.layerUpdates.size>0){const se=ch(Ee.width,Ee.height,R.format,R.type);for(const pe of R.layerUpdates){const Z=Ee.data.subarray(pe*se/Ee.data.BYTES_PER_ELEMENT,(pe+1)*se/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,Ge,et,Z)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ge,et,Ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,nt,Ee.width,Ee.height,Ee.depth,0,Ge,et,Ee.data);else if(R.isData3DTexture)it?(wt&&t.texStorage3D(i.TEXTURE_3D,Le,nt,Ee.width,Ee.height,Ee.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ge,et,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,nt,Ee.width,Ee.height,Ee.depth,0,Ge,et,Ee.data);else if(R.isFramebufferTexture){if(wt)if(it)t.texStorage2D(i.TEXTURE_2D,Le,nt,Ee.width,Ee.height);else{let se=Ee.width,pe=Ee.height;for(let Z=0;Z<Le;Z++)t.texImage2D(i.TEXTURE_2D,Z,nt,se,pe,0,Ge,et,null),se>>=1,pe>>=1}}else if(ft.length>0){if(it&&wt){const se=Ne(ft[0]);t.texStorage2D(i.TEXTURE_2D,Le,nt,se.width,se.height)}for(let se=0,pe=ft.length;se<pe;se++)We=ft[se],it?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ge,et,We):t.texImage2D(i.TEXTURE_2D,se,nt,Ge,et,We);R.generateMipmaps=!1}else if(it){if(wt){const se=Ne(Ee);t.texStorage2D(i.TEXTURE_2D,Le,nt,se.width,se.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ge,et,Ee)}else t.texImage2D(i.TEXTURE_2D,0,nt,Ge,et,Ee);x(R)&&y(ue),Ve.__version=oe.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function ve(N,R,J){if(R.image.length!==6)return;const ue=mt(N,R),he=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+J);const oe=n.get(he);if(he.version!==oe.__version||ue===!0){t.activeTexture(i.TEXTURE0+J);const Ve=St.getPrimaries(St.workingColorSpace),Pe=R.colorSpace===_i?null:St.getPrimaries(R.colorSpace),Be=R.colorSpace===_i||Ve===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const ht=R.isCompressedTexture||R.image[0].isCompressedTexture,Ee=R.image[0]&&R.image[0].isDataTexture,Ge=[];for(let pe=0;pe<6;pe++)!ht&&!Ee?Ge[pe]=T(R.image[pe],!0,r.maxCubemapSize):Ge[pe]=Ee?R.image[pe].image:R.image[pe],Ge[pe]=Ze(R,Ge[pe]);const et=Ge[0],nt=o.convert(R.format,R.colorSpace),We=o.convert(R.type),ft=P(R.internalFormat,nt,We,R.colorSpace),it=R.isVideoTexture!==!0,wt=oe.__version===void 0||ue===!0,G=he.dataReady;let Le=j(R,et);Je(i.TEXTURE_CUBE_MAP,R);let se;if(ht){it&&wt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,ft,et.width,et.height);for(let pe=0;pe<6;pe++){se=Ge[pe].mipmaps;for(let Z=0;Z<se.length;Z++){const q=se[Z];R.format!==wn?nt!==null?it?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Z,0,0,q.width,q.height,nt,q.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Z,ft,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Z,0,0,q.width,q.height,nt,We,q.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Z,ft,q.width,q.height,0,nt,We,q.data)}}}else{if(se=R.mipmaps,it&&wt){se.length>0&&Le++;const pe=Ne(Ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){it?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ge[pe].width,Ge[pe].height,nt,We,Ge[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Ge[pe].width,Ge[pe].height,0,nt,We,Ge[pe].data);for(let Z=0;Z<se.length;Z++){const Ke=se[Z].image[pe].image;it?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Z+1,0,0,Ke.width,Ke.height,nt,We,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Z+1,ft,Ke.width,Ke.height,0,nt,We,Ke.data)}}else{it?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,nt,We,Ge[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,nt,We,Ge[pe]);for(let Z=0;Z<se.length;Z++){const q=se[Z];it?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Z+1,0,0,nt,We,q.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Z+1,ft,nt,We,q.image[pe])}}}x(R)&&y(i.TEXTURE_CUBE_MAP),oe.__version=he.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Oe(N,R,J,ue,he,oe){const Ve=o.convert(J.format,J.colorSpace),Pe=o.convert(J.type),Be=P(J.internalFormat,Ve,Pe,J.colorSpace),ht=n.get(R),Ee=n.get(J);if(Ee.__renderTarget=R,!ht.__hasExternalTextures){const Ge=Math.max(1,R.width>>oe),et=Math.max(1,R.height>>oe);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,oe,Be,Ge,et,R.depth,0,Ve,Pe,null):t.texImage2D(he,oe,Be,Ge,et,0,Ve,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),ze(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,he,Ee.__webglTexture,0,Se(R)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,he,Ee.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(N,R,J){if(i.bindRenderbuffer(i.RENDERBUFFER,N),R.depthBuffer){const ue=R.depthTexture,he=ue&&ue.isDepthTexture?ue.type:null,oe=C(R.stencilBuffer,he),Ve=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=Se(R);ze(R)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,oe,R.width,R.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,oe,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,oe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ve,i.RENDERBUFFER,N)}else{const ue=R.textures;for(let he=0;he<ue.length;he++){const oe=ue[he],Ve=o.convert(oe.format,oe.colorSpace),Pe=o.convert(oe.type),Be=P(oe.internalFormat,Ve,Pe,oe.colorSpace),ht=Se(R);J&&ze(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Be,R.width,R.height):ze(R)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Be,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Be,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=n.get(R.depthTexture);ue.__renderTarget=R,(!ue.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),le(R.depthTexture,0);const he=ue.__webglTexture,oe=Se(R);if(R.depthTexture.format===yr)ze(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0);else if(R.depthTexture.format===Ar)ze(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Te(N){const R=n.get(N),J=N.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==N.depthTexture){const ue=N.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ue){const he=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ue.removeEventListener("dispose",he)};ue.addEventListener("dispose",he),R.__depthDisposeCallback=he}R.__boundDepthTexture=ue}if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");fe(R.__webglFramebuffer,N)}else if(J){R.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[ue]),R.__webglDepthbuffer[ue]===void 0)R.__webglDepthbuffer[ue]=i.createRenderbuffer(),be(R.__webglDepthbuffer[ue],N,!1);else{const he=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=R.__webglDepthbuffer[ue];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),be(R.__webglDepthbuffer,N,!1);else{const ue=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(N,R,J){const ue=n.get(N);R!==void 0&&Oe(ue.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Te(N)}function dt(N){const R=N.texture,J=n.get(N),ue=n.get(R);N.addEventListener("dispose",k);const he=N.textures,oe=N.isWebGLCubeRenderTarget===!0,Ve=he.length>1;if(Ve||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=R.version,c.memory.textures++),oe){J.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer[Pe]=[];for(let Be=0;Be<R.mipmaps.length;Be++)J.__webglFramebuffer[Pe][Be]=i.createFramebuffer()}else J.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer=[];for(let Pe=0;Pe<R.mipmaps.length;Pe++)J.__webglFramebuffer[Pe]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Ve)for(let Pe=0,Be=he.length;Pe<Be;Pe++){const ht=n.get(he[Pe]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),c.memory.textures++)}if(N.samples>0&&ze(N)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Pe=0;Pe<he.length;Pe++){const Be=he[Pe];J.__webglColorRenderbuffer[Pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Pe]);const ht=o.convert(Be.format,Be.colorSpace),Ee=o.convert(Be.type),Ge=P(Be.internalFormat,ht,Ee,Be.colorSpace,N.isXRRenderTarget===!0),et=Se(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Ge,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,J.__webglColorRenderbuffer[Pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),be(J.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),Je(i.TEXTURE_CUBE_MAP,R);for(let Pe=0;Pe<6;Pe++)if(R.mipmaps&&R.mipmaps.length>0)for(let Be=0;Be<R.mipmaps.length;Be++)Oe(J.__webglFramebuffer[Pe][Be],N,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Be);else Oe(J.__webglFramebuffer[Pe],N,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);x(R)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Pe=0,Be=he.length;Pe<Be;Pe++){const ht=he[Pe],Ee=n.get(ht);t.bindTexture(i.TEXTURE_2D,Ee.__webglTexture),Je(i.TEXTURE_2D,ht),Oe(J.__webglFramebuffer,N,ht,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,0),x(ht)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pe=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,ue.__webglTexture),Je(Pe,R),R.mipmaps&&R.mipmaps.length>0)for(let Be=0;Be<R.mipmaps.length;Be++)Oe(J.__webglFramebuffer[Be],N,R,i.COLOR_ATTACHMENT0,Pe,Be);else Oe(J.__webglFramebuffer,N,R,i.COLOR_ATTACHMENT0,Pe,0);x(R)&&y(Pe),t.unbindTexture()}N.depthBuffer&&Te(N)}function de(N){const R=N.textures;for(let J=0,ue=R.length;J<ue;J++){const he=R[J];if(x(he)){const oe=U(N),Ve=n.get(he).__webglTexture;t.bindTexture(oe,Ve),y(oe),t.unbindTexture()}}}const we=[],O=[];function je(N){if(N.samples>0){if(ze(N)===!1){const R=N.textures,J=N.width,ue=N.height;let he=i.COLOR_BUFFER_BIT;const oe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ve=n.get(N),Pe=R.length>1;if(Pe)for(let Be=0;Be<R.length;Be++)t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Be=0;Be<R.length;Be++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),Pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[Be]);const ht=n.get(R[Be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ht,0)}i.blitFramebuffer(0,0,J,ue,0,0,J,ue,he,i.NEAREST),h===!0&&(we.length=0,O.length=0,we.push(i.COLOR_ATTACHMENT0+Be),N.depthBuffer&&N.resolveDepthBuffer===!1&&(we.push(oe),O.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pe)for(let Be=0;Be<R.length;Be++){t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[Be]);const ht=n.get(R[Be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,ht,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const R=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Se(N){return Math.min(r.maxSamples,N.samples)}function ze(N){const R=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ce(N){const R=c.render.frame;p.get(N)!==R&&(p.set(N,R),N.update())}function Ze(N,R){const J=N.colorSpace,ue=N.format,he=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||J!==Lr&&J!==_i&&(St.getTransfer(J)===Tt?(ue!==wn||he!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),R}function Ne(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=K,this.resetTextureUnits=ee,this.setTexture2D=le,this.setTexture2DArray=te,this.setTexture3D=_e,this.setTextureCube=ie,this.rebindTextures=Qe,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=ze}function _E(i,e){function t(n,r=_i){let o;const c=St.getTransfer(r);if(n===si)return i.UNSIGNED_BYTE;if(n===Kc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ed)return i.BYTE;if(n===td)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===Zc)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===as)return i.HALF_FLOAT;if(n===id)return i.ALPHA;if(n===rd)return i.RGB;if(n===wn)return i.RGBA;if(n===sd)return i.LUMINANCE;if(n===od)return i.LUMINANCE_ALPHA;if(n===yr)return i.DEPTH_COMPONENT;if(n===Ar)return i.DEPTH_STENCIL;if(n===Qc)return i.RED;if(n===el)return i.RED_INTEGER;if(n===ad)return i.RG;if(n===tl)return i.RG_INTEGER;if(n===nl)return i.RGBA_INTEGER;if(n===vo||n===yo||n===xo||n===So)if(c===Tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===vo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===So)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===vo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===So)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lc||n===uc||n===hc||n===dc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===lc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fc||n===pc||n===mc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===fc||n===pc)return c===Tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===mc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_c||n===gc||n===vc||n===yc||n===xc||n===Sc||n===Mc||n===Ec||n===bc||n===wc||n===Tc||n===Ac||n===Cc||n===Rc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===_c)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ec)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ac)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mo||n===Pc||n===Dc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Mo)return c===Tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cd||n===Lc||n===Ic||n===Nc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Mo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Lc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ic)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class gE extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class eo extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vE={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,c=null;const l=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const T of e.hand.values()){const x=t.getJointPose(T,n),y=this._getHandJoint(d,T);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],m=p.position.distanceTo(_.position),v=.02,S=.005;d.inputState.pinching&&m>v+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&m<=v-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(vE)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new eo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xE=`
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

}`;class SE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new en,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Si({vertexShader:yE,fragmentShader:xE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ln(new Uo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ME extends ji{constructor(e,t){super();const n=this;let r=null,o=1,c=null,l="local-floor",h=1,d=null,p=null,_=null,m=null,v=null,S=null;const T=new SE,x=t.getContextAttributes();let y=null,U=null;const P=[],C=[],j=new Ae;let L=null;const k=new gn;k.viewport=new Et;const H=new gn;H.viewport=new Et;const I=[k,H],E=new gE;let B=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ve=P[re];return ve===void 0&&(ve=new Ia,P[re]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(re){let ve=P[re];return ve===void 0&&(ve=new Ia,P[re]=ve),ve.getGripSpace()},this.getHand=function(re){let ve=P[re];return ve===void 0&&(ve=new Ia,P[re]=ve),ve.getHandSpace()};function K(re){const ve=C.indexOf(re.inputSource);if(ve===-1)return;const Oe=P[ve];Oe!==void 0&&(Oe.update(re.inputSource,re.frame,d||c),Oe.dispatchEvent({type:re.type,data:re.inputSource}))}function V(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",le);for(let re=0;re<P.length;re++){const ve=C[re];ve!==null&&(C[re]=null,P[re].disconnect(ve))}B=null,ee=null,T.reset(),e.setRenderTarget(y),v=null,m=null,_=null,r=null,U=null,mt.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(j.width,j.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){o=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){l=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(re){d=re},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return _},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",V),r.addEventListener("inputsourceschange",le),x.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(j),r.renderState.layers===void 0){const ve={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),U=new Xi(v.framebufferWidth,v.framebufferHeight,{format:wn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ve=null,Oe=null,be=null;x.depth&&(be=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=x.stencil?Ar:yr,Oe=x.stencil?Tr:Wi);const fe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:o};_=new XRWebGLBinding(r,t),m=_.createProjectionLayer(fe),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),U=new Xi(m.textureWidth,m.textureHeight,{format:wn,type:si,depthTexture:new Ed(m.textureWidth,m.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await r.requestReferenceSpace(l),mt.setContext(r),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function le(re){for(let ve=0;ve<re.removed.length;ve++){const Oe=re.removed[ve],be=C.indexOf(Oe);be>=0&&(C[be]=null,P[be].disconnect(Oe))}for(let ve=0;ve<re.added.length;ve++){const Oe=re.added[ve];let be=C.indexOf(Oe);if(be===-1){for(let Te=0;Te<P.length;Te++)if(Te>=C.length){C.push(Oe),be=Te;break}else if(C[Te]===null){C[Te]=Oe,be=Te;break}if(be===-1)break}const fe=P[be];fe&&fe.connect(Oe)}}const te=new z,_e=new z;function ie(re,ve,Oe){te.setFromMatrixPosition(ve.matrixWorld),_e.setFromMatrixPosition(Oe.matrixWorld);const be=te.distanceTo(_e),fe=ve.projectionMatrix.elements,Te=Oe.projectionMatrix.elements,Qe=fe[14]/(fe[10]-1),dt=fe[14]/(fe[10]+1),de=(fe[9]+1)/fe[5],we=(fe[9]-1)/fe[5],O=(fe[8]-1)/fe[0],je=(Te[8]+1)/Te[0],Se=Qe*O,ze=Qe*je,Ce=be/(-O+je),Ze=Ce*-O;if(ve.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Ze),re.translateZ(Ce),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),fe[10]===-1)re.projectionMatrix.copy(ve.projectionMatrix),re.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Ne=Qe+Ce,N=dt+Ce,R=Se-Ze,J=ze+(be-Ze),ue=de*dt/N*Ne,he=we*dt/N*Ne;re.projectionMatrix.makePerspective(R,J,ue,he,Ne,N),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function Re(re,ve){ve===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ve.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let ve=re.near,Oe=re.far;T.texture!==null&&(T.depthNear>0&&(ve=T.depthNear),T.depthFar>0&&(Oe=T.depthFar)),E.near=H.near=k.near=ve,E.far=H.far=k.far=Oe,(B!==E.near||ee!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),B=E.near,ee=E.far),k.layers.mask=re.layers.mask|2,H.layers.mask=re.layers.mask|4,E.layers.mask=k.layers.mask|H.layers.mask;const be=re.parent,fe=E.cameras;Re(E,be);for(let Te=0;Te<fe.length;Te++)Re(fe[Te],be);fe.length===2?ie(E,k,H):E.projectionMatrix.copy(k.projectionMatrix),Fe(re,E,be)};function Fe(re,ve,Oe){Oe===null?re.matrix.copy(ve.matrixWorld):(re.matrix.copy(Oe.matrixWorld),re.matrix.invert(),re.matrix.multiply(ve.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ve.projectionMatrix),re.projectionMatrixInverse.copy(ve.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Cr*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(m===null&&v===null))return h},this.setFoveation=function(re){h=re,m!==null&&(m.fixedFoveation=re),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=re)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(E)};let ke=null;function Je(re,ve){if(p=ve.getViewerPose(d||c),S=ve,p!==null){const Oe=p.views;v!==null&&(e.setRenderTargetFramebuffer(U,v.framebuffer),e.setRenderTarget(U));let be=!1;Oe.length!==E.cameras.length&&(E.cameras.length=0,be=!0);for(let Te=0;Te<Oe.length;Te++){const Qe=Oe[Te];let dt=null;if(v!==null)dt=v.getViewport(Qe);else{const we=_.getViewSubImage(m,Qe);dt=we.viewport,Te===0&&(e.setRenderTargetTextures(U,we.colorTexture,m.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(U))}let de=I[Te];de===void 0&&(de=new gn,de.layers.enable(Te),de.viewport=new Et,I[Te]=de),de.matrix.fromArray(Qe.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(Qe.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(dt.x,dt.y,dt.width,dt.height),Te===0&&(E.matrix.copy(de.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),be===!0&&E.cameras.push(de)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const Te=_.getDepthInformation(Oe[0]);Te&&Te.isValid&&Te.texture&&T.init(e,Te,r.renderState)}}for(let Oe=0;Oe<P.length;Oe++){const be=C[Oe],fe=P[Oe];be!==null&&fe!==void 0&&fe.update(be,ve,d||c)}ke&&ke(re,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),S=null}const mt=new Sd;mt.setAnimationLoop(Je),this.setAnimationLoop=function(re){ke=re},this.dispose=function(){}}}const Ui=new An,EE=new ut;function bE(i,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function n(x,y){y.color.getRGB(x.fogColor.value,vd(i)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function r(x,y,U,P,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?o(x,y):y.isMeshToonMaterial?(o(x,y),_(x,y)):y.isMeshPhongMaterial?(o(x,y),p(x,y)):y.isMeshStandardMaterial?(o(x,y),m(x,y),y.isMeshPhysicalMaterial&&v(x,y,C)):y.isMeshMatcapMaterial?(o(x,y),S(x,y)):y.isMeshDepthMaterial?o(x,y):y.isMeshDistanceMaterial?(o(x,y),T(x,y)):y.isMeshNormalMaterial?o(x,y):y.isLineBasicMaterial?(c(x,y),y.isLineDashedMaterial&&l(x,y)):y.isPointsMaterial?h(x,y,U,P):y.isSpriteMaterial?d(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===un&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===un&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const U=e.get(y),P=U.envMap,C=U.envMapRotation;P&&(x.envMap.value=P,Ui.copy(C),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),x.envMapRotation.value.setFromMatrix4(EE.makeRotationFromEuler(Ui)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function c(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function l(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function h(x,y,U,P){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*U,x.scale.value=P*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function d(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function m(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function v(x,y,U){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===un&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,y){y.matcap&&(x.matcap.value=y.matcap)}function T(x,y){const U=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function wE(i,e,t,n){let r={},o={},c=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,P){const C=P.program;n.uniformBlockBinding(U,C)}function d(U,P){let C=r[U.id];C===void 0&&(S(U),C=p(U),r[U.id]=C,U.addEventListener("dispose",x));const j=P.program;n.updateUBOMapping(U,j);const L=e.render.frame;o[U.id]!==L&&(m(U),o[U.id]=L)}function p(U){const P=_();U.__bindingPointIndex=P;const C=i.createBuffer(),j=U.__size,L=U.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,j,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,C),C}function _(){for(let U=0;U<l;U++)if(c.indexOf(U)===-1)return c.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(U){const P=r[U.id],C=U.uniforms,j=U.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let L=0,k=C.length;L<k;L++){const H=Array.isArray(C[L])?C[L]:[C[L]];for(let I=0,E=H.length;I<E;I++){const B=H[I];if(v(B,L,I,j)===!0){const ee=B.__offset,K=Array.isArray(B.value)?B.value:[B.value];let V=0;for(let le=0;le<K.length;le++){const te=K[le],_e=T(te);typeof te=="number"||typeof te=="boolean"?(B.__data[0]=te,i.bufferSubData(i.UNIFORM_BUFFER,ee+V,B.__data)):te.isMatrix3?(B.__data[0]=te.elements[0],B.__data[1]=te.elements[1],B.__data[2]=te.elements[2],B.__data[3]=0,B.__data[4]=te.elements[3],B.__data[5]=te.elements[4],B.__data[6]=te.elements[5],B.__data[7]=0,B.__data[8]=te.elements[6],B.__data[9]=te.elements[7],B.__data[10]=te.elements[8],B.__data[11]=0):(te.toArray(B.__data,V),V+=_e.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ee,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(U,P,C,j){const L=U.value,k=P+"_"+C;if(j[k]===void 0)return typeof L=="number"||typeof L=="boolean"?j[k]=L:j[k]=L.clone(),!0;{const H=j[k];if(typeof L=="number"||typeof L=="boolean"){if(H!==L)return j[k]=L,!0}else if(H.equals(L)===!1)return H.copy(L),!0}return!1}function S(U){const P=U.uniforms;let C=0;const j=16;for(let k=0,H=P.length;k<H;k++){const I=Array.isArray(P[k])?P[k]:[P[k]];for(let E=0,B=I.length;E<B;E++){const ee=I[E],K=Array.isArray(ee.value)?ee.value:[ee.value];for(let V=0,le=K.length;V<le;V++){const te=K[V],_e=T(te),ie=C%j,Re=ie%_e.boundary,Fe=ie+Re;C+=Re,Fe!==0&&j-Fe<_e.storage&&(C+=j-Fe),ee.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=C,C+=_e.storage}}}const L=C%j;return L>0&&(C+=j-L),U.__size=C,U.__cache={},this}function T(U){const P={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(P.boundary=4,P.storage=4):U.isVector2?(P.boundary=8,P.storage=8):U.isVector3||U.isColor?(P.boundary=16,P.storage=12):U.isVector4?(P.boundary=16,P.storage=16):U.isMatrix3?(P.boundary=48,P.storage=48):U.isMatrix4?(P.boundary=64,P.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),P}function x(U){const P=U.target;P.removeEventListener("dispose",x);const C=c.indexOf(P.__bindingPointIndex);c.splice(C,1),i.deleteBuffer(r[P.id]),delete r[P.id],delete o[P.id]}function y(){for(const U in r)i.deleteBuffer(r[U]);c=[],r={},o={}}return{bind:h,update:d,dispose:y}}class Sw{constructor(e={}){const{canvas:t=p0(),context:n=null,depth:r=!0,stencil:o=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=c;const S=new Uint32Array(4),T=new Int32Array(4);let x=null,y=null;const U=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=yi,this.toneMappingExposure=1;const C=this;let j=!1,L=0,k=0,H=null,I=-1,E=null;const B=new Et,ee=new Et;let K=null;const V=new ot(0);let le=0,te=t.width,_e=t.height,ie=1,Re=null,Fe=null;const ke=new Et(0,0,te,_e),Je=new Et(0,0,te,_e);let mt=!1;const re=new sl;let ve=!1,Oe=!1;const be=new ut,fe=new ut,Te=new z,Qe=new Et,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function we(){return H===null?ie:1}let O=n;function je(D,X){return t.getContext(D,X)}try{const D={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qc}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",q,!1),O===null){const X="webgl2";if(O=je(X,D),O===null)throw je(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Se,ze,Ce,Ze,Ne,N,R,J,ue,he,oe,Ve,Pe,Be,ht,Ee,Ge,et,nt,We,ft,it,wt,G;function Le(){Se=new DS(O),Se.init(),it=new _E(O,Se),ze=new wS(O,Se,e,it),Ce=new fE(O,Se),ze.reverseDepthBuffer&&m&&Ce.buffers.depth.setReversed(!0),Ze=new NS(O),Ne=new JM,N=new mE(O,Se,Ce,Ne,ze,it,Ze),R=new AS(C),J=new PS(C),ue=new H0(O),wt=new ES(O,ue),he=new LS(O,ue,Ze,wt),oe=new US(O,he,ue,Ze),nt=new FS(O,ze,N),Ee=new TS(Ne),Ve=new KM(C,R,J,Se,ze,wt,Ee),Pe=new bE(C,Ne),Be=new eE,ht=new oE(Se),et=new MS(C,R,J,Ce,oe,v,h),Ge=new hE(C,oe,ze),G=new wE(O,Ze,ze,Ce),We=new bS(O,Se,Ze),ft=new IS(O,Se,Ze),Ze.programs=Ve.programs,C.capabilities=ze,C.extensions=Se,C.properties=Ne,C.renderLists=Be,C.shadowMap=Ge,C.state=Ce,C.info=Ze}Le();const se=new ME(C,O);this.xr=se,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const D=Se.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Se.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(D){D!==void 0&&(ie=D,this.setSize(te,_e,!1))},this.getSize=function(D){return D.set(te,_e)},this.setSize=function(D,X,Y=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=D,_e=X,t.width=Math.floor(D*ie),t.height=Math.floor(X*ie),Y===!0&&(t.style.width=D+"px",t.style.height=X+"px"),this.setViewport(0,0,D,X)},this.getDrawingBufferSize=function(D){return D.set(te*ie,_e*ie).floor()},this.setDrawingBufferSize=function(D,X,Y){te=D,_e=X,ie=Y,t.width=Math.floor(D*Y),t.height=Math.floor(X*Y),this.setViewport(0,0,D,X)},this.getCurrentViewport=function(D){return D.copy(B)},this.getViewport=function(D){return D.copy(ke)},this.setViewport=function(D,X,Y,ne){D.isVector4?ke.set(D.x,D.y,D.z,D.w):ke.set(D,X,Y,ne),Ce.viewport(B.copy(ke).multiplyScalar(ie).round())},this.getScissor=function(D){return D.copy(Je)},this.setScissor=function(D,X,Y,ne){D.isVector4?Je.set(D.x,D.y,D.z,D.w):Je.set(D,X,Y,ne),Ce.scissor(ee.copy(Je).multiplyScalar(ie).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(D){Ce.setScissorTest(mt=D)},this.setOpaqueSort=function(D){Re=D},this.setTransparentSort=function(D){Fe=D},this.getClearColor=function(D){return D.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(D=!0,X=!0,Y=!0){let ne=0;if(D){let $=!1;if(H!==null){const Me=H.texture.format;$=Me===nl||Me===tl||Me===el}if($){const Me=H.texture.type,Ie=Me===si||Me===Wi||Me===ns||Me===Tr||Me===Kc||Me===Jc,Xe=et.getClearColor(),$e=et.getClearAlpha(),tt=Xe.r,rt=Xe.g,He=Xe.b;Ie?(S[0]=tt,S[1]=rt,S[2]=He,S[3]=$e,O.clearBufferuiv(O.COLOR,0,S)):(T[0]=tt,T[1]=rt,T[2]=He,T[3]=$e,O.clearBufferiv(O.COLOR,0,T))}else ne|=O.COLOR_BUFFER_BIT}X&&(ne|=O.DEPTH_BUFFER_BIT),Y&&(ne|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",q,!1),Be.dispose(),ht.dispose(),Ne.dispose(),R.dispose(),J.dispose(),oe.dispose(),wt.dispose(),G.dispose(),Ve.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ei),se.removeEventListener("sessionend",us),$n.stop()};function pe(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const D=Ze.autoReset,X=Ge.enabled,Y=Ge.autoUpdate,ne=Ge.needsUpdate,$=Ge.type;Le(),Ze.autoReset=D,Ge.enabled=X,Ge.autoUpdate=Y,Ge.needsUpdate=ne,Ge.type=$}function q(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ke(D){const X=D.target;X.removeEventListener("dispose",Ke),Lt(X)}function Lt(D){It(D),Ne.remove(D)}function It(D){const X=Ne.get(D).programs;X!==void 0&&(X.forEach(function(Y){Ve.releaseProgram(Y)}),D.isShaderMaterial&&Ve.releaseShaderCache(D))}this.renderBufferDirect=function(D,X,Y,ne,$,Me){X===null&&(X=dt);const Ie=$.isMesh&&$.matrixWorld.determinant()<0,Xe=ps(D,X,Y,ne,$);Ce.setMaterial(ne,Ie);let $e=Y.index,tt=1;if(ne.wireframe===!0){if($e=he.getWireframeAttribute(Y),$e===void 0)return;tt=2}const rt=Y.drawRange,He=Y.attributes.position;let _t=rt.start*tt,Ue=(rt.start+rt.count)*tt;Me!==null&&(_t=Math.max(_t,Me.start*tt),Ue=Math.min(Ue,(Me.start+Me.count)*tt)),$e!==null?(_t=Math.max(_t,0),Ue=Math.min(Ue,$e.count)):He!=null&&(_t=Math.max(_t,0),Ue=Math.min(Ue,He.count));const Rt=Ue-_t;if(Rt<0||Rt===1/0)return;wt.setup($,ne,Xe,Y,$e);let jt,Mt=We;if($e!==null&&(jt=ue.get($e),Mt=ft,Mt.setIndex(jt)),$.isMesh)ne.wireframe===!0?(Ce.setLineWidth(ne.wireframeLinewidth*we()),Mt.setMode(O.LINES)):Mt.setMode(O.TRIANGLES);else if($.isLine){let Ye=ne.linewidth;Ye===void 0&&(Ye=1),Ce.setLineWidth(Ye*we()),$.isLineSegments?Mt.setMode(O.LINES):$.isLineLoop?Mt.setMode(O.LINE_LOOP):Mt.setMode(O.LINE_STRIP)}else $.isPoints?Mt.setMode(O.POINTS):$.isSprite&&Mt.setMode(O.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Mt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))Mt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ye=$._multiDrawStarts,Cn=$._multiDrawCounts,yt=$._multiDrawCount,fn=$e?ue.get($e).bytesPerElement:1,Un=Ne.get(ne).currentProgram.getUniforms();for(let nn=0;nn<yt;nn++)Un.setValue(O,"_gl_DrawID",nn),Mt.render(Ye[nn]/fn,Cn[nn])}else if($.isInstancedMesh)Mt.renderInstances(_t,Rt,$.count);else if(Y.isInstancedBufferGeometry){const Ye=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Cn=Math.min(Y.instanceCount,Ye);Mt.renderInstances(_t,Rt,Cn)}else Mt.render(_t,Rt)};function lt(D,X,Y){D.transparent===!0&&D.side===ti&&D.forceSinglePass===!1?(D.side=un,D.needsUpdate=!0,Zi(D,X,Y),D.side=xi,D.needsUpdate=!0,Zi(D,X,Y),D.side=ti):Zi(D,X,Y)}this.compile=function(D,X,Y=null){Y===null&&(Y=D),y=ht.get(Y),y.init(X),P.push(y),Y.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(y.pushLight($),$.castShadow&&y.pushShadow($))}),D!==Y&&D.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(y.pushLight($),$.castShadow&&y.pushShadow($))}),y.setupLights();const ne=new Set;return D.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Me=$.material;if(Me)if(Array.isArray(Me))for(let Ie=0;Ie<Me.length;Ie++){const Xe=Me[Ie];lt(Xe,Y,$),ne.add(Xe)}else lt(Me,Y,$),ne.add(Me)}),P.pop(),y=null,ne},this.compileAsync=function(D,X,Y=null){const ne=this.compile(D,X,Y);return new Promise($=>{function Me(){if(ne.forEach(function(Ie){Ne.get(Ie).currentProgram.isReady()&&ne.delete(Ie)}),ne.size===0){$(D);return}setTimeout(Me,10)}Se.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let dn=null;function Bt(D){dn&&dn(D)}function Ei(){$n.stop()}function us(){$n.start()}const $n=new Sd;$n.setAnimationLoop(Bt),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(D){dn=D,se.setAnimationLoop(D),D===null?$n.stop():$n.start()},se.addEventListener("sessionstart",Ei),se.addEventListener("sessionend",us),this.render=function(D,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(X),X=se.getCamera()),D.isScene===!0&&D.onBeforeRender(C,D,X,H),y=ht.get(D,P.length),y.init(X),P.push(y),fe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),re.setFromProjectionMatrix(fe),Oe=this.localClippingEnabled,ve=Ee.init(this.clippingPlanes,Oe),x=Be.get(D,U.length),x.init(),U.push(x),se.enabled===!0&&se.isPresenting===!0){const Me=C.xr.getDepthSensingMesh();Me!==null&&tn(Me,X,-1/0,C.sortObjects)}tn(D,X,0,C.sortObjects),x.finish(),C.sortObjects===!0&&x.sort(Re,Fe),de=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,de&&et.addToRenderList(x,D),this.info.render.frame++,ve===!0&&Ee.beginShadows();const Y=y.state.shadowsArray;Ge.render(Y,D,X),ve===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=x.opaque,$=x.transmissive;if(y.setupLights(),X.isArrayCamera){const Me=X.cameras;if($.length>0)for(let Ie=0,Xe=Me.length;Ie<Xe;Ie++){const $e=Me[Ie];bi(ne,$,D,$e)}de&&et.render(D);for(let Ie=0,Xe=Me.length;Ie<Xe;Ie++){const $e=Me[Ie];hs(x,D,$e,$e.viewport)}}else $.length>0&&bi(ne,$,D,X),de&&et.render(D),hs(x,D,X);H!==null&&(N.updateMultisampleRenderTarget(H),N.updateRenderTargetMipmap(H)),D.isScene===!0&&D.onAfterRender(C,D,X),wt.resetDefaultState(),I=-1,E=null,P.pop(),P.length>0?(y=P[P.length-1],ve===!0&&Ee.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,U.pop(),U.length>0?x=U[U.length-1]:x=null};function tn(D,X,Y,ne){if(D.visible===!1)return;if(D.layers.test(X.layers)){if(D.isGroup)Y=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(X);else if(D.isLight)y.pushLight(D),D.castShadow&&y.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||re.intersectsSprite(D)){ne&&Qe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(fe);const Ie=oe.update(D),Xe=D.material;Xe.visible&&x.push(D,Ie,Xe,Y,Qe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||re.intersectsObject(D))){const Ie=oe.update(D),Xe=D.material;if(ne&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Qe.copy(D.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Qe.copy(Ie.boundingSphere.center)),Qe.applyMatrix4(D.matrixWorld).applyMatrix4(fe)),Array.isArray(Xe)){const $e=Ie.groups;for(let tt=0,rt=$e.length;tt<rt;tt++){const He=$e[tt],_t=Xe[He.materialIndex];_t&&_t.visible&&x.push(D,Ie,_t,Y,Qe.z,He)}}else Xe.visible&&x.push(D,Ie,Xe,Y,Qe.z,null)}}const Me=D.children;for(let Ie=0,Xe=Me.length;Ie<Xe;Ie++)tn(Me[Ie],X,Y,ne)}function hs(D,X,Y,ne){const $=D.opaque,Me=D.transmissive,Ie=D.transparent;y.setupLightsView(Y),ve===!0&&Ee.setGlobalState(C.clippingPlanes,Y),ne&&Ce.viewport(B.copy(ne)),$.length>0&&jn($,X,Y),Me.length>0&&jn(Me,X,Y),Ie.length>0&&jn(Ie,X,Y),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function bi(D,X,Y,ne){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ne.id]===void 0&&(y.state.transmissionRenderTarget[ne.id]=new Xi(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?as:si,minFilter:Vi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const Me=y.state.transmissionRenderTarget[ne.id],Ie=ne.viewport||B;Me.setSize(Ie.z,Ie.w);const Xe=C.getRenderTarget();C.setRenderTarget(Me),C.getClearColor(V),le=C.getClearAlpha(),le<1&&C.setClearColor(16777215,.5),C.clear(),de&&et.render(Y);const $e=C.toneMapping;C.toneMapping=yi;const tt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),y.setupLightsView(ne),ve===!0&&Ee.setGlobalState(C.clippingPlanes,ne),jn(D,Y,ne),N.updateMultisampleRenderTarget(Me),N.updateRenderTargetMipmap(Me),Se.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let He=0,_t=X.length;He<_t;He++){const Ue=X[He],Rt=Ue.object,jt=Ue.geometry,Mt=Ue.material,Ye=Ue.group;if(Mt.side===ti&&Rt.layers.test(ne.layers)){const Cn=Mt.side;Mt.side=un,Mt.needsUpdate=!0,qi(Rt,Y,ne,jt,Mt,Ye),Mt.side=Cn,Mt.needsUpdate=!0,rt=!0}}rt===!0&&(N.updateMultisampleRenderTarget(Me),N.updateRenderTargetMipmap(Me))}C.setRenderTarget(Xe),C.setClearColor(V,le),tt!==void 0&&(ne.viewport=tt),C.toneMapping=$e}function jn(D,X,Y){const ne=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Me=D.length;$<Me;$++){const Ie=D[$],Xe=Ie.object,$e=Ie.geometry,tt=ne===null?Ie.material:ne,rt=Ie.group;Xe.layers.test(Y.layers)&&qi(Xe,X,Y,$e,tt,rt)}}function qi(D,X,Y,ne,$,Me){D.onBeforeRender(C,X,Y,ne,$,Me),D.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),$.onBeforeRender(C,X,Y,ne,D,Me),$.transparent===!0&&$.side===ti&&$.forceSinglePass===!1?($.side=un,$.needsUpdate=!0,C.renderBufferDirect(Y,X,ne,$,D,Me),$.side=xi,$.needsUpdate=!0,C.renderBufferDirect(Y,X,ne,$,D,Me),$.side=ti):C.renderBufferDirect(Y,X,ne,$,D,Me),D.onAfterRender(C,X,Y,ne,$,Me)}function Zi(D,X,Y){X.isScene!==!0&&(X=dt);const ne=Ne.get(D),$=y.state.lights,Me=y.state.shadowsArray,Ie=$.state.version,Xe=Ve.getParameters(D,$.state,Me,X,Y),$e=Ve.getProgramCacheKey(Xe);let tt=ne.programs;ne.environment=D.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(D.isMeshStandardMaterial?J:R).get(D.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&D.envMap===null?X.environmentRotation:D.envMapRotation,tt===void 0&&(D.addEventListener("dispose",Ke),tt=new Map,ne.programs=tt);let rt=tt.get($e);if(rt!==void 0){if(ne.currentProgram===rt&&ne.lightsStateVersion===Ie)return fs(D,Xe),rt}else Xe.uniforms=Ve.getUniforms(D),D.onBeforeCompile(Xe,C),rt=Ve.acquireProgram(Xe,$e),tt.set($e,rt),ne.uniforms=Xe.uniforms;const He=ne.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(He.clippingPlanes=Ee.uniform),fs(D,Xe),ne.needsLights=Wo(D),ne.lightsStateVersion=Ie,ne.needsLights&&(He.ambientLightColor.value=$.state.ambient,He.lightProbe.value=$.state.probe,He.directionalLights.value=$.state.directional,He.directionalLightShadows.value=$.state.directionalShadow,He.spotLights.value=$.state.spot,He.spotLightShadows.value=$.state.spotShadow,He.rectAreaLights.value=$.state.rectArea,He.ltc_1.value=$.state.rectAreaLTC1,He.ltc_2.value=$.state.rectAreaLTC2,He.pointLights.value=$.state.point,He.pointLightShadows.value=$.state.pointShadow,He.hemisphereLights.value=$.state.hemi,He.directionalShadowMap.value=$.state.directionalShadowMap,He.directionalShadowMatrix.value=$.state.directionalShadowMatrix,He.spotShadowMap.value=$.state.spotShadowMap,He.spotLightMatrix.value=$.state.spotLightMatrix,He.spotLightMap.value=$.state.spotLightMap,He.pointShadowMap.value=$.state.pointShadowMap,He.pointShadowMatrix.value=$.state.pointShadowMatrix),ne.currentProgram=rt,ne.uniformsList=null,rt}function ds(D){if(D.uniformsList===null){const X=D.currentProgram.getUniforms();D.uniformsList=Eo.seqWithValue(X.seq,D.uniforms)}return D.uniformsList}function fs(D,X){const Y=Ne.get(D);Y.outputColorSpace=X.outputColorSpace,Y.batching=X.batching,Y.batchingColor=X.batchingColor,Y.instancing=X.instancing,Y.instancingColor=X.instancingColor,Y.instancingMorph=X.instancingMorph,Y.skinning=X.skinning,Y.morphTargets=X.morphTargets,Y.morphNormals=X.morphNormals,Y.morphColors=X.morphColors,Y.morphTargetsCount=X.morphTargetsCount,Y.numClippingPlanes=X.numClippingPlanes,Y.numIntersection=X.numClipIntersection,Y.vertexAlphas=X.vertexAlphas,Y.vertexTangents=X.vertexTangents,Y.toneMapping=X.toneMapping}function ps(D,X,Y,ne,$){X.isScene!==!0&&(X=dt),N.resetTextureUnits();const Me=X.fog,Ie=ne.isMeshStandardMaterial?X.environment:null,Xe=H===null?C.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Lr,$e=(ne.isMeshStandardMaterial?J:R).get(ne.envMap||Ie),tt=ne.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,rt=!!Y.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),He=!!Y.morphAttributes.position,_t=!!Y.morphAttributes.normal,Ue=!!Y.morphAttributes.color;let Rt=yi;ne.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Rt=C.toneMapping);const jt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Mt=jt!==void 0?jt.length:0,Ye=Ne.get(ne),Cn=y.state.lights;if(ve===!0&&(Oe===!0||D!==E)){const Yt=D===E&&ne.id===I;Ee.setState(ne,D,Yt)}let yt=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Cn.state.version||Ye.outputColorSpace!==Xe||$.isBatchedMesh&&Ye.batching===!1||!$.isBatchedMesh&&Ye.batching===!0||$.isBatchedMesh&&Ye.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ye.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ye.instancing===!1||!$.isInstancedMesh&&Ye.instancing===!0||$.isSkinnedMesh&&Ye.skinning===!1||!$.isSkinnedMesh&&Ye.skinning===!0||$.isInstancedMesh&&Ye.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ye.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ye.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ye.instancingMorph===!1&&$.morphTexture!==null||Ye.envMap!==$e||ne.fog===!0&&Ye.fog!==Me||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ee.numPlanes||Ye.numIntersection!==Ee.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==rt||Ye.morphTargets!==He||Ye.morphNormals!==_t||Ye.morphColors!==Ue||Ye.toneMapping!==Rt||Ye.morphTargetsCount!==Mt)&&(yt=!0):(yt=!0,Ye.__version=ne.version);let fn=Ye.currentProgram;yt===!0&&(fn=Zi(ne,X,$));let Un=!1,nn=!1,ai=!1;const b=fn.getUniforms(),gt=Ye.uniforms;if(Ce.useProgram(fn.program)&&(Un=!0,nn=!0,ai=!0),ne.id!==I&&(I=ne.id,nn=!0),Un||E!==D){Ce.buffers.depth.getReversed()?(be.copy(D.projectionMatrix),_0(be),g0(be),b.setValue(O,"projectionMatrix",be)):b.setValue(O,"projectionMatrix",D.projectionMatrix),b.setValue(O,"viewMatrix",D.matrixWorldInverse);const rn=b.map.cameraPosition;rn!==void 0&&rn.setValue(O,Te.setFromMatrixPosition(D.matrixWorld)),ze.logarithmicDepthBuffer&&b.setValue(O,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&b.setValue(O,"isOrthographic",D.isOrthographicCamera===!0),E!==D&&(E=D,nn=!0,ai=!0)}if($.isSkinnedMesh){b.setOptional(O,$,"bindMatrix"),b.setOptional(O,$,"bindMatrixInverse");const Yt=$.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),b.setValue(O,"boneTexture",Yt.boneTexture,N))}$.isBatchedMesh&&(b.setOptional(O,$,"batchingTexture"),b.setValue(O,"batchingTexture",$._matricesTexture,N),b.setOptional(O,$,"batchingIdTexture"),b.setValue(O,"batchingIdTexture",$._indirectTexture,N),b.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&b.setValue(O,"batchingColorTexture",$._colorsTexture,N));const wi=Y.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&nt.update($,Y,fn),(nn||Ye.receiveShadow!==$.receiveShadow)&&(Ye.receiveShadow=$.receiveShadow,b.setValue(O,"receiveShadow",$.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(gt.envMap.value=$e,gt.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(gt.envMapIntensity.value=X.environmentIntensity),nn&&(b.setValue(O,"toneMappingExposure",C.toneMappingExposure),Ye.needsLights&&Go(gt,ai),Me&&ne.fog===!0&&Pe.refreshFogUniforms(gt,Me),Pe.refreshMaterialUniforms(gt,ne,ie,_e,y.state.transmissionRenderTarget[D.id]),Eo.upload(O,ds(Ye),gt,N)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Eo.upload(O,ds(Ye),gt,N),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&b.setValue(O,"center",$.center),b.setValue(O,"modelViewMatrix",$.modelViewMatrix),b.setValue(O,"normalMatrix",$.normalMatrix),b.setValue(O,"modelMatrix",$.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Yt=ne.uniformsGroups;for(let rn=0,On=Yt.length;rn<On;rn++){const ms=Yt[rn];G.update(ms,fn),G.bind(ms,fn)}}return fn}function Go(D,X){D.ambientLightColor.needsUpdate=X,D.lightProbe.needsUpdate=X,D.directionalLights.needsUpdate=X,D.directionalLightShadows.needsUpdate=X,D.pointLights.needsUpdate=X,D.pointLightShadows.needsUpdate=X,D.spotLights.needsUpdate=X,D.spotLightShadows.needsUpdate=X,D.rectAreaLights.needsUpdate=X,D.hemisphereLights.needsUpdate=X}function Wo(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(D,X,Y){Ne.get(D.texture).__webglTexture=X,Ne.get(D.depthTexture).__webglTexture=Y;const ne=Ne.get(D);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=Y===void 0,ne.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,X){const Y=Ne.get(D);Y.__webglFramebuffer=X,Y.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(D,X=0,Y=0){H=D,L=X,k=Y;let ne=!0,$=null,Me=!1,Ie=!1;if(D){const $e=Ne.get(D);if($e.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(O.FRAMEBUFFER,null),ne=!1;else if($e.__webglFramebuffer===void 0)N.setupRenderTarget(D);else if($e.__hasExternalTextures)N.rebindTextures(D,Ne.get(D.texture).__webglTexture,Ne.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const He=D.depthTexture;if($e.__boundDepthTexture!==He){if(He!==null&&Ne.has(He)&&(D.width!==He.image.width||D.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(D)}}const tt=D.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ie=!0);const rt=Ne.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(rt[X])?$=rt[X][Y]:$=rt[X],Me=!0):D.samples>0&&N.useMultisampledRTT(D)===!1?$=Ne.get(D).__webglMultisampledFramebuffer:Array.isArray(rt)?$=rt[Y]:$=rt,B.copy(D.viewport),ee.copy(D.scissor),K=D.scissorTest}else B.copy(ke).multiplyScalar(ie).floor(),ee.copy(Je).multiplyScalar(ie).floor(),K=mt;if(Ce.bindFramebuffer(O.FRAMEBUFFER,$)&&ne&&Ce.drawBuffers(D,$),Ce.viewport(B),Ce.scissor(ee),Ce.setScissorTest(K),Me){const $e=Ne.get(D.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+X,$e.__webglTexture,Y)}else if(Ie){const $e=Ne.get(D.texture),tt=X||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,$e.__webglTexture,Y||0,tt)}I=-1},this.readRenderTargetPixels=function(D,X,Y,ne,$,Me,Ie){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Ne.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ie!==void 0&&(Xe=Xe[Ie]),Xe){Ce.bindFramebuffer(O.FRAMEBUFFER,Xe);try{const $e=D.texture,tt=$e.format,rt=$e.type;if(!ze.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=D.width-ne&&Y>=0&&Y<=D.height-$&&O.readPixels(X,Y,ne,$,it.convert(tt),it.convert(rt),Me)}finally{const $e=H!==null?Ne.get(H).__webglFramebuffer:null;Ce.bindFramebuffer(O.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(D,X,Y,ne,$,Me,Ie){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Ne.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ie!==void 0&&(Xe=Xe[Ie]),Xe){const $e=D.texture,tt=$e.format,rt=$e.type;if(!ze.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=D.width-ne&&Y>=0&&Y<=D.height-$){Ce.bindFramebuffer(O.FRAMEBUFFER,Xe);const He=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,He),O.bufferData(O.PIXEL_PACK_BUFFER,Me.byteLength,O.STREAM_READ),O.readPixels(X,Y,ne,$,it.convert(tt),it.convert(rt),0);const _t=H!==null?Ne.get(H).__webglFramebuffer:null;Ce.bindFramebuffer(O.FRAMEBUFFER,_t);const Ue=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await m0(O,Ue,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,He),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Me),O.deleteBuffer(He),O.deleteSync(Ue),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,X=null,Y=0){D.isTexture!==!0&&(Zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,D=arguments[1]);const ne=Math.pow(2,-Y),$=Math.floor(D.image.width*ne),Me=Math.floor(D.image.height*ne),Ie=X!==null?X.x:0,Xe=X!==null?X.y:0;N.setTexture2D(D,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,Ie,Xe,$,Me),Ce.unbindTexture()},this.copyTextureToTexture=function(D,X,Y=null,ne=null,$=0){D.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,D=arguments[1],X=arguments[2],$=arguments[3]||0,Y=null);let Me,Ie,Xe,$e,tt,rt,He,_t,Ue;const Rt=D.isCompressedTexture?D.mipmaps[$]:D.image;Y!==null?(Me=Y.max.x-Y.min.x,Ie=Y.max.y-Y.min.y,Xe=Y.isBox3?Y.max.z-Y.min.z:1,$e=Y.min.x,tt=Y.min.y,rt=Y.isBox3?Y.min.z:0):(Me=Rt.width,Ie=Rt.height,Xe=Rt.depth||1,$e=0,tt=0,rt=0),ne!==null?(He=ne.x,_t=ne.y,Ue=ne.z):(He=0,_t=0,Ue=0);const jt=it.convert(X.format),Mt=it.convert(X.type);let Ye;X.isData3DTexture?(N.setTexture3D(X,0),Ye=O.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(N.setTexture2DArray(X,0),Ye=O.TEXTURE_2D_ARRAY):(N.setTexture2D(X,0),Ye=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const Cn=O.getParameter(O.UNPACK_ROW_LENGTH),yt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),fn=O.getParameter(O.UNPACK_SKIP_PIXELS),Un=O.getParameter(O.UNPACK_SKIP_ROWS),nn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Rt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Rt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,$e),O.pixelStorei(O.UNPACK_SKIP_ROWS,tt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,rt);const ai=D.isDataArrayTexture||D.isData3DTexture,b=X.isDataArrayTexture||X.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){const gt=Ne.get(D),wi=Ne.get(X),Yt=Ne.get(gt.__renderTarget),rn=Ne.get(wi.__renderTarget);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,rn.__webglFramebuffer);for(let On=0;On<Xe;On++)ai&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(D).__webglTexture,$,rt+On),D.isDepthTexture?(b&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(X).__webglTexture,$,Ue+On),O.blitFramebuffer($e,tt,Me,Ie,He,_t,Me,Ie,O.DEPTH_BUFFER_BIT,O.NEAREST)):b?O.copyTexSubImage3D(Ye,$,He,_t,Ue+On,$e,tt,Me,Ie):O.copyTexSubImage2D(Ye,$,He,_t,Ue+On,$e,tt,Me,Ie);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else b?D.isDataTexture||D.isData3DTexture?O.texSubImage3D(Ye,$,He,_t,Ue,Me,Ie,Xe,jt,Mt,Rt.data):X.isCompressedArrayTexture?O.compressedTexSubImage3D(Ye,$,He,_t,Ue,Me,Ie,Xe,jt,Rt.data):O.texSubImage3D(Ye,$,He,_t,Ue,Me,Ie,Xe,jt,Mt,Rt):D.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,$,He,_t,Me,Ie,jt,Mt,Rt.data):D.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,$,He,_t,Rt.width,Rt.height,jt,Rt.data):O.texSubImage2D(O.TEXTURE_2D,$,He,_t,Me,Ie,jt,Mt,Rt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Cn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,fn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Un),O.pixelStorei(O.UNPACK_SKIP_IMAGES,nn),$===0&&X.generateMipmaps&&O.generateMipmap(Ye),Ce.unbindTexture()},this.copyTextureToTexture3D=function(D,X,Y=null,ne=null,$=0){return D.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,ne=arguments[1]||null,D=arguments[2],X=arguments[3],$=arguments[4]||0),Zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,X,Y,ne,$)},this.initRenderTarget=function(D){Ne.get(D).__webglFramebuffer===void 0&&N.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?N.setTextureCube(D,0):D.isData3DTexture?N.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?N.setTexture2DArray(D,0):N.setTexture2D(D,0),Ce.unbindTexture()},this.resetState=function(){L=0,k=0,H=null,Ce.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class Cd{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ot(e),this.near=t,this.far=n}clone(){return new Cd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mw extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ew{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uc,this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new z;class Rd{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),o=bt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const lh=new z,uh=new Et,hh=new Et,TE=new z,dh=new ut,to=new z,Na=new oi,fh=new ut,Fa=new Ir;class bw extends ln{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hu,this.bindMatrix=new ut,this.bindMatrixInverse=new ut,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,to),this.boundingBox.expandByPoint(to)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,to),this.boundingSphere.expandByPoint(to)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(r),e.ray.intersectsSphere(Na)!==!1&&(fh.copy(r).invert(),Fa.copy(e.ray).applyMatrix4(fh),!(this.boundingBox!==null&&Fa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;uh.fromBufferAttribute(r.attributes.skinIndex,e),hh.fromBufferAttribute(r.attributes.skinWeight,e),lh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const c=hh.getComponent(o);if(c!==0){const l=uh.getComponent(o);dh.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(TE.copy(lh).applyMatrix4(dh),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class AE extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Pd extends en{constructor(e=null,t=1,n=1,r,o,c,l,h,d=yn,p=yn,_,m){super(null,c,l,h,d,p,r,o,_,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ph=new ut,CE=new ut;class Dd{constructor(e=[],t=[]){this.uuid=Tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new ut)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ut;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let o=0,c=e.length;o<c;o++){const l=e[o]?e[o].matrixWorld:CE;ph.multiplyMatrices(l,t[o]),ph.toArray(n,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Dd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Pd(t,e,e,wn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const o=e.bones[n];let c=t[o];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),c=new AE),this.bones.push(c),this.boneInverses.push(new ut().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,o=t.length;r<o;r++){const c=t[r];e.bones.push(c.uuid);const l=n[r];e.boneInverses.push(l.toArray())}return e}}class mh extends qt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const dr=new ut,_h=new ut,no=[],gh=new Mi,RE=new ut,Wr=new ln,Xr=new oi;class ww extends ln{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,RE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),gh.copy(e.boundingBox).applyMatrix4(dr),this.boundingBox.union(gh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),Xr.copy(e.boundingSphere).applyMatrix4(dr),this.boundingSphere.union(Xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,o=n.length+1,c=e*o+1;for(let l=0;l<n.length;l++)n[l]=r[c+l]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(n),e.ray.intersectsSphere(Xr)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,dr),_h.multiplyMatrices(n,dr),Wr.matrixWorld=_h,Wr.raycast(e,no);for(let c=0,l=no.length;c<l;c++){const h=no[c];h.instanceId=o,h.object=this,t.push(h)}no.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pd(new Float32Array(r*this.count),r,this.count,Qc,Fn));const o=this.morphTexture.source.data.data;let c=0;for(let d=0;d<n.length;d++)c+=n[d];const l=this.geometry.morphTargetsRelative?1:1-c,h=r*e;o[h]=l,o.set(n,h+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class al extends Yi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ao=new z,Co=new z,vh=new ut,$r=new Ir,io=new oi,Ua=new z,yh=new z;class Ld extends Ft{constructor(e=new Zt,t=new al){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)Ao.fromBufferAttribute(t,r-1),Co.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ao.distanceTo(Co);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),io.radius+=o,e.ray.intersectsSphere(io)===!1)return;vh.copy(r).invert(),$r.copy(e.ray).applyMatrix4(vh);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,d=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){const v=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let T=v,x=S-1;T<x;T+=d){const y=p.getX(T),U=p.getX(T+1),P=ro(this,e,$r,h,y,U);P&&t.push(P)}if(this.isLineLoop){const T=p.getX(S-1),x=p.getX(v),y=ro(this,e,$r,h,T,x);y&&t.push(y)}}else{const v=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let T=v,x=S-1;T<x;T+=d){const y=ro(this,e,$r,h,T,T+1);y&&t.push(y)}if(this.isLineLoop){const T=ro(this,e,$r,h,S-1,v);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function ro(i,e,t,n,r,o){const c=i.geometry.attributes.position;if(Ao.fromBufferAttribute(c,r),Co.fromBufferAttribute(c,o),t.distanceSqToSegment(Ao,Co,Ua,yh)>n)return;Ua.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Ua);if(!(h<e.near||h>e.far))return{distance:h,point:yh.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const xh=new z,Sh=new z;class Id extends Ld{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)xh.fromBufferAttribute(t,r),Sh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+xh.distanceTo(Sh);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tw extends Ld{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class PE extends Yi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mh=new ut,Bc=new Ir,so=new oi,oo=new z;class Aw extends Ft{constructor(e=new Zt,t=new PE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),so.radius+=o,e.ray.intersectsSphere(so)===!1)return;Mh.copy(r).invert(),Bc.copy(e.ray).applyMatrix4(Mh);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,d=n.index,_=n.attributes.position;if(d!==null){const m=Math.max(0,c.start),v=Math.min(d.count,c.start+c.count);for(let S=m,T=v;S<T;S++){const x=d.getX(S);oo.fromBufferAttribute(_,x),Eh(oo,x,h,r,e,t,this)}}else{const m=Math.max(0,c.start),v=Math.min(_.count,c.start+c.count);for(let S=m,T=v;S<T;S++)oo.fromBufferAttribute(_,S),Eh(oo,S,h,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Eh(i,e,t,n,r,o,c){const l=Bc.distanceSqToPoint(i);if(l<t){const h=new z;Bc.closestPointToPoint(i,h),h.applyMatrix4(n);const d=r.ray.origin.distanceTo(h);if(d<r.near||d>r.far)return;o.push({distance:d,distanceToRay:Math.sqrt(l),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),o=0;t.push(0);for(let c=1;c<=e;c++)n=this.getPoint(c/e),o+=n.distanceTo(r),t.push(o),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const o=n.length;let c;t?c=t:c=e*n[o-1];let l=0,h=o-1,d;for(;l<=h;)if(r=Math.floor(l+(h-l)/2),d=n[r]-c,d<0)l=r+1;else if(d>0)h=r-1;else{h=r;break}if(r=h,n[r]===c)return r/(o-1);const p=n[r],m=n[r+1]-p,v=(c-p)/m;return(r+v)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const c=this.getPoint(r),l=this.getPoint(o),h=t||(c.isVector2?new Ae:new z);return h.copy(l).sub(c).normalize(),h}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new z,r=[],o=[],c=[],l=new z,h=new ut;for(let v=0;v<=e;v++){const S=v/e;r[v]=this.getTangentAt(S,new z)}o[0]=new z,c[0]=new z;let d=Number.MAX_VALUE;const p=Math.abs(r[0].x),_=Math.abs(r[0].y),m=Math.abs(r[0].z);p<=d&&(d=p,n.set(1,0,0)),_<=d&&(d=_,n.set(0,1,0)),m<=d&&n.set(0,0,1),l.crossVectors(r[0],n).normalize(),o[0].crossVectors(r[0],l),c[0].crossVectors(r[0],o[0]);for(let v=1;v<=e;v++){if(o[v]=o[v-1].clone(),c[v]=c[v-1].clone(),l.crossVectors(r[v-1],r[v]),l.length()>Number.EPSILON){l.normalize();const S=Math.acos(Gt(r[v-1].dot(r[v]),-1,1));o[v].applyMatrix4(h.makeRotationAxis(l,S))}c[v].crossVectors(r[v],o[v])}if(t===!0){let v=Math.acos(Gt(o[0].dot(o[e]),-1,1));v/=e,r[0].dot(l.crossVectors(o[0],o[e]))>0&&(v=-v);for(let S=1;S<=e;S++)o[S].applyMatrix4(h.makeRotationAxis(r[S],v*S)),c[S].crossVectors(r[S],o[S])}return{tangents:r,normals:o,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class cl extends Wn{constructor(e=0,t=0,n=1,r=1,o=0,c=Math.PI*2,l=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=c,this.aClockwise=l,this.aRotation=h}getPoint(e,t=new Ae){const n=t,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const c=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(c?o=0:o=r),this.aClockwise===!0&&!c&&(o===r?o=-r:o=o-r);const l=this.aStartAngle+e*o;let h=this.aX+this.xRadius*Math.cos(l),d=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const p=Math.cos(this.aRotation),_=Math.sin(this.aRotation),m=h-this.aX,v=d-this.aY;h=m*p-v*_+this.aX,d=m*_+v*p+this.aY}return n.set(h,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class DE extends cl{constructor(e,t,n,r,o,c){super(e,t,n,n,r,o,c),this.isArcCurve=!0,this.type="ArcCurve"}}function ll(){let i=0,e=0,t=0,n=0;function r(o,c,l,h){i=o,e=l,t=-3*o+3*c-2*l-h,n=2*o-2*c+l+h}return{initCatmullRom:function(o,c,l,h,d){r(c,l,d*(l-o),d*(h-c))},initNonuniformCatmullRom:function(o,c,l,h,d,p,_){let m=(c-o)/d-(l-o)/(d+p)+(l-c)/p,v=(l-c)/p-(h-c)/(p+_)+(h-l)/_;m*=p,v*=p,r(c,l,m,v)},calc:function(o){const c=o*o,l=c*o;return i+e*o+t*c+n*l}}}const ao=new z,Oa=new ll,Ba=new ll,ka=new ll;class LE extends Wn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new z){const n=t,r=this.points,o=r.length,c=(o-(this.closed?0:1))*e;let l=Math.floor(c),h=c-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/o)+1)*o:h===0&&l===o-1&&(l=o-2,h=1);let d,p;this.closed||l>0?d=r[(l-1)%o]:(ao.subVectors(r[0],r[1]).add(r[0]),d=ao);const _=r[l%o],m=r[(l+1)%o];if(this.closed||l+2<o?p=r[(l+2)%o]:(ao.subVectors(r[o-1],r[o-2]).add(r[o-1]),p=ao),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let S=Math.pow(d.distanceToSquared(_),v),T=Math.pow(_.distanceToSquared(m),v),x=Math.pow(m.distanceToSquared(p),v);T<1e-4&&(T=1),S<1e-4&&(S=T),x<1e-4&&(x=T),Oa.initNonuniformCatmullRom(d.x,_.x,m.x,p.x,S,T,x),Ba.initNonuniformCatmullRom(d.y,_.y,m.y,p.y,S,T,x),ka.initNonuniformCatmullRom(d.z,_.z,m.z,p.z,S,T,x)}else this.curveType==="catmullrom"&&(Oa.initCatmullRom(d.x,_.x,m.x,p.x,this.tension),Ba.initCatmullRom(d.y,_.y,m.y,p.y,this.tension),ka.initCatmullRom(d.z,_.z,m.z,p.z,this.tension));return n.set(Oa.calc(h),Ba.calc(h),ka.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function bh(i,e,t,n,r){const o=(n-e)*.5,c=(r-t)*.5,l=i*i,h=i*l;return(2*t-2*n+o+c)*h+(-3*t+3*n-2*o-c)*l+o*i+t}function IE(i,e){const t=1-i;return t*t*e}function NE(i,e){return 2*(1-i)*i*e}function FE(i,e){return i*i*e}function Qr(i,e,t,n){return IE(i,e)+NE(i,t)+FE(i,n)}function UE(i,e){const t=1-i;return t*t*t*e}function OE(i,e){const t=1-i;return 3*t*t*i*e}function BE(i,e){return 3*(1-i)*i*i*e}function kE(i,e){return i*i*i*e}function es(i,e,t,n,r){return UE(i,e)+OE(i,t)+BE(i,n)+kE(i,r)}class Nd extends Wn{constructor(e=new Ae,t=new Ae,n=new Ae,r=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ae){const n=t,r=this.v0,o=this.v1,c=this.v2,l=this.v3;return n.set(es(e,r.x,o.x,c.x,l.x),es(e,r.y,o.y,c.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zE extends Wn{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){const n=t,r=this.v0,o=this.v1,c=this.v2,l=this.v3;return n.set(es(e,r.x,o.x,c.x,l.x),es(e,r.y,o.y,c.y,l.y),es(e,r.z,o.z,c.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fd extends Wn{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class HE extends Wn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ud extends Wn{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){const n=t,r=this.v0,o=this.v1,c=this.v2;return n.set(Qr(e,r.x,o.x,c.x),Qr(e,r.y,o.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class VE extends Wn{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,r=this.v0,o=this.v1,c=this.v2;return n.set(Qr(e,r.x,o.x,c.x),Qr(e,r.y,o.y,c.y),Qr(e,r.z,o.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Od extends Wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const n=t,r=this.points,o=(r.length-1)*e,c=Math.floor(o),l=o-c,h=r[c===0?c:c-1],d=r[c],p=r[c>r.length-2?r.length-1:c+1],_=r[c>r.length-3?r.length-1:c+2];return n.set(bh(l,h.x,d.x,p.x,_.x),bh(l,h.y,d.y,p.y,_.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Ae().fromArray(r))}return this}}var kc=Object.freeze({__proto__:null,ArcCurve:DE,CatmullRomCurve3:LE,CubicBezierCurve:Nd,CubicBezierCurve3:zE,EllipseCurve:cl,LineCurve:Fd,LineCurve3:HE,QuadraticBezierCurve:Ud,QuadraticBezierCurve3:VE,SplineCurve:Od});class GE extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let o=0;for(;o<r.length;){if(r[o]>=n){const c=r[o]-n,l=this.curves[o],h=l.getLength(),d=h===0?0:1-c/h;return l.getPointAt(d,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,o=this.curves;r<o.length;r++){const c=o[r],l=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(l);for(let d=0;d<h.length;d++){const p=h[d];n&&n.equals(p)||(t.push(p),n=p)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new kc[r.type]().fromJSON(r))}return this}}class Ro extends GE{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Fd(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const o=new Ud(this.currentPoint.clone(),new Ae(e,t),new Ae(n,r));return this.curves.push(o),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,o,c){const l=new Nd(this.currentPoint.clone(),new Ae(e,t),new Ae(n,r),new Ae(o,c));return this.curves.push(l),this.currentPoint.set(o,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Od(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+l,t+h,n,r,o,c),this}absarc(e,t,n,r,o,c){return this.absellipse(e,t,n,n,r,o,c),this}ellipse(e,t,n,r,o,c,l,h){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(e+d,t+p,n,r,o,c,l,h),this}absellipse(e,t,n,r,o,c,l,h){const d=new cl(e,t,n,r,o,c,l,h);if(this.curves.length>0){const _=d.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(d);const p=d.getPoint(1);return this.currentPoint.copy(p),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Bd extends Zt{constructor(e=1,t=1,n=1,r=32,o=1,c=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:c,thetaStart:l,thetaLength:h};const d=this;r=Math.floor(r),o=Math.floor(o);const p=[],_=[],m=[],v=[];let S=0;const T=[],x=n/2;let y=0;U(),c===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(p),this.setAttribute("position",new Ut(_,3)),this.setAttribute("normal",new Ut(m,3)),this.setAttribute("uv",new Ut(v,2));function U(){const C=new z,j=new z;let L=0;const k=(t-e)/n;for(let H=0;H<=o;H++){const I=[],E=H/o,B=E*(t-e)+e;for(let ee=0;ee<=r;ee++){const K=ee/r,V=K*h+l,le=Math.sin(V),te=Math.cos(V);j.x=B*le,j.y=-E*n+x,j.z=B*te,_.push(j.x,j.y,j.z),C.set(le,k,te).normalize(),m.push(C.x,C.y,C.z),v.push(K,1-E),I.push(S++)}T.push(I)}for(let H=0;H<r;H++)for(let I=0;I<o;I++){const E=T[I][H],B=T[I+1][H],ee=T[I+1][H+1],K=T[I][H+1];(e>0||I!==0)&&(p.push(E,B,K),L+=3),(t>0||I!==o-1)&&(p.push(B,ee,K),L+=3)}d.addGroup(y,L,0),y+=L}function P(C){const j=S,L=new Ae,k=new z;let H=0;const I=C===!0?e:t,E=C===!0?1:-1;for(let ee=1;ee<=r;ee++)_.push(0,x*E,0),m.push(0,E,0),v.push(.5,.5),S++;const B=S;for(let ee=0;ee<=r;ee++){const V=ee/r*h+l,le=Math.cos(V),te=Math.sin(V);k.x=I*te,k.y=x*E,k.z=I*le,_.push(k.x,k.y,k.z),m.push(0,E,0),L.x=le*.5+.5,L.y=te*.5*E+.5,v.push(L.x,L.y),S++}for(let ee=0;ee<r;ee++){const K=j+ee,V=B+ee;C===!0?p.push(V,V+1,K):p.push(V+1,V,K),H+=3}d.addGroup(y,H,C===!0?1:2),y+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const co=new z,lo=new z,za=new z,uo=new bn;class Cw extends Zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),o=Math.cos(xr*t),c=e.getIndex(),l=e.getAttribute("position"),h=c?c.count:l.count,d=[0,0,0],p=["a","b","c"],_=new Array(3),m={},v=[];for(let S=0;S<h;S+=3){c?(d[0]=c.getX(S),d[1]=c.getX(S+1),d[2]=c.getX(S+2)):(d[0]=S,d[1]=S+1,d[2]=S+2);const{a:T,b:x,c:y}=uo;if(T.fromBufferAttribute(l,d[0]),x.fromBufferAttribute(l,d[1]),y.fromBufferAttribute(l,d[2]),uo.getNormal(za),_[0]=`${Math.round(T.x*r)},${Math.round(T.y*r)},${Math.round(T.z*r)}`,_[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,_[2]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let U=0;U<3;U++){const P=(U+1)%3,C=_[U],j=_[P],L=uo[p[U]],k=uo[p[P]],H=`${C}_${j}`,I=`${j}_${C}`;I in m&&m[I]?(za.dot(m[I].normal)<=o&&(v.push(L.x,L.y,L.z),v.push(k.x,k.y,k.z)),m[I]=null):H in m||(m[H]={index0:d[U],index1:d[P],normal:za.clone()})}}for(const S in m)if(m[S]){const{index0:T,index1:x}=m[S];co.fromBufferAttribute(l,T),lo.fromBufferAttribute(l,x),v.push(co.x,co.y,co.z),v.push(lo.x,lo.y,lo.z)}this.setAttribute("position",new Ut(v,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class bo extends Ro{constructor(e){super(e),this.uuid=Tn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Ro().fromJSON(r))}return this}}const WE={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let o=kd(i,0,r,t,!0);const c=[];if(!o||o.next===o.prev)return c;let l,h,d,p,_,m,v;if(n&&(o=qE(i,e,o,t)),i.length>80*t){l=d=i[0],h=p=i[1];for(let S=t;S<r;S+=t)_=i[S],m=i[S+1],_<l&&(l=_),m<h&&(h=m),_>d&&(d=_),m>p&&(p=m);v=Math.max(d-l,p-h),v=v!==0?32767/v:0}return rs(o,c,t,l,h,v,0),c}};function kd(i,e,t,n,r){let o,c;if(r===ob(i,e,t,n)>0)for(o=e;o<t;o+=n)c=wh(o,i[o],i[o+1],c);else for(o=t-n;o>=e;o-=n)c=wh(o,i[o],i[o+1],c);return c&&Bo(c,c.next)&&(os(c),c=c.next),c}function $i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Bo(t,t.next)||Nt(t.prev,t,t.next)===0)){if(os(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function rs(i,e,t,n,r,o,c){if(!i)return;!c&&o&&eb(i,n,r,o);let l=i,h,d;for(;i.prev!==i.next;){if(h=i.prev,d=i.next,o?$E(i,n,r,o):XE(i)){e.push(h.i/t|0),e.push(i.i/t|0),e.push(d.i/t|0),os(i),i=d.next,l=d.next;continue}if(i=d,i===l){c?c===1?(i=jE($i(i),e,t),rs(i,e,t,n,r,o,2)):c===2&&YE(i,e,t,n,r,o):rs($i(i),e,t,n,r,o,1);break}}}function XE(i){const e=i.prev,t=i,n=i.next;if(Nt(e,t,n)>=0)return!1;const r=e.x,o=t.x,c=n.x,l=e.y,h=t.y,d=n.y,p=r<o?r<c?r:c:o<c?o:c,_=l<h?l<d?l:d:h<d?h:d,m=r>o?r>c?r:c:o>c?o:c,v=l>h?l>d?l:d:h>d?h:d;let S=n.next;for(;S!==e;){if(S.x>=p&&S.x<=m&&S.y>=_&&S.y<=v&&_r(r,l,o,h,c,d,S.x,S.y)&&Nt(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function $E(i,e,t,n){const r=i.prev,o=i,c=i.next;if(Nt(r,o,c)>=0)return!1;const l=r.x,h=o.x,d=c.x,p=r.y,_=o.y,m=c.y,v=l<h?l<d?l:d:h<d?h:d,S=p<_?p<m?p:m:_<m?_:m,T=l>h?l>d?l:d:h>d?h:d,x=p>_?p>m?p:m:_>m?_:m,y=zc(v,S,e,t,n),U=zc(T,x,e,t,n);let P=i.prevZ,C=i.nextZ;for(;P&&P.z>=y&&C&&C.z<=U;){if(P.x>=v&&P.x<=T&&P.y>=S&&P.y<=x&&P!==r&&P!==c&&_r(l,p,h,_,d,m,P.x,P.y)&&Nt(P.prev,P,P.next)>=0||(P=P.prevZ,C.x>=v&&C.x<=T&&C.y>=S&&C.y<=x&&C!==r&&C!==c&&_r(l,p,h,_,d,m,C.x,C.y)&&Nt(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;P&&P.z>=y;){if(P.x>=v&&P.x<=T&&P.y>=S&&P.y<=x&&P!==r&&P!==c&&_r(l,p,h,_,d,m,P.x,P.y)&&Nt(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;C&&C.z<=U;){if(C.x>=v&&C.x<=T&&C.y>=S&&C.y<=x&&C!==r&&C!==c&&_r(l,p,h,_,d,m,C.x,C.y)&&Nt(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function jE(i,e,t){let n=i;do{const r=n.prev,o=n.next.next;!Bo(r,o)&&zd(r,n,n.next,o)&&ss(r,o)&&ss(o,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(o.i/t|0),os(n),os(n.next),n=i=o),n=n.next}while(n!==i);return $i(n)}function YE(i,e,t,n,r,o){let c=i;do{let l=c.next.next;for(;l!==c.prev;){if(c.i!==l.i&&ib(c,l)){let h=Hd(c,l);c=$i(c,c.next),h=$i(h,h.next),rs(c,e,t,n,r,o,0),rs(h,e,t,n,r,o,0);return}l=l.next}c=c.next}while(c!==i)}function qE(i,e,t,n){const r=[];let o,c,l,h,d;for(o=0,c=e.length;o<c;o++)l=e[o]*n,h=o<c-1?e[o+1]*n:i.length,d=kd(i,l,h,n,!1),d===d.next&&(d.steiner=!0),r.push(nb(d));for(r.sort(ZE),o=0;o<r.length;o++)t=KE(r[o],t);return t}function ZE(i,e){return i.x-e.x}function KE(i,e){const t=JE(i,e);if(!t)return e;const n=Hd(t,i);return $i(n,n.next),$i(t,t.next)}function JE(i,e){let t=e,n=-1/0,r;const o=i.x,c=i.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const m=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=o&&m>n&&(n=m,r=t.x<t.next.x?t:t.next,m===o))return r}t=t.next}while(t!==e);if(!r)return null;const l=r,h=r.x,d=r.y;let p=1/0,_;t=r;do o>=t.x&&t.x>=h&&o!==t.x&&_r(c<d?o:n,c,h,d,c<d?n:o,c,t.x,t.y)&&(_=Math.abs(c-t.y)/(o-t.x),ss(t,i)&&(_<p||_===p&&(t.x>r.x||t.x===r.x&&QE(r,t)))&&(r=t,p=_)),t=t.next;while(t!==l);return r}function QE(i,e){return Nt(i.prev,i,e.prev)<0&&Nt(e.next,i,i.next)<0}function eb(i,e,t,n){let r=i;do r.z===0&&(r.z=zc(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,tb(r)}function tb(i){let e,t,n,r,o,c,l,h,d=1;do{for(t=i,i=null,o=null,c=0;t;){for(c++,n=t,l=0,e=0;e<d&&(l++,n=n.nextZ,!!n);e++);for(h=d;l>0||h>0&&n;)l!==0&&(h===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,l--):(r=n,n=n.nextZ,h--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;t=n}o.nextZ=null,d*=2}while(c>1);return i}function zc(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function nb(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function _r(i,e,t,n,r,o,c,l){return(r-c)*(e-l)>=(i-c)*(o-l)&&(i-c)*(n-l)>=(t-c)*(e-l)&&(t-c)*(o-l)>=(r-c)*(n-l)}function ib(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!rb(i,e)&&(ss(i,e)&&ss(e,i)&&sb(i,e)&&(Nt(i.prev,i,e.prev)||Nt(i,e.prev,e))||Bo(i,e)&&Nt(i.prev,i,i.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Bo(i,e){return i.x===e.x&&i.y===e.y}function zd(i,e,t,n){const r=fo(Nt(i,e,t)),o=fo(Nt(i,e,n)),c=fo(Nt(t,n,i)),l=fo(Nt(t,n,e));return!!(r!==o&&c!==l||r===0&&ho(i,t,e)||o===0&&ho(i,n,e)||c===0&&ho(t,i,n)||l===0&&ho(t,e,n))}function ho(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fo(i){return i>0?1:i<0?-1:0}function rb(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&zd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ss(i,e){return Nt(i.prev,i,i.next)<0?Nt(i,e,i.next)>=0&&Nt(i,i.prev,e)>=0:Nt(i,e,i.prev)<0||Nt(i,i.next,e)<0}function sb(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,o=(i.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Hd(i,e){const t=new Hc(i.i,i.x,i.y),n=new Hc(e.i,e.x,e.y),r=i.next,o=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function wh(i,e,t,n){const r=new Hc(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function os(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ob(i,e,t,n){let r=0;for(let o=e,c=t-n;o<t;o+=n)r+=(i[c]-i[o])*(i[o+1]+i[c+1]),c=o;return r}class ts{static area(e){const t=e.length;let n=0;for(let r=t-1,o=0;o<t;r=o++)n+=e[r].x*e[o].y-e[o].x*e[r].y;return n*.5}static isClockWise(e){return ts.area(e)<0}static triangulateShape(e,t){const n=[],r=[],o=[];Th(e),Ah(n,e);let c=e.length;t.forEach(Th);for(let h=0;h<t.length;h++)r.push(c),c+=t[h].length,Ah(n,t[h]);const l=WE.triangulate(n,r);for(let h=0;h<l.length;h+=3)o.push(l.slice(h,h+3));return o}}function Th(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ah(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ul extends Zt{constructor(e=new bo([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],o=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];c(d)}this.setAttribute("position",new Ut(r,3)),this.setAttribute("uv",new Ut(o,2)),this.computeVertexNormals();function c(l){const h=[],d=t.curveSegments!==void 0?t.curveSegments:12,p=t.steps!==void 0?t.steps:1,_=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,v=t.bevelThickness!==void 0?t.bevelThickness:.2,S=t.bevelSize!==void 0?t.bevelSize:v-.1,T=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,U=t.UVGenerator!==void 0?t.UVGenerator:ab;let P,C=!1,j,L,k,H;y&&(P=y.getSpacedPoints(p),C=!0,m=!1,j=y.computeFrenetFrames(p,!1),L=new z,k=new z,H=new z),m||(x=0,v=0,S=0,T=0);const I=l.extractPoints(d);let E=I.shape;const B=I.holes;if(!ts.isClockWise(E)){E=E.reverse();for(let de=0,we=B.length;de<we;de++){const O=B[de];ts.isClockWise(O)&&(B[de]=O.reverse())}}const K=ts.triangulateShape(E,B),V=E;for(let de=0,we=B.length;de<we;de++){const O=B[de];E=E.concat(O)}function le(de,we,O){return we||console.error("THREE.ExtrudeGeometry: vec does not exist"),de.clone().addScaledVector(we,O)}const te=E.length,_e=K.length;function ie(de,we,O){let je,Se,ze;const Ce=de.x-we.x,Ze=de.y-we.y,Ne=O.x-de.x,N=O.y-de.y,R=Ce*Ce+Ze*Ze,J=Ce*N-Ze*Ne;if(Math.abs(J)>Number.EPSILON){const ue=Math.sqrt(R),he=Math.sqrt(Ne*Ne+N*N),oe=we.x-Ze/ue,Ve=we.y+Ce/ue,Pe=O.x-N/he,Be=O.y+Ne/he,ht=((Pe-oe)*N-(Be-Ve)*Ne)/(Ce*N-Ze*Ne);je=oe+Ce*ht-de.x,Se=Ve+Ze*ht-de.y;const Ee=je*je+Se*Se;if(Ee<=2)return new Ae(je,Se);ze=Math.sqrt(Ee/2)}else{let ue=!1;Ce>Number.EPSILON?Ne>Number.EPSILON&&(ue=!0):Ce<-Number.EPSILON?Ne<-Number.EPSILON&&(ue=!0):Math.sign(Ze)===Math.sign(N)&&(ue=!0),ue?(je=-Ze,Se=Ce,ze=Math.sqrt(R)):(je=Ce,Se=Ze,ze=Math.sqrt(R/2))}return new Ae(je/ze,Se/ze)}const Re=[];for(let de=0,we=V.length,O=we-1,je=de+1;de<we;de++,O++,je++)O===we&&(O=0),je===we&&(je=0),Re[de]=ie(V[de],V[O],V[je]);const Fe=[];let ke,Je=Re.concat();for(let de=0,we=B.length;de<we;de++){const O=B[de];ke=[];for(let je=0,Se=O.length,ze=Se-1,Ce=je+1;je<Se;je++,ze++,Ce++)ze===Se&&(ze=0),Ce===Se&&(Ce=0),ke[je]=ie(O[je],O[ze],O[Ce]);Fe.push(ke),Je=Je.concat(ke)}for(let de=0;de<x;de++){const we=de/x,O=v*Math.cos(we*Math.PI/2),je=S*Math.sin(we*Math.PI/2)+T;for(let Se=0,ze=V.length;Se<ze;Se++){const Ce=le(V[Se],Re[Se],je);be(Ce.x,Ce.y,-O)}for(let Se=0,ze=B.length;Se<ze;Se++){const Ce=B[Se];ke=Fe[Se];for(let Ze=0,Ne=Ce.length;Ze<Ne;Ze++){const N=le(Ce[Ze],ke[Ze],je);be(N.x,N.y,-O)}}}const mt=S+T;for(let de=0;de<te;de++){const we=m?le(E[de],Je[de],mt):E[de];C?(k.copy(j.normals[0]).multiplyScalar(we.x),L.copy(j.binormals[0]).multiplyScalar(we.y),H.copy(P[0]).add(k).add(L),be(H.x,H.y,H.z)):be(we.x,we.y,0)}for(let de=1;de<=p;de++)for(let we=0;we<te;we++){const O=m?le(E[we],Je[we],mt):E[we];C?(k.copy(j.normals[de]).multiplyScalar(O.x),L.copy(j.binormals[de]).multiplyScalar(O.y),H.copy(P[de]).add(k).add(L),be(H.x,H.y,H.z)):be(O.x,O.y,_/p*de)}for(let de=x-1;de>=0;de--){const we=de/x,O=v*Math.cos(we*Math.PI/2),je=S*Math.sin(we*Math.PI/2)+T;for(let Se=0,ze=V.length;Se<ze;Se++){const Ce=le(V[Se],Re[Se],je);be(Ce.x,Ce.y,_+O)}for(let Se=0,ze=B.length;Se<ze;Se++){const Ce=B[Se];ke=Fe[Se];for(let Ze=0,Ne=Ce.length;Ze<Ne;Ze++){const N=le(Ce[Ze],ke[Ze],je);C?be(N.x,N.y+P[p-1].y,P[p-1].x+O):be(N.x,N.y,_+O)}}}re(),ve();function re(){const de=r.length/3;if(m){let we=0,O=te*we;for(let je=0;je<_e;je++){const Se=K[je];fe(Se[2]+O,Se[1]+O,Se[0]+O)}we=p+x*2,O=te*we;for(let je=0;je<_e;je++){const Se=K[je];fe(Se[0]+O,Se[1]+O,Se[2]+O)}}else{for(let we=0;we<_e;we++){const O=K[we];fe(O[2],O[1],O[0])}for(let we=0;we<_e;we++){const O=K[we];fe(O[0]+te*p,O[1]+te*p,O[2]+te*p)}}n.addGroup(de,r.length/3-de,0)}function ve(){const de=r.length/3;let we=0;Oe(V,we),we+=V.length;for(let O=0,je=B.length;O<je;O++){const Se=B[O];Oe(Se,we),we+=Se.length}n.addGroup(de,r.length/3-de,1)}function Oe(de,we){let O=de.length;for(;--O>=0;){const je=O;let Se=O-1;Se<0&&(Se=de.length-1);for(let ze=0,Ce=p+x*2;ze<Ce;ze++){const Ze=te*ze,Ne=te*(ze+1),N=we+je+Ze,R=we+Se+Ze,J=we+Se+Ne,ue=we+je+Ne;Te(N,R,J,ue)}}}function be(de,we,O){h.push(de),h.push(we),h.push(O)}function fe(de,we,O){Qe(de),Qe(we),Qe(O);const je=r.length/3,Se=U.generateTopUV(n,r,je-3,je-2,je-1);dt(Se[0]),dt(Se[1]),dt(Se[2])}function Te(de,we,O,je){Qe(de),Qe(we),Qe(je),Qe(we),Qe(O),Qe(je);const Se=r.length/3,ze=U.generateSideWallUV(n,r,Se-6,Se-3,Se-2,Se-1);dt(ze[0]),dt(ze[1]),dt(ze[3]),dt(ze[1]),dt(ze[2]),dt(ze[3])}function Qe(de){r.push(h[de*3+0]),r.push(h[de*3+1]),r.push(h[de*3+2])}function dt(de){o.push(de.x),o.push(de.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return cb(t,n,e)}static fromJSON(e,t){const n=[];for(let o=0,c=e.shapes.length;o<c;o++){const l=t[e.shapes[o]];n.push(l)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new kc[r.type]().fromJSON(r)),new ul(n,e.options)}}const ab={generateTopUV:function(i,e,t,n,r){const o=e[t*3],c=e[t*3+1],l=e[n*3],h=e[n*3+1],d=e[r*3],p=e[r*3+1];return[new Ae(o,c),new Ae(l,h),new Ae(d,p)]},generateSideWallUV:function(i,e,t,n,r,o){const c=e[t*3],l=e[t*3+1],h=e[t*3+2],d=e[n*3],p=e[n*3+1],_=e[n*3+2],m=e[r*3],v=e[r*3+1],S=e[r*3+2],T=e[o*3],x=e[o*3+1],y=e[o*3+2];return Math.abs(l-p)<Math.abs(c-d)?[new Ae(c,1-h),new Ae(d,1-_),new Ae(m,1-S),new Ae(T,1-y)]:[new Ae(l,1-h),new Ae(p,1-_),new Ae(v,1-S),new Ae(x,1-y)]}};function cb(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const o=i[n];t.shapes.push(o.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Vd extends Zt{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,c=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:c,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(c+l,Math.PI);let d=0;const p=[],_=new z,m=new z,v=[],S=[],T=[],x=[];for(let y=0;y<=n;y++){const U=[],P=y/n;let C=0;y===0&&c===0?C=.5/t:y===n&&h===Math.PI&&(C=-.5/t);for(let j=0;j<=t;j++){const L=j/t;_.x=-e*Math.cos(r+L*o)*Math.sin(c+P*l),_.y=e*Math.cos(c+P*l),_.z=e*Math.sin(r+L*o)*Math.sin(c+P*l),S.push(_.x,_.y,_.z),m.copy(_).normalize(),T.push(m.x,m.y,m.z),x.push(L+C,1-P),U.push(d++)}p.push(U)}for(let y=0;y<n;y++)for(let U=0;U<t;U++){const P=p[y][U+1],C=p[y][U],j=p[y+1][U],L=p[y+1][U+1];(y!==0||c>0)&&v.push(P,C,L),(y!==n-1||h<Math.PI)&&v.push(C,j,L)}this.setIndex(v),this.setAttribute("position",new Ut(S,3)),this.setAttribute("normal",new Ut(T,3)),this.setAttribute("uv",new Ut(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vc extends Yi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ld,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rw extends Vc{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function po(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function lb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ub(i){function e(r,o){return i[r]-i[o]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Ch(i,e,t){const n=i.length,r=new i.constructor(n);for(let o=0,c=0;c!==n;++o){const l=t[o]*e;for(let h=0;h!==e;++h)r[c++]=i[l+h]}return r}function Gd(i,e,t,n){let r=1,o=i[0];for(;o!==void 0&&o[n]===void 0;)o=i[r++];if(o===void 0)return;let c=o[n];if(c!==void 0)if(Array.isArray(c))do c=o[n],c!==void 0&&(e.push(o.time),t.push.apply(t,c)),o=i[r++];while(o!==void 0);else if(c.toArray!==void 0)do c=o[n],c!==void 0&&(e.push(o.time),c.toArray(t,t.length)),o=i[r++];while(o!==void 0);else do c=o[n],c!==void 0&&(e.push(o.time),t.push(c)),o=i[r++];while(o!==void 0)}class ko{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],o=t[n-1];e:{t:{let c;n:{i:if(!(e<r)){for(let l=n+2;;){if(r===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(o=r,r=t[++n],e<r)break t}c=t.length;break n}if(!(e>=o)){const l=t[1];e<l&&(n=2,o=l);for(let h=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(r=o,o=t[--n-1],e>=o)break t}c=n,n=0;break n}break e}for(;n<c;){const l=n+c>>>1;e<t[l]?c=l:n=l+1}if(r=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=e*r;for(let c=0;c!==r;++c)t[c]=n[o+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hb extends ko{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:du,endingEnd:du}}intervalChanged_(e,t,n){const r=this.parameterPositions;let o=e-2,c=e+1,l=r[o],h=r[c];if(l===void 0)switch(this.getSettings_().endingStart){case fu:o=e,l=2*t-n;break;case pu:o=r.length-2,l=t+r[o]-r[o+1];break;default:o=e,l=n}if(h===void 0)switch(this.getSettings_().endingEnd){case fu:c=e,h=2*n-t;break;case pu:c=1,h=n+r[1]-r[0];break;default:c=e-1,h=t}const d=(n-t)*.5,p=this.valueSize;this._weightPrev=d/(t-l),this._weightNext=d/(h-n),this._offsetPrev=o*p,this._offsetNext=c*p}interpolate_(e,t,n,r){const o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,h=e*l,d=h-l,p=this._offsetPrev,_=this._offsetNext,m=this._weightPrev,v=this._weightNext,S=(n-t)/(r-t),T=S*S,x=T*S,y=-m*x+2*m*T-m*S,U=(1+m)*x+(-1.5-2*m)*T+(-.5+m)*S+1,P=(-1-v)*x+(1.5+v)*T+.5*S,C=v*x-v*T;for(let j=0;j!==l;++j)o[j]=y*c[p+j]+U*c[d+j]+P*c[h+j]+C*c[_+j];return o}}class db extends ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,h=e*l,d=h-l,p=(n-t)/(r-t),_=1-p;for(let m=0;m!==l;++m)o[m]=c[d+m]*_+c[h+m]*p;return o}}class fb extends ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=po(t,this.TimeBufferType),this.values=po(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:po(e.times,Array),values:po(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new db(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wo:t=this.InterpolantFactoryMethodDiscrete;break;case Fc:t=this.InterpolantFactoryMethodLinear;break;case oa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wo;case this.InterpolantFactoryMethodLinear:return Fc;case this.InterpolantFactoryMethodSmooth:return oa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let o=0,c=r-1;for(;o!==r&&n[o]<e;)++o;for(;c!==-1&&n[c]>t;)--c;if(++c,o!==0||c!==r){o>=c&&(c=Math.max(c,1),o=c-1);const l=this.getValueSize();this.times=n.slice(o,c),this.values=this.values.slice(o*l,c*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let l=0;l!==o;l++){const h=n[l];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,h),e=!1;break}if(c!==null&&c>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,h,c),e=!1;break}c=h}if(r!==void 0&&lb(r))for(let l=0,h=r.length;l!==h;++l){const d=r[l];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===oa,o=e.length-1;let c=1;for(let l=1;l<o;++l){let h=!1;const d=e[l],p=e[l+1];if(d!==p&&(l!==1||d!==e[0]))if(r)h=!0;else{const _=l*n,m=_-n,v=_+n;for(let S=0;S!==n;++S){const T=t[_+S];if(T!==t[m+S]||T!==t[v+S]){h=!0;break}}}if(h){if(l!==c){e[c]=e[l];const _=l*n,m=c*n;for(let v=0;v!==n;++v)t[m+v]=t[_+v]}++c}}if(o>0){e[c]=e[o];for(let l=o*n,h=c*n,d=0;d!==n;++d)t[h+d]=t[l+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Fc;class Fr extends Xn{constructor(e,t,n){super(e,t,n)}}Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=wo;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class Wd extends Xn{}Wd.prototype.ValueTypeName="color";class Po extends Xn{}Po.prototype.ValueTypeName="number";class pb extends ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,h=(n-t)/(r-t);let d=e*l;for(let p=d+l;d!==p;d+=4)hn.slerpFlat(o,0,c,d-l,c,d,h);return o}}class zo extends Xn{InterpolantFactoryMethodLinear(e){return new pb(this.times,this.values,this.getValueSize(),e)}}zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ur extends Xn{constructor(e,t,n){super(e,t,n)}}Ur.prototype.ValueTypeName="string";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=wo;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Do extends Xn{}Do.prototype.ValueTypeName="vector";class Pw{constructor(e="",t=-1,n=[],r=zv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Tn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let c=0,l=n.length;c!==l;++c)t.push(_b(n[c]).scale(r));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,c=n.length;o!==c;++o)t.push(Xn.toJSON(n[o]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const o=t.length,c=[];for(let l=0;l<o;l++){let h=[],d=[];h.push((l+o-1)%o,l,(l+1)%o),d.push(0,1,0);const p=ub(h);h=Ch(h,1,p),d=Ch(d,1,p),!r&&h[0]===0&&(h.push(o),d.push(d[0])),c.push(new Po(".morphTargetInfluences["+t[l].name+"]",h,d).scale(1/n))}return new this(e,-1,c)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},o=/^([\w-]*?)([\d]+)$/;for(let l=0,h=e.length;l<h;l++){const d=e[l],p=d.name.match(o);if(p&&p.length>1){const _=p[1];let m=r[_];m||(r[_]=m=[]),m.push(d)}}const c=[];for(const l in r)c.push(this.CreateFromMorphTargetSequence(l,r[l],t,n));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(_,m,v,S,T){if(v.length!==0){const x=[],y=[];Gd(v,x,y,S),x.length!==0&&T.push(new _(m,x,y))}},r=[],o=e.name||"default",c=e.fps||30,l=e.blendMode;let h=e.length||-1;const d=e.hierarchy||[];for(let _=0;_<d.length;_++){const m=d[_].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const v={};let S;for(S=0;S<m.length;S++)if(m[S].morphTargets)for(let T=0;T<m[S].morphTargets.length;T++)v[m[S].morphTargets[T]]=-1;for(const T in v){const x=[],y=[];for(let U=0;U!==m[S].morphTargets.length;++U){const P=m[S];x.push(P.time),y.push(P.morphTarget===T?1:0)}r.push(new Po(".morphTargetInfluence["+T+"]",x,y))}h=v.length*c}else{const v=".bones["+t[_].name+"]";n(Do,v+".position",m,"pos",r),n(zo,v+".quaternion",m,"rot",r),n(Do,v+".scale",m,"scl",r)}}return r.length===0?null:new this(o,h,r,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function mb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Po;case"vector":case"vector2":case"vector3":case"vector4":return Do;case"color":return Wd;case"quaternion":return zo;case"bool":case"boolean":return Fr;case"string":return Ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function _b(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=mb(i.type);if(i.times===void 0){const t=[],n=[];Gd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const gi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class gb{constructor(e,t,n){const r=this;let o=!1,c=0,l=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){l++,o===!1&&r.onStart!==void 0&&r.onStart(p,c,l),o=!0},this.itemEnd=function(p){c++,r.onProgress!==void 0&&r.onProgress(p,c,l),c===l&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,_){return d.push(p,_),this},this.removeHandler=function(p){const _=d.indexOf(p);return _!==-1&&d.splice(_,2),this},this.getHandler=function(p){for(let _=0,m=d.length;_<m;_+=2){const v=d[_],S=d[_+1];if(v.global&&(v.lastIndex=0),v.test(p))return S}return null}}}const vb=new gb;class ls{constructor(e){this.manager=e!==void 0?e:vb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ls.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qn={};class yb extends Error{constructor(e,t){super(e),this.response=t}}class Dw extends ls{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=gi.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Qn[e]!==void 0){Qn[e].push({onLoad:t,onProgress:n,onError:r});return}Qn[e]=[],Qn[e].push({onLoad:t,onProgress:n,onError:r});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,h=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=Qn[e],_=d.body.getReader(),m=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),v=m?parseInt(m):0,S=v!==0;let T=0;const x=new ReadableStream({start(y){U();function U(){_.read().then(({done:P,value:C})=>{if(P)y.close();else{T+=C.byteLength;const j=new ProgressEvent("progress",{lengthComputable:S,loaded:T,total:v});for(let L=0,k=p.length;L<k;L++){const H=p[L];H.onProgress&&H.onProgress(j)}y.enqueue(C),U()}},P=>{y.error(P)})}}});return new Response(x)}else throw new yb(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,l));case"json":return d.json();default:if(l===void 0)return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(l),m=_&&_[1]?_[1].toLowerCase():void 0,v=new TextDecoder(m);return d.arrayBuffer().then(S=>v.decode(S))}}}).then(d=>{gi.add(e,d);const p=Qn[e];delete Qn[e];for(let _=0,m=p.length;_<m;_++){const v=p[_];v.onLoad&&v.onLoad(d)}}).catch(d=>{const p=Qn[e];if(p===void 0)throw this.manager.itemError(e),d;delete Qn[e];for(let _=0,m=p.length;_<m;_++){const v=p[_];v.onError&&v.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class xb extends ls{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=gi.get(e);if(c!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0),c;const l=is("img");function h(){p(),gi.add(e,this),t&&t(this),o.manager.itemEnd(e)}function d(_){p(),r&&r(_),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){l.removeEventListener("load",h,!1),l.removeEventListener("error",d,!1)}return l.addEventListener("load",h,!1),l.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(e),l.src=e,l}}class Lw extends ls{constructor(e){super(e)}load(e,t,n,r){const o=new en,c=new xb(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(l){o.image=l,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class Ho extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Iw extends Ho{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ha=new ut,Rh=new z,Ph=new z;class hl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sl,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Rh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rh),Ph.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ph),t.updateMatrixWorld(),Ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sb extends hl{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Cr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Nw extends Ho{constructor(e,t,n=0,r=Math.PI/3,o=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=r,this.penumbra=o,this.decay=c,this.map=null,this.shadow=new Sb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Dh=new ut,jr=new z,Va=new z;class Mb extends hl{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(jr),Va.copy(n.position),Va.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Va),n.updateMatrixWorld(),r.makeTranslation(-jr.x,-jr.y,-jr.z),Dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dh)}}class Fw extends Ho{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Mb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Eb extends hl{constructor(){super(new Md(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uw extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Eb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ow{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Bw extends ls{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=gi.get(e);if(c!==void 0){if(o.manager.itemStart(e),c.then){c.then(d=>{t&&t(d),o.manager.itemEnd(e)}).catch(d=>{r&&r(d)});return}return setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0),c}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const h=fetch(e,l).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(d){return gi.add(e,d),t&&t(d),o.manager.itemEnd(e),d}).catch(function(d){r&&r(d),gi.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});gi.add(e,h),o.manager.itemStart(e)}}class kw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Lh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Lh(){return performance.now()}const dl="\\[\\]\\.:\\/",bb=new RegExp("["+dl+"]","g"),fl="[^"+dl+"]",wb="[^"+dl.replace("\\.","")+"]",Tb=/((?:WC+[\/:])*)/.source.replace("WC",fl),Ab=/(WCOD+)?/.source.replace("WCOD",wb),Cb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),Rb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),Pb=new RegExp("^"+Tb+Ab+Cb+Rb+"$"),Db=["material","materials","bones","map"];class Lb{constructor(e,t,n){const r=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class At{constructor(e,t,n){this.path=t,this.parsedPath=n||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new At.Composite(e,t,n):new At(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bb,"")}static parseTrackName(e){const t=Pb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const o=n.nodeName.substring(r+1);Db.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(o){for(let c=0;c<o.length;c++){const l=o[c];if(l.name===t||l.uuid===t)return l;const h=n(l.children);if(h)return h}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let o=t.propertyIndex;if(e||(e=At.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===d){d=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const c=e[r];if(c===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=r;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=Lb;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Ih=new ut;class Xd{constructor(e,t,n=0,r=1/0){this.ray=new Ir(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new rl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ih.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ih),this}intersectObject(e,t=!0,n=[]){return Gc(e,this,n,t),n.sort(Nh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)Gc(e[r],this,n,t);return n.sort(Nh),n}}function Nh(i,e){return i.distance-e.distance}function Gc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const o=i.children;for(let c=0,l=o.length;c<l;c++)Gc(o[c],e,t,!0)}}class Wc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zw extends Id{constructor(e=10,t=10,n=4473924,r=8947848){n=new ot(n),r=new ot(r);const o=t/2,c=e/t,l=e/2,h=[],d=[];for(let m=0,v=0,S=-l;m<=t;m++,S+=c){h.push(-l,0,S,l,0,S),h.push(S,0,-l,S,0,l);const T=m===o?n:r;T.toArray(d,v),v+=3,T.toArray(d,v),v+=3,T.toArray(d,v),v+=3,T.toArray(d,v),v+=3}const p=new Zt;p.setAttribute("position",new Ut(h,3)),p.setAttribute("color",new Ut(d,3));const _=new al({vertexColors:!0,toneMapped:!1});super(p,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ib extends Id{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Zt;r.setAttribute("position",new Ut(t,3)),r.setAttribute("color",new Ut(n,3));const o=new al({vertexColors:!0,toneMapped:!1});super(r,o),this.type="AxesHelper"}setColors(e,t,n){const r=new ot,o=this.geometry.attributes.color.array;return r.set(e),r.toArray(o,0),r.toArray(o,3),r.set(t),r.toArray(o,6),r.toArray(o,9),r.set(n),r.toArray(o,12),r.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Nb extends ji{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qc);const Fh={type:"change"},pl={type:"start"},$d={type:"end"},mo=new Ir,Uh=new mi,Fb=Math.cos(70*f0.DEG2RAD),Vt=new z,cn=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ga=1e-6;class Hw extends Nb{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gr.ROTATE,MIDDLE:gr.DOLLY,RIGHT:gr.PAN},this.touches={ONE:pr.ROTATE,TWO:pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new hn,this._lastTargetPosition=new z,this._quat=new hn().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wc,this._sphericalDelta=new Wc,this._scale=1,this._panOffset=new z,this._rotateStart=new Ae,this._rotateEnd=new Ae,this._rotateDelta=new Ae,this._panStart=new Ae,this._panEnd=new Ae,this._panDelta=new Ae,this._dollyStart=new Ae,this._dollyEnd=new Ae,this._dollyDelta=new Ae,this._dollyDirection=new z,this._mouse=new Ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ob.bind(this),this._onPointerDown=Ub.bind(this),this._onPointerUp=Bb.bind(this),this._onContextMenu=Xb.bind(this),this._onMouseWheel=Hb.bind(this),this._onKeyDown=Vb.bind(this),this._onTouchStart=Gb.bind(this),this._onTouchMove=Wb.bind(this),this._onMouseDown=kb.bind(this),this._onMouseMove=zb.bind(this),this._interceptControlDown=$b.bind(this),this._interceptControlUp=jb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fh),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;Vt.copy(t).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=cn:n>Math.PI&&(n-=cn),r<-Math.PI?r+=cn:r>Math.PI&&(r-=cn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const l=Vt.length();c=this._clampDistance(l*this._scale);const h=l-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),o=!!h}else if(this.object.isOrthographicCamera){const l=new z(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=h!==this.object.zoom;const d=new z(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(l),this.object.updateMatrixWorld(),c=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(mo.origin.copy(this.object.position),mo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(mo.direction))<Fb?this.object.lookAt(this.target):(Uh.setFromNormalAndCoplanarPoint(this.object.up,this.target),mo.intersectPlane(Uh,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ga||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ga||this._lastTargetPosition.distanceToSquared(this.target)>Ga?(this.dispatchEvent(Fh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?cn/60*this.autoRotateSpeed*e:cn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Vt.setFromMatrixColumn(t,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,t){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(t,1):(Vt.setFromMatrixColumn(t,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Vt.copy(r).sub(this.target);let o=Vt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,o=t-n.top,c=n.width,l=n.height;this._mouse.x=r/c*2-1,this._mouse.y=-(o/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(n*n+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(c,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ub(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Ob(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Bb(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($d),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function kb(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ct.DOLLY;break;case gr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}break;case gr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(pl)}function zb(i){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Hb(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(i.preventDefault(),this.dispatchEvent(pl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($d))}function Vb(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Gb(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case pr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ct.TOUCH_ROTATE;break;case pr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case pr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ct.TOUCH_DOLLY_PAN;break;case pr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(pl)}function Wb(i){switch(this._trackPointer(i),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ct.NONE}}function Xb(i){this.enabled!==!1&&i.preventDefault()}function $b(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jb(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Oh=new hn,_o=new An(0,0,0,"XYZ");function _n(i,e=4){return(Number.isFinite(i)?i:0).toFixed(e)}function Vw(i){const{bodyId:e,model:t,data:n,hudEls:r}=i,o=n.xpos,c=n.xquat,l=e*3,h=e*4,d=[o[l],o[l+1],o[l+2]],p=[c[h],c[h+1],c[h+2],c[h+3]];Oh.set(p[1],p[2],p[3],p[0]),_o.setFromQuaternion(Oh,"XYZ");const _={x:_o.x*180/Math.PI,y:_o.y*180/Math.PI,z:_o.z*180/Math.PI};let m=[0,0,0];try{const S=t.jnt("odc_free"),T=S.dofadr,x=typeof T=="number"?T:Number(t.jnt_dofadr[S.id]??(T==null?void 0:T[0])??0),y=n.qvel;Number.isFinite(x)&&(m=[y[x],y[x+1],y[x+2]])}catch{}const v={body:"odc",joint:"odc_free",frame:"mujoco-z-up",pos:d,quat:p,eulerDeg:_,vel:m,t:performance.now()};return typeof window<"u"&&(window.__odcPose=v),r!=null&&r.root&&!r.root.hidden&&(r.pos.textContent=`${_n(d[0])}  ${_n(d[1])}  ${_n(d[2])}`,r.quat.textContent=`${_n(p[0])}  ${_n(p[1])}  ${_n(p[2])}  ${_n(p[3])}`,r.euler.textContent=`${_n(_.x,1)}°  ${_n(_.y,1)}°  ${_n(_.z,1)}°`,r.vel.textContent=`${_n(m[0])}  ${_n(m[1])}  ${_n(m[2])}`),v}function Gw(i=.06){const e=new Ib(i);return e.name="odcBodyAxes",e.raycast=()=>{},e}const Wa=180/Math.PI,Bh=Math.PI/180,Xa=new z,kh=new Wc,Yb=new z(0,1,0),zh=new hn,Hh=new hn;function Mn(i,e=3){return(Number.isFinite(i)?i:0).toFixed(e)}function qb(i,e){const t=e.getAzimuthalAngle(),n=e.getPolarAngle(),r=e.getDistance(),o=Math.PI/2-n;return{position:[i.position.x,i.position.y,i.position.z],target:[e.target.x,e.target.y,e.target.z],azimuthDeg:t*Wa,polarDeg:n*Wa,elevationDeg:o*Wa,distance:r}}function Zb(i,e,t){const[n,r,o]=t.target;e.target.set(n,r,o);const c=t.azimuthDeg*Bh;let l=t.elevationDeg*Bh;l=Math.max(-Math.PI/2+.001,Math.min(Math.PI/2-.001,l));const h=Math.PI/2-l,d=Math.max(1e-4,t.distance);kh.set(d,h,c),Xa.setFromSpherical(kh),zh.setFromUnitVectors(i.up,Yb),Hh.copy(zh).invert(),Xa.applyQuaternion(Hh),i.position.copy(e.target).add(Xa),i.lookAt(e.target),e.update()}function Ww(i){const{camera:e,controls:t,view:n,parent:r=document.getElementById("app"),toggleButton:o=document.getElementById("btn-camera")}=i;let c=document.getElementById("camera-hud");c||(c=document.createElement("aside"),c.id="camera-hud",c.setAttribute("aria-label","Camera view angle"),c.innerHTML=`
      <header>
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
        <button type="button" data-act="copy">Copy JSON</button>
      </div>
      <dl class="cam-live">
        <div><dt>pos</dt><dd data-live="pos">—</dd></div>
        <div><dt>az / el / dist</dt><dd data-live="aed">—</dd></div>
      </dl>
      <p class="pose-hint">Also <code>window.__cameraPose</code> each frame</p>
    `,(r||document.body).appendChild(c));const l={azimuthDeg:c.querySelector('input[data-k="azimuthDeg"]'),elevationDeg:c.querySelector('input[data-k="elevationDeg"]'),distance:c.querySelector('input[data-k="distance"]'),tx:c.querySelector('input[data-k="tx"]'),ty:c.querySelector('input[data-k="ty"]'),tz:c.querySelector('input[data-k="tz"]')},h=c.querySelector('[data-live="pos"]'),d=c.querySelector('[data-live="aed"]');let p=null;c.addEventListener("focusin",v=>{v.target instanceof HTMLInputElement&&(p=v.target)}),c.addEventListener("focusout",()=>{p=null});function _(){const v=qb(e,t),S={view:n,frame:"mujoco-z-up",...v,t:performance.now()};return typeof window<"u"&&(window.__cameraPose=S),h.textContent=`${Mn(v.position[0])}  ${Mn(v.position[1])}  ${Mn(v.position[2])}`,d.textContent=`${Mn(v.azimuthDeg,1)}°  ${Mn(v.elevationDeg,1)}°  ${Mn(v.distance,3)} m`,p||(l.azimuthDeg.value=Mn(v.azimuthDeg,1),l.elevationDeg.value=Mn(v.elevationDeg,1),l.distance.value=Mn(v.distance,3),l.tx.value=Mn(v.target[0],3),l.ty.value=Mn(v.target[1],3),l.tz.value=Mn(v.target[2],3)),S}function m(){Zb(e,t,{azimuthDeg:Number(l.azimuthDeg.value),elevationDeg:Number(l.elevationDeg.value),distance:Number(l.distance.value),target:[Number(l.tx.value),Number(l.ty.value),Number(l.tz.value)]}),_()}return c.querySelector('[data-act="apply"]').addEventListener("click",m),c.querySelector('[data-act="copy"]').addEventListener("click",async()=>{const v=_(),S=JSON.stringify(v,null,2);try{await navigator.clipboard.writeText(S)}catch{console.log("__cameraPose",v)}}),c.addEventListener("keydown",v=>{v.key==="Enter"&&v.target instanceof HTMLInputElement&&(v.preventDefault(),m())}),o&&(o.addEventListener("click",()=>{const v=!c.hidden;c.hidden=v,o.setAttribute("aria-pressed",v?"false":"true")}),o.setAttribute("aria-pressed",c.hidden?"false":"true")),_(),{update:_,applyFromInputs:m,root:c}}async function Vh(i){const e=await fetch(i);if(!e.ok)throw new Error(`Failed to fetch ${i} (${e.status})`);return e.text()}function Kb(i,e,t={}){const n=new i.MjVFS,r=new TextEncoder;for(const[c,l]of Object.entries(t))n.addBuffer(c,r.encode(l));const o=i.MjModel.from_xml_string(e,n);if(!o)throw new Error("MjModel.from_xml_string failed");return o}async function Xw(i,e,t={}){const n=await Vh(e),r={};return await Promise.all(Object.entries(t).map(async([o,c])=>{r[o]=await Vh(c)})),Kb(i,n,r)}const Gh="/physical/models/sg90/cad/GrabCAD_SG90_body.step",Yr=.0155,Gi=21,Lo=360/Gi;let vn=0;const Jb={linearUnit:"millimeter",linearDeflectionType:"absolute_value",linearDeflection:.06,angularDeflection:.3},Pr={cross:{id:"cross",label:"Cross (4 pads)",blurb:"GrabCAD cross — default",kind:"step",step:"/physical/models/sg90/cad/GrabCAD_SG90_cross_horn.step",align:"cross",default:!0},single:{id:"single",label:"1-arm",blurb:"Fewer pads — FreeCAD/GrabCAD 1-arm",kind:"step",step:"/physical/models/sg90/cad/SG90-1-arm-horn.step",align:"single"},short:{id:"short",label:"Short",blurb:"Short kit arm (~14 mm) — parametric",kind:"parametric",parametric:"short"},long:{id:"long",label:"Long / wide",blurb:"Long kit arm (~30 mm) — parametric",kind:"parametric",parametric:"long"},double:{id:"double",label:"2-arm",blurb:"Straight bar through hub (kit) — parametric",kind:"parametric",parametric:"double"}};function Qb(){var i;return((i=Object.values(Pr).find(e=>e.default))==null?void 0:i.id)||"cross"}function Xc(i){return i&&Pr[i]?i:i==="one_arm"||i==="1arm"||i==="one-arm"?"single":Qb()}function Vo(i){const e=Math.trunc(Number(i));return Number.isFinite(e)?(e%Gi+Gi)%Gi:0}function Mr(i=vn){return Vo(i)*Lo}function Io(i=vn){return Mr(i)*Math.PI/180}function $w(i){const e=Vo(i);return`${e} (${Mr(e).toFixed(1)}°)`}function jw(){return vn}function ew(i){if(!i)return;const e=i.getObjectByName("sg90CadHorn");e&&(e.rotation.z=Io())}function Yw(i,e){var n;vn=Vo(i);const t=e||jd||(typeof window<"u"?(n=window.__sg90Roots)==null?void 0:n.rotorRoot:null);return ew(t),typeof window<"u"&&window.__sg90Cad&&(window.__sg90Cad.hornMountIndex=vn,window.__sg90Cad.hornMountOffsetDeg=Mr(),window.__sg90Cad.hornMountOffsetRad=Io(),window.__sg90Cad.splineTeeth=Gi,window.__sg90Cad.splineStepDeg=Lo),vn}let $a=null,Bi=null,$c=null,jd=null,fr=null,jc=null,Yc=null;async function tw(){return $a||($a=(async()=>{let i=null;try{const e=await Zh(()=>import("./occt-import-js-DCqKp0QJ.js").then(t=>t.o),__vite__mapDeps([0,1]));i=e.default||e.occtimportjs||e,i&&typeof i!="function"&&typeof i.default=="function"&&(i=i.default)}catch{}return typeof i!="function"&&typeof window<"u"&&typeof window.occtimportjs=="function"&&(i=window.occtimportjs),typeof i!="function"&&(i=await new Promise((e,t)=>{const n=document.createElement("script");n.src="/physical/vendor/occt-import-js/occt-import-js.js",n.async=!0,n.onload=()=>{const r=window.occtimportjs;typeof r=="function"?e(r):t(new Error("occtimportjs global missing after script load"))},n.onerror=()=>t(new Error("failed to load /vendor/occt-import-js/occt-import-js.js")),document.head.appendChild(n)})),i({locateFile:e=>e.endsWith(".wasm")?"/physical/vendor/occt-import-js/occt-import-js.wasm":e})})()),$a}function nw(i){var c,l;const e=i.attributes.position.array,t=(c=i.attributes.normal)==null?void 0:c.array,n=(l=i.index)==null?void 0:l.array,r=new Float32Array(e.length);for(let h=0;h<e.length;h++)r[h]=e[h]*.001;const o=new Zt;return o.setAttribute("position",new qt(r,3)),t&&t.length===e.length&&o.setAttribute("normal",new qt(new Float32Array(t),3)),n!=null&&n.length&&o.setIndex(Array.from(n)),o.computeVertexNormals(),o.computeBoundingBox(),o}function Yd(i){if(i.length===1)return i[0];let e=0,t=0;for(const p of i)e+=p.attributes.position.count,t+=p.index?p.index.count:p.attributes.position.count;const n=new Float32Array(e*3),r=new Float32Array(e*3),o=new Uint32Array(t);let c=0,l=0,h=0;for(const p of i){n.set(p.attributes.position.array,c),p.attributes.normal&&r.set(p.attributes.normal.array,c);const _=p.attributes.position.count;if(p.index)for(let m=0;m<p.index.count;m++)o[l++]=p.index.getX(m)+h;else for(let m=0;m<_;m++)o[l++]=h+m;c+=p.attributes.position.array.length,h+=_}const d=new Zt;return d.setAttribute("position",new qt(n,3)),d.setAttribute("normal",new qt(r,3)),d.setIndex(new qt(o,1)),d.computeBoundingBox(),d}async function qd(i,e){var o;const t=await fetch(e);if(!t.ok)throw new Error(`fetch ${e} ${t.status}`);const n=new Uint8Array(await t.arrayBuffer()),r=i.ReadStepFile(n,Jb);if(!(r!=null&&r.success)||!((o=r.meshes)!=null&&o.length))throw new Error(`STEP parse failed: ${e}`);return Yd(r.meshes.map(nw))}function iw(i){i.rotateX(Math.PI/2),i.computeBoundingBox(),i.translate(0,0,-i.boundingBox.min.z),i.computeBoundingBox();const e=i.boundingBox.max.z,t=i.attributes.position;let n=0,r=0,o=0;for(let h=0;h<t.count;h++)t.getZ(h)>e-.003&&(n+=t.getX(h),r+=t.getY(h),o+=1);o&&i.translate(-n/o,-r/o,0),i.computeBoundingBox();const c=.003;let l=-1/0;for(let h=0;h<t.count;h++){if(Math.hypot(t.getX(h),t.getY(h))<c)continue;const p=t.getZ(h);p>l&&(l=p)}return Number.isFinite(l)||(l=i.boundingBox.max.z),l}function rw(i){i.computeBoundingBox();const e=i.attributes.position,t=.004;let n=1/0;for(let r=0;r<e.count;r++){if(Math.hypot(e.getX(r),e.getY(r))<t)continue;const c=e.getZ(r);c<n&&(n=c)}Number.isFinite(n)||(n=i.boundingBox.min.z),i.translate(0,0,-n),i.computeBoundingBox()}function sw(i){i.computeBoundingBox();const e=i.attributes.position,t=72,n=new Float64Array(t);for(let h=0;h<e.count;h++){const d=e.getX(h),p=e.getY(h),_=Math.hypot(d,p);if(_<1e-9)continue;let m=Math.floor((Math.atan2(p,d)+Math.PI)/(2*Math.PI)*t);m<0&&(m=0),m>=t&&(m=t-1),_>n[m]&&(n[m]=_)}let r=0,o=-1;for(let h=0;h<t;h++)n[h]>o&&(o=n[h],r=h);const c=(r+.5)/t*2*Math.PI-Math.PI;i.rotateZ(-c),i.computeBoundingBox();const l=i.boundingBox;Math.abs(l.min.x)>l.max.x+1e-9&&(i.rotateZ(Math.PI),i.computeBoundingBox())}function Zd(i){sw(i),rw(i)}function ow(i){i.rotateX(Math.PI/2),i.computeBoundingBox();const e=i.boundingBox;i.translate(-.5*(e.min.x+e.max.x),-.5*(e.min.y+e.max.y),-e.min.z),Zd(i)}function aw(i){i.computeBoundingBox();let e=i.boundingBox;const t=[e.max.x-e.min.x,e.max.y-e.min.y,e.max.z-e.min.z],n=t.indexOf(Math.min(...t));n===0?i.rotateY(-Math.PI/2):n===1&&i.rotateX(Math.PI/2),i.computeBoundingBox(),e=i.boundingBox,i.translate(0,0,-e.min.z),i.computeBoundingBox(),e=i.boundingBox,i.translate(0,-.5*(e.min.y+e.max.y),0),i.computeBoundingBox(),e=i.boundingBox;const r=i.attributes.position;function o(p,_){let m=0,v=0,S=0,T=0,x=0;for(let y=0;y<r.count;y++){const U=r.getX(y);if(U<p||U>_)continue;const P=r.getY(y),C=r.getZ(y);m+=U,v+=P,S+=C,x+=P*P,T+=1}return T?{x:m/T,y:v/T,n:T,rms:Math.sqrt(x/T),meanZ:S/T}:{x:0,y:0,n:0,rms:1,meanZ:0}}const c=e.max.x-e.min.x,l=o(e.min.x,e.min.x+.28*c),h=o(e.max.x-.28*c,e.max.x),d=l.meanZ>=h.meanZ?l:h;i.translate(-d.x,-d.y,0),i.rotateX(Math.PI),Zd(i)}function cw(i){let c,l,h,d,p;i==="short"?(c=.012,l=.0034,h=.0026,d=2,p=!1):i==="long"?(c=.03,l=.0034,h=.0022,d=7,p=!1):(c=.017,l=.0032,h=.0022,d=4,p=!0);const _=new bo;_.absarc(0,0,.0035,0,Math.PI*2,!1);const m=new Ro;m.absarc(0,0,.00145,0,Math.PI*2,!0),_.holes.push(m);function v(P,C){for(let L=0;L<d;L++){const k=C*(.0057+L*.002);if(Math.abs(k)>c-.0015)break;const H=new Ro;H.absarc(k,0,55e-5,0,Math.PI*2,!0),P.holes.push(H)}}function S(){const C=new bo;return C.moveTo(.001225,l),C.lineTo(c,h),C.absarc(c,0,h,Math.PI/2,-Math.PI/2,!0),C.lineTo(.001225,-l),C.lineTo(.001225,l),C.closePath(),v(C,1),C}function T(){const P=new bo,C=.0035*.25;return P.moveTo(-c,h),P.lineTo(-C,l),P.lineTo(C,l),P.lineTo(c,h),P.absarc(c,0,h,Math.PI/2,-Math.PI/2,!0),P.lineTo(C,-l),P.lineTo(-C,-l),P.lineTo(-c,-h),P.absarc(-c,0,h,-Math.PI/2,Math.PI/2,!0),P.closePath(),v(P,1),v(P,-1),P}const x=[_];p?x.push(T()):x.push(S());const y=x.map(P=>{const C=new ul(P,{depth:.0024,bevelEnabled:!1,curveSegments:28});return C.computeVertexNormals(),C}),U=Yd(y);for(const P of y)P!==U&&P.dispose();return U.computeBoundingBox(),U}function Wh(i){[...i.children].forEach(e=>{var t,n;e.isMesh&&(i.remove(e),e.geometry&&e.geometry!==Bi&&((n=(t=e.geometry).dispose)==null||n.call(t)))})}function lw(){jc||(jc=new Vc({color:2781050,roughness:.4,metalness:.15})),Yc||(Yc=new Vc({color:15133422,roughness:.35,metalness:.08}))}async function uw(i,e){const t=Pr[e]||Pr.cross;if(t.kind==="parametric")return{geo:cw(t.parametric),provenance:`parametric:${t.parametric}`};if(!i)throw new Error("OCCT required for STEP horn");const n=await qd(i,t.step);return t.align==="single"?aw(n):ow(n),{geo:n,provenance:t.step}}async function Xh(i,e,t={}){var r;$c=i,jd=e;const n=Xc(t.hornId);t.hornMountIndex!==void 0&&(vn=Vo(t.hornMountIndex));try{lw();const c=!Bi||((r=Pr[n])==null?void 0:r.kind)==="step"?await tw():null;if(!Bi){const _=await qd(c,Gh);fr=iw(_),Bi=_}const{geo:l,provenance:h}=await uw(c,n);Wh(i),Wh(e);const d=new ln(Bi,jc);d.name="sg90CadBody",d.castShadow=!0,d.receiveShadow=!0,d.position.set(0,0,Yr-fr),i.add(d);const p=new ln(l,Yc);if(p.name="sg90CadHorn",p.castShadow=!0,p.receiveShadow=!0,p.position.set(0,0,0),p.rotation.z=Io(),e.add(p),typeof window<"u"){Bi.computeBoundingBox(),l.computeBoundingBox();const _=Yr-fr,m=Bi.boundingBox.max.z,v=l.attributes.position;let S=1/0,T=1/0;for(let C=0;C<v.count;C++){const j=Math.hypot(v.getX(C),v.getY(C)),L=v.getZ(C);j>=.004?S=Math.min(S,L):T=Math.min(T,L)}const x=p.position.z,y=_+fr,U=Yr+x+S,P=Yr+x+T;window.__sg90Cad={ok:!0,hornId:n,horn:Pr[n],provenance:h,body:Gh,shaftZ:fr,tipZ:m,rotorZ:Yr,bodyOffsetZ:_,flangeMinZ:S,collarMinZ:T,gapFlangeToBoss_mm:(U-y)*1e3,gapCollarToBoss_mm:(P-y)*1e3,hornMountIndex:vn,hornMountOffsetDeg:Mr(),hornMountOffsetRad:Io(),splineTeeth:Gi,splineStepDeg:Lo},window.__sg90Roots={housingRoot:i,rotorRoot:e,bodyMesh:d,hornMesh:p}}return{ok:!0,hornId:n,shaftZ:fr,hornMountIndex:vn,hornMountOffsetDeg:Mr()}}catch(o){const c=String((o==null?void 0:o.message)||o);return console.warn("SG90 STEP CAD load failed; keeping box proxies",o),typeof window<"u"&&(window.__sg90Cad={ok:!1,error:c,hornId:n,hornMountIndex:vn,hornMountOffsetDeg:Mr(),splineTeeth:Gi,splineStepDeg:Lo}),{ok:!1,error:c,hornId:n,hornMountIndex:vn}}}async function qw(i,e,t){if(t!==void 0)return Xh(i,e,{hornId:Xc(t),hornMountIndex:vn});if(!$c)throw new Error("setSg90Horn(rotor, id): call attachSg90CadMeshes first");return Xh($c,i,{hornId:Xc(e),hornMountIndex:vn})}const ja=Math.PI/180;let ri={yaw:0,pitch:0,roll:0};const $h=new hn,jh=new hn,qr=new hn,Yh=new An(0,0,0,"ZYX");function Ya(i,e=-180,t=180){const n=Number(i);return Number.isFinite(n)?Math.max(e,Math.min(t,n)):0}function ml(){return{...ri}}function Zw(i={}){return i.yaw!==void 0&&(ri.yaw=Ya(i.yaw)),i.pitch!==void 0&&(ri.pitch=Ya(i.pitch)),i.roll!==void 0&&(ri.roll=Ya(i.roll)),Dr(),ml()}function Kw(){return ri={yaw:0,pitch:0,roll:0},Dr(),ml()}function hw(i=ri){const e=Math.round(i.yaw),t=Math.round(i.pitch),n=Math.round(i.roll);return`Y${e} P${t} R${n}`}function Kd(i,e=ri){return jh.set(i[1],i[2],i[3],i[0]),Yh.set((e.roll||0)*ja,(e.pitch||0)*ja,(e.yaw||0)*ja,"ZYX"),$h.setFromEuler(Yh),qr.copy($h).multiply(jh),[qr.w,qr.x,qr.y,qr.z]}function Jw(i,e){const t=i.body_quat,n=e*4;return[t[n],t[n+1],t[n+2],t[n+3]]}function Qw(i,e){const t=i.qpos;return{pos:[t[e],t[e+1],t[e+2]],wxyz:[t[e+3],t[e+4],t[e+5],t[e+6]]}}function eT({mujoco:i,model:e,data:t,bodyId:n,baseWxyz:r}){if(n<0||!e||!t)return;const o=Kd(r,ri),c=e.body_quat,l=n*4;c[l]=o[0],c[l+1]=o[1],c[l+2]=o[2],c[l+3]=o[3],i.mj_forward(e,t),Dr()}function tT({mujoco:i,model:e,data:t,freeQposAdr:n,baseWxyz:r,pos:o,freeDofAdr:c=-1,initialQpos:l=null,running:h=!1,force:d=!1,orient:p=null}){if(n<0||!e||!t)return!1;if(h&&!d)return Dr({deferred:!0}),!1;const m=Kd(r,p||ri),v=t.qpos;if(o&&(v[n]=o[0],v[n+1]=o[1],v[n+2]=o[2]),v[n+3]=m[0],v[n+4]=m[1],v[n+5]=m[2],v[n+6]=m[3],c>=0)for(let S=0;S<6;S++)t.qvel[c+S]=0;return l&&(o&&(l[n]=o[0],l[n+1]=o[1],l[n+2]=o[2]),l[n+3]=m[0],l[n+4]=m[1],l[n+5]=m[2],l[n+6]=m[3]),i.mj_forward(e,t),Dr({deferred:!1}),!0}function Dr(i={}){if(typeof window>"u")return;const e=ml();window.__sg90MotorOrientation={yawDeg:e.yaw,pitchDeg:e.pitch,rollDeg:e.roll,label:hw(e),mode:"edit-while-paused / apply-on-reset (lab freejoint)",layers:"housing: world*motor*base; horn: world*motor*base*hinge*mount",...i,t:performance.now()}}Dr();function nT(i,e){i.userData.labObject={...e},i.traverse(t=>{t.isMesh&&(t.userData.labObject=i.userData.labObject)})}function iT(i){const{canvas:e,camera:t,scene:n,panelEls:r,getPoseText:o,getExtraText:c,getPartnerText:l,getGroupText:h,onSelect:d}=i,p=new Xd,_=new Ae;let m=null,v=null,S=null,T=null;const x=new Map;function y(){for(const[E,B]of x)E.material&&E.material.emissive&&E.material.emissive.copy(B);x.clear()}function U(){y();const E=[v,T].filter(Boolean);for(const B of E){const ee=B===v?3364198:5588002;B.traverse(K=>{if(!K.isMesh||!K.material)return;const V=K.material;V.emissive&&(x.has(K)||x.set(K,V.emissive.clone()),V.emissive.setHex(ee))})}}function P(E){r.partner&&(r.partner.textContent=l?l(E,S):S?S.name:"— (Shift+click partner)"),r.group&&(r.group.textContent=h?h(E):"—")}function C(E){if(m=E,typeof window<"u"&&(window.__labSelection=E?{...E,poseText:o(E),extraText:c(E),partner:S?{id:S.id,body:S.body,name:S.name}:null,t:performance.now()}:null),!E){r.root.hidden=!0,r.name.textContent="—",r.type.textContent="—",r.id.textContent="—",r.pose.textContent="—",r.extra.textContent="—",P(null),d==null||d(null,S);return}r.root.hidden=!1,r.name.textContent=E.name,r.type.textContent=E.type,r.id.textContent=E.id,r.pose.textContent=o(E),r.extra.textContent=c(E),P(E),d==null||d(E,S)}function j(E,B=null,{asPartner:ee=!1}={}){if(ee&&E){m&&(m.id===E.id||m.body===E.body)?(S=null,T=null):(S=E,T=B),U(),C(m);return}v=B,S&&E&&(S.id===E.id||S.body===E.body)&&(S=null,T=null),U(),C(E)}function L(E){var ee;let B=E;for(;B;){if((ee=B.userData)!=null&&ee.labObject)return B;B=B.parent}return null}function k(E){var K;if(E.button!==0||E.target!==e)return;const B=e.getBoundingClientRect();_.x=(E.clientX-B.left)/B.width*2-1,_.y=-((E.clientY-B.top)/B.height)*2+1,p.setFromCamera(_,t);const ee=p.intersectObjects(n.children,!0);for(const V of ee){const le=L(V.object);if((K=le==null?void 0:le.userData)!=null&&K.labObject){j(le.userData.labObject,le,{asPartner:!!E.shiftKey});return}}v=null,S=null,T=null,y(),C(null)}e.addEventListener("pointerdown",k);function H(){m&&(r.pose.textContent=o(m),r.extra.textContent=c(m),P(m),typeof window<"u"&&window.__labSelection&&(window.__labSelection.poseText=r.pose.textContent,window.__labSelection.extraText=r.extra.textContent,window.__labSelection.partner=S?{id:S.id,body:S.body,name:S.name}:null,window.__labSelection.t=performance.now()))}function I(){e.removeEventListener("pointerdown",k),y()}return{selectMeta:j,clear:()=>{v=null,S=null,T=null,y(),C(null)},getSelected:()=>m,getSelectedRoot:()=>v,getPartner:()=>S,getPartnerRoot:()=>T,setPartner:(E,B=null)=>{S=E,T=B,U(),C(m)},updatePanel:H,dispose:I}}const qa=.45,qh=4;function dw(i){return i?i.id==="sg90"||i.body==="sg90":!1}function go(i){return i?dw(i)||i.id==="sg90_horn"||i.body==="sg90_rotor":!1}function rT(i){const{canvas:e,camera:t,orbitControls:n,getSelected:r,getSelectedRoot:o,getOrientation:c,applyOrientation:l,hintEl:h=null,onActiveChange:d}=i,p=new Xd,_=new Ae;let m=!1,v=!1,S=0,T=0,x={yaw:0,pitch:0,roll:0},y=!1,U=!0,P=null;function C(V={}){if(typeof window>"u")return;const le=r(),te=go(le);window.__sg90MotorReorient={selected:te,dragging:v,hint:te?"Drag to reorient motor":null,layers:"motor_R only — hinge + 21T mount unchanged",...V,t:performance.now()}}function j(V){h&&(V?(h.hidden=!1,h.textContent="Drag to reorient motor"):h.hidden=!0)}function L(V){V==="grabbing"?e.style.cursor="grabbing":V==="grab"?e.style.cursor="grab":e.style.cursor=""}function k(){const V=go(r());j(V),L(V?v?"grabbing":"grab":""),d==null||d(V),C()}function H(V,le){const te=o();if(!te||!go(r()))return!1;const _e=e.getBoundingClientRect();return _.x=(V-_e.left)/_e.width*2-1,_.y=-((le-_e.top)/_e.height)*2+1,p.setFromCamera(_,t),p.intersectObject(te,!0).length>0}function I(){if(!m&&!v)return;const V=v;if(m=!1,v=!1,n.enabled=U,V&&l(c(),{dragging:!1}),P!=null){try{e.releasePointerCapture(P)}catch{}P=null}k()}function E(V){if(V.button===0&&V.target===e&&go(r())&&H(V.clientX,V.clientY)){m=!0,v=!1,S=V.clientX,T=V.clientY,x={...c()},y=!!V.shiftKey,P=V.pointerId,U=n.enabled,n.enabled=!1;try{e.setPointerCapture(V.pointerId)}catch{}C({tracking:!0})}}function B(V){if(!m)return;const le=V.clientX-S,te=V.clientY-T;if(!v){if(le*le+te*te<qh*qh)return;v=!0,L("grabbing"),C({dragging:!0})}y=!!V.shiftKey;let _e;y?_e={yaw:x.yaw,pitch:x.pitch,roll:x.roll+le*qa}:_e={yaw:x.yaw+le*qa,pitch:x.pitch-te*qa,roll:x.roll},l(_e,{dragging:!0})}function ee(){I()}function K(){I()}return e.addEventListener("pointerdown",E),e.addEventListener("pointermove",B),e.addEventListener("pointerup",ee),e.addEventListener("pointercancel",K),k(),{onSelectionChange:k,isDragging:()=>v,dispose:()=>{e.removeEventListener("pointerdown",E),e.removeEventListener("pointermove",B),e.removeEventListener("pointerup",ee),e.removeEventListener("pointercancel",K),I(),j(!1),L(""),typeof window<"u"&&(window.__sg90MotorReorient=null)}}}export{AE as $,bw as A,qt as B,ot as C,Uw as D,ln as E,Dw as F,Id as G,Ld as H,ww as I,Tw as J,Aw as K,ls as L,Rw as M,Is as N,Ft as O,Fw as P,hn as Q,ac as R,En as S,vw as T,eo as U,Ae as V,gn as W,f0 as X,Md as Y,Dd as Z,Pw as _,xw as a,wo as a0,Fc as a1,Rd as a2,en as a3,Do as a4,Po as a5,zo as a6,St as a7,xi as a8,ko as a9,Mw as aA,Cd as aB,Hw as aC,Iw as aD,Uo as aE,zw as aF,Gw as aG,cs as aH,Vd as aI,Bd as aJ,Cw as aK,pw as aL,gw as aM,Vw as aN,kw as aO,qw as aP,Yw as aQ,go as aR,Xw as aS,Jw as aT,rT as aU,eT as aV,Mi as aa,oi as ab,st as ac,Ut as ad,Zh as ae,Qw as af,ml as ag,Zw as ah,Ya as ai,hw as aj,Kd as ak,tT as al,Xd as am,Qb as an,Kw as ao,Pr as ap,Gi as aq,$w as ar,Vh as as,Ww as at,iT as au,Xh as av,jw as aw,nT as ax,Sw as ay,uv as az,yw as b,Ow as c,Lr as d,Nw as e,ut as f,z as g,mh as h,Lw as i,Bw as j,Ew as k,Vi as l,sa as m,kv as n,Gn as o,yn as p,cc as q,Hi as r,PE as s,Yi as t,al as u,Vc as v,ti as w,md as x,At as y,Zt as z};
