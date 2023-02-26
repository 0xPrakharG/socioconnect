import { Feeling, LiveVideo, Photo } from "../../svg";

export default function CreatePost({ user }) {
  return (
    <div className="bg-primary rounded-[10px] mt-[1.1rem] shadow-[0_1px_2px] shadow-shadow-1 w-[100%] cursor-pointer create_post">
      <div className="flex items-center gap-2 p-[10px_17px_5px_15px]">
        <img src={user?.picture} alt="" className="w-[40px] h-[40px] rounded-[50%] object-cover"/>
        <div className="bg-forth h-[41px] text-secondary-color flex-1 rounded-[50px] text-[17px] leading-[21px] flex items-center pl-[10px] hover:hover2">
          What's on your mind, {user?.first_name}
        </div>
      </div>
      <div className="w-[95%] h-[1px] bg-third m-[7px_10px]"></div>
      <div className="grid grid-cols-3 p-[0_10px_8px_10px]">
        <div className="flex items-center justify-center gap-2 font-semibold p-[7px] text-secondary-color rounded-[10px] text-[14px] hover:hover1">
          <LiveVideo color="#f3425f" />
          Live Video
        </div>
        <div className="flex items-center justify-center gap-2 font-semibold p-[7px] text-secondary-color rounded-[10px] text-[14px] hover:hover1">
          <Photo color="#4bbf67" />
          Photo/Video
        </div>
        <div className="flex items-center justify-center gap-2 font-semibold p-[7px] text-secondary-color rounded-[10px] text-[14px] hover:hover1">
          <Feeling color="#f7b928" />
          Feeling/Activity
        </div>
      </div>
    </div>
  )
}
