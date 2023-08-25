const express = require("express");
const router = express.Router();
const Project = require("../models/Projects");


//Route 1: get all the Projects: Get "/api/notes/fetchallnotes"
router.get("/fetchallprojects", async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}),



// Route to add projects: POST "/api/projects/addproject"
router.post("/addproject", async (req, res) => {
  try {
    const { title, img, summary, link, github, type } = req.body;

    // Check for missing or invalid data
    if (!title || !img || !summary || !link || !github || !type) {
      return res.status(400).json({ error: "Missing or invalid data" });
    }

    const project = new Project({
      title,
      img,
      summary,
      link,
      github,
      type,
    });

    const savedProject = await project.save();
    res.json(savedProject);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
});


router.put("/updateproject/:id", async (req, res) => {
  const { title, img, summary, link, github, type } = req.body;
  try {
    // Create newProject object
    const newProject = {
      title,
      img,
      summary,
      link,
      github,
      type
    };

    // Find a project to be updated
    let project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).send("Not Found");
    }

    // Update the project
    project = await Project.findByIdAndUpdate(
      req.params.id,
      { $set: newProject },
      { new: true }
    );
    res.json({ project });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 4: delete the existing projects using : delete "/api/projects/deleteproject" 

router.delete("/deleteproject/:id", async (req, res) => {
  try {
    // find the note to be deleted
    let project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).send("Not Found");
    }

    project = await Project.findByIdAndDelete(req.params.id);
    res.json({ Success: "Project has been deleted", project: project });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
