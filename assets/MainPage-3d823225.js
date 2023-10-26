import{s as w,L as zt,r as H,j as d,c as ie,g as fn,a as pn,b as hn,M as gn}from"./index-9ecfa2cf.js";import{L as vn,R as mn}from"./index.esm-863f3805.js";import{c as me}from"./index-160d404e.js";const yn=w.img`
  width: 150px;
  height: 149px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) {
    width: 142px;
    height: 142px;
  }
`,bn=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3e85f3;
  height: ${n=>n.height}px;
  width: 100%;
  min-width: 375px;
`,wn=w.h1`
  color: #ffffff;
  font-family: 'Inter';
  text-shadow:
    0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
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
`,xn=w.span`
  font-family: 'Inter';
  color: #ffffff;
  font-style: italic;
  font-weight: 700;
  font-size: 120px;
  line-height: 150px;
  margin-bottom: 40px;
  margin-right: 4px;

  @media screen and (max-width: 767px) {
    font-size: 44px;
    line-height: 48px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: 100px;
    line-height: 130px;
  }
`,Sn=w.div`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    row-gap: 16px;
  }
`,kn=w(zt)`
  font-family: 'Inter';
  color: #ffffff;
  font-weight: 600;
  line-height: 18px;
  font-size: 14px;
  position: relative;
  @media screen and (max-width: 767px) {
    font-size: 12px;
    ine-height: 14px;
  }
  &:hover {
    border-color: #0056b3;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    background-color: #6fa2ff;
    transition: border-color 0.3s, box-shadow 0.3s, transform 0.2s ease-in-out;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #ffffff;
  }

  &:active {
    transform: translateY(3px);
  }
