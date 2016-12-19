var React = require("react");
var RouterPageStore = require("../store/RouterPageStore");

var RouterPageRoutesContainer = React.createClass({
    getInitialState: function() {
        return RouterPageStore.getInitStore(this.props.initialData);
    },
    componentDidMount: function() {
        RouterPageStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        RouterPageStore.removeChangeListener(this._onChange);
    },
    render: function() {
        return (this.props.children);
    },
    _onChange: function() {
        this.setState(RouterPageStore.getStore());
    }
});

module.exports = RouterPageRoutesContainer;