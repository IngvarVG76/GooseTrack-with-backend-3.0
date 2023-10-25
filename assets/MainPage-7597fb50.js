import{s as D,L as At,r as I,j as v,c as ie,g as dn,a as fn,b as pn}from"./index-3e47e801.js";import{L as hn,R as vn}from"./index.esm-b15c7946.js";import{c as me}from"./index-480a2420.js";const gn=D.img`
  width: 150px;
  height: 149px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) {
    width: 142px;
    height: 142px;
  }
`,mn=D.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3E85F3;
  height: ${n=>n.height}px;
`,yn=D.h1`
  color: #FFFFFF;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
  font-weight: 700;
  font-size: 120px;
  line-height: 150px;
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: 44px;
    line-height: 48px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: 100px;
    line-height: 130px;
  }
`,bn=D.span`
  color: #FFFFFF;
  font-style: italic;
  font-weight: 700;
  font-size: 120px;
  line-height: 150px;
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: 44px;
    line-height: 48px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: 100px;
    line-height: 130px;
  }
`,wn=D.div`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    row-gap: 16px;
  }
`,xn=D(At)`
  color: #FFFFFF;
  font-weight: 600;
  line-height: 18px;
  font-size: 14px;
  position: relative;
  transition: border-color 0.3s, box-shadow 0.3s transform 0.2s; 
  @media screen and (max-width: 767px) {
    font-size: 12px;
    ine-height: 14px;
  }
  &:hover {
    border-color: #0056b3; 
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    background-color: #6FA2FF
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #FFFFFF;
  }

  &:active {
    transform: translateY(3px);
  }
`,Sn=D(At)`
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
  text-align: inherit;
  cursor: pointer;
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 14px 22px;
  display: flex;
  column-gap: 6px;

  transition: transform 0.2s;

  &:active {
    transform: translateY(3px);
  }
  &:hover {
    border-color: #0056b3; 
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
`,On=D.h2`
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #3E85F3;
`,kn=D(hn)`
  width: 18px;
  height: 18px;
  color: #3E85F3;
`,at="/GooseTrack-with-backend-3.0/assets/Tab_mainGoose-75fc3bc2.png",Tn="/GooseTrack-with-backend-3.0/assets/Tab@2x_mainGoose-49dc0cb7.png",_n="/GooseTrack-with-backend-3.0/assets/Tab@3x_mainGoose-7e173b27.png",Pn="/GooseTrack-with-backend-3.0/assets/Tab_mainGoose-75fc3bc2.png",Dn="/GooseTrack-with-backend-3.0/assets/Tab@2x_mainGoose-49dc0cb7.png",Cn="/GooseTrack-with-backend-3.0/assets/Tab@3x_mainGoose-7e173b27.png",En="/GooseTrack-with-backend-3.0/assets/Mob_mainGoose-1c79133e.png",Mn="/GooseTrack-with-backend-3.0/assets/Mob@2x_mainGoose-cfdbf16c.png",Ln="/GooseTrack-with-backend-3.0/assets/Mob@3x_mainGoose-e41fe175.png",jn=()=>{const[n,e]=I.useState(window.innerWidth),[r,i]=I.useState(window.devicePixelRatio),[t,a]=I.useState(at);return I.useEffect(()=>{n<=767?r==1?a(En):r==2?a(Mn):a(Ln):n>=768&&n<=1399?r==1?a(Pn):r==2?a(Dn):a(Cn):r==1?a(at):r==2?a(Tn):a(_n);const o=()=>{e(window.innerWidth),i(window.devicePixelRatio)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[n,r]),v.jsx(v.Fragment,{children:v.jsxs(mn,{height:window.innerHeight,children:[v.jsx(gn,{src:t,alt:"main-Goose"}),v.jsxs(yn,{children:["G",v.jsx(bn,{children:"oo"}),"seTrack"]}),v.jsxs(wn,{children:[v.jsx(xn,{to:"/register",children:"Sign up"}),v.jsxs(Sn,{to:"/login",children:[v.jsx(On,{children:"Log in"}),v.jsx(kn,{})]})]})]})})},Rn=D.div`
padding-top: 64px;
padding-bottom: 64px;
margin-left: auto;
margin-right: auto;
@media screen and (max-width: 767px) {
padding-left: 20px;
padding-right: 20px;
  width: 375px;
      }
      @media screen and (min-width: 768px) and (max-width: 1439px) {
        width: 768px;
        padding-left: 32px;
padding-right: 32px;
        
      }
      @media screen and (min-width: 1440px) {
        padding-bottom: 100px;
        width: 1440px;
      }

`,An=D.div`
margin-bottom: 64px;

@media screen and (min-width: 1440px) {
display: flex;
gap: 228px;
align-items: center;
padding-left: 205px;
padding-right: 128px;
  }
`,zn=D.div`
margin-bottom: 64px;

// @media screen and (min-width: 768px) and (max-width: 1439px) {
//   padding: 0px 32px;
// margin-left: auto;
// }
@media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 228px;
    align-items: center;
    padding-left: 128px;
  }
`,Hn=D.div`

@media screen and (min-width: 1440px) {
    display: flex;
column-gap: 228px;
align-items: center;
padding-left: 205px;
padding-right: 128px;
  }
`,ke=D.h2`
font-weight: 700;
font-size: 104px;
line-height: 104px;
margin-bottom: 20px;
color: #3E85F3;
@media screen and (max-width: 767px) {
    font-weight: 700;
font-size: 80px;
line-height: 80px;
    margin-bottom: 14px;
}

`,st=D.h3`
font-weight: 700;
font-size: 40px;
line-height: 44px;
margin-bottom: 14px;
color: #3E85F3;
padding:  6px 18px;
border-radius: 44px;

display: inline-block;
background-color: #DCEBF7;
@media screen and (max-width: 767px) {
    padding:  8px 18px;
    font-weight: 700;
font-size: 32px;
line-height: 40px;
    margin-bottom: 16px;
}
`,Te=D.h3`
font-weight: 700;
font-size: 40px;
line-height: 44px;
margin-bottom: 24px;
color: #171820

@media screen and (max-width: 767px) {
    font-weight: 700;
font-size: 32px;
line-height: 40px;
    margin-bottom: 14px;
}
`,_e=D.p`
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #111111E5;

@media screen and (max-width: 767px) {
    margin-bottom: 40px;
} 
@media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 48px;
    width: 275px;
}
`,Pe=D.img`
  width: 335px;
  height: 457px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

        @media screen and (min-width: 768px) and (max-width: 1439px) {
            width: 704px;
            height: 700px;
          }
          @media screen and (min-width: 1440px) {
            width: 604px;
            height: 700px;
          }
`,In=D.div`
width: 275px;

@media screen and (min-width: 768px) and (max-width: 1439px) {
  margin-left: auto;
}


