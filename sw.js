// Minimal service worker — required for the browser to treat this as an installable app.
// Intentionally does NOT cache anything, so it never interferes with API calls
// (Gemini/Anthropic) or serve stale content. It simply passes every request through.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
