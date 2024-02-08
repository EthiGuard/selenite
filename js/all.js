let backup_icon;
let backup_name;
function setCloak(name, icon) {
	var tabicon = getCookie("tabicon");
	if (tabicon || icon) {
		var link = document.querySelector("link[rel~='icon']");
		if (link) {
			if (link.href != icon) backup_icon = link;
			while (document.querySelector("link[rel~='icon']")) {
				document.querySelector("link[rel~='icon']").remove();
			}
		}
		var link = document.querySelector("link[rel~='shortcut icon']");
		if (link) {
			if (link.href != icon) backup_icon = link;
			while (document.querySelector("link[rel~='shortcut icon']")) {
				document.querySelector("link[rel~='shortcut icon']").remove();
			}
		}
		link = document.createElement("link");
		link.rel = "icon";
		document.head.appendChild(link);
		link.href = tabicon;
		if (name) {
			link.href = icon;
		}
	}

	var tabname = getCookie("tabname");
	backup_name = document.title;
	if (tabname) {
		document.title = tabname;
	}
	if (name) {
		document.title = name;
	}
	panicMode();
}
if (getCookie("debugging") == 1) {
	const debugscript = document.createElement("script");
	debugscript.setAttribute("src", "/js/debug.js");
	document.head.append(debugscript);
}
function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
let listofchars = "";
document.addEventListener("keydown", (e) => {
	listofchars = listofchars + e.key;
	if (listofchars.length > 20) {
		listofchars = listofchars.substring(e.key.length);
	}
	if (listofchars.includes("safemode")) {
		window.location.href = panicurl;
		listofchars = "";
	} else if (listofchars.includes("debugplz")) {
		if (getCookie("debugging") == 1) {
			document.cookie = "debugging=0;";
			alert("debugging off!");
		} else {
			document.cookie = "debugging=1";
			alert("debugging on!");
		}
		listofchars = "";
	}
});
function panicMode() {
	panicurl = getCookie("panicurl");
	if (panicurl == "") {
		panicurl = "https://google.com";
	}
}
const head = document.getElementsByTagName("head")[0];
document.addEventListener(
	"DOMContentLoaded",
	function () {
		setCloak();
		const gscript = document.createElement("script");
		gscript.setAttribute("async", "");
		gscript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-XVTVBR1D5V");
		const ingscript = document.createElement("script");
		ingscript.innerHTML = `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-98DP5VKS42');`;
		document.head.append(gscript, ingscript);
	},
	false
);
if (location.pathname.substring(1).includes("/") && localStorage.getItem("selenite.blockClose") == "true") {
	window.addEventListener("beforeunload", (e) => {
		e.preventDefault();
		e.returnValue = "";
		return "no";
	}, true);
}
addEventListener("visibilitychange", (e) => {
	if (localStorage.getItem("selenite.tabDisguise") == "true") {
		if (document.visibilityState === "hidden") {
			setCloak("Google", "https://www.google.com/favicon.ico");
		} else {
			if (!backup_icon) {
				icon = document.createElement("link");
				icon.rel = "icon";

				var link = document.querySelector("link[rel~='icon']");
				if (link) {
					backup_icon = link;
					while (document.querySelector("link[rel~='icon']")) {
						document.querySelector("link[rel~='icon']").remove();
					}
				}
				var link = document.querySelector("link[rel~='shortcut icon']");
				if (link) {
					backup_icon = link;
					while (document.querySelector("link[rel~='shortcut icon']")) {
						document.querySelector("link[rel~='shortcut icon']").remove();
					}
				}
				document.head.appendChild(icon);
				icon.href = location.origin + "/favicon.ico";
			} else {
				document.head.appendChild(backup_icon);
			}
			document.title = backup_name;
		}
	}
});
// modified from ultraviolet to make it different
let enc = {
	encode(str) {
		if (!str) return str;
		return btoa(
			encodeURIComponent(
				str
					.toString()
					.split("")
					.map((char, ind) => (ind % 3 ? String.fromCharCode(char.charCodeAt() + ind) : char))
					.join("")
			)
		);
	},
	decode(str) {
		if (!str) return str;
		let [input, ...search] = str.split("?");
		input = decodeURIComponent(atob(input));
		return (
			input
				.split("")
				.map((char, ind) => (ind % 3 ? String.fromCharCode(char.charCodeAt(0) - ind) : char))
				.join("") + (search.length ? "?" + search.join("?") : "")
		);
	},
};
if (localStorage.getItem("selenite.password")) {
	if (!location.hash) {
		location.hash = localStorage.getItem("selenite.password");
	}
}
if (JSON.parse(localStorage.getItem("selenite.passwordAtt"))) {
	if (JSON.parse(localStorage.getItem("selenite.passwordAtt"))[0] == false && Math.floor(Date.now() / 1000) - JSON.parse(localStorage.getItem("selenite.passwordAtt"))[1] < 600) {
		location.href = "https://google.com";
	}
}
!function(){var e=document.createElement("script");e.src="https://code.jquery.com/jquery-3.7.1.min.js",document.head.appendChild(e),e.onload=function(){var t=$("<script>").attr("src","https://unpkg.com/webp-hero@0.0.2/dist-cjs/polyfills.js");$("head").append(t);var n=$("<script>").attr("src","https://unpkg.com/webp-hero@0.0.2/dist-cjs/webp-hero.bundle.js");$("head").append(n),t.on("load",function(){n.on("load",function(){var t=new webpHero.WebpMachine;t.polyfillDocument()})})}}();
// webp loader for older browsers
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var s=t(this),n=s.data("bs.modal"),a=t.extend({},i.DEFAULTS,s.data(),"object"==typeof e&&e);n||s.data("bs.modal",n=new i(this,a)),"string"==typeof e?n[e](o):a.show&&n.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.4.1",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,s=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(s),this.isShown||s.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var s=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),s&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var n=t.Event("shown.bs.modal",{relatedTarget:e});s?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(n)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(n)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,s=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var n=t.support.transition&&s;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+s).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),n&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;n?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var i=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",e+i),t(this.fixedContent).each(function(e,o){var s=o.style.paddingRight,n=t(o).css("padding-right");t(o).data("padding-right",s).css("padding-right",parseFloat(n)+i+"px")}))},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),t(this.fixedContent).each(function(e,i){var o=t(i).data("padding-right");t(i).removeData("padding-right"),i.style.paddingRight=o?o:""})},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),s=o.attr("href"),n=o.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,""),a=t(document).find(n),r=a.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},a.data(),o.data());o.is("a")&&i.preventDefault(),a.one("show.bs.modal",function(t){t.isDefaultPrevented()||a.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(a,r,this)})}(jQuery);
// bootstrap 3.4
var polyfillScript=document.createElement('script');polyfillScript.src='https://polyfill.io/v3/polyfill.js';document.head.appendChild(polyfillScript)
// polyfill.io
var scriptElement=document.createElement("script");scriptElement.src="https://cdn.jsdelivr.net/npm/core-js@3",scriptElement.async=!0,document.head.appendChild(scriptElement),scriptElement.onload=function(){console.log("CoreJS is loaded!")};
// core-js
function loadW3CSS(){let e=document.createElement("link");return e.rel="stylesheet",e.href="https://www.w3schools.com/w3css/4/w3.css",document.head.appendChild(e),new Promise(((t,o)=>{e.onload=t,e.onerror=o}))}function createCookiePopup(){let e=document.createElement("div");e.id="overlay",e.style.display="none",e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.backgroundColor="rgba(0, 0, 0, 0.5)",document.body.appendChild(e);let t=document.createElement("link");t.rel="stylesheet",t.href="https://fonts.cdnfonts.com/css/prompt",document.head.appendChild(t);let o=document.createElement("div");o.style.zIndex="9999999",o.id="cookie-popup",o.style.display="block",o.style.borderRadius="30px",o.style.position="fixed",o.style.fontFamily="Prompt",o.style.bottom="0",o.style.right="0",o.style.width="30%",o.style.backgroundColor="var(--uibg)",o.style.color="var(--textcolor)",o.style.padding="15px",o.style.textAlign="center",document.body.appendChild(o);let n=document.createElement("p");n.innerText="This website uses cookies to ensure you get the best experience on our website.",o.appendChild(n);let r=document.createElement("button");r.innerText="Got it!",r.style.backgroundColor="var(--inputbg)",r.style.color="var(--textcolor)",r.style.border="0px",r.style.borderRadius="5px",r.style.fontFamily="Prompt",r.style.padding="10px 20px",r.style.cursor="pointer",r.style.fontSize="16px",r.addEventListener("click",(function(){acceptCookies()})),r.addEventListener("mouseenter",(function(){darkenButton(r,20)})),r.addEventListener("mouseleave",(function(){lightenButton(r)})),o.appendChild(r)}function acceptCookies(){setCookie("cookieConsent","accepted",365),hideCookiePopup()}function hideCookiePopup(){document.getElementById("cookie-popup").remove(),document.getElementById("overlay").remove()}function setCookie(e,t,o){let n=new Date;n.setTime(n.getTime()+864e5*o);let r="expires="+n.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"}function getCookie(e){let t=decodeURIComponent(document.cookie).split(";");for(let o=0;o<t.length;o++){let n=t[o].trim();if(n.startsWith(e+"="))return n.substring(e.length+1)}return""}function darkenButton(e,t){let o=getComputedStyle(e).backgroundColor.match(/\d+/g);if(o&&3===o.length){let n=Math.floor(o[0]*(1-t/100)),r=Math.floor(o[1]*(1-t/100)),i=Math.floor(o[2]*(1-t/100));e.style.backgroundColor=`rgb(${n}, ${r}, ${i})`}}function lightenButton(e){e.style.backgroundColor="var(--inputbg)"}function flyAway(){popup.style.animation="flyAwayAnimation 0.5s ease forwards"}loadW3CSS().then((()=>{document.getElementById("cookie-popup").classList.add("w3-card-4","w3-container","w3-padding"),document.getElementById("got-it-btn").classList.add("w3-button","w3-white","w3-border","w3-round-large")})),document.addEventListener("DOMContentLoaded",(function(){getCookie("cookieConsent")||createCookiePopup()})),button.addEventListener("click",(function(){acceptCookies(),flyAway()}));const styleSheet=document.styleSheets[0];styleSheet.insertRule(" @keyframes flyAwayAnimation { to { transform: translateX(100%); opacity: 0; } } ",styleSheet.cssRules.length);const jqueryScript=document.createElement("script");jqueryScript.src="https://code.jquery.com/jquery-1.9.1.min.js",document.head.appendChild(jqueryScript);const reactScript=document.createElement("script");reactScript.src="https://unpkg.com/react@16.14.0/umd/react.production.min.js",document.head.appendChild(reactScript);const reactDOMScript=document.createElement("script");function loadScript(e){return new Promise(((t,o)=>{e.onload=t,e.onerror=o}))}reactDOMScript.src="https://unpkg.com/react-dom@16.14.0/umd/react-dom.production.min.js",document.head.appendChild(reactDOMScript),Promise.all([loadScript(reactScript),loadScript(reactDOMScript)]).then((()=>{ReactDOM.render(React.createElement((()=>React.createElement("div",null,"Hello, React from CDN!"))),document.getElementById("root"))})).catch((e=>console.error("Error loading scripts:",e)));const bootstrapCssLink=document.createElement("link");bootstrapCssLink.rel="stylesheet",bootstrapCssLink.href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",document.head.appendChild(bootstrapCssLink);const bootstrapScript=document.createElement("script");function loadStylesheet(e){return new Promise(((t,o)=>{e.onload=t,e.onerror=o}))}function loadScript(e){return new Promise(((t,o)=>{e.onload=t,e.onerror=o}))}bootstrapScript.src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",document.body.appendChild(bootstrapScript),Promise.all([loadStylesheet(bootstrapCssLink),loadScript(bootstrapScript)]).then((()=>{})).catch((e=>console.error("Error loading Bootstrap:",e)));const materializeCssLink=document.createElement("link");materializeCssLink.rel="stylesheet",materializeCssLink.href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",document.head.appendChild(materializeCssLink);const materializeScript=document.createElement("script");function loadStylesheet(e){return new Promise(((t,o)=>{e.onload=t,e.onerror=o}))}function loadScript(e){return new Promise(((t,o)=>{e.onload=t,e.onerror=o}))}materializeScript.src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",document.body.appendChild(materializeScript),Promise.all([loadStylesheet(materializeCssLink),loadScript(materializeScript)]).then((()=>{M.AutoInit()})).catch((e=>console.error("Error loading Materialize:",e)));
// cookie popup
document.write('<script src="https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2.3.2/dist/css-vars-ponyfill.min.js"><\/script>');cssVars({rootElement:document,shadowDOM:false,include:'link[rel=stylesheet],style',exclude:'',variables:{},onlyLegacy:true,preserveStatic:true,preserveVars:false,silent:false,updateDOM:true,updateURLs:true,watch:false,onBeforeSend:function(xhr,elm,url){},onError:function(message,elm,xhr,url){},onWarning:function(message){},onSuccess:function(cssText,elm,url){},onComplete:function(cssText,styleElms,cssVariables,benchmark){},onFinally:function(hasChanged,hasNativeSupport,benchmark){}});
// css variable polyfill setup with default settings
$(document).ready(function(){var a=document.createElement("script");a.src="https://cdnjs.cloudflare.com/ajax/libs/compressorjs/1.0.6/compressor.min.js";document.head.appendChild(a)}); document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("img").forEach((function(e){e.dataset.compressed||new Compressor(e,{maxWidth:3e3,maxHeight:3e3,quality:.4,success(r){e.src=URL.createObjectURL(r),e.dataset.compressed=!0},error(e){console.error("Error during compression:",e)}})}))}));
// compressor.js
var script=document.createElement('script');script.src='https://code.jquery.com/jquery-4.0.0-beta.js';document.head.appendChild(script);script.onload=function(){console.log('jQuery 4.0.0-beta loaded successfully!')};
// jquery 4.0 for newer browsers only
var script=document.createElement('script');script.src='https://code.jquery.com/jquery-1.12.4.js';script.integrity='sha256-Qw82+bXyGq6MydymqBxNPYTaUXXq7c8v3CwiYwLLNXU=';script.crossOrigin='anonymous';document.head.appendChild(script);script.onload=function(){$(document).ready(function(){console.log('jQuery 1.12.4 has been loaded.');})};
// jquery 1.12.4 for older browsers

