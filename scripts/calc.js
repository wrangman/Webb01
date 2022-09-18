
/******************************
 JS Miniräknare
*******************************/

var buttonEnabled = false;

function btnCalc(whichButton) {
    let calcInput = document.getElementById(whichButton).innerHTML;
    let calcScreen = document.getElementById('calc-screen').innerHTML;
    let screenLength = calcScreen.length;

    switch (whichButton) {                      //Vilken knapp tryckte användaren på?
        case 'btn4':                            //Dela
            if (buttonEnabled) inputNumbers('/');
            break;
        case 'btn8':                            //Gånger
            if (buttonEnabled) inputNumbers('*');
            break;
        case 'btn12':                            //Minus
            if (buttonEnabled) inputNumbers('-');
            break;
        case 'btn13':                            //Konvertera +/-
            if (buttonEnabled) convert();
            break;
        case 'btn16':                            //Plus
            if (buttonEnabled) inputNumbers('+');
            break;
        case 'btn18':                           //Sudda
            backSpace();
            break;
        case 'btn17':                           //Sudda allt
            clearScreen();
            break;
        case 'btn19':                            //Räkna
            if (buttonEnabled) calculate();
            break;
        default:                                //Nuffror
            inputNumbers(calcInput);
    } //switch

    function inputNumbers(whatDigit) {
        if (!buttonEnabled) clearScreen();
        buttonEnabled=true;
        if (screenLength<19) {
            document.getElementById('calc-screen').innerHTML += whatDigit;
        }
    }

    function backSpace() {
        if (screenLength > 0) {
            calcScreen = calcScreen.slice(0, -1);
            document.getElementById('calc-screen').innerHTML = calcScreen;
        }
        if (document.getElementById('calc-screen').innerHTML.length <= 0) {
            buttonEnabled=false;
        }
    }

    function convert() {
        if (calcScreen <0 ) {
            calcScreen = Math.abs(calcScreen);
            document.getElementById('calc-screen').innerHTML = calcScreen;
        } else if (calcScreen > 0) {
            calcScreen = calcScreen * -1;
            document.getElementById('calc-screen').innerHTML = calcScreen;
        }
    }

    function calculate() {
        try {
            let result = eval(calcScreen);
            if (result != "Infinity" && result != "-Infinity") document.getElementById('calc-screen').innerHTML = result;
        } catch (error) {
            alert(error);
        }
    }

    function clearScreen() {
        buttonEnabled=false;
        document.getElementById('calc-screen').innerHTML = "";
    }
}

/****************************************
 *  Flytta miniräknaren
 * *************************************/


var mousePosition;
var offset = [0,0];
var div;
var isDown = false;

div = document.getElementById("calc-UI");
/*div.style.position = "absolute";
div.style.left = "0px";
div.style.top = "0px";
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "blue";*/

div.style.left = "40%";
div.style.top = "25%";

div.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        div.offsetLeft - e.clientX,
        div.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        div.style.left = (mousePosition.x + offset[0]) + 'px';
        div.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);