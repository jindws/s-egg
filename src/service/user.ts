function delay(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve()
        },2000)
    })
}

module.exports = {
    getId:async ctx=>{
        return 1
    },

    getIds:async ctx=>{
        await delay()
        return [1,2]
    }
}