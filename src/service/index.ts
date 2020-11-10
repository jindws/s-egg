function delay(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve()
        },2000)
    })
}

module.exports = {
    getId:async ()=>{
        return 11
    },

    getIds:async ()=>{
        await delay()
        return [1,2,3]
    }
}