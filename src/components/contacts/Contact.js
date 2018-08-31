import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
	state = {
		showContactInfo: false
	};

	onShowClick = e => {
		// changing state: toggling state true and false
		this.setState({
			showContactInfo: !this.state.showContactInfo
		});
	};

	// onDeleteClick = (id, dispatch) => {
	// 	axios
	// 		.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
	// 		.then(res => dispatch({ type: 'DELETE_CONTACT', payload: id }));
	// };

	// Async Await
	onDeleteClick = async (id, dispatch) => {
		await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

		dispatch({ type: 'DELETE_CONTACT', payload: id });
	};

	render() {
		const { id, name, email, phone } = this.props.contact;
		const { showContactInfo } = this.state;

		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div className="card card-body mb-3">
							<h4>
								{name}{' '}
								<i
									className="fas fa-sort-down"
									style={{ cursor: 'pointer' }}
									// Event toggle contact-info
									onClick={this.onShowClick}
								/>
								<i
									className="fas fa-times"
									style={{
										color: 'red',
										float: 'right',
										cursor: 'pointer'
									}}
									// Event propagate to Parent, Handling on Parent
									onClick={this.onDeleteClick.bind(this, id, dispatch)}
								/>
								<Link to={`contact/edit/${id}`}>
									<i
										className="fas fa-pencil-alt"
										style={{
											curosr: 'pointer',
											float: 'right',
											color: 'black',
											marginRight: '1rem'
										}}
									/>
								</Link>
							</h4>
							{showContactInfo ? (
								<ul className="list-group">
									<li className="list-group-item">Email: {email}</li>
									<li className="list-group-item">Phone: {phone}</li>
								</ul>
							) : null}
						</div>
					);
				}}
			</Consumer>
		);
	}
}

// Proptypes
Contact.propTypes = {
	contact: PropTypes.object.isRequired
};

export default Contact;