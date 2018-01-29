function processOddNumbers(arr) {
   let result = arr.filter((el, i) => i % 2 == 1).map(a => a *2).reverse()

    console.log(result)
}