function t(t,e,n,s){Object.defineProperty(t,e,{get:n,set:s,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},r=e.parcelRequired76b;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in s){var e=s[t];delete s[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){s[t]=e},e.parcelRequired76b=r),r.register("ftYLF",(function(e,n){t(e.exports,"getFirestore",(function(){return r("3PjDZ").getFirestore})),t(e.exports,"onSnapshot",(function(){return r("3PjDZ").onSnapshot})),t(e.exports,"doc",(function(){return r("3PjDZ").doc})),t(e.exports,"getDoc",(function(){return r("3PjDZ").getDoc})),t(e.exports,"updateDoc",(function(){return r("3PjDZ").updateDoc})),t(e.exports,"setDoc",(function(){return r("3PjDZ").setDoc})),t(e.exports,"Timestamp",(function(){return r("3PjDZ").Timestamp})),t(e.exports,"deleteDoc",(function(){return r("3PjDZ").deleteDoc})),r("3PjDZ")})),r.register("3PjDZ",(function(e,n){t(e.exports,"Timestamp",(function(){return F})),t(e.exports,"doc",(function(){return Vi})),t(e.exports,"getFirestore",(function(){return Yi})),t(e.exports,"getDoc",(function(){return Fo})),t(e.exports,"setDoc",(function(){return Vo})),t(e.exports,"updateDoc",(function(){return Uo})),t(e.exports,"deleteDoc",(function(){return Bo})),t(e.exports,"onSnapshot",(function(){return jo}));var s=r("ix4Jr"),i=r("4a6xH"),o=r("7vF8m"),a=r("ffjl9"),c=r("lW9Fu");r("4TNnu");const u="@firebase/firestore";
/**
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
 */class h{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}h.UNAUTHENTICATED=new h(null),h.GOOGLE_CREDENTIALS=new h("google-credentials-uid"),h.FIRST_PARTY=new h("first-party-uid"),h.MOCK_USER=new h("mock-user");
/**
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
 */
let l="9.15.0";
/**
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
 */const d=new(0,o.Logger)("@firebase/firestore");function f(){return d.logLevel}function p(t,...e){if(d.logLevel<=o.LogLevel.DEBUG){const n=e.map(y);d.debug(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(d.logLevel<=o.LogLevel.ERROR){const n=e.map(y);d.error(`Firestore (${l}): ${t}`,...n)}}function m(t,...e){if(d.logLevel<=o.LogLevel.WARN){const n=e.map(y);d.warn(`Firestore (${l}): ${t}`,...n)}}function y(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
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
 */var e}
/**
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
 */function v(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw g(e),new Error(e)}function w(t,e){t||v()}function E(t,e){return t}
/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends a.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class I{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class C{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(h.UNAUTHENTICATED)))}shutdown(){}}class _{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class D{start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new I;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new I,t.enqueueRetryable((()=>s(this.currentUser)))};const i=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new I)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(w("string"==typeof e.accessToken),new C(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return w(null===t||"string"==typeof t),new h(t)}constructor(t){this.t=t,this.currentUser=h.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class A{I(){return this.g?this.g():(w(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s,this.type="FirstParty",this.user=h.FIRST_PARTY,this.p=new Map}}class k{getToken(){return Promise.resolve(new A(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(h.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s}}class N{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x{start(t,e){const n=t=>{null!=t.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?s(t):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(w("string"==typeof t.token),this.A=t.token,new N(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
/**
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
 */
function L(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
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
 */class R{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=L(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<e&&(n+=t.charAt(s[r]%t.length))}return n}}function O(t,e){return t<e?-1:t>e?1:0}function M(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
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
 */
class F{static now(){return F.fromMillis(Date.now())}static fromDate(t){return F.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new F(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?O(this.nanoseconds,t.nanoseconds):O(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
/**
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
 */class P{static fromTimestamp(t){return new P(t)}static min(){return new P(new F(0,0))}static max(){return new P(new F(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
/**
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
 */class V{get length(){return this.len}isEqual(t){return 0===V.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof V?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),r=e.get(s);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}}class U extends V{construct(t,e,n){return new U(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new T(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new U(e)}static emptyPath(){return new U([])}}const B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class j extends V{construct(t,e,n){return new j(t,e,n)}static isValidIdentifier(t){return B.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),j.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new j(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new T(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new T(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new T(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new T(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new j(e)}static emptyPath(){return new j([])}}
/**
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
 */class q{static fromPath(t){return new q(U.fromString(t))}static fromName(t){return new q(U.fromString(t).popFirst(5))}static empty(){return new q(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===U.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return U.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new U(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */class K{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}K.UNKNOWN_ID=-1;function H(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=P.fromTimestamp(1e9===s?new F(n+1,0):new F(n,s));return new z(r,q.empty(),e)}function $(t){return new z(t.readTime,t.key,-1)}class z{static min(){return new z(P.min(),q.empty(),-1)}static max(){return new z(P.max(),q.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function G(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=q.comparator(t.documentKey,e.documentKey),0!==n?n:O(t.largestBatchId,e.largestBatchId))}
/**
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
 */const Q="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
/**
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
 */async function X(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Q)throw t;p("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Y{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Y(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Y?e:Y.resolve(e)}catch(t){return Y.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Y.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Y.reject(e)}static resolve(t){return new Y(((e,n)=>{e(t)}))}static reject(t){return new Y(((e,n)=>{n(t)}))}static waitFor(t){return new Y(((e,n)=>{let s=0,r=0,i=!1;t.forEach((t=>{++s,t.next((()=>{++r,i&&r===s&&e()}),(t=>n(t)))})),i=!0,r===s&&e()}))}static or(t){let e=Y.resolve(!1);for(const n of t)e=e.next((t=>t?Y.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new Y(((n,s)=>{const r=t.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===r&&n(i)}),(t=>s(t)))}}))}static doWhile(t,e){return new Y(((n,s)=>{const r=()=>{!0===t()?e().next((()=>{r()}),s):n()};r()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
/**
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
 */function J(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */
class Z{ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}}Z.at=-1;
/**
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
 */
class tt{constructor(t,e,n,s,r,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class et{static empty(){return new et("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof et&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
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
 */function nt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function st(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rt(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */function it(t){return null==t}function ot(t){return 0===t&&1/t==-1/0}function at(t){return"number"==typeof t&&Number.isInteger(t)&&!ot(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
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
 */let ct=Symbol.iterator;
/**
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
 */class ut{static fromBase64String(t){const e=atob(t);return new ut(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ut(e)}[ct](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return O(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}ut.EMPTY_BYTE_STRING=new ut("");const ht=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lt(t){if(w(!!t),"string"==typeof t){let e=0;const n=ht.exec(t);if(w(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:dt(t.seconds),nanos:dt(t.nanos)}}function dt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ft(t){return"string"==typeof t?ut.fromBase64String(t):ut.fromUint8Array(t)}
/**
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
 */function pt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function gt(t){const e=t.mapValue.fields.__previous_value__;return pt(e)?gt(e):e}function mt(t){const e=lt(t.mapValue.fields.__local_write_time__.timestampValue);return new F(e.seconds,e.nanos)}
/**
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
 */const yt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pt(t)?4:xt(t)?9007199254740991:10:v()}function wt(t,e){if(t===e)return!0;const n=vt(t);if(n!==vt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mt(t).isEqual(mt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=lt(t.timestampValue),s=lt(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return s=e,ft(t.bytesValue).isEqual(ft(s.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return dt(t.geoPointValue.latitude)===dt(e.geoPointValue.latitude)&&dt(t.geoPointValue.longitude)===dt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return dt(t.integerValue)===dt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=dt(t.doubleValue),s=dt(e.doubleValue);return n===s?ot(n)===ot(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return M(t.arrayValue.values||[],e.arrayValue.values||[],wt);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(nt(n)!==nt(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!wt(n[t],s[t])))return!1;return!0}(t,e);default:return v()}var s}function Et(t,e){return void 0!==(t.values||[]).find((t=>wt(t,e)))}function bt(t,e){if(t===e)return 0;const n=vt(t),s=vt(e);if(n!==s)return O(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=dt(t.integerValue||t.doubleValue),s=dt(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Tt(t.timestampValue,e.timestampValue);case 4:return Tt(mt(t),mt(e));case 5:return O(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ft(t),s=ft(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=O(n[t],s[t]);if(0!==e)return e}return O(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=O(dt(t.latitude),dt(e.latitude));return 0!==n?n:O(dt(t.longitude),dt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=bt(n[t],s[t]);if(e)return e}return O(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===yt.mapValue&&e===yt.mapValue)return 0;if(t===yt.mapValue)return 1;if(e===yt.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let t=0;t<s.length&&t<i.length;++t){const e=O(s[t],i[t]);if(0!==e)return e;const o=bt(n[s[t]],r[i[t]]);if(0!==o)return o}return O(s.length,i.length)}(t.mapValue,e.mapValue);default:throw v()}}function Tt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return O(t,e);const n=lt(t),s=lt(e),r=O(n.seconds,s.seconds);return 0!==r?r:O(n.nanos,s.nanos)}function It(t){return Ct(t)}function Ct(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=lt(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ft(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Ct(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${Ct(t.fields[r])}`;return n+"}"}(t.mapValue):v()}function St(t){return!!t&&"integerValue"in t}function _t(t){return!!t&&"arrayValue"in t}function Dt(t){return!!t&&"nullValue"in t}function At(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function kt(t){return!!t&&"mapValue"in t}function Nt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return st(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Nt(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Nt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
class Lt{constructor(t,e){this.position=t,this.inclusive=e}}function Rt(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?q.comparator(q.fromName(o.referenceValue),n.key):bt(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function Ot(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wt(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class Mt{}class Ft extends Mt{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ht(t,e,n):"array-contains"===e?new Qt(t,n):"in"===e?new Wt(t,n):"not-in"===e?new Xt(t,n):"array-contains-any"===e?new Yt(t,n):new Ft(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new $t(t,n):new zt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(bt(e,this.value)):null!==e&&vt(this.value)===vt(e)&&this.matchesComparison(bt(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class Pt extends Mt{static create(t,e){return new Pt(t,e)}matches(t){return Vt(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}}function Vt(t){return"and"===t.op}function Ut(t){return Bt(t)&&Vt(t)}function Bt(t){for(const e of t.filters)if(e instanceof Pt)return!1;return!0}function jt(t){if(t instanceof Ft)return t.field.canonicalString()+t.op.toString()+It(t.value);{const e=t.filters.map((t=>jt(t))).join(",");return`${t.op}(${e})`}}function qt(t,e){return t instanceof Ft?(n=t,(s=e)instanceof Ft&&n.op===s.op&&n.field.isEqual(s.field)&&wt(n.value,s.value)):t instanceof Pt?function(t,e){return e instanceof Pt&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&qt(n,e.filters[s])),!0)}(t,e):void v();var n,s}function Kt(t){return t instanceof Ft?`${(e=t).field.canonicalString()} ${e.op} ${It(e.value)}`:t instanceof Pt?function(t){return t.op.toString()+" {"+t.getFilters().map(Kt).join(" ,")+"}"}(t):"Filter";var e}class Ht extends Ft{matches(t){const e=q.comparator(t.key,this.key);return this.matchesComparison(e)}constructor(t,e,n){super(t,e,n),this.key=q.fromName(n.referenceValue)}}class $t extends Ft{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=Gt("in",e)}}class zt extends Ft{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=Gt("not-in",e)}}function Gt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>q.fromName(t.referenceValue)))}class Qt extends Ft{matches(t){const e=t.data.field(this.field);return _t(e)&&Et(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class Wt extends Ft{matches(t){const e=t.data.field(this.field);return null!==e&&Et(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class Xt extends Ft{matches(t){if(Et(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Et(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class Yt extends Ft{matches(t){const e=t.data.field(this.field);return!(!_t(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Et(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}
/**
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
 */class Jt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Zt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
 */class te{insert(t,e){return new te(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ne.BLACK,null,null))}remove(t){return new te(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ne.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ee(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ee(this.root,t,this.comparator,!1)}getReverseIterator(){return new ee(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ee(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||ne.EMPTY}}class ee{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class ne{copy(t,e,n,s,r){return new ne(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ne.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return ne.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:ne.RED,this.left=null!=s?s:ne.EMPTY,this.right=null!=r?r:ne.EMPTY,this.size=this.left.size+1+this.right.size}}ne.EMPTY=null,ne.RED=!0,ne.BLACK=!1,ne.EMPTY=new class{get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
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
 */
class se{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new re(this.data.getIterator())}getIteratorFrom(t){return new re(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof se))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new se(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new te(this.comparator)}}class re{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
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
 */
class ie{static empty(){return new ie([])}unionWith(t){let e=new se(j.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new ie(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return M(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(j.comparator)}}
/**
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
 */class oe{static empty(){return new oe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!kt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Nt(e)}setAll(t){let e=j.emptyPath(),n={},s=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=Nt(t):s.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());kt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return wt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];kt(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){st(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new oe(Nt(this.value))}constructor(t){this.value=t}}function ae(t){const e=[];return st(t.fields,((t,n)=>{const s=new j([t]);if(kt(n)){const t=ae(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new ie(e)
/**
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
 */}class ce{static newInvalidDocument(t){return new ce(t,0,P.min(),P.min(),P.min(),oe.empty(),0)}static newFoundDocument(t,e,n,s){return new ce(t,1,e,P.min(),n,s,0)}static newNoDocument(t,e){return new ce(t,2,e,P.min(),P.min(),oe.empty(),0)}static newUnknownDocument(t,e){return new ce(t,3,e,P.min(),P.min(),oe.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(P.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=oe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ce&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,s,r,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=r,this.data=i,this.documentState=o}}
/**
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
 */class ue{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.ft=null}}function he(t,e=null,n=[],s=[],r=null,i=null,o=null){return new ue(t,e,n,s,r,i,o)}function le(t){const e=E(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>jt(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),it(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>It(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>It(t))).join(",")),e.ft=t}return e.ft}function de(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Zt(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qt(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ot(t.startAt,e.startAt)&&Ot(t.endAt,e.endAt)}function fe(t){return q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
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
 */
class pe{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function ge(t,e,n,s,r,i,o,a){return new pe(t,e,n,s,r,i,o,a)}function me(t){return new pe(t)}function ye(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ve(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function we(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Ee(t){return null!==t.collectionGroup}function be(t){const e=E(t);if(null===e.dt){e.dt=[];const t=we(e),n=ve(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new Jt(t)),e.dt.push(new Jt(j.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Jt(j.keyField(),t))}}}return e.dt}function Te(t){const e=E(t);if(!e._t)if("F"===e.limitType)e._t=he(e.path,e.collectionGroup,be(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of be(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Jt(n.field,e))}const n=e.endAt?new Lt(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Lt(e.startAt.position,e.startAt.inclusive):null;e._t=he(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e._t}function Ie(t,e,n){return new pe(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ce(t,e){return de(Te(t),Te(e))&&t.limitType===e.limitType}function Se(t){return`${le(Te(t))}|lt:${t.limitType}`}function _e(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Kt(t))).join(", ")}]`),it(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>It(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>It(t))).join(",")),`Target(${e})`}(Te(t))}; limitType=${t.limitType})`}function De(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):q.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of be(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(s=e,!((n=t).startAt&&!function(t,e,n){const s=Rt(t,e,n);return t.inclusive?s<=0:s<0}(n.startAt,be(n),s)||n.endAt&&!function(t,e,n){const s=Rt(t,e,n);return t.inclusive?s>=0:s>0}(n.endAt,be(n),s)));var n,s}function Ae(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ke(t){return(e,n)=>{let s=!1;for(const r of be(t)){const t=Ne(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}function Ne(t,e,n){const s=t.field.isKeyField()?q.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?bt(s,r):v()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return v()}}
/**
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
 */function xe(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ot(e)?"-0":e}}function Le(t){return{integerValue:""+t}}function Re(t,e){return at(e)?Le(e):xe(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Oe{constructor(){this._=void 0}}function Me(t,e,n){return t instanceof Ve?Ue(t,e):t instanceof Be?je(t,e):n}function Fe(t,e){var n,s;return t instanceof qe?St(n=e)||(s=n)&&"doubleValue"in s?e:{integerValue:0}:null}class Pe extends Oe{}class Ve extends Oe{constructor(t){super(),this.elements=t}}function Ue(t,e){const n=He(e);for(const e of t.elements)n.some((t=>wt(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Be extends Oe{constructor(t){super(),this.elements=t}}function je(t,e){let n=He(e);for(const e of t.elements)n=n.filter((t=>!wt(t,e)));return{arrayValue:{values:n}}}class qe extends Oe{constructor(t,e){super(),this.yt=t,this.gt=e}}function Ke(t){return dt(t.integerValue||t.doubleValue)}function He(t){return _t(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
 */class $e{constructor(t,e){this.version=t,this.transformResults=e}}class ze{static none(){return new ze}static exists(t){return new ze(void 0,t)}static updateTime(t){return new ze(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function Ge(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Qe{}function We(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new on(t.key,ze.none()):new tn(t.key,t.data,ze.none());{const n=t.data,s=oe.empty();let r=new se(j.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),r=r.add(t)}return new en(t.key,s,new ie(r.toArray()),ze.none())}}function Xe(t,e,n){var s;t instanceof tn?function(t,e,n){const s=t.value.clone(),r=sn(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof en?function(t,e,n){if(!Ge(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=sn(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(nn(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):(s=n,e.convertToNoDocument(s.version).setHasCommittedMutations())}function Ye(t,e,n,s){return t instanceof tn?function(t,e,n,s){if(!Ge(t.precondition,e))return n;const r=t.value.clone(),i=rn(t.fieldTransforms,s,e);return r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,s):t instanceof en?function(t,e,n,s){if(!Ge(t.precondition,e))return n;const r=rn(t.fieldTransforms,s,e),i=e.data;return i.setAll(nn(t)),i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):(r=e,i=n,Ge(t.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):i);var r,i}function Je(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),r=Fe(s.transform,t||null);null!=r&&(null===n&&(n=oe.empty()),n.set(s.field,r))}return n||null}function Ze(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,s=e.fieldTransforms,!!(void 0===n&&void 0===s||n&&s&&M(n,s,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,s=e.transform,n instanceof Ve&&s instanceof Ve||n instanceof Be&&s instanceof Be?M(n.elements,s.elements,wt):n instanceof qe&&s instanceof qe?wt(n.gt,s.gt):n instanceof Pe&&s instanceof Pe);var n,s}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,s}class tn extends Qe{getFieldMask(){return null}constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class en extends Qe{getFieldMask(){return this.fieldMask}constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}}function nn(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function sn(t,e,n){const s=new Map;w(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Me(o,a,n[r]))}return s}function rn(t,e,n){const s=new Map;for(const a of t){const t=a.transform,c=n.data.field(a.field);s.set(a.field,(i=c,o=e,(r=t)instanceof Pe?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,i):r instanceof Ve?Ue(r,i):r instanceof Be?je(r,i):function(t,e){const n=Fe(t,e),s=Ke(n)+Ke(t.gt);return St(n)&&St(t.gt)?Le(s):xe(t.yt,s)}(r,i)))}var r,i,o;return s}class on extends Qe{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class an extends Qe{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
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
 */class cn{constructor(t){this.count=t}}
/**
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
 */var un,hn;function ln(t){switch(t){default:return v();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function dn(t){if(void 0===t)return g("GRPC error has no .code"),b.UNKNOWN;switch(t){case un.OK:return b.OK;case un.CANCELLED:return b.CANCELLED;case un.UNKNOWN:return b.UNKNOWN;case un.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case un.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case un.INTERNAL:return b.INTERNAL;case un.UNAVAILABLE:return b.UNAVAILABLE;case un.UNAUTHENTICATED:return b.UNAUTHENTICATED;case un.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case un.NOT_FOUND:return b.NOT_FOUND;case un.ALREADY_EXISTS:return b.ALREADY_EXISTS;case un.PERMISSION_DENIED:return b.PERMISSION_DENIED;case un.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case un.ABORTED:return b.ABORTED;case un.OUT_OF_RANGE:return b.OUT_OF_RANGE;case un.UNIMPLEMENTED:return b.UNIMPLEMENTED;case un.DATA_LOSS:return b.DATA_LOSS;default:return v()}}(hn=un||(un={}))[hn.OK=0]="OK",hn[hn.CANCELLED=1]="CANCELLED",hn[hn.UNKNOWN=2]="UNKNOWN",hn[hn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",hn[hn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",hn[hn.NOT_FOUND=5]="NOT_FOUND",hn[hn.ALREADY_EXISTS=6]="ALREADY_EXISTS",hn[hn.PERMISSION_DENIED=7]="PERMISSION_DENIED",hn[hn.UNAUTHENTICATED=16]="UNAUTHENTICATED",hn[hn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",hn[hn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",hn[hn.ABORTED=10]="ABORTED",hn[hn.OUT_OF_RANGE=11]="OUT_OF_RANGE",hn[hn.UNIMPLEMENTED=12]="UNIMPLEMENTED",hn[hn.INTERNAL=13]="INTERNAL",hn[hn.UNAVAILABLE=14]="UNAVAILABLE",hn[hn.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class fn{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){st(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return rt(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
/**
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
 */const pn=new te(q.comparator);function gn(){return pn}const mn=new te(q.comparator);function yn(...t){let e=mn;for(const n of t)e=e.insert(n.key,n);return e}function vn(t){let e=mn;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function wn(){return bn()}function En(){return bn()}function bn(){return new fn((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Tn=new te(q.comparator),In=new se(q.comparator);function Cn(...t){let e=In;for(const n of t)e=e.add(n);return e}const Sn=new se(O);function _n(){return Sn}
/**
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
 */class Dn{static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,An.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Dn(P.min(),s,_n(),gn(),Cn())}constructor(t,e,n,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}}class An{static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new An(n,e,Cn(),Cn(),Cn())}constructor(t,e,n,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}}
/**
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
 */class kn{constructor(t,e,n,s){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=s}}class Nn{constructor(t,e){this.targetId=t,this.Et=e}}class xn{constructor(t,e,n=ut.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Ln{get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=Cn(),e=Cn(),n=Cn();return this.Rt.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:v()}})),new An(this.bt,this.Pt,t,e,n)}xt(){this.vt=!1,this.Rt=Mn()}Nt(t,e){this.vt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}constructor(){this.At=0,this.Rt=Mn(),this.bt=ut.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}}class Rn{Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}jt(t){this.forEachTarget(t,(e=>{const n=this.Wt(e);switch(t.state){case 0:this.zt(e)&&n.Dt(t.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(e);break;case 3:this.zt(e)&&(n.Ft(),n.Dt(t.resumeToken));break;case 4:this.zt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:v()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.zt(n)&&e(n)}))}Jt(t){const e=t.targetId,n=t.Et.count,s=this.Yt(e);if(s){const t=s.target;if(fe(t))if(0===n){const n=new q(t.path);this.Qt(e,n,ce.newNoDocument(n,P.min()))}else w(1===n);else this.Xt(e)!==n&&(this.Ht(e),this.Ut=this.Ut.add(e))}}Zt(t){const e=new Map;this.Bt.forEach(((n,s)=>{const r=this.Yt(s);if(r){if(n.current&&fe(r.target)){const e=new q(r.target.path);null!==this.Lt.get(e)||this.te(s,e)||this.Qt(s,e,ce.newNoDocument(e,t))}n.St&&(e.set(s,n.Ct()),n.xt())}}));let n=Cn();this.qt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const s=new Dn(t,e,this.Ut,this.Lt,n);return this.Lt=gn(),this.qt=On(),this.Ut=new se(O),s}Gt(t,e){if(!this.zt(t))return;const n=this.te(t,e.key)?2:0;this.Wt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.zt(t))return;const s=this.Wt(t);this.te(t,e)?s.Nt(e,1):s.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Xt(t){const e=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let e=this.Bt.get(t);return e||(e=new Ln,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new se(O),this.qt=this.qt.insert(t,e)),e}zt(t){const e=null!==this.Yt(t);return e||p("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new Ln),this.$t.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.$t.getRemoteKeysForTarget(t).has(e)}constructor(t){this.$t=t,this.Bt=new Map,this.Lt=gn(),this.qt=On(),this.Ut=new se(O)}}function On(){return new te(q.comparator)}function Mn(){return new te(q.comparator)}
/**
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
 */const Fn={asc:"ASCENDING",desc:"DESCENDING"},Pn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vn={and:"AND",or:"OR"};class Un{constructor(t,e){this.databaseId=t,this.wt=e}}function Bn(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jn(t,e){return t.wt?e.toBase64():e.toUint8Array()}function qn(t,e){return Bn(t,e.toTimestamp())}function Kn(t){return w(!!t),P.fromTimestamp(function(t){const e=lt(t);return new F(e.seconds,e.nanos)}(t))}function Hn(t,e){return(n=t,new U(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function $n(t){const e=U.fromString(t);return w(hs(e)),e}function zn(t,e){return Hn(t.databaseId,e.path)}function Gn(t,e){const n=$n(e);if(n.get(1)!==t.databaseId.projectId)throw new T(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Yn(n))}function Qn(t,e){return Hn(t.databaseId,e)}function Wn(t){const e=$n(t);return 4===e.length?U.emptyPath():Yn(e)}function Xn(t){return new U(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yn(t){return w(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Jn(t,e,n){return{name:zn(t,e),fields:n.value.mapValue.fields}}function Zn(t,e){let n;if(e instanceof tn)n={update:Jn(t,e.key,e.value)};else if(e instanceof on)n={delete:zn(t,e.key)};else if(e instanceof en)n={update:Jn(t,e.key,e.data),updateMask:us(e.fieldMask)};else{if(!(e instanceof an))return v();n={verify:zn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Pe)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ve)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Be)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof qe)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw v()}(0,t)))),e.precondition.isNone||(n.currentDocument=(s=t,void 0!==(r=e.precondition).updateTime?{updateTime:qn(s,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:v())),n;var s,r}function ts(t,e){return{documents:[Qn(t,e.path)]}}function es(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Qn(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qn(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(t){if(0!==t.length)return cs(Pt.create(t,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(t){if(0!==t.length)return t.map((t=>{return{field:os((e=t).field),direction:rs(e.dir)};var e}))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=(a=t,c=e.limit,a.wt||it(c)?c:{value:c});var a,c,u;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(u=e.startAt).inclusive,values:u.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ns(t){let e=Wn(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){w(1===s);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=ss(t);return e instanceof Pt&&Ut(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new Jt(as((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,it(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Lt(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Lt(n,e)}(n.endAt)),ge(e,r,o,i,a,"F",c,u)}function ss(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=as(t.unaryFilter.field);return Ft.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=as(t.unaryFilter.field);return Ft.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=as(t.unaryFilter.field);return Ft.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=as(t.unaryFilter.field);return Ft.create(r,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(t):void 0!==t.fieldFilter?(n=t,Ft.create(as(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,Pt.create(e.compositeFilter.filters.map((t=>ss(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return v()}}(e.compositeFilter.op))):v();var e,n}function rs(t){return Fn[t]}function is(t){return Pn[t]}function os(t){return{fieldPath:t.canonicalString()}}function as(t){return j.fromServerFormat(t.fieldPath)}function cs(t){return t instanceof Ft?function(t){if("=="===t.op){if(At(t.value))return{unaryFilter:{field:os(t.field),op:"IS_NAN"}};if(Dt(t.value))return{unaryFilter:{field:os(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(At(t.value))return{unaryFilter:{field:os(t.field),op:"IS_NOT_NAN"}};if(Dt(t.value))return{unaryFilter:{field:os(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(t.field),op:is(t.op),value:t.value}}}(t):t instanceof Pt?function(t){const e=t.getFilters().map((t=>cs(t)));return 1===e.length?e[0]:{compositeFilter:{op:(n=t.op,Vn[n]),filters:e}};var n}(t):v()}function us(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function hs(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */const ls=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ds=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],fs=ds;
/**
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
 */
/**
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
 */
class ps{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&Xe(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ye(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ye(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=En();return this.mutations.forEach((s=>{const r=t.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=e.has(s.key)?null:o;const a=We(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(P.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Cn())}isEqual(t){return this.batchId===t.batchId&&M(this.mutations,t.mutations,((t,e)=>Ze(t,e)))&&M(this.baseMutations,t.baseMutations,((t,e)=>Ze(t,e)))}constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}}class gs{static from(t,e,n){w(t.mutations.length===n.length);let s=Tn;const r=t.mutations;for(let t=0;t<r.length;t++)s=s.insert(r[t].key,n[t].version);return new gs(t,e,n,s)}constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}}
/**
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
 */class ms{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
/**
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
 */class ys{withSequenceNumber(t){return new ys(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}constructor(t,e,n,s,r=P.min(),i=P.min(),o=ut.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}}
/**
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
 */class vs{constructor(t){this.ie=t}}function ws(t){const e=ns({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ie(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */class Es{ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(dt(t.integerValue));else if("doubleValue"in t){const n=dt(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),ot(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(ft(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?xt(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):v()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const t of Object.keys(n))this.de(t,e),this.ce(n[t],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const t of n)this.ce(t,e)}me(t,e){this.he(e,37),q.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}constructor(){}}Es.Ie=new Es;
/**
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
 */
class bs{addToCollectionParentIndex(t,e){return this.Je.add(e),Y.resolve()}getCollectionParents(t,e){return Y.resolve(this.Je.getEntries(e))}addFieldIndex(t,e){return Y.resolve()}deleteFieldIndex(t,e){return Y.resolve()}getDocumentsMatchingTarget(t,e){return Y.resolve(null)}getIndexType(t,e){return Y.resolve(0)}getFieldIndexes(t,e){return Y.resolve([])}getNextCollectionGroupToUpdate(t){return Y.resolve(null)}getMinOffset(t,e){return Y.resolve(z.min())}getMinOffsetFromCollectionGroup(t,e){return Y.resolve(z.min())}updateCollectionGroup(t,e,n){return Y.resolve()}updateIndexEntries(t,e){return Y.resolve()}constructor(){this.Je=new Ts}}class Ts{add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new se(U.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new se(U.comparator)).toArray()}constructor(){this.index={}}}
/**
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
 */new Uint8Array(0);class Is{static withCacheSize(t){return new Is(t,Is.DEFAULT_COLLECTION_PERCENTILE,Is.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
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
 */
/**
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
 */Is.DEFAULT_COLLECTION_PERCENTILE=10,Is.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Is.DEFAULT=new Is(41943040,Is.DEFAULT_COLLECTION_PERCENTILE,Is.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Is.DISABLED=new Is(-1,0,0);
/**
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
 */
class Cs{next(){return this.bn+=2,this.bn}static Pn(){return new Cs(0)}static vn(){return new Cs(-1)}constructor(t){this.bn=t}}
/**
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
 */
/**
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
 */
class Ss{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ce.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Y.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new fn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
/**
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
 */
/**
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
 */
/**
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
 */
class _s{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
 */class Ds{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Ye(n.mutation,t,ie.empty(),F.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Cn()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Cn()){const s=wn();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=yn();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=wn();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Cn())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let r=gn();const i=bn(),o=bn();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof en)?r=r.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),Ye(o.mutation,e,o.mutation.getFieldMask(),F.now()))})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new _s(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=bn();let s=new te(((t,e)=>t-e)),r=Cn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||ie.empty();o=r.applyToLocalView(i,o),n.set(t,o);const a=(s.get(r.batchId)||Cn()).add(t);s=s.insert(r.batchId,a)}))})).next((()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=En();c.forEach((t=>{if(!r.has(t)){const s=We(e.get(t),n.get(t));null!==s&&u.set(t,s),r=r.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Y.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return s=e,q.isDocumentKey(s.path)&&null===s.collectionGroup&&0===s.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):Ee(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var s}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-r.size):Y.resolve(wn());let o=-1,a=r;return i.next((e=>Y.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?Y.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,Cn()))).next((t=>({batchId:o,changes:vn(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next((t=>{let e=yn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let r=yn();return this.indexManager.getCollectionParents(t,s).next((i=>Y.forEach(i,(i=>{const o=(a=e,c=i.child(s),new pe(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((r=>(s=r,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,ce.newInvalidDocument(n)))}));let n=yn();return s.forEach(((s,r)=>{const i=t.get(s);void 0!==i&&Ye(i.mutation,r,ie.empty(),F.now()),De(e,r)&&(n=n.insert(s,r))})),n}))}constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}}
/**
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
 */class As{getBundleMetadata(t,e){return Y.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:Kn(n.createTime)}),Y.resolve()}getNamedQuery(t,e){return Y.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,{name:(n=e).name,query:ws(n.bundledQuery),readTime:Kn(n.readTime)}),Y.resolve();var n}constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}}
/**
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
 */class ks{getOverlay(t,e){return Y.resolve(this.overlays.get(e))}getOverlays(t,e){const n=wn();return Y.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.oe(t,e,s)})),Y.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.es.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),Y.resolve()}getOverlaysForCollection(t,e,n){const s=wn(),r=e.length+1,i=new q(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Y.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let r=new te(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=wn(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=wn(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return Y.resolve(o)}oe(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.es.get(s.largestBatchId).delete(n.key);this.es.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ms(e,n));let r=this.es.get(e);void 0===r&&(r=Cn(),this.es.set(e,r)),this.es.set(e,r.add(n.key))}constructor(){this.overlays=new te(q.comparator),this.es=new Map}}
/**
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
 */class Ns{isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new xs(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new xs(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new q(new U([])),n=new xs(e,t),s=new xs(e,t+1),r=[];return this.rs.forEachInRange([n,s],(t=>{this.cs(t),r.push(t.key)})),r}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new q(new U([])),n=new xs(e,t),s=new xs(e,t+1);let r=Cn();return this.rs.forEachInRange([n,s],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new xs(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.ns=new se(xs.ss),this.rs=new se(xs.os)}}class xs{static ss(t,e){return q.comparator(t.key,e.key)||O(t._s,e._s)}static os(t,e){return O(t._s,e._s)||q.comparator(t.key,e.key)}constructor(t,e){this.key=t,this._s=e}}
/**
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
 */class Ls{checkEmpty(t){return Y.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new ps(r,e,n,s);this.mutationQueue.push(i);for(const e of s)this.gs=this.gs.add(new xs(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Y.resolve(i)}lookupMutationBatch(t,e){return Y.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ps(n),r=s<0?0:s;return Y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new xs(e,0),s=new xs(e,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([n,s],(t=>{const e=this.ys(t._s);r.push(e)})),Y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new se(O);return e.forEach((t=>{const e=new xs(t,0),s=new xs(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,s],(t=>{n=n.add(t._s)}))})),Y.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;q.isDocumentKey(r)||(r=r.child(""));const i=new xs(new q(r),0);let o=new se(O);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t._s)),!0)}),i),Y.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){w(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return Y.forEach(e.mutations,(s=>{const r=new xs(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new xs(e,0),s=this.gs.firstAfterOrEqual(n);return Y.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,Y.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new se(xs.ss)}}
/**
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
 */class Rs{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),r=s?s.size:0,i=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Y.resolve(n?n.document.mutableCopy():ce.newInvalidDocument(e))}getEntries(t,e){let n=gn();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ce.newInvalidDocument(t))})),Y.resolve(n)}getAllFromCollection(t,e,n){let s=gn();const r=new q(e.child("")),i=this.docs.getIteratorFrom(r);for(;i.hasNext();){const{key:t,value:{document:r}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||G($(r),n)<=0||(s=s.insert(r.key,r.mutableCopy()))}return Y.resolve(s)}getAllFromCollectionGroup(t,e,n,s){v()}As(t,e){return Y.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Os(this)}getSize(t){return Y.resolve(this.size)}constructor(t){this.Es=t,this.docs=new te(q.comparator),this.size=0}}class Os extends Ss{applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Yn.addEntry(t,s)):this.Yn.removeEntry(n)})),Y.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}constructor(t){super(),this.Yn=t}}
/**
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
 */class Ms{forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),Y.resolve()}getLastRemoteSnapshotVersion(t){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Y.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),Y.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Cs(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,Y.resolve()}updateTargetData(t,e){return this.Dn(e),Y.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,Y.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.Rs.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Y.waitFor(r).next((()=>s))}getTargetCount(t){return Y.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return Y.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),Y.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((e=>{r.push(s.markPotentiallyOrphaned(t,e))})),Y.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),Y.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return Y.resolve(n)}containsKey(t,e){return Y.resolve(this.Ps.containsKey(e))}constructor(t){this.persistence=t,this.Rs=new fn((t=>le(t)),de),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ns,this.targetCount=0,this.vs=Cs.Pn()}}
/**
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
 */class Fs{start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ks,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Ls(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const s=new Ps(this.Ss.next());return this.referenceDelegate.ks(),n(s).next((t=>this.referenceDelegate.Os(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ms(t,e){return Y.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.Vs={},this.overlays={},this.Ss=new Z(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Ms(this),this.indexManager=new bs,this.remoteDocumentCache=new Rs((t=>this.referenceDelegate.xs(t))),this.yt=new vs(e),this.Ns=new As(this.yt)}}class Ps extends W{constructor(t){super(),this.currentSequenceNumber=t}}class Vs{static Bs(t){return new Vs(t)}get Ls(){if(this.$s)return this.$s;throw v()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),Y.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),Y.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),Y.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.Ls,(n=>{const s=q.fromPath(n);return this.qs(t,s).next((t=>{t||e.removeEntry(s,P.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.qs(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}qs(t,e){return Y.or([()=>Y.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}constructor(t){this.persistence=t,this.Fs=new Ns,this.$s=null}}
/**
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
 */
/**
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
 */
class Us{static Ci(t,e){let n=Cn(),s=Cn();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new Us(t,e.fromCache,n,s)}constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=s}}
/**
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
 */class Bs{initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.ki(t,e).next((r=>r||this.Oi(t,e,s,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(ye(e))return Y.resolve(null);let n=Te(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=Ie(e,null,"F"),n=Te(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const r=Cn(...s);return this.Ni.getDocuments(t,r).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.Fi(e,s);return this.$i(e,i,r,n.readTime)?this.ki(t,Ie(e,null,"F")):this.Bi(t,i,e,n)}))))})))))}Oi(t,e,n,s){return ye(e)||s.isEqual(P.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((r=>{const i=this.Fi(e,r);return this.$i(e,i,n,s)?this.Mi(t,e):(f()<=o.LogLevel.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_e(e)),this.Bi(t,i,e,H(s,-1)))}))}Fi(t,e){let n=new se(ke(t));return e.forEach(((e,s)=>{De(t,s)&&(n=n.add(s))})),n}$i(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Mi(t,e){return f()<=o.LogLevel.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",_e(e)),this.Ni.getDocumentsMatchingQuery(t,e,z.min())}Bi(t,e,n,s){return this.Ni.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.xi=!1}}
/**
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
 */class js{Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ds(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qi)))}constructor(t,e,n,s){this.persistence=t,this.Li=e,this.yt=s,this.qi=new te(O),this.Ui=new fn((t=>le(t)),de),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}}function qs(t,e,n,s){return new js(t,e,n,s)}async function Ks(t,e){const n=E(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((r=>(s=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],i=[];let o=Cn();for(const t of s){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:r,addedBatchIds:i})))}))}))}function Hs(t){const e=E(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function $s(t,e,n){let s=Cn(),r=Cn();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=gn();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(P.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Wi:s,zi:r}}))}function zs(t,e){const n=E(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Gs(t,e){const n=E(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Cs.getTargetData(t,e).next((r=>r?(s=r,Y.resolve(s)):n.Cs.allocateTargetId(t).next((r=>(s=new ys(e,r,0,t.currentSequenceNumber),n.Cs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.qi.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qi=n.qi.insert(t.targetId,t),n.Ui.set(e,t.targetId)),t}))}async function Qs(t,e,n){const s=E(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(t=>s.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!J(t))throw t;p("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function Ws(t,e,n){const s=E(t);let r=P.min(),i=Cn();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=E(t),r=s.Ui.get(n);return void 0!==r?Y.resolve(s.qi.get(r)):s.Cs.getTargetData(e,n)}(s,t,Te(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>s.Li.getDocumentsMatchingQuery(t,e,n?r:P.min(),n?i:Cn()))).next((t=>(Xs(s,Ae(e),t),{documents:t,Hi:i})))))}function Xs(t,e,n){let s=t.Ki.get(e)||P.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Ki.set(e,s)}class Ys{er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=_n()}}class Js{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Ys,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Lr=new Ys,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
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
 */class Zs{Ur(t){}shutdown(){}}
/**
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
 */class tr{Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}}
/**
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
 */const er={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class nr{Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}}
/**
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
 */class sr extends class{get co(){return!1}ao(t,e,n,s,r){const i=this.ho(t,e);p("RestConnection","Sending: ",i,n);const o={};return this.lo(o,s,r),this.fo(t,i,o,n).then((t=>(p("RestConnection","Received: ",t),t)),(e=>{throw m("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}_o(t,e,n,s,r,i){return this.ao(t,e,n,s,r)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=er[t];return`${this.oo}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{fo(t,e,n,s){return new Promise(((r,i)=>{const o=new(0,c.XhrIo);o.setWithCredentials(!0),o.listenOnce(c.EventType.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case c.ErrorCode.NO_ERROR:const e=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(e)),r(e);break;case c.ErrorCode.TIMEOUT:p("Connection",'RPC "'+t+'" timed out'),i(new T(b.DEADLINE_EXCEEDED,"Request time out"));break;case c.ErrorCode.HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(e)>=0?e:b.UNKNOWN}(e.status);i(new T(t,e.message))}else i(new T(b.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new T(b.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const s=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=(0,c.createWebChannelTransport)(),i=(0,c.getStatEventTarget)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new(0,c.FetchXmlHttpFactory)({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=s.join("");p("Connection","Creating WebChannel: "+a,o);const u=r.createWebChannel(a,o);let h=!1,l=!1;const d=new nr({Hr:t=>{l?p("Connection","Not sending because WebChannel is closed:",t):(h||(p("Connection","Opening WebChannel transport."),u.open(),h=!0),p("Connection","WebChannel sending:",t),u.send(t))},Jr:()=>u.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(u,c.WebChannel.EventType.OPEN,(()=>{l||p("Connection","WebChannel transport opened.")})),f(u,c.WebChannel.EventType.CLOSE,(()=>{l||(l=!0,p("Connection","WebChannel transport closed"),d.io())})),f(u,c.WebChannel.EventType.ERROR,(t=>{l||(l=!0,m("Connection","WebChannel transport errored:",t),d.io(new T(b.UNAVAILABLE,"The operation could not be completed")))})),f(u,c.WebChannel.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];w(!!n);const s=n,r=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(r){p("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=un[t];if(void 0!==e)return dn(e)}(t),n=r.message;void 0===e&&(e=b.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),l=!0,d.io(new T(e,n)),u.close()}else p("Connection","WebChannel received:",n),d.ro(n)}})),f(i,c.Event.STAT_EVENT,(t=>{t.stat===c.Stat.PROXY?p("Connection","Detected buffering proxy"):t.stat===c.Stat.NOPROXY&&p("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.so()}),0),d}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
/**
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
 */
/**
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
 */function rr(){return"undefined"!=typeof document?document:null}
/**
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
 */function ir(t){return new Un(t,!0)}class or{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),s=Math.max(0,e-n);s>0&&p("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(t,e,n=1e3,s=1.5,r=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=s,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
/**
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
 */class ar{No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(g(e.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===b.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new T(b.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return p("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,s,r,i,o,a){this.Hs=t,this.vo=n,this.Vo=s,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new or(t,e)}}class cr extends ar{jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r="NO_CHANGE"===(s=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===s?1:"REMOVE"===s?2:"CURRENT"===s?3:"RESET"===s?4:v(),i=e.targetChange.targetIds||[],o=function(t,e){return t.wt?(w(void 0===e||"string"==typeof e),ut.fromBase64String(e||"")):(w(void 0===e||e instanceof Uint8Array),ut.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?b.UNKNOWN:dn(t.code);return new T(e,t.message||"")}(a);n=new xn(r,i,o,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Gn(t,s.document.name),i=Kn(s.document.updateTime),o=s.document.createTime?Kn(s.document.createTime):P.min(),a=new oe({mapValue:{fields:s.document.fields}}),c=ce.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new kn(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Gn(t,s.document),i=s.readTime?Kn(s.readTime):P.min(),o=ce.newNoDocument(r,i),a=s.removedTargetIds||[];n=new kn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Gn(t,s.document),i=s.removedTargetIds||[];n=new kn([],i,r,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,r=new cn(s),i=t.targetId;n=new Nn(i,r)}}var s;return n}(this.yt,t),n=function(t){if(!("targetChange"in t))return P.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?P.min():e.readTime?Kn(e.readTime):P.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=Xn(this.yt),e.addTarget=function(t,e){let n;const s=e.target;return n=fe(s)?{documents:ts(t,s)}:{query:es(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=jn(t,e.resumeToken):e.snapshotVersion.compareTo(P.min())>0&&(n.readTime=Bn(t,e.snapshotVersion.toTimestamp())),n}(this.yt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=Xn(this.yt),e.removeTarget=t,this.Bo(e)}constructor(t,e,n,s,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,i),this.yt=r}}class ur extends ar{get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(w(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const s=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(w(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?Kn(t.updateTime):Kn(e);return n.isEqual(P.min())&&(n=Kn(e)),new $e(n,t.transformResults||[])}(t,n)))):[]),r=Kn(t.commitTime);return this.listener.Zo(r,s)}var e,n;return w(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Xn(this.yt),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Zn(this.yt,t)))};this.Bo(e)}constructor(t,e,n,s,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,i),this.yt=r,this.Jo=!1}}
/**
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
 */class hr extends class{}{su(){if(this.nu)throw new T(b.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.ao(t,e,n,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(b.UNKNOWN,t.toString())}))}_o(t,e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection._o(t,e,n,r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(b.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.yt=s,this.nu=!1}}class lr{uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(g(e),this.ou=!1):p("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}}
/**
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
 */class dr{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur((t=>{n.enqueueAndForget((async()=>{br(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=E(t);e._u.add(4),await pr(e),e.gu.set("Unknown"),e._u.delete(4),await fr(e)}(this))}))})),this.gu=new lr(n,s)}}async function fr(t){if(br(t))for(const e of t.wu)await e(!0)}async function pr(t){for(const e of t.wu)await e(!1)}function gr(t,e){const n=E(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Er(n)?wr(n):Ur(n).ko()&&yr(n,e))}function mr(t,e){const n=E(t),s=Ur(n);n.du.delete(e),s.ko()&&vr(n,e),0===n.du.size&&(s.ko()?s.Fo():br(n)&&n.gu.set("Unknown"))}function yr(t,e){t.yu.Ot(e.targetId),Ur(t).zo(e)}function vr(t,e){t.yu.Ot(e),Ur(t).Ho(e)}function wr(t){t.yu=new Rn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Ur(t).start(),t.gu.uu()}function Er(t){return br(t)&&!Ur(t).No()&&t.du.size>0}function br(t){return 0===E(t)._u.size}function Tr(t){t.yu=void 0}async function Ir(t){t.du.forEach(((e,n)=>{yr(t,e)}))}async function Cr(t,e){Tr(t),Er(t)?(t.gu.hu(e),wr(t)):t.gu.set("Unknown")}async function Sr(t,e,n){if(t.gu.set("Online"),e instanceof xn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.du.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.du.delete(s),t.yu.removeTarget(s))}(t,e)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await _r(t,n)}else if(e instanceof kn?t.yu.Kt(e):e instanceof Nn?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(P.min()))try{const e=await Hs(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.Zt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.du.get(s);r&&t.du.set(s,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(ut.EMPTY_BYTE_STRING,n.snapshotVersion)),vr(t,e);const s=new ys(n.target,e,1,n.sequenceNumber);yr(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){p("RemoteStore","Failed to raise snapshot:",e),await _r(t,e)}}async function _r(t,e,n){if(!J(e))throw e;t._u.add(1),await pr(t),t.gu.set("Offline"),n||(n=()=>Hs(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await fr(t)}))}function Dr(t,e){return e().catch((n=>_r(t,n,e)))}async function Ar(t){const e=E(t),n=Br(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;kr(e);)try{const t=await zs(e.localStore,s);if(null===t){0===e.fu.length&&n.Fo();break}s=t.batchId,Nr(e,t)}catch(t){await _r(e,t)}xr(e)&&Lr(e)}function kr(t){return br(t)&&t.fu.length<10}function Nr(t,e){t.fu.push(e);const n=Br(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function xr(t){return br(t)&&!Br(t).No()&&t.fu.length>0}function Lr(t){Br(t).start()}async function Rr(t){Br(t).eu()}async function Or(t){const e=Br(t);for(const n of t.fu)e.Xo(n.mutations)}async function Mr(t,e,n){const s=t.fu.shift(),r=gs.from(s,e,n);await Dr(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Ar(t)}async function Fr(t,e){e&&Br(t).Yo&&await async function(t,e){if(ln(n=e.code)&&n!==b.ABORTED){const n=t.fu.shift();Br(t).Mo(),await Dr(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Ar(t)}var n}(t,e),xr(t)&&Lr(t)}async function Pr(t,e){const n=E(t);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const s=br(n);n._u.add(3),await pr(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await fr(n)}async function Vr(t,e){const n=E(t);e?(n._u.delete(2),await fr(n)):e||(n._u.add(2),await pr(n),n.gu.set("Unknown"))}function Ur(t){return t.pu||(t.pu=function(t,e,n){const s=E(t);return s.su(),new cr(e,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,n)}(t.datastore,t.asyncQueue,{Yr:Ir.bind(null,t),Zr:Cr.bind(null,t),Wo:Sr.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Mo(),Er(t)?wr(t):t.gu.set("Unknown")):(await t.pu.stop(),Tr(t))}))),t.pu}function Br(t){return t.Iu||(t.Iu=function(t,e,n){const s=E(t);return s.su(),new ur(e,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,n)}(t.datastore,t.asyncQueue,{Yr:Rr.bind(null,t),Zr:Fr.bind(null,t),tu:Or.bind(null,t),Zo:Mr.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Mo(),await Ar(t)):(await t.Iu.stop(),t.fu.length>0&&(p("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
/**
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
 */}class jr{static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new jr(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function qr(t,e){if(g("AsyncQueue",`${e}: ${t}`),J(t))return new T(b.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class Kr{static emptySet(t){return new Kr(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Kr))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Kr;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||q.comparator(e.key,n.key):(t,e)=>q.comparator(t.key,e.key),this.keyedMap=yn(),this.sortedSet=new te(this.comparator)}}
/**
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
 */class Hr{track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):v():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.Tu=new te(q.comparator)}}class $r{static fromInitialDocuments(t,e,n,s,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new $r(t,e,Kr.emptySet(e),i,n,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ce(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,s,r,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}}
/**
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
 */class zr{constructor(){this.Au=void 0,this.listeners=[]}}class Gr{constructor(){this.queries=new fn((t=>Se(t)),Ce),this.onlineState="Unknown",this.Ru=new Set}}async function Qr(t,e){const n=E(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new zr),r)try{i.Au=await n.onListen(s)}catch(t){const n=qr(t,`Initialization of query '${_e(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Jr(n)}async function Wr(t,e){const n=E(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),r=0===i.listeners.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Xr(t,e){const n=E(t);let s=!1;for(const t of e){const e=t.query,r=n.queries.get(e);if(r){for(const e of r.listeners)e.Pu(t)&&(s=!0);r.Au=t}}s&&Jr(n)}function Yr(t,e,n){const s=E(t),r=s.queries.get(e);if(r)for(const t of r.listeners)t.onError(n);s.queries.delete(e)}function Jr(t){t.Ru.forEach((t=>{t.next()}))}class Zr{Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new $r(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=$r.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}}
/**
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
 */
/**
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
 */
class ti{constructor(t){this.key=t}}class ei{constructor(t){this.key=t}}class ni{get ju(){return this.qu}Wu(t,e){const n=e?e.zu:new Hr,s=e?e.Qu:this.Qu;let r=e?e.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),h=De(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Hu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Gu(h,a)>0||c&&this.Gu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Qu:i,zu:n,$i:o,mutatedKeys:r}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const r=t.zu.Eu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const i=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==r.length||a?{snapshot:new $r(this.query,t.Qu,s,r,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:i}:{Xu:i}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Hr,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.qu=this.qu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.qu=this.qu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=Cn(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new ei(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new ti(n))})),e}tc(t){this.qu=t.Hi,this.Ku=Cn();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return $r.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}constructor(t,e){this.query=t,this.qu=e,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Cn(),this.mutatedKeys=Cn(),this.Gu=ke(t),this.Qu=new Kr(this.Gu)}}class si{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ri{constructor(t){this.key=t,this.nc=!1}}class ii{get isPrimaryClient(){return!0===this.dc}constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.sc={},this.ic=new fn((t=>Se(t)),Ce),this.rc=new Map,this.oc=new Set,this.uc=new te(q.comparator),this.cc=new Map,this.ac=new Ns,this.hc={},this.lc=new Map,this.fc=Cs.vn(),this.onlineState="Unknown",this.dc=void 0}}async function oi(t,e){const n=Ci(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const t=await Gs(n.localStore,Te(e));n.isPrimaryClient&&gr(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,r=await ai(n,e,s,"current"===i,t.resumeToken)}return r}async function ai(t,e,n,s,r){t._c=(e,n,s)=>async function(t,e,n,s){let r=e.view.Wu(n);r.$i&&(r=await Ws(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,r))));const i=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,i);return vi(t,e.targetId,o.Xu),o.snapshot}(t,e,n,s);const i=await Ws(t.localStore,e,!0),o=new ni(e,i.Hi),a=o.Wu(i.documents),c=An.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,r),u=o.applyChanges(a,t.isPrimaryClient,c);vi(t,n,u.Xu);const h=new si(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function ci(t,e){const n=E(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter((t=>!Ce(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Qs(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),mr(n.remoteStore,s.targetId),mi(n,s.targetId)})).catch(X)):(mi(n,s.targetId),await Qs(n.localStore,s.targetId,!0))}async function ui(t,e){const n=E(t);try{const t=await function(t,e){const n=E(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const o=[];e.targetChanges.forEach(((i,a)=>{const c=r.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);var h,l,d;e.targetMismatches.has(a)?u=u.withResumeToken(ut.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,s)),r=r.insert(a,u),l=u,d=i,(0===(h=c).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-h.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Cs.updateTargetData(t,u))}));let a=gn(),c=Cn();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push($s(t,i,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!s.isEqual(P.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Y.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.qi=r,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.cc.get(e);s&&(w(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.nc=!0:t.modifiedDocuments.size>0?w(s.nc):t.removedDocuments.size>0&&(w(s.nc),s.nc=!1))})),await bi(n,t,e)}catch(t){await X(t)}}function hi(t,e,n){const s=E(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.ic.forEach(((n,s)=>{const r=s.view.bu(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=E(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.bu(e)&&(s=!0)})),s&&Jr(n)}(s.eventManager,e),t.length&&s.sc.Wo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function li(t,e,n){const s=E(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let t=new te(q.comparator);t=t.insert(i,ce.newNoDocument(i,P.min()));const n=Cn().add(i),r=new Dn(P.min(),new Map,new se(O),t,n);await ui(s,r),s.uc=s.uc.remove(i),s.cc.delete(e),Ei(s)}else await Qs(s.localStore,e,!1).then((()=>mi(s,e,n))).catch(X)}async function di(t,e){const n=E(t),s=e.batch.batchId;try{const t=await function(t,e){const n=E(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const r=n.batch,i=r.keys();let o=Y.resolve();return i.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);w(null!==i),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Cn();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(n.localStore,e);gi(n,s,null),pi(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await bi(n,t)}catch(t){await X(t)}}async function fi(t,e,n){const s=E(t);try{const t=await function(t,e){const n=E(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(w(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);gi(s,e,n),pi(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await bi(s,t)}catch(t){await X(t)}}function pi(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function gi(t,e,n){const s=E(t);let r=s.hc[s.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function mi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||yi(t,e)}))}function yi(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(mr(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Ei(t))}function vi(t,e,n){for(const s of n)s instanceof ti?(t.ac.addReference(s.key,e),wi(t,s)):s instanceof ei?(p("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||yi(t,s.key)):v()}function wi(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(p("SyncEngine","New document in limbo: "+n),t.oc.add(s),Ei(t))}function Ei(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new q(U.fromString(e)),s=t.fc.next();t.cc.set(s,new ri(n)),t.uc=t.uc.insert(n,s),gr(t.remoteStore,new ys(Te(me(n.path)),s,2,Z.at))}}async function bi(t,e,n){const s=E(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach(((t,a)=>{o.push(s._c(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=Us.Ci(a.targetId,t);i.push(e)}})))})),await Promise.all(o),s.sc.Wo(r),await async function(t,e){const n=E(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Y.forEach(e,(e=>Y.forEach(e.Si,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Y.forEach(e.Di,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!J(t))throw t;p("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qi.get(e),s=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(s);n.qi=n.qi.insert(e,r)}}}(s.localStore,i))}async function Ti(t,e){const n=E(t);if(!n.currentUser.isEqual(e)){p("SyncEngine","User change. New user:",e.toKey());const t=await Ks(n.localStore,e);n.currentUser=e,(s=n).lc.forEach((t=>{t.forEach((t=>{t.reject(new T(b.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),s.lc.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await bi(n,t.ji)}var s}function Ii(t,e){const n=E(t),s=n.cc.get(e);if(s&&s.nc)return Cn().add(s.key);{let t=Cn();const s=n.rc.get(e);if(!s)return t;for(const e of s){const s=n.ic.get(e);t=t.unionWith(s.view.ju)}return t}}function Ci(t){const e=E(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ui.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ii.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=li.bind(null,e),e.sc.Wo=Xr.bind(null,e.eventManager),e.sc.wc=Yr.bind(null,e.eventManager),e}function Si(t){const e=E(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=di.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fi.bind(null,e),e}class _i{async initialize(t){this.yt=ir(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return qs(this.persistence,new Bs,t.initialUser,this.yt)}yc(t){return new Fs(Vs.Bs,this.yt)}gc(t){return new Js}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Di{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>hi(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ti.bind(null,this.syncEngine),await Vr(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Gr}createDatastore(t){const e=ir(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new sr(s));var s,r,i;return r=t.authCredentials,i=t.appCheckCredentials,new hr(r,i,n,e)}createRemoteStore(t){var e,n,s,r,i;return e=this.localStore,n=this.datastore,s=t.asyncQueue,r=t=>hi(this.syncEngine,t,0),i=tr.C()?new tr:new Zs,new dr(e,n,s,r,i)}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new ii(t,e,n,s,r,i);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=E(t);p("RemoteStore","RemoteStore shutting down."),e._u.add(5),await pr(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
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
 */function Ai(t,e,n){if(!n)throw new T(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ki(t){if(!q.isDocumentKey(t))throw new T(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ni(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":v()}function xi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ni(t);throw new T(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */
const Li=new Map;class Ri{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new T(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new T(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new T(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
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
 */class Oi{get app(){if(!this._app)throw new T(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new T(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ri(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new S;switch(t.type){case"gapi":const e=t.client;return new k(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new T(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Li.get(t);e&&(p("ComponentProvider","Removing Datastore"),Li.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ri({}),this._settingsFrozen=!1}}
/**
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
 */
class Mi{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Mi(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class Fi{withConverter(t){return new Fi(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class Pi extends Fi{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Mi(this.firestore,null,new q(t))}withConverter(t){return new Pi(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,me(n)),this._path=n,this.type="collection"}}function Vi(t,e,...n){if(t=(0,a.getModularInstance)(t),1===arguments.length&&(e=R.R()),Ai("doc","path",e),t instanceof Oi){const s=U.fromString(e,...n);return ki(s),new Mi(t,null,new q(s))}{if(!(t instanceof Mi||t instanceof Pi))throw new T(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(U.fromString(e,...n));return ki(s),new Mi(t.firestore,t instanceof Pi?t.converter:null,new q(s))}}
/**
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
 */
/**
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
 */
class Ui{next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):g("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
/**
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
 */
/**
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
 */
class Bi{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=qr(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=h.UNAUTHENTICATED,this.clientId=R.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{p("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(p("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function ji(t,e){t.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Ks(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function qi(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ki(t);p("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>Pr(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Pr(e.remoteStore,n))),t.onlineComponents=e}async function Ki(t){return t.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await ji(t,new _i)),t.offlineComponents}async function Hi(t){return t.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await qi(t,new Di)),t.onlineComponents}function $i(t){return Hi(t).then((t=>t.syncEngine))}async function zi(t){const e=await Hi(t),n=e.eventManager;return n.onListen=oi.bind(null,e.syncEngine),n.onUnlisten=ci.bind(null,e.syncEngine),n}function Gi(t,e,n={}){const s=new I;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,r){const i=new Ui({next:i=>{e.enqueueAndForget((()=>Wr(t,o)));const a=i.docs.has(n);!a&&i.fromCache?r.reject(new T(b.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&s&&"server"===s.source?r.reject(new T(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(i)},error:t=>r.reject(t)}),o=new Zr(me(n.path),i,{includeMetadataChanges:!0,Nu:!0});return Qr(t,o)}(await zi(t),t.asyncQueue,e,n,s))),s.promise}class Qi{get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=rr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new I;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!J(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;throw g("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const s=jr.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(s),s}zc(){this.Kc&&v()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new or(this,"async_queue_retry"),this.Wc=()=>{const t=rr();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=rr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}}function Wi(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}(t)}class Xi extends Oi{_terminate(){return this._firestoreClient||Zi(this),this._firestoreClient.terminate()}constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Qi,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}}function Yi(t,e){const n="object"==typeof t?t:(0,s.getApp)(),r="string"==typeof t?t:e||"(default)",i=(0,s._getProvider)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=(0,a.getDefaultEmulatorHostnameAndPort)("firestore");t&&function(t,e,n,s={}){var r;const i=(t=xi(t,Oi))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==e&&m("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=h.MOCK_USER;else{e=(0,a.createMockUserToken)(s.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const i=s.mockUserToken.sub||s.mockUserToken.user_id;if(!i)throw new T(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new h(i)}t._authCredentials=new _(new C(e,n))}}(i,...t)}return i}function Ji(t){return t._firestoreClient||Zi(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Zi(t){var e;const n=t._freezeSettings(),s=(r=t._databaseId,i=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new tt(r,i,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var r,i,o,a;t._firestoreClient=new Bi(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
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
 */
/**
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
 */
class to{static fromBase64String(t){try{return new to(ut.fromBase64String(t))}catch(t){throw new T(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new to(ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
/**
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
 */class eo{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new T(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new j(t)}}
/**
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
 */
class no{constructor(t){this._methodName=t}}
/**
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
 */class so{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return O(this._lat,t._lat)||O(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
/**
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
 */const ro=/^__.*__$/;class io{toMutation(t,e){return null!==this.fieldMask?new en(t,this.data,this.fieldMask,e,this.fieldTransforms):new tn(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}class oo{toMutation(t,e){return new en(t,this.data,this.fieldMask,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function ao(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class co{get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new co(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ia({path:n,oa:!1});return s.ua(t),s}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ia({path:n,oa:!1});return s.na(),s}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Io(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(ao(this.sa)&&ro.test(t))throw this.ha('Document fields cannot begin and end with "__"')}constructor(t,e,n,s,r,i){this.settings=t,this.databaseId=e,this.yt=n,this.ignoreUndefinedProperties=s,void 0===r&&this.na(),this.fieldTransforms=r||[],this.fieldMask=i||[]}}class uo{da(t,e,n,s=!1){return new co({sa:t,methodName:e,fa:n,path:j.emptyPath(),oa:!1,la:s},this.databaseId,this.yt,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.yt=n||ir(t)}}function ho(t){const e=t._freezeSettings(),n=ir(t._databaseId);return new uo(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lo(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);wo("Data must be an object, but it was:",o,s);const a=yo(s,o);let c,u;if(i.merge)c=new ie(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const s of i.mergeFields){const r=Eo(e,s,n);if(!o.contains(r))throw new T(b.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Co(t,r)||t.push(r)}c=new ie(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new io(new oe(a),c,u)}class fo extends no{_toFieldTransform(t){if(2!==t.sa)throw 1===t.sa?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof fo}}function po(t,e,n,s){const r=t.da(1,e,n);wo("Data must be an object, but it was:",r,s);const i=[],o=oe.empty();st(s,((t,s)=>{const c=To(e,t,n);s=(0,a.getModularInstance)(s);const u=r.ca(c);if(s instanceof fo)i.push(c);else{const t=mo(s,u);null!=t&&(i.push(c),o.set(c,t))}}));const c=new ie(i);return new oo(o,c,r.fieldTransforms)}function go(t,e,n,s,r,i){const o=t.da(1,e,n),c=[Eo(e,s,n)],u=[r];if(i.length%2!=0)throw new T(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<i.length;t+=2)c.push(Eo(e,i[t])),u.push(i[t+1]);const h=[],l=oe.empty();for(let t=c.length-1;t>=0;--t)if(!Co(h,c[t])){const e=c[t];let n=u[t];n=(0,a.getModularInstance)(n);const s=o.ca(e);if(n instanceof fo)h.push(e);else{const t=mo(n,s);null!=t&&(h.push(e),l.set(e,t))}}const d=new ie(h);return new oo(l,d,o.fieldTransforms)}function mo(t,e){if(vo(t=(0,a.getModularInstance)(t)))return wo("Unsupported field value:",e,t),yo(t,e);if(t instanceof no)return function(t,e){if(!ao(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const r of t){let t=mo(r,e.aa(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Re(e.yt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=F.fromDate(t);return{timestampValue:Bn(e.yt,n)}}if(t instanceof F){const n=new F(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Bn(e.yt,n)}}if(t instanceof so)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof to)return{bytesValue:jn(e.yt,t._byteString)};if(t instanceof Mi){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Hn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${Ni(t)}`)}(t,e)}function yo(t,e){const n={};return rt(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):st(t,((t,s)=>{const r=mo(s,e.ra(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function vo(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof F||t instanceof so||t instanceof to||t instanceof Mi||t instanceof no)}function wo(t,e,n){if(!vo(n)||("object"!=typeof(s=n)||null===s||Object.getPrototypeOf(s)!==Object.prototype&&null!==Object.getPrototypeOf(s))){const s=Ni(n);throw"an object"===s?e.ha(t+" a custom object"):e.ha(t+" "+s)}var s}function Eo(t,e,n){if((e=(0,a.getModularInstance)(e))instanceof eo)return e._internalPath;if("string"==typeof e)return To(t,e);throw Io("Field path arguments must be of type string or ",t,!1,void 0,n)}const bo=new RegExp("[~\\*/\\[\\]]");function To(t,e,n){if(e.search(bo)>=0)throw Io(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new eo(...e.split("."))._internalPath}catch(s){throw Io(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Io(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new T(b.INVALID_ARGUMENT,a+t+c)}function Co(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
 */class So{get id(){return this._key.path.lastSegment()}get ref(){return new Mi(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new _o(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Do("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,s,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=r}}class _o extends So{data(){return super.data()}}function Do(t,e){return"string"==typeof e?To(t,e):e instanceof eo?e._internalPath:e._delegate._internalPath}
/**
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
 */function Ao(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new T(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ko{convertValue(t,e="none"){switch(vt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return dt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ft(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return st(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new so(dt(t.latitude),dt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=gt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(mt(t));default:return null}}convertTimestamp(t){const e=lt(t);return new F(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=U.fromString(t);w(hs(n));const s=new et(n.get(1),n.get(3)),r=new q(n.popFirst(5));return s.isEqual(e)||g(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
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
 */function No(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}
/**
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
 */
class xo{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class Lo extends So{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Do("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,s,r,i){super(t,e,n,s,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}}class Ro extends Lo{data(t={}){return super.data(t)}}class Oo{get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Ro(this._firestore,this._userDataWriter,n.key,n,new xo(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new T(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new Ro(t._firestore,t._userDataWriter,n.doc.key,n.doc,new xo(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Ro(t._firestore,t._userDataWriter,e.doc.key,e.doc,new xo(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Mo(e.type),doc:s,oldIndex:r,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new xo(s.hasPendingWrites,s.fromCache),this.query=n}}function Mo(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}
/**
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
 */
function Fo(t){t=xi(t,Mi);const e=xi(t.firestore,Xi);return Gi(Ji(e),t._key).then((n=>Ko(e,t,n)))}class Po extends ko{convertBytes(t){return new to(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Mi(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function Vo(t,e,n){t=xi(t,Mi);const s=xi(t.firestore,Xi),r=No(t.converter,e,n);return qo(s,[lo(ho(s),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,ze.none())])}function Uo(t,e,n,...s){t=xi(t,Mi);const r=xi(t.firestore,Xi),i=ho(r);let o;return o="string"==typeof(e=(0,a.getModularInstance)(e))||e instanceof eo?go(i,"updateDoc",t._key,e,n,s):po(i,"updateDoc",t._key,e),qo(r,[o.toMutation(t._key,ze.exists(!0))])}function Bo(t){return qo(xi(t.firestore,Xi),[new on(t._key,ze.none())])}function jo(t,...e){var n,s,r;t=(0,a.getModularInstance)(t);let i={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Wi(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges};if(Wi(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(s=t.error)||void 0===s?void 0:s.bind(t),e[o+2]=null===(r=t.complete)||void 0===r?void 0:r.bind(t)}let u,h,l;if(t instanceof Mi)h=xi(t.firestore,Xi),l=me(t._key.path),u={next:n=>{e[o]&&e[o](Ko(h,t,n))},error:e[o+1],complete:e[o+2]};else{const n=xi(t,Fi);h=xi(n.firestore,Xi),l=n._query;const s=new Po(h);u={next:t=>{e[o]&&e[o](new Oo(h,s,n,t))},error:e[o+1],complete:e[o+2]},Ao(t._query)}return function(t,e,n,s){const r=new Ui(s),i=new Zr(e,r,n);return t.asyncQueue.enqueueAndForget((async()=>Qr(await zi(t),i))),()=>{r.bc(),t.asyncQueue.enqueueAndForget((async()=>Wr(await zi(t),i)))}}(Ji(h),l,c,u)}function qo(t,e){return function(t,e){const n=new I;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const s=Si(t);try{const t=await function(t,e){const n=E(t),s=F.now(),r=e.reduce(((t,e)=>t.add(e.key)),Cn());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=gn(),c=Cn();return n.Gi.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{i=r;const o=[];for(const t of e){const e=Je(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new en(t.key,e,ae(e.value.mapValue),ze.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:vn(i)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.hc[t.currentUser.toKey()];s||(s=new te(O)),s=s.insert(e,n),t.hc[t.currentUser.toKey()]=s}(s,t.batchId,n),await bi(s,t.changes),await Ar(s.remoteStore)}catch(t){const e=qr(t,"Failed to persist write");n.reject(e)}}(await $i(t),e,n))),n.promise}(Ji(t),e)}function Ko(t,e,n){const s=n.docs.get(e._key),r=new Po(t);return new Lo(t,r,e._key,s,new xo(n.hasPendingWrites,n.fromCache),e.converter)}
/**
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
 */!function(t,e=!0){var n;n=s.SDK_VERSION,l=n,(0,s._registerComponent)(new(0,i.Component)("firestore",((t,{instanceIdentifier:n,options:s})=>{const r=t.getProvider("app").getImmediate(),i=new Xi(new D(t.getProvider("auth-internal")),new x(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new T(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new et(t.options.projectId,e)}(r,n),r);return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i}),"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(u,"3.8.0",t),(0,s.registerVersion)(u,"3.8.0","esm2017")}()})),r.register("ix4Jr",(function(e,n){t(e.exports,"_registerComponent",(function(){return y})),t(e.exports,"_getProvider",(function(){return v})),t(e.exports,"_removeServiceInstance",(function(){return w})),t(e.exports,"SDK_VERSION",(function(){return I})),t(e.exports,"initializeApp",(function(){return C})),t(e.exports,"getApp",(function(){return S})),t(e.exports,"registerVersion",(function(){return _}));var s=r("4a6xH"),i=r("7vF8m"),o=r("ffjl9"),a=r("cCiiD");o=r("ffjl9");
/**
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
 */
class c{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const u="@firebase/app",h="0.9.0",l=new(0,i.Logger)("@firebase/app"),d="[DEFAULT]",f={[u]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,g=new Map;function m(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function y(t){const e=t.name;if(g.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;g.set(e,t);for(const e of p.values())m(e,t);return!0}function v(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function w(t,e,n="[DEFAULT]"){v(t,e).clearInstance(n)}
/**
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
 */
const E={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},b=new(0,o.ErrorFactory)("app","Firebase",E);
/**
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
 */
class T{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,s.Component)("app",(()=>this),"PUBLIC"))}}
/**
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
 */const I="9.15.0";function C(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const r=Object.assign({name:d,automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!=typeof i||!i)throw b.create("bad-app-name",{appName:String(i)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw b.create("no-options");const a=p.get(i);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(r,a.config))return a;throw b.create("duplicate-app",{appName:i})}const c=new(0,s.ComponentContainer)(i);for(const t of g.values())c.addComponent(t);const u=new T(n,r,c);return p.set(i,u),u}function S(t="[DEFAULT]"){const e=p.get(t);if(!e&&t===d)return C();if(!e)throw b.create("no-app",{appName:t});return e}function _(t,e,n){var r;let i=null!==(r=f[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}y(new(0,s.Component)(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
const D="firebase-heartbeat-store";let A=null;function k(){return A||(A=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(D)}}).catch((t=>{throw b.create("idb-open",{originalErrorMessage:t.message})}))),A}async function N(t,e){try{const n=(await k()).transaction(D,"readwrite"),s=n.objectStore(D);return await s.put(e,x(t)),n.done}catch(t){if(t instanceof o.FirebaseError)l.warn(t.message);else{const e=b.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});l.warn(e.message)}}}function x(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */class L{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=R();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=R(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let s=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),M(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),M(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new O(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function R(){return(new Date).toISOString().substring(0,10)}class O{async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await k()).transaction(D).objectStore(D).get(x(t))}catch(t){if(t instanceof o.FirebaseError)l.warn(t.message);else{const e=b.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});l.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return N(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return N(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function M(t){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */var F;F="",y(new(0,s.Component)("platform-logger",(t=>new c(t)),"PRIVATE")),y(new(0,s.Component)("heartbeat",(t=>new L(t)),"PRIVATE")),_(u,h,F),_(u,h,"esm2017"),_("fire-js","")})),r.register("4a6xH",(function(e,n){t(e.exports,"Component",(function(){return i})),t(e.exports,"ComponentContainer",(function(){return c}));var s=r("ffjl9");class i{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
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
 */const o="[DEFAULT]";
/**
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
 */class a{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new(0,s.Deferred);if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&t(i,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===o?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class c{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new a(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}})),r.register("ffjl9",(function(n,s){t(n.exports,"base64urlEncodeWithoutPadding",(function(){return c})),t(n.exports,"base64Decode",(function(){return u})),t(n.exports,"getUA",(function(){return h})),t(n.exports,"isMobileCordova",(function(){return l})),t(n.exports,"isBrowserExtension",(function(){return d})),t(n.exports,"isReactNative",(function(){return f})),t(n.exports,"isIE",(function(){return p})),t(n.exports,"isSafari",(function(){return g})),t(n.exports,"isIndexedDBAvailable",(function(){return m})),t(n.exports,"validateIndexedDBOpenable",(function(){return y})),t(n.exports,"getDefaultEmulatorHost",(function(){return E})),t(n.exports,"getDefaultEmulatorHostnameAndPort",(function(){return b})),t(n.exports,"getDefaultAppConfig",(function(){return T})),t(n.exports,"getExperimentalSetting",(function(){return I})),t(n.exports,"Deferred",(function(){return C})),t(n.exports,"createMockUserToken",(function(){return S})),t(n.exports,"FirebaseError",(function(){return _})),t(n.exports,"ErrorFactory",(function(){return D})),t(n.exports,"isEmpty",(function(){return k})),t(n.exports,"deepEqual",(function(){return N})),t(n.exports,"querystring",(function(){return L})),t(n.exports,"querystringDecode",(function(){return R})),t(n.exports,"extractQuerystring",(function(){return O})),t(n.exports,"createSubscribe",(function(){return M})),t(n.exports,"getModularInstance",(function(){return V}));var i=r("4TNnu");
/**
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
 */const o=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++s)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const r=t[e],i=e+1<t.length,o=i?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=r>>2,h=(3&r)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),s.push(n[u],n[h],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(i>>10)),e[s++]=String.fromCharCode(56320+(1023&i))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],i=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==i||null==o||null==a)throw Error();const c=r<<2|i>>4;if(s.push(c),64!==o){const t=i<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},c=function(t){return function(t){const e=o(t);return a.encodeByteArray(e,!0)}(t).replace(/\./g,"")},u=function(t){try{return a.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
/**
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
 */
function h(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function l(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function d(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function f(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){const t=h();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return!function(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function m(){try{return"object"==typeof indexedDB}catch(t){return!1}}function y(){return new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}
/**
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
 */
const v=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,w=()=>{try{return v()||(()=>{if(void 0===i||void 0===i.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&u(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},E=t=>{var e,n;return null===(n=null===(e=w())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},b=t=>{const e=E(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]},T=()=>{var t;return null===(t=w())||void 0===t?void 0:t.config},I=t=>{var e;return null===(e=w())||void 0===e?void 0:e[`_${t}`]};
/**
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
 */
class C{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */function S(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[c(JSON.stringify({alg:"none",type:"JWT"})),c(JSON.stringify(i)),""].join(".")}
/**
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
 */class _ extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],i=r?function(t,e){return t.replace(A,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`;return new _(s,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const A=/\{\$([^}]+)}/g;
/**
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
 */function k(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function N(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const n=t[r],i=e[r];if(x(n)&&x(i)){if(!N(n,i))return!1}else if(n!==i)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function x(t){return null!==t&&"object"==typeof t}
/**
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
 */
/**
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
 */
function L(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function R(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,s]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(s)}})),e}function O(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
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
 */function M(t,e){const n=new F(t,e);return n.subscribe.bind(n)}class F{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let s;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");s=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===s.next&&(s.next=P),void 0===s.error&&(s.error=P),void 0===s.complete&&(s.complete=P);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(t){}})),this.observers.push(s),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function P(){}
/**
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
 */
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
function V(t){return t&&t._delegate?t._delegate:t}})),r.register("4TNnu",(function(t,e){var n,s,r=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{s="function"==typeof clearTimeout?clearTimeout:o}catch(t){s=o}}();var c,u=[],h=!1,l=-1;function d(){h&&c&&(h=!1,c.length?u=c.concat(u):l=-1,u.length&&f())}function f(){if(!h){var t=a(d);h=!0;for(var e=u.length;e;){for(c=u,u=[];++l<e;)c&&c[l].run();l=-1,e=u.length}c=null,h=!1,function(t){if(s===clearTimeout)return clearTimeout(t);if((s===o||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(t);try{s(t)}catch(e){try{return s.call(null,t)}catch(e){return s.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function g(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new p(t,e)),1!==u.length||h||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}})),r.register("7vF8m",(function(e,n){t(e.exports,"LogLevel",(function(){return r})),t(e.exports,"Logger",(function(){return h})),t(e.exports,"setLogLevel",(function(){return l})),t(e.exports,"setUserLogHandler",(function(){return d}));
/**
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
 */
const s=[];var r,i;(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";const o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},a=r.INFO,c={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},u=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),r=c[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${s}]  ${t.name}:`,...n)};class h{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}constructor(t){this.name=t,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,s.push(this)}}function l(t){s.forEach((e=>{e.setLogLevel(t)}))}function d(t,e){for(const n of s){let s=null;e&&e.level&&(s=o[e.level]),n.userLogHandler=null===t?null:(e,n,...i)=>{const o=i.map((t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}})).filter((t=>t)).join(" ");n>=(null!=s?s:e.logLevel)&&t({level:r[n].toLowerCase(),message:o,args:i,type:e.name})}}}})),r.register("cCiiD",(function(e,n){t(e.exports,"openDB",(function(){return i}));var s=r("ekHjI");s=r("ekHjI");function i(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(t,e),c=(0,s.w)(a);return r&&a.addEventListener("upgradeneeded",(t=>{r((0,s.w)(a.result),t.oldVersion,t.newVersion,(0,s.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),c.then((t=>{o&&t.addEventListener("close",(()=>o())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),c}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],c=new Map;function u(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(c.get(e))return c.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=a.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!o.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let o=i.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&i.done]))[0]};return c.set(e,i),i}(0,s.r)((t=>({...t,get:(e,n,s)=>u(e,n)||t.get(e,n,s),has:(e,n)=>!!u(e,n)||t.has(e,n)})))})),r.register("ekHjI",(function(e,n){t(e.exports,"w",(function(){return p})),t(e.exports,"r",(function(){return l}));let s,r;const i=new WeakMap,o=new WeakMap,a=new WeakMap,c=new WeakMap,u=new WeakMap;let h={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return o.get(t);if("objectStoreNames"===e)return t.objectStoreNames||a.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function l(t){h=t(h)}function d(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(g(this),e),p(i.get(this))}:function(...e){return p(t.apply(g(this),e))}:function(e,...n){const s=t.call(g(this),e,...n);return a.set(s,e.sort?e.sort():[e]),p(s)}}function f(t){return"function"==typeof t?d(t):(t instanceof IDBTransaction&&function(t){if(o.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),s()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)}));o.set(t,e)}(t),e=t,(s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,h):t);var e}function p(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(p(t.result)),s()},i=()=>{n(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&i.set(e,t)})).catch((()=>{})),u.set(e,t),e}(t);if(c.has(t))return c.get(t);const e=f(t);return e!==t&&(c.set(t,e),u.set(e,t)),e}const g=t=>u.get(t)})),r.register("lW9Fu",(function(n,s){t(n.exports,"createWebChannelTransport",(function(){return Jn})),t(n.exports,"getStatEventTarget",(function(){return Zn})),t(n.exports,"ErrorCode",(function(){return ts})),t(n.exports,"EventType",(function(){return es})),t(n.exports,"Event",(function(){return ns})),t(n.exports,"Stat",(function(){return ss})),t(n.exports,"FetchXmlHttpFactory",(function(){return rs})),t(n.exports,"WebChannel",(function(){return is})),t(n.exports,"XhrIo",(function(){return os}));var r,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},o={},a=a||{},c=i||self;function u(){}function h(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g).apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function w(){this.s=this.s,this.o=this.o}w.prototype.s=!1,w.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f))},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function b(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function T(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(h(n)){const e=t.length||0,s=n.length||0;t.length=e+s;for(let r=0;r<s;r++)t[e+r]=n[r]}else t.push(n)}}function I(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{c.addEventListener("test",u,e),c.removeEventListener("test",u,e)}catch(t){}return t}();function S(t){return/^[\s\xa0]*$/.test(t)}var _=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function D(t,e){return t<e?-1:t>e?1:0}function A(){var t=c.navigator;return t&&(t=t.userAgent)?t:""}function k(t){return-1!=A().indexOf(t)}function N(t){return N[" "](t),t}N[" "]=u;var x,L,R=k("Opera"),O=k("Trident")||k("MSIE"),M=k("Edge"),F=M||O,P=k("Gecko")&&!(-1!=A().toLowerCase().indexOf("webkit")&&!k("Edge"))&&!(k("Trident")||k("MSIE"))&&!k("Edge"),V=-1!=A().toLowerCase().indexOf("webkit")&&!k("Edge");function U(){var t=c.document;return t?t.documentMode:void 0}t:{var B="",j=(L=A(),P?/rv:([^\);]+)(\)|;)/.exec(L):M?/Edge\/([\d\.]+)/.exec(L):O?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(L):V?/WebKit\/(\S+)/.exec(L):R?/(?:Version)[ \/]?(\S+)/.exec(L):void 0);if(j&&(B=j?j[1]:""),O){var q=U();if(null!=q&&q>parseFloat(B)){x=String(q);break t}}x=B}var K,H={};function $(){return function(t){var e=H;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=_(String(x)).split("."),n=_("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;t=D(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||D(0==r[2].length,0==i[2].length)||D(r[2],i[2]),r=r[3],i=i[3]}while(0==t)}return 0<=t}))}if(c.document&&O){var z=U();K=z||(parseInt(x,10)||void 0)}else K=void 0;var G=K;function Q(t,e){if(I.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(P){t:{try{N(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:W[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Q.X.h.call(this)}}v(Q,I);var W={2:"touch",3:"pen",4:"mouse"};Q.prototype.h=function(){Q.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var X="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Y,this.ba=this.ea=!1}function Z(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function tt(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function et(t){const e={};for(const n in t)e[n]=t[n];return e}const nt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function st(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<nt.length;e++)n=nt[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function rt(t){this.src=t,this.g={},this.h=0}function it(t,e){var n=e.type;if(n in t.g){var s,r=t.g[n],i=E(r,e);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ot(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}rt.prototype.add=function(t,e,n,s,r){var i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);var o=ot(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new J(e,this.src,i,!!s,r)).ea=n,t.push(e)),e};var at="closure_lm_"+(1e6*Math.random()|0),ct={};function ut(t,e,n,s,r){if(s&&s.once)return lt(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ut(t,e[i],n,s,r);return null}return n=vt(n),t&&t[X]?t.N(e,n,l(s)?!!s.capture:!!s,r):ht(t,e,n,!1,s,r)}function ht(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=l(r)?!!r.capture:!!r,a=mt(t);if(a||(t[at]=a=new rt(t)),(n=a.add(e,n,s,o,i)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=gt;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)C||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(pt(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function lt(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)lt(t,e[i],n,s,r);return null}return n=vt(n),t&&t[X]?t.O(e,n,l(s)?!!s.capture:!!s,r):ht(t,e,n,!0,s,r)}function dt(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)dt(t,e[i],n,s,r);else s=l(s)?!!s.capture:!!s,n=vt(n),t&&t[X]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ot(i=t.g[e],n,s,r))&&(Z(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=mt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ot(e,n,s,r)),(n=-1<t?e[t]:null)&&ft(n))}function ft(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[X])it(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(pt(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=mt(e))?(it(n,t),0==n.h&&(n.src=null,e[at]=null)):Z(t)}}}function pt(t){return t in ct?ct[t]:ct[t]="on"+t}function gt(t,e){if(t.ba)t=!0;else{e=new Q(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ft(t),t=n.call(s,e)}return t}function mt(t){return(t=t[at])instanceof rt?t:null}var yt="__closure_events_fn_"+(1e9*Math.random()>>>0);function vt(t){return"function"==typeof t?t:(t[yt]||(t[yt]=function(e){return t.handleEvent(e)}),t[yt])}function wt(){w.call(this),this.i=new rt(this),this.P=this,this.I=null}function Et(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new I(e,t);else if(e instanceof I)e.target=e.target||t;else{var r=e;st(e=new I(s,t),r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=bt(o,s,!0,e)&&r}if(r=bt(o=e.g=t,s,!0,e)&&r,r=bt(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)r=bt(o=e.g=n[i],s,!1,e)&&r}function bt(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&it(t.i,o),r=!1!==a.call(c,s)&&r}}return r&&!s.defaultPrevented}v(wt,w),wt.prototype[X]=!0,wt.prototype.removeEventListener=function(t,e,n,s){dt(this,t,e,n,s)},wt.prototype.M=function(){if(wt.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Z(n[s]);delete e.g[t],e.h--}}this.I=null},wt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},wt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Tt=c.JSON.stringify;function It(){var t=Nt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Ct,St=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new _t),(t=>t.reset()));class _t{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Dt(t){c.setTimeout((()=>{throw t}),0)}function At(t,e){Ct||function(){var t=c.Promise.resolve(void 0);Ct=function(){t.then(xt)}}(),kt||(Ct(),kt=!0),Nt.add(t,e)}var kt=!1,Nt=new class{add(t,e){const n=St.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function xt(){for(var t;t=It();){try{t.h.call(t.g)}catch(t){Dt(t)}var e=St;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}kt=!1}function Lt(t,e){wt.call(this),this.h=t||1,this.g=e||c,this.j=m(this.lb,this),this.l=Date.now()}function Rt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Ot(t,e,n){if("function"==typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:c.setTimeout(t,e||0)}function Mt(t){t.g=Ot((()=>{t.g=null,t.i&&(t.i=!1,Mt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Lt,wt),(r=Lt.prototype).ca=!1,r.R=null,r.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Et(this,"tick"),this.ca&&(Rt(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Lt.X.M.call(this),Rt(this),delete this.g};class Ft extends w{l(t){this.h=arguments,this.g?this.i=!0:Mt(this)}M(){super.M(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Pt(t){w.call(this),this.h=t,this.g={}}v(Pt,w);var Vt=[];function Ut(t,e,n,s){Array.isArray(n)||(n&&(Vt[0]=n.toString()),n=Vt);for(var r=0;r<n.length;r++){var i=ut(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Bt(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ft(t)}),t),t.g={}}function jt(){this.g=!0}function qt(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return Tt(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}Pt.prototype.M=function(){Pt.X.M.call(this),Bt(this)},Pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},jt.prototype.Aa=function(){this.g=!1},jt.prototype.info=function(){};var Kt={},Ht=null;function $t(){return Ht=Ht||new wt}function zt(t){I.call(this,Kt.Pa,t)}function Gt(t){const e=$t();Et(e,new zt(e))}function Qt(t,e){I.call(this,Kt.STAT_EVENT,t),this.stat=e}function Wt(t){const e=$t();Et(e,new Qt(e,t))}function Xt(t,e){I.call(this,Kt.Qa,t),this.size=e}function Yt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return c.setTimeout((function(){t()}),e)}Kt.Pa="serverreachability",v(zt,I),Kt.STAT_EVENT="statevent",v(Qt,I),Kt.Qa="timingevent",v(Xt,I);var Jt={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Zt={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function te(){}function ee(t){return t.h||(t.h=t.i())}function ne(){}te.prototype.h=null;var se,re={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ie(){I.call(this,"d")}function oe(){I.call(this,"c")}function ae(){}function ce(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Pt(this),this.O=he,t=F?125:void 0,this.T=new Lt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ue}function ue(){this.i=null,this.g="",this.h=!1}v(ie,I),v(oe,I),v(ae,te),ae.prototype.g=function(){return new XMLHttpRequest},ae.prototype.i=function(){return{}},se=new ae;var he=45e3,le={},de={};function fe(t,e,n){t.K=1,t.v=Le(De(e)),t.s=n,t.P=!0,pe(t,null)}function pe(t,e){t.F=Date.now(),ve(t),t.A=De(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),$e(n.i,"t",s),t.C=0,n=t.l.H,t.h=new ue,t.g=$n(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Ft(m(t.La,t,t.g),t.N)),Ut(t.S,t.g,"readystatechange",t.ib),e=t.H?et(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Gt(),function(t,e,n,s,r,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function ge(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function me(t,e,n){let s,r=!0;for(;!t.I&&t.C<n.length;){if(s=ye(t,n),s==de){4==e&&(t.o=4,Wt(14),r=!1),qt(t.j,t.m,null,"[Incomplete Response]");break}if(s==le){t.o=4,Wt(15),qt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}qt(t.j,t.m,s,null),Ie(t,s)}ge(t)&&s!=de&&s!=le&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Wt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pn(e),e.K=!0,Wt(11))):(qt(t.j,t.m,n,"[Invalid Chunked Response]"),Te(t),be(t))}function ye(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?de:(n=Number(e.substring(n,s)),isNaN(n)?le:(s+=1)+n>e.length?de:(e=e.substr(s,n),t.C=s+n,e))}function ve(t){t.V=Date.now()+t.O,we(t,t.O)}function we(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Yt(m(t.gb,t),e)}function Ee(t){t.B&&(c.clearTimeout(t.B),t.B=null)}function be(t){0==t.l.G||t.I||Bn(t.l,t)}function Te(t){Ee(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Rt(t.T),Bt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ie(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Ye(n.h,t)))if(!t.J&&Ye(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Un(n),kn(n)}Fn(n),Wt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=Yt(m(n.cb,n),6e3));if(1>=Xe(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else qn(n,11)}else if((t.J||n.g==t)&&Un(n),!S(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=u[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(s=1.5*h,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(Je(i,i.h),i.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,xe(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((s=n).sa=Hn(s,s.H?s.ka:null,s.V),o.J){Ze(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ee(a),ve(a)),s.g=o}else Mn(s);0<n.i.length&&xn(n)}else"stop"!=u[0]&&"close"!=u[0]||qn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?qn(n,7):An(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}Gt()}catch(t){}}function Ce(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(h(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(h(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(h(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}(r=ce.prototype).setTimeout=function(t){this.O=t},r.ib=function(t){t=t.target;const e=this.L;e&&3==Tn(t)?e.l():this.La(t)},r.La=function(t){try{if(t==this.g)t:{const l=Tn(this.g);var e=this.g.Ea();this.g.aa();if(!(3>l)&&(3!=l||F||this.g&&(this.h.h||this.g.fa()||In(this.g)))){this.I||4!=l||7==e||Gt(),Ee(this);var n=this.g.aa();this.Y=n;e:if(ge(this)){var s=In(this.g);t="";var r=s.length,i=4==Tn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Te(this),be(this);var o="";break e}this.h.i=new c.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,s,r,i,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,Wt(12),Te(this),be(this);break t}qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ie(this,n)}this.P?(me(this,l,o),F&&this.i&&3==l&&(Ut(this.S,this.T,"tick",this.hb),this.T.start())):(qt(this.j,this.m,o,null),Ie(this,o)),4==l&&Te(this),this.i&&!this.I&&(4==l?Bn(this.l,this):(this.i=!1,ve(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Wt(12)):(this.o=0,Wt(13)),Te(this),be(this)}}}catch(t){}},r.hb=function(){if(this.g){var t=Tn(this.g),e=this.g.fa();this.C<e.length&&(Ee(this),me(this,t,e),this.i&&4!=t&&ve(this))}},r.cancel=function(){this.I=!0,Te(this)},r.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Gt(),Wt(17)),Te(this),this.o=2,be(this)):we(this,this.V-t)};var Se=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _e(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _e){this.h=void 0!==e?e:t.h,Ae(this,t.j),this.s=t.s,this.g=t.g,ke(this,t.m),this.l=t.l,e=t.i;var n=new je;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ne(this,n),this.o=t.o}else t&&(n=String(t).match(Se))?(this.h=!!e,Ae(this,n[1]||"",!0),this.s=Re(n[2]||""),this.g=Re(n[3]||"",!0),ke(this,n[4]),this.l=Re(n[5]||"",!0),Ne(this,n[6]||"",!0),this.o=Re(n[7]||"")):(this.h=!!e,this.i=new je(null,this.h))}function De(t){return new _e(t)}function Ae(t,e,n){t.j=n?Re(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ke(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ne(t,e,n){e instanceof je?(t.i=e,function(t,e){e&&!t.j&&(qe(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ke(this,e),$e(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Oe(e,Ue)),t.i=new je(e,t.h))}function xe(t,e,n){t.i.set(e,n)}function Le(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Re(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Oe(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Me),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Me(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}_e.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Oe(e,Fe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Oe(e,Fe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Oe(n,"/"==n.charAt(0)?Ve:Pe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Oe(n,Be)),t.join("")};var Fe=/[#\/\?@]/g,Pe=/[#\?:]/g,Ve=/[#\?]/g,Ue=/[#\?@]/g,Be=/#/g;function je(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qe(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ke(t,e){qe(t),e=ze(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function He(t,e){return qe(t),e=ze(t,e),t.g.has(e)}function $e(t,e,n){Ke(t,e),0<n.length&&(t.i=null,t.g.set(ze(t,e),b(n)),t.h+=n.length)}function ze(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(r=je.prototype).add=function(t,e){qe(this),this.i=null,t=ze(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){qe(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},r.oa=function(){qe(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let t=0;t<r.length;t++)n.push(e[s])}return n},r.W=function(t){qe(this);let e=[];if("string"==typeof t)He(this,t)&&(e=e.concat(this.g.get(ze(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return qe(this),this.i=null,He(this,t=ze(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;""!==o[s]&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Ge(t){this.l=t||Qe,c.PerformanceNavigationTiming?t=0<(t=c.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(c.g&&c.g.Ga&&c.g.Ga()&&c.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Qe=10;function We(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Xe(t){return t.h?1:t.g?t.g.size:0}function Ye(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Je(t,e){t.g?t.g.add(e):t.h=e}function Ze(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function tn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return b(t.i)}function en(){}function nn(){this.g=new en}function sn(t,e,n){const s=n||"";try{Ce(t,(function(t,n){let r=t;l(t)&&(r=Tt(t)),e.push(s+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function rn(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch(t){}}function on(t){this.l=t.ac||null,this.j=t.jb||!1}function an(t,e){wt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=cn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ge.prototype.cancel=function(){if(this.i=tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},en.prototype.stringify=function(t){return c.JSON.stringify(t,void 0)},en.prototype.parse=function(t){return c.JSON.parse(t,void 0)},v(on,te),on.prototype.g=function(){return new an(this.l,this.j)},on.prototype.i=function(t){return function(){return t}}({}),v(an,wt);var cn=0;function un(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function hn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ln(t)}function ln(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(r=an.prototype).open=function(t,e){if(this.readyState!=cn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ln(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||c).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,hn(this)),this.readyState=cn},r.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ln(this)),this.g&&(this.readyState=3,ln(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==c.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;un(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?hn(this):ln(this),3==this.readyState&&un(this)}},r.Va=function(t){this.g&&(this.response=this.responseText=t,hn(this))},r.Ua=function(t){this.g&&(this.response=t,hn(this))},r.ga=function(){this.g&&hn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(an.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var dn=c.JSON.parse;function fn(t){wt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=pn,this.K=this.L=!1}v(fn,wt);var pn="",gn=/^https?$/i,mn=["POST","PUT"];function yn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,vn(t),En(t)}function vn(t){t.D||(t.D=!0,Et(t,"complete"),Et(t,"error"))}function wn(t){if(t.h&&void 0!==a&&(!t.C[1]||4!=Tn(t)||2!=t.aa()))if(t.v&&4==Tn(t))Ot(t.Ha,0,t);else if(Et(t,"readystatechange"),4==Tn(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var r=String(t.H).match(Se)[1]||null;if(!r&&c.self&&c.self.location){var i=c.self.location.protocol;r=i.substr(0,i.length-1)}s=!gn.test(r?r.toLowerCase():"")}n=s}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var o=2<Tn(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",vn(t)}}finally{En(t)}}}function En(t,e){if(t.g){bn(t);const n=t.g,s=t.C[0]?u:null;t.g=null,t.C=null,e||Et(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function bn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(c.clearTimeout(t.A),t.A=null)}function Tn(t){return t.g?t.g.readyState:0}function In(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case pn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Cn(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Sn(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Cn(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):xe(t,e,n))}function _n(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Dn(t){this.Ca=0,this.i=[],this.j=new jt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=_n("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=_n("baseRetryDelayMs",5e3,t),this.bb=_n("retryDelaySeedMs",1e4,t),this.$a=_n("forwardChannelMaxRetries",2,t),this.ta=_n("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ge(t&&t.concurrentRequestLimit),this.Fa=new nn,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function An(t){if(Nn(t),3==t.G){var e=t.U++,n=De(t.F);xe(n,"SID",t.I),xe(n,"RID",e),xe(n,"TYPE","terminate"),Rn(t,n),(e=new ce(t,t.j,e,void 0)).K=2,e.v=Le(De(n)),n=!1,c.navigator&&c.navigator.sendBeacon&&(n=c.navigator.sendBeacon(e.v.toString(),"")),!n&&c.Image&&((new Image).src=e.v,n=!0),n||(e.g=$n(e.l,null),e.g.da(e.v)),e.F=Date.now(),ve(e)}Kn(t)}function kn(t){t.g&&(Pn(t),t.g.cancel(),t.g=null)}function Nn(t){kn(t),t.u&&(c.clearTimeout(t.u),t.u=null),Un(t),t.h.cancel(),t.m&&("number"==typeof t.m&&c.clearTimeout(t.m),t.m=null)}function xn(t){We(t.h)||t.m||(t.m=!0,At(t.Ja,t),t.C=0)}function Ln(t,e){var n;n=e?e.m:t.U++;const s=De(t.F);xe(s,"SID",t.I),xe(s,"RID",n),xe(s,"AID",t.T),Rn(t,s),t.o&&t.s&&Sn(s,t.o,t.s),n=new ce(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=On(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Je(t.h,n),fe(n,s,e)}function Rn(t,e){t.ia&&tt(t.ia,(function(t,n){xe(e,n,t)})),t.l&&Ce({},(function(t,n){xe(e,n,t)}))}function On(t,e,n){n=Math.min(t.i.length,n);var s=t.l?m(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),i=!1;else try{sn(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(i){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function Mn(t){t.g||t.u||(t.Z=1,At(t.Ia,t),t.A=0)}function Fn(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Yt(m(t.Ia,t),jn(t,t.A)),t.A++,!0)}function Pn(t){null!=t.B&&(c.clearTimeout(t.B),t.B=null)}function Vn(t){t.g=new ce(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=De(t.sa);xe(e,"RID","rpc"),xe(e,"SID",t.I),xe(e,"CI",t.L?"0":"1"),xe(e,"AID",t.T),xe(e,"TYPE","xmlhttp"),Rn(t,e),t.o&&t.s&&Sn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Le(De(e)),n.s=null,n.P=!0,pe(n,t)}function Un(t){null!=t.v&&(c.clearTimeout(t.v),t.v=null)}function Bn(t,e){var n=null;if(t.g==e){Un(t),Pn(t),t.g=null;var s=2}else{if(!Ye(t.h,e))return;n=e.D,Ze(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;Et(s=$t(),new Xt(s,n)),xn(t)}else Mn(t);else if(3==(r=e.o)||0==r&&0<t.pa||!(1==s&&function(t,e){return!(Xe(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=Yt(m(t.Ja,t,e),jn(t,t.C)),t.C++,0)))}(t,e)||2==s&&Fn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:qn(t,5);break;case 4:qn(t,10);break;case 3:qn(t,6);break;default:qn(t,2)}}function jn(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function qn(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=m(t.kb,t);n||(n=new _e("//www.google.com/images/cleardot.gif"),c.location&&"http"==c.location.protocol||Ae(n,"https"),Le(n)),function(t,e){const n=new jt;if(c.Image){const s=new Image;s.onload=y(rn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=y(rn,n,s,"TestLoadImage: error",!1,e),s.onabort=y(rn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=y(rn,n,s,"TestLoadImage: timeout",!1,e),c.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else Wt(2);t.G=0,t.l&&t.l.va(e),Kn(t),Nn(t)}function Kn(t){if(t.G=0,t.la=[],t.l){const e=tn(t.h);0==e.length&&0==t.i.length||(T(t.la,e),T(t.la,t.i),t.h.i.length=0,b(t.i),t.i.length=0),t.l.ua()}}function Hn(t,e,n){var s=n instanceof _e?De(n):new _e(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),ke(s,s.m);else{var r=c.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new _e(null,void 0);s&&Ae(i,s),e&&(i.g=e),r&&ke(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&xe(s,n,e),xe(s,"VER",t.ma),Rn(t,s),s}function $n(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new fn(new on({jb:!0})):new fn(t.ra)).Ka(t.H),e}function zn(){}function Gn(){if(O&&!(10<=Number(G)))throw Error("Environmental error: no available transport.")}function Qn(t,e){wt.call(this),this.g=new Dn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!S(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!S(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Yn(this)}function Wn(t){ie.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Xn(){oe.call(this),this.status=1}function Yn(t){this.g=t}(r=fn.prototype).Ka=function(t){this.L=t},r.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():se.g(),this.C=this.u?ee(this.u):ee(se),this.g.onreadystatechange=m(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void yn(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=c.FormData&&t instanceof c.FormData,!(0<=E(mn,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{bn(this),0<this.B&&((this.K=function(t){return O&&$()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.qa,this)):this.A=Ot(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){yn(this,t)}},r.qa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),En(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),En(this,!0)),fn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?wn(this):this.fb())},r.fb=function(){wn(this)},r.aa=function(){try{return 2<Tn(this)?this.g.status:-1}catch(t){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),dn(e)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=Dn.prototype).ma=8,r.G=1,r.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new ce(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=et(i),st(i,this.S)):i=this.S),null!==this.o||this.N||(r.H=i,i=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=On(this,r,e),xe(n=De(this.F),"RID",t),xe(n,"CVER",22),this.D&&xe(n,"X-HTTP-Session-Id",this.D),Rn(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Cn(i)))+"&"+e:this.o&&Sn(n,this.o,i)),Je(this.h,r),this.Ya&&xe(n,"TYPE","init"),this.O?(xe(n,"$req",e),xe(n,"SID","null"),r.Z=!0,fe(r,n,null)):fe(r,n,e),this.G=2}}else 3==this.G&&(t?Ln(this,t):0==this.i.length||We(this.h)||Ln(this))},r.Ia=function(){if(this.u=null,Vn(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Yt(m(this.eb,this),t)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Wt(10),kn(this),Vn(this))},r.cb=function(){null!=this.v&&(this.v=null,kn(this),Fn(this),Wt(19))},r.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Wt(2)):(this.j.info("Failed to ping google.com"),Wt(1))},(r=zn.prototype).xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},Gn.prototype.g=function(t,e){return new Qn(t,e)},v(Qn,wt),Qn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Wt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Hn(t,null,t.V),xn(t)},Qn.prototype.close=function(){An(this.g)},Qn.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Tt(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&xn(e)},Qn.prototype.M=function(){this.g.l=null,delete this.j,An(this.g),delete this.g,Qn.X.M.call(this)},v(Wn,ie),v(Xn,oe),v(Yn,zn),Yn.prototype.xa=function(){Et(this.g,"a")},Yn.prototype.wa=function(t){Et(this.g,new Wn(t))},Yn.prototype.va=function(t){Et(this.g,new Xn)},Yn.prototype.ua=function(){Et(this.g,"b")},Gn.prototype.createWebChannel=Gn.prototype.g,Qn.prototype.send=Qn.prototype.u,Qn.prototype.open=Qn.prototype.m,Qn.prototype.close=Qn.prototype.close,Jt.NO_ERROR=0,Jt.TIMEOUT=8,Jt.HTTP_ERROR=6,Zt.COMPLETE="complete",ne.EventType=re,re.OPEN="a",re.CLOSE="b",re.ERROR="c",re.MESSAGE="d",wt.prototype.listen=wt.prototype.N,fn.prototype.listenOnce=fn.prototype.O,fn.prototype.getLastError=fn.prototype.Oa,fn.prototype.getLastErrorCode=fn.prototype.Ea,fn.prototype.getStatus=fn.prototype.aa,fn.prototype.getResponseJson=fn.prototype.Sa,fn.prototype.getResponseText=fn.prototype.fa,fn.prototype.send=fn.prototype.da,fn.prototype.setWithCredentials=fn.prototype.Ka;var Jn=o.createWebChannelTransport=function(){return new Gn},Zn=o.getStatEventTarget=function(){return $t()},ts=o.ErrorCode=Jt,es=o.EventType=Zt,ns=o.Event=Kt,ss=o.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},rs=o.FetchXmlHttpFactory=on,is=o.WebChannel=ne,os=o.XhrIo=fn})),r("ftYLF");const i=document.querySelector(".modal-footer-backdrop"),o=document.querySelector(".modal-footer"),a=document.querySelector(".footer__link"),c=document.querySelector(".modal-footer__icon-close"),u=document.querySelector(".modal-footer__icon-right"),h=document.querySelector(".modal-footer__icon-left");let l=document.querySelectorAll(".modal-footer__student"),d=0;const f=()=>{l.forEach((function(t){t.classList.remove("modal-footer__student-active")})),l[d].classList.add("modal-footer__student-active")},p=()=>{0==d?(h.classList.add("modal-footer__icon-hidden"),u.classList.remove("modal-footer__icon-hidden")):d>0&&d<l.length-1?(h.classList.remove("modal-footer__icon-hidden"),u.classList.remove("modal-footer__icon-hidden")):u.classList.add("modal-footer__icon-hidden")},g=()=>{d<l.length-1&&d++,f(),p()},m=()=>{d>0&&d--,f(),p()},y=()=>{i.classList.add("is-hidden"),o.classList.add("is-hidden"),setTimeout((()=>{l[d].classList.remove("modal-footer__student-active"),d=0,l[0].classList.add("modal-footer__student-active")}),500)},v=t=>{"Escape"===t.key&&y()};a.addEventListener("click",(()=>{p(),i.classList.remove("is-hidden"),o.classList.remove("is-hidden"),document.addEventListener("keydown",v)})),c.addEventListener("click",(()=>{y(),document.removeEventListener("keydown",v)})),u.addEventListener("click",g),h.addEventListener("click",m);
//# sourceMappingURL=index.3ccbaa82.js.map
