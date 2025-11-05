export default function initHandTalk() {
   (function () {
      var ht = document.createElement('script');
      ht.type = 'text/javascript';
      ht.async = true;
      ht.src = 'https://plugin.handtalk.me/handtalk-plugin.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(ht, s);
   })();
}