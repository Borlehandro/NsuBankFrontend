import React from "react";
import axios from "axios";
import {Button, Card, Form, Row} from "react-bootstrap";

class GiveCredit extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {
            id : this.props.match.params.id,
            offerId : this.props.match.params.offerId,
            monthPeriod : 0,
            sum : 0,
            paymentChannel : ""
        }
        this.creditChange = this.creditChange.bind(this);
        this.submitCredit = this.submitCredit.bind(this)
    }

    submitCredit(event) {
        axios.post("http://localhost:8080/client/give-credit",
            {
                clientId : this.state.id,
                offerId : this.state.offerId,
                monthPeriod : this.state.monthPeriod,
                sum : this.state.sum,
                paymentChannel : this.state.paymentChannel
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
                    <h3>Give credit</h3>
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
                            <Row>
                                <Form.Label>Sum</Form.Label>
                                <Form.Control type="text"
                                              name="sum"
                                              value={this.state.sum}
                                              onChange={this.creditChange}
                                              placeholder="Credit sum"/>
                            </Row>
                            <Row>
                                <Form.Label>Month period</Form.Label>
                                <Form.Control type="text"
                                              name="monthPeriod"
                                              value={this.state.monthPeriod}
                                              onChange={this.creditChange}
                                              placeholder="Month period"/>
                            </Row>
                            <Row>
                                <Form.Label>Payment channel</Form.Label>
                                <Form.Control type="text"
                                              name="paymentChannel"
                                              value={this.state.paymentChannel}
                                              onChange={this.creditChange}
                                              placeholder="Payment channel"/>
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

export default GiveCredit;