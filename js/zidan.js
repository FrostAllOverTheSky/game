//1:创建一个食物的类
 let zidanObj=function(){
 	this.alive=[];//保存食物状态
 	this.orange=new Image();//橙色图片
 	this.blue=new 	Image();//蓝色图片
 	this.x=[];//食物的位置 x
 	this.y=[];//食物的位置 y
 	this.l=[];//食物宽度
 	this.spd=[];//食物的生长速度
 	this.fruitType=[];//食物类型orenge blue
 	this.zindex=0;
 	this.numb=[];
 	this.change=[]; 
 } 
//2:为食物的类添加一个属性数量 1
zidanObj.prototype.num=3;
//3:为食物的类添加一个方法 init
zidanObj.prototype.init=function(){
	for(let i=0;i<this.num;i++){
		this.alive[i]=false;
		this.x[i]=0;		
		this.y[i]=0;
		this.l[i]=14;
		this.spd[i]=8;
		this.numb[i]=0.5;
		this.change[i]=1;
	}
	this.blue.src="./src/timg 1.png";
	this.orange.src="./src/fruit.png";
}
//4:为食物的类添加方法 draw
zidanObj.prototype.draw=function(){
	if(data.gameOver===true){
		return ;
	}
//	1:创建循环
	for(let i=0;i<this.num;i++){		
//	2:判断食物是否是活动状态	
		if(this.alive[i]==true){		
//	3:判断当前食物是否小鱼14
	if(this.change[i]===1){	
		zidan.jiao1(i);
	}
	if(this.change[i]===2){
		zidan.jiao2(i);
	}
	if(this.change[i]===3){	
		zidan.jiao3(i);
	}
	if(this.change[i]===4){	
		zidan.jiao4(i);
	}
	if(this.change[i]===5){	
		zidan.jiao5(i);
	}
	if(this.change[i]===6){	
		zidan.jiao6(i);
	}
	if(this.change[i]===7){	
		zidan.jiao7(i);
	}
	if(this.change[i]===8){	
		zidan.jiao8(i);
	}
//	7:绘制图片
	}
		ctx1.drawImage(this.blue,this.x[i],this.y[i],this.l[i],this.l[i]);
			if(this.y[i]>600||this.y[i]<4||this.x[i]>800||this.x[i]<1){
				this.alive[i]=false;
			}
		}	
	}

//5:创建一个函数监控画布上的食物个数 如果不够十五个活动食物
function fruitMonitor2 (){
	let num=0;	
	for(let i=0;i<zidan.num;i++){
		if(zidan.alive[i]){num++}
	}
	if(num<3){
		sendFruit2();
		return;
	}
}
//6:在所有的食物中挑选第一个不活动食物
function sendFruit2(){
	for(let i=0;i<zidan.num;i++){
		if(!zidan.alive[i]){
			let pis=Math.PI*2/8;
				if(mom.angle<=pis*2){
					if(mom.angle<=pis){
						zidan.change[i]=1;
					}else{
						zidan.change[i]=2;
					}
				}
				if(mom.angle>=pis*2&&mom.angle<=pis*4){
					if(mom.angle<=pis*3){
						zidan.change[i]=3;
					}else{
						zidan.change[i]=4;
					} 
				}
				if(mom.angle>pis*4&&mom.angle<=pis*6){				
					if(mom.angle<=pis*5){
						zidan.change[i]=5;
					}else{
						zidan.change[i]=6;
					}
				}
				if(mom.angle>pis*6&&mom.angle<=pis*8){
					if(mom.angle<=pis*7){
						zidan.change[i]=7;
					}else{
						zidan.change[i]=8;
						}
					}
//判断子弹的发射方向
//转化大旋转弧度为子弹的发射方向；
			zidan.numb[i]=(mom.angle-parseInt(mom.angle))*3;
			//出生
			zidan.born2(i);
			return;
		}	
	}
}
//7:食物出生的方法
zidanObj.prototype.born2=function(i){
////////////////////////////////////
//	7.1 随机找到海葵下标
//	7.2 获取海葵的x赋值当前食物x
	this.x[i]=mom.x;
//	7.3 计算海葵高度赋值当前食物y
	this.y[i]=mom.y;
//	7.4 当前食物状态ture
	this.alive[i]=true; 
//me每次出生时宽度为0； 
	this.l[i]=14;
} 
//8:如果食物漂浮出画布或被大鱼吃了就改变成不活动
zidanObj.prototype.deal2=function(i){
	this.alive[i]=false;
}
zidanObj.prototype.jiao1=function(i){
	this.x[i]-=this.spd[i];
	this.y[i]-=this.numb[i];
}
zidanObj.prototype.jiao2=function(i){
	this.x[i]-=this.spd[i]-this.numb[i];
	this.y[i]-=this.spd[i];
}
zidanObj.prototype.jiao3=function(i){
	this.x[i]+=this.numb[i];
	this.y[i]-=this.spd[i];	
}
zidanObj.prototype.jiao4=function(i){
	this.x[i]+=this.spd[i];
	this.y[i]-=this.spd[i]-this.numb[i];
}
zidanObj.prototype.jiao5=function(i){
	this.x[i]+=this.spd[i];
	this.y[i]+=this.numb[i];
}
zidanObj.prototype.jiao6=function(i){
	this.x[i]+=this.spd[i]-this.numb[i];
	this.y[i]+=this.spd[i];	
}
zidanObj.prototype.jiao7=function(i){
	this.x[i]-=this.numb[i];
	this.y[i]+=this.spd[i];	
}
zidanObj.prototype.jiao8=function(i){
	this.x[i]-=this.spd[i];
	this.y[i]+=this.spd[i]-this.numb[i];	
}


	//9:
//10:
