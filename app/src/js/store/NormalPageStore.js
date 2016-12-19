var CentralDispatcher = require("../dispatcher/CentralDispatcher");
var NormalPageConst = require("../constant/NormalPageConst");
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");

var CHANGE_EVENT = "change";
var store = {};

var NormalPageDeal = {

};

var StorePublic = assign({}, EventEmitter.prototype, {
    getInitStore: function(serverData) {
        //初始化数据
        var data = null;
        if (typeof window === "undefined") {//服务器端
            data = serverData;
        } else {//浏览器端
            data = initialData;
        }
        store.data = data;

        //返回数据
        return store;
    },
    getStore: function() {
        return store;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

CentralDispatcher.register(function(action) {
    switch (action.actionType) {
        case NormalPageConst.CLICK_BTN:
            console.info("执行点击事件！");
            break;
    }
});

module.exports = StorePublic;