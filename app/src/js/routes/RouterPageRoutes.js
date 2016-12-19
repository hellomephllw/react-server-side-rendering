var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var RouterPageMainCpn = require("../component/RouterPageMainCpn");
var RouterPageFirstCpn = require("../component/RouterPageFirstCpn");
var RouterPageSecondCpn = require("../component/RouterPageSecondCpn");

module.exports = (
    <Route path="/page/routerPage" component={RouterPageMainCpn}>
        <IndexRoute component={RouterPageFirstCpn} />
        <Route path="first" component={RouterPageFirstCpn} />
        <Route path="second" component={RouterPageSecondCpn} />
    </Route>
);