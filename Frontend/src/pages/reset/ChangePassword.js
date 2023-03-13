import {Form, Formik} from "formik";
import {Link, useNavigate} from 'react-router-dom';
import LoginInput from '../../components/inputs/loginInput';
import * as Yup from "yup";
import axios from "axios";

export default function ChangePassword({ password, setPassword, conf_password, setConf_password, error, setError, setLoading, userInfos, setVisible }) {
  const navigate = useNavigate();
  const validatePassword = Yup.object({
    password: Yup.string().required("Password is required").min(6, "Password must be atleast 6 characters").max(36, "Password must be atleast 6 characters"),
    conf_password: Yup.string().required("Confirm your password.").oneOf([Yup.ref("password")], "Passwords must match.")
  });
  const { email } = userInfos;
  const changePassword = async() => {
    try {
      setLoading(true);
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/changePassword`, 
      { email,password });
      setError("");
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  }
  return (
    <div className="relative bg-primary shadow-[0_1px_2px] shadow-shadow-1 rounded-[10px] w-[450px] h-fit reset_form">
          <div className="p-[15px] font-semibold text-[24px] border-b-[1px] border-b-solid border-b-third reset_form_header">
            Change Password
          </div>
          <div className="p-[15px] text-[17px] reset_form_text">
            Pick a strong password.
          </div>
          <Formik enableReinitialize initialValues={{
            password,
            conf_password,
          }} validationSchema={validatePassword}
          onSubmit={() => {changePassword()}}>
            {(formik) => (
              <Form className='flex flex-col items-center'>
                <LoginInput type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="New Password" />
                <LoginInput type="password" name="conf_password" onChange={(e)=>setConf_password(e.target.value)} placeholder="Confirm New Password" />
                {
                  error && <div className="error_text">{error}</div>
                }
                <div className="flex items-center gap-[10px] p-[10px] relative bottom-0 reset_form_btns">
                  <Link to="/login" className='w-[90px] gray-btn'>Cancel</Link>
                  <button type='submit' className='w-[90px] blue-btn'>Continue</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
  )
}
