import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
// import uuid from 'uuid';
import axios from 'axios';

// CREATE CONTROLLED COMPONENTS -- USING STATE
class AddContact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: {}
	};

	onSubmit = async (dispatch, e) => {
		e.preventDefault();
		// console.log(this.state);

		const { name, email, phone } = this.state;

		// CheckFor Errors
		if (name === '') {
			this.setState({
				errors: {
					name: 'Name is required'
				}
			});
			// after checking and make it stop, using return;
			return;
		}

		if (email === '') {
			this.setState({
				errors: {
					email: 'Email is required'
				}
			});
			// after checking and make it stop, using return;
			return;
		}

		if (phone === '') {
			this.setState({
				errors: {
					phone: 'Phone is required'
				}
			});
			// after checking and make it stop, using return;
			return;
		}

		const newContact = {
			// id: uuid(),
			name,
			email,
			phone
			// Similar to
			// id: uuid(),
			// name: name,
			// email: email,
			// phone: phone
		};

		// axios
		// 	.post(`https://jsonplaceholder.typicode.com/users`, newContact)
		// 	.then(res => dispatch({ type: 'ADD_CONTACT', payload: res.data }));

		// Async Await
		const res = await axios.post(
			`https://jsonplaceholder.typicode.com/users`,
			newContact
		);

		dispatch({ type: 'ADD_CONTACT', payload: res.data });

		// Clear State after Submitting
		this.setState({
			name: '',
			email: '',
			phone: '',
			error: {}
		});

		// Redirect to home
		this.props.history.push('/');
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { name, email, phone, errors } = this.state;

		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div className="card mb-3">
							<div className="card-header">Add Contact</div>
							<div className="card-body">
								<form onSubmit={this.onSubmit.bind(this, dispatch)}>
									<TextInputGroup
										label="Name"
										name="name"
										placeholder="Enter Name..."
										value={name}
										onChange={this.onChange}
										error={errors.name}
									/>
									<TextInputGroup
										label="Email"
										name="email"
										type="email"
										placeholder="Enter Email..."
										value={email}
										onChange={this.onChange}
										error={errors.email}
									/>
									<TextInputGroup
										label="Phone"
										name="phone"
										placeholder="Enter Phone Number..."
										value={phone}
										onChange={this.onChange}
										error={errors.phone}
									/>
									<input
										type="submit"
										value="Add Contact"
										className="btn btn-light btn-block"
									/>
								</form>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default AddContact;
