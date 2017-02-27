var React = require("react");
var ReactDOM = require("react-dom")
var { Link, IndexLink } = require("react-router");
var { Navbar, NavItem, NavDropdown, MenuItem, Nav, FormGroup, FormControl, Button } = require('react-bootstrap');
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

var Nav_inst = React.createClass({

    render: function() {
        return (
            <Navbar inverse collapseOnSelect>
            
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#">React Timer App</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                
                <Navbar.Collapse>
                    <Nav>
                        <IndexLinkContainer to="/">
                            <NavItem eventKey={1}>Timer</NavItem>
                        </IndexLinkContainer>
                        <LinkContainer to="/countdown">
                            <NavItem eventKey={2}>Countdown</NavItem>
                        </LinkContainer>
                    </Nav>
                    
                    <Nav pullRight >
                        <NavItem>Created by <a href="https://github.com/DrWilliamsSteven" target="_blank">Steven Williams</a></NavItem>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        );
    }
});

module.exports = Nav_inst;
