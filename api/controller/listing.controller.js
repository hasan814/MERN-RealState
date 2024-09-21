import Listing from "../model/listing.model.js";

// ================ Create ==================
export const createListing = async (req, res) => {
  try {
    const listing = await Listing.create(req.body);

    res.status(201).json({
      message: "Listing created successfully",
      listing,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating listing",
      error: error.message,
    });
  }
};

// ================ Delete ==================
export const deleteListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    if (listing.userRef.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You are not authorized to delete this listing" });
    }

    await Listing.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: "Listing deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
