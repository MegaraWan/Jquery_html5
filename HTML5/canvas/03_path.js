function doFirst(){
    // 跟 HTML 畫面產生關聯
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d');

    context.fillStyle='red';
    context.strokeStyle='blue'; 
    context.lineWidth=5;
    //不用寫單位預設就是px，寫了會壞掉  

    context.moveTo(100, 100);
    context.lineTo(250, 250);
    context.lineTo(400,  50);
    context.lineTo( 50, 200);
    context.closePath();    

    //先填滿再畫線，因為lineWidth是往內5/2=2.5
    //往外長2.5，如果先畫線再填滿，內線會被吃掉
    context.fill();
    context.stroke();
    
}
window.addEventListener('load', doFirst)