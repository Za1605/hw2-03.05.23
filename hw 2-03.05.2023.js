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



