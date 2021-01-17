import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Badges.css'

class Home extends React.Component {
	
	render() {
		return(
			<React.Fragment>
				<Link to="/badges" className="btn btn-primary">Badges</Link>
			</React.Fragment>
		)
	}
}

export default Home