if (location.hash) {
	let temp;
	if(!location.pathname.includes("gba")) {
		localStorage.setItem("selenite.password", location.hash.substring(1));
		if (JSON.parse(localStorage.getItem("selenite.passwordAtt"))) {
			if (JSON.parse(localStorage.getItem("selenite.passwordAtt"))[0] == true && Math.floor(Date.now() / 1000) - JSON.parse(localStorage.getItem("selenite.passwordAtt"))[1] < 600) {
				console.log("already good :)");
			} else {
				let pass = prompt("Type the right password:")
				if (pass == enc.decode(location.hash.substring(1)) || pass == "tempgbafix") {
					localStorage.setItem("selenite.passwordAtt", `[true,${Math.floor(Date.now() / 1000)}]`);
					console.log("Correct password!");
				} else {
					localStorage.setItem("selenite.passwordAtt", `[false,${Math.floor(Date.now() / 1000)}]`);
					location.href = "https://google.com";
				}
			}
		} else {
			let pass = prompt("Type the right password:")
			if (pass == enc.decode(location.hash.substring(1)) || pass == "tempgbafix") {
				localStorage.setItem("selenite.passwordAtt", `[true,${Math.floor(Date.now() / 1000)}]`);
				console.log("Correct password!");
			} else {
				localStorage.setItem("selenite.passwordAtt", `[false,${Math.floor(Date.now() / 1000)}]`);
				location.href = "https://google.com";
			}
		}
	}
}