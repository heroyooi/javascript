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

## ETC

### history.pushState

- 주소 값을 바꿔준다.
```JavaScript
history.pushState({}, '', '/hello');
```