import React from "react";
import Home from "./Component/Home/Home";
import Search from "./Component/Search/Search";
import Support from "./Component/Support/Support";
import Navbar from "./Component/Navbar/navbar";


const App =() =>{
  return(
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
    </div>
  )


}

export  default App