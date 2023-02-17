
export default function GenderSelect({handleRegisterChange, genderError}) {
  return (
    <div className="relative self-start mb-[10px] py-0 px-[10px]">
                  <div className="flex items-center gap-[2px] text-[13px] text-secondary-color">
                    Gender <i className="info_icon"></i>
                  </div>
                  {genderError && <div className="h-fit realtive pb-[4px] py-[10px] px-[10px] bg-[#b94a48] text-white rounded-[5px] text-[13px] mb-[px] absolute w-[300px] lg:right-[-85%] xl:right-[-85%]">{genderError}</div>}
                  {genderError && <div className="border-t-[10px] border-l-[10px] border-r-[10px] border-solid border-transparent border-t-[#b94a48] absolute top-[72px] left-[20px] w-[10px] lg:border-t-[10px] lg:border-b-[10px] lg:border-r-[10px] lg:border-solid lg:border-transparent lg:border-r-[#b94a48] lg:absolute lg:top-[36px] lg:left-[365px] w-[10px])"></div>}
                  <div className={genderError ? "mt-[65px] grid grid-cols-3 gap-[10px] h-[35px] w-[100%] lg:mt-[10px]" : "mt-[5px] grid grid-cols-3 gap-[10px] h-[35px] w-[100%]"}>
                    <label htmlFor="male" className="w-[90px] flex items-center justify-between text-[16px] text-primary-color rounded-[5px] cursor-pointer border-[1px] border-solid px-[10px] py-0 lg:w-[115px]">
                      Male
                      <input type="radio" name="gender" id="male" value="male" onChange={handleRegisterChange} />
                    </label>
                    <label htmlFor="female" className="w-[90px] flex items-center justify-between text-[16px] text-primary-color rounded-[5px] cursor-pointer border-[1px] border-solid px-[10px] py-0 lg:w-[115px]">
                      Female
                      <input type="radio" name="gender" id="female" value="female" onChange={handleRegisterChange} />
                    </label>
                    <label htmlFor="custom" className="w-[90px] flex items-center justify-between text-[16px] text-primary-color rounded-[5px] cursor-pointer border-[1px] border-solid px-[10px] py-0 lg:w-[115px]">
                      Custom
                      <input type="radio" name="gender" id="custom" value="custom" onChange={handleRegisterChange} />
                    </label> 
                  </div>
                </div>
  )
}
