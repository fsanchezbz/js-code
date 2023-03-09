
class Cats {

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

  catJumps(){
     console.log(this.fristname + " jumps");
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