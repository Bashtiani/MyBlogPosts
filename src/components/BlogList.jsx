import { useState } from "react";
import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [postsPerPage, setPostsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState(
    blogs.posts.slice(0, 15)
  );

  const updateRowsPerPage = (size) => {
    setPostsPerPage(parseInt(size));
    setCurrentPage(1); //displays the first page
    setCurrentPageData(blogs.posts.slice(0, parseInt(size)));
  };
  const updatePage = (newPage, size) => {
    const endIndex = newPage * size;
    const startIndex = endIndex - size;
    setCurrentPage(newPage);
    setCurrentPageData(blogs.posts.slice(startIndex, endIndex));
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={postsPerPage}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not modify the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPageData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
