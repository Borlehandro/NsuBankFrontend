import React from "react";
import './App.css';
import NavigationBar from "./components/NavigationBar";
import {Container, Row, Col} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserAdd from "./components/model/user/UserAdd";
import UsersList from "./components/model/user/UsersList";
import Hello from "./components/Hello";
import LoginForm from "./components/LoginForm"
import UserEdit from "./components/model/user/UserEdit";
import GiveCredit from "./components/business/GiveCredit";
import SetOffer from "./components/business/SetOffer";
import ProcessPayment from "./components/business/ProcessPayment";
import CreditEdit from "./components/model/credit/CreditEdit";
import CreditList from "./components/model/credit/CreditList";

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
                                <Route path="/credits" exact component={CreditList}/>
                                <Route path="/add/user" exact component={UserAdd}/>
                                <Route path="/" exact component={Hello}/>
                                <Route path="/login" exact component={LoginForm}/>
                                <Route path="/add/user" exact component={UserAdd}/>
                                <Route path="/edit/user/:id" exact component={UserEdit}/>
                                <Route path="/edit/credit/:id" exact component={CreditEdit}/>
                                <Route path="/give/credit/:id/:offerId" exact component={GiveCredit}/>
                                <Route path="/give/offer/:id" exact component={SetOffer}/>
                                <Route path="/pay/:id/:creditId" exact component={ProcessPayment}/>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default App;