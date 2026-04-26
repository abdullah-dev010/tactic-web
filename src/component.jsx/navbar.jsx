import { Link, Outlet } from "react-router-dom";

export function Navi(){
    return(
        <>
        <nav>
          <ul>

            <li>
                 <Link to="/">home</Link>
            </li>

            <li>
                <Link to="/about">about</Link>
            </li>

            <li>
               <Link to="/services">service</Link>
            </li> 

            <li>
                <Link to="/contacts">contacts</Link>
            </li>
             
          </ul>
        </nav>

        <Outlet /> 
        </>
    )
}