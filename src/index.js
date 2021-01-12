import React from 'react' // = document.createElement
import ReactDOM from 'react-dom' // = appendChild
import Badge from './components/Badge'
/*import 'bootstrap/dist/css/bootstrap.css'*/
import './global.css'

const name = 'Gaspar'

const container = document.getElementById('app')
ReactDOM.render(<Badge />, container)