const db = require("./db/index")
const models = require("./model/product.model");



db.connect().then(async()=>{
    await models.insertMany([
        {
        name: "Office Chair SK20",
        price: "70,000",
        active: "true",
        size:   "medium",
        category_id: "M_CQaiMmM"
        },
        {
        name: "Marble Dinning Set t170",
        price: "350,000",
        active: "true",
        size:   "large",
        category_id: "M_CQaiMmM"
        },
        {
        name: "Tractor Toy",
        price: "25,000",
        active: "true",
        size:   "small",
        category_id: "DJKvdr_Zqv"
        },
        {
        name: "Diaper Hughies",
        price: "12,000",
        active: "true",
        size:   "medium",
        category_id: "DJKvdr_Zqv"
        },
        {
        name: "Kings Oil",
        price: "30,000",
        active: "true",
        size:   "large",
        category_id: "P9cy-NRUh_"
        },
        {
        name: "Chips (potatoes)",
        price: "10,000",
        active: "true",
        size:   "medium",
        category_id: "P9cy-NRUh_"
        },
        {
        name: "Samsung A32 black",
        price: "250,000",
        active: "true",
        size:   "medium",
        category_id: "xycAEzu24v"
        },
        {
        name: "lg i45 smart",
        price: "170,000",
        active: "true",
        size:   "medium",
        category_id: "xycAEzu24v"
        },
        {
        name: "sneakers puma",
        price: "43,000",
        active: "true",
        size:   "medium",
        category_id: "iAPj40moDt"
        },
        {
        name: "Men Vintage Shirt",
        price: "15,000",
        active: "true",
        size:   "large",
        category_id: "iAPj40moDt"
        },
        {
        name: "Asus Laptop",
        price: "300,000",
        active: "true",
        size:   "medium",
        category_id: "O89O7RkH38"
        },
        {
        name: "wireless mouse qlt",
        price: "12,000",
        active: "true",
        size:   "small",
        category_id: "O89O7RkH38"
        }
    ])
    
    console.log("Added to db successfully");
    process.exit(1)
}).catch((err) => {
    console.log("Error seeding", err);
    return err
})