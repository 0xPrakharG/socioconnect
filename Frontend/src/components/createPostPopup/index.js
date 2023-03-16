import { useState } from "react"
import Picker from 'emoji-picker-react'

export default function CreatePostPopup({ user }) {
  const [text, setText] = useState("");
  const [showPrev, setShowPrev] = useState(false);
  const [picker, setPicker] = useState(false);
  return (
    <div className="bg-blur absolute top-0 left-0 z-10 h-[100%] w-[100%]">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary shadow-[0_12px_20px_0] shadow-shadow-1 min-h-[220px] w-[500px] rounded-[5px] postBox">
        <div className="relative flex items-center justify-center text-[20px] font-bold p-[14px_15px_17px_15px] border-b-[1px_solid] box_header">
          <div className="small_circle">
            <i className="exit_icon"></i>
          </div>
          <span>Create Post</span>
        </div>
        <div className="flex gap-[12px] p-[17px_17px_5px_17px] box_profile">
          <img src={user.picture} alt="" className="w-[40px] h-[40px] rounded-[50%] object-cover box_profile_img" />
          <div className="translate-y-[-7px] box_col">
            <div className="text-[14px] font-semibold mb-[4px] box_profile_name">
              {user.first_name} {user.last_name}
            </div>
            <div className="flex items-center w-[81px] gap-[4px] text-[12px] p-[3px_8px_4px_8px] rounded-[7px] bg-third cursor-pointer box_privacy">
              <img src="../../../icons/public.png" alt="" />
              <span className="mb-[1px]">Public</span>
              <i className="arrowDown_icon"></i>
            </div>
          </div>
        </div>
        {!showPrev && (
        <div className="min-h-[90px] relative flex items-center justify-center flex_center">
          <textarea
          maxLength="100" value={text}
          placeholder={`What's on your mind, ${user.first_name}`}
          onChange={(e) => setText(e.target.value)}
          className="relative border-none resize-none p-[5px_15px] mb-[10px] w-[470px] ml-[1px] text-[24px] bg-primary text-primary-color min-h--[90px] overflow-y-visible post_input"></textarea>
        </div>
        )}
        <div className="relative flex justify-between p-[10px_15px] items-end post_emojis_wrap">
          {picker && (
          <div className="absolute right-[-21.5rem] bottom-[-14rem] comment_emoji_picker remove">
            <Picker />
          </div>
          )}
          <img src="../../../icons/colorful.png" className="w-[39px] cursor-pointer" alt="" />
          <i className="hover:invert-[80%] emoji_icon_large"></i>
        </div>
      </div>
    </div>
  )
}


