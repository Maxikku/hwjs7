// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше


 let numbers = [22, 16, 8, 20, 54, 23, 31, 4, 10, 15, 3, 43, 56, 76, 87, 98, 99, 63, 74, 39];

let sort = numbers.sort((a, b) => {
    return a - b;
});

console.log(sort);


let sort2 = numbers.sort((a, b) => {
    return b - a;
});

console.log(sort2);

// -- при помощи filter получить числа кратные 3

let filterThree = numbers.filter((value) => {
    return !(value % 3);
});

console.log(filterThree);

// -- при помощи filter получить числа кратные 10

filterTen = numbers.filter((value) => {
    return !(value % 10);
});
console.log(filterTen);

// -- перебрать (проитерировать) массив при помощи foreach()

let sortWithEach = numbers.forEach((value) => {
    console.log(value);
    return
});

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

let tripleVal = numbers.map(value => value * 3);
    


console.log(tripleVal);


//- создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце


let str = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'];

// -- отсортировать его по алфавиту в восходящем порядке.

let sortStr = str.sort((a, b) => {
    if (a < b) {
        return -1
    } 
});
 console.log(sortStr);
 
// // -- отсортировать его по алфавиту  в нисходящем порядке.

let sortStr2 = str.sort((a, b) => {
    if (b < a) {
        return -1
    } 
});
 console.log(sortStr2);

// // -- отфильтровать слова длиной менее 4х символов

 let filterStr = str.filter(value => value.length <= 4);

 console.log(filterStr);

 
//  // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
 
let mapWithSym = str.map(value => value + '!');

console.log(mapWithSym);


// // Дан масив :

 let users = [ 
    {name: 'vasya', age: 31, status: false}, 
    {name: 'petya', age: 30, status: true}, 
    {name: 'kolya', age: 29, status: true}, 
    {name: 'olya', age: 28, status: false}, 
    {name: 'max', age: 30, status: true}, 
    {name: 'anya', age: 31, status: false}, 
    {name: 'oleg', age: 28, status: false}, 
    {name: 'andrey', age: 29, status: true}, 
    {name: 'masha', age: 30, status: true}, 
    {name: 'olya', age: 31, status: false}, 
    {name: 'max', age: 31, status: true} ];

// // - відсортувати його за  віком (зростання , а потім окремо спадання)

let userSort = users.sort((a, b) => {
    return a.age - b.age;
});
console.log(userSort);

// //- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

let userNameSort = users.sort((a, b) => {
    return a.name.length - b.name.length
});

// // console.log(userNameSort);

let userNameSort2 = users.sort((a, b) => {
    return b.name.length - a.name.length
});

console.log(userNameSort2);

// //- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

let userId = users.map((name, index) => {
    return {name, id: index + 1}
});

console.log(userId);

// //- відсортувати його за індентифікатором


let sortById = userId.sort((a, b) => {
    if (a.id > b.id) {
        return -1
    }
})
console.log(sortById);


// // Дано масив

let cars = [ 
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} 
];

// // Відфільтрувати масив за наступними крітеріями :
// // - двигун більше 3х літрів


let filterEngineVolume = cars.filter(value  => value.volume >= 3);  

console.log(filterEngineVolume);

// //- двигун = 2л

let engineVolumeTwo = cars.filter(value => value.volume ===2);

 console.log(engineVolumeTwo);

// //- виробник мерс

let onlyMercedes = cars.filter(value => value.producer === 'mercedes');
    
console.log(onlyMercedes);

// //- двигун більше 3х літрів + виробник мерседес

let mercedesWithThree = cars.filter(value => value.producer === 'mercedes' && value.volume >= 3);
console.log(mercedesWithThree);

// // /- двигун більше 3х літрів + виробник субару

let subaruWithThree = cars.filter(value => value.producer === 'subaru' && value.volume >= 3);
    
console.log(subaruWithThree);

// //- сили більше ніж 300

let threeHorsePower = cars.filter(value => value.power > 300);
    
 console.log(threeHorsePower);

// // /- мотор серіі ej

let ejEngine = cars.filter(value => value.engine.includes('ej'));

console.log(ejEngine);

// //- сили більше ніж 300 + виробник субару + мотор серіі ej

let subaruThreeEj = cars.filter(value => value.power > 300 && value.producer === 'subaru' && value.engine.includes('ej'));

console.log(subaruThreeEj);

// // /- двигун меньше 3х літрів + виробник мерседес

let mercEngine = cars.filter(value => value.volume < 3 && value.producer === 'mercedes');

console.log(mercEngine);

// //- двигун більше 2л + сили більше 250

let engineTwoAndFive = cars.filter(value => value.volume > 2 && value.power > 250);
    
console.log(engineTwoAndFive);

// //- сили більше 250  + виробник бмв

let bmwPower = cars.filter(value => value.power > 250 && value.producer === 'bmw');
    
console.log(bmwPower);


// //- взять слдующий массив

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
];

// //-- отсортировать его по id пользователей

let sortUsersById = usersWithAddress.sort((a, b) => {
    return a.id - b.id
})
console.log(sortUsersById);
 
// // -- отсортировать его по id пользователей в обратном опрядке
let sortUsersIdDown = usersWithAddress.sort((a, b) => {
    return b.id - a.id
});
console.log(sortUsersIdDown);

// // -- отсортировать его по возрасту пользователей
let sortUsersAge = usersWithAddress.sort((a, b) => {
    return a.age - b.age;
});
console.log(sortUsersAge);

// // -- отсортировать его по возрасту пользователей в обратном порядке
let sortUsersAgeDown = usersWithAddress.sort((a, b) => {
    return b.age - a.age;
});
console.log(sortUsersAgeDown);
// // -- отсортировать его по имени пользователей
let sortUsersName = usersWithAddress.sort((a, b) => {
    if (a.name < b.name) {
        return -1
    }
});
console.log(sortUsersName);

// // -- отсортировать его по имени пользователей в обратном порядке
let sortUsersNameDown = usersWithAddress.sort((a, b) => {
    if (b.name < a.name) {
        return -1
    }
});
console.log(sortUsersNameDown);

// // -- отсортировать его по номеру дома по возрастанию
let homeNumber = usersWithAddress.sort((a, b) => {
   if (a.address.number < b.address.number) {
       return -1
   } 
});
console.log(homeNumber);

// // -- отфильтровать (оставить) тех кто младше 30
let filter30 = usersWithAddress.filter(value => value.age < 30);
console.log(filter30);

// // -- отфильтровать (оставить) тех у кого отрицательный статус
let filterStatus = usersWithAddress.filter(status => status.status === false);
console.log(filterStatus);

// // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let filterStatusAge = usersWithAddress.filter(stag => stag.status === false && stag.age < 30);
console.log(filterStatusAge);

// // -- отфильтровать (оставить) тех у кого номер дома четный

let filterHomeNumber = usersWithAddress.filter(num => num.address.number % 2 === 0);
console.log(filterHomeNumber);














