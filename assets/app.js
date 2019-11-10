var gifButtons = ["Shark", "Turtle", "Eel", "Clown Fish", "Stingray", "Octopus",
    "Crab", "Lobster", "Orca", "Seahorse"];


for (i = 0; i < 10; i++) {
    $("#buttons").append("<button class='animals'>" + gifButtons[i]);
}


$(".animals").on("click", function() {

    console.log("pianooo!");

    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var imagesUrl = response.data.image_original_url;
        var catImage = $("<img>");
        catImage.attr("src", imageUrl);
        catImage.attr("alt", "cat image");
        $("#images").prepend(catImage);
        })
});




$("#findAnimal").on("click", function (event) {
    event.preventDefault();
    var animal = $("#animalInput").val();
    gifButtons.push(animal);
    $("#buttons").append("<button class='animals'>" + animal);
});

