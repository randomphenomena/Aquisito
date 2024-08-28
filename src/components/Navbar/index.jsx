import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4 '
    const   context =  useContext(ShoppingCartContext)
    
    return(
        <nav className="bg-accent text-primary-color flex md:flex-row flex-col-reverse md:justify-between items-center fixed z-50 w-screen py-5 px-12 text-sm gap-7 top-0">
            <ul className="flex items-center gap-5">
                <li className="font-bold text-lg">
                    <NavLink to= '/' >
                       AQUISITO
                    </NavLink>
                </li>

                <li>
                    <NavLink to= '/'
                    className={({ isActive}) => 
                        isActive ? activeStyle: undefined}>
                       All
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/home' 
                    className={({ isActive}) => 
                        isActive ? activeStyle: undefined}>
                       Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/personal-care'
                    className={({ isActive}) => 
                        isActive ? activeStyle: undefined}>
                       Personal care
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to= '/pets'
                    className={({ isActive}) => 
                        isActive ? activeStyle: undefined}>
                       Pets
                    </NavLink>
                </li>

                <li>
                    <NavLink to= '/snacks'
                    className={({ isActive}) => 
                        isActive ? activeStyle: undefined}>
                       Snacks
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-5">
                <li className=" text-slate-800 italic">
                    <NavLink >
                       UserName
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
                       🛒({context.count})
                    </NavLink>
                </li>

                
            </ul>
        </nav>
    )
}

export default Navbar