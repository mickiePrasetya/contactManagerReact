import React, { Component } from 'react';

class Test extends Component {
	state = {
		title: '',
		body: ''
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts/1')
			.then(response => response.json())
			.then(data =>
				this.setState({
					title: data.title,
					body: data.body
				})
			);
	}

	// componentDidMount() {
	// 	console.log('componentDidMount');
	// }

	// componentWillMount() {
	// 	console.log('componentWillMount');
	// }

	// componentDidUpdate() {
	// 	console.log('componentDidUpdate');
	// }

	render() {
		const { title, body } = this.state;
		return (
			<div>
				<h1 className="leading-4">Test Component</h1>
				<h4>{title}</h4>
				<p>{body}</p>
			</div>
		);
	}
}
export default Test;
