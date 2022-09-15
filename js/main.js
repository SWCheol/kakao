//gnb에서 서브메뉴 슬라이드
$('.btn_sub').click(function(){
    $(this).find('span').toggleClass('on');
    $(this).siblings('.list_sub_wrap').slideToggle(300);
});

//gnb가 왼쪽에서 슬라이드
$('.top_left').click(function(){
    $('#gnb').animate({left: 0}, 300);
    $('.dark').css({'display':'block'});
});

//gnb 오른쪽으로 슬라이드
$('.dark').click(function(){
    $(this).css({'display':'none'});
    $('#gnb').animate({left: -304}, 300, 'swing');
    $('.login_popup').hide();
});

// login_popup
$('.login_require').click(function(){
    $('.login_popup').show();
    $('#gnb').animate({left: -304}, 300, 'swing');
});

$('.btn_close').click(function(){
    $('.login_popup').hide();
    $('.dark').css({'display':'none'});
    $('#gnb').animate({left: -304}, 300, 'swing');
});