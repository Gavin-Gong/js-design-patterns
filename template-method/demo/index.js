// 定义模板方法

function Animal() {}

Animal.prototype.eat = function() {
	console.log('eat food');
}

Animal.prototype.sleep = function() {
	console.log('sleep');
}

Animal.prototype.init = function() {
	this.eat();
	this.sleep();
}


// 子类

function Cat() {}

Cat.prototype = new Animal();

// 改写
Cat.prototype.eat = function() {
	console.log('eat fish');
}

// 调用

let cat = new Cat();
cat.init();
