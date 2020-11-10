const Koa = require('koa')
const {RouterInit,ControllerInit,ServiceInit} = require('./loader.ts')

module.exports = class SEgg{
    app
    router
    controller
    service
    constructor(props) {
        this.app = new Koa(props)
        this.service = ServiceInit()
        this.controller = ControllerInit(this)
        this.router = RouterInit(this)
        this.app.use(this.router.routes())
    }

    start(port=3000){
        this.app.listen(port,()=>{
            console.log('listen',port);
        })
    }
}