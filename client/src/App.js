import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../src/components/Header";
import Home from "../src/pages/Home/Home";
import Profile from "../src/pages/Profile/Profile"
import CreatePost from "../src/pages/CreatePost/CreatePost";
import Post from "../src/pages/Post/Post";
import CreateIVPost from '../src/pages/CreateIVPost/CreateIVPost';
import ReactHome from '../src/pages/ReactHome/ReactHome';
import CreateReactPost from '../src/pages/ReactHome/ReactHome';
import ReactPost from './components/Sub/ReactSub/ReactPost';

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
            path="/createpost"
            element={<CreatePost />}
          />
          <Route path="/profile">
            <Route path=":username" element={<Profile />} />
            <Route path="" element={<Profile />} />
          </Route>
          <Route
            path="/post/:id"
            element={<Post />}
          />
          <Route
          path="/createivpost"
          element={<CreateIVPost/>}
          />
          <Route
          path="/react"
          element={<ReactHome/>}
          />
          <Route
            path="/createreactpost"
            element={<CreateReactPost />}
            />
            <Route
            path="/reactpost/:id"
            element={<ReactPost />}
          />
        </Routes>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
