const express = require("express");

const router = express.Router();
const skill = require("../models/skill");

//  createSkill

router.post("/create/skill", async (req, res) => {
try{
const skills = new skill(req.body);
const saveSkill = await skill.save();
res.status(201).json(saveSkill);
} catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// getAllSkills 

router.get("/skills", async (req, res)=>{
try{    
    const getSkills = await skill.find();
    res.status(200).json(getSkills);
}catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//  getSkillById

router.get("/skill/:id", async (req, res) => {
try {
    const skills = await skill.findById(req.params.id);
    if (!skills) return res.status(404).json("Skill not found");

    res.json(skills);
} catch (err) {
    res.status(400).json(err.message);
  }
});

// updateSkill

router.put("/skill/:id", async (req, res) => {
try{ 
     const skill = await skill.findByIdAndUpdate(req.params.id, req.body,{new:true});
     if (!skill) return res.status(404).json("skill not found");
     res.json(skill);
} catch (error){res.status(400).json("error.message");}
})

// deleteSkill

router.delete("/skill/:id", async (req,res) => {
try{
    const skill = await skill.findIdAndDelete(req.params.id);
    if (!skill) return res.status(404).json("skill not found");
    res.json("skill deleted");
} catch (error){
    res.status(400).json(err.message)
}
})

module.exports = router;