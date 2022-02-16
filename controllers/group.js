const Group = require("../models/Group")

exports.create = (req, res) =>{
    const group = new Group(req.body)
    group.save((err, data)=>{
        if (err){
            return res.status(400).json({
                error:err
            })
        }
        res.json({data})
    })
}

exports.getGroups = (req, res) =>{
    Group.find().exec((err, data)=>{
        if (err){
            return res.status(400).json(err)
        }
        res.status(200).json(data)
    })
}