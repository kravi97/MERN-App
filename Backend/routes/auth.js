const router = require('express').Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//Creating a new user using : POST "/api/auth/". Doesn't require Auth
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 })],
    async (req, res) => {
        //if there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //Check whether the user with this email exists already
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "Sorry a user with this email already exists" });
            }
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            res.json({ 'user': user });
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Some error occured");
        }
    });

module.exports = router;