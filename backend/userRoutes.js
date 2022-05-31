const router = require("express").Router();
const User = require('./userModel')

router.post('/users', async (req, res)=>{
    console.log(req.body)
    try {
        const user = await User.create(req.body);
        console.log(res.json(user))
        // console.log(user)
    } catch (error) {
        console.log(error)
        res.status(500).send();
    }
})


router.post('/login', async (req, res)=>{
    const {email, password} = req.body;
    try{
        const user = await User.findByCredentials(email, password);
        res.status(200).json(user);
    }catch(error){
        console.log(error);
        res.status(500).send()
    }
})

module.exports = router;