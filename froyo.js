const flavors = window.prompt('enter flavors', 'vanilla, vanilla, strawberry, chocolate').split(',');
console.log(flavors);

const stats = {};

for (let i = 0; i < flavors.length; i++) {
    const flavor = flavors[i];
    if(stats[flavor] === undefined){
        stats[flavor] = 1;
    }
    else {
        stats[flavor] = stats[flavor] + 1;
    }
}

console.log(stats);

/* lets try and edit this code, maybe write a function that given a string runs this calculation called stats*/

