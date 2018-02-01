function a(input) {
    let text = input.join('\n').toLowerCase()
    let regex = /[^A-Za-z0-9_]+/
    let words = text.split(regex).filter(w => w != '')
    let wordsCount = new Map()
    for (let something of words) {
        if (wordsCount.has(something)) {
            wordsCount.set(something, wordsCount.get(something) + 1)
        }
        else {
            wordsCount.set(something, 1)
        }
    }
    let allwords = Array.from(wordsCount.keys()).sort()
    allwords.forEach(w=>console.log("\'" + w + "\'" + " -> " + wordsCount.get(w) + ' times'))
}