window.addEventListener("DOMContentLoaded", () => {
    const content = ["Open source", "Light weight", "Simple"];
    let part = 0;
    let part_index = 0;
    let interval;
    const element = document.getElementById("slogan")

    interval = setInterval(Type, 100);

    function Type() {
        const text = content[part].substring(0, part_index + 1);
        element.innerHTML = text;
        part_index++;
        if (text === content[part]) {
            clearInterval(interval);
            setTimeout(function () {
                interval = setInterval(Delete, 50);
            }, 1000);
        }
    }

    function Delete() {
        const text = content[part].substring(0, part_index - 1);
        element.innerHTML = text;
        part_index--;
        if (text === '') {
            clearInterval(interval);
            if (part === (content.length - 1))
                part = 0;
            else
                part++;
            part_index = 0;
            setTimeout(function () {
                interval = setInterval(Type, 100);
            }, 200);
        }
    }

});