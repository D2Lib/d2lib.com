function showMsg(msg, color = "#e6e6e6", bgColor = "#e34a4a") {
    globColor = color
    globBgColor = bgColor

    if (document.getElementById("message").style.top === '-20px') {
        display(msg, color, bgColor)
    } else {
        hideMsg()
        setTimeout(function () {
            display(msg, color, bgColor)
        }, 200);
    }
}

function display(msg, color, bgColor) {
    setColor(color, bgColor)
    document.getElementById("message").innerHTML = '<div class="inner">'
        + msg + '<a onclick="hideMsg()" class="close-btn">' +
        '<svg id="close-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="' + color + '" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
        '</a></div>'
    setTimeout(function () {
        document.getElementById("message").style.top = "0"
        document.getElementById("nav").style.top = "20px"
        document.getElementById("toc").style.padding = "60px 40px 5px"
    }, 40);
}

function setColor(color, bgColor) {
    document.getElementById("message").style.transition = "none 0s ease 0s"
    document.getElementById("message").style.backgroundColor = bgColor
    document.getElementById("message").style.color = color
    setTimeout(function () {
        document.getElementById("message").style.transition = 'all 0.2s ease 0s'
    }, 30);
}

function hideMsg() {
    document.getElementById("message").style.top = "-20px"
    document.getElementById("nav").style.top = "0"
    document.getElementById("toc").style.padding = "40px 40px 5px"
}

let globColor = "#e6e6e6", globBgColor = "#e34a4a";
window.addEventListener("DOMContentLoaded", () => {
    const isHover = e => e.parentElement.querySelector(':hover') === e;

    document.addEventListener('mousemove', function checkHover() {
        let hovered = isHover(document.getElementById("close-svg"));
        if (hovered !== checkHover.hovered) {
            if (hovered) {
                document.getElementById("close-svg").style.backgroundColor = globColor
                document.getElementById("close-svg").style.stroke = globBgColor
            } else {
                document.getElementById("close-svg").style.backgroundColor = globBgColor
                document.getElementById("close-svg").style.stroke = globColor
            }
            checkHover.hovered = hovered;
        }
    });
})