var React = require("react");
var NormalPageStore = require("../store/NormalPageStore");
var ChildCpn = require("./NormalPageChildCpn");

var NormalPageMainCpn = React.createClass({
    getInitialState: function() {

        return NormalPageStore.getInitStore(this.props.initialData);
    },
    componentDidMount: function() {
        NormalPageStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        NormalPageStore.removeChangeListener(this._onChange);
    },
    render: function() {
        return (
            <div>
                <span>name:{this.state.data.name}</span>
                <ChildCpn age={this.state.data.age} />
            </div>
        );
    },
    _onChange: function() {
        this.setState(NormalPageStore.getStore());
    }
});

module.exports = NormalPageMainCpn;