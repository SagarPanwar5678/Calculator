let number = [];//                             array of number in calculator ex :- "[567,67]" 
let oprator = [];//                            array of operator in calculator ex :- "[+]"
let value = ''; //                             final value ex "567+67"
let display = document.getElementById("display");
let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("operator");
let result = document.getElementById("result");
let clear = document.getElementById("clear");




let index = 0; // focus on current index of number array
let Oindex = 0;// focus on current index of operator arry
let numOfOperator = 0; // focus on operators number "USE:- if user input 2 operator consecutive then calculator show error"

let valueOn = false;   // if result print then the value if true otherwise false


// when user click button or operator
function valueAppend(event) {

    if (valueOn == true) {
        display.value = '';
        value = '';
        valueOn = false;
    }

    let text = event.target.innerText;
    display.value += text;
    value += text;
}


//for numbers in calculator
Array.from(numbers).forEach(numberButton => {

    numberButton.addEventListener('click', valueAppend);
});

//for operators in calculator
Array.from(operators).forEach(operatorButton => {

    operatorButton.addEventListener('click', valueAppend);
});




//when user click "="
result.addEventListener('click', function () {

    let num_container = '';
    for (let char of value) {


        //if first or last value is other than number
        if (!parseInt(value[0]) || !parseInt(value[value.length - 1])) {
            display.value = "Incorrect string";
            number = [];
            oprator = [];
            return 1;
        }

        //if value is number
        if (parseInt(char)) {
            if (numOfOperator > 1) {
                display.value = "Incorrect string";
                number = [];
                oprator = [];
                return 1;
            }
            num_container += char;
            numOfOperator = 0;
        }

        //if value is operator
        else if (char == '*' || char == '-' || char == '+' || char == '/') {
            number[index++] = parseInt(num_container);
            oprator[Oindex++] = char;
            num_container = '';
            numOfOperator++;
        }
    }
    number[index] = parseInt(num_container);
    num_container = '';

    let finalResult = 0;
    if (oprator == '+') {
        finalResult = number[0] + number[1];
    }
    else if (oprator == '-') {
        finalResult = number[0] - number[1];
    }
    else if (oprator == '*') {
        finalResult = number[0] * number[1];
    }
    else if (oprator == '/') {
        finalResult = number[0] / number[1];
    }

    number = [];
    oprator = [];

    display.value = finalResult;
    index = 0;
    Oindex = 0;
    valueOn = true;

});



//when user click "C";
clear.addEventListener('click', function () {
    number = [];
    oprator = [];
    display.value = '';
    value = '';
})
