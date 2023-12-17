window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("toc").style.left = "-400px"
    let toc = "";
    let level = 0;

    document.getElementById("contents").innerHTML =
        document.getElementById("contents").innerHTML.replace(
            /<h([\d])>([^<]+)<\/h([\d])>/gi,
            function (str, openLevel, titleText, closeLevel) {
                if (openLevel !== closeLevel) {
                    return str;
                }

                if (openLevel > level) {
                    toc += (new Array(openLevel - level + 1)).join("<ul>");
                } else if (openLevel < level) {
                    toc += (new Array(level - openLevel + 1)).join("</ul>");
                }

                level = parseInt(openLevel);

                const anchorTag = titleText.replace(/ /g, "_") + "-" + crypto.randomUUID();
                toc += "<li><a href=\"#" + anchorTag + "\">" + titleText
                    + "</a></li>";

                return `<h${openLevel}><a class="toc-title" id="${anchorTag}">${titleText}</a></h${closeLevel}>`;
            }
        );

    if (level) {
        toc += (new Array(level + 1)).join("</ul>");
    }

    document.getElementById("toc").innerHTML += toc;
});

function toc() {
    if (document.getElementById("toc").style.left === "0" || document.getElementById("toc").style.left === "0px") {
        document.getElementById("toc").style.left = "-400px"
        document.getElementById("toc-btn").innerHTML = " &#9654; "
    } else {
        document.getElementById("toc").style.left = "0"
        document.getElementById("toc-btn").innerHTML = " &#9664; "
    }
}