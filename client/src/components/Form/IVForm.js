import { useState } from 'react';
import './IVForm.css';
import PostOpts from './PostOpts';
import MediaThumbnail from './MediaThumbnail.js';
import { Container, Col, Form } from 'react-bootstrap';

import Rules from '../../components/Form/Rules'

const IAForm = (props) => {

	const [enteredTitle, setEnteredTitle] = useState('');
	const [uploadedFile, setUploadedFile] = useState(null);
	const [image, setImage] = useState(null);
	const [show, setShow] = useState(false);
	const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

	const fileUploadHandler = (event) => {
		setUploadedFile(URL.createObjectURL(event.target.files[0]));
	}

	const addIAHandler = (event) => {
    event.preventDefault();
    // EDIT: add err checking
		// save to backend with FormData.
		console.log(enteredTitle, uploadedFile);
		// setImage(event.target.files[0]));
		setShow(true);
    // props.submissionHandlers.onAddIA(enteredTitle, )
  }
	
  return (
    <Container className="ivWrapper">
        <Col xs={7} className="ivInput">
		<Form onSubmit={addIAHandler} action="/">
			{show && <MediaThumbnail file={uploadedFile}/>}
			<PostOpts formType={props.formType} onSetFormType={props.onSetFormType}/>
			<input 
				type="text" 
				id="title" 
				placeholder="Title" 
				className="title" 
				value={enteredTitle}
				onChange={(event) => setEnteredTitle(event.target.value)}
			/>
			<div className="uploadContainer">
				{/* EDIT: needs to say: "Drag and drop images or [Upload]" */}
				{/* onChange will keep track of when file has been uploaded/changed. */}
				<input type="file" onChange={fileUploadHandler} name="uploadedFile"/>
			</div>
			<button type="submit" className="upload">Submit</button> 
    </Form>
    </Col>
    <Col md={{ span: 4, offset: 1 }} className="rulesReact"><Rules /></Col>
    </Container>
  );
}

export default IAForm;