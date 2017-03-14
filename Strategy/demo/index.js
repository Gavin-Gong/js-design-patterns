let formEle = document.querySelector('.form');
let tipEle = document.querySelector('.form-tip');

let ageEl = document.querySelector('[name=age]');


// strategy
// 算法集合
let strategies = {
	isNotEmpty(value, errorMsg) {
		return value === '' ? errorMsg : undefined;
	},
	isNumber(value, errorMsg) {
		return !isNaN(parseFloat(value)) && isFinite(value) ? undefined : errorMsg;
	},
};

// 验证器对象
function Validator() {
	this.rules = []; // 传入的校检规则
}

Validator.prototype.add = function(ele, rule, errorMsg) {
	console.log(ele.value);
	this.rules.push(function() {
		return strategies[rule](ele.value, errorMsg);
	});
};

Validator.prototype.start = function(cb) {
	let lengthOfRules = this.rules.length;
	// Array.some
	for (var i = 0; i < lengthOfRules; i++) {
		let msg = this.rules[i]();
		if (msg) return msg;
	}
	cb();
}

let formValidator = new Validator();
formValidator.add(ageEl, 'isNumber', '请输入数字');

let finalMsg = formValidator.start(function() {
	console.log('validator success');
});



// normal
// formEle.onsubmit = function(e) {
// 	// e.preventDefault();
// 	let fd = new FormData(formEle);
	
// 	// console.log('before submit');
// 	// fd.get('name')
// 	// fd.get('age')
// 	// fd.get('gender')            
// 	function isName(value, errorMsg) {
// 		// 略
// 	}
// 	function isGender(value, errorMsg) {
// 		// 略
// 	}
// 	function isAge(value, errorMsg) {
// 		// 略
// 	}
// 	if (isName(...) && isGender(...) && isAge(...)) {
// 		// 验证成功
	
// 		tipEle.textContent = 'validate success!';
// 	} else {
// 		tipEle.textContent = 'validate failure!';
// 		return false;
// 	}
// }
