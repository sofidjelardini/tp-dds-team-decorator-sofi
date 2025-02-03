(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{9573:function(e,a,n){Promise.resolve().then(n.bind(n,1880))},6463:function(e,a,n){"use strict";var s=n(1169);n.o(s,"redirect")&&n.d(a,{redirect:function(){return s.redirect}}),n.o(s,"useParams")&&n.d(a,{useParams:function(){return s.useParams}}),n.o(s,"usePathname")&&n.d(a,{usePathname:function(){return s.usePathname}}),n.o(s,"useRouter")&&n.d(a,{useRouter:function(){return s.useRouter}})},7449:function(e,a){"use strict";function n(){return null}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return n}}),("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},1968:function(e,a,n){"use strict";var s=n(7437),o=n(2265);n(966);var i=n(8191),r=n.n(i);let t=async()=>await n.e(212).then(n.t.bind(n,7691,23));a.Z=e=>{let{ubicaciones:a,mapId:n}=e,i=(0,o.useRef)(null);return(0,o.useEffect)(()=>((async()=>{let e=await t();if(console.log("L: ",e),!i.current){var s,o;i.current=e.map(n).setView([(null===(s=a[0])||void 0===s?void 0:s.lat)||0,(null===(o=a[0])||void 0===o?void 0:o.lng)||0],12),e.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19}).addTo(i.current);let r=e.icon({iconUrl:"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowUrl:"https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",shadowSize:[41,41]});a.forEach(a=>{void 0!==a.lat&&void 0!==a.lng&&e.marker([a.lat,a.lng],{icon:r}).addTo(null==i?void 0:i.current).bindPopup(a.nombre)})}})(),()=>{i.current&&(i.current.remove(),i.current=null)}),[a,n]),(0,s.jsx)("div",{id:n,className:r().mapContainer})}},1880:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return m}});var s=n(7437),o=n(7449),i=n.n(o),r=n(6463),t=n(2265),c=n(1968),l=n(8059),d=n.n(l),u=n(5895),h=e=>{let{userId:a}=e,n=(0,r.useRouter)();return(0,s.jsxs)("div",{className:d().local,children:[(0,s.jsx)("section",{className:d().section,children:(0,s.jsx)("h1",{className:d().title,children:"Bienvenido a la Plataforma de Contribuciones!"})}),(0,s.jsxs)("section",{className:d().section,children:[(0,s.jsx)("h2",{className:d().title,children:"Formas de Contribuir"}),(0,s.jsx)("h3",{className:d().subtitle,children:"Si es una persona humana, puede contribuir:"}),(0,s.jsxs)("ul",{className:d().list,children:[(0,s.jsxs)("li",{className:d().listItem,children:[(0,s.jsx)("strong",{className:d().strong,children:"Donando dinero"}),(0,s.jsx)("p",{children:"Se deber\xe1 indicar la fecha de la donaci\xf3n, un monto y una frecuencia (en caso de que se opte por donar de forma peri\xf3dica)."})]}),(0,s.jsx)("button",{className:d().button,onClick:()=>n.push("dashboard/".concat(a,"/donaciones")),children:"Donar Dinero"}),(0,s.jsxs)("li",{className:d().listItem,children:[(0,s.jsx)("strong",{className:d().strong,children:"Donando viandas"}),(0,s.jsx)("p",{children:"Se solicitar\xe1 los datos de cada vianda. Cuando un colaborador decide donar una vianda debe completar un formulario indicando qu\xe9 comida es, una fecha de caducidad, la fecha de la donaci\xf3n, el colaborador, en qu\xe9 heladera se encuentra y opcionalmente podr\xe1 ingresar las calor\xedas y el peso de la vianda. Adem\xe1s, se debe conocer el estado en el que se encuentra; es decir, si la misma fue entregada o no."})]}),(0,s.jsx)("button",{className:d().button,onClick:()=>n.push("dashboard/".concat(a,"/viandas")),children:"Cargar Viandas"}),(0,s.jsxs)("li",{className:d().listItem,children:[(0,s.jsx)("strong",{className:d().strong,children:"Distribuyendo viandas"}),(0,s.jsx)("p",{children:"Se deber\xe1 indicar la heladera origen, la heladera destino, la cantidad de viandas a mover, el motivo de la distribuci\xf3n (por el momento puede ser: un desperfecto en la heladera o falta de viandas en la heladera destino) y la fecha en que se realiz\xf3 la distribuci\xf3n."}),(0,s.jsx)("button",{className:d().button,onClick:()=>n.push("dashboard/".concat(a,"/distribucion")),children:"Distribuir Viandas"})]})]}),(0,s.jsx)("h3",{className:d().subtitle,children:"Personas Jur\xeddicas"}),(0,s.jsx)("p",{className:d().text,children:"Si es una persona jur\xeddica, puede contribuir:"}),(0,s.jsxs)("ul",{className:d().list,children:[(0,s.jsxs)("li",{className:d().listItem,children:[(0,s.jsx)("strong",{className:d().strong,children:"Donando dinero"}),(0,s.jsx)("p",{children:"Deber\xe1 indicar la fecha de la donaci\xf3n, un monto y una frecuencia (en caso de que se opte por donar de forma peri\xf3dica)."})]}),(0,s.jsx)("button",{className:d().button,onClick:()=>n.push("dashboard/".concat(a,"/donaciones")),children:"Donar Dinero"}),(0,s.jsxs)("li",{className:d().listItem,children:[(0,s.jsx)("strong",{className:d().strong,children:"Haci\xe9ndose cargo de una heladera"}),(0,s.jsx)("p",{children:"Si usted decide hacerse cargo de una heladera, deber\xe1 proveer su direcci\xf3n."})]})]}),(0,s.jsx)("button",{className:d().button,onClick:()=>n.push("dashboard/".concat(a,"/heladeras")),children:"Gestionar Heladeras"})]}),(0,s.jsxs)("section",{className:d().section,children:[(0,s.jsx)("h2",{className:d().title,children:"Alta de Personas en situaci\xf3n vulnerable"}),(0,s.jsx)("p",{className:d().text,children:"De las mismas se deber\xe1 registrar el nombre, la fecha de nacimiento, la fecha en la que fue registrado en el sistema, si se encuentra en situaci\xf3n de calle o posee un domicilio (en tal caso deber\xe1 ser ingresado) y el tipo y n\xfamero de documento (si posee). Tambi\xe9n se debe cargar si posee menores a cargo, y en caso afirmativo, la cantidad."}),(0,s.jsx)("button",{className:d().button,onClick:()=>n.push("dashboard/".concat(a,"/personas")),children:"Registrar Persona Vulnerable"})]}),(0,s.jsxs)("section",{className:d().section,children:[(0,s.jsx)("h2",{className:d().title,children:"Ubicaci\xf3n de las heladeras disponibles"}),(0,s.jsx)(c.Z,{ubicaciones:u,mapId:"heladeras"})]})]})},m=()=>{let[e,a]=(0,t.useState)(null);return(0,t.useEffect)(()=>{let e=localStorage.getItem("userId");e?a(e):(0,r.redirect)("/auth")},[]),(0,s.jsxs)("div",{children:[(0,s.jsxs)(i(),{children:[(0,s.jsx)("title",{children:"Contribuciones a la Comunidad"}),(0,s.jsx)("meta",{name:"description",content:"Contribuye a ayudar a personas en situaci\xf3n vulnerable."})]}),(0,s.jsx)("main",{children:(0,s.jsx)(h,{userId:e})})]})}},966:function(){},8059:function(e){e.exports={local:"homePage_local__Ko_Y_",section:"homePage_section__Wh04X",header:"homePage_header__kP6Px","header-title":"homePage_header-title__tesLQ","header-subtitle":"homePage_header-subtitle___ICdd",title:"homePage_title__ea5ao",subtitle:"homePage_subtitle__vffRR",text:"homePage_text__gOxYu",list:"homePage_list___tB_M","list-item":"homePage_list-item__TN1Zn",hover:"homePage_hover__s6B6u",strong:"homePage_strong__xVspP",button:"homePage_button__V6WTG"}},8191:function(e){e.exports={mapContainer:"mapa_mapContainer__ETK3B"}},5895:function(e){"use strict";e.exports=JSON.parse('[{"direccion":"av cordoba 502","lng":-58.3839,"lat":-34.6157,"nombre":"Heladera 2","capacidad":"16","fechaFuncionamiento":"2024-12-26","id":12031413,"estado":"Activa","colaboradoresSuscriptos":["41917951"]},{"direccion":"av libertador 5340","lng":-58.3636,"lat":-34.2394,"nombre":"Heladera 1","capacidad":"12","fechaFuncionamiento":"2025-01-15","id":7326496,"estado":"Activa","colaboradoresSuscriptos":[]},{"direccion":"bolivar 23","lng":-54.2929,"lat":-34.6363,"nombre":"Heladera 3","capacidad":"12","fechaFuncionamiento":"2025-01-15","id":91270,"estado":"Activa","colaboradoresSuscriptos":[]},{"direccion":"av directorio","lng":-58.3938,"lat":-34.1675,"nombre":"Heladera 4","capacidad":"10","fechaFuncionamiento":"2025-01-20","id":852310,"estado":"Activa","colaboradoresSuscriptos":[]}]')}},function(e){e.O(0,[75,971,23,744],function(){return e(e.s=9573)}),_N_E=e.O()}]);