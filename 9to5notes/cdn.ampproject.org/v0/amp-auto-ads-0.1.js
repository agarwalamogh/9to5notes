(self.AMP=self.AMP||[]).push({n:"amp-auto-ads",v:"1912120230490",f:(function(AMP,_){
var h,ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},l;if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var p;a:{var ca={a:!0},q={};try{q.__proto__=ca;p=q.a;break a}catch(a){}p=!1}l=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=l,da=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function w(a){return a||{}};function x(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}function y(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function z(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ea=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var A=self.__AMP_LOG;function B(){if(!A.user)throw Error("failed to call initLogConstructor");return A.user}function C(){if(A.dev)return A.dev;throw Error("failed to call initLogConstructor");}function D(a,b){B().assert(a,b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var fa={type:!0,"rtc-config":!0};function E(a,b){if(!a[b])return{};if("[object Object]"!==da.call(a[b])||Array.isArray(a[b]))return B().warn("amp-auto-ads",b+" property not an object"),{};b=a[b];var c={},d;for(d in b)if(fa[d]||y(d,"data-")){var e=typeof b[d];"number"!=e&&"string"!=e&&"boolean"!=e?B().warn("amp-auto-ads","Attribute type not supported: "+e):c[d]=String(b[d])}else B().warn("amp-auto-ads","Attribute not whitlisted: "+d);return c};function ha(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b}function ia(a){return new Promise(function(b){b(a())})};function F(){var a=100;this.M=a;this.B=this.F=0;this.A=Object.create(null)}F.prototype.has=function(a){return!!this.A[a]};F.prototype.get=function(a){var b=this.A[a];if(b)return b.access=++this.B,b.payload};F.prototype.put=function(a,b){this.has(a)||this.F++;this.A[a]={payload:b,access:this.B};if(!(this.F<=this.M)){C().warn("lru-cache","Trimming LRU cache");a=this.A;var c=this.B+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.F--)}};w({c:!0,v:!0,a:!0,ad:!0,action:!0});var G,H;
function I(a){var b;G||(G=self.document.createElement("a"),H=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new F));var c=b?null:H,d=G;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;
e.origin=d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c&&c.put(a,e);a=e}return a};function ja(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){C().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a}
function ka(a,b){a.__AMP_EXPERIMENT_BRANCHES=a.__AMP_EXPERIMENT_BRANCHES||{};for(var c in b)if(v.call(b,c)&&!v.call(a.__AMP_EXPERIMENT_BRANCHES,c))if(b[c].isTrafficEligible&&b[c].isTrafficEligible(a)){var d;if(d=!a.__AMP_EXPERIMENT_BRANCHES[c]){d=c;var e=void 0,f=a;if(f.__AMP__EXPERIMENT_TOGGLES)var m=f.__AMP__EXPERIMENT_TOGGLES;else{f.__AMP__EXPERIMENT_TOGGLES=Object.create(null);m=f.__AMP__EXPERIMENT_TOGGLES;if(f.AMP_CONFIG)for(e in f.AMP_CONFIG){var g=f.AMP_CONFIG[e];"number"===typeof g&&0<=g&&
1>=g&&(m[e]=Math.random()<g)}if(f.AMP_CONFIG&&Array.isArray(f.AMP_CONFIG["allow-doc-opt-in"])&&0<f.AMP_CONFIG["allow-doc-opt-in"].length&&(e=f.AMP_CONFIG["allow-doc-opt-in"],g=f.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){g=g.getAttribute("content").split(",");for(var k=0;k<g.length;k++)-1!=e.indexOf(g[k])&&(m[g[k]]=!0)}Object.assign(m,ja(f));if(f.AMP_CONFIG&&Array.isArray(f.AMP_CONFIG["allow-url-opt-in"])&&0<f.AMP_CONFIG["allow-url-opt-in"].length){e=f.AMP_CONFIG["allow-url-opt-in"];
var n;f=f.location.originalHash||f.location.hash;g=Object.create(null);if(f)for(;n=ea.exec(f);)k=z(n[1],n[1]),n=n[2]?z(n[2].replace(/\+/g," "),n[2]):"",g[k]=n;f=g;for(g=0;g<e.length;g++)k=f["e-"+e[g]],"1"==k&&(m[e[g]]=!0),"0"==k&&(m[e[g]]=!1)}}d=!!m[d]}if(d){var r=b[c].branches;d=r;a.__AMP_EXPERIMENT_BRANCHES[c]=d[Math.floor(Math.random()*d.length)]||null}}else a.__AMP_EXPERIMENT_BRANCHES[c]=null}
function la(a){return a.__AMP_EXPERIMENT_BRANCHES?a.__AMP_EXPERIMENT_BRANCHES["amp-auto-ads-no-op-experiment"]:null};function J(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return K(a,b)}function M(a,b){var c=N(a);c=N(c);c=c.isSingleDoc()?c.win:c;return K(c,b)}function N(a){return a.nodeType?J((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function K(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var O;function P(a,b,c){a=a.createElement(b);for(var d in c)a.setAttribute(d,c[d]);return a}function ma(a,b){for(var c;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}function na(a,b){return a.closest?a.closest(b):ma(a,function(a){var c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return c?c.call(a,b):!1})}
function oa(a,b){if(void 0!==O)var c=O;else{try{var d=a.ownerDocument,e=d.createElement("div"),f=d.createElement("div");e.appendChild(f);c=e.querySelector(":scope div")===f}catch(m){c=!1}c=O=c}c?a=a.querySelectorAll(b.replace(/^|,/g,"$&:scope ")):(a.classList.add("i-amphtml-scoped"),b=b.replace(/^|,/g,"$&.i-amphtml-scoped "),b=a.querySelectorAll(b),a.classList.remove("i-amphtml-scoped"),a=b);return a}
function Q(a){y(a.tagName,"AMP-");if(a.createdCallback)return Promise.resolve(a);if(!a.__AMP_UPG_PRM){var b=new ha;a.__AMP_UPG_PRM=b.promise;a.__AMP_UPG_RES=b.resolve}return a.__AMP_UPG_PRM};function R(a){return M(a,"documentInfo").get()}function S(a){return M(a,"viewport")};function T(a,b){var c=4096,d,e=[],f=d&&null!=d.value&&""!==d.value?encodeURIComponent(d.name)+"="+encodeURIComponent(String(d.value)):null,m=c-a.length;f&&(m-=f.length+1);for(var g=Object.keys(b),k=0;k<g.length;k++){var n=g[k],r=b[n];if(null!=r&&""!==r){var u=encodeURIComponent(n)+"=",L=encodeURIComponent(String(r)),Z=u.length+L.length+1;if(Z>m){var aa=L.substr(0,m-u.length-1).replace(/%\w?$/,"");aa&&e.push(u+aa);f&&e.push(f);break}e.push(u+L);m-=Z}}return e.length?a+"?"+e.join("&"):a};JSON.parse('{"_ping_":{"renderStartImplemented":true,"clientIdScope":"_PING_","consentHandlingOverride":true},"1wo":{},"24smi":{"prefetch":"https://jsn.24smi.net/smi.js","preconnect":"https://data.24smi.net"},"a8":{"prefetch":"https://statics.a8.net/amp/ad.js","renderStartImplemented":true},"a9":{"prefetch":"https://z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"},"accesstrade":{"prefetch":"https://h.accesstrade.net/js/amp/amp.js"},"adagio":{"prefetch":"https://js-ssl.neodatagroup.com/adagio_amp.js","preconnect":["https://ad-aws-it.neodatagroup.com","https://tracker.neodatagroup.com"],"renderStartImplemented":true},"adblade":{"prefetch":"https://web.adblade.com/js/ads/async/show.js","preconnect":["https://staticd.cdn.adblade.com","https://static.adblade.com"],"renderStartImplemented":true},"adbutler":{"prefetch":"https://servedbyadbutler.com/app.js"},"adform":{},"adfox":{"prefetch":"https://yastatic.net/pcode/adfox/loader.js","renderStartImplemented":true},"adgeneration":{"prefetch":"https://i.socdm.com/sdk/js/adg-script-loader.js"},"adglare":{"renderStartImplemented":true},"adhese":{"renderStartImplemented":true},"adincube":{"renderStartImplemented":true},"adition":{},"adman":{},"admanmedia":{"renderStartImplemented":true},"admixer":{"renderStartImplemented":true,"preconnect":["https://inv-nets.admixer.net","https://cdn.admixer.net"]},"adocean":{"consentHandlingOverride":true},"adop":{},"adpicker":{"renderStartImplemented":true},"adplugg":{"prefetch":"https://www.adplugg.com/serve/js/ad.js","renderStartImplemented":true},"adpon":{"prefetch":"https://ad.adpon.jp/amp.js","clientIdScope":"AMP_ECID_ADPON"},"adreactor":{},"adsensor":{"prefetch":"https://wfpscripts.webspectator.com/amp/adsensor-amp.js","clientIdScope":"amp_ecid_adensor","renderStartImplemented":true},"adsloom":{"clientIdScope":"AMP_ECID_ADSLOOM"},"adsnative":{"prefetch":"https://static.adsnative.com/static/js/render.v1.js","preconnect":"https://api.adsnative.com"},"adspeed":{"preconnect":"https://g.adspeed.net","renderStartImplemented":true},"adspirit":{},"adstir":{"prefetch":"https://js.ad-stir.com/js/adstir_async.js","preconnect":"https://ad.ad-stir.com"},"adstyle":{"prefetch":"https://widgets.ad.style/amp.js","preconnect":["https://w.ad.style"]},"adtech":{"prefetch":"https://s.aolcdn.com/os/ads/adsWrapper3.js","preconnect":["https://mads.at.atwola.com","https://aka-cdn.adtechus.com"]},"adthrive":{"prefetch":["https://www.googletagservices.com/tag/js/gpt.js"],"preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"adunity":{"preconnect":["https://content.adunity.com"],"renderStartImplemented":true},"aduptech":{"prefetch":"https://s.d.adup-tech.com/jsapi","preconnect":["https://d.adup-tech.com","https://m.adup-tech.com"],"renderStartImplemented":true},"adventive":{"preconnect":["https://ads.adventive.com","https://amp.adventivedev.com"],"renderStartImplemented":true},"adverline":{"prefetch":"https://ads.adverline.com/richmedias/amp.js","preconnect":["https://adnext.fr"],"renderStartImplemented":true},"adverticum":{},"advertserve":{"renderStartImplemented":true},"adyoulike":{"consentHandlingOverride":true,"prefetch":"https://fo-static.omnitagjs.com/amp.js","renderStartImplemented":true},"adzerk":{},"affiliateb":{"prefetch":"https://track.affiliate-b.com/amp/a.js","renderStartImplemented":true},"aja":{"prefetch":["https://cdn.as.amanad.adtdp.com/sdk/asot-amp.js","https://cdn.as.amanad.adtdp.com/sdk/asot-v2.js"],"preconnect":["https://ad.as.amanad.adtdp.com"]},"appvador":{"prefetch":["https://cdn.apvdr.com/js/VastAdUnit.min.js","https://cdn.apvdr.com/js/VideoAd.min.js","https://cdn.apvdr.com/js/VideoAd3PAS.min.js","https://cdn.apvdr.com/js/VideoAdAutoPlay.min.js","https://cdn.apvdr.com/js/VideoAdNative.min.js"],"renderStartImplemented":true},"amoad":{"prefetch":["https://j.amoad.com/js/a.js","https://j.amoad.com/js/n.js"],"preconnect":["https://d.amoad.com","https://i.amoad.com","https://m.amoad.com","https://v.amoad.com"]},"aniview":{"renderStartImplemented":true},"appnexus":{"prefetch":"https://acdn.adnxs.com/ast/ast.js","preconnect":"https://ib.adnxs.com","renderStartImplemented":true},"atomx":{"prefetch":"https://s.ato.mx/p.js"},"beaverads":{"renderStartImplemented":true},"beopinion":{"prefetch":"https://widget.beopinion.com/sdk.js","preconnect":["https://t.beopinion.com","https://s.beopinion.com","https://data.beopinion.com"],"renderStartImplemented":true},"bidtellect":{},"blade":{"prefetch":"https://sdk.streamrail.com/blade/sr.blade.js","renderStartImplemented":true},"brainy":{},"bringhub":{"renderStartImplemented":true,"preconnect":["https://static.bh-cdn.com","https://core-api.bringhub.io"]},"broadstreetads":{"prefetch":"https://cdn.broadstreetads.com/init-2.min.js"},"caajainfeed":{"prefetch":["https://cdn.amanad.adtdp.com/sdk/ajaamp.js"],"preconnect":["https://ad.amanad.adtdp.com"]},"capirs":{"renderStartImplemented":true},"caprofitx":{"prefetch":["https://cdn.caprofitx.com/pfx.min.js","https://cdn.caprofitx.com/tags/amp/profitx_amp.js"],"preconnect":"https://ad.caprofitx.adtdp.com"},"cedato":{"renderStartImplemented":true},"chargeads":{},"colombia":{"prefetch":"https://static.clmbtech.com/ad/commons/js/colombia-amp.js"},"conative":{"renderStartImplemented":true},"connatix":{"renderStartImplemented":true},"contentad":{},"criteo":{"prefetch":"https://static.criteo.net/js/ld/publishertag.js","preconnect":"https://cas.criteo.com"},"csa":{"prefetch":"https://www.google.com/adsense/search/ads.js"},"dable":{"preconnect":["https://static.dable.io","https://api.dable.io","https://images.dable.io"],"renderStartImplemented":true},"directadvert":{"renderStartImplemented":true},"distroscale":{"preconnect":["https://c.jsrdn.com","https://s.jsrdn.com","https://i.jsrdn.com"],"renderStartImplemented":true},"dotandads":{"prefetch":"https://amp.ad.dotandad.com/dotandadsAmp.js","preconnect":"https://bal.ad.dotandad.com"},"dynad":{"preconnect":["https://t.dynad.net","https://tm.jsuol.com.br"]},"eadv":{"renderStartImplemented":true,"clientIdScope":"AMP_ECID_EADV","prefetch":["https://www.eadv.it/track/esr.min.js","https://www.eadv.it/track/ead.min.js"]},"eas":{"prefetch":"https://amp.emediate.eu/amp.v0.js","renderStartImplemented":true},"empower":{"prefetch":"https://cdn.empower.net/sdk/amp-ad.min.js","renderStartImplemented":true},"engageya":{},"epeex":{},"eplanning":{"prefetch":"https://us.img.e-planning.net/layers/epl-amp.js"},"ezoic":{"prefetch":["https://www.googletagservices.com/tag/js/gpt.js","https://g.ezoic.net/ezoic/ampad.js"],"clientIdScope":"AMP_ECID_EZOIC","consentHandlingOverride":true},"f1e":{"prefetch":"https://img.ak.impact-ad.jp/util/f1e_amp.min.js"},"f1h":{"preconnect":"https://img.ak.impact-ad.jp","renderStartImplemented":true},"fake":{},"felmat":{"prefetch":"https://t.felmat.net/js/fmamp.js","renderStartImplemented":true},"flite":{},"fluct":{"preconnect":["https://cdn-fluct.sh.adingo.jp","https://s.sh.adingo.jp","https://i.adingo.jp"]},"forkmedia":{"prefetch":"https://delivery.forkcdn.com/rappio/inread/v1.1/amp/inread.js","renderStartImplemented":true},"freewheel":{"prefetch":"https://cdn.stickyadstv.com/prime-time/fw-amp.min.js","renderStartImplemented":true},"fusion":{"prefetch":"https://assets.adtomafusion.net/fusion/latest/fusion-amp.min.js"},"genieessp":{"prefetch":"https://js.gsspcln.jp/l/amp.js"},"giraff":{"renderStartImplemented":true},"gmossp":{"prefetch":"https://cdn.gmossp-sp.jp/ads/amp.js"},"gumgum":{"prefetch":"https://js.gumgum.com/slot.js","renderStartImplemented":true},"holder":{"prefetch":"https://i.holder.com.ua/js2/holder/ajax/ampv1.js","preconnect":"https://h.holder.com.ua","renderStartImplemented":true},"ibillboard":{},"idealmedia":{"renderStartImplemented":true,"preconnect":["https://jsc.idealmedia.io","https://servicer.idealmedia.io","https://s-img.idealmedia.io/"]},"imedia":{"prefetch":"https://i.imedia.cz/js/im3.js","renderStartImplemented":true},"imobile":{"prefetch":"https://spamp.i-mobile.co.jp/script/amp.js","preconnect":"https://spad.i-mobile.co.jp"},"imonomy":{"renderStartImplemented":true},"improvedigital":{},"industrybrains":{"prefetch":"https://web.industrybrains.com/js/ads/async/show.js","preconnect":["https://staticd.cdn.industrybrains.com","https://static.industrybrains.com"],"renderStartImplemented":true},"inmobi":{"prefetch":"https://cf.cdn.inmobi.com/ad/inmobi.secure.js","renderStartImplemented":true},"innity":{"prefetch":"https://cdn.innity.net/admanager.js","preconnect":"https://as.innity.com","renderStartImplemented":true},"insticator":{"preconnect":"https://d3lcz8vpax4lo2.cloudfront.net","renderStartImplemented":true},"invibes":{"prefetch":"https://k.r66net.com/GetAmpLink","renderStartImplemented":true,"consentHandlingOverride":true},"ix":{"prefetch":["https://js-sec.indexww.com/apl/amp.js"],"preconnect":"https://as-sec.casalemedia.com","renderStartImplemented":true},"jubna":{},"kargo":{},"kiosked":{"renderStartImplemented":true},"kixer":{"prefetch":"https://cdn.kixer.com/ad/load.js","renderStartImplemented":true},"kuadio":{},"lentainform":{"renderStartImplemented":true,"preconnect":["https://jsc.lentainform.com","https://servicer.lentainform.com","https://s-img.lentainform.com"]},"ligatus":{"prefetch":"https://ssl.ligatus.com/render/ligrend.js","renderStartImplemented":true},"lockerdome":{"prefetch":"https://cdn2.lockerdomecdn.com/_js/amp.js","renderStartImplemented":true},"logly":{"preconnect":["https://l.logly.co.jp","https://cdn.logly.co.jp"],"renderStartImplemented":true},"loka":{"prefetch":"https://loka-cdn.akamaized.net/scene/amp.js","preconnect":["https://scene-front.lokaplatform.com","https://loka-materials.akamaized.net"],"renderStartImplemented":true},"mads":{"prefetch":"https://eu2.madsone.com/js/tags.js"},"mantis-display":{"prefetch":"https://assets.mantisadnetwork.com/mantodea.min.js","preconnect":["https://mantodea.mantisadnetwork.com","https://res.cloudinary.com","https://resize.mantisadnetwork.com"]},"mantis-recommend":{"prefetch":"https://assets.mantisadnetwork.com/recommend.min.js","preconnect":["https://mantodea.mantisadnetwork.com","https://resize.mantisadnetwork.com"]},"medianet":{"preconnect":"https://contextual.media.net","renderStartImplemented":true},"mediavine":{"prefetch":"https://amp.mediavine.com/wrapper.min.js","preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true,"consentHandlingOverride":true},"medyanet":{"renderStartImplemented":true},"meg":{"renderStartImplemented":true},"mgid":{"renderStartImplemented":true,"preconnect":["https://jsc.mgid.com","https://servicer.mgid.com","https://s-img.mgid.com"]},"microad":{"prefetch":"https://j.microad.net/js/camp.js","preconnect":["https://s-rtb.send.microad.jp","https://s-rtb.send.microadinc.com","https://cache.send.microad.jp","https://cache.send.microadinc.com","https://deb.send.microad.jp"]},"miximedia":{"renderStartImplemented":true},"mixpo":{"prefetch":"https://cdn.mixpo.com/js/loader.js","preconnect":["https://player1.mixpo.com","https://player2.mixpo.com"]},"monetizer101":{"renderStartImplemented":true},"mox":{"prefetch":["https://ad.mox.tv/js/amp.min.js","https://ad.mox.tv/mox/mwayss_invocation.min.js"],"renderStartImplemented":true},"mytarget":{"prefetch":"https://ad.mail.ru/static/ads-async.js","renderStartImplemented":true},"mywidget":{"preconnect":"https://likemore-fe.go.mail.ru","prefetch":"https://likemore-go.imgsmail.ru/widget_amp.js","renderStartImplemented":true},"nativeroll":{"prefetch":"https://cdn01.nativeroll.tv/js/seedr-player.min.js"},"nativo":{"prefetch":"https://s.ntv.io/serve/load.js"},"navegg":{"renderStartImplemented":true},"nend":{"prefetch":"https://js1.nend.net/js/amp.js","preconnect":["https://output.nend.net","https://img1.nend.net"]},"netletix":{"preconnect":["https://call.netzathleten-media.de"],"renderStartImplemented":true},"noddus":{"prefetch":"https://noddus.com/amp_loader.js","renderStartImplemented":true},"nokta":{"prefetch":"https://static.virgul.com/theme/mockups/noktaamp/ampjs.js","renderStartImplemented":true},"nws":{},"onead":{"prefetch":"https://ad-specs.guoshipartners.com/static/js/onead-amp.min.js","renderStartImplemented":true},"onnetwork":{"renderStartImplemented":true},"openadstream":{},"openx":{"prefetch":"https://www.googletagservices.com/tag/js/gpt.js","preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"opinary":{},"outbrain":{"renderStartImplemented":true,"prefetch":"https://widgets.outbrain.com/widgetAMP/outbrainAMP.min.js","preconnect":["https://odb.outbrain.com"],"consentHandlingOverride":true},"pixels":{"prefetch":"https://cdn.adsfactor.net/amp/pixels-amp.min.js","clientIdCookieName":"__AF","renderStartImplemented":true},"plista":{},"polymorphicads":{"prefetch":"https://www.polymorphicads.jp/js/amp.js","preconnect":["https://img.polymorphicads.jp","https://ad.polymorphicads.jp"],"renderStartImplemented":true},"popin":{"renderStartImplemented":true},"postquare":{},"pressboard":{"renderStartImplemented":true},"promoteiq":{},"pubexchange":{},"pubguru":{"renderStartImplemented":true},"pubmatic":{"prefetch":"https://ads.pubmatic.com/AdServer/js/amp.js"},"pubmine":{"prefetch":["https://s.pubmine.com/head.js"],"preconnect":"https://delivery.g.switchadhub.com","renderStartImplemented":true},"puffnetwork":{"prefetch":"https://static.puffnetwork.com/amp_ad.js","renderStartImplemented":true},"pulsepoint":{"prefetch":"https://ads.contextweb.com/TagPublish/getjs.static.js","preconnect":"https://tag.contextweb.com"},"purch":{"prefetch":"https://ramp.purch.com/serve/creative_amp.js","renderStartImplemented":true},"quoraad":{"prefetch":"https://a.quora.com/amp_ad.js","preconnect":"https://ampad.quora.com","renderStartImplemented":true},"rbinfox":{"renderStartImplemented":true},"readmo":{"renderStartImplemented":true},"realclick":{"renderStartImplemented":true},"recomad":{"renderStartImplemented":true},"relap":{"renderStartImplemented":true},"revcontent":{"prefetch":"https://labs-cdn.revcontent.com/build/amphtml/revcontent.amp.min.js","preconnect":["https://trends.revcontent.com","https://cdn.revcontent.com","https://img.revcontent.com"],"renderStartImplemented":true},"revjet":{"prefetch":"https://cdn.revjet.com/~cdn/JS/03/amp.js","renderStartImplemented":true},"rfp":{"prefetch":"https://js.rfp.fout.jp/rfp-amp.js","preconnect":"https://ad.rfp.fout.jp","renderStartImplemented":true},"rnetplus":{},"rubicon":{},"runative":{"prefetch":"https://cdn.run-syndicate.com/sdk/v1/n.js","renderStartImplemented":true},"sas":{"renderStartImplemented":true},"seedingalliance":{},"sekindo":{"renderStartImplemented":true},"sharethrough":{"renderStartImplemented":true},"shemedia":{"prefetch":["https://securepubads.g.doubleclick.net/tag/js/gpt.js","https://ads.shemedia.com/static/amp.js"],"preconnect":["https://partner.googleadservices.com","https://tpc.googlesyndication.com","https://ads.blogherads.com"],"renderStartImplemented":true},"sklik":{"prefetch":"https://c.imedia.cz/js/amp.js"},"slimcutmedia":{"preconnect":["https://sb.freeskreen.com","https://static.freeskreen.com","https://video.freeskreen.com"],"renderStartImplemented":true},"smartadserver":{"prefetch":"https://ec-ns.sascdn.com/diff/js/amp.v0.js","preconnect":"https://static.sascdn.com","renderStartImplemented":true},"smartclip":{"prefetch":"https://cdn.smartclip.net/amp/amp.v0.js","preconnect":"https://des.smartclip.net","renderStartImplemented":true},"smi2":{"renderStartImplemented":true},"smilewanted":{"prefetch":"https://prebid.smilewanted.com/amp/amp.js","preconnect":"https://static.smilewanted.com","renderStartImplemented":true},"sogouad":{"prefetch":"https://theta.sogoucdn.com/wap/js/aw.js","renderStartImplemented":true},"sortable":{"prefetch":"https://www.googletagservices.com/tag/js/gpt.js","preconnect":["https://tags-cdn.deployads.com","https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"sovrn":{"prefetch":"https://ap.lijit.com/www/sovrn_amp/sovrn_ads.js"},"speakol":{"renderStartImplemented":true},"spotx":{"preconnect":"https://js.spotx.tv","renderStartImplemented":true},"springAds":{"prefetch":"https://www.asadcdn.com/adlib/adlib_seq.js","preconnect":["https://ib.adnxs.com"],"renderStartImplemented":true},"strossle":{"preconnect":["https://amp.spklw.com","https://widgets.sprinklecontent.com","https://images.sprinklecontent.com"]},"sunmedia":{"prefetch":"https://vod.addevweb.com/sunmedia/amp/ads/sunmedia.js","preconnect":"https://static.addevweb.com","renderStartImplemented":true},"svknative":{"renderStartImplemented":true,"prefetch":"https://widget.svk-native.ru/js/embed.js"},"swoop":{"prefetch":"https://www.swoop-amp.com/amp.js","preconnect":["https://www.swpsvc.com","https://client.swpcld.com"],"renderStartImplemented":true},"taboola":{},"tcsemotion":{"prefetch":"https://ads.tcsemotion.com/www/delivery/amphb.js","renderStartImplemented":true},"teads":{"prefetch":"https://a.teads.tv/media/format/v3/teads-format.min.js","preconnect":["https://cdn2.teads.tv","https://t.teads.tv","https://r.teads.tv"],"consentHandlingOverride":true},"torimochi":{"renderStartImplemented":true},"tracdelight":{"prefetch":"https://scripts.tracdelight.io/amp.js","renderStartImplemented":true},"triplelift":{},"trugaze":{"clientIdScope":"__tg_amp","renderStartImplemented":true},"uas":{"prefetch":"https://ads.pubmatic.com/AdServer/js/phoenix.js"},"ucfunnel":{"renderStartImplemented":true},"uzou":{"preconnect":["https://speee-ad.akamaized.net"],"renderStartImplemented":true},"unruly":{"prefetch":"https://video.unrulymedia.com/native/native-loader.js","renderStartImplemented":true},"valuecommerce":{"prefetch":"https://amp.valuecommerce.com/amp_bridge.js","preconnect":["https://ad.jp.ap.valuecommerce.com"],"renderStartImplemented":true},"videointelligence":{"preconnect":"https://s.vi-serve.com","renderStartImplemented":true},"videonow":{"renderStartImplemented":true},"viralize":{"renderStartImplemented":true},"vmfive":{"prefetch":"https://man.vm5apis.com/dist/adn-web-sdk.js","preconnect":["https://vawpro.vm5apis.com","https://vahfront.vm5apis.com"],"renderStartImplemented":true},"webediads":{"prefetch":"https://eu1.wbdds.com/amp.min.js","preconnect":["https://goutee.top","https://mediaathay.org.uk"],"renderStartImplemented":true},"weborama-display":{"prefetch":["https://cstatic.weborama.fr/js/advertiserv2/adperf_launch_1.0.0_scrambled.js","https://cstatic.weborama.fr/js/advertiserv2/adperf_core_1.0.0_scrambled.js"]},"widespace":{},"wisteria":{"renderStartImplemented":true},"wpmedia":{"prefetch":"https://std.wpcdn.pl/wpjslib/wpjslib-amp.js","preconnect":["https://www.wp.pl","https://v.wpimg.pl"],"renderStartImplemented":true},"xlift":{"prefetch":"https://cdn.x-lift.jp/resources/common/xlift_amp.js","renderStartImplemented":true},"yahoo":{"prefetch":"https://s.yimg.com/os/ampad/display.js","preconnect":"https://us.adserver.yahoo.com"},"yahoojp":{"prefetch":["https://s.yimg.jp/images/listing/tool/yads/ydn/amp/amp.js","https://yads.c.yimg.jp/js/yads.js"],"preconnect":"https://yads.yahoo.co.jp"},"yahoonativeads":{"renderStartImplemented":true},"yandex":{"prefetch":"https://yastatic.net/partner-code/loaders/context_amp.js","renderStartImplemented":true},"yengo":{"renderStartImplemented":true},"yieldbot":{"prefetch":["https://cdn.yldbt.com/js/yieldbot.intent.amp.js","https://msg.yldbt.com/js/ybmsg.html"],"preconnect":"https://i.yldbt.com"},"yieldmo":{"prefetch":"https://static.yieldmo.com/ym.1.js","preconnect":["https://s.yieldmo.com","https://ads.yieldmo.com"],"renderStartImplemented":true},"yieldone":{"prefetch":"https://img.ak.impact-ad.jp/ic/pone/commonjs/yone-amp.js"},"yieldpro":{"preconnect":"https://creatives.yieldpro.eu","renderStartImplemented":true},"zedo":{"prefetch":"https://ss3.zedo.com/gecko/tag/Gecko.amp.min.js","renderStartImplemented":true},"zen":{"prefetch":"https://zen.yandex.ru/widget-loader","preconnect":["https://yastatic.net/"],"renderStartImplemented":true},"zergnet":{},"zucks":{"preconnect":["https://j.zucks.net.zimg.jp","https://sh.zucks.net","https://k.zucks.net","https://static.zucks.net.zimg.jp"]},"baidu":{"prefetch":"https://dup.baidustatic.com/js/dm.js","renderStartImplemented":true}}');function pa(a,b){var c=a.filter(function(a){return Number(a)}).join(",");b=b||"";return b+(b&&c?",":"")+c};function qa(a){return a.every(function(a){return!isNaN(parseInt(a,10))})}function ra(a,b){if(a){var c=b.getAttribute("data-experiment-id"),d;if(d=c)d=(d=c)?d.split(","):[],d=qa(d);d?b.setAttribute("data-experiment-id",pa([a],c)):b.setAttribute("data-experiment-id",a)}};function sa(a){var b=M(a,"resources").getResourceForElementOptional(a);if(b)return b.getPageLayoutBoxAsync();var c=J(a.ownerDocument.defaultView,"vsync");return c.measurePromise(function(){return S(a).getLayoutRect(a)})};var ta=["AMP-SIDEBAR","AMP-APP-BANNER"],ua={1:function(a,b){a.parentNode.insertBefore(b,a)},4:function(a,b){a.parentNode.insertBefore(b,a.nextSibling)},2:function(a,b){a.insertBefore(b,a.firstChild)},3:function(a,b){a.appendChild(b)}};function U(a,b,c,d,e,f){this.ampdoc=a;this.V=M(b,"resources");this.H=b;this.U=c;this.P=d;this.I=e;this.S=f;this.C=null;this.l=0}U.prototype.getAdElement=function(){return this.C};
U.prototype.getEstimatedPosition=function(){var a=this;return sa(this.H).then(function(b){a:switch(a.U){case 1:case 2:b=b.top;break a;case 3:case 4:b=b.bottom;break a;default:throw Error("Unknown position");}return b})};
U.prototype.placeAd=function(a,b,c,d){var e=this;return this.getEstimatedPosition().then(function(f){return c.isTooNearAnAd(f).then(function(c){if(c)return e.l=3,e.l;e.C=d?va(e,a):wa(e,a,b.width);var f=la(e.ampdoc.win);f&&ra(f,e.C);e.P(e.H,e.getAdElement());return d?Q(e.getAdElement()).then(function(){return e.getAdElement().whenBuilt()}).then(function(){var a=!e.getAdElement().classList.contains("i-amphtml-layout-awaiting-size");e.l=a?2:1;return e.l}):Promise.resolve({height:b.height||250,margins:e.S}).then(function(a){return Q(e.getAdElement()).then(function(){return e.getAdElement().whenBuilt()}).then(function(){return e.V.attemptChangeSize(e.getAdElement(),
a.height,a.width,a.margins)}).then(function(){e.l=2;return e.l},function(){e.l=1;return e.l})})})})};function wa(a,b,c){b=Object.assign(w({layout:c?"fixed":"fixed-height",height:"0",width:c?c:"auto","class":"i-amphtml-layout-awaiting-size"}),b,a.I);return P(a.ampdoc.win.document,"amp-ad",b)}
function va(a,b){b=Object.assign(w({width:"100vw",height:"0",layout:"fixed","class":"i-amphtml-layout-awaiting-size","data-auto-format":"rspv","data-full-width":""}),b,a.I);return P(a.ampdoc.win.document,"amp-ad",b)}function xa(a,b){var c=b.placements;if(!c)return B().info("amp-auto-ads","No placements in config"),[];var d=[];c.forEach(function(b){ya(a,b,d)});return d}
function ya(a,b,c){var d=ua[b.pos];if(d){var e=b.anchor;if(e){var f=za(a.getRootNode(),e);if(f.length){var m=void 0;if(b.style){var g=parseInt(b.style.top_m,10),k=parseInt(b.style.bot_m,10);if(g||k)m={top:g||void 0,bottom:k||void 0}}f.forEach(function(e){if(Aa(e,b.pos)){var f=E(b,"attributes");c.push(new U(a,e,b.pos,d,f,m))}})}else B().warn("amp-auto-ads","No anchor element found")}else B().warn("amp-auto-ads","No anchor in placement")}else B().warn("amp-auto-ads","No injector for position")}
function za(a,b){var c=b.selector;if(!c)return B().warn("amp-auto-ads","No selector in anchor"),[];c=[].slice.call(oa(a.documentElement||a,c));var d=b.min_c||0;0<d&&(c=c.filter(function(a){return a.textContent.length>=d}));"number"!=typeof b.index&&b.all||(c=(c=c[b.index||0])?[c]:[]);if(0==c.length)return[];if(b.sub){var e=[];c.forEach(function(a){e=e.concat(za(a,b.sub))});return e}return c}
function Aa(a,b){var c=1==b||4==b?a.parentElement:a;if(!c)return B().warn("amp-auto-ads","Parentless anchor with BEFORE/AFTER position."),!1;var d=c;return!ta.some(function(a){return na(d,a)?(B().warn("amp-auto-ads","Placement inside blacklisted ancestor: "+a),!0):!1})};function Ba(a){this.j=a}h=Ba.prototype;h.isEnabled=function(){return!0};h.isResponsiveEnabled=function(){return!0};h.getConfigUrl=function(){var a=R(this.j),b=I(a.canonicalUrl).hostname;return T("//pagead2.googlesyndication.com/getconfig/ama",{client:this.j.getAttribute("data-ad-client"),plah:b,ama_t:"amp",url:a.canonicalUrl})};
h.getAttributes=function(){var a=w({type:"adsense","data-ad-client":this.j.getAttribute("data-ad-client")}),b=this.j.getAttribute("data-ad-host");b&&(a["data-ad-host"]=b);return a};h.getDefaultAdConstraints=function(){var a=S(this.j).getSize().height;return{initialMinSpacing:a,subsequentMinSpacing:[{adCount:3,spacing:2*a},{adCount:6,spacing:3*a}],maxAdCount:8}};h.getSizing=function(){return{}};function Ca(a){this.j=a}h=Ca.prototype;h.isEnabled=function(){return!0};h.isResponsiveEnabled=function(){return!1};h.getConfigUrl=function(){var a=R(this.j),b=this.j.getAttribute("data-publisher-id"),c=this.j.getAttribute("data-tag-id");return T("//v2.denakop.com/ad-request/amp",{p:b,t:c,u:a.canonicalUrl,w:window.screen.width,h:window.screen.height})};h.getAttributes=function(){return w({layout:"fixed","data-multi-size-validation":"false",type:"doubleclick","data-ad":"denakop"})};
h.getDefaultAdConstraints=function(){var a=S(this.j).getSize().height;return{initialMinSpacing:a,subsequentMinSpacing:[{adCount:3,spacing:2*a},{adCount:6,spacing:3*a}],maxAdCount:8}};h.getSizing=function(){return{}};function Da(a){this.j=a}h=Da.prototype;h.isEnabled=function(){return!0};h.isResponsiveEnabled=function(){return!1};h.getConfigUrl=function(){var a=R(this.j),b=I(a.canonicalUrl).hostname;return T("//pagead2.googlesyndication.com/getconfig/ama",{client:this.j.getAttribute("data-ad-legacy-client"),plah:b,ama_t:"amp",url:a.canonicalUrl})};h.getAttributes=function(){return w({type:"doubleclick","data-slot":this.j.getAttribute("data-slot"),json:this.j.getAttribute("data-json")})};
h.getDefaultAdConstraints=function(){var a=S(this.j).getSize().height;return{initialMinSpacing:a,subsequentMinSpacing:[{adCount:3,spacing:2*a},{adCount:6,spacing:3*a}],maxAdCount:8}};h.getSizing=function(){var a=this.j.getAttribute("data-experiment");try{var b=JSON.parse(a)}catch(d){b=null}var c=b;return c?{height:c.height?Number(c.height):250,width:c.width?Number(c.width):void 0}:{}};function Ea(a,b){return"adsense"==a?new Ba(b):"denakop"==a?new Ca(b):"doubleclick"==a?new Da(b):null};function Fa(a,b,c,d,e){e=void 0===e?!1:e;this.L=a.slice(0);this.D=b;this.W=c;this.m=d;this.G=0;this.R=e}Fa.prototype.run=function(){var a=this;return this.m.isMaxAdCountReached()?ia(function(){return Ga(a)}):Ha(this).then(function(b){return b?a.run():Ga(a)})};function Ga(a){return{adsPlaced:a.G,totalAdsOnPage:a.m.getAdCount()}}
function Ha(a){var b=a.L.shift();return b?b.placeAd(a.D,a.W,a.m,a.R).then(function(c){return 2==c?(a.m.addAd(b.getAdElement()),a.G++,!0):Ha(a)}):(B().info("amp-auto-ads","unable to fulfill ad strategy"),Promise.resolve(!1))};function V(a,b){this.o=a;this.O=b.initialMinSpacing;this.K=b.subsequentMinSpacing.slice(0).sort(function(a,b){return a.adCount-b.adCount});this.T=b.maxAdCount;this.J=Ia(this)}V.prototype.addAd=function(a){this.o.push(a);this.J=Ia(this)};V.prototype.getAdCount=function(){return this.o.length};V.prototype.isMaxAdCountReached=function(){return this.getAdCount()>=this.T};V.prototype.isTooNearAnAd=function(a){return Ja(this,a,0)};
function Ja(a,b,c){return c>=a.o.length?Promise.resolve(!1):Ka(b,a.o[c]).then(function(d){return d<a.J?!0:Ja(a,b,c+1)})}function Ka(a,b){return sa(b).then(function(b){return a>=b.top&&a<=b.bottom?0:Math.min(Math.abs(a-b.top),Math.abs(a-b.bottom))})}function Ia(a){for(var b=a.getAdCount(),c=a.O,d=0;d<a.K.length;d++){var e=a.K[d];e.adCount<=b&&(c=e.spacing)}return c}
function La(a){return[].slice.call(a.getRootNode().querySelectorAll("AMP-AD")).filter(function(a){return a.parentElement&&"AMP-STICKY-AD"==a.parentElement.tagName?!1:!0})}
function Ma(a,b){b=b.adConstraints;if(!b)return null;var c=S(a).getHeight(),d=Na(b.initialMinSpacing,c);if(null==d)return B().warn("amp-auto-ads","Invalid initial min spacing"),null;var e=(b.subsequentMinSpacing||[]).map(function(a){var b=a.adCount;if(null==b)return B().warn("amp-auto-ads","No subsequentMinSpacing adCount specified"),null;a=Na(a.spacing,c);return null==a?(B().warn("amp-auto-ads","Invalid subsequent min spacing"),null):{adCount:b,spacing:a}});return-1!=e.indexOf(null)?null:null==b.maxAdCount?
(B().warn("amp-auto-ads","No maxAdCount specified"),null):{initialMinSpacing:d,subsequentMinSpacing:e,maxAdCount:b.maxAdCount}}function Na(a,b){if(!a)return null;var c=parseFloat(a);return isNaN(c)||0>c?null:x(a,"px")?c:x(a,"vp")?c*b:null};function Oa(a,b,c){this.ampdoc=a;this.D=b;this.N=c}
Oa.prototype.run=function(){if(this.ampdoc.getRootNode().querySelector("AMP-STICKY-AD"))return B().warn("amp-auto-ads","Auto ads may not work because of already existing <amp-sticky-ad>."),Promise.resolve(!1);if(!B().assertArray(this.N.optInStatus||[]).includes(2))return Promise.resolve(!1);J(this.ampdoc.win,"extensions").installExtensionForDoc(this.ampdoc,"amp-sticky-ad","1.0");var a=S(this.ampdoc).getWidth(),b=Object.assign({},this.D,w({width:String(a),height:"100"}));a=this.ampdoc.win.document;
b=P(a,"amp-ad",b);a=P(a,"amp-sticky-ad",w({layout:"nodisplay"}));a.appendChild(b);b=this.ampdoc.getBody();b.insertBefore(a,b.firstChild);return Promise.resolve(!0)};function W(){return AMP.BaseElement.apply(this,arguments)||this}var X=AMP.BaseElement;W.prototype=ba(X.prototype);W.prototype.constructor=W;if(t)t(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var Pa=Object.getOwnPropertyDescriptor(X,Y);Pa&&Object.defineProperty(W,Y,Pa)}else W[Y]=X[Y];W.X=X.prototype;
W.prototype.buildCallback=function(){var a=this,b=this.element.getAttribute("type");D(b,"Missing type attribute");var c=Ea(b,this.element);D(c,"No AdNetworkConfig for type: "+b);if(c.isEnabled(this.win)){var d=this.getAmpDoc();J(this.win,"extensions").installExtensionForDoc(d,"amp-ad");var e=this.getAmpDoc().whenFirstVisible();this.divertNoOpExperiment(c.isResponsiveEnabled());e.then(function(){return Qa(a,c.getConfigUrl())}).then(function(b){if(b){var e=b.noConfigReason;if(e)a.user().warn("amp-auto-ads",
e);else{var f=xa(d,b),k=Object.assign(w({}),c.getAttributes(),E(b,"attributes")),n=c.getSizing(),r=Ma(d,b)||c.getDefaultAdConstraints();r=new V(La(d),r);(new Fa(f,k,n,r,c.isResponsiveEnabled())).run();var u=Object.assign(w({}),k,E(b,"stickyAdAttributes"));(new Oa(d,u,b)).run()}}})}};W.prototype.divertNoOpExperiment=function(a){var b={},c=(b[["amp-auto-ads-no-op-experiment"]]={isTrafficEligible:function(){return a},branches:[["44710302"],["44710303"]]},b);ka(this.win,c)};
W.prototype.isLayoutSupported=function(){return!0};function Qa(a,b){var c={mode:"cors",method:"GET",credentials:"omit"};return J(a.win,"xhr").fetchJson(b,c).then(function(a){return a.json()}).catch(function(b){a.user().error("amp-auto-ads","amp-auto-ads config xhr failed: "+b);return null})}(function(a){a.registerElement("amp-auto-ads",W)})(self.AMP);
})});

//# sourceMappingURL=amp-auto-ads-0.1.js.map
