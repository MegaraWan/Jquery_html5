$(function () {
    // 偵測目前 div 的 font-size
    // let currentSize = parseInt($('div').css('fontSize'))
    // alert(currentSize)

    $('#shrink').click(function(){
        changeSize('small')
    })
    $('#enlarge').click(function(){
        changeSize('big')
    })

    function changeSize(size){
        let currentSize = parseInt($('div').css('fontSize'))

        if(size == 'small'){
            newSize = currentSize - 2
        }else if(size == 'big'){
            newSize = currentSize + 2
        }

        $('div').css('fontSize',newSize).css('fontFamily','jf open 粉圓 2.0')
    }
    
});

/* ===
JS 的函數: 宣告、定義和呼叫
1 沒有傳參數，沒有傳回值
    function action(){     // 宣告 + 定義
        console.log(5)
    }
    action()    // 呼叫

2 沒有傳參數，有傳回值
    function action(){     // 宣告 + 定義
        console.log(5)

        return 'success'
    }
    let ans = action()    // 呼叫  

3 有傳參數，有傳回值
    function action(num){     // 宣告 + 定義
        return num * 100
    }
    let ans = action(5)    // 呼叫 

4 有傳參數，沒有傳回值
    function action(num){     // 宣告 + 定義
        console.log(num);
    }
    action(5)    // 呼叫 
=== */