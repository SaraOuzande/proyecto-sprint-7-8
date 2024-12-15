// Conjunto de caracteres
const letrasMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinus = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()-_=+";

function generarContraseña(longitud) {
    // Aseguramos al menos un carácter de cada tipo
    let contraseña = "";
    contraseña += letrasMayus.charAt(Math.floor(Math.random() * letrasMayus.length));
    contraseña += letrasMinus.charAt(Math.floor(Math.random() * letrasMinus.length));
    contraseña += numeros.charAt(Math.floor(Math.random() * numeros.length));
    contraseña += simbolos.charAt(Math.floor(Math.random() * simbolos.length));

    // Rellenamos el resto de la longitud
    const caracteres = letrasMayus + letrasMinus + numeros + simbolos;
    for (let i = contraseña.length; i < longitud; i++) {
        contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    // Mezclamos la contraseña para mayor aleatoriedad
    return contraseña.split('').sort(() => Math.random() - 0.5).join('');
}

// Evento para generar contraseña
document.getElementById('generate').addEventListener('click', function () {
    const longitud = parseInt(document.getElementById('length').value);

    // Validación de la longitud
    if (isNaN(longitud) || longitud < 12 || longitud > 50) {
        alert("Por favor, introduce un número entre 12 y 50.");
        return;
    }

    // Generamos la contraseña y la mostramos
    const contraseña = generarContraseña(longitud);
    document.getElementById('password').textContent = `Contraseña generada: ${contraseña}`;
});

// Evento para mostrar la contraseña personalizada
document.getElementById('customPassword').addEventListener('input', function () {
    const customPassword = document.getElementById('customPassword').value;
    document.getElementById('password').textContent = `Contraseña personalizada: ${customPassword}`;
});
