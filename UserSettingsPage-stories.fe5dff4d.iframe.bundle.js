"use strict";(self.webpackChunk_local_civics_candid_ui=self.webpackChunk_local_civics_candid_ui||[]).push([[176],{"./stories/UserSettingsPage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UserSettingsPage_stories});__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),use_form=__webpack_require__("./node_modules/@mantine/form/esm/use-form.js"),Container=__webpack_require__("./node_modules/@mantine/core/esm/Container/Container.js"),Title=__webpack_require__("./node_modules/@mantine/core/esm/Title/Title.js"),Text=__webpack_require__("./node_modules/@mantine/core/esm/Text/Text.js"),Box=__webpack_require__("./node_modules/@mantine/core/esm/Box/Box.js"),Grid=__webpack_require__("./node_modules/@mantine/core/esm/Grid/Grid.js"),Avatar=__webpack_require__("./node_modules/@mantine/core/esm/Avatar/Avatar.js"),Button=__webpack_require__("./node_modules/@mantine/core/esm/Button/Button.js"),Divider=__webpack_require__("./node_modules/@mantine/core/esm/Divider/Divider.js"),TextInput=__webpack_require__("./node_modules/@mantine/core/esm/TextInput/TextInput.js"),Textarea=__webpack_require__("./node_modules/@mantine/core/esm/Textarea/Textarea.js"),styles=__webpack_require__("./src/components/user/styles.tsx"),helpers=__webpack_require__("./src/components/user/helpers.tsx"),IconPhotoEdit=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconPhotoEdit.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UserSettingsPage(props){const{classes}=(0,styles.j)(),avatarURL=(0,helpers.x)(props.avatarURL,props.fullName,{size:200,fontSize:50}),form=(0,use_form.c)({initialValues:{firstName:props.firstName,lastName:props.lastName,impactStatement:props.impactStatement},transformValues:values=>({...values})});return(0,jsx_runtime.jsxs)(Container.W,{size:"lg",pb:"xl",pt:"lg",children:[(0,jsx_runtime.jsx)(Title.D,{size:25,color:"dark.4",children:props.fullName}),(0,jsx_runtime.jsx)(Text.x,{color:"dark.4",size:16,children:props.email}),(0,jsx_runtime.jsx)(Box.x,{mt:20,mx:"auto",children:(0,jsx_runtime.jsx)("form",{onSubmit:form.onSubmit((values=>props.onSubmit&&props.onSubmit(values))),children:(0,jsx_runtime.jsxs)(Grid.r,{children:[(0,jsx_runtime.jsx)(Grid.r.Col,{md:4,children:(0,jsx_runtime.jsxs)("div",{style:{position:"relative",width:"max-content"},children:[(0,jsx_runtime.jsx)(Avatar.q,{size:200,className:classes.userAvatar,src:avatarURL,radius:200}),(0,jsx_runtime.jsx)("div",{style:{position:"absolute",right:"0px",bottom:"20px",zIndex:5},children:(0,jsx_runtime.jsx)(Button.z,{onClick:props.onEditAvatar,compact:!0,variant:"default",leftIcon:(0,jsx_runtime.jsx)(IconPhotoEdit.Z,{size:"1rem"}),children:"Edit"})})]})}),(0,jsx_runtime.jsxs)(Grid.r.Col,{md:8,children:[(0,jsx_runtime.jsx)(Text.x,{color:"dark.4",size:16,weight:800,children:"Profile"}),(0,jsx_runtime.jsx)(Divider.i,{mt:5,mb:10}),(0,jsx_runtime.jsx)(TextInput.o,{label:"First name",description:"What is your first name?",placeholder:"First name",...form.getInputProps("firstName")}),(0,jsx_runtime.jsx)(TextInput.o,{label:"Last name",description:"What is your last name?",placeholder:"Last name",mt:"md",...form.getInputProps("lastName")}),(0,jsx_runtime.jsx)(Textarea.g,{label:"Impact statement",description:"How would you like to contribute to your community?",placeholder:"Impact statement",minRows:5,mt:"md",...form.getInputProps("impactStatement")}),(0,jsx_runtime.jsx)(Button.z,{type:"submit",mt:"xl",children:"Update settings"})]})]})})})]})}UserSettingsPage.displayName="UserSettingsPage";try{UserSettingsPage.displayName="UserSettingsPage",UserSettingsPage.__docgenInfo={description:"UserSettingsPage",displayName:"UserSettingsPage",props:{fullName:{defaultValue:null,description:"",name:"fullName",required:!1,type:{name:"string"}},firstName:{defaultValue:null,description:"",name:"firstName",required:!1,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!1,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!1,type:{name:"string"}},avatarURL:{defaultValue:null,description:"",name:"avatarURL",required:!1,type:{name:"string"}},impactStatement:{defaultValue:null,description:"",name:"impactStatement",required:!1,type:{name:"string"}},badges:{defaultValue:null,description:"",name:"badges",required:!1,type:{name:"BadgeData[]"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"((user: UserData) => void)"}},onEditAvatar:{defaultValue:null,description:"",name:"onEditAvatar",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/user/UserSettingsPage.tsx#UserSettingsPage"]={docgenInfo:UserSettingsPage.__docgenInfo,name:"UserSettingsPage",path:"src/pages/user/UserSettingsPage.tsx#UserSettingsPage"})}catch(__react_docgen_typescript_loader_error){}var AppLayout=__webpack_require__("./src/layouts/app/AppLayout.tsx");const UserSettingsPage_stories={title:"Page/UserSettingsPage",component:UserSettingsPage,tags:["autodocs"],parameters:{layout:"fullscreen"}},Default={...{render:args=>(0,jsx_runtime.jsx)("div",{className:"h-full w-full overscroll-none font-proxima",children:(0,jsx_runtime.jsx)(dist.VA,{children:(0,jsx_runtime.jsx)(AppLayout.L,{...args,page:(0,jsx_runtime.jsx)(UserSettingsPage,{...args})})})})},args:{fullName:"Jane Doe",firstName:"Jane",lastName:"Doe",email:"jane.doe@site.com",avatarURL:"",impactStatement:"I would like to encourage my community to become more educated on issues that directly affect us, as well as make sure my community is a place where everyone is welcome."}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    fullName: 'Jane Doe',\n    firstName: 'Jane',\n    lastName: 'Doe',\n    email: 'jane.doe@site.com',\n    avatarURL: '',\n    impactStatement: 'I would like to encourage my community to become more educated on issues that directly affect us, as well as make sure my community is a place where everyone is welcome.'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);