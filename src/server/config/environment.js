module.exports = {

    // MongoDB connection options
    mongo: {
        uri: 'mongodb://localhost/rr-jpa',
        options: {
            db: {
                safe: true,
            },
            user: 'rolandogarciam',
            pass: 'roly980218'
        }
    },

    // Seed database on startup
    seedDB: false

}