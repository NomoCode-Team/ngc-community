function setVisibleToTrueOfElementById(id) {
    const elem = document.getElementById(id)
    elem.style.display = 'block'
}

function setInvisibleToTrueOfElementById(id) {
    const elem = document.getElementById(id)
    elem.style.display = 'none'
}

function toggleElementVisible(id) {
    const elem = document.getElementById(id)
    elem.style.display = (elem.style.display === 'block') ? 'none' : 'block'
}

function setVisibleToFalseByArrayOfElementIds(a) {
    a.forEach(id => {
        const elem = document.getElementById(id)
        elem.style.display = 'none'
    })
}

function disableDefaultRightClick() {   
    document.addEventListener('contextmenu', e => e.preventDefault())
}