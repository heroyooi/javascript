# JavaSript REPOSITORY

## Promise

### 특징 및 설명
- 프로미스는 비동기 작업을 조금 더 편하게 처리할 수 있도록 ES6에 도입된 기능
- 이전에는 비동기 작업을 처리할 때에는 콜백함수로 처리를 했었는데, 비동기 작업을 할 경우 콜백지옥을 만나게 됬었다.
- 프로미스를 사용하면 콜백지옥을 방지할 수 있다.

- 1초 뒤에 성공 혹은 에러를 내는 상황
```JavaScript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1); // 성공(resolve) 테스트
    // reject(new Error()); // 에러(reject) 테스트
  }, 1000);
});

myPromise
  .then(n => {
    console.log(n);
  })
  .catch(error => {
    console.log(error);
  });
```

- 4번 성공하고, 5번째 에러나는 상황
```JavaScript
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = 'ValueIsFiveError';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .catch(e => {
    console.error(e);
  });
```

### 단점
- 에러를 잡을 때 몇번째에서 발생했는지 알아내기도 어렵다.
- 특정 조건에 따라 분기를 나누는 작업도 어렵고, 특정 값을 공유해가면서 작업을 처리하기도 까다롭다.
- async/await을 사용하면, 이러한 문제점을 깔끔하게 해결할 수 있다.

## async/await

### 특징 및 설명
- async/await 문법은 ES8에 해당하는 문법으로서, Promise를 더욱 쉽게 사용할 수 있게 해준다.

```JavaScript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
  console.log('안녕하세요!');
  await sleep(1000); // 1초쉬고
  console.log('반갑습니다!');
}

process().then(() => {
  console.log('작업이 끝났어요!');
});
```
- 함수(예: process())에서 async를 사용하면, 해당 함수 결과값으로 Promise(예: sleep함수 안의 Promise 리턴값)를 반환하게 된다.

- async 함수에서 에러를 발생 시키고, 에러를 잡아내는 예제 (try/catch 문을 사용)
```JavaScript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}

async function process() {
  try {
    await makeError();
  } catch (e) {
    console.error(e);
  }
}

process();
```

- 1. 다수의 Promise 처리 
```JavaScript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이';
};

const getRabbit = async () => {
  await sleep(500);
  return '토끼';
};
const getTurtle = async () => {
  await sleep(3000);
  return '거북이';
};

// 다수의 Promise 처리
// 1. 순서대로 실행
async function process() {
  const dog = await getDog();
  console.log(dog);
  const rabbit = await getRabbit();
  console.log(rabbit);
  const turtle = await getTurtle();
  console.log(turtle);
}
// 2. 동시에 실행
async function process() {
  const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  console.log(results); // ["멍멍이", "토끼", "거북이"]
}
// 3. 결과값을 따로 따로 추출
async function process() {
  const [dog, rabbit, turtle] = await Promise.all([
    getDog(),
    getRabbit(),
    getTurtle()
  ]);
  console.log(dog); // 멍멍이
  console.log(rabbit); // 토끼
  console.log(turtle); // 거북이
}

process();
```
- Promise.all를 사용할 때에는, 등록한 프로미스 중 하나라도 실패하면, 모든게 실패한 것으로 간주된다.
- Promise.race는 여러개의 프로미스를 등록해서 실행했을 때 가장 빨리 끝난 것 하나만의 결과값을 가져온다.
```JavaScript
async function process() {
  const first = await Promise.race([
    getDog(),
    getRabbit(),
    getTurtle()
  ]);
  console.log(first); // 
}
process();
```

```JavaScript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이';
};

const getRabbit = async () => {
  await sleep(500);
  return '토끼';
};
const getTurtle = async () => {
  await sleep(3000);
  return '거북이';
};

async function process() {
  const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  console.log(results);
}

process();
```

## Array Method

### Array.reduce

```JavaScript
let arr = [1, 2, 3, 4, 5];
```

- 배열의 모든 숫자를 더해준다.
```JavaScript (reduce.js)
let result = arr.reduce((a, c) => a + c, 0);
```

- 배열의 평균값을 구해준다. 만약 배열 값이 없으면 0 으로 세팅한다.
```JavaScript
let result = arr.reduce((a, c) => a + c, 0) / arr.length || 0
```

### Array.forEach

- 배열 값을 하나씩 조회한다.
```JavaScript (forEach.js)
arr.forEach((v) => {
  console.log(v)
});
```

### Array.includes

- 배열이 특정 요소를 포함하고 있는지 판별한다.
```JavaScript
console.log( arr.includes(1) ); // true
console.log( arr.includes(6) ); // false
```

