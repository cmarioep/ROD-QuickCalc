if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const d=e=>i(e,o),l={module:{uri:o},exports:t,require:d};s[o]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/home-splash-e352ebf4.png",revision:null},{url:"assets/index-ae947a37.css",revision:null},{url:"assets/index-b4ca48d0.js",revision:null},{url:"index.html",revision:"79203df10e1131d9c7d3d1a74320a4e2"},{url:"Isotipo-192x192.png",revision:"677544f791a33143accf0d4a1f0c0f7d"},{url:"Isotipo-512x512.png",revision:"db41959f61e647e97d970d51558eaa90"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"Isotipo-192x192.png",revision:"677544f791a33143accf0d4a1f0c0f7d"},{url:"Isotipo-512x512.png",revision:"db41959f61e647e97d970d51558eaa90"},{url:"manifest.webmanifest",revision:"1b667f2742d001ad16137fefbf55c518"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
