function cookingByNumbers(arr) {
    let number = arr[0]
    let operation = {
        chop : (num) => num / 2,
        dice : (num) => Math.sqrt(num),
        spice : (num)=> ++num,
        bake : (num)=> num * 3,
        fillet : (num) => num * 0.8
    }
    for (let index = 1; index < arr.length; index++) {
        const currentOperation = arr[index]
        number = operation[currentOperation](number)
        console.log(number)
    }
}