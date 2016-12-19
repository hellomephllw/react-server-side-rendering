var CentralDispatcher = require("../dispatcher/CentralDispatcher");
var NormalPageConst = require("../constant/NormalPageConst");

var NormalPageAction = {
    clickBtn: function() {
        CentralDispatcher.dispatch({
            actionType: NormalPageConst.CLICK_BTN
        });
    }
};

module.exports = NormalPageAction;