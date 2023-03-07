// let countEl = document.getElementById("count-el");
// let myAge = 23;
// let dogYears = 7;
// let age = myAge * dogYears;
//  console.log(age)

// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 40;
// console.log(bonusPoints);

// let increase = document.getElementById("increment-btn").addEventListener('click', () =>{

// })

// const name = 'nathan';
// const myAge = 40;
// console.log(`My name is ${name}, I am ${myAge}years old`)
// const info ={
//     firstName: 'naca',
//     lastName: 'Doe',
//     age: 56,
//     skill: ['Basketball', 'ui&ux' ,'fullstackdev'],
//     address:{
//         street:'agbekolade',
//         number: 19,
//         localGovt:'idi-oro'
//     }
// }
// console.log(info.skill[1])

// const todo = [
//     {
//         id : 1,
//         text: 'take out trash',
//         isComplete: true
//     },
//     {
//         id : 2,
//         text: 'take out food',
//         isComplete: true
//     },
//     {
//         id : 3,
//         text: 'denist appointmnet',
//         isComplete: false
//     },
// ]

// todo.push[4] = 'nacadiamond';
 
// const nath = todo .filter(function(todo){
//     return todo.isComplete === true
// }
// )

// console.log(nath)

let count = 0;
let increase = document.querySelector('.btn-increment-btn');
let remove = document.querySelector('.btn-reduction-btn');
let reset = document.querySelector('.btn-reset-btn');
let countEl = document.querySelector('#count-el');

increase.addEventListener('click', () => {
    count += 1
    countEl.textContent = count
}) ;

remove.addEventListener('click', () => {
    count -= 1
    countEl.textContent = count
}) ;

reset.addEventListener('click', () => {
    count = 0
    countEl.textContent = count
}) ;





// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function add(){
//     let sum = lap1 + lap2 + lap3 
//     console.log(sum)
// }
// add()
