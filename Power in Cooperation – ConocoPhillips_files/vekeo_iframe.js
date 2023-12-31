//
//$Revision$ - $LastChangedDate$
//
vekeo_initialise = function(origin, vekeo_iframe, vekeo_src)
{   var vekeo_cookie  = (typeof vekeo_cookie_name != 'undefined' ? vekeo_cookie_name : 'vekeo_session_id');
    var vekeoIFrame   = vekeo_iframe.replace(/^\#/,'');
    var vekeoEmbedURL = vekeo_src;

    !function(){"use strict";function a(a,b,c){"addEventListener"in window?a.addEventListener(b,c,!1):"attachEvent"in window&&a.attachEvent("on"+b,c)}function b(){var a,b=["moz","webkit","o","ms"];for(a=0;a<b.length&&!z;a+=1)z=window[b[a]+"RequestAnimationFrame"];z||e(" RequestAnimationFrame not supported")}function c(){var a="Host page";return window.top!==window.self&&(a=window.parentIFrame?window.parentIFrame.getId():"Nested host page"),a}function d(a){return w+"["+c()+"]"+a}function e(a){t&&"object"==typeof window.console&&console.log(d(a))}function f(a){"object"==typeof window.console&&console.warn(d(a))}function g(a){function b(){function a(){k(F),i(),B[G].resizedCallback(F)}g("Height"),g("Width"),l(a,F,"resetPage")}function c(a){var b=a.id;e(" Removing iFrame: "+b),a.parentNode.removeChild(a),B[b].closedCallback(b),delete B[b],e(" --")}function d(){var a=E.substr(x).split(":");return{iframe:document.getElementById(a[0]),id:a[0],height:a[1],width:a[2],type:a[3]}}function g(a){var b=Number(B[G]["max"+a]),c=Number(B[G]["min"+a]),d=a.toLowerCase(),f=Number(F[d]);if(c>b)throw new Error("Value for min"+a+" can not be greater than max"+a);e(" Checking "+d+" is in range "+c+"-"+b),c>f&&(f=c,e(" Set "+d+" to min value")),f>b&&(f=b,e(" Set "+d+" to max value")),F[d]=""+f}function m(){function b(){function a(){e(" Checking connection is from allowed list of origins: "+d);var a;for(a=0;a<d.length;a++)if(d[a]===c)return!0;return!1}function b(){return e(" Checking connection is from: "+f),c===f}return d.constructor===Array?a():b()}var c=a.origin,d=B[G].checkOrigin,f=F.iframe.src.split("/").slice(0,3).join("/");if(d&&""+c!="null"&&!b())throw new Error("Unexpected message received from: "+c+" for "+F.iframe.id+". Message was: "+a.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function n(){return w===(""+E).substr(0,x)}function o(){var a=F.type in{"true":1,"false":1,undefined:1};return a&&e(" Ignoring init message from meta parent page"),a}function p(a){return E.substr(E.indexOf(":")+v+a)}function q(a){e(" MessageCallback passed: {iframe: "+F.iframe.id+", message: "+a+"}"),B[G].messageCallback({iframe:F.iframe,message:JSON.parse(a)}),e(" --")}function r(){return null===F.iframe?(f(" IFrame ("+F.id+") not found"),!1):!0}function s(a){var b=a.getBoundingClientRect();return h(),{x:parseInt(b.left,10)+parseInt(y.x,10),y:parseInt(b.top,10)+parseInt(y.y,10)}}function u(a){function b(){y=g,z(),e(" --")}function c(){return{x:Number(F.width)+d.x,y:Number(F.height)+d.y}}var d=a?s(F.iframe):{x:0,y:0},g=c();e(" Reposition requested from iFrame (offset x:"+d.x+" y:"+d.y+")"),window.top!==window.self?window.parentIFrame?a?window.parentIFrame.scrollToOffset(g.x,g.y):window.parentIFrame.scrollTo(F.width,F.height):f(" Unable to scroll to requested position, window.parentIFrame not found"):b()}function z(){!1!==B[G].scrollCallback(y)&&i()}function A(a){function b(a){var b=s(a);e(" Moving to in page link (#"+c+") at x: "+b.x+" y: "+b.y),y={x:b.x,y:b.y},z(),e(" --")}var c=a.split("#")[1]||"",d=decodeURIComponent(c),f=document.getElementById(d)||document.getElementsByName(d)[0];window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(c):e(" In page link #"+c+" not found and window.parentIFrame not found"):f?b(f):e(" In page link #"+c+" not found")}function C(){switch(F.type){case"close":c(F.iframe);break;case"message":q(p(6));break;case"scrollTo":u(!1);break;case"scrollToOffset":u(!0);break;case"inPageLink":A(p(9));break;case"reset":j(F);break;case"init":b(),B[G].initCallback(F.iframe);break;default:b()}}function D(a){var b=!0;return B[a]||(b=!1,f(F.type+" No settings for "+a+". Message was: "+E)),b}var E=a.data,F={},G=null;n()&&(F=d(),G=F.id,!o()&&D(G)&&(t=B[G].log,e(" Received: "+E),r()&&m()&&(B[G].firstRun=!1,C())))}function h(){null===y&&(y={x:void 0!==window.pageXOffset?window.pageXOffset:document.documentElement.scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop},e(" Get page position: "+y.x+","+y.y))}function i(){null!==y&&(window.scrollTo(y.x,y.y),e(" Set page position: "+y.x+","+y.y),y=null)}function j(a){function b(){k(a),m("reset","reset",a.iframe,a.id)}e(" Size reset requested by "+("init"===a.type?"host page":"iFrame")),h(),l(b,a,"init")}function k(a){function b(b){a.iframe.style[b]=a[b]+"px",e(" IFrame ("+c+") "+b+" set to "+a[b]+"px")}var c=a.iframe.id;B[c].sizeHeight&&b("height"),B[c].sizeWidth&&b("width")}function l(a,b,c){c!==b.type&&z?(e(" Requesting animation frame"),z(a)):a()}function m(a,b,c,d){c&&c.contentWindow?(e("["+a+"] Sending msg to iframe ("+b+")"),c.contentWindow.postMessage(w+b,"*")):(f("["+a+"] IFrame not found"),B[d]&&delete B[d])}function n(b){function c(){function a(a){1/0!==B[o][a]&&0!==B[o][a]&&(n.style[a]=B[o][a]+"px",e(" Set "+a+" = "+B[o][a]+"px"))}a("maxHeight"),a("minHeight"),a("maxWidth"),a("minWidth")}function d(a){return""===a&&(n.id=a="iFrameResizer"+s++,t=(b||{}).log,e(" Added missing iframe ID: "+a+" ("+n.src+")")),a}function f(){e(" IFrame scrolling "+(B[o].scrolling?"enabled":"disabled")+" for "+o),n.style.overflow=!1===B[o].scrolling?"hidden":"auto",n.scrolling=!1===B[o].scrolling?"no":"yes"}function g(){("number"==typeof B[o].bodyMargin||"0"===B[o].bodyMargin)&&(B[o].bodyMarginV1=B[o].bodyMargin,B[o].bodyMargin=""+B[o].bodyMargin+"px")}function h(){return o+":"+B[o].bodyMarginV1+":"+B[o].sizeWidth+":"+B[o].log+":"+B[o].interval+":"+B[o].enablePublicMethods+":"+B[o].autoResize+":"+B[o].bodyMargin+":"+B[o].heightCalculationMethod+":"+B[o].bodyBackground+":"+B[o].bodyPadding+":"+B[o].tolerance+":"+B[o].enableInPageLinks+":"+B[o].resizeFrom}function i(b){a(n,"load",function(){var a=B[o].firstRun;m("iFrame.onload",b,n),!a&&B[o].heightCalculationMethod in A&&j({iframe:n,height:0,width:0,type:"init"})}),m("init",b,n)}function k(a){if("object"!=typeof a)throw new TypeError("Options is not an object.")}function l(a){a=a||{},B[o]={firstRun:!0},k(a);for(var b in D)D.hasOwnProperty(b)&&(B[o][b]=a.hasOwnProperty(b)?a[b]:D[b]);t=B[o].log}var n=this,o=d(n.id);l(b),f(),c(),g(),i(h())}function o(a,b){null===C&&(C=setTimeout(function(){C=null,a()},b))}function p(){function a(a){return"parent"===B[a].resizeFrom&&B[a].autoResize&&!B[a].firstRun}o(function(){for(var b in B)a(b)&&m("Window resize","resize",document.getElementById(b),b)},66)}function q(){function c(a,b){if(!a.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==a.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+a.tagName+">.");n.call(a,b)}return b(),a(window,"message",g),a(window,"resize",p),function(a,b){switch(typeof b){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(b||"iframe"),function(b){c(b,a)});break;case"object":c(b,a);break;default:throw new TypeError("Unexpected data type ("+typeof b+").")}}}function r(a){a.fn.iFrameResize=function(a){return this.filter("iframe").each(function(b,c){n.call(c,a)}).end()}}var s=0,t=!1,u="message",v=u.length,w="[iFrameSizer]",x=w.length,y=null,z=window.requestAnimationFrame,A={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},B={},C=null,D={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,enableInPageLinks:!1,enablePublicMethods:!1,heightCalculationMethod:"offset",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0,closedCallback:function(){},initCallback:function(){},messageCallback:function(){},resizedCallback:function(){},scrollCallback:function(){return!0}};window.jQuery&&r(jQuery),"function"==typeof define&&define.amd?define([],q):"object"==typeof module&&"object"==typeof module.exports?module.exports=q():window.iFrameResize=window.iFrameResize||q()}();
    function initialise()
    {   var vekeo_session = readCookie(vekeo_cookie);
        if(vekeo_session != '')
            vekeoEmbedURL += '&vekeo_session='+vekeo_session;
        window.addEventListener('message',receiveIFrameMessage,false);

        var iframeElement = document.getElementById(vekeoIFrame);
        iframeElement.setAttribute('src',vekeoEmbedURL);
        iFrameResize({log: false });
    }
    function receiveIFrameMessage(event)
    {   if((typeof event.data == 'object') && (event.data.session != undefined))
		{   createCookie(vekeo_cookie,event.data.session,2);
		} else if((typeof event.data == 'object') && (event.data.iframewidth != undefined))
		{   var width = getVekeoWidth();
			event.source.postMessage( { iframewidth : width }, event.origin);
		}
    }
    function createCookie(name,value,hours)
    {   var expires = '';
        if(hours > 0)
        {   var date = new Date();
            date.setTime(date.getTime() + hours*60*60*1000);
            expires = '; expires='+date.toGMTString();
        }
        document.cookie = name+'='+value+expires+'; path=/';
    }
    function readCookie(name)
    {   var cookieArray = document.cookie.split(';');
        for(var i=0; i < cookieArray.length; i++)
        {   var cookie = cookieArray[i];
            var pos = cookie.indexOf(name+'=');
            if(pos > -1)
                return cookie.substring(pos+1+name.length);
        }
        return '';
    }
    function getVekeoWidth()
    {   var iframeElement = document.getElementById(vekeoIFrame);
        var iframeParent  = document.getElementById(vekeoIFrame).parentNode;
        return  ( iframeParent.offsetWidth  < iframeElement.offsetWidth )
                ? iframeParent.offsetHeight : iframeElement.offsetWidth;
    }
    if ( document.readyState === "complete"
      || document.readyState === "loaded"
      || document.readyState === "interactive" )
    {   initialise();
    } else
    {	document.addEventListener('DOMContentLoaded', function()
    	{   initialise();
    	});
    }
}