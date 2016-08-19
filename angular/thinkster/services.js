angular.module("app", []);

angular.module("app")

.factory("messagesService", function() {
	var messages = {};
	messages.list = [];

	messages.add = function(message) {
		messages.list.push({id: messages.list.length, text: message});
	}
	return messages;

})
.controller("ListCtrl", function(messagesService) {
	var self = this;
	self.messages = messagesService.list;

})
.controller("PostCtrl", function(messagesService) {
	var self = this;

	self.addMessage = function(newMessage) {
		messagesService.add(newMessage);
		self.newMessage = "";
	}
	
});