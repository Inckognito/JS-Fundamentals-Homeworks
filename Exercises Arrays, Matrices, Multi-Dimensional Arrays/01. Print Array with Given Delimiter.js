function arrayWithDelimiter(arr) {
    let delimiter = arr[arr.length - 1]
    arr.pop()
    console.log(arr.join(delimiter))
}