let dataObj=function(){
	this.score=6000;
	this.gameOver=false;
	this.alpha=0;
	this.double=1;
}
dataObj.prototype.draw=function(){
    let w = can1.width;
    let h = can1.height;
	ctx1.save();
	ctx1.fillStyle="#fff";
	ctx1.font="35px Verdana";
	ctx1.textAlign="canter";
	ctx1.fillText("海怪HP:"+this.score,0,canheight-30);
    if(this.gameOver){
        //ctx1.shadowBlur = 5;
        //ctx1.shadowOffsetX = 5;
        //ctx1.shadowOffsetY = 5;
        //ctx1.shadowColor = "while";
        this.alpha += deltaTime * 0.0003;
        this.alpha = this.alpha > 1 ? 1 : this.alpha;
        ctx1.fillStyle = "rgba(255,255,255,"+this.alpha+")";
        ctx1.font = "55px Verdana";
        ctx1.fillText("GAMEOVER",w*0.3,h*0.5);
    }
	ctx1.restore();
	ctx1.save();
	ctx1.fillStyle="red";
	ctx1.fillRect(0,canheight-20,this.score/10,50);
	ctx1.restore();
}
//3 为分数添加方法addscore
dataObj.prototype.addscroe=function(){
	
}
