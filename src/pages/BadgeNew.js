import React from 'react'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'
import api from '../api'
import PageLoading from '../components/PageLoading'

class BadgeNew extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
			error: null,
			form: {
				firstName: '',
				lastName: '',
				jobTitle: '',
				twitter: '',
				email: '',
				avatarUrl: '',
			} 
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

      		this.props.history.push('/badges')
   		} catch (error) {
      		this.setState({ loading: false, error: error });
    	}
  	}

	render() {
		if (this.state.loading) {
			return <PageLoading />
		}

		return(
			<React.Fragment>
				<div className="BadgeNew__hero">
					<img src={header} alt="Platzi Conf Logo" />
				</div>
				<div></div>
				<div className="container BadgeNew__badge-container">
					<div className="BadgeNew__badge-info">
						<div className="BadgeNew__badge">
							<Badge 
								firstName={this.state.form.firstName || 'First Name'} 
								lastName={this.state.form.lastName || 'Last Name'}  
								twitter={this.state.form.twitter || 'twitter'} 
								email={this.state.form.email || 'name@example.com'} 
								jobTitle={this.state.form.jobTitle || 'Job Title'} 
								avatarUrl={this.state.form.avatarUrl} 
							/>
						</div>
						<div className="BadgeNew__badge-form">
							<h2>New Attendant</h2>
							<BadgeForm 
								onSubmit={this.handleSubmit} 
								onChange={this.handleChange} 
								formValues={this.state.form} 
								error={this.state.error}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default BadgeNew