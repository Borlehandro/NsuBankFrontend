import React from "react";
import axios from "axios";
import {Button, Card, Form, Row} from "react-bootstrap";

class UserEdit extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {
            id : 0,
            fullName : "",
            clientStatus : ""
        }
        this.userChange = this.userChange.bind(this);
        this.submitUser = this.submitUser.bind(this)
    }

    submitUser(event) {
        axios.post("http://localhost:8080/crud/client/edit",
            {
                id : this.state.id,
                fullName : this.state.fullName,
                clientStatus : this.state.clientStatus
            })
            .then(response => {
                console.log(response.data)
            })
        event.preventDefault();
    }

    userChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        const userId = +this.props.match.params.id
        if(userId) {
            axios.get("http://localhost:8080/crud/client/find", {params : {id : userId}})
                .then(
                    response => {
                        console.log(response.data);
                        let data = response.data;
                        this.setState({
                            id : data.id,
                            fullName : data.fullName,
                            clientStatus : data.clientStatus
                        })
                    }
                )
        }
    }

    render() {
        return (
            <Card>
                <Card.Header>
                    <h3>Edit User</h3>
                </Card.Header>
                <Form onSubmit={this.submitUser}>
                    <Card.Body>
                        <Form.Group className="mb-3" controlId="formUserName">
                            <Row>
                                <Form.Label>Name of user</Form.Label>
                                <Form.Control type="text"
                                              name="fullName"
                                              value={this.state.fullName}
                                              onChange={this.userChange}
                                              placeholder="User name"/>
                            </Row>
                            <Row>
                                <Form.Label>User status</Form.Label>
                                <Form.Control type="text"
                                              name="clientStatus"
                                              value={this.state.clientStatus}
                                              onChange={this.userChange}
                                              placeholder="User name"/>
                            </Row>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Card.Body>
                </Form>
            </Card>
        );
    }


}

export default UserEdit;