const koa = require('koa')
const cache = require('koa-static-cache')
const app = new koa()

app.use(cache(__dirname + '/static', {
	prefix:'/pubilc'
}))

app.use(cache(__dirname + '/static/img', {
	prefix:'/img'
}))

app.use((ctx,next)=>{
	ctx.body = 'hello'
})


app.listen(9090)