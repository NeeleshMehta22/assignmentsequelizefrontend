const env = {
    database: 'Database1',
    username:'postgres',
    password:'Dinu1099@',
    hos:'localhost',
    dialect: 'postgres',

    pool:{
        max:8,
        min:0,
        acquire:30000,
        idle:10000
    }

};

module.exports = env