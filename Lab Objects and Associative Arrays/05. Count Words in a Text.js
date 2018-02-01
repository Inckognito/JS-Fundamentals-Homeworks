function a(input) {

    let text = input.join('')
    let regex=/[^A-Za-z0-9_]+/
    let words = text.split(regex).filter(w => w != '')
    let wordsCount = {}
    for (let w of words)
        wordsCount[w] ? wordsCount[w]++ :
            wordsCount[w] = 1
    return JSON.stringify(wordsCount)
}