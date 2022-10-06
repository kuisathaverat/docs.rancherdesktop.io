"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[948],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),o=n(4334),a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),o=n(7294),a=n(4334),i=n(2389),l=n(7392),c=n(7094),s=n(2466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:k,className:f}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,l.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,c.U)(),[T,x]=(0,o.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=k){const e=v[k];null!=e&&e!==T&&b.some((t=>t.value===e))&&x(e)}const I=e=>{const t=e.currentTarget,n=N.indexOf(t),r=b[n].value;r!==T&&(C(t),x(r),null!=k&&w(k,String(r)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},f)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:O,onFocus:I,onClick:I},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,o.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,i.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},2694:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(3117),o=(n(7294),n(3905)),a=n(5488),i=n(5162);const l={title:"Working with Containers"},c=void 0,s={unversionedId:"tutorials/working-with-containers",id:"tutorials/working-with-containers",title:"Working with Containers",description:"nerdctl is a Docker-compatible CLI for containerd. The primary goal of nerdctl is to facilitate experimenting with cutting-edge features of containerd that are not present in Docker.",source:"@site/docs/tutorials/working-with-containers.md",sourceDirName:"tutorials",slug:"/tutorials/working-with-containers",permalink:"/tutorials/working-with-containers",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/tutorials/working-with-containers.md",tags:[],version:"current",frontMatter:{title:"Working with Containers"},sidebar:"tutorialSidebar",previous:{title:"Working with Images",permalink:"/tutorials/working-with-images"},next:{title:"Hello World Example",permalink:"/how-to-guides/hello-world-example"}},u={},p=[{value:"Running Containers",id:"running-containers",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Exposing a Port",id:"exposing-a-port",level:2},{value:"Targeting a Kubernetes Namespace",id:"targeting-a-kubernetes-namespace",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nerdctl")," is a Docker-compatible CLI for containerd. The primary goal of ",(0,o.kt)("inlineCode",{parentName:"p"},"nerdctl")," is to facilitate experimenting with cutting-edge features of containerd that are not present in Docker."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/moby/moby"},"Moby")," is an open-source project that was created by Docker to enable and accelerate software containerization. Components include container build tools, a container registry, orchestration tools, and a runtime, and more. The Docker CLI uses the Moby runtime. "),(0,o.kt)("h2",{id:"running-containers"},"Running Containers"),(0,o.kt)("p",null,"To run a container with the default ",(0,o.kt)("inlineCode",{parentName:"p"},"bridge")," CNI network (10.4.0.0/24):"),(0,o.kt)(a.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nerdctl run -it --rm alpine\n"))),(0,o.kt)(i.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -it --rm alpine\n")))),(0,o.kt)("p",null,"To build an image using BuildKit:"),(0,o.kt)(a.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nerdctl build -t foo /some-dockerfile-directory\nnerdctl run -it --rm foo\n"))),(0,o.kt)(i.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build -t foo /some-dockerfile-directory\ndocker run -it --rm foo\n")))),(0,o.kt)("p",null,"To build and send output to a local directory using BuiltKit:"),(0,o.kt)(a.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nerdctl build -o type=local,dest=. /some-dockerfile-directory\n"))),(0,o.kt)(i.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build -o type=local,dest=. /some-dockerfile-directory\n")))),(0,o.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,o.kt)("p",null,"Docker Compose is a tool for defining and running multi-container Docker applications. "),(0,o.kt)(a.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"nerdctl-compose")," CLI is designed to be compatible with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nerdctl compose up -d\nnerdctl compose down\n"))),(0,o.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"compose")," command in the Docker CLI supports most of the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose")," commands and flags. It is expected to be a drop-in replacement for ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker compose up -d\ndocker compose down\n")))),(0,o.kt)("h2",{id:"exposing-a-port"},"Exposing a Port"),(0,o.kt)("p",null,"To expose port 8000 for a container:"),(0,o.kt)(a.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nerdctl run -d -p 8000:80 nginx\n"))),(0,o.kt)(i.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d -p 8000:80 nginx\n")))),(0,o.kt)("p",null,"You can then access the container via the browser here: ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000/"},"http://localhost:8000/"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: By default the exposed ports are accessible on all network interfaces on macOS and Linux. However, on Windows, the exposed ports are currently only accessible through the localhost network interface (see issue ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1180"},"#1180"),").  As a workaround, you can ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1180#issuecomment-1005514200"},"configure a ",(0,o.kt)("inlineCode",{parentName:"a"},"portproxy")," on the windows host")," to expose the port to additional network interfaces.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=8080 connectaddress=localhost\n")),(0,o.kt)("h2",{id:"targeting-a-kubernetes-namespace"},"Targeting a Kubernetes Namespace"),(0,o.kt)("p",null,"You may also target a Kubernetes namespace with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--namespace")," parameter with ",(0,o.kt)("inlineCode",{parentName:"p"},"containerd"),". Please note that ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," doesn't use namespaces."),(0,o.kt)(a.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nerdctl --namespace k8s.io build -t demo:latest /code/demos/rd/anvil-app\nnerdctl --namespace k8s.io ps\n")))))}m.isMDXComponent=!0}}]);