// var oul = document.getElementsByClassName('box')[0];
var len = $('.box li').length -1,//6
    liWidth = $('.box>li').eq(0).width(),//500
    timer = null,
    lock = true;
var right = $('.rightBtn').eq(0);
var left = $('.leftBtn').eq(0);
var index = 0;
right.on('click',function (){
    autoMove('right->left')
})

left.on('click',function (){
    autoMove('left->right')
})

$('.wrapper').on('mousemove',function() {
    clearInterval(timer)
})

$('.wrapper').on('mouseout',function() {
    timer = setInterval(autoMove,3000)
})


function autoMove (de) {
    if(lock) {
        lock = false;
    //    clearInterval(timer)
        if(!de || de == 'left->right') {
            index++;
            $('.box').animate({left:$('.box').position().left- liWidth},function () {
                if($('.box').position().left == -len * liWidth){
                    $('.box').css('left','0')
                    index = 0;
            }      
            changeli(index)   
            lock = true;
            // timer = setInterval(autoMove,1500)
            })

        }else if (de ==  'right->left') {
            
            if($('.box').position().left == 0) {
                $('.box').css('left',-len * liWidth)
                index = 5;
               
            }
            index--
            
            console.log(index)
            $('.box').animate({left:$('.box').position().left + liWidth},function () {
                lock = true;
                
                changeli(index)
                // timer = setInterval(autoMove,1500)
            })            
        }

    }    

}

function changeli(index) {
    $('.active').removeClass('active')
    $('.anniu li').eq(index).addClass('active');
}

$('.anniu li').click(function (e) {
    index = $(this).index()
    $('.box').animate({left: -index  * liWidth})
    changeli(index)
})

timer = setInterval(autoMove,1500)
