(function($) {
    $.fn.sequence = function() {
        var content = this.text();

        var contentArray = content.split(", ");
            current = 1,
            elem = this;
        this.text(contentArray[0]);
        setInterval(function() {
            if (current < contentArray.length) {

                elem.html("<p style='display:none'>" + contentArray[current++] + "</p>");
                elem.children('p').fadeIn();
            }
        }, 2000);
    };
})(jQuery);