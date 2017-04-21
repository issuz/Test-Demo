const threshold = 50; //滚动50px后出现按钮

function GoTop(id){
    this.button = document.getElementById(id);

    var timer = null;
    var self = this;

    this.button.onclick = function () {
        // window.scrollTo(0,0);
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn(){
            var oTop = document.body.scrollTop || document.documentElement.scrollTop;

            if(oTop > 0){
                document.body.scrollTop = document.documentElement.scrollTop = oTop - 6;
                timer = requestAnimationFrame(fn);
            }else{
                cancelAnimationFrame(timer);
            }
        });
    };

    window.onscroll = function (evt) {
        self.update();
    };

    this.update();
}
    
GoTop.prototype.update = function () {
    if(window.scrollY > threshold){
        this.button.className = 'scroll';
    }else{
        this.button.className = '';
    }
};



