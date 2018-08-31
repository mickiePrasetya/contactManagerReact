import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
	state = {
		showContactInfo: false
	};

	// test 01
	// onShowClick = name => {
	// 	console.log(name);
	// };

	onShowClick = e => {
		// changing state: toggling state true and false
		this.setState({
			showContactInfo: !this.state.showContactInfo
		});
	};

	onDeleteClick = () => {
		// console.log('clicked');

		// send props to Contacts.js to able catch
		// propagating up to parent Element -> Contacts.js
		this.props.deleteClickHandler();
	};

	render() {
		// Destructuring x from props
		// ex. this.props.contact.name to {name}
		const { name, email, phone } = this.props.contact;
		const { showContactInfo } = this.state;

		return (
			<div className="card card-body mb-3">
				<h4>
					{name}{' '}
					<i
						className="fas fa-sort-down"
						style={{ cursor: 'pointer' }}
						// test 01
						// onClick={this.onShowClick.bind(this, name)}

						// Event toggle contact-info
						onClick={this.onShowClick}
					/>
					<i
						className="fas fa-times"
						style={{ color: 'red', float: 'right', cursor: 'pointer' }}
						// Event propagate to Parent, Handling on Parent
						onClick={this.onDeleteClick}
					/>
				</h4>
				{showContactInfo ? (
					<ul className="list-group">
						<li className="list-group-item">Email: {email}</li>
						<li className="list-group-item">Phone: {phone}</li>
					</ul>
				) : null}
			</div>
		);
	}
}

// Proptypes
Contact.propTypes = {
	contact: PropTypes.object.isRequired,
	deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
