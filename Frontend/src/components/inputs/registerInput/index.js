import { ErrorMessage, useField } from "formik";
import {useMediaQuery} from "react-responsive";

export default function RegisterInput({placeholder, last, first, email, pass, ...props}) {
  const [field,meta] = useField(props);
  const desktopView = useMediaQuery({
    query: "(min-width: 1024px)",
  })
  return (
    <div className="realtive w-[320px] flex flex-col items-center lg:w-[370px]">
      {meta.touched && meta.error && first && (
        <div className={desktopView ? "h-fit realtive pb-[1px] py-[10px] px-[10px] bg-[#b94a48] text-white rounded-[5px] text-[13px] mb-[10px] absolute w-[200px] lg:left-[-50%] xl:left-[-50%]" : "h-fit realtive pb-[2px] py-[10px] px-[10px] bg-[#b94a48] w-[100%] text-white rounded-[5px] text-[13px] mb-[10px]"}>
        
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div className={(desktopView) ? "border-t-[10px] border-b-[10px] border-l-[10px] border-solid border-transparent border-l-[#b94a48] relative top-[-16px] left-[190px] w-[10px]" : "border-t-[10px] border-r-[10px] border-l-[10px] border-solid border-transparent border-t-[#b94a48] relative bottom-[-11px] w-[10px]"}></div>
          )}
      </div>
      )}
      {meta.touched && meta.error && pass && (
        <div className={desktopView ? "h-fit realtive pb-[1px] py-[10px] px-[10px] bg-[#b94a48] text-white rounded-[5px] text-[13px] mb-[10px] absolute w-[300px] lg:left-[-75%] xl:left-[-75%]" : "h-fit realtive pb-[2px] py-[10px] px-[10px] bg-[#b94a48] w-[100%] text-white rounded-[5px] text-[13px] mb-[10px]"}>
        
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div className={(desktopView) ? "border-t-[10px] border-b-[10px] border-l-[10px] border-solid border-transparent border-l-[#b94a48] relative top-[-33px] left-[290px] w-[10px]" : "border-t-[10px] border-r-[10px] border-l-[10px] border-solid border-transparent border-t-[#b94a48] relative bottom-[-11px] w-[10px]"}></div>
          )}
      </div>
      )}
      {meta.touched && meta.error && last && (
        <div className={desktopView ? "h-fit realtive pb-[4px] py-[10px] px-[10px] bg-[#b94a48] text-white rounded-[5px] text-[13px] mb-[15px] absolute w-[300px] lg:right-[-75%] xl:right-[-75%]" : "h-fit realtive pb-[2px] py-[10px] px-[10px] bg-[#b94a48] w-[100%] text-white rounded-[5px] text-[13px] mb-[10px]"}>
        {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div className={desktopView ? "border-t-[10px] border-b-[10px] border-r-[10px] border-solid border-transparent border-r-[#b94a48] relative top-[-16px] left-[-20px] w-[10px]" : "border-t-[10px] border-r-[10px] border-l-[10px] border-solid border-transparent border-t-[#b94a48] relative bottom-[-11px] w-[10px]"}></div>
          )}
      </div>
      )}
      {meta.touched && meta.error && email && (
        <div className={desktopView ? "h-fit realtive pb-[4px] py-[10px] px-[10px] bg-[#b94a48] text-white rounded-[5px] text-[13px] mb-[15px] absolute w-[300px] lg:right-[-75%] xl:right-[-75%]" : "h-fit realtive pb-[2px] py-[10px] px-[10px] bg-[#b94a48] w-[100%] text-white rounded-[5px] text-[13px] mb-[10px]"}>
        {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div className={desktopView ? "border-t-[10px] border-b-[10px] border-r-[10px] border-solid border-transparent border-r-[#b94a48] relative top-[-33px] left-[-20px] w-[10px]" : "border-t-[10px] border-r-[10px] border-l-[10px] border-solid border-transparent border-t-[#b94a48] relative bottom-[-11px] w-[10px]"}></div>
          )}
      </div>
      )}
      <input type={field.type} name={field.name} placeholder={placeholder} {...field} {...props} className={meta.touched && meta.error ? "border-[#b94a48] outline-none border-[1px] border-solid bg-primary w-[100%] h-[50px] text-[17px] rounded-[10px] pl-[10px] mb-[px] text-primary-color" : "outline-none border-[1px] border-solid border-third bg-primary w-[100%] h-[50px] text-[17px] rounded-[10px] pl-[10px] mb-[10px] text-primary-color focus:border-blue-color "} />
      
      
      {/* {meta.touched && meta.error && <i className="bg-Error bg-auto bg-no-repeat inline-block h-[21px] w-[21px] absolute top-[42%] right-24" style={{ top: `${!bottom && "34%"}`}}></i>} */}
    </div>
  )
}
