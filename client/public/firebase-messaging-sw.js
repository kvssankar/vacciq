const CACHE_NAME = "version-1";
const urlsToCache = ["/"];

const self = this;

//install a service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("openend cache");
      return cache.addAll(urlsToCache);
    })
  );
});

//listen for request
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("index.html"));
    })
  );
});

self.addEventListener("notificationclick", function (event) {
  let url = "https://vinmanager.vinnovateit.com/dashboard/";
  event.notification.close(); // Android needs explicit close.
  event.waitUntil(
    clients
      .matchAll({ includeUncontrolled: true, type: "window" })
      .then((windowClients) => {
        // Check if there is already a window/tab open with the target URL
        for (var i = 0; i < windowClients.length; i++) {
          var client = windowClients[i];
          // If so, just focus it.
          if (client.url === url && "focus" in client) {
            return client.focus();
          }
        }
        // If not, then open the target URL in a new window/tab.
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
  );
});

//activate the service worker
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName))
            return caches.delete(cacheName);
        })
      );
    })
  );
});

importScripts("https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.15.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyAN_28kytpGG1rigi20gUsJsOT1ZfRHUMs",
  authDomain: "vinmamanger.firebaseapp.com",
  projectId: "vinmamanger",
  storageBucket: "vinmamanger.appspot.com",
  messagingSenderId: "490896163238",
  appId: "1:490896163238:web:1a220c69229f841389cf67",
  measurementId: "G-KQRJP37H7C",
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  var obj = JSON.parse(payload.data.notification);
  var ntitle = obj.title;
  var noptions = {
    body: obj.body,
    icon: obj.icon,
  };
  return self.registration.showNotification(ntitle, noptions);
});
