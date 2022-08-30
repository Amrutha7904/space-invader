import { _decorator, Component,input, Node,EventKeyboard,Input,macro,KeyCode } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerMovement')
export class PlayerMovement extends Component {
    moveLeft:number=0;
    moveRight:number=0;


   movePlayer(event: EventKeyboard){
    switch(event.keyCode){
        case macro.KEY.left:
            this.moveLeft = 1;
             break;
        case  macro.KEY.right:
            this.moveRight = 1;
            break;    
        
    }
   }
   stopPlayer(event:EventKeyboard){
    switch(event.keyCode){
        case macro.KEY.left:
            this.moveLeft = 0;
            break;
        case macro.KEY.right:
            this.moveRight = 0;
            break;    
    }
   }

   onLoad(){
    input.on(Input.EventType.KEY_DOWN, this.movePlayer, this);
    input.on(Input.EventType.KEY_UP, this.stopPlayer, this);

    // Touch Input key left and right
    this.node.parent.on('touchstart',function(event){
        if(event.getLocationX()<this.node.parent.getContentSize().width/2){
            this.moveLeft = 1;

        }
        if(event.getLoactionX()>this.node.parent.getContentSize().width/2){
            this.moveRight = 1;
        }
    },this);
    this.node.parent.on('touchend',function(event){
        this.moveRight = 0;
        this.moveLeft =0;
    }.this);

   }
    start() {

    }

    update(deltaTime : number) {
        if(this.moveLeft == 1){
            this.node.setPosition(this.node.position.x -= 300*deltaTime, this.node.position.y);
        }
        if(this.moveRight == 1){
            this.node.setPosition(this.node.position.x += 300*deltaTime, this.node.position.y);
        }
    }
    

}

