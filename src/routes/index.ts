module.exports = app =>({
    'get /':app.controller.index.index,
    'post /':app.controller.index.page
})