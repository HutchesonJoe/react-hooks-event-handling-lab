import React from "react";

function Keypad(){
  
  console.log("Keypad")
  return(
    <>
    <input type="password" onChange={() => console.log("Entering password...")}></input>

    <p>Yo</p>
    </>
    
  )

}

export default Keypad