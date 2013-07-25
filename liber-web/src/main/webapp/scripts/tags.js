$(document).ready(
	function() {
		$( "button[name='createTag']").click( submitCreateTagForm );
	}
);

function submitCreateTagForm() {
	var form = $( "form[name='createTag']" );
	var name = form.find( "input[name='name']" ).val();
	var parent = form.find( "input[name='parent']" ).val();
	var tag = { name: name, parent: parent };
	$.ajax(
		{
			url: "/liber-services/tags", 
			type: "POST", 
			data: tag, 
			success: displayCreateTagFormSubmissionResult
		}
	);
	return false;
}

function displayCreateTagFormSubmissionResult( data ) {
	var tag = JSON.parse( data );
	$(".modal-body").prepend( 
			"<div class='alert alert-success'>" + 
			"<p>Tag created successfully! View <a href='/liber-web/tags/" + tag.id + "'>" + 
			tag.name + "</a></p></div>" );
}