let value = "";
let show = document.querySelector("#show");
let count = 0;
let temp;

function qSelectors() {
    document.querySelector("#plus").addEventListener("click", () => {
        count++;
        if (count >= 2) {
            temp = eval(value);
            value = temp + " + ";
            show.innerHTML = value;
        }
        else {
            value = value + " + ";
            show.innerHTML = value;
        }
    })

    document.querySelector("#minus").addEventListener("click", () => {
        count++;
        if (count >= 2) {
            temp = eval(value);
            value = temp + " - ";
            show.innerHTML = value;
        } else {
            value = value + " - ";
            show.innerHTML = value;
        }
    })

    document.querySelector("#times").addEventListener("click", () => {
        count++;
        if (count >= 2) {
            temp = eval(value);
            value = temp + " * ";
            show.innerHTML = value;
        } else {
            value = value + " * ";
            show.innerHTML = value;
        }
    })

    document.querySelector("#division").addEventListener("click", () => {
        count++;
        if (count >= 2) {
            temp = eval(value);
            value = temp + " / ";
            show.innerHTML = value;
        } else {
            value = value + " / ";
            show.innerHTML = value;
        }
    })

    document.querySelector("#dot").addEventListener("click", () => {
        count++;
        if (count >= 2) {
            temp = eval(value);
            value = temp + ".";
            show.innerHTML = value;
        } else {
            value = value + ".";
            show.innerHTML = value;
        }
    })

    document.querySelector("#clear").addEventListener("click", () => {
        value = "";
        show.innerHTML = 0;
    })

    document.querySelector("#equals").addEventListener("click", () => {
        let ev = eval(value);
        value = ev.toString();
        show.innerHTML = value;
        count = 0;
    })

    document.querySelector("#del").addEventListener("click", () => {
        if (value[value.length - 1] == " ") {
            value = value.slice(0, -3);
            show.innerHTML = value;
        }
        else {
            value = value.slice(0, -1);
            show.innerHTML = value;
            if (value.length <= 0) {
                show.innerHTML = 0;
            }
        }
    })
    
    document.querySelector("#one").addEventListener("click", () => {
        value = value + "1";
        show.innerHTML = value;
    })

    document.querySelector("#two").addEventListener("click", () => {
        value = value + "2";
        show.innerHTML = value;
    })

    document.querySelector("#three").addEventListener("click", () => {
        value = value + "3";
        show.innerHTML = value;
    })

    document.querySelector("#four").addEventListener("click", () => {
        value = value + "4";
        show.innerHTML = value;
    })

    document.querySelector("#five").addEventListener("click", () => {
        value = value + "5";
        show.innerHTML = value;
    })

    document.querySelector("#six").addEventListener("click", () => {
        value = value + "6";
        show.innerHTML = value;
    })

    document.querySelector("#seven").addEventListener("click", () => {
        value = value + "7";
        show.innerHTML = value;
    })

    document.querySelector("#eight").addEventListener("click", () => {
        value = value + "8";
        show.innerHTML = value;
    })

    document.querySelector("#nine").addEventListener("click", () => {
        value = value + "9";
        show.innerHTML = value;
    })

    document.querySelector("#zero").addEventListener("click", () => {
        value = value + "0";
        show.innerHTML = value;
    })
}




function operators() {
   document.querySelector("#plus").addEventListener("click", () => {
       if (num1 == null) {
            num1 = parseFloat(value);
            value = "";
            show.innerHTML = num1.toString();
            lastOperator = "plus";
       }

       else {
            num2 = parseFloat(value);
            value = "";
            num1 = num1 + num2;
            num2 = null;
            show.innerHTML = num1.toString();
            lastOperator = "plus";
       }
   });

   document.querySelector("#minus").addEventListener("click", () => {
       if (num1 == null) {
           num1 = parseFloat(value);
           value = num1;
           show.innerHTML = value;
           lastOperator = "minus";
       } else {
           num2 = parseFloat(value);
           value = "";
           num1 = num1 - num2;
           num2 = null;
           show.innerHTML = num1;
           lastOperator = "minus";
       }
   });

   document.querySelector("#times").addEventListener("click", () => {
       if (num1 == null) {
           num1 = parseFloat(value);
           value = "";
           show.innerHTML = num1;
           lastOperator = "times";
       } else {
           num2 = parseFloat(value);
           value = "";
           num1 = num1 * num2;
           num2 = null;
           show.innerHTML = num1;
           lastOperator = "times";
       }
   });

   document.querySelector("#equals").addEventListener("click", () => {
        num2 = parseFloat(value);
        switch(lastOperator) {
            case "plus":
                num1 = num1 + num2;
                num2 = null;
                value = num1.toString();
                show.innerHTML = value;
                break;
            case "minus":
                num1 = num1 - num2;
                value = num1.toString();
                show.innerHTML = value;
                break;
            case "times":
                num1 = num1 * num2;
                value = num1.toString();
                show.innerHTML = value;
                break;
        }
   })
}

qSelectors();
