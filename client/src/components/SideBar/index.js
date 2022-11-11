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
// import { Users } from "../../dummyData";


function Sidebar() {
  return (
    
    // <div className="sidebar">
      <Container className="sideContainer">
        <Row className="sideBar">
          
          <ul className="sidebarList">
          <li className="sidebarListItem">
            <Rss className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
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
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <Briefcase className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <CalendarEvent className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
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