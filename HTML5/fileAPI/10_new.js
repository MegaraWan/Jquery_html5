function doFirst(){
    // 跟 HTML 畫面產生關聯，建立事件聆聽功能
    document.getElementById('theFile').onchange = fileChange
}
function fileChange(e){
    let file = document.getElementById('theFile').files[0]
    // let file = e.target.files[0]
    // console.log(file);  

    let readFile = new FileReader()
    readFile.readAsDataURL(file)
    readFile.addEventListener('load', function(){
        let image = new Image()
        image.src = readFile.result
        image.style.width = '100%'
        image.style.height = '100%'

        let box = document.getElementById('box')
        // 先判斷此處是否已有物件，如果有要先刪除
        // alert(box.childNodes.length)

        // 做法 1
        //childNodes，會把enter也算進去，不知道原本html怎麼寫，所以用while迴圈
        // while(box.childNodes.length >= 1){
        //     box.removeChild(box.firstChild)
        // }

        // 做法 2
        box.innerHTML = ''

        // 再顯示圖片
        box.appendChild(image)

        // let image = document.getElementById('image')
        // image.src = readFile.result
        // image.style.maxWidth = '520px'
        // image.style.maxHeight = '400px'


    })
}
window.addEventListener('load',doFirst) 
