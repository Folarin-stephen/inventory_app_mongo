const db = require("./db/index")
const models = require("./model/admin.model");



db.connect().then(async()=>{
    await models.insertMany([
        {
            name: "Folarin Stephen",
            email: "folarinstephen@gmail.com",
            role: "super",
            password: "Fola1234567"
        }
    ])
    
    console.log("Added to db successfully");
    process.exit(1)
}).catch((err) => {
    console.log("Error seeding", err);
    return err
})