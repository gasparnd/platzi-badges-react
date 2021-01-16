import React from 'react'
import './styles/PageError.css'

const PageError = props => {
	return(
		<div className="PageError">
			<iframe className="giphy-embed" src="https://giphy.com/embed/XJcuXYYW2e0mY" width="480" height="480"></iframe>
			<p>{props.error.message}</p>
		</div>
	)

}

export default PageError