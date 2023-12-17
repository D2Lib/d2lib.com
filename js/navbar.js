function scrollControl() {
    if (document.getElementById("scroll").scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("nav").style.backgroundColor = "rgba(8,15,19,0.7)";
        document.getElementById("nav").style.backdropFilter = "blur(5px)"
    } else {
        document.getElementById("nav").style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.getElementById("nav").style.backdropFilter = ""
    }
}