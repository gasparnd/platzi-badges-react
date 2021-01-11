import React from 'react' // = document.createElement
import ReactDOM from 'react-dom' // = appendChild

/*const jsx = <h1>Hello, Platzi Badges from React!</h1>
const element = React.createElement('a', {href:"https://www.platzi.com"}, 'Ir a Platzi')*/
const name = 'Gaspar'
/*const element = React.createElement('h1', {}, `Hola, soy ${name}`)*/
/*const jsx = <h1>Hola, soy {name}</h1>*/
const jsx = (
	<div>
		<h1>Hola, soy Gaspar</h1>
		<p>Soy un SoftWare Developer</p>	
	</div>
)

const container = document.getElementById('app')
ReactDOM.render(jsx, container)
				//what     where