
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Ecom", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.log(`Connection successful with database`);
}).catch((e) => {
    console.log(`Error connecting to MongoDB: ${e.message}`);
});

module.exports = mongoose.connection;
