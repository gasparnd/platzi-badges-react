import React from 'react'
import { Link } from 'react-router-dom'
import Gravatar from './Gravatar'

class BadgesList extends React.Component{
	render() {
		return(
			<ul className="list-unstyled">
				{this.props.character.results.map(character => {
					return (
						<li className="Badges__list-item" key={character.id}>
							<div className="Badges__item-img">
								<img width="110" src={character.image} alt={character.name} />
							</div>
							<div className="Badges__list-info">
								<h3>{character.name}</h3>
								<a target="_black" href="https://twitter.com/">@{character.name}</a>
								<p>{character.origin.name}</p>
							</div>
						</li>
					)
				})}
			</ul>
		)
	}
}

export default BadgesList