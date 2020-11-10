module.exports = app=>({
    'get /':app.controller.user.index,
    'post /':app.controller.user.user
})