import React from 'react'

class BadgeForm extends React.Component {
	handleChange = e => {
		console.log({
			name: e.target.name,
			value: e.target.value})
	} 
	handleClick = e => {
		console.log('Click')
	}

	render() {
		return(	
		<div>
			<h2>New Attendant</h2>
			<form>
				<div className="form-group">
					<label>First Name</label>
					<input onChange={this.handleChange} className="form-control" type="text" name="firstName" />
				</div>
				<button onClick={this.handleClick} type="button" className="btn btn-primary">Save</button>
			</form>
		</div>
		)
	}
}

export default BadgeForm