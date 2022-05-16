(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"FORTNITE EXPERIENCE5_atlas_", frames: [[1554,1517,82,82],[1554,1601,164,40],[1810,1379,206,68],[1810,1225,152,152],[1401,1225,178,178],[1581,1225,151,151],[1401,1517,151,151],[1401,1405,407,58],[1401,1082,523,141],[0,1082,1399,802],[1401,1465,470,50],[0,0,1920,1080]]}
];


// symbols:



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["FORTNITE EXPERIENCE5_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["FORTNITE EXPERIENCE5_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["FORTNITE EXPERIENCE5_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = ss["FORTNITE EXPERIENCE5_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.spriteSheet = ss["FORTNITE EXPERIENCE5_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["FORTNITE EXPERIENCE5_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = ss["FORTNITE EXPERIENCE5_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["FORTNITE EXPERIENCE5_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["FORTNITE EXPERIENCE5_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["FORTNITE EXPERIENCE5_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["FORTNITE EXPERIENCE5_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.EditableFORTNITECHALLENGERecreaUsa = function() {
	this.spriteSheet = ss["FORTNITE EXPERIENCE5_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_Video = function(options) {
	this._element = new $.an.Video(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-203.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.5,-29,407,58);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("EhR1A89MAAAh55MCjrAAAMAAAB55g");
	this.shape.setTransform(523.8,390.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0,0,1047.5,780.1), null);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF004F").s().p("AAXHHIgIAAIgBAAIgHAAIgBAAIgIAAIgBAAIgLAAIgBAAIgHAAIAAAAIgIAAIgdgDQg+gIgwgVQgygUgogdQgqgcghgkQgigkgZgsQgagsgQg1QgRg0gDhDIAAgBIAAgUIAAgBIAAgFIAAgBIAAgJQAFhBARg0QASg0AagrQAbgrAhgjQAigkApgcQAkgYApgSIAOgGQAQgFAPgFQAmgMAsgFIAZgCIAIAAIAAgBIAIAAIABAAIAQAAIABAAIALAAIABAAQABACAFgBIABAAQBAAEA0ASQA0ASAqAaQArAbAkAiQAjAiAcAqQAcAqASAyQATAzAIA9IABAJIAAAGIAAAAIAAAHIAAAAIABAHIAAAAIAAAIIAAACIAAASIAAABIAAAKIAAABIgBAAIAAAGIAAABIAAAQQgHA/gTAyQgUAygbAqQgbAqgjAjQgkAhgrAcQgqAag0ATQgyARhCAFIAAAAIgGAAIAAAAIgBAAgAjwBiQgBAyACAwQACAJAIACIABAAQA0ABA2gBQAJgCABgJIABAAIABhhIgBiJIgBgBQgBgJgJgBIAAgBIhrAAIAAABIAAAAQgHACgDAGIAAAAIAAABIgBAAIAACKgAhNB4QAAATABASQABAMAKACIABAAQApABAoAAIABAAIAbAAIAAgBICLAAQAdgBAEgaIAAAAQABgGgBgDIAAgBQgEgOgJgIQAZgHgBgeQgBgKgGgIIgLgLQAKgGAJgIQAHgFABgLQADgUgMgLIgPgNQAZgJAAghQAAghgegEIAAAAIgHgBIAAAAIgYAAIgBAAIgXAAIAAABQggAAgfACQgNAAgBgKQAUgiAKgsQABgGAAgJIABAAQABgHgCgFQgBgtgagUQgEgDgGgBQgegEgIAZIAAANIAAABIAAAAIAAANIAAABIAAALIAAABIgBAAIAAAKIAAABQgDAHgFAFQghAigeAoQgcApgIA+IAAAJIAAABIgBAAIAACKg");
	this.shape.setTransform(45.6,45.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjiD5IgBgBQgJgBgBgJQgCgwAAgyIABiLIABAAIAAgBIAAAAQADgGAHgCIAAAAIAAgBIBrABIAAAAQAJACABAIIABABIABCKIgBBhIgBAAQgCAJgIACIg2AAIg0AAgAg+DVIgBAAQgKgDgBgMQgBgRAAgTIAAiLIABAAIAAgBIAAgJQAHg9AdgpQAdgoAigjQAFgEADgHIAAgBIAAgKIABAAIAAgBIAAgMIAAgBIAAgMIAAAAIAAgBIAAgOQAHgZAfAFQAFABAFADQAaAUABAtQABAFgBAHIAAAAQAAAIgBAHQgKAsgUAiQABAKAMgBQAggBAgAAIAAgBIAXAAIABAAIAYAAIAAAAIAHAAIAAABQAdAEABAhQAAAggZAJIAPAMQAMALgDAWQgBALgHAFQgJAIgLAFIAMAMQAGAHAAALQABAegYAGQAJAIADAPIAAAAQACAEgBAGIgBAAQgDAagdABIiLAAIAAAAIgbABIgBAAIgUAAIg9gBg");
	this.shape_1.setTransform(45.4,41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(0,0,91.1,91.1), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00D1D4").s().p("AAXHHIgIAAIgBAAIgHAAIgBAAIgIAAIgBAAIgLAAIgBAAIgHAAIAAAAIgIAAIgdgDQg+gIgwgVQgygUgogdQgqgcghgkQgigkgZgsQgagsgQg1QgRg0gDhDIAAgBIAAgUIAAgBIAAgFIAAgBIAAgJQAFhBARg0QASg0AagrQAbgrAhgjQAigkApgcQAkgYApgSIAOgGQAQgFAPgFQAmgMAsgFIAZgCIAIAAIAAgBIAIAAIABAAIAQAAIABAAIALAAIABAAQABACAFgBIABAAQBAAEA0ASQA0ASAqAaQArAbAkAiQAjAiAcAqQAcAqASAyQATAzAIA9IABAJIAAAGIAAAAIAAAHIAAAAIABAHIAAAAIAAAIIAAACIAAASIAAABIAAAKIAAABIgBAAIAAAGIAAABIAAAQQgHA/gTAyQgUAygbAqQgbAqgjAjQgkAhgrAcQgqAag0ATQgyARhCAFIAAAAIgGAAIAAAAIgBAAgAjwBiQgBAyACAwQACAJAIACIABAAQA0ABA2gBQAJgCABgJIABAAIABhhIgBiJIgBgBQgBgJgJgBIAAgBIhrAAIAAABIAAAAQgHACgDAGIAAAAIAAABIgBAAIAACKgAhNB4QAAATABASQABAMAKACIABAAQApABAoAAIABAAIAbAAIAAgBICLAAQAdgBAEgaIAAAAQABgGgBgDIAAgBQgEgOgJgIQAZgHgBgeQgBgKgGgIIgLgLQAKgGAJgIQAHgFABgLQADgUgMgLIgPgNQAZgJAAghQAAghgegEIAAAAIgHgBIAAAAIgYAAIgBAAIgXAAIAAABQggAAgfACQgNAAgBgKQAUgiAKgsQABgGAAgJIABAAQABgHgCgFQgBgtgagUQgEgDgGgBQgegEgIAZIAAANIAAABIAAAAIAAANIAAABIAAALIAAABIgBAAIAAAKIAAABQgDAHgFAFQghAigeAoQgcApgIA+IAAAJIAAABIgBAAIAACKg");
	this.shape.setTransform(45.6,45.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjiD5IgBgBQgJgBgBgJQgCgwAAgyIABiLIABAAIAAgBIAAAAQADgGAHgCIAAAAIAAgBIBrABIAAAAQAJACABAIIABABIABCKIgBBhIgBAAQgCAJgIACIg2AAIg0AAgAg+DVIgBAAQgKgDgBgMQgBgRAAgTIAAiLIABAAIAAgBIAAgJQAHg9AdgpQAdgoAigjQAFgEADgHIAAgBIAAgKIABAAIAAgBIAAgMIAAgBIAAgMIAAAAIAAgBIAAgOQAHgZAfAFQAFABAFADQAaAUABAtQABAFgBAHIAAAAQAAAIgBAHQgKAsgUAiQABAKAMgBQAggBAgAAIAAgBIAXAAIABAAIAYAAIAAAAIAHAAIAAABQAdAEABAhQAAAggZAJIAPAMQAMALgDAWQgBALgHAFQgJAIgLAFIAMAMQAGAHAAALQABAegYAGQAJAIADAPIAAAAQACAEgBAGIgBAAQgDAagdABIiLAAIAAAAIgbABIgBAAIgUAAIg9gBg");
	this.shape_1.setTransform(45.4,41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,91.1,91.1), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AADByQgQgKgGgRQgGgSAAgiIAAhFQAAgZACgNQACgNAJgMQAIgMAPgHQAPgHAUAAQAbAAASALQASALAFAPQAGAQAAAhIAAAWIg+AAIAAgoQAAgSgCgFQgCgEgGAAQgIAAgCAFQgCAFAAASIAABtQAAASACAFQACAGAHgBQAHABACgGQACgFAAgUIAAgdIA+AAIAAAJQAAAlgFAPQgFAPgSAMQgSAMgaAAQgbAAgSgKgAiZByQgRgJgGgPQgFgOAAgbIAAgPIA5AAIAAAcQAAAOADAEQACADAGAAQAGAAADgEQADgGAAgJQAAgVgFgGQgGgHgXgPQgXgPgIgGQgHgHgFgMQgFgMAAgTQAAgbAHgNQAHgMAPgIQAQgGAWgBQAYAAARAIQARAIAFAMQAGAMAAAcIAAAJIg6AAIAAgSQAAgMgCgDQgCgDgFAAQgGAAgCAEQgDAFAAAJQAAALADAHQADAFAOAJQApAZALAOQALAQAAAjQAAAZgGAMQgGAMgRAJQgRAIgXAAQgYAAgSgKgAoYB0QgQgHgIgLQgIgLgBgNQgCgMAAgoIAAiLIA+AAIAACwQAAAPACAFQABAFAFgBQAGAAACgEQACgFAAgSIAAitIA9AAIAACdQAAAbgCALQgBALgJALQgJAMgOAFQgOAHgTAAQgVAAgRgIgAJ8B2IgghsIAABsIgzAAIAAjrIAzAAIAjBqIAAhqIAzAAIAADrgAGsB2IAAjrIBnAAIAAAvIgpAAIAAAtIAmAAIAAAsIgmAAIAAA0IAtAAIAAAvgAEwB2IAAjrIBmAAIAAAvIgpAAIAAAtIAnAAIAAAsIgnAAIAAA0IAtAAIAAAvgADeB2IAAhOQAAgTgCgFQgEgFgMAAIAABrIg+AAIAAjrIAsAAQArgBAQADQAPAEAKAOQAKAOAAAeQAAAcgHAJQgHAKgUACQASAEAGAHQAHAIABAGQACAGAAAdIAAA+gADMgZQAKAAAEgCQAEgDAAgPIAAgOQAAgLgDgDQgFgEgKAAgAkkB2IAAjrIA+AAIAAC8IAlAAIAAAvgAmWB2IAAjrIA+AAIAAC8IAlAAIAAAvgAqxB2IAAjrIBoAAIAAAvIgrAAIAAAtIAmAAIAAAsIgmAAIAABjg");
	this.shape.setTransform(76.4,20.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(7.4,8.1,138.1,24.7), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,0,0,0.557)").s().p("AjlD9QgagagTgcIHXncQAeAUAbAbIAVAXIncHlQgOgMgOgNg");
	this.shape.setTransform(27.5,27.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,55,55.6), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/DRIgTAAQgcgEgUgOIgMgJQgagVABguQANg7A8gOQASgEASADIAAiRIAAhoIABAAIATAKIAGADQA1ATAzAXQAzAWAcAsQALARAEAXQAHAngQAZQgKgRgLgNQgLgOgOgLQgpgfgvgbQgBAeAAAgIAACRQAAASgEAPQgQA4hAAJIAAAAIgBAAg");
	this.shape.setTransform(16.8,20.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,33.6,41.8), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.numeroboton = new cjs.Text("", "41px 'Arial'", "#999999");
	this.numeroboton.name = "numeroboton";
	this.numeroboton.textAlign = "center";
	this.numeroboton.lineHeight = 48;
	this.numeroboton.lineWidth = 60;
	this.numeroboton.parent = this;
	this.numeroboton.setTransform(-0.7,-22.3);

	this.instance = new lib.Bitmap10();
	this.instance.parent = this;
	this.instance.setTransform(-41,-41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.numeroboton}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-41,-41,82,82), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;
	this.instance.setTransform(-235,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-235,-25,470,50), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-699,-401);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-699,-401,1399,802), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(12.1,1,1).p("AiJCXIAAktIETAA");
	this.shape.setTransform(13.8,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-6,-6,39.6,42.1), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{dos:1,tres:2,cuatro:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.mivar.text = 1+ Math.floor(Math.random() *4);
		
		if (this.mivar.text == 2)
			this.gotoAndStop("dos");
		
		if (this.mivar.text == 3)
			this.gotoAndStop("tres");
		
		if (this.mivar.text == 4)
			this.gotoAndStop("cuatro");
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer 1
	this.mivar = new cjs.Text("", "30px 'Arial'", "#0066CC");
	this.mivar.name = "mivar";
	this.mivar.lineHeight = 36;
	this.mivar.lineWidth = 42;
	this.mivar.alpha = 0.00000000;
	this.mivar.parent = this;
	this.mivar.setTransform(127.4,26.9);

	this.etiketa = new cjs.Text("", "55px 'Impact'", "#FFFFFF");
	this.etiketa.name = "etiketa";
	this.etiketa.textAlign = "center";
	this.etiketa.lineHeight = 69;
	this.etiketa.lineWidth = 119;
	this.etiketa.parent = this;
	this.etiketa.setTransform(6.2,-12.9,1.777,1.246);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.etiketa},{t:this.mivar}]}).wait(4));

	// Layer 2
	this.instance = new lib.Bitmap16();
	this.instance.parent = this;
	this.instance.setTransform(-72,-47);

	this.instance_1 = new lib.Bitmap17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-85,-60);

	this.instance_2 = new lib.Bitmap19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-73,-50);

	this.instance_3 = new lib.Bitmap20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-73,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("ApYJbIAAy2ISxAAIAAS2g");
	this.shape.setTransform(2.1,26.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.6,-47,274,152);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(12.1,1,1).p("AiaiWIE1AAIAAEt");
	this.shape.setTransform(15.5,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-6,-6,43.1,42.1), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(17.6,1,1).p("AkXhgQATggAcgcQBYhYB8AAQB8AABYBYQBYBYAAB7QAAB9hYBXQhYBYh8AAQhxAAhThJAkXhgID0BXAkXhgIAAkC");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-36.7,-44.2,73.4,88.6), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,204,0,0.988)").s().p("EghDALjIAA3FMBCHAAAIAAXFg");
	this.shape.setTransform(3.2,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-208.4,-74.7,423.2,147.8), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(17.6,1,1).p("AAWjVIDWDVIjWDWAjrAAIHXAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-32.4,-30.2,64.9,60.4), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(17.7,1,1).p("AD4mrID1AAIAADYAHtDcIAADQIj1AAAnsjTIAAjYIDgAAAkMGsIjgAAIAAjQ");
	this.shape.setTransform(49.3,42.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.557)").s().p("AoXJ6Qi9AAAAi9IAAt5QAAi9C9AAIQvAAQC9AAAAC9IAAN5QAAC9i9AAg");
	this.shape_1.setTransform(48,42.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-24.5,-20.5,145.1,126.9), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8.4,1,1).p("AjsC0QgBgGAAgFQAAiQBmhmQBmhmCPAAQCQAABmBmQAEAEADAEAjsC0IDIiAAjsC0Ih+iu");
	this.shape.setTransform(-4.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-45.3,-22.1,81.1,44.3), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmMGNQhghhgoh3QgchWAAhfQAAjnCkilQClikDnAAQDoAAClCkQCjCjABDnIAAACQAADoikClQilCkjoAAQjnAAilikg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-56.1,-56.1,112.2,112.2), null);


