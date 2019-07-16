# JavaSript REPOSITORY

## Array 객체 메서드

### Array.reduce

- 배열의 모든 숫자를 더해준다.
```JavaScript
let arr = [1, 2, 3, 4, 5];
arr.reduce((a, c) => a + c, 0);
```

- 배열의 평균값을 구해준다. 만약 배열 값이 없으면 0 으로 세팅한다.
```JavaScript
let arr = [];
let result = arr.reduce((a, c) => a + c, 0) / arr.length || 0
```