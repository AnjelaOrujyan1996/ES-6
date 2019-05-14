// Used links`
// ==========> 1) https://learn.javascript.ru/es-modern
// ==========> 2) http://es6-features.org/#GeneratorFunctionIteratorProtocol

//                                               1
//  ===================================== > LET <-> VAR < =====================================

// *********************************************************************************
// Область видимости переменной let – блок {...}.
// run this block
// var x = 5;
// if (true) {
//     var x = 10;
//     alert(x);  // 10 (внутри блока)
// }
// alert(x);  // 10 (снаружи блока то же самое)

// make comment this block and run next block

// let x = 5; // (*)
// if (true) {
//     let x = 10;
//     alert(x); // 10 (внутри блока)
// }

// alert(x); // 5 (снаружи блока значение не изменилось)

// make comment previous blocks and run next block

// if (true) {
//     let x = 10;
//     alert(x); // 10 (внутри блока)
// }
// alert(x); // ошибка!
// *********************************************************************************

// *********************************************************************************
// make comment previous blocks and run next block
// Переменная let видна только после объявления.

// alert(a); // undefined
// var a = 5;

// make comment previous blocks and run next block

// alert(a); // ошибка, нет такой переменной
// let a = 5;

// make comment previous blocks and run next block

// Заметим также, что переменные let нельзя повторно объявлять.
// let x;
// let x; // ошибка: переменная x уже объявлена
// *********************************************************************************

// *********************************************************************************
// make comment previous blocks and run next block
// for (let i = 0; i < 10; i++) { /* … */
// }
// alert(i); // ошибка: глобальной i нет

// make comment previous blocks and run next block
// for (var i = 0; i < 10; i++) { /* … */
// }
// alert(i); // 10
// *********************************************************************************

// *********************************************************************************
// make comment previous blocks and run next block
// const user = {
//     name: "Angela"
// };
//
// user.name = "Anna"; // допустимо
// user = 5; // нельзя, будет ошибка

// *********************************************************************************

//                                                2
//  ===================================== > DESTRUCTURING < =====================================

// *********************************************************************************
// make comment previous blocks and run next block

// let [fruit1, fruit2] = ["apple", "banan"];
//
// alert(fruit1); // Илья
// alert(fruit2);  // Кантор
//
// let [, , title] = "Юлий Цезарь Император Рима".split(" ");
// alert(title); // Император
// *********************************************************************************

// *********************************************************************************
// make comment previous blocks and run next block

// Если мы хотим получить и последующие значения массива,
// но не уверены в их числе – можно добавить ещё один параметр,
// который получит «всё остальное»,
// при помощи оператора "..." («spread», троеточие)

// let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");
//
// alert(firstName); // Юлий
// alert(lastName);  // Цезарь
// alert(rest);      // Император,Рима (массив из 2х элементов)
// *********************************************************************************

// *********************************************************************************
// make comment previous blocks and run next block
// function defaultLastName() {
//     return Date.now() + '-visitor';
// }
//
// // lastName получит значение, соответствующее текущей дате:
// let [x, y = defaultLastName()] = ["Вася"];
//
// alert(x); // Вася
// alert(y);  // 1436...-visitor
// *********************************************************************************

// *********************************************************************************
// // make comment previous blocks and run next block

// let options = {
//     title: "Меню",
//     width: {
//         x: {
//             y: 100
//         }
//     },
//     height: 200
// };
//
// let {title, width:{x: {y : o}}, height} = options;
//
// alert(title);  // Меню
// alert(o);  // 100
// alert(height); // 200

// let xyz = {
//     title: "Меню"
// };
//
// let {x=100, y=200, z} = xyz;
//
// alert(x);  // Меню
// alert(y);  // 100
// alert(z); // 200

// *********************************************************************************

// *********************************************************************************
// make comment previous blocks and run next block

// let options = {
//     title: "Меню",
//     width: 100,
//     height: 200
// };
//
// let {title, ...size} = options;

// title = "Меню"
// size = { width: 100, height: 200} (остаток)

// *********************************************************************************

// *********************************************************************************
// make comment previous blocks and run next block
//
// // let a, b;
// // {a, b} = {a:5, b:6}; // будет ошибка, оно посчитает, что {a,b} - блок

// let a, b;
// ({a, b} = {a:5, b:6}); // внутри выражения это уже не блок
// alert(a);
// alert(b);
// *********************************************************************************

// *********************************************************************************
// make comment previous blocks and run next block
// let options = {
//     size: {
//         width: 100,
//         height: 200
//     },
//     items: ["Пончик", "Пирожное"]
// }
//
// let { title="Меню", size: {width:w, height}, items: [item1, item2] } = options;
//
// // Меню 100 200 Пончик Пирожное
// alert(title);  // Меню
// alert(w);  // 100
// alert(height); // 200
// alert(item1);  // Пончик
// alert(item2);  // Пирожное
// *********************************************************************************

