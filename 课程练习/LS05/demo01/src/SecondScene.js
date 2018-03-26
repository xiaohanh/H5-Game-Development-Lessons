    var SecondLayer = cc.Layer.extend({

    ctor:function () {

        this._super();
        var size = cc.winSize;
        var bb= new cc.Sprite(res.bg1_jpg);
        bb.x=size.width/2;
        bb.y=size.height/2;
        this.addChild(bb);


        var aa= new cc.Sprite(res.p1_png);
        aa.x=size.width/2;
        aa.y=size.height/2;
        this.addChild(aa);
        aa.setAnchorPoint(1,0.5);
       aa.runAction(cc.rotateBy(1,90).repeatForever());


        return true;
    }
});



var SecondScene = cc.Scene.extend({
    onEnter:function () {

        this._super();
        //添加到层
        var layer = new SecondLayer();
        //层添加到场景
        this.addChild(layer);
    }
});