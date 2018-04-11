var OverSceneLayer = cc.Layer.extend({

    ctor:function () {
        this._super();

        var size = cc.winSize;
        // 添加背景
        var bg=new cc.Sprite(res.JieShuBeiJing_jpg);
        bg.x=size.width/2;
        bg.y=size.height/2;
        this.addChild(bg);
        // 添加展示框
        var kuang=new cc.Sprite(res.JieShuKuang);
        kuang.x=size.width/2;
        kuang.y=size.height/2;
        this.addChild(kuang);
        // 添加按钮
        var zailaiMenuItem=new cc.MenuItemImage(res.ZaiLaiAnNiu_png,res.ZaiLaiAnNiuB_png,function(){
            cc.director.runScene(new MainScene());

        },this);
        zailaiMenuItem.x=size.width*0.3;
        zailaiMenuItem.y=size.height*0.24;

        var zhuyeMenuItem=new cc.MenuItemImage(res.XuanYaoAnNiu_png,res.XuanYaoAnNiuB_png,function(){
            cc.director.runScene(new startScene());

        },this);
        zhuyeMenuItem.x=size.width*0.7;
        zhuyeMenuItem.y=size.height*0.24;

        var menu=new cc.Menu(zailaiMenuItem,zhuyeMenuItem);
        menu.x=0;
        menu.y=0;
        this.addChild(menu);

        // 读取并展示分数
        var scoreLabel=new cc.LabelTTF("ferger","",size.width/12);
        scoreLabel.x=size.width*0.54;
        scoreLabel.y=size.height*0.79;
        scoreLabel.setFontFillColor(cc.color.YELLOW);
        this.addChild(scoreLabel);

        var score=cc.sys.localStorage.getItem('currentScore');
        cc.log(score);
        scoreLabel.setString(score);
        scoreLabel.scale=0;
        var scaleAction=cc.scaleTo(0.5,1.0).easing((cc.easeElasticOut(0.5)));
        var seq=cc.sequence(cc.delayTime(0.2),scaleAction);
        scoreLabel.runAction(seq);
        return true;
    }
});

var OverScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new OverSceneLayer();
        this.addChild(layer);
    }
});