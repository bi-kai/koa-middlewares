const koa = require('koa');
const app = new koa();

//基础hello wold
app.use(async (ctx, next)=>{
  console.log(ctx.method, ctx.host, ctx.url)
  await next();
  ctx.body = 'hello world'
})

// 抽象打印ctx方法 host url
const logger = async (ctx, next) => {
  console.log(ctx.method, ctx.host, ctx.url)
  await next();
}

app.use(logger);
app.use(async (ctx, next)=>{
  ctx.body = 'hello world'
})


app.listen(3000);