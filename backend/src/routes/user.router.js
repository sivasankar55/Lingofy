 import express from "express";
import {protectedRoute} from "../middleware/auth.middleware.js";
import { getFriends, getRecommendedUsers, sendFriendRequest, acceptFriendRequest, getFriendRequests, getOutgoingFriendReqs } from "../controllers/user.controller.js";
 const router = express.Router();

 //apply auth middleware to all routes
 router.use(protectedRoute);

 router.get("/",getRecommendedUsers);
 router.get("/friends",getFriends);

 router.post("/friend-request/:id", sendFriendRequest);
 router.put("/friend-request/:id/accept", acceptFriendRequest);

 router.get("/friend-requests", getFriendRequests);

 router.get("/outgoing-friend-requests", getOutgoingFriendReqs);

 export default router;  