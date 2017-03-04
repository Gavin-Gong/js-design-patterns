let Event = require('./event.js');


function Observer(data) {
	this.data = data;
	this.eventBus = new Event();
	this.walk(data);
}

Observer.prototype.walk = function(obj) {
  let val;
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          val = obj[key];
          if (typeof val === 'object') {
              new Observer(val);
          }
          this.convert(key, val);
      }
  }	
}
Observer.prototype.convert = function(key, val) {
	let _this = this;
	Object.defineProperty(this.data, key, {
	  enumerable: true,
	  configurable: true,			
		get() {
			console.log('你访问了', key, val);
			return val;
		},
		set(newVal) {
			console.log('set new value: ', newVal);
			
			_this.eventBus.emit(key, newVal, val);
      if(typeof val === 'object'){
        new Observer(val);
      }
			if (newVal === val) return;
			val = newVal;
		}
	});
}
Observer.prototype.$watch = function(event, cb) {
	this.eventBus.on(event, cb);
}
Observer.prototype.$set = function(key, val) {
	this.data[key] = val;
	this.convert(key, val);
}


let app = new Observer({name: 'Oberserver', parttern: 'Oberserver', list: {
	name: 'gg',
}});
// console.log(app.data.name);
// console.log(app.data.list.name);
// let kk = app.data.list.name;
// app.data.name = 'new name';
app.$set('list', {name: 'gg', age: {name: 'ff'}});
app.$watch('list.name', (newVal, oldVal) => {
	console.log('new', newVal);
	console.log('old', oldVal);
})
app.data.list = {name: 'aa'};
// console.log(app.data.name);