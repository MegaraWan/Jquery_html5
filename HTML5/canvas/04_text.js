function doFirst(){
    // 跟 HTML 畫面產生關聯
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d');

    context.font='bold 70px Tahoma';
    //這邊要加px 跟CSS寫法一樣

    // context.textBaseline='top | hanging | middle | alphabetic | ideographic | bottom';
    context.textBaseline='alphabetic'
    //預設就是在alphabetic，不用key
    //其他選項可以在改基準線的位子。


    //第一個字
    // context.fillText('goolge', 100, 100)
    context.strokeText('goolge', 100, 100);
    //字放在基準線上

        //基準線的輔助線
        context.moveTo(100, 100);
        context.lineTo(340, 100);
        context.arc(100, 100, 10, 0, 2* Math.PI)
        context.strokeStyle='red';
        context.stroke();
    
    //第二個字:加上陰影
    context.shadowColor='red';
    context.shadowOffsetX=5;
    context.shadowOffsetY=5;
    context.shadowBlur=5;
    context.fillText('goolge', 100, 250);

    //第三個字:四邊都有陰影
    context.shadowOffsetX=0;
    context.shadowOffsetY=0;
    context.shadowBlur=10;
    context.fillStyle='#fff';
    context.fillText('goolge', 100, 400);

    //第四個字:多重陰影，同一個字放不同的顏色陰影疊再一起
    context.shadowColor='blue';
    context.fillText('goolge', 100, 550);

    context.shadowColor='red';
    context.fillText('goolge', 100, 550);

}
window.addEventListener('load', doFirst)