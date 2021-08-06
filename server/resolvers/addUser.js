
const {AuthenticationError} = require("apollo-server-errors")
const {User} = require ("../models/User"); 
const {singleToken} = require("../utils/auth")

const addUser = async(_, { input }) => {
    const {username, email, password} = input;

    const user = await User.findOne({email})

    if(!user) {
        const newUser = await User.create({ username, email, password}); 


        const token = signToken({
            email: newUser.email,
            id: newUser._id,
            username: newUser.username,
        })

        return {token, user:newUser}
    }else {
        
    }
}

module.exports = addUser;