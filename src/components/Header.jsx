import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header >
            <nav className='green lighten-2'>
                <div className="nav-wrapper">
                    <ul className="left hide-on-med-and-down">
                        <li><Link to='/'>Home</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
