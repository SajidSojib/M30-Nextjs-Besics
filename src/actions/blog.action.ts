"use server"

import { blogService } from "@/services/blog.service"

export const getAllBlogPosts = async() => {
    return blogService.getAllBlogPosts();
}