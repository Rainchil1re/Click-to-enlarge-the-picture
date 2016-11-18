$.fn.extend({
    myimage:function(){
        //定义创建个，那个就是图片文字的框框。
       var myCover=document.createElement("div");
        //给那个框框个类名呗
        myCover.className="myCover";
        //获取所有figure标签
        var myFigure=$('figure');
        //each去遍历所有figure标签
               $.each(myFigure,function(i,e){
                   //当鼠标覆盖到figure标签时候执行行为
                   $(this).mouseover(function(){
                      $(this).append(myCover);
                      $('.myCover').css({
                            "-webkit-transform":"scale(2)",
                            "visibility":"visible"
                  });
                  });
                   $(this).mouseout(function(){
                       $('.myCover').css({
                           "-webkit-transform":"scale(1)",
                           "visibility":"hidden"
                       });
                   });
                   $(this).click(function(){
                       //出现cover层
                      $('body').append('<div id="lightBox"></div>')
                       $('#lightBox').fadeIn(100);
                       var that=this;
                       //获取<figure>下面的img标签
                       var myimg=this.getElementsByTagName("img")[0];
                       //获取<figure>下面的figcaption标签
                       var myimgText=this.getElementsByTagName("figcaption")[0];
                       //获取所有figure除了自己点击的那个
                       var noMe=$('figure').not($(this));
                       //隐藏除了点击之外的所有图片
                       $.each(noMe,function(i,e){
                           $(this).css({
                               "display":"none"
                           })
                       });
                       //重新设置点击图片的大小
                       $(myimg).css({
                           "width":"800px",
                           "height":"578.13px",
                       });
                       //改变点击图片的位置
                       $(this).css({
                           "position":"absolute",
                           "left":"274.5px",
                           "z-index":"104"
                       });
                       //隐藏图片文字
                       $(myimgText).css({
                           "display":"none"
                       })
                       //隐藏图片文字框
                       $('.myCover').css({
                           "display":"none"
                       });
                       //添加关闭,左右切换按钮
                       $('figure').append('<span><img src="../img/close.png" class="close"></span>' +
                           '<span><img src="../img/toNext.png" alt="" class="next"></span>' +
                           '<span><img src="../img/toPre.png" alt="" class="pre"></span>');
                       //关闭按钮事件
                       $('.close').click(function(e){
                           //阻止事件冒泡
                           e.stopPropagation();
                           //点击关闭按钮还原figure图片位置
                           $('figure').css({
                               "position":"relative",
                               "left":"0px",
                               "z-index":"1",
                               "display":"block"
                           });

                           //隐藏关闭按钮
                           $('.close').remove();
                           //显示其他图片
                           $.each(noMe,function(i,e){
                               $(e).css("display","block");
                           });
                           //重新设置点击图片的大小
                           $('figure').find('img').css({
                               "width":"320px",
                               "height":"231.250px",
                           });

                           //关闭cover层
                           $('#lightBox').remove();
                           //显示图片文字
                           $('figure').find('figcaption').css({
                               "display":"block"
                           });
                           //显示图片文字框
                           $('figure').find('.myCover').css({
                               "display":"block"
                           });
                           $('body').find('.next').css({
                               "display":"none"
                           })
                           $('body').find('.pre').css({
                               "display":"none"
                           })
                       });
                       //下一张切换事件
                       $('.next').click(function(e){
                           //阻止事件冒泡
                           e.stopPropagation();
                           //通过下一张按钮获取到父元素firure标签
                           var parent=$(this).parent().parent();
                           //当前图片消失
                           $(parent).fadeOut();
                           //下一张出现
                           $(parent).next().fadeIn();
                           //得到图片src
                           var imgSrc=parent.find('.img')[0].src;
                           //进行第一次拆分得到[1.jpg]
                           var imgNumStr=imgSrc.split("img/");
                           //进行第二次拆分得到图片序号1,2,3....
                           var myImgSrc=imgNumStr[1].split(".");
                           //console.log(myImgSrc[0])
                           if(myImgSrc[0]==6){
                               $(parent).fadeIn()
                           }
                           $(parent).next().css({
                               "position":"absolute",
                               "left":"274.5px",
                               "z-index":"104"
                           })
                           $(parent).next().find('.img').css({
                               "width":"800px",
                               "height":"578.13px",
                           });
                           $(parent).next().find('.myCover').css({
                               "display":"none"
                           });
                           $(parent).next().find('figcaption').css({
                               "display":"none"
                           })
                       });
                       //上一张
                       $('.pre').click(function(e){
                           //阻止事件冒泡
                           e.stopPropagation();
                           //通过下一张按钮获取到父元素firure标签
                           var parent=$(this).parent().parent();
                           //当前这张图片消失
                           $(parent).fadeOut();
                           //下一张出现
                           $(parent).prev().fadeIn();
                           //获取当前图片的src
                           var imgSrc=parent.find('.img')[0].src;
                           //进行第一次拆分得到[1.jpg]
                           var imgNumStr=imgSrc.split("img/");
                           //进行第二次拆分得到图片序号1,2,3....
                           var myImgSrc=imgNumStr[1].split(".");
                           //console.log(myImgSrc[0])
                           //当图片是第一张
                           if(myImgSrc[0]==1){
                              $(parent).fadeIn();
                           }
                           $(parent).next().css({
                               "position":"absolute",
                               "left":"274.5px",
                               "z-index":"104"
                           })
                           $(parent).prev().css({
                               "position":"absolute",
                               "left":"274.5px",
                               "z-index":"104"
                           })
                           $(parent).prev().find('.img').css({
                               "width":"800px",
                               "height":"578.13px",
                           });
                           $(parent).prev().find('.myCover').css({
                               "display":"none"
                           });
                           $(parent).prev().find('figcaption').css({
                               "display":"none"
                           })
                       })
                   });
               });
           }
});
$('figure').myimage()





