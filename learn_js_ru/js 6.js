/*
class Hater {
    constructor(firstName, lastName) {
        this.firstName = this.firstName;
        this.lastName = this.lastName;
    }
    
    sayName() {
        console.log(`Our Hater is: ${this.firstName} ${this.lastName}`);
    }
}
let hater1 = new Hater('Norman', 'Ozborn');
hater1.sayName();
Про классы
*/

/*
let hater2 = {
    firstname: 'Donald',
    lastName: 'Duck',
    getName() {
        return `${this.firstname} ${this.lastName}`;
        // или return this.firstname + ' ' + this.lastName;
    }
}
console.log(hater2.getName());
*/

/*
let hater = {
    firstname: 'Bill',
    lastName: 'Geits',
    getName() {
        return `${this.firstname} ${this.lastName}`;
        // или return this.firstname + ' ' + this.lastName;
    }
}
console.log(hater.getName());
*/

/*
Constructor - Конструктор используется для установки свойств объекта 
в момент создания экземпляра. Конструктор чем-то поход на функцию.
*/

/* 
let drivers = ['Ivan', 'Sergey', 'Potap'];
console.log(drivers[0]);
console.log(drivers[1]);


console.log(drivers.length); // определяет длину массива
console.log(drivers); // показывает инфу в том чиле и длину массива
for (let i = 0; i < drivers.length ; i++) {
    console.log(drivers[i]);
}
Если разложить циклы по действиям то 
let i = 0
i < drivers.length // где длина равна трём
console.log(drivers[i] // где i = 0 а значит выводиться Ivan
i++ // то есть к i добавилась еденица
i < drivers.length 
и т.д.

let i = 0 - потому что всё в програмировании начинается с нуля.
i < drivers.length - оператор сравнения
i++ - место для финального выражения в котором у нас 
наша переменная и постфиксный вариант оператора инкримент.
*/

/* 
let i = 3;
console.log(i--);
console.log(i)
присвоили оператору единицу. Потом снова присваиваем оператору переменную,
но сначала оператор должен выполнить действия справа от равно. 
В итоге оператор равен не единице а двойке.
Инкремент это более короткий транслит этого i = i + 1; а именно так i++; ну или так ++i;   .
++i Префиксный инкремент увеличивает значение нашего числа с перменной до того 
как возвращает значение.
let i = 1;
console.log(++i)
i++ Постфиксный инкремент увеличивает значение нашего числа с перменной после того 
как возвращает значение. 
let i = 1;
console.log(i++)
Декремент. Такой же только вычитает.
НЕЛЬЗЯ ПРИМЕНЯТЬ ИНКРЕМЕНТЫ К ЧИСЛОВОМУ ЛИТЕРАЛУ. ТОЛЬКО К ИМЕНИ ПЕРЕМЕННОЙ.
*/

/*
let i = x = 10; // тоже самое что let i = 10 let x = 10
i = i + x; // теперь в выражение два операнда а плюс является бинарным оператором.
console.log(i);
*/

/*
let i = 10;
i = -i; // унарный оператор
console.log(i);
 
    i         =             -           i 
переменная оператор унарный.оператор операнд 
*/

/*
for (let i = 0; i <= 1000; i++) {
    console.log('Iron Man, Mark - ' + i);
}
Циклы позволяют не повторять код. НЕ ПОВТОРЯТЬ.
Самый часто используемый цикл это цикл - FOR. 
Операторы в програмировании являются глаголами.
*/

/* 
let car = {
    color: 'red'
}
let array = [10, 'just for world ',
            'HaudiHo', { color: 'red' }];
console.log(array[1] + array[2]);
console.log(array[3]);

let array5 = [1, 3, 10, 69];
console.log(array5[2]);


В ДжаваСкрпт списками называют массивы. Негомогенный массив может хранить в себе, 
числа, строки, другие массивы, и даже другие объекты. Конткатенация - это склеивание строк.
*/

