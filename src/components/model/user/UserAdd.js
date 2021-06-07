import React from "react";
import {Button, Card, Col, Form, Row} from "react-bootstrap";

class UserAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: ''};
        this.userChange = this.userChange.bind(this);
        this.submitUser = this.submitUser.bind(this)
    }

    submitUser(event) {
        alert(this.state.username);
        event.preventDefault();
    }

    userChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>
                        <h3>Create User</h3>
                    </Card.Header>
                    <Form onSubmit={this.submitUser}>
                        <Card.Body>
                            <Form.Group className="mb-3" controlId="formUserName">
                                <Row>
                                    <Form.Label>Name of new user</Form.Label>
                                    <Form.Control required
                                                  type="text"
                                                  name="username"
                                                  value={this.state.username}
                                                  onChange={this.userChange}
                                                  placeholder="User name"/>
                                </Row>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Create
                            </Button>
                        </Card.Body>
                    </Form>
                </Card>
            </div>

        );
    }
}

export default UserAdd;