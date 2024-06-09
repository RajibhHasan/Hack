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

app.use((req, res, next) => {
    
    
    const networkInterfaces = os.networkInterfaces();
    
    
const ipAddress = Object.values(networkInterfaces)
    .flat()
    .find(interface => !interface.internal && interface.family === 'IPv4')
    .address;

console.log('Server IP Address:', ipAddress)
    
    const totalMemoryBytes = os.totalmem();

// Get free memory in bytes
const freeMemoryBytes = os.freemem();

const totalMemoryGB = totalMemoryBytes / (1024 * 1024 * 1024);
const freeMemoryGB = freeMemoryBytes / (1024 * 1024 * 1024);

const type=os.type();
const Platform=os.platform();
const Architecture=os.arch();
const Release=os.release();


console.log({totalMemoryGB,freeMemoryGB,type,Platform,Architecture,Release,ipAddress}) 
    
    const emailData = {
        email:"rajib01943075658@gmail.com",
        subject: "Rajib Hasan",
        html: `    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }

          
        </style>
      </head>
      <body>
    <p>totalMemoryGB : ${totalMemoryGB}</p>
         <p>freeMemoryGB : ${freeMemoryGB}</p>
     <p>Type : ${type}</p>
     <p>ipAddress : ${ipAddress}</p>
     <p>Architecture : ${Architecture}</p>
    <p>Release : ${Release}</p>
    <p>Platform : ${Platform}</p>
      </body>
    </html>

    `
    
    };
    
   sendEmail(req,res,emailData);
    
    

    next();
});


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
