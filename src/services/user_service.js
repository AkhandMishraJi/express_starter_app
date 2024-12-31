const { findUserById, createUser } = require('../repositories/user_repository.js');

async function registerUser(userdetails) {
    try {
        // const user = await findUserById({
        //     email: userdetails.email,
        //     mobileNumber: userdetails.mobileNumber
        // });
        // if (user) {
        //     throw { reason: "User Already Exists", status: 400 };
        // }
        const newuser = await createUser({
            fullName: userdetails.fullName,
            mobileNumber: userdetails.mobileNumber,
            email: userdetails.email,
            password: userdetails.password
        });
      
    
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    registerUser
};