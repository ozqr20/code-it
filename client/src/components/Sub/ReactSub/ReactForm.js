import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { ADD_REACT_POST } from '../../../utils/mutations';
import { QUERY_REACT_POSTS, QUERY_ME } from '../../../utils/queries';
import './reactform.css';
import PostOpts from '../../../components/Form/PostOpts';
import { Form, Container, Col } from 'react-bootstrap';
import Rules from '../../../components/Form/Rules';

const ReactForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredText, setEnteredText] = useState('');
//   const [enteredSub, setEnteredSub] = useState('Code');
  const navigate = useNavigate();

  const [addReactPost] = useMutation(ADD_REACT_POST, {
    update(cache, {data: { addReactPost }} ) {
        
        try { 
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, reactposts: [...me.reactposts, addReactPost]}},
            });
        } catch (e) {
            console.log('post added!')
        }

        //update post array cache
        const { reactposts } = cache.readQuery({ query: QUERY_REACT_POSTS });
        cache.writeQuery({
            query: QUERY_REACT_POSTS,
            data: { reactposts: [addReactPost, ...reactposts] },
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
  const addReactPostHandler = async (event) => {
    event.preventDefault();
   
    try {
        await addReactPost({
           variables: {enteredTitle, enteredText},
           
        });
        navigate("/react")
    } catch (e) {
        console.error(e);
    }
  };

  return (
    <Container className="wrapperReact">
        <Col xs={7} className="formReact">
            
		<Form onSubmit={addReactPostHandler} action="/react">
            
			<PostOpts formType={props.formType} onSetFormType={props.onSetFormType}/>
            
			<input 
				type="text" 
				id="title" 
				placeholder="Title" 
				className="titleReact" 
				value={enteredTitle}
				onChange={(event) => setEnteredTitle(event.target.value)}
			/>
			<textarea
				type="text" 
				id="text" 
				placeholder="Text (required)" 
				className="textareaReact"
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
                
            
			<button type="submit" className="submitReact">Submit</button> 
          
    </Form>
    
    </Col>
    <Col md={{ span: 4, offset: 1 }} className="rules"><Rules /></Col>
    </Container>
  );
}
//comment
export default ReactForm;
