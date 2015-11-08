(function ($) {

    $.fn.smoothscroll = function (params) {

        var defaults = {
            duration: 1000,
            updateHistory: true
        };

        params = $.extend({}, defaults, params);

        return this.each(function () {

            var $link = $(this);
            var $s = null;
            var id = $link.attr('href');

            if (id.charAt(0) !== '#')
                return false;

            if (id === '#')
                $s = $('body');
            else
                $s = $(id);

            $link.click(function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: $s.offset().top
                }, params.duration);

                if (updateHistory) {
                    if (history.pushState)
                        history.pushState(null, null, id);
                    else
                        location.hash = id;
                }

            });

        });

    };


})(jQuery);
