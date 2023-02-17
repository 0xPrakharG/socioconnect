export default function DisplayAccessibility({ setVisible }) {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 w-[360px] h-fit rounded-[10px] bg-primary shadow-[2px_2px_2px] shadow-shadow-1 select-none p-[10px] mt-0 user_menu_options">
      <div className="flex items-center font-bold text-[24px]">
        <div className="circle hover:hover1" onClick={()=>{setVisible(0)}}>
          <i className="arrow_back_icon"></i>
        </div>
        Display & Accessibility
      </div>
      <div className="p-[10px] mt-[5px] flex items-center gap-[5px]">
        <div className="small_circle" style={{ width: "60px" }}>
          <i className="dark_filled_icon"></i>
        </div>
        <div className="flex flex-col justify-center">
          <span className="menu_span_1">Dark Mode</span>
          <span className="menu_span_2">
            Adjust the appearance of SocioConnect to reduce glare and give your eyes a break.
          </span>
        </div>
      </div>
      <label htmlFor="darkOff" className="flex items-center justify-between ml-[50px] font-semibold p-[10px] cursor-pointer rounded-[10px] hover:hover1">
        <span>Off</span>
        <input type="radio" name="dark" id="darkOff" className="w-[20px] h-[20px]" />
      </label>
      <label htmlFor="darkOn" className="flex items-center justify-between ml-[50px] font-semibold p-[10px] cursor-pointer rounded-[10px] hover:hover1">
        <span>On</span>
        <input type="radio" name="dark" id="darkOn" className="w-[20px] h-[20px]" />
      </label>
      <div className="p-[10px] mt-[5px] flex items-center gap-[5px]">
        <div className="small_circle" style={{ width: "50px" }}>
          <i className="compact_icon"></i>
        </div>
        <div className="flex flex-col justify-center">
          <span className="menu_span_1">Compact Mode</span>
          <span className="menu_span_2">
            Make your font size smaller so more content can fit on the screen.
          </span>
        </div>
      </div>
      <label htmlFor="compactOff" className="flex items-center justify-between ml-[50px] font-semibold p-[10px] cursor-pointer rounded-[10px] hover:hover1">
        <span>Off</span>
        <input type="radio" name="compact" id="compactOff" className="w-[20px] h-[20px]" />
      </label>
      <label htmlFor="compactOn" className="flex items-center justify-between ml-[50px] font-semibold p-[10px] cursor-pointer rounded-[10px] hover:hover1">
        <span>On</span>
        <input type="radio" name="compact" id="compactOn" className="w-[20px] h-[20px]" />
      </label>
      <div className="relative flex items-center mt-[5px] p-[7px] font-semibold text-[14px] rounded-[10px] hover:hover3 hover:hover3">
        <div className="small_circle">
          <i className="keyboard_icon"></i>
        </div>
        <span>Keyboard</span>
        <div className="absolute right-[10px] top-[50%] translate-y-[-40%]">
          <i className="right_icon"></i>
        </div>
      </div>
    </div>
  )
}
