"use strict";
// Bollean
let boolean;
let falseBoolean = false;
// Number
let number;
let integer = 6;
let float = 1.2356;
// String
let string;
let firstName = "Doe";
// Array
// 한가지 타입만 가지는 배열
let names1 = ["John", "Kim"];
let names2 = ["John", "Kim"];
// 여러가지 타입만 가지는 배열(유니언 타입 사용)
let array1 = ["John", 1, 2];
let array2 = ["John", 1, 2];
// 여러타입을 단언 X
let someArray = ["John", 1, 2, [], {}, false];
// Interface, Type
// 읽기 전용 배열을 생성(readonly, ReadonlyArray)
let stringArray = ["A", "B"];
let numberArray = [1, 2];
// stringArray.push("C");
// numberArrayp[0] = 3;
// 읽기전용이라 에러남
// Tuple 타입
let tuple1;
tuple1 = ["a", 1];
// tuple1 = ["a", 1, 2]; <- 배열이 2개만 허락하기에 에러남
let users;
users = [
    [1, "John"],
    [2, "Doe"],
];
let tuple2;
tuple2 = ["a", 1];
tuple2.push(2); // push 메서드 사용할 때는 에러 안남. 단, string 또는 number 형식이어야함
console.log(tuple2);
// any
let any = "abc";
any = 1;
any = [];
// unknown
let unknown = false;
let string1 = unknown;
// Object
let obj = {};
let arr = [];
// let nul: object = null;
let date = new Date();
const obj1 = {
    id: 1,
    title: "title1",
    description: "description1",
};
// Union 타입
let union;
union = "Hello";
union = 1;
// union = []; <- 에러남
// Function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log("hi");
};
// Null, Undefined
// strictNullChecks 가 false일때 사용 가능
let number1 = undefined;
let string2 = null;
let obj2 = undefined;
let array = null;
let undefined1 = null;
let nul1 = undefined;
let void1 = undefined;
// void
function greeting() {
    console.log("hi");
}
const hi = greeting();
console.log(hi);
// never
function throwError() {
    throw new Error("error");
}
function keepProcessing() {
    while (true)
        console.log(hi);
}
const never = [];
// never.push(1); never 라서 에러남
