import React from 'react';
import { Navigate, useParams } from "react-router-dom";

import {
    Container,
    Row,
    Card,
    Button,
    Col,
    Stack
} from 'react-bootstrap';
import { Slack, Github, Linkedin } from 'react-bootstrap-icons';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import ProfileBot from "../../assets/images/customer-support-bot.png"
import '../Profile/profile.css'
//import Auth from '../../utils/auth';
import ProfileEdit from '../../components/ProfileEdit';

const Profile = (props) => {
    const { username: userParam } = useParams();

    // const [addFriend] = useMutation(ADD_FRIEND);
    const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    });
  
    const user = data?.me || data?.user || {};
    // const posts = data?.posts || [];

    // navigate to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//     return <Navigate to="/profile:username" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user?.username) {
//     return (
//       <h4>
//         You need to be logged in to see this!
//       </h4>
//     );
//   }

//   const handleClick = async () => {
//     try {
//       await addFriend({
//         variables: { id: user._id },
//       });
//     } catch (e) {
//       console.error(e);
//     }
//   };

    return (
        <div>
      <div className="flex-row mb-3">
        <h2 className="text-secondary text-center p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : 'Your'} Profile.
        </h2>
        </div>        
            <Container className="profileContainer">
                
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card style={{ borderRadius: '15px' , boxShadow: "5px 5px 5px"}}>
                            <Card.Body className="text-center">
                                <div className="mt-3 mb-4">
                                    <Card.Img src={ProfileBot}
                                        className="rounded-circle" style={{ width: '100px', backgroundColor: 'chocolate' }} />
                                </div>
                                <Card.Title tag="h4">B Nel</Card.Title>
                                <Card.Text className="text-muted mb-4">
                                    @Programmer <span className="mx-2">|</span> <a href="https://github.com/">github.com</a>
                                </Card.Text>
                                <div className="mb-4 pb-2">
                                <Stack direction="horizontal" gap={3}>
                                    <Button href="https://github.com/">
                                        <Github />
                                    </Button>
                                    <Button href="https://slack.com/workspace-signin">
                                        <Slack />
                                    </Button>
                                    <Button href="https://www.linkedin.com/">
                                        <Linkedin />
                                    </Button>
                                    </Stack>
                                </div>
                                <Button onClick={(e) => {
                                    Navigate("/");
                                }}
                                    rounded size="sm" variant="outline-primary">
                                    Save Profile
                                </Button>
                                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                                    <div>
                                        <Card.Text className="mb-1 h5">8,211</Card.Text>
                                        <Card.Text className="small text-muted mb-0">Up Votes</Card.Text>
                                    </div>
                                    <div className="px-3">
                                        <Card.Text className="mb-1 h5">3,442</Card.Text>
                                        <Card.Text className="small text-muted mb-0">Followers</Card.Text>
                                    </div>
                                    <div>
                                        <Card.Text className="mb-1 h5">2,456</Card.Text>
                                        <Card.Text className="small text-muted mb-0">Posts</Card.Text>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        </Col>
                        
                <hr></hr>
                <ProfileEdit/>
            </Container>
            </div>
    );
}

export default Profile;