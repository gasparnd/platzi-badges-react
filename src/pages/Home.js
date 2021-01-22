import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Home.css'
import LogoHero from '../images/platziconf-logo.svg'

class Home extends React.Component {
	
	render() {
		return(
			<div className="Home__hero">
				<img src={LogoHero} alt="Conf Logo" />
				<Link to="/badges" className="btn btn-primary">Badges</Link>
			</div>
		)
	}
}

export default Home