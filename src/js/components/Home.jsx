import { Button } from "bootstrap";
import React from "react";
import { useEffect, useState } from "react";

//include images into your bundle


//create your first component
const Home =() =>{
  const [name,setName] = useState("")

 useEffect(() => {
  const fetchData = async() =>{
try {
  const response = await fetch("https://randomuser.me/api");
  if (!response.ok) {
    console.log("there is an error");
    return;
  }
  const data = await response.json();
  console.log(data);
  
  
} catch (error) {
  throw new Error("something wrong with fetch");
  
}  
  }
  fetchData();
}
 ,[])

 return (
  <div>

  </div>
 )
}

export default Home;