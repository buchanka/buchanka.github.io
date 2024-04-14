import React from "react";


 function Nav({ isOpen }) {
  return (
    <div id="nav" className={isOpen ? "open" : ""}/>
    
  );
}

export default Nav