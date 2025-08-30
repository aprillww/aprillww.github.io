import{r,j as e}from"./index-CWf-9O5D.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d=(...t)=>t.filter((a,l,o)=>!!a&&a.trim()!==""&&o.indexOf(a)===l).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:c="",children:n,iconNode:s,...x},h)=>r.createElement("svg",{ref:h,...f,width:a,height:a,stroke:t,strokeWidth:o?Number(l)*24/Number(a):l,className:d("lucide",c),...x},[...s.map(([u,b])=>r.createElement(u,b)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(t,a)=>{const l=r.forwardRef(({className:o,...c},n)=>r.createElement(j,{ref:n,iconNode:a,className:d(`lucide-${g(t)}`,o),...c}));return l.displayName=`${t}`,l};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=m("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=m("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),w="/assets/businessenglish01-DWotJhST.jpg",N="/assets/businessenglish02-DjObnf49.jpg",v=[{title:"突破自我，迈向人生巅峰",cover:"/covers/book1.png"},{title:"SML商务英语训练营",cover:w},{title:"21天英语口语开口训练营",cover:N}],y="/assets/qrcode-BoyRJHa9.jpg";function C(){const[t,a]=r.useState(!1),[l,o]=r.useState(!1);r.useEffect(()=>(t||l?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t,l]);const c=s=>{s==="21天英语口语开口训练营"?a(!0):s==="突破自我，迈向人生巅峰"?window.open("https://product.dangdang.com/697870381.html","_blank"):s==="SML商务英语训练营"&&o(!0)},n=()=>{const s=encodeURIComponent("SML商务英语");window.open(`https://s.taobao.com/search?q=${s}`,"_blank")};return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"books",className:"mx-auto mt-12 max-w-6xl px-4 scroll-mt-24",children:[e.jsx("header",{className:"mb-4",children:e.jsx("h2",{className:"text-xl font-bold text-slate-900",children:"链接"})}),e.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:v.map(s=>e.jsxs("article",{className:"card p-4 shadow-soft",children:[e.jsx("div",{className:"aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200",children:e.jsx("img",{src:s.cover,alt:`${s.title} 封面`,loading:"lazy",className:"h-full w-full object-cover"})}),e.jsx("h3",{className:"mt-3 text-base font-semibold text-slate-900",children:s.title}),e.jsx("div",{className:"mt-3",children:e.jsx("button",{onClick:()=>c(s.title),className:"btn btn-ghost",children:"购买"})})]},s.title))})]}),t&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300",children:e.jsxs("div",{className:"relative bg-white rounded-2xl p-6 shadow-2xl max-w-sm w-full mx-4 animate-in zoom-in-95 duration-300",children:[e.jsx("button",{onClick:()=>a(!1),className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors","aria-label":"关闭",children:e.jsx(i,{className:"h-5 w-5 text-gray-500"})}),e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-900 mb-4",children:"扫码购买"}),e.jsx("div",{className:"flex justify-center mb-4",children:e.jsx("img",{src:y,alt:"购买二维码",className:"w-48 h-48 object-contain"})}),e.jsx("p",{className:"text-sm text-gray-600",children:"使用微信扫描上方二维码完成购买"})]})]})}),l&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300",children:e.jsxs("div",{className:"relative bg-white rounded-2xl p-6 shadow-2xl max-w-md w-full mx-4 animate-in zoom-in-95 duration-300",children:[e.jsx("button",{onClick:()=>o(!1),className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors","aria-label":"关闭",children:e.jsx(i,{className:"h-5 w-5 text-gray-500"})}),e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-900 mb-4",children:"淘宝搜索"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("p",{className:"text-base text-gray-700 mb-4",children:"搜索关键词："}),e.jsx("div",{className:"bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4",children:e.jsx("p",{className:"text-xl font-bold",style:{color:"#000000"},children:"SML商务英语"})})]}),e.jsxs("button",{onClick:n,className:"btn btn-primary flex items-center gap-2 mx-auto",children:[e.jsx(p,{className:"h-4 w-4"}),"在淘宝搜索"]}),e.jsx("p",{className:"text-sm text-gray-600 mt-3",children:"点击按钮将在新窗口打开淘宝搜索页面"})]})]})})]})}export{C as B,i as X,m as c};
