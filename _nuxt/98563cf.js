(window.webpackJsonp=window.webpackJsonp||[]).push([[1,6,8,9],{280:function(e,t,r){var content=r(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("a7ee9678",content,!0,{sourceMap:!1})},281:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(6);var o=r(0),n=(r(2),r(9),r(21),r(67));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={computed:c(c(c({},Object(n.b)("form",["GET_FORM","GET_FORMVALIDITY"])),Object(n.b)(["GET_TOKEN","GET_TOURPACKAGE"])),Object(n.c)("form",["SET_FORMVALIDITY"])),methods:{onSubmit:function(){var e=this,t=0;this.GET_FORM.traveler.forEach((function(r){(""===r.enLastName||r.enLastName.length<2)&&(e.$emit("checkForm",{a:r.index,b:"",c:"enLastName",d:"submit"}),t+=1),(""===r.enFirstName||r.enFirstName.length<2)&&(e.$emit("checkForm",{a:r.index,b:"",c:"enFirstName",d:"submit"}),t+=1),""!==r.birthday&&/^([0-9]{4})\/([0-9]{2})\/([0-9]{2})$/.test(r.birthday)&&r.status==e.ageCalculator(r.birthday)||(e.$emit("checkForm",{a:r.index,b:"",c:"birthday",d:"submit"}),t+=1),(""===r.idNumber||r.idNumber.length<5)&&(e.$emit("checkForm",{a:r.index,b:"",c:"idNumber",d:"submit"}),t+=1)})),t||(alert(this.GET_TOKEN),this.$router.push("thank"))},ageCalculator:function(e){var t=e.split("/"),r=t[1]+"/"+t[2]+"/"+t[0],o=new Date(r),n=o.getYear(),l=o.getMonth(),c=o.getDate(),m=new Date(this.GET_TOURPACKAGE.departureDate),d=m.getYear(),f=m.getMonth(),h=m.getDate(),v=0;if(v=d-n,f>=l)var O=f-l;else{v--;O=12+f-l}if(h>=c)var _=h-c;else{_=31+h-c;--O<0&&(O=11,v--)}return{years:v,months:O,days:_},v>=2?"adult":0==v&&O<6?"baby":v<2?"kid":void 0}}},d=r(39),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"submit"},[r("h4",{staticClass:"mt-5 mb-5"},[e._v("\n    Total Price:\n    "+e._s(this.GET_FORM.totalPrice.toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g,"$&,"))+"\n    NTD\n  ")]),e._v(" "),r("div",{staticClass:"submit text-center mt-4"},[r("b-button",{attrs:{variant:"warning"},on:{click:e.onSubmit}},[e._v("Submit")])],1)])}),[],!1,null,null,null);t.default=component.exports},286:function(e,t,r){"use strict";r(280)},287:function(e,t,r){var o=r(55)(!1);o.push([e.i,".form[data-v-536773a9]{padding:5px;border:thin solid #000}.showAgreement[data-v-536773a9]:hover{cursor:pointer;color:#fff}",""]),e.exports=o},293:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(2),r(6);var o=r(0),n=r(67);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={computed:c(c(c({},Object(n.b)("form",["GET_FORM"])),Object(n.b)("roomtype",["GET_PACKAGE_PRICE"])),Object(n.c)("form",["SET_FORM"])),methods:{calPrice:function(){var e=0,t=parseInt(this.GET_FORM.adultNum),r=parseInt(this.GET_FORM.kidNum),o=this.GET_PACKAGE_PRICE.portFee*(t+r),n=this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].serviceTax*t;if(1==t&&0==r||2==t&&0==r)e=this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].singleRoom;else if(3==t&&0==r){e=this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].singleRoom+this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].tripleRoom}else if(4==t&&0==r){e=this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].singleRoom+2*this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].tripleRoom}else if(1==t&&r>0||2==t&&r>0){e=this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].singleRoom+this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].kidRoom*r}else if(3==t&&r>0){e=this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].singleRoom+this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].tripleRoom+this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].kidRoom}var l={field:"totalPrice",value:e+o+n};this.$store.commit("form/SET_FORM",l)}}},d=r(39),component=Object(d.a)(m,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"price"})}),[],!1,null,"564fb1fb",null);t.default=component.exports},294:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(2),r(6);var o=r(0),n=(r(31),r(9),r(21),r(67));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={data:function(){return{gender:[{value:"male",text:"男"},{value:"female",text:"女"}],country:[]}},computed:c(c(c({},Object(n.b)("form",["GET_FORM"])),Object(n.b)(["GET_TOURPACKAGE"])),Object(n.b)("country",["GET_COUNTRY","GET_PHONECODE"])),mounted:function(){var e=this;this.$nextTick((function(){e.country=e.GET_COUNTRY}))},methods:{setTraveler:function(e){e.a,e.b,e.c;var t={index:e.a,field:e.c,value:e.b};this.$store.commit("form/SET_TRAVELER",t),this.checkValidity(e)},checkValidity:function(e){var t=e.a,r=e.b,input=e.c,o=e.d;switch(input){case"enLastName":r.length<2?(this.$refs.enLastName[t].$el.classList.add("form-control"),this.$refs.enLastName[t].$el.classList.add("is-invalid"),this.$refs.enLastName[t].$el.focus()):(this.$refs.enLastName[t].$el.classList.remove("is-invalid"),this.$refs.enLastName[t].$el.classList.add("is-valid"));break;case"enFirstName":r.length<2?(this.$refs.enFirstName[t].$el.classList.add("form-control"),this.$refs.enFirstName[t].$el.classList.add("is-invalid"),this.$refs.enFirstName[t].$el.focus()):(this.$refs.enFirstName[t].$el.classList.remove("is-invalid"),this.$refs.enFirstName[t].$el.classList.add("is-valid"));break;case"birthday":if(10==r.length&&this.GET_FORM.traveler[t].status!=this.ageCalculator(r)||!/^([0-9]{4})\/([0-9]{2})\/([0-9]{2})$/.test(r)){switch(this.GET_FORM.traveler[t].status){case"adult":"adult"!=this.ageCalculator(r)&&(o||alert("Age should older than 2 years old!"));break;case"kid":"baby"==this.ageCalculator(r)?o||alert("Age should older than 6 months"):"adult"==this.ageCalculator(r)&&(o||alert("Age should below 2 years old"))}this.$refs.birthday[t].$el.classList.add("form-control"),this.$refs.birthday[t].$el.classList.add("is-invalid"),this.$refs.birthday[t].$el.focus()}else this.$refs.birthday[t].$el.classList.remove("is-invalid"),this.$refs.birthday[t].$el.classList.add("is-valid");break;case"gender":""==r?(this.$refs.gender[t].$el.classList.add("form-control"),this.$refs.gender[t].$el.classList.add("is-invalid"),this.$refs.gender[t].$el.focus()):(this.$refs.gender[t].$el.classList.remove("is-invalid"),this.$refs.gender[t].$el.classList.add("is-valid"));break;case"idNumber":r.length<5?(this.$refs.idNumber[t].$el.classList.add("form-control"),this.$refs.idNumber[t].$el.classList.add("is-invalid"),this.$refs.idNumber[t].$el.focus()):(this.$refs.idNumber[t].$el.classList.remove("is-invalid"),this.$refs.idNumber[t].$el.classList.add("is-valid"));break;case"phoneNumber":r.length<9?(this.$refs.phoneNumber[t].$el.classList.add("form-control"),this.$refs.phoneNumber[t].$el.classList.add("is-invalid"),this.$refs.phoneNumber[t].$el.focus()):(this.$refs.phoneNumber[t].$el.classList.remove("is-invalid"),this.$refs.phoneNumber[t].$el.classList.add("is-valid"))}},defaultFields:function(){var e=this;setTimeout((function(){if("undefined"!=e.$refs.gender)for(var i=0;i<e.GET_FORM.traveler.length;i++)e.$refs.gender[i].$el.value="male",e.$refs.country[i].$el.value="Taiwan","adult"==e.GET_FORM.traveler[i].status&&(e.$refs.phoneCode[i].$el.value="+886")}),200)},showAgreementModal:function(){this.$refs.childAgreement.showAgreement()},ageCalculator:function(e){var t=e.split("/"),r=t[1]+"/"+t[2]+"/"+t[0],o=new Date(r),n=o.getYear(),l=o.getMonth(),c=o.getDate(),m=new Date(this.GET_TOURPACKAGE.departureDate),d=m.getYear(),f=m.getMonth(),h=m.getDate(),v=0;if(v=d-n,f>=l)var O=f-l;else{v--;O=12+f-l}if(h>=c)var _=h-c;else{_=31+h-c;--O<0&&(O=11,v--)}return{years:v,months:O,days:_},v>=2?"adult":0==v&&O<6?"baby":v<2?"kid":void 0}}},d=(r(286),r(39)),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return this.GET_FORM.adultNum?r("div",{staticClass:"travelerForm"},[e._l(this.GET_FORM.traveler,(function(t){return r("div",{key:t.index,staticClass:"mt-4"},[r("b-card",[r("b-badge",{staticClass:"p-2",attrs:{variant:"primary"}},[e._v(e._s(t.index+1)+". "+e._s(t.status.toUpperCase()))]),e._v(" "),r("b-form",{staticClass:"mt-2"},[r("b-form-row",[r("b-col",[r("label",{attrs:{for:""}},[e._v("Full Chinese Name / 中文姓名 ")]),e._v(" "),r("b-form-input",{ref:"chname",refInFor:!0,attrs:{placeholder:"Full Chinese Name",name:"chname"},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"chname",d:null})}}})],1),e._v(" "),r("b-col",[r("label",{attrs:{for:""}},[e._v("Birthday / 生日 * (YYYY/MM/DD)")]),e._v(" "),r("b-form-input",{ref:"birthday",refInFor:!0,attrs:{placeholder:"YYYY/MM/DD",name:"birthday"},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"birthday",d:null})}}})],1)],1),e._v(" "),r("b-form-row",{staticClass:"mt-2"},[r("b-col",[r("label",{attrs:{for:""}},[e._v("English Last Name / 英文姓 *")]),e._v(" "),r("b-form-input",{ref:"enLastName",refInFor:!0,attrs:{placeholder:"English Last Name",name:"enLastName"},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"enLastName",d:null})}}})],1),e._v(" "),r("b-col",[r("label",{attrs:{for:""}},[e._v("English First Name / 英文名*")]),e._v(" "),r("b-form-input",{ref:"enFirstName",refInFor:!0,attrs:{placeholder:"English First Name",name:"enFirstName"},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"enFirstName",d:null})}}})],1)],1),e._v(" "),r("b-form-row",{staticClass:"mt-2"},[r("b-col",[r("label",{attrs:{for:""}},[e._v("Country / 國籍*")]),e._v(" "),r("b-form-select",{ref:"country",refInFor:!0,attrs:{options:e.country,name:"country"},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"country",d:null})}}})],1),e._v(" "),r("b-col",[r("label",{attrs:{for:""}},[e._v("Gender / 性別 *")]),e._v(" "),r("b-form-select",{ref:"gender",refInFor:!0,attrs:{options:e.gender,name:"gender"},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"gender",d:null})}}})],1)],1),e._v(" "),r("b-col",{staticClass:"pl-0 pr-0 mt-2"},[r("label",{attrs:{for:""}},[e._v("Id Number / 身份證 *")]),e._v(" "),r("b-form-input",{ref:"idNumber",refInFor:!0,attrs:{placeholder:"Id Number / Passport",name:"idNumber"},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"idNumber",d:null})}}})],1),e._v(" "),"adult"==t.status?r("b-form-row",{staticClass:"mt-2"},[r("b-col",[r("label",{attrs:{for:""}},[e._v("Phone Code *")]),r("b-form-select",{ref:"phoneCode",refInFor:!0,attrs:{options:e.GET_PHONECODE},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"phoneCode",d:null})}}})],1),e._v(" "),r("b-col",[r("label",{attrs:{for:""}},[e._v("Phone Number / 手機 *")]),e._v(" "),r("b-form-input",{ref:"phoneNumber",refInFor:!0,attrs:{placeholder:"Phone Number",name:"phoneNumber",type:"number"},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"phoneNumber",d:null})}}})],1)],1):e._e()],1)],1)],1)})),e._v(" "),r("div",{staticClass:"mt-2 text-right"},[r("h6",[r("b-badge",{staticClass:"showAgreement",attrs:{variant:"danger",small:""},on:{click:e.showAgreementModal}},[e._v("Show Agreement")])],1)]),e._v(" "),r("Submit",{on:{checkForm:function(t){return e.checkValidity(t)}}}),e._v(" "),r("Agreement",{ref:"childAgreement"}),e._v("\n  "+e._s(this.GET_FORM)+"\n")],2):e._e()}),[],!1,null,"536773a9",null);t.default=component.exports;installComponents(component,{Submit:r(281).default,Agreement:r(295).default})},304:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(2),r(6);var o=r(0),n=r(67);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={data:function(){return{form:{roomType:"",adultNum:0,kidNum:0},adult:[{value:0,text:"0"},{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"}],kid:[{value:0,text:"0"},{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"}]}},computed:c(c(c(c({},Object(n.b)("roomtype",["GET_ROOMTYPE"])),Object(n.b)("form",["GET_FORM"])),Object(n.c)("form",["SET_FORM"])),{},{roomOption:function(){return this.GET_ROOMTYPE}}),created:function(){},methods:{onChangeAdult:function(){switch(this.form.adultNum){case 0:this.kid=[{value:0,text:"0"},{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"}];break;case 1:this.kid=[{value:0,text:"0"},{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"}];break;case 2:this.kid=[{value:0,text:"0"},{value:1,text:"1"},{value:2,text:"2"}];break;case 3:this.kid=[{value:0,text:"0"},{value:1,text:"1"}];break;case 4:this.kid=[{value:0,text:"0"}]}},onChangeKid:function(){switch(this.form.kidNum){case 0:this.adult=[{value:0,text:"0"},{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"}];break;case 1:this.adult=[{value:0,text:"0"},{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"}];break;case 2:this.adult=[{value:0,text:"0"},{value:1,text:"1"},{value:2,text:"2"}];break;case 3:this.adult=[{value:0,text:"0"},{value:1,text:"1"}];break;case 4:this.adult=[{value:0,text:"0"}]}},onClickSet:function(){if(""==this.GET_FORM.register.lastname||""==this.GET_FORM.register.firstname||""==this.GET_FORM.register.email||""==this.GET_FORM.register.phoneNumber||""==this.GET_FORM.register.address)alert("Pleas fill all 訂購人 fields");else if(""==this.form.roomType)this.$refs.room.$el.focus();else if(0==this.form.adultNum)this.$refs.adultNum.$el.focus();else{var e="roomType",t=this.form.roomType,r={field:e,value:t};this.$store.commit("form/SET_FORM",r),r={field:e="adultNum",value:t=this.form.adultNum},this.$store.commit("form/SET_FORM",r),r={field:e="kidNum",value:t=this.form.kidNum},this.$store.commit("form/SET_FORM",r),this.$refs.elPrice.calPrice(),this.$refs.defaultGender.defaultFields()}}}},d=r(39),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"chooseroom mt-5"},[r("b-form",[r("b-form-row",[r("b-col",[r("label",{attrs:{for:""}},[e._v("Choose room / 選房")]),e._v(" "),r("b-form-select",{ref:"room",attrs:{options:e.roomOption},model:{value:e.form.roomType,callback:function(t){e.$set(e.form,"roomType",t)},expression:"form.roomType"}})],1),e._v(" "),r("b-col",[r("label",{attrs:{for:""}},[e._v("Adult / 大人")]),e._v(" "),r("b-form-select",{ref:"adultNum",attrs:{options:e.adult},on:{change:e.onChangeAdult},model:{value:e.form.adultNum,callback:function(t){e.$set(e.form,"adultNum",t)},expression:"form.adultNum"}})],1),e._v(" "),r("b-col",[r("label",{attrs:{for:""}},[e._v("Kids / 小孩 （6M-2Y）")]),e._v(" "),r("b-form-select",{attrs:{options:e.kid},on:{change:e.onChangeKid},model:{value:e.form.kidNum,callback:function(t){e.$set(e.form,"kidNum",t)},expression:"form.kidNum"}})],1)],1),e._v(" "),r("b-col",{staticClass:"text-right mt-2 pr-0"},[r("b-button",{staticClass:"pl-5 pr-5",attrs:{variant:"primary"},on:{click:e.onClickSet}},[e._v("Set")])],1)],1),e._v(" "),r("Price",{ref:"elPrice"}),e._v(" "),r("TravelerForm",{ref:"defaultGender"})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Price:r(293).default,TravelerForm:r(294).default})}}]);