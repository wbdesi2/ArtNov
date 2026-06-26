const tabs = document.querySelectorAll(".tabs button");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(btn => btn.classList.remove("active"));
        tab.classList.add("active");
    });
});

document.querySelector(".back-btn").addEventListener("click", () => {
    alert("Volver atrás");
});

document.querySelector(".commission-btn").addEventListener("click", () => {
    alert("Ir a página de comisiones");
});

function openMenu()
{
    document
    .getElementById("overlayMenu")
    .classList.add("show");
}

function closeMenu()
{
    document
    .getElementById("overlayMenu")
    .classList.remove("show");
}

function openDeleteConfirm()
{
    closeMenu();

    document
    .getElementById("deleteOverlay")
    .classList.add("show");
}

function closeDeleteConfirm()
{
    document
    .getElementById("deleteOverlay")
    .classList.remove("show");
}

function deletePost()
{
    console.log("Deleting post...");

    const post =
    document.getElementById("myPost");

    console.log(post);

    if (post)
    {
        post.remove();
    }

    closeDeleteConfirm();
}