const express = require("express");

const router = express.Router();
const User = require("./models/skillSchema");

//  createSkill

router.post("/create/skill", async (req, res) => {
try{
const skills = new User (req.body);
const saveSkill = await skills.save();
res.status(201).json(saveSkill);
} catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// getAllSkills 

router.get("/skill", async (req, res)=>{
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
    const skills = await skills.findById(req.params.id);
    if (!skills) return res.status(404).json("Skill not found");

    res.json(skills);
} catch (err) {
    res.status(400).json(err.message);
  }
});

// updateSkill

router.put("/skills/:id", async (req, res) => {
try{ 
     const skill = await skills.findByIdAndUpdate(req.params.id, req.body,{new:true});
     if (!skill) return res.status(404).json("skill not found");
     res.json(skill);
} catch (error){res.status(400).json("error.message");}
})

// deleteSkill

router.delete("/skills/:id", async (req,res) => {
try{
    const skill = await skills.findIdAndDelete(req.params.id);
    if (!skill) return res.status(404).json("skill not found");
    res.json("skill deleted");
} catch (error){
    res.status(400).json(err.message)
}
})

module.exports = router;