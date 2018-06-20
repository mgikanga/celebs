require("dotenv").config();
var db = require("./models");
var keys = require("./keys.js")
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
//var name;
/*
var wiki = require('wikijs').default;
   wiki().page('List of most-followed Instagram accounts').then(page => page.summary()).then(console.log);
 */
 function myInst() {
var request = require("request");
var person =["selenagomez","katyperry","justinbieber"] ;
for(var i = 0; i<person.length;i++){
request({
    
    url: 'https://www.instagram.com/web/search/topsearch/?query=' + person[i],
    json: true
}, function (error, response, body) {
    var followers = body.users[0].user.follower_count;
    var name = body.users[0].user.full_name;
    
    db.Popularity.create({
        name: name,
        account_type: "INSTAGRAM",
        count: followers
    })
        .then(function (results) {
            console.log("THIS IS IMPORTANT", results)
        })
        db.Celeb.create({
            name: name
        }).then(function (results) {
            console.log("THIS IS IMPORTANT", results)
           
        });
    console.log("LOOK AT ME NOW", followers);
    console.log("I'M GETTIN PAPER", name);
});
}

 }

//function for twitter to display 20 tweets
 function myTweets() {
    var person =["selenagomez","katyperry","justinbieber"] ;
    for(var i = 0; i<person.length;i++){
//  variable to store my parameters
var params = { screen_name: person[i], count: 1 };

client.get('statuses/user_timeline', params, function (error, tweets, response) {

    if (!error) {
        //display the whole tweet body from the response
        console.log(tweets);

        //return only the tweets and time created by disecting the tweets
        var all = tweets;
        for (var i = 0; i < all.length; i++) {
            var output = "\nMessage: " + all[i].text + "\nTime: " + all[i].created_at + "\nFollow: " + all[i].user.followers_count + "\n: " + all[i].user.name;
            // console.log("KP", output);
            var name = all[i].user.name;
            var followers = all[i].user.followers_count;
            console.log("KP followers = ",followers );
            console.log("KP name = ", name);
            
            // If the code experiences any errors it will log the error to the console
            
            db.Popularity.create({
                account_type: "TWITTER",
                count: followers
            })
                .then(function (results) {
                    console.log("THIS IS IMPORTANT", results)
                })
                db.Celeb.create({
                name: name
            }).then(function (results) {
                console.log("THIS IS IMPORTANT", results)
               
            });
            
            if (error) {
                return console.log(error);
            }
        }
    }
    //display error if it occurs
    console.log(error);
});
 }
 };


// db.Celeb.create({
//     name: name
// }).then(function (results) {
//     console.log("THIS IS IMPORTANT", results)
   
// });

 myTweets();
 myInst();