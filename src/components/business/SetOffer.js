import React from "react";
import axios from "axios";
import {Button, Card, Form, Row} from "react-bootstrap";

class SetOffer extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {
            id : this.props.match.params.id,
            offerId : ""
        }
        this.creditChange = this.creditChange.bind(this);
        this.submitCredit = this.submitCredit.bind(this)
    }

    submitCredit(event) {
        axios.post("http://localhost:8080/client/set-offer",
            {
                clientId : this.state.id,
                offerId : this.state.offerId
            })
            .then(response => {
                console.log(response.data)
            })
        event.preventDefault();
    }

    creditChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <Card>
                <Card.Header>
                    <h3>Set offer</h3>
                </Card.Header>
                <Form onSubmit={this.submitCredit}>
                    <Card.Body>
                        <Form.Group className="mb-3" controlId="formUserName">
                            <Row>
                                <Form.Label>User id</Form.Label>
                                <Form.Control type="text"
                                              name="id"
                                              value={this.state.id}
                                              onChange={this.creditChange}
                                              placeholder="User id"/>
                            </Row>
                            <Row>
                                <Form.Label>Offer id</Form.Label>
                                <Form.Control type="text"
                                              name="offerId"
                                              value={this.state.offerId}
                                              onChange={this.creditChange}
                                              placeholder="Offer id"/>
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

export default SetOffer;