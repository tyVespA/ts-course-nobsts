//CTRL+K+I to get the type - or hover

// basic types

let userName: string = "Jack";
let hasLoggedIn: boolean = true;
let myNumber: number = 10;
let myRegex: RegExp = /foo/;

// arrays
const names: string[] = userName.split(" ");
const myValues: Array<number> = [1, 2];

// objects

interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "Marco",
  last: "M",
};

// object as map

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

// loops

[1, 2, 3].forEach((v) => console.log(v * 2));

const out: number[] = [4, 5, 6].map((v) => v * 10);
console.log(out);
