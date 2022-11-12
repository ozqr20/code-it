import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from "react-router-dom";
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';
import './PostForm.css';
import PostOpts from './PostOpts';
import { Form, Container, Col } from 'react-bootstrap';
import Rules from './Rules';

const PostForm = (props) => {
  const navigate = useNavigate();
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredText, setEnteredText] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }
  const textChangeHandler = (event) => {
    setEnteredText(event.target.value)
  }

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

  // submit form
  const addPostHandler = async (event) => {
    event.preventDefault();
    
    try {
        await addPost({
           variables: {enteredTitle, enteredText},
        });
    } catch (e) {
        console.error(e);
    }
  };

//   const addPostHandler = (event) => {
//     event.preventDefault();
//     props.submissionHandlers.onAddPost(enteredTitle, enteredText, author_id, author_username)
//   }

  return (
    <Container className="wrapperPost">
        <Col xs={7} className="formInput">
		<Form onSubmit={addPostHandler} >
            
			<PostOpts formType={props.formType} onSetFormType={props.onSetFormType}/>
			<input 
				type="text" 
				id="title" 
				placeholder="Title" 
				className="title" 
				value={enteredTitle}
				onChange={titleChangeHandler}
			/>
			<textarea
				type="text" 
				id="text" 
				placeholder="Text (required)" 
				className="textarea"
				value={enteredText}
				onChange={textChangeHandler}
			/>
			<button 
            type="submit"  
            onClick={(e) => {
              navigate("/");
            }
        } className="submit">Submit</button> 
            
    </Form>
    </Col>
    <Col md={{ span: 4, offset: 1 }} className="rules"><Rules /></Col>
    </Container>
  );
}
//comment
export default PostForm;