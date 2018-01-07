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

function searchGifs(term) {
	var searched = "";
	
	var searchURL = "https://api.giphy.com/v1/gifs/search?&q=" + term + "&limit=20&offset=0&rating="+searched+"&lang=en&api_key=" + apiKey;

	$.ajax({
		url: searchURL,
		method: "GET"
	}).done(function(response) {
		for(i = 0; i < 10; i++) {
			var rating = response.data[i].rating;
			var urlThumb = response.data[i].images.original.url;
			var urlStill = response.data[i].images.original_still.url;
			var beginDiv = $("<div class='added-gifs'>");
			var img = "<img class='gif' data-moving='" + urlThumb + "' src='" + urlStill + "'>";
			var rate = "<p>Rating: " + rating.toUpperCase() + "</p>";
			beginDiv.append(rate,img);
			$(".gif-view").append(beginDiv);
		}
	});
};

$(".gif-view").on("click", ".gif", function() {
	var temp = $(this).attr("data-moving");
	var current = $(this).attr("src");
	$(this).attr("src", temp);
	$(this).attr("data-moving", current);
})

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