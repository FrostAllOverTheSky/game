//baby.js
//保存小鱼所有数据与行为  9:25
//1:创建小鱼类 babyObj [?]
var babyObj = function(){
    //1.1:创建变量保存小鱼坐标和角度
    this.x;
    this.y;
    this.angle;
    this.hp=2;
    //1.2:创建三个变量[]保存小鱼眼睛身体尾巴
    this.babyEye = [];
    this.babyBody = [];
    this.babyTail = [];
    //1.3:创建九个变量计算小鱼图片切换 眼睛 身体 尾巴
    this.babyEyeStart = 1;
    this.babyEyeEnd = 2000;
    this.babyEyeIndex = 0;
    this.babyTailStart = 1;
    this.babyTailEnd = 100;
    this.babyTailIndex = 0;
}
//2:为小鱼类添加初始化方法
babyObj.prototype.init = function(){
    //2.1:初始化小鱼宝宝在屏幕中央
    //2.2:初始化小鱼宝宝角度0
    this.x = canwidth * 0.5;
    this.y = canheight * 0.5;
    this.angle = 0;
    //2.3:初始化小鱼眼睛二张图片
    for(var i=0;i<2;i++){
        this.babyEye[i] = new Image();
        this.babyEye[i].src = "./src/babyEye"+i+".png";
    }
    //2.4:初始化小鱼身体二十张图片
    for(var i=0;i<20;i++){
       this.babyBody[i] = new Image();
       this.babyBody[i].src = "./src/babyFade"+i+".png";
    }
    //2.5:初始化小鱼尾巴八张图片
    for(var i=0;i<8;i++){
        this.babyTail[i] = new Image();
        this.babyTail[i].src = "./src/babyTail"+i+".png";
    }
    //console.log(this.babyEye);
    //console.log(this.babyBody);
    ///console.log(this.babyTail);
}
//3:为小鱼类添加绘制方法
babyObj.prototype.draw = function(){
	if(data.gameOver===true){
		return ;
	}
    //1:小鱼面向大鱼慢慢游动
    this.x = lerpDistance(mom.x,this.x,0.98);
    this.y = lerpDistance(mom.y,this.y,0.99);
    //2:小鱼游动角度向大鱼靠近
    //(1)坐标差
    var deltaX = mom.x - this.x;
    var deltaY = mom.y - this.y;
    //(2)角度差
    var beta = Math.atan2(deltaY,deltaX)+Math.PI;
    //(3)新角度
    this.angle = lerpAngle(beta,this.angle,0.9);

    //3:计算时间切换眼睛图片
    this.babyEyeStart+=deltaTime;
    if(this.babyEyeStart > this.babyEyeEnd){
       this.babyEyeIndex = (this.babyEyeIndex+1)%2;
       this.babyEyeStart = 1;

       if(this.babyEyeIndex == 0){
           this.babyEyeEnd = 3000;
       }
       if(this.babyEyeIndex == 1){
            this.babyEyeEnd = 300;
       }
    }
    //4:计算时间切换身体图片
  
    //5:计算时间切换尾巴图片
    this.babyTailStart+= deltaTime;
    if(this.babyTailStart > this.babyTailEnd){
       this.babyTailIndex = (this.babyTailIndex+1)%8;
       this.babyTailStart = 1;
    }
    //10:保存画笔1状态
    ctx1.save();
    //11:平移圆点到小鱼坐标
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    //W12:绘制小鱼身体
    ctx1.drawImage(this.babyBody[this.hp],
    -this.babyBody[this.hp].width*0.5,
    -this.babyBody[this.hp].height*0.5);
    //13:绘制小鱼尾巴
    ctx1.drawImage(this.babyTail[this.babyTailIndex],
    -this.babyTail[this.babyTailIndex].width*0.5+23,
    -this.babyTail[this.babyTailIndex].height*0.5);
    //14:绘制小鱼眼睛
    ctx1.drawImage(this.babyEye[this.babyEyeIndex],
    -this.babyEye[this.babyEyeIndex].width*0.5,
    -this.babyEye[this.babyEyeIndex].height*0.5);
    //15:恢复画笔1状态
    ctx1.restore();
}
//4:将baby.js 添加index.html
//5:在main.js创建小鱼对象并且调用相应方法
//babyObj.prototype.draw = function(){}