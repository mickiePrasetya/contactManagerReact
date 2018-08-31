import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
	// way 01: state using constructor
	// -------------------------------
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		contacts: [
	// 			{
	// 				id: 1,
	// 				name: 'John Doe',
	// 				email: 'jdoe@gmail.com',
	// 				phone: '555-555-5555'
	// 			},
	// 			{
	// 				id: 2,
	// 				name: 'Karen Williwam',
	// 				email: 'karen@gmail.com',
	// 				phone: '222-222-2222'
	// 			},
	// 			{
	// 				id: 3,
	// 				name: 'Henry Johnson',
	// 				email: 'henry@gmail.com',
	// 				phone: '111-111-1111'
	// 			}
	// 		]
	// 	};
	// }

	// way 02: state outside constructor
	// --------------------------------
	state = {
		contacts: [
			{
				id: 1,
				name: 'John Doe',
				email: 'jdoe@gmail.com',
				phone: '555-555-5555'
			},
			{
				id: 2,
				name: 'Karen Williwam',
				email: 'karen@gmail.com',
				phone: '222-222-2222'
			},
			{
				id: 3,
				name: 'Henry Johnson',
				email: 'henry@gmail.com',
				phone: '111-111-1111'
			}
		]
	};

	deleteContact = id => {
		// console.log(id);

		// destructuring contacts
		const { contacts } = this.state;

		// create new contacts with filter functions removing data by its id
		const newContacts = contacts.filter(contact => contact.id !== id);

		// Change state with newContacts
		this.setState({
			contacts: newContacts
		});
	};

	render() {
		const { contacts } = this.state;

		return (
			// React Fragment like sudo element that not added to DOM
			// one way to replace <div>
			<React.Fragment>
				{contacts.map(contact => (
					<Contact
						key={contact.id}
						contact={contact}
						deleteClickHandler={this.deleteContact.bind(this, contact.id)}
					/>
				))}
			</React.Fragment>
		);
	}
}
export default Contacts;
