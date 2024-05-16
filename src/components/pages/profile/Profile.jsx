import "./profile.css";
import Topbar from "../../topbar/Topbar";
import Sidebar from "../../sidebar/Sidebar";
import Rightbar from "../../rightbar/Rightbar";
import Feed from "../../feed/Feed";

export default function Profile() {
  return (
    <>
      <Topbar></Topbar>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="src\assets\post\3.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="src\assets\person\7.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak koachalu</h4>
              <span className="profileInfoDesc">Hello my friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
