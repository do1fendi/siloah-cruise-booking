(window.webpackJsonp=window.webpackJsonp||[]).push([[1,9],{280:function(e,t,r){var content=r(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("2ac2666d",content,!0,{sourceMap:!1})},286:function(e,t,r){"use strict";r(280)},287:function(e,t,r){var n=r(55)(!1);n.push([e.i,"p[data-v-60079312]{margin-bottom:0}",""]),e.exports=n},291:function(e,t,r){var content=r(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("61326b6b",content,!0,{sourceMap:!1})},296:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(2),r(6);var n=r(0),o=(r(31),r(9),r(21),r(67));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={data:function(){return{gender:[{value:"male",text:"男"},{value:"female",text:"女"}],country:[]}},computed:c(c(c({},Object(o.b)("form",["GET_FORM"])),Object(o.b)(["GET_TOURPACKAGE"])),Object(o.b)("country",["GET_COUNTRY","GET_PHONECODE"])),mounted:function(){var e=this;this.$nextTick((function(){e.country=e.GET_COUNTRY}))},methods:{setTraveler:function(e){e.a,e.b,e.c;var t={index:e.a,field:e.c,value:e.b};this.$store.commit("form/SET_TRAVELER",t),this.checkValidity(e)},checkValidity:function(e){var t=e.a,r=e.b,input=e.c,n=e.d;switch(input){case"enLastName":r.length<2?(this.$refs.enLastName[t].$el.classList.add("form-control"),this.$refs.enLastName[t].$el.classList.add("is-invalid"),this.$refs.enLastName[t].$el.focus()):(this.$refs.enLastName[t].$el.classList.remove("is-invalid"),this.$refs.enLastName[t].$el.classList.add("is-valid"));break;case"enFirstName":r.length<2?(this.$refs.enFirstName[t].$el.classList.add("form-control"),this.$refs.enFirstName[t].$el.classList.add("is-invalid"),this.$refs.enFirstName[t].$el.focus()):(this.$refs.enFirstName[t].$el.classList.remove("is-invalid"),this.$refs.enFirstName[t].$el.classList.add("is-valid"));break;case"birthday":if(10==r.length&&this.GET_FORM.traveler[t].status!=this.ageCalculator(r)||!/^([0-9]{4})\/([0-9]{2})\/([0-9]{2})$/.test(r)){switch(this.GET_FORM.traveler[t].status){case"adult":"adult"!=this.ageCalculator(r)&&(n||alert("Age should older than 2 years old!"));break;case"kid":"baby"==this.ageCalculator(r)?n||alert("Age should older than 6 months"):"adult"==this.ageCalculator(r)&&(n||alert("Age should below 2 years old"))}this.$refs.birthday[t].$el.classList.add("form-control"),this.$refs.birthday[t].$el.classList.add("is-invalid"),this.$refs.birthday[t].$el.focus()}else this.$refs.birthday[t].$el.classList.remove("is-invalid"),this.$refs.birthday[t].$el.classList.add("is-valid");break;case"gender":""==r?(this.$refs.gender[t].$el.classList.add("form-control"),this.$refs.gender[t].$el.classList.add("is-invalid"),this.$refs.gender[t].$el.focus()):(this.$refs.gender[t].$el.classList.remove("is-invalid"),this.$refs.gender[t].$el.classList.add("is-valid"));break;case"idNumber":r.length<5?(this.$refs.idNumber[t].$el.classList.add("form-control"),this.$refs.idNumber[t].$el.classList.add("is-invalid"),this.$refs.idNumber[t].$el.focus()):(this.$refs.idNumber[t].$el.classList.remove("is-invalid"),this.$refs.idNumber[t].$el.classList.add("is-valid"));break;case"phoneNumber":r.length<9?(this.$refs.phoneNumber[t].$el.classList.add("form-control"),this.$refs.phoneNumber[t].$el.classList.add("is-invalid"),this.$refs.phoneNumber[t].$el.focus()):(this.$refs.phoneNumber[t].$el.classList.remove("is-invalid"),this.$refs.phoneNumber[t].$el.classList.add("is-valid"))}},defaultFields:function(){var e=this;setTimeout((function(){if("undefined"!=e.$refs.gender){e.$refs.chname[0].$el.focus();for(var i=0;i<e.GET_FORM.traveler.length;i++)e.$refs.gender[i].$el.value="male",e.$refs.country[i].$el.value="Taiwan","adult"==e.GET_FORM.traveler[i].status&&(e.$refs.phoneCode[i].$el.value="+886")}}),200)},showAgreementModal:function(){this.$refs.childAgreement.showAgreement()},ageCalculator:function(e){var t=e.split("/"),r=t[1]+"/"+t[2]+"/"+t[0],n=new Date(r),o=n.getYear(),l=n.getMonth(),c=n.getDate(),d=new Date(this.GET_TOURPACKAGE.departureDate),m=d.getYear(),_=d.getMonth(),E=d.getDate(),f=0;if(f=m-o,_>=l)var h=_-l;else{f--;h=12+_-l}if(E>=c)var T=E-c;else{T=31+E-c;--h<0&&(h=11,f--)}return{years:f,months:h,days:T},f>=2?"adult":0==f&&h<6?"baby":f<2?"kid":void 0}}},m=(r(304),r(39)),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return this.GET_FORM.adultNum?r("div",{staticClass:"travelerForm"},[e._l(this.GET_FORM.traveler,(function(t){return r("div",{key:t.index,staticClass:"mt-4"},[r("b-card",[r("b-badge",{staticClass:"p-2",attrs:{variant:"primary"}},[e._v(e._s(t.index+1)+". "+e._s(t.status.toUpperCase()))]),e._v(" "),r("b-form",{staticClass:"mt-2"},[r("b-form-row",[r("b-col",[r("label",{attrs:{for:""}},[e._v("Full Chinese Name / 中文姓名 ")]),e._v(" "),r("b-form-input",{ref:"chname",refInFor:!0,attrs:{placeholder:"Full Chinese Name",name:"chname"},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"chname",d:null})}}})],1),e._v(" "),r("b-col",[r("label",{attrs:{for:""}},[e._v("Birthday / 生日 * (YYYY/MM/DD)")]),e._v(" "),r("b-form-input",{ref:"birthday",refInFor:!0,attrs:{placeholder:"YYYY/MM/DD",name:"birthday"},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"birthday",d:null})}}})],1)],1),e._v(" "),r("b-form-row",{staticClass:"mt-2"},[r("b-col",[r("label",{attrs:{for:""}},[e._v("English Last Name / 英文姓 *")]),e._v(" "),r("b-form-input",{ref:"enLastName",refInFor:!0,attrs:{placeholder:"English Last Name",name:"enLastName"},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"enLastName",d:null})}}})],1),e._v(" "),r("b-col",[r("label",{attrs:{for:""}},[e._v("English First Name / 英文名*")]),e._v(" "),r("b-form-input",{ref:"enFirstName",refInFor:!0,attrs:{placeholder:"English First Name",name:"enFirstName"},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"enFirstName",d:null})}}})],1)],1),e._v(" "),r("b-form-row",{staticClass:"mt-2"},[r("b-col",[r("label",{attrs:{for:""}},[e._v("Country / 國籍*")]),e._v(" "),r("b-form-select",{ref:"country",refInFor:!0,attrs:{options:e.country,name:"country"},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"country",d:null})}}})],1),e._v(" "),r("b-col",[r("label",{attrs:{for:""}},[e._v("Gender / 性別 *")]),e._v(" "),r("b-form-select",{ref:"gender",refInFor:!0,attrs:{options:e.gender,name:"gender"},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"gender",d:null})}}})],1)],1),e._v(" "),r("b-col",{staticClass:"pl-0 pr-0 mt-2"},[r("label",{attrs:{for:""}},[e._v("Id Number / 身份證 *")]),e._v(" "),r("b-form-input",{ref:"idNumber",refInFor:!0,attrs:{placeholder:"Id Number / Passport",name:"idNumber"},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"idNumber",d:null})}}})],1),e._v(" "),"adult"==t.status?r("b-form-row",{staticClass:"mt-2"},[r("b-col",[r("label",{attrs:{for:""}},[e._v("Phone Code *")]),r("b-form-select",{ref:"phoneCode",refInFor:!0,attrs:{options:e.GET_PHONECODE},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"phoneCode",d:null})}}})],1),e._v(" "),r("b-col",[r("label",{attrs:{for:""}},[e._v("Phone Number / 手機 *")]),e._v(" "),r("b-form-input",{ref:"phoneNumber",refInFor:!0,attrs:{placeholder:"Phone Number",name:"phoneNumber",type:"number"},on:{change:function(r){return e.setTraveler({a:t.index,b:r,c:"phoneNumber",d:null})}}})],1)],1):e._e()],1)],1)],1)})),e._v(" "),r("div",{staticClass:"mt-2 text-right"},[r("h6",[r("b-badge",{staticClass:"showAgreement",attrs:{variant:"danger",small:""},on:{click:e.showAgreementModal}},[e._v("Show Agreement")])],1)]),e._v(" "),r("Submit",{on:{checkForm:function(t){return e.checkValidity(t)}}}),e._v(" "),r("Agreement",{ref:"childAgreement"})],2):e._e()}),[],!1,null,"ab965e7c",null);t.default=component.exports;installComponents(component,{Submit:r(297).default,Agreement:r(310).default})},297:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(6);var n=r(0),o=(r(2),r(17),r(34),r(14),r(9),r(21),r(67));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={computed:c(c(c(c(c({},Object(o.b)("form",["GET_FORM","GET_FORMVALIDITY"])),Object(o.b)("roomtype",["GET_PACKAGE_PRICE"])),Object(o.b)(["GET_TOKEN","GET_TOURPACKAGE"])),Object(o.c)("form",["SET_FORMVALIDITY"])),Object(o.c)(["SET_ORDERCODE"])),methods:{onSubmit:function(){var e=this,t=0;if(this.GET_FORM.traveler.forEach((function(r){(""===r.enLastName||r.enLastName.length<2)&&(e.$emit("checkForm",{a:r.index,b:"",c:"enLastName",d:"submit"}),t+=1),(""===r.enFirstName||r.enFirstName.length<2)&&(e.$emit("checkForm",{a:r.index,b:"",c:"enFirstName",d:"submit"}),t+=1),""!==r.birthday&&/^([0-9]{4})\/([0-9]{2})\/([0-9]{2})$/.test(r.birthday)&&r.status==e.ageCalculator(r.birthday)||(e.$emit("checkForm",{a:r.index,b:"",c:"birthday",d:"submit"}),t+=1),(""===r.idNumber||r.idNumber.length<5)&&(e.$emit("checkForm",{a:r.index,b:"",c:"idNumber",d:"submit"}),t+=1)})),!t){var r=Date.now().toString(),n="ORC"+r.slice(r.length-7);this.$store.commit("SET_ORDERCODE",n),this.$router.push("thank")}},ageCalculator:function(e){var t=e.split("/"),r=t[1]+"/"+t[2]+"/"+t[0],n=new Date(r),o=n.getYear(),l=n.getMonth(),c=n.getDate(),d=new Date(this.GET_TOURPACKAGE.departureDate),m=d.getYear(),_=d.getMonth(),E=d.getDate(),f=0;if(f=m-o,_>=l)var h=_-l;else{f--;h=12+_-l}if(E>=c)var T=E-c;else{T=31+E-c;--h<0&&(h=11,f--)}return{years:f,months:h,days:T},f>=2?"adult":0==f&&h<6?"baby":f<2?"kid":void 0}}},m=(r(286),r(39)),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.GET_FORM.traveler.length>0?r("b-alert",{staticClass:"submit",attrs:{variant:"success",show:""}},[r("h3",[e._v("Detail")]),e._v(" "),r("hr"),e._v(" "),r("p",{staticClass:"mb-2"},[e._v("Room Type: "+e._s(e.GET_FORM.roomType))]),e._v(" "),1==e.GET_FORM.adultNum&&0==e.GET_FORM.kidNum?r("div",[r("p",[e._v("\n        1. Adult: "+e._s(e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].singleRoom)+" +\n        "+e._s(e.GET_PACKAGE_PRICE.portFee)+" (港務税) +\n        "+e._s(e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].serviceTax)+" (服務費) =\n        "+e._s((e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].singleRoom+e.GET_PACKAGE_PRICE.portFee+e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].serviceTax).toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g,"$&,"))+"\n      ")])]):e.GET_FORM.adultNum>1&&0==e.GET_FORM.kidNum?r("div",e._l(e.GET_FORM.traveler,(function(t){return r("p",{key:t.index},[e._v("\n        "+e._s(t.index+1)+".\n        "+e._s(t.status.replace(/^./,t.status[0].toUpperCase()))+" (大人):\n        "+e._s(0==t.index||1==t.index?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].doubleRoom:e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].tripleRoom)+"\n        +\n        "+e._s(e.GET_PACKAGE_PRICE.portFee)+" (港務税) +\n        "+e._s(e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].serviceTax)+" (服務費) =\n        "+e._s(((0==t.index||1==t.index?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].doubleRoom:e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].tripleRoom)+e.GET_PACKAGE_PRICE.portFee+e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].serviceTax).toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g,"$&,"))+"\n      ")])})),0):1==e.GET_FORM.adultNum&&e.GET_FORM.kidNum>0||2==e.GET_FORM.adultNum&&e.GET_FORM.kidNum>0?r("div",e._l(e.GET_FORM.traveler,(function(t){return r("p",{key:t.index},[e._v("\n        "+e._s(t.index+1)+".\n        "+e._s(t.status.replace(/^./,t.status[0].toUpperCase()))+"\n        "+e._s("adult"==t.status?"(大人)":"(小孩)")+":\n        "+e._s("adult"==t.status||"kid"==t.status&&1==t.index?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].doubleRoom:e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].kidRoom)+"\n        + "+e._s(e.GET_PACKAGE_PRICE.portFee)+" (港務税) +\n        "+e._s("adult"==t.status?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].serviceTax:0)+"\n        (服務費) =\n        "+e._s((("adult"==t.status||"kid"==t.status&&1==t.index?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].doubleRoom:e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].kidRoom)+e.GET_PACKAGE_PRICE.portFee+("adult"==t.status?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].serviceTax:0)).toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g,"$&,"))+"\n      ")])})),0):3==e.GET_FORM.adultNum&&e.GET_FORM.kidNum>0?r("div",e._l(e.GET_FORM.traveler,(function(t){return r("p",{key:t.index},[e._v("\n        "+e._s(t.index+1)+".\n        "+e._s(t.status.replace(/^./,t.status[0].toUpperCase()))+"\n        "+e._s("adult"==t.status?"(大人)":"(小孩)")+":\n        "+e._s("adult"==t.status?0==t.index||1==t.index?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].doubleRoom:e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].tripleRoom:e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].kidRoom)+"\n        + "+e._s(e.GET_PACKAGE_PRICE.portFee)+" (港務税) +\n        "+e._s("adult"==t.status?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].serviceTax:0)+"\n        (服務費) =\n        "+e._s((("adult"==t.status?2==t.index?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].doubleRoom:e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].tripleRoom:e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].kidRoom)+e.GET_PACKAGE_PRICE.portFee+("adult"==t.status?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].serviceTax:0)).toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g,"$&,"))+"\n      ")])})),0):e._e(),e._v(" "),r("div",{staticClass:"mt-5 mb-2"},[r("h5",[e._v("\n        Total Price:\n        "+e._s(this.GET_FORM.totalPrice.toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g,"$&,"))+"\n        NTD\n      ")])])]):e._e(),e._v(" "),r("div",{staticClass:"submit text-center mt-4"},[r("b-button",{attrs:{variant:"warning"},on:{click:e.onSubmit}},[e._v("Submit / 送出")])],1)],1)}),[],!1,null,"60079312",null);t.default=component.exports},304:function(e,t,r){"use strict";r(291)},305:function(e,t,r){var n=r(55)(!1);n.push([e.i,".form[data-v-ab965e7c]{padding:5px;border:thin solid #000}.showAgreement[data-v-ab965e7c]:hover{cursor:pointer;color:#fff}",""]),e.exports=n}}]);