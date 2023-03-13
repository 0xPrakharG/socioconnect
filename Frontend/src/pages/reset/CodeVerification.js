import {Form, Formik} from "formik";
import {Link} from 'react-router-dom';
import LoginInput from '../../components/inputs/loginInput';
import * as Yup from "yup";
import axios from "axios";


export default function CodeVerification({ code, setCode, error, setError, setLoading, userInfos, setVisible }) {
  const validateCode = Yup.object({
    code:Yup.string().required("Code is required.").min(5, "Code must be 5 characters.").max(5, "Code must be 5 characters.")
  });
  const { email } = userInfos;
  const verifyCode = async() => {
    try {
      setLoading(true);
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/validateResetCode`, 
      { email, code }
      );
      setVisible(3);
      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  }
  return (
    <div className="relative bg-primary shadow-[0_1px_2px] shadow-shadow-1 rounded-[10px] w-[450px] h-fit reset_form">
          <div className="p-[15px] font-semibold text-[24px] border-b-[1px] border-b-solid border-b-third reset_form_header">
            Code Verification
          </div>
          <div className="p-[15px] text-[17px] reset_form_text">
            Please enter the text that has been sent to your email.
          </div>
          <Formik enableReinitialize initialValues={{
            code,
          }} validationSchema={validateCode} onSubmit={() => {verifyCode()}}>
            {(formik) => (
              <Form className='flex flex-col items-center'>
                <LoginInput type="text" name="code" onChange={(e)=>setCode(e.target.value)} placeholder="Code" />
                {
                  error && <div className="error_text">{error}</div>
                }
                <div className="flex items-center gap-[10px] relative p-[10px] bottom-0 reset_form_btns">
                  <Link to="/login" className='w-[90px] gray-btn'>Cancel</Link>
                  <button type='submit' className='w-[90px] blue-btn'>Continue</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
  )
}
