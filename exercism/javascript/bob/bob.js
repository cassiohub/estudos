var Bob = function() {
	this.answer = {
		"question": "Sure.",
		"yelling": "Whoa, chill out!",
		"call": "Fine. Be that way!",
		"default": "Whatever."
	}
};

Bob.prototype.hey = function(input) {
	var q = /[?]$/g;
	var y = /[A-Z]{1,}[\d!?]*$/g;
	var pat = /[a-z][.!\s]*$/g;
	if(input.trim().length) {
		if (y.test(input)) {
			inputType = "yelling";
		}
		else if (q.test(input)) {
			inputType = "question";	
		}
		else {
			inputType = "default";
		}
	}
	else {
		inputType = "call";
	}
	return this.answer[inputType];
};

module.exports = Bob;