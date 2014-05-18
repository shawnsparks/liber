module.exports = function( db, mongojs ) {
	var self = this;
	var collection = db.fields;
	
	self.retrieveFieldById = function( id, callback ) {
		collection.findOne( { _id: mongojs.ObjectId( id ) }, callback );
	};
	
}
