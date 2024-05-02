import "./navbar.css"
import {Link, NavLink, useNavigate} from "react-router-dom"

import logo from "./images/ori_3656548_sgip3c8fz57k013pxlo6kgm4whmpms4phgt27hi6_monogram-dg-logo-design.jpg"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Navbar = (params) =>{
    const { user }=useContext(AuthContext)
    const navigate = useNavigate();
    const {dispatch}=useContext(AuthContext)


    const handleClick = (e) => {
        e.preventDefault();
        dispatch({
          type: "LOGOUT",
        });
        navigate("/");
      };
      const handleclick=()=>{

        navigate("/profile")


      }
      
    return(
        <div className="navbar">
            
            <div className="navContainer">
                
                <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
                
                <img className="logo" src={logo} alt="" />
                
                
                </Link>
                
                
                
                
                { 
                 user ?( <div  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}> 
                 
                  
        
      
                  <span className="username"> Hello,{user.username}</span>
                  <img onClick={handleclick} className="logo2" src={user.img ?user.img:"https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="" />

                  
                 <button className="navButton" onClick={handleClick}>Log Out</button> 
                 
                 
                 </div>
                 
                    
                   ) :  (
                    <div className="navItems">
                            <button className="navButton"><NavLink
                to="/Timepicker"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Check available
              </NavLink></button>
                    <button className="navButton"><NavLink
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Register
              </NavLink></button>
              
                    <button className="navButton"><NavLink
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Login
              </NavLink></button>
                </div>)}
                
            </div>
        </div>
    )
}

export default Navbar