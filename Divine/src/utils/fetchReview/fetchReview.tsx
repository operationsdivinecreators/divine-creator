import axios from "axios";

export const getGoogleReviews = async () => {
  try {
    const res = await axios.get("/data/reviews.json");

    const reviews = res.data?.reviews ?? [];

    return reviews.map((item: any) => ({
      reviewId: item.name,
      author: item.authorAttribution?.displayName || "Google User",
      text: item.text?.text || "",
      rating: item.rating || 5,
      profilePhoto:
        item.authorAttribution?.photoUri || "/assets/images/user.png",
      time: item.relativePublishTimeDescription || "",
      googleMapsUri: item.authorAttribution?.uri || "#",
      flagContentUri: "",
    }));
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
};
