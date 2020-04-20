'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "926cd8008bef60a4e735ba8d18fbac9c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"assets/assets/demo_zh.md": "4e106323eae14ac10951219edcee94be",
"assets/assets/demo_en.md": "f5eccc31601b2faa52e4d0f01baf0c9c",
"assets/assets/editor.md": "8207390330c4d640c23df6b689d158e3",
"assets/FontManifest.json": "96880f5cbd12a15751331cdbdac93202",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/AssetManifest.json": "9e4288fc8bf78d02dd0e2550fd39829c",
"assets/LICENSE": "1a4e2cc75d9c5d23e2cb57d5b1696cdd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "4ae41154e255050ab609f90a78824b46",
"manifest.json": "00e0b69b49487ce4f9ff0c5fac8fda49"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
