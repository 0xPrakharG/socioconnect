import { useEffect, useRef, useState } from "react"
import Picker from 'emoji-picker-react'

export default function EmojiPickerBackground({ text, setText, textRef }) {
  const [picker, setPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();

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
    <div className="relative flex justify-between p-[10px_15px] items-end post_emojis_wrap">
    {picker && (
      <div className="absolute right-[-21.5rem] bottom-[-14rem] comment_emoji_picker remove">
        <Picker onEmojiClick={handleEmoji} />
      </div>
      )}
      <img src="../../../icons/colorful.png" className="w-[39px] cursor-pointer" alt="" />
      <i className="hover:invert-[80%] emoji_icon_large" onClick={() => setPicker((prev) => !prev)}></i>
    </div> 
  )
}
