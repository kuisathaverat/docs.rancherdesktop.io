"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[79602],{69605:function(e,n,i){i.r(n),i.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return a},metadata:function(){return r},toc:function(){return c}});var s=i(85893),t=i(11151);const a={title:"Working with WebAssembly"},o=void 0,r={id:"tutorials/working-with-webassembly",title:"Working with WebAssembly",description:"Rancher Desktop 1.13.0 added experimental support for running WebAssembly (Wasm) applications. This feature needs to be enabled in  Preferences > Container Engine > General.",source:"@site/docs/tutorials/working-with-webassembly.md",sourceDirName:"tutorials",slug:"/tutorials/working-with-webassembly",permalink:"/next/tutorials/working-with-webassembly",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/tutorials/working-with-webassembly.md",tags:[],version:"current",frontMatter:{title:"Working with WebAssembly"},sidebar:"tutorialSidebar",previous:{title:"Working with Containers",permalink:"/next/tutorials/working-with-containers"},next:{title:"Using Persistent Storage",permalink:"/next/tutorials/using-persistent-storage"}},l={},c=[{value:"Managing containerd Wasm shims",id:"managing-containerd-wasm-shims",level:2},{value:"Developing Wasm Applications with Rancher Desktop",id:"developing-wasm-applications-with-rancher-desktop",level:2},{value:"Creating a Simple App and Compiling It Into a Wasm Module",id:"creating-a-simple-app-and-compiling-it-into-a-wasm-module",level:3},{value:"Package the Wasm Module as an OCI Container Image and Push to a Container Registry",id:"package-the-wasm-module-as-an-oci-container-image-and-push-to-a-container-registry",level:3},{value:"Running the Wasm Container",id:"running-the-wasm-container",level:3},{value:"Running Wasm Apps with Kubernetes",id:"running-wasm-apps-with-kubernetes",level:3},{value:"Ingress IP on Windows",id:"ingress-ip-on-windows",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Head:i,TabItem:a,Tabs:o}=n;return i||p("Head",!0),a||p("TabItem",!0),o||p("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/tutorials/working-with-webassembly"})}),"\n",(0,s.jsxs)(n.p,{children:["Rancher Desktop 1.13.0 added experimental support for running WebAssembly (Wasm) applications. This feature needs to be enabled in  ",(0,s.jsx)(n.a,{href:"/next/ui/preferences/container-engine/general",children:"Preferences > Container Engine > General"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"warning",type:"caution",children:(0,s.jsxs)(n.p,{children:["Note that when using the ",(0,s.jsx)(n.code,{children:"moby"})," container engine, enabling the Wasm feature switches to a different image store, so previously built or downloaded images will not be available and must be built or downloaded again. The images are not lost; Rancher Desktop will switch back to the old image store when Wasm is disabled again."]})}),"\n",(0,s.jsx)(n.h2,{id:"managing-containerd-wasm-shims",children:"Managing containerd Wasm shims"}),"\n",(0,s.jsx)(n.p,{children:'Running WebAssembly applications on a container runtime requires a specific containerd "shim" for each Wasm runtime/framework used.'}),"\n",(0,s.jsxs)(n.p,{children:["Rancher Desktop 1.13 comes bundled with the ",(0,s.jsx)(n.code,{children:"containerd-spin-shim-v2"})," shim preinstalled. Future releases are expected to download additional shims automatically when the feature is enabled."]}),"\n",(0,s.jsxs)(n.p,{children:["For now additional shims can be installed by the user into the ",(0,s.jsx)(n.code,{children:"containerd-shims"})," cache directory on the host. The location is"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Linux: ",(0,s.jsx)(n.code,{children:"~/.local/share/rancher-desktop/containerd-shims"})]}),"\n",(0,s.jsxs)(n.li,{children:["macOS: ",(0,s.jsx)(n.code,{children:"~/Library/Application Support/rancher-desktop/containerd-shims"})]}),"\n",(0,s.jsxs)(n.li,{children:["Windows: ",(0,s.jsx)(n.code,{children:"%LOCALAPPDATA%\\rancher-desktop\\containerd-shims"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Any shim installed there will automatically be copied into the VM and configured for the container engine when Rancher Desktop is started (installing a newer version of the ",(0,s.jsx)(n.code,{children:"spin"})," shim will override the bundled version)."]}),"\n",(0,s.jsx)(n.h2,{id:"developing-wasm-applications-with-rancher-desktop",children:"Developing Wasm Applications with Rancher Desktop"}),"\n",(0,s.jsx)(n.p,{children:"Developing Wasm applications on your local machine on top of Rancher Desktop typically involves below steps:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create an application in your programming language of choice. You can compile code written in many languages, such as C, C++, Rust, Go, and others, into Wasm modules"}),"\n",(0,s.jsx)(n.li,{children:"Compile the code into a Wasm module"}),"\n",(0,s.jsx)(n.li,{children:"Package the Wasm module as a OCI container image and push to a container registry"}),"\n",(0,s.jsx)(n.li,{children:"Run the Wasm container and/or"}),"\n",(0,s.jsx)(n.li,{children:"Deploy the Wasm container into Kubernetes"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-simple-app-and-compiling-it-into-a-wasm-module",children:"Creating a Simple App and Compiling It Into a Wasm Module"}),"\n",(0,s.jsxs)(n.p,{children:["You can use the Spin framework from Fermyon to quickly bootstrap a simple Wasm app. Install Spin on your machine following the instructions on the ",(0,s.jsx)(n.a,{href:"https://developer.fermyon.com/spin/v2/install",children:"Installing Spin"})," page."]}),"\n",(0,s.jsxs)(n.p,{children:["Once you have successfully installed Spin, create a new app via the command ",(0,s.jsx)(n.code,{children:"spin new"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Select the language you would like to use for development."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$spin new\nPick a template to start your application with:\n  http-js (HTTP request handler using Javascript)\n> http-ts (HTTP request handler using Typescript)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Give a name to your app"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$spin new\nPick a template to start your application with: http-ts (HTTP request handler using Typescript)\nEnter a name for your new application: rd-spin-hello-world\n"})}),"\n",(0,s.jsx)(n.p,{children:"Provide an optional description and leave the API route path to default"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$spin new\nPick a template to start your application with: http-ts (HTTP request handler using Typescript)\nEnter a name for your new application: rd-spin-hello-world\nDescription []: This is a simple typescript app that will be compiled into a Wasm module and run as a Wasm container\nHTTP path:  /...\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once the command ran successfully, you should see a directory created with the boilerplate code for the Spin app."}),"\n",(0,s.jsxs)(n.p,{children:["Update the ",(0,s.jsx)(n.code,{children:"index.ts"})," file to return a different message than the default."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'import { HandleRequest, HttpRequest, HttpResponse } from "@fermyon/spin-sdk"\n\nexport const handleRequest: HandleRequest = async function (request: HttpRequest): Promise<HttpResponse> {\n  return {\n    status: 200,\n    headers: { "content-type": "text/plain" },\n    body: "Hello from Wasm container!"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Change to the app directory and run the ",(0,s.jsx)(n.code,{children:"spin build"})," command to compile the app code into a Wasm module."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$spin build\nBuilding component rd-spin-hello-world with `npm run build`\n\n$ rd-spin-hello-world@1.0.0 build\n$ npx webpack --mode=production && mkdir -p target && spin js2wasm -o target/rd-spin-hello-world.wasm dist/spin.js\n\nasset spin.js 4.57 KiB [compared for emit] (name: main)\nruntime modules 670 bytes 3 modules\n./src/index.ts 2.86 KiB [built] [code generated]\nwebpack 5.91.0 compiled successfully in 1355 ms\n\nStarting to build Spin compatible module\nSpin compatible module built successfully\nFinished building all Spin components\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once the build command ran successfully, you should see the ",(0,s.jsx)(n.code,{children:"rd-spin-hello-world.wasm"})," module created inside the ",(0,s.jsx)(n.code,{children:"target"})," directory."]}),"\n",(0,s.jsx)(n.h3,{id:"package-the-wasm-module-as-an-oci-container-image-and-push-to-a-container-registry",children:"Package the Wasm Module as an OCI Container Image and Push to a Container Registry"}),"\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:"Dockerfile"})," with below code to package the ",(0,s.jsx)(n.code,{children:"Wasm"})," module as a docker image."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"FROM scratch\nCOPY spin.toml /spin.toml\nCOPY /target/rd-spin-hello-world.wasm /target/rd-spin-hello-world.wasm\n"})}),"\n",(0,s.jsx)(n.p,{children:"Run the command below to package the Wasm module as a container image."}),"\n",(0,s.jsxs)(o,{groupId:"container-runtime",children:[(0,s.jsx)(a,{value:"nerdctl",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"nerdctl build \\\n  --namespace k8s.io \\\n  --platform wasi/wasm \\\n  -t ghcr.io/rancher-sandbox/rd-spin-hello-world:0.1.0 .\n"})})}),(0,s.jsx)(a,{value:"docker",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"docker buildx build \\\n  --load \\\n  --platform wasi/wasm \\\n  --provenance=false \\\n  -t ghcr.io/rancher-sandbox/rd-spin-hello-world:0.1.0 .\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Push the image to the container registry"}),"\n",(0,s.jsxs)(o,{groupId:"container-runtime",children:[(0,s.jsx)(a,{value:"nerdctl",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"nerdctl push ghcr.io/rancher-sandbox/rd-spin-hello-world:0.1.0\n"})})}),(0,s.jsx)(a,{value:"docker",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"docker push ghcr.io/rancher-sandbox/rd-spin-hello-world:0.1.0\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"running-the-wasm-container",children:"Running the Wasm Container"}),"\n",(0,s.jsxs)(n.p,{children:["Running a Wasm container directly is currently only supported with the ",(0,s.jsx)(n.code,{children:"moby"})," container engine; there is a bug in ",(0,s.jsx)(n.code,{children:"nerdctl"})," that prevents it from working with ",(0,s.jsx)(n.code,{children:"containerd"}),". Ensure you have selected ",(0,s.jsx)(n.code,{children:"dockerd(moby)"})," as the container engine under ",(0,s.jsx)(n.a,{href:"/next/ui/preferences/container-engine/general",children:"Preferences > Container Engine > General"})," to work through the steps in this section."]}),"\n",(0,s.jsxs)(n.p,{children:["The following command runs the ",(0,s.jsx)(n.code,{children:"rd-spin-hello-world"})," sample ",(0,s.jsx)(n.code,{children:"spin"})," application, built in the previous section, on the ",(0,s.jsx)(n.code,{children:"moby"})," engine (note the final ",(0,s.jsx)(n.code,{children:"/"})," on the last line; it is the command to run, and ",(0,s.jsx)(n.code,{children:"docker run"})," will fail if it is omitted):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"docker run \\\n    --detach \\\n    --name spin-demo \\\n    --runtime io.containerd.spin.v2 \\\n    --platform wasi/wasm \\\n    --publish 8080:80 \\\n    ghcr.io/rancher-sandbox/rd-spin-hello-world:0.1.0 \\\n    /\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The internal port ",(0,s.jsx)(n.code,{children:"80"})," has been mapped to ",(0,s.jsx)(n.code,{children:"8080"})," and can be tested from the host:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$ curl http://localhost:8080/\nHello from Wasm container!\n"})}),"\n",(0,s.jsx)(n.h3,{id:"running-wasm-apps-with-kubernetes",children:"Running Wasm Apps with Kubernetes"}),"\n",(0,s.jsxs)(n.p,{children:["Running WebAssembly applications on Kubernetes is currently only supported with the ",(0,s.jsx)(n.code,{children:"containerd"})," runtime; it doesn't work with the ",(0,s.jsx)(n.code,{children:"cri-dockerd"})," shim used to run Kubernetes on top of ",(0,s.jsx)(n.code,{children:"moby"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Create a deployment for the sample Wasm container image built in the previous section:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'kubectl apply --filename - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-spin\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-spin\n  template:\n    metadata:\n      labels:\n        app: hello-spin\n    spec:\n      runtimeClassName: spin\n      containers:\n      - name: hello-spin\n        image: ghcr.io/rancher-sandbox/rd-spin-hello-world:0.1.0\n        command: ["/"]\nEOF\n'})}),"\n",(0,s.jsx)(n.p,{children:"It should print"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"deployment.apps/hello-spin created\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then create a ClusterIP service and a Traefik ingress contoller:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"kubectl apply --filename - <<EOF\napiVersion: v1\nkind: Service\nmetadata:\n  name: hello-spin\nspec:\n  type: ClusterIP\n  selector:\n    app: hello-spin\n  ports:\n  - port: 80\n---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: hello-spin\n  annotations:\n    traefik.ingress.kubernetes.io/router.entrypoints: web\nspec:\n  rules:\n  - host: localhost\n    http:\n      paths:\n        - path: /\n          pathType: Prefix\n          backend:\n            service:\n              name: hello-spin\n              port:\n                number: 80\nEOF\n"})}),"\n",(0,s.jsx)(n.p,{children:"Which will print"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"service/hello-spin created\ningress.networking.k8s.io/hello-spin created\n"})}),"\n",(0,s.jsx)(n.p,{children:"Testing it from the host:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$ curl http://localhost/\nHello from Wasm container!\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ingress-ip-on-windows",children:"Ingress IP on Windows"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["On Windows using ",(0,s.jsx)(n.code,{children:"localhost"})," for the Traefik ingress will not work."]})}),"\n",(0,s.jsx)(n.p,{children:"Instead the ingress IP address should be determined from the Traefik loadbalancer:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'C:\\>kubectl get service traefik --namespace kube-system --output "jsonpath={.status.loadBalancer.ingress[0].ip}"\n192.168.127.2\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"sslip.io"}),' "magic" DNS service can be used to create a corresponding DNS name for it: ',(0,s.jsx)(n.code,{children:"192.168.127.2.sslip.io"}),". This name should be used instead of ",(0,s.jsx)(n.code,{children:"localhost"})," in the Ingress spec ",(0,s.jsx)(n.code,{children:"host"})," field."]}),"\n",(0,s.jsx)(n.p,{children:"After deploying the deployment, service, and ingress the app should be available under this domain name:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"C:\\>curl http://192.168.127.2.sslip.io/hello\nHello world from Spin!\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return o}});var s=i(67294);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);