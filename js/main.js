---
---
/*! ch-robinson-engineering-blog - v1.1.0 - 2019-04-30 */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t:e.fluidvids=t()}(this,function(){"use strict";function e(e){return new RegExp("^(https?:)?//(?:"+d.players.join("|")+").*$","i").test(e)}function i(i){if((e(i.src)||e(i.data))&&!i.getAttribute("data-fluidvids")){var n=document.createElement("div");i.parentNode.insertBefore(n,i),i.className+=(i.className?" ":"")+"fluidvids-item",i.setAttribute("data-fluidvids","loaded"),n.className+="fluidvids",n.style.paddingTop=function(e,t){return parseInt(e,10)/parseInt(t,10)*100+"%"}(i.height,i.width),n.appendChild(i)}}var d={selector:["iframe","object"],players:["www.youtube.com","player.vimeo.com"]},o=[".fluidvids {","width: 100%; max-width: 100%; position: relative;","}",".fluidvids-item {","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;","}"].join(""),r=document.head||document.getElementsByTagName("head")[0];return d.render=function(){for(var e=document.querySelectorAll(d.selector.join()),t=e.length;t--;)i(e[t])},d.init=function(e){for(var t in e)d[t]=e[t];d.render(),function(){var e=document.createElement("div");e.innerHTML="<p>x</p><style>"+o+"</style>",r.appendChild(e.childNodes[1])}()},d}),function(){"use strict";document.addEventListener("DOMContentLoaded",function(){var navbarToggle,siteNavigation;navbarToggle=document.getElementById("navbar-toggle"),siteNavigation=document.getElementById("site-navigation"),function(el,events,handler){if(el)for(var i=0;i<events.length;i+=1)el.addEventListener(events[i],handler)}(navbarToggle,["click","touchstart"],function(e){navbarToggle.classList.toggle("close"),siteNavigation.classList.toggle("show");var ariaExpanded=navbarToggle.getAttribute("aria-expanded");navbarToggle.setAttribute("aria-expanded","true"===ariaExpanded?"false":"true"),e.preventDefault()}),fluidvids.init({selector:["iframe","object"],players:["www.youtube.com","www.youtube-nocookie.com","player.vimeo.com"]});var toc=document.getElementById("markdown-toc");if(toc){var overview=document.createElement("li");overview.innerHTML="<h6>{{ site.data.messages.locales[site.locale].overview }}</h6>",toc.insertBefore(overview,toc.firstChild)}})}();
