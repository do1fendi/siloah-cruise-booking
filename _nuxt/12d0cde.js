(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{281:function(t,e,r){"use strict";r.r(e);r(4),r(3),r(1),r(5),r(6);var n=r(0),c=(r(2),r(9),r(21),r(67));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={computed:m(m(m({},Object(c.b)("form",["GET_FORM","GET_FORMVALIDITY"])),Object(c.b)(["GET_TOKEN","GET_TOURPACKAGE"])),Object(c.c)("form",["SET_FORMVALIDITY"])),methods:{onSubmit:function(){var t=this,e=0;this.GET_FORM.traveler.forEach((function(r){(""===r.enLastName||r.enLastName.length<2)&&(t.$emit("checkForm",{a:r.index,b:"",c:"enLastName",d:"submit"}),e+=1),(""===r.enFirstName||r.enFirstName.length<2)&&(t.$emit("checkForm",{a:r.index,b:"",c:"enFirstName",d:"submit"}),e+=1),""!==r.birthday&&/^([0-9]{4})\/([0-9]{2})\/([0-9]{2})$/.test(r.birthday)&&r.status==t.ageCalculator(r.birthday)||(t.$emit("checkForm",{a:r.index,b:"",c:"birthday",d:"submit"}),e+=1),(""===r.idNumber||r.idNumber.length<5)&&(t.$emit("checkForm",{a:r.index,b:"",c:"idNumber",d:"submit"}),e+=1)})),e||(alert(this.GET_TOKEN),this.$router.push("thank"))},ageCalculator:function(t){var e=t.split("/"),r=e[1]+"/"+e[2]+"/"+e[0],n=new Date(r),c=n.getYear(),o=n.getMonth(),m=n.getDate(),l=new Date(this.GET_TOURPACKAGE.departureDate),d=l.getYear(),h=l.getMonth(),O=l.getDate(),f=0;if(f=d-c,h>=o)var v=h-o;else{f--;v=12+h-o}if(O>=m)var y=O-m;else{y=31+O-m;--v<0&&(v=11,f--)}return{years:f,months:v,days:y},f>=2?"adult":0==f&&v<6?"baby":f<2?"kid":void 0}}},d=r(39),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"submit"},[r("h4",{staticClass:"mt-5 mb-5"},[t._v("\n    Total Price:\n    "+t._s(this.GET_FORM.totalPrice.toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g,"$&,"))+"\n    NTD\n  ")]),t._v(" "),r("div",{staticClass:"submit text-center mt-4"},[r("b-button",{attrs:{variant:"warning"},on:{click:t.onSubmit}},[t._v("Submit")])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);