export default function Shortcut({ link, img, name }) {
  return (
      <a href={link} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-[5px_10px] cursor-pointer rounded-[10px] text-[14px] font-[500] hover:hover1">
        <img src={img} alt="" className="w-[35px] h-[35px] rounded-[8px] object-cover" />
        <span className="mb-[3px]">{name}</span>
      </a>
  )
}
