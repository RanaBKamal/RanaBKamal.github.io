function Animator(element) {
	this.el = element;
	var that = this;
	var style = window.getComputedStyle(element);
	var cssProperty = "margin-left";
	this.animate = function(cssProperty, value, duration) {
		var style = window.getComputedStyle(element);
		var initial = style.getPropertyValue(cssProperty);
		initial = parseInt(initial);
		var step = (value - initial) / (duration / 50);
		var counter = 0;
		var intervalId = setInterval(function() {
			counter++;
			var current = step * counter;
			element.style[cssProperty] = initial + current + 'px';
			if (counter >= duration/50)
				clearInterval(intervalId);
		}, 50);
	}
	this.stopAnimation = function(cssProperty, value, intervalId){
		var style = window.getComputedStyle(element);
		var initial = parseInt(style.getPropertyValue(cssProperty));
		clearInterval(intervalId);
	}
	this.finishAnimation = function(cssProperty, value, intervalId) {
		clearInterval(intervalId);
		var initial = parseInt(style.getPropertyValue(cssProperty));
		this.animate(cssProperty, value, 400);
	}
}