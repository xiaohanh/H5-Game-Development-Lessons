
var HelloWorldLayer = cc.Layer.extend({
    sprites:[],
    ctor:function () {
this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.GRAY));
        //创建精灵数据
        for(var i=0;i<3;i++){
            this.sprites[i] = new cc.Sprite("res/sprite"+(i+1)+".png");
            this.sprites[i].x = size.width*0.2;
            this.sprites[i].y = size.height*(0.3*i+0.2);
            this.addChild(this.sprites[i]);
        }
        // var action1= new cc.Place(500,size.height*(0.3*i+0.2));
        // this.sprites[0].runAction(action1);
        //即时动作(ActionInstant)练习
        // this.sprites[0].runAction(cc.place(this.sprites[0].x+50,this.sprites[0].y));
        //
        // //水平垂直旋转
        // this.sprites[1].runAction(cc.flipX(true));
        // this.sprites[1].runAction(cc.flipY(true));
        //
        // //隐藏、显示
        // this.sprites[2].runAction(cc.hide());
        // //this.sprites[2].runAction(cc.show());
        //
        // this.sprites[2].runAction(cc.callFunc(function(){
        //     this.sprites[2].runAction(cc.show());
        // },this));



        //间隔动作练习一
        // 移动－cc.moveBy(…); cc.moveTo(…);
        // 跳跃－cc.jumpBy(…); cc.jumpTo(…);
        // 旋转－cc.rotateBy(…); cc.rotateTo(…);

       //   //5秒钟移动200像素
       //  var action2=cc.moveBy(5,200,0);
       //  // this.sprites[0].runAction(action2);
       //  // this.sprites[0].runAction(cc.moveTo(5,200,0));
       //  // cc.jumpBy(…);第一个参数是动作经过的时间，第二个参数是目标位置，第三个参数是跳跃的高度，第四个参数是跳跃次数
       //  //this.sprites[0].runAction(cc.jumpBy(5,200,0));
       // // this.sprites[1].runAction(cc.jumpBy(10.0,100,0,100,2));
       //  // this.sprites[1].runAction(cc.jumpBy(10.0,cc.p(100,0),100,2));
       //   this.sprites[1].runAction(cc.jumpTo(10.0,100,100,100,2));
       //  // this.sprites[1].runAction(cc.jumpTo(10.0,cc.p(100,100),100,2));
       // // this.sprites[2].runAction(cc.rotateBy(10.0,90,0));
       //   this.sprites[2].runAction(cc.rotateBy(10.0,0,90));
       //  // this.sprites[2].runAction(cc.rotateTo(10.0,90,0));

        //
        // //间隔动作(ActionInterval)练习二 缩放 淡入淡出
        // // 缩放－cc.scaleBy(…); cc.scaleTo(…);
        // // 淡入／淡出- cc.fadeIn(); cc.fadeOut(); cc.fadeTo();
        //
        // //this.sprites[0].runAction(cc.scaleBy(2.0,0.5));
        // //this.sprites[0].runAction(cc.scaleBy(2.0,0.8,0.5));
        // this.sprites[0].runAction(cc.scaleTo(2.0,1.2,1.2));
        //
        // this.sprites[1].runAction(cc.fadeOut(2.0));
        // this.sprites[2].setOpacity(0);
        // this.sprites[2].runAction(cc.fadeIn(5.0));
        //
        // var directorPauseItem,directorResumeItem;
        // directorPauseItem = new cc.MenuItemFont("pause",function () {
        //     cc.director.pause();
        // },this);
        // directorResumeItem = new cc.MenuItemFont("resume",function () {
        //     cc.director.resume();
        // },this);
        //
        // var menu = new cc.Menu(directorPauseItem,directorResumeItem);
        // menu.y = size.height*0.5;
        // menu.alignItemsHorizontallyWithPadding(50);
        // this.addChild(menu);


//间隔动作(ActionInterval)练习三 闪烁 进度条 颜色
        //this.sprites[0].runAction(cc.blink(20.0,10));
        // // this.sprites[0].runAction(cc.speed(cc.blink(20.0,10),5));//5倍速
        // var timer = new cc.ProgressTimer(this.sprites[1]);
        // timer.x = this.sprites[1].x+100;
        // timer.y = this.sprites[1].y;
        // this.addChild(timer);
        // //timer.type = cc.ProgressTimer.TYPE_RADIAL;
        // timer.type = cc.ProgressTimer.TYPE_BAR;
        // timer.midPoint = cc.p(0,0);//控制变化起始点
        // timer.barChangeRate = cc.p(0, 1);//控制x和y方向的变化率
        // timer.runAction(cc.progressFromTo(5.0,0,90));
        // timer.runAction(cc.progressTo(5.0,50));

        // this.sprites[2].runAction(cc.tintTo(5.0,128,0,0));
        //this.sprites[2].runAction(cc.tintBy(5.0,128,128,128));

        //变速 speed 与 ease
        // this.sprites[1].runAction(cc.speed(cc.moveBy(20,300,0),5));//5倍速
        //
        // var tempAct = cc.moveBy(5.0,200,0);
        // var tempEaseAction = tempAct.easing(cc.easeElasticInOut());//cc.easeBackIn();
        // this.sprites[2].runAction(tempEaseAction);

        //使用节点的 暂停 继续 停止 等方法来控制节点动作
        //  var MenuItemNode1,MenuItemNode2;
        //  var aa=false;
        // MenuItemNode1 = new cc.MenuItemFont("Node1",function(){
        //     if(!aa){
        //         this.sprites[0].pause();
        //         aa=!aa;
        //         cc.log("pause sprites[0]");
        //     }else{
        //         this.sprites[0].resume();
        //        aa=!aa;
        //         cc.log("resume sprites[0]");
        //     }
        // },this);
        //
        // MenuItemNode2= new cc.MenuItemFont("Node2",function () {
        //     // this.sprites[1].stopAction();//需要传对应的action对象
        //     // this.sprites[1].stopActinByTag(tag);
        //     this.sprites[1].stopAllActions();
        // },this);
        //
        // var menu = new cc.Menu(  MenuItemNode1 ,  MenuItemNode2);
        // menu.y = size.height*0.5;
        // menu.alignItemsHorizontallyWithPadding(50);
        // this.addChild(menu);


        // 组合动作u
        // 顺序执行－cc.sequence(action1,action2,…);
        // 同步执行－cc.spawn(action1,action2,…);
        // 重复执行－cc.repeat(…); cc.repeatForever(…); action.repeat(...) ;
        // 延迟执行－cc.delayTime(dt);
        // 反向执行－cc.reverse(…);

        var mAction = cc.moveBy(5,200,0);
        var rAction = cc.rotateBy(5,90);
        var jAction=cc.jumpBy(10.0,cc.p(100,0),100,2);
        var scAction=cc.scaleBy(2.0,0.5);

        //1.顺序执行
       // var sAction = cc.sequence( mAction, rAction,jAction,scAction);
        //this.sprites[0].runAction( sAction);
        this.sprites[0].runAction(cc.sequence(mAction,cc.callFunc(function(){
            cc.log("action1 执行完毕");
        },this)));

        //2.同步执行 注意不要用spawn和callFunc组合
        var action3 = cc.moveBy(2.0,200,0);
        var action4 = cc.rotateBy(2.0,-90);
        this.sprites[1].runAction(cc.spawn(action3,action4));
        //3.重复执行
        var action5 = cc.rotateBy(1.0,-90);
        //this.sprites[2].runAction(cc.repeat(action5,5));
        this.sprites[2].runAction(cc.repeatForever(action5));
        //4.延迟执行
        this.sprites[0].runAction(cc.sequence(cc.delayTime(5.0),cc.rotateBy(5.0,180),cc.callFunc(function(){
            cc.log("action1 执行完毕");
        },this)));
        //5.反向执行
        var action6 = cc.moveBy(2.0,200,0);
        var action7 = action6.reverse();
        this.sprites[2].runAction(cc.sequence(action6,action7));

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