(lib.Symbol12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(12.1,1,1).p("ACKClIkTAAIAAlJ");
	this.shape_1.setTransform(13.8,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12_1, new cjs.Rectangle(-6,-6,39.6,45), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(12.1,1,1).p("ACbikIAAFJIk1AA");
	this.shape.setTransform(15.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-6,-6,43.1,45), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol39();
	this.instance.parent = this;
	this.instance.setTransform(33,33.2,1,1,0,0,0,27.4,27.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/DRIgTAAQgcgEgUgNIgMgKIgDgCQgXgVABgsQANg8A8gNQASgDASACIAAhjIAAgtIAAhpIABAAIATAKIAGADIBOAeIAaALQAmARAaAeQAIAKAHALQALAQAEAXQAHAngQAYQgKgPgLgNQgLgPgOgLIgZgSQgegWghgSQgBAeAAAgIAAAqIAABnQAAATgEAOQgQA4hAAJIAAAAIgBAAg");
	this.shape.setTransform(36.9,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.557)").s().p("AjVELQgOgLgNgOQgbgagSgcQg4hTAAhpQAAiMBlhlQBkhkCMAAQBoAABRA1QAeAUAbAbIAVAXQBPBdAAB9QAACNhkBlQhlBkiNAAQh5AAhchLgAhDAgQg7ANgNA8QgBAsAWAVIADACIANAKQATANAcAEIATAAIABAAIAAAAQBAgJARg4QADgOAAgTIAAhmIAAgrQAAggABgeQAiASAdAWIAaASQAOALALAPQAKAOAKAOQAQgYgHgnQgEgXgLgQQgHgLgHgKQgbgeglgRIgagLIhOgeIgHgDIgTgKIgBAAIAABpIAAAtIAABjIgPgBQgKAAgLACg");
	this.shape_1.setTransform(34.2,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,68.4,68.4), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol37();
	this.instance.parent = this;
	this.instance.setTransform(37,33.2,1,1,0,0,0,16.8,20.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.557)").s().p("AjwDyQhlhlAAiNQAAiMBlhlQBkhkCMAAQCNAABlBkQBkBlAACMQAACNhkBlQhlBkiNAAQiMAAhkhkg");
	this.shape.setTransform(34.2,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,68.4,68.4), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.btmute.addEventListener("click", mute.bind(this));
		
		function mute()
		{
			$("#mimusica")[0].muted = true;
			this.play();
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		this.btnomute.addEventListener("click", nomute.bind(this));
		
		function nomute()
		{
			$("#mimusica")[0].muted = false;
			this.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.btmute = new lib.Symbol38();
	this.btmute.parent = this;
	this.btmute.setTransform(447.8,555.2,1,1,0,0,0,34.2,34.2);

	this.btnomute = new lib.Symbol40();
	this.btnomute.parent = this;
	this.btnomute.setTransform(447.8,555.2,1,1,0,0,0,34.2,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btmute}]}).to({state:[{t:this.btnomute}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(413.6,521,68.4,68.4);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var queue = new createjs.LoadQueue(true);
		
		queue.on('complete',completeF,this);
		
		var nameFile = "data.txt";
		
		queue.loadFile(nameFile);
		
		
		function completeF(e)
		{
			this.passserv.text = queue._loadedResults[nameFile];
		}
		
		//////////////////////////////
		
		
		///////////////////////////////////////	
			
		this.cbt0.numeroboton.text = "0";
		this.cbt1.numeroboton.text = "1";
		this.cbt2.numeroboton.text = "2";
		this.cbt3.numeroboton.text = "3";
		this.cbt4.numeroboton.text = "4";
		this.cbt5.numeroboton.text = "5";
		this.cbt6.numeroboton.text = "6";
		this.cbt7.numeroboton.text = "7";
		this.cbt8.numeroboton.text = "8";
		this.cbt9.numeroboton.text = "9";
		this.listo.numeroboton.text = "Ok";
		this.borrar.numeroboton.text = "X";
		
		this.stop();
		
		///////////////////////////////////////////////
		
		this.listo.addEventListener("click", listo.bind(this));
		
		function listo()
		{
		
		if (this.mipass.text == this.passserv.text)
			this.play();
			
		}
		
		
		
		this.borrar.addEventListener("click", borrar.bind(this));
		
		function borrar()
		{
		
				this.mipass.text = "";
				this.mipassxx.text = "";
			
		}
		
		
		
		this.cbt0.addEventListener("click", pass0.bind(this));
		
		function pass0()
		{
		
				this.mipass.text = this.mipass.text + "0";
				this.mipassxx.text = this.mipassxx.text + "x";
		}
		
		
		
		
		this.cbt1.addEventListener("click", pass1.bind(this));
		
		function pass1()
		{
		
				this.mipass.text = this.mipass.text + "1";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
		
		this.cbt2.addEventListener("click", pass2.bind(this));
		
		function pass2()
		{
		
				this.mipass.text = this.mipass.text + "2";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
		
		this.cbt3.addEventListener("click", pass3.bind(this));
		
		function pass3()
		{
		
				this.mipass.text = this.mipass.text + "3";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
		
		this.cbt4.addEventListener("click", pass4.bind(this));
		
		function pass4()
		{
		
				this.mipass.text = this.mipass.text + "4";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
		
		
		this.cbt5.addEventListener("click", pass5.bind(this));
		
		function pass5()
		{
		
				this.mipass.text = this.mipass.text + "5";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
		
		
		this.cbt6.addEventListener("click", pass6.bind(this));
		
		function pass6()
		{
		
				this.mipass.text = this.mipass.text + "6";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
		
		
		this.cbt7.addEventListener("click", pass7.bind(this));
		
		function pass7()
		{
		
				this.mipass.text = this.mipass.text + "7";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
		
		this.cbt8.addEventListener("click", pass8.bind(this));
		
		function pass8()
		{
		
				this.mipass.text = this.mipass.text + "8";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
		
		
		this.cbt9.addEventListener("click", pass9.bind(this));
		
		function pass9()
		{
		
				this.mipass.text = this.mipass.text + "9";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap13();
	this.instance.parent = this;
	this.instance.setTransform(353,248);

	this.instance_1 = new lib.Bitmap11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-92,-273);

	this.mipass = new cjs.Text("", "41px 'Arial'", "#FFFFFF");
	this.mipass.name = "mipass";
	this.mipass.textAlign = "center";
	this.mipass.lineHeight = 48;
	this.mipass.lineWidth = 444;
	this.mipass.parent = this;
	this.mipass.setTransform(-981.5,-499.8);

	this.passserv = new cjs.Text("", "41px 'Arial'", "#FFFFFF");
	this.passserv.name = "passserv";
	this.passserv.textAlign = "center";
	this.passserv.lineHeight = 48;
	this.passserv.lineWidth = 307;
	this.passserv.parent = this;
	this.passserv.setTransform(-985.7,-576.2);

	this.borrar = new lib.Symbol30();
	this.borrar.parent = this;
	this.borrar.setTransform(69.4,215.3);

	this.listo = new lib.Symbol30();
	this.listo.parent = this;
	this.listo.setTransform(-21.4,215.3);

	this.cbt0 = new lib.Symbol30();
	this.cbt0.parent = this;
	this.cbt0.setTransform(-112.9,215.3);

	this.cbt3 = new lib.Symbol30();
	this.cbt3.parent = this;
	this.cbt3.setTransform(69.4,121.6);

	this.cbt2 = new lib.Symbol30();
	this.cbt2.parent = this;
	this.cbt2.setTransform(-21.4,121.6);

	this.cbt1 = new lib.Symbol30();
	this.cbt1.parent = this;
	this.cbt1.setTransform(-112.9,121.6);

	this.cbt6 = new lib.Symbol30();
	this.cbt6.parent = this;
	this.cbt6.setTransform(69.4,27.7);

	this.cbt5 = new lib.Symbol30();
	this.cbt5.parent = this;
	this.cbt5.setTransform(-21.4,27.7);

	this.cbt4 = new lib.Symbol30();
	this.cbt4.parent = this;
	this.cbt4.setTransform(-112.9,27.7);

	this.cbt9 = new lib.Symbol30();
	this.cbt9.parent = this;
	this.cbt9.setTransform(69.4,-66.1);

	this.cbt8 = new lib.Symbol30();
	this.cbt8.parent = this;
	this.cbt8.setTransform(-21.4,-66.1);

	this.cbt7 = new lib.Symbol30();
	this.cbt7.parent = this;
	this.cbt7.setTransform(-112.9,-66.1);

	this.mipassxx = new cjs.Text("", "41px 'Arial'", "#FFFFFF");
	this.mipassxx.name = "mipassxx";
	this.mipassxx.textAlign = "center";
	this.mipassxx.lineHeight = 48;
	this.mipassxx.lineWidth = 444;
	this.mipassxx.parent = this;
	this.mipassxx.setTransform(-7.6,-198.4);

	this.instance_2 = new lib.Symbol29();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10.4,-175.6);
	this.instance_2.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.mipassxx},{t:this.cbt7},{t:this.cbt8},{t:this.cbt9},{t:this.cbt4},{t:this.cbt5},{t:this.cbt6},{t:this.cbt1},{t:this.cbt2},{t:this.cbt3},{t:this.cbt0},{t:this.listo},{t:this.borrar},{t:this.passserv},{t:this.mipass},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(3));

	// Layer 2
	this.instance_3 = new lib.Symbol27();
	this.instance_3.parent = this;
	this.instance_3.alpha = 0.898;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1205.2,-578.2,1905.3,979.2);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-9.5,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.129},28).to({alpha:1},31).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-273,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-273,-40,523,141);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol45();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,45.6,45.6);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",-3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-53.5,-47.5,104,104), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol44();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,45.6,45.6);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-48.5,-48.5,104,104), null);


(lib.Symbol11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(0.6,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#990000","#EBA9A9"],[0,1],-0.8,-17.6,6.6,24).s().p("AlIByQhNhNgfheQF5kSHwB/IAAACQAAC6iDCCQiDCEi5AAQi6AAiEiEg");
	this.shape_1.setTransform(1.1,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6600").s().p("Am/CYQAAi5CCiEQCEiCC5AAQC6AACDCCQCDCDAAC3Qnvh/l6ETQgWhEAAhNg");
	this.shape_2.setTransform(0,-15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11_1, new cjs.Rectangle(-56.1,-56.1,112.2,112.2), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(2.1,-0.3,0.769,0.769);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#004C92","#04C0EE"],[0,1],-0.8,-17.6,6.6,24).s().p("AlIByQhNhNgfheQF5kSHwB/IAAACQAAC6iDCCQiDCEi5AAQi6AAiEiEg");
	this.shape.setTransform(1.1,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85A9CB").s().p("Am/CYQAAi5CCiEQCEiCC5AAQC6AACDCCQCDCDAAC3Qnvh/l6ETQgWhEAAhNg");
	this.shape_1.setTransform(0,-15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-56.1,-56.1,112.2,112.2), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(5.9,18,1,1,180);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.9,-17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.557)").s().p("AmiGjQitiuAAj1QAAj0CtitQCuiuD0AAQD1AACtCuQCuCtAAD0QAAD1iuCuQitCtj1AAQj0AAiuitg");
	this.shape.setTransform(0.4,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-58.8,-58.5,118.4,118.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ini:0,ini2:1,resetear:7});

	// timeline functions:
	this.frame_0 = function() {
		this.mivar.text = "2";
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
		
		
		if (this.mivar.text == "2")
			$("#movieClip_3")[0].src = "data/"+ this.miruta.text +".mp4";
			$("#mimusica")[0].pause();
		
		
		///////////////	
		
		var _this = this;
		
		_this.movieClip_3.on("added", function () {
		
		    $("#movieClip_3").on("ended", function () {
		
		        _this.play();
		
		    });
		
		});
		
		////////////
		this.btre.addEventListener("click", hacer2.bind(this));
		
		function hacer2()
		{
			$("#movieClip_3")[0].src = "data/"+ this.miruta.text +".mp4";
		}
		
		
		this.btnext.addEventListener("click", hacer3.bind(this));
		
		function hacer3()
		{
			this.play();
		}
	}
	this.frame_7 = function() {
		if (this.mivar.text == "2")
			$("#movieClip_3")[0].pause();
			$("#mimusica")[0].play();
		
		this.gotoAndPlay("ini");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(5).call(this.frame_6).wait(1).call(this.frame_7).wait(1));

	// Layer 4
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(695.3,-561.1,0.746,0.746,0,0,0,57.6,42);

	this.mimusica = new lib.an_Video({'id': 'mimusica', 'src':'videos/msuica.mp4', 'autoplay':true, 'controls':false, 'loop':true, 'preload':false, 'class':'musica'});

	this.mimusica.setTransform(-252.4,-441.4,0.638,0.478,0,0,0,200,149.9);

	this.miruta2 = new cjs.Text("", "48px 'Arial'");
	this.miruta2.name = "miruta2";
	this.miruta2.textAlign = "center";
	this.miruta2.lineHeight = 56;
	this.miruta2.lineWidth = 81;
	this.miruta2.parent = this;
	this.miruta2.setTransform(1012,564.4);

	this.miruta = new cjs.Text("", "48px 'Arial'");
	this.miruta.name = "miruta";
	this.miruta.textAlign = "center";
	this.miruta.lineHeight = 56;
	this.miruta.lineWidth = 97;
	this.miruta.parent = this;
	this.miruta.setTransform(907.3,564.4);

	this.mivar = new cjs.Text("", "48px 'Arial'");
	this.mivar.name = "mivar";
	this.mivar.textAlign = "center";
	this.mivar.lineHeight = 56;
	this.mivar.lineWidth = 89;
	this.mivar.parent = this;
	this.mivar.setTransform(796.8,564.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mivar},{t:this.miruta},{t:this.miruta2},{t:this.mimusica},{t:this.instance}]}).wait(8));

	// Layer 8
	this.movieClip_3 = new lib.an_Video({'id': 'movieClip_3', 'src':'videos/', 'autoplay':true, 'controls':false, 'loop':false, 'preload':false, 'class':'video'});

	this.movieClip_3.setTransform(14.3,-797.3,2.446,1.886,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_3).wait(5).to({y:-177.3},1).to({y:-801.3},1).wait(1));

	// Layer 7
	this.instance_1 = new lib.Symbol48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(469.3,137.5,1,1,0,0,0,523.8,390.1);
	this.instance_1.alpha = 0.012;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.Symbol24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(500.6,105);

	this.btnext = new lib.Symbol11_1();
	this.btnext.parent = this;
	this.btnext.setTransform(1094.2,474,0.684,0.684);

	this.btre = new lib.Symbol9();
	this.btre.parent = this;
	this.btre.setTransform(-99.5,472.5,0.684,0.684,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btre},{t:this.btnext},{t:this.instance_2},{t:this.instance_1}]},6).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-380.4,-798,1434.7,1418.1);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(120.2,16.8,1.658,1.658,0,0,0,75.9,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(6.5,-0.3,228.9,41), null);


