window.onload = function () {
    //マウスストーカー用のDOMを取得
    const stalker = document.getElementById('stalker');

    //マウスに追従させる処理
    document.addEventListener('mousemove', function (e) {
        stalker.style.left = e.clientX + 20 + "px";
        stalker.style.top = e.clientY + 20 + "px";
    });
};
