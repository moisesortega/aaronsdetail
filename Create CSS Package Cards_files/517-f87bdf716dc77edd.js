"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[517],{70517:function(e,t,s){s.d(t,{Z:function(){return J}});var r=s(39324),n=s(71209),a=s(22830),i=s(4337),o=s(35250),l=s(70596),c=s(32877),u=s(78931),d=s(32542),f=s(32148),h=s(19841),m=s(70079),x=s(1454),g=s(70671),p=s(32004),v=s(94968),y=s(21389),j=s(67273),b=s(46020),w=s(37952),k=s(45635),N=s(20522),M=s(12346),_=s(13090),C=s(86273),P=s(21722),S=s(38104),Z=s(95137),F=s(18719),T=s(73426),I=s(60554),W=s(35588),E=s(1821),O=s(88798),z=s(97296),A=s(5268),R=s(16920);function L(){var e=(0,i._)(["group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm"]);return L=function(){return e},e}function D(e){var t=e.showFreeTrialLoadingPayment,s=e.handleGetPaymentLink,i=(0,g.Z)(),l=(0,A.a)(["claimedReferralInvite"],function(){return Z.ZP.getClaimedReferralInvite()},{refetchOnMount:!1,refetchOnWindowFocus:!1,refetchInterval:!1,refetchOnReconnect:!1}),c=l.data,u=l.isLoading,d=l.isSuccess,f=null==c?void 0:c.invite_code,v=(0,a._)((0,m.useState)(!1),2),y=v[0],j=v[1];if((0,m.useEffect)(function(){f&&!y&&d&&(j(!0),R.m9.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"),F.A.logEvent(T.M.chatgptReferralShowClaimedSidebartMenuPromo))},[f,j,y,d]),!f||u||!d)return null;var b=f.invite_metadata.invite_data,w=(null==b?void 0:b.referral_trial_duration_months)?(null==b?void 0:b.referral_trial_duration_months)>1?i.formatMessage(H.monthsOfBenefit,{referralTrialDurationMonths:null==b?void 0:b.referral_trial_duration_months}):i.formatMessage(H.daysOfBenefit,{referralTrialDurationDays:null==b?void 0:b.referral_trial_duration_days}):null;return(0,o.jsx)(z.E.div,{className:(0,h.default)("relative",{"cursor-progress opacity-50":t}),layout:"position",initial:{y:-10,opacity:1},animate:{y:0,opacity:1,transition:{duration:.1,ease:"easeIn"}},children:(0,o.jsxs)(B,{className:(0,h.default)(t&&"opacity-75"),onClick:function(){t||((0,W.Vk)(!0),s())},children:[(0,o.jsxs)("div",{className:"flex w-full flex-row items-center justify-start gap-3 ",children:[(0,o.jsx)(x.E33,{className:"icon-sm shrink-0"}),(0,o.jsx)(p.Z,(0,n._)((0,r._)({},H.freeTrialCta),{values:{duration:w}}))]}),!t&&(0,o.jsx)(x.q5L,{onClick:function(e){e.stopPropagation(),(0,W.zG)(!0),(0,W.H1)(!0)},className:"icon-md shrink-0 rounded-full p-0.5 text-gray-400 opacity-50  transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500  group-hover:opacity-100"}),(0,o.jsx)("span",{className:"absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"})]})})}var B=y.Z.a(L()),H=(0,v.vU)({freeTrialCta:{id:"PaymentMenuItems.freeTrialCta",defaultMessage:"Get {duration}!",description:"Get free trial menu item"},monthsOfBenefit:{id:"FreeTrialMenuItem.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {one month free} other {# months free}}",description:"Duration of the referral trial benefits in months"},daysOfBenefit:{id:"FreeTrialMenuItem.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {one day free} other {# days free}}",description:"Duration of the referral trial benefits in days"}}),U=s(15329),q=s(21739),G=s(38566);function V(){var e,t=(0,I.useRouter)(),s=(0,g.Z)(),n=(0,u.hz)(),a=(0,u.$T)(),i=(0,u.WY)(),l=(0,u.Zp)(),d=(e=(0,P._)(function(){var e;return(0,S.Jh)(this,function(r){switch(r.label){case 0:(0,W.Vk)(!0),F.A.logEvent(T.M.clickAccountPaymentCheckout),r.label=1;case 1:return r.trys.push([1,3,4,5]),[4,Z.ZP.getCheckoutLink()];case 2:return e=r.sent(),t.push(e.url),[3,5];case 3:return r.sent(),O.m.warning(s.formatMessage(Q.paymentErrorWarning),{hasCloseButton:!0}),(0,W.Vk)(!1),[3,5];case 4:return[7];case 5:return[2]}})}),function(){return e.apply(this,arguments)}),f=(0,W.tS)(function(e){return e.didCloseFreeTrial}),h=(0,W.tS)(function(e){return e.showFreeTrialLoadingPayment}),v=!f&&l,y=!i&&!n.has("disable_upgrade_ui"),j=(0,u.KQ)(),b=(0,q.g)(function(e){return e.flags.isUserInCanPayGroup}),w=(0,u.ec)(u.F_.isBusinessWorkspace),k=(0,W.tS)(function(e){return{setShowAccountPaymentModal:e.setShowAccountPaymentModal}}).setShowAccountPaymentModal,N=(0,m.useCallback)(function(){k(!0,function(){F.A.logEvent(T.M.clickSidebarAccountPaymentMenuItem)})},[k]),M=(0,G.C)(function(e){return{setShowReferralInviteModal:e.setShowReferralInviteModal}}).setShowReferralInviteModal,_=(0,m.useCallback)(function(){R.m9.logEvent("chatgpt_referral_invite_sidebar_clicked"),F.A.logEvent(T.M.chatgptReferralInviteSidebarClicked),M(!0,function(){F.A.logEvent(T.M.clickSidebarAccountPaymentMenuItem)})},[M]);return(0,o.jsxs)(o.Fragment,{children:[(n.has(c.a3)||i)&&(0,o.jsx)($,{handleReferralInvite:_}),!i&&v&&(0,o.jsx)(D,{showFreeTrialLoadingPayment:h,handleGetPaymentLink:d}),!a&&!1===i&&b&&!w&&(0,o.jsx)(U.Vq,{onClick:v?function(){h||((0,W.Vk)(!0),d())}:N,className:"rounded-md",children:(0,o.jsxs)("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:[(0,o.jsxs)("span",{className:"gold-new-button flex items-center gap-3",children:[h?(0,o.jsx)(E.Z,{className:"icon-sm shrink-0"}):(0,o.jsx)(x.fzv,{className:"icon-sm shrink-0"}),j?(0,o.jsx)(p.Z,(0,r._)({},Q.renewPlus)):(0,o.jsx)(p.Z,(0,r._)({},Q.upgradeToPlus))]}),!n.has(c.a3)&&y&&!j&&(0,o.jsx)("span",{className:"rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800",children:(0,o.jsx)(p.Z,(0,r._)({},Q.newLabel))})]})})]})}var $=function(e){var t=e.handleReferralInvite,s=(0,u.hz)().has(c.a3),n=(0,A.a)(["referralInvites"],function(){return Z.ZP.getEligibleReferralInvites()},{enabled:s}),i=n.data,l=n.isSuccess,d=(null==i?void 0:i.invites_remaining)&&(null==i?void 0:i.invites_remaining)>0&&l,f=(0,a._)((0,m.useState)(!1),2),h=f[0],g=f[1];return((0,m.useEffect)(function(){d&&!h&&(g(!0),R.m9.logEvent("chatgpt_referral_show_sidebar_menu_item"),F.A.logEvent(T.M.chatgptReferralShowSidebarMenuItem))},[d,g,h]),d)?(0,o.jsx)(U.Vq,{onClick:t,className:"rounded-md",children:(0,o.jsxs)("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:[(0,o.jsxs)("span",{className:"gold-new-button flex items-center gap-3",children:[(0,o.jsx)(x.zy7,{className:"icon-sm shrink-0"}),(0,o.jsx)(p.Z,(0,r._)({},Q.inviteReferral))]}),(0,o.jsx)("span",{className:"rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800",children:(0,o.jsx)(p.Z,(0,r._)({},Q.newLabel))})]})}):null},Q=(0,v.vU)({upgradeToPlus:{id:"PaymentMenuItems.upgradeToPlus",defaultMessage:"Upgrade to Plus",description:"Upgrade to Plus menu item"},renewPlus:{id:"PaymentMenuItems.renewPlus",defaultMessage:"Renew Plus",description:"Renew Plus menu item"},inviteReferral:{id:"PaymentMenuItems.inviteReferral",defaultMessage:"Refer a friend",description:"Invite referral menu item"},newLabel:{id:"PaymentMenuItems.newLabel",defaultMessage:"NEW",description:"Label for new features or items"},paymentErrorWarning:{id:"PaymentMenuItems.paymentErrorWarning",description:"Error toast when payment page has an error",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."}}),Y=s(54673);function K(){var e=(0,i._)(["flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2\n  ",""]);return K=function(){return e},e}function J(e){var t=e.onNewThread,s=e.children,a=(0,g.Z)(),i=(0,u.hz)().has(c.Ue),l=(0,u.ec)(u.F_.isBusinessWorkspace),v=(0,m.useRef)(null),y=(0,m.useContext)(d.QL),b=y.historyDisabled,w=y.toggleHistoryDisabled,k=(0,y.getModifiedSettings)(),C=(0,M.Fr)().openSettings;(0,m.useEffect)(function(){k&&C()},[]);var P=(0,m.useCallback)(function(){t(),w()},[t,w]),S=(0,o.jsxs)("div",{className:(0,h.default)("absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500",b?"visible max-h-72":"invisible max-h-0"),children:[(0,o.jsxs)("div",{className:"bg-gray-900 px-4 py-3",children:[(0,o.jsx)("div",{className:"p-1 text-sm text-gray-100",children:(0,o.jsx)(p.Z,(0,r._)({},er.chatHistoryOff))}),(0,o.jsx)("div",{className:"p-1 text-xs text-gray-500",children:(0,o.jsx)(p.Z,(0,n._)((0,r._)({},l?er.chatHistoryOffDescriptionBusiness:er.chatHistoryOffDescription),{values:{learnMore:(0,o.jsx)("a",{href:"https://help.openai.com/en/articles/7730893",target:"_blank",className:"underline",rel:"noreferrer",children:(0,o.jsx)(p.Z,(0,r._)({},er.learnMore))}),b:function(e){return(0,o.jsx)("strong",{children:e})}}}))}),(0,o.jsxs)(j.z,{className:"mt-4 w-full",onClick:P,color:"primary",size:"medium",children:[(0,o.jsx)(x.$IY,{className:"icon-sm"}),(0,o.jsx)(p.Z,(0,r._)({},er.enableChatHistory))]})]}),(0,o.jsx)("div",{className:"h-24 bg-gradient-to-t from-gray-900/0 to-gray-900"})]}),Z=(0,N.Ml)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20",children:[(0,o.jsx)(f.f,{asChild:!0,children:(0,o.jsx)("h2",{children:(0,o.jsx)(p.Z,(0,r._)({},er.chatHistoryLabel))})}),(0,o.jsxs)("nav",{className:"flex h-full w-full flex-col p-2","aria-label":a.formatMessage(er.chatHistoryLabel),children:[Z?(0,o.jsx)(et,{onNewThread:t}):(0,o.jsxs)("div",{className:"mb-1 flex flex-row gap-2",children:[(0,o.jsxs)(_.MP,{onClick:t,className:"bg-white dark:bg-transparent",children:[b?(0,o.jsx)(x.Bw1,{className:"icon-sm shrink-0"}):(0,o.jsx)(x.OvN,{className:"icon-sm shrink-0"}),(0,o.jsx)("span",{className:"truncate",children:(0,o.jsx)(p.Z,(0,r._)({},b?er.clearChat:er.newChat))})]}),i&&(0,o.jsx)(_.H,{})]}),S,(0,o.jsx)(es,{ref:v,$disableScroll:b,children:s}),(0,o.jsx)(ee,{})]})]})})}function X(){var e=(0,g.Z)();return(0,o.jsx)(k.u,{side:"right",sideOffset:4,label:e.formatMessage(er.closeSidebar),className:"hidden sm:inline-block",children:(0,o.jsxs)("button",{onClick:function(){b.vm.toggleDesktopNavCollapsed()},className:"p-2 text-token-text-tertiary transition hover:text-token-text-secondary",children:[(0,o.jsx)(x.iYc,{className:"icon-sm"}),(0,o.jsx)(f.f,{children:(0,o.jsx)(p.Z,(0,r._)({},er.closeSidebar))})]})})}function ee(){var e=(0,a._)((0,m.useState)(function(){var e=w.b.getCookie(w.c.Workspace);return"string"==typeof e&&e!==l.b}),1)[0],t=(0,u.hz)(),s=t.has(c.Rw)||t.has(c.uo),r=(0,M.Fr)().openSettings,n=(0,u.$T)(),i=(0,N.Ml)();return e&&n?null:(0,o.jsxs)("div",{className:"border-t border-black/20 pt-2 empty:hidden gizmo:border-token-border-light dark:border-white/20",children:[(0,o.jsx)(V,{}),(0,o.jsxs)("div",{className:"flex w-full items-center",children:[(0,o.jsx)("div",{className:"grow",children:(0,o.jsx)(Y.W,{onClickSettings:function(){return r()}})}),i&&(0,o.jsx)(X,{})]}),s&&(0,o.jsx)(C.wm,{})]})}function et(e){var t=e.onNewThread;return(0,o.jsx)("div",{className:"flex justify-end",children:(0,o.jsx)(k.u,{label:(0,o.jsx)(p.Z,(0,r._)({},er.newChat)),side:"right",sideOffset:4,children:(0,o.jsx)("button",{onClick:t,className:"flex h-10 w-11 items-center justify-center rounded-lg text-token-text-secondary hover:bg-token-surface-secondary",children:(0,o.jsx)(x.vPQ,{className:"icon-sm"})})})})}var es=y.Z.div(K(),function(e){return e.$disableScroll?"overflow-y-hidden opacity-20 pointer-events-none":"overflow-y-auto"}),er=(0,v.vU)({chatHistoryLabel:{id:"NavigationContent.chatHistoryLabel",defaultMessage:"Chat history",description:"Chat history label heading"},chatHistoryOff:{id:"NavigationContent.chatHistoryOff",defaultMessage:"Chat History is off for this browser.",description:"Text indicating that chat history is turned off"},chatHistoryOffDescription:{id:"NavigationContent.chatHistoryOffDescription",defaultMessage:"When history is turned off, new chats on this browser won't appear in your history on any of your devices, be used to train our models, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}",description:"Description for chat history being off"},chatHistoryOffDescriptionBusiness:{id:"NavigationContent.chatHistoryOffDescriptionBusiness",defaultMessage:"When history is turned off, new chats on this browser won't appear in your history on any of your devices, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}",description:"Description for chat history being off"},learnMore:{id:"NavigationContent.learnMore",defaultMessage:"Learn more",description:"Learn more link text"},enableChatHistory:{id:"NavigationContent.enableChatHistory",defaultMessage:"Enable chat history",description:"Enable chat history button label"},clearChat:{id:"NavigationContent.clearChat",defaultMessage:"Clear chat",description:"Clear chat button label"},newChat:{id:"NavigationContent.newChat",defaultMessage:"New Chat",description:"New chat button label"},closeSidebar:{id:"NavigationContent.closeSidebar",defaultMessage:"Close sidebar",description:"Close sidebar button label"}})},54673:function(e,t,s){s.d(t,{W:function(){return L}});var r=s(39324),n=s(22830),a=s(81949),i=s(35250),o=s(75641),l=s(32877),c=s(78931),u=s(33669),d=s(88809),f=s(7813),h=s(62509),m=s(18719),x=s(73426),g=s(6948),p=s(19841),v=s(61888),y=s(70079),j=s(1454),b=s(32004),w=s(70671),k=s(94968),N=s(6038),M=s(52696),_=s(88327),C=s(44513),P=s(1821),S=s(15329),Z=s(46020);function F(){var e=(0,c.WY)(),t=(0,c.hz)(),s=(0,y.useCallback)(function(){m.A.logEvent(x.M.clickSidebarAccountPortalMenuItem),Z.vm.openModal(Z.B.AccountPortal)},[]),n=t.has(l.Rw)||t.has(l.uo);return(0,i.jsxs)(i.Fragment,{children:[!0===e&&(0,i.jsxs)(S.ZP,{onClick:s,children:[(0,i.jsx)(j.fzv,{className:"icon-sm shrink-0"}),(0,i.jsx)(b.Z,(0,r._)({},T.myPlan))]}),n&&(0,i.jsxs)(S.ZP,{onClick:function(){return Z.vm.openModal(Z.B.UserContext)},children:[(0,i.jsx)(_.wP,{className:"h-4 w-4 shrink-0"}),(0,i.jsx)(b.Z,(0,r._)({},T.chatPreferences))]})]})}var T=(0,k.vU)({myPlan:{id:"popoverNavigation.myPlan",defaultMessage:"My plan",description:"My plan menu item"},chatPreferences:{id:"popoverNavigation.chatPreferences",defaultMessage:"Custom instructions",description:"Custom instructions menu item"}}),I=s(57101),W=s(9181),E=s.n(W),O=s(20522);function z(){var e=(0,c.hz)(),t=e.has(l.Rw)||e.has(l.uo),s=(0,O.Ml)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(A,{href:"/admin",children:[(0,i.jsx)(I.Z,{className:"icon-sm"}),(0,i.jsx)(b.Z,(0,r._)({},R.myWorkspaceSettings))]}),(0,i.jsxs)(A,{href:s?"/gizmo/explore":"/templates",children:[(0,i.jsx)(j.Wpg,{className:"icon-sm"}),(0,i.jsx)(b.Z,(0,r._)({},R.templates))]}),t&&(0,i.jsxs)(S.ZP,{onClick:function(){return Z.vm.openModal(Z.B.UserContext)},children:[(0,i.jsx)(_.wP,{className:"h-4 w-4"}),(0,i.jsx)(b.Z,(0,r._)({},R.chatPreferences))]})]})}function A(e){var t=e.href,s=e.children;return(0,i.jsx)(f.v.Item,{children:function(e){var r=e.active;return(0,i.jsx)(E(),{href:t,children:(0,i.jsx)(S.ZB,{$as:"span",className:(0,p.default)(r?"bg-gray-100 dark:bg-gray-800":"cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"),children:s})})}})}var R=(0,k.vU)({myWorkspaceSettings:{id:"workspacePopoverNavigation.myWorkspaceSettings",defaultMessage:"Workspace settings",description:"Workspace settings menu item"},templates:{id:"workspacePopoverNavigation.templates",defaultMessage:"Templates",description:"Template directory menu item"},chatPreferences:{id:"workspacePopoverNavigation.chatPreferences",defaultMessage:"Custom instructions",description:"Custom instructions menu item"}});function L(e){var t=e.onClickSettings;return(0,i.jsxs)(f.v,{as:"div",className:"group relative",children:[(0,i.jsx)(V,{}),(0,i.jsx)(C.m,{children:(0,i.jsx)(f.v.Items,{className:"absolute bottom-full left-0 z-20 mb-1 w-full overflow-hidden rounded-md bg-white pb-1.5 pt-1 outline-none dark:bg-gray-950",children:(0,i.jsx)(G,{onClickSettings:t})})})]})}function D(){var e=(0,h.kP)().session,t=null==e?void 0:e.user;return t?(0,i.jsxs)("div",{className:"px-3 py-2",children:[(0,i.jsx)("div",{className:"text-sm font-bold text-gray-600 dark:text-gray-400",children:(0,i.jsx)(b.Z,(0,r._)({},Q.accountSwitcherTitle))}),(0,i.jsx)("div",{className:"text-sm text-gray-400 dark:text-gray-600",children:null==t?void 0:t.email})]}):null}function B(){var e=(0,c.ec)(function(e){return e.currentWorkspace}),t=(0,w.Z)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(D,{}),(0,i.jsxs)("div",{className:"flex w-full items-center justify-start gap-2 px-3 py-1",children:[(0,i.jsx)(N.zf,{iconSize:"medium",workspace:e}),(0,i.jsx)("div",{className:"flex-grow text-base dark:text-white",children:(0,M.CV)(t,e)})]}),(0,i.jsx)(S.R,{})]})}function H(){var e=(0,w.Z)(),t=(0,c.ec)(function(e){return e.workspaces}),s=(0,c.ec)(function(e){return e.currentWorkspace}),r=(0,n._)((0,y.useState)(!1),2),l=r[0],u=r[1],f=(0,v.compact)([t.find(function(e){return e.structure===o.CZ.PERSONAL})].concat((0,a._)(t.filter(function(e){return e.structure!==o.CZ.PERSONAL}))));return f.sort(function(e,t){return e.structure===o.CZ.PERSONAL?1:t.structure===o.CZ.PERSONAL?-1:0}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(D,{}),(0,i.jsx)("div",{className:"flex w-full flex-col",children:f.map(function(t){return(0,i.jsx)(S.ZP,{onClick:function(){t.id!==(null==s?void 0:s.id)&&(u(!0),c.w_.setCurrentWorkspace(t),(0,d.M)())},children:(0,i.jsxs)("div",{className:"flex w-full items-center justify-start gap-3 py-1",children:[(0,i.jsx)(N.zf,{iconSize:"small",workspace:t,className:"flex-shrink-0"}),(0,i.jsx)("div",{className:"flex-grow truncate dark:text-white",children:(0,M.CV)(e,t)}),l?(0,i.jsx)(P.Z,{}):(0,i.jsx)("div",{className:(0,p.default)("flex h-4 w-4 flex-shrink-0 rounded-full border align-middle",{"bg-white":t.id===(null==s?void 0:s.id)}),children:t.id===(null==s?void 0:s.id)&&(0,i.jsx)(j.UgA,{className:"m-auto h-3 w-3 scale-x-75 stroke-black stroke-[4]"})})]})},t.id)})}),(0,i.jsx)(S.R,{})]})}var U="oai/apps/hasSeenUserSurvey6_23";function q(){var e=(0,w.Z)(),t=(0,u.w$)(),s=(0,n._)((0,y.useState)(!1),2),a=s[0],o=s[1],l=g.m.getItem(U);return a||l?null:(0,i.jsx)("div",{className:"mx-1 mb-1 rounded-sm bg-[#0077FF]",children:(0,i.jsxs)("div",{className:"flex flex-col items-center justify-stretch gap-3 p-3 text-sm text-white",children:[(0,i.jsxs)("div",{className:"flex w-full items-start",children:[(0,i.jsxs)("div",{className:"flex-grow",children:[(0,i.jsx)("div",{className:"font-bold",children:(0,i.jsx)(b.Z,(0,r._)({},Q.surveyTitle))}),(0,i.jsx)("div",{children:(0,i.jsx)(b.Z,(0,r._)({},Q.surveyDescription))})]}),(0,i.jsx)("button",{className:"text-white/25 hover:text-white/40",onClick:function(){o(!0),g.m.setItem(U,!0)},"aria-label":e.formatMessage(Q.surveyDismiss),children:(0,i.jsx)(_.QF,{width:t?"20px":"24px",height:t?"20px":"24px"})})]}),(0,i.jsxs)("a",{href:"https://openai.qualtrics.com/jfe/form/SV_7QmSGWHymCCmIxE",target:"_blank",className:"flex w-full flex-row items-center justify-center gap-2 rounded-[4px] bg-white/25 p-2 hover:bg-white/40",rel:"noreferrer",onClick:function(){g.m.setItem(U,!0),o(!0)},children:[(0,i.jsx)(j.AlO,{className:"icon-sm"}),(0,i.jsx)(b.Z,(0,r._)({},Q.takeSurveyButton))]})]})})}function G(e){var t=e.onClickSettings,s=(0,c.WY)(),n=(0,c.ec)(c.F_.isBusinessWorkspace),a=(0,c.hz)(),o=a.has(l.G_),d=(0,c.ec)(c.F_.hasMultipleWorkspaces),f=(0,u.w$)(),g=a.has(l.rk);return(0,i.jsxs)("nav",{children:[o&&(0,i.jsx)(q,{}),d?(0,i.jsx)(H,{}):n&&(0,i.jsx)(B,{}),n?(0,i.jsx)(z,{}):(0,i.jsx)(F,{}),(!g||!f)&&(0,i.jsxs)(S.ZP,{as:"a",href:"https://help.openai.com/en/collections/3742473-chatgpt",target:"_blank",onClick:function(){m.A.logEvent(x.M.clickFaqLink)},children:[(0,i.jsx)(j.AlO,{className:"icon-sm"}),(0,i.jsx)(b.Z,(0,r._)({},Q.helpAndFaq))]}),(0,i.jsxs)(S.ZP,{onClick:t,children:[(0,i.jsx)(j.nbt,{className:"icon-sm"}),s?(0,i.jsx)(b.Z,(0,r._)({},Q.settingsPlus)):(0,i.jsx)(b.Z,(0,r._)({},Q.settings))]}),(0,i.jsx)(S.R,{}),(0,i.jsxs)(S.ZP,{onClick:function(){m.A.logEvent(x.M.clickLogOut,{eventSource:"mouse"}),(0,h.w7)()},children:[(0,i.jsx)(j.xqh,{className:"icon-sm"}),(0,i.jsx)(b.Z,(0,r._)({},Q.logOut))]})]})}function V(){var e=(0,h.kP)().session;return(null==e?void 0:e.user)?(0,i.jsx)($,{}):null}function $(){var e=(0,M.$3)(),t=(0,M.cI)(),s=(0,c.ec)(c.F_.isBusinessWorkspace),r=(0,c.ec)(c.F_.hasMultipleWorkspaces);return(0,i.jsxs)(f.v.Button,{className:"flex w-full items-center gap-3 rounded-md p-3 text-sm transition-colors duration-200 hover:bg-gray-100 group-ui-open:bg-gray-100 gizmo:gap-2 gizmo:rounded-lg gizmo:p-1 gizmo:hover:bg-gray-50 dark:hover:bg-gray-800 dark:group-ui-open:bg-gray-800",children:[(0,i.jsx)("div",{className:"flex-shrink-0",children:(0,i.jsx)(N.zf,{iconSize:"gizmo"})}),(0,i.jsxs)("div",{className:"grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-gray-700 dark:text-white",children:[(0,i.jsx)("div",{className:"font-semibold",children:t}),s||r?(0,i.jsx)("div",{className:"text-xs text-gray-500 gizmo:-mt-1",children:e}):null]}),(0,i.jsx)(j.K9M,{className:"icon-sm flex-shrink-0 text-gray-500 gizmo:hidden"})]})}var Q=(0,k.vU)({helpAndFaq:{id:"navigation.helpAndFaq",defaultMessage:"Help & FAQ",description:"Help & FAQ menu item"},settings:{id:"navigation.settings",defaultMessage:"Settings",description:"Settings menu item"},settingsPlus:{id:"navigation.settingsPlus",defaultMessage:"Settings & Beta",description:"Settings menu item for Plus users"},logOut:{id:"navigation.logOut",defaultMessage:"Log out",description:"Log out menu item"},takeSurveyButton:{id:"navigation.survey.takeSurveyButton",defaultMessage:"Take survey",description:"Survey offer call to action"},surveyDismiss:{id:"navigation.surveyDismiss",defaultMessage:"Dismiss survey",description:"Survey offer dismiss button"},surveyDescription:{id:"navigation.surveyDescription",defaultMessage:"Shape the future of ChatGPT.",description:"Survey offer description"},surveyTitle:{id:"navigation.surveyTitle",defaultMessage:"We’d love to hear from you!",description:"Survey offer title"},accountSwitcherTitle:{id:"navigation.accountSwitcherTitle",defaultMessage:"Workspaces",description:"Account switcher title"},defaultWorkspaceTitle:{id:"useWorkspaces.defaultWorkspaceTitle",defaultMessage:"Untitled Workspace",description:"title for workspace without a name"}})}}]);