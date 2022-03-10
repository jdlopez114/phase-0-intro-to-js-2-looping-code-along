// Code your solutions in this file

const people = ["Guadelupe", "Ollie", "Aki"];


function writeCards(people, adj){
    const newArray = [];
    for(let i = 0; i < people.length; i++){
        newArray.push(`Thank you, ${people[i]}, for the wonderful ${adj} gift!`);
    }
    return newArray;
}

writeCards();

function countDown(num){
    while (num >= 0 ){
        console.log(num)
        num--;
    }
    
}