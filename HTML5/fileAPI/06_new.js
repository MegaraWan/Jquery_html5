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
        let image = document.getElementById('image')
        image.src = readFile.result
        image.style.maxWidth = '520px'
        image.style.maxHeight = '400px'
    })
}
window.addEventListener('load',doFirst) 