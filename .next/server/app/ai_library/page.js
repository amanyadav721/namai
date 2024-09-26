(()=>{var e={};e.id=638,e.ids=[638],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},9443:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>s.a,__next_app__:()=>p,originalPathname:()=>h,pages:()=>d,routeModule:()=>u,tree:()=>c}),a(6911),a(9574),a(1930),a(2523);var r=a(3191),n=a(8716),i=a(7922),s=a.n(i),o=a(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);a.d(t,l);let c=["",{children:["ai_library",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,6911)),"C:\\Users\\ad721\\Desktop\\namai\\src\\app\\ai_library\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,9574)),"C:\\Users\\ad721\\Desktop\\namai\\src\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(a.bind(a,1930)),"C:\\Users\\ad721\\Desktop\\namai\\src\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,2523)),"C:\\Users\\ad721\\Desktop\\namai\\src\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\ad721\\Desktop\\namai\\src\\app\\ai_library\\page.tsx"],h="/ai_library/page",p={require:a,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/ai_library/page",pathname:"/ai_library",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4339:(e,t,a)=>{Promise.resolve().then(a.bind(a,9690)),Promise.resolve().then(a.bind(a,270)),Promise.resolve().then(a.bind(a,1572))},4819:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2994,23)),Promise.resolve().then(a.t.bind(a,6114,23)),Promise.resolve().then(a.t.bind(a,9727,23)),Promise.resolve().then(a.t.bind(a,9671,23)),Promise.resolve().then(a.t.bind(a,1868,23)),Promise.resolve().then(a.t.bind(a,4759,23))},3070:(e,t,a)=>{Promise.resolve().then(a.bind(a,9893))},5053:(e,t,a)=>{Promise.resolve().then(a.bind(a,3846))},5303:()=>{},9893:(e,t,a)=>{"use strict";let r,n,i,s,o,l,c;a.r(t),a.d(t,{default:()=>tN});var d,h=a(326),p=a(9076),u=a.n(p);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f=function(e){let t=[],a=0;for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);n<128?t[a++]=n:(n<2048?t[a++]=n>>6|192:((64512&n)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++r)),t[a++]=n>>18|240,t[a++]=n>>12&63|128):t[a++]=n>>12|224,t[a++]=n>>6&63|128),t[a++]=63&n|128)}return t},g=function(e){let t=[],a=0,r=0;for(;a<e.length;){let n=e[a++];if(n<128)t[r++]=String.fromCharCode(n);else if(n>191&&n<224){let i=e[a++];t[r++]=String.fromCharCode((31&n)<<6|63&i)}else if(n>239&&n<365){let i=((7&n)<<18|(63&e[a++])<<12|(63&e[a++])<<6|63&e[a++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{let i=e[a++],s=e[a++];t[r++]=String.fromCharCode((15&n)<<12|(63&i)<<6|63&s)}}return t.join("")},m={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let a=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let n=e[t],i=t+1<e.length,s=i?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,c=n>>2,d=(3&n)<<4|s>>4,h=(15&s)<<2|l>>6,p=63&l;o||(p=64,i||(h=64)),r.push(a[c],a[d],a[h],a[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(f(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):g(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let a=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let n=a[e.charAt(t++)],i=t<e.length?a[e.charAt(t)]:0,s=++t<e.length?a[e.charAt(t)]:64,o=++t<e.length?a[e.charAt(t)]:64;if(++t,null==n||null==i||null==s||null==o)throw new b;let l=n<<2|i>>4;if(r.push(l),64!==s){let e=i<<4&240|s>>2;if(r.push(e),64!==o){let e=s<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class b extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let _=function(e){let t=f(e);return m.encodeByteArray(t,!0)},v=function(e){return _(e).replace(/\./g,"")},w=function(e){try{return m.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},y=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,I=()=>{if("undefined"==typeof process||void 0===process.env)return;let e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},S=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&w(e[1]);return t&&JSON.parse(t)},C=()=>{try{return y()||I()||S()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},x=()=>{var e;return null===(e=C())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,a)=>{t?this.reject(t):this.resolve(a),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,a))}}}function E(){try{return"object"==typeof indexedDB}catch(e){return!1}}function j(){return new Promise((e,t)=>{try{let a=!0,r="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(r);n.onsuccess=()=>{n.result.close(),a||self.indexedDB.deleteDatabase(r),e(!0)},n.onupgradeneeded=()=>{a=!1},n.onerror=()=>{var e;t((null===(e=n.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class A extends Error{constructor(e,t,a){super(t),this.code=e,this.customData=a,this.name="FirebaseError",Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,t,a){this.service=e,this.serviceName=t,this.errors=a}create(e,...t){let a=t[0]||{},r=`${this.service}/${e}`,n=this.errors[e],i=n?n.replace(T,(e,t)=>{let r=a[t];return null!=r?String(r):`<${t}?>`}):"Error",s=`${this.serviceName}: ${i} (${r}).`;return new A(r,s,a)}}let T=/\{\$([^}]+)}/g;function P(e,t){if(e===t)return!0;let a=Object.keys(e),r=Object.keys(t);for(let n of a){if(!r.includes(n))return!1;let a=e[n],i=t[n];if(N(a)&&N(i)){if(!P(a,i))return!1}else if(a!==i)return!1}for(let e of r)if(!a.includes(e))return!1;return!0}function N(e){return null!==e&&"object"==typeof e}function M(e,t=1e3,a=2){let r=t*Math.pow(a,e);return Math.min(144e5,r+Math.round(.5*r*(Math.random()-.5)*2))}class O{constructor(e,t,a){this.name=e,this.instanceFactory=t,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new D;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let a=this.getOrInitializeService({instanceIdentifier:t});a&&e.resolve(a)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let a=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:L})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:a});t.resolve(e)}catch(e){}}}}clearInstance(e=L){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=L){return this.instances.has(e)}getOptions(e=L){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:a,options:t});for(let[e,t]of this.instancesDeferred.entries())a===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var a;let r=this.normalizeInstanceIdentifier(t),n=null!==(a=this.onInitCallbacks.get(r))&&void 0!==a?a:new Set;n.add(e),this.onInitCallbacks.set(r,n);let i=this.instances.get(r);return i&&e(i,r),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){let a=this.onInitCallbacks.get(t);if(a)for(let r of a)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:e===L?void 0:e,options:t}),this.instances.set(e,a),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch(e){}return a||null}normalizeInstanceIdentifier(e=L){return this.component?this.component.multipleInstances?e:L:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new B(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let F=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(d||(d={}));let R={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},H=d.INFO,z={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},U=(e,t,...a)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),n=z[t];if(n)console[n](`[${r}]  ${e.name}:`,...a);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class q{constructor(e){this.name=e,this._logLevel=H,this._logHandler=U,this._userLogHandler=null,F.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in d))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?R[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...e),this._logHandler(this,d.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...e),this._logHandler(this,d.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,d.INFO,...e),this._logHandler(this,d.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,d.WARN,...e),this._logHandler(this,d.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...e),this._logHandler(this,d.ERROR,...e)}}let V=(e,t)=>t.some(t=>e instanceof t),W=new WeakMap,G=new WeakMap,K=new WeakMap,J=new WeakMap,Y=new WeakMap,Q={get(e,t,a){if(e instanceof IDBTransaction){if("done"===t)return G.get(e);if("objectStoreNames"===t)return e.objectStoreNames||K.get(e);if("store"===t)return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return X(e[t])},set:(e,t,a)=>(e[t]=a,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function X(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,a)=>{let r=()=>{e.removeEventListener("success",n),e.removeEventListener("error",i)},n=()=>{t(X(e.result)),r()},i=()=>{a(e.error),r()};e.addEventListener("success",n),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&W.set(t,e)}).catch(()=>{}),Y.set(t,e),t}(e);if(J.has(e))return J.get(e);let a="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Z(this),e),X(W.get(this))}:function(...e){return X(t.apply(Z(this),e))}:function(e,...a){let r=t.call(Z(this),e,...a);return K.set(r,e.sort?e.sort():[e]),X(r)}:(t instanceof IDBTransaction&&function(e){if(G.has(e))return;let t=new Promise((t,a)=>{let r=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",i),e.removeEventListener("abort",i)},n=()=>{t(),r()},i=()=>{a(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",n),e.addEventListener("error",i),e.addEventListener("abort",i)});G.set(e,t)}(t),V(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,Q):t;return a!==e&&(J.set(e,a),Y.set(a,e)),a}let Z=e=>Y.get(e);function ee(e,t,{blocked:a,upgrade:r,blocking:n,terminated:i}={}){let s=indexedDB.open(e,t),o=X(s);return r&&s.addEventListener("upgradeneeded",e=>{r(X(s.result),e.oldVersion,e.newVersion,X(s.transaction),e)}),a&&s.addEventListener("blocked",e=>a(e.oldVersion,e.newVersion,e)),o.then(e=>{i&&e.addEventListener("close",()=>i()),n&&e.addEventListener("versionchange",e=>n(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}let et=["get","getKey","getAll","getAllKeys","count"],ea=["put","add","delete","clear"],er=new Map;function en(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(er.get(t))return er.get(t);let a=t.replace(/FromIndex$/,""),r=t!==a,n=ea.includes(a);if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!(n||et.includes(a)))return;let i=async function(e,...t){let i=this.transaction(e,n?"readwrite":"readonly"),s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[a](...t),n&&i.done]))[0]};return er.set(t,i),i}Q={...c=Q,get:(e,t,a)=>en(e,t)||c.get(e,t,a),has:(e,t)=>!!en(e,t)||c.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let es="@firebase/app",eo="0.10.11",el=new q("@firebase/app"),ec={[es]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},ed=new Map,eh=new Map,ep=new Map;function eu(e,t){try{e.container.addComponent(t)}catch(a){el.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,a)}}function ef(e){let t=e.name;if(ep.has(t))return el.debug(`There were multiple attempts to register component ${t}.`),!1;for(let a of(ep.set(t,e),ed.values()))eu(a,e);for(let t of eh.values())eu(t,e);return!0}function eg(e,t){let a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(t)}let em=new k("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new O("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw em.create("app-deleted",{appName:this._name})}}function e_(e,t,a){var r;let n=null!==(r=ec[e])&&void 0!==r?r:e;a&&(n+=`-${a}`);let i=n.match(/\s|\//),s=t.match(/\s|\//);if(i||s){let e=[`Unable to register library "${n}" with version "${t}":`];i&&e.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),el.warn(e.join(" "));return}ef(new O(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}let ev="firebase-heartbeat-store",ew=null;function ey(){return ew||(ew=ee("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(ev)}catch(e){console.warn(e)}}}).catch(e=>{throw em.create("idb-open",{originalErrorMessage:e.message})})),ew}async function eI(e){try{let t=(await ey()).transaction(ev),a=await t.objectStore(ev).get(eC(e));return await t.done,a}catch(e){if(e instanceof A)el.warn(e.message);else{let t=em.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});el.warn(t.message)}}}async function eS(e,t){try{let a=(await ey()).transaction(ev,"readwrite"),r=a.objectStore(ev);await r.put(t,eC(e)),await a.done}catch(e){if(e instanceof A)el.warn(e.message);else{let t=em.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});el.warn(t.message)}}}function eC(e){return`${e.name}!${e.options.appId}`}class ex{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new eE(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=eD();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(e){el.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=eD(),{heartbeatsToSend:a,unsentEntries:r}=function(e,t=1024){let a=[],r=e.slice();for(let n of e){let e=a.find(e=>e.agent===n.agent);if(e){if(e.dates.push(n.date),ej(a)>t){e.dates.pop();break}}else if(a.push({agent:n.agent,dates:[n.date]}),ej(a)>t){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}(this._heartbeatsCache.heartbeats),n=v(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}catch(e){return el.warn(e),""}}}function eD(){return new Date().toISOString().substring(0,10)}class eE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!E()&&j().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await eI(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let a=await this.read();return eS(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let a=await this.read();return eS(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}}}function ej(e){return v(JSON.stringify({version:2,heartbeats:e})).length}ef(new O("platform-logger",e=>new ei(e),"PRIVATE")),ef(new O("heartbeat",e=>new ex(e),"PRIVATE")),e_(es,eo,""),e_(es,eo,"esm2017"),e_("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e_("firebase","10.13.2","app");let eA="@firebase/installations",ek="0.6.9",eT=`w:${ek}`,eP="FIS_v2",eN=new k("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function eM(e){return e instanceof A&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function eL(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function eB(e,t){let a=(await t.json()).error;return eN.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function e$({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function eF(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR({appConfig:e,heartbeatServiceProvider:t},{fid:a}){let r=eO(e),n=e$(e),i=t.getImmediate({optional:!0});if(i){let e=await i.getHeartbeatsHeader();e&&n.append("x-firebase-client",e)}let s={method:"POST",headers:n,body:JSON.stringify({fid:a,authVersion:eP,appId:e.appId,sdkVersion:eT})},o=await eF(()=>fetch(r,s));if(o.ok){let e=await o.json();return{fid:e.fid||a,registrationStatus:2,refreshToken:e.refreshToken,authToken:eL(e.authToken)}}throw await eB("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eH(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ez=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eU(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eq=new Map;function eV(e,t){let a=eU(e);eW(a,t),function(e,t){let a=(!eG&&"BroadcastChannel"in self&&((eG=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{eW(e.data.key,e.data.fid)}),eG);a&&a.postMessage({key:e,fid:t}),0===eq.size&&eG&&(eG.close(),eG=null)}(a,t)}function eW(e,t){let a=eq.get(e);if(a)for(let e of a)e(t)}let eG=null,eK="firebase-installations-store",eJ=null;function eY(){return eJ||(eJ=ee("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(eK)}})),eJ}async function eQ(e,t){let a=eU(e),r=(await eY()).transaction(eK,"readwrite"),n=r.objectStore(eK),i=await n.get(a);return await n.put(t,a),await r.done,i&&i.fid===t.fid||eV(e,t.fid),t}async function eX(e){let t=eU(e),a=(await eY()).transaction(eK,"readwrite");await a.objectStore(eK).delete(t),await a.done}async function eZ(e,t){let a=eU(e),r=(await eY()).transaction(eK,"readwrite"),n=r.objectStore(eK),i=await n.get(a),s=t(i);return void 0===s?await n.delete(a):await n.put(s,a),await r.done,s&&(!i||i.fid!==s.fid)&&eV(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(e){let t;let a=await eZ(e.appConfig,a=>{let r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(eN.create("app-offline"))};let a={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=e1(e,a);return{installationEntry:a,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:e2(e)}:{installationEntry:t}}(e,e4(a||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return ez.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=r.registrationPromise,r.installationEntry});return""===a.fid?{installationEntry:await t}:{installationEntry:a,registrationPromise:t}}async function e1(e,t){try{let a=await eR(e,t);return eQ(e.appConfig,a)}catch(a){throw eM(a)&&409===a.customData.serverCode?await eX(e.appConfig):await eQ(e.appConfig,{fid:t.fid,registrationStatus:0}),a}}async function e2(e){let t=await e3(e.appConfig);for(;1===t.registrationStatus;)await eH(100),t=await e3(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:a}=await e0(e);return a||t}return t}function e3(e){return eZ(e,e=>{if(!e)throw eN.create("installation-not-found");return e4(e)})}function e4(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e6({appConfig:e,heartbeatServiceProvider:t},a){let r=function(e,{fid:t}){return`${eO(e)}/${t}/authTokens:generate`}(e,a),n=function(e,{refreshToken:t}){let a=e$(e);return a.append("Authorization",`${eP} ${t}`),a}(e,a),i=t.getImmediate({optional:!0});if(i){let e=await i.getHeartbeatsHeader();e&&n.append("x-firebase-client",e)}let s={method:"POST",headers:n,body:JSON.stringify({installation:{sdkVersion:eT,appId:e.appId}})},o=await eF(()=>fetch(r,s));if(o.ok)return eL(await o.json());throw await eB("Generate Auth Token",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e5(e,t=!1){let a;let r=await eZ(e.appConfig,r=>{var n;if(!te(r))throw eN.create("not-registered");let i=r.authToken;if(!t&&2===(n=i).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(n))return r;if(1===i.requestStatus)return a=e7(e,t),r;{if(!navigator.onLine)throw eN.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return a=e8(e,t),t}});return a?await a:r.authToken}async function e7(e,t){let a=await e9(e.appConfig);for(;1===a.authToken.requestStatus;)await eH(100),a=await e9(e.appConfig);let r=a.authToken;return 0===r.requestStatus?e5(e,t):r}function e9(e){return eZ(e,e=>{var t;if(!te(e))throw eN.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function e8(e,t){try{let a=await e6(e,t),r=Object.assign(Object.assign({},t),{authToken:a});return await eQ(e.appConfig,r),a}catch(a){if(eM(a)&&(401===a.customData.serverCode||404===a.customData.serverCode))await eX(e.appConfig);else{let a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await eQ(e.appConfig,a)}throw a}}function te(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e){let{installationEntry:t,registrationPromise:a}=await e0(e);return a?a.catch(console.error):e5(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(e,t=!1){return await tr(e),(await e5(e,t)).token}async function tr(e){let{registrationPromise:t}=await e0(e);t&&await t}function tn(e){return eN.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti="installations";ef(new O(ti,e=>{let t=e.getProvider("app").getImmediate(),a=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw tn("App Configuration");if(!e.name)throw tn("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw tn(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r=eg(t,"heartbeat");return{app:t,appConfig:a,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},"PUBLIC")),ef(new O("installations-internal",e=>{let t=eg(e.getProvider("app").getImmediate(),ti).getImmediate();return{getId:()=>tt(t),getToken:e=>ta(t,e)}},"PRIVATE")),e_(eA,ek),e_(eA,ek,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts="analytics",to="https://www.googletagmanager.com/gtag/js",tl=new q("@firebase/analytics"),tc=new k("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(e){if(!e.startsWith(to)){let t=tc.create("invalid-gtag-resource",{gtagURL:e});return tl.warn(t.message),""}return e}function th(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function tp(e,t,a,r,n,i){let s=r[n];try{if(s)await t[s];else{let e=(await th(a)).find(e=>e.measurementId===n);e&&await t[e.appId]}}catch(e){tl.error(e)}e("config",n,i)}async function tu(e,t,a,r,n){try{let i=[];if(n&&n.send_to){let e=n.send_to;Array.isArray(e)||(e=[e]);let r=await th(a);for(let a of e){let e=r.find(e=>e.measurementId===a),n=e&&t[e.appId];if(n)i.push(n);else{i=[];break}}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",r,n||{})}catch(e){tl.error(e)}}class tf{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}let tg=new tf;async function tm(e){var t;let{appId:a,apiKey:r}=e,n={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":r})},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",a),s=await fetch(i,n);if(200!==s.status&&304!==s.status){let e="";try{let a=await s.json();(null===(t=a.error)||void 0===t?void 0:t.message)&&(e=a.error.message)}catch(e){}throw tc.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}async function tb(e,t=tg,a){let{appId:r,apiKey:n,measurementId:i}=e.options;if(!r)throw tc.create("no-app-id");if(!n){if(i)return{measurementId:i,appId:r};throw tc.create("no-api-key")}let s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new tv;return setTimeout(async()=>{o.abort()},void 0!==a?a:6e4),t_({appId:r,apiKey:n,measurementId:i},s,o,t)}async function t_(e,{throttleEndTimeMillis:t,backoffCount:a},r,n=tg){var i;let{appId:s,measurementId:o}=e;try{await new Promise((e,a)=>{let n=setTimeout(e,Math.max(t-Date.now(),0));r.addEventListener(()=>{clearTimeout(n),a(tc.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}catch(e){if(o)return tl.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:s,measurementId:o};throw e}try{let t=await tm(e);return n.deleteThrottleMetadata(s),t}catch(c){if(!function(e){if(!(e instanceof A)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(c)){if(n.deleteThrottleMetadata(s),o)return tl.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:s,measurementId:o};throw c}let t=503===Number(null===(i=null==c?void 0:c.customData)||void 0===i?void 0:i.httpStatus)?M(a,n.intervalMillis,30):M(a,n.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:a+1};return n.setThrottleMetadata(s,l),tl.debug(`Calling attemptFetch again in ${t} millis`),t_(e,l,r,n)}}class tv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tw(e,t,a,r,n){if(n&&n.global){e("event",a,r);return}{let n=await t;e("event",a,Object.assign(Object.assign({},r),{send_to:n}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty(){if(!E())return tl.warn(tc.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await j()}catch(e){return tl.warn(tc.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function tI(e,t,a,r,n,o,l){var c;let d=tb(e);d.then(t=>{a[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&tl.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>tl.error(e)),t.push(d);let h=ty().then(e=>e?r.getId():void 0),[p,u]=await Promise.all([d,h]);!function(e){for(let t of Object.values(window.document.getElementsByTagName("script")))if(t.src&&t.src.includes(to)&&t.src.includes(e))return t;return null}(o)&&function(e,t){var a,r;let n;let i=(a="firebase-js-sdk-policy",r={createScriptURL:td},window.trustedTypes&&(n=window.trustedTypes.createPolicy(a,r)),n),s=document.createElement("script"),o=`${to}?l=${e}&id=${t}`;s.src=i?null==i?void 0:i.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}(o,p.measurementId),s&&(n("consent","default",s),s=void 0),n("js",new Date);let f=null!==(c=null==l?void 0:l.config)&&void 0!==c?c:{};return f.origin="firebase",f.update=!0,null!=u&&(f.firebase_id=u),n("config",p.measurementId,f),i&&(n("set",i),i=void 0),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.app=e}_delete(){return delete tC[this.app.options.appId],Promise.resolve()}}let tC={},tx=[],tD={},tE="dataLayer",tj=!1,tA="@firebase/analytics",tk="0.10.8";ef(new O(ts,(e,{options:t})=>(function(e,t,a){!function(){let e=[];if(function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),a=tc.create("invalid-analytics-context",{errorInfo:t});tl.warn(a.message)}}();let r=e.options.appId;if(!r)throw tc.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)tl.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw tc.create("no-api-key")}if(null!=tC[r])throw tc.create("already-exists",{id:r});if(!tj){var n,i;let e,t;e=[],Array.isArray(window[tE])?e=window[tE]:window[tE]=e;let{wrappedGtag:a,gtagCore:r}=(n="gtag",t=function(...e){window[tE].push(arguments)},window[n]&&"function"==typeof window[n]&&(t=window[n]),window[n]=(i=t,async function(e,...t){try{if("event"===e){let[e,a]=t;await tu(i,tC,tx,e,a)}else if("config"===e){let[e,a]=t;await tp(i,tC,tx,tD,e,a)}else if("consent"===e){let[e,a]=t;i("consent",e,a)}else if("get"===e){let[e,a,r]=t;i("get",e,a,r)}else if("set"===e){let[e]=t;i("set",e)}else i(e,...t)}catch(e){tl.error(e)}}),{gtagCore:t,wrappedGtag:window[n]});l=a,o=r,tj=!0}return tC[r]=tI(e,tx,tD,t,o,tE,a),new tS(e)})(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),ef(new O("analytics-internal",function(e){try{let t=e.getProvider(ts).getImmediate();return{logEvent:(e,a,r)=>{var n,i;n=(i=n=t)&&i._delegate?i._delegate:i,tw(l,tC[n.app.options.appId],e,a,r).catch(e=>tl.error(e))}}}catch(e){throw tc.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),e_(tA,tk),e_(tA,tk,"esm2017"),function(e,t={}){let a=e;"object"!=typeof t&&(t={name:t});let r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),n=r.name;if("string"!=typeof n||!n)throw em.create("bad-app-name",{appName:String(n)});if(a||(a=x()),!a)throw em.create("no-options");let i=ed.get(n);if(i){if(P(a,i.options)&&P(r,i.config))return;throw em.create("duplicate-app",{appName:n})}let s=new $(n);for(let e of ep.values())s.addComponent(e);let o=new eb(a,r,s);ed.set(n,o)}({apiKey:"AIzaSyBydG8ajr7rXrdBvgjsTJ5KCNCZOpYAYVg",authDomain:"nama-ai.firebaseapp.com",databaseURL:"https://nama-ai-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"nama-ai",storageBucket:"nama-ai.appspot.com",messagingSenderId:"297176191296",appId:"1:297176191296:web:9a2e4c0f25b09874562aa5",measurementId:"G-HRR3CB6CPR"});let tT=(e,t)=>{},tP=[{category:"Coding",items:[{id:1,title:"Django AI",description:"Generate and test Django application code with AI, export to PDF, and validate API endpoints seamlessly",iframeSrc:"https://namaai-djangoai.hf.space"},{id:2,title:"Componet AI HTML/CSS",description:"AI Component Generator creates HTML, CSS, Tailwind CSS, Vanilla CSS, or SCSS components instantly based on user prompts.",iframeSrc:"https://namaai-component-generator.hf.space"}]},{category:"Data-Analysis",items:[{id:1,title:"PDF AI",description:"PDF AI allows users to chat with multiple PDFs, view chat history, and interact with documents seamlessly.",iframeSrc:"https://namaai-datachat.hf.space"},{id:2,title:"Data Chad",description:"AI platform connects with MongoDB, Postgres, Databricks, Snowflake, and CSV, enabling seamless data queries and chat.",iframeSrc:"https://nama-ai-datachad.streamlit.app/#data-chad"}]},{category:"Lifestyle",items:[{id:1,title:"Quiz Ai",description:"Quiz AI is a platform that uses artificial intelligence to create personalized quizzes for students.",iframeSrc:"https://namaai-shikshamiraz.hf.space"},{id:2,title:"Image Generation AI",description:"This AI generates free images from text, offering users creative visuals quickly and easily for various needs.",iframeSrc:"https://namaai-image-generation.hf.space"}]},{category:"Others",items:[{id:1,title:"AI Gif maker",description:"Ai based gif maker ",iframeSrc:"https://namaai-gif-ai.hf.space"}]}];function tN(){let e=e=>{tT("aiapp_choose",{ai_name:e}),window.location.href=e};return(0,h.jsxs)("div",{children:[h.jsx("div",{className:u().header,children:h.jsx("h1",{children:"Welcome to AI Library"})}),tP.map((t,a)=>(0,h.jsxs)("div",{className:u().container,children:[h.jsx("h1",{children:t.category}),h.jsx("div",{className:u()[t.category.toLowerCase()],children:t.items.map(t=>(0,h.jsxs)("div",{className:u().b1,children:[h.jsx("h2",{children:t.title}),h.jsx("p",{children:t.description}),h.jsx("button",{onClick:()=>e(t.iframeSrc),children:"Activate"})]},t.id))})]},a))]})}},1572:(e,t,a)=>{"use strict";a.d(t,{default:()=>l});var r=a(326),n=a(7577),i=a(434),s=a(8749),o=a.n(s);let l=()=>{let[e,t]=(0,n.useState)(!1),a=()=>{t(!e)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("nav",{className:o().navbar,children:[r.jsx("div",{className:o().navbarLeft,children:r.jsx("span",{className:o().companyName,children:"नमः Ai"})}),r.jsx("button",{className:o().hamburger,onClick:a,children:"☰ "}),r.jsx("div",{className:`${o().navbarCenter} ${e?o().active:""}`,children:(0,r.jsxs)("ul",{className:o().navLinks,children:[r.jsx("li",{children:r.jsx(i.default,{href:"/",children:"Home"})}),r.jsx("li",{children:r.jsx(i.default,{href:"/ai_library",children:"Ai library"})}),r.jsx("li",{children:r.jsx(i.default,{href:"/pages/Api",children:"Api"})}),r.jsx("li",{children:r.jsx(i.default,{href:"/pages/Doc",children:"Doc"})}),r.jsx("li",{children:r.jsx(i.default,{href:"/pages/Contact",children:"Contact"})})]})})]}),e&&r.jsx("div",{className:o().overlay,onClick:a})]})}},3846:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var r=a(326),n=a(434),i=a(31),s=a.n(i),o=a(5047);function l(){let e=(0,o.useRouter)();return(0,r.jsxs)("div",{className:s().NotFound,children:[(0,r.jsxs)("button",{className:s().button,onClick:()=>{e.push("/")},children:[(0,r.jsxs)("div",{className:s().blackhole,children:[r.jsx("span",{className:s().rocketPath,children:r.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:s().rocket,children:(0,r.jsxs)("g",{children:[r.jsx("path",{d:"M0 0h24v24H0z",fill:"none"}),r.jsx("path",{d:"M8.498 20h7.004A6.523 6.523 0 0 1 12 23.502 6.523 6.523 0 0 1 8.498 20zM18 14.805l2 2.268V19H4v-1.927l2-2.268V9c0-3.483 2.504-6.447 6-7.545C15.496 2.553 18 5.517 18 9v5.805zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"})]})})}),r.jsx("span",{className:s().ring,children:r.jsx("span",{className:s().block})})]}),r.jsx("span",{className:s().text,children:"Don't get lost"})]}),r.jsx("h2",{children:"Not Found"}),r.jsx("p",{children:"Nah! this page does not belongs to Namah ai"}),r.jsx(n.default,{href:"/",children:"Return Home"})]})}},9076:e=>{e.exports={header:"library_header__CP_kC",container:"library_container__b18Mp","data-analysis":"library_data-analysis__0pxx0",coding:"library_coding__y6q8T",lifestyle:"library_lifestyle__QNhOw",others:"library_others__tN6sG",b1:"library_b1__WPPnU"}},1723:e=>{e.exports={footer:"footer_footer__avDgs",container:"footer_container__C4vMr",footerNav:"footer_footerNav__fp8zJ"}},8749:e=>{e.exports={navbar:"navbar_navbar__cmw8f",navbarLeft:"navbar_navbarLeft__yy3eD",companyName:"navbar_companyName__uPGkV",navbarCenter:"navbar_navbarCenter__O4dE4",navLinks:"navbar_navLinks__2Jkb_",hamburger:"navbar_hamburger__oLqIy",active:"navbar_active__g_40c",overlay:"navbar_overlay__ssRMM"}},1913:e=>{e.exports={container:"global_container__U8osQ",NotFound:"global_NotFound__hPmS6",alert:"global_alert__Sm7Hc",blackhole:"global_blackhole__rhw5p",wiggle:"global_wiggle__a41Sd",ring:"global_ring__uhR8p",writhe:"global_writhe__ck78H","ring-writhe":"global_ring-writhe__jtDn_",block:"global_block__qPBpb",rocket:"global_rocket__TL2zt",idle:"global_idle__ai_n3","rocket-path":"global_rocket-path__2Tzn_","engine-start":"global_engine-start__Ft56o",descend:"global_descend__1IUYj","descend-dissapear":"global_descend-dissapear__HD7ti",text:"global_text__W5qL6",spinner:"global_spinner__T0GGS",spinning82341:"global_spinning82341__B6bbv",spinner1:"global_spinner1__qv4k0",parallax:"global_parallax__U1f_z"}},31:e=>{e.exports={container:"global_container__U8osQ",NotFound:"global_NotFound__hPmS6",alert:"global_alert__Sm7Hc",blackhole:"global_blackhole__rhw5p",wiggle:"global_wiggle__a41Sd",ring:"global_ring__uhR8p",writhe:"global_writhe__ck78H","ring-writhe":"global_ring-writhe__jtDn_",block:"global_block__qPBpb",rocket:"global_rocket__TL2zt",idle:"global_idle__ai_n3","rocket-path":"global_rocket-path__2Tzn_","engine-start":"global_engine-start__Ft56o",descend:"global_descend__1IUYj","descend-dissapear":"global_descend-dissapear__HD7ti",text:"global_text__W5qL6",spinner:"global_spinner__T0GGS",spinning82341:"global_spinning82341__B6bbv",spinner1:"global_spinner1__qv4k0",parallax:"global_parallax__U1f_z"}},6911:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>s,__esModule:()=>i,default:()=>o});var r=a(8570);let n=(0,r.createProxy)(String.raw`C:\Users\ad721\Desktop\namai\src\app\ai_library\page.tsx`),{__esModule:i,$$typeof:s}=n;n.default;let o=(0,r.createProxy)(String.raw`C:\Users\ad721\Desktop\namai\src\app\ai_library\page.tsx#default`)},9574:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>y,metadata:()=>w});var r=a(9510),n=a(8570);let i=(0,n.createProxy)(String.raw`C:\Users\ad721\Desktop\namai\src\app\components\navbar\navbar.tsx`),{__esModule:s,$$typeof:o}=i;i.default;let l=(0,n.createProxy)(String.raw`C:\Users\ad721\Desktop\namai\src\app\components\navbar\navbar.tsx#default`);var c=a(1913),d=a.n(c),h=a(1159),p=a(1723),u=a.n(p);let f=()=>r.jsx("footer",{className:u().footer,children:(0,r.jsxs)("div",{className:u().container,children:[(0,r.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Namah Ai. All rights reserved."]}),r.jsx("nav",{children:(0,r.jsxs)("ul",{className:u().footerNav,children:[r.jsx("li",{children:r.jsx("a",{href:"#home",children:"Home"})}),r.jsx("li",{children:r.jsx("a",{href:"#about",children:"About"})}),r.jsx("li",{children:r.jsx("a",{href:"#services",children:"Services"})}),r.jsx("li",{children:r.jsx("a",{href:"#contact",children:"Contact"})})]})})]})});var g=a(4365),m=a.n(g),b=a(1930),_=a(5787),v=a(6674);let w={title:"Namah ai",description:"Welcome to AI library for all of your uses"};function y({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[r.jsx(m(),{children:r.jsx("link",{rel:"icon",href:"/favicon.ico",sizes:"any"})}),(0,r.jsxs)("body",{className:d().container,children:[r.jsx(l,{}),r.jsx(_.c,{}),r.jsx(v.c,{}),(0,r.jsxs)("meta",{name:"google-adsense-account",content:"ca-pub-4742312301717342",children:[r.jsx(h.Suspense,{fallback:r.jsx(b.default,{})}),e,r.jsx(f,{})]})]})]})}},1930:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var r=a(9510),n=a(1913),i=a.n(n);function s(){return r.jsx("div",{className:i().spinner,children:r.jsx("div",{className:i().spinner1})})}},2523:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>s,__esModule:()=>i,default:()=>o});var r=a(8570);let n=(0,r.createProxy)(String.raw`C:\Users\ad721\Desktop\namai\src\app\not-found.tsx`),{__esModule:i,$$typeof:s}=n;n.default;let o=(0,r.createProxy)(String.raw`C:\Users\ad721\Desktop\namai\src\app\not-found.tsx#default`)},3881:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var r=a(6621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[948,523],()=>a(9443));module.exports=r})();