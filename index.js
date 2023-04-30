const express = require('express');

const app = express();

const port = 8000;

app.get('/', function(req, res){
    console.log("Request accepted", req.url);
    
    return res.send('<h6>This is some text</h6>');

    // return res.status(200).json({
    //     name: "Vedanti",
    //     nickname: "Alien"
    // });

})

app.listen(port, function(err){
    if(err) console.log(err);
    else console.log("Server is running on port", port);

})