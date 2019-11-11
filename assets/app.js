var animals = ["Shark", "Sea Turtle", "Eel", "Blue Whale", "Stingray",
    "Octopus", "Crab", "Lobster", "Orca", "Seahorse"];

function loadButtons() {
    $("#buttons").empty();
    for (i = 0; i < animals.length; i++) {
        var a = $("<button>");
        a.addClass("animal");
        a.attr("data-animal", animals[i]);
        a.text(animals[i]);
        $("#buttons").append(a);
    }
}

loadButtons();

$("#findAnimal").on("click", function (event) {
    event.preventDefault();
    var a = $("#animalInput").val().trim();
    animals.push(a);
    console.log(animals);
    loadButtons();
});

// $("button").on("click", function () {

function displayGIFS()  {

    $("#images").empty();

    var animalData = $(this).attr("data-animal");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animalData + "&api_key=H5vfvCtH5aqSgcmie5YyMhWlc0NgvAYe&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var gifDiv = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var animalImage = $("<img>");

                animalImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.append(p);
                gifDiv.append(animalImage);

                $("#images").prepend(gifDiv);
            }
        }
    })
}

$(document).on("click", ".animal", displayGIFS);
