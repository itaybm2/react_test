(this.webpackJsonpreact_test=this.webpackJsonpreact_test||[]).push([[0],{59:function(t,e,a){},60:function(t,e,a){},64:function(t,e,a){"use strict";a.r(e);var n=a(6),r=a(0),i=a.n(r),s=a(9),l=a.n(s),d=(a(59),a(38)),h=a(39),c=a(24),o=a(42),u=a(41),g=a(40),j=(a(60),a(103)),b=a(4),m=a(99),y=a(102),x=a(101),p=a(96),O=a(98),f=a.p+"static/media/Collage.06a8e72e.png",_=a(97),v=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={fields:{dough_weight:"",hydration:"",starter:"",starter_hydration:"",salt:""},errors:{}},n.baseState=n.state,n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n.clearAll=n.clearAll.bind(Object(c.a)(n)),n}return Object(h.a)(a,[{key:"calculateIngredients",value:function(t){var e=t.starter/(1+1/t.starter_hydration),a=t.starter-e,n=t.hydration*(1+t.salt+a)-e,r=t.dough_weight/(1+n+t.starter+t.salt),i=t.starter*r,s=t.salt*r,l=n*r;document.getElementById("result_flour").innerHTML=parseInt(r)+"g",document.getElementById("result_water").innerHTML=parseInt(l)+"g",document.getElementById("result_starter").innerHTML=parseInt(i)+"g",document.getElementById("result_salt").innerHTML=parseInt(s)+"g"}},{key:"handleValidation",value:function(){var t=this.state.fields,e={},a=!0;return t.dough_weight||(a=!1,e.dough_weight="Cannot be empty"),t.hydration||(a=!1,e.hydration="Cannot be empty"),t.starter||(a=!1,e.starter="Cannot be empty"),t.starter_hydration||(a=!1,e.starter_hydration="Cannot be empty"),t.salt||(a=!1,e.salt="Cannot be empty"),this.setState({errors:e}),a}},{key:"handleSubmit",value:function(t){if(t.preventDefault(),this.handleValidation()){var e={dough_weight:this.state.fields.dough_weight,starter:parseFloat(this.state.fields.starter)/100,hydration:parseFloat(this.state.fields.hydration)/100,starter_hydration:parseFloat(this.state.fields.starter_hydration)/100,salt:parseFloat(this.state.fields.salt)/100};this.calculateIngredients(e)}}},{key:"clearAll",value:function(t){t.preventDefault(),document.getElementById("result_flour").innerHTML="0g",document.getElementById("result_starter").innerHTML="0g",document.getElementById("result_salt").innerHTML="0g",document.getElementById("result_water").innerHTML="0g",this.setState({fields:{dough_weight:"",hydration:"",starter:"",starter_hydration:"",salt:""},errors:{}})}},{key:"handleChange",value:function(t,e){var a=this.state.fields;a[t]=e.target.value,this.setState({fields:a})}},{key:"render",value:function(){this.props.classes;var t=Object(b.a)({root:{color:"#92540d"}})(p.a);Object(b.a)({root:{display:"flex"}})(x.a);return Object(n.jsx)(x.a,{children:Object(n.jsxs)(_.a,{margin:"50px",container:!0,spacing:1,justify:"center",children:[Object(n.jsx)(_.a,{item:!0,xs:12,children:Object(n.jsx)(t,{variant:"h2",component:"h1",display:"flex",children:"Sourdough Bread Calculator"})}),Object(n.jsx)(_.a,{item:!0,className:"root",xs:2,children:Object(n.jsx)(x.a,{children:Object(n.jsxs)(j.a,{className:"form",onSubmit:this.handleSubmit,children:[Object(n.jsx)(t,{variant:"h5",children:"Ingredients:"}),Object(n.jsx)(m.a,{label:"Dough Weight",type:"number",name:"dough_weight",id:"dough_weight",inputmode:"numeric",min:"0",placeholder:"Dough Weight in grams",value:this.state.fields.dough_weight,onChange:this.handleChange.bind(this,"dough_weight")}),Object(n.jsx)(m.a,{label:"Hydration",type:"number",name:"hydration",id:"hydration",min:"0",max:"100",placeholder:"Final Hydration",value:this.state.fields.hydration,onChange:this.handleChange.bind(this,"hydration")}),Object(n.jsx)(m.a,{type:"number",label:"Starter",name:"starter",id:"starter",min:"0",max:"100",placeholder:"Starter Percentage",value:this.state.fields.starter,onChange:this.handleChange.bind(this,"starter")}),Object(n.jsx)(m.a,{label:"Starter Hydration",type:"number",name:"starter_hydration",id:"starter_hydration",min:"0",max:"100",placeholder:"Starter Hydration",value:this.state.fields.starter_hydration,onChange:this.handleChange.bind(this,"starter_hydration")}),Object(n.jsx)(m.a,{label:"Salt",type:"number",name:"salt",errorte:!0,id:"salt",min:"0",max:"100",placeholder:"Salt Percentage",value:this.state.fields.salt,onChange:this.handleChange.bind(this,"salt")})]})})}),Object(n.jsx)(_.a,{item:!0,xs:1,justify:"center",className:"root",children:Object(n.jsxs)(x.a,{display:"flex-box",children:[Object(n.jsx)(t,{variant:"h5",children:"Totals:"}),Object(n.jsxs)(x.a,{children:[Object(n.jsx)("strong",{children:"Flour: "}),Object(n.jsx)("text",{id:"result_flour",children:"0g"})]}),Object(n.jsxs)(x.a,{children:[Object(n.jsx)("strong",{children:"Water: "}),Object(n.jsx)("text",{id:"result_water",children:"0g"})]}),Object(n.jsxs)(x.a,{children:[Object(n.jsx)("strong",{children:"Starter: "}),Object(n.jsx)("text",{id:"result_starter",children:"0g"})]}),Object(n.jsxs)(x.a,{children:[Object(n.jsx)("strong",{children:"Salt: "}),Object(n.jsx)("text",{id:"result_salt",children:"0g"})]})]})}),Object(n.jsx)(_.a,{item:!0,md:4,children:Object(n.jsx)(O.a,{src:f,component:"img"})}),Object(n.jsx)(_.a,{item:!0,lg:9,spacing:2,children:Object(n.jsxs)(x.a,{margin:5,display:"flex",justifyContent:"center",children:[Object(n.jsx)(x.a,{paddingRight:"20%",children:Object(n.jsx)(y.a,{variant:"outlined",padding:"20px",type:"submit",value:"Submit",onClick:this.handleSubmit,children:"Calculate"})}),Object(n.jsx)(x.a,{children:Object(n.jsx)(y.a,{border:"1px",padding:"40px",variant:"outlined",onClick:this.clearAll,className:"div_button",children:"Clear"})})]})})]})})}}]),a}(i.a.Component),C=Object(b.a)((function(t){return Object(g.a)({root:{},media:{height:0,width:0}},"root",{})}))(v),S=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,106)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;a(t),n(t),r(t),i(t),s(t)}))};l.a.render(Object(n.jsx)(C,{}),document.getElementById("root")),S()}},[[64,1,2]]]);
//# sourceMappingURL=main.dcc01f6d.chunk.js.map