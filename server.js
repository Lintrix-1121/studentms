const bodyParser = require("body-parser");
const express = require ("express");

const app = express (); 
app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended: true}));

// importong models
const db =require("./models");

//synchronizing the database
db.sequelize_config.sync(
    {force: false}
).then(() =>{
    console.log("DB re-synced")
});

// import routes
require("./routes/student.routes")(app);

app.get ("/p", (req, res) =>{
    res.json({message: "the message"});
});

app.post("/word", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    res.json({
        result:`sum = ${num1+num2}`  
    });

    //create staff variable
    var staff = {
        "staff": {
            "firtname": "obbo",
            "lastname": "lintrix"
        }
    }
       // insert staff endpoint
    app.post("/insertstaff", function(req, res){
        //read existing staff
        FileSystem.readFile(__dirname +"/" + "staff.json", utf8,
    function(err, data){
        data = JSON.parse(data);
        data["staff"] = staff["staff"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
    });
    
    /*Search student by id api
    app.get("/searchid", async(req, res) =>{
        try{
            const student = await student.findByPk(req.params.id);
            if (student) {
                res.json(student);
            }
            else{
                res.status(404).json({
                    error: 'student does not exist'
                });
            }
        }
        catch(error){
            res.status(500).json({
                error: error.message
            });
        }
    });
    */

});


const PORT = 8091;
app.listen (PORT, () => {
    console.log(`The lintrix server is running on port ${PORT}`);
});