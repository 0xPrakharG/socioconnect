import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Cookies from 'js-cookie';
import { useState } from 'react';
import SearchAccount from './SearchAccount';
import SendEmail from './SendEmail';
import CodeVerification from './CodeVerification';
import ChangePassword from './ChangePassword';
import "./styles.css";

export default function Reset() {
  const {user} = useSelector((state) => ({...state}));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible,setVisible] = useState(0);
  const [loading,setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conf_password, setConf_password] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [userInfos, setUserInfos] = useState('');

  const logout = () => {
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
        {visible === 0 && (
          <SearchAccount email={email} setEmail={setEmail} error={error} setError={setError} setLoading={setLoading} setUserInfos={setUserInfos} setVisible={setVisible} />
        )}
        {visible === 1 && userInfos && (
          <SendEmail email={email} userInfos={userInfos} error={error} setError={setError} setLoading={setLoading} setUserInfos={setUserInfos} setVisible={setVisible} />
        )}
        {visible === 2 && (
          <CodeVerification user={user} code={code} setCode={setCode} error={error} setError={setError} setLoading={setLoading} userInfos={userInfos} setVisible={setVisible} />
        )}
        {visible === 3 && (
          <ChangePassword password={password} setPassword={setPassword} conf_password={conf_password} setConf_password={setConf_password} error={error} setError={setError} setLoading={setLoading} userInfos={userInfos} setVisible={setVisible} />
        )}
      </div>
    </div>
  )
}
