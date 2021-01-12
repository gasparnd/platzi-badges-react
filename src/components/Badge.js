import React from 'react'
import ConfLogo from '../images/badge-header.svg'
import './styles/Badge.css'

class Badge extends React.Component {
	render() {
		return (
			<div className="badge">
				<div className="badge__header">
					<img src={ConfLogo} alt="PlatziConf Logo"/>
				</div>
				<div className="badge__section-name">
					<img className="badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="User"/>
					<h1>Gaspar <br/>Dolcemascolo</h1>
				</div>
				<div className="badge__section-info">
					<h3>SoftWare Developer</h3>
					<div>@gasparnd</div>
				</div>
				<div className="badge__footer">#PlatziConf</div>
			</div>
		)
	}
}

console.log(React.Component)

export default Badge