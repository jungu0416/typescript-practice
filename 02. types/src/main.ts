// Bollean
let boolean: boolean;
let falseBoolean: boolean = false;

// Number
let number: number;
let integer: number = 6;
let float: number = 1.2356;

// String
let string: string;
let firstName: string = "Doe";

// Array
// 한가지 타입만 가지는 배열
let names1: string[] = ["John", "Kim"];
let names2: Array<string> = ["John", "Kim"];

// 여러가지 타입만 가지는 배열(유니언 타입 사용)
let array1: (string | number)[] = ["John", 1, 2];
let array2: Array<string | number> = ["John", 1, 2];

// 여러타입을 단언 X
let someArray: any[] = ["John", 1, 2, [], {}, false];

// Interface, Type

// 읽기 전용 배열을 생성(readonly, ReadonlyArray)
let stringArray: readonly string[] = ["A", "B"];
let numberArray: ReadonlyArray<number> = [1, 2];

// stringArray.push("C");
// numberArrayp[0] = 3;
// 읽기전용이라 에러남

// Tuple 타입
let tuple1: [string, number];
tuple1 = ["a", 1];
// tuple1 = ["a", 1, 2]; <- 배열이 2개만 허락하기에 에러남

let users: [number, string][];
users = [
  [1, "John"],
  [2, "Doe"],
];

let tuple2: [string, number];
tuple2 = ["a", 1];
tuple2.push(2); // push 메서드 사용할 때는 에러 안남. 단, string 또는 number 형식이어야함

console.log(tuple2);

// any
let any: any = "abc";
any = 1;
any = [];

// unknown
let unknown: unknown = false;
let string1: boolean = unknown as boolean;

// Object
let obj: object = {};
let arr: object = [];
// let nul: object = null;
let date: object = new Date();

const obj1: { id: number; title: string; description: string } = {
  id: 1,
  title: "title1",
  description: "description1",
};

// Union 타입
let union: string | number;
union = "Hello";
union = 1;
// union = []; <- 에러남

// Function
let func1: (arg1: number, arg2: number) => number;
func1 = function (x, y) {
  return x * y;
};

let func2: () => void;
func2 = function () {
  console.log("hi");
};

// Null, Undefined
// strictNullChecks 가 false일때 사용 가능
let number1: number = undefined;
let string2: string = null;
let obj2: { a: 10; b: false } = undefined;
let array: any[] = null;
let undefined1: undefined = null;
let nul1: null = undefined;
let void1: void = undefined;

// void
function greeting(): void {
  console.log("hi");
}

const hi: void = greeting();
console.log(hi);

// never
function throwError(): never {
  throw new Error("error");
}

function keepProcessing(): never {
  while (true) console.log(hi);
}

const never: never[] = [];
// never.push(1); never 라서 에러남
