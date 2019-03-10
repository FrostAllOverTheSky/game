               //大鱼的类,保存大于所有的数据与行为

//1:创建大鱼的类 momObj
let momObj=function(){
	this.x=0;
	this.y=0;
	this.hp=7;
	this.angle=0;  //大鱼的角度
	this.bigeye=[];   //大鱼的眼睛
	this.bigbody=[];  //大鱼的身体
	this.bigtail=[];  //大鱼的尾巴
//	常见三个变量切换大鱼尾巴的图片
 	this.bigTailSart=1;
 	this.bigTailEnd=3000;
 	this.bigTailIndex=0;
 	//	常见三个变量切换大鱼眼睛的图片
 	this.bigeyeSart=1;
 	this.bigeyeEnd=0;
 	this.bigeyeIndex=0;
}
//2:为大鱼类添加初始化方法.
momObj.prototype.init=function(){
//	2.1 初始化大鱼位置在画布中央
	this.x=canwidth*0.5;
	this.y=canheight*0.5;
//	2.2 初始化大鱼角度 0
	this.angle=0;
//	2.3 初始化大鱼眼睛
	for( let i=0;i<2;i++){
		this.bigeye[i]=new Image;
		this.bigeye[i].src="./src/bigEye"+i+".png";
	}
//	2.4 初始化大鱼身体
	for(let i=0;i<8;i++){
		this.bigbody[i]=new Image;
		this.bigbody[i].src="./src/bigSwim"+i+".png";
	}
//	2.5 初始化大鱼尾巴
for(let i=0;i<8;i++){
		this.bigtail[i]=new Image;
		this.bigtail[i].src="./src/bigTail"+i+".png";
	}
}
//3:为大鱼类添加绘制方法
momObj.prototype.draw=function(){
	if(data.gameOver===true){
		return ;
	}
	this.bigTailSart+=deltaTime;
	if(this.bigTailSart>this.bigTailEnd){
		this.bigTailIndex=(this.bigTailIndex+1)%8;
		this.bigTailSart=1;
	}
		this.bigeyeSart+=deltaTime;
	if(this.bigeyeSart>this.bigeyeEnd){
		this.bigeyeIndex=(this.bigeyeIndex+1)%2;
		this.bigeyeSart=1;
		if(this.bigeyeIndex==1){
			this.bigeyeEnd=400;
		}
		if(this.bigeyeIndex==0){
			this.bigeyeEnd=2000;
		}
	}

	this.x=lerpDistance(mx,this.x,0.9);
	this.y=lerpDistance(my,this.y,0.9);
	if(this.y>350){this.y=350}
//调整游动角度
	let deltay=my-this.y;
	let deltax=mx-this.x;
	let beta=Math.atan2(deltay,deltax)+Math.PI;	
	this.angle=lerpAngle(beta,this.angle,0.9);
//	3.1 保存画笔的状态
	ctx1.save();
//	3.2 平移原点
	ctx1.translate(this.x,this.y);
//	3.3 设置大鱼的旋转角度
	ctx1.rotate(this.angle);
//	3.4 绘制大鱼身体
	ctx1.drawImage(this.bigbody[this.hp],
		-this.bigbody[this.hp].width*0.5,
		-this.bigbody[this.hp].height*0.5
	);
//	3.6 绘制大鱼尾巴
	ctx1.drawImage(this.bigtail[this.bigTailIndex],
		-this.bigtail[this.bigTailIndex].width*0.5+30,
		-this.bigtail[this.bigTailIndex].height*0.5
	);
//	3.5 绘制大鱼眼睛
	ctx1.drawImage(this.bigeye[this.bigeyeIndex],
		-this.bigeye[this.bigeyeIndex].width*0.5,
		-this.bigeye[this.bigeyeIndex].height*0.5
	);
//	3.7 恢复画笔
	ctx1.restore();
}

//4:将mom.js添加到index.html
//5:在main.js创建对象并且调用相应方法

