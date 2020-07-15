$(function () {
    $('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
    });
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 6,
        effect: 'fade',
        loop: true,
    });
    $('.focus').mousemove(function(e){
        var X = e.pageX;
        var Y = e.pageY;
        var top = Y  + -10 + 'px';
        var left = X  + 20 + 'px';
        var id = $(this).data('tooltip');
        $('#tip-'+id).css({
            display:"block",
            top: top,
            left: left
        });
    });
    $('.focus').mouseout (function(){
        var id = $(this).data('tooltip');
        $('#tip-'+id).css({
            display:"none"
        });
    });
    if ($(window).width() > 1024)
    {
        $('.swiper-wrapper').parallax({
            'elements': [
                {
                    'selector': '.slide-text',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': -100,
                                'multiplier': 0.1,
                                'unit': 'px',
                                'invert': true
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -450,
                                'multiplier': 0.2,
                                'unit': 'px',
                                'invert': true
                            }
                        }
                    }
                }
            ]
        });
        $('.swiper-slide').parallax({
            'elements': [
                {
                    'selector': '.swiper-slide-img',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 750,
                                'multiplier': 0.04,
                                'unit': 'px',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -100,
                                'multiplier': 0.1,
                                'unit': 'px',
                                'invert': true
                            }
                        }
                    }
                }
            ]
        });
        $('.main').parallax({
            'elements': [
                {
                    'selector': '.stroke',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 0,
                                'multiplier': 0.04,
                                'unit': 'px',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -400,
                                'multiplier': 0.2,
                                'unit': 'px',
                                'invert': true
                            }
                        }
                    }
                }
            ]
        });
    }
    $(window).resize(function(){
        if ($(window).width() <= '1024') {
            location.reload();
        }
    });
});
