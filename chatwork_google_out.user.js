// ==UserScript==
// @name        chatwork_google_out
// @version     1.0.0
// @namespace   http://idaemons.org/
// @description Open *.google.com in the default browser on Fluid ChatWork app.
// @include     http://*.google.com/*
// @include     https://*.google.com/*
// @grant       none
// @author      Akinori MUSHA
// @license     2-clause BSDL
// @homepage    https://github.com/knu/userjs-chatwork
// ==/UserScript==

location.replace("https://www.google.co.jp/url?q=" + encodeURIComponent(location.href));
