
const User = require('../database/models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const UserController = {
   
    async login(req, res){

        const { email, password } = req.body

        if (!email && !password){
            return res.status(400).json({message: 'Missing Data'})
        }

        try {
            const users = await User.findAll()
            const user = users.find((el) => el.email === email)
            if(!user){
                return res.status(400).json({ message: 'Invalid Data'})
            }

            const isPasswordValid = bcrypt.compareSync(password, user.password)

            if(!isPasswordValid){
                return res.status(400).json({ message: 'Invalid Data'})
            }

            const token = jwt.sign(
                { email: email, role: 'standard' }, 
                'Eu et nisi culpa eiusmod veniam exercitation proident consectetur et. Enim excepteur sunt occaecat id. Mollit voluptate consectetur duis deserunt consequat duis irure non sit aute veniam deserunt laboris laborum. Ad labore dolore labore dolor proident deserunt non.', 
                { expiresIn: '1h'}
            )

            return res.status(200).json({ token })

        } catch(err){
            return res.status(500).json({ message: err})
        }
     

    },

    async create(req, res){
        const { firstName, lastName, email, password } = req.body

        console.log(firstName, lastName, email, password)
        if(!(firstName && lastName && email && password )) {
            return res.status(400).json({ message: 'Missing Data'})
        }
        
        
        try {
            const user = await User.create({ firstName, lastName, email, password })
            return res.status(201).json({user})
        } catch(err){
            return res.status(500).json({ message: err })
        }
    }
}

module.exports = UserController