//                                                3
// [1] ===================================== > FUNCTION < =====================================

// *********************************************************************************
// make comment previous blocks and run next block

// function showMenu(title = "Заголовок", width = 100, height = 200) {
//     alert('title=' + title + ' width=' + width + ' height=' + height);
// }
// // При передаче любого значения, кроме undefined,
// // включая пустую строку, ноль или null,
// // параметр считается переданным, и значение по умолчанию не используется.
//
// showMenu(undefined, null);
// // title=Заголовок width=null height=200

// *********************************************************************************

// *********************************************************************************
// make comment previous blocks and run next block
// Оператор spread вместо arguments

// function showName(firstName, lastName, ...rest) {
//     alert(firstName + ' ' + lastName + ' - ' + rest);
// }
//
// // выведет: Юлий Цезарь - Император,Рима
// showName("Юлий", "Цезарь", "Император", "Рима");

// let numbers = [2, 3, 15];
// // Оператор ... в вызове передаст массив как список аргументов
// // Этот вызов аналогичен Math.max(2, 3, 15)
// let max = Math.max(...numbers);
// alert( max ); // 15

// // function f(arg1, ...rest, arg2) {} // arg2 после ...rest будет ошибка
// *********************************************************************************

// *********************************************************************************
// make comment previous blocks and run next block

//     // in es-5
// let group1 = {
//     title: "Fruits",
//     fruits: ["apple", "banana", "avogado"],
//
//     showList: function() {
//         var self = this;
//         this.fruits.forEach(function(fruit){
//             alert(self.title + ': ' + fruit);
//         })
//     }
// }
//
// group1.showList();
//
//     // in es-6
// let group2 = {
//     title: "Fruits",
//     fruits: ["apple", "banana", "avogado"],
//
//     showList: function() {
//         this.fruits.forEach(fruit => {
//             alert(this.title + ': ' + fruit);
//         })
//     }
// }
//
// group2.showList();
// *********************************************************************************

//                                            4
// ===================================== > STRINGS < =====================================

// *********************************************************************************
// make comment previous blocks and run next block

// alert(`моя
//   многострочная
//   строка`);
//
// let apples = 2;
// let oranges = 3;
//
// alert(`${apples} + ${oranges} = ${apples + oranges}`); // 2 + 3 = 5

// *********************************************************************************

//                                            5
// ===================================== > OBJECTS < =====================================

// *********************************************************************************
// make comment previous blocks and run next block

// // es-6
// let userName = 'Angela';
// let userEmail = 'angela1234@mail.ru';
//
// let obj = {userName, userEmail};
//
// alert(JSON.stringify(obj));
//
// // make comment previous blocks and run next block
//
// // es-5
// let userName = 'Angela';
// let userEmail = 'angela1234@mail.ru';
//
// let obj = {userName: userName, userEmail: userEmail};
//
// alert(JSON.stringify(obj));

// *********************************************************************************

// *********************************************************************************
// make comment previous blocks and run next block
// let x = "userName";
//
// let user = {
//     [x]: "Angela"
// };
//
// alert( user.userName ); // Angela

// make comment previous blocks and run next block
//
// let a = "My ";
// let b = "Name ";
// let c = "Is ";
//
// let user = {
//     [(a + b + c).toLowerCase()]: "Angela"
// };
//
// alert( user["my name is"] ); // Angela

// *********************************************************************************

// *********************************************************************************
// // make comment previous blocks and run next block

// let user = { name: "Angela" };
// let visitor = { isAdmin: false, visits: true };
// let admin = { isAdmin: true };
//
// Object.assign(user, visitor, admin);
//
// // user <- visitor <- admin
// alert( JSON.stringify(user) ); // name: Angela, visits: true, isAdmin: true


// // make comment previous blocks and run next block

// let user = { name: "Angela", isAdmin: false };
// let clone = Object.assign({}, user);
//
// alert(JSON.stringify(clone));

// *********************************************************************************

// *********************************************************************************
// // make comment previous blocks and run next block

// let animal = {
//     walk() {
//         alert("I'm walking");
//     }
// };
//
// let rabbit = {
//     __proto__: animal,
//     walk() {
//         console.dir(super.walk)
//         alert(super.walk); // walk() { … }
//         super.walk(); // I'm walking
//     }
// };
//
// rabbit.walk();

// *********************************************************************************

//                                            6
// ===================================== > MAP-SET < =====================================

// *********************************************************************************
// make comment previous blocks and run next block

// map => Методы для удаления записей:
// => map.delete(key) удаляет запись с ключом key, возвращает true, если такая запись была, иначе false.
// => map.clear() – удаляет все записи, очищает map.

// Для проверки существования ключа:
// => map.has(key) – возвращает true, если ключ есть, иначе false.


// let map = new Map();
//
// map.set('1', 'str1');
// map.set(1, 'num1');
// map.set(true, 'bool1');
//
// alert( map.get(1)   );  // num1
// alert( map.get('1') );  // str1
//
// alert( map.size ); // 3

