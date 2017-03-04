let Dialog = (function() {
	let instance = null;
	function init() {
		let maskEle = document.createElement('div');
		maskEle.classList.add('show-dialog', 'dialog');
		console.log(maskEle);
		document.body.appendChild(maskEle);
		return {
			
		}
	}
	function Dialog(isShow, title, content) {
		if (!instance) {
			init();
			instance = true
		}
	}
	return Dialog;
}());

Dialog(true, 'title', 'content');

Dialog.open('title', 'content');
Dialog.close();