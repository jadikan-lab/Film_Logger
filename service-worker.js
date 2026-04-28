self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const cachePrefixes = ['solargraph-', 'film-logger-']
    const keys = await caches.keys()
    const targetKeys = keys.filter((key) => cachePrefixes.some((prefix) => key.startsWith(prefix)))
    await Promise.all(targetKeys.map((key) => caches.delete(key)))
    await self.registration.unregister()
    const clients = await self.clients.matchAll({ type: 'window' })
    clients.forEach((client) => client.navigate(client.url))
  })())
})
