import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const SearchBar = ({ searchQuery, setSearchQuery }) => {

    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (

        <Form className="d-flex"            
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
        >
        <Form.Control
                style={{ width: "500px" }}
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search Code-it"
                name="s"
            ></Form.Control>
            <button type="submit">Search</button>
            </Form>
        
    );
    };

export default SearchBar;