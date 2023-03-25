import "./style.css";
import axios from "axios";
import { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header";
import { profileReducer } from "../../functions/reducers";
import Cover from "./Cover";
import PplYouMayKnow from "./PplYouMayKnow";
import ProfileMenu from "./ProfileMenu";
import ProfilePictureInfos from "./ProfilePictureInfos";
import CreatePost from "../../components/createPost";
import GridPosts from "./GridPosts";
import Post from "../../components/post";
import Photos from "./Photos";
import Friends from "./Friends";

export default function Profile({ setVisible }) {
  const { username } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({...state}));
  var userName = username === undefined ? user.username : username;
  const [{ loading, error, profile }, dispatch] = useReducer(profileReducer, {
    loading: false,
    profile: {},
    error: "",
  });
  useEffect(() => {
    getProfile();
  }, [userName]);

  const visitor = userName === user.username ? false : true;

  const getProfile = async() => {
    try {
      dispatch({
        type: "PROFILE_REQUEST",
      });
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getProfile/${userName}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if(data.ok === false){
        navigate("/profile");
      } else {
        dispatch({
          type: "PROFILE_SUCCESS",
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: "PROFILE_ERROR",
        payload: error.response.data.message,
      });
    }
  };
  console.log(profile);
  return (
    <div className="profile">
      <Header page="profile" />
      <div className="profile_top">
        <div className="profile_container">
          <Cover cover={profile.cover} visitor={visitor} />
          <ProfilePictureInfos profile={profile} visitor={visitor} />
          <ProfileMenu />
        </div>
      </div>
      <div className="profile_bottom">
        <div className="profile_container">
          <div className="bottom_container">
            <PplYouMayKnow />
            <div className="profile_grid">
              <div className="profile_left">
                <Photos username={userName} token={user.token} />
                <Friends friends={profile.friends} />
              </div>
              <div className="profile_right">
                {!visitor && <CreatePost user={user} profile setVisible={setVisible} />}
                <GridPosts />
                <div className="posts">
                  {
                    profile.posts && profile.posts.length ?
                    profile.posts.map((post) => (
                      <Post post={post} user={user} key={post._id} profile />
                    )) : (
                      <div className="no_posts">No Posts Available</div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
