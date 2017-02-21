// ==UserScript==
// @name        NicoTwiAdUrlReplacer
// @namespace   WallStudio
// @description ニコニコの広告のリンクはTwitterカードに対応していなくて残念なので普通のリンクに置き換えます
// @include     https://twitter.com/intent/tweet*
// @version     1
// @grant       none
// ==/UserScript==
(function(){
  
  window.addEventListener("load", ()=>{
    let txtarea = document.getElementById("status");
    txtarea.value = txtarea.value.replace(/http:\/\/uad\.nicovideo\.jp\/ads\?vid=/g,"http://www.nicovideo.jp/watch/");
  });
  
}());