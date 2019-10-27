let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

console.log(result);

let around = [-1, -1, -7, -1, -1, -7, -2, -1]
const count = around.filter(v => [-7].includes(v)).length

console.log(count)