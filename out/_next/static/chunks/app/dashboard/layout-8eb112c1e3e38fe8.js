(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[663],{3442:function(e,a,t){Promise.resolve().then(t.bind(t,3432))},3432:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return B}});var s=t(7437),r=t(9354),i=t(518);let n=(0,t(903).U)(e=>({isMinimized:!0,toggle:()=>e(e=>({isMinimized:!e.isMinimized}))}));var o=t(3852),d=t(8960),c=t(3977),l=t(1077),u=t(2022),f=t(7524),m=t(5880),h=t(3045),p=t(6649),x=t(8279),b=t(4781),g=t(6935),j=t(6780),y=t(2023);let N={homepage:o.Z,carrito:d.Z,heladera:c.Z,donaciones:l.Z,persona:u.Z,vianda:f.Z,camion:m.Z,tecnico:h.Z,editarPerfil:p.Z,administrador:x.Z,cargaColaboraciones:b.Z,tarjetas:g.Z,incidentes:j.Z,reportes:y.Z,gitHub:e=>{let{...a}=e;return(0,s.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",...a,children:(0,s.jsx)("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})}};var v=t(2265),w=t(7908);let _=w.zt,C=w.fC,z=w.xz,k=v.forwardRef((e,a)=>{let{className:t,sideOffset:i=4,...n}=e;return(0,s.jsx)(w.h_,{children:(0,s.jsx)(w.VY,{ref:a,sideOffset:i,className:(0,r.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})})});k.displayName=w.VY.displayName;var Z=t(9896),S=t(6463),P=t(9628),D=e=>{let{userId:a,isMobileNav:t=!1}=e,{isMinimized:i}=n(),o=(0,S.useRouter)(),d=P.find(e=>e.documento==a),[c,l]=(0,v.useState)([]);async function u(e){e.preventDefault();try{await fetch("/api/auth/logout",{method:"POST"}),localStorage.clear(),o.push("/auth")}catch(e){console.error("Ocurri\xf3 un error. Cont\xe1ctese con el administrador",e)}}return(0,v.useEffect)(()=>{l([{title:"Inicio",href:"/dashboard",icon:"homepage"},{title:"Heladeras",href:"/dashboard/".concat(a,"/heladeras"),icon:"heladera"},{title:"Carga de Viandas",href:"/dashboard/".concat(a,"/viandas"),icon:"vianda"},{title:"Distribuci\xf3n Viandas",href:"/dashboard/".concat(a,"/distribucion"),icon:"camion"},{title:"Donaciones",href:"/dashboard/".concat(a,"/donaciones"),icon:"donaciones"},{title:"Gesti\xf3n T\xe9cnicos",href:"/dashboard/".concat(a,"/tecnicos"),icon:"tecnico"},{title:"Carga de Colaboraciones",href:"/dashboard/".concat(a,"/cargar-colaboraciones"),icon:"cargaColaboraciones"},{title:"Incidentes",href:"/dashboard/".concat(a,"/incidentes"),icon:"incidentes"},{title:"Reportes",href:"/dashboard/".concat(a,"/reportes"),icon:"reportes"},{title:"Editar Perfil",href:"/dashboard/".concat(a,"/editar-perfil"),icon:"editarPerfil"}])},[a]),(0,v.useEffect)(()=>{(null==d?void 0:d.ayudarPersonas)&&l([...c,{title:"Puntos y canjes",href:"/dashboard/".concat(a,"/puntos-y-canjes"),icon:"carrito"},{title:"Registro Personas en Situaci\xf3n Vulnerable",href:"/dashboard/".concat(a,"/registro-personas"),icon:"persona"},{title:"Gesti\xf3n de Tarjetas",href:"/dashboard/".concat(a,"/tarjetas"),icon:"tarjetas"}])},[d]),(0,s.jsx)("nav",{className:"flex flex-col h-full",children:(0,s.jsxs)(_,{children:[(0,s.jsx)("div",{className:"flex flex-col ".concat(i?"items-center justify-center":"items-start justify-start"),children:null==c?void 0:c.map((e,a)=>{let n=N[e.icon||"arrowRight"];return e.href&&(0,s.jsxs)(C,{children:[(0,s.jsx)(z,{asChild:!0,children:(0,s.jsxs)("a",{href:e.href,onClick:a=>{i&&a.preventDefault(),o.push(e.href)},className:(0,r.cn)("flex items-center gap-2 rounded-md py-2 mb-1 text-sm font-medium hover:bg-primary hover:text-primary-foreground w-full ".concat(i?"items-center justify-center":"items-start justify-start")),children:[(0,s.jsx)(n,{}),!t&&(i||t)?null:(0,s.jsx)("span",{className:"mr-2 truncate",children:e.title})]})}),(0,s.jsx)(k,{align:"center",side:"right",sideOffset:8,children:e.title})]},a)})}),(0,s.jsx)("div",{className:"mt-auto",children:(0,s.jsxs)(C,{children:[(0,s.jsx)(z,{asChild:!0,children:(0,s.jsxs)("button",{onClick:u,className:(0,r.cn)("flex items-center gap-2 rounded-md py-2 mb-1 text-sm font-medium hover:bg-primary hover:text-primary-foreground w-full ".concat(i?"items-center justify-center":"items-start justify-start")),children:[(0,s.jsx)(Z.Z,{className:"ml-1 size-5 flex-none"}),!t&&(i||t)?"":(0,s.jsx)("span",{className:"mr-2 truncate",children:"Cerrar sesi\xf3n"})]})}),(0,s.jsx)(k,{align:"center",side:"right",sideOffset:8,className:i?"inline-block":"hidden",children:"Cerrar sesi\xf3n"})]})})]})})},R=t(2466),M=t.n(R);function E(e){let{userId:a}=e,{isMinimized:t,toggle:o}=n();return(0,s.jsxs)("aside",{className:(0,r.cn)("fixed hidden h-screen flex-none border-r bg-card transition-[width] duration-500 md:block top:0 bottom:0 p-4",t?M()["sidebar-collapsed"]:M()["sidebar-expanded"],M()["sidebar-custom"]),children:[(0,s.jsx)(i.Z,{className:(0,r.cn)("absolute -right-3 top-10 z-50  cursor-pointer rounded-full border bg-background text-3xl text-foreground",t&&"rotate-180"),onClick:()=>{o()}}),(0,s.jsx)("div",{className:"navigation-list",children:(0,s.jsx)(D,{userId:a})})]})}var I=t(325),V=t(4867),O=t(2218);let Y=I.fC,T=I.xz;I.x8;let W=I.h_,$=v.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,s.jsx)(I.aV,{className:(0,r.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...i,ref:a})});$.displayName=I.aV.displayName;let G=(0,O.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),H=v.forwardRef((e,a)=>{let{side:t="right",className:i,children:n,...o}=e;return(0,s.jsxs)(W,{children:[(0,s.jsx)($,{}),(0,s.jsxs)(I.VY,{ref:a,className:(0,r.cn)(G({side:t}),i),...o,children:[(0,s.jsxs)(I.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,s.jsx)(V.Pxu,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]}),n]})]})});H.displayName=I.VY.displayName,v.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,s.jsx)(I.Dx,{ref:a,className:(0,r.cn)("text-lg font-semibold text-foreground",t),...i})}).displayName=I.Dx.displayName,v.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,s.jsx)(I.dk,{ref:a,className:(0,r.cn)("text-sm text-muted-foreground",t),...i})}).displayName=I.dk.displayName;var J=t(2873),L=()=>{let[e,a]=(0,v.useState)("");(0,v.useEffect)(()=>{a(localStorage.getItem("userId"))},[]);let[t,r]=(0,v.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(Y,{open:t,onOpenChange:r,children:[(0,s.jsx)(T,{asChild:!0,className:"focus:outline-none cursor-pointer",children:(0,s.jsx)(J.Z,{})}),(0,s.jsx)(H,{side:"left",className:"!px-0",children:(0,s.jsx)("div",{className:"space-y-4 py-4",children:(0,s.jsxs)("div",{className:"px-3 py-2",children:[(0,s.jsx)("h2",{className:"mb-4 px-4 text-lg font-semibold tracking-tight",children:"Men\xfa"}),(0,s.jsx)("div",{className:"space-y-1",children:(0,s.jsx)(D,{isMobileNav:!0,userId:e})})]})})})]})})},A=()=>(0,s.jsx)("header",{className:"sticky inset-x-0 top-0 w-full",children:(0,s.jsx)("nav",{className:"flex items-center justify-between px-4 py-2 md:justify-end",children:(0,s.jsx)("div",{className:(0,r.cn)("block md:!hidden"),children:(0,s.jsx)(L,{})})})});function B(e){let{children:a,modal:t}=e,[r,i]=(0,v.useState)(null);return(0,v.useEffect)(()=>{let e=localStorage.getItem("userId");e?i(e):(0,S.redirect)("/auth")},[]),(0,s.jsxs)("div",{className:"flex h-full",children:[(0,s.jsx)(E,{userId:r}),(0,s.jsxs)("main",{className:"w-full flex-1 overflow-hidden",children:[(0,s.jsx)(A,{}),(0,s.jsxs)("div",{style:{padding:"2rem",marginLeft:"75px"},children:[a,t]})]})]})}},9354:function(e,a,t){"use strict";t.d(a,{cn:function(){return i}});var s=t(4839),r=t(6164);function i(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,r.m6)((0,s.W)(a))}},2466:function(e){e.exports={"sidebar-custom":"sidebar_sidebar-custom__sp3pw","sidebar-expanded":"sidebar_sidebar-expanded__iaZML","sidebar-collapsed":"sidebar_sidebar-collapsed__NfrWS","toggle-button":"sidebar_toggle-button__fRHyM",rotate:"sidebar_rotate__oGYgz","navigation-list":"sidebar_navigation-list__WYYxP"}},9628:function(e){"use strict";e.exports=JSON.parse('[{"documento":"41917951","password":"$2b$10$UmNwDnUbv.uaoCZnEpvFq.j6Rpn8nK1IjNc48y.TsWMi6rEvYpvXK","personaJuridica":false,"ayudarPersonas":true,"nombre":"Sofia","apellido":"Djelardini","email":"sdjelardini@gmail.com","telefono":"01144051200","fechaNacimiento":"1999-06-22","direccion":"0 Barrio Septiembre","codigoPostal":"1625","pesosDonados":1000,"viandasDonadas":2,"viandasDistribuidas":1,"tarjetasRepartidas":15},{"documento":"12345678","password":"$2b$10$8SPVDWn2JFtHNrLnDyP7Q.0c.AaehogXLRIYTMRp.ylDTruWXAklG","personaJuridica":true,"ayudarPersonas":false,"razonSocial":"niidea123","telefono":"01144051200","tipo":"Empresa","rubro":"restaurant","direccion":"0 Barrio Septiembre"}]')}},function(e){e.O(0,[200,310,927,506,423,971,23,744],function(){return e(e.s=3442)}),_N_E=e.O()}]);