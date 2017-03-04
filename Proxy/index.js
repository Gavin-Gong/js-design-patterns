"use strict"
let proxy = function(fn, context) {
  console.log(context);
	return fn.bind(context);
};

function Code() {
	this.data = 'data from Code Obejct';
  this.Console = function() {
    console.log(this.data)
  }
  this.proxy = function(fn, ctx) {
    return fn.bind(this)
  }
}
let code = new Code()
setTimeout(code.proxy(code.Console), 100);
setTimeout(code.Console, 100);
setTimeout(code.Console.bind(code), 100);