(lib.Tween2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(-350,-175.8,6.582,6.582,180,0,0,0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-655.2,-480.3,614,613);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(225,-170.9,7.598,7.598,0,0,0,-0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-519.9,706,705);


(lib.Symbol14copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.btplay.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
		this.play();
		}
	}
	this.frame_1 = function() {
		playSound("CORNETAPERDIO");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(130));

	// Layer 2
	this.btplay = new lib.Symbol20();
	this.btplay.parent = this;
	this.btplay.setTransform(-48.6,26,1,1,180);

	this.instance = new lib.Tween2copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-568.4,-251.1,0.022,0.022);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btplay}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},104).to({state:[{t:this.instance}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1.11,scaleY:1.11,x:-568.3,y:-250.9},6).to({scaleX:0.94,scaleY:0.94,y:-251},3).to({scaleX:1.06,scaleY:1.06},3).to({regX:-0.1,regY:-0.1,scaleX:0.98,scaleY:0.98,x:-568.4,y:-251.1},3).to({regX:0,regY:0,scaleX:1.06,scaleY:1.06,x:-568.3,y:-251},4).to({startPosition:0},104).to({scaleX:0.02,scaleY:0.02,x:-568.4,y:-251.1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.1,-21.6,105,104);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.btplay.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
		this.play();
		}
	}
	this.frame_1 = function() {
		playSound("CORNETAUNAVEZ");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(102));

	// Layer 1
	this.btplay = new lib.Symbol19();
	this.btplay.parent = this;
	this.btplay.setTransform(-48.6,26);

	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(539,-268.5,0.017,0.017);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btplay}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},76).to({state:[{t:this.instance}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1.09,scaleY:1.09},6).to({regX:0.1,scaleX:0.91,scaleY:0.81,x:539.1},3).to({regX:0,scaleX:1.02,scaleY:1.02,x:539},3).to({scaleX:0.97,scaleY:0.97},3).to({scaleX:1.02,scaleY:1.02},4).to({startPosition:0},76).to({scaleX:0.02,scaleY:0.02},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.1,-22.6,105,104);


(lib.Symbol8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1_1();
	this.instance.parent = this;
	this.instance.setTransform(152,47.4,0.899,0.899,0,0,0,122.4,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// Symbol 13
	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.8,15.1,1,1,0,0,0,13.8,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-17.7,y:-16.4},24,cjs.Ease.get(1)).to({x:13.8,y:15.1},25,cjs.Ease.get(-1)).wait(1));

	// Symbol 12
	this.instance_2 = new lib.Symbol12_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(13.8,80.1,1,1,0,0,0,13.8,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-17.7,y:111.6},24,cjs.Ease.get(1)).to({x:13.8,y:80.1},25,cjs.Ease.get(-1)).wait(1));

	// Symbol 11
	this.instance_3 = new lib.Symbol11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(295.8,80.1,1,1,0,0,0,15.5,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:327.3,y:111.6},24,cjs.Ease.get(1)).to({x:295.8,y:80.1},25,cjs.Ease.get(-1)).wait(1));

	// Symbol 10
	this.instance_4 = new lib.Symbol10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(295.8,15.1,1,1,0,0,0,15.5,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:327.3,y:-16.4},24,cjs.Ease.get(1)).to({x:295.8,y:15.1},25,cjs.Ease.get(-1)).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(154.1,48.5,0.697,0.544,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,323.3,108.7);


