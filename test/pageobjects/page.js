const openTargetPage = (path)=> {
    return browser.url(`https://www.Target.com.au/${path}`)
}

module.exports = {
    openTargetPage 
}