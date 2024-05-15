import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="src\assets\gift.png" alt="" className='birthdayImg' />
          <span className="birthdayText"><b> whito Nigah</b> and <b>3 other Friends </b>have a birthday</span>
        </div>
        <img src="src\assets\ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
          </ul>

      </div>
    </div>
  )
}
