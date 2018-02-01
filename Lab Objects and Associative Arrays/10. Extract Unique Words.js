function extractUnique(text) {
    let uniqueWords = new Set()
    for (let sentence of text){
        let words = sentence
            .toLowerCase()
            .match(/\w+/g)
        for (let word of words){
            uniqueWords.add(word)
        }
    }
    console.log([...uniqueWords.values()].join(", "))
}