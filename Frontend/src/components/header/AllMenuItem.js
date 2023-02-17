import React from 'react'

export default function AllMenuItem({name, description, icon}) {
  return (
    <div className="flex items-center w-[100%] mb-[5px] p-[5px] cursor-pointer rounded-[10px] hover:hover1">
      <img src={`../../left/${icon}.png`} alt="" className="w-[36px] h-[36px] mr-[10px]" />
      <div className="flex flex-col">
        <span className="text-[14px] font-medium">{name}</span>
        <span className="text-[12px] text-[#65676b] w-[95%] all_menu_description">{description}</span>
      </div>
    </div>
  )
}
