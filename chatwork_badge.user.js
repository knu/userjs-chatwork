// ==UserScript==
// @name        chatwork_badge
// @version     1.0.0
// @namespace   http://idaemons.org/
// @description Show a badge for ChatWork.
// @include     https://www.chatwork.com/*
// @include     https://kcw.kddi.ne.jp/*
// @grant       none
// @author      Akinori MUSHA
// @license     2-clause BSDL
// @homepage    https://github.com/knu/userjs-chatwork
// ==/UserScript==

(function () {
    var toInt = function (s) {
        var i = parseInt(s);
        return isNaN(i) ? 0 : i;
    };
    var getCount = function (id) {
        var elem;
        if ((elem = document.getElementById(id)) &&
            elem.style.display != 'none') {
            return toInt(elem.textContent);
        }
        return 0;
    };

    var update = function () {
        var prev = window.fluid.dockBadge, badge = '', unread, toUnread;
        if ((unread = getCount('_chatUnreadStatus')) > 0) {
            badge += unread.toString();
            if ((toUnread = getCount('_chatToUnreadStatus')) > 0) {
                badge += ':' + toUnread.toString();
            }
            if (toInt(prev) < unread) {
                window.fluid.requestUserAttention(true);
            }
        }
        window.fluid.dockBadge = badge;
    };

    setInterval(update, 3000);
})();
