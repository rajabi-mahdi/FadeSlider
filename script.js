$(function (){
    $(SliderOptions.sliderContainer).append("<img src="+SliderOptions.imageRoot+'/2.jpg'+" />")
    $(SliderOptions.sliderContainer).append("<img src="+SliderOptions.imageRoot+'/1.jpg'+" />")
    var style = `       
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        ${SliderOptions.sliderContainer}{
            width: 50%;
            height: 450px;
            margin: 50px auto;
            box-shadow: 2px 2px 10px #0711c9;
            position: relative;
            overflow: hidden;
        }
        @media screen and (max-width: 992px) {
            ${SliderOptions.sliderContainer}{
                width: 90%;
                height: 250px;
            }   
        }
        ${SliderOptions.sliderContainer} img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        
        `;
    if ($('style').length == 0){
        $('head').prepend(style)
    }else{
        $('style').text($('style').text() + style);
    }
    var counter = 3;
    fadeSlide()
    function fadeSlide() {
        $(SliderOptions.sliderContainer + ' img:nth-child(2)').fadeOut(2000, function () {
            $(this).remove();
          ($(SliderOptions.sliderContainer + ' img:first-child').before("<img alt='image' src="+SliderOptions.imageRoot+'/'+counter+'.jpg'+" />"))
            counter++;
            fadeSlide()
            $(SliderOptions.sliderContainer + ' img').on("error",function (){
                $(this).attr('src',SliderOptions.imageRoot+'/1.jpg')
                counter = 2;
            })

        });
    }
})
