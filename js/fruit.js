//1:创建一个食物的类
 let fruitObj=function(){
 	this.alive=[];//保存食物状态
 	this.orange=new Image();//橙色图片
 	this.blue=new 	Image();//蓝色图片
 	this.x=[];//食物的位置 x
 	this.y=[];//食物的位置 y
 	this.l=[];//食物宽度
 	this.spd=[];//食物的生长速度
 	this.fruitType=[];//食物类型orenge blue
 }
//2:为食物的类添加一个属性数量 30
fruitObj.prototype.num=50;
//3:为食物的类添加一个方法 init
fruitObj.prototype.init=function(){
	for(let i=0;i<this.num;i++){
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.l[i]=0;
		this.spd[i]=Math.random()*0.080+0.020;
		this.fruitType[i]="";
	}
	this.blue.src="./src/blue.png";
	this.orange.src="./src/fruit.png";
}
//4:为食物的类添加方法 draw
fruitObj.prototype.draw=function(){
	let  pic ="";
//	1:创建循环
	for(let i=0;i<this.num;i++){
//	2:判断食物是否是活动状态
		if(this.alive[i]==true){
//	3:判断当前食物是否小鱼14
			if(this.l[i]<14){
//	4:当前食物的宽度增加
				this.l[i]+=this.spd[i]*10;				
			}else{
//	5:如果当前食物宽度大于14
				this.y[i]-=this.spd[i]*40;
			}
//	6:当前食物类型
			if(this.fruitType[i]=="blue"){
			  	pic =this.blue;
			}else{
				pic=this.orange;
			}
//	7:绘制图片
			ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]);
//8 漂浮出画布状态改为false		
			if(this.y[i]<4){
				this.alive[i]=false;
			}
		}
	}
}
//5:创建一个函数监控画布上的食物个数 如果不够十五个活动食物
function fruitMonitor (){
	let num=0;
	for(let i=0;i<fruit.num;i++){
		if(fruit.alive[i]){num++}
	}
	if(num<25){
		sendFruit();
		return;
	}
}
//6:在所有的食物中挑选第一个不活动食物
function sendFruit(){
	for(let i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			//出生
			fruit.born(i);
			return;
		}
	}
}
//7:食物出生的方法
fruitObj.prototype.born=function(i){
//	7.1 随机找到海葵下标
	let aneId=Math.floor(Math.random()*ane.num);
//	7.2 获取海葵的x赋值当前食物x
	this.x[i]=ane.x[aneId];
//	7.3 计算海葵高度赋值当前食物y
	this.y[i]=ane.len[aneId];
//	7.4 当前食物状态ture
	this.alive[i]=true; 
//	7.5 选一个颜色
	this.fruitType[i]=Math.random()<0.99?"blue":"orange";
//me每次出生时宽度为0；
	this.l[i]=0;
} 
//8:如果食物漂浮出画布或被大鱼吃了就改变成不活动
fruitObj.prototype.deal=function(i){
	this.alive[i]=false;
}
//9:
//10:
