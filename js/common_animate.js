define(function(require, exports, module) {

	require("fastclick");
	FastClick.attach(document.body);

	function _showAnim(_box) {
		var $animateDom = $(_box);
		var $element = $animateDom.find('[data-animation]');
        $element.css({
        	'-webkit-animation': 'none',
        	'display': 'none'
        });
        $element.each(function(index, element){
            var $element    = $(element),
                $animation  = $element.attr('data-animation'),
                $duration   = $element.attr('data-duration') || 500,
                $timfunc    = $element.attr('data-timing-function') || 'ease',
                $delay      = $element.attr('data-delay') ?  $element.attr('data-delay') : 0,
                $iterate    = $element.attr('data-iterate') ? $element.attr('data-iterate') : 1;
            $element.css({
				'display': 'block',
				'-webkit-animation-name': $animation,
				'-webkit-animation-duration': $duration + 'ms',
				'-webkit-animation-timing-function': 'ease',
				'-webkit-animation-timing-function': $timfunc,
				'-webkit-animation-delay': $delay + 'ms',
				'-webkit-animation-iteration-count': $iterate,
				'-webkit-animation-fill-mode': 'both'
            })
        });
        return $animateDom;
    }

    window.showAnim =_showAnim;

    require("pageResponse");

    window.onload = window.onresize = function(){
        var page = new pageResponse({
            class : 'wrap',     //模块的类名，使用class来控制页面上的模块(1个或多个)
            mode : 'auto',     // auto || contain || cover ，默认模式为auto 
            width : '640',      //输入页面的宽度，只支持输入数值，默认宽度为320px
            height : '1008'      //输入页面的高度，只支持输入数值，默认高度为504px
        })
    }
});