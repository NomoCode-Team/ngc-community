function logLoaded(msg) {
    if (LOG.loaded) {
        console.log(msg)
    }
}

function logError(msg) {
    if (LOG.error) {
        console.error(msg)
    }
}

function logSuccess(msg) {
    if (LOG.success) {
        console.log(msg)
    }
}