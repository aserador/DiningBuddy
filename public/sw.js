if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>a(e,n),f={module:{uri:n},exports:r,require:t};s[n]=Promise.all(i.map((e=>f[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/J87wiirmScJV2p_5SUuna/_buildManifest.js",revision:"d7510f77f37eb46a0ef0410bceb12560"},{url:"/_next/static/J87wiirmScJV2p_5SUuna/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/26.fad1eec05192e579.js",revision:"fad1eec05192e579"},{url:"/_next/static/chunks/333-3e61c08a08f7d7be.js",revision:"3e61c08a08f7d7be"},{url:"/_next/static/chunks/382-c1023018246083c3.js",revision:"c1023018246083c3"},{url:"/_next/static/chunks/41155975-0eb4fa36f2f06460.js",revision:"0eb4fa36f2f06460"},{url:"/_next/static/chunks/43-a2b063c4ec950a7e.js",revision:"a2b063c4ec950a7e"},{url:"/_next/static/chunks/458-1b9ecc2f5832ebd1.js",revision:"1b9ecc2f5832ebd1"},{url:"/_next/static/chunks/471-eb90223b077de999.js",revision:"eb90223b077de999"},{url:"/_next/static/chunks/512-2db310d858a8b976.js",revision:"2db310d858a8b976"},{url:"/_next/static/chunks/533-1c9759e89672046d.js",revision:"1c9759e89672046d"},{url:"/_next/static/chunks/573-531209bae20fdc59.js",revision:"531209bae20fdc59"},{url:"/_next/static/chunks/691-2e3bf5510928504d.js",revision:"2e3bf5510928504d"},{url:"/_next/static/chunks/706-947bdf8fe1c223ff.js",revision:"947bdf8fe1c223ff"},{url:"/_next/static/chunks/926-698ad0364e15783d.js",revision:"698ad0364e15783d"},{url:"/_next/static/chunks/cb355538-a7dcb0d10d735fad.js",revision:"a7dcb0d10d735fad"},{url:"/_next/static/chunks/ee9ce975-8a041904bad3d4ce.js",revision:"8a041904bad3d4ce"},{url:"/_next/static/chunks/fea29d9f-166a0fa6432515af.js",revision:"166a0fa6432515af"},{url:"/_next/static/chunks/framework-ecc4130bc7a58a64.js",revision:"ecc4130bc7a58a64"},{url:"/_next/static/chunks/main-4277578f58ea0f88.js",revision:"4277578f58ea0f88"},{url:"/_next/static/chunks/pages/404-3f6a57c5f9f75d3c.js",revision:"3f6a57c5f9f75d3c"},{url:"/_next/static/chunks/pages/_app-e79be2a0969877aa.js",revision:"e79be2a0969877aa"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/admin-b462b99a56742197.js",revision:"b462b99a56742197"},{url:"/_next/static/chunks/pages/allfood-36114562cfa0d2ee.js",revision:"36114562cfa0d2ee"},{url:"/_next/static/chunks/pages/dininghalls-95ca6d2e3d2893df.js",revision:"95ca6d2e3d2893df"},{url:"/_next/static/chunks/pages/disclaimer-aa25df082f42c47b.js",revision:"aa25df082f42c47b"},{url:"/_next/static/chunks/pages/food/%5Bid%5D-220d281594936515.js",revision:"220d281594936515"},{url:"/_next/static/chunks/pages/hall/%5Bid%5D-eec47c9e9a916b7f.js",revision:"eec47c9e9a916b7f"},{url:"/_next/static/chunks/pages/index-5b7565aa4348eda9.js",revision:"5b7565aa4348eda9"},{url:"/_next/static/chunks/pages/login-c51b87416384d0ff.js",revision:"c51b87416384d0ff"},{url:"/_next/static/chunks/pages/privacy-1a826a70f249002a.js",revision:"1a826a70f249002a"},{url:"/_next/static/chunks/pages/terms-4bd5248fc07fe6c7.js",revision:"4bd5248fc07fe6c7"},{url:"/_next/static/chunks/pages/user/dashboard-fc10a913ee9c1117.js",revision:"fc10a913ee9c1117"},{url:"/_next/static/chunks/pages/user/favorites-3087621e45466de6.js",revision:"3087621e45466de6"},{url:"/_next/static/chunks/pages/user/onboarding-0ae1734483ef50df.js",revision:"0ae1734483ef50df"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-823c0293a4ddf19b.js",revision:"823c0293a4ddf19b"},{url:"/_next/static/css/fbf3d9c4856be3c7.css",revision:"fbf3d9c4856be3c7"},{url:"/apple-touch-icon.png",revision:"72f0c918e279b7f003c0a5476dc3c8e5"},{url:"/disclaimer.md",revision:"d64cc3bb4926d24c9d1c4aa41b454261"},{url:"/favicon-16x16.png",revision:"9c53e73ae55f7e26fd5324417198c775"},{url:"/favicon-32x32.png",revision:"22d318a743d5dee2fa816d401efdc394"},{url:"/favicon.ico",revision:"c09ac99fd7f90f011b723acecff639ee"},{url:"/fonts/SourceSansPro-Bold.woff",revision:"d40a60adadc781d966c5ba255a493508"},{url:"/fonts/SourceSansPro-Bold.woff2",revision:"52cd176b491d7a102ac54c46469e2391"},{url:"/fonts/SourceSansPro-Light.woff",revision:"04ba539297d321559b281ad20678a747"},{url:"/fonts/SourceSansPro-Light.woff2",revision:"71f4871a280722f4096a105fd8650384"},{url:"/fonts/SourceSansPro-Regular.woff",revision:"4ab52d2853c15edb0033ed5c41ea4740"},{url:"/fonts/SourceSansPro-Regular.woff2",revision:"d921ea9ef82f0b71cc8be59ef45e446f"},{url:"/icon-192x192.png",revision:"f6286d83ca0a19e8b9dbf704ce247f3e"},{url:"/icon-512x512.png",revision:"53708c7bf77867b9857ffad7f152a7e6"},{url:"/illineatslogo.svg",revision:"442d9dbfc57f59207dd5f2a97f6b05ee"},{url:"/images/blockI.gif",revision:"6b17ee64305b5bc046486de7b0aa0647"},{url:"/images/dininghall.jpg",revision:"688ed40e56cdd81c7215d723c0e1655a"},{url:"/images/icons/alcohol.svg",revision:"839a5fe8dcb29b830a7faa4b7e1ed3e5"},{url:"/images/icons/coconut.svg",revision:"a275a4f30171cb2211bfd8b9e43cfe00"},{url:"/images/icons/corn.svg",revision:"f1ff58f6d20458a10906140c94652b98"},{url:"/images/icons/eggs.svg",revision:"bb2605b869e788234262f6470afd3f86"},{url:"/images/icons/fish.svg",revision:"9cfe5ad1a5e769887e2ba220da989616"},{url:"/images/icons/gelatin.svg",revision:"b4581a1f1409c365eca50c4794fa2e30"},{url:"/images/icons/gluten.svg",revision:"7beef62fdf5b684995baf42174427450"},{url:"/images/icons/halal.svg",revision:"98468ef4759ac9cfdb5cf5845608d4d8"},{url:"/images/icons/kosher.svg",revision:"f96c3b878b93e096b5eba7548baabc49"},{url:"/images/icons/milk.svg",revision:"d88228962cf822059287e7d74042073a"},{url:"/images/icons/msg.svg",revision:"68fd3e62edb01fc4abefffa0f432b2fe"},{url:"/images/icons/peanuts.svg",revision:"e5154c7233e7c4ef460fc22b49cca68a"},{url:"/images/icons/pork.svg",revision:"9991a3f9cf44033f00114c1c91cd907e"},{url:"/images/icons/red dye.svg",revision:"a7fae1ecc22a46f64ff66bbfcdfd256e"},{url:"/images/icons/sesame.svg",revision:"d41601481eee17f4d850a8f74656eec1"},{url:"/images/icons/shellfish.svg",revision:"4fb274ab05644c349d391b4be6cfcd31"},{url:"/images/icons/soy.svg",revision:"290d7cc308958a1726c12c5fea45050b"},{url:"/images/icons/sulfites.svg",revision:"7b1da3686b9e4cc2a062c48a6fe7133f"},{url:"/images/icons/tree nuts.svg",revision:"fde49c98e9871034c37c50f71ca53a36"},{url:"/images/icons/vegan.svg",revision:"d5047461f9d5bbe41fec083b93c93bfb"},{url:"/images/icons/vegetarian.svg",revision:"12b5ea8c390140705ee59d680362e884"},{url:"/images/icons/wheat.svg",revision:"5a84cca57455dcdf11e51ebbfd4fa52d"},{url:"/images/upload.png",revision:"d5665f67a5cfb76cd71f4961ccd0a5e1"},{url:"/manifest.json",revision:"f86ac2993b29964479b5c4572753771c"},{url:"/placeholder-image.jpg",revision:"588d9346b5f8bacef5cce7c184d6ec6d"},{url:"/privacy.md",revision:"3b95239d137e8ea1673964daf7f81000"},{url:"/service-worker.js",revision:"45f3d03fb06174967a35b49d164d5540"},{url:"/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/terms.md",revision:"2e3df8be2813b90d531eb65f5d95f6df"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
