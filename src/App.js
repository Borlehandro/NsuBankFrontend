import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import NavigationBar from "./components/NavigationBar";
import {Container, Row, Col} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserAdd from "./components/model/user/UserAdd";
import UsersList from "./components/model/user/UsersList";
import Hello from "./components/Hello";
import LoginForm from "./components/LoginForm"

function App() {

    const marginTop = {
        marginTop: "20px"
    };

    return (
        <div className="App">
            <Router>
                <NavigationBar/>
                <Container>
                    <Row>
                        <Col lg={12} style={marginTop}>
                            <Switch>
                                <Route path="/users" exact component={UsersList}/>
                                <Route path="/add/user" exact component={UserAdd}/>
                                <Route path="/" exact component={Hello}/>
                                <Route path="/login" exact component={LoginForm}/>
                                <Route path="/add/user" exact component={UserAdd}/>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default App;