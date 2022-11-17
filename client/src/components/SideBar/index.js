import "./sidebar.css";
import {
  Rss,
  People,
  Chat,
  CameraReels,
  Bookmark,
  Briefcase,
  CalendarEvent,
  Mortarboard,
} from 'react-bootstrap-icons';
import {

  Container,
  Row,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


function Sidebar() {
  const navigate = useNavigate();
  return (

    // <div className="sidebar">
    <Container className="sideContainer">
      <Row className="sideBar">

        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Rss onClick={(e) => {
              navigate("/");
            }} className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <CameraReels className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <People className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Saved Posts</span>
          </li>
          <li className="sidebarListItem">
            <Briefcase onClick={(e) => {
              navigate("/jobs");
            }} className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Mortarboard className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Edit Shortcuts</button>
        <hr className="sidebarHr" />
        {/* <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul> */}

      </Row>
    </Container>
    // </div>

  );
}

export default Sidebar;