"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9907],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47614:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const i={title:"\u4f7f\u7528 VS Code Docker \u6269\u5c55\u6765\u8c03\u8bd5\u5bb9\u5668\u5e94\u7528\u7a0b\u5e8f"},a=void 0,s={unversionedId:"how-to-guides/vs-code-docker",id:"version-1.10/how-to-guides/vs-code-docker",title:"\u4f7f\u7528 VS Code Docker \u6269\u5c55\u6765\u8c03\u8bd5\u5bb9\u5668\u5e94\u7528\u7a0b\u5e8f",description:"VS Code Docker \u6269\u5c55\u80fd\u8ba9\u4f60\u8f7b\u677e\u5728 VS Code \u4e2d\u6784\u5efa\u3001\u7ba1\u7406\u3001\u8c03\u8bd5\u548c\u90e8\u7f72\u5bb9\u5668\u5316\u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.10/how-to-guides/vs-code-docker.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/vs-code-docker",permalink:"/zh/1.10/how-to-guides/vs-code-docker",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.10/how-to-guides/vs-code-docker.md",tags:[],version:"1.10",frontMatter:{title:"\u4f7f\u7528 VS Code Docker \u6269\u5c55\u6765\u8c03\u8bd5\u5bb9\u5668\u5e94\u7528\u7a0b\u5e8f"},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e NGINX Ingress Controller",permalink:"/zh/1.10/how-to-guides/setup-NGINX-Ingress-Controller"},next:{title:"VS Code Remote Containers",permalink:"/zh/1.10/how-to-guides/vs-code-remote-containers"}},c={},l=[{value:"\u8c03\u8bd5\u5bb9\u5668\u5316\u5e94\u7528\u7a0b\u5e8f\u7684\u6b65\u9aa4",id:"\u8c03\u8bd5\u5bb9\u5668\u5316\u5e94\u7528\u7a0b\u5e8f\u7684\u6b65\u9aa4",level:3}],p={toc:l};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"VS Code Docker \u6269\u5c55\u80fd\u8ba9\u4f60\u8f7b\u677e\u5728 VS Code \u4e2d\u6784\u5efa\u3001\u7ba1\u7406\u3001\u8c03\u8bd5\u548c\u90e8\u7f72\u5bb9\u5668\u5316\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("h3",{id:"\u8c03\u8bd5\u5bb9\u5668\u5316\u5e94\u7528\u7a0b\u5e8f\u7684\u6b65\u9aa4"},"\u8c03\u8bd5\u5bb9\u5668\u5316\u5e94\u7528\u7a0b\u5e8f\u7684\u6b65\u9aa4"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u5e76\u542f\u52a8 Rancher Desktop\u3002\u4ece ",(0,o.kt)("inlineCode",{parentName:"li"},"Kubernetes Settings")," \u83dc\u5355\u4e2d\uff0c\u5c06 ",(0,o.kt)("strong",{parentName:"li"},"Container Runtime")," \u9009\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"dockerd (moby)"),"\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(86028).Z,width:"1155",height:"743"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u5e76\u542f\u52a8 Visual Studio Code \u6216 Visual Studio Code Insiders\u3002\u672c\u6559\u7a0b\u4f7f\u7528 Visual Studio Code\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(43792).Z,width:"1158",height:"741"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u5728\u6269\u5c55\u5e02\u573a\u4e2d\u5b89\u88c5 Docker \u6269\u5c55\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(12150).Z,width:"1261",height:"813"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64 Github \u4ed3\u5e93 (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bwateratmsft/samples"},"https://github.com/bwateratmsft/samples"),") \u4e2d\u63d0\u4f9b\u7684\u793a\u4f8b\u3002\u514b\u9686\u6b64\u4ed3\u5e93\u5e76\u5728 VS Code \u4f1a\u8bdd\u4e2d\u6253\u5f00 ",(0,o.kt)("inlineCode",{parentName:"p"},"expressapp")," \u6587\u4ef6\u5939\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6253\u5f00\u547d\u4ee4\u9762\u677f\uff08Ctrl+Shift+P\u3001F1 \u6216 Cmd+Shift+P\uff09\u5e76\u8fd0\u884c \u201cAdd Docker Files to Workspace\u201d\u3002\u7531\u4e8e\u8fd9\u662f\u4e00\u4e2a Express \u5e94\u7528\u7a0b\u5e8f\uff0c\u56e0\u6b64\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js")," \u4f5c\u4e3a\u5e94\u7528\u7a0b\u5e8f\u5e73\u53f0\uff0c\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"p"},"3000"),"\uff08\u6216\u4efb\u4f55\u5176\u4ed6\u53ef\u7528\u7aef\u53e3\uff09\u4f5c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"port"),"\u3002\u7531\u4e8e\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u8bf7\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Include optional Docker Compose files")," \u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"p"},"No"),"\u3002\u6b64\u6b65\u9aa4\u6dfb\u52a0\u4e86\u8c03\u8bd5\u5e94\u7528\u7a0b\u5e8f\u6240\u9700\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"Launch Configuration"),"\u3002"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(72350).Z,width:"1053",height:"702"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"\u5728\u4ee3\u7801\u4e2d\u63d2\u5165\u65ad\u70b9\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(15051).Z,width:"1059",height:"704"})),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"\u5728\u9876\u90e8\u7684 ",(0,o.kt)("strong",{parentName:"li"},"Debug")," \u7a97\u53e3\u4e2d\uff0c\u5c06\u6d3b\u52a8\u8c03\u8bd5\u914d\u7f6e\u5207\u6362\u4e3a ",(0,o.kt)("strong",{parentName:"li"},"Docker Node.js Launch"),"\u3002\u6309 ",(0,o.kt)("inlineCode",{parentName:"li"},"F5")," \u4ee5 ",(0,o.kt)("inlineCode",{parentName:"li"},"Debug")," \u6a21\u5f0f\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u5bb9\u5668\u3002\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u7684\u767b\u5f55\u9875\u9762\u5c06\u5728\u4f60\u7684\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\uff0c\u800c\u4e14\u4ee3\u7801\u4f1a\u5728\u65ad\u70b9\u5904\u505c\u6b62\u6267\u884c\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u8c03\u8bd5\u5e94\u7528\u7a0b\u5e8f\uff0c\u5c31\u50cf\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u5728\u4f60\u7684\u4e3b\u673a\u4e0a\u4e00\u6837\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(10883).Z,width:"1054",height:"704"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(62851).Z,width:"1054",height:"701"})),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6709\u65f6\u5019\uff0c\u7531\u4e8e\u8c03\u8bd5\u8fdb\u7a0b\u53ef\u80fd\u5c1a\u672a\u542f\u52a8\uff0c\u56e0\u6b64\u5e94\u7528\u7a0b\u5e8f\u53ef\u80fd\u4e0d\u4f1a\u5728\u7b2c\u4e00\u6b21\u8fd0\u884c\u65f6\u5728\u8bbe\u7f6e\u7684\u65ad\u70b9\u5904\u4e2d\u65ad\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u5237\u65b0\u6d4f\u89c8\u5668\u6765\u518d\u6b21\u89e6\u53d1\u6267\u884c\uff0c\u4ece\u800c\u547d\u4e2d\u65ad\u70b9\u3002\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"task.json")," \u6587\u4ef6\u4e2d\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"inspectMode: 'break'")," \u5c5e\u6027\u6765\u907f\u514d\u6b64\u884c\u4e3a\uff0c\u4ece\u800c\u9632\u6b62\u5e94\u7528\u7a0b\u5e8f\u5728\u8fde\u63a5\u8c03\u8bd5\u5668\u4e4b\u524d\u8fd0\u884c\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u67d0\u4e9b\u4e3b\u673a\u4e0a\uff0c\u9632\u706b\u5899\u8bbe\u7f6e\u53ef\u80fd\u4f1a\u963b\u6b62\u8c03\u8bd5\u8fdb\u7a0b\u5728\u4e3b\u673a\u548c\u5bb9\u5668\u8fdb\u7a0b\u4e4b\u95f4\u5efa\u7acb\u8fde\u63a5\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u9632\u706b\u5899\u89c4\u5219\uff0c\u4ee5\u5141\u8bb8\u8fd0\u884c\u5bb9\u5668\u7684 VM \u4e0e\u8fd0\u884c VS Code \u4f1a\u8bdd\u7684\u4e3b\u673a\u8fdb\u884c\u901a\u4fe1\u3002\u5728 Windows \u4e0a\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u7279\u6743 powershell \u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u6dfb\u52a0\u9632\u706b\u5899\u89c4\u5219\uff1a"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"New-NetFirewallRule -Action Allow -Description 'Allow communication from WSL containers' -Direction Inbound -Enabled True -InterfaceAlias 'vEthernet (WSL)' -Name 'WSL Inbound' -DisplayName 'WSL Inbound'\n")))}d.isMDXComponent=!0},86028:function(e,t,n){t.Z=n.p+"assets/images/rd-main-682924ff059ac64a1aa2636e09ce2ef3.png"},72350:function(e,t,n){t.Z=n.p+"assets/images/vscode-docker-add-docker-files-1-e19810f9204feb5e440424de9e3101cc.png"},62851:function(e,t,n){t.Z=n.p+"assets/images/vscode-docker-debug-breakpoint-hit-42fb73fe3c0f223c2d0f06bdb7d555f6.png"},15051:function(e,t,n){t.Z=n.p+"assets/images/vscode-docker-debug-breakpoint-f30564461f6e03aa061fb9904d4c3c91.png"},10883:function(e,t,n){t.Z=n.p+"assets/images/vscode-docker-debug-configuration-c646939163651c68beb853de2f45a4ed.png"},12150:function(e,t,n){t.Z=n.p+"assets/images/vscode-docker-marketplace-0aca928329baea1157f0fa92111e99d0.png"},43792:function(e,t,n){t.Z=n.p+"assets/images/vscode-main-f178361041b0f3168d8041a308fa00b1.png"}}]);