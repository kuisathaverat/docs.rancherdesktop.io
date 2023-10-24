"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1643],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93687:function(e,t,n){var r=n(10412);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=a?"ios":"android",l=a?"macOS":o?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},44388:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(83117),a=(n(67294),n(3905)),o=n(93687);const i={sidebar_label:"Port Forwarding",title:"Port Forwarding"},l=void 0,s={unversionedId:"ui/port-forwarding",id:"ui/port-forwarding",title:"Port Forwarding",description:"How to Forward a Port",source:"@site/docs/ui/port-forwarding.md",sourceDirName:"ui",slug:"/ui/port-forwarding",permalink:"/next/ui/port-forwarding",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/port-forwarding.md",tags:[],version:"current",frontMatter:{sidebar_label:"Port Forwarding",title:"Port Forwarding"},sidebar:"tutorialSidebar",previous:{title:"Containers",permalink:"/next/ui/containers"},next:{title:"Images",permalink:"/next/ui/images"}},p={},u=[{value:"How to Forward a Port",id:"how-to-forward-a-port",level:3},{value:"Admin vs Non-Admin Port Mappings",id:"admin-vs-non-admin-port-mappings",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=c("Tabs"),m=c("TabItem"),f={toc:u};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/port-forwarding"})),(0,a.kt)(d,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,a.kt)(m,{value:"Windows",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/ui-main/Windows_PortForwarding.png",alt:null}))),(0,a.kt)(m,{value:"macOS",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/ui-main/macOS_PortForwarding.png",alt:null}))),(0,a.kt)(m,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/ui-main/Linux_PortForwarding.png",alt:null})))),(0,a.kt)("h3",{id:"how-to-forward-a-port"},"How to Forward a Port"),(0,a.kt)("p",null,"The steps below outline how to forward a port:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Find the service and click ",(0,a.kt)("strong",{parentName:"li"},"Forward"),"."),(0,a.kt)("li",{parentName:"ol"},"Specify a port to use or use the randomly assigned port."),(0,a.kt)("li",{parentName:"ol"},"Click the ","\u2713"," button to confirm your selection."),(0,a.kt)("li",{parentName:"ol"},"Optional: click ",(0,a.kt)("strong",{parentName:"li"},"Cancel")," to remove the port assigned.")),(0,a.kt)("h3",{id:"admin-vs-non-admin-port-mappings"},"Admin vs Non-Admin Port Mappings"),(0,a.kt)("p",null,"Rancher Desktop includes automated port forwarding for versions ",(0,a.kt)("inlineCode",{parentName:"p"},"1.9")," and later. For non-admin port access, port mappings are configured to the localhost and unpriviliged ports > 1024. Priviliged port mappings can also be configured by users with admin permissions for ports <= 1024."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rancherdesktop.io/getting-started/installation/#traefik-port-binding-access"},"Traefik Port Binding Access")," to configure ports at the operating system level.")))}g.isMDXComponent=!0}}]);