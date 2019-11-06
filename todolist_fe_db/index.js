const koa = require('koa');
const Router = require('koa-router');
const koaStaticCache = require('koa-static-cache');
const bodyParser = require('koa-bodyparser')


const app = new koa();

// 静态资源
app.use(koaStaticCache('./static',{
	prefix:'/static',
	gzip:true
}))


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


// 通过服务器请求拿到一个基础页面。后续的操作就不需要浏览器发送请求了。
// 因为浏览器发送请求会导致浏览器重新渲染。
// 因为js代码写入基础页面中，然后通过ajax发送请求。
// 通过ajax发送请求不会重新渲染页面，他会把请求到的数据存储到ajax对象中。

// 路由
var router = new Router();
router.get('/', async ctx=>{
	ctx.body = "hello";
})


router.get('/list', async ctx=>{
	// ctx.body = {x:1,y:2}; // => {"x":1,"y":2}
	ctx.body = {
		code: 0, //  定义错误码，用于前端处理
		list: datas.list
	}
})



app.use(router.routes())

app.listen(8080);