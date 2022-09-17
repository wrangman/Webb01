
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
        } else {
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
