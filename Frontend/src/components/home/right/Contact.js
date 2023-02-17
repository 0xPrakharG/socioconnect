export default function Contact({user}) {
  return (
    <div className="flex items-center gap-3 text-[14px] p-[5px] rounded-[5px] cursor-pointer text-primary-color font-semibold hover:hover3">
      <div className="">
        <img src={user.picture} alt="" className="w-[36px] h-[36px] rounded-[50%] object-cover" />
      </div>
      <span className="translate-y-[-2px]">
        {user.first_name} {user.last_name}
      </span>
    </div>
  )
}
