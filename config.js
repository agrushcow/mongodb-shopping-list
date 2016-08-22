//exports.DATABASE_URL = process.env.DATABASE_URL || 
exports.DATABASE_URL = 'mongodb:mongodb://agrushcow:Tottigoal4527@ds035603.mlab.com:35603/mongo-shopping-list';
                       //global.DATABASE_URL ||
                       //(process.env.NODE_ENV === 'production' ?
                            //'mongodb:mongodb://agrushcow:Tottigoal4527@ds035603.mlab.com:35603/mongo-shopping-list'
                            //'mongodb://localhost/shopping-list' :
                            //'mongodb://localhost/shopping-list-dev');
exports.PORT = process.env.PORT || 8080;