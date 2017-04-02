window.onload = function(){
	var container = document.querySelector('#container');
	var list = container.querySelector('#list');
	var buttons = container.querySelector('#buttons').querySelectorAll('span');
	var prevBtn = container.querySelector('#prev');
	var nextBtn = container.querySelector('#next');
	var animated = false;	//是否动画在执行
	var num = 0;			//当前按钮index
	var timer;				//定时器
	
	//移动动画函数
	function doMove(obj,attr,dir,target,endFn){
        dir =  parseInt(getStyle(obj,attr)) < target ? dir : -dir;
        clearInterval(obj.timer);
        
        obj.timer = setInterval(function(){
            var moveX = parseInt(getStyle(obj,attr)) + dir;
            if(moveX > target && dir>0 || moveX<target && dir<0){
                moveX = target;
            }
            obj.style[attr] = moveX + "px";
            if(moveX == target){
                clearInterval(obj.timer);
                endFn && endFn();//if(endFn){endFn();}
            }
        },30)
    }
	//获取样式
	function getStyle(obj,attr){
        return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
    }
	

	function picAnimate(){
		var target = -600*(num+1);
		animated = true;
		doMove(list,'left',15,target,function(){
			animated = false;
			if (list.offsetLeft < -3000) {
				list.style.left = -600 + 'px';
			}
			if (list.offsetLeft > -600) {
				list.style.left = -3000 + 'px';
			}
		});
	}
	//下一个按钮
	nextBtn.onclick = function(){
		if(!animated){

			num++;
			picAnimate();
			num %= buttons.length;
			btnFn();
		}
	}
	//上一个按钮
	prevBtn.onclick = function(){
		if(!animated){
			num--;
			
			picAnimate();
			if(num==-1){
				num = buttons.length-1;
			}
			btnFn();
		}
	}
	
	//圆点按钮
	function btnFn(){
		for (var i = 0; i < buttons.length; i++) {
		buttons[i].className = '';
		}
		buttons[num].className = 'on';
	}
	for(var i=0;i<buttons.length;i++){
		buttons[i].index = i;
		buttons[i].onclick = function(){
			var now = num;
			if(!animated){
				num = this.index;
				btnFn();
				picAnimate();
			}
		}
	}
	//幻灯片播放
	function tabFn(){
		clearInterval(timer);
		timer = setInterval(function(){
			
			nextBtn.onclick();

		},2000);
	}
	tabFn();
	
	container.onmouseover = function(){
		clearInterval(timer);
	}
	container.onmouseout = tabFn;
	
}




