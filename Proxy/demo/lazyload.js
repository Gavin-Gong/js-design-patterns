const imgurl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489833808&di=cee37350fa40b5122dc128342cdae789&imgtype=jpg&er=1&src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0914%2F15e97a73ea730dda06c66244b62b652f.jpg';
const loadurl = "http://i2.hdslb.com/bfs/archive/62216a4fdbb36ae16f5a0cd7d2f4bf49ae9b62da.jpg";

// document.body.scrollTop 滚动距离
// document.body.scrollHeight 滚动元素的高度
// document.documentElement.clientHeight 视口高度
window.onscroll = function(e) {
	console.log(toBottom());
	if (!toBottom()) {
		// (new ListImage()).setSrc(imgurl); // 普通用法, 与代理模式用法应当保持一致
		(new ImageProxy(imgurl)).setSrc(imgurl);
	}
}

// 计算元素距离底部的距离
function toBottom() {
	let eleHeight = document.body.scrollHeight;
	let viewportHeight = document.documentElement.clientHeight;
	let scrollHeight = document.body.scrollTop;
	return eleHeight - viewportHeight - scrollHeight;
}

// 追加列表元素
function appendList() {
	let listItem = document.createElement('li');
	let list = document.querySelector('.scroll-list');
	list.appendChild(listItem);
}

function ListImage() {
	let imgNode = new Image();
	let list = document.querySelector('.scroll-list');
	list.appendChild(imgNode);

	return {
		setSrc(src) {
			imgNode.src = src;
		}
	}
}

// 代理ListImage
function ImageProxy() {
	let tmpImage = new Image(); //加载图片, 完成后将url设置到DOM中
	let domImage = new ListImage();

	tmpImage.onload = function() {
		domImage.setSrc(this.src);
	};
	this.setSrc = function(src) {
		domImage.setSrc(loadurl); // 设置loading 图
		tmpImage.src = src; // 设置真实图片
	}
}


// TODO: 节流函数, 防抖函数