
(function (doc, win) {
        var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
                console.log(clientWidth);
                if(clientWidth >= 430){
                        docEl.style.fontSize = 81.09375 + "px";
                        $(".masktit").css("top","0.9rem");
                }else{       
                        docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                }
                console.log(docEl.style.fontSize);
        };
        if (!doc.addEventListener) return;
                win.addEventListener(resizeEvt, recalc, false);
                doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
