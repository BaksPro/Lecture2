class Fighter {
   constructor(name, power = 10, health = 100) {
       this.name = name;
       this.power = power;
       this.health = health;
   }

   setDamage(damage) {
       this.health -= damage;
   } 

   hit(enemy, point) {       
       let damage = point * enemy.power;
       enemy.setDamage(damage)
       console.log(`${this.name} bit ${damage} damage  to ${enemy.name}. ${enemy.name} health: ${enemy.health}`)
   } 
}
 
class ImprovedFighter extends Fighter { 
   
   doubleHit(enemy, point) {
       super.hit(enemy, point * 2)
   } 
} 
 
let fighter = new Fighter("Baks", 10, 2000);
let improvedFighter = new ImprovedFighter("Axe", 10, 2000)
  
function fight(defaultFidhter, upgradeFighter, ...points) {
    let round = 1;

    for (let point of points) {
        console.log(`_______________________Round ${round++} Start:___________________________________`)
 
        defaultFidhter.hit(upgradeFighter, point);
            if (upgradeFighter.health < 0) {
                return console.log(`${upgradeFighter.name} lose. ${defaultFidhter.name} win!!!Congratulations!`)
            }
        
        upgradeFighter.doubleHit(defaultFidhter, point);
            if (defaultFidhter.health < 0) {
                return console.log(`${upgradeFighter.name} lose. ${thdefaultFidhteris.name} win!!!Congratulations!`)
            }

       console.log(`_______________________Round ${round++} End:_____________________________________ `)
   }
}
 
 
 
 
 
 
fight(fighter, improvedFighter, 10, 10, 600)
 
 
 
 
