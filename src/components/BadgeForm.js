import React from 'react'

class BadgeForm extends React.Component {
	
	handleClick = e => {
		console.log('Click')
		console.log(this.state)
	}

	render() {
		return(	
		<div>
			<h2>New Attendant</h2>
			<form>
				<div className="form-group">
					<label>First Name</label>
					<input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName} />
				</div>
			</form>
			<form>
				<div className="form-group">
					<label>Last Name</label>
					<input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName} />
				</div>
			</form>
			<form>
				<div className="form-group">
					<label>Email</label>
					<input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email} />
				</div>
			</form>
			<form>
				<div className="form-group">
					<label>Job Title</label>
					<input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle} />
				</div>
			</form>
			<form>
				<div className="form-group">
					<label>Twitter</label>
					<input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter} />
				</div>
			</form>
			<button onClick={this.handleClick} type="button" className="btn btn-primary">Save</button>
		</div>
		)
	}
}

export default BadgeForm