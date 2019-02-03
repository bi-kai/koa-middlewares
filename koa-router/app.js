const koa = require('koa');
const app = new koa();
const bodyparser = require('koa-bodyparser')
const Router = require('koa-router')
const router = new Router() // 初始化router
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

app.use(require('koa-static')(__dirname + '/public'))
app.use(router.routes()) // 加载router中间件
app.use(router.allowedMethods()) //对异常码处理


router.get('/', async (ctx, next) => {
  ctx.render('index')
})

router.post('/test1', async (ctx, next)=>{
  let retunData = ctx.request.body
  console.log(ctx.request.body)
  ctx.body = retunData
})





app.listen(3000);

