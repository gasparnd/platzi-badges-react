import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import NotFound from '../pages/NotFound'
import Layout from './Layout'

const App = () => {
	return(
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Badges} />
					<Route exact path="/new" component={BadgeNew} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter> 
	)
}

export default App