import { ErrorMessage, useField } from "formik";
import {useMediaQuery} from "react-responsive";

export default function LoginInput({placeholder, bottom, ...props}) {
  const [field,meta] = useField(props);
  const desktopView = useMediaQuery({
    query: "(min-width: 1024px)",
  })
  return (
    <div className="realtive w-[320px] flex flex-col items-center">
      {meta.touched && meta.error && !bottom && (
        <div className={desktopView ? "h-12 realtive py-[15px] px-[10px] bg-[#b94a48] text-white rounded-[5px] text-[13px] mb-[10px] absolute w-[300px] lg:left-[31%] xl:left-[35%]" : "h-12 realtive py-[15px] px-[10px] bg-[#b94a48] w-[100%] text-white rounded-[5px] text-[13px] mb-[10px]"}>
        
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div className={desktopView ? "border-t-[10px] border-b-[10px] border-l-[10px] border-solid border-transparent border-l-[#b94a48] relative top-[-20px] left-[290px] w-[10px]" : "border-t-[10px] border-r-[10px] border-l-[10px] border-solid border-transparent border-t-[#b94a48] relative bottom-[-13px] w-[10px]"}></div>
          )}
        {/* top-[-20px] left-[290px] */}
      </div>
      )}
      <input type={field.type} name={field.name} placeholder={placeholder} {...field} {...props} className={meta.touched && meta.error ? "border-[#b94a48] outline-none border-[1px] border-solid bg-primary w-[100%] h-[50px] text-[17px] rounded-[10px] pl-[10px] mb-[10px] text-primary-color" : "outline-none border-[1px] border-solid border-third bg-primary w-[100%] h-[50px] text-[17px] rounded-[10px] pl-[10px] mb-[10px] text-primary-color focus:border-blue-color"} />
      {meta.touched && meta.error && bottom && (
        <div className={desktopView ? "h-12 realtive py-[15px] px-[10px] bg-[#b94a48] text-white rounded-[5px] text-[13px] mb-[15px] absolute w-[300px] lg:left-[31%] xl:left-[35%]" : "h-12 realtive py-[15px] px-[10px] bg-[#b94a48] w-[100%] text-white rounded-[5px] text-[13px] mb-[15px]"}>
        {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div className={desktopView ? "border-t-[10px] border-b-[10px] border-l-[10px] border-solid border-transparent border-l-[#b94a48] relative top-[-20px] left-[290px] w-[10px]" : "border-b-[10px] border-r-[10px] border-l-[10px] border-solid border-transparent border-b-[#b94a48] relative bottom-[44px] w-[10px]"}></div>
          )}
      </div>
      )}
      {/* {meta.touched && meta.error && <i className="bg-Error bg-auto bg-no-repeat inline-block h-[21px] w-[21px] absolute top-[42%] right-24" style={{ top: `${!bottom && "34%"}`}}></i>} */}
    </div>
  )
}
