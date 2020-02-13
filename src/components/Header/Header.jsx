import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div className = {`${styles.header}`}>
            <div>
                <NavLink to={'/'}>Test App</NavLink>
            </div>
        </div>
    )
}

export default Header