var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var browserHistory = ReactRouter.browserHistory;

var RouterPageRoutesContainer = require("../routes/RouterPageRoutesContainer");
var RouterPageRoutes = require("../routes/RouterPageRoutes");

ReactDOM.render(
    <RouterPageRoutesContainer>
        <Router history={browserHistory}>{RouterPageRoutes}</Router>
    </RouterPageRoutesContainer>,
    document.getElementById("container")
);