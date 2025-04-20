

"use strict";

let result = document.querySelector(".result");
let input = document.querySelector(".input");
let buttons = document.querySelectorAll("button");

let num1 = "";
let num2 = "";
let operator = "";
let operatorClicked = false;

buttons.forEach(button => {
    button.addEventListener("click", function () {
        let datakey = button.dataset.key;

        if (datakey === "+" || datakey === "*" || datakey === "/" || datakey === "-" || datakey === "%") {
            if (operatorClicked) return; // منع الضغط على أكثر من عملية
            operator = datakey;
            operatorClicked = true;
            input.value += datakey;
        } else if (datakey === "AC") {
            input.value = '';
            num1 = '';
            num2 = '';
            operator = '';
            operatorClicked = false;
        } else if (datakey === "CC") {
            input.value = input.value.slice(0, -1);
            // ممكن تضيف منطق لإعادة ضبط num1 و num2 حسب ما تحتاج
        } else {
            input.value += datakey;
            if (!operatorClicked) {
                num1 += datakey;
            } else {
                num2 += datakey;
            }
        }
    });
});

result.addEventListener("click", function () {
    let finalresult = 0;

    if (operator === "+") {
        finalresult = parseFloat(num1) + parseFloat(num2);
    } else if (operator === "-") {
        finalresult = parseFloat(num1) - parseFloat(num2);
    } else if (operator === "/") {
        finalresult = parseFloat(num1) / parseFloat(num2);
    } else if (operator === "*") {
        finalresult = parseFloat(num1) * parseFloat(num2);
    } else if (operator === "%") {
        finalresult = parseFloat(num1) / 100 * parseFloat(num2);
    }

    input.value = finalresult;
    // إعادة ضبط القيم
    num1 = "";
    num2 = "";
    operator = "";
    operatorClicked = false;
});



