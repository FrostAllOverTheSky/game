// 1:声明游戏汇总的全局函数
// 1.1 创建四个变量保存二个画布和两个画笔
let can1=null; //第一个画布
let can2=null; //第二个画布
let ctx1=null; //第一个画笔
let ctx2=null; //第二个画笔
// 1.2创建两个变量保存画布宽度和高度
let canwidth=0;
let canheight=0;
// 1.3创建一个变量保存一个背景图
let bg=null;
//1.4:创建一个变量保存海葵对象
let ane = null;
//1.5:创建一个变量保存食物对象
let fruit=null;
//1.6:创建一个变量保存大鱼的对象
let mom=null;
//1.6:创建一个变量保存子弹的对象
let zidan=null;
//1.7创建两个变量保存鼠标位置
let mx=0;
let my=0;
//1.8 创建两个变量保存上一帧执行的事件和两个帧之间的差
let lastTime=0;
let deltaTime=0;
//1.9
let baby=null;
//1.10
let data=null;
//1.11
let wave=null;
let halo=null;
// 2:常见函数game 入口函数
function game(){
        init();
        gameloop();
}
// 3:常见函数init 初始化函数
function init(){
// 3.1 初始化画笔和画笔
    can1=document.getElementById("canvas1");
    can2=document.getElementById("canvas2");
    ctx1=can1.getContext("2d");
    ctx2=can2.getContext("2d");
// 3.2 初始化画布高度和宽度
    canwidth=can1.width;
    canheight=can1.height;
// 3.3 背景图
    bg=new Image();
    bg.src="src/background.jpg";
//3.4:创建海葵的对象并且调用初始化的方法
	ane=new aneObj();
	ane.init();
//3.5:创建食物的对象并且调用初始化方法
	fruit=new fruitObj();
	fruit.init();
//	3.6:创建大鱼的对象并调用初始化方法\
 	mom=new momObj();
 	mom.init();
//3.7
	zidan=new zidanObj();
 	zidan.init();
//3.7 为画布1绑定鼠标移动的事件好人处理函数
	can1.addEventListener("mousemove",onMouseMove,false);
//3.8 初始化当前时间和两帧之间的差
	lastTime=Date.now();
 //3.9:创建小鱼对象并且调初始化方法
    baby = new babyObj();
    baby.init();
//3.10 创建分数的对象
		data=new dataObj();
//3.10------
    wave = new waveObj();
    wave.init();
    halo = new haloObj();
    halo.init();
}
// 4:常见函数gameloop 绘制游戏中个个角度
function gameloop(){
// 4.1  创建一个定时器来不停的绘制画布的内容
   requestAnimFrame(gameloop);
// 4.2 计算时间差
	let now=Date.now();
	deltaTime=now -lastTime;
	lastTime=now;
	if(deltaTime>40){deltaTime=40}
//  4.4 监控画布上的食物语的活动数量
	fruitMonitor();
	fruitMonitor2();
//4.4.1 监控画布上大鱼是否碰撞到了食物
	momFruitsCollison();
	aneFruitsCollison();
//  4.5绘制背景图
    drawBackground();
//4.5.1清除画布上的所有内容
	ctx1.clearRect(0,0,canwidth,canheight);
//  4.6:绘制海葵
	ane.draw();
//4.7:绘制食物
	fruit.draw();
//4.8:绘制大鱼
	mom.draw();
	//4.9
	zidan.draw();
	//4.9:绘制小鱼
   baby.draw();
	//4.10 绘制分数
		data.draw();
	//4.10
    wave.draw();
    halo.draw();
}
// 5:当前页面加载成功后调用game函数
document.body.onload=game;
function onMouseMove(e){
	if(e.offsetX||e.layerX){
		mx=e.offsetX==undefined?e.layerX:e.offsetX;
	}
	if(e.offsetY||e.layerY){
		my=e.offsetY==undefined?e.layerY:e.offsetY;
	}
}
