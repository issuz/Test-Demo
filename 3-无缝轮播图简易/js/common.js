window.onload = function(){
	var oDiv = document.querySelector('.box');
	var oUl = oDiv.querySelector('ul');
	var aLi =  oUl.getElementsByTagName('li');
	var leftBtn = document.querySelector('.leftBtn');
	var rightBtn = document.querySelector('.rightBtn');
	var liWidth = aLi[0].offsetWidth;
	
	oUl.innerHTML += oUl.innerHTML;
	oUl.style.width = liWidth * aLi.length + 'px';
	
	var timer;
	var speed = 5;
	
	function tabFn(){
		timer = setInterval(function(){
			oUl.style.left = oUl.offsetLeft - speed + 'px';

			if(oUl.offsetLeft < -oUl.offsetWidth/2){
				oUl.style.left = '0px';
			}else if(oUl.offsetLeft > 0){
				oUl.style.left = -oUl.offsetWidth/2 + 'px';
			}
		},40);
	}
	tabFn();
	
	oUl.onmouseover = function(){
		clearInterval(timer);
	}
	oUl.onmouseout = function(){
		tabFn();
	}
	leftBtn.onclick = function(){
		speed = -5;
	}
	rightBtn.onclick = function(){
		speed = 5;
	}
}