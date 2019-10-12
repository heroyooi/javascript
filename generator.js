console.log('a() =====');

function a(){
  console.log(1);
  console.log(2);
  console.log(3);
}

a()

console.log('generator() =====');

function* generator(){
  console.log(1);
  console.log(2);
  yield 5; // 중단점
  console.log(3);
}
const gen = generator();
gen.next(); // 1, 2, {value :5, done: false}
gen.next(); // 3, {value: undefined, done: true}

console.log('generator2() =====');

function* generator2(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  // yield* [1, 2, 3, 4]; // 위랑 같음 iterable: 반복 가능 값
}
const gen2 = generator2();
gen2.next(); // {value: 1, done: false}
gen2.next(); // {value: 2, done: false}
gen2.next(); // {value: 3, done: false}
gen2.next(); // {value: 4, done: false}
gen2.next(); // {value: undefined, done: true}