//1:创建海葵类 aneObj
let aneObj=function(){
	this.x=[]; //海葵的位置x
	this.len=[];  //海葵的len高度
    this.headx = [];
	this.xie=[];
    this.amp = [];//正浮    (-1~1)
    this.alpha = 0;//正弦函数的角度。。
	this.hu=[];
}
//2:为海葵类添加属性 num 50
aneObj.prototype.num=50;
//3:为海葵类加初始方法 init
aneObj.prototype.init=function(){
	for(let i=0;i<this.num;i++){
		this.x[i]=i*16+Math.random()*20;
		this.len[i]=canheight - 220 + Math.random()*50;
        this.headx[i] = this.x[i];
        this.amp[i] = Math.random() * 50 + 50;
		this.xie[i]=false;
		this.hu[i]=150;
		
	}
}
//4:为海葵类添加绘制方法 draw
aneObj.prototype.draw=function(){
    //海葵是随着时间变化的
    this.alpha += deltaTime * 0.0008;
   	let l = Math.sin(this.alpha);
//	4.1:保存画笔的状态 画布2[海葵 食物 背景]
    ctx2.save();
	ctx2.strokeStyle="#d72adabd";//描边样式
	ctx2.globalAlpha=0.6;//透明度
	ctx2.lineCap="round";//描边顶端样式
	ctx2.lineWidth=20;//描边宽度
//	4.5:创建循环
for(let i=0;i<this.num;i++){
//		4.7:创建新路径
	ctx2.beginPath();
//	4.8:移动画布低端
	ctx2.moveTo(this.x[i],canheight);
//	4.9:画一条线
	this.headx[i]=this.x[i]+l*this.amp[i];
	ctx2.quadraticCurveTo(this.x[i],canheight-this.hu[i],this.headx[i],this.len[i]);
//	4.10:描边
	ctx2.stroke();
//	4.11:回复画笔
	this.xie[i]=false
}
ctx2.restore();
}
//5:将ane.js添加index.html
//6:main.js常见海葵类对象并调用相应方法