
export default function DateOfBirthSelect({bDay, bMonth, bYear, dateError, days, months, years, handleRegisterChange}) {
  return (
    <div className="relative self-start mb-[10px] py-0 px-[10px]">
                  <div className="flex items-center gap-[2px] text-[13px] text-secondary-color">
                    Date of Birth <i className="info_icon"></i>
                  </div>
                  {dateError && <div className="h-fit realtive pb-[4px] py-[10px] px-[10px] bg-[#b94a48] text-white rounded-[5px] text-[13px] mb-[15px] absolute w-[300px] lg:right-[-85%] xl:right-[-85%]">{dateError}</div>}
                  {dateError && <div className="border-t-[10px] border-l-[10px] border-r-[10px] border-solid border-transparent border-t-[#b94a48] relative top-[72px] left-[20px] w-[10px] lg:border-t-[10px] lg:border-b-[10px] lg:border-r-[10px] lg:border-solid lg:border-transparent lg:border-r-[#b94a48] lg:relative lg:top-[25px] lg:left-[355px] w-[10px])"></div>}
                  <div className={dateError ? "mt-[75px] grid grid-cols-3 gap-[10px] h-[35px] w-[100%] lg:mt-[5px]" : "mt-[5px] grid grid-cols-3 gap-[10px] h-[35px] w-[100%]"}>
                    <select name="bDay" value={bDay} onChange={handleRegisterChange} className="w-[90px] text-[16px] text-primary-color bg-primary rounded-[5px] cursor-pointer border-[2px] border-solid lg:w-[115px]">
                    {days.map((day, i) => (
                        <option value={day} key={i}>{day}</option>
                      ))}
                    </select>
                    <select name="bMonth" value={bMonth} onChange={handleRegisterChange} className="w-[90px] text-[16px] text-primary-color bg-primary rounded-[5px] cursor-pointer border-[2px] border-solid lg:w-[115px]">
                    {months.map((month, i) => (
                        <option value={month} key={i}>{month}</option>
                      ))}
                    </select>
                    <select name="bYear" value={bYear} onChange={handleRegisterChange} className="w-[90px] text-[16px] text-primary-color bg-primary rounded-[5px] cursor-pointer border-[2px] border-solid lg:w-[115px]">
                      {years.map((year, i) => (
                        <option value={year} key={i}>{year}</option>
                      ))}
                    </select>
                    
                  </div>
                </div>
  )
}
