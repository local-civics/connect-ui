"use strict";(self.webpackChunk_local_civics_candid_ui=self.webpackChunk_local_civics_candid_ui||[]).push([[3],{"./stories/UserProfilePage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MyProfile:()=>MyProfile,StudentProfile:()=>StudentProfile,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UserProfilePage_stories});__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),MantineProvider=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js"),Container=__webpack_require__("./node_modules/@mantine/core/esm/Container/Container.js"),Grid=__webpack_require__("./node_modules/@mantine/core/esm/Grid/Grid.js"),Stack=__webpack_require__("./node_modules/@mantine/core/esm/Stack/Stack.js"),Avatar=__webpack_require__("./node_modules/@mantine/core/esm/Avatar/Avatar.js"),Title=__webpack_require__("./node_modules/@mantine/core/esm/Title/Title.js"),Text=__webpack_require__("./node_modules/@mantine/core/esm/Text/Text.js"),Button=__webpack_require__("./node_modules/@mantine/core/esm/Button/Button.js"),Divider=__webpack_require__("./node_modules/@mantine/core/esm/Divider/Divider.js"),Flex=__webpack_require__("./node_modules/@mantine/core/esm/Flex/Flex.js"),IconAward=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconAward.js"),helpers=__webpack_require__("./src/components/core/avatar/helpers.ts"),styles=__webpack_require__("./src/components/user/styles.ts"),use_disclosure=(__webpack_require__("./node_modules/external-svg-loader/dist/svg-loader.min.js"),__webpack_require__("./node_modules/@mantine/hooks/esm/use-disclosure/use-disclosure.js")),create_styles=__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js"),Popover=__webpack_require__("./node_modules/@mantine/core/esm/Popover/Popover.js"),UnstyledButton=__webpack_require__("./node_modules/@mantine/core/esm/UnstyledButton/UnstyledButton.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),badge_styles=__webpack_require__("./src/components/badge/styles.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,create_styles.k)((theme=>({root:{marginTop:"-1rem",marginLeft:"-1rem",maxWidth:"initial"}})));function BadgeButton(props){const{classes}=useStyles(),[opened,{close,open}]=(0,use_disclosure.q)(!1);return(0,jsx_runtime.jsxs)(Popover.J,{width:400,position:"bottom",withArrow:!0,shadow:"md",opened,children:[(0,jsx_runtime.jsx)(Popover.J.Target,{children:(0,jsx_runtime.jsx)(UnstyledButton.k,{component:react_router_dom_dist.rU,to:props.href||"#",onMouseEnter:open,onMouseLeave:close,onClick:props.onClick,children:(0,jsx_runtime.jsx)(BadgeIcon,{...props})})}),(0,jsx_runtime.jsx)(Popover.J.Dropdown,{onMouseEnter:open,onMouseLeave:close,children:(0,jsx_runtime.jsx)(Container.W,{className:classes.root,fluid:!0,size:"lg",py:"xl",children:(0,jsx_runtime.jsxs)(Stack.K,{spacing:10,children:[(0,jsx_runtime.jsx)(Title.D,{size:18,children:props.title}),(0,jsx_runtime.jsx)(Text.x,{children:props.description})]})})})]})}function BadgeIcon(props){const{classes}=(0,badge_styles.P)();return(0,jsx_runtime.jsxs)("div",{className:classes.badgeIcon,children:[(0,jsx_runtime.jsxs)("svg",{style:{width:"100%",height:"100%"},viewBox:"0 0 940 1100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[!!props.level&&props.level>0&&(0,jsx_runtime.jsx)("path",{d:"M482.921 47.8734L891.581 301.279C892.463 301.826 893 302.79 893 303.828V796.694C893 797.78 892.413 798.781 891.466 799.311L466.728 1037.16C465.809 1037.68 464.687 1037.67 463.772 1037.15L48.5103 799.603C47.5763 799.069 47 798.076 47 796.999V304.573C47 303.511 47.5618 302.528 48.4771 301.989L479.817 47.8383C480.777 47.2722 481.973 47.2857 482.921 47.8734Z",fill:"none",stroke:"#1EE2B0",strokeWidth:"94"}),!!props.level&&props.level>1&&(0,jsx_runtime.jsx)("path",{d:"M494.044 136.608L824.747 341.5C832.987 346.606 838 355.609 838 365.302V764.144C838 774.282 832.52 783.628 823.672 788.579L479.785 980.994C471.211 985.791 460.749 985.744 452.219 980.868L116.106 788.758C107.383 783.773 102 774.496 102 764.449V366.047C102 356.129 107.247 346.95 115.795 341.918L465.092 136.281C474.055 131.004 485.203 131.13 494.044 136.608Z",fill:"none",stroke:"#FFD44D",strokeWidth:"44"}),(0,jsx_runtime.jsx)("path",{d:"M467.125 26.2992C476.092 21.0157 487.25 21.1418 496.095 26.6267L904.756 280.032C912.991 285.138 918 294.139 918 303.828V796.694C918 806.828 912.523 816.172 903.681 821.124L478.943 1058.98C470.364 1063.78 459.894 1063.73 451.359 1058.85L36.0968 821.304C27.3791 816.317 22 807.043 22 796.999V304.573C22 294.658 27.2435 285.483 35.786 280.449L467.125 26.2992Z",fill:"none",stroke:"#3BD0F2",strokeWidth:"44"})]}),(0,jsx_runtime.jsx)("div",{className:classes.badgeIconImageContainer,children:(0,jsx_runtime.jsx)("div",{style:{display:"flex",height:"100%"},children:(0,jsx_runtime.jsx)("svg",{"data-cache":"disabled","data-src":props.iconURL,className:classes.badgeIconImage,viewBox:"0 0 32 32",width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"})})})]})}BadgeButton.displayName="BadgeButton",BadgeIcon.displayName="BadgeIcon";try{BadgeButton.displayName="BadgeButton",BadgeButton.__docgenInfo={description:"BadgeButton",displayName:"BadgeButton",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"available"'},{value:'"in progress"'},{value:'"locked"'},{value:'"completed"'}]}},level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"number"}},iconURL:{defaultValue:null,description:"",name:"iconURL",required:!0,type:{name:"string"}},estimate:{defaultValue:null,description:"",name:"estimate",required:!0,type:{name:"string"}},tags:{defaultValue:null,description:"",name:"tags",required:!0,type:{name:"string[]"}},rating:{defaultValue:null,description:"",name:"rating",required:!0,type:{name:"number"}},syllabus:{defaultValue:null,description:"",name:"syllabus",required:!0,type:{name:"BadgeSyllabusData"}},uploadedOn:{defaultValue:null,description:"",name:"uploadedOn",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/badge/BadgeButton.tsx#BadgeButton"]={docgenInfo:BadgeButton.__docgenInfo,name:"BadgeButton",path:"src/components/badge/BadgeButton.tsx#BadgeButton"})}catch(__react_docgen_typescript_loader_error){}var IconBlockquote=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBlockquote.js");function UserProfilePage(props){const theme=(0,MantineProvider.rZ)(),{classes}=(0,styles.j)(),avatarURL=(0,helpers.t)(props.avatarURL,props.fullName,{size:200,fontSize:50}),badgeAchievements=props.badges.map((b=>(0,jsx_runtime.jsx)(BadgeButton,{...b,onClick:()=>props.onBadgeClick&&props.onBadgeClick(b)},b.href)));return(0,jsx_runtime.jsx)(Container.W,{size:"lg",pb:"xl",pt:"lg",children:(0,jsx_runtime.jsxs)(Grid.r,{children:[(0,jsx_runtime.jsx)(Grid.r.Col,{md:4,children:(0,jsx_runtime.jsxs)(Stack.K,{children:[(0,jsx_runtime.jsx)(Avatar.q,{size:200,className:classes.userAvatar,src:avatarURL,radius:200}),(0,jsx_runtime.jsx)(Title.D,{color:"dark.4",children:props.fullName}),(0,jsx_runtime.jsx)(Text.x,{children:props.email}),(0,jsx_runtime.jsx)(Button.z,{onClick:props.onCtaClick,type:"button",children:props.ctaLabel}),(0,jsx_runtime.jsx)(Divider.i,{}),(0,jsx_runtime.jsxs)(Flex.k,{gap:10,align:"center",children:[(0,jsx_runtime.jsx)(IconBlockquote.Z,{color:theme.colors.dark[4],size:16}),(0,jsx_runtime.jsx)(Text.x,{color:"dark.4",size:16,weight:800,children:"My impact statement"})]}),(0,jsx_runtime.jsx)(Text.x,{children:props.impactStatement||"I haven't set my impact statement yet."})]})}),(0,jsx_runtime.jsxs)(Grid.r.Col,{md:8,children:[(0,jsx_runtime.jsxs)(Flex.k,{align:"center",gap:5,children:[(0,jsx_runtime.jsx)(IconAward.Z,{size:30,color:theme.colors.dark[4]}),(0,jsx_runtime.jsx)(Title.D,{size:30,color:"dark.4",children:"Achievements"})]}),!badgeAchievements.length&&(0,jsx_runtime.jsx)(Text.x,{size:18,mt:25,children:"I don't have any achievements yet."}),badgeAchievements.length&&(0,jsx_runtime.jsx)(Flex.k,{gap:5,py:15,wrap:"wrap",children:badgeAchievements})]})]})})}UserProfilePage.displayName="UserProfilePage";try{UserProfilePage.displayName="UserProfilePage",UserProfilePage.__docgenInfo={description:"UserProfilePage",displayName:"UserProfilePage",props:{fullName:{defaultValue:null,description:"",name:"fullName",required:!0,type:{name:"string"}},firstName:{defaultValue:null,description:"",name:"firstName",required:!0,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!0,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!0,type:{name:"string"}},avatarURL:{defaultValue:null,description:"",name:"avatarURL",required:!0,type:{name:"string"}},impactStatement:{defaultValue:null,description:"",name:"impactStatement",required:!0,type:{name:"string"}},badges:{defaultValue:null,description:"",name:"badges",required:!0,type:{name:"BadgeData[]"}},ctaLabel:{defaultValue:null,description:"",name:"ctaLabel",required:!0,type:{name:"string"}},onCtaClick:{defaultValue:null,description:"",name:"onCtaClick",required:!1,type:{name:"(() => void)"}},onBadgeClick:{defaultValue:null,description:"",name:"onBadgeClick",required:!1,type:{name:"((badge: BadgeData) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/user/UserProfilePage.tsx#UserProfilePage"]={docgenInfo:UserProfilePage.__docgenInfo,name:"UserProfilePage",path:"src/pages/user/UserProfilePage.tsx#UserProfilePage"})}catch(__react_docgen_typescript_loader_error){}var AppLayout=__webpack_require__("./src/layouts/app/AppLayout.tsx");const UserProfilePage_stories={title:"Page/UserProfilePage",component:UserProfilePage,tags:["autodocs"],parameters:{layout:"fullscreen"}},Template={render:args=>(0,jsx_runtime.jsx)("div",{className:"h-full w-full overscroll-none font-proxima",children:(0,jsx_runtime.jsx)(dist.VA,{children:(0,jsx_runtime.jsx)(AppLayout.L,{...args,page:(0,jsx_runtime.jsx)(UserProfilePage,{...args})})})})},MyProfile={...Template,args:{fullName:"Jane Doe",email:"jane.doe@site.com",avatarURL:"",impactStatement:"I would like to encourage my community to become more educated on issues that directly affect us, as well as make sure my community is a place where everyone is welcome.",badges:[{displayName:"Onboarding Badge",iconURL:"https://cdn.localcivics.io/v1/store/images/XkYCJEdZJXEmsEQYLWiTA7?version=RcpvwzVT7sp9z3mJetAj2m",description:"Introduces students to concepts and practices that concern community relationships and civic life. These introductory activities provide students with a foundation from which they can begin to explore civic life and develop there civic identity."},{displayName:"College Explorer Badge",iconURL:"https://cdn.localcivics.io/v1/store/images/NXCee9aQQbf4K7WofxkSaw?version=6dnicD9NiKDbP66ToNXScs",description:"Introduces students to concepts and practices that concern community relationships and civic life. These introductory activities provide students with a foundation from which they can begin to explore civic life and develop there civic identity."},{displayName:"Civic Lens Badge",iconURL:"https://cdn.localcivics.io/v1/store/images/KW8tojvnMi3rj4Dv2sCRcw?version=Ce9anGUvVwTeJs4zB4FrZK",description:"Introduces students to concepts and practices that concern community relationships and civic life. These introductory activities provide students with a foundation from which they can begin to explore civic life and develop there civic identity."},{displayName:"Civic Lens 2 Badge",level:1,iconURL:"https://cdn.localcivics.io/v1/store/images/KW8tojvnMi3rj4Dv2sCRcw?version=Ce9anGUvVwTeJs4zB4FrZK",description:"Introduces students to concepts and practices that concern community relationships and civic life. These introductory activities provide students with a foundation from which they can begin to explore civic life and develop there civic identity."},{displayName:"Civic Lens 3 Badge",level:2,iconURL:"https://cdn.localcivics.io/v1/store/images/KW8tojvnMi3rj4Dv2sCRcw?version=Ce9anGUvVwTeJs4zB4FrZK",description:"Introduces students to concepts and practices that concern community relationships and civic life. These introductory activities provide students with a foundation from which they can begin to explore civic life and develop there civic identity."}],ctaLabel:"Edit Profile"}},StudentProfile={...Template,args:{fullName:"Jane Doe",email:"jane.doe@site.com",avatarURL:"",impactStatement:"I would like to encourage my community to become more educated on issues that directly affect us, as well as make sure my community is a place where everyone is welcome.",ctaLabel:"Add to class"}};MyProfile.parameters={...MyProfile.parameters,docs:{...MyProfile.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    fullName: \'Jane Doe\',\n    email: \'jane.doe@site.com\',\n    avatarURL: \'\',\n    impactStatement: \'I would like to encourage my community to become more educated on issues that directly affect us, as well as make sure my community is a place where everyone is welcome.\',\n    badges: [{\n      displayName: "Onboarding Badge",\n      iconURL: "https://cdn.localcivics.io/v1/store/images/XkYCJEdZJXEmsEQYLWiTA7?version=RcpvwzVT7sp9z3mJetAj2m",\n      description: "Introduces students to concepts and practices that concern community relationships and civic life. These introductory activities provide students with a foundation from which they can begin to explore civic life and develop there civic identity."\n    }, {\n      displayName: "College Explorer Badge",\n      iconURL: "https://cdn.localcivics.io/v1/store/images/NXCee9aQQbf4K7WofxkSaw?version=6dnicD9NiKDbP66ToNXScs",\n      description: "Introduces students to concepts and practices that concern community relationships and civic life. These introductory activities provide students with a foundation from which they can begin to explore civic life and develop there civic identity."\n    }, {\n      displayName: "Civic Lens Badge",\n      iconURL: "https://cdn.localcivics.io/v1/store/images/KW8tojvnMi3rj4Dv2sCRcw?version=Ce9anGUvVwTeJs4zB4FrZK",\n      description: "Introduces students to concepts and practices that concern community relationships and civic life. These introductory activities provide students with a foundation from which they can begin to explore civic life and develop there civic identity."\n    }, {\n      displayName: "Civic Lens 2 Badge",\n      level: 1,\n      iconURL: "https://cdn.localcivics.io/v1/store/images/KW8tojvnMi3rj4Dv2sCRcw?version=Ce9anGUvVwTeJs4zB4FrZK",\n      description: "Introduces students to concepts and practices that concern community relationships and civic life. These introductory activities provide students with a foundation from which they can begin to explore civic life and develop there civic identity."\n    }, {\n      displayName: "Civic Lens 3 Badge",\n      level: 2,\n      iconURL: "https://cdn.localcivics.io/v1/store/images/KW8tojvnMi3rj4Dv2sCRcw?version=Ce9anGUvVwTeJs4zB4FrZK",\n      description: "Introduces students to concepts and practices that concern community relationships and civic life. These introductory activities provide students with a foundation from which they can begin to explore civic life and develop there civic identity."\n    }],\n    ctaLabel: \'Edit Profile\'\n  }\n}',...MyProfile.parameters?.docs?.source}}},StudentProfile.parameters={...StudentProfile.parameters,docs:{...StudentProfile.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    fullName: 'Jane Doe',\n    email: 'jane.doe@site.com',\n    avatarURL: '',\n    impactStatement: 'I would like to encourage my community to become more educated on issues that directly affect us, as well as make sure my community is a place where everyone is welcome.',\n    ctaLabel: 'Add to class'\n  }\n}",...StudentProfile.parameters?.docs?.source}}};const __namedExportsOrder=["MyProfile","StudentProfile"]},"./src/components/badge/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>useBadgeStyles});const useBadgeStyles=(0,__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js").k)((theme=>({badgeButton:{"&:hover":{backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[5]:theme.colors.blue[6]}},badgeIcon:{width:"100px",height:"100px",position:"relative",overflow:"hidden"},badgeIconImageContainer:{position:"absolute",left:0,right:0,top:0,bottom:0,margin:"auto"},badgeIconImage:{margin:"auto",width:"40px",height:"40px",verticalAlign:"middle"},badgeSyllabusWrapper:{paddingTop:`calc(${theme.spacing.xl} * 2)`,paddingBottom:`calc(${theme.spacing.xl} * 2)`,minHeight:650},badgeSyllabusTitle:{marginBottom:`calc(${theme.spacing.xl} * 1.5)`},badgeSyllabusSessionItem:{borderBottom:`1px solid ${theme.colors.gray[3]}`},badgeSyllabusControl:{fontFamily:`Greycliff CF, ${theme.fontFamily}`,[theme.fn.smallerThan("md")]:{width:"100%"}}})))}}]);