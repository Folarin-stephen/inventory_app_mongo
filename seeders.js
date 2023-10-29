const db = require("./db/index")
const models = require("./model/user.model");



db.connect().then(async()=>{
    await models.insertMany([
        {
            name: "Folarin Isabelle",
            email: "folarinisabelle@gmail.com",
            contact: "Ibeju lekki, Lagos",
            password: "Fola1234567",
            phone_number: "08069081214",
            user_type: "user",
            gender: "female"
        }
    ])
    
    console.log("Added to db successfully");
    process.exit(1)
}).catch((err) => {
    console.log("Error seeding", err);
    return err
})