// stage content:
(lib.FORTNITEEXPERIENCE5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.fsbtn.addEventListener("click", toggleFullscreen.bind(this));
		
		function toggleFullscreen(event) {
				
		    var element = document.body;
		
		    if (event instanceof HTMLElement) {
		        element = event;
		    }
		
		    var isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;
		
		    element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen ||           element.mozRequestFullScreen || function () {
		        return false;
		    };
		    document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen ||           document.mozCancelFullScreen || function () {
		        return false;
		    };
		
		    isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
				this.play();
				//this.fsbtn.gotoAndPlay("estatico");
		}
	}
	this.frame_1 = function() {
		this.stop();
		this.bt1.etiketa.text = "1";
		this.bt2.etiketa.text = "2";
		this.bt3.etiketa.text = "3";
		this.bt4.etiketa.text = "4";
		this.bt5.etiketa.text = "5";
		this.bt6.etiketa.text = "6";
		this.bt7.etiketa.text = "7";
		this.bt8.etiketa.text = "8";
		this.bt9.etiketa.text = "9";
		this.bt10.etiketa.text = "10";
		
		this.bt11.etiketa.text = "11";
		this.bt12.etiketa.text = "12";
		this.bt13.etiketa.text = "13";
		this.bt14.etiketa.text = "14";
		this.bt15.etiketa.text = "15";
		this.bt16.etiketa.text = "16";
		this.bt17.etiketa.text = "17";
		this.bt18.etiketa.text = "18";
		this.bt19.etiketa.text = "19";
		this.bt20.etiketa.text = "20";
		
		this.bt21.etiketa.text = "21";
		this.bt22.etiketa.text = "22";
		this.bt23.etiketa.text = "23";
		this.bt24.etiketa.text = "24";
		this.bt25.etiketa.text = "25";
		this.btfull.addEventListener("click", toggleFullscreen2.bind(this));
		
		function toggleFullscreen2(event) {
				
		    var element = document.body;
		
		    if (event instanceof HTMLElement) {
		        element = event;
		    }
		
		    var isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;
		
		    element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen ||           element.mozRequestFullScreen || function () {
		        return false;
		    };
		    document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen ||           document.mozCancelFullScreen || function () {
		        return false;
		    };
		
		    isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
		
		}
		
		
		
		this.reini.addEventListener("click", reini.bind(this));
		
		function reini()
		{
		this.bt1.visible = true;
		this.bt2.visible = true;
		this.bt3.visible = true;
		this.bt4.visible = true;
		this.bt5.visible = true;
		this.bt6.visible = true;
		this.bt7.visible = true;
		this.bt8.visible = true;
		this.bt9.visible = true;
		this.bt10.visible = true;
		
		this.bt11.visible = true;
		this.bt12.visible = true;
		this.bt13.visible = true;
		this.bt14.visible = true;
		this.bt15.visible = true;
		this.bt16.visible = true;
		this.bt17.visible = true;
		this.bt18.visible = true;
		this.bt19.visible = true;
		this.bt20.visible = true;
		
		this.bt21.visible = true;
		this.bt22.visible = true;
		this.bt23.visible = true;
		this.bt24.visible = true;
		this.bt25.visible = true;
		
		this.movies.gotoAndPlay("resetear");
		}
		
		
		
		
		
		this.bt1.addEventListener("click", hacer_1.bind(this));
		
		function hacer_1()
		{
		
		this.movies.miruta.text = "1a";
		
		this.movies.play();
		
		this.bt1.visible = false;	
		}
		
		
		this.bt2.addEventListener("click", hacer_2x.bind(this));
		
		function hacer_2x()
		{
		
		this.movies.miruta.text = "2a";
			
		this.movies.play();
		
		this.bt2.visible = false;	
		}
		
		
		this.bt3.addEventListener("click", hacer_3x.bind(this));
		
		function hacer_3x()
		{
		
		this.movies.miruta.text = "3a";
			
		this.movies.play();
		
		this.bt3.visible = false;	
		}
		
		
		this.bt4.addEventListener("click", hacer_4x.bind(this));
		
		function hacer_4x()
		{
		
		this.movies.miruta.text = "4a";
			
		this.movies.play();
		
		this.bt4.visible = false;	
		}
		
		
		this.bt5.addEventListener("click", hacer_5x.bind(this));
		
		function hacer_5x()
		{
		
		this.movies.miruta.text = "5a";
			
		this.movies.play();
		
		this.bt5.visible = false;	
		}
		
		
		this.bt6.addEventListener("click", hacer_6x.bind(this));
		
		function hacer_6x()
		{
		
		this.movies.miruta.text = "6a";
			
		this.movies.play();
		
		this.bt6.visible = false;	
		}
		
		
		this.bt7.addEventListener("click", hacer_7x.bind(this));
		
		function hacer_7x()
		{
		
		this.movies.miruta.text = "7a";
			
		this.movies.play();
		
		this.bt7.visible = false;	
		}
		
		
		this.bt8.addEventListener("click", hacer_8x.bind(this));
		
		function hacer_8x()
		{
		
		this.movies.miruta.text = "8a";
		
		this.movies.play();
		
		this.bt8.visible = false;	
		}
		
		
		this.bt9.addEventListener("click", hacer_9x.bind(this));
		
		function hacer_9x()
		{
		
		this.movies.miruta.text = "9a";
			
		this.movies.play();
		
		this.bt9.visible = false;	
		}
		
		
		this.bt10.addEventListener("click", hacer_10x.bind(this));
		
		function hacer_10x()
		{
		
		this.movies.miruta.text = "10a";
		
		this.movies.play();
		
		this.bt10.visible = false;	
		}
		
		this.bt11.addEventListener("click", hacer_11x.bind(this));
		
		function hacer_11x()
		{
		
		this.movies.miruta.text = "11a";
		
		this.movies.play();
		
		this.bt11.visible = false;	
		}
		
		
		this.bt12.addEventListener("click", hacer_12x.bind(this));
		
		function hacer_12x()
		{
		
		this.movies.miruta.text = "12a";
		
		this.movies.play();
		
		this.bt12.visible = false;	
		}
		
		
		
		this.bt13.addEventListener("click", hacer_13x.bind(this));
		
		function hacer_13x()
		{
		
		this.movies.miruta.text = "13a";
		
		this.movies.play();
		
		this.bt13.visible = false;	
		}
		
		
		this.bt14.addEventListener("click", hacer_14x.bind(this));
		
		function hacer_14x()
		{
		
		this.movies.miruta.text = "14a";
		
		this.movies.play();
		
		this.bt14.visible = false;	
		}
		
		
		this.bt15.addEventListener("click", hacer_15x.bind(this));
		
		function hacer_15x()
		{
		
		this.movies.miruta.text = "15a";
		
		this.movies.play();
		
		this.bt15.visible = false;	
		}
		
		
		this.bt16.addEventListener("click", hacer_16x.bind(this));
		
		function hacer_16x()
		{
		
		this.movies.miruta.text = "16a";
		
		this.movies.play();
		
		this.bt16.visible = false;	
		}
		
		
		this.bt17.addEventListener("click", hacer_17x.bind(this));
		
		function hacer_17x()
		{
		
		this.movies.miruta.text = "17a";
		
		this.movies.play();
		
		this.bt17.visible = false;	
		}
		
		
		
		this.bt18.addEventListener("click", hacer_18x.bind(this));
		
		function hacer_18x()
		{
		
		this.movies.miruta.text = "18a";
		
		this.movies.play();
		
		this.bt18.visible = false;	
		}
		
		
		
		this.bt19.addEventListener("click", hacer_19x.bind(this));
		
		function hacer_19x()
		{
		
		this.movies.miruta.text = "19a";
		
		this.movies.play();
		
		this.bt19.visible = false;	
		}
		
		
		
		this.bt20.addEventListener("click", hacer_20x.bind(this));
		
		function hacer_20x()
		{
		
		this.movies.miruta.text = "20a";
		
		this.movies.play();
		
		this.bt20.visible = false;	
		}
		
		
		
		this.bt21.addEventListener("click", hacer_21x.bind(this));
		
		function hacer_21x()
		{
		
		this.movies.miruta.text = "21a";
		
		this.movies.play();
		
		this.bt21.visible = false;	
		}
		
		
		
		this.bt22.addEventListener("click", hacer_22x.bind(this));
		
		function hacer_22x()
		{
		
		this.movies.miruta.text = "22a";
		
		this.movies.play();
		
		this.bt22.visible = false;	
		}
		
		
		
		this.bt23.addEventListener("click", hacer_23x.bind(this));
		
		function hacer_23x()
		{
		
		this.movies.miruta.text = "23a";
		
		this.movies.play();
		
		this.bt23.visible = false;	
		}
		
		
		
		this.bt24.addEventListener("click", hacer_24x.bind(this));
		
		function hacer_24x()
		{
		
		this.movies.miruta.text = "24a";
		
		this.movies.play();
		
		this.bt24.visible = false;	
		}
		
		
		
		this.bt25.addEventListener("click", hacer_25x.bind(this));
		
		function hacer_25x()
		{
		
		this.movies.miruta.text = "25a";
		
		this.movies.play();
		
		this.bt25.visible = false;	
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 4
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(644.8,349.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer 2
	this.movies = new lib.Symbol2();
	this.movies.parent = this;
	this.movies.setTransform(145,206.2,1,1,0,0,0,-0.1,0);
	this.movies._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movies).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.fsbtn = new lib.Symbol8_1();
	this.fsbtn.parent = this;
	this.fsbtn.setTransform(632.5,336.8,1,1,0,0,0,155.7,48.3);

	this.bt21 = new lib.Symbol12();
	this.bt21.parent = this;
	this.bt21.setTransform(-813.2,1014.1,0.767,0.767,0,0,0,-0.2,0.1);

	this.bt22 = new lib.Symbol12();
	this.bt22.parent = this;
	this.bt22.setTransform(-677.2,1024.7,0.665,0.665,0,0,0,-0.3,0.1);

	this.bt24 = new lib.Symbol12();
	this.bt24.parent = this;
	this.bt24.setTransform(-328,1014.1,0.767,0.767,0,0,0,-0.2,0.1);

	this.bt25 = new lib.Symbol12();
	this.bt25.parent = this;
	this.bt25.setTransform(-124.8,1005.4,0.95,0.95,0,0,0,-0.2,0.1);

	this.bt23 = new lib.Symbol12();
	this.bt23.parent = this;
	this.bt23.setTransform(-500.5,1027.9,0.734,0.734,0,0,0,-0.1,0);

	this.instance_1 = new lib.Symbol14copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1278.2,869.8,0.678,0.678);

	this.instance_2 = new lib.Symbol14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67.8,869.8,0.678,0.678);

	this.bt20 = new lib.Symbol12();
	this.bt20.parent = this;
	this.bt20.setTransform(996,576.8,0.767,0.767,0,0,0,-0.2,0.1);

	this.bt19 = new lib.Symbol12();
	this.bt19.parent = this;
	this.bt19.setTransform(762.6,589.2,0.767,0.767,0,0,0,-0.2,0);

	this.bt18 = new lib.Symbol12();
	this.bt18.parent = this;
	this.bt18.setTransform(568.1,576.7,0.767,0.767,0,0,0,-0.2,0);

	this.bt17 = new lib.Symbol12();
	this.bt17.parent = this;
	this.bt17.setTransform(351.5,589.3,0.767,0.767,0,0,0,-0.3,0.1);

	this.bt16 = new lib.Symbol12();
	this.bt16.parent = this;
	this.bt16.setTransform(184.2,599.9,0.665,0.665,0,0,0,-0.3,0.1);

	this.bt15 = new lib.Symbol12();
	this.bt15.parent = this;
	this.bt15.setTransform(940.9,446.3,0.767,0.767,0,0,0,-0.2,0.1);

	this.bt14 = new lib.Symbol12();
	this.bt14.parent = this;
	this.bt14.setTransform(690.6,460.2,0.767,0.767,0,0,0,-0.2,0.1);

	this.bt13 = new lib.Symbol12();
	this.bt13.parent = this;
	this.bt13.setTransform(493.9,446.2,0.767,0.767,0,0,0,-0.2,0);

	this.bt12 = new lib.Symbol12();
	this.bt12.parent = this;
	this.bt12.setTransform(310.7,431.3,1.043,1.043,0,0,0,-0.2,0.1);

	this.bt11 = new lib.Symbol12();
	this.bt11.parent = this;
	this.bt11.setTransform(150.5,431.6,0.767,0.767,0,0,0,-0.3,0.1);

	this.btfull = new lib.Symbol5();
	this.btfull.parent = this;
	this.btfull.setTransform(1250.3,26.8,0.373,0.373,0,0,0,49.1,42.8);

	this.reini = new lib.Symbol4();
	this.reini.parent = this;
	this.reini.setTransform(1190.4,27.9,0.423,0.423);

	this.bt10 = new lib.Symbol12();
	this.bt10.parent = this;
	this.bt10.setTransform(1041,303,0.767,0.767,0,0,0,-0.3,0.1);

	this.bt9 = new lib.Symbol12();
	this.bt9.parent = this;
	this.bt9.setTransform(795.3,281.5,1.168,1.168,0,0,0,-0.1,0.1);

	this.bt8 = new lib.Symbol12();
	this.bt8.parent = this;
	this.bt8.setTransform(602.6,286.7,0.767,0.767,0,0,0,-0.2,0.1);

	this.bt7 = new lib.Symbol12();
	this.bt7.parent = this;
	this.bt7.setTransform(449.1,322.6,0.767,0.767,0,0,0,2.5,25.7);

	this.bt6 = new lib.Symbol12();
	this.bt6.parent = this;
	this.bt6.setTransform(272.5,296.5,0.846,0.846,0,0,0,2.5,28.5);

	this.bt5 = new lib.Symbol12();
	this.bt5.parent = this;
	this.bt5.setTransform(944.6,106,0.95,0.95,0,0,0,-0.2,0.1);

	this.bt4 = new lib.Symbol12();
	this.bt4.parent = this;
	this.bt4.setTransform(705.6,65.7,1.036,1.036,0,0,0,-0.1,0.2);

	this.bt3 = new lib.Symbol12();
	this.bt3.parent = this;
	this.bt3.setTransform(502.1,145.9,0.767,0.767,0,0,0,-0.2,0);

	this.bt2 = new lib.Symbol12();
	this.bt2.parent = this;
	this.bt2.setTransform(357.5,51.4,0.734,0.734,0,0,0,-0.1,0);

	this.bt1 = new lib.Symbol12();
	this.bt1.parent = this;
	this.bt1.setTransform(174,91.4,0.868,0.868,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fsbtn}]}).to({state:[{t:this.bt1},{t:this.bt2},{t:this.bt3},{t:this.bt4},{t:this.bt5},{t:this.bt6},{t:this.bt7},{t:this.bt8},{t:this.bt9},{t:this.bt10},{t:this.reini},{t:this.btfull},{t:this.bt11},{t:this.bt12},{t:this.bt13},{t:this.bt14},{t:this.bt15},{t:this.bt16},{t:this.bt17},{t:this.bt18},{t:this.bt19},{t:this.bt20},{t:this.instance_2},{t:this.instance_1},{t:this.bt23},{t:this.bt25},{t:this.bt24},{t:this.bt22},{t:this.bt21}]},1).wait(1));

	// Layer 3
	this.instance_3 = new lib.EditableFORTNITECHALLENGERecreaUsa();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79.5,131.5,1905.3,979.2);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/FORTNITE EXPERIENCE5_atlas_.png?1652707388361", id:"FORTNITE EXPERIENCE5_atlas_"},
		{src:"sounds/CORNETAPERDIO.mp3?1652707388433", id:"CORNETAPERDIO"},
		{src:"sounds/CORNETAUNAVEZ.mp3?1652707388433", id:"CORNETAUNAVEZ"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1652707388433", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1652707388433", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1652707388433", id:"an.Video"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;