### Array.filter

- 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
```JavaScript
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

console.log(result); // ['exuberant', 'destruction', 'present']

let around = [-1, -1, -7, -1, -1, -7, -2, -1]
const count = around.filter(v => [-7].includes(v)).length
console.log(count); // 2
```


### Array.map

- 배열 값을 조건에 맞춰서 변환시켜서 리턴해준다.
```JavaScript
let arr = [1, 2, 3, 4, 5];
let result = arr.map((v) => v * 2);
```

### Array.find & Array.findIndex

```JavaScript
const list = [
  {id: 1, title: '1번째 게시글'},
  {id: 2, title: '2번째 게시글'},
  {id: 3, title: '3번째 게시글'},
];

list.find(list => list.id === 2);
// {id: 2, title: "2번째 게시글"}
list.findIndex(list => list.id === 2);
// 1
```

### Array.splice

```JavaScript
const list1 = [
  {id: 1, title: '1번째 게시글'}, {id: 2, title: '2번째 게시글'},
  {id: 3, title: '3번째 게시글'}, {id: 4, title: '4번째 게시글'}
];
const list2 = [
  {id: 5, title: '5번째 게시글'}, {id: 6, title: '6번째 게시글'}
];

list1.splice(2, 1); // 2번 index에서 하나를 자른다.(원본이 변함)
// [{id: 3, title: "3번째 게시글"}]

list1 // 원본이 변해있음
// [
//   {id: 1, title: '1번째 게시글'},
//   {id: 2, title: '2번째 게시글'},
//   {id: 4, title: '4번째 게시글'},
// ];

list2.splice(2, 0, ...list1); // 2번 index에서 0개를 자르고, list1의 요소들을 추구한다.(원본이 변함)
// []

list2 // 원본이 변해있음
// [
//   {id: 5, title: '5번째 게시글'},
//   {id: 6, title: '6번째 게시글'},
//   {id: 1, title: '1번째 게시글'},
//   {id: 2, title: '2번째 게시글'},
//   {id: 4, title: '4번째 게시글'},
// ];
```

## Object Method

### Object.keys
```JavaScript
const user = {
  id: 'heroyooi',
  name: '성연욱',
  age: 36,
  password: 'qwert09!@#'
};

Object.keys(user); // ["id", "name", "age", "password"]

Object.keys(user).forEach((key) => console.log(user[key]));
// heroyooi
// 성연욱
// 36
// qwert09!@#
```


## ETC

### Spread Syntax (전개구문)

- 객체나 배열의 불변성을 지켜주기 위해 전개 구문을 사용한다.
```JavaScript
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
```

### history.pushState

- 주소 값을 바꿔준다.
```JavaScript
history.pushState({}, '', '/hello');
```

### 제네레이터

- yield로 중단점 만들어주고, next로 재개함!
- 함수를 중간에 멈출 수 있다.
- 비동기를 자유자재로 컨트롤 할 수 있다.
- yield가 async & await 보다 더 강력함
```JavaScript
function* generator(){
  console.log(1);
  console.log(2);
  yield 5; // 중단점
  console.log(3);
}
const gen = generator();
gen.next(); // 1, 2, {value :5, done: false}
gen.next(); // 3, {value: undefined, done: true}

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

function* generator3(){
  let i = 0;
  while (true) {
    yield i++;
  }
}
const gen3 = generator3();
gen3.next(); // {value: 0, done: false}
gen3.next(); // {value: 1, done: false}
gen3.next(); // {value: 2, done: false}
gen3.next(); // {value: 3, done: false}
// 무한 반복도 컨트롤 가능
```

### try, catch
```JavaScript
try {
  JSON.parse(undefined)
} catch (e) {
  console.log(e)
  console.log('에러났지만 안죽는다.')
}
```

## Modules

```command
npm i nodemon -g
nodemon app.js
```

### 자바스크립트 심화

- a ?? b (널리시 코얼리싱)<br />
a가 null 이나 undefined 이면 b, 아니면 a

- a ?. b (옵셔널 체이닝)<br />
a가 undefined가 아니면 a.b 아니면 undefined

- 화살표 함수
```JavaScript
() => {
  return {}
}

() => ({})
```
위 두개가 같음


### Vue.js Example
```HTML
<template>
  <input ref="answer" minlength="4" maxlength="4" v-model="value" />
</template>
```
```JavaScript
if (this.value === this.answer.join('')) {...} // this.answer가 [1,2,3,4]라면 join('')으로 1234로 만듦
const answerArray = this.value.split('').map(v => parseInt(v)); // answerArray는 1234 입력하면 [1,2,3,4] 로 반환
```
