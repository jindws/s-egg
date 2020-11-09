const Koa = require('koa')
const {RouterInit} = require('./loader.ts')

module.exports = class SEgg{
    app
    router
    constructor(props) {
        this.app = new Koa(props)
        this.router = RouterInit(this.app)
        this.app.use(this.router.routes())
    }

    start(port=3000){
        this.app.listen(port,()=>{
            console.log('listen',port);
        })
    }
}