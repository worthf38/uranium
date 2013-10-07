(function(c){function p(b,h,j){var e={},f="[data-ur-set='"+h+"']",z="data-ur-"+h+"-component";c(b).find("["+z+"]").each(function(){if(!c(this).data("urCompInit")){var b=c(this).attr("data-ur-id")?c(this):c(this).closest(f);if(b[0]&&!b.data("urInit")){c(this).data("urCompInit",!0);var h=b.attr("data-ur-id");h||(h=E(),b.attr("data-ur-id",h));e[h]=e[h]||{};if(b.is(f))e[h].set=b[0];j?j(e[h],this):(b=c(this).attr(z),e[h][b]=e[h][b]||[],e[h][b].push(this))}}});return e}var E=function(){var c=0;return function(){return++c}}(),
n={},y="ontouchstart"in window,F=y?"touchstart":"mousedown",G=y?"touchmove":"mousemove",H=y?"touchend":"mouseup";n.toggler=function(b){b=p(b,"toggler");c.each(b,function(b,j){j.button||c.error("no button found for toggler with id="+b);j.content||c.error("no content found for toggler with id="+b);var e=c(j.button).attr("data-ur-state")||"disabled";c(j.button).add(j.content).attr("data-ur-state",e);c(j.button).click(function(e){e.stopPropagation();e=c(j.button).attr("data-ur-state")=="enabled"?"disabled":
"enabled";c(j.button).add(j.content).attr("data-ur-state",e)});c(j.set).data("urInit",!0)})};n.tabs=function(b){var h=p(b,"tabs",function(b,e){var f=c(e).attr("data-ur-tab-id");b.tabs=b.tabs||{};b.tabs[f]=b.tabs[f]||{};var h=c(e).attr("data-ur-tabs-component");b.tabs[f][h]=b.tabs[f][h]||[];b.tabs[f][h].push(e)});c.each(h,function(b,e){e.closeable=c(e.set).attr("data-ur-closeable")=="true";c.each(e.tabs,function(){var e=c(this.button).attr("data-ur-state")||"disabled";c(this.button).add(this.content).attr("data-ur-state",
e)});c.each(e.tabs,function(b,j){c(j.button).click(function(){var b=c(this).attr("data-ur-state")=="enabled";c.each(e.tabs,function(){c(this.button).add(this.content).attr("data-ur-state","disabled")});(!b||!h.closeable)&&c(j.button).add(j.content).attr("data-ur-state","enabled")})});c(e.set).data("urInit",!0)})};n.inputClear=function(b){b=p(b,"input-clear");c.each(b,function(b,j){var e=c("<div class='data-ur-input-clear-ex'></div>").hide();c(j.set).append(e);e.bind(y?"touchstart":"click",function(){f[0].value=
"";f[0].focus()}).bind("touchend",function(){f[0].blur()});var f=c(j.set).find("input");f.bind("focus",function(){f[0].value!=""&&e.show()}).bind("keydown",function(){e.show()}).bind("blur",function(){setTimeout(function(){e.hide()},150)});c(j.set).data("urInit",!0)})};n.geoCode=function(b){b=p(b,"reverse-geocode",function(b,j){b.elements=b.elements||{};b.elements[c(j).attr("data-ur-reverse-geocode-component")]=j});c.each(b,function(b,j){function e(b,e,h){var f=0,j=null,q=null,l=null;switch(c(b).attr("data-ur-reverse-geocode-component")){case "rg-city":q=
"locality";break;case "rg-street":q="street_number";break;case "rg-zip":q="postal_code";break;case "rg-state":q="administrative_area_level_1";break;case "rg-country":q="country"}for(var l=e[0],d=null,a=l.address_components.length,i=0;i<a;i++)for(var g=l.address_components[i].types.length,k=0;k<g;k++)if(d=l.address_components[i].types[k],q==d){switch(d){case "street_number":f=i;j=i+1;break;case "locality":f=i;break;case "postal_code":f=i;break;case "administrative_area_level_1":f=i;break;case "country":f=
i}break}if(h==="input")b.value=j===null?e[0].address_components[f].long_name:e[0].address_components[f].long_name+" "+e[0].address_components[j].long_name;else if(h==="select"){e=e[0].address_components[f];h=0;for(f=b.length;h<f;h++)if(b[h].value===e.long_name||b[h].value.toUpperCase()===e.short_name)b.selectedIndex=h}}var f=this.set;c(f).attr("data-ur-callback");var z=c(f).attr("data-ur-error-callback"),n,C,D;this.setupCallbacks=function(){D=this;var e=c(this.elements).filter("[data-ur-reverse-geocode-component='rg-button']");
e.length>0?c(e).bind("click",function(c){return function(){c.geocodeInit()}}(this)):(console.warn("no button for triggering reverse geocoding present"),this.geocodeInit())};this.geoSuccess=function(c){c={lat:c.coords.latitude,lng:c.coords.longitude};this.codeLatLng(c.lat,c.lng)};this.geoError=function(c){console.error("Ur geolocation error -- Error Getting Your Coordinates!");switch(c.code){case c.TIMEOUT:console.error("Ur geolocation error -- Timeout");break;case c.POSITION_UNAVAILABLE:console.error("Ur geolocation error -- Position unavailable");
break;case c.PERMISSION_DENIED:console.error("Ur geolocation error -- Permission denied");break;case c.UNKNOWN_ERROR:console.error("Ur geolocation error -- Unknown error")}z!==void 0&&eval(z)};this.geoDenied=function(){console.error("Ur geolocation error -- User Denied Geolocation")};this.codeLatLng=function(c,b){var f=new google.maps.LatLng(c,b),h=this;n.geocode({latLng:f},function(c,b){if(b==google.maps.GeocoderStatus.OK)if(c[1]){C=c;var f=D.elements;for(elm in f)f[elm].localName==="input"?e(f[elm],
C,"input"):f[elm].localName==="select"&&e(f[elm],C,"select");h.callback!==void 0&&eval(h.callback);return c}else console.error("Geocoder failed due to: "+b)})};this.geocodeInit=function(){navigator.geolocation&&(n=new google.maps.Geocoder,navigator.geolocation.getCurrentPosition(function(c){return function(b){c.geoSuccess(b)}}(this),function(c){return function(b){c.geoError(b)}}(this),this.geoDenied))};UrGeocode=function(c){return function(){c.setupCallbacks()}}(this);f=document.createElement("script");
f.type="text/javascript";f.src="https://maps.googleapis.com/maps/api/js?sensor=true&callback=UrGeocode";c("head").append(f);c(j.set).data("urInit",!0)})};n.zoom=function(b){function h(c,b){return Math.max(Math.min(b[0],c),b[1])}function j(b){function f(){d.canvasWidth=d.canvasWidth||d.container.offsetWidth;d.canvasHeight=d.canvasHeight||d.container.offsetHeight;d.width=d.width||parseInt(a.attr("width"))||parseInt(a.css("width"))||d.img.width;d.height=d.height||parseInt(a.attr("height"))||parseInt(a.css("height"))||
d.img.height;d.bigWidth=parseInt(a.attr("data-ur-width"))||d.img.naturalWidth;d.bigHeight=parseInt(a.attr("data-ur-height"))||d.img.naturalHeight;if(a.attr("data-ur-width")&&a.attr("data-ur-height")||a.attr("src")==a.attr("data-ur-src"))d.prescale=!0;d.ratio=d.bigWidth/d.width;k=(d.canvasWidth-d.bigWidth)/2;t=(d.canvasHeight-d.bigHeight)/2}function j(a){if(a.target==d.img){A=!1;o=a.pageX;m=a.pageY;v=!0;var c=a.originalEvent.touches;if(c)o=c[0].pageX,m=c[0].pageY;c=d.img.style;window.WebKitCSSMatrix?
(c=new WebKitCSSMatrix(c.webkitTransform),u=c.m41,x=c.m42):(c=c.MozTransform||c.msTransform||c.transform||"translate(0, 0)",c=c.replace(/.*?\(|\)/,"").split(","),u=parseInt(c[0]),x=parseInt(c[1]));a.preventDefault();a.stopPropagation()}}function p(a){if(v&&a.target==d.img){a.preventDefault();a.stopPropagation();var c=a.pageX,b=a.pageY;if(a=a.originalEvent.touches)c=a[0].pageX,b=a[0].pageY;c-=o;b-=m;if(Math.abs(c)>5||Math.abs(b)>5)A=!0;c=h(u+c,[-k,k]);b=h(x+b,[-t,t]);l(c,b,d.ratio)}}function y(a){A||
d.zoomOut();a.preventDefault();a.stopPropagation();v=!1;A=!0}function s(){if(d.state=="enabled-in")a.css({webkitTransitionDelay:"",MozTransitionDelay:"",OTransitionDelay:"",transitionDelay:""}),d.img.src=a.attr("data-ur-src"),e.indexOf(d.img.getAttribute("data-ur-src"))==-1&&setTimeout(function(){e.indexOf(d.img.getAttribute("data-ur-src"))==-1&&i.attr("data-ur-state","enabled")},16),d.state="enabled",d.container.setAttribute("data-ur-state",d.state),c(d.container).on(F,j).on(G,p).on(H,y);else if(d.state==
"enabled-out")d.state="disabled",d.container.setAttribute("data-ur-state",d.state),c(d.container).unbind(F,j).unbind(G,p).unbind(H,y)}function q(a,c){g.attr("data-ur-state","enabled");d.state="enabled-in";d.container.setAttribute("data-ur-state",d.state);l(a?a:0,c?c:0,d.ratio)}function l(c,d,b){var B="";c!=void 0&&(B=n+c+"px, "+d+"px"+C);b!=void 0&&(B+=z?" scale("+b+")":" scale3d("+b+", "+b+", 1)");return a.css({webkitTransform:B,MozTransform:B,msTransform:B,transform:B})}var d=this;this.container=
b.set;this.img=b.img[0];this.prescale=!1;this.canvasWidth=this.canvasHeight=this.bigWidth=this.bigHeight=this.width=this.height=0;this.ratio=1;this.state="disabled";this.button=b.button;this.idler=b.loading;var a=c(this.img),i=c(this.idler),g=c(this.button),k,t,r,w,u=0,x=0,o=0,m=0,v=!1,A=!0;e.push(a.attr("src"));this.zoomIn=function(c){if(d.state=="disabled"){if(!d.width)f(),d.img.style.width=d.width+"px",d.img.style.height=d.height+"px";var b=c.pageX,e=c.pageY;if(c.touches)b=c.touches[0].pageX,e=
c.touches[0].pageY;r=c.offsetX;w=c.offsetY;if(r==void 0||w==void 0)c=d.img.getBoundingClientRect(),r=b-c.left,w=e-c.top;d.prescale?(b=h(d.bigWidth/2-d.ratio*r,[-k,k]),e=h(d.bigHeight/2-d.ratio*w,[-t,t]),q(b,e)):(d.state="enabled-in",d.img.src=a.attr("data-ur-src"),setTimeout(function(){d.prescale||i.attr("data-ur-state","enabled")},0))}};this.zoomOut=function(){if(d.state=="enabled")g.attr("data-ur-state","disabled"),d.state="enabled-out",d.container.setAttribute("data-ur-state",d.state),l(0,0,1)};
d.container.getAttribute("data-ur-touch")!="disabled"&&c(d.container).click(d.zoomIn);a.load(function(){a.attr("src")==a.attr("data-ur-src")&&e.push(a.attr("src"));i.attr("data-ur-state","disabled");if(!d.prescale&&d.state=="enabled-in"){d.prescale=!0;f();var c=h(d.bigWidth/2-d.ratio*r,[-k,k]),b=h(d.bigHeight/2-d.ratio*w,[-t,t]);a.css({webkitTransitionDelay:"0.3s",MozTransitionDelay:"0.3s",OTransitionDelay:"0.3s",transitionDelay:"0.3s"});q(c,b)}});this.zoom=function(){if(d.state=="disabled"){if(!d.width)f(),
d.img.style.width=d.width+"px",d.img.style.height=d.height+"px";d.prescale?q(0,0):(d.state="enabled-in",d.img.src=a.attr("data-ur-src"),setTimeout(function(){e.indexOf(d.img.getAttribute("data-ur-src"))==-1&&i.attr("data-ur-state","enabled")},0))}else d.zoomOut()};c(d.button).click(d.zoom);c.each(["webkitTransitionEnd","transitionend","oTransitionEnd"],function(c,b){a.on(b,s)});this.reset=function(){d.prescale=!1;d.width=d.height=0;a.css({width:"",height:""});l();d.state="enabled-out";s();i.attr("data-ur-state",
"disabled");g.attr("data-ur-state","disabled")}}var b=p(b,"zoom"),e=[],f=/Android [12]|Opera/.test(navigator.userAgent),z=f,n=f?"translate(":"translate3d(",C=f?")":", 0)";c.each(b,function(b,e){Uranium.zoom[b]=new j(this);c(e.set).data("urInit",!0)})};n.carousel=function(b){function h(c){c.preventDefault();c.stopPropagation()}function j(b){function f(){var a=c("<a>").css({webkitTransform:"translate3d(0, 0, 0)",MozTransform:"translate3d(0, 0, 0)",msTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)"}),
b=a.css("webkitTransform"),d=a.css("MozTransform"),e=a.css("msTransform"),a=a.css("transform");return b!="none"&&b||d!="none"&&d||e!="none"&&e||a!="none"&&a}function j(){a.options.transform3d=a.options.transform3d&&f();a.options.transform3d||(A="translate(",J=")");g.each(function(b,d){if(c(d).attr("data-ur-state")=="active")return a.itemIndex=b,!1});n();I(a.options.center?a.itemIndex+a.options.cloneLength[0]:a.itemIndex);p();a.update();c(a.scroller).on("dragstart",function(){return!1});a.options.touch&&
c(a.scroller).on(F,E).on(G,M).on(H,N).click(function(c){a.flag.click||h(c)});a.button.prev.click(function(){s(1)});a.button.next.click(function(){s(-1)});c(window).on("orientationchange",a.update);c(window).on("resize",function(){a.update();setTimeout(a.update,100)});g.find("img").addBack("img").load(a.update);a.autoscrollStart()}function n(){if(a.options.infinite){if(a.options.cloneLength.join()=="0,0")if(a.options.fill)a.options.cloneLength=a.options.center?[a.options.fill-1,a.options.fill-1]:[0,
a.options.fill];else if(a.options.center){for(var b=m/2+g[o].offsetWidth/2,d=o;b>0;d=(d-1+a.count)%a.count)b-=g[d].offsetWidth,a.options.cloneLength[0]++;b=m/2+g[0].offsetWidth/2;for(d=0;b>0;d=(d+1)%a.count)b-=g[d].offsetWidth,a.options.cloneLength[1]++}else{b=m;for(d=0;b>0;)b-=g[d].offsetWidth,a.options.cloneLength[1]++,d=(d+1)%g.length}i.attr("data-ur-clones",a.options.center?a.options.cloneLength:a.options.cloneLength[1]);b=document.createDocumentFragment();for(d=0;d<a.options.cloneLength[1];d++){var e=
d%a.count,e=g.eq(e).clone(!0).attr("data-ur-clone",e).attr("data-ur-state","inactive");b.appendChild(e[0])}g.parent().append(b);if(a.options.center){for(var b=document.createDocumentFragment(),f=a.count-a.options.cloneLength[0]%a.count,d=f;d<f+a.options.cloneLength[0];d++)e=d%a.count,e=g.eq(e).clone(!0).attr("data-ur-clone",e).attr("data-ur-state","inactive"),b.appendChild(e[0]);g.parent().prepend(b)}g=c(a.scroller).find("[data-ur-carousel-component='item']");o=g.length-1}else a.options.cloneLength=
[0,0],i.attr("data-ur-clones",0)}function p(){if(a.dots){var b=c(a.dots).find("[data-ur-carousel-component='dot']");if(b.length!=a.count){b.remove();for(var b=c("<div data-ur-carousel-component='dot'>"),d=document.createDocumentFragment(),e=0;e<a.count;e++){var f=b.clone().attr("data-ur-state",e==a.itemIndex?"active":"inactive");d.appendChild(f[0])}c(a.dots).append(d)}}}function D(a){var c=a.originalEvent.touches,a=c&&c[0]||a;return{x:a.clientX,y:a.clientY}}function I(b){if(b!==void 0){a.itemIndex=
b;if(a.itemIndex<0)a.itemIndex=0;else if(a.itemIndex>o)a.itemIndex=o;b=a.itemIndex;a.options.infinite&&a.options.center&&(b=a.itemIndex-a.options.cloneLength[0]);b%=a.count;c(a.counter).html(b+1+" of "+a.count);g.attr("data-ur-state","inactive");g.eq(a.itemIndex).attr("data-ur-state","active");c(a.dots).find("[data-ur-carousel-component='dot']").attr("data-ur-state","inactive").eq(b).attr("data-ur-state","active");a.options.infinite?c([a.button.prev,a.button.next]).attr("data-ur-state","enabled"):
(c(a.button.prev).attr("data-ur-state",a.itemIndex==0?"disabled":"enabled"),c(a.button.next).attr("data-ur-state",a.itemIndex==a.count-Math.max(a.options.fill,1)?"disabled":"enabled"))}}function E(c){a.options.verticalScroll||h(c);a.autoscrollStop();a.flag.touched=!0;a.flag.lock=null;a.flag.click=!0;r=t=k=D(c);v=a.translate}function M(c){if(a.flag.touched){t=k;k=D(c);if(Math.abs(r.y-k.y)+Math.abs(r.x-k.x)>0)a.flag.click=!1;if(y&&a.options.verticalScroll){var b=Math.abs((r.y-k.y)/(r.x-k.x));if(a.flag.lock){if(a.flag.lock==
"y")return}else if(b>1.2){a.flag.lock="y";return}else if(b<=1.2)a.flag.lock="x";else return}h(c);if(k!==null){c=v+(k.x-r.x);if(a.options.infinite)if(a.options.center){var b=Math.ceil(g[a.count+a.options.cloneLength[0]].offsetLeft-m/2),d=g[a.count+a.options.cloneLength[0]].offsetLeft-g[a.options.cloneLength[0]].offsetLeft;-c<Math.floor(g[a.options.cloneLength[0]].offsetLeft-m/2)?(v-=d,c-=d):-c>b&&(v+=d,c+=d)}else b=g[a.count].offsetLeft,d=g[a.count].offsetLeft-g[0].offsetLeft,c>0?(v-=d,c-=d):-c>=b&&
(v+=d,c+=d);var e=-c;a.options.center&&(e+=m/2);g.each(function(c,b){var d=b.offsetLeft;if(d+b.offsetWidth>e)return a.itemIndex=c,w=(e-d)/b.offsetWidth,!1});l(c)}}}function N(c){if(a.flag.touched){if(!a.flag.click||a.flag.lock)h(c);else if(c.target.tagName=="AREA")location.href=c.target.href;a.flag.touched=!1;c=k.x-t.x;a.options.center?c<0&&w>0.5?s(-1):c>0&&w<0.5?s(1):s(0):s(c<0?-1:0)}}function s(c){a.autoscrollStop();var b=a.itemIndex-c;a.options.infinite||(b=a.options.fill>0?d(b,[0,a.count-a.options.fill]):
d(b,[0,o]));if(a.options.infinite){var e=a.translate;if(a.options.center){var f=g[a.count+a.options.cloneLength[0]].offsetLeft-g[a.options.cloneLength[0]].offsetLeft;if(b<a.options.cloneLength[0])l(e-f),b+=a.count,a.itemIndex=b+c;else if(b>=a.count+a.options.cloneLength[0])l(e+f),b-=a.count,a.itemIndex=b+c}else if(b<0)f=g[a.count].offsetLeft-g[0].offsetLeft,l(e-f),b+=a.count,a.itemIndex=b+c}u=g[b];i.trigger("slidestart.ur.carousel",{index:b});q();I(b)}function q(){function c(){if(!a.flag.touched){var b=
a.translate,d=x-b;d-=d/a.options.speed>=0?Math.floor(d/a.options.speed):Math.ceil(d/a.options.speed);Math.abs(d)<0.01&&(d=0);l(b+d);a.flag.snapping=d!=0;a.flag.snapping?setTimeout(c,16):(a.options.infinite&&!a.options.center&&a.itemIndex>=a.count&&(l(a.translate+(g[a.count].offsetLeft-g[0].offsetLeft)),a.itemIndex-=a.count),a.autoscrollStart(),i.trigger("slideend.ur.carousel",{index:a.itemIndex}))}}x=-u.offsetLeft;a.options.center&&(x+=Math.floor((m-u.offsetWidth)/2));c()}function l(b){a.translate=
b;b=A+b+"px, 0px"+J;c(a.scroller).css({webkitTransform:b,MozTransform:b,msTransform:b,transform:b})}function d(a,c){return Math.min(Math.max(c[0],a),c[1])}var a=this;a.container=b.set;a.scroller=b.scroll_container;a.scroller||c.error("carousel missing item components");a.items=b.item||[];a.button={prev:c(b.button).filter("[data-ur-carousel-button-type='prev']"),next:c(b.button).filter("[data-ur-carousel-button-type='next']")};a.counter=b.count;a.dots=b.dots;a.flag={click:!1,snapping:!1,lock:null,
timeoutId:null,touched:!1};a.options={autoscroll:!0,autoscrollDelay:5E3,autoscrollForward:!0,center:!0,cloneLength:[0,0],fill:0,infinite:!0,speed:1.1,transform3d:!0,touch:!0,verticalScroll:!0};a.count=a.items.length;a.itemIndex=0;a.translate=0;var i=c(a.container),g=c(a.items),k=null,t,r={x:0,y:0},w=0,u=g[0],x,o=a.count-1,m=i.outerWidth(),v=null,A="translate3d(",J=", 0px)";this.update=function(){var b=g.length;g=c(a.scroller).find("[data-ur-carousel-component='item']");if(b!=g.length){a.items=g.filter(":not([data-ur-clone])").toArray();
a.count=a.items.length;o=g.length-1;g.each(function(b,d){if(c(d).attr("data-ur-state")=="active")return a.itemIndex=b,!1});if(a.itemIndex>=g.length)a.itemIndex=o,g.eq(a.itemIndex).attr("data-ur-state","active");c.contains(a.scroller,u)||(u=g[a.itemIndex]);p()}m=i.outerWidth();var b=0,d=[];if(a.options.fill>0)for(var e=m,f=a.options.fill;f>0;f--){var h=Math.round(e/f);d.push(h);e-=h}for(f=0;f<g.length;f++)a.options.fill>0?(h=d[f%a.options.fill],g.eq(f).outerWidth(h),b+=h):b+=g[f].offsetWidth;c(a.scroller).width(b);
b=g[a.itemIndex];d=-(b.offsetLeft+w*b.offsetWidth);x=-u.offsetLeft;a.options.center&&(d+=Math.floor((m-b.offsetWidth)/2),x+=Math.floor((m-u.offsetWidth)/2));l(d)};this.autoscrollStart=function(){if(a.options.autoscroll)a.flag.timeoutId=setTimeout(function(){m!=0?!a.options.infinite&&a.itemIndex==o&&a.options.autoscrollForward?a.jumpToIndex(0):!a.options.infinite&&a.itemIndex==0&&!a.options.autoscrollForward?a.jumpToIndex(o):s(a.options.autoscrollForward?-1:1):a.autoscrollStart()},a.options.autoscrollDelay)};
this.autoscrollStop=function(){clearTimeout(a.flag.timeoutId)};this.jumpToIndex=function(c){s(a.itemIndex-c)};(function(){if(/Android [12]/.test(navigator.userAgent)){if((i.attr("data-ur-android3d")||i.attr("data-ur-translate3d"))!="enabled"){a.options.transform3d=!1;var b=parseFloat(i.attr("data-ur-speed"));a.options.speed=b>1?b:1.3}}else a.options.transform3d=i.attr("data-ur-translate3d")!="disabled";i.attr("data-ur-translate3d",a.options.transform3d?"enabled":"disabled");i.attr("data-ur-speed",
a.options.speed);a.options.verticalScroll=i.attr("data-ur-vertical-scroll")!="disabled";i.attr("data-ur-vertical-scroll",a.options.verticalScroll?"enabled":"disabled");a.options.touch=i.attr("data-ur-touch")!="disabled";i.attr("data-ur-touch",a.options.touch?"enabled":"disabled");a.options.infinite=i.attr("data-ur-infinite")!="disabled"&&a.items.length>1;i.attr("data-ur-infinite",a.options.infinite?"enabled":"disabled");a.options.center=i.attr("data-ur-center")=="enabled";i.attr("data-ur-center",
a.options.center?"enabled":"disabled");b=parseInt(i.attr("data-ur-fill"));if(b>0)a.options.fill=b;i.attr("data-ur-fill",a.options.fill);if(b=i.attr("data-ur-clones"))b=c.map(b.split(","),function(a){return parseInt(a)}),a.options.cloneLength=b.length==1?[0,b[0]]:b;i.attr("data-ur-clones",a.options.center?a.options.cloneLength:a.options.cloneLength[1]);a.options.autoscroll=i.attr("data-ur-autoscroll")=="enabled";i.attr("data-ur-autoscroll",a.options.autoscroll?"enabled":"disabled");b=parseInt(i.attr("data-ur-autoscroll-delay"));
if(b>=0)a.options.autoscrollDelay=b;i.attr("data-ur-autoscroll-delay",a.options.autoscrollDelay);a.options.autoscrollForward=i.attr("data-ur-autoscroll-dir")!="prev";i.attr("data-ur-autoscroll-dir",a.options.autoscrollForward?"next":"prev")})();var K=!1;a.options.infinite&&!a.options.fill&&a.options.cloneLength[1]==0&&g.width(function(a,c){c==0&&(K=!0)});if(K){var b=g.find("img").addBack("img"),L=b.length;L>0?b.load(function(){--L==0&&j()}):c(window).load(j)}else j()}b=p(b,"carousel");c.each(b,function(b,
f){c(f.buttons).each(function(){var f=c(this).attr("data-ur-carousel-button-type");f||c.error("malformed carousel button type for carousel with id: "+b+".");c(this).attr("data-ur-state",f=="prev"?"disabled":"enabled")});Uranium.carousel[b]=new j(f);c(f.set).data("urInit",!0);c(f.set).attr("data-ur-state","enabled")})};Uranium={};c.each(n,function(b){Uranium[b]={}});c.fn.Uranium=function(){var b=this;c.each(n,function(){this(b)});return this};c(document).ready(function(){c("body").Uranium()})})(jQuery);
