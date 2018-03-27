//创建层
var StartLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var layer=new cc.LayerColor(cc.color.YELLOW);

        this.addChild(layer);
        var size= cc.winSize;
        var label=new cc.LabelTTF("这是第一个场景","",50);
        label.x= size.width*0.5;
        label.y=size.height*0.7;
        this.addChild(label);

        var menuItem = new cc.MenuItemFont("跳转到主游戏场景",function(){
            // cc.director.runScene(new MainScene());

             cc.director.runScene(new cc.TransitionMoveInL(2, new MainScene()));
        },this);

        menuItem.setFontSize(50);
        var menu = new cc.Menu(menuItem);
        //定义 menu位置
        menu.setPosition(0,0);

        //定义 menuItem位置
        menuItem.x=size.width*0.5;
        menuItem.y=size.height*0.3;
        this.addChild(menu);
    }
});

//创建场景
var StartScene = cc.Scene.extend({
    // ctor是constructor的缩写
    ctor:function(){
         this._super();
        // cc.log("StartScene:ctor");
        // var layer = new cc.LayerColor(cc.color.YELLOW);
        var layer=new StartLayer();
        this.addChild(layer);


    }

   //  onEnter:function(){
   //      this._super();
   //      cc.log("StartScene:onEnter");
   //      var layer=new StartLayer();
   //      this.addChild(layer);
   //  },
   //  onEnterTransitionDidFinish:function(){
   //      this._super();
   //      cc.log("StartScene:onEnterTransitionDidFinish");

   //  },
   //  onExitTransitionDidStart:function(){
   //      this._super();
   //      cc.log("StartScene: onExitTransitionDidStart");

   //  },
   //
   // onExit:function(){
   //     this._super();
   //     cc.log("StartScene: onExit");

   // }
});



