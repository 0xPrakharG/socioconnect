import Friendship from "./Friendship";
import { Link } from "react-router-dom"

export default function ProfilePictureInfos({ profile, visitor }) {
  return (
    <div className="profile_img_wrap">
      <div className="profile_w_left">
        <div className="profile_w_img">
          <div className="profile_w_bg" style={{backgroundSize: "cover", backgroundImage: `url(${profile.picture})`}}></div>
          {!visitor && (
            <div className="profile_circle hover:hover1">
              <i className="camera_filled_icon"></i>
            </div>
          )}
        </div>
        <div className="profile_w_col">
          <div className="profile_name">
            {profile.first_name} {profile.last_name}
            <div className="othername">(Othername)</div>
          </div>
          <div className="profile_friend_count">
          {profile?.friends && (
        <div className="profile_card_count">
          {
            profile?.friends.length === 0 ? "" : profile?.friends.length === 1 ? "1 friend" : `${profile?.friends.length} friends`
          }
        </div>
      )}
          </div>
          <div className="profile_friend_imgs">
            {profile?.friends && profile?.friends.slice(0,6).map((friend, i) => (
              <Link to={`/profile/${friend.username}`} key={i}>
                <img src={friend.picture} alt="" style={{transform : `translatex(${-i*8}px)`, zIndex : `${i}`}} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      {visitor ? (
        <Friendship friendshipp={profile?.friendship} profileId={profile._id} />
        ):(
          <div className="profile_w_right">
            <div className="blue-btn">
              <img src="../../../icons/plus.png" alt="" className="invert" />
              <span>Add to Story</span>
            </div>
            <div className="gray-btn">
              <i className="edit_icon"></i>
              <span>Edit Profile</span>
            </div>
          </div>
      )}
    </div>
  )
}
