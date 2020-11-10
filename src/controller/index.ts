module.exports = app=>({
    index:async ctx=>{
       ctx.body =  await app.service.index.getId()
    },

    page:async ctx=>{
        ctx.body = 'post index'
    }
})