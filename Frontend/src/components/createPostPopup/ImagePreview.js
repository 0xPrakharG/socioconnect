import { useRef } from "react";
import EmojiPickerBackground from "./EmojiPickerBackground";

export default function ImagePreview({ text, setText, user, images, setImages }) {
  const ImageInputRef = useRef(null);

  const handleImages = (e) => {
    let files = Array.from(e.target.files);
    files.forEach((img) => {
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = (readerEvent) => {
        setImages((images) => [...images, readerEvent.target.result]);
      }
    })
  }

  return (
    <div className="max-h-[500px] overflow-y-auto overflow-x-hidden overflow_a scrollbar">
      <EmojiPickerBackground text={text} setText={setText} user={user} type2 />
      <div className="m-[10px_15px] p-[10px] border-[1px] border-solid border-third rounded-[10px] add_pics_wrap">
        <input type="file" multiple hidden ref={ImageInputRef} onChange={handleImages} />
        {images && images.length ? (
          <div className="relative bg-secondary rounded-[10px] p-[10px] h-[250px] grid place-items-center cursor-pointer add_pics_inside1 p0">
            <div className="absolute left-[1rem] top-[1rem] flex gap-[1rem] preview_actions">
              <button className="hover:hover1">
                <i className="edit_icon"></i>
                Edit
              </button>
              <button className="hover:hover1">
                <i className="addPhoto_icon"></i>
                Add Photos/Videos
              </button>
            </div>
            <div className="w-[30px] h-[30px] rounded-[50%] border-[1px] border-solid border-third bg-primary grid place-items-center absolute right-[10px] top-[10px] cursor-pointer z-40 small_white_circle">
              <i className="exit_icon"></i>
            </div>
            <div className={images.length === 1 ? "preview1" : images.length === 2 ? "preview2" : images.length === 3 ? "preview3" : images.length === 4 ? "preview4" : images.length === 5 ? "preview5" : images.length % 2 === 0 ? "preview6" : "preview6 singular_grid"}>
              {
                images.map((img,i) => (
                  <img src={img} key={i} alt="" />
                ))
              }
            </div>
          </div>
        ) : (
          <div className="relative bg-secondary rounded-[10px] p-[10px] h-[250px] grid place-items-center cursor-pointer add_pics_inside1">
            <div className="w-[30px] h-[30px] rounded-[50%] border-[1px] border-solid border-third bg-primary grid place-items-center absolute right-[10px] top-[10px] cursor-pointer z-40 small_white_circle">
              <i className="exit_icon"></i>
            </div>
            <div className="flex flex-col items-center gap-[2px] add_col" onClick={() => {ImageInputRef.current.click()}}>
              <div className="w-[42px] h-[42px] rounded-[50%] border-[1px] border-solid border-third bg-third grid place-items-center add_circle">
                <i className="addPhoto_icon"></i>
              </div>
              <span className="text-[15px] font-semibold">Add Photos/Videos</span>
              <span className="text-[12px] text-secondary-color">or drag and drop</span>
            </div>
          </div>
        )}
        <div className="relative mt-[10px] flex items-center gap-[10px] bg-secondary p-[10px] rounded-[10px] add_pics_inside2">
          <div className="w-[42px] h-[42px] rounded-[50%] border-[1px] border-solid border-third bg-third grid place-items-center add_circle">
            <i className="phone_icon"></i>
          </div>
          <div className="text-[12px] font-semibold mobile_text">Add photos from your mobile device.</div>
          <span className="bg-third font-semibold p-[10px_15px] rounded-[10px] text-[14px] absolute right-[10px] cursor-pointer addphone_btn">Add</span>
        </div>
      </div>
    </div>
  )
}
