var selColor1 = null;
var selColor2 = null;
let tempQuery = window.location.search;

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                /* Remove the attribute, and call this function once more: */
                elmnt.removeAttribute("w3-include-html");
                includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

includeHTML();

function aboutDialog() {
    alert('Om litespoon');
}

function showSubMenu(whatId, stateShow) {
    console.log(stateShow);

    if (stateShow == true) {
        document.getElementById(whatId).style.visibility = "visible";
    } else {
        document.getElementById(whatId).style.visibility = "hidden";
    }
}

if (tempQuery.search("checklist") > 2) {   // endast ladda om på rätt sida
    const form = document.querySelector("form");
    const input = document.querySelector("input");
    const list = document.querySelector(".list");

    form.addEventListener("submit", e => {
        e.preventDefault()
        const value = input.value
        const elem = document.createElement("div")

        elem.textContent = value;
        elem.addEventListener("click", () => {
            if (elem.style.textDecoration == "line-through") {
                elem.style.textDecoration = "none";
            } else {
                elem.style.textDecoration = "line-through";
            }
        })
        list.append(elem);
        input.value = "";
    })
}

function btnClick(whatColor) {
    if (selColor1 == null || selColor2 == null) {
        document.getElementById(whatColor).style.opacity = ".6";
        if (selColor1 == null) {
            selColor1 = whatColor;
        } else {
            selColor2 = whatColor;
        }
    }
}

function btnEval() {
    if (selColor1 == null && selColor2 == null) {
        alert("Välj två färger först");
    } else {
        document.getElementById(selColor1).style.opacity = "1";
        document.getElementById(selColor2).style.opacity = "1";

        document.getElementById("btn-eval").style.backgroundImage = "linear-gradient(90deg, " + selColor1 + ", " + selColor2 + ")";

        selColor1 = null
        selColor2 = null
    }
}
