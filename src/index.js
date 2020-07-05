class Character  {
//Функция конструктор
constructor(options){   
    this.name = options.name,
    this.type = options.type,
    this.health = options.health,
    this.level = options.level,
    this.attack = options.attack,
    this.defence = options.defence
    if (typeof this.name !== 'string' || this.name.length > 10 || this.name.length < 1 ) {
      throw new Error(`name ${this.name} не соответствует требованиям`);
    }
    const arrType = ['Bowman','Swordsman','Magician','Daemon','Undead','Zombie'];
    let value = 0;
    arrType.forEach((arr) => {
        if (arr == this.type){
           ++value;
        }
    })
    if (value == 0) {
      throw new Error(`type ${this.type} не соответствует требованиям`);
    }
}
// choose(options) {
//     this.health = 100;
//     this.level = 1;
//     switch(options.type) {
//         case('Bowman'):
//         this.attack = 25;
//         this.defence = 25;
//         break;
//         case('Swordsman'):
//         this.attack = 40;
//         this.defence = 10;
//         break;
//         case('Magician'):
//         this.attack = 10;
//         this.defence = 40;
//         break;
//         case('Daemon'):
//         this.attack = 10;
//         this.defence = 40;
//         break;
//         case('Undead'):
//         this.attack = 25;
//         this.defence = 25;
//         break;
//         case('Zombie'):
//         this.attack = 40;
//         this.defence = 10;
//         break;
//     } 
// }
}

class Bowman extends Character {
    constructor(options){
        super(options);
        this.health = 100;
        this.level = 1;
        this.attack = 25;
        this.defence = 25;
    }
}
class Swordsman extends Character {
    constructor(options){
        super(options);
        this.health = 100;
        this.level = 1;
        this.attack = 40;
        this.defence = 10;
    }

}
class Magician extends Character {
    constructor(options){
        super(options);
        this.health = 100;
        this.level = 1;
        this.attack = 10;
        this.defence = 40;
    }

}
class Daemon extends Character {
    constructor(options){
        super(options);
        this.health = 100;
        this.level = 1;
        this.attack = 10;
        this.defence = 40;
    }
}
class Undead extends Character {
    constructor(options){
        super(options);
        this.health = 100;
        this.level = 1;
        this.attack = 25;
        this.defence = 25;
    }
}
class Zombie extends Character {
    constructor(options){
        super(options);
        this.health = 100;
        this.level = 1;
        this.attack = 40;
        this.defence = 10;
    }
}

const bowman = new Bowman({name : 'Bow',type : 'Bowman'})
const swordsman = new Swordsman({name : 'Sword',type : 'Swordsman'})
const magician = new Magician({name : 'Magic',type : 'Magician'})
const daemon = new Daemon({name : 'Dae',type : 'Daemon'})
const undead = new Undead({name : 'Und',type : 'Undead'})
const zombie = new Zombie({name : 'Zomb',type : 'Zombie'})
console.log(bowman);
console.log(swordsman);
console.log(magician);
console.log(daemon);
console.log(undead);
console.log(zombie);