`,lt=D.div`
width: 275px;
@media screen and (max-width: 767px) {
  width: 335px;
} 
`,ct="/GooseTrack-with-backend-3.0/assets/Desk_FirstDescription-min-602d15b6.png",Fn="/GooseTrack-with-backend-3.0/assets/Desk@2x_FirstDescription-min-bf06d3bb.png",Wn="/GooseTrack-with-backend-3.0/assets/Desk@3x_FirstDescription-min-e4611bb4.png",Nn="/GooseTrack-with-backend-3.0/assets/Tab_FirstDescription-min-79b91b56.png",Gn="/GooseTrack-with-backend-3.0/assets/Tab@2x_FirstDescription-min-5973d134.png",Bn="/GooseTrack-with-backend-3.0/assets/Tab@3x_FirstDescription-min-bf59d43a.png",qn="/GooseTrack-with-backend-3.0/assets/Mob_FirstDescription-min-fb0df188.png",ut="/GooseTrack-with-backend-3.0/assets/Mob@3x_FirstDescription-min-8c200e23.png",dt="/GooseTrack-with-backend-3.0/assets/Desk_SecondDescription-min-0cb1a07e.png",$n="/GooseTrack-with-backend-3.0/assets/Desk@2x_SecondDescription-min-6c50aabf.png",Xn="/GooseTrack-with-backend-3.0/assets/Desk@3x_SecondDescription-min-81a96413.png",ft="/GooseTrack-with-backend-3.0/assets/Tab_SecondDescription-min-50e9836f.png",Un="/GooseTrack-with-backend-3.0/assets/Tab@2x_SecondDescription-min-cd4be521.png",Qn="/GooseTrack-with-backend-3.0/assets/Tab@3x_SecondDescription-min-0fdd1260.png",Yn="/GooseTrack-with-backend-3.0/assets/Mob_SecondDescription-min-aff5675d.png",Kn="/GooseTrack-with-backend-3.0/assets/Mob@2x_SecondDescription-min-f90949e5.png",Jn="/GooseTrack-with-backend-3.0/assets/Mob@3x_SecondDescription-min-cdd9a749.png",pt="/GooseTrack-with-backend-3.0/assets/Desk_ThirdDescription-min-c3acdd71.png",Vn="/GooseTrack-with-backend-3.0/assets/Desk@2x_ThirdDescription-min-33ef0510.png",Zn="/GooseTrack-with-backend-3.0/assets/Desk@3x_ThirdDescription-min-54162a09.png",er="/GooseTrack-with-backend-3.0/assets/Tab@2x_ThirdDescription-min-ca7caa5c.png",tr="/GooseTrack-with-backend-3.0/assets/Tab@3x_ThirdDescription-min-163f8170.png",nr="/GooseTrack-with-backend-3.0/assets/Mob_ThirdDescription-min-7a2a7ad8.png",rr="/GooseTrack-with-backend-3.0/assets/Mob@2x_ThirdDescription-min-83710fb8.png",ir="/GooseTrack-with-backend-3.0/assets/Mob@3x_ThirdDescription-min-305fda3c.png",or=()=>{const[n,e]=I.useState(window.innerWidth),[r,i]=I.useState(window.devicePixelRatio),[t,a]=I.useState(ct),[o,s]=I.useState(dt),[l,c]=I.useState(pt);return I.useEffect(()=>{n<=767?r==1?(a(qn),s(Yn),c(nr)):r==2?(a(ut),s(Kn),c(rr)):(a(ut),s(Jn),c(ir)):n>=768&&n<=1399?r==1?(a(Nn),s(ft),c(ft)):r==2?(a(Gn),s(Un),c(er)):(a(Bn),s(Qn),c(tr)):r==1?(a(ct),s(dt),c(pt)):r==2?(a(Fn),s($n),c(Vn)):(a(Wn),s(Xn),c(Zn));const f=()=>{e(window.innerWidth),i(window.devicePixelRatio)};return window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)}},[n,r]),v.jsxs(Rn,{children:[v.jsxs(An,{children:[v.jsxs(lt,{children:[v.jsx(ke,{children:"1."}),v.jsx(st,{children:"Calendar"}),v.jsx(Te,{children:"VIEW"}),v.jsx(_e,{children:"GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout."})]}),v.jsx(Pe,{src:t,alt:"image Description Calendar"})]}),v.jsxs(zn,{children:[v.jsxs(In,{children:[v.jsx(ke,{children:"2."}),v.jsx(Te,{children:"SIDEBAR"}),v.jsx(_e,{children:"GooseTrack offers easy access to your account settings, calendar, and filters. The “My Account“ section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks."})]}),v.jsx(Pe,{src:o,alt:"image Description Sidebar"})]}),v.jsxs(Hn,{children:[v.jsxs(lt,{children:[v.jsx(ke,{children:"3."}),v.jsx(st,{children:"all in"}),v.jsx(Te,{children:"ONE"}),v.jsx(_e,{children:"GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack."})]}),v.jsx(Pe,{src:l,alt:"image Description One"})]})]})};var zt={},Ht={},ye={},It={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},r=e;n.default=r})(It);var ar="Expected a function",ht=0/0,sr="[object Symbol]",lr=/^\s+|\s+$/g,cr=/^[-+]0x[0-9a-f]+$/i,ur=/^0b[01]+$/i,dr=/^0o[0-7]+$/i,fr=parseInt,pr=typeof ie=="object"&&ie&&ie.Object===Object&&ie,hr=typeof self=="object"&&self&&self.Object===Object&&self,vr=pr||hr||Function("return this")(),gr=Object.prototype,mr=gr.toString,yr=Math.max,br=Math.min,De=function(){return vr.Date.now()};function wr(n,e,r){var i,t,a,o,s,l,c=0,f=!1,u=!1,w=!0;if(typeof n!="function")throw new TypeError(ar);e=vt(e)||0,Ie(r)&&(f=!!r.leading,u="maxWait"in r,a=u?yr(vt(r.maxWait)||0,e):a,w="trailing"in r?!!r.trailing:w);function j(_){var z=i,h=t;return i=t=void 0,c=_,o=n.apply(h,z),o}function k(_){return c=_,s=setTimeout(T,e),f?j(_):o}function g(_){var z=_-l,h=_-c,m=e-z;return u?br(m,a-h):m}function y(_){var z=_-l,h=_-c;return l===void 0||z>=e||z<0||u&&h>=a}function T(){var _=De();if(y(_))return p(_);s=setTimeout(T,g(_))}function p(_){return s=void 0,w&&i?j(_):(i=t=void 0,o)}function O(){s!==void 0&&clearTimeout(s),c=0,i=l=t=s=void 0}function C(){return s===void 0?o:p(De())}function E(){var _=De(),z=y(_);if(i=arguments,t=this,l=_,z){if(s===void 0)return k(l);if(u)return s=setTimeout(T,e),j(l)}return s===void 0&&(s=setTimeout(T,e)),o}return E.cancel=O,E.flush=C,E}function Ie(n){var e=typeof n;return!!n&&(e=="object"||e=="function")}function xr(n){return!!n&&typeof n=="object"}function Sr(n){return typeof n=="symbol"||xr(n)&&mr.call(n)==sr}function vt(n){if(typeof n=="number")return n;if(Sr(n))return ht;if(Ie(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=Ie(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=n.replace(lr,"");var r=ur.test(n);return r||dr.test(n)?fr(n.slice(2),r?2:8):cr.test(n)?ht:+n}var Or=wr,d={};Object.defineProperty(d,"__esModule",{value:!0});d.checkSpecKeys=d.checkNavigable=d.changeSlide=d.canUseDOM=d.canGoNext=void 0;d.clamp=Ft;d.swipeStart=d.swipeMove=d.swipeEnd=d.slidesOnRight=d.slidesOnLeft=d.slideHandler=d.siblingDirection=d.safePreventDefault=d.lazyStartIndex=d.lazySlidesOnRight=d.lazySlidesOnLeft=d.lazyEndIndex=d.keyHandler=d.initializedState=d.getWidth=d.getTrackLeft=d.getTrackCSS=d.getTrackAnimateCSS=d.getTotalSlides=d.getSwipeDirection=d.getSlideCount=d.getRequiredLazySlides=d.getPreClones=d.getPostClones=d.getOnDemandLazySlides=d.getNavigableIndexes=d.getHeight=d.extractObject=void 0;var kr=Tr(I);function Tr(n){return n&&n.__esModule?n:{default:n}}function gt(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,i)}return r}function A(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?gt(Object(r),!0).forEach(function(i){_r(n,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):gt(Object(r)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(r,i))})}return n}function _r(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function Ft(n,e,r){return Math.max(e,Math.min(n,r))}var U=function(e){var r=["onTouchStart","onTouchMove","onWheel"];r.includes(e._reactName)||e.preventDefault()};d.safePreventDefault=U;var Ve=function(e){for(var r=[],i=Ze(e),t=et(e),a=i;a<t;a++)e.lazyLoadedList.indexOf(a)<0&&r.push(a);return r};d.getOnDemandLazySlides=Ve;var Pr=function(e){for(var r=[],i=Ze(e),t=et(e),a=i;a<t;a++)r.push(a);return r};d.getRequiredLazySlides=Pr;var Ze=function(e){return e.currentSlide-Wt(e)};d.lazyStartIndex=Ze;var et=function(e){return e.currentSlide+Nt(e)};d.lazyEndIndex=et;var Wt=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0};d.lazySlidesOnLeft=Wt;var Nt=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow};d.lazySlidesOnRight=Nt;var ae=function(e){return e&&e.offsetWidth||0};d.getWidth=ae;var tt=function(e){return e&&e.offsetHeight||0};d.getHeight=tt;var nt=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i,t,a,o;return i=e.startX-e.curX,t=e.startY-e.curY,a=Math.atan2(t,i),o=Math.round(a*180/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":r===!0?o>=35&&o<=135?"up":"down":"vertical"};d.getSwipeDirection=nt;var rt=function(e){var r=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(r=!1),r};d.canGoNext=rt;var Dr=function(e,r){var i={};return r.forEach(function(t){return i[t]=e[t]}),i};d.extractObject=Dr;var Cr=function(e){var r=kr.default.Children.count(e.children),i=e.listRef,t=Math.ceil(ae(i)),a=e.trackRef&&e.trackRef.node,o=Math.ceil(ae(a)),s;if(e.vertical)s=t;else{var l=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(l*=t/100),s=Math.ceil((t-l)/e.slidesToShow)}var c=i&&tt(i.querySelector('[data-index="0"]')),f=c*e.slidesToShow,u=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(u=r-1-e.initialSlide);var w=e.lazyLoadedList||[],j=Ve(A(A({},e),{},{currentSlide:u,lazyLoadedList:w}));w=w.concat(j);var k={slideCount:r,slideWidth:s,listWidth:t,trackWidth:o,currentSlide:u,slideHeight:c,listHeight:f,lazyLoadedList:w};return e.autoplaying===null&&e.autoplay&&(k.autoplaying="playing"),k};d.initializedState=Cr;var Er=function(e){var r=e.waitForAnimate,i=e.animating,t=e.fade,a=e.infinite,o=e.index,s=e.slideCount,l=e.lazyLoad,c=e.currentSlide,f=e.centerMode,u=e.slidesToScroll,w=e.slidesToShow,j=e.useCSS,k=e.lazyLoadedList;if(r&&i)return{};var g=o,y,T,p,O={},C={},E=a?o:Ft(o,0,s-1);if(t){if(!a&&(o<0||o>=s))return{};o<0?g=o+s:o>=s&&(g=o-s),l&&k.indexOf(g)<0&&(k=k.concat(g)),O={animating:!0,currentSlide:g,lazyLoadedList:k,targetSlide:g},C={animating:!1,targetSlide:g}}else y=g,g<0?(y=g+s,a?s%u!==0&&(y=s-s%u):y=0):!rt(e)&&g>c?g=y=c:f&&g>=s?(g=a?s:s-1,y=a?0:s-1):g>=s&&(y=g-s,a?s%u!==0&&(y=0):y=s-w),!a&&g+w>=s&&(y=s-w),T=ne(A(A({},e),{},{slideIndex:g})),p=ne(A(A({},e),{},{slideIndex:y})),a||(T===p&&(g=y),T=p),l&&(k=k.concat(Ve(A(A({},e),{},{currentSlide:g})))),j?(O={animating:!0,currentSlide:y,trackStyle:it(A(A({},e),{},{left:T})),lazyLoadedList:k,targetSlide:E},C={animating:!1,currentSlide:y,trackStyle:te(A(A({},e),{},{left:p})),swipeLeft:null,targetSlide:E}):O={currentSlide:y,trackStyle:te(A(A({},e),{},{left:p})),lazyLoadedList:k,targetSlide:E};return{state:O,nextState:C}};d.slideHandler=Er;var Mr=function(e,r){var i,t,a,o,s,l=e.slidesToScroll,c=e.slidesToShow,f=e.slideCount,u=e.currentSlide,w=e.targetSlide,j=e.lazyLoad,k=e.infinite;if(o=f%l!==0,i=o?0:(f-u)%l,r.message==="previous")a=i===0?l:c-i,s=u-a,j&&!k&&(t=u-a,s=t===-1?f-1:t),k||(s=w-l);else if(r.message==="next")a=i===0?l:i,s=u+a,j&&!k&&(s=(u+l)%f+i),k||(s=w+l);else if(r.message==="dots")s=r.index*r.slidesToScroll;else if(r.message==="children"){if(s=r.index,k){var g=$t(A(A({},e),{},{targetSlide:s}));s>r.currentSlide&&g==="left"?s=s-f:s<r.currentSlide&&g==="right"&&(s=s+f)}}else r.message==="index"&&(s=Number(r.index));return s};d.changeSlide=Mr;var Lr=function(e,r,i){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!r?"":e.keyCode===37?i?"next":"previous":e.keyCode===39?i?"previous":"next":""};d.keyHandler=Lr;var jr=function(e,r,i){return e.target.tagName==="IMG"&&U(e),!r||!i&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};d.swipeStart=jr;var Rr=function(e,r){var i=r.scrolling,t=r.animating,a=r.vertical,o=r.swipeToSlide,s=r.verticalSwiping,l=r.rtl,c=r.currentSlide,f=r.edgeFriction,u=r.edgeDragged,w=r.onEdge,j=r.swiped,k=r.swiping,g=r.slideCount,y=r.slidesToScroll,T=r.infinite,p=r.touchObject,O=r.swipeEvent,C=r.listHeight,E=r.listWidth;if(!i){if(t)return U(e);a&&o&&s&&U(e);var _,z={},h=ne(r);p.curX=e.touches?e.touches[0].pageX:e.clientX,p.curY=e.touches?e.touches[0].pageY:e.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var m=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!s&&!k&&m>10)return{scrolling:!0};s&&(p.swipeLength=m);var P=(l?-1:1)*(p.curX>p.startX?1:-1);s&&(P=p.curY>p.startY?1:-1);var R=Math.ceil(g/y),S=nt(r.touchObject,s),x=p.swipeLength;return T||(c===0&&(S==="right"||S==="down")||c+1>=R&&(S==="left"||S==="up")||!rt(r)&&(S==="left"||S==="up"))&&(x=p.swipeLength*f,u===!1&&w&&(w(S),z.edgeDragged=!0)),!j&&O&&(O(S),z.swiped=!0),a?_=h+x*(C/E)*P:l?_=h-x*P:_=h+x*P,s&&(_=h+x*P),z=A(A({},z),{},{touchObject:p,swipeLeft:_,trackStyle:te(A(A({},r),{},{left:_}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(z.swiping=!0,U(e)),z}};d.swipeMove=Rr;var Ar=function(e,r){var i=r.dragging,t=r.swipe,a=r.touchObject,o=r.listWidth,s=r.touchThreshold,l=r.verticalSwiping,c=r.listHeight,f=r.swipeToSlide,u=r.scrolling,w=r.onSwipe,j=r.targetSlide,k=r.currentSlide,g=r.infinite;if(!i)return t&&U(e),{};var y=l?c/s:o/s,T=nt(a,l),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(u||!a.swipeLength)return p;if(a.swipeLength>y){U(e),w&&w(T);var O,C,E=g?k:j;switch(T){case"left":case"up":C=E+We(r),O=f?Fe(r,C):C,p.currentDirection=0;break;case"right":case"down":C=E-We(r),O=f?Fe(r,C):C,p.currentDirection=1;break;default:O=E}p.triggerSlideHandler=O}else{var _=ne(r);p.trackStyle=it(A(A({},r),{},{left:_}))}return p};d.swipeEnd=Ar;var Gt=function(e){for(var r=e.infinite?e.slideCount*2:e.slideCount,i=e.infinite?e.slidesToShow*-1:0,t=e.infinite?e.slidesToShow*-1:0,a=[];i<r;)a.push(i),i=t+e.slidesToScroll,t+=Math.min(e.slidesToScroll,e.slidesToShow);return a};d.getNavigableIndexes=Gt;var Fe=function(e,r){var i=Gt(e),t=0;if(r>i[i.length-1])r=i[i.length-1];else for(var a in i){if(r<i[a]){r=t;break}t=i[a]}return r};d.checkNavigable=Fe;var We=function(e){var r=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var i,t=e.listRef,a=t.querySelectorAll&&t.querySelectorAll(".slick-slide")||[];if(Array.from(a).every(function(l){if(e.vertical){if(l.offsetTop+tt(l)/2>e.swipeLeft*-1)return i=l,!1}else if(l.offsetLeft-r+ae(l)/2>e.swipeLeft*-1)return i=l,!1;return!0}),!i)return 0;var o=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,s=Math.abs(i.dataset.index-o)||1;return s}else return e.slidesToScroll};d.getSlideCount=We;var be=function(e,r){return r.reduce(function(i,t){return i&&e.hasOwnProperty(t)},!0)?null:console.error("Keys Missing:",e)};d.checkSpecKeys=be;var te=function(e){be(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var r,i,t=e.slideCount+2*e.slidesToShow;e.vertical?i=t*e.slideHeight:r=qt(e)*e.slideWidth;var a={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",s=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";a=A(A({},a),{},{WebkitTransform:o,transform:s,msTransform:l})}else e.vertical?a.top=e.left:a.left=e.left;return e.fade&&(a={opacity:1}),r&&(a.width=r),i&&(a.height=i),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?a.marginTop=e.left+"px":a.marginLeft=e.left+"px"),a};d.getTrackCSS=te;var it=function(e){be(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var r=te(e);return e.useTransform?(r.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,r.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?r.transition="top "+e.speed+"ms "+e.cssEase:r.transition="left "+e.speed+"ms "+e.cssEase,r};d.getTrackAnimateCSS=it;var ne=function(e){if(e.unslick)return 0;be(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var r=e.slideIndex,i=e.trackRef,t=e.infinite,a=e.centerMode,o=e.slideCount,s=e.slidesToShow,l=e.slidesToScroll,c=e.slideWidth,f=e.listWidth,u=e.variableWidth,w=e.slideHeight,j=e.fade,k=e.vertical,g=0,y,T,p=0;if(j||e.slideCount===1)return 0;var O=0;if(t?(O=-ee(e),o%l!==0&&r+l>o&&(O=-(r>o?s-(r-o):o%l)),a&&(O+=parseInt(s/2))):(o%l!==0&&r+l>o&&(O=s-o%l),a&&(O=parseInt(s/2))),g=O*c,p=O*w,k?y=r*w*-1+p:y=r*c*-1+g,u===!0){var C,E=i&&i.node;if(C=r+ee(e),T=E&&E.childNodes[C],y=T?T.offsetLeft*-1:0,a===!0){C=t?r+ee(e):r,T=E&&E.children[C],y=0;for(var _=0;_<C;_++)y-=E&&E.children[_]&&E.children[_].offsetWidth;y-=parseInt(e.centerPadding),y+=T&&(f-T.offsetWidth)/2}}return y};d.getTrackLeft=ne;var ee=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)};d.getPreClones=ee;var Bt=function(e){return e.unslick||!e.infinite?0:e.slideCount};d.getPostClones=Bt;var qt=function(e){return e.slideCount===1?1:ee(e)+e.slideCount+Bt(e)};d.getTotalSlides=qt;var $t=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+Xt(e)?"left":"right":e.targetSlide<e.currentSlide-Ut(e)?"right":"left"};d.siblingDirection=$t;var Xt=function(e){var r=e.slidesToShow,i=e.centerMode,t=e.rtl,a=e.centerPadding;if(i){var o=(r-1)/2+1;return parseInt(a)>0&&(o+=1),t&&r%2===0&&(o+=1),o}return t?0:r-1};d.slidesOnRight=Xt;var Ut=function(e){var r=e.slidesToShow,i=e.centerMode,t=e.rtl,a=e.centerPadding;if(i){var o=(r-1)/2+1;return parseInt(a)>0&&(o+=1),!t&&r%2===0&&(o+=1),o}return t?r-1:0};d.slidesOnLeft=Ut;var zr=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};d.canUseDOM=zr;var we={};function Ne(n){"@babel/helpers - typeof";return Ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ne(n)}Object.defineProperty(we,"__esModule",{value:!0});we.Track=void 0;var q=Qt(I),Ce=Qt(me),Ee=d;function Qt(n){return n&&n.__esModule?n:{default:n}}function Ge(){return Ge=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},Ge.apply(this,arguments)}function Hr(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function mt(n,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Ir(n,e,r){return e&&mt(n.prototype,e),r&&mt(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function Fr(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Be(n,e)}function Be(n,e){return Be=Object.setPrototypeOf||function(i,t){return i.__proto__=t,i},Be(n,e)}function Wr(n){var e=Gr();return function(){var i=se(n),t;if(e){var a=se(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return Nr(this,t)}}function Nr(n,e){if(e&&(Ne(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return qe(n)}function qe(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Gr(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function se(n){return se=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},se(n)}function yt(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,i)}return r}function N(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?yt(Object(r),!0).forEach(function(i){$e(n,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):yt(Object(r)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(r,i))})}return n}function $e(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var Me=function(e){var r,i,t,a,o;e.rtl?o=e.slideCount-1-e.index:o=e.index,t=o<0||o>=e.slideCount,e.centerMode?(a=Math.floor(e.slidesToShow/2),i=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-a-1&&o<=e.currentSlide+a&&(r=!0)):r=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow;var s;e.targetSlide<0?s=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?s=e.targetSlide-e.slideCount:s=e.targetSlide;var l=o===s;return{"slick-slide":!0,"slick-active":r,"slick-center":i,"slick-cloned":t,"slick-current":l}},Br=function(e){var r={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(r.width=e.slideWidth),e.fade&&(r.position="relative",e.vertical?r.top=-e.index*parseInt(e.slideHeight):r.left=-e.index*parseInt(e.slideWidth),r.opacity=e.currentSlide===e.index?1:0,e.useCSS&&(r.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),r},Le=function(e,r){return e.key||r},qr=function(e){var r,i=[],t=[],a=[],o=q.default.Children.count(e.children),s=(0,Ee.lazyStartIndex)(e),l=(0,Ee.lazyEndIndex)(e);return q.default.Children.forEach(e.children,function(c,f){var u,w={message:"children",index:f,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(f)>=0?u=c:u=q.default.createElement("div",null);var j=Br(N(N({},e),{},{index:f})),k=u.props.className||"",g=Me(N(N({},e),{},{index:f}));if(i.push(q.default.cloneElement(u,{key:"original"+Le(u,f),"data-index":f,className:(0,Ce.default)(g,k),tabIndex:"-1","aria-hidden":!g["slick-active"],style:N(N({outline:"none"},u.props.style||{}),j),onClick:function(p){u.props&&u.props.onClick&&u.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(w)}})),e.infinite&&e.fade===!1){var y=o-f;y<=(0,Ee.getPreClones)(e)&&o!==e.slidesToShow&&(r=-y,r>=s&&(u=c),g=Me(N(N({},e),{},{index:r})),t.push(q.default.cloneElement(u,{key:"precloned"+Le(u,r),"data-index":r,tabIndex:"-1",className:(0,Ce.default)(g,k),"aria-hidden":!g["slick-active"],style:N(N({},u.props.style||{}),j),onClick:function(p){u.props&&u.props.onClick&&u.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(w)}}))),o!==e.slidesToShow&&(r=o+f,r<l&&(u=c),g=Me(N(N({},e),{},{index:r})),a.push(q.default.cloneElement(u,{key:"postcloned"+Le(u,r),"data-index":r,tabIndex:"-1",className:(0,Ce.default)(g,k),"aria-hidden":!g["slick-active"],style:N(N({},u.props.style||{}),j),onClick:function(p){u.props&&u.props.onClick&&u.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(w)}})))}}),e.rtl?t.concat(i,a).reverse():t.concat(i,a)},$r=function(n){Fr(r,n);var e=Wr(r);function r(){var i;Hr(this,r);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return i=e.call.apply(e,[this].concat(a)),$e(qe(i),"node",null),$e(qe(i),"handleRef",function(s){i.node=s}),i}return Ir(r,[{key:"render",value:function(){var t=qr(this.props),a=this.props,o=a.onMouseEnter,s=a.onMouseOver,l=a.onMouseLeave,c={onMouseEnter:o,onMouseOver:s,onMouseLeave:l};return q.default.createElement("div",Ge({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},c),t)}}]),r}(q.default.PureComponent);we.Track=$r;var xe={};function Xe(n){"@babel/helpers - typeof";return Xe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xe(n)}Object.defineProperty(xe,"__esModule",{value:!0});xe.Dots=void 0;var oe=Yt(I),Xr=Yt(me),bt=d;function Yt(n){return n&&n.__esModule?n:{default:n}}function wt(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,i)}return r}function Ur(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?wt(Object(r),!0).forEach(function(i){Qr(n,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):wt(Object(r)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(r,i))})}return n}function Qr(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function Yr(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function xt(n,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Kr(n,e,r){return e&&xt(n.prototype,e),r&&xt(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function Jr(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Ue(n,e)}function Ue(n,e){return Ue=Object.setPrototypeOf||function(i,t){return i.__proto__=t,i},Ue(n,e)}function Vr(n){var e=ti();return function(){var i=le(n),t;if(e){var a=le(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return Zr(this,t)}}function Zr(n,e){if(e&&(Xe(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ei(n)}function ei(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ti(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function le(n){return le=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},le(n)}var ni=function(e){var r;return e.infinite?r=Math.ceil(e.slideCount/e.slidesToScroll):r=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,r},ri=function(n){Jr(r,n);var e=Vr(r);function r(){return Yr(this,r),e.apply(this,arguments)}return Kr(r,[{key:"clickHandler",value:function(t,a){a.preventDefault(),this.props.clickHandler(t)}},{key:"render",value:function(){for(var t=this.props,a=t.onMouseEnter,o=t.onMouseOver,s=t.onMouseLeave,l=t.infinite,c=t.slidesToScroll,f=t.slidesToShow,u=t.slideCount,w=t.currentSlide,j=ni({slideCount:u,slidesToScroll:c,slidesToShow:f,infinite:l}),k={onMouseEnter:a,onMouseOver:o,onMouseLeave:s},g=[],y=0;y<j;y++){var T=(y+1)*c-1,p=l?T:(0,bt.clamp)(T,0,u-1),O=p-(c-1),C=l?O:(0,bt.clamp)(O,0,u-1),E=(0,Xr.default)({"slick-active":l?w>=C&&w<=p:w===C}),_={message:"dots",index:y,slidesToScroll:c,currentSlide:w},z=this.clickHandler.bind(this,_);g=g.concat(oe.default.createElement("li",{key:y,className:E},oe.default.cloneElement(this.props.customPaging(y),{onClick:z})))}return oe.default.cloneElement(this.props.appendDots(g),Ur({className:this.props.dotsClass},k))}}]),r}(oe.default.PureComponent);xe.Dots=ri;var J={};function Qe(n){"@babel/helpers - typeof";return Qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qe(n)}Object.defineProperty(J,"__esModule",{value:!0});J.PrevArrow=J.NextArrow=void 0;var K=Jt(I),Kt=Jt(me),ii=d;function Jt(n){return n&&n.__esModule?n:{default:n}}function ce(){return ce=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},ce.apply(this,arguments)}function St(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,i)}return r}function ue(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?St(Object(r),!0).forEach(function(i){oi(n,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):St(Object(r)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(r,i))})}return n}function oi(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function Vt(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Ot(n,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Zt(n,e,r){return e&&Ot(n.prototype,e),r&&Ot(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function en(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Ye(n,e)}function Ye(n,e){return Ye=Object.setPrototypeOf||function(i,t){return i.__proto__=t,i},Ye(n,e)}function tn(n){var e=li();return function(){var i=de(n),t;if(e){var a=de(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return ai(this,t)}}function ai(n,e){if(e&&(Qe(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return si(n)}function si(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function li(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function de(n){return de=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},de(n)}var ci=function(n){en(r,n);var e=tn(r);function r(){return Vt(this,r),e.apply(this,arguments)}return Zt(r,[{key:"clickHandler",value:function(t,a){a&&a.preventDefault(),this.props.clickHandler(t,a)}},{key:"render",value:function(){var t={"slick-arrow":!0,"slick-prev":!0},a=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(t["slick-disabled"]=!0,a=null);var o={key:"0","data-role":"none",className:(0,Kt.default)(t),style:{display:"block"},onClick:a},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=K.default.cloneElement(this.props.prevArrow,ue(ue({},o),s)):l=K.default.createElement("button",ce({key:"0",type:"button"},o)," ","Previous"),l}}]),r}(K.default.PureComponent);J.PrevArrow=ci;var ui=function(n){en(r,n);var e=tn(r);function r(){return Vt(this,r),e.apply(this,arguments)}return Zt(r,[{key:"clickHandler",value:function(t,a){a&&a.preventDefault(),this.props.clickHandler(t,a)}},{key:"render",value:function(){var t={"slick-arrow":!0,"slick-next":!0},a=this.clickHandler.bind(this,{message:"next"});(0,ii.canGoNext)(this.props)||(t["slick-disabled"]=!0,a=null);var o={key:"1","data-role":"none",className:(0,Kt.default)(t),style:{display:"block"},onClick:a},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=K.default.cloneElement(this.props.nextArrow,ue(ue({},o),s)):l=K.default.createElement("button",ce({key:"1",type:"button"},o)," ","Next"),l}}]),r}(K.default.PureComponent);J.NextArrow=ui;var nn=function(){if(typeof Map<"u")return Map;function n(e,r){var i=-1;return e.some(function(t,a){return t[0]===r?(i=a,!0):!1}),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(r){var i=n(this.__entries__,r),t=this.__entries__[i];return t&&t[1]},e.prototype.set=function(r,i){var t=n(this.__entries__,r);~t?this.__entries__[t][1]=i:this.__entries__.push([r,i])},e.prototype.delete=function(r){var i=this.__entries__,t=n(i,r);~t&&i.splice(t,1)},e.prototype.has=function(r){return!!~n(this.__entries__,r)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(r,i){i===void 0&&(i=null);for(var t=0,a=this.__entries__;t<a.length;t++){var o=a[t];r.call(i,o[1],o[0])}},e}()}(),Ke=typeof window<"u"&&typeof document<"u"&&window.document===document,fe=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),di=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(fe):function(n){return setTimeout(function(){return n(Date.now())},1e3/60)}}(),fi=2;function pi(n,e){var r=!1,i=!1,t=0;function a(){r&&(r=!1,n()),i&&s()}function o(){di(a)}function s(){var l=Date.now();if(r){if(l-t<fi)return;i=!0}else r=!0,i=!1,setTimeout(o,e);t=l}return s}var hi=20,vi=["top","right","bottom","left","width","height","size","weight"],gi=typeof MutationObserver<"u",mi=function(){function n(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=pi(this.refresh.bind(this),hi)}return n.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},n.prototype.removeObserver=function(e){var r=this.observers_,i=r.indexOf(e);~i&&r.splice(i,1),!r.length&&this.connected_&&this.disconnect_()},n.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},n.prototype.updateObservers_=function(){var e=this.observers_.filter(function(r){return r.gatherActive(),r.hasActive()});return e.forEach(function(r){return r.broadcastActive()}),e.length>0},n.prototype.connect_=function(){!Ke||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),gi?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},n.prototype.disconnect_=function(){!Ke||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},n.prototype.onTransitionEnd_=function(e){var r=e.propertyName,i=r===void 0?"":r,t=vi.some(function(a){return!!~i.indexOf(a)});t&&this.refresh()},n.getInstance=function(){return this.instance_||(this.instance_=new n),this.instance_},n.instance_=null,n}(),rn=function(n,e){for(var r=0,i=Object.keys(e);r<i.length;r++){var t=i[r];Object.defineProperty(n,t,{value:e[t],enumerable:!1,writable:!1,configurable:!0})}return n},V=function(n){var e=n&&n.ownerDocument&&n.ownerDocument.defaultView;return e||fe},on=Se(0,0,0,0);function pe(n){return parseFloat(n)||0}function kt(n){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e.reduce(function(i,t){var a=n["border-"+t+"-width"];return i+pe(a)},0)}function yi(n){for(var e=["top","right","bottom","left"],r={},i=0,t=e;i<t.length;i++){var a=t[i],o=n["padding-"+a];r[a]=pe(o)}return r}function bi(n){var e=n.getBBox();return Se(0,0,e.width,e.height)}function wi(n){var e=n.clientWidth,r=n.clientHeight;if(!e&&!r)return on;var i=V(n).getComputedStyle(n),t=yi(i),a=t.left+t.right,o=t.top+t.bottom,s=pe(i.width),l=pe(i.height);if(i.boxSizing==="border-box"&&(Math.round(s+a)!==e&&(s-=kt(i,"left","right")+a),Math.round(l+o)!==r&&(l-=kt(i,"top","bottom")+o)),!Si(n)){var c=Math.round(s+a)-e,f=Math.round(l+o)-r;Math.abs(c)!==1&&(s-=c),Math.abs(f)!==1&&(l-=f)}return Se(t.left,t.top,s,l)}var xi=function(){return typeof SVGGraphicsElement<"u"?function(n){return n instanceof V(n).SVGGraphicsElement}:function(n){return n instanceof V(n).SVGElement&&typeof n.getBBox=="function"}}();function Si(n){return n===V(n).document.documentElement}function Oi(n){return Ke?xi(n)?bi(n):wi(n):on}function ki(n){var e=n.x,r=n.y,i=n.width,t=n.height,a=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(a.prototype);return rn(o,{x:e,y:r,width:i,height:t,top:r,right:e+i,bottom:t+r,left:e}),o}function Se(n,e,r,i){return{x:n,y:e,width:r,height:i}}var Ti=function(){function n(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Se(0,0,0,0),this.target=e}return n.prototype.isActive=function(){var e=Oi(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},n.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},n}(),_i=function(){function n(e,r){var i=ki(r);rn(this,{target:e,contentRect:i})}return n}(),Pi=function(){function n(e,r,i){if(this.activeObservations_=[],this.observations_=new nn,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=r,this.callbackCtx_=i}return n.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof V(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(e)||(r.set(e,new Ti(e)),this.controller_.addObserver(this),this.controller_.refresh())}},n.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof V(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(e)&&(r.delete(e),r.size||this.controller_.removeObserver(this))}},n.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},n.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(r){r.isActive()&&e.activeObservations_.push(r)})},n.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,r=this.activeObservations_.map(function(i){return new _i(i.target,i.broadcastRect())});this.callback_.call(e,r,e),this.clearActive()}},n.prototype.clearActive=function(){this.activeObservations_.splice(0)},n.prototype.hasActive=function(){return this.activeObservations_.length>0},n}(),an=typeof WeakMap<"u"?new WeakMap:new nn,sn=function(){function n(e){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=mi.getInstance(),i=new Pi(e,r,this);an.set(this,i)}return n}();["observe","unobserve","disconnect"].forEach(function(n){sn.prototype[n]=function(){var e;return(e=an.get(this))[n].apply(e,arguments)}});var Di=function(){return typeof fe.ResizeObserver<"u"?fe.ResizeObserver:sn}();const Ci=Object.freeze(Object.defineProperty({__proto__:null,default:Di},Symbol.toStringTag,{value:"Module"})),Ei=dn(Ci);Object.defineProperty(ye,"__esModule",{value:!0});ye.InnerSlider=void 0;var W=re(I),Mi=re(It),Li=re(Or),ji=re(me),H=d,Ri=we,Ai=xe,Tt=J,zi=re(Ei);function re(n){return n&&n.__esModule?n:{default:n}}function he(n){"@babel/helpers - typeof";return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},he(n)}function ve(){return ve=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},ve.apply(this,arguments)}function Hi(n,e){if(n==null)return{};var r=Ii(n,e),i,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)i=a[t],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}function Ii(n,e){if(n==null)return{};var r={},i=Object.keys(n),t,a;for(a=0;a<i.length;a++)t=i[a],!(e.indexOf(t)>=0)&&(r[t]=n[t]);return r}function _t(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,i)}return r}function b(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?_t(Object(r),!0).forEach(function(i){L(n,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):_t(Object(r)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(r,i))})}return n}function Fi(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Pt(n,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Wi(n,e,r){return e&&Pt(n.prototype,e),r&&Pt(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function Ni(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Je(n,e)}function Je(n,e){return Je=Object.setPrototypeOf||function(i,t){return i.__proto__=t,i},Je(n,e)}function Gi(n){var e=qi();return function(){var i=ge(n),t;if(e){var a=ge(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return Bi(this,t)}}function Bi(n,e){if(e&&(he(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return M(n)}function M(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function qi(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ge(n){return ge=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},ge(n)}function L(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var $i=function(n){Ni(r,n);var e=Gi(r);function r(i){var t;Fi(this,r),t=e.call(this,i),L(M(t),"listRefHandler",function(o){return t.list=o}),L(M(t),"trackRefHandler",function(o){return t.track=o}),L(M(t),"adaptHeight",function(){if(t.props.adaptiveHeight&&t.list){var o=t.list.querySelector('[data-index="'.concat(t.state.currentSlide,'"]'));t.list.style.height=(0,H.getHeight)(o)+"px"}}),L(M(t),"componentDidMount",function(){if(t.props.onInit&&t.props.onInit(),t.props.lazyLoad){var o=(0,H.getOnDemandLazySlides)(b(b({},t.props),t.state));o.length>0&&(t.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(o)}}),t.props.onLazyLoad&&t.props.onLazyLoad(o))}var s=b({listRef:t.list,trackRef:t.track},t.props);t.updateState(s,!0,function(){t.adaptHeight(),t.props.autoplay&&t.autoPlay("update")}),t.props.lazyLoad==="progressive"&&(t.lazyLoadTimer=setInterval(t.progressiveLazyLoad,1e3)),t.ro=new zi.default(function(){t.state.animating?(t.onWindowResized(!1),t.callbackTimers.push(setTimeout(function(){return t.onWindowResized()},t.props.speed))):t.onWindowResized()}),t.ro.observe(t.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=t.props.pauseOnFocus?t.onSlideFocus:null,l.onblur=t.props.pauseOnFocus?t.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",t.onWindowResized):window.attachEvent("onresize",t.onWindowResized)}),L(M(t),"componentWillUnmount",function(){t.animationEndCallback&&clearTimeout(t.animationEndCallback),t.lazyLoadTimer&&clearInterval(t.lazyLoadTimer),t.callbackTimers.length&&(t.callbackTimers.forEach(function(o){return clearTimeout(o)}),t.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",t.onWindowResized):window.detachEvent("onresize",t.onWindowResized),t.autoplayTimer&&clearInterval(t.autoplayTimer),t.ro.disconnect()}),L(M(t),"componentDidUpdate",function(o){if(t.checkImagesLoad(),t.props.onReInit&&t.props.onReInit(),t.props.lazyLoad){var s=(0,H.getOnDemandLazySlides)(b(b({},t.props),t.state));s.length>0&&(t.setState(function(f){return{lazyLoadedList:f.lazyLoadedList.concat(s)}}),t.props.onLazyLoad&&t.props.onLazyLoad(s))}t.adaptHeight();var l=b(b({listRef:t.list,trackRef:t.track},t.props),t.state),c=t.didPropsChange(o);c&&t.updateState(l,c,function(){t.state.currentSlide>=W.default.Children.count(t.props.children)&&t.changeSlide({message:"index",index:W.default.Children.count(t.props.children)-t.props.slidesToShow,currentSlide:t.state.currentSlide}),t.props.autoplay?t.autoPlay("update"):t.pause("paused")})}),L(M(t),"onWindowResized",function(o){t.debouncedResize&&t.debouncedResize.cancel(),t.debouncedResize=(0,Li.default)(function(){return t.resizeWindow(o)},50),t.debouncedResize()}),L(M(t),"resizeWindow",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,s=!!(t.track&&t.track.node);if(s){var l=b(b({listRef:t.list,trackRef:t.track},t.props),t.state);t.updateState(l,o,function(){t.props.autoplay?t.autoPlay("update"):t.pause("paused")}),t.setState({animating:!1}),clearTimeout(t.animationEndCallback),delete t.animationEndCallback}}),L(M(t),"updateState",function(o,s,l){var c=(0,H.initializedState)(o);o=b(b(b({},o),c),{},{slideIndex:c.currentSlide});var f=(0,H.getTrackLeft)(o);o=b(b({},o),{},{left:f});var u=(0,H.getTrackCSS)(o);(s||W.default.Children.count(t.props.children)!==W.default.Children.count(o.children))&&(c.trackStyle=u),t.setState(c,l)}),L(M(t),"ssrInit",function(){if(t.props.variableWidth){var o=0,s=0,l=[],c=(0,H.getPreClones)(b(b(b({},t.props),t.state),{},{slideCount:t.props.children.length})),f=(0,H.getPostClones)(b(b(b({},t.props),t.state),{},{slideCount:t.props.children.length}));t.props.children.forEach(function(z){l.push(z.props.style.width),o+=z.props.style.width});for(var u=0;u<c;u++)s+=l[l.length-1-u],o+=l[l.length-1-u];for(var w=0;w<f;w++)o+=l[w];for(var j=0;j<t.state.currentSlide;j++)s+=l[j];var k={width:o+"px",left:-s+"px"};if(t.props.centerMode){var g="".concat(l[t.state.currentSlide],"px");k.left="calc(".concat(k.left," + (100% - ").concat(g,") / 2 ) ")}return{trackStyle:k}}var y=W.default.Children.count(t.props.children),T=b(b(b({},t.props),t.state),{},{slideCount:y}),p=(0,H.getPreClones)(T)+(0,H.getPostClones)(T)+y,O=100/t.props.slidesToShow*p,C=100/p,E=-C*((0,H.getPreClones)(T)+t.state.currentSlide)*O/100;t.props.centerMode&&(E+=(100-C*O/100)/2);var _={width:O+"%",left:E+"%"};return{slideWidth:C+"%",trackStyle:_}}),L(M(t),"checkImagesLoad",function(){var o=t.list&&t.list.querySelectorAll&&t.list.querySelectorAll(".slick-slide img")||[],s=o.length,l=0;Array.prototype.forEach.call(o,function(c){var f=function(){return++l&&l>=s&&t.onWindowResized()};if(!c.onclick)c.onclick=function(){return c.parentNode.focus()};else{var u=c.onclick;c.onclick=function(){u(),c.parentNode.focus()}}c.onload||(t.props.lazyLoad?c.onload=function(){t.adaptHeight(),t.callbackTimers.push(setTimeout(t.onWindowResized,t.props.speed))}:(c.onload=f,c.onerror=function(){f(),t.props.onLazyLoadError&&t.props.onLazyLoadError()}))})}),L(M(t),"progressiveLazyLoad",function(){for(var o=[],s=b(b({},t.props),t.state),l=t.state.currentSlide;l<t.state.slideCount+(0,H.getPostClones)(s);l++)if(t.state.lazyLoadedList.indexOf(l)<0){o.push(l);break}for(var c=t.state.currentSlide-1;c>=-(0,H.getPreClones)(s);c--)if(t.state.lazyLoadedList.indexOf(c)<0){o.push(c);break}o.length>0?(t.setState(function(f){return{lazyLoadedList:f.lazyLoadedList.concat(o)}}),t.props.onLazyLoad&&t.props.onLazyLoad(o)):t.lazyLoadTimer&&(clearInterval(t.lazyLoadTimer),delete t.lazyLoadTimer)}),L(M(t),"slideHandler",function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=t.props,c=l.asNavFor,f=l.beforeChange,u=l.onLazyLoad,w=l.speed,j=l.afterChange,k=t.state.currentSlide,g=(0,H.slideHandler)(b(b(b({index:o},t.props),t.state),{},{trackRef:t.track,useCSS:t.props.useCSS&&!s})),y=g.state,T=g.nextState;if(y){f&&f(k,y.currentSlide);var p=y.lazyLoadedList.filter(function(O){return t.state.lazyLoadedList.indexOf(O)<0});u&&p.length>0&&u(p),!t.props.waitForAnimate&&t.animationEndCallback&&(clearTimeout(t.animationEndCallback),j&&j(k),delete t.animationEndCallback),t.setState(y,function(){c&&t.asNavForIndex!==o&&(t.asNavForIndex=o,c.innerSlider.slideHandler(o)),T&&(t.animationEndCallback=setTimeout(function(){var O=T.animating,C=Hi(T,["animating"]);t.setState(C,function(){t.callbackTimers.push(setTimeout(function(){return t.setState({animating:O})},10)),j&&j(y.currentSlide),delete t.animationEndCallback})},w))})}}),L(M(t),"changeSlide",function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=b(b({},t.props),t.state),c=(0,H.changeSlide)(l,o);if(!(c!==0&&!c)&&(s===!0?t.slideHandler(c,s):t.slideHandler(c),t.props.autoplay&&t.autoPlay("update"),t.props.focusOnSelect)){var f=t.list.querySelectorAll(".slick-current");f[0]&&f[0].focus()}}),L(M(t),"clickHandler",function(o){t.clickable===!1&&(o.stopPropagation(),o.preventDefault()),t.clickable=!0}),L(M(t),"keyHandler",function(o){var s=(0,H.keyHandler)(o,t.props.accessibility,t.props.rtl);s!==""&&t.changeSlide({message:s})}),L(M(t),"selectHandler",function(o){t.changeSlide(o)}),L(M(t),"disableBodyScroll",function(){var o=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=o}),L(M(t),"enableBodyScroll",function(){window.ontouchmove=null}),L(M(t),"swipeStart",function(o){t.props.verticalSwiping&&t.disableBodyScroll();var s=(0,H.swipeStart)(o,t.props.swipe,t.props.draggable);s!==""&&t.setState(s)}),L(M(t),"swipeMove",function(o){var s=(0,H.swipeMove)(o,b(b(b({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));s&&(s.swiping&&(t.clickable=!1),t.setState(s))}),L(M(t),"swipeEnd",function(o){var s=(0,H.swipeEnd)(o,b(b(b({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));if(s){var l=s.triggerSlideHandler;delete s.triggerSlideHandler,t.setState(s),l!==void 0&&(t.slideHandler(l),t.props.verticalSwiping&&t.enableBodyScroll())}}),L(M(t),"touchEnd",function(o){t.swipeEnd(o),t.clickable=!0}),L(M(t),"slickPrev",function(){t.callbackTimers.push(setTimeout(function(){return t.changeSlide({message:"previous"})},0))}),L(M(t),"slickNext",function(){t.callbackTimers.push(setTimeout(function(){return t.changeSlide({message:"next"})},0))}),L(M(t),"slickGoTo",function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o=Number(o),isNaN(o))return"";t.callbackTimers.push(setTimeout(function(){return t.changeSlide({message:"index",index:o,currentSlide:t.state.currentSlide},s)},0))}),L(M(t),"play",function(){var o;if(t.props.rtl)o=t.state.currentSlide-t.props.slidesToScroll;else if((0,H.canGoNext)(b(b({},t.props),t.state)))o=t.state.currentSlide+t.props.slidesToScroll;else return!1;t.slideHandler(o)}),L(M(t),"autoPlay",function(o){t.autoplayTimer&&clearInterval(t.autoplayTimer);var s=t.state.autoplaying;if(o==="update"){if(s==="hovered"||s==="focused"||s==="paused")return}else if(o==="leave"){if(s==="paused"||s==="focused")return}else if(o==="blur"&&(s==="paused"||s==="hovered"))return;t.autoplayTimer=setInterval(t.play,t.props.autoplaySpeed+50),t.setState({autoplaying:"playing"})}),L(M(t),"pause",function(o){t.autoplayTimer&&(clearInterval(t.autoplayTimer),t.autoplayTimer=null);var s=t.state.autoplaying;o==="paused"?t.setState({autoplaying:"paused"}):o==="focused"?(s==="hovered"||s==="playing")&&t.setState({autoplaying:"focused"}):s==="playing"&&t.setState({autoplaying:"hovered"})}),L(M(t),"onDotsOver",function(){return t.props.autoplay&&t.pause("hovered")}),L(M(t),"onDotsLeave",function(){return t.props.autoplay&&t.state.autoplaying==="hovered"&&t.autoPlay("leave")}),L(M(t),"onTrackOver",function(){return t.props.autoplay&&t.pause("hovered")}),L(M(t),"onTrackLeave",function(){return t.props.autoplay&&t.state.autoplaying==="hovered"&&t.autoPlay("leave")}),L(M(t),"onSlideFocus",function(){return t.props.autoplay&&t.pause("focused")}),L(M(t),"onSlideBlur",function(){return t.props.autoplay&&t.state.autoplaying==="focused"&&t.autoPlay("blur")}),L(M(t),"render",function(){var o=(0,ji.default)("slick-slider",t.props.className,{"slick-vertical":t.props.vertical,"slick-initialized":!0}),s=b(b({},t.props),t.state),l=(0,H.extractObject)(s,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),c=t.props.pauseOnHover;l=b(b({},l),{},{onMouseEnter:c?t.onTrackOver:null,onMouseLeave:c?t.onTrackLeave:null,onMouseOver:c?t.onTrackOver:null,focusOnSelect:t.props.focusOnSelect&&t.clickable?t.selectHandler:null});var f;if(t.props.dots===!0&&t.state.slideCount>=t.props.slidesToShow){var u=(0,H.extractObject)(s,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),w=t.props.pauseOnDotsHover;u=b(b({},u),{},{clickHandler:t.changeSlide,onMouseEnter:w?t.onDotsLeave:null,onMouseOver:w?t.onDotsOver:null,onMouseLeave:w?t.onDotsLeave:null}),f=W.default.createElement(Ai.Dots,u)}var j,k,g=(0,H.extractObject)(s,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);g.clickHandler=t.changeSlide,t.props.arrows&&(j=W.default.createElement(Tt.PrevArrow,g),k=W.default.createElement(Tt.NextArrow,g));var y=null;t.props.vertical&&(y={height:t.state.listHeight});var T=null;t.props.vertical===!1?t.props.centerMode===!0&&(T={padding:"0px "+t.props.centerPadding}):t.props.centerMode===!0&&(T={padding:t.props.centerPadding+" 0px"});var p=b(b({},y),T),O=t.props.touchMove,C={className:"slick-list",style:p,onClick:t.clickHandler,onMouseDown:O?t.swipeStart:null,onMouseMove:t.state.dragging&&O?t.swipeMove:null,onMouseUp:O?t.swipeEnd:null,onMouseLeave:t.state.dragging&&O?t.swipeEnd:null,onTouchStart:O?t.swipeStart:null,onTouchMove:t.state.dragging&&O?t.swipeMove:null,onTouchEnd:O?t.touchEnd:null,onTouchCancel:t.state.dragging&&O?t.swipeEnd:null,onKeyDown:t.props.accessibility?t.keyHandler:null},E={className:o,dir:"ltr",style:t.props.style};return t.props.unslick&&(C={className:"slick-list"},E={className:o}),W.default.createElement("div",E,t.props.unslick?"":j,W.default.createElement("div",ve({ref:t.listRefHandler},C),W.default.createElement(Ri.Track,ve({ref:t.trackRefHandler},l),t.props.children)),t.props.unslick?"":k,t.props.unslick?"":f)}),t.list=null,t.track=null,t.state=b(b({},Mi.default),{},{currentSlide:t.props.initialSlide,slideCount:W.default.Children.count(t.props.children)}),t.callbackTimers=[],t.clickable=!0,t.debouncedResize=null;var a=t.ssrInit();return t.state=b(b({},t.state),a),t}return Wi(r,[{key:"didPropsChange",value:function(t){for(var a=!1,o=0,s=Object.keys(this.props);o<s.length;o++){var l=s[o];if(!t.hasOwnProperty(l)){a=!0;break}if(!(he(t[l])==="object"||typeof t[l]=="function")&&t[l]!==this.props[l]){a=!0;break}}return a||W.default.Children.count(this.props.children)!==W.default.Children.count(t.children)}}]),r}(W.default.Component);ye.InnerSlider=$i;var Xi=function(n){return n.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},Ui=Xi,Qi=Ui,Yi=function(n){var e=/[height|width]$/;return e.test(n)},Dt=function(n){var e="",r=Object.keys(n);return r.forEach(function(i,t){var a=n[i];i=Qi(i),Yi(i)&&typeof a=="number"&&(a=a+"px"),a===!0?e+=i:a===!1?e+="not "+i:e+="("+i+": "+a+")",t<r.length-1&&(e+=" and ")}),e},Ki=function(n){var e="";return typeof n=="string"?n:n instanceof Array?(n.forEach(function(r,i){e+=Dt(r),i<n.length-1&&(e+=", ")}),e):Dt(n)},Ji=Ki,ln={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=r(I);function r(a){return a&&a.__esModule?a:{default:a}}var i={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(o){return e.default.createElement("ul",{style:{display:"block"}},o)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(o){return e.default.createElement("button",null,o+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},t=i;n.default=t})(ln);var je,Ct;function Vi(){if(Ct)return je;Ct=1;function n(e){this.options=e,!e.deferSetup&&this.setup()}return n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},je=n,je}var Re,Et;function cn(){if(Et)return Re;Et=1;function n(i,t){var a=0,o=i.length,s;for(a;a<o&&(s=t(i[a],a),s!==!1);a++);}function e(i){return Object.prototype.toString.apply(i)==="[object Array]"}function r(i){return typeof i=="function"}return Re={isFunction:r,isArray:e,each:n},Re}var Ae,Mt;function Zi(){if(Mt)return Ae;Mt=1;var n=Vi(),e=cn().each;function r(i,t){this.query=i,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(i);var a=this;this.listener=function(o){a.mql=o.currentTarget||o,a.assess()},this.mql.addListener(this.listener)}return r.prototype={constuctor:r,addHandler:function(i){var t=new n(i);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(i){var t=this.handlers;e(t,function(a,o){if(a.equals(i))return a.destroy(),!t.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(i){i.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var i=this.matches()?"on":"off";e(this.handlers,function(t){t[i]()})}},Ae=r,Ae}var ze,Lt;function eo(){if(Lt)return ze;Lt=1;var n=Zi(),e=cn(),r=e.each,i=e.isFunction,t=e.isArray;function a(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return a.prototype={constructor:a,register:function(o,s,l){var c=this.queries,f=l&&this.browserIsIncapable;return c[o]||(c[o]=new n(o,f)),i(s)&&(s={match:s}),t(s)||(s=[s]),r(s,function(u){i(u)&&(u={match:u}),c[o].addHandler(u)}),this},unregister:function(o,s){var l=this.queries[o];return l&&(s?l.removeHandler(s):(l.clear(),delete this.queries[o])),this}},ze=a,ze}var He,jt;function to(){if(jt)return He;jt=1;var n=eo();return He=new n,He}(function(n){function e(h){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},e(h)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=s(I),i=ye,t=s(Ji),a=s(ln),o=d;function s(h){return h&&h.__esModule?h:{default:h}}function l(){return l=Object.assign||function(h){for(var m=1;m<arguments.length;m++){var P=arguments[m];for(var R in P)Object.prototype.hasOwnProperty.call(P,R)&&(h[R]=P[R])}return h},l.apply(this,arguments)}function c(h,m){var P=Object.keys(h);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(h);m&&(R=R.filter(function(S){return Object.getOwnPropertyDescriptor(h,S).enumerable})),P.push.apply(P,R)}return P}function f(h){for(var m=1;m<arguments.length;m++){var P=arguments[m]!=null?arguments[m]:{};m%2?c(Object(P),!0).forEach(function(R){E(h,R,P[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(P)):c(Object(P)).forEach(function(R){Object.defineProperty(h,R,Object.getOwnPropertyDescriptor(P,R))})}return h}function u(h,m){if(!(h instanceof m))throw new TypeError("Cannot call a class as a function")}function w(h,m){for(var P=0;P<m.length;P++){var R=m[P];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(h,R.key,R)}}function j(h,m,P){return m&&w(h.prototype,m),P&&w(h,P),Object.defineProperty(h,"prototype",{writable:!1}),h}function k(h,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function");h.prototype=Object.create(m&&m.prototype,{constructor:{value:h,writable:!0,configurable:!0}}),Object.defineProperty(h,"prototype",{writable:!1}),m&&g(h,m)}function g(h,m){return g=Object.setPrototypeOf||function(R,S){return R.__proto__=S,R},g(h,m)}function y(h){var m=O();return function(){var R=C(h),S;if(m){var x=C(this).constructor;S=Reflect.construct(R,arguments,x)}else S=R.apply(this,arguments);return T(this,S)}}function T(h,m){if(m&&(e(m)==="object"||typeof m=="function"))return m;if(m!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(h)}function p(h){if(h===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h}function O(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function C(h){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(P){return P.__proto__||Object.getPrototypeOf(P)},C(h)}function E(h,m,P){return m in h?Object.defineProperty(h,m,{value:P,enumerable:!0,configurable:!0,writable:!0}):h[m]=P,h}var _=(0,o.canUseDOM)()&&to(),z=function(h){k(P,h);var m=y(P);function P(R){var S;return u(this,P),S=m.call(this,R),E(p(S),"innerSliderRefHandler",function(x){return S.innerSlider=x}),E(p(S),"slickPrev",function(){return S.innerSlider.slickPrev()}),E(p(S),"slickNext",function(){return S.innerSlider.slickNext()}),E(p(S),"slickGoTo",function(x){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return S.innerSlider.slickGoTo(x,$)}),E(p(S),"slickPause",function(){return S.innerSlider.pause("paused")}),E(p(S),"slickPlay",function(){return S.innerSlider.autoPlay("play")}),S.state={breakpoint:null},S._responsiveMediaHandlers=[],S}return j(P,[{key:"media",value:function(S,x){_.register(S,x),this._responsiveMediaHandlers.push({query:S,handler:x})}},{key:"componentDidMount",value:function(){var S=this;if(this.props.responsive){var x=this.props.responsive.map(function(F){return F.breakpoint});x.sort(function(F,G){return F-G}),x.forEach(function(F,G){var Q;G===0?Q=(0,t.default)({minWidth:0,maxWidth:F}):Q=(0,t.default)({minWidth:x[G-1]+1,maxWidth:F}),(0,o.canUseDOM)()&&S.media(Q,function(){S.setState({breakpoint:F})})});var $=(0,t.default)({minWidth:x.slice(-1)[0]});(0,o.canUseDOM)()&&this.media($,function(){S.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(S){_.unregister(S.query,S.handler)})}},{key:"render",value:function(){var S=this,x,$;this.state.breakpoint?($=this.props.responsive.filter(function(Z){return Z.breakpoint===S.state.breakpoint}),x=$[0].settings==="unslick"?"unslick":f(f(f({},a.default),this.props),$[0].settings)):x=f(f({},a.default),this.props),x.centerMode&&(x.slidesToScroll>1,x.slidesToScroll=1),x.fade&&(x.slidesToShow>1,x.slidesToScroll>1,x.slidesToShow=1,x.slidesToScroll=1);var F=r.default.Children.toArray(this.props.children);F=F.filter(function(Z){return typeof Z=="string"?!!Z.trim():!!Z}),x.variableWidth&&(x.rows>1||x.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),x.variableWidth=!1);for(var G=[],Q=null,B=0;B<F.length;B+=x.rows*x.slidesPerRow){for(var Oe=[],Y=B;Y<B+x.rows*x.slidesPerRow;Y+=x.slidesPerRow){for(var ot=[],X=Y;X<Y+x.slidesPerRow&&(x.variableWidth&&F[X].props.style&&(Q=F[X].props.style.width),!(X>=F.length));X+=1)ot.push(r.default.cloneElement(F[X],{key:100*B+10*Y+X,tabIndex:-1,style:{width:"".concat(100/x.slidesPerRow,"%"),display:"inline-block"}}));Oe.push(r.default.createElement("div",{key:10*B+Y},ot))}x.variableWidth?G.push(r.default.createElement("div",{key:B,style:{width:Q}},Oe)):G.push(r.default.createElement("div",{key:B},Oe))}if(x==="unslick"){var un="regular slider "+(this.props.className||"");return r.default.createElement("div",{className:un},F)}else G.length<=x.slidesToShow&&(x.unslick=!0);return r.default.createElement(i.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},x),G)}}]),P}(r.default.Component);n.default=z})(Ht);(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=r(Ht);function r(t){return t&&t.__esModule?t:{default:t}}var i=e.default;n.default=i})(zt);const no=fn(zt),ro=D(vn)`
`,io=D(no)`
margin-left: auto;
margin-right: auto;
@media screen and (max-width: 767px) {
    max-width: 335px;
      }
      @media screen and (min-width: 768px) and (max-width: 1399px) {
        max-width: 580px;
      }
      @media screen and (min-width: 1440px) {
        max-width: 1208px;
        display: flex;
        column-gap: 24px;
      }
