document.addEventListener("DOMContentLoaded", function () {
    // Cargar la información desde el archivo JSON
    fetch("./info.json")
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll(".dropdown-item").forEach(item => {
                item.addEventListener("click", function () {
                    let seccion = this.getAttribute("data-seccion");
                    document.getElementById("modalTitulo").innerText = this.innerText;
                    document.getElementById("modalContenido").innerText = data[seccion] || "Información no disponible.";

                    // Eliminar el atributo inert cuando el modal se abre
                    document.getElementById("infoModal").removeAttribute("inert");
                });
            });
        })
        .catch(error => console.error("Error cargando la información:", error));

    // Agregar el atributo inert cuando el modal se cierra
    document.getElementById("infoModal").addEventListener("hidden.bs.modal", function () {
        document.getElementById("infoModal").setAttribute("inert", "");
    });

    // Eliminar el atributo inert cuando el modal se abre
    document.getElementById("infoModal").addEventListener("shown.bs.modal", function () {
        document.getElementById("infoModal").removeAttribute("inert");
    });
});
