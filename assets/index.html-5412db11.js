import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as i,c as r,a as e,d as t,b as s}from"./app-f76f52a9.js";const a={},u=e("h2",{id:"feature",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#feature","aria-hidden":"true"},"#"),t(" feature")],-1),p=e("li",null,"NACK support",-1),h=e("li",null,"listener support",-1),c=e("li",null,"push stream payload must ts",-1),d=e("li",null,"pull stream payload is ts",-1),_={href:"https://haivision.github.io/srt-rfc/draft-sharabayko-srt.html",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,"version support (>=1.3.0)",-1),f=e("li",null,"fec and encriyped not support",-1),k=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),t(" usage")],-1),v=e("p",null,[t("zlm get vhost,app,streamid and push or play by streamid of srt like this"),e("br"),e("code",null,"#!::key1=value1,key2=value2,key3=value4......")],-1),b=e("p",null,"h and r is special key,to get vhost app streamid, if h not exist ,vhost is default value",-1),y=e("p",null,"m is special key, to judge is push or pull, if vaule is publish the mode is push，otherwise is play, if m not exist, mode is play",-1),g=e("p",null,"other key and m ,can use by webhook to auth for play or push",-1),x=e("br",null,null,-1),z={href:"http://zlmediakit.com",target:"_blank",rel:"noopener noreferrer"},B={href:"http://zlmediakit.com",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,"app = live",-1),E=e("p",null,"streamid = test",-1),V=e("p",null,"mode is push",-1),w=e("li",null,[e("p",null,"OBS push stream url"),e("p",null,[e("code",null,"srt://192.168.1.105:9000?streamid=#!::r=live/test,m=publish")])],-1),C=e("li",null,[e("p",null,"ffmpeg push"),e("p",null,[e("code",null,"ffmpeg -re -stream_loop -1 -i test.ts -c:v copy -c:a copy -f mpegts srt://192.168.1.105:9000?streamid=#!::r=live/test,m=publish")])],-1),I=e("li",null,[e("p",null,"ffplay pull"),e("p",null,[e("code",null,"ffplay -i srt://192.168.1.105:9000?streamid=#!::r=live/test")])],-1),L={href:"https://github.com/Haivision/srt/issues/1015",target:"_blank",rel:"noopener noreferrer"};function j(A,H){const l=n("ExternalLinkIcon");return i(),r("div",null,[u,e("ul",null,[p,h,c,d,e("li",null,[t("protocol impliment "),e("a",_,[t("reference"),s(l)])]),m,f]),k,v,b,y,g,e("p",null,[t("like："),x,t(" #!::h="),e("a",z,[t("zlmediakit.com"),s(l)]),t(",r=live/test,m=publish")]),e("p",null,[t("vhost = "),e("a",B,[t("zlmediakit.com"),s(l)])]),N,E,V,e("ul",null,[w,C,I,e("li",null,[e("p",null,[t("vlc not support ,because can't set stream id "),e("a",L,[t("reference"),s(l)])])])])])}const S=o(a,[["render",j],["__file","index.html.vue"]]);export{S as default};