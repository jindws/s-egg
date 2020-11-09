module.exports = {
    'get /':async ctx=>{
        ctx.body = 'index'
    },

    'post /':async ctx=>{
        ctx.body = 'post index'
    }
}