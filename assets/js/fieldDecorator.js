(function($) {

    $.fn.checkboxDecorator= function(data) {

        return this.each( function() {
            $(this).hide();
            var field = $(this);
            var imgOn = document.createElement("img");

            $(imgOn).attr('src', data.srcOff);
            $(this).addClass('field-decorator-off');

            $(imgOn).css({'cursor' : 'pointer'})

            $(imgOn).bind('click', function(){
                if($(this).hasClass('field-decorator-on')){

                    $(this).removeClass('field-decorator-on');
                    $(this).addClass('field-decorator-off');
                    field.attr('checked',false);
                    $(this).attr('src', data.srcOff);


                }
                else{
                    $(this).removeClass('field-decorator-off');
                    $(this).addClass('field-decorator-on');
                    field.attr('checked',true);
                    $(this).attr('src', data.srcOn);


                }
            });

            $(imgOn).insertAfter($(this));

        });

    }

}(jQuery));