`,On=w(zt)`
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
  text-align: inherit;
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 14px 22px;
  display: flex;
  column-gap: 6px;

  transition: border-color 0.3s, box-shadow 0.3s, transform 0.2s ease-in-out;

  &:active {
    transform: translateY(3px);
  }
  &:hover {
    transition: border-color 0.3s, box-shadow 0.3s, transform 0.2s ease-in-out;
    border-color: #0056b3;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
`,Tn=w.h2`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #3e85f3;
`,_n=w(vn)`
  width: 18px;
  height: 18px;
  color: #3e85f3;
`,at="/GooseTrack-with-backend-3.0/assets/Tab_mainGoose-75fc3bc2.png",An="/GooseTrack-with-backend-3.0/assets/Tab@2x_mainGoose-49dc0cb7.png",Pn="/GooseTrack-with-backend-3.0/assets/Tab@3x_mainGoose-7e173b27.png",Dn="/GooseTrack-with-backend-3.0/assets/Tab_mainGoose-75fc3bc2.png",Ln="/GooseTrack-with-backend-3.0/assets/Tab@2x_mainGoose-49dc0cb7.png",Cn="/GooseTrack-with-backend-3.0/assets/Tab@3x_mainGoose-7e173b27.png",Mn="/GooseTrack-with-backend-3.0/assets/Mob_mainGoose-1c79133e.png",En="/GooseTrack-with-backend-3.0/assets/Mob@2x_mainGoose-cfdbf16c.png",jn="/GooseTrack-with-backend-3.0/assets/Mob@3x_mainGoose-e41fe175.png",Rn=()=>{const[n,e]=H.useState(window.innerWidth),[r,i]=H.useState(window.devicePixelRatio),[t,a]=H.useState(at);return H.useEffect(()=>{n<=767?r==1?a(Mn):r==2?a(En):a(jn):n>=768&&n<=1399?r==1?a(Dn):r==2?a(Ln):a(Cn):r==1?a(at):r==2?a(An):a(Pn);const o=()=>{e(window.innerWidth),i(window.devicePixelRatio)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[n,r]),d.jsx(d.Fragment,{children:d.jsxs(bn,{height:window.innerHeight,children:[d.jsx(yn,{src:t,alt:"main-Goose"}),d.jsxs(wn,{children:["G",d.jsx(xn,{children:"oo"}),"seTrack"]}),d.jsxs(Sn,{children:[d.jsx(kn,{to:"/register",children:"Sign up"}),d.jsxs(On,{to:"/login",children:[d.jsx(Tn,{children:"Log in"}),d.jsx(_n,{})]})]})]})})},zn=w.div`
padding-top: 64px;
padding-bottom: 64px;
margin-left: auto;
margin-right: auto;
@media screen and (max-width: 767px) {
padding-left: 20px;
padding-right: 20px;
  max-width: 375px;
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

`,In=w.div`
margin-bottom: 64px;
@media screen and (min-width: 1440px) {
display: flex;
gap: 228px;
align-items: center;
padding-left: 205px;
padding-right: 128px;
  }
`,Hn=w.div`
margin-bottom: 64px;
@media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 228px;
    align-items: center;
    padding-left: 128px;
    padding-right: 208px;
  }
`,Gn=w.div`

@media screen and (min-width: 1440px) {
    display: flex;
column-gap: 228px;
align-items: center;
padding-left: 205px;
padding-right: 128px;
  }
`,Oe=w.h2`
font-family: 'Inter';
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

`,st=w.h3`
font-family: 'Inter';
font-weight: 700;
font-size: 40px;
line-height: 44px;
margin-bottom: 14px;
color: #3E85F3;
padding:  6px 18px;
border-radius: 44px;
text-transform: uppercase;

display: inline-block;
background-color: #DCEBF7;
@media screen and (max-width: 767px) {
    padding:  8px 18px;
    font-weight: 700;
font-size: 32px;
line-height: 40px;
    margin-bottom: 16px;
}
`,Te=w.h3`
font-family: 'Inter';
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
`,_e=w.p`
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
`,Ae=w.img`
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
`,Wn=w.div`
width: 275px;

@media screen and (min-width: 768px) and (max-width: 1439px) {
  margin-left: auto;
}


`,lt=w.div`
width: 275px;
@media screen and (max-width: 767px) {
  width: 335px;
} 
`,ct="/GooseTrack-with-backend-3.0/assets/Desk_FirstDescription-min-602d15b6.png",Nn="/GooseTrack-with-backend-3.0/assets/Desk@2x_FirstDescription-min-bf06d3bb.png",Bn="/GooseTrack-with-backend-3.0/assets/Desk@3x_FirstDescription-min-e4611bb4.png",Fn="/GooseTrack-with-backend-3.0/assets/Tab_FirstDescription-min-79b91b56.png",Xn="/GooseTrack-with-backend-3.0/assets/Tab@2x_FirstDescription-min-5973d134.png",qn="/GooseTrack-with-backend-3.0/assets/Tab@3x_FirstDescription-min-bf59d43a.png",Un="/GooseTrack-with-backend-3.0/assets/Mob_FirstDescription-min-fb0df188.png",ut="/GooseTrack-with-backend-3.0/assets/Mob@3x_FirstDescription-min-8c200e23.png",dt="/GooseTrack-with-backend-3.0/assets/Desk_SecondDescription-min-0cb1a07e.png",$n="/GooseTrack-with-backend-3.0/assets/Desk@2x_SecondDescription-min-6c50aabf.png",Qn="/GooseTrack-with-backend-3.0/assets/Desk@3x_SecondDescription-min-81a96413.png",ft="/GooseTrack-with-backend-3.0/assets/Tab_SecondDescription-min-50e9836f.png",Yn="/GooseTrack-with-backend-3.0/assets/Tab@2x_SecondDescription-min-cd4be521.png",Kn="/GooseTrack-with-backend-3.0/assets/Tab@3x_SecondDescription-min-0fdd1260.png",Jn="/GooseTrack-with-backend-3.0/assets/Mob_SecondDescription-min-aff5675d.png",Vn="/GooseTrack-with-backend-3.0/assets/Mob@2x_SecondDescription-min-f90949e5.png",Zn="/GooseTrack-with-backend-3.0/assets/Mob@3x_SecondDescription-min-cdd9a749.png",pt="/GooseTrack-with-backend-3.0/assets/Desk_ThirdDescription-min-c3acdd71.png",er="/GooseTrack-with-backend-3.0/assets/Desk@2x_ThirdDescription-min-33ef0510.png",tr="/GooseTrack-with-backend-3.0/assets/Desk@3x_ThirdDescription-min-54162a09.png",nr="/GooseTrack-with-backend-3.0/assets/Tab@2x_ThirdDescription-min-ca7caa5c.png",rr="/GooseTrack-with-backend-3.0/assets/Tab@3x_ThirdDescription-min-163f8170.png",ir="/GooseTrack-with-backend-3.0/assets/Mob_ThirdDescription-min-7a2a7ad8.png",or="/GooseTrack-with-backend-3.0/assets/Mob@2x_ThirdDescription-min-83710fb8.png",ar="/GooseTrack-with-backend-3.0/assets/Mob@3x_ThirdDescription-min-305fda3c.png",sr=()=>{const[n,e]=H.useState(window.innerWidth),[r,i]=H.useState(window.devicePixelRatio),[t,a]=H.useState(ct),[o,s]=H.useState(dt),[l,c]=H.useState(pt);return H.useEffect(()=>{n<=767?r==1?(a(Un),s(Jn),c(ir)):r==2?(a(ut),s(Vn),c(or)):(a(ut),s(Zn),c(ar)):n>=768&&n<=1399?r==1?(a(Fn),s(ft),c(ft)):r==2?(a(Xn),s(Yn),c(nr)):(a(qn),s(Kn),c(rr)):r==1?(a(ct),s(dt),c(pt)):r==2?(a(Nn),s($n),c(er)):(a(Bn),s(Qn),c(tr));const p=()=>{e(window.innerWidth),i(window.devicePixelRatio)};return window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}},[n,r]),d.jsxs(zn,{children:[d.jsxs(In,{children:[d.jsxs(lt,{children:[d.jsx(Oe,{children:"1."}),d.jsx(st,{children:"Calendar"}),d.jsx(Te,{children:"VIEW"}),d.jsx(_e,{children:"GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout."})]}),d.jsx(Ae,{src:t,alt:"image Description Calendar"})]}),d.jsxs(Hn,{children:[d.jsxs(Wn,{children:[d.jsx(Oe,{children:"2."}),d.jsx(Te,{children:"SIDEBAR"}),d.jsx(_e,{children:"GooseTrack offers easy access to your account settings, calendar, and filters. The “My Account“ section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks."})]}),d.jsx(Ae,{src:o,alt:"image Description Sidebar"})]}),d.jsxs(Gn,{children:[d.jsxs(lt,{children:[d.jsx(Oe,{children:"3."}),d.jsx(st,{children:"all in"}),d.jsx(Te,{children:"ONE"}),d.jsx(_e,{children:"GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack."})]}),d.jsx(Ae,{src:l,alt:"image Description One"})]})]})};var It={},Ht={},ye={},Gt={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},r=e;n.default=r})(Gt);var lr="Expected a function",ht=0/0,cr="[object Symbol]",ur=/^\s+|\s+$/g,dr=/^[-+]0x[0-9a-f]+$/i,fr=/^0b[01]+$/i,pr=/^0o[0-7]+$/i,hr=parseInt,gr=typeof ie=="object"&&ie&&ie.Object===Object&&ie,vr=typeof self=="object"&&self&&self.Object===Object&&self,mr=gr||vr||Function("return this")(),yr=Object.prototype,br=yr.toString,wr=Math.max,xr=Math.min,Pe=function(){return mr.Date.now()};function Sr(n,e,r){var i,t,a,o,s,l,c=0,p=!1,u=!1,x=!0;if(typeof n!="function")throw new TypeError(lr);e=gt(e)||0,He(r)&&(p=!!r.leading,u="maxWait"in r,a=u?wr(gt(r.maxWait)||0,e):a,x="trailing"in r?!!r.trailing:x);function E(A){var z=i,g=t;return i=t=void 0,c=A,o=n.apply(g,z),o}function T(A){return c=A,s=setTimeout(_,e),p?E(A):o}function v(A){var z=A-l,g=A-c,m=e-z;return u?xr(m,a-g):m}function y(A){var z=A-l,g=A-c;return l===void 0||z>=e||z<0||u&&g>=a}function _(){var A=Pe();if(y(A))return h(A);s=setTimeout(_,v(A))}function h(A){return s=void 0,x&&i?E(A):(i=t=void 0,o)}function O(){s!==void 0&&clearTimeout(s),c=0,i=l=t=s=void 0}function D(){return s===void 0?o:h(Pe())}function L(){var A=Pe(),z=y(A);if(i=arguments,t=this,l=A,z){if(s===void 0)return T(l);if(u)return s=setTimeout(_,e),E(l)}return s===void 0&&(s=setTimeout(_,e)),o}return L.cancel=O,L.flush=D,L}function He(n){var e=typeof n;return!!n&&(e=="object"||e=="function")}function kr(n){return!!n&&typeof n=="object"}function Or(n){return typeof n=="symbol"||kr(n)&&br.call(n)==cr}function gt(n){if(typeof n=="number")return n;if(Or(n))return ht;if(He(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=He(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=n.replace(ur,"");var r=fr.test(n);return r||pr.test(n)?hr(n.slice(2),r?2:8):dr.test(n)?ht:+n}var Tr=Sr,f={};Object.defineProperty(f,"__esModule",{value:!0});f.checkSpecKeys=f.checkNavigable=f.changeSlide=f.canUseDOM=f.canGoNext=void 0;f.clamp=Wt;f.swipeStart=f.swipeMove=f.swipeEnd=f.slidesOnRight=f.slidesOnLeft=f.slideHandler=f.siblingDirection=f.safePreventDefault=f.lazyStartIndex=f.lazySlidesOnRight=f.lazySlidesOnLeft=f.lazyEndIndex=f.keyHandler=f.initializedState=f.getWidth=f.getTrackLeft=f.getTrackCSS=f.getTrackAnimateCSS=f.getTotalSlides=f.getSwipeDirection=f.getSlideCount=f.getRequiredLazySlides=f.getPreClones=f.getPostClones=f.getOnDemandLazySlides=f.getNavigableIndexes=f.getHeight=f.extractObject=void 0;var _r=Ar(H);function Ar(n){return n&&n.__esModule?n:{default:n}}function vt(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,i)}return r}function R(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?vt(Object(r),!0).forEach(function(i){Pr(n,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):vt(Object(r)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(r,i))})}return n}function Pr(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function Wt(n,e,r){return Math.max(e,Math.min(n,r))}var $=function(e){var r=["onTouchStart","onTouchMove","onWheel"];r.includes(e._reactName)||e.preventDefault()};f.safePreventDefault=$;var Ve=function(e){for(var r=[],i=Ze(e),t=et(e),a=i;a<t;a++)e.lazyLoadedList.indexOf(a)<0&&r.push(a);return r};f.getOnDemandLazySlides=Ve;var Dr=function(e){for(var r=[],i=Ze(e),t=et(e),a=i;a<t;a++)r.push(a);return r};f.getRequiredLazySlides=Dr;var Ze=function(e){return e.currentSlide-Nt(e)};f.lazyStartIndex=Ze;var et=function(e){return e.currentSlide+Bt(e)};f.lazyEndIndex=et;var Nt=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0};f.lazySlidesOnLeft=Nt;var Bt=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow};f.lazySlidesOnRight=Bt;var ae=function(e){return e&&e.offsetWidth||0};f.getWidth=ae;var tt=function(e){return e&&e.offsetHeight||0};f.getHeight=tt;var nt=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i,t,a,o;return i=e.startX-e.curX,t=e.startY-e.curY,a=Math.atan2(t,i),o=Math.round(a*180/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":r===!0?o>=35&&o<=135?"up":"down":"vertical"};f.getSwipeDirection=nt;var rt=function(e){var r=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(r=!1),r};f.canGoNext=rt;var Lr=function(e,r){var i={};return r.forEach(function(t){return i[t]=e[t]}),i};f.extractObject=Lr;var Cr=function(e){var r=_r.default.Children.count(e.children),i=e.listRef,t=Math.ceil(ae(i)),a=e.trackRef&&e.trackRef.node,o=Math.ceil(ae(a)),s;if(e.vertical)s=t;else{var l=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(l*=t/100),s=Math.ceil((t-l)/e.slidesToShow)}var c=i&&tt(i.querySelector('[data-index="0"]')),p=c*e.slidesToShow,u=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(u=r-1-e.initialSlide);var x=e.lazyLoadedList||[],E=Ve(R(R({},e),{},{currentSlide:u,lazyLoadedList:x}));x=x.concat(E);var T={slideCount:r,slideWidth:s,listWidth:t,trackWidth:o,currentSlide:u,slideHeight:c,listHeight:p,lazyLoadedList:x};return e.autoplaying===null&&e.autoplay&&(T.autoplaying="playing"),T};f.initializedState=Cr;var Mr=function(e){var r=e.waitForAnimate,i=e.animating,t=e.fade,a=e.infinite,o=e.index,s=e.slideCount,l=e.lazyLoad,c=e.currentSlide,p=e.centerMode,u=e.slidesToScroll,x=e.slidesToShow,E=e.useCSS,T=e.lazyLoadedList;if(r&&i)return{};var v=o,y,_,h,O={},D={},L=a?o:Wt(o,0,s-1);if(t){if(!a&&(o<0||o>=s))return{};o<0?v=o+s:o>=s&&(v=o-s),l&&T.indexOf(v)<0&&(T=T.concat(v)),O={animating:!0,currentSlide:v,lazyLoadedList:T,targetSlide:v},D={animating:!1,targetSlide:v}}else y=v,v<0?(y=v+s,a?s%u!==0&&(y=s-s%u):y=0):!rt(e)&&v>c?v=y=c:p&&v>=s?(v=a?s:s-1,y=a?0:s-1):v>=s&&(y=v-s,a?s%u!==0&&(y=0):y=s-x),!a&&v+x>=s&&(y=s-x),_=ne(R(R({},e),{},{slideIndex:v})),h=ne(R(R({},e),{},{slideIndex:y})),a||(_===h&&(v=y),_=h),l&&(T=T.concat(Ve(R(R({},e),{},{currentSlide:v})))),E?(O={animating:!0,currentSlide:y,trackStyle:it(R(R({},e),{},{left:_})),lazyLoadedList:T,targetSlide:L},D={animating:!1,currentSlide:y,trackStyle:te(R(R({},e),{},{left:h})),swipeLeft:null,targetSlide:L}):O={currentSlide:y,trackStyle:te(R(R({},e),{},{left:h})),lazyLoadedList:T,targetSlide:L};return{state:O,nextState:D}};f.slideHandler=Mr;var Er=function(e,r){var i,t,a,o,s,l=e.slidesToScroll,c=e.slidesToShow,p=e.slideCount,u=e.currentSlide,x=e.targetSlide,E=e.lazyLoad,T=e.infinite;if(o=p%l!==0,i=o?0:(p-u)%l,r.message==="previous")a=i===0?l:c-i,s=u-a,E&&!T&&(t=u-a,s=t===-1?p-1:t),T||(s=x-l);else if(r.message==="next")a=i===0?l:i,s=u+a,E&&!T&&(s=(u+l)%p+i),T||(s=x+l);else if(r.message==="dots")s=r.index*r.slidesToScroll;else if(r.message==="children"){if(s=r.index,T){var v=Ut(R(R({},e),{},{targetSlide:s}));s>r.currentSlide&&v==="left"?s=s-p:s<r.currentSlide&&v==="right"&&(s=s+p)}}else r.message==="index"&&(s=Number(r.index));return s};f.changeSlide=Er;var jr=function(e,r,i){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!r?"":e.keyCode===37?i?"next":"previous":e.keyCode===39?i?"previous":"next":""};f.keyHandler=jr;var Rr=function(e,r,i){return e.target.tagName==="IMG"&&$(e),!r||!i&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};f.swipeStart=Rr;var zr=function(e,r){var i=r.scrolling,t=r.animating,a=r.vertical,o=r.swipeToSlide,s=r.verticalSwiping,l=r.rtl,c=r.currentSlide,p=r.edgeFriction,u=r.edgeDragged,x=r.onEdge,E=r.swiped,T=r.swiping,v=r.slideCount,y=r.slidesToScroll,_=r.infinite,h=r.touchObject,O=r.swipeEvent,D=r.listHeight,L=r.listWidth;if(!i){if(t)return $(e);a&&o&&s&&$(e);var A,z={},g=ne(r);h.curX=e.touches?e.touches[0].pageX:e.clientX,h.curY=e.touches?e.touches[0].pageY:e.clientY,h.swipeLength=Math.round(Math.sqrt(Math.pow(h.curX-h.startX,2)));var m=Math.round(Math.sqrt(Math.pow(h.curY-h.startY,2)));if(!s&&!T&&m>10)return{scrolling:!0};s&&(h.swipeLength=m);var P=(l?-1:1)*(h.curX>h.startX?1:-1);s&&(P=h.curY>h.startY?1:-1);var j=Math.ceil(v/y),k=nt(r.touchObject,s),S=h.swipeLength;return _||(c===0&&(k==="right"||k==="down")||c+1>=j&&(k==="left"||k==="up")||!rt(r)&&(k==="left"||k==="up"))&&(S=h.swipeLength*p,u===!1&&x&&(x(k),z.edgeDragged=!0)),!E&&O&&(O(k),z.swiped=!0),a?A=g+S*(D/L)*P:l?A=g-S*P:A=g+S*P,s&&(A=g+S*P),z=R(R({},z),{},{touchObject:h,swipeLeft:A,trackStyle:te(R(R({},r),{},{left:A}))}),Math.abs(h.curX-h.startX)<Math.abs(h.curY-h.startY)*.8||h.swipeLength>10&&(z.swiping=!0,$(e)),z}};f.swipeMove=zr;var Ir=function(e,r){var i=r.dragging,t=r.swipe,a=r.touchObject,o=r.listWidth,s=r.touchThreshold,l=r.verticalSwiping,c=r.listHeight,p=r.swipeToSlide,u=r.scrolling,x=r.onSwipe,E=r.targetSlide,T=r.currentSlide,v=r.infinite;if(!i)return t&&$(e),{};var y=l?c/s:o/s,_=nt(a,l),h={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(u||!a.swipeLength)return h;if(a.swipeLength>y){$(e),x&&x(_);var O,D,L=v?T:E;switch(_){case"left":case"up":D=L+We(r),O=p?Ge(r,D):D,h.currentDirection=0;break;case"right":case"down":D=L-We(r),O=p?Ge(r,D):D,h.currentDirection=1;break;default:O=L}h.triggerSlideHandler=O}else{var A=ne(r);h.trackStyle=it(R(R({},r),{},{left:A}))}return h};f.swipeEnd=Ir;var Ft=function(e){for(var r=e.infinite?e.slideCount*2:e.slideCount,i=e.infinite?e.slidesToShow*-1:0,t=e.infinite?e.slidesToShow*-1:0,a=[];i<r;)a.push(i),i=t+e.slidesToScroll,t+=Math.min(e.slidesToScroll,e.slidesToShow);return a};f.getNavigableIndexes=Ft;var Ge=function(e,r){var i=Ft(e),t=0;if(r>i[i.length-1])r=i[i.length-1];else for(var a in i){if(r<i[a]){r=t;break}t=i[a]}return r};f.checkNavigable=Ge;var We=function(e){var r=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var i,t=e.listRef,a=t.querySelectorAll&&t.querySelectorAll(".slick-slide")||[];if(Array.from(a).every(function(l){if(e.vertical){if(l.offsetTop+tt(l)/2>e.swipeLeft*-1)return i=l,!1}else if(l.offsetLeft-r+ae(l)/2>e.swipeLeft*-1)return i=l,!1;return!0}),!i)return 0;var o=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,s=Math.abs(i.dataset.index-o)||1;return s}else return e.slidesToScroll};f.getSlideCount=We;var be=function(e,r){return r.reduce(function(i,t){return i&&e.hasOwnProperty(t)},!0)?null:console.error("Keys Missing:",e)};f.checkSpecKeys=be;var te=function(e){be(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var r,i,t=e.slideCount+2*e.slidesToShow;e.vertical?i=t*e.slideHeight:r=qt(e)*e.slideWidth;var a={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",s=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";a=R(R({},a),{},{WebkitTransform:o,transform:s,msTransform:l})}else e.vertical?a.top=e.left:a.left=e.left;return e.fade&&(a={opacity:1}),r&&(a.width=r),i&&(a.height=i),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?a.marginTop=e.left+"px":a.marginLeft=e.left+"px"),a};f.getTrackCSS=te;var it=function(e){be(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var r=te(e);return e.useTransform?(r.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,r.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?r.transition="top "+e.speed+"ms "+e.cssEase:r.transition="left "+e.speed+"ms "+e.cssEase,r};f.getTrackAnimateCSS=it;var ne=function(e){if(e.unslick)return 0;be(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var r=e.slideIndex,i=e.trackRef,t=e.infinite,a=e.centerMode,o=e.slideCount,s=e.slidesToShow,l=e.slidesToScroll,c=e.slideWidth,p=e.listWidth,u=e.variableWidth,x=e.slideHeight,E=e.fade,T=e.vertical,v=0,y,_,h=0;if(E||e.slideCount===1)return 0;var O=0;if(t?(O=-ee(e),o%l!==0&&r+l>o&&(O=-(r>o?s-(r-o):o%l)),a&&(O+=parseInt(s/2))):(o%l!==0&&r+l>o&&(O=s-o%l),a&&(O=parseInt(s/2))),v=O*c,h=O*x,T?y=r*x*-1+h:y=r*c*-1+v,u===!0){var D,L=i&&i.node;if(D=r+ee(e),_=L&&L.childNodes[D],y=_?_.offsetLeft*-1:0,a===!0){D=t?r+ee(e):r,_=L&&L.children[D],y=0;for(var A=0;A<D;A++)y-=L&&L.children[A]&&L.children[A].offsetWidth;y-=parseInt(e.centerPadding),y+=_&&(p-_.offsetWidth)/2}}return y};f.getTrackLeft=ne;var ee=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)};f.getPreClones=ee;var Xt=function(e){return e.unslick||!e.infinite?0:e.slideCount};f.getPostClones=Xt;var qt=function(e){return e.slideCount===1?1:ee(e)+e.slideCount+Xt(e)};f.getTotalSlides=qt;var Ut=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+$t(e)?"left":"right":e.targetSlide<e.currentSlide-Qt(e)?"right":"left"};f.siblingDirection=Ut;var $t=function(e){var r=e.slidesToShow,i=e.centerMode,t=e.rtl,a=e.centerPadding;if(i){var o=(r-1)/2+1;return parseInt(a)>0&&(o+=1),t&&r%2===0&&(o+=1),o}return t?0:r-1};f.slidesOnRight=$t;var Qt=function(e){var r=e.slidesToShow,i=e.centerMode,t=e.rtl,a=e.centerPadding;if(i){var o=(r-1)/2+1;return parseInt(a)>0&&(o+=1),!t&&r%2===0&&(o+=1),o}return t?r-1:0};f.slidesOnLeft=Qt;var Hr=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};f.canUseDOM=Hr;var we={};function Ne(n){"@babel/helpers - typeof";return Ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ne(n)}Object.defineProperty(we,"__esModule",{value:!0});we.Track=void 0;var X=Yt(H),De=Yt(me),Le=f;function Yt(n){return n&&n.__esModule?n:{default:n}}function Be(){return Be=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},Be.apply(this,arguments)}function Gr(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function mt(n,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Wr(n,e,r){return e&&mt(n.prototype,e),r&&mt(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function Nr(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Fe(n,e)}function Fe(n,e){return Fe=Object.setPrototypeOf||function(i,t){return i.__proto__=t,i},Fe(n,e)}function Br(n){var e=Xr();return function(){var i=se(n),t;if(e){var a=se(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return Fr(this,t)}}function Fr(n,e){if(e&&(Ne(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Xe(n)}function Xe(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Xr(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function se(n){return se=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},se(n)}function yt(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,i)}return r}function N(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?yt(Object(r),!0).forEach(function(i){qe(n,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):yt(Object(r)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(r,i))})}return n}function qe(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var Ce=function(e){var r,i,t,a,o;e.rtl?o=e.slideCount-1-e.index:o=e.index,t=o<0||o>=e.slideCount,e.centerMode?(a=Math.floor(e.slidesToShow/2),i=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-a-1&&o<=e.currentSlide+a&&(r=!0)):r=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow;var s;e.targetSlide<0?s=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?s=e.targetSlide-e.slideCount:s=e.targetSlide;var l=o===s;return{"slick-slide":!0,"slick-active":r,"slick-center":i,"slick-cloned":t,"slick-current":l}},qr=function(e){var r={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(r.width=e.slideWidth),e.fade&&(r.position="relative",e.vertical?r.top=-e.index*parseInt(e.slideHeight):r.left=-e.index*parseInt(e.slideWidth),r.opacity=e.currentSlide===e.index?1:0,e.useCSS&&(r.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),r},Me=function(e,r){return e.key||r},Ur=function(e){var r,i=[],t=[],a=[],o=X.default.Children.count(e.children),s=(0,Le.lazyStartIndex)(e),l=(0,Le.lazyEndIndex)(e);return X.default.Children.forEach(e.children,function(c,p){var u,x={message:"children",index:p,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(p)>=0?u=c:u=X.default.createElement("div",null);var E=qr(N(N({},e),{},{index:p})),T=u.props.className||"",v=Ce(N(N({},e),{},{index:p}));if(i.push(X.default.cloneElement(u,{key:"original"+Me(u,p),"data-index":p,className:(0,De.default)(v,T),tabIndex:"-1","aria-hidden":!v["slick-active"],style:N(N({outline:"none"},u.props.style||{}),E),onClick:function(h){u.props&&u.props.onClick&&u.props.onClick(h),e.focusOnSelect&&e.focusOnSelect(x)}})),e.infinite&&e.fade===!1){var y=o-p;y<=(0,Le.getPreClones)(e)&&o!==e.slidesToShow&&(r=-y,r>=s&&(u=c),v=Ce(N(N({},e),{},{index:r})),t.push(X.default.cloneElement(u,{key:"precloned"+Me(u,r),"data-index":r,tabIndex:"-1",className:(0,De.default)(v,T),"aria-hidden":!v["slick-active"],style:N(N({},u.props.style||{}),E),onClick:function(h){u.props&&u.props.onClick&&u.props.onClick(h),e.focusOnSelect&&e.focusOnSelect(x)}}))),o!==e.slidesToShow&&(r=o+p,r<l&&(u=c),v=Ce(N(N({},e),{},{index:r})),a.push(X.default.cloneElement(u,{key:"postcloned"+Me(u,r),"data-index":r,tabIndex:"-1",className:(0,De.default)(v,T),"aria-hidden":!v["slick-active"],style:N(N({},u.props.style||{}),E),onClick:function(h){u.props&&u.props.onClick&&u.props.onClick(h),e.focusOnSelect&&e.focusOnSelect(x)}})))}}),e.rtl?t.concat(i,a).reverse():t.concat(i,a)},$r=function(n){Nr(r,n);var e=Br(r);function r(){var i;Gr(this,r);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return i=e.call.apply(e,[this].concat(a)),qe(Xe(i),"node",null),qe(Xe(i),"handleRef",function(s){i.node=s}),i}return Wr(r,[{key:"render",value:function(){var t=Ur(this.props),a=this.props,o=a.onMouseEnter,s=a.onMouseOver,l=a.onMouseLeave,c={onMouseEnter:o,onMouseOver:s,onMouseLeave:l};return X.default.createElement("div",Be({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},c),t)}}]),r}(X.default.PureComponent);we.Track=$r;var xe={};function Ue(n){"@babel/helpers - typeof";return Ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ue(n)}Object.defineProperty(xe,"__esModule",{value:!0});xe.Dots=void 0;var oe=Kt(H),Qr=Kt(me),bt=f;function Kt(n){return n&&n.__esModule?n:{default:n}}function wt(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,i)}return r}function Yr(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?wt(Object(r),!0).forEach(function(i){Kr(n,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):wt(Object(r)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(r,i))})}return n}function Kr(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function Jr(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function xt(n,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Vr(n,e,r){return e&&xt(n.prototype,e),r&&xt(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function Zr(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&$e(n,e)}function $e(n,e){return $e=Object.setPrototypeOf||function(i,t){return i.__proto__=t,i},$e(n,e)}function ei(n){var e=ri();return function(){var i=le(n),t;if(e){var a=le(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return ti(this,t)}}function ti(n,e){if(e&&(Ue(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ni(n)}function ni(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ri(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function le(n){return le=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},le(n)}var ii=function(e){var r;return e.infinite?r=Math.ceil(e.slideCount/e.slidesToScroll):r=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,r},oi=function(n){Zr(r,n);var e=ei(r);function r(){return Jr(this,r),e.apply(this,arguments)}return Vr(r,[{key:"clickHandler",value:function(t,a){a.preventDefault(),this.props.clickHandler(t)}},{key:"render",value:function(){for(var t=this.props,a=t.onMouseEnter,o=t.onMouseOver,s=t.onMouseLeave,l=t.infinite,c=t.slidesToScroll,p=t.slidesToShow,u=t.slideCount,x=t.currentSlide,E=ii({slideCount:u,slidesToScroll:c,slidesToShow:p,infinite:l}),T={onMouseEnter:a,onMouseOver:o,onMouseLeave:s},v=[],y=0;y<E;y++){var _=(y+1)*c-1,h=l?_:(0,bt.clamp)(_,0,u-1),O=h-(c-1),D=l?O:(0,bt.clamp)(O,0,u-1),L=(0,Qr.default)({"slick-active":l?x>=D&&x<=h:x===D}),A={message:"dots",index:y,slidesToScroll:c,currentSlide:x},z=this.clickHandler.bind(this,A);v=v.concat(oe.default.createElement("li",{key:y,className:L},oe.default.cloneElement(this.props.customPaging(y),{onClick:z})))}return oe.default.cloneElement(this.props.appendDots(v),Yr({className:this.props.dotsClass},T))}}]),r}(oe.default.PureComponent);xe.Dots=oi;var J={};function Qe(n){"@babel/helpers - typeof";return Qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qe(n)}Object.defineProperty(J,"__esModule",{value:!0});J.PrevArrow=J.NextArrow=void 0;var K=Vt(H),Jt=Vt(me),ai=f;function Vt(n){return n&&n.__esModule?n:{default:n}}function ce(){return ce=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},ce.apply(this,arguments)}function St(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,i)}return r}function ue(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?St(Object(r),!0).forEach(function(i){si(n,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):St(Object(r)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(r,i))})}return n}function si(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function Zt(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function kt(n,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function en(n,e,r){return e&&kt(n.prototype,e),r&&kt(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function tn(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Ye(n,e)}function Ye(n,e){return Ye=Object.setPrototypeOf||function(i,t){return i.__proto__=t,i},Ye(n,e)}function nn(n){var e=ui();return function(){var i=de(n),t;if(e){var a=de(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return li(this,t)}}function li(n,e){if(e&&(Qe(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ci(n)}function ci(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ui(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function de(n){return de=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},de(n)}var di=function(n){tn(r,n);var e=nn(r);function r(){return Zt(this,r),e.apply(this,arguments)}return en(r,[{key:"clickHandler",value:function(t,a){a&&a.preventDefault(),this.props.clickHandler(t,a)}},{key:"render",value:function(){var t={"slick-arrow":!0,"slick-prev":!0},a=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(t["slick-disabled"]=!0,a=null);var o={key:"0","data-role":"none",className:(0,Jt.default)(t),style:{display:"block"},onClick:a},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=K.default.cloneElement(this.props.prevArrow,ue(ue({},o),s)):l=K.default.createElement("button",ce({key:"0",type:"button"},o)," ","Previous"),l}}]),r}(K.default.PureComponent);J.PrevArrow=di;var fi=function(n){tn(r,n);var e=nn(r);function r(){return Zt(this,r),e.apply(this,arguments)}return en(r,[{key:"clickHandler",value:function(t,a){a&&a.preventDefault(),this.props.clickHandler(t,a)}},{key:"render",value:function(){var t={"slick-arrow":!0,"slick-next":!0},a=this.clickHandler.bind(this,{message:"next"});(0,ai.canGoNext)(this.props)||(t["slick-disabled"]=!0,a=null);var o={key:"1","data-role":"none",className:(0,Jt.default)(t),style:{display:"block"},onClick:a},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=K.default.cloneElement(this.props.nextArrow,ue(ue({},o),s)):l=K.default.createElement("button",ce({key:"1",type:"button"},o)," ","Next"),l}}]),r}(K.default.PureComponent);J.NextArrow=fi;var rn=function(){if(typeof Map<"u")return Map;function n(e,r){var i=-1;return e.some(function(t,a){return t[0]===r?(i=a,!0):!1}),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(r){var i=n(this.__entries__,r),t=this.__entries__[i];return t&&t[1]},e.prototype.set=function(r,i){var t=n(this.__entries__,r);~t?this.__entries__[t][1]=i:this.__entries__.push([r,i])},e.prototype.delete=function(r){var i=this.__entries__,t=n(i,r);~t&&i.splice(t,1)},e.prototype.has=function(r){return!!~n(this.__entries__,r)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(r,i){i===void 0&&(i=null);for(var t=0,a=this.__entries__;t<a.length;t++){var o=a[t];r.call(i,o[1],o[0])}},e}()}(),Ke=typeof window<"u"&&typeof document<"u"&&window.document===document,fe=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),pi=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(fe):function(n){return setTimeout(function(){return n(Date.now())},1e3/60)}}(),hi=2;function gi(n,e){var r=!1,i=!1,t=0;function a(){r&&(r=!1,n()),i&&s()}function o(){pi(a)}function s(){var l=Date.now();if(r){if(l-t<hi)return;i=!0}else r=!0,i=!1,setTimeout(o,e);t=l}return s}var vi=20,mi=["top","right","bottom","left","width","height","size","weight"],yi=typeof MutationObserver<"u",bi=function(){function n(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=gi(this.refresh.bind(this),vi)}return n.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},n.prototype.removeObserver=function(e){var r=this.observers_,i=r.indexOf(e);~i&&r.splice(i,1),!r.length&&this.connected_&&this.disconnect_()},n.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},n.prototype.updateObservers_=function(){var e=this.observers_.filter(function(r){return r.gatherActive(),r.hasActive()});return e.forEach(function(r){return r.broadcastActive()}),e.length>0},n.prototype.connect_=function(){!Ke||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),yi?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},n.prototype.disconnect_=function(){!Ke||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},n.prototype.onTransitionEnd_=function(e){var r=e.propertyName,i=r===void 0?"":r,t=mi.some(function(a){return!!~i.indexOf(a)});t&&this.refresh()},n.getInstance=function(){return this.instance_||(this.instance_=new n),this.instance_},n.instance_=null,n}(),on=function(n,e){for(var r=0,i=Object.keys(e);r<i.length;r++){var t=i[r];Object.defineProperty(n,t,{value:e[t],enumerable:!1,writable:!1,configurable:!0})}return n},V=function(n){var e=n&&n.ownerDocument&&n.ownerDocument.defaultView;return e||fe},an=Se(0,0,0,0);function pe(n){return parseFloat(n)||0}function Ot(n){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e.reduce(function(i,t){var a=n["border-"+t+"-width"];return i+pe(a)},0)}function wi(n){for(var e=["top","right","bottom","left"],r={},i=0,t=e;i<t.length;i++){var a=t[i],o=n["padding-"+a];r[a]=pe(o)}return r}function xi(n){var e=n.getBBox();return Se(0,0,e.width,e.height)}function Si(n){var e=n.clientWidth,r=n.clientHeight;if(!e&&!r)return an;var i=V(n).getComputedStyle(n),t=wi(i),a=t.left+t.right,o=t.top+t.bottom,s=pe(i.width),l=pe(i.height);if(i.boxSizing==="border-box"&&(Math.round(s+a)!==e&&(s-=Ot(i,"left","right")+a),Math.round(l+o)!==r&&(l-=Ot(i,"top","bottom")+o)),!Oi(n)){var c=Math.round(s+a)-e,p=Math.round(l+o)-r;Math.abs(c)!==1&&(s-=c),Math.abs(p)!==1&&(l-=p)}return Se(t.left,t.top,s,l)}var ki=function(){return typeof SVGGraphicsElement<"u"?function(n){return n instanceof V(n).SVGGraphicsElement}:function(n){return n instanceof V(n).SVGElement&&typeof n.getBBox=="function"}}();function Oi(n){return n===V(n).document.documentElement}function Ti(n){return Ke?ki(n)?xi(n):Si(n):an}function _i(n){var e=n.x,r=n.y,i=n.width,t=n.height,a=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(a.prototype);return on(o,{x:e,y:r,width:i,height:t,top:r,right:e+i,bottom:t+r,left:e}),o}function Se(n,e,r,i){return{x:n,y:e,width:r,height:i}}var Ai=function(){function n(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Se(0,0,0,0),this.target=e}return n.prototype.isActive=function(){var e=Ti(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},n.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},n}(),Pi=function(){function n(e,r){var i=_i(r);on(this,{target:e,contentRect:i})}return n}(),Di=function(){function n(e,r,i){if(this.activeObservations_=[],this.observations_=new rn,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=r,this.callbackCtx_=i}return n.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof V(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(e)||(r.set(e,new Ai(e)),this.controller_.addObserver(this),this.controller_.refresh())}},n.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof V(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(e)&&(r.delete(e),r.size||this.controller_.removeObserver(this))}},n.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},n.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(r){r.isActive()&&e.activeObservations_.push(r)})},n.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,r=this.activeObservations_.map(function(i){return new Pi(i.target,i.broadcastRect())});this.callback_.call(e,r,e),this.clearActive()}},n.prototype.clearActive=function(){this.activeObservations_.splice(0)},n.prototype.hasActive=function(){return this.activeObservations_.length>0},n}(),sn=typeof WeakMap<"u"?new WeakMap:new rn,ln=function(){function n(e){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=bi.getInstance(),i=new Di(e,r,this);sn.set(this,i)}return n}();["observe","unobserve","disconnect"].forEach(function(n){ln.prototype[n]=function(){var e;return(e=sn.get(this))[n].apply(e,arguments)}});var Li=function(){return typeof fe.ResizeObserver<"u"?fe.ResizeObserver:ln}();const Ci=Object.freeze(Object.defineProperty({__proto__:null,default:Li},Symbol.toStringTag,{value:"Module"})),Mi=fn(Ci);Object.defineProperty(ye,"__esModule",{value:!0});ye.InnerSlider=void 0;var W=re(H),Ei=re(Gt),ji=re(Tr),Ri=re(me),I=f,zi=we,Ii=xe,Tt=J,Hi=re(Mi);function re(n){return n&&n.__esModule?n:{default:n}}function he(n){"@babel/helpers - typeof";return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},he(n)}function ge(){return ge=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},ge.apply(this,arguments)}function Gi(n,e){if(n==null)return{};var r=Wi(n,e),i,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)i=a[t],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}function Wi(n,e){if(n==null)return{};var r={},i=Object.keys(n),t,a;for(a=0;a<i.length;a++)t=i[a],!(e.indexOf(t)>=0)&&(r[t]=n[t]);return r}function _t(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,i)}return r}function b(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?_t(Object(r),!0).forEach(function(i){M(n,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):_t(Object(r)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(r,i))})}return n}function Ni(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function At(n,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Bi(n,e,r){return e&&At(n.prototype,e),r&&At(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function Fi(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Je(n,e)}function Je(n,e){return Je=Object.setPrototypeOf||function(i,t){return i.__proto__=t,i},Je(n,e)}function Xi(n){var e=Ui();return function(){var i=ve(n),t;if(e){var a=ve(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return qi(this,t)}}function qi(n,e){if(e&&(he(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return C(n)}function C(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Ui(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ve(n){return ve=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},ve(n)}function M(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var $i=function(n){Fi(r,n);var e=Xi(r);function r(i){var t;Ni(this,r),t=e.call(this,i),M(C(t),"listRefHandler",function(o){return t.list=o}),M(C(t),"trackRefHandler",function(o){return t.track=o}),M(C(t),"adaptHeight",function(){if(t.props.adaptiveHeight&&t.list){var o=t.list.querySelector('[data-index="'.concat(t.state.currentSlide,'"]'));t.list.style.height=(0,I.getHeight)(o)+"px"}}),M(C(t),"componentDidMount",function(){if(t.props.onInit&&t.props.onInit(),t.props.lazyLoad){var o=(0,I.getOnDemandLazySlides)(b(b({},t.props),t.state));o.length>0&&(t.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(o)}}),t.props.onLazyLoad&&t.props.onLazyLoad(o))}var s=b({listRef:t.list,trackRef:t.track},t.props);t.updateState(s,!0,function(){t.adaptHeight(),t.props.autoplay&&t.autoPlay("update")}),t.props.lazyLoad==="progressive"&&(t.lazyLoadTimer=setInterval(t.progressiveLazyLoad,1e3)),t.ro=new Hi.default(function(){t.state.animating?(t.onWindowResized(!1),t.callbackTimers.push(setTimeout(function(){return t.onWindowResized()},t.props.speed))):t.onWindowResized()}),t.ro.observe(t.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=t.props.pauseOnFocus?t.onSlideFocus:null,l.onblur=t.props.pauseOnFocus?t.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",t.onWindowResized):window.attachEvent("onresize",t.onWindowResized)}),M(C(t),"componentWillUnmount",function(){t.animationEndCallback&&clearTimeout(t.animationEndCallback),t.lazyLoadTimer&&clearInterval(t.lazyLoadTimer),t.callbackTimers.length&&(t.callbackTimers.forEach(function(o){return clearTimeout(o)}),t.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",t.onWindowResized):window.detachEvent("onresize",t.onWindowResized),t.autoplayTimer&&clearInterval(t.autoplayTimer),t.ro.disconnect()}),M(C(t),"componentDidUpdate",function(o){if(t.checkImagesLoad(),t.props.onReInit&&t.props.onReInit(),t.props.lazyLoad){var s=(0,I.getOnDemandLazySlides)(b(b({},t.props),t.state));s.length>0&&(t.setState(function(p){return{lazyLoadedList:p.lazyLoadedList.concat(s)}}),t.props.onLazyLoad&&t.props.onLazyLoad(s))}t.adaptHeight();var l=b(b({listRef:t.list,trackRef:t.track},t.props),t.state),c=t.didPropsChange(o);c&&t.updateState(l,c,function(){t.state.currentSlide>=W.default.Children.count(t.props.children)&&t.changeSlide({message:"index",index:W.default.Children.count(t.props.children)-t.props.slidesToShow,currentSlide:t.state.currentSlide}),t.props.autoplay?t.autoPlay("update"):t.pause("paused")})}),M(C(t),"onWindowResized",function(o){t.debouncedResize&&t.debouncedResize.cancel(),t.debouncedResize=(0,ji.default)(function(){return t.resizeWindow(o)},50),t.debouncedResize()}),M(C(t),"resizeWindow",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,s=!!(t.track&&t.track.node);if(s){var l=b(b({listRef:t.list,trackRef:t.track},t.props),t.state);t.updateState(l,o,function(){t.props.autoplay?t.autoPlay("update"):t.pause("paused")}),t.setState({animating:!1}),clearTimeout(t.animationEndCallback),delete t.animationEndCallback}}),M(C(t),"updateState",function(o,s,l){var c=(0,I.initializedState)(o);o=b(b(b({},o),c),{},{slideIndex:c.currentSlide});var p=(0,I.getTrackLeft)(o);o=b(b({},o),{},{left:p});var u=(0,I.getTrackCSS)(o);(s||W.default.Children.count(t.props.children)!==W.default.Children.count(o.children))&&(c.trackStyle=u),t.setState(c,l)}),M(C(t),"ssrInit",function(){if(t.props.variableWidth){var o=0,s=0,l=[],c=(0,I.getPreClones)(b(b(b({},t.props),t.state),{},{slideCount:t.props.children.length})),p=(0,I.getPostClones)(b(b(b({},t.props),t.state),{},{slideCount:t.props.children.length}));t.props.children.forEach(function(z){l.push(z.props.style.width),o+=z.props.style.width});for(var u=0;u<c;u++)s+=l[l.length-1-u],o+=l[l.length-1-u];for(var x=0;x<p;x++)o+=l[x];for(var E=0;E<t.state.currentSlide;E++)s+=l[E];var T={width:o+"px",left:-s+"px"};if(t.props.centerMode){var v="".concat(l[t.state.currentSlide],"px");T.left="calc(".concat(T.left," + (100% - ").concat(v,") / 2 ) ")}return{trackStyle:T}}var y=W.default.Children.count(t.props.children),_=b(b(b({},t.props),t.state),{},{slideCount:y}),h=(0,I.getPreClones)(_)+(0,I.getPostClones)(_)+y,O=100/t.props.slidesToShow*h,D=100/h,L=-D*((0,I.getPreClones)(_)+t.state.currentSlide)*O/100;t.props.centerMode&&(L+=(100-D*O/100)/2);var A={width:O+"%",left:L+"%"};return{slideWidth:D+"%",trackStyle:A}}),M(C(t),"checkImagesLoad",function(){var o=t.list&&t.list.querySelectorAll&&t.list.querySelectorAll(".slick-slide img")||[],s=o.length,l=0;Array.prototype.forEach.call(o,function(c){var p=function(){return++l&&l>=s&&t.onWindowResized()};if(!c.onclick)c.onclick=function(){return c.parentNode.focus()};else{var u=c.onclick;c.onclick=function(){u(),c.parentNode.focus()}}c.onload||(t.props.lazyLoad?c.onload=function(){t.adaptHeight(),t.callbackTimers.push(setTimeout(t.onWindowResized,t.props.speed))}:(c.onload=p,c.onerror=function(){p(),t.props.onLazyLoadError&&t.props.onLazyLoadError()}))})}),M(C(t),"progressiveLazyLoad",function(){for(var o=[],s=b(b({},t.props),t.state),l=t.state.currentSlide;l<t.state.slideCount+(0,I.getPostClones)(s);l++)if(t.state.lazyLoadedList.indexOf(l)<0){o.push(l);break}for(var c=t.state.currentSlide-1;c>=-(0,I.getPreClones)(s);c--)if(t.state.lazyLoadedList.indexOf(c)<0){o.push(c);break}o.length>0?(t.setState(function(p){return{lazyLoadedList:p.lazyLoadedList.concat(o)}}),t.props.onLazyLoad&&t.props.onLazyLoad(o)):t.lazyLoadTimer&&(clearInterval(t.lazyLoadTimer),delete t.lazyLoadTimer)}),M(C(t),"slideHandler",function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=t.props,c=l.asNavFor,p=l.beforeChange,u=l.onLazyLoad,x=l.speed,E=l.afterChange,T=t.state.currentSlide,v=(0,I.slideHandler)(b(b(b({index:o},t.props),t.state),{},{trackRef:t.track,useCSS:t.props.useCSS&&!s})),y=v.state,_=v.nextState;if(y){p&&p(T,y.currentSlide);var h=y.lazyLoadedList.filter(function(O){return t.state.lazyLoadedList.indexOf(O)<0});u&&h.length>0&&u(h),!t.props.waitForAnimate&&t.animationEndCallback&&(clearTimeout(t.animationEndCallback),E&&E(T),delete t.animationEndCallback),t.setState(y,function(){c&&t.asNavForIndex!==o&&(t.asNavForIndex=o,c.innerSlider.slideHandler(o)),_&&(t.animationEndCallback=setTimeout(function(){var O=_.animating,D=Gi(_,["animating"]);t.setState(D,function(){t.callbackTimers.push(setTimeout(function(){return t.setState({animating:O})},10)),E&&E(y.currentSlide),delete t.animationEndCallback})},x))})}}),M(C(t),"changeSlide",function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=b(b({},t.props),t.state),c=(0,I.changeSlide)(l,o);if(!(c!==0&&!c)&&(s===!0?t.slideHandler(c,s):t.slideHandler(c),t.props.autoplay&&t.autoPlay("update"),t.props.focusOnSelect)){var p=t.list.querySelectorAll(".slick-current");p[0]&&p[0].focus()}}),M(C(t),"clickHandler",function(o){t.clickable===!1&&(o.stopPropagation(),o.preventDefault()),t.clickable=!0}),M(C(t),"keyHandler",function(o){var s=(0,I.keyHandler)(o,t.props.accessibility,t.props.rtl);s!==""&&t.changeSlide({message:s})}),M(C(t),"selectHandler",function(o){t.changeSlide(o)}),M(C(t),"disableBodyScroll",function(){var o=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=o}),M(C(t),"enableBodyScroll",function(){window.ontouchmove=null}),M(C(t),"swipeStart",function(o){t.props.verticalSwiping&&t.disableBodyScroll();var s=(0,I.swipeStart)(o,t.props.swipe,t.props.draggable);s!==""&&t.setState(s)}),M(C(t),"swipeMove",function(o){var s=(0,I.swipeMove)(o,b(b(b({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));s&&(s.swiping&&(t.clickable=!1),t.setState(s))}),M(C(t),"swipeEnd",function(o){var s=(0,I.swipeEnd)(o,b(b(b({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));if(s){var l=s.triggerSlideHandler;delete s.triggerSlideHandler,t.setState(s),l!==void 0&&(t.slideHandler(l),t.props.verticalSwiping&&t.enableBodyScroll())}}),M(C(t),"touchEnd",function(o){t.swipeEnd(o),t.clickable=!0}),M(C(t),"slickPrev",function(){t.callbackTimers.push(setTimeout(function(){return t.changeSlide({message:"previous"})},0))}),M(C(t),"slickNext",function(){t.callbackTimers.push(setTimeout(function(){return t.changeSlide({message:"next"})},0))}),M(C(t),"slickGoTo",function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o=Number(o),isNaN(o))return"";t.callbackTimers.push(setTimeout(function(){return t.changeSlide({message:"index",index:o,currentSlide:t.state.currentSlide},s)},0))}),M(C(t),"play",function(){var o;if(t.props.rtl)o=t.state.currentSlide-t.props.slidesToScroll;else if((0,I.canGoNext)(b(b({},t.props),t.state)))o=t.state.currentSlide+t.props.slidesToScroll;else return!1;t.slideHandler(o)}),M(C(t),"autoPlay",function(o){t.autoplayTimer&&clearInterval(t.autoplayTimer);var s=t.state.autoplaying;if(o==="update"){if(s==="hovered"||s==="focused"||s==="paused")return}else if(o==="leave"){if(s==="paused"||s==="focused")return}else if(o==="blur"&&(s==="paused"||s==="hovered"))return;t.autoplayTimer=setInterval(t.play,t.props.autoplaySpeed+50),t.setState({autoplaying:"playing"})}),M(C(t),"pause",function(o){t.autoplayTimer&&(clearInterval(t.autoplayTimer),t.autoplayTimer=null);var s=t.state.autoplaying;o==="paused"?t.setState({autoplaying:"paused"}):o==="focused"?(s==="hovered"||s==="playing")&&t.setState({autoplaying:"focused"}):s==="playing"&&t.setState({autoplaying:"hovered"})}),M(C(t),"onDotsOver",function(){return t.props.autoplay&&t.pause("hovered")}),M(C(t),"onDotsLeave",function(){return t.props.autoplay&&t.state.autoplaying==="hovered"&&t.autoPlay("leave")}),M(C(t),"onTrackOver",function(){return t.props.autoplay&&t.pause("hovered")}),M(C(t),"onTrackLeave",function(){return t.props.autoplay&&t.state.autoplaying==="hovered"&&t.autoPlay("leave")}),M(C(t),"onSlideFocus",function(){return t.props.autoplay&&t.pause("focused")}),M(C(t),"onSlideBlur",function(){return t.props.autoplay&&t.state.autoplaying==="focused"&&t.autoPlay("blur")}),M(C(t),"render",function(){var o=(0,Ri.default)("slick-slider",t.props.className,{"slick-vertical":t.props.vertical,"slick-initialized":!0}),s=b(b({},t.props),t.state),l=(0,I.extractObject)(s,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),c=t.props.pauseOnHover;l=b(b({},l),{},{onMouseEnter:c?t.onTrackOver:null,onMouseLeave:c?t.onTrackLeave:null,onMouseOver:c?t.onTrackOver:null,focusOnSelect:t.props.focusOnSelect&&t.clickable?t.selectHandler:null});var p;if(t.props.dots===!0&&t.state.slideCount>=t.props.slidesToShow){var u=(0,I.extractObject)(s,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),x=t.props.pauseOnDotsHover;u=b(b({},u),{},{clickHandler:t.changeSlide,onMouseEnter:x?t.onDotsLeave:null,onMouseOver:x?t.onDotsOver:null,onMouseLeave:x?t.onDotsLeave:null}),p=W.default.createElement(Ii.Dots,u)}var E,T,v=(0,I.extractObject)(s,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);v.clickHandler=t.changeSlide,t.props.arrows&&(E=W.default.createElement(Tt.PrevArrow,v),T=W.default.createElement(Tt.NextArrow,v));var y=null;t.props.vertical&&(y={height:t.state.listHeight});var _=null;t.props.vertical===!1?t.props.centerMode===!0&&(_={padding:"0px "+t.props.centerPadding}):t.props.centerMode===!0&&(_={padding:t.props.centerPadding+" 0px"});var h=b(b({},y),_),O=t.props.touchMove,D={className:"slick-list",style:h,onClick:t.clickHandler,onMouseDown:O?t.swipeStart:null,onMouseMove:t.state.dragging&&O?t.swipeMove:null,onMouseUp:O?t.swipeEnd:null,onMouseLeave:t.state.dragging&&O?t.swipeEnd:null,onTouchStart:O?t.swipeStart:null,onTouchMove:t.state.dragging&&O?t.swipeMove:null,onTouchEnd:O?t.touchEnd:null,onTouchCancel:t.state.dragging&&O?t.swipeEnd:null,onKeyDown:t.props.accessibility?t.keyHandler:null},L={className:o,dir:"ltr",style:t.props.style};return t.props.unslick&&(D={className:"slick-list"},L={className:o}),W.default.createElement("div",L,t.props.unslick?"":E,W.default.createElement("div",ge({ref:t.listRefHandler},D),W.default.createElement(zi.Track,ge({ref:t.trackRefHandler},l),t.props.children)),t.props.unslick?"":T,t.props.unslick?"":p)}),t.list=null,t.track=null,t.state=b(b({},Ei.default),{},{currentSlide:t.props.initialSlide,slideCount:W.default.Children.count(t.props.children)}),t.callbackTimers=[],t.clickable=!0,t.debouncedResize=null;var a=t.ssrInit();return t.state=b(b({},t.state),a),t}return Bi(r,[{key:"didPropsChange",value:function(t){for(var a=!1,o=0,s=Object.keys(this.props);o<s.length;o++){var l=s[o];if(!t.hasOwnProperty(l)){a=!0;break}if(!(he(t[l])==="object"||typeof t[l]=="function")&&t[l]!==this.props[l]){a=!0;break}}return a||W.default.Children.count(this.props.children)!==W.default.Children.count(t.children)}}]),r}(W.default.Component);ye.InnerSlider=$i;var Qi=function(n){return n.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},Yi=Qi,Ki=Yi,Ji=function(n){var e=/[height|width]$/;return e.test(n)},Pt=function(n){var e="",r=Object.keys(n);return r.forEach(function(i,t){var a=n[i];i=Ki(i),Ji(i)&&typeof a=="number"&&(a=a+"px"),a===!0?e+=i:a===!1?e+="not "+i:e+="("+i+": "+a+")",t<r.length-1&&(e+=" and ")}),e},Vi=function(n){var e="";return typeof n=="string"?n:n instanceof Array?(n.forEach(function(r,i){e+=Pt(r),i<n.length-1&&(e+=", ")}),e):Pt(n)},Zi=Vi,cn={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=r(H);function r(a){return a&&a.__esModule?a:{default:a}}var i={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(o){return e.default.createElement("ul",{style:{display:"block"}},o)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(o){return e.default.createElement("button",null,o+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},t=i;n.default=t})(cn);var Ee,Dt;function eo(){if(Dt)return Ee;Dt=1;function n(e){this.options=e,!e.deferSetup&&this.setup()}return n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},Ee=n,Ee}var je,Lt;function un(){if(Lt)return je;Lt=1;function n(i,t){var a=0,o=i.length,s;for(a;a<o&&(s=t(i[a],a),s!==!1);a++);}function e(i){return Object.prototype.toString.apply(i)==="[object Array]"}function r(i){return typeof i=="function"}return je={isFunction:r,isArray:e,each:n},je}var Re,Ct;function to(){if(Ct)return Re;Ct=1;var n=eo(),e=un().each;function r(i,t){this.query=i,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(i);var a=this;this.listener=function(o){a.mql=o.currentTarget||o,a.assess()},this.mql.addListener(this.listener)}return r.prototype={constuctor:r,addHandler:function(i){var t=new n(i);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(i){var t=this.handlers;e(t,function(a,o){if(a.equals(i))return a.destroy(),!t.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(i){i.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var i=this.matches()?"on":"off";e(this.handlers,function(t){t[i]()})}},Re=r,Re}var ze,Mt;function no(){if(Mt)return ze;Mt=1;var n=to(),e=un(),r=e.each,i=e.isFunction,t=e.isArray;function a(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return a.prototype={constructor:a,register:function(o,s,l){var c=this.queries,p=l&&this.browserIsIncapable;return c[o]||(c[o]=new n(o,p)),i(s)&&(s={match:s}),t(s)||(s=[s]),r(s,function(u){i(u)&&(u={match:u}),c[o].addHandler(u)}),this},unregister:function(o,s){var l=this.queries[o];return l&&(s?l.removeHandler(s):(l.clear(),delete this.queries[o])),this}},ze=a,ze}var Ie,Et;function ro(){if(Et)return Ie;Et=1;var n=no();return Ie=new n,Ie}(function(n){function e(g){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},e(g)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=s(H),i=ye,t=s(Zi),a=s(cn),o=f;function s(g){return g&&g.__esModule?g:{default:g}}function l(){return l=Object.assign||function(g){for(var m=1;m<arguments.length;m++){var P=arguments[m];for(var j in P)Object.prototype.hasOwnProperty.call(P,j)&&(g[j]=P[j])}return g},l.apply(this,arguments)}function c(g,m){var P=Object.keys(g);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(g);m&&(j=j.filter(function(k){return Object.getOwnPropertyDescriptor(g,k).enumerable})),P.push.apply(P,j)}return P}function p(g){for(var m=1;m<arguments.length;m++){var P=arguments[m]!=null?arguments[m]:{};m%2?c(Object(P),!0).forEach(function(j){L(g,j,P[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(P)):c(Object(P)).forEach(function(j){Object.defineProperty(g,j,Object.getOwnPropertyDescriptor(P,j))})}return g}function u(g,m){if(!(g instanceof m))throw new TypeError("Cannot call a class as a function")}function x(g,m){for(var P=0;P<m.length;P++){var j=m[P];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(g,j.key,j)}}function E(g,m,P){return m&&x(g.prototype,m),P&&x(g,P),Object.defineProperty(g,"prototype",{writable:!1}),g}function T(g,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function");g.prototype=Object.create(m&&m.prototype,{constructor:{value:g,writable:!0,configurable:!0}}),Object.defineProperty(g,"prototype",{writable:!1}),m&&v(g,m)}function v(g,m){return v=Object.setPrototypeOf||function(j,k){return j.__proto__=k,j},v(g,m)}function y(g){var m=O();return function(){var j=D(g),k;if(m){var S=D(this).constructor;k=Reflect.construct(j,arguments,S)}else k=j.apply(this,arguments);return _(this,k)}}function _(g,m){if(m&&(e(m)==="object"||typeof m=="function"))return m;if(m!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return h(g)}function h(g){if(g===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}function O(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function D(g){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(P){return P.__proto__||Object.getPrototypeOf(P)},D(g)}function L(g,m,P){return m in g?Object.defineProperty(g,m,{value:P,enumerable:!0,configurable:!0,writable:!0}):g[m]=P,g}var A=(0,o.canUseDOM)()&&ro(),z=function(g){T(P,g);var m=y(P);function P(j){var k;return u(this,P),k=m.call(this,j),L(h(k),"innerSliderRefHandler",function(S){return k.innerSlider=S}),L(h(k),"slickPrev",function(){return k.innerSlider.slickPrev()}),L(h(k),"slickNext",function(){return k.innerSlider.slickNext()}),L(h(k),"slickGoTo",function(S){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return k.innerSlider.slickGoTo(S,q)}),L(h(k),"slickPause",function(){return k.innerSlider.pause("paused")}),L(h(k),"slickPlay",function(){return k.innerSlider.autoPlay("play")}),k.state={breakpoint:null},k._responsiveMediaHandlers=[],k}return E(P,[{key:"media",value:function(k,S){A.register(k,S),this._responsiveMediaHandlers.push({query:k,handler:S})}},{key:"componentDidMount",value:function(){var k=this;if(this.props.responsive){var S=this.props.responsive.map(function(G){return G.breakpoint});S.sort(function(G,B){return G-B}),S.forEach(function(G,B){var Q;B===0?Q=(0,t.default)({minWidth:0,maxWidth:G}):Q=(0,t.default)({minWidth:S[B-1]+1,maxWidth:G}),(0,o.canUseDOM)()&&k.media(Q,function(){k.setState({breakpoint:G})})});var q=(0,t.default)({minWidth:S.slice(-1)[0]});(0,o.canUseDOM)()&&this.media(q,function(){k.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(k){A.unregister(k.query,k.handler)})}},{key:"render",value:function(){var k=this,S,q;this.state.breakpoint?(q=this.props.responsive.filter(function(Z){return Z.breakpoint===k.state.breakpoint}),S=q[0].settings==="unslick"?"unslick":p(p(p({},a.default),this.props),q[0].settings)):S=p(p({},a.default),this.props),S.centerMode&&(S.slidesToScroll>1,S.slidesToScroll=1),S.fade&&(S.slidesToShow>1,S.slidesToScroll>1,S.slidesToShow=1,S.slidesToScroll=1);var G=r.default.Children.toArray(this.props.children);G=G.filter(function(Z){return typeof Z=="string"?!!Z.trim():!!Z}),S.variableWidth&&(S.rows>1||S.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),S.variableWidth=!1);for(var B=[],Q=null,F=0;F<G.length;F+=S.rows*S.slidesPerRow){for(var ke=[],Y=F;Y<F+S.rows*S.slidesPerRow;Y+=S.slidesPerRow){for(var ot=[],U=Y;U<Y+S.slidesPerRow&&(S.variableWidth&&G[U].props.style&&(Q=G[U].props.style.width),!(U>=G.length));U+=1)ot.push(r.default.cloneElement(G[U],{key:100*F+10*Y+U,tabIndex:-1,style:{width:"".concat(100/S.slidesPerRow,"%"),display:"inline-block"}}));ke.push(r.default.createElement("div",{key:10*F+Y},ot))}S.variableWidth?B.push(r.default.createElement("div",{key:F,style:{width:Q}},ke)):B.push(r.default.createElement("div",{key:F},ke))}if(S==="unslick"){var dn="regular slider "+(this.props.className||"");return r.default.createElement("div",{className:dn},G)}else B.length<=S.slidesToShow&&(S.unslick=!0);return r.default.createElement(i.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},S),B)}}]),P}(r.default.Component);n.default=z})(Ht);(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=r(Ht);function r(t){return t&&t.__esModule?t:{default:t}}var i=e.default;n.default=i})(It);const io=pn(It),oo=w(mn)`
`,ao=w(io)`
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
`,so=w.div`
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

`,lo=w.h3`
font-family: 'Inter';
text-transform: uppercase;
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
`,co=w.div`

`,uo=w.div`

`,fo=w.div`
display: flex;
column-gap: 18px;
`,po=w.h3`
font-family: 'Inter';
font-weight: 700;
font-size: 18px;
line-height: 18px;
margin-bottom: 13px;
color: #343434;
`,ho=w.img`
width: 50px;
height: 50px;
border-radius: 50px;
`,go=w.div`
margin-bottom: 24px;
`,vo=w.p`
font-family: 'Inter';
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
`,mo=w.div`
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
`,yo=w.button`
all: initial;
cursor: pointer;
width: 61px;
height: 61px;
display: flex;
justify-content: center;
align-items: center;
transition: transform 0.2s ease-in-out;
@media screen and (max-width: 767px) {
    width: 50px;
    height: 50px;
      }
      &:active {
        transform: translateX(-5px);
      }
`,bo=w.button`
all: initial;
cursor: pointer;
width: 61px;
height: 61px;
display: flex;
justify-content: center;
align-items: center;
transition: transform 0.2s ease-in-out;
@media screen and (max-width: 767px) {
    width: 50px;
    height: 50px;
      }
      &:active {
        transform: translateX(5px);
      }
`,jt=w.h3`
font-family: 'Inter';
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
`,wo="/GooseTrack-with-backend-3.0/assets/arrowRight-56a99235.svg",xo="/GooseTrack-with-backend-3.0/assets/arrowLeft-8dc03b2d.svg";async function So(){try{const n=await hn.get("https://project-backend-8dts.onrender.com/reviews");return n==null?void 0:n.data}catch{return"error"}}const ko="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAQMAAADOtka5AAAABlBMVEXQ0NCxsbGd3OvkAAAE2klEQVR42u2csXLbMAyGxfByHDqoHXpdesfX6Ma+ROc+Cv04vevaB+CjaM6kobnToIpVLMsmacoBCMeWHfxbYvMTSIAkCCqpKhaLxWKxWCwWi8VisVgsFovFYrFYrHPqi38mtX/03rcUgBkBA6G98C9y5YB6C+jKAXYL8OWAqb3flLZXO0CxH/QO0FGc+KKe5ETCKB4AG9oYev/0hzSGxY4wAWAgxKEvnRAibF8SCzICeIoTCgF1DHAkLxY50njiKNoYMJSuJsWjKFLAhgpoaGFwBkBLiyO8H8kAkwKGSwOsJ0YSGXDUHhmK4hjgqIDmsgBJBahjQHt1QEebSxcH6GNATwUMl7XAUC3IADxxOViBBRcGZNrj1jQG5NZU5LpOBYjbB8h1WtCwBSgLJFvAAAYsz0YeA7bgTixwPAYrGAO24N1ZcAeJ5r3myrcViffaBbYAZ4FapwUMwAHqHKC9KQvIAH37FmQB3SUBZp0AzAWDvX1Arj3qhiILQNwPCKoF4m0sQFTnJRWg3gjgaAsSZlkmA3Qe0NJmMwZg84COCuiJgQifDGTAQhzBQ5EM0EuAhhYGYMDSGIIDQS4CetJUgi9qyxYA3XAC0FB2hbMAHDEOfHUhgCLGwTKgJa4H8GXZeuLuaogr0tIgwJd18u6cH4R/1HQfc+R5zA0hogdV9fP872Q9VTh9SNr/rbD6HPX/V4XXw+9i84+ioaEC3NUt4C5wF9bRBTKgLQTQ/nyheqiCbf17AeCrCADfCgC9DHZVg2+v2hBQ42NJt8EevanxL/97FwIk+t196V2wwzqJDibtN8G5wwn0e+tjQqTD3AT70rcaRz4CWOSc1mPw2PCoYpB98McAj/PB2MaGCZ7GTWo9jVsYirhq3vjwJkp4t6kjLsHJAOBZVj0Fn49CEVuA2ET5rhOoXHlvdJDjYbJ1tQTAHL6H+Aw/RUWPGII+BSD+WFJOLXR8VNDwhP/DBFAZQAOOgrFF7Mbptx14CEaAiA8rNfzgOO+n8XFLgU89as4pTASQ4FSjnh9louKJAFdRzAyoowMfHGDnQ6qK6wbQw6vYf1GUAeT+lCviQ7MFZjv1oVJgo7qBwQNMBtABndBH59c2+QDghDYCNIefBlggT5bKKNXVMDfI4JkiqlwoWN4cAvZuwABUBtAff/Jq5cCFtdE2tO213UWH1Q4VthGwquYO8LzNSA7dHh//AwawYcFB7M1R4FqQjVL0vRN0AaCff+qj0tQACsT5mzoiQUJRxJWzOlrPIOUoGX9T7ZwgwGVREdd9xK5FXWTBbHpS2XJgQDcN3pDUBxtwIbCf3NAlxbkGXoU7AHwZYHJDkxTGWjhgmkQuqXB28NuRZjp4JFgEoJsBBg4waSHb9GmFFAHYTqfUCa9sLSYtRKvUCSiAmwAKAbBpGVVs0hrvgAC0ObMwgC5bpkZcrwwnfgm7n8leN2AAm1ytHwNocoV2NEAjACJ3P2gR1wwidyniiQBBAcQbMwAgM7dzNebGLvdvEzTJgi5zYeOQAE8CDJmLNxTAZ269GuDWuHtcTbTAaaIFrSUCOioAeed2fUANAbSrtoABJ15hgSZJ17fgRgA9OMsrsMBcxIJ1AywEMDDgJMCDtGrAJ4g+ViwWi8VisVgsFovFYrFYLBaLxWKx3rX+A1mjeLSdN7XXAAAAAElFTkSuQmCC";const Oo={infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,initialSlide:0,responsive:[{breakpoint:1440,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]},To=()=>{const[n,e]=H.useState([]);H.useEffect(()=>{(async()=>{const a=await So();e(a)})()},[]);const r=H.useRef(null),i=()=>{r.current&&r.current.slickNext()},t=()=>{r.current&&r.current.slickPrev()};return d.jsxs(d.Fragment,{children:[d.jsx(lo,{children:"Reviews"}),d.jsx(co,{children:d.jsx(ao,{ref:r,...Oo,children:n?n.length>0&&n!=="error"?n.map(a=>d.jsxs(so,{children:[d.jsxs(fo,{children:[d.jsx(ho,{src:a.owner.avatarURL.length===0?ko:a.owner.avatarURL,alt:"user avatar"}),d.jsxs(uo,{children:[d.jsx(po,{children:a.owner.userName}),d.jsx(go,{children:d.jsx(oo,{name:"hover-feedback",value:a.rating,readOnly:!0})})]})]}),d.jsx(vo,{children:a.text})]},a._id)):n==="error"?d.jsx(jt,{children:"Something was wrong, reload this page"}):d.jsx(jt,{children:"We don't have any reviews yet."}):d.jsx("h3",{children:"Loading..."})})}),n.length>0&&n!=="error"&&d.jsxs(mo,{children:[d.jsx(yo,{onClick:t,children:d.jsx("img",{src:xo,alt:"arrowLeft"})}),d.jsx(bo,{onClick:i,children:d.jsx("img",{src:wo,alt:"arrowRight"})})]})]})},_o=w.div`
    padding: 40px 20px;
    max-width: 1000px;
    height: auto;
    display: flex;
    flex-direction: column;
    font-size: 24px;
    align-items: center;
    overflow: hidden;
    overflow-y: auto;
    font-weight: bold;
    background-color: var(--auth-background-color);

`,Ao=w.h2`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
`,Po=w.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    flex-wrap: wrap;
    gap: 15px;
`,Do=w.div`
    background: var(--main-background-color);
    padding: 5px;
    border-radius: 10px;

`,Lo=w.a`
  text-decoration: none;
`,Co=w.div`
    position: relative;
    width: 130px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;

`,Mo=w.img`
    width: 100px; 
    height: 100px; 
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
`,Eo=w.div`
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`,jo=w.h3`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: var(--title-text-main-color);

`,Ro=w.p`
    font-size: 14px;
    color: var(--secondary-text-color); 
    text-align: center;

`,zo=w.img`
    position: absolute;
    width: 35px;
    height: auto;
    top: -5px;
    right: -5px;
`,Io="/GooseTrack-with-backend-3.0/assets/Artymuk-f535cd69.png",Ho="/GooseTrack-with-backend-3.0/assets/Grybanov-8c163d08.png",Go="/GooseTrack-with-backend-3.0/assets/Ilkevych-b529ad84.png",Wo="/GooseTrack-with-backend-3.0/assets/Pliuto-0340edf5.png",No="/GooseTrack-with-backend-3.0/assets/Stepanenko-ce0c0e47.png",Bo="/GooseTrack-with-backend-3.0/assets/Tarasenko-cf172f05.png",Fo="/GooseTrack-with-backend-3.0/assets/Yehorova-2e13d0aa.png",Xo="/GooseTrack-with-backend-3.0/assets/Zamriy-929bbaf5.jpg",qo="/GooseTrack-with-backend-3.0/assets/Podlesny-a19958aa.png",Rt="/GooseTrack-with-backend-3.0/assets/nophoto-bea9db44.png",Uo="/GooseTrack-with-backend-3.0/assets/Kravchenko-25657396.jpg",$o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAArNJREFUWEftl8urT1EUxz/XK8+BolwirxGlZEhKNyUhj0iUMuMfMDIz4S9gZkQSSggx8ZpJBphRHqEoA497vfWtfbSte87Za+9jcAdnDX+/9f2uz1ln77X3GWCMx8AY56MH7PqG+g72HXR2QEtlJjA75L8DPgC/nfrGtC5rUNr9wDFgVkOF98Ah4GQpaCngbuAUMM5Z+BewFzjjzP+bVgJ4F1idWyjk3wPW5GhzAZ8Ci3MK1OTKY6nXIwfwJjAUjLX4c7SSxRp5rfdAeotsAK5GhmuBO8Am4AIwEfgBfAk5U4EJwHdgO3AZkOZW5CHP6ylIL+C3AFH5zQA+RebaLNoIcdjfpgMfowTBT/ofgBuBK8ZI804jJCc0ijQf45B3/GZG+Xk6+AxYZJQLgJc5dMB84IXRyHtJm48H0J4GWnM7MuGqdGm3GW0rQwrQrht564n15CWhEaUxE4ddz//8mQKsM5wCjJTQAZOBYaNtfeAU4DLgcc4TJ8Dr3shy4EmTLgU4D3hlxCuBh4UdlPaB0arG61JADWDNwDjOATsLAaW1G0yzUDOxNlIdlEgnxHij1klh11KKWZrPJulnOHEatR7Ai8AW46BTZNCcJm2A2qlvgGkmSd5b24QewDnBXD5zgaPAvmB6DTgMPAK+mkLa7SuAIy0XAz3k266A0msna0drPaoLGribI+NVNYtfv91vKa6dqx3cGp4OykBQ1eWguirdANaFHaijry7avkk0cuyaHOXhBZRQV6tLwcF7WdANp66Guq8rWDJyAGV2ADgeXLUWz4fNUoHbgnWAB4ETSbKQkAsomb4pbked0Wts+niKAZWnS6u+adxRAihzzcXTwK5wlU8BngX2AJp7WVEKWBURmO55zxuqLgx3QHvbdkN2BXQXKk3sAUs7V+n6DvYd7NqBrvo/WEdxKd6X58EAAAAASUVORK5CYII=",Qo=[{name:"Maksym Stepanenko",role:"Team Lead Backend",githubLink:"https://github.com/MaksymStepanenko",photoLink:No},{name:"Igor Grybanov",role:"Team Lead Frontend",githubLink:"https://github.com/IngvarVG76",photoLink:Ho},{name:"Yuliia Yehorova",role:"Scrum Master Backend developer",githubLink:"https://github.com/YYuliia1102",photoLink:Fo},{name:"Yaroslav Zamrii",role:"Backend developer",githubLink:"https://github.com/YaroslavZamrii",photoLink:Xo},{name:"Julia Tarasenko",role:"Frontend developer",githubLink:"https://github.com/JuliaTarasenko00",photoLink:Bo},{name:"Iryna Artymuk",role:"Frontend developer",githubLink:"https://github.com/Iryna-Artymuk",photoLink:Io},{name:"Volodymyr Pliuto",role:"Frontend developer",githubLink:"https://github.com/VovaPliuto",photoLink:Wo},{name:"Oleg Podlesny",role:"Frontend developer",githubLink:"https://github.com/SpaceProdigy",photoLink:qo},{name:"Sergey Kravchenko",role:"Frontend developer",githubLink:"https://github.com/Serzh1006",photoLink:Uo},{name:"Yurii Ilkevych",role:"Frontend developer",githubLink:"https://github.com/Yurii-Ilkevych",photoLink:Go},{name:"Oleksandr Martyniuk",role:"Frontend developer",githubLink:"https://github.com/Derovse",photoLink:Rt},{name:"Egor Krechuniak",role:"Frontend developer",githubLink:"https://github.com/Egor4ik2",photoLink:Rt}],Yo=()=>d.jsxs(_o,{children:[d.jsx(Ao,{children:"Developers"}),d.jsx(Po,{children:Qo.map((n,e)=>d.jsx(Do,{children:d.jsxs(Co,{children:[d.jsx(Mo,{src:n.photoLink,alt:n.name}),d.jsxs(Eo,{children:[d.jsx(jo,{children:n.name}),d.jsx(Ro,{children:n.role})]}),d.jsx(Lo,{href:n.githubLink,target:"_blank",rel:"noreferrer noopener",children:d.jsx(zo,{src:$o})})]})},e))})]}),Ko=w.div`
  margin-top: 24px;
  height: 74px;
  background-color: #DCEBF7;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-width: 320px;
@media screen and (max-width: 767px) {
    height: 54px;
    margin-top: 16px;
      }
      @media screen and (min-width: 768px) and (max-width: 1399px) {
 
      }
      @media screen and (min-width: 1440px) {

      }
`,Jo=w.h3`
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color:  ${({theme:n})=>n.colors.textColorLowTask};;
@media screen and (max-width: 590px) {
  font-size: 10px;
} 

@media screen and (min-width: 591px) and (max-width:  767px) {
font-size: 12px;
} 

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,Vo=w.a`
  transition: color var(--animation);
  text-decoration: underline;
  cursor: pointer;
  color: var(--task-high-color);


  &:hover {
   color: var(--title-text-main-color);
   text-decoration: underline;
  };

`,Zo=({onClickModal:n,modal:e})=>d.jsxs(Ko,{children:[d.jsxs(Jo,{children:["© 2023 | All Rights Reserved | The project was created by ",d.jsx(Vo,{onClick:n,children:"Adamant Team"})]}),e&&d.jsx(gn,{onClose:n,children:d.jsx(Yo,{modal:e,onClickModal:n})})]}),ea=w.body`
background-color: #F7F6F9;
`,ia=()=>{const[n,e]=H.useState(!1),r=H.useCallback(()=>{e(!n),n?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[n]);return d.jsxs(ea,{children:[d.jsx(Rn,{}),d.jsx(sr,{}),d.jsx(To,{}),d.jsx(Zo,{onClickModal:r,modal:n})]})};export{ia as MainPage,ia as default};
