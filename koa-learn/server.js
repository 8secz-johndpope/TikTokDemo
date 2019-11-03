const koa = require('koa');

// 创建一个http服务器 = http.createServer
const server = new koa();

// 监听当前主机端口
server.listen(80);

// 客户端：发送请求，等待回应

// 服务端： 1.接收请求
// 2.服务器通过use方法注册中间件
// 3.把中间件处理好的数据发送给客户端
// 其中1&3 由koa做了  程序员可以focus在use的实现上
// koa会自动识别body内容，设置正确的头部格式。
server.use((ctx, next) => {
	// ctx koa处理好的一个对象
	// ctx.body = ctx.response.body
	ctx.body = "hello koa\n"
	// next
	console.log(1)
	next();
})

server.use((ctx, next) => {
	// ctx koa处理好的一个对象
	ctx.body += "hello i am child"
	// next

	console.log(2)
})
