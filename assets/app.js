$("#findAnimal").on("click", function (event) {
    event.preventDefault();
    var animal = $("#animalInput").val();
    // $("#buttons").append("<button>" + animal);
    var newAnimal = $("<button>" + animal);
    newAnimal.attr("data-animal", animal);
    $("#buttons").append(newAnimal);
});

$("button").on("click", function () {

    $("#images").empty();

    var animalData = $(this).attr("data-animal");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animalData + "&api_key=H5vfvCtH5aqSgcmie5YyMhWlc0NgvAYe&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;

        // Looping over every result item
        for (var i = 0; i < results.length; i++) {

            // Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                // Creating a div for the gif
                var gifDiv = $("<div>");

                // Storing the result item's rating
                var rating = results[i].rating;

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + rating);

                // Creating an image tag
                var animalImage = $("<img>");

                // Giving the image tag an src attribute of a proprty pulled off the
                // result item
                animalImage.attr("src", results[i].images.fixed_height.url);

                // Appending the paragraph and personImage we created to the "gifDiv" div we created
                gifDiv.append(p);
                gifDiv.append(animalImage);

                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                $("#images").prepend(gifDiv);
            }
        }
    })
});


