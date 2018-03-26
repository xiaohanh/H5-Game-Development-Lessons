
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        var sp1 = new cc.Sprite(res.Page_png,cc.rect(0,0,200,200));
        sp1.x = size.width/2;
        sp1.y = size.height/2;
        this.addChild(sp1);

        // sp1.setAnchorPoint(1,0.5);
        // sp1.setAnchorPoint(0,0);
        sp1.setAnchorPoint(1,1);

        sp1.runAction(cc.repeatForever(cc.rotateBy(5,30)));

        cc.log("调试信息");
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
