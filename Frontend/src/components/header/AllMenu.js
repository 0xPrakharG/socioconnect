import {menu,create} from "../../data/allMenu";
import AllMenuItem from "./AllMenuItem";

export default function AllMenu() {
  return (
    <div className="absolute right-[-9rem] top-[45px] bg-secondary rounded-[10px] h-[90vh] w-[575px] p-[10px] px-[1rem] shadow-shadow-1 shadow-[-2px_1px_5px_2px] select-none all_menu">
      <div className="text-[24px] leading-[28px] font-bold mb-[10px]">Menu</div>
      <div className="all_menu_wrap scrollbar">
        <div className="bg-primary rounded-[10px] p-[15px] shadow-[0px_1px_2px_rgba(0,0,0,0.2)] all_menu_left">
          <div className="bg-secondary flex items-center gap-[5px] p-[10px] rounded-[50px]">
            <i className="amm_s_ic"></i>
            <input type="text" placeholder="Search Menu" className="outline-none border-none bg-transparent w-[100%] font-[15px]" />
          </div>
          <div className="mt-[10px] border-b-[1px] border-solid border-[#ced0d4]">
            <div className="font-semibold text-[16px] py-[10px] px-0 w-[100%]">Social</div>
            {
              menu.slice(0,6).map((item, i) => (
                  <AllMenuItem name={item.name} description={item.description} icon={item.icon} key={i} />
                ))
            }
          </div>
          <div className="mt-[10px] border-b-[1px] border-solid border-[#ced0d4]">
            <div className="font-semibold text-[16px] py-[10px] px-0 w-[100%]">Entertainment</div>
            {
              menu.slice(6,9).map((item, i) => (
                  <AllMenuItem name={item.name} description={item.description} icon={item.icon} key={i} />
                ))
            }
          </div>
          <div className="mt-[10px] border-b-[1px] border-solid border-[#ced0d4]">
            <div className="font-semibold text-[16px] py-[10px] px-0 w-[100%]">Shopping</div>
            {
              menu.slice(9,11).map((item, i) => (
                  <AllMenuItem name={item.name} description={item.description} icon={item.icon} key={i} />
                ))
            }
          </div>
          <div className="mt-[10px] border-b-[1px] border-solid border-[#ced0d4]">
            <div className="font-semibold text-[16px] py-[10px] px-0 w-[100%]">Personal</div>
            {
              menu.slice(11,15).map((item, i) => (
                  <AllMenuItem name={item.name} description={item.description} icon={item.icon} key={i} />
                ))
            }
          </div>
          <div className="mt-[10px] border-b-[1px] border-solid border-[#ced0d4]">
            <div className="font-semibold text-[16px] py-[10px] px-0 w-[100%]">Professional</div>
            {
              menu.slice(15,17).map((item, i) => (
                  <AllMenuItem name={item.name} description={item.description} icon={item.icon} key={i} />
                ))
            }
          </div>
          <div className="mt-[10px] border-b-[1px] border-solid border-[#ced0d4]">
            <div className="font-semibold text-[16px] py-[10px] px-0 w-[100%]">Community Resources</div>
            {
              menu.slice(17,21).map((item, i) => (
                  <AllMenuItem name={item.name} description={item.description} icon={item.icon} key={i} />
                ))
            }
          </div>
          <div className="mt-[10px] border-b-[1px] border-solid border-[#ced0d4]">
            <div className="font-semibold text-[16px] py-[10px] px-0 w-[100%]">More</div>
            {
              menu.slice(21,23).map((item, i) => (
                  <AllMenuItem name={item.name} description={item.description} icon={item.icon} key={i} />
                ))
            }
          </div>
        </div>
        <div className="py-[15px] px-[10px] bg-primary mr-[1rem] rounded-[10px] h-[555px] w-[170px] fixed right-[2rem] shadow-[0_1px_2px_rgba(0,0,0,0.2)] all_menu_right">
          <div className="text-[20px] font-bold mb-[15px]">Create</div>
          {create.map((item, i)=> (
            <div className="flex items-center font-semibold gap-[10px] text-[14px] w-[100%] mb-[5px] py-[5px] px-[10px] cursor-pointer rounded-[10px] hover:hover1" key={i}>
            <div className="w-[40px] h-[40px] rounded-[50%] flex items-center justify-center bg-third">
              <i className={item.icon}></i>
            </div>
            {item.name}
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}
