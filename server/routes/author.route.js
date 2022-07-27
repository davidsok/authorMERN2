const AuthorController = require("../controllers/author.controller");

//Routes that go to controller 
module.exports = app => {
    //Get all- Get
    app.get("/api/author", AuthorController.getAllAuthor);

    //Create new- Post
    app.post("/api/author", AuthorController.createNewAuthor);

    //Get one- Get
    app.get("/api/author/:id", AuthorController.findOneAuthor);

    //Update- Put
    app.put("/api/author/:id", AuthorController.updateOneAuthor);

    //Delete- post
    app.delete("/api/author/:id", AuthorController.deleteOneAuthor);
};
