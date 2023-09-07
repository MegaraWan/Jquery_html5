function doFirst(){
    // 跟 HTML 畫面產生關聯
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d');

    context.fillStyle='red';
    context.strokeStyle='blue'; 

    context.fillRect(100, 100, 300, 200)
    // context.strokeRect(100, 100, 300, 200)
    context.clearRect(150, 150, 50, 50)
    
    context.rect(500, 300, 500, 500);
    // context.fill();   
    context.stroke(); 
    
    // 橡皮擦，把整塊canvas整個擦掉
    // context.clearRect(0, 0, canvas.width, canvas.height);    
}
window.addEventListener('load', doFirst)
// window.onload = doFirst