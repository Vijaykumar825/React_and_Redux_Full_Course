import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListDate } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListDate);
  console.log(postList);

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
