(window.webpackJsonp=window.webpackJsonp||[]).push([[1,6,7,8],{279:function(e,t,r){var content=r(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("03f3974f",content,!0,{sourceMap:!1})},280:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(2),r(6);var o=r(0),n=r(67);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.b)("form",["GET_FORM"])),methods:{}},f=r(39),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"submit"},[r("h4",{staticClass:"mt-5 mb-5"},[e._v("Total Price: "+e._s(this.GET_FORM.totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,","))+" NTD")]),e._v(" "),r("div",{staticClass:"submit text-center mt-4"},[r("b-button",{attrs:{variant:"warning"},on:{click:e.onSubmit}},[e._v("Submit")])],1)])}),[],!1,null,null,null);t.default=component.exports},283:function(e,t,r){"use strict";r(279)},284:function(e,t,r){var o=r(55)(!1);o.push([e.i,".form[data-v-58df4272]{padding:5px;border:thin solid #000}.showAgreement[data-v-58df4272]:hover{cursor:pointer;color:#fff}",""]),e.exports=o},289:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(2),r(6);var o=r(0),n=r(67);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={computed:c(c(c({},Object(n.b)("form",["GET_FORM"])),Object(n.b)("roomtype",["GET_PACKAGE_PRICE"])),Object(n.c)("form",["SET_FORM"])),methods:{calPrice:function(){var e=0,t=parseInt(this.GET_FORM.adultNum),r=parseInt(this.GET_FORM.kidNum),o=this.GET_PACKAGE_PRICE.portFee*(t+r),n=this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].serviceTax*t;if(1==t&&0==r||2==t&&0==r)e=this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].singleRoom;else if(3==t&&0==r){e=this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].singleRoom+this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].tripleRoom}else if(4==t&&0==r){e=this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].singleRoom+2*this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].tripleRoom}else if(1==t&&r>0||2==t&&r>0){e=this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].singleRoom+this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].kidRoom*r}else if(3==t&&r>0){e=this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].singleRoom+this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].tripleRoom+this.GET_PACKAGE_PRICE[this.GET_FORM.roomType].kidRoom}var l={field:"totalPrice",value:e+o+n};this.$store.commit("form/SET_FORM",l)}}},d=r(39),component=Object(d.a)(f,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"price"})}),[],!1,null,"564fb1fb",null);t.default=component.exports},290:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(2),r(6);var o=r(0),n=(r(31),r(9),r(21),r(67));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={data:function(){return{gender:[{value:"male",text:"男"},{value:"female",text:"女"}],country:[]}},computed:c(c(c({},Object(n.b)("form",["GET_FORM"])),Object(n.b)(["GET_TOURPACKAGE"])),Object(n.b)("country",["GET_COUNTRY"])),mounted:function(){var e=this;this.$nextTick((function(){e.country=e.GET_COUNTRY}))},methods:{setTraveler:function(e,t,input){var r={index:e,field:input,value:t};this.$store.commit("form/SET_TRAVELER",r),this.checkValidity(e,t,input)},checkValidity:function(e,t,input){switch(input){case"enLastName":t.length<2?(this.$refs.enLastName[e].$el.classList.add("form-control"),this.$refs.enLastName[e].$el.classList.add("is-invalid"),this.$refs.enLastName[e].$el.focus()):(this.$refs.enLastName[e].$el.classList.remove("is-invalid"),this.$refs.enLastName[e].$el.classList.add("is-valid"));break;case"enFirstName":t.length<2?(this.$refs.enFirstName[e].$el.classList.add("form-control"),this.$refs.enFirstName[e].$el.classList.add("is-invalid"),this.$refs.enFirstName[e].$el.focus()):(this.$refs.enFirstName[e].$el.classList.remove("is-invalid"),this.$refs.enFirstName[e].$el.classList.add("is-valid"));break;case"birthday":if(10==t.length&&this.GET_FORM.traveler[e].status!=this.ageCalculator(t)||!/^([0-9]{4})\/([0-9]{2})\/([0-9]{2})$/.test(t)){switch(this.GET_FORM.traveler[e].status){case"adult":"adult"!=this.ageCalculator(t)&&alert("Age should older than 2 years old!");break;case"kid":"kid"!=this.ageCalculator(t)&&alert("Age should younger than 2 years old!")}this.$refs.birthday[e].$el.classList.add("form-control"),this.$refs.birthday[e].$el.classList.add("is-invalid"),this.$refs.birthday[e].$el.focus()}else this.$refs.birthday[e].$el.classList.remove("is-invalid"),this.$refs.birthday[e].$el.classList.add("is-valid");break;case"gender":""==t?(this.$refs.gender[e].$el.classList.add("form-control"),this.$refs.gender[e].$el.classList.add("is-invalid"),this.$refs.gender[e].$el.focus()):(this.$refs.gender[e].$el.classList.remove("is-invalid"),this.$refs.gender[e].$el.classList.add("is-valid"));break;case"idNumber":t.length<5?(this.$refs.idNumber[e].$el.classList.add("form-control"),this.$refs.idNumber[e].$el.classList.add("is-invalid"),this.$refs.idNumber[e].$el.focus()):(this.$refs.idNumber[e].$el.classList.remove("is-invalid"),this.$refs.idNumber[e].$el.classList.add("is-valid"))}},defaultFields:function(){var e=this;setTimeout((function(){if("undefined"!=e.$refs.gender)for(var i=0;i<e.GET_FORM.traveler.length;i++)e.$refs.gender[i].$el.value="male",e.$refs.country[i].$el.value="Taiwan"}),500)},showAgreementModal:function(){this.$refs.childAgreement.showAgreement()},ageCalculator:function(e){var t=e.split("/"),r=t[1]+"/"+t[2]+"/"+t[0],o=new Date(r),n=o.getYear(),l=o.getMonth(),c=o.getDate(),f=new Date(this.GET_TOURPACKAGE.departureDate),d=f.getYear(),m=f.getMonth(),h=f.getDate(),v=0;if(v=d-n,m>=l)var O=m-l;else{v--;O=12+m-l}if(h>=c)var _=h-c;else{_=31+h-c;--O<0&&(O=11,v--)}return{years:v,months:O,days:_},v>=2?"adult":v<2&&v>=0&&O>=6?"kid":0==v&&O<6?"baby":void 0}}},d=(r(283),r(39)),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return this.GET_FORM.adultNum?r("div",{staticClass:"travelerForm"},[e._l(this.GET_FORM.traveler,(function(t){return r("div",{key:t.index,staticClass:"mt-4"},[r("b-card",[r("b-badge",{staticClass:"p-2",attrs:{variant:"primary"}},[e._v(e._s(t.index)+" "+e._s(t.status))]),e._v(" "),r("b-form",{staticClass:"mt-2"},[r("b-form-row",[r("b-col",[r("label",{attrs:{for:""}},[e._v("Full Chinese Name")]),e._v(" "),r("b-form-input",{ref:"chname",refInFor:!0,attrs:{placeholder:"Full Chinese Name",name:"chname"},on:{change:function(r){return e.setTraveler(t.index,r,"chname")}}})],1),e._v(" "),r("b-col",[r("label",{attrs:{for:""}},[e._v("Birthday *")]),e._v(" "),r("b-form-input",{ref:"birthday",refInFor:!0,attrs:{placeholder:"YYYY/MM/DD",name:"birthday"},on:{change:function(r){return e.setTraveler(t.index,r,"birthday")}}})],1)],1),e._v(" "),r("b-form-row",{staticClass:"mt-2"},[r("b-col",[r("label",{attrs:{for:""}},[e._v("English Last Name *")]),e._v(" "),r("b-form-input",{ref:"enLastName",refInFor:!0,attrs:{placeholder:"English Last Name",name:"enLastName"},on:{change:function(r){return e.setTraveler(t.index,r,"enLastName")}}})],1),e._v(" "),r("b-col",[r("label",{attrs:{for:""}},[e._v("English First Name *")]),e._v(" "),r("b-form-input",{ref:"enFirstName",refInFor:!0,attrs:{placeholder:"English First Name",name:"enFirstName"},on:{change:function(r){return e.setTraveler(t.index,r,"enFirstName")}}})],1)],1),e._v(" "),r("b-form-row",{staticClass:"mt-2"},[r("b-col",[r("label",{attrs:{for:""}},[e._v("Country *")]),e._v(" "),r("b-form-select",{ref:"country",refInFor:!0,attrs:{options:e.country,name:"country"},on:{change:function(r){return e.setTraveler(t.index,r,"country")}}})],1),e._v(" "),r("b-col",[r("label",{attrs:{for:""}},[e._v("Gender *")]),e._v(" "),r("b-form-select",{ref:"gender",refInFor:!0,attrs:{options:e.gender,name:"gender"},on:{change:function(r){return e.setTraveler(t.index,r,"gender")}}})],1),e._v(" "),r("b-col",[r("label",{attrs:{for:""}},[e._v("Id Number *")]),e._v(" "),r("b-form-input",{ref:"idNumber",refInFor:!0,attrs:{placeholder:"Id Number / Passport",name:"idNumber"},on:{change:function(r){return e.setTraveler(t.index,r,"idNumber")}}})],1)],1)],1)],1)],1)})),e._v(" "),r("div",{staticClass:"mt-2 text-right"},[r("h6",[r("b-badge",{staticClass:"showAgreement",attrs:{variant:"danger",small:""},on:{click:e.showAgreementModal}},[e._v("Show Agreement")])],1)]),e._v(" "),r("Submit"),e._v(" "),r("Agreement",{ref:"childAgreement"}),e._v("\n  "+e._s(this.GET_FORM)+"\n")],2):e._e()}),[],!1,null,"58df4272",null);t.default=component.exports;installComponents(component,{Submit:r(280).default,Agreement:r(291).default})},300:function(e,t,r){"use strict";r.r(t);r(4),r(3),r(1),r(5),r(2),r(6);var o=r(0),n=r(67);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={data:function(){return{form:{roomType:"",adultNum:0,kidNum:0},adult:[{value:0,text:"0"},{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"}],kid:[{value:0,text:"0"},{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"}]}},computed:c(c(c(c({},Object(n.b)("roomtype",["GET_ROOMTYPE"])),Object(n.b)("form",["GET_FORM"])),Object(n.c)("form",["SET_FORM"])),{},{roomOption:function(){return this.GET_ROOMTYPE}}),created:function(){},methods:{onChangeAdult:function(){switch(this.form.adultNum){case 0:this.kid=[{value:0,text:"0"},{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"}];break;case 1:this.kid=[{value:0,text:"0"},{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"}];break;case 2:this.kid=[{value:0,text:"0"},{value:1,text:"1"},{value:2,text:"2"}];break;case 3:this.kid=[{value:0,text:"0"},{value:1,text:"1"}];break;case 4:this.kid=[{value:0,text:"0"}]}},onChangeKid:function(){switch(this.form.kidNum){case 0:this.adult=[{value:0,text:"0"},{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"}];break;case 1:this.adult=[{value:0,text:"0"},{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"}];break;case 2:this.adult=[{value:0,text:"0"},{value:1,text:"1"},{value:2,text:"2"}];break;case 3:this.adult=[{value:0,text:"0"},{value:1,text:"1"}];break;case 4:this.adult=[{value:0,text:"0"}]}},onClickSet:function(){var e="roomType",t=this.form.roomType,r={field:e,value:t};this.$store.commit("form/SET_FORM",r),r={field:e="adultNum",value:t=this.form.adultNum},this.$store.commit("form/SET_FORM",r),r={field:e="kidNum",value:t=this.form.kidNum},this.$store.commit("form/SET_FORM",r),this.$refs.elPrice.calPrice(),this.$refs.defaultGender.defaultFields()}}},d=r(39),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"chooseroom"},[r("b-form",[r("b-form-row",[r("b-col",[r("label",{attrs:{for:""}},[e._v("Choose room")]),e._v(" "),r("b-form-select",{attrs:{options:e.roomOption},model:{value:e.form.roomType,callback:function(t){e.$set(e.form,"roomType",t)},expression:"form.roomType"}})],1),e._v(" "),r("b-col",[r("label",{attrs:{for:""}},[e._v("Adult")]),e._v(" "),r("b-form-select",{attrs:{options:e.adult},on:{change:e.onChangeAdult},model:{value:e.form.adultNum,callback:function(t){e.$set(e.form,"adultNum",t)},expression:"form.adultNum"}})],1),e._v(" "),r("b-col",[r("label",{attrs:{for:""}},[e._v("Kids")]),e._v(" "),r("b-form-select",{attrs:{options:e.kid},on:{change:e.onChangeKid},model:{value:e.form.kidNum,callback:function(t){e.$set(e.form,"kidNum",t)},expression:"form.kidNum"}})],1)],1),e._v(" "),r("b-col",{staticClass:"text-right mt-2 pr-0"},[r("b-button",{staticClass:"pl-5 pr-5",attrs:{variant:"primary"},on:{click:e.onClickSet}},[e._v("Set")])],1)],1),e._v(" "),r("Price",{ref:"elPrice"}),e._v(" "),r("TravelerForm",{ref:"defaultGender"})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Price:r(289).default,TravelerForm:r(290).default})}}]);