$(function(){
    var arr = [
                '<label style="float:left;"><img src="uiPlus/scrollImg/images/icon_1.jpg" /></label>1-这首《风的季节》原唱是徐小凤，但由梅艳芳唱来更有一种沧桑悲凉的意境。一曲唱罢，现场掌声雷动。 当',
                '<label style="float:left;"><img src="uiPlus/scrollImg/images/icon_2.png" /></label>2-这个男子无法阻挡死神对他的眷顾。据说他昏迷前对抱着自己的家强说了最后三个字：“疼，保重”这张唱片里，。',
                '<label style="float:left;"><img src="uiPlus/scrollImg/images/icon_3.png" /></label>3-伴随着《断背山》的风靡，同性恋这一群体正式走入主流视线。八卦横行的娱乐圈，这个话题也是众多粉丝，',
                '<label style="float:left;"><img src="uiPlus/scrollImg/images/icon_4.png" /></label>4-到一张又贵又慢的票，于是退了重新买，下个月信用卡账单又加了差不多1到一张又贵又慢的 ',
                '<label style="float:left;"><img src="uiPlus/scrollImg/images/icon_5.png" /></label>5-要定期重装 Windows 吗？】对很多人来说，随着使用时间的延长，Windows 的运行速度会越来越慢。有'
            ];
    var _slidershow = $("#slidershow");
    var _dtShow = _slidershow.find('.dtShow');
    _dtShow.eq(0).html( arr[0] );
    _dtShow.eq(1).html( arr[1] );

    var sliderWidth = $('.dtShow').length * $('.dtShow').outerWidth(true);
    _slidershow.css('width', sliderWidth);

    var _slideIcon = $("#slideIcon");
    var animationTime = 2000;
    var _slideLabel =  _slideIcon.find('label');

    function showAnimationIndex(index){
        setTimeout(function(){
            _slidershow.animate({
                                left: -( $('.dtShow').outerWidth(true) )
                            }, animationTime, function(){ 
                                
                                var tempArr = [];
                                tempArr[0]=arr[index];
                                // console.log( index );
                                if(index == arr.length-1){
                                    tempArr[1]=arr[0];
                                }else{
                                    tempArr[1]=arr[index+1];
                                }

                                _dtShow.eq(0).html( tempArr[0] );
                                _dtShow.eq(1).html( tempArr[1] );

                                $(this).css('left','0');
                            });

            _dtShow.eq(0).animate({
                                opacity:0
                            }, animationTime,function(){
                                $(this).css('opacity','1');
                            });

            _dtShow.eq(1).animate({
                                opacity:1
                            }, animationTime,function(){
                                $(this).css('opacity','0');
                            });


            if(index == 0){
                _slideLabel.eq(_slideLabel.length - 1).children().animate({
                        opacity: 1
                    }, animationTime);

                _slideLabel.eq(index).children().animate({
                        opacity: 0
                    }, animationTime);
            } else {
                _slideLabel.eq(index-1).children().animate({
                        opacity: 1
                    }, animationTime);
                
                _slideLabel.eq(index).children().animate({
                        opacity: 0
                    }, animationTime);
            }

            setTimeout(function(){
                index++;
                if(index == _slideLabel.length){
                    index = 0;
                }
                showAnimationIndex(index);
            },animationTime + 10);

        },1000 + 20);
    }

    function startAnimation(){
        _slideLabel.eq(0).children().css("opacity","0");
        showAnimationIndex(1);
    };
    startAnimation();
});