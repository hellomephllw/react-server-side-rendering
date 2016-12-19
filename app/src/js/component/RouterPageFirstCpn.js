var React = require("react");
var RouterPageStore = require("../store/RouterPageStore");

var RouterPageFirstCpn = React.createClass({
    getInitialState: function() {
        return RouterPageStore.getStore().first;
    },
    render: function() {
        return (
            <div>
                {this.state.text}
            </div>
        );
    }
});

module.exports = RouterPageFirstCpn;