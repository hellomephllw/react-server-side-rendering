var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var RouterPageMainCpn = React.createClass({
    render: function() {
        return (
            <div>
                <h1>main page!</h1>
                <div><Link to="/page/routerPage/first">show first</Link></div>
                <div><Link to="/page/routerPage/second">show second</Link></div>
                {this.props.children}
            </div>
        );
    }
});

module.exports = RouterPageMainCpn;