//task 1
function square(num){
    return num * num
}

console.log(square(5));

//task 2
function convert_into_farengate(celsius){
    return celsius * 9/5 + 32;
};

console.log(convert_into_farengate(5));

//task 3
function user_range(num, range1, range2){
    if(typeof num !== typeof 1 || typeof range1 !== typeof 1 || typeof range2 !== typeof 1){
        return `All variables must be numbers`;
    }

    if(num >= range1 && num <= range2){
        return `The number ${num} is in user's number's range`;
    }else{
        return `The number ${num} isn't in user's number's range`;
    };
};

console.log(user_range(null, true, "nika")); // if variables aren't numbers
console.log(user_range(2, 5, 16)); // if is not in range
console.log(user_range(3, 1, 5)); // if is in range


//task 4
function leap_year(year){
    if (year % 4 == 0) {
        return true;
    }else{
        return false;
    }
}

console.log(leap_year(2024));


//task 5
let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));
let operation = prompt("Enter math operation(+, - / or *): ");

function calculator(num1, num2, operation){
    switch(operation){
        case "+":
            return num1 + num2;
            break;
        
        case "-":
            return num1 - num2;
            break;
        
        case "/":
            return num1 / num2;
            break;
        
        case "*":
            return num1 * num2;   
    }
}

console.log(calculator(num1, num2, operation));


