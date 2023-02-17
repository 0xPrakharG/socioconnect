import { useEffect, useRef, useState } from "react";
import { Return, Search } from "../../svg";
import useClickOutside from "../../helpers/clickOutside";

export default function SearchMenu({color, setShowSearchMenu}) {
  const [iconVisible, setIconVisible] = useState(true);
  const menu = useRef(null);
  const input = useRef(null);
  useClickOutside(menu, () => {
    setShowSearchMenu(false);
  });
  useEffect(() => {
    input.current.focus();
  },[])
  return (
    <div className="search_area absolute flex items-start flex-col gap-[6px] bg-primary shadow-[0px_12px_12px] shadow-shadow-1 rounded-b-[10px] max-h-[70vh] min-h-[400px] pt-[8px] pr-[16px] pb-[10px] pl-[6px]" ref={menu}>
      <div className="flex items-center gap-[6px]">
        <div>
          <div className="cursor-pointer" onClick={() => setShowSearchMenu(false)}>
            <Return color={color} />
          </div>
        </div>
        <div className="py-[10px] header_left pr-[44px] pl-[12px] w-[252px] gap-[4px]" onClick={() => {
          input.current.focus()
        }}>
          {iconVisible && <div><Search color={color} /></div>}
          <input type="text" placeholder="Search SocioConnect" className="pl-1 bg-transparent w-[100%] outline-none" ref={input} onFocus={()=>{setIconVisible(false)}} onBlur={() => {setIconVisible(true)}} />
        </div>
      </div>
      <div className="w-[100%] flex items-center justify-between p-[10px] text-[14px]">
        <span className="font-semibold text-[16px]">Reacent Searches</span>
        <a className="cursor-pointer text-green-color">Edit</a>
      </div>
      <div className="w-[100%]"></div>
      <div className=""></div>
    </div>
  )
}
