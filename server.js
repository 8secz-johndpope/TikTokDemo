async function run(){
	
	const koa = require('koa');
	const Router = require('koa-router');
	const staticCache = require('koa-static-cache')
	const mysql = require('mysql2/promise')
	
	const app = new koa();
	// 静态目录
	app.use(staticCache('./static', {
		prefix:'/static',
		gzip:true
	}))
	
	// 链接数据库
	const connection = await mysql.createConnection({
		host:'127.0.0.1',
		user:'root',
		password:'123',
		database:'uniapp'
	})
	
	const router = new Router();
	// router.get('/test', ctx=>{
	// 	ctx.body = 'hello'
	// })
	
	router.get('/test', async ctx=>{
		let [data] = await connection.query("select * from videos")
		
		ctx.body = data
	})
	
	router.get('/video', async ctx=>{
		// 这里未限制数量，如果数据多会有问题的
		// let [data] = await connection.query("select * from videos");
		let [data] = await connection.query("select * from videos limit 0,3");
		ctx.body = {
			code: 0,
			data,
		}
	})
	
	app.use(router.routes());
	app.listen(8080)
}

run()