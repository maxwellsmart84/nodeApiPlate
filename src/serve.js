console.log('we did it');
const thing = { one: 1 };
let newThing = {};

newThing = { ...newThing, ...thing };
console.log(newThing);
