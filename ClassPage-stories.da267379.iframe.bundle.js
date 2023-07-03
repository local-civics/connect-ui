"use strict";(self.webpackChunk_local_civics_candid_ui=self.webpackChunk_local_civics_candid_ui||[]).push([[4783],{"./stories/ClassPage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Empty:()=>Empty,WithMembers:()=>WithMembers,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ClassPage_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),MantineProvider=__webpack_require__("./node_modules/@mantine/styles/esm/theme/MantineProvider.js"),Box=__webpack_require__("./node_modules/@mantine/core/esm/Box/Box.js"),Avatar=__webpack_require__("./node_modules/@mantine/core/esm/Avatar/Avatar.js"),Flex=__webpack_require__("./node_modules/@mantine/core/esm/Flex/Flex.js"),Text=__webpack_require__("./node_modules/@mantine/core/esm/Text/Text.js"),Container=__webpack_require__("./node_modules/@mantine/core/esm/Container/Container.js"),Stack=__webpack_require__("./node_modules/@mantine/core/esm/Stack/Stack.js"),Title=__webpack_require__("./node_modules/@mantine/core/esm/Title/Title.js"),Divider=__webpack_require__("./node_modules/@mantine/core/esm/Divider/Divider.js"),Card=__webpack_require__("./node_modules/@mantine/core/esm/Card/Card.js"),Group=__webpack_require__("./node_modules/@mantine/core/esm/Group/Group.js"),Menu=__webpack_require__("./node_modules/@mantine/core/esm/Menu/Menu.js"),ActionIcon=__webpack_require__("./node_modules/@mantine/core/esm/ActionIcon/ActionIcon.js"),Button=__webpack_require__("./node_modules/@mantine/core/esm/Button/Button.js"),IconSum=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconSum.js"),IconDotsVertical=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconDotsVertical.js"),IconCopy=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconCopy.js"),IconLink=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconLink.js"),IconRefresh=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconRefresh.js"),IconPlus=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconPlus.js"),IconUpload=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconUpload.js"),IconUserCircle=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconUserCircle.js"),IconArrowsExchange=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowsExchange.js"),IconTrash=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconTrash.js"),mantine_react_table_esm=__webpack_require__("./node_modules/mantine-react-table/dist/esm/mantine-react-table.esm.js"),helpers=__webpack_require__("./src/components/core/avatar/helpers.ts");const useClassStyles=(0,__webpack_require__("./node_modules/@mantine/styles/esm/tss/create-styles.js").k)((theme=>({userAvatar:{backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[6]:theme.colors.blue[7]},card:{backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[7]:theme.white,height:"max-content",width:"20rem"},dropzone:{borderWidth:1,paddingBottom:50},selectFileBtnControl:{position:"absolute",width:250,left:"calc(50% - 125px)",bottom:-20},addStudentsWrapper:{position:"relative",marginBottom:30}})));var events=__webpack_require__("./node_modules/@mantine/modals/esm/events.js"),Select=__webpack_require__("./node_modules/@mantine/core/esm/Select/Select.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ChangeRole(props){const[newRole,setNewRole]=react.useState("");return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Select.Ph,{label:"New role",defaultValue:props.data.role,placeholder:"Pick one",dropdownPosition:"bottom",data:[{value:"student",label:"Student"},{value:"educator",label:"Educator"}],onChange:e=>setNewRole(e||"")}),(0,jsx_runtime.jsx)(Button.z,{type:"submit",fullWidth:!0,mt:"md",onClick:()=>((data,newRole)=>{["student","educator"].includes(newRole)&&props.onChangeRole&&props.onChangeRole(data,newRole||"educator"),setNewRole(""),events.qk.closeAll()})(props.data,newRole),children:"Submit"})]})}try{ChangeRole.displayName="ChangeRole",ChangeRole.__docgenInfo={description:"ChangeRole",displayName:"ChangeRole",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ClassMemberData"}},onChangeRole:{defaultValue:null,description:"",name:"onChangeRole",required:!1,type:{name:'((data: ClassMemberData, newRole: "student" | "educator") => void)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/class/modal/ChangeRole.tsx#ChangeRole"]={docgenInfo:ChangeRole.__docgenInfo,name:"ChangeRole",path:"src/components/class/modal/ChangeRole.tsx#ChangeRole"})}catch(__react_docgen_typescript_loader_error){}var Center=__webpack_require__("./node_modules/@mantine/core/esm/Center/Center.js"),TextInput=__webpack_require__("./node_modules/@mantine/core/esm/TextInput/TextInput.js"),IconGripVertical=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconGripVertical.js"),IconRowInsertBottom=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconRowInsertBottom.js"),react_beautiful_dnd_esm=__webpack_require__("./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js"),use_form=__webpack_require__("./node_modules/@mantine/form/esm/use-form.js");function AddStudents(props){const form=(0,use_form.c)({initialValues:{students:[{name:"",email:"",role:"student",avatarURL:"",status:"inactive",numberOfBadgesEarned:0,numberOfLessonsCompleted:0,impactStatement:""}]}}),fields=form.values.students.map(((_,index)=>(0,jsx_runtime.jsx)(react_beautiful_dnd_esm._l,{index,draggableId:index.toString(),children:provided=>(0,jsx_runtime.jsxs)(Flex.k,{ref:provided.innerRef,mt:"xs",...provided.draggableProps,gap:5,children:[(0,jsx_runtime.jsx)(Center.M,{...provided.dragHandleProps,children:(0,jsx_runtime.jsx)(IconGripVertical.Z,{size:"1.2rem"})}),(0,jsx_runtime.jsx)(TextInput.o,{placeholder:"John Doe",...form.getInputProps(`students.${index}.name`)}),(0,jsx_runtime.jsx)(TextInput.o,{placeholder:"example@mail.com",...form.getInputProps(`students.${index}.email`)})]})},index)));return(0,jsx_runtime.jsxs)(Stack.K,{spacing:5,children:[(0,jsx_runtime.jsx)(Button.z,{maw:"max-content",variant:"subtle",leftIcon:(0,jsx_runtime.jsx)(IconRowInsertBottom.Z,{}),onClick:()=>form.insertListItem("students",{name:"",email:"",role:"student",avatarURL:"",status:"inactive",numberOfBadgesEarned:0,numberOfLessonsCompleted:0,impactStatement:""}),children:"New row"}),(0,jsx_runtime.jsx)(Box.x,{maw:500,mx:"auto",children:(0,jsx_runtime.jsx)(react_beautiful_dnd_esm.Z5,{onDragEnd:({destination,source})=>form.reorderListItem("students",{from:source.index,to:destination?destination.index:source.index}),children:(0,jsx_runtime.jsx)(react_beautiful_dnd_esm.bK,{droppableId:"dnd-list",direction:"vertical",children:provided=>(0,jsx_runtime.jsxs)("div",{...provided.droppableProps,ref:provided.innerRef,children:[fields,provided.placeholder]})})})}),(0,jsx_runtime.jsx)(Button.z,{mt:20,onClick:()=>{close(),form.reset(),props.onAddStudents&&props.onAddStudents(form.values.students),events.qk.closeAll()},children:"Submit"})]})}AddStudents.displayName="AddStudents";try{AddStudents.displayName="AddStudents",AddStudents.__docgenInfo={description:"AddStudents",displayName:"AddStudents",props:{onAddStudents:{defaultValue:null,description:"",name:"onAddStudents",required:!1,type:{name:"((newStudents: ClassMemberData[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/class/modal/AddStudents.tsx#AddStudents"]={docgenInfo:AddStudents.__docgenInfo,name:"AddStudents",path:"src/components/class/modal/AddStudents.tsx#AddStudents"})}catch(__react_docgen_typescript_loader_error){}var esm=__webpack_require__("./node_modules/@mantine/dropzone/esm/index.js"),mime_types=__webpack_require__("./node_modules/@mantine/dropzone/esm/mime-types.js"),IconDownload=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconDownload.js"),IconX=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconX.js"),IconCloudUpload=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconCloudUpload.js"),papaparse_min=__webpack_require__("./node_modules/papaparse/papaparse.min.js");function UploadCSV(props){const{classes,theme}=useClassStyles(),openRef=react.useRef(null),[loading,setLoading]=react.useState(!1),onDrop=react.useCallback((acceptedFiles=>{setLoading(!0),acceptedFiles.forEach((file=>{(0,papaparse_min.parse)(file,{download:!0,header:!0,dynamicTyping:!0,skipEmptyLines:!0,worker:!0,complete:function(results){const data=results.data;data.length>0&&props.onUploadCSV&&props.onUploadCSV(data),setLoading(!1),events.qk.closeAll()}})}))}),[]);return(0,jsx_runtime.jsxs)("div",{className:classes.addStudentsWrapper,children:[(0,jsx_runtime.jsx)(Button.z,{mb:10,maw:"max-content",variant:"subtle",leftIcon:(0,jsx_runtime.jsx)(IconDownload.Z,{}),onClick:()=>{const csv=(0,papaparse_min.unparse)([["name","email"],["John Doe","example@mail.com"]]),blob=new Blob([csv],{type:"text/csv;charset=utf-8;"}),link=document.createElement("a");if(void 0!==link.download){const url=URL.createObjectURL(blob);link.setAttribute("href",url),link.setAttribute("download","localcivics-template.csv"),link.style.visibility="hidden",document.body.appendChild(link),link.click(),document.body.removeChild(link)}props.onDownloadTemplate&&props.onDownloadTemplate()},children:"Download template"}),(0,jsx_runtime.jsx)(esm.fh,{loading,openRef,onDrop,className:classes.dropzone,radius:"md",accept:[mime_types.LO.csv],maxSize:5242880,children:(0,jsx_runtime.jsxs)("div",{style:{pointerEvents:"none"},children:[(0,jsx_runtime.jsxs)(Group.Z,{position:"center",children:[(0,jsx_runtime.jsx)(esm.fh.Accept,{children:(0,jsx_runtime.jsx)(IconDownload.Z,{size:50,color:theme.colors[theme.primaryColor][6],stroke:1.5})}),(0,jsx_runtime.jsx)(esm.fh.Reject,{children:(0,jsx_runtime.jsx)(IconX.Z,{size:50,color:theme.colors.red[6],stroke:1.5})}),(0,jsx_runtime.jsx)(esm.fh.Idle,{children:(0,jsx_runtime.jsx)(IconCloudUpload.Z,{size:50,color:"dark"===theme.colorScheme?theme.colors.dark[0]:theme.black,stroke:1.5})})]}),(0,jsx_runtime.jsxs)(Text.x,{align:"center",weight:700,size:"lg",mt:"xl",children:[(0,jsx_runtime.jsx)(esm.fh.Accept,{children:"Drop files here"}),(0,jsx_runtime.jsx)(esm.fh.Reject,{children:"Csv file less than 5mb"}),(0,jsx_runtime.jsx)(esm.fh.Idle,{children:"Upload csv"})]}),(0,jsx_runtime.jsxs)(Text.x,{align:"center",size:"sm",mt:"xs",color:"dimmed",children:["Drag'n'drop files here to upload. We can accept only ",(0,jsx_runtime.jsx)("i",{children:".csv"})," files that are less than 5mb in size."]})]})}),(0,jsx_runtime.jsx)(Button.z,{className:classes.selectFileBtnControl,size:"md",radius:"xl",onClick:()=>openRef.current?.(),children:"Select file"})]})}UploadCSV.displayName="UploadCSV";try{UploadCSV.displayName="UploadCSV",UploadCSV.__docgenInfo={description:"UploadCSV",displayName:"UploadCSV",props:{onUploadCSV:{defaultValue:null,description:"",name:"onUploadCSV",required:!1,type:{name:"((newStudents: ClassMemberData[]) => void)"}},onDownloadTemplate:{defaultValue:null,description:"",name:"onDownloadTemplate",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/class/modal/UploadCSV.tsx#UploadCSV"]={docgenInfo:UploadCSV.__docgenInfo,name:"UploadCSV",path:"src/components/class/modal/UploadCSV.tsx#UploadCSV"})}catch(__react_docgen_typescript_loader_error){}function ClassPage(props){const theme=(0,MantineProvider.rZ)(),{classes}=useClassStyles(),columns=(0,react.useMemo)((()=>[{accessorFn:row=>row.name,id:"name",header:"Name",size:250,Cell:({renderedCellValue,row})=>{const avatarURL=(0,helpers.t)(row.original.avatarURL,row.original.name);return(0,jsx_runtime.jsxs)(Box.x,{sx:{display:"flex",alignItems:"center",gap:"16px"},children:[(0,jsx_runtime.jsx)(Avatar.q,{size:30,className:classes.userAvatar,src:avatarURL,radius:"xl"}),(0,jsx_runtime.jsx)("span",{children:renderedCellValue})]})},Footer:()=>(0,jsx_runtime.jsxs)(Flex.k,{align:"center",children:[(0,jsx_runtime.jsx)(IconSum.Z,{color:theme.colors.dark[4],size:"1rem"}),(0,jsx_runtime.jsxs)(Text.x,{children:["Count: ",Math.round(props.members.length)]})]})},{accessorKey:"email",enableClickToCopy:!0,header:"Email",size:300},{accessorKey:"role",id:"role",header:"Role",filterVariant:"select",accessorFn:originalRow=>originalRow.role.charAt(0).toUpperCase()+originalRow.role.substr(1).toLowerCase(),mantineFilterSelectProps:{data:["Student","Educator"]},Footer:()=>(0,jsx_runtime.jsxs)(Flex.k,{align:"center",children:[(0,jsx_runtime.jsx)(IconSum.Z,{color:theme.colors.dark[4],size:"1rem"}),(0,jsx_runtime.jsxs)(Text.x,{children:["Students: ",Math.round(props.members.filter((m=>"student"===m.role)).length)]})]})},{accessorKey:"status",accessorFn:originalRow=>originalRow.status.toLowerCase().replace(/\b\w/g,(s=>s.toUpperCase())),id:"status",header:"Status",filterVariant:"select",mantineFilterSelectProps:{data:["Active","Inactive"]},size:200,Footer:()=>(0,jsx_runtime.jsxs)(Flex.k,{align:"center",children:[(0,jsx_runtime.jsx)(IconSum.Z,{color:theme.colors.dark[4],size:"1rem"}),(0,jsx_runtime.jsxs)(Text.x,{children:["Active: ",Math.round(props.members.filter((s=>"active"===s.status)).length)]})]})},{accessorKey:"numberOfBadgesEarned",header:"Badges Earned",filterVariant:"range",size:100,Footer:()=>(0,jsx_runtime.jsxs)(Flex.k,{align:"center",children:[(0,jsx_runtime.jsx)(IconSum.Z,{color:theme.colors.dark[4],size:"1rem"}),(0,jsx_runtime.jsxs)(Text.x,{children:["Sum: ",Math.round(props.members.map((s=>s.numberOfBadgesEarned)).reduce(((a,b)=>a+b),0))]})]})},{accessorKey:"numberOfLessonsCompleted",header:"Lessons Completed",filterVariant:"range",size:100,Footer:()=>(0,jsx_runtime.jsxs)(Flex.k,{align:"center",children:[(0,jsx_runtime.jsx)(IconSum.Z,{color:theme.colors.dark[4],size:"1rem"}),(0,jsx_runtime.jsxs)(Text.x,{children:["Sum: ",Math.round(props.members.map((s=>s.numberOfLessonsCompleted)).reduce(((a,b)=>a+b),0))]})]})},{accessorKey:"impactStatement",header:"Impact Statement",size:300}]),[]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Container.W,{size:"lg",pb:"xl",children:(0,jsx_runtime.jsxs)(Stack.K,{spacing:10,children:[(0,jsx_runtime.jsx)(Title.D,{color:"dark.4",children:props.name}),(0,jsx_runtime.jsx)(Divider.i,{}),(0,jsx_runtime.jsx)(Card.Z,{withBorder:!0,radius:"md",p:"md",className:classes.card,children:(0,jsx_runtime.jsx)(Card.Z.Section,{sx:theme=>({backgroundSize:"cover",backgroundPosition:"center",backgroundImage:theme.fn.gradient({from:"blue.8",to:"blue.7",deg:20}),color:theme.white}),px:20,pt:20,pb:50,children:(0,jsx_runtime.jsxs)(Group.Z,{grow:!0,align:"start",position:"apart",spacing:0,children:[(0,jsx_runtime.jsxs)(Stack.K,{spacing:1,children:[(0,jsx_runtime.jsx)(Text.x,{weight:600,size:"sm",children:"Class code"}),(0,jsx_runtime.jsx)(Flex.k,{align:"center",gap:5,children:(0,jsx_runtime.jsx)(Title.D,{size:"xx-large",children:props.code})})]}),(0,jsx_runtime.jsxs)(Menu.v,{transitionProps:{transition:"pop"},withArrow:!0,position:"bottom-end",withinPortal:!0,children:[(0,jsx_runtime.jsx)(Menu.v.Target,{children:(0,jsx_runtime.jsx)(ActionIcon.A,{variant:"transparent",maw:"max-content",children:(0,jsx_runtime.jsx)(IconDotsVertical.Z,{color:"white",size:"1rem",stroke:1.5})})}),(0,jsx_runtime.jsxs)(Menu.v.Dropdown,{children:[(0,jsx_runtime.jsx)(Menu.v.Item,{icon:(0,jsx_runtime.jsx)(IconCopy.Z,{size:"1rem",stroke:1.5}),onClick:props.onCopyCode,children:"Copy code"}),(0,jsx_runtime.jsx)(Menu.v.Item,{icon:(0,jsx_runtime.jsx)(IconLink.Z,{size:"1rem",stroke:1.5}),onClick:props.onCopyInviteLink,children:"Copy invite link"}),(0,jsx_runtime.jsx)(Menu.v.Item,{icon:(0,jsx_runtime.jsx)(IconRefresh.Z,{size:"1rem",stroke:1.5}),onClick:props.onRefreshCode,children:"Refresh code"})]})]})]})})}),(0,jsx_runtime.jsxs)(Flex.k,{children:[(0,jsx_runtime.jsx)(Button.z,{maw:"max-content",variant:"subtle",leftIcon:(0,jsx_runtime.jsx)(IconPlus.Z,{}),onClick:()=>{events.qk.open({title:(0,jsx_runtime.jsx)(Title.D,{size:"medium",children:"Add students"}),centered:!0,children:(0,jsx_runtime.jsx)(AddStudents,{...props})})},children:"Add students"}),(0,jsx_runtime.jsx)(Button.z,{maw:"max-content",variant:"subtle",leftIcon:(0,jsx_runtime.jsx)(IconUpload.Z,{}),onClick:()=>{events.qk.open({title:(0,jsx_runtime.jsx)(Title.D,{size:"medium",children:"Upload csv"}),centered:!0,children:(0,jsx_runtime.jsx)(UploadCSV,{...props})})},children:"Upload csv"})]}),(0,jsx_runtime.jsx)(mantine_react_table_esm.ZO,{enableColumnOrdering:!0,enableColumnFilterModes:!0,enableRowActions:!0,columns,data:props.members,initialState:{showColumnFilters:!0},renderRowActionMenuItems:({row})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Menu.v.Item,{icon:(0,jsx_runtime.jsx)(IconUserCircle.Z,{size:16,color:theme.colors.dark[4]}),onClick:()=>props.onViewProfile&&props.onViewProfile(row.original),children:"View Profile"}),(0,jsx_runtime.jsx)(Menu.v.Item,{icon:(0,jsx_runtime.jsx)(IconArrowsExchange.Z,{size:16,color:theme.colors.dark[4]}),onClick:()=>{events.qk.open({title:(0,jsx_runtime.jsx)(Title.D,{size:"medium",children:row.original.name}),centered:!0,children:(0,jsx_runtime.jsx)(ChangeRole,{...props,data:row.original})})},children:"Change role"}),(0,jsx_runtime.jsx)(Menu.v.Item,{icon:(0,jsx_runtime.jsx)(IconTrash.Z,{size:16,color:theme.colors.dark[4]}),onClick:()=>{events.qk.openConfirmModal({title:`Remove ${row.original.name}`,centered:!0,children:(0,jsx_runtime.jsxs)(Text.x,{size:"sm",children:["Are you sure you want to remove ",`${row.original.name}`,"?"]}),labels:{confirm:"Remove",cancel:"No don't remove"},confirmProps:{color:"red"},onConfirm:()=>props.onRemove&&props.onRemove(row.original)})},children:"Remove"})]})})]})})})}try{ClassPage.displayName="ClassPage",ClassPage.__docgenInfo={description:"ClassPage",displayName:"ClassPage",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"admin"'},{value:'"member"'},{value:'"archived"'}]}},code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},members:{defaultValue:null,description:"",name:"members",required:!0,type:{name:"ClassMemberData[]"}},onCopyCode:{defaultValue:null,description:"",name:"onCopyCode",required:!1,type:{name:"(() => void)"}},onCopyInviteLink:{defaultValue:null,description:"",name:"onCopyInviteLink",required:!1,type:{name:"(() => void)"}},onRefreshCode:{defaultValue:null,description:"",name:"onRefreshCode",required:!1,type:{name:"(() => void)"}},onViewProfile:{defaultValue:null,description:"",name:"onViewProfile",required:!1,type:{name:"((data: ClassMemberData) => void)"}},onChangeRole:{defaultValue:null,description:"",name:"onChangeRole",required:!1,type:{name:'((data: ClassMemberData, newRole: "student" | "educator") => void)'}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"((data: ClassMemberData) => void)"}},onAddStudents:{defaultValue:null,description:"",name:"onAddStudents",required:!1,type:{name:"((newStudents: ClassMemberData[]) => void)"}},onUploadCSV:{defaultValue:null,description:"",name:"onUploadCSV",required:!1,type:{name:"((newStudents: ClassMemberData[]) => void)"}},onDownloadTemplate:{defaultValue:null,description:"",name:"onDownloadTemplate",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/class/ClassPage.tsx#ClassPage"]={docgenInfo:ClassPage.__docgenInfo,name:"ClassPage",path:"src/pages/class/ClassPage.tsx#ClassPage"})}catch(__react_docgen_typescript_loader_error){}var AppLayout=__webpack_require__("./src/layouts/app/AppLayout.tsx");const ClassPage_stories={title:"Page/ClassPage",component:ClassPage,tags:["autodocs"],parameters:{layout:"fullscreen"}},MOCK_DATA={name:"College & Career Readiness",code:"ee3mjm",members:[{name:"Jane Doe",email:"janedoe@localcivics.io",role:"student",status:"inactive",numberOfLessonsCompleted:0,numberOfBadgesEarned:0},{name:"Bobby J",email:"bobbyj@localcivics.io",role:"student",status:"active",numberOfLessonsCompleted:4,numberOfBadgesEarned:1},{name:"John Smith",email:"johnsmith@localcivics.io",role:"student",status:"inactive",numberOfLessonsCompleted:0,numberOfBadgesEarned:0},{name:"Benetta Marks",email:"benetta@localcivics.io",role:"educator",avatarURL:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/124.jpg",status:"active",numberOfLessonsCompleted:0,numberOfBadgesEarned:0}]},Template={args:{members:[]},render:args=>(0,jsx_runtime.jsx)("div",{className:"h-full w-full overscroll-none font-proxima",children:(0,jsx_runtime.jsx)(dist.VA,{children:(0,jsx_runtime.jsx)(AppLayout.L,{...args,defaultActiveLinkName:"Home",page:(0,jsx_runtime.jsx)(ClassPage,{...args,name:args.name||MOCK_DATA.name,code:args.code||MOCK_DATA.code})})})})},Empty={...Template},WithMembers={...Template,args:{...Template.args,members:MOCK_DATA.members}};Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"{\n  ...Template\n}",...Empty.parameters?.docs?.source}}},WithMembers.parameters={...WithMembers.parameters,docs:{...WithMembers.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    ...Template.args,\n    members: MOCK_DATA.members\n  }\n}",...WithMembers.parameters?.docs?.source}}};const __namedExportsOrder=["Empty","WithMembers"]}}]);