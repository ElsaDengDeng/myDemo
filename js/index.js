/**
 * Created by xiebin on 2017/7/24.
 */
$(function(){
    var $ww = $(window).width();
    if($ww > 1024){
        $('#index-wrap').fullpage({
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
            css3:true,
            verticalCentered:false,
            navigation:true,
            navigationTooltips:['banner','案例','团队','关于','新闻','联系'],
            afterLoad:function (link,index) {
                if( index==1){
                    $("#fp-nav ul li a span").css('background','#fff');
                    $("#fp-nav ul li .fp-tooltip ").css('color','#fff');
                }
                else{
                    $("#fp-nav ul li a span").css('background','#333');
                    $("#fp-nav ul li .fp-tooltip ").css('color','#333');
                }
            }
        });
    }

});


// afterRender:function () {
//     var $ww = $(window).width();
//     if($ww < 1024){
//         $('#index-wrap').fullpage.setAutoScrolling(false);
//     }
// }