// task 1
const carList = ["Mustang", "BMW", "Mercedes", "Porshe", "Lamborghini"];

console.log(Array.isArray(carList)); // 1 ვარიანტი
console.log(carList instanceof Array); // 2 ვარიანტი

// task 2
console.log(carList[0]);

// task 3
console.log(carList[carList.length - 1]);

// task 4
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"];

console.log(`1${o[1]} choice is ${color[0]}`);
console.log(`2${o[2]} choice is ${color[1]}`);
console.log(`3${o[3]} choice is ${color[2]}`);

// task 5
const studentInfo = {
    name: "Nika",
    surname: "Bostoganashvili",
    age: 18
}

studentInfo["school"] = "172 Public School"; // მონაცემის დამატება 1 ვარიანტი
studentInfo.livePlace = "Tbilisi"; // მონაცემის დამატება 2 ვარიანტი
console.log(studentInfo);

delete studentInfo.age // მონაცემის წაშლა
console.log(studentInfo);

studentInfo.name = "Gio"; // მონაცემის შეცვლა 1 ვარიანტი
studentInfo["name"] = "Misho"; // მონაცემის შეცვლა 2 ვარიანტი
console.log(studentInfo);


