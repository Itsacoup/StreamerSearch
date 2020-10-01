// 
function deferVideo() {

    //defer html5 video loading
  $("video source").each(function() {
    var sourceFile = $(this).attr("data-src");
    $(this).attr("src", sourceFile);
    var video = this.parentElement;
    video.load();
    // uncomment if video is not autoplay
    //video.play();
  });

}
window.onload = deferVideo;

$("#gameGo").click(function () {
    var title = $("#title").val();
    var platform =  $(".platforms option:selected").val()
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://chicken-coop.p.rapidapi.com/games/" + title + "?platform=" + platform,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
            "x-rapidapi-key": "6d516cdd9emshc157afd8ba21176p172510jsne773e6df5ba8"
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
        var allPlatforms = response.result.alsoAvailableOn;
        var gameDescription = response.result.description;
        var developer = response.result.developer;
        var genre = response.result.genre;
        var gamePoster = response.result.image;
        var publisher = response.result.publisher;
        var rating = response.result.rating;
        var releaseDate = response.result.releaseDate;
        var score = response.result.score;
        var title = response.result.title;
        console.log(title);
        console.log(platform);
        console.log(allPlatforms);
        console.log(gameDescription);
        console.log(developer);
        console.log(genre);
        console.log(gamePoster);
        console.log(publisher);
        console.log(rating);
        console.log(releaseDate);
        console.log(score);
        console.log(title);
    });
});


// chicken coop call to populate div with game info

// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://chicken-coop.p.rapidapi.com/games/%7Btitle%7D?platform=pc",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "chicken-coop.p.rapidapi.com",
// 		"x-rapidapi-key": "b75a872523mshbef728986213b9fp1cd6dfjsnf2a7bc957900"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });