import React from 'react'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'
import api from '../api'

class BadgeNew extends React.Component {
	state = { 
		form: {
			firstName: '',
			lastName: '',
			jobTitle: '',
			twitter: '',
			email: '',
			avatarUrl: '',
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

	handleSubmit = async e => {
    	e.preventDefault();
    	this.setState({ loading: true, error: null });

    	try {
      		await api.badges.create(this.state.form);
      		this.setState({ loading: false });
   		} catch (error) {
      		this.setState({ loading: false, error: error });
    	}
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
								firstName={this.state.form.firstName || 'First Name'} 
								lastName={this.state.form.lastName || 'Last Name'}  
								twitter={`https://twitter.com/${this.state.form.twitter}` || 'twitter'} 
								email={this.state.form.email || 'name@example.com'} 
								jobTitle={this.state.form.jobTitle || 'Job Title'} 
								avatarUrl="https://avatars3.githubusercontent.com/u/36377522?s=460&u=3b1f554c19b5dc2e21bf0aef269f44ee5bf87fdf&v=4" 
							/>
						</div>
						<div className="col-6">
							<BadgeForm onSubmit={this.handleSubmit} onChange={this.handleChange} formValues={this.state.form} />
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default BadgeNew