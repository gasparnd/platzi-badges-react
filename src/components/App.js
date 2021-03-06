import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import NotFound from '../pages/NotFound'
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetails from '../pages/BadgeDetailsContainer'
import Home from '../pages/Home'
import Layout from './Layout'

const App = () => {
	return(
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/badges" component={Badges} />
					<Route exact path="/badges/new" component={BadgeNew} />
					<Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
					<Route exact path="/badges/:badgeId" component={BadgeDetails} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter> 
	)
}

export default App