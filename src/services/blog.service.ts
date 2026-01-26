import { env } from "@/env";

const API_URL = env.API_URL;

export const blogService = {
  getAllBlogPosts: async function () {
    try {
      const res = await fetch(`${API_URL}/posts`, {
        // cache: "default",       // static (force cache)
        // cache: "no-store",        // dynamic
        next: { revalidate: 5 },      // ISR (static + dynamic)
      });
      const data = await res.json();
    //   if (data.success) {
    //     return { success: true, data: data.data, error: null };
    //   }else {
    //     return { success: false, data: null, error: data.error };
    //   }
    return { success: true, data: data.data, error: null };
    } catch (error) {
      return { success: false, data: null, error: error };
    }
  },
};
