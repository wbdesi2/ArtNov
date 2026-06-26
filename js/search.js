// JavaScript Document

const chips = document.querySelectorAll(".chip");

chips.forEach(chip=>{

    chip.addEventListener("click",()=>{

        chip.classList.toggle("selected");

    });

});

const sheet = document.getElementById("bottomSheet");

document.getElementById("saveBtn").addEventListener("click",()=>{

    sheet.classList.add("show");

    setTimeout(()=>{

        sheet.classList.remove("show");

    },2000);

});