var FirstLayer = cc.Layer.extend({

    ctor:function () {

        this._super();


        var size = cc.winSize;
       var aa= new cc.Sprite(res.One_jpg);
      aa.x=100;
      aa.y=100;
      this.addChild(aa);

        var bb= new cc.Sprite(res.One_jpg);
       bb.x=100;
       bb.y=100;
        this.addChild(bb);

        return true;
    }
});



var FirstScene = cc.Scene.extend({
    onEnter:function () {

        this._super();
        //添加到层
        var layer = new FirstLayer();
        //层添加到场景
        this.addChild(layer);
    }
});