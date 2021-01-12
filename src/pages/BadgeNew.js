import React from 'react'
import NavBar from '../components/NavBar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'

class BadgeNew extends React.Component {
	render() {
		return(
			<div>
				<NavBar />
				<div className="BadgeNew__hero">
					<img src={header} alt="Platzi Conf Logo" />
				</div>
				<div></div>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge 
								firstName="Gaspar" 
								lastName="Dolcemascolo" 
								twitter="gasparnd" 
								jobTittle="SoftWare Developer" 
								avatarUrl="https://avatars3.githubusercontent.com/u/36377522?s=460&u=3b1f554c19b5dc2e21bf0aef269f44ee5bf87fdf&v=4" 
							/>
						</div>
						<div className="col-6">
							<BadgeForm />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default BadgeNew