

function Upload(type) {
	this.type = type;
}

let uploadFactory = (function() {
	let createdFlyweightObjs = {};

	return {
		create(type) {
			// 对内部状态进行管理
			if (createdFlyweightObjs[type]) {
				return createdFlyweightObjs[type]
			}
			return createdFlyweightObjs[type] = new Upload(type);
		}
	};
})();

let uploadManger = (function(){
	let uploadDB = {};

	return {
		add(id, type, name, size) {
			let flyWeightObj = uploadFactory.create(type);

			let uploadListEle = document.querySelector('.upload-list');
			let uploadItemEle = document.createElement('li');
			uploadItemEle.innerHTML = `${name} -> ${size}`;
			uploadListEle.appendChild(uploadItemEle);

			uploadDB[id] = {
				name,
				size,
			};
			return flyWeightObj;
		},
		setExternalState(id, flyWeightObj) {

		},
	};
})()

function startUpload(type, files) {
	let id = 0;
	for (var i = 0; i < files.length; i++) {
		file = files[i];
		uploadManger.add(id++, type, file.name, file.size);
	}
}

startUpload('ajax', [
	{
		name: 'a.js',
		size: '11',
	},
	{
		name: 'b.jd',
		size: '22',
	}
]);
startUpload('flash', [
	{
		name: 'a.js',
		size: '11',
	},
	{
		name: 'b.jd',
		size: '22',
	}
]);
