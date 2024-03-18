import { useState } from "react"
import {LOGO} from "../utility/constants"

const Header = () => {
const [btnName , setbtnName] = useState("Login")
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src= {LOGO} />
        </div>
        <div className="nav-list">
          <ul className="nav-items">
            <li>Offers</li>
            <li>Help</li>
            <li>Sign In</li>
            <li>Cart</li>
            <li><button 
            onClick={()=> {
       btnName === "Login" ? setbtnName("Log-out") 
                          : setbtnName("Login")} }
            >{btnName} </button></li>
          </ul>
        </div>
  
      </div>
    )
  }
  export default Header;