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
    autors: [
        {name: `Yuliia`, age: 29},
        {name: `Petro`, age: 37},

    ]};



console.log(box6.autors[0].age);





//Створити масив з 10 об'єктами які описують сутніть "користувач".' +
 //Поля: name, username,password. Вивести в консоль пароль кожного користувача

const users = [

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
console.log(users.password);


//Логічні розгалуження:
    //Є змінна х, якій ви надаєте довільне числове значення.
    //Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

 let x = -3;
 if (x != 0)
 {
 console.log(`Вірно`);}

 else{
     console.log('Невірно');}


//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

let time = 45;

 if (time >=0 && time <15 ) {
     console.log(`first part`);
 }

 else if (time >=15 && time < 30){
     console.log(`second part`);
 }

 else if
 (time >= 30 && time < 45){
     console.log( `third part`);
 }

 else if (time >= 45 && time <60){
     console.log(`fourth part`);
 }
 else {
     console.log(`undefind`);
 }

//У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).