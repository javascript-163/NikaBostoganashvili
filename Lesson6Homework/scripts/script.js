// task 1
function longestWord(sentence) {
  let longestWord = "";
  let splitted = sentence.split(" ");
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].length > longestWord.length) {
      longestWord = splitted[i];
    }
  }
  return longestWord;
}

// console.log(
//   longestWord("Hi, my name is Nika. my last name is Bostoganashvili")
// );

// task 2
let calculator = {
  num1: 10,
  num2: 5,
  add: function () {
    return this.num1 + this.num2;
  },
  substract: function () {
    return this.num1 - this.num2;
  },
  multiply: function () {
    return this.num1 * this.num2;
  },
  divide: function () {
    return this.num1 / this.num2;
  },
};

// console.log(calculator.substract());

// task 3

hello();

function hello() {
  console.log("Hello World");
}
// ჰოისტინგის საშუალებით შეგვიძლია ფუნქციის გამოძახება მის შექმნამდე. ამ შემთხვევაში ფუნქცია ჩვეულებრივ იმუშავებს და გამოგვიტანს ტერმინალში "Hello World". მაგრამ ჰოისტინგი ფუნქციებზე მოქმედებს მხოლოდ მაშინ, როცა ფუნქციას ვსაზღვრავთ და არა შეგვაქვს ცვლადში, როგორც ეს მეორე მაგალითშია მოყვანილი.

hello2();

const hello2 = function () {
  console.log("Hello World");
};

// ამ შემთხვევაში ამოგვიგდებს ReferenceError-ს, რაც ნიშნავს, რომ არ შეუძლებელია hello2 ფუნქციამდე წვდომა მის ინიციალიზაციამდე. თუმცა, აღნიშნულ ერორს ტერმინალი აგდებს მაშინ, როცა ფუნქციას ვსაზღვრავთ let ან const-ით. თუ ფუნქციას var-ით განვსაზღვრავთ, ტერმინალი გვეტყვის, რომ hello2 არ არის ფუნქცია :/
