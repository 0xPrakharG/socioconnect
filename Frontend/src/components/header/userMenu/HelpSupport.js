export default function HelpSupport({ setVisible }) {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 w-[360px] h-fit rounded-[10px] bg-primary shadow-[2px_2px_2px] shadow-shadow-1 select-none p-[10px] mt-0 user_menu_options">
      <div className="flex items-center font-bold text-[24px]">
        <div className="circle hover:hover1" onClick={()=>{setVisible(0)}}>
          <i className="arrow_back_icon"></i>
        </div>
        Help & Support
      </div>
      <div className="relative flex items-center mt-[15px] font-semibold text-[14px] rounded-[10px] hover:hover3">
        <div className="small_circle">
          <i className="help_center_icon"></i>
        </div>
        <span>Help Center</span>
      </div>
      <div className="relative flex items-center mt-[15px] font-semibold text-[14px] rounded-[10px] hover:hover3">
        <div className="small_circle">
          <i className="email_icon"></i>
        </div>
        <span>Support Inbox</span>
      </div>
      <div className="relative flex items-center mt-[15px] font-semibold text-[14px] rounded-[10px] hover:hover3">
        <div className="small_circle">
          <i className="info_filled_icon"></i>
        </div>
        <span>Report a Problem</span>
      </div>
    </div>
  )
}
