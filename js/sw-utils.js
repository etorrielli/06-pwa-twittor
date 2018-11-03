// GUARDAR EN EL CACHE DINAMICO
function actualizarCacheDinamico(dynamicCache, req, res) {

    if (res.ok) {
        caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
            return res.clone();

        });
    } else{
        return res;
    }
}