import { useRef, useState } from "react";
import useClickOutside from "../../helpers/clickOutside";

export default function Friendship({ friendship }) {
  const [friendsMenu, setFriendsMenu] = useState(false);
  const [respondMenu, setRespondMenu] = useState(false);
  const menu = useRef(null);
  const menu1 = useRef(null);

  useClickOutside(menu, () => setFriendsMenu(false));
  useClickOutside(menu1, () => setRespondMenu(false));
  return (
    <div className="friendship">
      {
        friendship?.friends ? (
          <div className="friends_menu_wrap">
            <button className="gray-btn" onClick={() => setFriendsMenu((prev) => !prev)}>
              <img src="../../../icons/friends.png" alt="" />
              <span>Friends</span>
            </button>
            {
              friendsMenu && <div className="open_cover_menu" ref={menu}>
                <div className="open_cover_menu_item hover:hover1">
                  <img src="../../../icons/favoritesOutline.png" alt="" />
                  Favourites
                </div>
                <div className="open_cover_menu_item hover:hover1">
                  <img src="../../../icons/editFriends.png" alt="" />
                  Edit Friend List
                </div>
                {friendship?.following ? (
                <div className="open_cover_menu_item hover:hover1">
                  <img src="../../../icons/unfollowOutlined.png" alt="" />
                  Unfollow
                </div>
                ): (
                  <div className="open_cover_menu_item hover:hover1">
                  <img src="../../../icons/follow.png" alt="" />
                  Follow
                </div>
                )}
                <div className="open_cover_menu_item hover:hover1">
                  <i className="unfriend_outlined_icon"></i>
                  Unfriend
                </div>
              </div>
            }
          </div>
        ) : ( 
          !friendship?.requestSent && 
          !friendship?.requestRecieved && (
          <button className="blue-btn">
              <img src="../../../icons/addFriend.png" alt="" className="invert" />
              <span>Add Friend</span>
            </button>
          )
        )
      }
      {
        friendship?.requestSent ? (
          <button className="blue-btn">
            <img src="../../../icons/cancelRequest.png" alt="" className="invert" />
            <span>Cancel Request</span>
          </button>
        ) : (
          friendship?.requestRecieved && 
          <div className="friends_menu_wrap">
          <button className="gray-btn" onClick={() => setRespondMenu((prev) => !prev)}>
            <img src="../../../icons/friends.png" alt="" />
            <span>Respond</span>
          </button>
          {
            respondMenu && 
            <div className="open_cover_menu" ref={menu1}>
              <div className="open_cover_menu_item hover:hover1">
                Confirm
              </div>
              <div className="open_cover_menu_item hover:hover1">
                Delete
              </div>
            </div>
          }
        </div>
        )
      }
      {
        friendship?.following ? (
        <button className="gray-btn">
          <img src="../../../icons/follow.png" alt="" />
          <span>Following</span>
        </button>
        ) : (
          <button className="blue-btn">
          <img src="../../../icons/follow.png" className="invert" alt="" />
          <span>Follow</span>
        </button>
        )
      }
      <button className={friendship?.friends ? "blue-btn" : "gray-btn"}>
          <img src="../../../icons/message.png" className={friendship?.friends ? "invert" : ""} alt="" />
          <span>Message</span>
        </button>
    </div>
  )
}
