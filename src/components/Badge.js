import React from 'react'
import ConfLogo from '../images/badge-header.svg'

class Badge extends React.Component {
	render() {
		return (
			<div>
				<div>
					<img src={ConfLogo} alt="PlatziConf Logo"/>
				</div>
				<div>
					<div>
						<img src="https://www.gravatar.com/avatar?d=identicon" alt="User"/>
						<h2>Gaspar <br/>Dolcemascolo</h2>
					</div>
					<div>
						<p>SoftWare Developer</p>
						<div>
							<i>Twitter Logo</i>
							<a target="_blank" href="https://twitter.com">@gasparnd</a>
							<i>Argentinian Flag</i>
						</div>
					</div>
				</div>
				<div>
					<p>#PlatziConf</p>
				</div>
			</div>
		)
	}
}

console.log(React.Component)

export default Badge