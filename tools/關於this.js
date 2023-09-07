1
    .html   <button id="theButton">Click</button>
    .js
        let theButton = document.getElementById('theButton')
        theButton.addEventListener('click',function(e){
            console.log(e.target.nodeName)  // BUTTON
            console.log(this.nodeName)  // BUTTON
            console.log(e.type) // click
        })
    ※ this 在 JavaScript 代表執行當下的外層物件，
        所以 this 在執行時候才有意義，
        至於 this 代表哪一個物件，跟它的情境(context)有關

2
    (1)
        function action(){
            console.log(this)
        }
        呼叫: action()
        結果: window 物件

    (2)
        const man = {
            name: 'Peter',
            sayHello(){
                console.log(this)
            },
        }
        呼叫: man.sayHello()
        結果: man 物件

    (3) 箭頭函數
        const man = {
            name: 'Peter',
            sayHello: () => console.log(this),
        }
        呼叫: man.sayHello()
        結果: window 物件

    (4) IIFE(Immediately Invoked Function Expression) 
        let hello = function(name){
            console.log(`Hello, ${name}`);
        }
        呼叫: hello('Peter')
        結果: Hello, Peter

        ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 改成箭頭函數
        let hello = name => console.log(`Hello, ${name}`)

        ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 

        let hello = function(name){
            console.log(`Hello, ${name}`)
        }('Stella')

3 Vue 的 this 代表 Vue 物件本身