`,oo=D.div`
border-radius: 8px;
border: 1px solid #1111111A;
padding: 32px 32px 32px 50px;
max-height: 252px;
@media screen and (max-width: 767px) {
    padding: 24px;
    max-width: 335px;
      }
      @media screen and (min-width: 768px) and (max-width: 1399px) {
        max-width: 580px;
        height: 187px;
      }
      @media screen and (min-width: 1440px) {
        max-width: 580px;
        height: 187px;
      }

`,ao=D.h3`
font-family: inherit sans-serif;
text-align: center;
font-weight: 700;
font-size: 40px;
line-height: 44px;
margin-bottom: 50px;
color: #3E85F3;

@media screen and (max-width: 767px) {
    font-size: 28px;
line-height: 32px;
margin-bottom: 40px;
margin: 12px;
} 
`,so=D.div`

`,lo=D.div`

`,co=D.div`
display: flex;
column-gap: 18px;
`,uo=D.h3`
font-family: inherit sans-serif;
font-weight: 700;
font-size: 18px;
line-height: 18px;
margin-bottom: 13px;
color: #343434;
`,fo=D.img`
width: 50px;
height: 50px;
border-radius: 50px;
`,po=D.div`
margin-bottom: 24px;
`,ho=D.p`
font-family: inherit sans-serif;
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #111111B2;
text-align: start;
overflow: auto;
height: 54px;
@media screen and (max-width: 767px) {
  height: 72px;
} 
`,vo=D.div`
display: flex;
justify-content: center;
margin-top: 8px;


      @media screen and (min-width: 768px) and (max-width: 1399px) {
        margin-top: 18px;
      }
      @media screen and (min-width: 1440px) {
        margin-left: -22px;
        margin-top: 32px;
      }
