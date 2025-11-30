function openPopup(){
    document.getElementById("popup").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closePopup(){
    document.getElementById("popup").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

/* SMOOTH SCROLL */
document.querySelectorAll(".scroll").forEach(link=>{
    link.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

/* SCROLL ANIMATIONS */
const fadeElements = document.querySelectorAll(".fade-in, .fade-up");

function reveal(){
    fadeElements.forEach(el=>{
        const pos = el.getBoundingClientRect().top;
        if(pos < window.innerHeight - 100){
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();
