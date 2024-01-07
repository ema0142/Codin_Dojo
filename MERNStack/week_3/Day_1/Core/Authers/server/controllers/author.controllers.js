const Author = require("../models/author.model");

// READ ALL
module.exports.findAllAuthor = (req, res) => {
  Author.find()
    .then((authors) => {
      res.json(authors);
    })
    .catch((err) => res.json(err));
};

// READ ONE BY ID
module.exports.findOneAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((oneAuthor) => {
      res.json(oneAuthor);
    })
    .catch((err) => res.json(err));
};

// CREATE
module.exports.createNewAuthor = (req, res) => {
  Author.create(req.body)
    .then((newlyCreatedAuthor) => {
      res.json(newlyCreatedAuthor);
    })
    .catch((err) => res.status(400).json(err));
};

// UPDATE
module.exports.updateExistingAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedAuthor) => {
      res.json(updatedAuthor);
    })
    .catch((err) => res.status(400).json(err));
};

// DELETE
module.exports.deleteOneAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.json(err));
};
