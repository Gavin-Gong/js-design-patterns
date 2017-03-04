function Event() {
	this.eventList = [];
}

Event.prototype.on = function(eventName, cb) {
	this.eventList[eventName] = cb;
}

Event.prototype.emit = function(eventName, ...args) {
	this.eventList[eventName] ? this.eventList[eventName](...args) : ''
}

Event.prototype.off = function(eventName, ...args) {
	delete this.eventList[eventName];
}
module.exports = Event;