function TagForm( name, parent, path ) {
	var self = this;
	self.name = ko.observable( name );
	self.parent = ko.observable( parent );
	self.path = ko.observable( path );
}

function ArticleForm( name, content, tags ) {
	var self = this;
	self.name = ko.observable( name );
	self.content = ko.observable( content );
	self.tags = ko.observableArray( tags );
	
	self.addTag = function() {
//		self.tags.push( new TagForm( null, null, "test" ) );
		self.tags.push( { path: "test" } );
	};
}

function TagViewModel() {
	var self = this;
	
	self.tagForm = new TagForm( "", null );
	self.tags = ko.observableArray( [] );
	self.successfulTagAlerts = ko.observableArray( [] );
	self.articleForm = new ArticleForm( "", "", [] );
	self.articles = ko.observableArray( [] );
	
	self.chosenTag = ko.observable();
	self.tagHierarchy = ko.observableArray( buildTagHierarchy() );
	
	self.goToTag = function( tag ) {
		var url = "/liber-services/tags/" + tag.id;
		var articlesUrl = "/liber-services/tags/" + tag.id + "/articles";
		$.getJSON( url, 
					function( tag ) { 
						self.tags( tag.childTags );
						self.tagHierarchy( buildTagHierarchy( tag ) );
						self.tagForm.parent( tag.id );
						$.getJSON( articlesUrl, self.articles );
					} );
	};
	
	self.goToArticle = function( article ) {
		alert( article.name );
	};
	
	self.createTag = function() {
		var tag = { name: self.tagForm.name(), parent: self.tagForm.parent() };
		$.ajax(
			{
				url: "/liber-services/tags", 
				type: "POST", 
				data: tag, 
				success: function( tag ) { 
					self.tags.push( tag );
					self.successfulTagAlerts.push( tag );
				}
			}
		);
	};
	
	self.createArticle = function() {
		var article = { 
			name: self.articleForm.name(), 
			content: self.articleForm.content(), 
			tags: $.map( self.articleForm.tags(), function( tag ) { return tag.path; } )
//			tags: ["/Test Tag", "/Test Tag 2"]
		};
//		for( var i = 0; i < self.articleForm.tags().length; i++ ) {
//			article.tags.push( self.articleForm.tags()[i].path );
//		}
//		$.ajax(
//			{
//				url: "/liber-services/articles", 
//				type: "POST", 
//				data: article, 
//				success: function( article ) {
//					alert( "article saved!" );
//				}
//			}
//		);
//		$.post( "/liber-services/articles", 
//				article, 
//				function( article ) { alert( "article saved!" ); }, 
//				'json' );
		$.ajax(
			{
				url: "/liber-services/articles", 
				type: "POST", 
				data: JSON.stringify( article ), 
//				data: article, 
				success: function( article ) {
					alert( "article saved!" );
				}, 
//				dataType: "json", 
				contentType: "application/json"
			}
		);
	};
	
	self.goToTag( { id: 1 } );
}


$(document).ready(
	function() {
		ko.applyBindings( new TagViewModel() );
		tinymce.init( { selector: 'textarea' } );
	}
);

function buildTagHierarchy( tag ) {
	var hierarchy = [];
	var currentTag = tag;
	while( currentTag != null ) {
		hierarchy.unshift( currentTag );
		currentTag = currentTag.parent;
	}
	return hierarchy;
}

function getLink( object, relationship ) {
	for( var i = 0; i < object.links.length; i++ ) {
		if( object.links[i].relationship == relationship ) {
			return object.links[i].url;
		}
	}
}