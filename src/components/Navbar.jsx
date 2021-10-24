import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <nav
            style={{
                backgroundColor: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <NavLink className='navbar-brand m-2' to='#'>
                Navbar
            </NavLink>
            <div className='navbar-collapse' id='navbarNav'>
                <ul style={{ display: 'flex' }}>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/home'>
                            Home
                        </NavLink>
                    </li>
                    {/* <li className="nav-item">
						<NavLink className="nav-link" to="/about">About</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/contact">Contact</NavLink>
					</li> */}
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/menu'>
                            Menu
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/shoppingcart'>
                            Shopping Cart
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/login'>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
            <span className='badge bg-primary m-2'>
                {<i className='fas fa-cart-plus m-1' />}
                {props.productsCount}
            </span>
        </nav>
    )
}

export default NavBar
