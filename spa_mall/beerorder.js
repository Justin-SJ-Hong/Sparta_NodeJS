function isAdult(person) {
    return person.age >= 19;
}

function orderBeer(person) {
    if (isAdult(person)) {
        console.log('맥주 나왔어요! ' + person.name + '님');
    } else {
        console.log('미성년자시네요 ㅋㅋㅋ! ' + person.name + '님');
    }
}

const persons = [
    {name:"고영우", age: 29},
    {name:"KAli", age: 17}
];

for (const person of persons) {
    orderBeer(person);
}
