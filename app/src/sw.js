const VERSION = 9;
const CACHE_NAME = `static-cache-${VERSION}`;
/* eslint-disable */
const { assets } = serviceWorkerOption;
/* eslint-enable */

let assetsToCache = [
  ...assets,
  './'
];

/* Loop through the webpack assets and cache them */
assetsToCache = assetsToCache.map(path =>
  new URL(path, location).toString()
);

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache =>
        cache.addAll(assetsToCache)
      ).catch(error => {
        throw error;
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName.indexOf(CACHE_NAME) === 0) {
              return null;
            } else {
              return caches.delete(cacheName);
            }
          })
        )
      )
    );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) =>
        response || fetch(event.request)
    )
  );
});
