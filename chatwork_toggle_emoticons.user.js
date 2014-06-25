// ==UserScript==
// @name        chatwork_toggle_emoticons
// @version     1.0.0
// @namespace   http://idaemons.org/
// @description Allow toggling emoticons in ChatWork, with those turned off by default.
// @include     https://www.chatwork.com/*
// @include     https://kcw.kddi.ne.jp/*
// @grant       none
// @author      Akinori MUSHA
// @license     2-clause BSDL
// @homepage    https://github.com/knu/userjs-chatwork
// ==/UserScript==

(function () {
    window.toggleEmoticons = function () {
        $('#_content').toggleClass('no_emoticon');
    };

    var orig = CW.prepareRegExp;

    CW.prepareRegExp = function () {
        // No emoticon by default
        toggleEmoticons();

        var ret = orig.apply(this, arguments)

        var style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(
            '#_content span.ui_emoticon_text { display: none; }\n' +
            '#_content.no_emoticon span.ui_emoticon_text { display: inline !important; }\n' +
            '#_content.no_emoticon img.ui_emoticon { display: none; }\n'
        ));
        document.head.appendChild(style);

        var re = /^<img src="(\.\/image\/emoticon\/[^"]+)"(?:\s+[^"=]+="[^"]*")*\s+alt="([^"]*)".*$/;

        CW.view.model.reg_cmp.forEach(function (o) {
            var m;
            if ((m = re.exec(o.rep))) {
                o.rep = '<span onclick="toggleEmoticons()">' + m[0] +
                    '<span class="ui_emoticon_text" style="cursor: url(' + m[1] + '), help">' +
                    m[2] + '</span></span>';
            }
        });

        CW.prepareRegExp = orig;

        return ret;
    };
})();
