export default function LeftLink({ img, text, notification }) {
  return (
    <div className="flex items-center p-[5px_10px] rounded-[10px] cursor-pointer font-semibold text-[14px] mb-[2px] hover:hover1 left_link">
      <img src={`../../../left/${img}.png`} alt="" className="w-[36px] h-[36px] rounded-[50%] mr-[11px] align-[-0.25em]" />
      {
        notification !== undefined ? (
          <div className="ml-[2px] col">
            <div className="translate-y-[1px]">{text}</div>
            <div className="relative text-[12px] text-blue-color ml-[9px] font-normal before:content-[''] before:w-[7px] before:h-[7px] before:rounded-[50%] before:bg-blue-color before:absolute before:left-[-10px] before:bottom-[6px]">{notification}</div>
          </div>
        ) : (
          <span className="mb-[4px] ml-[1px]">{text}</span>
        )
      }
    </div>
  )
}
