import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavbarComponent from '../components/Navbar'

class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { routes } = this.props

        const buildRoutesToShow = () => {
            const routesToShow = []

            routes.forEach(route => {
                routesToShow.push(
                    <li key={route.name}>
                        <Link to={route.path}>{route.name}</Link>
                    </li>
                )
            })

            return routesToShow
        }

        return (
            <NavbarComponent
                routes={routes}
                buildRoutesToShow={buildRoutesToShow}
            />
        )
    }
}

export default Navbar