/*
let car = {
    color: 'red',
    open() {
        console.log('Open 3');
    }
}
car.open();
Ещё один вариант укороченной/упрощенной записи Метода
*/


/*
let car = {
    color: 'red',
    open(message) {
        console.log(message);
    }
}
car.open('Open 2');
Укороченный вариант написания того же самого Метода что и ниже согласно новым стандартам ES6.
*/

/*
let car = {
    color: 'red',
    open: function(message) {
        console.log(message);
    }
}
car.open('Open');



Метод для объекта.
*/

/*
function getMessage() {
    console.log('I am function!');
}
getMessage();

let car = {
    getMessage: function() {
        console.log('I am function');
    }
}
car.getMessage();
Метод и чем отличаеться от функции. Нечто что существует отдельно
от всего и является самостоятельным субъектом, 
может возвращать результат, принимать параметры это ФУНКЦИЯ.
А если кто-то являеться ссылкой на функцию и закреплен за объектом,
а также вызываеться через свойства объекта, принято считать МЕТОДом.
*/


/*let anonym = (message) => {
    let count = 2;
    return message + 2;
}

console.log(anonym("you are anonymous "));
*/

/*
Фигурные скобки в коротком написании функции(стрелочной функции) 
используються если код внутри функции не состоит из одного выражения.
Чаще всего стрелочные функции используються в объектно 
ориентированном програмировании.
*/

/*
let anonym = function () {
    console.log("we are anonymous");
}
anonym();
Выше обычная анонимная функция.

let anonym = () => console.log("we are anonymous");
anonym();
Выше упрощенная запись согласно стандарту ES6.

let anonym = () => "you are anonymous";
console.log(anonym());
Выше ещё более упрощенная версия написания анонимной функции. 
При такой записи не надо указывать return, потому что он и так там есть.
*/

/*
(function() {
    console.log("you are anonymous");
})();
Немедленно вызываемое функциональное выражение
// anonym();

*/


/*
let anonym = function () {
    console.log("we are anonymous");
}

anonym();
Тут мы присвоили анонимной функции переменную 
и теперь функция вызывается когда мы запрашиваем переменную.
*/

/*
function watch(message) {
    return;
}

let message = watch("Easy words");

console.log(message);
Тут мы разобрались в e
*/

/*
function watch(message) {
    console.log(message); //undefined
}

watch();

function watch2(message = 'jfdsofnsdifn') {
    console.log(message); // not undefined
}

watch2();

Разобрали значение по умолчанию для параметров.
Если не присвоить значение через равно, то будет - undefined.
*/

/*
let car = {
    maxSpeed: 280,
    update: speedChange
}

car.update();


function speedChange() {
    console.log(car.maxSpeed);
}
Тут мы объявляли функцию прямо в объекте. 
*/

/*
let car = {
    color: 'red',
};

let car2 = {
    color: 'green',
};

colorChange(car);
colorChange(car2);

function colorChange(theCar) {
    theCar.color = 'yellow';
}

console.log ("Car: " + car.color);
console.log ("Car2: " + car2.color);

тут мы запускали функцию и разбирались как работает присвоение и 
изменение значений в переменных. Функцию лучше располагать ниже кода.
Так лучше читаеться код. Функцию можно вызвать и до её объявления.
*/

/*
let color = car.color == 'red' ? 'Red' : 'Green';
console.log(color);
*/

/* 
car.color == 'red' ? console.log('Green') : console.log('Red');
выше оператор сравнение в три переменные 
запрашивается значение правда или ложь, 
потом вопросительный знак, 
потом что будет если истина,
потом что будет если ложь
/*

/* 
if(true) {
    console.log('TRUE');
}else{
    console.log('FALSE')
}
*/

/* 
if(car.color == 'red') {
    console.log('The cars color is red');
    console.log('TEST')
}else if(car.color == 'green') {
    console.log('The cars color is green');
}else{
    console.log("The cars color isn't defined");
}
*/
