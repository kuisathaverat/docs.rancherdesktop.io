"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1854],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(k,l(l({ref:t},i),{},{components:r})):n.createElement(k,l({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),a=r(4334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(3117),a=r(7294),o=r(4334),l=r(2389),u=r(7392),s=r(7094),c=r(2466),i="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:l,defaultValue:d,values:m,groupId:k,className:f}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??h.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,u.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,O]=(0,a.useState)(g),D=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=k){const e=y[k];null!=e&&e!==N&&b.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,r=D.indexOf(t),n=b[r].value;n!==N&&(T(t),O(n),null!=k&&w(k,String(n)))},x=e=>{var t;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=D.indexOf(e.currentTarget)+1;r=D[t]??D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;r=D[t]??D[D.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",i)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},b.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>D.push(e),onKeyDown:x,onClick:E},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,a.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},7619:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=r(3117),a=(r(7294),r(3905)),o=r(5488),l=r(5162);const u={title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4"},s=void 0,c={unversionedId:"how-to-guides/create-multi-node-cluster",id:"how-to-guides/create-multi-node-cluster",title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4",description:"Rancher Desktop \u652f\u6301\u5355\u8282\u70b9\u96c6\u7fa4\u8bbe\u7f6e\uff0c\u8fd9\u6ee1\u8db3\u5927\u591a\u6570\u672c\u5730\u5f00\u53d1\u573a\u666f\u3002\u4f46\u662f\uff0c\u5728\u67d0\u4e9b\u7528\u4f8b\u4e2d\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4\uff0c\u6216\u542f\u52a8\u591a\u4e2a\u96c6\u7fa4\u5e76\u7075\u6d3b\u5730\u5728\u96c6\u7fa4\u4e4b\u95f4\u5207\u6362\u3002\u5c3d\u7ba1 Rancher Desktop \u6ca1\u6709\u5185\u7f6e\u7684\u591a\u8282\u70b9/\u96c6\u7fa4\u529f\u80fd\uff0c\u4f46\u4f60\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528 k3d \u4e0e Rancher Desktop \u6765\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\u3002k3d \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u5305\u88c5\u5668\uff0c\u7528\u4e8e\u5728 Docker \u4e2d\u8fd0\u884c k3s\uff08\u4e00\u4e2a\u6700\u5c0f\u5316\u7684 Kubernetes \u53d1\u884c\u7248\uff0cRancher Desktop \u4e5f\u4f7f\u7528\u5b83\uff09\u3002k3d \u80fd\u8ba9\u4f60\u8f7b\u677e\u5728 Docker \u4e2d\u521b\u5efa\u5355\u8282\u70b9\u548c\u591a\u8282\u70b9 k3s \u96c6\u7fa4\uff08\u4f8b\u5982\u7528\u4e8e Kubernetes \u4e0a\u7684\u672c\u5730\u5f00\u53d1\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/create-multi-node-cluster.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/create-multi-node-cluster",permalink:"/zh/next/how-to-guides/create-multi-node-cluster",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/create-multi-node-cluster.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf",permalink:"/zh/next/how-to-guides/transfer-container-images"},next:{title:"\u8bbe\u7f6e NGINX Ingress Controller",permalink:"/zh/next/how-to-guides/setup-NGINX-Ingress-Controller"}},i={},p=[{value:"\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u7684\u6b65\u9aa4",id:"\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u7684\u6b65\u9aa4",level:3}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rancher Desktop \u652f\u6301",(0,a.kt)("strong",{parentName:"p"},"\u5355\u8282\u70b9\u96c6\u7fa4"),"\u8bbe\u7f6e\uff0c\u8fd9\u6ee1\u8db3\u5927\u591a\u6570\u672c\u5730\u5f00\u53d1\u573a\u666f\u3002\u4f46\u662f\uff0c\u5728\u67d0\u4e9b\u7528\u4f8b\u4e2d\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4\uff0c\u6216\u542f\u52a8\u591a\u4e2a\u96c6\u7fa4\u5e76\u7075\u6d3b\u5730\u5728\u96c6\u7fa4\u4e4b\u95f4\u5207\u6362\u3002\u5c3d\u7ba1 Rancher Desktop \u6ca1\u6709\u5185\u7f6e\u7684\u591a\u8282\u70b9/\u96c6\u7fa4\u529f\u80fd\uff0c\u4f46\u4f60\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://k3d.io"},"k3d")," \u4e0e Rancher Desktop \u6765\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\u3002k3d \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u5305\u88c5\u5668\uff0c\u7528\u4e8e\u5728 Docker \u4e2d\u8fd0\u884c k3s\uff08\u4e00\u4e2a\u6700\u5c0f\u5316\u7684 Kubernetes \u53d1\u884c\u7248\uff0cRancher Desktop \u4e5f\u4f7f\u7528\u5b83\uff09\u3002k3d \u80fd\u8ba9\u4f60\u8f7b\u677e\u5728 Docker \u4e2d\u521b\u5efa\u5355\u8282\u70b9\u548c\u591a\u8282\u70b9 k3s \u96c6\u7fa4\uff08\u4f8b\u5982\u7528\u4e8e Kubernetes \u4e0a\u7684\u672c\u5730\u5f00\u53d1\uff09\u3002"),(0,a.kt)("h3",{id:"\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u7684\u6b65\u9aa4"},"\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u7684\u6b65\u9aa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u786e\u4fdd\u5728 ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes Settings")," \u9875\u9762\u4e2d\u9009\u62e9\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"dockerd(moby)")," \u4f5c\u4e3a\u5bb9\u5668\u8fd0\u884c\u65f6\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5 k3d\u3002"))),(0,a.kt)(o.Z,{groupId:"installation-approach",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"wget",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wget -q -O - https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash\n"))),(0,a.kt)(l.Z,{value:"curl",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash\n")))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"k3d cluster create")," \u547d\u4ee4\u6765\u542f\u52a8\u591a\u8282\u70b9\u96c6\u7fa4\u3002\u4f8b\u5982\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"k3d cluster create two-node-cluster --agents 2\nk3d cluster create three-node-cluster --agents 3\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"k3d \u5c06\u65b0\u521b\u5efa\u7684\u96c6\u7fa4\u8bbe\u7f6e\u4e3a active\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl config use-context")," \u547d\u4ee4\u6765\u5207\u6362\u96c6\u7fa4\u3002\u4f8b\u5982\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl config use-context k3d-two-node-cluster\n")),(0,a.kt)("p",null,"\u8981\u4e86\u89e3\u6709\u5173 ",(0,a.kt)("strong",{parentName:"p"},"k3s")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"k3d")," \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u8fd9\u4e9b\u9879\u76ee\u7684\u6587\u6863\uff08",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/"},"k3s \u6587\u6863")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://k3d.io/"},"k3d \u6587\u6863"),"\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u26a0\ufe0f \u8bf7\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"strong"},"k3d")," \u521b\u5efa\u7684\u96c6\u7fa4\u4e0d\u662f\u901a\u8fc7 Rancher Desktop GUI \u7ba1\u7406\u7684\u3002")))}m.isMDXComponent=!0}}]);