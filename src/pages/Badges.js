import React from 'react'
import {Link} from 'react-router-dom'
import BadgesList from '../components/BadgesList'
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import api from '../api'

class Badges extends React.Component {
	

	constructor(props) {
		super(props) 

		this.state = {
			loading: true,
			data: undefined,
			error: null
		}
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null })
		try {
			const response = await fetch("https://rickandmortyapi.com/api/character")
			const data = await response.json()
			this.setState({
				loading: false,
				data: data
			})
		} catch (error) {
			this.setState({ loading: false, error: error })
			console.log(`Fetch Error ${error}`)
		}
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('5 componentDidUpdate()')
		console.log(
			{props: this.props,
						state: this.state}
		)
	}

	componentWillUnmount() {
		console.log('6 componentWillUnmount()')
		clearTimeout(this.timeoutId)
	}

	render() {
		if (this.state.loading) {
			return'Loading...'
		}

		return(
		<React.Fragment>
			<div className="Badges">
				<div className="Badges__hero">
					<div className="Badges__container">
						<img className="Badges_conf-logo"src={confLogo}alt="Platzi Conf Logo" />
					</div>
				</div>
			</div>
			<div className="Badge__container">
				<div className="Badges__buttons">
					<Link to="/new" className="btn btn-primary">
						New Badge
					</Link>
				</div>
				<div className="Badges__list">
					<div className="Badges__container">
						<BadgesList character={this.state.data}/>
					</div>
				</div>
			</div>
		</React.Fragment>
		)
	}
}

export default Badges