const Manager = require("./manager.model");

module.exports.findAllManager = (req, res) => {
    Manager.find()
        .then((managers) => {
            res.json(managers);
        })
        .catch((err) => res.json(err));
};

module.exports.findOneManager = (req, res) => {
    Manager.findOne({ _id: req.params.id })
        .then((oneManager) => {
            res.json(oneManager);
        })
        .catch((err) => res.json(err));
};

module.exports.createNewManager = (req, res) => {
    Manager.create(req.body)
        .then((newlyCreatedManager) => {
            res.json(newlyCreatedManager);
        })
        .catch((err) => res.status(400).json(err));
};

module.exports.updateExistingManager = (req, res) => {
    Manager.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedManager) => {
            res.json(updatedManager);
        })
        .catch((err) => res.status(400).json(err));
};

module.exports.deleteOneManager = (req, res) => {
    Manager.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => res.json(err));
};
