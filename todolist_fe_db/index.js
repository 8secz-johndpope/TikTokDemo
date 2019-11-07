const koa = require('koa');
const Router = require('koa-router');
const koaStaticCache = require('koa-static-cache');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');

const app = new koa();

// 静态资源
app.use(koaStaticCache('./static', {
	prefix: '/static',
	gzip: true
}))
app.use(bodyParser())


// 使用index.json 进行数据持久化
// 文件持久化的问题：一个修改就会修改一次文件，效率低下。
// 面临频繁改动的数据，不适用json文件管理，一般用数据库。
let datas = JSON.parse(fs.readFileSync('./index.json'));


// 通过服务器请求拿到一个基础页面。后续的操作就不需要浏览器发送请求了。
// 因为浏览器发送请求会导致浏览器重新渲染。
// 因为js代码写入基础页面中，然后通过ajax发送请求。
// 通过ajax发送请求不会重新渲染页面，他会把请求到的数据存储到ajax对象中。

// 路由
var router = new Router();
router.get('/', async ctx => {
	ctx.body = "hello";
})


router.get('/list', async ctx => {
	// ctx.body = {x:1,y:2}; // => {"x":1,"y":2}
	ctx.body = {
		code: 0, //  定义错误码，用于前端处理
		list: datas.list
	}
})

// 修改商品信息
router.post('/change', async ctx => {
	let data = ctx.request.body;
	if (data.id < 0) {
		ctx.body = {
			code: 1,
			data: "请传入id"
		}
		return;
	}

	console.log(data);

	let index = datas.list.findIndex(d => d.id == data.id);
	datas.list[index] = data;

	ctx.body = {
		code: 0,
		data: datas.list
	}


	fs.writeFileSync('./index.json', JSON.stringify(datas));
})

// 添加商品
router.post('/add', async ctx => {
	let data = ctx.request.body;
	data.id = ++datas.maxId;


	datas.list.push(data);

	ctx.body = {
		code: 0,
		data: datas.list
	}

	fs.writeFileSync('./index.json', JSON.stringify(datas));
})


// 删除商品
router.post('/del', async ctx => {
	let data = ctx.request.body;

	datas.list = datas.list.filter(d => d.id != data.id)

	ctx.body = {
		code: 0,
		data: datas.list
	}

	fs.writeFileSync('./index.json', JSON.stringify(datas));
})



app.use(router.routes())

app.listen(8080);
