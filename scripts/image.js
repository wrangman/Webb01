const elemShowImage = document.getElementById('show-image');
const elemBtnClose = document.getElementById('btn-close');

elemShowImage.addEventListener("click", e => closeImage());

function loadImage(src, alt) {

    let windowW = window.innerWidth;
    let windowH = window.innerHeight;
    let img = document.createElement("img");

    console.log(windowW, windowH);

    img.src = src;
    img.width = windowW - 100;
    img.height = windowH - 100;
    img.style.left = - windowW + 100;
    img.alt = alt;
    img.id = "tempImage";
    img.style.objectFit = "contain";
    img.style.cursor = "zoom-out";
    img.style.border = "none";

    elemShowImage.style.display = "flex"; //show image
    elemShowImage.appendChild(img);
}

function closeImage() {
    let remImage = document.getElementById('tempImage');
 
    remImage.remove();
    elemShowImage.style.display = "none";
}




