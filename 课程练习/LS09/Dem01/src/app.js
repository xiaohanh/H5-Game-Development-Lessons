
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,

    ctor:function () {
        cc.ResolutionPolicy.FIXED_HEIGHT
        this._super();

        var size = cc.winSize;

        var bg = new cc.Sprite(res.bg_jpg);
        bg.x = size.width*0.5;
        bg.y = size.height*0.5;
        this.addChild(bg);

        var sp1 = new cc.Sprite(res.spider_png);
        // sp1.setPosition(size.width*0.3,size.height*0.5);
        sp1.x = size.width*0.3;
        sp1.y = size.height*0.5;
        this.addChild(sp1);
                     // 方法一：
                // var sp2 = new cc.Sprite(res.spider_png,cc.rect(0,0,100,100),null);
                // sp2.x = size.width*0.6;
                // sp2.y = size.height*0.5;
                // //sp2.setScale(0.5);
                // this.addChild(sp2);

          // 方法二：
        cc.spriteFrameCache.addSpriteFrames(res.enemy11_plist,res.enemy11_png);
        var sp2 = new cc.Sprite("#11_L_at_00005.png");
        sp2.x = size.width*0.6;
        sp2.y = size.height*0.5;
        //sp2.setScale(0.5);
        this.addChild(sp2);
        // 方法三：
        // cc.spriteFrameCache.addSpriteFrames(res.enemy11_plist,res.enemy11_png);
        // var spriteFrame = cc.spriteFrameCache.getSpriteFrame("11_L_at_00005.png");
        // var sp2 = new cc.Sprite(spriteFrame );
        // sp2.x = size.width*0.6;
        // sp2.y = size.height*0.5;
        // //sp2.setScale(0.5);
        // this.addChild(sp2);


        var moveMenuItem = new cc.MenuItemFont("移动",function(){
            sp2.x -= 5;
            if(cc.rectContainsPoint(sp1.getBoundingBox(),sp2.getPosition())){
                cc.log("碰到了");
            }
            // 因为两个区矩形区域差不多大，很难碰到
            // if(cc.rectContainsRect(sp1.getBoundingBox(),sp2.getBoundingBox())){
            //     cc.log("碰到了");
            // }
        },this);
        var menu = new cc.Menu(moveMenuItem);
        menu.y = size.height*0.3;
        this.addChild(menu);

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
