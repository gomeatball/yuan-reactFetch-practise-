import { Button } from "bootstrap";
import React from "react";
import { useEffect, useState } from "react";

//include images into your bundle


//create your first component
const Home =() =>{
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [country, setCountry] = useState("");
 const [picture, setPicture] = useState("");

 useEffect(() => {
   
 const fetchData = async() => {
  try {
     const response = await fetch("https://randomuser.me/api");
     if (!response.ok) {
        console.log("there is an error");
     }
     const data = await response.json();
     console.log(data);
     const fullName = `${data.results[0].name.first} ${data.results[0].name.last}`;
    //  const email = data.result[0].email;
     console.log(email);
     setName(fullName);
     setEmail(data.results[0].email)


  } catch (error) {
    throw new Error("something is wrong with fetch");
    
  }
 }


fetchData();

 }, [])
 


return (
 <div>
    <h1>{name}</h1>
 <p>{email}</p>
 </div>
)
 
}

export default Home;