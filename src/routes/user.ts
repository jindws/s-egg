module.exports = {
    'get /':async ctx=>{
        ctx.body = 'user'
    },

    'post /':async ctx=>{
        ctx.body = 'post user'
    }
}