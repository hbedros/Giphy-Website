$(document).ready(function() {

	var apiKey = "VIvKkSXo8xC1ToYPqP79xwaAIYt9Aaje";
	var topics =["Gangam Style",
				"Double Rainbow",
				"Scumbag Steve", 
				"The Most Interesting Man In The World",
				"Kyle Craven", 
				"Success Kid", 
				"Doge",
				"Grumpy Cat",
				"Lolcat"];

	function renderButtons(){
		for (i in topics) {
			$(".options").append("<button type='button' class='searchTerms' id='"+topics[i]+"'>"+topics[i]+"</button>");
		};
	};

//

//

$("#add-gif").on("click", function(event) {
    event.preventDefault();

    var input = $("#gif-input").val().trim();
    if (input !== ""){
        topics.push(input);
        $(".options").empty();
        $('#gif-input').val("");
        renderButtons();

    }
});

	$(".options").on("click",".searchTerms", function() {
		$(".gif-view").empty();
		var searchWord = $(this).attr("id");

		searchGifs(searchWord);
	});
	renderButtons();
});