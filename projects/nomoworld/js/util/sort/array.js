function fisherYatesShuffle(a) {
    var currentIndex = a.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = a[currentIndex]
        a[currentIndex] = a[randomIndex]
        a[randomIndex] = temporaryValue
    }

    return a
}