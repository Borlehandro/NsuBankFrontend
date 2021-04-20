import React from 'react';

class RegisterForm extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {
            firstName: '',
            secondName: '',
            lastName: '',
            username: '',
            password: '',
            passwordCheck: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log(event.target.name);
        console.log(event.target.value);

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Send: ' + this.state.username);
        console.log('To: ' + process.env.REACT_APP_BACKEND_URL);
        console.log('Data: ' + JSON.stringify(this.state));

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    username: this.state.username,
                    fullName: (this.state.firstName + ' ' + this.state.secondName + ' ' + this.state.lastName),
                    password: this.state.password
                }
            )
        };

        fetch(process.env.REACT_APP_BACKEND_URL + "auth/register", requestOptions)
            .then(response => console.log(response.status));

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}/>
                </label>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange}/>
                </label>
                <label>
                    Second Name:
                    <input type="text" name="secondName" value={this.state.secondName}
                           onChange={this.handleInputChange}/>
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={this.state.password}
                           onChange={this.handleInputChange}/>
                </label>
                <label>
                    Password again:
                    <input type="password" name="passwordCheck" value={this.state.passwordCheck}
                           onChange={this.handleInputChange}/>
                </label>
                <input type="submit" value="Register"/>
            </form>
        );
    }
}

export default RegisterForm;