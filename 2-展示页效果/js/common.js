window.onload =function(){
	var wrap = document.getElementById('wrap');
	var aImg = wrap.getElementsByTagName('img');
	var now = 3;	//当前值
	var target;		//点击目标值
	var onOff = true;	//解决多次点击的问题
	
	setTimeout(function(){
		tab(now)
	},700);
	//0 1 2  3  4 5 6
	//2 3 4  5  6 0 1
	//5 6 0  1  2 3 4
	
	for(var i=0;i<aImg.length;i++){
		aImg[i].index = i;
		aImg[i].onclick = function(){
			if(!onOff){
				return
			}
			onOff = false;
			target = this.index;
			if(target > now){
				if(target - now <= 3){
					goNext();
				}else{
					goPrev();
				}
			}else{
				if(target +7 - now <= 3){
					goNext();
				}else{
					goPrev();
				}
			}
		}
	}
	//调用函数使图片往下一张切换
	function goNext(){
		now++;
		
		if(now > 6){
			now = 0;
		}
		
		tab(now);
		
		if(target == now){ //运动完成
			onOff = true;
			return
		}
		setTimeout(goNext,700);
		
	}
	//调用函数使图片往上一张切换
	function goPrev(){
		now--;
		
		if(now < 0){
			now = 6;
		}
		
		tab(now);
		
		if(target == now){ //运动完成
			onOff = true;
			return
		}
		setTimeout(goPrev,700);
		
	}
	//根据传入的n值，图片位置移动
	function tab(n){
		for(var i=0;i<3;i++){
			var Left = n - 1 - i;
			if(Left < 0){
				Left = Left + 7;
			}
			aImg[Left].style.transform = 'translateX('+(-150*(i+1))+'px) translateZ('+(200-i*100)+'px) rotateY(30deg)';
			
			var Right = n + 1 + i;
			if(Right > 6){
				Right = Right - 7;
			}
			aImg[Right].style.transform = 'translateX('+(150*(i+1))+'px) translateZ('+(200-i*100)+'px) rotateY(-30deg)';
		}
		aImg[n].style.transform = 'translateZ(300px)';
	}
}