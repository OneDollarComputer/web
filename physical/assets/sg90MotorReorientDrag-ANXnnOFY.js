const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/occt-import-js-DCqKp0QJ.js","assets/__vite-browser-external-D7Ct-6yo.js"])))=>i.map(i=>d[i]);
var cv=Object.defineProperty;var lv=(i,e,t)=>e in i?cv(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Pn=(i,e,t)=>lv(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const uv="modulepreload",hv=function(i){return"/physical/"+i},lu={},ed=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let c=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),h=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));r=c(t.map(d=>{if(d=hv(d),d in lu)return;lu[d]=!0;const p=d.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const _=document.createElement("link");if(_.rel=p?"stylesheet":uv,p||(_.as="script"),_.crossOrigin="",_.href=d,h&&_.setAttribute("nonce",h),document.head.appendChild(_),p)return new Promise((y,M)=>{_.addEventListener("load",y),_.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return r.then(c=>{for(const l of c||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})};var Mw=(async function(i={}){var su,ou,au;var e,t=i,n=typeof window=="object",r=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&((su=process.versions)==null?void 0:su.node)&&process.type!="renderer",c=!n&&!o&&!r;if(o){const{createRequire:s}=await ed(async()=>{const{createRequire:a}=await import("./__vite-browser-external-D7Ct-6yo.js").then(u=>u._);return{createRequire:a}},[]);var l=s(import.meta.url)}var h="./this.program",d=(s,a)=>{throw a},p=import.meta.url,m="";function _(s){return t.locateFile?t.locateFile(s,m):m+s}var y,M;if(o){if(!(typeof process=="object"&&((ou=process.versions)==null?void 0:ou.node)&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var E=process.versions.node,x=E.split(".").slice(0,3);if(x=x[0]*1e4+x[1]*100+x[2].split("-")[0]*1,x<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+E+")");var v=l("fs");p.startsWith("file:")&&(m=l("path").dirname(l("url").fileURLToPath(p))+"/"),M=a=>{a=B(a)?new URL(a):a;var u=v.readFileSync(a);return L(Buffer.isBuffer(u)),u},y=async(a,u=!0)=>{a=B(a)?new URL(a):a;var f=v.readFileSync(a,u?void 0:"utf8");return L(u?Buffer.isBuffer(f):typeof f=="string"),f},process.argv.length>1&&(h=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),d=(a,u)=>{throw process.exitCode=a,u}}else if(c){if(typeof process=="object"&&((au=process.versions)==null?void 0:au.node)&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||r){try{m=new URL(".",p).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");r&&(M=s=>{var a=new XMLHttpRequest;return a.open("GET",s,!1),a.responseType="arraybuffer",a.send(null),new Uint8Array(a.response)}),y=async s=>{if(B(s))return new Promise((u,f)=>{var g=new XMLHttpRequest;g.open("GET",s,!0),g.responseType="arraybuffer",g.onload=()=>{if(g.status==200||g.status==0&&g.response){u(g.response);return}f(g.status)},g.onerror=f,g.send(null)});var a=await fetch(s,{credentials:"same-origin"});if(a.ok)return a.arrayBuffer();throw new Error(a.status+" : "+a.url)}}else throw new Error("environment detection error");var F=console.log.bind(console),P=console.error.bind(console);L(!c,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var C;typeof WebAssembly!="object"&&P("no native wasm support detected");var V=!1;function L(s,a){s||fe("Assertion failed"+(a?": "+a:""))}var B=s=>s.startsWith("file://");function H(){var s=oa();L((s&3)==0),s==0&&(s+=4),Me[s>>2]=34821223,Me[s+4>>2]=2310721022,Me[0]=1668509029}function I(){if(!V){var s=oa();s==0&&(s+=4);var a=Me[s>>2],u=Me[s+4>>2];(a!=34821223||u!=2310721022)&&fe(`Stack overflow! Stack cookie has been overwritten at ${_e(s)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${_e(u)} ${_e(a)}`),Me[0]!=1668509029&&fe("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class b extends Error{}class O extends b{}class q extends b{constructor(a){super(a),this.excPtr=a;const u=Xl(a);this.name=u[0],this.message=u[1]}}(()=>{var s=new Int16Array(1),a=new Int8Array(s.buffer);if(s[0]=25459,a[0]!==115||a[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function Z(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,set(){fe(`Attempt to set \`Module.${s}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function Q(s){return()=>L(!1,`call to '${s}' via reference taken before Wasm module initialization`)}function ne(s){Object.getOwnPropertyDescriptor(t,s)&&fe(`\`Module.${s}\` was supplied but \`${s}\` not included in INCOMING_MODULE_JS_API`)}function ie(s){return s==="FS_createPath"||s==="FS_createDataFile"||s==="FS_createPreloadedFile"||s==="FS_unlink"||s==="addRunDependency"||s==="FS_createLazyFile"||s==="FS_createDevice"||s==="removeRunDependency"}function me(s,a){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,s)&&Object.defineProperty(globalThis,s,{configurable:!0,get(){a()}})}function se(s,a){me(s,()=>{Qe(`\`${s}\` is not longer defined by emscripten. ${a}`)})}se("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),se("asm","Please use wasmExports instead");function Ce(s){me(s,()=>{var a=`\`${s}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,u=s;u.startsWith("_")||(u="$"+s),a+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${u}')`,ie(s)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Qe(a)}),Le(s)}function Le(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,get(){var a=`'${s}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;ie(s)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),fe(a)}})}var Oe,Ke,ht,oe,ve,Ue,be,pe,Me,Je,ct,X,he,k=!1;function $e(){var s=ht.buffer;oe=new Int8Array(s),Ue=new Int16Array(s),ve=new Uint8Array(s),be=new Uint16Array(s),pe=new Int32Array(s),Me=new Uint32Array(s),Je=new Float32Array(s),ct=new Float64Array(s),X=new BigInt64Array(s),he=new BigUint64Array(s)}L(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function Ee(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Ie(t.preRun.shift());Z("preRun"),pt(G)}function ze(){L(!k),k=!0,I(),!t.noFSInit&&!w.initialized&&w.init(),Pi.__wasm_call_ctors(),w.ignorePermissions=!1}function Re(){if(I(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)wt(t.postRun.shift());Z("postRun"),pt(it)}var Ze=0,Fe=null,N={},R=null;function ee(s){var a;Ze++,(a=t.monitorRunDependencies)==null||a.call(t,Ze),s?(L(!N[s]),N[s]=1,R===null&&typeof setInterval<"u"&&(R=setInterval(()=>{if(V){clearInterval(R),R=null;return}var u=!1;for(var f in N)u||(u=!0,P("still waiting on run dependencies:")),P(`dependency: ${f}`);u&&P("(end of list)")},1e4))):P("warning: run dependency added without ID")}function de(s){var u;if(Ze--,(u=t.monitorRunDependencies)==null||u.call(t,Ze),s?(L(N[s]),delete N[s]):P("warning: run dependency removed without ID"),Ze==0&&(R!==null&&(clearInterval(R),R=null),Fe)){var a=Fe;Fe=null,a()}}function fe(s){var u;(u=t.onAbort)==null||u.call(t,s),s="Aborted("+s+")",P(s),V=!0;var a=new WebAssembly.RuntimeError(s);throw Ke==null||Ke(a),a}function ce(s,a){return(...u)=>{L(k,`native function \`${s}\` called before runtime initialization`);var f=Pi[s];return L(f,`exported native function \`${s}\` not found`),L(u.length<=a,`native function \`${s}\` called with ${u.length} args but expects ${a}`),f(...u)}}var Ve;function Pe(){return t.locateFile?_("mujoco.wasm"):new URL("/physical/assets/mujoco-D9UjOFNX.wasm",import.meta.url).href}function Be(s){if(s==Ve&&C)return new Uint8Array(C);if(M)return M(s);throw"both async and sync fetching of the wasm failed"}async function ft(s){if(!C)try{var a=await y(s);return new Uint8Array(a)}catch{}return Be(s)}async function Te(s,a){try{var u=await ft(s),f=await WebAssembly.instantiate(u,a);return f}catch(g){P(`failed to asynchronously prepare wasm: ${g}`),B(Ve)&&P(`warning: Loading from a file URI (${Ve}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),fe(g)}}async function Ge(s,a,u){if(!s&&typeof WebAssembly.instantiateStreaming=="function"&&!B(a)&&!o)try{var f=fetch(a,{credentials:"same-origin"}),g=await WebAssembly.instantiateStreaming(f,u);return g}catch(S){P(`wasm streaming compile failed: ${S}`),P("falling back to ArrayBuffer instantiation")}return Te(a,u)}function et(){return{env:iu,wasi_snapshot_preview1:iu}}async function nt(){function s(T,A){return Pi=T.exports,ht=Pi.memory,L(ht,"memory not found in wasm exports"),$e(),ws=Pi.__indirect_function_table,L(ws,"table not found in wasm exports"),hm(Pi),de("wasm-instantiate"),Pi}ee("wasm-instantiate");var a=t;function u(T){return L(t===a,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),a=null,s(T.instance)}var f=et();if(t.instantiateWasm)return new Promise((T,A)=>{try{t.instantiateWasm(f,(U,W)=>{T(s(U,W))})}catch(U){P(`Module.instantiateWasm callback failed with error: ${U}`),A(U)}});Ve??(Ve=Pe());var g=await Ge(C,Ve,f),S=u(g);return S}class We{constructor(a){Pn(this,"name","ExitStatus");this.message=`Program terminated with exit(${a})`,this.status=a}}var pt=s=>{for(;s.length>0;)s.shift()(t)},it=[],wt=s=>it.push(s),G=[],Ie=s=>G.push(s),ae=!0,_e=s=>(L(typeof s=="number"),s>>>=0,"0x"+s.toString(16).padStart(8,"0")),J=s=>Kl(s),K=()=>Ql(),Qe=s=>{Qe.shown||(Qe.shown={}),Qe.shown[s]||(Qe.shown[s]=1,o&&(s="warning: "+s),P(s))},Lt=typeof TextDecoder<"u"?new TextDecoder:void 0,It=(s,a=0,u=NaN)=>{for(var f=a+u,g=a;s[g]&&!(g>=f);)++g;if(g-a>16&&s.buffer&&Lt)return Lt.decode(s.subarray(a,g));for(var S="";a<g;){var T=s[a++];if(!(T&128)){S+=String.fromCharCode(T);continue}var A=s[a++]&63;if((T&224)==192){S+=String.fromCharCode((T&31)<<6|A);continue}var U=s[a++]&63;if((T&240)==224?T=(T&15)<<12|A<<6|U:((T&248)!=240&&Qe("Invalid UTF-8 leading byte "+_e(T)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),T=(T&7)<<18|A<<12|U<<6|s[a++]&63),T<65536)S+=String.fromCharCode(T);else{var W=T-65536;S+=String.fromCharCode(55296|W>>10,56320|W&1023)}}return S},dt=(s,a)=>(L(typeof s=="number",`UTF8ToString expects a number (got ${typeof s})`),s?It(ve,s,a):""),dn=(s,a,u,f)=>fe(`Assertion failed: ${dt(s)}, at: `+[a?dt(a):"unknown filename",u,f?dt(f):"unknown function"]),kt=[],Ei=0,hs=s=>{var a=new bi(s);return a.get_caught()||(a.set_caught(!0),Ei--),a.set_rethrown(!1),kt.push(a),Ls(s),nu(s)},jn=()=>{if(!kt.length)return 0;var s=kt[kt.length-1];return Ls(s.excPtr),s.excPtr},nn=0,ds=()=>{xe(0,0),L(kt.length>0);var s=kt.pop();aa(s.excPtr),nn=0};class bi{constructor(a){this.excPtr=a,this.ptr=a-24}set_type(a){Me[this.ptr+4>>2]=a}get_type(){return Me[this.ptr+4>>2]}set_destructor(a){Me[this.ptr+8>>2]=a}get_destructor(){return Me[this.ptr+8>>2]}set_caught(a){a=a?1:0,oe[this.ptr+12]=a}get_caught(){return oe[this.ptr+12]!=0}set_rethrown(a){a=a?1:0,oe[this.ptr+13]=a}get_rethrown(){return oe[this.ptr+13]!=0}init(a,u){this.set_adjusted_ptr(0),this.set_type(a),this.set_destructor(u)}set_adjusted_ptr(a){Me[this.ptr+16>>2]=a}get_adjusted_ptr(){return Me[this.ptr+16>>2]}}var Yn=s=>ql(s),qi=s=>{var a=nn==null?void 0:nn.excPtr;if(!a)return Yn(0),0;var u=new bi(a);u.set_adjusted_ptr(a);var f=u.get_type();if(!f)return Yn(0),a;for(var g of s){if(g===0||g===f)break;var S=u.ptr+16;if(tu(g,f,S))return Yn(g),a}return Yn(f),a},Zi=()=>qi([]),fs=s=>qi([s]),ps=(s,a)=>qi([s,a]),ms=()=>{var s=kt.pop();s||fe("no exception to throw");var a=s.excPtr;throw s.get_rethrown()||(kt.push(s),s.set_rethrown(!0),s.set_caught(!1),Ei++),nn=new q(a),nn},jo=s=>{if(s){var a=new bi(s);kt.push(a),a.set_rethrown(!0),ms()}},Yo=(s,a,u)=>{var f=new bi(s);throw f.init(a,u),nn=new q(s),Ei++,nn},D=()=>Ei,$=s=>{throw nn||(nn=new q(s)),nn},Y={isAbs:s=>s.charAt(0)==="/",splitPath:s=>{var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return a.exec(s).slice(1)},normalizeArray:(s,a)=>{for(var u=0,f=s.length-1;f>=0;f--){var g=s[f];g==="."?s.splice(f,1):g===".."?(s.splice(f,1),u++):u&&(s.splice(f,1),u--)}if(a)for(;u;u--)s.unshift("..");return s},normalize:s=>{var a=Y.isAbs(s),u=s.slice(-1)==="/";return s=Y.normalizeArray(s.split("/").filter(f=>!!f),!a).join("/"),!s&&!a&&(s="."),s&&u&&(s+="/"),(a?"/":"")+s},dirname:s=>{var a=Y.splitPath(s),u=a[0],f=a[1];return!u&&!f?".":(f&&(f=f.slice(0,-1)),u+f)},basename:s=>s&&s.match(/([^\/]+|\/)\/*$/)[1],join:(...s)=>Y.normalize(s.join("/")),join2:(s,a)=>Y.normalize(s+"/"+a)},re=()=>{if(o){var s=l("crypto");return a=>s.randomFillSync(a)}return a=>crypto.getRandomValues(a)},j=s=>{(j=re())(s)},we={resolve:(...s)=>{for(var a="",u=!1,f=s.length-1;f>=-1&&!u;f--){var g=f>=0?s[f]:w.cwd();if(typeof g!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!g)return"";a=g+"/"+a,u=Y.isAbs(g)}return a=Y.normalizeArray(a.split("/").filter(S=>!!S),!u).join("/"),(u?"/":"")+a||"."},relative:(s,a)=>{s=we.resolve(s).slice(1),a=we.resolve(a).slice(1);function u(W){for(var te=0;te<W.length&&W[te]==="";te++);for(var le=W.length-1;le>=0&&W[le]==="";le--);return te>le?[]:W.slice(te,le-te+1)}for(var f=u(s.split("/")),g=u(a.split("/")),S=Math.min(f.length,g.length),T=S,A=0;A<S;A++)if(f[A]!==g[A]){T=A;break}for(var U=[],A=T;A<f.length;A++)U.push("..");return U=U.concat(g.slice(T)),U.join("/")}},Ne=[],Xe=s=>{for(var a=0,u=0;u<s.length;++u){var f=s.charCodeAt(u);f<=127?a++:f<=2047?a+=2:f>=55296&&f<=57343?(a+=4,++u):a+=3}return a},je=(s,a,u,f)=>{if(L(typeof s=="string",`stringToUTF8Array expects a string (got ${typeof s})`),!(f>0))return 0;for(var g=u,S=u+f-1,T=0;T<s.length;++T){var A=s.codePointAt(T);if(A<=127){if(u>=S)break;a[u++]=A}else if(A<=2047){if(u+1>=S)break;a[u++]=192|A>>6,a[u++]=128|A&63}else if(A<=65535){if(u+2>=S)break;a[u++]=224|A>>12,a[u++]=128|A>>6&63,a[u++]=128|A&63}else{if(u+3>=S)break;A>1114111&&Qe("Invalid Unicode code point "+_e(A)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),a[u++]=240|A>>18,a[u++]=128|A>>12&63,a[u++]=128|A>>6&63,a[u++]=128|A&63,T++}}return a[u]=0,u-g},tt=(s,a,u)=>{var f=Xe(s)+1,g=new Array(f),S=je(s,g,0,g.length);return g.length=S,g},rt=()=>{if(!Ne.length){var s=null;if(o){var a=256,u=Buffer.alloc(a),f=0,g=process.stdin.fd;try{f=v.readSync(g,u,0,a)}catch(S){if(S.toString().includes("EOF"))f=0;else throw S}f>0&&(s=u.slice(0,f).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(s=window.prompt("Input: "),s!==null&&(s+=`
`));if(!s)return null;Ne=tt(s)}return Ne.shift()},He={ttys:[],init(){},shutdown(){},register(s,a){He.ttys[s]={input:[],output:[],ops:a},w.registerDevice(s,He.stream_ops)},stream_ops:{open(s){var a=He.ttys[s.node.rdev];if(!a)throw new w.ErrnoError(43);s.tty=a,s.seekable=!1},close(s){s.tty.ops.fsync(s.tty)},fsync(s){s.tty.ops.fsync(s.tty)},read(s,a,u,f,g){if(!s.tty||!s.tty.ops.get_char)throw new w.ErrnoError(60);for(var S=0,T=0;T<f;T++){var A;try{A=s.tty.ops.get_char(s.tty)}catch{throw new w.ErrnoError(29)}if(A===void 0&&S===0)throw new w.ErrnoError(6);if(A==null)break;S++,a[u+T]=A}return S&&(s.node.atime=Date.now()),S},write(s,a,u,f,g){if(!s.tty||!s.tty.ops.put_char)throw new w.ErrnoError(60);try{for(var S=0;S<f;S++)s.tty.ops.put_char(s.tty,a[u+S])}catch{throw new w.ErrnoError(29)}return f&&(s.node.mtime=s.node.ctime=Date.now()),S}},default_tty_ops:{get_char(s){return rt()},put_char(s,a){a===null||a===10?(F(It(s.output)),s.output=[]):a!=0&&s.output.push(a)},fsync(s){var a;((a=s.output)==null?void 0:a.length)>0&&(F(It(s.output)),s.output=[])},ioctl_tcgets(s){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(s,a,u){return 0},ioctl_tiocgwinsz(s){return[24,80]}},default_tty1_ops:{put_char(s,a){a===null||a===10?(P(It(s.output)),s.output=[]):a!=0&&s.output.push(a)},fsync(s){var a;((a=s.output)==null?void 0:a.length)>0&&(P(It(s.output)),s.output=[])}}},_t=s=>{fe("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},ke={ops_table:null,mount(s){return ke.createNode(null,"/",16895,0)},createNode(s,a,u,f){if(w.isBlkdev(u)||w.isFIFO(u))throw new w.ErrnoError(63);ke.ops_table||(ke.ops_table={dir:{node:{getattr:ke.node_ops.getattr,setattr:ke.node_ops.setattr,lookup:ke.node_ops.lookup,mknod:ke.node_ops.mknod,rename:ke.node_ops.rename,unlink:ke.node_ops.unlink,rmdir:ke.node_ops.rmdir,readdir:ke.node_ops.readdir,symlink:ke.node_ops.symlink},stream:{llseek:ke.stream_ops.llseek}},file:{node:{getattr:ke.node_ops.getattr,setattr:ke.node_ops.setattr},stream:{llseek:ke.stream_ops.llseek,read:ke.stream_ops.read,write:ke.stream_ops.write,mmap:ke.stream_ops.mmap,msync:ke.stream_ops.msync}},link:{node:{getattr:ke.node_ops.getattr,setattr:ke.node_ops.setattr,readlink:ke.node_ops.readlink},stream:{}},chrdev:{node:{getattr:ke.node_ops.getattr,setattr:ke.node_ops.setattr},stream:w.chrdev_stream_ops}});var g=w.createNode(s,a,u,f);return w.isDir(g.mode)?(g.node_ops=ke.ops_table.dir.node,g.stream_ops=ke.ops_table.dir.stream,g.contents={}):w.isFile(g.mode)?(g.node_ops=ke.ops_table.file.node,g.stream_ops=ke.ops_table.file.stream,g.usedBytes=0,g.contents=null):w.isLink(g.mode)?(g.node_ops=ke.ops_table.link.node,g.stream_ops=ke.ops_table.link.stream):w.isChrdev(g.mode)&&(g.node_ops=ke.ops_table.chrdev.node,g.stream_ops=ke.ops_table.chrdev.stream),g.atime=g.mtime=g.ctime=Date.now(),s&&(s.contents[a]=g,s.atime=s.mtime=s.ctime=g.atime),g},getFileDataAsTypedArray(s){return s.contents?s.contents.subarray?s.contents.subarray(0,s.usedBytes):new Uint8Array(s.contents):new Uint8Array(0)},expandFileStorage(s,a){var u=s.contents?s.contents.length:0;if(!(u>=a)){var f=1024*1024;a=Math.max(a,u*(u<f?2:1.125)>>>0),u!=0&&(a=Math.max(a,256));var g=s.contents;s.contents=new Uint8Array(a),s.usedBytes>0&&s.contents.set(g.subarray(0,s.usedBytes),0)}},resizeFileStorage(s,a){if(s.usedBytes!=a)if(a==0)s.contents=null,s.usedBytes=0;else{var u=s.contents;s.contents=new Uint8Array(a),u&&s.contents.set(u.subarray(0,Math.min(a,s.usedBytes))),s.usedBytes=a}},node_ops:{getattr(s){var a={};return a.dev=w.isChrdev(s.mode)?s.id:1,a.ino=s.id,a.mode=s.mode,a.nlink=1,a.uid=0,a.gid=0,a.rdev=s.rdev,w.isDir(s.mode)?a.size=4096:w.isFile(s.mode)?a.size=s.usedBytes:w.isLink(s.mode)?a.size=s.link.length:a.size=0,a.atime=new Date(s.atime),a.mtime=new Date(s.mtime),a.ctime=new Date(s.ctime),a.blksize=4096,a.blocks=Math.ceil(a.size/a.blksize),a},setattr(s,a){for(const u of["mode","atime","mtime","ctime"])a[u]!=null&&(s[u]=a[u]);a.size!==void 0&&ke.resizeFileStorage(s,a.size)},lookup(s,a){throw new w.ErrnoError(44)},mknod(s,a,u,f){return ke.createNode(s,a,u,f)},rename(s,a,u){var f;try{f=w.lookupNode(a,u)}catch{}if(f){if(w.isDir(s.mode))for(var g in f.contents)throw new w.ErrnoError(55);w.hashRemoveNode(f)}delete s.parent.contents[s.name],a.contents[u]=s,s.name=u,a.ctime=a.mtime=s.parent.ctime=s.parent.mtime=Date.now()},unlink(s,a){delete s.contents[a],s.ctime=s.mtime=Date.now()},rmdir(s,a){var u=w.lookupNode(s,a);for(var f in u.contents)throw new w.ErrnoError(55);delete s.contents[a],s.ctime=s.mtime=Date.now()},readdir(s){return[".","..",...Object.keys(s.contents)]},symlink(s,a,u){var f=ke.createNode(s,a,41471,0);return f.link=u,f},readlink(s){if(!w.isLink(s.mode))throw new w.ErrnoError(28);return s.link}},stream_ops:{read(s,a,u,f,g){var S=s.node.contents;if(g>=s.node.usedBytes)return 0;var T=Math.min(s.node.usedBytes-g,f);if(L(T>=0),T>8&&S.subarray)a.set(S.subarray(g,g+T),u);else for(var A=0;A<T;A++)a[u+A]=S[g+A];return T},write(s,a,u,f,g,S){if(L(!(a instanceof ArrayBuffer)),a.buffer===oe.buffer&&(S=!1),!f)return 0;var T=s.node;if(T.mtime=T.ctime=Date.now(),a.subarray&&(!T.contents||T.contents.subarray)){if(S)return L(g===0,"canOwn must imply no weird position inside the file"),T.contents=a.subarray(u,u+f),T.usedBytes=f,f;if(T.usedBytes===0&&g===0)return T.contents=a.slice(u,u+f),T.usedBytes=f,f;if(g+f<=T.usedBytes)return T.contents.set(a.subarray(u,u+f),g),f}if(ke.expandFileStorage(T,g+f),T.contents.subarray&&a.subarray)T.contents.set(a.subarray(u,u+f),g);else for(var A=0;A<f;A++)T.contents[g+A]=a[u+A];return T.usedBytes=Math.max(T.usedBytes,g+f),f},llseek(s,a,u){var f=a;if(u===1?f+=s.position:u===2&&w.isFile(s.node.mode)&&(f+=s.node.usedBytes),f<0)throw new w.ErrnoError(28);return f},mmap(s,a,u,f,g){if(!w.isFile(s.node.mode))throw new w.ErrnoError(43);var S,T,A=s.node.contents;if(!(g&2)&&A&&A.buffer===oe.buffer)T=!1,S=A.byteOffset;else{if(T=!0,S=_t(),!S)throw new w.ErrnoError(48);A&&((u>0||u+a<A.length)&&(A.subarray?A=A.subarray(u,u+a):A=Array.prototype.slice.call(A,u,u+a)),oe.set(A,S))}return{ptr:S,allocated:T}},msync(s,a,u,f,g){return ke.stream_ops.write(s,a,0,f,u,!1),0}}},Rt=async s=>{var a=await y(s);return L(a,`Loading data file "${s}" failed (no arrayBuffer).`),new Uint8Array(a)},jt=(...s)=>w.createDataFile(...s),Mt=s=>{for(var a=s;;){if(!N[s])return s;s=a+Math.random()}},Ye=[],Cn=(s,a,u,f)=>{typeof Browser<"u"&&Browser.init();var g=!1;return Ye.forEach(S=>{g||S.canHandle(a)&&(S.handle(s,a,u,f),g=!0)}),g},yt=(s,a,u,f,g,S,T,A,U,W)=>{var te=a?we.resolve(Y.join2(s,a)):s,le=Mt(`cp ${te}`);function ge(ue){function ye(qe){W==null||W(),A||jt(s,a,qe,f,g,U),S==null||S(),de(le)}Cn(ue,te,ye,()=>{T==null||T(),de(le)})||ye(ue)}ee(le),typeof u=="string"?Rt(u).then(ge,T):ge(u)},fn=s=>{var a={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},u=a[s];if(typeof u>"u")throw new Error(`Unknown file open mode: ${s}`);return u},Un=(s,a)=>{var u=0;return s&&(u|=365),a&&(u|=146),u},rn=s=>dt(Yl(s)),ci={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},w={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{constructor(a){super(k?rn(a):"");Pn(this,"name","ErrnoError");this.errno=a;for(var u in ci)if(ci[u]===a){this.code=u;break}}},FSStream:class{constructor(){Pn(this,"shared",{})}get object(){return this.node}set object(s){this.node=s}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(s){this.shared.flags=s}get position(){return this.shared.position}set position(s){this.shared.position=s}},FSNode:class{constructor(s,a,u,f){Pn(this,"node_ops",{});Pn(this,"stream_ops",{});Pn(this,"readMode",365);Pn(this,"writeMode",146);Pn(this,"mounted",null);s||(s=this),this.parent=s,this.mount=s.mount,this.id=w.nextInode++,this.name=a,this.mode=u,this.rdev=f,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(s){s?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(s){s?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return w.isDir(this.mode)}get isDevice(){return w.isChrdev(this.mode)}},lookupPath(s,a={}){if(!s)throw new w.ErrnoError(44);a.follow_mount??(a.follow_mount=!0),Y.isAbs(s)||(s=w.cwd()+"/"+s);e:for(var u=0;u<40;u++){for(var f=s.split("/").filter(W=>!!W),g=w.root,S="/",T=0;T<f.length;T++){var A=T===f.length-1;if(A&&a.parent)break;if(f[T]!=="."){if(f[T]===".."){if(S=Y.dirname(S),w.isRoot(g)){s=S+"/"+f.slice(T+1).join("/");continue e}else g=g.parent;continue}S=Y.join2(S,f[T]);try{g=w.lookupNode(g,f[T])}catch(W){if((W==null?void 0:W.errno)===44&&A&&a.noent_okay)return{path:S};throw W}if(w.isMountpoint(g)&&(!A||a.follow_mount)&&(g=g.mounted.root),w.isLink(g.mode)&&(!A||a.follow)){if(!g.node_ops.readlink)throw new w.ErrnoError(52);var U=g.node_ops.readlink(g);Y.isAbs(U)||(U=Y.dirname(S)+"/"+U),s=U+"/"+f.slice(T+1).join("/");continue e}}}return{path:S,node:g}}throw new w.ErrnoError(32)},getPath(s){for(var a;;){if(w.isRoot(s)){var u=s.mount.mountpoint;return a?u[u.length-1]!=="/"?`${u}/${a}`:u+a:u}a=a?`${s.name}/${a}`:s.name,s=s.parent}},hashName(s,a){for(var u=0,f=0;f<a.length;f++)u=(u<<5)-u+a.charCodeAt(f)|0;return(s+u>>>0)%w.nameTable.length},hashAddNode(s){var a=w.hashName(s.parent.id,s.name);s.name_next=w.nameTable[a],w.nameTable[a]=s},hashRemoveNode(s){var a=w.hashName(s.parent.id,s.name);if(w.nameTable[a]===s)w.nameTable[a]=s.name_next;else for(var u=w.nameTable[a];u;){if(u.name_next===s){u.name_next=s.name_next;break}u=u.name_next}},lookupNode(s,a){var u=w.mayLookup(s);if(u)throw new w.ErrnoError(u);for(var f=w.hashName(s.id,a),g=w.nameTable[f];g;g=g.name_next){var S=g.name;if(g.parent.id===s.id&&S===a)return g}return w.lookup(s,a)},createNode(s,a,u,f){L(typeof s=="object");var g=new w.FSNode(s,a,u,f);return w.hashAddNode(g),g},destroyNode(s){w.hashRemoveNode(s)},isRoot(s){return s===s.parent},isMountpoint(s){return!!s.mounted},isFile(s){return(s&61440)===32768},isDir(s){return(s&61440)===16384},isLink(s){return(s&61440)===40960},isChrdev(s){return(s&61440)===8192},isBlkdev(s){return(s&61440)===24576},isFIFO(s){return(s&61440)===4096},isSocket(s){return(s&49152)===49152},flagsToPermissionString(s){var a=["r","w","rw"][s&3];return s&512&&(a+="w"),a},nodePermissions(s,a){return w.ignorePermissions?0:a.includes("r")&&!(s.mode&292)||a.includes("w")&&!(s.mode&146)||a.includes("x")&&!(s.mode&73)?2:0},mayLookup(s){if(!w.isDir(s.mode))return 54;var a=w.nodePermissions(s,"x");return a||(s.node_ops.lookup?0:2)},mayCreate(s,a){if(!w.isDir(s.mode))return 54;try{var u=w.lookupNode(s,a);return 20}catch{}return w.nodePermissions(s,"wx")},mayDelete(s,a,u){var f;try{f=w.lookupNode(s,a)}catch(S){return S.errno}var g=w.nodePermissions(s,"wx");if(g)return g;if(u){if(!w.isDir(f.mode))return 54;if(w.isRoot(f)||w.getPath(f)===w.cwd())return 10}else if(w.isDir(f.mode))return 31;return 0},mayOpen(s,a){return s?w.isLink(s.mode)?32:w.isDir(s.mode)&&(w.flagsToPermissionString(a)!=="r"||a&576)?31:w.nodePermissions(s,w.flagsToPermissionString(a)):44},checkOpExists(s,a){if(!s)throw new w.ErrnoError(a);return s},MAX_OPEN_FDS:4096,nextfd(){for(var s=0;s<=w.MAX_OPEN_FDS;s++)if(!w.streams[s])return s;throw new w.ErrnoError(33)},getStreamChecked(s){var a=w.getStream(s);if(!a)throw new w.ErrnoError(8);return a},getStream:s=>w.streams[s],createStream(s,a=-1){return L(a>=-1),s=Object.assign(new w.FSStream,s),a==-1&&(a=w.nextfd()),s.fd=a,w.streams[a]=s,s},closeStream(s){w.streams[s]=null},dupStream(s,a=-1){var f,g;var u=w.createStream(s,a);return(g=(f=u.stream_ops)==null?void 0:f.dup)==null||g.call(f,u),u},doSetAttr(s,a,u){var f=s==null?void 0:s.stream_ops.setattr,g=f?s:a;f??(f=a.node_ops.setattr),w.checkOpExists(f,63),f(g,u)},chrdev_stream_ops:{open(s){var u,f;var a=w.getDevice(s.node.rdev);s.stream_ops=a.stream_ops,(f=(u=s.stream_ops).open)==null||f.call(u,s)},llseek(){throw new w.ErrnoError(70)}},major:s=>s>>8,minor:s=>s&255,makedev:(s,a)=>s<<8|a,registerDevice(s,a){w.devices[s]={stream_ops:a}},getDevice:s=>w.devices[s],getMounts(s){for(var a=[],u=[s];u.length;){var f=u.pop();a.push(f),u.push(...f.mounts)}return a},syncfs(s,a){typeof s=="function"&&(a=s,s=!1),w.syncFSRequests++,w.syncFSRequests>1&&P(`warning: ${w.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var u=w.getMounts(w.root.mount),f=0;function g(T){return L(w.syncFSRequests>0),w.syncFSRequests--,a(T)}function S(T){if(T)return S.errored?void 0:(S.errored=!0,g(T));++f>=u.length&&g(null)}u.forEach(T=>{if(!T.type.syncfs)return S(null);T.type.syncfs(T,s,S)})},mount(s,a,u){if(typeof s=="string")throw s;var f=u==="/",g=!u,S;if(f&&w.root)throw new w.ErrnoError(10);if(!f&&!g){var T=w.lookupPath(u,{follow_mount:!1});if(u=T.path,S=T.node,w.isMountpoint(S))throw new w.ErrnoError(10);if(!w.isDir(S.mode))throw new w.ErrnoError(54)}var A={type:s,opts:a,mountpoint:u,mounts:[]},U=s.mount(A);return U.mount=A,A.root=U,f?w.root=U:S&&(S.mounted=A,S.mount&&S.mount.mounts.push(A)),U},unmount(s){var a=w.lookupPath(s,{follow_mount:!1});if(!w.isMountpoint(a.node))throw new w.ErrnoError(28);var u=a.node,f=u.mounted,g=w.getMounts(f);Object.keys(w.nameTable).forEach(T=>{for(var A=w.nameTable[T];A;){var U=A.name_next;g.includes(A.mount)&&w.destroyNode(A),A=U}}),u.mounted=null;var S=u.mount.mounts.indexOf(f);L(S!==-1),u.mount.mounts.splice(S,1)},lookup(s,a){return s.node_ops.lookup(s,a)},mknod(s,a,u){var f=w.lookupPath(s,{parent:!0}),g=f.node,S=Y.basename(s);if(!S)throw new w.ErrnoError(28);if(S==="."||S==="..")throw new w.ErrnoError(20);var T=w.mayCreate(g,S);if(T)throw new w.ErrnoError(T);if(!g.node_ops.mknod)throw new w.ErrnoError(63);return g.node_ops.mknod(g,S,a,u)},statfs(s){return w.statfsNode(w.lookupPath(s,{follow:!0}).node)},statfsStream(s){return w.statfsNode(s.node)},statfsNode(s){var a={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:w.nextInode,ffree:w.nextInode-1,fsid:42,flags:2,namelen:255};return s.node_ops.statfs&&Object.assign(a,s.node_ops.statfs(s.mount.opts.root)),a},create(s,a=438){return a&=4095,a|=32768,w.mknod(s,a,0)},mkdir(s,a=511){return a&=1023,a|=16384,w.mknod(s,a,0)},mkdirTree(s,a){var u=s.split("/"),f="";for(var g of u)if(g){(f||Y.isAbs(s))&&(f+="/"),f+=g;try{w.mkdir(f,a)}catch(S){if(S.errno!=20)throw S}}},mkdev(s,a,u){return typeof u>"u"&&(u=a,a=438),a|=8192,w.mknod(s,a,u)},symlink(s,a){if(!we.resolve(s))throw new w.ErrnoError(44);var u=w.lookupPath(a,{parent:!0}),f=u.node;if(!f)throw new w.ErrnoError(44);var g=Y.basename(a),S=w.mayCreate(f,g);if(S)throw new w.ErrnoError(S);if(!f.node_ops.symlink)throw new w.ErrnoError(63);return f.node_ops.symlink(f,g,s)},rename(s,a){var u=Y.dirname(s),f=Y.dirname(a),g=Y.basename(s),S=Y.basename(a),T,A,U;if(T=w.lookupPath(s,{parent:!0}),A=T.node,T=w.lookupPath(a,{parent:!0}),U=T.node,!A||!U)throw new w.ErrnoError(44);if(A.mount!==U.mount)throw new w.ErrnoError(75);var W=w.lookupNode(A,g),te=we.relative(s,f);if(te.charAt(0)!==".")throw new w.ErrnoError(28);if(te=we.relative(a,u),te.charAt(0)!==".")throw new w.ErrnoError(55);var le;try{le=w.lookupNode(U,S)}catch{}if(W!==le){var ge=w.isDir(W.mode),ue=w.mayDelete(A,g,ge);if(ue)throw new w.ErrnoError(ue);if(ue=le?w.mayDelete(U,S,ge):w.mayCreate(U,S),ue)throw new w.ErrnoError(ue);if(!A.node_ops.rename)throw new w.ErrnoError(63);if(w.isMountpoint(W)||le&&w.isMountpoint(le))throw new w.ErrnoError(10);if(U!==A&&(ue=w.nodePermissions(A,"w"),ue))throw new w.ErrnoError(ue);w.hashRemoveNode(W);try{A.node_ops.rename(W,U,S),W.parent=U}catch(ye){throw ye}finally{w.hashAddNode(W)}}},rmdir(s){var a=w.lookupPath(s,{parent:!0}),u=a.node,f=Y.basename(s),g=w.lookupNode(u,f),S=w.mayDelete(u,f,!0);if(S)throw new w.ErrnoError(S);if(!u.node_ops.rmdir)throw new w.ErrnoError(63);if(w.isMountpoint(g))throw new w.ErrnoError(10);u.node_ops.rmdir(u,f),w.destroyNode(g)},readdir(s){var a=w.lookupPath(s,{follow:!0}),u=a.node,f=w.checkOpExists(u.node_ops.readdir,54);return f(u)},unlink(s){var a=w.lookupPath(s,{parent:!0}),u=a.node;if(!u)throw new w.ErrnoError(44);var f=Y.basename(s),g=w.lookupNode(u,f),S=w.mayDelete(u,f,!1);if(S)throw new w.ErrnoError(S);if(!u.node_ops.unlink)throw new w.ErrnoError(63);if(w.isMountpoint(g))throw new w.ErrnoError(10);u.node_ops.unlink(u,f),w.destroyNode(g)},readlink(s){var a=w.lookupPath(s),u=a.node;if(!u)throw new w.ErrnoError(44);if(!u.node_ops.readlink)throw new w.ErrnoError(28);return u.node_ops.readlink(u)},stat(s,a){var u=w.lookupPath(s,{follow:!a}),f=u.node,g=w.checkOpExists(f.node_ops.getattr,63);return g(f)},fstat(s){var a=w.getStreamChecked(s),u=a.node,f=a.stream_ops.getattr,g=f?a:u;return f??(f=u.node_ops.getattr),w.checkOpExists(f,63),f(g)},lstat(s){return w.stat(s,!0)},doChmod(s,a,u,f){w.doSetAttr(s,a,{mode:u&4095|a.mode&-4096,ctime:Date.now(),dontFollow:f})},chmod(s,a,u){var f;if(typeof s=="string"){var g=w.lookupPath(s,{follow:!u});f=g.node}else f=s;w.doChmod(null,f,a,u)},lchmod(s,a){w.chmod(s,a,!0)},fchmod(s,a){var u=w.getStreamChecked(s);w.doChmod(u,u.node,a,!1)},doChown(s,a,u){w.doSetAttr(s,a,{timestamp:Date.now(),dontFollow:u})},chown(s,a,u,f){var g;if(typeof s=="string"){var S=w.lookupPath(s,{follow:!f});g=S.node}else g=s;w.doChown(null,g,f)},lchown(s,a,u){w.chown(s,a,u,!0)},fchown(s,a,u){var f=w.getStreamChecked(s);w.doChown(f,f.node,!1)},doTruncate(s,a,u){if(w.isDir(a.mode))throw new w.ErrnoError(31);if(!w.isFile(a.mode))throw new w.ErrnoError(28);var f=w.nodePermissions(a,"w");if(f)throw new w.ErrnoError(f);w.doSetAttr(s,a,{size:u,timestamp:Date.now()})},truncate(s,a){if(a<0)throw new w.ErrnoError(28);var u;if(typeof s=="string"){var f=w.lookupPath(s,{follow:!0});u=f.node}else u=s;w.doTruncate(null,u,a)},ftruncate(s,a){var u=w.getStreamChecked(s);if(a<0||(u.flags&2097155)===0)throw new w.ErrnoError(28);w.doTruncate(u,u.node,a)},utime(s,a,u){var f=w.lookupPath(s,{follow:!0}),g=f.node,S=w.checkOpExists(g.node_ops.setattr,63);S(g,{atime:a,mtime:u})},open(s,a,u=438){if(s==="")throw new w.ErrnoError(44);a=typeof a=="string"?fn(a):a,a&64?u=u&4095|32768:u=0;var f,g;if(typeof s=="object")f=s;else{g=s.endsWith("/");var S=w.lookupPath(s,{follow:!(a&131072),noent_okay:!0});f=S.node,s=S.path}var T=!1;if(a&64)if(f){if(a&128)throw new w.ErrnoError(20)}else{if(g)throw new w.ErrnoError(31);f=w.mknod(s,u|511,0),T=!0}if(!f)throw new w.ErrnoError(44);if(w.isChrdev(f.mode)&&(a&=-513),a&65536&&!w.isDir(f.mode))throw new w.ErrnoError(54);if(!T){var A=w.mayOpen(f,a);if(A)throw new w.ErrnoError(A)}a&512&&!T&&w.truncate(f,0),a&=-131713;var U=w.createStream({node:f,path:w.getPath(f),flags:a,seekable:!0,position:0,stream_ops:f.stream_ops,ungotten:[],error:!1});return U.stream_ops.open&&U.stream_ops.open(U),T&&w.chmod(f,u&511),t.logReadFiles&&!(a&1)&&(s in w.readFiles||(w.readFiles[s]=1)),U},close(s){if(w.isClosed(s))throw new w.ErrnoError(8);s.getdents&&(s.getdents=null);try{s.stream_ops.close&&s.stream_ops.close(s)}catch(a){throw a}finally{w.closeStream(s.fd)}s.fd=null},isClosed(s){return s.fd===null},llseek(s,a,u){if(w.isClosed(s))throw new w.ErrnoError(8);if(!s.seekable||!s.stream_ops.llseek)throw new w.ErrnoError(70);if(u!=0&&u!=1&&u!=2)throw new w.ErrnoError(28);return s.position=s.stream_ops.llseek(s,a,u),s.ungotten=[],s.position},read(s,a,u,f,g){if(L(u>=0),f<0||g<0)throw new w.ErrnoError(28);if(w.isClosed(s))throw new w.ErrnoError(8);if((s.flags&2097155)===1)throw new w.ErrnoError(8);if(w.isDir(s.node.mode))throw new w.ErrnoError(31);if(!s.stream_ops.read)throw new w.ErrnoError(28);var S=typeof g<"u";if(!S)g=s.position;else if(!s.seekable)throw new w.ErrnoError(70);var T=s.stream_ops.read(s,a,u,f,g);return S||(s.position+=T),T},write(s,a,u,f,g,S){if(L(u>=0),f<0||g<0)throw new w.ErrnoError(28);if(w.isClosed(s))throw new w.ErrnoError(8);if((s.flags&2097155)===0)throw new w.ErrnoError(8);if(w.isDir(s.node.mode))throw new w.ErrnoError(31);if(!s.stream_ops.write)throw new w.ErrnoError(28);s.seekable&&s.flags&1024&&w.llseek(s,0,2);var T=typeof g<"u";if(!T)g=s.position;else if(!s.seekable)throw new w.ErrnoError(70);var A=s.stream_ops.write(s,a,u,f,g,S);return T||(s.position+=A),A},mmap(s,a,u,f,g){if((f&2)!==0&&(g&2)===0&&(s.flags&2097155)!==2)throw new w.ErrnoError(2);if((s.flags&2097155)===1)throw new w.ErrnoError(2);if(!s.stream_ops.mmap)throw new w.ErrnoError(43);if(!a)throw new w.ErrnoError(28);return s.stream_ops.mmap(s,a,u,f,g)},msync(s,a,u,f,g){return L(u>=0),s.stream_ops.msync?s.stream_ops.msync(s,a,u,f,g):0},ioctl(s,a,u){if(!s.stream_ops.ioctl)throw new w.ErrnoError(59);return s.stream_ops.ioctl(s,a,u)},readFile(s,a={}){if(a.flags=a.flags||0,a.encoding=a.encoding||"binary",a.encoding!=="utf8"&&a.encoding!=="binary")throw new Error(`Invalid encoding type "${a.encoding}"`);var u=w.open(s,a.flags),f=w.stat(s),g=f.size,S=new Uint8Array(g);return w.read(u,S,0,g,0),a.encoding==="utf8"&&(S=It(S)),w.close(u),S},writeFile(s,a,u={}){u.flags=u.flags||577;var f=w.open(s,u.flags,u.mode);if(typeof a=="string"&&(a=new Uint8Array(tt(a))),ArrayBuffer.isView(a))w.write(f,a,0,a.byteLength,void 0,u.canOwn);else throw new Error("Unsupported data type");w.close(f)},cwd:()=>w.currentPath,chdir(s){var a=w.lookupPath(s,{follow:!0});if(a.node===null)throw new w.ErrnoError(44);if(!w.isDir(a.node.mode))throw new w.ErrnoError(54);var u=w.nodePermissions(a.node,"x");if(u)throw new w.ErrnoError(u);w.currentPath=a.path},createDefaultDirectories(){w.mkdir("/tmp"),w.mkdir("/home"),w.mkdir("/home/web_user")},createDefaultDevices(){w.mkdir("/dev"),w.registerDevice(w.makedev(1,3),{read:()=>0,write:(f,g,S,T,A)=>T,llseek:()=>0}),w.mkdev("/dev/null",w.makedev(1,3)),He.register(w.makedev(5,0),He.default_tty_ops),He.register(w.makedev(6,0),He.default_tty1_ops),w.mkdev("/dev/tty",w.makedev(5,0)),w.mkdev("/dev/tty1",w.makedev(6,0));var s=new Uint8Array(1024),a=0,u=()=>(a===0&&(j(s),a=s.byteLength),s[--a]);w.createDevice("/dev","random",u),w.createDevice("/dev","urandom",u),w.mkdir("/dev/shm"),w.mkdir("/dev/shm/tmp")},createSpecialDirectories(){w.mkdir("/proc");var s=w.mkdir("/proc/self");w.mkdir("/proc/self/fd"),w.mount({mount(){var a=w.createNode(s,"fd",16895,73);return a.stream_ops={llseek:ke.stream_ops.llseek},a.node_ops={lookup(u,f){var g=+f,S=w.getStreamChecked(g),T={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>S.path},id:g+1};return T.parent=T,T},readdir(){return Array.from(w.streams.entries()).filter(([u,f])=>f).map(([u,f])=>u.toString())}},a}},{},"/proc/self/fd")},createStandardStreams(s,a,u){s?w.createDevice("/dev","stdin",s):w.symlink("/dev/tty","/dev/stdin"),a?w.createDevice("/dev","stdout",null,a):w.symlink("/dev/tty","/dev/stdout"),u?w.createDevice("/dev","stderr",null,u):w.symlink("/dev/tty1","/dev/stderr");var f=w.open("/dev/stdin",0),g=w.open("/dev/stdout",1),S=w.open("/dev/stderr",1);L(f.fd===0,`invalid handle for stdin (${f.fd})`),L(g.fd===1,`invalid handle for stdout (${g.fd})`),L(S.fd===2,`invalid handle for stderr (${S.fd})`)},staticInit(){w.nameTable=new Array(4096),w.mount(ke,{},"/"),w.createDefaultDirectories(),w.createDefaultDevices(),w.createSpecialDirectories(),w.filesystems={MEMFS:ke}},init(s,a,u){L(!w.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),w.initialized=!0,s??(s=t.stdin),a??(a=t.stdout),u??(u=t.stderr),w.createStandardStreams(s,a,u)},quit(){w.initialized=!1,sa(0);for(var s of w.streams)s&&w.close(s)},findObject(s,a){var u=w.analyzePath(s,a);return u.exists?u.object:null},analyzePath(s,a){try{var u=w.lookupPath(s,{follow:!a});s=u.path}catch{}var f={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var u=w.lookupPath(s,{parent:!0});f.parentExists=!0,f.parentPath=u.path,f.parentObject=u.node,f.name=Y.basename(s),u=w.lookupPath(s,{follow:!a}),f.exists=!0,f.path=u.path,f.object=u.node,f.name=u.node.name,f.isRoot=u.path==="/"}catch(g){f.error=g.errno}return f},createPath(s,a,u,f){s=typeof s=="string"?s:w.getPath(s);for(var g=a.split("/").reverse();g.length;){var S=g.pop();if(S){var T=Y.join2(s,S);try{w.mkdir(T)}catch(A){if(A.errno!=20)throw A}s=T}}return T},createFile(s,a,u,f,g){var S=Y.join2(typeof s=="string"?s:w.getPath(s),a),T=Un(f,g);return w.create(S,T)},createDataFile(s,a,u,f,g,S){var T=a;s&&(s=typeof s=="string"?s:w.getPath(s),T=a?Y.join2(s,a):s);var A=Un(f,g),U=w.create(T,A);if(u){if(typeof u=="string"){for(var W=new Array(u.length),te=0,le=u.length;te<le;++te)W[te]=u.charCodeAt(te);u=W}w.chmod(U,A|146);var ge=w.open(U,577);w.write(ge,u,0,u.length,0,S),w.close(ge),w.chmod(U,A)}},createDevice(s,a,u,f){var A;var g=Y.join2(typeof s=="string"?s:w.getPath(s),a),S=Un(!!u,!!f);(A=w.createDevice).major??(A.major=64);var T=w.makedev(w.createDevice.major++,0);return w.registerDevice(T,{open(U){U.seekable=!1},close(U){var W;(W=f==null?void 0:f.buffer)!=null&&W.length&&f(10)},read(U,W,te,le,ge){for(var ue=0,ye=0;ye<le;ye++){var qe;try{qe=u()}catch{throw new w.ErrnoError(29)}if(qe===void 0&&ue===0)throw new w.ErrnoError(6);if(qe==null)break;ue++,W[te+ye]=qe}return ue&&(U.node.atime=Date.now()),ue},write(U,W,te,le,ge){for(var ue=0;ue<le;ue++)try{f(W[te+ue])}catch{throw new w.ErrnoError(29)}return le&&(U.node.mtime=U.node.ctime=Date.now()),ue}}),w.mkdev(g,S,T)},forceLoadFile(s){if(s.isDevice||s.isFolder||s.link||s.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{s.contents=M(s.url),s.usedBytes=s.contents.length}catch{throw new w.ErrnoError(29)}},createLazyFile(s,a,u,f,g){class S{constructor(){Pn(this,"lengthKnown",!1);Pn(this,"chunks",[])}get(ue){if(!(ue>this.length-1||ue<0)){var ye=ue%this.chunkSize,qe=ue/this.chunkSize|0;return this.getter(qe)[ye]}}setDataGetter(ue){this.getter=ue}cacheLength(){var ue=new XMLHttpRequest;if(ue.open("HEAD",u,!1),ue.send(null),!(ue.status>=200&&ue.status<300||ue.status===304))throw new Error("Couldn't load "+u+". Status: "+ue.status);var ye=Number(ue.getResponseHeader("Content-length")),qe,mt=(qe=ue.getResponseHeader("Accept-Ranges"))&&qe==="bytes",lt=(qe=ue.getResponseHeader("Content-Encoding"))&&qe==="gzip",Dt=1024*1024;mt||(Dt=ye);var xt=(Ht,on)=>{if(Ht>on)throw new Error("invalid range ("+Ht+", "+on+") or no bytes requested!");if(on>ye-1)throw new Error("only "+ye+" bytes available! programmer error!");var Pt=new XMLHttpRequest;if(Pt.open("GET",u,!1),ye!==Dt&&Pt.setRequestHeader("Range","bytes="+Ht+"-"+on),Pt.responseType="arraybuffer",Pt.overrideMimeType&&Pt.overrideMimeType("text/plain; charset=x-user-defined"),Pt.send(null),!(Pt.status>=200&&Pt.status<300||Pt.status===304))throw new Error("Couldn't load "+u+". Status: "+Pt.status);return Pt.response!==void 0?new Uint8Array(Pt.response||[]):tt(Pt.responseText||"")},Kt=this;Kt.setDataGetter(Ht=>{var on=Ht*Dt,Pt=(Ht+1)*Dt-1;if(Pt=Math.min(Pt,ye-1),typeof Kt.chunks[Ht]>"u"&&(Kt.chunks[Ht]=xt(on,Pt)),typeof Kt.chunks[Ht]>"u")throw new Error("doXHR failed!");return Kt.chunks[Ht]}),(lt||!ye)&&(Dt=ye=1,ye=this.getter(0).length,Dt=ye,F("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=ye,this._chunkSize=Dt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!r)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var T=new S,A={isDevice:!1,contents:T}}else var A={isDevice:!1,url:u};var U=w.createFile(s,a,A,f,g);A.contents?U.contents=A.contents:A.url&&(U.contents=null,U.url=A.url),Object.defineProperties(U,{usedBytes:{get:function(){return this.contents.length}}});var W={},te=Object.keys(U.stream_ops);te.forEach(ge=>{var ue=U.stream_ops[ge];W[ge]=(...ye)=>(w.forceLoadFile(U),ue(...ye))});function le(ge,ue,ye,qe,mt){var lt=ge.node.contents;if(mt>=lt.length)return 0;var Dt=Math.min(lt.length-mt,qe);if(L(Dt>=0),lt.slice)for(var xt=0;xt<Dt;xt++)ue[ye+xt]=lt[mt+xt];else for(var xt=0;xt<Dt;xt++)ue[ye+xt]=lt.get(mt+xt);return Dt}return W.read=(ge,ue,ye,qe,mt)=>(w.forceLoadFile(U),le(ge,ue,ye,qe,mt)),W.mmap=(ge,ue,ye,qe,mt)=>{w.forceLoadFile(U);var lt=_t();if(!lt)throw new w.ErrnoError(48);return le(ge,oe,lt,ue,ye),{ptr:lt,allocated:!0}},U.stream_ops=W,U},absolutePath(){fe("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){fe("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){fe("FS.createLink has been removed; use FS.symlink instead")},joinPath(){fe("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){fe("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){fe("FS.standardizePath has been removed; use PATH.normalize instead")}},gt={DEFAULT_POLLMASK:5,calculateAt(s,a,u){if(Y.isAbs(a))return a;var f;if(s===-100)f=w.cwd();else{var g=gt.getStreamFromFD(s);f=g.path}if(a.length==0){if(!u)throw new w.ErrnoError(44);return f}return f+"/"+a},writeStat(s,a){pe[s>>2]=a.dev,pe[s+4>>2]=a.mode,Me[s+8>>2]=a.nlink,pe[s+12>>2]=a.uid,pe[s+16>>2]=a.gid,pe[s+20>>2]=a.rdev,X[s+24>>3]=BigInt(a.size),pe[s+32>>2]=4096,pe[s+36>>2]=a.blocks;var u=a.atime.getTime(),f=a.mtime.getTime(),g=a.ctime.getTime();return X[s+40>>3]=BigInt(Math.floor(u/1e3)),Me[s+48>>2]=u%1e3*1e3*1e3,X[s+56>>3]=BigInt(Math.floor(f/1e3)),Me[s+64>>2]=f%1e3*1e3*1e3,X[s+72>>3]=BigInt(Math.floor(g/1e3)),Me[s+80>>2]=g%1e3*1e3*1e3,X[s+88>>3]=BigInt(a.ino),0},writeStatFs(s,a){pe[s+4>>2]=a.bsize,pe[s+40>>2]=a.bsize,pe[s+8>>2]=a.blocks,pe[s+12>>2]=a.bfree,pe[s+16>>2]=a.bavail,pe[s+20>>2]=a.files,pe[s+24>>2]=a.ffree,pe[s+28>>2]=a.fsid,pe[s+44>>2]=a.flags,pe[s+36>>2]=a.namelen},doMsync(s,a,u,f,g){if(!w.isFile(a.node.mode))throw new w.ErrnoError(43);if(f&2)return 0;var S=ve.slice(s,s+u);w.msync(a,S,g,u,f)},getStreamFromFD(s){var a=w.getStreamChecked(s);return a},varargs:void 0,getStr(s){var a=dt(s);return a}};function wi(s,a,u){try{var f=gt.getStreamFromFD(s);if(L(!u),f.fd===a)return-28;if(a<0||a>=w.MAX_OPEN_FDS)return-8;var g=w.getStream(a);return g&&w.close(g),w.dupStream(f,a).fd}catch(S){if(typeof w>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}var Yt=()=>{L(gt.varargs!=null);var s=pe[+gt.varargs>>2];return gt.varargs+=4,s},sn=Yt;function On(s,a,u){gt.varargs=u;try{var f=gt.getStreamFromFD(s);switch(a){case 0:{var g=Yt();if(g<0)return-28;for(;w.streams[g];)g++;var S;return S=w.dupStream(f,g),S.fd}case 1:case 2:return 0;case 3:return f.flags;case 4:{var g=Yt();return f.flags|=g,0}case 12:{var g=sn(),T=0;return Ue[g+T>>1]=2,0}case 13:case 14:return 0}return-28}catch(A){if(typeof w>"u"||A.name!=="ErrnoError")throw A;return-A.errno}}function _s(s,a){try{return gt.writeStat(a,w.fstat(s))}catch(u){if(typeof w>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function nf(s,a,u){gt.varargs=u;try{var f=gt.getStreamFromFD(s);switch(a){case 21509:return f.tty?0:-59;case 21505:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcgets){var g=f.tty.ops.ioctl_tcgets(f),S=sn();pe[S>>2]=g.c_iflag||0,pe[S+4>>2]=g.c_oflag||0,pe[S+8>>2]=g.c_cflag||0,pe[S+12>>2]=g.c_lflag||0;for(var T=0;T<32;T++)oe[S+T+17]=g.c_cc[T]||0;return 0}return 0}case 21510:case 21511:case 21512:return f.tty?0:-59;case 21506:case 21507:case 21508:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcsets){for(var S=sn(),A=pe[S>>2],U=pe[S+4>>2],W=pe[S+8>>2],te=pe[S+12>>2],le=[],T=0;T<32;T++)le.push(oe[S+T+17]);return f.tty.ops.ioctl_tcsets(f.tty,a,{c_iflag:A,c_oflag:U,c_cflag:W,c_lflag:te,c_cc:le})}return 0}case 21519:{if(!f.tty)return-59;var S=sn();return pe[S>>2]=0,0}case 21520:return f.tty?-28:-59;case 21531:{var S=sn();return w.ioctl(f,a,S)}case 21523:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tiocgwinsz){var ge=f.tty.ops.ioctl_tiocgwinsz(f.tty),S=sn();Ue[S>>1]=ge[0],Ue[S+2>>1]=ge[1]}return 0}case 21524:return f.tty?0:-59;case 21515:return f.tty?0:-59;default:return-28}}catch(ue){if(typeof w>"u"||ue.name!=="ErrnoError")throw ue;return-ue.errno}}function rf(s,a){try{return s=gt.getStr(s),gt.writeStat(a,w.lstat(s))}catch(u){if(typeof w>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function sf(s,a,u,f){try{a=gt.getStr(a);var g=f&256,S=f&4096;return f=f&-6401,L(!f,`unknown flags in __syscall_newfstatat: ${f}`),a=gt.calculateAt(s,a,S),gt.writeStat(u,g?w.lstat(a):w.stat(a))}catch(T){if(typeof w>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function of(s,a,u,f){gt.varargs=f;try{a=gt.getStr(a),a=gt.calculateAt(s,a);var g=f?Yt():0;return w.open(a,u,g).fd}catch(S){if(typeof w>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}function af(s,a){try{return s=gt.getStr(s),gt.writeStat(a,w.stat(s))}catch(u){if(typeof w>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}var cf=()=>fe("native code called abort()"),Bt=s=>{for(var a="";;){var u=ve[s++];if(!u)return a;a+=String.fromCharCode(u)}},Ki={},Ti={},gs={},kr=class extends Error{constructor(a){super(a),this.name="BindingError"}},vt=s=>{throw new kr(s)};function lf(s,a,u={}){var f=a.name;if(s||vt(`type "${f}" must have a positive integer typeid pointer`),Ti.hasOwnProperty(s)){if(u.ignoreDuplicateRegistrations)return;vt(`Cannot register type '${f}' twice`)}if(Ti[s]=a,delete gs[s],Ki.hasOwnProperty(s)){var g=Ki[s];delete Ki[s],g.forEach(S=>S())}}function xn(s,a,u={}){if(a.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return lf(s,a,u)}var yl=(s,a,u)=>{switch(a){case 1:return u?f=>oe[f]:f=>ve[f];case 2:return u?f=>Ue[f>>1]:f=>be[f>>1];case 4:return u?f=>pe[f>>2]:f=>Me[f>>2];case 8:return u?f=>X[f>>3]:f=>he[f>>3];default:throw new TypeError(`invalid integer width (${a}): ${s}`)}},Ai=s=>{if(s===null)return"null";var a=typeof s;return a==="object"||a==="array"||a==="function"?s.toString():""+s},xl=(s,a,u,f)=>{if(a<u||a>f)throw new TypeError(`Passing a number "${Ai(a)}" from JS side to C/C++ side to an argument of type "${s}", which is outside the valid range [${u}, ${f}]!`)},uf=(s,a,u,f,g)=>{a=Bt(a);const S=f===0n;let T=A=>A;if(S){const A=u*8;T=U=>BigInt.asUintN(A,U),g=T(g)}xn(s,{name:a,fromWireType:T,toWireType:(A,U)=>{if(typeof U=="number")U=BigInt(U);else if(typeof U!="bigint")throw new TypeError(`Cannot convert "${Ai(U)}" to ${this.name}`);return xl(a,U,f,g),U},argPackAdvance:kn,readValueFromPointer:yl(a,u,!S),destructorFunction:null})},kn=8,hf=(s,a,u,f)=>{a=Bt(a),xn(s,{name:a,fromWireType:function(g){return!!g},toWireType:function(g,S){return S?u:f},argPackAdvance:kn,readValueFromPointer:function(g){return this.fromWireType(ve[g])},destructorFunction:null})},df=s=>({count:s.count,deleteScheduled:s.deleteScheduled,preservePointerOnDelete:s.preservePointerOnDelete,ptr:s.ptr,ptrType:s.ptrType,smartPtr:s.smartPtr,smartPtrType:s.smartPtrType}),qo=s=>{function a(u){return u.$$.ptrType.registeredClass.name}vt(a(s)+" instance already deleted")},Zo=!1,Sl=s=>{},ff=s=>{s.smartPtr?s.smartPtrType.rawDestructor(s.smartPtr):s.ptrType.registeredClass.rawDestructor(s.ptr)},Ml=s=>{s.count.value-=1;var a=s.count.value===0;a&&ff(s)},El=(s,a,u)=>{if(a===u)return s;if(u.baseClass===void 0)return null;var f=El(s,a,u.baseClass);return f===null?null:u.downcast(f)},bl={},pf={},mf=(s,a)=>{for(a===void 0&&vt("ptr should not be undefined");s.baseClass;)a=s.upcast(a),s=s.baseClass;return a},_f=(s,a)=>(a=mf(s,a),pf[a]),gf=class extends Error{constructor(a){super(a),this.name="InternalError"}},vs=s=>{throw new gf(s)},ys=(s,a)=>{(!a.ptrType||!a.ptr)&&vs("makeClassHandle requires ptr and ptrType");var u=!!a.smartPtrType,f=!!a.smartPtr;return u!==f&&vs("Both smartPtrType and smartPtr must be specified"),a.count={value:1},Br(Object.create(s,{$$:{value:a,writable:!0}}))};function wl(s){var a=this.getPointee(s);if(!a)return this.destructor(s),null;var u=_f(this.registeredClass,a);if(u!==void 0){if(u.$$.count.value===0)return u.$$.ptr=a,u.$$.smartPtr=s,u.clone();var f=u.clone();return this.destructor(s),f}function g(){return this.isSmartPointer?ys(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:a,smartPtrType:this,smartPtr:s}):ys(this.registeredClass.instancePrototype,{ptrType:this,ptr:s})}var S=this.registeredClass.getActualType(a),T=bl[S];if(!T)return g.call(this);var A;this.isConst?A=T.constPointerType:A=T.pointerType;var U=El(a,this.registeredClass,A.registeredClass);return U===null?g.call(this):this.isSmartPointer?ys(A.registeredClass.instancePrototype,{ptrType:A,ptr:U,smartPtrType:this,smartPtr:s}):ys(A.registeredClass.instancePrototype,{ptrType:A,ptr:U})}var Br=s=>typeof FinalizationRegistry>"u"?(Br=a=>a,s):(Zo=new FinalizationRegistry(a=>{console.warn(a.leakWarning),Ml(a.$$)}),Br=a=>{var u=a.$$,f=!!u.smartPtr;if(f){var g={$$:u},S=u.ptrType.registeredClass,T=new Error(`Embind found a leaked C++ instance ${S.name} <${_e(u.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(T,wl),g.leakWarning=T.stack.replace(/^Error: /,""),Zo.register(a,g,a)}return a},Sl=a=>Zo.unregister(a),Br(s)),vf=()=>{let s=xs.prototype;Object.assign(s,{isAliasOf(u){if(!(this instanceof xs)||!(u instanceof xs))return!1;var f=this.$$.ptrType.registeredClass,g=this.$$.ptr;u.$$=u.$$;for(var S=u.$$.ptrType.registeredClass,T=u.$$.ptr;f.baseClass;)g=f.upcast(g),f=f.baseClass;for(;S.baseClass;)T=S.upcast(T),S=S.baseClass;return f===S&&g===T},clone(){if(this.$$.ptr||qo(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var u=Br(Object.create(Object.getPrototypeOf(this),{$$:{value:df(this.$$)}}));return u.$$.count.value+=1,u.$$.deleteScheduled=!1,u},delete(){this.$$.ptr||qo(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vt("Object already scheduled for deletion"),Sl(this),Ml(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||qo(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const a=Symbol.dispose;a&&(s[a]=s.delete)};function xs(){}var Ss=(s,a)=>Object.defineProperty(a,"name",{value:s}),Ko=(s,a,u)=>{if(s[a].overloadTable===void 0){var f=s[a];s[a]=function(...g){return s[a].overloadTable.hasOwnProperty(g.length)||vt(`Function '${u}' called with an invalid number of arguments (${g.length}) - expects one of (${s[a].overloadTable})!`),s[a].overloadTable[g.length].apply(this,g)},s[a].overloadTable=[],s[a].overloadTable[f.argCount]=f}},Jo=(s,a,u)=>{t.hasOwnProperty(s)?((u===void 0||t[s].overloadTable!==void 0&&t[s].overloadTable[u]!==void 0)&&vt(`Cannot register public name '${s}' twice`),Ko(t,s,s),t[s].overloadTable.hasOwnProperty(u)&&vt(`Cannot register multiple overloads of a function with the same number of arguments (${u})!`),t[s].overloadTable[u]=a):(t[s]=a,t[s].argCount=u)},yf=48,xf=57,Sf=s=>{L(typeof s=="string"),s=s.replace(/[^a-zA-Z0-9_]/g,"$");var a=s.charCodeAt(0);return a>=yf&&a<=xf?`_${s}`:s};function Mf(s,a,u,f,g,S,T,A){this.name=s,this.constructor=a,this.instancePrototype=u,this.rawDestructor=f,this.baseClass=g,this.getActualType=S,this.upcast=T,this.downcast=A,this.pureVirtualFunctions=[]}var Ms=(s,a,u)=>{for(;a!==u;)a.upcast||vt(`Expected null or instance of ${u.name}, got an instance of ${a.name}`),s=a.upcast(s),a=a.baseClass;return s};function Ef(s,a){if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),0;a.$$||vt(`Cannot pass "${Ai(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`);var u=a.$$.ptrType.registeredClass,f=Ms(a.$$.ptr,u,this.registeredClass);return f}function bf(s,a){var u;if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),this.isSmartPointer?(u=this.rawConstructor(),s!==null&&s.push(this.rawDestructor,u),u):0;(!a||!a.$$)&&vt(`Cannot pass "${Ai(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&a.$$.ptrType.isConst&&vt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);var f=a.$$.ptrType.registeredClass;if(u=Ms(a.$$.ptr,f,this.registeredClass),this.isSmartPointer)switch(a.$$.smartPtr===void 0&&vt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:a.$$.smartPtrType===this?u=a.$$.smartPtr:vt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:u=a.$$.smartPtr;break;case 2:if(a.$$.smartPtrType===this)u=a.$$.smartPtr;else{var g=a.clone();u=this.rawShare(u,zt.toHandle(()=>g.delete())),s!==null&&s.push(this.rawDestructor,u)}break;default:vt("Unsupporting sharing policy")}return u}function wf(s,a){if(a===null)return this.isReference&&vt(`null is not a valid ${this.name}`),0;a.$$||vt(`Cannot pass "${Ai(a)}" as a ${this.name}`),a.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`),a.$$.ptrType.isConst&&vt(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);var u=a.$$.ptrType.registeredClass,f=Ms(a.$$.ptr,u,this.registeredClass);return f}function Es(s){return this.fromWireType(Me[s>>2])}var Tf=()=>{Object.assign(bs.prototype,{getPointee(s){return this.rawGetPointee&&(s=this.rawGetPointee(s)),s},destructor(s){var a;(a=this.rawDestructor)==null||a.call(this,s)},argPackAdvance:kn,readValueFromPointer:Es,fromWireType:wl})};function bs(s,a,u,f,g,S,T,A,U,W,te){this.name=s,this.registeredClass=a,this.isReference=u,this.isConst=f,this.isSmartPointer=g,this.pointeeType=S,this.sharingPolicy=T,this.rawGetPointee=A,this.rawConstructor=U,this.rawShare=W,this.rawDestructor=te,!g&&a.baseClass===void 0?f?(this.toWireType=Ef,this.destructorFunction=null):(this.toWireType=wf,this.destructorFunction=null):this.toWireType=bf}var Tl=(s,a,u)=>{t.hasOwnProperty(s)||vs("Replacing nonexistent public symbol"),t[s].overloadTable!==void 0&&u!==void 0?t[s].overloadTable[u]=a:(t[s]=a,t[s].argCount=u)},Al=[],ws,Se=s=>{var a=Al[s];return a||(Al[s]=a=ws.get(s)),L(ws.get(s)==a,"JavaScript-side Wasm function table mirror is out of date!"),a},Bn=(s,a,u=!1)=>{L(!u,"Async bindings are only supported with JSPI."),s=Bt(s);function f(){var S=Se(a);return S}var g=f();return typeof g!="function"&&vt(`unknown function pointer with signature ${s}: ${a}`),g};class Af extends Error{}var Cl=s=>{var a=jl(s),u=Bt(a);return Hn(a),u},Ci=(s,a)=>{var u=[],f={};function g(S){if(!f[S]&&!Ti[S]){if(gs[S]){gs[S].forEach(g);return}u.push(S),f[S]=!0}}throw a.forEach(g),new Af(`${s}: `+u.map(Cl).join([", "]))},Rn=(s,a,u)=>{s.forEach(A=>gs[A]=a);function f(A){var U=u(A);U.length!==s.length&&vs("Mismatched type converter count");for(var W=0;W<s.length;++W)xn(s[W],U[W])}var g=new Array(a.length),S=[],T=0;a.forEach((A,U)=>{Ti.hasOwnProperty(A)?g[U]=Ti[A]:(S.push(A),Ki.hasOwnProperty(A)||(Ki[A]=[]),Ki[A].push(()=>{g[U]=Ti[A],++T,T===S.length&&f(g)}))}),S.length===0&&f(g)},Cf=(s,a,u,f,g,S,T,A,U,W,te,le,ge)=>{te=Bt(te),S=Bn(g,S),A&&(A=Bn(T,A)),W&&(W=Bn(U,W)),ge=Bn(le,ge);var ue=Sf(te);Jo(ue,function(){Ci(`Cannot construct ${te} due to unbound types`,[f])}),Rn([s,a,u],f?[f]:[],ye=>{var Pt;ye=ye[0];var qe,mt;f?(qe=ye.registeredClass,mt=qe.instancePrototype):mt=xs.prototype;var lt=Ss(te,function(...li){if(Object.getPrototypeOf(this)!==Dt)throw new kr(`Use 'new' to construct ${te}`);if(xt.constructor_body===void 0)throw new kr(`${te} has no accessible constructor`);var Is=xt.constructor_body[li.length];if(Is===void 0)throw new kr(`Tried to invoke ctor of ${te} with invalid number of parameters (${li.length}) - expected (${Object.keys(xt.constructor_body).toString()}) parameters instead!`);return Is.apply(this,li)}),Dt=Object.create(mt,{constructor:{value:lt}});lt.prototype=Dt;var xt=new Mf(te,lt,Dt,ge,qe,S,A,W);xt.baseClass&&((Pt=xt.baseClass).__derivedClasses??(Pt.__derivedClasses=[]),xt.baseClass.__derivedClasses.push(xt));var Kt=new bs(te,xt,!0,!1,!1),Ht=new bs(te+"*",xt,!1,!1,!1),on=new bs(te+" const*",xt,!1,!0,!1);return bl[s]={pointerType:Ht,constPointerType:on},Tl(ue,lt),[Kt,Ht,on]})},Qo=s=>{for(;s.length;){var a=s.pop(),u=s.pop();u(a)}};function Rl(s){for(var a=1;a<s.length;++a)if(s[a]!==null&&s[a].destructorFunction===void 0)return!0;return!1}function Rf(s,a,u,f,g){if(s<a||s>u){var S=a==u?a:`${a} to ${u}`;g(`function ${f} called with ${s} arguments, expected ${S}`)}}function Pf(s,a,u,f){var g=Rl(s),S=s.length-2,T=[],A=["fn"];a&&A.push("thisWired");for(var U=0;U<S;++U)T.push(`arg${U}`),A.push(`arg${U}Wired`);T=T.join(","),A=A.join(",");var W=`return function (${T}) {
`;W+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,g&&(W+=`var destructors = [];
`);var te=g?"destructors":"null",le=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];a&&(W+=`var thisWired = classParam['toWireType'](${te}, this);
`);for(var U=0;U<S;++U)W+=`var arg${U}Wired = argType${U}['toWireType'](${te}, arg${U});
`,le.push(`argType${U}`);if(W+=(u||f?"var rv = ":"")+`invoker(${A});
`,g)W+=`runDestructors(destructors);
`;else for(var U=a?1:2;U<s.length;++U){var ge=U===1?"thisWired":"arg"+(U-2)+"Wired";s[U].destructorFunction!==null&&(W+=`${ge}_dtor(${ge});
`,le.push(`${ge}_dtor`))}return u&&(W+=`var ret = retType['fromWireType'](rv);
return ret;
`),W+=`}
`,le.push("checkArgCount","minArgs","maxArgs"),W=`if (arguments.length !== ${le.length}){ throw new Error(humanName + "Expected ${le.length} closure arguments " + arguments.length + " given."); }
${W}`,[le,W]}function Df(s){for(var a=s.length-2,u=s.length-1;u>=2&&s[u].optional;--u)a--;return a}function Ts(s,a,u,f,g,S){var T=a.length;T<2&&vt("argTypes array size mismatch! Must at least get return value and 'this' types!"),L(!S,"Async bindings are only supported with JSPI.");for(var A=a[1]!==null&&u!==null,U=Rl(a),W=a[0].name!=="void",te=T-2,le=Df(a),ge=[s,vt,f,g,Qo,a[0],a[1]],ue=0;ue<T-2;++ue)ge.push(a[ue+2]);if(!U)for(var ue=A?1:2;ue<a.length;++ue)a[ue].destructorFunction!==null&&ge.push(a[ue].destructorFunction);ge.push(Rf,le,te);let[ye,qe]=Pf(a,A,W,S);var mt=new Function(...ye,qe)(...ge);return Ss(s,mt)}var As=(s,a)=>{for(var u=[],f=0;f<s;f++)u.push(Me[a+f*4>>2]);return u},ea=s=>{s=s.trim();const a=s.indexOf("(");return a===-1?s:(L(s.endsWith(")"),"Parentheses for argument names should match."),s.slice(0,a))},Lf=(s,a,u,f,g,S,T,A,U)=>{var W=As(u,f);a=Bt(a),a=ea(a),S=Bn(g,S,A),Rn([],[s],te=>{te=te[0];var le=`${te.name}.${a}`;function ge(){Ci(`Cannot call ${le} due to unbound types`,W)}a.startsWith("@@")&&(a=Symbol[a.substring(2)]);var ue=te.registeredClass.constructor;return ue[a]===void 0?(ge.argCount=u-1,ue[a]=ge):(Ko(ue,a,le),ue[a].overloadTable[u-1]=ge),Rn([],W,ye=>{var qe=[ye[0],null].concat(ye.slice(1)),mt=Ts(le,qe,null,S,T,A);if(ue[a].overloadTable===void 0?(mt.argCount=u-1,ue[a]=mt):ue[a].overloadTable[u-1]=mt,te.registeredClass.__derivedClasses)for(const lt of te.registeredClass.__derivedClasses)lt.constructor.hasOwnProperty(a)||(lt.constructor[a]=mt);return[]}),[]})},If=(s,a,u,f,g,S)=>{L(a>0);var T=As(a,u);g=Bn(f,g),Rn([],[s],A=>{A=A[0];var U=`constructor ${A.name}`;if(A.registeredClass.constructor_body===void 0&&(A.registeredClass.constructor_body=[]),A.registeredClass.constructor_body[a-1]!==void 0)throw new kr(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${A.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return A.registeredClass.constructor_body[a-1]=()=>{Ci(`Cannot construct ${A.name} due to unbound types`,T)},Rn([],T,W=>(W.splice(1,0,null),A.registeredClass.constructor_body[a-1]=Ts(U,W,null,g,S),[])),[]})},Nf=(s,a,u,f,g,S,T,A,U,W)=>{var te=As(u,f);a=Bt(a),a=ea(a),S=Bn(g,S,U),Rn([],[s],le=>{le=le[0];var ge=`${le.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]),A&&le.registeredClass.pureVirtualFunctions.push(a);function ue(){Ci(`Cannot call ${ge} due to unbound types`,te)}var ye=le.registeredClass.instancePrototype,qe=ye[a];return qe===void 0||qe.overloadTable===void 0&&qe.className!==le.name&&qe.argCount===u-2?(ue.argCount=u-2,ue.className=le.name,ye[a]=ue):(Ko(ye,a,ge),ye[a].overloadTable[u-2]=ue),Rn([],te,mt=>{var lt=Ts(ge,mt,le,S,T,U);return ye[a].overloadTable===void 0?(lt.argCount=u-2,ye[a]=lt):ye[a].overloadTable[u-2]=lt,[]}),[]})},Pl=(s,a,u)=>(s instanceof Object||vt(`${u} with invalid "this": ${s}`),s instanceof a.registeredClass.constructor||vt(`${u} incompatible with "this" of type ${s.constructor.name}`),s.$$.ptr||vt(`cannot call emscripten binding method ${u} on deleted object`),Ms(s.$$.ptr,s.$$.ptrType.registeredClass,a.registeredClass)),Ff=(s,a,u,f,g,S,T,A,U,W)=>{a=Bt(a),g=Bn(f,g),Rn([],[s],te=>{te=te[0];var le=`${te.name}.${a}`,ge={get(){Ci(`Cannot access ${le} due to unbound types`,[u,T])},enumerable:!0,configurable:!0};return U?ge.set=()=>Ci(`Cannot access ${le} due to unbound types`,[u,T]):ge.set=ue=>vt(le+" is a read-only property"),Object.defineProperty(te.registeredClass.instancePrototype,a,ge),Rn([],U?[u,T]:[u],ue=>{var ye=ue[0],qe={get(){var lt=Pl(this,te,le+" getter");return ye.fromWireType(g(S,lt))},enumerable:!0};if(U){U=Bn(A,U);var mt=ue[1];qe.set=function(lt){var Dt=Pl(this,te,le+" setter"),xt=[];U(W,Dt,mt.toWireType(xt,lt)),Qo(xt)}}return Object.defineProperty(te.registeredClass.instancePrototype,a,qe),[]}),[]})},Uf=(s,a,u)=>{s=Bt(s),Rn([],[a],f=>(f=f[0],t[s]=f.fromWireType(u),[]))},Dl=[],zn=[0,1,,1,null,1,!0,1,!1,1],ta=s=>{s>9&&--zn[s+1]===0&&(L(zn[s]!==void 0,"Decref for unallocated handle."),zn[s]=void 0,Dl.push(s))},zt={toValue:s=>(s||vt(`Cannot use deleted val. handle = ${s}`),L(s===2||zn[s]!==void 0&&s%2===0,`invalid handle: ${s}`),zn[s]),toHandle:s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const a=Dl.pop()||zn.length;return zn[a]=s,zn[a+1]=1,a}}}},Ll={name:"emscripten::val",fromWireType:s=>{var a=zt.toValue(s);return ta(s),a},toWireType:(s,a)=>zt.toHandle(a),argPackAdvance:kn,readValueFromPointer:Es,destructorFunction:null},Il=s=>xn(s,Ll),Of=(s,a,u)=>{switch(a){case 1:return u?function(f){return this.fromWireType(oe[f])}:function(f){return this.fromWireType(ve[f])};case 2:return u?function(f){return this.fromWireType(Ue[f>>1])}:function(f){return this.fromWireType(be[f>>1])};case 4:return u?function(f){return this.fromWireType(pe[f>>2])}:function(f){return this.fromWireType(Me[f>>2])};default:throw new TypeError(`invalid integer width (${a}): ${s}`)}},kf=(s,a,u,f)=>{a=Bt(a);function g(){}g.values={},xn(s,{name:a,constructor:g,fromWireType:function(S){return this.constructor.values[S]},toWireType:(S,T)=>T.value,argPackAdvance:kn,readValueFromPointer:Of(a,u,f),destructorFunction:null}),Jo(a,g)},Cs=(s,a)=>{var u=Ti[s];return u===void 0&&vt(`${a} has unknown type ${Cl(s)}`),u},Bf=(s,a,u)=>{var f=Cs(s,"enum");a=Bt(a);var g=f.constructor,S=Object.create(f.constructor.prototype,{value:{value:u},constructor:{value:Ss(`${f.name}_${a}`,function(){})}});g.values[u]=S,g[a]=S},zf=(s,a)=>{switch(a){case 4:return function(u){return this.fromWireType(Je[u>>2])};case 8:return function(u){return this.fromWireType(ct[u>>3])};default:throw new TypeError(`invalid float width (${a}): ${s}`)}},Hf=(s,a,u)=>{a=Bt(a),xn(s,{name:a,fromWireType:f=>f,toWireType:(f,g)=>{if(typeof g!="number"&&typeof g!="boolean")throw new TypeError(`Cannot convert ${Ai(g)} to ${this.name}`);return g},argPackAdvance:kn,readValueFromPointer:zf(a,u),destructorFunction:null})},Vf=(s,a,u,f,g,S,T,A)=>{var U=As(a,u);s=Bt(s),s=ea(s),g=Bn(f,g,T),Jo(s,function(){Ci(`Cannot call ${s} due to unbound types`,U)},a-1),Rn([],U,W=>{var te=[W[0],null].concat(W.slice(1));return Tl(s,Ts(s,te,null,g,S,T),a-1),[]})},Gf=(s,a,u,f,g)=>{a=Bt(a);const S=f===0;let T=U=>U;if(S){var A=32-8*u;T=U=>U<<A>>>A,g=T(g)}xn(s,{name:a,fromWireType:T,toWireType:(U,W)=>{if(typeof W!="number"&&typeof W!="boolean")throw new TypeError(`Cannot convert "${Ai(W)}" to ${a}`);return xl(a,W,f,g),W},argPackAdvance:kn,readValueFromPointer:yl(a,u,f!==0),destructorFunction:null})},Wf=(s,a,u)=>{var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],g=f[a];function S(T){var A=Me[T>>2],U=Me[T+4>>2];return new g(oe.buffer,U,A)}u=Bt(u),xn(s,{name:u,fromWireType:S,argPackAdvance:kn,readValueFromPointer:S},{ignoreDuplicateRegistrations:!0})},Xf=Object.assign({optional:!0},Ll),$f=(s,a)=>{xn(s,Xf)},Ri=(s,a,u)=>(L(typeof u=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),je(s,ve,a,u)),jf=(s,a)=>{a=Bt(a),xn(s,{name:a,fromWireType(u){for(var f=Me[u>>2],g=u+4,S,T,A=g,T=0;T<=f;++T){var U=g+T;if(T==f||ve[U]==0){var W=U-A,te=dt(A,W);S===void 0?S=te:(S+="\0",S+=te),A=U+1}}return Hn(u),S},toWireType(u,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g,S=typeof f=="string";S||ArrayBuffer.isView(f)&&f.BYTES_PER_ELEMENT==1||vt("Cannot pass non-string to std::string"),S?g=Xe(f):g=f.length;var T=ra(4+g+1),A=T+4;return Me[T>>2]=g,S?Ri(f,A,g+1):ve.set(f,A),u!==null&&u.push(Hn,T),T},argPackAdvance:kn,readValueFromPointer:Es,destructorFunction(u){Hn(u)}})},Nl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Yf=(s,a)=>{L(s%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var u=s>>1,f=u+a/2,g=u;!(g>=f)&&be[g];)++g;if(g-u>16&&Nl)return Nl.decode(be.subarray(u,g));for(var S="",T=u;!(T>=f);++T){var A=be[T];if(A==0)break;S+=String.fromCharCode(A)}return S},qf=(s,a,u)=>{if(L(a%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),L(typeof u=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??(u=2147483647),u<2)return 0;u-=2;for(var f=a,g=u<s.length*2?u/2:s.length,S=0;S<g;++S){var T=s.charCodeAt(S);Ue[a>>1]=T,a+=2}return Ue[a>>1]=0,a-f},Zf=s=>s.length*2,Kf=(s,a)=>{L(s%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var u="",f=0;!(f>=a/4);f++){var g=pe[s+f*4>>2];if(!g)break;u+=String.fromCodePoint(g)}return u},Jf=(s,a,u)=>{if(L(a%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),L(typeof u=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??(u=2147483647),u<4)return 0;for(var f=a,g=f+u-4,S=0;S<s.length;++S){var T=s.codePointAt(S);if(T>65535&&S++,pe[a>>2]=T,a+=4,a+4>g)break}return pe[a>>2]=0,a-f},Qf=s=>{for(var a=0,u=0;u<s.length;++u){var f=s.codePointAt(u);f>65535&&u++,a+=4}return a},ep=(s,a,u)=>{u=Bt(u);var f,g,S,T;a===2?(f=Yf,g=qf,T=Zf,S=A=>be[A>>1]):a===4&&(f=Kf,g=Jf,T=Qf,S=A=>Me[A>>2]),xn(s,{name:u,fromWireType:A=>{for(var U=Me[A>>2],W,te=A+4,le=0;le<=U;++le){var ge=A+4+le*a;if(le==U||S(ge)==0){var ue=ge-te,ye=f(te,ue);W===void 0?W=ye:(W+="\0",W+=ye),te=ge+a}}return Hn(A),W},toWireType:(A,U)=>{typeof U!="string"&&vt(`Cannot pass non-string to C++ string type ${u}`);var W=T(U),te=ra(4+W+a);return Me[te>>2]=W/a,g(U,te+4,W+a),A!==null&&A.push(Hn,te),te},argPackAdvance:kn,readValueFromPointer:Es,destructorFunction(A){Hn(A)}})},tp=(s,a)=>{Il(s)},np=(s,a)=>{a=Bt(a),xn(s,{isVoid:!0,name:a,argPackAdvance:0,fromWireType:()=>{},toWireType:(u,f)=>{}})},ip=()=>{throw new O},Fl=(s,a,u)=>{var f=[],g=s.toWireType(f,u);return f.length&&(Me[a>>2]=zt.toHandle(f)),g},rp=(s,a,u)=>(s=zt.toValue(s),a=Cs(a,"emval::as"),Fl(a,u,s)),Rs=[],sp=(s,a,u,f)=>(s=Rs[s],a=zt.toValue(a),s(null,a,u,f)),op={},na=s=>{var a=op[s];return a===void 0?Bt(s):a},ap=(s,a,u,f,g)=>(s=Rs[s],a=zt.toValue(a),u=na(u),s(a,a[u],f,g)),Ul=()=>globalThis,cp=s=>s===0?zt.toHandle(Ul()):(s=na(s),zt.toHandle(Ul()[s])),lp=s=>{var a=Rs.length;return Rs.push(s),a},up=(s,a)=>{for(var u=new Array(s),f=0;f<s;++f)u[f]=Cs(Me[a+f*4>>2],`parameter ${f}`);return u},hp=(s,a,u)=>{var f=up(s,a),g=f.shift();s--;var S=`return function (obj, func, destructorsRef, args) {
`,T=0,A=[];u===0&&A.push("obj");for(var U=["retType"],W=[g],te=0;te<s;++te)A.push(`arg${te}`),U.push(`argType${te}`),W.push(f[te]),S+=`  var arg${te} = argType${te}.readValueFromPointer(args${T?"+"+T:""});
`,T+=f[te].argPackAdvance;var le=u===1?"new func":"func.call";S+=`  var rv = ${le}(${A.join(", ")});
`,g.isVoid||(U.push("emval_returnValue"),W.push(Fl),S+=`  return emval_returnValue(retType, destructorsRef, rv);
`),S+=`};
`;var ge=new Function(...U,S)(...W),ue=`methodCaller<(${f.map(ye=>ye.name).join(", ")}) => ${g.name}>`;return lp(Ss(ue,ge))},dp=(s,a)=>(s=zt.toValue(s),a=zt.toValue(a),zt.toHandle(s[a])),fp=s=>{s>9&&(zn[s+1]+=1)},pp=s=>(s=zt.toValue(s),typeof s=="number"),mp=s=>(s=zt.toValue(s),typeof s=="string"),_p=()=>zt.toHandle([]),gp=s=>zt.toHandle(na(s)),vp=s=>{var a=zt.toValue(s);Qo(a),ta(s)},yp=(s,a)=>{s=Cs(s,"_emval_take_value");var u=s.readValueFromPointer(a);return zt.toHandle(u)},xp=s=>{throw s=zt.toValue(s),s},Sp=s=>s%4===0&&(s%100!==0||s%400===0),Mp=[0,31,60,91,121,152,182,213,244,274,305,335],Ep=[0,31,59,90,120,151,181,212,243,273,304,334],Ol=s=>{var a=Sp(s.getFullYear()),u=a?Mp:Ep,f=u[s.getMonth()]+s.getDate()-1;return f},bp=9007199254740992,wp=-9007199254740992,kl=s=>s<wp||s>bp?NaN:Number(s);function Tp(s,a){s=kl(s);var u=new Date(s*1e3);pe[a>>2]=u.getSeconds(),pe[a+4>>2]=u.getMinutes(),pe[a+8>>2]=u.getHours(),pe[a+12>>2]=u.getDate(),pe[a+16>>2]=u.getMonth(),pe[a+20>>2]=u.getFullYear()-1900,pe[a+24>>2]=u.getDay();var f=Ol(u)|0;pe[a+28>>2]=f,pe[a+36>>2]=-(u.getTimezoneOffset()*60);var g=new Date(u.getFullYear(),0,1),S=new Date(u.getFullYear(),6,1).getTimezoneOffset(),T=g.getTimezoneOffset(),A=(S!=T&&u.getTimezoneOffset()==Math.min(T,S))|0;pe[a+32>>2]=A}var Ap=function(s){var a=(()=>{var u=new Date(pe[s+20>>2]+1900,pe[s+16>>2],pe[s+12>>2],pe[s+8>>2],pe[s+4>>2],pe[s>>2],0),f=pe[s+32>>2],g=u.getTimezoneOffset(),S=new Date(u.getFullYear(),0,1),T=new Date(u.getFullYear(),6,1).getTimezoneOffset(),A=S.getTimezoneOffset(),U=Math.min(A,T);if(f<0)pe[s+32>>2]=+(T!=A&&U==g);else if(f>0!=(U==g)){var W=Math.max(A,T),te=f>0?U:W;u.setTime(u.getTime()+(te-g)*6e4)}pe[s+24>>2]=u.getDay();var le=Ol(u)|0;pe[s+28>>2]=le,pe[s>>2]=u.getSeconds(),pe[s+4>>2]=u.getMinutes(),pe[s+8>>2]=u.getHours(),pe[s+12>>2]=u.getDate(),pe[s+16>>2]=u.getMonth(),pe[s+20>>2]=u.getYear();var ge=u.getTime();return isNaN(ge)?-1:ge/1e3})();return BigInt(a)},Cp=(s,a,u,f)=>{var g=new Date().getFullYear(),S=new Date(g,0,1),T=new Date(g,6,1),A=S.getTimezoneOffset(),U=T.getTimezoneOffset(),W=Math.max(A,U);Me[s>>2]=W*60,pe[a>>2]=+(A!=U);var te=ue=>{var ye=ue>=0?"-":"+",qe=Math.abs(ue),mt=String(Math.floor(qe/60)).padStart(2,"0"),lt=String(qe%60).padStart(2,"0");return`UTC${ye}${mt}${lt}`},le=te(A),ge=te(U);L(le),L(ge),L(Xe(le)<=16,`timezone name truncated to fit in TZNAME_MAX (${le})`),L(Xe(ge)<=16,`timezone name truncated to fit in TZNAME_MAX (${ge})`),U<A?(Ri(le,u,17),Ri(ge,f,17)):(Ri(le,f,17),Ri(ge,u,17))},Bl=()=>performance.now(),zl=()=>Date.now(),Rp=s=>s>=0&&s<=3;function Pp(s,a,u){if(!Rp(s))return 28;var f;s===0?f=zl():f=Bl();var g=Math.round(f*1e3*1e3);return X[u>>3]=BigInt(g),0}var Ps=[],Dp=(s,a)=>{L(Array.isArray(Ps)),L(a%16==0),Ps.length=0;for(var u;u=ve[s++];){var f=String.fromCharCode(u),g=["d","f","i","p"];g.push("j"),L(g.includes(f),`Invalid character ${u}("${f}") in readEmAsmArgs! Use only [${g}], and do not specify "v" for void return argument.`);var S=u!=105;S&=u!=112,a+=S&&a%8?4:0,Ps.push(u==112?Me[a>>2]:u==106?X[a>>3]:u==105?pe[a>>2]:ct[a>>3]),a+=S?8:4}return Ps},Lp=(s,a,u)=>{var f=Dp(a,u);return L($l.hasOwnProperty(s),`No EM_ASM constant found at address ${s}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),$l[s](...f)},Ip=(s,a,u)=>Lp(s,a,u),Hl=()=>2147483648,Np=()=>Hl(),Fp=(s,a)=>(L(a,"alignment argument is required"),Math.ceil(s/a)*a),Up=s=>{var a=ht.buffer,u=(s-a.byteLength+65535)/65536|0;try{return ht.grow(u),$e(),1}catch(f){P(`growMemory: Attempted to grow heap from ${a.byteLength} bytes to ${s} bytes, but got error: ${f}`)}},Op=s=>{var a=ve.length;s>>>=0,L(s>a);var u=Hl();if(s>u)return P(`Cannot enlarge memory, requested ${s} bytes, but the limit is ${u} bytes!`),!1;for(var f=1;f<=4;f*=2){var g=a*(1+.2/f);g=Math.min(g,s+100663296);var S=Math.min(u,Fp(Math.max(s,g),65536)),T=Up(S);if(T)return!0}return P(`Failed to grow the heap from ${a} bytes to ${S} bytes, not enough memory!`),!1},ia={},kp=()=>h||"./this.program",zr=()=>{if(!zr.strings){var s=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:s,_:kp()};for(var u in ia)ia[u]===void 0?delete a[u]:a[u]=ia[u];var f=[];for(var u in a)f.push(`${u}=${a[u]}`);zr.strings=f}return zr.strings},Bp=(s,a)=>{var u=0,f=0;for(var g of zr()){var S=a+u;Me[s+f>>2]=S,u+=Ri(g,S,1/0)+1,f+=4}return 0},zp=(s,a)=>{var u=zr();Me[s>>2]=u.length;var f=0;for(var g of u)f+=Xe(g)+1;return Me[a>>2]=f,0},Vl=0,Gl=()=>ae||Vl>0,Hp=s=>{var a;Gl()||((a=t.onExit)==null||a.call(t,s),V=!0),d(s,new We(s))},Vp=(s,a)=>{if(Q_(),Gl()&&!a){var u=`program exited (with status: ${s}), but keepRuntimeAlive() is set (counter=${Vl}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Ke==null||Ke(u),P(u)}Hp(s)},Gp=Vp;function Wp(s){try{var a=gt.getStreamFromFD(s);return w.close(a),0}catch(u){if(typeof w>"u"||u.name!=="ErrnoError")throw u;return u.errno}}var Xp=(s,a,u,f)=>{for(var g=0,S=0;S<u;S++){var T=Me[a>>2],A=Me[a+4>>2];a+=8;var U=w.read(s,oe,T,A,f);if(U<0)return-1;if(g+=U,U<A)break}return g};function $p(s,a,u,f){try{var g=gt.getStreamFromFD(s),S=Xp(g,a,u);return Me[f>>2]=S,0}catch(T){if(typeof w>"u"||T.name!=="ErrnoError")throw T;return T.errno}}function jp(s,a,u,f){a=kl(a);try{if(isNaN(a))return 61;var g=gt.getStreamFromFD(s);return w.llseek(g,a,u),X[f>>3]=BigInt(g.position),g.getdents&&a===0&&u===0&&(g.getdents=null),0}catch(S){if(typeof w>"u"||S.name!=="ErrnoError")throw S;return S.errno}}var Yp=(s,a,u,f)=>{for(var g=0,S=0;S<u;S++){var T=Me[a>>2],A=Me[a+4>>2];a+=8;var U=w.write(s,oe,T,A,f);if(U<0)return-1;if(g+=U,U<A)break}return g};function qp(s,a,u,f){try{var g=gt.getStreamFromFD(s),S=Yp(g,a,u);return Me[f>>2]=S,0}catch(T){if(typeof w>"u"||T.name!=="ErrnoError")throw T;return T.errno}}var Zp=s=>s,Kp=s=>{var a=t["_"+s];return L(a,"Cannot call unknown function "+s+", make sure it is exported"),a},Jp=(s,a)=>{L(s.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),oe.set(s,a)},Ds=s=>Jl(s),Qp=s=>{var a=Xe(s)+1,u=Ds(a);return Ri(s,u,a),u},Wl=(s,a,u,f,g)=>{var S={string:ye=>{var qe=0;return ye!=null&&ye!==0&&(qe=Qp(ye)),qe},array:ye=>{var qe=Ds(ye.length);return Jp(ye,qe),qe}};function T(ye){return a==="string"?dt(ye):a==="boolean"?!!ye:ye}var A=Kp(s),U=[],W=0;if(L(a!=="array",'Return type should not be "array".'),f)for(var te=0;te<f.length;te++){var le=S[u[te]];le?(W===0&&(W=K()),U[te]=le(f[te])):U[te]=f[te]}var ge=A(...U);function ue(ye){return W!==0&&J(W),T(ye)}return ge=ue(ge),ge},em=(s,a,u,f)=>(...g)=>Wl(s,a,u,g),tm=(...s)=>w.createPath(...s),nm=(...s)=>w.unlink(...s),im=(...s)=>w.createLazyFile(...s),rm=(...s)=>w.createDevice(...s),sm=s=>Ls(s),om=s=>aa(s),am=s=>{var a=K(),u=Ds(4),f=Ds(4);eu(s,u,f);var g=Me[u>>2],S=Me[f>>2],T=dt(g);Hn(g);var A;return S&&(A=dt(S),Hn(S)),J(a),[T,A]},Xl=s=>am(s);w.createPreloadedFile=yt,w.staticInit(),vf(),Tf(),L(zn.length===10),t.noExitRuntime&&(ae=t.noExitRuntime),t.preloadPlugins&&(Ye=t.preloadPlugins),t.print&&(F=t.print),t.printErr&&(P=t.printErr),t.wasmBinary&&(C=t.wasmBinary),um(),t.arguments&&t.arguments,t.thisProgram&&(h=t.thisProgram),L(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),L(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),L(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),L(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),L(typeof t.read>"u","Module.read option was removed"),L(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),L(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),L(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),L(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),L(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),L(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),L(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),L(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=ee,t.removeRunDependency=de,t.ccall=Wl,t.cwrap=em,t.FS_createPreloadedFile=yt,t.FS_unlink=nm,t.FS_createPath=tm,t.FS_createDevice=rm,t.FS=w,t.FS_createDataFile=jt,t.FS_createLazyFile=im,t.MEMFS=ke;var cm=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];cm.forEach(Ce);var lm=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];lm.forEach(Le),t.incrementExceptionRefcount=sm,t.decrementExceptionRefcount=om,t.getExceptionMessage=Xl;function um(){ne("fetchSettings")}var $l={667668:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(s){Object.defineProperty(t,s,{get:function(){return t["get_"+s]()},set:function(a){},enumerable:!0,configurable:!0})})}},jl=Q("___getTypeName"),ra=Q("_malloc"),sa=Q("_fflush"),Hn=Q("_free"),oa=Q("_emscripten_stack_get_end"),Yl=Q("_strerror"),xe=Q("_setThrew"),ql=Q("__emscripten_tempret_set"),Zl=Q("_emscripten_stack_init"),Kl=Q("__emscripten_stack_restore"),Jl=Q("__emscripten_stack_alloc"),Ql=Q("_emscripten_stack_get_current"),aa=Q("___cxa_decrement_exception_refcount"),Ls=Q("___cxa_increment_exception_refcount"),eu=Q("___get_exception_message"),tu=Q("___cxa_can_catch"),nu=Q("___cxa_get_exception_ptr");function hm(s){jl=ce("__getTypeName",1),ra=ce("malloc",1),sa=ce("fflush",1),Hn=ce("free",1),oa=s.emscripten_stack_get_end,s.emscripten_stack_get_base,Yl=ce("strerror",1),xe=ce("setThrew",2),ql=ce("_emscripten_tempret_set",1),Zl=s.emscripten_stack_init,s.emscripten_stack_get_free,Kl=s._emscripten_stack_restore,Jl=s._emscripten_stack_alloc,Ql=s.emscripten_stack_get_current,aa=ce("__cxa_decrement_exception_refcount",1),Ls=ce("__cxa_increment_exception_refcount",1),eu=ce("__get_exception_message",3),tu=ce("__cxa_can_catch",3),nu=ce("__cxa_get_exception_ptr",1)}var iu={__assert_fail:dn,__cxa_begin_catch:hs,__cxa_current_primary_exception:jn,__cxa_end_catch:ds,__cxa_find_matching_catch_2:Zi,__cxa_find_matching_catch_3:fs,__cxa_find_matching_catch_4:ps,__cxa_rethrow:ms,__cxa_rethrow_primary_exception:jo,__cxa_throw:Yo,__cxa_uncaught_exceptions:D,__resumeException:$,__syscall_dup3:wi,__syscall_fcntl64:On,__syscall_fstat64:_s,__syscall_ioctl:nf,__syscall_lstat64:rf,__syscall_newfstatat:sf,__syscall_openat:of,__syscall_stat64:af,_abort_js:cf,_embind_register_bigint:uf,_embind_register_bool:hf,_embind_register_class:Cf,_embind_register_class_class_function:Lf,_embind_register_class_constructor:If,_embind_register_class_function:Nf,_embind_register_class_property:Ff,_embind_register_constant:Uf,_embind_register_emval:Il,_embind_register_enum:kf,_embind_register_enum_value:Bf,_embind_register_float:Hf,_embind_register_function:Vf,_embind_register_integer:Gf,_embind_register_memory_view:Wf,_embind_register_optional:$f,_embind_register_std_string:jf,_embind_register_std_wstring:ep,_embind_register_user_type:tp,_embind_register_void:np,_emscripten_throw_longjmp:ip,_emval_as:rp,_emval_call:sp,_emval_call_method:ap,_emval_decref:ta,_emval_get_global:cp,_emval_get_method_caller:hp,_emval_get_property:dp,_emval_incref:fp,_emval_is_number:pp,_emval_is_string:mp,_emval_new_array:_p,_emval_new_cstring:gp,_emval_run_destructors:vp,_emval_take_value:yp,_emval_throw:xp,_localtime_js:Tp,_mktime_js:Ap,_tzset_js:Cp,clock_time_get:Pp,emscripten_asm_const_int:Ip,emscripten_date_now:zl,emscripten_get_heap_max:Np,emscripten_get_now:Bl,emscripten_resize_heap:Op,environ_get:Bp,environ_sizes_get:zp,exit:Gp,fd_close:Wp,fd_read:$p,fd_seek:jp,fd_write:qp,invoke_ddd:k_,invoke_dddi:t_,invoke_dddidi:n_,invoke_ddidi:e_,invoke_di:i_,invoke_dii:Xm,invoke_diii:wm,invoke_diiii:Qm,invoke_diiiidd:Km,invoke_diiiidi:Cm,invoke_diiiii:xm,invoke_diiiiii:Nm,invoke_diiiiiii:r_,invoke_diiiiiiiii:Lm,invoke_diiiiiiiiiiii:Im,invoke_fiii:q_,invoke_i:Sm,invoke_id:I_,invoke_ii:pm,invoke_iid:p_,invoke_iidddd:G_,invoke_iidiii:Vm,invoke_iidiiid:zm,invoke_iidiiiiidi:Gm,invoke_iif:V_,invoke_iii:dm,invoke_iiid:Wm,invoke_iiididdddddd:Hm,invoke_iiidiiiiiiii:Bm,invoke_iiii:gm,invoke_iiiidddiiiii:o_,invoke_iiiii:bm,invoke_iiiiid:b_,invoke_iiiiii:y_,invoke_iiiiiii:__,invoke_iiiiiiii:f_,invoke_iiiiiiiidd:w_,invoke_iiiiiiiii:Zm,invoke_iiiiiiiiii:g_,invoke_iiiiiiiiiidddiiiiiiiii:km,invoke_iiiiiiiiiii:Y_,invoke_iiiiiiiiiiii:Z_,invoke_iiiiiiiiiiiii:L_,invoke_iiij:v_,invoke_iiji:E_,invoke_j:$_,invoke_ji:D_,invoke_jiiii:x_,invoke_jij:P_,invoke_v:_m,invoke_vi:mm,invoke_vid:m_,invoke_viddd:S_,invoke_vidddd:M_,invoke_vidi:Jm,invoke_vidiii:Um,invoke_vii:ym,invoke_viid:Ym,invoke_viiddi:R_,invoke_viiddidi:C_,invoke_viiddii:s_,invoke_viidi:jm,invoke_viidii:Am,invoke_viidiii:h_,invoke_viidiiid:l_,invoke_viidiiiii:Om,invoke_viidiiiiidi:d_,invoke_viidiiiiiiii:Fm,invoke_viii:fm,invoke_viiid:Pm,invoke_viiidd:A_,invoke_viiidi:$m,invoke_viiididdddddd:u_,invoke_viiidiiiiiiii:c_,invoke_viiii:Em,invoke_viiiiddd:T_,invoke_viiiidi:B_,invoke_viiiifi:z_,invoke_viiiii:vm,invoke_viiiiid:Rm,invoke_viiiiii:Mm,invoke_viiiiiii:Tm,invoke_viiiiiiii:qm,invoke_viiiiiiiiii:U_,invoke_viiiiiiiiiidddiiiiiiiii:a_,invoke_viiiiiiiiiiid:Dm,invoke_viiiiiiiiiiiii:F_,invoke_viiiiiiiiiiiiiii:K_,invoke_viiiiiiiiiiiiiiiiii:O_,invoke_viiiij:W_,invoke_viij:X_,invoke_viijii:j_,invoke_vij:H_,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:N_,llvm_eh_typeid_for:Zp},Pi=await nt();function dm(s,a,u){var f=K();try{return Se(s)(a,u)}catch(g){if(J(f),!(g instanceof b))throw g;xe(1,0)}}function fm(s,a,u,f){var g=K();try{Se(s)(a,u,f)}catch(S){if(J(g),!(S instanceof b))throw S;xe(1,0)}}function pm(s,a){var u=K();try{return Se(s)(a)}catch(f){if(J(u),!(f instanceof b))throw f;xe(1,0)}}function mm(s,a){var u=K();try{Se(s)(a)}catch(f){if(J(u),!(f instanceof b))throw f;xe(1,0)}}function _m(s){var a=K();try{Se(s)()}catch(u){if(J(a),!(u instanceof b))throw u;xe(1,0)}}function gm(s,a,u,f){var g=K();try{return Se(s)(a,u,f)}catch(S){if(J(g),!(S instanceof b))throw S;xe(1,0)}}function vm(s,a,u,f,g,S){var T=K();try{Se(s)(a,u,f,g,S)}catch(A){if(J(T),!(A instanceof b))throw A;xe(1,0)}}function ym(s,a,u){var f=K();try{Se(s)(a,u)}catch(g){if(J(f),!(g instanceof b))throw g;xe(1,0)}}function xm(s,a,u,f,g,S){var T=K();try{return Se(s)(a,u,f,g,S)}catch(A){if(J(T),!(A instanceof b))throw A;xe(1,0)}}function Sm(s){var a=K();try{return Se(s)()}catch(u){if(J(a),!(u instanceof b))throw u;xe(1,0)}}function Mm(s,a,u,f,g,S,T){var A=K();try{Se(s)(a,u,f,g,S,T)}catch(U){if(J(A),!(U instanceof b))throw U;xe(1,0)}}function Em(s,a,u,f,g){var S=K();try{Se(s)(a,u,f,g)}catch(T){if(J(S),!(T instanceof b))throw T;xe(1,0)}}function bm(s,a,u,f,g){var S=K();try{return Se(s)(a,u,f,g)}catch(T){if(J(S),!(T instanceof b))throw T;xe(1,0)}}function wm(s,a,u,f){var g=K();try{return Se(s)(a,u,f)}catch(S){if(J(g),!(S instanceof b))throw S;xe(1,0)}}function Tm(s,a,u,f,g,S,T,A){var U=K();try{Se(s)(a,u,f,g,S,T,A)}catch(W){if(J(U),!(W instanceof b))throw W;xe(1,0)}}function Am(s,a,u,f,g,S){var T=K();try{Se(s)(a,u,f,g,S)}catch(A){if(J(T),!(A instanceof b))throw A;xe(1,0)}}function Cm(s,a,u,f,g,S,T){var A=K();try{return Se(s)(a,u,f,g,S,T)}catch(U){if(J(A),!(U instanceof b))throw U;xe(1,0)}}function Rm(s,a,u,f,g,S,T){var A=K();try{Se(s)(a,u,f,g,S,T)}catch(U){if(J(A),!(U instanceof b))throw U;xe(1,0)}}function Pm(s,a,u,f,g){var S=K();try{Se(s)(a,u,f,g)}catch(T){if(J(S),!(T instanceof b))throw T;xe(1,0)}}function Dm(s,a,u,f,g,S,T,A,U,W,te,le,ge){var ue=K();try{Se(s)(a,u,f,g,S,T,A,U,W,te,le,ge)}catch(ye){if(J(ue),!(ye instanceof b))throw ye;xe(1,0)}}function Lm(s,a,u,f,g,S,T,A,U,W){var te=K();try{return Se(s)(a,u,f,g,S,T,A,U,W)}catch(le){if(J(te),!(le instanceof b))throw le;xe(1,0)}}function Im(s,a,u,f,g,S,T,A,U,W,te,le,ge){var ue=K();try{return Se(s)(a,u,f,g,S,T,A,U,W,te,le,ge)}catch(ye){if(J(ue),!(ye instanceof b))throw ye;xe(1,0)}}function Nm(s,a,u,f,g,S,T){var A=K();try{return Se(s)(a,u,f,g,S,T)}catch(U){if(J(A),!(U instanceof b))throw U;xe(1,0)}}function Fm(s,a,u,f,g,S,T,A,U,W,te,le){var ge=K();try{Se(s)(a,u,f,g,S,T,A,U,W,te,le)}catch(ue){if(J(ge),!(ue instanceof b))throw ue;xe(1,0)}}function Um(s,a,u,f,g,S){var T=K();try{Se(s)(a,u,f,g,S)}catch(A){if(J(T),!(A instanceof b))throw A;xe(1,0)}}function Om(s,a,u,f,g,S,T,A,U){var W=K();try{Se(s)(a,u,f,g,S,T,A,U)}catch(te){if(J(W),!(te instanceof b))throw te;xe(1,0)}}function km(s,a,u,f,g,S,T,A,U,W,te,le,ge,ue,ye,qe,mt,lt,Dt,xt,Kt,Ht){var on=K();try{return Se(s)(a,u,f,g,S,T,A,U,W,te,le,ge,ue,ye,qe,mt,lt,Dt,xt,Kt,Ht)}catch(Pt){if(J(on),!(Pt instanceof b))throw Pt;xe(1,0)}}function Bm(s,a,u,f,g,S,T,A,U,W,te,le){var ge=K();try{return Se(s)(a,u,f,g,S,T,A,U,W,te,le)}catch(ue){if(J(ge),!(ue instanceof b))throw ue;xe(1,0)}}function zm(s,a,u,f,g,S,T){var A=K();try{return Se(s)(a,u,f,g,S,T)}catch(U){if(J(A),!(U instanceof b))throw U;xe(1,0)}}function Hm(s,a,u,f,g,S,T,A,U,W,te,le){var ge=K();try{return Se(s)(a,u,f,g,S,T,A,U,W,te,le)}catch(ue){if(J(ge),!(ue instanceof b))throw ue;xe(1,0)}}function Vm(s,a,u,f,g,S){var T=K();try{return Se(s)(a,u,f,g,S)}catch(A){if(J(T),!(A instanceof b))throw A;xe(1,0)}}function Gm(s,a,u,f,g,S,T,A,U,W){var te=K();try{return Se(s)(a,u,f,g,S,T,A,U,W)}catch(le){if(J(te),!(le instanceof b))throw le;xe(1,0)}}function Wm(s,a,u,f){var g=K();try{return Se(s)(a,u,f)}catch(S){if(J(g),!(S instanceof b))throw S;xe(1,0)}}function Xm(s,a,u){var f=K();try{return Se(s)(a,u)}catch(g){if(J(f),!(g instanceof b))throw g;xe(1,0)}}function $m(s,a,u,f,g,S){var T=K();try{Se(s)(a,u,f,g,S)}catch(A){if(J(T),!(A instanceof b))throw A;xe(1,0)}}function jm(s,a,u,f,g){var S=K();try{Se(s)(a,u,f,g)}catch(T){if(J(S),!(T instanceof b))throw T;xe(1,0)}}function Ym(s,a,u,f){var g=K();try{Se(s)(a,u,f)}catch(S){if(J(g),!(S instanceof b))throw S;xe(1,0)}}function qm(s,a,u,f,g,S,T,A,U){var W=K();try{Se(s)(a,u,f,g,S,T,A,U)}catch(te){if(J(W),!(te instanceof b))throw te;xe(1,0)}}function Zm(s,a,u,f,g,S,T,A,U){var W=K();try{return Se(s)(a,u,f,g,S,T,A,U)}catch(te){if(J(W),!(te instanceof b))throw te;xe(1,0)}}function Km(s,a,u,f,g,S,T){var A=K();try{return Se(s)(a,u,f,g,S,T)}catch(U){if(J(A),!(U instanceof b))throw U;xe(1,0)}}function Jm(s,a,u,f){var g=K();try{Se(s)(a,u,f)}catch(S){if(J(g),!(S instanceof b))throw S;xe(1,0)}}function Qm(s,a,u,f,g){var S=K();try{return Se(s)(a,u,f,g)}catch(T){if(J(S),!(T instanceof b))throw T;xe(1,0)}}function e_(s,a,u,f,g){var S=K();try{return Se(s)(a,u,f,g)}catch(T){if(J(S),!(T instanceof b))throw T;xe(1,0)}}function t_(s,a,u,f){var g=K();try{return Se(s)(a,u,f)}catch(S){if(J(g),!(S instanceof b))throw S;xe(1,0)}}function n_(s,a,u,f,g,S){var T=K();try{return Se(s)(a,u,f,g,S)}catch(A){if(J(T),!(A instanceof b))throw A;xe(1,0)}}function i_(s,a){var u=K();try{return Se(s)(a)}catch(f){if(J(u),!(f instanceof b))throw f;xe(1,0)}}function r_(s,a,u,f,g,S,T,A){var U=K();try{return Se(s)(a,u,f,g,S,T,A)}catch(W){if(J(U),!(W instanceof b))throw W;xe(1,0)}}function s_(s,a,u,f,g,S,T){var A=K();try{Se(s)(a,u,f,g,S,T)}catch(U){if(J(A),!(U instanceof b))throw U;xe(1,0)}}function o_(s,a,u,f,g,S,T,A,U,W,te,le){var ge=K();try{return Se(s)(a,u,f,g,S,T,A,U,W,te,le)}catch(ue){if(J(ge),!(ue instanceof b))throw ue;xe(1,0)}}function a_(s,a,u,f,g,S,T,A,U,W,te,le,ge,ue,ye,qe,mt,lt,Dt,xt,Kt,Ht,on){var Pt=K();try{Se(s)(a,u,f,g,S,T,A,U,W,te,le,ge,ue,ye,qe,mt,lt,Dt,xt,Kt,Ht,on)}catch(li){if(J(Pt),!(li instanceof b))throw li;xe(1,0)}}function c_(s,a,u,f,g,S,T,A,U,W,te,le,ge){var ue=K();try{Se(s)(a,u,f,g,S,T,A,U,W,te,le,ge)}catch(ye){if(J(ue),!(ye instanceof b))throw ye;xe(1,0)}}function l_(s,a,u,f,g,S,T,A){var U=K();try{Se(s)(a,u,f,g,S,T,A)}catch(W){if(J(U),!(W instanceof b))throw W;xe(1,0)}}function u_(s,a,u,f,g,S,T,A,U,W,te,le,ge){var ue=K();try{Se(s)(a,u,f,g,S,T,A,U,W,te,le,ge)}catch(ye){if(J(ue),!(ye instanceof b))throw ye;xe(1,0)}}function h_(s,a,u,f,g,S,T){var A=K();try{Se(s)(a,u,f,g,S,T)}catch(U){if(J(A),!(U instanceof b))throw U;xe(1,0)}}function d_(s,a,u,f,g,S,T,A,U,W,te){var le=K();try{Se(s)(a,u,f,g,S,T,A,U,W,te)}catch(ge){if(J(le),!(ge instanceof b))throw ge;xe(1,0)}}function f_(s,a,u,f,g,S,T,A){var U=K();try{return Se(s)(a,u,f,g,S,T,A)}catch(W){if(J(U),!(W instanceof b))throw W;xe(1,0)}}function p_(s,a,u){var f=K();try{return Se(s)(a,u)}catch(g){if(J(f),!(g instanceof b))throw g;xe(1,0)}}function m_(s,a,u){var f=K();try{Se(s)(a,u)}catch(g){if(J(f),!(g instanceof b))throw g;xe(1,0)}}function __(s,a,u,f,g,S,T){var A=K();try{return Se(s)(a,u,f,g,S,T)}catch(U){if(J(A),!(U instanceof b))throw U;xe(1,0)}}function g_(s,a,u,f,g,S,T,A,U,W){var te=K();try{return Se(s)(a,u,f,g,S,T,A,U,W)}catch(le){if(J(te),!(le instanceof b))throw le;xe(1,0)}}function v_(s,a,u,f){var g=K();try{return Se(s)(a,u,f)}catch(S){if(J(g),!(S instanceof b))throw S;xe(1,0)}}function y_(s,a,u,f,g,S){var T=K();try{return Se(s)(a,u,f,g,S)}catch(A){if(J(T),!(A instanceof b))throw A;xe(1,0)}}function x_(s,a,u,f,g){var S=K();try{return Se(s)(a,u,f,g)}catch(T){if(J(S),!(T instanceof b))throw T;return xe(1,0),0n}}function S_(s,a,u,f,g){var S=K();try{Se(s)(a,u,f,g)}catch(T){if(J(S),!(T instanceof b))throw T;xe(1,0)}}function M_(s,a,u,f,g,S){var T=K();try{Se(s)(a,u,f,g,S)}catch(A){if(J(T),!(A instanceof b))throw A;xe(1,0)}}function E_(s,a,u,f){var g=K();try{return Se(s)(a,u,f)}catch(S){if(J(g),!(S instanceof b))throw S;xe(1,0)}}function b_(s,a,u,f,g,S){var T=K();try{return Se(s)(a,u,f,g,S)}catch(A){if(J(T),!(A instanceof b))throw A;xe(1,0)}}function w_(s,a,u,f,g,S,T,A,U,W){var te=K();try{return Se(s)(a,u,f,g,S,T,A,U,W)}catch(le){if(J(te),!(le instanceof b))throw le;xe(1,0)}}function T_(s,a,u,f,g,S,T,A){var U=K();try{Se(s)(a,u,f,g,S,T,A)}catch(W){if(J(U),!(W instanceof b))throw W;xe(1,0)}}function A_(s,a,u,f,g,S){var T=K();try{Se(s)(a,u,f,g,S)}catch(A){if(J(T),!(A instanceof b))throw A;xe(1,0)}}function C_(s,a,u,f,g,S,T,A){var U=K();try{Se(s)(a,u,f,g,S,T,A)}catch(W){if(J(U),!(W instanceof b))throw W;xe(1,0)}}function R_(s,a,u,f,g,S){var T=K();try{Se(s)(a,u,f,g,S)}catch(A){if(J(T),!(A instanceof b))throw A;xe(1,0)}}function P_(s,a,u){var f=K();try{return Se(s)(a,u)}catch(g){if(J(f),!(g instanceof b))throw g;return xe(1,0),0n}}function D_(s,a){var u=K();try{return Se(s)(a)}catch(f){if(J(u),!(f instanceof b))throw f;return xe(1,0),0n}}function L_(s,a,u,f,g,S,T,A,U,W,te,le,ge){var ue=K();try{return Se(s)(a,u,f,g,S,T,A,U,W,te,le,ge)}catch(ye){if(J(ue),!(ye instanceof b))throw ye;xe(1,0)}}function I_(s,a){var u=K();try{return Se(s)(a)}catch(f){if(J(u),!(f instanceof b))throw f;xe(1,0)}}function N_(s,a,u,f,g,S,T,A,U,W,te,le,ge,ue,ye,qe,mt,lt,Dt,xt,Kt,Ht,on,Pt,li,Is,tg,ng,ig,rg,sg,og,ag,cg,lg,ug,hg,dg,fg,pg,mg,_g,gg,vg,yg,xg,Sg,Mg,Eg,bg,wg,Tg,Ag,Cg,Rg,Pg,Dg,Lg,Ig,Ng,Fg,Ug,Og,kg,Bg,zg,Hg,Vg,Gg,Wg,Xg,$g,jg,Yg,qg,Zg,Kg,Jg,Qg,ev,tv,nv,iv,rv,sv,ov){var av=K();try{Se(s)(a,u,f,g,S,T,A,U,W,te,le,ge,ue,ye,qe,mt,lt,Dt,xt,Kt,Ht,on,Pt,li,Is,tg,ng,ig,rg,sg,og,ag,cg,lg,ug,hg,dg,fg,pg,mg,_g,gg,vg,yg,xg,Sg,Mg,Eg,bg,wg,Tg,Ag,Cg,Rg,Pg,Dg,Lg,Ig,Ng,Fg,Ug,Og,kg,Bg,zg,Hg,Vg,Gg,Wg,Xg,$g,jg,Yg,qg,Zg,Kg,Jg,Qg,ev,tv,nv,iv,rv,sv,ov)}catch(cu){if(J(av),!(cu instanceof b))throw cu;xe(1,0)}}function F_(s,a,u,f,g,S,T,A,U,W,te,le,ge,ue){var ye=K();try{Se(s)(a,u,f,g,S,T,A,U,W,te,le,ge,ue)}catch(qe){if(J(ye),!(qe instanceof b))throw qe;xe(1,0)}}function U_(s,a,u,f,g,S,T,A,U,W,te){var le=K();try{Se(s)(a,u,f,g,S,T,A,U,W,te)}catch(ge){if(J(le),!(ge instanceof b))throw ge;xe(1,0)}}function O_(s,a,u,f,g,S,T,A,U,W,te,le,ge,ue,ye,qe,mt,lt,Dt){var xt=K();try{Se(s)(a,u,f,g,S,T,A,U,W,te,le,ge,ue,ye,qe,mt,lt,Dt)}catch(Kt){if(J(xt),!(Kt instanceof b))throw Kt;xe(1,0)}}function k_(s,a,u){var f=K();try{return Se(s)(a,u)}catch(g){if(J(f),!(g instanceof b))throw g;xe(1,0)}}function B_(s,a,u,f,g,S,T){var A=K();try{Se(s)(a,u,f,g,S,T)}catch(U){if(J(A),!(U instanceof b))throw U;xe(1,0)}}function z_(s,a,u,f,g,S,T){var A=K();try{Se(s)(a,u,f,g,S,T)}catch(U){if(J(A),!(U instanceof b))throw U;xe(1,0)}}function H_(s,a,u){var f=K();try{Se(s)(a,u)}catch(g){if(J(f),!(g instanceof b))throw g;xe(1,0)}}function V_(s,a,u){var f=K();try{return Se(s)(a,u)}catch(g){if(J(f),!(g instanceof b))throw g;xe(1,0)}}function G_(s,a,u,f,g,S){var T=K();try{return Se(s)(a,u,f,g,S)}catch(A){if(J(T),!(A instanceof b))throw A;xe(1,0)}}function W_(s,a,u,f,g,S){var T=K();try{Se(s)(a,u,f,g,S)}catch(A){if(J(T),!(A instanceof b))throw A;xe(1,0)}}function X_(s,a,u,f){var g=K();try{Se(s)(a,u,f)}catch(S){if(J(g),!(S instanceof b))throw S;xe(1,0)}}function $_(s){var a=K();try{return Se(s)()}catch(u){if(J(a),!(u instanceof b))throw u;return xe(1,0),0n}}function j_(s,a,u,f,g,S){var T=K();try{Se(s)(a,u,f,g,S)}catch(A){if(J(T),!(A instanceof b))throw A;xe(1,0)}}function Y_(s,a,u,f,g,S,T,A,U,W,te){var le=K();try{return Se(s)(a,u,f,g,S,T,A,U,W,te)}catch(ge){if(J(le),!(ge instanceof b))throw ge;xe(1,0)}}function q_(s,a,u,f){var g=K();try{return Se(s)(a,u,f)}catch(S){if(J(g),!(S instanceof b))throw S;xe(1,0)}}function Z_(s,a,u,f,g,S,T,A,U,W,te,le){var ge=K();try{return Se(s)(a,u,f,g,S,T,A,U,W,te,le)}catch(ue){if(J(ge),!(ue instanceof b))throw ue;xe(1,0)}}function K_(s,a,u,f,g,S,T,A,U,W,te,le,ge,ue,ye,qe){var mt=K();try{Se(s)(a,u,f,g,S,T,A,U,W,te,le,ge,ue,ye,qe)}catch(lt){if(J(mt),!(lt instanceof b))throw lt;xe(1,0)}}var ru;function J_(){Zl(),H()}function ca(){if(Ze>0){Fe=ca;return}if(J_(),Ee(),Ze>0){Fe=ca;return}function s(){var a;L(!ru),ru=!0,t.calledRun=!0,!V&&(ze(),Oe==null||Oe(t),(a=t.onRuntimeInitialized)==null||a.call(t),Z("onRuntimeInitialized"),L(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Re())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),s()},1)):s(),I()}function Q_(){var s=F,a=P,u=!1;F=P=f=>{u=!0};try{sa(0),["stdout","stderr"].forEach(f=>{var U;var g=w.analyzePath("/dev/"+f);if(g){var S=g.object,T=S.rdev,A=He.ttys[T];(U=A==null?void 0:A.output)!=null&&U.length&&(u=!0)}})}catch{}F=s,P=a,u&&Qe("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function eg(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();Z("preInit")}eg(),ca(),k?e=t:e=new Promise((s,a)=>{Oe=s,Ke=a});for(const s of Object.keys(t))s in i||Object.defineProperty(i,s,{configurable:!0,get(){fe(`Access to module property ('${s}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const ww="/physical/assets/mujoco-D9UjOFNX.wasm";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="170",gr={ROTATE:0,DOLLY:1,PAN:2},pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dv=0,uu=1,fv=2,td=1,pv=2,ti=3,Si=0,ln=1,ni=2,yi=0,vr=1,To=2,hu=3,du=4,mv=5,Bi=100,_v=101,gv=102,vv=103,yv=104,xv=200,Sv=201,Mv=202,Ev=203,ec=204,tc=205,bv=206,wv=207,Tv=208,Av=209,Cv=210,Rv=211,Pv=212,Dv=213,Lv=214,nc=0,ic=1,rc=2,Er=3,sc=4,oc=5,ac=6,cc=7,nd=0,Iv=1,Nv=2,xi=0,Fv=1,Uv=2,Ov=3,kv=4,Bv=5,zv=6,Hv=7,fu="attached",Vv="detached",id=300,br=301,wr=302,lc=303,uc=304,ko=306,hc=1e3,Hi=1001,dc=1002,yn=1003,Gv=1004,Ns=1005,Gn=1006,la=1007,Vi=1008,oi=1009,rd=1010,sd=1011,is=1012,el=1013,Wi=1014,Fn=1015,ls=1016,tl=1017,nl=1018,Tr=1020,od=35902,ad=1021,cd=1022,wn=1023,ld=1024,ud=1025,yr=1026,Ar=1027,il=1028,rl=1029,hd=1030,sl=1031,ol=1033,yo=33776,xo=33777,So=33778,Mo=33779,fc=35840,pc=35841,mc=35842,_c=35843,gc=36196,vc=37492,yc=37496,xc=37808,Sc=37809,Mc=37810,Ec=37811,bc=37812,wc=37813,Tc=37814,Ac=37815,Cc=37816,Rc=37817,Pc=37818,Dc=37819,Lc=37820,Ic=37821,Eo=36492,Nc=36494,Fc=36495,dd=36283,Uc=36284,Oc=36285,kc=36286,Ao=2300,Bc=2301,ua=2302,pu=2400,mu=2401,_u=2402,Wv=2500,Tw=0,Aw=1,Cw=2,Xv=3200,$v=3201,fd=0,jv=1,gi="",En="srgb",Lr="srgb-linear",Bo="linear",Tt="srgb",Ji=7680,gu=519,Yv=512,qv=513,Zv=514,pd=515,Kv=516,Jv=517,Qv=518,e0=519,zc=35044,vu="300 es",ii=2e3,Co=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,c=r.length;o<c;o++)r[o].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yu=1234567;const xr=Math.PI/180,Cr=180/Math.PI;function Tn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function al(i,e){return(i%e+e)%e}function t0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function n0(i,e,t){return i!==e?(t-i)/(e-i):0}function Qr(i,e,t){return(1-t)*i+t*e}function i0(i,e,t,n){return Qr(i,e,1-Math.exp(-t*n))}function r0(i,e=1){return e-Math.abs(al(i,e*2)-e)}function s0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function o0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function a0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function c0(i,e){return i+Math.random()*(e-i)}function l0(i){return i*(.5-Math.random())}function u0(i){i!==void 0&&(yu=i);let e=yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function h0(i){return i*xr}function d0(i){return i*Cr}function f0(i){return(i&i-1)===0&&i!==0}function p0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function m0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _0(i,e,t,n,r){const o=Math.cos,c=Math.sin,l=o(t/2),h=c(t/2),d=o((e+n)/2),p=c((e+n)/2),m=o((e-n)/2),_=c((e-n)/2),y=o((n-e)/2),M=c((n-e)/2);switch(r){case"XYX":i.set(l*p,h*m,h*_,l*d);break;case"YZY":i.set(h*_,l*p,h*m,l*d);break;case"ZXZ":i.set(h*m,h*_,l*p,l*d);break;case"XZX":i.set(l*p,h*M,h*y,l*d);break;case"YXY":i.set(h*y,l*p,h*M,l*d);break;case"ZYZ":i.set(h*M,h*y,l*p,l*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const g0={DEG2RAD:xr,RAD2DEG:Cr,generateUUID:Tn,clamp:Gt,euclideanModulo:al,mapLinear:t0,inverseLerp:n0,lerp:Qr,damp:i0,pingpong:r0,smoothstep:s0,smootherstep:o0,randInt:a0,randFloat:c0,randFloatSpread:l0,seededRandom:u0,degToRad:h0,radToDeg:d0,isPowerOfTwo:f0,ceilPowerOfTwo:p0,floorPowerOfTwo:m0,setQuaternionFromProperEuler:_0,normalize:bt,denormalize:Nn};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*n-c*r+e.x,this.y=o*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,r,o,c,l,h,d){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,c,l,h,d)}set(e,t,n,r,o,c,l,h,d){const p=this.elements;return p[0]=e,p[1]=r,p[2]=l,p[3]=t,p[4]=o,p[5]=h,p[6]=n,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,c=n[0],l=n[3],h=n[6],d=n[1],p=n[4],m=n[7],_=n[2],y=n[5],M=n[8],E=r[0],x=r[3],v=r[6],F=r[1],P=r[4],C=r[7],V=r[2],L=r[5],B=r[8];return o[0]=c*E+l*F+h*V,o[3]=c*x+l*P+h*L,o[6]=c*v+l*C+h*B,o[1]=d*E+p*F+m*V,o[4]=d*x+p*P+m*L,o[7]=d*v+p*C+m*B,o[2]=_*E+y*F+M*V,o[5]=_*x+y*P+M*L,o[8]=_*v+y*C+M*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],h=e[6],d=e[7],p=e[8];return t*c*p-t*l*d-n*o*p+n*l*h+r*o*d-r*c*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],h=e[6],d=e[7],p=e[8],m=p*c-l*d,_=l*h-p*o,y=d*o-c*h,M=t*m+n*_+r*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=m*E,e[1]=(r*d-p*n)*E,e[2]=(l*n-r*c)*E,e[3]=_*E,e[4]=(p*t-r*h)*E,e[5]=(r*o-l*t)*E,e[6]=y*E,e[7]=(n*h-d*t)*E,e[8]=(c*t-n*o)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,c,l){const h=Math.cos(o),d=Math.sin(o);return this.set(n*h,n*d,-n*(h*c+d*l)+c+e,-r*d,r*h,-r*(-d*c+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(ha.makeScale(e,t)),this}rotate(e){return this.premultiply(ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new st;function md(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function v0(){const i=rs("canvas");return i.style.display="block",i}const xu={};function Kr(i){i in xu||(xu[i]=!0,console.warn(i))}function y0(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function x0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function S0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Tt&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Tt&&(i.r=Sr(i.r),i.g=Sr(i.g),i.b=Sr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?Bo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Su=[.64,.33,.3,.6,.15,.06],Mu=[.2126,.7152,.0722],Eu=[.3127,.329],bu=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wu=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[Lr]:{primaries:Su,whitePoint:Eu,transfer:Bo,toXYZ:bu,fromXYZ:wu,luminanceCoefficients:Mu,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:Su,whitePoint:Eu,transfer:Tt,toXYZ:bu,fromXYZ:wu,luminanceCoefficients:Mu,outputColorSpaceConfig:{drawingBufferColorSpace:En}}});let Qi;class M0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=rs("canvas")),Qi.width=e.width,Qi.height=e.height;const n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let c=0;c<o.length;c++)o[c]=ri(o[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E0=0;class _d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Tn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let c=0,l=r.length;c<l;c++)r[c].isDataTexture?o.push(da(r[c].image)):o.push(da(r[c]))}else o=da(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?M0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let b0=0;class tn extends ji{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=Hi,r=Hi,o=Gn,c=Vi,l=wn,h=oi,d=tn.DEFAULT_ANISOTROPY,p=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Tn(),this.name="",this.source=new _d(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=c,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=h,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hc:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hc:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=id;tn.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*o,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*o,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*o,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const h=e.elements,d=h[0],p=h[4],m=h[8],_=h[1],y=h[5],M=h[9],E=h[2],x=h[6],v=h[10];if(Math.abs(p-_)<.01&&Math.abs(m-E)<.01&&Math.abs(M-x)<.01){if(Math.abs(p+_)<.1&&Math.abs(m+E)<.1&&Math.abs(M+x)<.1&&Math.abs(d+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(d+1)/2,C=(y+1)/2,V=(v+1)/2,L=(p+_)/4,B=(m+E)/4,H=(M+x)/4;return P>C&&P>V?P<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(P),r=L/n,o=B/n):C>V?C<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(C),n=L/r,o=H/r):V<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(V),n=B/o,r=H/o),this.set(n,r,o,t),this}let F=Math.sqrt((x-M)*(x-M)+(m-E)*(m-E)+(_-p)*(_-p));return Math.abs(F)<.001&&(F=1),this.x=(x-M)/F,this.y=(m-E)/F,this.z=(_-p)/F,this.w=Math.acos((d+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w0 extends ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new tn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let l=0;l<c;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _d(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends w0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gd extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class T0 extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,c,l){let h=n[r+0],d=n[r+1],p=n[r+2],m=n[r+3];const _=o[c+0],y=o[c+1],M=o[c+2],E=o[c+3];if(l===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=m;return}if(l===1){e[t+0]=_,e[t+1]=y,e[t+2]=M,e[t+3]=E;return}if(m!==E||h!==_||d!==y||p!==M){let x=1-l;const v=h*_+d*y+p*M+m*E,F=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const V=Math.sqrt(P),L=Math.atan2(V,v*F);x=Math.sin(x*L)/V,l=Math.sin(l*L)/V}const C=l*F;if(h=h*x+_*C,d=d*x+y*C,p=p*x+M*C,m=m*x+E*C,x===1-l){const V=1/Math.sqrt(h*h+d*d+p*p+m*m);h*=V,d*=V,p*=V,m*=V}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,o,c){const l=n[r],h=n[r+1],d=n[r+2],p=n[r+3],m=o[c],_=o[c+1],y=o[c+2],M=o[c+3];return e[t]=l*M+p*m+h*y-d*_,e[t+1]=h*M+p*_+d*m-l*y,e[t+2]=d*M+p*y+l*_-h*m,e[t+3]=p*M-l*m-h*_-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,c=e._order,l=Math.cos,h=Math.sin,d=l(n/2),p=l(r/2),m=l(o/2),_=h(n/2),y=h(r/2),M=h(o/2);switch(c){case"XYZ":this._x=_*p*m+d*y*M,this._y=d*y*m-_*p*M,this._z=d*p*M+_*y*m,this._w=d*p*m-_*y*M;break;case"YXZ":this._x=_*p*m+d*y*M,this._y=d*y*m-_*p*M,this._z=d*p*M-_*y*m,this._w=d*p*m+_*y*M;break;case"ZXY":this._x=_*p*m-d*y*M,this._y=d*y*m+_*p*M,this._z=d*p*M+_*y*m,this._w=d*p*m-_*y*M;break;case"ZYX":this._x=_*p*m-d*y*M,this._y=d*y*m+_*p*M,this._z=d*p*M-_*y*m,this._w=d*p*m+_*y*M;break;case"YZX":this._x=_*p*m+d*y*M,this._y=d*y*m+_*p*M,this._z=d*p*M-_*y*m,this._w=d*p*m-_*y*M;break;case"XZY":this._x=_*p*m-d*y*M,this._y=d*y*m-_*p*M,this._z=d*p*M+_*y*m,this._w=d*p*m+_*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],c=t[1],l=t[5],h=t[9],d=t[2],p=t[6],m=t[10],_=n+l+m;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(p-h)*y,this._y=(o-d)*y,this._z=(c-r)*y}else if(n>l&&n>m){const y=2*Math.sqrt(1+n-l-m);this._w=(p-h)/y,this._x=.25*y,this._y=(r+c)/y,this._z=(o+d)/y}else if(l>m){const y=2*Math.sqrt(1+l-n-m);this._w=(o-d)/y,this._x=(r+c)/y,this._y=.25*y,this._z=(h+p)/y}else{const y=2*Math.sqrt(1+m-n-l);this._w=(c-r)/y,this._x=(o+d)/y,this._y=(h+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,c=e._w,l=t._x,h=t._y,d=t._z,p=t._w;return this._x=n*p+c*l+r*d-o*h,this._y=r*p+c*h+o*l-n*d,this._z=o*p+c*d+n*h-r*l,this._w=c*p-n*l-r*h-o*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,c=this._w;let l=c*e._w+n*e._x+r*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=r,this._z=o,this;const h=1-l*l;if(h<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*n+t*this._x,this._y=y*r+t*this._y,this._z=y*o+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,l),m=Math.sin((1-t)*p)/d,_=Math.sin(t*p)/d;return this._w=c*m+this._w*_,this._x=n*m+this._x*_,this._y=r*m+this._y*_,this._z=o*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,c=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*c,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*c,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,c=e.y,l=e.z,h=e.w,d=2*(c*r-l*n),p=2*(l*t-o*r),m=2*(o*n-c*t);return this.x=t+h*d+c*m-l*p,this.y=n+h*p+l*d-o*m,this.z=r+h*m+o*p-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,c=t.x,l=t.y,h=t.z;return this.x=r*h-o*l,this.y=o*c-n*h,this.z=n*l-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new z,Tu=new hn;class Wn{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=o.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,Dn):Dn.fromBufferAttribute(o,c),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const r=e.children;for(let o=0,c=r.length;o<c;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),Us.subVectors(this.max,Hr),er.subVectors(e.a,Hr),tr.subVectors(e.b,Hr),nr.subVectors(e.c,Hr),ui.subVectors(tr,er),hi.subVectors(nr,tr),Di.subVectors(er,nr);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Di.z,Di.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Di.z,0,-Di.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Di.y,Di.x,0];return!pa(t,er,tr,nr,Us)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,er,tr,nr,Us))?!1:(Os.crossVectors(ui,hi),t=[Os.x,Os.y,Os.z],pa(t,er,tr,nr,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new z,new z,new z,new z,new z,new z,new z,new z],Dn=new z,Fs=new Wn,er=new z,tr=new z,nr=new z,ui=new z,hi=new z,Di=new z,Hr=new z,Us=new z,Os=new z,Li=new z;function pa(i,e,t,n,r){for(let o=0,c=i.length-3;o<=c;o+=3){Li.fromArray(i,o);const l=r.x*Math.abs(Li.x)+r.y*Math.abs(Li.y)+r.z*Math.abs(Li.z),h=e.dot(Li),d=t.dot(Li),p=n.dot(Li);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>l)return!1}return!0}const A0=new Wn,Vr=new z,ma=new z;class ai{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):A0.setFromPoints(e).getCenter(n);let r=0;for(let o=0,c=e.length;o<c;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Vr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(ma)),this.expandByPoint(Vr.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new z,_a=new z,ks=new z,di=new z,ga=new z,Bs=new z,va=new z;class Ir{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){_a.copy(e).add(t).multiplyScalar(.5),ks.copy(t).sub(e).normalize(),di.copy(this.origin).sub(_a);const o=e.distanceTo(t)*.5,c=-this.direction.dot(ks),l=di.dot(this.direction),h=-di.dot(ks),d=di.lengthSq(),p=Math.abs(1-c*c);let m,_,y,M;if(p>0)if(m=c*h-l,_=c*l-h,M=o*p,m>=0)if(_>=-M)if(_<=M){const E=1/p;m*=E,_*=E,y=m*(m+c*_+2*l)+_*(c*m+_+2*h)+d}else _=o,m=Math.max(0,-(c*_+l)),y=-m*m+_*(_+2*h)+d;else _=-o,m=Math.max(0,-(c*_+l)),y=-m*m+_*(_+2*h)+d;else _<=-M?(m=Math.max(0,-(-c*o+l)),_=m>0?-o:Math.min(Math.max(-o,-h),o),y=-m*m+_*(_+2*h)+d):_<=M?(m=0,_=Math.min(Math.max(-o,-h),o),y=_*(_+2*h)+d):(m=Math.max(0,-(c*o+l)),_=m>0?o:Math.min(Math.max(-o,-h),o),y=-m*m+_*(_+2*h)+d);else _=c>0?-o:o,m=Math.max(0,-(c*_+l)),y=-m*m+_*(_+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(_a).addScaledVector(ks,_),y}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const n=Zn.dot(this.direction),r=Zn.dot(Zn)-n*n,o=e.radius*e.radius;if(r>o)return null;const c=Math.sqrt(o-r),l=n-c,h=n+c;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,c,l,h;const d=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,_=this.origin;return d>=0?(n=(e.min.x-_.x)*d,r=(e.max.x-_.x)*d):(n=(e.max.x-_.x)*d,r=(e.min.x-_.x)*d),p>=0?(o=(e.min.y-_.y)*p,c=(e.max.y-_.y)*p):(o=(e.max.y-_.y)*p,c=(e.min.y-_.y)*p),n>c||o>r||((o>n||isNaN(n))&&(n=o),(c<r||isNaN(r))&&(r=c),m>=0?(l=(e.min.z-_.z)*m,h=(e.max.z-_.z)*m):(l=(e.max.z-_.z)*m,h=(e.min.z-_.z)*m),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,r,o){ga.subVectors(t,e),Bs.subVectors(n,e),va.crossVectors(ga,Bs);let c=this.direction.dot(va),l;if(c>0){if(r)return null;l=1}else if(c<0)l=-1,c=-c;else return null;di.subVectors(this.origin,e);const h=l*this.direction.dot(Bs.crossVectors(di,Bs));if(h<0)return null;const d=l*this.direction.dot(ga.cross(di));if(d<0||h+d>c)return null;const p=-l*di.dot(va);return p<0?null:this.at(p/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,r,o,c,l,h,d,p,m,_,y,M,E,x){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,c,l,h,d,p,m,_,y,M,E,x)}set(e,t,n,r,o,c,l,h,d,p,m,_,y,M,E,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=o,v[5]=c,v[9]=l,v[13]=h,v[2]=d,v[6]=p,v[10]=m,v[14]=_,v[3]=y,v[7]=M,v[11]=E,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ir.setFromMatrixColumn(e,0).length(),o=1/ir.setFromMatrixColumn(e,1).length(),c=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,c=Math.cos(n),l=Math.sin(n),h=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const _=c*p,y=c*m,M=l*p,E=l*m;t[0]=h*p,t[4]=-h*m,t[8]=d,t[1]=y+M*d,t[5]=_-E*d,t[9]=-l*h,t[2]=E-_*d,t[6]=M+y*d,t[10]=c*h}else if(e.order==="YXZ"){const _=h*p,y=h*m,M=d*p,E=d*m;t[0]=_+E*l,t[4]=M*l-y,t[8]=c*d,t[1]=c*m,t[5]=c*p,t[9]=-l,t[2]=y*l-M,t[6]=E+_*l,t[10]=c*h}else if(e.order==="ZXY"){const _=h*p,y=h*m,M=d*p,E=d*m;t[0]=_-E*l,t[4]=-c*m,t[8]=M+y*l,t[1]=y+M*l,t[5]=c*p,t[9]=E-_*l,t[2]=-c*d,t[6]=l,t[10]=c*h}else if(e.order==="ZYX"){const _=c*p,y=c*m,M=l*p,E=l*m;t[0]=h*p,t[4]=M*d-y,t[8]=_*d+E,t[1]=h*m,t[5]=E*d+_,t[9]=y*d-M,t[2]=-d,t[6]=l*h,t[10]=c*h}else if(e.order==="YZX"){const _=c*h,y=c*d,M=l*h,E=l*d;t[0]=h*p,t[4]=E-_*m,t[8]=M*m+y,t[1]=m,t[5]=c*p,t[9]=-l*p,t[2]=-d*p,t[6]=y*m+M,t[10]=_-E*m}else if(e.order==="XZY"){const _=c*h,y=c*d,M=l*h,E=l*d;t[0]=h*p,t[4]=-m,t[8]=d*p,t[1]=_*m+E,t[5]=c*p,t[9]=y*m-M,t[2]=M*m-y,t[6]=l*p,t[10]=E*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C0,e,R0)}lookAt(e,t,n){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),fi.crossVectors(n,pn),fi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),fi.crossVectors(n,pn)),fi.normalize(),zs.crossVectors(pn,fi),r[0]=fi.x,r[4]=zs.x,r[8]=pn.x,r[1]=fi.y,r[5]=zs.y,r[9]=pn.y,r[2]=fi.z,r[6]=zs.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,c=n[0],l=n[4],h=n[8],d=n[12],p=n[1],m=n[5],_=n[9],y=n[13],M=n[2],E=n[6],x=n[10],v=n[14],F=n[3],P=n[7],C=n[11],V=n[15],L=r[0],B=r[4],H=r[8],I=r[12],b=r[1],O=r[5],q=r[9],Z=r[13],Q=r[2],ne=r[6],ie=r[10],me=r[14],se=r[3],Ce=r[7],Le=r[11],Oe=r[15];return o[0]=c*L+l*b+h*Q+d*se,o[4]=c*B+l*O+h*ne+d*Ce,o[8]=c*H+l*q+h*ie+d*Le,o[12]=c*I+l*Z+h*me+d*Oe,o[1]=p*L+m*b+_*Q+y*se,o[5]=p*B+m*O+_*ne+y*Ce,o[9]=p*H+m*q+_*ie+y*Le,o[13]=p*I+m*Z+_*me+y*Oe,o[2]=M*L+E*b+x*Q+v*se,o[6]=M*B+E*O+x*ne+v*Ce,o[10]=M*H+E*q+x*ie+v*Le,o[14]=M*I+E*Z+x*me+v*Oe,o[3]=F*L+P*b+C*Q+V*se,o[7]=F*B+P*O+C*ne+V*Ce,o[11]=F*H+P*q+C*ie+V*Le,o[15]=F*I+P*Z+C*me+V*Oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],c=e[1],l=e[5],h=e[9],d=e[13],p=e[2],m=e[6],_=e[10],y=e[14],M=e[3],E=e[7],x=e[11],v=e[15];return M*(+o*h*m-r*d*m-o*l*_+n*d*_+r*l*y-n*h*y)+E*(+t*h*y-t*d*_+o*c*_-r*c*y+r*d*p-o*h*p)+x*(+t*d*m-t*l*y-o*c*m+n*c*y+o*l*p-n*d*p)+v*(-r*l*p-t*h*m+t*l*_+r*c*m-n*c*_+n*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],h=e[6],d=e[7],p=e[8],m=e[9],_=e[10],y=e[11],M=e[12],E=e[13],x=e[14],v=e[15],F=m*x*d-E*_*d+E*h*y-l*x*y-m*h*v+l*_*v,P=M*_*d-p*x*d-M*h*y+c*x*y+p*h*v-c*_*v,C=p*E*d-M*m*d+M*l*y-c*E*y-p*l*v+c*m*v,V=M*m*h-p*E*h-M*l*_+c*E*_+p*l*x-c*m*x,L=t*F+n*P+r*C+o*V;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/L;return e[0]=F*B,e[1]=(E*_*o-m*x*o-E*r*y+n*x*y+m*r*v-n*_*v)*B,e[2]=(l*x*o-E*h*o+E*r*d-n*x*d-l*r*v+n*h*v)*B,e[3]=(m*h*o-l*_*o-m*r*d+n*_*d+l*r*y-n*h*y)*B,e[4]=P*B,e[5]=(p*x*o-M*_*o+M*r*y-t*x*y-p*r*v+t*_*v)*B,e[6]=(M*h*o-c*x*o-M*r*d+t*x*d+c*r*v-t*h*v)*B,e[7]=(c*_*o-p*h*o+p*r*d-t*_*d-c*r*y+t*h*y)*B,e[8]=C*B,e[9]=(M*m*o-p*E*o-M*n*y+t*E*y+p*n*v-t*m*v)*B,e[10]=(c*E*o-M*l*o+M*n*d-t*E*d-c*n*v+t*l*v)*B,e[11]=(p*l*o-c*m*o-p*n*d+t*m*d+c*n*y-t*l*y)*B,e[12]=V*B,e[13]=(p*E*r-M*m*r+M*n*_-t*E*_-p*n*x+t*m*x)*B,e[14]=(M*l*r-c*E*r-M*n*h+t*E*h+c*n*x-t*l*x)*B,e[15]=(c*m*r-p*l*r+p*n*h-t*m*h-c*n*_+t*l*_)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,c=e.x,l=e.y,h=e.z,d=o*c,p=o*l;return this.set(d*c+n,d*l-r*h,d*h+r*l,0,d*l+r*h,p*l+n,p*h-r*c,0,d*h-r*l,p*h+r*c,o*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,c){return this.set(1,n,o,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,c=t._y,l=t._z,h=t._w,d=o+o,p=c+c,m=l+l,_=o*d,y=o*p,M=o*m,E=c*p,x=c*m,v=l*m,F=h*d,P=h*p,C=h*m,V=n.x,L=n.y,B=n.z;return r[0]=(1-(E+v))*V,r[1]=(y+C)*V,r[2]=(M-P)*V,r[3]=0,r[4]=(y-C)*L,r[5]=(1-(_+v))*L,r[6]=(x+F)*L,r[7]=0,r[8]=(M+P)*B,r[9]=(x-F)*B,r[10]=(1-(_+E))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=ir.set(r[0],r[1],r[2]).length();const c=ir.set(r[4],r[5],r[6]).length(),l=ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const d=1/o,p=1/c,m=1/l;return Ln.elements[0]*=d,Ln.elements[1]*=d,Ln.elements[2]*=d,Ln.elements[4]*=p,Ln.elements[5]*=p,Ln.elements[6]*=p,Ln.elements[8]*=m,Ln.elements[9]*=m,Ln.elements[10]*=m,t.setFromRotationMatrix(Ln),n.x=o,n.y=c,n.z=l,this}makePerspective(e,t,n,r,o,c,l=ii){const h=this.elements,d=2*o/(t-e),p=2*o/(n-r),m=(t+e)/(t-e),_=(n+r)/(n-r);let y,M;if(l===ii)y=-(c+o)/(c-o),M=-2*c*o/(c-o);else if(l===Co)y=-c/(c-o),M=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=p,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,o,c,l=ii){const h=this.elements,d=1/(t-e),p=1/(n-r),m=1/(c-o),_=(t+e)*d,y=(n+r)*p;let M,E;if(l===ii)M=(c+o)*m,E=-2*m;else if(l===Co)M=o*m,E=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=E,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ir=new z,Ln=new at,C0=new z(0,0,0),R0=new z(1,1,1),fi=new z,zs=new z,pn=new z,Au=new at,Cu=new hn;class An{constructor(e=0,t=0,n=0,r=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],c=r[4],l=r[8],h=r[1],d=r[5],p=r[9],m=r[2],_=r[6],y=r[10];switch(t){case"XYZ":this._y=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,y),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-Gt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(l,y));break;case"XZY":this._z=Math.asin(-Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Au,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P0=0;const Ru=new z,rr=new hn,Kn=new at,Hs=new z,Gr=new z,D0=new z,L0=new hn,Pu=new z(1,0,0),Du=new z(0,1,0),Lu=new z(0,0,1),Iu={type:"added"},I0={type:"removed"},sr={type:"childadded",child:null},ya={type:"childremoved",child:null};class Ft extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new z,t=new An,n=new hn,r=new z(1,1,1);function o(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new st}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(Pu,e)}rotateY(e){return this.rotateOnAxis(Du,e)}rotateZ(e){return this.rotateOnAxis(Lu,e)}translateOnAxis(e,t){return Ru.copy(e).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pu,e)}translateY(e){return this.translateOnAxis(Du,e)}translateZ(e){return this.translateOnAxis(Lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hs.copy(e):Hs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Gr,Hs,this.up):Kn.lookAt(Hs,Gr,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),rr.setFromRotationMatrix(Kn),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Iu),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I0),ya.child=e,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Iu),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,D0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,L0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const m=h[d];o(e.shapes,m)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,d=this.material.length;h<d;h++)l.push(o(e.materials,this.material[h]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(o(e.animations,h))}}if(t){const l=c(e.geometries),h=c(e.materials),d=c(e.textures),p=c(e.images),m=c(e.shapes),_=c(e.skeletons),y=c(e.animations),M=c(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),_.length>0&&(n.skeletons=_),y.length>0&&(n.animations=y),M.length>0&&(n.nodes=M)}return n.object=r,n;function c(l){const h=[];for(const d in l){const p=l[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new z(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new z,Jn=new z,xa=new z,Qn=new z,or=new z,ar=new z,Nu=new z,Sa=new z,Ma=new z,Ea=new z,ba=new Et,wa=new Et,Ta=new Et;class bn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),In.subVectors(e,t),r.cross(In);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){In.subVectors(r,t),Jn.subVectors(n,t),xa.subVectors(e,t);const c=In.dot(In),l=In.dot(Jn),h=In.dot(xa),d=Jn.dot(Jn),p=Jn.dot(xa),m=c*d-l*l;if(m===0)return o.set(0,0,0),null;const _=1/m,y=(d*h-l*p)*_,M=(c*p-l*h)*_;return o.set(1-y-M,M,y)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,r,o,c,l,h){return this.getBarycoord(e,t,n,r,Qn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Qn.x),h.addScaledVector(c,Qn.y),h.addScaledVector(l,Qn.z),h)}static getInterpolatedAttribute(e,t,n,r,o,c){return ba.setScalar(0),wa.setScalar(0),Ta.setScalar(0),ba.fromBufferAttribute(e,t),wa.fromBufferAttribute(e,n),Ta.fromBufferAttribute(e,r),c.setScalar(0),c.addScaledVector(ba,o.x),c.addScaledVector(wa,o.y),c.addScaledVector(Ta,o.z),c}static isFrontFacing(e,t,n,r){return In.subVectors(n,t),Jn.subVectors(e,t),In.cross(Jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),In.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return bn.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let c,l;or.subVectors(r,n),ar.subVectors(o,n),Sa.subVectors(e,n);const h=or.dot(Sa),d=ar.dot(Sa);if(h<=0&&d<=0)return t.copy(n);Ma.subVectors(e,r);const p=or.dot(Ma),m=ar.dot(Ma);if(p>=0&&m<=p)return t.copy(r);const _=h*m-p*d;if(_<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(n).addScaledVector(or,c);Ea.subVectors(e,o);const y=or.dot(Ea),M=ar.dot(Ea);if(M>=0&&y<=M)return t.copy(o);const E=y*d-h*M;if(E<=0&&d>=0&&M<=0)return l=d/(d-M),t.copy(n).addScaledVector(ar,l);const x=p*M-y*m;if(x<=0&&m-p>=0&&y-M>=0)return Nu.subVectors(o,r),l=(m-p)/(m-p+(y-M)),t.copy(r).addScaledVector(Nu,l);const v=1/(x+E+_);return c=E*v,l=_*v,t.copy(n).addScaledVector(or,c).addScaledVector(ar,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Aa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ot{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=St.workingColorSpace){if(e=al(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,c=2*n-o;this.r=Aa(c,o,e+1/3),this.g=Aa(c,o,e),this.b=Aa(c,o,e-1/3)}return St.toWorkingColorSpace(this,r),this}setStyle(e,t=En){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=r[1],l=r[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=vd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return St.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Gt(Qt.r*255,0,255))*65536+Math.round(Gt(Qt.g*255,0,255))*256+Math.round(Gt(Qt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,r=Qt.g,o=Qt.b,c=Math.max(n,r,o),l=Math.min(n,r,o);let h,d;const p=(l+c)/2;if(l===c)h=0,d=0;else{const m=c-l;switch(d=p<=.5?m/(c+l):m/(2-c-l),c){case n:h=(r-o)/m+(r<o?6:0);break;case r:h=(o-n)/m+2;break;case o:h=(n-r)/m+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=En){St.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,r=Qt.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Vs);const n=Qr(pi.h,Vs.h,t),r=Qr(pi.s,Vs.s,t),o=Qr(pi.l,Vs.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new ot;ot.NAMES=vd;let N0=0;class Yi extends ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Tn(),this.name="",this.blending=vr,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=tc,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ec&&(n.blendSrc=this.blendSrc),this.blendDst!==tc&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}if(t){const o=r(e.textures),c=r(e.images);o.length>0&&(n.textures=o),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ro extends Yi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new z,Gs=new Ae;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),o=bt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zc&&(e.usage=this.usage),e}}class yd extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xd extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ut extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let F0=0;const Sn=new at,Ca=new Ft,cr=new z,mn=new Wn,Wr=new Wn,$t=new z;class Zt extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(md(e)?xd:yd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new st().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ut(n,3))}else{for(let n=0,r=t.count;n<r;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];mn.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const l=t[o];Wr.setFromBufferAttribute(l),this.morphTargetsRelative?($t.addVectors(mn.min,Wr.min),mn.expandByPoint($t),$t.addVectors(mn.max,Wr.max),mn.expandByPoint($t)):(mn.expandByPoint(Wr.min),mn.expandByPoint(Wr.max))}mn.getCenter(n);let r=0;for(let o=0,c=e.count;o<c;o++)$t.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared($t));if(t)for(let o=0,c=t.length;o<c;o++){const l=t[o],h=this.morphTargetsRelative;for(let d=0,p=l.count;d<p;d++)$t.fromBufferAttribute(l,d),h&&(cr.fromBufferAttribute(e,d),$t.add(cr)),r=Math.max(r,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],h=[];for(let H=0;H<n.count;H++)l[H]=new z,h[H]=new z;const d=new z,p=new z,m=new z,_=new Ae,y=new Ae,M=new Ae,E=new z,x=new z;function v(H,I,b){d.fromBufferAttribute(n,H),p.fromBufferAttribute(n,I),m.fromBufferAttribute(n,b),_.fromBufferAttribute(o,H),y.fromBufferAttribute(o,I),M.fromBufferAttribute(o,b),p.sub(d),m.sub(d),y.sub(_),M.sub(_);const O=1/(y.x*M.y-M.x*y.y);isFinite(O)&&(E.copy(p).multiplyScalar(M.y).addScaledVector(m,-y.y).multiplyScalar(O),x.copy(m).multiplyScalar(y.x).addScaledVector(p,-M.x).multiplyScalar(O),l[H].add(E),l[I].add(E),l[b].add(E),h[H].add(x),h[I].add(x),h[b].add(x))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let H=0,I=F.length;H<I;++H){const b=F[H],O=b.start,q=b.count;for(let Z=O,Q=O+q;Z<Q;Z+=3)v(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const P=new z,C=new z,V=new z,L=new z;function B(H){V.fromBufferAttribute(r,H),L.copy(V);const I=l[H];P.copy(I),P.sub(V.multiplyScalar(V.dot(I))).normalize(),C.crossVectors(L,I);const O=C.dot(h[H])<0?-1:1;c.setXYZW(H,P.x,P.y,P.z,O)}for(let H=0,I=F.length;H<I;++H){const b=F[H],O=b.start,q=b.count;for(let Z=O,Q=O+q;Z<Q;Z+=3)B(e.getX(Z+0)),B(e.getX(Z+1)),B(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,y=n.count;_<y;_++)n.setXYZ(_,0,0,0);const r=new z,o=new z,c=new z,l=new z,h=new z,d=new z,p=new z,m=new z;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),E=e.getX(_+1),x=e.getX(_+2);r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,E),c.fromBufferAttribute(t,x),p.subVectors(c,o),m.subVectors(r,o),p.cross(m),l.fromBufferAttribute(n,M),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,x),l.add(p),h.add(p),d.add(p),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(E,h.x,h.y,h.z),n.setXYZ(x,d.x,d.y,d.z)}else for(let _=0,y=t.count;_<y;_+=3)r.fromBufferAttribute(t,_+0),o.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),p.subVectors(c,o),m.subVectors(r,o),p.cross(m),n.setXYZ(_+0,p.x,p.y,p.z),n.setXYZ(_+1,p.x,p.y,p.z),n.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(l,h){const d=l.array,p=l.itemSize,m=l.normalized,_=new d.constructor(h.length*p);let y=0,M=0;for(let E=0,x=h.length;E<x;E++){l.isInterleavedBufferAttribute?y=h[E]*l.data.stride+l.offset:y=h[E]*p;for(let v=0;v<p;v++)_[M++]=d[y++]}return new qt(_,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],d=e(h,n);t.setAttribute(l,d)}const o=this.morphAttributes;for(const l in o){const h=[],d=o[l];for(let p=0,m=d.length;p<m;p++){const _=d[p],y=e(_,n);h.push(y)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,h=c.length;l<h;l++){const d=c[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const d=n[h];e.data.attributes[h]=d.toJSON(e.data)}const r={};let o=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let m=0,_=d.length;m<_;m++){const y=d[m];p.push(y.toJSON(e.data))}p.length>0&&(r[h]=p,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const d in r){const p=r[d];this.setAttribute(d,p.clone(t))}const o=e.morphAttributes;for(const d in o){const p=[],m=o[d];for(let _=0,y=m.length;_<y;_++)p.push(m[_].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,p=c.length;d<p;d++){const m=c[d];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fu=new at,Ii=new Ir,Ws=new ai,Uu=new z,Xs=new z,$s=new z,js=new z,Ra=new z,Ys=new z,Ou=new z,qs=new z;class en extends Ft{constructor(e=new Zt,t=new Ro){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(o&&l){Ys.set(0,0,0);for(let h=0,d=o.length;h<d;h++){const p=l[h],m=o[h];p!==0&&(Ra.fromBufferAttribute(m,e),c?Ys.addScaledVector(Ra,p):Ys.addScaledVector(Ra.sub(t),p))}t.add(Ys)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(o),Ii.copy(e.ray).recast(e.near),!(Ws.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Ws,Uu)===null||Ii.origin.distanceToSquared(Uu)>(e.far-e.near)**2))&&(Fu.copy(o).invert(),Ii.copy(e.ray).applyMatrix4(Fu),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let r;const o=this.geometry,c=this.material,l=o.index,h=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,_=o.groups,y=o.drawRange;if(l!==null)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const x=_[M],v=c[x.materialIndex],F=Math.max(x.start,y.start),P=Math.min(l.count,Math.min(x.start+x.count,y.start+y.count));for(let C=F,V=P;C<V;C+=3){const L=l.getX(C),B=l.getX(C+1),H=l.getX(C+2);r=Zs(this,v,e,n,d,p,m,L,B,H),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const M=Math.max(0,y.start),E=Math.min(l.count,y.start+y.count);for(let x=M,v=E;x<v;x+=3){const F=l.getX(x),P=l.getX(x+1),C=l.getX(x+2);r=Zs(this,c,e,n,d,p,m,F,P,C),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const x=_[M],v=c[x.materialIndex],F=Math.max(x.start,y.start),P=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let C=F,V=P;C<V;C+=3){const L=C,B=C+1,H=C+2;r=Zs(this,v,e,n,d,p,m,L,B,H),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const M=Math.max(0,y.start),E=Math.min(h.count,y.start+y.count);for(let x=M,v=E;x<v;x+=3){const F=x,P=x+1,C=x+2;r=Zs(this,c,e,n,d,p,m,F,P,C),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function U0(i,e,t,n,r,o,c,l){let h;if(e.side===ln?h=n.intersectTriangle(c,o,r,!0,l):h=n.intersectTriangle(r,o,c,e.side===Si,l),h===null)return null;qs.copy(l),qs.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(qs);return d<t.near||d>t.far?null:{distance:d,point:qs.clone(),object:i}}function Zs(i,e,t,n,r,o,c,l,h,d){i.getVertexPosition(l,Xs),i.getVertexPosition(h,$s),i.getVertexPosition(d,js);const p=U0(i,e,t,n,Xs,$s,js,Ou);if(p){const m=new z;bn.getBarycoord(Ou,Xs,$s,js,m),r&&(p.uv=bn.getInterpolatedAttribute(r,l,h,d,m,new Ae)),o&&(p.uv1=bn.getInterpolatedAttribute(o,l,h,d,m,new Ae)),c&&(p.normal=bn.getInterpolatedAttribute(c,l,h,d,m,new z),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const _={a:l,b:h,c:d,normal:new z,materialIndex:0};bn.getNormal(Xs,$s,js,_.normal),p.face=_,p.barycoord=m}return p}class Nr extends Zt{constructor(e=1,t=1,n=1,r=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:c};const l=this;r=Math.floor(r),o=Math.floor(o),c=Math.floor(c);const h=[],d=[],p=[],m=[];let _=0,y=0;M("z","y","x",-1,-1,n,t,e,c,o,0),M("z","y","x",1,-1,n,t,-e,c,o,1),M("x","z","y",1,1,e,n,t,r,c,2),M("x","z","y",1,-1,e,n,-t,r,c,3),M("x","y","z",1,-1,e,t,n,r,o,4),M("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(h),this.setAttribute("position",new Ut(d,3)),this.setAttribute("normal",new Ut(p,3)),this.setAttribute("uv",new Ut(m,2));function M(E,x,v,F,P,C,V,L,B,H,I){const b=C/B,O=V/H,q=C/2,Z=V/2,Q=L/2,ne=B+1,ie=H+1;let me=0,se=0;const Ce=new z;for(let Le=0;Le<ie;Le++){const Oe=Le*O-Z;for(let Ke=0;Ke<ne;Ke++){const ht=Ke*b-q;Ce[E]=ht*F,Ce[x]=Oe*P,Ce[v]=Q,d.push(Ce.x,Ce.y,Ce.z),Ce[E]=0,Ce[x]=0,Ce[v]=L>0?1:-1,p.push(Ce.x,Ce.y,Ce.z),m.push(Ke/B),m.push(1-Le/H),me+=1}}for(let Le=0;Le<H;Le++)for(let Oe=0;Oe<B;Oe++){const Ke=_+Oe+ne*Le,ht=_+Oe+ne*(Le+1),oe=_+(Oe+1)+ne*(Le+1),ve=_+(Oe+1)+ne*Le;h.push(Ke,ht,ve),h.push(ht,oe,ve),se+=6}l.addGroup(y,se,I),y+=se,_+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function cn(i){const e={};for(let t=0;t<i.length;t++){const n=Rr(i[t]);for(const r in n)e[r]=n[r]}return e}function O0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const k0={clone:Rr,merge:cn};var B0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Yi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B0,this.fragmentShader=z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=O0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Md extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new z,ku=new Ae,Bu=new Ae;class gn extends Md{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,ku,Bu),t.subVectors(Bu,ku)}setViewOffset(e,t,n,r,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;o+=c.offsetX*r/h,t-=c.offsetY*n/d,r*=c.width/h,n*=c.height/d}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lr=-90,ur=1;class H0 extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(lr,ur,e,t);r.layers=this.layers,this.add(r);const o=new gn(lr,ur,e,t);o.layers=this.layers,this.add(o);const c=new gn(lr,ur,e,t);c.layers=this.layers,this.add(c);const l=new gn(lr,ur,e,t);l.layers=this.layers,this.add(l);const h=new gn(lr,ur,e,t);h.layers=this.layers,this.add(h);const d=new gn(lr,ur,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,c,l,h]=t;for(const d of t)this.remove(d);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Co)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,l,h,d,p]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,h),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(m,_,y),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class Ed extends tn{constructor(e,t,n,r,o,c,l,h,d,p){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,n,r,o,c,l,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V0 extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ed(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Nr(5,5,5),o=new Mi({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:yi});o.uniforms.tEquirect.value=t;const c=new en(r,o),l=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Gn),new H0(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(o)}}const Pa=new z,G0=new z,W0=new st;class _i{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Pa.subVectors(n,t).cross(G0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||W0.getNormalMatrix(e),r=this.coplanarPoint(Pa).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new ai,Ks=new z;class ll{constructor(e=new _i,t=new _i,n=new _i,r=new _i,o=new _i,c=new _i){this.planes=[e,t,n,r,o,c]}set(e,t,n,r,o,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(o),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii){const n=this.planes,r=e.elements,o=r[0],c=r[1],l=r[2],h=r[3],d=r[4],p=r[5],m=r[6],_=r[7],y=r[8],M=r[9],E=r[10],x=r[11],v=r[12],F=r[13],P=r[14],C=r[15];if(n[0].setComponents(h-o,_-d,x-y,C-v).normalize(),n[1].setComponents(h+o,_+d,x+y,C+v).normalize(),n[2].setComponents(h+c,_+p,x+M,C+F).normalize(),n[3].setComponents(h-c,_-p,x-M,C-F).normalize(),n[4].setComponents(h-l,_-m,x-E,C-P).normalize(),t===ii)n[5].setComponents(h+l,_+m,x+E,C+P).normalize();else if(t===Co)n[5].setComponents(l,m,E,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ks.x=r.normal.x>0?e.max.x:e.min.x,Ks.y=r.normal.y>0?e.max.y:e.min.y,Ks.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bd(){let i=null,e=!1,t=null,n=null;function r(o,c){t(o,c),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function X0(i){const e=new WeakMap;function t(l,h){const d=l.array,p=l.usage,m=d.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,d,p),l.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function n(l,h,d){const p=h.array,m=h.updateRanges;if(i.bindBuffer(d,l),m.length===0)i.bufferSubData(d,0,p);else{m.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<m.length;y++){const M=m[_],E=m[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,m[_]=E)}m.length=_+1;for(let y=0,M=m.length;y<M;y++){const E=m[y];i.bufferSubData(d,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=e.get(l);h&&(i.deleteBuffer(h.buffer),e.delete(l))}function c(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const p=e.get(l);(!p||p.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,t(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,l,h),d.version=l.version}}return{get:r,remove:o,update:c}}class zo extends Zt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,c=t/2,l=Math.floor(n),h=Math.floor(r),d=l+1,p=h+1,m=e/l,_=t/h,y=[],M=[],E=[],x=[];for(let v=0;v<p;v++){const F=v*_-c;for(let P=0;P<d;P++){const C=P*m-o;M.push(C,-F,0),E.push(0,0,1),x.push(P/l),x.push(1-v/h)}}for(let v=0;v<h;v++)for(let F=0;F<l;F++){const P=F+d*v,C=F+d*(v+1),V=F+1+d*(v+1),L=F+1+d*v;y.push(P,C,L),y.push(C,V,L)}this.setIndex(y),this.setAttribute("position",new Ut(M,3)),this.setAttribute("normal",new Ut(E,3)),this.setAttribute("uv",new Ut(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.widthSegments,e.heightSegments)}}var $0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j0=`#ifdef USE_ALPHAHASH
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
#endif`,Y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J0=`#ifdef USE_AOMAP
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
#endif`,Q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ey=`#ifdef USE_BATCHING
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
#endif`,ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ny=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ry=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sy=`#ifdef USE_IRIDESCENCE
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
#endif`,oy=`#ifdef USE_BUMPMAP
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
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
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
#endif`,my=`#define PI 3.141592653589793
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
} // validated`,_y=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gy=`vec3 transformedNormal = objectNormal;
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
#endif`,vy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,My="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ey=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,by=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cy=`#ifdef USE_ENVMAP
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
#endif`,Ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iy=`#ifdef USE_GRADIENTMAP
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
}`,Ny=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Oy=`uniform bool receiveShadow;
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
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,By=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gy=`PhysicalMaterial material;
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
#endif`,Wy=`struct PhysicalMaterial {
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
}`,Xy=`
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
#endif`,$y=`#if defined( RE_IndirectDiffuse )
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
#endif`,jy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ex=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tx=`#if defined( USE_POINTS_UV )
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
#endif`,nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`#ifdef USE_MORPHTARGETS
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
#endif`,cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,px=`#ifdef USE_NORMALMAP
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
#endif`,mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Px=`float getShadowMask() {
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
}`,Dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nx=`#ifdef USE_SKINNING
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
#endif`,Fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bx=`#ifdef USE_TRANSMISSION
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
#endif`,zx=`#ifdef USE_TRANSMISSION
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$x=`uniform sampler2D t2D;
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
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`#include <common>
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
}`,Jx=`#if DEPTH_PACKING == 3200
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
}`,Qx=`#define DISTANCE
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
}`,eS=`#define DISTANCE
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
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`uniform float scale;
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
}`,rS=`uniform vec3 diffuse;
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
}`,sS=`#include <common>
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
}`,oS=`uniform vec3 diffuse;
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
}`,aS=`#define LAMBERT
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
}`,cS=`#define LAMBERT
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
}`,lS=`#define MATCAP
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
}`,uS=`#define MATCAP
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
}`,hS=`#define NORMAL
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
}`,dS=`#define NORMAL
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
}`,fS=`#define PHONG
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
}`,pS=`#define PHONG
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
}`,mS=`#define STANDARD
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
}`,_S=`#define STANDARD
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
}`,gS=`#define TOON
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
}`,vS=`#define TOON
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
}`,yS=`uniform float size;
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
}`,xS=`uniform vec3 diffuse;
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
}`,SS=`#include <common>
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
}`,MS=`uniform vec3 color;
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
}`,ES=`uniform float rotation;
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
}`,bS=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:$0,alphahash_pars_fragment:j0,alphamap_fragment:Y0,alphamap_pars_fragment:q0,alphatest_fragment:Z0,alphatest_pars_fragment:K0,aomap_fragment:J0,aomap_pars_fragment:Q0,batching_pars_vertex:ey,batching_vertex:ty,begin_vertex:ny,beginnormal_vertex:iy,bsdfs:ry,iridescence_fragment:sy,bumpmap_pars_fragment:oy,clipping_planes_fragment:ay,clipping_planes_pars_fragment:cy,clipping_planes_pars_vertex:ly,clipping_planes_vertex:uy,color_fragment:hy,color_pars_fragment:dy,color_pars_vertex:fy,color_vertex:py,common:my,cube_uv_reflection_fragment:_y,defaultnormal_vertex:gy,displacementmap_pars_vertex:vy,displacementmap_vertex:yy,emissivemap_fragment:xy,emissivemap_pars_fragment:Sy,colorspace_fragment:My,colorspace_pars_fragment:Ey,envmap_fragment:by,envmap_common_pars_fragment:wy,envmap_pars_fragment:Ty,envmap_pars_vertex:Ay,envmap_physical_pars_fragment:ky,envmap_vertex:Cy,fog_vertex:Ry,fog_pars_vertex:Py,fog_fragment:Dy,fog_pars_fragment:Ly,gradientmap_pars_fragment:Iy,lightmap_pars_fragment:Ny,lights_lambert_fragment:Fy,lights_lambert_pars_fragment:Uy,lights_pars_begin:Oy,lights_toon_fragment:By,lights_toon_pars_fragment:zy,lights_phong_fragment:Hy,lights_phong_pars_fragment:Vy,lights_physical_fragment:Gy,lights_physical_pars_fragment:Wy,lights_fragment_begin:Xy,lights_fragment_maps:$y,lights_fragment_end:jy,logdepthbuf_fragment:Yy,logdepthbuf_pars_fragment:qy,logdepthbuf_pars_vertex:Zy,logdepthbuf_vertex:Ky,map_fragment:Jy,map_pars_fragment:Qy,map_particle_fragment:ex,map_particle_pars_fragment:tx,metalnessmap_fragment:nx,metalnessmap_pars_fragment:ix,morphinstance_vertex:rx,morphcolor_vertex:sx,morphnormal_vertex:ox,morphtarget_pars_vertex:ax,morphtarget_vertex:cx,normal_fragment_begin:lx,normal_fragment_maps:ux,normal_pars_fragment:hx,normal_pars_vertex:dx,normal_vertex:fx,normalmap_pars_fragment:px,clearcoat_normal_fragment_begin:mx,clearcoat_normal_fragment_maps:_x,clearcoat_pars_fragment:gx,iridescence_pars_fragment:vx,opaque_fragment:yx,packing:xx,premultiplied_alpha_fragment:Sx,project_vertex:Mx,dithering_fragment:Ex,dithering_pars_fragment:bx,roughnessmap_fragment:wx,roughnessmap_pars_fragment:Tx,shadowmap_pars_fragment:Ax,shadowmap_pars_vertex:Cx,shadowmap_vertex:Rx,shadowmask_pars_fragment:Px,skinbase_vertex:Dx,skinning_pars_vertex:Lx,skinning_vertex:Ix,skinnormal_vertex:Nx,specularmap_fragment:Fx,specularmap_pars_fragment:Ux,tonemapping_fragment:Ox,tonemapping_pars_fragment:kx,transmission_fragment:Bx,transmission_pars_fragment:zx,uv_pars_fragment:Hx,uv_pars_vertex:Vx,uv_vertex:Gx,worldpos_vertex:Wx,background_vert:Xx,background_frag:$x,backgroundCube_vert:jx,backgroundCube_frag:Yx,cube_vert:qx,cube_frag:Zx,depth_vert:Kx,depth_frag:Jx,distanceRGBA_vert:Qx,distanceRGBA_frag:eS,equirect_vert:tS,equirect_frag:nS,linedashed_vert:iS,linedashed_frag:rS,meshbasic_vert:sS,meshbasic_frag:oS,meshlambert_vert:aS,meshlambert_frag:cS,meshmatcap_vert:lS,meshmatcap_frag:uS,meshnormal_vert:hS,meshnormal_frag:dS,meshphong_vert:fS,meshphong_frag:pS,meshphysical_vert:mS,meshphysical_frag:_S,meshtoon_vert:gS,meshtoon_frag:vS,points_vert:yS,points_frag:xS,shadow_vert:SS,shadow_frag:MS,sprite_vert:ES,sprite_frag:bS},De={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Vn={basic:{uniforms:cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ot(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:cn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:cn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ot(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:cn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:cn([De.points,De.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:cn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:cn([De.common,De.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:cn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:cn([De.sprite,De.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:cn([De.common,De.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:cn([De.lights,De.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Vn.physical={uniforms:cn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Js={r:0,b:0,g:0},Fi=new An,wS=new at;function TS(i,e,t,n,r,o,c){const l=new ot(0);let h=o===!0?0:1,d,p,m=null,_=0,y=null;function M(F){let P=F.isScene===!0?F.background:null;return P&&P.isTexture&&(P=(F.backgroundBlurriness>0?t:e).get(P)),P}function E(F){let P=!1;const C=M(F);C===null?v(l,h):C&&C.isColor&&(v(C,1),P=!0);const V=i.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(F,P){const C=M(P);C&&(C.isCubeTexture||C.mapping===ko)?(p===void 0&&(p=new en(new Nr(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Rr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Fi.copy(P.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),p.material.uniforms.envMap.value=C,p.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(wS.makeRotationFromEuler(Fi)),p.material.toneMapped=St.getTransfer(C.colorSpace)!==Tt,(m!==C||_!==C.version||y!==i.toneMapping)&&(p.material.needsUpdate=!0,m=C,_=C.version,y=i.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new en(new zo(2,2),new Mi({name:"BackgroundMaterial",uniforms:Rr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.toneMapped=St.getTransfer(C.colorSpace)!==Tt,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(m!==C||_!==C.version||y!==i.toneMapping)&&(d.material.needsUpdate=!0,m=C,_=C.version,y=i.toneMapping),d.layers.enableAll(),F.unshift(d,d.geometry,d.material,0,0,null))}function v(F,P){F.getRGB(Js,Sd(i)),n.buffers.color.setClear(Js.r,Js.g,Js.b,P,c)}return{getClearColor:function(){return l},setClearColor:function(F,P=1){l.set(F),h=P,v(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(F){h=F,v(l,h)},render:E,addToRenderList:x}}function AS(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=_(null);let o=r,c=!1;function l(b,O,q,Z,Q){let ne=!1;const ie=m(Z,q,O);o!==ie&&(o=ie,d(o.object)),ne=y(b,Z,q,Q),ne&&M(b,Z,q,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(ne||c)&&(c=!1,C(b,O,q,Z),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function h(){return i.createVertexArray()}function d(b){return i.bindVertexArray(b)}function p(b){return i.deleteVertexArray(b)}function m(b,O,q){const Z=q.wireframe===!0;let Q=n[b.id];Q===void 0&&(Q={},n[b.id]=Q);let ne=Q[O.id];ne===void 0&&(ne={},Q[O.id]=ne);let ie=ne[Z];return ie===void 0&&(ie=_(h()),ne[Z]=ie),ie}function _(b){const O=[],q=[],Z=[];for(let Q=0;Q<t;Q++)O[Q]=0,q[Q]=0,Z[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:Z,object:b,attributes:{},index:null}}function y(b,O,q,Z){const Q=o.attributes,ne=O.attributes;let ie=0;const me=q.getAttributes();for(const se in me)if(me[se].location>=0){const Le=Q[se];let Oe=ne[se];if(Oe===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(Oe=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(Oe=b.instanceColor)),Le===void 0||Le.attribute!==Oe||Oe&&Le.data!==Oe.data)return!0;ie++}return o.attributesNum!==ie||o.index!==Z}function M(b,O,q,Z){const Q={},ne=O.attributes;let ie=0;const me=q.getAttributes();for(const se in me)if(me[se].location>=0){let Le=ne[se];Le===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(Le=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(Le=b.instanceColor));const Oe={};Oe.attribute=Le,Le&&Le.data&&(Oe.data=Le.data),Q[se]=Oe,ie++}o.attributes=Q,o.attributesNum=ie,o.index=Z}function E(){const b=o.newAttributes;for(let O=0,q=b.length;O<q;O++)b[O]=0}function x(b){v(b,0)}function v(b,O){const q=o.newAttributes,Z=o.enabledAttributes,Q=o.attributeDivisors;q[b]=1,Z[b]===0&&(i.enableVertexAttribArray(b),Z[b]=1),Q[b]!==O&&(i.vertexAttribDivisor(b,O),Q[b]=O)}function F(){const b=o.newAttributes,O=o.enabledAttributes;for(let q=0,Z=O.length;q<Z;q++)O[q]!==b[q]&&(i.disableVertexAttribArray(q),O[q]=0)}function P(b,O,q,Z,Q,ne,ie){ie===!0?i.vertexAttribIPointer(b,O,q,Q,ne):i.vertexAttribPointer(b,O,q,Z,Q,ne)}function C(b,O,q,Z){E();const Q=Z.attributes,ne=q.getAttributes(),ie=O.defaultAttributeValues;for(const me in ne){const se=ne[me];if(se.location>=0){let Ce=Q[me];if(Ce===void 0&&(me==="instanceMatrix"&&b.instanceMatrix&&(Ce=b.instanceMatrix),me==="instanceColor"&&b.instanceColor&&(Ce=b.instanceColor)),Ce!==void 0){const Le=Ce.normalized,Oe=Ce.itemSize,Ke=e.get(Ce);if(Ke===void 0)continue;const ht=Ke.buffer,oe=Ke.type,ve=Ke.bytesPerElement,Ue=oe===i.INT||oe===i.UNSIGNED_INT||Ce.gpuType===el;if(Ce.isInterleavedBufferAttribute){const be=Ce.data,pe=be.stride,Me=Ce.offset;if(be.isInstancedInterleavedBuffer){for(let Je=0;Je<se.locationSize;Je++)v(se.location+Je,be.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Je=0;Je<se.locationSize;Je++)x(se.location+Je);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let Je=0;Je<se.locationSize;Je++)P(se.location+Je,Oe/se.locationSize,oe,Le,pe*ve,(Me+Oe/se.locationSize*Je)*ve,Ue)}else{if(Ce.isInstancedBufferAttribute){for(let be=0;be<se.locationSize;be++)v(se.location+be,Ce.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let be=0;be<se.locationSize;be++)x(se.location+be);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let be=0;be<se.locationSize;be++)P(se.location+be,Oe/se.locationSize,oe,Le,Oe*ve,Oe/se.locationSize*be*ve,Ue)}}else if(ie!==void 0){const Le=ie[me];if(Le!==void 0)switch(Le.length){case 2:i.vertexAttrib2fv(se.location,Le);break;case 3:i.vertexAttrib3fv(se.location,Le);break;case 4:i.vertexAttrib4fv(se.location,Le);break;default:i.vertexAttrib1fv(se.location,Le)}}}}F()}function V(){H();for(const b in n){const O=n[b];for(const q in O){const Z=O[q];for(const Q in Z)p(Z[Q].object),delete Z[Q];delete O[q]}delete n[b]}}function L(b){if(n[b.id]===void 0)return;const O=n[b.id];for(const q in O){const Z=O[q];for(const Q in Z)p(Z[Q].object),delete Z[Q];delete O[q]}delete n[b.id]}function B(b){for(const O in n){const q=n[O];if(q[b.id]===void 0)continue;const Z=q[b.id];for(const Q in Z)p(Z[Q].object),delete Z[Q];delete q[b.id]}}function H(){I(),c=!0,o!==r&&(o=r,d(o.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:H,resetDefaultState:I,dispose:V,releaseStatesOfGeometry:L,releaseStatesOfProgram:B,initAttributes:E,enableAttribute:x,disableUnusedAttributes:F}}function CS(i,e,t){let n;function r(d){n=d}function o(d,p){i.drawArrays(n,d,p),t.update(p,n,1)}function c(d,p,m){m!==0&&(i.drawArraysInstanced(n,d,p,m),t.update(p,n,m))}function l(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,p,0,m);let y=0;for(let M=0;M<m;M++)y+=p[M];t.update(y,n,1)}function h(d,p,m,_){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<d.length;M++)c(d[M],p[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(n,d,0,p,0,_,0,m);let M=0;for(let E=0;E<m;E++)M+=p[E]*_[E];t.update(M,n,1)}}this.setMode=r,this.render=o,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function RS(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(B){return!(B!==wn&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(B){const H=B===ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==oi&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Fn&&!H)}function h(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=h(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),F=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),V=M>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:m,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:F,maxVaryings:P,maxFragmentUniforms:C,vertexTextures:V,maxSamples:L}}function PS(i){const e=this;let t=null,n=0,r=!1,o=!1;const c=new _i,l=new st,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const y=m.length!==0||_||n!==0||r;return r=_,n=m.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,_){t=p(m,_,0)},this.setState=function(m,_,y){const M=m.clippingPlanes,E=m.clipIntersection,x=m.clipShadows,v=i.get(m);if(!r||M===null||M.length===0||o&&!x)o?p(null):d();else{const F=o?0:n,P=F*4;let C=v.clippingState||null;h.value=C,C=p(M,_,P,y);for(let V=0;V!==P;++V)C[V]=t[V];v.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=F}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,_,y,M){const E=m!==null?m.length:0;let x=null;if(E!==0){if(x=h.value,M!==!0||x===null){const v=y+E*4,F=_.matrixWorldInverse;l.getNormalMatrix(F),(x===null||x.length<v)&&(x=new Float32Array(v));for(let P=0,C=y;P!==E;++P,C+=4)c.copy(m[P]).applyMatrix4(F,l),c.normal.toArray(x,C),x[C+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function DS(i){let e=new WeakMap;function t(c,l){return l===lc?c.mapping=br:l===uc&&(c.mapping=wr),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===lc||l===uc)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const d=new V0(h.height);return d.fromEquirectangularTexture(i,c),e.set(c,d),c.addEventListener("dispose",r),t(d.texture,c.mapping)}else return null}}return c}function r(c){const l=c.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class wd extends Md{constructor(e=-1,t=1,n=1,r=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,c=n+e,l=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,c=o+d*this.view.width,l-=p*this.view.offsetY,h=l-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mr=4,zu=[.125,.215,.35,.446,.526,.582],zi=20,Da=new wd,Hu=new ot;let La=null,Ia=0,Na=0,Fa=!1;const Oi=(1+Math.sqrt(5))/2,hr=1/Oi,Vu=[new z(-Oi,hr,0),new z(Oi,hr,0),new z(-hr,0,Oi),new z(hr,0,Oi),new z(0,Oi,-hr),new z(0,Oi,hr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Gu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(La,Ia,Na),this._renderer.xr.enabled=Fa,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:ls,format:wn,colorSpace:Lr,depthBuffer:!1},r=Wu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wu(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LS(o)),this._blurMaterial=IS(o,e,t)}return r}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,Da)}_sceneToCubeUV(e,t,n,r){const l=new gn(90,1,t,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,_=p.toneMapping;p.getClearColor(Hu),p.toneMapping=xi,p.autoClear=!1;const y=new Ro({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),M=new en(new Nr,y);let E=!1;const x=e.background;x?x.isColor&&(y.color.copy(x),e.background=null,E=!0):(y.color.copy(Hu),E=!0);for(let v=0;v<6;v++){const F=v%3;F===0?(l.up.set(0,h[v],0),l.lookAt(d[v],0,0)):F===1?(l.up.set(0,0,h[v]),l.lookAt(0,d[v],0)):(l.up.set(0,h[v],0),l.lookAt(0,0,d[v]));const P=this._cubeSize;Qs(r,F*P,v>2?P:0,P,P),p.setRenderTarget(r),E&&p.render(M,l),p.render(e,l)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=_,p.autoClear=m,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===br||e.mapping===wr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xu());const o=r?this._cubemapMaterial:this._equirectMaterial,c=new en(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;const h=this._cubeSize;Qs(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(c,Da)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=Vu[(r-o-1)%Vu.length];this._blur(e,o-1,o,c,l)}t.autoClear=n}_blur(e,t,n,r,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",o),this._halfBlur(c,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,c,l){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new en(this._lodPlanes[r],d),_=d.uniforms,y=this._sizeLods[n]-1,M=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*zi-1),E=o/M,x=isFinite(o)?1+Math.floor(p*E):zi;x>zi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${zi}`);const v=[];let F=0;for(let B=0;B<zi;++B){const H=B/E,I=Math.exp(-H*H/2);v.push(I),B===0?F+=I:B<x&&(F+=2*I)}for(let B=0;B<v.length;B++)v[B]=v[B]/F;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=v,_.latitudinal.value=c==="latitudinal",l&&(_.poleAxis.value=l);const{_lodMax:P}=this;_.dTheta.value=M,_.mipInt.value=P-n;const C=this._sizeLods[r],V=3*C*(r>P-mr?r-P+mr:0),L=4*(this._cubeSize-C);Qs(t,V,L,3*C,2*C),h.setRenderTarget(t),h.render(m,Da)}}function LS(i){const e=[],t=[],n=[];let r=i;const o=i-mr+1+zu.length;for(let c=0;c<o;c++){const l=Math.pow(2,r);t.push(l);let h=1/l;c>i-mr?h=zu[c-i+mr-1]:c===0&&(h=0),n.push(h);const d=1/(l-2),p=-d,m=1+d,_=[p,p,m,p,m,m,p,p,m,m,p,m],y=6,M=6,E=3,x=2,v=1,F=new Float32Array(E*M*y),P=new Float32Array(x*M*y),C=new Float32Array(v*M*y);for(let L=0;L<y;L++){const B=L%3*2/3-1,H=L>2?0:-1,I=[B,H,0,B+2/3,H,0,B+2/3,H+1,0,B,H,0,B+2/3,H+1,0,B,H+1,0];F.set(I,E*M*L),P.set(_,x*M*L);const b=[L,L,L,L,L,L];C.set(b,v*M*L)}const V=new Zt;V.setAttribute("position",new qt(F,E)),V.setAttribute("uv",new qt(P,x)),V.setAttribute("faceIndex",new qt(C,v)),e.push(V),r>mr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wu(i,e,t){const n=new Xi(i,e,t);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function IS(i,e,t){const n=new Float32Array(zi),r=new z(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ul(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Xu(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function $u(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}function NS(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const h=l.mapping,d=h===lc||h===uc,p=h===br||h===wr;if(d||p){let m=e.get(l);const _=m!==void 0?m.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==_)return t===null&&(t=new Gu(i)),m=d?t.fromEquirectangular(l,m):t.fromCubemap(l,m),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),m.texture;if(m!==void 0)return m.texture;{const y=l.image;return d&&y&&y.height>0||p&&y&&r(y)?(t===null&&(t=new Gu(i)),m=d?t.fromEquirectangular(l):t.fromCubemap(l),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),l.addEventListener("dispose",o),m.texture):null}}}return l}function r(l){let h=0;const d=6;for(let p=0;p<d;p++)l[p]!==void 0&&h++;return h===d}function o(l){const h=l.target;h.removeEventListener("dispose",o);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function FS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Kr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function US(i,e,t,n){const r={},o=new WeakMap;function c(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);for(const M in _.morphAttributes){const E=_.morphAttributes[M];for(let x=0,v=E.length;x<v;x++)e.remove(E[x])}_.removeEventListener("dispose",c),delete r[_.id];const y=o.get(_);y&&(e.remove(y),o.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(m,_){return r[_.id]===!0||(_.addEventListener("dispose",c),r[_.id]=!0,t.memory.geometries++),_}function h(m){const _=m.attributes;for(const M in _)e.update(_[M],i.ARRAY_BUFFER);const y=m.morphAttributes;for(const M in y){const E=y[M];for(let x=0,v=E.length;x<v;x++)e.update(E[x],i.ARRAY_BUFFER)}}function d(m){const _=[],y=m.index,M=m.attributes.position;let E=0;if(y!==null){const F=y.array;E=y.version;for(let P=0,C=F.length;P<C;P+=3){const V=F[P+0],L=F[P+1],B=F[P+2];_.push(V,L,L,B,B,V)}}else if(M!==void 0){const F=M.array;E=M.version;for(let P=0,C=F.length/3-1;P<C;P+=3){const V=P+0,L=P+1,B=P+2;_.push(V,L,L,B,B,V)}}else return;const x=new(md(_)?xd:yd)(_,1);x.version=E;const v=o.get(m);v&&e.remove(v),o.set(m,x)}function p(m){const _=o.get(m);if(_){const y=m.index;y!==null&&_.version<y.version&&d(m)}else d(m);return o.get(m)}return{get:l,update:h,getWireframeAttribute:p}}function OS(i,e,t){let n;function r(_){n=_}let o,c;function l(_){o=_.type,c=_.bytesPerElement}function h(_,y){i.drawElements(n,y,o,_*c),t.update(y,n,1)}function d(_,y,M){M!==0&&(i.drawElementsInstanced(n,y,o,_*c,M),t.update(y,n,M))}function p(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,o,_,0,M);let x=0;for(let v=0;v<M;v++)x+=y[v];t.update(x,n,1)}function m(_,y,M,E){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<_.length;v++)d(_[v]/c,y[v],E[v]);else{x.multiDrawElementsInstancedWEBGL(n,y,0,o,_,0,E,0,M);let v=0;for(let F=0;F<M;F++)v+=y[F]*E[F];t.update(v,n,1)}}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function kS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,c,l){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=l*(o/3);break;case i.LINES:t.lines+=l*(o/2);break;case i.LINE_STRIP:t.lines+=l*(o-1);break;case i.LINE_LOOP:t.lines+=l*o;break;case i.POINTS:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function BS(i,e,t){const n=new WeakMap,r=new Et;function o(c,l,h){const d=c.morphTargetInfluences,p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=p!==void 0?p.length:0;let _=n.get(l);if(_===void 0||_.count!==m){let I=function(){B.dispose(),n.delete(l),l.removeEventListener("dispose",I)};_!==void 0&&_.texture.dispose();const y=l.morphAttributes.position!==void 0,M=l.morphAttributes.normal!==void 0,E=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],v=l.morphAttributes.normal||[],F=l.morphAttributes.color||[];let P=0;y===!0&&(P=1),M===!0&&(P=2),E===!0&&(P=3);let C=l.attributes.position.count*P,V=1;C>e.maxTextureSize&&(V=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const L=new Float32Array(C*V*4*m),B=new gd(L,C,V,m);B.type=Fn,B.needsUpdate=!0;const H=P*4;for(let b=0;b<m;b++){const O=x[b],q=v[b],Z=F[b],Q=C*V*4*b;for(let ne=0;ne<O.count;ne++){const ie=ne*H;y===!0&&(r.fromBufferAttribute(O,ne),L[Q+ie+0]=r.x,L[Q+ie+1]=r.y,L[Q+ie+2]=r.z,L[Q+ie+3]=0),M===!0&&(r.fromBufferAttribute(q,ne),L[Q+ie+4]=r.x,L[Q+ie+5]=r.y,L[Q+ie+6]=r.z,L[Q+ie+7]=0),E===!0&&(r.fromBufferAttribute(Z,ne),L[Q+ie+8]=r.x,L[Q+ie+9]=r.y,L[Q+ie+10]=r.z,L[Q+ie+11]=Z.itemSize===4?r.w:1)}}_={count:m,texture:B,size:new Ae(C,V)},n.set(l,_),l.addEventListener("dispose",I)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let y=0;for(let E=0;E<d.length;E++)y+=d[E];const M=l.morphTargetsRelative?1:1-y;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",d)}h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:o}}function zS(i,e,t,n){let r=new WeakMap;function o(h){const d=n.render.frame,p=h.geometry,m=e.get(h,p);if(r.get(m)!==d&&(e.update(m),r.set(m,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==d&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){const _=h.skeleton;r.get(_)!==d&&(_.update(),r.set(_,d))}return m}function c(){r=new WeakMap}function l(h){const d=h.target;d.removeEventListener("dispose",l),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:c}}class Td extends tn{constructor(e,t,n,r,o,c,l,h,d,p=yr){if(p!==yr&&p!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===yr&&(n=Wi),n===void 0&&p===Ar&&(n=Tr),super(null,r,o,c,l,h,p,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:yn,this.minFilter=h!==void 0?h:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ad=new tn,ju=new Td(1,1),Cd=new gd,Rd=new T0,Pd=new Ed,Yu=[],qu=[],Zu=new Float32Array(16),Ku=new Float32Array(9),Ju=new Float32Array(4);function Fr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=Yu[r];if(o===void 0&&(o=new Float32Array(r),Yu[r]=o),e!==0){n.toArray(o,0);for(let c=1,l=0;c!==e;++c)l+=t,i[c].toArray(o,l)}return o}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ho(i,e){let t=qu[e];t===void 0&&(t=new Int32Array(e),qu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function HS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function VS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function GS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function WS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function XS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Ju.set(n),i.uniformMatrix2fv(this.addr,!1,Ju),Xt(t,n)}}function $S(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Ku.set(n),i.uniformMatrix3fv(this.addr,!1,Ku),Xt(t,n)}}function jS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Zu.set(n),i.uniformMatrix4fv(this.addr,!1,Zu),Xt(t,n)}}function YS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function ZS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function KS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function JS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function QS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function eM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function tM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function nM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(ju.compareFunction=pd,o=ju):o=Ad,t.setTexture2D(e||o,r)}function iM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Rd,r)}function rM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Pd,r)}function sM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Cd,r)}function oM(i){switch(i){case 5126:return HS;case 35664:return VS;case 35665:return GS;case 35666:return WS;case 35674:return XS;case 35675:return $S;case 35676:return jS;case 5124:case 35670:return YS;case 35667:case 35671:return qS;case 35668:case 35672:return ZS;case 35669:case 35673:return KS;case 5125:return JS;case 36294:return QS;case 36295:return eM;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return sM}}function aM(i,e){i.uniform1fv(this.addr,e)}function cM(i,e){const t=Fr(e,this.size,2);i.uniform2fv(this.addr,t)}function lM(i,e){const t=Fr(e,this.size,3);i.uniform3fv(this.addr,t)}function uM(i,e){const t=Fr(e,this.size,4);i.uniform4fv(this.addr,t)}function hM(i,e){const t=Fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dM(i,e){const t=Fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fM(i,e){const t=Fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pM(i,e){i.uniform1iv(this.addr,e)}function mM(i,e){i.uniform2iv(this.addr,e)}function _M(i,e){i.uniform3iv(this.addr,e)}function gM(i,e){i.uniform4iv(this.addr,e)}function vM(i,e){i.uniform1uiv(this.addr,e)}function yM(i,e){i.uniform2uiv(this.addr,e)}function xM(i,e){i.uniform3uiv(this.addr,e)}function SM(i,e){i.uniform4uiv(this.addr,e)}function MM(i,e,t){const n=this.cache,r=e.length,o=Ho(t,r);Wt(n,o)||(i.uniform1iv(this.addr,o),Xt(n,o));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||Ad,o[c])}function EM(i,e,t){const n=this.cache,r=e.length,o=Ho(t,r);Wt(n,o)||(i.uniform1iv(this.addr,o),Xt(n,o));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||Rd,o[c])}function bM(i,e,t){const n=this.cache,r=e.length,o=Ho(t,r);Wt(n,o)||(i.uniform1iv(this.addr,o),Xt(n,o));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||Pd,o[c])}function wM(i,e,t){const n=this.cache,r=e.length,o=Ho(t,r);Wt(n,o)||(i.uniform1iv(this.addr,o),Xt(n,o));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||Cd,o[c])}function TM(i){switch(i){case 5126:return aM;case 35664:return cM;case 35665:return lM;case 35666:return uM;case 35674:return hM;case 35675:return dM;case 35676:return fM;case 5124:case 35670:return pM;case 35667:case 35671:return mM;case 35668:case 35672:return _M;case 35669:case 35673:return gM;case 5125:return vM;case 36294:return yM;case 36295:return xM;case 36296:return SM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return wM}}class AM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oM(t.type)}}class CM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TM(t.type)}}class RM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,c=r.length;o!==c;++o){const l=r[o];l.setValue(e,t[l.id],n)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function Qu(i,e){i.seq.push(e),i.map[e.id]=e}function PM(i,e,t){const n=i.name,r=n.length;for(Ua.lastIndex=0;;){const o=Ua.exec(n),c=Ua.lastIndex;let l=o[1];const h=o[2]==="]",d=o[3];if(h&&(l=l|0),d===void 0||d==="["&&c+2===r){Qu(t,d===void 0?new AM(l,i,e):new CM(l,i,e));break}else{let m=t.map[l];m===void 0&&(m=new RM(l),Qu(t,m)),t=m}}}class bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);PM(o,c,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,c=t.length;o!==c;++o){const l=t[o],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function eh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const DM=37297;let LM=0;function IM(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=r;c<o;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}const th=new st;function NM(i){St._getMatrix(th,St.workingColorSpace,i);const e=`mat3( ${th.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(i)){case Bo:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+IM(i.getShaderSource(e),c)}else return r}function FM(i,e){const t=NM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function UM(i,e){let t;switch(e){case Fv:t="Linear";break;case Uv:t="Reinhard";break;case Ov:t="Cineon";break;case kv:t="ACESFilmic";break;case zv:t="AgX";break;case Hv:t="Neutral";break;case Bv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const eo=new z;function OM(){St.getLuminanceCoefficients(eo);const i=eo.x.toFixed(4),e=eo.y.toFixed(4),t=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function BM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),c=o.name;let l=1;o.type===i.FLOAT_MAT2&&(l=2),o.type===i.FLOAT_MAT3&&(l=3),o.type===i.FLOAT_MAT4&&(l=4),t[c]={type:o.type,location:i.getAttribLocation(e,c),locationSize:l}}return t}function Jr(i){return i!==""}function ih(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(i){return i.replace(HM,GM)}const VM=new Map;function GM(i,e){let t=ut[e];if(t===void 0){const n=VM.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Hc(t)}const WM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sh(i){return i.replace(WM,XM)}function XM(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function oh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function $M(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===td?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pv?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function jM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case br:case wr:e="ENVMAP_TYPE_CUBE";break;case ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wr:e="ENVMAP_MODE_REFRACTION";break}return e}function qM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nd:e="ENVMAP_BLENDING_MULTIPLY";break;case Iv:e="ENVMAP_BLENDING_MIX";break;case Nv:e="ENVMAP_BLENDING_ADD";break}return e}function ZM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function KM(i,e,t,n){const r=i.getContext(),o=t.defines;let c=t.vertexShader,l=t.fragmentShader;const h=$M(t),d=jM(t),p=YM(t),m=qM(t),_=ZM(t),y=kM(t),M=BM(o),E=r.createProgram();let x,v,F=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Jr).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Jr).join(`
`),v.length>0&&(v+=`
`)):(x=[oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),v=[oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?ut.tonemapping_pars_fragment:"",t.toneMapping!==xi?UM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,FM("linearToOutputTexel",t.outputColorSpace),OM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jr).join(`
`)),c=Hc(c),c=ih(c,t),c=rh(c,t),l=Hc(l),l=ih(l,t),l=rh(l,t),c=sh(c),l=sh(l),t.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=F+x+c,C=F+v+l,V=eh(r,r.VERTEX_SHADER,P),L=eh(r,r.FRAGMENT_SHADER,C);r.attachShader(E,V),r.attachShader(E,L),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function B(O){if(i.debug.checkShaderErrors){const q=r.getProgramInfoLog(E).trim(),Z=r.getShaderInfoLog(V).trim(),Q=r.getShaderInfoLog(L).trim();let ne=!0,ie=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,V,L);else{const me=nh(r,V,"vertex"),se=nh(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+q+`
`+me+`
`+se)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Z===""||Q==="")&&(ie=!1);ie&&(O.diagnostics={runnable:ne,programLog:q,vertexShader:{log:Z,prefix:x},fragmentShader:{log:Q,prefix:v}})}r.deleteShader(V),r.deleteShader(L),H=new bo(r,E),I=zM(r,E)}let H;this.getUniforms=function(){return H===void 0&&B(this),H};let I;this.getAttributes=function(){return I===void 0&&B(this),I};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(E,DM)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LM++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=V,this.fragmentShader=L,this}let JM=0;class QM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new eE(e),t.set(e,n)),n}}class eE{constructor(e){this.id=JM++,this.code=e,this.usedTimes=0}}function tE(i,e,t,n,r,o,c){const l=new cl,h=new QM,d=new Set,p=[],m=r.logarithmicDepthBuffer,_=r.vertexTextures;let y=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(I){return d.add(I),I===0?"uv":`uv${I}`}function x(I,b,O,q,Z){const Q=q.fog,ne=Z.geometry,ie=I.isMeshStandardMaterial?q.environment:null,me=(I.isMeshStandardMaterial?t:e).get(I.envMap||ie),se=me&&me.mapping===ko?me.image.height:null,Ce=M[I.type];I.precision!==null&&(y=r.getMaxPrecision(I.precision),y!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",y,"instead."));const Le=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Oe=Le!==void 0?Le.length:0;let Ke=0;ne.morphAttributes.position!==void 0&&(Ke=1),ne.morphAttributes.normal!==void 0&&(Ke=2),ne.morphAttributes.color!==void 0&&(Ke=3);let ht,oe,ve,Ue;if(Ce){const dt=Vn[Ce];ht=dt.vertexShader,oe=dt.fragmentShader}else ht=I.vertexShader,oe=I.fragmentShader,h.update(I),ve=h.getVertexShaderID(I),Ue=h.getFragmentShaderID(I);const be=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Me=Z.isInstancedMesh===!0,Je=Z.isBatchedMesh===!0,ct=!!I.map,X=!!I.matcap,he=!!me,k=!!I.aoMap,$e=!!I.lightMap,Ee=!!I.bumpMap,ze=!!I.normalMap,Re=!!I.displacementMap,Ze=!!I.emissiveMap,Fe=!!I.metalnessMap,N=!!I.roughnessMap,R=I.anisotropy>0,ee=I.clearcoat>0,de=I.dispersion>0,fe=I.iridescence>0,ce=I.sheen>0,Ve=I.transmission>0,Pe=R&&!!I.anisotropyMap,Be=ee&&!!I.clearcoatMap,ft=ee&&!!I.clearcoatNormalMap,Te=ee&&!!I.clearcoatRoughnessMap,Ge=fe&&!!I.iridescenceMap,et=fe&&!!I.iridescenceThicknessMap,nt=ce&&!!I.sheenColorMap,We=ce&&!!I.sheenRoughnessMap,pt=!!I.specularMap,it=!!I.specularColorMap,wt=!!I.specularIntensityMap,G=Ve&&!!I.transmissionMap,Ie=Ve&&!!I.thicknessMap,ae=!!I.gradientMap,_e=!!I.alphaMap,J=I.alphaTest>0,K=!!I.alphaHash,Qe=!!I.extensions;let Lt=xi;I.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Lt=i.toneMapping);const It={shaderID:Ce,shaderType:I.type,shaderName:I.name,vertexShader:ht,fragmentShader:oe,defines:I.defines,customVertexShaderID:ve,customFragmentShaderID:Ue,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:y,batching:Je,batchingColor:Je&&Z._colorsTexture!==null,instancing:Me,instancingColor:Me&&Z.instanceColor!==null,instancingMorph:Me&&Z.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Lr,alphaToCoverage:!!I.alphaToCoverage,map:ct,matcap:X,envMap:he,envMapMode:he&&me.mapping,envMapCubeUVHeight:se,aoMap:k,lightMap:$e,bumpMap:Ee,normalMap:ze,displacementMap:_&&Re,emissiveMap:Ze,normalMapObjectSpace:ze&&I.normalMapType===jv,normalMapTangentSpace:ze&&I.normalMapType===fd,metalnessMap:Fe,roughnessMap:N,anisotropy:R,anisotropyMap:Pe,clearcoat:ee,clearcoatMap:Be,clearcoatNormalMap:ft,clearcoatRoughnessMap:Te,dispersion:de,iridescence:fe,iridescenceMap:Ge,iridescenceThicknessMap:et,sheen:ce,sheenColorMap:nt,sheenRoughnessMap:We,specularMap:pt,specularColorMap:it,specularIntensityMap:wt,transmission:Ve,transmissionMap:G,thicknessMap:Ie,gradientMap:ae,opaque:I.transparent===!1&&I.blending===vr&&I.alphaToCoverage===!1,alphaMap:_e,alphaTest:J,alphaHash:K,combine:I.combine,mapUv:ct&&E(I.map.channel),aoMapUv:k&&E(I.aoMap.channel),lightMapUv:$e&&E(I.lightMap.channel),bumpMapUv:Ee&&E(I.bumpMap.channel),normalMapUv:ze&&E(I.normalMap.channel),displacementMapUv:Re&&E(I.displacementMap.channel),emissiveMapUv:Ze&&E(I.emissiveMap.channel),metalnessMapUv:Fe&&E(I.metalnessMap.channel),roughnessMapUv:N&&E(I.roughnessMap.channel),anisotropyMapUv:Pe&&E(I.anisotropyMap.channel),clearcoatMapUv:Be&&E(I.clearcoatMap.channel),clearcoatNormalMapUv:ft&&E(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&E(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&E(I.iridescenceMap.channel),iridescenceThicknessMapUv:et&&E(I.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&E(I.sheenColorMap.channel),sheenRoughnessMapUv:We&&E(I.sheenRoughnessMap.channel),specularMapUv:pt&&E(I.specularMap.channel),specularColorMapUv:it&&E(I.specularColorMap.channel),specularIntensityMapUv:wt&&E(I.specularIntensityMap.channel),transmissionMapUv:G&&E(I.transmissionMap.channel),thicknessMapUv:Ie&&E(I.thicknessMap.channel),alphaMapUv:_e&&E(I.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(ze||R),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ne.attributes.uv&&(ct||_e),fog:!!Q,useFog:I.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:pe,skinning:Z.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:ct&&I.map.isVideoTexture===!0&&St.getTransfer(I.map.colorSpace)===Tt,decodeVideoTextureEmissive:Ze&&I.emissiveMap.isVideoTexture===!0&&St.getTransfer(I.emissiveMap.colorSpace)===Tt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===ni,flipSided:I.side===ln,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Qe&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&I.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return It.vertexUv1s=d.has(1),It.vertexUv2s=d.has(2),It.vertexUv3s=d.has(3),d.clear(),It}function v(I){const b=[];if(I.shaderID?b.push(I.shaderID):(b.push(I.customVertexShaderID),b.push(I.customFragmentShaderID)),I.defines!==void 0)for(const O in I.defines)b.push(O),b.push(I.defines[O]);return I.isRawShaderMaterial===!1&&(F(b,I),P(b,I),b.push(i.outputColorSpace)),b.push(I.customProgramCacheKey),b.join()}function F(I,b){I.push(b.precision),I.push(b.outputColorSpace),I.push(b.envMapMode),I.push(b.envMapCubeUVHeight),I.push(b.mapUv),I.push(b.alphaMapUv),I.push(b.lightMapUv),I.push(b.aoMapUv),I.push(b.bumpMapUv),I.push(b.normalMapUv),I.push(b.displacementMapUv),I.push(b.emissiveMapUv),I.push(b.metalnessMapUv),I.push(b.roughnessMapUv),I.push(b.anisotropyMapUv),I.push(b.clearcoatMapUv),I.push(b.clearcoatNormalMapUv),I.push(b.clearcoatRoughnessMapUv),I.push(b.iridescenceMapUv),I.push(b.iridescenceThicknessMapUv),I.push(b.sheenColorMapUv),I.push(b.sheenRoughnessMapUv),I.push(b.specularMapUv),I.push(b.specularColorMapUv),I.push(b.specularIntensityMapUv),I.push(b.transmissionMapUv),I.push(b.thicknessMapUv),I.push(b.combine),I.push(b.fogExp2),I.push(b.sizeAttenuation),I.push(b.morphTargetsCount),I.push(b.morphAttributeCount),I.push(b.numDirLights),I.push(b.numPointLights),I.push(b.numSpotLights),I.push(b.numSpotLightMaps),I.push(b.numHemiLights),I.push(b.numRectAreaLights),I.push(b.numDirLightShadows),I.push(b.numPointLightShadows),I.push(b.numSpotLightShadows),I.push(b.numSpotLightShadowsWithMaps),I.push(b.numLightProbes),I.push(b.shadowMapType),I.push(b.toneMapping),I.push(b.numClippingPlanes),I.push(b.numClipIntersection),I.push(b.depthPacking)}function P(I,b){l.disableAll(),b.supportsVertexTextures&&l.enable(0),b.instancing&&l.enable(1),b.instancingColor&&l.enable(2),b.instancingMorph&&l.enable(3),b.matcap&&l.enable(4),b.envMap&&l.enable(5),b.normalMapObjectSpace&&l.enable(6),b.normalMapTangentSpace&&l.enable(7),b.clearcoat&&l.enable(8),b.iridescence&&l.enable(9),b.alphaTest&&l.enable(10),b.vertexColors&&l.enable(11),b.vertexAlphas&&l.enable(12),b.vertexUv1s&&l.enable(13),b.vertexUv2s&&l.enable(14),b.vertexUv3s&&l.enable(15),b.vertexTangents&&l.enable(16),b.anisotropy&&l.enable(17),b.alphaHash&&l.enable(18),b.batching&&l.enable(19),b.dispersion&&l.enable(20),b.batchingColor&&l.enable(21),I.push(l.mask),l.disableAll(),b.fog&&l.enable(0),b.useFog&&l.enable(1),b.flatShading&&l.enable(2),b.logarithmicDepthBuffer&&l.enable(3),b.reverseDepthBuffer&&l.enable(4),b.skinning&&l.enable(5),b.morphTargets&&l.enable(6),b.morphNormals&&l.enable(7),b.morphColors&&l.enable(8),b.premultipliedAlpha&&l.enable(9),b.shadowMapEnabled&&l.enable(10),b.doubleSided&&l.enable(11),b.flipSided&&l.enable(12),b.useDepthPacking&&l.enable(13),b.dithering&&l.enable(14),b.transmission&&l.enable(15),b.sheen&&l.enable(16),b.opaque&&l.enable(17),b.pointsUvs&&l.enable(18),b.decodeVideoTexture&&l.enable(19),b.decodeVideoTextureEmissive&&l.enable(20),b.alphaToCoverage&&l.enable(21),I.push(l.mask)}function C(I){const b=M[I.type];let O;if(b){const q=Vn[b];O=k0.clone(q.uniforms)}else O=I.uniforms;return O}function V(I,b){let O;for(let q=0,Z=p.length;q<Z;q++){const Q=p[q];if(Q.cacheKey===b){O=Q,++O.usedTimes;break}}return O===void 0&&(O=new KM(i,b,I,o),p.push(O)),O}function L(I){if(--I.usedTimes===0){const b=p.indexOf(I);p[b]=p[p.length-1],p.pop(),I.destroy()}}function B(I){h.remove(I)}function H(){h.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:C,acquireProgram:V,releaseProgram:L,releaseShaderCache:B,programs:p,dispose:H}}function nE(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let l=i.get(c);return l===void 0&&(l={},i.set(c,l)),l}function n(c){i.delete(c)}function r(c,l,h){i.get(c)[l]=h}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function iE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ah(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ch(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function c(m,_,y,M,E,x){let v=i[e];return v===void 0?(v={id:m.id,object:m,geometry:_,material:y,groupOrder:M,renderOrder:m.renderOrder,z:E,group:x},i[e]=v):(v.id=m.id,v.object=m,v.geometry=_,v.material=y,v.groupOrder=M,v.renderOrder=m.renderOrder,v.z=E,v.group=x),e++,v}function l(m,_,y,M,E,x){const v=c(m,_,y,M,E,x);y.transmission>0?n.push(v):y.transparent===!0?r.push(v):t.push(v)}function h(m,_,y,M,E,x){const v=c(m,_,y,M,E,x);y.transmission>0?n.unshift(v):y.transparent===!0?r.unshift(v):t.unshift(v)}function d(m,_){t.length>1&&t.sort(m||iE),n.length>1&&n.sort(_||ah),r.length>1&&r.sort(_||ah)}function p(){for(let m=e,_=i.length;m<_;m++){const y=i[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:l,unshift:h,finish:p,sort:d}}function rE(){let i=new WeakMap;function e(n,r){const o=i.get(n);let c;return o===void 0?(c=new ch,i.set(n,[c])):r>=o.length?(c=new ch,o.push(c)):c=o[r],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function sE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ot};break;case"SpotLight":t={position:new z,direction:new z,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function oE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let aE=0;function cE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lE(i){const e=new sE,t=oE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new z);const r=new z,o=new at,c=new at;function l(d){let p=0,m=0,_=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let y=0,M=0,E=0,x=0,v=0,F=0,P=0,C=0,V=0,L=0,B=0;d.sort(cE);for(let I=0,b=d.length;I<b;I++){const O=d[I],q=O.color,Z=O.intensity,Q=O.distance,ne=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)p+=q.r*Z,m+=q.g*Z,_+=q.b*Z;else if(O.isLightProbe){for(let ie=0;ie<9;ie++)n.probe[ie].addScaledVector(O.sh.coefficients[ie],Z);B++}else if(O.isDirectionalLight){const ie=e.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const me=O.shadow,se=t.get(O);se.shadowIntensity=me.intensity,se.shadowBias=me.bias,se.shadowNormalBias=me.normalBias,se.shadowRadius=me.radius,se.shadowMapSize=me.mapSize,n.directionalShadow[y]=se,n.directionalShadowMap[y]=ne,n.directionalShadowMatrix[y]=O.shadow.matrix,F++}n.directional[y]=ie,y++}else if(O.isSpotLight){const ie=e.get(O);ie.position.setFromMatrixPosition(O.matrixWorld),ie.color.copy(q).multiplyScalar(Z),ie.distance=Q,ie.coneCos=Math.cos(O.angle),ie.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ie.decay=O.decay,n.spot[E]=ie;const me=O.shadow;if(O.map&&(n.spotLightMap[V]=O.map,V++,me.updateMatrices(O),O.castShadow&&L++),n.spotLightMatrix[E]=me.matrix,O.castShadow){const se=t.get(O);se.shadowIntensity=me.intensity,se.shadowBias=me.bias,se.shadowNormalBias=me.normalBias,se.shadowRadius=me.radius,se.shadowMapSize=me.mapSize,n.spotShadow[E]=se,n.spotShadowMap[E]=ne,C++}E++}else if(O.isRectAreaLight){const ie=e.get(O);ie.color.copy(q).multiplyScalar(Z),ie.halfWidth.set(O.width*.5,0,0),ie.halfHeight.set(0,O.height*.5,0),n.rectArea[x]=ie,x++}else if(O.isPointLight){const ie=e.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity),ie.distance=O.distance,ie.decay=O.decay,O.castShadow){const me=O.shadow,se=t.get(O);se.shadowIntensity=me.intensity,se.shadowBias=me.bias,se.shadowNormalBias=me.normalBias,se.shadowRadius=me.radius,se.shadowMapSize=me.mapSize,se.shadowCameraNear=me.camera.near,se.shadowCameraFar=me.camera.far,n.pointShadow[M]=se,n.pointShadowMap[M]=ne,n.pointShadowMatrix[M]=O.shadow.matrix,P++}n.point[M]=ie,M++}else if(O.isHemisphereLight){const ie=e.get(O);ie.skyColor.copy(O.color).multiplyScalar(Z),ie.groundColor.copy(O.groundColor).multiplyScalar(Z),n.hemi[v]=ie,v++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=_;const H=n.hash;(H.directionalLength!==y||H.pointLength!==M||H.spotLength!==E||H.rectAreaLength!==x||H.hemiLength!==v||H.numDirectionalShadows!==F||H.numPointShadows!==P||H.numSpotShadows!==C||H.numSpotMaps!==V||H.numLightProbes!==B)&&(n.directional.length=y,n.spot.length=E,n.rectArea.length=x,n.point.length=M,n.hemi.length=v,n.directionalShadow.length=F,n.directionalShadowMap.length=F,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=F,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=C+V-L,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=B,H.directionalLength=y,H.pointLength=M,H.spotLength=E,H.rectAreaLength=x,H.hemiLength=v,H.numDirectionalShadows=F,H.numPointShadows=P,H.numSpotShadows=C,H.numSpotMaps=V,H.numLightProbes=B,n.version=aE++)}function h(d,p){let m=0,_=0,y=0,M=0,E=0;const x=p.matrixWorldInverse;for(let v=0,F=d.length;v<F;v++){const P=d[v];if(P.isDirectionalLight){const C=n.directional[m];C.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(x),m++}else if(P.isSpotLight){const C=n.spot[y];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(x),y++}else if(P.isRectAreaLight){const C=n.rectArea[M];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(x),c.identity(),o.copy(P.matrixWorld),o.premultiply(x),c.extractRotation(o),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const C=n.point[_];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(x),_++}else if(P.isHemisphereLight){const C=n.hemi[E];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(x),E++}}}return{setup:l,setupView:h,state:n}}function lh(i){const e=new lE(i),t=[],n=[];function r(p){d.camera=p,t.length=0,n.length=0}function o(p){t.push(p)}function c(p){n.push(p)}function l(){e.setup(t)}function h(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:c}}function uE(i){let e=new WeakMap;function t(r,o=0){const c=e.get(r);let l;return c===void 0?(l=new lh(i),e.set(r,[l])):o>=c.length?(l=new lh(i),c.push(l)):l=c[o],l}function n(){e=new WeakMap}return{get:t,dispose:n}}class hE extends Yi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dE extends Yi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pE=`uniform sampler2D shadow_pass;
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
}`;function mE(i,e,t){let n=new ll;const r=new Ae,o=new Ae,c=new Et,l=new hE({depthPacking:$v}),h=new dE,d={},p=t.maxTextureSize,m={[Si]:ln,[ln]:Si,[ni]:ni},_=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:fE,fragmentShader:pE}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new Zt;M.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new en(M,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=td;let v=this.type;this.render=function(L,B,H){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;const I=i.getRenderTarget(),b=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),q=i.state;q.setBlending(yi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Z=v!==ti&&this.type===ti,Q=v===ti&&this.type!==ti;for(let ne=0,ie=L.length;ne<ie;ne++){const me=L[ne],se=me.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;r.copy(se.mapSize);const Ce=se.getFrameExtents();if(r.multiply(Ce),o.copy(se.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/Ce.x),r.x=o.x*Ce.x,se.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/Ce.y),r.y=o.y*Ce.y,se.mapSize.y=o.y)),se.map===null||Z===!0||Q===!0){const Oe=this.type!==ti?{minFilter:yn,magFilter:yn}:{};se.map!==null&&se.map.dispose(),se.map=new Xi(r.x,r.y,Oe),se.map.texture.name=me.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();const Le=se.getViewportCount();for(let Oe=0;Oe<Le;Oe++){const Ke=se.getViewport(Oe);c.set(o.x*Ke.x,o.y*Ke.y,o.x*Ke.z,o.y*Ke.w),q.viewport(c),se.updateMatrices(me,Oe),n=se.getFrustum(),C(B,H,se.camera,me,this.type)}se.isPointLightShadow!==!0&&this.type===ti&&F(se,H),se.needsUpdate=!1}v=this.type,x.needsUpdate=!1,i.setRenderTarget(I,b,O)};function F(L,B){const H=e.update(E);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Xi(r.x,r.y)),_.uniforms.shadow_pass.value=L.map.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(B,null,H,_,E,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(B,null,H,y,E,null)}function P(L,B,H,I){let b=null;const O=H.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(O!==void 0)b=O;else if(b=H.isPointLight===!0?h:l,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const q=b.uuid,Z=B.uuid;let Q=d[q];Q===void 0&&(Q={},d[q]=Q);let ne=Q[Z];ne===void 0&&(ne=b.clone(),Q[Z]=ne,B.addEventListener("dispose",V)),b=ne}if(b.visible=B.visible,b.wireframe=B.wireframe,I===ti?b.side=B.shadowSide!==null?B.shadowSide:B.side:b.side=B.shadowSide!==null?B.shadowSide:m[B.side],b.alphaMap=B.alphaMap,b.alphaTest=B.alphaTest,b.map=B.map,b.clipShadows=B.clipShadows,b.clippingPlanes=B.clippingPlanes,b.clipIntersection=B.clipIntersection,b.displacementMap=B.displacementMap,b.displacementScale=B.displacementScale,b.displacementBias=B.displacementBias,b.wireframeLinewidth=B.wireframeLinewidth,b.linewidth=B.linewidth,H.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const q=i.properties.get(b);q.light=H}return b}function C(L,B,H,I,b){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===ti)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,L.matrixWorld);const Z=e.update(L),Q=L.material;if(Array.isArray(Q)){const ne=Z.groups;for(let ie=0,me=ne.length;ie<me;ie++){const se=ne[ie],Ce=Q[se.materialIndex];if(Ce&&Ce.visible){const Le=P(L,Ce,I,b);L.onBeforeShadow(i,L,B,H,Z,Le,se),i.renderBufferDirect(H,null,Z,Le,L,se),L.onAfterShadow(i,L,B,H,Z,Le,se)}}}else if(Q.visible){const ne=P(L,Q,I,b);L.onBeforeShadow(i,L,B,H,Z,ne,null),i.renderBufferDirect(H,null,Z,ne,L,null),L.onAfterShadow(i,L,B,H,Z,ne,null)}}const q=L.children;for(let Z=0,Q=q.length;Z<Q;Z++)C(q[Z],B,H,I,b)}function V(L){L.target.removeEventListener("dispose",V);for(const H in d){const I=d[H],b=L.target.uuid;b in I&&(I[b].dispose(),delete I[b])}}}const _E={[nc]:ic,[rc]:ac,[sc]:cc,[Er]:oc,[ic]:nc,[ac]:rc,[cc]:sc,[oc]:Er};function gE(i,e){function t(){let G=!1;const Ie=new Et;let ae=null;const _e=new Et(0,0,0,0);return{setMask:function(J){ae!==J&&!G&&(i.colorMask(J,J,J,J),ae=J)},setLocked:function(J){G=J},setClear:function(J,K,Qe,Lt,It){It===!0&&(J*=Lt,K*=Lt,Qe*=Lt),Ie.set(J,K,Qe,Lt),_e.equals(Ie)===!1&&(i.clearColor(J,K,Qe,Lt),_e.copy(Ie))},reset:function(){G=!1,ae=null,_e.set(-1,0,0,0)}}}function n(){let G=!1,Ie=!1,ae=null,_e=null,J=null;return{setReversed:function(K){if(Ie!==K){const Qe=e.get("EXT_clip_control");Ie?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);const Lt=J;J=null,this.setClear(Lt)}Ie=K},getReversed:function(){return Ie},setTest:function(K){K?be(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(K){ae!==K&&!G&&(i.depthMask(K),ae=K)},setFunc:function(K){if(Ie&&(K=_E[K]),_e!==K){switch(K){case nc:i.depthFunc(i.NEVER);break;case ic:i.depthFunc(i.ALWAYS);break;case rc:i.depthFunc(i.LESS);break;case Er:i.depthFunc(i.LEQUAL);break;case sc:i.depthFunc(i.EQUAL);break;case oc:i.depthFunc(i.GEQUAL);break;case ac:i.depthFunc(i.GREATER);break;case cc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=K}},setLocked:function(K){G=K},setClear:function(K){J!==K&&(Ie&&(K=1-K),i.clearDepth(K),J=K)},reset:function(){G=!1,ae=null,_e=null,J=null,Ie=!1}}}function r(){let G=!1,Ie=null,ae=null,_e=null,J=null,K=null,Qe=null,Lt=null,It=null;return{setTest:function(dt){G||(dt?be(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(dt){Ie!==dt&&!G&&(i.stencilMask(dt),Ie=dt)},setFunc:function(dt,dn,kt){(ae!==dt||_e!==dn||J!==kt)&&(i.stencilFunc(dt,dn,kt),ae=dt,_e=dn,J=kt)},setOp:function(dt,dn,kt){(K!==dt||Qe!==dn||Lt!==kt)&&(i.stencilOp(dt,dn,kt),K=dt,Qe=dn,Lt=kt)},setLocked:function(dt){G=dt},setClear:function(dt){It!==dt&&(i.clearStencil(dt),It=dt)},reset:function(){G=!1,Ie=null,ae=null,_e=null,J=null,K=null,Qe=null,Lt=null,It=null}}}const o=new t,c=new n,l=new r,h=new WeakMap,d=new WeakMap;let p={},m={},_=new WeakMap,y=[],M=null,E=!1,x=null,v=null,F=null,P=null,C=null,V=null,L=null,B=new ot(0,0,0),H=0,I=!1,b=null,O=null,q=null,Z=null,Q=null;const ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,me=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(se)[1]),ie=me>=1):se.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ie=me>=2);let Ce=null,Le={};const Oe=i.getParameter(i.SCISSOR_BOX),Ke=i.getParameter(i.VIEWPORT),ht=new Et().fromArray(Oe),oe=new Et().fromArray(Ke);function ve(G,Ie,ae,_e){const J=new Uint8Array(4),K=i.createTexture();i.bindTexture(G,K),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<ae;Qe++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(Ie+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return K}const Ue={};Ue[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),be(i.DEPTH_TEST),c.setFunc(Er),Ee(!1),ze(uu),be(i.CULL_FACE),k(yi);function be(G){p[G]!==!0&&(i.enable(G),p[G]=!0)}function pe(G){p[G]!==!1&&(i.disable(G),p[G]=!1)}function Me(G,Ie){return m[G]!==Ie?(i.bindFramebuffer(G,Ie),m[G]=Ie,G===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ie),G===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Je(G,Ie){let ae=y,_e=!1;if(G){ae=_.get(Ie),ae===void 0&&(ae=[],_.set(Ie,ae));const J=G.textures;if(ae.length!==J.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let K=0,Qe=J.length;K<Qe;K++)ae[K]=i.COLOR_ATTACHMENT0+K;ae.length=J.length,_e=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,_e=!0);_e&&i.drawBuffers(ae)}function ct(G){return M!==G?(i.useProgram(G),M=G,!0):!1}const X={[Bi]:i.FUNC_ADD,[_v]:i.FUNC_SUBTRACT,[gv]:i.FUNC_REVERSE_SUBTRACT};X[vv]=i.MIN,X[yv]=i.MAX;const he={[xv]:i.ZERO,[Sv]:i.ONE,[Mv]:i.SRC_COLOR,[ec]:i.SRC_ALPHA,[Cv]:i.SRC_ALPHA_SATURATE,[Tv]:i.DST_COLOR,[bv]:i.DST_ALPHA,[Ev]:i.ONE_MINUS_SRC_COLOR,[tc]:i.ONE_MINUS_SRC_ALPHA,[Av]:i.ONE_MINUS_DST_COLOR,[wv]:i.ONE_MINUS_DST_ALPHA,[Rv]:i.CONSTANT_COLOR,[Pv]:i.ONE_MINUS_CONSTANT_COLOR,[Dv]:i.CONSTANT_ALPHA,[Lv]:i.ONE_MINUS_CONSTANT_ALPHA};function k(G,Ie,ae,_e,J,K,Qe,Lt,It,dt){if(G===yi){E===!0&&(pe(i.BLEND),E=!1);return}if(E===!1&&(be(i.BLEND),E=!0),G!==mv){if(G!==x||dt!==I){if((v!==Bi||C!==Bi)&&(i.blendEquation(i.FUNC_ADD),v=Bi,C=Bi),dt)switch(G){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case To:i.blendFunc(i.ONE,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case du:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case To:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case du:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}F=null,P=null,V=null,L=null,B.set(0,0,0),H=0,x=G,I=dt}return}J=J||Ie,K=K||ae,Qe=Qe||_e,(Ie!==v||J!==C)&&(i.blendEquationSeparate(X[Ie],X[J]),v=Ie,C=J),(ae!==F||_e!==P||K!==V||Qe!==L)&&(i.blendFuncSeparate(he[ae],he[_e],he[K],he[Qe]),F=ae,P=_e,V=K,L=Qe),(Lt.equals(B)===!1||It!==H)&&(i.blendColor(Lt.r,Lt.g,Lt.b,It),B.copy(Lt),H=It),x=G,I=!1}function $e(G,Ie){G.side===ni?pe(i.CULL_FACE):be(i.CULL_FACE);let ae=G.side===ln;Ie&&(ae=!ae),Ee(ae),G.blending===vr&&G.transparent===!1?k(yi):k(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),o.setMask(G.colorWrite);const _e=G.stencilWrite;l.setTest(_e),_e&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ze(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?be(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(G){b!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),b=G)}function ze(G){G!==dv?(be(i.CULL_FACE),G!==O&&(G===uu?i.cullFace(i.BACK):G===fv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),O=G}function Re(G){G!==q&&(ie&&i.lineWidth(G),q=G)}function Ze(G,Ie,ae){G?(be(i.POLYGON_OFFSET_FILL),(Z!==Ie||Q!==ae)&&(i.polygonOffset(Ie,ae),Z=Ie,Q=ae)):pe(i.POLYGON_OFFSET_FILL)}function Fe(G){G?be(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function N(G){G===void 0&&(G=i.TEXTURE0+ne-1),Ce!==G&&(i.activeTexture(G),Ce=G)}function R(G,Ie,ae){ae===void 0&&(Ce===null?ae=i.TEXTURE0+ne-1:ae=Ce);let _e=Le[ae];_e===void 0&&(_e={type:void 0,texture:void 0},Le[ae]=_e),(_e.type!==G||_e.texture!==Ie)&&(Ce!==ae&&(i.activeTexture(ae),Ce=ae),i.bindTexture(G,Ie||Ue[G]),_e.type=G,_e.texture=Ie)}function ee(){const G=Le[Ce];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function de(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(G){ht.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),ht.copy(G))}function We(G){oe.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),oe.copy(G))}function pt(G,Ie){let ae=d.get(Ie);ae===void 0&&(ae=new WeakMap,d.set(Ie,ae));let _e=ae.get(G);_e===void 0&&(_e=i.getUniformBlockIndex(Ie,G.name),ae.set(G,_e))}function it(G,Ie){const _e=d.get(Ie).get(G);h.get(Ie)!==_e&&(i.uniformBlockBinding(Ie,_e,G.__bindingPointIndex),h.set(Ie,_e))}function wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},Ce=null,Le={},m={},_=new WeakMap,y=[],M=null,E=!1,x=null,v=null,F=null,P=null,C=null,V=null,L=null,B=new ot(0,0,0),H=0,I=!1,b=null,O=null,q=null,Z=null,Q=null,ht.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:be,disable:pe,bindFramebuffer:Me,drawBuffers:Je,useProgram:ct,setBlending:k,setMaterial:$e,setFlipSided:Ee,setCullFace:ze,setLineWidth:Re,setPolygonOffset:Ze,setScissorTest:Fe,activeTexture:N,bindTexture:R,unbindTexture:ee,compressedTexImage2D:de,compressedTexImage3D:fe,texImage2D:Ge,texImage3D:et,updateUBOMapping:pt,uniformBlockBinding:it,texStorage2D:ft,texStorage3D:Te,texSubImage2D:ce,texSubImage3D:Ve,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Be,scissor:nt,viewport:We,reset:wt}}function uh(i,e,t,n){const r=vE(n);switch(t){case ad:return i*e;case ld:return i*e;case ud:return i*e*2;case il:return i*e/r.components*r.byteLength;case rl:return i*e/r.components*r.byteLength;case hd:return i*e*2/r.components*r.byteLength;case sl:return i*e*2/r.components*r.byteLength;case cd:return i*e*3/r.components*r.byteLength;case wn:return i*e*4/r.components*r.byteLength;case ol:return i*e*4/r.components*r.byteLength;case yo:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case So:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pc:case _c:return Math.max(i,16)*Math.max(e,8)/4;case fc:case mc:return Math.max(i,8)*Math.max(e,8)/2;case gc:case vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Eo:case Nc:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case dd:case Uc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Oc:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vE(i){switch(i){case oi:case rd:return{byteLength:1,components:1};case is:case sd:case ls:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case Wi:case el:case Fn:return{byteLength:4,components:1};case od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function yE(i,e,t,n,r,o,c){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ae,p=new WeakMap;let m;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,R){return y?new OffscreenCanvas(N,R):rs("canvas")}function E(N,R,ee){let de=1;const fe=Fe(N);if((fe.width>ee||fe.height>ee)&&(de=ee/Math.max(fe.width,fe.height)),de<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ce=Math.floor(de*fe.width),Ve=Math.floor(de*fe.height);m===void 0&&(m=M(ce,Ve));const Pe=R?M(ce,Ve):m;return Pe.width=ce,Pe.height=Ve,Pe.getContext("2d").drawImage(N,0,0,ce,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+ce+"x"+Ve+")."),Pe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),N;return N}function x(N){return N.generateMipmaps}function v(N){i.generateMipmap(N)}function F(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(N,R,ee,de,fe=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ce=R;if(R===i.RED&&(ee===i.FLOAT&&(ce=i.R32F),ee===i.HALF_FLOAT&&(ce=i.R16F),ee===i.UNSIGNED_BYTE&&(ce=i.R8)),R===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ce=i.R8UI),ee===i.UNSIGNED_SHORT&&(ce=i.R16UI),ee===i.UNSIGNED_INT&&(ce=i.R32UI),ee===i.BYTE&&(ce=i.R8I),ee===i.SHORT&&(ce=i.R16I),ee===i.INT&&(ce=i.R32I)),R===i.RG&&(ee===i.FLOAT&&(ce=i.RG32F),ee===i.HALF_FLOAT&&(ce=i.RG16F),ee===i.UNSIGNED_BYTE&&(ce=i.RG8)),R===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ce=i.RG8UI),ee===i.UNSIGNED_SHORT&&(ce=i.RG16UI),ee===i.UNSIGNED_INT&&(ce=i.RG32UI),ee===i.BYTE&&(ce=i.RG8I),ee===i.SHORT&&(ce=i.RG16I),ee===i.INT&&(ce=i.RG32I)),R===i.RGB_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),ee===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),ee===i.UNSIGNED_INT&&(ce=i.RGB32UI),ee===i.BYTE&&(ce=i.RGB8I),ee===i.SHORT&&(ce=i.RGB16I),ee===i.INT&&(ce=i.RGB32I)),R===i.RGBA_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),ee===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),ee===i.UNSIGNED_INT&&(ce=i.RGBA32UI),ee===i.BYTE&&(ce=i.RGBA8I),ee===i.SHORT&&(ce=i.RGBA16I),ee===i.INT&&(ce=i.RGBA32I)),R===i.RGB&&ee===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),R===i.RGBA){const Ve=fe?Bo:St.getTransfer(de);ee===i.FLOAT&&(ce=i.RGBA32F),ee===i.HALF_FLOAT&&(ce=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(ce=Ve===Tt?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function C(N,R){let ee;return N?R===null||R===Wi||R===Tr?ee=i.DEPTH24_STENCIL8:R===Fn?ee=i.DEPTH32F_STENCIL8:R===is&&(ee=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Wi||R===Tr?ee=i.DEPTH_COMPONENT24:R===Fn?ee=i.DEPTH_COMPONENT32F:R===is&&(ee=i.DEPTH_COMPONENT16),ee}function V(N,R){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==yn&&N.minFilter!==Gn?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function L(N){const R=N.target;R.removeEventListener("dispose",L),H(R),R.isVideoTexture&&p.delete(R)}function B(N){const R=N.target;R.removeEventListener("dispose",B),b(R)}function H(N){const R=n.get(N);if(R.__webglInit===void 0)return;const ee=N.source,de=_.get(ee);if(de){const fe=de[R.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&I(N),Object.keys(de).length===0&&_.delete(ee)}n.remove(N)}function I(N){const R=n.get(N);i.deleteTexture(R.__webglTexture);const ee=N.source,de=_.get(ee);delete de[R.__cacheKey],c.memory.textures--}function b(N){const R=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(R.__webglFramebuffer[de]))for(let fe=0;fe<R.__webglFramebuffer[de].length;fe++)i.deleteFramebuffer(R.__webglFramebuffer[de][fe]);else i.deleteFramebuffer(R.__webglFramebuffer[de]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[de])}else{if(Array.isArray(R.__webglFramebuffer))for(let de=0;de<R.__webglFramebuffer.length;de++)i.deleteFramebuffer(R.__webglFramebuffer[de]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let de=0;de<R.__webglColorRenderbuffer.length;de++)R.__webglColorRenderbuffer[de]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[de]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ee=N.textures;for(let de=0,fe=ee.length;de<fe;de++){const ce=n.get(ee[de]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),c.memory.textures--),n.remove(ee[de])}n.remove(N)}let O=0;function q(){O=0}function Z(){const N=O;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),O+=1,N}function Q(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function ne(N,R){const ee=n.get(N);if(N.isVideoTexture&&Re(N),N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){const de=N.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(ee,N,R);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+R)}function ie(N,R){const ee=n.get(N);if(N.version>0&&ee.__version!==N.version){oe(ee,N,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+R)}function me(N,R){const ee=n.get(N);if(N.version>0&&ee.__version!==N.version){oe(ee,N,R);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+R)}function se(N,R){const ee=n.get(N);if(N.version>0&&ee.__version!==N.version){ve(ee,N,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+R)}const Ce={[hc]:i.REPEAT,[Hi]:i.CLAMP_TO_EDGE,[dc]:i.MIRRORED_REPEAT},Le={[yn]:i.NEAREST,[Gv]:i.NEAREST_MIPMAP_NEAREST,[Ns]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[la]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},Oe={[Yv]:i.NEVER,[e0]:i.ALWAYS,[qv]:i.LESS,[pd]:i.LEQUAL,[Zv]:i.EQUAL,[Qv]:i.GEQUAL,[Kv]:i.GREATER,[Jv]:i.NOTEQUAL};function Ke(N,R){if(R.type===Fn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Gn||R.magFilter===la||R.magFilter===Ns||R.magFilter===Vi||R.minFilter===Gn||R.minFilter===la||R.minFilter===Ns||R.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Ce[R.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Ce[R.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Ce[R.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Le[R.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Le[R.minFilter]),R.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Oe[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===yn||R.minFilter!==Ns&&R.minFilter!==Vi||R.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ht(N,R){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",L));const de=R.source;let fe=_.get(de);fe===void 0&&(fe={},_.set(de,fe));const ce=Q(R);if(ce!==N.__cacheKey){fe[ce]===void 0&&(fe[ce]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),fe[ce].usedTimes++;const Ve=fe[N.__cacheKey];Ve!==void 0&&(fe[N.__cacheKey].usedTimes--,Ve.usedTimes===0&&I(R)),N.__cacheKey=ce,N.__webglTexture=fe[ce].texture}return ee}function oe(N,R,ee){let de=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(de=i.TEXTURE_3D);const fe=ht(N,R),ce=R.source;t.bindTexture(de,N.__webglTexture,i.TEXTURE0+ee);const Ve=n.get(ce);if(ce.version!==Ve.__version||fe===!0){t.activeTexture(i.TEXTURE0+ee);const Pe=St.getPrimaries(St.workingColorSpace),Be=R.colorSpace===gi?null:St.getPrimaries(R.colorSpace),ft=R.colorSpace===gi||Pe===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Te=E(R.image,!1,r.maxTextureSize);Te=Ze(R,Te);const Ge=o.convert(R.format,R.colorSpace),et=o.convert(R.type);let nt=P(R.internalFormat,Ge,et,R.colorSpace,R.isVideoTexture);Ke(de,R);let We;const pt=R.mipmaps,it=R.isVideoTexture!==!0,wt=Ve.__version===void 0||fe===!0,G=ce.dataReady,Ie=V(R,Te);if(R.isDepthTexture)nt=C(R.format===Ar,R.type),wt&&(it?t.texStorage2D(i.TEXTURE_2D,1,nt,Te.width,Te.height):t.texImage2D(i.TEXTURE_2D,0,nt,Te.width,Te.height,0,Ge,et,null));else if(R.isDataTexture)if(pt.length>0){it&&wt&&t.texStorage2D(i.TEXTURE_2D,Ie,nt,pt[0].width,pt[0].height);for(let ae=0,_e=pt.length;ae<_e;ae++)We=pt[ae],it?G&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,We.width,We.height,Ge,et,We.data):t.texImage2D(i.TEXTURE_2D,ae,nt,We.width,We.height,0,Ge,et,We.data);R.generateMipmaps=!1}else it?(wt&&t.texStorage2D(i.TEXTURE_2D,Ie,nt,Te.width,Te.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te.width,Te.height,Ge,et,Te.data)):t.texImage2D(i.TEXTURE_2D,0,nt,Te.width,Te.height,0,Ge,et,Te.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){it&&wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,nt,pt[0].width,pt[0].height,Te.depth);for(let ae=0,_e=pt.length;ae<_e;ae++)if(We=pt[ae],R.format!==wn)if(Ge!==null)if(it){if(G)if(R.layerUpdates.size>0){const J=uh(We.width,We.height,R.format,R.type);for(const K of R.layerUpdates){const Qe=We.data.subarray(K*J/We.data.BYTES_PER_ELEMENT,(K+1)*J/We.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,K,We.width,We.height,1,Ge,Qe)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,We.width,We.height,Te.depth,Ge,We.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,nt,We.width,We.height,Te.depth,0,We.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,We.width,We.height,Te.depth,Ge,et,We.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,nt,We.width,We.height,Te.depth,0,Ge,et,We.data)}else{it&&wt&&t.texStorage2D(i.TEXTURE_2D,Ie,nt,pt[0].width,pt[0].height);for(let ae=0,_e=pt.length;ae<_e;ae++)We=pt[ae],R.format!==wn?Ge!==null?it?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,We.width,We.height,Ge,We.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,nt,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?G&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,We.width,We.height,Ge,et,We.data):t.texImage2D(i.TEXTURE_2D,ae,nt,We.width,We.height,0,Ge,et,We.data)}else if(R.isDataArrayTexture)if(it){if(wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,nt,Te.width,Te.height,Te.depth),G)if(R.layerUpdates.size>0){const ae=uh(Te.width,Te.height,R.format,R.type);for(const _e of R.layerUpdates){const J=Te.data.subarray(_e*ae/Te.data.BYTES_PER_ELEMENT,(_e+1)*ae/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,Te.width,Te.height,1,Ge,et,J)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ge,et,Te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,nt,Te.width,Te.height,Te.depth,0,Ge,et,Te.data);else if(R.isData3DTexture)it?(wt&&t.texStorage3D(i.TEXTURE_3D,Ie,nt,Te.width,Te.height,Te.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ge,et,Te.data)):t.texImage3D(i.TEXTURE_3D,0,nt,Te.width,Te.height,Te.depth,0,Ge,et,Te.data);else if(R.isFramebufferTexture){if(wt)if(it)t.texStorage2D(i.TEXTURE_2D,Ie,nt,Te.width,Te.height);else{let ae=Te.width,_e=Te.height;for(let J=0;J<Ie;J++)t.texImage2D(i.TEXTURE_2D,J,nt,ae,_e,0,Ge,et,null),ae>>=1,_e>>=1}}else if(pt.length>0){if(it&&wt){const ae=Fe(pt[0]);t.texStorage2D(i.TEXTURE_2D,Ie,nt,ae.width,ae.height)}for(let ae=0,_e=pt.length;ae<_e;ae++)We=pt[ae],it?G&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ge,et,We):t.texImage2D(i.TEXTURE_2D,ae,nt,Ge,et,We);R.generateMipmaps=!1}else if(it){if(wt){const ae=Fe(Te);t.texStorage2D(i.TEXTURE_2D,Ie,nt,ae.width,ae.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ge,et,Te)}else t.texImage2D(i.TEXTURE_2D,0,nt,Ge,et,Te);x(R)&&v(de),Ve.__version=ce.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function ve(N,R,ee){if(R.image.length!==6)return;const de=ht(N,R),fe=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+ee);const ce=n.get(fe);if(fe.version!==ce.__version||de===!0){t.activeTexture(i.TEXTURE0+ee);const Ve=St.getPrimaries(St.workingColorSpace),Pe=R.colorSpace===gi?null:St.getPrimaries(R.colorSpace),Be=R.colorSpace===gi||Ve===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const ft=R.isCompressedTexture||R.image[0].isCompressedTexture,Te=R.image[0]&&R.image[0].isDataTexture,Ge=[];for(let _e=0;_e<6;_e++)!ft&&!Te?Ge[_e]=E(R.image[_e],!0,r.maxCubemapSize):Ge[_e]=Te?R.image[_e].image:R.image[_e],Ge[_e]=Ze(R,Ge[_e]);const et=Ge[0],nt=o.convert(R.format,R.colorSpace),We=o.convert(R.type),pt=P(R.internalFormat,nt,We,R.colorSpace),it=R.isVideoTexture!==!0,wt=ce.__version===void 0||de===!0,G=fe.dataReady;let Ie=V(R,et);Ke(i.TEXTURE_CUBE_MAP,R);let ae;if(ft){it&&wt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,pt,et.width,et.height);for(let _e=0;_e<6;_e++){ae=Ge[_e].mipmaps;for(let J=0;J<ae.length;J++){const K=ae[J];R.format!==wn?nt!==null?it?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,J,0,0,K.width,K.height,nt,K.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,J,pt,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,J,0,0,K.width,K.height,nt,We,K.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,J,pt,K.width,K.height,0,nt,We,K.data)}}}else{if(ae=R.mipmaps,it&&wt){ae.length>0&&Ie++;const _e=Fe(Ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,pt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Te){it?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ge[_e].width,Ge[_e].height,nt,We,Ge[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pt,Ge[_e].width,Ge[_e].height,0,nt,We,Ge[_e].data);for(let J=0;J<ae.length;J++){const Qe=ae[J].image[_e].image;it?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,J+1,0,0,Qe.width,Qe.height,nt,We,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,J+1,pt,Qe.width,Qe.height,0,nt,We,Qe.data)}}else{it?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,nt,We,Ge[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pt,nt,We,Ge[_e]);for(let J=0;J<ae.length;J++){const K=ae[J];it?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,J+1,0,0,nt,We,K.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,J+1,pt,nt,We,K.image[_e])}}}x(R)&&v(i.TEXTURE_CUBE_MAP),ce.__version=fe.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Ue(N,R,ee,de,fe,ce){const Ve=o.convert(ee.format,ee.colorSpace),Pe=o.convert(ee.type),Be=P(ee.internalFormat,Ve,Pe,ee.colorSpace),ft=n.get(R),Te=n.get(ee);if(Te.__renderTarget=R,!ft.__hasExternalTextures){const Ge=Math.max(1,R.width>>ce),et=Math.max(1,R.height>>ce);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,ce,Be,Ge,et,R.depth,0,Ve,Pe,null):t.texImage2D(fe,ce,Be,Ge,et,0,Ve,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),ze(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,fe,Te.__webglTexture,0,Ee(R)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,fe,Te.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(N,R,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,N),R.depthBuffer){const de=R.depthTexture,fe=de&&de.isDepthTexture?de.type:null,ce=C(R.stencilBuffer,fe),Ve=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=Ee(R);ze(R)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,ce,R.width,R.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ce,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ce,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ve,i.RENDERBUFFER,N)}else{const de=R.textures;for(let fe=0;fe<de.length;fe++){const ce=de[fe],Ve=o.convert(ce.format,ce.colorSpace),Pe=o.convert(ce.type),Be=P(ce.internalFormat,Ve,Pe,ce.colorSpace),ft=Ee(R);ee&&ze(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Be,R.width,R.height):ze(R)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,Be,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Be,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=n.get(R.depthTexture);de.__renderTarget=R,(!de.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ne(R.depthTexture,0);const fe=de.__webglTexture,ce=Ee(R);if(R.depthTexture.format===yr)ze(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0);else if(R.depthTexture.format===Ar)ze(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Me(N){const R=n.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==N.depthTexture){const de=N.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),de){const fe=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,de.removeEventListener("dispose",fe)};de.addEventListener("dispose",fe),R.__depthDisposeCallback=fe}R.__boundDepthTexture=de}if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");pe(R.__webglFramebuffer,N)}else if(ee){R.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[de]),R.__webglDepthbuffer[de]===void 0)R.__webglDepthbuffer[de]=i.createRenderbuffer(),be(R.__webglDepthbuffer[de],N,!1);else{const fe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=R.__webglDepthbuffer[de];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),be(R.__webglDepthbuffer,N,!1);else{const de=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,fe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(N,R,ee){const de=n.get(N);R!==void 0&&Ue(de.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&Me(N)}function ct(N){const R=N.texture,ee=n.get(N),de=n.get(R);N.addEventListener("dispose",B);const fe=N.textures,ce=N.isWebGLCubeRenderTarget===!0,Ve=fe.length>1;if(Ve||(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=R.version,c.memory.textures++),ce){ee.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(R.mipmaps&&R.mipmaps.length>0){ee.__webglFramebuffer[Pe]=[];for(let Be=0;Be<R.mipmaps.length;Be++)ee.__webglFramebuffer[Pe][Be]=i.createFramebuffer()}else ee.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Pe=0;Pe<R.mipmaps.length;Pe++)ee.__webglFramebuffer[Pe]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(Ve)for(let Pe=0,Be=fe.length;Pe<Be;Pe++){const ft=n.get(fe[Pe]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),c.memory.textures++)}if(N.samples>0&&ze(N)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Pe=0;Pe<fe.length;Pe++){const Be=fe[Pe];ee.__webglColorRenderbuffer[Pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[Pe]);const ft=o.convert(Be.format,Be.colorSpace),Te=o.convert(Be.type),Ge=P(Be.internalFormat,ft,Te,Be.colorSpace,N.isXRRenderTarget===!0),et=Ee(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Ge,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,ee.__webglColorRenderbuffer[Pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),be(ee.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,R);for(let Pe=0;Pe<6;Pe++)if(R.mipmaps&&R.mipmaps.length>0)for(let Be=0;Be<R.mipmaps.length;Be++)Ue(ee.__webglFramebuffer[Pe][Be],N,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Be);else Ue(ee.__webglFramebuffer[Pe],N,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);x(R)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Pe=0,Be=fe.length;Pe<Be;Pe++){const ft=fe[Pe],Te=n.get(ft);t.bindTexture(i.TEXTURE_2D,Te.__webglTexture),Ke(i.TEXTURE_2D,ft),Ue(ee.__webglFramebuffer,N,ft,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,0),x(ft)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pe=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,de.__webglTexture),Ke(Pe,R),R.mipmaps&&R.mipmaps.length>0)for(let Be=0;Be<R.mipmaps.length;Be++)Ue(ee.__webglFramebuffer[Be],N,R,i.COLOR_ATTACHMENT0,Pe,Be);else Ue(ee.__webglFramebuffer,N,R,i.COLOR_ATTACHMENT0,Pe,0);x(R)&&v(Pe),t.unbindTexture()}N.depthBuffer&&Me(N)}function X(N){const R=N.textures;for(let ee=0,de=R.length;ee<de;ee++){const fe=R[ee];if(x(fe)){const ce=F(N),Ve=n.get(fe).__webglTexture;t.bindTexture(ce,Ve),v(ce),t.unbindTexture()}}}const he=[],k=[];function $e(N){if(N.samples>0){if(ze(N)===!1){const R=N.textures,ee=N.width,de=N.height;let fe=i.COLOR_BUFFER_BIT;const ce=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ve=n.get(N),Pe=R.length>1;if(Pe)for(let Be=0;Be<R.length;Be++)t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Be=0;Be<R.length;Be++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),Pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[Be]);const ft=n.get(R[Be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ft,0)}i.blitFramebuffer(0,0,ee,de,0,0,ee,de,fe,i.NEAREST),h===!0&&(he.length=0,k.length=0,he.push(i.COLOR_ATTACHMENT0+Be),N.depthBuffer&&N.resolveDepthBuffer===!1&&(he.push(ce),k.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pe)for(let Be=0;Be<R.length;Be++){t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[Be]);const ft=n.get(R[Be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,ft,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const R=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Ee(N){return Math.min(r.maxSamples,N.samples)}function ze(N){const R=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Re(N){const R=c.render.frame;p.get(N)!==R&&(p.set(N,R),N.update())}function Ze(N,R){const ee=N.colorSpace,de=N.format,fe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ee!==Lr&&ee!==gi&&(St.getTransfer(ee)===Tt?(de!==wn||fe!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),R}function Fe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=Z,this.resetTextureUnits=q,this.setTexture2D=ne,this.setTexture2DArray=ie,this.setTexture3D=me,this.setTextureCube=se,this.rebindTextures=Je,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=ze}function xE(i,e){function t(n,r=gi){let o;const c=St.getTransfer(r);if(n===oi)return i.UNSIGNED_BYTE;if(n===tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===od)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rd)return i.BYTE;if(n===sd)return i.SHORT;if(n===is)return i.UNSIGNED_SHORT;if(n===el)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===ls)return i.HALF_FLOAT;if(n===ad)return i.ALPHA;if(n===cd)return i.RGB;if(n===wn)return i.RGBA;if(n===ld)return i.LUMINANCE;if(n===ud)return i.LUMINANCE_ALPHA;if(n===yr)return i.DEPTH_COMPONENT;if(n===Ar)return i.DEPTH_STENCIL;if(n===il)return i.RED;if(n===rl)return i.RED_INTEGER;if(n===hd)return i.RG;if(n===sl)return i.RG_INTEGER;if(n===ol)return i.RGBA_INTEGER;if(n===yo||n===xo||n===So||n===Mo)if(c===Tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===yo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===yo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fc||n===pc||n===mc||n===_c)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===fc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_c)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gc||n===vc||n===yc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===gc||n===vc)return c===Tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===yc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xc||n===Sc||n===Mc||n===Ec||n===bc||n===wc||n===Tc||n===Ac||n===Cc||n===Rc||n===Pc||n===Dc||n===Lc||n===Ic)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===xc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ec)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ac)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lc)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ic)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===Nc||n===Fc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Eo)return c===Tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dd||n===Uc||n===Oc||n===kc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Eo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Uc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class SE extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class to extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ME={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new to,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new to,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new to,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,c=null;const l=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,n),v=this._getHandJoint(d,E);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const p=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],_=p.position.distanceTo(m.position),y=.02,M=.005;d.inputState.pinching&&_>y+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=y-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(ME)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new to;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const EE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bE=`
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

}`;class wE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new tn,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mi({vertexShader:EE,fragmentShader:bE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new zo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TE extends ji{constructor(e,t){super();const n=this;let r=null,o=1,c=null,l="local-floor",h=1,d=null,p=null,m=null,_=null,y=null,M=null;const E=new wE,x=t.getContextAttributes();let v=null,F=null;const P=[],C=[],V=new Ae;let L=null;const B=new gn;B.viewport=new Et;const H=new gn;H.viewport=new Et;const I=[B,H],b=new SE;let O=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ve=P[oe];return ve===void 0&&(ve=new Oa,P[oe]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(oe){let ve=P[oe];return ve===void 0&&(ve=new Oa,P[oe]=ve),ve.getGripSpace()},this.getHand=function(oe){let ve=P[oe];return ve===void 0&&(ve=new Oa,P[oe]=ve),ve.getHandSpace()};function Z(oe){const ve=C.indexOf(oe.inputSource);if(ve===-1)return;const Ue=P[ve];Ue!==void 0&&(Ue.update(oe.inputSource,oe.frame,d||c),Ue.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Q(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",ne);for(let oe=0;oe<P.length;oe++){const ve=C[oe];ve!==null&&(C[oe]=null,P[oe].disconnect(ve))}O=null,q=null,E.reset(),e.setRenderTarget(v),y=null,_=null,m=null,r=null,F=null,ht.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){l=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(oe){d=oe},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",ne),x.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(V),r.renderState.layers===void 0){const ve={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new Xi(y.framebufferWidth,y.framebufferHeight,{format:wn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ve=null,Ue=null,be=null;x.depth&&(be=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=x.stencil?Ar:yr,Ue=x.stencil?Tr:Wi);const pe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:o};m=new XRWebGLBinding(r,t),_=m.createProjectionLayer(pe),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),F=new Xi(_.textureWidth,_.textureHeight,{format:wn,type:oi,depthTexture:new Td(_.textureWidth,_.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await r.requestReferenceSpace(l),ht.setContext(r),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ne(oe){for(let ve=0;ve<oe.removed.length;ve++){const Ue=oe.removed[ve],be=C.indexOf(Ue);be>=0&&(C[be]=null,P[be].disconnect(Ue))}for(let ve=0;ve<oe.added.length;ve++){const Ue=oe.added[ve];let be=C.indexOf(Ue);if(be===-1){for(let Me=0;Me<P.length;Me++)if(Me>=C.length){C.push(Ue),be=Me;break}else if(C[Me]===null){C[Me]=Ue,be=Me;break}if(be===-1)break}const pe=P[be];pe&&pe.connect(Ue)}}const ie=new z,me=new z;function se(oe,ve,Ue){ie.setFromMatrixPosition(ve.matrixWorld),me.setFromMatrixPosition(Ue.matrixWorld);const be=ie.distanceTo(me),pe=ve.projectionMatrix.elements,Me=Ue.projectionMatrix.elements,Je=pe[14]/(pe[10]-1),ct=pe[14]/(pe[10]+1),X=(pe[9]+1)/pe[5],he=(pe[9]-1)/pe[5],k=(pe[8]-1)/pe[0],$e=(Me[8]+1)/Me[0],Ee=Je*k,ze=Je*$e,Re=be/(-k+$e),Ze=Re*-k;if(ve.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Ze),oe.translateZ(Re),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),pe[10]===-1)oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Fe=Je+Re,N=ct+Re,R=Ee-Ze,ee=ze+(be-Ze),de=X*ct/N*Fe,fe=he*ct/N*Fe;oe.projectionMatrix.makePerspective(R,ee,de,fe,Fe,N),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Ce(oe,ve){ve===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ve.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let ve=oe.near,Ue=oe.far;E.texture!==null&&(E.depthNear>0&&(ve=E.depthNear),E.depthFar>0&&(Ue=E.depthFar)),b.near=H.near=B.near=ve,b.far=H.far=B.far=Ue,(O!==b.near||q!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),O=b.near,q=b.far),B.layers.mask=oe.layers.mask|2,H.layers.mask=oe.layers.mask|4,b.layers.mask=B.layers.mask|H.layers.mask;const be=oe.parent,pe=b.cameras;Ce(b,be);for(let Me=0;Me<pe.length;Me++)Ce(pe[Me],be);pe.length===2?se(b,B,H):b.projectionMatrix.copy(B.projectionMatrix),Le(oe,b,be)};function Le(oe,ve,Ue){Ue===null?oe.matrix.copy(ve.matrixWorld):(oe.matrix.copy(Ue.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ve.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Cr*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(_===null&&y===null))return h},this.setFoveation=function(oe){h=oe,_!==null&&(_.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(b)};let Oe=null;function Ke(oe,ve){if(p=ve.getViewerPose(d||c),M=ve,p!==null){const Ue=p.views;y!==null&&(e.setRenderTargetFramebuffer(F,y.framebuffer),e.setRenderTarget(F));let be=!1;Ue.length!==b.cameras.length&&(b.cameras.length=0,be=!0);for(let Me=0;Me<Ue.length;Me++){const Je=Ue[Me];let ct=null;if(y!==null)ct=y.getViewport(Je);else{const he=m.getViewSubImage(_,Je);ct=he.viewport,Me===0&&(e.setRenderTargetTextures(F,he.colorTexture,_.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(F))}let X=I[Me];X===void 0&&(X=new gn,X.layers.enable(Me),X.viewport=new Et,I[Me]=X),X.matrix.fromArray(Je.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(Je.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(ct.x,ct.y,ct.width,ct.height),Me===0&&(b.matrix.copy(X.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),be===!0&&b.cameras.push(X)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")){const Me=m.getDepthInformation(Ue[0]);Me&&Me.isValid&&Me.texture&&E.init(e,Me,r.renderState)}}for(let Ue=0;Ue<P.length;Ue++){const be=C[Ue],pe=P[Ue];be!==null&&pe!==void 0&&pe.update(be,ve,d||c)}Oe&&Oe(oe,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),M=null}const ht=new bd;ht.setAnimationLoop(Ke),this.setAnimationLoop=function(oe){Oe=oe},this.dispose=function(){}}}const Ui=new An,AE=new at;function CE(i,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function n(x,v){v.color.getRGB(x.fogColor.value,Sd(i)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function r(x,v,F,P,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?o(x,v):v.isMeshToonMaterial?(o(x,v),m(x,v)):v.isMeshPhongMaterial?(o(x,v),p(x,v)):v.isMeshStandardMaterial?(o(x,v),_(x,v),v.isMeshPhysicalMaterial&&y(x,v,C)):v.isMeshMatcapMaterial?(o(x,v),M(x,v)):v.isMeshDepthMaterial?o(x,v):v.isMeshDistanceMaterial?(o(x,v),E(x,v)):v.isMeshNormalMaterial?o(x,v):v.isLineBasicMaterial?(c(x,v),v.isLineDashedMaterial&&l(x,v)):v.isPointsMaterial?h(x,v,F,P):v.isSpriteMaterial?d(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===ln&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===ln&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const F=e.get(v),P=F.envMap,C=F.envMapRotation;P&&(x.envMap.value=P,Ui.copy(C),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),x.envMapRotation.value.setFromMatrix4(AE.makeRotationFromEuler(Ui)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function c(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function l(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function h(x,v,F,P){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*F,x.scale.value=P*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function d(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function m(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function y(x,v,F){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ln&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=F.texture,x.transmissionSamplerSize.value.set(F.width,F.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,v){v.matcap&&(x.matcap.value=v.matcap)}function E(x,v){const F=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(F.matrixWorld),x.nearDistance.value=F.shadow.camera.near,x.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function RE(i,e,t,n){let r={},o={},c=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(F,P){const C=P.program;n.uniformBlockBinding(F,C)}function d(F,P){let C=r[F.id];C===void 0&&(M(F),C=p(F),r[F.id]=C,F.addEventListener("dispose",x));const V=P.program;n.updateUBOMapping(F,V);const L=e.render.frame;o[F.id]!==L&&(_(F),o[F.id]=L)}function p(F){const P=m();F.__bindingPointIndex=P;const C=i.createBuffer(),V=F.__size,L=F.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,V,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,C),C}function m(){for(let F=0;F<l;F++)if(c.indexOf(F)===-1)return c.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(F){const P=r[F.id],C=F.uniforms,V=F.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let L=0,B=C.length;L<B;L++){const H=Array.isArray(C[L])?C[L]:[C[L]];for(let I=0,b=H.length;I<b;I++){const O=H[I];if(y(O,L,I,V)===!0){const q=O.__offset,Z=Array.isArray(O.value)?O.value:[O.value];let Q=0;for(let ne=0;ne<Z.length;ne++){const ie=Z[ne],me=E(ie);typeof ie=="number"||typeof ie=="boolean"?(O.__data[0]=ie,i.bufferSubData(i.UNIFORM_BUFFER,q+Q,O.__data)):ie.isMatrix3?(O.__data[0]=ie.elements[0],O.__data[1]=ie.elements[1],O.__data[2]=ie.elements[2],O.__data[3]=0,O.__data[4]=ie.elements[3],O.__data[5]=ie.elements[4],O.__data[6]=ie.elements[5],O.__data[7]=0,O.__data[8]=ie.elements[6],O.__data[9]=ie.elements[7],O.__data[10]=ie.elements[8],O.__data[11]=0):(ie.toArray(O.__data,Q),Q+=me.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(F,P,C,V){const L=F.value,B=P+"_"+C;if(V[B]===void 0)return typeof L=="number"||typeof L=="boolean"?V[B]=L:V[B]=L.clone(),!0;{const H=V[B];if(typeof L=="number"||typeof L=="boolean"){if(H!==L)return V[B]=L,!0}else if(H.equals(L)===!1)return H.copy(L),!0}return!1}function M(F){const P=F.uniforms;let C=0;const V=16;for(let B=0,H=P.length;B<H;B++){const I=Array.isArray(P[B])?P[B]:[P[B]];for(let b=0,O=I.length;b<O;b++){const q=I[b],Z=Array.isArray(q.value)?q.value:[q.value];for(let Q=0,ne=Z.length;Q<ne;Q++){const ie=Z[Q],me=E(ie),se=C%V,Ce=se%me.boundary,Le=se+Ce;C+=Ce,Le!==0&&V-Le<me.storage&&(C+=V-Le),q.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=C,C+=me.storage}}}const L=C%V;return L>0&&(C+=V-L),F.__size=C,F.__cache={},this}function E(F){const P={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(P.boundary=4,P.storage=4):F.isVector2?(P.boundary=8,P.storage=8):F.isVector3||F.isColor?(P.boundary=16,P.storage=12):F.isVector4?(P.boundary=16,P.storage=16):F.isMatrix3?(P.boundary=48,P.storage=48):F.isMatrix4?(P.boundary=64,P.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),P}function x(F){const P=F.target;P.removeEventListener("dispose",x);const C=c.indexOf(P.__bindingPointIndex);c.splice(C,1),i.deleteBuffer(r[P.id]),delete r[P.id],delete o[P.id]}function v(){for(const F in r)i.deleteBuffer(r[F]);c=[],r={},o={}}return{bind:h,update:d,dispose:v}}class Rw{constructor(e={}){const{canvas:t=v0(),context:n=null,depth:r=!0,stencil:o=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=c;const M=new Uint32Array(4),E=new Int32Array(4);let x=null,v=null;const F=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=xi,this.toneMappingExposure=1;const C=this;let V=!1,L=0,B=0,H=null,I=-1,b=null;const O=new Et,q=new Et;let Z=null;const Q=new ot(0);let ne=0,ie=t.width,me=t.height,se=1,Ce=null,Le=null;const Oe=new Et(0,0,ie,me),Ke=new Et(0,0,ie,me);let ht=!1;const oe=new ll;let ve=!1,Ue=!1;const be=new at,pe=new at,Me=new z,Je=new Et,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let X=!1;function he(){return H===null?se:1}let k=n;function $e(D,$){return t.getContext(D,$)}try{const D={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qc}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",K,!1),k===null){const $="webgl2";if(k=$e($,D),k===null)throw $e($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Ee,ze,Re,Ze,Fe,N,R,ee,de,fe,ce,Ve,Pe,Be,ft,Te,Ge,et,nt,We,pt,it,wt,G;function Ie(){Ee=new FS(k),Ee.init(),it=new xE(k,Ee),ze=new RS(k,Ee,e,it),Re=new gE(k,Ee),ze.reverseDepthBuffer&&_&&Re.buffers.depth.setReversed(!0),Ze=new kS(k),Fe=new nE,N=new yE(k,Ee,Re,Fe,ze,it,Ze),R=new DS(C),ee=new NS(C),de=new X0(k),wt=new AS(k,de),fe=new US(k,de,Ze,wt),ce=new zS(k,fe,de,Ze),nt=new BS(k,ze,N),Te=new PS(Fe),Ve=new tE(C,R,ee,Ee,ze,wt,Te),Pe=new CE(C,Fe),Be=new rE,ft=new uE(Ee),et=new TS(C,R,ee,Re,ce,y,h),Ge=new mE(C,ce,ze),G=new RE(k,Ze,ze,Re),We=new CS(k,Ee,Ze),pt=new OS(k,Ee,Ze),Ze.programs=Ve.programs,C.capabilities=ze,C.extensions=Ee,C.properties=Fe,C.renderLists=Be,C.shadowMap=Ge,C.state=Re,C.info=Ze}Ie();const ae=new TE(C,k);this.xr=ae,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const D=Ee.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ee.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(D){D!==void 0&&(se=D,this.setSize(ie,me,!1))},this.getSize=function(D){return D.set(ie,me)},this.setSize=function(D,$,Y=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=D,me=$,t.width=Math.floor(D*se),t.height=Math.floor($*se),Y===!0&&(t.style.width=D+"px",t.style.height=$+"px"),this.setViewport(0,0,D,$)},this.getDrawingBufferSize=function(D){return D.set(ie*se,me*se).floor()},this.setDrawingBufferSize=function(D,$,Y){ie=D,me=$,se=Y,t.width=Math.floor(D*Y),t.height=Math.floor($*Y),this.setViewport(0,0,D,$)},this.getCurrentViewport=function(D){return D.copy(O)},this.getViewport=function(D){return D.copy(Oe)},this.setViewport=function(D,$,Y,re){D.isVector4?Oe.set(D.x,D.y,D.z,D.w):Oe.set(D,$,Y,re),Re.viewport(O.copy(Oe).multiplyScalar(se).round())},this.getScissor=function(D){return D.copy(Ke)},this.setScissor=function(D,$,Y,re){D.isVector4?Ke.set(D.x,D.y,D.z,D.w):Ke.set(D,$,Y,re),Re.scissor(q.copy(Ke).multiplyScalar(se).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(D){Re.setScissorTest(ht=D)},this.setOpaqueSort=function(D){Ce=D},this.setTransparentSort=function(D){Le=D},this.getClearColor=function(D){return D.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(D=!0,$=!0,Y=!0){let re=0;if(D){let j=!1;if(H!==null){const we=H.texture.format;j=we===ol||we===sl||we===rl}if(j){const we=H.texture.type,Ne=we===oi||we===Wi||we===is||we===Tr||we===tl||we===nl,Xe=et.getClearColor(),je=et.getClearAlpha(),tt=Xe.r,rt=Xe.g,He=Xe.b;Ne?(M[0]=tt,M[1]=rt,M[2]=He,M[3]=je,k.clearBufferuiv(k.COLOR,0,M)):(E[0]=tt,E[1]=rt,E[2]=He,E[3]=je,k.clearBufferiv(k.COLOR,0,E))}else re|=k.COLOR_BUFFER_BIT}$&&(re|=k.DEPTH_BUFFER_BIT),Y&&(re|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",K,!1),Be.dispose(),ft.dispose(),Fe.dispose(),R.dispose(),ee.dispose(),ce.dispose(),wt.dispose(),G.dispose(),Ve.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ei),ae.removeEventListener("sessionend",hs),jn.stop()};function _e(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const D=Ze.autoReset,$=Ge.enabled,Y=Ge.autoUpdate,re=Ge.needsUpdate,j=Ge.type;Ie(),Ze.autoReset=D,Ge.enabled=$,Ge.autoUpdate=Y,Ge.needsUpdate=re,Ge.type=j}function K(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Qe(D){const $=D.target;$.removeEventListener("dispose",Qe),Lt($)}function Lt(D){It(D),Fe.remove(D)}function It(D){const $=Fe.get(D).programs;$!==void 0&&($.forEach(function(Y){Ve.releaseProgram(Y)}),D.isShaderMaterial&&Ve.releaseShaderCache(D))}this.renderBufferDirect=function(D,$,Y,re,j,we){$===null&&($=ct);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,Xe=ms(D,$,Y,re,j);Re.setMaterial(re,Ne);let je=Y.index,tt=1;if(re.wireframe===!0){if(je=fe.getWireframeAttribute(Y),je===void 0)return;tt=2}const rt=Y.drawRange,He=Y.attributes.position;let _t=rt.start*tt,ke=(rt.start+rt.count)*tt;we!==null&&(_t=Math.max(_t,we.start*tt),ke=Math.min(ke,(we.start+we.count)*tt)),je!==null?(_t=Math.max(_t,0),ke=Math.min(ke,je.count)):He!=null&&(_t=Math.max(_t,0),ke=Math.min(ke,He.count));const Rt=ke-_t;if(Rt<0||Rt===1/0)return;wt.setup(j,re,Xe,Y,je);let jt,Mt=We;if(je!==null&&(jt=de.get(je),Mt=pt,Mt.setIndex(jt)),j.isMesh)re.wireframe===!0?(Re.setLineWidth(re.wireframeLinewidth*he()),Mt.setMode(k.LINES)):Mt.setMode(k.TRIANGLES);else if(j.isLine){let Ye=re.linewidth;Ye===void 0&&(Ye=1),Re.setLineWidth(Ye*he()),j.isLineSegments?Mt.setMode(k.LINES):j.isLineLoop?Mt.setMode(k.LINE_LOOP):Mt.setMode(k.LINE_STRIP)}else j.isPoints?Mt.setMode(k.POINTS):j.isSprite&&Mt.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Mt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Mt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ye=j._multiDrawStarts,Cn=j._multiDrawCounts,yt=j._multiDrawCount,fn=je?de.get(je).bytesPerElement:1,Un=Fe.get(re).currentProgram.getUniforms();for(let rn=0;rn<yt;rn++)Un.setValue(k,"_gl_DrawID",rn),Mt.render(Ye[rn]/fn,Cn[rn])}else if(j.isInstancedMesh)Mt.renderInstances(_t,Rt,j.count);else if(Y.isInstancedBufferGeometry){const Ye=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Cn=Math.min(Y.instanceCount,Ye);Mt.renderInstances(_t,Rt,Cn)}else Mt.render(_t,Rt)};function dt(D,$,Y){D.transparent===!0&&D.side===ni&&D.forceSinglePass===!1?(D.side=ln,D.needsUpdate=!0,Zi(D,$,Y),D.side=Si,D.needsUpdate=!0,Zi(D,$,Y),D.side=ni):Zi(D,$,Y)}this.compile=function(D,$,Y=null){Y===null&&(Y=D),v=ft.get(Y),v.init($),P.push(v),Y.traverseVisible(function(j){j.isLight&&j.layers.test($.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),D!==Y&&D.traverseVisible(function(j){j.isLight&&j.layers.test($.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const re=new Set;return D.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const we=j.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){const Xe=we[Ne];dt(Xe,Y,j),re.add(Xe)}else dt(we,Y,j),re.add(we)}),P.pop(),v=null,re},this.compileAsync=function(D,$,Y=null){const re=this.compile(D,$,Y);return new Promise(j=>{function we(){if(re.forEach(function(Ne){Fe.get(Ne).currentProgram.isReady()&&re.delete(Ne)}),re.size===0){j(D);return}setTimeout(we,10)}Ee.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let dn=null;function kt(D){dn&&dn(D)}function Ei(){jn.stop()}function hs(){jn.start()}const jn=new bd;jn.setAnimationLoop(kt),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(D){dn=D,ae.setAnimationLoop(D),D===null?jn.stop():jn.start()},ae.addEventListener("sessionstart",Ei),ae.addEventListener("sessionend",hs),this.render=function(D,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera($),$=ae.getCamera()),D.isScene===!0&&D.onBeforeRender(C,D,$,H),v=ft.get(D,P.length),v.init($),P.push(v),pe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),oe.setFromProjectionMatrix(pe),Ue=this.localClippingEnabled,ve=Te.init(this.clippingPlanes,Ue),x=Be.get(D,F.length),x.init(),F.push(x),ae.enabled===!0&&ae.isPresenting===!0){const we=C.xr.getDepthSensingMesh();we!==null&&nn(we,$,-1/0,C.sortObjects)}nn(D,$,0,C.sortObjects),x.finish(),C.sortObjects===!0&&x.sort(Ce,Le),X=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,X&&et.addToRenderList(x,D),this.info.render.frame++,ve===!0&&Te.beginShadows();const Y=v.state.shadowsArray;Ge.render(Y,D,$),ve===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=x.opaque,j=x.transmissive;if(v.setupLights(),$.isArrayCamera){const we=$.cameras;if(j.length>0)for(let Ne=0,Xe=we.length;Ne<Xe;Ne++){const je=we[Ne];bi(re,j,D,je)}X&&et.render(D);for(let Ne=0,Xe=we.length;Ne<Xe;Ne++){const je=we[Ne];ds(x,D,je,je.viewport)}}else j.length>0&&bi(re,j,D,$),X&&et.render(D),ds(x,D,$);H!==null&&(N.updateMultisampleRenderTarget(H),N.updateRenderTargetMipmap(H)),D.isScene===!0&&D.onAfterRender(C,D,$),wt.resetDefaultState(),I=-1,b=null,P.pop(),P.length>0?(v=P[P.length-1],ve===!0&&Te.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,F.pop(),F.length>0?x=F[F.length-1]:x=null};function nn(D,$,Y,re){if(D.visible===!1)return;if(D.layers.test($.layers)){if(D.isGroup)Y=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update($);else if(D.isLight)v.pushLight(D),D.castShadow&&v.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||oe.intersectsSprite(D)){re&&Je.setFromMatrixPosition(D.matrixWorld).applyMatrix4(pe);const Ne=ce.update(D),Xe=D.material;Xe.visible&&x.push(D,Ne,Xe,Y,Je.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||oe.intersectsObject(D))){const Ne=ce.update(D),Xe=D.material;if(re&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Je.copy(D.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Je.copy(Ne.boundingSphere.center)),Je.applyMatrix4(D.matrixWorld).applyMatrix4(pe)),Array.isArray(Xe)){const je=Ne.groups;for(let tt=0,rt=je.length;tt<rt;tt++){const He=je[tt],_t=Xe[He.materialIndex];_t&&_t.visible&&x.push(D,Ne,_t,Y,Je.z,He)}}else Xe.visible&&x.push(D,Ne,Xe,Y,Je.z,null)}}const we=D.children;for(let Ne=0,Xe=we.length;Ne<Xe;Ne++)nn(we[Ne],$,Y,re)}function ds(D,$,Y,re){const j=D.opaque,we=D.transmissive,Ne=D.transparent;v.setupLightsView(Y),ve===!0&&Te.setGlobalState(C.clippingPlanes,Y),re&&Re.viewport(O.copy(re)),j.length>0&&Yn(j,$,Y),we.length>0&&Yn(we,$,Y),Ne.length>0&&Yn(Ne,$,Y),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function bi(D,$,Y,re){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[re.id]===void 0&&(v.state.transmissionRenderTarget[re.id]=new Xi(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?ls:oi,minFilter:Vi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const we=v.state.transmissionRenderTarget[re.id],Ne=re.viewport||O;we.setSize(Ne.z,Ne.w);const Xe=C.getRenderTarget();C.setRenderTarget(we),C.getClearColor(Q),ne=C.getClearAlpha(),ne<1&&C.setClearColor(16777215,.5),C.clear(),X&&et.render(Y);const je=C.toneMapping;C.toneMapping=xi;const tt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),v.setupLightsView(re),ve===!0&&Te.setGlobalState(C.clippingPlanes,re),Yn(D,Y,re),N.updateMultisampleRenderTarget(we),N.updateRenderTargetMipmap(we),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let He=0,_t=$.length;He<_t;He++){const ke=$[He],Rt=ke.object,jt=ke.geometry,Mt=ke.material,Ye=ke.group;if(Mt.side===ni&&Rt.layers.test(re.layers)){const Cn=Mt.side;Mt.side=ln,Mt.needsUpdate=!0,qi(Rt,Y,re,jt,Mt,Ye),Mt.side=Cn,Mt.needsUpdate=!0,rt=!0}}rt===!0&&(N.updateMultisampleRenderTarget(we),N.updateRenderTargetMipmap(we))}C.setRenderTarget(Xe),C.setClearColor(Q,ne),tt!==void 0&&(re.viewport=tt),C.toneMapping=je}function Yn(D,$,Y){const re=$.isScene===!0?$.overrideMaterial:null;for(let j=0,we=D.length;j<we;j++){const Ne=D[j],Xe=Ne.object,je=Ne.geometry,tt=re===null?Ne.material:re,rt=Ne.group;Xe.layers.test(Y.layers)&&qi(Xe,$,Y,je,tt,rt)}}function qi(D,$,Y,re,j,we){D.onBeforeRender(C,$,Y,re,j,we),D.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),j.onBeforeRender(C,$,Y,re,D,we),j.transparent===!0&&j.side===ni&&j.forceSinglePass===!1?(j.side=ln,j.needsUpdate=!0,C.renderBufferDirect(Y,$,re,j,D,we),j.side=Si,j.needsUpdate=!0,C.renderBufferDirect(Y,$,re,j,D,we),j.side=ni):C.renderBufferDirect(Y,$,re,j,D,we),D.onAfterRender(C,$,Y,re,j,we)}function Zi(D,$,Y){$.isScene!==!0&&($=ct);const re=Fe.get(D),j=v.state.lights,we=v.state.shadowsArray,Ne=j.state.version,Xe=Ve.getParameters(D,j.state,we,$,Y),je=Ve.getProgramCacheKey(Xe);let tt=re.programs;re.environment=D.isMeshStandardMaterial?$.environment:null,re.fog=$.fog,re.envMap=(D.isMeshStandardMaterial?ee:R).get(D.envMap||re.environment),re.envMapRotation=re.environment!==null&&D.envMap===null?$.environmentRotation:D.envMapRotation,tt===void 0&&(D.addEventListener("dispose",Qe),tt=new Map,re.programs=tt);let rt=tt.get(je);if(rt!==void 0){if(re.currentProgram===rt&&re.lightsStateVersion===Ne)return ps(D,Xe),rt}else Xe.uniforms=Ve.getUniforms(D),D.onBeforeCompile(Xe,C),rt=Ve.acquireProgram(Xe,je),tt.set(je,rt),re.uniforms=Xe.uniforms;const He=re.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(He.clippingPlanes=Te.uniform),ps(D,Xe),re.needsLights=Yo(D),re.lightsStateVersion=Ne,re.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.directionalShadowMap.value=j.state.directionalShadowMap,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotShadowMap.value=j.state.spotShadowMap,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMap.value=j.state.pointShadowMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),re.currentProgram=rt,re.uniformsList=null,rt}function fs(D){if(D.uniformsList===null){const $=D.currentProgram.getUniforms();D.uniformsList=bo.seqWithValue($.seq,D.uniforms)}return D.uniformsList}function ps(D,$){const Y=Fe.get(D);Y.outputColorSpace=$.outputColorSpace,Y.batching=$.batching,Y.batchingColor=$.batchingColor,Y.instancing=$.instancing,Y.instancingColor=$.instancingColor,Y.instancingMorph=$.instancingMorph,Y.skinning=$.skinning,Y.morphTargets=$.morphTargets,Y.morphNormals=$.morphNormals,Y.morphColors=$.morphColors,Y.morphTargetsCount=$.morphTargetsCount,Y.numClippingPlanes=$.numClippingPlanes,Y.numIntersection=$.numClipIntersection,Y.vertexAlphas=$.vertexAlphas,Y.vertexTangents=$.vertexTangents,Y.toneMapping=$.toneMapping}function ms(D,$,Y,re,j){$.isScene!==!0&&($=ct),N.resetTextureUnits();const we=$.fog,Ne=re.isMeshStandardMaterial?$.environment:null,Xe=H===null?C.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Lr,je=(re.isMeshStandardMaterial?ee:R).get(re.envMap||Ne),tt=re.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,rt=!!Y.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),He=!!Y.morphAttributes.position,_t=!!Y.morphAttributes.normal,ke=!!Y.morphAttributes.color;let Rt=xi;re.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Rt=C.toneMapping);const jt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Mt=jt!==void 0?jt.length:0,Ye=Fe.get(re),Cn=v.state.lights;if(ve===!0&&(Ue===!0||D!==b)){const Yt=D===b&&re.id===I;Te.setState(re,D,Yt)}let yt=!1;re.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Cn.state.version||Ye.outputColorSpace!==Xe||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isBatchedMesh&&Ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ye.instancingMorph===!1&&j.morphTexture!==null||Ye.envMap!==je||re.fog===!0&&Ye.fog!==we||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Te.numPlanes||Ye.numIntersection!==Te.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==rt||Ye.morphTargets!==He||Ye.morphNormals!==_t||Ye.morphColors!==ke||Ye.toneMapping!==Rt||Ye.morphTargetsCount!==Mt)&&(yt=!0):(yt=!0,Ye.__version=re.version);let fn=Ye.currentProgram;yt===!0&&(fn=Zi(re,$,j));let Un=!1,rn=!1,ci=!1;const w=fn.getUniforms(),gt=Ye.uniforms;if(Re.useProgram(fn.program)&&(Un=!0,rn=!0,ci=!0),re.id!==I&&(I=re.id,rn=!0),Un||b!==D){Re.buffers.depth.getReversed()?(be.copy(D.projectionMatrix),x0(be),S0(be),w.setValue(k,"projectionMatrix",be)):w.setValue(k,"projectionMatrix",D.projectionMatrix),w.setValue(k,"viewMatrix",D.matrixWorldInverse);const sn=w.map.cameraPosition;sn!==void 0&&sn.setValue(k,Me.setFromMatrixPosition(D.matrixWorld)),ze.logarithmicDepthBuffer&&w.setValue(k,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&w.setValue(k,"isOrthographic",D.isOrthographicCamera===!0),b!==D&&(b=D,rn=!0,ci=!0)}if(j.isSkinnedMesh){w.setOptional(k,j,"bindMatrix"),w.setOptional(k,j,"bindMatrixInverse");const Yt=j.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),w.setValue(k,"boneTexture",Yt.boneTexture,N))}j.isBatchedMesh&&(w.setOptional(k,j,"batchingTexture"),w.setValue(k,"batchingTexture",j._matricesTexture,N),w.setOptional(k,j,"batchingIdTexture"),w.setValue(k,"batchingIdTexture",j._indirectTexture,N),w.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&w.setValue(k,"batchingColorTexture",j._colorsTexture,N));const wi=Y.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&nt.update(j,Y,fn),(rn||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,w.setValue(k,"receiveShadow",j.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(gt.envMap.value=je,gt.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&$.environment!==null&&(gt.envMapIntensity.value=$.environmentIntensity),rn&&(w.setValue(k,"toneMappingExposure",C.toneMappingExposure),Ye.needsLights&&jo(gt,ci),we&&re.fog===!0&&Pe.refreshFogUniforms(gt,we),Pe.refreshMaterialUniforms(gt,re,se,me,v.state.transmissionRenderTarget[D.id]),bo.upload(k,fs(Ye),gt,N)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(bo.upload(k,fs(Ye),gt,N),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&w.setValue(k,"center",j.center),w.setValue(k,"modelViewMatrix",j.modelViewMatrix),w.setValue(k,"normalMatrix",j.normalMatrix),w.setValue(k,"modelMatrix",j.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Yt=re.uniformsGroups;for(let sn=0,On=Yt.length;sn<On;sn++){const _s=Yt[sn];G.update(_s,fn),G.bind(_s,fn)}}return fn}function jo(D,$){D.ambientLightColor.needsUpdate=$,D.lightProbe.needsUpdate=$,D.directionalLights.needsUpdate=$,D.directionalLightShadows.needsUpdate=$,D.pointLights.needsUpdate=$,D.pointLightShadows.needsUpdate=$,D.spotLights.needsUpdate=$,D.spotLightShadows.needsUpdate=$,D.rectAreaLights.needsUpdate=$,D.hemisphereLights.needsUpdate=$}function Yo(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(D,$,Y){Fe.get(D.texture).__webglTexture=$,Fe.get(D.depthTexture).__webglTexture=Y;const re=Fe.get(D);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=Y===void 0,re.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,$){const Y=Fe.get(D);Y.__webglFramebuffer=$,Y.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(D,$=0,Y=0){H=D,L=$,B=Y;let re=!0,j=null,we=!1,Ne=!1;if(D){const je=Fe.get(D);if(je.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(k.FRAMEBUFFER,null),re=!1;else if(je.__webglFramebuffer===void 0)N.setupRenderTarget(D);else if(je.__hasExternalTextures)N.rebindTextures(D,Fe.get(D.texture).__webglTexture,Fe.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const He=D.depthTexture;if(je.__boundDepthTexture!==He){if(He!==null&&Fe.has(He)&&(D.width!==He.image.width||D.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(D)}}const tt=D.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ne=!0);const rt=Fe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(rt[$])?j=rt[$][Y]:j=rt[$],we=!0):D.samples>0&&N.useMultisampledRTT(D)===!1?j=Fe.get(D).__webglMultisampledFramebuffer:Array.isArray(rt)?j=rt[Y]:j=rt,O.copy(D.viewport),q.copy(D.scissor),Z=D.scissorTest}else O.copy(Oe).multiplyScalar(se).floor(),q.copy(Ke).multiplyScalar(se).floor(),Z=ht;if(Re.bindFramebuffer(k.FRAMEBUFFER,j)&&re&&Re.drawBuffers(D,j),Re.viewport(O),Re.scissor(q),Re.setScissorTest(Z),we){const je=Fe.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+$,je.__webglTexture,Y)}else if(Ne){const je=Fe.get(D.texture),tt=$||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,je.__webglTexture,Y||0,tt)}I=-1},this.readRenderTargetPixels=function(D,$,Y,re,j,we,Ne){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Fe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ne!==void 0&&(Xe=Xe[Ne]),Xe){Re.bindFramebuffer(k.FRAMEBUFFER,Xe);try{const je=D.texture,tt=je.format,rt=je.type;if(!ze.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=D.width-re&&Y>=0&&Y<=D.height-j&&k.readPixels($,Y,re,j,it.convert(tt),it.convert(rt),we)}finally{const je=H!==null?Fe.get(H).__webglFramebuffer:null;Re.bindFramebuffer(k.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(D,$,Y,re,j,we,Ne){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Fe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ne!==void 0&&(Xe=Xe[Ne]),Xe){const je=D.texture,tt=je.format,rt=je.type;if(!ze.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=D.width-re&&Y>=0&&Y<=D.height-j){Re.bindFramebuffer(k.FRAMEBUFFER,Xe);const He=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.bufferData(k.PIXEL_PACK_BUFFER,we.byteLength,k.STREAM_READ),k.readPixels($,Y,re,j,it.convert(tt),it.convert(rt),0);const _t=H!==null?Fe.get(H).__webglFramebuffer:null;Re.bindFramebuffer(k.FRAMEBUFFER,_t);const ke=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await y0(k,ke,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,we),k.deleteBuffer(He),k.deleteSync(ke),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,$=null,Y=0){D.isTexture!==!0&&(Kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,D=arguments[1]);const re=Math.pow(2,-Y),j=Math.floor(D.image.width*re),we=Math.floor(D.image.height*re),Ne=$!==null?$.x:0,Xe=$!==null?$.y:0;N.setTexture2D(D,0),k.copyTexSubImage2D(k.TEXTURE_2D,Y,0,0,Ne,Xe,j,we),Re.unbindTexture()},this.copyTextureToTexture=function(D,$,Y=null,re=null,j=0){D.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,D=arguments[1],$=arguments[2],j=arguments[3]||0,Y=null);let we,Ne,Xe,je,tt,rt,He,_t,ke;const Rt=D.isCompressedTexture?D.mipmaps[j]:D.image;Y!==null?(we=Y.max.x-Y.min.x,Ne=Y.max.y-Y.min.y,Xe=Y.isBox3?Y.max.z-Y.min.z:1,je=Y.min.x,tt=Y.min.y,rt=Y.isBox3?Y.min.z:0):(we=Rt.width,Ne=Rt.height,Xe=Rt.depth||1,je=0,tt=0,rt=0),re!==null?(He=re.x,_t=re.y,ke=re.z):(He=0,_t=0,ke=0);const jt=it.convert($.format),Mt=it.convert($.type);let Ye;$.isData3DTexture?(N.setTexture3D($,0),Ye=k.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(N.setTexture2DArray($,0),Ye=k.TEXTURE_2D_ARRAY):(N.setTexture2D($,0),Ye=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,$.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,$.unpackAlignment);const Cn=k.getParameter(k.UNPACK_ROW_LENGTH),yt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),fn=k.getParameter(k.UNPACK_SKIP_PIXELS),Un=k.getParameter(k.UNPACK_SKIP_ROWS),rn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Rt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Rt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,je),k.pixelStorei(k.UNPACK_SKIP_ROWS,tt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,rt);const ci=D.isDataArrayTexture||D.isData3DTexture,w=$.isDataArrayTexture||$.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){const gt=Fe.get(D),wi=Fe.get($),Yt=Fe.get(gt.__renderTarget),sn=Fe.get(wi.__renderTarget);Re.bindFramebuffer(k.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Re.bindFramebuffer(k.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let On=0;On<Xe;On++)ci&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.get(D).__webglTexture,j,rt+On),D.isDepthTexture?(w&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.get($).__webglTexture,j,ke+On),k.blitFramebuffer(je,tt,we,Ne,He,_t,we,Ne,k.DEPTH_BUFFER_BIT,k.NEAREST)):w?k.copyTexSubImage3D(Ye,j,He,_t,ke+On,je,tt,we,Ne):k.copyTexSubImage2D(Ye,j,He,_t,ke+On,je,tt,we,Ne);Re.bindFramebuffer(k.READ_FRAMEBUFFER,null),Re.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else w?D.isDataTexture||D.isData3DTexture?k.texSubImage3D(Ye,j,He,_t,ke,we,Ne,Xe,jt,Mt,Rt.data):$.isCompressedArrayTexture?k.compressedTexSubImage3D(Ye,j,He,_t,ke,we,Ne,Xe,jt,Rt.data):k.texSubImage3D(Ye,j,He,_t,ke,we,Ne,Xe,jt,Mt,Rt):D.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,j,He,_t,we,Ne,jt,Mt,Rt.data):D.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,j,He,_t,Rt.width,Rt.height,jt,Rt.data):k.texSubImage2D(k.TEXTURE_2D,j,He,_t,we,Ne,jt,Mt,Rt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Cn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,yt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,fn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Un),k.pixelStorei(k.UNPACK_SKIP_IMAGES,rn),j===0&&$.generateMipmaps&&k.generateMipmap(Ye),Re.unbindTexture()},this.copyTextureToTexture3D=function(D,$,Y=null,re=null,j=0){return D.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,re=arguments[1]||null,D=arguments[2],$=arguments[3],j=arguments[4]||0),Kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,$,Y,re,j)},this.initRenderTarget=function(D){Fe.get(D).__webglFramebuffer===void 0&&N.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?N.setTextureCube(D,0):D.isData3DTexture?N.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?N.setTexture2DArray(D,0):N.setTexture2D(D,0),Re.unbindTexture()},this.resetState=function(){L=0,B=0,H=null,Re.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class Dd{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ot(e),this.near=t,this.far=n}clone(){return new Dd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Pw extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Dw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zc,this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new z;class Ld{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),o=bt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ld(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const hh=new z,dh=new Et,fh=new Et,PE=new z,ph=new at,no=new z,ka=new ai,mh=new at,Ba=new Ir;class Lw extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fu,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,no),this.boundingBox.expandByPoint(no)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,no),this.boundingSphere.expandByPoint(no)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ka.copy(this.boundingSphere),ka.applyMatrix4(r),e.ray.intersectsSphere(ka)!==!1&&(mh.copy(r).invert(),Ba.copy(e.ray).applyMatrix4(mh),!(this.boundingBox!==null&&Ba.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ba)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;dh.fromBufferAttribute(r.attributes.skinIndex,e),fh.fromBufferAttribute(r.attributes.skinWeight,e),hh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const c=fh.getComponent(o);if(c!==0){const l=dh.getComponent(o);ph.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(PE.copy(hh).applyMatrix4(ph),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class DE extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Id extends tn{constructor(e=null,t=1,n=1,r,o,c,l,h,d=yn,p=yn,m,_){super(null,c,l,h,d,p,r,o,m,_),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _h=new at,LE=new at;class Nd{constructor(e=[],t=[]){this.uuid=Tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new at;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let o=0,c=e.length;o<c;o++){const l=e[o]?e[o].matrixWorld:LE;_h.multiplyMatrices(l,t[o]),_h.toArray(n,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Nd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Id(t,e,e,wn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const o=e.bones[n];let c=t[o];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),c=new DE),this.bones.push(c),this.boneInverses.push(new at().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,o=t.length;r<o;r++){const c=t[r];e.bones.push(c.uuid);const l=n[r];e.boneInverses.push(l.toArray())}return e}}class gh extends qt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const dr=new at,vh=new at,io=[],yh=new Wn,IE=new at,Xr=new en,$r=new ai;class Iw extends en{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,IE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),yh.copy(e.boundingBox).applyMatrix4(dr),this.boundingBox.union(yh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),$r.copy(e.boundingSphere).applyMatrix4(dr),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,o=n.length+1,c=e*o+1;for(let l=0;l<n.length;l++)n[l]=r[c+l]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(n),e.ray.intersectsSphere($r)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,dr),vh.multiplyMatrices(n,dr),Xr.matrixWorld=vh,Xr.raycast(e,io);for(let c=0,l=io.length;c<l;c++){const h=io[c];h.instanceId=o,h.object=this,t.push(h)}io.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Id(new Float32Array(r*this.count),r,this.count,il,Fn));const o=this.morphTexture.source.data.data;let c=0;for(let d=0;d<n.length;d++)c+=n[d];const l=this.geometry.morphTargetsRelative?1:1-c,h=r*e;o[h]=l,o.set(n,h+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ss extends Yi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Po=new z,Do=new z,xh=new at,jr=new Ir,ro=new ai,za=new z,Sh=new z;class Fd extends Ft{constructor(e=new Zt,t=new ss){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)Po.fromBufferAttribute(t,r-1),Do.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Po.distanceTo(Do);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),ro.radius+=o,e.ray.intersectsSphere(ro)===!1)return;xh.copy(r).invert(),jr.copy(e.ray).applyMatrix4(xh);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,d=this.isLineSegments?2:1,p=n.index,_=n.attributes.position;if(p!==null){const y=Math.max(0,c.start),M=Math.min(p.count,c.start+c.count);for(let E=y,x=M-1;E<x;E+=d){const v=p.getX(E),F=p.getX(E+1),P=so(this,e,jr,h,v,F);P&&t.push(P)}if(this.isLineLoop){const E=p.getX(M-1),x=p.getX(y),v=so(this,e,jr,h,E,x);v&&t.push(v)}}else{const y=Math.max(0,c.start),M=Math.min(_.count,c.start+c.count);for(let E=y,x=M-1;E<x;E+=d){const v=so(this,e,jr,h,E,E+1);v&&t.push(v)}if(this.isLineLoop){const E=so(this,e,jr,h,M-1,y);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function so(i,e,t,n,r,o){const c=i.geometry.attributes.position;if(Po.fromBufferAttribute(c,r),Do.fromBufferAttribute(c,o),t.distanceSqToSegment(Po,Do,za,Sh)>n)return;za.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(za);if(!(h<e.near||h>e.far))return{distance:h,point:Sh.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Mh=new z,Eh=new z;class Lo extends Fd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)Mh.fromBufferAttribute(t,r),Eh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Mh.distanceTo(Eh);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nw extends Fd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class NE extends Yi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bh=new at,Vc=new Ir,oo=new ai,ao=new z;class Fw extends Ft{constructor(e=new Zt,t=new NE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),oo.radius+=o,e.ray.intersectsSphere(oo)===!1)return;bh.copy(r).invert(),Vc.copy(e.ray).applyMatrix4(bh);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,d=n.index,m=n.attributes.position;if(d!==null){const _=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let M=_,E=y;M<E;M++){const x=d.getX(M);ao.fromBufferAttribute(m,x),wh(ao,x,h,r,e,t,this)}}else{const _=Math.max(0,c.start),y=Math.min(m.count,c.start+c.count);for(let M=_,E=y;M<E;M++)ao.fromBufferAttribute(m,M),wh(ao,M,h,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function wh(i,e,t,n,r,o,c){const l=Vc.distanceSqToPoint(i);if(l<t){const h=new z;Vc.closestPointToPoint(i,h),h.applyMatrix4(n);const d=r.ray.origin.distanceTo(h);if(d<r.near||d>r.far)return;o.push({distance:d,distanceToRay:Math.sqrt(l),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),o=0;t.push(0);for(let c=1;c<=e;c++)n=this.getPoint(c/e),o+=n.distanceTo(r),t.push(o),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const o=n.length;let c;t?c=t:c=e*n[o-1];let l=0,h=o-1,d;for(;l<=h;)if(r=Math.floor(l+(h-l)/2),d=n[r]-c,d<0)l=r+1;else if(d>0)h=r-1;else{h=r;break}if(r=h,n[r]===c)return r/(o-1);const p=n[r],_=n[r+1]-p,y=(c-p)/_;return(r+y)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const c=this.getPoint(r),l=this.getPoint(o),h=t||(c.isVector2?new Ae:new z);return h.copy(l).sub(c).normalize(),h}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new z,r=[],o=[],c=[],l=new z,h=new at;for(let y=0;y<=e;y++){const M=y/e;r[y]=this.getTangentAt(M,new z)}o[0]=new z,c[0]=new z;let d=Number.MAX_VALUE;const p=Math.abs(r[0].x),m=Math.abs(r[0].y),_=Math.abs(r[0].z);p<=d&&(d=p,n.set(1,0,0)),m<=d&&(d=m,n.set(0,1,0)),_<=d&&n.set(0,0,1),l.crossVectors(r[0],n).normalize(),o[0].crossVectors(r[0],l),c[0].crossVectors(r[0],o[0]);for(let y=1;y<=e;y++){if(o[y]=o[y-1].clone(),c[y]=c[y-1].clone(),l.crossVectors(r[y-1],r[y]),l.length()>Number.EPSILON){l.normalize();const M=Math.acos(Gt(r[y-1].dot(r[y]),-1,1));o[y].applyMatrix4(h.makeRotationAxis(l,M))}c[y].crossVectors(r[y],o[y])}if(t===!0){let y=Math.acos(Gt(o[0].dot(o[e]),-1,1));y/=e,r[0].dot(l.crossVectors(o[0],o[e]))>0&&(y=-y);for(let M=1;M<=e;M++)o[M].applyMatrix4(h.makeRotationAxis(r[M],y*M)),c[M].crossVectors(r[M],o[M])}return{tangents:r,normals:o,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class hl extends Xn{constructor(e=0,t=0,n=1,r=1,o=0,c=Math.PI*2,l=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=c,this.aClockwise=l,this.aRotation=h}getPoint(e,t=new Ae){const n=t,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const c=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(c?o=0:o=r),this.aClockwise===!0&&!c&&(o===r?o=-r:o=o-r);const l=this.aStartAngle+e*o;let h=this.aX+this.xRadius*Math.cos(l),d=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const p=Math.cos(this.aRotation),m=Math.sin(this.aRotation),_=h-this.aX,y=d-this.aY;h=_*p-y*m+this.aX,d=_*m+y*p+this.aY}return n.set(h,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class FE extends hl{constructor(e,t,n,r,o,c){super(e,t,n,n,r,o,c),this.isArcCurve=!0,this.type="ArcCurve"}}function dl(){let i=0,e=0,t=0,n=0;function r(o,c,l,h){i=o,e=l,t=-3*o+3*c-2*l-h,n=2*o-2*c+l+h}return{initCatmullRom:function(o,c,l,h,d){r(c,l,d*(l-o),d*(h-c))},initNonuniformCatmullRom:function(o,c,l,h,d,p,m){let _=(c-o)/d-(l-o)/(d+p)+(l-c)/p,y=(l-c)/p-(h-c)/(p+m)+(h-l)/m;_*=p,y*=p,r(c,l,_,y)},calc:function(o){const c=o*o,l=c*o;return i+e*o+t*c+n*l}}}const co=new z,Ha=new dl,Va=new dl,Ga=new dl;class UE extends Xn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new z){const n=t,r=this.points,o=r.length,c=(o-(this.closed?0:1))*e;let l=Math.floor(c),h=c-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/o)+1)*o:h===0&&l===o-1&&(l=o-2,h=1);let d,p;this.closed||l>0?d=r[(l-1)%o]:(co.subVectors(r[0],r[1]).add(r[0]),d=co);const m=r[l%o],_=r[(l+1)%o];if(this.closed||l+2<o?p=r[(l+2)%o]:(co.subVectors(r[o-1],r[o-2]).add(r[o-1]),p=co),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let M=Math.pow(d.distanceToSquared(m),y),E=Math.pow(m.distanceToSquared(_),y),x=Math.pow(_.distanceToSquared(p),y);E<1e-4&&(E=1),M<1e-4&&(M=E),x<1e-4&&(x=E),Ha.initNonuniformCatmullRom(d.x,m.x,_.x,p.x,M,E,x),Va.initNonuniformCatmullRom(d.y,m.y,_.y,p.y,M,E,x),Ga.initNonuniformCatmullRom(d.z,m.z,_.z,p.z,M,E,x)}else this.curveType==="catmullrom"&&(Ha.initCatmullRom(d.x,m.x,_.x,p.x,this.tension),Va.initCatmullRom(d.y,m.y,_.y,p.y,this.tension),Ga.initCatmullRom(d.z,m.z,_.z,p.z,this.tension));return n.set(Ha.calc(h),Va.calc(h),Ga.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Th(i,e,t,n,r){const o=(n-e)*.5,c=(r-t)*.5,l=i*i,h=i*l;return(2*t-2*n+o+c)*h+(-3*t+3*n-2*o-c)*l+o*i+t}function OE(i,e){const t=1-i;return t*t*e}function kE(i,e){return 2*(1-i)*i*e}function BE(i,e){return i*i*e}function es(i,e,t,n){return OE(i,e)+kE(i,t)+BE(i,n)}function zE(i,e){const t=1-i;return t*t*t*e}function HE(i,e){const t=1-i;return 3*t*t*i*e}function VE(i,e){return 3*(1-i)*i*i*e}function GE(i,e){return i*i*i*e}function ts(i,e,t,n,r){return zE(i,e)+HE(i,t)+VE(i,n)+GE(i,r)}class Ud extends Xn{constructor(e=new Ae,t=new Ae,n=new Ae,r=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ae){const n=t,r=this.v0,o=this.v1,c=this.v2,l=this.v3;return n.set(ts(e,r.x,o.x,c.x,l.x),ts(e,r.y,o.y,c.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class WE extends Xn{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){const n=t,r=this.v0,o=this.v1,c=this.v2,l=this.v3;return n.set(ts(e,r.x,o.x,c.x,l.x),ts(e,r.y,o.y,c.y,l.y),ts(e,r.z,o.z,c.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Od extends Xn{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class XE extends Xn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kd extends Xn{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){const n=t,r=this.v0,o=this.v1,c=this.v2;return n.set(es(e,r.x,o.x,c.x),es(e,r.y,o.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $E extends Xn{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,r=this.v0,o=this.v1,c=this.v2;return n.set(es(e,r.x,o.x,c.x),es(e,r.y,o.y,c.y),es(e,r.z,o.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bd extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const n=t,r=this.points,o=(r.length-1)*e,c=Math.floor(o),l=o-c,h=r[c===0?c:c-1],d=r[c],p=r[c>r.length-2?r.length-1:c+1],m=r[c>r.length-3?r.length-1:c+2];return n.set(Th(l,h.x,d.x,p.x,m.x),Th(l,h.y,d.y,p.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Ae().fromArray(r))}return this}}var Gc=Object.freeze({__proto__:null,ArcCurve:FE,CatmullRomCurve3:UE,CubicBezierCurve:Ud,CubicBezierCurve3:WE,EllipseCurve:hl,LineCurve:Od,LineCurve3:XE,QuadraticBezierCurve:kd,QuadraticBezierCurve3:$E,SplineCurve:Bd});class jE extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let o=0;for(;o<r.length;){if(r[o]>=n){const c=r[o]-n,l=this.curves[o],h=l.getLength(),d=h===0?0:1-c/h;return l.getPointAt(d,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,o=this.curves;r<o.length;r++){const c=o[r],l=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(l);for(let d=0;d<h.length;d++){const p=h[d];n&&n.equals(p)||(t.push(p),n=p)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Gc[r.type]().fromJSON(r))}return this}}class Io extends jE{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Od(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const o=new kd(this.currentPoint.clone(),new Ae(e,t),new Ae(n,r));return this.curves.push(o),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,o,c){const l=new Ud(this.currentPoint.clone(),new Ae(e,t),new Ae(n,r),new Ae(o,c));return this.curves.push(l),this.currentPoint.set(o,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Bd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+l,t+h,n,r,o,c),this}absarc(e,t,n,r,o,c){return this.absellipse(e,t,n,n,r,o,c),this}ellipse(e,t,n,r,o,c,l,h){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(e+d,t+p,n,r,o,c,l,h),this}absellipse(e,t,n,r,o,c,l,h){const d=new hl(e,t,n,r,o,c,l,h);if(this.curves.length>0){const m=d.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(d);const p=d.getPoint(1);return this.currentPoint.copy(p),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class zd extends Zt{constructor(e=1,t=1,n=1,r=32,o=1,c=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:c,thetaStart:l,thetaLength:h};const d=this;r=Math.floor(r),o=Math.floor(o);const p=[],m=[],_=[],y=[];let M=0;const E=[],x=n/2;let v=0;F(),c===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(p),this.setAttribute("position",new Ut(m,3)),this.setAttribute("normal",new Ut(_,3)),this.setAttribute("uv",new Ut(y,2));function F(){const C=new z,V=new z;let L=0;const B=(t-e)/n;for(let H=0;H<=o;H++){const I=[],b=H/o,O=b*(t-e)+e;for(let q=0;q<=r;q++){const Z=q/r,Q=Z*h+l,ne=Math.sin(Q),ie=Math.cos(Q);V.x=O*ne,V.y=-b*n+x,V.z=O*ie,m.push(V.x,V.y,V.z),C.set(ne,B,ie).normalize(),_.push(C.x,C.y,C.z),y.push(Z,1-b),I.push(M++)}E.push(I)}for(let H=0;H<r;H++)for(let I=0;I<o;I++){const b=E[I][H],O=E[I+1][H],q=E[I+1][H+1],Z=E[I][H+1];(e>0||I!==0)&&(p.push(b,O,Z),L+=3),(t>0||I!==o-1)&&(p.push(O,q,Z),L+=3)}d.addGroup(v,L,0),v+=L}function P(C){const V=M,L=new Ae,B=new z;let H=0;const I=C===!0?e:t,b=C===!0?1:-1;for(let q=1;q<=r;q++)m.push(0,x*b,0),_.push(0,b,0),y.push(.5,.5),M++;const O=M;for(let q=0;q<=r;q++){const Q=q/r*h+l,ne=Math.cos(Q),ie=Math.sin(Q);B.x=I*ie,B.y=x*b,B.z=I*ne,m.push(B.x,B.y,B.z),_.push(0,b,0),L.x=ne*.5+.5,L.y=ie*.5*b+.5,y.push(L.x,L.y),M++}for(let q=0;q<r;q++){const Z=V+q,Q=O+q;C===!0?p.push(Q,Q+1,Z):p.push(Q+1,Q,Z),H+=3}d.addGroup(v,H,C===!0?1:2),v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const lo=new z,uo=new z,Wa=new z,ho=new bn;class Ah extends Zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),o=Math.cos(xr*t),c=e.getIndex(),l=e.getAttribute("position"),h=c?c.count:l.count,d=[0,0,0],p=["a","b","c"],m=new Array(3),_={},y=[];for(let M=0;M<h;M+=3){c?(d[0]=c.getX(M),d[1]=c.getX(M+1),d[2]=c.getX(M+2)):(d[0]=M,d[1]=M+1,d[2]=M+2);const{a:E,b:x,c:v}=ho;if(E.fromBufferAttribute(l,d[0]),x.fromBufferAttribute(l,d[1]),v.fromBufferAttribute(l,d[2]),ho.getNormal(Wa),m[0]=`${Math.round(E.x*r)},${Math.round(E.y*r)},${Math.round(E.z*r)}`,m[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,m[2]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let F=0;F<3;F++){const P=(F+1)%3,C=m[F],V=m[P],L=ho[p[F]],B=ho[p[P]],H=`${C}_${V}`,I=`${V}_${C}`;I in _&&_[I]?(Wa.dot(_[I].normal)<=o&&(y.push(L.x,L.y,L.z),y.push(B.x,B.y,B.z)),_[I]=null):H in _||(_[H]={index0:d[F],index1:d[P],normal:Wa.clone()})}}for(const M in _)if(_[M]){const{index0:E,index1:x}=_[M];lo.fromBufferAttribute(l,E),uo.fromBufferAttribute(l,x),y.push(lo.x,lo.y,lo.z),y.push(uo.x,uo.y,uo.z)}this.setAttribute("position",new Ut(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class wo extends Io{constructor(e){super(e),this.uuid=Tn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Io().fromJSON(r))}return this}}const YE={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let o=Hd(i,0,r,t,!0);const c=[];if(!o||o.next===o.prev)return c;let l,h,d,p,m,_,y;if(n&&(o=QE(i,e,o,t)),i.length>80*t){l=d=i[0],h=p=i[1];for(let M=t;M<r;M+=t)m=i[M],_=i[M+1],m<l&&(l=m),_<h&&(h=_),m>d&&(d=m),_>p&&(p=_);y=Math.max(d-l,p-h),y=y!==0?32767/y:0}return os(o,c,t,l,h,y,0),c}};function Hd(i,e,t,n,r){let o,c;if(r===ub(i,e,t,n)>0)for(o=e;o<t;o+=n)c=Ch(o,i[o],i[o+1],c);else for(o=t-n;o>=e;o-=n)c=Ch(o,i[o],i[o+1],c);return c&&Vo(c,c.next)&&(cs(c),c=c.next),c}function $i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Vo(t,t.next)||Nt(t.prev,t,t.next)===0)){if(cs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function os(i,e,t,n,r,o,c){if(!i)return;!c&&o&&rb(i,n,r,o);let l=i,h,d;for(;i.prev!==i.next;){if(h=i.prev,d=i.next,o?ZE(i,n,r,o):qE(i)){e.push(h.i/t|0),e.push(i.i/t|0),e.push(d.i/t|0),cs(i),i=d.next,l=d.next;continue}if(i=d,i===l){c?c===1?(i=KE($i(i),e,t),os(i,e,t,n,r,o,2)):c===2&&JE(i,e,t,n,r,o):os($i(i),e,t,n,r,o,1);break}}}function qE(i){const e=i.prev,t=i,n=i.next;if(Nt(e,t,n)>=0)return!1;const r=e.x,o=t.x,c=n.x,l=e.y,h=t.y,d=n.y,p=r<o?r<c?r:c:o<c?o:c,m=l<h?l<d?l:d:h<d?h:d,_=r>o?r>c?r:c:o>c?o:c,y=l>h?l>d?l:d:h>d?h:d;let M=n.next;for(;M!==e;){if(M.x>=p&&M.x<=_&&M.y>=m&&M.y<=y&&_r(r,l,o,h,c,d,M.x,M.y)&&Nt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function ZE(i,e,t,n){const r=i.prev,o=i,c=i.next;if(Nt(r,o,c)>=0)return!1;const l=r.x,h=o.x,d=c.x,p=r.y,m=o.y,_=c.y,y=l<h?l<d?l:d:h<d?h:d,M=p<m?p<_?p:_:m<_?m:_,E=l>h?l>d?l:d:h>d?h:d,x=p>m?p>_?p:_:m>_?m:_,v=Wc(y,M,e,t,n),F=Wc(E,x,e,t,n);let P=i.prevZ,C=i.nextZ;for(;P&&P.z>=v&&C&&C.z<=F;){if(P.x>=y&&P.x<=E&&P.y>=M&&P.y<=x&&P!==r&&P!==c&&_r(l,p,h,m,d,_,P.x,P.y)&&Nt(P.prev,P,P.next)>=0||(P=P.prevZ,C.x>=y&&C.x<=E&&C.y>=M&&C.y<=x&&C!==r&&C!==c&&_r(l,p,h,m,d,_,C.x,C.y)&&Nt(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;P&&P.z>=v;){if(P.x>=y&&P.x<=E&&P.y>=M&&P.y<=x&&P!==r&&P!==c&&_r(l,p,h,m,d,_,P.x,P.y)&&Nt(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;C&&C.z<=F;){if(C.x>=y&&C.x<=E&&C.y>=M&&C.y<=x&&C!==r&&C!==c&&_r(l,p,h,m,d,_,C.x,C.y)&&Nt(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function KE(i,e,t){let n=i;do{const r=n.prev,o=n.next.next;!Vo(r,o)&&Vd(r,n,n.next,o)&&as(r,o)&&as(o,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(o.i/t|0),cs(n),cs(n.next),n=i=o),n=n.next}while(n!==i);return $i(n)}function JE(i,e,t,n,r,o){let c=i;do{let l=c.next.next;for(;l!==c.prev;){if(c.i!==l.i&&ab(c,l)){let h=Gd(c,l);c=$i(c,c.next),h=$i(h,h.next),os(c,e,t,n,r,o,0),os(h,e,t,n,r,o,0);return}l=l.next}c=c.next}while(c!==i)}function QE(i,e,t,n){const r=[];let o,c,l,h,d;for(o=0,c=e.length;o<c;o++)l=e[o]*n,h=o<c-1?e[o+1]*n:i.length,d=Hd(i,l,h,n,!1),d===d.next&&(d.steiner=!0),r.push(ob(d));for(r.sort(eb),o=0;o<r.length;o++)t=tb(r[o],t);return t}function eb(i,e){return i.x-e.x}function tb(i,e){const t=nb(i,e);if(!t)return e;const n=Gd(t,i);return $i(n,n.next),$i(t,t.next)}function nb(i,e){let t=e,n=-1/0,r;const o=i.x,c=i.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const _=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(_<=o&&_>n&&(n=_,r=t.x<t.next.x?t:t.next,_===o))return r}t=t.next}while(t!==e);if(!r)return null;const l=r,h=r.x,d=r.y;let p=1/0,m;t=r;do o>=t.x&&t.x>=h&&o!==t.x&&_r(c<d?o:n,c,h,d,c<d?n:o,c,t.x,t.y)&&(m=Math.abs(c-t.y)/(o-t.x),as(t,i)&&(m<p||m===p&&(t.x>r.x||t.x===r.x&&ib(r,t)))&&(r=t,p=m)),t=t.next;while(t!==l);return r}function ib(i,e){return Nt(i.prev,i,e.prev)<0&&Nt(e.next,i,i.next)<0}function rb(i,e,t,n){let r=i;do r.z===0&&(r.z=Wc(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,sb(r)}function sb(i){let e,t,n,r,o,c,l,h,d=1;do{for(t=i,i=null,o=null,c=0;t;){for(c++,n=t,l=0,e=0;e<d&&(l++,n=n.nextZ,!!n);e++);for(h=d;l>0||h>0&&n;)l!==0&&(h===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,l--):(r=n,n=n.nextZ,h--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;t=n}o.nextZ=null,d*=2}while(c>1);return i}function Wc(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ob(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function _r(i,e,t,n,r,o,c,l){return(r-c)*(e-l)>=(i-c)*(o-l)&&(i-c)*(n-l)>=(t-c)*(e-l)&&(t-c)*(o-l)>=(r-c)*(n-l)}function ab(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!cb(i,e)&&(as(i,e)&&as(e,i)&&lb(i,e)&&(Nt(i.prev,i,e.prev)||Nt(i,e.prev,e))||Vo(i,e)&&Nt(i.prev,i,i.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Vo(i,e){return i.x===e.x&&i.y===e.y}function Vd(i,e,t,n){const r=po(Nt(i,e,t)),o=po(Nt(i,e,n)),c=po(Nt(t,n,i)),l=po(Nt(t,n,e));return!!(r!==o&&c!==l||r===0&&fo(i,t,e)||o===0&&fo(i,n,e)||c===0&&fo(t,i,n)||l===0&&fo(t,e,n))}function fo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function po(i){return i>0?1:i<0?-1:0}function cb(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Vd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function as(i,e){return Nt(i.prev,i,i.next)<0?Nt(i,e,i.next)>=0&&Nt(i,i.prev,e)>=0:Nt(i,e,i.prev)<0||Nt(i,i.next,e)<0}function lb(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,o=(i.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Gd(i,e){const t=new Xc(i.i,i.x,i.y),n=new Xc(e.i,e.x,e.y),r=i.next,o=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function Ch(i,e,t,n){const r=new Xc(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function cs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ub(i,e,t,n){let r=0;for(let o=e,c=t-n;o<t;o+=n)r+=(i[c]-i[o])*(i[o+1]+i[c+1]),c=o;return r}class ns{static area(e){const t=e.length;let n=0;for(let r=t-1,o=0;o<t;r=o++)n+=e[r].x*e[o].y-e[o].x*e[r].y;return n*.5}static isClockWise(e){return ns.area(e)<0}static triangulateShape(e,t){const n=[],r=[],o=[];Rh(e),Ph(n,e);let c=e.length;t.forEach(Rh);for(let h=0;h<t.length;h++)r.push(c),c+=t[h].length,Ph(n,t[h]);const l=YE.triangulate(n,r);for(let h=0;h<l.length;h+=3)o.push(l.slice(h,h+3));return o}}function Rh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ph(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class fl extends Zt{constructor(e=new wo([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],o=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];c(d)}this.setAttribute("position",new Ut(r,3)),this.setAttribute("uv",new Ut(o,2)),this.computeVertexNormals();function c(l){const h=[],d=t.curveSegments!==void 0?t.curveSegments:12,p=t.steps!==void 0?t.steps:1,m=t.depth!==void 0?t.depth:1;let _=t.bevelEnabled!==void 0?t.bevelEnabled:!0,y=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:y-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,F=t.UVGenerator!==void 0?t.UVGenerator:hb;let P,C=!1,V,L,B,H;v&&(P=v.getSpacedPoints(p),C=!0,_=!1,V=v.computeFrenetFrames(p,!1),L=new z,B=new z,H=new z),_||(x=0,y=0,M=0,E=0);const I=l.extractPoints(d);let b=I.shape;const O=I.holes;if(!ns.isClockWise(b)){b=b.reverse();for(let X=0,he=O.length;X<he;X++){const k=O[X];ns.isClockWise(k)&&(O[X]=k.reverse())}}const Z=ns.triangulateShape(b,O),Q=b;for(let X=0,he=O.length;X<he;X++){const k=O[X];b=b.concat(k)}function ne(X,he,k){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(he,k)}const ie=b.length,me=Z.length;function se(X,he,k){let $e,Ee,ze;const Re=X.x-he.x,Ze=X.y-he.y,Fe=k.x-X.x,N=k.y-X.y,R=Re*Re+Ze*Ze,ee=Re*N-Ze*Fe;if(Math.abs(ee)>Number.EPSILON){const de=Math.sqrt(R),fe=Math.sqrt(Fe*Fe+N*N),ce=he.x-Ze/de,Ve=he.y+Re/de,Pe=k.x-N/fe,Be=k.y+Fe/fe,ft=((Pe-ce)*N-(Be-Ve)*Fe)/(Re*N-Ze*Fe);$e=ce+Re*ft-X.x,Ee=Ve+Ze*ft-X.y;const Te=$e*$e+Ee*Ee;if(Te<=2)return new Ae($e,Ee);ze=Math.sqrt(Te/2)}else{let de=!1;Re>Number.EPSILON?Fe>Number.EPSILON&&(de=!0):Re<-Number.EPSILON?Fe<-Number.EPSILON&&(de=!0):Math.sign(Ze)===Math.sign(N)&&(de=!0),de?($e=-Ze,Ee=Re,ze=Math.sqrt(R)):($e=Re,Ee=Ze,ze=Math.sqrt(R/2))}return new Ae($e/ze,Ee/ze)}const Ce=[];for(let X=0,he=Q.length,k=he-1,$e=X+1;X<he;X++,k++,$e++)k===he&&(k=0),$e===he&&($e=0),Ce[X]=se(Q[X],Q[k],Q[$e]);const Le=[];let Oe,Ke=Ce.concat();for(let X=0,he=O.length;X<he;X++){const k=O[X];Oe=[];for(let $e=0,Ee=k.length,ze=Ee-1,Re=$e+1;$e<Ee;$e++,ze++,Re++)ze===Ee&&(ze=0),Re===Ee&&(Re=0),Oe[$e]=se(k[$e],k[ze],k[Re]);Le.push(Oe),Ke=Ke.concat(Oe)}for(let X=0;X<x;X++){const he=X/x,k=y*Math.cos(he*Math.PI/2),$e=M*Math.sin(he*Math.PI/2)+E;for(let Ee=0,ze=Q.length;Ee<ze;Ee++){const Re=ne(Q[Ee],Ce[Ee],$e);be(Re.x,Re.y,-k)}for(let Ee=0,ze=O.length;Ee<ze;Ee++){const Re=O[Ee];Oe=Le[Ee];for(let Ze=0,Fe=Re.length;Ze<Fe;Ze++){const N=ne(Re[Ze],Oe[Ze],$e);be(N.x,N.y,-k)}}}const ht=M+E;for(let X=0;X<ie;X++){const he=_?ne(b[X],Ke[X],ht):b[X];C?(B.copy(V.normals[0]).multiplyScalar(he.x),L.copy(V.binormals[0]).multiplyScalar(he.y),H.copy(P[0]).add(B).add(L),be(H.x,H.y,H.z)):be(he.x,he.y,0)}for(let X=1;X<=p;X++)for(let he=0;he<ie;he++){const k=_?ne(b[he],Ke[he],ht):b[he];C?(B.copy(V.normals[X]).multiplyScalar(k.x),L.copy(V.binormals[X]).multiplyScalar(k.y),H.copy(P[X]).add(B).add(L),be(H.x,H.y,H.z)):be(k.x,k.y,m/p*X)}for(let X=x-1;X>=0;X--){const he=X/x,k=y*Math.cos(he*Math.PI/2),$e=M*Math.sin(he*Math.PI/2)+E;for(let Ee=0,ze=Q.length;Ee<ze;Ee++){const Re=ne(Q[Ee],Ce[Ee],$e);be(Re.x,Re.y,m+k)}for(let Ee=0,ze=O.length;Ee<ze;Ee++){const Re=O[Ee];Oe=Le[Ee];for(let Ze=0,Fe=Re.length;Ze<Fe;Ze++){const N=ne(Re[Ze],Oe[Ze],$e);C?be(N.x,N.y+P[p-1].y,P[p-1].x+k):be(N.x,N.y,m+k)}}}oe(),ve();function oe(){const X=r.length/3;if(_){let he=0,k=ie*he;for(let $e=0;$e<me;$e++){const Ee=Z[$e];pe(Ee[2]+k,Ee[1]+k,Ee[0]+k)}he=p+x*2,k=ie*he;for(let $e=0;$e<me;$e++){const Ee=Z[$e];pe(Ee[0]+k,Ee[1]+k,Ee[2]+k)}}else{for(let he=0;he<me;he++){const k=Z[he];pe(k[2],k[1],k[0])}for(let he=0;he<me;he++){const k=Z[he];pe(k[0]+ie*p,k[1]+ie*p,k[2]+ie*p)}}n.addGroup(X,r.length/3-X,0)}function ve(){const X=r.length/3;let he=0;Ue(Q,he),he+=Q.length;for(let k=0,$e=O.length;k<$e;k++){const Ee=O[k];Ue(Ee,he),he+=Ee.length}n.addGroup(X,r.length/3-X,1)}function Ue(X,he){let k=X.length;for(;--k>=0;){const $e=k;let Ee=k-1;Ee<0&&(Ee=X.length-1);for(let ze=0,Re=p+x*2;ze<Re;ze++){const Ze=ie*ze,Fe=ie*(ze+1),N=he+$e+Ze,R=he+Ee+Ze,ee=he+Ee+Fe,de=he+$e+Fe;Me(N,R,ee,de)}}}function be(X,he,k){h.push(X),h.push(he),h.push(k)}function pe(X,he,k){Je(X),Je(he),Je(k);const $e=r.length/3,Ee=F.generateTopUV(n,r,$e-3,$e-2,$e-1);ct(Ee[0]),ct(Ee[1]),ct(Ee[2])}function Me(X,he,k,$e){Je(X),Je(he),Je($e),Je(he),Je(k),Je($e);const Ee=r.length/3,ze=F.generateSideWallUV(n,r,Ee-6,Ee-3,Ee-2,Ee-1);ct(ze[0]),ct(ze[1]),ct(ze[3]),ct(ze[1]),ct(ze[2]),ct(ze[3])}function Je(X){r.push(h[X*3+0]),r.push(h[X*3+1]),r.push(h[X*3+2])}function ct(X){o.push(X.x),o.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return db(t,n,e)}static fromJSON(e,t){const n=[];for(let o=0,c=e.shapes.length;o<c;o++){const l=t[e.shapes[o]];n.push(l)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Gc[r.type]().fromJSON(r)),new fl(n,e.options)}}const hb={generateTopUV:function(i,e,t,n,r){const o=e[t*3],c=e[t*3+1],l=e[n*3],h=e[n*3+1],d=e[r*3],p=e[r*3+1];return[new Ae(o,c),new Ae(l,h),new Ae(d,p)]},generateSideWallUV:function(i,e,t,n,r,o){const c=e[t*3],l=e[t*3+1],h=e[t*3+2],d=e[n*3],p=e[n*3+1],m=e[n*3+2],_=e[r*3],y=e[r*3+1],M=e[r*3+2],E=e[o*3],x=e[o*3+1],v=e[o*3+2];return Math.abs(l-p)<Math.abs(c-d)?[new Ae(c,1-h),new Ae(d,1-m),new Ae(_,1-M),new Ae(E,1-v)]:[new Ae(l,1-h),new Ae(p,1-m),new Ae(y,1-M),new Ae(x,1-v)]}};function db(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const o=i[n];t.shapes.push(o.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Wd extends Zt{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,c=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:c,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(c+l,Math.PI);let d=0;const p=[],m=new z,_=new z,y=[],M=[],E=[],x=[];for(let v=0;v<=n;v++){const F=[],P=v/n;let C=0;v===0&&c===0?C=.5/t:v===n&&h===Math.PI&&(C=-.5/t);for(let V=0;V<=t;V++){const L=V/t;m.x=-e*Math.cos(r+L*o)*Math.sin(c+P*l),m.y=e*Math.cos(c+P*l),m.z=e*Math.sin(r+L*o)*Math.sin(c+P*l),M.push(m.x,m.y,m.z),_.copy(m).normalize(),E.push(_.x,_.y,_.z),x.push(L+C,1-P),F.push(d++)}p.push(F)}for(let v=0;v<n;v++)for(let F=0;F<t;F++){const P=p[v][F+1],C=p[v][F],V=p[v+1][F],L=p[v+1][F+1];(v!==0||c>0)&&y.push(P,C,L),(v!==n-1||h<Math.PI)&&y.push(C,V,L)}this.setIndex(y),this.setAttribute("position",new Ut(M,3)),this.setAttribute("normal",new Ut(E,3)),this.setAttribute("uv",new Ut(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $c extends Yi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fd,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Uw extends $c{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function mo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function fb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function pb(i){function e(r,o){return i[r]-i[o]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Dh(i,e,t){const n=i.length,r=new i.constructor(n);for(let o=0,c=0;c!==n;++o){const l=t[o]*e;for(let h=0;h!==e;++h)r[c++]=i[l+h]}return r}function Xd(i,e,t,n){let r=1,o=i[0];for(;o!==void 0&&o[n]===void 0;)o=i[r++];if(o===void 0)return;let c=o[n];if(c!==void 0)if(Array.isArray(c))do c=o[n],c!==void 0&&(e.push(o.time),t.push.apply(t,c)),o=i[r++];while(o!==void 0);else if(c.toArray!==void 0)do c=o[n],c!==void 0&&(e.push(o.time),c.toArray(t,t.length)),o=i[r++];while(o!==void 0);else do c=o[n],c!==void 0&&(e.push(o.time),t.push(c)),o=i[r++];while(o!==void 0)}class Go{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],o=t[n-1];e:{t:{let c;n:{i:if(!(e<r)){for(let l=n+2;;){if(r===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(o=r,r=t[++n],e<r)break t}c=t.length;break n}if(!(e>=o)){const l=t[1];e<l&&(n=2,o=l);for(let h=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(r=o,o=t[--n-1],e>=o)break t}c=n,n=0;break n}break e}for(;n<c;){const l=n+c>>>1;e<t[l]?c=l:n=l+1}if(r=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=e*r;for(let c=0;c!==r;++c)t[c]=n[o+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class mb extends Go{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pu,endingEnd:pu}}intervalChanged_(e,t,n){const r=this.parameterPositions;let o=e-2,c=e+1,l=r[o],h=r[c];if(l===void 0)switch(this.getSettings_().endingStart){case mu:o=e,l=2*t-n;break;case _u:o=r.length-2,l=t+r[o]-r[o+1];break;default:o=e,l=n}if(h===void 0)switch(this.getSettings_().endingEnd){case mu:c=e,h=2*n-t;break;case _u:c=1,h=n+r[1]-r[0];break;default:c=e-1,h=t}const d=(n-t)*.5,p=this.valueSize;this._weightPrev=d/(t-l),this._weightNext=d/(h-n),this._offsetPrev=o*p,this._offsetNext=c*p}interpolate_(e,t,n,r){const o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,h=e*l,d=h-l,p=this._offsetPrev,m=this._offsetNext,_=this._weightPrev,y=this._weightNext,M=(n-t)/(r-t),E=M*M,x=E*M,v=-_*x+2*_*E-_*M,F=(1+_)*x+(-1.5-2*_)*E+(-.5+_)*M+1,P=(-1-y)*x+(1.5+y)*E+.5*M,C=y*x-y*E;for(let V=0;V!==l;++V)o[V]=v*c[p+V]+F*c[d+V]+P*c[h+V]+C*c[m+V];return o}}class _b extends Go{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,h=e*l,d=h-l,p=(n-t)/(r-t),m=1-p;for(let _=0;_!==l;++_)o[_]=c[d+_]*m+c[h+_]*p;return o}}class gb extends Go{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class $n{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mo(t,this.TimeBufferType),this.values=mo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mo(e.times,Array),values:mo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _b(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ao:t=this.InterpolantFactoryMethodDiscrete;break;case Bc:t=this.InterpolantFactoryMethodLinear;break;case ua:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return Bc;case this.InterpolantFactoryMethodSmooth:return ua}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let o=0,c=r-1;for(;o!==r&&n[o]<e;)++o;for(;c!==-1&&n[c]>t;)--c;if(++c,o!==0||c!==r){o>=c&&(c=Math.max(c,1),o=c-1);const l=this.getValueSize();this.times=n.slice(o,c),this.values=this.values.slice(o*l,c*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let l=0;l!==o;l++){const h=n[l];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,h),e=!1;break}if(c!==null&&c>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,h,c),e=!1;break}c=h}if(r!==void 0&&fb(r))for(let l=0,h=r.length;l!==h;++l){const d=r[l];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ua,o=e.length-1;let c=1;for(let l=1;l<o;++l){let h=!1;const d=e[l],p=e[l+1];if(d!==p&&(l!==1||d!==e[0]))if(r)h=!0;else{const m=l*n,_=m-n,y=m+n;for(let M=0;M!==n;++M){const E=t[m+M];if(E!==t[_+M]||E!==t[y+M]){h=!0;break}}}if(h){if(l!==c){e[c]=e[l];const m=l*n,_=c*n;for(let y=0;y!==n;++y)t[_+y]=t[m+y]}++c}}if(o>0){e[c]=e[o];for(let l=o*n,h=c*n,d=0;d!==n;++d)t[h+d]=t[l+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Bc;class Ur extends $n{constructor(e,t,n){super(e,t,n)}}Ur.prototype.ValueTypeName="bool";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=Ao;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class $d extends $n{}$d.prototype.ValueTypeName="color";class No extends $n{}No.prototype.ValueTypeName="number";class vb extends Go{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const o=this.resultBuffer,c=this.sampleValues,l=this.valueSize,h=(n-t)/(r-t);let d=e*l;for(let p=d+l;d!==p;d+=4)hn.slerpFlat(o,0,c,d-l,c,d,h);return o}}class Wo extends $n{InterpolantFactoryMethodLinear(e){return new vb(this.times,this.values,this.getValueSize(),e)}}Wo.prototype.ValueTypeName="quaternion";Wo.prototype.InterpolantFactoryMethodSmooth=void 0;class Or extends $n{constructor(e,t,n){super(e,t,n)}}Or.prototype.ValueTypeName="string";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=Ao;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;class Fo extends $n{}Fo.prototype.ValueTypeName="vector";class Ow{constructor(e="",t=-1,n=[],r=Wv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Tn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let c=0,l=n.length;c!==l;++c)t.push(xb(n[c]).scale(r));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,c=n.length;o!==c;++o)t.push($n.toJSON(n[o]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const o=t.length,c=[];for(let l=0;l<o;l++){let h=[],d=[];h.push((l+o-1)%o,l,(l+1)%o),d.push(0,1,0);const p=pb(h);h=Dh(h,1,p),d=Dh(d,1,p),!r&&h[0]===0&&(h.push(o),d.push(d[0])),c.push(new No(".morphTargetInfluences["+t[l].name+"]",h,d).scale(1/n))}return new this(e,-1,c)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},o=/^([\w-]*?)([\d]+)$/;for(let l=0,h=e.length;l<h;l++){const d=e[l],p=d.name.match(o);if(p&&p.length>1){const m=p[1];let _=r[m];_||(r[m]=_=[]),_.push(d)}}const c=[];for(const l in r)c.push(this.CreateFromMorphTargetSequence(l,r[l],t,n));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(m,_,y,M,E){if(y.length!==0){const x=[],v=[];Xd(y,x,v,M),x.length!==0&&E.push(new m(_,x,v))}},r=[],o=e.name||"default",c=e.fps||30,l=e.blendMode;let h=e.length||-1;const d=e.hierarchy||[];for(let m=0;m<d.length;m++){const _=d[m].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const y={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let E=0;E<_[M].morphTargets.length;E++)y[_[M].morphTargets[E]]=-1;for(const E in y){const x=[],v=[];for(let F=0;F!==_[M].morphTargets.length;++F){const P=_[M];x.push(P.time),v.push(P.morphTarget===E?1:0)}r.push(new No(".morphTargetInfluence["+E+"]",x,v))}h=y.length*c}else{const y=".bones["+t[m].name+"]";n(Fo,y+".position",_,"pos",r),n(Wo,y+".quaternion",_,"rot",r),n(Fo,y+".scale",_,"scl",r)}}return r.length===0?null:new this(o,h,r,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function yb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return No;case"vector":case"vector2":case"vector3":case"vector4":return Fo;case"color":return $d;case"quaternion":return Wo;case"bool":case"boolean":return Ur;case"string":return Or}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function xb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=yb(i.type);if(i.times===void 0){const t=[],n=[];Xd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Sb{constructor(e,t,n){const r=this;let o=!1,c=0,l=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){l++,o===!1&&r.onStart!==void 0&&r.onStart(p,c,l),o=!0},this.itemEnd=function(p){c++,r.onProgress!==void 0&&r.onProgress(p,c,l),c===l&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,m){return d.push(p,m),this},this.removeHandler=function(p){const m=d.indexOf(p);return m!==-1&&d.splice(m,2),this},this.getHandler=function(p){for(let m=0,_=d.length;m<_;m+=2){const y=d[m],M=d[m+1];if(y.global&&(y.lastIndex=0),y.test(p))return M}return null}}}const Mb=new Sb;class us{constructor(e){this.manager=e!==void 0?e:Mb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}us.DEFAULT_MATERIAL_NAME="__DEFAULT";const ei={};class Eb extends Error{constructor(e,t){super(e),this.response=t}}class kw extends us{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=vi.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:n,onError:r});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:n,onError:r});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,h=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=ei[e],m=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=_?parseInt(_):0,M=y!==0;let E=0;const x=new ReadableStream({start(v){F();function F(){m.read().then(({done:P,value:C})=>{if(P)v.close();else{E+=C.byteLength;const V=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:y});for(let L=0,B=p.length;L<B;L++){const H=p[L];H.onProgress&&H.onProgress(V)}v.enqueue(C),F()}},P=>{v.error(P)})}}});return new Response(x)}else throw new Eb(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,l));case"json":return d.json();default:if(l===void 0)return d.text();{const m=/charset="?([^;"\s]*)"?/i.exec(l),_=m&&m[1]?m[1].toLowerCase():void 0,y=new TextDecoder(_);return d.arrayBuffer().then(M=>y.decode(M))}}}).then(d=>{vi.add(e,d);const p=ei[e];delete ei[e];for(let m=0,_=p.length;m<_;m++){const y=p[m];y.onLoad&&y.onLoad(d)}}).catch(d=>{const p=ei[e];if(p===void 0)throw this.manager.itemError(e),d;delete ei[e];for(let m=0,_=p.length;m<_;m++){const y=p[m];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bb extends us{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=vi.get(e);if(c!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0),c;const l=rs("img");function h(){p(),vi.add(e,this),t&&t(this),o.manager.itemEnd(e)}function d(m){p(),r&&r(m),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){l.removeEventListener("load",h,!1),l.removeEventListener("error",d,!1)}return l.addEventListener("load",h,!1),l.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(e),l.src=e,l}}class Bw extends us{constructor(e){super(e)}load(e,t,n,r){const o=new tn,c=new bb(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(l){o.image=l,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class Xo extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class zw extends Xo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xa=new at,Lh=new z,Ih=new z;class pl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ll,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lh),Ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ih),t.updateMatrixWorld(),Xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wb extends pl{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Cr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Hw extends Xo{constructor(e,t,n=0,r=Math.PI/3,o=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=r,this.penumbra=o,this.decay=c,this.map=null,this.shadow=new wb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Nh=new at,Yr=new z,$a=new z;class Tb extends pl{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Yr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yr),$a.copy(n.position),$a.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($a),n.updateMatrixWorld(),r.makeTranslation(-Yr.x,-Yr.y,-Yr.z),Nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh)}}class Vw extends Xo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Tb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ab extends pl{constructor(){super(new wd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gw extends Xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Ab}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ww{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Xw extends us{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=vi.get(e);if(c!==void 0){if(o.manager.itemStart(e),c.then){c.then(d=>{t&&t(d),o.manager.itemEnd(e)}).catch(d=>{r&&r(d)});return}return setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0),c}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const h=fetch(e,l).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(d){return vi.add(e,d),t&&t(d),o.manager.itemEnd(e),d}).catch(function(d){r&&r(d),vi.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});vi.add(e,h),o.manager.itemStart(e)}}class $w{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Fh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fh(){return performance.now()}const ml="\\[\\]\\.:\\/",Cb=new RegExp("["+ml+"]","g"),_l="[^"+ml+"]",Rb="[^"+ml.replace("\\.","")+"]",Pb=/((?:WC+[\/:])*)/.source.replace("WC",_l),Db=/(WCOD+)?/.source.replace("WCOD",Rb),Lb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_l),Ib=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_l),Nb=new RegExp("^"+Pb+Db+Lb+Ib+"$"),Fb=["material","materials","bones","map"];class Ub{constructor(e,t,n){const r=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class At{constructor(e,t,n){this.path=t,this.parsedPath=n||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new At.Composite(e,t,n):new At(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cb,"")}static parseTrackName(e){const t=Nb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const o=n.nodeName.substring(r+1);Fb.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(o){for(let c=0;c<o.length;c++){const l=o[c];if(l.name===t||l.uuid===t)return l;const h=n(l.children);if(h)return h}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let o=t.propertyIndex;if(e||(e=At.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===d){d=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const c=e[r];if(c===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=r;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=Ub;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Uh=new at;class jd{constructor(e,t,n=0,r=1/0){this.ray=new Ir(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new cl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uh),this}intersectObject(e,t=!0,n=[]){return jc(e,this,n,t),n.sort(Oh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)jc(e[r],this,n,t);return n.sort(Oh),n}}function Oh(i,e){return i.distance-e.distance}function jc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const o=i.children;for(let c=0,l=o.length;c<l;c++)jc(o[c],e,t,!0)}}class Yc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jw extends Lo{constructor(e=10,t=10,n=4473924,r=8947848){n=new ot(n),r=new ot(r);const o=t/2,c=e/t,l=e/2,h=[],d=[];for(let _=0,y=0,M=-l;_<=t;_++,M+=c){h.push(-l,0,M,l,0,M),h.push(M,0,-l,M,0,l);const E=_===o?n:r;E.toArray(d,y),y+=3,E.toArray(d,y),y+=3,E.toArray(d,y),y+=3,E.toArray(d,y),y+=3}const p=new Zt;p.setAttribute("position",new Ut(h,3)),p.setAttribute("color",new Ut(d,3));const m=new ss({vertexColors:!0,toneMapped:!1});super(p,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ob extends Lo{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Zt;r.setAttribute("position",new Ut(t,3)),r.setAttribute("color",new Ut(n,3));const o=new ss({vertexColors:!0,toneMapped:!1});super(r,o),this.type="AxesHelper"}setColors(e,t,n){const r=new ot,o=this.geometry.attributes.color.array;return r.set(e),r.toArray(o,0),r.toArray(o,3),r.set(t),r.toArray(o,6),r.toArray(o,9),r.set(n),r.toArray(o,12),r.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class kb extends ji{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);const kh={type:"change"},gl={type:"start"},Yd={type:"end"},_o=new Ir,Bh=new _i,Bb=Math.cos(70*g0.DEG2RAD),Vt=new z,un=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ja=1e-6;class Yw extends kb{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gr.ROTATE,MIDDLE:gr.DOLLY,RIGHT:gr.PAN},this.touches={ONE:pr.ROTATE,TWO:pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new hn,this._lastTargetPosition=new z,this._quat=new hn().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yc,this._sphericalDelta=new Yc,this._scale=1,this._panOffset=new z,this._rotateStart=new Ae,this._rotateEnd=new Ae,this._rotateDelta=new Ae,this._panStart=new Ae,this._panEnd=new Ae,this._panDelta=new Ae,this._dollyStart=new Ae,this._dollyEnd=new Ae,this._dollyDelta=new Ae,this._dollyDirection=new z,this._mouse=new Ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Hb.bind(this),this._onPointerDown=zb.bind(this),this._onPointerUp=Vb.bind(this),this._onContextMenu=qb.bind(this),this._onMouseWheel=Xb.bind(this),this._onKeyDown=$b.bind(this),this._onTouchStart=jb.bind(this),this._onTouchMove=Yb.bind(this),this._onMouseDown=Gb.bind(this),this._onMouseMove=Wb.bind(this),this._interceptControlDown=Zb.bind(this),this._interceptControlUp=Kb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(kh),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;Vt.copy(t).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=un:n>Math.PI&&(n-=un),r<-Math.PI?r+=un:r>Math.PI&&(r-=un),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const l=Vt.length();c=this._clampDistance(l*this._scale);const h=l-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),o=!!h}else if(this.object.isOrthographicCamera){const l=new z(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=h!==this.object.zoom;const d=new z(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(l),this.object.updateMatrixWorld(),c=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(_o.origin.copy(this.object.position),_o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_o.direction))<Bb?this.object.lookAt(this.target):(Bh.setFromNormalAndCoplanarPoint(this.object.up,this.target),_o.intersectPlane(Bh,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>ja||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ja||this._lastTargetPosition.distanceToSquared(this.target)>ja?(this.dispatchEvent(kh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Vt.setFromMatrixColumn(t,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,t){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(t,1):(Vt.setFromMatrixColumn(t,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Vt.copy(r).sub(this.target);let o=Vt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,o=t-n.top,c=n.width,l=n.height;this._mouse.x=r/c*2-1,this._mouse.y=-(o/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(n*n+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(c,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function zb(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Hb(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Vb(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yd),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Gb(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ct.DOLLY;break;case gr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}break;case gr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(gl)}function Wb(i){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Xb(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(i.preventDefault(),this.dispatchEvent(gl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Yd))}function $b(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function jb(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case pr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ct.TOUCH_ROTATE;break;case pr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case pr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ct.TOUCH_DOLLY_PAN;break;case pr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(gl)}function Yb(i){switch(this._trackPointer(i),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ct.NONE}}function qb(i){this.enabled!==!1&&i.preventDefault()}function Zb(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kb(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const zh=new hn,go=new An(0,0,0,"XYZ");function _n(i,e=4){return(Number.isFinite(i)?i:0).toFixed(e)}function qw(i){const{bodyId:e,model:t,data:n,hudEls:r}=i,o=n.xpos,c=n.xquat,l=e*3,h=e*4,d=[o[l],o[l+1],o[l+2]],p=[c[h],c[h+1],c[h+2],c[h+3]];zh.set(p[1],p[2],p[3],p[0]),go.setFromQuaternion(zh,"XYZ");const m={x:go.x*180/Math.PI,y:go.y*180/Math.PI,z:go.z*180/Math.PI};let _=[0,0,0];try{const M=t.jnt("odc_free"),E=M.dofadr,x=typeof E=="number"?E:Number(t.jnt_dofadr[M.id]??(E==null?void 0:E[0])??0),v=n.qvel;Number.isFinite(x)&&(_=[v[x],v[x+1],v[x+2]])}catch{}const y={body:"odc",joint:"odc_free",frame:"mujoco-z-up",pos:d,quat:p,eulerDeg:m,vel:_,t:performance.now()};return typeof window<"u"&&(window.__odcPose=y),r!=null&&r.root&&!r.root.hidden&&(r.pos.textContent=`${_n(d[0])}  ${_n(d[1])}  ${_n(d[2])}`,r.quat.textContent=`${_n(p[0])}  ${_n(p[1])}  ${_n(p[2])}  ${_n(p[3])}`,r.euler.textContent=`${_n(m.x,1)}°  ${_n(m.y,1)}°  ${_n(m.z,1)}°`,r.vel.textContent=`${_n(_[0])}  ${_n(_[1])}  ${_n(_[2])}`),y}function Zw(i=.06){const e=new Ob(i);return e.name="odcBodyAxes",e.raycast=()=>{},e}const Ya=180/Math.PI,Hh=Math.PI/180,qa=new z,Vh=new Yc,Jb=new z(0,1,0),Gh=new hn,Wh=new hn;function Mn(i,e=3){return(Number.isFinite(i)?i:0).toFixed(e)}function qd(i,e){const t=e.getAzimuthalAngle(),n=e.getPolarAngle(),r=e.getDistance(),o=Math.PI/2-n;return{position:[i.position.x,i.position.y,i.position.z],target:[e.target.x,e.target.y,e.target.z],azimuthDeg:t*Ya,polarDeg:n*Ya,elevationDeg:o*Ya,distance:r}}function Xh(i,e,t,n={}){if(!t)return!1;const r=n.padding??1.55,o=n.minDistance??.12,c=new Wn().setFromObject(t);if(c.isEmpty())return!1;const l=c.getCenter(new z),h=c.getSize(new z),d=Math.max(h.x,h.y,h.z,.04),p=i.fov*Math.PI/180;let m=d*r/(2*Math.tan(p/2));m=Math.max(o,m);const _=qd(i,e);return Zd(i,e,{azimuthDeg:_.azimuthDeg,elevationDeg:_.elevationDeg,distance:m,target:[l.x,l.y,l.z]}),!0}function Zd(i,e,t){const[n,r,o]=t.target;e.target.set(n,r,o);const c=t.azimuthDeg*Hh;let l=t.elevationDeg*Hh;l=Math.max(-Math.PI/2+.001,Math.min(Math.PI/2-.001,l));const h=Math.PI/2-l,d=Math.max(1e-4,t.distance);Vh.set(d,h,c),qa.setFromSpherical(Vh),Gh.setFromUnitVectors(i.up,Jb),Wh.copy(Gh).invert(),qa.applyQuaternion(Wh),i.position.copy(e.target).add(qa),i.lookAt(e.target),e.update()}function Kw(i){const{camera:e,controls:t,view:n,parent:r=document.getElementById("app"),toggleButton:o=document.getElementById("btn-camera"),getFocusObject:c}=i;let l=document.getElementById("camera-hud");l||(l=document.createElement("aside"),l.id="camera-hud",l.setAttribute("aria-label","Camera view angle"),l.innerHTML=`
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
        <button type="button" data-act="focus">Focus selected</button>
        <button type="button" data-act="copy">Copy JSON</button>
      </div>
      <dl class="cam-live">
        <div><dt>pos</dt><dd data-live="pos">—</dd></div>
        <div><dt>az / el / dist</dt><dd data-live="aed">—</dd></div>
      </dl>
      <p class="pose-hint">Also <code>window.__cameraPose</code> each frame</p>
    `,(r||document.body).appendChild(l));const h={azimuthDeg:l.querySelector('input[data-k="azimuthDeg"]'),elevationDeg:l.querySelector('input[data-k="elevationDeg"]'),distance:l.querySelector('input[data-k="distance"]'),tx:l.querySelector('input[data-k="tx"]'),ty:l.querySelector('input[data-k="ty"]'),tz:l.querySelector('input[data-k="tz"]')},d=l.querySelector('[data-live="pos"]'),p=l.querySelector('[data-live="aed"]');let m=null;l.addEventListener("focusin",E=>{E.target instanceof HTMLInputElement&&(m=E.target)}),l.addEventListener("focusout",()=>{m=null});function _(){const E=qd(e,t),x={view:n,frame:"mujoco-z-up",...E,t:performance.now()};return typeof window<"u"&&(window.__cameraPose=x),d.textContent=`${Mn(E.position[0])}  ${Mn(E.position[1])}  ${Mn(E.position[2])}`,p.textContent=`${Mn(E.azimuthDeg,1)}°  ${Mn(E.elevationDeg,1)}°  ${Mn(E.distance,3)} m`,m||(h.azimuthDeg.value=Mn(E.azimuthDeg,1),h.elevationDeg.value=Mn(E.elevationDeg,1),h.distance.value=Mn(E.distance,3),h.tx.value=Mn(E.target[0],3),h.ty.value=Mn(E.target[1],3),h.tz.value=Mn(E.target[2],3)),x}function y(){Zd(e,t,{azimuthDeg:Number(h.azimuthDeg.value),elevationDeg:Number(h.elevationDeg.value),distance:Number(h.distance.value),target:[Number(h.tx.value),Number(h.ty.value),Number(h.tz.value)]}),_()}l.querySelector('[data-act="apply"]').addEventListener("click",y);const M=l.querySelector('[data-act="focus"]');return M==null||M.addEventListener("click",()=>{Xh(e,t,(c==null?void 0:c())??null),_()}),l.querySelector('[data-act="copy"]').addEventListener("click",async()=>{const E=_(),x=JSON.stringify(E,null,2);try{await navigator.clipboard.writeText(x)}catch{console.log("__cameraPose",E)}}),l.addEventListener("keydown",E=>{E.key==="Enter"&&E.target instanceof HTMLInputElement&&(E.preventDefault(),y())}),o&&(o.addEventListener("click",()=>{const E=!l.hidden;l.hidden=E,o.setAttribute("aria-pressed",E?"false":"true")}),o.setAttribute("aria-pressed",l.hidden?"false":"true")),_(),{update:_,applyFromInputs:y,focusSelected:()=>{const E=Xh(e,t,(c==null?void 0:c())??null);return E&&_(),E},root:l}}const Qb="(max-width: 720px)";function Jw(i){var ct;const{sections:e,focusSelected:t,onReorientModeChange:n,onPartnerModeChange:r,poseToggle:o=document.getElementById("btn-pose"),cameraToggle:c=document.getElementById("btn-camera"),defaultSection:l}=i,h=e.filter(X=>X.panel instanceof HTMLElement);if(!h.length)return{isMobile:()=>!1,openSheet(){},closeSheet(){},setSection(){},isReorientMode:()=>!1,isPartnerMode:()=>!1,setReorientMode(){},setPartnerMode(){},dispose(){}};const d=window.matchMedia(Qb);let p=!1,m=l&&h.some(X=>X.id===l)?l:h[0].id,_=!1,y=!1,M=!1;const E=new Map;for(const X of h)E.set(X.panel,{parent:X.panel.parentNode,next:X.panel.nextSibling});const x=document.createElement("button");x.type="button",x.id="btn-mobile-controls",x.className="mobile-fab",x.setAttribute("aria-controls","mobile-sheet"),x.setAttribute("aria-expanded","false"),x.hidden=!0,x.textContent="Controls";const v=document.createElement("button");v.type="button",v.className="mobile-sheet-backdrop",v.setAttribute("aria-label","Close controls"),v.hidden=!0;const F=document.createElement("div");F.id="mobile-sheet",F.className="mobile-sheet",F.setAttribute("role","dialog"),F.setAttribute("aria-modal","true"),F.setAttribute("aria-label","Lab controls"),F.hidden=!0;const P=document.createElement("div");P.className="mobile-sheet-handle",P.setAttribute("aria-hidden","true");const C=document.createElement("div");C.className="mobile-sheet-head";const V=document.createElement("strong");V.className="mobile-sheet-title",V.textContent="Controls";const L=document.createElement("button");L.type="button",L.className="mobile-sheet-close",L.setAttribute("aria-label","Close controls"),L.textContent="Done",C.append(V,L);const B=document.createElement("div");B.className="mobile-sheet-tabs",B.setAttribute("role","tablist"),B.setAttribute("aria-label","Control panels");const H=new Map;for(const X of h){const he=document.createElement("button");he.type="button",he.className="mobile-sheet-tab",he.setAttribute("role","tab"),he.dataset.section=X.id,he.id=`mobile-tab-${X.id}`,he.setAttribute("aria-controls",X.panel.id||`panel-${X.id}`),he.textContent=X.label,he.addEventListener("click",()=>oe(X.id)),B.appendChild(he),H.set(X.id,he)}const I=document.createElement("div");I.className="mobile-sheet-tools";const b=document.createElement("button");b.type="button",b.id="btn-focus-selected",b.textContent="Focus selected",b.title="Frame the camera on the selected object",b.addEventListener("click",()=>{((t==null?void 0:t())??!1)||(b.classList.add("is-flash"),window.setTimeout(()=>b.classList.remove("is-flash"),400))});const O=document.createElement("button");O.type="button",O.id="btn-reorient-mode",O.setAttribute("aria-pressed","false"),O.textContent="Reorient drag",O.title="On phone: enable drag-to-reorient (off by default so orbit/pan/zoom win)",O.addEventListener("click",()=>se(!_));const q=document.createElement("button");q.type="button",q.id="btn-partner-mode",q.setAttribute("aria-pressed","false"),q.textContent="Partner tap",q.title="Next tap sets Attach partner (phone substitute for Shift+click)",q.hidden=!h.some(X=>X.id==="selection"),q.addEventListener("click",()=>Ce(!y));const Z=document.querySelector("#topbar .nav-link");if(Z){const X=document.createElement("a");X.className="mobile-sheet-nav",X.href=Z.getAttribute("href")||"#",X.textContent=Z.textContent.trim()||"Other view",I.append(X)}I.append(b,O,q);const Q=document.createElement("p");Q.className="mobile-sheet-hint",Q.textContent="Scene first — one finger orbit, two-finger pan/zoom. Use sliders to orient; turn on Reorient drag only when needed.";const ne=document.createElement("div");ne.className="mobile-sheet-body",ne.id="mobile-sheet-body",F.append(P,C,B,I,Q,ne),(document.getElementById("app")||document.body).append(x,v,F);function me(){return d.matches}function se(X){_=!!X,document.body.classList.toggle("reorient-mode",_),O.setAttribute("aria-pressed",_?"true":"false"),n==null||n(_)}function Ce(X){y=!!X,document.body.classList.toggle("partner-mode",y),q.setAttribute("aria-pressed",y?"true":"false"),r==null||r(y)}function Le(){if(!M){for(const X of h)ne.appendChild(X.panel),X.panel.classList.add("mobile-sheet-panel");M=!0}}function Oe(){if(M){for(const X of h){const he=E.get(X.panel);X.panel.classList.remove("mobile-sheet-panel","is-mobile-active"),X.panel.removeAttribute("aria-hidden"),he!=null&&he.parent&&(he.next&&he.next.parentNode===he.parent?he.parent.insertBefore(X.panel,he.next):he.parent.appendChild(X.panel))}M=!1}}function Ke(){for(const X of h){const he=X.panel,k=me()&&p&&X.id===m;he.classList.toggle("is-mobile-active",k),he.setAttribute("data-mobile-section",X.id),me()&&(k?(X.id!=="selection"&&(he.hidden=!1),he.setAttribute("aria-hidden",he.hidden?"true":"false")):he.setAttribute("aria-hidden","true"));const $e=H.get(X.id);$e&&($e.setAttribute("aria-selected",k?"true":"false"),$e.classList.toggle("is-active",k))}}function ht(){const X=me();document.body.classList.toggle("mobile-chrome",X),x.hidden=!X,X?(Le(),p||(F.hidden=!0,v.hidden=!0,x.setAttribute("aria-expanded","false"),document.body.classList.remove("sheet-open"),document.body.removeAttribute("data-sheet"))):(p=!1,F.hidden=!0,v.hidden=!0,x.setAttribute("aria-expanded","false"),document.body.classList.remove("sheet-open"),document.body.removeAttribute("data-sheet"),Oe()),Ke()}function oe(X){me()&&(X&&h.some(he=>he.id===X)&&(m=X),Le(),p=!0,F.hidden=!1,v.hidden=!1,x.setAttribute("aria-expanded","true"),document.body.classList.add("sheet-open"),document.body.dataset.sheet=m,o&&m==="pose"&&o.setAttribute("aria-pressed","true"),c&&m==="camera"&&c.setAttribute("aria-pressed","true"),Ke())}function ve(){p=!1,F.hidden=!0,v.hidden=!0,x.setAttribute("aria-expanded","false"),document.body.classList.remove("sheet-open"),document.body.removeAttribute("data-sheet"),Ke()}function Ue(X){p?oe(X):m=X}x.addEventListener("click",()=>{p?ve():oe(m)}),L.addEventListener("click",()=>ve()),v.addEventListener("click",()=>ve()),o==null||o.addEventListener("click",X=>{me()&&(X.preventDefault(),X.stopImmediatePropagation(),p&&m==="pose"?ve():oe("pose"))},!0),c==null||c.addEventListener("click",X=>{me()&&(X.preventDefault(),X.stopImmediatePropagation(),p&&m==="camera"?ve():oe("camera"))},!0);function be(){if(ht(),me()){ve();const X=document.getElementById("pose-hud"),he=document.getElementById("camera-hud");X&&(X.hidden=!1),he&&(he.hidden=!1),o==null||o.setAttribute("aria-pressed","false"),c==null||c.setAttribute("aria-pressed","false")}}ht(),me()&&(ve(),o==null||o.setAttribute("aria-pressed","false"),c==null||c.setAttribute("aria-pressed","false")),d.addEventListener("change",be);const pe=(ct=h.find(X=>X.id==="selection"))==null?void 0:ct.panel,Me=pe&&new MutationObserver(()=>{const X=H.get("selection");X&&(X.classList.toggle("has-selection",!pe.hidden),me()&&p&&m==="selection"&&Ke())});pe&&Me&&Me.observe(pe,{attributes:!0,attributeFilter:["hidden"]});function Je(){Ce(!1)}return document.body.addEventListener("lab-partner-consumed",Je),{isMobile:me,openSheet:oe,closeSheet:ve,setSection:Ue,isReorientMode:()=>_,isPartnerMode:()=>y,setReorientMode:se,setPartnerMode:Ce,dispose:()=>{d.removeEventListener("change",be),document.body.removeEventListener("lab-partner-consumed",Je),Me==null||Me.disconnect(),Oe(),x.remove(),v.remove(),F.remove(),document.body.classList.remove("mobile-chrome","sheet-open","reorient-mode","partner-mode"),document.body.removeAttribute("data-sheet")}}}function ew(i,e){return i.pointerType==="touch"||i.pointerType==="pen"?!!document.body.classList.contains("reorient-mode"):!0}async function $h(i){const e=await fetch(i);if(!e.ok)throw new Error(`Failed to fetch ${i} (${e.status})`);return e.text()}function tw(i,e,t={}){const n=new i.MjVFS,r=new TextEncoder;for(const[c,l]of Object.entries(t))n.addBuffer(c,r.encode(l));const o=i.MjModel.from_xml_string(e,n);if(!o)throw new Error("MjModel.from_xml_string failed");return o}async function Qw(i,e,t={}){const n=await $h(e),r={};return await Promise.all(Object.entries(t).map(async([o,c])=>{r[o]=await $h(c)})),tw(i,n,r)}const jh="/physical/models/sg90/cad/GrabCAD_SG90_body.step",qr=.0155,Gi=21,Uo=360/Gi;let vn=0;const nw={linearUnit:"millimeter",linearDeflectionType:"absolute_value",linearDeflection:.06,angularDeflection:.3},Pr={cross:{id:"cross",label:"Cross (4 pads)",blurb:"GrabCAD cross — default",kind:"step",step:"/physical/models/sg90/cad/GrabCAD_SG90_cross_horn.step",align:"cross",default:!0},single:{id:"single",label:"1-arm",blurb:"Fewer pads — FreeCAD/GrabCAD 1-arm",kind:"step",step:"/physical/models/sg90/cad/SG90-1-arm-horn.step",align:"single"},short:{id:"short",label:"Short",blurb:"Short kit arm (~14 mm) — parametric",kind:"parametric",parametric:"short"},long:{id:"long",label:"Long / wide",blurb:"Long kit arm (~30 mm) — parametric",kind:"parametric",parametric:"long"},double:{id:"double",label:"2-arm",blurb:"Straight bar through hub (kit) — parametric",kind:"parametric",parametric:"double"}};function iw(){var i;return((i=Object.values(Pr).find(e=>e.default))==null?void 0:i.id)||"cross"}function qc(i){return i&&Pr[i]?i:i==="one_arm"||i==="1arm"||i==="one-arm"?"single":iw()}function $o(i){const e=Math.trunc(Number(i));return Number.isFinite(e)?(e%Gi+Gi)%Gi:0}function Mr(i=vn){return $o(i)*Uo}function Oo(i=vn){return Mr(i)*Math.PI/180}function eT(i){const e=$o(i);return`${e} (${Mr(e).toFixed(1)}°)`}function tT(){return vn}function rw(i){if(!i)return;const e=i.getObjectByName("sg90CadHorn");e&&(e.rotation.z=Oo())}function nT(i,e){var n;vn=$o(i);const t=e||Kd||(typeof window<"u"?(n=window.__sg90Roots)==null?void 0:n.rotorRoot:null);return rw(t),typeof window<"u"&&window.__sg90Cad&&(window.__sg90Cad.hornMountIndex=vn,window.__sg90Cad.hornMountOffsetDeg=Mr(),window.__sg90Cad.hornMountOffsetRad=Oo(),window.__sg90Cad.splineTeeth=Gi,window.__sg90Cad.splineStepDeg=Uo),vn}let Za=null,ki=null,Zc=null,Kd=null,fr=null,Kc=null,Jc=null;async function sw(){return Za||(Za=(async()=>{let i=null;try{const e=await ed(()=>import("./occt-import-js-DCqKp0QJ.js").then(t=>t.o),__vite__mapDeps([0,1]));i=e.default||e.occtimportjs||e,i&&typeof i!="function"&&typeof i.default=="function"&&(i=i.default)}catch{}return typeof i!="function"&&typeof window<"u"&&typeof window.occtimportjs=="function"&&(i=window.occtimportjs),typeof i!="function"&&(i=await new Promise((e,t)=>{const n=document.createElement("script");n.src="/physical/vendor/occt-import-js/occt-import-js.js",n.async=!0,n.onload=()=>{const r=window.occtimportjs;typeof r=="function"?e(r):t(new Error("occtimportjs global missing after script load"))},n.onerror=()=>t(new Error("failed to load /physical/vendor/occt-import-js/occt-import-js.js")),document.head.appendChild(n)})),i({locateFile:e=>e.endsWith(".wasm")?"/physical/vendor/occt-import-js/occt-import-js.wasm":e})})()),Za}function ow(i){var c,l;const e=i.attributes.position.array,t=(c=i.attributes.normal)==null?void 0:c.array,n=(l=i.index)==null?void 0:l.array,r=new Float32Array(e.length);for(let h=0;h<e.length;h++)r[h]=e[h]*.001;const o=new Zt;return o.setAttribute("position",new qt(r,3)),t&&t.length===e.length&&o.setAttribute("normal",new qt(new Float32Array(t),3)),n!=null&&n.length&&o.setIndex(Array.from(n)),o.computeVertexNormals(),o.computeBoundingBox(),o}function Jd(i){if(i.length===1)return i[0];let e=0,t=0;for(const p of i)e+=p.attributes.position.count,t+=p.index?p.index.count:p.attributes.position.count;const n=new Float32Array(e*3),r=new Float32Array(e*3),o=new Uint32Array(t);let c=0,l=0,h=0;for(const p of i){n.set(p.attributes.position.array,c),p.attributes.normal&&r.set(p.attributes.normal.array,c);const m=p.attributes.position.count;if(p.index)for(let _=0;_<p.index.count;_++)o[l++]=p.index.getX(_)+h;else for(let _=0;_<m;_++)o[l++]=h+_;c+=p.attributes.position.array.length,h+=m}const d=new Zt;return d.setAttribute("position",new qt(n,3)),d.setAttribute("normal",new qt(r,3)),d.setIndex(new qt(o,1)),d.computeBoundingBox(),d}async function Qd(i,e){var o;const t=await fetch(e);if(!t.ok)throw new Error(`fetch ${e} ${t.status}`);const n=new Uint8Array(await t.arrayBuffer()),r=i.ReadStepFile(n,nw);if(!(r!=null&&r.success)||!((o=r.meshes)!=null&&o.length))throw new Error(`STEP parse failed: ${e}`);return Jd(r.meshes.map(ow))}function aw(i){i.rotateX(Math.PI/2),i.computeBoundingBox(),i.translate(0,0,-i.boundingBox.min.z),i.computeBoundingBox();const e=i.boundingBox.max.z,t=i.attributes.position;let n=0,r=0,o=0;for(let h=0;h<t.count;h++)t.getZ(h)>e-.003&&(n+=t.getX(h),r+=t.getY(h),o+=1);o&&i.translate(-n/o,-r/o,0),i.computeBoundingBox();const c=.003;let l=-1/0;for(let h=0;h<t.count;h++){if(Math.hypot(t.getX(h),t.getY(h))<c)continue;const p=t.getZ(h);p>l&&(l=p)}return Number.isFinite(l)||(l=i.boundingBox.max.z),l}function cw(i){i.computeBoundingBox();const e=i.attributes.position,t=.004;let n=1/0;for(let r=0;r<e.count;r++){if(Math.hypot(e.getX(r),e.getY(r))<t)continue;const c=e.getZ(r);c<n&&(n=c)}Number.isFinite(n)||(n=i.boundingBox.min.z),i.translate(0,0,-n),i.computeBoundingBox()}function lw(i){i.computeBoundingBox();const e=i.attributes.position,t=72,n=new Float64Array(t);for(let h=0;h<e.count;h++){const d=e.getX(h),p=e.getY(h),m=Math.hypot(d,p);if(m<1e-9)continue;let _=Math.floor((Math.atan2(p,d)+Math.PI)/(2*Math.PI)*t);_<0&&(_=0),_>=t&&(_=t-1),m>n[_]&&(n[_]=m)}let r=0,o=-1;for(let h=0;h<t;h++)n[h]>o&&(o=n[h],r=h);const c=(r+.5)/t*2*Math.PI-Math.PI;i.rotateZ(-c),i.computeBoundingBox();const l=i.boundingBox;Math.abs(l.min.x)>l.max.x+1e-9&&(i.rotateZ(Math.PI),i.computeBoundingBox())}function ef(i){lw(i),cw(i)}function uw(i){i.rotateX(Math.PI/2),i.computeBoundingBox();const e=i.boundingBox;i.translate(-.5*(e.min.x+e.max.x),-.5*(e.min.y+e.max.y),-e.min.z),ef(i)}function hw(i){i.computeBoundingBox();let e=i.boundingBox;const t=[e.max.x-e.min.x,e.max.y-e.min.y,e.max.z-e.min.z],n=t.indexOf(Math.min(...t));n===0?i.rotateY(-Math.PI/2):n===1&&i.rotateX(Math.PI/2),i.computeBoundingBox(),e=i.boundingBox,i.translate(0,0,-e.min.z),i.computeBoundingBox(),e=i.boundingBox,i.translate(0,-.5*(e.min.y+e.max.y),0),i.computeBoundingBox(),e=i.boundingBox;const r=i.attributes.position;function o(p,m){let _=0,y=0,M=0,E=0,x=0;for(let v=0;v<r.count;v++){const F=r.getX(v);if(F<p||F>m)continue;const P=r.getY(v),C=r.getZ(v);_+=F,y+=P,M+=C,x+=P*P,E+=1}return E?{x:_/E,y:y/E,n:E,rms:Math.sqrt(x/E),meanZ:M/E}:{x:0,y:0,n:0,rms:1,meanZ:0}}const c=e.max.x-e.min.x,l=o(e.min.x,e.min.x+.28*c),h=o(e.max.x-.28*c,e.max.x),d=l.meanZ>=h.meanZ?l:h;i.translate(-d.x,-d.y,0),i.rotateX(Math.PI),ef(i)}function dw(i){let c,l,h,d,p;i==="short"?(c=.012,l=.0034,h=.0026,d=2,p=!1):i==="long"?(c=.03,l=.0034,h=.0022,d=7,p=!1):(c=.017,l=.0032,h=.0022,d=4,p=!0);const m=new wo;m.absarc(0,0,.0035,0,Math.PI*2,!1);const _=new Io;_.absarc(0,0,.00145,0,Math.PI*2,!0),m.holes.push(_);function y(P,C){for(let L=0;L<d;L++){const B=C*(.0057+L*.002);if(Math.abs(B)>c-.0015)break;const H=new Io;H.absarc(B,0,55e-5,0,Math.PI*2,!0),P.holes.push(H)}}function M(){const C=new wo;return C.moveTo(.001225,l),C.lineTo(c,h),C.absarc(c,0,h,Math.PI/2,-Math.PI/2,!0),C.lineTo(.001225,-l),C.lineTo(.001225,l),C.closePath(),y(C,1),C}function E(){const P=new wo,C=.0035*.25;return P.moveTo(-c,h),P.lineTo(-C,l),P.lineTo(C,l),P.lineTo(c,h),P.absarc(c,0,h,Math.PI/2,-Math.PI/2,!0),P.lineTo(C,-l),P.lineTo(-C,-l),P.lineTo(-c,-h),P.absarc(-c,0,h,-Math.PI/2,Math.PI/2,!0),P.closePath(),y(P,1),y(P,-1),P}const x=[m];p?x.push(E()):x.push(M());const v=x.map(P=>{const C=new fl(P,{depth:.0024,bevelEnabled:!1,curveSegments:28});return C.computeVertexNormals(),C}),F=Jd(v);for(const P of v)P!==F&&P.dispose();return F.computeBoundingBox(),F}function Yh(i){[...i.children].forEach(e=>{var t,n;e.isMesh&&(i.remove(e),e.geometry&&e.geometry!==ki&&((n=(t=e.geometry).dispose)==null||n.call(t)))})}function fw(){Kc||(Kc=new $c({color:2781050,roughness:.4,metalness:.15})),Jc||(Jc=new $c({color:15133422,roughness:.35,metalness:.08}))}async function pw(i,e){const t=Pr[e]||Pr.cross;if(t.kind==="parametric")return{geo:dw(t.parametric),provenance:`parametric:${t.parametric}`};if(!i)throw new Error("OCCT required for STEP horn");const n=await Qd(i,t.step);return t.align==="single"?hw(n):uw(n),{geo:n,provenance:t.step}}async function qh(i,e,t={}){var r;Zc=i,Kd=e;const n=qc(t.hornId);t.hornMountIndex!==void 0&&(vn=$o(t.hornMountIndex));try{fw();const c=!ki||((r=Pr[n])==null?void 0:r.kind)==="step"?await sw():null;if(!ki){const m=await Qd(c,jh);fr=aw(m),ki=m}const{geo:l,provenance:h}=await pw(c,n);Yh(i),Yh(e);const d=new en(ki,Kc);d.name="sg90CadBody",d.castShadow=!0,d.receiveShadow=!0,d.position.set(0,0,qr-fr),i.add(d);const p=new en(l,Jc);if(p.name="sg90CadHorn",p.castShadow=!0,p.receiveShadow=!0,p.position.set(0,0,0),p.rotation.z=Oo(),e.add(p),typeof window<"u"){ki.computeBoundingBox(),l.computeBoundingBox();const m=qr-fr,_=ki.boundingBox.max.z,y=l.attributes.position;let M=1/0,E=1/0;for(let C=0;C<y.count;C++){const V=Math.hypot(y.getX(C),y.getY(C)),L=y.getZ(C);V>=.004?M=Math.min(M,L):E=Math.min(E,L)}const x=p.position.z,v=m+fr,F=qr+x+M,P=qr+x+E;window.__sg90Cad={ok:!0,hornId:n,horn:Pr[n],provenance:h,body:jh,shaftZ:fr,tipZ:_,rotorZ:qr,bodyOffsetZ:m,flangeMinZ:M,collarMinZ:E,gapFlangeToBoss_mm:(F-v)*1e3,gapCollarToBoss_mm:(P-v)*1e3,hornMountIndex:vn,hornMountOffsetDeg:Mr(),hornMountOffsetRad:Oo(),splineTeeth:Gi,splineStepDeg:Uo},window.__sg90Roots={housingRoot:i,rotorRoot:e,bodyMesh:d,hornMesh:p}}return{ok:!0,hornId:n,shaftZ:fr,hornMountIndex:vn,hornMountOffsetDeg:Mr()}}catch(o){const c=String((o==null?void 0:o.message)||o);return console.warn("SG90 STEP CAD load failed; keeping box proxies",o),typeof window<"u"&&(window.__sg90Cad={ok:!1,error:c,hornId:n,hornMountIndex:vn,hornMountOffsetDeg:Mr(),splineTeeth:Gi,splineStepDeg:Uo}),{ok:!1,error:c,hornId:n,hornMountIndex:vn}}}async function iT(i,e,t){if(t!==void 0)return qh(i,e,{hornId:qc(t),hornMountIndex:vn});if(!Zc)throw new Error("setSg90Horn(rotor, id): call attachSg90CadMeshes first");return qh(Zc,i,{hornId:qc(e),hornMountIndex:vn})}const Ka=Math.PI/180;let si={yaw:0,pitch:0,roll:0};const Zh=new hn,Kh=new hn,Zr=new hn,Jh=new An(0,0,0,"ZYX");function Ja(i,e=-180,t=180){const n=Number(i);return Number.isFinite(n)?Math.max(e,Math.min(t,n)):0}function vl(){return{...si}}function rT(i={}){return i.yaw!==void 0&&(si.yaw=Ja(i.yaw)),i.pitch!==void 0&&(si.pitch=Ja(i.pitch)),i.roll!==void 0&&(si.roll=Ja(i.roll)),Dr(),vl()}function sT(){return si={yaw:0,pitch:0,roll:0},Dr(),vl()}function mw(i=si){const e=Math.round(i.yaw),t=Math.round(i.pitch),n=Math.round(i.roll);return`Y${e} P${t} R${n}`}function tf(i,e=si){return Kh.set(i[1],i[2],i[3],i[0]),Jh.set((e.roll||0)*Ka,(e.pitch||0)*Ka,(e.yaw||0)*Ka,"ZYX"),Zh.setFromEuler(Jh),Zr.copy(Zh).multiply(Kh),[Zr.w,Zr.x,Zr.y,Zr.z]}function oT(i,e){const t=i.body_quat,n=e*4;return[t[n],t[n+1],t[n+2],t[n+3]]}function aT(i,e){const t=i.qpos;return{pos:[t[e],t[e+1],t[e+2]],wxyz:[t[e+3],t[e+4],t[e+5],t[e+6]]}}function cT({mujoco:i,model:e,data:t,bodyId:n,baseWxyz:r}){if(n<0||!e||!t)return;const o=tf(r,si),c=e.body_quat,l=n*4;c[l]=o[0],c[l+1]=o[1],c[l+2]=o[2],c[l+3]=o[3],i.mj_forward(e,t),Dr()}function lT({mujoco:i,model:e,data:t,freeQposAdr:n,baseWxyz:r,pos:o,freeDofAdr:c=-1,initialQpos:l=null,running:h=!1,force:d=!1,orient:p=null}){if(n<0||!e||!t)return!1;if(h&&!d)return Dr({deferred:!0}),!1;const _=tf(r,p||si),y=t.qpos;if(o&&(y[n]=o[0],y[n+1]=o[1],y[n+2]=o[2]),y[n+3]=_[0],y[n+4]=_[1],y[n+5]=_[2],y[n+6]=_[3],c>=0)for(let M=0;M<6;M++)t.qvel[c+M]=0;return l&&(o&&(l[n]=o[0],l[n+1]=o[1],l[n+2]=o[2]),l[n+3]=_[0],l[n+4]=_[1],l[n+5]=_[2],l[n+6]=_[3]),i.mj_forward(e,t),Dr({deferred:!1}),!0}function Dr(i={}){if(typeof window>"u")return;const e=vl();window.__sg90MotorOrientation={yawDeg:e.yaw,pitchDeg:e.pitch,rollDeg:e.roll,label:mw(e),mode:"edit-while-paused / apply-on-reset (lab freejoint)",layers:"housing: world*motor*base; horn: world*motor*base*hinge*mount",...i,t:performance.now()}}Dr();const _w=4114687,gw=16756800;function uT(i,e){i.userData.labObject={...e},i.traverse(t=>{t.isMesh&&(t.userData.labObject=i.userData.labObject)})}function vw(i){var e;if(i.geometry&&!((e=i.userData)!=null&&e.shareGeometry)&&i.geometry.dispose(),i.material)if(Array.isArray(i.material))for(const t of i.material)t.dispose();else i.material.dispose()}function yw(i,e,t){const n=[];if(i.traverse(r=>{var c;if(!r.isMesh||!r.geometry||r.name==="pickProxy"||!r.visible||(c=r.userData)!=null&&c.labSelectionOutline)return;const o=Array.isArray(r.material)?r.material[0]:r.material;o&&o.opacity===0||n.push(r)}),n.length>0){const r=new Wn,o=new at,c=new at;i.updateWorldMatrix(!0,!0),o.copy(i.matrixWorld).invert();for(const l of n){l.geometry.boundingBox||l.geometry.computeBoundingBox();const h=l.geometry.boundingBox.clone();l.updateWorldMatrix(!0,!1),c.copy(o).multiply(l.matrixWorld),h.applyMatrix4(c),r.union(h)}if(!r.isEmpty()){const l=new z,h=new z;r.getSize(l),r.getCenter(h),l.multiplyScalar(1.05);const d=new Nr(l.x||.001,l.y||.001,l.z||.001),p=new Ah(d);d.dispose();const m=new Lo(p,new ss({color:e,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1,toneMapped:!1}));m.position.copy(h),m.renderOrder=1e3,m.raycast=()=>{},m.userData.labSelectionOutline=!0,i.add(m),t.push(m)}}for(const r of n){const o=new Ro({color:e,transparent:!0,opacity:.35,depthWrite:!1,depthTest:!0,blending:To,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),c=new en(r.geometry,o);c.renderOrder=998,c.raycast=()=>{},c.userData.labSelectionOutline=!0,c.userData.shareGeometry=!0,r.add(c),t.push(c);const l=new Ro({color:e,side:ln,transparent:!0,opacity:.5,depthWrite:!1,depthTest:!0,blending:To,toneMapped:!1}),h=new en(r.geometry,l);h.scale.setScalar(1.08),h.renderOrder=997,h.raycast=()=>{},h.userData.labSelectionOutline=!0,h.userData.shareGeometry=!0,r.add(h),t.push(h);let d;try{d=new Ah(r.geometry,28)}catch{continue}if(!d.attributes.position||d.attributes.position.count===0){d.dispose();continue}const p=new ss({color:e,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,toneMapped:!1}),m=new Lo(d,p);m.renderOrder=999,m.raycast=()=>{},m.userData.labSelectionOutline=!0,r.add(m),t.push(m)}}function hT(i){const{canvas:e,camera:t,scene:n,panelEls:r,getPoseText:o,getExtraText:c,getPartnerText:l,getGroupText:h,onSelect:d,onPanelUpdate:p}=i,m=new jd,_=new Ae;let y=null,M=null,E=null,x=null;const v=[];function F(){var O;for(const q of v)(O=q.parent)==null||O.remove(q),vw(q);v.length=0}function P(){F();const O=[[M,_w],[x,gw]];for(const[q,Z]of O)q&&yw(q,Z,v)}function C(O){r.partner&&(r.partner.textContent=l?l(O,E):E?E.name:"— (Shift+click partner)"),r.group&&(r.group.textContent=h?h(O):"—")}function V(O){if(y=O,typeof window<"u"&&(window.__labSelection=O?{...O,poseText:o(O),extraText:c(O),partner:E?{id:E.id,body:E.body,name:E.name}:null,outlineCount:v.length,t:performance.now()}:null),!O){r.root.hidden=!0,r.name.textContent="—",r.type.textContent="—",r.id.textContent="—",r.pose.textContent="—",r.extra.textContent="—",C(null),d==null||d(null,E),p==null||p(null);return}r.root.hidden=!1,r.name.textContent=O.name,r.type.textContent=O.type,r.id.textContent=O.id,r.pose.textContent=o(O),r.extra.textContent=c(O),C(O),d==null||d(O,E),p==null||p(O)}function L(O,q=null,{asPartner:Z=!1}={}){if(Z&&O){y&&(y.id===O.id||y.body===O.body)?(E=null,x=null):(E=O,x=q),P(),V(y);return}M=q,E&&O&&(E.id===O.id||E.body===O.body)&&(E=null,x=null),P(),V(O)}function B(O){var Z;let q=O;for(;q;){if((Z=q.userData)!=null&&Z.labObject)return q;q=q.parent}return null}function H(O){var ne;if(O.button!==0||O.target!==e)return;const q=e.getBoundingClientRect();_.x=(O.clientX-q.left)/q.width*2-1,_.y=-((O.clientY-q.top)/q.height)*2+1,m.setFromCamera(_,t);const Z=m.intersectObjects(n.children,!0),Q=!!O.shiftKey||document.body.classList.contains("partner-mode");for(const ie of Z){const me=B(ie.object);if((ne=me==null?void 0:me.userData)!=null&&ne.labObject){L(me.userData.labObject,me,{asPartner:Q}),Q&&document.body.classList.contains("partner-mode")&&document.body.dispatchEvent(new CustomEvent("lab-partner-consumed"));return}}M=null,E=null,x=null,F(),V(null)}e.addEventListener("pointerdown",H);function I(){y&&(r.pose.textContent=o(y),r.extra.textContent=c(y),C(y),typeof window<"u"&&window.__labSelection&&(window.__labSelection.poseText=r.pose.textContent,window.__labSelection.extraText=r.extra.textContent,window.__labSelection.partner=E?{id:E.id,body:E.body,name:E.name}:null,window.__labSelection.t=performance.now()),p==null||p(y))}function b(){e.removeEventListener("pointerdown",H),F()}return{selectMeta:L,clear:()=>{M=null,E=null,x=null,F(),V(null)},getSelected:()=>y,getSelectedRoot:()=>M,getPartner:()=>E,getPartnerRoot:()=>x,setPartner:(O,q=null)=>{E=O,x=q,P(),V(y)},refreshHighlight:()=>{(M||x)&&P()},updatePanel:I,dispose:b}}const Qa=.45,Qh=4;function xw(i){return i?i.id==="sg90"||i.body==="sg90":!1}function vo(i){return i?xw(i)||i.id==="sg90_horn"||i.body==="sg90_rotor":!1}function dT(i){const{canvas:e,camera:t,orbitControls:n,getSelected:r,getSelectedRoot:o,getOrientation:c,applyOrientation:l,hintEl:h=null,onActiveChange:d,allowPointer:p}=i,m=new jd,_=new Ae;let y=!1,M=!1,E=0,x=0,v={yaw:0,pitch:0,roll:0},F=!1,P=!0,C=null;function V(ne={}){if(typeof window>"u")return;const ie=r(),me=vo(ie);window.__sg90MotorReorient={selected:me,dragging:M,hint:me?"Drag to reorient motor":null,layers:"motor_R only — hinge + 21T mount unchanged",...ne,t:performance.now()}}function L(ne){if(h)if(ne){h.hidden=!1;const ie=window.matchMedia("(pointer: coarse)").matches&&!document.body.classList.contains("reorient-mode");h.textContent=ie?"Use Motor orientation sliders — or enable Reorient drag":"Drag to reorient motor"}else h.hidden=!0}function B(ne){ne==="grabbing"?e.style.cursor="grabbing":ne==="grab"?e.style.cursor="grab":e.style.cursor=""}function H(){const ne=vo(r());L(ne),B(ne?M?"grabbing":"grab":""),d==null||d(ne),V()}function I(ne,ie){const me=o();if(!me||!vo(r()))return!1;const se=e.getBoundingClientRect();return _.x=(ne-se.left)/se.width*2-1,_.y=-((ie-se.top)/se.height)*2+1,m.setFromCamera(_,t),m.intersectObject(me,!0).length>0}function b(){if(!y&&!M)return;const ne=M;if(y=!1,M=!1,n.enabled=P,ne&&l(c(),{dragging:!1}),C!=null){try{e.releasePointerCapture(C)}catch{}C=null}H()}function O(ne){ne.button!==0||ne.target!==e||!vo(r())||!I(ne.clientX,ne.clientY)||!(p?p(ne):ew(ne))||(y=!0,M=!1,E=ne.clientX,x=ne.clientY,v={...c()},F=!!ne.shiftKey,C=ne.pointerId,P=n.enabled,V({tracking:!0}))}function q(ne){if(!y)return;const ie=ne.clientX-E,me=ne.clientY-x;if(!M){if(ie*ie+me*me<Qh*Qh)return;M=!0,n.enabled=!1;try{e.setPointerCapture(ne.pointerId),C=ne.pointerId}catch{}B("grabbing"),V({dragging:!0})}F=!!ne.shiftKey;let se;F?se={yaw:v.yaw,pitch:v.pitch,roll:v.roll+ie*Qa}:se={yaw:v.yaw+ie*Qa,pitch:v.pitch-me*Qa,roll:v.roll},l(se,{dragging:!0})}function Z(){b()}function Q(){b()}return e.addEventListener("pointerdown",O),e.addEventListener("pointermove",q),e.addEventListener("pointerup",Z),e.addEventListener("pointercancel",Q),H(),{onSelectionChange:H,isDragging:()=>M,dispose:()=>{e.removeEventListener("pointerdown",O),e.removeEventListener("pointermove",q),e.removeEventListener("pointerup",Z),e.removeEventListener("pointercancel",Q),b(),L(!1),B(""),typeof window<"u"&&(window.__sg90MotorReorient=null)}}}export{DE as $,Lw as A,qt as B,ot as C,Gw as D,en as E,kw as F,Lo as G,Fd as H,Iw as I,Nw as J,Fw as K,us as L,Uw as M,Ns as N,Ft as O,Vw as P,hn as Q,hc as R,En as S,Tw as T,to as U,Ae as V,gn as W,g0 as X,wd as Y,Nd as Z,Ow as _,Cw as a,Ao as a0,Bc as a1,Ld as a2,tn as a3,Fo as a4,No as a5,Wo as a6,St as a7,Si as a8,Go as a9,tT as aA,uT as aB,Rw as aC,pv as aD,Pw as aE,Dd as aF,Yw as aG,zw as aH,zo as aI,jw as aJ,Zw as aK,Nr as aL,Wd as aM,zd as aN,Ah as aO,Mw as aP,ww as aQ,qw as aR,$w as aS,iT as aT,nT as aU,vo as aV,Qw as aW,oT as aX,dT as aY,cT as aZ,Wn as aa,ai as ab,st as ac,Ut as ad,ed as ae,aT as af,vl as ag,rT as ah,Ja as ai,mw as aj,tf as ak,lT as al,An as am,ew as an,jd as ao,_i as ap,iw as aq,sT as ar,Pr as as,Gi as at,eT as au,$h as av,Kw as aw,hT as ax,Jw as ay,qh as az,Aw as b,Ww as c,Lr as d,Hw as e,at as f,z as g,gh as h,Bw as i,Xw as j,Dw as k,Vi as l,la as m,Gv as n,Gn as o,yn as p,dc as q,Hi as r,NE as s,Yi as t,ss as u,$c as v,ni as w,Ro as x,At as y,Zt as z};
