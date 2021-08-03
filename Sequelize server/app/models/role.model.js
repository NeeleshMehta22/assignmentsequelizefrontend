const { user } = require("../config/db.config");
module.exports = (sequelize,Sequelize)=>{
    const Role = sequelize.define('role',{
        rname:{
            type:Sequelize.STRING,
        },
        rkey:{
            type:Sequelize.INTEGER
        },
        description:{
            type:Sequelize.STRING
        },

    });

    return Role;
}