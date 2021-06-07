import React from "react";

import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to="/" className={"navbar-brand"}>NSU Bank System</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={"users"} className={"nav-link"}>Users</Link>
                            <Link to={"credits"} className={"nav-link"}>Credits</Link>
                            <Link to={"payments"} className={"nav-link"}>Payments</Link>
                            <Link to={"balances"} className={"nav-link"}>Credit balances</Link>
                            <Link to={"credit-history"} className={"nav-link"}>Credit history</Link>
                            <Link to={"daily-statistic"} className={"nav-link"}>Daily statistic</Link>
                            <Link to={"big-report"} className={"nav-link"}>Big report</Link>
                            <NavDropdown title="Detailed data" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Users</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Payments for user</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Credits for user</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Credit balances for particular credit</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">History of particular credit</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Add" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Add new user</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Add new order</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Add payment</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Give credit</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavigationBar;