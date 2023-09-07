1 建立 Array 物件
    let arr = []
    let arr = new Array()

2 如何存取?
    let arr = [2,4,6,'ABC',true,new Date()]

    arr[3] ---> ABC

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }

    for(let index in arr){
        console.log(arr[index]);
    }

3 屬性: length

4 方法: 
    