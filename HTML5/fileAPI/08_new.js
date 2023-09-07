function doFirst(){
    // 跟 HTML 畫面產生關聯，建立事件聆聽功能
    document.getElementById('theFile').onchange = fileChange
}
function fileChange(e){
    // let file = document.getElementById('theFile').files[0]
    let file = e.target.files[0]
    // console.log(file);

    let message = ``
    message += `File name: ${file.name}\n`
    message += `File type: ${file.type}\n`
    message += `File size: ${file.size} byte\n`
    message += `Last modified: ${file.lastModifiedDate}\n`

    document.getElementById('fileInfo').value = message
    // =====================

    let readFile = new FileReader()
    readFile.readAsDataURL(file)
    readFile.addEventListener('load', function(){
        let myMovie = document.getElementById('myMovie')
        myMovie.src = readFile.result
        myMovie.controls = true
        myMovie.width = 535
    })
}
window.addEventListener('load',doFirst) 