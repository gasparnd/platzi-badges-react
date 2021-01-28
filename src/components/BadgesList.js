import React from 'react'
import { Link } from 'react-router-dom'
import Gravatar from './Gravatar'

import './styles/BadgesList.css'

//Hooks

const useSearchBadges = badges => {
	// input state
	const [query, setQuery] = React.useState('')

	const filteredBadges = React.useMemo( () => {
		return badges.filter(badge => {
			return `${badge.firstName} ${badge.lastName} ${badge.jobTitle} ${badge.twitter}`.toLowerCase().includes(query.toLowerCase())
		})
	}, [badges, query])

	return { query, setQuery, filteredBadges,}
}

const BadgesList = props => {
	const badges = [...props.badges].reverse() // change list direction 

	const { query, setQuery, filteredBadges} = useSearchBadges(badges)

	
	if(filteredBadges.length === 0) {
		return(
			<React.Fragment>
				<div className="form-group">
					<label className="">Filter Badges</label>
					<input type="text" className="form-control" 
						value={query}
						onChange={e => {
							setQuery(e.target.value)
						}}
					/>
				</div>
				<div>
					<h3>Badges were not found</h3>
					<Link to="/new" className="btn btn-primary">
						Create new Badge
					</Link>
				</div>
			</React.Fragment>
		)
	}

	return(
		<div className="BadgesList">

			<div className="form-group">
				<label className="">Filter Badges</label>
				<input type="text" className="form-control" 
					value={query}
					onChange={e => {
						setQuery(e.target.value)
					}}
				/>
			</div>

			<ul className="list-unstyled">
				{filteredBadges.map(badge => {
					return (
						<li className="BadgesListItem" key={badge.id}>
							<Link className="text-reset text-decoration-none Badges__list-item" to={`/badges/${badge.id}`} >
								<div className="Badges__item-img">
									<Gravatar className="BadgesListItem__avatar" email={badge.email} alt={badge.firstName} />
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

		</div>
		
	)
}

export default BadgesList