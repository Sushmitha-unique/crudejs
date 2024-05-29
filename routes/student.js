const express = require('express')
const router = express.Router()
const student = require('../model/student.js')
router.get('/', async(req,res)=>{   
    try{
     const studs =  await student.find()
     res.json(studs)
    }
    catch(err){
    res.send("Error "+ err)
    }
})
router.get('/:id', async(req,res)=>{
    try{
     const stud =  await student.findById(req.params.id)
     res.json(stud)
    }
    catch(err){
    res.send("Error "+ err)
    }
})
router.post('/', async (req,res) => {
    const students = new student({
        name:req.body.name,
        branch:req.body.branch,
        college:req.body.college
    })
    try{
        const a1= await students.save()
        res.json(a1)
       }
       catch(err){
       res.send("Error "+ err)
       }
})
router.patch('/:id', async (req,res) => {

    try{
        const stud =  await student.findById(req.params.id)
        stud.name = req.body.name
        const a1= await stud.save() 
        res.json(a1)
       }
       catch(err){
       res.send("Error "+ err)
       }
})
router.delete('/:id', async (req,res) => {

    try{
        const stud =  await student.findById(req.params.id)
        const a1= await student.deleteOne(stud) 
        res.json(a1)
       }
       catch(err){
       res.send("Error "+ err)
       }
})
module.exports = router