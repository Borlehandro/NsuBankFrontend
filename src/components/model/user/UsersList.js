import React from "react";
import {Button, ButtonGroup, Card, PageItem, Pagination, Table} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";

class UsersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            currentPage: 0,
            pageSize: 5,
            totalPages: 1
        }
    }

    componentDidMount() {
        this.updateList()
    }

    updateList() {
        axios.get("http://localhost:8080/crud/client/find-all", {
            params: {
                page: this.state.currentPage,
                size: this.state.pageSize
            }
        }).then(
            response => {
                console.log(response.data);
                console.log(this.state.pageSize);
                this.setState({
                    users: response.data.content,
                    currentPage: response.data.pageable.pageNumber,
                    pageSize: response.data.pageable.pageSize,
                    totalPages: response.data.totalPages
                });
            }
        )
    }

    deleteUser(id) {
        axios.post("http://localhost:8080/crud/client/delete", null, {
            params: {
                id
            }
        }).then(
            response => {
                console.log(response.data)
                this.setState({
                    users: this.state.users.filter(user => user.id !== id)
                })
            }
        )
    }

    newPage(pageNumber) {
        console.log("New page " + pageNumber)
        this.setState(({currentPage : pageNumber}), () => {
            console.log("Current:" + this.state.currentPage)
            this.updateList()
        })
    }

    render() {
        return (
            <div>
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
                                                <Link to={"/edit/user/" + user.id}
                                                      className="btn btn-sm btn-outline-primary">
                                                    Edit
                                                </Link>
                                                <Button variant="outline-danger"
                                                        onClick={this.deleteUser.bind(this, user.id)}>
                                                    Delete
                                                </Button>
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
                <Pagination size={this.state.totalPages}>
                    {
                        [...Array(this.state.totalPages)].map((e, i) =>
                            <PageItem onClick={this.newPage.bind(this, i)}>
                                {i + 1}
                            </PageItem>
                        )
                    }
                </Pagination>
            </div>
        );
    }
}

export default UsersList;