import { _decorator, Component,Node,Prefab,EventKeyboard,CollisionEventType,instantiate,math,KeyCode,floor, director, Label, v2, macro, input, Input } from 'cc';
const { ccclass, property} = _decorator;

@ccclass('Game')
export class Game extends Component {
   
   @property({type: Prefab})
   public BulletPrefab: Prefab|null = null;

   @property({type: Prefab})
   public AlienPrefab: Prefab|null = null;

   @property({type:Label})
   public ScoreLabel:Label|null = null;



//   To add score
addScore(){
    this.Score +=100;
    this.ScoreLabel.string = "SCORE :"+this.Score.toString();
}
// spwaning bullet at players position
   spwan(event){
    var newBullet = cc.instantiate(this.BulletPrefab);
    newBullet.setPosition(this.node.getChildByName('Player')?.position.x,this.node.getChildByName('Player')?.position.y);
    this.node.addChild(newBullet);

    // var SpaceBarAction = event.getLocation();
    // SpaceBarAction = newBullet.getPosition(this.node.getChildByName('Player')?.position.x,this.node.getChildByName('Player')?.position.y);
 

   }
//    creating new alien set
createAlien(){
    var newAlienShip = instantiate(this.AlienPrefab);
    var position = [
        v2(78,458),v2(277,-458), v2(379,6), v2(389,5)
    ]
    var AlienPosition = math.floor(Math.random()*position.length);
    newAlienShip.setPosition(position[AlienPosition]);
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

