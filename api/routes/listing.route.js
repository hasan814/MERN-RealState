import verifyToken from "../utils/verifyToken.js";
import express from "express";

import {
  getListing,
  createListing,
  deleteListing,
  updateListing,
  getListings,
} from "../controller/listing.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/get/:id", getListing);
router.get("/get", getListings);

export default router;
