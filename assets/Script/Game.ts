import { _decorator, Component,Node,Prefab,EventKeyboard,CollisionEventType,instantiate,math,KeyCode,floor, director, Label, v2, macro, input, Input } from 'cc';
const { ccclass, property} = _decorator;

@ccclass('Game')
export class Game extends Component {
   
   @property({type: Prefab})
   public bulletPrefab: Prefab|null = null;

   @property({type: Prefab})
   public alienPrefab: Prefab|null = null;

   @property({type:Label})
   public scoreLabel:Label|null = null;



//   To add score
addScore(){
    this.score +=100;
    this.scoreLabel.string = "SCORE :"+this.score.toString();
}
// spwaning bullet at players position
   spwan(event){
    var newBullet = cc.instantiate(this.bulletPrefab);
    newBullet.setPosition(this.node.getChildByName('Player')?.position.x,this.node.getChildByName('Player')?.position.y);
    this.node.addChild(newBullet);

    // var SpaceBarAction = event.getLocation();
    // SpaceBarAction = newBullet.getPosition(this.node.getChildByName('Player')?.position.x,this.node.getChildByName('Player')?.position.y);
 

   }
//    creating new alien set
createAlien(){
    var newAlienShip = instantiate(this.alienPrefab);
    var position = [
        v2(78,458),v2(277,-458), v2(379,6), v2(389,5)
    ]
    var alienPosition = math.floor(Math.random()*position.length);
    newAlienShip.setPosition(position[alienPosition]);
    this.node.addChild(newAlienShip);
}
onKeyDown(event:KeyboardEvent){
    switch(event.keyCode){
        case KeyCode.SPACE:
            this.spwan();
        break;
    }
    

}
onKeyUp(event:KeyboardEvent){
    switch(event.keyCode){
        case KeyCode.SPACE:
             
                break;

    }
}

start(){

}
onLoad(){
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown,this);
    input.on(Input.EventType.KEY_UP,this.onKeyUp,this);
    this.schedule(this.createAlien(),macro.REPEAT_FOREVER,3);
}
}

