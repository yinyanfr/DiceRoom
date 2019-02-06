import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import App from "./App"

const Main = () => <App />

const AppRouter = () => (

    <Router>
        <div>
            <Route path="/" component={Main} />
        </div>
    </Router>
)

export default AppRouter
