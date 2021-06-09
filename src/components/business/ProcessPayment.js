import React from "react";
import axios from "axios";
import {Button, Card, Form, Row} from "react-bootstrap";

class ProcessPayment extends React.Component {

    constructor(prop) {
        super(prop);
        let now = new Date();
        // I hate JS for this...
        // Really??? You haven't add normal date formatting to WEB language?
        let time = new Intl.DateTimeFormat('ru', {
            hour : '2-digit', minute : '2-digit', second : '2-digit'
        }).format(now);
        let year = new Intl.DateTimeFormat('en', {
            year : 'numeric'
        }).format(now);
        let month = new Intl.DateTimeFormat('en', {
            month : '2-digit'
        }).format(now);
        let day = new Intl.DateTimeFormat('en', {
            month : '2-digit'
        }).format(now);

        let dateTime = year + "-" + month + "-" + day + " " + time

        this.state = {
            id : this.props.match.params.id,
            creditId : this.props.match.params.creditId,
            timestamp : dateTime,
            type : 0,
            channel : "",
            paymentSum : 0
        }
        this.paymentChange = this.paymentChange.bind(this);
        this.submitPayment = this.submitPayment.bind(this)
    }

    submitPayment(event) {
        axios.post("http://localhost:8080/payments/process",
            {
                userId : this.state.id,
                creditId : this.state.creditId,
                details : {
                    timestamp: this.state.timestamp,
                    type: this.state.type,
                    channel: this.state.channel,
                    paymentSum: this.state.paymentSum
                }
            })
            .then(response => {
                console.log(response.data)
            })
        event.preventDefault();
    }

    paymentChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <Card>
                <Card.Header>
                    <h3>Process payment</h3>
                </Card.Header>
                <Form onSubmit={this.submitPayment}>
                    <Card.Body>
                        <Form.Group className="mb-3" controlId="formUserName">
                            <Row>
                                <Form.Label>User id</Form.Label>
                                <Form.Control type="text"
                                              name="id"
                                              value={this.state.id}
                                              onChange={this.paymentChange}
                                              placeholder="User id"/>
                            </Row>
                            <Row>
                                <Form.Label>Credit id</Form.Label>
                                <Form.Control type="text"
                                              name="creditId"
                                              value={this.state.creditId}
                                              onChange={this.paymentChange}
                                              placeholder="Credit Id"/>
                            </Row>
                            <Row>
                                <Form.Label>Timestamp</Form.Label>
                                <Form.Control type="text"
                                              name="timestamp"
                                              value={this.state.timestamp}
                                              onChange={this.paymentChange}
                                              placeholder="Timestamp"/>
                            </Row>
                            <Row>
                                <Form.Label>Payment type</Form.Label>
                                <Form.Control type="text"
                                              name="type"
                                              value={this.state.type}
                                              onChange={this.paymentChange}
                                              placeholder="Payment type"/>
                            </Row>
                            <Row>
                                <Form.Label>Payment channel</Form.Label>
                                <Form.Control type="text"
                                              name="channel"
                                              value={this.state.channel}
                                              onChange={this.paymentChange}
                                              placeholder="Payment channel"/>
                            </Row>
                            <Row>
                                <Form.Label>Payment sum</Form.Label>
                                <Form.Control type="text"
                                              name="paymentSum"
                                              value={this.state.paymentSum}
                                              onChange={this.paymentChange}
                                              placeholder="Payment sum"/>
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

export default ProcessPayment;