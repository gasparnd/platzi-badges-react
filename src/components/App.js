import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import NotFound from '../pages/NotFound'

const App = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Badges} />
				<Route exact path="/new" component={BadgeNew} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter> 
	)
}

export default App