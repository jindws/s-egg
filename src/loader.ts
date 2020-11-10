const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

function loadData(dirPath,callback){
    const list = fs.readdirSync(path.resolve(__dirname,dirPath))
    list.forEach(itm=>{
        const extname = path.extname(itm)
        const filename = itm.replace(extname,'')
        const file = require(path.resolve(__dirname,dirPath) + '/' + itm)
        callback(filename,file)
    })
}

function RouterInit(app){
    const router = new Router()

    loadData('./routes',(filename,routes)=>{
        const prefix = filename === 'index' ? '' : '/'+filename
        Object.entries(routes(app)).map(([key,value])=>{
            let [method,_path] = key.split(' ')
            _path = _path.substr(0,_path.length-1)
            router[method](`${prefix}${_path}`,value)
        })
    });
    return router;
}

function ControllerInit(app){
    const controllers = {}
    loadData('./controller',(filename,controller)=>{
        let contr = controller
        if(typeof controller === 'function'){
            contr = controller(app)
        }
        controllers[filename] = contr
    });
    return controllers;
}

function ServiceInit(){
    const services = {}
    loadData('./service',(filename,controller)=>{
        services[filename] = controller
    });
    return services;
}

module.exports = {
    RouterInit,
    ControllerInit,
    ServiceInit,
}