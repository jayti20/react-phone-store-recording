import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
//import styled from 'styled-components'
import './stylingNav.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 nav">
            <Link to='/'>
            <img src={logo} alt="store" className="navbar-brand"/>
            </Link>
            <ul className="navbar-nav align-items-center">
            
            <li className="nav-item ml-5">
            <Link  to='/' className="nav-link">
           
            products
            </Link>
            </li>
        
            
            </ul>

            <Link to='/cart' className='ml-auto'>
            <button className='Button'>
            <span className="mr-2">
            <i className="fas fa-cart-plus"></i>
            </span>
            
            my cart
            </button>
           
            </Link>
            </nav>
        )
    }
}

export default Navbar
