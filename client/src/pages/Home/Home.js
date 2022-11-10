import Sidebar from "../../components/SideBar/index";
//import Feed from "../../components/feed/Feed";
import "./home.css"

export default function Home() {
  return (
    <>
      
      <div className="homeContainer">
        <Sidebar />
        {/* <Feed/> */}
      </div>
    </>
  );
}