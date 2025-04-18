"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[5809],{566:e=>{e.exports=JSON.parse('{"permalink":"/zh-Hans/past_works/Adam VS SGD+momentum","source":"@site/past_works/2025-04-01-CNN.md","title":"Adam VS SGD+momentum","description":"Recently I trained a CNN model on Tiny imagenet dataset.","date":"2025-04-01T00:00:00.000Z","tags":[],"readingTime":0.935,"hasTruncateMarker":false,"authors":[{"name":"Guoyao Hao","title":"AI Engineer, Software Engineer","url":"https://github.com/haoguoyao","page":{"permalink":"/zh-Hans/past_works/authors/guoyao"},"socials":{"github":"https://github.com/haoguoyao"},"imageURL":"https://github.com/haoguoyao.png","key":"guoyao"}],"frontMatter":{"slug":"Adam VS SGD+momentum","title":"Adam VS SGD+momentum","authors":["guoyao"],"date":"2025-04-01T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Website development for local business","permalink":"/zh-Hans/past_works/Website development for local business"},"nextItem":{"title":"How AI designed differently or Dota2 and StarCraft II","permalink":"/zh-Hans/past_works/2024/07/28/starcraftdota"}}')},3138:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/Adam-vs-sgd-e4254eb1dc8b11f4d21994398f0b1404.png"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(6540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}},9767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>m});var a=n(566),r=n(4848),s=n(8453);const i={slug:"Adam VS SGD+momentum",title:"Adam VS SGD+momentum",authors:["guoyao"],date:new Date("2025-04-01T00:00:00.000Z")},o=void 0,d={authorsImageUrls:[void 0]},m=[{value:"Adam is better in training model from scratch.",id:"adam-is-better-in-training-model-from-scratch",level:3},{value:"SGD is better when fine-Tuning Pre-Trained Model",id:"sgd-is-better-when-fine-tuning-pre-trained-model",level:3}];function l(e){const t={h3:"h3",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Recently I trained a CNN model on Tiny imagenet dataset."}),"\n",(0,r.jsxs)(t.p,{children:["As I expected, the Adam optimzer gave me better result when training the model from scratch. However, when fine-tuning, the Adam struggle a lot, on the opposite, SGD+ momentum gave a good result within only a few epochs. I thought Adam is more advanced, but it seems that Adam not always better.\n",(0,r.jsx)(t.img,{alt:"Training Curve",src:n(3138).A+"",width:"1224",height:"632"})]}),"\n",(0,r.jsx)(t.p,{children:"Experiments were done in the Tiny imagenet dataset, and used efficientnetv2 as the model."}),"\n",(0,r.jsx)(t.h3,{id:"adam-is-better-in-training-model-from-scratch",children:"Adam is better in training model from scratch."}),"\n",(0,r.jsx)(t.p,{children:"When you train a model from scratch, the weights are initialized randomly. Gradients can vary wildly across layers, especially early in training."}),"\n",(0,r.jsx)(t.p,{children:"\u2022\tIt adapts the learning rate per parameter, handling sharp curvature or sparse gradients well\n\u2022\tIt warms up faster, especially when gradients are noisy\n\u2022\tIt doesn\u2019t require much hyperparameter tuning out of the box"}),"\n",(0,r.jsx)(t.h3,{id:"sgd-is-better-when-fine-tuning-pre-trained-model",children:"SGD is better when fine-Tuning Pre-Trained Model"}),"\n",(0,r.jsx)(t.p,{children:"In transfer learning or fine-tuning, the situation is different:\n\u2022\tThe network already has good feature representations\n\u2022\tThe gradients are well-formed and less noisy\n\u2022\tThe task usually only requires subtle parameter shifts"})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);