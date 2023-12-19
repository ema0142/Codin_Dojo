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
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


