import React from "react";
import Home from "./Component/Home/Home";
import Search from "./Component/Search/Search";
import Support from "./Component/Support/Support";
import Navbar from "./Component/Navbar/navbar";
import Subscribers from "./Component/Subscribers/Subscribers"
import Footer from "./Component/Footer/Footer";
import Information from "./Component/Information/Information";


const App =() =>{
  return(
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Subscribers/>
      <Information />
      <Footer />
      
    </div>
  )


}

export  default App