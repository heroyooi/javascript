# JavaSript REPOSITORY

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

### Array.map

- 배열 값을 조건에 맞춰서 변환시켜서 리턴해준다.
```JavaScript
let arr = [1, 2, 3, 4, 5];
let result = arr.map((v) => v * 2);
```

## ETC

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

## Modules

```command
npm i nodemon -g
nodemon app.js
```