const AuthorController = require("../controllers/author.controllers");

module.exports = (app) => {
  app.get("/api/authors", AuthorController.findAllAuthor);
  app.post("/api/authors", AuthorController.createNewAuthor);
  app.get("/api/authors/:id", AuthorController.findOneAuthor);
  app.patch("/api/authors/:id", AuthorController.updateExistingAuthor);
  app.delete("/api/authors/:id", AuthorController.deleteOneAuthor);
};
