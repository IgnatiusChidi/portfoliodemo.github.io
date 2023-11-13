const link = document.getElementsByClassName("links");

link.onclick = () =>{
    link.classList.toggle("activeLink")
}


const hamburger = document.getElementById("hamburger");

hamburger.onclick = () =>{
    const navbar = document.getElementById("navUl");
    navbar.classList.toggle("active");

    const overlay = document.getElementById("overlay");
    overlay.classList.toggle("overlayClass");

    const hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("lineAni");

    const body = document.querySelector("body")
    body.classList.toggle("hiddenOverflow")
}