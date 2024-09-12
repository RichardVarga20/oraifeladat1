const animals = ['cica', 'kutya', 'zsiráf', 'zebra', 'mókus'];

function init() {
    document.getElementById('animalContainer').innerHTML = animals.map(v =>
        `<div onclick="f('${v}')">${v}</div>`    
    ).join("");
}

function f(animal) {
    console.log(animal);
}
