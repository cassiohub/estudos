Question.findById(id)
	.populate('user', 'displayName')
	.populate('comments')
	.populate('answers')
	.exec(function(err, question) {

		Answer.populate(question, {
			path  : 'answers.comments',
			model : 'Comment',
		}, function(err, question) {
			if (err) return next(err);
			if (!question) return next(new Error('Failed to load Question ' + id));

			Answer.populate(question, {
				path  : 'answers.user',
				model : 'User',
				select: 'displayName'
			}, function(err, question) {
				if (err) return next(err);
				if (!question) return next(new Error('Failed to load Question ' + id));
				req.question = question;
				next();
			});
		});
	});