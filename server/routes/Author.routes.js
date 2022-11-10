const AuthorController = require("../controllers/Author.controller")

module.exports = app => {
    //create
    app.post("/api/new/author", AuthorController.createAuthor)
    // read all
    app.get("/api/authors", AuthorController.allAuthors)
    // read one
    app.get("/api/authors/:author_id", AuthorController.oneAuthor)
    //update
    app.put("/api/authors/:author_id", AuthorController.updateAuthor)
    //delete
    app.delete("/api/authors/:author_id", AuthorController.deleteAuthor)
}