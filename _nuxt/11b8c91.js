(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{280:function(e,t,o){var content=o(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(56).default)("28142a28",content,!0,{sourceMap:!1})},286:function(e,t,o){"use strict";o(280)},287:function(e,t,o){var r=o(55)(!1);r.push([e.i,"p[data-v-38ab68e4]{margin-bottom:0}",""]),e.exports=r},297:function(e,t,o){"use strict";o.r(t);o(4),o(3),o(1),o(5),o(6);var r=o(0),_=(o(2),o(17),o(34),o(14),o(9),o(21),o(67));function E(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var T={computed:n(n(n(n(n({},Object(_.b)("form",["GET_FORM","GET_FORMVALIDITY"])),Object(_.b)("roomtype",["GET_PACKAGE_PRICE"])),Object(_.b)(["GET_TOKEN","GET_TOURPACKAGE"])),Object(_.c)("form",["SET_FORMVALIDITY"])),Object(_.c)(["SET_ORDERCODE"])),methods:{onSubmit:function(){var e=this,t=0;if(this.GET_FORM.traveler.forEach((function(o){(""===o.enLastName||o.enLastName.length<2)&&(e.$emit("checkForm",{a:o.index,b:"",c:"enLastName",d:"submit"}),t+=1),(""===o.enFirstName||o.enFirstName.length<2)&&(e.$emit("checkForm",{a:o.index,b:"",c:"enFirstName",d:"submit"}),t+=1),""!==o.birthday&&/^([0-9]{4})\/([0-9]{2})\/([0-9]{2})$/.test(o.birthday)&&o.status==e.ageCalculator(o.birthday)||(e.$emit("checkForm",{a:o.index,b:"",c:"birthday",d:"submit"}),t+=1),(""===o.idNumber||o.idNumber.length<5)&&(e.$emit("checkForm",{a:o.index,b:"",c:"idNumber",d:"submit"}),t+=1),"adult"==o.status&&(""===o.phoneNumber||o.phoneNumber.length<5)&&(e.$emit("checkForm",{a:o.index,b:"",c:"phoneNumber",d:"submit"}),t+=1)})),!t){var o=Date.now().toString(),r="ORC"+o.slice(o.length-7);this.$store.commit("SET_ORDERCODE",r),this.$router.push("thank")}},ageCalculator:function(e){var t=e.split("/"),o=t[1]+"/"+t[2]+"/"+t[0],r=new Date(o),_=r.getYear(),E=r.getMonth(),n=r.getDate(),T=new Date(this.GET_TOURPACKAGE.departureDate),G=T.getYear(),d=T.getMonth(),m=T.getDate(),R=0;if(R=G-_,d>=E)var c=d-E;else{R--;c=12+d-E}if(m>=n)var l=m-n;else{l=31+m-n;--c<0&&(c=11,R--)}return{years:R,months:c,days:l},R>=2?"adult":0==R&&c<6?"baby":R<2?"kid":void 0}}},G=(o(286),o(39)),component=Object(G.a)(T,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.GET_FORM.traveler.length>0?o("b-alert",{staticClass:"submit",attrs:{variant:"success",show:""}},[o("h3",[e._v("訂單資訊")]),e._v(" "),o("hr"),e._v(" "),o("p",{staticClass:"mb-2"},[e._v("房型: "+e._s(e.GET_FORM.roomType))]),e._v(" "),1==e.GET_FORM.adultNum&&0==e.GET_FORM.kidNum?o("div",[o("p",[e._v("\n        1. Adult: "+e._s(e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].singleRoom)+" +\n        "+e._s(e.GET_PACKAGE_PRICE.portFee)+" (港務税) +\n        "+e._s(e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].serviceTax)+" (服務費) =\n        "+e._s((e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].singleRoom+e.GET_PACKAGE_PRICE.portFee+e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].serviceTax).toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g,"$&,"))+"\n      ")])]):e.GET_FORM.adultNum>1&&0==e.GET_FORM.kidNum?o("div",e._l(e.GET_FORM.traveler,(function(t){return o("p",{key:t.index},[e._v("\n        "+e._s(t.index+1)+".\n        "+e._s(t.status.replace(/^./,t.status[0].toUpperCase()))+" (成人):\n        "+e._s(0==t.index||1==t.index?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].doubleRoom:e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].tripleRoom)+"\n        +\n        "+e._s(e.GET_PACKAGE_PRICE.portFee)+" (港務税) +\n        "+e._s(e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].serviceTax)+" (服務費) =\n        "+e._s(((0==t.index||1==t.index?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].doubleRoom:e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].tripleRoom)+e.GET_PACKAGE_PRICE.portFee+e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].serviceTax).toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g,"$&,"))+"\n      ")])})),0):1==e.GET_FORM.adultNum&&e.GET_FORM.kidNum>0||2==e.GET_FORM.adultNum&&e.GET_FORM.kidNum>0?o("div",e._l(e.GET_FORM.traveler,(function(t){return o("p",{key:t.index},[e._v("\n        "+e._s(t.index+1)+".\n        "+e._s(t.status.replace(/^./,t.status[0].toUpperCase()))+"\n        "+e._s("adult"==t.status?"(成人)":"(小孩)")+":\n        "+e._s("adult"==t.status||"kid"==t.status&&1==t.index?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].doubleRoom:e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].kidRoom)+"\n        + "+e._s(e.GET_PACKAGE_PRICE.portFee)+" (港務税) +\n        "+e._s("adult"==t.status?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].serviceTax:0)+"\n        (服務費) =\n        "+e._s((("adult"==t.status||"kid"==t.status&&1==t.index?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].doubleRoom:e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].kidRoom)+e.GET_PACKAGE_PRICE.portFee+("adult"==t.status?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].serviceTax:0)).toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g,"$&,"))+"\n      ")])})),0):3==e.GET_FORM.adultNum&&e.GET_FORM.kidNum>0?o("div",e._l(e.GET_FORM.traveler,(function(t){return o("p",{key:t.index},[e._v("\n        "+e._s(t.index+1)+".\n        "+e._s(t.status.replace(/^./,t.status[0].toUpperCase()))+"\n        "+e._s("adult"==t.status?"(成人)":"(小孩)")+":\n        "+e._s("adult"==t.status?0==t.index||1==t.index?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].doubleRoom:e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].tripleRoom:e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].kidRoom)+"\n        + "+e._s(e.GET_PACKAGE_PRICE.portFee)+" (港務税) +\n        "+e._s("adult"==t.status?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].serviceTax:0)+"\n        (服務費) =\n        "+e._s((("adult"==t.status?2==t.index?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].doubleRoom:e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].tripleRoom:e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].kidRoom)+e.GET_PACKAGE_PRICE.portFee+("adult"==t.status?e.GET_PACKAGE_PRICE[e.GET_FORM.roomType].serviceTax:0)).toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g,"$&,"))+"\n      ")])})),0):e._e(),e._v(" "),o("div",{staticClass:"mt-5 mb-2"},[o("h5",[e._v("\n        Price / 總額:\n        "+e._s(this.GET_FORM.totalPrice.toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g,"$&,"))+"\n        NTD\n      ")])])]):e._e(),e._v(" "),o("div",{staticClass:"submit text-center mt-4"},[o("b-button",{attrs:{variant:"warning"},on:{click:e.onSubmit}},[e._v("Submit / 送出")])],1)],1)}),[],!1,null,"38ab68e4",null);t.default=component.exports}}]);