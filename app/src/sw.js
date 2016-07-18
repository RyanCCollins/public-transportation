const VERSION = 1;
const CACHE_NAME = `static-cache-${VERSION}`;
const { assets } = serviceWorkerOption;

let assetsToCache = [
  ...assets,
  './'
];

assetsToCache = assetsToCache.map(path => {
  return new URL(path, location).toString();
});

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        return cache.addAll(assetsToCache);
      }).catch(error => {
        console.error(error);
        throw error;
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName.indexOf(CACHE_NAME) === 0) {
              return null;
            } else {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
});

self.addEventListener('message', event => {
  switch (event.data.action) {
    case 'skipWaiting':
      if (self.skipWaiting) {
        self.skipWaiting();
      }
      break;
    default:
      break;
  }
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
