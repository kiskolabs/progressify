/*  Progressify - a simpler jQuery Progress Bar
    Copyright (c) 2010 Matias Korhonen. MIT licensed. */

(function ($) {
  $.fn.extend({ 
    progressify: function (value, options) {

      var defaults = {
        maximum: 100,
        speed: 500
      };
      

      options = $.extend(defaults, options); 

      return this.each(function () {
        var o, obj, number, processed;
        o = options;
        obj = $(this);
        number;

        processed = obj.hasClass("processed_progressify");
          
        if (!value && !processed) {
          number = parseInt(obj.text(), 10);
        }
        else {
          number = value;
        }
      
        if (number <= o.maximum) {
          number = Math.round((number/o.maximum)*100);
        }
        else {
          number = 100;
        }
      
        if (processed) {
          obj.find(".progressify-inner").animate({ width: number + "%" }, o.speed);
          obj.find(".progressify-inner > span").text(number);
        }
        else {
          obj.html("<div class='progressify'><div class='progressify-inner'><span style='display:none;'>" + number + "</span></div></div>").addClass("processed_progressify");
          obj.find(".progressify-inner").animate({ width: number + "%" }, o.speed);
        }
      });
    }
  });
})(jQuery);
