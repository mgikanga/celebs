var db = require("../models");
// var app = express();
module.exports = function(app){
   console.log("start here")
    app.get("/api/popularity", function(req, res){
// var query = {};
// if(req.query.celeb_id){
    // query.CelebId = 2
// }
db.Popularity.findAll({
    // where: {
    //         id: 1
    //       },
    // include:db.Celeb
}).then(function(dbPopularity){
   res.json(dbPopularity);

 

    
})

    })
}