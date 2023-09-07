JSON (JavaScript Object Notation)

1 物件放進陣列裡    
    classmate = [
        {name: 'Andy', age: 25},
        {name: 'Brian', age: 24},
        {name: 'Carl', age: 26},
        {name: 'Dale', age: 23},
        {name: 'Eric', age: 22},
    ]
    classmate --> 陣列
    classmate[0] --> 物件
    classmate[0].name --> Andy

    JSON 格式: 
    [
        {
            "name":"Andy",
            "age":25
        },
        {
            "name":"Brian",
            "age":24
        },
        {
            "name":"Carl",
            "age":26
        },
        {
            "name":"Dale",
            "age":23
        },
        {
            "name":"Eric",
            "age":22
        }
    ]

2 陣列放進物件裡
    classmate = {
        CHD103: [
            {name: 'Andy', age: 25},
            {name: 'Brian', age: 24},
            {name: 'Carl', age: 26},
            {name: 'Dale', age: 23},
            {name: 'Eric', age: 22},
        ],
    }
    classmate ---> 物件
    classmate.CHD103 ---> 陣列
    classmate.CHD103[0] ---> 物件
    classmate.CHD103[0].name ---> Andy

    JSON 格式: 
    {
        "CHD103":[
            {
                "name":"Andy",
                "age":25
            },
            {
                "name":"Brian",
                "age":24
            },
            {
                "name":"Carl",
                "age":26
            },
            {
                "name":"Dale",
                "age":23
            },
            {
                "name":"Eric",
                "age":22
            }
        ]
    }

3 將「JavaScript物件」轉成 JSON
    JSON.stringify(JavaScript物件)

    [ex]
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
    }

    console.log(JSON.stringify(man))

    結果: {"name":"Peter","age":40,"gender":"male","favoriateColor":["gray","white","black"],"car":{"make":"BMW","mode":"X5","year":2020},"retired":false}

4 將 JSON 轉成 「JavaScript物件」
    JSON.parse(JSON 文件)

    [ex] 將 JSON 檔案放進引號裡
    let json = `{"name":"Peter","age":40,"gender":"male","favoriateColor":["gray","white","black"],"car":{"make":"BMW","mode":"X5","year":2020},"retired":false}`

    console.log(JSON.parse(json))
    結果: {name: 'Peter', age: 40, gender: 'male', favoriateColor: Array(3), car: {…}, …}


    