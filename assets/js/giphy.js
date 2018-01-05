// Initial array
var topics=["Animals", "Plants", "Micheal Jordan"];

// Function for displaying GIPHY
function renderButtons() {

    $("#giphy-view").empty();

    for (var i = 0; i < topics.length; i++) {

        var a = $("<button>");
        a.addClass("giphy");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#giphy-view").append(a);
        }
}

// This function handles events where one button is clicked
$("#add-giphy").on("click", function(event) {

        event.preventDefault();
        var topic = $("#giphy-input").val().trim();
        topics.push(topic);
        renderButtons();    
});

renderButtons();

