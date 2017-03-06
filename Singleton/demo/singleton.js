let Dialog = (function() {
	let instance = null;

	function init() {
		// 插入DOM元素
		let maskEle = document.createElement('div');
		maskEle.classList.add('show-dialog', 'dialog');
		maskEle.style = 'display: block';
		console.log(maskEle);
		document.body.appendChild(maskEle);
		
		instance = {
			$el: maskEle, // 模态元素
			$isOpen: true, // dialog状态
			close () {
				this.$el.style = 'display: none';
				this.$isOpen = false;
			},
			open () {
				this.$el.style = 'display: block'
				this.$isOpen = true;
			},
			toggle () {
				if (this.$isOpen) {
					this.close();
				} else {
					this.open();
				}
			}
		};
	}
	function Dialog(isShow, title, content) {
		if (!instance) {
			init();
		}
		return instance;
	}
	return Dialog;
}());

// Dialog().open() 也可以这样调用
let myDialog = new Dialog('title', 'content');

document.getElementsByClassName('dialog-btn')[0].addEventListener('click', function() {
	console.log('here');
	myDialog.toggle();
});