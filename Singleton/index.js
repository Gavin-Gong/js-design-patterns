// 只实例化一次
// 实例不存在 -> 创建新实例
// 实例存在 -> 保返回该实例

let Singleton = (function() {
	let instance;
	function init() {
		// do something
		return {
			name: 'gg',
		};
	}
	return {
		getInstance() {
			if (instance) {
				return instance;
			} else {
				instance = init();
				return instance;
			}
		}
	}
}())

let SingletonA = Singleton.getInstance();
let SingletonB = Singleton.getInstance();

console.log(SingletonA === SingletonB);
