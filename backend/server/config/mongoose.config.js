const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/march_2022_sundaes",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(()=>console.log("Connected to the database"))
.catch(err=>console.log("Database connection failed", err))