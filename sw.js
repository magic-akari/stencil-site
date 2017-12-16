importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "99fc5f75faf5ed2c4f7b53d0034401a8"
  },
  {
    "url": "assets/img/feature-icons.png",
    "revision": "71a2d41278528e9657bb2946f68bc8c4"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "assets/img/ionic-os-logo.png",
    "revision": "49c50777c91ace1a5a88b05ac3fe36ea"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "0ab79243b610b5eb6f909727799fe1df"
  },
  {
    "url": "assets/img/pwa.png",
    "revision": "f740988d2e33bdfd48c816fa17ba9f00"
  },
  {
    "url": "assets/img/text-logo.png",
    "revision": "45a94a6c3509dac4b3b16415f2679896"
  },
  {
    "url": "assets/img/text-logo.svg",
    "revision": "4f658c2a420d5dd7f30d09c2c87781cf"
  },
  {
    "url": "assets/img/video-icon.png",
    "revision": "6f27af15cab04aafd7193b76825c2eac"
  },
  {
    "url": "host.config.json",
    "revision": "4aaec287a3ca9ce88dc41ce0c5cf83cc"
  },
  {
    "url": "manifest.json",
    "revision": "c196d300ffd65908f26a5b316c8aa290"
  },
  {
    "url": "stencil-site/assets/icon/favicon.ico",
    "revision": "99fc5f75faf5ed2c4f7b53d0034401a8"
  },
  {
    "url": "stencil-site/assets/img/feature-icons.png",
    "revision": "71a2d41278528e9657bb2946f68bc8c4"
  },
  {
    "url": "stencil-site/assets/img/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "stencil-site/assets/img/ionic-os-logo.png",
    "revision": "49c50777c91ace1a5a88b05ac3fe36ea"
  },
  {
    "url": "stencil-site/assets/img/logo.png",
    "revision": "0ab79243b610b5eb6f909727799fe1df"
  },
  {
    "url": "stencil-site/assets/img/pwa.png",
    "revision": "f740988d2e33bdfd48c816fa17ba9f00"
  },
  {
    "url": "stencil-site/assets/img/text-logo.png",
    "revision": "45a94a6c3509dac4b3b16415f2679896"
  },
  {
    "url": "stencil-site/assets/img/text-logo.svg",
    "revision": "4f658c2a420d5dd7f30d09c2c87781cf"
  },
  {
    "url": "stencil-site/assets/img/video-icon.png",
    "revision": "6f27af15cab04aafd7193b76825c2eac"
  },
  {
    "url": "stencil-site/build/app.css",
    "revision": "cde472c784e9b7000a34b2581e180be7"
  },
  {
    "url": "stencil-site/build/app.js",
    "revision": "83efb4fc363502481f648bf58005d138"
  },
  {
    "url": "stencil-site/build/app/3k7lx5cn.js",
    "revision": "5471e67eeaec58fc88a9664cf34c30fd"
  },
  {
    "url": "stencil-site/build/app/5e3mm8py.js",
    "revision": "d8783a51d88a5fe606e0bd94a40261be"
  },
  {
    "url": "stencil-site/build/app/6h3gn76l.js",
    "revision": "b46ee5986c7fda07d6efbd4caa777cde"
  },
  {
    "url": "stencil-site/build/app/9yov4blo.js",
    "revision": "1f762f3dc2f320f07dd097e600cf4a38"
  },
  {
    "url": "stencil-site/build/app/app.6pl4uvpu.js",
    "revision": "68a51619098a3d09161321d8b1db8237"
  },
  {
    "url": "stencil-site/build/app/app.anvyajjr.js",
    "revision": "d13dd45ab272db42afb14881a4cba8d0"
  },
  {
    "url": "stencil-site/build/app/app.f0pvtd4s.js",
    "revision": "b1b565ca8cec0025d573ba7c652d8977"
  },
  {
    "url": "stencil-site/build/app/app.global.js",
    "revision": "bede57bea0ca4c2f0b376b3e84483e68"
  },
  {
    "url": "stencil-site/build/app/app.registry.json",
    "revision": "d10bda2522d0b74787fe6caae4b6d9bd"
  },
  {
    "url": "stencil-site/build/app/cv7cbtbi.js",
    "revision": "b425d7fba0b1c25730cf13a34af6b556"
  },
  {
    "url": "stencil-site/build/app/iywtdof8.js",
    "revision": "cebf5978de92074deed7af4f0bb39f58"
  },
  {
    "url": "stencil-site/build/app/jn9xe6i7.js",
    "revision": "1400427b4f427dc086ba86e5aad7560b"
  },
  {
    "url": "stencil-site/build/app/mdjj9o4m.js",
    "revision": "81f2e3373bcdf9fef7705e1424155d26"
  },
  {
    "url": "stencil-site/build/app/mkhc5edk.js",
    "revision": "24378c3e654f3092e277651b4e19525f"
  },
  {
    "url": "stencil-site/build/app/orsdhirh.js",
    "revision": "7438a81d2db06c201be7ba516d9071ca"
  },
  {
    "url": "stencil-site/build/app/qhr4r0rn.js",
    "revision": "c9de5f3c2b2d122bc0bf7f8e40e7c8b8"
  },
  {
    "url": "stencil-site/build/app/rmww4mn7.js",
    "revision": "7a54f3ca447d8f8f16b90040b5e96659"
  },
  {
    "url": "stencil-site/build/app/tilxb3td.js",
    "revision": "ff9d740d8f275d1d9aaf310362f8981e"
  },
  {
    "url": "stencil-site/build/app/u02wzu0j.js",
    "revision": "4a5acb93ef42daa664e43dfb9cc7e4e8"
  },
  {
    "url": "stencil-site/demos/index.html",
    "revision": "de91baefd737609363d6b1d74bb37e06"
  },
  {
    "url": "stencil-site/docs-content/addons/stencil-router.html",
    "revision": "d65dc6874ce2f3ba66466974e75bcb20"
  },
  {
    "url": "stencil-site/docs-content/advanced/css-variables/index.html",
    "revision": "51174a80275664a9c6a22971486be46d"
  },
  {
    "url": "stencil-site/docs-content/advanced/distribution/index.html",
    "revision": "7f770bcc01e8b2db3a530c4c2f70914a"
  },
  {
    "url": "stencil-site/docs-content/advanced/framework-integration/index.html",
    "revision": "0210227d576e9051a3479af8ef0f741d"
  },
  {
    "url": "stencil-site/docs-content/advanced/pre-rendering/index.html",
    "revision": "8c709f3d04a5c78e52675f78e94602e5"
  },
  {
    "url": "stencil-site/docs-content/advanced/service-worker/index.html",
    "revision": "14727a9e52364658ff9c8559ed7be7fc"
  },
  {
    "url": "stencil-site/docs-content/advanced/shadow-dom/index.html",
    "revision": "40d0f7942d22caf3c0d206980ac7c8fc"
  },
  {
    "url": "stencil-site/docs-content/advanced/ssr/index.html",
    "revision": "4e7dc7f73885a7ba661275094b6aeaf0"
  },
  {
    "url": "stencil-site/docs-content/basics/component-lifecycle.html",
    "revision": "08f5d35a82a3c8718b0b62f30b10cb56"
  },
  {
    "url": "stencil-site/docs-content/basics/decorators.html",
    "revision": "66e8910a1cc61201d25d806fafb6d278"
  },
  {
    "url": "stencil-site/docs-content/basics/events.html",
    "revision": "e9964bac263d3335fa8634ffdf032457"
  },
  {
    "url": "stencil-site/docs-content/basics/forms.html",
    "revision": "8c9e9271709a838ba6dcb6fcabba4f75"
  },
  {
    "url": "stencil-site/docs-content/basics/handling-arrays.html",
    "revision": "a0a60aa3ff8f4a868ac71a69fe25b167"
  },
  {
    "url": "stencil-site/docs-content/basics/my-first-component.html",
    "revision": "9bc06b3e2c49ab0b7e55d18f9a0eb070"
  },
  {
    "url": "stencil-site/docs-content/basics/stencil-config.html",
    "revision": "9c30f7f5cd354e52dbf5273faa6d9122"
  },
  {
    "url": "stencil-site/docs-content/basics/templating.html",
    "revision": "3fffd451285b99265f2f1eb8577b32bf"
  },
  {
    "url": "stencil-site/docs-content/basics/testing.html",
    "revision": "3bec6a8ced3ecc9af8465af8609342c0"
  },
  {
    "url": "stencil-site/docs-content/compiler/config.html",
    "revision": "71c3c54c9e2c47d6a922379f132683af"
  },
  {
    "url": "stencil-site/docs-content/intro/browsers.html",
    "revision": "5bcb085e3fe680101f43f47a6d316b57"
  },
  {
    "url": "stencil-site/docs-content/intro/index.html",
    "revision": "bb39eadc4129f89268fb837732c4c2a8"
  },
  {
    "url": "stencil-site/docs-content/start/index.html",
    "revision": "ace65562a1181d10cd4c21a48c8d702a"
  },
  {
    "url": "stencil-site/docs/browser-support/index.html",
    "revision": "bfd05e345a6738178ba7cf3342b1daa5"
  },
  {
    "url": "stencil-site/docs/component-lifecycle/index.html",
    "revision": "5e7fe5e98d7bacc4ffd6cbcc4469b3d9"
  },
  {
    "url": "stencil-site/docs/css-variables/index.html",
    "revision": "94efb19fc651629aabeadbec5681341b"
  },
  {
    "url": "stencil-site/docs/decorators/index.html",
    "revision": "50ac662224921474b7a3b57f04b01f03"
  },
  {
    "url": "stencil-site/docs/distribution/index.html",
    "revision": "cfec0a9484e8090b1ffa78369e2e3c20"
  },
  {
    "url": "stencil-site/docs/events/index.html",
    "revision": "257e8d13c2b7187bb3dab95e15f0f0be"
  },
  {
    "url": "stencil-site/docs/forms/index.html",
    "revision": "c627f87bf489cd33dde9f483005ff584"
  },
  {
    "url": "stencil-site/docs/framework-integration/index.html",
    "revision": "8b4b7bf08b9a7e6b4525522c85fc23ab"
  },
  {
    "url": "stencil-site/docs/getting-started/index.html",
    "revision": "6f67d10622df986357d5bcd4ec1f0867"
  },
  {
    "url": "stencil-site/docs/handling-arrays/index.html",
    "revision": "b6392b81fe4a3b33c704a3a2e0579909"
  },
  {
    "url": "stencil-site/docs/intro/index.html",
    "revision": "0d49e1524793ba5ae774911610d56867"
  },
  {
    "url": "stencil-site/docs/my-first-component/index.html",
    "revision": "8f1c174f317d02502c0e4100ffe5d9bc"
  },
  {
    "url": "stencil-site/docs/prerendering/index.html",
    "revision": "cff236e505080ed149da89d99a3cea7e"
  },
  {
    "url": "stencil-site/docs/routing/index.html",
    "revision": "cfab0d805a7bce66135aaae7b700d497"
  },
  {
    "url": "stencil-site/docs/server-side-rendering/index.html",
    "revision": "06e5a342e360a9baa5222233298fa3c1"
  },
  {
    "url": "stencil-site/docs/service-workers/index.html",
    "revision": "10262cc38b167304f0741aa35a8ae30d"
  },
  {
    "url": "stencil-site/docs/shadow-dom/index.html",
    "revision": "cef79a5f983f2ce9a1d6d0f72ab7af21"
  },
  {
    "url": "stencil-site/docs/stencil-config/index.html",
    "revision": "d6a9809034be7a976a18d3c01ee81b70"
  },
  {
    "url": "stencil-site/docs/templating/index.html",
    "revision": "f9d495ab9cb1091f57327c3eb8b0e709"
  },
  {
    "url": "stencil-site/docs/testing/index.html",
    "revision": "f49a64b01b0108ae4d4d027dea13cc34"
  },
  {
    "url": "stencil-site/index.html",
    "revision": "5211ed2800d4146397aa2f0323a123ab"
  },
  {
    "url": "stencil-site/manifest.json",
    "revision": "c196d300ffd65908f26a5b316c8aa290"
  },
  {
    "url": "stencil-site/pwa/index.html",
    "revision": "1a9bb829efa12928a2051a154d200ef6"
  },
  {
    "url": "stencil-site/resources/index.html",
    "revision": "f7c4c629a3473d436589c9bae2cd88f1"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
