import React from "react";
import {Button, ButtonGroup, Card, PageItem, Pagination, Table} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import AppConfigs from "../../../AppConfigs";

class UsersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            currentPage: 0,
            pageSize: 5,
            totalPages: 1
        }
        console.log(AppConfigs.API_URL)
    }

    componentDidMount() {
        this.updateList()
    }

    updateList() {
        axios.get(AppConfigs.USER_LIST, {
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
        axios.post(AppConfigs.DELETE_USER, null, {
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
        this.setState(({currentPage: pageNumber}), () => {
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
                                        <td> {user.offer !== null &&
                                        user.offer.id
                                        }</td>
                                        <td>{user.activeCredit !== null &&
                                        user.activeCredit.id
                                        }</td>
                                        <td>{user.clientStatus}</td>
                                        <td>
                                            <ButtonGroup>
                                                <Link to={"/edit/user/" + user.id}
                                                      className="btn btn-outline-primary">
                                                    Edit
                                                </Link>
                                                <Button variant="outline-danger"
                                                        onClick={this.deleteUser.bind(this, user.id)}>
                                                    Delete
                                                </Button>
                                                {
                                                    user.offer !== null &&
                                                    <Link to={"/give/credit/" + user.id + "/" + user.offer.id}
                                                          className="btn btn-outline-success">
                                                        Give credit
                                                    </Link>
                                                }
                                                <Link to={"/give/offer/" + user.id}
                                                      className="btn btn-outline-primary">
                                                    Set offer
                                                </Link>
                                                {
                                                    user.activeCredit !== null &&
                                                    <Link to={"/pay/" + user.id + "/" + user.activeCredit.id}
                                                          className="btn btn-outline-success">
                                                        Pay
                                                    </Link>
                                                }

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