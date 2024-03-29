const express = require("express");
const { register, activateAccount, login, sendVerification, findUser, sendResetPasswordCode, validateResetCode, changePassword, getProfile, addFriend, cancelRequest, follow, unfollow, acceptRequest, unfriend, deleteRequest } = require( "../controllers/user" );
const { authUser } = require( "../middleware/auth" );

const router = express.Router();

router.post("/register", register);
router.post("/activate", authUser, activateAccount);
router.post("/login",login);
router.post("/sendVerification", authUser, sendVerification);
router.post("/findUser", findUser);
router.post("/sendResetPasswordCode", sendResetPasswordCode);
router.post("/validateResetCode", validateResetCode);
router.post("/changePassword", changePassword);
router.get("/getProfile/:username", authUser, getProfile);
router.put("/addFriend/:id", authUser, addFriend);
router.put("/cancelRequest/:id", authUser, cancelRequest);
router.put("/follow/:id", authUser, follow);
router.put("/unfollow/:id", authUser, unfollow);
router.put("/acceptRequest/:id", authUser, acceptRequest);
router.put("/unfriend/:id", authUser, unfriend);
router.put("/deleteRequest/:id", authUser, deleteRequest);


module.exports = router;