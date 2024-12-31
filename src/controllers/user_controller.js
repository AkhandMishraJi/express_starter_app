const { registerUser } = require('../services/user_service.js');

async function createUser(req, res) {
    console.log("User Controller caller\n ", req.body);
    try {
        const response = await registerUser(req.body);
        return res.status(201).json({
            message: "User Created Successfully",
            success: true,
            data: response,
            error: null
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Error While Creating User",
            success: false,
            data: null,
            error: error
        });
    }
}

module.exports = {
    createUser
};