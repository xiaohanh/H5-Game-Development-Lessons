//在场景上添加一个自定义层BgLayer ,自定义层上面添加一个渐进层,自定义层上添加一个label

var BgLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var layer=new cc.LayerColor(cc.color.GREEN);

        this.addChild(layer);



        var size= cc.winSize;
        var label=new cc.LabelTTF("这是第一个场景","",50);
        label.x= size.width*0.5;
        label.y=size.height*0.7;
        this.addChild(label);
        return true;
    }
});

 var StartScene = cc.Scene.extend({
    // ctor是constructor的缩写
    ctor:function(){
        this._super();
        // cc.log("StartScene:ctor");
        // var layer = new cc.LayerColor(cc.color.YELLOW);
        var bglayer=new BgLayer();
        this.addChild(bglayer);
        // var customlayer=new cc.CustomLayer();
        // this.addChild(customlayer);
        // (cc.clor.RED,new cc.Color(255,0,0,0),cc.p(0,-1));三个参数为开始颜色，结束颜色，向量方向
        //  var gdLayer1 =new cc.LayerGradient(cc.clor.RED,new cc.Color(255,0,0,0),cc.p(0,-1));
        var gdLayer2=new cc.LayerGradient(cc.clor.RED,new cc.Color(255,0,0,0),cc.p(0,-1),
            {p:0,color:new cc.Color(0,0,0,0)},
            {p:0.5,color:new cc.Color.YELLOW},
            {p:1,color:new cc.Color.BLUE});
        this.addChild(gdlayer2);




    }


});













