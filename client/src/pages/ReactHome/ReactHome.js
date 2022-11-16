import React from 'react';
import Sidebar from "../../components/SideBar/index";
import ReactFeed from "../../components/Sub/ReactSub/ReactFeed";
import { QUERY_REACT_POSTS } from "../../utils/queries";
import { useQuery } from '@apollo/client';
import "./reacthome.css"
import ReactComCard from '../../components/Sub/ReactSub/ReactComCard/index';
import ReactHeader from '../../components/Sub/ReactSub/ReactHeader/index'
import { Stack, Col } from 'react-bootstrap';

 const ReactHome = () => {
  const { data } = useQuery(QUERY_REACT_POSTS);
//   const { data: userData } = useQuery(QUERY_ME);
  const reactposts = data?.reactposts || [];
  return (
    <>
      
      <div className="reactContainer">
        
        <Col>
        <ReactFeed
        reactposts={reactposts}
        />
        </Col>
        <Col style={{paddingTop: '40px'}}>
        <Stack direction="vertical">
        
        <ReactComCard/>
        </Stack>
        </Col>
      </div>
    </>
  );
}

export default ReactHome;