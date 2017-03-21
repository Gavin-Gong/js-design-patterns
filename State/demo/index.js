function Light() {
	this.offState = new OffState(this);
	this.weakState = new WeakState(this);
	this.strongState = new StrongState(this);
	this.button = null;
}
Light.prototype.init = function() {
	let self = this;
	this.curState = this.offState;

	let btnEle = document.querySelector('.toggle-btn');
	btnEle.onclick = function() {
		self.curState.btnPressed();
	};
};
Light.prototype.setState = function(newState) {
	this.curState = newState;
};

// 状态对象
function OffState(light) {
	this.light = light;
};
OffState.prototype.btnPressed = function() {
	console.log('弱光');
	this.light.setState(this.light.weakState);
};

function WeakState(light) {
	this.light = light;
};
WeakState.prototype.btnPressed = function() {
	console.log('强光');
	this.light.setState(this.light.strongState);
};

function StrongState(light) {
	this.light = light;
};
StrongState.prototype.btnPressed = function() {
	console.log('无光');
	this.light.setState(this.light.offState);
};


let light = new Light();
light.init();