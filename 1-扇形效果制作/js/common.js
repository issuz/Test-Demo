window.onload = function(){
	var box = document.getElementById('box');
	var aDiv = box.getElementsByTagName('div');
	var onOff =true;
	setTimeout(go,300);
	
	aDiv[aDiv.length-1].onclick = function(){
		if(onOff){
			shink();
			console.log('合');
		}else{
			go();
			console.log('开');
		}
		onOff = !onOff;
	}
	//8 270 214 +56
	//7 270 231 +39
	//6 270 248 +22
	
	for(var i=0;i<aDiv.length-1;i++){
		aDiv[i].index = i;
		aDiv[i].onclick = function(){
			for(var i=0;i<aDiv.length;i++){
				if(i<this.index){
					aDiv[i].style.transform = 'rotate('+(350-(i*17)+this.index*17-80+10)+'deg)';
				}
				if(i>this.index){
					aDiv[i].style.transform = 'rotate('+(350-(i*17)+this.index*17-80-10)+'deg)';
				}
			}
			aDiv[this.index].style.transform = 'rotate('+(350-(this.index*17)+this.index*17-80)+'deg)';
			
		}
	}
	//使扇形打开
	function go(){
		for(var i=0;i<aDiv.length;i++){
			aDiv[i].style.transform = 'rotate('+(350-i*17)+'deg)';
		}
	}
	//合起来
	function shink(){
		for(var i=0;i<aDiv.length;i++){
			aDiv[i].style.transform = 'rotate(0deg)';
		}
	}
}