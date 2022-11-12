import Sidebar from "../../components/SideBar/index";
import Feed from "../../components/Feed/index";
import ProfileBar from "../../components/ProfileBar/index"
import "./home.css"

export default function Home() {
  return (
    <>
      
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <ProfileBar />
      </div>
    </>
  );
}