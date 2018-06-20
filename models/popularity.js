module.exports = function(sequelize, DataTypes) {
    var Popularity = sequelize.define("Popularity", {
      
     
      account_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      }
    }, {
      timestamps: false,
    });
  
    Popularity.associate = function(models) {
      // We're saying that a Popularity should belong to an Author
      // A Popularity can't be created without an Celeb due to the foreign key constraint
      Popularity.belongsTo(models.Celeb, {
        foreignKey: {
          name:"CelebId",
          allowNull: true
        }
      });
    };
  
    return Popularity;
  };

  // module.exports = Popularity;
  // Export the model and set it equal to a variable when taking the response from api to put into database. 