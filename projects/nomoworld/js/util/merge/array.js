function combineMultipleArraysIntoOne(a) {
    let a_result = []
    a.forEach(a_ => {
        a_result = a_result.concat(a_)
    })
    return a_result
}