var React = require("react");
var ReactDOMServer = require("react-dom/server");

var ReactRouter = require("react-router");
var match = ReactRouter.match;
var RouterContext = ReactRouter.RouterContext;
var reactRouterServerRender = require(rootPath + "/lib/common/reactRouterServerRender");

/**获取组件*/
var NormalPageMainCpn = require(rootPath + "/app/src/js/component/NormalPageMainCpn");
var RouterPageRoutesContainer = require(rootPath + "/app/src/js/routes/RouterPageRoutesContainer");
var RouterPageRoutes = require(rootPath + "/app/src/js/routes/RouterPageRoutes");

/**路由*/
module.exports = function(router) {
    /**常规页面服务器端渲染*/
    router.get("/page/normalPage", function* () {
        //从数据库获取数据
        var obj = {
            name: "zhangsan",
            age: 18
        };

        //转换为虚拟dom
        var NormalPageMain = React.createFactory(NormalPageMainCpn);

        //转换为字符串
        var reactHtml = ReactDOMServer.renderToString(<NormalPageMain initialData={obj}/>);

        //渲染并发送页面
        yield this.render("normalPage", {
            initialData: "var initialData = " + JSON.stringify(obj),
            reactOutput: reactHtml
        });
    });

    /**react-router页面服务器端渲染*/
    router.get(/^\/page\/routerPage(\/|\/\w+)*$/, function* () {
        //从数据库获取数据
        var obj = {
            first: {
                text: "first info"
            },
            second: {
                text: "second info"
            }
        };

        //转换为字符串
        var reactHtml = yield reactRouterServerRender(this, obj, RouterPageRoutes, RouterPageRoutesContainer);

        //渲染并发送页面
        yield this.render("routerPage", {
            initialData: "var initialData = " + JSON.stringify(obj),
            reactOutput: reactHtml
        });
    });
};