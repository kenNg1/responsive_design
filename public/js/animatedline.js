		// start of scrollMagic

function pathPrepare ($el) {
	var lineLength = $el[0].getTotalLength();
	$el.css("stroke-dasharray", lineLength);
	$el.css("stroke-dashoffset", lineLength);
	ts_o_height = 1174;
	ts_n_height = ($('div.ts').height());
	factor = ts_n_height/ts_o_height;
}

var $word = $("path#word");
var $dot = $("path#dot");

// prepare SVG
pathPrepare($word);
pathPrepare($dot);

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = new TimelineMax()
	.add(TweenMax.to($word, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
	.add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
	.add(TweenMax.to("path", 1, {stroke: "rgb(235, 255, 0)", ease:Linear.easeNone}), 0);			// change color during the whole thing

//build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: ts_o_height * factor, offset: 0, tweenChanges: false})
				.setTween(tween)
				// .addIndicators() // add indicators (requires plugin)
				.addTo(controller);

scene.on("start", function (event) {
    console.log("Hit start point of scene.");
});

window.onresize = function(){
	pathPrepare($word);
	pathPrepare($dot);
	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($word, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
		.add(TweenMax.to("path", 1, {stroke: "rgb(235, 255, 0)", ease:Linear.easeNone}), 0);			// change color during the whole thing

	//build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: ts_o_height * factor, offset: 0, tweenChanges: false})
					.setTween(tween)
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	scene.on("start", function (event) {
	    console.log("Hit start point of scene.");
	});
};
