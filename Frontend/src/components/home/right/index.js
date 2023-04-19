import { Dots, NewRoom, Search } from "../../../svg";
import Contact from "./Contact";

export default function RightHome({user}) {
  const color = "#65676b";
  return (
    <div className="fixed left-[82.7vw] top-[4rem] w-[17vw] right_home">
      <div className="">Hackathons</div>
      <div className="w-[18vw] h-[1.3px] bg-divider m-[6px_2px_0_-2px] splitter1"></div>
      <div className="">
        <div className="relative flex items-center justify-between p-[12px_0_7px_0px] font-semibold text-secondary-color">
          <div className="">Name</div>
          <div className="flex items-center gap-[6px] absolute right-[-9px] top-[7px] contacts-circle">
            {/* <div className="w-[35px] h-[35px] rounded-[50%] flex items-center justify-center cursor-pointer hover:hover1">
              <NewRoom color={color} />
            </div>
            <div className="w-[35px] h-[35px] rounded-[50%] flex items-center justify-center cursor-pointer hover:hover1">
              <Search color={color} />
            </div>
            <div className="w-[35px] h-[35px] rounded-[50%] flex items-center justify-center cursor-pointer hover:hover1">
            <Dots color={color} />
          </div> */}
          <div className="w-[35px] h-[35px] mr-6 rounded-[50%] flex items-center justify-center cursor-pointer hover:hover1">
            Date
          </div>

          </div>
        </div>
        <div className="relative flex items-center justify-between bg-third p-[7px_10px] rounded-[6px]">
          {/* <Contact user={user} /> */}
          <div className="w-[130px]">Skill India 2023</div>
          <div>10 May</div>
        </div>
        <div className="relative flex items-center justify-between bg-third p-[7px_10px] rounded-[6px] mt-2">
          {/* <Contact user={user} /> */}
          <div className="w-[130px]">Baraza 2023</div>
          <div>20 May</div>
        </div>
        <div className="relative flex items-center justify-between bg-third p-[7px_10px] rounded-[6px] mt-2">
          {/* <Contact user={user} /> */}
          <div className="w-[130px]">Flyer 2023</div>
          <div>22 May</div>
        </div>
        <div className="relative flex items-center justify-between bg-third p-[7px_10px] rounded-[6px] mt-2">
          {/* <Contact user={user} /> */}
          <div className="w-[130px]">KNX Hack 2023</div>
          <div>30 May</div>
        </div>
      </div>
    </div>
  )
}
