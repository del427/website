// 站点地图


function headerEvent() {
  var headerMapBtn = $('.headerMap');
  var headerMap = $('.header-Map');
  headerMapBtn.on('mouseenter', function (e) {
    
    headerMap.slideToggle('300ms')
  });
  headerMap.on('mouseleave', function (e) {
   
    headerMap.slideToggle('300ms')
  })
}

headerEvent();


//菜单事件


function navEvent() {
  var items = $('.nav-items');
  var barImg = $('.barImg');
  var textObj = {
    '首页':'0px',
    '公司简介':'95px',
    '产品与服务':'220px',
    '客户与案列':'360px',
    '联系我们':'485px',
  }
  items.on('mouseover', over)
  function over(e) {
    var e = e || window.event;
    var text = $(e.target).text();
    var oItems = $(this.children);
    var len = oItems.length;
    for (var i = 0; i < len; i++) {
      oItems.eq(i).removeClass('acitve')
    }

    $(e.target).addClass('acitve')
   
    $('.barImg').animate({'left':textObj[text]},300,'linear')
  }
}
navEvent();


//产业交互

function industryEvent() {
  var industryItems = $('.industry-items');
  var industryItem = $('.industry-item');
  for (var i = 0; i < industryItem.length; i++) {
    $(industryItem).eq(i).on('mouseenter', function (e) {
      var e = e || window.event;
      $(document).on('mousemove', mMove);
      for (var i = 0; i < industryItem.length; i++) {
        $(industryItem).eq(i).removeClass('go');
      }
    })

    $(industryItem).eq(i).on('mouseleave', function (e) {
      for (var i = 0; i < industryItem.length; i++) {
        $(industryItem).eq(i).removeClass('come');
      }
      $(this).addClass('go');
      $(document).off('mousemove', mMove);
    })
  }

  function mMove(e) {
    var pageX = e.pageX - $(industryItems).offset().left;
    var index = null;
    if (pageX <= 291 && pageX > 0) {
      index = 0;
    } else if (pageX > 300 && pageX <= 591) {
      index = 1;
    } else if (pageX > 600 && pageX <= 891) {
      index = 2;
    } else if (pageX > 901 && pageX <= 1192) {
      index = 3;
    } else {
      return
    }
    $(industryItem).eq(index).addClass('come');
  }
}


industryEvent()

//客服广告

function serviceEvent(){
  var ConsultationBox = $('.ConsultationBox');
  var minClose = $('.minClose');
  if(minClose){
    minClose.on('click',minClick)
  }
  function minClick(e){
    if($(e.target)[0] === minClose[0]){
      ConsultationBox.slideUp('300s')
    }
  }
}

serviceEvent()



// 返回顶部
var upBtn = $('.ConsultationBox-item:eq(2)');
upBtn.on('click',function (e){
  window.scroll(0,0)
})