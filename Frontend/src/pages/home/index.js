import { useSelector } from "react-redux";
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import RightHome from "../../components/home/right";
import Stories from "../../components/home/stories";

export default function Home() {
  const { user } = useSelector((user) => ({...user}));
  return (
    <div className="min-h-[100vh] bg-secondary grid grid-cols-3">
      <Header />
      <LeftHome user={user} />
      <div className="absolute mt-[75px] ml-[27.8vw]">
        <Stories />
      </div>
      <RightHome user={user} />
    </div>
  )
}
