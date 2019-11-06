const koa = require('koa');
const Router = require('koa-router');
const co = require('co');
const koaSwig = require('koa-swig');
const koaStaticCache = require('koa-static-cache');
const koaBodyParser = require('koa-bodyparser')

const app = new koa();
const router = new Router();

app.use(koaBodyParser())

// 数据存在内存中
let datas = {
	appName: "todoList",
	maxId:3,
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
router.get('/add', async ctx => {
	ctx.body = await ctx.render('add.html', {
		appName: datas.appName
	});
});

// 处理提交上来的商品数据
// GET方式使用querystring  即 ctx.query
router.get('/postData', ctx => {
	let { name, price, number } = ctx.query;
	ctx.body = `${name} ${price} ${number}`;
})

// 注意post方式要用ctx.request.body
// 需要引入 koaBodyParser  中间件
router.post('/postData', async ctx => {
	let { name, price, number } = ctx.request.body;
	// ctx.body = `${name} ${price} ${number}`;
	
	datas.list.push({
		id : ++datas.maxId,
		name,
		price,
		number
	})
	
	ctx.body = await ctx.render('message.html', {
		appName : datas.appName, 
		msg: '添加成功',
		href: '/'});
})

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
