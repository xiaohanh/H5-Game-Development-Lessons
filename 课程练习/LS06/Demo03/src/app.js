
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    redSprite:null,
    speed:0,
    num:0,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.winSize;

        this.addChild(new cc.LayerColor(cc.color.WHITE));
        this.redSprite = new cc.Sprite(res.Red_png);
        this.redSprite.x = size.width/2;
        this.redSprite.y = 400;
        //this.redSprite.setAnchorPoint(cc.p(0.5,0.5));
        this.addChild(this.redSprite);
        this.redSprite.setLocalZOrder(3);//设置Z轴顺序

        //this.scheduleUpdate();
        this.schedule(this.myCallBack,0.02,cc.REPEAT_FOREVER,0);
        return true;
    },
    update:function(dt){
        cc.log("Timer"+dt);
        this.num++;
        if(this.num > 1000){this.unscheduleUpdate()}
    },
    myCallBack:function(dt){
        /*
        this.redSprite.x += 1;
        this.redSprite.y += 1;
        if(this.redSprite.x > 300){
            this.unschedule(this.myCallBack);
        }
        */
        this.redSprite.y -= this.speed;
        if(this.redSprite.y < 0){
            // cc.log(-this.speed);
            this.speed = -12.6;
            // this.speed = -this.speed;
        }else{
            this.speed += 0.2;
            //this.speed += 10*dt;
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});


