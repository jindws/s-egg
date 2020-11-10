const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

function fileList(dirPath){
    const list = fs.readdirSync(path.resolve(__dirname,dirPath))
    return list.map(itm=>{
        const extname = path.extname(itm)
        const filename = itm.replace(extname,'')
        const file = require(path.resolve(__dirname,dirPath) + '/' + itm)
        const prefix = filename === 'index' ? '' : filename
        return {
            prefix,
            file,
            filename,
        }
    })
}


function RouterInit(app){
    const router = new Router()

    const list = fileList('./routes');
    list.forEach(itm=>{
        Object.entries(itm.file(app)).map(([key,value])=>{
            let [method,_path] = key.split(' ')
            _path = _path.substr(0,_path.length-1)
            router[method](`/${itm.prefix}${_path}`,value)
        })
    })
    return router;
}

function ControllerInit(){
    const controllers = {}
    const list = fileList('./controller');
    list.forEach(itm=>{
        controllers[itm.filename] = {}
        Object.entries(itm.file).map(([key,value])=>{
            controllers[itm.filename][key] = value
        })
    })
    return controllers;
}

module.exports = {
    RouterInit,
    ControllerInit,
}