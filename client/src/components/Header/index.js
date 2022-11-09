import React, { useState } from 'react';
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
    Person,
} from 'react-bootstrap-icons';
//import Button from '../Button';
//import {Link, Router} from "react-router-dom";
// import ClickOutHandler from "react-clickout-handler";
// import RedirectContext from "../RedirectContext";
// import UserContext from "../UserContext";
//import { Header } from 'react-bootstrap';

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
    // const [userDropdownVisibilityClass,setUserDropdownVisibilityClass] = useState('hidden');
    const [searchText, setSearchText] = useState('');
    // const { setRedirect } = useContext(RedirectContext);

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
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
            <Navbar bg="light" expand="lg" sticky="top">
                <Container fluid style={{ padding: "0px 125px 0px 5px" }}>

                    {/* <Router>
                <Link to="/"> */}
                    <Stack direction="horizontal" gap={1}>
                        <Navbar.Brand href="#">
                            <img src={Bot} alt="chatbot" className="chatBot" style={{ height: '60px' }} />

                        </Navbar.Brand>
                        <Navbar.Brand className="codeIt" style={{ fontSize: "35px" }}>code-it</Navbar.Brand>
                    </Stack>
                    {/* </Link>
                </Router> */}
                    <Stack direction="horizontal" gap={5}>
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

                        {/* {!user.username && ( */}

                        <Stack direction="horizontal" gap={1}>
<>
                            <Button variant="outline-primary" className="signBtn" onClick={handleShowModalOne}>
                                Sign Up
                            </Button>
                            <Modal show={modalState === "modal-one"} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Sign Up</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ApolloProvider client={client}>
                                    <Signup/>
                                    </ApolloProvider>
                                    </Modal.Body>
                                <Modal.Footer>

                                    <Button variant="secondary" onClick={handleClose}>
                                       Sign Up!
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            </>

<>
                            <Button className="logBtn" onClick={handleShowModalTwo}>
                                Log In
                            </Button>
                            <Modal show={modalState === "modal-two"} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Log In</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <ApolloProvider client={client}>
                                    <Login/>
                                    </ApolloProvider>
                                </Modal.Body>
                                <Modal.Footer>

                                    <Button variant="secondary" onClick={handleClose}>
                                        Log In
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            </>
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
                    </Stack>


                    {/* )} */}

                </Container>
            </Navbar>
        </>
    )
}

export default Header;


 