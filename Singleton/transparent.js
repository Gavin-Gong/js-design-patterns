let Singleton = (function() {
	let instance = null;
	// 真正的构造函数
	let originConstructor = function(obj) {
		if (instance) return instance;
		this.init();
	}
	originConstructor.prototype.init = function() {
		// do something
	};
	return originConstructor;
}());


new Singleton(3);