
/******************************
 JS Färgblandare
*******************************/

var selColor1 = null;
var selColor2 = null;

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