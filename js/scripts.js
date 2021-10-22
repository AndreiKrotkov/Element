$( document ).ready(function() {
    //Menu
    $('.js_menu').on('click', function(e){
        var body = $('body'),
            menu_active = body.hasClass('menu-open');

        if(!menu_active) {
            body.addClass('menu-open');
        } else {
            body.removeClass('menu-open');
        }
    });

    var windowWidth = document.documentElement.clientWidth;
    // Закрытие меню при клике не на элементе
    $(document).on('click', function(e) {
        if(windowWidth < 1200) {
            if (!$(e.target).closest(".js-navig").length && !$(e.target).closest(".js_menu").length) {
                console.log('yes')
                $('.menu-open').removeClass('menu-open');
                $('.js-menu-categories-desc').hide(300);
            }
        }
        e.stopPropagation();
    });



    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 71
        }, 400);
        return false;
    });

    $('.menu__link').on('click', function () {
        var body = $('body'),
            menu_active = body.hasClass('menu-open');
        if(menu_active) {
            body.removeClass('menu-open');
        }
    })
    $('.btn').on('click', function () {
        var body = $('body'),
            menu_active = body.hasClass('menu-open');
        if(menu_active) {
            body.removeClass('menu-open');
        }
    })

    // Валидация формы Регистрации
    let $formReg = $('#formReg');
    let $formInputName = $formReg.find('input[name=firstName]');
    let $formInputEmail = $formReg.find('input[name=email]');

    $formReg.submit(function(e) {
        e.preventDefault();
        let $form = $(this);
        let checkFormValid;

        $formInputName.val().length < 2 ? $formInputName.closest('.wrp__input-form').addClass('error-inp') : $formInputName.closest('.wrp__input-form').removeClass('error-inp');
        $formInputEmail.val().length < 3 ? $formInputEmail.closest('.wrp__input-form').addClass('error-inp') : $formInputEmail.closest('.wrp__input-form').removeClass('error-inp');

        checkFormValid = $formReg.find('.wrp__input-form').hasClass('error-inp');

        console.log(checkFormValid);
        if(!checkFormValid) {
            console.log('все хорошо')
            $form.serialize()
        } else {
            console.log('все плохо')
            checkFormValid = false;
        }
    });

});


