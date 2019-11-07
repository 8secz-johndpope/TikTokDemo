// mysql 搜狐镜像  http://mirrors.sohu.com/mysql/


// https://www.npmjs.com/package/mysql2#using-promise-wrapper
(async function() {
	const mysql = require('mysql2/promise');
	const koa = require('koa');
	const koaStaticCache = require('koa-static-cache');
	const Router = require('koa-router');
	const fs = require('fs')

	const app = new koa();
	const router = new Router();
	// 静态
	app.use(koaStaticCache('./static', {
		prefix: '/static',
		gzip: true,
	}))

	// 链接数据库
	const connection = await mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123',
		database: 'node',
	})


	
	// 添加路由
	router.get('/', ctx=>{
		const content = fs.readFileSync('./static/index.html');
		ctx.body = content.toString();
	})
	
	router.get('/list',async ctx=>{
		// 查询数据
		let arr = await connection.query('select * from todolist ');	
		console.log(arr[0]);
		ctx.body = {
			code : 0,
			data : arr[0]
		};
	})
	

	app.use(router.routes())
	app.listen(8080);
})();
