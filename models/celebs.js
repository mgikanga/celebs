
module.exports = function(sequelize, DataTypes) {
    var Celeb = sequelize.define("Celeb", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING
    }, {
      timestamps: false,
    });
  
    Celeb.associate = function(models) {
      // Associating celebs with popularity
      // When an celeb is deleted, also delete any associated Popularity
      Celeb.hasMany(models.Popularity, {
        onDelete: "cascade"
      });
    };
  
    return Celeb;
  };

  // module.exports = Celeb;
  // Export the model and set it equal to a variable when taking the response from api to put into database. 