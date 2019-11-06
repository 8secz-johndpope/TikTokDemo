const koa = require('koa')
const koaRouter = require('koa-router')

const app = new koa()
const router = new koaRouter()
// app.use((ctx,next)=>{
// 	 ctx.body = ctx.URL

// 	// 简单的路由
// 	// switch(ctx.URL){
// 	// 	case 'a':
// 	// 		break;
// 	// 	case 'b':
// 	// 		break
// 	// }
// })

// methods = get / post / put / del / all

// 通过get方式发送请求
// router.get('/user', (ctx, next)=>{
// 	ctx.body = 'user-get'
// })


router.get('/', (ctx, next) => {
	ctx.body = 'index-get'
})

// 挂载嵌套路由
const userRouter = new koaRouter()
// user
// '/' => '/user'
// '/' => '/user/xxxx'

userRouter.get('/', (ctx, next) => {
	ctx.body = 'user/user-get'
})

userRouter.get('/info', (ctx, next) => {
	ctx.body = 'user/info-get'
})
router.use('/user', userRouter.routes())

// const indexRouter = new koaRouter()
// router.use('/index', indexRouter.routes())
// 也可以这么写
const indexRouter = new koaRouter({
	prefix: '/index'
})
indexRouter.get('/', (ctx, next) => {
	ctx.body = 'index-get'
})
indexRouter.get('/add', (ctx, next) => {
	ctx.body = 'index/add-get'
})
app.use(indexRouter.routes()) // 还记得这个么 router.use('/index', indexRouter.routes())

// 动态路由
const itemRouter = new koaRouter()
itemRouter.get('/item/:id', (ctx, next)=>{
	ctx.body = "item" + ctx.params.id;
})

app.use(itemRouter.routes())



app.use(router.routes())
app.listen(9090)
