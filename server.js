async function run() {

	const koa = require('koa');
	const Router = require('koa-router');
	const staticCache = require('koa-static-cache')
	const mysql = require('mysql2/promise')
	const bodyParser = require('koa-bodyparser')
	const koaBody = require('koa-body');
	const multiparty = require('koa2-multiparty');
	const path = require('path');
	const fs = require('fs')

	const app = new koa();
	// 静态目录
	app.use(staticCache('./static', {
		prefix: '/static',
		gzip: true
	}))
	
	console.log(multiparty);
	
	
	app.use(bodyParser());

	app.use(koaBody({
		multiparty: true,
		encoding: 'gzip',
		formidable: {
			maxFieldsSize: 20 * 1024 * 1024 // 设置文件上传最大大小
		},
		keepExtensions: true
	}))


	// 链接数据库
	const connection = await mysql.createConnection({
		host: '127.0.0.1',
		user: 'root',
		password: '123',
		database: 'uniapp'
	})

	const router = new Router();
	// router.get('/test', ctx=>{
	// 	ctx.body = 'hello'
	// })

	router.get('/test', async ctx => {
		let [data] = await connection.query("select * from videos")

		ctx.body = data
	})

	router.get('/video', async ctx => {
		// 这里未限制数量，如果数据多会有问题的
		// let [data] = await connection.query("select * from videos");
		let [data] = await connection.query("select * from videos limit 0,3");
		ctx.body = {
			code: 0,
			data,
		}
	})

	// 文件上传接口
	router.post('upload', multiparty(), async ctx => {
		const {
			name,
			type
		} = ctx.request.body;
		console.log(name, type);
	})

	app.use(router.routes());
	app.listen(8080)
}

run()
