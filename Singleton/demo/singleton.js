let Dialog = (function() {
	let instance = null;

	function init() {
		// 插入DOM元素
		let maskEle = document.createElement('div');
		maskEle.classList.add('show-dialog', 'dialog');
		maskEle.style = 'display: block';
		maskEle.innerHTML = '<div class="dialog-header"></div>\
			<div class="dialog-content"></div>\
			<div class="dialog-footer"></div>';

		console.log(maskEle);
		document.body.appendChild(maskEle);
		
		instance = {
			$mask: maskEle, // 模态元素
			$header: document.querySelector('.dialog .dialog-header'),
			$content: document.querySelector('.dialog .dialog-content'),
			$footer: document.querySelector('.dialog .dialog-footer'),
			$isOpen: true, // dialog状态
			close() {
				this.$mask.style.display = 'none';
				this.$isOpen = false;
			},
			open() {
				this.$mask.style.display = 'block';
				this.$isOpen = true;
			},
			toggle() {
				if (this.$isOpen) {
					this.close();
				} else {
					this.open();
				}
			},
			$updateDOM(type, content) {
				console.log(content)
				if (!!content.nodeType) {
					// clear chilNodes 
					let tmpNode = this[type];
					let emptyNode = tmpNode.cloneNode(false);
					tmpNode.parentNode.replaceChild(emptyNode.appendChild(content), tmpNode);
					// append node
				} else if (typeof content === 'string') {
					this[type].textContent = content;
				} else {
					console.error('some error');
				}
			}
		};
	}
	function Dialog(content, header, footer) {
		if (!instance) {
			init();
		}
		header && instance.$updateDOM('$header', header)
		content && instance.$updateDOM('$content', content)
		footer && instance.$updateDOM('$footer', footer)
		return instance;
	}
	return Dialog;
}());

// Dialog().open() 也可以这样调用
let newEl = document.createElement('div');
newEl.innerHTML = 'hhhh';
let myDialog = new Dialog(newEl, 'header', 'footer');

document.getElementsByClassName('dialog-btn')[0].addEventListener('click', function() {
	console.log('here');
	myDialog.toggle();
});