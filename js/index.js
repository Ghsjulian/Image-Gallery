"use strict";
function Selector(tag) {
    return document.querySelector(tag);
}

window.onload = () => {
    var container = Selector(".container");
    var image = "ghs__julian__";
    setTimeout(() => {
        Selector(".loader").style.display = "none";
        for (let i = 0; i < 66; i++) {
            container.innerHTML += `
            <div class="col">
                <img src="images/ghs__julian__${i}.png" />
            </div>
    `;
        }
        container.setAttribute("style", "style");
        var col = document.querySelectorAll(".col");
        col.forEach(img => {
            img.onclick = () => {
                //alert(img);
                container.style.opacity = "0.2";
                var src = img.children[0].getAttribute("src");
                Selector(".view").innerHTML = `
                 <span id="cross">X</span>
                <img src="${src}" />
                `;
                Selector(".view").style.display = "block";
                // Close View
                Selector("#cross").onclick = () => {
                    container.style.opacity = "1";
                   Selector(".view").style.display = "none"; 
                };
            };
        });
    }, 3000);
};
