
/******************************
 JS Miniräknare
*******************************/

var buttonAvail = false;

function btnCalc(whichButton) {
    let calcInput = document.getElementById(whichButton).innerHTML;
    let calcScreen = document.getElementById('calc-screen').innerHTML;
    let screenLength = calcScreen.length;

    switch (whichButton) {                      //Vilken knapp tryckte användaren på?
        case 'btn4':                            //Dela
            if (buttonAvail) inputNumbers('/');
            break;
        case 'btn8':                            //Gånger
            if (buttonAvail) inputNumbers('*');
            break;
        case 'btn12':                            //Minus
            if (buttonAvail) inputNumbers('-');
            break;
        case 'btn13':                            //Konvertera +/-
            if (buttonAvail) convert();
            break;
        case 'btn16':                            //Plus
            if (buttonAvail) inputNumbers('+');
            break;
        case 'btn18':                           //Sudda
            backSpace();
            break;
        case 'btn17':                           //Sudda allt
            clearScreen();
            break;
        case 'btn19':                            //Räkna
            if (buttonAvail) calculate();
            break;
        default:                                //Nuffror
            inputNumbers(calcInput);
    } //switch

    function inputNumbers(whatDigit) {
        if (!buttonAvail) clearScreen();
        buttonAvail=true;
        if (screenLength<19) {
            document.getElementById('calc-screen').innerHTML += whatDigit;
        }
    }

    function backSpace() {
        if (screenLength > 0) {
            calcScreen = calcScreen.slice(0, -1);
            document.getElementById('calc-screen').innerHTML = calcScreen;
        } else {
            buttonAvail=false;
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
        buttonAvail=false;
        document.getElementById('calc-screen').innerHTML = "";
    }
}
