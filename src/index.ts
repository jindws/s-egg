const Koa = require('koa')
const app = new Koa()
const Router = require('./route.ts')

app.use(Router().routes())

app.listen(3000,()=>{
    console.log('listen 3000');
})