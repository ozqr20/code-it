import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../src/components/Header";
import Home from "../src/pages/Home/Home";
import Form from "../src/pages/Form/Form";


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



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/form"
            element={<Form />}
          />
          {/* <Route path="/profile">
            <Route path=":username" element={<Profile />} />
            <Route path="" element={<Profile />} />
          </Route>
          <Route
            path="/post/:id"
            element={<SinglePost />}
          /> */}
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
