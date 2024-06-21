import { NavLink } from "react-router-dom"

import {LogoAquisito} from "../../assets/LogoAquisito"

const Navbar = () => {
    return(
        <nav className="flex justify-between items-center fixed z-50 w-screen py-5 px-12 text-sm">
            <ul className="flex items-center gap-8">
                <li>
                    <NavLink to= '/'>
                       Aquisito
                    </NavLink>
                </li>

                <li>
                    <NavLink to= '/'>
                       All
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/home'>
                       Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/personal-care'>
                       Personal care
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to= '/pets'>
                       Pets
                    </NavLink>
                </li>

                <li>
                    <NavLink to= '/snacks'>
                       Snacks
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-8">
                <li>
                    <NavLink >
                       +591-789876
                    </NavLink>
                </li>

                <li>
                    <NavLink to= '/orders'>
                       Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/account'>
                       Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/sign-in'>
                       Sign In
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to= '/cart'>
                       Cart
                    </NavLink>
                </li>

                
            </ul>
        </nav>
    )
}

export default Navbar