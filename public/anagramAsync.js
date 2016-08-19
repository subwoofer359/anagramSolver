/*global $*/
/*global document*/
function submitUrl() {
	"use strict";
	var url = $('#anagram').val(),
		formData = 'anagram=' + url,
		$response = $('#response');
	
	$response.html('');
	
	$.post('./getanagram', formData, function (data) {
	    var myTemplate = window.template({result: data});
		$response.html(myTemplate);
	}).fail(function (data) {
		if (data.responseText) {
		    var message = JSON.parse(data.responseText);
		    if (message.error) {
		        $response.html('<small>' + message.error + '</small>');
		    } else {
		        $response.html('<small>' + data.responseText + '</small>');
		    }
		}
	});
}

function checkInput(input) {
    return inputRegExp.test(input);
}

$(document).ready(function () {
	"use strict";
	var $textbox = $('#anagram');
	$('#searchbox').submit(function (event) {
	    submitUrl();
	    event.preventDefault();
	});
});
