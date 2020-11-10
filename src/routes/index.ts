module.exports = app =>({
    'get /':app.controller.index.index,
    'post /':ctx=>ctx.body='post index'
})