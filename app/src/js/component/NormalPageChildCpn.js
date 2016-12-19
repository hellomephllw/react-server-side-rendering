var React = require("react");
var NormalPageAction = require("../action/NormalPageAction");

var NormalPageChildCpn = React.createClass({
    render: function() {
        return (
            <div>
                <p>age: {this.props.age}</p>
                <button onClick={this._onClickEventListener}>click</button>
            </div>
        );
    },
    _onClickEventListener: function() {
        NormalPageAction.clickBtn();
    }
});

module.exports = NormalPageChildCpn;