//Import models
const { find } = require("../models/author.model");
const Author = require("../models/author.model");
//Send from Express with function

//GET/FIND ALL 
module.exports.getAllAuthor = (req, res) => {
//Promise function/Route capability 
    Author.find()
        //then success: get all authors
        .then((allAuthor) => res.json(allAuthor))
        //catch errors 
        .catch((err) => {
            res.status(400).json({ message: 'There is an error finding all', error: err})
});}

//CREATE NEW
module.exports.createNewAuthor = (req, res) => {
    //const {name} = req.body
    console.log(req.body)
    Author.create(req.body)
    .then(brandNewAuthor => res.json(brandNewAuthor))
    .catch((err) => {
        res.status(400).json({ message: 'There is an error creating a new Author', error: err})
});}

//GET ONE/BY ID
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id}) 
    .then(findOneAuthor => {
        console.log(findOneAuthor)
        if (!findOneAuthor) {
            res.status(400).json({ message: 'Find one Author came back as null'})
        }
        else{ res.json(findOneAuthor)
        }
    })
    .catch((err) => {
        console.log("I messed up")
        res.status(400).json({ message: 'There is an error finding one', error: err})
});}

//UPDATE
module.exports.updateOneAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updateAuthor => {
            res.json({ author: updateAuthor, message:'Author updated successfully' })
        })
        .catch((err) => {
            res.status(400).json({ message: 'There is an error updating this Author', error: err })
        });}

//DELETE
module.exports.deleteOneAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
    .then(result => {
        res.json({ result: result})
    })
    .catch((err) => {
        res.status(400).json({ message: 'There is an error in the deleting of this Author', error: err})
    });}