import { Formik, Form } from "formik";
import { useState } from "react";
import RegisterInput from "../inputs/registerInput";
import * as Yup from "yup";
import DateOfBirthSelect from "./DateOfBirthSelect";
import GenderSelect from "./GenderSelect";
import HashLoader from "react-spinners/HashLoader";
import axios from "axios";
import {useDispatch} from "react-redux";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

export default function RegisterForm({setVisible}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfos = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: "",
  }
  const [user,setUser] = useState(userInfos);

  const {
    first_name,
    last_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  } = user;

  const yearTemp = new Date().getFullYear();
  const handleRegisterChange = (e) => {
    const {name,value} = e.target;
    setUser({...user, [name]:value});
  }
  
  const years = Array.from(new Array(108),(val, index) => yearTemp - index);
  const months = Array.from(new Array(12),(val, index) => 1 + index);
  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate();
  }
  const days = Array.from(new Array(getDays()),(val, index) => 1 + index);

  const registerValidation = Yup.object({
    first_name: Yup.string().required("What's your First Name?").min(2, "First Name must be between 2 and 16 characters").max(16, "First Name must be between 2 and 16 characters").matches(/^[aA-zZ\s]+$/, "Numbers and special Character are not allowed"),
    last_name: Yup.string().required("What's your Last Name?").min(2, "Last Name must be between 2 and 16 characters").max(16, "Last Name must be between 2 and 16 characters").matches(/^[aA-zZ]+$/, "Numbers and special Character are not allowed"),
    email: Yup.string().required("You will require this when you try to login or when you need to change your password.").email("Enter a valid Email Address."),
    password: Yup.string().required("Password must contain atleast 6 characters, 1 special charater, 1 number, letters").min(6, "First Name must be between 6 and 36 characters").max(36, "First Name must be between 6 and 36 characters"),
  })

  const [dateError, setDateError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [error,setError] = useState("");
  const [success,setSuccess] = useState("");
  const [loading,setLoading] = useState(false);

  const registerSubmit = async() => {
    try {
      setLoading(true);
      const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, {
        first_name,
        last_name,
        email,
        password,
        bYear,
        bMonth,
        bDay,
        gender,
      });
      setError("");
      setSuccess(data.message);
      const {message, ...rest} = data;
      setTimeout(() => {
        dispatch({type:'LOGIN', payload:rest});
        Cookies.set("user", JSON.stringify(rest));
        navigate("/");
      }, 2000);
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };
  return (
    <div>
      <div className="bg-blur absolute top-0 left-0 h-[100%] w-[100%]">
      <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-primary shadow-[0_1px_2px] shadow-shadow-1 rounded-[10px] p-[15px] pb-[1rem] w-[350px] h-fit text-primary-color lg:w-[400px] ">
        <div className="relative flex flex-col gap-[10px] pb-[10px] border-b-[1px] border-b-solid border-b-third">
          <i className="exit_icon absolute right-0 cursor-pointer" onClick={() => setVisible(false)}></i>
          <span className="text-[32px] font-bold">Sign Up</span>
          <span className="text-[15px] text-secondary-color">It's quick and easy</span>
        </div>
        <Formik
        enableReinitialize
        initialValues={{
          first_name,
          last_name,
          email,
          password,
          bYear,
          bMonth,
          bDay,
          gender,
        }}
        validationSchema={registerValidation}
        onSubmit={() => {
          let current_date = new Date();
          let picked_date = new Date(bYear, bMonth - 1, bDay);
          let atleast14 = new Date(1970 + 14, 0, 1);
          let noMoreThan70 = new Date(1970 + 70, 0, 1);
          if(current_date - picked_date < atleast14){
            setDateError("It looks like you have entered the wrong information. Please make sure you are entering your real date of birth.")
          }
          else if(current_date - picked_date > noMoreThan70){
            setDateError("It looks like you have entered the wrong information. Please make sure you are entering your real date of birth.")
          }
          else{
            setDateError("");
          }
          if (gender === ''){
            setGenderError("Please choose a gender. You can change who can see this later.");
          }
          else{
            setGenderError("");
            registerSubmit();
          }
        }}
        >
          {
            (formik) => (
              <Form className="w-[100%] flex flex-col items-center">
                <div className="reg_line lg:w-[370px]">
                  <RegisterInput type="text" placeholder="First Name" name="first_name" first onChange={handleRegisterChange} />
                  <RegisterInput type="text" placeholder="Last Name" name="last_name" last onChange={handleRegisterChange} />
                </div>
                <div className="reg_line">
                  <RegisterInput type="text" placeholder="Mobile Number or Email Address" name="email" email onChange={handleRegisterChange} />
                </div>
                <div className="reg_line">
                  <RegisterInput type="password" placeholder="New Password" name="password" pass onChange={handleRegisterChange} />
                </div>
                <DateOfBirthSelect bDay={bDay} bMonth={bMonth} bYear={bYear} days={days} months={months} years={years} handleRegisterChange={handleRegisterChange} dateError={dateError} />
                <GenderSelect handleRegisterChange={handleRegisterChange} genderError={genderError} />
                <div className="text-[11px] mt-[10px] text-secondary-color">
                  By clicking Sign Up, you agree to our {" "}
                  <span className="text-blue-color">Terms, Data Policy &nbsp;</span>
                  and <span className="text-blue-color">Cookie Policy.</span> You may recieve SMS 
                  notifications from us and can opt out at any time.
                </div>
                <div className="w-[100%] flex items-center justify-center mt-[20px] mx-0 mb-[10px]">
                  <button className="blue-btn bg-green-color w-[70%] h-[50px] text-[17px] font-bold">Sign Up</button>
                </div>
                <HashLoader loading={loading} color="#534741" size={30} />
                {error && <div className="text-[#b94a48]">{error}</div>}
                {success && <div className="text-green-color">{success}</div>}
            </Form>
            )}
        </Formik>
      </div>
      </div>
    </div>
  )
}
