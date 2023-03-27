import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CreatePost from "../../components/createPost";
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import RightHome from "../../components/home/right";
import Stories from "../../components/home/stories";
import ActivateForm from "./ActivateForm";
import "./styles.css";
import Cookies from "js-cookie";

export default function Activate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((user) => ({ ...user }));
  const [activate, setActivate] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { token } = useParams();
  useEffect(() => {
    activateAccount();
  }, []);
  const activateAccount = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/activate`,
        { token },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setActivate(true);
      setSuccess(data.message);
      Cookies.set("user", JSON.stringify({ ...user, verified: true }));
      dispatch({
        type: "VERIFY",
        payload: true,
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div>
      <div className="min-h-[100vh] bg-secondary grid">
        {activate ? (
          <ActivateForm
            type="success"
            header="Account Activation Succeeded"
            text={success}
            loading={loading}
          />
        ) : (
          <ActivateForm
            type="error"
            header="Account Activation failed"
            text={error}
            loading={loading}
          />
        )}
        {success && (
          <ActivateForm
            type="success"
            header="Account Activation Succeeded"
            text={success}
            loading={loading}
          />
        )}
        {error && (
          <ActivateForm
            type="error"
            header="Account Activation failed"
            text={error}
            loading={loading}
          />
        )}
        <Header />
        <LeftHome user={user} />
        <div className="absolute mt-[75px] left-[50%] translate-x-[-50%] home_middle">
          <Stories />
          <CreatePost user={user} />
        </div>
      </div>
      <RightHome user={user} />
    </div>
  );
}
