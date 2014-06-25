// ==UserScript==
// @name        chatwork_focus
// @version     1.0.0
// @namespace   http://idaemons.org/
// @description Automatically focus on the textarea in ChatWork.
// @include     https://www.chatwork.com/*
// @include     https://kcw.kddi.ne.jp/*
// @grant       none
// @author      Akinori MUSHA
// @license     2-clause BSDL
// @homepage    https://github.com/knu/userjs-chatwork
// ==/UserScript==

(function () {
    var orig = RL.selectRoom;
    RL.selectRoom = function () {
        var ret = orig.apply(this, arguments);
        $('#_chatText').focus();
        return ret;
    };
})();
