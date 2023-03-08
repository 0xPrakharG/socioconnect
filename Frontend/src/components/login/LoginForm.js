import { Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import LoginInput from "../../components/inputs/loginInput";
import HashLoader from "react-spinners/HashLoader";
import axios from "axios";
import {useDispatch} from "react-redux";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

const loginInfos = {
  email:"",
  password:"",
};

export default function LoginForm({setVisible}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({...login, [name]: value})
  };

  const loginValidation = Yup.object({
    email: Yup.string().required("Email address is required.").email("Must be a valid email."),
    password: Yup.string().required("Password is Required.")
  })

  const [error,setError] = useState("");
  // const [success,setSuccess] = useState("");
  const [loading,setLoading] = useState(false);

  const loginSubmit = async() => {
      try {
        setLoading(true);
        const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
          email,
          password,        
        });
        setError("");
        // setSuccess(data.message);
        // const {message, ...rest} = data;
          dispatch({type:'LOGIN', payload:data});
          Cookies.set("user", JSON.stringify(data));
          navigate("/");
      } catch (error) {
        setLoading(false);
        // setSuccess("");
        setError(error.response.data.message);
      }
  };

  return (
    <div className="h-[78vh] text-primary-color md:flex md:items-center md:max-w-[1000px] md:my-0 md:mx-auto md:py-0 md:px-[1rem]">
          <div className="w-[300px] mx-auto my-0 md:flex md:flex-col md:w-[50%] md:mb-[25vh]">
            <img src="../../icons/sc.png" className="w-[400px] ml-[-1rem]" alt="" />
            <span className="text-[17px] md:text-[20px]">
              SocioConnect helps you connect and share with people in your life.
            </span>
          </div>
          <div className="text-center">
            <div className="flex flex-col items-center gap-[1rem] bg-primary shadow-[0_1px_2px] shadow-shadow-1 p-[1rem] pb-[2rem] w-[350px] my-[1rem] mx-auto h-fit select-none rounded-[10px] md:w-[400px]">
              <Formik 
              enableReinitialize
              initialValues={{
                email,
                password,
              }}
              validationSchema={loginValidation}
              onSubmit = {() => {
                loginSubmit();
              }}
              >
                {(formik) => (
                  <Form>
                    <LoginInput type="text" name="email" placeholder="Email address or phone number" onChange={handleLoginChange} />
                    <LoginInput type="password" name="password" placeholder="Password" onChange={handleLoginChange} bottom />
                    
                    <button type="submit" className="w-[100%] h-[50px] text-[17px] font-bold blue-btn">Log In</button>
                  </Form>
                )}
              </Formik>
              <Link to="/reset" className="text-blue-color cursor-pointer text-[14px] hover:underline">Forgot Password?</Link>
              <HashLoader loading={loading} color="#534741" size={30} />
              {error && <div className="text-[#b94a48]">{error}</div>}
              <div className="w-[100%] h-[1px] bg-third"></div>
              <button className="important blue-btn w-[70%] h-[50px] text-[17px] font-semibold mt-[1rem] bg-green-color" onClick={() => setVisible(true)}>Create Account</button>
            </div>
            <Link to="/" className="text-[15px]"><b>Create A Page</b> for a celebrity, brand or business.</Link>
          </div>
        </div>
  )
}
