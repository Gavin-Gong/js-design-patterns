// 功能函数
let events = {
	save() {
		console.log('saved');
	},
};

function Editor() {
	commandList = [];

	return {
		execute(command) {
			command();
			commandList.push(command);
		},
		undo() {
			commandList.pop();

			let len = commandList.length;
			if (len > 0 && commandList[len - 1]) {
				commandList[len - 1]();
			}
		},
	};
}

let editor = new Editor();
// editor.execute('save');
// editor.undo();

let saveBtn = document.querySelector('.save-btn');
let undoBtn = document.querySelector('.undo-btn');

saveBtn.onclick = function() {
	editor.execute(events.save);
};
undoBtn.onclick = editor.undo;
