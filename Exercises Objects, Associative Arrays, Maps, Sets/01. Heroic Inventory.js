function heroInventory(arrayOfStrings) {
    let heroData = []
    for (let i = 0; i < arrayOfStrings.length; i++) {
        let currentProperty = arrayOfStrings[i].split(' / ')
        let heroName = currentProperty[0]
        let heroLevel = Number(currentProperty[1])
        let heroItems = []
        if(currentProperty.length > 2){
             heroItems = currentProperty[2].split(', ')
        }
        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        }
        heroData.push(hero)
    }
    console.log(JSON.stringify(heroData))
}