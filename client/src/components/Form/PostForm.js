import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';
import './PostForm.css';
import PostOpts from './PostOpts';
import { Form, Container, Col } from 'react-bootstrap';
import Rules from './Rules';

const PostForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredText, setEnteredText] = useState('');
//   const [enteredSub, setEnteredSub] = useState('Code');
//   const navigate = useNavigate();

  const [addPost] = useMutation(ADD_POST, {
    update(cache, {data: { addPost }} ) {
        
        try { 
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, posts: [...me.posts, addPost]}},
            });
        } catch (e) {
            console.log('post added!')
        }

        //update post array cache
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        cache.writeQuery({
            query: QUERY_POSTS,
            data: { posts: [addPost, ...posts] },
        });
    }
  });
    //update state based on form input changes
    const handleChange = (event) => {
      if (event.target.value.length <= 280) {
        setEnteredTitle(event.target.value);
        setEnteredText(event.target.value.length);
        // setEnteredSub(event.target.value);
      }
    };



  // submit form
  const addPostHandler = async (event) => {
    event.preventDefault();
    // navigate('/', {replace: true})
    try {
        await addPost({
           variables: {enteredTitle, enteredText},
           
        });
    } catch (e) {
        console.error(e);
    }
  };

  return (
    <Container className="wrapperPost">
        <Col xs={7} className="formInput">
            
		<Form onSubmit={addPostHandler} action="/">
            
			<PostOpts formType={props.formType} onSetFormType={props.onSetFormType}/>
            
			<input 
				type="text" 
				id="title" 
				placeholder="Title" 
				className="title" 
				value={enteredTitle}
				onChange={(event) => setEnteredTitle(event.target.value)}
			/>
			<textarea
				type="text" 
				id="text" 
				placeholder="Text (required)" 
				className="textarea"
				value={enteredText}
				onChange={(event) => setEnteredText(event.target.value)}
			/>
            {/* <input
                type="text"
                id="sub"
                name="sub"
                className="sub"
                value={enteredSub}
                onChange={(event) => setEnteredSub(event.target.value)}
                /> */}
                    {/* <option value="cute">Code</option>
                    <option value="cute">CuteCode</option>
                    <option value="funny">FunnyCode</option> */}
                
            {/* <Link to="/"> */}
			<button type="submit" className="submit">Submit</button> 
            {/* </Link> */}
    </Form>
    
    </Col>
    <Col md={{ span: 4, offset: 1 }} className="rules"><Rules /></Col>
    </Container>
  );
}
//comment
export default PostForm;
