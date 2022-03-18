/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "71c351e4a3d3a65b51373d6d73261780"
  },
  {
    "url": "assets/css/0.styles.f3153578.css",
    "revision": "646423a8ab0894210de62d3a6a1401f8"
  },
  {
    "url": "assets/img/1.eb61f2a1.jpg",
    "revision": "eb61f2a1d2c6b0217701bc9bbd059092"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.c5b93c49.js",
    "revision": "3dcf53cefece79d9d3014d9873db291d"
  },
  {
    "url": "assets/js/10.6b392525.js",
    "revision": "fe2575ed12daf91486ef68c3635f08eb"
  },
  {
    "url": "assets/js/11.778df156.js",
    "revision": "0b70592dfe159b175e161e3c2e3afe32"
  },
  {
    "url": "assets/js/12.95788449.js",
    "revision": "67cac1ac9b3cc4de8b588d10ba975061"
  },
  {
    "url": "assets/js/13.d50e5b38.js",
    "revision": "1b49e8b6ffb8b106c8291970fdbeb23e"
  },
  {
    "url": "assets/js/14.c741fd6d.js",
    "revision": "d77a91f13eb67b16b43b8e1044ba68f6"
  },
  {
    "url": "assets/js/15.1f82625f.js",
    "revision": "abca50d444641a805a5688dd9580ef75"
  },
  {
    "url": "assets/js/16.fcf64c5f.js",
    "revision": "38aa28b42008180fa0c5ab5b0cf7e9c7"
  },
  {
    "url": "assets/js/17.73e2a7db.js",
    "revision": "8aa9ba2fcac2b1ccbdb35c848886a34f"
  },
  {
    "url": "assets/js/18.ca46cf8f.js",
    "revision": "213550d5f1d2b23f25168ece560e99cb"
  },
  {
    "url": "assets/js/19.fa201169.js",
    "revision": "e75e8869a1f6052839748b6bc755b5d7"
  },
  {
    "url": "assets/js/2.53fb9797.js",
    "revision": "8feb8345251ec34abfb72214f827f784"
  },
  {
    "url": "assets/js/20.016676da.js",
    "revision": "970b16aa15e17a1b7cfb2bd94ab8e1df"
  },
  {
    "url": "assets/js/21.eafb0e99.js",
    "revision": "186382135b4dc0297cea3c8a02659da0"
  },
  {
    "url": "assets/js/22.c39ce123.js",
    "revision": "23ccd89d4cff653b024cdce7c1921b40"
  },
  {
    "url": "assets/js/23.32309f20.js",
    "revision": "0cfa8cfb19fb73147dad9420805d19de"
  },
  {
    "url": "assets/js/24.dc786e35.js",
    "revision": "a8339f354df9f46b8486673065c8dc87"
  },
  {
    "url": "assets/js/25.91eb0d44.js",
    "revision": "ff19111e88065cce228b6c2d5710513c"
  },
  {
    "url": "assets/js/26.5d05df92.js",
    "revision": "4d23aeb564980d48aa9b61aeaf6862c5"
  },
  {
    "url": "assets/js/27.c043be78.js",
    "revision": "9fde661dba43f754fceb1fb5589ea938"
  },
  {
    "url": "assets/js/28.fd647a4b.js",
    "revision": "d2e9b7d1e9b8bf40fc26b66cc5db8102"
  },
  {
    "url": "assets/js/4.56897679.js",
    "revision": "255f47e909b889bc8371487158868f91"
  },
  {
    "url": "assets/js/5.91719ede.js",
    "revision": "dedc61951432ff21e490de708dfaaba8"
  },
  {
    "url": "assets/js/6.d886b78e.js",
    "revision": "ec3a8c1025b2adc85fabf294de36ad2f"
  },
  {
    "url": "assets/js/7.b213ade9.js",
    "revision": "ef6f975b9bc82b4343ac69ab618464ee"
  },
  {
    "url": "assets/js/8.386b7d42.js",
    "revision": "9b549eb72696048750bb7b8c68fc1e82"
  },
  {
    "url": "assets/js/9.1352c4ad.js",
    "revision": "89f482be5ba45d2dec908d2996ad9f12"
  },
  {
    "url": "assets/js/app.b0ca4e7f.js",
    "revision": "0bd5227ee4284fcfb41f6f5f0b75ce8c"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "1a1c391f130dba25f2981c6beaeb40b4"
  },
  {
    "url": "blogs/web/CSS/css1.html",
    "revision": "994d1460fa790bb4c8d3a5e31abe76d9"
  },
  {
    "url": "blogs/web/CSS/css2.html",
    "revision": "ce79e6822693bbd91eb06b0310c780d4"
  },
  {
    "url": "blogs/web/CSS/css3.html",
    "revision": "ed5b83e47d645fbe2dc46b33cffcdbbc"
  },
  {
    "url": "blogs/web/CSS/css4.html",
    "revision": "b139540073ff12a317e1dd5b20e473fa"
  },
  {
    "url": "blogs/web/CSS/css5.html",
    "revision": "da7a5d4c6613a031c3ebcd4d5ed8068c"
  },
  {
    "url": "blogs/web/CSS/css6.html",
    "revision": "b22f11252312372a1636f34608cfbce5"
  },
  {
    "url": "blogs/web/CSS/css7.html",
    "revision": "a861d01e43f6cb53049d66b169eca1e6"
  },
  {
    "url": "blogs/web/CSS/css8.html",
    "revision": "73086bcb14f36779619beaf3721867e9"
  },
  {
    "url": "blogs/web/FEQuestion/bibao.html",
    "revision": "9e4048c3eca3325dd65c4d6dc0380f25"
  },
  {
    "url": "blogs/web/HTML/html1.html",
    "revision": "ec197100684a41dd113154ffd3140804"
  },
  {
    "url": "blogs/web/HTML/html2.html",
    "revision": "29f9f7eafc9f19959f26dc4755b380e7"
  },
  {
    "url": "blogs/web/HTML/html3.html",
    "revision": "674d3f3e4254536b49675267f3e1ad7b"
  },
  {
    "url": "blogs/web/WebAPI/first.html",
    "revision": "05b47c88e0a78a01c68b7fee578afd8e"
  },
  {
    "url": "categories/index.html",
    "revision": "c83a97418b6e3703aded31d6131c6d57"
  },
  {
    "url": "categories/前端基础/index.html",
    "revision": "4bcdea84429866629d410d9ace7e32ea"
  },
  {
    "url": "categories/前端基础/page/2/index.html",
    "revision": "fb73ba3e3ba79c3bc0ffcf622850cf45"
  },
  {
    "url": "categories/前端基础疑难解答/index.html",
    "revision": "ed601cb1e027c9ade2b5876aa90e8c47"
  },
  {
    "url": "docs/theme-reco/mdcode.html",
    "revision": "74f3a6871b3d3f7a53caf26acb62f56f"
  },
  {
    "url": "greenLogo.png",
    "revision": "510916228afcaaf3264890ebc630da88"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "eaa26665addd3860462628d839ba71f7"
  },
  {
    "url": "light.png",
    "revision": "cbafc306fb8445d10bac83ca5e683287"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/css/index.html",
    "revision": "e93b5ce5659f5f3a35fbb8943055246f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "3a6f0982d7e0915fc05169f72b2fefd5"
  },
  {
    "url": "tag/index.html",
    "revision": "e39867a48bb4fe25684ad894bd13850e"
  },
  {
    "url": "tag/js/index.html",
    "revision": "778ff89d42aec484619e26c2c70606c6"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "cee654c778241dfea72cde4ddf1717bf"
  },
  {
    "url": "timeline/index.html",
    "revision": "56a708b9478b61e01be411e879051185"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
