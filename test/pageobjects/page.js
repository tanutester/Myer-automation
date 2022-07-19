const openMyerPage = (path)=> {
    return browser.url(`https://www.myer.com.au/${path}`)
}

module.exports = {
    openMyerPage 
}