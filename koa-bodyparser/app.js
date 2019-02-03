const koa = require('koa');
const app = new koa();
const bodyparser = require('koa-bodyparser')
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

app.use(require('koa-static')(__dirname + '/public'))

app.use(async (ctx, next)=>{
  await next();
  console.log(ctx.request.body)
  let retunData = ctx.request.body
  ctx.body = retunData
})



app.listen(3000);

