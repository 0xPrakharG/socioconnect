import { Link } from "react-router-dom";

export default function SendEmail({user}) {
  return (
    <div className="relative bg-primary shadow-[0_1px_2px] shadow-shadow-1 rounded-[10px] w-[450px] h-[450px] md:h-[330px] md:w-[500px] reset_form dynamic_height">
          <div className="p-[15px] font-semibold text-[24px] border-b-[1px] border-b-solid border-b-third reset_form_header">
            Reset Your Password
          </div>
          <div className="grid grid-cols-1 text-[15px] text-secondary-color md:grid-cols-2 reset_grid">
            <div className="p-[15px] reset_left">
              <div className="p-[15px] text-[17px] reset_form_text">How do you want to recieve the code to reset your password?</div>
              <label htmlFor="email" className="flex items-center gap-[10px] cursor-pointer p-[5px] hover:hover1">
                <input type="radio" name = "" id="email" checked readOnly className="w-[20px] h-[20px]" />
                <div className="flex flex-col label_col">
                  <span>Send Code via Email</span>
                  <span>email@email.email</span>
                </div>
              </label>
            </div>
            <div className="flex flex-col justify-center items-center reset_right">
              <img src={user.picture} alt="" className="w-[80px] h-[80px] rounded-[50%] object-cover" />
              <span>email@email.email</span>
              SocioConnect user
            </div>
          </div>
          <div className="flex items-center gap-[10px] mt-[5px] p-[10px] absolute right-[10px] bottom-[10px] reset_form_btns">
            <Link to="/login" className='w-[90px] gray-btn'>Not You?</Link>
            <button type='submit' className='w-[90px] blue-btn'>Continue</button>
          </div>
        </div>
  )
}
