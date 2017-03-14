// 实现思路:
// 当单独的判断函数无法处理传入参数的条件时, 约定return next字符串, 表明移交给下一个判断函数, 直至可以处理完成.
// 因此第一个处于链首的对象才是本体
// 

function Chain(fn) {
	this.fn = fn;
	this.next = null;
}

Chain.prototype.setNext = function(next) {
	this.next = next;
};

Chain.prototype.passReq = function() {
	let result = this.fn.apply(this, arguments);

	console.log(this);
	if (result === 'next') {
		return this.next && this.next.passReq.apply(this.next, arguments); // 调用下一个对象参数处理函数 
		// return this.next && this.next.passReq(arguments);
	}
	return result;
}

function foo(type, stock) {
	if (type === 1 && stock) {
		console.log('right');
	} else {
		return 'next';
	}
}

function bar(type, stock) {
	if (type === 0 && stock) {
		console.log('no right');
	} else {
		return 'next';
	}
}

function zoo(type, stock) {
	if (!stock) {
		console.log('no stock');
	} else {
		console.log(`has ${stock}`);
	}
}

let chainFoo = new Chain(foo);
let chainBar = new Chain(bar);
let chainZoo = new Chain(zoo);

chainFoo.setNext(chainBar);
chainBar.setNext(chainZoo);

chainFoo.passReq(1, 3);
// chainFoo.passReq(0, 3);
// chainFoo.passReq(1, 0);
