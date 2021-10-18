const fs = require('fs')
const express = require('express'); 
const cors = require('cors');
const app = express(); 
const bp = require('body-parser')
const port = process.env.PORT || 5000; 
const router = express.Router()
var config_file_path ='C:/Users/Socratis/Desktop/config.js'

app.listen(port, () => console.log(`Listening on port ${port}`)); 
app.use(cors());

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use("/",router);


app.get('/get_config_file_data', (req, res) => { 
    res.sendFile(config_file_path);
}); 


router.post('/change_config_file_data',(req, res) => {
    var result = req.body;
    console.log(result)
    const myJSON = JSON.stringify(result);

    const obj = JSON.parse(myJSON);
    try {
     const data = fs.writeFileSync(config_file_path, obj.data)
    //file written successfully
    } catch (err) {
        console.error(err)
    }
    });
