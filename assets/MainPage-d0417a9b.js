import{s as i,L as G,r as s,j as e}from"./index-d2031c57.js";import{b as y}from"./index.esm-39c5ab07.js";const S=i.img`
  width: 150px;
  height: 149px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) {
    width: 142px;
    height: 142px;
  }
`,_=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-task-low-priority);
  height: ${o=>o.height}px;
`,M=i.h1`
  color: var(--white-color);
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
  @media screen and (min-width: 768px) and (max-width: 1399px) {
    font-size: 100px;
    line-height: 130px;
  }
`,z=i.div`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    row-gap: 16px;
  }
`,X=i(G)`
  color: var(--white-color);
  font-weight: 600;
  line-height: 18px;
  font-size: 14px;
  position: relative;

  @media screen and (max-width: 767px) {
    font-size: 12px;
    ine-height: 14px;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: var(--white-color);
  }
  transition: transform 0.2s;

  &:active {
    transform: translateY(3px);
  }
`,I=i(G)`
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
  text-align: inherit;
  cursor: pointer;

  background-color: var(--white-color);
  border-radius: 16px;
  padding: 14px 22px;
  display: flex;
  column-gap: 6px;

  transition: transform 0.2s;

  &:active {
    transform: translateY(3px);
  }
`,R=i.h2`
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: var(--color-task-low-priority);
`,F=i(y)`
  width: 18px;
  height: 18px;
  color: var(--color-task-low-priority);
`,w="/GooseTrack-with-backend-3.0/assets/Tab_mainGoose-75fc3bc2.png",E="/GooseTrack-with-backend-3.0/assets/Tab@2x_mainGoose-49dc0cb7.png",L="/GooseTrack-with-backend-3.0/assets/Tab@3x_mainGoose-7e173b27.png",C="/GooseTrack-with-backend-3.0/assets/Tab_mainGoose-75fc3bc2.png",B="/GooseTrack-with-backend-3.0/assets/Tab@2x_mainGoose-49dc0cb7.png",P="/GooseTrack-with-backend-3.0/assets/Tab@3x_mainGoose-7e173b27.png",W="/GooseTrack-with-backend-3.0/assets/Mob_mainGoose-1c79133e.png",A="/GooseTrack-with-backend-3.0/assets/Mob@2x_mainGoose-cfdbf16c.png",N="/GooseTrack-with-backend-3.0/assets/Mob@3x_mainGoose-e41fe175.png",U=()=>{const[o,d]=s.useState(window.innerWidth),[t,p]=s.useState(window.devicePixelRatio),[h,n]=s.useState(w);return s.useEffect(()=>{o<=767?t==1?n(W):t==2?n(A):n(N):o>=768&&o<=1399?t==1?n(C):t==2?n(B):n(P):t==1?n(w):t==2?n(E):n(L);const c=()=>{d(window.innerWidth),p(window.devicePixelRatio)};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[o,t]),e.jsx(e.Fragment,{children:e.jsxs(_,{height:window.innerHeight,children:[e.jsx(S,{src:h,alt:"main-Goose"}),e.jsx(M,{children:"GooseTrack"}),e.jsxs(z,{children:[e.jsx(X,{to:"/register",children:"Sign up"}),e.jsxs(I,{to:"/login",children:[e.jsx(R,{children:"Log in"}),e.jsx(F,{})]})]})]})})},H=i.div`
padding-top: 64px;
padding-bottom: 64px;
@media screen and (max-width: 767px) {
padding-left: 20px;
padding-right: 20px;
      }
      @media screen and (min-width: 768px) and (max-width: 1399px) {
        padding-left: 32px;
        padding-right: 32px;
      }
      @media screen and (min-width: 1400px) {
        padding-left: 128px;
        padding-right: 128px;
      }

`,O=i.div`
margin-bottom: 64px;

@media screen and (min-width: 1400px) {
display: flex;
column-gap: 228px;
align-items: center;
  }
`,Y=i.div`
margin-bottom: 64px;
@media screen and (min-width: 1400px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 228px;
    align-items: center;
  }
`,q=i.div`

@media screen and (min-width: 1400px) {
    display: flex;
column-gap: 228px;
align-items: center;
  }
`,x=i.h2`
font-weight: 700;
font-size: 104px;
line-height: 104px;
margin-bottom: 20px;
color: var(--color-task-low-priority);
@media screen and (max-width: 767px) {
    font-weight: 700;
font-size: 80px;
line-height: 80px;
    margin-bottom: 14px;
}

`,f=i.h3`
font-weight: 700;
font-size: 40px;
line-height: 44px;
margin-bottom: 14px;
color: var(--color-task-low-priority);
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
`,l=i.h3`
font-family: inherit sans-serif;
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
`,g=i.p`
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #111111E5;

@media screen and (max-width: 767px) {
    margin-bottom: 40px;
} 
@media screen and (min-width: 768px) and (max-width: 1399px) {
    margin-bottom: 48px;
    width: 275px;
}
`,m=i.img`
  width: 335px;
  height: 457px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

        @media screen and (min-width: 768px) and (max-width: 1399px) {
            width: 704px;
            height: 700px;
          }
          @media screen and (min-width: 1400px) {
            width: 604px;
            height: 700px;
          }
`,V=i.div`

