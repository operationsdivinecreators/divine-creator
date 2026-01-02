import axios from "axios";

const STRAPI_URL = "http://localhost:1337";

export const getBlogs = async () => {
  try {
    const res = await axios.get('/data/portfolios.json');
    return res.data.data.map((item: any) => ({

      id: item.id,
      documentId: item.documentId,
      Title: item.title,
      Description: item.description,
      slug: item.slug,
      images:
        item.images?.map((img: any) => ({
          id: img.id,
          name: img.name,
          url: img.url.startsWith("http")
            ? img.url
            : `${STRAPI_URL}${img.url}`,
        })) || [],


      category: item.categories?.map((cat: any) => ({
        id: cat.id,
        Title: cat.name,
        slug: cat.slug,
      })) || [],
    }));
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return [];
  }
};

export const getSingleBlog = async (id: number) => {
  try {
    const blogs = await getBlogs();
    const item = blogs.find((b: any) => String(b.documentId) === String(id));
    if (!item) return null;

    return {
      id: item.id,
      Title: item.Title,
      Description: item.Description,
      slug: item.slug,
      CoverImage: item.CoverImage,
      category: item.category?.Title || "Uncategorized",
      createdAt: item.createdAt,
    };
  } catch (err) {
    console.error("Error fetching blog:", err);
    return null;
  }
};



export const getCategories = async () => {
  try {
    const res = await axios.get('/data/categories.json');
    return res.data.data.map((item: any) => ({
      id: item.id,
      Title: item.name,
      slug: item.slug,
    }));

  } catch (err) {
    console.error("Error fetching categories:", err);
    return [];
  }
};
