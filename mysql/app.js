// mysql 搜狐镜像  http://mirrors.sohu.com/mysql/


// https://www.npmjs.com/package/mysql2#using-promise-wrapper
(async function() {
	const mysql = require('mysql2/promise');
	const koa = require('koa');
	const koaStaticCache = require('koa-static-cache');
	const Router = require('koa-router');
	const fs = require('fs')
	const bodyParser = require('koa-bodyparser')

	const app = new koa();
	const router = new Router();
	// 静态
	app.use(koaStaticCache('./static', {
		prefix: '/static',
		gzip: true,
	}))
	app.use(bodyParser());

	// 链接数据库
	const connection = await mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123',
		database: 'node',
	})



	// 添加路由
	router.get('/', ctx => {
		const content = fs.readFileSync('./static/index.html');
		ctx.body = content.toString();
	})

	router.get('/list', async ctx => {
		// 查询数据
		let arr = await connection.query('select * from todolist ');
		console.log(arr[0]);
		ctx.body = {
			code: 0,
			data: arr[0]
		};
	})

	router.post('/change', async ctx => {
		const {
			id,
			name,
			price,
			number
		} = ctx.request.body;
		console.log(id);

		// let [data] = await connection.query(
		// 	` update todolist set name='${name}', price='${price}', number='$number' where id ='$id'`);
		// 占位符写法：
		let query = "update todolist set name=?, price=?, number=? where id=?"
		const value = [name, price, number, id]
		let [data] = await connection.query(query, value)

		console.log(data)
		if (data.affectedRows > 0) {

			ctx.body = {
				code: 0,
				data: '修改成功'
			}
		} else {
			ctx.body = {
				code: 1,
				data: '修改失败'
			}
		}
	})

	router.post('/add', async ctx => {
		const {
			name,
			price,
			number
		} = ctx.request.body;

		let [data] = await connection.query(
			` insert into todolist (name, price, number) values('${name}','${price}','${number}') `);
		console.log(data)
		if (data.affectedRows > 0) {

			ctx.body = {
				code: 0,
				data: '添加成功'
			}
		} else {
			ctx.body = {
				code: 1,
				data: '添加失败'
			}
		}
	})


	router.post('/del', async ctx => {
		const {
			id
		} = ctx.request.body;
		console.log(id);

	
		let query = "delete from todolist where id=?"
		const value = [id]
		let [data] = await connection.query(query, value)

		console.log(data)
		if (data.affectedRows > 0) {

			ctx.body = {
				code: 0,
				data: '删除成功'
			}
		} else {
			ctx.body = {
				code: 1,
				data: '删除失败'
			}
		}
	})

	app.use(router.routes())
	app.listen(8080);
})();