`,k="/GooseTrack-with-backend-3.0/assets/Desk_FirstDescription-min-602d15b6.png",$="/GooseTrack-with-backend-3.0/assets/Desk@2x_FirstDescription-min-bf06d3bb.png",J="/GooseTrack-with-backend-3.0/assets/Desk@3x_FirstDescription-min-e4611bb4.png",K="/GooseTrack-with-backend-3.0/assets/Tab_FirstDescription-min-79b91b56.png",Q="/GooseTrack-with-backend-3.0/assets/Tab@2x_FirstDescription-min-5973d134.png",Z="/GooseTrack-with-backend-3.0/assets/Tab@3x_FirstDescription-min-bf59d43a.png",ee="/GooseTrack-with-backend-3.0/assets/Mob_FirstDescription-min-fb0df188.png",T="/GooseTrack-with-backend-3.0/assets/Mob@3x_FirstDescription-min-8c200e23.png",D="/GooseTrack-with-backend-3.0/assets/Desk_SecondDescription-min-0cb1a07e.png",ie="/GooseTrack-with-backend-3.0/assets/Desk@2x_SecondDescription-min-6c50aabf.png",ne="/GooseTrack-with-backend-3.0/assets/Desk@3x_SecondDescription-min-81a96413.png",u="/GooseTrack-with-backend-3.0/assets/Tab_SecondDescription-min-50e9836f.png",te="/GooseTrack-with-backend-3.0/assets/Tab@2x_SecondDescription-min-cd4be521.png",oe="/GooseTrack-with-backend-3.0/assets/Tab@3x_SecondDescription-min-0fdd1260.png",se="/GooseTrack-with-backend-3.0/assets/Mob_SecondDescription-min-aff5675d.png",ae="/GooseTrack-with-backend-3.0/assets/Mob@2x_SecondDescription-min-f90949e5.png",re="/GooseTrack-with-backend-3.0/assets/Mob@3x_SecondDescription-min-cdd9a749.png",v="/GooseTrack-with-backend-3.0/assets/Desk_ThirdDescription-min-c3acdd71.png",ce="/GooseTrack-with-backend-3.0/assets/Desk@2x_ThirdDescription-min-33ef0510.png",de="/GooseTrack-with-backend-3.0/assets/Desk@3x_ThirdDescription-min-54162a09.png",pe="/GooseTrack-with-backend-3.0/assets/Tab@2x_ThirdDescription-min-ca7caa5c.png",he="/GooseTrack-with-backend-3.0/assets/Tab@3x_ThirdDescription-min-163f8170.png",xe="/GooseTrack-with-backend-3.0/assets/Mob_ThirdDescription-min-7a2a7ad8.png",le="/GooseTrack-with-backend-3.0/assets/Mob@2x_ThirdDescription-min-83710fb8.png",ge="/GooseTrack-with-backend-3.0/assets/Mob@3x_ThirdDescription-min-305fda3c.png",me=()=>{const[o,d]=s.useState(window.innerWidth),[t,p]=s.useState(window.devicePixelRatio),[h,n]=s.useState(k),[c,a]=s.useState(D),[j,r]=s.useState(v);return s.useEffect(()=>{o<=767?t==1?(n(ee),a(se),r(xe)):t==2?(n(T),a(ae),r(le)):(n(T),a(re),r(ge)):o>=768&&o<=1399?t==1?(n(K),a(u),r(u)):t==2?(n(Q),a(te),r(pe)):(n(Z),a(oe),r(he)):t==1?(n(k),a(D),r(v)):t==2?(n($),a(ie),r(ce)):(n(J),a(ne),r(de));const b=()=>{d(window.innerWidth),p(window.devicePixelRatio)};return window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)}},[o,t]),e.jsxs(H,{children:[e.jsxs(O,{children:[e.jsxs("div",{children:[e.jsx(x,{children:"1."}),e.jsx(f,{children:"Calendar"}),e.jsx(l,{children:"VIEW"}),e.jsx(g,{children:"GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout."})]}),e.jsx(m,{src:h,alt:"image Description Calendar"})]}),e.jsxs(Y,{children:[e.jsxs(V,{children:[e.jsx(x,{children:"2."}),e.jsx(l,{children:"SIDEBAR"}),e.jsx(g,{children:"GooseTrack offers easy access to your account settings, calendar, and filters. The “My Account“ section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks."})]}),e.jsx(m,{src:c,alt:"image Description Sidebar"})]}),e.jsxs(q,{children:[e.jsxs("div",{children:[e.jsx(x,{children:"3."}),e.jsx(f,{children:"all in"}),e.jsx(l,{children:"ONE"}),e.jsx(g,{children:"GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack."})]}),e.jsx(m,{src:j,alt:"image Description One"})]})]})},be=i.h3`
font-family: inherit sans-serif;
text-align: center;
font-weight: 700;
font-size: 40px;
line-height: 44px;
margin-bottom: 50px;
color: var(--color-task-low-priority);

@media screen and (max-width: 767px) {
    font-size: 28px;
line-height: 32px;
margin-bottom: 40px;
} 
`,we=i.div`
border-radius: 8px;
border: 1px;
border-color: black;
padding: 32px 32px 32px 50px;
width: 580px;
margin-left: auto;
margin-right: auto;

@media screen and (max-width: 767px) {
padding: 24px;
width: 335px;
} 


`,fe=i.div`

`,ke=i.h3`
font-family: inherit sans-serif;
font-weight: 700;
font-size: 18px;
line-height: 18px;
margin-bottom: 13px;
color: #343434;
`,Te=i.img`
width: 50px;
height: 50px;
border-radius: 50px;
`,De=i.div`
margin-bottom: 24px;
`,ue=i.p`
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #111111B2;
`,ve=()=>e.jsxs(e.Fragment,{children:[e.jsx(be,{children:"Reviews"}),e.jsxs(we,{children:[e.jsx(Te,{}),e.jsxs(fe,{children:[e.jsx(ke,{children:"User Name"}),e.jsx(De,{}),e.jsx(ue,{children:"GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended."})]})]})]}),ye=()=>e.jsxs("div",{children:[e.jsx(U,{}),e.jsx(me,{}),e.jsx(ve,{})]});export{ye as MainPage,ye as default};
