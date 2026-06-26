const imageUpload = document.getElementById("imageUpload");
const previewArea = document.getElementById("preview-area");
const addTagBtn = document.getElementById("addTag");
const tagInput = document.getElementById("tagInput");
const tagList = document.getElementById("tagList");

imageUpload.addEventListener("change", function () {
    const files = imageUpload.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imageURL = URL.createObjectURL(file);

        const box = document.createElement("div");
        box.classList.add("preview-box");

        box.innerHTML = `
            <img src="${imageURL}" alt="Imagen subida">
            <button class="delete-img">x</button>
        `;

        previewArea.appendChild(box);

        box.querySelector(".delete-img").addEventListener("click", function () {
            box.remove();
        });
    }
});

addTagBtn.addEventListener("click", function () {
    let value = tagInput.value.trim();

    if (value !== "") {
        if (!value.startsWith("#")) {
            value = "#" + value;
        }

        const tag = document.createElement("span");
        tag.textContent = value;

        tag.addEventListener("click", function () {
            tag.remove();
        });

        tagList.appendChild(tag);
        tagInput.value = "";
    }
});

document.querySelector(".publicar").addEventListener("click", function () {
    alert("Publicación creada");
});

document.querySelector(".borradores").addEventListener("click", function () {
    alert("Guardado en borradores");
});

document.querySelector(".cancelar").addEventListener("click", function () {
    alert("Crear publicación cancelado");
});// JavaScript Document