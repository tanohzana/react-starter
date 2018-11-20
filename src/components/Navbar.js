import React from 'react'

const Navbar = (props) => {
    const { buildRoutesToShow } = props

    return (
        <nav>
            <ul>
                { buildRoutesToShow() }
            </ul>
        </nav>
    )
}

export default Navbar