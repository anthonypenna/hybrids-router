import{render as t,html as o}from"hybrids";function n(t){const{href:o,origin:n}=t.location;return o.replace(n,"")}function r(t){const o="/"===t.slice(0,1);return"#"===t.slice(1,2)?t:o?"/#"+t.slice(1):"/#"+t}function e(t){const o="#"!==t.slice(0,1)&&"#"!==t.slice(1,2),n="/"!==t.slice(0,1);return n&&o?"/"+t:n&&!o?"/"+t.replace("#",""):n||o?t:t.replace("/#","/")}const i=t=>{const n="history"===t.mode?t.routes.find(o=>e(o.path)===t.currentPath):t.routes.find(o=>r(o.path)===t.currentPath);return n?n.component:o``};function c({mode:o="hash",routes:r=[],shadowRoot:e=!0}){return{mode:o,routes:r,currentPath:n(window),render:t(i,{shadowRoot:e})}}function s(t,o){const i=r(o),c=e(o),s=n(window);if(s===i||s===c)return;const{state:a}=window.history,{pathname:u}=window.location,h="history"===t.mode;t.currentPath=h?c:i,h?window.history.pushState(a,u,t.currentPath):window.location.href=t.currentPath,window.addEventListener("popstate",()=>t.currentPath=n(window))}export{c as Router,s as push};