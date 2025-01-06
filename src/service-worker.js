self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
    self.skipWaiting(); // Activate the service worker immediately
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
    return self.clients.claim(); // Claim control of all clients
});