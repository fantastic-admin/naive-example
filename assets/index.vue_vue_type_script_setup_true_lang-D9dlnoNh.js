
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as l,x as _,o as d,b as i,w as o,r as n,s as m,y as g,u as a,aA as B,a as b,e as u,m as h,f as C,aB as $,aC as w,aD as D,aE as v,k as T,t as P}from"./index-BrSv2NLT.js";const z=l({__name:"Tooltip",props:{defaultOpen:{type:Boolean},open:{type:Boolean},delayDuration:{},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean}},emits:["update:open"],setup(t,{emit:e}){const c=_(t,e);return(f,p)=>(d(),i(a(B),m(g(a(c))),{default:o(()=>[n(f.$slots,"default")]),_:3},16))}}),k=l({inheritAttrs:!1,__name:"TooltipContent",props:{forceMount:{type:Boolean},ariaLabel:{},asChild:{type:Boolean},as:{},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},class:{}},emits:["escapeKeyDown","pointerDownOutside"],setup(t,{emit:e}){const s=t,r=e,c=b(()=>{const{class:p,...y}=s;return y}),f=_(c,r);return(p,y)=>(d(),i(a(w),null,{default:o(()=>[u(a($),h({...a(f),...p.$attrs},{class:a(C)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s.class)}),{default:o(()=>[n(p.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),x=l({__name:"TooltipProvider",props:{delayDuration:{},skipDelayDuration:{},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean}},setup(t){const e=t;return(s,r)=>(d(),i(a(D),m(g(e)),{default:o(()=>[n(s.$slots,"default")]),_:3},16))}}),K=l({__name:"TooltipTrigger",props:{asChild:{type:Boolean},as:{}},setup(t){const e=t;return(s,r)=>(d(),i(a(v),m(g(e)),{default:o(()=>[n(s.$slots,"default")]),_:3},16))}}),O=l({name:"FaTooltip",__name:"index",props:{text:{default:""},delay:{default:300},side:{},align:{},disabled:{type:Boolean}},setup(t){return(e,s)=>(d(),i(a(x),{"delay-duration":e.delay,disabled:e.disabled},{default:o(()=>[u(a(z),null,{default:o(()=>[u(a(K),{"as-child":""},{default:o(()=>[n(e.$slots,"default")]),_:3}),u(a(k),{side:e.side,align:e.align,class:"z-10000 text-xs"},{default:o(()=>[n(e.$slots,"content",{},()=>[T("p",null,P(e.text),1)])]),_:3},8,["side","align"])]),_:3})]),_:3},8,["delay-duration","disabled"]))}});export{O as _};
