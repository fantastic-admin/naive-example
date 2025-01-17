
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as H,M as J,P as W,a as K,u as D,o as S,b as P,w as A,e as Q,j as z,L as X,J as Y,ai as Z,Q as ee,A as te,t as ne,R as re}from"./index-BrSv2NLT.js";import se from"./index-DnRflNOX.js";import{_ as oe}from"./item.vue_vue_type_script_setup_true_lang-KWfaOFpr.js";var f={},L;function ae(){if(L)return f;L=1,Object.defineProperty(f,"__esModule",{value:!0}),f.TokenData=void 0,f.parse=b,f.compile=M,f.match=O,f.pathToRegexp=I,f.stringify=q;const E="/",d=n=>n,l=/^[$_\p{ID_Start}]$/u,x=/^[$\u200c\u200d\p{ID_Continue}]$/u,w="https://git.new/pathToRegexpError",m={"{":"{","}":"}","(":"(",")":")","[":"[","]":"]","+":"+","?":"?","!":"!"};function h(n){return n.replace(/[{}()\[\]+?!:*]/g,"\\$&")}function u(n){return n.replace(/[.+*?^${}()[\]|/\\]/g,"\\$&")}function*v(n){const t=[...n];let e=0;function o(){let r="";if(l.test(t[++e]))for(r+=t[e];x.test(t[++e]);)r+=t[e];else if(t[e]==='"'){let s=e;for(;e<t.length;){if(t[++e]==='"'){e++,s=0;break}t[e]==="\\"?r+=t[++e]:r+=t[e]}if(s)throw new TypeError(`Unterminated quote at ${s}: ${w}`)}if(!r)throw new TypeError(`Missing parameter name at ${e}: ${w}`);return r}for(;e<t.length;){const r=t[e],s=m[r];if(s)yield{type:s,index:e++,value:r};else if(r==="\\")yield{type:"ESCAPED",index:e++,value:t[e++]};else if(r===":"){const i=o();yield{type:"PARAM",index:e,value:i}}else if(r==="*"){const i=o();yield{type:"WILDCARD",index:e,value:i}}else yield{type:"CHAR",index:e,value:t[e++]}}return{type:"END",index:e,value:""}}class U{constructor(t){this.tokens=t}peek(){if(!this._peek){const t=this.tokens.next();this._peek=t.value}return this._peek}tryConsume(t){const e=this.peek();if(e.type===t)return this._peek=void 0,e.value}consume(t){const e=this.tryConsume(t);if(e!==void 0)return e;const{type:o,index:r}=this.peek();throw new TypeError(`Unexpected ${o} at ${r}, expected ${t}: ${w}`)}text(){let t="",e;for(;e=this.tryConsume("CHAR")||this.tryConsume("ESCAPED");)t+=e;return t}}class T{constructor(t){this.tokens=t}}f.TokenData=T;function b(n,t={}){const{encodePath:e=d}=t,o=new U(v(n));function r(i){const a=[];for(;;){const c=o.text();c&&a.push({type:"text",value:e(c)});const p=o.tryConsume("PARAM");if(p){a.push({type:"param",name:p});continue}const _=o.tryConsume("WILDCARD");if(_){a.push({type:"wildcard",name:_});continue}if(o.tryConsume("{")){a.push({type:"group",tokens:r("}")});continue}return o.consume(i),a}}const s=r("END");return new T(s)}function M(n,t={}){const{encode:e=encodeURIComponent,delimiter:o=E}=t,r=n instanceof T?n:b(n,t),s=N(r.tokens,o,e);return function(a={}){const[c,...p]=s(a);if(p.length)throw new TypeError(`Missing parameters: ${p.join(", ")}`);return c}}function N(n,t,e){const o=n.map(r=>j(r,t,e));return r=>{const s=[""];for(const i of o){const[a,...c]=i(r);s[0]+=a,s.push(...c)}return s}}function j(n,t,e){if(n.type==="text")return()=>[n.value];if(n.type==="group"){const r=N(n.tokens,t,e);return s=>{const[i,...a]=r(s);return a.length?[""]:[i]}}const o=e||d;return n.type==="wildcard"&&e!==!1?r=>{const s=r[n.name];if(s==null)return["",n.name];if(!Array.isArray(s)||s.length===0)throw new TypeError(`Expected "${n.name}" to be a non-empty array`);return[s.map((i,a)=>{if(typeof i!="string")throw new TypeError(`Expected "${n.name}/${a}" to be a string`);return o(i)}).join(t)]}:r=>{const s=r[n.name];if(s==null)return["",n.name];if(typeof s!="string")throw new TypeError(`Expected "${n.name}" to be a string`);return[o(s)]}}function O(n,t={}){const{decode:e=decodeURIComponent,delimiter:o=E}=t,{regexp:r,keys:s}=I(n,t),i=s.map(a=>e===!1?d:a.type==="param"?e:c=>c.split(o).map(e));return function(c){const p=r.exec(c);if(!p)return!1;const _=p[0],y=Object.create(null);for(let g=1;g<p.length;g++){if(p[g]===void 0)continue;const $=s[g-1],R=i[g-1];y[$.name]=R(p[g])}return{path:_,params:y}}}function I(n,t={}){const{delimiter:e=E,end:o=!0,sensitive:r=!1,trailing:s=!0}=t,i=[],a=[],c=r?"":"i",_=(Array.isArray(n)?n:[n]).map($=>$ instanceof T?$:b($,t));for(const{tokens:$}of _)for(const R of C($,0,[])){const G=k(R,e,i);a.push(G)}let y=`^(?:${a.join("|")})`;return s&&(y+=`(?:${u(e)}$)?`),y+=o?"$":`(?=${u(e)}|$)`,{regexp:new RegExp(y,c),keys:i}}function*C(n,t,e){if(t===n.length)return yield e;const o=n[t];if(o.type==="group"){const r=e.slice();for(const s of C(o.tokens,0,r))yield*C(n,t+1,s)}else e.push(o);yield*C(n,t+1,e)}function k(n,t,e){let o="",r="",s=!0;for(let i=0;i<n.length;i++){const a=n[i];if(a.type==="text"){o+=u(a.value),r+=a.value,s||(s=a.value.includes(t));continue}if(a.type==="param"||a.type==="wildcard"){if(!s&&!r)throw new TypeError(`Missing text after "${a.name}": ${w}`);a.type==="param"?o+=`(${B(t,s?"":r)}+)`:o+="([\\s\\S]+)",e.push(a),r="",s=!1;continue}}return o}function B(n,t){return t.length<2?n.length<2?`[^${u(n+t)}]`:`(?:(?!${u(n)})[^${u(t)}])`:n.length<2?`(?:(?!${u(t)})[^${u(n)}])`:`(?:(?!${u(t)}|${u(n)})[\\s\\S])`}function q(n){return n.tokens.map(function t(e,o,r){if(e.type==="text")return h(e.value);if(e.type==="group")return`{${e.tokens.map(t).join("")}}`;const i=V(e.name)&&F(r[o+1])?e.name:JSON.stringify(e.name);if(e.type==="param")return`:${i}`;if(e.type==="wildcard")return`*${i}`;throw new TypeError(`Unexpected token: ${e}`)}).join("")}function V(n){const[t,...e]=n;return l.test(t)?e.every(o=>x.test(o)):!1}function F(n){return(n==null?void 0:n.type)!=="text"?!0:!x.test(n.value[0])}return f}var ie=ae();const ue=H({__name:"index",setup(E){const d=J(),l=W(),x=K(()=>{const m=[];return l.settings.home.enable&&m.push({path:l.settings.home.fullPath,title:l.settings.home.title}),d.meta.breadcrumbNeste&&d.meta.breadcrumbNeste.forEach(h=>{h.hide===!1&&m.push({path:h.path,title:h.title})}),m});function w(m){return ie.compile(m)(d.params)}return(m,h)=>D(l).mode==="pc"&&D(l).settings.app.routeBaseOn!=="filesystem"?(S(),P(se,{key:0,class:"breadcrumb whitespace-nowrap px-2"},{default:A(()=>[Q(Z,{name:"breadcrumb"},{default:A(()=>[(S(!0),z(Y,null,X(D(x),(u,v)=>(S(),P(oe,{key:`${v}_${u.path}_${u.title}`,to:v<D(x).length-1&&u.path!==""?w(u.path):""},{default:A(()=>[te(ne(u.title),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})):ee("",!0)}}),le=re(ue,[["__scopeId","data-v-810d212a"]]);export{le as default};
