const UserModel = require("../model/user.model")
const jwt = require("jsonwebtoken")

const bearerTokenAuth = async (req, res, next) => {
    try {
    const authHeader = req.headers;

    if (!authHeader.authorization) {
        return res.status(401).json({ message: 'You are not authenticated!' });
    }

    const token = authHeader.authorization.split(' ')[1]; // berear tokenvalue

    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
    console.log({ decoded })

    // decoded { email: someemail@mail.com, _id: jshkdf }

    const user = await UserModel.findOne({ email: decoded.email })
    
    if (!user) {
        return res.status(401).json({
            message: "Unauthorized",
        })
    }

    req.user = user;

    next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            message: "Unauthorized",
        })
    }
}




module.exports = {
    bearerTokenAuth
}