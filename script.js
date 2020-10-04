// 
$(document).ready(function () {
    function deferVideo() {

        //defer html5 video loading
        $("video source").each(function () {
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
        var platform = $(".platforms option:selected").val()
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



    $("#streamerGo").click(function () {
        var user = $("#streamer").val();
        var ytKey = "AIzaSyCtzmLHzHyxnc_NwRcHdveY8KUV6mQVqu0";
        var channelUrl = `https://www.googleapis.com/youtube/v3/search?q=${user}&type=channel&key=${ytKey}`;
        


        $.ajax({
            url: channelUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var channel = response.items[0].id.channelId;

            var searchUrl = `https://www.googleapis.com/youtube/v3/search?channelId=${channel}&type=video&eventType=live&videoEmbeddable=true&key=${ytKey}`;

            $.ajax({
                url: searchUrl,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                let vidId = response.items[0].id.videoId;
                $("#vid1").empty();
                $("#vid1").html(`
                <iframe width = "560" height = "315" src = "https://www.youtube.com/embed/${vidId}?autoplay=1" frameborder = "0"
                allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen ></iframe>
                `);
            });


        });
    });

    $("#gameGo").click(function () {
        var game = $("#game").val();
        var ytKey = "AIzaSyCtzmLHzHyxnc_NwRcHdveY8KUV6mQVqu0";
        var findgameUrl = `https://www.googleapis.com/youtube/v3/search?q=${game}&type=video&eventType=live&videoEmbeddable=true&key=${ytKey}`;
        


        $.ajax({
            url: findgameUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            let vidId = response.items[0].id.videoId;
                $("#vid1").empty();
                $("#vid1").html(`
                <iframe width = "560" height = "315" src = "https://www.youtube.com/embed/${vidId}?autoplay=1" frameborder = "0"
                allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen ></iframe>
                `);


        });
    })
});

    // var ytKey = "AIzaSyCtzmLHzHyxnc_NwRcHdveY8KUV6mQVqu0";
    // var channelUrl = "https://www.googleapis.com/youtube/v3/channels";
    // var searchUrl = "https://www.googleapis.com/youtube/v3/search";
    // var user = $("#streamer").val();
    // var channelOptions = {
    //     part: "snippet, contentDetails",
    //     key: ytKey,
    //     maxResults: 5,
    //     forUsername: user,
    // }
    // var searchOptions = {
    //             part: "snippet",
    //             key: ytKey,
    //             type: user,
    //             eventType: "live"
    //         }
    // loadUser();
    // function loadUser() {

    //     $.getJSON(searchUrl, searchOptions, function (data) {
    //         console.log(data);
    //         let theId = data.items[0].id.videoId;
    //             $("#vid1").empty();
    //             $("#vid1").html(`
    //             <iframe width = "560" height = "315" src = "https://www.youtube.com/embed/live_stream?channel=${theId}" frameborder = "0"
    //             allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //             allowfullscreen ></iframe>
    //             `);

    //         // var searchOptions = {
    //         //     part: "snippet",
    //         //     key: ytKey,
    //         //     channelId: theId,
    //         //     eventType: "live",
    //         //     type: "video"
    //         // }

    //         // $.getJSON(searchUrl, searchOptions, function (data2) {
    //         //     console.log(data2);
    //         //     // var channelId = data.items[0].id;
    //         //     // $("#vid1").empty();
    //         //     // $("#vid1").html(`
    //         //     // <iframe width = "560" height = "315" src = "https://www.youtube.com/embed/${channel}" frameborder = "0"
    //         //     // allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //         //     // allowfullscreen ></iframe>
    //         //     // `);

    //         // });
    //     });
    // }



    // loadVideo(searchedlId);
    // function loadVideo(searchedId) {

    //     var searchOptions = {
    //     part: "snippet, contentDetails",
    //     key: ytKey,
    //     channelId: searchedId,
    //     eventType: "live",
    //     type: "video"
    //     }
    //     $.getJSON(searchUrl, searchOptions, function (data) {
    //         console.log(data);
            // var channelId = data.items[0].id;
            // $("#vid1").empty();
            // $("#vid1").html(`
            // <iframe width = "560" height = "315" src = "https://www.youtube.com/embed/${channel}" frameborder = "0"
            // allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen ></iframe>
//             // `);

//         });
//     }




// });
// function mainVid (id) {
//     $("vid el").html(`
//     <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

//     `);
// }   

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