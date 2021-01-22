import React from 'react'
import './styles/Footer.css'

class Footer extends React.Component {
	render() {
		return(
			<section className="Footer">
				<a className="Footer__link" target="_blank" href="https://gasparnd.github.io/">
					Made whit React by GasparND 😎
				</a>
			</section>
		)
	}
}

export default Footer