import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeContainer from '../containers/Home'
import AboutComponent from '../components/About'
import NavbarContainer from '../containers/Navbar'

const routes = [
    { name: 'Home', path: '/', component: HomeContainer },
    { name: 'About', path: '/about/', component: AboutComponent },
]

const createRoutes = () => {
    const routesArr = [
        <Route key={0} path="/" exact component={HomeContainer} />,
    ]

    for (let i=1; i<routes.length; i++) {
        routesArr.push(
            <Route key={i} path={routes[i].path} component={routes[i].component} />
        )
    }

    return routesArr
}

const AppRouter = () => (
    <Router>
        <div>
            <NavbarContainer routes={routes} />

            { createRoutes() }
        </div>
    </Router>
)

export default AppRouter