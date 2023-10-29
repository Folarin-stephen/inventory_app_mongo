const db = require("./db/index")
const models = require("./model/categories.model");



db.connect().then(async()=>{
    await models.insertMany([
        {
            name: "Furnitures",
            description: "Interior and Exterior"
        },
        {
            name: "Children",
            description: "Toys & Chldren Gadgets"
        },
        {
            name: "Foods",
            description: "Groceries and Home utils"
        },
        {
            name: "Mobile",
            description: "Technology"
        },
        {
            name: "Fashion & Clothing",
            description: "Fashion lifestyles"
        },
        {
            name: "Computer Accesories",
            description: "Information Technology"
        }
    ])
    
    console.log("Added to db successfully");
    process.exit(1)
}).catch((err) => {
    console.log("Error seeding", err);
    return err
})