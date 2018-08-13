import Entity from './entity';

class Hobbit extends Entity {
    constructor(name, height){
        super(name, height);
    }

    greet(){
        console.log(`Hello! I'm ${this.name} from the Shire!`);
    }
}

let Legolas = new Entity("Legolas",10);
let Frodo = new Hobbit("Frodo Baggins", 4.5);

Legolas.greet();
Frodo.greet();