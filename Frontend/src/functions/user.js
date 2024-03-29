import axios from "axios";

export const addFriend = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/addFriend/${id}`,
      {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    );
  return "ok";
  } catch (error) {
    return error.response.data.message;
  }
}
export const cancelRequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/cancelRequest/${id}`,
      {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    );
  return "ok";
  } catch (error) {
    return error.response.data.message;
  }
}
export const follow = async (id, token) => {
  try {
    const { data } = await axios.put (
      `${process.env.REACT_APP_BACKEND_URL}/follow/${id}`,
      {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    );
  return "ok";
  } catch (error) {
    return error.response.data.message;
  }
}
export const unfollow = async (id, token) => {
  try {
    const { data } = await axios.put (
      `${process.env.REACT_APP_BACKEND_URL}/unfollow/${id}`,
      {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    );
  return "ok";
  } catch (error) {
    return error.response.data.message;
  }
}
export const acceptRequest = async (id, token) => {
  try {
    const { data } = await axios.put (
      `${process.env.REACT_APP_BACKEND_URL}/acceptRequest/${id}`,
      {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    );
  return "ok";
  } catch (error) {
    return error.response.data.message;
  }
}
export const unfriend = async (id, token) => {
  try {
    const { data } = await axios.put (
      `${process.env.REACT_APP_BACKEND_URL}/unfriend/${id}`,
      {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    );
  return "ok";
  } catch (error) {
    return error.response.data.message;
  }
}
export const deleteRequest = async (id, token) => {
  try {
    const { data } = await axios.put (
      `${process.env.REACT_APP_BACKEND_URL}/deleteRequest/${id}`,
      {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    );
  return "ok";
  } catch (error) {
    return error.response.data.message;
  }
}