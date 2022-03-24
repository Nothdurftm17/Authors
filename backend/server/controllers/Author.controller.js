const Author = require("../models/Author.model")

module.exports.findAll = (req,res) => {
    Author.find({})
    .then(results => res.json(results))
    .catch(err=> res.status(400).json({message: "Did not work!", err}))
}
module.exports.create = (req,res) => {
    Author.create(req.body)
    .then(results => res.json(results))
    .catch(err=> res.status(400).json({message: "Did not work!", err}))
}

module.exports.findOne = (req, res) => {
    Author.findOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "Did not work", err}))
}

module.exports.updateOne = (req, res) => {
    Author.updateOne({_id: req.params._id}, req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "Did not work", err}))
}
module.exports.deleteOne = (req,res) => {
    Author.deleteOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err=> res.status(400).json({message: "Did not work!", err}))
}