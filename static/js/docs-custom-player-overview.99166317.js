(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"./src/replay/docs/custom-player/overview.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a("./node_modules/react/index.js"),r=a.n(n),o=a("./node_modules/@mdx-js/tag/dist/index.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=l(this,c(t).call(this,e))).layout=null,a}var a,n,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,r.a.Component),a=t,(n=[{key:"render",value:function(){var e=this.props,t=e.components;s(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"overview"}},"Overview"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Besides what can be achieved through ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/configuration"}},"configuration overrides")," or ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"CSS rules (skinning, layout)"),", some approaches exist for creating a custom Replay player component."),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"strategies-for-customisation"}},"Strategies for customisation"),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"adding-custom-features-in-container-components-wrapping-replay"}},"Adding custom features in container components wrapping Replay"),r.a.createElement(o.MDXTag,{name:"p",components:t},"In some cases, it is simpler to wrap extra features around the default Replay player component. For instance integrating with an online video service's REST API, or adding analytics, might be a concern that can be kept in a container component consuming the ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/replay/api"}},"Replay API"),"."),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"replacing-text-graphics-controlsplayer-ui-through-the-player-composer"}},"Replacing text, graphics, controls/player UI through the player composer"),r.a.createElement(o.MDXTag,{name:"p",components:t},"A full player can be composed through the function ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/playerComposer.js#L44"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"composePlayer()")),". This takes a render method for a player UI, a set of UI strings, and a set of graphics/icons (typically SVG), and produces a React component that can be distributed/consumed separately as a custom player."),r.a.createElement(o.MDXTag,{name:"p",components:t},"The UI render method specifies the full DOM tree for the player controls, overlays, and UI containment. A typical strategy would be to copy the ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/default-player/playerUI.js#L69-L107"}},"default render method")," and add, remove, or replace some of its components."),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"build-a-separate-player-picking-components-and-modules-independently"}},"Build a separate player picking components and modules independently"),r.a.createElement(o.MDXTag,{name:"p",components:t},"After familiarising oneself with the different components included the full player, it is of course possible to refer these individually and compose a new player."),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"forking-the-github-repo-and-modify-the-default-player"}},"Forking the GitHub repo and modify the default player"),r.a.createElement(o.MDXTag,{name:"p",components:t},"This might be an option if the architecture and patterns don't match the requirements for customisation."),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"the-anatomy-of-replay"}},"The anatomy of Replay"),r.a.createElement(o.MDXTag,{name:"p",components:t},"These modules, components, and concepts are essential to the Replay architecture."),r.a.createElement(o.MDXTag,{name:"ul",components:t},r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"The ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/default-player/Replay.js"}},"main player component"),", created from the playerComposer. A custom player means a new main player component."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"The ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/components/player/PlayerController/PlayerController.js"}},"player controller"),". This is reused when creating a new, custom player. ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/architecture/player-controller"}},"More about the PlayerController"),"."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"The ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/default-player/playerUI.js"}},"player UI")," with element tree, ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/default-player/default-skin/graphics.js"}},"graphics"),", and ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/default-player/strings.js"}},"strings"),". One or all of these might be reused or replaced when creating a custom player."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vimond/replay/tree/master/src/replay/components/player/containment-helpers"}},"Containment components")," for several overall concerns. In the default player UI, they are gathered in one component, the ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/components/player/PlayerUIContainer/PlayerUIContainer.js"}},"PlayerUIContainer"),". Might be reused in a custom UI."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vimond/replay/tree/master/src/replay/components/controls"}},"Player controls"),"."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"The ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/components/player/PlayerController/connectControl.js#L30"}},"connectControl")," higher-order-component, wrapping all controls/components relating to the playback/video streamer so that they can ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/architecture/connected-controls#connecting-the-controls"}},"comsume and control the playback state"),"."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"A selection of one ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vimond/replay/tree/master/src/replay/components/player/VideoStreamer"}},"video streamer")," according to streaming requirements, or the ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/components/player/VideoStreamer/CompoundVideoStreamer/CompoundVideoStreamer.js"}},"CompoundVideoStreamer")," ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/advanced-playback/adaptive-streaming#enabling-playback-for-multiple-streaming-technologies-based-on-stream-technology-resolution"}},"auto-detecting which of them")," to be used. With the default Replay player, which one to be used is specified when inserting the Replay component in an app. Custom players might specify one of them directly."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"A ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/components/player/PlayerController/connectControl.js#L103"}},"higher-order component for the video streamer"),", connecting it to the PlayerController, making it controllable."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"Some special components: ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/components/player/RenderIfEnabled.js"}},"RenderIfEnabled"),", ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/components/player/settings-helpers/PreferredSettingsApplicator.js"}},"PreferredSettingsApplicator"),"."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"Configuration. A custom player can replace the ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/default-player/baseConfiguration.js"}},"base configuration"),". Configuration ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://localhost:3000/#/custom-replay/configuration"}},"overrides can be specified")," when inserting Replay."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"CSS. The ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/default-player/default-skin/index.css"}},"default skin")," can be replaced or ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/custom-replay/skins-styles"}},"rules can be overridden"),".")),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"custom-video-streamers"}},"Custom video streamers"),r.a.createElement(o.MDXTag,{name:"p",components:t},'The purpose of creating a custom video streamer would be wrapping other streaming libraries or "headless" players into a React component, exposing the same API as those included in the Replay npm package. There is currently no specific documentation on doing this.'))}}])&&m(a.prototype,n),p&&m(a,p),t}();h.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-custom-player-overview.6bfa52384a29498303f3.js.map