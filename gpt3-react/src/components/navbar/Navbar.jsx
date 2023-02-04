import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'

const Menu = () => {
    return (
        <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgp3">What is GPT3?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className='gpt3__navbar'>
            <div className="gpt3_navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="gbt3__navbar-sign">
                <p>Sign in</p>
                <button type='button'>Sing up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='gpt3__navbar-menu_container scale-up-center'>
                        <div className="gpt3__navbar-menu-container-links">
                        <Menu />
                        </div>
                        <div className="gpt3__navbar-menu_container-sign">
                            <p>Sign in</p>
                            <button type='button'>Sing up</button>
                        </div>
                    </div>
                )
                }
            </div>
        </div >
    )
}

export default Navbar
