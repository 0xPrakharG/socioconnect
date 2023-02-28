import { useSelector } from "react-redux";
import CreatePost from "../../components/createPost";
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import RightHome from "../../components/home/right";
import Stories from "../../components/home/stories";
import "./styles.css";

export default function Home() {
  const { user } = useSelector((user) => ({...user}));
  return (
    <div>
    <div className="min-h-[100vh] bg-secondary grid grid-cols-3">
      <Header />
      <LeftHome user={user} />
    <div className="absolute mt-[75px] left-[50%] translate-x-[-50%] home_middle">
      <Stories />
      <CreatePost user={user} />
    </div>
    </div>
      <RightHome user={user} />
    </div>
  )
}
