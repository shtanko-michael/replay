(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/replay/components/common.js":function(e,t,n){"use strict";function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return r}),n.d(t,"k",function(){return a}),n.d(t,"g",function(){return c}),n.d(t,"d",function(){return i}),n.d(t,"f",function(){return l}),n.d(t,"h",function(){return u}),n.d(t,"i",function(){return p}),n.d(t,"j",function(){return g}),n.d(t,"c",function(){return d}),n.d(t,"b",function(){return y}),n.d(t,"e",function(){return h});var r="replay-";function a(e){for(var t=null==e?"":e,n=[],o=0;o<(arguments.length<=1?0:arguments.length-1);o++)(o+1<1||arguments.length<=o+1?void 0:arguments[o+1])&&n.push(t+(o+1<1||arguments.length<=o+1?void 0:arguments[o+1]));return n.join(" ")}var s=function(e){return e};function c(e){var t=e.classes,n=e.selectClasses,r=e.classNames,c=e.classNamePrefix;if(t&&n){var i=n(t);return Array.isArray(i)?i.filter(s).join(" "):i}if(r)return a.apply(void 0,[c].concat(o(r)))}function i(e,t){var n,o=(t||e.currentTarget).getBoundingClientRect();return n=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(n.pageX-o.left,o.width)),y:Math.max(0,Math.min(n.pageY-o.top,o.height)),width:o.width,height:o.height}}function l(e){return function(t){e.indexOf(t.key)>=0&&(t.preventDefault(),t.stopPropagation())}}var u=function(e,t){return e!==t&&(!(e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())&&!(Number.isNaN(e)&&Number.isNaN(t)))},A=function(e){return null!=e&&e.constructor==={}.constructor},p=function(e,t){if(e===t)return!0;if(A(e)&&A(t)){var n=Object.keys(e),o=Object.keys(t);return n.length===o.length&&(!(n.filter(function(n){return u(e[n],t[n])}).length>0)&&0===o.filter(function(n){return u(t[n],e[n])}).length)}if(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length){for(var r=e.length;r--;)if(e[r]!==t[r])return!1;return!0}return!1};function f(e){if(null==e)return{};var t={},n=e;return Object.keys(e).forEach(function(e){A(n[e])?t[e]=f(n[e]):t[e]=n[e]}),t}function g(e,t){var n=f(e);if(t){var o=t;Object.getOwnPropertyNames(o).forEach(function(e){A(o[e])?A(n[e])?n[e]=g(n[e],o[e]):n[e]=f(o[e]):n[e]=o[e]})}return n}var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return n&&0===e?"":e<10&&o?"0".concat(e).concat(t):"".concat(e).concat(t)},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=Math.round(e),o="";"number"!==typeof e||isNaN(e)||e===1/0?n=0:n<0&&(n=-n,o=t);var r=Math.floor(n/86400),a=86400*r,s=Math.floor((n-a)/3600),c=a+3600*s,i=Math.floor((n-c)/60),l=n-c-60*i;return o+m(r,".",!0,!1)+m(s,":",0===r)+m(i,":",!1)+m(l)},y=function(e){var t=e instanceof Date&&!isNaN(e.getTime()),n=0,o=0,r=0;return t&&null!=e&&(n=t?e.getHours():0,o=t?e.getMinutes():0,r=t?e.getSeconds():0),m(n,":",!1)+m(o,":",!1)+m(r)},h=function(e,t){var n=null;return{start:function(){n||(n=setInterval(e,1e3*t))},stop:function(){n&&(clearInterval(n),n=null)}}}},"./src/replay/components/controls/ControlsBar/ControlsBar.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./src/replay/components/common.js");function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,i=new Array(s),A=0;A<s;A++)i[A]=arguments[A];return o=this,n=!(r=(e=c(t)).call.apply(e,[this].concat(i)))||"object"!==a(r)&&"function"!==typeof r?l(o):r,u(l(l(n)),"baseClassName","container"),u(l(l(n)),"selectClasses",function(e){return e.container}),n}var n,A,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,o["Component"]),n=t,(A=[{key:"render",value:function(){var e=this.props,t=e.className,n=e.classNamePrefix,a=e.classes,s=e.children,c=this.selectClasses,i=Object(r.g)({classes:a,selectClasses:c,classNamePrefix:n,classNames:[t,this.baseClassName]});return o.createElement("div",{className:i},s)}}])&&s(n.prototype,A),p&&s(n,p),t}();u(A,"defaultProps",{classNamePrefix:r.a,useDefaultClassNaming:!0});var p=A;function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}A.__docgenInfo={description:"",methods:[{name:"selectClasses",docblock:null,modifiers:[],params:[{name:"classes",type:null}],returns:null}],displayName:"Container",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},children:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:"The controls to be included in the container."}}};var y=function(e){function t(){var e,n,o,r,a,s,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u];return o=this,n=!(r=(e=g(t)).call.apply(e,[this].concat(l)))||"object"!==f(r)&&"function"!==typeof r?d(o):r,a=d(d(n)),c="controls-bar",(s="baseClassName")in a?Object.defineProperty(a,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[s]=c,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,p),t}();y.displayName="ControlsBar";t.a=y},"./src/replay/components/controls/ControlsBar/ControlsBar.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),s=(n("./src/replay/replay-default.css"),n("./node_modules/docz/dist/index.m.js")),c=n("./src/replay/components/controls/ControlsBar/ControlsBar.js"),i=n("./src/replay/docs/mdx-helpers/SimpleTable.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,f(t).call(this,e))).layout=null,n}var n,o,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=u(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"controlsbar-component"}},"ControlsBar component"),r.a.createElement(a.MDXTag,{name:"p",components:t},"This is the container element for the bottom-aligned bar with player controls."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Except for adhering to the conventions on class names, there is no functionality in this component."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(s.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZ2k9OABHISQunJVwAUQqBkKtGAwDCKACA-OA4H9AV7SmRwaCEKA4BvVwjmNOVoMkWD4NQ5DASdah9DgViyMoCjJFItEeMo6i-JA8ihIEQjIPYZwiNgSxXA8WA3RNejGIQmAkIBQ9OKIdAsAtTYoDhTiZL_eTFJgSTiPYIMpWUuizSVO0NXYYB2E0Hx5Hs-UAAEYCIEQBlQViunacFUF0VFjlOAAvZwCESbF2G4Vz1iiARnlQK52gABnYZMZiwdp9xrGZOxYWdsoAFkK9gADZCuK9YwBAgAxH1oESbL-GcQ5EUdTB2AABSEfglgCn44DKxEmprFqaBkmLLnYABGKqSvkcLIqmABBOZkvYSM3PIGwoHQcN2HkTlkrEQ6YxkdhUUSmBuGAQ84oS7F5G3WtgBO6BzuCAAyIHxkSeZKGaf6zou7g4flMBQgintUHadgAH4NgB8NI2uq5ocB1BNprKQZGrd8zFhFzMCw0IcMO67uFu6MSb2lca0TWzcNazIUmvAgftrNdRMEqiji3VcpC5nAedcPn9B-qQ2fJsxvxANTmJQjS0MSDDaZwvCtAoED9AYCxjBMS2retm3bbtvlzGMdhtXgCAUmCuBtjQEJ3coVFYiLLpHs--B2F5MwLbtqPo9th2zB8oiXPaT4NxoTjNIySQhp1jIAFUGn41w0Ez7PkLzguQKLl0BEN_0E6k5O2MzAhOLSavYkkZwFy2CIBE77upWFWvVVQevrMbjMOKedJ-ng5woC4TP58XmuzgIkex6TlP2LT6f2_gm9wgiYLD5uahh_CzeHQn1OW64gTeIANR40Jj0kZ-oFf_817rxPr-35unFdAP04vxMSYsRLcQomLC-o8_5QQAVPYBYlJCWAFAuYuDRUAtQEFEFGqD0ELxdFgnBeCgqwKvggpuSCRa8VLokDwkptj6moC8YUWcdaMJ2Cw1AbDV74V_g3RBu8M590fovSg8UzTHjERIqREoZGwPWJHGOJgHbsCdi7fWUxPbe3DsFVRVs45wIbjTbClpRHSEwuYi0ujgqqGwLAtWGttYsWEXfZBglIEgIgWA0W1EAJG2AnoMCIBHjsB8mAKAowI6SHgWHEIdgubeQVOaKyLlC7Fxou6aCnocCejbhkDumTq7eKrhkf0ZhyBoXwo6KB4kYRYFAugOwJSMipRrIwuAMB7A1LgAAOR9N0FKjd6kWkYRJEexMzB-OgQElgU0daDOPAddoszxL-ipg6MxdMSK0PEiPZxcF1KaWkKcHSekDILmMp3WSMBzKwECUBYBptwLhMidEkYzkHRGESTZLUKTHKvhHmYBK8xhqDjsClYA6whAjDgOjK4O0BCZESIwNyABtVEM4UgAF0rjYoKJdas8gQURWoFFAgClYDxWelCjpFgypdgKFcHKJULBUosgAGWQvsbKYQIizQsNUZwfgTgjGynlKVq1aoAGJ7Dnm1FVbU54hXsC8AIaczhposvYGy9YGrpyOGieWeUKRUVqsNRkY1aE7jLUbgkWY3TLXCi1SHbKNgux0BdZqjIopOwQDyNVRq7K9isAyFE0YABND1XBMCo1DfNAgi17VrRDesKgJrsqypWsmFadUVqtTVbidAExsorRyjlAApGqhZmlsqcr9GYUlW0KVTAmBKdAtKkrQozTxYU2aADs2oAAcABOMd9hLVMPNW0DA2bzznlaoWgArGq2gTSdoL3dtlWAYBXyJpAim8tNUiqhqtQIbVkpdX6s6a661PFbXdOypmp9llm1ku2uMS9Id6UwprPey9OrKp6vPYBm1Tr7Wvsg2FImn623jC7b-g6_7GXlV1e0AATDldNNZw0iliPELdbssrygiDMWDLaAzktQJS9AzZ4ixG7aHXtNZ8k4AIEhulh6FruvlC8Rj5A1WUB1QlVlOAV0ftbbR9t6BHAuGQ6xiw7HOPMbgDxgg7UiCdW6iAXqfR-rye6CNSgY0Jp-2mpZUNIwbC0CvYibKPwRiZAo1J6jX7ZjkkSGpg6LysxMwZZwZokY_NTDhiMt8gWLBdAIH0cwnGGML3IGpkeFgvILm6VFycY44uIaMyl9YxMqNVIQ6Q6I_FXQpVCzdQLEBgvVfC_KSLqHawxdy-0H4Lp_RpZhBRboLXos5YEOYULqXLpuZKzJ6SdyHnDMOm5OFdh5BXBM3cRmt0Wtfu2DARIVFMspUWxjScow4A4CiDMSMcKauRl1B4dQPccCsHiIyOAl3RiciuMiTkAFKBoCfBaN8331C_dQP9yL2VutBcOodkGx34U4FgLOCY10BtFim5sTsGR6W3fu1KHA23EivcWxinKuLPyrja8Nu6HNayMEbd0J6sBXr07U99VcQs6cY5yIzl6wAO2dlZ4LIWtO0TB2eszn9dK2c0-F79LnWOzuzEjPLo4AWWay413WQsBPXrtBVwD9gABqXwnaMheR58zrjX0hea6FsAFXxNbfC6kBMG3GvOSckd7bl3Ag3c7n5-gP3WuvDoESEHiwwBFuK4u29kYSwIDrep07xMoudfAAJ3t7oxv2gWjhQb43EBzchwl4L9ntvgA3buw9p7n94Cx4-yEVAiRvvncjJGGvjIljqET-r5PHPOPsDTxnykRv5QWkRAkfPnBR857Rsb9QRfxfAE80kNT7fnswE9-H8vZWCAVZoOv2vnuy9O5d4Hk_7vj8y41z77fHuvey5dyHsPZeXfUpgEL8nNYitkq2VMHZ9Mpk5I9y7-hySg6sxymsrEk8u8hSs8ZSWSCB1cTy2goWhgkgESkaXyvCUkvy_g_y5ogKWo6SDobkeAiQ50WQvS_gAyQy6mYM4K6YE0AA4jPLEKtvQQAXvn0ssjACNJhBAJ5CkvkpICIZ8BNJUjQODMZpCgdEwdQKwfvBwewKDC1hbFYJsGjiAsOOqt0GgNUqEJgDkN7B2loeUjXGHOoljDDHQFcNLP0sWBNhFH0nUlSlko0s0kklqDgOuDvAQIwBwRtgapSNQfhLwassAuYZDt0rAFKKEd0vcPNuwFimiAUPihjISrOJdInujJkXOAAD4YzIqoqMC5GpGzi3RVZ9Isa3TVI0HwAfCVxZJkoWCojRABxcHKFKa1h1FhFDL8GQBYBXBcHxG8EDGCGhoWB5AwBaLmKjEdQgZoiMiFYtHZYRgCC4xZZfrHQ8FDJLC9G0HHjjFYD7HVH0EEwXTLYQoib0oTC2A4ADg3FjYWDbGPQDzcH1FLYHR3FwDPFo5RQHG8H0rkGUG0DzHHivao4vFnGTG1gxE9zxHwCwnQk0FjFdCDHIk9C7EQlXAYqAl7EEj3FdI9LYkwC4qrhXR_GU7mCxgcD4nHivT0nwDfR_SnSEzyCkxxhjZFbhR_7HDWK7KuHmFgHKAuKnLuJAKRATQoHGwhIGBvKSAfIxLUZgrdCIl_rJF5HpFlE4qXS_5YDWSqmOhEAsFsHkBdGBYHHwCIoYzqmhpMnHE2l5H2mklOnlGFBwa8kGkuRGnyGoAWmbakmOkErumhpoSBBQBuk4pOF8lGkPgHR5HsCFGoCvyBACBkq-nCCapoBZAalDHsAplEBplLBdQFmpkZBLAlplpllFkVkm5uyEBXCFlpl6lenWRfojFBnomCGrKawA76nWSIzIxBT9jdlYDgl14DgCH5k6kFBLDsaoB0FIoorISlF5FiAN6JmbYIbEgvAQBLToDHEHRTmDHJQpQpkJBHbtBoxXAnmCFjZfpMnFHIQHQYq4pjY4KHSwDjgHQ5TKjT6MAFl0EI50ApATD_kQCG6G4o6rjhLnjURJB7AzAxDaYVAoxXCtTCjsDRIiacB2ABRByYRgA9xsDdATDuDsDnaSCQA4QZDsarh1aHSLkQkYoQBk5ZYol9HHjPmJAPF5B4CRi7kxAHlHnG7MXwCsVk5_Fe5e7UlYmolDI8U_Z_ZoxvhTLhTGB8lDlSgjkeChAAwTmvbTGzG7Lgm6roxeA8QSioBkhjlXCzmzjzn5LiWJE8Vrnukbkhm6ktZyXGUCk4RmVZGYx3njmkmvYhVOU4AuV4xAUsWk5JmFHXlTL6KTZRS2BaLFw5ApQvD-Q1Y5VEADkuTaUoy-AUGZBglhVHQZownrDwlxE1U1hMnqbVUKVHFjnNpXCBmfH2V2m1XvHqlXDqk1YOUFFFErloojViAumtXWnLklGTXTVcV8FjlRkFDNoN4jW1b1ZnEqGgx1UfH4TwAwU05fr7XZBDUpT7XqkhZnFf5CyMWRhKW2A8WCXvHnW3XHWy5yVnVyZnE4A0W0AbHpUCEujoBA4g5Pjyh3W1jpZ9YcXZaxZU4_XqnSWFa9aZYPVNWfWtZDbmAhWGU3UzXHGRVY3cnNptlFVIw6Ushng3hzoVQpDnjho0COCuo5m0CvYwCsAECfZN5LDdz8w2kAASlg-oXKl4_k-gDerN2Zi5HNgW4S2odWkAvQ9MEQRYg0Px-YeIwcs87a4MRK3srg7AAAUs4BaCJihX2CMMhPUPFLEF7FkerciEaFhaYVzSeH2lNtaOKHZClJGALa6PkYUVzbhL0CivoPJBlGON9rTfTQUL0hAPoL7QQLjGNt-R4ZkFKNkEzfoGNg9aHRxm0CdKHLDoXREKECXadojmBfiLdDlNjRYNgGiOaDnczWFjCNzUXZXZsHACTu-WjRlnocFoXSdO4GkOgJYMXb3btZ3WHX4LONkFPT3Q0TXYWPXY3Zna3egLnf5nPR8AvRPcvVXf3dyejf1quM3VnbQDve3QdKHWTTWHJajvmfqNEHgIrlgJGGyuwG_RMGdn9lfdvbvbhGVGkAABrsAWjRREAp0gX7pLA-0PZVl4Ae6wmll_0f1RBf0_2YMAOg5APZ230nhgMwBRpQMwNwPkaIORBwObANkEBoOrgoPDG0PINcATCwn0MpCNmUMPbcOEArHk3UZaVU0lVngADSO2Xg1EXawwIovQBAN40SOwUYBOcAU9N4MAyjpw226Ac1q565DeUjDClAsjIDNWrAv2OQPluNh0BOMjmqIDVwJjjjxDNAieqOD16jmj2jKjejOADiWAuoYAkYDjZjTj7d-OO210YgKUDd8N4T5jUTU57dJlOEadZeSTkTJ4qIImq2cs7R1AmTNOMl6lIj3pDoX66VytFwe9kYrgvNiQSwHgTTnj6wD1xtjWHgm9clWEfWj9FgnTnAMm7giIkMzsWQs9HgIzbREUMAEz2oUzsOrgp4Y4aCx4mx3TazBAGzMAuMvTdj_T3SgzCNuWAAhJGP0uWTXLYIMv0g09dLDtc7Wbc7QQ8z01_sVi6JU1MNU3ADjj3AdJGJQHdvZcAFdDVqC-oOwOc-eXTFALPdC40TJuiIPKrvDBCyi9ipXb3IVVUwhrYKKvEJ8ueAAI6hB9j-2NON7NPqptNXCWUUjmABYtbDPdOHOI3xbogwBn1D1Q6Ri2CAtSiPOz1CtV4iufNbEIbqM7QHTCu4TqOPN_FbY7aUTysSuKtquRg9N_HeNqs7QgVI74hwspTqM3hGu12b2DZctGjxAnMUmrgdm1PhgEA7SOBIwd2yv_XQCA1hM7Z5VwBK1gDEWusNMYoE64otMRs7Zk7fZr14B6vBYsAht1NusetZgb3w19P2u8uOs05yXms-u0UbEE6BvBuhv6A6sxuJBRshA1txuWuFiNZ_mD1w0PVPVwAvWuBPOgydsvU9Oz2rMJtnkpTvAJub2fmRgZ0QAHTDugXgWcAWgWj_nWsCuuCSWwvwweCSXXQ5sDP5tCxyVLF5vf7n1ZbhIOGcDxoxBxCIswAUuMYJQU5HO5uP3fOiPDksiYAaS9LsQgtgsYwQsN4QtbWHTQtnllmLhZbP1UY9b8uo6PnRIugoZwc9EIbChuw5mIspTQt_EKvROE4Afd7_XCjwUnT-vJCstl4PXiu46p2YeZTxANse7w3QnsQNsHQ_szB_suggv9BMdQAsd_Hwdw1Qk9HIcwCce4cCfYcNsifjalPQ02u5bVLsTvsU0OjFUjm_AZD9CYA6uUjgtKBhp6eLyJHozAdXAKuWkIZUAzBUf8m_uSeGfdLQ0PW6cormeb1frN10D5DUCdVeS4f4b6fwD_nhKiptBnS6G5CoAuiIj4TUSJDnOrgEdni6gjD-mDgZAJRAlt5-e0ZBRBce6kcCDkcCVlvUfX60cAuasB1NL-dBQsdrtDPBZ0c9whYiaJAtdsfocOfSemdecGf2c9eRv82NdFfUDCcX6w2ZbidCyjeDfce8f7OFcBeoAzfX5pZl5zcX3bdFgDeRv32Tcbfye7cUnQ2yV2OjflOUy_P_HSjCh4J7O-HNzAsdN6BpCmrNkVl9VlTlUDq61EoRahr-TIX3hgAABaGQlAjLwgzLB0xzMAoaTK8PVlFFKUJ7Zg7TT9dj4PCUTQMPQgYrX37SLbV5N5IztA33dYq0eUsOTKR2xQOUAAJMAGgDT2buz90gD9EMKPIMUOwFcMUOz5zzAN9_IDzxpNRPzwIIL1Mvi386Vs99EHs8C90roC0k2Tc0sC6CkO0eGm_QINsF5SD2PpFtVxYBnUIEjEYQdHg7bxgK9Vr3ANDTO84YYdkP0hL4bzAMb7sBFvncFqqRM5r9QC0luyMr9xJAlXhfcy7xH273H-HxgFCvDCQmgC8M3jB_TXmPE3y-28Fk7_b4BQk6jiX_n1A5X-gHq570YT7wbzEEb9RIHwWb783_7636cx2chPSng5GsKG9nb3mBgSOnVFVJWtDb34Tlgl3K71x33wkuP5P6241QhsMH0P3-_f9ThRscPxGDkNA-gH33P1sEn9dBgcmHVFPw-Rv4cF2xgEs7P6gPP0n4vy_2_2n6PpvwIHYL8tf0rR38ps2mFMvLRSgD89-beGvhQ1_6P90Az_OAGf1d6X96oDdYAVFE170oYB0DOATtCf6n9X-5_b_tA1AHhBQ4vyG_mNjkq94hm9fb3h31IoB8jcq4XfK92oQH4T-hOJYNBGKjfpO8drPrNdENysDVeuzdBG9yrZwCeBiAPgVwPT7xNhBog3BGrwkEcDU6ZAjmjIL4HI8lBNONgWoJgKp0sB74CwF8yV6PdXaKg7gro3V7-0T-tAeyks1oC48XihLOAI_EYwICpmKUBwXoVGbzNFmyzUGOczuauAHmfgnZnswObp0xwvgB_r-ViEtg0A5A-lGv2t5xDU-kfAvh03a4eCvBzg7oLDj8FbsoOUATepF2gCIVtoaLJ7jRE-RlCNgWwbYDgFXBwCDotgTwQvG8G0AjskQs8ELQf6bFWUfxTQSxjwpdCuAhQvoVkB2b6gUhHNYYXqj-JZD6UnQgoVM0xj9CxwX_FpEsPSGKcVOVOWgVYJe6GDb4yuB_toKWC6DR8Bg48JIIPxjD6C7QWQTcNzbCDThqgh4eoMT5p9TB7AcwZp2V5TYzwWCQGjXlFBIxq4wLY8BMCcBXAtmt0KxlwHjx6ABANeXYYkRj6uDsKcQ8XhiPiANBtQ9lcERkBrzEiDoF5KANQLsao42iIoREbiPurBZQh6IikdqFa7U9yRRI7UAmTHBkjCRUASMHCOGCLBuRQorEQkgrS38LupTWEnkxmBMias4nWjuyN5FcjqkEoAQIKJryCt1RUAYkcp2FwEiORVIhFgpwfyHDWynpVAGrGmjbA5Y_4TQNQGeQmxQkLWfgOJX4BXB-AQIYkFUG8AZALQv4YAmNHWD8B8MG3H0ewH4A5QcA8YnKOGJrD8Byg5AfoMhSCgxj-AcrfIH-EaQ-hgC_JckJQESB5g8gRKIFOPmLABjQQAgZMRYH4BRA0A2YlQBGA0BwAGxsYkAJgHmARgIoSdTsUgCyz8AgUrYgAHr5ocAdUHAMmC7GNjBAWoK0JEAnFTiZxc4kAIVmbTOIQQ3gFFpABSCBJXRqBd0fKRAAwoQAtAX0FkB9F-izQtAXPEuM8z8B5ACgeQPICAA",__position:0,__code:"<ControlsBar />",__scope:{props:this?this.props:n,ControlsBar:c.a,SimpleTable:i.a}},r.a.createElement(c.a,null)),r.a.createElement(a.MDXTag,{name:"p",components:t},"The example shows an empty controls bar."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),r.a.createElement(s.PropsTable,{of:c.a}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Please read the ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),r.a.createElement(i.a,{rows:[{Element:"div","Class name":"controls-bar","Generic class name":"",States:"",Parent:""}]}))}}])&&A(n.prototype,o),l&&A(n,l),t}();m.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js");function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},c={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},i={orderSpacing:0,borderCollapse:"collapse"},l={padding:"20px",verticalAlign:"top"},u=r({},l,{fontStyle:"italic",opacity:.5}),A=r({},l,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),p=function(e){var t=e.rows,n=t?t.map(function(e){return Object.values(e).join("-")}).join("-"):"";if(t&&t.length){var r=Object.keys(t[0]);return o.createElement("table",{style:s},o.createElement("thead",{style:c},o.createElement("tr",{style:i},r.map(function(e){return o.createElement("th",{key:"header-"+e,style:l},e)}))),o.createElement("tbody",null,t.map(function(e,t){return o.createElement("tr",{key:n+"-row-"+t,style:i},Object.values(e).map(function(e,r){return o.createElement("td",{key:n+"-cell-"+t+"-"+r,style:(a=e,""===a?u:A)},function(e){return""===e?"none":e}(e));var a}))})))}};t.a=p,p.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/replay-default.css":function(e,t,n){}}]);
//# sourceMappingURL=components-controls-controls-bar-controls-bar.6bfa52384a29498303f3.js.map