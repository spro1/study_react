import React, {Component} from 'react';
import { Nav, Navbar, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';

class TopNav extends Component{
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/sutdy_react">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    웹사이트 모음
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/study_react">Home</Link>
                    <Link className="nav-link" to="/study_react/photo">Photo</Link>
                    <Link className="nav-link" to="/study_react/corona">Corona</Link>
                </Nav>
            </Navbar>
        );
    }
}

export default TopNav;