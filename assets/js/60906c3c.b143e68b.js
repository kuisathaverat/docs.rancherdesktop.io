"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1840],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65804:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var a=n(83117),r=(n(67294),n(3905));const o={title:"Transfer Container Images"},i=void 0,l={unversionedId:"how-to-guides/transfer-container-images",id:"version-1.10/how-to-guides/transfer-container-images",title:"Transfer Container Images",description:"Rancher Desktop provides dockerd and containerd as container engine options to manage containers. There are occasions when you might want to transfer the images from one container engine environment to the other. Or you may have migrated to Rancher Desktop from a different container management application and might want to bring the local images from the previous application environment to the Rancher Desktop environment.  This guide provides steps to transfer images using the save and load commands.",source:"@site/versioned_docs/version-1.10/how-to-guides/transfer-container-images.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/transfer-container-images",permalink:"/1.10/how-to-guides/transfer-container-images",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.10/how-to-guides/transfer-container-images.md",tags:[],version:"1.10",frontMatter:{title:"Transfer Container Images"},sidebar:"tutorialSidebar",previous:{title:"Installing and Uninstalling Rancher Desktop Extensions",permalink:"/1.10/how-to-guides/installing-uninstalling-extensions"},next:{title:"Create a Multi-Node Cluster with k3d",permalink:"/1.10/how-to-guides/create-multi-node-cluster"}},s={},m=[{value:"Steps",id:"steps",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=p("Tabs"),d=p("TabItem"),u={toc:m};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/transfer-container-images"})),(0,r.kt)("p",null,"Rancher Desktop provides ",(0,r.kt)("inlineCode",{parentName:"p"},"dockerd")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"containerd")," as container engine options to manage containers. There are occasions when you might want to transfer the images from one container engine environment to the other. Or you may have migrated to Rancher Desktop from a different container management application and might want to bring the local images from the previous application environment to the Rancher Desktop environment.  This guide provides steps to transfer images using the ",(0,r.kt)("inlineCode",{parentName:"p"},"save")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," commands."),(0,r.kt)("h3",{id:"steps"},"Steps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Save image(s) from the source environment to a tar archive.")),(0,r.kt)(c,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(d,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save a single image")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nerdctl save -o local-image.tar image:tag\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save multiple images")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nerdctl save -o local-images.tar image1:tag1 image2:tag2\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save all images in a namespace")),(0,r.kt)("p",null,"Below two commands use ",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," for JSON parsing. The long command performs the below steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"nerdctl -n k8s.io image ls")," sub command gets the list of all images present in the ",(0,r.kt)("inlineCode",{parentName:"li"},"k8s.io")," namespace, hence doesn't include images from any other namespace, ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," for instance."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"jq")," sub command filters and formats the images list from the previous step.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},'select(.Repository!=\\"<none>\\")')," part of the command skips those images with repository having a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"<none>"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},'if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')')," part of the command formats the name of the images to be just the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Repository>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"<Repository>:<Tag>")," depending on whether a image tag has a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"<none>")," or not."))),(0,r.kt)("li",{parentName:"ul"},"Finally the ",(0,r.kt)("inlineCode",{parentName:"li"},"nerdctl -n k8s.io save -o all-local-images-in-namespace.tar")," part of the command saves the filtered and formatted images list from the previous two steps into a tar file. ")),(0,r.kt)(c,{groupId:"shell",mdxType:"Tabs"},(0,r.kt)(d,{value:"Bash",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'nerdctl -n k8s.io save -o all-local-images-in-namespace.tar $(nerdctl -n k8s.io image ls --format \'{{json .}}\' | jq -r \'select(.Repository!="<none>") | if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')\n'))),(0,r.kt)(d,{value:"PowerShell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'nerdctl -n k8s.io save -o all-local-images-in-namespace.tar $(nerdctl -n k8s.io image ls --format \'{{json .}}\' | jq -r \'select(.Repository!=\\"<none>\\") | if (.Tag==\\"<none>\\") then .Repository else (.Repository+\\":\\"+.Tag) end\')\n'))))),(0,r.kt)(d,{value:"docker",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save a single image")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker save -o local-image.tar image:tag\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save multiple images")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker save -o local-images.tar image1:tag1 image2:tag2\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save all local images")),(0,r.kt)("p",null,"Below two commands use ",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," for JSON parsing. The long command performs the below steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"docker image ls")," sub command gets the list of all local images."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"jq")," sub command filters and formats the images list from the previous step.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},'select(.Repository!=\\"<none>\\")')," part of the command skips those images with repository having a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"<none>"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},'if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')')," part of the command formats the name of the images to be just the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Repository>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"<Repository>:<Tag>")," depending on whether a image tag has a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"<none>")," or not."))),(0,r.kt)("li",{parentName:"ul"},"Finally the ",(0,r.kt)("inlineCode",{parentName:"li"},"docker save -o all-local-images-in-namespace.tar")," part of the command saves the filtered and formatted images list from the previous two steps into a tar file. ")),(0,r.kt)(c,{groupId:"shell",mdxType:"Tabs"},(0,r.kt)(d,{value:"Bash",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker save -o all-local-images-in-namespace.tar $(docker image ls --format \'{{json .}}\' | jq -r \'select(.Repository!="<none>") | if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')\n'))),(0,r.kt)(d,{value:"PowerShell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker save -o all-local-images-in-namespace.tar $(docker image ls --format \'{{json .}}\' | jq -r \'select(.Repository!=\\"<none>\\") | if (.Tag==\\"<none>\\") then .Repository else (.Repository+\\":\\"+.Tag) end\')\n')))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Load images from the saved tar archive in the target environment.")),(0,r.kt)(c,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(d,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nerdctl load < local-images.tar\n"))),(0,r.kt)(d,{value:"docker",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker load < local-images.tar\n")))))}g.isMDXComponent=!0}}]);