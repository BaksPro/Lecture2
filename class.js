class Fighter{
    constructor( name, power = 10, health = 100) {
        this.name = name ;
        this.power = power;
        this.health = health;
    }
    setDamage(damage) {
        this.health -= damage ;
     
    }
    
    hit(enemy,point) {
       
        this.point = point;
        this.damage = this.point * enemy.power;
        enemy.setDamage(this.damage)
           console.log(`${enemy.name} bit ${this.damage} damage  to ${this.name}. ${this.name} health: ${enemy.health}`)
        
    }

}

class ImprovedFighter extends Fighter {
    
    
    doubleHit(enemy, point) {
        this.point = point * 2; 
        super.hit(enemy, this.point  )
    }
    
}
    

   


let fighter = new Fighter( "Baks", 10, 2000);
let improvedFighter = new ImprovedFighter("Axe", 10, 2000)





function fight(defaultFidhter,upgradeFighter,...points) {

     points.forEach((point,i) => {
        
      
         if( i % 2 !== 0) {                      
               ; 
            defaultFidhter.hit(upgradeFighter,point);
            if( upgradeFighter.health < 0) return console.log( "lose") 
            
         } else {
             
             upgradeFighter.doubleHit(defaultFidhter,point);
             if( defaultFidhter.health < 0) return  console.log( "lose");
                
         }
     }) 

     


}

fight(fighter,improvedFighter,10,50,50,60,60,67,67)


