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
		
	app.use(bodyParser());

	app.use(koaBody({
		multiparty: true,
		encoding: 'gzip',
		formidable: {
			maxFieldsSize: 20 * 1024 * 1024 // 设置文件上传最大大小20M
		},
		keepExtensions: true // 保持后缀
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
	router.post('/upload', multiparty(), async ctx => {
		// 注意multiparty用的是req  而非request
		
		// 获取form data中的数据
		const { name,type } = ctx.req.body;
		
		// 获取文件和文件路径
		const file = ctx.req.files.file
		const path = file.path
		
		// 根据文件地址创建文件的输入流
		const fileReader = fs.createReadStream(path)
		
		// 定义文件存储路径
		const fileDir = `${__dirname}/static/${type}`
		
		// 此处省略判断路径是否存在
		const filePath = `${fileDir}/${name}`
		// 创建输出流
		const fileWrite = fs.createWriteStream(filePath)
		// 写入文件数据
		fileReader.pipe(fileWrite);
	})

	app.use(router.routes());
	app.listen(8080)
}

run()
