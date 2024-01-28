// შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.

// for loop
function every_third(){
    let list = ["abc", 56, 79, "bc", "ajapsandali",  true, null, undefined, 78.5, "name"];

    for(let i = 1; i < list.length; i++){
        if (i % 3 === 2) {
            console.log(list[i]);
        };
    };
};

// every_third();


//while loop
function every_third2(){
    let position = 0
    let list = ["abc", 56, 79, "bc", "ajapsandali",  true, null, undefined, 78.5, "name"];

    while(position < list.length){
        if (position % 3 === 2) {
            console.log(list[position])
        }
        position++;
    }
}

// every_third2();


// შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.


//for loop
function ten_to_one(){
    for(let i=10; i>0; i--){
        console.log(i);
    };
};

// ten_to_one();


//while loop
function ten_to_one2(){
    let count = 10;
    while(count > 0){
        console.log(count);
        count--;
    }
};

// ten_to_one2();


/* მოცემული მასივიდან
let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.
*/

// for loop (1 ვარიანტი)
function without_bob(){
    let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
    let new_names = [];
    for(let i = 0; i < names.length; i++){
        if (names[i] !== 'Bob'){
            new_names.push(names[i]);
        }
    }
    return new_names;
}

// console.log(without_bob());


// for loop (2 ვარიანტი)
function without_bob2(){
    let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];

    for(let i = 0; i < names.length; i++){
        if(names[i] === "Bob"){
            delete names[i];
        };
    };

    return names;
};

// console.log(without_bob2());


//while loop
function without_bob3(){
    count = 0;
    let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
    let new_names = [];

    while(count < names.length){
        if(names[count] !== "Bob"){
            new_names.push(names[count]);
        };

        count++;
    };

    return new_names;
};

// console.log(without_bob3());


// without loops
function without_bob4(){
    let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];

    const result = names.filter((name) => name !== "Bob");

    return result;
}

// console.log(without_bob4());


/* ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125. */

//for loop
function fun(number, power){
    let result = 1;

    for(let i = 0; i < power; i++){
        result = result * number;
    };

    return result;
};

// console.log(fun(5, 3));


//while loop

function fun2(number, power){
    let count = 0;
    let result = 1
    while(count < power){
        result = result * number;
        count++;
    };

    return result;
};

// console.log(fun2(5, 3));


// შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.


// for loop
function fizzbuzz(){
    for(let i = 1; i < 100; i++){
        if(i % 3 === 0){
            console.log(`${i} Fizz`);
        }else if(i % 5 === 0){
            console.log(`${i} Buzz`)
        }else if(i % 3 === 0 && i % 5 === 0){
            console.log(`${i} FizzBuzz`)
        }else{
            console.log(i);
        };
    };
};

// fizzbuzz();


//while loop 
function fizzbuzz2(){
    count = 1;
    while(count < 100){
        if(count % 3 === 0){
            console.log(`${count} Fizz`);
        }else if(count % 5 === 0){
            console.log(`${count} Buzz`)
        }else if(count % 3 === 0 && count % 5 === 0){
            console.log(`${count} FizzBuzz`)
        }else{
            console.log(count);
        };
        count++;
    }
};

// fizzbuzz2();


// შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120

//for loop
function factorialCalculator(number){
    let result = 1;
    if(number === 0 || number === 1){
        return result;
    }
    else if(number > 1){
        for(let i = 1; i <= number; i++){
            result *= i
            console.log(result);
        };
    };
};

// console.log(factorialCalculator(5));


//while loop
function factorialCalculator2(number){
    let result = 1;
    count = 1
    if(number === 0 || number === 1){
        return result;
    }
    else if(number > 1){
        while(count <= number){
            result *= count
            count++
        };
    };
    return result;
};

// console.log(factorialCalculator2(9));


// შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

function first_capitalization(keyword){
    if(typeof keyword !== typeof String){
        return "Invalid type";
    }else{
        return keyword.replace(keyword[0], keyword[0].toUpperCase());
    };
};

// console.log(first_capitalization("javascript"));



// შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.

function blankStringChecker(testString){
    if(typeof testString !== typeof String){
        return "Invalid type";
    }else if(testString === ""){
        return "This string is blank";
    }else{
        return "This string is not blank";
    };
};

// console.log(blankStringChecker(""));


// შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]


function stringToArray(testString){
    if(typeof testString !== typeof String){
        return "Ivalid type";
    }else{
        return testString.split(" ");
    };
};

// console.log(stringToArray("Hello World"));


// შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com.
// წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.


function emailProtect(email){
    let [username, mail] = email.split("@");

    let [firstName, lastName] = username.split(".");

    let protectedEmail = `${firstName}${".".repeat(lastName.length)}@${mail}`;
    console.log([username, mail]);

    return protectedEmail;
};

console.log(emailProtect("nika.bostoganashvili@gmail.com"));







