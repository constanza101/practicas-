self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('jueguito-app').then(function(cache) {
      return cache.addAll(
        [
          '/assets/bootstrap.css',
          '/assets/bootstrap.js',
          '/assets/jquery.js',
          '/assets/popper.js',
          '/images/piedra.png',
          '/images/piedra-happy.png',
          '/images/piedra-empate.png',
          '/images/piedra-sad.png',
          '/images/papel.png',
          '/images/papel-happy.png',
          '/images/papel-empate.png',
          '/images/papel-sad.png',
          '/images/tijeras.png',
          '/images/tijeras-happy.png',
          '/images/tijeras-empate.png',
          '/images/tijeras-sad.png',
          '/index.js',
          '/index.html',
          '/index.css',
          '/service-worker.js'
        ]
      );
    })
  );
});

this.addEventListener('fetch', function (event) {
    // it can be empty if you just want to get rid of that error
});
