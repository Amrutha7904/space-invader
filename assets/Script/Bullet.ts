import { _decorator, Component, Node,director,CollisionCallback,Prefab,EventKeyboard,KeyCode } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bullet')
export class Bullet extends Component {

@property
BulletSpeed:number = 50;

onCollisionEnter(other,self){
    if(other.name == 'Player<PolygonCollider>'&& self.name == 'Bullet<BoxCollider>'){
        cc.director.preLoadScene('Game');
    }
    

}
update(deltaTime:number){
    this.node.setPosition(this.node.position.x, this.node.position.y += this.BulletSpeed*deltaTime);
    if(this.node.position.y >= +(this.node.parent.getContentSize().height)){
        this.node.destroy();
    }
}  
}

