import React from "react";
import {Button, Form} from "react-bootstrap";

class LoginForm extends React.Component {
    render() {
        return(
            <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Operator login</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Use login you received from your admin.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }

}