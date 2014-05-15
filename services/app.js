var express = require( 'express' );
var app = express();
var mongojs = require("mongojs");

app.use('/liber', express.static(__dirname + '/../app/'));
app.use( express.bodyParser() );

var db = initializeDb();
var ContentService = require( './ContentService.js' );
var contentService = new ContentService(db, mongojs);

function initializeDb() {
	var databaseUrl = "liber"; // "username:password@example.com/mydb"
	var collections = ["content"]
	return mongojs.connect(databaseUrl, collections);	
}

app.get('/api/content', contentService.retrieveContent);
app.get('/api/content/:id', contentService.retrieveContentById);
app.post('/api/content', contentService.saveContent);

var server = app.listen( 8080 );
server.on( 'listening', function() {
	console.log( "Listening on port " + server.address().port );
});
