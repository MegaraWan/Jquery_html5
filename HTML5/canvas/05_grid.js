function doFirst(){
    // 跟 HTML 畫面產生關聯
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d');
    

    //格線
    let gap = 50
    if(canvas.width > canvas.height){
        range = canvas.width / gap
    }else{
        range = canvas.height / gap
    }

    for(let i = 0; i <= range; i++){
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

}
window.addEventListener('load', doFirst)