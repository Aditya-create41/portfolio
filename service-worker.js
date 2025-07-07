const cacheName = "portfolio-v1";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/images/profile.jpg",
  "/images/icon-192.png",
  "/images/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
