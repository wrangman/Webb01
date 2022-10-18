

const elemBtnCalc = document.getElementById("btn-calc");
const elemCalcScreen = document.getElementById("calc-screen");


function btnCalc() {                    // denna funktion tar hand om beräkningen 
    let sum = 0;
    let x = 10;
    let y = 5;
    
    sum = x + y;
    
    elemCalcScreen.innerHTML = sum;
}

function addDigit(thisSign) {           // lägg till siffra
    elemCalcScreen.innerHTML += thisSign;
}

function btnBackSpace() {               // ta bort
    let calcScreen = elemCalcScreen.innerHTML;
    calcScreen = calcScreen.slice(0, -1);
    elemCalcScreen.innerHTML = calcScreen;
    
}