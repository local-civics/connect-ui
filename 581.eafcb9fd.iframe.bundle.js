(self.webpackChunk_local_civics_candid_ui=self.webpackChunk_local_civics_candid_ui||[]).push([[581],{"./node_modules/@mantine/core/esm/Divider/Divider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>Divider});var react=__webpack_require__("./node_modules/react/index.js"),MantineProvider=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js"),rem=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js"),create_styles=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),get_size=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js");const sizes={xs:(0,rem.h)(1),sm:(0,rem.h)(2),md:(0,rem.h)(3),lg:(0,rem.h)(4),xl:(0,rem.h)(5)};function getColor(theme,color){const themeColor=theme.fn.variant({variant:"outline",color}).border;return"string"==typeof color&&(color in theme.colors||color.split(".")[0]in theme.colors)?themeColor:void 0===color?"dark"===theme.colorScheme?theme.colors.dark[4]:theme.colors.gray[4]:color}const Divider_styles=(0,create_styles.k)(((theme,{color},{size,variant})=>({root:{},withLabel:{borderTop:"0 !important"},left:{"&::before":{display:"none"}},right:{"&::after":{display:"none"}},label:{display:"flex",alignItems:"center","&::before":{content:'""',flex:1,height:(0,rem.h)(1),borderTop:`${(0,get_size.a)({size,sizes})} ${variant} ${getColor(theme,color)}`,marginRight:theme.spacing.xs},"&::after":{content:'""',flex:1,borderTop:`${(0,get_size.a)({size,sizes})} ${variant} ${getColor(theme,color)}`,marginLeft:theme.spacing.xs}},labelDefaultStyles:{color:"dark"===color?theme.colors.dark[1]:theme.fn.themeColor(color,"dark"===theme.colorScheme?5:theme.fn.primaryShade(),!1)},horizontal:{border:0,borderTopWidth:(0,rem.h)((0,get_size.a)({size,sizes})),borderTopColor:getColor(theme,color),borderTopStyle:variant,margin:0},vertical:{border:0,alignSelf:"stretch",height:"auto",borderLeftWidth:(0,rem.h)((0,get_size.a)({size,sizes})),borderLeftColor:getColor(theme,color),borderLeftStyle:variant}})));var Box=__webpack_require__("./node_modules/@mantine/core/esm/Box/Box.js"),Text=__webpack_require__("./node_modules/@mantine/core/esm/Text/Text.js"),__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a};const defaultProps={orientation:"horizontal",size:"xs",labelPosition:"left",variant:"solid"},Divider=(0,react.forwardRef)(((props,ref)=>{const _a=(0,MantineProvider.N4)("Divider",defaultProps,props),{className,color,orientation,size,label,labelPosition,labelProps,variant,styles,classNames,unstyled}=_a,others=((source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["className","color","orientation","size","label","labelPosition","labelProps","variant","styles","classNames","unstyled"]),{classes,cx}=Divider_styles({color},{classNames,styles,unstyled,name:"Divider",variant,size}),vertical="vertical"===orientation,horizontal="horizontal"===orientation,withLabel=!!label&&horizontal,useLabelDefaultStyles=!(null==labelProps?void 0:labelProps.color);return react.createElement(Box.x,__spreadValues({ref,className:cx(classes.root,{[classes.vertical]:vertical,[classes.horizontal]:horizontal,[classes.withLabel]:withLabel},className),role:"separator"},others),withLabel&&react.createElement(Text.x,(a=__spreadValues({},labelProps),b={size:(null==labelProps?void 0:labelProps.size)||"xs",mt:(0,rem.h)(2),className:cx(classes.label,classes[labelPosition],{[classes.labelDefaultStyles]:useLabelDefaultStyles})},__defProps(a,__getOwnPropDescs(b))),label));var a,b}));Divider.displayName="@mantine/core/Divider"},"./node_modules/@mantine/core/esm/Grid/Grid.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>Grid});var react=__webpack_require__("./node_modules/react/index.js"),MantineProvider=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js"),create_safe_context=__webpack_require__("./node_modules/@mantine/utils/esm/create-safe-context/create-safe-context.js");const[GridProvider,useGridContext]=(0,create_safe_context.R)("Grid component was not found in tree");var get_size=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js"),default_theme=__webpack_require__("./node_modules/@mantine/styles/esm/theme/default-theme.js"),rem=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js"),create_styles=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),__defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a};const getColumnFlexBasis=(colSpan,columns)=>"content"===colSpan?"auto":"auto"===colSpan?"0rem":colSpan?100/(columns/colSpan)+"%":void 0,getColumnMaxWidth=(colSpan,columns,grow)=>grow||"auto"===colSpan||"content"===colSpan?"unset":getColumnFlexBasis(colSpan,columns),getColumnFlexGrow=(colSpan,grow)=>{if(colSpan)return"auto"===colSpan||grow?1:0},getColumnOffset=(offset,columns)=>0===offset?0:offset?100/(columns/offset)+"%":void 0,getGutterSize=(gutter,theme)=>void 0!==gutter?`calc(${(0,get_size.a)({size:gutter,sizes:theme.spacing})} / 2)`:void 0;function getBreakpointsStyles({sizes,offsets,orders,theme,columns,gutters,grow}){return default_theme.j1.reduce(((acc,size)=>(acc[`@media (min-width: ${(0,rem.em)(theme.breakpoints[size])})`]={order:orders[size],flexBasis:getColumnFlexBasis(sizes[size],columns),padding:getGutterSize(gutters[size],theme),flexShrink:0,width:"content"===sizes[size]?"auto":void 0,maxWidth:getColumnMaxWidth(sizes[size],columns,grow),marginLeft:getColumnOffset(offsets[size],columns),flexGrow:getColumnFlexGrow(sizes[size],grow)},acc)),{})}const Col_styles=(0,create_styles.k)(((theme,{gutter,gutterXs,gutterSm,gutterMd,gutterLg,gutterXl,grow,offset,offsetXs,offsetSm,offsetMd,offsetLg,offsetXl,columns,span,xs,sm,md,lg,xl,order,orderXs,orderSm,orderMd,orderLg,orderXl})=>({col:__spreadValues({boxSizing:"border-box",flexGrow:getColumnFlexGrow(span,grow),order,padding:getGutterSize(gutter,theme),marginLeft:getColumnOffset(offset,columns),flexBasis:getColumnFlexBasis(span,columns),flexShrink:0,width:"content"===span?"auto":void 0,maxWidth:getColumnMaxWidth(span,columns,grow)},getBreakpointsStyles({sizes:{xs,sm,md,lg,xl},offsets:{xs:offsetXs,sm:offsetSm,md:offsetMd,lg:offsetLg,xl:offsetXl},orders:{xs:orderXs,sm:orderSm,md:orderMd,lg:orderLg,xl:orderXl},gutters:{xs:gutterXs,sm:gutterSm,md:gutterMd,lg:gutterLg,xl:gutterXl},theme,columns,grow}))})));var Box=__webpack_require__("./node_modules/@mantine/core/esm/Box/Box.js"),Col_defProp=Object.defineProperty,Col_getOwnPropSymbols=Object.getOwnPropertySymbols,Col_hasOwnProp=Object.prototype.hasOwnProperty,Col_propIsEnum=Object.prototype.propertyIsEnumerable,Col_defNormalProp=(obj,key,value)=>key in obj?Col_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value;const defaultProps={};const Col=(0,react.forwardRef)(((props,ref)=>{const _a=(0,MantineProvider.N4)("GridCol",defaultProps,props),{children,span,offset,offsetXs,offsetSm,offsetMd,offsetLg,offsetXl,xs,sm,md,lg,xl,order,orderXs,orderSm,orderMd,orderLg,orderXl,className,id,unstyled,variant}=_a,others=((source,exclude)=>{var target={};for(var prop in source)Col_hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&Col_getOwnPropSymbols)for(var prop of Col_getOwnPropSymbols(source))exclude.indexOf(prop)<0&&Col_propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["children","span","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","xs","sm","md","lg","xl","order","orderXs","orderSm","orderMd","orderLg","orderXl","className","id","unstyled","variant"]),ctx=useGridContext(),colSpan=span||ctx.columns,{classes,cx}=Col_styles({gutter:ctx.gutter,gutterXs:ctx.gutterXs,gutterSm:ctx.gutterSm,gutterMd:ctx.gutterMd,gutterLg:ctx.gutterLg,gutterXl:ctx.gutterXl,offset,offsetXs,offsetSm,offsetMd,offsetLg,offsetXl,xs,sm,md,lg,xl,order,orderXs,orderSm,orderMd,orderLg,orderXl,grow:ctx.grow,columns:ctx.columns,span:colSpan},{unstyled,name:"Grid",variant});return!function isValidSpan(span){return"auto"===span||"content"===span||"number"==typeof span&&span>0&&span%1==0}(colSpan)||colSpan>ctx.columns?null:react.createElement(Box.x,((a,b)=>{for(var prop in b||(b={}))Col_hasOwnProp.call(b,prop)&&Col_defNormalProp(a,prop,b[prop]);if(Col_getOwnPropSymbols)for(var prop of Col_getOwnPropSymbols(b))Col_propIsEnum.call(b,prop)&&Col_defNormalProp(a,prop,b[prop]);return a})({className:cx(classes.col,className),ref},others),children)}));Col.displayName="@mantine/core/Col";var Grid_styles_defProp=Object.defineProperty,Grid_styles_getOwnPropSymbols=Object.getOwnPropertySymbols,Grid_styles_hasOwnProp=Object.prototype.hasOwnProperty,Grid_styles_propIsEnum=Object.prototype.propertyIsEnumerable,Grid_styles_defNormalProp=(obj,key,value)=>key in obj?Grid_styles_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,Grid_styles_spreadValues=(a,b)=>{for(var prop in b||(b={}))Grid_styles_hasOwnProp.call(b,prop)&&Grid_styles_defNormalProp(a,prop,b[prop]);if(Grid_styles_getOwnPropSymbols)for(var prop of Grid_styles_getOwnPropSymbols(b))Grid_styles_propIsEnum.call(b,prop)&&Grid_styles_defNormalProp(a,prop,b[prop]);return a};function getGutterStyles(gutters,theme){return default_theme.j1.reduce(((acc,size)=>(void 0!==gutters[size]&&(acc[`@media (min-width: ${theme.breakpoints[size]})`]={margin:`calc(-${(0,get_size.a)({size:gutters[size],sizes:theme.spacing})} / 2)`}),acc)),{})}const Grid_styles=(0,create_styles.k)(((theme,{justify,align,gutter,gutterXs,gutterSm,gutterMd,gutterLg,gutterXl})=>({root:Grid_styles_spreadValues({margin:`calc(-${(0,get_size.a)({size:gutter,sizes:theme.spacing})} / 2)`,display:"flex",flexWrap:"wrap",justifyContent:justify,alignItems:align},getGutterStyles({xs:gutterXs,sm:gutterSm,md:gutterMd,lg:gutterLg,xl:gutterXl},theme))})));var Grid_defProp=Object.defineProperty,Grid_getOwnPropSymbols=Object.getOwnPropertySymbols,Grid_hasOwnProp=Object.prototype.hasOwnProperty,Grid_propIsEnum=Object.prototype.propertyIsEnumerable,Grid_defNormalProp=(obj,key,value)=>key in obj?Grid_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value;const Grid_defaultProps={gutter:"md",justify:"flex-start",align:"stretch",columns:12},Grid=(0,react.forwardRef)(((props,ref)=>{const _a=(0,MantineProvider.N4)("Grid",Grid_defaultProps,props),{gutter,gutterXs,gutterSm,gutterMd,gutterLg,gutterXl,children,grow,justify,align,columns,className,id,unstyled,variant}=_a,others=((source,exclude)=>{var target={};for(var prop in source)Grid_hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&Grid_getOwnPropSymbols)for(var prop of Grid_getOwnPropSymbols(source))exclude.indexOf(prop)<0&&Grid_propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["gutter","gutterXs","gutterSm","gutterMd","gutterLg","gutterXl","children","grow","justify","align","columns","className","id","unstyled","variant"]),{classes,cx}=Grid_styles({gutter,justify,align,gutterXs,gutterSm,gutterMd,gutterLg,gutterXl},{unstyled,name:"Grid",variant});return react.createElement(GridProvider,{value:{gutter,gutterXs,gutterSm,gutterMd,gutterLg,gutterXl,grow,columns}},react.createElement(Box.x,((a,b)=>{for(var prop in b||(b={}))Grid_hasOwnProp.call(b,prop)&&Grid_defNormalProp(a,prop,b[prop]);if(Grid_getOwnPropSymbols)for(var prop of Grid_getOwnPropSymbols(b))Grid_propIsEnum.call(b,prop)&&Grid_defNormalProp(a,prop,b[prop]);return a})({className:cx(classes.root,className),ref},others),children))}));Grid.Col=Col,Grid.displayName="@mantine/core/Grid"},"./node_modules/@mantine/hooks/esm/use-disclosure/use-disclosure.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>useDisclosure});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useDisclosure(initialState=!1,callbacks){const{onOpen,onClose}=callbacks||{},[opened,setOpened]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState),open=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setOpened((isOpened=>isOpened||(null==onOpen||onOpen(),!0)))}),[onOpen]),close=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setOpened((isOpened=>isOpened?(null==onClose||onClose(),!1):isOpened))}),[onClose]),toggle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{opened?close():open()}),[close,open,opened]);return[opened,{open,close,toggle}]}},"./node_modules/@tabler/icons-react/dist/esm/icons/IconAward.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>IconAward});var IconAward=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js").Z)("award","IconAward",[["path",{d:"M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0",key:"svg-0"}],["path",{d:"M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889",key:"svg-1"}],["path",{d:"M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889",key:"svg-2"}]])},"./node_modules/@tabler/icons-react/dist/esm/icons/IconBlockquote.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>IconBlockquote});var IconBlockquote=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js").Z)("blockquote","IconBlockquote",[["path",{d:"M6 15h15",key:"svg-0"}],["path",{d:"M21 19h-15",key:"svg-1"}],["path",{d:"M15 11h6",key:"svg-2"}],["path",{d:"M21 7h-6",key:"svg-3"}],["path",{d:"M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2",key:"svg-4"}],["path",{d:"M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2",key:"svg-5"}]])},"./node_modules/external-svg-loader/dist/svg-loader.min.js":()=>{(()=>{"use strict";var t={701:t=>{let e=0;t.exports={incr:()=>++e,decr:()=>--e,curr:()=>e}},941:t=>{t.exports=(t,e,r="")=>{const n=/url\(['"]?#([\w:.-]+)['"]?\)/g,a=/#([\w:.-]+)/g;return e.match(n)&&(e=e.replace(n,(function(e,r){return t[r]?`url(#${t[r]})`:e}))),["href","xlink:href"].includes(r)&&e.match(a)&&(e=e.replace(a,(function(e,r){return t[r]?`#${t[r]}`:e}))),e}},905:t=>{t.exports=(t,e,r)=>{const n=new RegExp("([^\r\n,{}]+)(,(?=[^}]*{)|s*{)","g");return t.replace(n,(function(t,n,a){if(n.match(/^\s*(@media|@.*keyframes|to|from|@font-face|1?[0-9]?[0-9])/))return n+a;const o=n.match(/#(\w+)/);return o&&r[o[1]]&&(n=n.replace(o[0],`#${r[o[1]]}`)),(n=n.replace(/^(\s*)/,"$1"+e+" "))+a}))}},741:(t,e,r)=>{function n(t){return new Promise(((e,r)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>r(t.error)}))}function a(t,e){const r=indexedDB.open(t);r.onupgradeneeded=()=>r.result.createObjectStore(e);const a=n(r);return(t,r)=>a.then((n=>r(n.transaction(e,t).objectStore(e))))}let o;function s(){return o||(o=a("keyval-store","keyval")),o}function i(t,e=s()){return e("readonly",(e=>n(e.get(t))))}function c(t,e,r=s()){return r("readwrite",(r=>(r.put(e,t),n(r.transaction))))}function l(t,e=s()){return e("readwrite",(e=>(t.forEach((t=>e.put(t[1],t[0]))),n(e.transaction))))}function u(t,e=s()){return e("readonly",(e=>Promise.all(t.map((t=>n(e.get(t)))))))}function d(t,e,r=s()){return r("readwrite",(r=>new Promise(((a,o)=>{r.get(t).onsuccess=function(){try{r.put(e(this.result),t),a(n(r.transaction))}catch(t){o(t)}}}))))}function f(t,e=s()){return e("readwrite",(e=>(e.delete(t),n(e.transaction))))}function h(t,e=s()){return e("readwrite",(e=>(t.forEach((t=>e.delete(t))),n(e.transaction))))}function b(t=s()){return t("readwrite",(t=>(t.clear(),n(t.transaction))))}function g(t,e){return t.openCursor().onsuccess=function(){this.result&&(e(this.result),this.result.continue())},n(t.transaction)}function p(t=s()){return t("readonly",(t=>{if(t.getAllKeys)return n(t.getAllKeys());const e=[];return g(t,(t=>e.push(t.key))).then((()=>e))}))}function y(t=s()){return t("readonly",(t=>{if(t.getAll)return n(t.getAll());const e=[];return g(t,(t=>e.push(t.value))).then((()=>e))}))}function m(t=s()){return t("readonly",(e=>{if(e.getAll&&e.getAllKeys)return Promise.all([n(e.getAllKeys()),n(e.getAll())]).then((([t,e])=>t.map(((t,r)=>[t,e[r]]))));const r=[];return t("readonly",(t=>g(t,(t=>r.push([t.key,t.value]))).then((()=>r))))}))}r.r(e),r.d(e,{clear:()=>b,createStore:()=>a,del:()=>f,delMany:()=>h,entries:()=>m,get:()=>i,getMany:()=>u,keys:()=>p,promisifyRequest:()=>n,set:()=>c,setMany:()=>l,update:()=>d,values:()=>y})}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const{get:t,set:e,del:n,entries:a}=r(741),o=r(905),s=r(941),i=r(701),c=[],l={},u=(t,e,r)=>{const{enableJs:n,disableUniqueIds:a,disableCssScoping:u,spriteIconId:d}=e,f=!!d,h=(new DOMParser).parseFromString(r,"text/html"),b=f?h.getElementById(d):h.querySelector("svg"),g=(()=>{if(c.length)return c;for(const t in document.body)t.startsWith("on")&&c.push(t);return c})(),p=l[t.getAttribute("data-id")]||new Set,y=t.getAttribute("data-id")||`svg-loader_${i.incr()}`,m={};if(a||Array.from(b.querySelectorAll("[id]")).forEach((t=>{const e=t.getAttribute("id"),r=`${e}_${i.incr()}`;t.setAttribute("id",r),m[e]=r})),Array.from(b.querySelectorAll("*")).concat(b).forEach((e=>{if("script"===e.tagName){if(e.remove(),!n)return;{const r=document.createElement("script");r.appendChild(e.childNodes[0]),t.appendChild(r)}}const r=[];for(let t=0;t<e.attributes.length;t++){const{name:a,value:o}=e.attributes[t],i=s(m,o,a);o!==i&&e.setAttribute(a,i),!g.includes(a.toLowerCase())||n?["href","xlink:href"].includes(a)&&o.startsWith("javascript")&&!n&&r.push(a):r.push(a)}if(r.forEach((t=>e.removeAttribute(t))),"style"===e.tagName&&!u){let t=o(e.innerHTML,`[data-id="${y}"]`,m);t=s(m,t),t!==e.innerHTML&&(e.innerHTML=t)}})),t.innerHTML=d?b.outerHTML:b.innerHTML,!f)for(let e=0;e<b.attributes.length;e++){const{name:r,value:n}=b.attributes[e];t.getAttribute(r)&&!p.has(r)||(p.add(r),t.setAttribute(r,n))}l[y]=p,t.setAttribute("data-id",y);const v=new CustomEvent("iconload",{bubbles:!0});if(t.dispatchEvent(v),t.getAttribute("oniconload")){t.setAttribute("onauxclick",t.getAttribute("oniconload"));const e=new CustomEvent("auxclick",{bubbles:!1,view:window});t.dispatchEvent(e),t.removeAttribute("onauxclick")}},d={},f={},h=async r=>{const a=new URL(r.getAttribute("data-src"),globalThis.location),o=a.toString().replace(a.hash,""),s=a.hash.replace("#",""),i=r.getAttribute("data-cache"),c="enabled"===r.getAttribute("data-js"),l="disabled"===r.getAttribute("data-unique-ids"),b="disabled"===r.getAttribute("data-css-scoping"),g=await(async e=>{let r;try{r=await t(`loader_${e}`)}catch(t){}if(!r)try{r=localStorage.getItem(`loader_${e}`)}catch(t){}if(r)return r=JSON.parse(r),Date.now()<r.expiry?r.data:void n(`loader_${e}`)})(o),p="disabled"!==i,y=u.bind(self,r,{enableJs:c,disableUniqueIds:l,disableCssScoping:b,spriteIconId:s});if(f[o]||p&&g){const t=f[o]||g;y(t)}else{if(d[o])return void setTimeout((()=>h(r)),20);d[o]=!0,fetch(o).then((t=>{if(!t.ok)throw Error(`Request for '${o}' returned ${t.status} (${t.statusText})`);return t.text()})).then((t=>{const r=t.toLowerCase().trim();if(!(r.startsWith("<svg")||r.startsWith("<?xml")||r.startsWith("<!doctype")))throw Error(`Resource '${o}' returned an invalid SVG file`);p&&(async(t,r,n)=>{const a=parseInt(n,10),o=JSON.stringify({data:r,expiry:Date.now()+(Number.isNaN(a)?2592e6:1e3*a)});try{await e(`loader_${t}`,o)}catch(e){try{localStorage.setItem(`loader_${t}`,o)}catch(t){console.warn("Failed to set cache: ",t)}}})(o,t,i),f[o]=t,y(t)})).catch((t=>{console.error(t)})).finally((()=>{delete d[o]}))}};let b;globalThis.IntersectionObserver&&(b=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&(h(t.target),b.unobserve(t.target))}))}),{rootMargin:"1200px"}));const g=[];function p(){Array.from(document.querySelectorAll("svg[data-src]:not([data-id])")).forEach((t=>{-1===g.indexOf(t)&&(g.push(t),"lazy"===t.getAttribute("data-loading")?b.observe(t):h(t))}))}let y=!1;if(globalThis.addEventListener){const m=setInterval((()=>{p()}),100);function v(){clearInterval(m),p(),y||(y=!0,new MutationObserver((t=>{t.some((t=>Array.from(t.addedNodes).some((t=>t.nodeType===Node.ELEMENT_NODE&&(t.getAttribute("data-src")&&!t.getAttribute("data-id")||t.querySelector("svg[data-src]:not([data-id])"))))))&&p(),t.forEach((t=>{"attributes"===t.type&&h(t.target)}))})).observe(document.documentElement,{attributeFilter:["data-src"],attributes:!0,childList:!0,subtree:!0}))}"interactive"===document.readyState?v():globalThis.addEventListener("DOMContentLoaded",(()=>{v()}))}globalThis.SVGLoader={},globalThis.SVGLoader.destroyCache=async()=>{try{const t=await a();for(const e of t)e[0].startsWith("loader_")&&await n(e[0])}catch(t){}Object.keys(localStorage).forEach((t=>{t.startsWith("loader_")&&localStorage.removeItem(t)}))}})()})()}}]);