console.log('You are working on the classCats.js file');
// JS – Object-oriented programming (OOP)


// The Object-Oriented Cat
// Write yourself a virtual cat – animals with a CLI are so much nicer than ones with fur.

// Create a class that represents a cat. It should have properties for tiredness, hunger, loneliness, and happiness

// Next, write methods that increase and decrease those properties. Call them something that actually represents what would increase or decrease these things, like “feed”, “sleep”, or “pet”.

// Last, write a method that prints out the cat’s status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)

// Bonus: Make the functions take arguments that increase or decrease arbitrary amounts


class Cats { // una plantilla para objetos

  constructor (fristname,race,tiredness,hunger,loneliness,happiness)
  {
  this.fristname = fristname;
  this.race = race;
  this.tiredness = tiredness;
  this.hunger = hunger;
  this.loneliness = loneliness;
  this.happiness = happiness;
  }


  getName(){
        return this.fristname;
      }
  setName(newname){
      this.fristname=newname;
    }

  jumps(){
     //complex logic and implementation details
     console.log(this.fristname + " jumps the chair");
  }
  eat(){
     //complex logic and implementation details
    console.log(this.fristname + " eat a bird");
  }
  run(){
    console.log(this.fristname + " runs away");
  }

  status(){
    console.log(this.fristname + " is today" + this.happiness + " and how much hungry " + this.hunger + " and how much lonely " + this.loneliness);
  }

};

Garfield = new Cats("Garfield","Siamese","slep+++","feed+","alone++","happy +++");
pussInBoots = new Cats("PussInBoots","ragdoll","sleep+","feed+","alone+","happy +++");

console.table(Garfield);
console.log(Garfield.fristname);

console.table(pussInBoots);
console.log(pussInBoots.fristname);

console.log(Garfield.getName());
Garfield.setName("Felix");
console.log(Garfield.fristname);

pussInBoots.jumps(); //output: PussInBoots jumps the chair
Garfield.eat();// output: Garfield eat a bird


//Tenemos una clase que se llama animal,
//y queremos que tener acceso a sus metodos/funciones desde nuestra clase Cats,
//entonces usamos <<class Cats extends Animal>> para usar
//<<Sub Classing>> se usa con la sintaxis de extends.
    // class Cat extends Animals {
    // hide(){
    //     alert(this.fristname + " hides");
    // }


// POLYMORPHISM----
// el metedo tiene el mismo nombre pero distintas funciones en cada objeto.
// por ejemplo la funcion habla puedes "sub classing" para cada clase,
//animal.speak(); Animal make different sounds.
//dog.speak(); Dog make woof, woof!!
//cat.speak(); Cat make meow!!

// class Option {
//     cata(pattern, option) {
//       return pattern[option.constructor.name](option.x);
//     }

//     map(f, opt) {
//       return this.cata({Some: x => new Some(f(x)), None: () => this}, opt);
//     }
//   };

//   class Some extends Option {
//       constructor(x) {
//       super(x);
//       this.x = x;
//     }
//   };

//   class None extends Option {
//     constructor() {
//       super();
//     }
//   };


//   // ad-hoc polymorphic function
//   const map = f => t => t.map(f, t);

//   // helper/data

//   const sqr = x => x * x;

//   const xs = [1, 2, 3];
//   const x = new Some(5);
//   const y = new None();

//   // application

//   console.log(
//     map(sqr) (xs) // [1, 4, 9]
//   );

//   console.log(
//     map(sqr) (x) // Some {x: 25}
//   );

//   console.log(
//     map(sqr) (y) // None {}
//   );



//Bonus: Make the functions take arguments that increase or decrease arbitrary amounts

// function someFunction(){
//     for(i = 0; i < arguments.length; i++)
//         alert(arguments[i]);
// }
// Javascript functions have an arguments array-like object, and it is syntactically correct to call a javascript function with any number of arguments.

// someFunction(1, 2, 'test', ['test', 'array'], 5, 0);