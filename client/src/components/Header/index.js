import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Signup from '../SignUp';
import Login from '../LogIn';
import Bot from "../../assets/images/bot.png"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack'
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    Person
} from 'react-bootstrap-icons';
import Auth from '../../utils/auth';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function Header() {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    const [searchText, setSearchText] = useState('');

    const [modalState, setModalState] = useState("close")

    const handleShowModalOne = () => {
        setModalState("modal-one")
    }

    const handleShowModalTwo = () => {
        setModalState("modal-two")
    }

    const handleClose = () => {
        setModalState("close")
    }

    return (
        <>
            <Navbar bg="white" expand="lg" sticky="top" style={{ boxShadow: "0px 8px 6px -7px #999" }}>
                <Container fluid style={{ padding: "0px 125px 0px 5px" }}>



                    <Stack direction="horizontal" gap={1}>
                        <Link to="/">
                            <Navbar.Brand href="#">
                                <img src={Bot} alt="chatbot" className="chatBot" style={{ height: '60px' }} />
                            </Navbar.Brand>
                        </Link>
                        <Navbar.Brand className="codeIt" style={{ fontSize: "35px" }}>code-it</Navbar.Brand>
                    </Stack>

                    <Stack direction="horizontal" gap={4}>
                        <Form className="d-flex">
                            <Form.Control
                                style={{ width: "500px" }}
                                type="text"
                                className="me-2"
                                placeholder="Search"
                                value={searchText}
                                onChange={ev => setSearchText(ev.target.value)}
                            />
                        </Form>

                        
                            {Auth.loggedIn() ? (
                                <>
                                    <Link to="/profile">
                                    <Button variant="outline-primary" size="sm" className="signBtn">My Profile</Button></Link>
                                    <a href="/" onClick={logout}>
                                        <Button variant="outline-primary" size="sm" className="signBtn">Logout</Button>
                                    </a>
                                </>
                            ) : (
                            
                            <Stack direction="horizontal" gap={5}>
                                <Button variant="outline-primary" size="sm" className="signBtn" onClick={handleShowModalOne}>
                                    Sign Up
                                </Button>
                                <Modal show={modalState === "modal-one"} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Sign Up</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <ApolloProvider client={client}>
                                            <Signup />
                                        </ApolloProvider>
                                    </Modal.Body>
                                    <Modal.Footer>

                                        <Button variant="secondary" onClick={handleClose}>
                                            Sign Up!
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            

                            
                                <Button variant="primary" className="logBtn" size="sm" onClick={handleShowModalTwo}>
                                    Log In
                                </Button>
                                <Modal show={modalState === "modal-two"} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Log In</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <ApolloProvider client={client}>
                                            <Login />
                                        </ApolloProvider>
                                    </Modal.Body>
                                    <Modal.Footer>

                                        <Button variant="secondary" onClick={handleClose}>
                                            Log In
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                </Stack>
                            )}
                            
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="text-dark"
                                    id="dropdown-basic"
                                    size="lg"
                                    bsPrefix
                                    className="personBtn"
                                >
                                    <Person />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Dark Mode</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Help Center</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Terms & Policies</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Advertise on Codeit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Sign Up</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Log In</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        
                    </Stack>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
