import React from "react";
import axios from "axios";
import {Button, Card, Form, Row} from "react-bootstrap";
import AppConfigs from "../../../AppConfigs";

class UserEdit extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {
            id : 0,
            clientId : 0,
            offerId : 0,
            startDate: '',
            monthPeriod : 0,
            sum : 0,
            cashInflow : 0,
            profitMargin : 0,
            balance : 0,
            status : ''
        }
        this.creditChange = this.creditChange.bind(this);
        this.submitCredit = this.submitCredit.bind(this)
    }

    submitCredit(event) {
        axios.post(AppConfigs.EDIT_CREDIT,
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

    creditChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        const creditId = +this.props.match.params.id
        if(creditId) {
            axios.get(AppConfigs.CREDIT_FIND, {params : {id : creditId}})
                .then(
                    response => {
                        console.log(response.data);
                        let data = response.data;
                        this.setState({
                            id : data.id,
                            clientId : data.client.id,
                            offerId : data.offer.id,
                            startDate: data.startDate,
                            monthPeriod : data.monthPeriod,
                            sum : data.sum,
                            cashInflow : data.cashInflow,
                            profitMargin : data.profitMargin,
                            balance : data.balance,
                            status : data.status
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
                <Form onSubmit={this.submitCredit}>
                    <Card.Body>
                        <Form.Group className="mb-3" controlId="formUserName">
                            <Row>
                                <Form.Label>Name of user</Form.Label>
                                <Form.Control type="text"
                                              name="fullName"
                                              value={this.state.fullName}
                                              onChange={this.creditChange}
                                              placeholder="User name"/>
                            </Row>
                            <Row>
                                <Form.Label>User status</Form.Label>
                                <Form.Control type="text"
                                              name="clientStatus"
                                              value={this.state.clientStatus}
                                              onChange={this.creditChange}
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