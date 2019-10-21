const a = { b: 1, c: 2 };
const b = a;
console.log(b, a, b === a); // true = a의 불변성 유지 X

const c = { ...a };
console.log(c, a, c === a); // false = a의 불변성 유지 O

const d = [1,2,3];
const e = d;
console.log(e, d, e === d); // true - d의 불변성 유지 X
const f = [...d];
console.log(f, d, f === d); // false - d의 불변성 유지 O