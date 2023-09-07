1 建立 Object 物件
    let obj = {}
    let obj = new Object()

2 如何存取?
    const man = {
        name: 'Peter',
        age: 40,
        gender: 'male',
        favoriateColor: ['gray','white','black'],
        car: {
            make: 'BMW',
            mode: 'X5',
            year: 2020,
        },
        retired: false,
        // sayHello: function(){}, // ES5
        // sayHello(){},           // ES6
        sayHello(){
            console.log('Hello');
        },          
    }

    man ---> 物件
    man.name ---> Peter
        物件的陣列表示法: man['name']
    man.favoriateColor[1] ---> white
        物件的陣列表示法: man['favoriateColor'][1]
    man.car.mode ---> X5
        物件的陣列表示法: man['car']['mode']
    man.sayHello()


以下狀況，一定要用物件的陣列表示法
    const products = {
        10: 'iPad',
        20: 'iPhone',
        30: 'Mac Pro',
        40: 'HomePad mini',
        50: 'Air Pads',
    }

    products.10 ---> SyntaxError: Unexpected number
    products[10] ---> iPad


    