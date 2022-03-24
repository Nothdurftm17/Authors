const AuthorController = require("../controllers/Author.controller")

module.exports = app => {

    app.get("/api/authors/findAll", AuthorController.findAll);

    app.post("/api/authors/create", AuthorController.create);

    app.get("/api/authors/:_id", AuthorController.findOne);

    app.patch("/api/authors/update/:_id", AuthorController.updateOne);

    app.delete("/api/authors/:_id", AuthorController.deleteOne);

}