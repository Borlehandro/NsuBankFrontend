import React from "react";
import {Button, Card, Form} from "react-bootstrap";
import AuthService from "../services/AuthService";
import axios from "axios";

class LoginForm extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {username: '', password: ''}
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this)
    }

    submit(event) {
        this.login(this.state.username, this.state.password)
        event.preventDefault()
    }

    login(username, password) {
        axios.post("http://localhost:8080/login", {username, password}).then(
            response => console.log(response.headers)
        )
    }

    change(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <Card>
                <Card.Header>
                    <h2>Login</h2>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={this.submit}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Operator login</Form.Label>
                            <Form.Control required
                                          type="text"
                                          placeholder="Login"
                                          name="username"
                                          value={this.state.username}
                                          onChange={this.change}/>
                            <Form.Text className="text-muted">
                                Use login you received from your admin.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.change}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default LoginForm;