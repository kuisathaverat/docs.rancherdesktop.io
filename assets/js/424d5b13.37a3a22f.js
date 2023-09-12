"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[8791],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),h=r,k=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return t?o.createElement(k,i(i({ref:n},c),{},{components:t})):o.createElement(k,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},93687:function(e,n,t){var o=t(10412);const r=!!o.Z.canUseDOM&&navigator.platform.startsWith("Mac"),a=!!o.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",s=r?"macOS":a?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},14242:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return d}});var o=t(83117),r=(t(67294),t(3905));t(93687);const a={title:"Troubleshooting Tips"},i=void 0,s={unversionedId:"troubleshooting-tips",id:"version-latest/troubleshooting-tips",title:"Troubleshooting Tips",description:"This page provides tips to troubleshoot issues you may have with Rancher Desktop.",source:"@site/versioned_docs/version-latest/troubleshooting-tips.md",sourceDirName:".",slug:"/troubleshooting-tips",permalink:"/troubleshooting-tips",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/troubleshooting-tips.md",tags:[],version:"latest",frontMatter:{title:"Troubleshooting Tips"},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/faq"}},l={},d=[{value:"API",id:"api",level:3},{value:"Q: Rancher Desktop is stuck on <code>Waiting for Kubernetes API</code>, what do I do?",id:"q-rancher-desktop-is-stuck-on-waiting-for-kubernetes-api-what-do-i-do",level:4},{value:"Containers",id:"containers",level:3},{value:"Q: How can I fix the Docker error when starting a container using the VS Code dev-containers extension with version &gt;<code>v0.266</code>?",id:"q-how-can-i-fix-the-docker-error-when-starting-a-container-using-the-vs-code-dev-containers-extension-with-version-v0266",level:4},{value:"Q: How do I fix <code>FATA[0005] subnet 10.4.0.0/24 overlaps with other one on this address space</code> when running a container using <code>nerdctl run</code>?",id:"q-how-do-i-fix-fata0005-subnet-1040024-overlaps-with-other-one-on-this-address-space-when-running-a-container-using-nerdctl-run",level:4},{value:"Installation",id:"installation",level:3},{value:"Q: I&#39;m using Homebrew to install Rancher Desktop, but <code>brew install rancher-desktop</code> is failing, why?",id:"q-im-using-homebrew-to-install-rancher-desktop-but-brew-install-rancher-desktop-is-failing-why",level:4},{value:"Q: How do I fix <code>kubectl: command not found</code> issue on Linux?",id:"q-how-do-i-fix-kubectl-command-not-found-issue-on-linux",level:4},{value:"Q: How do I fix the <code>Installation Aborted</code> error while downgrading from an existing MSI installation to an older EXE version (1.6.x or earlier) on Windows?",id:"q-how-do-i-fix-the-installation-aborted-error-while-downgrading-from-an-existing-msi-installation-to-an-older-exe-version-16x-or-earlier-on-windows",level:4},{value:"Q: I can no longer run <code>docker compose</code> after installing Rancher Desktop and uninstalling Docker Desktop, what happened?",id:"q-i-can-no-longer-run-docker-compose-after-installing-rancher-desktop-and-uninstalling-docker-desktop-what-happened",level:4},{value:"Q: I do not see an entry for Rancher Desktop when running <code>kubectl config get-contexts</code>, where is it?",id:"q-i-do-not-see-an-entry-for-rancher-desktop-when-running-kubectl-config-get-contexts-where-is-it",level:4},{value:"Networking",id:"networking",level:3},{value:"Q: Why do I see a blank screen when I launch the Cluster Dashboard?",id:"q-why-do-i-see-a-blank-screen-when-i-launch-the-cluster-dashboard",level:4},{value:"WSL",id:"wsl",level:3},{value:"Q: Why do I not see my WSL distro under Rancher Desktop&#39;s WSL Integration page?",id:"q-why-do-i-not-see-my-wsl-distro-under-rancher-desktops-wsl-integration-page",level:4},{value:"Q: How do I fix <code>permission denied</code> errors when trying to use Docker on WSL?",id:"q-how-do-i-fix-permission-denied-errors-when-trying-to-use-docker-on-wsl",level:4}],c=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},u=c("Tabs"),p=c("TabItem"),h={toc:d};function k(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/troubleshooting-tips"})),(0,r.kt)("p",null,"This page provides tips to troubleshoot issues you may have with Rancher Desktop."),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("h4",{id:"q-rancher-desktop-is-stuck-on-waiting-for-kubernetes-api-what-do-i-do"},"Q: Rancher Desktop is stuck on ",(0,r.kt)("inlineCode",{parentName:"h4"},"Waiting for Kubernetes API"),", what do I do?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," The cause is hard to determine without additional information. Navigate to the Troubleshooting tab and use the button to access the logs. Then go to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/issues"},"Rancher Desktop GitHub")," page and file an issue with the logs attached."),(0,r.kt)("h3",{id:"containers"},"Containers"),(0,r.kt)("h4",{id:"q-how-can-i-fix-the-docker-error-when-starting-a-container-using-the-vs-code-dev-containers-extension-with-version-v0266"},"Q: How can I fix the Docker error when starting a container using the VS Code dev-containers extension with version >",(0,r.kt)("inlineCode",{parentName:"h4"},"v0.266"),"?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," There is a current workaround for users experiencing a Docker error when starting a container using the dev-containers extension for VS code versioned ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.266")," or later and Rancher Desktop ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.8.1"),". Disabling Wayland in the user settings will allow the container to spin up successfully. This can be accomplished by unchecking the box in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Extensions")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Dev Containers")," tab labelled ",(0,r.kt)("inlineCode",{parentName:"p"},"Dev > Containers: Mount Wayland Socket (Applies to All Profiles)"),"."),(0,r.kt)("h4",{id:"q-how-do-i-fix-fata0005-subnet-1040024-overlaps-with-other-one-on-this-address-space-when-running-a-container-using-nerdctl-run"},"Q: How do I fix ",(0,r.kt)("inlineCode",{parentName:"h4"},"FATA[0005] subnet 10.4.0.0/24 overlaps with other one on this address space")," when running a container using ",(0,r.kt)("inlineCode",{parentName:"h4"},"nerdctl run"),"?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," You will see this error if there's a route rule with an IP address from a conflicting subnet on the Iptables. The conflicting routes could be either from the host network (bridge mode) or the Kubernetes network. A quick workaround to this issue is to shutdown WSL via the command ",(0,r.kt)("inlineCode",{parentName:"p"},"wsl --shutdown"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u26a0\ufe0f Please note that shutting down WSL will stop all other distros along with the ",(0,r.kt)("inlineCode",{parentName:"strong"},"rancher-desktop")," distro.")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("h4",{id:"q-im-using-homebrew-to-install-rancher-desktop-but-brew-install-rancher-desktop-is-failing-why"},"Q: I'm using Homebrew to install Rancher Desktop, but ",(0,r.kt)("inlineCode",{parentName:"h4"},"brew install rancher-desktop")," is failing, why?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," Due to the Homebrew cask naming conventions, the ",(0,r.kt)("inlineCode",{parentName:"p"},"-desktop")," suffix is dropped from the cask formula name. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"brew install rancher")," instead."),(0,r.kt)("h4",{id:"q-how-do-i-fix-kubectl-command-not-found-issue-on-linux"},"Q: How do I fix ",(0,r.kt)("inlineCode",{parentName:"h4"},"kubectl: command not found")," issue on Linux?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," By default, Rancher Desktop creates symlinks of ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl")," binaries in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/<user>/.local/bin")," directory on Linux. To be able to call these commands directly from the console you may add the directory to your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable by executing the following command in console and performing logout and login:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "export PATH=\\$PATH:/home/$(whoami)/.local/bin" >> ~/.bashrc\n')),(0,r.kt)("h4",{id:"q-how-do-i-fix-the-installation-aborted-error-while-downgrading-from-an-existing-msi-installation-to-an-older-exe-version-16x-or-earlier-on-windows"},"Q: How do I fix the ",(0,r.kt)("inlineCode",{parentName:"h4"},"Installation Aborted")," error while downgrading from an existing MSI installation to an older EXE version (1.6.x or earlier) on Windows?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," You will see this error if the Windows registry key ",(0,r.kt)("inlineCode",{parentName:"p"},"HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Services\\EventLog\\Application\\RancherDesktopPrivilegedService")," that is supposed to be deleted during the MSI uninstallation process is not deleted for some reason. Please manually delete the registry key and try installing the EXE version. You can run the below command in a privileged shell to delete the registry key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"reg.exe delete HKLM\\System\\CurrentControlSet\\Services\\EventLog\\Application\\RancherDesktopPrivilegedService /reg:64 /f\n")),(0,r.kt)("h4",{id:"q-i-can-no-longer-run-docker-compose-after-installing-rancher-desktop-and-uninstalling-docker-desktop-what-happened"},"Q: I can no longer run ",(0,r.kt)("inlineCode",{parentName:"h4"},"docker compose")," after installing Rancher Desktop and uninstalling Docker Desktop, what happened?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," This was an issue related to earlier versions (prior to 1.1.0) of Rancher Desktop.  Rancher Desktop version 1.1.0 and above comes bundled with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," for you, and makes the cli plugins available at ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.docker/cli-plugins"),". We strongly recommend you to be on the latest version of Rancher Desktop."),(0,r.kt)("p",null,"If you still don't see ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," available then please file a bug on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/new?assignees=&labels=kind%2Fbug&template=bug_report.yml"},"Github"),"."),(0,r.kt)("h4",{id:"q-i-do-not-see-an-entry-for-rancher-desktop-when-running-kubectl-config-get-contexts-where-is-it"},"Q: I do not see an entry for Rancher Desktop when running ",(0,r.kt)("inlineCode",{parentName:"h4"},"kubectl config get-contexts"),", where is it?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," Rancher Desktop places its configuration in the default location, ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.kube/config,")," and uses that. Your ",(0,r.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," environment variable may be set to look elsewhere for configuration files."),(0,r.kt)("h3",{id:"networking"},"Networking"),(0,r.kt)("h4",{id:"q-why-do-i-see-a-blank-screen-when-i-launch-the-cluster-dashboard"},"Q: Why do I see a blank screen when I launch the Cluster Dashboard?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," The Cluster Dashboard may not be running correctly because another process on your machine is using ports ",(0,r.kt)("inlineCode",{parentName:"p"},"9080")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"9443")," that the Dashboard process (",(0,r.kt)("inlineCode",{parentName:"p"},"steve"),") depends on. To solve this, identify and terminate the process using those ports. You can use the command below to identify processes using a specific port on your host machine. Note that on macOS and Linux, the Rancher Dashboard process is named ",(0,r.kt)("inlineCode",{parentName:"p"},"steve"),", while on Windows, it's ",(0,r.kt)("inlineCode",{parentName:"p"},"steve.exe"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"steve")," is the only process using ports 9080 or 9443, do not terminate it."),(0,r.kt)("p",null,"Command to find processes using a specific port."),(0,r.kt)(u,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(p,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"netstat -ano | findstr :9443\n"))),(0,r.kt)(p,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lsof -nP -iTCP -sTCP:LISTEN | grep 9443\n"))),(0,r.kt)(p,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lsof -nP -iTCP -sTCP:LISTEN | grep 9443\n")))),(0,r.kt)("h3",{id:"wsl"},"WSL"),(0,r.kt)("h4",{id:"q-why-do-i-not-see-my-wsl-distro-under-rancher-desktops-wsl-integration-page"},"Q: Why do I not see my WSL distro under Rancher Desktop's WSL Integration page?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," You are likely using a WSL 1 distro. Rancher Desktop supports only WSL 2 distros. You can convert your WSL 1 distro into a WSL 2 distro by running the command ",(0,r.kt)("inlineCode",{parentName:"p"},"wsl --set-version <distro-name> 2"),". You can also run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"wsl --set-default-version 2")," to set all the future distributions you might install to use WSL 2."),(0,r.kt)("h4",{id:"q-how-do-i-fix-permission-denied-errors-when-trying-to-use-docker-on-wsl"},"Q: How do I fix ",(0,r.kt)("inlineCode",{parentName:"h4"},"permission denied")," errors when trying to use Docker on WSL?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," You need write-permission to access the docker socket. There are many ways to go about that, but this is one of the more common approaches. Using the Ubuntu WSL command-line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo groupadd docker\nsudo adduser $USER docker\nsudo chown root:docker /var/run/docker.sock\nsudo chmod g+w /var/run/docker.sock\nnewgrp docker\n")))}k.isMDXComponent=!0}}]);