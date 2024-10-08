import express from "express";

import {
  test,
  getUser,
  updateUser,
  deleteUser,
  getUserListings,
} from "../controller/user.controller.js";

import verifyToken from "../utils/verifyToken.js";

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings);
router.get("/:id", verifyToken, getUser);

export default router;
