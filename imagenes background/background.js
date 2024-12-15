// Array de URLs de imágenes aleatorias de fondo (diferentes de las anteriores)
const imagenes = [
    "https://images.unsplash.com/photo-1562577305-3952c58a8c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjk5M3wwfDF8c2VhcmNofDYxfHxmb3Jlc3R8ZW58MHx8fHwxNjkwMzI2NjMy&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1629891882580-cf3a034f92f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjk5M3wwfDF8c2VhcmNofDQxfHxjYXR8ZW58MHx8fHwxNjkwMzI2NjMy&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1485573014987-1f6b6bff1f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjk5M3wwfDF8c2VhcmNofDJ8fGJpZyUyMGJvcmR8ZW58MHx8fHwxNjkwMzI2NjMy&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1604670926111-d2a159ae9a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjk5M3wwfDF8c2VhcmNofDN8fGJlYWNoZXN8ZW58MHx8fHwxNjkwMzI2NjMy&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1559267682-4ffbf49be042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjk5M3wwfDF8c2VhcmNofDV8fGdhd2Fpb3xZW58MHx8fHwxNjkwMzI2NjMy&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1601492370288-9b6e58627b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjk5M3wwfDF8c2VhcmNofDk2fHxnYXRlZ3l8ZW58MHx8fHwxNjkwMzI2NjMy&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1571782319833-2c3e53b95c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjk5M3wwfDF8c2VhcmNofDkxfHxjb250YWluZXJ8ZW58MHx8fHwxNjkwMzI2NjMy&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1561352099-3f728748d91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjk5M3wwfDF8c2VhcmNofDJ8fGZpZWxkJTIwbm9ydGh3ZXN0fGVufDB8fHx8fDE2OTAzMjY2MzI&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1556341162-b235df1a48d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjk5M3wwfDF8c2VhcmNofDF8fGxhd2VufGVufDB8fHx8fDE2OTAzMjY2MzI&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1520880867055-8a3e691b7c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjk5M3wwfDF8c2VhcmNofDEzfHxsaWZlfGVufDB8fHx8fDE2OTAzMjY2MzI&ixlib=rb-1.2.1&q=80&w=1080"
];

// Función para cambiar la imagen de fondo
function cambiarFondo() {
    const imagenAleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];
    document.body.style.backgroundImage = `url('${imagenAleatoria}')`;
}

// Cambiar la imagen de fondo al cargar la página
cambiarFondo();

// Cambiar la imagen de fondo cada 15 segundos (15000 ms)
setInterval(cambiarFondo, 15000);
