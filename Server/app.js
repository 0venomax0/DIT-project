const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors());

app.post("/users", (request, respose) =>{
    
    // console.log(request.body.data)
    console.log("bulleh shah")

    respose.send("a");
} );


app.listen(4000, () => {
    console.log("Listening from server port 4000")
})