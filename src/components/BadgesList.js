import React from 'react'

class BadgesList extends React.Component {
	render() {
		return(
			<ul className="list-unstyled">
				{this.props.badges.map(badge => {
					return (
						<li className="Badges__list-item" key={badge.id}>
							<div className="Badges__item-img">
								<img src={badge.avatarUrl} alt={badge.firstName} />
							</div>
							<div className="Badges__list-info">
								<h3>{badge.firstName} {badge.lastName}</h3>
								<a target="_black" href="https://twitter.com/">@{badge.twitter}</a>
								<p>{badge.jobTitle}</p>
							</div>
						</li>
					)
				})}
			</ul>
		)
	}
}

export default BadgesList