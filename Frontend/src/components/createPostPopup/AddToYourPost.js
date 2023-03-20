import { Dots, Feeling, Photo } from "../../svg";

export default function AddToYourPost({ setShowPrev }) {
  return (
    <div className="flex items-center gap-[10px] m-[0_10px] p-[10px] rounded-[10px] border-[3px] border-solid border-forth addtoyourpost">
      <div className="w-[50%] text-[14px] font-semibold addto_text">Add To Your Post</div>
      <div className="post_header_right hover:hover1" onClick={() => {setShowPrev(true)}}>
        <Photo color="#45bd62"/>
      </div>
      <div className="post_header_right hover:hover1">
        <i className="tag_icon"></i>
      </div>
      <div className="post_header_right hover:hover1">
        <Feeling color="#f7b928" />
      </div>
      <div className="post_header_right hover:hover1">
        <i className="maps_icon"></i>
      </div>
      <div className="post_header_right hover:hover1">
        <i className="microphone_icon"></i>
      </div>
      <div className="post_header_right hover:hover1">
        <Dots color="#65676b" />
      </div>
    </div>
  )
}
