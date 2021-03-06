import React from 'react'
import {Link} from 'react-router-dom'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import MiniLoading from '../components/MiniLoading'
import PageError from '../components/PageError'
import './styles/Badges.css'
import confLogo from '../images/platziconf-logo.svg'
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

		this.interval = setInterval(this.fetchData, 60000)
	}

	componentWillUnmount() {
		clearTimeout(this.interval)
	}


	fetchData = async () => {
		this.setState({ loading: true, error: null })
		try {
			const data = await api.badges.list()
			this.setState({
				loading: false,
				data: data
			})
		} catch (error) {
			this.setState({ loading: false, error: error })
			console.log(`Fetch Error ${error}`)
		}
	}

	/*componentDidUpdate(prevProps, prevState) {
		console.log('5 componentDidUpdate()')
		console.log({prevProps:prevProps, prevState:prevState})
		console.log(
			{props: this.props, state: this.state}
		)
	}

	componentWillUnmount() {
		clearTimeout(this.timeoutId)
	}*/

	render() {
		if (this.state.loading && !this.state.data) {
			return <PageLoading />
		}
		if (this.state.error) {
			return <PageError error={this.state.error} />
		}

		return(
			<React.Fragment>
				<div className="Badges">
					<div className="Badges__hero">
						<div className="Badges__container">
							<img className="Badges_conf-logo" src={confLogo} alt="Platzi Conf Logo" />
						</div>
					</div>
				</div>
				<div className="Badge__container">
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">
							New Badge
						</Link>
					</div>
					<div className="Badges__list">
						<div className="Badges__container">
							<BadgesList badges={this.state.data}/>
						</div>

						{this.state.loading && <MiniLoading />}

					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Badges