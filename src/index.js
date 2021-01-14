import React from 'react' // = document.createElement
import ReactDOM from 'react-dom' // = appendChild
import BadgeNew from './pages/BadgeNew'
import Badges from './pages/Badges'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

const container = document.getElementById('app')
ReactDOM.render(<Badges />, container)