// "use client"

// import { useParams } from 'next/navigation'
import React from "react";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  // const blogId = params.blogId
  // const {blogId} = useParams();           //! make the page client componet

  const { blogId } = await params;
  return (
    <div>BlogPage for {blogId}</div>
  );
}
