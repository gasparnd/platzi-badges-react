import React from 'react'

import PageLoadind from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'
import BadgeDetails from './BadgeDetails'

class BadgeDetailsContainer extends React.Component {

	constructor (props){
		super(props)
		this.state = {
			loading : true,
			error : null,
			data : undefined,
			modalIsOpen : false
		}
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData = async () => {
		this.setState({loading: true, error: null})
		try {
			const data = await api.badges.read(this.props.match.params.badgeId)
			this.setState({
				data: data,
				loading: false
			})
		}catch (error) {
			this.setState({
				error: error,
				loading: false
			})
		}
	}

	handleOpenModal = e => {
		this.setState({modalIsOpen: true})
	}

	handleCloseModal = e => {
		this.setState({modalIsOpen: false})
	}

	handleDelelteBadge = async e => {
		this.setState({loading: true, error: null})
		try {
			await api.badges.remove(this.state.data.id) //this.props.match.params.badgeId
			this.setState({loading: false})
			this.props.history.push('/badges')
		} catch (error) {
			this.setState({loading: false, error: error})
		}
	}

	render() {

		if(this.state.loading){
			return <PageLoadind />
		}

		if(this.state.error) {
			return <PageError error={this.state.error} />
		}

		return(
			<BadgeDetails onDeleteBadgeModal={this.handleDelelteBadge} onCloseModal={this.handleCloseModal} onOpenModal={this.handleOpenModal} modalIsOpen={this.state.modalIsOpen} data={this.state.data} />
		)
	}
}

export default BadgeDetailsContainer