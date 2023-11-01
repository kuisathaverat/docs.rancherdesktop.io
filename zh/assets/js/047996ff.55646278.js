"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6801],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93687:function(e,t,n){var a=n(10412);const i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=i?"ios":"android",l=i?"macOS":r?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},60782:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(83117),i=(n(67294),n(3905)),r=n(93687);const o={sidebar_label:"Containers",title:"Containers"},l=void 0,s={unversionedId:"ui/containers",id:"ui/containers",title:"Containers",description:"ContainersExample",source:"@site/docs/ui/containers.md",sourceDirName:"ui",slug:"/ui/containers",permalink:"/zh/next/ui/containers",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/containers.md",tags:[],version:"current",frontMatter:{sidebar_label:"Containers",title:"Containers"},sidebar:"tutorialSidebar",previous:{title:"\u901a\u7528",permalink:"/zh/next/ui/general"},next:{title:"\u7aef\u53e3\u8f6c\u53d1",permalink:"/zh/next/ui/port-forwarding"}},c={},u=[{value:"Container Management",id:"container-management",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=p("Tabs"),m=p("TabItem"),f={toc:u};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/ui/containers"})),(0,i.kt)(d,{groupId:"os",defaultValue:r.Z.defaultOs,mdxType:"Tabs"},(0,i.kt)(m,{value:"Windows",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/Windows_Containers.png",alt:"Containers_Example"}))),(0,i.kt)(m,{value:"macOS",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/macOS_Containers.png",alt:"Containers_Example"}))),(0,i.kt)(m,{value:"Linux",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.11/ui-main/Linux_Containers.png",alt:"Containers_Example"})))),(0,i.kt)("admonition",{title:"warning",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This is an ",(0,i.kt)("strong",{parentName:"p"},"experimental")," feature.")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Containers")," tab offers quick access to manage containers and view key information such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"State"),":\nThe container state(s) will be listed in this field, and by default running containers are presented first."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),":\nThe container name(s) will be listed in this field and can be sorted."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Image"),":\nAll image names will be listed in this field and can be sorted."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Port(s)"),":\nPorts are listed in this field and can be clicked for quick access to a localhost port."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Started"),":\nContainer start-up times will be listed in this field and can be sorted.")),(0,i.kt)("p",null,"The listed information can be sorted in ascending or descending order. Containers can also be filtered with input text in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter")," field located at the top right. Bulk selection is available for managing multiple instances at once."),(0,i.kt)("h3",{id:"container-management"},"Container Management"),(0,i.kt)("p",null,"The buttons located at the top of the page will be highlighted when a container is selected and depend on the container's state."),(0,i.kt)("p",null,"Bulk selection and actions can also be performed on instances with the same state."),(0,i.kt)("p",null,"The following actions are available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Stop"),":\nYou can terminate container instances using the ",(0,i.kt)("inlineCode",{parentName:"li"},"Stop")," button."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Start"),":\nYou can initiate container instances using the ",(0,i.kt)("inlineCode",{parentName:"li"},"Start")," button."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Delete"),":\nYou can delete container instances from your system entirely by using the ",(0,i.kt)("inlineCode",{parentName:"li"},"Delete")," button."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u22ee"),":\nThis button is located on the right side of the tab view. You can start, stop, or delete container instances depending on their  state using the ",(0,i.kt)("inlineCode",{parentName:"li"},"\u22ee")," button.")))}b.isMDXComponent=!0}}]);