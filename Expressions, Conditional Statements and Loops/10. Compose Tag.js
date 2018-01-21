function composeTag(data) {
    let location = data[0]
    let alternateText = data[1]

    console.log(`<img src="${location}" alt="${alternateText}">`)
}