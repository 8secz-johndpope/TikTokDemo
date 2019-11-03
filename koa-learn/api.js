const koa = require('koa');

let server = new koa();

server.listen(80);


// application - context - request & response

// server.use(async (ctx,next)=>{
// 	throw new Error();
// 	await;
// })

server.on('error', err => {
	console.log('sorry')
})

// 1 不推荐用这种方式
// server.use((ctx, next) => {
// 	let a = 1;
// 	ctx.a = a;
// 	next();
// })

// server.use((ctx, next) => {
// 	console.log(ctx.a)
// })

// 2 推荐用ctx.state

// server.use((ctx, next) => {
// 	let a = 1;
// 	ctx.state.a = a;
// 	next();
// })

// server.use((ctx, next) => {
// 	console.log(ctx.state.a)
// 	next();
// })

// 3 异常处理
server.use((ctx, next) => {
	ctx.throw(404, '木有找到哦', {
		a: 1
	})
})
