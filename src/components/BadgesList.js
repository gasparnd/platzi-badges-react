import React from 'react'
import { Link } from 'react-router-dom'
import Gravatar from './Gravatar'

class BadgesList extends React.Component {
	render() {

		const badges = [...this.props.badges].reverse()

		if(badges === 0) {
			return(
				<div>
					<h3>Badges were not found</h3>
					<Link to="/new" className="btn btn-primary">
						Create new Badge
					</Link>
				</div>
			)
		}

		return(
			<ul className="list-unstyled">
				{badges.map(badge => {
					return (
						<li className="" key={badge.id}>
							<Link className="text-reset text-decoration-none Badges__list-item" to={`/badges/${badge.id}`} >
								<div className="Badges__item-img">
									<Gravatar email={badge.email} alt={badge.firstName} />
								</div>
								<div className="Badges__list-info">
									<h3>{badge.firstName} {badge.lastName}</h3>
									<div><a target="_black" href={`https://twitter.com/${badge.twitter}`}>@{badge.twitter}</a></div>
									<p>{badge.jobTitle}</p>
								</div>
							</Link>
						</li>
					)
				})}
			</ul>
		)
	}
}

export default BadgesList