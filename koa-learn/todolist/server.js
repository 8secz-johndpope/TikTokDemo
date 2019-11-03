const koa = require('koa');
const Router = require('koa-router');
const co = require('co');
const koaSwig = require('koa-swig');
const koaStaticCache = require('koa-static-cache')

const app = new koa();
const router = new Router();

// 数据存在内存中
let datas = {
	appName: "todoList",
	list: [
		{id: 1,name: "铅笔",number: 12,price: 1},
		{id: 2,name: "笔记本",number: 3,price: 2},
		{id: 3,name: "橡皮",number: 20,price: 0.5},
	],
	color:'index.css',
}

// 设置模板引擎
app.context.render = co.wrap(koaSwig({
	root: __dirname + '/view',
	autoescape: true, // v-html  开启时会忽略datas里面的html标签，如果为false将解析data中的html标签
	cache: false, // memory 适合线上版本
	ext: 'html'
}))

// 静态文件处理
app.use(koaStaticCache('./static', {
	prefix: '/static',
	gzip: true
}))


// 首页
router.get('/', async ctx => {
	ctx.body = await ctx.render('index.html', {
		datas
	})
});

// 添加
router.get('/add', ctx => {
	ctx.body = '添加'
});

// 修改
router.get('/change/:id', ctx => {
	ctx.body = '修改' + ctx.params.id
});

// 删除
router.get('/remove/:id', ctx => {
	ctx.body = '删除' + ctx.params.id
});

app.use(router.routes())

app.listen(9090)
