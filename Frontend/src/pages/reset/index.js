import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Cookies from 'js-cookie';
import {Form, Formik} from "formik";
import { useState } from 'react';
import LoginInput from '../../components/inputs/loginInput';

export default function Reset() {
  const {user} = useSelector((state) => ({...state}));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const logout = ()=>{
    Cookies.set("user", "");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login")
  };
  return (
    <div className='bg-secondary h-[100vh] text-primary-color reset'>
      <div className="bg-primary shadow-[1px_8px_15px_-7px] shadow-shadow-1 flex items-center justify-between p-[0_1rem] mb-[50px] reset_header">
        <img src="../../../icons/sc.png" alt="" className='w-[250px]' />
        { user ? (
          <div className='flex items-center gap-[10px] right-reset'>
            <Link to="/profile">
              <img src={user.picture} alt="" className='w-[40px] h-[40px] rounded-[50%]' />
            </Link>
            <button className='blue-btn' onClick={()=>{
              logout()
              }}>Logout</button>
          </div>
        ) : (
        <Link to="/login" className='right_rest'>
          <button className='blue-btn'>Login</button>
        </Link>
        )}
      </div>
      <div className="h-[67vh] flex items-center justify-center reset_wrap">
        <div className="relative bg-primary shadow-[0_1px_2px] shadow-shadow-1 rounded-[10px] w-[450px] h-[280px] reset_form">
          <div className="p-[15px] font-semibold text-[24px] border-b-[1px] border-b-solid border-b-third reset_form_header">
            Find Your Account
          </div>
          <div className="p-[15px] text-[17px] reset_form_text">
            Please Enter Your email address or mobile number to search for your account.
          </div>
          <Formik enableReinitialize initialValues={{
            email
          }}>
            {(formik) => (
              <Form className='flex flex-col items-center border-b-[1px] border-b-solid border-b-third'>
                <LoginInput text="text" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address or Phone Number" />
                {
                  error && <div className="error_text">{error}</div>
                }
                <div className="flex items-center gap-[10px] mt-[5px] p-[10px] absolute right-[10px] bottom-[10px] reset_form_btns">
                  <Link to="/login" className='w-[90px] gray-btn'>Cancel</Link>
                  <button type='submit' className='w-[90px] blue-btn'>Search</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
