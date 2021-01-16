import React from 'react'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'

class BadgeNew extends React.Component {
	state = { 
		form: {
			firstName: '',
			lastName: '',
			jobTitle: '',
			twitter: '',
			email: ''
		}
	} 
	handleChange = e => {
		this.setState({
			form: {
				... this.state.form,
				[e.target.name]: e.target.value
			}
		})
	}

	render() {
		return(
			<React.Fragment>
				<div className="BadgeNew__hero">
					<img src={header} alt="Platzi Conf Logo" />
				</div>
				<div></div>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge 
								firstName={this.state.form.firstName} 
								lastName={this.state.form.lastName}  
								twitter={this.state.form.twitter} 
								jobTitle={this.state.form.jobTitle} 
								avatarUrl="https://avatars3.githubusercontent.com/u/36377522?s=460&u=3b1f554c19b5dc2e21bf0aef269f44ee5bf87fdf&v=4" 
							/>
						</div>
						<div className="col-6">
							<BadgeForm onChange={this.handleChange} formValues={this.state.form} />
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default BadgeNew