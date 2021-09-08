
import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Scenechange
 * DateTime = Sun Sep 05 2021 17:54:26 GMT+0530 (India Standard Time)
 * Author = chandan_krishnani
 * FileBasename = Scenechange.ts
 * FileBasenameNoExtension = Scenechange
 * URL = db://assets/Typescript/Scenechange.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('Scenechange')
export class Scenechange extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    onTouchStart(touch:any,event:any)
    {
        console.log('Scene played');
        director.loadScene('Play');

    }
    onLoad()
    {
        director.preloadScene('Play');
        console.log('Scene loaded')
        this.node.on(Node.EventType.TOUCH_START,this.onTouchStart,this);

    }
    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]ss
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
