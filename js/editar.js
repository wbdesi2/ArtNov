const switches = document.querySelectorAll(".switch input");

switches.forEach(sw => {
    sw.addEventListener("change", () => {
        if (sw.checked) {
            console.log("Activado");
        } else {
            console.log("Desactivado");
        }
    });
});

document.querySelector(".publicar").addEventListener("click", () => {
    alert("Publicación guardada");
});

document.querySelector(".cancelar").addEventListener("click", () => {
    alert("Edición cancelada");
});// JavaScript Document