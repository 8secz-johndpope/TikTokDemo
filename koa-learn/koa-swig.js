const koa = require('koa')
const koaRouter = require('koa-router')
const Swig = require('koa-swig')
const co = require('co')

const app = new koa()
const router = new koaRouter()

const render = Swig({
	root: __dirname + '/view', // 模板存放目录
	autoescape: true, // 是否自动escape编码
	cache: false, // 是否启用缓存
	ext: '.html', // 设置模板后缀
})
app.context.render = co.wrap(render)

const users = [{
	username: '张三'
}, {
	username: '李四'
}, {
	username: '王五'
}]

// 模板引擎语法
router.get('/list', async (ctx, next) => {
	ctx.body = await ctx.render('1.html', {
		users
	})
})


app.use(router.routes())
app.listen(9090)
