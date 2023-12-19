class Ninja {
    constructor(name,health=90,speed=3,strength=3){
        // self
        this.name=name
        this.health=health
        this.speed=speed
        this.strength=strength
    }
    // 
    sayName(){
        // console.log('the ninja is :' + this.name) 
        // print(f'jasser {self.name}')
        // in python we had print(f) in js we had console.log(``)`
        // in python we had print(f'{self.name}') in js we had console.log(`${this.name}`)
        console.log(`the Ninja name is ${this.name}`)
    }
    showStats(){
        console.log(`the ninja's stats is ${this.name} , ${this.strength} , ${this.health} , ${this.speed} `)
    }
    drinkshake(){
        this.health+=10
        console.log(`${this.health}`)
    }
}

class Sensei extends Ninja{
    constructor(name,health=200,speed=10,strength=10,wisdom=10){
        super(name,health,speed,strength)
        this.name=name
        this.health=health
        this.speed=speed
        this.strength=strength
        this.wisdom=wisdom
    }
    speakWisdom(){
        super.drinkshake()
        console.log(`What one programmer can do in one month, two programmers can do in two months`)
    }
    showStats(){
        super.showStats()
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
