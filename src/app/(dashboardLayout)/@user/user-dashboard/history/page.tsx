import React from "react";
import HistoryTable from "@/components/modules/user/history/HistoryTable";
import { blogService } from "@/services/blog.service";
import PaginationControls from "@/components/ui/pagination-controls";

export default async function HistoryPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string, limit: string }>;
}) {
  const {page, limit} = await searchParams;

  const { data, pagination } = await blogService.getAllBlogPosts({page, limit});
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Blog Post History</h1>
      <HistoryTable blogs={data} pagination={{page, limit}} />
      <PaginationControls meta={pagination || {page: 1, limit: 5, total: 0, totalPages: 1}} />
    </div>
  );
}
