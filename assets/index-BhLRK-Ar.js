
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as k,x as A,o as d,b as g,w as _,r as $,s as W,y as H,u as o,a$ as X,a as w,e as I,b0 as tt,m as O,f as D,b1 as et,b2 as at,b3 as st,b4 as nt,b5 as ot,H as lt,b6 as it,aN as ct,j as y,J as M,Q as T,L as V,A as q,t as z,E as J,M as Q,N as U,b7 as Y,a6 as F,P as rt,b8 as dt,am as N,I as ut,V as ft,Y as K,Z as pt,a0 as E,k as S,ai as bt,ah as _t,C as mt,b9 as ht,q as gt,v as vt,R as xt}from"./index-BrSv2NLT.js";import{_ as It}from"./index.vue_vue_type_script_setup_true_lang-D9dlnoNh.js";import{u as G}from"./index-CgbGZC7L.js";import{u as yt}from"./useMainPage-PmmgAYXd.js";import"./index.vue_vue_type_script_setup_true_lang-geMEt0VY.js";import"./eventBus-CGRXT3Tn.js";import"./index-BaCaTsUg.js";import"./vee-validate-zod-Di_VQk-y.js";const kt=k({__name:"ContextMenu",props:{dir:{},modal:{type:Boolean}},emits:["update:open"],setup(p,{emit:c}){const i=A(p,c);return(u,r)=>(d(),g(o(X),W(H(o(i))),{default:_(()=>[$(u.$slots,"default")]),_:3},16))}}),Ct=k({__name:"ContextMenuContent",props:{forceMount:{type:Boolean},loop:{type:Boolean},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},sticky:{},hideWhenDetached:{type:Boolean},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(p,{emit:c}){const t=p,a=c,i=w(()=>{const{class:r,...f}=t;return f}),u=A(i,a);return(r,f)=>(d(),g(o(et),null,{default:_(()=>[I(o(tt),O(o(u),{class:o(D)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t.class)}),{default:_(()=>[$(r.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),St=k({__name:"ContextMenuGroup",props:{asChild:{type:Boolean},as:{}},setup(p){const c=p;return(t,a)=>(d(),g(o(at),W(H(c)),{default:_(()=>[$(t.$slots,"default")]),_:3},16))}}),$t=k({__name:"ContextMenuItem",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{},inset:{type:Boolean}},emits:["select"],setup(p,{emit:c}){const t=p,a=c,i=w(()=>{const{class:r,...f}=t;return f}),u=A(i,a);return(r,f)=>(d(),g(o(st),O(o(u),{class:o(D)("relative flex cursor-default select-none items-center rounded-sm gap-2 px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r.inset&&"pl-8",t.class)}),{default:_(()=>[$(r.$slots,"default")]),_:3},16,["class"]))}}),Pt=k({__name:"ContextMenuLabel",props:{asChild:{type:Boolean},as:{},class:{},inset:{type:Boolean}},setup(p){const c=p,t=w(()=>{const{class:a,...i}=c;return i});return(a,i)=>(d(),g(o(nt),O(t.value,{class:o(D)("px-2 py-1.5 text-sm font-semibold text-foreground",a.inset&&"pl-8",c.class)}),{default:_(()=>[$(a.$slots,"default")]),_:3},16,["class"]))}}),j=k({__name:"ContextMenuSeparator",props:{asChild:{type:Boolean},as:{},class:{}},setup(p){const c=p,t=w(()=>{const{class:a,...i}=c;return i});return(a,i)=>(d(),g(o(ot),O(t.value,{class:o(D)("-mx-1 my-1 h-px bg-border",c.class)}),null,16,["class"]))}}),Bt=k({__name:"ContextMenuTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(p){const t=lt(p);return(a,i)=>(d(),g(o(it),W(H(o(t))),{default:_(()=>[$(a.$slots,"default")]),_:3},16))}}),wt={key:0,class:"size-4 flex-center"},Rt=k({name:"FaContextMenu",__name:"index",props:{items:{}},setup(p){const c=p,t=ct(),a=w(()=>c.items.map(r=>r.filter(f=>!f.hide)).filter(r=>r.length)),i=w(()=>a.value.some(r=>r.some(f=>f.icon)));function u(r){var f;(f=r.handle)==null||f.call(r)}return(r,f)=>{const v=J;return d(),g(o(kt),{modal:!1},{default:_(()=>[I(o(Bt),{"as-child":""},{default:_(()=>[$(r.$slots,"default")]),_:3}),I(o(Ct),{class:"z-1050"},{default:_(()=>[t.label?(d(),y(M,{key:0},[I(o(Pt),null,{default:_(()=>[$(r.$slots,"label")]),_:3}),I(o(j))],64)):T("",!0),(d(!0),y(M,null,V(o(a),(C,P)=>(d(),y(M,{key:P},[I(o(St),null,{default:_(()=>[(d(!0),y(M,null,V(C,(x,R)=>(d(),g(o($t),{key:R,disabled:x.disabled,class:"cursor-pointer",onClick:L=>u(x)},{default:_(()=>[o(i)?(d(),y("div",wt,[x.icon?(d(),g(v,{key:0,name:x.icon,size:16},null,8,["name"])):T("",!0)])):T("",!0),q(" "+z(x.label),1)]),_:2},1032,["disabled","onClick"]))),128))]),_:2},1024),P!==o(a).length-1?(d(),g(o(j),{key:0})):T("",!0)],64))),128))]),_:3})]),_:3})}}});function Tt(){const p=Q(),c=U(),t=Y();function a(){return p.fullPath}function i(e){const s=t.list.findIndex(l=>l.tabId===a());t.$patch({leaveIndex:s}),c.push(e)}function u(e){const s=a();c.go(e),t.remove(s)}function r(e){const s=a();c.replace(e).then(()=>{t.remove(s)})}function f(e){const s=a();c.push(e).then(()=>{t.remove(s)})}function v(e=a()){if(R(e,!1)){const s=a();if(e===s){const l=t.list.findIndex(m=>m.tabId===e);l<t.list.length-1?f(t.list[l+1].fullPath):f(t.list[l-1].fullPath)}else t.remove(e)}}function C(e=a()){const s=a();if(e!==s){const l=t.list.findIndex(m=>m.tabId===e);c.push(t.list[l].fullPath)}t.removeOtherSide(e)}function P(e=a()){const s=a();if(e!==s){const l=t.list.findIndex(n=>n.tabId===e);t.list.findIndex(n=>n.tabId===s)<l&&c.push(t.list[l].fullPath)}t.removeLeftSide(e)}function x(e=a()){const s=a();if(e!==s){const l=t.list.findIndex(n=>n.tabId===e);t.list.findIndex(n=>n.tabId===s)>l&&c.push(t.list[l].fullPath)}t.removeRightSide(e)}function R(e=a(),s=!0){let l=!0;return t.list.findIndex(n=>n.tabId===e)<0?(l=!1,!s&&F.warning("关闭的标签页不存在",{position:"top-center"})):t.list.length<=1&&(l=!1,!s&&F.warning("当前只有一个标签页，不可关闭",{position:"top-center"})),l}function L(e=a()){return t.list.some(s=>s.tabId!==e)}function b(e=a()){var l;let s=!0;if(e===((l=t.list[0])==null?void 0:l.tabId))s=!1;else{const m=t.list.findIndex(n=>n.tabId===e);s=t.list.some((n,B)=>B<m&&n.tabId!==e)}return s}function h(e=a()){var l;let s=!0;if(e===((l=t.list.at(-1))==null?void 0:l.tabId))s=!1;else{const m=t.list.findIndex(n=>n.tabId===e);s=t.list.some((n,B)=>B>=m&&n.tabId!==e)}return s}return{getId:a,open:i,go:u,replace:r,close:f,closeById:v,closeOtherSide:C,closeLeftSide:P,closeRightSide:x,checkClose:R,checkCloseOtherSide:L,checkCloseLeftSide:b,checkCloseRightSide:h}}const Mt={class:"tabbar"},zt={class:"tabbar-container"},Lt=["data-index","onClick"],Ft={class:"size-full"},Ot={class:"tab-content"},Dt=["onClick"],Nt={class:"text-sm"},Vt={class:"text-accent-foreground/50"},At=k({name:"Tabbar",__name:"index",setup(p){const c=Q(),t=U(),a=rt(),i=Y(),u=Tt(),r=yt(),f=dt({reactive:!0}),v=w(()=>u.getId()),C=N("tabsRef"),P=N("tabContainerRef"),x=N("tabRef");ut(()=>c,b=>{a.settings.tabbar.enable&&i.add(b).then(()=>{var e,s;const h=i.list.findIndex(l=>l.tabId===v.value);h!==-1&&(x.value&&((s=C.value)==null||s.scrollTo(x.value[h].offsetLeft-((e=C.value.ref)==null?void 0:e.$el.clientWidth)*.4)),R())})},{immediate:!0,deep:!0});function R(){var b,h,e;if(((b=P.value)==null?void 0:b.$el.clientWidth)>(((e=(h=C.value)==null?void 0:h.ref)==null?void 0:e.$el.clientWidth)??0)&&localStorage.getItem("tabbarScrollTip")===void 0){localStorage.setItem("tabbarScrollTip","");const s=F.info("温馨提示",{description:"标签栏数量超过展示区域范围，可以将鼠标移到标签栏上，通过鼠标滚轮滑动浏览",position:"top-center",duration:1/0,action:{label:"知道了",onClick:()=>F.dismiss(s)}})}}function L(b){return[[{label:"重新加载",icon:"i-ri:refresh-line",disabled:b.tabId!==v.value,handle:()=>r.reload()},{label:"关闭标签页",icon:"i-ri:close-line",disabled:i.list.length<=1,handle:()=>u.closeById(b.tabId)}],[{label:"关闭其他标签页",disabled:!u.checkCloseOtherSide(b.tabId),handle:()=>u.closeOtherSide(b.tabId)},{label:"关闭左侧标签页",disabled:!u.checkCloseLeftSide(b.tabId),handle:()=>u.closeLeftSide(b.tabId)},{label:"关闭右侧标签页",disabled:!u.checkCloseRightSide(b.tabId),handle:()=>u.closeRightSide(b.tabId)}]]}return ft(()=>{K("alt+left,alt+right,alt+w,alt+1,alt+2,alt+3,alt+4,alt+5,alt+6,alt+7,alt+8,alt+9,alt+0",(b,h)=>{var e,s;if(a.settings.tabbar.enable&&a.settings.tabbar.enableHotkeys)switch(b.preventDefault(),h.key){case"alt+left":if(i.list[0].tabId!==v.value){const l=i.list.findIndex(m=>m.tabId===v.value);t.push(i.list[l-1].fullPath)}break;case"alt+right":if(((e=i.list.at(-1))==null?void 0:e.tabId)!==v.value){const l=i.list.findIndex(m=>m.tabId===v.value);t.push(i.list[l+1].fullPath)}break;case"alt+w":u.closeById(v.value);break;case"alt+1":case"alt+2":case"alt+3":case"alt+4":case"alt+5":case"alt+6":case"alt+7":case"alt+8":case"alt+9":{const l=Number(h.key.split("+")[1]);(s=i.list[l-1])!=null&&s.fullPath&&t.push(i.list[l-1].fullPath);break}case"alt+0":t.push(i.list[i.list.length-1].fullPath);break}})}),pt(()=>{K.unbind("alt+left,alt+right,alt+w,alt+1,alt+2,alt+3,alt+4,alt+5,alt+6,alt+7,alt+8,alt+9,alt+0")}),(b,h)=>{const e=J,s=It,l=Rt,m=_t;return d(),y("div",Mt,[(d(),g(E(o(G)("tabbar-start")))),S("div",zt,[I(m,{ref_key:"tabsRef",ref:C,horizontal:"",scrollbar:!1,mask:"","gradient-color":"var(--g-tabbar-bg)",class:"tabs"},{default:_(()=>[I(bt,{ref_key:"tabContainerRef",ref:P,name:"tabbar",tag:"div",class:"tab-container"},{default:_(()=>[(d(!0),y(M,null,V(o(i).list,(n,B)=>(d(),y("div",{key:n.tabId,ref_for:!0,ref_key:"tabRef",ref:x,"data-index":B,class:mt(["tab",{actived:n.tabId===o(v)}]),onClick:Z=>o(t).push(n.fullPath)},[I(l,{items:L(n)},{default:_(()=>[S("div",Ft,[h[0]||(h[0]=S("div",{class:"tab-dividers"},null,-1)),h[1]||(h[1]=S("div",{class:"tab-background"},null,-1)),I(s,{delay:1e3,side:"bottom"},{content:_(()=>[S("div",Nt,z(typeof(n==null?void 0:n.title)=="function"?n.title():n.title),1),S("div",Vt,z(n.fullPath),1)]),default:_(()=>[S("div",Ot,[(d(),y("div",{key:n.tabId,class:"title"},[o(a).settings.tabbar.enableIcon&&n.icon?(d(),g(e,{key:0,name:n.icon,class:"icon"},null,8,["name"])):T("",!0),q(" "+z(typeof(n==null?void 0:n.title)=="function"?n.title():n.title),1)])),o(i).list.length>1?(d(),y("div",{key:0,class:"action-icon",onClick:ht(Z=>o(u).closeById(n.tabId),["stop"])},[I(e,{name:"i-ri:close-fill"})],8,Dt)):T("",!0),gt(S("div",{class:"hotkey-number"},z(B+1),513),[[vt,o(f).alt&&B<9]])])]),_:2},1024)])]),_:2},1032,["items"])],10,Lt))),128))]),_:1},512)]),_:1},512)]),(d(),g(E(o(G)("tabbar-end"))))])}}}),Qt=xt(At,[["__scopeId","data-v-83933ca3"]]);export{Qt as default};
