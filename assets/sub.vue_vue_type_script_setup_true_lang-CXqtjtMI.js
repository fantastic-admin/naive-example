
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as K,am as b,an as T,a as p,F as S,o as f,j as m,e as w,u as s,b as h,w as x,C as $,J as y,L as F,Q as g,m as I,ao as A,T as E,ag as L,af as H,ah as N,al as J}from"./index-BrSv2NLT.js";import{_ as j,r as O}from"./item.vue_vue_type_script_setup_true_lang-BS3d2ooN.js";const W=K({name:"SubMenu",__name:"sub",props:{uniqueKey:{},menu:{},level:{default:0}},setup(k){const t=k,c=t.menu.path??JSON.stringify(t.menu),v=b("itemRef"),M=b("subMenuRef"),n=T(O),C=p(()=>n.openedMenus.includes(t.uniqueKey.at(-1))),q=p(()=>n.isMenuPopup?{enter(e){e.offsetHeight>window.innerHeight&&(e.style.height=`${window.innerHeight}px`)},afterEnter:()=>{},beforeLeave:e=>{e.style.maxHeight=`${e.offsetHeight}px`,e.style.overflow="hidden"},leave:e=>{e.style.maxHeight="0"},afterLeave(e){e.style.maxHeight="",e.style.overflow=""}}:{enter(e){requestAnimationFrame(()=>{e.dataset.height=e.offsetHeight.toString(),e.style.maxHeight="0",e.offsetHeight,e.style.maxHeight=`${e.dataset.height}px`,e.style.overflow="hidden"})},afterEnter(e){e.style.maxHeight="",e.style.overflow=""},enterCancelled(e){e.style.maxHeight="",e.style.overflow=""},beforeLeave(e){e.style.maxHeight=`${e.offsetHeight}px`,e.style.overflow="hidden"},leave(e){e.style.maxHeight="0"},afterLeave(e){e.style.maxHeight="",e.style.overflow=""},leaveCancelled(e){e.style.maxHeight="",e.style.overflow=""}}),P=p(()=>n.isMenuPopup?{enterActiveClass:"ease-in-out duration-300",enterFromClass:"opacity-0 translate-x-4",enterToClass:"opacity-100",leaveActiveClass:"ease-in-out duration-300",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"}:{enterActiveClass:"ease-in-out duration-300",enterFromClass:"opacity-0 translate-y-4 scale-95 blur-4",enterToClass:"opacity-100 translate-y-0 scale-100 blur-0",leaveActiveClass:"ease-in-out duration-300",leaveFromClass:"opacity-100 translate-y-0 scale-100 blur-0",leaveToClass:"opacity-0 translate-y-4 scale-95 blur-4"}),r=p(()=>{let e=!0;return t.menu.children?t.menu.children.every(i=>{var a;return((a=i.meta)==null?void 0:a.menu)===!1})&&(e=!1):e=!1,e});function R(){n.isMenuPopup&&r.value||(r.value?n.handleSubMenuClick(c,t.uniqueKey):n.handleMenuItemClick(c))}let o;function _(){n.isMenuPopup&&(n.mouseInMenu=t.uniqueKey,o==null||o(),{stop:o}=H(()=>{if(r.value)n.openMenu(c,t.uniqueKey),J(()=>{var u,d;const e=(u=v.value)==null?void 0:u.ref,i=(d=M.value)==null?void 0:d.$el;if(!e||!i)return;let a=0,l=0;n.props.mode==="vertical"||t.level!==0?(a=e.getBoundingClientRect().top+e.scrollTop,l=e.getBoundingClientRect().left+e.getBoundingClientRect().width,a+i.offsetHeight>window.innerHeight&&(a=window.innerHeight-i.offsetHeight)):(a=e.getBoundingClientRect().top+e.getBoundingClientRect().height,l=e.getBoundingClientRect().left,a+i.offsetHeight>window.innerHeight&&(i.style.height=`${window.innerHeight-a}px`)),l+i.offsetWidth>document.documentElement.clientWidth&&(l=e.getBoundingClientRect().left-e.getBoundingClientRect().width),i.style.top=`${a}px`,i.style.insetInlineStart=`${l}px`});else{const e=t.menu.children?n.subMenus[c].indexPath.at(-1):n.items[c].indexPath.at(-1);n.openMenu(e,n.subMenus[e].indexPath)}},300))}function B(){n.isMenuPopup&&(n.mouseInMenu=[],o==null||o(),{stop:o}=H(()=>{n.mouseInMenu.length===0?n.closeMenu(t.uniqueKey):r.value&&!n.mouseInMenu.includes(t.uniqueKey.at(-1))&&n.closeMenu(t.uniqueKey.at(-1))},300))}return(e,i)=>{const a=S("SubMenu"),l=N;return f(),m(y,null,[w(j,{ref_key:"itemRef",ref:v,"unique-key":e.uniqueKey,item:e.menu,level:e.level,"sub-menu":s(r),expand:s(C),onClick:R,onMouseenter:_,onMouseleave:B},null,8,["unique-key","item","level","sub-menu","expand"]),s(r)?(f(),h(L,{key:0,to:"body",disabled:!s(n).isMenuPopup},[w(E,I(s(P),A(s(q))),{default:x(()=>[s(C)?(f(),h(l,{key:0,ref_key:"subMenuRef",ref:M,scrollbar:!1,mask:s(n).isMenuPopup,class:$(["sub-menu static rounded-lg",{"bg-[var(--g-sub-sidebar-bg)]":s(n).isMenuPopup,"border shadow-xl fixed! z-3000 w-[200px]":s(n).isMenuPopup,"mx-1":s(n).isMenuPopup&&(s(n).props.mode==="vertical"||e.level!==0),"py-1":s(n).isMenuPopup}])},{default:x(()=>[(f(!0),m(y,null,F(e.menu.children,u=>{var d;return f(),m(y,{key:u.path??JSON.stringify(u)},[((d=u.meta)==null?void 0:d.menu)!==!1?(f(),h(a,{key:0,"unique-key":[...e.uniqueKey,u.path??JSON.stringify(u)],menu:u,level:e.level+1},null,8,["unique-key","menu","level"])):g("",!0)],64)}),128))]),_:1},8,["mask","class"])):g("",!0)]),_:1},16)],8,["disabled"])):g("",!0)],64)}}});export{W as _};
