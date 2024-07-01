$(function() {

    /* ========================== Slider ======================== */
        
    var slideNow = 1;
    var slideCount = $('#slidewrapper').children().length;
    var slideInterval = 3000;
    var navBtnId = 0;
    var translateWidth = 0;
    
    $(document).ready(function() {
        var switchInterval = setInterval(nextSlide, slideInterval);
    
        $('#viewport').hover(function() {
            clearInterval(switchInterval);
        }, function() {
            switchInterval = setInterval(nextSlide, slideInterval);
        });
        $('#next-btn').click(function() {
            nextSlide();
        });
        $('#prev-btn').click(function() {
            prevSlide();
        });
        $('.slide-nav-btn').click(function() {
            navBtnId = $(this).index();
            if (navBtnId + 1 != slideNow) {
                translateWidth = -$('#viewport').width() * (navBtnId);
                $('#slidewrapper').css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNow = navBtnId + 1;
            }
        });
    });
    
    function nextSlide() {
        if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
            $('#slidewrapper').css('transform', 'translate(0, 0)');
            slideNow = 1;
        } else {
            translateWidth = -$('#viewport').width() * (slideNow);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow++;
        }
    }
    
    function prevSlide() {
        if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
            translateWidth = -$('#viewport').width() * (slideCount - 1);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = slideCount;
        } else {
            translateWidth = -$('#viewport').width() * (slideNow - 2);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow--;
        }
    }

    /* ====================== Counter =================== */

    const initializeTimer = 30;
    let displayminutes;
    let displayseconds;
    let minutesToSeconds = initializeTimer * 60;
    
    $("#document").ready(function(){
        setTime = getTime();
        $(".form-timer").html(setTime[0] + ":" + setTime[1])
    });
    
    // $(".form-timer").click(function() {
        let startCountDownTimer = setInterval(function() {
            minutesToSeconds = minutesToSeconds - 1;
            let timer = getTime();

            $(".form-timer").html(timer[0] + ":" + timer[1]);
            if(minutesToSeconds == 0){
                clearInterval(startCountDownTimer);
                console.log("completed");
            }

        }, 1000)
    // });
    
    function getTime() {
        displayminutes = Math.floor(minutesToSeconds / 60);
        displayseconds = minutesToSeconds - (displayminutes * 60);
        if (displayseconds < 10) {   
            displayseconds ="0" + displayseconds;
        }
        if(displayminutes < 10) {   
            displayminutes = "0" + displayminutes;
        } 
        return [displayminutes, displayseconds];
    }

    /* ====================== Input only digits =================== */

    $('.input--phone').on('input', (e) => { e.target.value = e.target.value.replace(/[^+\d]/g, '')})

    /* ============================================================================== */
});
    
    