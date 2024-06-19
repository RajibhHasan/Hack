const express = require('express')
const app=express();
const cors = require('cors')
const port=process.env.PORT || 5173;
const os = require('os');
const bodyParser = require('body-parser');
const path=require("path")
require("dotenv").config();
const userRouter=require("./src/router/loginRouter.js")
const sendEmail=require("./src/meddleware/email.js")

 
 



app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));





app.use(express.static('public'))

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

app.set('trust proxy', true);



app.get("/",async(req,res)=>{
	


  res.sendFile(path.join(__dirname, "./public/html/login.html"));

})

app.use(userRouter);




app.listen(port,()=>{
	console.log(`server is runing on port:${port}`)
	

	 
	const networkInterfaces = os.networkInterfaces();

const ipAddress = Object.values(networkInterfaces)
    .flat()
    .find(interface => !interface.internal && interface.family === 'IPv4')
    .address;

console.log('Server IP Address:', ipAddress);
	
	
	
})
