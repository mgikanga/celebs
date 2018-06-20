 var db = require("../models");

//     module.exports = function(app) {
//         // app.get("/api/celebs", function(req, res) {
//           // Here we add an "include" property to our options in our findAll query
//           // We set the value to an array of the models we want to include in a left outer join
//           // In this case, just db.Post
//           db.Celeb.findAll({
//             // where: {
//             //     id: 1
//             //   },
//             include: db.Popularity
//           }).then(function(dbCeleb) {
//             // res.json(dbCeleb);
//             console.log("from celeb",dbCeleb)
//           });
//         // });
//         db.Popularity.findAll({
//           // where: {
//           //     id: 1
//           //   },
//           // include: db.Popularity
//         }).then(function(dbPop) {
//           // res.json(dbCeleb);
//           console.log("from pop",dbPop)
//         });
        
//  }
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/celebs", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Celeb.findAll({include: db.Popularity}).then(function(dbCeleb) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbCeleb);
    });
  });

}
