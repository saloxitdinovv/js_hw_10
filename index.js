// // ТЗ
// 1. Создать два объекта 
// 2. Соединить два объекта чтобы старые не менялись
// 3. Получить из нового объекта все ключи в новых переменных
// 4. Получить из нового объекта все значения в новых переменных
// 5. Соединить два полученных массива после заданий (3, 4) в один целый массив (arr)
// 6. В объект types вам надо распределить элементы из массива (arr) по их типов данных


let user_one = {
    name: 'Jamik',
    surname: 'Abdurasulov',
    gender: 'male',
    age: 17,
    school: 45,
    passport: {
        seria: 'AA',
        number: 1893741,
        date: 2022 - 04 - 04,
        dateExp: 2032 - 04 - 04,
        visas: ['Russia', 'Tajikistan']
    }
}


let user_two = {
    name: 'Sheri',
    surname: 'Xasanov',
    gender: 'male',
    age: 18,
    school: 45,
    passport: {
        seria: 'AB',
        number: 8291741,
        date: 2021 - 02 - 02,
        dateExp: 2031 - 02 - 02,
        visas: ['Korea', 'China']
    }
}

let base = Object.assign(user_one, { user_two })

console.log(base);

let keys = Object.keys(base)
let values = Object.values(user_one)

let arr = keys.concat(values)
console.log(arr);


let types = {
    number: [],
    string: [],
    object: [],
}


arr.filter((items) => {
    if (typeof items === 'number') {
        items === types.number.push(items)
    } else if (typeof items === 'object') {
        items === types.object.push(items)
    } else if (typeof items === 'string') {
        items === types.string.push(items)
    } else {
        console.log('error');
    }
})

console.log(types);



