import { Dots, NewRoom, Search } from "../../../svg";
import Contact from "./Contact";

export default function RightHome({user}) {
  const color = "#65676b";
  return (
    <div className="fixed left-[80.7vw] top-[4rem] w-[17vw] right_home">
      <div className="">Sponsored</div>
      <div className="w-[18vw] h-[1.3px] bg-divider m-[6px_2px_0_-2px]"></div>
      <div className="">
        <div className="relative flex items-center justify-between p-[12px_0_7px_0px] font-semibold text-secondary-color">
          <div className="">Contacts</div>
          <div className="flex items-center gap-[6px] absolute right-[-9px] top-[7px] contacts-circle">
            <div className="w-[35px] h-[35px] rounded-[50%] flex items-center justify-center cursor-pointer hover:hover1">
              <NewRoom color={color} />
            </div>
            <div className="w-[35px] h-[35px] rounded-[50%] flex items-center justify-center cursor-pointer hover:hover1">
              <Search color={color} />
            </div>
            <div className="w-[35px] h-[35px] rounded-[50%] flex items-center justify-center cursor-pointer hover:hover1">
              <Dots color={color} />
            </div>
          </div>
        </div>
        <div className="">
          <Contact user={user} />
        </div>
      </div>
    </div>
  )
}
