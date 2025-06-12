function levelsHerois() {
    let persons = [
        { name: "John", level: 100 }, //Ferro
        { name: "Cristian", level: 1100 }, //Bronze
        { name: "Jane", level: 2020 }, //Prata
        { name: "Dante", level: 5002 }, //Ouro
        { name: "Felix", level: 7050 }, //Diamante
        { name: "Luna", level: 8025 }, //Ascendente
        { name: "Guts", level: 10000 }, //Imortal
        { name: "Max", level: 12000 }, //Radiante
    ];

    for(let i = 0; i < persons.length; i++) {
        let person = persons[i];
        if (person.level <= 1000) {
            console.log(`O nome do herói é ${person.name}, está no nível de Ferro`);
        } else if (person.level >= 1001 && person.level <= 2000) {
            console.log(`O nome do herói é ${person.name}, está no nível de Bronze`);
        } else if (person.level >= 2001 && person.level <= 5000) {
            console.log(`O nome do herói é ${person.name}, está no nível de Prata`);
        } else if (person.level >= 5001 && person.level <= 7000) {
            console.log(`O nome do herói é ${person.name}, está no nível de Ouro`);
        } else if (person.level >= 7001 && person.level <= 8000) {
            console.log(`O nome do herói é ${person.name}, está no nível de Platina`);
        } else if (person.level >= 8001 && person.level <= 9000) {
            console.log(`O nome do herói é ${person.name}, está no nível de Ascendente`);
        } else if (person.level >= 9001 && person.level <= 10000) {
            console.log(`O nome do herói é ${person.name}, está no nível de Imortal`);
        } else if (person.level >= 10001) {
            console.log(`O nome do herói é ${person.name}, está no nível de Radiante`);
        }
    }
}

levelsHerois();