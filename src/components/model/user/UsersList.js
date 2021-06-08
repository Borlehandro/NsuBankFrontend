import React from "react";
import {Button, ButtonGroup, Card, Table} from "react-bootstrap";
import axios from "axios";

class UsersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/crud/client/find-all").then(
            response => {
                console.log(response.data);
                this.setState({users: response.data})
            }
        )
    }

    render() {
        return (
            <Card>
                <Card.Header>Users List</Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Full name</th>
                            <th>Offer</th>
                            <th>Active credit</th>
                            <th>Client status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map(user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.fullName}</td>
                                    <td>{user.offer}</td>
                                    <td>{user.activeCredit}</td>
                                    <td>{user.clientStatus}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button variant="outline-primary">Edit</Button>
                                            <Button variant="outline-danger">Delete</Button>
                                            <Button variant="outline-success">Give credit</Button>
                                            <Button variant="outline-success">Set offer</Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}

export default UsersList;