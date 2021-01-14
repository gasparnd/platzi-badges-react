import React from 'react' // = document.createElement
import ReactDOM from 'react-dom' // = appendChild
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

const container = document.getElementById('app')
ReactDOM.render(<App />, container)