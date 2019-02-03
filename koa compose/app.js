const koa = require('koa');
const app = new koa();
const compose = require('koa-compose');

middleware1 = async (ctx, next) => {
  console.log(1);
  await next();
  console.log(6);
}

middleware2 = async (ctx, next) => {
  console.log(2);
  await next();
  console.log(5);
}

middleware3 = async (ctx, next) => {
  console.log(3);
  await next();
  console.log(4);
}

const all = compose([middleware1, middleware2, middleware3])
app.use(all)

app.listen(3000, ()=>{
  console.log("server is running")
}) 