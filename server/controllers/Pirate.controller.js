const Pirate = require("../models/Pirate.models")

module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
    .then(newPirate => res.json(newPirate))
    .catch(errors => res.status(400).json(errors))
}

// module.exports.createPirate = (req, res) => {
//     Pirate.exists({position: "Captain"})
//     .then(pirateExists => {
//         if(pirateExists){
//             return Promise.reject({
//                 errors: { "duplicate" : {"message" : "Theres only 1 captain!"}}
//             })
//         }
//         else{
//             const pirate = new Pirate(req.body)
//             return pirate.save()
//         }
//     })
//     .then(newPirate => res.json(newPirate))
//     .catch(errors => res.status(400).json(errors))
// }


// read all
module.exports.allPirates = (req, res) =>{
    Pirate.find()
    .then(allPirates => res.json(allPirates))
    .catch(errors => res.json(errors))
}
// read one
module.exports.onePirate = (req, res) =>{
    Pirate.findOne({_id: req.params.pirate_id})
    .then(onePirate => res.json(onePirate))
    .catch(errors => res.json(errors))
}

// update
module.exports.updatePirate = (req, res) =>{
    Pirate.findByIdAndUpdate({_id: req.params.pirate_id}, req.body, {new:true, runValidators:true})
    .then(updatedPirate => res.json(updatedPirate))
    .catch(errors => res.status(400).json(errors))
}
// delete
module.exports.deletePirate = (req, res) =>{
    Pirate.deleteOne({_id: req.params.pirate_id})
    .then(confirmation => res.json(confirmation))
    .catch(errors => res.json(errors))
}