"use strict";(self.webpackChunktestdocumentation=self.webpackChunktestdocumentation||[]).push([[1662],{939:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=i(4848),s=i(8453);const t={title:"Understanding Colliders and Trigger Boxes",sidebar_position:11},o="Understanding Colliders and Trigger Boxes",l={id:"general-concepts/triggerbox",title:"Understanding Colliders and Trigger Boxes",description:"Important: This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.",source:"@site/docs/general-concepts/triggerbox.md",sourceDirName:"general-concepts",slug:"/general-concepts/triggerbox",permalink:"/DevelopmentDocumentation/docs/general-concepts/triggerbox",draft:!1,unlisted:!1,editUrl:"https://github.com/Hash-Studios-LLC/DevelopmentDocumentation/docs/general-concepts/triggerbox.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Understanding Colliders and Trigger Boxes",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Understanding Unity Layers with Udon",permalink:"/DevelopmentDocumentation/docs/general-concepts/layers"},next:{title:"Changing Object Meshes and Materials",permalink:"/DevelopmentDocumentation/docs/general-concepts/objectmeshesandmaterials"}},d={},c=[{value:"What is a Collider?",id:"what-is-a-collider",level:2},{value:"Box Collider",id:"box-collider",level:3},{value:"What is a Trigger Box?",id:"what-is-a-trigger-box",level:2},{value:"Adding and Configuring Colliders in Unity",id:"adding-and-configuring-colliders-in-unity",level:2},{value:"Adding a Box Collider",id:"adding-a-box-collider",level:3},{value:"Enabling a Trigger Box",id:"enabling-a-trigger-box",level:3},{value:"Resizing the Trigger Box",id:"resizing-the-trigger-box",level:3},{value:"Using Colliders and Triggers in Prefabs",id:"using-colliders-and-triggers-in-prefabs",level:2},{value:"Example Usage in Our Prefabs",id:"example-usage-in-our-prefabs",level:2},{value:"Unity Documentation for Reference",id:"unity-documentation-for-reference",level:2},{value:"VRChat OnTrigger Events",id:"vrchat-ontrigger-events",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"understanding-colliders-and-trigger-boxes",children:"Understanding Colliders and Trigger Boxes"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Important:"})," This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity."]})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Many of our prefabs, including the ",(0,r.jsx)(n.code,{children:"Hash Studios Information Board"}),", use colliders and trigger boxes for detecting interactions. Understanding how to add, configure, and resize trigger boxes is essential for making the most of these prefabs. For more details, see the ",(0,r.jsx)(n.a,{href:"https://hashstudiosllc.com/hashstudiosinformationboard",children:"Hash Studios Information Board"})," documentation."]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Learning how to edit colliders and trigger boxes is crucial for setting up a variety of our prefabs that rely on detection for functionality. Proper configuration ensures that interactions within your virtual world work smoothly and as intended."})}),"\n",(0,r.jsx)(n.p,{children:"In Unity, colliders and trigger boxes are essential for creating interactive and dynamic environments. They help detect interactions between objects, making them useful for various applications like triggering events and detecting player presence."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"what-is-a-collider",children:"What is a Collider?"}),"\n",(0,r.jsx)(n.p,{children:"A collider is an invisible shape that defines the boundaries of an object for physical interactions. Colliders detect when objects come into contact with them."}),"\n",(0,r.jsx)(n.h3,{id:"box-collider",children:"Box Collider"}),"\n",(0,r.jsx)(n.p,{children:"A Box Collider is a simple, box-shaped collider. It is one of the most commonly used colliders and is ideal for rectangular or cubic objects."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"what-is-a-trigger-box",children:"What is a Trigger Box?"}),"\n",(0,r.jsx)(n.p,{children:"A trigger box is a special type of collider that detects when another object enters, exits, or stays within its boundaries. Trigger boxes do not cause physical collisions but can trigger events."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"adding-and-configuring-colliders-in-unity",children:"Adding and Configuring Colliders in Unity"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("div",{class:"image75",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Example GIF",src:i(6812).A+"",width:"1600",height:"529"})})}),"\n",(0,r.jsx)(n.h3,{id:"adding-a-box-collider",children:"Adding a Box Collider"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Select the Object:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Click on the object in the Hierarchy window."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Add Component:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the Inspector window, click ",(0,r.jsx)(n.code,{children:"Add Component"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Search for ",(0,r.jsx)(n.code,{children:"Box Collider"})," and select it."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"enabling-a-trigger-box",children:"Enabling a Trigger Box"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Select the Object:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Click on the object in the Hierarchy window."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Add Component:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the Inspector window, click ",(0,r.jsx)(n.code,{children:"Add Component"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Search for ",(0,r.jsx)(n.code,{children:"Box Collider"})," and select it."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Enable Trigger:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the Inspector, check the ",(0,r.jsx)(n.code,{children:"Is Trigger"})," checkbox."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"resizing-the-trigger-box",children:"Resizing the Trigger Box"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Select the Trigger Box:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to the child object named ",(0,r.jsx)(n.code,{children:"TriggerBox"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Adjust the Size:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the Inspector, find the ",(0,r.jsx)(n.code,{children:"Box Collider"})," component."]}),"\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.code,{children:"Edit Collider"})," button."]}),"\n",(0,r.jsx)(n.li,{children:"Use the handles to resize the trigger box as needed."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"using-colliders-and-triggers-in-prefabs",children:"Using Colliders and Triggers in Prefabs"}),"\n",(0,r.jsxs)(n.p,{children:["We use colliders and trigger boxes in our prefabs to detect interactions. For example, our ",(0,r.jsx)(n.code,{children:"Hash Studios Information Board"})," prefab uses a trigger box to display information when a player enters a specific area."]}),"\n",(0,r.jsxs)(n.p,{children:["You can find more details in the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/udon/hashstudiosinformationboard",children:"Hash Studios Information Board"})})," documentation."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"example-usage-in-our-prefabs",children:"Example Usage in Our Prefabs"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"Hash Studios Information Board"})," prefab, the trigger box detects when a player enters an area to display information. Here\u2019s a simple setup guide:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Select the Trigger Box:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to the child object named ",(0,r.jsx)(n.code,{children:"TriggerBox"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Adjust the Trigger Box:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Move it around using the ",(0,r.jsx)(n.code,{children:"Transform"})," component."]}),"\n",(0,r.jsxs)(n.li,{children:["Resize it using the ",(0,r.jsx)(n.code,{children:"Box Collider"})," component by pressing the ",(0,r.jsx)(n.code,{children:"Edit Collider"})," button."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Configure the Trigger:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Set how the information board should appear (e.g., on trigger, timed, or always visible)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"unity-documentation-for-reference",children:"Unity Documentation for Reference"}),"\n",(0,r.jsx)(n.p,{children:"For more detailed information on colliders and triggers, refer to the official Unity documentation:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.unity3d.com/Manual/CollidersOverview.html",children:"Unity Collider Documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.unity3d.com/Manual/class-BoxCollider.html",children:"Unity Box Collider Documentation"})}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"vrchat-ontrigger-events",children:"VRChat OnTrigger Events"}),"\n",(0,r.jsxs)(n.p,{children:["In VRChat, OnTrigger events are used to detect when players interact with trigger boxes. For detailed instructions and examples, refer to the ",(0,r.jsx)(n.a,{href:"https://creators.vrchat.com/worlds/udon/players/player-collisions/",children:"VRChat OnTrigger Events Documentation"}),"."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:"By following these steps, you can effectively use colliders and trigger boxes in Unity to create interactive and dynamic environments in your VRChat worlds."}),"\n",(0,r.jsxs)(n.p,{children:["For further assistance, consult the ",(0,r.jsx)(n.a,{href:"https://docs.unity3d.com/Manual/CollidersOverview.html",children:"Unity Collider Documentation"})," and the ",(0,r.jsx)(n.a,{href:"https://creators.vrchat.com/worlds/udon/players/player-collisions/",children:"VRChat OnTrigger Events Documentation"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},6812:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/howtoeditcollider-f7e4876406c7f9afaf5466023ef63dce.gif"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var r=i(6540);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);