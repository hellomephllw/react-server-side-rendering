var React = require("react");
var RouterPageStore = require("../store/RouterPageStore");

var RouterPageSecondCpn = React.createClass({
    getInitialState: function() {
        return RouterPageStore.getStore().second;
    },
    render: function() {
        return (
            <div>
                {this.state.text}
            </div>
        );
    }
});

module.exports = RouterPageSecondCpn;