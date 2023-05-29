import{p as e,k as t,w as l,g as n,h as a,C as o,n as s,o as u,m as i,s as r,F as c,z as d,x as v,t as f,E as p,G as m,H as g,e as h,j as y,I as b,J as x,b as _,K as k,A as w,q as M,L as $,M as C,N,y as E,r as j,B as S}from"./vendor.d874c1fc.js";const L=(e,{decimal:t=0}={})=>t>0?Number(e.toFixed(t)):Math.round(e),T=(e,{onmousedown:t,onmousemove:l,onmouseup:n}={})=>{let a=e.getBoundingClientRect();const o={x:0,y:0},s=e=>{let t=e.pageX-a.x,l=e.pageY-a.y;t<0&&(t=0),t>a.width&&(t=a.width),l<0&&(l=0),l>a.height&&(l=a.height),o.x=L(t/a.width,{decimal:2}),o.y=L(l/a.height,{decimal:2})},u=e=>{s(e),l&&l(o,e)},i=e=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",i),n&&n(o,e)},r=l=>{a=e.getBoundingClientRect(),s(l),document.addEventListener("mousemove",u),document.addEventListener("mouseup",i),t&&t(o,l)};return e.addEventListener("mousedown",r),{destroy(){e.removeEventListener("mousedown",r)}}},I=(e,t,l)=>{let n=Math.round(e).toString(16),a=Math.round(t).toString(16),o=Math.round(l).toString(16);return 1===n.length&&(n="0"+n),1===a.length&&(a="0"+a),1===o.length&&(o="0"+o),"#"+n+a+o},A=(e,t,l,n=1)=>{const a=I(e,t,l);let o=Math.round(255*n).toString(16);return 1===o.length&&(o="0"+o),a+o},B=(e,t,l)=>{e/=255,t/=255,l/=255;const n=Math.min(e,t,l),a=Math.max(e,t,l),o=a-n;let s=0,u=0;if(0===o)s=u=0;else{u=o/a;const n=((a-e)/6+o/2)/o,i=((a-t)/6+o/2)/o,r=((a-l)/6+o/2)/o;e===a?s=r-i:t===a?s=1/3+n-r:l===a&&(s=2/3+i-n),s<0?s+=1:s>1&&(s-=1)}return[360*s,100*u,100*a]};const O=(e,t,l)=>{const[n,a,o]=function(e,t,l){e=e/360*6,t/=100,l/=100;const n=Math.floor(e),a=e-n,o=l*(1-t),s=l*(1-a*t),u=l*(1-(1-a)*t),i=n%6,r=[l,s,o,o,u,l][i],c=[u,l,l,s,o,o][i],d=[o,o,u,l,l,s][i];return[Math.round(255*r),Math.round(255*c),Math.round(255*d)]}(e,t,l);return I(n,a,o)},z=e=>{let t=0,l=0,n=0;return 4==(e=e.slice(0,7)).length?(t=Number("0x"+e[1]+e[1]),l=Number("0x"+e[2]+e[2]),n=Number("0x"+e[3]+e[3])):7==e.length&&(t=Number("0x"+e[1]+e[2]),l=Number("0x"+e[3]+e[4]),n=Number("0x"+e[5]+e[6])),[t,l,n]},D=e=>{const t=z(e),l=Number("0x"+e[7]+e[8]);return[...t,Number((l/255).toFixed(2))]},P=e=>{const[t,l,n,a]=D(e);return((e,t,l,n=1)=>[...B(e,t,l),n])(t,l,n,a)},G=e=>e.startsWith("#")?"纯色":e.startsWith("linear-gradient")?"渐变":"图案",q=(e,t)=>{const l=[];return t.forEach((e=>{l.push(`${e.color} ${100*e.offset}%`)})),`linear-gradient(${e}deg, ${l.join(",")})`};function F(e){const t=function(e,t=!0){const l=document.createElement("div");return l.id="color-pipette-tooltip-container",l.innerHTML=e,l.style=`\n    position: fixed;\n    left: 50%;\n    top: 9%;\n    z-index: 10002;\n    display: ${t?"flex":"none"};\n    align-items: center;\n    background-color: rgba(0,0,0,0.4);\n    padding: 6px 12px;\n    border-radius: 4px;\n    color: #fff;\n    font-size: 18px;\n    pointer-events: none;\n  `,l}(e);document.body.appendChild(t),setTimeout((()=>{var e;return null==(e=null==t?void 0:t.parentNode)?void 0:e.removeChild(t)}),2e3)}e("data-v-4ec49efa");const H={class:"my-tabs"},K={class:"my-tabs__header p-0.5 mb-3 rounded bg-gray-100 cursor-pointers"},R={class:"my-tabs__header-shell relative flex justify-between"},U=["onClick"],W={class:"my-tabs__content"};t();const V={name:"Tabs"};const J=Object.assign(V,{props:{value:{type:String,required:!0}},emits:["update:value","change"],setup:function(e,{expose:t,emit:h}){const y=e;l((()=>y.value),(()=>{w()}));const b=n([]),x=a({width:0,left:0});let _=0;o((()=>{_=100/b.value.length,x.width=`${_}%`,w()}));let k=null;async function w(e=-1){var t,l,n,a;e<0&&(e=b.value.findIndex((e=>e.props.label===y.value))),x.left=_*e+"%";try{await s(),null==(l=null==(t=null==k?void 0:k.exposed)?void 0:t.changeActive)||l.call(t,!1),k=b.value[e],null==(a=null==(n=k.exposed)?void 0:n.changeActive)||a.call(n,!0)}catch(o){}}return t({tabs:b}),(t,l)=>(u(),i("div",H,[r("div",K,[r("div",R,[(u(!0),i(c,null,d(b.value,((t,l)=>(u(),i("div",{key:t.props.label,class:v(["my-tab__title relative flex-auto py-1 text-center",{"my-active":t.props.label===e.value}]),onClick:e=>function(e,t){h("update:value",e.props.label),w(t)}(t,l)},f(t.props.label),11,U)))),128)),r("div",{class:"my-tab__slider",style:p(m(x))},null,4)])]),r("div",W,[g(t.$slots,"default",{},void 0,!0)])]))}});J.__scopeId="data-v-4ec49efa";var X=h({setup(){}});const Y={t:"1685345224620",class:"sd-xggj",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8489",width:"20",height:"20"},Q=[r("path",{d:"M716.288 140.501333a42.666667 42.666667 0 0 1 60.373333 0l90.496 90.496a42.666667 42.666667 0 0 1 0 60.330667l-120.661333 120.704L595.626667 261.12l120.661333-120.661333zM520.192 185.770667l301.696 301.653333-60.330667 60.373333-301.653333-301.696 60.288-60.330666z","p-id":"8490"},null,-1),r("path",{d:"M580.565333 366.762667l-60.373333-60.330667-362.026667 362.026667V853.333333l181.034667-3.84 362.026667-362.026666-60.330667-60.373334-331.861333 331.904-60.373334-60.373333 331.904-331.861333z","p-id":"8491"},null,-1)];X.render=function(e,t,l,n,a,o){return u(),i("svg",Y,Q)};const Z={name:"TabPanel"};const ee=Object.assign(Z,{props:{label:{type:String,required:!0}},setup:function(e,{expose:t}){const l=b();l.parent.exposed.tabs.value.push(l);const a=n(!1),o=y((()=>({display:a.value?"block":"none"})));return t({changeActive:function(e){a.value=e}}),(e,t)=>(u(),i("div",{class:"tab-panel",style:p(m(o))},[g(e.$slots,"default")],4))}});function te(e,t,l){var n=(l||{}).atBegin;return function(e,t,l){var n,a=l||{},o=a.noTrailing,s=void 0!==o&&o,u=a.noLeading,i=void 0!==u&&u,r=a.debounceMode,c=void 0===r?void 0:r,d=!1,v=0;function f(){n&&clearTimeout(n)}function p(){for(var l=arguments.length,a=new Array(l),o=0;o<l;o++)a[o]=arguments[o];var u=this,r=Date.now()-v;function p(){v=Date.now(),t.apply(u,a)}function m(){n=void 0}d||(i||!c||n||p(),f(),void 0===c&&r>e?i?(v=Date.now(),s||(n=setTimeout(c?m:p,e))):p():!0!==s&&(n=setTimeout(c?m:p,void 0===c?e-r:e)))}return p.cancel=function(e){var t=(e||{}).upcomingOnly,l=void 0!==t&&t;f(),d=!l},p}(e,t,{debounceMode:!1!==(void 0!==n&&n)})}e("data-v-3398d38e");const le={class:"color-picker"},ne={class:"title"},ae={key:1,class:"cp__gradient flex-center"},oe={class:"cp__gradient-bar w-48",style:{height:"16px"}},se=["data-sort","onMousedown","onKeyup"],ue=r("div",{class:"cpp__color-saturation"},null,-1),ie=r("div",{class:"cpp__color-value"},null,-1),re={class:"cps__track"},ce={class:"cps__track"},de={class:"cp__box"},ve=["onClick"];t();const fe={name:"ColorPicker",inheritAttrs:!1};const pe=Object.assign(fe,{props:{value:{type:String,default:"#ffffffff"},modes:{type:Array,default:()=>["纯色","渐变"]},defaultColor:{type:String,default:"#ffffffff"},defaultGradient:{type:String,default:"linear-gradient(90deg, #fffae0ff 0%, #ffd1f1ff 100%)"},defaultImage:{type:String,default:"https://st0.dancf.com/csc/157/material-2d-textures/0/20190714-174653-ed3c.jpg"}},emits:["update:value","native-pick"],setup:function(e,{emit:t}){const s=e,g=n(G(s.value)),h=n(90),b=n([]),j=a({h:0,s:0,l:0,a:0}),S=n("#f00"),L=n("#000"),I=n(0);let H=n({});const K="EyeDropper"in window,R=n(),U=n(),W=n(),V=n(),Y=n(),Q=n(),Z=n();let fe=null,pe=null,me=null,ge=null,he=null,ye=!0,be=null;const xe=n([]),_e={color:s.defaultColor,gradient:s.defaultGradient,image:s.defaultImage},ke=y((()=>s.modes.includes("渐变"))),we=y((()=>{const e=z(L.value).join(",");return{background:`linear-gradient(to right, rgba(${e}, 0) 0%, rgb(${e}) 100%)`}}));l(H,(e=>{Le(e.color)})),l(L,(e=>{!function(e){if(/^#(?:[0-9a-f]{3}){1,2}$/i.test(e)){const t=z(e),[l,n,a]=B(...t);j.h=l,j.s=n,j.l=a,W.value.style.left=`${j.s}%`,W.value.style.top=100-j.l+"%",V.value.style.left=j.h/360*100+"%",L.value=e}}(e)})),l((()=>s.value),(e=>{const t=G(e);t!==g.value&&(g.value=t),je(t),Ce(e),Me(e)}));const Me=te(300,(async e=>{const t=xe.value,l=t.indexOf(e);-1!==l&&xe.value.splice(l,1),t.length>=4&&xe.value.splice(t.length-1,1);const n=[e];xe.value=n.concat(t)})),$e=l(j,(function(e){const t=((e,t,l,n=1)=>`${O(e,t,l)}${0===n?"00":Math.round(255*n).toString(16)}`)(...Object.values(e));let l;"纯色"===g.value?l=t:"渐变"===g.value&&(H.value.color=t,l=q(h.value,b.value));Se(t),Ne(l)}),{deep:!0});function Ce(e){"纯色"===g.value?_e.color=e:"渐变"===g.value?_e.gradient=e:"图案"===g.value&&(_e.image=e)}function Ne(e){e!==s.value&&(Ce(e),t("update:value",e))}async function Ee(e){if(e===g.value)return;let t;g.value=e,"纯色"===e?t=_e.color:"渐变"===e?t=_e.gradient:"图案"===e&&(t=_e.image),Ne(t)}function je(e){"纯色"===e?Le(s.value):"渐变"===e&&(0===b.value.length?s.value.match(/[^,]+/g).forEach(((e,t)=>{if(0===t)return void(h.value=Number(e.match(/\d+/)[0]));let[l,n]=e.trim().split(" ");l.startsWith("#")||(l=A(l)),n=n.match(/\d+/)[0]/100,b.value.push({color:l,offset:n}),H.value=b.value[0]})):Le(H.value.color))}function Se(e){var t;S.value=`hsl(${j.h}, 100%, 50%)`,L.value=e.slice(0,7),I.value=Math.round(100*(null!=(t=j.a)?t:1))}function Le(e){if(ye){const t=P(e);j.h=t[0],j.s=t[1],j.l=t[2],j.a=t[3],Se(e);let l=j.s;const n=Math.round(100-j.l);W.value.style.left=`${l}%`,W.value.style.top=`${n}%`,l=j.h/360,V.value.style.left=100*l+"%",Q.value.style.left=100*j.a+"%"}}function Te(e){if(!["Backspace","Delete"].includes(e.key))return;if(2===b.value.length)return;const t=b.value.indexOf(H.value);b.value.splice(t,1),H.value=b.value[0]}function Ie(){ye=!1,be&&clearTimeout(be),be=setTimeout((()=>{ye=!0}),16)}async function Ae(e){let l="";if(e&&e.target.value){const t=e.target.value;l=t+(7===t.length?"ff":"")}else{const e=new window.EyeDropper;F("按Esc可退出");try{const t=await e.open();l=t.sRGBHex+"ff"}catch(n){console.log("用户取消了取色")}}t("update:value",l),t("native-pick",l)}return o((async function(){W.value.style.left=`${j.s}%`,W.value.style.top=100-j.l+"%",V.value.style.left=j.h/360*100+"%",Q.value.style.left=100*j.a+"%",ke.value&&(fe=T(R.value,{onmousedown:function(e){if(he)return;const t=b.value.findIndex((t=>t.offset>=e.x)),l=b.value[t-1],n=D(l.color),a=b.value[t],o=D(a.color),s=[];for(let r=0;r<3;r+=1)s.push(n[r]+(o[r]-n[r])*e.x);const u=a.offset-e.x-(e.x-l.offset)>0?n[3]:o[3],i=A(...s,u);H.value={color:i,offset:e.x},b.value.splice(t,0,H.value)},onmousemove:function(e){if(!he)return;H.value.offset=e.x,b.value.sort(((e,t)=>e.offset-t.offset));Ne(q(h.value,b.value))},onmouseup:function(){he=!1}}));function e(e){Ie();const t=100*e.x,l=100*e.y;j.s=Math.round(t),j.l=Math.round(100-l),W.value.style.left=`${t}%`,W.value.style.top=`${l}%`}function t(e){Ie(),j.h=360*e.x,V.value.style.left=100*e.x+"%"}function l(e){Ie(),j.a=e.x,Q.value.style.left=100*e.x+"%"}pe=T(U.value,{onmousemove:e,onmouseup:e}),me=T(Y.value,{onmousemove:t,onmouseup:t}),ge=T(Z.value,{onmousemove:l,onmouseup:l}),je(g.value),Ce(s.value)})),x((()=>{null==pe||pe.destroy(),null==me||me.destroy(),null==ge||ge.destroy(),$e(),fe&&fe.destroy()})),(t,l)=>(u(),i("div",le,[r("div",ne,f(g.value),1),e.modes.length>1?(u(),_(J,{key:0,value:g.value,"onUpdate:value":Ee},{default:k((()=>[(u(!0),i(c,null,d(e.modes,(e=>(u(),_(ee,{key:e,label:e},null,8,["label"])))),128))])),_:1},8,["value"])):w("",!0),m(ke)?M((u(),i("div",ae,[r("div",oe,[r("div",{ref:R,class:"cpgb__track h-full",style:p([{width:"100%"},{background:e.value}])},[(u(!0),i(c,null,d(b.value,((e,t)=>(u(),i("div",{key:t,class:v(["cpgb__pointer",{"cpgb__pointer--active":e===m(H)}]),"data-sort":t,style:p({left:100*e.offset+"%",background:e.color}),tabindex:"-1",onMousedown:t=>{return l=e,he=!0,void(H.value=l);var l},onKeyup:E(Te,["stop"])},null,46,se)))),128))],4)])],512)),[[$,"渐变"===g.value]]):w("",!0),r("div",{ref:U,class:"cp__palette",style:p({background:S.value})},[ue,ie,r("div",{ref:W,class:"cpp__pointer"},null,512)],4),r("div",{ref:Y,class:"cp__slider cp__slider-hux"},[r("div",re,[r("div",{ref:V,class:"cpst__pointer"},null,512)])],512),r("div",{ref:Z,class:"cp__slider cp__slider-alpha"},[r("div",{class:"cpsa__background",style:p(m(we))},null,4),r("div",ce,[r("div",{ref:Q,class:"cpst__pointer"},null,512)])],512),r("div",de,[r("div",{class:"item",onClick:Ae},[K?(u(),_(X,{key:0})):(u(),i("input",{key:1,class:"native",type:"color",onInput:Ae},null,32))]),M(r("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>N(value)?value.value=e:null),class:"input"},null,512),[[C,e.value]]),(u(!0),i(c,null,d(xe.value,(e=>(u(),i("div",{key:e,class:"item",style:p({background:e}),onClick:t=>Ae({target:{value:e}})},null,12,ve)))),128))])]))}});pe.__scopeId="data-v-3398d38e";var me=h({components:{ColorPicker:pe},setup:()=>({innerColor:n("#ffffffff"),colorChange:e=>{console.log("来自吸取颜色："+e)}})});const ge={style:{width:"220px"}};me.render=function(e,t,l,n,a,o){const s=j("color-picker");return u(),i("div",ge,[S(s,{value:e.innerColor,"onUpdate:value":t[0]||(t[0]=t=>e.innerColor=t),modes:["纯色"],onNativePick:e.colorChange},null,8,["value","onNativePick"])])};export{me as default};