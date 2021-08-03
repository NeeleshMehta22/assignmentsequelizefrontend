const { user } = require("../config/db.config");

module.exports = (sequelize,Sequelize)=>{
    const Customer = sequelize.define('customer',{
        cname:{
            type:Sequelize.STRING,
        },
        website:{
            type:Sequelize.STRING
        },
        address:{
            type:Sequelize.STRING
        },
        user_id:{
            type:Sequelize.STRING
        },
        
    });

    // user.associate = models=>{

    //     Customer.belongsTo(models.user.model,{
    //         foreignKey:{
    //             allowNull:false
    //         }
    //     });

    // }

    return Customer;
}