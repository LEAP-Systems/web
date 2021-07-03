document.addEventListener("DOMContentLoaded", setTimeout(intro, 2500));

function intro() {
    var wholebody = document.getElementsByClassName("hidden");
    var thelogo = document.getElementsByClassName ("logo");
    wholebody[0].classList.remove("hidden");
    thelogo[0].classList.add("hidden");
    document.body.style.backgroundColor = "#D1D6DA";
    window.scroll(0, 0)
}

