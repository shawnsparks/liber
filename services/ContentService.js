module.exports = function(db, mongojs) {
	var self = this;
	
	self.retrieveContent = function(request, response) {
		db.content.find(function(err, content) {
			response.send(content);
		});
	}
	
	self.retrieveContentById = function(request, response) {
		db.content.findOne(
			{ _id: mongojs.ObjectId( request.params.id ) }, 
			function(err, content) {
				response.send(content);
			}
		);
	}
	
	self.saveContent = function(request, response) {
		var data = {
				"name": "Blah",
				"author": "Shawn"
		};
		db.content.save( data, function( err, saved ) {
			response.send(saved);
		} );
	}
};