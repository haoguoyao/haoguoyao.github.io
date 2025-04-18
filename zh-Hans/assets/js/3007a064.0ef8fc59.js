"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[6748],{1533:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var s=t(5640),r=t(4848),i=t(8453);const l={},a="How AI designed differently or Dota2 and StarCraft II",o={authorsImageUrls:[]},d=[{value:"This post will walk you through <strong>how AlphaStar and OpenAI Five handle time</strong> differently.",id:"this-post-will-walk-you-through-how-alphastar-and-openai-five-handle-time-differently",level:2},{value:"AlphaStar: Transformers on a Single Snapshot",id:"alphastar-transformers-on-a-single-snapshot",level:2},{value:"Input:",id:"input",level:3},{value:"Architecture:",id:"architecture",level:3},{value:"OpenAI Five: LSTM Over Time",id:"openai-five-lstm-over-time",level:2},{value:"Input:",id:"input-1",level:3},{value:"Architecture:",id:"architecture-1",level:3},{value:"Why the design differ between AlphaStar and OpenAI Five",id:"why-the-design-differ-between-alphastar-and-openai-five",level:2}];function h(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Go is considered to be the most complex board game. But video games could be more complex that Go.\nAlphaGo beat human at 2016, but Dota2 and Starcraft2 were not solved until 2019."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Go"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"StarCraft II"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Dota 2"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Game Type"})}),(0,r.jsx)(n.td,{children:"Turn-based, 1v1"}),(0,r.jsx)(n.td,{children:"Real-time, 1v1"}),(0,r.jsx)(n.td,{children:"Real-time team game, 5v5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Information"})}),(0,r.jsx)(n.td,{children:"Fully observable"}),(0,r.jsx)(n.td,{children:"Partially observable (fog of war)"}),(0,r.jsx)(n.td,{children:"Partially observable (fog of war)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Action Space"})}),(0,r.jsx)(n.td,{children:"~250 discrete moves"}),(0,r.jsx)(n.td,{children:"Thousands of actions"}),(0,r.jsx)(n.td,{children:"Thousands of actions"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Time Horizon"})}),(0,r.jsx)(n.td,{children:"~150 moves"}),(0,r.jsx)(n.td,{children:"20,000+ ticks per game"}),(0,r.jsx)(n.td,{children:"20,000+ ticks per game"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Temporal Nature"})}),(0,r.jsx)(n.td,{children:"Turn-based"}),(0,r.jsx)(n.td,{children:"Real-time"}),(0,r.jsx)(n.td,{children:"Real-time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Control Complexity"})}),(0,r.jsx)(n.td,{children:"One move at a time"}),(0,r.jsx)(n.td,{children:"Hundreds of units"}),(0,r.jsx)(n.td,{children:"One hero per agent, team synergy"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Collaboration"})}),(0,r.jsx)(n.td,{children:"Single-agent"}),(0,r.jsx)(n.td,{children:"Single-agent"}),(0,r.jsx)(n.td,{children:"Multi-agent coordination"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["In recent years, ",(0,r.jsx)(n.strong,{children:"AlphaStar"})," (by DeepMind) and ",(0,r.jsx)(n.strong,{children:"OpenAI Five"})," (by OpenAI) have stood out as groundbreaking AI systems that defeated top human players in some of the most complex real-time strategy games: ",(0,r.jsx)(n.strong,{children:"StarCraft II"})," and ",(0,r.jsx)(n.strong,{children:"Dota 2"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"this-post-will-walk-you-through-how-alphastar-and-openai-five-handle-time-differently",children:["This post will walk you through ",(0,r.jsx)(n.strong,{children:"how AlphaStar and OpenAI Five handle time"})," differently."]}),"\n",(0,r.jsx)(n.h2,{id:"alphastar-transformers-on-a-single-snapshot",children:"AlphaStar: Transformers on a Single Snapshot"}),"\n",(0,r.jsxs)(n.p,{children:["AlphaStar processes the game ",(0,r.jsx)(n.strong,{children:"frame by frame"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"input",children:"Input:"}),"\n",(0,r.jsxs)(n.p,{children:["At each time step, AlphaStar takes a ",(0,r.jsx)(n.strong,{children:"set of entities"})," (e.g., units, buildings, etc.), where each entity is represented by features like health, position, type, etc. This forms a ",(0,r.jsx)(n.strong,{children:"structured input sequence"})," \u2014 not in time, but in space."]}),"\n",(0,r.jsx)(n.h3,{id:"architecture",children:"Architecture:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.strong,{children:"Transformer encoder"})," processes this unordered list of entities."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Self-attention"})," allows the model to understand relationships between units (e.g., who is attacking whom, who\u2019s in danger)."]}),"\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.strong,{children:"Pointer Network"})," is used for output to select actions targeting specific entities or positions."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["AlphaStar doesn\u2019t model time explicitly \u2014 ",(0,r.jsx)(n.strong,{children:"each frame is processed independently"}),". Temporal understanding must be inferred indirectly through state variables like cooldown timers or health deltas."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"openai-five-lstm-over-time",children:"OpenAI Five: LSTM Over Time"}),"\n",(0,r.jsxs)(n.p,{children:["In contrast, OpenAI Five ",(0,r.jsx)(n.strong,{children:"models a sequence of time steps"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"input-1",children:"Input:"}),"\n",(0,r.jsxs)(n.p,{children:["Every agent (one per hero) observes the environment ",(0,r.jsx)(n.strong,{children:"every 4 frames"}),", resulting in ",(0,r.jsx)(n.strong,{children:"a long sequence of observations"})," \u2014 up to 20,000 steps in a full match."]}),"\n",(0,r.jsx)(n.h3,{id:"architecture-1",children:"Architecture:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.strong,{children:"single-layer LSTM"})," with 1024 hidden units captures the agent\u2019s past observations and actions."]}),"\n",(0,r.jsxs)(n.li,{children:["This allows the agent to ",(0,r.jsx)(n.strong,{children:"remember previous events"}),", such as skill usage, movement patterns, or enemy behavior."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["OpenAI Five relies heavily on explicit memory. It passes and updates the ",(0,r.jsx)(n.code,{children:"hidden_state"})," between steps, allowing the AI to form ",(0,r.jsx)(n.strong,{children:"temporal context"})," and learn long-horizon strategies."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"why-the-design-differ-between-alphastar-and-openai-five",children:"Why the design differ between AlphaStar and OpenAI Five"}),"\n",(0,r.jsx)(n.p,{children:"The two games require different types of intelligence:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"StarCraft II"})," (AlphaStar):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Heavy emphasis on ",(0,r.jsx)(n.strong,{children:"multi-unit spatial micromanagement"}),"."]}),"\n",(0,r.jsx)(n.li,{children:'Needs to understand "who is doing what" in the current frame.'}),"\n",(0,r.jsx)(n.li,{children:"Time can be indirectly inferred from unit states (e.g., cooldowns)."}),"\n",(0,r.jsxs)(n.li,{children:["Transformer excels at modeling ",(0,r.jsx)(n.strong,{children:"relations between entities"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dota 2"})," (OpenAI Five):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Involves ",(0,r.jsx)(n.strong,{children:"long-horizon team strategies"})," and skill combos."]}),"\n",(0,r.jsx)(n.li,{children:"Agents need memory of past actions, enemy sightings, map control."}),"\n",(0,r.jsxs)(n.li,{children:["LSTM is better suited for capturing ",(0,r.jsx)(n.strong,{children:"sequential decision patterns"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5640:e=>{e.exports=JSON.parse('{"permalink":"/zh-Hans/past_works/2024/07/28/starcraftdota","source":"@site/past_works/2024-07-28-starcraftdota.md","title":"How AI designed differently or Dota2 and StarCraft II","description":"Go is considered to be the most complex board game. But video games could be more complex that Go.","date":"2024-07-28T00:00:00.000Z","tags":[],"readingTime":2.665,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"Adam VS SGD+momentum","permalink":"/zh-Hans/past_works/Adam VS SGD+momentum"},"nextItem":{"title":"Mock Interview with customer","permalink":"/zh-Hans/past_works/Mock Interview with customer"}}')},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var s=t(6540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);