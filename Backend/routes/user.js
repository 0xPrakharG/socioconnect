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
router.get("/addFriend/:id", authUser, addFriend);
router.get("/cancelRequest/:id", authUser, cancelRequest);
router.get("/follow/:id", authUser, follow);
router.get("/unfollow/:id", authUser, unfollow);
router.get("/acceptRequest/:id", authUser, acceptRequest);
router.get("/unfriend/:id", authUser, unfriend);
router.get("/deleteRequest/:id", authUser, deleteRequest);


module.exports = router;