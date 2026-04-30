import { Link, Outlet } from "react-router-dom";

export function Navi(){
    return(
        <>
        <nav className="header">
          <ul >

            <li>
                 <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/about">About</Link>
            </li>

            <li>
               <Link to="/services">Services</Link>
            </li> 

            <li>
                <Link to="/contacts">Contact</Link>
            </li>
             
          </ul>
        </nav>

        <Outlet /> 
        </>
    )
}
