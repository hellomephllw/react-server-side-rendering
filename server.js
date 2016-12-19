global.rootPath = __dirname;
var koa = require("koa");
var serve = require("koa-static");
var router = require("koa-router")();
var render = require("koa-ejs");
var app = koa();
var serverRenderRouter = require(__dirname + "/lib/routes/serverRenderRouter");

app.listen(3000);
console.log("Web服务器在3000端口开启！");

/**中间件*/
app.use(serve(__dirname + "/build"));
render(app, {
    root: __dirname + "/app/src/views",
    layout: false,
    viewExt: "ejs"
});
app.use(router.routes());

/**路由*/
serverRenderRouter(router);