const fs = require('fs')
const path = require('path')
const Router = require('koa-router')


module.exports = ()=>{
    const router = new Router()

    const list = fs.readdirSync(path.resolve(__dirname,'./routes'))
    list.forEach(itm=>{
        const extname = path.extname(itm)
        const filename = itm.replace(extname,'')
        const file = require(path.resolve(__dirname,'./routes') + '/' + itm)
        const prefix = filename === 'index' ? '' : filename
        Object.entries(file).map(([key,value])=>{
            let [method,_path] = key.split(' ')
            _path = _path.substr(0,_path.length-1)
            router[method](`/${prefix}${_path}`,value)
        })
    })
    return router;
}