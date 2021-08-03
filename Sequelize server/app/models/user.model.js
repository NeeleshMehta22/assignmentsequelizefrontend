const { user } = require("../config/db.config");

module.exports = (sequelize,Sequelize)=>{
    const User = sequelize.define('user',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        firstname:{
            type:Sequelize.STRING
        },
        middlename:{
            type:Sequelize.STRING
        },
        lastname:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        },
        phonenumber:{
           type:Sequelize.STRING
        },
        role:{
            type:Sequelize.STRING
        },
        address:{
            type:Sequelize.STRING
        }
    });

    User.associate= models =>{
        User.hasOne(models.customer.model,{
            onDelete: 'cascade' 
        });
    }


    

    return User;
}