`,go=D.button`
all: initial;
cursor: pointer;
width: 61px;
height: 61px;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 767px) {
    width: 50px;
    height: 50px;
      }
`,mo=D.button`
all: initial;
cursor: pointer;
width: 61px;
height: 61px;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 767px) {
    width: 50px;
    height: 50px;
      }
`,Rt=D.h3`
font-family: inherit sans-serif;
text-align: center;
font-weight: 700;
font-size: 32px;
line-height: 20px;
margin-bottom: 50px;
color: #111111B2;

@media screen and (max-width: 767px) {
    font-size: 18px;
line-height: 16px;
margin-bottom: 40px;
margin: 12px;
} 
`,yo="/GooseTrack-with-backend-3.0/assets/arrowRight-56a99235.svg",bo="/GooseTrack-with-backend-3.0/assets/arrowLeft-8dc03b2d.svg";async function wo(){try{const n=await pn.get("https://project-backend-8dts.onrender.com/reviews");return n==null?void 0:n.data}catch{return"error"}}const xo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAQMAAADOtka5AAAABlBMVEXQ0NCxsbGd3OvkAAAE2klEQVR42u2csXLbMAyGxfByHDqoHXpdesfX6Ma+ROc+Cv04vevaB+CjaM6kobnToIpVLMsmacoBCMeWHfxbYvMTSIAkCCqpKhaLxWKxWCwWi8VisVgsFovFYrFYrHPqi38mtX/03rcUgBkBA6G98C9y5YB6C+jKAXYL8OWAqb3flLZXO0CxH/QO0FGc+KKe5ETCKB4AG9oYev/0hzSGxY4wAWAgxKEvnRAibF8SCzICeIoTCgF1DHAkLxY50njiKNoYMJSuJsWjKFLAhgpoaGFwBkBLiyO8H8kAkwKGSwOsJ0YSGXDUHhmK4hjgqIDmsgBJBahjQHt1QEebSxcH6GNATwUMl7XAUC3IADxxOViBBRcGZNrj1jQG5NZU5LpOBYjbB8h1WtCwBSgLJFvAAAYsz0YeA7bgTixwPAYrGAO24N1ZcAeJ5r3myrcViffaBbYAZ4FapwUMwAHqHKC9KQvIAH37FmQB3SUBZp0AzAWDvX1Arj3qhiILQNwPCKoF4m0sQFTnJRWg3gjgaAsSZlkmA3Qe0NJmMwZg84COCuiJgQifDGTAQhzBQ5EM0EuAhhYGYMDSGIIDQS4CetJUgi9qyxYA3XAC0FB2hbMAHDEOfHUhgCLGwTKgJa4H8GXZeuLuaogr0tIgwJd18u6cH4R/1HQfc+R5zA0hogdV9fP872Q9VTh9SNr/rbD6HPX/V4XXw+9i84+ioaEC3NUt4C5wF9bRBTKgLQTQ/nyheqiCbf17AeCrCADfCgC9DHZVg2+v2hBQ42NJt8EevanxL/97FwIk+t196V2wwzqJDibtN8G5wwn0e+tjQqTD3AT70rcaRz4CWOSc1mPw2PCoYpB98McAj/PB2MaGCZ7GTWo9jVsYirhq3vjwJkp4t6kjLsHJAOBZVj0Fn49CEVuA2ET5rhOoXHlvdJDjYbJ1tQTAHL6H+Aw/RUWPGII+BSD+WFJOLXR8VNDwhP/DBFAZQAOOgrFF7Mbptx14CEaAiA8rNfzgOO+n8XFLgU89as4pTASQ4FSjnh9louKJAFdRzAyoowMfHGDnQ6qK6wbQw6vYf1GUAeT+lCviQ7MFZjv1oVJgo7qBwQNMBtABndBH59c2+QDghDYCNIefBlggT5bKKNXVMDfI4JkiqlwoWN4cAvZuwABUBtAff/Jq5cCFtdE2tO213UWH1Q4VthGwquYO8LzNSA7dHh//AwawYcFB7M1R4FqQjVL0vRN0AaCff+qj0tQACsT5mzoiQUJRxJWzOlrPIOUoGX9T7ZwgwGVREdd9xK5FXWTBbHpS2XJgQDcN3pDUBxtwIbCf3NAlxbkGXoU7AHwZYHJDkxTGWjhgmkQuqXB28NuRZjp4JFgEoJsBBg4waSHb9GmFFAHYTqfUCa9sLSYtRKvUCSiAmwAKAbBpGVVs0hrvgAC0ObMwgC5bpkZcrwwnfgm7n8leN2AAm1ytHwNocoV2NEAjACJ3P2gR1wwidyniiQBBAcQbMwAgM7dzNebGLvdvEzTJgi5zYeOQAE8CDJmLNxTAZ269GuDWuHtcTbTAaaIFrSUCOioAeed2fUANAbSrtoABJ15hgSZJ17fgRgA9OMsrsMBcxIJ1AywEMDDgJMCDtGrAJ4g+ViwWi8VisVgsFovFYrFYLBaLxWKx3rX+A1mjeLSdN7XXAAAAAElFTkSuQmCC";const So={infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,initialSlide:0,responsive:[{breakpoint:1440,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]},Oo=()=>{const[n,e]=I.useState([]);I.useEffect(()=>{(async()=>{const a=await wo();e(a)})()},[]);const r=I.useRef(null),i=()=>{r.current&&r.current.slickNext()},t=()=>{r.current&&r.current.slickPrev()};return v.jsxs(v.Fragment,{children:[v.jsx(ao,{children:"Reviews"}),v.jsx(so,{children:v.jsx(io,{ref:r,...So,children:n?n.length>0&&n!=="error"?n.map(a=>v.jsxs(oo,{children:[v.jsxs(co,{children:[v.jsx(fo,{src:a.owner.avatarURL.length===0?xo:a.owner.avatarURL,alt:"user avatar"}),v.jsxs(lo,{children:[v.jsx(uo,{children:a.owner.userName}),v.jsx(po,{children:v.jsx(ro,{name:"hover-feedback",value:a.rating,readOnly:!0})})]})]}),v.jsx(ho,{children:a.text})]},a._id)):n==="error"?v.jsx(Rt,{children:"Something was wrong, reload this page"}):v.jsx(Rt,{children:"We don't have any reviews yet."}):v.jsx("h3",{children:"Loading..."})})}),n.length>0&&n!=="error"&&v.jsxs(vo,{children:[v.jsx(go,{onClick:t,children:v.jsx("img",{src:bo,alt:"arrowLeft"})}),v.jsx(mo,{onClick:i,children:v.jsx("img",{src:yo,alt:"arrowRight"})})]})]})},ko=D.div`
margin-top: 24px;
height: 74px;
background-color: #DCEBF7;
display: flex;
justify-content: center;
text-align: center;
@media screen and (max-width: 767px) {
    height: 54px;
    margin-top: 16px;
      }
      @media screen and (min-width: 768px) and (max-width: 1399px) {
 
      }
      @media screen and (min-width: 1440px) {

      }
`,To=D.h3`
margin-top: auto;
margin-bottom: auto;
font-family: inherit sans-serif;
text-align: center;
font-weight: 700;
font-size: 30px;
line-height: 32px;
color:  #3E85F3;
@media screen and (max-width: 590px) {
font-size: 16px;
line-height: 22px;
} 

@media screen and (min-width: 591px) and (max-width:  767px) {
    font-size: 24px;
line-height: 28px;
} 
`,_o=D.span`
font-family: inherit sans-serif;
font-style: italic;
text-align: center;
font-weight: 700;
font-size: 38px;
line-height: 42px;
color: #111111B2;

@media screen and (max-width: 590px) {
    font-size: 18px;
line-height: 24px;
} 
@media screen and (min-width: 591px) and (max-width:  767px) {
    font-size: 26px;
line-height: 30px;
} 
`,Po=()=>v.jsx(ko,{children:v.jsxs(To,{children:["The project was created by ",v.jsx(_o,{children:"Adamant Team"})]})}),Mo=()=>v.jsxs("div",{children:[v.jsx(jn,{}),v.jsx(or,{}),v.jsx(Oo,{}),v.jsx(Po,{})]});export{Mo as MainPage,Mo as default};
