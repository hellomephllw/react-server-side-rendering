var React = require("react");
var ReactDOMServer = require("react-dom/server");
var ReactRouter = require("react-router");
var match = ReactRouter.match;
var RouterContext = ReactRouter.RouterContext;

module.exports = function(ctx, initialData, Routes, RoutesContainer) {
    return function(callback) {
        match({routes: Routes, location: ctx.url}, function(error, redirectLocation, renderProps) {
            if (error) {
                ctx.status = 500;
                ctx.body = "服务器出错！";
            } else if (redirectLocation) {
                ctx.redirect("http://localhost:3000");
            } else if (renderProps) {
                var reactHtml = ReactDOMServer.renderToString(
                    <RoutesContainer initialData={initialData}>
                        <RouterContext {...renderProps} />
                    </RoutesContainer>
                );

                callback(null, reactHtml);
            } else {
                ctx.status = 404;
                ctx.body = "不能找到该资源！";
            }
        });
    };
};