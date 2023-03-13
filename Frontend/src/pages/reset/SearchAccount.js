import {Form, Formik} from "formik";
import {Link} from 'react-router-dom';
import LoginInput from '../../components/inputs/loginInput';
import * as Yup from "yup";
import axios from "axios";

export default function SearchAccount({ email, setEmail, error, setError, setLoading, setUserInfos, setVisible }) {
  const validateEmail = Yup.object({
    email:Yup.string()
    .required("Email Address is required.")
    .email("Must be a valid email address.")
    .max(50, "Email address can't be more than 50 characters.")
  });

  const handleSearch = async() => {
    try {
      setLoading(true);
      const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/findUser`, {email});
      setUserInfos(data);
      setVisible(1);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  }

  return (
    <div className="relative bg-primary shadow-[0_1px_2px] shadow-shadow-1 rounded-[10px] w-[450px] h-fit reset_form">
          <div className="p-[15px] font-semibold text-[24px] border-b-[1px] border-b-solid border-b-third reset_form_header">
            Find Your Account
          </div>
          <div className="p-[15px] text-[17px] reset_form_text">
            Please Enter Your email address or mobile number to search for your account.
          </div>
          <Formik enableReinitialize initialValues={{
            email
          }} validationSchema={validateEmail} onSubmit={()=>{
            handleSearch();
          }}>
            {(formik) => (
              <Form className='flex flex-col items-center'>
                <LoginInput type="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address or Phone Number" />
                {
                  error && <div className="error_text">{error}</div>
                }
                <div className="flex items-center gap-[10px] p-[10px] relative bottom-0 reset_form_btns">
                  <Link to="/login" className='w-[90px] gray-btn'>Cancel</Link>
                  <button type='submit' className='w-[90px] blue-btn'>Search</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
  )
}
