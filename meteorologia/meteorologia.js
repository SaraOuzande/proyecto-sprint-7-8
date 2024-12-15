// Aquí colocamos la API Key y la ciudad en la que queremos obtener el clima
const apiKey = 'b8952835d9de4826896123534240612';  // Tu clave API de WeatherAPI
const city = 'Madrid'; // Ciudad por defecto

// Esta función obtiene los datos del clima de la API
function obtenerClima() {
    // Creamos la URL de la API con nuestra clave y ciudad
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`;

    // Usamos fetch para hacer una solicitud a la API
    fetch(url)
        .then(response => response.json())  // Cuando obtenemos la respuesta, la convertimos en formato JSON
        .then(data => {
            // Mostramos la ciudad y el país
            const ciudad = data.location.name;
            const pais = data.location.country;
            document.getElementById('location').innerHTML = `${ciudad}, ${pais}`;

            // Mostramos el estado del clima
            const estadoClima = data.current.condition.text;
            document.getElementById('weather-status').innerHTML = `Estado: ${estadoClima}`;

            // Mostramos la temperatura y el icono del clima
            const temp = data.current.temp_c;
            const iconoClima = data.current.condition.icon;
            document.getElementById('weather-icon').src = `https:${iconoClima}`;
            document.getElementById('temp').innerHTML = `${temp} °C`;

            // Mostramos otros datos como precipitación, humedad y viento
            const precipitacion = `Precipitaciones: ${data.current.precip_mm} mm`;
            const humedad = `Humedad: ${data.current.humidity}%`;
            const viento = `Viento: ${data.current.wind_kph} km/h`;
            document.getElementById('precipitation').innerHTML = precipitacion;
            document.getElementById('humidity').innerHTML = humedad;
            document.getElementById('wind').innerHTML = viento;

            // Mostramos la previsión por horas para el día de hoy
            let previsionesHTML = '';  // Esta variable guardará el HTML con la previsión por horas
            const previsiones = data.forecast.forecastday[0].hour;
            previsiones.forEach(function(hora) {
                previsionesHTML += `
                    <div>
                        <p>${hora.time.split(' ')[1]}</p>
                        <img src="https:${hora.condition.icon}" alt="Icono de clima">
                        <p>${hora.temp_c} °C</p>
                    </div>
                `;
            });

            // Insertamos las previsiones en el HTML
            document.getElementById('forecast').innerHTML = previsionesHTML;
        })
        .catch(error => {
            console.error('Hubo un error al obtener los datos:', error);
        });
}

// Llamamos a la función cuando la página cargue
window.onload = obtenerClima;
