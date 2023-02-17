export default function Story({profile_picture, profile_name, image}) {
  return (
    <div>
      <div className="relative h-[190px] w-[100%] rounded-[10px] overflow-hidden bg-[#fff] cursor-pointer shadow-[0px_1px_2px] shadow-shadow-1">
        <img src={image} alt="" className="absolute h-[100%] w-[100%] object-cover brightness-90 transition-[all_0.2s] hover:scale-[1.1]" />
        <div className="absolute w-[50px] h-[50px] rounded-[50%] left-0 top-0 overflow-hidden border-[2px] border-solid border-green-color">
          <img src={profile_picture} alt="" className="w-[100%] h-[100%] object-cover" />
        </div>
        <div className="text-[#fff] absolute bottom-[10px] w-[100px] left-[50%] translate-x-[-55%] break-words pl-[10px] text-center text-[14px]">{profile_name}</div>
      </div>
    </div>
  )
}
