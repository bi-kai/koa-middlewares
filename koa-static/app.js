const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const bodyparser = require('koa-bodyparser')
const Router = require('koa-router')
const router = new Router() // 初始化router

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

//两种写法
app.use(require('koa-static')(__dirname + '/public')) 

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))


app.use(router.routes()) // 加载router中间件
app.use(router.allowedMethods()) //对异常码处理


router.post('/test1', async (ctx, next)=>{
  let retunData = ctx.request.body
  console.log(ctx.request.body)
  ctx.body = retunData
})

router.get('/', async (ctx, next) => {
  ctx.render('index')
})


app.listen(3000);
