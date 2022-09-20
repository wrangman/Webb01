
/******************************
 JS Miniräknare
*******************************/

var buttonEnabled = false;
var isRotated = false;

function btnCalc(whichButton) {
    let calcInput = document.getElementById(whichButton).innerHTML;
    let calcScreen = document.getElementById('calc-screen').innerHTML;
    let disp = document.getElementById('calc-screen');
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
        case 'btn19':
            rotateCalc();
            break;
        case 'btn20':                            //Räkna
            if (buttonEnabled) calculate();
            break;
        default:                                //Nuffror
            inputNumbers(calcInput);
    } //switch

    function inputNumbers(whatDigit) {
        if (!buttonEnabled) clearScreen();
        buttonEnabled=true;
        if (screenLength<100) {
            disp.innerHTML += whatDigit;
            disp.scrollLeft = disp.scrollWidth;
        }
    }

    function backSpace() {
        if (screenLength > 0) {
            calcScreen = calcScreen.slice(0, -1);
            disp.innerHTML = calcScreen;
        }
        if (disp.innerHTML.length <= 0) {
            buttonEnabled=false;
        }
    }

    function convert() {
        if (calcScreen < 0) {
            calcScreen = Math.abs(calcScreen);
            disp.innerHTML = calcScreen;
        } else if (calcScreen > 0) {
            calcScreen = calcScreen * -1;
            disp.innerHTML = calcScreen;
        }
    }

    function calculate() {
        try {
            let result = eval(calcScreen);
            if (result != "Infinity" && result != "-Infinity") disp.innerHTML = result;
        } catch (error) {
            alert(error);
        }
    }

    function rotateCalc() {
        let calcBody = document.getElementById('calc-UI');
        
        if (!isRotated) {
            calcBody.style.transform = "rotate(180deg)";
            isRotated=true;
        
        } else {
            calcBody.style.transform = "rotate(0deg)";
            isRotated=false;
        }
    }

    function clearScreen() {
        buttonEnabled=false;
        disp.innerHTML = "";
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

div.style.zIndex = "1";
div.style.left = "40%";
div.style.top = "25%";

div.addEventListener('pointerdown', function(e) {
    isDown = true;
    offset = [
        div.offsetLeft - e.clientX,
        div.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('pointerup', function() {
    isDown = false;
}, true);

document.addEventListener('pointermove', function(event) {
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