// Для итерации по map используется один из трёх методов:
// => map.keys() – возвращает итерируемый объект для ключей,
// => map.values() – возвращает итерируемый объект для значений,
// => map.entries() – возвращает итерируемый объект для записей [ключ, значение], он используется по умолчанию в for..of.

// // make comment previous blocks and run next block
// let recipeMap = new Map([
//     ['x', '100'],
//     ['y', '200'],
//     ['z', '300']
// ]);
//
// for(let x of recipeMap.keys()) {
//     alert(x); //x, y, z
// }
//
// for(let y of recipeMap.values()) {
//     alert(y); // 100, 200, 300
// }
//
// for(let entry of recipeMap) { // то же что и recipeMap.entries()
//     alert(entry); // x, 100 ...  [key,value]
// }

// set => Основные методы:
//
// => set.add(item) – добавляет в коллекцию item, возвращает set (чейнится).
// => set.delete(item) – удаляет item из коллекции, возвращает true, если он там был, иначе false.
// => set.has(item) – возвращает true, если item есть в коллекции, иначе false.
// => set.clear() – очищает set.

// // make comment previous blocks and run next block
// let set = new Set();
//
// let vasya = {name: "Вася"};
// let petya = {name: "Петя"};
// let dasha = {name: "Даша"};
//
// // посещения, некоторые пользователи заходят много раз
// set.add(vasya);
// set.add(petya);
// set.add(dasha);
// set.add(vasya);
// set.add(petya);
//
// // set сохраняет только уникальные значения
// alert( set.size ); // 3
//
// set.forEach( user => alert(user.name ) ); // Вася, Петя, Даша

// *********************************************************************************

//                                                7
// ===================================== > WEEKMAP-WEEKSET < =====================================

// *********************************************************************************

// ==> Это нужно для тех ситуаций, когда основное место для хранения и использования
//     объектов находится где-то в другом месте кода, а здесь мы хотим хранить для
//     них «вспомогательные» данные, существующие лишь пока жив объект.

// make comment previous blocks and run next block

// текущие активные пользователи
// let activeUsers = [
//     {name: "Вася"},
//     {name: "Петя"},
//     {name: "Маша"}
// ];
//
// // вспомогательная информация о них,
// // которая напрямую не входит в объект юзера,
// // и потому хранится отдельно
// let weakMap = new WeakMap();
//
// weakMap.set(activeUsers[0], 1);
// weakMap.set(activeUsers[1], 2);
// weakMap.set(activeUsers[2], 3);
// weakMap.set('Katya', 4); //Будет ошибка TypeError: "Katya" is not a non-null object
//
// alert( weakMap.get(activeUsers[0]) ); // 1
//
// activeUsers.splice(0, 1); // Вася более не активный пользователь
//
// // weakMap теперь содержит только 2 элемента
//
// activeUsers.splice(0, 1); // Петя более не активный пользователь
// weakMap теперь содержит только 1 элемент

//У WeakMap есть ряд ограничений:
//
// => Только объекты в качестве ключей.
// => Нет свойства size.
// => Нельзя перебрать элементы итератором или forEach.
// => Нет метода clear().

// *********************************************************************************

//                                            8
// ===================================== > PROMISE < =====================================

// *********************************************************************************

// example 1 => Promise.all(iterable)
// Promise.all([
//     httpGet('/article/promise/user.json'),
//     httpGet('/article/promise/guest.json'),
//     httpGet('/article/promise/no-such-page.json') // (нет такой страницы)
// ]).then(
//     result => alert("не сработает"),
//     error => alert("Ошибка: " + error.message) // Ошибка: Not Found
// );

// example 2 Promise.race(iterable) => в отличие от Promise.all, результатом будет только первый успешно выполнившийся промис из списка. Остальные игнорируются.
// Promise.race([
//     httpGet('/article/promise/user.json'),
//     httpGet('/article/promise/guest.json')
// ]).then(firstResult => {
//     firstResult = JSON.parse(firstResult);
//     alert( firstResult.name ); // user или guest, смотря что загрузится раньше
// });

// *********************************************************************************

//                                                  9
// ===================================== > GENERATOR FUNCTIONS < =====================================

// *********************************************************************************
// make comment previous blocks and run next block

// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
// }
//
// let generator = generateSequence();
//
// let one = generator.next();
// let two = generator.next();
// let three = generator.next();
//
// alert(JSON.stringify(one));  // {value: 1, done: false}
// alert(JSON.stringify(two));  // {value: 2, done: false}
// alert(JSON.stringify(three));  // {value: 3, done: true}

// make comment previous blocks and run next block

// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
// }
//
// let generator = generateSequence();
//
// for(let value of generator) {
//     alert(value); // 1, затем 2  // результат return в цикле for..of не выводится.
// }

// *********************************************************************************