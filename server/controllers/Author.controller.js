const Author = require("../models/Author.models")

// create 
// module.exports.createAuthor = (req, res) => {
//     Author.create(req.body)
//     .then(newAuthor => res.json(newAuthor))
//     .catch(errors => res.status(400).json(errors))
// }

module.exports.createAuthor = (req, res) => {
    Author.exists({name: req.body.name})
    .then(authorExists => {
        if(authorExists){
            return Promise.reject({
                errors: { "duplicate" : {"message" : "Author already exists"}}
            })
        }
        else{
            const author = new Author(req.body)
            return author.save()
        }
    })
    .then(newAuthor => res.json(newAuthor))
    .catch(errors => res.status(400).json(errors))
}


// read all
module.exports.allAuthors = (req, res) =>{
    Author.find()
    .then(allAuthors => res.json(allAuthors))
    .catch(errors => res.json(errors))
}
// read one
module.exports.oneAuthor = (req, res) =>{
    Author.findOne({_id: req.params.author_id})
    .then(oneAuthor => res.json(oneAuthor))
    .catch(errors => res.json(errors))
}

// update
module.exports.updateAuthor = (req, res) =>{
    Author.findByIdAndUpdate({_id: req.params.author_id}, req.body, {new:true, runValidators:true})
    .then(updatedAuthor => res.json(updatedAuthor))
    .catch(errors => res.status(400).json(errors))
}
// delete
module.exports.deleteAuthor = (req, res) =>{
    Author.deleteOne({_id: req.params.author_id})
    .then(confirmation => res.json(confirmation))
    .catch(errors => res.json(errors))
}