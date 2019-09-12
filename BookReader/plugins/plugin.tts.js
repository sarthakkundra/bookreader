!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}n.r(e);var p=function(){function t(){a(this,t)}return c(t,[{key:"pull",value:function(){return null}},{key:"map",value:function(t){return new h(this,t)}},{key:"filter",value:function(t){return new FilteringAsyncStream(this,t)}},{key:"buffer",value:function(t){return new y(this,t)}},{key:"flatten",value:function(){return new d(this)}}],[{key:"range",value:function(t,e){return new f(t,e)}}]),t}(),f=function(t){function e(t,n){var o;return a(this,e),(o=r(this,i(e).call(this))).start=t,o.end=n,o.cur=t,o}return s(e,t),c(e,[{key:"pull",value:function(){return this.cur<=this.end?Promise.resolve({value:this.cur++,done:!1}):Promise.resolve({value:null,done:!0})}}]),e}(p),h=function(t){function e(t,n){var o;return a(this,e),(o=r(this,i(e).call(this))).parent=t,o.mapper=n,o}return s(e,t),c(e,[{key:"pull",value:function(){var t=this;return this.parent.pull().then((function(e){if(e.done)return Promise.resolve({value:null,done:!0});var n=t.mapper(e.value);return n instanceof Promise||(n=Promise.resolve(n)),n.then((function(t){return{value:t,done:!1}}))}))}}]),e}(p),d=function(t){function e(t){var n;return a(this,e),(n=r(this,i(e).call(this))).parent=t,n._lastResult=[],n._inProgress=null,n}return s(e,t),c(e,[{key:"pull",value:function(){var t=this;return this._lastResult.length?Promise.resolve({value:this._lastResult.shift(),done:!1}):this._inProgress?this._inProgress.then((function(){return t.pull()})):(this._inProgress=this.parent.pull().then((function(e){return e.done?Promise.resolve({value:null,done:!0}):(t._lastResult=e.value,t._inProgress=null,t.pull())})),this._inProgress)}}]),e}(p),y=function(t){function e(t,n){var o;return a(this,e),(o=r(this,i(e).call(this))).parent=t,o._bufferSize=n,o._promiseBuffer=[],o}return s(e,t),c(e,[{key:"pull",value:function(){for(var t=Math.max(0,this._bufferSize-this._promiseBuffer.length+1),e=0;e<t;e++)this._promiseBuffer.push(this.parent.pull());return this._promiseBuffer.shift()}}]),e}(p);function g(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t,e){return!e||"object"!==b(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function k(t,e,n){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var S,B=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=m(this,P(e).call(this,t))).audioFormat=$.browser.mozilla?"ogg":"mp3",n.isSupported="undefined"!=typeof soundManager&&soundManager.supported(),n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(e,t),n=e,(o=[{key:"init",value:function(){this.isSupported&&soundManager.setup({debugMode:!1,preferFlash:!0,url:"/bookreader/BookReader/soundmanager/swf",useHTML5Audio:!0,flashVersion:9})}},{key:"start",value:function(t,n){navigator.userAgent.match(/mobile/i)&&soundManager.createSound({url:this.getSoundUrl(" ")}).play(),k(P(e.prototype),"start",this).call(this,t,n)}},{key:"stop",value:function(){this.playStream=null,soundManager.stopAll(),k(P(e.prototype),"stop",this).call(this)}},{key:"getPlayStream",value:function(){return this.playStream=this.playStream||this.chunkStream.map(this.fetchChunkSound.bind(this)).buffer(2),this.playStream}},{key:"playChunk",value:function(t){return new Promise((function(e){return t.sound.play({onfinish:e})})).then((function(){return t.sound.destruct()}))}},{key:"fetchChunkSound",value:function(t){var e=this;return new Promise((function(n){function o(e){n($.extend(t,{sound:e}))}soundManager.createSound({url:e.getSoundUrl(t.text),onload:function(){o(this)},onready:function(){o(this)},onbufferchange:function(){this.isBuffering||o(this)}}).load()}))}},{key:"getSoundUrl",value:function(t){return"https://"+this.opts.server+"/BookReader/BookReaderGetTTS.php?string="+encodeURIComponent(t)+"&format=."+this.audioFormat}}])&&v(n.prototype,o),r&&v(n,r),e}(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.playing=!1,this.opts=e,this.chunkStream=null,this.isSupported=!1}var e,n,o;return e=t,(n=[{key:"init",value:function(){return null}},{key:"start",value:function(t,e){this.playing=!0,this.opts.onLoadingStart(),this.chunkStream=p.range(t,e-1).map(this.fetchPageChunks.bind(this)).buffer(2).flatten(),this.step()}},{key:"stop",value:function(){this.playing=!1,this.chunkStream=null}},{key:"step",value:function(){var t=this;this.getPlayStream().pull().then((function(e){if(t.opts.onLoadingComplete(),t.opts.beforeChunkPlay(e.value),t.playing)return t.playChunk(e.value)})).then((function(){if(t.playing)return t.step()}))}},{key:"getPlayStream",value:function(){return null}},{key:"playChunk",value:function(t){return null}},{key:"fetchPageChunks",value:function(t){return $.ajax({type:"GET",url:"https://"+this.opts.server+"/BookReader/BookReaderGetTextWrapper.php",dataType:"jsonp",data:{path:this.opts.bookPath+"_djvu.xml",page:t}}).then((function(e){return e.map((function(e){return{leafIndex:t,text:e[0],lineRects:e.slice(1)}}))}))}}])&&g(e.prototype,n),o&&g(e,o),t}());jQuery.extend(BookReader.defaultOptions,{server:"ia600609.us.archive.org",bookPath:"",enableTtsPlugin:!0}),BookReader.prototype.setup=(S=BookReader.prototype.setup,function(t){S.call(this,t),this.options.enableTtsPlugin&&(this.ttsEngine=new B({server:t.server,bookPath:t.bookPath,onLoadingStart:this.showProgressPopup.bind(this,"Loading audio..."),onLoadingComplete:this.removeProgressPopup.bind(this),beforeChunkPlay:this.ttsBeforeChunkPlay.bind(this)}),this.ttsHilites=[])}),BookReader.prototype.init=function(t){return function(){this.options.enableTtsPlugin&&this.bind(BookReader.eventNames.PostInit,(function(t,e){e.$(".BRicon.read").click((function(t){return e.ttsToggle(),!1})),e.ttsEngine.init()})),t.call(this)}}(BookReader.prototype.init),BookReader.prototype.buildMobileDrawerElement=function(t){return function(){var e=t.call(this);return this.options.enableTtsPlugin&&this.ttsEngine.isSupported&&e.find(".BRmobileMenu__moreInfoRow").after($('    <li>      <span>        <span class="DrawerIconWrapper "><img class="DrawerIcon" src="'+this.imagesBaseURL+"icon_speaker_open.svg\" alt=\"info-speaker\"/></span>        Read Aloud      </span>      <div>        <span class='larger'>Press to toggle read aloud</span> <br/>        <button class='BRicon read'></button>      </div>    </li>")),e}}(BookReader.prototype.buildMobileDrawerElement),BookReader.prototype.initNavbar=function(t){return function(){var e=t.call(this);return this.options.enableTtsPlugin&&this.ttsEngine.isSupported&&$("<button class='BRicon read js-tooltip'></button>").insertAfter(e.find(".BRpage .BRicon.thumb")),e}}(BookReader.prototype.initNavbar),BookReader.prototype.ttsToggle=function(){this.autoStop&&this.autoStop(),this.ttsEngine.playing?this.ttsStop():this.ttsStart()},BookReader.prototype.ttsStart=function(){this.constModeThumb==this.mode&&this.switchMode(this.constMode1up),this.$(".BRicon.read").addClass("unread"),this.ttsEngine.start(this.currentIndex(),this.getNumLeafs())},BookReader.prototype.ttsStop=function(){this.ttsEngine.playing&&(this.$(".BRicon.read").removeClass("unread"),this.ttsEngine.stop(),this.ttsRemoveHilites(),this.removeProgressPopup())},BookReader.prototype.ttsBeforeChunkPlay=function(t){this.ttsMaybeFlip(t.leafIndex),this.ttsHighlightChunk(t),this.ttsScrollToChunk(t)},BookReader.prototype.ttsMaybeFlip=function(t){var e=this.constMode2up==this.mode,n=t>this.twoPage.currentIndexR,o=$.Deferred();return e&&n?(this.animationFinishedCallback=o.resolve.bind(o),this.next()):o.resolve(),o.promise()},BookReader.prototype.ttsHighlightChunk=function(t){this.ttsRemoveHilites(),this.constMode2up==this.mode?this.ttsHilite2UP(t):this.ttsHilite1UP(t)},BookReader.prototype.ttsScrollToChunk=function(t){if(this.constMode1up==this.mode){var e,n=0;for(e=0;e<t.leafIndex;e++)n+=parseInt(this._getPageHeight(e)/this.reduce)+this.padding;var o=t.lineRects[0][3],r=t.lineRects[t.lineRects.length-1][1],i=n+o/this.reduce,s=n+r/this.reduce;soundManager.debugMode&&console.log("leafTop = "+n+" topOfFirstChunk = "+i+" botOfLastChunk = "+s);var u=this.refs.$brContainer.prop("scrollTop"),a=u+this.refs.$brContainer.height();soundManager.debugMode&&console.log("containerTop = "+u+" containerBot = "+a),(i<u||s>a)&&this.refs.$brContainer.stop(!0).animate({scrollTop:i},"fast")}},BookReader.prototype.ttsHilite1UP=function(t){for(var e=0;e<t.lineRects.length;e++){var n=t.lineRects[e][0],o=t.lineRects[e][1],r=t.lineRects[e][2],i=t.lineRects[e][3],s=document.createElement("div");this.ttsHilites.push(s),$(s).prop("className","BookReaderSearchHilite").appendTo(this.$(".pagediv"+t.leafIndex)),$(s).css({width:(r-n)/this.reduce+"px",height:(o-i)/this.reduce+"px",left:n/this.reduce+"px",top:i/this.reduce+"px"})}},BookReader.prototype.ttsHilite2UP=function(t){for(var e=0;e<t.lineRects.length;e++){var n=t.lineRects[e][0],o=t.lineRects[e][1],r=t.lineRects[e][2],i=t.lineRects[e][3],s=document.createElement("div");this.ttsHilites.push(s),$(s).prop("className","BookReaderSearchHilite").css("zIndex",3).appendTo(this.refs.$brTwoPageView),this.setHilightCss2UP(s,t.leafIndex,n,r,i,o)}},BookReader.prototype.ttsRemoveHilites=function(){$(this.ttsHilites).remove(),this.ttsHilites=[]}}]);