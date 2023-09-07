function doFirst() {
    // 跟 HTML 畫面產生關聯
    let canvas = document.getElementById('canvas')
    // let 把let拿掉變成全域變數 這樣下面的圖片函數loadImage才可以抓到
    context = canvas.getContext('2d');


    //格線
    let gap = 50
    if (canvas.width > canvas.height) {
        range = canvas.width / gap
    } else {
        range = canvas.height / gap
    }

    for (let i = 0; i <= range; i++) {
        let interval = i * gap

        //水平線
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);

        //垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);
    }

    context.strokeStyle = 'rgb(0,0,0,0.3)';
    context.stroke();

    //垂直線一條一條畫，改成上面迴圈
    // context.moveTo(50, 0);
    // context.lineTo(50, 800);
    // context.stroke();
    // context.moveTo(100, 0);
    // context.lineTo(100, 800);



    // 用這個方法要一直F5，圖片沒有同時跑，所以要用呼叫函數來load IMG
    // let pic1 = new Image()
    // pic1.src = '../../images/cityscape.jpg'
    // pic1.addEventListener('load', function(){
    //     context.drawImage(pic1, 0, 0, canvas.width, canvas.height);
    // })
    // Image 內建物件，要宣告
    // context.drawImage(Image, dX, dY, dWidth, dHeight);
    // dWidth, dHeight圖片的寬高

    // let pic2 = new Image()
    // pic2.src = '../../images/Shinnosuke/Shinnosuke9.png'
    // pic2.addEventListener('load', function(){
    //     context.drawImage(pic2,   0,   0, 400, 400);    // 左上角
    //     context.drawImage(pic2,   0, 400, 400, 400);    // 左下角
    //     context.drawImage(pic2, 600,   0, 400, 400);    // 右上角
    //     context.drawImage(pic2, 600, 400, 400, 400);    // 右下角
    // })

    //pic1&2不用let 改全域
    pic1 = new Image()
    pic1.src = '../../images/cityscape.jpg'
    pic1.addEventListener('load', loadImage)

    pic2 = new Image()
    pic2.src = '../../images/Shinnosuke/Shinnosuke9.png'
    pic2.addEventListener('load', loadImage)

}

function loadImage() {
    context.globalAlpha = 0.4;
    context.drawImage(pic1, 0, 0, canvas.width, canvas.height);

    context.globalAlpha = 1;
    context.drawImage(pic2, 600, 400, 400, 400);    // 右下角
}

window.addEventListener('load', doFirst)