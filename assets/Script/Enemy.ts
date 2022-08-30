import { _decorator, Component, Node,CollisionCallback,director} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Enemy')
export class Enemy extends Component {
//     @property
//     private enemyspeed: number = 10;
onCollisionEnter(other,self){
if(other.tag == 2){
    this.node.destroy();
}
if(self.name == 1){
    cc.director.loadScene('Game');
    this.node.parent?.getComponent('Game').addScore();
}
         
}
//  collision manager is enebled  
onLoad(){
    
   

    var manager = cc.director.getCollisionManager();
    manager.enabled = true;



    cc.director.preloadScene("Game");
}
start(){

}
// run time alien moving downward code
update(deltaTime:number){
    this.node.setPosition(this.node.position.x, this.node.position.y -= 100*deltaTime);
  
}
}