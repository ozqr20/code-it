import React, { useState } from 'react';
import '../Header/header.css'
import { Link } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useNavigate } from 'react-router-dom';
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
    HouseDoorFill,
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

    const navigate = useNavigate();

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
                        
                        
                        <Dropdown>
                       
                                <Dropdown.Toggle
                                    variant="text-dark"
                                    id="dropdown-basic"
                                    size="lg"
                                    bsPrefix
                                    className="houseDrop"
                                >
                                      <button className='houseBtn text-start'><HouseDoorFill /></button>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={(e) => {
                                    navigate("/");
                                }} >Home</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => {
                                    navigate("/react");
                                }} activeClassName="active-nav-link">c/React</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">c/FunnyCode</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Add A Community</Dropdown.Item>
                                   
                                </Dropdown.Menu>
                            </Dropdown>
                            
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
                               
                                <Stack direction="horizontal" gap={5}>
                                    <Link to="/profile">
                                    <button type="button" className="myProfileBtn">
                                        Profile
                                    </button>
                                    </Link>
                                    <a href="/" onClick={logout}>
                                        <button  className="logoutBtn">Logout</button>
                                    </a>
                                    </Stack>
                               
                            ) : (
                            
                            <Stack direction="horizontal" gap={5}>
                                <Button variant="outline-primary" size="sm" className="signBtn" onClick={handleShowModalOne}>
                                    Sign Up
                                </Button>
                                <Modal show={modalState === "modal-one"} onHide={handleClose}>
                                    <Modal.Header className="bg-warning" closeButton>
                                        <Modal.Title style={{fontFamily: 'Cairo Play', fontSize: '40px'}}>code-it</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <ApolloProvider client={client}>
                                            <Signup />
                                        </ApolloProvider>
                                    </Modal.Body>
                                </Modal>
                            

                            
                                <Button variant="primary" className="logBtn" size="sm" onClick={handleShowModalTwo}>
                                    Log In
                                </Button>
                                <Modal show={modalState === "modal-two"} onHide={handleClose}>
                                    <Modal.Header className="bg-warning" closeButton>
                                        <Modal.Title style={{fontFamily: 'Cairo Play', fontSize: '40px'}}>code-it</Modal.Title>
                                    </Modal.Header>
                                    
                                    <Modal.Body className="text-center">
                                        <ApolloProvider client={client}>
                                            
                                            <Login />
                                        </ApolloProvider>
                                    </Modal.Body>
                                    {/* <Modal.Footer>

                                        {/* <Button variant="secondary" onClick={handleClose}>
                                            Log In
                                        </Button> 
                                    </Modal.Footer> */}
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
                                    <Dropdown.Item href="#/action-2">Help Center</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Terms & Policies</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Advertise on Codeit</Dropdown.Item>
                                    <Dropdown.Item onClick={handleShowModalTwo}>Sign Up</Dropdown.Item>
                                    <Dropdown.Item onClick={handleShowModalOne}>Log In</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        
                    </Stack>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
