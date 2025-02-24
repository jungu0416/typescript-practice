// // Partial
// interface Address {
//   email: string;
//   address: string;
// }

// const me: Partial<Address> = {};
// const you: Partial<Address> = { email: "john@abc.com" };
// const all: Address = { email: "john@abc.com", address: "john" };

// // Pick
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Pick<Todo, "title" | "completed">;

// const todo: TodoPreview = {
//   title: "clean room",
//   completed: false,
// };

// Omit
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "clean room",
  completed: false,
  createdAt: 12345,
};

// Required
type User = {
  firstName: string;
  lastName?: string;
};

let firstUser: User = {
  firstName: "john",
};

let secondUser: Required<User> = {
  firstName: "john",
};

// Record
type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "persian" },
  boris: { age: 5, breed: "maine coom" },
  mordred: { age: 16, breed: "british shorthair" },
};

// Return Type
type T0 = ReturnType<() => string>;
type T1 = ReturnType<(s: string) => void>;

function fn(str: string) {
  return str;
}

const a: ReturnType<typeof fn> = "Hello";
const b: ReturnType<typeof fn> = true;
