(function(e){function t(t){for(var a,n,i=t[0],l=t[1],u=t[2],p=0,m=[];p<i.length;p++)n=i[p],s[n]&&m.push(s[n][0]),s[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==s[l]&&(a=!1)}a&&(o.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},s={app:0},o=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("64a9"),s=r.n(a);s.a},"245c":function(e,t,r){},4805:function(e,t,r){"use strict";var a=r("897e"),s=r.n(a);s.a},5548:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"pure-menu"},[r("span",{staticClass:"pure-menu-heading"},[e._v("Photo Bomb")]),r("ul",{staticClass:"pure-menu-list"},[r("li",{staticClass:"pure-menu-item"},[r("router-link",{staticClass:"pure-menu-link",attrs:{to:"/"}},[e._v("Home")])],1),r("li",{staticClass:"pure-menu-item"},[r("router-link",{staticClass:"pure-menu-link",attrs:{to:"/mypage"}},[e._v("My Page")])],1)])]),r("div",{staticClass:"content"},[r("router-view")],1)])},o=[],n=(r("034f"),r("2877")),i={},l=Object(n["a"])(i,s,o,!1,null,null,null),u=l.exports,c=r("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},m=[],v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},d=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),r("br"),e._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],h={name:"HelloWorld",props:{msg:String}},f=h,g=(r("4805"),Object(n["a"])(f,v,d,!1,null,"b9167eee",null)),_=g.exports,b={name:"home",components:{HelloWorld:_}},w=b,y=Object(n["a"])(w,p,m,!1,null,null,null),C=y.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Register for an account")]),r("form",{staticClass:"pure-form pure-form-aligned",on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[r("fieldset",[r("p",{staticClass:"pure-form-message-inline"},[e._v("All fields are required.")]),r("div",{staticClass:"pure-control-group"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("div",{staticClass:"pure-control-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._m(0)])]),e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e()])},k=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pure-controls"},[r("button",{staticClass:"pure-button pure-button-primary",attrs:{type:"submit"}},[e._v("Submit")])])}],x={name:"register",data(){return{email:"",password:"",error:""}},methods:{async register(){try{this.error=await this.$store.dispatch("register",{email:this.email,password:this.password}),""===this.error&&this.$router.push("mypage")}catch(e){console.log(e)}}}},E=x,$=(r("8912"),Object(n["a"])(E,j,k,!1,null,"1abcd338",null)),P=$.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.user?r("div",{staticClass:"header"},[r("div",[r("h2",[e._v(e._s(e.user.email))])]),r("div",{staticClass:"button"},[r("p",[r("button",{staticClass:"pure-button pure-button-primary",on:{click:e.logout}},[e._v("Logout")])])])]):r("div",[r("router-link",{staticClass:"pure-button",attrs:{to:"/register"}},[e._v("Register")]),e._v(" or\n    "),r("router-link",{staticClass:"pure-button",attrs:{to:"/login"}},[e._v("Login")])],1)])},S=[],U={name:"mypage",computed:{user(){return this.$store.state.user}},created(){this.$store.dispatch("getUser")},methods:{async logout(){try{this.error=await this.$store.dispatch("logout")}catch(e){console.log(e)}}}},A=U,I=(r("de70"),Object(n["a"])(A,O,S,!1,null,"1d8cb646",null)),N=I.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Login to your account")]),r("form",{staticClass:"pure-form pure-form-aligned",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("fieldset",[r("p",{staticClass:"pure-form-message-inline"},[e._v("All fields are required.")]),r("div",{staticClass:"pure-control-group"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("div",{staticClass:"pure-control-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._m(0)])]),e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e()])},W=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pure-controls"},[r("button",{staticClass:"pure-button pure-button-primary",attrs:{type:"submit"}},[e._v("Submit")])])}],D={name:"login",data(){return{email:"",password:"",error:""}},methods:{async login(){try{this.error=await this.$store.dispatch("login",{email:this.email,password:this.password}),""===this.error&&this.$router.push("mypage")}catch(e){console.log(e)}}}},M=D,H=(r("b898"),Object(n["a"])(M,L,W,!1,null,"5fe349f5",null)),R=H.exports;a["a"].use(c["a"]);var T=new c["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:C},{path:"/mypage",name:"mypage",component:N},{path:"/register",name:"register",component:P},{path:"/login",name:"login",component:R}]}),Y=r("2f62"),q=r("8aa5"),z=r.n(q);a["a"].use(Y["a"]);var B=new Y["a"].Store({state:{user:null},mutations:{setUser(e,t){e.user=t}},actions:{async register(e,t){try{let a=await z.a.auth().createUserWithEmailAndPassword(t.email,t.password);return e.commit("setUser",a.data),""}catch(r){return r.message}},async login(e,t){try{let a=await z.a.auth().signInWithEmailAndPassword(t.email,t.password);return e.commit("setUser",a.user),""}catch(r){return r.message}},async logout(e){try{return await z.a.auth().signOut(),e.commit("setUser",null),""}catch(t){return t.message}},async getUser(e){try{let r=await z.a.auth().currentUser;return e.commit("setUser",r.user),""}catch(t){return""}}}});a["a"].config.productionTip=!1;var F={apiKey:"AIzaSyAY2fh6N00thwRp3j--Q-fsDdwxKNq4-YY",authDomain:"cs260final.firebaseapp.com",databaseURL:"https://cs260final.firebaseio.com",projectId:"cs260final",storageBucket:"cs260final.appspot.com",messagingSenderId:"369787875398",appId:"1:369787875398:web:4aa46b3bee15fc48"};z.a.initializeApp(F),new a["a"]({router:T,store:B,render:e=>e(u)}).$mount("#app"),z.a.auth().onAuthStateChanged(e=>{e?B.commit("setUser",e):B.commit("setUser",null)})},"60be":function(e,t,r){},"64a9":function(e,t,r){},8912:function(e,t,r){"use strict";var a=r("5548"),s=r.n(a);s.a},"897e":function(e,t,r){},b898:function(e,t,r){"use strict";var a=r("245c"),s=r.n(a);s.a},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},de70:function(e,t,r){"use strict";var a=r("60be"),s=r.n(a);s.a}});
//# sourceMappingURL=app.8ec16961.js.map