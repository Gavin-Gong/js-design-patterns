// 功能函数
let events = {
	save() {
		console.log('saved');
	},
	undo() {
		console.log('undo');
	}
};

let saveCmd = function(recv) {
	this.recv = recv;
};
saveCmd.prototype.execute = function() {
	this.recv.save();
};

let undoCmd = function(recv) {
	this.recv = recv;
};
undoCmd.prototype.execute = function() {
	this.recv.undo();
};

function setCommand(button, command) {
	button.onclick = function() {
		command.execute();
	};
}

 let saveBtn = document.querySelector('.save-btn');
 setCommand(saveBtn, new saveCmd(events));

 // 感觉很傻逼 这样的写法
