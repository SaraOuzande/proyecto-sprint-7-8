// Obtener los elementos del DOM
const titleInput = document.getElementById("title");
const urlInput = document.getElementById("url");
const addButton = document.getElementById("addButton");
const linksList = document.getElementById("linksList");

// Función para crear el elemento del link
function createLinkElement(title, url) {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";  // Abrir en nueva pestaña
    a.textContent = title;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.classList.add("delete");

    deleteButton.onclick = function() {
        li.remove();
        removeLinkFromStorage(title);  // Eliminar de localStorage
    };

    li.appendChild(a);
    li.appendChild(deleteButton);
    linksList.appendChild(li);
}

// Función para guardar el link en localStorage
function saveLinkToStorage(title, url) {
    let links = JSON.parse(localStorage.getItem("links")) || [];
    links.push({ title, url });
    localStorage.setItem("links", JSON.stringify(links));
}

// Función para cargar los links guardados al cargar la página
function loadLinksFromStorage() {
    let links = JSON.parse(localStorage.getItem("links")) || [];
    links.forEach(link => {
        createLinkElement(link.title, link.url);
    });
}

// Función para eliminar un link de localStorage
function removeLinkFromStorage(title) {
    let links = JSON.parse(localStorage.getItem("links")) || [];
    links = links.filter(link => link.title !== title);  // Filtrar el link que queremos eliminar
    localStorage.setItem("links", JSON.stringify(links));
}

// Al hacer clic en el botón "Añadir Link"
addButton.addEventListener("click", function() {
    const title = titleInput.value;
    const url = urlInput.value;

    // Verificar que ambos campos no estén vacíos
    if (title && url) {
        createLinkElement(title, url);
        saveLinkToStorage(title, url);
        titleInput.value = "";  // Limpiar el input
        urlInput.value = "";  // Limpiar el input
    } else {
        alert("Por favor, ingresa tanto el título como la URL.");
    }
});

// Cargar los links guardados en localStorage cuando la página se carga
window.onload = loadLinksFromStorage;
