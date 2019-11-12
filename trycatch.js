try {
  JSON.parse(undefined)
} catch (e) {
  console.log(e)
  console.log('에러났지만 안죽는다.')
}