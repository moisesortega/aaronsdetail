"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1139],{50744:function(e,r,n){var t=n(35250),a=n(55344),i=n.n(a);n(70079);var o=function(e){var r=e.children;return(0,t.jsx)(t.Fragment,{children:r})};r.Z=i()(function(){return Promise.resolve(o)},{ssr:!1})},82277:function(e,r,n){n.d(r,{Z:function(){return u}});var t=n(35250),a=n(70079),i=n(46020),o=n(33669),s=n(50744),l=n(13090);function u(e){var r=e.children,n=e.showNavigation,c=e.renderTitle,d=e.renderMobileHeaderRightContent,f=e.renderSidebar,m=(0,o.w$)(),g=[],v=null;return a.Children.forEach(r,function(e){a.isValidElement(e)&&(e.type===u.Sidebars?v=e:g.push(e))}),(0,t.jsxs)("div",{className:"relative z-0 flex h-full w-full overflow-hidden",children:[m&&n&&null!=f?(0,t.jsx)(s.Z,{children:f}):null,(0,t.jsxs)("div",{className:"relative flex h-full max-w-full flex-1 flex-col overflow-hidden",children:[!m&&n&&(0,t.jsx)(s.Z,{children:(0,t.jsx)(l.Vs,{onClickOpenSidebar:function(){return i.vm.toggleActiveSidebar("mobile-nav")},renderTitle:c,renderSidebar:f,renderRightContent:d})}),(0,t.jsx)("main",{className:"relative h-full w-full flex-1 overflow-auto transition-width",children:g})]}),v]})}u.Sidebars=function(e){var r=e.children;return(0,t.jsx)(t.Fragment,{children:r})}},13090:function(e,r,n){n.d(r,{H:function(){return M},MP:function(){return w},Vs:function(){return R},js:function(){return C},l6:function(){return Z}});var t=n(39324),a=n(70216),i=n(35250),o=n(98359),s=n(20525),l=n(32148),u=n(19841),c=n(97296),d=n(70737),f=n(60554),m=n(70079),g=n(1454),v=n(70671),h=n(32004),p=n(94968),b=n(46020),x=n(33669),k=n(42271),N=n(45635),y=n(20522),j=n(15329);function w(e){var r=e.onClick,n=e.className,o=(0,a._)(e,["onClick","className"]);return(0,i.jsx)(j.zV,(0,t._)({onClick:r,className:(0,u.default)(n,"flex-grow overflow-hidden")},o))}function C(e){var r=e.onClick,n=(0,a._)(e,["onClick"]);return(0,i.jsx)("button",(0,t._)({type:"button",className:"px-3",onClick:r},n))}function M(){var e=(0,v.Z)();return(0,x.w$)()?(0,i.jsx)(N.u,{side:"right",label:e.formatMessage(_.closeSidebar),children:(0,i.jsxs)(j.zV,{onClick:b.vm.toggleDesktopNavCollapsed,className:"w-11 flex-shrink-0 items-center justify-center bg-white dark:bg-transparent",children:[(0,i.jsx)(g.iYc,{className:"icon-sm"}),(0,i.jsx)(l.f,{children:(0,i.jsx)(h.Z,(0,t._)({},_.closeSidebar))})]})}):null}var S=function(e){var r=e.onClose,n=e.sidebarOpen,a=e.children;return(0,i.jsx)(o.u.Root,{show:n,as:m.Fragment,children:(0,i.jsxs)(s.V,{as:"div",className:"dark relative",onClose:r,children:[(0,i.jsx)(o.u.Child,{as:m.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,i.jsx)("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})}),(0,i.jsxs)("div",{className:"fixed inset-0 flex",children:[(0,i.jsx)(o.u.Child,{as:m.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,i.jsxs)(s.V.Panel,{className:"relative flex w-full max-w-xs flex-1 flex-col bg-gray-900 gizmo:bg-gray-800",children:[(0,i.jsx)(o.u.Child,{as:m.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,i.jsx)("div",{className:"absolute right-0 top-0 -mr-12 pt-2",children:(0,i.jsxs)("button",{type:"button",className:"ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:r,children:[(0,i.jsx)("span",{className:"sr-only",children:(0,i.jsx)(h.Z,(0,t._)({},_.closeSidebar))}),(0,i.jsx)(g.q5L,{className:"icon-lg text-white","aria-hidden":"true"})]})})}),a]})}),(0,i.jsx)("div",{className:"w-14 flex-shrink-0"})]})]})})},R=function(e){var r=e.onClickOpenSidebar,n=e.renderTitle,a=e.renderSidebar,o=e.renderRightContent,s=(0,b.tN)(function(e){return e.activeSidebar}),l=(0,f.useRouter)().asPath;return(0,m.useEffect)(function(){"mobile-nav"===s&&b.vm.setActiveSidebar(!1)},[l]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",children:[(0,i.jsxs)("button",{type:"button",className:"-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",onClick:r,children:[(0,i.jsx)("span",{className:"sr-only",children:(0,i.jsx)(h.Z,(0,t._)({},_.openSidebar))}),(0,i.jsx)(g.cur,{"aria-hidden":"true",className:"icon-lg"})]}),(0,i.jsx)("h1",{className:"flex-1 text-center text-base font-normal",children:n}),o]}),(0,i.jsx)(S,{onClose:function(){b.vm.setActiveSidebar(!1)},sidebarOpen:"mobile-nav"===s,children:a})]})};function Z(e){var r=e.children,n=(0,v.Z)(),t=(0,m.useRef)(null),a=(0,b.tN)(function(e){return e.isDesktopNavCollapsed}),o=(0,y.Ml)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.E.div,{className:(0,u.default)("flex-shrink-0 overflow-x-hidden",o?"border-r border-gray-100 bg-gray-50 gizmo:bg-white dark:border-0 dark:bg-gray-800 gizmo:dark:border-r gizmo:dark:border-token-border-light":"dark bg-gray-900"),ref:t,initial:!1,animate:{width:a?0:"260px",transition:{duration:.165,ease:"easeOut"}},onAnimationStart:function(){t.current&&(t.current.style.visibility="visible")},onAnimationComplete:function(){t.current&&a&&(t.current.style.visibility="hidden")},children:(0,i.jsx)("div",{className:"h-full w-[260px]",children:(0,i.jsx)("div",{className:"flex h-full min-h-0 flex-col ",children:r})})}),(0,i.jsx)(d.M,{initial:!1,children:a&&(0,i.jsx)(c.E.div,{className:"absolute left-2 top-2 z-40 hidden gizmo:bottom-1 gizmo:left-1 gizmo:top-auto md:inline-block",initial:{opacity:0},animate:{opacity:1,transition:{duration:.165,ease:"easeIn"}},children:(0,i.jsx)(N.u,{side:"right",label:n.formatMessage(_.openSidebar),children:(0,i.jsx)(k.O,{onClick:b.vm.toggleDesktopNavCollapsed,"aria-label":n.formatMessage(_.openSidebar),children:(0,i.jsx)(g.iYc,{className:"icon-sm text-token-text-primary gizmo:text-token-text-tertiary gizmo:hover:text-token-text-secondary"})})})})})]})}var _=(0,p.vU)({closeSidebar:{id:"navigation.closeSidebar",defaultMessage:"Close sidebar",description:"Close sidebar button label"},openSidebar:{id:"navigation.openSidebar",defaultMessage:"Open sidebar",description:"Open sidebar button label"}})},52696:function(e,r,n){n.d(r,{$3:function(){return f},Ap:function(){return u},CV:function(){return m},GA:function(){return d},Gk:function(){return p},Ix:function(){return v},_O:function(){return h},bE:function(){return b},cI:function(){return g},qH:function(){return c}});var t=n(96237),a=n(75641),i=n(78931),o=n(62509),s=n(70079),l=n(70671);function u(){var e=(0,l.Z)(),r=e.formatMessage(x.adminRoleName),n=e.formatMessage(x.ownerRoleName),i=e.formatMessage(x.standardRoleName);return(0,s.useMemo)(function(){var e;return e={},(0,t._)(e,a.r3.OWNER,n),(0,t._)(e,a.r3.ADMIN,r),(0,t._)(e,a.r3.STANDARD,i),e},[n,r,i])}function c(e){var r=(0,l.Z)();return e?e.structure===a.CZ.PERSONAL?r.formatMessage(x.personalPlanName):r.formatMessage(x.enterprisePlanName):r.formatMessage(x.personalPlanName)}function d(e){return m((0,l.Z)(),e)}function f(){var e=(0,i.ec)(function(e){return e.currentWorkspace});return m((0,l.Z)(),e)}function m(e,r){var n;return r&&r.structure!==a.CZ.PERSONAL?null!==(n=r.name)&&void 0!==n?n:e.formatMessage(x.defaultWorkspaceTitle):e.formatMessage(x.personalWorkspaceTitle)}function g(){var e,r,n,t,a=(0,o.kP)().session;return null!==(t=null!==(n=null==a?void 0:null===(e=a.user)||void 0===e?void 0:e.name)&&void 0!==n?n:null==a?void 0:null===(r=a.user)||void 0===r?void 0:r.email)&&void 0!==t?t:null}function v(e){var r=(0,i.ec)(function(e){return e.currentWorkspace}),n=(0,i.ec)(i.F_.isPersonalWorkspace),t=(0,i.$T)(),o=d(r),s=g();return e&&!t?e.structure===a.CZ.PERSONAL?s:e.name:r?n?s:o:s}function h(){return(0,i.ec)(function(e){return e.workspaces})}function p(e){var r=h().find(function(r){return r.id===e});return(null==r?void 0:r.role)===a.r3.OWNER}function b(e){var r=h().find(function(r){return r.id===e});return(null==r?void 0:r.role)===a.r3.ADMIN}var x=(0,n(94968).vU)({defaultWorkspaceTitle:{id:"useWorkspaces.defaultWorkspaceTitle",defaultMessage:"Untitled Workspace",description:"title for workspace without a name"},personalWorkspaceTitle:{id:"useWorkspaces.personalWorkspaceTitle",defaultMessage:"Personal account",description:"title for personal workspace"},personalPlanName:{id:"useWorkspaces.personalPlanName",defaultMessage:"Personal",description:"label for personal tier account"},enterprisePlanName:{id:"useWorkspaces.enterprisePlanName",defaultMessage:"Enterprise",description:"label for enterprise tier account"},adminRoleName:{id:"useWorkspaces.adminRoleName",defaultMessage:"Admin",description:"Role name for an admin user"},ownerRoleName:{id:"useWorkspaces.ownerRoleName",defaultMessage:"Owner",description:"Role name for an owner user"},standardRoleName:{id:"useWorkspacews.standardRoleName",defaultMessage:"Member",description:"Role name for a standard user"}})},42271:function(e,r,n){n.d(r,{O:function(){return s},h:function(){return l}});var t=n(4337),a=n(21389);function i(){var e=(0,t._)(["flex p-3 items-center gap-3 transition-colors duration-200 text-gray-600 dark:text-gray-200 cursor-pointer text-sm rounded-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 h-11"]);return i=function(){return e},e}function o(){var e=(0,t._)(["h-11 w-11"]);return o=function(){return e},e}var s=a.Z.button(i()),l=a.Z.div(o())},15329:function(e,r,n){n.d(r,{R:function(){return h},Vq:function(){return p},ZB:function(){return g},ZP:function(){return m},zV:function(){return v}});var t=n(4337),a=n(35250),i=n(7813),o=n(19841),s=n(21389);function l(){var e=(0,t._)(["p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer"]);return l=function(){return e},e}function u(){var e=(0,t._)(["flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm"]);return u=function(){return e},e}function c(){var e=(0,t._)(["rounded-md border dark:border-white/20 gizmo:min-h-0 hover:bg-gray-500/10 h-11 gizmo:h-10 gizmo:rounded-lg gizmo:border-[rgba(0,0,0,0.1)]"]);return c=function(){return e},e}function d(){var e=(0,t._)(["my-1.5 h-px dark:bg-white/20 bg-black/20"]);return d=function(){return e},e}function f(){var e=(0,t._)(["",""]);return f=function(){return e},e}function m(e){var r=e.onClick,n=e.href,t=e.target,s=e.children;return(0,a.jsx)(i.v.Item,{children:function(e){var i=e.active;return(0,a.jsx)(g,{as:void 0!==n?"a":"button",onClick:r,href:n,target:t,className:(0,o.default)(i?"bg-gray-100 dark:bg-gray-800":"hover:bg-gray-100 dark:hover:bg-gray-800"),children:s})}})}s.Z.a(l());var g=s.Z.a(u()),v=(0,s.Z)(g)(c()),h=s.Z.div(d()),p=(0,s.Z)(g)(f(),function(e){return e.$active?"bg-gray-100 dark:bg-gray-800":"hover:bg-gray-100 dark:hover:bg-gray-800"})}}]);