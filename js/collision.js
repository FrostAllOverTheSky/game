//1 大鱼碰到食物
function momFruitsCollison(){
//1.1 创建循环获取所有食物
	for(let i=0;i<fruit.num;i++){
		//1.2 当前食物是活动状态
			if(fruit.alive[i]){
				//1.3 计算大鱼和当前食物距离
				let l=calLength2(
					fruit.x[i],fruit.y[i],mom.x,mom.y
				);
				//1.4 当前食物false.	
				if(l<900){
					if(fruit.fruitType[i]=="orange"){
						if(mom.hp==7){
							mom.hp=7;
							fruit.deal(i);
						}else{
						mom.hp+=1;
						fruit.deal(i);
						}
					}else{
						if(mom.hp>=1){
                            fruit.deal(i);
                            mom.hp-=1;
						}else return;

					}
                    wave.born(fruit.x[i],fruit.y[i]);
                    if(mom.hp<=0){
                        data.gameOver=true;
						
                    }
				}
			}
	}
}
//海藻碰到zidan
function aneFruitsCollison(){
//1.1 创建循环获取所有食物
for(let a=0;a<zidan.num;a++){
	for(let i=0;i<ane.num;i++){							
				//1.4 当前食物false.	
	if(zidan.x[a]-ane.headx[i]>=-20&&zidan.x[a]-ane.headx[i]<=10&&zidan.y[a]>(ane.len[i])){
					data.score-=10;
					zidan.deal2(a);
					ane.len[i]+=10;
					ane.amp[i]-=5;
					if(ane.hu[i]>10){
						ane.hu[i]-=10;
					}else{
						ane.hu[i]=0;
					}
					ane.xie[i]=true;
        			halo.born(ane.headx[i],(ane.len[i]));
				}
		}
	}
}
//2 小鱼碰到食物