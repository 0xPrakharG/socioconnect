import { ArrowRight, Plus } from "../../../svg";
import { stories } from "../../../data/home";
import Story from "./Story";
import { useMediaQuery } from "react-responsive";

export default function Stories() {
  const query1150px = useMediaQuery({
    query: "(max-width: 1150px)",
  })
  const query950px = useMediaQuery({
    query: "(max-width: 950px)",
  })
  const max = query950px ? 5 : query1150px ? 4 : stories.length;
  return (
    <div className="relative grid gap-[10px] p-[6px_0] stories">
      <div className="relative h-[190px] w-[100%] rounded-[10px] overflow-hidden bg-[#fff] cursor-pointer shadow-[0px_1px_2px] shadow-shadow-1">
        <img src="../../../images/default_pic.png" alt="" className="absolute h-[75%] w-[100%] object-cover brightness-90" />
        <div className="absolute left-[50%] top-[65%] translate-x-[-50%] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center bg-green-color cursor-pointer border-[3px] border-solid border-[#fff]">
          <Plus color="#fff" />
        </div>
        <div className="text-[#000] absolute top-[84%] left-[15%] text-[12px]">Create Story</div>
      </div>
      {
        stories.slice(0, max).map((story, i) => (
          <Story key={i} profile_picture={story.profile_picture} profile_name={story.profile_name} image={story.image} />
        ))
      }
      <div className="w-[40px] h-[40px] bg-primary rounded-[50%] grid items-center justify-center absolute top-[50%] translate-y-[-50%] right-[-5px] shadow-[1px_2px] shadow-shadow-1 cursor-pointer">
        <ArrowRight color="#65676b" />
      </div>
    </div>
  )
}
