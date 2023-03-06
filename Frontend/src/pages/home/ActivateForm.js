import PropagateLoader from "react-spinners/PropagateLoader";
export default function ActivateForm({type, header, text, loading}) {
  return (
    <div className="z-20 bg-blur">
      <div className="z-50 absolute bg-primary shadow-shadow-1 shadow-[0_1px_2px] w-[40vw] h-[200px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center popup rounded-[10px]">
        <div className={`flex items-center justify-center font-semibold p-[15px] border-b-[1px] border-solid border-third ${type === "success" ? "success_text" : "error_text"}`}>
            {header}.
            </div>
        <div className="p-[15px] font-medium">{text}</div>
      <PropagateLoader color="#534741" size={30} loading={loading} />
      </div>
    </div>
  )
}
