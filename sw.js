const V='talcomap-v2',SHELL=['./','index.html','manifest.webmanifest','favicon.svg','icon-192.png','https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js','https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css'];
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>Promise.all(SHELL.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V&&x!=='tiles').map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
if(/tile|arcgisonline|cartocdn|memomaps|openrailwaymap|waymarkedtrails/.test(u.hostname)){e.respondWith(caches.open('tiles').then(async c=>{const m=await c.match(r);const f=fetch(r).then(x=>{if(x.ok||x.type==='opaque')c.put(r,x.clone());return x}).catch(()=>m);return m||f}));return}
if(u.origin===location.origin||u.hostname==='cdnjs.cloudflare.com')e.respondWith(fetch(r).then(x=>{const cl=x.clone();caches.open(V).then(c=>c.put(r,cl));return x}).catch(()=>caches.match(r).then(x=>x||caches.match('./'))))});
