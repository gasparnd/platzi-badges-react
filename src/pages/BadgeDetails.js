import React from 'react'
import {Link} from 'react-router-dom'

import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

import ConfLogo from '../images/platziconf-logo.svg'
import './styles/BadgeDetails.css'

const ReactDetails = props => {
	const badge = props.data
	return(
		<div>
			<section className="BadgeDetails__hero">
				<div className="container">
					<div className="row">
						<div className="col-6">
							<img src={ConfLogo} alt="Conf Logo" />
						</div>
						<div className="col-6 BadgeDetails__hero-attendant-name">
							<h1>{badge.firstName} {badge.lastName}</h1>
						</div>
					</div>
				</div>
			</section>

			<section className="container">

				<div className="row">
					<div className="col-6">
						<Badge firstName={badge.firstName} 
							lastName={badge.lastName} 
							email={badge.email} 
							twitter={badge.twitter} 
							jobTitle={badge.jobTitle} 
						/>
					</div>

					<div className="col-6 BadgeDetails__hero-attendant-name">
						<h2>Actions</h2>
						<div>
							<div>
								<Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link>

							</div>
							<div>
								<button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
								<DeleteBadgeModal onDeleteBadge={props.onDeleteBadgeModal} onClose={props.onCloseModal} isOpen={props.modalIsOpen} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ReactDetails