// stock data
// 需求变更可能修改
let goods = {
	'Pro|white': 3,
	'Air|white': 0,
	'Pro|black': 9,
	'Air|black': 12,
};

// DOM element
let $ = function(selector) {
	return document.querySelector(selector);
}

// 需求变更可能修改
let modelSelect = $('#mac-model'),
		colorSelect = $('#mac-color'),
		stockTip = $('#stock-tip')
		cartBtn = $('#add-to-cart');

// 监听表单元素
modelSelect.onchange = function() {
	mediator.changed(this);
}
colorSelect.onchange = function() {
	mediator.changed(this);
}

// 需求变更可能修改
let mediator = (function() {
	return {
		// 传入改变的DOM元素
		changed(obj) {
			// 表单值
			// 修去变更可能修改
			let color = colorSelect.value;
			let model = modelSelect.value;
			let stock = goods[`${model}|${color}`]; // 存货量
			
			function setTip(ctx) {
				stockTip.textContent = ctx;
				cartBtn.disabled = true;
			}
			if (!model) {
				setTip('请选择型号'); 
				return;
			}
			if (!color) {
				setTip('请选择颜色');
				return;
			}
			// 需求变更可能修改
			
			if (stock) {
				setTip('加入购物车');
				cartBtn.disabled = false;
				stockTip.textContent = `库存量: ${stock}`;
			} else {
				setTip('库存不足');
			}
		}
	}
})();
