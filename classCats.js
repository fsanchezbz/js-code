
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
  catJumps(){
     console.log(this.fristname + " jumps");
  }

};

Garfield = new Cats("Billy","Siamese","slep+++","feed+","alone++","happy +++");
pussInBoots = new Cata("Puss","ragdoll","sleep+","feed+","alone+","happy +++");

console.log(Garfield);
console.log(Garfield.fristname);

console.log(pussInBoots);
console.log(pussInBoots.fristname);