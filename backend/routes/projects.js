const express = require('express')
const router = express.Router()
const {createProject,getProjects,deleteProject,updateaProject,getProject} = require('../controllers/porjectController')  

// GET all Project
router.get('/',getProjects)
// GET a single Project
router.get('/:id', getProject)

// POST a new Project
router.post('/', createProject)

// DELETE a Project
router.delete('/:id',deleteProject )

// UPDATE a Project
router.patch('/:id', updateaProject)

module.exports = router