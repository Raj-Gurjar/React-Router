import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>


            <div className="nav" style={{ backgroundColor: "cyan" }}>
                <h4>Navbar</h4>
                <ul>

                    <li>
                        <NavLink to='/'>Home</NavLink>
                        {/* //! NavLink adds the active class to the current opened link */}
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                    {/* <li>
                        <Link to='/'>Home</Link>
                    </li> */}
                </ul>



            </div>
        </div>

    )
}
