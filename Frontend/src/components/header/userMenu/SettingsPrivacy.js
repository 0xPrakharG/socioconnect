export default function SettingsPrivacy({ setVisible }) {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 w-[360px] h-fit rounded-[10px] bg-primary shadow-[2px_2px_2px] shadow-shadow-1 select-none p-[10px] mt-0 user_menu_options">
      <div className="flex items-center font-bold text-[24px]">
        <div className="circle hover:hover1" onClick={()=>{setVisible(0)}}>
          <i className="arrow_back_icon"></i>
        </div>
        Settings & Privacy
      </div>
      <div className="mt-[15px] relative flex items-center font-semibold text-[14px] rounded-[10px] hover:hover3">
        <div className="small_circle">
          <i className="settings_filled_icon"></i>
        </div>
        <span>Settings</span>
      </div>
      <div className="mt-[15px] relative flex items-center font-semibold text-[14px] rounded-[10px] hover:hover3">
        <div className="small_circle">
          <i className="privacy_checkup_icon"></i>
        </div>
        <span>Privacy Checkup</span>
      </div>
      <div className="mt-[15px] relative flex items-center font-semibold text-[14px] rounded-[10px] hover:hover3">
        <div className="small_circle">
          <i className="privacy_shortcuts_icon"></i>
        </div>
        <span>Privacy Shortcuts</span>
      </div>
      <div className="mt-[15px] relative flex items-center font-semibold text-[14px] rounded-[10px] hover:hover3">
        <div className="small_circle">
          <i className="activity_log_icon"></i>
        </div>
        <span>Activity Log</span>
      </div>
      <div className="mt-[15px] relative flex items-center font-semibold text-[14px] rounded-[10px] hover:hover3">
        <div className="small_circle">
          <i className="news_icon"></i>
        </div>
        <span>News Feed Preferences</span>
      </div>
      <div className="mt-[15px] relative flex items-center font-semibold text-[14px] rounded-[10px] hover:hover3">
        <div className="small_circle">
          <i className="language_icon"></i>
        </div>
        <span>Language</span>
      </div>
    </div>
  )
}
