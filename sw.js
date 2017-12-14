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
    "url": "stencil-site/build/app.js",
    "revision": "605f141bfe3aa6fcff40f95e5d206a49"
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
    "url": "stencil-site/build/app/5o6kav7n.js",
    "revision": "9eedeab42fb55e32d3960be5da8e6962"
  },
  {
    "url": "stencil-site/build/app/6h3gn76l.js",
    "revision": "b46ee5986c7fda07d6efbd4caa777cde"
  },
  {
    "url": "stencil-site/build/app/9w3o4rop.js",
    "revision": "0fdddf71a2b23fcbbebb94d4d0e038d8"
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
    "revision": "db6a344f4f04b0a0c0e397d18d713668"
  },
  {
    "url": "stencil-site/build/app/caxvifpw.js",
    "revision": "e53833e2d935f9fae7cc915ab427dbfa"
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
    "url": "stencil-site/build/app/u02wzu0j.js",
    "revision": "4a5acb93ef42daa664e43dfb9cc7e4e8"
  },
  {
    "url": "stencil-site/build/app/wnjwjl0u.js",
    "revision": "147aa54f344dde453b2f5c36419b4b9f"
  },
  {
    "url": "stencil-site/demos/index.html",
    "revision": "e1725185e6c0380615bc965ac888512b"
  },
  {
    "url": "stencil-site/docs-content/addons/stencil-router.html",
    "revision": "f3b1fcb4a03c84137a3e11db07c2ee59"
  },
  {
    "url": "stencil-site/docs-content/advanced/angular-integration/index.html",
    "revision": "5108186f145581ee5cb304cab8481e7a"
  },
  {
    "url": "stencil-site/docs-content/advanced/distribution/index.html",
    "revision": "aae1ffabfb5476ef606066befa98a67b"
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
    "revision": "f9c2cda306801bb1b38562175b7719d6"
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
    "url": "stencil-site/docs/angular-integration/index.html",
    "revision": "9f8a99f281f8a0f2e079c18b12892845"
  },
  {
    "url": "stencil-site/docs/browser-support/index.html",
    "revision": "66bb1cdf8dd7677a626d166a626487d3"
  },
  {
    "url": "stencil-site/docs/component-lifecycle/index.html",
    "revision": "03ea8f04dca522c539c9efa80962a5ba"
  },
  {
    "url": "stencil-site/docs/decorators/index.html",
    "revision": "8f90021f45271b16fc608550f0a5af89"
  },
  {
    "url": "stencil-site/docs/distribution/index.html",
    "revision": "488575851076a775bfa57595eed4d352"
  },
  {
    "url": "stencil-site/docs/events/index.html",
    "revision": "198bda1f91de031fe83ff51324632438"
  },
  {
    "url": "stencil-site/docs/forms/index.html",
    "revision": "0e75ec7d5aa41502b910f7d942c5d919"
  },
  {
    "url": "stencil-site/docs/getting-started/index.html",
    "revision": "874920cdc186f79971361eb84eb618d0"
  },
  {
    "url": "stencil-site/docs/handling-arrays/index.html",
    "revision": "c6c72787dcd1d92269be54717c320eac"
  },
  {
    "url": "stencil-site/docs/intro/index.html",
    "revision": "bfbfdf39803242e195459272713fe3c1"
  },
  {
    "url": "stencil-site/docs/my-first-component/index.html",
    "revision": "4582eb8dec019abcdef30bdb9ce52e55"
  },
  {
    "url": "stencil-site/docs/prerendering/index.html",
    "revision": "1a33c771d14a121d0b32d2a87a7e22ff"
  },
  {
    "url": "stencil-site/docs/routing/index.html",
    "revision": "7bcf49086c2c85d3dfe340e0a8026179"
  },
  {
    "url": "stencil-site/docs/server-side-rendering/index.html",
    "revision": "37faa32adda349c3ead8fbcaae741209"
  },
  {
    "url": "stencil-site/docs/service-workers/index.html",
    "revision": "3d85875613d40149cbd88f08b1ca7d8e"
  },
  {
    "url": "stencil-site/docs/shadow-dom/index.html",
    "revision": "70e48c0edb1ef4805ba431f6f8c0c51a"
  },
  {
    "url": "stencil-site/docs/stencil-config/index.html",
    "revision": "6c0f158658ad395cadff833e3baf6e4e"
  },
  {
    "url": "stencil-site/docs/templating/index.html",
    "revision": "ed355c6193d33dc2ed617cc45e65b858"
  },
  {
    "url": "stencil-site/docs/testing/index.html",
    "revision": "4ed856f93bf6c2c4a525eea77f4abd05"
  },
  {
    "url": "stencil-site/index.html",
    "revision": "a7de365eb1a5e9bd8bffc19251a40893"
  },
  {
    "url": "stencil-site/manifest.json",
    "revision": "c196d300ffd65908f26a5b316c8aa290"
  },
  {
    "url": "stencil-site/pwa/index.html",
    "revision": "c90ad59d25140c1c4868ee66277dc3a2"
  },
  {
    "url": "stencil-site/resources/index.html",
    "revision": "a44e5e5d35385e6f5da9a1804125b4ff"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
