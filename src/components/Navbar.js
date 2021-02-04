import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"></Link>
            <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/">
                        Home
                </Link>
                <Link className="nav-item nav-link" to="/unsplash">
                    Unsplash
                </Link>
                <Link className="nav-item nav-link" to="/youtube">
                    Youtube
                </Link>
                <Link className="nav-item nav-link" to="/cart">
                    Cart
                </Link>
                </div>
            </nav>
        )
    }
}

export default Navbar
