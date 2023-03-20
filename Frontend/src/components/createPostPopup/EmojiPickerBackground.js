import { useEffect, useRef, useState } from "react"
import Picker from 'emoji-picker-react'

export default function EmojiPickerBackground({ text, user, setText, type2 }) {
  const [picker, setPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  const handleEmoji = ({ emoji }) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText);
    setCursorPosition(start.length + emoji.length)
  }
  return (
    <div className={type2 ? "flex images_input" : ""} >
    <div className={!type2 ? "min-h-[90px] relative flex items-center justify-center flex_center" : " "}>
              <textarea ref={textRef}
              maxLength="100" value={text}
              placeholder={`What's on your mind, ${user.first_name}`}
              onChange={(e) => setText(e.target.value)}
              className={`relative border-none resize-none p-[5px_15px] mb-[10px] w-[470px] ml-[1px] text-[24px] bg-primary text-primary-color min-h--[90px] overflow-y-visible post_input ${type2 ? "relative block text-[15px] input2" : ""}`}></textarea>
            </div>
    <div className={!type2 ? "relative flex justify-between p-[10px_15px] items-end post_emojis_wrap" : ""}>
    {picker && (
      <div className={`absolute right-[-21.5rem] bottom-[-14rem] comment_emoji_picker ${type2 ? "absolute right-[-21.5rem] top-[8rem] movepicker2" : "remove"}`}>
        <Picker onEmojiClick={handleEmoji} />
      </div>
      )}
      {!type2 && (<img src="../../../icons/colorful.png" className="w-[39px] cursor-pointer" alt="" />)}
      <i className={`hover:invert-[80%] emoji_icon_large ${type2 ? "translate-x-[-10px] moveleft" : ""}`} onClick={() => setPicker((prev) => !prev)}></i>
    </div> 
    </div>
  )
}
