# JavaSript REPOSITORY

## 실전 예제 (Vue.js & React.js)

### React.js Example

## Array 객체 메서드

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
