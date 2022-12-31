const Projects = require('../models/ProjectModel')
const mongoose= require('mongoose')
// POST a new Project
const createProject=async (req, res) => {
    const {title, tech, gitlink} = req.body
    
    try {
      const Project = await Projects.create({title, tech, gitlink})
      res.status(200).json(Project)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  // GET all Projects
const getProjects = async(req, res) => {
    const Project = await Projects.find({}).sort({createdAt:-1})
    res.status(200).json(Project)
}
  // DELETE a Project
  const deleteProject =async (req, res) => {
    const {id}= req.params
     if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such Project"})
     }

    const Project= await Projects.findOneAndDelete({_id:id})
   

    if(!Project){
      return res.status(404).json({error:"no such Project"})
  }
  res.status(200).json(Project)

  }
  // UPDATE a Project
  const updateaProject=async(req, res) => {
    const {id}= req.params
     if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such Project"})
     }
     const Project = await Projects.findOneAndUpdate({_id:id},{
      ...req.body
     })
     if(!Project){
      return res.status(404).json({error:"no such Project"})
  }
  res.status(200).json(Project)
    
  }
//GET a single Project
  const getProject = async(req, res) => {
    const {id} = req.params
     if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such Project"})
     }


    const Project= await Projects.findById(id)
    if(!Project){
        return res.status(404).json({error:"no such Project"})
    }

    res.status(200).json(Project)
  }
module.exports={
    createProject,
    getProjects,
    deleteProject,
    updateaProject,
    getProject
}