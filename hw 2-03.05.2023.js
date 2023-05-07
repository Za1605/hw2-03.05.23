//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const var1 =
    [12, `red`, 32, 45,23, `dut`, 56, `go`, 34, 90];
console.log(var1);




//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const box = {
  title: `book1`,
  pageCount: 200,
    genre: `roman`

}
console.log(box);

const box1 = {
    title: `book2`,
    pageCount: 200,
    genre: `roman`

}
console.log(box1);

const box2 = {
    title: `book1`,
    pageCount: 200,
    genre: `roman`

}
console.log(box2);




    // Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
    //Поле "автори" - являється  масивом. Кожен автор має поля name та age.

const box6 = {
    title: `book5`,
    pageCount: 200,
    genre: `rom`,
    autors: [{name: `Yuliia`, age: 29},
        {name: `Petro`, age: 37},
    ],

}

console.log(box6.autors[0].age);





//Створити масив з 10 об'єктами які описують сутніть "користувач".' +
 //Поля: name, username,password. Вивести в консоль пароль кожного користувача

const user = [

    {name: `Petro`, username: `Svanivach`, password:123},
    {name: `Sty`, username: `Fil`, password:124},
    {name: `Cro`, username: `Gir`, password:125},
    {name: `Ted`, username: `Ret`, password:126},
    {name: `Any`, username: `Div`, password:127},
    {name: `tuy`, username: `Syt`, password:127},
    {name: `Eri`, username: `Ber`, password:128},
    {name: `Stiv`, username: `Dni`, password:129},
    {name: `Kel`, username: `Sva`, password:145},
    {name: `Din`, username: `Chiy`, password:156},
];
console.log(user[0].password);

//Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
const x = 0;

    if (x !== 0){
    console.log('Вірно');
}
else{
    console.log(`Невірно`);
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
const time = 58;
if (time >=0 && time < 15){
    console.log(`першу`)
}
else if (time>=15 && time< 30){
    console.log(`другу`)
}
else if (time>=30 && time <45){
    console.log(`третю`)
}
else if (time >=45 && time <59){
    console.log(`четверту`)
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

const day =11;
if (day >=1 && day<10){
    console.log(`перша декада`)
}
else if (day >=10 && day<20){
    console.log(`другу декада`)
}
else if (day >=20 && day<31){
    console.log(`третю декада` )
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
const da = 1;
switch (da){
    case 1:
        console.log(`monday`);
    break;

    case 2:
        console.log(`tuesday`);
    break;
    case 3:
        console.log(`wednesday`);
        break;
    case 4:
        console.log(`thursday`);
        break;
    case 5:
        console.log(`friday`);
        break;
    case 6:
        console.log(`saturday`);
        break;
    case 7:
        console.log(`sunday`);
        break;
    default:
        console.log(`uknown`);
}
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
//
const number1 = 400
const number2 = 240

if (number1<number2){
    console.log('друге більше',number2 )
}

    else if (number2<number1){
        console.log('перше більше', number1)
}

else{
    console.log('Рівні числа')
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

