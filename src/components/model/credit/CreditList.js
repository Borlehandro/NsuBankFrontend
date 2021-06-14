import React from "react";
import {Button, ButtonGroup, Card, PageItem, Pagination, Table} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import AppConfigs from "../../../AppConfigs";

class CreditList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            credits: [],
            currentPage: 0,
            pageSize: 5,
            totalPages: 1
        }
    }

    componentDidMount() {
        this.updateList()
    }

    updateList() {
        axios.get(AppConfigs.CREDITS_LIST, {
            params: {
                page: this.state.currentPage,
                size: this.state.pageSize
            }
        }).then(
            response => {
                console.log(response.data);
                console.log(this.state.pageSize);
                this.setState({
                    credits: response.data.content,
                    currentPage: response.data.pageable.pageNumber,
                    pageSize: response.data.pageable.pageSize,
                    totalPages: response.data.totalPages
                });
            }
        )
    }

    deleteCredit(id) {
        axios.post(AppConfigs.DELETE_CREDIT, null, {
            params: {
                id
            }
        }).then(
            response => {
                console.log(response.data)
                this.setState({
                    credits: this.state.credits.filter(user => user.id !== id)
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
                    <Card.Header>Credits List</Card.Header>
                    <Card.Body>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Client id</th>
                                <th>Offer id</th>
                                <th>Start date</th>
                                <th>Month period</th>
                                <th>Sum</th>
                                <th>Cash inflow</th>
                                <th>Profit margin</th>
                                <th>Balance</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.credits.map(credit =>
                                    <tr key={credit.id}>
                                        <td>{credit.id}</td>
                                        <td>{credit.client.id}</td>
                                        <td> {credit.offer.id}</td>
                                        <td>{credit.startDate}</td>
                                        <td>{credit.monthPeriod}</td>
                                        <td>{credit.sum}</td>
                                        <td>{credit.cashInflow}</td>
                                        <td>{credit.profitMargin}</td>
                                        <td>{credit.balance}</td>
                                        <td>{credit.status}</td>
                                        <td>
                                            <ButtonGroup>
                                                <Link to={"/edit/credit/" + credit.id}
                                                      className="btn btn-outline-primary">
                                                    Edit
                                                </Link>
                                                <Button variant="outline-danger"
                                                        onClick={this.deleteCredit.bind(this, credit.id)}>
                                                    Delete
                                                </Button>

                                                {
                                                    <Link to={"/pay/" + credit.client.id + "/" + credit.id}
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

export default CreditList;