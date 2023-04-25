"use strict";(self.webpackChunk_local_civics_candid_ui=self.webpackChunk_local_civics_candid_ui||[]).push([[586],{"./stories/LessonPostPage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LessonPostPage_stories});__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),AppLayout=__webpack_require__("./src/layouts/app/AppLayout.tsx"),Carousel=__webpack_require__("./node_modules/@mantine/carousel/esm/Carousel.js"),use_media_query=__webpack_require__("./node_modules/@mantine/hooks/esm/use-media-query/use-media-query.js"),create_styles=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),rem=__webpack_require__("./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js"),MantineProvider=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js"),Stack=__webpack_require__("./node_modules/@mantine/core/esm/Stack/Stack.js"),ActionIcon=__webpack_require__("./node_modules/@mantine/core/esm/ActionIcon/ActionIcon.js"),Text=__webpack_require__("./node_modules/@mantine/core/esm/Text/Text.js"),Container=__webpack_require__("./node_modules/@mantine/core/esm/Container/Container.js"),Title=__webpack_require__("./node_modules/@mantine/core/esm/Title/Title.js"),Button=__webpack_require__("./node_modules/@mantine/core/esm/Button/Button.js"),Group=__webpack_require__("./node_modules/@mantine/core/esm/Group/Group.js"),Popover=__webpack_require__("./node_modules/@mantine/core/esm/Popover/Popover.js"),Input=__webpack_require__("./node_modules/@mantine/core/esm/Input/Input.js"),CopyButton=__webpack_require__("./node_modules/@mantine/core/esm/CopyButton/CopyButton.js"),Tabs=__webpack_require__("./node_modules/@mantine/core/esm/Tabs/Tabs.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),PostFAQ=__webpack_require__("./src/components/post/PostFAQ.tsx"),PostOverview=__webpack_require__("./src/components/post/PostOverview.tsx"),Accordion=__webpack_require__("./node_modules/@mantine/core/esm/Accordion/Accordion.js"),createReactComponent=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js"),IconCircleNumber1=(0,createReactComponent.Z)("circle-number-1","IconCircleNumber1",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M10 10l2 -2v8",key:"svg-1"}]]),IconCircleNumber2=(0,createReactComponent.Z)("circle-number-2","IconCircleNumber2",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3",key:"svg-1"}]]),IconCircleNumber3=(0,createReactComponent.Z)("circle-number-3","IconCircleNumber3",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1",key:"svg-1"}]]),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MAX_ITEMS_PREVIEW=3,useStyles=(0,create_styles.k)((theme=>({wrapper:{paddingTop:`calc(${theme.spacing.xl} * 2)`,paddingBottom:`calc(${theme.spacing.xl} * 2)`,minHeight:650},title:{marginBottom:`calc(${theme.spacing.xl} * 1.5)`},card:{maxWidth:"22rem",border:`${(0,rem.h)(1)} solid ${"dark"===theme.colorScheme?theme.colors.dark[5]:theme.colors.gray[1]}`}})));function PostPreview(props){const{classes}=useStyles(),theme=(0,MantineProvider.rZ)(),title=props.previewTitle||"Preview",itemLabelPrefix=props.previewItemLabelPrefix||"Question",maxPreview=Math.min(MAX_ITEMS_PREVIEW,props.previewItems.length),items=[...props.previewItems.slice(0,maxPreview),...[...Array(props.previewItemCount).keys()].slice(maxPreview).map((i=>({title:""})))].map(((item,i)=>(0,jsx_runtime.jsxs)(Accordion.U.Item,{value:i.toString(),children:[(0,jsx_runtime.jsxs)(Accordion.U.Control,{icon:accordianIcon(theme,i),disabled:i>=maxPreview,children:[itemLabelPrefix," #",i+1]}),(0,jsx_runtime.jsx)(Accordion.U.Panel,{children:item.title})]})));return(0,jsx_runtime.jsxs)(Container.W,{fluid:!0,p:25,mx:0,className:classes.wrapper,children:[(0,jsx_runtime.jsx)(Title.D,{className:classes.title,children:title}),!!props.previewDescription&&(0,jsx_runtime.jsxs)(Text.x,{size:"md",children:[" ",props.previewDescription," "]}),(0,jsx_runtime.jsx)(Container.W,{size:"sm",px:0,mx:0,children:(0,jsx_runtime.jsx)(Accordion.U,{children:items})})]})}function accordianIcon(theme,i){switch(i){case 0:return(0,jsx_runtime.jsx)(IconCircleNumber1,{color:theme.colors.dark[4]});case 1:return(0,jsx_runtime.jsx)(IconCircleNumber2,{color:theme.colors.dark[4]});case 2:return(0,jsx_runtime.jsx)(IconCircleNumber3,{color:theme.colors.dark[4]});default:return null}}PostPreview.displayName="PostPreview";try{PostPreview.displayName="PostPreview",PostPreview.__docgenInfo={description:"PostPreview",displayName:"PostPreview",props:{previewTitle:{defaultValue:null,description:"",name:"previewTitle",required:!1,type:{name:"string"}},previewItems:{defaultValue:null,description:"",name:"previewItems",required:!0,type:{name:"{ title: string; }[]"}},previewItemCount:{defaultValue:null,description:"",name:"previewItemCount",required:!0,type:{name:"number"}},previewItemLabelPrefix:{defaultValue:null,description:"",name:"previewItemLabelPrefix",required:!1,type:{name:"string"}},previewDescription:{defaultValue:null,description:"",name:"previewDescription",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/post/PostPreview.tsx#PostPreview"]={docgenInfo:PostPreview.__docgenInfo,name:"PostPreview",path:"src/components/post/PostPreview.tsx#PostPreview"})}catch(__react_docgen_typescript_loader_error){}var numbers=__webpack_require__("./src/utils/numbers.ts"),Dots=__webpack_require__("./src/pages/post/Dots.tsx"),IconTransitionRight=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconTransitionRight.js"),IconBrandGoogle=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandGoogle.js"),IconLetterC=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconLetterC.js"),IconBrandWhatsapp=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandWhatsapp.js"),IconBrandFacebook=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandFacebook.js"),IconBrandTwitter=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandTwitter.js"),IconAt=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconAt.js"),IconBrandReddit=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandReddit.js"),IconBrandLinkedin=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandLinkedin.js"),IconThumbUp=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconThumbUp.js"),IconThumbUpFilled=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconThumbUpFilled.js"),IconBookmark=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBookmark.js"),IconBookmarkOff=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBookmarkOff.js"),IconTargetArrow=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconTargetArrow.js"),IconShare3=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconShare3.js"),IconCopy=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconCopy.js");const LessonPostPage_useStyles=(0,create_styles.k)((theme=>({root:{marginTop:"-1rem",marginLeft:"-1rem",maxWidth:"initial"},inner:{display:"flex",position:"relative",justifyContent:"space-between",[theme.fn.smallerThan("md")]:{flexDirection:"column"}},dots:{position:"absolute",color:"dark"===theme.colorScheme?theme.colors.dark[5]:theme.colors.gray[1],[theme.fn.smallerThan("md")]:{display:"none"}},content:{zIndex:1,paddingTop:`calc(${theme.spacing.xl} * 4)`,paddingBottom:`calc(${theme.spacing.xl} * 3)`,width:"100%",overflowX:"hidden",[theme.fn.smallerThan("md")]:{marginRight:0}},title:{color:theme.white,textAlign:"center",fontFamily:`Greycliff CF, ${theme.fontFamily}`,fontWeight:900,lineHeight:1.05,maxWidth:(0,rem.h)(500),fontSize:(0,rem.h)(48)},control:{paddingLeft:(0,rem.h)(50),paddingRight:(0,rem.h)(50),fontFamily:`Greycliff CF, ${theme.fontFamily}`,fontSize:(0,rem.h)(22),[theme.fn.smallerThan("md")]:{width:"100%"}}}))),FAQ_QUESTIONS=[{control:"When can I start this lesson?",panel:""},{control:"Can I earn class credit for this lesson?",panel:""},{control:"How do I assign a lesson?",panel:""},{control:"Will my responses be auto-saved?",panel:""},{control:"Can I try a lesson for free?",panel:""},{control:"Can I download a lesson offline?",panel:""},{control:"Who can I contact if I have another question?",panel:""}],SHARE_LINKS=[{title:"Assign",icon:IconTransitionRight.Z,onClick:props=>props.onAssign&&props.onAssign()},{title:"Google",icon:IconBrandGoogle.Z,href:"https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fclassroom.google.com&passive=true"},{title:"Clever",icon:IconLetterC.Z,href:"https://clever.com/login"},{title:"WhatsApp",icon:IconBrandWhatsapp.Z,href:props=>`https://api.whatsapp.com/send/?text=${encodeURIComponent(props.href)}`},{title:"Facebook",icon:IconBrandFacebook.Z,href:"https://www.facebook.com/login"},{title:"Twitter",icon:IconBrandTwitter.Z,href:"https://twitter.com/i/flow/login"},{title:"Email",icon:IconAt.Z,href:props=>`mailto:?body=${encodeURIComponent(props.href)}`},{title:"Reddit",icon:IconBrandReddit.Z,href:props=>`https://www.reddit.com/submit?url=${encodeURIComponent(props.href)}`},{title:"LinkedIn",icon:IconBrandLinkedin.Z,href:"https://www.linkedin.com/checkpoint/lg/login"}];function LessonPostPage(props){const{classes}=LessonPostPage_useStyles(),theme=(0,MantineProvider.rZ)(),mobile=(0,use_media_query.a)(`(max-width: ${theme.breakpoints.sm})`),LikeIcon=props.liked?IconThumbUpFilled.Z:IconThumbUp.Z,SaveIcon=props.saved?IconBookmarkOff.Z:IconBookmark.Z,likeLabel=props.liked?"Liked by you":"Like",saveLabel=props.saved?"Saved for later":"Save",likes=props.likes||0,shareLinks=SHARE_LINKS.map((l=>(0,jsx_runtime.jsx)(Carousel.l.Slide,{py:6,size:20,children:(0,jsx_runtime.jsxs)(Stack.K,{w:"3.5rem",align:"center",spacing:10,children:[!!l.href&&(0,jsx_runtime.jsx)(ActionIcon.A,{component:react_router_dom_dist.rU,to:l.href?"string"==typeof l.href?l.href:l.href(props):"#",target:"_blank",onClick:()=>props.onShare&&props.onShare(l.title),rel:"noopener noreferrer",size:"xl",variant:"light",radius:"xl",children:(0,jsx_runtime.jsx)(l.icon,{size:"1rem"})}),!!l.onClick&&(0,jsx_runtime.jsx)(ActionIcon.A,{onClick:()=>{l.onClick(props)},size:"xl",variant:"light",radius:"xl",children:(0,jsx_runtime.jsx)(l.icon,{size:"1rem"})}),(0,jsx_runtime.jsx)(Text.x,{color:"dark.4",size:"xs",children:l.title})]})})));return(0,jsx_runtime.jsxs)(Container.W,{className:classes.root,fluid:!0,size:"lg",px:0,pb:"xl",children:[(0,jsx_runtime.jsxs)(Stack.K,{pl:0,pr:5,pb:5,sx:theme=>({backgroundSize:"cover",backgroundPosition:"center",backgroundImage:theme.fn.gradient({from:"blue.9",to:"blue.5",deg:20}),color:theme.white}),children:[(0,jsx_runtime.jsx)(Dots.b,{className:classes.dots,style:{left:0,top:0}}),(0,jsx_runtime.jsx)(Dots.b,{className:classes.dots,style:{left:60,top:0}}),(0,jsx_runtime.jsx)(Dots.b,{className:classes.dots,style:{left:0,top:140}}),(0,jsx_runtime.jsx)(Dots.b,{className:classes.dots,style:{right:25,top:60}}),(0,jsx_runtime.jsxs)(Stack.K,{spacing:25,px:0,className:classes.content,align:"center",children:[(0,jsx_runtime.jsx)(IconTargetArrow.Z,{size:24}),(0,jsx_runtime.jsx)(Title.D,{className:classes.title,children:props.title}),(0,jsx_runtime.jsx)("div",{style:{width:"max-content"},children:(0,jsx_runtime.jsx)(Button.z,{onClick:props.onStart,variant:"gradient",gradient:{from:"indigo",to:"cyan"},size:"xl",className:classes.control,mt:10,children:"Get started"})})]}),(0,jsx_runtime.jsxs)(Stack.K,{ml:"auto",mb:5,mr:5,children:[likes>1&&(0,jsx_runtime.jsxs)(Group.Z,{ml:"auto",pr:5,spacing:2,color:"white",children:[(0,jsx_runtime.jsx)(Text.x,{size:"sm",children:"Liked by"}),(0,jsx_runtime.jsxs)(Text.x,{size:"sm",weight:700,children:[(0,numbers.J)(likes),"+"]}),(0,jsx_runtime.jsx)(Text.x,{size:"sm",children:"people"})]}),(0,jsx_runtime.jsxs)(Button.z.Group,{children:[(0,jsx_runtime.jsx)(Button.z,{radius:"lg",size:"xs",leftIcon:(0,jsx_runtime.jsx)(LikeIcon,{size:"1rem"}),variant:"filled",onClick:props.onLike,children:likeLabel}),(0,jsx_runtime.jsxs)(Popover.J,{position:"bottom-end",width:8*props.href.length,withArrow:!0,withinPortal:!0,shadow:"md",children:[(0,jsx_runtime.jsx)(Popover.J.Target,{children:(0,jsx_runtime.jsx)(Button.z,{size:"xs",leftIcon:(0,jsx_runtime.jsx)(IconShare3.Z,{size:"1rem"}),variant:"filled",children:"Share"})}),(0,jsx_runtime.jsx)(Popover.J.Dropdown,{w:"25rem !important",children:(0,jsx_runtime.jsxs)(Stack.K,{px:5,mx:0,spacing:15,children:[(0,jsx_runtime.jsx)(Text.x,{weight:700,size:"sm",color:"dark.4",mt:5,children:"Share"}),(0,jsx_runtime.jsx)(Carousel.l,{pl:"2rem",pr:0,slideGap:"xs",align:"start",slidesToScroll:mobile?2:4,styles:{controls:{paddingLeft:0,paddingRight:0},indicators:{bottom:"-0.5rem"},indicator:{backgroundColor:theme.colors.gray[6],width:(0,rem.h)(12),height:(0,rem.h)(4),transition:"width 250ms ease","&[data-active]":{width:(0,rem.h)(40)}}},children:shareLinks}),(0,jsx_runtime.jsxs)(Group.Z,{grow:!0,children:[(0,jsx_runtime.jsx)(Input.I,{disabled:!0,maw:"initial",value:props.href,icon:(0,jsx_runtime.jsx)(IconCopy.Z,{size:"1rem"}),placeholder:"Uh, something is not right"}),(0,jsx_runtime.jsx)(CopyButton.q,{value:props.href,children:({copied,copy})=>(0,jsx_runtime.jsx)(Button.z,{color:copied?"teal":"blue",onClick:()=>{copy(),props.onCopy&&props.onCopy()},children:copied?"Copied":"Copy"})})]})]})})]}),(0,jsx_runtime.jsx)(Button.z,{radius:"lg",size:"xs",leftIcon:(0,jsx_runtime.jsx)(SaveIcon,{size:"1rem"}),variant:"filled",onClick:props.onSave,children:saveLabel})]})]})]}),(0,jsx_runtime.jsxs)(Tabs.m,{defaultValue:"overview",children:[(0,jsx_runtime.jsxs)(Tabs.m.List,{children:[(0,jsx_runtime.jsx)(Tabs.m.Tab,{value:"overview",children:(0,jsx_runtime.jsx)(Text.x,{px:15,py:10,children:"Overview"})}),(0,jsx_runtime.jsx)(Tabs.m.Tab,{value:"preview",children:(0,jsx_runtime.jsx)(Text.x,{px:15,py:10,children:"Preview"})}),(0,jsx_runtime.jsx)(Tabs.m.Tab,{value:"faq",children:(0,jsx_runtime.jsx)(Text.x,{px:15,py:10,children:"FAQ"})})]}),(0,jsx_runtime.jsx)(Tabs.m.Panel,{value:"overview",pt:"xs",children:(0,jsx_runtime.jsx)(PostOverview.j,{...props})}),(0,jsx_runtime.jsx)(Tabs.m.Panel,{value:"preview",pt:"xs",children:(0,jsx_runtime.jsx)(PostPreview,{...props})}),(0,jsx_runtime.jsx)(Tabs.m.Panel,{value:"faq",pt:"xs",children:(0,jsx_runtime.jsx)(PostFAQ.Z,{questions:FAQ_QUESTIONS})})]})]})}LessonPostPage.displayName="LessonPostPage";try{LessonPostPage.displayName="LessonPostPage",LessonPostPage.__docgenInfo={description:"LessonPostPage",displayName:"LessonPostPage",props:{overviewTitle:{defaultValue:null,description:"",name:"overviewTitle",required:!1,type:{name:"string"}},overviewDescription:{defaultValue:null,description:"",name:"overviewDescription",required:!1,type:{name:"string"}},overviewEstimate:{defaultValue:null,description:"",name:"overviewEstimate",required:!1,type:{name:"string"}},overviewTags:{defaultValue:null,description:"",name:"overviewTags",required:!0,type:{name:"string[]"}},previewTitle:{defaultValue:null,description:"",name:"previewTitle",required:!1,type:{name:"string"}},previewItems:{defaultValue:null,description:"",name:"previewItems",required:!0,type:{name:"{ title: string; }[]"}},previewItemCount:{defaultValue:null,description:"",name:"previewItemCount",required:!0,type:{name:"number"}},previewItemLabelPrefix:{defaultValue:null,description:"",name:"previewItemLabelPrefix",required:!1,type:{name:"string"}},previewDescription:{defaultValue:null,description:"",name:"previewDescription",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},liked:{defaultValue:null,description:"",name:"liked",required:!1,type:{name:"boolean"}},saved:{defaultValue:null,description:"",name:"saved",required:!1,type:{name:"boolean"}},likes:{defaultValue:null,description:"",name:"likes",required:!1,type:{name:"number"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"(() => void)"}},onLike:{defaultValue:null,description:"",name:"onLike",required:!1,type:{name:"(() => void)"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!1,type:{name:"(() => void)"}},onAssign:{defaultValue:null,description:"",name:"onAssign",required:!1,type:{name:"(() => void)"}},onCopy:{defaultValue:null,description:"",name:"onCopy",required:!1,type:{name:"(() => void)"}},onShare:{defaultValue:null,description:"",name:"onShare",required:!1,type:{name:"((via: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/post/LessonPostPage.tsx#LessonPostPage"]={docgenInfo:LessonPostPage.__docgenInfo,name:"LessonPostPage",path:"src/pages/post/LessonPostPage.tsx#LessonPostPage"})}catch(__react_docgen_typescript_loader_error){}const MOCK_QUESTIONS=[{title:"What is your favorite color?"},{title:"What is you least favorite food?"},{title:"Which country do you love the most?"}],MOCK_TAGS=["tag #1","tag #2","tag #3","tag #4","tag #5","tag #6","tag #7","tag #8","tag #9","tag #10","tag #11","tag #12","tag #13"],LessonPostPage_stories={title:"LessonPostPage",component:LessonPostPage,tags:["autodocs"],parameters:{layout:"fullscreen"}},Default={...{render:args=>(0,jsx_runtime.jsx)("div",{className:"h-full w-full overscroll-none font-proxima",children:(0,jsx_runtime.jsx)(dist.VA,{children:(0,jsx_runtime.jsx)(AppLayout.L,{...args,page:(0,jsx_runtime.jsx)(LessonPostPage,{...args,title:args.title||"30 Second Elevator Pitch",likes:args.likes||3e4,href:"https://www.localcivics.io/L_1uo12y431982",overviewDescription:args.overviewDescription||"Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.",overviewTags:args.overviewTags||MOCK_TAGS,overviewEstimate:args.overviewEstimate||"30m",previewItems:args.previewItems||MOCK_QUESTIONS,previewItemCount:args.previewItemCount||25})})})})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...Template\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);