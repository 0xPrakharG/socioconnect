import { useState } from "react";
import { Link } from "react-router-dom";
import DisplayAccessibility from "./DisplayAccessibility";
import HelpSupport from "./HelpSupport";
import SettingsPrivacy from "./SettingsPrivacy";

export default function UserMenu({ user }) {
  const [visible, setVisible] = useState(0);
  return (
    <div className="absolute top-[100%] right-0 w-[360px] rounded-[10px] bg-primary shadow-[2px_2px_2px] shadow-shadow-1 select-none p-[10px] user_menu">
      {visible === 0 && 
        <div>
          <Link to="/profile" className="flex items-center p-[5px] rounded-[10px] gap-[10px] hover:hover3">
            <img src={user?.picture} alt="" className="w-[60px] h-[60px] rounded-[50%] object-cover" />
            <div className="flex flex-col justify-center">
              <span className="text-primary-color font-semibold text-[15px] tracking-[1px]">
                {user?.first_name}{' '}
                {user?.last_name}
              </span>
              <span className="text-[14px]">See your profile</span>
            </div>
          </Link>
          <div className="w-[100%] h-[1px] bg-third mt-[5px]"></div>
          <div className="p-[10px] mt-[5px] flex items-center gap-[5px] hover:hover3">
            <div className="small_circle">
              <i className="report_filled_icon"></i>
            </div>
            <div className="flex flex-col justify-center">
              <div className="menu_span_1">Give feedback</div>
              <div className="menu_span_2">Help us improve SocioConnect</div>
            </div>
          </div>
          <div className="w-[100%] h-[1px] bg-third mt-[5px]"></div>
          <div className="relative flex items-center mt-[5px] p-[7px] font-semibold text-[14px] rounded-[10px] hover:hover3" onClick={() => {setVisible(1)}}>
            <div className="small_circle">
              <i className="settings_filled_icon"></i>
            </div>
              <span>Settings & Privacy</span>
              <div className="absolute right-[10px] top-[50%] translate-y-[-40%]">
                <i className="right_icon"></i>
              </div>
          </div>
          <div className="relative flex items-center mt-[5px] p-[7px] font-semibold text-[14px] rounded-[10px] hover:hover3" onClick={() => {setVisible(2)}}>
            <div className="small_circle">
              <i className="help_filled_icon"></i>
            </div>
              <span>Help & Support</span>
              <div className="absolute right-[10px] top-[50%] translate-y-[-40%]">
                <i className="right_icon"></i>
              </div>
          </div>
          <div className="relative flex items-center mt-[5px] p-[7px] font-semibold text-[14px] rounded-[10px] hover:hover3" onClick={() => {setVisible(3)}}>
            <div className="small_circle">
              <i className="dark_filled_icon"></i>
            </div>
              <span>Display & Accessibility</span>
              <div className="absolute right-[10px] top-[50%] translate-y-[-40%]">
                <i className="right_icon"></i>
              </div>
          </div>
          <div className="relative flex items-center mt-[5px] p-[7px] font-semibold text-[14px] rounded-[10px] hover:hover3">
            <div className="small_circle">
              <i className="logout_filled_icon"></i>
            </div>
              <span>Logout</span>
          </div>
        </div>
      }
      {visible === 1 && 
        <SettingsPrivacy setVisible={setVisible} />
      }
      {visible === 2 && 
        <HelpSupport setVisible={setVisible} />
      }
      {visible === 3 && 
        <DisplayAccessibility setVisible={setVisible} />
      }
    </div>
  )
}
