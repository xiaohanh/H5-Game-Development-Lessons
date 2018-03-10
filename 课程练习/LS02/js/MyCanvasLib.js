//绘制三角形方法：
//立即执行表达式，可以避免变量污染
(function () {
    CanvasRenderingContext2D.prototype.triangle = function (x1,y1,x2,y2,x3,y3) {
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.lineTo(x3,y3);
        this.closePath();
        this.stroke();
    }
})();

//绘制五边形方法
(function(){
    CanvasRenderingContext2D.prototype.pentagon = function (x1,y1,x2,y2,x3,y3,x4,y4,x5,y5){
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.lineTo(x3,y3);
        this.lineTo(x4,y4);
        this.lineTo(x5,y5);
        this.closePath();
        this.stroke();
    }

})();