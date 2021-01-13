import React from 'react'

class BadgeForm extends React.Component {
	state = {}
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	} 
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
					<input onChange={this.handleChange} className="form-control" type="text" name="firstName" value={this.state.firstName} />
				</div>
			</form>
			<form>
				<div className="form-group">
					<label>Last Name</label>
					<input onChange={this.handleChange} className="form-control" type="text" name="lasttName" value={this.state.lastName} />
				</div>
			</form>
			<form>
				<div className="form-group">
					<label>Email</label>
					<input onChange={this.handleChange} className="form-control" type="email" name="email" value={this.state.email} />
				</div>
			</form>
			<form>
				<div className="form-group">
					<label>Job Title</label>
					<input onChange={this.handleChange} className="form-control" type="text" name="jobTitle" value={this.state.jobTitle} />
				</div>
			</form>
			<form>
				<div className="form-group">
					<label>Twitter</label>
					<input onChange={this.handleChange} className="form-control" type="text" name="twitter" value={this.state.twitter} />
				</div>
			</form>
			<button onClick={this.handleClick} type="button" className="btn btn-primary">Save</button>
		</div>
		)
	}
}

export default BadgeForm