var OverLayer = cc.Layer.extend({
    //ctor（）构造函数只会被调用一次
    ctor: function () {
        this._super();
        var layer=new cc.LayerColor(cc.color.BLUE);
        this.addChild(layer);
        var size= cc.winSize;
        var label=new cc.LabelTTF("这是第三个场景","",50);
        label.x= size.width*0.5;
        label.y=size.height*0.7;
        this.addChild(label);

        var menuItem = new cc.MenuItemFont("跳转到开始场景",function(){
            cc.director.runScene(new StartScene());
        },this);
        menuItem.setFontSize(50);
        var menu = new cc.Menu(menuItem);
        menu.setPosition(0,0);

        menuItem.x=size.width*0.5;
        menuItem.y=size.height*0.3;
        this.addChild(menu);
    }
});


var OverScene = cc.Scene.extend({
    // ctor是constructor的缩写
    ctor:function(){
        this._super();

        var layer=new OverLayer();
        this.addChild(layer);

    }
});
