(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3aef"],{"5e8a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-container",[a("v-row",[a("v-col",[a("h1",[e._v("REGÍSTRATE")])])],1),a("v-row",[e.alert.flag?a("v-col",[a("Alert",{attrs:{type:e.alert.type,message:e.alert.message}})],1):e._e()],1),a("v-row",[a("v-col",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.validate(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{counter:10,rules:e.nameRules,label:"Name",required:""},model:{value:e.user.nombre,callback:function(t){e.$set(e.user,"nombre",t)},expression:"user.nombre"}}),a("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),a("v-text-field",{attrs:{rules:e.passwordRules,label:"Password",type:"password",required:""},model:{value:e.user.pass,callback:function(t){e.$set(e.user,"pass",t)},expression:"user.pass"}}),a("v-btn",{staticClass:"mr-4",attrs:{type:"submit",disabled:!e.valid,color:"success"},on:{click:e.validate}},[e._v("Validate")]),a("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:e.reset}},[e._v("Reset Form")])],1)],1)],1)],1)],1)},s=[],l=a("5530"),n=a("98ab"),i=a("2f62"),u={name:"NewUser",components:{Alert:n["a"]},data:function(){return{valid:!0,nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"},function(e){return e&&e.length>=6||"Password must have at least 6 characters"}],user:{nombre:"",email:"",pass:""}}},computed:Object(l["a"])({},Object(i["d"])("users",["alert"])),methods:Object(l["a"])({},Object(i["b"])("users",["createUser"]),{validate:function(){var e=this;this.$refs.form.validate(),setTimeout((function(){e.changeFlag()}),300),this.createUser(this.user)},reset:function(){this.$refs.form.reset()},changeFlag:function(){var e=this;this.alert.flag=!0,setTimeout((function(){e.alert.flag=!1}),5e3)}})},o=u,c=a("2877"),d=a("6544"),m=a.n(d),f=a("8336"),v=a("62ad"),b=a("a523"),p=a("4bd4"),h=a("0fd9"),w=a("8654"),g=Object(c["a"])(o,r,s,!1,null,null,null);t["default"]=g.exports;m()(g,{VBtn:f["a"],VCol:v["a"],VContainer:b["a"],VForm:p["a"],VRow:h["a"],VTextField:w["a"]})}}]);
//# sourceMappingURL=chunk-2d0d3aef.5ca9298f.js.map