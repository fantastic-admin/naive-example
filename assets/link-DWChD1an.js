import{d as u,p as k,E as w,o as _,k as h,e as t,w as a,c as v,b as n,f as s,t as y,g as I,T as g,_ as B,A as C,O as S,q as V,s as $,U as b}from"./index-Cw7drvOZ.js";import{_ as T}from"./HTooltip.vue_vue_type_script_setup_true_lang-CgadrdEg.js";import{u as N}from"./index-DPzI9Oqr.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";const E=o=>(V("data-v-c6c4c42f"),o=o(),$(),o),H={class:"absolute h-full w-full flex flex-col"},L={class:"flex flex-col items-center"},j=E(()=>n("div",{class:"my-2 text-xl text-dark dark-text-white"}," 是否访问此链接 ",-1)),q={class:"line-clamp-3"},A=u({name:"LinkView",__name:"link",setup(o){const e=k(),{copy:r,copied:p}=N();w(p,c=>{c&&b.success("复制成功",{zIndex:2e3})});function m(){window.open(e.meta.link,"_blank")}return(c,i)=>{const l=B,d=T,f=C,x=S;return _(),h("div",H,[t(g,{name:"slide-right",mode:"out-in",appear:""},{default:a(()=>[(_(),v(x,{key:s(e).meta.link,class:"flex flex-1 flex-col justify-center"},{default:a(()=>[n("div",L,[t(l,{name:"i-icon-park-twotone:planet",size:120,class:"text-ui-primary/80"}),j,n("div",{class:"my-2 max-w-[300px] cursor-pointer text-center text-[14px] text-stone-5",onClick:i[0]||(i[0]=D=>s(e).meta.link&&s(r)(s(e).meta.link))},[t(d,{text:"复制链接"},{default:a(()=>[n("div",q,y(s(e).meta.link),1)]),_:1})]),t(f,{class:"my-4",onClick:m},{default:a(()=>[t(l,{name:"i-ri:external-link-fill"}),I(" 立即访问 ")]),_:1})])]),_:1}))]),_:1})])}}}),U=z(A,[["__scopeId","data-v-c6c4c42f"]]);export{U as default};