import React from "react";
import './App.css';
import Header from "./Header";
import deakin from "./1.png"
import Cardlist from "./CardList";
import Cardlist2 from "./CardList2";
import "./Button.css";
import Ender from "./Ender";
import Contact from "./Contact";

const imgstyle={
    width: "100%",
    height: "600px"
}
 


function App(){
return(
<div className="all">
<Header />
<img src={deakin} alt="deakin" style={imgstyle }/>
<br></br>
<h1>Featured Articles</h1>
<Cardlist /><br></br>
<button className="Button">see all articles</button>
<br></br>
<h1>Featured Tutorials</h1>
<Cardlist2  /><br></br>
<button className="Button">see all tutorials</button>
<br></br>
<Ender />
<Contact />





</div>
)

}

export default App
