webpackJsonp([0],{558:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),a=n.n(r),o=n(559),c=function(){return a.a.createElement(o.a,null)};t.default=c},559:function(e,t,n){"use strict";var r=n(560);t.a=r.a},560:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(14),u=n.n(c),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.increase=n.increase.bind(n),n.decrease=n.decrease.bind(n),n.state={count:0},n}return o(t,e),i(t,[{key:"increase",value:function(){var e=this.state.count;this.setState({count:e+1})}},{key:"decrease",value:function(){var e=this.state.count;this.setState({count:e-1})}},{key:"render",value:function(){var e=this.state.count,t=this.increase,n=this.decrease;return u.a.createElement("div",null,u.a.createElement("div",null,e),u.a.createElement("div",null,u.a.createElement("input",{type:"button",onClick:t,value:"Increase"}),u.a.createElement("input",{type:"button",onClick:n,value:"Decrease"})))}}]),t}(c.Component);t.a=s}});