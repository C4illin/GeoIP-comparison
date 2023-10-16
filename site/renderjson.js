var module,window,define,renderjson=function(){var p=function(){for(var n=[];arguments.length;)n.push(f(d(Array.prototype.shift.call(arguments)),_(Array.prototype.shift.call(arguments))));return n},f=function(){for(var n=Array.prototype.shift.call(arguments),t=0;t<arguments.length;t++)arguments[t].constructor==Array?f.apply(this,[n].concat(arguments[t])):n.appendChild(arguments[t]);return n},y=function(n,t){return n.insertBefore(t,n.firstChild),n},e=function(n,t){var e,r=t||Object.keys(n);for(e in r)if(Object.hasOwnProperty.call(n,r[e]))return!1;return!0},_=function(n){return document.createTextNode(n)},d=function(n){var t=document.createElement("span");return n&&(t.className=n),t},g=function(n,t,e){var r=document.createElement("a");return t&&(r.className=t),r.appendChild(_(n)),r.href="#",r.onclick=function(n){return e(),n&&n.stopPropagation(),!1},r};function i(s,l,n,a,c){function t(n,t,e,r,o){function s(){l||f(i.parentNode,l=y(o(),g(c.hide,"disclosure",function(){l.style.display="none",i.style.display="inline"}))),l.style.display="inline",i.style.display="none"}var l,i=d(r),n=(f(i,g(c.show,"disclosure",s),p(r+" syntax",n),g(t,null,s),p(r+" syntax",e)),f(d(),_(u.slice(0,-1)),i));return 0<a&&"string"!=r&&s(),n}var u=n?"":l;return null===s?p(null,u,"keyword","null"):void 0===s?p(null,u,"keyword","undefined"):"string"==typeof s&&s.length>c.max_string_length?t('"',s.substr(0,c.max_string_length)+" ...",'"',"string",function(){return f(d("string"),p(null,u,"string",JSON.stringify(s)))}):"object"!=typeof s||0<=[Number,String,Boolean,Date].indexOf(s.constructor)?p(null,u,typeof s,JSON.stringify(s)):s.constructor==Array?0==s.length?p(null,u,"array syntax","[]"):t("[",c.collapse_msg(s.length),"]","array",function(){for(var n=f(d("array"),p("array syntax","[",null,"\n")),t=0;t<s.length;t++)f(n,i(c.replacer.call(s,t,s[t]),l+"    ",!1,a-1,c),t!=s.length-1?p("syntax",","):[],_("\n"));return f(n,p(null,l,"array syntax","]")),n}):e(s,c.property_list)?p(null,u,"object syntax","{}"):t("{",c.collapse_msg(Object.keys(s).length),"}","object",function(){var n=f(d("object"),p("object syntax","{",null,"\n"));for(r in s)var t=r;var e,r,o=c.property_list||Object.keys(s);for(e in o=c.sort_objects?o.sort():o)(r=o[e])in s&&f(n,p(null,l+"    ","key",'"'+r+'"',"object syntax",": "),i(c.replacer.call(s,r,s[r]),l+"    ",!0,a-1,c),r!=t?p("syntax",","):[],_("\n"));return f(n,p(null,l,"object syntax","}")),n})}function r(n){var t=new Object(r.options);return t.replacer="function"==typeof t.replacer?t.replacer:function(n,t){return t},(n=f(document.createElement("pre"),i(n,"",!1,t.show_to_level,t))).className="renderjson",n}return r.set_icons=function(n,t){return r.options.show=n,r.options.hide=t,r},r.set_show_to_level=function(n){return r.options.show_to_level="string"==typeof n&&"all"===n.toLowerCase()?Number.MAX_VALUE:n,r},r.set_max_string_length=function(n){return r.options.max_string_length="string"==typeof n&&"none"===n.toLowerCase()?Number.MAX_VALUE:n,r},r.set_sort_objects=function(n){return r.options.sort_objects=n,r},r.set_replacer=function(n){return r.options.replacer=n,r},r.set_collapse_msg=function(n){return r.options.collapse_msg=n,r},r.set_property_list=function(n){return r.options.property_list=n,r},r.set_show_by_default=function(n){return r.options.show_to_level=n?Number.MAX_VALUE:0,r},r.options={},r.set_icons("⊕","⊖"),r.set_show_by_default(!1),r.set_sort_objects(!1),r.set_max_string_length("none"),r.set_replacer(void 0),r.set_property_list(void 0),r.set_collapse_msg(function(n){return n+" item"+(1==n?"":"s")}),r}();define?define({renderjson:renderjson}):(module||{}).exports=(window||{}).renderjson=renderjson;