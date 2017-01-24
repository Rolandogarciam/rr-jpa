module.exports = {

    // MongoDB connection options
    mongo: {
        uri: 'mongodb://localhost/rr-jpa',
        options: {
            db: {
                safe: true,
            },
        }
    },

    // Seed database on startup
    seedDB: false

}