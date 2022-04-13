import React, { Component } from 'react'
import Navbar from './components/layouts/Navbar'
import './App.css'
import Users from './components/user/Users'
import axios from 'axios'
import Search from './components/user/Search'
class App extends Component {
	state = {
		users: [],
		loading: false,
	}

	// async componentDidMount() {
	// 	this.setState({
	// 		loading: true,
	// 	})

	// 	const res = await axios.get(
	// 		`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	// 	)
	// 	this.setState({
	// 		users: res.data,
	// 		loading: false,
	// 	})
	// }

	searchUsers = async (text) => {
		this.setState({
			loading: true,
		})
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		)
		this.setState({
			users: res.data.items,
			loading: false,
		})
	}

	clearUsers = () => {
		this.setState({ users: [], loading: false })
	}

	render() {
		return (
			<div className='App'>
				<Navbar icon='fab fa-github' title='Github Finder' />
				<div className='container mt-4'>
					<Search
						searchUsers={this.searchUsers}
						clearUsers={this.clearUsers}
						showClear={this.state.users.length > 0 ? true : false}
					/>
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		)
	}
}

export default App
